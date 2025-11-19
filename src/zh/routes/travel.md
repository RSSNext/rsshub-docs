# 🛫 出行旅游

## National Geographic <Site url="nationalgeographic.com"/>

### 分类 <Site url="nationalgeographic.com" size="sm" />

<Route namespace="natgeo" :data='{"path":"/:cat/:type?","categories":["travel"],"example":"/natgeo/environment/article","parameters":{"cat":"分类","type":"类型, 例如`https://www.natgeomedia.com/environment/photo/`对应 `cat`, `type` 分别为 `environment`, `photo`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["natgeomedia.com/:cat/:type","natgeomedia.com/:cat/","natgeomedia.com/"],"target":"/:cat/:type?"}],"name":"分类","maintainers":["fengkx"],"location":"natgeo.ts","heat":309,"topFeeds":[{"id":"59442359778246659","type":"feed","url":"rsshub://natgeo/environment/article","title":"文章總匯 - 國家地理雜誌官方網站｜探索自然、科學與文化的最佳權","description":"國家地理雜誌｜呈現最新的自然、科學、生態與文化專題報導。探索動物保護、環境變遷、考古發現等豐富內容，並通過精美的攝影和深度分析，帶您深入了解世界各地的故事與現象。 - Powered by RSSHub","image":"https://www.natgeomedia.com/img/app_icon.png"},{"id":"67036766288113664","type":"feed","url":"rsshub://natgeo/travel/photo","title":"每日一圖 - 國家地理雜誌官方網站｜探索自然、科學與文化的最佳權","description":"國家地理雜誌｜呈現最新的自然、科學、生態與文化專題報導。探索動物保護、環境變遷、考古發現等豐富內容，並通過精美的攝影和深度分析，帶您深入了解世界各地的故事與現象。 - Powered by RSSHub","image":"https://www.natgeomedia.com/img/app_icon.png"}]}' :test='{"code":0}' />

## 飞客茶馆 <Site url="flyert.com.cn"/>

### 信用卡 <Site url="flyert.com/" size="sm" />

<Route namespace="flyert" :data='{"path":"/creditcard/:bank","categories":["travel"],"example":"/flyert/creditcard/zhongxin","parameters":{"bank":"信用卡板块各银行的拼音简称"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["flyert.com.cn/"]}],"name":"信用卡","maintainers":["nicolaszf"],"url":"flyert.com/","description":"| 信用卡模块 | bank          |\n| ---------- | ------------- |\n| 国内信用卡 | creditcard    |\n| 浦发银行   | pufa          |\n| 招商银行   | zhaoshang     |\n| 中信银行   | zhongxin      |\n| 交通银行   | jiaotong      |\n| 中国银行   | zhonghang     |\n| 工商银行   | gongshang     |\n| 广发银行   | guangfa       |\n| 农业银行   | nongye        |\n| 建设银行   | jianshe       |\n| 汇丰银行   | huifeng       |\n| 民生银行   | mingsheng     |\n| 兴业银行   | xingye        |\n| 花旗银行   | huaqi         |\n| 上海银行   | shanghai      |\n| 无卡支付   | wuka          |\n| 投资理财   | 137           |\n| 网站权益汇 | 145           |\n| 境外信用卡 | intcreditcard |","location":"creditcard.ts","heat":160,"topFeeds":[{"id":"55873225615650816","type":"feed","url":"rsshub://flyert/creditcard/creditcard","title":"飞客茶馆信用卡 - 国内信用卡","description":"飞客茶馆信用卡 - 国内信用卡 - Powered by RSSHub","image":null},{"id":"56955741222491136","type":"feed","url":"rsshub://flyert/creditcard/zhaoshang","title":"飞客茶馆信用卡 - 招商银行","description":"飞客茶馆信用卡 - 招商银行 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 信用卡模块 | bank          |
| ---------- | ------------- |
| 国内信用卡 | creditcard    |
| 浦发银行   | pufa          |
| 招商银行   | zhaoshang     |
| 中信银行   | zhongxin      |
| 交通银行   | jiaotong      |
| 中国银行   | zhonghang     |
| 工商银行   | gongshang     |
| 广发银行   | guangfa       |
| 农业银行   | nongye        |
| 建设银行   | jianshe       |
| 汇丰银行   | huifeng       |
| 民生银行   | mingsheng     |
| 兴业银行   | xingye        |
| 花旗银行   | huaqi         |
| 上海银行   | shanghai      |
| 无卡支付   | wuka          |
| 投资理财   | 137           |
| 网站权益汇 | 145           |
| 境外信用卡 | intcreditcard |

### 优惠信息 <Site url="flyert.com/" size="sm" />

