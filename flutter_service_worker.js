'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "85489dc4113ef2cec683ae8cb32d197e",
".git/config": "af99d13fe766358468ef288b5493f562",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1cd8a8f27f99eb9c9a1b86eb6d810418",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "48bca0067f7a7e9752aebf314860b61d",
".git/logs/refs/heads/main": "22d3135f871035b6b1462df5ecb2aad8",
".git/logs/refs/remotes/origin/main": "a1b896031ed39bf10f70b9aa684cfbe3",
".git/objects/02/42520bca31bffc4a83b96ad660bf29aedb0996": "cc96ac68fc618523cf97a08643b5525f",
".git/objects/03/c20be8761e4b1ef6a12f93bafc8ab16d30c1b1": "787b59446779fc29d73d86178a9fe3be",
".git/objects/03/c6c978fb43cceafdbfbbf5293ae2b681f85d74": "6389808d1f061780c47e5ab67a36b49c",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/07/1f848ae89c229669f6ebcc3812c7bfd25677f4": "673a98587af7c0eeaa7011ace0862d76",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0b/df59918f9a9c4b76db50ac0435fa3a3c567949": "3da72b036eb121a9cf17a4891f6e197d",
".git/objects/0d/8f4db3c4a3035a9c83f9caf2a6b3180901f349": "550df89a6ec19d2f995c58f4cf0cc266",
".git/objects/11/bdc016b4f6c1bbae783a1ca514c2cb3331dedd": "d7b1c6c746959c76c96a2a8fdb2b593d",
".git/objects/14/d4dc731a90f7b79c774f7c8508f92d59792364": "4a79f1a9120f4ef397d277e86e912c04",
".git/objects/15/a7637aaeb677612ce3f801ce6cc533d2bd7ff3": "c4f17d78757cb3aa8101f32365cdcce4",
".git/objects/17/18df0c7ca36394968f2b23fa45fce239e33d2b": "4227f14d95593cd83485d8eab9980305",
".git/objects/18/139b488892069398d1ba80e197a2217fff3a58": "5b6b9df70ed631586de489a525d6091c",
".git/objects/1a/a175b0f26181b95a0380049f80185916c964c2": "2f818398d6f416d90e0d13926a255e5a",
".git/objects/1b/13ea4acdb515d3d5be3ab205f389bf9f3ddac0": "4d1b7779562f9496c85a2d99d303edf4",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/22/ff5f4cdf23b6ce0affc4b467b121987de6a4fb": "e8b81270e9c87bd3114873e1c766a6b5",
".git/objects/23/456f693fd8a39582e98f7aa29163bcb35732bf": "f6f45686b66e585ec11e6a8856be032f",
".git/objects/24/13dcba0e5979dccafb0417a35472e773e91814": "834a328357c9fd09332b0ec16f27f8b2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/1f99ac22ff8c5e37f0b04eb081d40760459e82": "be45072097d80eda8903e561aea1249a",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2a/dd2697df9b83c1c15f2a8e70f02d1d0618a63f": "ccfa6fa303b79a85af0c1808ff47fb1e",
".git/objects/2d/79aad34b88cc23f937b7e30b10cb9ce81b3426": "21a2e91dbec0b8fb517f47a2daa93b3a",
".git/objects/2e/6a0d3c1af84d13e45cd677c1345c2cdcf1c58d": "d7d5069b3aee18100d7e50f8f40a9711",
".git/objects/2e/af4e39e32ee89687ee00843c576b9f91e4cf41": "9e171242906066b2c8fcebb65e597352",
".git/objects/31/1f51938a167cad51e994d4dca9226cebe4b8b6": "a0c5c040cd852622978dd8cdb6707124",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/24f241bd0a659ccc5214b6f5826c2ee3ad2540": "a4cff79130915e21cf0f2dd2267a4f4b",
".git/objects/35/a0be148dd0adc2bb847f838bfbc84d89358f26": "785df9d5fa9d91ad2b716cd96663f4df",
".git/objects/37/9daa5ab9ffdebc216cc90dac3318b71b05d40e": "491b91fa3162a39303efb0ed882e8a9f",
".git/objects/37/c66d86474de24de86c206babdba6e1dd1eb8bd": "f680f598a2f4a9b7bf6e591a78836fb3",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/3746bd45783ecc119b8031895fdfacb2caee0a": "aa7bb44a187a6bfd0aad5ebf221b1509",
".git/objects/3e/fa4d03f6a4500cb0bc549d1fa8cc5a6e11c698": "20c54a7af9eb96cfe0c019e99388f3f9",
".git/objects/3f/4ca1e9ea49f2e7962d862dbbfca6221b041f07": "552f6b78b90f4226c0ad9b7d4e18c0bf",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/ad6e0c14aaee74ee0f0e12e21692c7b75292ae": "a609139136bad819f5be0ab641fe08a8",
".git/objects/41/3305418bde9d869ac1a077c02dc7fc86cf3cb9": "a0c54f12c4488fb394e060d2e4fcba13",
".git/objects/42/031e6eb7f471a24e16c4a5eb22ee885ccef778": "adf57fe6002870c221cab8c940877489",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/773df0a32e5d0071a01a2d78e1ff103531ffd2": "a0eb6a0e2ce06e8b413111a1cb04c5d8",
".git/objects/45/a4763e999bc68b2dc4c5f749d00ff275ecdd3f": "eaddb04347e4400866c7480645e8c216",
".git/objects/46/ca7179693c2c962c47f5363d0b794ce7279888": "825c0f441a2951944ef4c1e1ce098d31",
".git/objects/46/fd23ab2309ed06fcb9683f936f8a0dd601ff6e": "577090f790f6a2c21c89558f68d641ca",
".git/objects/48/9e5f82abb4c4c0aee8621affdae6944aef9528": "41ba7c1b39941a84c4fd3f58182c3b3e",
".git/objects/4b/75869d02e8bec58353c45f7a7b4d78a6ec8156": "ead3b4e42d3049d80d2777f04d17d2a2",
".git/objects/4f/11c3fe429611fc6553224be988a3444267397f": "aac0cbb74181144915eceb386758c2c5",
".git/objects/50/55cb11f1591f342263c8c8b8c714bf14db2458": "ea1e07d89aadfd03723b3c1d6fa79262",
".git/objects/51/b323982672314e8b615becbf8ef6e4903170f9": "05b11d555743f3f8ae47021015446487",
".git/objects/52/61dd13dd5c8f550c41d72900b51a8b067969d1": "f30f96c8029b1405fc0fdce5246590a7",
".git/objects/52/961db62c2af99552b55e20901f8bb2b1256f87": "dda62bf32e3da97d41ef271455fdad8f",
".git/objects/53/782ab2093e21970c04c2f0bf275c20fe958963": "361c3f1e36ff76f60b582fc1ef20e2be",
".git/objects/54/908af0ee98a08ded80c6661196abd794bd993b": "cf3f622251bd30a7d81c9942e169f388",
".git/objects/57/b92de0e6a6d446c56d073e77bf0be0a1fc5055": "76814ef421114b17c7a8218b720b2478",
".git/objects/57/fa1e038bd450e04cc1cfee9d0f8770cf3c85b5": "4547c43f6e4386e0f83f0425de9a96f7",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/78c24ccee0af10d4440b4285133569138cda2a": "87ff500c7a118e5d8b68a9ff9a3e5ab3",
".git/objects/5b/b045b5d571c4ef14111f5f6990232dbab51595": "44ba16afbc0d4cbaf896d6e2bd9ee467",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/de42ad848953cfad857e04abe5569ba08e520b": "3b69d7ff97bbbfbd1d62642b2ff291d4",
".git/objects/69/b55c85162b9e4c7226d91ccaf085ca1a7ef266": "ca041af533bcc5edc4de347e6bb05895",
".git/objects/6a/9601fd1acb894761fe6b4e83b3fcf6f985eeb5": "2c059c74bc3a27ff911ed820f21d776b",
".git/objects/6a/f28aa1609985fc583aa2d00644c15a70ad31e1": "47b428f965858ad26ccded2abfffbfa8",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6b/fb3f60372820fcf793600423e4fd543563bc0a": "186d3d9be8ae5efba82f9d6db2f63b78",
".git/objects/6c/24eb2d2fbe01445d35add57920b7a97b1fd5f9": "eefce75ccda15b503b16ebbc23b7c723",
".git/objects/6c/cfe977e26ebafc09c907fc3fa2d51806fe1138": "64888c506fb14a170506888dc273c726",
".git/objects/6d/28452c4f5d53d6c3f0ef976b643780a2757277": "610a837f2658abfdcaf93039a2478bb0",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/d5fc3690cc6874dbee41a081c30d1864ea4881": "9d45cb5ac95acddc4d64c6ad6f9ffea7",
".git/objects/72/ca3093b3799b12d89b1459c98f22fea8d3c444": "b90975f76abe5aa046f64bb0b9e9763c",
".git/objects/73/0635f570090e85636f16ef65583756b97f1514": "df9468246b1422c3e3069a7db9dfdbf7",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/75/4d231d92e936f01343bfb608010f8c2e0c25e7": "7b18c5541b9d8920b9caf893e802085e",
".git/objects/75/f90c88ae3c87be2a1c1cde58ee55e71171b6bb": "d348d8a99c641a969573c2a0fd179b20",
".git/objects/76/46bb1d01b87dfc97a7f0dcbee990fb80848d00": "c4cdc771c81adbdbc2a9807af4861714",
".git/objects/76/6a4ba274581e6afa1c92af74aa8658308d1ff0": "7df788591f4a3492f612a28d225df8bb",
".git/objects/7a/b8a6239515a336cb8675ec941abe589067cb3f": "09d8bb0014406ea085103ef12553b8d8",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7d/fbb63a97956e066c6805e1f721df93211afa20": "ee98ad7ab065c55e088c999003bf96bf",
".git/objects/7e/8cc8ab2f5e93c90214459d320e1b3a1a4dc72c": "7708b362a6694b96a77dc5809cff7210",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/948305d8bc948210aa4b2bc2a80e29cb691fe5": "122d58021277f79ca398c3fb9a1e76f3",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/26240a2ff0a226486a09db507635448e3ffc4f": "1834dcc3d885b16680f0d62f7e1279a3",
".git/objects/88/0aadc5c2685409b1216e0c66f53b21ee0a2cbc": "27204cb8000a6730d2d7d6f56424728a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/03ef5fa1f77a6ce1c8f31210807f93fde2cd79": "ec59ac989673f97bc23c61b2db91d391",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/cc4e3ee86e3b0b398c7d42b39fffd8b94ad885": "a4433934c3dd8f2ed760d59b85812fca",
".git/objects/8b/fd7b7a11084a158d6ef3b7bef18262a67ddeee": "f69958248206274b50f43bf3778e698a",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8c/bbb29852806aaa7ab15efaeed942dfef2afd0d": "69c8eae5be023fb24e8643dde3531c20",
".git/objects/8c/c0710c9886f43e2a7624a97702b172e32a4f4a": "8d36be22d186ee7d7f44b9e4da1e6bbf",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/46e3a080b743ffb8bd358be78d967bb05cb85f": "b26c41a5fbcf88b8c1f638eeb892bfc6",
".git/objects/91/658fe6b4ac33e5ba7855420ddecc43811593f4": "acf5780fb139203c7b8b02b413621bf8",
".git/objects/91/ddcb6047dab3766da6db8d0419b72bf8e87328": "a27d931cad5b9776c42fa825f6148c76",
".git/objects/93/a28beca833670dc5efbd970efaee5367286cec": "d2d41a57ab01b3eaf144d0f926ecf3ed",
".git/objects/95/60d5b2f699af4271fd7bc50726055feadca44c": "aae6869c4aa45e87438ec731cd5a640c",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/01d97771785ba597dba036ab68a86e8179059f": "98460d028175e3545c5b66eecaf9872f",
".git/objects/9c/432001e1513965059624e6849ae1f0a608e41e": "55306ae12020b26be530e762a9bde5f5",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "a391c0384d1cabd19155f2907d961b09",
".git/objects/9e/89c5aca066d43820215a958d0557e519767a9f": "2291e37d97947d80789dc8fb3ba3ba79",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a0/69aff7b6a7586d8a17ebfa455e5a81380723a5": "b41e08d27020dd3734a313076aef604c",
".git/objects/a1/09e47f48acafe6afe32514ad7083a8b6c89b6d": "14ef39f994ca96505e75f5c4fb8e2a60",
".git/objects/a1/6d1f567cc8d7629b89f4c6a7b8ac98a821ad33": "5127d49a50ba36062fb39fa0bcaeb7e7",
".git/objects/a3/9c41fe4a74549f03c9ac4983fc7e98e21d9ac5": "91e75904ebee76a337bbfbd94f16d67d",
".git/objects/a4/6f6b1a429fa6cb4176a70e1ae7f7356645715e": "7484523a67ece9c926252401e5b46838",
".git/objects/a9/6c35df34f0aeed1f3b9c87da4ec58e1c2a81c7": "e2711a82a349a69f617f87476b41f112",
".git/objects/ae/96c47e29cc35bd0c4a7c2fae927ad4d7073cd6": "0e9c7b7ffc3bb66b831ea630b2a3f1dd",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b0/80f47b4f4e50f677a023935567672e527f2d91": "9263f09f03c2f82b7c6fd8b20c39a8c3",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/8e1c6a2f4d6d8dbf6b8d1444d10d5b3eda674e": "448c9141761df59d8294f35198d57da9",
".git/objects/b9/f92cffde585f6735d25ada955bad92f82c801b": "6cb19404ab71145253918114e4d95496",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c1/1cd15f46d0bca6b51619c3d51932d37a8fa125": "c278643e7595e0a1f7363903f6300cf9",
".git/objects/c1/c4aba22f2d734e8f6df5e834be229f4258991c": "85f073b1be8f27d98c549c2bac8af549",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/0e9833b2d6b43919711f900b84a7d42dedea47": "b65387279aabcda578480163df5606b3",
".git/objects/c5/942a5802a2ae939e86305e90aafd0e6cc1be61": "1fe6814a18fa49dd8082bd6a1a471cda",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c8/da6218777310f707625559ad945d24cf679280": "e50465534591cee815982f2457432818",
".git/objects/c8/f837bd3ecf2df6065bfccce7800edd3bfe71b4": "84e952c711bc0b073357d9b8fe4496c9",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cd/bfaec42a79de376f07f764259fb6a8ea0a8fcf": "99c939dbc0b551361c981e48b7fe16a6",
".git/objects/ce/5001901a85c09fcaec096378abfa5f3a281541": "6e67eb873433f94e03572d6350d06ed2",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/c9c1cb591dc439e584580bdfb1f283fb1e5d77": "ad702b10e529b2781a66aa8a23be258c",
".git/objects/d1/88f817a413b4ecfddc1710269804443b385637": "8d846bab90d892fc7272bc0db4874725",
".git/objects/d3/0b0da19c7fc847a272efbdac1070c6d0c873e3": "a9ced0826e8b6e078b4ef966b15487d6",
".git/objects/d3/e90e32ed93adfdb7d85e44bf60d64406650c34": "d50b70603d08c24f71e4b87698a4c412",
".git/objects/d4/0d715c662fd0ccac2909047ffbdd33543c5481": "e44577b56eb17c5a126c0d87cc094e77",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/1baaac70de9df17b040f361e7b21e90cc65fb3": "b7d2a081b6f66e53618cfb0690b66754",
".git/objects/da/5a3f6fde5efad83b508e9b4ac2bbc0a6b7d80b": "792ab122e587a1389467022d94a8b361",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e2/58f204d96fccfcf029dee42685323211de6d74": "2ace5d15d091cf5447d16bb5aae4b2dc",
".git/objects/e2/59b7fa9bf372523ccb7aae34a83f9fd844eca6": "dc15369c935ec50c982df4c4838c74c4",
".git/objects/e2/6523960fa7431695f181b2fcb2565960dd0ce5": "871b6fd92ddd1b4198cefb508633f77c",
".git/objects/e3/a155eeeac306769bcd93d623352e100d337f63": "9c58826c4d67467ab0bada7b901819a0",
".git/objects/e4/4fae636c157ceed4f06ffc1b8e7a3299458038": "de980b62ab085db77d4d4021a3ae0442",
".git/objects/e4/a01ad6c675ab1484369118e0b98b8860b19c65": "b5f0219f8ad93763f2f16c5342aa21b7",
".git/objects/e7/e42c869cb1d9e7df6f05ae51ef88a16ea1af3c": "a5131754475682f69e41268d6bc7d90c",
".git/objects/e7/e62d1ccc88f9f9d855bfd531fd35fc225d5eab": "a10e1d41f7994a77b85f8f5c49f4f562",
".git/objects/e8/89e1533b250ce67e0568c6c9efe91a0896e28f": "885662705bcded254de6ac39f4b6e40e",
".git/objects/ea/c0a8c30528bb0d955fb107edd9db793395b179": "85d1c00a7d245adf038845698585bcf0",
".git/objects/eb/623bf1de5972f7e8dac9e13d93a2266ae00499": "7f71dd641ff9a145b8d8fb09f52cb480",
".git/objects/eb/8351270ab6abf13762f9d26223536a0fe925a2": "c602c3965abb7b560652b90b8c8309a6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/06cef77e33772cd1e740cff692dc2f82557552": "04c255eccb72a13e86eb5e21433c5eea",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ee/e050a595977525be7390f70d59692f8afecd98": "109af0a4f6bf6b6c8a1aa8900ba5c48b",
".git/objects/f0/94e97dd2dbafe22c37d159f3fc380135cb0c61": "5d6c0483e061c94a4d792aa80029f1d4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/12b7e5fe002952949ac3fd4b81d8448af406b8": "e35587a981b2af93a5a1e2ea24e8fc1d",
".git/objects/f3/b44af7ca4a5d288177ea8e66847db3702aa472": "18743cc5907c445587303bf72c24a478",
".git/objects/f5/1d0dd1b8c9e10e08f0b5fad826ff7f68ec1565": "4ba2c2ae89bca6350ab3313f4cc4bd07",
".git/objects/f5/b9708827ca2cde09365a12660dfe1e87857620": "285a73d114f0cbd8e9005c0a8bb2bc19",
".git/objects/f9/bce9620d2f2a20cd9774a94495f3ae661b4a32": "9f6e75c803c3807a6b995bf919e69993",
".git/objects/fa/c0ec3d2dc5421b65628103f114926b3dfb4bcf": "ccd090b84a5fa1407f5ccb26563391b4",
".git/objects/fd/a555e198688d6f10cc93156fa882e8ce78e418": "04c751414549b3dea5c018f5e749c6a4",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/78161d23b9e0e368367616ed54443c56f6e2d2": "ef6640e938d07e761c5c5b810007be37",
".git/refs/heads/main": "edc3ea398292ecb9d8173cd5e7ce153a",
".git/refs/remotes/origin/main": "edc3ea398292ecb9d8173cd5e7ce153a",
"assets/AssetManifest.bin": "6cb0c50f37bd228bfdf7d0025a636416",
"assets/AssetManifest.bin.json": "901ac5cc602cc34dd9e72e0d06386ffd",
"assets/AssetManifest.json": "d4071a691cf0d35adcf481fe4c0a6ce1",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/icons/dart.svg": "1e9cf5e94044f92e8db25b3bbd29e3b9",
"assets/assets/icons/figma.svg": "ee019329da76e22cb2504b89ae01c529",
"assets/assets/icons/firebase.svg": "6302e45027c0258e8d722b6195ddf5d8",
"assets/assets/icons/flutter.svg": "83f17a2e587faf7e13587a090eede860",
"assets/assets/icons/git.svg": "5fd16e04a85a5e4aee6d31a3d7fa9d09",
"assets/assets/icons/gitHub.svg": "50b0a77e3a77bb22e887d80c8b411ce6",
"assets/assets/icons/gmail.svg": "ed493f2d1c3584970c5541ba28d6a365",
"assets/assets/icons/java.svg": "5168c521449c8647a8b9cf32f15c30c5",
"assets/assets/icons/linkedIn.svg": "d6898a227628130c5f704ce65efe1a3e",
"assets/assets/icons/movie_app.svg": "c0ed7fdaeea45291505fcb5d7b040465",
"assets/assets/icons/sqflite.svg": "c0442c6893c52f52f41bd6f8a7499108",
"assets/assets/images/app.json": "9ecbd8717e971619d8c8b6bafbe90112",
"assets/assets/images/book_app.jpg": "4e4f755abbacb10e918dacef2eeca38d",
"assets/assets/images/har.png": "a2ed67a406ed74e205a33f3385a33aff",
"assets/assets/images/movie.jpg": "7df933c71642ed74e3fec697d9e1ff7c",
"assets/assets/images/movie_app.jpeg": "f3a4958ceb5dc540f3d88e5cf5cc6bac",
"assets/assets/images/nasa.png": "734ecaf35b245da8fa91bc03a643254b",
"assets/assets/images/profile.jpg": "6007d4d45a8aa6514e452da8601b24cd",
"assets/assets/images/profile2.jpeg": "fefb5eaa2cadfb9344602dfdf7da0444",
"assets/assets/images/scroll.json": "6e6bffd3cc34c79c901e52fc880cc736",
"assets/assets/images/social.jpeg": "ae58feb70c93e05483cb5858a50d71df",
"assets/FontManifest.json": "951c316f84a757c082de1835fcd705de",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "49497155356d06aa8f708a7e63227ac8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "135dc4f03a1713b02816cde6829a618f",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "9825aa376cf5f1f903b6a055b0c0b7de",
"icons/Icon-192.png": "8b012b5ebfb6eb68e53700b801dff321",
"icons/Icon-512.png": "6c31b821977ab820529e3ab216e44168",
"index.html": "85732d9ca295dfbe2787a178a74cca1d",
"/": "85732d9ca295dfbe2787a178a74cca1d",
"loader.gif": "3f58ba7c1f65012e54babf1d56a9415f",
"loader_2.gif": "b13646f6e6c50ba78579170183b56b5f",
"main.dart.js": "532c9b609730296bdf9e6e6e915b34a2",
"manifest.json": "080172912c3397182e8dd05b0fb10662",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
