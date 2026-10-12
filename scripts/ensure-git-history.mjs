// I build su Cloudflare Pages partono da un clone shallow (depth 1): senza
// storia il tag di rilascio non è visibile e la versione degrada. Completa la
// storia quando serve; se non è possibile si resta sul fallback di version.mjs.
import { execFileSync } from 'node:child_process';

/**
 * @param {string[]} args
 * @returns {string}
 */
function git(args) {
	return execFileSync('git', args, {
		encoding: 'utf8',
		stdio: ['ignore', 'pipe', 'ignore']
	});
}

try {
	if (git(['rev-parse', '--is-shallow-repository']).trim() === 'true') {
		git(['fetch', '--unshallow', '--tags']);
	}
} catch {
	// git assente o fetch non disponibile: nessuna azione
}
