# 🎮 游戏

## Epic Games Store <Site url="store.epicgames.com"/>

### Free games <Site url="store.epicgames.com" size="sm" />

<Route namespace="epicgames" :data='{"path":"/freegames/:locale?/:country?","categories":["game","popular"],"view":5,"example":"/epicgames/freegames/en-US/US","parameters":{"locale":{"description":"Locale","default":"en-US"},"country":{"description":"Country","default":"US"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["store.epicgames.com/:locale/free-games"],"target":"/freegames/:locale"}],"name":"Free games","maintainers":["DIYgod","NeverBehave","Zyx-A","junfengP","nczitzk","KotaHv"],"location":"index.ts","heat":4467,"topFeeds":[{"id":"41503779521380352","type":"feed","url":"rsshub://epicgames/freegames/en-US/US","title":"Epic Games Store - Free Games","description":"Epic Games Store - Free Games - Powered by RSSHub","image":null},{"id":"43374760408291328","type":"feed","url":"rsshub://epicgames/freegames/zh-CN/CN","title":"Epic Games Store - Free Games","description":"Epic Games Store - Free Games - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 小黑盒 <Site url="xiaoheihe.cn"/>

### 游戏新闻 <Site url="xiaoheihe.cn" size="sm" />

<Route namespace="xiaoheihe" :data='{"path":"/news","categories":["game"],"example":"/xiaoheihe/news","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"游戏新闻","maintainers":["tssujt"],"location":"news.ts","heat":705,"topFeeds":[{"id":"41374762779449344","type":"feed","url":"rsshub://xiaoheihe/news","title":"小黑盒游戏新闻","description":"小黑盒游戏新闻 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 喜加一 <Site url="xiaoheihe.cn" size="sm" />

<Route namespace="xiaoheihe" :data='{"path":"/add2cart/:platform","categories":["game"],"example":"/xiaoheihe/add2cart/epic","parameters":{"platform":"平台名：epic、steam或gog"},"name":"喜加一","maintainers":["ladeng07"],"location":"add2cart.ts","heat":429,"topFeeds":[{"id":"58426420603331584","type":"feed","url":"rsshub://xiaoheihe/add2cart/epic","title":"小黑盒 EPIC 喜加一","description":"小黑盒 EPIC 喜加一 - Powered by RSSHub","image":null},{"id":"65390865249901568","type":"feed","url":"rsshub://xiaoheihe/add2cart/steam","title":"小黑盒 STEAM 喜加一","description":"小黑盒 STEAM 喜加一 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 游戏折扣 <Site url="xiaoheihe.cn" size="sm" />

<Route namespace="xiaoheihe" :data='{"path":"/discount/:platform","categories":["game"],"example":"/xiaoheihe/discount/pc","parameters":{"platform":"平台分类，见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"游戏折扣","maintainers":["tssujt"],"description":"| PC  | Switch  | PSN   | Xbox |\n| ----- | ------ | ----- | ----- |\n| pc    | switch | psn   | xbox  |","location":"discount.ts","heat":365,"topFeeds":[{"id":"78839970214681600","type":"feed","url":"rsshub://xiaoheihe/discount/pc","title":"小黑盒 PC 游戏折扣","description":"小黑盒 PC 游戏折扣 - Powered by RSSHub","image":null},{"id":"86932279954497536","type":"feed","url":"rsshub://xiaoheihe/discount/switch","title":"小黑盒 Switch 游戏折扣","description":"小黑盒 Switch 游戏折扣 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| PC  | Switch  | PSN   | Xbox |
| ----- | ------ | ----- | ----- |
| pc    | switch | psn   | xbox  |

### 用户动态 <Site url="xiaoheihe.cn" size="sm" />

<Route namespace="xiaoheihe" :data='{"path":"/user/:id","categories":["game"],"example":"/xiaoheihe/user/30664023","parameters":{"id":"用户 ID"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"用户动态","maintainers":["tssujt"],"location":"user.ts","heat":35,"topFeeds":[{"id":"89892270853491712","type":"feed","url":"rsshub://xiaoheihe/user/55764561","title":"三角洲行动 的动态","description":"三角洲行动 的动态 - Powered by RSSHub","image":null},{"id":"91867369650236416","type":"feed","url":"rsshub://xiaoheihe/user/23741741","title":"游戏资讯BOT 的动态","description":"游戏资讯BOT 的动态 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## PlayStation Store <Site url="www.playstation.com"/>

### PlayStation Monthly Games <Site url="www.playstation.com/en-sg/ps-plus/whats-new" size="sm" />

<Route namespace="ps" :data='{"path":"/monthly-games","categories":["game"],"view":5,"example":"/ps/monthly-games","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.playstation.com/en-sg/ps-plus/whats-new"]}],"name":"PlayStation Monthly Games","maintainers":["justjustCC"],"url":"www.playstation.com/en-sg/ps-plus/whats-new","location":"monthly-games.ts","heat":770,"topFeeds":[{"id":"41147805272531996","type":"feed","url":"rsshub://ps/monthly-games","title":"PlayStation Plus Monthly Games","description":"PlayStation Plus Monthly Games - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### PlayStation Network user trophy <Site url="www.playstation.com" size="sm" />

<Route namespace="ps" :data='{"path":"/trophy/:id","categories":["game"],"example":"/ps/trophy/DIYgod_","parameters":{"id":"User ID"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"PlayStation Network user trophy","maintainers":["DIYgod"],"location":"trophy.ts","heat":36,"topFeeds":[{"id":"65439345539341312","type":"feed","url":"rsshub://ps/trophy/DIYgod_","title":"DIYgod_ 的 PSN 奖杯","description":"DIYgod_ 的 PSN 奖杯 - Powered by RSSHub","image":null},{"id":"63467474622024704","type":"feed","url":"rsshub://ps/trophy/raiuka","title":"raiuka 的 PSN 奖杯","description":"raiuka 的 PSN 奖杯 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 3DMGame <Site url="3dmgame.com"/>

### 新闻中心 <Site url="3dmgame.com" size="sm" />

<Route namespace="3dmgame" :data='{"path":"/news/:category?","categories":["game"],"example":"/3dmgame/news","parameters":{"category":"分类名或 ID，见下表，默认为新闻推荐，ID 可从分类 URL 中找到，如 Steam 为 `22221`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["3dmgame.com/news/:category?","3dmgame.com/news"]}],"name":"新闻中心","maintainers":["zhboner","lyqluis"],"description":"| 新闻推荐 | 游戏新闻 | 动漫影视 | 智能数码 | 时事焦点    |\n| -------- | -------- | -------- | -------- | ----------- |\n|          | game     | acg      | next     | news_36_1 |","location":"news-center.ts","heat":719,"topFeeds":[{"id":"55939235463397394","type":"feed","url":"rsshub://3dmgame/news","title":"3DM - 新闻中心","description":"3DM新闻中心为广大互联网用户提供前沿的新闻资讯，让玩家及时了解到最新的游戏新闻、动漫影视、智能数码、游戏硬件和时事焦点等相关资讯。 - Powered by RSSHub","image":null},{"id":"60199571398524974","type":"feed","url":"rsshub://3dmgame/news/game","title":"3DM - 游戏新闻","description":"3DM新闻中心为广大互联网用户提供前沿的游戏新闻资讯，让玩家及时了解到最新的单机资讯、游戏杂谈、游戏周边和厂商动态等相关资讯。 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 新闻推荐 | 游戏新闻 | 动漫影视 | 智能数码 | 时事焦点    |
| -------- | -------- | -------- | -------- | ----------- |
|          | game     | acg      | next     | news_36_1 |

### 游戏资讯 <Site url="3dmgame.com" size="sm" />

<Route namespace="3dmgame" :data='{"path":"/games/:name/:type?","radar":[{"source":["3dmgame.com/games/:name/:type"]}],"name":"游戏资讯","categories":["game"],"maintainers":["sinchang","jacky2001114","HenryQW","lyqluis"],"location":"game.ts","heat":1,"topFeeds":[{"id":"167557591295016960","type":"feed","url":"rsshub://3dmgame/games/ck3/news","title":"十字军之王3新闻","description":"十字军之王3新闻提供了游戏相关的最新资讯，在这玩家可以清楚的了解到游戏动态，获取到真实有用的游戏讯息。 - Powered by RSSHub","image":null}]}' :test='undefined' />

## 游戏打折情报 <Site url="yxdzqb.com"/>

### 游戏折扣 <Site url="yxdzqb.com/" size="sm" />

<Route namespace="yxdzqb" :data='{"path":"/:type","categories":["game"],"example":"/yxdzqb/popular_cn","parameters":{"type":"折扣类型"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yxdzqb.com/"]}],"name":"游戏折扣","maintainers":["LogicJake","nczitzk"],"url":"yxdzqb.com/","description":"| Steam 最新折扣 | Steam 热门游戏折扣 | Steam 热门中文游戏折扣 | Steam 历史低价 | Steam 中文游戏历史低价 |\n| -------------- | ------------------ | ---------------------- | -------------- | ---------------------- |\n| discount       | popular            | popular_cn            | low            | low_cn                |","location":"index.ts","heat":566,"topFeeds":[{"id":"52721325092269088","type":"feed","url":"rsshub://yxdzqb/low","title":"Steam 热门游戏历史低价-游戏打折情报","description":"Steam 热门游戏历史低价-游戏打折情报 - Powered by RSSHub","image":null},{"id":"41476070206969860","type":"feed","url":"rsshub://yxdzqb/popular_cn","title":"中文热门游戏折扣合集-游戏打折情报","description":"中文热门游戏折扣合集-游戏打折情报 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| Steam 最新折扣 | Steam 热门游戏折扣 | Steam 热门中文游戏折扣 | Steam 历史低价 | Steam 中文游戏历史低价 |
| -------------- | ------------------ | ---------------------- | -------------- | ---------------------- |
| discount       | popular            | popular_cn            | low            | low_cn                |

## GamerSky <Site url="gamersky.com"/>

### 资讯 <Site url="gamersky.com" size="sm" />

<Route namespace="gamersky" :data='{"path":"/news/:type?","categories":["game"],"example":"/gamersky/news/pc","parameters":{"type":"资讯类型，见表，默认为 `pc`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.gamersky.com/news"],"target":"/news"}],"name":"资讯","maintainers":["yy4382"],"description":"|today|pc|ns|mobile|web|industry|hardware|tech|\n|---|---|---|---|---|---|---|---|\n|今日推荐|单机电玩|NS|手游|网游|业界|硬件|科技|\n","location":"news.ts","heat":397,"topFeeds":[{"id":"57683409701121024","type":"feed","url":"rsshub://gamersky/news/today","title":"今日推荐 - 游民星空","description":"今日推荐 - 游民星空 - Powered by RSSHub","image":null},{"id":"58369029575289856","type":"feed","url":"rsshub://gamersky/news","title":"单机电玩 - 游民星空","description":"单机电玩 - 游民星空 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

|today|pc|ns|mobile|web|industry|hardware|tech|
|---|---|---|---|---|---|---|---|
|今日推荐|单机电玩|NS|手游|网游|业界|硬件|科技|


### 评测 <Site url="gamersky.com" size="sm" />

<Route namespace="gamersky" :data='{"path":"/review/:type?","categories":["game"],"example":"/gamersky/review/pc","parameters":{"type":"评测类型，可选值为 `pc`、`tv`、`indie`、`web`、`mobile`、`all`，默认为 `pc`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.gamersky.com/review"],"target":"/review"}],"name":"评测","maintainers":["yy4382"],"description":"|pc|tv|indie|web|mobile|all|\n|---|---|---|---|---|---|\n|单机|电视|独立游戏|网游|手游|全部评测|\n","location":"review.ts","heat":118,"topFeeds":[{"id":"56355573445982208","type":"feed","url":"rsshub://gamersky/review/pc","title":"单机 - 游民星空评测","description":"单机 - 游民星空评测 - Powered by RSSHub","image":null},{"id":"73294792620601344","type":"feed","url":"rsshub://gamersky/review/all","title":"全部评测 - 游民星空评测","description":"全部评测 - 游民星空评测 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

|pc|tv|indie|web|mobile|all|
|---|---|---|---|---|---|
|单机|电视|独立游戏|网游|手游|全部评测|


### 娱乐 <Site url="gamersky.com" size="sm" />

<Route namespace="gamersky" :data='{"path":"/ent/:category?","categories":["game"],"example":"/gamersky/ent/xz","parameters":{"type":"分类类型，留空为 `all`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[],"name":"娱乐","maintainers":["LogicJake"],"description":"|\n|\n|\n","location":"ent.ts","heat":11,"topFeeds":[{"id":"73637415277299712","type":"feed","url":"rsshub://gamersky/ent","title":"热点图文 - 游民娱乐","description":"热点图文 - 游民娱乐 - Powered by RSSHub","image":null},{"id":"178823201593052164","type":"feed","url":"rsshub://gamersky/ent/ymfl","title":"Importing","description":null,"image":null}]}' :test='{"code":0}' />

|
|
|


## 机核网 <Site url="gcores.com"/>

机核 GCORES

### 资讯 <Site url="www.gcores.com" size="sm" />

<Route namespace="gcores" :data='{"path":"/news","name":"资讯","url":"www.gcores.com","maintainers":["nczitzk"],"example":"/gcores/news","categories":["game"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.gcores.com/news"],"target":"/gcores/news"}],"view":0,"location":"news.ts","heat":252,"topFeeds":[{"id":"106670430920170496","type":"feed","url":"rsshub://gcores/news","title":"资讯 | 机核 GCORES","description":"机核从2010年开始一直致力于分享游戏玩家的生活，以及深入探讨游戏相关的文化。我们开发原创的播客以及视频节目，一直在不断寻找民间高质量的内容创作者。 我们坚信游戏不止是游戏，游戏中包含的科学，文化，历史等各个层面的知识和故事，它们同时也会辐射到二次元甚至电影的领域，这些内容非常值得分享给热爱游戏的您。 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 文章 <Site url="www.gcores.com" size="sm" />

<Route namespace="gcores" :data='{"path":"/articles","name":"文章","url":"www.gcores.com","maintainers":["nczitzk"],"example":"/gcores/articles","categories":["game"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.gcores.com/articles"],"target":"/gcores/articles"}],"view":0,"location":"articles.ts","heat":89,"topFeeds":[{"id":"107605145218297856","type":"feed","url":"rsshub://gcores/articles","title":"文章 | 机核 GCORES","description":"机核从2010年开始一直致力于分享游戏玩家的生活，以及深入探讨游戏相关的文化。我们开发原创的播客以及视频节目，一直在不断寻找民间高质量的内容创作者。 我们坚信游戏不止是游戏，游戏中包含的科学，文化，历史等各个层面的知识和故事，它们同时也会辐射到二次元甚至电影的领域，这些内容非常值得分享给热爱游戏的您。 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 专题 <Site url="www.gcores.com" size="sm" />

<Route namespace="gcores" :data='{"path":"/collections/:id/:tab?","name":"专题","url":"www.gcores.com","maintainers":["kudryavka1013","nczitzk"],"example":"/gcores/collections/64/articles","parameters":{"id":{"description":"专题 ID，可在对应专题页 URL 中找到"},"tab":{"description":"类型，默认为空，即全部，可在对应专题页 URL 中找到","options":[{"label":"全部","value":""},{"label":"播客","value":"radios"},{"label":"文章","value":"articles"},{"label":"资讯","value":"news"},{"label":"视频","value":"videos"}]}},"description":"::: tip\n若订阅 [文章 - 文章](https://www.gcores.com/collections/64?tab=articles)，网址为 `https://www.gcores.com/collections/64?tab=articles`，请截取 `https://www.gcores.com/collections/` 到末尾的部分 `64` 作为 `id` 参数填入，截取 `articles` 作为 `tab` 参数填入，此时目标路由为 [`/gcores/collections/64/articles`](https://rsshub.app/gcores/collections/64/articles)。\n:::\n\n| 全部 | 播客   | 文章     | 资讯 | 视频   |\n| ---- | ------ | -------- | ---- | ------ |\n|      | radios | articles | news | videos |\n","categories":["game"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.gcores.com/collections/:id"]},{"title":"全部","source":["www.gcores.com/collections/:id"],"target":"/collections/:id"},{"title":"播客","source":["www.gcores.com/collections/:id"],"target":"/collections/:id/radios"},{"title":"文章","source":["www.gcores.com/collections/:id"],"target":"/collections/:id/articles"},{"title":"资讯","source":["www.gcores.com/collections/:id"],"target":"/collections/:id/news"},{"title":"视频","source":["www.gcores.com/collections/:id"],"target":"/collections/:id/videos"}],"view":0,"location":"collections.ts","heat":38,"topFeeds":[{"id":"79737750822299648","type":"feed","url":"rsshub://gcores/collections/64","title":"游戏开发设计心得分享 | 机核 GCORES","description":"欢迎大家在机核分享交流 - Powered by RSSHub","image":null},{"id":"66028011830664262","type":"feed","url":"rsshub://gcores/collections/83","title":"游戏摄影：将万千游戏世界留在自己的相册之中 | 机核 GCORES","description":"游戏的另一种玩法，摄影的另一种玩法 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

