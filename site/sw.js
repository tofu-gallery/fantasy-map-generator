importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js");

const {registerRoute, setCatchHandler} = workbox.routing;
const {CacheFirst, NetworkFirst, StaleWhileRevalidate} = workbox.strategies;
const {CacheableResponsePlugin} = workbox.cacheableResponse;
const {ExpirationPlugin} = workbox.expiration;
const {PrecacheController, PrecacheRoute, cleanupOutdatedCaches} = workbox.precaching;

self.skipWaiting();
workbox.core.clientsClaim();

const DAY = 24 * 60 * 60; // in seconds
const precache = new PrecacheController();
precache.addToCacheList([{"url":"Advanced-options-CUTInXyC.js","revision":"3c8d467b"},{"url":"Assistant-j3pecW0_.js","revision":"f9dd2e27"},{"url":"Battle-Simulator-EvJFGvEI.js","revision":"7ded2987"},{"url":"Changelog-Ct3CxFq0.js","revision":"1490f57b"},{"url":"Coastline-Editor-Bm7KFlWw.js","revision":"974602d0"},{"url":"Culture-sets-BkWbFNHf.js","revision":"d28f02fc"},{"url":"Culture-types-DX_IO-Hj.js","revision":"30196de9"},{"url":"Data-import-Cgd_JOZG.js","revision":"ed8522de"},{"url":"Dependencies-iXGjBrnx.js","revision":"58c121b6"},{"url":"Emblems-DAd_L6DZ.js","revision":"712be4d9"},{"url":"GIS-data-export-Bm5b3jxy.js","revision":"4b804e48"},{"url":"Geographical-Features-Overview-B-dotX0_.js","revision":"c945d555"},{"url":"Goods-spread-functions-lK-XNAWI.js","revision":"032b4575"},{"url":"Heightmap-customization-Bwv0gqk7.js","revision":"ed7479f3"},{"url":"Heightmap-image-overlay-4K250rLl.js","revision":"fa7e286e"},{"url":"Heightmap-template-editor-Dy3ZRcdZ.js","revision":"1fd8642f"},{"url":"Home-CzTFJhK0.js","revision":"9ee54282"},{"url":"Hotkeys-FK852lXt.js","revision":"4d6defa4"},{"url":"Icons-BkM6eRZn.js","revision":"bf9cb478"},{"url":"Install-with-Nix-DyyKMmMl.js","revision":"2a9164a2"},{"url":"Journeys-CYRbQVdj.js","revision":"623b0f17"},{"url":"Knowledge Base-U4YfuDRv.js","revision":"067e4505"},{"url":"LICENSE.txt","revision":"c44f4951"},{"url":"Map-embellishments-Ds6n3Van.js","revision":"fa7c2f5e"},{"url":"Markers-BViFNwgf.js","revision":"5eaf4b66"},{"url":"Military-Forces-tf4bnRnO.js","revision":"5fafdade"},{"url":"Ollama-text-generation-DP-WeU7w.js","revision":"b66b6c62"},{"url":"Omnibar-xZanHWOb.js","revision":"66fbe327"},{"url":"PackedGraph-Dcov4qiy.js","revision":"5f173a95"},{"url":"Performance-settings-DguNxvMG.js","revision":"5190a498"},{"url":"Policy-DkWTYuVJ.js","revision":"d26d05fd"},{"url":"Q_A-mpTX1OBh.js","revision":"f4c34032"},{"url":"Quick-Start-Tutorial-D9GudLlH.js","revision":"d23dac06"},{"url":"Reporting-bugs-and-ideas-CJDEmQvV.js","revision":"205507ae"},{"url":"River-Editor-BvGwqtYw.js","revision":"c0fb01b3"},{"url":"Run-FMG-locally-DCjn9mNi.js","revision":"0677e9d0"},{"url":"Scale-and-distance-CMJ7Vnse.js","revision":"1d29d77a"},{"url":"THIRD-PARTY-LICENSES.txt","revision":"9b674895"},{"url":"URL-parameters-Bbj7Po6E.js","revision":"69bcd904"},{"url":"User-Interface-Dp-4Kn-E.js","revision":"11870402"},{"url":"Working-offline-BjcPaP9y.js","revision":"0f8eb060"},{"url":"Wrap-Tool-CvixOv1C.js","revision":"db37eaea"},{"url":"_Footer-CoCNk46l.js","revision":"6bcf9a6f"},{"url":"af-CjA3hXbH.js","revision":"1ede7e51"},{"url":"ai-generator-BZ_8Uk6A.js","revision":"bd5b8e2b"},{"url":"annex-mode-DySIQai7.js","revision":"c4e8b8ba"},{"url":"app-C3meBrse.js","revision":"a3cca916"},{"url":"app-offer-Di0zsYi4.js","revision":"e4a38dbd"},{"url":"assistant-DvHhikLp.js","revision":"0cc129f5"},{"url":"auto-update-FbZYA3du.js","revision":"b3c7ec4c"},{"url":"axis-ChvWZg1j.js","revision":"6100f9ad"},{"url":"battle-screen-DltZNMXo.js","revision":"8f545500"},{"url":"be-BBQPyn9j.js","revision":"e40c6157"},{"url":"bg-CNCausC-.js","revision":"8d295221"},{"url":"biomes-editor-Mmt-OnEZ.js","revision":"08a8513b"},{"url":"bn-BmUc3oN7.js","revision":"c8aca779"},{"url":"brushUtils-B5xtY9tr.js","revision":"da893237"},{"url":"burg-creator-C_d4PfXp.js","revision":"0ef96fd1"},{"url":"burg-editor-C0K8cPIr.js","revision":"d88a19e3"},{"url":"burg-group-editor-BvpWrZ2O.js","revision":"a733c574"},{"url":"burgs-overview-CTWBzkpX.js","revision":"e22f4dc4"},{"url":"cell-info-BiPN9K-r.js","revision":"d5402f6c"},{"url":"charts-overview-B796lXON.js","revision":"01b09162"},{"url":"cloud-DOKHY9WQ.js","revision":"a0d1aadb"},{"url":"coastline-editor-CYHB5hVD.js","revision":"5d5e5976"},{"url":"color-picker-BH6EgIKa.js","revision":"07018ff7"},{"url":"compare-prices-Cvf3jhx4.js","revision":"8da66244"},{"url":"configuration-CYMJ6F0-.js","revision":"3104f2c6"},{"url":"connection-pvGflJND.js","revision":"d2b53c54"},{"url":"constant-CUk6ox2a.js","revision":"1abf13b6"},{"url":"context-menu-DxxJQSgz.js","revision":"2fa46a6c"},{"url":"controllers-lOfLnkBO.js","revision":"2207cd40"},{"url":"controls-DdyHmqKJ.js","revision":"a3b82e78"},{"url":"cs-BMB7SmVz.js","revision":"99e611c3"},{"url":"csv-BZ59UuP0.js","revision":"28dc69b8"},{"url":"csv-upload-aO5mOVRS.js","revision":"1d6e0293"},{"url":"cultures-editor-BtiNdmAR.js","revision":"8d739abd"},{"url":"cultures-generator-D2mn7qkG.js","revision":"cdd2ab59"},{"url":"da-lReVpyYL.js","revision":"87d82d37"},{"url":"data-model-CxLqlxM8.js","revision":"d2017b2e"},{"url":"de-Csrv4ZBr.js","revision":"a497f49d"},{"url":"dialog-helpers-kMHr89OS.js","revision":"21edbc77"},{"url":"diplomacy-CV45FeJs.js","revision":"940eaa98"},{"url":"diplomacy-DdUbadZX.js","revision":"d5d3830e"},{"url":"diplomacy-editor-QOL8KNRh.js","revision":"f13585a7"},{"url":"diplomacy-overview-BouRcATI.js","revision":"7b83ac4f"},{"url":"drag-C_reJWZK.js","revision":"0e224882"},{"url":"draw-landmass-DV6ieuK9.js","revision":"dc4cd670"},{"url":"dropbox.html","revision":"66bd6136"},{"url":"effects-qoEqmbHA.js","revision":"09402dde"},{"url":"el-Dw4I3jD_.js","revision":"b1fe42da"},{"url":"elevation-profile-uEDEg3-H.js","revision":"8c55b7ac"},{"url":"emblem-image-lwUYLSL0.js","revision":"4000284a"},{"url":"emblems-6bhvewnB.js","revision":"2bdf4a74"},{"url":"emblems-editor-wWcUXkcy.js","revision":"b109d902"},{"url":"emblems-generator-B3pPl-l-.js","revision":"7d967425"},{"url":"en-CKoWaY7_.js","revision":"2eaae30c"},{"url":"es-DvssMAWF.js","revision":"cf509bc2"},{"url":"export-CUr5GPeL.js","revision":"7a9541a7"},{"url":"export-json-B9XARgUE.js","revision":"16576042"},{"url":"extent-V-JVJWfI.js","revision":"38b4e56c"},{"url":"features-generator-CEtu9LJ4.js","revision":"5a8e4d3f"},{"url":"features-overview-DgDF3OGT.js","revision":"89c22e2a"},{"url":"fonts-CgEouFVh.js","revision":"e679b8ff"},{"url":"fr-D7nGn27B.js","revision":"fd7e5801"},{"url":"generation-pipeline-DKnB7nUC.js","revision":"6ea401de"},{"url":"good-editor-BemR4eYd.js","revision":"39707de4"},{"url":"goods-distribution-editor-C7DU4slx.js","revision":"ecb9b9c5"},{"url":"goods-editor-ip2d17Uv.js","revision":"925acad3"},{"url":"goods-generator-BJ5zKjkt.js","revision":"81229853"},{"url":"graph-override-D38xNizN.js","revision":"5372befd"},{"url":"hatches-rNzhowW1.js","revision":"cb9ac710"},{"url":"heightUtils-BfaaFPbS.js","revision":"28145eb3"},{"url":"heightmap-editor-DJaTo5Sq.js","revision":"13b720b7"},{"url":"heightmap-selection-BsCfu-y0.js","revision":"8e67ddcf"},{"url":"heightmaps/africa-centric.png","revision":"5983b84f"},{"url":"heightmaps/arabia.png","revision":"60e4b200"},{"url":"heightmaps/atlantics.png","revision":"297ee191"},{"url":"heightmaps/britain.png","revision":"184d3e92"},{"url":"heightmaps/caribbean.png","revision":"e3a7f190"},{"url":"heightmaps/east-asia.png","revision":"7a7cc7e1"},{"url":"heightmaps/eurasia.png","revision":"b39d203b"},{"url":"heightmaps/europe-accented.png","revision":"e83ef22a"},{"url":"heightmaps/europe-and-central-asia.png","revision":"a78319b6"},{"url":"heightmaps/europe-central.png","revision":"28f7f5f5"},{"url":"heightmaps/europe-north.png","revision":"5c75687a"},{"url":"heightmaps/europe.png","revision":"7f7debbe"},{"url":"heightmaps/greenland.png","revision":"403c79ec"},{"url":"heightmaps/hellenica.png","revision":"a26c47fe"},{"url":"heightmaps/iceland.png","revision":"9e6b3932"},{"url":"heightmaps/import-rules.txt","revision":"717d7d5b"},{"url":"heightmaps/indian-ocean.png","revision":"0fde55cb"},{"url":"heightmaps/mediterranean-sea.png","revision":"da56ae5f"},{"url":"heightmaps/middle-east.png","revision":"f7764042"},{"url":"heightmaps/north-america.png","revision":"a34787a2"},{"url":"heightmaps/us-centric.png","revision":"8f491da6"},{"url":"heightmaps/us-mainland.png","revision":"4d5b9521"},{"url":"heightmaps/world-from-pacific.png","revision":"64a9b798"},{"url":"heightmaps/world.png","revision":"71e82ef4"},{"url":"hi-BgjwWxu2.js","revision":"c5b4b934"},{"url":"hierarchy-tree-DK9bGpkg.js","revision":"85e64315"},{"url":"highlight-DOx2q_4P.js","revision":"a5682575"},{"url":"highlighting-CMuZl7i6.js","revision":"33263937"},{"url":"hu-CTwSettf.js","revision":"9f62b97d"},{"url":"ice-editor-MNz_BRz-.js","revision":"6124246f"},{"url":"icon-picker-CNUMuMyc.js","revision":"783efb62"},{"url":"icons-archive-BP8RzLBi.js","revision":"d80524d4"},{"url":"icons-burgs-d_96w57F.js","revision":"271c0341"},{"url":"icons-charges-agriculture-C-PwSOOM.js","revision":"c5627c34"},{"url":"icons-charges-architecture-BUhFekTY.js","revision":"591f1c22"},{"url":"icons-charges-arms-B4XcwTQ1.js","revision":"0a852a36"},{"url":"icons-charges-beastHeads-Bv93V2iA.js","revision":"d3ce2745"},{"url":"icons-charges-beasts-BeIO15Je.js","revision":"61e1b2b5"},{"url":"icons-charges-birds-D9QJUD7H.js","revision":"ae180f91"},{"url":"icons-charges-bodyparts-pyc2xcEC.js","revision":"9dc79cdb"},{"url":"icons-charges-bugs-CKqIrQ5l.js","revision":"4b70c813"},{"url":"icons-charges-conventional-C5f9hk07.js","revision":"e27fedc3"},{"url":"icons-charges-crosses-v5NrA1zb.js","revision":"6b192b82"},{"url":"icons-charges-fantastic-Y5mG8wbu.js","revision":"a163a9c1"},{"url":"icons-charges-fishes-CNSQZt16.js","revision":"804ca97f"},{"url":"icons-charges-miscellaneous-BQf6wt5K.js","revision":"a3b03620"},{"url":"icons-charges-molluscs-BRsUpd-I.js","revision":"7ac18c2c"},{"url":"icons-charges-ornaments-CcGzSLEe.js","revision":"9a84075d"},{"url":"icons-charges-people-gMRwRSyR.js","revision":"fe0413c5"},{"url":"icons-charges-plants-XPJdSku7.js","revision":"743cabed"},{"url":"icons-charges-reptiles-BJwy21VG.js","revision":"c4a6a646"},{"url":"icons-charges-seafaring-B1l5oiov.js","revision":"af1aea39"},{"url":"icons-charges-tools-BR_O-8Xi.js","revision":"fe4a444e"},{"url":"icons-goods-BqFHgc3p.js","revision":"c23abb61"},{"url":"icons-list-BiXau1Li.js","revision":"e1122591"},{"url":"icons-ports-Co1bQrPj.js","revision":"ae20cf30"},{"url":"icons-relief-colored-C23BrPeN.js","revision":"db395ff5"},{"url":"icons-relief-gray-CSBBtfQo.js","revision":"c54d61c4"},{"url":"icons-relief-illustrated-DkokGdn-.js","revision":"391c85ce"},{"url":"icons-relief-simple-d50hg9Un.js","revision":"f1d06ac5"},{"url":"icons-relief-stickers-DEps47gG.js","revision":"7be1cbea"},{"url":"icons.css","revision":"1421ad39"},{"url":"id-CUO1mwD7.js","revision":"1fee43c9"},{"url":"id-labels-Bh86rU1j.js","revision":"b3434376"},{"url":"images/Discord.png","revision":"c286fac8"},{"url":"images/Facebook.png","revision":"d8f6fd63"},{"url":"images/Pinterest.png","revision":"8180482a"},{"url":"images/Reddit.png","revision":"1d9fb4c9"},{"url":"images/Twitter.png","revision":"3d4be405"},{"url":"images/icons/favicon-16x16.png","revision":"ef1dc52c"},{"url":"images/icons/favicon-32x32.png","revision":"85b2ed24"},{"url":"images/icons/icon_x512.png","revision":"96db41ec"},{"url":"images/icons/maskable_icon_x128.png","revision":"43deca06"},{"url":"images/icons/maskable_icon_x192.png","revision":"8df7457d"},{"url":"images/icons/maskable_icon_x384.png","revision":"29269c99"},{"url":"images/icons/maskable_icon_x512.png","revision":"a4549048"},{"url":"images/kiwiroo.png","revision":"61f54115"},{"url":"images/markers/ship.svg","revision":"2ab0488f"},{"url":"images/markers/wagon.svg","revision":"b886e64e"},{"url":"images/pattern1.png","revision":"5bed361c"},{"url":"images/pattern2.png","revision":"f0940ccd"},{"url":"images/pattern3.png","revision":"e17a59c5"},{"url":"images/pattern4.png","revision":"4c29905f"},{"url":"images/pattern5.png","revision":"27767e4b"},{"url":"images/pattern6.png","revision":"54e9be30"},{"url":"images/preview.png","revision":"d30e01fe"},{"url":"images/style-presets/ancient.avif","revision":"1f8ce67c"},{"url":"images/style-presets/atlas.avif","revision":"8c4871c4"},{"url":"images/style-presets/cinderwood.avif","revision":"c24dd37c"},{"url":"images/style-presets/clean.avif","revision":"c4cccc45"},{"url":"images/style-presets/cyberpunk.avif","revision":"48b0c56e"},{"url":"images/style-presets/darkSeas.avif","revision":"44b7954c"},{"url":"images/style-presets/default.avif","revision":"347a7e43"},{"url":"images/style-presets/frostbite.avif","revision":"bbbbaeef"},{"url":"images/style-presets/gloom.avif","revision":"0ab45eb3"},{"url":"images/style-presets/ink.avif","revision":"b622b205"},{"url":"images/style-presets/light.avif","revision":"7196d45a"},{"url":"images/style-presets/monochrome.avif","revision":"39b3cdd1"},{"url":"images/style-presets/night.avif","revision":"8d13e517"},{"url":"images/style-presets/pale.avif","revision":"6827632a"},{"url":"images/style-presets/watercolor.avif","revision":"e0c90db2"},{"url":"images/textures/antique-big.jpg","revision":"e018ce4b"},{"url":"images/textures/antique-small.jpg","revision":"18ebde80"},{"url":"images/textures/folded-paper-big.jpg","revision":"eb156d1b"},{"url":"images/textures/folded-paper-small.jpg","revision":"d4588330"},{"url":"images/textures/gray-paper.jpg","revision":"79d3e355"},{"url":"images/textures/iran-small.jpg","revision":"7a2c9c37"},{"url":"images/textures/marble-big.jpg","revision":"264f0ff8"},{"url":"images/textures/marble-blue-big.jpg","revision":"85017608"},{"url":"images/textures/marble-blue-small.jpg","revision":"7aa3717b"},{"url":"images/textures/marble-small.jpg","revision":"062aabd9"},{"url":"images/textures/mars-big.jpg","revision":"e835a07b"},{"url":"images/textures/mars-small.jpg","revision":"6cefbda7"},{"url":"images/textures/mauritania-small.jpg","revision":"8886930b"},{"url":"images/textures/mercury-big.jpg","revision":"1603b5c7"},{"url":"images/textures/mercury-small.jpg","revision":"334fbff6"},{"url":"images/textures/ocean.jpg","revision":"4fc82bfc"},{"url":"images/textures/pergamena-small.jpg","revision":"eeb50ab4"},{"url":"images/textures/plaster.jpg","revision":"0094ce95"},{"url":"images/textures/soiled-paper-vertical.png","revision":"0b33f76d"},{"url":"images/textures/soiled-paper.jpg","revision":"af3e72ba"},{"url":"images/textures/spain-small.jpg","revision":"c7fdf23d"},{"url":"images/textures/timbercut-big.jpg","revision":"1f009d0e"},{"url":"images/textures/timbercut-small.jpg","revision":"93c12f56"},{"url":"images/tour-button-icon.png","revision":"093d2feb"},{"url":"images/waves.png","revision":"d6665b72"},{"url":"images/whitecaps.png","revision":"02c85e61"},{"url":"index-CuUJKJN8.js","revision":"de55b81d"},{"url":"index.css","revision":"003246c5"},{"url":"index.html","revision":"2f62f55f"},{"url":"io-panes-DVZJgAih.js","revision":"175faa67"},{"url":"it-DVRZ-0of.js","revision":"237e9516"},{"url":"ja-QUmRhVOF.js","revision":"6d3c2a30"},{"url":"journey-editor-DMoZsH9c.js","revision":"7ee796d6"},{"url":"journey-travel-DBK49yRJ.js","revision":"31d92cff"},{"url":"journeys-overview-Dual_GZj.js","revision":"f86824e1"},{"url":"ko-YNnNOOUt.js","revision":"1211183e"},{"url":"label-arc-8P6f8_MH.js","revision":"e51979a4"},{"url":"label-creator-CG8ANSg9.js","revision":"17e6ce7d"},{"url":"labels-editor-Ca_8IxBf.js","revision":"deed5b5f"},{"url":"labels-generator-ft6xLK0P.js","revision":"da509a5c"},{"url":"labels-group-editor-DoByFPSY.js","revision":"4c50ebb8"},{"url":"labels-overview-Bda3So0G.js","revision":"575b77a9"},{"url":"lakes-editor-DDUu4uxh.js","revision":"33043eb6"},{"url":"layer-labels-B60lVHW8.js","revision":"611f5e23"},{"url":"layers-CpGI7aJd.js","revision":"691a28e5"},{"url":"layers-tab-Brzrj8zh.js","revision":"5d179f71"},{"url":"libs/alea.min.js","revision":"4e59c20e"},{"url":"libs/d3.min.js","revision":"c6c1a886"},{"url":"libs/delaunator.min.js","revision":"ddbdb0f6"},{"url":"libs/dropbox-sdk.min.js","revision":"72c63328"},{"url":"libs/flatqueue.js","revision":"c41f52be"},{"url":"libs/indexedDB.js","revision":"84a8bb23"},{"url":"libs/jquery-3.1.1.min.js","revision":"85556761"},{"url":"libs/jquery-ui.css","revision":"f2ff5e58"},{"url":"libs/jquery-ui.min.js","revision":"e3c94d49"},{"url":"libs/jquery.ui.touch-punch.min.js","revision":"000854d7"},{"url":"libs/jszip.min.js","revision":"301f9629"},{"url":"libs/loopsubdivison.min.js","revision":"f4446f9b"},{"url":"libs/mapControls.min.js","revision":"7afc1cd5"},{"url":"libs/objexporter.min.js","revision":"3b879583"},{"url":"libs/orbitControls.min.js","revision":"93ead010"},{"url":"libs/polylabel.min.js","revision":"940d1f19"},{"url":"libs/rgbquant.min.js","revision":"557e7e62"},{"url":"libs/simplify.js","revision":"2580cc23"},{"url":"libs/three.min.js","revision":"941d19ba"},{"url":"limitation-picker-DxKnNDnC.js","revision":"57d61415"},{"url":"load-CpNgV_zq.js","revision":"2e58cb0f"},{"url":"lore-CPF9F9es.js","revision":"ff536df9"},{"url":"lore-editor-DSnS43oU.js","revision":"58a1bee4"},{"url":"manifest.webmanifest","revision":"b989c1f5"},{"url":"map-brush-D_KavxSm.js","revision":"ca63cf97"},{"url":"map-commands-CwSMNFYl.js","revision":"8b3aed91"},{"url":"map-entities-NpzkL-1b.js","revision":"a4d0ab60"},{"url":"map-placement-BsSgkT64.js","revision":"16c02b6b"},{"url":"map-restoration-DNmGwu8D.js","revision":"d826caa0"},{"url":"marker-creator-C_wVyUd-.js","revision":"1536f45d"},{"url":"markers-editor-CT5Ytuci.js","revision":"ce15d7c7"},{"url":"markers-in-radius-FVtjgR1m.js","revision":"bf560c12"},{"url":"markers-overview-DyfWDqkv.js","revision":"5da80443"},{"url":"markers-settings-CQyCFdL-.js","revision":"b52deaab"},{"url":"market-deals-overview-D4IsAusf.js","revision":"e98a0593"},{"url":"market-overview-BzbBchKE.js","revision":"436d802c"},{"url":"markets-overview-BTSQ2dp2.js","revision":"ae06e4c4"},{"url":"mean-4Awewi9R.js","revision":"705d432d"},{"url":"measurers-editor-DQy6Mcpf.js","revision":"84dfd2af"},{"url":"measurers-generator-C5MWPpMZ.js","revision":"46d490a6"},{"url":"median-v2puX28K.js","revision":"b2886cc6"},{"url":"military-overview-DLqTTpZ5.js","revision":"3d601765"},{"url":"minimap-DZHjbwRW.js","revision":"edc0468d"},{"url":"names-generator-CquhchJC.js","revision":"b45e898e"},{"url":"namesbase-editor-CE__mEVD.js","revision":"6e0d66a9"},{"url":"natural-rv4BlkMW.js","revision":"dda550ad"},{"url":"nl-DiI-4c4J.js","revision":"f4816a30"},{"url":"notes-BeusfcIz.js","revision":"0da6ba1b"},{"url":"notes-editor-DVB7LGv8.css","revision":"f77202e3"},{"url":"notes-editor-Dw6PUTAD.js","revision":"bff2c7d0"},{"url":"omnibar-CwkfONRH.js","revision":"896314c3"},{"url":"options-schema-B_ig2znS.js","revision":"664268b8"},{"url":"options-tab-DhjqEPSL.js","revision":"32efc967"},{"url":"pack-CyBKcrr4.js","revision":"f082fa13"},{"url":"paint-editor-C7gTltaX.js","revision":"d10dfaf6"},{"url":"pictures-C6C6r3PL.js","revision":"eddf43b1"},{"url":"pins-BgZ3A9ES.js","revision":"4aa7d92f"},{"url":"pl-t2GUHLZR.js","revision":"5515d39f"},{"url":"platform-BYwF3i_d.js","revision":"9baec3e9"},{"url":"population-generator-C23gWLdN.js","revision":"03bb69f0"},{"url":"production-chains-C_sofgg8.js","revision":"edb11347"},{"url":"production-overview-Cz2TbKSq.js","revision":"24bf3c62"},{"url":"provinces-editor-BXFqi6mI.js","revision":"f7340607"},{"url":"provinces-regeneration-CXYF0GQ0.js","revision":"2bb987bd"},{"url":"pt-BR-CQiY_C3m.js","revision":"76c55b27"},{"url":"pt-Bot3Atlu.js","revision":"d4c7f46c"},{"url":"quadtree-DDGKeVV-.js","revision":"afe28819"},{"url":"regiment-editor-DmKHE96z.js","revision":"48fe3197"},{"url":"regiments-overview-DrTkuoxt.js","revision":"ea7437a5"},{"url":"relief-editor-Bwf14nA-.js","revision":"bdf4df57"},{"url":"relief-generator-LqnpKd9V.js","revision":"db349fb8"},{"url":"relief-pool-editor-DyxWu2Zi.js","revision":"6597e52d"},{"url":"relief-previews-9w_Tsy0M.js","revision":"5d94b368"},{"url":"relief-rules-editor-6aIrDAG4.js","revision":"51c8e946"},{"url":"religions-editor-D4gDBGg-.js","revision":"cde27636"},{"url":"reveal-Bif-TDKz.js","revision":"2615d1c7"},{"url":"river-auto-creator-B_Z79Lvi.js","revision":"0d4cbe82"},{"url":"river-creator-shMIhMSF.js","revision":"d4e9c908"},{"url":"river-editor-BB9SZwZr.js","revision":"a1cb4c5d"},{"url":"rivers-overview-Bk5Kp4_w.js","revision":"f07424f9"},{"url":"ro-v97cuXX9.js","revision":"36459c45"},{"url":"rolldown-runtime-XKyaHtl9.js","revision":"548d1dbf"},{"url":"route-creator-hP_32p29.js","revision":"6f68517c"},{"url":"route-editor-IYapKMwQ.js","revision":"ea1441c1"},{"url":"route-groups-editor-Dz2Lwvpz.js","revision":"a2b17124"},{"url":"routes-overview-BIO-pJ2g.js","revision":"09cc2818"},{"url":"ru-Bx1fI3-9.js","revision":"09104b14"},{"url":"schema-form-4Hu8vVgd.js","revision":"f2ebe114"},{"url":"schemaUtils-BT1J-24V.js","revision":"2261e3a3"},{"url":"sin-DYm9hqTl.js","revision":"fe4d8721"},{"url":"state-B2hBYDzv.js","revision":"566a1269"},{"url":"states-editor-S1XvcFsd.js","revision":"a0d4831a"},{"url":"stratify-CGdiYggi.js","revision":"171bdc70"},{"url":"style-choices-BWMuX7s6.js","revision":"e468d603"},{"url":"style-editor-D43VbKh2.js","revision":"7ca3f1dc"},{"url":"style-preset-BOcOHlR8.js","revision":"f95e0b00"},{"url":"style-presets-DshwVNWM.js","revision":"9a7692da"},{"url":"style-reference-CVPTwItr.js","revision":"7b790566"},{"url":"styles-2PRH8Ggz.js","revision":"724c6757"},{"url":"styles-legacy--bqN3hoN.js","revision":"97c3b31f"},{"url":"styles/ancient.json","revision":"39172320"},{"url":"styles/atlas.json","revision":"537658dd"},{"url":"styles/cinderwood.json","revision":"5696d6b2"},{"url":"styles/clean.json","revision":"3a9dd697"},{"url":"styles/cyberpunk.json","revision":"65ed46db"},{"url":"styles/darkSeas.json","revision":"5a197282"},{"url":"styles/frostbite.json","revision":"25be4c24"},{"url":"styles/gloom.json","revision":"67c767be"},{"url":"styles/ink.json","revision":"672dd06b"},{"url":"styles/light.json","revision":"07ec5b99"},{"url":"styles/monochrome.json","revision":"835cce51"},{"url":"styles/night.json","revision":"b80c3b0c"},{"url":"styles/pale.json","revision":"1e322783"},{"url":"styles/watercolor.json","revision":"ccb265bf"},{"url":"submap-tool-BVi8VcZR.js","revision":"c03392b6"},{"url":"sum-BpJJqxFM.js","revision":"a5c15474"},{"url":"sv-DvgLEXYa.js","revision":"c0b05792"},{"url":"table-CEa9eCSl.js","revision":"b05b93e3"},{"url":"tags-4fjWFj3G.js","revision":"b9c5c35b"},{"url":"temperature-graph-C5Otvgbr.js","revision":"68a7a2a3"},{"url":"textures-DM0j3iRU.js","revision":"9449b958"},{"url":"th-DyXTWULX.js","revision":"cad24896"},{"url":"tooltips-7PimaK30.js","revision":"09c6f7be"},{"url":"tr-CkVa3bjG.js","revision":"53ebc99e"},{"url":"trade-animation-editor-6AsxHFyP.js","revision":"fcfada2e"},{"url":"trade-details-wj7ZnYda.js","revision":"337970b2"},{"url":"transform-tool-CcxopDmM.js","revision":"03d8f1b8"},{"url":"transport-editor-BcmsMz9J.js","revision":"120e77c0"},{"url":"transports-generator-Dv1kk2bu.js","revision":"28805396"},{"url":"ui-tour-CWXCubYt.css","revision":"ff1934a5"},{"url":"ui-tour-Dis5uj6x.js","revision":"d39f6294"},{"url":"uk-BwLRJ79m.js","revision":"854a16c2"},{"url":"unitUtils-B91DAWIJ.js","revision":"494f6e73"},{"url":"units-editor-CM8osbvq.js","revision":"026245f5"},{"url":"utils-394NS37_.js","revision":"7557ae0f"},{"url":"validationUtils-uGrkd4tj.js","revision":"e1fb820f"},{"url":"versioning-BZd9Nc6V.js","revision":"67092037"},{"url":"vi-BD_SGHoi.js","revision":"0e7c3eae"},{"url":"view-3d-C3QqOZHG.js","revision":"4db4031c"},{"url":"view-3d-options-DIuwGcyW.js","revision":"a1fdb389"},{"url":"view-3d-renderer-DlG0ycT2.js","revision":"2d8a9970"},{"url":"view-mode-C_KDkpw9.js","revision":"1ec2194d"},{"url":"viewbox-events-DpWtTLWO.js","revision":"31c50ee1"},{"url":"viewport-C0deAIKO.js","revision":"a398cde9"},{"url":"world-D8DpDNxH.js","revision":"3c65e98e"},{"url":"world-configurator-uu6vedjQ.js","revision":"5e59ba43"},{"url":"wrap-tool-BcwV36ox.js","revision":"7189802a"},{"url":"zh-C7WVt5sG.js","revision":"3a8ca1a1"},{"url":"zh-TW-CsDWVC1y.js","revision":"80f72179"},{"url":"zones-editor-u8fyb2je.js","revision":"440b2a94"},{"url":"zoom-B1u9LW1L.js","revision":"04821911"}] || []);
const assets = new CacheFirst({
  cacheName: precache.strategy.cacheName,
  plugins: [...precache.strategy.plugins, new CacheableResponsePlugin({statuses: [200]})]
});
const runtimeAssets = new CacheFirst({
  cacheName: "fmg-assets",
  plugins: [...assets.plugins, new ExpirationPlugin({maxEntries: 100, maxAgeSeconds: 30 * DAY})]
});
const indexURL = new URL("index.html", self.location.href).href;
const offlineCacheName = `fmg-offline-${self.registration.scope}`;
let offlineDownload;

