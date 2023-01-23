'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "73d268da5d238490d8e7ae6c68d95373",
".git/config": "615c9f8a4b1f3438c62631ced94a2f66",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f2915244b46917818c28575f7ea73ccc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9aa674d842b53a0b5d3b6af2e41e6f8c",
".git/logs/refs/heads/main": "9aa674d842b53a0b5d3b6af2e41e6f8c",
".git/logs/refs/remotes/origin/HEAD": "9dcf5b34e6ced11b85ce62dd87f90704",
".git/logs/refs/remotes/origin/main": "1e8b98fa1cbc528daa02398fb8e40ab4",
".git/objects/01/9d3cdc17053f213028ca4f148738280fc8bf4c": "1a82696111ceaaa15d6ca6186de0ae8c",
".git/objects/0b/cf12018ef7fe493120fcdebe8b5b8191c9777e": "dcfaa0d4b46718fa688a89b49f2b8ecb",
".git/objects/11/224e7cbe16bd6c98566e71a5bb6bdb0b1335c5": "bab4463d8cf27cbd42e02a4cce9765b1",
".git/objects/22/ce93687a8720f5ebb28a9d9a104a4bb11a9341": "532989c16cc221e94323378018749d0d",
".git/objects/27/015b91965fdbda48d6bdee05c407255bb04053": "0f3836f0f9248df32b594d17fac467a2",
".git/objects/3e/b00ba5e7dc305117474ad52e4aca76d22ead61": "c2465f219c20c1102e1170a075f75a96",
".git/objects/54/27124daeaefe644c7a1d9995eba5d0a0f5044c": "6023b7723cd3d406ca189ad93c875e6a",
".git/objects/65/70f9a8339e2974cb2d216f7baf3c452721990b": "15e517d3e5b41b907c01a7892979bee6",
".git/objects/6b/de74fe8648a24308aa2534c590c914b219e312": "31a00123e5421ed76aac704e230c3834",
".git/objects/85/b27ab47dcc460f69d51a50cf4a4edf54118f07": "900ce4206549eb7e37249957620e881e",
".git/objects/8c/e6e8c8845fec8f1ea74e5af65069fec9a58cf5": "5978ab801bdb9bbffaa9f0f12300ad33",
".git/objects/9c/4eedfc114eb157792a2d60d5284af52693357e": "1757b1feb7181f349c0318825df46a15",
".git/objects/9d/13d3f693ed597fb85097a6da51c61d605bbf1c": "38f959bc81e48e3fdc0824534935cdfa",
".git/objects/b7/022e7cc872d145acb0c4bf53100a26bcc4a62f": "80264b12f383ecd8d08156caffc3c5b5",
".git/objects/c1/a1c3a77f0a3ecae8ea5f33e35e31990efddd8e": "f0556e21463324b111a6387a829af6c8",
".git/objects/ca/98968f706e25aa678af660a7d8dd328df3a30d": "a2b44232f4ec9e6dbf283145858338c5",
".git/objects/da/c521030efd83e965f3ff3074248ce54dfac5a5": "e1af199c5c836017c87a8f874886f231",
".git/objects/e3/61ddfc1dbb584dfd700dfa04311f556732cbae": "a66573cbb50a29b4b19be4eaf880af9d",
".git/objects/e7/b0c9f904b041c46ff86f28934cf53cbed6ed5e": "11096eb31930031ab120fb26e59e1349",
".git/objects/fe/db9ce2f5d4661f35f205ae185b3b020a15f4e2": "59e47546a1f9c6d161fb70f2718670b9",
".git/objects/pack/pack-ace51be86e4f25341efea43740da2421f0fd5034.idx": "fd15394e94fa0a9345d1c03cff8a42e9",
".git/objects/pack/pack-ace51be86e4f25341efea43740da2421f0fd5034.pack": "1ffe1c5908c09f8415a459ce7fe576ee",
".git/packed-refs": "e209596aa52bb8940809ae4157a59492",
".git/refs/heads/main": "f316ec2f88a9db851f7787231c63c636",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "f316ec2f88a9db851f7787231c63c636",
"assets/AssetManifest.json": "e2d7b6ea56ae163c4da7b5045fc5376f",
"assets/assets/gvt.svg": "4f2d5aee7f4021d13768e73496fa41e5",
"assets/assets/ico.png": "812f66c36728cf65c4c2e40ad94da511",
"assets/assets/icos.png": "87a63ab07ed59da30696c5d51b99863d",
"assets/assets/logo_big.png": "b7c3cc8e2f8715b7b946822ce0a11285",
"assets/assets/sp.png": "bcc6bcb8a8e9917798f1faa04a31da15",
"assets/assets/web_preview.png": "e1cc1b37871589c7d7dd949153c4b1f9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "cf4bdc94b8374166afa839a55c8d428c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "cf51f0145ed508c7203981a6297dfb6c",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "e069e181424052299c5bffb1b300bb13",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"CNAME": "e468f24f046d68bd6553b6911088164b",
"favicon.png": "c12f4cb2941cae18abb7ab1c2a7a18ba",
"flutter.js": "db931120412af26cc1511fa058afaf0a",
"icons/Icon-192.png": "2b9c4749942d23ff63e7cbe5cbea4f42",
"icons/Icon-512.png": "39a36d308aef21e2d3b09089fc4aa156",
"icons/Icon-maskable-192.png": "2b9c4749942d23ff63e7cbe5cbea4f42",
"icons/Icon-maskable-512.png": "39a36d308aef21e2d3b09089fc4aa156",
"index.html": "576736ba896d3722a0de8e01f64e4621",
"/": "576736ba896d3722a0de8e01f64e4621",
"main.dart.js": "7385158c76ecf8efff1955505c2d529d",
"manifest.json": "adfa5ac98065576a02ca44e7a064824f",
"version.json": "9afe24c16352eb1de24f6df78d304104"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
