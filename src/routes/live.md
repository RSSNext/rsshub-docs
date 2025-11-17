# 🎥 Live

## Twitch <Site url="www.twitch.tv"/>

### Live <Site url="www.twitch.tv" size="sm" />

<Route namespace="twitch" :data='{"path":"/live/:login","categories":["live"],"view":5,"example":"/twitch/live/riotgames","parameters":{"login":"Twitch username"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Live","maintainers":["hoilc"],"location":"live.ts","heat":289,"topFeeds":[{"id":"60683277623649280","type":"feed","url":"rsshub://twitch/live/vedal987","title":"Twitch - vedal987 - Live","description":"Twitch - vedal987 - Live - Powered by RSSHub","image":null},{"id":"43556488621069312","type":"feed","url":"rsshub://twitch/live/riotgames","title":"Twitch - Riot Games - Live","description":"Twitch - Riot Games - Live - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Channel Video <Site url="www.twitch.tv" size="sm" />

<Route namespace="twitch" :data='{"path":"/video/:login/:filter?","categories":["live"],"view":3,"example":"/twitch/video/riotgames/highlights","parameters":{"login":"Twitch username","filter":{"description":"Video type, Default to all","options":[{"value":"archive","label":"Archive"},{"value":"highlights","label":"Highlights"},{"value":"all","label":"All"}],"default":"all"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.twitch.tv/:login/videos"],"target":"/video/:login"}],"name":"Channel Video","maintainers":["hoilc"],"location":"video.ts","heat":63,"topFeeds":[{"id":"59281409354376192","type":"feed","url":"rsshub://twitch/video/riotgames/highlights","title":"Twitch - Riot Games - Recent highlights and uploads","description":"Twitch - Riot Games - Recent highlights and uploads - Powered by RSSHub","image":null},{"id":"68185461739717632","type":"feed","url":"rsshub://twitch/video/thebs_chen/all","title":"Twitch - 陈一发儿放映室 - All videos","description":"Twitch - 陈一发儿放映室 - All videos - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### Stream Schedule <Site url="www.twitch.tv" size="sm" />

<Route namespace="twitch" :data='{"path":"/schedule/:login","categories":["live"],"example":"/twitch/schedule/riotgames","parameters":{"login":"Twitch username"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.twitch.tv/:login/schedule"]}],"name":"Stream Schedule","maintainers":["hoilc"],"location":"schedule.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 哔哩哔哩 bilibili <Site url="www.bilibili.com"/>

### 直播开播 <Site url="www.bilibili.com" size="sm" />

<Route namespace="bilibili" :data='{"path":"/live/room/:roomID","categories":["live"],"example":"/bilibili/live/room/3","parameters":{"roomID":"房间号, 可在直播间 URL 中找到, 长短号均可"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["live.bilibili.com/:roomID"]}],"name":"直播开播","maintainers":["Qixingchen"],"location":"live-room.ts","heat":218,"topFeeds":[{"id":"55242372435247104","type":"feed","url":"rsshub://bilibili/live/room/33989","title":"泛式 直播间开播状态","description":"泛式 直播间开播状态 - Powered by RSSHub","image":"https://i0.hdslb.com/bfs/face/2608aaa45309c77ac88fbfaa40e160b8c7892985.jpg"},{"id":"55139597974077440","type":"feed","url":"rsshub://bilibili/live/room/5050","title":"EdmundDZhang 直播间开播状态","description":"EdmundDZhang 直播间开播状态 - Powered by RSSHub","image":"https://i1.hdslb.com/bfs/face/50900541a74f7875867c38a1e8e572b44b388060.jpg"}]}' :test='{"code":0}' />

### 直播分区 <Site url="www.bilibili.com" size="sm" />

<Route namespace="bilibili" :data='{"path":"/live/area/:areaID/:order","categories":["live"],"example":"/bilibili/live/area/207/online","parameters":{"areaID":"分区 ID 分区增删较多, 可通过 [分区列表](https://api.live.bilibili.com/room/v1/Area/getList) 查询","order":"排序方式, live_time 开播时间, online 人气"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"直播分区","maintainers":["Qixingchen"],"description":"::: warning\n  由于接口未提供开播时间，如果直播间未更换标题与分区，将视为一次。如果直播间更换分区与标题，将视为另一项\n:::","location":"live-area.ts","heat":28,"topFeeds":[{"id":"56218629867262976","type":"feed","url":"rsshub://bilibili/live/area/207/online","title":"哔哩哔哩直播-娱乐·舞见分区-人气直播","description":"哔哩哔哩直播-娱乐·舞见分区-人气直播 - Powered by RSSHub","image":null},{"id":"77359644443453440","type":"feed","url":"rsshub://bilibili/live/area/646/online","title":"哔哩哔哩直播-生活·生活杂谈分区-人气直播","description":"哔哩哔哩直播-生活·生活杂谈分区-人气直播 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