<Route namespace="flyert" :data='{"path":"/preferential","categories":["travel"],"example":"/flyert/preferential","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["flyert.com/"]}],"name":"优惠信息","maintainers":["howel52"],"url":"flyert.com/","location":"preferential.ts","heat":26,"topFeeds":[{"id":"56540861752061952","type":"feed","url":"rsshub://flyert/preferential","title":"飞客茶馆优惠","description":"飞客茶馆优惠 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## National Geographic <Site url="www.nationalgeographic.com"/>

### Latest Stories <Site url="www.nationalgeographic.com/pages/topic/latest-stories" size="sm" />

<Route namespace="nationalgeographic" :data='{"path":"/latest-stories","categories":["travel"],"example":"/nationalgeographic/latest-stories","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.nationalgeographic.com/pages/topic/latest-stories"]}],"name":"Latest Stories","maintainers":["miles170"],"url":"www.nationalgeographic.com/pages/topic/latest-stories","location":"latest-stories.ts","heat":134,"topFeeds":[{"id":"47544732473072640","type":"feed","url":"rsshub://nationalgeographic/latest-stories","title":"Latest Stories from National Geographic","description":"Latest Stories from National Geographic - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 走进日本 <Site url="www.nippon.com"/>

### 政治外交 <Site url="www.nippon.com" size="sm" />

<Route namespace="nippon" :data='{"path":"/:category?","categories":["travel"],"example":"/nippon/Politics","parameters":{"category":"默认政治，可选如下"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.nippon.com/nippon/:category?","www.nippon.com/cn"]}],"name":"政治外交","description":"| 政治     | 经济    | 社会    | 展览预告 | 焦点专题           | 深度报道 | 话题         | 日本信息库 | 日本一蹩      | 人物访谈 | 编辑部通告    |\n| -------- | ------- | ------- | -------- | ------------------ | -------- | ------------ | ---------- | ------------- | -------- | ------------- |\n| Politics | Economy | Society | Culture  | Science,Technology | In-depth | japan-topics | japan-data | japan-glances | People   | Announcements |","maintainers":["laampui"],"location":"index.ts","heat":40,"topFeeds":[{"id":"56644563871459336","type":"feed","url":"rsshub://nippon/Politics","title":"走进日本 - Politics","description":"走进日本 - Politics - Powered by RSSHub","image":null},{"id":"82398566855976960","type":"feed","url":"rsshub://nippon/Society","title":"走进日本 - Society","description":"走进日本 - Society - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"Error: STACK_TRACE_ERROR\n    at task (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:633:27)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:660:16)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:457:28)\n    at chain (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/chunk-tasks.js:9:14)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:72:12\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:40\n    at runWithSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1588:8)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:10)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:739:54)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at collectTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1048:25)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1556:17)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:85:25)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:153:2)\n    at executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/init-forks.aqTzCSR2.js:29:4)"}' />

| 政治     | 经济    | 社会    | 展览预告 | 焦点专题           | 深度报道 | 话题         | 日本信息库 | 日本一蹩      | 人物访谈 | 编辑部通告    |
| -------- | ------- | ------- | -------- | ------------------ | -------- | ------------ | ---------- | ------------- | -------- | ------------- |
| Politics | Economy | Society | Culture  | Science,Technology | In-depth | japan-topics | japan-data | japan-glances | People   | Announcements |

## 12306 <Site url="kyfw.12306.cn"/>

### 最新动态 <Site url="www.12306.cn/" size="sm" />

<Route namespace="12306" :data='{"path":"/zxdt/:id?","categories":["travel"],"example":"/12306/zxdt","parameters":{"id":"铁路局id，可在 URL 中找到，不填默认显示所有铁路局动态"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.12306.cn/","www.12306.cn/mormhweb/1/:id/index_fl.html"],"target":"/zxdt/:id"}],"name":"最新动态","maintainers":["LogicJake"],"url":"www.12306.cn/","location":"zxdt.ts","heat":12,"topFeeds":[{"id":"68654231072089088","type":"feed","url":"rsshub://12306/zxdt","title":"最新动态","description":"最新动态 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected NaN to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 售票信息 <Site url="kyfw.12306.cn" size="sm" />

<Route namespace="12306" :data='{"path":"/:date/:from/:to/:type?","categories":["travel"],"example":"/12306/2022-02-19/重庆/永川东","parameters":{"date":"时间，格式为（YYYY-MM-DD）","from":"始发站","to":"终点站","type":"售票类型，成人和学生可选，默认为成人"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"售票信息","maintainers":["Fatpandac"],"location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## National Museum Of China <Site url="www.chnmuseum.cn"/>

