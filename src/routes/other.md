# 🔍 Uncategorized

## RSSHub <Site url="docs.rsshub.app"/>

### Transformation - HTML <Site url="docs.rsshub.app" size="sm" />

<Route namespace="rsshub" :data='{"path":"/transform/html/:url/:routeParams","categories":["other","popular"],"example":"/rsshub/transform/html/https%3A%2F%2Fwechat2rss.xlab.app%2Fposts%2Flist%2F/item=div%5Bclass%3D%27post%2Dcontent%27%5D%20p%20a","parameters":{"url":"`encodeURIComponent`ed URL address","routeParams":"Transformation rules, requires URL encode"},"features":{"requireConfig":[{"name":"ALLOW_USER_SUPPLY_UNSAFE_DOMAIN","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Transformation - HTML","maintainers":["ttttmr","hyoban"],"description":"Pass URL and transformation rules to convert HTML/JSON into RSS.\n\nSpecify options (in the format of query string) in parameter `routeParams` parameter to extract data from HTML.\n\n| Key                 | Meaning                                                                                                       | Accepted Values | Default                  |\n| ------------------- | ------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------ |\n| `title`           | The title of the RSS                                                                                          | `string`      | Extract from `<title>` |\n| `item`            | The HTML elements as `item` using CSS selector                                                              | `string`      | html                     |\n| `itemTitle`       | The HTML elements as `title` in `item` using CSS selector                                                 | `string`      | `item` element         |\n| `itemTitleAttr`   | The attributes of `title` element as title                                                                  | `string`      | Element text             |\n| `itemLink`        | The HTML elements as `link` in `item` using CSS selector                                                  | `string`      | `item` element         |\n| `itemLinkAttr`    | The attributes of `link` element as link                                                                    | `string`      | `href`                 |\n| `itemDesc`        | The HTML elements as `descrption` in `item` using CSS selector                                            | `string`      | `item` element         |\n| `itemDescAttr`    | The attributes of `descrption` element as description                                                       | `string`      | Element html             |\n| `itemPubDate`     | The HTML elements as `pubDate` in `item` using CSS selector                                               | `string`      | `item` element         |\n| `itemPubDateAttr` | The attributes of `pubDate` element as pubDate                                                              | `string`      | Element html             |\n| `itemContent`     | The HTML elements as `description` in `item` using CSS selector ( in `itemLink` page for full content ) | `string`      |                          |\n| `encoding`        | The encoding of the HTML content                                                                              | `string`      | utf-8                    |\n\n  Parameters parsing in the above example:\n\n| Parameter     | Value                                     |\n| ------------- | ----------------------------------------- |\n| `url`         | `https://wechat2rss.xlab.app/posts/list/` |\n| `routeParams` | `item=div[class=&#39;post-content&#39;] p a`      |\n\n  Parsing of `routeParams` parameter:\n\n| Parameter | Value                           |\n| --------- | ------------------------------- |\n| `item`    | `div[class=&#39;post-content&#39;] p a` |","location":"transform/html.ts","heat":7695,"topFeeds":[{"id":"68731140035191863","type":"feed","url":"rsshub://rsshub/transform/html/https%3A%2F%2Fimnks.com%2F/item=article&itemTitle=span%5Bclass=entry-title%5D&itemLink=span%5Bclass=entry-title%5D+a&itemDesc=div%5Bclass*=entry-summary%5D&itemPubDate=div%5Bclass=entry-meta%5D+time&itemPubDateAttr=datetime","title":"我不是矿神 - 群晖,威联通,铁威马,绿联UGOS,万由UNAS,飞牛fnOS,UNRAID,ESXI,PVE,OPENWRT","description":"Proxy https://imnks.com/ - Powered by RSSHub","image":null},{"id":"70337524894135296","type":"feed","url":"rsshub://rsshub/transform/html/https%3A%2F%2Fjavdb.com%2Funcensored/title%3DjavDB%E6%97%A0%E7%A0%81","title":"javDB无码","description":"Proxy https://javdb.com/uncensored - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

Pass URL and transformation rules to convert HTML/JSON into RSS.

Specify options (in the format of query string) in parameter `routeParams` parameter to extract data from HTML.

| Key                 | Meaning                                                                                                       | Accepted Values | Default                  |
| ------------------- | ------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------ |
| `title`           | The title of the RSS                                                                                          | `string`      | Extract from `<title>` |
| `item`            | The HTML elements as `item` using CSS selector                                                              | `string`      | html                     |
| `itemTitle`       | The HTML elements as `title` in `item` using CSS selector                                                 | `string`      | `item` element         |
| `itemTitleAttr`   | The attributes of `title` element as title                                                                  | `string`      | Element text             |
| `itemLink`        | The HTML elements as `link` in `item` using CSS selector                                                  | `string`      | `item` element         |
| `itemLinkAttr`    | The attributes of `link` element as link                                                                    | `string`      | `href`                 |
| `itemDesc`        | The HTML elements as `descrption` in `item` using CSS selector                                            | `string`      | `item` element         |
| `itemDescAttr`    | The attributes of `descrption` element as description                                                       | `string`      | Element html             |
| `itemPubDate`     | The HTML elements as `pubDate` in `item` using CSS selector                                               | `string`      | `item` element         |
| `itemPubDateAttr` | The attributes of `pubDate` element as pubDate                                                              | `string`      | Element html             |
| `itemContent`     | The HTML elements as `description` in `item` using CSS selector ( in `itemLink` page for full content ) | `string`      |                          |
| `encoding`        | The encoding of the HTML content                                                                              | `string`      | utf-8                    |

  Parameters parsing in the above example:

| Parameter     | Value                                     |
| ------------- | ----------------------------------------- |
| `url`         | `https://wechat2rss.xlab.app/posts/list/` |
| `routeParams` | `item=div[class='post-content'] p a`      |

  Parsing of `routeParams` parameter:

| Parameter | Value                           |
| --------- | ------------------------------- |
| `item`    | `div[class='post-content'] p a` |

### Transformation - JSON <Site url="docs.rsshub.app" size="sm" />

<Route namespace="rsshub" :data='{"path":"/transform/json/:url/:routeParams","categories":["other"],"example":"/rsshub/transform/json/https%3A%2F%2Fapi.github.com%2Frepos%2Fginuerzh%2Fgost%2Freleases/title=Gost%20releases&itemTitle=tag_name&itemLink=html_url&itemDesc=body","parameters":{"url":"`encodeURIComponent`ed URL address","routeParams":"Transformation rules, requires URL encode"},"features":{"requireConfig":[{"name":"ALLOW_USER_SUPPLY_UNSAFE_DOMAIN","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Transformation - JSON","maintainers":["ttttmr"],"description":"Specify options (in the format of query string) in parameter `routeParams` parameter to extract data from JSON.\n\n| Key                | Meaning                                      | Accepted Values   | Default                                    |\n| ------------------ | -------------------------------------------- | ----------------- | ------------------------------------------ |\n| `title`          | The title of the RSS                         | `string`        | Extracted from home page of current domain |\n| `item`           | The JSON Path as `item` element            | `string`        | Entire JSON response                       |\n| `itemTitle`      | The JSON Path as `title` in `item`       | `string`        | None                                       |\n| `itemLink`       | The JSON Path as `link` in `item`        | `string`        | None                                       |\n| `itemLinkPrefix` | Optional Prefix for `itemLink` value       | `string`        | None                                       |\n| `itemDesc`       | The JSON Path as `description` in `item` | `string`        | None                                       |\n| `itemPubDate`    | The JSON Path as `pubDate` in `item`     | `string`        | None                                       |\n\n::: tip\nJSON Path only supports format like `a.b.c`. if you need to access arrays, like `a[0].b`, you can write it as `a.0.b`.\n:::\n\n  Parameters parsing in the above example:\n\n| Parameter     | Value                                                                    |\n| ------------- | ------------------------------------------------------------------------ |\n| `url`         | `https://api.github.com/repos/ginuerzh/gost/releases`                    |\n| `routeParams` | `title=Gost releases&itemTitle=tag_name&itemLink=html_url&itemDesc=body` |\n\n  Parsing of `routeParams` parameter:\n\n| Parameter   | Value           |\n| ----------- | --------------- |\n| `title`     | `Gost releases` |\n| `itemTitle` | `tag_name`      |\n| `itemLink`  | `html_url`      |\n| `itemDesc`  | `body`          |","location":"transform/json.ts","heat":15,"topFeeds":[{"id":"184522799057699840","type":"feed","url":"rsshub://rsshub/transform/json/https%3A%2F%2Fdblp.org%2Fsearch%2Fpubl%2Fapi%3Fq%3D%28grasp%7Czeroshot%7Czero-shot%29%26format%3Djson%26h%3D200/title%3DDBLP%20search%3A%20grasp%20%7C%20zeroshot%20%7C%20zero-shot%20%5B200%5D%26item%3Dresult.hits.hit%26itemTitle%3Dinfo.title%26itemLink%3Dinfo.url%26itemDesc%3Dinfo.venue","title":"DBLP search: grasp | zeroshot | zero-shot [200]","description":"Proxy https://dblp.org/search/publ/api?q=(grasp|zeroshot|zero-shot)&format=json&h=200 - Powered by RSSHub","image":null},{"id":"185695094733155328","type":"feed","url":"rsshub://rsshub/transform/json/https%3A%2F%2Fapi.github.com%2Frepos%2FMacmod%2Fgodap%2Freleases/title=godap%20releases&itemTitle=tag_name&itemLink=html_url&itemDesc=body","title":"godap releases","description":"Proxy https://api.github.com/repos/Macmod/godap/releases - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

Specify options (in the format of query string) in parameter `routeParams` parameter to extract data from JSON.

| Key                | Meaning                                      | Accepted Values   | Default                                    |
| ------------------ | -------------------------------------------- | ----------------- | ------------------------------------------ |
| `title`          | The title of the RSS                         | `string`        | Extracted from home page of current domain |
| `item`           | The JSON Path as `item` element            | `string`        | Entire JSON response                       |
| `itemTitle`      | The JSON Path as `title` in `item`       | `string`        | None                                       |
| `itemLink`       | The JSON Path as `link` in `item`        | `string`        | None                                       |
| `itemLinkPrefix` | Optional Prefix for `itemLink` value       | `string`        | None                                       |
| `itemDesc`       | The JSON Path as `description` in `item` | `string`        | None                                       |
| `itemPubDate`    | The JSON Path as `pubDate` in `item`     | `string`        | None                                       |

::: tip
JSON Path only supports format like `a.b.c`. if you need to access arrays, like `a[0].b`, you can write it as `a.0.b`.
:::

  Parameters parsing in the above example:

| Parameter     | Value                                                                    |
| ------------- | ------------------------------------------------------------------------ |
| `url`         | `https://api.github.com/repos/ginuerzh/gost/releases`                    |
| `routeParams` | `title=Gost releases&itemTitle=tag_name&itemLink=html_url&itemDesc=body` |

  Parsing of `routeParams` parameter:

| Parameter   | Value           |
| ----------- | --------------- |
| `title`     | `Gost releases` |
| `itemTitle` | `tag_name`      |
| `itemLink`  | `html_url`      |
| `itemDesc`  | `body`          |

## 紳士漫畫 <Site url="wnacg.org"/>

### 標籤更新 <Site url="wnacg.com/albums.html" size="sm" />

<Route namespace="wnacg" :data='{"name":"標籤更新","maintainers":["Gandum2077"],"path":"/tag/:tag","example":"/wnacg/tag/漢化","radar":[{"source":["wnacg.com/*"]}],"url":"wnacg.com/albums.html","features":{"nsfw":true},"location":"tag.ts","heat":878,"topFeeds":[{"id":"42178417067741184","type":"feed","url":"rsshub://wnacg/tag/%E6%BC%A2%E5%8C%96","title":"紳士漫畫-專註分享漢化本子|邪惡漫畫","description":"紳士漫畫-專註分享漢化本子|邪惡漫畫 - Powered by RSSHub","image":null},{"id":"61633751842982920","type":"feed","url":"rsshub://wnacg/tag/%E6%AF%8D%E5%AD%90","title":"紳士漫畫-專註分享漢化本子|邪惡漫畫","description":"紳士漫畫-專註分享漢化本子|邪惡漫畫 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 分类更新 <Site url="wnacg.com/albums.html" size="sm" />

<Route namespace="wnacg" :data='{"name":"分类更新","maintainers":["Gandum2077"],"path":"/category/:cid","example":"/wnacg/category/6","radar":[{"source":["wnacg.com/*"]}],"url":"wnacg.com/albums.html","features":{"nsfw":true},"location":"category.ts","heat":596,"topFeeds":[{"id":"42178678837350400","type":"feed","url":"rsshub://wnacg/category/10","title":"漢化 < 雜誌&短篇 < 紳士漫畫-專註分享漢化本子|邪惡漫畫","description":"漢化 < 雜誌&短篇 < 紳士漫畫-專註分享漢化本子|邪惡漫畫 - Powered by RSSHub","image":null},{"id":"70519954758300672","type":"feed","url":"rsshub://wnacg/category/3","title":"寫真&Cosplay < 紳士漫畫-專註分享漢化本子|邪惡漫畫","description":"寫真&Cosplay < 紳士漫畫-專註分享漢化本子|邪惡漫畫 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"Error: STACK_TRACE_ERROR\n    at task (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:633:27)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:660:16)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:457:28)\n    at chain (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/chunk-tasks.js:9:14)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:72:12\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:40\n    at runWithSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1588:8)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:10)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:739:54)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at collectTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1048:25)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1556:17)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:85:25)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:153:2)\n    at executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/init-forks.aqTzCSR2.js:29:4)"}' />

### 最新 <Site url="wnacg.com/albums.html" size="sm" />

<Route namespace="wnacg" :data='{"name":"最新","maintainers":["KenMizz"],"path":"/","example":"/wnacg","radar":[{"source":["wnacg.com/albums.html","wnacg.com/"]}],"url":"wnacg.com/albums.html","features":{"nsfw":true},"location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"Error: STACK_TRACE_ERROR\n    at task (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:633:27)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:660:16)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:457:28)\n    at chain (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/chunk-tasks.js:9:14)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:72:12\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:40\n    at runWithSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1588:8)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:10)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:739:54)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at collectTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1048:25)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1556:17)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:85:25)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:153:2)\n    at executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/init-forks.aqTzCSR2.js:29:4)"}' />

## Bing <Site url="cn.bing.com"/>

### 每日壁纸 <Site url="www.bing.com/" size="sm" />

<Route namespace="bing" :data='{"path":"/:routeParams?","parameters":{"routeParams":"额外参数type,story和lang:请参阅以下说明和表格"},"radar":[{"source":["www.bing.com/"],"target":""},{"source":["cn.bing.com/"],"target":""}],"name":"每日壁纸","maintainers":["FHYunCai","LLLLLFish"],"url":"www.bing.com/","example":"/bing/type=UHD&story=1&lang=zh-CN","description":"| 参数    | 含义                 | 接受的值                                                      | 默认值       | 备注                                                     |\n|-------|--------------------|-----------------------------------------------------------|-----------|--------------------------------------------------------|\n| type  | 输出壁纸的像素类型          | UHD/1920x1080/1920x1200/768x1366/1080x1920/1080x1920_logo | 1920x1080 | 1920x1200与1080x1920_logo带有水印,输入的值不在接受范围内都会输出成1920x1080 |\n| story | 是否输出壁纸的故事          | 1/0                                                       | 0         | 输入的值不为1都不会输出故事                                         |\n| lang  | 输出壁纸图文的地区(中文或者是英文) | zh/en                                               | zh     | zh/en输出的壁纸图文不一定是一样的;如果en不生效,试着部署到其他地方               |\n","location":"daily-wallpaper.ts","heat":1020,"topFeeds":[{"id":"42109271607731200","type":"feed","url":"rsshub://bing","title":"Bing每日壁纸","description":"Bing每日壁纸 - Powered by RSSHub","image":null},{"id":"42501169300235264","type":"feed","url":"rsshub://bing/type=UHD&story=1&lang=zh-CN","title":"Bing每日壁纸","description":"Bing每日壁纸 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected NaN to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 参数    | 含义                 | 接受的值                                                      | 默认值       | 备注                                                     |
|-------|--------------------|-----------------------------------------------------------|-----------|--------------------------------------------------------|
| type  | 输出壁纸的像素类型          | UHD/1920x1080/1920x1200/768x1366/1080x1920/1080x1920_logo | 1920x1080 | 1920x1200与1080x1920_logo带有水印,输入的值不在接受范围内都会输出成1920x1080 |
| story | 是否输出壁纸的故事          | 1/0                                                       | 0         | 输入的值不为1都不会输出故事                                         |
| lang  | 输出壁纸图文的地区(中文或者是英文) | zh/en                                               | zh     | zh/en输出的壁纸图文不一定是一样的;如果en不生效,试着部署到其他地方               |


### 搜索 <Site url="cn.bing.com/" size="sm" />

<Route namespace="bing" :data='{"path":"/search/:keyword","categories":["other"],"example":"/bing/search/rss","parameters":{"keyword":"搜索关键词"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["cn.bing.com/"],"target":""}],"name":"搜索","maintainers":["CaoMeiYouRen"],"url":"cn.bing.com/","location":"search.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected NaN to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## iDaily <Site url="idai.ly"/>

### 每日环球视野 <Site url="idai.ly" size="sm" />

<Route namespace="idaily" :data='{"path":["/:language?"],"name":"每日环球视野","example":"/idaily","maintainers":["zphw","nczitzk"],"parameters":{"language":"语言，见下表，默认为简体中文"},"radar":[{"source":["idai.ly/"]}],"description":"| 简体中文 | 繁体中文 |\n| -------- | -------- |\n| zh-hans  | zh-hant  |","location":"index.ts","heat":588,"topFeeds":[{"id":"53257967622553618","type":"feed","url":"rsshub://idaily/today","title":"iDaily · 每日环球视野","description":"iDaily · 每日环球视野 | Your Global Point of View - Powered by RSSHub","image":"https://idai.ly/img/idaily/logo_2x.png"},{"id":"56593152747053056","type":"feed","url":"rsshub://idaily","title":"iDaily · 每日环球视野","description":"iDaily · 每日环球视野 | Your Global Point of View - Powered by RSSHub","image":"https://idai.ly/img/idaily/logo_2x.png"}]}' :test='{"code":0}' />

| 简体中文 | 繁体中文 |
| -------- | -------- |
| zh-hans  | zh-hant  |

## 煎蛋 <Site url="jandan.net"/>

### Section <Site url="jandan.net" size="sm" />

<Route namespace="jandan" :data='{"path":"/:category/:type?","example":"/jandan/top","name":"Section","maintainers":["nczitzk","pseudoyu"],"parameters":{"category":{"description":"板块","options":[{"label":"热榜","value":"top"},{"label":"问答","value":"qa"},{"label":"树洞","value":"treehole"},{"label":"随手拍","value":"ooxx"},{"label":"无聊图","value":"pic"},{"label":"鱼塘","value":"bbs"}]},"type":{"description":"热榜类型，仅当 category 选择 `top` 时有效","default":"4hr","options":[{"label":"4小时热门","value":"4hr"},{"label":"3天内无聊图","value":"pic3days"},{"label":"7天内无聊图","value":"pic7days"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["i.jandan.net/:category"],"target":"/jandan/:category?"}],"location":"section.ts","heat":531,"topFeeds":[{"id":"42107730549411843","type":"feed","url":"rsshub://jandan/top","title":"热榜 - 4小时热门","description":"热榜 - 4小时热门 - Powered by RSSHub","image":null},{"id":"58385313249043456","type":"feed","url":"rsshub://jandan/pic","title":"无聊图 - 蛋友贴图专版","description":"无聊图 - 蛋友贴图专版 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### Feed <Site url="jandan.net" size="sm" />

<Route namespace="jandan" :data='{"path":"/","example":"/jandan","name":"Feed","maintainers":["nczitzk","bigfei","pseudoyu"],"parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["i.jandan.net"],"target":"/jandan"}],"location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 中文播客榜 <Site url="xyzrank.com"/>

::: tip
可以通过指定 `limit` 参数确定榜单排名下限，默认为 250。

若只查看榜单前 50，可在订阅 URL 后加入 `?limit=50`。

