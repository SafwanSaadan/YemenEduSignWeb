'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "090288b27b055f5038750cdcd2522d5c",
"assets/AssetManifest.bin.json": "103a8179fc49349b1b498866bc046c8a",
"assets/AssetManifest.json": "29d0b3b0a0c68564467bf15757f814f8",
"assets/assets/audio/false.wav": "e42b5ef20db08f599569bc0bce3636cf",
"assets/assets/audio/success.wav": "b10cdbf8998e81331a3cab6be6f8ff90",
"assets/assets/audio/true.wav": "c29a9e0e070cd7fb36779289c9566cd6",
"assets/assets/audio/tryAgain.wav": "115e9e591c6528b77ad4a372ddecffe7",
"assets/assets/Categories.json": "4d4fc9f5f1608f7da773bcc511aa2d99",
"assets/assets/data.json": "89ffd5fe1ba0ca4d1612f40393f8c4bd",
"assets/assets/exam.json": "96c8c78ff5d2dada5211c30267d71f10",
"assets/assets/images/animals/%25D8%25A7%25D8%25AE%25D8%25B7%25D8%25A8%25D9%2588%25D8%25B7.webp": "c4427078a99191762f2c9828f8eea458",
"assets/assets/images/animals/%25D8%25A7%25D8%25B3%25D8%25AF.webp": "708a83859605bc4cf57148a23f20f386",
"assets/assets/images/animals/%25D8%25A8%25D8%25B7%25D8%25B1%25D9%258A%25D9%2582.webp": "a3c7f4b432bdde523ba36f58cdfd744b",
"assets/assets/images/animals/%25D8%25A8%25D8%25B7%25D9%2587.webp": "b424d2133e10446e02c2b173939a70f3",
"assets/assets/images/animals/%25D8%25A8%25D8%25B9%25D9%2588%25D8%25B6%25D9%2587.webp": "4680dc1ae7039e815198fa5865e5fe40",
"assets/assets/images/animals/%25D8%25A8%25D8%25BA%25D8%25A8%25D8%25BA%25D8%25A7%25D8%25A1.webp": "ae9948016dc55cea1abe3f31af11268b",
"assets/assets/images/animals/%25D8%25A8%25D9%2582%25D8%25B1%25D8%25A9.webp": "fb44fe52952580428caea34de573fa6d",
"assets/assets/images/animals/%25D8%25A8%25D9%2588%25D9%2585%25D8%25A9.webp": "b24d8bbfdca32a82b0ff0d79cce19cbf",
"assets/assets/images/animals/%25D8%25AA%25D9%2585%25D8%25B3%25D8%25A7%25D8%25AD.webp": "6ef3d4e78e877973616a82ec51e2cfb5",
"assets/assets/images/animals/%25D8%25AB%25D8%25B9%25D8%25A8%25D8%25A7%25D9%2586.webp": "b13a04d17437d0ba6ab191a3be6cbabd",
"assets/assets/images/animals/%25D8%25AB%25D9%2588%25D8%25B1.webp": "44ee66a833695c2d16975abea4fa90e7",
"assets/assets/images/animals/%25D8%25AC%25D9%2585%25D8%25A8%25D8%25B1%25D9%258A.webp": "091c0b6b6de8cc9e2a28a49a87878053",
"assets/assets/images/animals/%25D8%25AC%25D9%2585%25D9%2584.webp": "6deb2cd3aaef9a0ca20d388476462216",
"assets/assets/images/animals/%25D8%25AD%25D8%25A8%25D8%25A7%25D8%25B1.webp": "17ac51bdc3bbd87c9daf96afe4f84e0e",
"assets/assets/images/animals/%25D8%25AD%25D8%25B4%25D8%25B1%25D8%25A7%25D8%25AA.webp": "d3021f74b635e32e8f9c07b2394b6ded",
"assets/assets/images/animals/%25D8%25AD%25D8%25B5%25D8%25A7%25D9%2586.webp": "78b966d4df6344c5debb64d1cef326e9",
"assets/assets/images/animals/%25D8%25AD%25D9%2585%25D8%25A7%25D9%2585%25D8%25A9.webp": "94c5d4ddc0dc53ed90d3cdde5e2070d0",
"assets/assets/images/animals/%25D8%25AD%25D9%2588%25D8%25AA.webp": "b552daf8e1085ac367f85fbdcbde4a28",
"assets/assets/images/animals/%25D8%25AD%25D9%258A%25D9%2588%25D8%25A7%25D9%2586%25D8%25A7%25D8%25AA.webp": "6e941cba271e27d5448ab0ee03e1c07c",
"assets/assets/images/animals/%25D8%25AE%25D8%25B1%25D9%2588%25D9%2581.webp": "ae77d1a4d9e656fe6e07e00cb485e7b8",
"assets/assets/images/animals/%25D8%25AE%25D9%2581%25D8%25A7%25D8%25B4.webp": "d4ed99bcee7ce34b176ff7619d518314",
"assets/assets/images/animals/%25D8%25AE%25D9%2586%25D8%25B2%25D9%258A%25D8%25B1.webp": "d8c4b1484e14d5b3c651472bc428d35b",
"assets/assets/images/animals/%25D8%25AE%25D9%2586%25D9%2581%25D8%25B3%25D8%25A7%25D8%25A1.webp": "ef1aa95e49910582232202ee0193869c",
"assets/assets/images/animals/%25D8%25AF%25D8%25A8.webp": "a2549dac6824ce67b5316d6a75c59332",
"assets/assets/images/animals/%25D8%25AF%25D8%25AC%25D8%25A7%25D8%25AC%25D8%25A9.webp": "17efcdfdd778aca6f1069558d80fe068",
"assets/assets/images/animals/%25D8%25AF%25D9%2588%25D8%25AF%25D8%25A9.webp": "484c54ea3b829a4910408c802559b01e",
"assets/assets/images/animals/%25D8%25AF%25D9%258A%25D9%2583.webp": "2c1d9c2ecba6e23dbd8f52ed5a76eb85",
"assets/assets/images/animals/%25D8%25B0%25D8%25A6%25D8%25A8.webp": "77cf9eda0396ca45dae1c2224dd63783",
"assets/assets/images/animals/%25D8%25B0%25D8%25A8%25D8%25A7%25D8%25A8%25D8%25A9.webp": "26437966691a5b5fc353c38d3ab0d112",
"assets/assets/images/animals/%25D8%25B2%25D9%2588%25D8%25A7%25D8%25AD%25D9%2581.webp": "2ea861c8049fac0ae45d0ba094f75843",
"assets/assets/images/animals/%25D8%25B3%25D8%25AD%25D9%2584%25D9%258A%25D8%25A9.webp": "722f2a1a1481d45a1e283ad7d0bc58e4",
"assets/assets/images/animals/%25D8%25B3%25D8%25B1%25D8%25B7%25D8%25A7%25D9%2586.webp": "33c33c916027996da2dc780271b74403",
"assets/assets/images/animals/%25D8%25B3%25D9%2584%25D8%25AD%25D9%2581%25D8%25A7%25D8%25A9.webp": "8fc65d45a04338647b8a5207e7364a93",
"assets/assets/images/animals/%25D8%25B3%25D9%2585%25D9%2583.webp": "a52e32b2b42aa95055ef2dcad970f50f",
"assets/assets/images/animals/%25D8%25B3%25D9%2586%25D8%25AC%25D8%25A7%25D8%25A8.webp": "e8e95c65357a406410e6d02ec2e01068",
"assets/assets/images/animals/%25D8%25B6%25D8%25A8%25D8%25B9.webp": "1e8cc46cd51b6e430e20367dc9ad11eb",
"assets/assets/images/animals/%25D8%25B6%25D9%2581%25D8%25AF%25D8%25B9.webp": "05fbfb3dd9e0af8effa67b000c067f1b",
"assets/assets/images/animals/%25D8%25B7%25D8%25A7%25D9%2588%25D9%2588%25D8%25B3.webp": "0cfc0bd40d2accd9d178fa64672beeca",
"assets/assets/images/animals/%25D8%25B9%25D9%2582%25D8%25B1%25D8%25A8.webp": "5ffba91b224881510cc81ea184ddc8df",
"assets/assets/images/animals/%25D8%25BA%25D8%25B1%25D8%25A7%25D8%25A8.webp": "b471a9f36afcde883b55fa6c661a181d",
"assets/assets/images/animals/%25D8%25BA%25D9%2588%25D8%25B1%25D9%2584%25D8%25A7.webp": "fbedd9e64c4680ccbe051941448b564f",
"assets/assets/images/animals/%25D9%2581%25D8%25A7%25D8%25B1.webp": "1866816a72c60245b7db2a53f01da7e9",
"assets/assets/images/animals/%25D9%2581%25D8%25B1%25D8%25A7%25D8%25B4%25D8%25A9.webp": "cf8d077eb5a281558cf0edabfb5e9508",
"assets/assets/images/animals/%25D9%2581%25D9%258A%25D9%2584.webp": "0380b93f69d8e026fdb50e209609cf83",
"assets/assets/images/animals/%25D9%2582%25D8%25B1%25D8%25AF.webp": "9263495e4213c503cf01c2f4c5aac089",
"assets/assets/images/animals/%25D9%2582%25D8%25B1%25D8%25B4.webp": "8b3fa1d15aa9bd220f2517565f8a08fc",
"assets/assets/images/animals/%25D9%2582%25D8%25B7.webp": "b985c9dea7d065feb0eff5b1c9739482",
"assets/assets/images/animals/%25D9%2582%25D9%2585%25D9%2584%25D8%25A9.webp": "fb0ea5d69106da597dbd0b8ecc4300cf",
"assets/assets/images/animals/%25D9%2582%25D9%2586%25D9%2581%25D8%25B0.webp": "d9dc7240a2dcecf026a490abda29b1dd",
"assets/assets/images/animals/%25D9%2583%25D9%2584%25D8%25A8.webp": "3c77fe3a687d4efbc1f581242d45c106",
"assets/assets/images/animals/%25D9%2583%25D9%2586%25D8%25BA%25D8%25B1.webp": "351ea68f69daa2ab60590f7e4ebad315",
"assets/assets/images/animals/%25D9%2586%25D8%25AD%25D9%2584%25D8%25A9.webp": "3423e79d3db2cee20ec290e9e7998e76",
"assets/assets/images/animals/%25D9%2586%25D8%25B9%25D8%25A7%25D9%2585%25D8%25A9.webp": "35328fc36343f56e7a996bc20b8876c6",
"assets/assets/images/animals/%25D9%2586%25D9%2585%25D8%25B1.webp": "f455a5884cc473705106fdacb1c14690",
"assets/assets/images/animals/%25D9%2586%25D9%2585%25D9%2584%25D8%25A9.webp": "3c62697568f3b790363c45156abdc700",
"assets/assets/images/animals/%25D9%2588%25D8%25B9%25D9%2584.webp": "32cf36f55d6cb2744508464a2bd49dcf",
"assets/assets/images/animals/2.webp": "bf0dc0c6835ef963c4969bb4e534efad",
"assets/assets/images/animals/camel.png": "45e33bbace618fe461cfa37d38fcca54",
"assets/assets/images/animals/cat.png": "9f3d8b43f8b85212784a29b7b3341818",
"assets/assets/images/animals/cow.png": "cf99147a6f3ad124f73bdde695ca5182",
"assets/assets/images/animals/dog.png": "91609fe7c85b3ce96a37281c79899012",
"assets/assets/images/animals/fox.png": "7088725ea9469f23878e250bd9283a0b",
"assets/assets/images/animals/hen.png": "4c64950100c711a0c7e48efdd0143e17",
"assets/assets/images/animals/horse.png": "0e93a5db70ebe577a18fb20f73106da7",
"assets/assets/images/animals/lion.png": "75052d38538bc4b71be17512c517a5cf",
"assets/assets/images/animals/panda.png": "e595d03d8cc55d7d9d86720c2ba39982",
"assets/assets/images/animals/sheep.png": "c608b99848ca3b4dd0d014d6f4591275",
"assets/assets/images/bg1.jpeg": "e595b171fe208e49140567ee6d96c43e",
"assets/assets/images/bg2.jpeg": "a1113491eb55674bfe142fea2ddf27ee",
"assets/assets/images/bg3.jpeg": "be161b94c5c9e209273ff5edc4eeced0",
"assets/assets/images/bg4.webp": "5056ee0e7b4b1f3611d567a029f8bf76",
"assets/assets/images/bg5.jpeg": "196dd14ba49a702c9dc17e59ff91f598",
"assets/assets/images/bg6.jpeg": "52a374d3da6cbdd7d3a27b54c88a8c74",
"assets/assets/images/bg7.jpg": "c5d95c4a330109a4bd973f053a5447a4",
"assets/assets/images/bg8.jpeg": "35f290e889d42855e3375426114b2e62",
"assets/assets/words.json": "19af830770216a97f02636f7649fdab1",
"assets/assets/words1.json": "6fedb30f7b05a475457af5e9b852daa8",
"assets/assets/YemenEduSign_logo.png": "7928c3c43de2db2fe17fd9ebb97e06ae",
"assets/assets/yemenedusign_logo2.png": "6c2b69852cdfb0e257d5656081b39ef2",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "2c3b2d671e660ba7714f0427bcdfb7d6",
"assets/NOTICES": "0eb01dc69e7c0cd8bcb0be2f31367cb5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "c620c4ab7a59b4b7739e9fe9358c7e19",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ee99409451f9b2a1099ab836216f1c0e",
"icons/Icon-512.png": "aad7ff4758ca9a34c6ab9162e6ada710",
"icons/Icon-maskable-192.png": "ee99409451f9b2a1099ab836216f1c0e",
"icons/Icon-maskable-512.png": "aad7ff4758ca9a34c6ab9162e6ada710",
"index.html": "b2e9f696b03d7edff189949e30ba7e71",
"/": "b2e9f696b03d7edff189949e30ba7e71",
"main.dart.js": "08505f5d3079520bcb45e80244ccf1f3",
"manifest.json": "cc53a76f3569e2cc78276353958fd1e5",
"version.json": "3c20dee7f7528768b457afe607b3f562"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