registerRoute(
  ({request}) => request.mode === "navigate",
  new NetworkFirst({
    networkTimeoutSeconds: 15,
    cacheName: "fmg-html",
    plugins: [
      new CacheableResponsePlugin({statuses: [0, 200]}),
      {cachedResponseWillBeUsed: async ({cachedResponse}) => (await offlinePage()) || cachedResponse}
    ]
  })
);

cleanupOutdatedCaches();
const assetRoute = new PrecacheRoute(precache, {ignoreURLParametersMatching: [/.*/]});
registerRoute(assetRoute.match, async options => {
  const stamp = options.url.searchParams.get("v");
  if (/^[a-f0-9]{8}$/.test(stamp)) {
    // Keep content-hash stamps from stamp-assets.js tied to their original revision.
    const key = new URL(options.params.cacheKey);
    key.searchParams.set("__WB_REVISION__", stamp);
    options.params.cacheKey = key.href;
  }
  return (await caches.match(options.params.cacheKey, {cacheName: assets.cacheName})) || runtimeAssets.handle(options);
});

self.addEventListener("message", event => {
  if (event.data?.type !== "CACHE_OFFLINE") return;
  offlineDownload ||= cacheOffline(event).finally(() => { offlineDownload = undefined; });
  event.waitUntil(offlineDownload.then(
    () => event.ports[0]?.postMessage({type: "CACHE_OFFLINE", ok: true}),
    error => {
      console.warn("Offline caching failed: ", error);
      event.ports[0]?.postMessage({type: "CACHE_OFFLINE", ok: false});
    }
  ));
});