中国国家博物馆（National Museum of China）位于北京市中心天安门广场东侧，东长安街南侧，与人民大会堂东西相对称，是一座系统展示中华民族文化历史的综合性博物馆，也是世界上最大的博物馆之一。

### 资讯专题 <Site url="www.chnmuseum.cn" size="sm" />

<Route namespace="chnmuseum" :data='{"path":"/zx/xwzt","categories":["travel"],"example":"/zx/xwzt","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["chnmuseum.cn/zx/xwzt"],"target":"/zx/xwzt"}],"name":"资讯专题","maintainers":["ShabbyWhineYear"],"location":"xwzt.ts","heat":3,"topFeeds":[{"id":"145466808887686144","type":"feed","url":"rsshub://chnmuseum/zx/xwzt","title":"中国国家博物馆资讯专题","description":"中国国家博物馆资讯专题 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 404 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 资讯要闻 <Site url="www.chnmuseum.cn" size="sm" />

<Route namespace="chnmuseum" :data='{"path":"/zx/xingnew","categories":["travel"],"example":"/zx/xingnew","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["chnmuseum.cn/zx/xingnew"],"target":"/zx/xingnew"}],"name":"资讯要闻","maintainers":["ShabbyWhineYear"],"location":"xingnew.ts","heat":1,"topFeeds":[{"id":"145351321838264320","type":"feed","url":"rsshub://chnmuseum/zx/xingnew","title":"中国国家博物馆资讯要闻","description":"中国国家博物馆资讯要闻 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 404 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 中国国际航空公司 <Site url="www.airchina.com.cn"/>

### 服务公告 <Site url="www.airchina.com.cn/" size="sm" />

<Route namespace="airchina" :data='{"path":"/announcement","categories":["travel"],"example":"/airchina/announcement","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.airchina.com.cn/"]}],"name":"服务公告","maintainers":["LandonLi"],"url":"www.airchina.com.cn/","location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## Alto - Toronto-Québec City High-Speed Rail Network <Site url="altotrain.ca"/>

### Alto News <Site url="altotrain.ca" size="sm" />

<Route namespace="altotrain" :data='{"path":"/:language?","categories":["travel"],"example":"/altotrain/en","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["altotrain.ca/:language","altotrain.ca/:language/news","altotrain.ca/:language/nouvelles"],"target":"/:language"}],"name":"Alto News","maintainers":["elibroftw"],"location":"news.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## Brooklyn Museum <Site url="www.brooklynmuseum.org"/>

### Exhibitions <Site url="www.brooklynmuseum.org" size="sm" />

<Route namespace="brooklynmuseum" :data='{"path":"/exhibitions/:state?","categories":["travel"],"example":"/brooklynmuseum/exhibitions","parameters":{"state":"展览进行的状态：`current` 对应展览当前正在进行，`past` 对应过去的展览，`upcoming` 对应即将举办的展览，默认为 `current`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Exhibitions","maintainers":[],"location":"exhibitions.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 福州地铁 <Site url="www.fzmtr.com"/>

### 通知公告 <Site url="www.fzmtr.com" size="sm" />

<Route namespace="fzmtr" :data='{"path":"/announcements","categories":["travel"],"example":"/fzmtr/announcements","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"通知公告","maintainers":["HankChow"],"location":"announcements.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 广州地铁 <Site url="www.gzmtr.com"/>

### 新闻 <Site url="www.gzmtr.com" size="sm" />

<Route namespace="guangzhoumetro" :data='{"path":"/news","categories":["travel"],"example":"/guangzhoumetro/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"新闻","maintainers":["HankChow"],"location":"news.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## The Jewish Museum <Site url="thejewishmuseum.org"/>

### Exhibitions <Site url="thejewishmuseum.org" size="sm" />

<Route namespace="jewishmuseum" :data='{"path":"/exhibitions","categories":["travel"],"example":"/jewishmuseum/exhibitions","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Exhibitions","maintainers":["chazeon"],"location":"exhibitions.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## New Museum <Site url="www.newmuseum.org"/>

### Exhibitions <Site url="www.newmuseum.org" size="sm" />

<Route namespace="newmuseum" :data='{"path":"/exhibitions","categories":["travel"],"example":"/newmuseum/exhibitions","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Exhibitions","maintainers":["chazeon"],"location":"exhibitions.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## YAMAP <Site url="yamap.com"/>

### 文章 <Site url="yamap.com" size="sm" />

<Route namespace="yamap" :data='{"path":"/","categories":["travel"],"example":"/yamap","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"文章","maintainers":["valuex"],"description":"","location":"articles.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

