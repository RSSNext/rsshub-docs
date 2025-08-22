# 💬️ 论坛

## V2EX <Site url="v2ex.com"/>

### 最热 / 最新主题 <Site url="v2ex.com" size="sm" />

<Route namespace="v2ex" :data='{"path":"/topics/:type","categories":["bbs","popular"],"view":0,"example":"/v2ex/topics/latest","parameters":{"type":{"description":"主题类型","options":[{"value":"hot","label":"最热主题"},{"value":"latest","label":"最新主题"}],"default":"hot"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"最热 / 最新主题","maintainers":["WhiteWorld"],"location":"topics.ts","heat":19994,"topFeeds":[]}' :test='{"code":0}' />

### 标签 <Site url="v2ex.com" size="sm" />

<Route namespace="v2ex" :data='{"path":"/tab/:tabid","categories":["bbs","popular"],"view":0,"example":"/v2ex/tab/hot","parameters":{"tabid":"tab标签ID,在 URL 可以找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"标签","maintainers":["liyefox"],"location":"tab.ts","heat":1381,"topFeeds":[]}' :test='{"code":0}' />

### 帖子 <Site url="v2ex.com" size="sm" />

<Route namespace="v2ex" :data='{"path":"/post/:postid","categories":["bbs"],"example":"/v2ex/post/584403","parameters":{"postid":"帖子ID，在 URL 可以找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["v2ex.com/t/:postid"]}],"name":"帖子","maintainers":["kt286"],"location":"post.ts","heat":420,"topFeeds":[]}' :test='{"code":0}' />

### XNA <Site url="v2ex.com" size="sm" />

<Route namespace="v2ex" :data='{"path":"/xna","categories":["bbs","blog"],"view":0,"example":"/v2ex/xna","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"XNA","maintainers":["luckyscript"],"location":"xna.ts","heat":154,"topFeeds":[]}' :test='{"code":0}' />

## 司机社 <Site url="xsijishe.com"/>

### 排行榜 <Site url="xsijishe.com" size="sm" />

<Route namespace="xsijishe" :data='{"path":"/rank/:type","categories":["bbs","popular"],"example":"/xsijishe/rank/weekly","parameters":{"type":{"description":"排行榜类型","options":[{"value":"weekly","label":"周榜"},{"value":"monthly","label":"月榜"}]}},"features":{"requireConfig":[{"name":"XSIJISHE_COOKIE","description":""},{"name":"XSIJISHE_USER_AGENT","description":""}],"requirePuppeteer":true,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"排行榜","maintainers":["akynazh","AiraNadih"],"location":"rank.ts","heat":4627,"topFeeds":[]}' :test='undefined' />

### 论坛 <Site url="xsijishe.com" size="sm" />

<Route namespace="xsijishe" :data='{"path":"/forum/:fid","categories":["bbs","popular"],"example":"/xsijishe/forum/51","parameters":{"fid":"子论坛 id"},"features":{"requireConfig":[{"name":"XSIJISHE_COOKIE","description":""},{"name":"XSIJISHE_USER_AGENT","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"论坛","maintainers":["akynazh"],"description":"::: tip 关于子论坛 id 的获取方法\n  `/xsijishe/forum/51` 对应于论坛 `https://xsijishe.com/forum-51-1.html`，这个论坛的 fid 为 51，也就是 `forum-{fid}-1` 中的 fid。\n:::","location":"forum.ts","heat":1997,"topFeeds":[]}' :test='undefined' />

::: tip 关于子论坛 id 的获取方法
  `/xsijishe/forum/51` 对应于论坛 `https://xsijishe.com/forum-51-1.html`，这个论坛的 fid 为 51，也就是 `forum-{fid}-1` 中的 fid。
:::

## NGA <Site url="bbs.nga.cn"/>

### 分区帖子 <Site url="bbs.nga.cn" size="sm" />

<Route namespace="nga" :data='{"path":"/forum/:fid/:recommend?","categories":["bbs","popular"],"view":0,"example":"/nga/forum/489","parameters":{"fid":"分区 id, 可在分区主页 URL 找到, 没有 fid 时 stid 同样适用","recommend":"是否只显示精华主题, 留空为否, 任意值为是"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"分区帖子","maintainers":["xyqfer"],"location":"forum.ts","heat":3314,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected [ …(30) ] to not include &#39;https://nga.178.com/read.php?tid=4486…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.1.9/node_modules/@vitest/expect/dist/index.js:1196:17)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.1.9/node_modules/@vitest/expect/dist/index.js:972:17)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@5.2.1/node_modules/chai/chai.js:1706:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1601)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)"}' />

### 帖子 <Site url="bbs.nga.cn" size="sm" />

<Route namespace="nga" :data='{"path":"/post/:tid/:authorId?","categories":["bbs"],"example":"/nga/post/18449558","parameters":{"tid":"帖子 id, 可在帖子 URL 找到","authorId":"作者 id"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"帖子","maintainers":["xyqfer","syrinka"],"location":"post.ts","heat":20,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1602)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## 第一会所 <Site url="sis001.com"/>

::: tip
    第一会所有多个备用网址，本路由默认使用`https://sis001.com`，若该网址无法访问，可以在部署实例的时候通过`SIS001_BASE_URL`环境变量配置要使用的地址，如`https://www.sis001.com`等
:::

### 子版块 <Site url="sis001.com" size="sm" />

<Route namespace="sis001" :data='{"path":"/forum/:id?","categories":["bbs","popular"],"example":"/sis001/forum/322","parameters":{"id":"子版块 ID，可在子论坛 URL 找到，默认为 `Funny Jokes | 短篇笑话区`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false,"nsfw":true},"name":"子版块","maintainers":["TonyRL"],"location":"forum.ts","heat":2331,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2066)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

### 作者 <Site url="sis001.com" size="sm" />

<Route namespace="sis001" :data='{"path":"/author/:id?","categories":["bbs"],"example":"/sis001/author/13131575","parameters":{"id":"作者 ID，可以在作者的个人空间地址找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"作者","maintainers":["keocheung"],"location":"author.ts","heat":33,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2065)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## PLAYNO.1 玩樂達人 <Site url="stno1.playno1.com"/>

### AV <Site url="stno1.playno1.com" size="sm" />

<Route namespace="playno1" :data='{"path":"/av/:catid?","categories":["bbs","popular"],"example":"/playno1/av","parameters":{"catid":"分类，见下表，默认为全部文章"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false,"nsfw":true},"name":"AV","maintainers":["TonyRL"],"description":"::: warning\n目前观测到该博客可能禁止日本 IP 访问。建议部署在日本区以外的服务器上。\n:::\n\n| 全部文章 | AV 新聞 | AV 導覽 |\n| -------- | ------- | ------- |\n| 78       | 3       | 5       |","location":"av.ts","heat":1197,"topFeeds":[]}' :test='{"code":0}' />

::: warning
目前观测到该博客可能禁止日本 IP 访问。建议部署在日本区以外的服务器上。
:::

| 全部文章 | AV 新聞 | AV 導覽 |
| -------- | ------- | ------- |
| 78       | 3       | 5       |

### 情趣 <Site url="stno1.playno1.com" size="sm" />

<Route namespace="playno1" :data='{"path":"/st/:catid?","categories":["bbs"],"example":"/playno1/st","parameters":{"catid":"分类，见下表，默认为全部文章"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["stno1.playno1.com/stno1/:catid/"],"target":"/st/:catid"}],"name":"情趣","maintainers":["TonyRL"],"description":"| 全部文章 | 情趣體驗報告 | 情趣新聞 | 情趣研究所 |\n| -------- | ------------ | -------- | ---------- |\n| all      | experience   | news     | graduate   |","location":"st.ts","heat":114,"topFeeds":[]}' :test='{"code":0}' />

| 全部文章 | 情趣體驗報告 | 情趣新聞 | 情趣研究所 |
| -------- | ------------ | -------- | ---------- |
| all      | experience   | news     | graduate   |

## 虎扑 <Site url=".hupu.com"/>

### 热帖 <Site url=".hupu.com" size="sm" />

<Route namespace="hupu" :data='{"path":"/all/:id?","categories":["bbs"],"example":"/hupu/all/topic-daily","parameters":{"id":"编号，可在对应热帖版面 URL 中找到，默认为步行街每日话题"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["m.hupu.com/:category","m.hupu.com/"],"target":"/:category"}],"name":"热帖","maintainers":["nczitzk"],"description":"::: tip\n  更多热帖版面参见 [论坛](https://bbs.hupu.com)\n:::","location":"all.ts","heat":499,"topFeeds":[]}' :test='{"code":0}' />

