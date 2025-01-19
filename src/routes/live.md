# 🎥 Live

## LiSA <Site url="www.sonymusic.co.jp"/>

### Latest Discography <Site url="www.lxixsxa.com/" size="sm" />

<Route namespace="lxixsxa" :data='{"path":"/disco","categories":["live"],"example":"/lxixsxa/disco","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.lxixsxa.com/","www.lxixsxa.com/discography"]}],"name":"Latest Discography","maintainers":["Kiotlin"],"url":"www.lxixsxa.com/","location":"discography.ts"}' :test='{"code":1,"message":"AssertionError: expected -3884464654 to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1157)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)"}' />

### News <Site url="www.lxixsxa.com/" size="sm" />

<Route namespace="lxixsxa" :data='{"path":"/info","categories":["live"],"example":"/lxixsxa/info","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.lxixsxa.com/","www.lxixsxa.com/info"]}],"name":"News","maintainers":["Kiotlin"],"url":"www.lxixsxa.com/","location":"information.ts"}' :test='{"code":0}' />

## Twitch <Site url="www.twitch.tv"/>

### Channel Video <Site url="www.twitch.tv" size="sm" />

<Route namespace="twitch" :data='{"path":"/video/:login/:filter?","categories":["live","popular"],"view":3,"example":"/twitch/video/riotgames/highlights","parameters":{"login":"Twitch username","filter":{"description":"Video type, Default to all","options":[{"value":"archive","label":"Archive"},{"value":"highlights","label":"Highlights"},{"value":"all","label":"All"}],"default":"all"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.twitch.tv/:login/videos"],"target":"/video/:login"}],"name":"Channel Video","maintainers":["hoilc"],"location":"video.ts"}' :test='{"code":0}' />

### Live <Site url="www.twitch.tv" size="sm" />

<Route namespace="twitch" :data='{"path":"/live/:login","categories":["live","popular"],"view":5,"example":"/twitch/live/riotgames","parameters":{"login":"Twitch username"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Live","maintainers":["hoilc"],"location":"live.ts"}' :test='{"code":0}' />

### Stream Schedule <Site url="www.twitch.tv" size="sm" />

<Route namespace="twitch" :data='{"path":"/schedule/:login","categories":["live"],"example":"/twitch/schedule/riotgames","parameters":{"login":"Twitch username"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.twitch.tv/:login/schedule"]}],"name":"Stream Schedule","maintainers":["hoilc"],"location":"schedule.ts"}' :test='{"code":0}' />

## Yoasobi Official <Site url="www.yoasobi-music.jp"/>

### Live <Site url="www.yoasobi-music.jp/" size="sm" />

<Route namespace="yoasobi-music" :data='{"path":"/live","categories":["live"],"example":"/yoasobi-music/live","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.yoasobi-music.jp/","www.yoasobi-music.jp/live"]}],"name":"Live","maintainers":["Kiotlin"],"url":"www.yoasobi-music.jp/","location":"live.ts"}' :test='undefined' />

### Media <Site url="www.yoasobi-music.jp/" size="sm" />

<Route namespace="yoasobi-music" :data='{"path":"/media","categories":["live"],"example":"/yoasobi-music/media","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.yoasobi-music.jp/","www.yoasobi-music.jp/media"]}],"name":"Media","maintainers":["Kiotlin"],"url":"www.yoasobi-music.jp/","location":"media.ts"}' :test='undefined' />

### News & Biography <Site url="www.yoasobi-music.jp/" size="sm" />

<Route namespace="yoasobi-music" :data='{"path":"/info/:category?","categories":["live"],"example":"/yoasobi-music/info/news","parameters":{"category":"`news`, `biography`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.yoasobi-music.jp/","www.yoasobi-music.jp/:category"],"target":"/info/:category"}],"name":"News & Biography","maintainers":[],"url":"www.yoasobi-music.jp/","location":"info.ts"}' :test='undefined' />

## YouTube <Site url="youtube.com"/>

### Live <Site url="youtube.com" size="sm" />

<Route namespace="youtube" :data='{"path":"/live/:username/:embed?","categories":["live"],"example":"/youtube/live/@GawrGura","parameters":{"username":"YouTuber id","embed":"Default to embed the video, set to any value to disable embedding"},"features":{"requireConfig":[{"name":"YOUTUBE_KEY","description":" YouTube API Key, support multiple keys, split them with `,`, [API Key application](https://console.developers.google.com/)"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Live","maintainers":["sussurr127"],"location":"live.ts"}' :test='undefined' />

