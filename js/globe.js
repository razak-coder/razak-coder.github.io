/* Points de terre : Natural Earth 110m (domaine public), échantillonnés tous les 2,2°. */
var LAND = "-21a:-2c1,-204:-2d4,-204:-246,-1ee:-2da,-1ee:-2b8,-1ee:2b8,-1d8:-2ca,-1d8:-2a9,-1c2:-2d9,-1c2:-2ba,-1c2:-29b,-1c2:69b,-1ac:-2c1,-1ac:-2a3,-1ac:-285,-1ac:6bd,-196:-2c7,-196:-2aa,-196:-28d,-196:-270,-196:6bf,-196:6dc,-180:-2cd,-180:-2b1,-180:-295,-180:-279,-180:-25d,-180:6de,-16a:-2d3,-16a:-2b7,-16a:-29c,-16a:-281,-16a:-266,-16a:-24a,-16a:57d,-16a:598,-16a:5b3,-16a:5ce,-154:-2bd,-154:-2a3,-154:-289,-154:-26e,-154:-254,-154:-239,-154:-21f,-154:c7,-154:47f,-154:49a,-154:553,-154:56e,-154:588,-154:5a3,-154:5bd,-154:5d8,-13e:-2bb,-13e:-2a1,-13e:-287,-13e:-26e,-13e:-254,-13e:-23a,-13e:-220,-13e:-206,-13e:cf,-13e:e9,-13e:103,-13e:11d,-13e:48d,-13e:4a7,-13e:4c1,-13e:4db,-13e:4f5,-13e:529,-13e:543,-13e:55d,-13e:577,-13e:590,-13e:5aa,-13e:5c4,-13e:5de,-13e:5f8,-128:-2b9,-128:-2a0,-128:-286,-128:-26d,-128:-254,-128:-23a,-128:-221,-128:-208,-128:be,-128:d7,-128:f1,-128:10a,-128:124,-128:482,-128:49b,-128:4b4,-128:4ce,-128:4e7,-128:500,-128:51a,-128:533,-128:54c,-128:566,-128:57f,-128:598,-128:5b2,-128:5cb,-128:5e4,-112:-2b7,-112:-29e,-112:-286,-112:-26d,-112:-254,-112:-23b,-112:-222,-112:-209,-112:-1f1,-112:ae,-112:c7,-112:df,-112:f8,-112:111,-112:12a,-112:143,-112:476,-112:48f,-112:4a8,-112:4c1,-112:4d9,-112:4f2,-112:50b,-112:524,-112:53d,-112:556,-112:56e,-112:587,-112:5a0,-112:5b9,-112:5d2,-112:5ea,-fc:-2b5,-fc:-29d,-fc:-285,-fc:-26c,-fc:-254,-fc:-23c,-fc:-223,-fc:-20b,-fc:-1f3,-fc:9e,-fc:b6,-fc:cf,-fc:e7,-fc:ff,-fc:118,-fc:130,-fc:148,-fc:1c2,-fc:483,-fc:49c,-fc:4b4,-fc:4cc,-fc:4e5,-fc:4fd,-fc:515,-fc:52e,-fc:546,-fc:55e,-fc:577,-fc:58f,-fc:5a7,-fc:5c0,-fc:5d8,-fc:5f0,-e6:-2b3,-e6:-29c,-e6:-284,-e6:-26c,-e6:-254,-e6:-23c,-e6:-224,-e6:-20d,-e6:-1f5,-e6:-1dd,-e6:-1c5,-e6:a7,-e6:bf,-e6:d7,-e6:ee,-e6:106,-e6:11e,-e6:136,-e6:14e,-e6:1c5,-e6:1dd,-e6:478,-e6:490,-e6:4a8,-e6:4c0,-e6:4d8,-e6:4f0,-e6:507,-e6:51f,-e6:537,-e6:54f,-e6:567,-e6:57f,-e6:596,-e6:5ae,-e6:5c6,-e6:5de,-d0:-2aa,-d0:-293,-d0:-27b,-d0:-264,-d0:-24c,-d0:-235,-d0:-21d,-d0:-206,-d0:-1ee,-d0:-1d7,-d0:-1bf,-d0:-1a8,-d0:8d,-d0:a5,-d0:bc,-d0:d4,-d0:eb,-d0:103,-d0:11a,-d0:132,-d0:149,-d0:1bf,-d0:1d7,-d0:498,-d0:4b0,-d0:4c8,-d0:4df,-d0:4f7,-d0:50e,-d0:526,-d0:53d,-d0:555,-d0:56c,-d0:584,-d0:59b,-d0:5b3,-d0:5ca,-d0:66f,-ba:-2b9,-ba:-2a2,-ba:-28a,-ba:-273,-ba:-25c,-ba:-245,-ba:-22d,-ba:-216,-ba:-1ff,-ba:-1e8,-ba:-1d1,-ba:-1b9,-ba:-1a2,-ba:8b,-ba:a3,-ba:ba,-ba:d1,-ba:e8,-ba:ff,-ba:117,-ba:12e,-ba:145,-ba:15c,-ba:1b9,-ba:1d1,-ba:1e8,-ba:4cf,-ba:4e6,-ba:4fd,-ba:515,-ba:52c,-ba:543,-ba:55a,-ba:572,-ba:589,-ba:5a0,-a4:-2c7,-a4:-2b0,-a4:-299,-a4:-282,-a4:-26b,-a4:-254,-a4:-23d,-a4:-226,-a4:-20f,-a4:-1f8,-a4:-1e2,-a4:-1cb,-a4:-1b4,-a4:-19d,-a4:8a,-a4:a1,-a4:b7,-a4:ce,-a4:e5,-a4:fc,-a4:113,-a4:12a,-a4:141,-a4:158,-a4:16f,-a4:186,-a4:1cb,-a4:1e2,-a4:4d6,-a4:4ed,-a4:504,-a4:51b,-a4:532,-a4:549,-a4:560,-a4:58e,-a4:5a5,-a4:68a,-8e:-2eb,-8e:-2d5,-8e:-2be,-8e:-2a7,-8e:-291,-8e:-27a,-8e:-263,-8e:-24d,-8e:-236,-8e:-21f,-8e:-209,-8e:-1f2,-8e:-1db,-8e:-1c5,-8e:-1ae,-8e:-198,-8e:88,-8e:9e,-8e:b5,-8e:cc,-8e:e2,-8e:f9,-8e:110,-8e:126,-8e:13d,-8e:154,-8e:16a,-8e:181,-8e:1f2,-8e:4f4,-8e:521,-8e:538,-8e:592,-78:-2f2,-78:-2db,-78:-2c5,-78:-2ae,-78:-298,-78:-281,-78:-26b,-78:-254,-78:-23e,-78:-227,-78:-211,-78:-1fa,-78:-1e4,-78:-1cd,-78:-1b7,-78:-1a0,-78:-18a,-78:92,-78:a9,-78:bf,-78:d6,-78:ec,-78:103,-78:119,-78:130,-78:146,-78:15d,-78:173,-78:18a,-78:53b,-78:595,-62:-30f,-62:-2f8,-62:-2e2,-62:-2cc,-62:-2b5,-62:-29f,-62:-288,-62:-272,-62:-25c,-62:-245,-62:-22f,-62:-219,-62:-202,-62:-1ec,-62:-1d6,-62:-1bf,-62:-1a9,-62:-192,-62:-17c,-62:86,-62:9d,-62:b3,-62:c9,-62:e0,-62:f6,-62:10c,-62:123,-62:139,-62:14f,-62:166,-62:17c,-62:5c4,-62:5da,-4c:-315,-4c:-2ff,-4c:-2e8,-4c:-2d2,-4c:-2bc,-4c:-2a6,-4c:-290,-4c:-279,-4c:-263,-4c:-24d,-4c:-237,-4c:-220,-4c:-20a,-4c:-1f4,-4c:-1de,-4c:-1c8,-4c:-1b1,-4c:-19b,-4c:-185,-4c:-16f,-4c:90,-4c:a7,-4c:bd,-4c:d3,-4c:e9,-4c:100,-4c:116,-4c:12c,-4c:142,-4c:158,-4c:16f,-4c:185,-4c:436,-4c:44c,-4c:462,-4c:56d,-4c:583,-4c:599,-4c:5b0,-4c:635,-36:-31b,-36:-305,-36:-2ef,-36:-2d9,-36:-2c3,-36:-2ad,-36:-297,-36:-280,-36:-26a,-36:-254,-36:-23e,-36:-228,-36:-212,-36:-1fc,-36:-1e6,-36:-1d0,-36:-1ba,-36:-1a4,-36:-18e,-36:-177,-36:-161,-36:85,-36:9b,-36:b1,-36:c7,-36:dd,-36:f3,-36:109,-36:11f,-36:135,-36:14b,-36:161,-36:177,-36:56f,-36:585,-36:59c,-36:5b2,-36:5de,-36:60a,-20:-31b,-20:-305,-20:-2ef,-20:-2d9,-20:-2c3,-20:-2ad,-20:-297,-20:-280,-20:-26a,-20:-254,-20:-23e,-20:-228,-20:-212,-20:-1fc,-20:-1e6,-20:-1d0,-20:-1ba,-20:-1a4,-20:-18e,-20:6e,-20:85,-20:9b,-20:b1,-20:c7,-20:dd,-20:f3,-20:109,-20:11f,-20:135,-20:14b,-20:161,-20:177,-20:18e,-20:40e,-20:424,-20:466,-20:47c,-20:4a9,-20:4bf,-20:501,-20:517,-20:543,-20:559,-20:56f,-20:585,-a:-321,-a:-30b,-a:-2f5,-a:-2df,-a:-2c9,-a:-2b3,-a:-29e,-a:-288,-a:-272,-a:-25c,-a:-246,-a:-230,-a:-21a,-a:-204,-a:-1ee,-a:-1d8,-a:63,-a:79,-a:8f,-a:a5,-a:bb,-a:d1,-a:e6,-a:fc,-a:112,-a:128,-a:13e,-a:154,-a:16a,-a:180,-a:196,-a:3fd,-a:455,-a:46a,-a:480,-a:4ac,-a:4c2,-a:51a,-a:530,c:-30b,c:-2f5,c:-2df,c:-2c9,c:-2b3,c:-29e,c:-288,c:-272,c:-25c,c:-246,c:-230,c:-21a,c:-204,c:63,c:79,c:8f,c:a5,c:bb,c:d1,c:e6,c:fc,c:112,c:128,c:13e,c:154,c:16a,c:180,c:196,c:1ac,c:3e7,c:3fd,c:455,c:46a,c:480,c:496,c:504,22:-305,22:-2ef,22:-2d9,22:-2c3,22:-2ad,22:-297,22:-280,22:-26a,22:-254,22:-23e,22:-228,22:-212,22:6e,22:85,22:9b,22:b1,22:c7,22:dd,22:f3,22:109,22:11f,22:135,22:14b,22:161,22:177,22:18e,22:1a4,22:1ba,22:1d0,22:3cc,22:3e2,22:3f8,22:47c,22:493,38:-305,38:-2ef,38:-2d9,38:-2c3,38:-2ad,38:-297,38:-280,38:-26a,38:-254,38:-23e,38:-228,38:-58,38:-42,38:-2c,38:-16,38:0,38:42,38:58,38:6e,38:85,38:9b,38:b1,38:c7,38:dd,38:f3,38:109,38:11f,38:135,38:14b,38:161,38:177,38:18e,38:1a4,38:1ba,38:1d0,38:1e6,38:3f8,38:493,4e:-32b,4e:-2ff,4e:-2e8,4e:-2d2,4e:-2bc,4e:-2a6,4e:-290,4e:-279,4e:-263,4e:-7a,4e:-64,4e:-4e,4e:-38,4e:-21,4e:-b,4e:b,4e:21,4e:38,4e:4e,4e:64,4e:7a,4e:90,4e:a7,4e:bd,4e:d3,4e:e9,4e:100,4e:116,4e:12c,4e:142,4e:158,4e:16f,4e:185,4e:19b,4e:1b1,4e:1c8,4e:1de,4e:32b,4e:4d1,4e:4e8,64:-352,64:-2e2,64:-2b5,64:-29f,64:-288,64:-272,64:-86,64:-70,64:-59,64:-43,64:-2d,64:-16,64:0,64:16,64:2d,64:43,64:59,64:70,64:86,64:9d,64:b3,64:c9,64:e0,64:f6,64:10c,64:123,64:139,64:14f,64:166,64:17c,64:192,64:1a9,64:1bf,64:1d6,64:1ec,64:30f,64:41b,64:4ce,7a:-362,7a:-34c,7a:-92,7a:-7c,7a:-65,7a:-4f,7a:-38,7a:-22,7a:-b,7a:b,7a:22,7a:38,7a:4f,7a:65,7a:7c,7a:92,7a:a9,7a:bf,7a:d6,7a:ec,7a:103,7a:119,7a:130,7a:146,7a:15d,7a:173,7a:18a,7a:1a0,7a:2f2,7a:308,7a:31f,7a:416,7a:42d,7a:443,7a:4e1,90:-384,90:-36d,90:-356,90:-ab,90:-94,90:-7d,90:-67,90:-50,90:-39,90:-22,90:-b,90:b,90:22,90:39,90:50,90:67,90:7d,90:94,90:ab,90:c2,90:d8,90:ef,90:106,90:11d,90:134,90:14a,90:161,90:178,90:18f,90:1bc,90:1d3,90:1ea,90:2fb,90:312,90:3df,90:3f6,90:40d,90:423,90:43a,a6:-3da,a6:-3c3,a6:-3ac,a6:-395,a6:-37e,a6:-a1,a6:-8a,a6:-73,a6:-5c,a6:-45,a6:-2e,a6:-17,a6:0,a6:17,a6:2e,a6:45,a6:5c,a6:73,a6:8a,a6:a1,a6:b7,a6:ce,a6:e5,a6:fc,a6:113,a6:12a,a6:141,a6:158,a6:16f,a6:186,a6:1b4,a6:1cb,a6:1e2,a6:1f8,a6:20f,a6:2f5,a6:30c,a6:323,a6:3c3,a6:3da,a6:3f1,a6:408,a6:41f,a6:4bf,bc:-3fe,bc:-3e7,bc:-3cf,bc:-38a,bc:-373,bc:-2d0,bc:-2b9,bc:-8b,bc:-74,bc:-5d,bc:-46,bc:-2e,bc:-17,bc:0,bc:17,bc:2e,bc:46,bc:5d,bc:74,bc:8b,bc:a3,bc:ba,bc:d1,bc:e8,bc:ff,bc:117,bc:12e,bc:145,bc:15c,bc:174,bc:1a2,bc:1b9,bc:1d1,bc:1e8,bc:1ff,bc:216,bc:22d,bc:2e7,bc:2fe,bc:316,bc:32d,bc:344,bc:3b8,bc:3cf,bc:3e7,bc:3fe,bc:415,bc:444,d2:-40b,d2:-3f4,d2:-3dc,d2:-37e,d2:-367,d2:-308,d2:-a5,d2:-8d,d2:-76,d2:-5e,d2:-47,d2:-2f,d2:-18,d2:0,d2:18,d2:2f,d2:47,d2:5e,d2:76,d2:8d,d2:a5,d2:bc,d2:d4,d2:eb,d2:103,d2:11a,d2:132,d2:149,d2:161,d2:190,d2:1a8,d2:1bf,d2:1d7,d2:1ee,d2:206,d2:21d,d2:235,d2:2c2,d2:2d9,d2:2f1,d2:308,d2:320,d2:338,d2:34f,d2:3ad,d2:3c5,d2:3dc,d2:3f4,d2:40b,d2:423,d2:452,e8:-414,e8:-3fc,e8:-3e4,e8:-9c,e8:-84,e8:-6c,e8:-54,e8:-3c,e8:-24,e8:-c,e8:c,e8:24,e8:3c,e8:54,e8:6c,e8:84,e8:9c,e8:b4,e8:cc,e8:e4,e8:fc,e8:114,e8:12c,e8:144,e8:15c,e8:18c,e8:1a4,e8:1bc,e8:1d4,e8:1ec,e8:204,e8:21c,e8:234,e8:24c,e8:2c4,e8:2dc,e8:2f4,e8:30c,e8:324,e8:33c,e8:354,e8:36c,e8:384,e8:39c,e8:3b4,e8:3cc,e8:3e4,e8:3fc,e8:414,e8:42c,e8:444,e8:45c,e8:474,e8:48c,e8:4bc,fe:-43a,fe:-422,fe:-40a,fe:-3f1,fe:-3d9,fe:-86,fe:-6d,fe:-55,fe:-3d,fe:-24,fe:-c,fe:c,fe:24,fe:3d,fe:55,fe:6d,fe:86,fe:9e,fe:b6,fe:cf,fe:e7,fe:ff,fe:118,fe:130,fe:148,fe:179,fe:191,fe:1aa,fe:1c2,fe:1da,fe:1f3,fe:254,fe:26c,fe:285,fe:29d,fe:2b5,fe:2ce,fe:2e6,fe:2fe,fe:317,fe:32f,fe:347,fe:360,fe:378,fe:390,fe:3a8,fe:3c1,fe:3d9,fe:3f1,fe:40a,fe:422,fe:43a,fe:453,fe:46b,fe:483,fe:49c,114:-476,114:-444,114:-42c,114:-413,114:-3fa,114:-3e1,114:-333,114:-7c,114:-63,114:-4a,114:-32,114:-19,114:0,114:19,114:32,114:4a,114:63,114:7c,114:95,114:ae,114:c7,114:df,114:f8,114:111,114:12a,114:143,114:174,114:18d,114:1a6,114:1bf,114:1d8,114:222,114:23b,114:254,114:26d,114:286,114:29e,114:2b7,114:2d0,114:2e9,114:302,114:31a,114:333,114:34c,114:365,114:37e,114:397,114:3af,114:3c8,114:3e1,114:3fa,114:413,114:42c,114:444,114:45d,114:476,114:48f,114:4a8,12a:-482,12a:-44f,12a:-435,12a:-41c,12a:-403,12a:-3e9,12a:-3d0,12a:-3b7,12a:-39d,12a:-384,12a:-351,12a:-338,12a:-59,12a:-3f,12a:-26,12a:-d,12a:d,12a:26,12a:3f,12a:59,12a:72,12a:8b,12a:a5,12a:be,12a:d7,12a:f1,12a:10a,12a:124,12a:13d,12a:156,12a:170,12a:189,12a:1a2,12a:1bc,12a:1d5,12a:208,12a:221,12a:23a,12a:254,12a:26d,12a:286,12a:2a0,12a:2b9,12a:2d3,12a:2ec,12a:305,12a:31f,12a:338,12a:351,12a:36b,12a:384,12a:39d,12a:3b7,12a:3d0,12a:3e9,12a:403,12a:41c,12a:435,12a:44f,12a:468,12a:482,12a:49b,12a:4b4,140:-48d,140:-474,140:-45a,140:-440,140:-426,140:-40c,140:-3f2,140:-3d8,140:-3be,140:-3a4,140:-38a,140:-371,140:-357,140:-33d,140:-4e,140:-34,140:-1a,140:0,140:1a,140:34,140:4e,140:68,140:81,140:cf,140:e9,140:16b,140:184,140:19e,140:1b8,140:1d2,140:1ec,140:206,140:220,140:23a,140:254,140:26e,140:287,140:2a1,140:2bb,140:2d5,140:2ef,140:309,140:323,140:33d,140:357,140:371,140:38a,140:3a4,140:3be,140:3d8,140:3f2,140:40c,140:426,140:440,140:45a,140:474,140:48d,140:4a7,156:-495,156:-47b,156:-460,156:-445,156:-42b,156:-410,156:-3f5,156:-3db,156:-3c0,156:-3a5,156:-38b,156:-370,156:-355,156:-33b,156:-320,156:-35,156:-1b,156:0,156:1b,156:35,156:50,156:175,156:190,156:1ab,156:1c5,156:1e0,156:1fb,156:215,156:230,156:24b,156:265,156:280,156:29b,156:2b5,156:2d0,156:2eb,156:305,156:320,156:33b,156:355,156:370,156:38b,156:3a5,156:3c0,156:3db,156:3f5,156:410,156:42b,156:445,156:460,156:47b,156:495,156:4b0,156:550,16c:-4be,16c:-4a2,16c:-487,16c:-46c,16c:-451,16c:-435,16c:-41a,16c:-3ff,16c:-3e3,16c:-3c8,16c:-3ad,16c:-392,16c:-376,16c:-35b,16c:-340,16c:-325,16c:-309,16c:e,16c:29,16c:44,16c:5f,16c:155,16c:170,16c:18b,16c:1a7,16c:1c2,16c:1dd,16c:1f9,16c:214,16c:22f,16c:24a,16c:266,16c:281,16c:29c,16c:2b7,16c:2d3,16c:2ee,16c:309,16c:325,16c:340,16c:35b,16c:376,16c:392,16c:3ad,16c:3c8,16c:3e3,16c:3ff,16c:41a,16c:435,16c:451,16c:46c,16c:487,16c:4a2,16c:4f4,16c:561,16c:57d,182:-4c7,182:-4ab,182:-48f,182:-473,182:-457,182:-43b,182:-41f,182:-403,182:-3e6,182:-3ca,182:-3ae,182:-392,182:-376,182:-35a,182:-33e,182:-322,182:-305,182:-46,182:-2a,182:-e,182:d3,182:10b,182:127,182:143,182:160,182:17c,182:198,182:1b4,182:1d0,182:1ec,182:208,182:224,182:241,182:25d,182:279,182:295,182:2b1,182:2cd,182:2e9,182:305,182:322,182:33e,182:35a,182:376,182:392,182:3ae,182:3ca,182:3e6,182:403,182:41f,182:43b,182:457,182:473,182:48f,182:4e4,182:500,198:-4d2,198:-4b5,198:-498,198:-47b,198:-45e,198:-441,198:-424,198:-407,198:-3ea,198:-3cd,198:-3b0,198:-393,198:-375,198:-358,198:-33b,198:-31e,198:-301,198:-2e4,198:-49,198:-2c,198:-f,198:a0,198:da,198:131,198:14e,198:16b,198:188,198:1a5,198:1c2,198:1df,198:1fc,198:219,198:236,198:253,198:270,198:28d,198:2aa,198:2c7,198:2e4,198:301,198:31e,198:33b,198:358,198:375,198:393,198:3b0,198:3cd,198:3ea,198:407,198:424,198:441,198:45e,198:47b,198:498,198:4b5,198:4d2,198:4ef,198:50c,198:580,1ae:-4bf,1ae:-4a1,1ae:-483,1ae:-465,1ae:-447,1ae:-429,1ae:-40b,1ae:-3ed,1ae:-3cf,1ae:-3b1,1ae:-393,1ae:-375,1ae:-357,1ae:-339,1ae:-31b,1ae:-2fd,1ae:-2df,1ae:-4b,1ae:-2d,1ae:-f,1ae:f,1ae:69,1ae:87,1ae:c3,1ae:e1,1ae:ff,1ae:1b3,1ae:1d1,1ae:1ef,1ae:20d,1ae:22b,1ae:249,1ae:267,1ae:285,1ae:2a3,1ae:2c1,1ae:2df,1ae:2fd,1ae:31b,1ae:339,1ae:357,1ae:375,1ae:393,1ae:3b1,1ae:3cf,1ae:3ed,1ae:40b,1ae:429,1ae:447,1ae:465,1ae:483,1ae:4a1,1ae:4bf,1ae:4dd,1ae:4fb,1ae:519,1ae:537,1ae:591,1c4:-4c5,1c4:-4a6,1c4:-486,1c4:-467,1c4:-448,1c4:-428,1c4:-409,1c4:-3ea,1c4:-3ca,1c4:-3ab,1c4:-38c,1c4:-36d,1c4:-34d,1c4:-32e,1c4:-30f,1c4:-2ef,1c4:-2d0,1c4:-2b1,1c4:-272,1c4:0,1c4:1f,1c4:3f,1c4:5e,1c4:9d,1c4:bc,1c4:db,1c4:fa,1c4:11a,1c4:158,1c4:178,1c4:197,1c4:1b6,1c4:1d6,1c4:1f5,1c4:214,1c4:233,1c4:253,1c4:272,1c4:291,1c4:2b1,1c4:2d0,1c4:2ef,1c4:30f,1c4:32e,1c4:34d,1c4:36d,1c4:38c,1c4:3ab,1c4:3ca,1c4:3ea,1c4:409,1c4:428,1c4:448,1c4:467,1c4:486,1c4:4a6,1c4:4c5,1c4:4e4,1c4:503,1c4:523,1c4:542,1da:-4d0,1da:-4b0,1da:-490,1da:-46f,1da:-44f,1da:-42e,1da:-40e,1da:-3ed,1da:-3cd,1da:-3ad,1da:-38c,1da:-36c,1da:-34b,1da:-32b,1da:-30a,1da:-2ea,1da:-2ca,1da:-2a9,1da:-227,1da:0,1da:20,1da:41,1da:61,1da:82,1da:a2,1da:c3,1da:e3,1da:103,1da:124,1da:144,1da:165,1da:185,1da:1a6,1da:1c6,1da:1e6,1da:207,1da:227,1da:248,1da:268,1da:289,1da:2a9,1da:2ca,1da:2ea,1da:30a,1da:32b,1da:34b,1da:36c,1da:38c,1da:3ad,1da:3cd,1da:3ed,1da:40e,1da:42e,1da:44f,1da:46f,1da:490,1da:4b0,1da:4d0,1da:4f1,1da:511,1da:532,1da:552,1da:593,1f0:-4d8,1f0:-4b6,1f0:-494,1f0:-472,1f0:-450,1f0:-42e,1f0:-40c,1f0:-3ea,1f0:-3c8,1f0:-3a6,1f0:-384,1f0:-362,1f0:-340,1f0:-31e,1f0:-2fc,1f0:-2da,1f0:-2b8,1f0:-274,1f0:-230,1f0:-11,1f0:11,1f0:33,1f0:55,1f0:77,1f0:99,1f0:bb,1f0:dd,1f0:ff,1f0:121,1f0:143,1f0:165,1f0:187,1f0:1a9,1f0:1ca,1f0:1ec,1f0:20e,1f0:230,1f0:252,1f0:274,1f0:296,1f0:2b8,1f0:2da,1f0:2fc,1f0:31e,1f0:340,1f0:362,1f0:384,1f0:3a6,1f0:3c8,1f0:3ea,1f0:40c,1f0:42e,1f0:450,1f0:472,1f0:494,1f0:4b6,1f0:4d8,1f0:4fa,1f0:51c,1f0:53e,1f0:55f,206:-4e0,206:-4bc,206:-498,206:-475,206:-451,206:-42d,206:-40a,206:-3e6,206:-3c2,206:-39f,206:-37b,206:-357,206:-334,206:-310,206:-2ed,206:-2c9,206:-2a5,206:-282,206:-25e,206:-23a,206:-24,206:0,206:47,206:6b,206:8f,206:b2,206:d6,206:fa,206:11d,206:141,206:164,206:188,206:1ac,206:1cf,206:1f3,206:217,206:23a,206:25e,206:282,206:2a5,206:2c9,206:2ed,206:310,206:334,206:357,206:37b,206:39f,206:3c2,206:3e6,206:40a,206:42d,206:451,206:475,206:498,206:4bc,206:4e0,206:503,206:527,206:54a,206:56e,206:592,206:620,21c:-533,21c:-50e,21c:-4e8,21c:-4c3,21c:-49d,21c:-478,21c:-452,21c:-42d,21c:-407,21c:-3e2,21c:-3bc,21c:-397,21c:-371,21c:-34c,21c:-301,21c:-2db,21c:-2b6,21c:-290,21c:-26b,21c:-245,21c:-5e,21c:-13,21c:5e,21c:83,21c:a9,21c:ce,21c:f4,21c:119,21c:13f,21c:164,21c:18a,21c:1af,21c:1d5,21c:1fa,21c:220,21c:245,21c:26b,21c:290,21c:2b6,21c:2db,21c:301,21c:326,21c:34c,21c:371,21c:397,21c:3bc,21c:3e2,21c:407,21c:42d,21c:452,21c:478,21c:49d,21c:4c3,21c:4e8,21c:50e,21c:533,21c:559,21c:63a,232:-519,232:-4f2,232:-4ca,232:-4a3,232:-47b,232:-454,232:-42c,232:-405,232:-3dd,232:-3b5,232:-38e,232:-2f0,232:-2c8,232:-2a1,232:-279,232:-28,232:9e,232:ed,232:115,232:13c,232:164,232:18c,232:1b3,232:1db,232:202,232:22a,232:251,232:279,232:2a1,232:2c8,232:2f0,232:317,232:33f,232:366,232:38e,232:3b5,232:3dd,232:405,232:42c,232:454,232:47b,232:4a3,232:4ca,232:4f2,232:519,232:541,232:62e,232:656,248:-622,248:-550,248:-527,248:-4fd,248:-4d3,248:-4a9,248:-47f,248:-455,248:-42b,248:-402,248:-3d8,248:-3ae,248:-306,248:-2dd,248:-2b3,248:-289,248:3f,248:93,248:110,248:13a,248:164,248:18e,248:1b8,248:1e1,248:20b,248:235,248:25f,248:289,248:2b3,248:2dd,248:306,248:330,248:35a,248:384,248:3ae,248:3d8,248:402,248:42b,248:455,248:47f,248:4a9,248:4d3,248:4fd,248:527,248:550,248:57a,248:64c,25e:-66a,25e:-63e,25e:-610,25e:-5e4,25e:-5b6,25e:-58a,25e:-55c,25e:-530,25e:-502,25e:-4d6,25e:-4a8,25e:-47c,25e:-44e,25e:-422,25e:-3f4,25e:-3c8,25e:-2e6,25e:-2ba,25e:44,25e:70,25e:9e,25e:f8,25e:124,25e:152,25e:17e,25e:1ac,25e:1d8,25e:206,25e:232,25e:260,25e:28c,25e:2ba,25e:2e6,25e:314,25e:340,25e:36e,25e:39a,25e:3c8,25e:3f4,25e:422,25e:44e,25e:47c,25e:4a8,25e:4d6,25e:502,25e:530,25e:55c,25e:58a,25e:5b6,25e:5e4,25e:610,25e:66a,25e:698,274:-660,274:-630,274:-600,274:-5d0,274:-5a0,274:-570,274:-540,274:-510,274:-4e0,274:-4b0,274:-480,274:-450,274:-420,274:-3f0,274:-3c0,274:-1e0,274:-1b0,274:60,274:90,274:f0,274:120,274:150,274:180,274:1b0,274:1e0,274:210,274:240,274:270,274:2a0,274:2d0,274:300,274:330,274:360,274:390,274:3c0,274:3f0,274:420,274:450,274:480,274:4b0,274:4e0,274:510,274:540,274:570,274:5a0,274:5d0,274:600,274:630,274:660,274:690,274:6c0,274:6f0,28a:-651,28a:-61d,28a:-5e9,28a:-5b5,28a:-581,28a:-54d,28a:-518,28a:-4e4,28a:-4b0,28a:-47c,28a:-448,28a:-413,28a:-3df,28a:-3ab,28a:-377,28a:-2da,28a:-2a6,28a:-20a,28a:-1d6,28a:-1a1,28a:-d1,28a:-9d,28a:9d,28a:d1,28a:105,28a:139,28a:1a1,28a:1d6,28a:20a,28a:23e,28a:272,28a:2a6,28a:2da,28a:30f,28a:343,28a:377,28a:3ab,28a:3df,28a:413,28a:448,28a:47c,28a:4b0,28a:4e4,28a:518,28a:54d,28a:581,28a:5b5,28a:5e9,28a:61d,28a:651,28a:686,28a:6ba,28a:6ee,2a0:-6eb,2a0:-640,2a0:-607,2a0:-5ce,2a0:-595,2a0:-55b,2a0:-522,2a0:-4e9,2a0:-4b0,2a0:-477,2a0:-43e,2a0:-405,2a0:-3cb,2a0:-392,2a0:-359,2a0:-2ae,2a0:-202,2a0:-1c9,2a0:-190,2a0:-157,2a0:ab,2a0:e5,2a0:11e,2a0:157,2a0:190,2a0:202,2a0:23b,2a0:275,2a0:2ae,2a0:2e7,2a0:320,2a0:359,2a0:392,2a0:3cb,2a0:405,2a0:43e,2a0:477,2a0:4b0,2a0:4e9,2a0:522,2a0:55b,2a0:595,2a0:5ce,2a0:607,2a0:640,2a0:679,2a0:6b2,2a0:6eb,2b6:-62f,2b6:-5f1,2b6:-5b3,2b6:-575,2b6:-536,2b6:-4f8,2b6:-4ba,2b6:-47c,2b6:-43e,2b6:-3c2,2b6:-346,2b6:-2ca,2b6:-210,2b6:-1d2,2b6:-193,2b6:-155,2b6:-117,2b6:d9,2b6:117,2b6:2ca,2b6:308,2b6:346,2b6:384,2b6:3c2,2b6:400,2b6:43e,2b6:47c,2b6:4ba,2b6:4f8,2b6:536,2b6:575,2b6:5b3,2b6:5f1,2b6:62f,2b6:66d,2b6:6ab,2b6:6e9,2cc:-4bc,2cc:-476,2cc:-431,2cc:-361,2cc:-31c,2cc:-207,2cc:-1c2,2cc:-17d,2cc:-138,2cc:-f2,2cc:207,2cc:31c,2cc:361,2cc:3a7,2cc:3ec,2cc:431,2cc:476,2cc:4bc,2cc:501,2cc:58b,2cc:5d0,2e2:-4bd,2e2:-1fd,2e2:-1ae,2e2:-160,2e2:-112,2e2:336,2e2:384,2e2:3d2,2e2:421,2f8:-4bf,2f8:-465,2f8:-249,2f8:-1ef,2f8:-195,2f8:-13b,2f8:-e1,2f8:3b1,2f8:40b,2f8:465,2f8:573";

