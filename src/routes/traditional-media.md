# 📰 Traditional media

## 财新博客 <Site url="caixin.com"/>

> 网站部分内容需要付费订阅，RSS 仅做更新提醒，不含付费内容。若需要得到付费内容全文，请使用订阅账户在手机网页版登录，然后设置`CAIXIN_COOKIE`为至少包含cookie中的以下字段: `SA_USER_UID`, `SA_USER_UNIT`, `SA_USER_DEVICE_TYPE`, `USER_LOGIN_CODE`

### 最新文章 <Site url="caixin.com/" size="sm" />

<Route namespace="caixin" :data='{"path":"/latest","categories":["traditional-media","popular"],"view":0,"example":"/caixin/latest","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["caixin.com/"]}],"name":"最新文章","maintainers":["tpnonthealps"],"url":"caixin.com/","description":"说明：此 RSS feed 会自动抓取财新网的最新文章，但不包含 FM 及视频内容。订阅用户可根据文档设置环境变量后，在url传入`fulltext=`以解锁全文。","location":"latest.ts","heat":13192,"topFeeds":[{"id":"41443203209057309","type":"feed","url":"rsshub://caixin/latest","title":"财新网 - 最新文章","description":"财新网 - 最新文章 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

说明：此 RSS feed 会自动抓取财新网的最新文章，但不包含 FM 及视频内容。订阅用户可根据文档设置环境变量后，在url传入`fulltext=`以解锁全文。

### 财新周刊 <Site url="weekly.caixin.com/" size="sm" />

<Route namespace="caixin" :data='{"path":"/weekly","categories":["traditional-media"],"example":"/caixin/weekly","radar":[{"source":["weekly.caixin.com/","weekly.caixin.com/*"]}],"name":"财新周刊","maintainers":["TonyRL"],"url":"weekly.caixin.com/","location":"weekly.ts","heat":1016,"topFeeds":[{"id":"41572238273905698","type":"feed","url":"rsshub://caixin/weekly","title":"《财新周刊》-财新网","description":"《财新周刊》-财新网 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 首页新闻 <Site url="caixin.com/" size="sm" />

<Route namespace="caixin" :data='{"path":"/article","categories":["traditional-media"],"example":"/caixin/article","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":true,"supportScihub":false},"radar":[{"source":["caixin.com/"]}],"name":"首页新闻","maintainers":["EsuRt"],"url":"caixin.com/","location":"article.ts","heat":467,"topFeeds":[{"id":"41572238278099969","type":"feed","url":"rsshub://caixin/article","title":"财新网 - 首页","description":"财新网 - 首页 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 新闻分类 <Site url="caixin.com" size="sm" />

<Route namespace="caixin" :data='{"path":"/:column/:category","categories":["traditional-media"],"example":"/caixin/finance/regulation","parameters":{"column":"栏目名","category":"栏目下的子分类名"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":true,"supportScihub":false},"name":"新闻分类","maintainers":["idealclover"],"description":"Column 列表：\n\n| 经济    | 金融    | 政经  | 环科    | 世界          | 观点网  | 文化    | 周刊   |\n| ------- | ------- | ----- | ------- | ------------- | ------- | ------- | ------ |\n| economy | finance | china | science | international | opinion | culture | weekly |\n\n  以金融板块为例的 category 列表：（其余 column 以类似方式寻找）\n\n| 监管       | 银行 | 证券基金 | 信托保险         | 投资       | 创新       | 市场   |\n| ---------- | ---- | -------- | ---------------- | ---------- | ---------- | ------ |\n| regulation | bank | stock    | insurance_trust | investment | innovation | market |\n\n  Category 列表：\n\n| 封面报道   | 开卷  | 社论      | 时事             | 编辑寄语     | 经济    | 金融    | 商业     | 环境与科技              | 民生    | 副刊   |\n| ---------- | ----- | --------- | ---------------- | ------------ | ------- | ------- | -------- | ----------------------- | ------- | ------ |\n| coverstory | first | editorial | current_affairs | editor_desk | economy | finance | business | environment_technology | cwcivil | column |","location":"category.ts","heat":140,"topFeeds":[{"id":"42855045334971395","type":"feed","url":"rsshub://caixin/weekly/coverstory","title":"封面报道_财新周刊频道_财新网","description":"财新网 - 提供财经新闻及资讯服务 - Powered by RSSHub","image":null},{"id":"60143536924270599","type":"feed","url":"rsshub://caixin/finance/regulation","title":"监管_金融频道_财新网","description":"财新网 - 提供财经新闻及资讯服务 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

Column 列表：

| 经济    | 金融    | 政经  | 环科    | 世界          | 观点网  | 文化    | 周刊   |
| ------- | ------- | ----- | ------- | ------------- | ------- | ------- | ------ |
| economy | finance | china | science | international | opinion | culture | weekly |

  以金融板块为例的 category 列表：（其余 column 以类似方式寻找）

| 监管       | 银行 | 证券基金 | 信托保险         | 投资       | 创新       | 市场   |
| ---------- | ---- | -------- | ---------------- | ---------- | ---------- | ------ |
| regulation | bank | stock    | insurance_trust | investment | innovation | market |

  Category 列表：

| 封面报道   | 开卷  | 社论      | 时事             | 编辑寄语     | 经济    | 金融    | 商业     | 环境与科技              | 民生    | 副刊   |
| ---------- | ----- | --------- | ---------------- | ------------ | ------- | ------- | -------- | ----------------------- | ------- | ------ |
| coverstory | first | editorial | current_affairs | editor_desk | economy | finance | business | environment_technology | cwcivil | column |

### 财新数据通 <Site url="k.caixin.com/web" size="sm" />

<Route namespace="caixin" :data='{"path":"/database","categories":["traditional-media"],"example":"/caixin/database","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["k.caixin.com/web","k.caixin.com/"]}],"name":"财新数据通","maintainers":["nczitzk"],"url":"k.caixin.com/web","location":"database.ts","heat":82,"topFeeds":[{"id":"59040048063587328","type":"feed","url":"rsshub://caixin/database","title":"财新数据通 - 专享资讯","description":"财新数据通 - 专享资讯 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 财新一线 <Site url="caixin.com" size="sm" />

<Route namespace="caixin" :data='{"path":"/k","categories":["traditional-media"],"example":"/caixin/k","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":true,"supportScihub":false},"name":"财新一线","maintainers":["boypt"],"location":"k.ts","heat":42,"topFeeds":[{"id":"41835391477202944","type":"feed","url":"rsshub://caixin/k","title":"财新网 - 财新一线新闻","description":"财新网 - 财新一线新闻 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 联合早报 <Site url="www.zaobao.com"/>