即，以 [热门节目](https://xyzrank.com/#/) 为例，路由为[`/xyzrank?limit=50`](https://rsshub.app/xyzrank?limit=50)。
:::

### Unknown <Site url="xyzrank.com/" size="sm" />

<Route namespace="xyzrank" :data='{"path":"/:category?","radar":[{"source":["xyzrank.com/"],"target":""}],"name":"Unknown","maintainers":[],"url":"xyzrank.com/","location":"index.ts","heat":407,"topFeeds":[{"id":"42248910764651520","type":"feed","url":"rsshub://xyzrank","title":"中文播客榜 - 热门节目","description":"榜单只是一种维度，愿你找到喜欢的节目 - Powered by RSSHub","image":null},{"id":"68855551484634217","type":"feed","url":"rsshub://xyzrank/hot-episodes-new","title":"中文播客榜 - 新锐节目","description":"榜单只是一种维度，愿你找到喜欢的节目 - Powered by RSSHub","image":null}]}' :test='undefined' />

## ZAKER <Site url="myzaker.com"/>

### 精读 <Site url="myzaker.com" size="sm" />

<Route namespace="zaker" :data='{"path":"/focusread","radar":[{"source":["www.myzaker.com/"],"target":"/focusread"}],"name":"精读","example":"/zaker/focusread","maintainers":["AlexdanerZe","TonyRL"],"location":"focus.ts","heat":294,"topFeeds":[{"id":"54945423974379534","type":"feed","url":"rsshub://zaker/focusread","title":"ZAKER 精读新闻","description":"ZAKER 精读新闻 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"Error: STACK_TRACE_ERROR\n    at task (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:633:27)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:660:16)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:457:28)\n    at chain (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/chunk-tasks.js:9:14)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:72:12\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:40\n    at runWithSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1588:8)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:10)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:739:54)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at collectTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1048:25)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1556:17)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:85:25)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:153:2)\n    at executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/init-forks.aqTzCSR2.js:29:4)"}' />

### 分类 <Site url="myzaker.com" size="sm" />

<Route namespace="zaker" :data='{"path":"/channel/:id?","parameters":{"id":"分类 ID，可在 URL 中找到，默认为 `1`"},"radar":[{"source":["www.myzaker.com/channel/:id"],"target":"/channel/:id"}],"name":"分类","example":"/zaker/channel/13","maintainers":["LogicJake","kt286","TonyRL"],"location":"channel.ts","heat":46,"topFeeds":[{"id":"56326657469609999","type":"feed","url":"rsshub://zaker/channel/13","title":"科技 - ZAKER新闻","description":"科技 - ZAKER新闻 - Powered by RSSHub","image":null},{"id":"109858197894680576","type":"feed","url":"rsshub://zaker/channel/660","title":"ZAKER新闻","description":"ZAKER新闻 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected NaN to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## Product Hunt <Site url="www.producthunt.com"/>

> 官方 Feed 地址为: [https://www.producthunt.com/feed](https://www.producthunt.com/feed)

### Top Products Launching Today <Site url="www.producthunt.com/" size="sm" />

<Route namespace="producthunt" :data='{"path":"/today","categories":["other"],"example":"/producthunt/today","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.producthunt.com/"]}],"name":"Top Products Launching Today","maintainers":["miaoyafeng","Fatpandac"],"url":"www.producthunt.com/","location":"today.ts","heat":207,"topFeeds":[{"id":"41369544201246720","type":"feed","url":"rsshub://producthunt/today","title":"Product Hunt Today Popular","description":"Product Hunt Today Popular - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 三联生活周刊 <Site url="lifeweek.com.cn"/>

### Unknown <Site url="lifeweek.com.cn" size="sm" />

<Route namespace="lifeweek" :data='{"path":"/channel/:id","radar":[{"source":["lifeweek.com.cn/column/:channel"],"target":"/channel/:channel"}],"name":"Unknown","maintainers":[],"location":"channel.ts","heat":142,"topFeeds":[{"id":"74705665643397120","type":"feed","url":"rsshub://lifeweek/channel/4","title":"文化","description":"文化 - Powered by RSSHub","image":null},{"id":"77268471866082304","type":"feed","url":"rsshub://lifeweek/channel/3","title":"经济","description":"经济 - Powered by RSSHub","image":null}]}' :test='undefined' />

### Unknown <Site url="lifeweek.com.cn" size="sm" />

<Route namespace="lifeweek" :data='{"path":"/tag/:id","radar":[{"source":["lifeweek.com.cn/articleList/:tag"],"target":"/tag/:tag"}],"name":"Unknown","maintainers":[],"location":"tag.ts","heat":19,"topFeeds":[{"id":"104794039452750848","type":"feed","url":"rsshub://lifeweek/tag/6","title":"人物","description":"人物 - Powered by RSSHub","image":null},{"id":"152614384793012224","type":"feed","url":"rsshub://lifeweek/tag/4","title":"文学","description":"文学 - Powered by RSSHub","image":null}]}' :test='undefined' />

## 中国互联网联合辟谣平台 <Site url="piyao.org.cn"/>

### 今日辟谣 <Site url="piyao.org.cn/jrpy/index.htm" size="sm" />

<Route namespace="piyao" :data='{"path":"/jrpy","categories":["other"],"example":"/piyao/jrpy","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["piyao.org.cn/jrpy/index.htm"]}],"name":"今日辟谣","maintainers":["Fatpandac"],"url":"piyao.org.cn/jrpy/index.htm","location":"jrpy.ts","heat":131,"topFeeds":[{"id":"59474368564173834","type":"feed","url":"rsshub://piyao/jrpy","title":"今日辟谣","description":"今日辟谣 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 界面新闻 <Site url="jiemian.com"/>

### 栏目 <Site url="jiemian.com" size="sm" />

<Route namespace="jiemian" :data='{"path":"/lists/:id","parameters":{"id":"分类 id，见下表，可在对应分类页 URL 中找到"},"name":"栏目","example":"/jiemian/lists/65","maintainers":["WenhuWee","nczitzk"],"description":"| [首页](https://www.jiemian.com) | [商业](https://www.jiemian.com/lists/2.html) | [财经](https://www.jiemian.com/lists/800.html) | [新闻](https://www.jiemian.com/lists/801.html) | [文化生活](https://www.jiemian.com/lists/130.html) | [快报](https://www.jiemian.com/lists/4.html) |\n| ------------------------------- | -------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | -------------------------------------------------- | -------------------------------------------- |\n|                                 | 2                                            | 800                                            | 801                                            | 130                                                | 4                                            |\n\n::: details 更多分类\n\n#### [首页](https://www.jiemian.com)\n\n| [科技](https://www.jiemian.com/lists/65.html) | [金融](https://www.jiemian.com/lists/9.html) | [证券](https://www.jiemian.com/lists/112.html) | [地产](https://www.jiemian.com/lists/62.html) | [汽车](https://www.jiemian.com/lists/51.html) | [健康](https://www.jiemian.com/lists/472.html) |\n| --------------------------------------------- | -------------------------------------------- | ---------------------------------------------- | --------------------------------------------- | --------------------------------------------- | ---------------------------------------------- |\n| 65                                            | 9                                            | 112                                            | 62                                            | 51                                            | 472                                            |\n\n| [大湾区](https://www.jiemian.com/lists/680.html) | [元宇宙](https://www.jiemian.com/lists/704.html) | [文旅](https://www.jiemian.com/lists/105.html) | [数据](https://www.jiemian.com/lists/154.html) | [ESG](https://www.jiemian.com/lists/712.html) | [双碳](https://www.jiemian.com/lists/877.html) |\n| ------------------------------------------------ | ------------------------------------------------ | ---------------------------------------------- | ---------------------------------------------- | --------------------------------------------- | ---------------------------------------------- |\n| 680                                              | 704                                              | 105                                            | 154                                            | 712                                           | 877                                            |\n\n| [电厂](https://www.jiemian.com/lists/872.html) |\n| ---------------------------------------------- |\n| 872                                            |\n\n#### [商业](https://www.jiemian.com/lists/2.html)\n\n| [科技](https://www.jiemian.com/lists/65.html) | [地产](https://www.jiemian.com/lists/62.html) | [ 汽车](https://www.jiemian.com/lists/51.html) | [消费](https://www.jiemian.com/lists/31.html) | [工业](https://www.jiemian.com/lists/28.html) | [时尚](https://www.jiemian.com/lists/68.html) |\n| --------------------------------------------- | --------------------------------------------- | ---------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |\n| 65                                            | 62                                            | 51                                             | 31                                            | 28                                            | 68                                            |\n\n| [交通](https://www.jiemian.com/lists/30.html) | [医药](https://www.jiemian.com/lists/472.html) | [互联网](https://www.jiemian.com/lists/851.html) | [创投 ](https://www.jiemian.com/lists/858.html) | [能源](https://www.jiemian.com/lists/856.html) | [数码](https://www.jiemian.com/lists/853.html) |\n| --------------------------------------------- | ---------------------------------------------- | ------------------------------------------------ | ----------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |\n| 30                                            | 472                                            | 851                                              | 858                                             | 856                                            | 853                                            |\n\n| [教育](https://www.jiemian.com/lists/256.html) | [食品](https://www.jiemian.com/lists/845.html) | [新能源](https://www.jiemian.com/lists/857.html) | [家电](https://www.jiemian.com/lists/850.html) | [健康](https://www.jiemian.com/lists/854.html) | [酒业](https://www.jiemian.com/lists/676.html) |\n| ---------------------------------------------- | ---------------------------------------------- | ------------------------------------------------ | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |\n| 256                                            | 845                                            | 857                                              | 850                                            | 854                                            | 676                                            |\n\n| [物流](https://www.jiemian.com/lists/841.html) | [零售](https://www.jiemian.com/lists/847.html) | [美妆](https://www.jiemian.com/lists/838.html) | [楼市](https://www.jiemian.com/city/main/181.html) | [家居](https://www.jiemian.com/lists/694.html) | [餐饮](https://www.jiemian.com/lists/848.html) |\n| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | -------------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |\n| 841                                            | 847                                            | 838                                            | city/main/181                                      | 694                                            | 848                                            |\n\n| [日用](https://www.jiemian.com/lists/846.html) | [企服](https://www.jiemian.com/lists/852.html) | [珠宝](https://www.jiemian.com/lists/839.html) | [腕表](https://www.jiemian.com/lists/840.html) | [ 商学院](https://www.jiemian.com/lists/605.html) | [元宇宙](https://www.jiemian.com/lists/704.html) |\n| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ------------------------------------------------- | ------------------------------------------------ |\n| 846                                            | 852                                            | 839                                            | 840                                            | 605                                               | 704                                              |\n\n| [电厂](https://www.jiemian.com/lists/872.html) | [农业](https://www.jiemian.com/lists/883.html) |\n| ---------------------------------------------- | ---------------------------------------------- |\n| 872                                            | 883                                            |\n\n#### [财经](https://www.jiemian.com/lists/800.html)\n\n| [金融](https://www.jiemian.com/lists/9.html) | [投资](https://www.jiemian.com/lists/86.html) | [证券](https://www.jiemian.com/lists/112.html) | [IPO](https://www.jiemian.com/lists/699.html) | [宏观](https://www.jiemian.com/lists/174.html) | [股市](https://www.jiemian.com/lists/418.html) |\n| -------------------------------------------- | --------------------------------------------- | ---------------------------------------------- | --------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |\n| 9                                            | 86                                            | 112                                            | 699                                           | 174                                            | 418                                            |\n\n| [财富](https://www.jiemian.com/lists/410.html) | [有连云](https://www.jiemian.com/lists/889.html) |\n| ---------------------------------------------- | ------------------------------------------------ |\n| 410                                            | 889                                              |\n\n#### [新闻](https://www.jiemian.com/lists/801.html)\n\n| [天下](https://www.jiemian.com/lists/32.html) | [中国](https://www.jiemian.com/lists/71.html) | [ 评论](https://www.jiemian.com/lists/8.html) | [数据](https://www.jiemian.com/lists/154.html) | [职场](https://www.jiemian.com/lists/50.html) | [国是](https://www.jiemian.com/lists/422.html) |\n| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | ---------------------------------------------- | --------------------------------------------- | ---------------------------------------------- |\n| 32                                            | 71                                            | 8                                             | 154                                            | 50                                            | 422                                            |\n\n| [体育](https://www.jiemian.com/lists/82.html) | [文娱](https://www.jiemian.com/lists/63.html) | [ 影像](https://www.jiemian.com/lists/225.html) | [营销](https://www.jiemian.com/lists/49.html) | [大 湾区](https://www.jiemian.com/lists/680.html) | [ESG](https://www.jiemian.com/lists/712.html) |\n| --------------------------------------------- | --------------------------------------------- | ----------------------------------------------- | --------------------------------------------- | ------------------------------------------------- | --------------------------------------------- |\n| 82                                            | 63                                            | 225                                             | 49                                            | 680                                               | 712                                           |\n\n| [双碳](https://www.jiemian.com/lists/877.html) | [长三角](https://www.jiemian.com/lists/917.html) |\n| ---------------------------------------------- | ------------------------------------------------ |\n| 877                                            | 917                                              |\n\n#### [文化生活](https://www.jiemian.com/lists/130.html)\n\n| [文化](https://www.jiemian.com/lists/130.html) | [文旅](https://www.jiemian.com/lists/105.html) | [生活方式](https://www.jiemian.com/lists/135.html) | [美食美酒](https://www.jiemian.com/lists/865.html) | [艺术](https://www.jiemian.com/lists/643.html) | [游戏](https://www.jiemian.com/lists/118.html) |\n| ---------------------------------------------- | ---------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |\n| 130                                            | 105                                            | 135                                                | 865                                                | 643                                            | 118                                            |\n\n| [正午](https://www.jiemian.com/lists/53.html) | [箭厂](https://www.jiemian.com/video/lists/195_1.html) |\n| --------------------------------------------- | ------------------------------------------------------ |\n| 53                                            | video/lists/195_1                                     |\n\n#### [快报](https://www.jiemian.com/lists/4.html)\n\n| [今日热点](https://www.jiemian.com/lists/1324kb.html) | [公司头条](https://www.jiemian.com/lists/1322kb.html) | [股市前沿](https://www.jiemian.com/lists/1327kb.html) | [监管通报](https://www.jiemian.com/lists/1330kb.html) | [财经速览](https://www.jiemian.com/lists/1326kb.html) | [时事追踪](https://www.jiemian.com/lists/1325kb.html) |\n| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |\n| 1324kb                                                | 1322kb                                                | 1327kb                                                | 1330kb                                                | 1326kb                                                | 1325kb                                                |\n\n:::","location":"lists.ts","heat":98,"topFeeds":[{"id":"67075285940287491","type":"feed","url":"rsshub://jiemian/lists/65","title":"界面新闻-只服务于独立思考的人群-Jiemian.com","description":"界面新闻是中国具有影响力的原创财经新媒体，以财经、商业新闻为核心，布局近40个内容频道，旗下同时拥有正午故事、箭厂视频、歪楼等数个知名新媒体品牌。 - Powered by RSSHub","image":"https://res.jiemian.com/assets/pc/common/img/jiemian_logo.svg"},{"id":"63061119039267850","type":"feed","url":"rsshub://jiemian/lists/4","title":"界面新闻-只服务于独立思考的人群-Jiemian.com","description":"界面新闻是中国具有影响力的原创财经新媒体，以财经、商业新闻为核心，布局近40个内容频道，旗下同时拥有正午故事、箭厂视频、歪楼等数个知名新媒体品牌。 - Powered by RSSHub","image":"https://res.jiemian.com/assets/pc/common/img/jiemian_logo.svg"}]}' :test='{"code":0}' />

| [首页](https://www.jiemian.com) | [商业](https://www.jiemian.com/lists/2.html) | [财经](https://www.jiemian.com/lists/800.html) | [新闻](https://www.jiemian.com/lists/801.html) | [文化生活](https://www.jiemian.com/lists/130.html) | [快报](https://www.jiemian.com/lists/4.html) |
| ------------------------------- | -------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | -------------------------------------------------- | -------------------------------------------- |
|                                 | 2                                            | 800                                            | 801                                            | 130                                                | 4                                            |

::: details 更多分类

#### [首页](https://www.jiemian.com)

| [科技](https://www.jiemian.com/lists/65.html) | [金融](https://www.jiemian.com/lists/9.html) | [证券](https://www.jiemian.com/lists/112.html) | [地产](https://www.jiemian.com/lists/62.html) | [汽车](https://www.jiemian.com/lists/51.html) | [健康](https://www.jiemian.com/lists/472.html) |
| --------------------------------------------- | -------------------------------------------- | ---------------------------------------------- | --------------------------------------------- | --------------------------------------------- | ---------------------------------------------- |
| 65                                            | 9                                            | 112                                            | 62                                            | 51                                            | 472                                            |

| [大湾区](https://www.jiemian.com/lists/680.html) | [元宇宙](https://www.jiemian.com/lists/704.html) | [文旅](https://www.jiemian.com/lists/105.html) | [数据](https://www.jiemian.com/lists/154.html) | [ESG](https://www.jiemian.com/lists/712.html) | [双碳](https://www.jiemian.com/lists/877.html) |
| ------------------------------------------------ | ------------------------------------------------ | ---------------------------------------------- | ---------------------------------------------- | --------------------------------------------- | ---------------------------------------------- |
| 680                                              | 704                                              | 105                                            | 154                                            | 712                                           | 877                                            |

| [电厂](https://www.jiemian.com/lists/872.html) |
| ---------------------------------------------- |
| 872                                            |

#### [商业](https://www.jiemian.com/lists/2.html)

| [科技](https://www.jiemian.com/lists/65.html) | [地产](https://www.jiemian.com/lists/62.html) | [ 汽车](https://www.jiemian.com/lists/51.html) | [消费](https://www.jiemian.com/lists/31.html) | [工业](https://www.jiemian.com/lists/28.html) | [时尚](https://www.jiemian.com/lists/68.html) |
| --------------------------------------------- | --------------------------------------------- | ---------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| 65                                            | 62                                            | 51                                             | 31                                            | 28                                            | 68                                            |

| [交通](https://www.jiemian.com/lists/30.html) | [医药](https://www.jiemian.com/lists/472.html) | [互联网](https://www.jiemian.com/lists/851.html) | [创投 ](https://www.jiemian.com/lists/858.html) | [能源](https://www.jiemian.com/lists/856.html) | [数码](https://www.jiemian.com/lists/853.html) |
| --------------------------------------------- | ---------------------------------------------- | ------------------------------------------------ | ----------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| 30                                            | 472                                            | 851                                              | 858                                             | 856                                            | 853                                            |

| [教育](https://www.jiemian.com/lists/256.html) | [食品](https://www.jiemian.com/lists/845.html) | [新能源](https://www.jiemian.com/lists/857.html) | [家电](https://www.jiemian.com/lists/850.html) | [健康](https://www.jiemian.com/lists/854.html) | [酒业](https://www.jiemian.com/lists/676.html) |
| ---------------------------------------------- | ---------------------------------------------- | ------------------------------------------------ | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| 256                                            | 845                                            | 857                                              | 850                                            | 854                                            | 676                                            |

| [物流](https://www.jiemian.com/lists/841.html) | [零售](https://www.jiemian.com/lists/847.html) | [美妆](https://www.jiemian.com/lists/838.html) | [楼市](https://www.jiemian.com/city/main/181.html) | [家居](https://www.jiemian.com/lists/694.html) | [餐饮](https://www.jiemian.com/lists/848.html) |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | -------------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| 841                                            | 847                                            | 838                                            | city/main/181                                      | 694                                            | 848                                            |

| [日用](https://www.jiemian.com/lists/846.html) | [企服](https://www.jiemian.com/lists/852.html) | [珠宝](https://www.jiemian.com/lists/839.html) | [腕表](https://www.jiemian.com/lists/840.html) | [ 商学院](https://www.jiemian.com/lists/605.html) | [元宇宙](https://www.jiemian.com/lists/704.html) |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ------------------------------------------------- | ------------------------------------------------ |
| 846                                            | 852                                            | 839                                            | 840                                            | 605                                               | 704                                              |

| [电厂](https://www.jiemian.com/lists/872.html) | [农业](https://www.jiemian.com/lists/883.html) |
| ---------------------------------------------- | ---------------------------------------------- |
| 872                                            | 883                                            |

#### [财经](https://www.jiemian.com/lists/800.html)

| [金融](https://www.jiemian.com/lists/9.html) | [投资](https://www.jiemian.com/lists/86.html) | [证券](https://www.jiemian.com/lists/112.html) | [IPO](https://www.jiemian.com/lists/699.html) | [宏观](https://www.jiemian.com/lists/174.html) | [股市](https://www.jiemian.com/lists/418.html) |
| -------------------------------------------- | --------------------------------------------- | ---------------------------------------------- | --------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| 9                                            | 86                                            | 112                                            | 699                                           | 174                                            | 418                                            |

| [财富](https://www.jiemian.com/lists/410.html) | [有连云](https://www.jiemian.com/lists/889.html) |
| ---------------------------------------------- | ------------------------------------------------ |
| 410                                            | 889                                              |

#### [新闻](https://www.jiemian.com/lists/801.html)

| [天下](https://www.jiemian.com/lists/32.html) | [中国](https://www.jiemian.com/lists/71.html) | [ 评论](https://www.jiemian.com/lists/8.html) | [数据](https://www.jiemian.com/lists/154.html) | [职场](https://www.jiemian.com/lists/50.html) | [国是](https://www.jiemian.com/lists/422.html) |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | ---------------------------------------------- | --------------------------------------------- | ---------------------------------------------- |
| 32                                            | 71                                            | 8                                             | 154                                            | 50                                            | 422                                            |

| [体育](https://www.jiemian.com/lists/82.html) | [文娱](https://www.jiemian.com/lists/63.html) | [ 影像](https://www.jiemian.com/lists/225.html) | [营销](https://www.jiemian.com/lists/49.html) | [大 湾区](https://www.jiemian.com/lists/680.html) | [ESG](https://www.jiemian.com/lists/712.html) |
| --------------------------------------------- | --------------------------------------------- | ----------------------------------------------- | --------------------------------------------- | ------------------------------------------------- | --------------------------------------------- |
| 82                                            | 63                                            | 225                                             | 49                                            | 680                                               | 712                                           |

| [双碳](https://www.jiemian.com/lists/877.html) | [长三角](https://www.jiemian.com/lists/917.html) |
| ---------------------------------------------- | ------------------------------------------------ |
| 877                                            | 917                                              |

#### [文化生活](https://www.jiemian.com/lists/130.html)

| [文化](https://www.jiemian.com/lists/130.html) | [文旅](https://www.jiemian.com/lists/105.html) | [生活方式](https://www.jiemian.com/lists/135.html) | [美食美酒](https://www.jiemian.com/lists/865.html) | [艺术](https://www.jiemian.com/lists/643.html) | [游戏](https://www.jiemian.com/lists/118.html) |
| ---------------------------------------------- | ---------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| 130                                            | 105                                            | 135                                                | 865                                                | 643                                            | 118                                            |

| [正午](https://www.jiemian.com/lists/53.html) | [箭厂](https://www.jiemian.com/video/lists/195_1.html) |
| --------------------------------------------- | ------------------------------------------------------ |
| 53                                            | video/lists/195_1                                     |

#### [快报](https://www.jiemian.com/lists/4.html)

| [今日热点](https://www.jiemian.com/lists/1324kb.html) | [公司头条](https://www.jiemian.com/lists/1322kb.html) | [股市前沿](https://www.jiemian.com/lists/1327kb.html) | [监管通报](https://www.jiemian.com/lists/1330kb.html) | [财经速览](https://www.jiemian.com/lists/1326kb.html) | [时事追踪](https://www.jiemian.com/lists/1325kb.html) |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| 1324kb                                                | 1322kb                                                | 1327kb                                                | 1330kb                                                | 1326kb                                                | 1325kb                                                |

:::

### VIP <Site url="jiemian.com" size="sm" />

<Route namespace="jiemian" :data='{"path":"/pro/lists/12","parameters":{"id":"分类 id，见下表，可在对应分类页 URL 中找到"},"name":"VIP","example":"/jiemian/pro/lists/12","maintainers":["nczitzk"],"description":"| [投资早晚报](https://www.jiemian.com/pro/lists/12.html) | [宏观晚 6 点](https://www.jiemian.com/pro/lists/20.html) | [打新早报](https://www.jiemian.com/pro/lists/21.html) | [盘前机会前瞻](https://www.jiemian.com/pro/lists/13.html) | [公告快评](https://www.jiemian.com/pro/lists/14.html) | [盘中必读](https://www.jiemian.com/pro/lists/15.html) |\n| ------------------------------------------------------- | -------------------------------------------------------- | ----------------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |\n| 12                                                      | 20                                                       | 21                                                    | 13                                                        | 14                                                    | 15                                                    |\n\n| [金股挖掘](https://www.jiemian.com/pro/lists/16.html) | [调研早知道](https://www.jiemian.com/pro/lists/17.html) | [研报新知](https://www.jiemian.com/pro/lists/18.html) | [大势侦察](https://www.jiemian.com/pro/lists/1.html) | [市场风向标](https://www.jiemian.com/pro/lists/19.html) |\n| ----------------------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------- |\n| 16                                                    | 17                                                      | 18                                                    | 1                                                    | 19                                                      |\n","location":"vip.ts","heat":12,"topFeeds":[{"id":"140187769978723328","type":"feed","url":"rsshub://jiemian/pro/lists/12","title":"界面新闻-只服务于独立思考的人群-Jiemian.com","description":"界面新闻是中国具有影响力的原创财经新媒体，以财经、商业新闻为核心，布局近40个内容频道，旗下同时拥有正午故事、箭厂视频、歪楼等数个知名新媒体品牌。 - Powered by RSSHub","image":"https://res.jiemian.com/assets/pc/common/img/jiemian_logo.svg"}]}' :test='{"code":0}' />

| [投资早晚报](https://www.jiemian.com/pro/lists/12.html) | [宏观晚 6 点](https://www.jiemian.com/pro/lists/20.html) | [打新早报](https://www.jiemian.com/pro/lists/21.html) | [盘前机会前瞻](https://www.jiemian.com/pro/lists/13.html) | [公告快评](https://www.jiemian.com/pro/lists/14.html) | [盘中必读](https://www.jiemian.com/pro/lists/15.html) |
| ------------------------------------------------------- | -------------------------------------------------------- | ----------------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| 12                                                      | 20                                                       | 21                                                    | 13                                                        | 14                                                    | 15                                                    |

| [金股挖掘](https://www.jiemian.com/pro/lists/16.html) | [调研早知道](https://www.jiemian.com/pro/lists/17.html) | [研报新知](https://www.jiemian.com/pro/lists/18.html) | [大势侦察](https://www.jiemian.com/pro/lists/1.html) | [市场风向标](https://www.jiemian.com/pro/lists/19.html) |
| ----------------------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------- |
| 16                                                    | 17                                                      | 18                                                    | 1                                                    | 19                                                      |


### 界面号 <Site url="jiemian.com" size="sm" />

<Route namespace="jiemian" :data='{"path":"/account/main/1","parameters":{"id":"分类 id，见下表，可在对应分类页 URL 中找到"},"name":"界面号","example":"/jiemian/account/main/1","maintainers":["nczitzk"],"description":"| [财经号](https://www.jiemian.com/account/main/1.html) | [城市号](https://www.jiemian.com/account/main/2.html) | [媒体号](https://www.jiemian.com/account/main/3.html) |\n| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |\n| 1                                                     | 2                                                     | 3                                                     |\n","location":"account.ts","heat":3,"topFeeds":[{"id":"144074451011202048","type":"feed","url":"rsshub://jiemian/account/main/1","title":"界面新闻-只服务于独立思考的人群-Jiemian.com","description":"界面新闻是中国具有影响力的原创财经新媒体，以财经、商业新闻为核心，布局近40个内容频道，旗下同时拥有正午故事、箭厂视频、歪楼等数个知名新媒体品牌。 - Powered by RSSHub","image":"https://res.jiemian.com/assets/pc/common/img/jiemian_logo.svg"}]}' :test='{"code":0}' />

| [财经号](https://www.jiemian.com/account/main/1.html) | [城市号](https://www.jiemian.com/account/main/2.html) | [媒体号](https://www.jiemian.com/account/main/3.html) |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| 1                                                     | 2                                                     | 3                                                     |


### 视频 <Site url="jiemian.com" size="sm" />

<Route namespace="jiemian" :data='{"path":"/video/lists/258_1","parameters":{"id":"分类 id，见下表，可在对应分类页 URL 中找到"},"name":"视频","example":"/jiemian/video/lists/258_1","maintainers":["nczitzk"],"description":"| [界面 Vnews](https://www.jiemian.com/video/lists/258_1.html) | [直播](https://www.jiemian.com/videoLive/lists_1.html) | [箭厂](https://www.jiemian.com/video/lists/195_1.html) | [面谈](https://www.jiemian.com/video/lists/111_1.html) | [品牌创酷](https://www.jiemian.com/video/lists/226_1.html) | [番 茄社](https://www.jiemian.com/video/lists/567_1.html) |\n| ------------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ---------------------------------------------------------- | --------------------------------------------------------- |\n| 258_1                                                       | videoLive/lists_1                                     | 195_1                                                 | 111_1                                                 | 226_1                                                     | 567_1                                                    |\n\n| [商业微史记](https://www.jiemian.com/video/lists/882_1.html) |\n| ------------------------------------------------------------ |\n| 882_1                                                       |","location":"video.ts","heat":3,"topFeeds":[{"id":"140230776588498944","type":"feed","url":"rsshub://jiemian/video/lists/258_1","title":"界面新闻-只服务于独立思考的人群-Jiemian.com","description":"界面新闻是中国具有影响力的原创财经新媒体，以财经、商业新闻为核心，布局近40个内容频道，旗下同时拥有正午故事、箭厂视频、歪楼等数个知名新媒体品牌。 - Powered by RSSHub","image":"https://res.jiemian.com/assets/pc/common/img/jiemian_logo.svg"}]}' :test='{"code":0}' />

| [界面 Vnews](https://www.jiemian.com/video/lists/258_1.html) | [直播](https://www.jiemian.com/videoLive/lists_1.html) | [箭厂](https://www.jiemian.com/video/lists/195_1.html) | [面谈](https://www.jiemian.com/video/lists/111_1.html) | [品牌创酷](https://www.jiemian.com/video/lists/226_1.html) | [番 茄社](https://www.jiemian.com/video/lists/567_1.html) |
| ------------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ---------------------------------------------------------- | --------------------------------------------------------- |
| 258_1                                                       | videoLive/lists_1                                     | 195_1                                                 | 111_1                                                 | 226_1                                                     | 567_1                                                    |

| [商业微史记](https://www.jiemian.com/video/lists/882_1.html) |
| ------------------------------------------------------------ |
| 882_1                                                       |

### 专题 <Site url="jiemian.com" size="sm" />

<Route namespace="jiemian" :data='{"path":"/special/1192","parameters":{"id":"分类 id，见下表，可在对应分类页 URL 中找到"},"name":"专题","example":"/jiemian/special/1192","maintainers":["nczitzk"],"location":"special.ts","heat":2,"topFeeds":[{"id":"159222015361512458","type":"feed","url":"rsshub://jiemian/special/1192","title":"界面新闻-只服务于独立思考的人群-Jiemian.com","description":"界面新闻是中国具有影响力的原创财经新媒体，以财经、商业新闻为核心，布局近40个内容频道，旗下同时拥有正午故事、箭厂视频、歪楼等数个知名新媒体品牌。 - Powered by RSSHub","image":"https://res.jiemian.com/assets/pc/common/img/jiemian_logo.svg"}]}' :test='{"code":0}' />

## 百度 <Site url="www.baidu.com"/>

### 热搜榜单 <Site url="www.baidu.com" size="sm" />

<Route namespace="baidu" :data='{"path":"/top/:board?","categories":["other"],"example":"/baidu/top","parameters":{"board":"榜单，默认为 `realtime`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"热搜榜单","maintainers":["xyqfer"],"description":"| 热搜榜   | 小说榜 | 电影榜 | 电视剧榜 | 汽车榜 | 游戏榜 |\n| -------- | ------ | ------ | -------- | ------ | ------ |\n| realtime | novel  | movie  | teleplay | car    | game   |","location":"top.ts","heat":101,"topFeeds":[{"id":"55614129025417216","type":"feed","url":"rsshub://baidu/top","title":"热搜榜 - 百度热搜","description":"百度热搜以数亿用户海量的真实数据为基础，通过专业的数据挖掘方法，计算关键词的热搜指数，旨在建立权威、全面、热门、时效的各类关键词排行榜，引领热词阅读时代。 - Powered by RSSHub","image":null},{"id":"81584385152846848","type":"feed","url":"rsshub://baidu/top/realtime","title":"热搜榜 - 百度热搜","description":"百度热搜以数亿用户海量的真实数据为基础，通过专业的数据挖掘方法，计算关键词的热搜指数，旨在建立权威、全面、热门、时效的各类关键词排行榜，引领热词阅读时代。 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 热搜榜   | 小说榜 | 电影榜 | 电视剧榜 | 汽车榜 | 游戏榜 |
| -------- | ------ | ------ | -------- | ------ | ------ |
| realtime | novel  | movie  | teleplay | car    | game   |

### 搜索 <Site url="www.baidu.com" size="sm" />

<Route namespace="baidu" :data='{"path":"/search/:keyword","categories":["other"],"example":"/baidu/search/rss","parameters":{"keyword":"搜索关键词"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"搜索","maintainers":["CaoMeiYouRen"],"location":"search.ts","heat":7,"topFeeds":[{"id":"70226158864332800","type":"feed","url":"rsshub://baidu/search/%E5%BF%B5%E7%A9%BA%E5%A4%A7%E5%8F%94%E7%99%BE%E5%AE%B6%E5%8F%B7","title":"念空大叔百家号 - 百度搜索","description":"念空大叔百家号 - 百度搜索 - Powered by RSSHub","image":null},{"id":"177651896288583681","type":"feed","url":"rsshub://baidu/search/%E7%AC%A6%E5%8F%B7%E5%AD%A6","title":"符号学 - 百度搜索","description":"符号学 - 百度搜索 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 艾瑞咨询 <Site url="iresearch.com.cn"/>

### 研究报告 <Site url="www.iresearch.com.cn" size="sm" />

<Route namespace="iresearch" :data='{"path":"/report/:type?/:id?","name":"研究报告","url":"www.iresearch.com.cn","maintainers":["brilon","Fatpandac","nczitzk"],"example":"/iresearch/report","parameters":{"type":{"description":"分类，默认为 `1`，即最新报告，可在对应分类页 URL 中找到","options":[{"label":"最新报告","value":"1"},{"label":"热门报告","value":"2"},{"label":"周度市场观察","value":"3"},{"label":"研究图表","value":"4"}]},"id":{"description":"行业 ID，默认为全部，即全部行业，可在对应行业页 URL 中找到","options":[{"label":"全部","value":""},{"label":"家电行业","value":"1"},{"label":"服装行业","value":"2"},{"label":"美妆行业","value":"3"},{"label":"食品饮料行业","value":"4"},{"label":"酒行业","value":"5"},{"label":"媒体文娱","value":"59"},{"label":"广告营销","value":"89"},{"label":"游戏行业","value":"90"},{"label":"视频媒体","value":"91"},{"label":"消费电商","value":"69"},{"label":"电子商务","value":"86"},{"label":"消费者洞察","value":"87"},{"label":"旅游行业","value":"88"},{"label":"汽车行业","value":"80"},{"label":"教育行业","value":"63"},{"label":"企业服务","value":"60"},{"label":"网络服务","value":"84"},{"label":"应用服务","value":"85"},{"label":"AI大数据","value":"65"},{"label":"人工智能","value":"83"},{"label":"物流行业","value":"75"},{"label":"金融行业","value":"70"},{"label":"支付行业","value":"82"},{"label":"房产行业","value":"68"},{"label":"医疗健康","value":"62"},{"label":"先进制造","value":"61"},{"label":"能源环保","value":"77"},{"label":"区块链","value":"76"},{"label":"其他","value":"81"}]}},"description":":::tip\n订阅 [电子商务最新报告](https://www.iresearch.com.cn/report.shtml?type=1&classId=86)，其源网址为 `https://www.iresearch.com.cn/report.shtml?type=1&classId=86`，请参考该 URL 指定部分构成参数，此时路由为 [`/iresearch/report/最新报告/电子商务`](https://rsshub.app/iresearch/report/最新报告/电子商务) 或 [`/iresearch/report/1/86`](https://rsshub.app/iresearch/report/1/86)。\n:::\n\n#### 分类\n\n| [最新报告](https://www.iresearch.com.cn/report.shtml?type=1) | [研究图表](https://www.iresearch.com.cn/report.shtml?type=4) | [周度市场观察](https://www.iresearch.com.cn/report.shtml?type=3) | [热门报告](https://www.iresearch.com.cn/report.shtml?type=2) |\n| ------------------------------------------------------------ | ------------------------------------------------------------ | ---------------------------------------------------------------- | ------------------------------------------------------------ |\n| [1](https://rsshub.app/iresearch/report/1)                   | [4](https://rsshub.app/iresearch/report/4)                   | [3](https://rsshub.app/iresearch/report/3)                       | [2](https://rsshub.app/iresearch/report/2)                   |\n\n<details>\n  <summary>更多行业</summary>\n\n| 名称                                                                       | ID                                             |\n| -------------------------------------------------------------------------- | ---------------------------------------------- |\n| [家电行业](https://www.iresearch.com.cn/report.shtml?type=3&classId=1)     | [1](https://rsshub.app/iresearch/report/3/1)   |\n| [服装行业](https://www.iresearch.com.cn/report.shtml?type=3&classId=2)     | [2](https://rsshub.app/iresearch/report/3/2)   |\n| [美妆行业](https://www.iresearch.com.cn/report.shtml?type=3&classId=3)     | [3](https://rsshub.app/iresearch/report/3/3)   |\n| [食品饮料行业](https://www.iresearch.com.cn/report.shtml?type=3&classId=4) | [4](https://rsshub.app/iresearch/report/3/4)   |\n| [酒行业](https://www.iresearch.com.cn/report.shtml?type=3&classId=5)       | [5](https://rsshub.app/iresearch/report/3/5)   |\n| [媒体文娱](https://www.iresearch.com.cn/report.shtml?classId=59)           | [59](https://rsshub.app/iresearch/report/1/59) |\n| [广告营销](https://www.iresearch.com.cn/report.shtml?classId=89)           | [89](https://rsshub.app/iresearch/report/1/89) |\n| [游戏行业](https://www.iresearch.com.cn/report.shtml?classId=90)           | [90](https://rsshub.app/iresearch/report/1/90) |\n| [视频媒体](https://www.iresearch.com.cn/report.shtml?classId=91)           | [91](https://rsshub.app/iresearch/report/1/91) |\n| [消费电商](https://www.iresearch.com.cn/report.shtml?classId=69)           | [69](https://rsshub.app/iresearch/report/1/69) |\n| [电子商务](https://www.iresearch.com.cn/report.shtml?classId=86)           | [86](https://rsshub.app/iresearch/report/1/86) |\n| [消费者洞察](https://www.iresearch.com.cn/report.shtml?classId=87)         | [87](https://rsshub.app/iresearch/report/1/87) |\n| [旅游行业](https://www.iresearch.com.cn/report.shtml?classId=88)           | [88](https://rsshub.app/iresearch/report/1/88) |\n| [汽车行业](https://www.iresearch.com.cn/report.shtml?classId=80)           | [80](https://rsshub.app/iresearch/report/1/80) |\n| [教育行业](https://www.iresearch.com.cn/report.shtml?classId=63)           | [63](https://rsshub.app/iresearch/report/1/63) |\n| [企业服务](https://www.iresearch.com.cn/report.shtml?classId=60)           | [60](https://rsshub.app/iresearch/report/1/60) |\n| [网络服务](https://www.iresearch.com.cn/report.shtml?classId=84)           | [84](https://rsshub.app/iresearch/report/1/84) |\n| [应用服务](https://www.iresearch.com.cn/report.shtml?classId=85)           | [85](https://rsshub.app/iresearch/report/1/85) |\n| [AI 大数据](https://www.iresearch.com.cn/report.shtml?classId=65)          | [65](https://rsshub.app/iresearch/report/1/65) |\n| [人工智能](https://www.iresearch.com.cn/report.shtml?classId=83)           | [83](https://rsshub.app/iresearch/report/1/83) |\n| [物流行业](https://www.iresearch.com.cn/report.shtml?classId=75)           | [75](https://rsshub.app/iresearch/report/1/75) |\n| [金融行业](https://www.iresearch.com.cn/report.shtml?classId=70)           | [70](https://rsshub.app/iresearch/report/1/70) |\n| [支付行业](https://www.iresearch.com.cn/report.shtml?classId=82)           | [82](https://rsshub.app/iresearch/report/1/82) |\n| [房产行业](https://www.iresearch.com.cn/report.shtml?classId=68)           | [68](https://rsshub.app/iresearch/report/1/68) |\n| [医疗健康](https://www.iresearch.com.cn/report.shtml?classId=62)           | [62](https://rsshub.app/iresearch/report/1/62) |\n| [先进制造](https://www.iresearch.com.cn/report.shtml?classId=61)           | [61](https://rsshub.app/iresearch/report/1/61) |\n| [能源环保](https://www.iresearch.com.cn/report.shtml?classId=77)           | [77](https://rsshub.app/iresearch/report/1/77) |\n| [区块链](https://www.iresearch.com.cn/report.shtml?classId=76)             | [76](https://rsshub.app/iresearch/report/1/76) |\n| [其他](https://www.iresearch.com.cn/report.shtml?classId=81)               | [81](https://rsshub.app/iresearch/report/1/81) |\n\n</details>\n","categories":["other"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.iresearch.com.cn/report.shtml"]},{"title":"最新报告","source":["www.iresearch.com.cn/report.shtml"]},{"title":"研究图表","source":["www.iresearch.com.cn/report.shtml"]},{"title":"周度市场观察","source":["www.iresearch.com.cn/report.shtml"]},{"title":"热门报告","source":["www.iresearch.com.cn/report.shtml"]},{"title":"周度市场观察 - 家电行业","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/3/1"},{"title":"周度市场观察 - 服装行业","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/3/2"},{"title":"周度市场观察 - 美妆行业","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/3/3"},{"title":"周度市场观察 - 食品饮料行业","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/3/4"},{"title":"周度市场观察 - 酒行业","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/3/5"},{"title":"最新报告 - 媒体文娱","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/1/59"},{"title":"最新报告 - 广告营销","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/1/89"},{"title":"最新报告 - 游戏行业","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/1/90"},{"title":"最新报告 - 视频媒体","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/1/91"},{"title":"最新报告 - 消费电商","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/1/69"},{"title":"最新报告 - 电子商务","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/1/86"},{"title":"最新报告 - 消费者洞察","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/1/87"},{"title":"最新报告 - 旅游行业","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/1/88"},{"title":"最新报告 - 汽车行业","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/1/80"},{"title":"最新报告 - 教育行业","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/1/63"},{"title":"最新报告 - 企业服务","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/1/60"},{"title":"最新报告 - 网络服务","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/1/84"},{"title":"最新报告 - 应用服务","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/1/85"},{"title":"最新报告 - AI 大数据","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/1/65"},{"title":"最新报告 - 人工智能","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/1/83"},{"title":"最新报告 - 物流行业","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/1/75"},{"title":"最新报告 - 金融行业","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/1/70"},{"title":"最新报告 - 支付行业","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/1/82"},{"title":"最新报告 - 房产行业","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/1/68"},{"title":"最新报告 - 医疗健康","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/1/62"},{"title":"最新报告 - 先进制造","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/1/61"},{"title":"最新报告 - 能源环保","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/1/77"},{"title":"最新报告 - 区块链","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/1/76"},{"title":"最新报告 - 其他","source":["www.iresearch.com.cn/report.shtml"],"target":"/report/1/81"}],"view":0,"location":"report.ts","heat":99,"topFeeds":[{"id":"65643152571614208","type":"feed","url":"rsshub://iresearch/report","title":"艾瑞咨询 - 最新报告 - 全部","description":"艾瑞咨询 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

:::tip
订阅 [电子商务最新报告](https://www.iresearch.com.cn/report.shtml?type=1&classId=86)，其源网址为 `https://www.iresearch.com.cn/report.shtml?type=1&classId=86`，请参考该 URL 指定部分构成参数，此时路由为 [`/iresearch/report/最新报告/电子商务`](https://rsshub.app/iresearch/report/最新报告/电子商务) 或 [`/iresearch/report/1/86`](https://rsshub.app/iresearch/report/1/86)。
:::

#### 分类

| [最新报告](https://www.iresearch.com.cn/report.shtml?type=1) | [研究图表](https://www.iresearch.com.cn/report.shtml?type=4) | [周度市场观察](https://www.iresearch.com.cn/report.shtml?type=3) | [热门报告](https://www.iresearch.com.cn/report.shtml?type=2) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---------------------------------------------------------------- | ------------------------------------------------------------ |
| [1](https://rsshub.app/iresearch/report/1)                   | [4](https://rsshub.app/iresearch/report/4)                   | [3](https://rsshub.app/iresearch/report/3)                       | [2](https://rsshub.app/iresearch/report/2)                   |

<details>
  <summary>更多行业</summary>

| 名称                                                                       | ID                                             |
| -------------------------------------------------------------------------- | ---------------------------------------------- |
| [家电行业](https://www.iresearch.com.cn/report.shtml?type=3&classId=1)     | [1](https://rsshub.app/iresearch/report/3/1)   |
| [服装行业](https://www.iresearch.com.cn/report.shtml?type=3&classId=2)     | [2](https://rsshub.app/iresearch/report/3/2)   |
| [美妆行业](https://www.iresearch.com.cn/report.shtml?type=3&classId=3)     | [3](https://rsshub.app/iresearch/report/3/3)   |
| [食品饮料行业](https://www.iresearch.com.cn/report.shtml?type=3&classId=4) | [4](https://rsshub.app/iresearch/report/3/4)   |
| [酒行业](https://www.iresearch.com.cn/report.shtml?type=3&classId=5)       | [5](https://rsshub.app/iresearch/report/3/5)   |
| [媒体文娱](https://www.iresearch.com.cn/report.shtml?classId=59)           | [59](https://rsshub.app/iresearch/report/1/59) |
| [广告营销](https://www.iresearch.com.cn/report.shtml?classId=89)           | [89](https://rsshub.app/iresearch/report/1/89) |
| [游戏行业](https://www.iresearch.com.cn/report.shtml?classId=90)           | [90](https://rsshub.app/iresearch/report/1/90) |
| [视频媒体](https://www.iresearch.com.cn/report.shtml?classId=91)           | [91](https://rsshub.app/iresearch/report/1/91) |
| [消费电商](https://www.iresearch.com.cn/report.shtml?classId=69)           | [69](https://rsshub.app/iresearch/report/1/69) |
| [电子商务](https://www.iresearch.com.cn/report.shtml?classId=86)           | [86](https://rsshub.app/iresearch/report/1/86) |
| [消费者洞察](https://www.iresearch.com.cn/report.shtml?classId=87)         | [87](https://rsshub.app/iresearch/report/1/87) |
| [旅游行业](https://www.iresearch.com.cn/report.shtml?classId=88)           | [88](https://rsshub.app/iresearch/report/1/88) |
| [汽车行业](https://www.iresearch.com.cn/report.shtml?classId=80)           | [80](https://rsshub.app/iresearch/report/1/80) |
| [教育行业](https://www.iresearch.com.cn/report.shtml?classId=63)           | [63](https://rsshub.app/iresearch/report/1/63) |
| [企业服务](https://www.iresearch.com.cn/report.shtml?classId=60)           | [60](https://rsshub.app/iresearch/report/1/60) |
| [网络服务](https://www.iresearch.com.cn/report.shtml?classId=84)           | [84](https://rsshub.app/iresearch/report/1/84) |
| [应用服务](https://www.iresearch.com.cn/report.shtml?classId=85)           | [85](https://rsshub.app/iresearch/report/1/85) |
| [AI 大数据](https://www.iresearch.com.cn/report.shtml?classId=65)          | [65](https://rsshub.app/iresearch/report/1/65) |
| [人工智能](https://www.iresearch.com.cn/report.shtml?classId=83)           | [83](https://rsshub.app/iresearch/report/1/83) |
| [物流行业](https://www.iresearch.com.cn/report.shtml?classId=75)           | [75](https://rsshub.app/iresearch/report/1/75) |
| [金融行业](https://www.iresearch.com.cn/report.shtml?classId=70)           | [70](https://rsshub.app/iresearch/report/1/70) |
| [支付行业](https://www.iresearch.com.cn/report.shtml?classId=82)           | [82](https://rsshub.app/iresearch/report/1/82) |
| [房产行业](https://www.iresearch.com.cn/report.shtml?classId=68)           | [68](https://rsshub.app/iresearch/report/1/68) |
| [医疗健康](https://www.iresearch.com.cn/report.shtml?classId=62)           | [62](https://rsshub.app/iresearch/report/1/62) |
| [先进制造](https://www.iresearch.com.cn/report.shtml?classId=61)           | [61](https://rsshub.app/iresearch/report/1/61) |
| [能源环保](https://www.iresearch.com.cn/report.shtml?classId=77)           | [77](https://rsshub.app/iresearch/report/1/77) |
| [区块链](https://www.iresearch.com.cn/report.shtml?classId=76)             | [76](https://rsshub.app/iresearch/report/1/76) |
| [其他](https://www.iresearch.com.cn/report.shtml?classId=81)               | [81](https://rsshub.app/iresearch/report/1/81) |

</details>


### 周度市场观察 <Site url="www.iresearch.com.cn" size="sm" />

<Route namespace="iresearch" :data='{"path":"/weekly/:id?","name":"周度市场观察","url":"www.iresearch.com.cn","maintainers":["nczitzk"],"example":"/iresearch/weekly","parameters":{"id":{"description":"行业 ID，默认为全部，即全部行业，可在对应行业页 URL 中找到","options":[{"label":"全部","value":""},{"label":"家电行业","value":"1"},{"label":"服装行业","value":"2"},{"label":"美妆行业","value":"3"},{"label":"食品饮料行业","value":"4"},{"label":"酒行业","value":"5"}]}},"description":":::tip\n订阅 [家电行业](https://www.iresearch.com.cn/report.shtml?type=3&classId=1)，其源网址为 `https://www.iresearch.com.cn/report.shtml?type=3&classId=1`，请参考该 URL 指定部分构成参数，此时路由为 [`/iresearch/weekly/家电行业`](https://rsshub.app/iresearch/weekly/家电行业) 或 [`/iresearch/weekly/1`](https://rsshub.app/iresearch/weekly/1)。\n:::\n\n| 名称                                                                       | ID                                           |\n| -------------------------------------------------------------------------- | -------------------------------------------- |\n| [家电行业](https://www.iresearch.com.cn/report.shtml?type=3&classId=1)     | [1](https://rsshub.app/iresearch/report/3/1) |\n| [服装行业](https://www.iresearch.com.cn/report.shtml?type=3&classId=2)     | [2](https://rsshub.app/iresearch/report/3/2) |\n| [美妆行业](https://www.iresearch.com.cn/report.shtml?type=3&classId=3)     | [3](https://rsshub.app/iresearch/report/3/3) |\n| [食品饮料行业](https://www.iresearch.com.cn/report.shtml?type=3&classId=4) | [4](https://rsshub.app/iresearch/report/3/4) |\n| [酒行业](https://www.iresearch.com.cn/report.shtml?type=3&classId=5)       | [5](https://rsshub.app/iresearch/report/3/5) |\n","categories":["other"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.iresearch.com.cn/report.shtml"]},{"title":"家电行业","source":["www.iresearch.com.cn/report.shtml"],"target":"/weekly/1"},{"title":"服装行业","source":["www.iresearch.com.cn/report.shtml"],"target":"/weekly/2"},{"title":"美妆行业","source":["www.iresearch.com.cn/report.shtml"],"target":"/weekly/3"},{"title":"食品饮料行业","source":["www.iresearch.com.cn/report.shtml"],"target":"/weekly/4"},{"title":"酒行业","source":["www.iresearch.com.cn/report.shtml"],"target":"/weekly/5"}],"view":0,"location":"weekly.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 301 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

:::tip
订阅 [家电行业](https://www.iresearch.com.cn/report.shtml?type=3&classId=1)，其源网址为 `https://www.iresearch.com.cn/report.shtml?type=3&classId=1`，请参考该 URL 指定部分构成参数，此时路由为 [`/iresearch/weekly/家电行业`](https://rsshub.app/iresearch/weekly/家电行业) 或 [`/iresearch/weekly/1`](https://rsshub.app/iresearch/weekly/1)。
:::

| 名称                                                                       | ID                                           |
| -------------------------------------------------------------------------- | -------------------------------------------- |
| [家电行业](https://www.iresearch.com.cn/report.shtml?type=3&classId=1)     | [1](https://rsshub.app/iresearch/report/3/1) |
| [服装行业](https://www.iresearch.com.cn/report.shtml?type=3&classId=2)     | [2](https://rsshub.app/iresearch/report/3/2) |
| [美妆行业](https://www.iresearch.com.cn/report.shtml?type=3&classId=3)     | [3](https://rsshub.app/iresearch/report/3/3) |
| [食品饮料行业](https://www.iresearch.com.cn/report.shtml?type=3&classId=4) | [4](https://rsshub.app/iresearch/report/3/4) |
| [酒行业](https://www.iresearch.com.cn/report.shtml?type=3&classId=5)       | [5](https://rsshub.app/iresearch/report/3/5) |


## Radio France Internationale <Site url="rfi.fr"/>

### Generic News <Site url="rfi.fr" size="sm" />

<Route namespace="rfi" :data='{"path":"/:path{.+}?","radar":[{"source":["rfi.fr/*path"],"target":"/:path"}],"name":"Generic News","maintainers":["nczitzk"],"url":"rfi.fr","example":"/rfi","description":"::: tip\n-   To subscribe to [English News](https://www.rfi.fr/en/), which URL is `https://www.rfi.fr/en`, you can get the route as [`/rfi/en`](https://rsshub.app/rfi/en).\n-   To subscribe to [English Europe News](https://www.rfi.fr/en/europe/), which URL is `https://www.rfi.fr/en/europe`, you can get the route as [`/rfi/en/europe`](https://rsshub.app/rfi/en/europe).\n-   To subscribe to topic [Paris Olympics 2024](https://www.rfi.fr/en/tag/paris-olympics-2024/), which URL is `https://www.rfi.fr/en/tag/paris-olympics-2024`, you can get the route as [`/rfi/en/tag/paris-olympics-2024`](https://rsshub.app/rfi/en/tag/paris-olympics-2024).\n:::\n\n::: warning\nThis route does not support podcasts, please use the Offical RSS feed instead.\n:::\n","location":"news.ts","heat":73,"topFeeds":[{"id":"58701529235465216","type":"feed","url":"rsshub://rfi/cn","title":"法广 - 时事与新闻直播 - RFI - 法国国际广播电台","description":"同步、随时跟踪法广政治、文化、体育新闻，了解法国、中国与世界各地大事 - Powered by RSSHub","image":"https://s.rfi.fr/media/display/020b8dae-e6c1-11ee-a196-005056bfb2b6/w:1280/p:16x9/img-default-RFI.jpg"},{"id":"76670519253188608","type":"feed","url":"rsshub://rfi/fr","title":"RFI - Actualités, info, news en direct - Radio France Internationale","description":"Suivez toute l&#39;information politique, culturelle, sportive en direct et en continu sur RFI. Les dernières informations, news et actualités en France et à l&#39;international. - Powered by RSSHub","image":"https://s.rfi.fr/media/display/020b8dae-e6c1-11ee-a196-005056bfb2b6/w:1280/p:16x9/img-default-RFI.jpg"}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

::: tip
-   To subscribe to [English News](https://www.rfi.fr/en/), which URL is `https://www.rfi.fr/en`, you can get the route as [`/rfi/en`](https://rsshub.app/rfi/en).
-   To subscribe to [English Europe News](https://www.rfi.fr/en/europe/), which URL is `https://www.rfi.fr/en/europe`, you can get the route as [`/rfi/en/europe`](https://rsshub.app/rfi/en/europe).
-   To subscribe to topic [Paris Olympics 2024](https://www.rfi.fr/en/tag/paris-olympics-2024/), which URL is `https://www.rfi.fr/en/tag/paris-olympics-2024`, you can get the route as [`/rfi/en/tag/paris-olympics-2024`](https://rsshub.app/rfi/en/tag/paris-olympics-2024).
:::

::: warning
This route does not support podcasts, please use the Offical RSS feed instead.
:::


## 中国作家网 <Site url="chinawriter.com.cn"/>

### Unknown <Site url="chinawriter.com.cn" size="sm" />

<Route namespace="chinawriter" :data='{"path":"/:id{.+}?","name":"Unknown","maintainers":[],"location":"index.ts","heat":44,"topFeeds":[{"id":"114502925965629460","type":"feed","url":"rsshub://chinawriter/404085","title":"世界文坛 - 中国作家网","description":"分为视点、文学评论、作家印象、影像艺术、作品推介五个栏目。视点：与外国文学、中国文学走向世界相关的新闻、热点话题等。文学评论：外国文学作品评论 作家印象：外国文学作家、评论家、翻译家等的相关报道、访谈。作品推介：外国文学新书、新作推荐。影像艺术：由外国文学作品改编的舞台剧、影视作品相关的新闻、评论等，着重放与文学相关的内容，其他相关酌情。视点：与外国文学、中国文学走向世界相关的新闻、热点话题等。文学评论：外国文学作品评论。作家印象：外国文学作家、评论家、翻译家等的相关报道、访谈。作品推介：外国文学新书、新作推荐。 - Powered by RSSHub","image":"http://www.chinawriter.com.cn/img/MAIN/2018/04/118229/img/logo.jpg"},{"id":"114502925961435137","type":"feed","url":"rsshub://chinawriter/404015/416204/418925","title":"《人民文学》 - 新作品 - 中国作家网","description":"新作品栏目主要发表小说、诗歌、散文、纪实文学等不同类型的文学作品，同时开设原创作品平台，接受中国作家网注册会员的投稿。新作品下设文学内刊、作家群和鲁院学员作品以及报刊在线等特色板块，拥有曹文轩、周大新、乔叶、蒋胜男、孑与2等驻站作家，并定期推荐优秀原创作品和名家新作。 - Powered by RSSHub","image":"http://www.chinawriter.com.cn/img/MAIN/2018/04/118229/img/logo.jpg"}]}' :test='undefined' />

## 星島日報 <Site url="std.stheadline.com"/>

### 即時 <Site url="std.stheadline.com" size="sm" />

<Route namespace="stheadline" :data='{"path":"/std/:category{.+}?","name":"即時","maintainers":["TonyRL"],"example":"/stheadline/std/realtimenews","parameters":{"category":"分類路徑，URL 中 `www.stheadline.com/` 後至中文分類名前部分，預設為 `realtimenews`"},"radar":[{"source":["www.stheadline.com/theme/:category/chineseCategory","www.stheadline.com/:category/:chineseCategory"],"target":"/std/:category"}],"location":"std/realtime.ts","heat":42,"topFeeds":[{"id":"61348035348284416","type":"feed","url":"rsshub://stheadline/std/realtime/%E5%8D%B3%E6%99%82","title":"即時 | 星島新聞、專題報道 | 星島日報","description":"全方位多角度的香港新聞、即時新聞、城中熱話、網上熱話、專題報道、中國及國際新聞。 - Powered by RSSHub","image":"https://std.stheadline.com/dist/images/favicon/icon-512.png"},{"id":"151673363572299776","type":"feed","url":"rsshub://stheadline/std/realtimenews","title":"即時｜即時更新社會時事｜星島頭條","description":"報導第一手要聞資訊，了解最新新聞動向，全程緊貼社會議題。 - Powered by RSSHub","image":"https://www.sthlstatic.com/sthl/assets/favicon/android-icon-192x192.png"}]}' :test='{"code":0}' />

## 9To5 <Site url="9to5toys.com"/>

### Unknown <Site url="9to5toys.com" size="sm" />

<Route namespace="9to5" :data='{"path":"/:subsite/:tag?","name":"Unknown","maintainers":[],"location":"subsite.ts","heat":36,"topFeeds":[{"id":"63183844748751872","type":"feed","url":"rsshub://9to5/mac","title":"9To5Mac","description":"Apple News & Mac Rumors Breaking All Day - Powered by RSSHub","image":null},{"id":"62307152241755136","type":"feed","url":"rsshub://9to5/mac/aapl","title":"aapl | 9To5Mac","description":"Apple News & Mac Rumors Breaking All Day - Powered by RSSHub","image":null}]}' :test='undefined' />

## Asian to lick <Site url="asiantolick.com"/>

### Unknown <Site url="asiantolick.com/" size="sm" />

<Route namespace="asiantolick" :data='{"path":"/:category{.+}?","radar":[{"source":["asiantolick.com/"],"target":""}],"name":"Unknown","maintainers":[],"url":"asiantolick.com/","features":{"nsfw":true},"location":"index.ts","heat":36,"topFeeds":[{"id":"58331969602726912","type":"feed","url":"rsshub://asiantolick","title":"Asian To Lick","description":"Asian sexy cute images and cosplay pics for free, gallery photos, Best quality images, fast and free albuns download! - Powered by RSSHub","image":"https://asiantolick.com/src/favicon/ms-icon-144x144.png"},{"id":"68128193038476288","type":"feed","url":"rsshub://asiantolick/:category%7B.+%7D","title":"Asian To Lick","description":"Asian sexy cute images and cosplay pics for free, gallery photos, Best quality images, fast and free albuns download! - Powered by RSSHub","image":"https://asiantolick.com/src/favicon/ms-icon-144x144.png"}]}' :test='undefined' />

## 明報 <Site url="mingpao.com"/>

### 新聞 <Site url="mingpao.com" size="sm" />

<Route namespace="mingpao" :data='{"path":"/:type?/:category?","name":"新聞","example":"/mingpao/ins/all","parameters":{"type":{"description":"新聞類型","default":"ins","options":[{"value":"ins","label":"即時新聞"},{"value":"pns","label":"每日明報"}]},"category":"頻道，見下表"},"radar":[{"title":"即時新聞","source":["news.mingpao.com/ins/:categoryName/section/:date/:category"],"target":"/mingpao/ins/:category"},{"title":"每日明報","source":["news.mingpao.com/pns/:categoryName/section/:date/:category"],"target":"/mingpao/pns/:category"}],"maintainers":["TonyRL"],"description":"| category | 即時新聞頻道 |\n| -------- | ------------ |\n| all      | 總目錄       |\n| s00001   | 港聞         |\n| s00002   | 經濟         |\n| s00003   | 地產         |\n| s00004   | 兩岸         |\n| s00005   | 國際         |\n| s00006   | 體育         |\n| s00007   | 娛樂         |\n| s00022   | 文摘         |\n| s00024   | 熱點         |\n\n| category | 每日明報頻道 |\n| -------- | ------------ |\n| s00001   | 要聞         |\n| s00002   | 港聞         |\n| s00003   | 社評         |\n| s00004   | 經濟         |\n| s00005   | 副刊         |\n| s00011   | 教育         |\n| s00012   | 觀點         |\n| s00013   | 中國         |\n| s00014   | 國際         |\n| s00015   | 體育         |\n| s00016   | 娛樂         |\n| s00017   | English      |\n| s00018   | 作家專欄     |","location":"index.ts","heat":36,"topFeeds":[{"id":"67446046265380864","type":"feed","url":"rsshub://mingpao/ins/all","title":"明報新聞網-即時新聞 RSS 總目錄","description":"明報新聞網-即時新聞 RSS - Powered by RSSHub","image":"https://news.mingpao.com/image/mingpaonews_logo2.png"},{"id":"79131389613658112","type":"feed","url":"rsshub://mingpao/pns","title":"明報新聞網-每日明報 RSS 要聞","description":"明報新聞網-每日明報 RSS - Powered by RSSHub","image":"https://news.mingpao.com/image/mingpaonews_logo2.png"}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| category | 即時新聞頻道 |
| -------- | ------------ |
| all      | 總目錄       |
| s00001   | 港聞         |
| s00002   | 經濟         |
| s00003   | 地產         |
| s00004   | 兩岸         |
| s00005   | 國際         |
| s00006   | 體育         |
| s00007   | 娛樂         |
| s00022   | 文摘         |
| s00024   | 熱點         |

| category | 每日明報頻道 |
| -------- | ------------ |
| s00001   | 要聞         |
| s00002   | 港聞         |
| s00003   | 社評         |
| s00004   | 經濟         |
| s00005   | 副刊         |
| s00011   | 教育         |
| s00012   | 觀點         |
| s00013   | 中國         |
| s00014   | 國際         |
| s00015   | 體育         |
| s00016   | 娛樂         |
| s00017   | English      |
| s00018   | 作家專欄     |

## Google <Site url="www.google.com"/>

### Alerts <Site url="www.google.com" size="sm" />

<Route namespace="google" :data='{"path":"/alerts/:keyword","categories":["other"],"example":"/google/alerts/RSSHub","parameters":{"keyword":"Keyword"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Alerts","maintainers":["TonyRL"],"location":"alerts.ts","heat":27,"topFeeds":[{"id":"153319458878542848","type":"feed","url":"rsshub://google/alerts/%E4%B8%AD%E5%9B%BD%E7%BB%8F%E8%90%A5%E6%8A%A5","title":"Google Alerts - 中国经营报","description":"Google Alerts - 中国经营报 - Powered by RSSHub","image":null},{"id":"153319230023687168","type":"feed","url":"rsshub://google/alerts/%E4%B8%AD%E5%9B%BD%E7%A4%BE%E4%BC%9A%E7%A7%91%E5%AD%A6%E9%99%A2%E5%B7%A5%E4%B8%9A%E7%BB%8F%E6%B5%8E%E7%A0%94%E7%A9%B6%E6%89%80","title":"Google Alerts - 中国社会科学院工业经济研究所","description":"Google Alerts - 中国社会科学院工业经济研究所 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### Search <Site url="www.google.com" size="sm" />

<Route namespace="google" :data='{"path":"/search/:keyword/:language?","categories":["other"],"example":"/google/search/rss/zh-CN,zh","parameters":{"keyword":"Keyword","language":"Accept-Language. Example: `zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Search","maintainers":["CaoMeiYouRen"],"location":"search.ts","heat":7,"topFeeds":[{"id":"68685709659153408","type":"feed","url":"rsshub://google/search/%E8%A2%AB%E6%9F%A5+site:thepaper.cn","title":"被查+site:thepaper.cn - Google Search","description":"被查+site:thepaper.cn - Google Search - Powered by RSSHub","image":null},{"id":"179589988151064576","type":"feed","url":"rsshub://google/search/AI%E4%BA%A7%E5%93%81%E7%BB%8F%E7%90%86","title":"AI产品经理 - Google Search","description":"AI产品经理 - Google Search - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 爱发电 <Site url="afdian.net"/>

### 用户动态 <Site url="afdian.net" size="sm" />

<Route namespace="afdian" :data='{"path":"/dynamic/:uid?","categories":["other"],"example":"/afdian/dynamic/@afdian","parameters":{"uid":"用户id，用户动态页面url里可找到"},"name":"用户动态","maintainers":["sanmmm"],"location":"dynamic.ts","heat":30,"topFeeds":[{"id":"81691288855821318","type":"feed","url":"rsshub://afdian/dynamic/@AManforAllSeasons","title":"反派影评的爱发电动态","description":"反派影评的爱发电动态 - Powered by RSSHub","image":"https://pic1.afdiancdn.com/user/25f894145a9011ed88fc52540025c377/avatar/9b94a820a85963e5ae78aa53415b075a_w1400_h1400_s291.jpg"},{"id":"112488963475434496","type":"feed","url":"rsshub://afdian/dynamic/q9adg","title":"q9adg的爱发电动态","description":"q9adg的爱发电动态 - Powered by RSSHub","image":"https://pic1.afdiancdn.com/user/3f49234e3e8f11eb8f6152540025c377/avatar/b437cc29dc0c0514b840d5aa490328e6_w1125_h2436_s586.jpeg"}]}' :test='{"code":0}' />

### 发现用户 <Site url="afdian.net" size="sm" />

<Route namespace="afdian" :data='{"path":"/explore/:type/:category?","categories":["other"],"example":"/afdian/explore/hot/所有","parameters":{"type":"分类","category":"目录类型，默认为 `所有`"},"name":"发现用户","maintainers":["sanmmm"],"description":"分类\n\n| 推荐 | 最热 |\n| ---- | ---- |\n| rec  | hot  |\n\n  目录类型\n\n| 所有 | 绘画 | 视频 | 写作 | 游戏 | 音乐 | 播客 | 摄影 | 技术 | Vtuber | 舞蹈 | 体育 | 旅游 | 美食 | 时尚 | 数码 | 动画 | 其他 |\n| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ------ | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |\n| 所有 | 绘画 | 视频 | 写作 | 游戏 | 音乐 | 播客 | 摄影 | 技术 | Vtuber | 舞蹈 | 体育 | 旅游 | 美食 | 时尚 | 数码 | 动画 | 其他 |","location":"explore.ts","heat":2,"topFeeds":[{"id":"84446718200707072","type":"feed","url":"rsshub://afdian/explore/hot/%E6%89%80%E6%9C%89","title":"爱发电-创作者 (按 所有/人气)","description":"爱发电-发现创作者 (按 所有/人气) - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

分类

| 推荐 | 最热 |
| ---- | ---- |
| rec  | hot  |

  目录类型

| 所有 | 绘画 | 视频 | 写作 | 游戏 | 音乐 | 播客 | 摄影 | 技术 | Vtuber | 舞蹈 | 体育 | 旅游 | 美食 | 时尚 | 数码 | 动画 | 其他 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ------ | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 所有 | 绘画 | 视频 | 写作 | 游戏 | 音乐 | 播客 | 摄影 | 技术 | Vtuber | 舞蹈 | 体育 | 旅游 | 美食 | 时尚 | 数码 | 动画 | 其他 |

## ClickMe <Site url="clickme.net"/>

### 文章 <Site url="clickme.net" size="sm" />

<Route namespace="clickme" :data='{"path":"/:site/:grouping/:name","categories":["other"],"example":"/clickme/default/category/beauty","parameters":{"site":"站点，`default`为普通站，`r18`为成人站，其它值默认为普通站","grouping":"分组方式，`category`为分类，`tag`为标签，其他值默认为分类","name":"分类名或标签名，分类名为英文，可以在分类 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"文章","maintainers":["hoilc"],"location":"index.ts","heat":30,"topFeeds":[{"id":"154786575534138368","type":"feed","url":"rsshub://clickme/r18/category/av","title":"ClickMe R18 - 女優","description":"ClickMe R18 - 女優 - Powered by RSSHub","image":null},{"id":"156717605498762240","type":"feed","url":"rsshub://clickme/r18/category/new","title":"Importing","description":null,"image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 中国驻外使领馆 <Site url="ca.china-embassy.org"/>

支持国家列表

加拿大 `CA`

-   大使馆: `/embassy/ca`

-   领事馆城市列表:

| 城市     | 路由                   |
| -------- | ---------------------- |
| 蒙特利尔 | `/embassy/ca/montreal` |

* * *

德国 `DE`

-   大使馆: `/embassy/de`

-   领事馆城市列表:

| 城市   | 路由                 |
| ------ | -------------------- |
| 慕尼黑 | `/embassy/de/munich` |

* * *

法国 `FR`

-   大使馆: `/embassy/fr`

-   领事馆城市列表:

| 城市       | 路由                     |
| ---------- | ------------------------ |
| 马赛       | `/embassy/fr/marseille`  |
| 斯特拉斯堡 | `/embassy/fr/strasbourg` |
| 里昂       | `/embassy/fr/lyon`       |

* * *

日本 `JP`

-   大使馆: `/embassy/jp`

-   领事馆城市列表:

| 城市   | 路由                   |
| ------ | ---------------------- |
| 长崎   | `/embassy/jp/nagasaki` |
| 大阪   | `/embassy/jp/osaka`    |
| 福冈   | `/embassy/jp/fukuoka`  |
| 名古屋 | `/embassy/jp/nagoya`   |
| 札幌   | `/embassy/jp/sapporo`  |
| 新潟   | `/embassy/jp/niigata`  |

* * *

韩国 `KR`

-   大使馆: `/embassy/kr`

-   领事馆城市列表:

| 城市 | 路由                  |
| ---- | --------------------- |
| 釜山 | `/embassy/kr/busan`   |
| 济州 | `/embassy/kr/jeju`    |
| 光州 | `/embassy/kr/gwangju` |

* * *

马来西亚 `MY`

-   大使馆: `/embassy/my`

* * *

新加坡 `SG`

-   大使馆: `/embassy/sg`

* * *

美国 `US`

-   大使馆: `/embassy/us`

-   领事馆城市列表:

| 城市   | 路由                       |
| ------ | -------------------------- |
| 纽约   | `/embassy/us/newyork`      |
| 芝加哥 | `/embassy/us/chicago`      |
| 旧金山 | `/embassy/us/sanfrancisco` |

* * *

英国 `UK`

-   大使馆: `/embassy/uk`

-   领事馆城市列表:

| 城市       | 路由                     |
| ---------- | ------------------------ |
| 爱丁堡     | `/embassy/uk/edinburgh`  |
| 贝尔法斯特 | `/embassy/uk/belfast`    |
| 曼彻斯特   | `/embassy/uk/manchester` |

### Unknown <Site url="ca.china-embassy.org" size="sm" />

<Route namespace="embassy" :data='{"path":"/:country/:city?","name":"Unknown","maintainers":["HenryQW"],"location":"index.ts","heat":29,"topFeeds":[{"id":"103274970550038533","type":"feed","url":"rsshub://embassy/us","title":"中国驻美国大使馆 -- 重要通知","description":"中国驻美国大使馆 -- 重要通知 - Powered by RSSHub","image":null},{"id":"103274970550038532","type":"feed","url":"rsshub://embassy/sg","title":"中国驻新加坡大使馆 -- 重要通知","description":"中国驻新加坡大使馆 -- 重要通知 - Powered by RSSHub","image":null}]}' :test='undefined' />

## Apple <Site url="apple.com"/>

### Exchange and Repair Extension Programs <Site url="apple.com" size="sm" />

<Route namespace="apple" :data='{"path":"/exchange_repair/:country?","categories":["other"],"example":"/apple/exchange_repair","parameters":{"country":"country code in apple.com URL (exception: for `United States` please use `us`), default to China `cn`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["support.apple.com/:country/service-programs"],"target":"/exchange_repair/:country"}],"name":"Exchange and Repair Extension Programs","maintainers":["metowolf","HenryQW","kt286"],"location":"exchange-repair.ts","heat":28,"topFeeds":[{"id":"55178476300040232","type":"feed","url":"rsshub://apple/exchange_repair/zh-cn","title":"Apple - Apple 服务计划","description":"Apple - Apple 服务计划 - Powered by RSSHub","image":null},{"id":"63183844748751873","type":"feed","url":"rsshub://apple/exchange_repair","title":"Apple - Apple Service Programs","description":"Apple - Apple Service Programs - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 330222061963 to be less than 311040000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:36:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 卡卡洛普 <Site url="news.gamme.com.tw"/>

### Unknown <Site url="news.gamme.com.tw" size="sm" />

<Route namespace="gamme" :data='{"path":"/:domain/:category?","name":"Unknown","maintainers":[],"location":"category.ts","heat":25,"topFeeds":[{"id":"73007806617184256","type":"feed","url":"rsshub://gamme/news/all","title":"宅宅新聞 by 卡卡洛普 » 最新","description":"新奇／潮流／正妹／奇事 通通在這裡～ - Powered by RSSHub","image":"https://news.gamme.com.tw/blogico.ico"},{"id":"87402345385114631","type":"feed","url":"rsshub://gamme/news","title":"宅宅新聞 by 卡卡洛普 » 最新","description":"新奇／潮流／正妹／奇事 通通在這裡～ - Powered by RSSHub","image":"https://news.gamme.com.tw/blogico.ico"}]}' :test='undefined' />

### Unknown <Site url="news.gamme.com.tw" size="sm" />

<Route namespace="gamme" :data='{"path":"/:domain/tag/:tag","name":"Unknown","maintainers":[],"location":"tag.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## Sub HD <Site url="subhd.tv"/>

### Unknown <Site url="subhd.tv" size="sm" />

<Route namespace="subhd" :data='{"path":"/:type?/:category?","name":"Unknown","maintainers":[],"location":"index.ts","heat":18,"topFeeds":[{"id":"70777567210160142","type":"feed","url":"rsshub://subhd/sub/new","title":"最新字幕 分享交流下载字幕平台 - SubHD","description":"最新字幕 分享交流下载字幕平台 - SubHD - Powered by RSSHub","image":null}]}' :test='undefined' />

## 汽油价格网 <Site url="qiyoujiage.com"/>

### Unknown <Site url="qiyoujiage.com" size="sm" />

<Route namespace="qiyoujiage" :data='{"path":"/:path{.+}","name":"Unknown","maintainers":[],"location":"price.ts","heat":15,"topFeeds":[{"id":"74118757831855104","type":"feed","url":"rsshub://qiyoujiage/guangdong","title":"广东油价_广东90_92_95汽油价格_广东今日油价查询_汽油价格网","description":"提供最新广东汽油价格,广东92号汽油价格,广东90号汽油价格,广东95号汽油价格,广东0号柴油价格等今日最新油价查询 - Powered by RSSHub","image":null},{"id":"162742331017901056","type":"feed","url":"rsshub://qiyoujiage/shanghai","title":"上海油价_上海90_92_95汽油价格_上海今日油价查询_汽油价格网","description":"提供最新上海汽油价格,上海92号汽油价格,上海90号汽油价格,上海95号汽油价格,上海0号柴油价格等今日最新油价查询 - Powered by RSSHub","image":null}]}' :test='undefined' />

## U9A9 <Site url="u9a9.com"/>

### Search <Site url="u9a9.com/" size="sm" />

<Route namespace="u9a9" :data='{"path":["/:preview?","/search/:keyword/:preview?"],"example":"/u9a9/search/新片速递","radar":[{"source":["u9a9.com/"],"target":""}],"name":"Search","maintainers":["TonyRL"],"url":"u9a9.com/","location":"index.ts","heat":10,"topFeeds":[{"id":"75777045788956696","type":"feed","url":"rsshub://u9a9/1","title":"U9A9","description":"U9A9 - Powered by RSSHub","image":null},{"id":"69603631408900096","type":"feed","url":"rsshub://u9a9","title":"U9A9","description":"U9A9 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 中国银行 <Site url="boc.cn"/>

### 外汇牌价 <Site url="boc.cn/sourcedb/whpj" size="sm" />

<Route namespace="boc" :data='{"path":"/whpj/:format?","categories":["other"],"example":"/boc/whpj/zs?filter_title=%E8%8B%B1%E9%95%91","parameters":{"format":"输出的标题格式，默认为标题 + 所有价格。短格式仅包含货币名称。"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["boc.cn/sourcedb/whpj","boc.cn/"],"target":"/whpj"}],"name":"外汇牌价","maintainers":["LogicJake","HenryQW"],"url":"boc.cn/sourcedb/whpj","description":"| 短格式 | 中行折算价 | 现汇买卖 | 现钞买卖 | 现汇买入 | 现汇卖出 | 现钞买入 | 现钞卖出 |\n| ------ | ---------- | -------- | -------- | -------- | -------- | -------- | -------- |\n| short  | zs         | xh       | xc       | xhmr     | xhmc     | xcmr     | xcmc     |","location":"whpj.ts","heat":14,"topFeeds":[{"id":"56690436420659200","type":"feed","url":"rsshub://boc/whpj/zs","title":"中国银行外汇牌价","description":"中国银行外汇牌价 - Powered by RSSHub","image":null},{"id":"75015471600032768","type":"feed","url":"rsshub://boc/whpj/xh","title":"中国银行外汇牌价","description":"中国银行外汇牌价 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 短格式 | 中行折算价 | 现汇买卖 | 现钞买卖 | 现汇买入 | 现汇卖出 | 现钞买入 | 现钞卖出 |
| ------ | ---------- | -------- | -------- | -------- | -------- | -------- | -------- |
| short  | zs         | xh       | xc       | xhmr     | xhmc     | xcmr     | xcmc     |

## KPMG <Site url="kpmg.com"/>

### Insights <Site url="kpmg.com/xx/en/home/insights.html" size="sm" />

<Route namespace="kpmg" :data='{"path":"/insights/:lang?","example":"/kpmg/insights","parameters":{"lang":"Language, either `en` or `zh`"},"radar":[{"source":["kpmg.com/xx/en/home/insights.html"],"target":"/insights/en"},{"source":["kpmg.com/cn/zh/home/insights.html"],"target":"/insights/zh"}],"name":"Insights","maintainers":["LogicJake"],"url":"kpmg.com/xx/en/home/insights.html","zh":{"name":"洞察"},"location":"insights.ts","heat":14,"topFeeds":[{"id":"67011938801010691","type":"feed","url":"rsshub://kpmg/insights","title":"KPMG Insights","description":"KPMG Insights - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected -14285317886 to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 空气质量 <Site url="aqicn.org"/>

### 实时 AQI <Site url="aqicn.org" size="sm" />

<Route namespace="aqicn" :data='{"path":"/:city/:pollution?","categories":["other"],"example":"/aqicn/beijing/pm25","parameters":{"city":"城市拼音或地区 ID，详见[aqicn.org](http://aqicn.org/city/)","pollution":"可选择显示更详细的空气污染成分"},"radar":[{"source":["aqicn.org"]}],"name":"实时 AQI","maintainers":["ladeng07"],"url":"aqicn.org","descriptions":"\n|   参数   | 污染成分 |\n| -------- | -------- |\n|   pm25   |  PM2.5   |\n|   pm10   |  PM10    |\n|   o3     |  O3      |\n|   no2    |  NO2     |\n|   so2    |  SO2     |\n|   co     |  CO      |\n\n举例: [https://rsshub.app/aqicn/beijing/pm25,pm10](https://rsshub.app/aqicn/beijing/pm25,pm10)\n\n1. 显示单个污染成分，例如「pm25」, [https://rsshub.app/aqicn/beijing/pm25](https://rsshub.app/aqicn/beijing/pm25)\n2. 逗号分隔显示多个污染成分，例如「pm25,pm10」，[https://rsshub.app/aqicn/beijing/pm25,pm10](https://rsshub.app/aqicn/beijing/pm25,pm10)\n3. 城市子站 ID 获取方法：右键显示网页源代码，搜索 \"idx\" （带双冒号），后面的 ID 就是子站的 ID，如你给的链接 ID 是 4258，RSS 地址就是 [https://rsshub.app/aqicn/4258](https://rsshub.app/aqicn/4258)\n","location":"aqi.ts","heat":13,"topFeeds":[{"id":"65930115678939136","type":"feed","url":"rsshub://aqicn/shanghai/pm25,pm10","title":"上海AQI","description":"上海AQI-aqicn.org - Powered by RSSHub","image":null},{"id":"119282037376184320","type":"feed","url":"rsshub://aqicn/beijing/pm25","title":"北京AQI","description":"北京AQI-aqicn.org - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## Discuz <Site url="https://www.discuz.vip/"/>

### Unknown <Site url="https://www.discuz.vip/" size="sm" />

<Route namespace="discuz" :data='{"path":["/:ver{[7x]}/:cid{[0-9]{2}}/:link{.+}","/:ver{[7x]}/:link{.+}","/:link{.+}"],"name":"Unknown","maintainers":[],"location":"discuz.ts","heat":10,"topFeeds":[{"id":"155439374662664192","type":"feed","url":"rsshub://discuz/x/https%3A%2F%2Fwww.52pojie.cn%2Fforum-16-1.html","title":"『精品软件区』 - 吾爱破解 - 52pojie.cn","description":"精品软件推荐，软件交流天地，汇集众多精彩评论，热心会员每日更新。找你所需要的，给你我分享的！这里不但有PC软件，安卓、iPhone等手机软件也统统包含。 - Powered by RSSHub","image":null}]}' :test='undefined' />

## 国家药品监督管理局医疗器械技术审评中心 <Site url="www.cmde.org.cn"/>

### Unknown <Site url="www.cmde.org.cn" size="sm" />

<Route namespace="cmde" :data='{"path":"/:cate{.+}?","name":"Unknown","maintainers":[],"location":"index.ts","heat":12,"topFeeds":[{"id":"71471683425747968","type":"feed","url":"rsshub://cmde/xwdt/zxyw","title":"国家药品监督管理局医疗器械技术审评中心----最新要闻","description":"国家药品监督管理局医疗器械技术审评中心最新要闻相关信息 - Powered by RSSHub","image":null}]}' :test='undefined' />

## 理想生活实验室 <Site url="toodaylab.com"/>

### Unknown <Site url="toodaylab.com" size="sm" />

<Route namespace="toodaylab" :data='{"path":"/:params{.+}?","name":"Unknown","maintainers":[],"location":"index.ts","heat":11,"topFeeds":[{"id":"69195662895897603","type":"feed","url":"rsshub://toodaylab/hot","title":"最热 | 理想生活实验室","description":"理想生活实验室是一家关注创意设计与生活消费的媒体。我们致力于：以国际的视野去关注品质生活发展的驱动力；把品牌、设计师与普通人群真正联结起来。 - Powered by RSSHub","image":"//static.toodaylab.com/static/images/logo-16th.gif"},{"id":"63474398493291530","type":"feed","url":"rsshub://toodaylab/posts","title":"滚动 | 理想生活实验室","description":"理想生活实验室是一家关注创意设计与生活消费的媒体。我们致力于：以国际的视野去关注品质生活发展的驱动力；把品牌、设计师与普通人群真正联结起来。 - Powered by RSSHub","image":"//static.toodaylab.com/static/images/logo-16th.gif"}]}' :test='undefined' />

## 裏垢女子まとめ <Site url="uraaka-joshi.com"/>

### User <Site url="uraaka-joshi.com/" size="sm" />

<Route namespace="uraaka-joshi" :data='{"path":"/:id","categories":["other"],"example":"/uraaka-joshi/_rrwq","parameters":{"id":"User ID"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false,"nsfw":true},"radar":[{"source":["uraaka-joshi.com/:id"]}],"name":"User","maintainers":["SettingDust","Halcao"],"url":"uraaka-joshi.com/","location":"uraaka-joshi-user.ts","heat":11,"topFeeds":[{"id":"75447921802487808","type":"feed","url":"rsshub://uraaka-joshi/na_na_m1218","title":"奔放なナナさん (@na_na_m1218) / 裏垢女子まとめ","description":"セルフグラビアの人。https://t.co/uaezeN1CR4 - Powered by RSSHub","image":null},{"id":"72930351635651584","type":"feed","url":"rsshub://uraaka-joshi/_rrwq","title":"あくめろさん (@_rrwq) / 裏垢女子まとめ","description":"🦭飢えてる上に肥えてるね(FEVER) - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Unknown <Site url="uraaka-joshi.com/" size="sm" />

<Route namespace="uraaka-joshi" :data='{"path":"/","radar":[{"source":["uraaka-joshi.com/"],"target":""}],"name":"Unknown","maintainers":["SettingDust","Halcao"],"url":"uraaka-joshi.com/","features":{"nsfw":true},"location":"uraaka-joshi.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## Wellcee 唯心所寓 <Site url="wellcee.com"/>

### 租房信息 <Site url="www.wellcee.com" size="sm" />

<Route namespace="wellcee" :data='{"path":"/rent/:city/:district?","example":"/wellcee/rent/北京","parameters":{"city":"城市","district":"地区"},"name":"租房信息","maintainers":["TonyRL"],"url":"www.wellcee.com","description":"支持的城市可以通过 [/wellcee/support-city](https://rsshub.app/wellcee/support-city) 获取","location":"rent.ts","heat":7,"topFeeds":[{"id":"145865475543337984","type":"feed","url":"rsshub://wellcee/rent/%E6%9D%AD%E5%B7%9E","title":"杭州租房信息 - Wellcee","description":"62K+ available Total 251K+ - Powered by RSSHub","image":"https://qnimg1.wellcee.com/hangzhou.jpeg"},{"id":"104852188412374016","type":"feed","url":"rsshub://wellcee/rent/%E5%B9%BF%E5%B7%9E","title":"广州租房信息 - Wellcee","description":"30K+ available Total 122K+ - Powered by RSSHub","image":"https://qnimg1.wellcee.com/guangzhou.jpeg"}]}' :test='{"code":0}' />

支持的城市可以通过 [/wellcee/support-city](https://rsshub.app/wellcee/support-city) 获取

### 支持的城市 <Site url="www.wellcee.com" size="sm" />

<Route namespace="wellcee" :data='{"path":"/support-city","example":"/wellcee/support-city","name":"支持的城市","maintainers":["TonyRL"],"radar":[{"source":["www.wellcee.com"]}],"url":"www.wellcee.com","location":"support-city.ts","heat":4,"topFeeds":[{"id":"72929825351162880","type":"feed","url":"rsshub://wellcee/support-city","title":"支持的城市 - Wellcee","description":"上海国际化租房平台｜北京合租&找室友｜香港留学生租房｜深圳无中介租房｜广州外国人租房 ｜杭州高品质租房｜成都房东直租；同志友好&宠物友好；Wellcee 的生活方式：社交｜活动｜交友｜美食｜宠物领养｜音乐&艺术；Wellcee 的二手市集：家居｜电子｜奢侈品｜时尚。 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 爱 Q 生活网 <Site url="iqnew.com"/>

### 最近更新 <Site url="iqnew.com/post/new_100/" size="sm" />

<Route namespace="iqnew" :data='{"path":"/latest","categories":["other"],"example":"/iqnew/latest","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["iqnew.com/post/new_100/","iqnew.com/"]}],"name":"最近更新","maintainers":["nczitzk"],"url":"iqnew.com/post/new_100/","location":"latest.ts","heat":10,"topFeeds":[{"id":"67735528192440320","type":"feed","url":"rsshub://iqnew/latest","title":"爱Q生活网 - 最近更新","description":"爱Q生活网 - 最近更新 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 世界新聞網 <Site url="worldjournal.com"/>

### Unknown <Site url="worldjournal.com/wj/*path" size="sm" />

<Route namespace="worldjournal" :data='{"path":"/:path{.+}?","radar":[{"source":["worldjournal.com/wj/*path"],"target":"/:path"}],"name":"Unknown","maintainers":[],"url":"worldjournal.com/wj/*path","location":"index.ts","heat":9,"topFeeds":[{"id":"101992545694702592","type":"feed","url":"rsshub://worldjournal","title":"即時 | 世界新聞網","description":"世界新聞網提供全球華人關心的即時新聞；除美、中、台與港澳等地的政經、社會、生活、理財等新聞與深度報導外，更關切國際現勢與紐約、洛杉磯、舊金山等美國主要城市的社區動態。 - Powered by RSSHub","image":"https://www.worldjournal.com/static/img/icons/icon-144x144.png"},{"id":"102181776735440896","type":"feed","url":"rsshub://worldjournal/cate/breaking/121010","title":"即時 | 世界新聞網","description":"世界新聞網提供全球華人關心的即時新聞；除美、中、台與港澳等地的政經、社會、生活、理財等新聞與深度報導外，更關切國際現勢與紐約、洛杉磯、舊金山等美國主要城市的社區動態。 - Powered by RSSHub","image":"https://www.worldjournal.com/static/img/icons/icon-144x144.png"}]}' :test='undefined' />

## 中国期货业协会 <Site url="cfachina.org"/>

### 分析师园地 <Site url="cfachina.org" size="sm" />

<Route namespace="cfachina" :data='{"path":"/servicesupport/analygarden/:program?","categories":["other"],"example":"/cfachina/servicesupport/analygarden","parameters":{"program":"分类，见下表，留空为全部"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["cfachina.org/servicesupport/analygarden/:program?","cfachina.org/"]}],"name":"分析师园地","maintainers":["TonyRL"],"description":"| 有色金属类 | 黑色金属类 | 能源化工类 | 贵金属类 | 农产品类 | 金融类 | 指数类 |\n| ---------- | ---------- | ---------- | -------- | -------- | ------ | ------ |\n| ysjsl      | hsjsl      | nyhgl      | gjsl     | ncpl     | jrl    | zsl    |","location":"analygarden.ts","heat":8,"topFeeds":[{"id":"59799220289372187","type":"feed","url":"rsshub://cfachina/servicesupport/analygarden","title":"分析师园地 - 中国期货业协会","description":"分析师园地 - 中国期货业协会 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 有色金属类 | 黑色金属类 | 能源化工类 | 贵金属类 | 农产品类 | 金融类 | 指数类 |
| ---------- | ---------- | ---------- | -------- | -------- | ------ | ------ |
| ysjsl      | hsjsl      | nyhgl      | gjsl     | ncpl     | jrl    | zsl    |

## Instructables <Site url="instructables.com"/>

### Projects <Site url="instructables.com/projects" size="sm" />

<Route namespace="instructables" :data='{"path":"/projects/:category?","categories":["other"],"example":"/instructables/projects/circuits","parameters":{"category":"Category, empty by default, can be found in URL or see the table below"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["instructables.com/projects"],"target":"/projects"}],"name":"Projects","maintainers":["wolfg1969"],"url":"instructables.com/projects","description":"| All | Circuits | Workshop | Craft | Cooking | Living | Outside | Teachers |\n| --- | -------- | -------- | ----- | ------- | ------ | ------- | -------- |\n|     | circuits | workshop | craft | cooking | living | outside | teachers |","location":"projects.ts","heat":8,"topFeeds":[{"id":"59119316294575104","type":"feed","url":"rsshub://instructables/projects","title":"Instructables Projects","description":"Instructables Projects - Powered by RSSHub","image":null},{"id":"76976459015504896","type":"feed","url":"rsshub://instructables/projects/circuits","title":"Instructables Projects","description":"Instructables Projects - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| All | Circuits | Workshop | Craft | Cooking | Living | Outside | Teachers |
| --- | -------- | -------- | ----- | ------- | ------ | ------- | -------- |
|     | circuits | workshop | craft | cooking | living | outside | teachers |

## 腾讯网 <Site url="qq.com"/>

### 最新辟谣 <Site url="vp.fact.qq.com/home" size="sm" />

<Route namespace="qq" :data='{"path":"/fact","categories":["other"],"example":"/qq/fact","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["vp.fact.qq.com/home","vp.fact.qq.com/"]}],"name":"最新辟谣","maintainers":["hoilc"],"url":"vp.fact.qq.com/home","location":"fact/index.ts","heat":8,"topFeeds":[{"id":"85363101027880981","type":"feed","url":"rsshub://qq/fact","title":"较真查证平台 - 腾讯新闻","description":"较真查证平台 - 腾讯新闻 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 留园网 <Site url="club.6parkbbs.com"/>

### 新闻栏目 <Site url="club.6parkbbs.com" size="sm" />

<Route namespace="6park" :data='{"path":"/news/:site?/:id?/:keyword?","radar":[{"source":["club.6parkbbs.com/:id/index.php","club.6parkbbs.com/"],"target":"/:id?"}],"name":"新闻栏目","maintainers":["nczitzk","cscnk52"],"parameters":{"site":"分站，可选newspark、local，默认为 newspark","id":"栏目 id，可选，默认为空","keyword":"关键词，可选，默认为空"},"description":"::: tip 提示\n若订阅 [时政](https://www.6parknews.com/newspark/index.php?type=1)，其网址为 <https://www.6parknews.com/newspark/index.php?type=1>，其中 `newspark` 为分站，`1` 为栏目 id。\n若订阅 [美国](https://local.6parknews.com/index.php?type_id=1)，其网址为 <https://local.6parknews.com/index.php?type_id=1>，其中 `local` 为分站，`1` 为栏目 id。\n:::","location":"news.ts","heat":7,"topFeeds":[{"id":"82298733055304704","type":"feed","url":"rsshub://6park/news/newspark/keywords/%E6%90%9C%E7%B4%A2","title":"6park.com","description":"6park.com - Powered by RSSHub","image":null},{"id":"82300149476718592","type":"feed","url":"rsshub://6park/news/newspark/keywords/%E6%96%B0%E9%97%BB%E9%80%9F%E9%80%92","title":"6park.com","description":"6park.com - Powered by RSSHub","image":null}]}' :test='undefined' />

::: tip 提示
若订阅 [时政](https://www.6parknews.com/newspark/index.php?type=1)，其网址为 <https://www.6parknews.com/newspark/index.php?type=1>，其中 `newspark` 为分站，`1` 为栏目 id。
若订阅 [美国](https://local.6parknews.com/index.php?type_id=1)，其网址为 <https://local.6parknews.com/index.php?type_id=1>，其中 `local` 为分站，`1` 为栏目 id。
:::

### 首页 <Site url="club.6parkbbs.com" size="sm" />

<Route namespace="6park" :data='{"path":"/index/:id?/:type?/:keyword?","name":"首页","maintainers":["nczitzk","cscnk52"],"example":"/6park/index","parameters":{"id":"分站，见下表，默认为史海钩沉","type":"类型，可选值为 gold、type，默认为空","keyword":"关键词，可选，默认为空"},"radar":[{"source":["club.6parkbbs.com/:id/index.php","club.6parkbbs.com/"],"target":"/:id?"}],"description":"| 婚姻家庭 | 魅力时尚 | 女性频道 | 生活百态 | 美食厨房 | 非常影音 | 车迷沙龙 | 游戏天地 | 卡通漫画 | 体坛纵横 | 运动健身 | 电脑前线 | 数码家电 | 旅游风向 | 摄影部落 | 奇珍异宝 | 笑口常开 | 娱乐八卦 | 吃喝玩乐 | 文化长廊 | 军事纵横 | 百家论坛 | 科技频道 | 爱子情怀 | 健康人生 | 博论天下 | 史海钩沉 | 网际谈兵 | 经济观察 | 谈股论金 | 杂论闲侃 | 唯美乐园 | 学习园地 | 命理玄机 | 宠物情缘 | 网络歌坛 | 音乐殿堂 | 情感世界 |\n|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|\n| life9    | life1    | chan10   | life2    | life6    | fr       | enter7   | enter3   | enter6   | enter5   | sport    | know1    | chan6    | life7    | chan8    | page     | enter1   | enter8   | netstar  | life10   | nz       | other    | chan2    | chan5    | life5    | bolun    | chan1    | military | finance  | chan4    | pk       | gz1      | gz2      | gz3      | life8    | chan7    | enter4   | life3    |","location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 婚姻家庭 | 魅力时尚 | 女性频道 | 生活百态 | 美食厨房 | 非常影音 | 车迷沙龙 | 游戏天地 | 卡通漫画 | 体坛纵横 | 运动健身 | 电脑前线 | 数码家电 | 旅游风向 | 摄影部落 | 奇珍异宝 | 笑口常开 | 娱乐八卦 | 吃喝玩乐 | 文化长廊 | 军事纵横 | 百家论坛 | 科技频道 | 爱子情怀 | 健康人生 | 博论天下 | 史海钩沉 | 网际谈兵 | 经济观察 | 谈股论金 | 杂论闲侃 | 唯美乐园 | 学习园地 | 命理玄机 | 宠物情缘 | 网络歌坛 | 音乐殿堂 | 情感世界 |
|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| life9    | life1    | chan10   | life2    | life6    | fr       | enter7   | enter3   | enter6   | enter5   | sport    | know1    | chan6    | life7    | chan8    | page     | enter1   | enter8   | netstar  | life10   | nz       | other    | chan2    | chan5    | life5    | bolun    | chan1    | military | finance  | chan4    | pk       | gz1      | gz2      | gz3      | life8    | chan7    | enter4   | life3    |

## AI 财经社 <Site url="www.aicaijing.com"/>

### Unknown <Site url="www.aicaijing.com" size="sm" />

<Route namespace="aicaijing" :data='{"path":"/:category?/:id?","name":"Unknown","maintainers":[],"location":"index.ts","heat":7,"topFeeds":[{"id":"147826498738685974","type":"feed","url":"rsshub://aicaijing/information/14","title":"Importing","description":null,"image":null},{"id":"156287304989484033","type":"feed","url":"rsshub://aicaijing/latest","title":"Importing","description":null,"image":null}]}' :test='undefined' />

## DataGuidance <Site url="dataguidance.com"/>

### News <Site url="https://www.dataguidance.com/info?article_type=news_post" size="sm" />

<Route namespace="dataguidance" :data='{"name":"News","example":"/dataguidance/news","path":"/news","radar":[{"source":["www.dataguidance.com/info"]}],"maintainers":["harveyqiu"],"url":"https://www.dataguidance.com/info?article_type=news_post","location":"index.ts","heat":7,"topFeeds":[{"id":"67733611004811264","type":"feed","url":"rsshub://dataguidance/news","title":"Data Guidance News","description":"Data Guidance News - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## E-Hentai <Site url="e-hentai.org"/>

### Unknown <Site url="e-hentai.org" size="sm" />

<Route namespace="e-hentai" :data='{"path":"/:what?/:id?/:needTorrents?/:needImages?","name":"Unknown","maintainers":[],"features":{"nsfw":true},"location":"index.ts","heat":6,"topFeeds":[{"id":"106841285260128256","type":"feed","url":"rsshub://e-hentai/category/manga","title":"manga - E-Hentai Galleries","description":"manga - E-Hentai Galleries - Powered by RSSHub","image":null},{"id":"106841534145317888","type":"feed","url":"rsshub://e-hentai/category/cosplay","title":"cosplay - E-Hentai Galleries","description":"cosplay - E-Hentai Galleries - Powered by RSSHub","image":null}]}' :test='undefined' />

## 盯梢 <Site url="www.dingshao.cn"/>

### 频道 <Site url="www.dingshao.cn" size="sm" />

<Route namespace="dingshao" :data='{"path":"/share/:shortId","categories":["other"],"example":"/dingshao/share/FzFypN","parameters":{"shortId":"频道 ID"},"radar":[{"source":["www.dingshao.cn/share/:shortId"]}],"name":"频道","maintainers":["TonyRL"],"location":"share.ts","heat":5,"topFeeds":[{"id":"86495019283337216","type":"feed","url":"rsshub://dingshao/share/FzFypN","title":"V2EX 爆贴推送 🔥","description":"👀 监控 v2ex 热贴，第一时间吃瓜拱火。 - Powered by RSSHub","image":"https://dingshao-contents.oss-cn-chengdu.aliyuncs.com/e79c38b0-6319-11ec-b5f1-1908a0b649f5"}]}' :test='{"code":0}' />

## 中国银行保险监督管理委员会 <Site url="cbirc.gov.cn"/>

### Unknown <Site url="cbirc.gov.cn" size="sm" />

<Route namespace="cbirc" :data='{"path":"/:category?","radar":[{"source":["cbirc.gov.cn/:category","cbirc.gov.cn/"]}],"name":"Unknown","maintainers":["JkCheung"],"location":"index.ts","heat":4,"topFeeds":[{"id":"198372079645781012","type":"feed","url":"rsshub://cbirc/tjxx","title":"Importing","description":null,"image":null},{"id":"198372079645781013","type":"feed","url":"rsshub://cbirc/zqyj","title":"Importing","description":null,"image":null}]}' :test='undefined' />

## 正版中国 <Site url="getitfree.cn"/>

### Unknown <Site url="getitfree.cn" size="sm" />

<Route namespace="getitfree" :data='{"path":"/:filter{.+}?","name":"Unknown","maintainers":[],"location":"index.ts","heat":4,"topFeeds":[{"id":"68942041721625600","type":"feed","url":"rsshub://getitfree/category/310","title":"Getitfree","description":"正版中国（GetItFree）成立于2015年7月,以提供正版软件限时免费信息为途径,引导用户养成使用正版软件的习惯,以此促进国内版权氛围的改进。目前已经得到上百家软件开发者的支持！ - Powered by RSSHub","image":"https://getitfree.cn/wp-content/uploads/site_logo.png"},{"id":"82378651141339164","type":"feed","url":"rsshub://getitfree/category/pc","title":"Getitfree","description":"正版中国（GetItFree）成立于2015年7月,以提供正版软件限时免费信息为途径,引导用户养成使用正版软件的习惯,以此促进国内版权氛围的改进。目前已经得到上百家软件开发者的支持！ - Powered by RSSHub","image":"https://getitfree.cn/wp-content/uploads/site_logo.png"}]}' :test='undefined' />

## PubMed <Site url="pubmed.ncbi.nlm.nih.gov"/>

### Unknown <Site url="pubmed.ncbi.nlm.nih.gov" size="sm" />

<Route namespace="pubmed" :data='{"path":"/trending/:filters?","name":"Unknown","maintainers":["nczitzk"],"location":"trending.ts","heat":4,"topFeeds":[{"id":"84477021375684608","type":"feed","url":"rsshub://pubmed/trending","title":"Trending page - PubMed","description":"Trending page - PubMed - Powered by RSSHub","image":null}]}' :test='undefined' />

## Urban Dictionary <Site url="urbandictionary.com"/>

### Random words <Site url="urbandictionary.com/random.php" size="sm" />

<Route namespace="urbandictionary" :data='{"path":"/random","categories":["other"],"example":"/urbandictionary/random","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["urbandictionary.com/random.php","urbandictionary.com/"]}],"name":"Random words","maintainers":["TonyRL"],"url":"urbandictionary.com/random.php","location":"random.ts","heat":4,"topFeeds":[{"id":"148054920761453568","type":"feed","url":"rsshub://urbandictionary/random","title":"Urban Dictionary: Random words","description":"Urban Dictionary: Random words - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 473824408877 to be less than 311040000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:36:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## Wise <Site url="wise.com"/>

### FX Pair Yesterday <Site url="wise.com" size="sm" />

<Route namespace="wise" :data='{"path":"/pair/:source/:target","categories":["other"],"example":"/wise/pair/GBP/USD","parameters":{"source":"Base currency abbreviation","target":"Quote currency abbreviation"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"FX Pair Yesterday","maintainers":["HenryQW"],"description":"Refer to [the list of supported currencies](https://wise.com/tools/exchange-rate-alerts/).","location":"pair.ts","heat":4,"topFeeds":[{"id":"61948380852672513","type":"feed","url":"rsshub://wise/pair/USD/CNY","title":"USD to CNY by Wise","description":"Exchange Rate from Wise - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

Refer to [the list of supported currencies](https://wise.com/tools/exchange-rate-alerts/).

## ACS Publications <Site url="pubs.acs.org"/>

### Unknown <Site url="pubs.acs.org" size="sm" />

<Route namespace="acs" :data='{"path":"/journal/:id","radar":[{"source":["pubs.acs.org/journal/:id","pubs.acs.org/"]}],"name":"Unknown","maintainers":["nczitzk"],"location":"journal.ts","heat":3,"topFeeds":[{"id":"84129903603684352","type":"feed","url":"rsshub://acs/journal/esthag","title":"Environmental Science & Technology","description":"Environmental Science & Technology - Powered by RSSHub","image":null},{"id":"191666157347082242","type":"feed","url":"rsshub://acs/journal/jacsat","title":"Importing","description":null,"image":null}]}' :test='undefined' />

## Galxe <Site url="app.galxe.com"/>

### Quest <Site url="app.galxe.com" size="sm" />

<Route namespace="galxe" :data='{"path":"/quest/:alias","name":"Quest","url":"app.galxe.com","maintainers":["cxheng315"],"example":"/galxe/quest/MissionWeb3","categories":["other"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["app.galxe.com/quest/:alias"],"target":"/quest/:alias"}],"location":"index.ts","heat":3,"topFeeds":[{"id":"63852442795838464","type":"feed","url":"rsshub://galxe/quest/apeironnft","title":"Apeiron","description":"Apeiron is a hybrid Real-time Strategy God Game primarily for Mobile - Powered by RSSHub","image":null},{"id":"66411028529498112","type":"feed","url":"rsshub://galxe/quest/SzCZGs8o7MZGLVTXvuJNtZ","title":"YieldNest","description":"YieldNest is developing cutting-edge liquid restaking products that isolate risks and structure AVS categories/pipelines, generating higher restaking rewards without compromising security. - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 全球主机监控 <Site url="stock.hostmonit.com"/>

### CloudFlareYes <Site url="stock.hostmonit.com" size="sm" />

<Route namespace="hostmonit" :data='{"path":"/cloudflareyes/:type?","categories":["other"],"example":"/hostmonit/cloudflareyes","parameters":{"type":"类型，见下表，默认为 v4"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"CloudFlareYes","maintainers":["nczitzk"],"description":"| v4 | v6 |\n| -- | -- |\n|    | v6 |","location":"cloudflareyes.ts","heat":3,"topFeeds":[{"id":"67509716866914307","type":"feed","url":"rsshub://hostmonit/cloudflareyes","title":"全球主机监控 - CloudFlareYes","description":"全球主机VPS库存监控补货通知 Stock Monitor 绿云GreenCloudVPS库存监控 搬瓦工BandwagonHost库存监控 斯巴达SpartanHost库存监控 CloudCone库存监控 AlphaVps库存监控 BuyVm 库存监控 Dmit库存监控 xTom/V.PS库存监控 RackNerd库存监控 国外VPS 云服务器 虚拟主机 便宜VPS VPS测评 VPS使用教程 资源分享 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| v4 | v6 |
| -- | -- |
|    | v6 |

### Unknown <Site url="stock.hostmonit.com" size="sm" />

<Route namespace="hostmonit" :data='{"path":"/cloudflareyesv6","name":"Unknown","maintainers":[],"location":"cloudflareyesv6.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## I Know What You Download <Site url="iknowwhatyoudownload.com"/>

### Daily Torrents Statistics <Site url="iknowwhatyoudownload.com" size="sm" />

<Route namespace="iknowwhatyoudownload" :data='{"path":"/stats/daily/:country","categories":["other"],"example":"/iknowwhatyoudownload/stats/daily/CN","url":"iknowwhatyoudownload.com","name":"Daily Torrents Statistics","maintainers":["p3psi-boo"],"parameters":{"country":"the country of the stats. ISO 3166-1 alpha-2 code."},"location":"daily.ts","heat":3,"topFeeds":[{"id":"100710727828610048","type":"feed","url":"rsshub://iknowwhatyoudownload/stats/daily/CN","title":"Daily Torrents Statistics in CN - iknownwhatyoudownload","description":"Daily Torrents Statistics in CN - iknownwhatyoudownload - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## Taiwan FactCheck Center <Site url="tfc-taiwan.org.tw"/>

### 分類 <Site url="tfc-taiwan.org.tw/category/rumor-mill/" size="sm" />

<Route namespace="tfc-taiwan" :data='{"name":"分類","maintainers":["TonyRL"],"example":"/tfc-taiwan/category/weekly-top-ten-rumors","path":"/category/:category","parameters":{"category":"分類，見下表，預設為 `weekly-top-ten-rumors`"},"url":"tfc-taiwan.org.tw/category/rumor-mill/","description":"| 謠言風向球 | 議題觀察室        | TOP10                 | 名家專欄       | 國際視野             |\n| ---------- | ----------------- | --------------------- | -------------- | -------------------- |\n| rumor-mill | issue-observatory | weekly-top-ten-rumors | expert-columns | research-and-updates |","location":"category.ts","heat":3,"topFeeds":[{"id":"156051053062277123","type":"feed","url":"rsshub://tfc-taiwan/category/weekly-top-ten-rumors","title":"〈每週謠言TOP10 〉彙整頁面 - 看見真實，才能打造美好台灣","description":"看見真實，才能打造美好台灣 - Powered by RSSHub","image":"https://tfc-taiwan.org.tw/wp-content/uploads/2024/12/yoast-seo-logo-setup.jpg"},{"id":"74104089253902336","type":"feed","url":"rsshub://tfc-taiwan/category/242","title":"謠言風向球 | 台灣事實查核中心","description":"謠言風向球 | 台灣事實查核中心 - Powered by RSSHub","image":"https://tfc-taiwan.org.tw/sites/all/themes/tfc_ogimage.jpeg"}]}' :test='{"code":0}' />

| 謠言風向球 | 議題觀察室        | TOP10                 | 名家專欄       | 國際視野             |
| ---------- | ----------------- | --------------------- | -------------- | -------------------- |
| rumor-mill | issue-observatory | weekly-top-ten-rumors | expert-columns | research-and-updates |

### 最新查核報告 <Site url="tfc-taiwan.org.tw/latest-news/" size="sm" />

<Route namespace="tfc-taiwan" :data='{"name":"最新查核報告","maintainers":["TonyRL"],"example":"/tfc-taiwan","path":"/","url":"tfc-taiwan.org.tw/latest-news/","location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## Digital Policy Alert <Site url="digitalpolicyalert.org"/>

### Activity Tracker <Site url="digitalpolicyalert.org" size="sm" />

<Route namespace="digitalpolicyalert" :data='{"path":"/activity-tracker/:filters?","name":"Activity Tracker","url":"digitalpolicyalert.org","maintainers":["nczitzk"],"example":"/digitalpolicyalert/activity-tracker","parameters":{"filter":{"description":"Filter, all by default"}},"description":"::: tip\nTo subscribe to [Activity Tracker - International trade](https://digitalpolicyalert.org/activity-tracker?policy=1), where the source URL is `https://digitalpolicyalert.org/activity-tracker?policy=1`, extract the certain parts from this URL to be used as parameters, resulting in the route as [`/digitalpolicyalert/activity-tracker/policy=1`](https://rsshub.app/digitalpolicyalert/activity-tracker/policy=1).\n:::\n","categories":["other"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["digitalpolicyalert.org"]}],"view":0,"location":"activity-tracker.ts","heat":2,"topFeeds":[{"id":"177934592594010112","type":"feed","url":"rsshub://digitalpolicyalert/activity-tracker","title":"Activity Tracker - Digital Policy Alert","description":"An independent, timely and accessible record of policy and regulatory changes affecting the digital economy. - Powered by RSSHub","image":"https://digitalpolicyalert.org/img/main_image.png"}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

::: tip
To subscribe to [Activity Tracker - International trade](https://digitalpolicyalert.org/activity-tracker?policy=1), where the source URL is `https://digitalpolicyalert.org/activity-tracker?policy=1`, extract the certain parts from this URL to be used as parameters, resulting in the route as [`/digitalpolicyalert/activity-tracker/policy=1`](https://rsshub.app/digitalpolicyalert/activity-tracker/policy=1).
:::


## ELSEVIER <Site url="www.sciencedirect.com"/>

### Unknown <Site url="www.sciencedirect.com" size="sm" />

<Route namespace="elsevier" :data='{"path":["/:journal/latest","/:journal"],"radar":[{"source":["www.sciencedirect.com/journal/:journal/*"],"target":"/:journal"}],"name":"Unknown","maintainers":[],"location":"journal.ts","heat":2,"topFeeds":[{"id":"151906373171554304","type":"feed","url":"rsshub://elsevier/journal-of-functional-analysis","title":"Importing","description":null,"image":null},{"id":"174810629543869442","type":"feed","url":"rsshub://elsevier/computers-and-security","title":"Importing","description":null,"image":null}]}' :test='undefined' />

### Unknown <Site url="www.sciencedirect.com" size="sm" />

<Route namespace="elsevier" :data='{"path":["/:journal/vol/:issue","/:journal/:issue"],"radar":[{"source":["www.sciencedirect.com/journal/:journal/*"],"target":"/:journal"}],"name":"Unknown","maintainers":[],"location":"issue.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 骨朵数据 <Site url="data.guduodata.com"/>

### 日榜 <Site url="guduodata.com/" size="sm" />

<Route namespace="guduodata" :data='{"path":"/daily","categories":["other"],"example":"/guduodata/daily","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["guduodata.com/"]}],"name":"日榜","maintainers":["Gem1ni"],"url":"guduodata.com/","location":"daily.ts","heat":2,"topFeeds":[{"id":"73392045247861760","type":"feed","url":"rsshub://guduodata/daily","title":"骨朵数据 - 日榜","description":"2025-11-07 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## HiringCafe <Site url="hiring.cafe"/>

HiringCafe is a platform for job seekers to find job opportunities and for employers to post job listings.

### Jobs <Site url="hiring.cafe" size="sm" />

<Route namespace="hiring.cafe" :data='{"path":"/jobs/:keywords","categories":["other"],"example":"/hiring.cafe/jobs/sustainability","parameters":{"keywords":"Keywords to search for"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["hiring.cafe"]}],"name":"Jobs","maintainers":["mintyfrankie"],"location":"jobs.ts","heat":2,"topFeeds":[{"id":"111907108448833536","type":"feed","url":"rsshub://hiring.cafe/jobs/C++","title":"HiringCafe Jobs: C++","description":"Job search results for \"C++\" on HiringCafe - Powered by RSSHub","image":null},{"id":"111907007229612032","type":"feed","url":"rsshub://hiring.cafe/jobs/opengl","title":"HiringCafe Jobs: opengl","description":"Job search results for \"opengl\" on HiringCafe - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 贝壳研究院 <Site url="www.research.ke.com"/>

### 研究成果 <Site url="www.research.ke.com/researchResults" size="sm" />

<Route namespace="ke" :data='{"path":"/researchResults","categories":["other"],"example":"/ke/researchResults","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.research.ke.com/researchResults"]}],"name":"研究成果","maintainers":["shaomingbo"],"url":"www.research.ke.com/researchResults","location":"results.ts","heat":2,"topFeeds":[{"id":"158366990849381376","type":"feed","url":"rsshub://ke/researchResults","title":"Importing","description":null,"image":null}]}' :test='{"code":1,"message":"Error: STACK_TRACE_ERROR\n    at task (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:633:27)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:660:16)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:457:28)\n    at chain (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/chunk-tasks.js:9:14)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:72:12\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:40\n    at runWithSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1588:8)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:10)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:739:54)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at collectTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1048:25)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1556:17)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:85:25)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:153:2)\n    at executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/init-forks.aqTzCSR2.js:29:4)"}' />

## LuMa <Site url="lu.ma"/>

### Events <Site url="lu.ma" size="sm" />

<Route namespace="luma" :data='{"path":"/:url","name":"Events","url":"lu.ma","maintainers":["cxheng315"],"example":"/luma/yieldnest","categories":["other"],"parameters":{"url":"LuMa URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["lu.ma/:url"],"target":"/:url"}],"location":"index.ts","heat":2,"topFeeds":[{"id":"62716706890373120","type":"feed","url":"rsshub://luma/langchain","title":"LangChain Events","description":"LangChain Events - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 华西医院 <Site url="www.wchscu.cn"/>

### 招聘公告 <Site url="www.wchscu.cn" size="sm" />

<Route namespace="wchscu" :data='{"name":"招聘公告","path":"/recruit","example":"/wchscu/recruit","url":"www.wchscu.cn","maintainers":["ViggoC"],"categories":["other"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.wchscu.cn/public/notice/recruit"]}],"location":"recruit.ts","heat":2,"topFeeds":[{"id":"62364939688475651","type":"feed","url":"rsshub://wchscu/recruit","title":"招聘 - 四川大学华西医院 - 四川大学华西医院","description":"招聘 - 四川大学华西医院 - 四川大学华西医院 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 二次元虫洞 <Site url="2cycd.com"/>

### Unknown <Site url="2cycd.com" size="sm" />

<Route namespace="2cycd" :data='{"path":"/:fid/:sort?","name":"Unknown","maintainers":["shelken"],"location":"index.ts","heat":1,"topFeeds":[{"id":"152521497873377282","type":"feed","url":"rsshub://2cycd/42/dateline","title":"Importing","description":null,"image":null}]}' :test='undefined' />

## A 姐分享 <Site url="nsfw.abskoop.com"/>

### 存档列表 - NSFW <Site url="ahhhhfs.com/" size="sm" />

<Route namespace="abskoop" :data='{"path":"/nsfw","radar":[{"source":["ahhhhfs.com/"],"target":""}],"name":"存档列表 - NSFW","maintainers":["zhenhappy"],"url":"ahhhhfs.com/","features":{"nsfw":true},"location":"nsfw.ts","heat":1,"topFeeds":[{"id":"167549568401875969","type":"feed","url":"rsshub://abskoop/nsfw","title":"Importing","description":null,"image":null}]}' :test='undefined' />

### 存档列表 <Site url="ahhhhfs.com/" size="sm" />

<Route namespace="abskoop" :data='{"path":"/","radar":[{"source":["ahhhhfs.com/"],"target":""}],"name":"存档列表","maintainers":["zhenhappy"],"url":"ahhhhfs.com/","features":{"nsfw":true},"location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## ATP Tour <Site url="www.atptour.com"/>

News from the official site of men's professional tennis.

### News <Site url="www.atptour.com" size="sm" />

<Route namespace="atptour" :data='{"path":"/news/:lang?","categories":["other"],"example":"/atptour/news/en","parameters":{"lang":"en or es."},"radar":[{"source":["atptour.com"]}],"name":"News","maintainers":["LM1207"],"location":"news.ts","heat":1,"topFeeds":[{"id":"83684289961634816","type":"feed","url":"rsshub://atptour/news/en","title":"News","description":"News from the official site of men&#39;s professional tennis. - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 成都住建蓉 e 办 <Site url="zw.cdzjryb.com"/>

### 商品住房购房登记 <Site url="zw.cdzjryb.com/lottery/accept/projectList" size="sm" />

<Route namespace="cdzjryb" :data='{"path":"/zw/projectList","categories":["other"],"example":"/cdzjryb/zw/projectList","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["zw.cdzjryb.com/lottery/accept/projectList","zw.cdzjryb.com/"]}],"name":"商品住房购房登记","maintainers":["TonyRL"],"url":"zw.cdzjryb.com/lottery/accept/projectList","location":"project-list.ts","heat":1,"topFeeds":[{"id":"92760180202994688","type":"feed","url":"rsshub://cdzjryb/zw/projectList","title":"商品住房购买登记","description":"商品住房购买登记 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 大连理工大学 <Site url="dutdice.dlut.edu.cn"/>

### Unknown <Site url="dutdice.dlut.edu.cn" size="sm" />

<Route namespace="dut" :data='{"path":["/*/*","/:0?"],"name":"Unknown","maintainers":[],"location":"index.ts","heat":1,"topFeeds":[{"id":"197554467454926849","type":"feed","url":"rsshub://dut/gs/zytz","title":"Importing","description":null,"image":null}]}' :test='undefined' />

## 中国工商银行 <Site url="icbc.com.cn"/>

### 外汇牌价 <Site url="icbc.com.cn/column/1438058341489590354.html" size="sm" />

<Route namespace="icbc" :data='{"path":"/whpj/:format?","categories":["other"],"example":"/icbc/whpj/zs?filter_title=%E8%8B%B1%E9%95%91","parameters":{"format":"输出的标题格式，默认为标题 + 所有价格。短格式仅包含货币名称。"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["icbc.com.cn/column/1438058341489590354.html"],"target":"/whpj"}],"name":"外汇牌价","maintainers":["leoleoasd"],"url":"icbc.com.cn/column/1438058341489590354.html","description":"| 短格式 | 参考价 | 现汇买卖 | 现钞买卖 | 现汇买入 | 现汇卖出 | 现钞买入 | 现钞卖出 |\n| ------ | ------ | -------- | -------- | -------- | -------- | -------- | -------- |\n| short  | zs     | xh       | xc       | xhmr     | xhmc     | xcmr     | xcmc     |","location":"whpj.ts","heat":1,"topFeeds":[{"id":"152025059498498054","type":"feed","url":"rsshub://icbc/whpj/short","title":"中国工商银行外汇牌价","description":"中国工商银行外汇牌价 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 短格式 | 参考价 | 现汇买卖 | 现钞买卖 | 现汇买入 | 现汇卖出 | 现钞买入 | 现钞卖出 |
| ------ | ------ | -------- | -------- | -------- | -------- | -------- | -------- |
| short  | zs     | xh       | xc       | xhmr     | xhmc     | xcmr     | xcmc     |

## 齐鲁网 <Site url="v.iqilu.com"/>

### Unknown <Site url="v.iqilu.com" size="sm" />

<Route namespace="iqilu" :data='{"path":"/v/:category{.+}?","name":"Unknown","maintainers":[],"location":"program.ts","heat":1,"topFeeds":[{"id":"178028763735837697","type":"feed","url":"rsshub://iqilu/v/qdyaowen","title":"404","description":"404 - Powered by RSSHub","image":null}]}' :test='undefined' />

## 木木博客 <Site url="liulinblog.com"/>

### Unknown <Site url="liulinblog.com" size="sm" />

<Route namespace="liulinblog" :data='{"path":"/:params{.+}?","name":"Unknown","maintainers":[],"location":"index.ts","heat":1,"topFeeds":[{"id":"134802206056046598","type":"feed","url":"rsshub://liulinblog","title":"木木博客 - 最新","description":"木木博客是一个分享网络营销技巧，网站seo优化技术，网站模板，实用工具等网盘资源下载的自媒体博客 - Powered by RSSHub","image":"https://www.liulinblog.com/wp-content/uploads/2022/08/1659942346-41552cb12a56075.webp"}]}' :test='undefined' />

### Unknown <Site url="liulinblog.com" size="sm" />

<Route namespace="liulinblog" :data='{"path":"/itnews/:channel","name":"Unknown","maintainers":[],"location":"itnews.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## Email 

### Unknown 

<Route namespace="mail" :data='{"path":"/imap/:email/:folder{.+}?","name":"Unknown","maintainers":[],"location":"imap.ts","heat":1,"topFeeds":[{"id":"113584161709927424","type":"feed","url":"rsshub://mail/imap/927521397@qq.com","title":"927521397@qq.com&#39;s Inbox","description":"927521397@qq.com&#39;s Inbox - Powered by RSSHub","image":null}]}' :test='undefined' />

## QuestN <Site url="app.questn.com"/>

### Events <Site url="app.questn.com" size="sm" />

<Route namespace="questn" :data='{"path":"/events/:filter?","name":"Events","url":"app.questn.com","maintainers":["cxheng315"],"example":"/questn/events","parameters":{"filter":"Filter string"},"description":"\n::: tip\n\nFilter parameters:\n- category: 100: trending, 200: newest, 300: top\n- status_filter: 0: all, 100: available, 400: missed\n- community_filter: 0: all community, 100: verified, 200: followed\n- rewards_filter: 0: all rewards, 100: nft, 200: token, 400: whitelist\n- chain_filter: 0: all chains, 1: ethereum, 56: bsc, 137: polygon, 42161: arb, 10: op, 324: zksync, 43114: avax\n- search: &#39;Search keyword&#39;,\n- count: &#39;Number of events to fetch&#39;,\n- page: &#39;Page number&#39;,\n:::","categories":["other"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["app.questn.com/explore"],"target":"/events/:category?/:status_filter?/:community_filter?/:reward_filter?/:chain_filter?/:search?/:count?/:page?"}],"location":"events.ts","heat":1,"topFeeds":[{"id":"59145487772061696","type":"feed","url":"rsshub://questn/events","title":"QuestN Events","description":"A Quest Protocol Dedicated to DePIN and AI Training - Powered by RSSHub","image":"https://app.questn.com/static/svgs/logo-white.svg"}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />


::: tip

Filter parameters:
- category: 100: trending, 200: newest, 300: top
- status_filter: 0: all, 100: available, 400: missed
- community_filter: 0: all community, 100: verified, 200: followed
- rewards_filter: 0: all rewards, 100: nft, 200: token, 400: whitelist
- chain_filter: 0: all chains, 1: ethereum, 56: bsc, 137: polygon, 42161: arb, 10: op, 324: zksync, 43114: avax
- search: 'Search keyword',
- count: 'Number of events to fetch',
- page: 'Page number',
:::

### Community Events <Site url="app.questn.com" size="sm" />

<Route namespace="questn" :data='{"path":"/community/:communityUrl","name":"Community Events","url":"app.questn.com","maintainers":["cxheng315"],"example":"/questn/community/gmnetwork","parameters":{"community_url":"Community URL"},"categories":["other"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["app.questn.com/:communityUrl"],"target":"/community/:communityUrl"}],"location":"community.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 台灣大哥大 <Site url="www.taiwanmobile.com"/>

### 資費公告 <Site url="www.taiwanmobile.com/cs/public/servAnn/queryList.htm?type=1" size="sm" />

<Route namespace="taiwanmobile" :data='{"path":"/rate-plans","categories":["other"],"example":"/taiwanmobile/rate-plans","radar":[{"source":["taiwanmobile.com/cs/public/servAnn/queryList.htm"]}],"name":"資費公告","maintainers":["Tsuyumi25"],"url":"www.taiwanmobile.com/cs/public/servAnn/queryList.htm?type=1","location":"rate-plans.ts","heat":1,"topFeeds":[{"id":"86492633104432128","type":"feed","url":"rsshub://taiwanmobile/rate-plans","title":"台灣大哥大 - 資費公告","description":"台灣大哥大 - 資費公告 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 591 Rental house <Site url="rent.591.com.tw"/>

### Rental house <Site url="rent.591.com.tw" size="sm" />

<Route namespace="591" :data='{"path":"/:country/rent/:query?","categories":["other"],"example":"/591/tw/rent/order=posttime&orderType=desc","parameters":{"country":"Country code. Only tw is supported now","query":"Query Parameters"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Rental house","maintainers":["Yukaii"],"description":"::: tip\n  Copy the URL of the 591 filter housing page and remove the front part `https://rent.591.com.tw/?`, you will get the query parameters.\n:::","location":"list.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

::: tip
  Copy the URL of the 591 filter housing page and remove the front part `https://rent.591.com.tw/?`, you will get the query parameters.
:::

## 经济 50 人论坛 <Site url="50forum.org.cn"/>

### Unknown <Site url="50forum.org.cn/home/article/index/category/zhuanjia.html" size="sm" />

<Route namespace="50forum" :data='{"path":"/","radar":[{"source":["50forum.org.cn/home/article/index/category/zhuanjia.html","50forum.org.cn/"],"target":""}],"name":"Unknown","maintainers":["sddiky"],"url":"50forum.org.cn/home/article/index/category/zhuanjia.html","location":"zhuanjia.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 8 视界 <Site url="8world.com"/>

### Unknown <Site url="8world.com" size="sm" />

<Route namespace="8world" :data='{"path":"*","name":"Unknown","maintainers":[],"location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 中华全国专利代理师协会 <Site url="acpaa.cn"/>

### 标签 <Site url="acpaa.cn" size="sm" />

<Route namespace="acpaa" :data='{"path":"/:id?/:name?","categories":["other"],"example":"/acpaa","parameters":{"id":"标签 id，默认为 1，可在对应标签页 URL 中找到","name":"标签名称，默认为重要通知，可在对应标签页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"标签","maintainers":["nczitzk"],"location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## AFL-CIO <Site url="aflcio.org"/>

### Blog <Site url="aflcio.org" size="sm" />

<Route namespace="aflcio" :data='{"path":"/blog","name":"Blog","url":"aflcio.org","maintainers":["nczitzk"],"example":"/aflcio/blog","categories":["other"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["aflcio.org/blog"],"target":"/blog"}],"view":0,"location":"blog.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## Aljazeera <Site url="aljazeera.com"/>

### Unknown <Site url="aljazeera.com" size="sm" />

<Route namespace="aljazeera" :data='{"path":"*","name":"Unknown","maintainers":["nczitzk"],"location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## Aqara <Site url="aqara.com"/>

### 社区 <Site url="aqara.com" size="sm" />

<Route namespace="aqara" :data='{"path":"/community/:id?/:keyword?","categories":["other"],"example":"/aqara/community","parameters":{"id":"分类 id，可在对应分类页 URL 中找到，默认为全部","keyword":"关键字，默认为空"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"社区","maintainers":["nczitzk"],"location":"community.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

### Unknown <Site url="aqara.com" size="sm" />

<Route namespace="aqara" :data='{"path":"/cn/news","name":"Unknown","maintainers":[],"location":"news.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="aqara.com" size="sm" />

<Route namespace="aqara" :data='{"path":"*","name":"Unknown","maintainers":[],"location":"post.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="aqara.com" size="sm" />

<Route namespace="aqara" :data='{"path":"/:region/:type?","name":"Unknown","maintainers":[],"location":"region.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 中国汽车工业协会统计信息网 <Site url="auto-stats.org.cn"/>

### 分类 <Site url="auto-stats.org.cn" size="sm" />

<Route namespace="auto-stats" :data='{"path":"/:category?","categories":["other"],"example":"/auto-stats","parameters":{"category":"分类，见下表，默认为信息快递"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"分类","maintainers":["nczitzk"],"description":"| 信息快递 | 工作动态 | 专题分析 |\n| -------- | -------- | -------- |\n| xxkd     | gzdt     | ztfx     |","location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

| 信息快递 | 工作动态 | 专题分析 |
| -------- | -------- | -------- |
| xxkd     | gzdt     | ztfx     |

## Bad.news <Site url="bad.news"/>

### Unknown <Site url="bad.news" size="sm" />

<Route namespace="bad" :data='{"path":"*","name":"Unknown","maintainers":[],"location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 北京市科学技术协会 <Site url="bast.net.cn"/>

### Unknown <Site url="bast.net.cn" size="sm" />

<Route namespace="bast" :data='{"path":"*","name":"Unknown","maintainers":[],"location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## biodiscover.com 生物探索 <Site url="www.biodiscover.com"/>

### Unknown <Site url="www.biodiscover.com" size="sm" />

<Route namespace="biodiscover" :data='{"path":"/:channel?","radar":[{"source":["www.biodiscover.com/:channel"],"target":"/:channel"}],"name":"Unknown","maintainers":["aidistan"],"location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 笔趣阁 <Site url="xbiquwx.la"/>

::: tip
此处的 **笔趣阁** 指网络上使用和 **笔趣阁** 样式相似模板的小说阅读网站，包括但不限于下方列举的网址。
:::

| 网址                                                 | 名称       |
| ---------------------------------------------------- | ---------- |
| [https://www.xbiquwx.la](https://www.xbiquwx.la)     | 笔尖中文   |
| [http://www.biqu5200.net](http://www.biqu5200.net)   | 笔趣阁     |
| [https://www.xbiquge.so](https://www.xbiquge.so)     | 笔趣阁     |
| [https://www.biqugeu.net](https://www.biqugeu.net)   | 顶点小说网 |
| [http://www.b520.cc](http://www.b520.cc)             | 笔趣阁     |
| [https://www.ahfgb.com](https://www.ahfgb.com)       | 笔趣鸽     |
| [https://www.ibiquge.la](https://www.ibiquge.la)     | 香书小说   |
| [https://www.biquge.tv](https://www.biquge.tv)       | 笔趣阁     |
| [https://www.bswtan.com](https://www.bswtan.com)     | 笔书网     |
| [https://www.biquge.co](https://www.biquge.co)       | 笔趣阁     |
| [https://www.bqzhh.com](https://www.bqzhh.com)       | 笔趣阁     |
| [http://www.biqugse.com](http://www.biqugse.com)     | 笔趣阁     |
| [https://www.ibiquge.info](https://www.ibiquge.info) | 爱笔楼     |
| [https://www.ishuquge.com](https://www.ishuquge.com) | 书趣阁     |
| [https://www.mayiwxw.com](https://www.mayiwxw.com)   | 蚂蚁文学   |

### Unknown <Site url="xbiquwx.la" size="sm" />

<Route namespace="biquge" :data='{"path":"*","name":"Unknown","maintainers":[],"location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## ui.dev <Site url="bytes.dev"/>

### Unknown <Site url="bytes.dev/archives" size="sm" />

<Route namespace="bytes" :data='{"path":"/","radar":[{"source":["bytes.dev/archives","bytes.dev/"],"target":""}],"name":"Unknown","maintainers":["meixger"],"url":"bytes.dev/archives","location":"bytes.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 中国汽车工业协会 <Site url="caam.org.cn"/>

### Unknown <Site url="caam.org.cn" size="sm" />

<Route namespace="caam" :data='{"path":"/:category?","name":"Unknown","maintainers":["nczitzk"],"location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 纪妖 <Site url="cbaigui.com"/>

### Unknown <Site url="cbaigui.com" size="sm" />

<Route namespace="cbaigui" :data='{"path":"*","name":"Unknown","maintainers":[],"location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 第一财经杂志 <Site url="cbnweek.com"/>

### Unknown <Site url="cbnweek.com/" size="sm" />

<Route namespace="cbnweek" :data='{"path":"/","radar":[{"source":["cbnweek.com/"],"target":""}],"name":"Unknown","maintainers":["nczitzk"],"url":"cbnweek.com/","location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 中国光大银行 <Site url="cebbank.com"/>

### Unknown <Site url="cebbank.com/site/ygzx/whpj/index.html" size="sm" />

<Route namespace="cebbank" :data='{"path":"/quotation/all","categories":["other"],"example":"/cebbank/quotation/all","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["cebbank.com/site/ygzx/whpj/index.html","cebbank.com/eportal/ui","cebbank.com/"]}],"name":"Unknown","maintainers":["linbuxiao"],"url":"cebbank.com/site/ygzx/whpj/index.html","location":"all.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 外汇牌价 <Site url="cebbank.com" size="sm" />

<Route namespace="cebbank" :data='{"path":"/quotation/history/:type","categories":["other"],"example":"/cebbank/quotation/history/usd","parameters":{"type":"货币的缩写，见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"外汇牌价","maintainers":["linbuxiao"],"description":"#### 总览 {#zhong-guo-guang-da-yin-hang-wai-hui-pai-jia-zong-lan}\n\n\n#### 历史牌价 {#zhong-guo-guang-da-yin-hang-wai-hui-pai-jia-li-shi-pai-jia}\n\n| 美元 | 英镑 | 港币 | 瑞士法郎 | 瑞典克郎 | 丹麦克郎 | 挪威克郎 | 日元 | 加拿大元 | 澳大利亚元 | 新加坡元 | 欧元 | 澳门元 | 泰国铢 | 新西兰元 | 韩圆 |\n| ---- | ---- | ---- | -------- | -------- | -------- | -------- | ---- | -------- | ---------- | -------- | ---- | ------ | ------ | -------- | ---- |\n| usd  | gbp  | hkd  | chf      | sek      | dkk      | nok      | jpy  | cad      | aud        | sgd      | eur  | mop    | thb    | nzd      | krw  |","location":"history.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

#### 总览 {#zhong-guo-guang-da-yin-hang-wai-hui-pai-jia-zong-lan}


#### 历史牌价 {#zhong-guo-guang-da-yin-hang-wai-hui-pai-jia-li-shi-pai-jia}

| 美元 | 英镑 | 港币 | 瑞士法郎 | 瑞典克郎 | 丹麦克郎 | 挪威克郎 | 日元 | 加拿大元 | 澳大利亚元 | 新加坡元 | 欧元 | 澳门元 | 泰国铢 | 新西兰元 | 韩圆 |
| ---- | ---- | ---- | -------- | -------- | -------- | -------- | ---- | -------- | ---------- | -------- | ---- | ------ | ------ | -------- | ---- |
| usd  | gbp  | hkd  | chf      | sek      | dkk      | nok      | jpy  | cad      | aud        | sgd      | eur  | mop    | thb    | nzd      | krw  |

## 中国期货市场监控中心 <Site url="cfmmc.com"/>

### Unknown <Site url="cfmmc.com" size="sm" />

<Route namespace="cfmmc" :data='{"path":"/:id{.+}?","name":"Unknown","maintainers":[],"location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 有据 <Site url="chinafactcheck.com"/>

### Unknown <Site url="chinafactcheck.com/" size="sm" />

<Route namespace="chinafactcheck" :data='{"path":"/","radar":[{"source":["chinafactcheck.com/"],"target":""}],"name":"Unknown","maintainers":["kdanfly"],"url":"chinafactcheck.com/","location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 中国新闻网 <Site url="chinanews.com.cn"/>

### Unknown <Site url="chinanews.com.cn/" size="sm" />

<Route namespace="chinanews" :data='{"path":"/","radar":[{"source":["chinanews.com.cn/"],"target":""}],"name":"Unknown","maintainers":["yuxinliu-alex"],"url":"chinanews.com.cn/","location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 中国兴业银行 <Site url="cib.com.cn"/>

### 外汇牌价 <Site url="cib.com.cn/" size="sm" />

<Route namespace="cib" :data='{"path":"/whpj/:format?","categories":["other"],"example":"/cib/whpj/xh?filter_title=USD","parameters":{"format":"输出的标题格式，默认为标题 + 所有价格。短格式仅包含货币名称。"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["cib.com.cn/"],"target":"/whpj"}],"name":"外汇牌价","maintainers":["Qixingchen"],"url":"cib.com.cn/","description":"| 短格式 | 现汇买卖 | 现钞买卖 | 现汇买入 | 现汇卖出 | 现钞买入 | 现钞卖出 |\n| ------ | -------- | -------- | -------- | -------- | -------- | -------- |\n| short  | xh       | xc       | xhmr     | xhmc     | xcmr     | xcmc     |","location":"whpj.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 短格式 | 现汇买卖 | 现钞买卖 | 现汇买入 | 现汇卖出 | 现钞买入 | 现钞卖出 |
| ------ | -------- | -------- | -------- | -------- | -------- | -------- |
| short  | xh       | xc       | xhmr     | xhmc     | xcmr     | xcmc     |

## 南湖清风 <Site url="cnjxol.com"/>

### Unknown <Site url="cnjxol.com" size="sm" />

<Route namespace="cnjxol" :data='{"path":"/:category?/:id?","name":"Unknown","maintainers":[],"location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## CuriousCat <Site url="curiouscat.live"/>

### Unknown <Site url="curiouscat.live" size="sm" />

<Route namespace="curiouscat" :data='{"path":"/user/:id","radar":[{"source":["curiouscat.live/:id"]}],"name":"Unknown","maintainers":["lucasew"],"location":"user.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## Darwin Awards <Site url="darwinawards.com"/>

### Award Winners <Site url="darwinawards.com/darwin" size="sm" />

<Route namespace="darwinawards" :data='{"name":"Award Winners","example":"/darwinawards","path":"/","radar":[{"source":["darwinawards.com/darwin","darwinawards.com/"]}],"maintainers":["zoenglinghou","nczitzk"],"url":"darwinawards.com/darwin","location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## Deadline <Site url="deadline.com"/>

### Unknown <Site url="deadline.com/" size="sm" />

<Route namespace="deadline" :data='{"path":"/","radar":[{"source":["deadline.com/"],"target":""}],"name":"Unknown","maintainers":["TonyRL"],"url":"deadline.com/","location":"posts.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 东莞教研网 <Site url="dgjyw.com"/>

### Unknown <Site url="dgjyw.com" size="sm" />

<Route namespace="dgjyw" :data='{"path":"*","name":"Unknown","maintainers":[],"location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## Distill <Site url="distill.pub"/>

### Unknown <Site url="distill.pub/" size="sm" />

<Route namespace="distill" :data='{"path":"/","radar":[{"source":["distill.pub/"],"target":""}],"name":"Unknown","maintainers":["nczitzk"],"url":"distill.pub/","location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## DL NEWS <Site url="dlnews.com"/>

### Latest News <Site url="dlnews.com/articles" size="sm" />

<Route namespace="dlnews" :data='{"path":"/:category?","radar":[{"source":["dlnews.com/articles/:category"],"target":"/:category"}],"url":"dlnews.com/articles","name":"Latest News","maintainers":["Rjnishant530"],"example":"/dlnews/people-culture","location":"category.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 轻松游牧-远程工作聚集地 <Site url="easynomad.cn"/>

### 远程工作列表 <Site url="easynomad.cn" size="sm" />

<Route namespace="easynomad" :data='{"path":"/","categories":["other"],"view":5,"example":"/easynomad","radar":[{"source":["easynomad.cn"]}],"name":"远程工作列表","maintainers":["jiangsong216"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"location":"joblist.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## Eventbrite <Site url="eventbrite.com"/>

### Events <Site url="eventbrite.com" size="sm" />

<Route namespace="eventbrite" :data='{"path":"/:region/:eventType?/:includePromoted?","categories":["other"],"example":"/eventbrite/canada--toronto/all-events","parameters":{"eventType":"category of events for filtering","region":"Region or scope of events"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["eventbrite.com/d/:region/:eventType"],"target":"/:region/:eventType"},{"source":["eventbrite.ca/d/:region/:eventType"],"target":"/:region/:eventType"}],"name":"Events","maintainers":["elibroftw"],"location":"events.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## U.S. Food and Drug Administration <Site url="fda.gov"/>

### Unknown <Site url="fda.gov/medical-devices/news-events-medical-devices/cdrhnew-news-and-updates" size="sm" />

<Route namespace="fda" :data='{"path":"/cdrh/:titleOnly?","radar":[{"source":["fda.gov/medical-devices/news-events-medical-devices/cdrhnew-news-and-updates","fda.gov/"],"target":"/cdrh/:titleOnly"}],"name":"Unknown","maintainers":[],"url":"fda.gov/medical-devices/news-events-medical-devices/cdrhnew-news-and-updates","location":"cdrh.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## Mozilla <Site url="monitor.firefox.com"/>

### Firefox Monitor <Site url="monitor.firefox.com/" size="sm" />

<Route namespace="firefox" :data='{"path":"/breaches","categories":["other"],"example":"/firefox/breaches","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["monitor.firefox.com/","monitor.firefox.com/breaches"]}],"name":"Firefox Monitor","maintainers":["TonyRL"],"url":"monitor.firefox.com/","location":"breaches.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## Fisher Spb <Site url="fisher.spb.ru"/>

### News <Site url="fisher.spb.ru/news" size="sm" />

<Route namespace="fisher-spb" :data='{"path":"/news","categories":["other"],"example":"/fisher-spb/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["fisher.spb.ru/news"]}],"name":"News","maintainers":["denis-ya"],"url":"fisher.spb.ru/news","location":"news.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## fish shell <Site url="fishshell.com"/>

### Unknown <Site url="fishshell.com/" size="sm" />

<Route namespace="fishshell" :data='{"path":"/","radar":[{"source":["fishshell.com/"],"target":""}],"name":"Unknown","maintainers":["x2cf"],"url":"fishshell.com/","location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## GameApps.hk 香港手机游戏网 <Site url="gameapps.hk"/>

### 最新消息 <Site url="gameapps.hk/" size="sm" />

<Route namespace="gameapps" :data='{"path":"/","example":"/gameapps","radar":[{"source":["gameapps.hk/"]}],"name":"最新消息","maintainers":["TonyRL"],"url":"gameapps.hk/","location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 广东省食品药品审评认证技术协会 <Site url="gdsrx.org.cn"/>

### 栏目 <Site url="gdsrx.org.cn" size="sm" />

<Route namespace="gdsrx" :data='{"path":"/:id?","categories":["other"],"example":"/gdsrx","parameters":{"id":"栏目 id，可在对应栏目页 URL 中找到，见下表，默认为法规文库"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"栏目","maintainers":[],"description":"| 栏目名称          | 栏目 id |\n| ----------------- | ------- |\n| 法规文库          | 10      |\n| 法规资讯          | 12      |\n| 专家供稿          | 13      |\n| 协会动态 会员动态 | 20      |\n| 协会动态          | 37      |\n| 协会通知公告      | 38      |\n| 会员动态          | 39      |","location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

| 栏目名称          | 栏目 id |
| ----------------- | ------- |
| 法规文库          | 10      |
| 法规资讯          | 12      |
| 专家供稿          | 13      |
| 协会动态 会员动态 | 20      |
| 协会动态          | 37      |
| 协会通知公告      | 38      |
| 会员动态          | 39      |

## 广东工业大学 <Site url="oas.gdut.edu.cn"/>

### Unknown <Site url="oas.gdut.edu.cn/seeyon" size="sm" />

<Route namespace="gdut" :data='{"path":"/oa_news/:type?","radar":[{"source":["oas.gdut.edu.cn/seeyon"],"target":"/oa_news/"}],"name":"Unknown","maintainers":["jim-kirisame"],"url":"oas.gdut.edu.cn/seeyon","location":"oa-news.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## Genossenschaften.immo <Site url="genossenschaften.immo"/>

Search engine for Genossenschaft housing in Austria

### Immobiliensuche <Site url="genossenschaften.immo" size="sm" />

<Route namespace="genossenschaften" :data='{"name":"Immobiliensuche","path":"*","maintainers":["sk22"],"categories":["other"],"description":"\nNote that all parameters are optional and many can be specified multiple times\n(e.g. `district=wien-1-innere-stadt&district=wien-2-leopoldstadt`).\n\nOnly returns the first page of search results, allowing you to keep track of\nnewly added apartments. If you&#39;re looking for an apartment, make sure to also\nlook through the other pages on the website.\n\n::: tip\nTo get your query URL, go to https://genossenschaften.immo and apply all\ndesired filters. If you want to filter by (all districts of a) federal state\n(e.g. `/immobilien/regionen/wien/`), please open the district selector and\nde- and re-select any district, so that the region in the URL gets replaced\nwith a number of `district` parameters. Once you&#39;ve set up all desired\nfilters, copy the part of the URL after the `?`.\n:::","example":"/genossenschaften/district=wien-1-innere-stadt&district=wien-2-leopoldstadt&district=wien-3-landstrasse&district=wien-4-wieden&district=wien-5-margareten&district=wien-6-mariahilf&district=wien-7-neubau&district=wien-8-josefstadt&district=wien-9-alsergrund&district=wien-10-favoriten&district=wien-11-simmering&district=wien-12-meidling&district=wien-13-hietzing&district=wien-14-penzing&district=wien-15-rudolfsheim-fuenfhaus&district=wien-16-ottakring&district=wien-17-hernals&district=wien-18-waehring&district=wien-19-doebling&district=wien-20-brigittenau&district=wien-21-floridsdorf&district=wien-22-donaustadt&district=wien-23-liesing&has_rent=on&has_rent_option=on&status=available&status=construction&cost=1000&room=2&size=50&has_property=off&has_rent=on&has_rent_option=on&status=available&status=construction&status=planned&type=residence&type=project","parameters":{"cost":"Miete bis (in €, number)","district":"Bezirk (string, multiple)","size":"Größe ab (in m², number)","room":"Zimmer ab (number)","genossenschaft":"Bauvereinigung (string, multiple)","own_funds":"Eigenkapital bis","has_property":"Eigentum (`on` | `off`)","has_rent":"Miete (`on` | `off`)","has_rent_option":"Miete mit Kaufoption (`on` | `off`)","status":"multiple, `available` | `construction` | `planned`","type":"multiple, `residence` | `project`","keywords":"Keyword search"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />


Note that all parameters are optional and many can be specified multiple times
(e.g. `district=wien-1-innere-stadt&district=wien-2-leopoldstadt`).

Only returns the first page of search results, allowing you to keep track of
newly added apartments. If you're looking for an apartment, make sure to also
look through the other pages on the website.

::: tip
To get your query URL, go to https://genossenschaften.immo and apply all
desired filters. If you want to filter by (all districts of a) federal state
(e.g. `/immobilien/regionen/wien/`), please open the district selector and
de- and re-select any district, so that the region in the URL gets replaced
with a number of `district` parameters. Once you've set up all desired
filters, copy the part of the URL after the `?`.
:::

## 趨勢科技防詐達人 <Site url="getdr.com"/>

### Unknown <Site url="getdr.com/" size="sm" />

<Route namespace="getdr" :data='{"path":"/","radar":[{"source":["getdr.com/"],"target":""}],"name":"Unknown","maintainers":["nczitzk"],"url":"getdr.com/","location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 环球法律评论 <Site url="globallawreview.org"/>

### Unknown <Site url="globallawreview.org/Magazine/GetIssueContentList" size="sm" />

<Route namespace="globallawreview" :data='{"path":"/","radar":[{"source":["globallawreview.org/Magazine/GetIssueContentList","globallawreview.org/"],"target":""}],"name":"Unknown","maintainers":["nczitzk"],"url":"globallawreview.org/Magazine/GetIssueContentList","location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## Grub Street <Site url="grubstreet.com"/>

### Unknown <Site url="grubstreet.com/" size="sm" />

<Route namespace="grubstreet" :data='{"path":"/","radar":[{"source":["grubstreet.com/"],"target":""}],"name":"Unknown","maintainers":["loganrockmore"],"url":"grubstreet.com/","location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 观海新闻 <Site url="guanhai.com.cn"/>

### Unknown <Site url="guanhai.com.cn/" size="sm" />

<Route namespace="guanhai" :data='{"path":"/","radar":[{"source":["guanhai.com.cn/"],"target":""}],"name":"Unknown","maintainers":["TonyRL"],"url":"guanhai.com.cn/","location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## HACKER TALK 黑客说 <Site url="hackertalk.net"/>

### Unknown <Site url="hackertalk.net/" size="sm" />

<Route namespace="hackertalk" :data='{"path":"/","radar":[{"source":["hackertalk.net/"],"target":""}],"name":"Unknown","maintainers":["hyoban"],"url":"hackertalk.net/","location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## HackYourNews <Site url="hackyournews.com"/>

### Unknown <Site url="hackyournews.com/" size="sm" />

<Route namespace="hackyournews" :data='{"path":"/","radar":[{"source":["hackyournews.com/"],"target":""}],"name":"Unknown","maintainers":["ftiasch"],"url":"hackyournews.com/","location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## HKJunkCall 資訊中心 <Site url="hkjunkcall.com"/>

### Unknown <Site url="hkjunkcall.com/" size="sm" />

<Route namespace="hkjunkcall" :data='{"path":"/","radar":[{"source":["hkjunkcall.com/"],"target":""}],"name":"Unknown","maintainers":["nczitzk"],"url":"hkjunkcall.com/","location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## IELTS 雅思 <Site url="ielts.neea.cn"/>

### Unknown <Site url="ielts.neea.cn/allnews" size="sm" />

<Route namespace="ielts" :data='{"path":"/","radar":[{"source":["ielts.neea.cn/allnews"],"target":""}],"name":"Unknown","maintainers":["zenxds"],"url":"ielts.neea.cn/allnews","location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 人人都是自媒体 <Site url="www.iiilab.com"/>

### Unknown <Site url="www.iiilab.com/" size="sm" />

<Route namespace="iiilab" :data='{"path":"/","radar":[{"source":["www.iiilab.com/"],"target":""}],"name":"Unknown","maintainers":["Joey"],"url":"www.iiilab.com/","location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## Japanpost <Site url="trackings.post.japanpost.jp"/>

### Track & Trace Service <Site url="trackings.post.japanpost.jp/services/srv/search/" size="sm" />

<Route namespace="japanpost" :data='{"name":"Track & Trace Service","path":"/track/:reqCode/:locale?","example":"/japanpost/track/EJ123456789JP/en","url":"trackings.post.japanpost.jp/services/srv/search/","categories":["other"],"maintainers":["tuzi3040"],"parameters":{"reqCode":"Package Number","locale":"Language, default to japanese `ja`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"description":"| Japanese | English |\n| -------- | ------- |\n| ja       | en      |","zh":{"name":"邮件追踪查询","description":"| 日语 | 英语 |\n| ---- | ---- |\n| ja   | en   |"},"ja":{"name":"郵便追跡サービス","description":"| 日本語 | 英語 |\n| ---- | ---- |\n| ja   | en   |"},"location":"router.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| Japanese | English |
| -------- | ------- |
| ja       | en      |

## 交流岛资源网 <Site url="jiaoliudao.com"/>

### Unknown <Site url="jiaoliudao.com/" size="sm" />

<Route namespace="jiaoliudao" :data='{"path":"/","radar":[{"source":["jiaoliudao.com/"],"target":""}],"name":"Unknown","maintainers":["TonyRL"],"url":"jiaoliudao.com/","location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 精真估 <Site url="www.jingzhengu.com"/>

### 资讯 <Site url="www.jingzhengu.com" size="sm" />

<Route namespace="jingzhengu" :data='{"path":"/news","categories":["other"],"example":"/jingzhengu/news","radar":[{"source":["www.jingzhengu.com"]}],"name":"资讯","maintainers":["TonyRL"],"url":"www.jingzhengu.com","location":"news.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## jseea <Site url="jseea.cn"/>

### Unknown <Site url="jseea.cn" size="sm" />

<Route namespace="jseea" :data='{"path":"/news/:type?","radar":[{"source":["jseea.cn/webfile/news/:type"],"target":"/news/:type"}],"name":"Unknown","maintainers":["schen1024"],"location":"news.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## Kantar Worldpanel <Site url="kantarworldpanel.com"/>

### Unknown <Site url="kantarworldpanel.com" size="sm" />

<Route namespace="kantarworldpanel" :data='{"path":"/:region?/:category{.+}?","name":"Unknown","maintainers":[],"location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## KeePass <Site url="keepass.info"/>

### Unknown <Site url="keepass.info" size="sm" />

<Route namespace="keepass" :data='{"path":"/","name":"Unknown","maintainers":["TonyRL"],"location":"news.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 快递 100 <Site url="kuaidi100.com"/>

### 快递订单追踪 <Site url="kuaidi100.com" size="sm" />

<Route namespace="kuaidi100" :data='{"path":"/track/:number/:id/:phone?","categories":["other"],"example":"/kuaidi100/track/shunfeng/SF1007896781640/0383","parameters":{"number":"快递公司代号","id":"订单号","phone":"手机号后四位（仅顺丰）"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"快递订单追踪","maintainers":["NeverBehave"],"description":"快递公司代号如果不能确定，可通过下方快递列表获得。\n\n::: warning\n  1.  构造链接前请确认所有参数正确：错误`快递公司 - 订单号`组合将会缓存信息一小段时间防止产生无用查询\n  2.  正常查询的订单在未签收状态下不会被缓存：请控制查询频率\n  3.  订单完成后请尽快取消订阅，避免资源浪费\n:::","location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

快递公司代号如果不能确定，可通过下方快递列表获得。

::: warning
  1.  构造链接前请确认所有参数正确：错误`快递公司 - 订单号`组合将会缓存信息一小段时间防止产生无用查询
  2.  正常查询的订单在未签收状态下不会被缓存：请控制查询频率
  3.  订单完成后请尽快取消订阅，避免资源浪费
:::

### 支持的快递公司列表 <Site url="kuaidi100.com/" size="sm" />

<Route namespace="kuaidi100" :data='{"path":"/company","categories":["other"],"example":"/kuaidi100/company","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["kuaidi100.com/"]}],"name":"支持的快递公司列表","maintainers":["NeverBehave"],"url":"kuaidi100.com/","location":"supported-company.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## Layoffs.fyi <Site url="layoffs.fyi"/>

### Unknown <Site url="layoffs.fyi/" size="sm" />

<Route namespace="layoffs" :data='{"path":"/","radar":[{"source":["layoffs.fyi/"],"target":""}],"name":"Unknown","maintainers":["BrandNewLifeJackie26"],"url":"layoffs.fyi/","location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 轻之国度 <Site url="lightNovel.us"/>

### Unknown <Site url="lightNovel.us/" size="sm" />

<Route namespace="lightnovel" :data='{"path":"/:keywords/:security_key?","radar":[{"source":["lightNovel.us/"],"target":"/:keywords/:security_key"}],"name":"Unknown","maintainers":["nightmare-mio"],"url":"lightNovel.us/","location":"light-novel.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## Link3 <Site url="link3.to"/>

### Link3 Events <Site url="link3.to" size="sm" />

<Route namespace="link3" :data='{"path":"/events","name":"Link3 Events","url":"link3.to","maintainers":["cxheng315"],"example":"/link3/events","categories":["other"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["link3.to/events"],"target":"/events"}],"location":"events.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Link3 Profile <Site url="link3.to" size="sm" />

<Route namespace="link3" :data='{"path":"/profile/:handle","name":"Link3 Profile","url":"link3.to","maintainers":["cxheng315"],"example":"/link3/profile/synfutures_defi","parameters":{"handle":"Profile handle"},"categories":["other"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["link3.to/:handle"],"target":"/:handle"}],"location":"profile.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## LinkedIn <Site url="linkedin.com"/>

### Jobs <Site url="linkedin.com" size="sm" />

<Route namespace="linkedin" :data='{"path":"/cn/jobs/:keywords?","categories":["other"],"example":"/linkedin/cn/jobs/Software","parameters":{"keywords":"搜索关键字"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Jobs","maintainers":["bigfei"],"description":"另外，可以通过添加额外的以下 query 参数来输出满足特定要求的工作职位：\n\n| 参数       | 描述                                              | 举例                                                    | 默认值  |\n| ---------- | ------------------------------------------------- | ------------------------------------------------------- | ------- |\n| `geo`      | geo 编码                                          | 102890883（中国）、102772228（上海）、103873152（北京） | 空      |\n| `remote`   | 是否只显示远程工作                                | `true/false`                                            | `false` |\n| `location` | 工作地点                                          | `china/shanghai/beijing`                                | 空      |\n| `relevant` | 排序方式 (true: 按相关性排序，false： 按日期排序) | `true/false`                                            | `false` |\n| `period`   | 发布时间                                          | `1/7/30`                                                | 空      |\n\n  例如：\n  [`/linkedin/cn/jobs/Software?location=shanghai&period=1`](https://rsshub.app/linkedin/cn/jobs/Software?location=shanghai&period=1): 查找所有在上海的今日发布的所有 Software 工作\n\n  **为了方便起见，建议您在 [LinkedIn.cn](https://www.linkedin.cn/incareer/jobs/search) 上进行搜索，并使用 [RSSHub Radar](https://github.com/DIYgod/RSSHub-Radar) 加载特定的 feed。**","location":"cn/index.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

另外，可以通过添加额外的以下 query 参数来输出满足特定要求的工作职位：

| 参数       | 描述                                              | 举例                                                    | 默认值  |
| ---------- | ------------------------------------------------- | ------------------------------------------------------- | ------- |
| `geo`      | geo 编码                                          | 102890883（中国）、102772228（上海）、103873152（北京） | 空      |
| `remote`   | 是否只显示远程工作                                | `true/false`                                            | `false` |
| `location` | 工作地点                                          | `china/shanghai/beijing`                                | 空      |
| `relevant` | 排序方式 (true: 按相关性排序，false： 按日期排序) | `true/false`                                            | `false` |
| `period`   | 发布时间                                          | `1/7/30`                                                | 空      |

  例如：
  [`/linkedin/cn/jobs/Software?location=shanghai&period=1`](https://rsshub.app/linkedin/cn/jobs/Software?location=shanghai&period=1): 查找所有在上海的今日发布的所有 Software 工作

  **为了方便起见，建议您在 [LinkedIn.cn](https://www.linkedin.cn/incareer/jobs/search) 上进行搜索，并使用 [RSSHub Radar](https://github.com/DIYgod/RSSHub-Radar) 加载特定的 feed。**

## 龙空 <Site url="lkong.com"/>

### Unknown <Site url="lkong.com" size="sm" />

<Route namespace="lkong" :data='{"path":"/forum/:id?/:digest?","radar":[{"source":["lkong.com/forum/:id","lkong.com/"]}],"name":"Unknown","maintainers":["nczitzk","ma6254"],"location":"forum.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="lkong.com" size="sm" />

<Route namespace="lkong" :data='{"path":"/thread/:id","radar":[{"source":["lkong.com/thread/:id","lkong.com/"]}],"name":"Unknown","maintainers":["nczitzk","ma6254"],"location":"thread.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## LogoNews 标志情报局 <Site url="logonews.cn"/>

### Unknown <Site url="logonews.cn/" size="sm" />

<Route namespace="logonews" :data='{"path":["/work/tags/:tag","/tag/:tag","*"],"radar":[{"source":["logonews.cn/work/tags/:tag"]}],"name":"Unknown","maintainers":["nczitzk"],"url":"logonews.cn/","description":"如 [中国 - 标志情报局](https://www.logonews.cn/tag/china) 的 URL 为 `https://www.logonews.cn/tag/china`，可得路由为 [`/logonews/tag/china`](https://rsshub.app/logonews/tag/china)。","location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

如 [中国 - 标志情报局](https://www.logonews.cn/tag/china) 的 URL 为 `https://www.logonews.cn/tag/china`，可得路由为 [`/logonews/tag/china`](https://rsshub.app/logonews/tag/china)。

## 四月网 <Site url="news.m4.cn"/>

### Unknown <Site url="news.m4.cn" size="sm" />

<Route namespace="m4" :data='{"path":"/:id?/:category{.+}?","name":"Unknown","maintainers":[],"location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 中国的中古 <Site url="medieval-china.club"/>

### Unknown <Site url="medieval-china.club/" size="sm" />

<Route namespace="medieval-china" :data='{"path":"/","radar":[{"source":["medieval-china.club/"],"target":""}],"name":"Unknown","maintainers":["artefaritaKuniklo"],"url":"medieval-china.club/","location":"post.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## Metacritic <Site url="metacritic.com"/>

### Unknown <Site url="metacritic.com" size="sm" />

<Route namespace="metacritic" :data='{"path":"/:type?/:sort?/:filter?","name":"Unknown","maintainers":[],"location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## The Metropolitan Museum of Art <Site url="www.metmuseum.org"/>

### Unknown <Site url="www.metmuseum.org" size="sm" />

<Route namespace="metmuseum" :data='{"path":"/exhibitions/:state?","name":"Unknown","maintainers":[],"location":"exhibitions.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## MiniFlux <Site url="miniflux.app"/>

### Feed entry <Site url="miniflux.app" size="sm" />

<Route namespace="miniflux" :data='{"path":"/entry/:feeds/:parameters?","description":"\n1. Support to get all content: You can obtain the content of all subscription sources by using keywords such as `/miniflux/all` or `/miniflux/default`.\n2. Support to get the subscription content of a specific subscription source by its ID. Please obtain the subscription source ID on the page where it is located under `Sources` (shortcut keys `g` `f`). The URL for each category (or subscription source) displays its ID information. There are several format options available:\n    1. Support `/miniflux/feed=[feed_id]`, please replace `[feed_id]` with the actual ID of the subscribed feed (note that it should be just a number without brackets).\n    2. Support subscribing to multiple feeds using `/miniflux/feed=[feed1_id]&feed=[feed2_id]` or `/miniflux/feeds=[feed1_id]&[feed2_id]`.\n    3. Additionally, you can use shorthand notation by directly using feed IDs: `/miniflux/[feed1_id]&[feed2_id]`.\n3. Further customization options are available based on your needs:\n    1. All parameters/options provided by MiniFlux are supported ([link](https://miniflux.app/docs/api.html#endpoint-get-feed-entries)). As noted in their documentation, multiple filtering options should be connected with `&`. Except for `status`, only the first occurrence of duplicate filter options will be considered.\n    2. Specifically, this route defaults to sorting entries from new to old (`direction=desc`).\n    3. Moreover, this route supports additional options including:\n        - Using the `feed_name` parameter to control title formatting; setting `feed_name=1` will display each title as \"Article Title | Feed Name,\" while default is set at `0`, showing only article titles.\n        - Utilizing the `mark` parameter to specify actions after fetching subscriptions in RSSHub, such as maintaining unchanged state (`unchanged`, default), marking as read (`read`), removing (`removed`) or marking as unread (`unread`). Note that marking as read should not simply be understood as a means for implementing synchronization services; rather, it functions more like an aid for MiniFlux&#39;s automatic cleaning feature.\n        - Future support may include utilizing the `link` parameter to control output URLs (this functionality requires corresponding interfaces from MiniFlux). It could involve generating URLs through MiniFlux entity sharing features or original content links.\n        - The output content quantity can be controlled via the &#39;limit&#39; parameter; although all matching contents are typically outputted by default, **it is recommended that users set this parameter**.\n    ","categories":["other"],"example":"/miniflux/feeds=1&2&3/mark=read&limit=7&status=unread","parameters":{"feeds":"Subscribe source ID or get all.","parameters":"Filter and set parameters, use `&` to connect multiple."},"features":{"requireConfig":[{"name":"MINIFLUX_INSTANCE","description":"The instance used by the user, by default, is the official MiniFlux [paid service address](https://reader.miniflux.app)"},{"name":"MINIFLUX_TOKEN","description":"User&#39;s API key, please log in to the instance used and go to `Settings` -> `API Key` -> `Create a new API key` to obtain."}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Feed entry","maintainers":["emdoe","DIYgod"],"location":"entry.ts","heat":0,"topFeeds":[]}' :test='undefined' />


1. Support to get all content: You can obtain the content of all subscription sources by using keywords such as `/miniflux/all` or `/miniflux/default`.
2. Support to get the subscription content of a specific subscription source by its ID. Please obtain the subscription source ID on the page where it is located under `Sources` (shortcut keys `g` `f`). The URL for each category (or subscription source) displays its ID information. There are several format options available:
    1. Support `/miniflux/feed=[feed_id]`, please replace `[feed_id]` with the actual ID of the subscribed feed (note that it should be just a number without brackets).
    2. Support subscribing to multiple feeds using `/miniflux/feed=[feed1_id]&feed=[feed2_id]` or `/miniflux/feeds=[feed1_id]&[feed2_id]`.
    3. Additionally, you can use shorthand notation by directly using feed IDs: `/miniflux/[feed1_id]&[feed2_id]`.
3. Further customization options are available based on your needs:
    1. All parameters/options provided by MiniFlux are supported ([link](https://miniflux.app/docs/api.html#endpoint-get-feed-entries)). As noted in their documentation, multiple filtering options should be connected with `&`. Except for `status`, only the first occurrence of duplicate filter options will be considered.
    2. Specifically, this route defaults to sorting entries from new to old (`direction=desc`).
    3. Moreover, this route supports additional options including:
        - Using the `feed_name` parameter to control title formatting; setting `feed_name=1` will display each title as "Article Title | Feed Name," while default is set at `0`, showing only article titles.
        - Utilizing the `mark` parameter to specify actions after fetching subscriptions in RSSHub, such as maintaining unchanged state (`unchanged`, default), marking as read (`read`), removing (`removed`) or marking as unread (`unread`). Note that marking as read should not simply be understood as a means for implementing synchronization services; rather, it functions more like an aid for MiniFlux's automatic cleaning feature.
        - Future support may include utilizing the `link` parameter to control output URLs (this functionality requires corresponding interfaces from MiniFlux). It could involve generating URLs through MiniFlux entity sharing features or original content links.
        - The output content quantity can be controlled via the 'limit' parameter; although all matching contents are typically outputted by default, **it is recommended that users set this parameter**.
    

### Subscriptions <Site url="miniflux.app" size="sm" />

<Route namespace="miniflux" :data='{"path":"/subscription/:parameters?","description":"\n1. If no specific parameters are specified, all subscription sources will be output by default.\n2. Please obtain the Category ID or Subscription Source ID on the `Category` (shortcut `g` `c`) or `Source` (shortcut `g` `f`) page. The URL of each category (or subscription source) will display its ID information.\n3. Support for category names and category IDs, to output multiple categories, please repeat entering `category=` and connect with `&`, or directly use **English** commas between different category names. For example, you can subscribe through `/miniflux/subscription/category=technology&category=1` or `/miniflux/subscription/categories=technology,1`.\n4. Support specifying the subscription source name or subscription source ID, similar to setting categories. For example, you can subscribe through `/miniflux/subscription/feed=1&feed=Archdaily` or `/miniflux/subscription/feeds=1,Archdaily`.\n5. Support simultaneously specifying subscription source information and category information; it will output subscription sources that meet the selected categories&#39; criteria. Consider an example: by using `/miniflux/subscription/feeds=1,archdaily&category=art,7`, if the Subscription Source ID is 1 or the Subscription Source Name is ArchDaily indeed falls under Category &#39;art&#39; or has a Category ID of 7, then output that subscription source information.\n    ","categories":["other"],"example":"/miniflux/subscription/categories=test","parameters":{"parameters":"Category name or category ID or/and subscription source name or subscription source ID"},"features":{"requireConfig":[{"name":"MINIFLUX_INSTANCE","description":"The instance used by the user, by default, is the official MiniFlux [paid service address](https://reader.miniflux.app)"},{"name":"MINIFLUX_TOKEN","description":"User&#39;s API key, please log in to the instance used and go to `Settings` -> `API Key` -> `Create a new API key` to obtain."}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Subscriptions","maintainers":["emdoe","DIYgod"],"location":"subscription.ts","heat":0,"topFeeds":[]}' :test='undefined' />


1. If no specific parameters are specified, all subscription sources will be output by default.
2. Please obtain the Category ID or Subscription Source ID on the `Category` (shortcut `g` `c`) or `Source` (shortcut `g` `f`) page. The URL of each category (or subscription source) will display its ID information.
3. Support for category names and category IDs, to output multiple categories, please repeat entering `category=` and connect with `&`, or directly use **English** commas between different category names. For example, you can subscribe through `/miniflux/subscription/category=technology&category=1` or `/miniflux/subscription/categories=technology,1`.
4. Support specifying the subscription source name or subscription source ID, similar to setting categories. For example, you can subscribe through `/miniflux/subscription/feed=1&feed=Archdaily` or `/miniflux/subscription/feeds=1,Archdaily`.
5. Support simultaneously specifying subscription source information and category information; it will output subscription sources that meet the selected categories' criteria. Consider an example: by using `/miniflux/subscription/feeds=1,archdaily&category=art,7`, if the Subscription Source ID is 1 or the Subscription Source Name is ArchDaily indeed falls under Category 'art' or has a Category ID of 7, then output that subscription source information.
    

## Naturalism.org <Site url="naturalism.org"/>

### What's New <Site url="naturalism.org" size="sm" />

<Route namespace="naturalism" :data='{"path":"/","categories":["other"],"example":"/naturalism","radar":[{"source":["naturalism.org"]}],"name":"What&#39;s New","maintainers":["TonyRL"],"url":"naturalism.org","location":"new.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## 东北师范大学 <Site url="sohac.nenu.edu.cn"/>

### Unknown <Site url="sohac.nenu.edu.cn" size="sm" />

<Route namespace="nenu" :data='{"path":"/sohac/*","name":"Unknown","maintainers":[],"location":"sohac.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="sohac.nenu.edu.cn" size="sm" />

<Route namespace="nenu" :data='{"path":"/yjsy/*","name":"Unknown","maintainers":[],"location":"yjsy.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## Netflav <Site url="netflav.com"/>

### Unknown <Site url="netflav.com/" size="sm" />

<Route namespace="netflav" :data='{"path":"/","radar":[{"source":["netflav.com/"],"target":""}],"name":"Unknown","maintainers":["TonyRL"],"url":"netflav.com/","features":{"nsfw":true},"location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 中国国家图书馆 <Site url="read.nlc.cn"/>

### 读者云平台 <Site url="read.nlc.cn" size="sm" />

<Route namespace="nlc" :data='{"path":"/read/:type?","categories":["other"],"example":"/nlc/read/电子图书","parameters":{"type":"分类，见下表，默认为电子图书"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"读者云平台","maintainers":["nczitzk"],"description":"| [电子图书](http://read.nlc.cn/outRes/outResList?type=电子图书) | [电子期刊](http://read.nlc.cn/outRes/outResList?type=电子期刊) | [电子论文](http://read.nlc.cn/outRes/outResList?type=电子论文) | [电子报纸](http://read.nlc.cn/outRes/outResList?type=电子报纸) | [音视频](http://read.nlc.cn/outRes/outResList?type=音视频) |\n| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------- |\n\n| [标准专利](http://read.nlc.cn/outRes/outResList?type=标准专利) | [工具书](http://read.nlc.cn/outRes/outResList?type=工具书) | [少儿资源](http://read.nlc.cn/outRes/outResList?type=少儿资源) |\n| -------------------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------- |","location":"read.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"Error: STACK_TRACE_ERROR\n    at task (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:633:27)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:660:16)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:457:28)\n    at chain (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/chunk-tasks.js:9:14)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:72:12\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:40\n    at runWithSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1588:8)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:10)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:739:54)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at collectTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1048:25)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1556:17)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:85:25)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:153:2)\n    at executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/init-forks.aqTzCSR2.js:29:4)"}' />

| [电子图书](http://read.nlc.cn/outRes/outResList?type=电子图书) | [电子期刊](http://read.nlc.cn/outRes/outResList?type=电子期刊) | [电子论文](http://read.nlc.cn/outRes/outResList?type=电子论文) | [电子报纸](http://read.nlc.cn/outRes/outResList?type=电子报纸) | [音视频](http://read.nlc.cn/outRes/outResList?type=音视频) |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------- |

| [标准专利](http://read.nlc.cn/outRes/outResList?type=标准专利) | [工具书](http://read.nlc.cn/outRes/outResList?type=工具书) | [少儿资源](http://read.nlc.cn/outRes/outResList?type=少儿资源) |
| -------------------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------- |

## Notion <Site url="notion.so"/>

::: warning
Need to set up Notion integration, please refer to [Route-specific Configurations](https://docs.rsshub.app/deploy/config#route-specific-configurations) for details.
:::

::: tip Recommendation
It is recommended to use with clipping tools such as Notion Web Clipper.
:::

### Database <Site url="notion.so" size="sm" />

<Route namespace="notion" :data='{"path":"/database/:databaseId","categories":["other"],"example":"/notion/database/a7cc133b68454f138011f1530a13531e","parameters":{"databaseId":"Database ID"},"features":{"requireConfig":[{"name":"NOTION_TOKEN","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["notion.so/:id"],"target":"/database/:id"}],"name":"Database","maintainers":["curly210102"],"description":"There is an optional query parameter called `properties=` that can be used to customize field mapping. There are three built-in fields: author, pubTime and link, which can be used to add additional information.\n\n  For example, if you have set up three properties in your database - \"Publish Time\", \"Author\", and \"Original Article Link\" - then execute the following JavaScript code to get the result for the properties parameter.\n\n  ```js\n  encodeURIComponent(JSON.stringify({\"pubTime\": \"Publish Time\", \"author\": \"Author\", \"link\": \"Original Article Link\"}))\n  ```\n\n  There is an optional query parameter called `query=` that can be used to customize the search rules for your database, such as custom sorting and filtering rules.\n\n  please refer to the [Notion API documentation](https://developers.notion.com/reference/post-database-query) and execute `encodeURIComponent(JSON.stringify(custom rules))` to provide the query parameter.","location":"database.ts","heat":0,"topFeeds":[]}' :test='undefined' />

There is an optional query parameter called `properties=` that can be used to customize field mapping. There are three built-in fields: author, pubTime and link, which can be used to add additional information.

  For example, if you have set up three properties in your database - "Publish Time", "Author", and "Original Article Link" - then execute the following JavaScript code to get the result for the properties parameter.

  ```js
  encodeURIComponent(JSON.stringify({"pubTime": "Publish Time", "author": "Author", "link": "Original Article Link"}))
  ```

  There is an optional query parameter called `query=` that can be used to customize the search rules for your database, such as custom sorting and filtering rules.

  please refer to the [Notion API documentation](https://developers.notion.com/reference/post-database-query) and execute `encodeURIComponent(JSON.stringify(custom rules))` to provide the query parameter.

## 巨量算数 - 算数指数 <Site url="trendinsight.oceanengine.com"/>

### Unknown <Site url="trendinsight.oceanengine.com" size="sm" />

<Route namespace="oceanengine" :data='{"path":"/index/:keyword/:channel?","name":"Unknown","maintainers":["Jkker"],"location":"arithmetic-index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 我不是盐神 <Site url="onehu.xyz"/>

### Unknown <Site url="onehu.xyz" size="sm" />

<Route namespace="onehu" :data='{"path":"/","name":"Unknown","maintainers":["ruoshui9527"],"location":"common.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## OpenWrt <Site url="openwrt.org"/>

### Unknown <Site url="openwrt.org" size="sm" />

<Route namespace="openwrt" :data='{"path":"/releases/:brand/:model","radar":[{"source":["openwrt.org/toh/:band/:model"],"target":"/releases/:model"}],"name":"Unknown","maintainers":[],"location":"releases.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## Proceedings of The National Academy of Sciences <Site url="pnas.org"/>

### Unknown <Site url="pnas.org/*topicPath" size="sm" />

<Route namespace="pnas" :data='{"path":"/:topicPath{.+}?","radar":[{"source":["pnas.org/*topicPath"],"target":"/:topicPath"}],"name":"Unknown","maintainers":[],"url":"pnas.org/*topicPath","location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## PwC Strategy& <Site url="strategyand.pwc.com"/>

### Sustainability <Site url="strategyand.pwc.com/at/en/functions/sustainability-strategy/publications.html" size="sm" />

<Route namespace="pwc" :data='{"path":"/strategyand/sustainability","categories":["other"],"example":"/pwc/strategyand/sustainability","radar":[{"source":["strategyand.pwc.com/at/en/functions/sustainability-strategy/publications.html","strategyand.pwc.com/"]}],"name":"Sustainability","maintainers":["mintyfrankie"],"url":"strategyand.pwc.com/at/en/functions/sustainability-strategy/publications.html","location":"sustainability.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 千篇网 <Site url="qianp.com"/>

### Unknown <Site url="qianp.com" size="sm" />

<Route namespace="qianp" :data='{"path":"/news/:path{.+}?","name":"Unknown","maintainers":[],"location":"news.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## Rare Historical Photos <Site url="rarehistoricalphotos.com"/>

### Unknown <Site url="rarehistoricalphotos.com/" size="sm" />

<Route namespace="rarehistoricalphotos" :data='{"path":"/","radar":[{"source":["rarehistoricalphotos.com/"],"target":""}],"name":"Unknown","maintainers":["TonyRL"],"url":"rarehistoricalphotos.com/","location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## ui.dev <Site url="bytes.dev"/>

### Unknown <Site url="bytes.dev/issues" size="sm" />

<Route namespace="reactnewsletter" :data='{"path":"/","radar":[{"source":["bytes.dev/issues","bytes.dev/"],"target":""}],"name":"Unknown","maintainers":["meixger"],"url":"bytes.dev/issues","location":"reactnewsletter.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## ResearchGate <Site url="researchgate.net"/>

### Unknown <Site url="researchgate.net" size="sm" />

<Route namespace="researchgate" :data='{"path":"/publications/:id","radar":[{"source":["researchgate.net/profile/:username"],"target":"/publications/:username"}],"name":"Unknown","maintainers":[],"location":"publications.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## Resonac <Site url="www.resonac.com"/>

### Products <Site url="www.resonac.com" size="sm" />

<Route namespace="resonac" :data='{"path":"/products","categories":["other"],"example":"/resonac/products","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Products","maintainers":["valuex"],"description":"","location":"products.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## Routledge <Site url="routledge.com"/>

### Unknown <Site url="routledge.com" size="sm" />

<Route namespace="routledge" :data='{"path":"/:bookName/book-series/:bookId","radar":[{"source":["routledge.com/:bookName/book-series/:bookId"]}],"name":"Unknown","maintainers":["TonyRL"],"location":"book-series.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 跑野大爆炸 <Site url="runtrail.cn"/>

### Unknown <Site url="runtrail.cn/" size="sm" />

<Route namespace="runtrail" :data='{"path":"/","radar":[{"source":["runtrail.cn/"],"target":""}],"name":"Unknown","maintainers":["TonyRL"],"url":"runtrail.cn/","location":"posts.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## Corona Virus Disease 2019 <Site url="scmp.com"/>

### South China Morning Post - China coronavirus outbreak <Site url="scmp.com" size="sm" />

<Route namespace="scmp" :data='{"path":"/coronavirus","categories":["other"],"example":"/scmp/coronavirus","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"South China Morning Post - China coronavirus outbreak","maintainers":["DIYgod"],"location":"coronavirus.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 301 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## SecIN 信息安全技术社区 <Site url="sec-in.com"/>

### Unknown <Site url="sec-in.com" size="sm" />

<Route namespace="sec-in" :data='{"path":"/","name":"Unknown","maintainers":["p7e4"],"location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## Shopify <Site url="shopify.com"/>

### App reviews <Site url="shopify.com" size="sm" />

<Route namespace="shopify" :data='{"path":"/apps/:handle/reviews/:page?","example":"/shopify/apps/flow/reviews","parameters":{"handle":"例如一个 App 的链接 https://apps.shopify.com/flow，其中 flow 就是指的是 handle"},"name":"App reviews","maintainers":["PrintNow"],"radar":[{"source":["apps.shopify.com/:handle"]}],"location":"apps/[handle].reviews.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

### App store search <Site url="shopify.com" size="sm" />

<Route namespace="shopify" :data='{"path":"/apps/search/:q","example":"/shopify/apps/search/flow","parameters":{"q":"需要搜索的 App"},"name":"App store search","maintainers":["PrintNow"],"radar":[{"source":["apps.shopify.com/search"]}],"location":"apps/search.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## 水果派 <Site url="shuiguopai.com"/>

### Unknown <Site url="shuiguopai.com/" size="sm" />

<Route namespace="shuiguopai" :data='{"path":"/","radar":[{"source":["shuiguopai.com/"],"target":""}],"name":"Unknown","maintainers":["nczitzk"],"url":"shuiguopai.com/","features":{"nsfw":true},"location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 星洲网 <Site url="sinchew.com.my"/>

### Unknown <Site url="sinchew.com.my/" size="sm" />

<Route namespace="sinchew" :data='{"path":"*","radar":[{"source":["sinchew.com.my/"],"target":""}],"name":"Unknown","maintainers":[],"url":"sinchew.com.my/","location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 搜狗 <Site url="www.sogou.com"/>

### 特色 LOGO <Site url="www.sogou.com" size="sm" />

<Route namespace="sogou" :data='{"path":"/doodles","categories":["other"],"example":"/sogou/doodles","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"特色 LOGO","maintainers":["xyqfer"],"location":"doodles.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 311910160676 to be less than 311040000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:36:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 搜索 <Site url="www.sogou.com" size="sm" />

<Route namespace="sogou" :data='{"path":"/search/:keyword","categories":["other"],"example":"/sogou/search/rss","parameters":{"keyword":"搜索关键词"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"搜索","maintainers":["CaoMeiYouRen"],"location":"search.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## 上海第二工业大学 <Site url="jwc.sspu.edu.cn"/>

### Unknown <Site url="jwc.sspu.edu.cn" size="sm" />

<Route namespace="sspu" :data='{"path":"/jwc/:listId","radar":[{"source":["jwc.sspu.edu.cn/jwc/:listId/list.htm"]}],"name":"Unknown","maintainers":["TonyRL"],"location":"jwc.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="jwc.sspu.edu.cn" size="sm" />

<Route namespace="sspu" :data='{"path":"/pe/:id?","radar":[{"source":["pe2016.sspu.edu.cn/:id/list.htm"],"target":"/pe/:id"}],"name":"Unknown","maintainers":["nczitzk"],"location":"pe.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## Stratechery by Ben Thompson <Site url="blog.stratechery.com"/>

### Unknown <Site url="blog.stratechery.com" size="sm" />

<Route namespace="stratechery" :data='{"path":"/","name":"Unknown","maintainers":["chazeon"],"location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## Sustainability Magazine <Site url="sustainabilitymag.com"/>

### Articles <Site url="sustainabilitymag.com/articles" size="sm" />

<Route namespace="sustainabilitymag" :data='{"path":"/articles","name":"Articles","url":"sustainabilitymag.com/articles","maintainers":["mintyfrankie"],"categories":["other"],"example":"/sustainabilitymag/articles","radar":[{"source":["https://sustainabilitymag.com/articles"],"target":"/sustainabilitymag/articles"}],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"location":"articles.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## RSSHub Test 

### Test 

<Route namespace="test" :data='{"path":"/:id/:params?","name":"Test","maintainers":["DIYgod","NeverBehave"],"location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## The News Lens 關鍵評論 <Site url="thenewslens.com"/>

### Unknown <Site url="thenewslens.com" size="sm" />

<Route namespace="thenewslens" :data='{"path":"*","name":"Unknown","maintainers":[],"location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## Transcript Forest <Site url="www.transcriptforest.com"/>

### Unknown <Site url="www.transcriptforest.com/en/channel" size="sm" />

<Route namespace="transcriptforest" :data='{"path":"/:channel?","radar":[{"source":["www.transcriptforest.com/en/channel"],"target":""}],"name":"Unknown","maintainers":["nczitzk"],"url":"www.transcriptforest.com/en/channel","location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## Tribal Football <Site url="tribalfootball.com"/>

### Unknown <Site url="tribalfootball.com/" size="sm" />

<Route namespace="tribalfootball" :data='{"path":"/","radar":[{"source":["tribalfootball.com/"],"target":""}],"name":"Unknown","maintainers":["Rongronggg9"],"url":"tribalfootball.com/","location":"latest.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## TV Tropes <Site url="tvtropes.org"/>

### Featured <Site url="tvtropes.org" size="sm" />

<Route namespace="tvtropes" :data='{"path":"/featured/:category?","categories":["other"],"example":"/tvtropes/featured/today","parameters":{"category":"Category, see below, Today&#39;s Featured Trope by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Featured","maintainers":["nczitzk"],"description":"| Today&#39;s Featured Trope | Newest Trope |\n| ---------------------- | ------------ |\n| today                  | newest       |","location":"featured.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| Today's Featured Trope | Newest Trope |
| ---------------------- | ------------ |
| today                  | newest       |

## 太原师范学院 <Site url="tynu.edu.cn"/>

### Unknown <Site url="tynu.edu.cn/index/tzgg.htm" size="sm" />

<Route namespace="tynu" :data='{"path":"/","radar":[{"source":["tynu.edu.cn/index/tzgg.htm","tynu.edu.cn/index.htm","tynu.edu.cn/"],"target":""}],"name":"Unknown","maintainers":["2PoL"],"url":"tynu.edu.cn/index/tzgg.htm","location":"tynu.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## UPS <Site url="ups.com"/>

United Parcel Service (UPS) updates, news, and tracking RSS feeds.

### Tracking <Site url="ups.com" size="sm" />

<Route namespace="ups" :data='{"path":"/track/:trackingNumber","categories":["other"],"example":"/ups/track/1Z78R6790470567520","parameters":{"trackingNumber":"The UPS tracking number (e.g., 1Z78R6790470567520)."},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Tracking","maintainers":["Aquabet"],"location":"track.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## Panda <Site url="usepanda.com"/>

### Feeds <Site url="usepanda.com" size="sm" />

<Route namespace="usepanda" :data='{"path":"/feeds/:id","categories":["other"],"example":"/usepanda/feeds/5718e53e7a84fb1901e059cc","parameters":{"id":"Feed ID"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Feeds","maintainers":["lyrl"],"description":"| Channel | feedId                   |\n| ------- | ------------------------ |\n| Github  | 5718e53e7a84fb1901e059cc |","location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

| Channel | feedId                   |
| ------- | ------------------------ |
| Github  | 5718e53e7a84fb1901e059cc |

## v1tx <Site url="v1tx.com"/>

### Unknown <Site url="v1tx.com/" size="sm" />

<Route namespace="v1tx" :data='{"path":"/","radar":[{"source":["v1tx.com/"],"target":""}],"name":"Unknown","maintainers":["TonyRL"],"url":"v1tx.com/","location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## V2rayShare <Site url="v2rayshare.com"/>

### Unknown <Site url="v2rayshare.com/" size="sm" />

<Route namespace="v2rayshare" :data='{"path":"/","radar":[{"source":["v2rayshare.com/"],"target":""}],"name":"Unknown","maintainers":["77taibai"],"url":"v2rayshare.com/","location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## WallpaperHub <Site url="wallpaperhub.app"/>

### Unknown <Site url="wallpaperhub.app/wallpaperhub" size="sm" />

<Route namespace="wallpaperhub" :data='{"path":"/","radar":[{"source":["wallpaperhub.app/wallpaperhub","wallpaperhub.app/"],"target":""}],"name":"Unknown","maintainers":["nczitzk"],"url":"wallpaperhub.app/wallpaperhub","location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## Web3Caff <Site url="web3caff.com"/>

### Unknown <Site url="web3caff.com" size="sm" />

<Route namespace="web3caff" :data='{"path":"*","name":"Unknown","maintainers":[],"location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 新假期周刊 <Site url="weekendhk.com"/>

### 最新文章 <Site url="weekendhk.com/" size="sm" />

<Route namespace="weekendhk" :data='{"path":"/","example":"/weekendhk","radar":[{"source":["weekendhk.com/"]}],"name":"最新文章","maintainers":["TonyRL"],"url":"weekendhk.com/","location":"posts.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## WFDF <Site url="wfdf.sport"/>

### News <Site url="wfdf.sport/news/" size="sm" />

<Route namespace="wfdf" :data='{"path":"/news","categories":["other"],"example":"/wfdf/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["wfdf.sport/news/","wfdf.sport/"]}],"name":"News","maintainers":["HankChow"],"url":"wfdf.sport/news/","location":"news.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## World Meteorological Centre Beijing <Site url="wmc-bj.net"/>

### Unknown <Site url="wmc-bj.net" size="sm" />

<Route namespace="wmc-bj" :data='{"path":"/publish/:category{.+}?","name":"Unknown","maintainers":[],"location":"publish.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## wohnnet.at <Site url="wohnnet.at"/>

Austrian search engine for real estate

### Immobiliensuche <Site url="wohnnet.at" size="sm" />

<Route namespace="wohnnet" :data='{"name":"Immobiliensuche","path":"/:category/:region/*","maintainers":["sk22"],"categories":["other"],"description":"\nOnly returns the first page of search results, allowing you to keep track of\nnewly added apartments. If you&#39;re looking for an apartment, make sure to also\nlook through the other pages on the website.\n\n::: tip\nNote that the parameter `&sortierung=neueste-zuerst` for chronological order\nis automatically appended.\n:::\n\n::: tip\nTo get your query URL, go to https://www.wohnnet.at/immobilien/suche, apply\nall desired filters (but at least a category and a region!) and click the\n\"… Treffer anzeigen\" link. From the resulting URL, cut off the\n`https://www.wohnnet.at/immobilien/` part at the beginning and replace only\nthe `?` (the `&`s stay as is!) after the region name with a `/`.\n\nExamples:\n\n* `https://www.wohnnet.at/immobilien/mietwohnungen/wien`\n    - → `/wohnnet/mietwohnungen/wien`\n* `https://www.wohnnet.at/immobilien/mietwohnungen/wien?unterregionen=g90101`\n    - → `/wohnnet/mietwohnungen/wien/unterregionen=g90101`\n* `https://www.wohnnet.at/immobilien/mietwohnungen/wien?unterregionen=g90101&merkmale=balkon`\n    - → `/wohnnet/mietwohnungen/wien/unterregionen=g90101&merkmale=balkon`\n:::\n","example":"/wohnnet/mietwohnungen/wien/unterregionen=g90101--g90201--g90301--g90401--g90501&flaeche=40&preis=-1000","parameters":{"category":"Category (`mietwohnungen`, `eigentumswohnungen`, `grundstuecke`, …)","region":"Region (`wien`, `oesterreich`, …)","unterregionen":"Unterregionen (e.g. `g90101--g90201--g90301`)","intention":"Intention (`kauf` | `miete`)","zimmer":"Zimmer (at least number, e.g. `2`)","flaeche":"Fläche (m², `40-` = at least 40 m², `40-60` = between 40 m² and 60 m²)","preis":"Preis (€, `-1000` = at most 1,000 €, `500-1000` = between 500 € and 1,000 €)","merkmale":"Merkmale (multiple, delimited by `--`, e.g. `balkon--garten--kurzzeitmiete--moebliert--parkplatz--provisionsfrei--sofort-beziehbar`)"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />


Only returns the first page of search results, allowing you to keep track of
newly added apartments. If you're looking for an apartment, make sure to also
look through the other pages on the website.

::: tip
Note that the parameter `&sortierung=neueste-zuerst` for chronological order
is automatically appended.
:::

::: tip
To get your query URL, go to https://www.wohnnet.at/immobilien/suche, apply
all desired filters (but at least a category and a region!) and click the
"… Treffer anzeigen" link. From the resulting URL, cut off the
`https://www.wohnnet.at/immobilien/` part at the beginning and replace only
the `?` (the `&`s stay as is!) after the region name with a `/`.

Examples:

* `https://www.wohnnet.at/immobilien/mietwohnungen/wien`
    - → `/wohnnet/mietwohnungen/wien`
* `https://www.wohnnet.at/immobilien/mietwohnungen/wien?unterregionen=g90101`
    - → `/wohnnet/mietwohnungen/wien/unterregionen=g90101`
* `https://www.wohnnet.at/immobilien/mietwohnungen/wien?unterregionen=g90101&merkmale=balkon`
    - → `/wohnnet/mietwohnungen/wien/unterregionen=g90101&merkmale=balkon`
:::


## 温州大学 <Site url="wzu.edu.cn"/>

### Unknown <Site url="wzu.edu.cn" size="sm" />

<Route namespace="wzu" :data='{"path":"/news/:type?","name":"Unknown","maintainers":["Chandler-Lu"],"location":"news.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 厦门理工大学 <Site url="jwc.xmut.edu.cn"/>

### Unknown <Site url="jwc.xmut.edu.cn" size="sm" />

<Route namespace="xmut" :data='{"path":"/jwc/bkjw/:category?","name":"Unknown","maintainers":[],"location":"jwc/bkjw.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="jwc.xmut.edu.cn" size="sm" />

<Route namespace="xmut" :data='{"path":"/jwc/yjjw/:category?","name":"Unknown","maintainers":[],"location":"jwc/yjs.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 长江大学 <Site url="yangtzeu.edu.cn"/>

### Unknown <Site url="yangtzeu.edu.cn" size="sm" />

<Route namespace="yangtzeu" :data='{"path":"/dongke/*","name":"Unknown","maintainers":[],"location":"dongke.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 浙江省土地使用权网上交易系统 <Site url="zjgtjy.cn"/>

### Unknown <Site url="zjgtjy.cn" size="sm" />

<Route namespace="zjgtjy" :data='{"path":"/:type?","name":"Unknown","maintainers":["Fatpandac"],"location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 综艺秀 <Site url="zyshow.net"/>

### Unknown <Site url="zyshow.net" size="sm" />

<Route namespace="zyshow" :data='{"path":"*","name":"Unknown","maintainers":[],"location":"index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

