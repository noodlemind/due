const SHELL = ["/index.html", "/manifest.webmanifest", "/icon.svg"];
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open("due-shell").then((cache) => cache.addAll(SHELL)));
  self.skipWaiting();
});
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(
    fetch(event.request).then((res) => {
      const copy = res.clone();
      caches.open("due-shell").then((cache) => cache.put(event.request, copy));
      return res;
    }).catch(() => caches.match(event.request).then((hit) => hit || caches.match("/index.html")))
  );
});