::: warning
  由于接口未提供开播时间，如果直播间未更换标题与分区，将视为一次。如果直播间更换分区与标题，将视为另一项
:::

### 直播搜索 <Site url="www.bilibili.com" size="sm" />

<Route namespace="bilibili" :data='{"path":"/live/search/:key/:order","categories":["live"],"example":"/bilibili/live/search/dota/online","parameters":{"key":"搜索关键字","order":"排序方式, live_time 开播时间, online 人气"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"直播搜索","maintainers":["Qixingchen"],"location":"live-search.ts","heat":7,"topFeeds":[{"id":"57655769992100864","type":"feed","url":"rsshub://bilibili/live/search/%E6%BC%AB%E5%B1%95/live_time","title":"哔哩哔哩直播-漫展-最新开播","description":"哔哩哔哩直播-漫展-最新开播 - Powered by RSSHub","image":null},{"id":"189092794847298560","type":"feed","url":"rsshub://bilibili/live/search/%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80/online%20","title":"哔哩哔哩直播-王者荣耀-","description":"哔哩哔哩直播-王者荣耀- - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

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

<Route namespace="douyin" :data='{"path":"/live/:rid","categories":["live"],"example":"/douyin/live/685317364746","parameters":{"rid":"直播间 id, 可在主播直播间页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["live.douyin.com/:rid"]}],"name":"直播间开播","maintainers":["TonyRL"],"location":"live.ts","heat":182,"topFeeds":[{"id":"72456550295913472","type":"feed","url":"rsshub://douyin/live/921169302662","title":"陈伯(全能王)的抖音直播间 - 抖音直播","description":"欢迎来到陈伯(全能王)的抖音直播间，陈伯(全能王)与大家一起记录美好生活 - 抖音直播 - Powered by RSSHub","image":"https://p11.douyinpic.com/origin/aweme-avatar/tos-cn-avt-0015_bed947cccd9ad785a0a96dbec1fb2fe3.jpeg"},{"id":"59212657080258560","type":"feed","url":"rsshub://douyin/live/685317364746","title":"JJ斗地主的抖音直播间 - 抖音直播","description":"欢迎来到JJ斗地主的抖音直播间，JJ斗地主与大家一起记录美好生活 - 抖音直播 - Powered by RSSHub","image":"https://p3.douyinpic.com/origin/aweme-avatar/tos-cn-avt-0015_970a4d312023de54cbac3d0f9e0e77f8.jpeg"}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## YouTube <Site url="youtube.com"/>

### Live <Site url="youtube.com" size="sm" />

<Route namespace="youtube" :data='{"path":"/live/:username/:embed?","categories":["live"],"example":"/youtube/live/@GawrGura","parameters":{"username":"YouTuber id","embed":"Default to embed the video, set to any value to disable embedding"},"features":{"requireConfig":[{"name":"YOUTUBE_KEY","description":"YouTube API Key, support multiple keys, split them with `,`, [API Key application](https://console.developers.google.com/)"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Live","maintainers":["sussurr127"],"location":"live.ts","heat":128,"topFeeds":[{"id":"69051964046186496","type":"feed","url":"rsshub://youtube/live/@laogao","title":"老高與小茉 Mr & Mrs Gao&#39;s Live Status","description":"$老高與小茉 Mr & Mrs Gao&#39;s live streaming status - Powered by RSSHub","image":null},{"id":"42001666786766848","type":"feed","url":"rsshub://youtube/live/@GawrGura","title":"Gawr Gura Ch. hololive-EN&#39;s Live Status","description":"$Gawr Gura Ch. hololive-EN&#39;s live streaming status - Powered by RSSHub","image":null}]}' :test='undefined' />

## 斗鱼直播 <Site url="www.douyu.com"/>

### 直播间开播 <Site url="www.douyu.com" size="sm" />

<Route namespace="douyu" :data='{"path":"/room/:id","categories":["live"],"example":"/douyu/room/24422","parameters":{"id":"直播间 id, 可在主播直播间页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.douyu.com/:id","www.douyu.com/"]}],"name":"直播间开播","maintainers":["DIYgod","ChaosTong"],"location":"room.ts","heat":88,"topFeeds":[{"id":"73704015177969664","type":"feed","url":"rsshub://douyu/room/71415","title":"寅子的斗鱼直播间","description":"寅子的斗鱼直播间 - Powered by RSSHub","image":"https://rpic.douyucdn.cn/asrpic/251117/71415_src_1658.avif/dy4"},{"id":"62335921117247488","type":"feed","url":"rsshub://douyu/room/9999","title":"yyfyyf的斗鱼直播间","description":"yyfyyf的斗鱼直播间 - Powered by RSSHub","image":"https://rpic.douyucdn.cn/asrpic/251117/9999_src_1430.avif/dy4"}]}' :test='{"code":0}' />