## 哔哩哔哩 bilibili <Site url="www.bilibili.com"/>

### 直播分区 <Site url="www.bilibili.com" size="sm" />

<Route namespace="bilibili" :data='{"path":"/live/area/:areaID/:order","categories":["live"],"example":"/bilibili/live/area/207/online","parameters":{"areaID":"分区 ID 分区增删较多, 可通过 [分区列表](https://api.live.bilibili.com/room/v1/Area/getList) 查询","order":"排序方式, live_time 开播时间, online 人气"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"直播分区","maintainers":["Qixingchen"],"description":"::: warning\n  由于接口未提供开播时间，如果直播间未更换标题与分区，将视为一次。如果直播间更换分区与标题，将视为另一项\n:::","location":"live-area.ts"}' :test='{"code":0}' />

::: warning
  由于接口未提供开播时间，如果直播间未更换标题与分区，将视为一次。如果直播间更换分区与标题，将视为另一项
:::

### 直播开播 <Site url="www.bilibili.com" size="sm" />

<Route namespace="bilibili" :data='{"path":"/live/room/:roomID","categories":["live"],"example":"/bilibili/live/room/3","parameters":{"roomID":"房间号, 可在直播间 URL 中找到, 长短号均可"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["live.bilibili.com/:roomID"]}],"name":"直播开播","maintainers":["Qixingchen"],"location":"live-room.ts"}' :test='{"code":0}' />

### 直播搜索 <Site url="www.bilibili.com" size="sm" />

<Route namespace="bilibili" :data='{"path":"/live/search/:key/:order","categories":["live"],"example":"/bilibili/live/search/dota/online","parameters":{"key":"搜索关键字","order":"排序方式, live_time 开播时间, online 人气"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"直播搜索","maintainers":["Qixingchen"],"location":"live-search.ts"}' :test='{"code":0}' />

## 抖音直播 <Site url="douyin.com"/>

::: warning
反爬严格，需要启用 puppeteer。抖音的视频 CDN 会验证 Referer，意味着许多阅读器都无法直接播放内嵌视频，以下是一些变通解决方案：

1.  启用内嵌视频 (`embed=1`), 参考 [通用参数 -> 多媒体处理](/parameter#多媒体处理) 配置 `multimedia_hotlink_template` **或** `wrap_multimedia_in_iframe`。
2.  关闭内嵌视频 (`embed=0`)，手动点击 `视频直链` 超链接，一般情况下均可成功播放视频。若仍然出现 HTTP 403，请复制 URL 以后到浏览器打开。
3.  点击原文链接打开抖音网页版的视频详情页播放视频。
:::

额外参数

| 键      | 含义             | 值                     | 默认值  |
| ------- | ---------------- | ---------------------- | ------- |
| `embed` | 是否启用内嵌视频 | `0`/`1`/`true`/`false` | `false` |

### 直播间开播 <Site url="douyin.com" size="sm" />

<Route namespace="douyin" :data='{"path":"/live/:rid","categories":["live"],"example":"/douyin/live/685317364746","parameters":{"rid":"直播间 id, 可在主播直播间页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["live.douyin.com/:rid"]}],"name":"直播间开播","maintainers":["TonyRL"],"location":"live.ts"}' :test='{"code":0}' />

## 斗鱼直播 <Site url="www.douyu.com"/>

### 直播间开播 <Site url="www.douyu.com" size="sm" />

<Route namespace="douyu" :data='{"path":"/room/:id","categories":["live"],"example":"/douyu/room/24422","parameters":{"id":"直播间 id, 可在主播直播间页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.douyu.com/:id","www.douyu.com/"]}],"name":"直播间开播","maintainers":["DIYgod","ChaosTong"],"location":"room.ts"}' :test='{"code":0}' />

## 浪 Play 直播 <Site url="lang.live"/>

### 直播间开播 <Site url="lang.live" size="sm" />

<Route namespace="lang" :data='{"path":"/live/room/:id","categories":["live"],"example":"/lang/live/room/1352360","parameters":{"id":"直播间 id, 可在主播直播间页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["lang.live/room/:id"]}],"name":"直播间开播","maintainers":["MittWillson"],"location":"room.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1107)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