async function cacheOffline(event) {
  const offlineCache = await caches.open(offlineCacheName);
  const previous = await offlinePage();
  if (previous) await offlineCache.put(indexURL, previous);

  // Commit the offline page and remove old assets only after the whole download succeeds.
  const urls = precache.getCachedURLs().filter(url => url !== indexURL);
  urls.push(indexURL);
  for (const url of urls) {
    const request = new Request(url, {cache: "reload", credentials: "same-origin"});
    const [response] = await Promise.all(assets.handleAll({event, request}));
    if (response.status !== 200) throw new Error(`Cannot cache ${url}: ${response.status}`);
  }
  await offlineCache.put(indexURL, await precache.matchPrecache(indexURL));
  await precache.activate(event);
}

async function offlinePage() {
  const offlineCache = await caches.open(offlineCacheName);
  const cache = await caches.open(assets.cacheName);
  return (await offlineCache.match(indexURL)) || cache.match(indexURL, {ignoreSearch: true});
}

setCatchHandler(async ({request}) => {
  if (request.mode === "navigate") return (await offlinePage()) || Response.error();
  const cache = await caches.open(assets.cacheName);
  return (await cache.match(request, {ignoreSearch: true})) || Response.error();
});

const retainedAssets = {
  cachedResponseWillBeUsed: async ({request, cachedResponse}) =>
    cachedResponse || caches.match(request, {cacheName: assets.cacheName, ignoreSearch: true})
};