## 浪 Play 直播 <Site url="lang.live"/>

### 直播间开播 <Site url="lang.live" size="sm" />

<Route namespace="lang" :data='{"path":"/live/room/:id","categories":["live"],"example":"/lang/live/room/1352360","parameters":{"id":"直播间 id, 可在主播直播间页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["lang.live/room/:id"]}],"name":"直播间开播","maintainers":["MittWillson"],"location":"room.ts","heat":51,"topFeeds":[{"id":"154544860488526848","type":"feed","url":"rsshub://lang/live/room/1352360","title":"🌶穩住！小辣椒～🦖 的浪 Play 直播","description":"大家都勸我找個有錢人嫁了！別勸我啊，勸有錢人 🌊🌊🌊 住在浪裡的小辣椒 🌊🌊🌊 🦖 日榜 13140👰🏻入Line群當辣椒粉😝🌶 🐖🐖🐖 開播時間 🐖🐖🐖 🕛中午13：00 獨家追蹤啦！ 我有你也有 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## Yoasobi Official <Site url="www.yoasobi-music.jp"/>

### Live <Site url="www.yoasobi-music.jp/" size="sm" />

<Route namespace="yoasobi-music" :data='{"path":"/live","categories":["live"],"example":"/yoasobi-music/live","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.yoasobi-music.jp/","www.yoasobi-music.jp/live"]}],"name":"Live","maintainers":["Kiotlin"],"url":"www.yoasobi-music.jp/","location":"live.ts","heat":26,"topFeeds":[{"id":"59198397654618112","type":"feed","url":"rsshub://yoasobi-music/live","title":"LATEST LIVE","description":"YOASOBI&#39;s Latest Live - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### News & Biography <Site url="www.yoasobi-music.jp/" size="sm" />

<Route namespace="yoasobi-music" :data='{"path":"/info/:category?","categories":["live"],"example":"/yoasobi-music/info/news","parameters":{"category":"`news`, `biography`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.yoasobi-music.jp/","www.yoasobi-music.jp/:category"],"target":"/info/:category"}],"name":"News & Biography","maintainers":[],"url":"www.yoasobi-music.jp/","location":"info.ts","heat":7,"topFeeds":[{"id":"59199683879800832","type":"feed","url":"rsshub://yoasobi-music/info/biography","title":"LATEST BIOGRAPHY","description":"Yoasobi&#39;s latest biography - Powered by RSSHub","image":null},{"id":"59198663955091456","type":"feed","url":"rsshub://yoasobi-music/info/news","title":"LATEST NEWS","description":"Yoasobi&#39;s latest news - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### Media <Site url="www.yoasobi-music.jp/" size="sm" />

<Route namespace="yoasobi-music" :data='{"path":"/media","categories":["live"],"example":"/yoasobi-music/media","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.yoasobi-music.jp/","www.yoasobi-music.jp/media"]}],"name":"Media","maintainers":["Kiotlin"],"url":"www.yoasobi-music.jp/","location":"media.ts","heat":5,"topFeeds":[{"id":"59198910903209984","type":"feed","url":"rsshub://yoasobi-music/media","title":"LATEST MEDIA","description":"YOASOBI&#39;s Latest Media - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## LiSA <Site url="www.sonymusic.co.jp"/>

### Latest Discography <Site url="www.lxixsxa.com/" size="sm" />

<Route namespace="lxixsxa" :data='{"path":"/disco","categories":["live"],"example":"/lxixsxa/disco","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.lxixsxa.com/","www.lxixsxa.com/discography"]}],"name":"Latest Discography","maintainers":["Kiotlin"],"url":"www.lxixsxa.com/","location":"discography.ts","heat":21,"topFeeds":[{"id":"59200434232479744","type":"feed","url":"rsshub://lxixsxa/disco","title":"LATEST DISCOGRAPHY","description":"LiSA&#39;s Latest Albums - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### News <Site url="www.lxixsxa.com/" size="sm" />

<Route namespace="lxixsxa" :data='{"path":"/info","categories":["live"],"example":"/lxixsxa/info","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.lxixsxa.com/","www.lxixsxa.com/info"]}],"name":"News","maintainers":["Kiotlin"],"url":"www.lxixsxa.com/","location":"information.ts","heat":7,"topFeeds":[{"id":"59094487430451200","type":"feed","url":"rsshub://lxixsxa/info","title":"NEWS","description":"Let&#39;s see what is new about LiSA. - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

