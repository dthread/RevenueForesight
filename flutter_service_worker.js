'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "84c0f37957e7dbca48da5943c7164c5c",
"index.html": "e96118e91637bdf3c02b254a38317a7d",
"/": "e96118e91637bdf3c02b254a38317a7d",
"main.dart.js": "cc7a4405550068e6564d4cd6b16f1db9",
"favicon.png": "e45c857ff7f97f18be171a8d61a5725e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "caa4311dc9662cdd51cded3f6a5aaad6",
"assets/AssetManifest.json": "0d214286bfaa3d4514490429ed82fa74",
"assets/NOTICES": "0bfa9499ea777ec348f46b222f3aaf98",
"assets/FontManifest.json": "277df259a6b4de0c68481e262c8a9b95",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/slide_1-layer_2.png": "ddbf15fa920dae7a5a686ff7d10d4841",
"assets/assets/images/slide_1-layer_1.png": "9063147efb1e199ff5c150d2e6300aa7",
"assets/assets/images/icon_ui.png": "09138184ad5cee139e01c3aba95924d4",
"assets/assets/images/slide_4-layer_1.png": "819a00d7172b9dbfe753dd0e58b6543d",
"assets/assets/images/icon_performance.png": "49dcd794c0838072d8cd729f1cb85e61",
"assets/assets/images/slide_4-layer_2.png": "bc967acf07078968e2cb2c06cbd8d1a1",
"assets/assets/images/slide_1-bg.jpg": "7a2356f8cc1bf7d33376fac73ec04c64",
"assets/assets/images/news_flutter_ios_application_bundle.png": "c7d0eb7b38b5d44dabe759246f4fc376",
"assets/assets/images/icon_github_64x.png": "2d1e54d81bd7cb7daa09cea82dcb29e2",
"assets/assets/images/icon_development.png": "baebd28f59701e856c98c68e010fdeb2",
"assets/assets/images/slide_2-layer_1.png": "d74c30d69caf1be60b16532c70e5f9da",
"assets/assets/images/slide_2-layer_2.png": "9f38f12164b646341c610a77fd6c2e7a",
"assets/assets/images/slide_3-bg.jpg": "4eb412a5e5b66476b4b0ee84b51ce232",
"assets/assets/images/flutter_logo_text.png": "d21f1eecaeaab081ba7efec1721c0712",
"assets/assets/images/icon_youtube_64x.png": "155d50c9f10c97fae27575ae7ee7b026",
"assets/assets/images/news_flutter_1.12.png": "1afef8f0d8e3ba20b49bc5625168b629",
"assets/assets/images/CLV%2520presentation2-pic.jpg": "56b1b5e8e94232f6d8bbd25451ff7a6c",
"assets/assets/images/CLV%2520presentation-4.001.png": "e0cdfebe6b62d259b53197bebe0b18b9",
"assets/assets/images/google_logo.png": "22979cce8fc21c09b7f26e131045a400",
"assets/assets/images/icon_search_64x.png": "f55e992d786ef1822db8d1c038e201b5",
"assets/assets/images/device_frame.png": "58e971455388b5c476887bf687a71d8a",
"assets/assets/images/slide_4-bg.jpg": "acbecb9abe325a9564a8ab511343cda9",
"assets/assets/images/CLV%2520presentation3-pic.jpg": "e2c7d3be4c2424473dfd5bb558ff5542",
"assets/assets/images/video_thumbnail_learn_from_developers.png": "7818ad639493077ee21fbd29fccdc7cf",
"assets/assets/images/flutter_logo_mono.png": "6261e07a1b1eb9cdd466b4879a41e361",
"assets/assets/images/slide_3-layer_2.png": "dcecc562f08c8e185fa50f23dec1c5e6",
"assets/assets/images/Customer_Acquisition.md": "a6b7442331cb26b51dd790a9f0eb5333",
"assets/assets/images/slide_3-layer_1.png": "0e3ed24ce06edf89fab5072c310d393d",
"assets/assets/images/slide_2-bg.jpg": "05ce416b9516bbecb0b3fa90c593fc5e",
"assets/assets/images/icon_twitter_64x.png": "514d54a802579a10b988c12dc892e9cb",
"assets/assets/images/companies_using_flutter.png": "bd93766fea0502d711ec59e1e6aa29b9",
"assets/assets/images/news_flutter_codepen.png": "bc607f3054d4ab94ec5866422eb7c9c5",
"assets/assets/videos/NativePerformance.mp4": "91e263a32e6220fc72a57b587e2a4591",
"assets/assets/videos/BeautifulUI.mp4": "354dcbace8259d15719a4ef4c9e46e8a",
"assets/assets/videos/Group.m4v": "23c1b0ce82583c0c939794ffbfe7166f",
"assets/assets/videos/FastDev.mp4": "c2488f978dae74ca3bd13c38f2ce30cb",
"assets/assets/videos/Slider.m4v": "9fea36b7bfbd57a907da34c77b58c713",
"assets/assets/videos/Individual.m4v": "29cae3bbdd6a1ea71ef487a122ee4f90",
"assets/assets/fonts/product_sans_regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/assets/fonts/product_sans_italic.ttf": "e88ec18827526928e71407a24937825a",
"assets/assets/fonts/roboto_bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/assets/fonts/product_sans_bold.ttf": "dba0c688b8d5ee09a1e214aebd5d25e4",
"assets/assets/fonts/roboto_regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/fonts/roboto_italic.ttf": "a720f17aa773e493a7ebf8b08459e66c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