// Google-hosted scripts (analytics) are left to the browser: with a blocker installed the
// request never gets a response, and a worker strategy would surface that as an uncaught error
registerRoute(
  ({request, url}) =>
    request.destination === "script" &&
    !url.pathname.endsWith("min.js") &&
    !url.hostname.includes("google"),
  new StaleWhileRevalidate({
    cacheName: "fmg-scripts",
    plugins: [
      new CacheableResponsePlugin({statuses: [0, 200]}),
      new ExpirationPlugin({maxEntries: 100, maxAgeSeconds: 30 * DAY}),
      retainedAssets
    ]
  })
);

registerRoute(
  ({request}) => request.destination === "style",
  new CacheFirst({
    cacheName: "fmg-stylesheets",
    plugins: [
      new CacheableResponsePlugin({statuses: [0, 200]}),
      new ExpirationPlugin({maxEntries: 100, maxAgeSeconds: 30 * DAY}),
      retainedAssets
    ]
  })
);

registerRoute(
  ({request, url}) => request.destination === "script" && url.pathname.endsWith("min.js"),
  new CacheFirst({
    cacheName: "fmg-libs",
    plugins: [
      new CacheableResponsePlugin({statuses: [0, 200]}),
      new ExpirationPlugin({maxEntries: 100, maxAgeSeconds: 30 * DAY}),
      retainedAssets
    ]
  })
);

registerRoute(
  new RegExp(".json$"),
  new CacheFirst({
    cacheName: "fmg-json",
    plugins: [
      new CacheableResponsePlugin({statuses: [0, 200]}),
      new ExpirationPlugin({maxEntries: 100, maxAgeSeconds: 30 * DAY}),
      retainedAssets
    ]
  })
);

registerRoute(
  ({request}) => request.destination === "image",
  new CacheFirst({
    cacheName: "fmg-images",
    plugins: [
      new CacheableResponsePlugin({statuses: [0, 200]}),
      new ExpirationPlugin({maxEntries: 100, maxAgeSeconds: 60 * DAY}),
      retainedAssets
    ]
  })
);

registerRoute(
  ({request}) => request.destination === "font",
  new CacheFirst({
    cacheName: "fmg-fonts",
    plugins: [
      new CacheableResponsePlugin({statuses: [0, 200]}),
      new ExpirationPlugin({maxEntries: 100, maxAgeSeconds: 60 * DAY}),
      retainedAssets
    ]
  })
);
