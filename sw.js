// Talibenah Weather service worker — offline app shell + cached last data.
const CACHE = "talibenah-v1";

const SHELL = [
  "./",
  "index.html",
  "app.js",
  "styles.css",
  "manifest.webmanifest",
  "data/landmarks.json",
  "assets/talibenah-mountain.png",
  "assets/weather/clear.svg",
  "assets/weather/partly-cloudy.svg",
  "assets/weather/cloudy.svg",
  "assets/weather/fog.svg",
  "assets/weather/rain.svg",
  "assets/weather/thunder.svg",
  "assets/weather/snow.svg",
  "assets/icons/favicon-32.png",
  "assets/icons/apple-touch-icon-180.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") {
    return;
  }

  const sameOrigin = new URL(request.url).origin === self.location.origin;

  if (sameOrigin) {
    // App shell: cache-first, refresh in background.
    event.respondWith(
      caches.match(request).then((cached) => {
        const network = fetch(request)
          .then((response) => {
            if (response.ok) {
              const copy = response.clone();
              caches.open(CACHE).then((cache) => cache.put(request, copy));
            }
            return response;
          })
          .catch(() => cached);
        return cached || network;
      }),
    );
    return;
  }

  // Remote data (weather, air quality, landmark images): network-first, fall back to cache.
  event.respondWith(
    fetch(request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE).then((cache) => cache.put(request, copy));
        return response;
      })
      .catch(() => caches.match(request)),
  );
});
