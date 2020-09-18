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
    "revision": "7a2245d73d8d1c7f0e78081a704a949b"
  },
  {
    "url": "about/index.html",
    "revision": "124d271f8971cf43a22271128cecb767"
  },
  {
    "url": "archive/index.html",
    "revision": "55ddbb46729cf949a12a2df40e4b51c2"
  },
  {
    "url": "assets/css/0.styles.09c33968.css",
    "revision": "be9da6cee830656dac5ca3484807da3a"
  },
  {
    "url": "assets/fonts/fa-brands-400.4a5d4d85.eot",
    "revision": "4a5d4d855d11fae79cc864bdacb2f479"
  },
  {
    "url": "assets/fonts/fa-brands-400.4c1da237.ttf",
    "revision": "4c1da237bdae0773309df93b2cd48e09"
  },
  {
    "url": "assets/fonts/fa-brands-400.5734d789.woff",
    "revision": "5734d789b25228cbafc64a58ae971aca"
  },
  {
    "url": "assets/fonts/fa-brands-400.91a23e8b.woff2",
    "revision": "91a23e8bf2b4b84c39311cb5eb23aaa0"
  },
  {
    "url": "assets/fonts/fa-regular-400.260be4f2.ttf",
    "revision": "260be4f29c0b2ce47480afb23f38f237"
  },
  {
    "url": "assets/fonts/fa-regular-400.5c674c92.woff2",
    "revision": "5c674c9216c06ede2f618aa58ae71116"
  },
  {
    "url": "assets/fonts/fa-regular-400.6b20949b.eot",
    "revision": "6b20949b3a679c30d09f64acd5d3317d"
  },
  {
    "url": "assets/fonts/fa-regular-400.d44ad00c.woff",
    "revision": "d44ad00c44e46fd29f6126fa7d888cde"
  },
  {
    "url": "assets/fonts/fa-solid-900.412a43d6.woff2",
    "revision": "412a43d6840addd683665ec12c30f810"
  },
  {
    "url": "assets/fonts/fa-solid-900.9a1672a8.eot",
    "revision": "9a1672a8a8d91fbf82c71f451d495253"
  },
  {
    "url": "assets/fonts/fa-solid-900.c65d1548.ttf",
    "revision": "c65d154888aa166982dac3e72e7380ec"
  },
  {
    "url": "assets/fonts/fa-solid-900.f3a7d3b5.woff",
    "revision": "f3a7d3b5880544a91e9a7e6f8f35d4d2"
  },
  {
    "url": "assets/fonts/MathJax_AMS-Regular.07173fb7.woff",
    "revision": "07173fb77d2ee655811499d40c8388e7"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",
    "revision": "bc42125861bd5bfc8686deeb612dcbb3"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",
    "revision": "b80e08d5a79acbd1fafb1ca6f3515664"
  },
  {
    "url": "assets/fonts/MathJax_Main-Bold.c9423d5d.woff",
    "revision": "c9423d5dc9d82a38ca215f74e9cdd9f2"
  },
  {
    "url": "assets/fonts/MathJax_Main-Italic.7e83626b.woff",
    "revision": "7e83626ba8bf2d20dc41565f1e6d0afc"
  },
  {
    "url": "assets/fonts/MathJax_Main-Regular.9995de47.woff",
    "revision": "9995de4787f908d8237dba7007f6c3fe"
  },
  {
    "url": "assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",
    "revision": "77dbcee3c3d9a82a0c04a4ae7992b895"
  },
  {
    "url": "assets/fonts/MathJax_Math-Italic.5589d1a8.woff",
    "revision": "5589d1a8fc62be6613020ef2fa13e410"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Bold.07281897.woff",
    "revision": "07281897a98a61c3733e1670f82a9fd5"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",
    "revision": "3d580bd561716bfb1f0b4fdd7063a802"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",
    "revision": "bc3af04f9a671fcabd6498042c57478f"
  },
  {
    "url": "assets/fonts/MathJax_Script-Regular.4c74e33b.woff",
    "revision": "4c74e33b0feb1fdbda49403a5e7ed604"
  },
  {
    "url": "assets/fonts/MathJax_Typewriter-Regular.72815766.woff",
    "revision": "72815766b08ca24d4d29ad1f5d4ecb45"
  },
  {
    "url": "assets/img/ad.png",
    "revision": "f83672204fdc9dc1363f01e3fb7145fb"
  },
  {
    "url": "assets/img/android-chrome-192x192.png",
    "revision": "9dc784a560d2f0756dfd483bb7f74d7e"
  },
  {
    "url": "assets/img/android-chrome-512x512.png",
    "revision": "4336a8bbda285df76c6df998d09c21f9"
  },
  {
    "url": "assets/img/apple-touch-icon.png",
    "revision": "4490310751700e5caaafe81681cbac31"
  },
  {
    "url": "assets/img/avatar.44903107.png",
    "revision": "4490310751700e5caaafe81681cbac31"
  },
  {
    "url": "assets/img/avatar.png",
    "revision": "4490310751700e5caaafe81681cbac31"
  },
  {
    "url": "assets/img/background.png",
    "revision": "b52da4f7c0e1bc5424245b8a0b1e79fd"
  },
  {
    "url": "assets/img/brand.a6838b12.png",
    "revision": "a6838b126aeae1009be079395b9e8f60"
  },
  {
    "url": "assets/img/brand.png",
    "revision": "a6838b126aeae1009be079395b9e8f60"
  },
  {
    "url": "assets/img/by-nc-sa.03dda63e.svg",
    "revision": "03dda63e80b9508d421e792236239ef1"
  },
  {
    "url": "assets/img/empty.png",
    "revision": "596be35cb3b05083be5a8d7c4177c669"
  },
  {
    "url": "assets/img/fa-brands-400.778b1f25.svg",
    "revision": "778b1f251bea7412048da95b87bf816f"
  },
  {
    "url": "assets/img/fa-regular-400.66578cdb.svg",
    "revision": "66578cdbb6dc01f527a53971051b3e85"
  },
  {
    "url": "assets/img/fa-solid-900.48685310.svg",
    "revision": "486853107489520b3265b19b191626f8"
  },
  {
    "url": "assets/img/hitokoto.left.7d59b2d0.png",
    "revision": "7d59b2d074309127019c6dcc093005d7"
  },
  {
    "url": "assets/img/hitokoto.left.png",
    "revision": "7d59b2d074309127019c6dcc093005d7"
  },
  {
    "url": "assets/img/hitokoto.right.d80507e4.png",
    "revision": "d80507e476ea08c105a11e6b6951af8d"
  },
  {
    "url": "assets/img/hitokoto.right.png",
    "revision": "d80507e476ea08c105a11e6b6951af8d"
  },
  {
    "url": "assets/img/qq.png",
    "revision": "b2fcc67452f144ad13bd6c347400fbb2"
  },
  {
    "url": "assets/img/records.2ade8ac9.png",
    "revision": "2ade8ac9e3a351cfee0345aebe5a421e"
  },
  {
    "url": "assets/img/records.png",
    "revision": "2ade8ac9e3a351cfee0345aebe5a421e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wechat.png",
    "revision": "d7aaeb7652a86820babdf501c01621a2"
  },
  {
    "url": "assets/js/10.a1247f8c.js",
    "revision": "526f6c9851f1bdde649fa1008240539d"
  },
  {
    "url": "assets/js/11.948554fb.js",
    "revision": "b07524a5dee29f2fbab6d49bbea28634"
  },
  {
    "url": "assets/js/12.8ae00816.js",
    "revision": "daeda0acd7025d8a5a37e3bb01578f83"
  },
  {
    "url": "assets/js/13.88ab2cd4.js",
    "revision": "518dcfa478a42523c89fde27b03fc868"
  },
  {
    "url": "assets/js/14.ceed5fc6.js",
    "revision": "722642f4467002519a920f5314ef7bb1"
  },
  {
    "url": "assets/js/15.709ef8d1.js",
    "revision": "f297f8f55a8f52d52f20df5392000cb3"
  },
  {
    "url": "assets/js/16.cebd882a.js",
    "revision": "9a0648a699e27a46099c62d6f8f35bc5"
  },
  {
    "url": "assets/js/17.a6b21440.js",
    "revision": "e9a158267738de944029faccf89f9aac"
  },
  {
    "url": "assets/js/18.a33f4282.js",
    "revision": "d59dc5d8338eff34fffa8140b5bb6fcc"
  },
  {
    "url": "assets/js/19.b6a51e61.js",
    "revision": "4ee7c8cd7b00ecb1d1610873cbb20746"
  },
  {
    "url": "assets/js/20.eaf50e2c.js",
    "revision": "ba05736d3d25360846dc4d5598cdcb97"
  },
  {
    "url": "assets/js/21.e56fe763.js",
    "revision": "09e91cb60d8fb2ca20540de1ec81ce1d"
  },
  {
    "url": "assets/js/22.5e660cc7.js",
    "revision": "fa3cae2d60dfa4f03e5d9f61df41c6fc"
  },
  {
    "url": "assets/js/23.72da4870.js",
    "revision": "c054636b99338fd2aadd9b1cf3c1da0d"
  },
  {
    "url": "assets/js/24.3579c775.js",
    "revision": "067833426f4f1b2760850ee5b05b009d"
  },
  {
    "url": "assets/js/25.527ff220.js",
    "revision": "46f4ec7b5f8ddd34570882bb99a1db94"
  },
  {
    "url": "assets/js/26.585137d3.js",
    "revision": "bc4cb7fe79c1ea91b5c20a8b423ae96c"
  },
  {
    "url": "assets/js/27.6e768996.js",
    "revision": "e2303da8745997806bd65f7b535d072c"
  },
  {
    "url": "assets/js/28.ef48394c.js",
    "revision": "4871e95a0b5ae88cc5a05a80bab3d3c2"
  },
  {
    "url": "assets/js/29.4abf2f19.js",
    "revision": "46c4617572b4a1919a0335bc8483a6dd"
  },
  {
    "url": "assets/js/3.5273f764.js",
    "revision": "c2ab9d93380621e0eb6ae6b01d165f68"
  },
  {
    "url": "assets/js/30.fe99650a.js",
    "revision": "fe76ae41486d5a3db933891be60a7dc2"
  },
  {
    "url": "assets/js/31.b239ef51.js",
    "revision": "945e7e06007950f464bafc47fc7a54f5"
  },
  {
    "url": "assets/js/32.8f8caca7.js",
    "revision": "9636176d47054dbdfd05224084d2d425"
  },
  {
    "url": "assets/js/33.2c319c84.js",
    "revision": "553740b69b798a4398327386fa12dfe7"
  },
  {
    "url": "assets/js/34.75967790.js",
    "revision": "484a9c45f0b4e0a8f3fc9a351ae1cc99"
  },
  {
    "url": "assets/js/35.0f1d65e7.js",
    "revision": "c77304c603912ff71634497121b00210"
  },
  {
    "url": "assets/js/36.c14dbeb2.js",
    "revision": "71b42dcee9ebe478f89306fbfa260bf3"
  },
  {
    "url": "assets/js/4.8e0e8a4d.js",
    "revision": "45f023989caca2da37eb163098525151"
  },
  {
    "url": "assets/js/5.1b29f392.js",
    "revision": "14baad9fb28e75506cb471cce0f441ba"
  },
  {
    "url": "assets/js/6.64636763.js",
    "revision": "6c44813d0c31caebc3f22458ad46e0e8"
  },
  {
    "url": "assets/js/7.eb080198.js",
    "revision": "adaff43168e87616fca073b3f961333c"
  },
  {
    "url": "assets/js/8.a29e5d23.js",
    "revision": "f2d7bcf10e4e6bd56301261aa3c9a9d4"
  },
  {
    "url": "assets/js/9.5590643f.js",
    "revision": "15dc1fe08747368b0e9d078dbb407d6e"
  },
  {
    "url": "assets/js/app.cb727b5e.js",
    "revision": "f51e36e270836368f2531f75a90b4935"
  },
  {
    "url": "assets/js/vuejs-paginate.b61c3606.js",
    "revision": "e01e89995696176eb92f84fd965fbf8d"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "662cf6f17990e3f5dc97b58f8c446358"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "b6adb023fa4448bbc503d3d3fd945d93"
  },
  {
    "url": "category/index.html",
    "revision": "66e67fff8c16564980723281b59623d8"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "435432613394cd9b01c122fde4ca53ca"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "4c7a292901226c2490f2ab32b0f35b74"
  },
  {
    "url": "category/Note/index.html",
    "revision": "3847d4acbf0be8a722e84fcacf41c720"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "2fa4a63d70de91ff652bd32284929891"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "73cb65f93c63fbd0c81cbdfcaddbe7f4"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "d609da74b49dde43cabb47c36b9ce706"
  },
  {
    "url": "category/网络/index.html",
    "revision": "67ac4f980a0013babf3a0a4ad56ac191"
  },
  {
    "url": "codes/index.html",
    "revision": "fef80b64d7ec8f96458c282e0b01db67"
  },
  {
    "url": "gallery/data-structure-linked-list-normal.png",
    "revision": "1db30e017d3e0009ddf12311d31b2ae5"
  },
  {
    "url": "gallery/data-structure-linked-list-static-to-normal.png",
    "revision": "4643d5dd42eebf640134ab8d9df2e137"
  },
  {
    "url": "gallery/data-structure-queue.png",
    "revision": "db91100f07f4d68b2ae73b73baa34614"
  },
  {
    "url": "gallery/data-structure-random-linked-ram.png",
    "revision": "89bfac4f6ce9c3abb572dfff77a78a34"
  },
  {
    "url": "gallery/data-structure-stack.png",
    "revision": "7067ca734d65393dcd3fc3340310f787"
  },
  {
    "url": "gallery/FaceQ1583444636773.png",
    "revision": "a25a8ffa90c5b10c42e4e6992e1bc2f0"
  },
  {
    "url": "gallery/http-request-example.jpg",
    "revision": "3ad3cb077e4d852be159c0ce7d1a7e92"
  },
  {
    "url": "gallery/http-request-format.png",
    "revision": "3aeef0f8d0b869a5c3f4d47ee41d3c90"
  },
  {
    "url": "gallery/http-response-example.jpg",
    "revision": "c3cf8d2890449b9138527011ae403b49"
  },
  {
    "url": "gallery/http-response-format.png",
    "revision": "ea246cd67c5878fdb5f440e4657bd7a1"
  },
  {
    "url": "gallery/index.html",
    "revision": "30179e8de94c435cbe5f2c29b0936010"
  },
  {
    "url": "gallery/tcp-ip-ipv6-prefix.jpg",
    "revision": "527c1e33dd1752265990fdaf101e224e"
  },
  {
    "url": "gallery/tcp-ip-router-network.jpg",
    "revision": "6d35c987bd9240b925d8e80f60331396"
  },
  {
    "url": "gallery/tcp-ip-router-subnet.jpg",
    "revision": "ac9c9b39b390465be42f7f946243b459"
  },
  {
    "url": "gallery/yao2048-0.jpg",
    "revision": "b68678816508660ea9c32a813d1d769e"
  },
  {
    "url": "gallery/yaoplayer-0.jpg",
    "revision": "acb68980b34d9666841b8939d78ee967"
  },
  {
    "url": "icons/index.html",
    "revision": "78677768459f14f9fa987f8ed7476d3e"
  },
  {
    "url": "index.html",
    "revision": "162144e4dcdbf48c34fcdf22cd9bda39"
  },
  {
    "url": "letter/index.html",
    "revision": "231b9767320f5c31dce17749c3025f8d"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "571f11fc1d7b868e58eec01e5dc7a901"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "f4302cbb5ebb2a89e4bd03103d1daf0e"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "785fa8c1843639645195547f17122ed3"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "61cf7f49ecf20d444c609052200022be"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "dcd18aa7e954d71ef30a062392a199ba"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "ffb8a898aae2a20fdb787f97ef179200"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "3d0932f7ba6643ffa314c79295e0101a"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "22f26f199d721889c4e2420908773411"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "c1af42da7ff1005a3dc992abc43d6102"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "2e21eef89bf22d2e4b10ea8b05eca9e0"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "e781a49a23fb6e136e9dc96b97d1cb99"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "bf8a4d262fd605645108c517723ef202"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "16ebc7c1a167c4b112e3641c19b64bbc"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "2a03ad86edbee3a3e2a1e3c8bac3bbfd"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "6a9511f96bdf8bf9ba4e7fbd1864b7a6"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "a26c6db2b045803f26a095f54e3cbf13"
  },
  {
    "url": "records/index.html",
    "revision": "0d26729e6f59beeab41e4d56628f0f6b"
  },
  {
    "url": "resume/index.html",
    "revision": "b4d2835aeb022c1643ed1662f95a9ed0"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "6613c86105b4898140d1c8ab8a56d727"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "e1211df41e3e58599648c3fd22ac9b82"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "1ee168ad05fb780ccf7a6f4e83a60531"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "13046a4d981548a1013d3633c61e100d"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "f19badb2e963105700ae383fcae969e1"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "a298dfc967083d360701a1c3ec248e29"
  },
  {
    "url": "tag/index.html",
    "revision": "943d8735fabfa53c6c310a6c6dc54c8c"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "a2609e6c7881f2021299035f9388db35"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "5ac4adb0e7d86903c916577cb68ad938"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "010af34939dedefc20e383f4ad6e220d"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "90337333c5b03ae01a434eac3ccab4a3"
  },
  {
    "url": "tag/List/index.html",
    "revision": "b56db7338b5bd1c0ebfe33ce12aee676"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "9e904dd5584a40947f650d4aaf1da8d6"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "07423972effa6177179221b6e7d4dceb"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "19a55b1cbe00e7628ddddd6b983b57f7"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "500597a48d74066995ae8f893074ae2a"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "225e2150c03c043d91e50cbfb86467da"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "20472531adbe1a18a37c02fc85170855"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "13265be262c9f3d24f49b88515e46a03"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "3c4691b056a07dc90f9c91d88aa340a9"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "84edb9bdc3642ba431a4c2dccac5ac6b"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "0544cdcdc59163c665c2d41e2a48628f"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "3a7eb5769df674bc969ecf9a54807053"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "ec613af50d9f463c8c283d4376eefd93"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "a4682487187f4bf356e5c1896f09692a"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "74f5e13f9a6ce3aefaf344ce28ced210"
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
