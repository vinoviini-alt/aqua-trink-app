const CACHE="aqua-static-v1";
const FILES=["./","./index.html","./manifest.webmanifest","./icons/aqua-192.png","./icons/aqua-512.png"];
self.addEventListener("install",event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener("activate",event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener("fetch",event=>{if(event.request.method==="GET")event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request)));});
