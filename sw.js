// 現場で電波が弱くても開けるように、アプリ本体をキャッシュする
const CACHE = 'genchi-navi-v33';
const FILES = ['./', './index.html', './manifest.json', './icon.svg', './logo.png', './hero.jpg'];
const LIBS = ['./img/toilet.jpg','./img/bath.jpg','./img/wash.jpg','./img/kitchen.jpg','./img/door.jpg','./img/floor.jpg','./img/cloth.jpg','./img/exterior.jpg','./img/leak.jpg','./img/fence.jpg','./img/window.jpg','./img/entrance.jpg','./img/balcony.jpg','./img/carport.jpg','./img/parking.jpg','./img/boiler.jpg','./img/ecocute.jpg','./img/washitsu.jpg','./img/bathx.jpg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES).then(() => Promise.all(LIBS.map(u => c.add(u).catch(() => {}))))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(res => {
      if (res.ok && (new URL(e.request.url).origin === location.origin || LIBS.includes(e.request.url))) {
        const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