/*
 * Globe 3D en points : route d'import Lomé ↔ Chine.
 * Rendu canvas 2D avec projection orthographique (aucune bibliothèque).
 * Rotation automatique douce, glisser pour faire tourner, pause hors écran,
 * image fixe si l'utilisateur a réduit les animations.
 */
(function () {
  "use strict";
  var canvas = document.getElementById("globe");
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext("2d");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var D2R = Math.PI / 180;

  // Points de terre (lat, lon) décodés
  var land = LAND.split(",").map(function (p) {
    var a = p.split(":");
    var lat = parseInt(a[0], 16) / 10 * D2R, lon = parseInt(a[1], 16) / 10 * D2R;
    return [Math.cos(lat) * Math.sin(lon), Math.sin(lat), Math.cos(lat) * Math.cos(lon)];
  });

  var CITIES = {
    lome: { lat: 6.13, lon: 1.22 },
    china: { lat: 23.13, lon: 113.26 }   // Guangzhou
  };
  function vec(lat, lon) {
    lat *= D2R; lon *= D2R;
    return [Math.cos(lat) * Math.sin(lon), Math.sin(lat), Math.cos(lat) * Math.cos(lon)];
  }
  var A = vec(CITIES.lome.lat, CITIES.lome.lon), B = vec(CITIES.china.lat, CITIES.china.lon);

  // Arc de grand cercle surélevé entre Lomé et la Chine
  var ARC_N = 90, arc = [];
  var omega = Math.acos(A[0] * B[0] + A[1] * B[1] + A[2] * B[2]);
  for (var i = 0; i <= ARC_N; i++) {
    var t = i / ARC_N;
    var s1 = Math.sin((1 - t) * omega) / Math.sin(omega), s2 = Math.sin(t * omega) / Math.sin(omega);
    var h = 1 + 0.22 * Math.sin(Math.PI * t);
    arc.push([(s1 * A[0] + s2 * B[0]) * h, (s1 * A[1] + s2 * B[1]) * h, (s1 * A[2] + s2 * B[2]) * h]);
  }

  // Couleurs lues dans le thème (clair / sombre)
  var col = {};
  function readColors() {
    var cs = getComputedStyle(document.documentElement);
    col.dot = cs.getPropertyValue("--color-foreground").trim() || "#09090B";
    col.accent = cs.getPropertyValue("--color-accent-text").trim() || "#2563EB";
    col.line = cs.getPropertyValue("--color-border").trim() || "#E4E4E7";
    col.bg = cs.getPropertyValue("--color-background").trim() || "#FAFAFA";
  }
  readColors();
  new MutationObserver(readColors).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", readColors);

  // Taille (netteté sur écrans haute densité)
  var W = 0, R = 0, dpr = 1;
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.clientWidth;
    canvas.width = canvas.height = Math.round(W * dpr);
    R = W * 0.4;
  }
  resize();
  window.addEventListener("resize", resize);

  // Rotation : centrée entre l'Afrique de l'Ouest et la Chine
  var CENTER = 57, rotY = CENTER, tilt = 16, dragging = false, lastX = 0, lastY = 0, userOffset = 0, userTilt = 0;
  var t0 = performance.now();

  function project(p, cy, sy, cx, sx) {
    // rotation autour de Y (longitude) puis de X (inclinaison)
    var x = p[0] * cy - p[2] * sy;
    var z = p[0] * sy + p[2] * cy;
    var y = p[1] * cx - z * sx;
    var z2 = p[1] * sx + z * cx;
    return [W / 2 + x * R, W / 2 - y * R, z2];
  }

  function label(text, x, y, align) {
    ctx.font = "600 " + Math.max(11, W * 0.034) + "px Inter, system-ui, sans-serif";
    ctx.textAlign = align;
    ctx.fillStyle = col.dot;
    ctx.fillText(text, x, y);
  }

  function draw(now) {
    var tSec = (now - t0) / 1000;
    var lon = reduce ? CENTER : CENTER + Math.sin(tSec * 0.25) * 14;
    rotY = (lon + userOffset) * D2R;
    var tl = (tilt + userTilt) * D2R;
    var cy = Math.cos(rotY), sy = Math.sin(rotY), cx = Math.cos(tl), sx = Math.sin(tl);

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, W);

    // Contour de la sphère
    ctx.beginPath();
    ctx.arc(W / 2, W / 2, R, 0, Math.PI * 2);
    ctx.strokeStyle = col.line;
    ctx.lineWidth = 1;
    ctx.stroke();

    // Points de terre : face avant uniquement, opacité selon la profondeur
    ctx.fillStyle = col.dot;
    var size = Math.max(1.1, W / 260);
    for (var i = 0; i < land.length; i++) {
      var q = project(land[i], cy, sy, cx, sx);
      if (q[2] <= 0.02) continue;
      ctx.globalAlpha = 0.12 + q[2] * 0.55;
      ctx.fillRect(q[0] - size / 2, q[1] - size / 2, size, size);
    }
    ctx.globalAlpha = 1;

    // Arc de la route d'import (parties visibles)
    var pts = arc.map(function (p) { return project(p, cy, sy, cx, sx); });
    ctx.strokeStyle = col.accent;
    ctx.lineWidth = Math.max(1.5, W / 220);
    ctx.setLineDash([W / 90, W / 140]);
    ctx.lineDashOffset = reduce ? 0 : -tSec * 18;
    ctx.beginPath();
    var pen = false;
    for (var k = 0; k < pts.length; k++) {
      if (pts[k][2] > -0.05) { pen ? ctx.lineTo(pts[k][0], pts[k][1]) : ctx.moveTo(pts[k][0], pts[k][1]); pen = true; }
      else pen = false;
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // Colis qui voyage le long de l'arc (aller : Chine → Lomé)
    if (!reduce) {
      var f = (tSec * 0.18) % 1, idx = Math.round((1 - f) * ARC_N), m = pts[idx];
      if (m[2] > -0.05) {
        ctx.fillStyle = col.accent;
        ctx.beginPath(); ctx.arc(m[0], m[1], Math.max(3, W / 90), 0, Math.PI * 2); ctx.fill();
      }
    }

    // Villes : point + onde
    [[A, "lome", "end"], [B, "china", "start"]].forEach(function (c) {
      var q = project(c[0], cy, sy, cx, sx);
      if (q[2] <= 0) return;
      var pulse = reduce ? 0 : (tSec * 0.8) % 1;
      ctx.strokeStyle = col.accent;
      ctx.globalAlpha = 1 - pulse;
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(q[0], q[1], 4 + pulse * W / 22, 0, Math.PI * 2); ctx.stroke();
      ctx.globalAlpha = 1;
      ctx.fillStyle = col.accent;
      ctx.beginPath(); ctx.arc(q[0], q[1], Math.max(3.5, W / 80), 0, Math.PI * 2); ctx.fill();
      var name = canvas.getAttribute("data-" + c[1]) || "";
      label(name, q[0], q[1] - Math.max(14, W / 24), "center");
    });
  }

  // Boucle : uniquement quand le globe est visible
  var running = false, raf = 0;
  function loop(now) { draw(now); if (running) raf = requestAnimationFrame(loop); }
  function start() { if (!running && !reduce) { running = true; raf = requestAnimationFrame(loop); } }
  function stop() { running = false; cancelAnimationFrame(raf); }
  var visible = true;
  if ("IntersectionObserver" in window) {
    visible = false;
    new IntersectionObserver(function (e) { visible = e[e.length - 1].isIntersecting; visible ? start() : stop(); }).observe(canvas);
  } else start();
  document.addEventListener("visibilitychange", function () { if (document.hidden) stop(); else if (visible) start(); });
  if (reduce) draw(performance.now());

  // Redessine quand la langue change (étiquettes) ou le thème
  window.addEventListener("portfolio:lang", function () { draw(performance.now()); });
  new MutationObserver(function () { if (!running) draw(performance.now()); })
    .observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  // Glisser pour faire tourner (souris et tactile)
  canvas.addEventListener("pointerdown", function (e) {
    dragging = true; lastX = e.clientX; lastY = e.clientY; canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener("pointermove", function (e) {
    if (!dragging) return;
    userOffset -= (e.clientX - lastX) * 0.4;
    userTilt = Math.max(-30, Math.min(30, userTilt + (e.clientY - lastY) * 0.25));
    lastX = e.clientX; lastY = e.clientY;
    if (reduce) draw(performance.now());
  });
  ["pointerup", "pointercancel"].forEach(function (ev) {
    canvas.addEventListener(ev, function () { dragging = false; });
  });
})();
