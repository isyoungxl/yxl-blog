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
    "revision": "175f7705f7972ca27794b615597f3aee"
  },
  {
    "url": "assets/css/0.styles.45e16fc5.css",
    "revision": "10ca498df9c2764c275c9eb911a56e4e"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/js/1.d9b85ce8.js",
    "revision": "8b35a695797cb37d3b52ee05a5febbde"
  },
  {
    "url": "assets/js/10.4ff705c9.js",
    "revision": "bdfcd458fc90504f1e37c608988b76f0"
  },
  {
    "url": "assets/js/11.1d4a26a0.js",
    "revision": "aaa8f70f204b73fe0f15114d2d18be2e"
  },
  {
    "url": "assets/js/12.ec28e686.js",
    "revision": "bf33eb1f798eb273bb83f522df3e3637"
  },
  {
    "url": "assets/js/13.e08350f8.js",
    "revision": "6ea5e4006bbfcaecb3d3dc26d44df0f5"
  },
  {
    "url": "assets/js/14.6af37269.js",
    "revision": "c30f742ab31c2bb10b164574088913c7"
  },
  {
    "url": "assets/js/3.d67d861d.js",
    "revision": "ad95b48151d741bfccf6db825b196fbc"
  },
  {
    "url": "assets/js/4.55e68579.js",
    "revision": "462e98772b5a43f928664a2c67a2cee2"
  },
  {
    "url": "assets/js/5.05f371b4.js",
    "revision": "0bd5a32a24f40ff3c6697ea92fe75944"
  },
  {
    "url": "assets/js/6.c9084824.js",
    "revision": "6c231dc2da21dfcca362b760f6cafa91"
  },
  {
    "url": "assets/js/7.ef3b022c.js",
    "revision": "aca443766227ec5f89bc2be8b617c47a"
  },
  {
    "url": "assets/js/8.d8d27281.js",
    "revision": "dc6210b14a3eafdc11a1562aa96f451a"
  },
  {
    "url": "assets/js/9.0cf9ae80.js",
    "revision": "894829be3894b8412027fd378d3a12dc"
  },
  {
    "url": "assets/js/app.6ef91f66.js",
    "revision": "9e9af2a2aa72c19ad5cbcc12b595ca69"
  },
  {
    "url": "avatar.jpg",
    "revision": "4f459eaf7f029e9120007738973d4748"
  },
  {
    "url": "avatar2.jpg",
    "revision": "8396113122fa27dc52aec77a4fd16e2d"
  },
  {
    "url": "bg.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "bg1.jpg",
    "revision": "ffd7e63decf34a01d714dba2ae0c4c71"
  },
  {
    "url": "blogs/1.html",
    "revision": "d1c95f849e5191d631aff5200547d39f"
  },
  {
    "url": "blogs/2.html",
    "revision": "f1590316785b9e06d8b04be06b4a294c"
  },
  {
    "url": "categories/index.html",
    "revision": "541e8f174f62ba88f2ff73160370ddea"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "83d1ae1cbfc6bccf1f8ef5eba70c8ab4"
  },
  {
    "url": "github1.jpg",
    "revision": "516e4611bd81025f3e4f4fa34b9af773"
  },
  {
    "url": "github2.jpg",
    "revision": "3ee73d5b9b2609f8b2a6dbce27390200"
  },
  {
    "url": "icons/sheep.svg",
    "revision": "b7978aebcb862f19f900d08351e75923"
  },
  {
    "url": "index.html",
    "revision": "b4c6d59569ad0e2b358ef9f6c5fa80a1"
  },
  {
    "url": "sheep.png",
    "revision": "81c9ac34218f830390d76aa79181f2ac"
  },
  {
    "url": "snow.png",
    "revision": "85e0f14f12149d4638f9b9585d796247"
  },
  {
    "url": "step1.jpg",
    "revision": "b73239eab81fa4279f185d4565e6ed76"
  },
  {
    "url": "t-start.png",
    "revision": "2247f512b332fbf25a9c0a9740c0f20f"
  },
  {
    "url": "tag/index.html",
    "revision": "faf4f8640a39d331ee11104a31a3ce76"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "57284f4d5439927755596e4fd5af6fef"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "5c7fbe7952337fe656fbcca1bee7ba58"
  },
  {
    "url": "tag/手摸手/index.html",
    "revision": "517abc7ab38748d8f30786d2c861c669"
  },
  {
    "url": "timeline/index.html",
    "revision": "b39a0fb67f4ba076c2f3313631990f79"
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