::: tip
若订阅 [文章 - 文章](https://www.gcores.com/collections/64?tab=articles)，网址为 `https://www.gcores.com/collections/64?tab=articles`，请截取 `https://www.gcores.com/collections/` 到末尾的部分 `64` 作为 `id` 参数填入，截取 `articles` 作为 `tab` 参数填入，此时目标路由为 [`/gcores/collections/64/articles`](https://rsshub.app/gcores/collections/64/articles)。
:::

| 全部 | 播客   | 文章     | 资讯 | 视频   |
| ---- | ------ | -------- | ---- | ------ |
|      | radios | articles | news | videos |


### 分类 <Site url="www.gcores.com" size="sm" />

<Route namespace="gcores" :data='{"path":"/categories/:id/:tab?","name":"分类","url":"www.gcores.com","maintainers":["MoguCloud","StevenRCE0","nczitzk"],"example":"/gcores/categories/1/articles","parameters":{"id":{"description":"分类 ID，可在对应分类页 URL 中找到"},"tab":{"description":"类型，默认为空，即全部，可在对应分类页 URL 中找到","options":[{"label":"全部","value":""},{"label":"播客","value":"radios"},{"label":"文章","value":"articles"},{"label":"资讯","value":"news"},{"label":"视频","value":"videos"}]}},"description":"::: tip\n若订阅 [文章 - 文章](https://www.gcores.com/categories/1?tab=articles)，网址为 `https://www.gcores.com/categories/1?tab=articles`，请截取 `https://www.gcores.com/categories/` 到末尾的部分 `1` 作为 `id` 参数填入，截取 `articles` 作为 `tab` 参数填入，此时目标路由为 [`/gcores/categories/1/articles`](https://rsshub.app/gcores/categories/1/articles)。\n:::\n\n| 全部 | 播客   | 文章     | 资讯 | 视频   |\n| ---- | ------ | -------- | ---- | ------ |\n|      | radios | articles | news | videos |\n","categories":["game"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.gcores.com/categories/:id"]},{"title":"全部","source":["www.gcores.com/categories/:id"],"target":"/gcores/categories/:id"},{"title":"播客","source":["www.gcores.com/categories/:id"],"target":"/categories/:id/radios"},{"title":"文章","source":["www.gcores.com/categories/:id"],"target":"/categories/:id/articles"},{"title":"资讯","source":["www.gcores.com/categories/:id"],"target":"/categories/:id/news"},{"title":"视频","source":["www.gcores.com/categories/:id"],"target":"/categories/:id/videos"}],"view":0,"location":"categories.ts","heat":22,"topFeeds":[{"id":"116739843787561984","type":"feed","url":"rsshub://gcores/categories/20","title":"知识挖掘机 | 机核 GCORES","description":"机核从2010年开始一直致力于分享游戏玩家的生活，以及深入探讨游戏相关的文化。我们开发原创的播客以及视频节目，一直在不断寻找民间高质量的内容创作者。 我们坚信游戏不止是游戏，游戏中包含的科学，文化，历史等各个层面的知识和故事，它们同时也会辐射到二次元甚至电影的领域，这些内容非常值得分享给热爱游戏的您。 - Powered by RSSHub","image":null},{"id":"118313539678158848","type":"feed","url":"rsshub://gcores/categories/14","title":"GadioMusic | 机核 GCORES","description":"机核从2010年开始一直致力于分享游戏玩家的生活，以及深入探讨游戏相关的文化。我们开发原创的播客以及视频节目，一直在不断寻找民间高质量的内容创作者。 我们坚信游戏不止是游戏，游戏中包含的科学，文化，历史等各个层面的知识和故事，它们同时也会辐射到二次元甚至电影的领域，这些内容非常值得分享给热爱游戏的您。 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 325181325468 to be less than 311040000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:36:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

::: tip
若订阅 [文章 - 文章](https://www.gcores.com/categories/1?tab=articles)，网址为 `https://www.gcores.com/categories/1?tab=articles`，请截取 `https://www.gcores.com/categories/` 到末尾的部分 `1` 作为 `id` 参数填入，截取 `articles` 作为 `tab` 参数填入，此时目标路由为 [`/gcores/categories/1/articles`](https://rsshub.app/gcores/categories/1/articles)。
:::

| 全部 | 播客   | 文章     | 资讯 | 视频   |
| ---- | ------ | -------- | ---- | ------ |
|      | radios | articles | news | videos |


### 视频 <Site url="www.gcores.com" size="sm" />

<Route namespace="gcores" :data='{"path":"/videos","name":"视频","url":"www.gcores.com","maintainers":["nczitzk"],"example":"/gcores/videos","categories":["game"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.gcores.com/videos"],"target":"/gcores/videos"}],"view":3,"location":"videos.ts","heat":13,"topFeeds":[{"id":"114624152852011008","type":"feed","url":"rsshub://gcores/videos","title":"视频 | 机核 GCORES","description":"机核从2010年开始一直致力于分享游戏玩家的生活，以及深入探讨游戏相关的文化。我们开发原创的播客以及视频节目，一直在不断寻找民间高质量的内容创作者。 我们坚信游戏不止是游戏，游戏中包含的科学，文化，历史等各个层面的知识和故事，它们同时也会辐射到二次元甚至电影的领域，这些内容非常值得分享给热爱游戏的您。 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 机组推荐 <Site url="www.gcores.com" size="sm" />

<Route namespace="gcores" :data='{"path":["/topics/:id/recommend","/topics/recommend"],"name":"机组推荐","url":"www.gcores.com","maintainers":["nczitzk"],"example":"/gcores/topics/recommend","parameters":{"id":{"description":"小组 ID，默认为空，即全部，可在对应小组页 URL 中找到"}},"description":"::: tip\n若订阅 [我的年度总结](https://www.gcores.com/topics/581)，网址为 `https://www.gcores.com/topics/581`，请截取 `https://www.gcores.com/topics/` 到末尾的部分 `581` 作为 `id` 参数填入，此时目标路由为 [`/gcores/topics/581/recommend`](https://rsshub.app/gcores/topics/581/recommend)。\n:::\n","categories":["game"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.gcores.com/topics/home"],"target":"/gcores/topics/recommend"},{"source":["www.gcores.com/topics/:id"],"target":"/gcores/topics/:id/recommend"}],"view":1,"location":"topics.ts","heat":2,"topFeeds":[{"id":"122701146735891456","type":"feed","url":"rsshub://gcores/topics/recommend","title":"机组游戏社区 | 机核 GCORES","description":"在这里分享你的兴趣和创作，与同好深入交流 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

::: tip
若订阅 [我的年度总结](https://www.gcores.com/topics/581)，网址为 `https://www.gcores.com/topics/581`，请截取 `https://www.gcores.com/topics/` 到末尾的部分 `581` 作为 `id` 参数填入，此时目标路由为 [`/gcores/topics/581/recommend`](https://rsshub.app/gcores/topics/581/recommend)。
:::


### 标签 <Site url="www.gcores.com" size="sm" />

<Route namespace="gcores" :data='{"path":"/tags/:id/:tab?","name":"标签","url":"www.gcores.com","maintainers":["StevenRCE0","nczitzk"],"example":"/gcores/tags/1/articles","parameters":{"id":{"description":"标签 ID，可在对应标签页 URL 中找到"},"tab":{"description":"类型，默认为空，即全部，可在对应标签页 URL 中找到","options":[{"label":"全部","value":""},{"label":"播客","value":"radios"},{"label":"文章","value":"articles"},{"label":"资讯","value":"news"},{"label":"视频","value":"videos"}]}},"description":"::: tip\n若订阅 [美国 - 文章](https://www.gcores.com/tags/1/originals?tab=articles)，网址为 `https://www.gcores.com/tags/1/originals?tab=articles`，请截取 `https://www.gcores.com/tags/` 到末尾 `/originals` 的部分 `1` 作为 `id` 参数填入，截取 `articles` 作为 `tab` 参数填入，此时目标路由为 [`/gcores/tags/1/articles`](https://rsshub.app/gcores/tags/1/articles)。\n:::\n\n| 全部 | 播客   | 文章     | 资讯 | 视频   |\n| ---- | ------ | -------- | ---- | ------ |\n|      | radios | articles | news | videos |\n","categories":["game"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.gcores.com/tags/:id/originals"]},{"title":"全部","source":["www.gcores.com/tags/:id/originals"],"target":"/gcores/tags/:id"},{"title":"播客","source":["www.gcores.com/tags/:id/originals"],"target":"/gcores/tags/:id/radios"},{"title":"文章","source":["www.gcores.com/tags/:id/originals"],"target":"/gcores/tags/:id/articles"},{"title":"资讯","source":["www.gcores.com/tags/:id/originals"],"target":"/gcores/tags/:id/news"},{"title":"视频","source":["www.gcores.com/tags/:id/originals"],"target":"/gcores/tags/:id/videos"}],"view":0,"location":"tags.ts","heat":1,"topFeeds":[{"id":"112357158002525184","type":"feed","url":"rsshub://gcores/tags/1/articles","title":"美国 | 机核 GCORES","description":"机核从2010年开始一直致力于分享游戏玩家的生活，以及深入探讨游戏相关的文化。我们开发原创的播客以及视频节目，一直在不断寻找民间高质量的内容创作者。 我们坚信游戏不止是游戏，游戏中包含的科学，文化，历史等各个层面的知识和故事，它们同时也会辐射到二次元甚至电影的领域，这些内容非常值得分享给热爱游戏的您。 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

::: tip
若订阅 [美国 - 文章](https://www.gcores.com/tags/1/originals?tab=articles)，网址为 `https://www.gcores.com/tags/1/originals?tab=articles`，请截取 `https://www.gcores.com/tags/` 到末尾 `/originals` 的部分 `1` 作为 `id` 参数填入，截取 `articles` 作为 `tab` 参数填入，此时目标路由为 [`/gcores/tags/1/articles`](https://rsshub.app/gcores/tags/1/articles)。
:::

| 全部 | 播客   | 文章     | 资讯 | 视频   |
| ---- | ------ | -------- | ---- | ------ |
|      | radios | articles | news | videos |


### 预告 <Site url="www.gcores.com" size="sm" />

<Route namespace="gcores" :data='{"path":"/radios/preview","name":"预告","url":"www.gcores.com","maintainers":["nczitzk"],"example":"/gcores/radios/preview","categories":["game"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.gcores.com/radios/preview"],"target":"/gcores/radios/preview"}],"view":5,"location":"program-previews.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected -1080938804 to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## indienova 独立游戏 <Site url="indienova.com"/>

### 文章 <Site url="indienova.com" size="sm" />

<Route namespace="indienova" :data='{"path":"/:type","categories":["game"],"example":"/indienova/article","parameters":{"type":"类型: `article` 文章，`development` 开发"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"文章","maintainers":["GensouSakuya","kt286"],"location":"article.ts","heat":267,"topFeeds":[{"id":"55619197325901824","type":"feed","url":"rsshub://indienova/article","title":"独立游戏资讯 | indienova 独立游戏","description":"独立游戏资讯 | indienova 独立游戏 - Powered by RSSHub","image":null},{"id":"63456671097359360","type":"feed","url":"rsshub://indienova/development","title":"独立游戏开发 | indienova 独立游戏","description":"独立游戏资讯 | indienova 独立游戏 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 专题 <Site url="indienova.com" size="sm" />

<Route namespace="indienova" :data='{"path":"/column/:columnId","categories":["game"],"example":"/indienova/column/52","parameters":{"columnId":"专题 ID，可在 URL中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["indienova.com/column/:columnId"]}],"name":"专题","maintainers":["TonyRL"],"description":"<details>\n<summary>专题 ID</summary>\n\n    游戏推荐\n\n| itch 一周游戏汇 | 一周值得关注的发售作品 | 诺娃速递 | 周末游戏视频集锦 | 每月媒体评分 | 年度最佳游戏 | Indie Focus 近期新游 | indienova Picks 精选 |\n| --------------- | ---------------------- | -------- | ---------------- | ------------ | ------------ | -------------------- | -------------------- |\n| 52              | 29                     | 41       | 43               | 45           | 39           | 1                    | 8                    |\n\n    游戏评论\n\n| 游必有方 Podcast | 独立游戏潮（RED） |\n| ---------------- | ----------------- |\n| 6                | 3                 |\n\n    游戏开发\n\n| 游戏设计模式 | Roguelike 开发 | GMS 中文教程 |\n| ------------ | -------------- | ------------ |\n| 15           | 14             | 7            |\n\n    游戏设计\n\n| 游戏与所有 | 让人眼前一亮的游戏设计 | 游戏音乐分析 | 游戏情感设计 | 游戏相关书籍 | 游戏设计课程笔记 | 游戏设计工具 | 游戏设计灵感 | 设计师谈设计 | 游戏研究方法 | 功能游戏 | 游戏设计专业院校 | 像素课堂 |\n| ---------- | ---------------------- | ------------ | ------------ | ------------ | ---------------- | ------------ | ------------ | ------------ | ------------ | -------- | ---------------- | -------- |\n| 10         | 33                     | 17           | 4            | 22           | 11               | 24           | 26           | 27           | 28           | 38       | 9                | 19       |\n\n    游戏文化\n\n| NOVA 海外独立游戏见闻 | 工作室访谈 | indie Figure 游戏人 | 游戏艺术家 | 独立游戏音乐欣赏 | 游戏瑰宝 | 电脑 RPG 游戏史 | ALT. CTRL. GAMING |\n| --------------------- | ---------- | ------------------- | ---------- | ---------------- | -------- | --------------- | ----------------- |\n| 53                    | 23         | 5                   | 44         | 18               | 21       | 16              | 2                 |\n\n    Game Jam\n\n| Ludum Dare | Global Game Jam |\n| ---------- | --------------- |\n| 31         | 13              |\n</details>","location":"column.ts","heat":40,"topFeeds":[{"id":"63102103783237640","type":"feed","url":"rsshub://indienova/column/29","title":"一周值得关注的作品 | indienova 独立游戏","description":"一周值得关注的作品 | indienova 独立游戏 - Powered by RSSHub","image":null},{"id":"77267282533962752","type":"feed","url":"rsshub://indienova/column/52","title":"itch一周游戏汇 | indienova 独立游戏","description":"itch一周游戏汇 | indienova 独立游戏 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

<details>
<summary>专题 ID</summary>

    游戏推荐

| itch 一周游戏汇 | 一周值得关注的发售作品 | 诺娃速递 | 周末游戏视频集锦 | 每月媒体评分 | 年度最佳游戏 | Indie Focus 近期新游 | indienova Picks 精选 |
| --------------- | ---------------------- | -------- | ---------------- | ------------ | ------------ | -------------------- | -------------------- |
| 52              | 29                     | 41       | 43               | 45           | 39           | 1                    | 8                    |

    游戏评论

| 游必有方 Podcast | 独立游戏潮（RED） |
| ---------------- | ----------------- |
| 6                | 3                 |

    游戏开发

| 游戏设计模式 | Roguelike 开发 | GMS 中文教程 |
| ------------ | -------------- | ------------ |
| 15           | 14             | 7            |

    游戏设计

| 游戏与所有 | 让人眼前一亮的游戏设计 | 游戏音乐分析 | 游戏情感设计 | 游戏相关书籍 | 游戏设计课程笔记 | 游戏设计工具 | 游戏设计灵感 | 设计师谈设计 | 游戏研究方法 | 功能游戏 | 游戏设计专业院校 | 像素课堂 |
| ---------- | ---------------------- | ------------ | ------------ | ------------ | ---------------- | ------------ | ------------ | ------------ | ------------ | -------- | ---------------- | -------- |
| 10         | 33                     | 17           | 4            | 22           | 11               | 24           | 26           | 27           | 28           | 38       | 9                | 19       |

    游戏文化

| NOVA 海外独立游戏见闻 | 工作室访谈 | indie Figure 游戏人 | 游戏艺术家 | 独立游戏音乐欣赏 | 游戏瑰宝 | 电脑 RPG 游戏史 | ALT. CTRL. GAMING |
| --------------------- | ---------- | ------------------- | ---------- | ---------------- | -------- | --------------- | ----------------- |
| 53                    | 23         | 5                   | 44         | 18               | 21       | 16              | 2                 |

    Game Jam

| Ludum Dare | Global Game Jam |
| ---------- | --------------- |
| 31         | 13              |
</details>

### 会员开发游戏库 <Site url="indienova.com/usergames" size="sm" />

<Route namespace="indienova" :data='{"path":"/usergames","categories":["game"],"example":"/indienova/usergames","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["indienova.com/usergames","indienova.com/"]}],"name":"会员开发游戏库","maintainers":["TonyRL"],"url":"indienova.com/usergames","location":"usergames.ts","heat":22,"topFeeds":[{"id":"61084763807135744","type":"feed","url":"rsshub://indienova/usergames","title":"会员开发游戏库 | indienova 独立游戏","description":"会员开发游戏库 | indienova 独立游戏 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected -8780591430 to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Unknown <Site url="indienova.com" size="sm" />

<Route namespace="indienova" :data='{"path":"/gamedb/recent","name":"Unknown","maintainers":["TonyRL"],"location":"gamedb.ts","heat":1,"topFeeds":[{"id":"63456437927240704","type":"feed","url":"rsshub://indienova/gamedb/recent","title":"游戏库 - 最近发行的游戏（全平台） | indienova GameDB 游戏库","description":"游戏库 - 最近发行的游戏（全平台） | indienova GameDB 游戏库 - Powered by RSSHub","image":null}]}' :test='undefined' />

## 米哈游 <Site url="genshin.hoyoverse.com"/>

### 米游社 - 官方公告 <Site url="genshin.hoyoverse.com" size="sm" />

<Route namespace="mihoyo" :data='{"path":"/bbs/official/:gids/:type?/:page_size?/:last_id?","categories":["game"],"example":"/mihoyo/bbs/official/2/3/20/","parameters":{"gids":"游戏id","type":"公告类型，默认为 2(即 活动)","page_size":"分页大小，默认为 20 ","last_id":"跳过的公告数，例如指定为 40 就是从第 40 条公告开始，可用于分页"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"米游社 - 官方公告","maintainers":["CaoMeiYouRen"],"description":"游戏 id\n\n| 崩坏三 | 原神 | 崩坏二 | 未定事件簿 | 星穹铁道 | 绝区零 |\n| ------ | ---- | ------ | ---------- | -------- | ------ |\n| 1      | 2    | 3      | 4          | 6        | 8      |\n\n  公告类型\n\n| 公告 | 活动 | 资讯 |\n| ---- | ---- | ---- |\n| 1    | 2    | 3    |","location":"bbs/official.ts","heat":153,"topFeeds":[{"id":"65750657186191360","type":"feed","url":"rsshub://mihoyo/bbs/official/2/1/20","title":"米游社 - 原神 - 公告","description":"米游社 - 原神 - 公告 - Powered by RSSHub","image":null},{"id":"65753799394982912","type":"feed","url":"rsshub://mihoyo/bbs/official/6/1/20","title":"米游社 - 崩坏：星穹铁道 - 公告","description":"米游社 - 崩坏：星穹铁道 - 公告 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 301 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

游戏 id

| 崩坏三 | 原神 | 崩坏二 | 未定事件簿 | 星穹铁道 | 绝区零 |
| ------ | ---- | ------ | ---------- | -------- | ------ |
| 1      | 2    | 3      | 4          | 6        | 8      |

  公告类型

| 公告 | 活动 | 资讯 |
| ---- | ---- | ---- |
| 1    | 2    | 3    |

### 米游社 - 同人榜 <Site url="genshin.hoyoverse.com" size="sm" />

<Route namespace="mihoyo" :data='{"path":"/bbs/img-ranking/:game/:routeParams?","categories":["game"],"example":"/mihoyo/bbs/img-ranking/ys/forumType=tongren&cateType=illustration&rankingType=daily","parameters":{"game":"游戏缩写","routeParams":"额外参数；请参阅以下说明和表格"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["miyoushe.com/:game/imgRanking/:forum_id/:ranking_id/:cate_id"],"target":"/bbs/img-ranking/:game"}],"name":"米游社 - 同人榜","maintainers":["CaoMeiYouRen"],"description":"| 键          | 含义                                  | 接受的值                                                             | 默认值       |\n| ----------- | ------------------------------------- | -------------------------------------------------------------------- | ------------ |\n| forumType   | 主榜类型（仅原神、大别野有 cos 主榜） | tongren/cos                                                          | tongren      |\n| cateType    | 子榜类型（仅崩坏三、原神有子榜）      | 崩坏三：illustration/comic/cos；原神：illustration/comic/qute/manual | illustration |\n| rankingType | 排行榜类型（崩坏二没有日榜）          | daily/weekly/monthly                                                 | daily        |\n| lastId      | 当前页 id（用于分页）                 | 数字                                                                 | 1            |\n\n  游戏缩写\n\n| 崩坏三 | 原神 | 崩坏二 | 未定事件簿 | 星穹铁道 | 大别野 | 绝区零 |\n| ------ | ---- | ------ | ---------- | -------- | ------ | ------ |\n| bh3    | ys   | bh2    | wd         | sr       | dby    | zzz    |\n\n  主榜类型\n\n| 同人榜  | COS 榜 |\n| ------- | ------ |\n| tongren | cos    |\n\n  子榜类型\n\n  崩坏三 子榜\n\n| 插画         | 漫画  | COS |\n| ------------ | ----- | --- |\n| illustration | comic | cos |\n\n  原神 子榜\n\n| 插画         | 漫画  | Q 版 | 手工   |\n| ------------ | ----- | ---- | ------ |\n| illustration | comic | qute | manual |\n\n  排行榜类型\n\n| 日榜  | 周榜   | 月榜    |\n| ----- | ------ | ------- |\n| daily | weekly | monthly |","location":"bbs/img-ranking.ts","heat":54,"topFeeds":[{"id":"41476070206969862","type":"feed","url":"rsshub://mihoyo/bbs/img-ranking/ys/forumType=tongren&cateType=illustration&rankingType=daily","title":"米游社-原神-同人榜-插画榜-日榜","description":"米游社-原神-同人榜-插画榜-日榜 - Powered by RSSHub","image":null},{"id":"74617383214838784","type":"feed","url":"rsshub://mihoyo/bbs/img-ranking/sr/forumType=tongren&rankingType=daily","title":"米游社-崩坏：星穹铁道-同人榜-日榜","description":"米游社-崩坏：星穹铁道-同人榜-日榜 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 键          | 含义                                  | 接受的值                                                             | 默认值       |
| ----------- | ------------------------------------- | -------------------------------------------------------------------- | ------------ |
| forumType   | 主榜类型（仅原神、大别野有 cos 主榜） | tongren/cos                                                          | tongren      |
| cateType    | 子榜类型（仅崩坏三、原神有子榜）      | 崩坏三：illustration/comic/cos；原神：illustration/comic/qute/manual | illustration |
| rankingType | 排行榜类型（崩坏二没有日榜）          | daily/weekly/monthly                                                 | daily        |
| lastId      | 当前页 id（用于分页）                 | 数字                                                                 | 1            |

  游戏缩写

| 崩坏三 | 原神 | 崩坏二 | 未定事件簿 | 星穹铁道 | 大别野 | 绝区零 |
| ------ | ---- | ------ | ---------- | -------- | ------ | ------ |
| bh3    | ys   | bh2    | wd         | sr       | dby    | zzz    |

  主榜类型

| 同人榜  | COS 榜 |
| ------- | ------ |
| tongren | cos    |

  子榜类型

  崩坏三 子榜

| 插画         | 漫画  | COS |
| ------------ | ----- | --- |
| illustration | comic | cos |

  原神 子榜

| 插画         | 漫画  | Q 版 | 手工   |
| ------------ | ----- | ---- | ------ |
| illustration | comic | qute | manual |

  排行榜类型

| 日榜  | 周榜   | 月榜    |
| ----- | ------ | ------- |
| daily | weekly | monthly |

### 原神 <Site url="genshin.hoyoverse.com" size="sm" />

<Route namespace="mihoyo" :data='{"path":"/ys/:location?/:category?","categories":["game"],"example":"/mihoyo/ys","parameters":{"location":"区域，可选 `main`（简中）或 `zh-tw`（繁中）","category":"分类，见下表，默认为最新"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["genshin.hoyoverse.com/:location/news"],"target":"/ys/:location"}],"name":"原神","maintainers":["nczitzk"],"description":"#### 新闻 {#mi-ha-you-yuan-shen-xin-wen}\n\n| 最新   | 新闻 | 公告   | 活动     |\n| ------ | ---- | ------ | -------- |\n| latest | news | notice | activity |","location":"ys/news.ts","heat":47,"topFeeds":[{"id":"68834268354564096","type":"feed","url":"rsshub://mihoyo/ys","title":"原神 - 最新","description":"原神 - 最新 - Powered by RSSHub","image":null},{"id":"156266162055355392","type":"feed","url":"rsshub://mihoyo/ys/main","title":"原神 - 最新","description":"原神 - 最新 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

#### 新闻 {#mi-ha-you-yuan-shen-xin-wen}

| 最新   | 新闻 | 公告   | 活动     |
| ------ | ---- | ------ | -------- |
| latest | news | notice | activity |

### 崩坏：星穹铁道 <Site url="sr.mihoyo.com/news" size="sm" />

<Route namespace="mihoyo" :data='{"path":"/sr/:location?/:category?","categories":["game"],"example":"/mihoyo/sr","parameters":{"location":"区域，可选 `zh-cn`（国服，简中）或 `zh-tw`（国际服，繁中）","category":"分类，见下表，默认为最新"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["sr.mihoyo.com/news"],"target":"/sr"}],"name":"崩坏：星穹铁道","maintainers":["shinanory"],"url":"sr.mihoyo.com/news","description":"#### 新闻 {#mi-ha-you-beng-huai-xing-qiong-tie-dao-xin-wen}\n\n| 最新     | 新闻 | 公告   | 活动     |\n| -------- | ---- | ------ | -------- |\n| news-all | news | notice | activity |","location":"sr/news.ts","heat":38,"topFeeds":[{"id":"59881623643134976","type":"feed","url":"rsshub://mihoyo/sr","title":"最新-崩坏：星穹铁道","description":"最新-崩坏：星穹铁道 - Powered by RSSHub","image":null},{"id":"60890429356326912","type":"feed","url":"rsshub://mihoyo/sr/zh-cn/notice","title":"公告-崩坏：星穹铁道","description":"公告-崩坏：星穹铁道 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

#### 新闻 {#mi-ha-you-beng-huai-xing-qiong-tie-dao-xin-wen}

| 最新     | 新闻 | 公告   | 活动     |
| -------- | ---- | ------ | -------- |
| news-all | news | notice | activity |

### 米游社 - 用户帖子 <Site url="genshin.hoyoverse.com" size="sm" />

<Route namespace="mihoyo" :data='{"path":"/bbs/user-post/:uid","categories":["game"],"example":"/mihoyo/bbs/user-post/77005350","parameters":{"uid":"用户uid"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"米游社 - 用户帖子","maintainers":["CaoMeiYouRen"],"location":"bbs/user-post.ts","heat":21,"topFeeds":[{"id":"198686272342260736","type":"feed","url":"rsshub://mihoyo/bbs/user-post/159117584","title":"米游社 - 初始镜像OriginMirror 的发帖","description":"米游社 - 初始镜像OriginMirror 的发帖 - Powered by RSSHub","image":null},{"id":"169381097732121600","type":"feed","url":"rsshub://mihoyo/bbs/user-post/76089447","title":"米游社 - 初代 的发帖","description":"米游社 - 初代 的发帖 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 绝区零 <Site url="zzz.mihoyo.com/news" size="sm" />

<Route namespace="mihoyo" :data='{"path":"/zzz/:location?/:category?","categories":["game"],"example":"/mihoyo/zzz","parameters":{"location":"区域，可选 `zh-cn`（国服，简中）或 `zh-tw`（国际服，繁中）","category":"分类，见下表，默认为最新"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["zzz.mihoyo.com/news"],"target":"/zzz"}],"name":"绝区零","maintainers":["Yeye-0426"],"url":"zzz.mihoyo.com/news","description":"#### 新闻 {#mi-ha-you-jue-qu-ling-xin-wen}\n\n| 最新     | 新闻 | 公告   | 活动     |\n| -------- | ---- | ------ | -------- |\n| news-all | news | notice | activity |","location":"zzz/news.ts","heat":4,"topFeeds":[{"id":"182164256051058688","type":"feed","url":"rsshub://mihoyo/zzz","title":"最新-绝区零","description":"最新-绝区零 - Powered by RSSHub","image":null},{"id":"205175880713752576","type":"feed","url":"rsshub://mihoyo/zzz/zh-cn","title":"最新-绝区零","description":"最新-绝区零 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

#### 新闻 {#mi-ha-you-jue-qu-ling-xin-wen}

| 最新     | 新闻 | 公告   | 活动     |
| -------- | ---- | ------ | -------- |
| news-all | news | notice | activity |

### 米游社 - 用户关注 <Site url="genshin.hoyoverse.com" size="sm" />

<Route namespace="mihoyo" :data='{"path":"/bbs/follow-list/:uid","categories":["game"],"example":"/mihoyo/bbs/follow-list/77005350","parameters":{"uid":"用户uid"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"米游社 - 用户关注","maintainers":["CaoMeiYouRen"],"location":"bbs/follow-list.ts","heat":2,"topFeeds":[{"id":"116772161376578560","type":"feed","url":"rsshub://mihoyo/bbs/follow-list/288909600","title":"米游社 - 崩坏星穹铁道 的关注","description":"米游社 - 崩坏星穹铁道 的关注 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 米游社 - 用户关注动态 <Site url="genshin.hoyoverse.com" size="sm" />

<Route namespace="mihoyo" :data='{"path":"/bbs/timeline","categories":["game"],"example":"/mihoyo/bbs/timeline","parameters":{},"features":{"requireConfig":[{"name":"MIHOYO_COOKIE","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["miyoushe.com/:game/timeline"]}],"name":"米游社 - 用户关注动态","maintainers":["CaoMeiYouRen"],"description":"::: warning\n  用户关注动态需要米游社登录后的 Cookie 值，所以只能自建，详情见部署页面的配置模块。\n:::","location":"bbs/timeline.ts","heat":0,"topFeeds":[]}' :test='undefined' />

::: warning
  用户关注动态需要米游社登录后的 Cookie 值，所以只能自建，详情见部署页面的配置模块。
:::

## A9VG 电玩部落 <Site url="a9vg.com"/>

### 新闻 <Site url="a9vg.com" size="sm" />

<Route namespace="a9vg" :data='{"path":"/:category{.+}?","name":"新闻","url":"a9vg.com","maintainers":["monnerHenster","nczitzk"],"example":"/a9vg/news","parameters":{"category":"分类，默认为 ，可在对应分类页 URL 中找到, Category, by default"},"description":"::: tip\n  若订阅 [PS4](http://www.a9vg.com/list/news/PS4)，网址为 `http://www.a9vg.com/list/news/PS4`。截取 `http://www.a9vg.com/list` 到末尾的部分 `news/PS4` 作为参数填入，此时路由为 [`/a9vg/news/PS4`](https://rsshub.app/a9vg/news/PS4)。\n:::\n\n| 分类                                               | ID                                                     |\n| -------------------------------------------------- | ------------------------------------------------------ |\n| [All](https://www.a9vg.com/list/news/All)          | [news/All](https://rsshub.app/a9vg/news/All)           |\n| [PS4](https://www.a9vg.com/list/news/PS4)          | [news/PS4](https://rsshub.app/a9vg/news/PS4)           |\n| [PS5](https://www.a9vg.com/list/news/PS5)          | [news/PS5](https://rsshub.app/a9vg/news/PS5)           |\n| [Switch](https://www.a9vg.com/list/news/Switch)    | [news/Switch](https://rsshub.app/a9vg/news/Switch)     |\n| [Xbox One](https://www.a9vg.com/list/news/XboxOne) | [news/XboxOne](https://rsshub.app/a9vg/news/XboxOne)   |\n| [XSX](https://www.a9vg.com/list/news/XSX)          | [news/XSX](https://rsshub.app/a9vg/news/XSX)           |\n| [PC](https://www.a9vg.com/list/news/PC)            | [news/PC](https://rsshub.app/a9vg/news/PC)             |\n| [业界](https://www.a9vg.com/list/news/Industry)    | [news/Industry](https://rsshub.app/a9vg/news/Industry) |\n| [厂商](https://www.a9vg.com/list/news/Factory)     | [news/Factory](https://rsshub.app/a9vg/news/Factory)   |\n  ","categories":["game"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.a9vg.com/list/:category"]},{"title":"All","source":["www.a9vg.com/list/news/All"],"target":"/news/All"},{"title":"PS4","source":["www.a9vg.com/list/news/PS4"],"target":"/news/PS4"},{"title":"PS5","source":["www.a9vg.com/list/news/PS5"],"target":"/news/PS5"},{"title":"Switch","source":["www.a9vg.com/list/news/Switch"],"target":"/news/Switch"},{"title":"Xbox One","source":["www.a9vg.com/list/news/XboxOne"],"target":"/news/XboxOne"},{"title":"XSX","source":["www.a9vg.com/list/news/XSX"],"target":"/news/XSX"},{"title":"PC","source":["www.a9vg.com/list/news/PC"],"target":"/news/PC"},{"title":"业界","source":["www.a9vg.com/list/news/Industry"],"target":"/news/Industry"},{"title":"厂商","source":["www.a9vg.com/list/news/Factory"],"target":"/news/Factory"}],"location":"index.ts","heat":294,"topFeeds":[{"id":"55616188093136896","type":"feed","url":"rsshub://a9vg","title":"资讯 - A9VG电玩部落","description":"A9VG电玩部落,中国电玩及主机游戏行业的领先平台,致力于为玩家报道最新主机游戏独家资讯，PS4和Xbox One等主机电视游戏攻略,更有A9VG论坛为电玩主机游戏爱好者提供交流平台。 - Powered by RSSHub","image":"http://www.a9vg.com/images/logo.1cee7c0f.svg"},{"id":"64851740811278336","type":"feed","url":"rsshub://a9vg/news","title":"资讯 - A9VG电玩部落","description":"A9VG电玩部落,中国电玩及主机游戏行业的领先平台,致力于为玩家报道最新主机游戏独家资讯，PS4和Xbox One等主机电视游戏攻略,更有A9VG论坛为电玩主机游戏爱好者提供交流平台。 - Powered by RSSHub","image":"http://www.a9vg.com/images/logo.1cee7c0f.svg"}]}' :test='{"code":0}' />

::: tip
  若订阅 [PS4](http://www.a9vg.com/list/news/PS4)，网址为 `http://www.a9vg.com/list/news/PS4`。截取 `http://www.a9vg.com/list` 到末尾的部分 `news/PS4` 作为参数填入，此时路由为 [`/a9vg/news/PS4`](https://rsshub.app/a9vg/news/PS4)。
:::

| 分类                                               | ID                                                     |
| -------------------------------------------------- | ------------------------------------------------------ |
| [All](https://www.a9vg.com/list/news/All)          | [news/All](https://rsshub.app/a9vg/news/All)           |
| [PS4](https://www.a9vg.com/list/news/PS4)          | [news/PS4](https://rsshub.app/a9vg/news/PS4)           |
| [PS5](https://www.a9vg.com/list/news/PS5)          | [news/PS5](https://rsshub.app/a9vg/news/PS5)           |
| [Switch](https://www.a9vg.com/list/news/Switch)    | [news/Switch](https://rsshub.app/a9vg/news/Switch)     |
| [Xbox One](https://www.a9vg.com/list/news/XboxOne) | [news/XboxOne](https://rsshub.app/a9vg/news/XboxOne)   |
| [XSX](https://www.a9vg.com/list/news/XSX)          | [news/XSX](https://rsshub.app/a9vg/news/XSX)           |
| [PC](https://www.a9vg.com/list/news/PC)            | [news/PC](https://rsshub.app/a9vg/news/PC)             |
| [业界](https://www.a9vg.com/list/news/Industry)    | [news/Industry](https://rsshub.app/a9vg/news/Industry) |
| [厂商](https://www.a9vg.com/list/news/Factory)     | [news/Factory](https://rsshub.app/a9vg/news/Factory)   |
  

## 4Gamers <Site url="www.4gamers.com.tw"/>

### Unknown <Site url="www.4gamers.com.tw/news" size="sm" />

<Route namespace="4gamers" :data='{"path":["/","/category/:category"],"radar":[{"source":["www.4gamers.com.tw/news","www.4gamers.com.tw/"],"target":""}],"name":"Unknown","maintainers":["TonyRL"],"url":"www.4gamers.com.tw/news","location":"category.ts","heat":190,"topFeeds":[{"id":"72578894783772672","type":"feed","url":"rsshub://4gamers/category/1119","title":"4Gamers - 成人限定🔞","description":"4Gamers - 成人限定🔞 - Powered by RSSHub","image":null},{"id":"66771599303537672","type":"feed","url":"rsshub://4gamers/category/359","title":"4Gamers - 深度專題","description":"4Gamers - 深度專題 - Powered by RSSHub","image":null}]}' :test='undefined' />

### 标签 <Site url="www.4gamers.com.tw/news" size="sm" />

<Route namespace="4gamers" :data='{"path":"/tag/:tag","categories":["game"],"example":"/4gamers/tag/限時免費","parameters":{"tag":"标签名，可在标签 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.4gamers.com.tw/news/tag/:tag"]}],"name":"标签","maintainers":["hoilc"],"url":"www.4gamers.com.tw/news","location":"tag.ts","heat":38,"topFeeds":[{"id":"66771599303537674","type":"feed","url":"rsshub://4gamers/tag/%E9%99%90%E6%99%82%E5%85%8D%E8%B2%BB","title":"4Gamers - #限時免費","description":"4Gamers - #限時免費 - Powered by RSSHub","image":null},{"id":"168549471693848576","type":"feed","url":"rsshub://4gamers/tag/Steam","title":"4Gamers - #Steam","description":"4Gamers - #Steam - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 主題 <Site url="www.4gamers.com.tw/news" size="sm" />

<Route namespace="4gamers" :data='{"path":"/topic/:topic","categories":["game"],"example":"/4gamers/topic/gentlemen-topic","parameters":{"topic":"主题，可在首页上方页面内找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.4gamers.com.tw/news/option-cfg/:topic"]}],"name":"主題","maintainers":["bestpika"],"url":"www.4gamers.com.tw/news","location":"topic.ts","heat":3,"topFeeds":[{"id":"83442528914522112","type":"feed","url":"rsshub://4gamers/topic/gentlemen-topic","title":"4Gamers - gentlemen-topic","description":"4Gamers - gentlemen-topic - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 二柄 APP <Site url="diershoubing.com"/>

### 新闻 <Site url="diershoubing.com/" size="sm" />

<Route namespace="diershoubing" :data='{"path":"/news","categories":["game"],"example":"/diershoubing/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["diershoubing.com/"]}],"name":"新闻","maintainers":["wushijishan"],"url":"diershoubing.com/","location":"news.ts","heat":199,"topFeeds":[{"id":"41374548438048768","type":"feed","url":"rsshub://diershoubing/news","title":"二柄APP","description":"二柄APP新闻 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 游研社 <Site url="yystv.cn"/>

### 游研社 - 全部文章 <Site url="yystv.cn/docs" size="sm" />

<Route namespace="yystv" :data='{"path":"/docs","categories":["game"],"example":"/yystv/docs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yystv.cn/docs"]}],"name":"游研社 - 全部文章","maintainers":["HaitianLiu","yy4382"],"url":"yystv.cn/docs","location":"docs.ts","heat":122,"topFeeds":[{"id":"41841081038965760","type":"feed","url":"rsshub://yystv/docs","title":"游研社-全部文章","description":"游研社-全部文章 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 游研社 - 分类文章 <Site url="yystv.cn" size="sm" />

<Route namespace="yystv" :data='{"path":"/category/:category","categories":["game"],"example":"/yystv/category/recommend","parameters":{"category":"专栏类型"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"游研社 - 分类文章","maintainers":["betta-cyber","dousha"],"description":"| 推游      | 游戏史  | 大事件 | 文化    | 趣闻 | 经典回顾 | 业界     |\n| --------- | ------- | ------ | ------- | ---- | -------- | -------- |\n| recommend | history | big    | culture | news | retro    | industry |","location":"category.ts","heat":34,"topFeeds":[{"id":"52353637010143243","type":"feed","url":"rsshub://yystv/category/recommend","title":"游研社-推游","description":"游研社-推游 - Powered by RSSHub","image":null},{"id":"60263446472040463","type":"feed","url":"rsshub://yystv/category/news","title":"游研社-趣闻","description":"游研社-趣闻 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 推游      | 游戏史  | 大事件 | 文化    | 趣闻 | 经典回顾 | 业界     |
| --------- | ------- | ------ | ------- | ---- | -------- | -------- |
| recommend | history | big    | culture | news | retro    | industry |

## Steam <Site url="store.steampowered.com"/>

### News <Site url="steamcommunity.com" size="sm" />

<Route namespace="steam" :data='{"path":"/news/:appid/:language?","name":"News","url":"steamcommunity.com","maintainers":["keocheung"],"example":"/news/958260/english","parameters":{"appid":"Game App ID, all digits, can be found in the URL","language":"Language, english by default, see below for more languages"},"description":"\n<details>\n<summary>More languages</summary>\n\n| 语言代码                                          | 语言名称   |\n| ------------------------------------------------- | ---------- |\n| English                                           | english    |\n| Español - España (Spanish - Spain)                | spanish    |\n| Français (French)                                 | french     |\n| Italiano (Italian)                                | italian    |\n| Deutsch (German)                                  | german     |\n| Ελληνικά (Greek)                                  | greek      |\n| 한국어 (Korean)                                   | koreana    |\n| 简体中文 (Simplified Chinese)                     | schinese   |\n| 繁體中文 (Traditional Chinese)                    | tchinese   |\n| Русский (Russian)                                 | russian    |\n| ไทย (Thai)                                        | thai       |\n| 日本語 (Japanese)                                 | japanese   |\n| Português (Portuguese)                            | portuguese |\n| Português - Brasil (Portuguese - Brazil)          | brazilian  |\n| Polski (Polish)                                   | polish     |\n| Dansk (Danish)                                    | danish     |\n| Nederlands (Dutch)                                | dutch      |\n| Suomi (Finnish)                                   | finnish    |\n| Norsk (Norwegian)                                 | norwegian  |\n| Svenska (Swedish)                                 | swedish    |\n| Čeština (Czech)                                   | czech      |\n| Magyar (Hungarian)                                | hungarian  |\n| Română (Romanian)                                 | romanian   |\n| Български (Bulgarian)                             | bulgarian  |\n| Türkçe (Turkish)                                  | turkish    |\n| Українська (Ukrainian)                            | ukrainian  |\n| Tiếng Việt (Vietnamese)                           | vietnamese |\n| Español - Latinoamérica (Spanish - Latin America) | latam      |\n\n</details>\n    ","categories":["game"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"title":"News","source":["steamcommunity.com/app/:appid","steamcommunity.com/app/:appid/allnews","steamcommunity.com/app/:appid/announcements","steamcommunity.com/app/:appid/news"],"target":"/news/:appid"}],"location":"news.ts","heat":113,"topFeeds":[{"id":"149547667423973376","type":"feed","url":"rsshub://steam/news/960170/schinese","title":"App 960170 News","description":"App 960170 News - Powered by RSSHub","image":"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/960170/hero_capsule.jpg"},{"id":"149545975496265728","type":"feed","url":"rsshub://steam/news/774171/schinese","title":"App 774171 News","description":"App 774171 News - Powered by RSSHub","image":"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/774171/hero_capsule.jpg"}]}' :test='{"code":1,"message":"AssertionError: expected 404 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />


<details>
<summary>More languages</summary>

| 语言代码                                          | 语言名称   |
| ------------------------------------------------- | ---------- |
| English                                           | english    |
| Español - España (Spanish - Spain)                | spanish    |
| Français (French)                                 | french     |
| Italiano (Italian)                                | italian    |
| Deutsch (German)                                  | german     |
| Ελληνικά (Greek)                                  | greek      |
| 한국어 (Korean)                                   | koreana    |
| 简体中文 (Simplified Chinese)                     | schinese   |
| 繁體中文 (Traditional Chinese)                    | tchinese   |
| Русский (Russian)                                 | russian    |
| ไทย (Thai)                                        | thai       |
| 日本語 (Japanese)                                 | japanese   |
| Português (Portuguese)                            | portuguese |
| Português - Brasil (Portuguese - Brazil)          | brazilian  |
| Polski (Polish)                                   | polish     |
| Dansk (Danish)                                    | danish     |
| Nederlands (Dutch)                                | dutch      |
| Suomi (Finnish)                                   | finnish    |
| Norsk (Norwegian)                                 | norwegian  |
| Svenska (Swedish)                                 | swedish    |
| Čeština (Czech)                                   | czech      |
| Magyar (Hungarian)                                | hungarian  |
| Română (Romanian)                                 | romanian   |
| Български (Bulgarian)                             | bulgarian  |
| Türkçe (Turkish)                                  | turkish    |
| Українська (Ukrainian)                            | ukrainian  |
| Tiếng Việt (Vietnamese)                           | vietnamese |
| Español - Latinoamérica (Spanish - Latin America) | latam      |

</details>
    

### Latest Curator Reviews <Site url="store.steampowered.com" size="sm" />

<Route namespace="steam" :data='{"path":"/curator/:id/:routeParams?","categories":["game"],"example":"/steam/curator/34646096-80-Days","parameters":{"id":"Steam curator id. It usually consists of a series of numbers and the curator&#39;s name.","routeParams":{"description":"Extra parameters to filter the reviews. The following parameters are supported:\n| Key             | Description                                                                                   | Accepts                                    | Defaults to |\n| --------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------ | ----------- |\n| `curations`   | Review type to filter by. `0`: Recommended, `1`: Not Recommended, `2`: Informational    | `0`/`1`/`2`/`0,1`/`0,2`/`1,2`  |             |\n| `tagids`      | Tag to filter by. Details are provided below.                                                 | use comma to separate multiple tagid       |             |\n\nNote: There is a [‘Popular Tags’](https://store.steampowered.com/tag/browse) page where you can find many but not all of the tags. The tag’s ID is in the `data-tagid` attribute of the element.Steam does not currently provide a page that comprehensively lists all tags, and you may need to explore alternative ways to find them.\n\nExamples:\n* `/steam/curator/34646096-80-Days/curations=&tagids=`\n* `/steam/curator/34646096-80-Days/curations=0&tagids=19`\n* `/steam/curator/34646096-80-Days/curations=0,2&tagids=19,21`\n"}},"radar":[{"title":"Latest Curator Reviews","source":["store.steampowered.com/curator/:id"],"target":"/curator/:id"}],"description":"The Latest reviews from a Steam Curator.","name":"Latest Curator Reviews","maintainers":["naremloa","fenxer"],"location":"curator.ts","heat":16,"topFeeds":[{"id":"99268471009976320","type":"feed","url":"rsshub://steam/curator/34646096-80-Days","title":"Steam Curator 34646096-80-Days Reviews","description":"Steam Curator 34646096-80-Days Reviews - Powered by RSSHub","image":null},{"id":"99407355545093120","type":"feed","url":"rsshub://steam/curator/32686107-%D0%85t%D0%B5%D0%B0%D0%BC-250","title":"Steam Curator 32686107-Ѕtеам-250 Reviews","description":"Steam Curator 32686107-Ѕtеам-250 Reviews - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

The Latest reviews from a Steam Curator.

### Steam Community Hub Feeds <Site url="store.steampowered.com" size="sm" />

<Route namespace="steam" :data='{"path":"/appcommunityfeed/:appid/:routeParams?","categories":["game"],"example":"/steam/appcommunityfeed/730","parameters":{"appid":"Steam appid, can be found on the community hub page or store page URL.","routeParams":"Query parameters."},"radar":[{"title":"Community Hub","source":["steamcommunity.com/app/:appid"],"target":"/appcommunityfeed/:appid"},{"title":"Community Hub","source":["store.steampowered.com/app/:appid/*/"],"target":"/appcommunityfeed/:appid"}],"description":"Query Parameters:\n\n| Name                   | Type   | Description             |\n| ---------------------- | ------ | ----------------------- |\n| p                      | string | p                       |\n| rgSections[]           | string | rgSections              |\n| filterLanguage         | string | Filter Language         |\n| languageTag            | string | Language Tag            |\n| nMaxInappropriateScore | string | Max Inappropriate Score |\n\nExample:\n- `/appcommunityfeed/730/p=1&rgSections[]=2&rgSections[]=4&filterLanguage=english&languageTag=english&nMaxInappropriateScore=1` for CS2 Screenshot and Artwork contents.\n- `/appcommunityfeed/730/rgSections[]=6` for CS2 Workshop contents only.\n- `/appcommunityfeed/570/rgSections[]=3&rgSections[]=9` for Dota2 Video and Guides contents.\n\n::: tip\nIt can also access community hub contents that require a logged-in account.\n:::\n","name":"Steam Community Hub Feeds","maintainers":["NyaaaDoge"],"location":"appcommunityfeed.ts","heat":8,"topFeeds":[{"id":"58956346985948160","type":"feed","url":"rsshub://steam/appcommunityfeed/2358720","title":"2358720 Steam Community Hub","description":"2358720 Steam Community Hub - Powered by RSSHub","image":null},{"id":"58748050964336640","type":"feed","url":"rsshub://steam/appcommunityfeed/730","title":"730 Steam Community Hub","description":"730 Steam Community Hub - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

Query Parameters:

| Name                   | Type   | Description             |
| ---------------------- | ------ | ----------------------- |
| p                      | string | p                       |
| rgSections[]           | string | rgSections              |
| filterLanguage         | string | Filter Language         |
| languageTag            | string | Language Tag            |
| nMaxInappropriateScore | string | Max Inappropriate Score |

Example:
- `/appcommunityfeed/730/p=1&rgSections[]=2&rgSections[]=4&filterLanguage=english&languageTag=english&nMaxInappropriateScore=1` for CS2 Screenshot and Artwork contents.
- `/appcommunityfeed/730/rgSections[]=6` for CS2 Workshop contents only.
- `/appcommunityfeed/570/rgSections[]=3&rgSections[]=9` for Dota2 Video and Guides contents.

::: tip
It can also access community hub contents that require a logged-in account.
:::


### Community Workshop Search <Site url="store.steampowered.com" size="sm" />

<Route namespace="steam" :data='{"path":"/workshopsearch/:appid?/:routeParams?","categories":["game"],"example":"/steam/workshopsearch/730","parameters":{"appid":"Steam appid, can be found on the community hub page or store page URL, 730 by default.","routeParams":"Route parameters, can be found on the search result page URL. Route parameters located after the appid."},"radar":[{"title":"Workshop Search Results","source":["steamcommunity.com/app/:appid/workshop/"],"target":"/workshopsearch/:appid"}],"description":"Steam Community Workshop Search Results.\nThe parameter &#39;l=language&#39; changes the language of search results(if possible).\nFor example, route `/workshopsearch/730/l=schinese` will display the simplified Chinese descriptions of the entry.\n\nLanguage Parameter:\n\n| English | 简体中文 | 繁體中文 | 日本語   | 한국어  | ภาษาไทย | български | čeština | dansk  | Deutsch | español | latam | ελληνικά | français | italiano | Bahasa Indonesia | magyar    | Nederlands | norsk     | polski | português  | brasileiro | română   | русский | suomi   | svenska | Türkçe  | Tiếng Việt | українська |\n| ------- | -------- | -------- | -------- | ------- | ------- | --------- | ------- | ------ | ------- | ------- | ----- | -------- | -------- | -------- | ---------------- | --------- | ---------- | --------- | ------ | ---------- | ---------- | -------- | ------- | ------- | ------- | ------- | ---------- | ---------- |\n| english | schinese | tchinese | japanese | koreana | thai    | bulgarian | czech   | danish | german  | spanish | latam | greek    | french   | italian  | indonesian       | hungarian | dutch      | norwegian | polish | portuguese | brazilian  | romanian | russian | finnish | swedish | turkish | vietnamese | ukrainian  |\n\n","name":"Community Workshop Search","maintainers":["NyaaaDoge"],"location":"workshop-search.ts","heat":6,"topFeeds":[{"id":"58572516674359296","type":"feed","url":"rsshub://steam/workshopsearch/730/searchtext=ze&browsesort=mostrecent&section=&actualsort=mostrecent&l=schinese","title":"Counter-Strike 2 Steam Workshop Content","description":"有兴趣为《反恐精英》创作内容吗？ 那就来展示一下您的能耐吧。 探索我们的武器、印花、地图制作指南，并开始提交作品吧。 了解更多 - Powered by RSSHub","image":null},{"id":"74436132671651840","type":"feed","url":"rsshub://steam/workshopsearch/616720/l=schinese","title":"Live2DViewerEX Steam Workshop Content","description":"属于全平台的创意工坊 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

Steam Community Workshop Search Results.
The parameter 'l=language' changes the language of search results(if possible).
For example, route `/workshopsearch/730/l=schinese` will display the simplified Chinese descriptions of the entry.

Language Parameter:

| English | 简体中文 | 繁體中文 | 日本語   | 한국어  | ภาษาไทย | български | čeština | dansk  | Deutsch | español | latam | ελληνικά | français | italiano | Bahasa Indonesia | magyar    | Nederlands | norsk     | polski | português  | brasileiro | română   | русский | suomi   | svenska | Türkçe  | Tiếng Việt | українська |
| ------- | -------- | -------- | -------- | ------- | ------- | --------- | ------- | ------ | ------- | ------- | ----- | -------- | -------- | -------- | ---------------- | --------- | ---------- | --------- | ------ | ---------- | ---------- | -------- | ------- | ------- | ------- | ------- | ---------- | ---------- |
| english | schinese | tchinese | japanese | koreana | thai    | bulgarian | czech   | danish | german  | spanish | latam | greek    | french   | italian  | indonesian       | hungarian | dutch      | norwegian | polish | portuguese | brazilian  | romanian | russian | finnish | swedish | turkish | vietnamese | ukrainian  |



### Store Search <Site url="store.steampowered.com" size="sm" />

<Route namespace="steam" :data='{"path":"/search/:params","categories":["game"],"example":"/steam/search/sort_by=Released_DESC&tags=492&category1=10&os=linux","parameters":{"params":"Query parameters for a Steam Store search."},"radar":[{"source":["store.steampowered.com","store.steampowered.com/search/:params"]}],"name":"Store Search","maintainers":["moppman"],"location":"search.ts","heat":3,"topFeeds":[{"id":"156158747312015360","type":"feed","url":"rsshub://steam/search/sort_by%3DReleased_DESC%26tags%3D1716%26category1%3D998%26category3%3D9%26supportedlang%3Denglish%26ndl%3D1","title":"Steam search result","description":"Query: sort_by=Released_DESC&tags=1716&category1=998&category3=9&supportedlang=english&ndl=1 - Powered by RSSHub","image":null},{"id":"58377300258747392","type":"feed","url":"rsshub://steam/search/sort_by=Released_DESC&tags=492&category1=10&os=linux","title":"Steam search result","description":"Query: sort_by=Released_DESC&tags=492&category1=10&os=linux - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### Sharefile Changelog <Site url="store.steampowered.com" size="sm" />

<Route namespace="steam" :data='{"path":"/sharefile-changelog/:sharefileID/:routeParams?","categories":["game"],"example":"/steam/sharefile-changelog/2851063440/l=schinese","parameters":{"sharefileID":"Steam community sharefile id. Usually refers to a workshop item.","routeParams":"Route parameters."},"radar":[{"title":"Sharefile Changelog","source":["steamcommunity.com/sharedfiles/filedetails/changelog/:sharefileID"],"target":"/sharefile-changelog/:sharefileID"}],"description":"Steam Community Sharefile&#39;s Changelog. Primary used for a workshop item.\nHelpful route parameters:\n- `l=` language parameter, change the language of description.\n- `p=` page parameter, change the results page. p=1 by default.\n","name":"Sharefile Changelog","maintainers":["NyaaaDoge"],"location":"sharefile-changelog.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected [ Array(1) ] to not include &#39;https://steamcommunity.com/sharedfile…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1252:15)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1090:14)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@6.2.1/node_modules/chai/index.js:1700:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

Steam Community Sharefile's Changelog. Primary used for a workshop item.
Helpful route parameters:
- `l=` language parameter, change the language of description.
- `p=` page parameter, change the results page. p=1 by default.


## Nintendo <Site url="nintendo.com"/>

### Nintendo Direct <Site url="nintendo.com/nintendo-direct/archive" size="sm" />

<Route namespace="nintendo" :data='{"path":"/direct","categories":["game"],"example":"/nintendo/direct","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nintendo.com/nintendo-direct/archive","nintendo.com/"]}],"name":"Nintendo Direct","maintainers":["HFO4"],"url":"nintendo.com/nintendo-direct/archive","location":"direct.ts","heat":76,"topFeeds":[{"id":"60263446472040454","type":"feed","url":"rsshub://nintendo/direct","title":"Nintendo Direct（任天堂直面会）","description":"最新的任天堂直面会日程信息 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 首页资讯（中国） <Site url="nintendoswitch.com.cn/" size="sm" />

<Route namespace="nintendo" :data='{"path":"/news/china","categories":["game"],"example":"/nintendo/news/china","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nintendoswitch.com.cn/"]}],"name":"首页资讯（中国）","maintainers":["NeverBehave"],"url":"nintendoswitch.com.cn/","location":"news-china.ts","heat":28,"topFeeds":[{"id":"60263446472040456","type":"feed","url":"rsshub://nintendo/news/china","title":"Nintendo（中国大陆）主页资讯","description":"Nintendo 中国大陆官网刊登的资讯 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"Error: STACK_TRACE_ERROR\n    at task (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:633:27)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:660:16)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:457:28)\n    at chain (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/chunk-tasks.js:9:14)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:72:12\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:40\n    at runWithSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1588:8)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:10)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:739:54)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at collectTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1048:25)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1556:17)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:85:25)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:153:2)\n    at executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/init-forks.aqTzCSR2.js:29:4)"}' />

### Switch System Update（Japan） <Site url="nintendo.co.jp/support/switch/system_update/index.html" size="sm" />

<Route namespace="nintendo" :data='{"path":"/system-update","categories":["game"],"example":"/nintendo/system-update","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nintendo.co.jp/support/switch/system_update/index.html","nintendo.co.jp/"]}],"name":"Switch System Update（Japan）","maintainers":["hoilc"],"url":"nintendo.co.jp/support/switch/system_update/index.html","location":"system-update.ts","heat":13,"topFeeds":[{"id":"60263446472040455","type":"feed","url":"rsshub://nintendo/system-update","title":"Nintendo Switch 本体更新情報","description":"Nintendo Switch 本体更新情報 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected [ …(38) ] to not include &#39;https://www.nintendo.co.jp/support/sw…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1252:15)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1090:14)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@6.2.1/node_modules/chai/index.js:1700:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Unknown <Site url="nintendo.co.jp/software/switch/index.html" size="sm" />

<Route namespace="nintendo" :data='{"path":"/eshop/jp","radar":[{"source":["nintendo.co.jp/software/switch/index.html","nintendo.co.jp/"]}],"name":"Unknown","maintainers":[],"url":"nintendo.co.jp/software/switch/index.html","location":"eshop-jp.ts","heat":5,"topFeeds":[{"id":"70170230128689156","type":"feed","url":"rsshub://nintendo/eshop/jp","title":"Nintendo eShop（日服）新游戏","description":"Nintendo eShop（日服）新上架的游戏 - Powered by RSSHub","image":null}]}' :test='undefined' />

### News（Hong Kong only） <Site url="nintendo.com.hk/topics" size="sm" />

<Route namespace="nintendo" :data='{"path":"/news","categories":["game"],"example":"/nintendo/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nintendo.com.hk/topics","nintendo.com.hk/"]}],"name":"News（Hong Kong only）","maintainers":["HFO4"],"url":"nintendo.com.hk/topics","location":"news.ts","heat":5,"topFeeds":[{"id":"161614209329340417","type":"feed","url":"rsshub://nintendo/news","title":"Importing","description":null,"image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Unknown <Site url="nintendo.com/store/games" size="sm" />

<Route namespace="nintendo" :data='{"path":"/eshop/us","radar":[{"source":["nintendo.com/store/games","nintendo.com/"]}],"name":"Unknown","maintainers":[],"url":"nintendo.com/store/games","location":"eshop-us.ts","heat":1,"topFeeds":[{"id":"126468536462736399","type":"feed","url":"rsshub://nintendo/eshop/us","title":"Nintendo eShop（美服）新游戏","description":"Nintendo eShop（美服）新上架的游戏 - Powered by RSSHub","image":null}]}' :test='undefined' />

### Unknown <Site url="nintendoswitch.com.cn/software" size="sm" />

<Route namespace="nintendo" :data='{"path":"/eshop/cn","radar":[{"source":["nintendoswitch.com.cn/software","nintendoswitch.com.cn/"]}],"name":"Unknown","maintainers":[],"url":"nintendoswitch.com.cn/software","location":"eshop-cn.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="nintendo.com.hk/software/switch" size="sm" />

<Route namespace="nintendo" :data='{"path":"/eshop/hk","radar":[{"source":["nintendo.com.hk/software/switch","nintendo.com.hk/"]}],"name":"Unknown","maintainers":[],"url":"nintendo.com.hk/software/switch","location":"eshop-hk.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 游戏日报 <Site url="news.yxrb.net"/>

### 分类 <Site url="news.yxrb.net" size="sm" />

<Route namespace="yxrb" :data='{"path":"/:category?","categories":["game"],"example":"/yxrb/info","parameters":{"category":"分类，见下表，预设为 `info`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["news.yxrb.net/:category","news.yxrb.net/"],"target":"/:category"}],"name":"分类","maintainers":["TonyRL"],"description":"| 资讯 | 访谈    | 服务    | 游理游据 |\n| ---- | ------- | ------- | -------- |\n| info | talking | service | comments |","location":"home.ts","heat":122,"topFeeds":[{"id":"56176972513891328","type":"feed","url":"rsshub://yxrb/info","title":"资讯 - 游戏日报","description":"游戏资讯, 游戏日报提供最具价值行业信息。 - Powered by RSSHub","image":"http://news.yxrb.net/uploadfile/2022/1008/8daa67f624b4928.png"},{"id":"93963104693017600","type":"feed","url":"rsshub://yxrb","title":"资讯 - 游戏日报","description":"游戏资讯, 游戏日报提供最具价值行业信息。 - Powered by RSSHub","image":"http://news.yxrb.net/uploadfile/2022/1008/8daa67f624b4928.png"}]}' :test='{"code":0}' />

| 资讯 | 访谈    | 服务    | 游理游据 |
| ---- | ------- | ------- | -------- |
| info | talking | service | comments |

## 全球游戏交流中心 <Site url="www.gamer520.com"/>

### 文章 <Site url="www.gamer520.com/" size="sm" />

<Route namespace="gamer520" :data='{"path":"/:category?/:order?","categories":["game"],"example":"/gamer520/switchyouxi","parameters":{"category":"分类，见下表","order":"排序，发布日期: date; 修改日期: modified"},"features":{"antiCrawler":true},"name":"文章","maintainers":["xzzpig"],"url":"www.gamer520.com/","description":"分类\n\n| 所有 | Switch 游戏下载 | 金手指     | 3A 巨作 | switch 主题 | PC 游戏 |\n| ---- | --------------- | ---------- | ------- | ----------- | ------- |\n| all  | switchyouxi     | jinshouzhi | 3ajuzuo | zhuti       | pcgame  |","location":"index.ts","heat":108,"topFeeds":[{"id":"78689933854680064","type":"feed","url":"rsshub://gamer520/all","title":"全球游戏交流中心-所有","description":"全球游戏交流中心-所有 - Powered by RSSHub","image":null},{"id":"153752488543499264","type":"feed","url":"rsshub://gamer520","title":"全球游戏交流中心-所有","description":"全球游戏交流中心-所有 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

分类

| 所有 | Switch 游戏下载 | 金手指     | 3A 巨作 | switch 主题 | PC 游戏 |
| ---- | --------------- | ---------- | ------- | ----------- | ------- |
| all  | switchyouxi     | jinshouzhi | 3ajuzuo | zhuti       | pcgame  |

## 旅法师营地 <Site url="www.iyingdi.com"/>

### Unknown <Site url="www.iyingdi.com" size="sm" />

<Route namespace="lfsyd" :data='{"path":"/tag/:tagId?","radar":[{"source":["mob.iyingdi.com/fine/:tagId"],"target":"/tag/:tagId"}],"name":"Unknown","maintainers":["auto-bot-ty"],"location":"tag.ts","heat":90,"topFeeds":[{"id":"56204588915011588","type":"feed","url":"rsshub://lfsyd/tag/17","title":"炉石传说 - 旅法师营地","description":"炉石传说 - 旅法师营地 - Powered by RSSHub","image":null},{"id":"75101365651632128","type":"feed","url":"rsshub://lfsyd/tag/18","title":"万智牌 - 旅法师营地","description":"万智牌 - 旅法师营地 - Powered by RSSHub","image":null}]}' :test='undefined' />

### 首页 <Site url="www.iyingdi.com/" size="sm" />

<Route namespace="lfsyd" :data='{"path":"/home","categories":["game"],"example":"/lfsyd/home","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.iyingdi.com/"]}],"name":"首页","maintainers":["auto-bot-ty"],"url":"www.iyingdi.com/","location":"home.ts","heat":8,"topFeeds":[{"id":"41840367096067072","type":"feed","url":"rsshub://lfsyd/home","title":"首页 - 旅法师营地","description":"首页 - 旅法师营地 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 首页（旧版） <Site url="www.iyingdi.com/" size="sm" />

<Route namespace="lfsyd" :data='{"path":"/old_home","categories":["game"],"example":"/lfsyd/old_home","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.iyingdi.com/"]}],"name":"首页（旧版）","maintainers":["auto-bot-ty"],"url":"www.iyingdi.com/","location":"old-home.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Unknown <Site url="www.iyingdi.com" size="sm" />

<Route namespace="lfsyd" :data='{"path":"/user/:id?","radar":[{"source":["www.iyingdi.com/tz/people/:id","www.iyingdi.com/tz/people/:id/*"],"target":"/user/:id"}],"name":"Unknown","maintainers":["auto-bot-ty"],"location":"user.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 其乐 <Site url="keylol.com"/>

### 论坛 <Site url="keylol.com" size="sm" />

<Route namespace="keylol" :data='{"path":"/:path","name":"论坛","parameters":{"path":"路径，默认为热点聚焦"},"categories":["game"],"example":"/keylol/f161-1","features":{"requireConfig":[{"name":"KEYLOL_COOKIE","optional":true,"description":"配置后可抓取具有阅读权限的帖子內容"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["keylol.com/:path"]}],"maintainers":["nczitzk","kennyfong19931"],"description":"::: tip\n  若订阅 [热点聚焦](https://keylol.com/f161-1)，网址为 `https://keylol.com/f161-1`。截取 `https://keylol.com/` 到末尾的部分 `f161-1` 作为参数，此时路由为 [`/keylol/f161-1`](https://rsshub.app/keylol/f161-1)。\n  若订阅子分类 [试玩免费 - 热点聚焦](https://keylol.com/forum.php?mod=forumdisplay&fid=161&filter=typeid&typeid=459)，网址为 `https://keylol.com/forum.php?mod=forumdisplay&fid=161&filter=typeid&typeid=459`。提取`fid`及`typeid` 作为参数，此时路由为 [`/keylol/fid=161&typeid=459`](https://rsshub.app/keylol/fid=161&typeid=459)。注意不要包括`filter`，会调用[全局的内容过滤](https://docs.rsshub.app/guide/parameters#filtering)。\n:::","location":"index.ts","heat":91,"topFeeds":[{"id":"58758095877738496","type":"feed","url":"rsshub://keylol/f161-1","title":"热点聚焦 - 其乐 Keylol","description":"热点聚焦 ,其乐 Keylol - Powered by RSSHub","image":null},{"id":"77664835339807744","type":"feed","url":"rsshub://keylol/fid=234&typeid=786","title":"临时工 - 购物心得 - 其乐 Keylol","description":"购物心得 ,其乐 Keylol - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

::: tip
  若订阅 [热点聚焦](https://keylol.com/f161-1)，网址为 `https://keylol.com/f161-1`。截取 `https://keylol.com/` 到末尾的部分 `f161-1` 作为参数，此时路由为 [`/keylol/f161-1`](https://rsshub.app/keylol/f161-1)。
  若订阅子分类 [试玩免费 - 热点聚焦](https://keylol.com/forum.php?mod=forumdisplay&fid=161&filter=typeid&typeid=459)，网址为 `https://keylol.com/forum.php?mod=forumdisplay&fid=161&filter=typeid&typeid=459`。提取`fid`及`typeid` 作为参数，此时路由为 [`/keylol/fid=161&typeid=459`](https://rsshub.app/keylol/fid=161&typeid=459)。注意不要包括`filter`，会调用[全局的内容过滤](https://docs.rsshub.app/guide/parameters#filtering)。
:::

## JUMP <Site url="switch.jumpvg.com"/>

### 游戏折扣 <Site url="switch.jumpvg.com" size="sm" />

<Route namespace="jump" :data='{"path":"/discount/:platform/:filter?/:countries?","categories":["game"],"example":"/jump/discount/ps5/all","parameters":{"platform":"平台:switch,ps4,ps5,xbox,steam,epic","filter":"过滤参数,all-全部，jx-精选，sd-史低，dl-独立，vip-会员","countries":"地区，具体支持较多，可自信查看地区简写"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"游戏折扣","maintainers":["zytomorrow"],"description":"| switch | ps4  | ps5  | xbox   | steam | epic   |\n| ------ | ---- | ---- | ------ | ----- | ------ |\n| 可用   | 可用 | 可用 | 不可用 | 可用  | 不可用 |\n\n| filter | switch | ps4 | ps5 | steam |\n| ------ | ------ | --- | --- | ----- |\n| all    | ✔     | ✔  | ✔  | ✔    |\n| jx     | ✔     | ✔  | ❌  | ✔    |\n| sd     | ✔     | ✔  | ✔  | ✔    |\n| dl     | ❌     | ✔  | ❌  | ✔    |\n| vip    | ❌     | ❌  | ✔  | ❌    |\n\n| 北美 | 欧洲（英语） | 法国 | 德国 | 日本 |\n| ---- | ------------ | ---- | ---- | ---- |\n| na   | eu           | fr   | de   | jp   |","location":"discount.ts","heat":77,"topFeeds":[{"id":"66698425520730122","type":"feed","url":"rsshub://jump/discount/ps5/all","title":"jump 折扣-ps5-全部","description":"jump 发现游戏 - Powered by RSSHub","image":null},{"id":"79731667838042112","type":"feed","url":"rsshub://jump/discount/switch/all","title":"jump 折扣-switch-全部","description":"jump 发现游戏 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"Error: STACK_TRACE_ERROR\n    at task (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:633:27)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:660:16)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:457:28)\n    at chain (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/chunk-tasks.js:9:14)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:72:12\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:40\n    at runWithSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1588:8)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:10)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:739:54)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at collectTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1048:25)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1556:17)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:85:25)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:153:2)\n    at executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/init-forks.aqTzCSR2.js:29:4)"}' />

| switch | ps4  | ps5  | xbox   | steam | epic   |
| ------ | ---- | ---- | ------ | ----- | ------ |
| 可用   | 可用 | 可用 | 不可用 | 可用  | 不可用 |

| filter | switch | ps4 | ps5 | steam |
| ------ | ------ | --- | --- | ----- |
| all    | ✔     | ✔  | ✔  | ✔    |
| jx     | ✔     | ✔  | ❌  | ✔    |
| sd     | ✔     | ✔  | ✔  | ✔    |
| dl     | ❌     | ✔  | ❌  | ✔    |
| vip    | ❌     | ❌  | ✔  | ❌    |

| 北美 | 欧洲（英语） | 法国 | 德国 | 日本 |
| ---- | ------------ | ---- | ---- | ---- |
| na   | eu           | fr   | de   | jp   |

## 3k-Switch游戏库 <Site url="www.3kns.com"/>

### 3k-Switch游戏库 <Site url="www.3kns.com/" size="sm" />

<Route namespace="3kns" :data='{"path":"/:filters?/:order?","categories":["game"],"example":"/3kns/category=all&lang=all","parameters":{"filters":"过滤器，可用参数见下表","order":"排序，按高分排序:desc;按低分排序:asc"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"3k-Switch游戏库","maintainers":["xzzpig"],"url":"www.3kns.com/","description":"游戏类型(category)\n\n| 不限 | 角色扮演 | 动作冒险 | 策略游戏 | 模拟经营 | 即时战略 | 格斗类 | 射击游戏 | 休闲益智 | 体育运动 | 街机格斗 | 无双类 | 其他游戏 | 赛车竞速 |\n| ---- | -------- | -------- | -------- | -------- | -------- | ------ | -------- | -------- | -------- | -------- | ------ | -------- | -------- |\n| all  | 1        | 2        | 3        | 4        | 5        | 6      | 7        | 8        | 9        | 10       | 11     | 12       | 13       |\n\n  游戏语言(language)\n\n| 不限 | 中文 | 英语 | 日语 | 其他 | 中文汉化 | 德语 |\n| ---- | ---- | ---- | ---- | ---- | -------- | ---- |\n| all  | 1    | 2    | 3    | 4    | 5        | 6    |\n\n  游戏标签(tag)\n\n| 不限 | 热门 | 多人聚会 | 僵尸 | 体感 | 大作 | 音乐 | 三国 | RPG | 格斗 | 闯关 | 横版 | 科幻 | 棋牌 | 运输 | 无双 | 卡通动漫 | 日系 | 养成 | 恐怖 | 运动 | 乙女 | 街机 | 飞行模拟 | 解谜 | 海战 | 战争 | 跑酷 | 即时策略 | 射击 | 经营 | 益智 | 沙盒 | 模拟 | 冒险 | 竞速 | 休闲 | 动作 | 生存 | 独立 | 拼图 | 魔改 xci | 卡牌 | 塔防 |\n| ---- | ---- | -------- | ---- | ---- | ---- | ---- | ---- | --- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | -------- | ---- | ---- | ---- | ---- | ---- | ---- | -------- | ---- | ---- | ---- | ---- | -------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | -------- | ---- | ---- |\n| all  | 1    | 2        | 3    | 4    | 5    | 6    | 7    | 8   | 9    | 10   | 11   | 12   | 13   | 14   | 15   | 16       | 17   | 18   | 19   | 20   | 21   | 22   | 23       | 24   | 25   | 26   | 27   | 28       | 29   | 30   | 31   | 32   | 33   | 34   | 35   | 36   | 37   | 38   | 39   | 40   | 41       | 42   | 43   |\n\n  发售时间(pubDate)\n\n| 不限 | 2017 年 | 2018 年 | 2019 年 | 2020 年 | 2021 年 | 2022 年 | 2023 年 | 2024 年 |\n| ---- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |\n| all  | 1       | 2       | 3       | 4       | 5       | 6       | 7       | 8       |\n\n  游戏集合(collection)\n\n| 不限 | 舞力全开 | 马里奥 | 生化危机 | 炼金工房 | 最终幻想 | 塞尔达 | 宝可梦 | 勇者斗恶龙 | 模拟器 | 秋之回忆 | 第一方 | 体感健身 | 开放世界 | 儿童乐园 |\n| ---- | -------- | ------ | -------- | -------- | -------- | ------ | ------ | ---------- | ------ | -------- | ------ | -------- | -------- | -------- |\n| all  | 1        | 2      | 3        | 4        | 5        | 6      | 7      | 8          | 9      | 10       | 11     | 12       | 13       | 14       |","location":"index.ts","heat":75,"topFeeds":[{"id":"53315487909941248","type":"feed","url":"rsshub://3kns/category=all&lang=all","title":"任天堂Switch游戏下载 - switch游戏下载,NS破解游戏下载平台","description":"任天堂Switch游戏下载 - switch游戏下载,NS破解游戏下载平台 - Powered by RSSHub","image":null},{"id":"86932236568616960","type":"feed","url":"rsshub://3kns","title":"任天堂Switch游戏下载 - switch游戏下载,NS破解游戏下载平台","description":"任天堂Switch游戏下载 - switch游戏下载,NS破解游戏下载平台 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

游戏类型(category)

| 不限 | 角色扮演 | 动作冒险 | 策略游戏 | 模拟经营 | 即时战略 | 格斗类 | 射击游戏 | 休闲益智 | 体育运动 | 街机格斗 | 无双类 | 其他游戏 | 赛车竞速 |
| ---- | -------- | -------- | -------- | -------- | -------- | ------ | -------- | -------- | -------- | -------- | ------ | -------- | -------- |
| all  | 1        | 2        | 3        | 4        | 5        | 6      | 7        | 8        | 9        | 10       | 11     | 12       | 13       |

  游戏语言(language)

| 不限 | 中文 | 英语 | 日语 | 其他 | 中文汉化 | 德语 |
| ---- | ---- | ---- | ---- | ---- | -------- | ---- |
| all  | 1    | 2    | 3    | 4    | 5        | 6    |

  游戏标签(tag)

| 不限 | 热门 | 多人聚会 | 僵尸 | 体感 | 大作 | 音乐 | 三国 | RPG | 格斗 | 闯关 | 横版 | 科幻 | 棋牌 | 运输 | 无双 | 卡通动漫 | 日系 | 养成 | 恐怖 | 运动 | 乙女 | 街机 | 飞行模拟 | 解谜 | 海战 | 战争 | 跑酷 | 即时策略 | 射击 | 经营 | 益智 | 沙盒 | 模拟 | 冒险 | 竞速 | 休闲 | 动作 | 生存 | 独立 | 拼图 | 魔改 xci | 卡牌 | 塔防 |
| ---- | ---- | -------- | ---- | ---- | ---- | ---- | ---- | --- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | -------- | ---- | ---- | ---- | ---- | ---- | ---- | -------- | ---- | ---- | ---- | ---- | -------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | -------- | ---- | ---- |
| all  | 1    | 2        | 3    | 4    | 5    | 6    | 7    | 8   | 9    | 10   | 11   | 12   | 13   | 14   | 15   | 16       | 17   | 18   | 19   | 20   | 21   | 22   | 23       | 24   | 25   | 26   | 27   | 28       | 29   | 30   | 31   | 32   | 33   | 34   | 35   | 36   | 37   | 38   | 39   | 40   | 41       | 42   | 43   |

  发售时间(pubDate)

| 不限 | 2017 年 | 2018 年 | 2019 年 | 2020 年 | 2021 年 | 2022 年 | 2023 年 | 2024 年 |
| ---- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| all  | 1       | 2       | 3       | 4       | 5       | 6       | 7       | 8       |

  游戏集合(collection)

| 不限 | 舞力全开 | 马里奥 | 生化危机 | 炼金工房 | 最终幻想 | 塞尔达 | 宝可梦 | 勇者斗恶龙 | 模拟器 | 秋之回忆 | 第一方 | 体感健身 | 开放世界 | 儿童乐园 |
| ---- | -------- | ------ | -------- | -------- | -------- | ------ | ------ | ---------- | ------ | -------- | ------ | -------- | -------- | -------- |
| all  | 1        | 2      | 3        | 4        | 5        | 6      | 7      | 8          | 9      | 10       | 11     | 12       | 13       | 14       |

## Minecraft <Site url="minecraft.net"/>

### Java Game Update <Site url="minecraft.net/" size="sm" />

<Route namespace="minecraft" :data='{"path":"/version/:versionType?/:linkType?","categories":["game"],"example":"/minecraft/version","parameters":{"versionType":"Game version type, `all` by default","linkType":"Link added to feed, `official` by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["minecraft.net/"]}],"name":"Java Game Update","maintainers":["TheresaQWQ","xtexChooser"],"url":"minecraft.net/","description":"\n| Version                    | versionType |\n| -------------------------- | ----------- |\n| 正式版                     | release     |\n| 快照                       | snapshot    |\n| Alpha 及更早的版本         | old_alpha  |\n| Beta 版                    | old_beta   |\n| Target                     | linkType    |\n| -------------------------- | --------    |\n| minecraft.net              | official    |\n| 英文 Minecraft Wiki 版本页 | enwiki      |\n| 中文 Minecraft Wiki 版本页 | zhwiki      |\n","zh":{"name":"Java版游戏更新"},"location":"version.ts","heat":57,"topFeeds":[{"id":"62456080663433216","type":"feed","url":"rsshub://minecraft/version","title":"Minecraft Java版游戏更新","description":"Minecraft Java版游戏更新 - Powered by RSSHub","image":null},{"id":"154953137410003968","type":"feed","url":"rsshub://minecraft/version/all/official","title":"Minecraft Java版游戏更新","description":"Minecraft Java版游戏更新 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 313148555496 to be less than 311040000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:36:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />


| Version                    | versionType |
| -------------------------- | ----------- |
| 正式版                     | release     |
| 快照                       | snapshot    |
| Alpha 及更早的版本         | old_alpha  |
| Beta 版                    | old_beta   |
| Target                     | linkType    |
| -------------------------- | --------    |
| minecraft.net              | official    |
| 英文 Minecraft Wiki 版本页 | enwiki      |
| 中文 Minecraft Wiki 版本页 | zhwiki      |


### Java Runtimes <Site url="minecraft.net/" size="sm" />

<Route namespace="minecraft" :data='{"path":"/java-runtime/:arch?/:javaType?","categories":["game"],"example":"/minecraft/java-runtime","parameters":{"arch":"Arch, `all` by default","javaType":"Java runtime type, `all` by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["minecraft.net/"]}],"name":"Java Runtimes","maintainers":["xtexChooser"],"url":"minecraft.net/","description":"\narch:\n\n- gamecore (Currently not used by Mojang)\n- linux\n- linux-i386\n- mac-os\n- mac-os-arm64\n- windows-arm64\n- windows-x64\n- windows-x86\n\njavaType:\n\n- java-runtime-alpha\n- java-runtime-beta\n- java-runtime-delta\n- java-runtime-gamma\n- java-runtime-gamma-snapshot\n- jre-legacy\n- minecraft-java-exe (Only on Windows)\n","zh":{"name":"Java运行时"},"location":"java-runtime.ts","heat":4,"topFeeds":[{"id":"164180124215687168","type":"feed","url":"rsshub://minecraft/java-runtime","title":"Minecraft Java运行时","description":"Minecraft Java运行时 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />


arch:

- gamecore (Currently not used by Mojang)
- linux
- linux-i386
- mac-os
- mac-os-arm64
- windows-arm64
- windows-x64
- windows-x86

javaType:

- java-runtime-alpha
- java-runtime-beta
- java-runtime-delta
- java-runtime-gamma
- java-runtime-gamma-snapshot
- jre-legacy
- minecraft-java-exe (Only on Windows)


### Java Blocked Servers <Site url="minecraft.net/" size="sm" />

<Route namespace="minecraft" :data='{"path":"/blockedservers","categories":["game"],"example":"/minecraft/blockedservers","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["minecraft.net/"]}],"name":"Java Blocked Servers","maintainers":["xtexChooser"],"url":"minecraft.net/","description":"Java 版中被 Mojang 通过 sessionserver 阻止的服务器域名的 SHA-1 散列","zh":{"name":"Java版被阻止的服务器域名散列"},"location":"blockedservers.ts","heat":3,"topFeeds":[{"id":"164180081436038144","type":"feed","url":"rsshub://minecraft/blockedservers","title":"Minecraft Java版被阻止的服务器域名散列","description":"Minecraft Java版被阻止的服务器域名散列 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

Java 版中被 Mojang 通过 sessionserver 阻止的服务器域名的 SHA-1 散列

## 完美世界电竞 <Site url="wmpvp.com"/>

### 资讯列表 <Site url="wmpvp.com" size="sm" />

<Route namespace="wmpvp" :data='{"path":"/news/:type","categories":["game"],"example":"/wmpvp/news/1","parameters":{"type":"资讯分类，见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"资讯列表","maintainers":["tssujt"],"description":"| DOTA2 | CS2 |\n| ----- | --- |\n| 1     | 2   |","location":"index.ts","heat":63,"topFeeds":[{"id":"59123449172993025","type":"feed","url":"rsshub://wmpvp/news/1","title":"完美世界电竞 - DOTA2 资讯","description":"完美世界电竞 - DOTA2 资讯 - Powered by RSSHub","image":null},{"id":"71465854017649664","type":"feed","url":"rsshub://wmpvp/news/2","title":"完美世界电竞 - CS2 资讯","description":"完美世界电竞 - CS2 资讯 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| DOTA2 | CS2 |
| ----- | --- |
| 1     | 2   |

## 电玩巴士 TGBUS <Site url="tgbus.com"/>

### 文章列表 <Site url="tgbus.com" size="sm" />

<Route namespace="tgbus" :data='{"path":"/list/:category","parameters":{"category":"列表分类，见下表"},"categories":["game"],"example":"/tgbus/list/news","radar":[{"source":["www.tgbus.com/list/:category/"],"target":"/list/:category"}],"name":"文章列表","maintainers":["Xzonn"],"description":"| 最新资讯 | 游戏评测 | 游戏视频 | 巴士首页特稿 | 硬件资讯 |\n| -------- | -------- | -------- | ------------ | -------- |\n| news     | review   | video    | special      | hardware |","location":"list.ts","heat":62,"topFeeds":[{"id":"72602387683715072","type":"feed","url":"rsshub://tgbus/list/news","title":"最新资讯 - 电玩巴士","description":"电玩巴士综合游戏门户站，一直致力于发展电玩产业和游戏事业，为全球用户24小时提供全面的游戏和主机资讯，游戏评测，游戏攻略，游戏视频，游戏资料库，以及打造拥有数千万会员的社交新媒体平台。 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 最新资讯 | 游戏评测 | 游戏视频 | 巴士首页特稿 | 硬件资讯 |
| -------- | -------- | -------- | ------------ | -------- |
| news     | review   | video    | special      | hardware |

## 游侠网 <Site url="ali213.net"/>

### 资讯 <Site url="www.ali213.net" size="sm" />

<Route namespace="ali213" :data='{"path":"/news/:category?","name":"资讯","url":"www.ali213.net","maintainers":["nczitzk"],"example":"/ali213/news/new","parameters":{"category":"分类，默认为 `new`，即最新资讯，可在对应分类页 URL 中找到"},"description":"::: tip\n若订阅 [游戏资讯](https://www.ali213.net/news/game/)，网址为 `https://www.ali213.net/news/game/`，请截取 `https://www.ali213.net/news/` 到末尾 `/` 的部分 `game` 作为 `category` 参数填入，此时目标路由为 [`/ali213/news/game`](https://rsshub.app/ali213/news/game)。\n:::\n\n| 分类名称 | 分类 ID |\n| -------- | ------- |\n| 最新资讯 | new     |\n| 评测     | pingce  |\n| 游戏     | game    |\n| 动漫     | comic   |\n| 影视     | movie   |\n| 科技     | tech    |\n| 电竞     | esports |\n| 娱乐     | amuse   |\n| 手游     | mobile  |\n","categories":["game"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.ali213.net/news/:category"]},{"title":"最新资讯","source":["www.ali213.net/news/new"],"target":"/news/new"},{"title":"评测","source":["www.ali213.net/news/pingce"],"target":"/news/pingce"},{"title":"游戏","source":["www.ali213.net/news/game"],"target":"/news/game"},{"title":"动漫","source":["www.ali213.net/news/comic"],"target":"/news/comic"},{"title":"影视","source":["www.ali213.net/news/movie"],"target":"/news/movie"},{"title":"科技","source":["www.ali213.net/news/tech"],"target":"/news/tech"},{"title":"电竞","source":["www.ali213.net/news/esports"],"target":"/news/esports"},{"title":"娱乐","source":["www.ali213.net/news/amuse"],"target":"/news/amuse"},{"title":"手游","source":["www.ali213.net/news/mobile"],"target":"/news/mobile"}],"view":0,"location":"news.ts","heat":54,"topFeeds":[{"id":"88780205724889088","type":"feed","url":"rsshub://ali213/news/new","title":"游侠网 - 最新资讯","description":"最新资讯 - Powered by RSSHub","image":"https://www.ali213.net/news/images/ali213_app_big.png"},{"id":"89124148162380800","type":"feed","url":"rsshub://ali213/news","title":"游侠网 - 最新资讯","description":"最新资讯 - Powered by RSSHub","image":"https://www.ali213.net/news/images/ali213_app_big.png"}]}' :test='{"code":0}' />

::: tip
若订阅 [游戏资讯](https://www.ali213.net/news/game/)，网址为 `https://www.ali213.net/news/game/`，请截取 `https://www.ali213.net/news/` 到末尾 `/` 的部分 `game` 作为 `category` 参数填入，此时目标路由为 [`/ali213/news/game`](https://rsshub.app/ali213/news/game)。
:::

| 分类名称 | 分类 ID |
| -------- | ------- |
| 最新资讯 | new     |
| 评测     | pingce  |
| 游戏     | game    |
| 动漫     | comic   |
| 影视     | movie   |
| 科技     | tech    |
| 电竞     | esports |
| 娱乐     | amuse   |
| 手游     | mobile  |


### 大侠号 <Site url="www.ali213.net" size="sm" />

<Route namespace="ali213" :data='{"path":"/zl/:category?","name":"大侠号","url":"www.ali213.net","maintainers":["nczitzk"],"example":"/ali213/zl","parameters":{"category":"分类，默认为首页，可在对应分类页 URL 中找到"},"description":"::: tip\n若订阅 [游戏](https://www.ali213.net/news/zl/game/)，网址为 `https://www.ali213.net/news/zl/game/`，请截取 `https://www.ali213.net/news/zl/` 到末尾 `/` 的部分 `game` 作为 `category` 参数填入，此时目标路由为 [`/ali213/zl/game`](https://rsshub.app/ali213/zl/game)。\n:::\n\n| 首页                                     | 游戏                                         | 动漫                                           | 影视                                           | 娱乐                                           |\n| ---------------------------------------- | -------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |\n| [index](https://www.ali213.net/news/zl/) | [game](https://www.ali213.net/news/zl/game/) | [comic](https://www.ali213.net/news/zl/comic/) | [movie](https://www.ali213.net/news/zl/movie/) | [amuse](https://www.ali213.net/news/zl/amuse/) |\n","categories":["game"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.ali213.net/news/zl/:category"]},{"title":"首页","source":["www.ali213.net/news/zl/"],"target":"/zl"},{"title":"游戏","source":["www.ali213.net/news/zl/game/"],"target":"/zl/game"},{"title":"动漫","source":["www.ali213.net/news/zl/comic/"],"target":"/zl/comic"},{"title":"影视","source":["www.ali213.net/news/zl/movie/"],"target":"/zl/movie"},{"title":"娱乐","source":["www.ali213.net/news/zl/amuse/"],"target":"/zl/amuse"}],"view":0,"location":"zl.ts","heat":3,"topFeeds":[{"id":"122926847767308288","type":"feed","url":"rsshub://ali213/zl","title":"大侠号_单机游戏新闻_游侠网","description":"游侠网资讯中心是国内资深、全面的单机新闻发布站点之一，24小时报道国内、全球单机新闻以及各类游戏相关资讯！ - Powered by RSSHub","image":"https://www.ali213.net/news/images/dxhlogo.png"}]}' :test='{"code":0}' />

::: tip
若订阅 [游戏](https://www.ali213.net/news/zl/game/)，网址为 `https://www.ali213.net/news/zl/game/`，请截取 `https://www.ali213.net/news/zl/` 到末尾 `/` 的部分 `game` 作为 `category` 参数填入，此时目标路由为 [`/ali213/zl/game`](https://rsshub.app/ali213/zl/game)。
:::

| 首页                                     | 游戏                                         | 动漫                                           | 影视                                           | 娱乐                                           |
| ---------------------------------------- | -------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| [index](https://www.ali213.net/news/zl/) | [game](https://www.ali213.net/news/zl/game/) | [comic](https://www.ali213.net/news/zl/comic/) | [movie](https://www.ali213.net/news/zl/movie/) | [amuse](https://www.ali213.net/news/zl/amuse/) |


## Blizzard <Site url="news.blizzard.com"/>

### News <Site url="news.blizzard.com" size="sm" />

<Route namespace="blizzard" :data='{"path":"/news/:language?/:category?","categories":["game"],"example":"/blizzard/news","parameters":{"language":"Language code, see below, en-US by default","category":"Category, see below, All News by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"News","maintainers":["nczitzk"],"description":"Categories\n\n| Category               | Slug                |\n| ---------------------- | ------------------- |\n| All News               |                     |\n| Diablo II: Resurrected | diablo2             |\n| Diablo III             | diablo3             |\n| Diablo IV              | diablo4             |\n| Diablo Immortal        | diablo-immortal     |\n| Hearthstone            | hearthstone         |\n| Heroes of the Storm    | heroes-of-the-storm |\n| Overwatch 2            | overwatch           |\n| StarCraft: Remastered  | starcraft           |\n| StarCraft II           | starcraft2          |\n| World of Warcraft      | world-of-warcraft   |\n| Warcraft 3: Reforged   | warcraft3           |\n| Warcraft Rumble        | warcraft-rumble     |\n| Battle.net             | battlenet           |\n| BlizzCon               | blizzcon            |\n| Inside Blizzard        | blizzard            |\n\n  Language codes\n\n| Language           | Code  |\n| ------------------ | ----- |\n| Deutsch            | de-de |\n| English (US)       | en-us |\n| English (EU)       | en-gb |\n| Español (EU)       | es-es |\n| Español (Latino)   | es-mx |\n| Français           | fr-fr |\n| Italiano           | it-it |\n| Português (Brasil) | pt-br |\n| Polski             | pl-pl |\n| Русский            | ru-ru |\n| 한국어             | ko-kr |\n| ภาษาไทย            | th-th |\n| 日本語             | ja-jp |\n| 繁體中文           | zh-tw |","location":"news.ts","heat":34,"topFeeds":[{"id":"68902633808272384","type":"feed","url":"rsshub://blizzard/news","title":"All News","description":"All News - Powered by RSSHub","image":null},{"id":"77926976521555968","type":"feed","url":"rsshub://blizzard/news/en-US/overwatch","title":"Blizzard","description":"Blizzard - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

Categories

| Category               | Slug                |
| ---------------------- | ------------------- |
| All News               |                     |
| Diablo II: Resurrected | diablo2             |
| Diablo III             | diablo3             |
| Diablo IV              | diablo4             |
| Diablo Immortal        | diablo-immortal     |
| Hearthstone            | hearthstone         |
| Heroes of the Storm    | heroes-of-the-storm |
| Overwatch 2            | overwatch           |
| StarCraft: Remastered  | starcraft           |
| StarCraft II           | starcraft2          |
| World of Warcraft      | world-of-warcraft   |
| Warcraft 3: Reforged   | warcraft3           |
| Warcraft Rumble        | warcraft-rumble     |
| Battle.net             | battlenet           |
| BlizzCon               | blizzcon            |
| Inside Blizzard        | blizzard            |

  Language codes

| Language           | Code  |
| ------------------ | ----- |
| Deutsch            | de-de |
| English (US)       | en-us |
| English (EU)       | en-gb |
| Español (EU)       | es-es |
| Español (Latino)   | es-mx |
| Français           | fr-fr |
| Italiano           | it-it |
| Português (Brasil) | pt-br |
| Polski             | pl-pl |
| Русский            | ru-ru |
| 한국어             | ko-kr |
| ภาษาไทย            | th-th |
| 日本語             | ja-jp |
| 繁體中文           | zh-tw |

### 暴雪游戏国服新闻 <Site url="news.blizzard.com" size="sm" />

<Route namespace="blizzard" :data='{"path":"/news-cn/:category?","categories":["game"],"example":"/blizzard/news-cn/ow","parameters":{"category":"游戏类别, 默认为 ow"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ow.blizzard.cn","wow.blizzard.cn","hs.blizzard.cn"],"target":"/news-cn/"}],"name":"暴雪游戏国服新闻","maintainers":["zhangpeng2k"],"description":"\n| 守望先锋 | 炉石传说 | 魔兽世界 |\n|----------|----------|---------|\n| ow       | hs       | wow     |\n","location":"news-cn.ts","heat":21,"topFeeds":[{"id":"101228634856437760","type":"feed","url":"rsshub://blizzard/news-cn/ow","title":"守望先锋新闻","description":"守望先锋新闻 - Powered by RSSHub","image":null},{"id":"102293253660793856","type":"feed","url":"rsshub://blizzard/news-cn","title":"守望先锋新闻","description":"守望先锋新闻 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />


| 守望先锋 | 炉石传说 | 魔兽世界 |
|----------|----------|---------|
| ow       | hs       | wow     |


## 遊戲基地 Gamebase <Site url="news.gamebase.com.tw"/>

### 新聞 <Site url="news.gamebase.com.tw" size="sm" />

<Route namespace="gamebase" :data='{"path":"/news/:type?/:category?","name":"新聞","url":"news.gamebase.com.tw","maintainers":["nczitzk"],"example":"/gamebase/news","parameters":{"type":"類型，見下表，預設為 newslist","category":"分類，預設為 `all`，即全部，可在對應分類頁 URL 中找到"},"description":"::: tip\n若訂閱 [手機遊戲新聞](https://news.gamebase.com.tw/news/newslist?type=mobile)，網址為 `https://news.gamebase.com.tw/news/newslist?type=mobile`，請截取 `https://news.gamebase.com.tw/news/` 到末尾的部分 `newslist` 作為 `type` 參數填入，`mobile` 作為 `category` 參數填入，此時目標路由為 [`/gamebase/news/newslist/mobile`](https://rsshub.app/gamebase/news/newslist/mobile)。\n:::\n\n| newslist | r18list |\n| -------- | ------- |\n","categories":["game"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["news.gamebase.com.tw/news","news.gamebase.com.tw/news/:type"]}],"view":0,"zh":{"path":"/news/:type?/:category?","name":"新闻","url":"news.gamebase.com.tw","maintainers":["nczitzk"],"example":"/gamebase/news","parameters":{"type":"类型，见下表，默认为 newslist","category":"分类，默认为 `all`，即全部，可在对应分类页 URL 中找到"},"description":"::: tip\n若订阅 [手机游戏新闻](https://news.gamebase.com.tw/news/newslist?type=mobile)，网址为 `https://news.gamebase.com.tw/news/newslist?type=mobile`，请截取 `https://news.gamebase.com.tw/news/` 到末尾的部分 `newslist` 作为 `type` 参数填入，`mobile` 作为 `category` 参数填入，此时目标路由为 [`/gamebase/news/newslist/mobile`](https://rsshub.app/gamebase/news/newslist/mobile)。\n:::\n\n| newslist | r18list |\n| -------- | ------- |\n"},"location":"news.ts","heat":55,"topFeeds":[{"id":"62600104047803392","type":"feed","url":"rsshub://gamebase/news","title":"新聞 | 遊戲基地 Gamebase","description":"精選基地編輯每日為你帶來的電玩、動漫、娛樂遊戲最新新聞 - Powered by RSSHub","image":"https://image.gamebase.com.tw/gb_tw/static/logo_01.png"},{"id":"67001925811204096","type":"feed","url":"rsshub://gamebase/news/r18list","title":"新聞 | 遊戲基地 Gamebase","description":"精選基地編輯每日為你帶來的電玩、動漫、娛樂遊戲最新新聞 - Powered by RSSHub","image":"https://image.gamebase.com.tw/gb_tw/static/logo_01.png"}]}' :test='{"code":0}' />

::: tip
若訂閱 [手機遊戲新聞](https://news.gamebase.com.tw/news/newslist?type=mobile)，網址為 `https://news.gamebase.com.tw/news/newslist?type=mobile`，請截取 `https://news.gamebase.com.tw/news/` 到末尾的部分 `newslist` 作為 `type` 參數填入，`mobile` 作為 `category` 參數填入，此時目標路由為 [`/gamebase/news/newslist/mobile`](https://rsshub.app/gamebase/news/newslist/mobile)。
:::

| newslist | r18list |
| -------- | ------- |


## HoYoLAB <Site url="hoyolab.com"/>

### Official Announcement <Site url="hoyolab.com" size="sm" />

<Route namespace="hoyolab" :data='{"path":"/news/:language/:gids/:type","categories":["game"],"example":"/hoyolab/news/zh-cn/2/2","parameters":{"language":"Language","gids":"Game ID","type":"Announcement type"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Official Announcement","maintainers":["ZenoTian"],"description":"| Language         | Code  |\n| ---------------- | ----- |\n| 简体中文         | zh-cn |\n| 繁體中文         | zh-tw |\n| 日本語           | ja-jp |\n| 한국어           | ko-kr |\n| English (US)     | en-us |\n| Español (EU)     | es-es |\n| Français         | fr-fr |\n| Deutsch          | de-de |\n| Русский          | ru-ru |\n| Português        | pt-pt |\n| Español (Latino) | es-mx |\n| Indonesia        | id-id |\n| Tiếng Việt       | vi-vn |\n| ภาษาไทย          | th-th |\n\n| Honkai Impact 3rd | Genshin Impact | Tears of Themis | HoYoLAB | Honkai: Star Rail | Zenless Zone Zero |\n| ----------------- | -------------- | --------------- | ------- | ----------------- | ----------------- |\n| 1                 | 2              | 4               | 5       | 6                 | 8                 |\n\n| Notices | Events | Info |\n| ------- | ------ | ---- |\n| 1       | 2      | 3    |","location":"news.ts","heat":54,"topFeeds":[{"id":"74614328202293248","type":"feed","url":"rsshub://hoyolab/news/zh-cn/8/1","title":"HoYoLAB-绝区零-公告","description":"HoYoLAB-绝区零-公告 - Powered by RSSHub","image":"https://hyl-static-res-prod.hoyolab.com/communityweb/business/nap.png"},{"id":"74613800923448320","type":"feed","url":"rsshub://hoyolab/news/zh-cn/8/3","title":"HoYoLAB-绝区零-资讯","description":"HoYoLAB-绝区零-资讯 - Powered by RSSHub","image":"https://hyl-static-res-prod.hoyolab.com/communityweb/business/nap.png"}]}' :test='{"code":0}' />

| Language         | Code  |
| ---------------- | ----- |
| 简体中文         | zh-cn |
| 繁體中文         | zh-tw |
| 日本語           | ja-jp |
| 한국어           | ko-kr |
| English (US)     | en-us |
| Español (EU)     | es-es |
| Français         | fr-fr |
| Deutsch          | de-de |
| Русский          | ru-ru |
| Português        | pt-pt |
| Español (Latino) | es-mx |
| Indonesia        | id-id |
| Tiếng Việt       | vi-vn |
| ภาษาไทย          | th-th |

| Honkai Impact 3rd | Genshin Impact | Tears of Themis | HoYoLAB | Honkai: Star Rail | Zenless Zone Zero |
| ----------------- | -------------- | --------------- | ------- | ----------------- | ----------------- |
| 1                 | 2              | 4               | 5       | 6                 | 8                 |

| Notices | Events | Info |
| ------- | ------ | ---- |
| 1       | 2      | 3    |

## 鹰角网络 <Site url="www.hypergryph.com"/>

### 明日方舟 - 游戏内公告 <Site url="www.hypergryph.com" size="sm" />

<Route namespace="hypergryph" :data='{"path":"/arknights/announce/:platform?/:group?","categories":["game"],"example":"/hypergryph/arknights/announce","parameters":{"platform":"平台，默认为 Android","group":"分组，默认为 ALL"},"name":"明日方舟 - 游戏内公告","maintainers":["swwind"],"description":"平台\n\n|  安卓服 | iOS 服 |   B 服   |\n| :-----: | :----: | :------: |\n| Android |   IOS  | Bilibili |\n\n  分组\n\n| 全部 | 系统公告 | 活动公告 |\n| :--: | :------: | :------: |\n|  ALL |  SYSTEM  | ACTIVITY |","location":"arknights/announce.ts","heat":33,"topFeeds":[{"id":"41374862675304448","type":"feed","url":"rsshub://hypergryph/arknights/announce","title":"《明日方舟》全部公告","description":"《明日方舟》全部公告 - Powered by RSSHub","image":null},{"id":"159622024157116416","type":"feed","url":"rsshub://hypergryph/arknights/announce/Android/ALL","title":"《明日方舟》全部公告","description":"《明日方舟》全部公告 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

平台

|  安卓服 | iOS 服 |   B 服   |
| :-----: | :----: | :------: |
| Android |   IOS  | Bilibili |

  分组

| 全部 | 系统公告 | 活动公告 |
| :--: | :------: | :------: |
|  ALL |  SYSTEM  | ACTIVITY |

### 明日方舟 - 游戏公告与新闻 <Site url="ak-conf.hypergryph.com/news" size="sm" />

<Route namespace="hypergryph" :data='{"path":"/arknights/news/:group?","categories":["game"],"example":"/hypergryph/arknights/news","parameters":{"group":"分组，默认为 `ALL`"},"radar":[{"source":["ak-conf.hypergryph.com/news"]}],"name":"明日方舟 - 游戏公告与新闻","maintainers":["Astrian"],"url":"ak-conf.hypergryph.com/news","description":"\n| 全部 | 最新   | 公告         | 活动     | 新闻 |\n| ---- | ------ | ------------ | -------- | ---- |\n| ALL  | LATEST | ANNOUNCEMENT | ACTIVITY | NEWS |","location":"arknights/news.ts","heat":16,"topFeeds":[{"id":"56948849407992834","type":"feed","url":"rsshub://hypergryph/arknights/news","title":"《明日方舟》游戏公告与新闻","description":"《明日方舟》游戏公告与新闻 - Powered by RSSHub","image":null},{"id":"197299073968664578","type":"feed","url":"rsshub://hypergryph/arknights/news/ACTIVITY","title":"《明日方舟》游戏公告与新闻","description":"《明日方舟》游戏公告与新闻 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"Error: STACK_TRACE_ERROR\n    at task (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:633:27)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:660:16)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:457:28)\n    at chain (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/chunk-tasks.js:9:14)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:72:12\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:40\n    at runWithSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1588:8)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:10)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:739:54)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at collectTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1048:25)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1556:17)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:85:25)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:153:2)\n    at executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/init-forks.aqTzCSR2.js:29:4)"}' />


| 全部 | 最新   | 公告         | 活动     | 新闻 |
| ---- | ------ | ------------ | -------- | ---- |
| ALL  | LATEST | ANNOUNCEMENT | ACTIVITY | NEWS |

### 回归线 <Site url="aneot.arktca.com" size="sm" />

<Route namespace="hypergryph" :data='{"path":"/arknights/arktca","categories":["game"],"example":"/hypergryph/arknights/arktca","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"回归线","url":"aneot.arktca.com","maintainers":["Bendancom"],"radar":[{"source":["aneot.arktca.com"]}],"description":"明日方舟期刊《回归线》 | 泰拉创作者联合会","location":"arknights/arktca.ts","heat":2,"topFeeds":[{"id":"60889229904376832","type":"feed","url":"rsshub://hypergryph/arknights/arktca","title":"回归线","description":"明日方舟期刊《回归线》 | 泰拉创作者联合会 - Powered by RSSHub","image":"https://aneot.arktca.com/logo.svg"}]}' :test='{"code":0}' />

明日方舟期刊《回归线》 | 泰拉创作者联合会

### アークナイツ (日服新闻) <Site url="ak.arknights.jp/news" size="sm" />

<Route namespace="hypergryph" :data='{"path":"/arknights/japan","categories":["game"],"example":"/hypergryph/arknights/japan","radar":[{"source":["ak.arknights.jp/news","ak.arknights.jp/"]}],"name":"アークナイツ (日服新闻)","maintainers":["ofyark"],"url":"ak.arknights.jp/news","location":"arknights/japan.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"Error: STACK_TRACE_ERROR\n    at task (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:633:27)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:660:16)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:457:28)\n    at chain (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/chunk-tasks.js:9:14)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:72:12\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:40\n    at runWithSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1588:8)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:10)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:739:54)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at collectTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1048:25)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1556:17)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:85:25)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:153:2)\n    at executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/init-forks.aqTzCSR2.js:29:4)"}' />

## 盒心光环 <Site url="xboxfan.com"/>

### 资讯 <Site url="xboxfan.com/" size="sm" />

<Route namespace="xboxfan" :data='{"path":"/news","categories":["game"],"example":"/xboxfan/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["xboxfan.com/"]}],"name":"资讯","maintainers":["XXY233"],"url":"xboxfan.com/","location":"news.ts","heat":43,"topFeeds":[{"id":"63019899021555712","type":"feed","url":"rsshub://xboxfan/news","title":"盒心光环·资讯","description":"盒心光环·资讯 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## ファミ通 <Site url="famitsu.com"/>

### Category <Site url="famitsu.com" size="sm" />

<Route namespace="famitsu" :data='{"path":"/category/:category?","categories":["game"],"example":"/famitsu/category/new-article","parameters":{"category":"Category, see table below, `new-article` by default"},"radar":[{"source":["www.famitsu.com/category/:category/page/1"]}],"name":"Category","maintainers":["TonyRL"],"description":"| 新着        | Switch | PS5 | PS4 | PC ゲーム | ニュース | 動画   | 特集・企画記事  | インタビュー | 取材・リポート | レビュー | インディーゲーム |\n| ----------- | ------ | --- | --- | --------- | -------- | ------ | --------------- | ------------ | -------------- | -------- | ---------------- |\n| new-article | switch | ps5 | ps4 | pc-game   | news     | videos | special-article | interview    | event-report   | review   | indie-game       |","location":"category.ts","heat":39,"topFeeds":[{"id":"73943720962894848","type":"feed","url":"rsshub://famitsu/category/new-article","title":"新着の最新記事 | ゲーム・エンタメ最新情報のファミ通.com","description":"新着の最新記事 | ゲーム・エンタメ最新情報のファミ通.com - Powered by RSSHub","image":"https://www.famitsu.com/img/1812/favicons/apple-touch-icon.png"},{"id":"172851805999353856","type":"feed","url":"rsshub://famitsu/category","title":"新着の最新記事 | ゲーム・エンタメ最新情報のファミ通.com","description":"新着の最新記事 | ゲーム・エンタメ最新情報のファミ通.com - Powered by RSSHub","image":"https://www.famitsu.com/img/1812/favicons/apple-touch-icon.png"}]}' :test='{"code":0}' />

| 新着        | Switch | PS5 | PS4 | PC ゲーム | ニュース | 動画   | 特集・企画記事  | インタビュー | 取材・リポート | レビュー | インディーゲーム |
| ----------- | ------ | --- | --- | --------- | -------- | ------ | --------------- | ------------ | -------------- | -------- | ---------------- |
| new-article | switch | ps5 | ps4 | pc-game   | news     | videos | special-article | interview    | event-report   | review   | indie-game       |

## MC百科 <Site url="www.mcmod.cn"/>

### 最新MOD <Site url="www.mcmod.cn" size="sm" />

<Route namespace="mcmod" :data='{"path":"/:type","categories":["game"],"example":"/mcmod/new","parameters":{"type":"查询类型，详见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"最新MOD","maintainers":["hualiong"],"description":"`:type` 类型可选如下\n\n| 随机显示MOD | 最新收录MOD | 最近编辑MOD |\n| ------ | --- | ---- |\n| random | new | edit |","location":"index.ts","heat":37,"topFeeds":[{"id":"56355911890850816","type":"feed","url":"rsshub://mcmod/new","title":"MC百科最新收录的的MOD - MC百科","description":"MC百科首页|我的世界MOD百科，提供Minecraft(我的世界)MOD(模组)物品资料介绍教程攻略和MOD下载。 - Powered by RSSHub","image":null},{"id":"132060968710740992","type":"feed","url":"rsshub://mcmod/edit","title":"最近被编辑的MOD - MC百科","description":"MC百科首页|我的世界MOD百科，提供Minecraft(我的世界)MOD(模组)物品资料介绍教程攻略和MOD下载。 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

`:type` 类型可选如下

| 随机显示MOD | 最新收录MOD | 最近编辑MOD |
| ------ | --- | ---- |
| random | new | edit |

## Modrinth <Site url="modrinth.com"/>

### Project versions <Site url="modrinth.com" size="sm" />

<Route namespace="modrinth" :data='{"path":"/project/:id/versions/:routeParams?","categories":["game"],"example":"/modrinth/project/sodium/versions","parameters":{"id":"Id or slug of the Modrinth project","routeParams":"Extra route params. See the table below for options"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["modrinth.com/mod/:id/*","modrinth.com/plugin/:id/*","modrinth.com/datapack/:id/*","modrinth.com/shader/:id/*","modrinth.com/resourcepack/:id/*","modrinth.com/modpack/:id/*","modrinth.com/mod/:id","modrinth.com/plugin/:id","modrinth.com/datapack/:id","modrinth.com/shader/:id","modrinth.com/resourcepack/:id","modrinth.com/modpack/:id"],"target":"/project/:id/versions"}],"name":"Project versions","maintainers":["SettingDust"],"description":"| Name           | Example                                      |\n| -------------- | -------------------------------------------- |\n| loaders        | loaders=fabric&loaders=quilt&loaders=forge |\n| game_versions | game_versions=1.20.1&game_versions=1.20.2 |\n| featured       | featured=true                                |","location":"versions.ts","heat":37,"topFeeds":[{"id":"88557710935450624","type":"feed","url":"rsshub://modrinth/project/create/versions","title":"Create Modrinth versions","description":"Aesthetic Technology that empowers the Player - Powered by RSSHub","image":null},{"id":"123852430344537088","type":"feed","url":"rsshub://modrinth/project/gG7VFbG0/versions","title":"TAB Modrinth versions","description":"An all-in-one solution that works - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| Name           | Example                                      |
| -------------- | -------------------------------------------- |
| loaders        | loaders=fabric&loaders=quilt&loaders=forge |
| game_versions | game_versions=1.20.1&game_versions=1.20.2 |
| featured       | featured=true                                |

## 库洛游戏 | Kuro Games <Site url="www.kurogames.com"/>

### 鸣潮 — 游戏公告、新闻与活动 <Site url="www.kurogames.com" size="sm" />

<Route namespace="kurogames" :data='{"path":"/wutheringwaves/news/:language?","categories":["game"],"example":"/kurogames/wutheringwaves/news","parameters":{"language":"The language to use for the content. Default: `zh`."},"name":"鸣潮 — 游戏公告、新闻与活动","radar":[{"source":["mc.kurogames.com/m/main/news","mc.kurogames.com/main"]},{"title":"Wuthering Waves — Game announcements, news and events","source":["wutheringwaves.kurogames.com/en/main/news","wutheringwaves.kurogames.com/en/main"]}],"maintainers":["goestav","enpitsulin"],"description":"\nLanguage codes for the `language` parameter:\n\n| Language | Code         |\n|----------|--------------|\n| English  | en           |\n| 日本語    | jp           |\n| 한국어     | kr           |\n| 简体中文   | zh (default) |\n| 繁體中文   | zh-tw        |\n| Español  | es           |\n| Français | fr           |\n| Deutsch  | de           |\n    ","location":"wutheringwaves/news.ts","heat":34,"topFeeds":[{"id":"41645808521081856","type":"feed","url":"rsshub://kurogames/wutheringwaves/news","title":"《鸣潮》— 游戏公告、新闻和活动","description":"《鸣潮》— 游戏公告、新闻和活动 - Powered by RSSHub","image":null},{"id":"134789849205955584","type":"feed","url":"rsshub://kurogames/wutheringwaves/news/zh","title":"《鸣潮》— 游戏公告、新闻和活动","description":"《鸣潮》— 游戏公告、新闻和活动 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />


Language codes for the `language` parameter:

| Language | Code         |
|----------|--------------|
| English  | en           |
| 日本語    | jp           |
| 한국어     | kr           |
| 简体中文   | zh (default) |
| 繁體中文   | zh-tw        |
| Español  | es           |
| Français | fr           |
| Deutsch  | de           |
    

## FINAL FANTASY XIV <Site url="eu.finalfantasyxiv.com"/>

### 最终幻想 14 国服 <Site url="ff.web.sdo.com/web8/index.html" size="sm" />

<Route namespace="ff14" :data='{"path":["/zh/:type?","/ff14_zh/:type?"],"categories":["game"],"example":"/ff14/zh/news","parameters":{"type":"分类名，预设为 `all`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ff.web.sdo.com/web8/index.html"],"target":"/zh"}],"name":"最终幻想 14 国服","maintainers":["Kiotlin","ZeroClad","15x15G"],"url":"ff.web.sdo.com/web8/index.html","description":"| 新闻 | 公告     | 活动   | 广告      | 所有 |\n| ---- | -------- | ------ | --------- | ---- |\n| news | announce | events | advertise | all  |","location":"ff14-zh.ts","heat":23,"topFeeds":[{"id":"58939975768068096","type":"feed","url":"rsshub://ff14/zh/news","title":"最终幻想14（国服）新闻中心","description":"《最终幻想14》是史克威尔艾尼克斯出品的全球经典游戏品牌FINAL FANTASY系列的最新作品，IGN获得9.2高分！全球累计用户突破1600万！ - Powered by RSSHub","image":null},{"id":"84969277213600768","type":"feed","url":"rsshub://ff14/zh","title":"最终幻想14（国服）新闻中心","description":"《最终幻想14》是史克威尔艾尼克斯出品的全球经典游戏品牌FINAL FANTASY系列的最新作品，IGN获得9.2高分！全球累计用户突破1600万！ - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 新闻 | 公告     | 活动   | 广告      | 所有 |
| ---- | -------- | ------ | --------- | ---- |
| news | announce | events | advertise | all  |

### FINAL FANTASY XIV (The Lodestone) <Site url="eu.finalfantasyxiv.com" size="sm" />

<Route namespace="ff14" :data='{"path":["/global/:lang/:type?","/ff14_global/:lang/:type?"],"categories":["game"],"example":"/ff14/global/na/all","parameters":{"lang":"Region","type":"Category, `all` by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"FINAL FANTASY XIV (The Lodestone)","maintainers":["kmod-midori"],"description":"Region\n\n| North Ameria | Europe | France | Germany | Japan |\n| ------------ | ------ | ------ | ------- | ----- |\n| na           | eu     | fr     | de      | jp    |\n\n  Category\n\n| all | topics | notices | maintenance | updates | status | developers |\n| --- | ------ | ------- | ----------- | ------- | ------ | ---------- |","location":"ff14-global.ts","heat":1,"topFeeds":[{"id":"81190222645790720","type":"feed","url":"rsshub://ff14/global/na/all","title":"FFXIV Lodestone updates (all)","description":"FFXIV Lodestone updates (all) - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

Region

| North Ameria | Europe | France | Germany | Japan |
| ------------ | ------ | ------ | ------- | ----- |
| na           | eu     | fr     | de      | jp    |

  Category

| all | topics | notices | maintenance | updates | status | developers |
| --- | ------ | ------- | ----------- | ------- | ------ | ---------- |

## GameKee | 游戏百科攻略 <Site url="www.gamekee.com"/>

### 游戏情报 <Site url="gamekee.com/news" size="sm" />

<Route namespace="gamekee" :data='{"path":"/news","categories":["game"],"example":"/gamekee/news","radar":[{"source":["gamekee.com","gamekee.com/news"],"target":"/news"}],"name":"游戏情报","maintainers":["ueiu"],"url":"gamekee.com/news","location":"news.ts","heat":25,"topFeeds":[{"id":"128858591461089280","type":"feed","url":"rsshub://gamekee/news","title":"游戏情报|Gamekee","description":"游戏情报|Gamekee - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## Counter Strike <Site url="counter-strike.net"/>

### News <Site url="www.counter-strike.net" size="sm" />

<Route namespace="counter-strike" :data='{"path":"/news/:category?/:language?","name":"News","url":"www.counter-strike.net","maintainers":["nczitzk"],"example":"/counter-strike/news","parameters":{"category":"Category, `updates` or `all`, `all` by default","language":"Language, english by default, see below for more languages"},"description":"::: tip\n  If you subscribe to [Updates in English](https://www.counter-strike.net/news/updates?l=english)，where the URL is `https://www.counter-strike.net/news/updates?l=english`, extract the `l`, which is `english`, and use it as the parameter to fill in. Therefore, the route will be [`/counter-strike/news/updates/english`](https://rsshub.app/counter-strike/news/updates/english).\n:::\n\n<details>\n<summary>More languages</summary>\n\n| 语言代码                                          | 语言名称   |\n| ------------------------------------------------- | ---------- |\n| English                                           | english    |\n| Español - España (Spanish - Spain)                | spanish    |\n| Français (French)                                 | french     |\n| Italiano (Italian)                                | italian    |\n| Deutsch (German)                                  | german     |\n| Ελληνικά (Greek)                                  | greek      |\n| 한국어 (Korean)                                   | koreana    |\n| 简体中文 (Simplified Chinese)                     | schinese   |\n| 繁體中文 (Traditional Chinese)                    | tchinese   |\n| Русский (Russian)                                 | russian    |\n| ไทย (Thai)                                        | thai       |\n| 日本語 (Japanese)                                 | japanese   |\n| Português (Portuguese)                            | portuguese |\n| Português - Brasil (Portuguese - Brazil)          | brazilian  |\n| Polski (Polish)                                   | polish     |\n| Dansk (Danish)                                    | danish     |\n| Nederlands (Dutch)                                | dutch      |\n| Suomi (Finnish)                                   | finnish    |\n| Norsk (Norwegian)                                 | norwegian  |\n| Svenska (Swedish)                                 | swedish    |\n| Čeština (Czech)                                   | czech      |\n| Magyar (Hungarian)                                | hungarian  |\n| Română (Romanian)                                 | romanian   |\n| Български (Bulgarian)                             | bulgarian  |\n| Türkçe (Turkish)                                  | turkish    |\n| Українська (Ukrainian)                            | ukrainian  |\n| Tiếng Việt (Vietnamese)                           | vietnamese |\n| Español - Latinoamérica (Spanish - Latin America) | latam      |\n\n</details>\n    ","categories":["game"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.counter-strike.net/news/:category"]}],"location":"news.ts","heat":17,"topFeeds":[{"id":"76090323884335104","type":"feed","url":"rsshub://counter-strike/news","title":"Counter Strike - News","description":"#Blog_Title - Powered by RSSHub","image":"https://media.st.dl.eccdnx.com/apps/csgo/images/dota_react//blog/default_cover.jpg"},{"id":"165244885864530944","type":"feed","url":"rsshub://counter-strike/news/All","title":"Counter Strike - News","description":"#Blog_Title - Powered by RSSHub","image":"https://media.st.dl.eccdnx.com/apps/csgo/images/dota_react//blog/default_cover.jpg"}]}' :test='{"code":0}' />

::: tip
  If you subscribe to [Updates in English](https://www.counter-strike.net/news/updates?l=english)，where the URL is `https://www.counter-strike.net/news/updates?l=english`, extract the `l`, which is `english`, and use it as the parameter to fill in. Therefore, the route will be [`/counter-strike/news/updates/english`](https://rsshub.app/counter-strike/news/updates/english).
:::

<details>
<summary>More languages</summary>

| 语言代码                                          | 语言名称   |
| ------------------------------------------------- | ---------- |
| English                                           | english    |
| Español - España (Spanish - Spain)                | spanish    |
| Français (French)                                 | french     |
| Italiano (Italian)                                | italian    |
| Deutsch (German)                                  | german     |
| Ελληνικά (Greek)                                  | greek      |
| 한국어 (Korean)                                   | koreana    |
| 简体中文 (Simplified Chinese)                     | schinese   |
| 繁體中文 (Traditional Chinese)                    | tchinese   |
| Русский (Russian)                                 | russian    |
| ไทย (Thai)                                        | thai       |
| 日本語 (Japanese)                                 | japanese   |
| Português (Portuguese)                            | portuguese |
| Português - Brasil (Portuguese - Brazil)          | brazilian  |
| Polski (Polish)                                   | polish     |
| Dansk (Danish)                                    | danish     |
| Nederlands (Dutch)                                | dutch      |
| Suomi (Finnish)                                   | finnish    |
| Norsk (Norwegian)                                 | norwegian  |
| Svenska (Swedish)                                 | swedish    |
| Čeština (Czech)                                   | czech      |
| Magyar (Hungarian)                                | hungarian  |
| Română (Romanian)                                 | romanian   |
| Български (Bulgarian)                             | bulgarian  |
| Türkçe (Turkish)                                  | turkish    |
| Українська (Ukrainian)                            | ukrainian  |
| Tiếng Việt (Vietnamese)                           | vietnamese |
| Español - Latinoamérica (Spanish - Latin America) | latam      |

</details>
    

## 腾讯 <Site url="tencent.com"/>

### 新闻中心 <Site url="tencent.com" size="sm" />

<Route namespace="tencent" :data='{"path":"/pvp/newsindex/:type","categories":["game"],"example":"/tencent/pvp/newsindex/all","parameters":{"type":"栏目分类，见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"新闻中心","maintainers":["Jeason0228","HenryQW"],"description":"| 全部 | 热门 | 新闻 | 公告 | 活动 | 赛事 | 优化 |\n| ---- | ---- | ---- | ---- | ---- | ---- | ---- |\n| all  | rm   | xw   | gg   | hd   | ss   | yh   |","location":"pvp/newsindex.ts","heat":17,"topFeeds":[{"id":"63214823163257856","type":"feed","url":"rsshub://tencent/pvp/newsindex/all","title":"【全部】 - 王者荣耀 - 新闻列表","description":"《王者荣耀》是腾讯天美工作室历时3年推出的东方英雄即时对战手游大作，抗塔强杀、团灭超神，领略爽热血竞技的酣畅淋漓！1v1、3v3、闯关等丰富游戏模式，随时战，更自由！跨服匹配秒开局，好友组队战排位，不靠装备、没有等级，更公平、更爽快的无差异对战！ - Powered by RSSHub","image":null},{"id":"63215511065306112","type":"feed","url":"rsshub://tencent/pvp/newsindex/rm","title":"【热门】 - 王者荣耀 - 新闻列表","description":"《王者荣耀》是腾讯天美工作室历时3年推出的东方英雄即时对战手游大作，抗塔强杀、团灭超神，领略爽热血竞技的酣畅淋漓！1v1、3v3、闯关等丰富游戏模式，随时战，更自由！跨服匹配秒开局，好友组队战排位，不靠装备、没有等级，更公平、更爽快的无差异对战！ - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected [ …(12) ] to not include &#39;https://pvp.qq.com/web201706/newsdeta…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1252:15)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1090:14)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@6.2.1/node_modules/chai/index.js:1700:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 全部 | 热门 | 新闻 | 公告 | 活动 | 赛事 | 优化 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| all  | rm   | xw   | gg   | hd   | ss   | yh   |

## 触乐 <Site url="chuapp.com"/>

### 分类 <Site url="chuapp.com" size="sm" />

<Route namespace="chuapp" :data='{"path":"/:category?","categories":["game"],"example":"/chuapp/daily","parameters":{"category":"栏目分类，见下表"},"description":"\n  | `category` | 栏目分类 |\n  | ------------ | ------- |\n  | `daily`    | 每日聚焦 |\n  | `pcz`      | 最好玩   |\n  | `night`    | 触乐夜话 |\n  | `news`     | 动态资讯 |\n    ","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"分类","maintainers":["dousha"],"radar":[{"source":["chuapp.com/category/:category"],"target":"/:category"},{"source":["chuapp.com/tag/index/id/20369.html"],"target":"/night"}],"location":"chuapp.ts","heat":16,"topFeeds":[{"id":"128265220294458368","type":"feed","url":"rsshub://chuapp/daily","title":"触乐 - 每日聚焦","description":"触乐 - 每日聚焦 - Powered by RSSHub","image":null},{"id":"144651366868700160","type":"feed","url":"rsshub://chuapp/night","title":"触乐 - 触乐夜话","description":"触乐 - 触乐夜话 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />


  | `category` | 栏目分类 |
  | ------------ | ------- |
  | `daily`    | 每日聚焦 |
  | `pcz`      | 最好玩   |
  | `night`    | 触乐夜话 |
  | `news`     | 动态资讯 |
    

## PSN 中文站 <Site url="psnine.com"/>

### 数折 <Site url="psnine.com" size="sm" />

<Route namespace="psnine" :data='{"path":"/shuzhe","categories":["game"],"example":"/psnine/shuzhe","name":"数折","maintainers":["betta-cyber"],"radar":[{"source":["psnine.com/dd","psnine.com"]}],"location":"shuzhe.ts","heat":9,"topFeeds":[{"id":"130453774179595264","type":"feed","url":"rsshub://psnine/shuzhe","title":"PSN数字游戏折扣","description":"PSN数字游戏折扣 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 节点 <Site url="psnine.com" size="sm" />

<Route namespace="psnine" :data='{"path":"/node/:id?/:order?","parameters":{"id":"节点 id，见下表，默认为 news","order":"排序，`date` 即最新，默认为 `obdate` 即综合排序"},"categories":["game"],"example":"/psnine/node/news","name":"节点","maintainers":["betta-cyber","nczitzk"],"radar":[{"source":["psnine.com/node/:id"]}],"location":"node.ts","heat":3,"topFeeds":[{"id":"125916510049597440","type":"feed","url":"rsshub://psnine/node/plus","title":"「会免」最新讨论 - PSN中文站","description":"「会免」最新讨论 - PSN中文站 - Powered by RSSHub","image":null},{"id":"194206298407365632","type":"feed","url":"rsshub://psnine/node","title":"「新闻」最新讨论 - PSN中文站","description":"「新闻」最新讨论 - PSN中文站 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 游戏 <Site url="psnine.com" size="sm" />

<Route namespace="psnine" :data='{"path":"/game","categories":["game"],"example":"/psnine/game","name":"游戏","maintainers":["betta-cyber"],"radar":[{"source":["psnine.com/psngame","psnine.com"]}],"location":"game.ts","heat":2,"topFeeds":[{"id":"130418984975544320","type":"feed","url":"rsshub://psnine/game","title":"PSN游戏列表","description":"PSN游戏列表 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 闲游 <Site url="psnine.com" size="sm" />

<Route namespace="psnine" :data='{"path":"/trade","categories":["game"],"example":"/psnine/trade","name":"闲游","maintainers":["betta-cyber"],"radar":[{"source":["psnine.com/trade","psnine.com"]}],"location":"trade.ts","heat":1,"topFeeds":[{"id":"130453903130988544","type":"feed","url":"rsshub://psnine/trade","title":"闲游","description":"闲游 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 758729110852 to be less than 311040000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:36:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 首页 <Site url="psnine.com" size="sm" />

<Route namespace="psnine" :data='{"path":"/","categories":["game"],"example":"/psnine","name":"首页","maintainers":["betta-cyber"],"radar":[{"source":["psnine.com"]}],"location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 758800330576 to be less than 311040000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:36:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 5EPLAY <Site url="csgo.5eplay.com"/>

### 新闻列表 <Site url="csgo.5eplay.com/" size="sm" />

<Route namespace="5eplay" :data='{"path":"/article","categories":["game"],"example":"/5eplay/article","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["csgo.5eplay.com/","csgo.5eplay.com/article"]}],"name":"新闻列表","maintainers":["Dlouxgit"],"url":"csgo.5eplay.com/","location":"index.ts","heat":13,"topFeeds":[{"id":"68662736350086144","type":"feed","url":"rsshub://5eplay/article","title":"5EPLAY","description":"5EPLAY - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## itch.io <Site url="itch.io"/>

### Developer Logs <Site url="itch.io" size="sm" />

<Route namespace="itch" :data='{"path":"/devlog/:user/:id","categories":["game"],"example":"/itch/devlog/teamterrible/the-baby-in-yellow","parameters":{"user":"User id, can be found in URL","id":"Item id, can be found in URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Developer Logs","maintainers":["nczitzk"],"description":"`User id` is the field before `.itch.io` in the URL of the corresponding page, e.g. the URL of [The Baby In Yellow Devlog](https://teamterrible.itch.io/the-baby-in-yellow/devlog) is `https://teamterrible.itch.io/the-baby-in-yellow/devlog`, where the field before `.itch.io` is `teamterrible`.\n\n  `Item id` is the field between `itch.io` and `/devlog` in the URL of the corresponding page, e.g. the URL for [The Baby In Yellow Devlog](https://teamterrible.itch.io/the-baby-in-yellow/devlog) is `https://teamterrible.itch.io/the-baby-in-yellow/devlog`, where the field between `itch.io` and `/devlog` is `the-baby-in-yellow`.\n\n  So the route is [`/itch/devlogs/teamterrible/the-baby-in-yellow`](https://rsshub.app/itch/devlogs/teamterrible/the-baby-in-yellow).","location":"devlog.ts","heat":11,"topFeeds":[{"id":"81598929713485824","type":"feed","url":"rsshub://itch/devlog/caribdis/eternum","title":"Devlog - Eternum by Caribdis","description":"Devlog - Eternum by Caribdis - Powered by RSSHub","image":null},{"id":"81600518557769728","type":"feed","url":"rsshub://itch/devlog/hexatail/agent17","title":"Devlog - Agent17 (18+ Adult Game) by HEXATAIL","description":"Devlog - Agent17 (18+ Adult Game) by HEXATAIL - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

`User id` is the field before `.itch.io` in the URL of the corresponding page, e.g. the URL of [The Baby In Yellow Devlog](https://teamterrible.itch.io/the-baby-in-yellow/devlog) is `https://teamterrible.itch.io/the-baby-in-yellow/devlog`, where the field before `.itch.io` is `teamterrible`.

  `Item id` is the field between `itch.io` and `/devlog` in the URL of the corresponding page, e.g. the URL for [The Baby In Yellow Devlog](https://teamterrible.itch.io/the-baby-in-yellow/devlog) is `https://teamterrible.itch.io/the-baby-in-yellow/devlog`, where the field between `itch.io` and `/devlog` is `the-baby-in-yellow`.

  So the route is [`/itch/devlogs/teamterrible/the-baby-in-yellow`](https://rsshub.app/itch/devlogs/teamterrible/the-baby-in-yellow).

### Unknown <Site url="itch.io" size="sm" />

<Route namespace="itch" :data='{"path":"*","name":"Unknown","maintainers":[],"location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### Posts <Site url="itch.io" size="sm" />

<Route namespace="itch" :data='{"path":"/posts/:topic/:id","categories":["game"],"example":"/itch/posts/9539/introduce-yourself","parameters":{"topic":"Topic id, can be found in URL","id":"Topic name, can be found in URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["itch.io/t/:topic/:id"]}],"name":"Posts","maintainers":["nczitzk"],"location":"posts.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 网易公开课 <Site url="163.com"/>

::: tip
部分歌单及听歌排行信息为登陆后可见，自建时将环境变量`NCM_COOKIES`设为登陆后的 Cookie 值，即可正常获取。
:::

### 用户发帖 <Site url="163.com" size="sm" />

<Route namespace="163" :data='{"path":"/ds/:id","categories":["game"],"example":"/163/ds/63dfbaf4117741daaf73404601165843","parameters":{"id":"用户ID"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ds.163.com/user/:id"]}],"name":"用户发帖","maintainers":["luyuhuang"],"location":"ds.ts","heat":10,"topFeeds":[{"id":"92101048147198999","type":"feed","url":"rsshub://163/ds/13be30b3f5204a17b3e52eaf9f0e44aa","title":"暴雪大神 的动态","description":"暴雪大神 的动态 - Powered by RSSHub","image":null},{"id":"166489281655090184","type":"feed","url":"rsshub://163/ds/d26787c432064c578e87b977aa7b30aa","title":"暴雪游戏攻略站 的动态","description":"暴雪游戏攻略站 的动态 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## League of Legends <Site url="leagueoflegends.com"/>

### Patch Notes <Site url="leagueoflegends.com" size="sm" />

<Route namespace="leagueoflegends" :data='{"path":"/patch-notes","categories":["game"],"example":"/leagueoflegends/patch-notes","radar":[{"source":["www.leagueoflegends.com/en-us/news/tags/patch-notes/","www.leagueoflegends.com/en-us/news/game-updates/:postSlug"]}],"name":"Patch Notes","maintainers":["noahm"],"location":"patch-notes.ts","heat":10,"topFeeds":[{"id":"138828318510385152","type":"feed","url":"rsshub://leagueoflegends/patch-notes","title":"League of Legends Patch Notes","description":"League of Legends Patch Notes - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## TapTap <Site url="www.taptap.io"/>

::: warning
由于区域限制，需要在有国内 IP 的机器上自建才能正常获取 RSS。而对于《TapTap 国际版》则需要部署在具有海外出口的 IP 上才可正常获取 RSS。
:::

### 游戏论坛 <Site url="www.taptap.io" size="sm" />

<Route namespace="taptap" :data='{"path":"/topic/:id/:type?/:sort?/:lang?","categories":["game"],"example":"/taptap/topic/142793/official","parameters":{"id":"游戏 ID，游戏主页 URL 中获取","type":"论坛版块，默认显示所有帖子，论坛版块 URL 中 `type` 参数，见下表，默认为 `feed`","sort":"排序，见下表，默认为 `created`","lang":"语言，`zh-CN`或`zh-TW`，默认为`zh-CN`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["taptap.cn/app/:id/topic","taptap.cn/app/:id"],"target":"/topic/:id"}],"name":"游戏论坛","maintainers":["hoilc","TonyRL"],"description":"| 全部 | 精华  | 官方     | 影片  |\n| ---- | ----- | -------- | ----- |\n| feed | elite | official | video |\n\n| 发布时间 | 回复时间  | 默认排序 |\n| -------- | --------- | ------- |\n| created  | commented | default |","location":"topic.ts","heat":6,"topFeeds":[{"id":"197299073968664579","type":"feed","url":"rsshub://taptap/topic/301888/official","title":"Milthm（TapTap测试版） - 官方 - TapTap 论坛","description":"Milthm（TapTap测试版） - 官方 - TapTap 论坛 - Powered by RSSHub","image":"https://img.tapimg.com/market/images/cc1c4008497a11526aaf70aebfb83ca3.png"},{"id":"197299073968664580","type":"feed","url":"rsshub://taptap/topic/165287/official","title":"Phigros - 官方 - TapTap 论坛","description":"Phigros - 官方 - TapTap 论坛 - Powered by RSSHub","image":"https://img.tapimg.com/market/images/9000b8b031deabbd424b7f2f530ee162.png"}]}' :test='{"code":0}' />

| 全部 | 精华  | 官方     | 影片  |
| ---- | ----- | -------- | ----- |
| feed | elite | official | video |

| 发布时间 | 回复时间  | 默认排序 |
| -------- | --------- | ------- |
| created  | commented | default |

### 游戏更新 <Site url="www.taptap.io" size="sm" />

<Route namespace="taptap" :data='{"path":"/changelog/:id/:lang?","categories":["game"],"example":"/taptap/changelog/60809/en_US","parameters":{"id":"游戏 ID，游戏主页 URL 中获取","lang":"语言，默认使用 `zh_CN`，亦可使用 `en_US`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.taptap.cn/app/:id"],"target":"/changelog/:id"}],"name":"游戏更新","maintainers":["hoilc","ETiV"],"location":"changelog-cn.ts","heat":4,"topFeeds":[{"id":"165028264825545728","type":"feed","url":"rsshub://taptap/changelog/165287","title":"TapTap 更新记录 Phigros","description":"Phigros - Powered by RSSHub","image":"https://img.tapimg.com/market/images/9000b8b031deabbd424b7f2f530ee162.png"},{"id":"122918327659466752","type":"feed","url":"rsshub://taptap/changelog/221322","title":"TapTap 更新记录 暗区突围","description":"暗区突围 - Powered by RSSHub","image":"https://img.tapimg.com/market/images/f4f7db399fdbb9b0c0dc6e5f7256ab1d.jpg"}]}' :test='{"code":0}' />

### Game's Changelog <Site url="www.taptap.io" size="sm" />

<Route namespace="taptap" :data='{"path":"/intl/changelog/:id/:lang?","categories":["game"],"example":"/taptap/intl/changelog/191001/zh_TW","parameters":{"id":"Game&#39;s App ID, you may find it from the URL of the Game","lang":"Language, checkout the table below for possible values, default is `en_US`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.taptap.io/app/:id"],"target":"/intl/changelog/:id"}],"name":"Game&#39;s Changelog","maintainers":["hoilc","ETiV"],"description":"Language Code\n\n| English (US) | 繁體中文 | 한국어 | 日本語 |\n| ------------ | -------- | ------ | ------ |\n| en_US       | zh_TW   | ko_KR | ja_JP |","location":"changelog-intl.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

Language Code

| English (US) | 繁體中文 | 한국어 | 日本語 |
| ------------ | -------- | ------ | ------ |
| en_US       | zh_TW   | ko_KR | ja_JP |

### 游戏评价 <Site url="www.taptap.io" size="sm" />

<Route namespace="taptap" :data='{"path":"/review/:id/:order?/:lang?","categories":["game"],"example":"/taptap/review/142793/hot","parameters":{"id":"游戏 ID，游戏主页 URL 中获取","order":"排序方式，空为综合，可选如下","lang":"语言，`zh-CN` 或 `zh-TW`，默认为 `zh-CN`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.taptap.cn/app/:id/review","www.taptap.cn/app/:id"],"target":"/review/:id"}],"name":"游戏评价","maintainers":["hoilc","TonyRL"],"description":"| 最新   | 综合 |\n| --- | --- |\n| new | hot |","location":"review-cn.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

| 最新   | 综合 |
| --- | --- |
| new | hot |

### Ratings & Reviews <Site url="www.taptap.io" size="sm" />

<Route namespace="taptap" :data='{"path":"/intl/review/:id/:order?/:lang?","categories":["game"],"example":"/taptap/intl/review/82354/recent","parameters":{"id":"Game&#39;s App ID, you may find it from the URL of the Game","order":"Sort Method, default is `helpful`, checkout the table below for possible values","lang":"Language, checkout the table below for possible values, default is `en_US`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.taptap.io/app/:id/review","www.taptap.io/app/:id"],"target":"/intl/review/:id"}],"name":"Ratings & Reviews","maintainers":["hoilc","TonyRL","ETiV"],"description":"Sort Method\n\n| Most Helpful | Most Recent |\n| ------------ | ----------- |\n| helpful      | recent      |\n\nLanguage Code\n\n| English (US) | 繁體中文 | 한국어 | 日本語 |\n| ------------ | -------- | ------ | ------ |\n| en_US       | zh_TW   | ko_KR | ja_JP |","location":"review-intl.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

Sort Method

| Most Helpful | Most Recent |
| ------------ | ----------- |
| helpful      | recent      |

Language Code

| English (US) | 繁體中文 | 한국어 | 日本語 |
| ------------ | -------- | ------ | ------ |
| en_US       | zh_TW   | ko_KR | ja_JP |

## Blue Archive <Site url="bluearchive.jp"/>

### News <Site url="bluearchive.jp" size="sm" />

<Route namespace="bluearchive" :data='{"path":"/news/:server/:type?","name":"News","categories":["game"],"maintainers":["equt"],"example":"/bluearchive/news/jp","parameters":{"server":"game server (ISO 3166 two-letter country code, case-insensitive), only `JP` is supported for now","type":"news type, checkout the table below for details"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"description":"| 全て | イベント | お知らせ | メンテナンス |\n| :--: | :--: | :--: | :--: |\n| 0 | 1 | 2 | 3 |","location":"news.ts","heat":9,"topFeeds":[{"id":"86033006654854144","type":"feed","url":"rsshub://bluearchive/news/jp","title":"ブルアカ - 全て","description":"ブルアカ - 全て - Powered by RSSHub","image":"https://webcnstatic.yostar.net/ba_cn_web/prod/web/favicon.png"}]}' :test='{"code":0}' />

| 全て | イベント | お知らせ | メンテナンス |
| :--: | :--: | :--: | :--: |
| 0 | 1 | 2 | 3 |

## Koyso <Site url="koyso.to"/>

### 游戏 <Site url="koyso.to" size="sm" />

<Route namespace="koyso" :data='{"path":"/:category?/:sort?","name":"游戏","url":"koyso.to","maintainers":["nczitzk"],"example":"/koyso/0/latest","parameters":{"category":{"description":"排序，默认为 `0`，即全部，可在对应分类页 URL 中找到","options":[{"label":"全部游戏","value":"0"},{"label":"动作游戏","value":"3"},{"label":"冒险游戏","value":"5"},{"label":"绅士游戏","value":"7"},{"label":"射击游戏","value":"1"},{"label":"休闲游戏","value":"2"},{"label":"体育竞速","value":"4"},{"label":"模拟经营","value":"6"},{"label":"角色扮演","value":"8"},{"label":"策略游戏","value":"9"},{"label":"格斗游戏","value":"10"},{"label":"恐怖游戏","value":"11"},{"label":"即时战略","value":"12"},{"label":"卡牌游戏","value":"13"},{"label":"独立游戏","value":"14"},{"label":"局域网联机","value":"15"}]},"sort":{"description":"排序，默认为 `latest`，即最新，可在对应页 URL 中找到","options":[{"label":"热度","value":"views"},{"label":"最新","value":"latest"}]}},"description":"::: tip\n订阅 [最新动作游戏](https://koyso.to/?category=3&sort=latest)，其源网址为 `https://koyso.to/?category=3&sort=latest`，请参考该 URL 指定部分构成参数，此时路由为 [`/koyso/3/latest`](https://koyso.to/?category=3&sort=latest)。\n:::\n\n#### 分类\n\n| 分类                                        | ID                                |\n| ------------------------------------------- | --------------------------------- |\n| [全部游戏](https://koyso.to/)               | [0](https://rsshub.app/koyso/0)   |\n| [动作游戏](https://koyso.to/?category=3)    | [3](https://rsshub.app/koyso/3)   |\n| [冒险游戏](https://koyso.to/?category=5)    | [5](https://rsshub.app/koyso/5)   |\n| [绅士游戏](https://koyso.to/?category=7)    | [7](https://rsshub.app/koyso/7)   |\n| [射击游戏](https://koyso.to/?category=1)    | [1](https://rsshub.app/koyso/1)   |\n| [休闲游戏](https://koyso.to/?category=2)    | [2](https://rsshub.app/koyso/2)   |\n| [体育竞速](https://koyso.to/?category=4)    | [4](https://rsshub.app/koyso/4)   |\n| [模拟经营](https://koyso.to/?category=6)    | [6](https://rsshub.app/koyso/6)   |\n| [角色扮演](https://koyso.to/?category=8)    | [8](https://rsshub.app/koyso/8)   |\n| [策略游戏](https://koyso.to/?category=9)    | [9](https://rsshub.app/koyso/9)   |\n| [格斗游戏](https://koyso.to/?category=10)   | [10](https://rsshub.app/koyso/10) |\n| [恐怖游戏](https://koyso.to/?category=11)   | [11](https://rsshub.app/koyso/11) |\n| [即时战略](https://koyso.to/?category=12)   | [12](https://rsshub.app/koyso/12) |\n| [卡牌游戏](https://koyso.to/?category=13)   | [13](https://rsshub.app/koyso/13) |\n| [独立游戏](https://koyso.to/?category=14)   | [14](https://rsshub.app/koyso/14) |\n| [局域网联机](https://koyso.to/?category=15) | [15](https://rsshub.app/koyso/15) |\n\n#### 排序\n\n| 排序                                  | ID                                          |\n| ------------------------------------- | ------------------------------------------- |\n| [热度](https://koyso.to/?sort=views)  | [views](https://rsshub.app/koyso/0/views)   |\n| [最新](https://koyso.to/?sort=latest) | [latest](https://rsshub.app/koyso/0/latest) |\n","categories":["game"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false,"nsfw":true},"radar":[{"source":["koyso.to"]},{"title":"全部游戏","source":["koyso.to"],"target":"/0"},{"title":"动作游戏","source":["koyso.to"],"target":"/3"},{"title":"冒险游戏","source":["koyso.to"],"target":"/5"},{"title":"绅士游戏","source":["koyso.to"],"target":"/7"},{"title":"射击游戏","source":["koyso.to"],"target":"/1"},{"title":"休闲游戏","source":["koyso.to"],"target":"/2"},{"title":"体育竞速","source":["koyso.to"],"target":"/4"},{"title":"模拟经营","source":["koyso.to"],"target":"/6"},{"title":"角色扮演","source":["koyso.to"],"target":"/8"},{"title":"策略游戏","source":["koyso.to"],"target":"/9"},{"title":"格斗游戏","source":["koyso.to"],"target":"/10"},{"title":"恐怖游戏","source":["koyso.to"],"target":"/11"},{"title":"即时战略","source":["koyso.to"],"target":"/12"},{"title":"卡牌游戏","source":["koyso.to"],"target":"/13"},{"title":"独立游戏","source":["koyso.to"],"target":"/14"},{"title":"局域网联机","source":["koyso.to"],"target":"/15"}],"view":0,"location":"index.ts","heat":8,"topFeeds":[{"id":"186257019396793344","type":"feed","url":"rsshub://koyso","title":"Koyso - All - Latest","description":"Free pre-installed PC games for direct download. Play instantly without setup or installation. Fast, secure, and easy access to your favorite titles. - Powered by RSSHub","image":null},{"id":"185221927541489664","type":"feed","url":"rsshub://koyso/0/latest","title":"Koyso - All - Latest","description":"Free pre-installed PC games for direct download. Play instantly without setup or installation. Fast, secure, and easy access to your favorite titles. - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

::: tip
订阅 [最新动作游戏](https://koyso.to/?category=3&sort=latest)，其源网址为 `https://koyso.to/?category=3&sort=latest`，请参考该 URL 指定部分构成参数，此时路由为 [`/koyso/3/latest`](https://koyso.to/?category=3&sort=latest)。
:::

#### 分类

| 分类                                        | ID                                |
| ------------------------------------------- | --------------------------------- |
| [全部游戏](https://koyso.to/)               | [0](https://rsshub.app/koyso/0)   |
| [动作游戏](https://koyso.to/?category=3)    | [3](https://rsshub.app/koyso/3)   |
| [冒险游戏](https://koyso.to/?category=5)    | [5](https://rsshub.app/koyso/5)   |
| [绅士游戏](https://koyso.to/?category=7)    | [7](https://rsshub.app/koyso/7)   |
| [射击游戏](https://koyso.to/?category=1)    | [1](https://rsshub.app/koyso/1)   |
| [休闲游戏](https://koyso.to/?category=2)    | [2](https://rsshub.app/koyso/2)   |
| [体育竞速](https://koyso.to/?category=4)    | [4](https://rsshub.app/koyso/4)   |
| [模拟经营](https://koyso.to/?category=6)    | [6](https://rsshub.app/koyso/6)   |
| [角色扮演](https://koyso.to/?category=8)    | [8](https://rsshub.app/koyso/8)   |
| [策略游戏](https://koyso.to/?category=9)    | [9](https://rsshub.app/koyso/9)   |
| [格斗游戏](https://koyso.to/?category=10)   | [10](https://rsshub.app/koyso/10) |
| [恐怖游戏](https://koyso.to/?category=11)   | [11](https://rsshub.app/koyso/11) |
| [即时战略](https://koyso.to/?category=12)   | [12](https://rsshub.app/koyso/12) |
| [卡牌游戏](https://koyso.to/?category=13)   | [13](https://rsshub.app/koyso/13) |
| [独立游戏](https://koyso.to/?category=14)   | [14](https://rsshub.app/koyso/14) |
| [局域网联机](https://koyso.to/?category=15) | [15](https://rsshub.app/koyso/15) |

#### 排序

| 排序                                  | ID                                          |
| ------------------------------------- | ------------------------------------------- |
| [热度](https://koyso.to/?sort=views)  | [views](https://rsshub.app/koyso/0/views)   |
| [最新](https://koyso.to/?sort=latest) | [latest](https://rsshub.app/koyso/0/latest) |


## 腾讯网 <Site url="qq.com"/>

### 英雄联盟新闻 <Site url="lol.qq.com" size="sm" />

<Route namespace="qq" :data='{"path":"/lol/news/:category?","name":"英雄联盟新闻","url":"lol.qq.com","maintainers":["nczitzk"],"example":"/qq/lol/news","parameters":{"category":"分类，默认为 `23`，即综合，见下表"},"description":"::: tip\n若订阅 [英雄联盟首页新闻列表 - 公告](https://lol.qq.com/news/index.shtml)，网址为 `https://lol.qq.com/news/index.shtml`，请选择 `24` 作为 `category` 参数填入，此时目标路由为 [`/qq/lol/news/24`](https://rsshub.app/qq/lol/news/24)。\n:::\n\n| 综合 | 公告 | 赛事 | 攻略 | 社区 |\n| ---- | ---- | ---- | ---- | ---- |\n| 23   | 24   | 25   | 27   | 28   |\n","categories":["game"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"title":"综合","source":["lol.qq.com/news/index.shtml"],"target":"/lol/news/23"},{"title":"公告","source":["lol.qq.com/news/index.shtml"],"target":"/lol/news/24"},{"title":"赛事","source":["lol.qq.com/news/index.shtml"],"target":"/lol/news/25"},{"title":"攻略","source":["lol.qq.com/news/index.shtml"],"target":"/lol/news/27"},{"title":"社区","source":["lol.qq.com/news/index.shtml"],"target":"/lol/news/28"}],"view":0,"location":"lol/news.ts","heat":8,"topFeeds":[{"id":"101911164632930304","type":"feed","url":"rsshub://qq/lol/news","title":"英雄联盟首页新闻列表 - 综合","description":"英雄联盟官方网站，海量风格各异的英雄，丰富、便捷的物品合成系统，游戏内置的匹配、排行和竞技系统，独创的“召唤师”系统及技能、符文、天赋等系统组合，必将带你进入一个崭新而又丰富多彩的游戏世界。 - Powered by RSSHub","image":"https://game.gtimg.cn/images/lol/v3/logo-public.png"},{"id":"206218993552190464","type":"feed","url":"rsshub://qq/lol/news/23","title":"英雄联盟首页新闻列表 - 综合","description":"英雄联盟官方网站，海量风格各异的英雄，丰富、便捷的物品合成系统，游戏内置的匹配、排行和竞技系统，独创的“召唤师”系统及技能、符文、天赋等系统组合，必将带你进入一个崭新而又丰富多彩的游戏世界。 - Powered by RSSHub","image":"https://game.gtimg.cn/images/lol/v3/logo-public.png"}]}' :test='{"code":0}' />

::: tip
若订阅 [英雄联盟首页新闻列表 - 公告](https://lol.qq.com/news/index.shtml)，网址为 `https://lol.qq.com/news/index.shtml`，请选择 `24` 作为 `category` 参数填入，此时目标路由为 [`/qq/lol/news/24`](https://rsshub.app/qq/lol/news/24)。
:::

| 综合 | 公告 | 赛事 | 攻略 | 社区 |
| ---- | ---- | ---- | ---- | ---- |
| 23   | 24   | 25   | 27   | 28   |


### 穿越火线 CFHD 专区资讯中心 <Site url="cfhd.cf.qq.com" size="sm" />

<Route namespace="qq" :data='{"path":"/cfhd/news/:category?","name":"穿越火线 CFHD 专区资讯中心","url":"cfhd.cf.qq.com","maintainers":["nczitzk"],"example":"/qq/cfhd/news","parameters":{"category":"分类，默认为 60847，即最新，可在对应分类页 URL 中找到"},"description":"::: tip\n  若订阅 [穿越火线 CFHD 专区资讯中心 - 最新](https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/60847/m22510/list_1.shtml)，网址为 `https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/60847/m22510/list_1.shtml`。截取 `https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/` 到末尾 `/m22510/list_1.shtml` 的部分 `60847` 作为参数填入，此时路由为 [`/qq/cfhd/news/60847`](https://rsshub.app/qq/cfhd/news/60847)。\n:::\n\n| 分类                                                                                                  | ID                                            |\n| ----------------------------------------------------------------------------------------------------- | --------------------------------------------- |\n| [最新](https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/60847/m22510/list_1.shtml) | [60847](https://rsshub.app/qq/cfhd/news/60847) |\n| [公告](https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/59625/m22510/list_1.shtml) | [59625](https://rsshub.app/qq/cfhd/news/59625) |\n| [版本](https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/60850/m22510/list_1.shtml) | [60850](https://rsshub.app/qq/cfhd/news/60850) |\n| [赛事](https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/59626/m22510/list_1.shtml) | [59626](https://rsshub.app/qq/cfhd/news/59626) |\n| [杂谈](https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/59624/m22510/list_1.shtml) | [59624](https://rsshub.app/qq/cfhd/news/59624) |\n  ","categories":["game"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"title":"穿越火线 CFHD 专区资讯中心 - 最新","source":["cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/60847/m22510/list_1.shtml"],"target":"/cfhd/news/60847"},{"title":"穿越火线 CFHD 专区资讯中心 - 公告","source":["cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/59625/m22510/list_1.shtml"],"target":"/cfhd/news/59625"},{"title":"穿越火线 CFHD 专区资讯中心 - 版本","source":["cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/60850/m22510/list_1.shtml"],"target":"/cfhd/news/60850"},{"title":"穿越火线 CFHD 专区资讯中心 - 赛事","source":["cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/59626/m22510/list_1.shtml"],"target":"/cfhd/news/59626"},{"title":"穿越火线 CFHD 专区资讯中心 - 杂谈","source":["cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/59624/m22510/list_1.shtml"],"target":"/cfhd/news/59624"}],"location":"cfhd/index.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

::: tip
  若订阅 [穿越火线 CFHD 专区资讯中心 - 最新](https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/60847/m22510/list_1.shtml)，网址为 `https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/60847/m22510/list_1.shtml`。截取 `https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/` 到末尾 `/m22510/list_1.shtml` 的部分 `60847` 作为参数填入，此时路由为 [`/qq/cfhd/news/60847`](https://rsshub.app/qq/cfhd/news/60847)。
:::

| 分类                                                                                                  | ID                                            |
| ----------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| [最新](https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/60847/m22510/list_1.shtml) | [60847](https://rsshub.app/qq/cfhd/news/60847) |
| [公告](https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/59625/m22510/list_1.shtml) | [59625](https://rsshub.app/qq/cfhd/news/59625) |
| [版本](https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/60850/m22510/list_1.shtml) | [60850](https://rsshub.app/qq/cfhd/news/60850) |
| [赛事](https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/59626/m22510/list_1.shtml) | [59626](https://rsshub.app/qq/cfhd/news/59626) |
| [杂谈](https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/59624/m22510/list_1.shtml) | [59624](https://rsshub.app/qq/cfhd/news/59624) |
  

## 游戏星辰 <Site url="www.2023game.com"/>

### 游戏星辰 <Site url="www.2023game.com/" size="sm" />

<Route namespace="2023game" :data='{"path":"/:category?/:tab?","categories":["game"],"example":"/2023game/sgame/topicList","parameters":{"category":"分类，见下表","tab":"标签, 所有:all;最新:topicList;热门:jhcpb"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"游戏星辰","maintainers":["xzzpig"],"url":"www.2023game.com/","description":"分类\n\n| PS4游戏 | switch游戏 | 3DS游戏 | PSV游戏 | Xbox360 | PS3游戏 | 世嘉MD/SS | PSP游戏 | PC周边 | 怀旧掌机 | 怀旧主机 | PS4教程 | PS4金手指 | switch金手指 | switch教程 | switch补丁 | switch主题 | switch存档 |\n| -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |\n| ps4 | sgame | 3ds | psv | jiaocheng | ps3yx | zhuji.md | zhangji.psp | pcgame | zhangji | zhuji | ps4.psjc | ps41.ps4pkg | nsaita.cundang | nsaita.pojie | nsaita.buding | nsaita.zhutie | nsaita.zhuti |","location":"index.ts","heat":6,"topFeeds":[{"id":"75155926100067328","type":"feed","url":"rsshub://2023game/sgame/topicList","title":"switch游戏下载-免费switch游戏下载-ns游戏资源下载 - 游戏星辰","description":"switch游戏下载-免费switch游戏下载-ns游戏资源下载 - 游戏星辰 - Powered by RSSHub","image":"https://www.2023game.com/resources/img/logo.png"},{"id":"195716605362803712","type":"feed","url":"rsshub://2023game/ps4","title":"PS4游戏下载-PS4破解游戏资源-PS4破解中文游戏pkg下载 - 游戏星辰","description":"PS4游戏下载-PS4破解游戏资源-PS4破解中文游戏pkg下载 - 游戏星辰 - Powered by RSSHub","image":"https://www.2023game.com/resources/img/logo.png"}]}' :test='{"code":0}' />

分类

| PS4游戏 | switch游戏 | 3DS游戏 | PSV游戏 | Xbox360 | PS3游戏 | 世嘉MD/SS | PSP游戏 | PC周边 | 怀旧掌机 | 怀旧主机 | PS4教程 | PS4金手指 | switch金手指 | switch教程 | switch补丁 | switch主题 | switch存档 |
| -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| ps4 | sgame | 3ds | psv | jiaocheng | ps3yx | zhuji.md | zhangji.psp | pcgame | zhangji | zhuji | ps4.psjc | ps41.ps4pkg | nsaita.cundang | nsaita.pojie | nsaita.buding | nsaita.zhutie | nsaita.zhuti |

## SEGA <Site url="pjsekai.sega.jp"/>

### 世界计划 多彩舞台 ｜ ProjectSekai ｜ プロセカ <Site url="pjsekai.sega.jp/news/index.html" size="sm" />

<Route namespace="sega" :data='{"path":"/pjsekai/news","categories":["game"],"example":"/sega/pjsekai/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["pjsekai.sega.jp/news/index.html"]}],"name":"世界计划 多彩舞台 ｜ ProjectSekai ｜ プロセカ","maintainers":["15x15G"],"url":"pjsekai.sega.jp/news/index.html","location":"pjsekai.ts","heat":4,"topFeeds":[{"id":"58963617793036288","type":"feed","url":"rsshub://sega/pjsekai/news","title":"Project Sekai - News","description":"プロジェクトセカイ カラフルステージ！ feat.初音ミク - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### maimai DX Japanese Ver. News <Site url="info-maimai.sega.jp/" size="sm" />

<Route namespace="sega" :data='{"path":"/maimaidx/news","categories":["game"],"example":"/sega/maimaidx/news","radar":[{"source":["info-maimai.sega.jp/"]}],"name":"maimai DX Japanese Ver. News","maintainers":["randompasser"],"url":"info-maimai.sega.jp/","location":"maimaidx.ts","heat":1,"topFeeds":[{"id":"66867115630962688","type":"feed","url":"rsshub://sega/maimaidx/news","title":"maimai DX - Japanese Ver. News","description":"maimai DX - Japanese Ver. News - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## War Thunder <Site url="warthunder.com"/>

### News <Site url="warthunder.com/en/news" size="sm" />

<Route namespace="warthunder" :data='{"path":"/news","categories":["game"],"example":"/warthunder/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["warthunder.com/en/news","warthunder.com/"]}],"name":"News","maintainers":["axojhf"],"url":"warthunder.com/en/news","description":"News data from [https://warthunder.com/en/news/](https://warthunder.com/en/news/)\n  The `pubDate` provided under UTC time zone, so please ignore the specific time!!!","location":"news.ts","heat":5,"topFeeds":[{"id":"74063151402982400","type":"feed","url":"rsshub://warthunder/news","title":"War Thunder News","description":"War Thunder News - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

News data from [https://warthunder.com/en/news/](https://warthunder.com/en/news/)
  The `pubDate` provided under UTC time zone, so please ignore the specific time!!!

## Fortnite <Site url="fortnite.com"/>

### News <Site url="fortnite.com" size="sm" />

<Route namespace="fortnite" :data='{"path":"/news/:options?","categories":["game"],"example":"/fortnite/news","parameters":{"options":"Params"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"News","maintainers":["lyqluis"],"description":"-   `options.lang`, optional, language, eg. `/fortnite/news/lang=en-US`, common languages are listed below, more languages are available one the [official website](https://www.fortnite.com/news)\n\n| English (default) | Spanish | Japanese | French | Korean | Polish |\n| ----------------- | ------- | -------- | ------ | ------ | ------ |\n| en-US             | es-ES   | ja       | fr     | ko     | pl     |","location":"news.ts","heat":3,"topFeeds":[{"id":"68983907798491136","type":"feed","url":"rsshub://fortnite/news","title":"Fortnite News","description":"Fortnite News - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

-   `options.lang`, optional, language, eg. `/fortnite/news/lang=en-US`, common languages are listed below, more languages are available one the [official website](https://www.fortnite.com/news)

| English (default) | Spanish | Japanese | French | Korean | Polish |
| ----------------- | ------- | -------- | ------ | ------ | ------ |
| en-US             | es-ES   | ja       | fr     | ko     | pl     |

## ALICESOFT <Site url="www.alicesoft.com"/>

### ニュース <Site url="www.alicesoft.com/information" size="sm" />

<Route namespace="alicesoft" :data='{"url":"www.alicesoft.com/information","path":"/information/:category?/:game?","categories":["game"],"example":"/alicesoft/information/game/cat377","parameters":{"category":"Category in the URL, which can be accessed under カテゴリ一覧 on the website.","game":"Game-specific subcategory in the URL, which can be accessed under カテゴリ一覧 on the website. In this case, the category value should be `game`."},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.alicesoft.com/information","www.alicesoft.com/information/:category","www.alicesoft.com/information/:category/:game"],"target":"/information/:category/:game"}],"name":"ニュース","maintainers":["keocheung"],"location":"infomation.ts","heat":2,"topFeeds":[{"id":"74007369916644352","type":"feed","url":"rsshub://alicesoft/information/game/cat377","title":"ALICESOFT 超昂大戦の記事一覧","description":"ALICESOFT 超昂大戦の記事一覧 - Powered by RSSHub","image":null},{"id":"71404482934582272","type":"feed","url":"rsshub://alicesoft/information","title":"ALICESOFT 記事一覧","description":"ALICESOFT 記事一覧 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected [ …(8) ] to not include &#39;https://www.alicesoft.com/escalationh…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1252:15)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1090:14)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@6.2.1/node_modules/chai/index.js:1700:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## DevolverDigital <Site url="devolverdigital.com"/>

### Official Blogs <Site url="devolverdigital.com/blog" size="sm" />

<Route namespace="devolverdigital" :data='{"path":"/blog","categories":["game"],"example":"/devolverdigital/blog","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["devolverdigital.com/blog"]}],"name":"Official Blogs","maintainers":["XXY233"],"url":"devolverdigital.com/blog","location":"blog.ts","heat":2,"topFeeds":[{"id":"74008111562030080","type":"feed","url":"rsshub://devolverdigital/blog","title":"DevolverDigital Blog","description":"DevolverDigital Blog - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## EA Games <Site url="www.ea.com"/>

### APEX Legends 官网资讯 <Site url="www.ea.com" size="sm" />

<Route namespace="ea" :data='{"path":"/apex-news/:lang?/:type?","categories":["game"],"example":"/ea/apex-news/zh-hant/game-updates","parameters":{"lang":{"description":"语言","options":[{"value":"zh-hant","label":"中文(繁体)"},{"value":"en","label":"English"}],"default":"en"},"type":{"description":"资讯类型（可选）","options":[{"value":"news-article","label":"最新消息"},{"value":"game-updates","label":"游戏更新"},{"value":"latest","label":"全部"}],"default":"latest"}},"name":"APEX Legends 官网资讯","maintainers":["IceChestnut"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"view":0,"location":"apex-news.ts","heat":2,"topFeeds":[{"id":"143374026862942208","type":"feed","url":"rsshub://ea/apex-news/zh-hant/news-article","title":"Apex Legends 官网资讯（最新消息）","description":"Apex Legends 官网资讯（最新消息） - Powered by RSSHub","image":"https://drop-assets.ea.com/images/F1GeiHWipvvKj7GtUVP3U/31bb122451e2dea6d14c9b497f8e09d4/apex-white-nav-logo.svg"},{"id":"143373614588382208","type":"feed","url":"rsshub://ea/apex-news/zh-hant/game-updates","title":"Apex Legends 官网资讯（游戏更新）","description":"Apex Legends 官网资讯（游戏更新） - Powered by RSSHub","image":"https://drop-assets.ea.com/images/F1GeiHWipvvKj7GtUVP3U/31bb122451e2dea6d14c9b497f8e09d4/apex-white-nav-logo.svg"}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## Liquipedia <Site url="liquipedia.net"/>

### Counter-Strike Team Match Results <Site url="liquipedia.net" size="sm" />

<Route namespace="liquipedia" :data='{"path":"/counterstrike/matches/:team","radar":[{"source":["liquipedia.net/counterstrike/:id/Matches","liquipedia.net/dota2/:id"],"target":"/counterstrike/matches/:id"}],"example":"/liquipedia/counterstrike/matches/Team_Falcons","name":"Counter-Strike Team Match Results","maintainers":["CookiePieWw"],"location":"cs-matches.ts","heat":2,"topFeeds":[{"id":"137121125120034816","type":"feed","url":"rsshub://liquipedia/counterstrike/matches/Team_Falcons","title":"[Counter-Strike] Team_Falcons Match Results From Liquipedia","description":"[Counter-Strike] Team_Falcons Match Results From Liquipedia - Powered by RSSHub","image":null},{"id":"58124618911394816","type":"feed","url":"rsshub://liquipedia/counterstrike/matches/G2_Esports","title":"[Counter-Strike] G2_Esports Match Results From Liquipedia","description":"[Counter-Strike] G2_Esports Match Results From Liquipedia - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### Dota2 战队最近比赛结果 <Site url="liquipedia.net" size="sm" />

<Route namespace="liquipedia" :data='{"path":"/dota2/matches/:id","categories":["game"],"example":"/liquipedia/dota2/matches/Team_Aster","parameters":{"id":"战队名称，可在url中找到。例如:https://liquipedia.net/dota2/Team_Aster"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["liquipedia.net/dota2/:id"]}],"name":"Dota2 战队最近比赛结果","maintainers":["wzekin"],"location":"dota2-matches.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## PRINCESS CONNECT! Re Dive プリンセスコネクト！Re Dive <Site url="priconne-redive.jp"/>

### 最新公告 <Site url="priconne-redive.jp/news" size="sm" />

<Route namespace="priconne-redive" :data='{"path":"/news/:server?","categories":["game"],"example":"/priconne-redive/news","parameters":{"server":"服务器，默认日服"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["priconne-redive.jp/news"],"target":"/news/jp"},{"source":["princessconnect.so-net.tw/news"],"target":"/news/zh-tw"},{"source":["game.bilibili.com/pcr/news.html"],"target":"/news/zh-cn"}],"name":"最新公告","maintainers":["SayaSS","frankcwl"],"url":"priconne-redive.jp/news","description":"服务器\n\n| 国服  | 台服  | 日服  |\n| ----- | ----- | ---- |\n| zh-cn | zh-tw | jp   |","location":"news.ts","heat":2,"topFeeds":[{"id":"66023614482950154","type":"feed","url":"rsshub://priconne-redive/news/zh-tw","title":"公主连结台服-最新公告","description":"公主连结台服-最新公告 - Powered by RSSHub","image":null},{"id":"127304052495781888","type":"feed","url":"rsshub://priconne-redive/news","title":"公主链接日服-新闻","description":"公主链接日服-新闻 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

服务器

| 国服  | 台服  | 日服  |
| ----- | ----- | ---- |
| zh-cn | zh-tw | jp   |

## Dorohedoro <Site url="dorohedoro.net"/>

### News <Site url="dorohedoro.net/news" size="sm" />

<Route namespace="dorohedoro" :data='{"path":"/news","categories":["game"],"example":"/dorohedoro/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["dorohedoro.net/news","dorohedoro.net/"]}],"name":"News","maintainers":["nczitzk"],"url":"dorohedoro.net/news","location":"news.ts","heat":1,"topFeeds":[{"id":"74359015809951755","type":"feed","url":"rsshub://dorohedoro/news","title":"アニメ『ドロヘドロ』","description":"アニメ『ドロヘドロ』 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected [ …(16) ] to not include &#39;https://dorohedoro.net/&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1252:15)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1090:14)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@6.2.1/node_modules/chai/index.js:1700:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 少女前线 <Site url="sunborngame.com"/>

### 情报局 <Site url="sunborngame.com" size="sm" />

<Route namespace="gf-cn" :data='{"path":"/news/:category?","categories":["game"],"example":"/gf-cn/news","parameters":{"category":"分类，见下表，默认为新闻"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["sunborngame.com/:category","sunborngame.com/"]}],"name":"情报局","maintainers":["nczitzk"],"description":"| 新闻 | 公告 |\n| ---- | ---- |\n| 1    | 3    |","location":"news.ts","heat":1,"topFeeds":[{"id":"74302230794164224","type":"feed","url":"rsshub://gf-cn/news","title":"新闻 - 少女前线 - 情报局","description":"新闻 - 少女前线 - 情报局 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 新闻 | 公告 |
| ---- | ---- |
| 1    | 3    |

## imop <Site url="imop.com"/>

### 全部消息 <Site url="imop.com" size="sm" />

<Route namespace="imop" :data='{"path":"/tianshu","categories":["game"],"example":"/imop/tianshu","radar":[{"source":["t.imop.com"],"target":"/tianshu"}],"name":"全部消息","maintainers":["zhkgo"],"location":"tianshu.ts","heat":1,"topFeeds":[{"id":"74073602902251520","type":"feed","url":"rsshub://imop/tianshu","title":"天书最新消息","description":"天书最新消息 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## KISS <Site url="www.kisskiss.tv"/>

### ブログ <Site url="www.kisskiss.tv" size="sm" />

<Route namespace="kisskiss" :data='{"path":"/blog/:category?","categories":["game"],"example":"/blog/DLC","parameters":{"category":"category"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false,"nsfw":true},"radar":[{"source":["www.kisskiss.tv/kiss/diary.php"],"target":"/blog"}],"name":"ブログ","maintainers":["keocheung"],"location":"blog.ts","heat":1,"topFeeds":[{"id":"65292416725202944","type":"feed","url":"rsshub://kisskiss/blog/DLC","title":"KISS ブログ","description":"KISS ブログ - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 404 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## MyCard娛樂中心 <Site url="mycard520.com.tw"/>

### 遊戲新聞 <Site url="app.mycard520.com.tw" size="sm" />

<Route namespace="mycard520" :data='{"path":"/category/:category?","name":"遊戲新聞","url":"app.mycard520.com.tw","maintainers":["nczitzk"],"example":"/mycard520/category/cardgame","parameters":{"category":{"description":"分类，默认为 `cardgame`，即最新遊戲，可在对应分类页 URL 中找到","options":[{"label":"最新遊戲","value":"cardgame"},{"label":"手機遊戲","value":"cardgame-mobile"},{"label":"PC 遊戲","value":"cardgame-pc"},{"label":"電競賽事","value":"cardgame-esports"},{"label":"實況直播","value":"cardgame-live"}]}},"description":"::: tip\n若订阅 [最新遊戲](https://app.mycard520.com.tw/category/cardgame/)，网址为 `https://app.mycard520.com.tw/category/cardgame/`，请截取 `https://app.mycard520.com.tw/category/` 到末尾 `/` 的部分 `cardgame` 作为 `category` 参数填入，此时目标路由为 [`/mycard520/category/cardgame`](https://rsshub.app/mycard520/category/cardgame)。\n:::\n\n| [最新遊戲](https://app.mycard520.com.tw/category/cardgame/) | [手機遊戲](https://app.mycard520.com.tw/category/cardgame-mobile/)       | [PC 遊戲](https://app.mycard520.com.tw/category/cardgame-pc/)    | [電競賽事](https://app.mycard520.com.tw/category/cardgame-esports/)        | [實況直播](https://app.mycard520.com.tw/category/cardgame-live/)     |\n| ----------------------------------------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------- |\n| [cardgame](https://rsshub.app/mycard520/category/cardgame)  | [cardgame-mobile](https://rsshub.app/mycard520/category/cardgame-mobile) | [cardgame-pc](https://rsshub.app/mycard520/category/cardgame-pc) | [cardgame-esports](https://rsshub.app/mycard520/category/cardgame-esports) | [cardgame-live](https://rsshub.app/mycard520/category/cardgame-live) |\n","categories":["game"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["app.mycard520.com.tw/category/:category"]},{"title":"最新遊戲","source":["app.mycard520.com.tw/category/cardgame"],"target":"/category/cardgame"},{"title":"手機遊戲","source":["app.mycard520.com.tw/category/cardgame-mobile"],"target":"/category/cardgame-mobile"},{"title":"PC 遊戲","source":["app.mycard520.com.tw/category/cardgame-pc"],"target":"/category/cardgame-pc"},{"title":"電競賽事","source":["app.mycard520.com.tw/category/cardgame-esports"],"target":"/category/cardgame-esports"},{"title":"實況直播","source":["app.mycard520.com.tw/category/cardgame-live"],"target":"/category/cardgame-live"}],"view":0,"zh":{"path":"/category/:category?","name":"游戏新闻","url":"app.mycard520.com.tw","maintainers":["nczitzk"],"example":"/mycard520/category/cardgame","parameters":{"category":{"description":"分类，默认为 `cardgame`，即最新游戏，可在对应分类页 URL 中找到","options":[{"label":"最新游戏","value":"cardgame"},{"label":"手机游戏","value":"cardgame-mobile"},{"label":"PC 游戏","value":"cardgame-pc"},{"label":"电竞赛事","value":"cardgame-esports"},{"label":"实况直播","value":"cardgame-live"}]}},"description":"::: tip\n若订阅 [最新游戏](https://app.mycard520.com.tw/category/cardgame/)，网址为 `https://app.mycard520.com.tw/category/cardgame/`，请截取 `https://app.mycard520.com.tw/category/` 到末尾 `/` 的部分 `cardgame` 作为 `category` 参数填入，此时目标路由为 [`/mycard520/category/cardgame`](https://rsshub.app/mycard520/category/cardgame)。\n:::\n\n| [最新游戏](https://app.mycard520.com.tw/category/cardgame/) | [手机游戏](https://app.mycard520.com.tw/category/cardgame-mobile/)       | [PC 游戏](https://app.mycard520.com.tw/category/cardgame-pc/)    | [电竞赛事](https://app.mycard520.com.tw/category/cardgame-esports/)        | [实况直播](https://app.mycard520.com.tw/category/cardgame-live/)     |\n| ----------------------------------------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------- |\n| [cardgame](https://rsshub.app/mycard520/category/cardgame)  | [cardgame-mobile](https://rsshub.app/mycard520/category/cardgame-mobile) | [cardgame-pc](https://rsshub.app/mycard520/category/cardgame-pc) | [cardgame-esports](https://rsshub.app/mycard520/category/cardgame-esports) | [cardgame-live](https://rsshub.app/mycard520/category/cardgame-live) |\n"},"location":"news.ts","heat":1,"topFeeds":[{"id":"126442262783461376","type":"feed","url":"rsshub://mycard520/category/cardgame","title":"最新遊戲 - 新聞 - MyCard娛樂中心","description":"MyCard,手機遊戲,金流,SDK,儲值,教學,教程,手遊,點數卡,線上購買 - Powered by RSSHub","image":"https://image.mycard520.com/globalmycard/member/soyo/soyo_logo_tw.svg"}]}' :test='{"code":0}' />

::: tip
若订阅 [最新遊戲](https://app.mycard520.com.tw/category/cardgame/)，网址为 `https://app.mycard520.com.tw/category/cardgame/`，请截取 `https://app.mycard520.com.tw/category/` 到末尾 `/` 的部分 `cardgame` 作为 `category` 参数填入，此时目标路由为 [`/mycard520/category/cardgame`](https://rsshub.app/mycard520/category/cardgame)。
:::

| [最新遊戲](https://app.mycard520.com.tw/category/cardgame/) | [手機遊戲](https://app.mycard520.com.tw/category/cardgame-mobile/)       | [PC 遊戲](https://app.mycard520.com.tw/category/cardgame-pc/)    | [電競賽事](https://app.mycard520.com.tw/category/cardgame-esports/)        | [實況直播](https://app.mycard520.com.tw/category/cardgame-live/)     |
| ----------------------------------------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [cardgame](https://rsshub.app/mycard520/category/cardgame)  | [cardgame-mobile](https://rsshub.app/mycard520/category/cardgame-mobile) | [cardgame-pc](https://rsshub.app/mycard520/category/cardgame-pc) | [cardgame-esports](https://rsshub.app/mycard520/category/cardgame-esports) | [cardgame-live](https://rsshub.app/mycard520/category/cardgame-live) |


## World of Warships <Site url="worldofwarships.com"/>

Tip: use proxy if necessary.

### Development Blog <Site url="worldofwarships.com" size="sm" />

<Route namespace="worldofwarships" :data='{"path":"/devblog","categories":["game"],"example":"/worldofwarships/devblog","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["blog.worldofwarships.com"],"target":"/devblog"}],"name":"Development Blog","maintainers":["SinCerely023"],"location":"devblog.ts","heat":1,"topFeeds":[{"id":"85355522307031040","type":"feed","url":"rsshub://worldofwarships/devblog","title":"World of Warships - Development Blog","description":"World of Warships - Development Blog - Powered by RSSHub","image":"https://wows-web-static.wgcdn.co/wowsblog/f604319d/images/favicons/wows/blog_apple_touch_180.png"}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 游讯网 <Site url="yxdown.com"/>

### 资讯 <Site url="yxdown.com" size="sm" />

<Route namespace="yxdown" :data='{"path":"/news/:category?","categories":["game"],"example":"/yxdown/news","parameters":{"category":"分类，见下表，默认为资讯首页"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"资讯","maintainers":["nczitzk"],"description":"| 资讯首页 | 业界动态 | 视频预告 | 新作发布 | 游戏资讯 | 游戏评测 | 网络游戏 | 手机游戏 |\n| -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |\n|          | dongtai  | yugao    | xinzuo   | zixun    | pingce   | wangluo  | shouyou  |","location":"news.ts","heat":1,"topFeeds":[{"id":"177651896292778038","type":"feed","url":"rsshub://yxdown/news","title":"Importing","description":null,"image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 资讯首页 | 业界动态 | 视频预告 | 新作发布 | 游戏资讯 | 游戏评测 | 网络游戏 | 手机游戏 |
| -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
|          | dongtai  | yugao    | xinzuo   | zixun    | pingce   | wangluo  | shouyou  |

### 精彩推荐 <Site url="yxdown.com/" size="sm" />

<Route namespace="yxdown" :data='{"path":"/recommend","categories":["game"],"example":"/yxdown/recommend","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yxdown.com/"]}],"name":"精彩推荐","maintainers":["nczitzk"],"url":"yxdown.com/","location":"recommend.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## Azur Lane <Site url="azurlane.jp"/>

### News <Site url="azurlane.jp" size="sm" />

<Route namespace="azurlane" :data='{"path":"/news/:server/:type?","name":"News","categories":["game"],"maintainers":["AnitsuriW"],"example":"/azurlane/news/jp/0","parameters":{"server":"game server (ISO 3166 two-letter country code, case-insensitive), only `JP` is supported for now","type":"news type, see the table below, `0` by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"description":"| すべて | お知らせ | イベント | メインテナンス | 重要 |\n| :--: | :--: | :--: | :--: | :--: |\n| 0 | 1 | 2 | 3 | 4 |","location":"news.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

| すべて | お知らせ | イベント | メインテナンス | 重要 |
| :--: | :--: | :--: | :--: | :--: |
| 0 | 1 | 2 | 3 | 4 |

## DeadbyDaylight <Site url="deadbydaylight.com"/>


      DeadbyDaylight Official
    

### Latest News <Site url="deadbydaylight.com" size="sm" />

<Route namespace="deadbydaylight" :data='{"path":"/blog","categories":["game"],"example":"/deadbydaylight/blog","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["deadbydaylight.com/news"],"target":"/news"}],"name":"Latest News","maintainers":["NeverBehave"],"location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"Error: STACK_TRACE_ERROR\n    at task (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:633:27)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:660:16)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:457:28)\n    at chain (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/chunk-tasks.js:9:14)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:72:12\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:40\n    at runWithSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1588:8)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:10)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:739:54)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at collectTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1048:25)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1556:17)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:85:25)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:153:2)\n    at executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/init-forks.aqTzCSR2.js:29:4)"}' />

## 游戏基因 <Site url="news.gamegene.cn"/>

### 资讯 <Site url="news.gamegene.cn/news" size="sm" />

<Route namespace="gamegene" :data='{"path":"/news","categories":["game"],"example":"/gamegene/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["news.gamegene.cn/news"]}],"name":"资讯","maintainers":["lone1y-51"],"url":"news.gamegene.cn/news","location":"news.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## Gamer Secret <Site url="gamersecret.com"/>

### Category <Site url="gamersecret.com" size="sm" />

<Route namespace="gamersecret" :data='{"path":"/:type?/:category?","categories":["game"],"example":"/gamersecret","parameters":{"type":"Type, see below, Latest News by default","category":"Category, see below"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gamersecret.com/:type","gamersecret.com/:type/:category","gamersecret.com/"]}],"name":"Category","maintainers":["nczitzk"],"description":"| Latest News | PC | Playstation | Nintendo | Xbox | Moblie |\n| ----------- | -- | ----------- | -------- | ---- | ------ |\n| latest-news | pc | playstation | nintendo | xbox | moblie |\n\n  Or\n\n| GENERAL          | GENERAL EN         | MOBILE          | MOBILE EN         |\n| ---------------- | ------------------ | --------------- | ----------------- |\n| category/general | category/generalen | category/mobile | category/mobileen |\n\n| NINTENDO          | NINTENDO EN         | PC          | PC EN         |\n| ----------------- | ------------------- | ----------- | ------------- |\n| category/nintendo | category/nintendoen | category/pc | category/pcen |\n\n| PLAYSTATION          | PLAYSTATION EN         | REVIEWS          |\n| -------------------- | ---------------------- | ---------------- |\n| category/playstation | category/playstationen | category/reviews |\n\n| XBOX          | XBOX EN         |\n| ------------- | --------------- |\n| category/xbox | category/xboxen |","location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| Latest News | PC | Playstation | Nintendo | Xbox | Moblie |
| ----------- | -- | ----------- | -------- | ---- | ------ |
| latest-news | pc | playstation | nintendo | xbox | moblie |

  Or

| GENERAL          | GENERAL EN         | MOBILE          | MOBILE EN         |
| ---------------- | ------------------ | --------------- | ----------------- |
| category/general | category/generalen | category/mobile | category/mobileen |

| NINTENDO          | NINTENDO EN         | PC          | PC EN         |
| ----------------- | ------------------- | ----------- | ------------- |
| category/nintendo | category/nintendoen | category/pc | category/pcen |

| PLAYSTATION          | PLAYSTATION EN         | REVIEWS          |
| -------------------- | ---------------------- | ---------------- |
| category/playstation | category/playstationen | category/reviews |

| XBOX          | XBOX EN         |
| ------------- | --------------- |
| category/xbox | category/xboxen |

## LastOrigin <Site url="www.last-origin.com"/>

### News <Site url="www.last-origin.com" size="sm" />

<Route namespace="last-origin" :data='{"path":"/news","name":"News","url":"www.last-origin.com","maintainers":["gudezhi"],"example":"/last-origin/news","parameters":{},"categories":["game"],"features":{"supportRadar":true},"radar":[{"source":["www.last-origin.com/news.html","www.last-origin.com"],"target":"/news"}],"description":"","location":"news.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## 英雄联盟 <Site url="lol.garena.tw"/>

### 台服新闻 <Site url="lol.garena.tw" size="sm" />

<Route namespace="loltw" :data='{"path":"/news/:category?","categories":["game"],"example":"/loltw/news","parameters":{"category":"新闻分类，置空为全部新闻"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"台服新闻","maintainers":["hoilc"],"description":"| 活动  | 资讯 | 系统   | 电竞   | 版本资讯 | 战棋资讯 |\n| ----- | ---- | ------ | ------ | -------- | -------- |\n| event | info | system | esport | patch    | TFTpatch |","location":"news.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 活动  | 资讯 | 系统   | 电竞   | 版本资讯 | 战棋资讯 |
| ----- | ---- | ------ | ------ | -------- | -------- |
| event | info | system | esport | patch    | TFTpatch |

## osu! <Site url="osu.ppy.sh"/>

### Latest Ranked Beatmap <Site url="osu.ppy.sh" size="sm" />

<Route namespace="osu" :data='{"path":"/latest-ranked/:routeParams?","categories":["game"],"example":"/osu/latest-ranked/includeMode=osu&difficultyLimit=L3&difficultyLimit=U7","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false,"supportRadar":true},"parameters":{"routeParams":{"description":"Used to pass route parameters in Query String format. Check out route description for more info.","default":"null"}},"name":"Latest Ranked Beatmap","description":"\nSubscribe to the new beatmaps on https://osu.ppy.sh/beatmapsets.\n\n#### Parameter Description\n\nParameters allows you to:\n\n- Filter game mode\n- Limit beatmap difficulty\n- Show/hide game mode in feed title\n\nBelow is a table of all allowed parameters passed to `routeParams`\n\n\n| Name              | Default  | Description                                                                                                                                                                                                                                          |\n| ----------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `includeMode`     | All mode | Could be `osu`, `mania`, `fruits` or `taiko`. Specify included game mode of beatmaps. Including this paramseter multiple times to specify multiple game modes, e.g.: `includeMode=osu&includeMode=mania`. Subscribe to all game modes if not specified |\n| `difficultyLimit` | None     | Lower/upper limit of star rating of the beatmaps in the beatmapset item, e.g.:`difficultyLimit=U6`. Checkout tips in descriptions for detailed explaination and examples.                                                                            |\n| `modeInTitle`     | `true`   | `true` or `false` Add mode info into feed title.\n\n\nThis actual parameters should be passed as `routeParams` in URL Query String format without `?`, e.g.:\n\n    /osu/latest-ranked/modeInTitle=true&includeMode=osu\n\n::: tip\nYou could make use of `difficultyLimit` paramters to create a \"high difficulty/low difficulty only\" only feed.\n\nFor example, if you only wants to play low star rating beatmap like 1 or 2 star, you could subscribe to:\n\n    /osu/latest-ranked/difficultyLimit=U2\n\nThis will filter out all beatmapsets that do not provide at least one beatmap with star rating<=`2.00`.\n\nSimilarly, you could use lower bound to filter out beatmapsets which don&#39;t have at least one beatmap\nwith star rating higher than a certain threshold.\n\n    /osu/latest-ranked/difficultyLimit=L6\n\nNow all beatmapsets that don&#39;t provided at least one beatmap with star rating higher than `6.00` will be filtered.\n:::","maintainers":["nfnfgo"],"radar":[{"source":["osu.ppy.sh/beatmapsets"]}],"location":"beatmaps/latest-ranked.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />


Subscribe to the new beatmaps on https://osu.ppy.sh/beatmapsets.

#### Parameter Description

Parameters allows you to:

- Filter game mode
- Limit beatmap difficulty
- Show/hide game mode in feed title

Below is a table of all allowed parameters passed to `routeParams`


| Name              | Default  | Description                                                                                                                                                                                                                                          |
| ----------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `includeMode`     | All mode | Could be `osu`, `mania`, `fruits` or `taiko`. Specify included game mode of beatmaps. Including this paramseter multiple times to specify multiple game modes, e.g.: `includeMode=osu&includeMode=mania`. Subscribe to all game modes if not specified |
| `difficultyLimit` | None     | Lower/upper limit of star rating of the beatmaps in the beatmapset item, e.g.:`difficultyLimit=U6`. Checkout tips in descriptions for detailed explaination and examples.                                                                            |
| `modeInTitle`     | `true`   | `true` or `false` Add mode info into feed title.


This actual parameters should be passed as `routeParams` in URL Query String format without `?`, e.g.:

    /osu/latest-ranked/modeInTitle=true&includeMode=osu

::: tip
You could make use of `difficultyLimit` paramters to create a "high difficulty/low difficulty only" only feed.

For example, if you only wants to play low star rating beatmap like 1 or 2 star, you could subscribe to:

    /osu/latest-ranked/difficultyLimit=U2

This will filter out all beatmapsets that do not provide at least one beatmap with star rating<=`2.00`.

Similarly, you could use lower bound to filter out beatmapsets which don't have at least one beatmap
with star rating higher than a certain threshold.

    /osu/latest-ranked/difficultyLimit=L6

Now all beatmapsets that don't provided at least one beatmap with star rating higher than `6.00` will be filtered.
:::

### Beatmap Packs <Site url="osu.ppy.sh" size="sm" />

<Route namespace="osu" :data='{"path":"/packs/:type?","categories":["game"],"example":"/osu/packs","parameters":{"type":"pack type, default to `standard`, can choose from `featured`, `tournament`, `loved`, `chart`, `theme` and `artist`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Beatmap Packs","maintainers":["JimenezLi"],"location":"beatmaps/packs.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## Warhammer Community <Site url="www.warhammer-community.com/en-gb/"/>

### News <Site url="www.warhammer-community.com/en-gb/all-news-and-features/" size="sm" />

<Route namespace="warhammer-community" :data='{"path":"/news","categories":["game"],"example":"/warhammer-community/news","radar":[{"source":["www.warhammer-community.com/en-gb/all-news-and-features/","www.warhammer-community.com/en-gb/"]}],"name":"News","maintainers":["TonyRL"],"url":"www.warhammer-community.com/en-gb/all-news-and-features/","location":"news.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

