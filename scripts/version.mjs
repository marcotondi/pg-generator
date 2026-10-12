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
		const described = git(['describe', '--tags', '--long', '--dirty', '--always', '--match', 'v*']);
		const tagged = /^v(\d+)\.(\d+)\.(\d+)-(\d+)-g([0-9a-f]+)(-dirty)?$/.exec(described);
		const dirty = described.endsWith('-dirty') ? '.dirty' : '';

		if (!tagged) {
			const count = git(['rev-list', '--count', 'HEAD']);
			const sha = git(['rev-parse', '--short', 'HEAD']);
			return `0.1.0-${count}.g${sha}${dirty}`;
		}

		const [, major, minor, patch, count, sha] = tagged;
		if (count === '0') return `${major}.${minor}.${patch}${dirty ? '-dirty' : ''}`;
		return `${major}.${minor}.${Number(patch) + 1}-${count}.g${sha}${dirty}`;
	} catch {
		return JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')).version;
	}
}