::: tip
  更多热帖版面参见 [论坛](https://bbs.hupu.com)
:::

### Unknown <Site url=".hupu.com" size="sm" />

<Route namespace="hupu" :data='{"path":["/dept/:category?","/:category?"],"radar":[{"source":["m.hupu.com/:category","m.hupu.com/"],"target":"/:category"}],"name":"Unknown","maintainers":["nczitzk"],"description":"| NBA | CBA | 足球   |\n| --- | --- | ------ |\n| nba | cba | soccer |\n\n::: tip\n  电竞分类参见 [游戏热帖](https://bbs.hupu.com/all-gg) 的对应路由 [`/hupu/all/all-gg`](https://rsshub.app/hupu/all/all-gg)。\n:::","location":"index.ts","heat":232,"topFeeds":[]}' :test='undefined' />

| NBA | CBA | 足球   |
| --- | --- | ------ |
| nba | cba | soccer |

::: tip
  电竞分类参见 [游戏热帖](https://bbs.hupu.com/all-gg) 的对应路由 [`/hupu/all/all-gg`](https://rsshub.app/hupu/all/all-gg)。
:::

### 社区 <Site url=".hupu.com" size="sm" />

<Route namespace="hupu" :data='{"path":["/bbs/:id?/:order?","/bxj/:id?/:order?"],"categories":["bbs"],"example":"/hupu/bbs/topic-daily","parameters":{"id":"编号，可在对应社区 URL 中找到，默认为#步行街主干道","order":"排序方式，可选 `0` 即 最新回复 或 `1` 即 最新发布，默认为最新回复"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["m.hupu.com/:category","m.hupu.com/"],"target":"/:category"}],"name":"社区","maintainers":["LogicJake","nczitzk"],"description":"::: tip\n  更多社区参见 [社区](https://bbs.hupu.com)\n:::","location":"bbs.ts","heat":190,"topFeeds":[]}' :test='{"code":0}' />

::: tip
  更多社区参见 [社区](https://bbs.hupu.com)
:::

## 百度 <Site url="www.baidu.com"/>

### 精品帖子 <Site url="www.baidu.com" size="sm" />

<Route namespace="baidu" :data='{"path":["/tieba/forum/good/:kw/:cid?/:sortBy?","/tieba/forum/:kw/:sortBy?"],"categories":["bbs"],"example":"/baidu/tieba/forum/good/女图","parameters":{"kw":"吧名","cid":"精品分类，默认为 `0`（全部分类），如果不传 `cid` 则获取全部分类","sortBy":"排序方式：`created`, `replied`。默认为 `created`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"精品帖子","maintainers":["u3u"],"location":"tieba/forum.ts","heat":382,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 211)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

### 贴吧搜索 <Site url="www.baidu.com" size="sm" />

<Route namespace="baidu" :data='{"path":"/tieba/search/:qw/:routeParams?","categories":["bbs"],"example":"/baidu/tieba/search/neuro","parameters":{"qw":"搜索关键词","routeParams":"额外参数；请参阅以下说明和表格"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"贴吧搜索","maintainers":["JimenezLi"],"description":"| 键           | 含义                                                       | 接受的值      | 默认值 |\n| ------------ | ---------------------------------------------------------- | ------------- | ------ |\n| kw           | 在名为 kw 的贴吧中搜索                                     | 任意名称 / 无 | 无     |\n| only_thread  | 只看主题帖，默认为 0 关闭                                  | 0/1           | 0      |\n| rn           | 返回条目的数量                                             | 1-20          | 20     |\n| sm           | 排序方式，0 为按时间顺序，1 为按时间倒序，2 为按相关性顺序 | 0/1/2         | 1      |\n\n  用例：`/baidu/tieba/search/neuro/kw=neurosama&only_thread=1&sm=2`","location":"tieba/search.ts","heat":28,"topFeeds":[]}' :test='{"code":0}' />

| 键           | 含义                                                       | 接受的值      | 默认值 |
| ------------ | ---------------------------------------------------------- | ------------- | ------ |
| kw           | 在名为 kw 的贴吧中搜索                                     | 任意名称 / 无 | 无     |
| only_thread  | 只看主题帖，默认为 0 关闭                                  | 0/1           | 0      |
| rn           | 返回条目的数量                                             | 1-20          | 20     |
| sm           | 排序方式，0 为按时间顺序，1 为按时间倒序，2 为按相关性顺序 | 0/1/2         | 1      |

  用例：`/baidu/tieba/search/neuro/kw=neurosama&only_thread=1&sm=2`

### 用户帖子 <Site url="www.baidu.com" size="sm" />

<Route namespace="baidu" :data='{"path":"/tieba/user/:uid","categories":["bbs"],"example":"/baidu/tieba/user/斗鱼游戏君","parameters":{"uid":"用户 ID"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"用户帖子","maintainers":["igxlin","nczitzk"],"description":"用户 ID 可以通过打开用户的主页后查看地址栏的 `un` 字段来获取。","location":"tieba/user.ts","heat":15,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 215)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

用户 ID 可以通过打开用户的主页后查看地址栏的 `un` 字段来获取。

### 帖子动态 <Site url="www.baidu.com" size="sm" />

<Route namespace="baidu" :data='{"path":["/tieba/post/:id","/tieba/post/lz/:id"],"categories":["bbs"],"example":"/baidu/tieba/post/686961453","parameters":{"id":"帖子 ID"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["tieba.baidu.com/p/:id"]}],"name":"帖子动态","maintainers":["u3u"],"location":"tieba/post.ts","heat":12,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 213)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## 禁忌书屋 <Site url="cool18.com"/>

### 禁忌书屋 <Site url="cool18.com" size="sm" />

<Route namespace="cool18" :data='{"path":"/:id?/:type?/:keyword?","url":"cool18.com","example":"cool18.com/bbs4","parameters":{"id":"the name of the bbs","type":"the type of the post. Can be `home`, `gold` or `threadsearch`. Default: `home`","keyword":"the keyword to search.","pageSize":"the number of posts to fetch. If the type is not in search, you can type any words. Default: 10"},"categories":["bbs"],"radar":[{"source":["cool18.com/:id/"],"target":"/:id/:type?/:keyword?"}],"name":"禁忌书屋","maintainers":["nczitzk","Gabrlie"],"features":{"nsfw":true},"location":"index.ts","heat":506,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 404 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 526)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## 一亩三分地 <Site url="blog.1point3acres.com"/>

### 分区 <Site url="blog.1point3acres.com" size="sm" />

<Route namespace="1point3acres" :data='{"path":"/section/:id?/:type?/:order?","categories":["bbs"],"example":"/1point3acres/section/345","parameters":{"id":"分区 id，见下表，默认为全部","type":"帖子分类, 见下表，默认为 hot，即热门帖子","order":"排序方式，见下表，默认为空，即最新回复"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["instant.1point3acres.com/section/:id","instant.1point3acres.com/"]}],"name":"分区","maintainers":["nczitzk"],"description":"分区\n\n| 分区     | id  |\n| -------- | --- |\n| 留学申请 | 257 |\n| 世界公民 | 379 |\n| 投资理财 | 400 |\n| 生活干货 | 31  |\n| 职场达人 | 345 |\n| 人际关系 | 391 |\n| 海外求职 | 38  |\n| 签证移民 | 265 |\n\n  分类\n\n| 热门帖子 | 最新帖子 |\n| -------- | -------- |\n| hot      | new      |\n\n  排序方式\n\n| 最新回复 | 最新发布 |\n| -------- | -------- |\n|          | post     |","location":"section.ts","heat":305,"topFeeds":[]}' :test='{"code":0}' />

分区

| 分区     | id  |
| -------- | --- |
| 留学申请 | 257 |
| 世界公民 | 379 |
| 投资理财 | 400 |
| 生活干货 | 31  |
| 职场达人 | 345 |
| 人际关系 | 391 |
| 海外求职 | 38  |
| 签证移民 | 265 |

  分类

| 热门帖子 | 最新帖子 |
| -------- | -------- |
| hot      | new      |

  排序方式

| 最新回复 | 最新发布 |
| -------- | -------- |
|          | post     |

### 帖子 <Site url="instant.1point3acres.com/" size="sm" />

<Route namespace="1point3acres" :data='{"path":"/thread/:type?/:order?","example":"/1point3acres/thread/hot","parameters":{"type":"帖子分类, 见下表，默认为 hot，即热门帖子","order":"排序方式，见下表，默认为空，即最新回复"},"name":"帖子","categories":["bbs"],"maintainers":["EthanWng97","DIYgod","nczitzk"],"url":"instant.1point3acres.com/","description":"分类\n\n| 热门帖子 | 最新帖子 |\n| -------- | -------- |\n| hot      | new      |\n\n  排序方式\n\n| 最新回复 | 最新发布 |\n| -------- | -------- |\n|          | post     |","location":"thread.ts","heat":97,"topFeeds":[]}' :test='{"code":0}' />

分类

| 热门帖子 | 最新帖子 |
| -------- | -------- |
| hot      | new      |

  排序方式

| 最新回复 | 最新发布 |
| -------- | -------- |
|          | post     |

### 标签 <Site url="blog.1point3acres.com" size="sm" />

<Route namespace="1point3acres" :data='{"path":"/category/:id?/:type?/:order?","categories":["bbs"],"example":"/1point3acres/category/h1b","parameters":{"id":"标签 id，默认为全部","type":"帖子分类, 见下表，默认为 hot，即热门帖子","order":"排序方式，见下表，默认为空，即最新回复"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["instant.1point3acres.com/section/:id","instant.1point3acres.com/"]}],"name":"标签","maintainers":["nczitzk"],"description":"::: tip\n  更多标签可以在 [标签列表](https://instant.1point3acres.com/tags) 中找到。\n:::\n\n  分类\n\n| 热门帖子 | 最新帖子 |\n| -------- | -------- |\n| hot      | new      |\n\n  排序方式\n\n| 最新回复 | 最新发布 |\n| -------- | -------- |\n|          | post     |","location":"category.ts","heat":32,"topFeeds":[]}' :test='{"code":0}' />

::: tip
  更多标签可以在 [标签列表](https://instant.1point3acres.com/tags) 中找到。
:::

  分类

| 热门帖子 | 最新帖子 |
| -------- | -------- |
| hot      | new      |

  排序方式

| 最新回复 | 最新发布 |
| -------- | -------- |
|          | post     |

### 博客 <Site url="blog.1point3acres.com" size="sm" />

<Route namespace="1point3acres" :data='{"path":"/blog/:category?","categories":["bbs"],"example":"/1point3acres/blog","parameters":{"category":"分类，见下表，可在对应分类页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["blog.1point3acres.com/:category"]}],"name":"博客","maintainers":["nczitzk"],"description":"| 留学申请   | 找工求职 | 生活攻略  | 投资理财 | 签证移民 | 时政要闻 |\n| ---------- | -------- | --------- | -------- | -------- | -------- |\n| studyinusa | career   | lifestyle | invest   | visa     | news     |","location":"blog.ts","heat":10,"topFeeds":[]}' :test='{"code":0}' />

| 留学申请   | 找工求职 | 生活攻略  | 投资理财 | 签证移民 | 时政要闻 |
| ---------- | -------- | --------- | -------- | -------- | -------- |
| studyinusa | career   | lifestyle | invest   | visa     | news     |

### 录取结果 <Site url="offer.1point3acres.com/" size="sm" />

<Route namespace="1point3acres" :data='{"path":"/offer/:year?/:major?/:school?","categories":["bbs"],"example":"/1point3acres/offer/12/null/CMU","parameters":{"year":"录取年份  id，空为null","major":"录取专业 id，空为null","school":"录取学校 id，空为null"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["offer.1point3acres.com/"],"target":"/offer"}],"name":"录取结果","maintainers":["EthanWng97"],"url":"offer.1point3acres.com/","description":"::: tip 三个 id 获取方式\n  1.  打开 [https://offer.1point3acres.com](https://offer.1point3acres.com)\n  2.  打开控制台\n  3.  切换到 Network 面板\n  4.  点击 搜索 按钮\n  5.  点击 results?ps=15&pg=1 POST 请求\n  6.  找到 Request Payload 请求参数，例如 `filters: {planyr: \"13\", planmajor: \"1\", outname_w: \"ACADIAU\"}` ，则三个 id 分别为: 13,1,ACADIAU\n:::","location":"offer.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

::: tip 三个 id 获取方式
  1.  打开 [https://offer.1point3acres.com](https://offer.1point3acres.com)
  2.  打开控制台
  3.  切换到 Network 面板
  4.  点击 搜索 按钮
  5.  点击 results?ps=15&pg=1 POST 请求
  6.  找到 Request Payload 请求参数，例如 `filters: {planyr: "13", planmajor: "1", outname_w: "ACADIAU"}` ，则三个 id 分别为: 13,1,ACADIAU
:::

### 用户回帖 <Site url="blog.1point3acres.com" size="sm" />

<Route namespace="1point3acres" :data='{"path":"/user/:id/posts","categories":["bbs"],"example":"/1point3acres/user/1/posts","parameters":{"id":"用户 id，可在 Instant 版网站的个人主页 URL 找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["instant.1point3acres.com/profile/:id","instant.1point3acres.com/"]}],"name":"用户回帖","maintainers":["Maecenas"],"location":"user/post.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 41)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

### 用户主题帖 <Site url="blog.1point3acres.com" size="sm" />

<Route namespace="1point3acres" :data='{"path":"/user/:id/threads","categories":["bbs"],"example":"/1point3acres/user/1/threads","parameters":{"id":"用户 id，可在 Instant 版网站的个人主页 URL 找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["instant.1point3acres.com/profile/:id","instant.1point3acres.com/"]}],"name":"用户主题帖","maintainers":["Maecenas"],"location":"user/thread.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 42)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## 看雪 <Site url="kanxue.com"/>

### 论坛 <Site url="kanxue.com" size="sm" />

<Route namespace="kanxue" :data='{"path":"/topic/:category?/:type?","categories":["bbs"],"example":"/kanxue/topic/android/digest","parameters":{"category":"版块, 缺省为`all`","type":"类型, 缺省为`latest`"},"name":"论坛","maintainers":["renzhexigua"],"description":"| 版块           | category  |\n| -------------- | --------- |\n| 智能设备       | iot       |\n| Android 安全   | android   |\n| iOS 安全       | ios       |\n| HarmonyOS 安全 | harmonyos |\n| 软件逆向       | re        |\n| 编程技术       | coding    |\n| 加壳脱壳       | unpack    |\n| 密码应用       | crypto    |\n| 二进制漏洞     | vuln      |\n| CTF 对抗       | ctf       |\n| Pwn            | pwn       |\n| WEB 安全       | web       |\n| 茶余饭后       | chat      |\n| 极客空间       | geekzone  |\n| 外文翻译       | translate |\n| 全站           | all       |\n\n| 类型     | type   |\n| -------- | ------ |\n| 最新主题 | latest |\n| 精华主题 | digest |","location":"topic.ts","heat":403,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1345)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

| 版块           | category  |
| -------------- | --------- |
| 智能设备       | iot       |
| Android 安全   | android   |
| iOS 安全       | ios       |
| HarmonyOS 安全 | harmonyos |
| 软件逆向       | re        |
| 编程技术       | coding    |
| 加壳脱壳       | unpack    |
| 密码应用       | crypto    |
| 二进制漏洞     | vuln      |
| CTF 对抗       | ctf       |
| Pwn            | pwn       |
| WEB 安全       | web       |
| 茶余饭后       | chat      |
| 极客空间       | geekzone  |
| 外文翻译       | translate |
| 全站           | all       |

| 类型     | type   |
| -------- | ------ |
| 最新主题 | latest |
| 精华主题 | digest |

## 恩山无线论坛 <Site url="right.com.cn"/>

### 板块 <Site url="right.com.cn" size="sm" />

<Route namespace="right" :data='{"path":"/forum/:id?","categories":["bbs"],"example":"/right/forum/31","parameters":{"id":"板块 id，可在板块页 URL 中找到，默认为新手入门及其它(硬件)"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"板块","maintainers":["nczitzk"],"location":"forum.ts","heat":346,"topFeeds":[]}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:44:18)\n    at listOnTimeout (node:internal/timers:588:17)\n    at processTimers (node:internal/timers:523:7)"}' />

## 电鸭社区 <Site url="eleduck.com"/>

### 工作机会 <Site url="eleduck.com/categories/5" size="sm" />

<Route namespace="eleduck" :data='{"path":"/jobs","categories":["bbs"],"example":"/eleduck/jobs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["eleduck.com/categories/5","eleduck.com/"]}],"name":"工作机会","maintainers":["sfyumi"],"url":"eleduck.com/categories/5","location":"jobs.ts","heat":163,"topFeeds":[]}' :test='{"code":0}' />

### 分类文章 <Site url="eleduck.com" size="sm" />

<Route namespace="eleduck" :data='{"path":"/posts/:id?","categories":["bbs"],"example":"/eleduck/posts/4","parameters":{"id":"分类id,可以论坛的URL找到，默认为全部"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"分类文章","maintainers":["running-grass"],"description":"| id | 分类     |\n| -- | -------- |\n| 0  | 全部     |\n| 1  | 讨论     |\n| 2  | 分享     |\n| 3  | 露个脸   |\n| 4  | 访谈故事 |\n| 5  | 招聘     |\n| 10 | 海外移民 |\n| 12 | 英语     |\n| 14 | 电鸭官方 |\n| 15 | 独立产品 |\n| 17 | 闲话开源 |\n| 19 | Web3     |\n| 21 | 设计     |\n| 22 | 人才库   |\n| 23 | Upwork   |\n| 24 | 经验课   |","location":"posts.ts","heat":66,"topFeeds":[]}' :test='{"code":0}' />

| id | 分类     |
| -- | -------- |
| 0  | 全部     |
| 1  | 讨论     |
| 2  | 分享     |
| 3  | 露个脸   |
| 4  | 访谈故事 |
| 5  | 招聘     |
| 10 | 海外移民 |
| 12 | 英语     |
| 14 | 电鸭官方 |
| 15 | 独立产品 |
| 17 | 闲话开源 |
| 19 | Web3     |
| 21 | 设计     |
| 22 | 人才库   |
| 23 | Upwork   |
| 24 | 经验课   |

## 直播吧 <Site url="zhibo8.cc"/>

### 滚动新闻 <Site url="zhibo8.cc" size="sm" />

<Route namespace="zhibo8" :data='{"path":"/more/:category?","categories":["bbs"],"example":"/zhibo8/more/nba","parameters":{"category":"分类，见下表，默认为 NBA"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["news.zhibo8.cc/:category"],"target":"/more/:category"}],"name":"滚动新闻","description":"\n| NBA | 足球  | 电竞     | 综合   |\n| --- | ----- | -------- | ------ |\n| nba | zuqiu | dianjing | zonghe |","maintainers":["nczitzk"],"location":"more.ts","heat":158,"topFeeds":[]}' :test='{"code":0}' />


| NBA | 足球  | 电竞     | 综合   |
| --- | ----- | -------- | ------ |
| nba | zuqiu | dianjing | zonghe |

### Unknown <Site url="zhibo8.cc" size="sm" />

<Route namespace="zhibo8" :data='{"path":"/luxiang/:category?","radar":[{"source":["zhibo8.cc/:category/luxiang.htm"],"target":"/luxiang/:category"}],"name":"Unknown","maintainers":["TonyRL"],"location":"luxiang.ts","heat":4,"topFeeds":[]}' :test='undefined' />

### 子论坛 <Site url="zhibo8.cc" size="sm" />

<Route namespace="zhibo8" :data='{"path":"/forum/:id","categories":["bbs"],"example":"/zhibo8/forum/8","parameters":{"id":"子论坛 id，可在子论坛 URL 找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"子论坛","maintainers":["LogicJake"],"location":"forum.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2590)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

### 回帖 <Site url="zhibo8.cc" size="sm" />

<Route namespace="zhibo8" :data='{"path":"/post/:id","categories":["bbs"],"example":"/zhibo8/post/3050708","parameters":{"id":"帖子 id，可在帖子 URL 找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"回帖","maintainers":["LogicJake"],"location":"post.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2592)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## PKMer <Site url="pkmer.cn"/>

### 最近更新 <Site url="pkmer.cn/page/*" size="sm" />

<Route namespace="pkmer" :data='{"path":"/recent","categories":["bbs"],"example":"/pkmer/recent","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["pkmer.cn/page/*"]}],"name":"最近更新","maintainers":["Gnoyong"],"url":"pkmer.cn/page/*","location":"recent.ts","heat":158,"topFeeds":[]}' :test='{"code":0}' />

## LearnKu <Site url="learnku.com"/>

### 社区 <Site url="learnku.com" size="sm" />

<Route namespace="learnku" :data='{"path":"/:community/:category?","categories":["bbs"],"example":"/learnku/laravel/qa","parameters":{"community":"社区 标识，可在 <https://learnku.com/communities> 找到","category":"分类，如果不传 `category` 则获取全部分类"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["learnku.com/:community"],"target":"/:community"}],"name":"社区","maintainers":["kayw-geek"],"description":"| 招聘 | 翻译         | 问答 | 链接  |\n| ---- | ------------ | ---- | ----- |\n| jobs | translations | qa   | links |","location":"topic.ts","heat":157,"topFeeds":[]}' :test='{"code":0}' />

| 招聘 | 翻译         | 问答 | 链接  |
| ---- | ------------ | ---- | ----- |
| jobs | translations | qa   | links |

## 威锋 <Site url="feng.com"/>

### 社区 <Site url="feng.com" size="sm" />

<Route namespace="feng" :data='{"path":"/forum/:id/:type?","categories":["bbs"],"example":"/feng/forum/1","parameters":{"id":"版块 ID，可在版块 URL 找到","type":"排序，见下表，默认为 `all`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["feng.com/forum/photo/:id","feng.com/forum/:id"],"target":"/forum/:id"}],"name":"社区","maintainers":["TonyRL"],"description":"| 最新回复 | 最新发布 | 热门 | 精华    |\n| -------- | -------- | ---- | ------- |\n| newest   | all      | hot  | essence |","location":"forum.ts","heat":139,"topFeeds":[]}' :test='{"code":0}' />

| 最新回复 | 最新发布 | 热门 | 精华    |
| -------- | -------- | ---- | ------- |
| newest   | all      | hot  | essence |

## 品葱 <Site url="pincong.rocks"/>

### 精选 <Site url="pincong.rocks" size="sm" />

<Route namespace="pincong" :data='{"path":"/hot/:category?","categories":["bbs"],"example":"/pincong/hot","parameters":{"category":"分类，与官网分类 URL `category-` 后的数字对应，默认为全部"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"精选","maintainers":["zphw"],"location":"hot.ts","heat":69,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1792)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

### 发现 <Site url="pincong.rocks" size="sm" />

<Route namespace="pincong" :data='{"path":"/category/:category?/:sort?","categories":["bbs"],"example":"/pincong/category/1/new","parameters":{"category":"分类，与官网分类 URL `category-` 后的数字对应，默认为全部","sort":"排序方式，参数可见下表，默认为推荐"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"发现","maintainers":["zphw"],"description":"| 最新 | 推荐      | 热门 |\n| ---- | --------- | ---- |\n| new  | recommend | hot  |","location":"index.ts","heat":15,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1793)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

| 最新 | 推荐      | 热门 |
| ---- | --------- | ---- |
| new  | recommend | hot  |

### Unknown <Site url="pincong.rocks" size="sm" />

<Route namespace="pincong" :data='{"path":"/topic/:topic","radar":[{"source":["pincong.rocks/topic/:topic"]}],"name":"Unknown","maintainers":["zphw"],"location":"topic.ts","heat":1,"topFeeds":[]}' :test='undefined' />

## 火线 <Site url="zone.huoxian.cn"/>

### Zone <Site url="zone.huoxian.cn" size="sm" />

<Route namespace="huoxian" :data='{"path":"/zone","categories":["bbs"],"example":"/huoxian/zone","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Zone","maintainers":["p7e4"],"location":"zone.ts","heat":76,"topFeeds":[]}' :test='{"code":0}' />

## 牛客网 <Site url="nowcoder.com"/>

### 求职推荐 <Site url="nowcoder.com/" size="sm" />

<Route namespace="nowcoder" :data='{"path":"/recommend","categories":["bbs"],"example":"/nowcoder/recommend","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nowcoder.com/"]}],"name":"求职推荐","maintainers":["junfengP"],"url":"nowcoder.com/","location":"recommend.ts","heat":42,"topFeeds":[]}' :test='{"code":0}' />

### 校招日程 <Site url="nowcoder.com/" size="sm" />

<Route namespace="nowcoder" :data='{"path":"/schedule/:propertyId?/:typeId?","categories":["bbs"],"example":"/nowcoder/schedule","parameters":{"propertyId":"行业, 在控制台中抓取接口，可获得行业id，默认0","typeId":"类别，同上"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nowcoder.com/"],"target":"/schedule"}],"name":"校招日程","maintainers":["junfengP"],"url":"nowcoder.com/","location":"schedule.ts","heat":16,"topFeeds":[]}' :test='{"code":0}' />

### 讨论区 <Site url="nowcoder.com" size="sm" />

<Route namespace="nowcoder" :data='{"path":"/discuss/:type/:order","categories":["bbs"],"example":"/nowcoder/discuss/2/4","parameters":{"type":"讨论区分区id 在 URL 中可以找到","order":"排序方式"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"讨论区","maintainers":["LogicJake"],"description":"| 最新回复 | 最新发表 | 最新 | 精华 |\n| -------- | -------- | ---- | ---- |\n| 0        | 3        | 1    | 4    |","location":"discuss.ts","heat":10,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1665)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

| 最新回复 | 最新发表 | 最新 | 精华 |
| -------- | -------- | ---- | ---- |
| 0        | 3        | 1    | 4    |

### 面经 <Site url="nowcoder.com/" size="sm" />

<Route namespace="nowcoder" :data='{"path":"/experience/:tagId","categories":["bbs"],"example":"/nowcoder/experience/639?order=3&companyId=665&phaseId=0","parameters":{"tagId":"职位id [🔗查询链接](https://www.nowcoder.com/profile/all-jobs)复制打开"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nowcoder.com/"],"target":"/experience"}],"name":"面经","maintainers":["huyyi"],"url":"nowcoder.com/","description":"可选参数：\n\n  -   companyId：公司 id，[🔗查询链接](https://www.nowcoder.com/discuss/tag/exp), 复制打开\n  -   order：3 - 最新；1 - 最热\n  -   phaseId：0 - 所有；1 - 校招；2 - 实习；3 - 社招","location":"experience.ts","heat":3,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1666)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

可选参数：

  -   companyId：公司 id，[🔗查询链接](https://www.nowcoder.com/discuss/tag/exp), 复制打开
  -   order：3 - 最新；1 - 最热
  -   phaseId：0 - 所有；1 - 校招；2 - 实习；3 - 社招

### 实习广场 & 社招广场 <Site url="nowcoder.com/" size="sm" />

<Route namespace="nowcoder" :data='{"path":"/jobcenter/:recruitType?/:city?/:type?/:order?/:latest?","categories":["bbs"],"example":"/nowcoder/jobcenter/1/北京/1/1/true","parameters":{"recruitType":"招聘分类，`1` 指 实习广场，`2` 指 社招广场，默认为 `1`","city":"所在城市，可选城市见下表，若空则为 `全国`","type":"职位类型，可选职位代码见下表，若空则为 `全部`","order":"排序参数，可选排序参数代码见下表，若空则为 `默认`","latest":"是否仅查看最近一周，可选 `true` 和 `false`，默认为 `false`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nowcoder.com/"],"target":"/jobcenter"}],"name":"实习广场 & 社招广场","maintainers":["nczitzk"],"url":"nowcoder.com/","description":"可选城市有：北京、上海、广州、深圳、杭州、南京、成都、厦门、武汉、西安、长沙、哈尔滨、合肥、其他\n\n  职位类型代码见下表：\n\n| 研发 | 测试 | 数据 | 算法 | 前端 | 产品 | 运营 | 其他 |\n| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |\n| 1    | 2    | 3    | 4    | 5    | 6    | 7    | 0    |\n\n  排序参数见下表：\n\n| 最新发布 | 最快处理 | 处理率最高 |\n| -------- | -------- | ---------- |\n| 1        | 2        | 3          |","location":"jobcenter.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1667)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

可选城市有：北京、上海、广州、深圳、杭州、南京、成都、厦门、武汉、西安、长沙、哈尔滨、合肥、其他

  职位类型代码见下表：

| 研发 | 测试 | 数据 | 算法 | 前端 | 产品 | 运营 | 其他 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1    | 2    | 3    | 4    | 5    | 6    | 7    | 0    |

  排序参数见下表：

| 最新发布 | 最快处理 | 处理率最高 |
| -------- | -------- | ---------- |
| 1        | 2        | 3          |

## 8264 <Site url="8264.com"/>

### 列表 <Site url="8264.com" size="sm" />

<Route namespace="8264" :data='{"path":"/list/:id?","categories":["bbs"],"example":"/8264/list/751","parameters":{"id":"列表 id，见下表，默认为 751，即热门推荐"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"列表","maintainers":["nczitzk"],"description":"| 热门推荐 | 户外知识 | 户外装备 |\n| -------- | -------- | -------- |\n| 751      | 238      | 204      |\n\n<details>\n<summary>更多列表</summary>\n\n#### 热门推荐\n\n| 业界 | 国际 | 专访 | 图说 | 户外 | 登山 | 攀岩 |\n| ---- | ---- | ---- | ---- | ---- | ---- | ---- |\n| 489  | 733  | 746  | 902  | 914  | 934  | 935  |\n\n#### 户外知识\n\n| 徒步 | 露营 | 安全急救 | 领队 | 登雪山 |\n| ---- | ---- | -------- | ---- | ------ |\n| 242  | 950  | 931    | 920  | 915  |\n\n| 攀岩 | 骑行 | 跑步 | 滑雪 | 水上运动 |\n| ---- | ---- | ---- | ---- | -------- |\n| 916  | 917  | 918  | 919  | 921    |\n\n| 钓鱼 | 潜水 | 攀冰 | 冲浪 | 网球 |\n| ---- | ---- | ---- | ---- | ---- |\n| 951  | 952  | 953  | 966  | 967  |\n\n| 绳索知识 | 高尔夫 | 马术 | 户外摄影 | 羽毛球 |\n| -------- | ------ | ---- | -------- | ------ |\n| 968    | 969  | 970  | 973    | 971  |\n\n| 游泳 | 溯溪 | 健身 | 瑜伽 |\n| ---- | ---- | ---- | ---- |\n| 974  | 975  | 976  | 977  |\n\n#### 户外装备\n\n| 服装 | 冲锋衣 | 抓绒衣 | 皮肤衣 | 速干衣 |\n| ---- | ------ | ------ | ------ | ------ |\n| 209  | 923  | 924  | 925  | 926  |\n\n| 羽绒服 | 软壳 | 户外鞋 | 登山鞋 | 徒步鞋 |\n| ------ | ---- | ------ | ------ | ------ |\n| 927  | 929  | 211  | 928  | 930  |\n\n| 越野跑鞋 | 溯溪鞋 | 登山杖 | 帐篷 | 睡袋 |\n| -------- | ------ | ------ | ---- | ---- |\n| 933    | 932  | 220  | 208  | 212  |\n\n| 炉具 | 灯具 | 水具 | 面料 | 背包 |\n| ---- | ---- | ---- | ---- | ---- |\n| 792  | 218  | 219  | 222  | 207  |\n\n| 防潮垫 | 电子导航 | 冰岩绳索 | 综合装备 |\n| ------ | -------- | -------- | -------- |\n| 214  | 216    | 215    | 223    |\n</details>","location":"list.ts","heat":69,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected NaN to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 20)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)"}' />

| 热门推荐 | 户外知识 | 户外装备 |
| -------- | -------- | -------- |
| 751      | 238      | 204      |

<details>
<summary>更多列表</summary>

#### 热门推荐

| 业界 | 国际 | 专访 | 图说 | 户外 | 登山 | 攀岩 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 489  | 733  | 746  | 902  | 914  | 934  | 935  |

#### 户外知识

| 徒步 | 露营 | 安全急救 | 领队 | 登雪山 |
| ---- | ---- | -------- | ---- | ------ |
| 242  | 950  | 931    | 920  | 915  |

| 攀岩 | 骑行 | 跑步 | 滑雪 | 水上运动 |
| ---- | ---- | ---- | ---- | -------- |
| 916  | 917  | 918  | 919  | 921    |

| 钓鱼 | 潜水 | 攀冰 | 冲浪 | 网球 |
| ---- | ---- | ---- | ---- | ---- |
| 951  | 952  | 953  | 966  | 967  |

| 绳索知识 | 高尔夫 | 马术 | 户外摄影 | 羽毛球 |
| -------- | ------ | ---- | -------- | ------ |
| 968    | 969  | 970  | 973    | 971  |

| 游泳 | 溯溪 | 健身 | 瑜伽 |
| ---- | ---- | ---- | ---- |
| 974  | 975  | 976  | 977  |

#### 户外装备

| 服装 | 冲锋衣 | 抓绒衣 | 皮肤衣 | 速干衣 |
| ---- | ------ | ------ | ------ | ------ |
| 209  | 923  | 924  | 925  | 926  |

| 羽绒服 | 软壳 | 户外鞋 | 登山鞋 | 徒步鞋 |
| ------ | ---- | ------ | ------ | ------ |
| 927  | 929  | 211  | 928  | 930  |

| 越野跑鞋 | 溯溪鞋 | 登山杖 | 帐篷 | 睡袋 |
| -------- | ------ | ------ | ---- | ---- |
| 933    | 932  | 220  | 208  | 212  |

| 炉具 | 灯具 | 水具 | 面料 | 背包 |
| ---- | ---- | ---- | ---- | ---- |
| 792  | 218  | 219  | 222  | 207  |

| 防潮垫 | 电子导航 | 冰岩绳索 | 综合装备 |
| ------ | -------- | -------- | -------- |
| 214  | 216    | 215    | 223    |
</details>

## 通信人家园 <Site url="txrjy.com"/>

### 论坛 频道 <Site url="txrjy.com" size="sm" />

<Route namespace="txrjy" :data='{"path":"/fornumtopic/:channel?","categories":["bbs"],"example":"/txrjy/fornumtopic","parameters":{"channel":"频道的 id，见下表，默认为最新500个主题帖"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"论坛 频道","maintainers":["Fatpandac"],"description":"| 最新 500 个主题帖 | 最新 500 个回复帖 | 最新精华帖 | 最新精华帖 | 一周热帖 | 本月热帖 |\n| :---------------: | :---------------: | :--------: | :--------: | :------: | :------: |\n|         1         |         2         |      3     |      4     |     5    |     6    |","location":"fornumtopic.ts","heat":66,"topFeeds":[]}' :test='{"code":0}' />

| 最新 500 个主题帖 | 最新 500 个回复帖 | 最新精华帖 | 最新精华帖 | 一周热帖 | 本月热帖 |
| :---------------: | :---------------: | :--------: | :--------: | :------: | :------: |
|         1         |         2         |      3     |      4     |     5    |     6    |

## Chiphell <Site url="www.chiphell.com"/>

### 分类 <Site url="www.chiphell.com" size="sm" />

<Route namespace="chiphell" :data='{"path":"/portal/:catId?","name":"分类","categories":["bbs"],"example":"/chiphell/portal/1","parameters":{"catId":"分类 ID，可在 URL 中找到，默认为 1"},"maintainers":["tylinux"],"location":"portal.ts","heat":48,"topFeeds":[]}' :test='{"code":0}' />

## guozaoke <Site url="guozaoke.com"/>

### 过早客 <Site url="guozaoke.com/" size="sm" />

<Route namespace="guozaoke" :data='{"path":"/default","categories":["bbs"],"example":"/guozaoke/default","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"过早客","maintainers":["xiaoshame"],"url":"guozaoke.com/","location":"index.ts","heat":47,"topFeeds":[]}' :test='{"code":0}' />

## 虫部落 <Site url="www.chongbuluo.com"/>

### 最新发表 <Site url="www.chongbuluo.com" size="sm" />

<Route namespace="chongbuluo" :data='{"path":"/newthread","categories":["bbs"],"example":"/chongbuluo/newthread","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.chongbuluo.com/"]}],"name":"最新发表","maintainers":["qiye45"],"location":"index.ts","heat":40,"topFeeds":[]}' :test='{"code":0}' />

## 19 楼 <Site url="19lou.com"/>

### 头条 <Site url="19lou.com" size="sm" />

<Route namespace="19lou" :data='{"path":"/:city?","categories":["bbs"],"example":"/19lou/jiaxing","parameters":{"city":"分类，见下表，默认为 www，即杭州"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"头条","maintainers":["nczitzk"],"description":"| 杭州 | 台州    | 嘉兴    | 宁波   | 湖州   |\n| ---- | ------- | ------- | ------ | ------ |\n| www  | taizhou | jiaxing | ningbo | huzhou |\n\n| 绍兴     | 湖州   | 温州    | 金华   | 舟山     |\n| -------- | ------ | ------- | ------ | -------- |\n| shaoxing | huzhou | wenzhou | jinhua | zhoushan |\n\n| 衢州   | 丽水   | 义乌 | 萧山     | 余杭   |\n| ------ | ------ | ---- | -------- | ------ |\n| quzhou | lishui | yiwu | xiaoshan | yuhang |\n\n| 临安  | 富阳   | 桐庐   | 建德   | 淳安   |\n| ----- | ------ | ------ | ------ | ------ |\n| linan | fuyang | tonglu | jiande | chunan |","location":"index.ts","heat":38,"topFeeds":[]}' :test='{"code":0}' />

| 杭州 | 台州    | 嘉兴    | 宁波   | 湖州   |
| ---- | ------- | ------- | ------ | ------ |
| www  | taizhou | jiaxing | ningbo | huzhou |

| 绍兴     | 湖州   | 温州    | 金华   | 舟山     |
| -------- | ------ | ------- | ------ | -------- |
| shaoxing | huzhou | wenzhou | jinhua | zhoushan |

| 衢州   | 丽水   | 义乌 | 萧山     | 余杭   |
| ------ | ------ | ---- | -------- | ------ |
| quzhou | lishui | yiwu | xiaoshan | yuhang |

| 临安  | 富阳   | 桐庐   | 建德   | 淳安   |
| ----- | ------ | ------ | ------ | ------ |
| linan | fuyang | tonglu | jiande | chunan |

## Elastic 中文社区 <Site url="elasticsearch.cn"/>

### 发现 <Site url="elasticsearch.cn" size="sm" />

<Route namespace="elasticsearch-cn" :data='{"path":"/:params?","categories":["bbs"],"example":"/elasticsearch-cn","parameters":{"params":"分类，可在对应分类页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["elasticsearch.cn/:params","elasticsearch.cn/"],"target":"/:params"}],"name":"发现","maintainers":["nczitzk"],"description":"如 [Elasticsearch 最新](https://elasticsearch.cn/category-2) 的 URL 为 `https://elasticsearch.cn/category-2`，则分类参数处填写 `category-2`，最后得到路由地址 [`/elasticsearch-cn/category-2`](https://rsshub.app/elasticsearch-cn/category-2)。\n\n  又如 [求职招聘 30 天热门](https://elasticsearch.cn/sort_type-hot____category-12__day-30) 的 URL 为 `https://elasticsearch.cn/sort_type-hot____category-12__day-30`，则分类参数处填写 `sort_type-hot____category-12__day-30`，最后得到路由地址 [`/elasticsearch-cn/sort_type-hot____category-12__day-30`](https://rsshub.app/elasticsearch-cn/sort_type-hot____category-12__day-30)。","location":"index.ts","heat":38,"topFeeds":[]}' :test='{"code":0}' />

如 [Elasticsearch 最新](https://elasticsearch.cn/category-2) 的 URL 为 `https://elasticsearch.cn/category-2`，则分类参数处填写 `category-2`，最后得到路由地址 [`/elasticsearch-cn/category-2`](https://rsshub.app/elasticsearch-cn/category-2)。

  又如 [求职招聘 30 天热门](https://elasticsearch.cn/sort_type-hot____category-12__day-30) 的 URL 为 `https://elasticsearch.cn/sort_type-hot____category-12__day-30`，则分类参数处填写 `sort_type-hot____category-12__day-30`，最后得到路由地址 [`/elasticsearch-cn/sort_type-hot____category-12__day-30`](https://rsshub.app/elasticsearch-cn/sort_type-hot____category-12__day-30)。

## 百合会 <Site url="yamibo.com"/>

### BBS - 板块 <Site url="yamibo.com" size="sm" />

<Route namespace="yamibo" :data='{"name":"BBS - 板块","categories":["bbs"],"path":"/bbs/forum/:fid/:type?","example":"/yamibo/bbs/forum/5/404","parameters":{"fid":"板块 id，可从URL中提取。https://bbs.yamibo.com/forum-aa-b.html中的aa部分即为fid值","type":"板块子分类，网页中选中板块分类后URL中的typeid值"},"maintainers":["KarasuShin"],"features":{"antiCrawler":true,"requireConfig":[{"optional":true,"name":"YAMIBO_SALT","description":"百合会BBS登录后的认证信息，获取方式：1. 登录百合会BBS网页版 2. 打开浏览器开发者工具，切换到 Application 面板\n3. 点击侧边栏中的Storage -> Cookies -> https://bbs.yamibo.com 4. 复制 Cookie 中的 EeqY_2132_saltkey 值"},{"optional":true,"name":"YAMIBO_AUTH","description":"百合会BBS登录后的认证信息，获取方式：1. 登录百合会BBS网页版 2. 打开浏览器开发者工具，切换到 Application 面板\n3. 点击侧边栏中的Storage -> Cookies -> https://bbs.yamibo.com 4. 复制 Cookie 中的 EeqY_2132_auth 值"}]},"description":"::: warning\n百合会BBS访问部分板块需要用户登录认证，请参考配置说明\n:::","location":"bbs/forum.ts","heat":29,"topFeeds":[]}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:44:18)\n    at listOnTimeout (node:internal/timers:588:17)\n    at processTimers (node:internal/timers:523:7)"}' />

::: warning
百合会BBS访问部分板块需要用户登录认证，请参考配置说明
:::

### BBS - 讨论串 <Site url="yamibo.com" size="sm" />

<Route namespace="yamibo" :data='{"name":"BBS - 讨论串","categories":["bbs"],"path":"/bbs/thread/:tid","example":"/yamibo/bbs/thread/541914","parameters":{"tid":"讨论串 id，可从URL中提取。https://bbs.yamibo.com/forum.php?mod=viewthread&tid=xxxx中的xxx或https://bbs.yamibo.com/thread-aaa-b-c.html中的aaa部分即为tid值"},"maintainers":["KarasuShin"],"features":{"antiCrawler":true,"requireConfig":[{"optional":true,"name":"YAMIBO_SALT","description":"百合会BBS登录后的认证信息，获取方式：1. 登录百合会BBS网页版 2. 打开浏览器开发者工具，切换到 Application 面板\n3. 点击侧边栏中的Storage -> Cookies -> https://bbs.yamibo.com 4. 复制 Cookie 中的 EeqY_2132_saltkey 值"},{"optional":true,"name":"YAMIBO_AUTH","description":"百合会BBS登录后的认证信息，获取方式：1. 登录百合会BBS网页版 2. 打开浏览器开发者工具，切换到 Application 面板\n3. 点击侧边栏中的Storage -> Cookies -> https://bbs.yamibo.com 4. 复制 Cookie 中的 EeqY_2132_auth 值"}]},"description":"::: warning\n百合会BBS访问部分讨论串需要用户登录认证，请参考配置说明\n:::","location":"bbs/thread.ts","heat":8,"topFeeds":[]}' :test='{"code":0}' />

::: warning
百合会BBS访问部分讨论串需要用户登录认证，请参考配置说明
:::

## Saraba1st <Site url="stage1st.com"/>

### 论坛摘要 <Site url="stage1st.com" size="sm" />

<Route namespace="saraba1st" :data='{"path":"/digest/:tid","categories":["bbs"],"example":"/saraba1st/digest/forum-6-1","parameters":{"tid":"论坛 id"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"论坛摘要","maintainers":["shinemoon"],"description":"版面网址如果为 `https://stage1st.com/2b/forum-6-1.html` 那么论坛 id 就是 `forum-6-1`。","location":"digest.ts","heat":32,"topFeeds":[]}' :test='{"code":0}' />

版面网址如果为 `https://stage1st.com/2b/forum-6-1.html` 那么论坛 id 就是 `forum-6-1`。

### 帖子 <Site url="stage1st.com" size="sm" />

<Route namespace="saraba1st" :data='{"path":"/thread/:tid","categories":["bbs"],"example":"/saraba1st/thread/751272","parameters":{"tid":"帖子 id"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"帖子","maintainers":["zengxs"],"description":"帖子网址如果为 `https://stage1st.com/2b/thread-751272-1-1.html` 那么帖子 id 就是 `751272`。","location":"thread.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

帖子网址如果为 `https://stage1st.com/2b/thread-751272-1-1.html` 那么帖子 id 就是 `751272`。

## 猿料 <Site url="yuanliao.info"/>

uTools 官方社区

### 主题 <Site url="yuanliao.info" size="sm" />

<Route namespace="yuanliao" :data='{"path":"/:tag?","name":"主题","url":"yuanliao.info","maintainers":["nczitzk"],"example":"/yuanliao","parameters":{"tag":{"description":"标签，默认为全部，可在对应标签页 URL 中找到","options":[{"label":"问题反馈","value":"bug-report"},{"label":"Windows","value":"windows"},{"label":"macOS","value":"macos"},{"label":"Linux","value":"linux"},{"label":"意见建议","value":"suggestions"},{"label":"插件发布","value":"plugins"},{"label":"插件需求","value":"plugin-needs"},{"label":"开发者","value":"developers"}]}},"description":":::tip\n订阅 [问题反馈](https://yuanliao.info/t/bug-report)，其源网址为 `https://yuanliao.info/t/bug-report`，请参考该 URL 指定部分构成参数，此时路由为 [`/yuanliao/bug-report`](https://rsshub.app/yuanliao/bug-report)。\n:::\n\n| 标签                                             | id                                                       |\n| ------------------------------------------------ | -------------------------------------------------------- |\n| [问题反馈](https://yuanliao.info/t/bug-report)   | [bug-report](https://rsshub.app/yuanliao/bug-report)     |\n| [Windows](https://yuanliao.info/t/windows)       | [windows](https://rsshub.app/yuanliao/windows)           |\n| [macOS](https://yuanliao.info/t/macos)           | [macos](https://rsshub.app/yuanliao/macos)               |\n| [Linux](https://yuanliao.info/t/linux)           | [linux](https://rsshub.app/yuanliao/linux)               |\n| [意见建议](https://yuanliao.info/t/suggestions)  | [suggestions](https://rsshub.app/yuanliao/suggestions)   |\n| [插件发布](https://yuanliao.info/t/plugins)      | [plugins](https://rsshub.app/yuanliao/plugins)           |\n| [插件需求](https://yuanliao.info/t/plugin-needs) | [plugin-needs](https://rsshub.app/yuanliao/plugin-needs) |\n| [开发者](https://yuanliao.info/t/developers)     | [developers](https://rsshub.app/yuanliao/developers)     |\n","categories":["bbs"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yuanliao.info","yuanliao.info/t/:tag"]},{"title":"问题反馈","source":["yuanliao.info/t/bug-report"],"target":"/bug-report"},{"title":"Windows","source":["yuanliao.info/t/windows"],"target":"/windows"},{"title":"macOS","source":["yuanliao.info/t/macos"],"target":"/macos"},{"title":"Linux","source":["yuanliao.info/t/linux"],"target":"/linux"},{"title":"意见建议","source":["yuanliao.info/t/suggestions"],"target":"/suggestions"},{"title":"插件发布","source":["yuanliao.info/t/plugins"],"target":"/plugins"},{"title":"插件需求","source":["yuanliao.info/t/plugin-needs"],"target":"/plugin-needs"},{"title":"开发者","source":["yuanliao.info/t/developers"],"target":"/developers"}],"view":0,"location":"index.ts","heat":23,"topFeeds":[]}' :test='{"code":0}' />

:::tip
订阅 [问题反馈](https://yuanliao.info/t/bug-report)，其源网址为 `https://yuanliao.info/t/bug-report`，请参考该 URL 指定部分构成参数，此时路由为 [`/yuanliao/bug-report`](https://rsshub.app/yuanliao/bug-report)。
:::

| 标签                                             | id                                                       |
| ------------------------------------------------ | -------------------------------------------------------- |
| [问题反馈](https://yuanliao.info/t/bug-report)   | [bug-report](https://rsshub.app/yuanliao/bug-report)     |
| [Windows](https://yuanliao.info/t/windows)       | [windows](https://rsshub.app/yuanliao/windows)           |
| [macOS](https://yuanliao.info/t/macos)           | [macos](https://rsshub.app/yuanliao/macos)               |
| [Linux](https://yuanliao.info/t/linux)           | [linux](https://rsshub.app/yuanliao/linux)               |
| [意见建议](https://yuanliao.info/t/suggestions)  | [suggestions](https://rsshub.app/yuanliao/suggestions)   |
| [插件发布](https://yuanliao.info/t/plugins)      | [plugins](https://rsshub.app/yuanliao/plugins)           |
| [插件需求](https://yuanliao.info/t/plugin-needs) | [plugin-needs](https://rsshub.app/yuanliao/plugin-needs) |
| [开发者](https://yuanliao.info/t/developers)     | [developers](https://rsshub.app/yuanliao/developers)     |


## MIUI <Site url="miui.com"/>

### 小米社区用户发帖 <Site url="miui.com" size="sm" />

<Route namespace="miui" :data='{"path":"/community/user/:uid","categories":["bbs"],"example":"/miui/community/user/1200057564","parameters":{"uid":"小米用户 UID，可于网页版用户主页链接中 `uid` 项获取"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["web.vip.miui.com/page/info/mio/mio/homePage"]}],"name":"小米社区用户发帖","maintainers":["abc1763613206"],"location":"community/user.ts","heat":21,"topFeeds":[]}' :test='{"code":0}' />

## 丁香园 <Site url="dxy.cn"/>

### 板块 <Site url="dxy.cn" size="sm" />

<Route namespace="dxy" :data='{"path":"/bbs/board/:boardId","categories":["bbs"],"example":"/dxy/bbs/board/46","parameters":{"specialId":"板块 ID，可在对应板块页 URL 中找到"},"name":"板块","maintainers":["TonyRL"],"radar":[{"source":["www.dxy.cn/bbs/newweb/pc/category/:boardIdId"],"target":"/bbs/board/:boardIdId"},{"source":["3g.dxy.cn/bbs/board/:boardIdId"],"target":"/bbs/board/:boardIdId"}],"location":"board.ts","heat":9,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 710)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

### 个人帖子 <Site url="dxy.cn" size="sm" />

<Route namespace="dxy" :data='{"path":"/bbs/profile/thread/:userId","categories":["bbs"],"example":"/dxy/bbs/profile/thread/8335054","parameters":{"userId":"个人 ID，可在 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["dxy.cn/bbs/newweb/pc/profile/:userId/threads","dxy.cn/bbs/newweb/pc/profile/:userId"]}],"name":"个人帖子","maintainers":["TonyRL"],"location":"profile/thread.ts","heat":6,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 712)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

### 专题 <Site url="dxy.cn" size="sm" />

<Route namespace="dxy" :data='{"path":"/bbs/special/:specialId","categories":["bbs"],"example":"/dxy/bbs/special/72","parameters":{"specialId":"专题 ID，可在对应专题页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"专题","maintainers":["TonyRL"],"location":"special.ts","heat":5,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 711)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## 飞客茶馆 <Site url="flyert.com.cn"/>

### 会员说 <Site url="www.flyert.com.cn" size="sm" />

<Route namespace="flyert" :data='{"path":"/forum/:params{.+}?","name":"会员说","url":"www.flyert.com.cn","maintainers":["nczitzk"],"example":"/flyert/forum","parameters":{"params":"参数，默认为空，可在对应分类页 URL 中找到"},"description":"::: tip\n  若订阅 [酒店集团优惠](https://www.flyert.com.cn/forum.php?mod=forumdisplay&sum=all&fid=all&catid=322&filter=sortid&sortid=144&searchsort=1&youhui_type=19)，网址为 `https://www.flyert.com.cn/forum.php?mod=forumdisplay&sum=all&fid=all&catid=322&filter=sortid&sortid=144&searchsort=1&youhui_type=19`。截取 `https://www.flyert.com.cn/forum.php?` 到末尾的部分 `mod=forumdisplay&sum=all&fid=all&catid=322&filter=sortid&sortid=144&searchsort=1&youhui_type=19` **进行 UrlEncode 编码** 后作为参数填入，此时路由为 [`/flyert/forum/mod%3Dforumdisplay%26sum%3Dall%26fid%3Dall%26catid%3D322%26filter%3Dsortid%26sortid%3D144%26searchsort%3D1%26youhui_type%3D226`](https://rsshub.app/flyert/forum/mod%3Dforumdisplay%26sum%3Dall%26fid%3Dall%26catid%3D322%26filter%3Dsortid%26sortid%3D144%26searchsort%3D1%26youhui_type%3D226)。\n:::\n    ","categories":["bbs"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.flyert.com.cn/forum.php"]}],"location":"forum.ts","heat":17,"topFeeds":[]}' :test='{"code":0}' />

::: tip
  若订阅 [酒店集团优惠](https://www.flyert.com.cn/forum.php?mod=forumdisplay&sum=all&fid=all&catid=322&filter=sortid&sortid=144&searchsort=1&youhui_type=19)，网址为 `https://www.flyert.com.cn/forum.php?mod=forumdisplay&sum=all&fid=all&catid=322&filter=sortid&sortid=144&searchsort=1&youhui_type=19`。截取 `https://www.flyert.com.cn/forum.php?` 到末尾的部分 `mod=forumdisplay&sum=all&fid=all&catid=322&filter=sortid&sortid=144&searchsort=1&youhui_type=19` **进行 UrlEncode 编码** 后作为参数填入，此时路由为 [`/flyert/forum/mod%3Dforumdisplay%26sum%3Dall%26fid%3Dall%26catid%3D322%26filter%3Dsortid%26sortid%3D144%26searchsort%3D1%26youhui_type%3D226`](https://rsshub.app/flyert/forum/mod%3Dforumdisplay%26sum%3Dall%26fid%3Dall%26catid%3D322%26filter%3Dsortid%26sortid%3D144%26searchsort%3D1%26youhui_type%3D226)。
:::
    

## Deepin <Site url="bbs.deepin.org"/>

### 首页主题列表 <Site url="bbs.deepin.org" size="sm" />

<Route namespace="deepin" :data='{"path":"/threads/:type?","categories":["bbs"],"example":"/deepin/threads/latest","parameters":{"type":{"description":"主题类型","options":[{"value":"hot","label":"最热主题"},{"value":"latest","label":"最新主题"}]}},"name":"首页主题列表","maintainers":["myml"],"radar":[{"source":["bbs.deepin.org"],"target":"/threads/latest"}],"location":"thread.ts","heat":12,"topFeeds":[]}' :test='{"code":0}' />

### BBS Home Page <Site url="bbs.deepin.org" size="sm" />

<Route namespace="deepin" :data='{"path":"/homepage/:user_id","categories":["bbs"],"example":"/deepin/homepage/78326","parameters":{"user_id":"user id"},"name":"BBS Home Page","maintainers":["tensor-tech"],"radar":[{"source":["bbs.deepin.org/user/:user_id"],"target":"/homepage/:user_id"}],"location":"homepage.ts","heat":1,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 614)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## LA UOSC社区 <Site url="loongarch.org"/>

### 最热 / 最新帖子 <Site url="bbs.loongarch.org/" size="sm" />

<Route namespace="loongarch" :data='{"path":"/post/:type?","categories":["bbs"],"example":"/loongarch/post/newest","parameters":{"type":"top 或 newest"},"radar":[{"source":["bbs.loongarch.org"]}],"name":"最热 / 最新帖子","maintainers":["ladeng07","3401797899"],"url":"bbs.loongarch.org/","location":"post.ts","heat":12,"topFeeds":[]}' :test='{"code":0}' />

## 小特社区 <Site url="xiaote.com"/>

### 首页帖子 <Site url="xiaote.com/" size="sm" />

<Route namespace="xiaote" :data='{"path":"/news","categories":["bbs"],"example":"/xiaote/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["xiaote.com/"]}],"name":"首页帖子","maintainers":["wxsimon"],"url":"xiaote.com/","location":"index.ts","heat":9,"topFeeds":[]}' :test='{"code":0}' />

## Meteor <Site url="meteor.today"/>

### 看板 <Site url="meteor.today" size="sm" />

<Route namespace="meteor" :data='{"path":"/:board?","categories":["bbs"],"example":"/meteor/all","parameters":{"board":"看板 ID 或簡稱，可在 URL 或下方路由找到，預設為 `all`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"看板","maintainers":["TonyRL"],"location":"index.ts","heat":4,"topFeeds":[]}' :test='{"code":0}' />

### 看板列表 <Site url="meteor.today/" size="sm" />

<Route namespace="meteor" :data='{"path":"/boards","categories":["bbs"],"example":"/meteor/boards","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["meteor.today/"]}],"name":"看板列表","maintainers":["TonyRL"],"url":"meteor.today/","location":"boards.ts","heat":1,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected [ …(308) ] to not include &#39;https://meteor.today/board/%E5%BD%B0%…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.1.9/node_modules/@vitest/expect/dist/index.js:1196:17)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.1.9/node_modules/@vitest/expect/dist/index.js:972:17)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@5.2.1/node_modules/chai/chai.js:1706:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1484)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)"}' />

## Zuvio <Site url="irs.zuvio.com.tw"/>

### 校園話題 <Site url="irs.zuvio.com.tw" size="sm" />

<Route namespace="zuvio" :data='{"path":"/student5/:board?","categories":["bbs"],"example":"/zuvio/student5/34","parameters":{"board":"看板 ID，空为全站文章，可在看板 URL 或下方路由找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"校園話題","maintainers":["TonyRL"],"location":"student5.ts","heat":5,"topFeeds":[]}' :test='{"code":0}' />

### 看板列表 <Site url="irs.zuvio.com.tw" size="sm" />

<Route namespace="zuvio" :data='{"path":"/student5/boards","categories":["bbs"],"example":"/zuvio/student5/boards","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"看板列表","maintainers":["TonyRL"],"location":"boards.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## 斗鱼直播 <Site url="www.douyu.com"/>

### 鱼吧帖子 <Site url="www.douyu.com" size="sm" />

<Route namespace="douyu" :data='{"path":"/group/:id/:sort?","categories":["bbs"],"example":"/douyu/group/1011","parameters":{"id":"鱼吧 id，可在鱼吧页 URL 中找到","sort":"排序方式，见下表，默认为发布时间排序"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yuba.douyu.com/group/:id","yuba.douyu.com/group/newself/:id","yuba.douyu.com/group/newall/:id","yuba.douyu.com/"],"target":"/group/:id"}],"name":"鱼吧帖子","maintainers":["nczitzk"],"description":"| 回复时间排序 | 发布时间排序 |\n| ------------ | ------------ |\n| 1            | 2            |","location":"group.ts","heat":3,"topFeeds":[]}' :test='{"code":0}' />

| 回复时间排序 | 发布时间排序 |
| ------------ | ------------ |
| 1            | 2            |

### 鱼吧跟帖 <Site url="www.douyu.com" size="sm" />

<Route namespace="douyu" :data='{"path":"/post/:id","categories":["bbs"],"example":"/douyu/post/631737151576473201","parameters":{"id":"帖子 id，可在帖子页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yuba.douyu.com/p/:id","yuba.douyu.com/"]}],"name":"鱼吧跟帖","maintainers":["nczitzk"],"location":"post.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## 腾讯网 <Site url="qq.com"/>

### 腾讯频道 <Site url="pd.qq.com/" size="sm" />

<Route namespace="qq" :data='{"path":["/pd/guild/:id/:sub?/:sort?"],"categories":["bbs"],"example":"/qq/pd/guild/qrp4pkq01d/650967831/created","parameters":{"id":"频道号","sub":"子频道 ID，网页端 URL `subc` 参数的值，默认为 `hot`（全部）","sort":"排序方式，`hot`（热门），`created`（最新发布），`replied`（最新回复），默认为 `created`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["pd.qq.com/"]}],"name":"腾讯频道","maintainers":["mobyw"],"url":"pd.qq.com/","location":"pd/guild.ts","heat":2,"topFeeds":[]}' :test='{"code":0}' />

## Dcard <Site url="www.dcard.tw"/>

::: warning
僅能透過台灣 IP 抓取。
:::

### 板塊帖子 <Site url="www.dcard.tw" size="sm" />

<Route namespace="dcard" :data='{"path":"/:section/:type?","categories":["bbs"],"example":"/dcard/funny/popular","parameters":{"section":"板塊名稱，URL 中獲得","type":"排序，popular 熱門；latest 最新，默認為 latest"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"板塊帖子","maintainers":["HenryQW"],"location":"section.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 599)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## Discourse 

::: warning
You need to set the environment variable `DISCOURSE_CONFIG_{id}` before using it. Please refer to Configuration section in the Deploy page of the documentation.
:::

### Notifications 

<Route namespace="discourse" :data='{"path":"/:configId/notifications/:fulltext?","categories":["bbs"],"example":"/discourse/0/notifications","parameters":{"configId":"Environment variable configuration id, see above","fulltext":"Fetch the content if the notification points to a post. This is disabled by default, set it to `1` to enable it."},"features":{"requireConfig":[{"name":"DISCOURSE_CONFIG_*","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Notifications","maintainers":[],"description":"::: warning\nIf you opt to enable `fulltext` feature, consider adding `limit` parameter to your query to avoid sending too many request.\n:::","location":"notifications.ts","heat":0,"topFeeds":[]}' :test='undefined' />

::: warning
If you opt to enable `fulltext` feature, consider adding `limit` parameter to your query to avoid sending too many request.
:::

### Official RSS 

<Route namespace="discourse" :data='{"path":"/:configId/official/:path{.+}","categories":["bbs"],"example":"/discourse/0/official/latest","parameters":{"configId":"Environment variable configuration id, see above","path":"Discourse RSS path between `domain` and `.rss`. All supported Rss path can be found in [https://meta.discourse.org/t/finding-discourse-rss-feeds/264134](https://meta.discourse.org/t/finding-discourse-rss-feeds/264134). For example: the path of [https://meta.discourse.org/top/all.rss](https://meta.discourse.org/top/all.rss) is `top/all`."},"features":{"requireConfig":[{"name":"DISCOURSE_CONFIG_*","description":"Configure the Discourse environment variables referring to [https://docs.rsshub.app/deploy/config#discourse](https://docs.rsshub.app/deploy/config#discourse)."}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Official RSS","maintainers":["Raikyou","dzx-dzx"],"location":"official.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### Latest posts 

<Route namespace="discourse" :data='{"path":"/:configId/posts","categories":["bbs"],"example":"/discourse/0/posts","parameters":{"configId":"Environment variable configuration id, see above"},"features":{"requireConfig":[{"name":"DISCOURSE_CONFIG_*","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Latest posts","maintainers":["dzx-dzx"],"location":"posts.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## Pikabu <Site url="pikabu.ru"/>

### Unknown <Site url="pikabu.ru" size="sm" />

<Route namespace="pikabu" :data='{"path":"/:type/:name","name":"Unknown","maintainers":[],"location":"community.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### User <Site url="pikabu.ru" size="sm" />

<Route namespace="pikabu" :data='{"path":"/user/:name","categories":["bbs"],"example":"/pikabu/user/@bula.dragon","parameters":{"name":"User name"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["pikabu.ru/:name"]}],"name":"User","maintainers":["TonyRL"],"location":"user.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1791)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## The Ring of Wonder <Site url="trow.cc"/>

### 首页更新 <Site url="trow.cc/" size="sm" />

<Route namespace="trow" :data='{"path":"/portal","categories":["bbs"],"example":"/trow/portal","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["trow.cc/"]}],"name":"首页更新","maintainers":["shiningdracon"],"url":"trow.cc/","location":"portal.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2295)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## ZodGame <Site url="zodgame.xyz"/>

### forum <Site url="zodgame.xyz" size="sm" />

<Route namespace="zodgame" :data='{"path":"/forum/:fid?","categories":["bbs"],"example":"/zodgame/forum/13","parameters":{"fid":"forum id, can be found in URL"},"features":{"requireConfig":[{"name":"ZODGAME_COOKIE","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"forum","maintainers":["FeCCC"],"location":"forum.ts","heat":0,"topFeeds":[]}' :test='undefined' />

