/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c0d129f5c5237f63f153bcbdd4467bcd"
  },
  {
    "url": "assets/css/0.styles.cb6ccb2f.css",
    "revision": "55ad8e46631b6574d56733e82806f9b4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f4cc8f69.js",
    "revision": "15b1fb52a29f1b1aec48cbb953dbeb04"
  },
  {
    "url": "assets/js/11.5810084f.js",
    "revision": "5d3f30457004fdeff7575e1e2eda61aa"
  },
  {
    "url": "assets/js/12.34b12b61.js",
    "revision": "d59fed707fc32f1ef419f9fbf1b0f3d7"
  },
  {
    "url": "assets/js/13.64892cb5.js",
    "revision": "47c20362ac2a2e7ef3d3abc8251184f9"
  },
  {
    "url": "assets/js/14.0cefd03d.js",
    "revision": "2f138338ad208b7c1f879ea0be38de6f"
  },
  {
    "url": "assets/js/15.c2781227.js",
    "revision": "8a200eb384c4e226f5592532fbec962c"
  },
  {
    "url": "assets/js/16.aa3a3aa2.js",
    "revision": "91c864daee7871a8d4db9cf86587c7dc"
  },
  {
    "url": "assets/js/17.f52d786a.js",
    "revision": "53b7ee432fcf0f6fd085b785e740f5f2"
  },
  {
    "url": "assets/js/18.82700b0c.js",
    "revision": "0053d1d16cfaa50976ebad704998b9cd"
  },
  {
    "url": "assets/js/19.bd9a46b4.js",
    "revision": "e4e88ff6f71624b5e538d2db05ce090c"
  },
  {
    "url": "assets/js/2.0f69efaa.js",
    "revision": "87f10116c06555296773c67392e13b51"
  },
  {
    "url": "assets/js/20.25ba80d4.js",
    "revision": "02ec8412f178e149f66c0a95a4d77b8c"
  },
  {
    "url": "assets/js/21.7feb9cff.js",
    "revision": "15158bb59cdd24d1ccbff81e64f9704a"
  },
  {
    "url": "assets/js/22.1b8bc3eb.js",
    "revision": "9eff72146e37077d46afabfb9a2734ee"
  },
  {
    "url": "assets/js/23.d379765c.js",
    "revision": "fd89a379c460f344b9eeaf6848432596"
  },
  {
    "url": "assets/js/24.e7cffad5.js",
    "revision": "f72643e4a52b968cbc607f9e0805f384"
  },
  {
    "url": "assets/js/25.1559ee83.js",
    "revision": "940656185df18fc505bd3c1f717806c3"
  },
  {
    "url": "assets/js/3.cfd3e97d.js",
    "revision": "c24314a29ea561b8f0d278f0d0a40bc6"
  },
  {
    "url": "assets/js/4.38268980.js",
    "revision": "5c6428f1badc73bd89d4c975d1cfe3f8"
  },
  {
    "url": "assets/js/5.2a4cb15c.js",
    "revision": "092a1d033442971bf51ba5ad8c8aca71"
  },
  {
    "url": "assets/js/6.12c263c7.js",
    "revision": "2a537e19cfa2ac41acc1c8d8cc1ea4af"
  },
  {
    "url": "assets/js/7.9841c56e.js",
    "revision": "06f134b0b824664c629fa7ae7b7cc6eb"
  },
  {
    "url": "assets/js/8.99150c16.js",
    "revision": "928f906789394933e00b13e64e7c8081"
  },
  {
    "url": "assets/js/9.0b2cc3b3.js",
    "revision": "204d37801099e5aee3be59c6b7ad57c8"
  },
  {
    "url": "assets/js/app.837e36a2.js",
    "revision": "cf0376bc746acc0db1c78fdfb0175562"
  },
  {
    "url": "guide/battery.html",
    "revision": "bf5e020fe24325d9d59a14d17b1c5cdc"
  },
  {
    "url": "guide/clipboard.html",
    "revision": "19be09e076ea77dc1102e71c0a70a0e6"
  },
  {
    "url": "guide/device-light.html",
    "revision": "14399bf19449cecfb07d3b88063f04de"
  },
  {
    "url": "guide/device-motion.html",
    "revision": "2afeed145337dbca407d25f8200cfaf6"
  },
  {
    "url": "guide/device-orientation.html",
    "revision": "6626aad84e225da5bb831428296fdf17"
  },
  {
    "url": "guide/fetch.html",
    "revision": "3f6f52a41c57a6d0cc7f4339d6c6650d"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "62c4729dc3294327523952cb07f5aa2b"
  },
  {
    "url": "guide/geolocation.html",
    "revision": "d98d0970fabea43ecb1e1477992df402"
  },
  {
    "url": "guide/index.html",
    "revision": "cb215d067a5df6417150f5299837ec3e"
  },
  {
    "url": "guide/intersection-observer.html",
    "revision": "f8a099a3ce22e9c203dbd13988a6b36b"
  },
  {
    "url": "guide/local-storage.html",
    "revision": "905f92578735597495348098e5dea130"
  },
  {
    "url": "guide/mouse-position.html",
    "revision": "767100f4e8b8906a580e21826f8bbf15"
  },
  {
    "url": "guide/network.html",
    "revision": "20fc8f91bf6d6f3e46b07fd12305fbde"
  },
  {
    "url": "guide/preferred-color-scheme.html",
    "revision": "353a369c8b6320ffdc10b4d9c7afe855"
  },
  {
    "url": "guide/preferred-languages.html",
    "revision": "e1d4e44818e4db683e6181dfd8f4be21"
  },
  {
    "url": "guide/script.html",
    "revision": "2637ecb9102796d7a33b909d82e69219"
  },
  {
    "url": "guide/scroll-position.html",
    "revision": "37b191d13d5d33434fae921f47f20e6c"
  },
  {
    "url": "guide/window-size.html",
    "revision": "8475584b19584e3dba1faf9d42c05d00"
  },
  {
    "url": "index.html",
    "revision": "2f082c995077952aeeff1f60f22e36b1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
