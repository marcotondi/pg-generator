// Versione SemVer dalla storia git (convenzione GitVersion), calcolata a build-time.
// Tag di rilascio: vMAJOR.MINOR.PATCH. Fallback: version di package.json.
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

/**
 * @param {string[]} args
 * @returns {string}
 */
function git(args) {
	return execFileSync('git', args, {
		cwd: root,
		encoding: 'utf8',
		stdio: ['ignore', 'pipe', 'ignore']
	}).trim();
}

/**
 * @returns {string}
 */
export function getVersion() {
	try {
		// Match esatto sulla forma vMAJOR.MINOR.PATCH: un tag qualsiasi (es. v9zzz) non deve diventare la base.
		const described = git(['describe', '--tags', '--long', '--dirty', '--always', '--match', 'v[0-9]*.[0-9]*.[0-9]*']);
		const isDirty = described.endsWith('-dirty');
		const cleanDesc = isDirty ? described.slice(0, -6) : described;
		const dirtySuffix = isDirty ? '+dirty' : '';
		const tagged = /^v(\d+)\.(\d+)\.(\d+)-(\d+)-g([0-9a-f]+)$/.exec(cleanDesc);

		if (!tagged) {
			const count = git(['rev-list', '--count', 'HEAD']);
			const sha = git(['rev-parse', '--short', 'HEAD']);
			return `0.1.0-dev.${count}.g${sha}${dirtySuffix}`;
		}

		const [, major, minor, patch, count, sha] = tagged;
		if (count === '0') return `${major}.${minor}.${patch}${dirtySuffix}`;
		return `${major}.${minor}.${Number(patch) + 1}-dev.${count}.g${sha}${dirtySuffix}`;
	} catch {
		return JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')).version;
	}
}
