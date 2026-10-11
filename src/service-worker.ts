/// <reference types="@sveltejs/kit" />
/// <reference lib="webworker" />
import { build, files, version } from '$service-worker';

const CACHE = `pg-generator-${version}`;
const ASSETS = [...build, ...files];

self.addEventListener('install', (event) => {
	event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		(async () => {
			const keys = await caches.keys();
			await Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)));
			await self.clients.claim();
		})()
	);
});

self.addEventListener('message', (event) => {
	if ((event.data as { type?: string } | null)?.type === 'SKIP_WAITING') {
		self.skipWaiting();
	}
});

const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('fetch', (event) => {
	// I font di Google sono cross-origin: li mettiamo in cache al primo uso,
	// così restano disponibili anche offline.
	const url = new URL(event.request.url);
	if (FONT_HOSTS.includes(url.hostname)) {
		event.respondWith(
			caches.open(CACHE).then(async (cache) => {
				const cached = await cache.match(event.request);
				if (cached) return cached;
				const response = await fetch(event.request);
				if (response.ok || response.type === 'opaque') {
					cache.put(event.request, response.clone());
				}
				return response;
			})
		);
		return;
	}

	event.respondWith(caches.match(event.request).then((cached) => cached ?? fetch(event.request)));
});
