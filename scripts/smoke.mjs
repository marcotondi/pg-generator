// Smoke test dei motori di generazione, eseguito con `npm run smoke`.
// Carica i moduli via Vite (così gli alias $lib e il TypeScript sono risolti)
// e fallisce se la generazione produce campi vuoti o chiavi non risolte.
import { createServer } from 'vite';

const KEY_RE = /^(characterGenerator|page)\./;

function walk(value, onString) {
	if (typeof value === 'string') return onString(value);
	if (Array.isArray(value)) return value.forEach((v) => walk(v, onString));
	if (value && typeof value === 'object') return Object.values(value).forEach((v) => walk(v, onString));
}

const problems = new Set();
const fail = (msg) => problems.add(msg);

const server = await createServer({
	server: { middlewareMode: true },
	appType: 'custom',
	logLevel: 'error'
});

try {
	// --- PirateBorg ---
	const { generatePirate } = await server.ssrLoadModule(
		'/src/lib/games/pirateborg/engine/index.ts'
	);
	const pirateClasses = new Set();
	const pirateProfessions = new Set();
	for (let i = 0; i < 3000; i++) {
		const c = generatePirate({ optionalClasses: i % 2 === 0 });
		walk(c, (s) => {
			if (s.trim() === '') fail('pirateborg: stringa vuota');
			if (s.includes('undefined') || s.includes('NaN')) fail(`pirateborg: ${s}`);
		});
		if (!c.classData) fail('pirateborg: classData null');
		if (!c.classTrait) fail('pirateborg: classTrait mancante');
		if (c.hp <= 0 || c.hpMax <= 0) fail('pirateborg: PF <= 0');
		if (c.attributes.length !== 5) fail('pirateborg: abilità != 5');
		if (c.classData) pirateClasses.add(c.classData.name);
		pirateProfessions.add(c.background.profession);
	}
	if (pirateClasses.size < 7) fail(`pirateborg: poca varietà classi (${pirateClasses.size})`);
	if (pirateProfessions.size < 30) fail('pirateborg: poca varietà professioni');

	// --- Rōnin ---
	const { generateCharacter } = await server.ssrLoadModule('/src/lib/games/ronin/engine/index.ts');
	const { classFeatures } = await server.ssrLoadModule(
		'/src/lib/games/ronin/engine/data/classes.ts'
	);
	const { it } = await server.ssrLoadModule('/src/lib/games/ronin/engine/data/it.ts');
	const roninNames = new Set();
	let noneHonour = 0;
	let honourableHonour = 0;
	for (let i = 0; i < 3000; i++) {
		const state = i % 2 === 0 ? 'none' : 'honourable';
		const c = generateCharacter(state);
		walk(c, (s) => {
			if (KEY_RE.test(s) && it(s) === s) fail(`ronin: chiave non risolta ${s}`);
			if (s.trim() === '') fail('ronin: stringa vuota');
		});
		const expected = classFeatures[c.class].weapons.length;
		if (c.classWeapons.length !== expected) fail(`ronin: armi ${c.classWeapons.length} ≠ ${expected}`);
		const hasText = !!c.unseenText || !!c.shintaiText;
		if (hasText && c.armor.tier > 1) fail(`ronin: Testo con armatura Tier ${c.armor.tier}`);
		if (!hasText && c.class === 'eruditeSamurai' && c.armor.tier !== 2) fail('ronin: Erudite non Tier 2');
		if (!hasText && c.class === 'swordSaint' && c.armor.tier !== 3) fail('ronin: SwordSaint non Tier 3');
		if (c.class === 'yamabushi' || c.class === 'onmyoji') {
			if (!hasText) fail(`ronin: ${c.class} senza Testo`);
		}
		for (const item of c.equipment) {
			const m = item.match(/Spirito\+(\d+)/);
			if (m && m[1] !== '4' && m[1] !== '6') fail(`ronin: formula corrotta ${item}`);
		}
		roninNames.add(c.firstName + c.lastName);
		if (state === 'none') noneHonour += c.abilities.honour;
		else honourableHonour += c.abilities.honour;
	}
	const noneMean = noneHonour / 1500;
	const honMean = honourableHonour / 1500;
	if (Math.abs(noneMean - honMean) > 0.4) fail(`ronin: Onore risente dello stato (${noneMean} vs ${honMean})`);
	if (roninNames.size < 200) fail('ronin: poca varietà nomi');
} finally {
	await server.close();
}

if (problems.size > 0) {
	console.error('SMOKE FALLITO:');
	for (const p of problems) console.error('  - ' + p);
	process.exit(1);
}
console.log('Smoke OK: PirateBorg e Rōnin generano personaggi completi e coerenti.');