::: warning
由于 [RSSHub#10309](https://github.com/DIYgod/RSSHub/issues/10309) 中的问题，使用靠近香港的服务器部署将从 hk 版联合早报爬取内容，造成输出的新闻段落顺序错乱。如有订阅此源的需求，建议寻求部署在远离香港的服务器上的 RSSHub，或者在自建时选择远离香港的服务器。
:::

### 即时新闻 <Site url="www.zaobao.com" size="sm" />

<Route namespace="zaobao" :data='{"path":"/realtime/:section?","categories":["traditional-media","popular"],"example":"/zaobao/realtime/china","parameters":{"section":"分类，缺省为 china"},"name":"即时新闻","maintainers":["shunf4"],"description":"| 中国  | 新加坡    | 国际  | 财经     |\n| ----- | --------- | ----- | -------- |\n| china | singapore | world | zfinance |","location":"realtime.ts","heat":6502,"topFeeds":[{"id":"67490527781761028","type":"feed","url":"rsshub://zaobao/realtime","title":"《联合早报》-中港台-即时","description":"新加坡、中国、亚洲和国际的即时、评论、商业、体育、生活、科技与多媒体新闻，尽在联合早报。 - Powered by RSSHub","image":"https://www.zaobao.com.sg/favicon.ico"},{"id":"41461870201364482","type":"feed","url":"rsshub://zaobao/realtime/china","title":"《联合早报》-中港台-即时","description":"新加坡、中国、亚洲和国际的即时、评论、商业、体育、生活、科技与多媒体新闻，尽在联合早报。 - Powered by RSSHub","image":"https://www.zaobao.com.sg/favicon.ico"}]}' :test='{"code":0}' />

| 中国  | 新加坡    | 国际  | 财经     |
| ----- | --------- | ----- | -------- |
| china | singapore | world | zfinance |

### 新闻 <Site url="www.zaobao.com" size="sm" />

<Route namespace="zaobao" :data='{"path":"/znews/:section?","categories":["traditional-media","popular"],"example":"/zaobao/znews/china","parameters":{"section":"分类，缺省为 china"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"新闻","maintainers":["shunf4"],"description":"| 中国  | 新加坡    | 东南亚 | 国际  | 体育   |\n| ----- | --------- | ------ | ----- | ------ |\n| china | singapore | sea    | world | sports |","location":"znews.ts","heat":1878,"topFeeds":[{"id":"41511702474276898","type":"feed","url":"rsshub://zaobao/znews/china","title":"《联合早报》-中国-新闻","description":"新加坡、中国、亚洲和国际的即时、评论、商业、体育、生活、科技与多媒体新闻，尽在联合早报。 - Powered by RSSHub","image":"https://www.zaobao.com.sg/favicon.ico"},{"id":"41511702474276899","type":"feed","url":"rsshub://zaobao/znews/world","title":"《联合早报》-国际-新闻","description":"新加坡、中国、亚洲和国际的即时、评论、商业、体育、生活、科技与多媒体新闻，尽在联合早报。 - Powered by RSSHub","image":"https://www.zaobao.com.sg/favicon.ico"}]}' :test='{"code":0}' />

| 中国  | 新加坡    | 东南亚 | 国际  | 体育   |
| ----- | --------- | ------ | ----- | ------ |
| china | singapore | sea    | world | sports |

### 其他栏目 <Site url="www.zaobao.com" size="sm" />

<Route namespace="zaobao" :data='{"path":"/other/:type?/:section?","categories":["traditional-media"],"example":"/zaobao/other/lifestyle/health","parameters":{"type":"https://www.zaobao.com/**lifestyle**/health 中的 **lifestyle**","section":"https://www.zaobao.com/lifestyle/**health** 中的 **health**"},"name":"其他栏目","maintainers":["shunf4"],"description":"除了上面两个兼容规则之外，联合早报网站里所有页面形如 [https://www.zaobao.com/lifestyle/health](https://www.zaobao.com/lifestyle/health) 这样的栏目都能被这个规则解析到，早报的大部分栏目都是这个样式的。你可以测试之后再订阅。","location":"other.ts","heat":110,"topFeeds":[{"id":"149086131447585792","type":"feed","url":"rsshub://zaobao/other/special/cnpol","title":"《联合早报》中国政情 - 专题特稿 | 联合早报","description":"新加坡、中国、亚洲和国际的即时、评论、商业、体育、生活、科技与多媒体新闻，尽在联合早报。 - Powered by RSSHub","image":"https://www.zaobao.com.sg/favicon.ico"},{"id":"114855620432737280","type":"feed","url":"rsshub://zaobao/other/forum/views","title":"《联合早报》时事与新闻评论 | 联合早报","description":"新加坡、中国、亚洲和国际的即时、评论、商业、体育、生活、科技与多媒体新闻，尽在联合早报。 - Powered by RSSHub","image":"https://www.zaobao.com.sg/favicon.ico"}]}' :test='{"code":0}' />

除了上面两个兼容规则之外，联合早报网站里所有页面形如 [https://www.zaobao.com/lifestyle/health](https://www.zaobao.com/lifestyle/health) 这样的栏目都能被这个规则解析到，早报的大部分栏目都是这个样式的。你可以测试之后再订阅。

### 互动新闻 <Site url="www.zaobao.com" size="sm" />

<Route namespace="zaobao" :data='{"path":"/interactive-graphics","categories":["traditional-media"],"example":"/zaobao/interactive-graphics","name":"互动新闻","maintainers":["shunf4"],"location":"interactive.ts","heat":15,"topFeeds":[{"id":"63408110264635392","type":"feed","url":"rsshub://zaobao/interactive-graphics","title":"《联合早报》互动新闻","description":"新加坡、中国、亚洲和国际的即时、评论、商业、体育、生活、科技与多媒体新闻，尽在联合早报。 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## The New York Times <Site url="nytimes.com"/>

### News <Site url="nytimes.com/" size="sm" />

<Route namespace="nytimes" :data='{"path":"/:lang?","categories":["traditional-media","popular"],"view":0,"example":"/nytimes/dual","parameters":{"lang":{"description":"language, default to Chinese","options":[{"value":"dual","label":"Chinese-English"},{"value":"en","label":"English"},{"value":"traditionalchinese","label":"Traditional Chinese"},{"value":"dual-traditionalchinese","label":"Chinese-English (Traditional Chinese)"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nytimes.com/"],"target":""}],"name":"News","maintainers":["HenryQW","pseudoyu"],"url":"nytimes.com/","description":"By extracting the full text of articles, we provide a better reading experience (full text articles) over the official one.","location":"index.ts","heat":7427,"topFeeds":[{"id":"41443203209057308","type":"feed","url":"rsshub://nytimes","title":"纽约时报中文网","description":"纽约时报中文网 - Powered by RSSHub","image":null},{"id":"41572238273905693","type":"feed","url":"rsshub://nytimes/dual","title":"纽约时报中文网 - 中英对照版","description":"纽约时报中文网 - 中英对照版 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

By extracting the full text of articles, we provide a better reading experience (full text articles) over the official one.

### Best Seller Books <Site url="nytimes.com/" size="sm" />

<Route namespace="nytimes" :data='{"path":"/book/:category?","categories":["traditional-media"],"view":5,"example":"/nytimes/book/combined-print-and-e-book-nonfiction","parameters":{"category":{"description":"Category, can be found on the [official page](https://www.nytimes.com/books/best-sellers/)","options":[{"value":"combined-print-and-e-book-nonfiction","label":"Combined Print & E-Book Nonfiction"},{"value":"hardcover-nonfiction","label":"Hardcover Nonfiction"},{"value":"paperback-nonfiction","label":"Paperback Nonfiction"},{"value":"advice-how-to-and-miscellaneous","label":"Advice, How-To & Miscellaneous"},{"value":"combined-print-and-e-book-fiction","label":"Combined Print & E-Book Fiction"},{"value":"hardcover-fiction","label":"Hardcover Fiction"},{"value":"trade-fiction-paperback","label":"Paperback Trade Fiction"},{"value":"childrens-middle-grade-hardcover","label":"Children&#39;s Middle Grade Hardcover"},{"value":"picture-books","label":"Picture Books"},{"value":"series-books","label":"Series Books"},{"value":"young-adult-hardcover","label":"Young Adult Hardcover"}],"default":"combined-print-and-e-book-nonfiction"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nytimes.com/"],"target":""}],"name":"Best Seller Books","maintainers":["melvinto","pseudoyu"],"url":"nytimes.com/","location":"book.ts","heat":646,"topFeeds":[{"id":"56271356825466880","type":"feed","url":"rsshub://nytimes/book/combined-print-and-e-book-nonfiction","title":"The New York Times Best Sellers - Combined Print & E-Book Nonfiction- November 23, 2025","description":"The New York Times Best Sellers - Combined Print & E-Book Nonfiction- November 23, 2025 - Powered by RSSHub","image":null},{"id":"62036724352164864","type":"feed","url":"rsshub://nytimes/book/combined-print-and-e-book-fiction","title":"The New York Times Best Sellers - Combined Print & E-Book Fiction- November 23, 2025","description":"The New York Times Best Sellers - Combined Print & E-Book Fiction- November 23, 2025 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### News <Site url="nytimes.com/" size="sm" />

<Route namespace="nytimes" :data='{"path":"/rss/:cat?","categories":["traditional-media"],"view":0,"example":"/nytimes/rss/HomePage","parameters":{"cat":{"description":"Category name, corresponding to the last segment of [official feed&#39;s](https://www.nytimes.com/rss) url."}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nytimes.com/"],"target":""}],"name":"News","maintainers":["HenryQW","pseudoyu","dzx-dzx"],"url":"nytimes.com/","description":"Enhance the official EN RSS feed","location":"rss.ts","heat":296,"topFeeds":[{"id":"76515556102948864","type":"feed","url":"rsshub://nytimes/rss","title":"纽约时报中文网","description":"纽约时报中文网 - Powered by RSSHub","image":null},{"id":"76533237937860608","type":"feed","url":"rsshub://nytimes/rss/HomePage","title":"NYT > Top Stories","description":"NYT > Top Stories - Powered by RSSHub","image":"{\"link\":\"https://www.nytimes.com\",\"url\":\"https://static01.nyt.com/images/misc/NYT_logo_rss_250x40.png\",\"title\":\"NYT > Top Stories\"}"}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

Enhance the official EN RSS feed

### Daily Briefing <Site url="nytimes.com/" size="sm" />

<Route namespace="nytimes" :data='{"path":"/daily_briefing_chinese","categories":["traditional-media"],"example":"/nytimes/daily_briefing_chinese","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nytimes.com/"],"target":""}],"name":"Daily Briefing","maintainers":["yueyericardo","nczitzk"],"url":"nytimes.com/","description":"URL: [https://www.nytimes.com/zh-hans/series/daily-briefing-chinese](https://www.nytimes.com/zh-hans/series/daily-briefing-chinese)","location":"daily-briefing-chinese.ts","heat":50,"topFeeds":[{"id":"148631391178206293","type":"feed","url":"rsshub://nytimes/daily_briefing_chinese","title":"Importing","description":null,"image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

URL: [https://www.nytimes.com/zh-hans/series/daily-briefing-chinese](https://www.nytimes.com/zh-hans/series/daily-briefing-chinese)

## Reuters <Site url="reuters.com"/>

::: tip
You can use `sophi=true` query parameter to invoke the **experimental** method, which can, if possible, fetch more articles(between 20 and 100) with `limit` given. But some articles from the old method might not be available.
:::

### Category/Topic/Author <Site url="reuters.com" size="sm" />

<Route namespace="reuters" :data='{"path":"/:category/:topic?","categories":["traditional-media","popular"],"view":0,"example":"/reuters/world/us","parameters":{"category":{"description":"find it in the URL, or tables below","options":[{"value":"world","label":"World"},{"value":"business","label":"Business"},{"value":"legal","label":"Legal"},{"value":"markets","label":"Markets"},{"value":"breakingviews","label":"Breakingviews"},{"value":"technology","label":"Technology"},{"value":"graphics","label":"Graphics"},{"value":"authors","label":"Authors"}],"default":"world"},"topic":"find it in the URL, or tables below, leave empty for `All`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["reuters.com/:category/:topic?","reuters.com/"]}],"name":"Category/Topic/Author","maintainers":["LyleLee","HenryQW","proletarius101","black-desk","nczitzk","pseudoyu"],"description":"-   `:category`:\n\n      | World | Business | Legal | Markets | Breakingviews | Technology | Graphics |\n      | ----- | -------- | ----- | ------- | ------------- | ---------- | -------- |\n      | world | business | legal | markets | breakingviews | technology | graphics |\n\n  -   `world/:topic`:\n\n      | All | Africa | Americas | Asia Pacific | China | Europe | India | Middle East | United Kingdom | United States | The Great Reboot | Reuters Next |\n      | --- | ------ | -------- | ------------ | ----- | ------ | ----- | ----------- | -------------- | ------------- | ---------------- | ------------ |\n      |     | africa | americas | asia-pacific | china | europe | india | middle-east | uk             | us            | the-great-reboot | reuters-next |\n\n  -   `business/:topic`:\n\n      | All | Aerospace & Defense | Autos & Transportation | Energy | Environment | Finance | Healthcare & Pharmaceuticals | Media & Telecom | Retail & Consumer | Sustainable Business | Charged | Future of Health | Future of Money | Take Five | Reuters Impact |\n      | --- | ------------------- | ---------------------- | ------ | ----------- | ------- | ---------------------------- | --------------- | ----------------- | -------------------- | ------- | ---------------- | --------------- | --------- | -------------- |\n      |     | aerospace-defense   | autos-transportation   | energy | environment | finance | healthcare-pharmaceuticals   | media-telecom   | retail-consumer   | sustainable-business | charged | future-of-health | future-of-money | take-five | reuters-impact |\n\n  -   `legal/:topic`:\n\n      | All | Government | Legal Industry | Litigation | Transactional |\n      | --- | ---------- | -------------- | ---------- | ------------- |\n      |     | government | legalindustry  | litigation | transactional |\n\n  -   `authors/:topic`:\n\n      | Default | Jonathan Landay | any other authors |\n      | ------- | --------------- | ----------------- |\n      | reuters | jonathan-landay | their name in URL |\n\n  More could be found in the URL of the category/topic page.","location":"common.ts","heat":5412,"topFeeds":[{"id":"42371779203556352","type":"feed","url":"rsshub://reuters/world","title":"World News | Latest Top Stories | Reuters","description":"Follow the latest international and world news, breaking stories and global current events from your trusted online news source. - Powered by RSSHub","image":"https://www.reuters.com/pf/resources/images/reuters/logo-vertical-default-512x512.png?d=116"},{"id":"41479290346361856","type":"feed","url":"rsshub://reuters/world/china","title":"China News | Today&#39;s Breaking Stories | Reuters","description":"Reuters.com is your online source for the latest China news stories and current events, ensuring our readers up to date with any breaking news developments - Powered by RSSHub","image":"https://www.reuters.com/pf/resources/images/reuters/logo-vertical-default-512x512.png?d=116"}]}' :test='{"code":0}' />

-   `:category`:

      | World | Business | Legal | Markets | Breakingviews | Technology | Graphics |
      | ----- | -------- | ----- | ------- | ------------- | ---------- | -------- |
      | world | business | legal | markets | breakingviews | technology | graphics |

  -   `world/:topic`:

      | All | Africa | Americas | Asia Pacific | China | Europe | India | Middle East | United Kingdom | United States | The Great Reboot | Reuters Next |
      | --- | ------ | -------- | ------------ | ----- | ------ | ----- | ----------- | -------------- | ------------- | ---------------- | ------------ |
      |     | africa | americas | asia-pacific | china | europe | india | middle-east | uk             | us            | the-great-reboot | reuters-next |

  -   `business/:topic`:

      | All | Aerospace & Defense | Autos & Transportation | Energy | Environment | Finance | Healthcare & Pharmaceuticals | Media & Telecom | Retail & Consumer | Sustainable Business | Charged | Future of Health | Future of Money | Take Five | Reuters Impact |
      | --- | ------------------- | ---------------------- | ------ | ----------- | ------- | ---------------------------- | --------------- | ----------------- | -------------------- | ------- | ---------------- | --------------- | --------- | -------------- |
      |     | aerospace-defense   | autos-transportation   | energy | environment | finance | healthcare-pharmaceuticals   | media-telecom   | retail-consumer   | sustainable-business | charged | future-of-health | future-of-money | take-five | reuters-impact |

  -   `legal/:topic`:

      | All | Government | Legal Industry | Litigation | Transactional |
      | --- | ---------- | -------------- | ---------- | ------------- |
      |     | government | legalindustry  | litigation | transactional |

  -   `authors/:topic`:

      | Default | Jonathan Landay | any other authors |
      | ------- | --------------- | ----------------- |
      | reuters | jonathan-landay | their name in URL |

  More could be found in the URL of the category/topic page.

### Inverstigates <Site url="reuters.com" size="sm" />

<Route namespace="reuters" :data='{"path":"/investigates","categories":["traditional-media"],"view":0,"example":"/reuters/investigates","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Inverstigates","maintainers":["LyleLee"],"location":"investigates.ts","heat":222,"topFeeds":[{"id":"55135298544041995","type":"feed","url":"rsshub://reuters/investigates","title":"Special Reports from Reuters journalists around the world | Reuters","description":"Special Reports from Reuters journalists around the world - Powered by RSSHub","image":"https://www.reuters.com/pf/resources/images/reuters/logo-vertical-default-512x512.png?d=116"}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 央视新闻 <Site url="news.cctv.com"/>

### 新闻联播 <Site url="tv.cctv.com/lm/xwlb" size="sm" />

<Route namespace="cctv" :data='{"path":"/:site/:category/:name","categories":["traditional-media","popular"],"example":"/cctv/tv/lm/xwlb","parameters":{"site":"站点, 可选值如&#39;tv&#39;, 既&#39;央视节目&#39;","category":"分类名, 官网对应分类, 当前可选值&#39;lm&#39;, 既&#39;栏目大全&#39;","name":{"description":"栏目名称, 可在对应栏目页面 URL 中找到, 可选值如&#39;xwlb&#39;,既&#39;新闻联播&#39;","options":[{"value":"xwlb","label":"新闻联播"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["tv.cctv.com/lm/xwlb","tv.cctv.com/"]}],"name":"新闻联播","maintainers":["zengxs"],"url":"tv.cctv.com/lm/xwlb","description":"新闻联播内容摘要。","location":"xwlb.ts","heat":4359,"topFeeds":[{"id":"59109731259240448","type":"feed","url":"rsshub://cctv/tv/lm/xwlb","title":"CCTV 新闻联播","description":"CCTV 新闻联播 - Powered by RSSHub","image":null},{"id":"152525246751160320","type":"feed","url":"rsshub://cctv/tv/Im/xwlb","title":"RSSHub","description":"undefined - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

新闻联播内容摘要。

### 专题 <Site url="news.cctv.com" size="sm" />

<Route namespace="cctv" :data='{"path":"/:category","categories":["traditional-media"],"example":"/cctv/world","parameters":{"category":"分类名"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["news.cctv.com/:category"]}],"name":"专题","maintainers":["idealclover","xyqfer"],"description":"| 新闻 | 国内  | 国际  | 社会    | 法治 | 文娱 | 科技 | 生活 | 教育 | 每周质量报告 | 新闻 1+1  |\n| ---- | ----- | ----- | ------- | ---- | ---- | ---- | ---- | ---- | ------------ | --------- |\n| news | china | world | society | law  | ent  | tech | life | edu  | mzzlbg       | xinwen1j1 |","location":"category.ts","heat":736,"topFeeds":[{"id":"41965184796581988","type":"feed","url":"rsshub://cctv/world","title":"央视新闻 world","description":"央视新闻 world - Powered by RSSHub","image":null},{"id":"41965184796581989","type":"feed","url":"rsshub://cctv/china","title":"央视新闻 china","description":"央视新闻 china - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 新闻 | 国内  | 国际  | 社会    | 法治 | 文娱 | 科技 | 生活 | 教育 | 每周质量报告 | 新闻 1+1  |
| ---- | ----- | ----- | ------- | ---- | ---- | ---- | ---- | ---- | ------------ | --------- |
| news | china | world | society | law  | ent  | tech | life | edu  | mzzlbg       | xinwen1j1 |

### 栏目 <Site url="news.cctv.com" size="sm" />

<Route namespace="cctv" :data='{"path":"/lm/:id?","categories":["traditional-media"],"example":"/cctv/lm/xwzk","parameters":{"id":"栏目 id，可在对应栏目页 URL 中找到，默认为 `xwzk` 即 新闻周刊"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["news.cctv.com/:category"],"target":"/:category"}],"name":"栏目","maintainers":["nczitzk"],"description":"| 焦点访谈 | 等着我 | 今日说法 | 开讲啦 |\n| -------- | ------ | -------- | ------ |\n| jdft     | dzw    | jrsf     | kjl    |\n\n| 正大综艺 | 经济半小时 | 第一动画乐园 |\n| -------- | ---------- | ------------ |\n| zdzy     | jjbxs      | dydhly       |\n\n::: tip\n  更多栏目请看 [这里](https://tv.cctv.com/lm)\n:::","location":"lm.ts","heat":192,"topFeeds":[{"id":"59165786861326336","type":"feed","url":"rsshub://cctv/lm/xwzk","title":"新闻周刊视频_央视网(cctv.com)","description":"眼下的中国,变化剧烈,选择什么样的新闻,以什么样的眼光,能将过去七天的中国浓缩在一本45分钟的电视新闻杂志里,是我们每天都在不停思索的问题。我们追求的是希望作一本有理想、有责任感、有尊严、能够记录历史的新闻杂志,而我们更期待的是,能在与您的沟通交流中获得启迪,因为这是我们一起经历的时代。 - Powered by RSSHub","image":null},{"id":"59774961107766272","type":"feed","url":"rsshub://cctv/lm/jdft","title":"焦点访谈视频_央视网(cctv.com)","description":"《焦点访谈》于1994年由中央电视台新闻评论部创办,节目定位是:时事追踪报道,新闻背景分析,社会热点透视,大众话题评说。它以深度报道为主,以舆论监督见长,是中央电视台收视率最高的栏目之一,多次获中国新闻界最高奖项。 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 焦点访谈 | 等着我 | 今日说法 | 开讲啦 |
| -------- | ------ | -------- | ------ |
| jdft     | dzw    | jrsf     | kjl    |

| 正大综艺 | 经济半小时 | 第一动画乐园 |
| -------- | ---------- | ------------ |
| zdzy     | jjbxs      | dydhly       |

::: tip
  更多栏目请看 [这里](https://tv.cctv.com/lm)
:::

### 央视网图片《镜象》 <Site url="photo.cctv.com/jx" size="sm" />

<Route namespace="cctv" :data='{"path":"/photo/jx","categories":["traditional-media"],"example":"/cctv/photo/jx","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["photo.cctv.com/jx","photo.cctv.com/"]}],"name":"央视网图片《镜象》","maintainers":["nczitzk"],"url":"photo.cctv.com/jx","location":"jx.ts","heat":21,"topFeeds":[{"id":"73416226546537472","type":"feed","url":"rsshub://cctv/photo/jx","title":"央视网图片《镜象》","description":"央视网图片《镜象》 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 有線新聞 <Site url="i-cable.com"/>

### 新聞 <Site url="www.i-cable.com/" size="sm" />

<Route namespace="i-cable" :data='{"path":"/news/:category?","categories":["traditional-media","popular"],"example":"/i-cable/news","parameters":{"category":"分類，默認為新聞資訊"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.i-cable.com"],"target":"/news"},{"source":["www.i-cable.com/category/:category"],"target":"/news/:category"}],"name":"新聞","maintainers":["quiniapiezoelectricity"],"url":"www.i-cable.com/","description":"\n::: tip\n分類只可用分類名稱，如：新聞資訊/港聞\n:::","location":"news.ts","heat":3586,"topFeeds":[{"id":"69780477411040256","type":"feed","url":"rsshub://i-cable/news","title":"有線新聞 - 新聞資訊","description":"涵蓋突發消息、最新熱話、本地時事、國際要聞、兩岸大事、專題報導，以及《家國天下》、《議員同你傾》、《有理有得傾》等多個焦點資訊節目。 - Powered by RSSHub","image":null},{"id":"78890994598313984","type":"feed","url":"rsshub://i-cable/news/%E4%B8%AD%E5%9C%8B%E5%9C%A8%E7%B7%9A","title":"有線新聞 - 中國在線","description":"有線新聞 - 中國在線 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />


::: tip
分類只可用分類名稱，如：新聞資訊/港聞
:::

## The Economist <Site url="economist.com"/>

### Espresso <Site url="economist.com/the-world-in-brief" size="sm" />

<Route namespace="economist" :data='{"path":"/espresso","categories":["traditional-media","popular"],"view":0,"example":"/economist/espresso","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["economist.com/the-world-in-brief","economist.com/espresso"]}],"name":"Espresso","maintainers":["TonyRL"],"url":"economist.com/the-world-in-brief","location":"espresso.ts","heat":2263,"topFeeds":[{"id":"41572238278099968","type":"feed","url":"rsshub://economist/espresso","title":"The world in brief | The Economist","description":"Catch up quickly on the global stories that matter - Powered by RSSHub","image":"https://www.economist.com/engassets/World-OG-image.png"}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Category <Site url="economist.com" size="sm" />

<Route namespace="economist" :data='{"path":"/:endpoint","categories":["traditional-media"],"view":0,"example":"/economist/latest","parameters":{"endpoint":"Category name, can be found on the [official page](https://www.economist.com/rss). For example, https://www.economist.com/china/rss.xml to china"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["economist.com/:endpoint"]}],"name":"Category","maintainers":["ImSingee"],"location":"full.ts","heat":988,"topFeeds":[{"id":"54859243036899328","type":"feed","url":"rsshub://economist/latest","title":"Latest Updates","description":"The most recent blogs and online articles from The Economist - Powered by RSSHub","image":null},{"id":"41461870197170199","type":"feed","url":"rsshub://economist/china","title":"China","description":"China - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Global Business Review <Site url="businessreview.global/" size="sm" />

<Route namespace="economist" :data='{"path":"/global-business-review/:language?","categories":["traditional-media"],"example":"/economist/global-business-review/cn-en","parameters":{"language":"Language, `en`, `cn`, `tw` are supported, support multiple options, default to cn-en"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["businessreview.global/"],"target":"/global-business-review"}],"name":"Global Business Review","maintainers":["prnake"],"url":"businessreview.global/","location":"global-business-review.ts","heat":3,"topFeeds":[{"id":"151955931879114755","type":"feed","url":"rsshub://economist/global-business-review/cn-en","title":"Importing","description":null,"image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 南方周末 <Site url="www.infzm.com"/>

### 频道 <Site url="www.infzm.com" size="sm" />

<Route namespace="infzm" :data='{"path":"/:id","parameters":{"id":"南方周末频道 id, 可在该频道的 URL 中找到（即 https://www.infzm.com/contents?term_id=:id)"},"categories":["traditional-media","popular"],"example":"/infzm/1","radar":[{"source":["infzm.com/contents"]}],"name":"频道","maintainers":["KarasuShin","ranpox","xyqfer"],"description":"下面给出部分参考：\n\n| 推荐 | 新闻 | 观点 | 文化 | 人物 | 影像 | 专题 | 生活 | 视频 |\n| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |\n| 1    | 2    | 3    | 4    | 7    | 8    | 6    | 5    | 131  |","location":"index.ts","heat":2623,"topFeeds":[{"id":"52508301310328842","type":"feed","url":"rsshub://infzm/2","title":"南方周末-新闻","description":"南方周末-新闻 - Powered by RSSHub","image":"https://www.infzm.com/favicon.ico"},{"id":"53873114655474703","type":"feed","url":"rsshub://infzm/156","title":"南方周末-南方人物周刊","description":"南方周末-南方人物周刊 - Powered by RSSHub","image":"https://www.infzm.com/favicon.ico"}]}' :test='{"code":0}' />

下面给出部分参考：

| 推荐 | 新闻 | 观点 | 文化 | 人物 | 影像 | 专题 | 生活 | 视频 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1    | 2    | 3    | 4    | 7    | 8    | 6    | 5    | 131  |

### 热门文章 <Site url="www.infzm.com" size="sm" />

<Route namespace="infzm" :data='{"path":"/hot","parameters":{},"categories":["traditional-media"],"example":"/infzm/hot","radar":[{"source":["infzm.com/"]}],"name":"热门文章","maintainers":["KarasuShin","ranpox","xyqfer"],"location":"hot.ts","heat":303,"topFeeds":[{"id":"62790413740228608","type":"feed","url":"rsshub://infzm/hot","title":"南方周末-热门文章","description":"南方周末-热门文章 - Powered by RSSHub","image":"https://www.infzm.com/favicon.ico"}]}' :test='{"code":0}' />

## Solidot <Site url="www.solidot.org"/>

### 最新消息 <Site url="www.solidot.org" size="sm" />

<Route namespace="solidot" :data='{"path":"/:type?","categories":["traditional-media","popular"],"view":0,"example":"/solidot/linux","parameters":{"type":{"description":"消息类型，在网站上方选择后复制子域名或参见 [https://www.solidot.org/index.rss](https://www.solidot.org/index.rss) 即可","options":[{"value":"www","label":"全部"},{"value":"startup","label":"创业"},{"value":"linux","label":"Linux"},{"value":"science","label":"科学"},{"value":"technology","label":"科技"},{"value":"mobile","label":"移动"},{"value":"apple","label":"苹果"},{"value":"hardware","label":"硬件"},{"value":"software","label":"软件"},{"value":"security","label":"安全"},{"value":"games","label":"游戏"},{"value":"books","label":"书籍"},{"value":"ask","label":"ask"},{"value":"idle","label":"idle"},{"value":"blog","label":"博客"},{"value":"cloud","label":"云计算"},{"value":"story","label":"奇客故事"}],"default":"www"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"最新消息","maintainers":["sgqy","hang333","TonyRL"],"location":"main.ts","heat":2577,"topFeeds":[{"id":"58477260865774592","type":"feed","url":"rsshub://solidot/www","title":"奇客的资讯，重要的东西","description":"奇客的资讯，重要的东西 - Powered by RSSHub","image":null},{"id":"61471459061869568","type":"feed","url":"rsshub://solidot/technology","title":"奇客的资讯，重要的东西","description":"奇客的资讯，重要的东西 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## BBC <Site url="bbc.com"/>

### News <Site url="bbc.com" size="sm" />

<Route namespace="bbc" :data='{"path":"/:site?/:channel?","name":"News","maintainers":["HenryQW","DIYgod","pseudoyu"],"example":"/bbc/world-asia","parameters":{"site":"语言，简体或繁体中文","channel":"channel, default to `top stories`"},"categories":["traditional-media","popular"],"description":"Provides a better reading experience (full text articles) over the official ones.\n\n    Support major channels, refer to [BBC RSS feeds](https://www.bbc.co.uk/news/10628494). Eg, `business` for `https://feeds.bbci.co.uk/news/business/rss.xml`.\n\n    -   Channel contains sub-directories, such as `https://feeds.bbci.co.uk/news/world/asia/rss.xml`, replace `/` with `-`, `/bbc/world-asia`.","location":"index.ts","heat":1943,"topFeeds":[{"id":"41965184796581990","type":"feed","url":"rsshub://bbc/chinese","title":"BBC News 中文网","description":"BBC News 中文网 - Powered by RSSHub","image":"https://www.bbc.com/favicon.ico"},{"id":"55115129833870338","type":"feed","url":"rsshub://bbc","title":"BBC News Top Stories","description":"BBC News Top Stories - Powered by RSSHub","image":"https://www.bbc.com/favicon.ico"}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

Provides a better reading experience (full text articles) over the official ones.

    Support major channels, refer to [BBC RSS feeds](https://www.bbc.co.uk/news/10628494). Eg, `business` for `https://feeds.bbci.co.uk/news/business/rss.xml`.

    -   Channel contains sub-directories, such as `https://feeds.bbci.co.uk/news/world/asia/rss.xml`, replace `/` with `-`, `/bbc/world-asia`.

## New Yorker <Site url="newyorker.com"/>

### Articles <Site url="newyorker.com" size="sm" />

<Route namespace="newyorker" :data='{"path":"/:category","categories":["traditional-media","popular"],"view":0,"example":"/newyorker/latest","parameters":{"category":"tab name. can be found at url"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["newyorker.com/:category?"]}],"name":"Articles","maintainers":["EthanWng97","pseudoyu"],"location":"news.ts","heat":1597,"topFeeds":[{"id":"49394735648572416","type":"feed","url":"rsshub://newyorker/latest","title":"The New Yorker - latest","description":"Reporting, Profiles, breaking news, cultural coverage, podcasts, videos, and cartoons from The New Yorker. - Powered by RSSHub","image":null},{"id":"62040507105143808","type":"feed","url":"rsshub://newyorker/news","title":"The New Yorker - news","description":"Reporting, Profiles, breaking news, cultural coverage, podcasts, videos, and cartoons from The New Yorker. - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## NHK <Site url="www3.nhk.or.jp"/>

### WORLD-JAPAN - Top Stories <Site url="www3.nhk.or.jp" size="sm" />

<Route namespace="nhk" :data='{"path":"/news/:lang?","categories":["traditional-media"],"view":0,"example":"/nhk/news/en","parameters":{"lang":{"description":"Language, see below","options":[{"value":"ar","label":"العربية"},{"value":"bn","label":"বাংলা"},{"value":"my","label":"မြန်မာဘာသာစကား"},{"value":"zh","label":"中文（简体）"},{"value":"zt","label":"中文（繁體）"},{"value":"en","label":"English"},{"value":"fr","label":"Français"},{"value":"hi","label":"हिन्दी"},{"value":"id","label":"Bahasa Indonesia"},{"value":"ko","label":"코리언"},{"value":"fa","label":"فارسی"},{"value":"pt","label":"Português"},{"value":"ru","label":"Русский"},{"value":"es","label":"Español"},{"value":"sw","label":"Kiswahili"},{"value":"th","label":"ภาษาไทย"},{"value":"tr","label":"Türkçe"},{"value":"uk","label":"Українська"},{"value":"ur","label":"اردو"},{"value":"vi","label":"Tiếng Việt"}],"default":"en"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www3.nhk.or.jp/nhkworld/:lang/news/list/","www3.nhk.or.jp/nhkworld/:lang/news/"],"target":"/news/:lang"}],"name":"WORLD-JAPAN - Top Stories","maintainers":["TonyRL","pseudoyu","cscnk52"],"location":"news.ts","heat":1075,"topFeeds":[{"id":"61596371943710720","type":"feed","url":"rsshub://nhk/news","title":"undefined | NHK WORLD-JAPAN News","description":"undefined | NHK WORLD-JAPAN News - Powered by RSSHub","image":null},{"id":"61417208948286464","type":"feed","url":"rsshub://nhk/news/zh","title":"新闻提要 | NHK WORLD-JAPAN News","description":"新闻提要 | NHK WORLD-JAPAN News - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"Error: STACK_TRACE_ERROR\n    at task (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:633:27)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:660:16)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:457:28)\n    at chain (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/chunk-tasks.js:9:14)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:72:12\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:40\n    at runWithSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1588:8)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:10)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:739:54)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at collectTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1048:25)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1556:17)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:85:25)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:153:2)\n    at executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/init-forks.aqTzCSR2.js:29:4)"}' />

### News Web Easy <Site url="www3.nhk.or.jp/news/easy/" size="sm" />

<Route namespace="nhk" :data='{"path":"/news_web_easy","categories":["traditional-media"],"example":"/nhk/news_web_easy","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www3.nhk.or.jp/news/easy/","www3.nhk.or.jp/"]}],"name":"News Web Easy","maintainers":["Andiedie"],"url":"www3.nhk.or.jp/news/easy/","location":"news-web-easy.ts","heat":124,"topFeeds":[{"id":"56991521965888512","type":"feed","url":"rsshub://nhk/news_web_easy","title":"NEWS WEB EASY","description":"NEWS WEB EASYは、小学生・中学生の皆さんや、日本に住んでいる外国人のみなさんに、わかりやすいことば でニュースを伝えるウェブサイトです。 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 第一财经 <Site url="yicai.com"/>

### 头条 <Site url="yicai.com/" size="sm" />

<Route namespace="yicai" :data='{"path":"/headline","categories":["traditional-media"],"example":"/yicai/headline","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yicai.com/"]}],"name":"头条","maintainers":["nczitzk"],"url":"yicai.com/","location":"headline.ts","heat":615,"topFeeds":[{"id":"54806809341165585","type":"feed","url":"rsshub://yicai/headline","title":"第一财经 - 头条","description":"第一财经 - 头条 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 新闻 <Site url="yicai.com" size="sm" />

<Route namespace="yicai" :data='{"path":"/news/:id?","categories":["traditional-media"],"example":"/yicai/news","parameters":{"id":"分类 id，见下表，可在对应分类页中找到，默认为新闻"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yicai.com/news/:id","yicai.com/news"],"target":"/news/:id"}],"name":"新闻","maintainers":["nczitzk"],"description":"| Id                       | 名称       |\n| ------------------------ | ---------- |\n| gushi                    | A 股       |\n| kechuangban              | 科创板     |\n| hongguan                 | 大政       |\n| jinrong                  | 金融       |\n| quanqiushichang          | 海外市场   |\n| gongsi                   | 产经       |\n| shijie                   | 全球       |\n| kechuang                 | 科技       |\n| quyu                     | 区域       |\n| comment                  | 评论       |\n| dafengwenhua             | 商业人文   |\n| books                    | 阅读周刊   |\n| loushi                   | 地产       |\n| automobile               | 汽车       |\n| china_financial_herald | 对话陆家嘴 |\n| fashion                  | 时尚       |\n| ad                       | 商业资讯   |\n| info                     | 资讯       |\n| jzfxb                    | 价值风向标 |\n| shuducaijing             | 数读财经   |\n| shujujiepan              | 数据解盘   |\n| shudushenghuo            | 数读生活   |\n| cbndata                  | CBNData    |\n| dtcj                     | DT 财经    |\n| xfsz                     | 消费数知   |","location":"news.ts","heat":155,"topFeeds":[{"id":"52508301310328844","type":"feed","url":"rsshub://yicai/news","title":"第一财经 - 新闻","description":"第一财经 - 新闻 - Powered by RSSHub","image":null},{"id":"69953039798669312","type":"feed","url":"rsshub://yicai/news/kechuang","title":"第一财经 - 科技","description":"第一财经 - 科技 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| Id                       | 名称       |
| ------------------------ | ---------- |
| gushi                    | A 股       |
| kechuangban              | 科创板     |
| hongguan                 | 大政       |
| jinrong                  | 金融       |
| quanqiushichang          | 海外市场   |
| gongsi                   | 产经       |
| shijie                   | 全球       |
| kechuang                 | 科技       |
| quyu                     | 区域       |
| comment                  | 评论       |
| dafengwenhua             | 商业人文   |
| books                    | 阅读周刊   |
| loushi                   | 地产       |
| automobile               | 汽车       |
| china_financial_herald | 对话陆家嘴 |
| fashion                  | 时尚       |
| ad                       | 商业资讯   |
| info                     | 资讯       |
| jzfxb                    | 价值风向标 |
| shuducaijing             | 数读财经   |
| shujujiepan              | 数据解盘   |
| shudushenghuo            | 数读生活   |
| cbndata                  | CBNData    |
| dtcj                     | DT 财经    |
| xfsz                     | 消费数知   |

### 最新 <Site url="yicai.com/" size="sm" />

<Route namespace="yicai" :data='{"path":"/latest","categories":["traditional-media"],"example":"/yicai/latest","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yicai.com/"]}],"name":"最新","maintainers":["nczitzk"],"url":"yicai.com/","location":"latest.ts","heat":122,"topFeeds":[{"id":"58009628741151748","type":"feed","url":"rsshub://yicai/latest","title":"第一财经 - 最新","description":"第一财经 - 最新 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 关注 <Site url="yicai.com" size="sm" />

<Route namespace="yicai" :data='{"path":"/feed/:id?","categories":["traditional-media"],"example":"/yicai/feed/669","parameters":{"id":"主题 id，可在对应主题页中找到，默认为一财早报"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yicai.com/feed/:id","yicai.com/feed"],"target":"/feed/:id"}],"name":"关注","maintainers":["nczitzk"],"description":"::: tip\n  全部主题词见 [此处](https://www.yicai.com/feed/alltheme)\n:::","location":"feed.ts","heat":113,"topFeeds":[{"id":"57265298134029312","type":"feed","url":"rsshub://yicai/feed/669","title":"第一财经主题 - 一财早报","description":"第一财经主题 - 一财早报 - Powered by RSSHub","image":null},{"id":"149537784167521280","type":"feed","url":"rsshub://yicai/feed","title":"第一财经主题 - 一财早报","description":"第一财经主题 - 一财早报 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

::: tip
  全部主题词见 [此处](https://www.yicai.com/feed/alltheme)
:::

### DT 财经 <Site url="yicai.com" size="sm" />

<Route namespace="yicai" :data='{"path":"/dt/:column?/:category?","categories":["traditional-media"],"example":"/yicai/dt/article","parameters":{"column":"栏目，见下表，默认为文章","category":"分类，见下表，默认为全部"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"DT 财经","maintainers":["nczitzk"],"description":"#### [文章](https://dt.yicai.com/article)\n\n| 分类     | ID         |\n| -------- | ---------- |\n| 全部     | article/0  |\n| 新流行   | article/31 |\n| 新趋势   | article/32 |\n| 商业黑马 | article/33 |\n| 新品     | article/34 |\n| 营销     | article/35 |\n| 大公司   | article/36 |\n| 城市生活 | article/38 |\n\n#### [报告](https://dt.yicai.com/report)\n\n| 分类       | ID        |\n| ---------- | --------- |\n| 全部       | report/0  |\n| 人群观念   | report/9  |\n| 人群行为   | report/22 |\n| 美妆个护   | report/23 |\n| 3C 数码    | report/24 |\n| 营销趋势   | report/25 |\n| 服饰鞋包   | report/27 |\n| 互联网     | report/28 |\n| 城市与居住 | report/29 |\n| 消费趋势   | report/30 |\n| 生活趋势   | report/37 |\n\n#### [可视化](https://dt.yicai.com/visualization)\n\n| 分类     | ID               |\n| -------- | ---------------- |\n| 全部     | visualization/0  |\n| 新流行   | visualization/39 |\n| 新趋势   | visualization/40 |\n| 商业黑马 | visualization/41 |\n| 新品     | visualization/42 |\n| 营销     | visualization/43 |\n| 大公司   | visualization/44 |\n| 城市生活 | visualization/45 |","location":"dt.ts","heat":38,"topFeeds":[{"id":"63944281636561920","type":"feed","url":"rsshub://yicai/dt/article","title":"全部文章 | DT商业观察","description":"用数据度量商业 让数据自由跨界 - Powered by RSSHub","image":"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjZweCIgaGVpZ2h0PSIzNHB4IiB2aWV3Qm94PSIwIDAgNjYgMzQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYzICg5MjQ0NSkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+57yW57uEPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAgMzIuOTAyOTA5NyAwIDMyLjkwMjkwOTcgMzIuOTk5NTMwNCAwIDMyLjk5OTUzMDQiPjwvcG9seWdvbj4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSLpobXpnaItMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuaWh+eroOWkh+S7vSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkyNy4wMDAwMDAsIC0yMi4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Iue8lue7hCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTI3LjE5NDc1NywgMjIuMzk1NzA2KSI+CiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMC4wMDA0NzApIj4KICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzAuMDg4ODU2OCwzLjA2MTY0MjY3IEMyOC44NDIxMjk2LDEuODc4MzA4MzggMjcuMjE1MDQ1LDEuMDY0NzY2MDcgMjUuMjUxMDM4OCwwLjY0NDQ5NDU2NCBDMjMuMjU2NTEsMC4yMTcxNzk0MDcgMjAuOTM3OTczMSwwIDE4LjM2MzUxNjcsMCBMNS4zMDQ1Nzc2NywwIEw0LjEwODMzMDAxLDcuNDYxNTgwMDYgTDE2LjQ3MzQ2ODksNy40NjE1ODAwNiBDMTcuODk4NjM1NCw3LjQ2MTU4MDA2IDE5LjA4MTk2OTcsNy41OTU0MDk1MyAxOS45OTc2NDUsNy44NjA3MjA1OSBDMjAuOTUzMjM0NCw4LjEzNjU5NzEzIDIxLjY4OTI5NjUsOC42Mjk2NTMwOCAyMi4xODkzOTYxLDkuMzI0NjI3MTggQzIyLjY4MjQ1MiwxMC4wMTAyMDk3IDIyLjk2MDY3NjUsMTAuOTYzNDUxMiAyMy4wMTM1MDM5LDEyLjE1NjE3NzEgQzIzLjA2MTYzNTYsMTMuMzI4OTQ1OSAyMi45NDQyNDEzLDE0LjgwMzQxOCAyMi42NjEzMjExLDE2LjU0MDg1MzIgQzIyLjM5NjAxLDE4LjIxNDg5NTYgMjIuMDU5MDg4NSwxOS42MzA2NzA1IDIxLjY1NzYsMjAuNzUwNjExOSBDMjEuMjUzNzYzNywyMS44Nzk5NDQ4IDIwLjcwMzE4NDYsMjIuODAxNDg5OCAyMC4wMTk5NDk5LDIzLjQ5MDU5NDIgQzE5LjMyNDk3NTgsMjQuMTg2NzQyMyAxOC40NDY4NjY2LDI0LjY3NjI3NjQgMTcuNDEwMjc1MiwyNC45NDYyODMyIEMxNi4zOTgzMzY2LDI1LjIwOTI0NjQgMTUuMTQ4MDg3NSwyNS4zNDMwNzU5IDEzLjY5MjM5ODUsMjUuMzQzMDc1OSBMMTAuNjAyNTgxMywyNS4zNDMwNzU5IEwxMi43Mzc5ODMxLDEyLjkyODYzMTQgTDMuMjUwMTc3ODcsMTIuOTI4NjMxNCBMMC4wNTcwNTM2MTcyLDMyLjY3MDgyNjUgTC0wLjAwMDQ2OTU3NzA5NiwzMi45OTk1MzA0IEwxMi45NzE1OTc3LDMyLjk5OTUzMDQgQzE1LjU0MDE4NDQsMzIuOTk5NTMwNCAxNy45MzI2Nzk3LDMyLjczNDIxOTQgMjAuMDgyMTY4OSwzMi4yMTA2NDA5IEMyMi4yMjEwOTI1LDMxLjY5MDU4NDMgMjQuMTQxNjYyOSwzMC43ODc4MjIzIDI1Ljc5MTA1MjQsMjkuNTI5MzU1NyBDMjcuNDQxNjE1OSwyOC4yNzQ0MTA5IDI4Ljg0NTY1MTQsMjYuNTcxMDIgMjkuOTY5MTE0NiwyNC40Njk2NjI1IEMzMS4wOTE0MDM5LDIyLjM3MDY1MjkgMzEuOTIzNzI5MywxOS42NzI5MzI0IDMyLjQ0MTQzOCwxNi40NTM5ODE0IEMzMi45OTQzNjUxLDEzLjAyMTM3MjkgMzMuMDQ5NTQwNCwxMC4xOTA5OTY5IDMyLjYxMTY1OTcsOC4wNDE1MDc3NyBDMzIuMTc3MzAwOSw1LjkyMDE5MzI0IDMxLjMyOTcxNDMsNC4yNDM4MDMwMSAzMC4wODg4NTY4LDMuMDYxNjQyNjciIGlkPSJGaWxsLTEiIGZpbGw9IiMyMTZDRjciIG1hc2s9InVybCgjbWFzay0yKSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMyIgZmlsbD0iIzIxNkNGNyIgcG9pbnRzPSIzMi44MzQwMDQ1IDAgMzYuMzYwNTI4NSA3Ljg0ODk4MTE2IDQ0LjQyNjY4OTEgNy44NDg5ODExNiA0MC4zODk1IDMyLjk5OTUzMDQgNDkuNzAyMzg3NyAzMi45OTk1MzA0IDUzLjc0NDI3MjYgNy44NDg5ODExNiA2Mi4xNDk3MDI2IDcuODQ4OTgxMTYgNjUuNjEwNDg1OCAwIj48L3BvbHlnb24+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="},{"id":"84474888108006400","type":"feed","url":"rsshub://yicai/dt","title":"全部文章 | DT商业观察","description":"用数据度量商业 让数据自由跨界 - Powered by RSSHub","image":"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjZweCIgaGVpZ2h0PSIzNHB4IiB2aWV3Qm94PSIwIDAgNjYgMzQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYzICg5MjQ0NSkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+57yW57uEPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAgMzIuOTAyOTA5NyAwIDMyLjkwMjkwOTcgMzIuOTk5NTMwNCAwIDMyLjk5OTUzMDQiPjwvcG9seWdvbj4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSLpobXpnaItMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuaWh+eroOWkh+S7vSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkyNy4wMDAwMDAsIC0yMi4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Iue8lue7hCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTI3LjE5NDc1NywgMjIuMzk1NzA2KSI+CiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMC4wMDA0NzApIj4KICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzAuMDg4ODU2OCwzLjA2MTY0MjY3IEMyOC44NDIxMjk2LDEuODc4MzA4MzggMjcuMjE1MDQ1LDEuMDY0NzY2MDcgMjUuMjUxMDM4OCwwLjY0NDQ5NDU2NCBDMjMuMjU2NTEsMC4yMTcxNzk0MDcgMjAuOTM3OTczMSwwIDE4LjM2MzUxNjcsMCBMNS4zMDQ1Nzc2NywwIEw0LjEwODMzMDAxLDcuNDYxNTgwMDYgTDE2LjQ3MzQ2ODksNy40NjE1ODAwNiBDMTcuODk4NjM1NCw3LjQ2MTU4MDA2IDE5LjA4MTk2OTcsNy41OTU0MDk1MyAxOS45OTc2NDUsNy44NjA3MjA1OSBDMjAuOTUzMjM0NCw4LjEzNjU5NzEzIDIxLjY4OTI5NjUsOC42Mjk2NTMwOCAyMi4xODkzOTYxLDkuMzI0NjI3MTggQzIyLjY4MjQ1MiwxMC4wMTAyMDk3IDIyLjk2MDY3NjUsMTAuOTYzNDUxMiAyMy4wMTM1MDM5LDEyLjE1NjE3NzEgQzIzLjA2MTYzNTYsMTMuMzI4OTQ1OSAyMi45NDQyNDEzLDE0LjgwMzQxOCAyMi42NjEzMjExLDE2LjU0MDg1MzIgQzIyLjM5NjAxLDE4LjIxNDg5NTYgMjIuMDU5MDg4NSwxOS42MzA2NzA1IDIxLjY1NzYsMjAuNzUwNjExOSBDMjEuMjUzNzYzNywyMS44Nzk5NDQ4IDIwLjcwMzE4NDYsMjIuODAxNDg5OCAyMC4wMTk5NDk5LDIzLjQ5MDU5NDIgQzE5LjMyNDk3NTgsMjQuMTg2NzQyMyAxOC40NDY4NjY2LDI0LjY3NjI3NjQgMTcuNDEwMjc1MiwyNC45NDYyODMyIEMxNi4zOTgzMzY2LDI1LjIwOTI0NjQgMTUuMTQ4MDg3NSwyNS4zNDMwNzU5IDEzLjY5MjM5ODUsMjUuMzQzMDc1OSBMMTAuNjAyNTgxMywyNS4zNDMwNzU5IEwxMi43Mzc5ODMxLDEyLjkyODYzMTQgTDMuMjUwMTc3ODcsMTIuOTI4NjMxNCBMMC4wNTcwNTM2MTcyLDMyLjY3MDgyNjUgTC0wLjAwMDQ2OTU3NzA5NiwzMi45OTk1MzA0IEwxMi45NzE1OTc3LDMyLjk5OTUzMDQgQzE1LjU0MDE4NDQsMzIuOTk5NTMwNCAxNy45MzI2Nzk3LDMyLjczNDIxOTQgMjAuMDgyMTY4OSwzMi4yMTA2NDA5IEMyMi4yMjEwOTI1LDMxLjY5MDU4NDMgMjQuMTQxNjYyOSwzMC43ODc4MjIzIDI1Ljc5MTA1MjQsMjkuNTI5MzU1NyBDMjcuNDQxNjE1OSwyOC4yNzQ0MTA5IDI4Ljg0NTY1MTQsMjYuNTcxMDIgMjkuOTY5MTE0NiwyNC40Njk2NjI1IEMzMS4wOTE0MDM5LDIyLjM3MDY1MjkgMzEuOTIzNzI5MywxOS42NzI5MzI0IDMyLjQ0MTQzOCwxNi40NTM5ODE0IEMzMi45OTQzNjUxLDEzLjAyMTM3MjkgMzMuMDQ5NTQwNCwxMC4xOTA5OTY5IDMyLjYxMTY1OTcsOC4wNDE1MDc3NyBDMzIuMTc3MzAwOSw1LjkyMDE5MzI0IDMxLjMyOTcxNDMsNC4yNDM4MDMwMSAzMC4wODg4NTY4LDMuMDYxNjQyNjciIGlkPSJGaWxsLTEiIGZpbGw9IiMyMTZDRjciIG1hc2s9InVybCgjbWFzay0yKSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMyIgZmlsbD0iIzIxNkNGNyIgcG9pbnRzPSIzMi44MzQwMDQ1IDAgMzYuMzYwNTI4NSA3Ljg0ODk4MTE2IDQ0LjQyNjY4OTEgNy44NDg5ODExNiA0MC4zODk1IDMyLjk5OTUzMDQgNDkuNzAyMzg3NyAzMi45OTk1MzA0IDUzLjc0NDI3MjYgNy44NDg5ODExNiA2Mi4xNDk3MDI2IDcuODQ4OTgxMTYgNjUuNjEwNDg1OCAwIj48L3BvbHlnb24+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="}]}' :test='{"code":0}' />

#### [文章](https://dt.yicai.com/article)

| 分类     | ID         |
| -------- | ---------- |
| 全部     | article/0  |
| 新流行   | article/31 |
| 新趋势   | article/32 |
| 商业黑马 | article/33 |
| 新品     | article/34 |
| 营销     | article/35 |
| 大公司   | article/36 |
| 城市生活 | article/38 |

#### [报告](https://dt.yicai.com/report)

| 分类       | ID        |
| ---------- | --------- |
| 全部       | report/0  |
| 人群观念   | report/9  |
| 人群行为   | report/22 |
| 美妆个护   | report/23 |
| 3C 数码    | report/24 |
| 营销趋势   | report/25 |
| 服饰鞋包   | report/27 |
| 互联网     | report/28 |
| 城市与居住 | report/29 |
| 消费趋势   | report/30 |
| 生活趋势   | report/37 |

#### [可视化](https://dt.yicai.com/visualization)

| 分类     | ID               |
| -------- | ---------------- |
| 全部     | visualization/0  |
| 新流行   | visualization/39 |
| 新趋势   | visualization/40 |
| 商业黑马 | visualization/41 |
| 新品     | visualization/42 |
| 营销     | visualization/43 |
| 大公司   | visualization/44 |
| 城市生活 | visualization/45 |

### 视听 <Site url="yicai.com" size="sm" />

<Route namespace="yicai" :data='{"path":"/video/:id?","categories":["traditional-media"],"example":"/yicai/video","parameters":{"id":"分类 id，见下表，可在对应分类页中找到，默认为视听"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yicai.com/video/:id","yicai.com/video"],"target":"/video/:id"}],"name":"视听","maintainers":["nczitzk"],"description":"| Id                   | 名称                         |\n| -------------------- | ---------------------------- |\n| youliao              | 有料                         |\n| appshipin            | 此刻                         |\n| yicaisudi            | 速递                         |\n| caishang             | 财商                         |\n| shiji                | 史记                         |\n| jinrigushi           | 今日股市                     |\n| tangulunjin          | 谈股论金                     |\n| gongsiyuhangye       | 公司与行业                   |\n| cjyxx                | 财经夜行线                   |\n| 6thtradingday        | 第六交易日                   |\n| cjfw                 | 财经风味                     |\n| chuangshidai         | 创时代                       |\n| weilaiyaoqinghan     | 未来邀请函                   |\n| tounaofengbao        | 头脑风暴                     |\n| zhongguojingyingzhe  | 中国经营者                   |\n| shichanglingjuli     | 市场零距离                   |\n| huanqiucaijing       | 环球财经视界                 |\n| zgjcqyjglsxftl       | 中国杰出企业家管理思想访谈录 |\n| jiemacaishang        | 解码财商                     |\n| sxpl                 | 首席评论                     |\n| zhongguojingjiluntan | 中国经济论坛                 |\n| opinionleader        | 意见领袖                     |\n| xinjinrong           | 解码新金融                   |\n| diyidichan           | 第一地产                     |\n| zhichedaren          | 智车达人                     |\n| chuangtoufengyun     | 创投风云                     |\n| chunxiangrensheng    | 醇享人生                     |\n| diyishengyin         | 第一声音                     |\n| sanliangboqianjin    | 财智双全                     |\n| weilaiyaoqinghan     | 未来邀请函                   |\n| zjdy                 | 主角 ▪ 大医                 |\n| leye                 | 乐业之城                     |\n| sanrenxing           | 价值三人行                   |\n| yuandongli           | 中国源动力                   |\n| pioneerzone          | 直击引领区                   |","location":"video.ts","heat":17,"topFeeds":[{"id":"134860047181050880","type":"feed","url":"rsshub://yicai/video/tangulunjin","title":"第一财经 - 谈股论金","description":"第一财经 - 谈股论金 - Powered by RSSHub","image":null},{"id":"134861031617215488","type":"feed","url":"rsshub://yicai/video/gongsiyuhangye","title":"第一财经 - 公司与行业","description":"第一财经 - 公司与行业 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected [ …(10) ] to not include &#39;https://www.yicai.com/video/102917598…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1252:15)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1090:14)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@6.2.1/node_modules/chai/index.js:1700:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| Id                   | 名称                         |
| -------------------- | ---------------------------- |
| youliao              | 有料                         |
| appshipin            | 此刻                         |
| yicaisudi            | 速递                         |
| caishang             | 财商                         |
| shiji                | 史记                         |
| jinrigushi           | 今日股市                     |
| tangulunjin          | 谈股论金                     |
| gongsiyuhangye       | 公司与行业                   |
| cjyxx                | 财经夜行线                   |
| 6thtradingday        | 第六交易日                   |
| cjfw                 | 财经风味                     |
| chuangshidai         | 创时代                       |
| weilaiyaoqinghan     | 未来邀请函                   |
| tounaofengbao        | 头脑风暴                     |
| zhongguojingyingzhe  | 中国经营者                   |
| shichanglingjuli     | 市场零距离                   |
| huanqiucaijing       | 环球财经视界                 |
| zgjcqyjglsxftl       | 中国杰出企业家管理思想访谈录 |
| jiemacaishang        | 解码财商                     |
| sxpl                 | 首席评论                     |
| zhongguojingjiluntan | 中国经济论坛                 |
| opinionleader        | 意见领袖                     |
| xinjinrong           | 解码新金融                   |
| diyidichan           | 第一地产                     |
| zhichedaren          | 智车达人                     |
| chuangtoufengyun     | 创投风云                     |
| chunxiangrensheng    | 醇享人生                     |
| diyishengyin         | 第一声音                     |
| sanliangboqianjin    | 财智双全                     |
| weilaiyaoqinghan     | 未来邀请函                   |
| zjdy                 | 主角 ▪ 大医                 |
| leye                 | 乐业之城                     |
| sanrenxing           | 价值三人行                   |
| yuandongli           | 中国源动力                   |
| pioneerzone          | 直击引领区                   |

### VIP 频道 <Site url="yicai.com" size="sm" />

<Route namespace="yicai" :data='{"path":"/vip/:id?","categories":["traditional-media"],"example":"/yicai/vip/428","parameters":{"id":"频道 id，可在对应频道页中找到，默认为一元点金"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yicai.com/vip/product/:id","yicai.com/"],"target":"/vip/:id"}],"name":"VIP 频道","maintainers":["nczitzk"],"location":"vip.ts","heat":14,"topFeeds":[{"id":"107406669394481152","type":"feed","url":"rsshub://yicai/vip/55","title":"第一财经VIP频道 - 第一财经杂志丨YiMagazine | 探索明亮的商业世界","description":"第一财经VIP频道 - 第一财经杂志丨YiMagazine | 探索明亮的商业世界 - Powered by RSSHub","image":null},{"id":"62792430599606272","type":"feed","url":"rsshub://yicai/vip/428","title":"第一财经VIP频道 - 一元点金 | 即时热点 单篇精选","description":"第一财经VIP频道 - 一元点金 | 即时热点 单篇精选 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"Error: STACK_TRACE_ERROR\n    at task (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:633:27)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:660:16)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:457:28)\n    at chain (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/chunk-tasks.js:9:14)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:72:12\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:40\n    at runWithSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1588:8)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:10)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:739:54)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at collectTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1048:25)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1556:17)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:85:25)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:153:2)\n    at executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/init-forks.aqTzCSR2.js:29:4)"}' />

### 正在 <Site url="yicai.com/brief" size="sm" />

<Route namespace="yicai" :data='{"path":"/brief","categories":["traditional-media"],"example":"/yicai/brief","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yicai.com/brief"]}],"name":"正在","maintainers":["sanmmm","nczitzk"],"url":"yicai.com/brief","location":"brief.ts","heat":6,"topFeeds":[{"id":"67269330696255493","type":"feed","url":"rsshub://yicai/brief","title":"第一财经 - 正在","description":"第一财经 - 正在 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 轮播 <Site url="yicai.com/" size="sm" />

<Route namespace="yicai" :data='{"path":"/carousel","categories":["traditional-media"],"example":"/yicai/carousel","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yicai.com/"]}],"name":"轮播","maintainers":["nczitzk"],"url":"yicai.com/","location":"carousel.ts","heat":5,"topFeeds":[{"id":"84044454166195200","type":"feed","url":"rsshub://yicai/carousel","title":"第一财经 - 轮播","description":"第一财经 - 轮播 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 一财号 <Site url="yicai.com" size="sm" />

<Route namespace="yicai" :data='{"path":"/author/:id?","categories":["traditional-media"],"example":"/yicai/author/100005663","parameters":{"id":"作者 id，可在对应作者页中找到，默认为第一财经研究院"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yicai.com/author/:id","yicai.com/author"],"target":"/author/:id"}],"name":"一财号","maintainers":["nczitzk"],"location":"author.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## FT 中文网 <Site url="ftchinese.com"/>

### FT 中文网 <Site url="ftchinese.com" size="sm" />

<Route namespace="ftchinese" :data='{"path":"/:language/:channel?","categories":["traditional-media"],"example":"/ftchinese/simplified/hotstoryby7day","parameters":{"language":"语言，简体 `simplified`，繁体 `traditional`","channel":"频道，缺省为每日更新"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"FT 中文网","maintainers":["HenryQW","xyqfer"],"description":"::: tip\n  -   不支持付费文章。\n:::\n\n  通过提取文章全文，以提供比官方源更佳的阅读体验。\n\n  支持所有频道，频道名称见 [官方频道 RSS](http://www.ftchinese.com/channel/rss.html).\n\n  -   频道为单一路径，如 `http://www.ftchinese.com/rss/news` 则为 `/ftchinese/simplified/news`.\n  -   频道包含多重路径，如 `http://www.ftchinese.com/rss/column/007000002` 则替换 `/` 为 `-` `/ftchinese/simplified/column-007000002`.","location":"channel.ts","heat":894,"topFeeds":[{"id":"41377818806739968","type":"feed","url":"rsshub://ftchinese/simplified/hotstoryby7day","title":"FTChinese RSS - Hot Weekly","description":"FTChinese RSS - Hot Weekly - Powered by RSSHub","image":null},{"id":"61693185811247104","type":"feed","url":"rsshub://ftchinese/simplified","title":"FTChinese RSS - All Feed","description":"FTChinese RSS - All Feed - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

::: tip
  -   不支持付费文章。
:::

  通过提取文章全文，以提供比官方源更佳的阅读体验。

  支持所有频道，频道名称见 [官方频道 RSS](http://www.ftchinese.com/channel/rss.html).

  -   频道为单一路径，如 `http://www.ftchinese.com/rss/news` 则为 `/ftchinese/simplified/news`.
  -   频道包含多重路径，如 `http://www.ftchinese.com/rss/column/007000002` 则替换 `/` 为 `-` `/ftchinese/simplified/column-007000002`.

## 参考消息 <Site url="cankaoxiaoxi.com"/>

### 栏目 <Site url="cankaoxiaoxi.com" size="sm" />

<Route namespace="cankaoxiaoxi" :data='{"path":["/column/:id?","/:id?"],"categories":["traditional-media"],"example":"/cankaoxiaoxi/column/diyi","parameters":{"id":"栏目 id，默认为 `diyi`，即第一关注"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"栏目","maintainers":["yuxinliu-alex","nczitzk"],"description":"| 栏目           | id       |\n| -------------- | -------- |\n| 第一关注       | diyi     |\n| 中国           | zhongguo |\n| 国际           | gj       |\n| 观点           | guandian |\n| 锐参考         | ruick    |\n| 体育健康       | tiyujk   |\n| 科技应用       | kejiyy   |\n| 文化旅游       | wenhualy |\n| 参考漫谈       | cankaomt |\n| 研究动态       | yjdt     |\n| 海外智库       | hwzk     |\n| 业界信息・观点 | yjxx     |\n| 海外看中国城市 | hwkzgcs  |\n| 译名趣谈       | ymymqt   |\n| 译名发布       | ymymfb   |\n| 双语汇         | ymsyh    |\n| 参考视频       | video    |\n| 军事           | junshi   |\n| 参考人物       | cankaorw |","location":"index.ts","heat":842,"topFeeds":[{"id":"59590290141788160","type":"feed","url":"rsshub://cankaoxiaoxi/column/gj","title":"参考消息 - 国际","description":"参考消息 - Powered by RSSHub","image":null},{"id":"41461870201364480","type":"feed","url":"rsshub://cankaoxiaoxi/column/zhongguo","title":"参考消息 - 中国","description":"参考消息 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 栏目           | id       |
| -------------- | -------- |
| 第一关注       | diyi     |
| 中国           | zhongguo |
| 国际           | gj       |
| 观点           | guandian |
| 锐参考         | ruick    |
| 体育健康       | tiyujk   |
| 科技应用       | kejiyy   |
| 文化旅游       | wenhualy |
| 参考漫谈       | cankaomt |
| 研究动态       | yjdt     |
| 海外智库       | hwzk     |
| 业界信息・观点 | yjxx     |
| 海外看中国城市 | hwkzgcs  |
| 译名趣谈       | ymymqt   |
| 译名发布       | ymymfb   |
| 双语汇         | ymsyh    |
| 参考视频       | video    |
| 军事           | junshi   |
| 参考人物       | cankaorw |

## 环球网 <Site url="huanqiu.com"/>

### 分类 <Site url="huanqiu.com/" size="sm" />

<Route namespace="huanqiu" :data='{"path":"/news/:category?","categories":["traditional-media"],"example":"/huanqiu/news/china","parameters":{"category":"类别，可以使用二级域名作为参数，默认为：china"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["huanqiu.com/"]}],"name":"分类","maintainers":["yuxinliu-alex"],"url":"huanqiu.com/","description":"| 国内新闻 | 国际新闻 | 军事 | 台海   | 评论    |\n| -------- | -------- | ---- | ------ | ------- |\n| china    | world    | mil  | taiwai | opinion |","location":"index.ts","heat":711,"topFeeds":[{"id":"59176126986620928","type":"feed","url":"rsshub://huanqiu/news/world","title":"国际新闻 - 环球网","description":"环球网 - Powered by RSSHub","image":null},{"id":"67440517507274752","type":"feed","url":"rsshub://huanqiu/news","title":"国内新闻 - 环球网","description":"环球网 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 国内新闻 | 国际新闻 | 军事 | 台海   | 评论    |
| -------- | -------- | ---- | ------ | ------- |
| china    | world    | mil  | taiwai | opinion |

## AP News <Site url="apnews.com"/>

### Topics <Site url="apnews.com" size="sm" />

<Route namespace="apnews" :data='{"path":["/topics/:topic?","/nav/:nav{.*}?"],"categories":["traditional-media"],"example":"/apnews/topics/apf-topnews","view":0,"parameters":{"topic":{"description":"Topic name, can be found in URL. For example: the topic name of AP Top News [https://apnews.com/apf-topnews](https://apnews.com/apf-topnews) is `apf-topnews`","default":"trending-news"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["apnews.com/hub/:topic"],"target":"/topics/:topic"}],"name":"Topics","maintainers":["zoenglinghou","mjysci","TonyRL"],"location":"topics.ts","heat":678,"topFeeds":[{"id":"52388449895612416","type":"feed","url":"rsshub://apnews/topics/trending-news","title":"Trending News | What&#39;s New Around the World | AP News","description":"Trending News | What&#39;s New Around the World | AP News - Powered by RSSHub","image":null},{"id":"41648644680942592","type":"feed","url":"rsshub://apnews/topics/apf-topnews","title":"Top News: US & International Top News Stories Today | AP News","description":"Top News: US & International Top News Stories Today | AP News - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### News (from mobile client API) <Site url="apnews.com" size="sm" />

<Route namespace="apnews" :data='{"path":"/mobile/:path{.+}?","categories":["traditional-media"],"example":"/apnews/mobile/ap-top-news","view":0,"parameters":{"path":{"description":"Corresponding path from AP News website","default":"ap-top-news"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["apnews.com/"]}],"name":"News (from mobile client API)","maintainers":["dzx-dzx"],"location":"mobile-api.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### News <Site url="apnews.com" size="sm" />

<Route namespace="apnews" :data='{"path":"/rss/:category?","categories":["traditional-media"],"example":"/apnews/rss/business","view":0,"parameters":{"category":{"description":"Category from the first segment of the corresponding site, or `index` for the front page.","default":"index"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["apnews.com/:rss"],"target":"/rss/:rss"}],"name":"News","maintainers":["zoenglinghou","mjysci","TonyRL"],"location":"rss.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Sitemap <Site url="apnews.com" size="sm" />

<Route namespace="apnews" :data='{"path":"/sitemap/:route","categories":["traditional-media"],"example":"/apnews/sitemap/ap-sitemap-latest","view":0,"parameters":{"route":{"description":"Route for sitemap, excluding the `.xml` extension"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["apnews.com/"]}],"name":"Sitemap","maintainers":["zoenglinghou","mjysci","TonyRL","dzx-dzx"],"location":"sitemap.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## GQ <Site url="gq.com"/>

### News <Site url="gq.com" size="sm" />

<Route namespace="gq" :data='{"path":"/news","categories":["traditional-media"],"view":0,"example":"/gq/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gq.com/"]}],"name":"News","maintainers":["EthanWng97"],"location":"news.ts","heat":553,"topFeeds":[{"id":"57995444932781056","type":"feed","url":"rsshub://gq/news","title":"GQ","description":"GQ is the global flagship of men&#39;s fashion, the arbiter of cool for anyone who sees the world through the lens of taste and style. - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## The Nikkei 日本経済新聞 <Site url="nikkei.com"/>

### 中文版新闻 <Site url="nikkei.com" size="sm" />

<Route namespace="nikkei" :data='{"path":"/cn/*","name":"中文版新闻","example":"/nikkei/cn","maintainers":["nczitzk"],"description":"::: tip\n  如 [中国 经济 日经中文网](https://cn.nikkei.com/china/ceconomy.html) 的 URL 为 `https://cn.nikkei.com/china/ceconomy.html` 对应路由为 [`/nikkei/cn/cn/china/ceconomy`](https://rsshub.app/nikkei/cn/cn/china/ceconomy)\n\n  如 [中國 經濟 日經中文網](https://zh.cn.nikkei.com/china/ceconomy.html) 的 URL 为 `https://zh.cn.nikkei.com/china/ceconomy.html` 对应路由为 [`/nikkei/cn/zh/china/ceconomy`](https://rsshub.app/nikkei/cn/zh/china/ceconomy)\n\n  特别地，当 `path` 填入 `rss` 后（如路由为 [`/nikkei/cn/cn/rss`](https://rsshub.app/nikkei/cn/cn/rss)），此时返回的是 [官方 RSS 的内容](https://cn.nikkei.com/rss.html)\n:::","radar":[{"title":"中文版新闻","source":["cn.nikkei.com/:category/:type","cn.nikkei.com/:category","cn.nikkei.com/"]},{"title":"中文版新聞","source":["zh.cn.nikkei.com/:category/:type","zh.cn.nikkei.com/:category","zh.cn.nikkei.com/"]}],"location":"cn/index.ts","heat":338,"topFeeds":[{"id":"57030132765825024","type":"feed","url":"rsshub://nikkei/cn","title":"日经中文网--日本经济新闻中文版","description":"日经中文网--日本经济新闻中文版 - Powered by RSSHub","image":null},{"id":"62743886183348224","type":"feed","url":"rsshub://nikkei/cn/*","title":"日经中文网--日本经济新闻中文版","description":"日经中文网--日本经济新闻中文版 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

::: tip
  如 [中国 经济 日经中文网](https://cn.nikkei.com/china/ceconomy.html) 的 URL 为 `https://cn.nikkei.com/china/ceconomy.html` 对应路由为 [`/nikkei/cn/cn/china/ceconomy`](https://rsshub.app/nikkei/cn/cn/china/ceconomy)

  如 [中國 經濟 日經中文網](https://zh.cn.nikkei.com/china/ceconomy.html) 的 URL 为 `https://zh.cn.nikkei.com/china/ceconomy.html` 对应路由为 [`/nikkei/cn/zh/china/ceconomy`](https://rsshub.app/nikkei/cn/zh/china/ceconomy)

  特别地，当 `path` 填入 `rss` 后（如路由为 [`/nikkei/cn/cn/rss`](https://rsshub.app/nikkei/cn/cn/rss)），此时返回的是 [官方 RSS 的内容](https://cn.nikkei.com/rss.html)
:::

### Nikkei Asia Latest News <Site url="asia.nikkei.com" size="sm" />

<Route namespace="nikkei" :data='{"path":"/asia","categories":["traditional-media"],"example":"/nikkei/asia","radar":[{"source":["asia.nikkei.com/"]}],"name":"Nikkei Asia Latest News","maintainers":["rainrdx"],"url":"asia.nikkei.com","location":"asia/index.ts","heat":128,"topFeeds":[{"id":"60926653842281472","type":"feed","url":"rsshub://nikkei/asia","title":"Nikkei Asia","description":"Nikkei Asia - Powered by RSSHub","image":"https://main-asianreview-nikkei.content.pugpig.com/pugpig_assets/admin/pub120x120.jpg"}]}' :test='{"code":0}' />

### News <Site url="nikkei.com" size="sm" />

<Route namespace="nikkei" :data='{"path":"/news/:category/:article_type?","categories":["traditional-media"],"example":"/nikkei/news/news","parameters":{"category":"Category, see table below","article_type":"Only includes free articles, set `free` to enable, disabled by default"},"radar":[{"source":["www.nikkei.com/:category/archive","www.nikkei.com/:category"],"target":"/:category"}],"name":"News","maintainers":["Arracc","ladeng07"],"description":"| 総合 | オピニオン | 経済    | 政治     | 金融      | マーケット | ビジネス | マネーのまなび | テック     | 国際          | スポーツ | 社会・調査 | 地域  | 文化    | ライフスタイル |\n| ---- | ---------- | ------- | -------- | --------- | ---------- | -------- | -------------- | ---------- | ------------- | -------- | ---------- | ----- | ------- | -------------- |\n| news | opinion    | economy | politics | financial | business   | 不支持   | 不支持         | technology | international | sports   | society    | local | culture | lifestyle      |","location":"news.ts","heat":56,"topFeeds":[{"id":"64311587559952384","type":"feed","url":"rsshub://nikkei/news/news","title":"日本経済新聞 - 総合","description":"【日経】ニュース速報、企業・経済の最新情報をお届けします。 - Powered by RSSHub","image":"https://www.nikkei.com/.resources/k-components/rectangle.rev-d54ea30.png"},{"id":"91684852842104832","type":"feed","url":"rsshub://nikkei/news/technology","title":"日本経済新聞 -","description":"日本経済新聞の電子版。「テック」に関する最新のニュースをお届けします。 - Powered by RSSHub","image":"https://www.nikkei.com/.resources/k-components/rectangle.rev-d54ea30.png"}]}' :test='{"code":0}' />

| 総合 | オピニオン | 経済    | 政治     | 金融      | マーケット | ビジネス | マネーのまなび | テック     | 国際          | スポーツ | 社会・調査 | 地域  | 文化    | ライフスタイル |
| ---- | ---------- | ------- | -------- | --------- | ---------- | -------- | -------------- | ---------- | ------------- | -------- | ---------- | ----- | ------- | -------------- |
| news | opinion    | economy | politics | financial | business   | 不支持   | 不支持         | technology | international | sports   | society    | local | culture | lifestyle      |

### Home <Site url="www.nikkei.com" size="sm" />

<Route namespace="nikkei" :data='{"path":"/index","name":"Home","example":"/nikkei/index","maintainers":["zjysdhr"],"url":"www.nikkei.com","location":"index.ts","heat":21,"topFeeds":[{"id":"60729951918990336","type":"feed","url":"rsshub://nikkei/index","title":"日本経済新聞","description":"日本経済新聞 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 新华每日电讯 <Site url="mrdx.cn"/>

### 今日 <Site url="mrdx.cn*" size="sm" />

<Route namespace="mrdx" :data='{"path":"/today","categories":["traditional-media"],"example":"/mrdx/today","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["mrdx.cn*"]}],"name":"今日","maintainers":["Dustin-Jiang"],"url":"mrdx.cn*","location":"daily.ts","heat":494,"topFeeds":[{"id":"64309222369856512","type":"feed","url":"rsshub://mrdx/today","title":"新华每日电讯","description":"中国报纸发行前三强。位列《人民日报》，《参考消息》之后。《新华每日电讯》是新华社出版的一份新闻电讯报，1993年创办，具有很高的权威性和准确性，有“一报在手，便知天下”之美誉。《新华每日电讯》为对开八版日报，集中刊登[新华社]每天向国内播发的电讯稿及图片稿。打开《新华每日电讯》，中国和全世界每天发生的重大事件便将一目了然。在人类生活节奏日益加快的当今世界，《新华每日电讯》以最便捷、最醒目的方式为公众提供最重要的新闻报道，受到公众的喜爱和拥护。 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 求是网 <Site url="www.qstheory.cn"/>

### 在线读刊 <Site url="www.qstheory.cn" size="sm" />

<Route namespace="qstheory" :data='{"path":"/magazine/:magazine","categories":["traditional-media"],"example":"/qstheory/magazine/qs","parameters":{"magazine":"刊物，`qs` 为求是，`hqwglist` 为红旗文稿"},"radar":[{"source":["www.qstheory.cn/:magazine/mulu.htm"]}],"name":"在线读刊","maintainers":["TonyRL","cscnk52"],"location":"magazine.ts","heat":358,"topFeeds":[{"id":"80433099883252736","type":"feed","url":"rsshub://qstheory/magazine/qs","title":"《求是》 - 求是网","description":"《求是》 - 求是网 - Powered by RSSHub","image":"http://www.qstheory.cn/20251116/eea24970337546ef8c371b82ac58debd/1c81a3f4512a443d96918ea14c672c3a.jpg"},{"id":"80489063705907200","type":"feed","url":"rsshub://qstheory/magazine/hqwglist","title":"《红旗文稿》 - 求是网","description":"《红旗文稿》 - 求是网 - Powered by RSSHub","image":"http://www.qstheory.cn/20251115/2b614e4a0663492984c1d7b29f59c021/32b72d42a462429e9c00f85ecd25c244.jpg"}]}' :test='{"code":0}' />

### 分类 <Site url="www.qstheory.cn" size="sm" />

<Route namespace="qstheory" :data='{"path":"/:category?","categories":["traditional-media"],"example":"/qstheory","parameters":{"industry":"分类，见下表"},"radar":[{"source":["www.qstheory.cn/v9zhuanqu/:category/index.htm","www.qstheory.cn/qszq/:category/index.htm","www.qstheory.cn/:category/index.htm"]}],"name":"分类","maintainers":["nczitzk"],"description":"\n| 头条    | 网评 | 视频 | 原创   | 经济    | 政治     | 文化    | 社会    | 党建 | 科教    | 生态    | 国防    | 国际          | 图书  | 学习笔记 | 理论文选 |\n| ------- | ---- | ---- | ------ | ------- | -------- | ------- | ------- | ---- | ------- | ------- | ------- | ------------- | ----- | -------- | -------- |\n| toutiao | qswp | qssp | qslgxd | economy | politics | culture | society | cpc  | science | zoology | defense | international | books | xxbj     | llwx     |","location":"index.ts","heat":51,"topFeeds":[{"id":"80832914000440320","type":"feed","url":"rsshub://qstheory","title":"- 求是网","description":"- 求是网 - Powered by RSSHub","image":null},{"id":"81625152130833408","type":"feed","url":"rsshub://qstheory/toutiao","title":"- 求是网","description":"- 求是网 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />


| 头条    | 网评 | 视频 | 原创   | 经济    | 政治     | 文化    | 社会    | 党建 | 科教    | 生态    | 国防    | 国际          | 图书  | 学习笔记 | 理论文选 |
| ------- | ---- | ---- | ------ | ------- | -------- | ------- | ------- | ---- | ------- | ------- | ------- | ------------- | ----- | -------- | -------- |
| toutiao | qswp | qssp | qslgxd | economy | politics | culture | society | cpc  | science | zoology | defense | international | books | xxbj     | llwx     |

## 中央通讯社 <Site url="cna.com.tw"/>

### 分类 <Site url="cna.com.tw" size="sm" />

<Route namespace="cna" :data='{"path":"/:id?","categories":["traditional-media"],"example":"/cna/aall","parameters":{"id":"分类 id 或新闻专题 id。分类 id 见下表，新闻专题 id 為 https://www.cna.com.tw/list/newstopic.aspx 中，連結的數字部份。此參數默认为 aall"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"分类","maintainers":["nczitzk"],"description":"| 即時 | 政治 | 國際 | 兩岸 | 產經 | 證券 | 科技 | 生活 | 社會 | 地方 | 文化 | 運動 | 娛樂 |\n| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |\n| aall | aipl | aopl | acn  | aie  | asc  | ait  | ahel | asoc | aloc | acul | aspt | amov |","location":"index.ts","heat":384,"topFeeds":[{"id":"61601757267858432","type":"feed","url":"rsshub://cna/aall","title":"即時 | 中央社 CNA","description":"中央社即時報導國際、財經、科技、醫藥、生活、運動、教育、政治、影劇、社會、地方即時新聞，提供Facebook、Google+社群討論、分享功能。 - Powered by RSSHub","image":"https://imgcdn.cna.com.tw/www/images/pic_fb.jpg"},{"id":"59799220289372160","type":"feed","url":"rsshub://cna/acn","title":"兩岸 | 中央社 CNA","description":"想掌握中國大陸、香港、澳門即時消息，兩岸交流現況與習近平政府最新動態，反壟斷與港區國安法等重要議題，鎖定中央社兩岸新聞，掌握兩岸新趨勢。 - Powered by RSSHub","image":"https://imgcdn.cna.com.tw/www/images/pic_fb.jpg"}]}' :test='{"code":0}' />

| 即時 | 政治 | 國際 | 兩岸 | 產經 | 證券 | 科技 | 生活 | 社會 | 地方 | 文化 | 運動 | 娛樂 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| aall | aipl | aopl | acn  | aie  | asc  | ait  | ahel | asoc | aloc | acul | aspt | amov |

### 分类 (网页爬虫方法) <Site url="cna.com.tw" size="sm" />

<Route namespace="cna" :data='{"path":"/web/:id?","categories":["traditional-media"],"example":"/cna/web/aall","parameters":{"id":"分类 id，见上表。此參數默认为 aall"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"分类 (网页爬虫方法)","maintainers":["dzx-dzx"],"location":"web/index.ts","heat":4,"topFeeds":[{"id":"70128456816328704","type":"feed","url":"rsshub://cna/web/asc","title":"證券 | 中央社 CNA","description":"證券 | 中央社 CNA - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 中国新闻周刊 <Site url="inewsweek.cn"/>

### 栏目 <Site url="inewsweek.cn" size="sm" />

<Route namespace="inewsweek" :data='{"path":"/:channel","categories":["traditional-media"],"example":"/inewsweek/survey","parameters":{"channel":"栏目"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["inewsweek.cn/:channel","inewsweek.cn/"]}],"name":"栏目","maintainers":["changren-wcr"],"description":"提取文章全文。\n\n| 封面  | 时政     | 社会    | 经济    | 国际  | 调查   | 人物   |\n| ----- | -------- | ------- | ------- | ----- | ------ | ------ |\n| cover | politics | society | finance | world | survey | people |","location":"index.ts","heat":348,"topFeeds":[{"id":"52911553597762560","type":"feed","url":"rsshub://inewsweek/survey","title":"中国新闻周刊--调查","description":"中国新闻周刊--调查 - Powered by RSSHub","image":null},{"id":"66134229854672896","type":"feed","url":"rsshub://inewsweek/world","title":"中国新闻周刊--国际","description":"中国新闻周刊--国际 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

提取文章全文。

| 封面  | 时政     | 社会    | 经济    | 国际  | 调查   | 人物   |
| ----- | -------- | ------- | ------- | ----- | ------ | ------ |
| cover | politics | society | finance | world | survey | people |

## The Atlantic <Site url="www.theatlantic.com"/>

### News <Site url="www.theatlantic.com" size="sm" />

<Route namespace="theatlantic" :data='{"path":"/:category","categories":["traditional-media"],"example":"/theatlantic/latest","parameters":{"category":"category, see below"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.theatlantic.com/:category"]}],"name":"News","maintainers":["EthanWng97","pseudoyu"],"description":"| Popular      | Latest | Politics | Technology | Business |\n| ------------ | ------ | -------- | ---------- | -------- |\n| most-popular | latest | politics | technology | business |\n\n  More categories (except photo) can be found within the navigation bar at [https://www.theatlantic.com](https://www.theatlantic.com)","location":"news.ts","heat":342,"topFeeds":[{"id":"61228164717836288","type":"feed","url":"rsshub://theatlantic/latest","title":"The Atlantic - LATEST","description":"The Atlantic - LATEST - Powered by RSSHub","image":null},{"id":"62408054287669248","type":"feed","url":"rsshub://theatlantic/technology","title":"The Atlantic - TECHNOLOGY","description":"The Atlantic - TECHNOLOGY - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| Popular      | Latest | Politics | Technology | Business |
| ------------ | ------ | -------- | ---------- | -------- |
| most-popular | latest | politics | technology | business |

  More categories (except photo) can be found within the navigation bar at [https://www.theatlantic.com](https://www.theatlantic.com)

## 人民网 <Site url="people.com.cn"/>

### 首页头条 <Site url="people.com.cn" size="sm" />

<Route namespace="people" :data='{"path":"/:site?/:category{.+}?","name":"首页头条","maintainers":["nczitzk","pseudoyu"],"example":"/people","location":"index.ts","heat":314,"topFeeds":[{"id":"73227336896093184","type":"feed","url":"rsshub://people/opinion/8213/49160","title":"人民日报重要言论库--观点--人民网","description":"人民日报重要言论库--观点--人民网 - Powered by RSSHub","image":null},{"id":"59474368564173825","type":"feed","url":"rsshub://people","title":"首页头条--人民网","description":"首页头条--人民网 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected NaN to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 习近平系列重要讲话 <Site url="people.com.cn/" size="sm" />

<Route namespace="people" :data='{"path":"/xjpjh/:keyword?/:year?","categories":["traditional-media"],"example":"/people/xjpjh","parameters":{"keyword":"关键词，默认不填","year":"年份，默认 all"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["people.com.cn/"],"target":"/:site?/:category?"}],"name":"习近平系列重要讲话","maintainers":[],"url":"people.com.cn/","location":"xjpjh.ts","heat":12,"topFeeds":[{"id":"159914682433828881","type":"feed","url":"rsshub://people/xjpjh","title":"Importing","description":null,"image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 领导留言板 <Site url="liuyan.people.com.cn/" size="sm" />

<Route namespace="people" :data='{"path":"/liuyan/:id/:state?","categories":["traditional-media"],"example":"/people/liuyan/539","parameters":{"id":"编号，可在对应人物页 URL 中找到","state":"状态，见下表，默认为全部"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["liuyan.people.com.cn/"]}],"name":"领导留言板","maintainers":["nczitzk"],"url":"liuyan.people.com.cn/","description":"| 全部 | 待回复 | 办理中 | 已办理 |\n| ---- | ------ | ------ | ------ |\n| 1    | 2      | 3      | 4      |","location":"liuyan.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 全部 | 待回复 | 办理中 | 已办理 |
| ---- | ------ | ------ | ------ |
| 1    | 2      | 3      | 4      |

## 聯合新聞網 <Site url="udn.com"/>

### 即時新聞 <Site url="udn.com" size="sm" />

<Route namespace="udn" :data='{"path":"/news/breakingnews/:id","categories":["traditional-media"],"example":"/udn/news/breakingnews/99","parameters":{"id":"类别"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["udn.com/news/breaknews/1/:id","udn.com/"]}],"name":"即時新聞","maintainers":["miles170"],"description":"| 0    | 1    | 2    | 3    | 4    | 5    | 6    | 7    | 8    | 9    | 11   | 12   | 13   | 99     |\n| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ------ |\n| 精選 | 要聞 | 社會 | 地方 | 兩岸 | 國際 | 財經 | 運動 | 娛樂 | 生活 | 股市 | 文教 | 數位 | 不分類 |","location":"breaking-news.ts","heat":215,"topFeeds":[{"id":"67002999442518016","type":"feed","url":"rsshub://udn/news/breakingnews/99","title":"即時不分類 - 聯合新聞網","description":"udn.com 提供即時新聞以及豐富的政治、社會、地方、兩岸、國際、財經、數位、運動、NBA、娛樂、生活、健康、旅遊新聞，以最即時、多元的內容，滿足行動世代的需求 - Powered by RSSHub","image":null},{"id":"62014591710445580","type":"feed","url":"rsshub://udn/news/breakingnews/4","title":"即時兩岸 - 聯合新聞網","description":"udn.com 提供即時新聞以及豐富的政治、社會、地方、兩岸、國際、財經、數位、運動、NBA、娛樂、生活、健康、旅遊新聞，以最即時、多元的內容，滿足行動世代的需求 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 0    | 1    | 2    | 3    | 4    | 5    | 6    | 7    | 8    | 9    | 11   | 12   | 13   | 99     |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ------ |
| 精選 | 要聞 | 社會 | 地方 | 兩岸 | 國際 | 財經 | 運動 | 娛樂 | 生活 | 股市 | 文教 | 數位 | 不分類 |

### 轉角國際 - 首頁 <Site url="udn.com" size="sm" />

<Route namespace="udn" :data='{"path":"/global/:category?","categories":["traditional-media"],"example":"/udn/global","parameters":{"category":"分类，见下表，默认为首頁"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["global.udn.com/global_vision/index","global.udn.com/"]}],"name":"轉角國際 - 首頁","maintainers":["nczitzk"],"description":"| 首頁 | 編輯精選 | 熱門文章 |\n| ---- | -------- | -------- |\n|      | editor   | hot      |","location":"global/index.ts","heat":89,"topFeeds":[{"id":"41373653871256597","type":"feed","url":"rsshub://udn/global","title":"轉角國際 udn Global","description":"轉角國際 udn Global - Powered by RSSHub","image":null},{"id":"157947335946852352","type":"feed","url":"rsshub://udn/global/hot","title":"轉角國際 udn Global","description":"轉角國際 udn Global - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 首頁 | 編輯精選 | 熱門文章 |
| ---- | -------- | -------- |
|      | editor   | hot      |

### 轉角國際 - 標籤 <Site url="udn.com" size="sm" />

<Route namespace="udn" :data='{"path":"/global/tag/:tag?","categories":["traditional-media"],"example":"/udn/global/tag/過去24小時","parameters":{"tag":"标签，可在对应标签页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["global.udn.com/search/tagging/1020/:tag","global.udn.com/"]}],"name":"轉角國際 - 標籤","maintainers":["emdoe","nczitzk"],"description":"| 過去 24 小時 | 鏡頭背後 | 深度專欄 | 重磅廣播 |\n| ------------ | -------- | -------- | -------- |","location":"global/tag.ts","heat":18,"topFeeds":[{"id":"69916583666986003","type":"feed","url":"rsshub://udn/global/tag/%E9%81%8E%E5%8E%BB24%E5%B0%8F%E6%99%82","title":"轉角國際 udn Global - 過去24小時","description":"轉角國際 udn Global - 過去24小時 - Powered by RSSHub","image":null},{"id":"80781985075075072","type":"feed","url":"rsshub://udn/global/tag/%E6%B7%B1%E5%BA%A6%E5%B0%88%E6%AC%84","title":"轉角國際 udn Global - 深度專欄","description":"轉角國際 udn Global - 深度專欄 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 過去 24 小時 | 鏡頭背後 | 深度專欄 | 重磅廣播 |
| ------------ | -------- | -------- | -------- |

## CNBC <Site url="search.cnbc.com"/>

### Full article RSS <Site url="search.cnbc.com" size="sm" />

<Route namespace="cnbc" :data='{"path":"/rss/:id?","categories":["traditional-media"],"example":"/cnbc/rss","parameters":{"id":"Channel ID, can be found in Official RSS URL, `100003114` (Top News) by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.cnbc.com/id/:id/device/rss/rss.html"],"target":"/rss/:id"}],"name":"Full article RSS","maintainers":["TonyRL"],"description":"Provides a better reading experience (full articles) over the official ones.\n\n  Support all channels, refer to [CNBC RSS feeds](https://www.cnbc.com/rss-feeds/).","location":"rss.ts","heat":296,"topFeeds":[{"id":"59846974115348480","type":"feed","url":"rsshub://cnbc/rss","title":"US Top News and Analysis","description":"CNBC is the world leader in business news and real-time financial market coverage. Find fast, actionable information. - Powered by RSSHub","image":null},{"id":"77157605247889408","type":"feed","url":"rsshub://cnbc/rss/100003114","title":"US Top News and Analysis","description":"CNBC is the world leader in business news and real-time financial market coverage. Find fast, actionable information. - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

Provides a better reading experience (full articles) over the official ones.

  Support all channels, refer to [CNBC RSS feeds](https://www.cnbc.com/rss-feeds/).

## 东网 <Site url="hk.on.cc"/>

### 即時新聞 <Site url="hk.on.cc" size="sm" />

<Route namespace="oncc" :data='{"path":"/:language/:channel?","categories":["traditional-media"],"example":"/oncc/zh-hant/news","parameters":{"language":"`zh-hans` 为简体，`zh-hant` 为繁体","channel":"频道，默认为港澳"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"即時新聞","maintainers":["Fatpandac"],"description":"频道参数可以从官网的地址中获取，如：\n\n  `https://hk.on.cc/hk/finance/index_cn.html` 对应 `/oncc/zh-hans/finance`\n\n  `https://hk.on.cc/hk/finance/index.html` 对应 `/oncc/zh-hant/finance`","location":"index.ts","heat":271,"topFeeds":[{"id":"61348617925421056","type":"feed","url":"rsshub://oncc/zh-hant/news","title":"東網 - 港澳","description":"東網 - 港澳 - Powered by RSSHub","image":null},{"id":"74060845450725376","type":"feed","url":"rsshub://oncc/zh-hans/news","title":"東網 - 港澳","description":"東網 - 港澳 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

频道参数可以从官网的地址中获取，如：

  `https://hk.on.cc/hk/finance/index_cn.html` 对应 `/oncc/zh-hans/finance`

  `https://hk.on.cc/hk/finance/index.html` 对应 `/oncc/zh-hant/finance`

### Money18 <Site url="hk.on.cc" size="sm" />

<Route namespace="oncc" :data='{"path":"/money18/:id?","categories":["traditional-media"],"example":"/oncc/money18/exp","parameters":{"id":"栏目 id，可在对应栏目页 URL 中找到，默认为 exp，即新聞總覽"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Money18","maintainers":["nczitzk"],"description":"| 新聞總覽 | 全日焦點 | 板塊新聞 | 國際金融 | 大行報告 | A 股新聞 | 地產新聞 | 投資理財  | 新股 IPO | 科技財情 |\n| -------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- | -------- | -------- |\n| exp      | fov      | industry | int      | recagent | ntlgroup | pro      | weainvest | ipo      | tech     |","location":"money18.ts","heat":12,"topFeeds":[{"id":"149880667170940928","type":"feed","url":"rsshub://oncc/money18","title":"東網產經 - 新聞總覽","description":"東網產經 - 新聞總覽 - Powered by RSSHub","image":null},{"id":"157944883618202624","type":"feed","url":"rsshub://oncc/money18/fov","title":"東網產經 - 全日焦點","description":"東網產經 - 全日焦點 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 新聞總覽 | 全日焦點 | 板塊新聞 | 國際金融 | 大行報告 | A 股新聞 | 地產新聞 | 投資理財  | 新股 IPO | 科技財情 |
| -------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- | -------- | -------- |
| exp      | fov      | industry | int      | recagent | ntlgroup | pro      | weainvest | ipo      | tech     |

## The Washington Post <Site url="www.washingtonpost.com"/>

### App <Site url="www.washingtonpost.com" size="sm" />

<Route namespace="washingtonpost" :data='{"path":"/app/:category{.+}?","categories":["traditional-media"],"example":"/washingtonpost/app/national","parameters":{"category":"Category from the path of the URL of the corresponding site, see below"},"features":{"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"App","maintainers":["quiniapiezoelectricity"],"radar":[{"source":["www.washingtonpost.com/:category"],"target":"/app/:category"}],"description":"::: tip\nFor example, the category for https://www.washingtonpost.com/national/investigations would be /national/investigations.\n:::","location":"app.ts","heat":275,"topFeeds":[{"id":"86963096699402240","type":"feed","url":"rsshub://washingtonpost/app/world","title":"The Washington Post - World","description":"The Washington Post - World - Powered by RSSHub","image":null},{"id":"74046907703950336","type":"feed","url":"rsshub://washingtonpost/app","title":"The Washington Post - Breaking news and latest headlines, U.S. news, world news, and video - The Washington Post","description":"The Washington Post - Breaking news and latest headlines, U.S. news, world news, and video - The Washington Post - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

::: tip
For example, the category for https://www.washingtonpost.com/national/investigations would be /national/investigations.
:::

## Caixin Global <Site url="caixinglobal.com"/>

### Latest News <Site url="caixinglobal.com/news" size="sm" />

<Route namespace="caixinglobal" :data='{"path":"/latest","categories":["traditional-media"],"example":"/caixinglobal/latest","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["caixinglobal.com/news","caixinglobal.com/"]}],"name":"Latest News","maintainers":["TonyRL"],"url":"caixinglobal.com/news","location":"latest.ts","heat":241,"topFeeds":[{"id":"41377645117857792","type":"feed","url":"rsshub://caixinglobal/latest","title":"The Latest Top Headlines on China - Caixin Global","description":"The latest headlines on China finance, companies, politics, international affairs and other China-related issues from around the world. Caixin Global - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 半月谈 <Site url="banyuetan.org"/>

### 栏目 <Site url="www.banyuetan.org" size="sm" />

<Route namespace="banyuetan" :data='{"path":"/:id?","name":"栏目","url":"www.banyuetan.org","maintainers":["nczitzk"],"example":"/banyuetan/jinritan","parameters":{"id":{"description":"栏目 ID，默认为 `jinritan`，即今日谈，可在对应分类页 URL 中找到","options":[{"label":"今日谈","value":"jinritan"},{"label":"时政讲解","value":"shizhengjiangjie"},{"label":"评论","value":"banyuetanpinglun"},{"label":"基层治理","value":"jicengzhili"},{"label":"文化","value":"wenhua"},{"label":"教育","value":"jiaoyu"}]}},"description":"::: tip\n订阅 [今日谈](http://www.banyuetan.org/byt/jinritan/)，其源网址为 `http://www.banyuetan.org/byt/jinritan/`，请参考该 URL 指定部分构成参数，此时路由为 [`/banyuetan/jinritan`](https://rsshub.app/banyuetan/jinritan)。\n:::\n\n| 栏目                                                                 | ID                                                                |\n| -------------------------------------------------------------------- | ----------------------------------------------------------------- |\n| [今日谈](http://www.banyuetan.org/byt/jinritan/index.html)           | [jinritan](https://rsshub.app/banyuetan/jinritan)                 |\n| [时政讲解](http://www.banyuetan.org/byt/shizhengjiangjie/index.html) | [shizhengjiangjie](https://rsshub.app/banyuetan/shizhengjiangjie) |\n| [评论](http://www.banyuetan.org/byt/banyuetanpinglun/index.html)     | [banyuetanpinglun](https://rsshub.app/banyuetan/banyuetanpinglun) |\n| [基层治理](http://www.banyuetan.org/byt/jicengzhili/index.html)      | [jicengzhili](https://rsshub.app/banyuetan/jicengzhili)           |\n| [文化](http://www.banyuetan.org/byt/wenhua/index.html)               | [wenhua](https://rsshub.app/banyuetan/wenhua)                     |\n| [教育](http://www.banyuetan.org/byt/jiaoyu/index.html)               | [jiaoyu](https://rsshub.app/banyuetan/jiaoyu)                     |\n\n","categories":["traditional-media"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.banyuetan.org/byt/:id"],"target":"/:id"},{"title":"今日谈","source":["www.banyuetan.org/byt/jinritan/index.html"],"target":"/jinritan"},{"title":"时政讲解","source":["www.banyuetan.org/byt/shizhengjiangjie/index.html"],"target":"/shizhengjiangjie"},{"title":"评论","source":["www.banyuetan.org/byt/banyuetanpinglun/index.html"],"target":"/banyuetanpinglun"},{"title":"基层治理","source":["www.banyuetan.org/byt/jicengzhili/index.html"],"target":"/jicengzhili"},{"title":"文化","source":["www.banyuetan.org/byt/wenhua/index.html"],"target":"/wenhua"},{"title":"教育","source":["www.banyuetan.org/byt/jiaoyu/index.html"],"target":"/jiaoyu"}],"view":0,"location":"index.ts","heat":233,"topFeeds":[{"id":"148757739569766416","type":"feed","url":"rsshub://banyuetan/shizhengjiangjie","title":"时政讲解—半月谈网","description":"时政讲解—半月谈网 - Powered by RSSHub","image":"http://www.banyuetan.org/static/v1/image/logo.png"},{"id":"148757739569766415","type":"feed","url":"rsshub://banyuetan/jinritan","title":"今日谈—半月谈网","description":"今日谈—半月谈网 - Powered by RSSHub","image":"http://www.banyuetan.org/static/v1/image/logo.png"}]}' :test='{"code":0}' />

::: tip
订阅 [今日谈](http://www.banyuetan.org/byt/jinritan/)，其源网址为 `http://www.banyuetan.org/byt/jinritan/`，请参考该 URL 指定部分构成参数，此时路由为 [`/banyuetan/jinritan`](https://rsshub.app/banyuetan/jinritan)。
:::

| 栏目                                                                 | ID                                                                |
| -------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [今日谈](http://www.banyuetan.org/byt/jinritan/index.html)           | [jinritan](https://rsshub.app/banyuetan/jinritan)                 |
| [时政讲解](http://www.banyuetan.org/byt/shizhengjiangjie/index.html) | [shizhengjiangjie](https://rsshub.app/banyuetan/shizhengjiangjie) |
| [评论](http://www.banyuetan.org/byt/banyuetanpinglun/index.html)     | [banyuetanpinglun](https://rsshub.app/banyuetan/banyuetanpinglun) |
| [基层治理](http://www.banyuetan.org/byt/jicengzhili/index.html)      | [jicengzhili](https://rsshub.app/banyuetan/jicengzhili)           |
| [文化](http://www.banyuetan.org/byt/wenhua/index.html)               | [wenhua](https://rsshub.app/banyuetan/wenhua)                     |
| [教育](http://www.banyuetan.org/byt/jiaoyu/index.html)               | [jiaoyu](https://rsshub.app/banyuetan/jiaoyu)                     |



## Sputnik News 俄罗斯卫星通讯社 <Site url="sputniknews.cn"/>

### Category <Site url="sputniknews.cn" size="sm" />

<Route namespace="sputniknews" :data='{"path":"/:category?/:language?","categories":["traditional-media"],"example":"/sputniknews","parameters":{"category":"Category, can be found in URL, `news` by default","language":"Language, see below, English by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Category","maintainers":["nczitzk"],"description":"Categories for International site:\n\n| WORLD | COVID-19 | BUSINESS | SPORT | TECH | OPINION |\n| ----- | -------- | -------- | ----- | ---- | ------- |\n| world | covid-19 | business | sport | tech | opinion |\n\n  Categories for Chinese site:\n\n| 新闻 | 中国  | 俄罗斯 | 国际            | 俄中关系                 | 评论    |\n| ---- | ----- | ------ | --------------- | ------------------------ | ------- |\n| news | china | russia | category_guoji | russia_china_relations | opinion |\n\n  Language\n\n| Language    | Id          |\n| ----------- | ----------- |\n| English     | english     |\n| Spanish     | spanish     |\n| German      | german      |\n| French      | french      |\n| Greek       | greek       |\n| Italian     | italian     |\n| Czech       | czech       |\n| Polish      | polish      |\n| Serbian     | serbian     |\n| Latvian     | latvian     |\n| Lithuanian  | lithuanian  |\n| Moldavian   | moldavian   |\n| Belarusian  | belarusian  |\n| Armenian    | armenian    |\n| Abkhaz      | abkhaz      |\n| Ssetian     | ssetian     |\n| Georgian    | georgian    |\n| Azerbaijani | azerbaijani |\n| Arabic      | arabic      |\n| Turkish     | turkish     |\n| Persian     | persian     |\n| Dari        | dari        |\n| Kazakh      | kazakh      |\n| Kyrgyz      | kyrgyz      |\n| Uzbek       | uzbek       |\n| Tajik       | tajik       |\n| Vietnamese  | vietnamese  |\n| Japanese    | japanese    |\n| Chinese     | chinese     |\n| Portuguese  | portuguese  |","location":"index.ts","heat":206,"topFeeds":[{"id":"60322104504418309","type":"feed","url":"rsshub://sputniknews","title":"news - Sputnik News","description":"news - Sputnik News - Powered by RSSHub","image":null},{"id":"68844937961281540","type":"feed","url":"rsshub://sputniknews/news/chinese","title":"news - Sputnik News","description":"news - Sputnik News - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

Categories for International site:

| WORLD | COVID-19 | BUSINESS | SPORT | TECH | OPINION |
| ----- | -------- | -------- | ----- | ---- | ------- |
| world | covid-19 | business | sport | tech | opinion |

  Categories for Chinese site:

| 新闻 | 中国  | 俄罗斯 | 国际            | 俄中关系                 | 评论    |
| ---- | ----- | ------ | --------------- | ------------------------ | ------- |
| news | china | russia | category_guoji | russia_china_relations | opinion |

  Language

| Language    | Id          |
| ----------- | ----------- |
| English     | english     |
| Spanish     | spanish     |
| German      | german      |
| French      | french      |
| Greek       | greek       |
| Italian     | italian     |
| Czech       | czech       |
| Polish      | polish      |
| Serbian     | serbian     |
| Latvian     | latvian     |
| Lithuanian  | lithuanian  |
| Moldavian   | moldavian   |
| Belarusian  | belarusian  |
| Armenian    | armenian    |
| Abkhaz      | abkhaz      |
| Ssetian     | ssetian     |
| Georgian    | georgian    |
| Azerbaijani | azerbaijani |
| Arabic      | arabic      |
| Turkish     | turkish     |
| Persian     | persian     |
| Dari        | dari        |
| Kazakh      | kazakh      |
| Kyrgyz      | kyrgyz      |
| Uzbek       | uzbek       |
| Tajik       | tajik       |
| Vietnamese  | vietnamese  |
| Japanese    | japanese    |
| Chinese     | chinese     |
| Portuguese  | portuguese  |

## WIRED <Site url="www.wired.com"/>

### Tags <Site url="www.wired.com" size="sm" />

<Route namespace="wired" :data='{"path":"/tag/:tag","example":"/wired/tag/facebook","parameters":{"tag":"Tag name"},"radar":[{"source":["www.wired.com/tag/:tag/"]}],"name":"Tags","maintainers":["Naiqus"],"location":"tag.ts","heat":201,"topFeeds":[{"id":"65791385545769984","type":"feed","url":"rsshub://wired/tag/artificial-intelligence","title":"Artificial Intelligence | Latest News, Photos & Videos | WIRED","description":"Find the latest Artificial Intelligence news from WIRED. See related science and technology articles, photos, slideshows and videos. - Powered by RSSHub","image":"https://www.wired.com/verso/static/wired-us/assets/logo.svg"},{"id":"60143536924270671","type":"feed","url":"rsshub://wired/tag/bitcoin","title":"Bitcoin | Latest News, Photos & Videos | WIRED","description":"Find the latest Bitcoin news from WIRED. See related science and technology articles, photos, slideshows and videos. - Powered by RSSHub","image":"https://www.wired.com/verso/static/wired-us/assets/logo.svg"}]}' :test='{"code":0}' />

## DW Deutsche Welle <Site url="dw.com"/>

### News <Site url="dw.com" size="sm" />

<Route namespace="dw" :data='{"path":"/news/:lang?/:id?","categories":["traditional-media"],"example":"/dw/news","parameters":{"lang":"Language, see below, default to en","id":"Category ID, see below, default to the id of the Top Stories Page of the language chosen"},"features":{"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false,"requireConfig":false},"name":"News","maintainers":["quiniapiezoelectricity"],"description":"\n::: tip\nParameters can be obtained from the official website, for instance:\nFor the site https://www.dw.com/de/deutschland/s-12321 the language code would be `de` and the category ID would be `s-1432`.\n:::\n","radar":[{"source":["www.dw.com/:lang/:name/:id"],"target":"/news/:lang/:id"}],"location":"news.ts","heat":179,"topFeeds":[{"id":"82823881871653888","type":"feed","url":"rsshub://dw/news/zh/s-9058","title":"DW | 在线报导","description":"德国之声中文频道通过文字、音频、视频相结合的多媒体方式提供以德国和欧洲为主同时包括世界政经资讯。我们的报道重点也包括中国政治、经济、社会的发展以及我们的中国受众群最关心感兴趣的各类话题。 - Powered by RSSHub","image":null},{"id":"80448685677001728","type":"feed","url":"rsshub://dw/news","title":"DW | News and current affairs from Germany and around the world","description":"News, off-beat stories and analysis of German and international affairs. Dive deeper with our features from Europe and beyond. Watch our 24/7 TV stream. - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected [ …(8) ] to not include &#39;https://www.dw.com/en/germany-news-me…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1252:15)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1090:14)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@6.2.1/node_modules/chai/index.js:1700:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />


::: tip
Parameters can be obtained from the official website, for instance:
For the site https://www.dw.com/de/deutschland/s-12321 the language code would be `de` and the category ID would be `s-1432`.
:::


### RSS <Site url="dw.com" size="sm" />

<Route namespace="dw" :data='{"path":"/rss/:channel?","categories":["traditional-media"],"example":"/dw/rss/rss-en-all","parameters":{"category":"RSS Feed Channel, see below, `rss-en-all` by default"},"features":{"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false,"requireConfig":false},"name":"RSS","maintainers":["quiniapiezoelectricity"],"description":"\nFor a full list of RSS Feed Channels in English, please refer to [DW RSS Feeds](https://corporate.dw.com/en/rss-feeds/a-68693346).\nRSS Feed Channels in other languages are also available, for example: `rss-chi-all` renders the RSS feed in Chinese and `rss-de-all` for the RSS Feed in German\n","location":"rss.ts","heat":20,"topFeeds":[{"id":"80331041578519552","type":"feed","url":"rsshub://dw/rss/rss-en-all","title":"Deutsche Welle","description":"Deutsche Welle - Powered by RSSHub","image":null},{"id":"80330476301410304","type":"feed","url":"rsshub://dw/rss/rss-chi-all","title":"Deutsche Welle: DW-WORLD.DE","description":"Deutsche Welle: DW-WORLD.DE - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />


For a full list of RSS Feed Channels in English, please refer to [DW RSS Feeds](https://corporate.dw.com/en/rss-feeds/a-68693346).
RSS Feed Channels in other languages are also available, for example: `rss-chi-all` renders the RSS feed in Chinese and `rss-de-all` for the RSS Feed in German


## Now 新聞 <Site url="news.now.com"/>

### 新聞 <Site url="news.now.com/" size="sm" />

<Route namespace="now" :data='{"path":"/news/:category?/:id?","categories":["traditional-media"],"example":"/now/news","parameters":{"category":"分类，见下表，默认为首页","id":"编号，可在对应专题/节目页 URL 中找到 topicId"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["news.now.com/home/:category?","news.now.com/"],"target":"/news/:category?"}],"name":"新聞","maintainers":["nczitzk"],"url":"news.now.com/","description":"::: tip\n  **编号** 仅对事件追蹤、評論節目、新聞專題三个分类起作用，例子如下：\n\n  对于 [事件追蹤](https://news.now.com/home/tracker) 中的 [塔利班奪權](https://news.now.com/home/tracker/detail?catCode=123&topicId=1056) 话题，其网址为 `https://news.now.com/home/tracker/detail?catCode=123&topicId=1056`，其中 `topicId` 为 1056，则对应路由为 [`/now/news/tracker/1056`](https://rsshub.app/now/news/tracker/1056)\n:::\n\n| 首頁 | 港聞  | 兩岸國際      | 娛樂          |\n| ---- | ----- | ------------- | ------------- |\n|      | local | international | entertainment |\n\n| 生活 | 科技       | 財經    | 體育   |\n| ---- | ---------- | ------- | ------ |\n| life | technology | finance | sports |\n\n| 事件追蹤 | 評論節目 | 新聞專題 |\n| -------- | -------- | -------- |\n| tracker  | feature  | opinion  |","location":"news.ts","heat":195,"topFeeds":[{"id":"60960343462107136","type":"feed","url":"rsshub://now/news","title":"首頁 | Now 新聞","description":"首頁 | Now 新聞 - Powered by RSSHub","image":null},{"id":"61348755817519104","type":"feed","url":"rsshub://now/news/local","title":"首頁 | Now 新聞","description":"首頁 | Now 新聞 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

::: tip
  **编号** 仅对事件追蹤、評論節目、新聞專題三个分类起作用，例子如下：

  对于 [事件追蹤](https://news.now.com/home/tracker) 中的 [塔利班奪權](https://news.now.com/home/tracker/detail?catCode=123&topicId=1056) 话题，其网址为 `https://news.now.com/home/tracker/detail?catCode=123&topicId=1056`，其中 `topicId` 为 1056，则对应路由为 [`/now/news/tracker/1056`](https://rsshub.app/now/news/tracker/1056)
:::

| 首頁 | 港聞  | 兩岸國際      | 娛樂          |
| ---- | ----- | ------------- | ------------- |
|      | local | international | entertainment |

| 生活 | 科技       | 財經    | 體育   |
| ---- | ---------- | ------- | ------ |
| life | technology | finance | sports |

| 事件追蹤 | 評論節目 | 新聞專題 |
| -------- | -------- | -------- |
| tracker  | feature  | opinion  |

## Corona Virus Disease 2019 <Site url="scmp.com"/>

### News <Site url="scmp.com" size="sm" />

<Route namespace="scmp" :data='{"path":"/:category_id","categories":["traditional-media"],"example":"/scmp/3","parameters":{"category_id":"Category"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["scmp.com/rss/:category_id/feed"]}],"name":"News","maintainers":["proletarius101"],"description":"See the [official RSS page](https://www.scmp.com/rss) to get the ID of each category. This route provides fulltext that the offical feed doesn&#39;t.","location":"index.ts","heat":169,"topFeeds":[{"id":"58381798255721484","type":"feed","url":"rsshub://scmp/4","title":"China - South China Morning Post","description":"The latest breaking news from China. - Powered by RSSHub","image":"https://assets.i-scmp.com/static/img/icons/scmp-meta-1200x630.png"},{"id":"58381798255721483","type":"feed","url":"rsshub://scmp/3","title":"Asia - South China Morning Post","description":"Breaking news, analysis and opinion from the SCMP&#39;s Asia edition. - Powered by RSSHub","image":"https://assets.i-scmp.com/static/img/icons/scmp-meta-1200x630.png"}]}' :test='{"code":0}' />

See the [official RSS page](https://www.scmp.com/rss) to get the ID of each category. This route provides fulltext that the offical feed doesn't.

### Topics <Site url="scmp.com" size="sm" />

<Route namespace="scmp" :data='{"path":"/topics/:topic","categories":["traditional-media"],"example":"/scmp/topics/coronavirus-pandemic-all-stories","parameters":{"topic":"Topic, can be found in URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["scmp.com/topics/:topic"]}],"name":"Topics","maintainers":["TonyRL"],"location":"topic.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 共同网 <Site url="china.kyodonews.net"/>

### 最新报道 <Site url="china.kyodonews.net" size="sm" />

<Route namespace="kyodonews" :data='{"path":"/:language?/:keyword?","categories":["traditional-media"],"example":"/kyodonews","parameters":{"language":"语言: `china` = 简体中文 (默认), `tchina` = 繁體中文","keyword":"关键词"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"最新报道","maintainers":["Rongronggg9"],"description":"`keyword` 为关键词，由于共同网有许多关键词并不在主页列出，此处不一一列举，可从关键词页的 URL 的最后一级路径中提取。如 `日中关系` 的关键词页 URL 为 `https://china.kyodonews.net/news/japan-china_relationship`, 则将 `japan-china_relationship` 填入 `keyword`。特别地，当填入 `rss` 时，将从共同网官方 RSS 中抓取文章；略去时，将从首页抓取最新报道 (注意：首页更新可能比官方 RSS 稍慢)。","location":"index.ts","heat":156,"topFeeds":[{"id":"56542470518821888","type":"feed","url":"rsshub://kyodonews","title":"共同网","description":"日本一般社团法人共同通讯社（以下简称共同社）成立于1945年，由日本全国的报社及日本放送协会（NHK）等媒体共同设立，独立于政府，旨在准确公正地报道国内外的新闻，在满足国民知情权的同时，为增进国际社会的相互理解做贡献。共同社除了在国内各都道府县政府所在地及其他主要城市拥有分社和分局之外，在海外的约40座主要城市也设有总局或分局，员工总数约1600人。 作为立足于亚洲、代表日本的综合性国际通讯社，共同社在原有的日语和英语服务的基础上，于2001年设立了中文新闻网站&ldquo;共同网&rdquo;，并在建社60周年的2005年成立了中文新闻部门，扩大了中文信息服务，致力于提供各领域最新消息，希望以自身的努力增进华语圈读者对日本社会的了解。 - Powered by RSSHub","image":"https://china.kyodonews.net/apple-touch-icon-180x180.png"},{"id":"66155011953127424","type":"feed","url":"rsshub://kyodonews/china/rss","title":"新闻 - 共同网","description":"共同网在网上：每日国际，日本新闻，日本新闻，从报纸，国家和地方新闻报道，突发新闻更新，技术新闻，体育，评论，上市。 - Powered by RSSHub","image":"https://china.kyodonews.net/apple-touch-icon-180x180.png"}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

`keyword` 为关键词，由于共同网有许多关键词并不在主页列出，此处不一一列举，可从关键词页的 URL 的最后一级路径中提取。如 `日中关系` 的关键词页 URL 为 `https://china.kyodonews.net/news/japan-china_relationship`, 则将 `japan-china_relationship` 填入 `keyword`。特别地，当填入 `rss` 时，将从共同网官方 RSS 中抓取文章；略去时，将从首页抓取最新报道 (注意：首页更新可能比官方 RSS 稍慢)。

## Foreign Affairs <Site url="www.foreignaffairs.com"/>

### RSS <Site url="www.foreignaffairs.com" size="sm" />

<Route namespace="foreignaffairs" :data='{"path":"/rss","categories":["traditional-media"],"example":"/foreignaffairs/rss","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"RSS","maintainers":["dzx-dzx"],"location":"rss.ts","heat":155,"topFeeds":[{"id":"119928653973749760","type":"feed","url":"rsshub://foreignaffairs/rss","title":"Foreign Affairs - RSS","description":"Foreign Affairs - RSS - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 无线新闻 <Site url="tvb.com"/>

### 新闻 <Site url="tvb.com" size="sm" />

<Route namespace="tvb" :data='{"path":"/news/:category?/:language?","categories":["traditional-media"],"example":"/tvb/news","parameters":{"category":"分类，见下表，默认为要聞","language":"语言，见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["tvb.com/:language/:category","tvb.com/"]}],"name":"新闻","maintainers":["nczitzk"],"description":"分类\n\n| 要聞  | 快訊    | 港澳  | 兩岸         | 國際  | 財經    | 體育   | 法庭       | 天氣    |\n| ----- | ------- | ----- | ------------ | ----- | ------- | ------ | ---------- | ------- |\n| focus | instant | local | greaterchina | world | finance | sports | parliament | weather |\n\n  语言\n\n| 繁 | 简 |\n| -- | -- |\n| tc | sc |","location":"news.ts","heat":136,"topFeeds":[{"id":"61348313469205504","type":"feed","url":"rsshub://tvb/news","title":"TVB News - 要聞","description":"TVB News - 要聞 - Powered by RSSHub","image":null},{"id":"68507536443122688","type":"feed","url":"rsshub://tvb/news/focus/sc","title":"TVB News - 要闻","description":"TVB News - 要闻 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

分类

| 要聞  | 快訊    | 港澳  | 兩岸         | 國際  | 財經    | 體育   | 法庭       | 天氣    |
| ----- | ------- | ----- | ------------ | ----- | ------- | ------ | ---------- | ------- |
| focus | instant | local | greaterchina | world | finance | sports | parliament | weather |

  语言

| 繁 | 简 |
| -- | -- |
| tc | sc |

## 天下雜誌 <Site url="cw.com.tw"/>

### 主頻道 <Site url="cw.com.tw" size="sm" />

<Route namespace="cw" :data='{"path":"/master/:channel","categories":["traditional-media"],"example":"/cw/master/8","parameters":{"channel":"主頻道 ID，可在 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"主頻道","maintainers":["TonyRL"],"description":"| 主頻道名稱 | 主頻道 ID |\n| ---------- | --------- |\n| 財經       | 8         |\n| 產業       | 7         |\n| 國際       | 9         |\n| 管理       | 10        |\n| 環境       | 12        |\n| 教育       | 13        |\n| 人物       | 14        |\n| 政治社會   | 77        |\n| 調查排行   | 15        |\n| 健康關係   | 79        |\n| 時尚品味   | 11        |\n| 運動生活   | 103       |\n| 重磅外媒   | 16        |","location":"master.ts","heat":72,"topFeeds":[{"id":"66757488440144896","type":"feed","url":"rsshub://cw/master/8","title":"財經－天下雜誌","description":"天下雜誌提供最新財經等重要資訊報導。 - Powered by RSSHub","image":"https://www.cw.com.tw/assets_new/img/fbshare.jpg"},{"id":"84170446829198336","type":"feed","url":"rsshub://cw/master/9","title":"國際－天下雜誌","description":"天下雜誌提供最新國際等重要資訊報導。 - Powered by RSSHub","image":"https://www.cw.com.tw/assets_new/img/fbshare.jpg"}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 主頻道名稱 | 主頻道 ID |
| ---------- | --------- |
| 財經       | 8         |
| 產業       | 7         |
| 國際       | 9         |
| 管理       | 10        |
| 環境       | 12        |
| 教育       | 13        |
| 人物       | 14        |
| 政治社會   | 77        |
| 調查排行   | 15        |
| 健康關係   | 79        |
| 時尚品味   | 11        |
| 運動生活   | 103       |
| 重磅外媒   | 16        |

### 最新上線 <Site url="cw.com.tw/today" size="sm" />

<Route namespace="cw" :data='{"path":"/today","categories":["traditional-media"],"example":"/cw/today","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["cw.com.tw/today","cw.com.tw/"]}],"name":"最新上線","maintainers":["TonyRL"],"url":"cw.com.tw/today","location":"today.ts","heat":37,"topFeeds":[{"id":"60230426333120512","type":"feed","url":"rsshub://cw/today","title":"今日最新－天下雜誌","description":"天下雜誌每日精選財經、國際、管理、教育、經濟學人、評論、時尚，深入解讀世界脈動。 - Powered by RSSHub","image":"https://www.cw.com.tw/assets_new/img/fbshare.jpg"}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 作者 <Site url="cw.com.tw" size="sm" />

<Route namespace="cw" :data='{"path":"/author/:channel","categories":["traditional-media"],"example":"/cw/author/57","parameters":{"channel":"作者 ID，可在 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["cw.com.tw/author/:channel"]}],"name":"作者","maintainers":["TonyRL"],"location":"author.ts","heat":10,"topFeeds":[{"id":"69435755254558720","type":"feed","url":"rsshub://cw/author/57","title":"經濟學人｜最新文章｜天下雜誌","description":"《經濟學人》（The Economist）是一份英國的英文新聞週報，是一本涉及全球政治、經濟、文化、科技等多方面事務的綜合性新聞評論刊物，著重於對這些議題提供深入的分析和評論。 - Powered by RSSHub","image":"https://cdn-www.cw.com.tw/article/201909/article-5d75f21940867.jpg"}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 子頻道 <Site url="cw.com.tw" size="sm" />

<Route namespace="cw" :data='{"path":"/sub/:channel","categories":["traditional-media"],"example":"/cw/sub/615","parameters":{"channel":"子頻道 ID，可在 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"子頻道","maintainers":["TonyRL"],"location":"sub.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 三立新聞網 <Site url="setn.com"/>

### 新聞 <Site url="setn.com/ViewAll.aspx" size="sm" />

<Route namespace="setn" :data='{"path":"/:category?","categories":["traditional-media"],"example":"/setn","parameters":{"category":"分类，见下表，默认为即時"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["setn.com/ViewAll.aspx","setn.com/"],"target":""}],"name":"新聞","maintainers":["nczitzk"],"url":"setn.com/ViewAll.aspx","description":"| 即時 | 熱門 | 娛樂 | 政治 | 社會 |\n| ---- | ---- | ---- | ---- | ---- |\n\n| 國際 | 兩岸 | 生活 | 健康 | 旅遊 |\n| ---- | ---- | ---- | ---- | ---- |\n\n| 運動 | 地方 | 財經 | 富房網 | 名家 |\n| ---- | ---- | ---- | ------ | ---- |\n\n| 新奇 | 科技 | 汽車 | 寵物 | 女孩 | HOT 焦點 |\n| ---- | ---- | ---- | ---- | ---- | -------- |","location":"index.ts","heat":114,"topFeeds":[{"id":"55863308067829760","type":"feed","url":"rsshub://setn","title":"三立新聞網 - 即時","description":"三立新聞網 - 即時 - Powered by RSSHub","image":null},{"id":"88520448616402944","type":"feed","url":"rsshub://setn/%E6%94%BF%E6%B2%BB","title":"三立新聞網 - 政治","description":"三立新聞網 - 政治 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 即時 | 熱門 | 娛樂 | 政治 | 社會 |
| ---- | ---- | ---- | ---- | ---- |

| 國際 | 兩岸 | 生活 | 健康 | 旅遊 |
| ---- | ---- | ---- | ---- | ---- |

| 運動 | 地方 | 財經 | 富房網 | 名家 |
| ---- | ---- | ---- | ------ | ---- |

| 新奇 | 科技 | 汽車 | 寵物 | 女孩 | HOT 焦點 |
| ---- | ---- | ---- | ---- | ---- | -------- |

## The Wall Street Journal (WSJ) 华尔街日报 <Site url="cn.wsj.com"/>

### News <Site url="cn.wsj.com" size="sm" />

<Route namespace="wsj" :data='{"path":"/:lang/:category?","categories":["traditional-media"],"example":"/wsj/en-us/opinion","parameters":{"lang":"Language, `en-us`, `zh-cn`, `zh-tw`","category":"Category. See below"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"News","maintainers":["oppilate"],"description":"en_us\n\n| World | U.S. | Politics | Economy | Business | Tech       | Markets | Opinion | Books & Arts | Real Estate | Life & Work | Sytle               | Sports |\n| ----- | ---- | -------- | ------- | -------- | ---------- | ------- | ------- | ------------ | ----------- | ----------- | ------------------- | ------ |\n| world | us   | politics | economy | business | technology | markets | opinion | books-arts   | realestate  | life-work   | style-entertainment | sports |\n\n  zh-cn / zh-tw\n\n| 国际  | 中国  | 金融市场 | 经济    | 商业     | 科技       | 派        | 专栏与观点 |\n| ----- | ----- | -------- | ------- | -------- | ---------- | --------- | ---------- |\n| world | china | markets  | economy | business | technology | life-arts | opinion    |\n\n  Provide full article RSS for WSJ topics.","location":"news.ts","heat":108,"topFeeds":[{"id":"151150448547738625","type":"feed","url":"rsshub://wsj/zh-cn","title":"Importing","description":null,"image":null},{"id":"150876888307287071","type":"feed","url":"rsshub://wsj/zh-cn/opinion","title":"Importing","description":null,"image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

en_us

| World | U.S. | Politics | Economy | Business | Tech       | Markets | Opinion | Books & Arts | Real Estate | Life & Work | Sytle               | Sports |
| ----- | ---- | -------- | ------- | -------- | ---------- | ------- | ------- | ------------ | ----------- | ----------- | ------------------- | ------ |
| world | us   | politics | economy | business | technology | markets | opinion | books-arts   | realestate  | life-work   | style-entertainment | sports |

  zh-cn / zh-tw

| 国际  | 中国  | 金融市场 | 经济    | 商业     | 科技       | 派        | 专栏与观点 |
| ----- | ----- | -------- | ------- | -------- | ---------- | --------- | ---------- |
| world | china | markets  | economy | business | technology | life-arts | opinion    |

  Provide full article RSS for WSJ topics.

## 新唐人电视台 <Site url="www.ntdtv.com"/>

### 频道 <Site url="www.ntdtv.com" size="sm" />

<Route namespace="ntdtv" :data='{"path":"/:language/:id","categories":["traditional-media"],"example":"/ntdtv/b5/prog1201","parameters":{"language":"语言，简体为`gb`，繁体为`b5`","id":"子频道名称"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.ntdtv.com/:language/:id"]}],"name":"频道","maintainers":["Fatpandac"],"description":"参数均可在官网获取，如：\n\n  `https://www.ntdtv.com/b5/prog1201` 对应 `/ntdtv/b5/prog1201`","location":"channel.ts","heat":107,"topFeeds":[{"id":"69975679174674432","type":"feed","url":"rsshub://ntdtv/gb/prog1201","title":"新唐人电视台 - 时政","description":"新唐人电视台 - 时政 - Powered by RSSHub","image":null},{"id":"148402521198272512","type":"feed","url":"rsshub://ntdtv/gb/prog204","title":"新唐人电视台 - 大陆","description":"新唐人电视台 - 大陆 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

参数均可在官网获取，如：

  `https://www.ntdtv.com/b5/prog1201` 对应 `/ntdtv/b5/prog1201`

## ABC News (Australian Broadcasting Corporation) <Site url="abc.net.au"/>

### Channel & Topic <Site url="abc.net.au" size="sm" />

<Route namespace="abc" :data='{"path":"/:category{.+}?","example":"/wa","radar":[{"source":["abc.net.au/:category*"],"target":"/:category"}],"parameters":{"category":"Category, can be found in the URL, can also be filled in with the `documentId` in the source code of the page, `news/justin` as **Just In** by default"},"name":"Channel & Topic","categories":["traditional-media"],"description":"\n::: tip\n  All Topics in [Topic Library](https://abc.net.au/news/topics) are supported, you can fill in the field after `topic` in its URL, or fill in the `documentId`.\n\n  For example, the URL for [Computer Science](https://www.abc.net.au/news/topic/computer-science) is `https://www.abc.net.au/news/topic/computer-science`, the `category` is `news/topic/computer-science`, and the `documentId` of the Topic is `2302`, so the route is [/abc/news/topic/computer-science](https://rsshub.app/abc/news/topic/computer-science) and [/abc/2302](https://rsshub.app/abc/2302).\n\n  The supported channels are all listed in the table below. For other channels, please find the `documentId` in the source code of the channel page and fill it in as above.\n:::","maintainers":["nczitzk","pseudoyu"],"location":"index.ts","heat":104,"topFeeds":[{"id":"82619977766945792","type":"feed","url":"rsshub://abc","title":"Just In - ABC News","description":"Live breaking news stories from across Australia & around the world. In-depth coverage from Australia&#39;s most trusted source. Includes business, sport, weather. - Powered by RSSHub","image":"https://live-production.wcms.abc-cdn.net.au/7ee6f190de6d7dbb04203e514bfae9ec"},{"id":"59961396218494976","type":"feed","url":"rsshub://abc/chinese","title":"ABC中文 - ABC News","description":"澳大利亚广播公司ABC独立于政府、政治团体，商业或其他行业机构，不涉及任何利益关系，编辑自主，提供客观和公正的新闻报道，是澳大利亚全国公共广播机构。ABC中文遵循ABC编辑方针，以澳大利亚视角，报道国内外重大新闻事件、深度分析时事要闻、多方展现观点碰撞。 - Powered by RSSHub","image":"https://live-production.wcms.abc-cdn.net.au/7ee6f190de6d7dbb04203e514bfae9ec"}]}' :test='{"code":1,"message":"AssertionError: expected 404 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />


::: tip
  All Topics in [Topic Library](https://abc.net.au/news/topics) are supported, you can fill in the field after `topic` in its URL, or fill in the `documentId`.

  For example, the URL for [Computer Science](https://www.abc.net.au/news/topic/computer-science) is `https://www.abc.net.au/news/topic/computer-science`, the `category` is `news/topic/computer-science`, and the `documentId` of the Topic is `2302`, so the route is [/abc/news/topic/computer-science](https://rsshub.app/abc/news/topic/computer-science) and [/abc/2302](https://rsshub.app/abc/2302).

  The supported channels are all listed in the table below. For other channels, please find the `documentId` in the source code of the channel page and fill it in as above.
:::

## 新京报 <Site url="www.bjnews.com.cn"/>

### 分类 <Site url="www.bjnews.com.cn" size="sm" />

<Route namespace="bjnews" :data='{"path":"/cat/:cat","categories":["traditional-media"],"example":"/bjnews/cat/depth","parameters":{"cat":"分类, 可从URL中找到"},"features":{},"radar":[{"source":["www.bjnews.com.cn/:cat"]}],"name":"分类","maintainers":["dzx-dzx"],"url":"www.bjnews.com.cn","location":"cat.ts","heat":95,"topFeeds":[{"id":"60398727382272000","type":"feed","url":"rsshub://bjnews/cat/depth","title":"新京报 - 分类 - 深读","description":"新京报 - 分类 - 深读 - Powered by RSSHub","image":null},{"id":"84161318721934339","type":"feed","url":"rsshub://bjnews/cat/culture","title":"新京报 - 分类 - 文化","description":"新京报 - 分类 - 文化 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 分类 <Site url="www.bjnews.com.cn" size="sm" />

<Route namespace="bjnews" :data='{"path":"/column/:column","categories":["traditional-media"],"example":"/bjnews/column/204","parameters":{"column":"栏目ID, 可从手机版网页URL中找到"},"features":{},"radar":[{"source":["m.bjnews.com.cn/column/:column.htm"]}],"name":"分类","maintainers":["dzx-dzx"],"url":"www.bjnews.com.cn","location":"column.ts","heat":9,"topFeeds":[{"id":"163162956168540160","type":"feed","url":"rsshub://bjnews/column/308","title":"新京报 - 栏目 - 剥洋葱","description":"新京报 - 栏目 - 剥洋葱 - Powered by RSSHub","image":null},{"id":"163162511365115904","type":"feed","url":"rsshub://bjnews/column/9328","title":"新京报 - 栏目 - 北京现场","description":"新京报 - 栏目 - 北京现场 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 信报财经新闻 <Site url="hkej.com"/>

### 即时新闻 <Site url="hkej.com/" size="sm" />

<Route namespace="hkej" :data='{"path":"/:category?","categories":["traditional-media"],"example":"/hkej/index","parameters":{"category":"分类，默认为全部新闻"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["hkej.com/"]}],"name":"即时新闻","maintainers":["TonyRL"],"url":"hkej.com/","description":"| index    | stock    | hongkong | china    | international | property | current  |\n| -------- | -------- | -------- | -------- | ------------- | -------- | -------- |\n| 全部新闻 | 港股直击 | 香港财经 | 中国财经 | 国际财经      | 地产新闻 | 时事脉搏 |","location":"index.ts","heat":89,"topFeeds":[{"id":"69975396806332416","type":"feed","url":"rsshub://hkej/index","title":"信報網站 - 即時香港中國 國際金融 股市經濟新聞 - 信報網站 hkej.com","description":"信報網站(www.hkej.com)即時新聞，提供全天候即時港股、香港財經、國際金融和經濟新聞、中國經濟新聞資訊和分析。 - Powered by RSSHub","image":null},{"id":"159517735675831296","type":"feed","url":"rsshub://hkej/china","title":"信報網站 - 即時中國經濟 國策焦點 中港融合追蹤分析 - 信報網站 hkej.com","description":"信報網站(www.hkej.com)即時新聞中國財經，提供香港經濟和焦點行業 中港融合和商機的分析。 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| index    | stock    | hongkong | china    | international | property | current  |
| -------- | -------- | -------- | -------- | ------------- | -------- | -------- |
| 全部新闻 | 港股直击 | 香港财经 | 中国财经 | 国际财经      | 地产新闻 | 时事脉搏 |

## 大公文匯網 <Site url="www.tkww.hk"/>

### 新聞 <Site url="www.tkww.hk" size="sm" />

<Route namespace="tkww" :data='{"path":"/:column{.+}?","categories":["traditional-media"],"example":"/tkww/hong_kong","parameters":{"column":"欄目，默認為 home (首頁)"},"features":{"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"新聞","maintainers":["quiniapiezoelectricity"],"radar":[{"source":["www.tkww.hk/:column"],"target":"/:column"}],"description":"\n::: tip\n欄目可用`名稱`或對應網頁的`path`，\n如 `https://www.tkww.hk/hong_kong` 的欄目可以填`香港`或是`hong_kong`\n而 `https://www.tkww.hk/china/shanghai` 的欄目則需填`china/shanghai`\n:::","location":"index.ts","heat":83,"topFeeds":[{"id":"70533090955148288","type":"feed","url":"rsshub://tkww","title":"首頁 - 大公文匯網","description":"大公文匯網是香港大公文匯傳媒集團官方網站。香港大公文匯傳媒集團成立於2016年1月，旗下有《大公報》、香港《文匯報》、《香港仔》等報章和大公文匯網、大公網、香港文匯網及覆蓋移動端、社交媒體的多個網站新媒體平台，是立足香港、國際視野的愛國愛港傳媒集團。 - Powered by RSSHub","image":null},{"id":"71128480939804672","type":"feed","url":"rsshub://tkww/hong_kong","title":"香港 - 大公文匯網","description":"香港新聞，香港時事，資訊更新更快、聲音更全面、解讀更權威。 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />


::: tip
欄目可用`名稱`或對應網頁的`path`，
如 `https://www.tkww.hk/hong_kong` 的欄目可以填`香港`或是`hong_kong`
而 `https://www.tkww.hk/china/shanghai` 的欄目則需填`china/shanghai`
:::

## Russian News Agency TASS <Site url="tass.com"/>

### News <Site url="tass.com" size="sm" />

<Route namespace="tass" :data='{"path":"/:category?","categories":["traditional-media"],"example":"/tass/politics","parameters":{"category":"Category, can be found in URL, `politics` by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["tass.com/:category"],"target":"/:category"}],"name":"News","maintainers":["TonyRL"],"description":"| Russian Politics & Diplomacy | World | Business & Economy | Military & Defense | Science & Space | Emergencies | Society & Culture | Press Review | Sports |\n| ---------------------------- | ----- | ------------------ | ------------------ | --------------- | ----------- | ----------------- | ------------ | ------ |\n| politics                     | world | economy            | defense            | science         | emergencies | society           | pressreview  | sports |","location":"news.ts","heat":80,"topFeeds":[{"id":"64310795153576960","type":"feed","url":"rsshub://tass/politics","title":"Russian Politics & Diplomacy - TASS","description":"Russian Politics & Diplomacy - TASS - Powered by RSSHub","image":"https://tass.com/img/blocks/common/tass_logo_share_eng.png"},{"id":"64311310991740928","type":"feed","url":"rsshub://tass/world","title":"World - TASS","description":"World - TASS - Powered by RSSHub","image":"https://tass.com/img/blocks/common/tass_logo_share_eng.png"}]}' :test='{"code":0}' />

| Russian Politics & Diplomacy | World | Business & Economy | Military & Defense | Science & Space | Emergencies | Society & Culture | Press Review | Sports |
| ---------------------------- | ----- | ------------------ | ------------------ | --------------- | ----------- | ----------------- | ------------ | ------ |
| politics                     | world | economy            | defense            | science         | emergencies | society           | pressreview  | sports |

## 东方网 <Site url="mini.eastday.com"/>

### 24 小时热闻 <Site url="mini.eastday.com/" size="sm" />

<Route namespace="eastday" :data='{"path":"/24/:category?","categories":["traditional-media"],"example":"/eastday/24","parameters":{"category":"分类，见下表，默认为社会"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["mini.eastday.com/"],"target":"/24"}],"name":"24 小时热闻","maintainers":["nczitzk"],"url":"mini.eastday.com/","description":"| 推荐 | 社会 | 娱乐 | 国际 | 军事 |\n| ---- | ---- | ---- | ---- | ---- |\n\n| 养生 | 汽车 | 体育 | 财经 | 游戏 |\n| ---- | ---- | ---- | ---- | ---- |\n\n| 科技 | 国内 | 宠物 | 情感 | 人文 | 教育 |\n| ---- | ---- | ---- | ---- | ---- | ---- |","location":"24.ts","heat":59,"topFeeds":[{"id":"59852419254124544","type":"feed","url":"rsshub://eastday/24","title":"24小时社会热闻 - 东方资讯","description":"24小时社会热闻 - 东方资讯 - Powered by RSSHub","image":null},{"id":"177651896288583692","type":"feed","url":"rsshub://eastday/24/%E6%95%99%E8%82%B2","title":"24小时教育热闻 - 东方资讯","description":"24小时教育热闻 - 东方资讯 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 推荐 | 社会 | 娱乐 | 国际 | 军事 |
| ---- | ---- | ---- | ---- | ---- |

| 养生 | 汽车 | 体育 | 财经 | 游戏 |
| ---- | ---- | ---- | ---- | ---- |

| 科技 | 国内 | 宠物 | 情感 | 人文 | 教育 |
| ---- | ---- | ---- | ---- | ---- | ---- |

### 上海新闻 <Site url="sh.eastday.com/" size="sm" />

<Route namespace="eastday" :data='{"path":"/sh","categories":["traditional-media"],"example":"/eastday/sh","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["sh.eastday.com/"]}],"name":"上海新闻","maintainers":["saury"],"url":"sh.eastday.com/","location":"sh.ts","heat":17,"topFeeds":[{"id":"60975269249526784","type":"feed","url":"rsshub://eastday/sh","title":"东方网-上海","description":"东方网-上海 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected [ …(19) ] to not include &#39;https://j.021east.com/m/1753100761042…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1252:15)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1090:14)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@6.2.1/node_modules/chai/index.js:1700:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 原创 <Site url="www.eastday.com/" size="sm" />

<Route namespace="eastday" :data='{"path":"/portrait","categories":["traditional-media"],"example":"/eastday/portrait","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.eastday.com/"]}],"name":"原创","maintainers":["nczitzk"],"url":"www.eastday.com/","location":"portrait.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## The Strait Times <Site url="straitstimes.com"/>

### News <Site url="straitstimes.com" size="sm" />

<Route namespace="straitstimes" :data='{"path":"/:category?/:section?","categories":["traditional-media"],"example":"/straitstimes/singapore","parameters":{"category":"Category, see below for more information","section":"Section, see below for more information"},"features":{"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false,"requireConfig":false},"name":"News","maintainers":["quiniapiezoelectricity"],"description":"\n| Category               | `:category`               |\n| ---------------------- | --------------------------- |\n| Singapore              | `singapore`               |\n| Asia                   | `asia`                    |\n| World                  | `world`                   |\n| Opinion                | `opinion`                 |\n| Life                   | `life`                    |\n| Business               | `business`                |\n| Jobs                   | `jobs`                    |\n| Parenting & Education  | `parenting-and-education` |\n| Food                   | `food`                    |\n| Tech                   | `tech`                    |\n| Sport                  | `sport`                   |\n| Podcasts               | `podcasts`                |,\n\n| Section                | `:section`                |\n| ---------------------- | --------------------------- |\n| Top Stories            | `top-stories`             |\n| Latest                 | `latest`                  |","radar":[{"source":["www.straitstimes.com/:category"],"target":"/:category"},{"source":["www.straitstimes.com"],"target":"/"}],"location":"index.ts","heat":75,"topFeeds":[{"id":"76598839880708096","type":"feed","url":"rsshub://straitstimes","title":"The Strait Times - SINGAPORE","description":"The Strait Times - SINGAPORE - Powered by RSSHub","image":null},{"id":"70061661043605504","type":"feed","url":"rsshub://straitstimes/world","title":"The Strait Times - WORLD","description":"The Strait Times - WORLD - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />


| Category               | `:category`               |
| ---------------------- | --------------------------- |
| Singapore              | `singapore`               |
| Asia                   | `asia`                    |
| World                  | `world`                   |
| Opinion                | `opinion`                 |
| Life                   | `life`                    |
| Business               | `business`                |
| Jobs                   | `jobs`                    |
| Parenting & Education  | `parenting-and-education` |
| Food                   | `food`                    |
| Tech                   | `tech`                    |
| Sport                  | `sport`                   |
| Podcasts               | `podcasts`                |,

| Section                | `:section`                |
| ---------------------- | --------------------------- |
| Top Stories            | `top-stories`             |
| Latest                 | `latest`                  |

## ESPN <Site url="espn.com"/>

### News <Site url="espn.com" size="sm" />

<Route namespace="espn" :data='{"path":"/news/:sport","name":"News","maintainers":["weijianduan0302"],"example":"/espn/news/nba","categories":["traditional-media"],"parameters":{"sport":"sport category, can be nba, nfl, mlb, nhl etc."},"description":"Get the news feed of the sport you love on ESPN.\n| Sport                |  sport  |  Sport         |  sport  |\n|----------------------|---------|----------------|---------|\n| 🏀 NBA                | nba     | 🎾 Tennis       | tennis  |\n| 🏀 WNBA               | wnba    | ⛳️ Golf         | golf    |\n| 🏈 NFL                | nfl     | 🏏 Cricket      | cricket |\n| ⚾️ MLB                | mlb     | ⚽️ Soccer       | soccer  |\n| 🏒 NHL                | nhl     | 🏎️ F1           | f1      |\n| ⛹️ College Basketball | ncb      | 🥊 MMA          | mma     |\n| 🏟️️ College Football   | ncf     | 🏈 UFL          | ufl     |\n| 🏉 Rugby              | rugby   | 🃏 Poker        | poker   |","radar":[{"source":["espn.com/:sport*"],"target":"/news/:sport"}],"location":"news.ts","heat":69,"topFeeds":[{"id":"60547975805774848","type":"feed","url":"rsshub://espn/news/nba","title":"ESPN NBA News","description":"ESPN NBA News - Powered by RSSHub","image":null},{"id":"72477890360150016","type":"feed","url":"rsshub://espn/news/soccer","title":"ESPN SOCCER News","description":"ESPN SOCCER News - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

Get the news feed of the sport you love on ESPN.
| Sport                |  sport  |  Sport         |  sport  |
|----------------------|---------|----------------|---------|
| 🏀 NBA                | nba     | 🎾 Tennis       | tennis  |
| 🏀 WNBA               | wnba    | ⛳️ Golf         | golf    |
| 🏈 NFL                | nfl     | 🏏 Cricket      | cricket |
| ⚾️ MLB                | mlb     | ⚽️ Soccer       | soccer  |
| 🏒 NHL                | nhl     | 🏎️ F1           | f1      |
| ⛹️ College Basketball | ncb      | 🥊 MMA          | mma     |
| 🏟️️ College Football   | ncf     | 🏈 UFL          | ufl     |
| 🏉 Rugby              | rugby   | 🃏 Poker        | poker   |

## 東森新聞 <Site url="ebc.net.tw"/>

### 即時新聞 <Site url="ebc.net.tw" size="sm" />

<Route namespace="ebc" :data='{"path":"/realtime/:category?","categories":["traditional-media"],"example":"/ebc/realtime/politics","parameters":{"category":"Category from the last segment of the URL of the corresponding site"},"features":{"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false,"requireConfig":false},"name":"即時新聞","maintainers":["quiniapiezoelectricity"],"description":"","radar":[{"source":["news.ebc.net.tw/realtime/:category"],"target":"/:category"}],"location":"realtime.ts","heat":68,"topFeeds":[{"id":"105752020320057344","type":"feed","url":"rsshub://ebc/realtime/politics","title":"東森新聞|即時","description":"東森新聞|即時 - Powered by RSSHub","image":null},{"id":"105751285441409024","type":"feed","url":"rsshub://ebc/realtime","title":"東森新聞|即時","description":"東森新聞|即時 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 中国科技网 <Site url="epaper.stdaily.com"/>

### 科技日报 <Site url="epaper.stdaily.com" size="sm" />

<Route namespace="stdaily" :data='{"path":"/digitalpaper","categories":["traditional-media"],"example":"/stdaily/digitalpaper","name":"科技日报","maintainers":["lyqluis","KarasuShin"],"features":{"supportRadar":true},"radar":[{"source":["epaper.stdaily.com/statics/technology-site/index.html"],"target":"/digitalpaper"}],"location":"digitalpaper.ts","heat":68,"topFeeds":[{"id":"63118600077338629","type":"feed","url":"rsshub://stdaily/digitalpaper","title":"中国科技网 - 科技日报","description":"中国科技网 - 科技日报 - Powered by RSSHub","image":"https://www.stdaily.com/favicon.ico"}]}' :test='{"code":0}' />

## 中央日报 <Site url="joins.com"/>

### 中央日报中文版 <Site url="chinese.joins.com" size="sm" />

<Route namespace="joins" :data='{"path":"/chinese/:category?","name":"中央日报中文版","url":"chinese.joins.com","maintainers":["nczitzk"],"example":"/chinese","parameters":{"category":"分类，默认为空，可在对应分类页 URL 中找到 `sc_section_code`"},"description":"::: tip\n  若订阅 [财经](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N1)，网址为 `https://chinese.joins.com/news/articleList.html?sc_section_code=S1N1`。截取 `sc_section_code` 的值作为参数填入，此时路由为 [`/joins/chinese/S1N1`](https://rsshub.app/joins/chinese/S1N1)。\n:::\n\n| 分类                                                                                       | `sc_section_code`                             |\n| ------------------------------------------------------------------------------------------ | ----------------------------------------------- |\n| [财经](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N1)               | [S1N1](https://rsshub.app/joins/chinese/S1N1)   |\n| [国际](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N2)               | [S1N2](https://rsshub.app/joins/chinese/S1N2)   |\n| [北韩](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N3)               | [S1N3](https://rsshub.app/joins/chinese/S1N3)   |\n| [政治·社会](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N4)          | [S1N4](https://rsshub.app/joins/chinese/S1N4)   |\n| [中国观察](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N5)           | [S1N5](https://rsshub.app/joins/chinese/S1N5)   |\n| [社论](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N26)              | [S1N26](https://rsshub.app/joins/chinese/S1N26) |\n| [专栏·观点](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N11)         | [S1N11](https://rsshub.app/joins/chinese/S1N11) |\n| [军事·科技](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N6)          | [S1N6](https://rsshub.app/joins/chinese/S1N6)   |\n| [娱乐体育](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N7)           | [S1N7](https://rsshub.app/joins/chinese/S1N7)   |\n| [教育](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N8)               | [S1N8](https://rsshub.app/joins/chinese/S1N8)   |\n| [旅游美食](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N9)           | [S1N9](https://rsshub.app/joins/chinese/S1N9)   |\n| [时尚](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N10)              | [S1N10](https://rsshub.app/joins/chinese/S1N10) |\n| [图集](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N12&view_type=tm) | [S1N12](https://rsshub.app/joins/chinese/S1N12) |\n\n  ","categories":["traditional-media"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["chinese.joins.com/news/articleList.html"]},{"title":"财经","source":["chinese.joins.com/news/articleList.html"],"target":"/chinese/S1N1"},{"title":"国际","source":["chinese.joins.com/news/articleList.html"],"target":"/chinese/S1N2"},{"title":"北韩","source":["chinese.joins.com/news/articleList.html"],"target":"/chinese/S1N3"},{"title":"政治·社会","source":["chinese.joins.com/news/articleList.html"],"target":"/chinese/S1N4"},{"title":"中国观察","source":["chinese.joins.com/news/articleList.html"],"target":"/chinese/S1N5"},{"title":"社论","source":["chinese.joins.com/news/articleList.html"],"target":"/chinese/S1N26"},{"title":"专栏·观点","source":["chinese.joins.com/news/articleList.html"],"target":"/chinese/S1N11"},{"title":"军事·科技","source":["chinese.joins.com/news/articleList.html"],"target":"/chinese/S1N6"},{"title":"娱乐体育","source":["chinese.joins.com/news/articleList.html"],"target":"/chinese/S1N7"},{"title":"教育","source":["chinese.joins.com/news/articleList.html"],"target":"/chinese/S1N8"},{"title":"旅游美食","source":["chinese.joins.com/news/articleList.html"],"target":"/chinese/S1N9"},{"title":"时尚","source":["chinese.joins.com/news/articleList.html"],"target":"/chinese/S1N10"},{"title":"图集","source":["chinese.joins.com/news/articleList.html"],"target":"/chinese/S1N12"}],"location":"chinese.ts","heat":61,"topFeeds":[{"id":"67015768687931392","type":"feed","url":"rsshub://joins/chinese","title":"最新报道 - 韩国最大的传媒机构《中央日报》中文网","description":"인터넷 신문 - Powered by RSSHub","image":"https://chinese.joins.com/image/logo/toplogo_20200319051833.png"},{"id":"65469694593591296","type":"feed","url":"rsshub://joins/chinese/S1N1","title":"财经 - 韩国最大的传媒机构《中央日报》中文网","description":"인터넷 신문 - Powered by RSSHub","image":"https://chinese.joins.com/image/logo/toplogo_20200319051833.png"}]}' :test='{"code":1,"message":"AssertionError: expected 404 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

::: tip
  若订阅 [财经](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N1)，网址为 `https://chinese.joins.com/news/articleList.html?sc_section_code=S1N1`。截取 `sc_section_code` 的值作为参数填入，此时路由为 [`/joins/chinese/S1N1`](https://rsshub.app/joins/chinese/S1N1)。
:::

| 分类                                                                                       | `sc_section_code`                             |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| [财经](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N1)               | [S1N1](https://rsshub.app/joins/chinese/S1N1)   |
| [国际](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N2)               | [S1N2](https://rsshub.app/joins/chinese/S1N2)   |
| [北韩](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N3)               | [S1N3](https://rsshub.app/joins/chinese/S1N3)   |
| [政治·社会](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N4)          | [S1N4](https://rsshub.app/joins/chinese/S1N4)   |
| [中国观察](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N5)           | [S1N5](https://rsshub.app/joins/chinese/S1N5)   |
| [社论](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N26)              | [S1N26](https://rsshub.app/joins/chinese/S1N26) |
| [专栏·观点](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N11)         | [S1N11](https://rsshub.app/joins/chinese/S1N11) |
| [军事·科技](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N6)          | [S1N6](https://rsshub.app/joins/chinese/S1N6)   |
| [娱乐体育](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N7)           | [S1N7](https://rsshub.app/joins/chinese/S1N7)   |
| [教育](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N8)               | [S1N8](https://rsshub.app/joins/chinese/S1N8)   |
| [旅游美食](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N9)           | [S1N9](https://rsshub.app/joins/chinese/S1N9)   |
| [时尚](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N10)              | [S1N10](https://rsshub.app/joins/chinese/S1N10) |
| [图集](https://chinese.joins.com/news/articleList.html?sc_section_code=S1N12&view_type=tm) | [S1N12](https://rsshub.app/joins/chinese/S1N12) |

  

## 台視新聞網 <Site url="news.ttv.com.tw"/>

### 分类 <Site url="news.ttv.com.tw" size="sm" />

<Route namespace="ttv" :data='{"path":"/:category?","categories":["traditional-media"],"example":"/ttv","parameters":{"category":"分类"},"name":"分类","maintainers":["dzx-dzx"],"radar":[{"source":["news.ttv.com.tw/:category"]}],"location":"index.ts","heat":61,"topFeeds":[{"id":"72920871518882818","type":"feed","url":"rsshub://ttv","title":"台視新聞","description":"台視新聞 - Powered by RSSHub","image":null},{"id":"131972776479638528","type":"feed","url":"rsshub://ttv/%E6%94%BF%E6%B2%BB","title":"台視新聞網","description":"台視新聞網 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 香港经济日报 <Site url="china.hket.com"/>

### 新闻 <Site url="www.hket.com/" size="sm" />

<Route namespace="hket" :data='{"path":"/:category?","categories":["traditional-media"],"example":"/hket/sran001","parameters":{"category":"分类，默认为全部新闻，可在 URL 中找到，部分见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["china.hket.com/:category/*"],"target":"/:category"},{"source":["inews.hket.com/:category/*"],"target":"/:category"},{"source":["topick.hket.com/:category/*"],"target":"/:category"},{"source":["wealth.hket.com/:category/*"],"target":"/:category"},{"source":["www.hket.com/"],"target":"/"}],"name":"新闻","maintainers":["TonyRL"],"url":"www.hket.com/","description":"香港经济日报已有提供简单 RSS，详细可前往官方网站： [https://www.hket.com/rss](https://www.hket.com/rss)\n\n此路由主要补全官方 RSS 全文输出及完善分类输出。\n\n<details>\n<summary>分类</summary>\n\n| sran001  | sran008  | sran010  | sran011  | sran012  | srat006  |\n| -------- | -------- | -------- | -------- | -------- | -------- |\n| 全部新闻 | 财经地产 | 科技信息 | 国际新闻 | 商业新闻 | 香港新闻 |\n\n| sran009  | sran009-1 | sran009-2 | sran009-3  | sran009-4 | sran009-5 | sran009-6 |\n| -------- | --------- | --------- | ---------- | --------- | --------- | --------- |\n| 即时财经 | 股市      | 新股 IPO  | 新经济追踪 | 当炒股    | 宏观解读  | Hot Talk  |\n\n| sran011-1 | sran011-2    | sran011-3    |\n| --------- | ------------ | ------------ |\n| 环球政治  | 环球经济金融 | 环球社会热点 |\n\n| sran016    | sran016-1  | sran016-2  | sran016-3  | sran016-4  | sran016-5      |\n| ---------- | ---------- | ---------- | ---------- | ---------- | -------------- |\n| 大湾区主页 | 大湾区发展 | 大湾区工作 | 大湾区买楼 | 大湾区消费 | 大湾区投资理财 |\n\n| srac002  | srac003  | srac004  | srac005  |\n| -------- | -------- | -------- | -------- |\n| 即时中国 | 经济脉搏 | 国情动向 | 社会热点 |\n\n| srat001 | srat008 | srat055  | srat069  | srat070   |\n| ------- | ------- | -------- | -------- | --------- |\n| 话题    | 观点    | 休闲消费 | 娱乐新闻 | TOPick TV |\n\n| srat052  | srat052-1 | srat052-2  | srat052-3 |\n| -------- | --------- | ---------- | --------- |\n| 健康主页 | 食用安全  | 医生诊症室 | 保健美颜  |\n\n| srat053  | srat053-1 | srat053-2 | srat053-3 | srat053-4  |\n| -------- | --------- | --------- | --------- | ---------- |\n| 亲子主页 | 儿童健康  | 育儿经    | 教育      | 亲子好去处 |\n\n| srat053-6   | srat053-61 | srat053-62 | srat053-63 | srat053-64 |\n| ----------- | ---------- | ---------- | ---------- | ---------- |\n| Band 1 学堂 | 幼稚园     | 中小学     | 尖子教室   | 海外升学   |\n\n| srat072-1  | srat072-2  | srat072-3        | srat072-4         |\n| ---------- | ---------- | ---------------- | ----------------- |\n| 健康身心活 | 抗癌新方向 | 「糖」「心」解密 | 风湿不再 你我自在 |\n\n| sraw007  | sraw009  | sraw010  | sraw011  | sraw012  | sraw014  | sraw018  | sraw019  |\n| -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |\n| 全部博客 | Bloggers | 收息攻略 | 精明消费 | 退休规划 | 个人增值 | 财富管理 | 绿色金融 |\n\n| sraw015  | sraw015-07 | sraw015-08 | sraw015-09 | sraw015-10 |\n| -------- | ---------- | ---------- | ---------- | ---------- |\n| 移民百科 | 海外置业   | 移民攻略   | 移民点滴   | 海外理财   |\n\n| sraw020  | sraw020-1    | sraw020-2 | sraw020-3 | sraw020-4 |\n| -------- | ------------ | --------- | --------- | --------- |\n| ESG 主页 | ESG 趋势政策 | ESG 投资  | ESG 企业  | ESG 社会  |\n</details>","location":"index.ts","heat":50,"topFeeds":[{"id":"70034910422682624","type":"feed","url":"rsshub://hket/sran001","title":"國際地產財經中國即時新聞 | HKET經濟日報 | 即時新聞頻道","description":"提供最新國際新聞、香港新聞、財經新聞、地產樓市新聞, 美股即時新聞、即時夜期、中國新聞及科技新聞等。 - Powered by RSSHub","image":null},{"id":"94630255063479296","type":"feed","url":"rsshub://hket","title":"國際地產財經中國即時新聞 | HKET經濟日報 | 即時新聞頻道","description":"提供最新國際新聞、香港新聞、財經新聞、地產樓市新聞, 美股即時新聞、即時夜期、中國新聞及科技新聞等。 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

香港经济日报已有提供简单 RSS，详细可前往官方网站： [https://www.hket.com/rss](https://www.hket.com/rss)

此路由主要补全官方 RSS 全文输出及完善分类输出。

<details>
<summary>分类</summary>

| sran001  | sran008  | sran010  | sran011  | sran012  | srat006  |
| -------- | -------- | -------- | -------- | -------- | -------- |
| 全部新闻 | 财经地产 | 科技信息 | 国际新闻 | 商业新闻 | 香港新闻 |

| sran009  | sran009-1 | sran009-2 | sran009-3  | sran009-4 | sran009-5 | sran009-6 |
| -------- | --------- | --------- | ---------- | --------- | --------- | --------- |
| 即时财经 | 股市      | 新股 IPO  | 新经济追踪 | 当炒股    | 宏观解读  | Hot Talk  |

| sran011-1 | sran011-2    | sran011-3    |
| --------- | ------------ | ------------ |
| 环球政治  | 环球经济金融 | 环球社会热点 |

| sran016    | sran016-1  | sran016-2  | sran016-3  | sran016-4  | sran016-5      |
| ---------- | ---------- | ---------- | ---------- | ---------- | -------------- |
| 大湾区主页 | 大湾区发展 | 大湾区工作 | 大湾区买楼 | 大湾区消费 | 大湾区投资理财 |

| srac002  | srac003  | srac004  | srac005  |
| -------- | -------- | -------- | -------- |
| 即时中国 | 经济脉搏 | 国情动向 | 社会热点 |

| srat001 | srat008 | srat055  | srat069  | srat070   |
| ------- | ------- | -------- | -------- | --------- |
| 话题    | 观点    | 休闲消费 | 娱乐新闻 | TOPick TV |

| srat052  | srat052-1 | srat052-2  | srat052-3 |
| -------- | --------- | ---------- | --------- |
| 健康主页 | 食用安全  | 医生诊症室 | 保健美颜  |

| srat053  | srat053-1 | srat053-2 | srat053-3 | srat053-4  |
| -------- | --------- | --------- | --------- | ---------- |
| 亲子主页 | 儿童健康  | 育儿经    | 教育      | 亲子好去处 |

| srat053-6   | srat053-61 | srat053-62 | srat053-63 | srat053-64 |
| ----------- | ---------- | ---------- | ---------- | ---------- |
| Band 1 学堂 | 幼稚园     | 中小学     | 尖子教室   | 海外升学   |

| srat072-1  | srat072-2  | srat072-3        | srat072-4         |
| ---------- | ---------- | ---------------- | ----------------- |
| 健康身心活 | 抗癌新方向 | 「糖」「心」解密 | 风湿不再 你我自在 |

| sraw007  | sraw009  | sraw010  | sraw011  | sraw012  | sraw014  | sraw018  | sraw019  |
| -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| 全部博客 | Bloggers | 收息攻略 | 精明消费 | 退休规划 | 个人增值 | 财富管理 | 绿色金融 |

| sraw015  | sraw015-07 | sraw015-08 | sraw015-09 | sraw015-10 |
| -------- | ---------- | ---------- | ---------- | ---------- |
| 移民百科 | 海外置业   | 移民攻略   | 移民点滴   | 海外理财   |

| sraw020  | sraw020-1    | sraw020-2 | sraw020-3 | sraw020-4 |
| -------- | ------------ | --------- | --------- | --------- |
| ESG 主页 | ESG 趋势政策 | ESG 投资  | ESG 企业  | ESG 社会  |
</details>

## NPR (National Public Radio) <Site url="npr.org"/>

### News <Site url="npr.org" size="sm" />

<Route namespace="npr" :data='{"path":"/:endpoint?","categories":["traditional-media"],"example":"/npr/1001","parameters":{"endpoint":"Channel ID, can be found in Official RSS URL, `1001` by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"News","maintainers":["bennyyip"],"description":"Provide full article RSS for CBC topics.","location":"full.ts","heat":48,"topFeeds":[{"id":"66080131439415296","type":"feed","url":"rsshub://npr/1001","title":"NPR Topics: News","description":"NPR news, audio, and podcasts. Coverage of breaking stories, national and world news, politics, business, science, technology, and extended coverage of major national and world events. - Powered by RSSHub","image":null},{"id":"152995209828799488","type":"feed","url":"rsshub://npr","title":"NPR Topics: News","description":"NPR news, audio, and podcasts. Coverage of breaking stories, national and world news, politics, business, science, technology, and extended coverage of major national and world events. - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

Provide full article RSS for CBC topics.

## Canadian Broadcasting Corporation <Site url="cbc.ca"/>

### News <Site url="cbc.ca/news" size="sm" />

<Route namespace="cbc" :data='{"path":"/topics/:topic?","categories":["traditional-media"],"example":"/cbc/topics","parameters":{"topic":"Channel,`Top Stories` by default. For secondary channel like `canada/toronto`, use `-` to replace `/`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["cbc.ca/news"],"target":"/topics"}],"name":"News","maintainers":["wb14123"],"url":"cbc.ca/news","location":"topics.ts","heat":43,"topFeeds":[{"id":"165818925513194496","type":"feed","url":"rsshub://cbc/topics","title":"CBC News - Latest Canada, World, Entertainment and Business News","description":"CBC News - Latest Canada, World, Entertainment and Business News - Powered by RSSHub","image":null},{"id":"60766614420573184","type":"feed","url":"rsshub://cbc/topics/canada-ottawa","title":"Ottawa - CBC News","description":"Ottawa - CBC News - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 北极星电力网 <Site url="www.bjx.com.cn"/>

### 光伏 <Site url="www.bjx.com.cn" size="sm" />

<Route namespace="bjx" :data='{"path":"/gf/:type","categories":["traditional-media"],"example":"/bjx/gf/sc","parameters":{"type":"分类，北极星光伏最后的`type`字段"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"光伏","maintainers":["Sxuet"],"description":"`:type` 类型可选如下\n\n| 要闻 | 政策 | 市场行情 | 企业动态 | 独家观点 | 项目工程 | 招标采购 | 财经 | 国际行情 | 价格趋势 | 技术跟踪 |\n| ---- | ---- | -------- | -------- | -------- | -------- | -------- | ---- | -------- | -------- | -------- |\n| yw   | zc   | sc       | mq       | dj       | xm       | zb       | cj   | gj       | sj       | js       |","location":"types.ts","heat":16,"topFeeds":[{"id":"62791268472274944","type":"feed","url":"rsshub://bjx/gf/yw","title":"北极星太阳能光大网要闻","description":"北极星太阳能光大网要闻 - Powered by RSSHub","image":null},{"id":"62791006416355328","type":"feed","url":"rsshub://bjx/gf/sc","title":"北极星太阳能光大网市场","description":"北极星太阳能光大网市场 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

`:type` 类型可选如下

| 要闻 | 政策 | 市场行情 | 企业动态 | 独家观点 | 项目工程 | 招标采购 | 财经 | 国际行情 | 价格趋势 | 技术跟踪 |
| ---- | ---- | -------- | -------- | -------- | -------- | -------- | ---- | -------- | -------- | -------- |
| yw   | zc   | sc       | mq       | dj       | xm       | zb       | cj   | gj       | sj       | js       |

### 环保要闻 <Site url="huanbao.bjx.com.cn/yw" size="sm" />

<Route namespace="bjx" :data='{"path":"/huanbao","categories":["traditional-media"],"example":"/bjx/huanbao","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["huanbao.bjx.com.cn/yw","huanbao.bjx.com.cn/"]}],"name":"环保要闻","maintainers":["zsimple"],"url":"huanbao.bjx.com.cn/yw","location":"huanbao.ts","heat":13,"topFeeds":[{"id":"64312560808977408","type":"feed","url":"rsshub://bjx/huanbao","title":"北极星环保 - 环保行业垂直门户网站","description":"北极星环保 - 环保行业垂直门户网站 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at runNextTicks (node:internal/process/task_queues:68:3)\n    at processImmediate (node:internal/timers:472:9)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 风电 <Site url="www.bjx.com.cn" size="sm" />

<Route namespace="bjx" :data='{"path":"/fd/:type","categories":["traditional-media"],"example":"/bjx/fd/yw","parameters":{"type":"文章分类，详见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"风电","maintainers":["hualiong"],"description":"`:type` 类型可选如下\n\n| 要闻 | 政策 | 数据 | 市场 | 企业 | 招标 | 技术 | 报道 |\n| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |\n| yw   | zc   | sj   | sc   | mq   | zb   | js   | bd   |","location":"fd.ts","heat":9,"topFeeds":[{"id":"74275326708265984","type":"feed","url":"rsshub://bjx/fd/yw","title":"北极星风力发电网要闻","description":"北极星风力发电网要闻 - Powered by RSSHub","image":null},{"id":"150031434100937728","type":"feed","url":"rsshub://bjx/fd/zc","title":"北极星风力发电网政策","description":"北极星风力发电网政策 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

`:type` 类型可选如下

| 要闻 | 政策 | 数据 | 市场 | 企业 | 招标 | 技术 | 报道 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| yw   | zc   | sj   | sc   | mq   | zb   | js   | bd   |

## 中国日报网 <Site url="chinadaily.com.cn"/>

### 英语点津 <Site url="language.chinadaily.com.cn" size="sm" />

<Route namespace="chinadaily" :data='{"path":"/language/:category{.+}?","name":"英语点津","url":"language.chinadaily.com.cn","maintainers":["nczitzk"],"example":"/chinadaily/language/thelatest","parameters":{"category":{"description":"分类，默认为 `thelatest`，即精彩推荐，可在对应分类页 URL 中找到, Category, `thelatest`，即精彩推荐  by default","options":[{"label":"精彩推荐","value":"thelatest"},{"label":"每日一词","value":"news_hotwords/word_of_the_day"},{"label":"双语新闻","value":"news_bilingual"},{"label":"新闻热词","value":"news_hotwords"},{"label":"实用口语","value":"practice_tongue"},{"label":"译词课堂","value":"trans_collect"},{"label":"图片新闻","value":"news_photo"},{"label":"视频精选","value":"video_links"},{"label":"新闻播报","value":"audio_cd"},{"label":"专栏作家","value":"columnist"},{"label":"权威发布","value":"5af95d44a3103f6866ee845c"}]}},"description":"::: tip\n若订阅 [精彩推荐](https://language.chinadaily.com.cn/thelatest)，网址为 `https://language.chinadaily.com.cn/thelatest`，请截取 `https://language.chinadaily.com.cn/` 到末尾的部分 `thelatest` 作为 `category` 参数填入，此时目标路由为 [`/chinadaily/language/thelatest`](https://rsshub.app/chinadaily/language/thelatest)。\n:::\n\n<details>\n  <summary>更多分类</summary>\n\n| 分类                                                                         | ID                                                                                                    |\n| ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |\n| [精彩推荐](https://language.chinadaily.com.cn/thelatest)                     | [thelatest](https://rsshub.app/chinadaily/language/thelatest)                                         |\n| [每日一词](https://language.chinadaily.com.cn/news_hotwords/word_of_the_day) | [news_hotwords/word_of_the_day](https://rsshub.app/chinadaily/language/news_hotwords/word_of_the_day) |\n| [双语新闻](https://language.chinadaily.com.cn/news_bilingual)                | [news_bilingual](https://rsshub.app/chinadaily/language/news_bilingual)                               |\n| [新闻热词](https://language.chinadaily.com.cn/news_hotwords)                 | [news_hotwords](https://rsshub.app/chinadaily/language/news_hotwords)                                 |\n| [实用口语](https://language.chinadaily.com.cn/practice_tongue)               | [practice_tongue](https://rsshub.app/chinadaily/language/practice_tongue)                             |\n| [译词课堂](https://language.chinadaily.com.cn/trans_collect)                 | [trans_collect](https://rsshub.app/chinadaily/language/trans_collect)                                 |\n| [图片新闻](https://language.chinadaily.com.cn/news_photo)                    | [news_photo](https://rsshub.app/chinadaily/language/news_photo)                                       |\n| [视频精选](https://language.chinadaily.com.cn/video_links)                   | [video_links](https://rsshub.app/chinadaily/language/video_links)                                     |\n| [新闻播报](https://language.chinadaily.com.cn/audio_cd)                      | [audio_cd](https://rsshub.app/chinadaily/language/audio_cd)                                           |\n| [专栏作家](https://language.chinadaily.com.cn/columnist)                     | [audio_cd](https://rsshub.app/chinadaily/language/columnist)                                          |\n| [权威发布](https://language.chinadaily.com.cn/5af95d44a3103f6866ee845c)      | [5af95d44a3103f6866ee845c](https://rsshub.app/chinadaily/language/5af95d44a3103f6866ee845c)           |\n\n</details>\n","categories":["traditional-media"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":true,"supportScihub":false},"radar":[{"source":["language.chinadaily.com.cn/:category"]},{"title":"精彩推荐","source":["language.chinadaily.com.cn/thelatest"],"target":"/language/thelatest"},{"title":"每日一词","source":["language.chinadaily.com.cn/news_hotwords/word_of_the_day"],"target":"/language/news_hotwords/word_of_the_day"},{"title":"双语新闻","source":["language.chinadaily.com.cn/news_bilingual"],"target":"/language/news_bilingual"},{"title":"新闻热词","source":["language.chinadaily.com.cn/news_hotwords"],"target":"/language/news_hotwords"},{"title":"实用口语","source":["language.chinadaily.com.cn/practice_tongue"],"target":"/language/practice_tongue"},{"title":"译词课堂","source":["language.chinadaily.com.cn/trans_collect"],"target":"/language/trans_collect"},{"title":"图片新闻","source":["language.chinadaily.com.cn/news_photo"],"target":"/language/news_photo"},{"title":"视频精选","source":["language.chinadaily.com.cn/video_links"],"target":"/language/video_links"},{"title":"新闻播报","source":["language.chinadaily.com.cn/audio_cd"],"target":"/language/audio_cd"},{"title":"专栏作家","source":["language.chinadaily.com.cn/columnist"],"target":"/language/columnist"},{"title":"权威发布","source":["language.chinadaily.com.cn/5af95d44a3103f6866ee845c"],"target":"/language/5af95d44a3103f6866ee845c"}],"view":0,"location":"language.ts","heat":31,"topFeeds":[{"id":"140547468012002304","type":"feed","url":"rsshub://chinadaily/language/thelatest","title":"精彩推荐 - 中国日报网英语点津-LanguageTips","description":"精彩推荐 - 中国日报网英语点津-LanguageTips - Powered by RSSHub","image":null},{"id":"156244732581244928","type":"feed","url":"rsshub://chinadaily/language/news_bilingual","title":"双语新闻 - 中国日报网英语点津-LanguageTips","description":"双语新闻 - 中国日报网英语点津-LanguageTips - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected NaN to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

::: tip
若订阅 [精彩推荐](https://language.chinadaily.com.cn/thelatest)，网址为 `https://language.chinadaily.com.cn/thelatest`，请截取 `https://language.chinadaily.com.cn/` 到末尾的部分 `thelatest` 作为 `category` 参数填入，此时目标路由为 [`/chinadaily/language/thelatest`](https://rsshub.app/chinadaily/language/thelatest)。
:::

<details>
  <summary>更多分类</summary>

| 分类                                                                         | ID                                                                                                    |
| ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [精彩推荐](https://language.chinadaily.com.cn/thelatest)                     | [thelatest](https://rsshub.app/chinadaily/language/thelatest)                                         |
| [每日一词](https://language.chinadaily.com.cn/news_hotwords/word_of_the_day) | [news_hotwords/word_of_the_day](https://rsshub.app/chinadaily/language/news_hotwords/word_of_the_day) |
| [双语新闻](https://language.chinadaily.com.cn/news_bilingual)                | [news_bilingual](https://rsshub.app/chinadaily/language/news_bilingual)                               |
| [新闻热词](https://language.chinadaily.com.cn/news_hotwords)                 | [news_hotwords](https://rsshub.app/chinadaily/language/news_hotwords)                                 |
| [实用口语](https://language.chinadaily.com.cn/practice_tongue)               | [practice_tongue](https://rsshub.app/chinadaily/language/practice_tongue)                             |
| [译词课堂](https://language.chinadaily.com.cn/trans_collect)                 | [trans_collect](https://rsshub.app/chinadaily/language/trans_collect)                                 |
| [图片新闻](https://language.chinadaily.com.cn/news_photo)                    | [news_photo](https://rsshub.app/chinadaily/language/news_photo)                                       |
| [视频精选](https://language.chinadaily.com.cn/video_links)                   | [video_links](https://rsshub.app/chinadaily/language/video_links)                                     |
| [新闻播报](https://language.chinadaily.com.cn/audio_cd)                      | [audio_cd](https://rsshub.app/chinadaily/language/audio_cd)                                           |
| [专栏作家](https://language.chinadaily.com.cn/columnist)                     | [audio_cd](https://rsshub.app/chinadaily/language/columnist)                                          |
| [权威发布](https://language.chinadaily.com.cn/5af95d44a3103f6866ee845c)      | [5af95d44a3103f6866ee845c](https://rsshub.app/chinadaily/language/5af95d44a3103f6866ee845c)           |

</details>


## 鏡週刊 Mirror Media <Site url="mirrormedia.mg"/>

### 分类 <Site url="mirrormedia.mg" size="sm" />

<Route namespace="mirrormedia" :data='{"path":["/category/:category","/section/:section"],"categories":["traditional-media"],"example":"/mirrormedia/category/political","parameters":{"category":"分类名","section":"子板名"},"name":"分类","maintainers":["dzx-dzx"],"radar":[{"source":["mirrormedia.mg/category/:category","mirrormedia.mg/section/:section"]}],"location":"category.ts","heat":26,"topFeeds":[{"id":"57027261715751936","type":"feed","url":"rsshub://mirrormedia/category/political","title":"鏡週刊 Mirror Media - political","description":"鏡週刊 Mirror Media - political - Powered by RSSHub","image":null},{"id":"131968010464549888","type":"feed","url":"rsshub://mirrormedia/category/city-news","title":"鏡週刊 Mirror Media - city-news","description":"鏡週刊 Mirror Media - city-news - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 首页 <Site url="mirrormedia.mg" size="sm" />

<Route namespace="mirrormedia" :data='{"path":"/","categories":["traditional-media"],"example":"/mirrormedia","parameters":{},"name":"首页","maintainers":["dzx-dzx"],"radar":[{"source":["mirrormedia.mg"]}],"location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## Radio Free Asia (RFA) 自由亚洲电台 <Site url="rfa.org"/>

### News <Site url="rfa.org" size="sm" />

<Route namespace="rfa" :data='{"path":"/:language?/:channel?/:subChannel?","categories":["traditional-media"],"example":"/rfa/english","parameters":{"language":"language, English by default","channel":"channel","subChannel":"subchannel, where applicable"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"News","maintainers":["zphw"],"description":"Delivers a better experience by supporting parameter specification.\n\nParameters can be obtained from the official website, for instance:\n\n`https://www.rfa.org/cantonese/news` corresponds to `/rfa/cantonese/news`\n\n`https://www.rfa.org/cantonese/news/htm` corresponds to `/rfa/cantonese/news/htm`","location":"index.ts","heat":31,"topFeeds":[{"id":"41511702474276901","type":"feed","url":"rsshub://rfa/mandarin","title":"RFA","description":"RFA - Powered by RSSHub","image":null},{"id":"60960710409964544","type":"feed","url":"rsshub://rfa/english","title":"RFA","description":"RFA - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

Delivers a better experience by supporting parameter specification.

Parameters can be obtained from the official website, for instance:

`https://www.rfa.org/cantonese/news` corresponds to `/rfa/cantonese/news`

`https://www.rfa.org/cantonese/news/htm` corresponds to `/rfa/cantonese/news/htm`

## Council on Foreign Relations <Site url="www.cfr.org"/>

### News <Site url="www.cfr.org" size="sm" />

<Route namespace="cfr" :data='{"path":"/:category/:subCategory?","categories":["traditional-media"],"parameters":{"category":"category, find it in the URL","subCategory":"sub-category, find it in the URL"},"example":"/cfr/asia","name":"News","maintainers":["KarasuShin"],"radar":[{"source":["www.cfr.org/:category","www.cfr.org/:category/:subCategory"],"target":"/:category/:subCategory?"}],"features":{"antiCrawler":true},"location":"index.ts","heat":29,"topFeeds":[{"id":"58007926096163902","type":"feed","url":"rsshub://cfr/asia","title":"Asia","description":"Asia - Powered by RSSHub","image":null},{"id":"176857304598777856","type":"feed","url":"rsshub://cfr/blog","title":"Latest Commentary","description":"Latest Commentary - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 羊城晚报金羊网 <Site url="xwlb.com.cn"/>

### 新闻 <Site url="xwlb.com.cn" size="sm" />

<Route namespace="ycwb" :data='{"path":"/:node","categories":["traditional-media"],"example":"/ycwb/1","parameters":{"node":"栏目 id"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"新闻","maintainers":["TimWu007"],"description":"注：小部分栏目的 URL 会给出 nodeid。如未给出，可打开某条新闻链接后，查看网页源代码，搜索 nodeid 的值。\n\n  常用栏目节点：\n\n| 首页 | 中国 | 国际 | 体育 | 要闻 | 珠江评论 | 民生观察 | 房产 | 金羊教育 | 金羊财富 | 金羊文化 | 金羊健康 | 金羊汽车 |\n| ---- | ---- | ---- | ---- | ---- | -------- | -------- | ---- | -------- | -------- | -------- | -------- | -------- |\n| 1    | 14   | 15   | 16   | 22   | 1875     | 21773    | 222  | 5725     | 633      | 5281     | 21692    | 223      |\n\n| 广州 | 广州 - 广州要闻 | 广州 - 社会百态 | 广州 - 深读广州 | 广州 - 生活服务 | 今日大湾区 | 广东 - 政经热闻 | 广东 - 民生视点 | 广东 - 滚动新闻 |\n| ---- | --------------- | --------------- | --------------- | --------------- | ---------- | --------------- | --------------- | --------------- |\n| 18   | 5261            | 6030            | 13352           | 83422           | 100418     | 13074           | 12252           | 12212           |","location":"index.ts","heat":29,"topFeeds":[{"id":"54807548014042128","type":"feed","url":"rsshub://ycwb/5261","title":"羊城晚报金羊网 - 广州要闻","description":"羊城晚报金羊网 - 广州要闻 - Powered by RSSHub","image":null},{"id":"65552639683390464","type":"feed","url":"rsshub://ycwb/1","title":"羊城晚报金羊网 - 首页","description":"羊城晚报金羊网 - 首页 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

注：小部分栏目的 URL 会给出 nodeid。如未给出，可打开某条新闻链接后，查看网页源代码，搜索 nodeid 的值。

  常用栏目节点：

| 首页 | 中国 | 国际 | 体育 | 要闻 | 珠江评论 | 民生观察 | 房产 | 金羊教育 | 金羊财富 | 金羊文化 | 金羊健康 | 金羊汽车 |
| ---- | ---- | ---- | ---- | ---- | -------- | -------- | ---- | -------- | -------- | -------- | -------- | -------- |
| 1    | 14   | 15   | 16   | 22   | 1875     | 21773    | 222  | 5725     | 633      | 5281     | 21692    | 223      |

| 广州 | 广州 - 广州要闻 | 广州 - 社会百态 | 广州 - 深读广州 | 广州 - 生活服务 | 今日大湾区 | 广东 - 政经热闻 | 广东 - 民生视点 | 广东 - 滚动新闻 |
| ---- | --------------- | --------------- | --------------- | --------------- | ---------- | --------------- | --------------- | --------------- |
| 18   | 5261            | 6030            | 13352           | 83422           | 100418     | 13074           | 12252           | 12212           |

## 浙江在线 <Site url="zjol.com.cn"/>

### 浙报集团系列报刊 <Site url="zjol.com.cn" size="sm" />

<Route namespace="zjol" :data='{"path":"/paper/:id?","categories":["traditional-media"],"example":"/zjol/paper/zjrb","parameters":{"id":"报纸 id，见下表，默认为 `zjrb`，即浙江日报"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"浙报集团系列报刊","maintainers":["nczitzk"],"description":"| 浙江日报 | 钱江晚报 | 美术报 | 浙江老年报 | 浙江法制报 | 江南游报 |\n| -------- | -------- | ------ | ---------- | ---------- | -------- |\n| zjrb     | qjwb     | msb    | zjlnb      | zjfzb      | jnyb     |","location":"paper.ts","heat":28,"topFeeds":[{"id":"62793359084414976","type":"feed","url":"rsshub://zjol/paper/zjrb","title":"浙江日报","description":"浙江日报 - Powered by RSSHub","image":null},{"id":"150224065197180928","type":"feed","url":"rsshub://zjol/paper","title":"浙江日报","description":"浙江日报 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 浙江日报 | 钱江晚报 | 美术报 | 浙江老年报 | 浙江法制报 | 江南游报 |
| -------- | -------- | ------ | ---------- | ---------- | -------- |
| zjrb     | qjwb     | msb    | zjlnb      | zjfzb      | jnyb     |

## MSN <Site url="msn.com"/>

### News <Site url="msn.com" size="sm" />

<Route namespace="msn" :data='{"path":"/:market/:name/:id","parameters":{"market":"Market code. Find it in MSN url, e.g. zh-tw","name":"Name of the channel. Find it in MSN url, e.g. Bloomberg","id":"ID of the channel (always starts with sr-vid). Find it in MSN url, e.g. sr-vid-08gw7ky4u229xjsjvnf4n6n7v67gxm0pjmv9fr4y2x9jjmwcri4s"},"categories":["traditional-media"],"example":"/zh-tw/Bloomberg/sr-vid-08gw7ky4u229xjsjvnf4n6n7v67gxm0pjmv9fr4y2x9jjmwcri4s","description":"MSN News","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true},"radar":[{"source":["www.msn.com/:market/channel/source/:name/:id"],"target":"/:market/:name/:id"}],"name":"News","maintainers":["KTachibanaM"],"location":"index.ts","heat":27,"topFeeds":[{"id":"99576216016317440","type":"feed","url":"rsshub://msn/zh-tw/Bloomberg/sr-vid-08gw7ky4u229xjsjvnf4n6n7v67gxm0pjmv9fr4y2x9jjmwcri4s","title":"Bloomberg","description":"Bloomberg - Powered by RSSHub","image":"https://www.msn.com/favicon.ico"},{"id":"95284553009393664","type":"feed","url":"rsshub://msn/en-in/Press%20Trust%20of%20India/sr-vid-gnv22w2jk8eqhkww6pjggiv62h2xdehqpe33x067ju77kai629ta","title":"Press Trust of India","description":"Press Trust of India - Powered by RSSHub","image":"https://www.msn.com/favicon.ico"}]}' :test='{"code":1,"message":"AssertionError: expected 404 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

MSN News

## DealStreetAsia <Site url="dealstreetasia.com"/>

### Home <Site url="dealstreetasia.com/" size="sm" />

<Route namespace="dealstreetasia" :data='{"path":"/home","categories":["traditional-media"],"example":"/dealstreetasia/home","radar":[{"source":["dealstreetasia.com/"]}],"name":"Home","maintainers":["jack2game"],"url":"dealstreetasia.com/","location":"home.ts","heat":23,"topFeeds":[{"id":"63626869334696960","type":"feed","url":"rsshub://dealstreetasia/home","title":"Deal Street Asia","description":"Deal Street Asia - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected [ …(2) ] to not include &#39;https://www.dealstreetasia.com/storie…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1252:15)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1090:14)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@6.2.1/node_modules/chai/index.js:1700:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Section <Site url="dealstreetasia.com/" size="sm" />

<Route namespace="dealstreetasia" :data='{"path":"/section/:section","categories":["traditional-media"],"example":"/dealstreetasia/section/private-equity","parameters":{"section":"target section"},"radar":[{"source":["dealstreetasia.com/"]}],"name":"Section","maintainers":["jack2game"],"url":"dealstreetasia.com/","location":"section.ts","heat":1,"topFeeds":[{"id":"63785389652796416","type":"feed","url":"rsshub://dealstreetasia/section/private-equity","title":"Deal Street Asia - Private Equity","description":"Deal Street Asia - Private Equity - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"Error: STACK_TRACE_ERROR\n    at task (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:633:27)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:660:16)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:457:28)\n    at chain (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/chunk-tasks.js:9:14)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:72:12\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:40\n    at runWithSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1588:8)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:10)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:739:54)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at collectTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1048:25)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1556:17)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:85:25)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:153:2)\n    at executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/init-forks.aqTzCSR2.js:29:4)"}' />

## The Korea Herald <Site url="koreaherald.com"/>

### News <Site url="koreaherald.com" size="sm" />

<Route namespace="koreaherald" :data='{"path":"/:category{.+}?","categories":["traditional-media"],"example":"/koreaherald/National","parameters":{"category":"Category from the path of the URL of the corresponding site, `National` by default"},"features":{"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false,"requireConfig":false},"name":"News","maintainers":["quiniapiezoelectricity"],"description":"\n::: tip\nFor example, the category for the page https://www.koreaherald.com/Business and https://www.koreaherald.com/Business/Market would be `/Business` and `/Business/Market` respectively. \n:::\n","radar":[{"source":["www.koreaherald.com/:category"],"target":"/:category"}],"location":"index.ts","heat":24,"topFeeds":[{"id":"97091227879318528","type":"feed","url":"rsshub://koreaherald","title":"The Korea Herald - National","description":"The Korea Herald - National - Powered by RSSHub","image":null},{"id":"97651779609807872","type":"feed","url":"rsshub://koreaherald/National","title":"The Korea Herald - National","description":"The Korea Herald - National - Powered by RSSHub","image":null}]}' :test='{"code":0}' />


::: tip
For example, the category for the page https://www.koreaherald.com/Business and https://www.koreaherald.com/Business/Market would be `/Business` and `/Business/Market` respectively. 
:::


## Yonhap News Agency <Site url="yna.co.kr"/>

### News <Site url="yna.co.kr" size="sm" />

<Route namespace="yna" :data='{"path":"/:lang?/:channel?","categories":["traditional-media"],"example":"/yna/en/national","parameters":{"lang":"Language, see below, `ko` by default","channel":"RSS Feed Channel, see below, `news` by default"},"features":{"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false,"requireConfig":false},"name":"News","maintainers":["quiniapiezoelectricity"],"description":"\n| Language  | 한국어 | English | 简体中文 | 日本語 | عربي   | Español | Français |\n| --------- | ------ | ------- | -------- | ------ | ------ | ------- | -------- |\n| `:lang` | `ko` | `en`  | `cn`   | `jp` | `ar` | `es`  | `fr`   |\n\nFor a full list of RSS Feed Channels, please refer to the RSS feed page of the corresponding language\n| RSS Feed Page                                             |\n| --------------------------------------------------------- |\n| [한국어](https://www.yna.co.kr/rss/index?site=footer_rss) |\n| [English](https://en.yna.co.kr/channel/index)             |\n| [简体中文](https://cn.yna.co.kr/channel/index)            |\n| [日本語](https://jp.yna.co.kr/channel/index)              |\n| [عربي](https://ar.yna.co.kr/channel/index)                |\n| [Español](https://sp.yna.co.kr/channel/index)             |\n| [Français](https://fr.yna.co.kr/channel/index)            |\n\n::: tip\nFor example, the path for the RSS feed url https://www.yna.co.kr/rss/economy.xml and https://cn.yna.co.kr/RSS/news.xml would be `/ko/economy` and `/cn/news` respectively. \n:::\n","location":"index.ts","heat":21,"topFeeds":[{"id":"87238542461270016","type":"feed","url":"rsshub://yna/cn","title":"韩国联合通讯社 | 滚动","description":"韩国联合通讯社 | 滚动 - Powered by RSSHub","image":null},{"id":"91658914231308288","type":"feed","url":"rsshub://yna/ko/news","title":"연합뉴스 최신기사","description":"연합뉴스 실시간 최신뉴스입니다 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />


| Language  | 한국어 | English | 简体中文 | 日本語 | عربي   | Español | Français |
| --------- | ------ | ------- | -------- | ------ | ------ | ------- | -------- |
| `:lang` | `ko` | `en`  | `cn`   | `jp` | `ar` | `es`  | `fr`   |

For a full list of RSS Feed Channels, please refer to the RSS feed page of the corresponding language
| RSS Feed Page                                             |
| --------------------------------------------------------- |
| [한국어](https://www.yna.co.kr/rss/index?site=footer_rss) |
| [English](https://en.yna.co.kr/channel/index)             |
| [简体中文](https://cn.yna.co.kr/channel/index)            |
| [日本語](https://jp.yna.co.kr/channel/index)              |
| [عربي](https://ar.yna.co.kr/channel/index)                |
| [Español](https://sp.yna.co.kr/channel/index)             |
| [Français](https://fr.yna.co.kr/channel/index)            |

::: tip
For example, the path for the RSS feed url https://www.yna.co.kr/rss/economy.xml and https://cn.yna.co.kr/RSS/news.xml would be `/ko/economy` and `/cn/news` respectively. 
:::


## 南方都市报 <Site url="oeeee.com"/>

### 奥一网 <Site url="oeeee.com" size="sm" />

<Route namespace="oeeee" :data='{"path":"/web/:channel","categories":["traditional-media"],"example":"/oeeee/web/170","parameters":{"channel":"频道 ID"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"奥一网","maintainers":["TimWu007"],"description":"-   若在桌面端打开奥一网栏目页（如 `https://www.oeeee.com/api/channel.php?s=/index/index/channel/gz`），可查看该页源代码，搜索 `OECID`。\n  -   若在移动端打开奥一网栏目页（格式例：`https://m.oeeee.com/m.php?s=/m2/channel&channel_id=169`），即可从 url 中获取。需注意的是，如果该栏目页的 url 格式为 `https://m.oeeee.com/detailChannel_indexData.html?channel_id=266` ，则 `266` 并非为本路由可用的频道 ID，建议从桌面端获取。","location":"web.ts","heat":17,"topFeeds":[{"id":"150755089712076808","type":"feed","url":"rsshub://oeeee/web/168","title":"南方都市报奥一网","description":"南方都市报奥一网 - Powered by RSSHub","image":null},{"id":"150755089712076802","type":"feed","url":"rsshub://oeeee/web/588","title":"南方都市报奥一网","description":"南方都市报奥一网 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

-   若在桌面端打开奥一网栏目页（如 `https://www.oeeee.com/api/channel.php?s=/index/index/channel/gz`），可查看该页源代码，搜索 `OECID`。
  -   若在移动端打开奥一网栏目页（格式例：`https://m.oeeee.com/m.php?s=/m2/channel&channel_id=169`），即可从 url 中获取。需注意的是，如果该栏目页的 url 格式为 `https://m.oeeee.com/detailChannel_indexData.html?channel_id=266` ，则 `266` 并非为本路由可用的频道 ID，建议从桌面端获取。

### Unknown <Site url="oeeee.com" size="sm" />

<Route namespace="oeeee" :data='{"path":"/app/channel/:id","name":"Unknown","maintainers":["TimWu007"],"location":"app/channel.ts","heat":2,"topFeeds":[{"id":"87329418896513044","type":"feed","url":"rsshub://oeeee/app/channel/50","title":"南方都市报客户端 - 南都广州","description":"南方都市报客户端 - 南都广州 - Powered by RSSHub","image":null}]}' :test='undefined' />

### 南都客户端（按记者） <Site url="oeeee.com" size="sm" />

<Route namespace="oeeee" :data='{"path":"/app/reporter/:id","categories":["traditional-media"],"example":"/oeeee/app/reporter/249","parameters":{"id":"记者 UID"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"南都客户端（按记者）","maintainers":["TimWu007"],"description":"记者的 UID 可通过 `m.mp.oeeee.com` 下的文章页面获取。点击文章下方的作者头像，进入该作者的个人主页，即可从 url 中获取。","location":"app/reporter.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

记者的 UID 可通过 `m.mp.oeeee.com` 下的文章页面获取。点击文章下方的作者头像，进入该作者的个人主页，即可从 url 中获取。

## Sankei Shimbun 産経新聞 <Site url="sankei.com"/>

### News <Site url="sankei.com" size="sm" />

<Route namespace="sankei" :data='{"path":"/news/:category","categories":["traditional-media"],"example":"/sankei/news/flash","parameters":{"category":"Category name (as it will appear in URLs). For example, for \"Breaking News\" https://www.sankei.com/flash/, the category name would be \"flash\"."},"radar":[{"source":["www.sankei.com/:category"],"target":"/news/:category"}],"name":"News","maintainers":["yuikisaito"],"location":"news.ts","heat":19,"topFeeds":[{"id":"157150339579158528","type":"feed","url":"rsshub://sankei/news/flash","title":"産経ニュース - 速報","description":"産経新聞社のニュースサイト。政治、経済、国際、社会、スポーツ、エンタメ、生活、健康、災害情報などの速報記事と解説記事を新着順に一覧できます。 - Powered by RSSHub","image":"https://www.sankei.com/common/images/ogp_default.jpg"}]}' :test='{"code":0}' />

### Topic <Site url="sankei.com" size="sm" />

<Route namespace="sankei" :data='{"path":["/topics/:topic"],"categories":["traditional-media"],"example":"/sankei/topics/etc_100","parameters":{"topic":"Topic name (format included in URL). For example, for \"Expo 2025 Osaka, Kansai, Japan Special Feature\" https://www.sankei.com/tag/topic/etc_100, the value would be etc_100."},"radar":[{"source":["www.sankei.com/tag/topic/:topic"],"target":"/topics/:topic"}],"name":"Topic","maintainers":["yuikisaito"],"location":"topics.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## 湖南日报 <Site url="voc.com.cn"/>

### 电子刊物 <Site url="voc.com.cn/" size="sm" />

<Route namespace="hnrb" :data='{"path":"/:id?","categories":["traditional-media"],"example":"/hnrb","parameters":{"id":"编号，见下表，默认为全部"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["voc.com.cn/"],"target":"/:id"}],"name":"电子刊物","maintainers":["nczitzk"],"url":"voc.com.cn/","description":"| 版                   | 编号 |\n| -------------------- | ---- |\n| 全部                 |      |\n| 第 01 版：头版       | 1    |\n| 第 02 版：要闻       | 2    |\n| 第 03 版：要闻       | 3    |\n| 第 04 版：深度       | 4    |\n| 第 05 版：市州       | 5    |\n| 第 06 版：理论・学习 | 6    |\n| 第 07 版：观察       | 7    |\n| 第 08 版：时事       | 8    |\n| 第 09 版：中缝       | 9    |","location":"index.ts","heat":18,"topFeeds":[{"id":"75409322850391040","type":"feed","url":"rsshub://hnrb","title":"湖南日报","description":"湖南日报 - Powered by RSSHub","image":null},{"id":"81619059516564480","type":"feed","url":"rsshub://hnrb/1","title":"湖南日报 - 第01版：头版","description":"湖南日报 - 第01版：头版 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected [ …(44) ] to not include &#39;https://hnrb.voc.com.cn/hnrb_epaper/h…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1252:15)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1090:14)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@6.2.1/node_modules/chai/index.js:1700:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 版                   | 编号 |
| -------------------- | ---- |
| 全部                 |      |
| 第 01 版：头版       | 1    |
| 第 02 版：要闻       | 2    |
| 第 03 版：要闻       | 3    |
| 第 04 版：深度       | 4    |
| 第 05 版：市州       | 5    |
| 第 06 版：理论・学习 | 6    |
| 第 07 版：观察       | 7    |
| 第 08 版：时事       | 8    |
| 第 09 版：中缝       | 9    |

## 中国经济网 <Site url="www.ce.cn"/>

### 地方经济 <Site url="district.ce.cn" size="sm" />

<Route namespace="ce" :data='{"path":"/district/:category?","name":"地方经济","url":"district.ce.cn","maintainers":["cscnk52"],"example":"/ce/district","parameters":{"category":"栏目标识，默认为 roll（即时新闻）"},"description":"| 即时新闻 | 经济动态 | 独家视角 | 专题 | 数说地方 | 地方播报 | 专稿 | 港澳台 |\n|----------|----------|----------|------|----------|----------|------|--------|\n| roll     | jjdt     | poll     | ch   | ssdf     | dfbb     | zg   | gat    |","categories":["traditional-media"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false,"supportRadar":true},"radar":[{"source":["district.ce.cn/newarea/:category/index.shtml"],"target":"/district/:category?"},{"source":["district.ce.cn/newarea/:category"],"target":"/district/:category?"},{"source":["district.ce.cn"],"target":"/district"}],"view":0,"location":"district.ts","heat":15,"topFeeds":[{"id":"105835124893595648","type":"feed","url":"rsshub://ce/district","title":"中国经济网地方经济 - 鍗虫椂鏂伴椈","description":"中国经济网地方经济 - 鍗虫椂鏂伴椈 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 即时新闻 | 经济动态 | 独家视角 | 专题 | 数说地方 | 地方播报 | 专稿 | 港澳台 |
|----------|----------|----------|------|----------|----------|------|--------|
| roll     | jjdt     | poll     | ch   | ssdf     | dfbb     | zg   | gat    |

## The Australian Financial Review <Site url="afr.com"/>

### Latest <Site url="www.afr.com/latest" size="sm" />

<Route namespace="afr" :data='{"path":"/latest","categories":["traditional-media"],"example":"/afr/latest","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.afr.com/latest","www.afr.com/"]}],"name":"Latest","maintainers":["TonyRL"],"url":"www.afr.com/latest","location":"latest.ts","heat":14,"topFeeds":[{"id":"80616874570062848","type":"feed","url":"rsshub://afr/latest","title":"Latest | The Australian Financial Review | AFR","description":"The latest news, events, analysis and opinion from The Australian Financial Review - Powered by RSSHub","image":"https://www.afr.com/apple-touch-icon-1024x1024.png"}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Navigation <Site url="www.afr.com" size="sm" />

<Route namespace="afr" :data='{"path":"/navigation/:path{.+}","categories":["traditional-media"],"example":"/afr/navigation/markets","parameters":{"path":"Navigation path, can be found in the URL of the page"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.afr.com/path*"]}],"name":"Navigation","maintainers":["TonyRL"],"url":"www.afr.com","location":"navigation.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## Público <Site url="publico.es"/>

### Internacional <Site url="publico.es" size="sm" />

<Route namespace="publico" :data='{"path":"/internacional/:subsection?","parameters":{"subsection":{"description":"Filter by subsection. Check the subsections available on the newspaper&#39;s website."}},"categories":["traditional-media"],"example":"/publico/internacional","features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["publico.es/internacional"],"target":"/internacional"}],"name":"Internacional","maintainers":["adrianrico97"],"location":"internacional.ts","heat":7,"topFeeds":[{"id":"129920522272080896","type":"feed","url":"rsshub://publico/internacional","title":"Internacional | Público","description":"Internacional | Público - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected { &#39;$&#39;: { isPermaLink: &#39;false&#39; } } to deeply equal Any<String>\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:58:27)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Política <Site url="publico.es" size="sm" />

<Route namespace="publico" :data='{"path":"/politica/:subsection?","parameters":{"subsection":{"description":"Filter by subsection. Check the subsections available on the newspaper&#39;s website."}},"categories":["traditional-media"],"example":"/publico/politica","features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["publico.es/politica"],"target":"/politica"}],"name":"Política","maintainers":["adrianrico97"],"location":"politica.ts","heat":4,"topFeeds":[{"id":"129920988554547200","type":"feed","url":"rsshub://publico/politica","title":"Política | Público","description":"Política | Público - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected { &#39;$&#39;: { isPermaLink: &#39;false&#39; } } to deeply equal Any<String>\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:58:27)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Ciencias <Site url="publico.es" size="sm" />

<Route namespace="publico" :data='{"path":"/ciencias/:subsection?","parameters":{"subsection":{"description":"Filter by subsection. Check the subsections available on the newspaper&#39;s website."}},"categories":["traditional-media"],"example":"/publico/ciencias","features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["publico.es/ciencias"],"target":"/ciencias"}],"name":"Ciencias","maintainers":["adrianrico97"],"location":"ciencias.ts","heat":3,"topFeeds":[{"id":"111690051929742336","type":"feed","url":"rsshub://publico/ciencias","title":"Ciencias | Público","description":"Ciencias | Público - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected { &#39;$&#39;: { isPermaLink: &#39;false&#39; } } to deeply equal Any<String>\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:58:27)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Culturas <Site url="publico.es" size="sm" />

<Route namespace="publico" :data='{"path":"/culturas/:subsection?","parameters":{"subsection":{"description":"Filter by subsection. Check the subsections available on the newspaper&#39;s website."}},"categories":["traditional-media"],"example":"/publico/culturas","features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["publico.es/culturas"],"target":"/culturas"}],"name":"Culturas","maintainers":["adrianrico97"],"location":"culturas.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected { &#39;$&#39;: { isPermaLink: &#39;false&#39; } } to deeply equal Any<String>\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:58:27)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Economia <Site url="publico.es" size="sm" />

<Route namespace="publico" :data='{"path":"/economia/:subsection?","parameters":{"subsection":{"description":"Filter by subsection. Check the subsections available on the newspaper&#39;s website."}},"categories":["traditional-media"],"example":"/publico/economia","features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["publico.es/economia"],"target":"/economia"}],"name":"Economia","maintainers":["adrianrico97"],"location":"economia.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected { &#39;$&#39;: { isPermaLink: &#39;false&#39; } } to deeply equal Any<String>\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:58:27)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Mujer <Site url="publico.es" size="sm" />

<Route namespace="publico" :data='{"path":"/mujer/:subsection?","parameters":{"subsection":{"description":"Filter by subsection. Check the subsections available on the newspaper&#39;s website."}},"categories":["traditional-media"],"example":"/publico/mujer","features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["publico.es/mujer"],"target":"/mujer"}],"name":"Mujer","maintainers":["adrianrico97"],"location":"mujer.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected { &#39;$&#39;: { isPermaLink: &#39;false&#39; } } to deeply equal Any<String>\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:58:27)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Opinión <Site url="publico.es" size="sm" />

<Route namespace="publico" :data='{"path":"/opinion/:subsection?","parameters":{"subsection":{"description":"Filter by subsection. Check the subsections available on the newspaper&#39;s website."}},"categories":["traditional-media"],"example":"/publico/opinion","features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["publico.es/opinion"],"target":"/opinion"}],"name":"Opinión","maintainers":["adrianrico97"],"location":"opinion.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected { &#39;$&#39;: { isPermaLink: &#39;false&#39; } } to deeply equal Any<String>\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:58:27)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Public <Site url="publico.es" size="sm" />

<Route namespace="publico" :data='{"path":"/public","categories":["traditional-media"],"example":"/publico/public","features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["publico.es/public"],"target":"/public"}],"name":"Public","maintainers":["adrianrico97"],"location":"public.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

### Sociedad <Site url="publico.es" size="sm" />

<Route namespace="publico" :data='{"path":"/sociedad/:subsection?","parameters":{"subsection":{"description":"Filter by subsection. Check the subsections available on the newspaper&#39;s website."}},"categories":["traditional-media"],"example":"/publico/sociedad","features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["publico.es/sociedad"],"target":"/sociedad"}],"name":"Sociedad","maintainers":["adrianrico97"],"location":"sociedad.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected { &#39;$&#39;: { isPermaLink: &#39;false&#39; } } to deeply equal Any<String>\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:58:27)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Tremending <Site url="publico.es" size="sm" />

<Route namespace="publico" :data='{"path":"/tremending","categories":["traditional-media"],"example":"/publico/tremending","features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["publico.es/tremending"],"target":"/tremending"}],"name":"Tremending","maintainers":["adrianrico97"],"location":"tremending.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected { &#39;$&#39;: { isPermaLink: &#39;false&#39; } } to deeply equal Any<String>\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:58:27)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 公視新聞網 <Site url="news.pts.org.tw"/>

### 專題策展 <Site url="news.pts.org.tw/curations" size="sm" />

<Route namespace="pts" :data='{"path":"/curations","categories":["traditional-media"],"example":"/pts/curations","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["news.pts.org.tw/curations","news.pts.org.tw/"]}],"name":"專題策展","maintainers":["nczitzk"],"url":"news.pts.org.tw/curations","location":"curations.ts","heat":13,"topFeeds":[{"id":"70043324915566592","type":"feed","url":"rsshub://pts/curations","title":"專題策展精選 ｜ 公視新聞網 PNN","description":"專題策展精選 ｜ 公視新聞網 PNN - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### Unknown <Site url="news.pts.org.tw" size="sm" />

<Route namespace="pts" :data='{"path":"*","name":"Unknown","maintainers":[],"location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### 整理報導 <Site url="news.pts.org.tw" size="sm" />

<Route namespace="pts" :data='{"path":"/live/:id","categories":["traditional-media"],"example":"/pts/live/62e8e4bbb4de2cbd74468b2b","parameters":{"id":"報導 id，可在对应整理報導页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["news.pts.org.tw/live/:id","news.pts.org.tw/"]}],"name":"整理報導","maintainers":[],"location":"live.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 數位敘事 <Site url="news.pts.org.tw/projects" size="sm" />

<Route namespace="pts" :data='{"path":"/projects","categories":["traditional-media"],"example":"/pts/projects","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["news.pts.org.tw/projects","news.pts.org.tw/"]}],"name":"數位敘事","maintainers":["nczitzk"],"url":"news.pts.org.tw/projects","location":"projects.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 新快报 <Site url="xkb.com.cn"/>

### 新闻 <Site url="xkb.com.cn" size="sm" />

<Route namespace="xkb" :data='{"path":"/:channel","categories":["traditional-media"],"example":"/xkb/350","parameters":{"channel":"栏目 ID，点击对应栏目后在地址栏找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"新闻","maintainers":["TimWu007"],"description":"常用栏目 ID：\n\n| 栏目名 | ID  |\n| ------ | --- |\n| 首页   | 350 |\n| 重点   | 359 |\n| 广州   | 353 |\n| 湾区   | 360 |\n| 天下   | 355 |","location":"index.ts","heat":12,"topFeeds":[{"id":"59112290766065664","type":"feed","url":"rsshub://xkb/350","title":"新快报新快网 - 首页","description":"新快报新快网 - 首页 - Powered by RSSHub","image":null},{"id":"210608067387659264","type":"feed","url":"rsshub://xkb/359","title":"新快报新快网 - 重点","description":"新快报新快网 - 重点 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

常用栏目 ID：

| 栏目名 | ID  |
| ------ | --- |
| 首页   | 350 |
| 重点   | 359 |
| 广州   | 353 |
| 湾区   | 360 |
| 天下   | 355 |

## L'Orient-Le Jour/L'Orient Today <Site url="lorientlejour.com"/>

RSS feed for the Lebanon-based French-language newspaper L'Orient-Le Jour and its English edition L'Orient Today

### Category <Site url="lorientlejour.com" size="sm" />

<Route namespace="lorientlejour" :data='{"path":"/:category?","categories":["traditional-media"],"example":"/lorientlejour/977-lebanon","parameters":{"category":"Category from the last segment of the URL of the corresponding site, see below for more information, /977-Lebanon by default"},"features":{"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false,"requireConfig":[{"name":"LORIENTLEJOUR_USERNAME","optional":true,"description":"L&#39;Orient-Le Jour/L&#39;Orient Today Email or Username"},{"name":"LORIENTLEJOUR_PASSWORD","optional":true,"description":"L&#39;Orient-Le Jour/L&#39;Orient Today Password"},{"name":"LORIENTLEJOUR_TOKEN","optional":true,"description":"To obtain a token, log into L&#39;Orient-Le Jour/L&#39;Orient Today App and inspect the connection request to find the token parameter from the request URL"}]},"name":"Category","maintainers":["quiniapiezoelectricity"],"description":"  ::: tip\nFor example, the path for the sites https://today.lorientlejour.com/section/977-lebanon and https://www.lorientlejour.com/rubrique/1-liban would be /lorientlejour/977-lebanon and /lorientlejour/1-liban respectively.\nMultiple categories seperated by &#39;|&#39; is also supported, e.g. /lorientlejour/977-lebanon|1-liban.\n:::","radar":[{"source":["www.lorientlejour.com/*/:category"],"target":"/:category"},{"source":["www.lorientlejour.com"],"target":"/1-Liban"},{"source":["today.lorientlejour.com/*/:category"],"target":"/:category"},{"source":["today.lorientlejour.com"],"target":"/977-Lebanon"}],"location":"index.ts","heat":11,"topFeeds":[{"id":"67213346383532032","type":"feed","url":"rsshub://lorientlejour/977-lebanon","title":"L&#39;Orient Today - Lebanon","description":"L&#39;Orient Today - Lebanon - Powered by RSSHub","image":null},{"id":"68949378330868736","type":"feed","url":"rsshub://lorientlejour","title":"L&#39;Orient Today - Lebanon","description":"L&#39;Orient Today - Lebanon - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

  ::: tip
For example, the path for the sites https://today.lorientlejour.com/section/977-lebanon and https://www.lorientlejour.com/rubrique/1-liban would be /lorientlejour/977-lebanon and /lorientlejour/1-liban respectively.
Multiple categories seperated by '|' is also supported, e.g. /lorientlejour/977-lebanon|1-liban.
:::

## 華視 <Site url="news.cts.com.tw"/>

### 新聞 <Site url="news.cts.com.tw" size="sm" />

<Route namespace="cts" :data='{"path":"/:category","categories":["traditional-media"],"example":"/cts/real","parameters":{"category":"类别"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["news.cts.com.tw/:category/index.html"]}],"name":"新聞","maintainers":["miles170"],"description":"| 即時 | 氣象    | 政治     | 國際          | 社會    | 運動   | 生活 | 財經  | 台語      | 地方  | 產業 | 綜合    | 藝文 | 娛樂      |\n| ---- | ------- | -------- | ------------- | ------- | ------ | ---- | ----- | --------- | ----- | ---- | ------- | ---- | --------- |\n| real | weather | politics | international | society | sports | life | money | taiwanese | local | pr   | general | arts | entertain |","location":"news.ts","heat":9,"topFeeds":[{"id":"152042616140212224","type":"feed","url":"rsshub://cts/real","title":"華視新聞網 - 即時","description":"華視 提供最新新聞,戲劇,綜藝,卡通,教學,綜合,影音,節目表等資訊。電話：(02)2775-6789 免付費服務專線: 0800-069-789 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 即時 | 氣象    | 政治     | 國際          | 社會    | 運動   | 生活 | 財經  | 台語      | 地方  | 產業 | 綜合    | 藝文 | 娛樂      |
| ---- | ------- | -------- | ------------- | ------- | ------ | ---- | ----- | --------- | ----- | ---- | ------- | ---- | --------- |
| real | weather | politics | international | society | sports | life | money | taiwanese | local | pr   | general | arts | entertain |

## 南方网 <Site url="nfapp.southcn.com"/>

### 南方 +（按栏目 ID） <Site url="nfapp.southcn.com" size="sm" />

<Route namespace="southcn" :data='{"path":"/nfapp/column/:column?","categories":["traditional-media"],"example":"/southcn/nfapp/column/38","parameters":{"column":"栏目或南方号 ID"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"南方 +（按栏目 ID）","maintainers":["TimWu007"],"description":"::: tip\n  若此处输入的是栏目 ID（而非南方号 ID），则该接口会返回与输入栏目相关联栏目的文章。例如，输入栏目 ID `38`（广州），则返回的结果还会包含 ID 为 `3547`（市长报道集）的文章。\n:::\n\n  1.  `pc.nfapp.southcn.com` 下的文章页面，可通过 url 查看，例：`http://pc.nfapp.southcn.com/13707/7491109.html` 的栏目 ID 为 `13707`。\n  2.  `static.nfapp.southcn.com` 下的文章页面，可查看网页源代码，搜索 `columnid`。\n  3.  [https://m.nfapp.southcn.com/column/all](https://m.nfapp.southcn.com/column/all) 列出了部分栏目，`id` 即为栏目 ID。","location":"nfapp/column.ts","heat":9,"topFeeds":[{"id":"158878918138745856","type":"feed","url":"rsshub://southcn/nfapp/column","title":"南方+ - 广州","description":"南方+ - 广州 - Powered by RSSHub","image":null},{"id":"177651896288583690","type":"feed","url":"rsshub://southcn/nfapp/column/74","title":"南方+ - 汕尾","description":"南方+ - 汕尾 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

::: tip
  若此处输入的是栏目 ID（而非南方号 ID），则该接口会返回与输入栏目相关联栏目的文章。例如，输入栏目 ID `38`（广州），则返回的结果还会包含 ID 为 `3547`（市长报道集）的文章。
:::

  1.  `pc.nfapp.southcn.com` 下的文章页面，可通过 url 查看，例：`http://pc.nfapp.southcn.com/13707/7491109.html` 的栏目 ID 为 `13707`。
  2.  `static.nfapp.southcn.com` 下的文章页面，可查看网页源代码，搜索 `columnid`。
  3.  [https://m.nfapp.southcn.com/column/all](https://m.nfapp.southcn.com/column/all) 列出了部分栏目，`id` 即为栏目 ID。

### 南方 +（按作者） <Site url="nfapp.southcn.com" size="sm" />

<Route namespace="southcn" :data='{"path":"/nfapp/reporter/:reporter","categories":["traditional-media"],"example":"/southcn/nfapp/reporter/969927791","parameters":{"reporter":"作者 UUID"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"南方 +（按作者）","maintainers":["TimWu007"],"description":"作者的 UUID 只可通过 `static.nfapp.southcn.com` 下的文章页面获取。点击文章下方的作者介绍，进入该作者的个人主页，即可从 url 中获取。","location":"nfapp/reporter.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

作者的 UUID 只可通过 `static.nfapp.southcn.com` 下的文章页面获取。点击文章下方的作者介绍，进入该作者的个人主页，即可从 url 中获取。

## Voice of Mongolia <Site url="vom.mn"/>

### News <Site url="vom.mn" size="sm" />

<Route namespace="vom" :data='{"path":"/featured/:lang?","categories":["traditional-media"],"example":"/vom/featured","parameters":{"lang":"Language, see the table below, `mn` by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["vom.mn/:lang","vom.mn/"],"target":"/featured/:lang"}],"name":"News","maintainers":["TonyRL"],"description":"| English | 日本語 | Монгол | Русский | 简体中文 |\n| ------- | ------ | ------ | ------- | -------- |\n| en      | ja     | mn     | ru      | zh       |","location":"featured.ts","heat":8,"topFeeds":[{"id":"116831194976780288","type":"feed","url":"rsshub://vom/featured/en","title":"VoM.mn - Voice of Mongolia","description":"VoM.mn - Voice of Mongolia - Powered by RSSHub","image":"http://www.vom.mn/dist/images/vom-logo.png"},{"id":"64309319450846208","type":"feed","url":"rsshub://vom/featured","title":"VoM.mn - Voice of Mongolia","description":"VoM.mn - Voice of Mongolia - Powered by RSSHub","image":"http://www.vom.mn/dist/images/vom-logo.png"}]}' :test='{"code":1,"message":"AssertionError: expected [ Array(4) ] to not include &#39;http://www.vom.mn/mn/p/54493&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1252:15)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1090:14)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@6.2.1/node_modules/chai/index.js:1700:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| English | 日本語 | Монгол | Русский | 简体中文 |
| ------- | ------ | ------ | ------- | -------- |
| en      | ja     | mn     | ru      | zh       |

## 中時新聞網 <Site url="www.chinatimes.com"/>

### 分類 <Site url="www.chinatimes.com/" size="sm" />

<Route namespace="chinatimes" :data='{"path":"/:category?","categories":["traditional-media"],"example":"/chinatimes/realtimenews","parameters":{"category":"分類，見下表，留空為 `realtimenews`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.chinatimes.com/:category/","www.chinatimes.com/"]}],"name":"分類","maintainers":["KingJem"],"url":"www.chinatimes.com/","description":"|     即時     |   熱門  |   政治  | 生活 | 娛樂 |  財經 |  國際 |   言論  |   兩岸  |   軍事   |   社會  |  健康  |  體育  |      科技      |   運勢  | 有影 |  寶島  |\n| :----------: | :-----: | :-----: | :--: | :--: | :---: | :---: | :-----: | :-----: | :------: | :-----: | :----: | :----: | :------------: | :-----: | :--: | :----: |\n| realtimenews | hotnews | politic | life | star | money | world | opinion | chinese | armament | society | health | sports | technologynews | fortune | tube | taiwan |","location":"index.ts","heat":7,"topFeeds":[{"id":"197798198610638848","type":"feed","url":"rsshub://chinatimes/realtimenews","title":"即時新聞 - 中時新聞網","description":"《中時新聞網》 即時新聞最新列表 - Powered by RSSHub","image":"https://www.chinatimes.com/images/2020/apple-touch-icon.png"},{"id":"210150263935545344","type":"feed","url":"rsshub://chinatimes/politic","title":"即時新聞 - 中時新聞網","description":"《中時新聞網》 即時新聞最新列表 - Powered by RSSHub","image":"https://www.chinatimes.com/images/2020/apple-touch-icon.png"}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

|     即時     |   熱門  |   政治  | 生活 | 娛樂 |  財經 |  國際 |   言論  |   兩岸  |   軍事   |   社會  |  健康  |  體育  |      科技      |   運勢  | 有影 |  寶島  |
| :----------: | :-----: | :-----: | :--: | :--: | :---: | :---: | :-----: | :-----: | :------: | :-----: | :----: | :----: | :------------: | :-----: | :--: | :----: |
| realtimenews | hotnews | politic | life | star | money | world | opinion | chinese | armament | society | health | sports | technologynews | fortune | tube | taiwan |

## The Hindu <Site url="thehindu.com"/>

### Topic <Site url="thehindu.com" size="sm" />

<Route namespace="thehindu" :data='{"path":"/topic/:topic","categories":["traditional-media"],"example":"/thehindu/topic/rains","parameters":{"topic":"Topic slug, can be found in URL."},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["thehindu.com/topic/:topic"]}],"name":"Topic","maintainers":["TonyRL"],"location":"topic.ts","heat":7,"topFeeds":[{"id":"118671170053553152","type":"feed","url":"rsshub://thehindu/topic/Right_to_Privacy","title":"Latest Right to Privacy News, Photos, Latest News Headlines about Right to Privacy-The Hindu","description":"Latest Right to Privacy News, Photos, Latest News Headlines about Right to Privacy-The Hindu - Powered by RSSHub","image":"https://www.thehindu.com/theme/images/th-online/OG-sections.png"}]}' :test='{"code":0}' />

## TVer <Site url="tver.jp"/>

### Series <Site url="tver.jp" size="sm" />

<Route namespace="tver" :data='{"path":"/series/:id","categories":["traditional-media"],"example":"/tver/series/srx2o7o3c8","parameters":{"id":"Series ID (as it appears in URLs). For example, in https://tver.jp/series/srx2o7o3c8, the ID is \"srx2o7o3c8\"."},"radar":[{"source":["tver.jp/series/:id"],"target":"/series/:id"}],"name":"Series","maintainers":["yuikisaito"],"location":"series.ts","heat":7,"topFeeds":[{"id":"157453847056912384","type":"feed","url":"rsshub://tver/series/srx2o7o3c8","title":"TVer - ＷＢＳ（ワールドビジネスサテライト）","description":"WBS（ワールドビジネスサテライト）は1988年4月にスタートした、日本で最も長く続く経済ニュース番組です。バブル崩壊やその後の金融危機、リーマンショック、東日本大震災、そして新型コロナショックと、激動の時代を「経済」という独自の切り口で報じ続けてきました。 - Powered by RSSHub","image":"https://statics.tver.jp/images/content/thumbnail/series/xlarge/srx2o7o3c8.jpg"},{"id":"157466645136707584","type":"feed","url":"rsshub://tver/series/sr5nj30c4q","title":"TVer - １万人の第九 EXPO2025","description":"2025年4月13日、大阪・関西万博に響き渡った1万人の歌声。ベートーヴェン交響曲第九番「歓喜の歌」の大合唱は、参加者だけでなく、世界中の人々の心を揺さぶりました。 万博という特別な空間で迎えるクライマックス。彼らの歌声は、喜び、希望、そして未来へのメッセージを力強く世界に届けます。 - Powered by RSSHub","image":"https://statics.tver.jp/images/content/thumbnail/series/xlarge/sr5nj30c4q.jpg"}]}' :test='{"code":0}' />

## 中国环球电视网 <Site url="cgtn.com"/>

### 播客 <Site url="cgtn.com" size="sm" />

<Route namespace="cgtn" :data='{"path":"/podcast/:category/:id","categories":["traditional-media"],"example":"/cgtn/podcast/ezfm/4","parameters":{"category":"类型名","id":"播客 id"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["cgtn.com/podcast/column/:category/*/:id"]}],"name":"播客","maintainers":["5upernova-heng"],"description":"> 类型名与播客 id 可以在播客对应的 URL 中找到\n  > 如 URL `https://radio.cgtn.com/podcast/column/ezfm/More-to-Read/4` ，其 `category` 为 `ezfm` ，`id` 为 `4`，对应的订阅路由为 [`/podcast/ezfm/4`](https://rsshub.app/podcast/ezfm/4)","location":"podcast.ts","heat":6,"topFeeds":[{"id":"86255766295882752","type":"feed","url":"rsshub://cgtn/podcast/ezfm/4","title":"中国环球电视网 CGTN Podcast - 中英双语美文欣赏，感受聆听文学之美，享受学习语言之乐。","description":"中英双语美文欣赏，感受聆听文学之美，享受学习语言之乐。 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

> 类型名与播客 id 可以在播客对应的 URL 中找到
  > 如 URL `https://radio.cgtn.com/podcast/column/ezfm/More-to-Read/4` ，其 `category` 为 `ezfm` ，`id` 为 `4`，对应的订阅路由为 [`/podcast/ezfm/4`](https://rsshub.app/podcast/ezfm/4)

## DNA India <Site url="dnaindia.com"/>

### News <Site url="www.dnaindia.com" size="sm" />

<Route namespace="dnaindia" :data='{"name":"News","maintainers":["Rjnishant530"],"path":["/:category"],"example":"/dnaindia/headlines","parameters":{"category":"Find it in the URL, or tables below"},"radar":[{"source":["www.dnaindia.com/:category"]}],"url":"www.dnaindia.com","description":"Categories:\n\n| Headlines | Explainer | India | Entertainment | Sports | Viral | Lifestyle | Education | Business | World |\n| --------- | --------- | ----- | ------------- | ------ | ----- | --------- | --------- | -------- | ----- |\n| headlines | explainer | india | entertainment | sports | viral | lifestyle | education | business | world |","location":"news.ts","heat":6,"topFeeds":[{"id":"62339610691806208","type":"feed","url":"rsshub://dnaindia/headlines","title":"DNA India","description":"Latest News on dnaIndia.com - Powered by RSSHub","image":null},{"id":"162063218996792351","type":"feed","url":"rsshub://dnaindia/india","title":"Importing","description":null,"image":null}]}' :test='{"code":0}' />

Categories:

| Headlines | Explainer | India | Entertainment | Sports | Viral | Lifestyle | Education | Business | World |
| --------- | --------- | ----- | ------------- | ------ | ----- | --------- | --------- | -------- | ----- |
| headlines | explainer | india | entertainment | sports | viral | lifestyle | education | business | world |

### Topic <Site url="www.dnaindia.com" size="sm" />

<Route namespace="dnaindia" :data='{"name":"Topic","maintainers":["Rjnishant530"],"path":["/topic/:topic"],"example":"/dnaindia/topic/dna-verified","parameters":{"category":"Find it in the URL"},"radar":[{"source":["www.dnaindia.com/topic/:topic"]}],"url":"www.dnaindia.com","description":"Topics:\n\n| DNA verified |\n| ------------ |\n| dna-verified |\n\n::: tip\nThe URL of the form `https://www.dnaindia.com/topic/dna-verified` demonstrates the utilization of the subdomain `topic`.\n:::","location":"topic.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

Topics:

| DNA verified |
| ------------ |
| dna-verified |

::: tip
The URL of the form `https://www.dnaindia.com/topic/dna-verified` demonstrates the utilization of the subdomain `topic`.
:::

## 四川广播电视台 <Site url="sctv.com"/>

### 电视回放 <Site url="sctv.com" size="sm" />

<Route namespace="sctv" :data='{"path":"/programme/:id?/:limit?/:isFull?","categories":["traditional-media"],"example":"/sctv/programme/1","parameters":{"id":"节目 id，可在对应节目页中找到，默认为 `1`，即四川新闻联播","limit":"期数，默认为 15，即单次获取最新 15 期","isFull":"是否仅获取完整视频，填写 true/yes 表示是、false/no 表示否，默认是"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"电视回放","maintainers":["nczitzk"],"description":"::: tip\n  参数 **是否仅获取完整视频** 设置为 `true` `yes` `t` `y` 等值后，路由仅返回当期节目的完整视频，而不会返回节目所提供的节选视频。\n\n  查看更多电视节目请前往 [电视回放](https://www.sctv.com/column/list)\n:::\n\n| 节目                   | id      |\n| ---------------------- | ------- |\n| 四川新闻联播           | 1       |\n| 早安四川               | 2       |\n| 今日视点               | 3       |\n| 龙门阵摆四川           | 10523   |\n| 非常话题               | 1014756 |\n| 新闻现场               | 8385    |\n| 黄金三十分             | 8386    |\n| 全媒直播间             | 8434    |\n| 晚报十点半             | 8435    |\n| 现场快报               | 8436    |\n| 四川乡村新闻           | 3673    |\n| 四川文旅报道           | 8174    |\n| 乡村会客厅             | 3674    |\n| 金字招牌               | 3675    |\n| 问您所 “？”            | 3677    |\n| 蜀你最能               | 3679    |\n| 美丽乡村印象           | 3678    |\n| 美丽乡村               | 3676    |\n| 乡村大篷车             | 3680    |\n| 华西论健               | 3681    |\n| 乡村聚乐部             | 3682    |\n| 医保近距离             | 6403    |\n| 音你而来               | 7263    |\n| 吃八方                 | 7343    |\n| 世界那么大             | 7344    |\n| 风云川商               | 7345    |\n| 麻辣烫                 | 7346    |\n| 财经快报               | 7473    |\n| 医生来了               | 7873    |\n| 安逸的旅途             | 8383    |\n| 运动 +                 | 8433    |\n| 好戏连台               | 9733    |\n| 防癌大讲堂             | 1018673 |\n| 消费新观察             | 1017153 |\n| 天天耍大牌             | 1014753 |\n| 廉洁四川               | 1014754 |\n| 看世界                 | 1014755 |\n| 金熊猫说教育（资讯版） | 1014757 |\n| 她说                   | 1014759 |\n| 嗨宝贝                 | 1014762 |\n| 萌眼看世界             | 1014764 |\n| 乡村大讲堂             | 1014765 |\n| 四川党建               | 1014766 |\n| 健康四川               | 1014767 |\n| 技能四川               | 12023   |","location":"programme.ts","heat":5,"topFeeds":[{"id":"178834515500019712","type":"feed","url":"rsshub://sctv/programme/1/15/yes","title":"四川广播电视台 - 四川新闻联播","description":"四川广播电视台 - 四川新闻联播 - Powered by RSSHub","image":"/sctv/1/image/public/202101/20210118094118_abbi6fxq9i.jpg"},{"id":"198402459807542272","type":"feed","url":"rsshub://sctv/programme/7343","title":"四川广播电视台 - 吃八方","description":"四川广播电视台 - 吃八方 - Powered by RSSHub","image":"/sctv/1/image/public/202010/20201010094714_nrfep8uqvu.jpg"}]}' :test='{"code":0}' />

::: tip
  参数 **是否仅获取完整视频** 设置为 `true` `yes` `t` `y` 等值后，路由仅返回当期节目的完整视频，而不会返回节目所提供的节选视频。

  查看更多电视节目请前往 [电视回放](https://www.sctv.com/column/list)
:::

| 节目                   | id      |
| ---------------------- | ------- |
| 四川新闻联播           | 1       |
| 早安四川               | 2       |
| 今日视点               | 3       |
| 龙门阵摆四川           | 10523   |
| 非常话题               | 1014756 |
| 新闻现场               | 8385    |
| 黄金三十分             | 8386    |
| 全媒直播间             | 8434    |
| 晚报十点半             | 8435    |
| 现场快报               | 8436    |
| 四川乡村新闻           | 3673    |
| 四川文旅报道           | 8174    |
| 乡村会客厅             | 3674    |
| 金字招牌               | 3675    |
| 问您所 “？”            | 3677    |
| 蜀你最能               | 3679    |
| 美丽乡村印象           | 3678    |
| 美丽乡村               | 3676    |
| 乡村大篷车             | 3680    |
| 华西论健               | 3681    |
| 乡村聚乐部             | 3682    |
| 医保近距离             | 6403    |
| 音你而来               | 7263    |
| 吃八方                 | 7343    |
| 世界那么大             | 7344    |
| 风云川商               | 7345    |
| 麻辣烫                 | 7346    |
| 财经快报               | 7473    |
| 医生来了               | 7873    |
| 安逸的旅途             | 8383    |
| 运动 +                 | 8433    |
| 好戏连台               | 9733    |
| 防癌大讲堂             | 1018673 |
| 消费新观察             | 1017153 |
| 天天耍大牌             | 1014753 |
| 廉洁四川               | 1014754 |
| 看世界                 | 1014755 |
| 金熊猫说教育（资讯版） | 1014757 |
| 她说                   | 1014759 |
| 嗨宝贝                 | 1014762 |
| 萌眼看世界             | 1014764 |
| 乡村大讲堂             | 1014765 |
| 四川党建               | 1014766 |
| 健康四川               | 1014767 |
| 技能四川               | 12023   |

## Ekantipur / कान्तिपुर (Nepal) <Site url="ekantipur.com"/>

### Full Article RSS <Site url="ekantipur.com" size="sm" />

<Route namespace="ekantipur" :data='{"path":"/:channel?","categories":["traditional-media"],"example":"/ekantipur/news","parameters":{"channel":"Find it in the ekantipur.com menu or pick from the list below:"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ekantipur.com/:channel"],"target":"/:channel"}],"name":"Full Article RSS","maintainers":["maniche04"],"description":"Channels:\n\n| समाचार | अर्थ / वाणिज्य | विचार     | खेलकुद   | उपत्यका     | मनोरञ्जन         | फोटोफिचर          | फिचर     | विश्व    | ब्लग   |\n| ---- | -------- | ------- | ------ | -------- | ------------- | -------------- | ------- | ----- | ---- |\n| news | business | opinion | sports | national | entertainment | photo_feature | feature | world | blog |","location":"issue.ts","heat":4,"topFeeds":[{"id":"74038006711254016","type":"feed","url":"rsshub://ekantipur/news","title":"Ekantipur - news","description":"Ekantipur - news - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

Channels:

| समाचार | अर्थ / वाणिज्य | विचार     | खेलकुद   | उपत्यका     | मनोरञ्जन         | फोटोफिचर          | फिचर     | विश्व    | ब्लग   |
| ---- | -------- | ------- | ------ | -------- | ------------- | -------------- | ------- | ----- | ---- |
| news | business | opinion | sports | national | entertainment | photo_feature | feature | world | blog |

## Financial Times <Site url="ft.com"/>

### myFT personal RSS <Site url="ft.com" size="sm" />

<Route namespace="ft" :data='{"path":"/myft/:key","categories":["traditional-media"],"example":"/ft/myft/rss-key","parameters":{"key":"the last part of myFT personal RSS address"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"myFT personal RSS","maintainers":["HenryQW"],"description":"::: tip\n  -   Visit ft.com -> myFT -> Contact Preferences to enable personal RSS feed, see [help.ft.com](https://help.ft.com/faq/email-alerts-and-contact-preferences/what-is-myft-rss-feed/)\n  -   Obtain the key from the personal RSS address, it looks like `12345678-abcd-4036-82db-vdv20db024b8`\n:::","location":"myft.ts","heat":4,"topFeeds":[{"id":"178028763735837702","type":"feed","url":"rsshub://ft/myft/REPLACE_WITH_KEY","title":"Importing","description":null,"image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

::: tip
  -   Visit ft.com -> myFT -> Contact Preferences to enable personal RSS feed, see [help.ft.com](https://help.ft.com/faq/email-alerts-and-contact-preferences/what-is-myft-rss-feed/)
  -   Obtain the key from the personal RSS address, it looks like `12345678-abcd-4036-82db-vdv20db024b8`
:::

## 厦门网 <Site url="epaper.xmnn.cn"/>

### 数字媒体 <Site url="epaper.xmnn.cn" size="sm" />

<Route namespace="xmnn" :data='{"path":"/epaper/:id?","categories":["traditional-media"],"example":"/xmnn/epaper/xmrb","parameters":{"id":"报纸 id，见下表，默认为 `xmrb`，即厦门日报"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["epaper.xmnn.cn/:id"],"target":"/epaper/:id"}],"name":"数字媒体","maintainers":["nczitzk"],"description":"| 厦门日报 | 厦门晚报 | 海西晨报 | 城市捷报 |\n| -------- | -------- | -------- | -------- |\n| xmrb     | xmwb     | hxcb     | csjb     |","location":"epaper.ts","heat":4,"topFeeds":[{"id":"149675643701493760","type":"feed","url":"rsshub://xmnn/epaper","title":"厦门日报电子版_厦门网","description":"厦门日报电子版_厦门网 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 厦门日报 | 厦门晚报 | 海西晨报 | 城市捷报 |
| -------- | -------- | -------- | -------- |
| xmrb     | xmwb     | hxcb     | csjb     |

### Unknown <Site url="epaper.xmnn.cn" size="sm" />

<Route namespace="xmnn" :data='{"path":"/news/:category{.+}?","name":"Unknown","maintainers":[],"location":"news.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## Korean Central News Agency (KCNA) 朝鲜中央通讯社 <Site url="www.kcna.kp"/>

### News <Site url="www.kcna.kp" size="sm" />

<Route namespace="kcna" :data='{"path":"/:lang/:category?","categories":["traditional-media"],"example":"/kcna/en","parameters":{"lang":"Language, refer to the table below","category":"Category, refer to the table below"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.kcna.kp/:lang","www.kcna.kp/:lang/category/articles/q/1ee9bdb7186944f765208f34ecfb5407.kcmsf","www.kcna.kp/:lang/category/articles.kcmsf"],"target":"/:lang"}],"name":"News","maintainers":["Rongronggg9"],"description":"| Language | 조선어 | English | 中国语 | Русский | Español | 日本語 |\n| -------- | ------ | ------- | ------ | ------- | ------- | ------ |\n| `:lang`  | `kp`   | `en`    | `cn`   | `ru`    | `es`    | `jp`   |\n\n| Category                                                         | `:category`                        |\n| ---------------------------------------------------------------- | ---------------------------------- |\n| WPK General Secretary **Kim Jong Un**&#39;s Revolutionary Activities | `54c0ca4ca013a92cc9cf95bd4004c61a` |\n| Latest News (default)                                            | `1ee9bdb7186944f765208f34ecfb5407` |\n| Top News                                                         | `5394b80bdae203fadef02522cfb578c0` |\n| Home News                                                        | `b2b3bcc1b0a4406ab0c36e45d5db58db` |\n| Documents                                                        | `a8754921399857ebdbb97a98a1e741f5` |\n| World                                                            | `593143484cf15d48ce85c26139582395` |\n| Society-Life                                                     | `93102e5a735d03979bc58a3a7aefb75a` |\n| External                                                         | `0f98b4623a3ef82aeea78df45c423fd0` |\n| News Commentary                                                  | `12c03a49f7dbe829bceea8ac77088c21` |","location":"news.ts","heat":3,"topFeeds":[{"id":"185526378093555750","type":"feed","url":"rsshub://kcna/en","title":"KCNA | Article | Latest News","description":"KCNA | Article | Latest News - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"Error: STACK_TRACE_ERROR\n    at task (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:633:27)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:660:16)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:457:28)\n    at chain (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/chunk-tasks.js:9:14)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:72:12\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:40\n    at runWithSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1588:8)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:10)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:739:54)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at collectTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1048:25)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1556:17)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:85:25)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:153:2)\n    at executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/init-forks.aqTzCSR2.js:29:4)"}' />

| Language | 조선어 | English | 中国语 | Русский | Español | 日本語 |
| -------- | ------ | ------- | ------ | ------- | ------- | ------ |
| `:lang`  | `kp`   | `en`    | `cn`   | `ru`    | `es`    | `jp`   |

| Category                                                         | `:category`                        |
| ---------------------------------------------------------------- | ---------------------------------- |
| WPK General Secretary **Kim Jong Un**'s Revolutionary Activities | `54c0ca4ca013a92cc9cf95bd4004c61a` |
| Latest News (default)                                            | `1ee9bdb7186944f765208f34ecfb5407` |
| Top News                                                         | `5394b80bdae203fadef02522cfb578c0` |
| Home News                                                        | `b2b3bcc1b0a4406ab0c36e45d5db58db` |
| Documents                                                        | `a8754921399857ebdbb97a98a1e741f5` |
| World                                                            | `593143484cf15d48ce85c26139582395` |
| Society-Life                                                     | `93102e5a735d03979bc58a3a7aefb75a` |
| External                                                         | `0f98b4623a3ef82aeea78df45c423fd0` |
| News Commentary                                                  | `12c03a49f7dbe829bceea8ac77088c21` |

## 广州日报 <Site url="gzdaily.cn"/>

### 客户端 <Site url="gzdaily.cn" size="sm" />

<Route namespace="gzdaily" :data='{"path":"/app/:column?","categories":["traditional-media"],"example":"/gzdaily/app/74","parameters":{"column":"栏目 ID，点击对应栏目后在地址栏找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"客户端","maintainers":["TimWu007"],"description":"::: tip\n  在北京时间深夜可能无法获取内容。\n:::\n\n  常用栏目 ID：\n\n| 栏目名 | ID   |\n| ------ | ---- |\n| 首页   | 74   |\n| 时局   | 374  |\n| 广州   | 371  |\n| 大湾区 | 397  |\n| 城区   | 2980 |","location":"app.ts","heat":2,"topFeeds":[{"id":"200235547707998211","type":"feed","url":"rsshub://gzdaily/app/74","title":"Importing","description":null,"image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

::: tip
  在北京时间深夜可能无法获取内容。
:::

  常用栏目 ID：

| 栏目名 | ID   |
| ------ | ---- |
| 首页   | 74   |
| 时局   | 374  |
| 广州   | 371  |
| 大湾区 | 397  |
| 城区   | 2980 |

## 客家電視台 <Site url="hakkatv.org.tw"/>

### 新聞首頁 <Site url="hakkatv.org.tw/news" size="sm" />

<Route namespace="hakkatv" :data='{"path":"/news/:type?","categories":["traditional-media"],"example":"/hakkatv/news","parameters":{"type":"新聞，見下表，留空為全部"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["hakkatv.org.tw/news"],"target":"/news"}],"name":"新聞首頁","maintainers":["TonyRL"],"url":"hakkatv.org.tw/news","description":"| 客家焦點 | 政經要聞  | 民生醫療 | 地方風采 | 國際萬象      |\n| -------- | --------- | -------- | -------- | ------------- |\n| hakka    | political | medical  | local    | international |","location":"type.ts","heat":1,"topFeeds":[{"id":"167304163667564544","type":"feed","url":"rsshub://hakkatv/news","title":"新聞首頁 - 客家電視台","description":"客家電視是屬於全民、以至於全世界客家族群的頻道，亦是為傳播客家文化而存在，定位為「全體客家族群之媒體」。 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected [ Array(1) ] to not include &#39;https://www.hakkatv.org.tw/news-detai…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1252:15)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1090:14)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@6.2.1/node_modules/chai/index.js:1700:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 客家焦點 | 政經要聞  | 民生醫療 | 地方風采 | 國際萬象      |
| -------- | --------- | -------- | -------- | ------------- |
| hakka    | political | medical  | local    | international |

## 數位時代 BusinessNext <Site url="bnext.com.tw"/>

### 最新文章 <Site url="www.bnext.com.tw" size="sm" />

<Route namespace="bnext" :data='{"path":"/","categories":["traditional-media"],"example":"/bnext","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.bnext.com.tw"],"target":"/bnext"}],"name":"最新文章","maintainers":["johan456789"],"url":"www.bnext.com.tw","location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 理论网 <Site url="paper.cntheory.com"/>

### 学习时报 <Site url="paper.cntheory.com" size="sm" />

<Route namespace="cntheory" :data='{"path":"/paper/:id?","categories":["traditional-media"],"example":"/cntheory/paper","parameters":{"id":"板块，默认为全部"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"学习时报","maintainers":["nczitzk"],"description":"如订阅 **第 A1 版：国内大局**，路由为 [`/cntheory/paper/国内大局`](https://rsshub.app/cntheory/paper/国内大局)。","location":"paper.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

如订阅 **第 A1 版：国内大局**，路由为 [`/cntheory/paper/国内大局`](https://rsshub.app/cntheory/paper/国内大局)。

## 康健 <Site url="commonhealth.com.tw"/>

### 最新內容 <Site url="commonhealth.com.tw" size="sm" />

<Route namespace="commonhealth" :data='{"path":"/","name":"最新內容","url":"commonhealth.com.tw","maintainers":["johan456789"],"example":"/commonhealth","categories":["traditional-media"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.commonhealth.com.tw/"],"target":"/"}],"location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## 新蓝网（浙江广播电视集团） <Site url="cztv.com"/>

### 浙江新闻联播 - 每日合集 <Site url="cztv.com/videos/zjxwlb" size="sm" />

<Route namespace="cztv" :data='{"path":"/zjxwlb/daily","categories":["traditional-media"],"example":"/cztv/zjxwlb/daily","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["cztv.com/videos/zjxwlb","cztv.com/"]}],"name":"浙江新闻联播 - 每日合集","maintainers":["yhkang"],"url":"cztv.com/videos/zjxwlb","location":"daily.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 浙江新闻联播 <Site url="cztv.com/videos/zjxwlb" size="sm" />

<Route namespace="cztv" :data='{"path":"/zjxwlb","categories":["traditional-media"],"example":"/cztv/zjxwlb","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["cztv.com/videos/zjxwlb","cztv.com/"]}],"name":"浙江新闻联播","maintainers":["yhkang"],"url":"cztv.com/videos/zjxwlb","location":"zjxwlb.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 河北网络广播电视台 <Site url="web.cmc.hebtv.com"/>

### 农博士在行动 <Site url="web.cmc.hebtv.com/cms/rmt0336/19/19js/st/ds/nmpd/nbszxd/index.shtml" size="sm" />

<Route namespace="hebtv" :data='{"path":"/nbszxd","categories":["traditional-media"],"example":"/hebtv/nbszxd","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":true,"supportPodcast":true,"supportScihub":false},"radar":[{"source":["web.cmc.hebtv.com/cms/rmt0336/19/19js/st/ds/nmpd/nbszxd/index.shtml"]}],"name":"农博士在行动","maintainers":["iamqiz","nczitzk"],"url":"web.cmc.hebtv.com/cms/rmt0336/19/19js/st/ds/nmpd/nbszxd/index.shtml","location":"nong-bo-shi-zai-xing-dong.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## La Jornada <Site url="jornada.com.mx"/>

### News <Site url="jornada.com.mx" size="sm" />

<Route namespace="jornada" :data='{"path":"/:date?/:category?","categories":["traditional-media"],"example":"/jornada/2022-10-12/capital","parameters":{"date":"Date string, must be in format of `YYYY-MM-DD`. You can get today&#39;s news using `today`","category":"Category, refer to the table below"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"News","maintainers":["Thealf154"],"description":"Provides a way to get an specific rss feed by date and category over the official one.\n\n| Category             | `:category` |\n| -------------------- | ----------- |\n| Capital              | capital     |\n| Cartones             | cartones    |\n| Ciencia y Tecnología | ciencia     |\n| Cultura              | cultura     |\n| Deportes             | deportes    |\n| Economía             | economia    |\n| Estados              | estados     |\n| Mundo                | mundo       |\n| Opinión              | opinion     |\n| Política             | politica    |\n| Sociedad             | sociedad    |","location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

Provides a way to get an specific rss feed by date and category over the official one.

| Category             | `:category` |
| -------------------- | ----------- |
| Capital              | capital     |
| Cartones             | cartones    |
| Ciencia y Tecnología | ciencia     |
| Cultura              | cultura     |
| Deportes             | deportes    |
| Economía             | economia    |
| Estados              | estados     |
| Mundo                | mundo       |
| Opinión              | opinion     |
| Política             | politica    |
| Sociedad             | sociedad    |

## 内蒙古广播电视台 <Site url="nmtv.cn"/>

### 点播 <Site url="nmtv.cn" size="sm" />

<Route namespace="nmtv" :data='{"path":"/column/:id?","categories":["traditional-media"],"example":"/nmtv/column/877","parameters":{"id":"栏目 id，可在对应栏目 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"点播","maintainers":["nczitzk"],"description":"::: tip\n  如 [蒙古语卫视新闻联播](http://www.nmtv.cn/folder292/folder663/folder301/folder830/folder877) 的 URL 为 `http://www.nmtv.cn/folder292/folder663/folder301/folder830/folder877`，其栏目 id 为末尾数字编号，即 `877`。可以得到其对应路由为 [`/nmtv/column/877`](https://rsshub.app/nmtv/column/877)\n:::","location":"column.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

::: tip
  如 [蒙古语卫视新闻联播](http://www.nmtv.cn/folder292/folder663/folder301/folder830/folder877) 的 URL 为 `http://www.nmtv.cn/folder292/folder663/folder301/folder830/folder877`，其栏目 id 为末尾数字编号，即 `877`。可以得到其对应路由为 [`/nmtv/column/877`](https://rsshub.app/nmtv/column/877)
:::

## Rodong Sinmun 劳动新闻 <Site url="rodong.rep.kp"/>

### News <Site url="rodong.rep.kp/cn/index.php" size="sm" />

<Route namespace="rodong" :data='{"path":"/news/:language?","categories":["traditional-media"],"example":"/rodong/news","parameters":{"language":"Language, see below, `ko` by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["rodong.rep.kp/cn/index.php","rodong.rep.kp/en/index.php","rodong.rep.kp/ko/index.php","rodong.rep.kp/cn","rodong.rep.kp/en","rodong.rep.kp/ko"],"target":"/news"}],"name":"News","maintainers":["TonyRL"],"url":"rodong.rep.kp/cn/index.php","description":"| 조선어 | English | 中文 |\n| ------ | ------- | ---- |\n| ko     | en      | cn   |","location":"news.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 조선어 | English | 中文 |
| ------ | ------- | ---- |
| ko     | en      | cn   |

## 希望之声 <Site url="soundofhope.org"/>

### 频道 <Site url="soundofhope.org" size="sm" />

<Route namespace="soundofhope" :data='{"path":"/:channel/:id","categories":["traditional-media"],"example":"/soundofhope/term/203","parameters":{"channel":"频道","id":"子频道 ID"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["soundofhope.org/:channel/:id"]}],"name":"频道","maintainers":["Fatpandac"],"description":"参数均可在官网获取，如：\n\n  `https://www.soundofhope.org/term/203` 对应 `/soundofhope/term/203`","location":"channel.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected [ …(13) ] to not include &#39;https://www.soundofhope.org/post/9080…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1252:15)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1090:14)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@6.2.1/node_modules/chai/index.js:1700:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

参数均可在官网获取，如：

  `https://www.soundofhope.org/term/203` 对应 `/soundofhope/term/203`

## Taiwan News <Site url="taiwannews.com.tw"/>

### Hot News <Site url="taiwannews.com.tw" size="sm" />

<Route namespace="taiwannews" :data='{"path":"/hot/:lang?","categories":["traditional-media"],"example":"/taiwannews/hot","parameters":{"lang":"Language, `en` or `zh`, `en` by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["taiwannews.com.tw/:lang/index"],"target":"/hot/:lang"}],"name":"Hot News","maintainers":["TonyRL"],"location":"hot.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## VICE <Site url="vice.com"/>

### Topic <Site url="vice.com/" size="sm" />

<Route namespace="vice" :data='{"path":"/topic/:topic/:language?","categories":["traditional-media"],"example":"/vice/topic/politics/en","parameters":{"topic":"Can be found in the URL","language":"defaults to `en`, use the website to discover other codes"},"radar":[{"source":["www.vice.com/:language/topic/:topic"],"target":"/topic/:topic/:language"}],"name":"Topic","maintainers":["K33k0"],"url":"vice.com/","location":"topic.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## Yomiuri Shimbun 読売新聞 <Site url="www.yomiuri.co.jp"/>

### News <Site url="www.yomiuri.co.jp" size="sm" />

<Route namespace="yomiuri" :data='{"path":"/:category?","categories":["traditional-media"],"example":"/yomiuri/news","parameters":{"category":"Category, `news` by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.yomiuri.co.jp/:category?"]}],"name":"News","maintainers":["Arracc"],"description":"Free articles only.\n\n| Category       | Parameter |\n| -------------- | --------- |\n| 新着・速報     | news      |\n| 社会           | national  |\n| 政治           | politics  |\n| 経済           | economy   |\n| スポーツ       | sports    |\n| 国際           | world     |\n| 地域           | local     |\n| 科学・ＩＴ     | science   |\n| エンタメ・文化 | culture   |\n| ライフ         | life      |\n| 医療・健康     | medical   |\n| 教育・就活     | kyoiku    |\n| 選挙・世論調査 | election  |\n| 囲碁・将棋     | igoshougi |\n| 社説           | editorial |\n| 皇室           | koushitsu |","location":"news.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at runNextTicks (node:internal/process/task_queues:64:5)\n    at listOnTimeout (node:internal/timers:567:9)\n    at processTimers (node:internal/timers:541:7)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

Free articles only.

| Category       | Parameter |
| -------------- | --------- |
| 新着・速報     | news      |
| 社会           | national  |
| 政治           | politics  |
| 経済           | economy   |
| スポーツ       | sports    |
| 国際           | world     |
| 地域           | local     |
| 科学・ＩＴ     | science   |
| エンタメ・文化 | culture   |
| ライフ         | life      |
| 医療・健康     | medical   |
| 教育・就活     | kyoiku    |
| 選挙・世論調査 | election  |
| 囲碁・将棋     | igoshougi |
| 社説           | editorial |
| 皇室           | koushitsu |

