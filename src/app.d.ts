// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	/** Versione SemVer della build corrente (git describe), iniettata da Vite. */
	const __APP_VERSION__: string;

	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
