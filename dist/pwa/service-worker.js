if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,s)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let r={};const o=e=>n(e,a),f={module:{uri:a},exports:r,require:o};i[a]=Promise.all(c.map((e=>f[e]||o(e)))).then((e=>(s(...e),r)))}}define(["./workbox-cb3ce6c3"],(function(e){"use strict";e.setCacheNameDetails({prefix:"battleship"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"battleshipIcon.png",revision:"a9dc7673cba9c4fe6a12b6b88cd868e7"},{url:"css/336.d2afc763.css",revision:null},{url:"css/745.ea8cf1eb.css",revision:null},{url:"css/app.3657a855.css",revision:null},{url:"css/vendor.52108c74.css",revision:null},{url:"favicon.ico",revision:"52be27ebf066bb749790e323a1fb63f4"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.88899cc4.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.eae1cb5e.woff2",revision:null},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/facebookLogin.png",revision:"94d62ea2826cb289407a1660e2fe0ae2"},{url:"icons/favicon-128x128.png",revision:"f205889911904a56a8423ba77425c9dc"},{url:"icons/favicon-16x16.png",revision:"344ec1ac2f3cc05ceb8ca8e60e6573f6"},{url:"icons/favicon-32x32.png",revision:"44de3b70ec1b88734a0ad8f7bab03c75"},{url:"icons/favicon-96x96.png",revision:"e8975cf7874edcaba0f56c3661a6713e"},{url:"icons/gitHubSignIn.png",revision:"5f856cd4ce1f83115431ae1038964f87"},{url:"icons/googleSingIn.png",revision:"f7d33de80c47d89d6836cb5f85c55133"},{url:"icons/icon-128x128.png",revision:"060849ff3b8ee9794613540f9c15ca6b"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"3ac615281d15c7463d24490520cd57fc"},{url:"icons/icon-384x384.png",revision:"88f50ea3e5be729d817797f79c54d812"},{url:"icons/icon-512x512.png",revision:"61505c28e049d67b5268b479b7e32631"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"images/Battleship_game_board.jpg",revision:"fe90195a528c8de493d567cfe2a672f1"},{url:"images/battleship.jpg",revision:"d8c499b7d9027a3a7d687f9e80f81399"},{url:"images/battleshipGame.jpg",revision:"967fb1923c76290a3edbd370e8362a99"},{url:"images/battleshipTitle1.png",revision:"60acfa8e8458b0ff97ec344bfd0b990d"},{url:"images/battleshipTitle2.png",revision:"d24d4cb78c5b729ed00a925c7362232a"},{url:"images/battleshipTitleWhite.png",revision:"c1c07934514f1b57d3c820bdc0c77451"},{url:"images/boat1.png",revision:"c21b80af2db496a30a8bed532255cd85"},{url:"images/favicon.png",revision:"84a01dc6c53f0d2a58a2f7ff9e17a294"},{url:"images/miss.png",revision:"e59da2a6f69e12fdb89e0628632cef93"},{url:"images/missAfter.png",revision:"4c7fa117ed589e26b79f38bcea0cb72d"},{url:"images/missAfterAfter.png",revision:"1bb7ac80265afb7364d34ea05751c1cb"},{url:"images/pirateShip.png",revision:"addcb151b50de5beff44cc0b188647db"},{url:"images/pirateShipHit.png",revision:"030ee9cae2479efbae9a99fe2f6f8e85"},{url:"images/seaBackground1.jpg",revision:"96c02f0c4405617fad6b97d635c194e6"},{url:"images/seaBackground1Wide.jpg",revision:"809777c1f37de8fe2cf8269c0e578f6a"},{url:"images/seaBackground2.jpg",revision:"15d65dd6e074dc6c037dc280d5c27643"},{url:"images/shipRed.png",revision:"d16e7bd37c55f0d62c9318e3c2aaecc7"},{url:"images/shipRedHit.png",revision:"b55e4e80c96f61262a136acbbb8f1df7"},{url:"images/shootShip.png",revision:"ec667ac02726ce7f815ff288e723c23a"},{url:"images/whiteShip.png",revision:"afc05930c9bf8f422f04356aa8fc237d"},{url:"images/whiteShipHit.png",revision:"3be04c1df56ea0dfe2155666f2c08d9f"},{url:"img/icons/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"img/icons/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"845a39478d0e2d4d5d32a092de2de250"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"2695f5feb66cdb0c6f09d0e415824cf9"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"936d6e411cabd71f0e627011c3f18fe2"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"1a034e64d80905128113e5272a5ab95e"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"9a2b5c0f19de617685b7b5b42464e7db"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"af28d69d59284dd202aa55e57227b11b"},{url:"img/icons/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"img/icons/favicon-16x16.png",revision:"4bb1a55479d61843b89a2fdafa7849b3"},{url:"img/icons/favicon-32x32.png",revision:"98b614336d9a12cb3f7bedb001da6fca"},{url:"img/icons/msapplication-icon-144x144.png",revision:"b89032a4a5a1879f30ba05a13947f26f"},{url:"img/icons/mstile-150x150.png",revision:"058a3335d15a3eb84e7ae3707ba09620"},{url:"img/icons/safari-pinned-tab.svg",revision:"6de16254d1b4193353e7015f9177535d"},{url:"index.html",revision:"6ed0de364efebafb4abf64d13a939aa6"},{url:"javascripts/battleship.js",revision:"4a25a2cb29fdcade64a6a8fbf52b01ad"},{url:"js/193.15a043ce.js",revision:null},{url:"js/210.1c87ed50.js",revision:null},{url:"js/336.aa3b1c6f.js",revision:null},{url:"js/612.bb24f784.js",revision:null},{url:"js/745.beafc56b.js",revision:null},{url:"js/905.12d9c5ee.js",revision:null},{url:"js/app.cf5ba0da.js",revision:null},{url:"js/vendor.f32e8670.js",revision:null},{url:"manifest.json",revision:"109d10ab0479afa5d4d92b256ea1eefc"},{url:"robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
//# sourceMappingURL=service-worker.js.map
