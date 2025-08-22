# 🌟 Popular

## 小红书 <Site url="xiaohongshu.com"/>

### 用户笔记/收藏 <Site url="xiaohongshu.com" size="sm" />

<Route namespace="xiaohongshu" :data='{"path":"/user/:user_id/:category/:routeParams?","name":"用户笔记/收藏","categories":["social-media","popular"],"view":0,"maintainers":["lotosbin","howerhe","rien7","dddaniel1","pseudoyu"],"radar":[{"source":["xiaohongshu.com/user/profile/:user_id"],"target":"/user/:user_id/notes"}],"example":"/xiaohongshu/user/593032945e87e77791e03696/notes","features":{"antiCrawler":true,"requirePuppeteer":true,"requireConfig":[{"name":"XIAOHONGSHU_COOKIE","optional":true,"description":"小红书 cookie 值，可在网络里面看到。"}]},"parameters":{"user_id":"user id, length 24 characters","category":{"description":"category, notes or collect","options":[{"value":"notes","label":"notes"},{"value":"collect","label":"collect"}],"default":"notes"},"routeParams":{"description":"displayLivePhoto,`/user/:user_id/notes/displayLivePhoto=0`,不限时LivePhoto显示为图片,`/user/:user_id/notes/displayLivePhoto=1`,取值不为0时LivePhoto显示为视频","default":"0"}},"location":"user.ts","heat":1497348,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2487)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## X (Twitter) <Site url="x.com"/>

Specify options (in the format of query string) in parameter `routeParams` to control some extra features for Tweets

| Key                            | Description                                                                                                                          | Accepts                | Defaults to                               |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- | ----------------------------------------- |
| `readable`                     | Enable readable layout                                                                                                               | `0`/`1`/`true`/`false` | `false`                                   |
| `authorNameBold`               | Display author name in bold                                                                                                          | `0`/`1`/`true`/`false` | `false`                                   |
| `showAuthorInTitle`            | Show author name in title                                                                                                            | `0`/`1`/`true`/`false` | `false` (`true` in `/twitter/followings`) |
| `showAuthorAsTitleOnly`        | Show only author name as title                                                                                                            | `0`/`1`/`true`/`false` | `false`                                   |
| `showAuthorInDesc`             | Show author name in description (RSS body)                                                                                           | `0`/`1`/`true`/`false` | `false` (`true` in `/twitter/followings`) |
| `showQuotedAuthorAvatarInDesc` | Show avatar of quoted Tweet's author in description (RSS body) (Not recommended if your RSS reader extracts images from description) | `0`/`1`/`true`/`false` | `false`                                   |
| `showAuthorAvatarInDesc`       | Show avatar of author in description (RSS body) (Not recommended if your RSS reader extracts images from description)                | `0`/`1`/`true`/`false` | `false`                                   |
| `showEmojiForRetweetAndReply`  | Use "🔁" instead of "RT", "↩️" & "💬" instead of "Re"                                                                                | `0`/`1`/`true`/`false` | `false`                                   |
| `showSymbolForRetweetAndReply` | Use " RT " instead of "", " Re " instead of ""                                                                                       | `0`/`1`/`true`/`false` | `true`                                    |
| `showRetweetTextInTitle`       | Show quote comments in title (if `false`, only the retweeted tweet will be shown in the title)                                       | `0`/`1`/`true`/`false` | `true`                                    |
| `addLinkForPics`               | Add clickable links for Tweet pictures                                                                                               | `0`/`1`/`true`/`false` | `false`                                   |
| `showTimestampInDescription`   | Show timestamp in description                                                                                                        | `0`/`1`/`true`/`false` | `false`                                   |
| `showQuotedInTitle`            | Show quoted tweet in title                                                                                                           | `0`/`1`/`true`/`false` | `false`                                   |
| `widthOfPics`                  | Width of Tweet pictures                                                                                                              | Unspecified/Integer    | Unspecified                               |
| `heightOfPics`                 | Height of Tweet pictures                                                                                                             | Unspecified/Integer    | Unspecified                               |
| `sizeOfAuthorAvatar`           | Size of author's avatar                                                                                                              | Integer                | `48`                                      |
| `sizeOfQuotedAuthorAvatar`     | Size of quoted tweet's author's avatar                                                                                               | Integer                | `24`                                      |
| `includeReplies`               | Include replies, only available in `/twitter/user`                                                                                   | `0`/`1`/`true`/`false` | `false`                                   |
| `includeRts`                   | Include retweets, only available in `/twitter/user`                                                                                  | `0`/`1`/`true`/`false` | `true`                                    |
| `forceWebApi`                  | Force using Web API even if Developer API is configured, only available in `/twitter/user` and `/twitter/keyword`                    | `0`/`1`/`true`/`false` | `false`                                   |
| `count`                        | `count` parameter passed to Twitter API, only available in `/twitter/user`                                                           | Unspecified/Integer    | Unspecified                               |
| `onlyMedia`                    | Only get tweets with a media                                                                                                             | `0`/`1`/`true`/`false` | `false`                 |
| `mediaNumber `                 | Number the medias                                                                                                            | `0`/`1`/`true`/`false` | `false`                 |

Specify different option values than default values to improve readability. The URL

```
https://rsshub.app/twitter/user/durov/readable=1&authorNameBold=1&showAuthorInTitle=1&showAuthorInDesc=1&showQuotedAuthorAvatarInDesc=1&showAuthorAvatarInDesc=1&showEmojiForRetweetAndReply=1&showRetweetTextInTitle=0&addLinkForPics=1&showTimestampInDescription=1&showQuotedInTitle=1&heightOfPics=150
```

generates

<img loading="lazy" src="/img/readable-twitter.png" alt="Readable Twitter RSS of Durov" />

Currently supports two authentication methods:

- Using `TWITTER_AUTH_TOKEN` (recommended): Configure a comma-separated list of `auth_token` cookies of logged-in Twitter Web. RSSHub will use this information to directly access Twitter's web API to obtain data.

- Using `TWITTER_USERNAME` `TWITTER_PASSWORD` and `TWITTER_AUTHENTICATION_SECRET`: Configure a comma-separated list of Twitter username and password. RSSHub will use this information to log in to Twitter and obtain data using the mobile API. Please note that if you have not logged in with the current IP address before, it is easy to trigger Twitter's risk control mechanism.


### User media <Site url="x.com" size="sm" />

<Route namespace="twitter" :data='{"path":"/media/:id/:routeParams?","categories":["social-media","popular"],"view":2,"example":"/twitter/media/_RSSHub","parameters":{"id":"username; in particular, if starts with `+`, it will be recognized as a [unique ID](https://github.com/DIYgod/RSSHub/issues/12221), e.g. `+44196397`","routeParams":"extra parameters, see the table above."},"features":{"requireConfig":[{"name":"TWITTER_USERNAME","description":"Please see above for details."},{"name":"TWITTER_PASSWORD","description":"Please see above for details."},{"name":"TWITTER_AUTH_TOKEN","description":"Please see above for details."}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User media","maintainers":["DIYgod","yindaheng98","Rongronggg9"],"radar":[{"source":["x.com/:id/media"],"target":"/media/:id"}],"location":"media.ts","heat":545930,"topFeeds":[]}' :test='undefined' />

### User timeline <Site url="x.com" size="sm" />

<Route namespace="twitter" :data='{"path":"/user/:id/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/twitter/user/_RSSHub","parameters":{"id":"username; in particular, if starts with `+`, it will be recognized as a [unique ID](https://github.com/DIYgod/RSSHub/issues/12221), e.g. `+44196397`","routeParams":"extra parameters, see the table above"},"features":{"requireConfig":[{"name":"TWITTER_USERNAME","description":"Please see above for details."},{"name":"TWITTER_PASSWORD","description":"Please see above for details."},{"name":"TWITTER_AUTHENTICATION_SECRET","description":"TOTP 2FA secret, please see above for details.","optional":true},{"name":"TWITTER_AUTH_TOKEN","description":"Please see above for details."},{"name":"TWITTER_THIRD_PARTY_API","description":"Use third-party API to query twitter data","optional":true}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User timeline","maintainers":["DIYgod","yindaheng98","Rongronggg9","CaoMeiYouRen","pseudoyu"],"radar":[{"source":["x.com/:id"],"target":"/user/:id"}],"location":"user.ts","heat":495870,"topFeeds":[]}' :test='undefined' />

### List timeline <Site url="x.com" size="sm" />

<Route namespace="twitter" :data='{"path":"/list/:id/:routeParams?","categories":["social-media","popular"],"example":"/twitter/list/1502570462752219136","parameters":{"id":"list id, get from url","routeParams":"extra parameters, see the table above"},"features":{"requireConfig":[{"name":"TWITTER_AUTH_TOKEN","description":"Please see above for details."},{"name":"TWITTER_THIRD_PARTY_API","description":"Please see above for details."}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"List timeline","maintainers":["DIYgod","xyqfer","pseudoyu"],"radar":[{"source":["x.com/i/lists/:id"],"target":"/list/:id"}],"location":"list.ts","heat":4706,"topFeeds":[]}' :test='undefined' />

### Keyword <Site url="x.com" size="sm" />

<Route namespace="twitter" :data='{"path":"/keyword/:keyword/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/twitter/keyword/RSSHub","parameters":{"keyword":"keyword","routeParams":"extra parameters, see the table above"},"features":{"requireConfig":[{"name":"TWITTER_USERNAME","description":"Please see above for details."},{"name":"TWITTER_PASSWORD","description":"Please see above for details."},{"name":"TWITTER_AUTH_TOKEN","description":"Please see above for details."},{"name":"TWITTER_THIRD_PARTY_API","description":"Please see above for details."}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Keyword","maintainers":["DIYgod","yindaheng98","Rongronggg9","pseudoyu"],"radar":[{"source":["x.com/search"]}],"location":"keyword.ts","heat":3774,"topFeeds":[]}' :test='undefined' />

## Instagram <Site url="www.instagram.com"/>

### User Profile - Picnob <Site url="www.instagram.com" size="sm" />

<Route namespace="picnob" :data='{"path":"/user/:id/:type?","categories":["social-media","popular"],"example":"/picnob/user/xlisa_olivex","parameters":{"id":"Instagram id","type":"Type of profile page (profile or tagged)"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.pixnoy.com/profile/:id"],"target":"/user/:id"},{"source":["www.pixnoy.com/profile/:id/tagged"],"target":"/user/:id/tagged"}],"name":"User Profile - Picnob","maintainers":["TonyRL","micheal-death","AiraNadih","DIYgod"],"view":2,"location":"user.ts","heat":439883,"topFeeds":[]}' :test='{"code":0}' />

## Telegram <Site url="t.me"/>

### Channel <Site url="t.me" size="sm" />

<Route namespace="telegram" :data='{"path":"/channel/:username/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/telegram/channel/awesomeRSSHub","parameters":{"username":"channel username","routeParams":"extra parameters, see the table below\n| Key                    | Description                                                           | Accepts                                            | Defaults to  |\n| :--------------------: | :-------------------------------------------------------------------: | :------------------------------------------------: | :----------: |\n| showLinkPreview        | Show the link preview from Telegram                                   | 0/1/true/false                                     | true         |\n| showViaBot             | For messages sent via bot, show the bot                               | 0/1/true/false                                     | true         |\n| showReplyTo            | For reply messages, show the target of the reply                      | 0/1/true/false                                     | true         |\n| showFwdFrom            | For forwarded messages, show the forwarding source                    | 0/1/true/false                                     | true         |\n| showFwdFromAuthor      | For forwarded messages, show the author of the forwarding source      | 0/1/true/false                                     | true         |\n| showInlineButtons      | Show inline buttons                                                   | 0/1/true/false                                     | false        |\n| showMediaTagInTitle    | Show media tags in the title                                          | 0/1/true/false                                     | true         |\n| showMediaTagAsEmoji    | Show media tags as emoji                                              | 0/1/true/false                                     | true         |\n| showHashtagAsHyperlink | Show hashtags as hyperlinks (`https://t.me/s/channel?q=%23hashtag`) | 0/1/true/false                                     | true         |\n| includeFwd             | Include forwarded messages                                            | 0/1/true/false                                     | true         |\n| includeReply           | Include reply messages                                                | 0/1/true/false                                     | true         |\n| includeServiceMsg      | Include service messages (e.g. message pinned, channel photo updated) | 0/1/true/false                                     | true         |\n| includeUnsupportedMsg  | Include messages unsupported by t.me                                  | 0/1/true/false                                     | false        |\n| searchQuery            | search query                                                          | keywords; replace `#hashtag` with `%23hashtag` | (no keyword) |\n\nSpecify different option values than default values can meet different needs, URL\n\n```\nhttps://rsshub.app/telegram/channel/NewlearnerChannel/showLinkPreview=0&showViaBot=0&showReplyTo=0&showFwdFrom=0&showFwdFromAuthor=0&showInlineButtons=0&showMediaTagInTitle=1&showMediaTagAsEmoji=1&includeFwd=0&includeReply=1&includeServiceMsg=0&includeUnsupportedMsg=0\n```\n\ngenerates an RSS without any link previews and annoying metadata, with emoji media tags in the title, without forwarded messages (but with reply messages), and without messages you don&#39;t care about (service messages and unsupported messages), for people who prefer pure subscriptions.\n\nFor backward compatibility reasons, invalid `routeParams` will be treated as `searchQuery` .\n"},"features":{"requireConfig":[{"name":"TELEGRAM_SESSION","optional":true,"description":"Telegram API Authentication"},{"name":"TELEGRAM_API_ID","optional":true,"description":"Telegram API ID"},{"name":"TELEGRAM_API_HASH","optional":true,"description":"Telegram API Hash"},{"name":"TELEGRAM_MAX_CONCURRENT_DOWNLOADS","optional":true,"description":"Telegram Max Concurrent Downloads"},{"name":"TELEGRAM_PROXY_HOST","optional":true,"description":"Telegram Proxy Host"},{"name":"TELEGRAM_PROXY_PORT","optional":true,"description":"Telegram Proxy Port"},{"name":"TELEGRAM_PROXY_SECRET","optional":true,"description":"Telegram Proxy Secret"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["t.me/s/:username"],"target":"/channel/:username"}],"name":"Channel","maintainers":["DIYgod","Rongronggg9","synchrone","pseudoyu"],"description":"\n::: tip\n  Due to Telegram restrictions, some channels involving pornography, copyright, and politics cannot be subscribed. You can confirm by visiting `https://t.me/s/:username`, it&#39;s recommended to deploy your own instance with telegram api configs (create your telegram application via `https://core.telegram.org/api/obtaining_api_id`, run this command `node ./lib/routes/telegram/scripts/get-telegram-session.mjs` to get `TELEGRAM_SESSION` and set it as Environment Variable).\n:::","location":"channel.ts","heat":245459,"topFeeds":[]}' :test='{"code":0}' />


::: tip
  Due to Telegram restrictions, some channels involving pornography, copyright, and politics cannot be subscribed. You can confirm by visiting `https://t.me/s/:username`, it's recommended to deploy your own instance with telegram api configs (create your telegram application via `https://core.telegram.org/api/obtaining_api_id`, run this command `node ./lib/routes/telegram/scripts/get-telegram-session.mjs` to get `TELEGRAM_SESSION` and set it as Environment Variable).
:::

## 哔哩哔哩 bilibili <Site url="www.bilibili.com"/>

### UP 主投稿 <Site url="www.bilibili.com" size="sm" />

<Route namespace="bilibili" :data='{"path":"/user/video/:uid/:embed?","categories":["social-media","popular"],"view":3,"example":"/bilibili/user/video/2267573","parameters":{"uid":"用户 id, 可在 UP 主主页中找到","embed":"默认为开启内嵌视频, 任意值为关闭"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["space.bilibili.com/:uid"],"target":"/user/video/:uid"}],"name":"UP 主投稿","maintainers":["DIYgod","Konano","pseudoyu"],"location":"video.ts","heat":181543,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 284)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

### UP 主动态 <Site url="www.bilibili.com" size="sm" />

<Route namespace="bilibili" :data='{"path":"/user/dynamic/:uid/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/bilibili/user/dynamic/2267573","parameters":{"uid":"用户 id, 可在 UP 主主页中找到","routeParams":"\n| 键         | 含义                              | 接受的值       | 默认值 |\n| ---------- | --------------------------------- | -------------- | ------ |\n| showEmoji  | 显示或隐藏表情图片                | 0/1/true/false | false  |\n| embed      | 默认开启内嵌视频                  | 0/1/true/false |  true  |\n| useAvid    | 视频链接使用 AV 号 (默认为 BV 号) | 0/1/true/false | false  |\n| directLink | 使用内容直链                      | 0/1/true/false | false  |\n| hideGoods  | 隐藏带货动态                      | 0/1/true/false | false  |\n| offset     | 偏移状态                         | string         | \"\"  |\n\n用例：`/bilibili/user/dynamic/2267573/showEmoji=1&embed=0&useAvid=1`"},"features":{"requireConfig":[{"name":"BILIBILI_COOKIE_*","optional":true,"description":"如果没有此配置，那么必须开启 puppeteer 支持；BILIBILI_COOKIE_{uid}: 用于用户关注动态系列路由，对应 uid 的 b 站用户登录后的 Cookie 值，`{uid}` 替换为 uid，如 `BILIBILI_COOKIE_2267573`，获取方式：\n1.  打开 [https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new?uid=0&type=8](https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new?uid=0&type=8)\n2.  打开控制台，切换到 Network 面板，刷新\n3.  点击 dynamic_new 请求，找到 Cookie\n4.  视频和专栏，UP 主粉丝及关注只要求 `SESSDATA` 字段，动态需复制整段 Cookie"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["space.bilibili.com/:uid"],"target":"/user/dynamic/:uid"}],"name":"UP 主动态","maintainers":["DIYgod","zytomorrow","CaoMeiYouRen","JimenezLi"],"location":"dynamic.ts","heat":20845,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 260)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

### 排行榜 <Site url="www.bilibili.com" size="sm" />

<Route namespace="bilibili" :data='{"path":"/ranking/:rid_index?/:embed?/:redirect1?/:redirect2?","name":"排行榜","maintainers":["DIYgod","hyoban"],"categories":["social-media","popular"],"view":3,"example":"/bilibili/ranking/0","parameters":{"rid_index":{"description":"排行榜分区 id 序号","default":"0","options":[{"value":"0","label":"全站"},{"value":"3","label":"国创相关"},{"value":"5","label":"动画"},{"value":"6","label":"音乐"},{"value":"7","label":"舞蹈"},{"value":"8","label":"游戏"},{"value":"9","label":"知识"},{"value":"10","label":"科技"},{"value":"11","label":"运动"},{"value":"12","label":"汽车"},{"value":"13","label":"生活"},{"value":"14","label":"美食"},{"value":"15","label":"动物圈"},{"value":"16","label":"鬼畜"},{"value":"17","label":"时尚"},{"value":"18","label":"娱乐"},{"value":"19","label":"影视"},{"value":"23","label":"原创"},{"value":"24","label":"新人"}]},"embed":"默认为开启内嵌视频, 任意值为关闭","redirect1":"留空，用于兼容之前的路由","redirect2":"留空，用于兼容之前的路由"},"location":"ranking.ts","heat":8345,"topFeeds":[]}' :test='{"code":0}' />

### B 站每周必看 <Site url="www.bilibili.com" size="sm" />

<Route namespace="bilibili" :data='{"path":"/weekly/:embed?","categories":["social-media","popular"],"example":"/bilibili/weekly","parameters":{"embed":"默认为开启内嵌视频, 任意值为关闭"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"B 站每周必看","maintainers":["ttttmr"],"location":"weekly-recommend.ts","heat":1894,"topFeeds":[]}' :test='{"code":0}' />

## YouTube <Site url="youtube.com"/>

### Channel with user handle <Site url="youtube.com" size="sm" />

<Route namespace="youtube" :data='{"path":"/user/:username/:routeParams?","categories":["social-media","popular"],"view":3,"example":"/youtube/user/@JFlaMusic","parameters":{"username":"YouTuber handle with @","routeParams":"Extra parameters, see the table below"},"description":":::tip Parameter\n| Name       | Description                                                                         | Default |\n| ---------- | ----------------------------------------------------------------------------------- | ------- |\n| embed      | Whether to embed the video, fill in any value to disable embedding                  | embed   |\n| filterShorts | Whether to filter out shorts from the feed, fill in any falsy value to show shorts | true    |\n:::","features":{"requireConfig":[{"name":"YOUTUBE_KEY","description":" YouTube API Key, support multiple keys, split them with `,`, [API Key application](https://console.developers.google.com/)","optional":true}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.youtube.com/user/:username","www.youtube.com/:username","www.youtube.com/:username/videos"],"target":"/user/:username"}],"name":"Channel with user handle","maintainers":["DIYgod","pseudoyu"],"location":"user.ts","heat":120591,"topFeeds":[]}' :test='{"code":0}' />

:::tip Parameter
| Name       | Description                                                                         | Default |
| ---------- | ----------------------------------------------------------------------------------- | ------- |
| embed      | Whether to embed the video, fill in any value to disable embedding                  | embed   |
| filterShorts | Whether to filter out shorts from the feed, fill in any falsy value to show shorts | true    |
:::

### Channel with id <Site url="youtube.com" size="sm" />

<Route namespace="youtube" :data='{"path":"/channel/:id/:routeParams?","categories":["social-media","popular"],"example":"/youtube/channel/UCDwDMPOZfxVV0x_dz0eQ8KQ","parameters":{"id":"YouTube channel id","routeParams":"Extra parameters, see the table below"},"radar":[{"source":["www.youtube.com/channel/:id"],"target":"/channel/:id"}],"name":"Channel with id","maintainers":["DIYgod","pseudoyu"],"description":":::tip Parameter\n| Name       | Description                                                                         | Default |\n| ---------- | ----------------------------------------------------------------------------------- | ------- |\n| embed      | Whether to embed the video, fill in any value to disable embedding                  | embed   |\n| filterShorts | Whether to filter out shorts from the feed, fill in any falsy value to show shorts | true    |\n:::\n\n::: tip\nYouTube provides official RSS feeds for channels, for instance [https://www.youtube.com/feeds/videos.xml?channel_id=UCDwDMPOZfxVV0x_dz0eQ8KQ](https://www.youtube.com/feeds/videos.xml?channel_id=UCDwDMPOZfxVV0x_dz0eQ8KQ).\n:::","features":{"requireConfig":[{"name":"YOUTUBE_KEY","description":" YouTube API Key, support multiple keys, split them with `,`, [API Key application](https://console.developers.google.com/)","optional":true}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"location":"channel.ts","heat":2909,"topFeeds":[]}' :test='{"code":0}' />

:::tip Parameter
| Name       | Description                                                                         | Default |
| ---------- | ----------------------------------------------------------------------------------- | ------- |
| embed      | Whether to embed the video, fill in any value to disable embedding                  | embed   |
| filterShorts | Whether to filter out shorts from the feed, fill in any falsy value to show shorts | true    |
:::

::: tip
YouTube provides official RSS feeds for channels, for instance [https://www.youtube.com/feeds/videos.xml?channel_id=UCDwDMPOZfxVV0x_dz0eQ8KQ](https://www.youtube.com/feeds/videos.xml?channel_id=UCDwDMPOZfxVV0x_dz0eQ8KQ).
:::

### Playlist <Site url="youtube.com" size="sm" />

<Route namespace="youtube" :data='{"path":"/playlist/:id/:embed?","categories":["social-media","popular"],"view":3,"example":"/youtube/playlist/PLqQ1RwlxOgeLTJ1f3fNMSwhjVgaWKo_9Z","parameters":{"id":"YouTube playlist id","embed":"Default to embed the video, set to any value to disable embedding"},"features":{"requireConfig":[{"name":"YOUTUBE_KEY","description":" YouTube API Key, support multiple keys, split them with `,`, [API Key application](https://console.developers.google.com/)","optional":true}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Playlist","maintainers":["HenryQW"],"location":"playlist.ts","heat":1409,"topFeeds":[]}' :test='{"code":0}' />

## 小宇宙 <Site url="xiaoyuzhoufm.com"/>

### 播客 <Site url="xiaoyuzhoufm.com/" size="sm" />

<Route namespace="xiaoyuzhou" :data='{"path":"/podcast/:id","categories":["multimedia","popular"],"view":4,"example":"/xiaoyuzhou/podcast/6021f949a789fca4eff4492c","parameters":{"id":"播客 id 或单集 id，可以在小宇宙播客的 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["xiaoyuzhoufm.com/podcast/:id","xiaoyuzhoufm.com/episode/:id"]}],"name":"播客","maintainers":["hondajojo","jtsang4","pseudoyu","cscnk52"],"url":"xiaoyuzhoufm.com/","location":"podcast.ts","heat":56197,"topFeeds":[]}' :test='{"code":0}' />

## 微博 <Site url="weibo.com"/>

::: warning
微博会针对请求的来源地区返回不同的结果。一个已知的例子为：部分视频因未知原因仅限中国大陆境内访问 (CDN 域名为 `locallimit.us.sinaimg.cn` 而非 `f.video.weibocdn.com`)。若一条微博含有这种视频且 RSSHub 实例部署在境外，抓取到的微博可能不含视频。将 RSSHub 部署在境内有助于抓取这种视频，但阅读器也必须处于境内网络环境以加载视频。
:::

对于微博内容，在 `routeParams` 参数中以 query string 格式指定选项，可以控制输出的样式

| 键                         | 含义                                                               | 接受的值       | 默认值                              |
| -------------------------- | ------------------------------------------------------------------ | -------------- | ----------------------------------- |
| readable                   | 是否开启细节排版可读性优化                                         | 0/1/true/false | false                               |
| authorNameBold             | 是否加粗作者名字                                                   | 0/1/true/false | false                               |
| showAuthorInTitle          | 是否在标题处显示作者                                               | 0/1/true/false | false（`/weibo/keyword/`中为 true） |
| showAuthorInDesc           | 是否在正文处显示作者                                               | 0/1/true/false | false（`/weibo/keyword/`中为 true） |
| showAuthorAvatarInDesc     | 是否在正文处显示作者头像（若阅读器会提取正文图片，不建议开启）     | 0/1/true/false | false                               |
| showEmojiForRetweet        | 显示 “🔁” 取代 “转发” 两个字                                       | 0/1/true/false | false                               |
| showRetweetTextInTitle     | 在标题出显示转发评论（置为 false 则在标题只显示被转发微博）        | 0/1/true/false | true                                |
| addLinkForPics             | 为图片添加可点击的链接                                             | 0/1/true/false | false                               |
| showTimestampInDescription | 在正文处显示被转发微博的时间戳                                     | 0/1/true/false | false                               |
| widthOfPics                | 微博配图宽（生效取决于阅读器）                                     | 不指定 / 数字  | 不指定                              |
| heightOfPics               | 微博配图高（生效取决于阅读器）                                     | 不指定 / 数字  | 不指定                              |
| sizeOfAuthorAvatar         | 作者头像大小                                                       | 数字           | 48                                  |
| displayVideo               | 是否直接显示微博视频和 Live Photo，只在博主或个人时间线 RSS 中有效 | 0/1/true/false | true                                |
| displayArticle             | 是否直接显示微博文章，只在博主或个人时间线 RSS 中有效              | 0/1/true/false | false                               |
| displayComments            | 是否直接显示热门评论，只在博主或个人时间线 RSS 中有效              | 0/1/true/false | false                               |
| showEmojiInDescription     | 是否展示正文中的微博表情，关闭则替换为 `[表情名]`                  | 0/1/true/false | true                                |
| showLinkIconInDescription  | 是否展示正文中的链接图标                                           | 0/1/true/false | true                                |
| preferMobileLink           | 是否使用移动版链接（默认使用 PC 版）                               | 0/1/true/false | false                               |
| showRetweeted              | 是否显示转发的微博                                                 | 0/1/true/false | true                               |
| showBloggerIcons           | 是否显示评论中博主的标志，只在显示热门评论时有效                                           | 0/1/true/false | false                               |

指定更多与默认值不同的参数选项可以改善 RSS 的可读性，如

[https://rsshub.app/weibo/user/1642909335/readable=1&authorNameBold=1&showAuthorInTitle=1&showAuthorInDesc=1&showAuthorAvatarInDesc=1&showEmojiForRetweet=1&showRetweetTextInTitle=0&addLinkForPics=1&showTimestampInDescription=1&showTimestampInDescription=1&heightOfPics=150](https://rsshub.app/weibo/user/1642909335/readable=1&authorNameBold=1&showAuthorInTitle=1&showAuthorInDesc=1&showAuthorAvatarInDesc=1&showEmojiForRetweet=1&showRetweetTextInTitle=0&addLinkForPics=1&showTimestampInDescription=1&showTimestampInDescription=1&heightOfPics=150)

的效果为

<img loading="lazy" src="/img/readable-weibo.png" alt="微博小秘书的可读微博 RSS" />

### 博主 <Site url="weibo.com" size="sm" />

<Route namespace="weibo" :data='{"path":"/user/:uid/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/weibo/user/1195230310","parameters":{"uid":"用户 id, 博主主页打开控制台执行 `$CONFIG.oid` 获取","routeParams":"额外参数；请参阅上面的说明和表格；特别地，当 `routeParams=1` 时开启微博视频显示"},"features":{"requireConfig":[{"name":"WEIBO_COOKIES","optional":true,"description":""}],"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["m.weibo.cn/u/:uid","m.weibo.cn/profile/:uid"],"target":"/user/:uid"},{"source":["weibo.com/u/:uid"],"target":"/user/:uid"},{"source":["www.weibo.com/u/:uid"],"target":"/user/:uid"}],"name":"博主","maintainers":["DIYgod","iplusx","Rongronggg9","Konano"],"description":"::: warning\n  部分博主仅登录可见，未提供 Cookie 的情况下不支持订阅，可以通过打开 `https://m.weibo.cn/u/:uid` 验证\n:::","location":"user.ts","heat":47738,"topFeeds":[]}' :test='{"code":0}' />

::: warning
  部分博主仅登录可见，未提供 Cookie 的情况下不支持订阅，可以通过打开 `https://m.weibo.cn/u/:uid` 验证
:::

### 热搜榜 <Site url="s.weibo.com/top/summary" size="sm" />

<Route namespace="weibo" :data='{"path":"/search/hot/:fulltext?","categories":["social-media","popular"],"view":1,"example":"/weibo/search/hot","parameters":{"fulltext":{"description":"\n-   使用`/weibo/search/hot`可以获取热搜条目列表；\n-   使用`/weibo/search/hot/fulltext`可以进一步获取热搜条目下的摘要信息（不含图片视频）；\n-   使用`/weibo/search/hot/fulltext?pic=true`可以获取图片缩略（但需要配合额外的手段，例如浏览器上的 Header Editor 等来修改 referer 参数为`https://weibo.com`，以规避微博的外链限制，否则图片无法显示。）\n-   使用`/weibo/search/hot/fulltext?pic=true&fullpic=true`可以获取 Original 图片（但需要配合额外的手段，例如浏览器上的 Header Editor 等来修改 referer 参数为`https://weibo.com`，以规避微博的外链限制，否则图片无法显示。）"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["s.weibo.com/top/summary"]}],"name":"热搜榜","maintainers":["xyqfer","shinemoon"],"url":"s.weibo.com/top/summary","location":"search/hot.ts","heat":5922,"topFeeds":[]}' :test='{"code":0}' />

### 关键词 <Site url="weibo.com" size="sm" />

<Route namespace="weibo" :data='{"path":"/keyword/:keyword/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/weibo/keyword/RSSHub","parameters":{"keyword":"你想订阅的微博关键词","routeParams":"额外参数；请参阅上面的说明和表格"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"关键词","maintainers":["DIYgod","Rongronggg9"],"location":"keyword.ts","heat":1261,"topFeeds":[]}' :test='{"code":0}' />

## pixiv <Site url="www.pixiv.net"/>

### User Activity <Site url="www.pixiv.net" size="sm" />

<Route namespace="pixiv" :data='{"path":"/user/:id","categories":["social-media","popular"],"view":2,"example":"/pixiv/user/15288095","parameters":{"id":"user id, available in user&#39;s homepage URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.pixiv.net/users/:id","www.pixiv.net/en/users/:id"]}],"name":"User Activity","maintainers":["DIYgod"],"location":"user.ts","heat":38335,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1804)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

### Rankings <Site url="www.pixiv.net" size="sm" />

<Route namespace="pixiv" :data='{"path":"/ranking/:mode/:date?","categories":["social-media","popular"],"view":2,"example":"/pixiv/ranking/week","parameters":{"mode":{"description":"rank type","options":[{"value":"day","label":"daily rank"},{"value":"week","label":"weekly rank"},{"value":"month","label":"monthly rank"},{"value":"day_male","label":"male rank"},{"value":"day_felame","label":"female rank"},{"value":"day_ai","label":"AI-generated work Rankings"},{"value":"week_original","label":"original rank"},{"value":"week_rookie","label":"rookie user rank"},{"value":"day_r18","label":"R-18 daily rank"},{"value":"day_r18_ai","label":"R-18 AI-generated work"},{"value":"day_male_r18","label":"R-18 male rank"},{"value":"day_female_r18","label":"R-18 female rank"},{"value":"week_r18","label":"R-18 weekly rank"},{"value":"week_r18g","label":"R-18G rank"}],"default":"day"},"date":"format: `2018-4-25`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Rankings","maintainers":["EYHN"],"location":"ranking.ts","heat":7527,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1802)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

### Keyword <Site url="www.pixiv.net" size="sm" />

<Route namespace="pixiv" :data='{"path":"/search/:keyword/:order?/:mode?/:include_ai?","categories":["social-media","popular"],"view":2,"example":"/pixiv/search/Nezuko/popular","parameters":{"keyword":"keyword","order":{"description":"rank mode, empty or other for time order, popular for popular order","default":"date","options":[{"label":"time order","value":"date"},{"label":"popular order","value":"popular"}]},"mode":{"description":"filte R18 content","default":"no","options":[{"label":"only not R18","value":"safe"},{"label":"only R18","value":"r18"},{"label":"no filter","value":"no"}]},"include_ai":{"description":"whether AI-generated content is included","default":"yes","options":[{"label":"does not include AI-generated content","value":"no"},{"label":"include AI-generated content","value":"yes"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Keyword","maintainers":["DIYgod"],"location":"search.ts","heat":2029,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1803)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## PornHub <Site url="pornhub.com"/>

### Model <Site url="pornhub.com" size="sm" />

<Route namespace="pornhub" :data='{"path":"/model/:username/:language?/:sort?","categories":["multimedia","popular"],"view":3,"example":"/pornhub/model/stacy-starando","parameters":{"language":"language, see below","username":"username, part of the url e.g. `pornhub.com/model/stacy-starando`","sort":"sorting method, see below"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false,"nsfw":true},"radar":[{"source":["www.pornhub.com/model/:username","www.pornhub.com/model/:username/*"],"target":"/model/:username"},{"source":["de.pornhub.com/model/:username","de.pornhub.com/model/:username/*"],"target":"/model/:username/de"},{"source":["fr.pornhub.com/model/:username","fr.pornhub.com/model/:username/*"],"target":"/model/:username/fr"},{"source":["es.pornhub.com/model/:username","es.pornhub.com/model/:username/*"],"target":"/model/:username/es"},{"source":["it.pornhub.com/model/:username","it.pornhub.com/model/:username/*"],"target":"/model/:username/it"},{"source":["pt.pornhub.com/model/:username","pt.pornhub.com/model/:username/*"],"target":"/model/:username/pt"},{"source":["pl.pornhub.com/model/:username","pl.pornhub.com/model/:username/*"],"target":"/model/:username/pl"},{"source":["rt.pornhub.com/model/:username","rt.pornhub.com/model/:username/*"],"target":"/model/:username/rt"},{"source":["jp.pornhub.com/model/:username","jp.pornhub.com/model/:username/*"],"target":"/model/:username/jp"},{"source":["nl.pornhub.com/model/:username","nl.pornhub.com/model/:username/*"],"target":"/model/:username/nl"},{"source":["cz.pornhub.com/model/:username","cz.pornhub.com/model/:username/*"],"target":"/model/:username/cz"},{"source":["cn.pornhub.com/model/:username","cn.pornhub.com/model/:username/*"],"target":"/model/:username/cn"}],"name":"Model","maintainers":["I2IMk","queensferryme"],"location":"model.ts","heat":28624,"topFeeds":[]}' :test='{"code":0}' />

### Keyword Search <Site url="pornhub.com" size="sm" />

<Route namespace="pornhub" :data='{"path":"/search/:keyword","categories":["multimedia","popular"],"view":3,"example":"/pornhub/search/stepsister","parameters":{"keyword":"keyword"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Keyword Search","maintainers":["nczitzk"],"location":"search.ts","heat":5152,"topFeeds":[]}' :test='{"code":0}' />

### Pornstar <Site url="pornhub.com" size="sm" />

<Route namespace="pornhub" :data='{"path":"/pornstar/:username/:language?/:sort?","categories":["multimedia","popular"],"view":3,"example":"/pornhub/pornstar/june-liu/www/mr","parameters":{"username":{"description":"username, part of the url e.g. `pornhub.com/pornstar/june-liu`"},"language":{"description":"language","options":[{"value":"www","label":"English"},{"value":"de","label":"Deutsch"},{"value":"es","label":"Español"},{"value":"fr","label":"Français"},{"value":"it","label":"Italiano"},{"value":"ja","label":"日本語"},{"value":"pt","label":"Português"},{"value":"pl","label":"Polski"},{"value":"rt","label":"Русский"},{"value":"nl","label":"Dutch"},{"value":"cs","label":"Czech"},{"value":"cn","label":"中文（简体）"}],"default":"www"},"sort":{"description":"sorting method, leave empty for `Best`","options":[{"label":"Most Recent","value":"mr"},{"label":"Most Viewed","value":"mv"},{"label":"Top Rated","value":"tr"},{"label":"Longest","value":"lg"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.pornhub.com/pornstar/:username","www.pornhub.com/pornstar/:username/*"],"target":"/pornstar/:username"},{"source":["de.pornhub.com/pornstar/:username","de.pornhub.com/pornstar/:username/*"],"target":"/pornstar/:username/de"},{"source":["fr.pornhub.com/pornstar/:username","fr.pornhub.com/pornstar/:username/*"],"target":"/pornstar/:username/fr"},{"source":["es.pornhub.com/pornstar/:username","es.pornhub.com/pornstar/:username/*"],"target":"/pornstar/:username/es"},{"source":["it.pornhub.com/pornstar/:username","it.pornhub.com/pornstar/:username/*"],"target":"/pornstar/:username/it"},{"source":["pt.pornhub.com/pornstar/:username","pt.pornhub.com/pornstar/:username/*"],"target":"/pornstar/:username/pt"},{"source":["pl.pornhub.com/pornstar/:username","pl.pornhub.com/pornstar/:username/*"],"target":"/pornstar/:username/pl"},{"source":["rt.pornhub.com/pornstar/:username","rt.pornhub.com/pornstar/:username/*"],"target":"/pornstar/:username/rt"},{"source":["jp.pornhub.com/pornstar/:username","jp.pornhub.com/pornstar/:username/*"],"target":"/pornstar/:username/jp"},{"source":["nl.pornhub.com/pornstar/:username","nl.pornhub.com/pornstar/:username/*"],"target":"/pornstar/:username/nl"},{"source":["cz.pornhub.com/pornstar/:username","cz.pornhub.com/pornstar/:username/*"],"target":"/pornstar/:username/cz"},{"source":["cn.pornhub.com/pornstar/:username","cn.pornhub.com/pornstar/:username/*"],"target":"/pornstar/:username/cn"}],"name":"Pornstar","maintainers":["I2IMk","queensferryme"],"location":"pornstar.ts","heat":3782,"topFeeds":[]}' :test='{"code":0}' />

### Category <Site url="pornhub.com" size="sm" />

<Route namespace="pornhub" :data='{"path":"/category/:caty","categories":["multimedia","popular"],"view":3,"example":"/pornhub/category/popular-with-women","parameters":{"caty":"category, see [categories](https://www.pornhub.com/webmasters/categories)"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Category","maintainers":["nczitzk"],"location":"category.ts","heat":1978,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1831)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## 即刻 <Site url="m.okjike.com"/>

### 圈子 <Site url="m.okjike.com" size="sm" />

<Route namespace="jike" :data='{"path":"/topic/:id/:showUid?","categories":["social-media","popular"],"view":1,"example":"/jike/topic/556688fae4b00c57d9dd46ee","parameters":{"id":"圈子 id, 可在即刻 web 端圈子页或 APP 分享出来的圈子页 URL 中找到","showUid":{"description":"是否在内容中显示用户信息，设置为 1 则开启","options":[{"value":"1","label":"显示"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["web.okjike.com/topic/:id"],"target":"/topic/:id"}],"name":"圈子","maintainers":["DIYgod","prnake"],"location":"topic.ts","heat":22243,"topFeeds":[]}' :test='{"code":0}' />

### 用户动态 <Site url="m.okjike.com" size="sm" />

<Route namespace="jike" :data='{"path":"/user/:id","categories":["social-media","popular"],"view":1,"example":"/jike/user/3EE02BC9-C5B3-4209-8750-4ED1EE0F67BB","parameters":{"id":"用户 id, 可在即刻分享出来的单条动态页点击用户头像进入个人主页，然后在个人主页的 URL 中找到，或者在单条动态页使用 RSSHub Radar 插件"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["web.okjike.com/u/:uid"],"target":"/user/:uid"}],"name":"用户动态","maintainers":["DIYgod","prnake"],"location":"user.ts","heat":9014,"topFeeds":[]}' :test='{"code":0}' />

## 少数派 sspai <Site url="sspai.com"/>

### 首页 <Site url="sspai.com/index" size="sm" />

<Route namespace="sspai" :data='{"path":"/index","categories":["new-media","popular"],"view":0,"example":"/sspai/index","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["sspai.com/index"]}],"name":"首页","maintainers":["HenryQW"],"url":"sspai.com/index","location":"index.ts","heat":24915,"topFeeds":[]}' :test='{"code":0}' />

### Matrix <Site url="sspai.com/matrix" size="sm" />

<Route namespace="sspai" :data='{"path":"/matrix","categories":["new-media","popular"],"example":"/sspai/matrix","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["sspai.com/matrix"]}],"name":"Matrix","maintainers":["feigaoxyz"],"url":"sspai.com/matrix","location":"matrix.ts","heat":1198,"topFeeds":[]}' :test='{"code":0}' />

## 草榴社区 <Site url="t66y.com"/>

### 分区帖子 <Site url="t66y.com" size="sm" />

<Route namespace="t66y" :data='{"path":"/:id/:type?/:search?","categories":["multimedia","popular"],"example":"/t66y/20/2","parameters":{"id":"分区 id, 可在分区页 URL 中找到","type":"类型 id, 可在分区类型过滤后的 URL 中找到","search":"主题类型筛选，可在分区主题类型筛选后的 URL 中找到，默认为 `today`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false,"nsfw":true},"name":"分区帖子","maintainers":["zhboner"],"description":"> 注意：并非所有的分区都有子类型，可以参考成人文学交流区的 `古典武侠` 这一子类型。\n\n| 亚洲无码原创区 | 亚洲有码原创区 | 欧美原创区 | 动漫原创区 | 国产原创区 |\n| -------------- | -------------- | ---------- | ---------- | ---------- |\n| 2              | 15             | 4          | 5          | 25         |\n\n| 中字原创区 | 转帖交流区 | HTTP 下载区 | 在线成人区 |\n| ---------- | ---------- | ----------- | ---------- |\n| 26         | 27         | 21          | 22         |\n\n| 技术讨论区 | 新时代的我们 | 达盖尔的旗帜 | 成人文学交流 |\n| ---------- | ------------ | ------------ | ------------ |\n| 7          | 8            | 16           | 20           |\n\n  **主题过滤**\n\n  > 因为该类型无法搭配子类型使用，所以使用时 `type` 子类型需使用 `-999` 占位\n\n| 今日主题 | 热门主题 | 精华主题 | 原创主题 | 今日新作  |\n| ------- | ------- | ------- | ------- | ------ |\n| today   | hot     | digest  | 1       | 2      |","location":"index.ts","heat":21797,"topFeeds":[]}' :test='{"code":0}' />

> 注意：并非所有的分区都有子类型，可以参考成人文学交流区的 `古典武侠` 这一子类型。

| 亚洲无码原创区 | 亚洲有码原创区 | 欧美原创区 | 动漫原创区 | 国产原创区 |
| -------------- | -------------- | ---------- | ---------- | ---------- |
| 2              | 15             | 4          | 5          | 25         |

| 中字原创区 | 转帖交流区 | HTTP 下载区 | 在线成人区 |
| ---------- | ---------- | ----------- | ---------- |
| 26         | 27         | 21          | 22         |

| 技术讨论区 | 新时代的我们 | 达盖尔的旗帜 | 成人文学交流 |
| ---------- | ------------ | ------------ | ------------ |
| 7          | 8            | 16           | 20           |

  **主题过滤**

  > 因为该类型无法搭配子类型使用，所以使用时 `type` 子类型需使用 `-999` 占位

| 今日主题 | 热门主题 | 精华主题 | 原创主题 | 今日新作  |
| ------- | ------- | ------- | ------- | ------ |
| today   | hot     | digest  | 1       | 2      |

## V2EX <Site url="v2ex.com"/>

### 最热 / 最新主题 <Site url="v2ex.com" size="sm" />

<Route namespace="v2ex" :data='{"path":"/topics/:type","categories":["bbs","popular"],"view":0,"example":"/v2ex/topics/latest","parameters":{"type":{"description":"主题类型","options":[{"value":"hot","label":"最热主题"},{"value":"latest","label":"最新主题"}],"default":"hot"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"最热 / 最新主题","maintainers":["WhiteWorld"],"location":"topics.ts","heat":19994,"topFeeds":[]}' :test='{"code":0}' />

### 标签 <Site url="v2ex.com" size="sm" />

<Route namespace="v2ex" :data='{"path":"/tab/:tabid","categories":["bbs","popular"],"view":0,"example":"/v2ex/tab/hot","parameters":{"tabid":"tab标签ID,在 URL 可以找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"标签","maintainers":["liyefox"],"location":"tab.ts","heat":1381,"topFeeds":[]}' :test='{"code":0}' />

## 知乎 <Site url="www.zhihu.com"/>

::: tip
自2024年7月，未登录状态下大部分路由[无法获取全文](https://github.com/DIYgod/RSSHub/issues/16260)。若有需要请在登陆知乎后寻找并添加包含`z_c0`的Cookies至环境变量`ZHIHU_COOKIES`。
:::

### 知乎热榜 <Site url="www.zhihu.com" size="sm" />

<Route namespace="zhihu" :data='{"path":"/hot/:category?","categories":["social-media","popular"],"example":"/zhihu/hot","view":0,"features":{"requireConfig":[{"name":"ZHIHU_COOKIES","description":"","optional":true}],"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"知乎热榜","maintainers":["nczitzk","pseudoyu","DIYgod"],"location":"hot.ts","heat":10714,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2597)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

### 用户动态 <Site url="www.zhihu.com" size="sm" />

<Route namespace="zhihu" :data='{"path":"/people/activities/:id","categories":["social-media","popular"],"view":0,"example":"/zhihu/people/activities/diygod","parameters":{"id":"作者 id，可在用户主页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.zhihu.com/people/:id"]}],"name":"用户动态","maintainers":["DIYgod"],"location":"activities.ts","heat":5708,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2593)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

### 专栏 <Site url="www.zhihu.com" size="sm" />

<Route namespace="zhihu" :data='{"path":"/zhuanlan/:id","categories":["social-media","popular"],"example":"/zhihu/zhuanlan/googledevelopers","parameters":{"id":"专栏 id，可在专栏主页 URL 中找到"},"features":{"requireConfig":[{"name":"ZHIHU_COOKIES","description":""}],"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["zhuanlan.zhihu.com/:id"]}],"name":"专栏","maintainers":["DIYgod"],"location":"zhuanlan.ts","heat":1828,"topFeeds":[]}' :test='undefined' />

### 用户文章 <Site url="www.zhihu.com" size="sm" />

<Route namespace="zhihu" :data='{"path":"/posts/:usertype/:id","categories":["social-media","popular"],"example":"/zhihu/posts/people/frederchen","parameters":{"usertype":"作者 id，可在用户主页 URL 中找到","id":"用户类型usertype，参考用户主页的URL。目前有两种，见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.zhihu.com/:usertype/:id/posts","www.zhihu.com/:usertype/:id"]}],"name":"用户文章","maintainers":["whtsky","Colin-XKL"],"description":"| 普通用户 | 机构用户 |\n| -------- | -------- |\n| people   | org      |","location":"posts.ts","heat":1457,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2598)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

| 普通用户 | 机构用户 |
| -------- | -------- |
| people   | org      |

## 深圳市罗湖区人民政府 <Site url="www.szlh.gov.cn"/>

### 最新政策 <Site url="www.gov.cn/zhengce/zuixin.htm" size="sm" />

<Route namespace="gov" :data='{"path":["/zhengce/zuixin","/zhengce/:category{.+}?"],"categories":["government","popular"],"example":"/gov/zhengce/zuixin","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.gov.cn/zhengce/zuixin.htm","www.gov.cn/"]}],"name":"最新政策","maintainers":["SettingDust","nczitzk"],"url":"www.gov.cn/zhengce/zuixin.htm","location":"zhengce/index.ts","heat":2166,"topFeeds":[]}' :test='{"code":0}' />

### 国务院政策文件库 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/zhengce/zhengceku/:department","categories":["government","popular"],"example":"/gov/zhengce/zhengceku/bmwj","parameters":{"department":"库名"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"国务院政策文件库","maintainers":["zxx-457"],"location":"zhengce/zhengceku.ts","heat":1839,"topFeeds":[]}' :test='{"code":0}' />

### 政策解读 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/miit/zcjd","categories":["government","popular"],"example":"/gov/miit/zcjd","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"政策解读","maintainers":["Yoge-Code"],"location":"miit/zcjd.ts","heat":1623,"topFeeds":[]}' :test='{"code":0}' />

### 中华人民共和国国家发展和改革委员会政府信息公开 <Site url="zfxxgk.ndrc.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":["/ndrc/zfxxgk"],"name":"中华人民共和国国家发展和改革委员会政府信息公开","url":"zfxxgk.ndrc.gov.cn","maintainers":["howfool","nczitzk"],"example":"/gov/ndrc/zfxxgk","categories":["government","popular"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["zfxxgk.ndrc.gov.cn/web/dirlist.jsp"],"target":"/ndrc/zfxxgk"}],"location":"ndrc/zfxxgk.ts","heat":1587,"topFeeds":[]}' :test='{"code":0}' />

### 发展规划司 <Site url="www.nea.gov.cn/sjzz/ghs/" size="sm" />

<Route namespace="gov" :data='{"path":"/nea/sjzz/ghs","categories":["government","popular"],"example":"/gov/nea/sjzz/ghs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nea.gov.cn/sjzz/ghs/"],"target":"/nea/sjzz/ghs"}],"name":"发展规划司","maintainers":["nczitzk","pseudoyu"],"url":"www.nea.gov.cn/sjzz/ghs/","location":"nea/ghs.ts","heat":1473,"topFeeds":[]}' :test='{"code":0}' />

### 国家统计局 通用 <Site url="www.stats.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/stats/*","name":"国家统计局 通用","url":"www.stats.gov.cn","categories":["government","popular"],"maintainers":["bigfei","nczitzk","reply2future"],"example":"/gov/stats/sj/zxfb","radar":[{"title":"国家统计局 通用","source":["www.stats.gov.cn/*path"],"target":"/gov/stats/*path"}],"description":"::: tip\n路径处填写对应页面 URL 中 `http://www.stats.gov.cn/` 后的字段。下面是一个例子。\n\n若订阅 [数据 > 数据解读](http://www.stats.gov.cn/sj/sjjd/)\n则将对应页面 URL `http://www.stats.gov.cn/sj/sjjd/` 中 `http://www.stats.gov.cn/` 后的字段 `sj/sjjd` 作为路径填入。\n此时路由为 [`/gov/stats/sj/sjjd`](https://rsshub.app/gov/stats/sj/sjjd)\n\n若订阅 [新闻 > 时政要闻 > 中央精神](http://www.stats.gov.cn/xw/szyw/zyjs/)\n则将对应页面 URL `http://www.stats.gov.cn/xw/szyw/zyjs/` 中 `http://www.stats.gov.cn/`\n后的字段 `xw/szyw/zyjs` 作为路径填入。此时路由为 [`/gov/stats/xw/szyw/zyjs`](https://rsshub.app/gov/stats/xw/szyw/zyjs)\n:::","location":"stats/index.ts","heat":1277,"topFeeds":[]}' :test='{"code":0}' />

::: tip
路径处填写对应页面 URL 中 `http://www.stats.gov.cn/` 后的字段。下面是一个例子。

若订阅 [数据 > 数据解读](http://www.stats.gov.cn/sj/sjjd/)
则将对应页面 URL `http://www.stats.gov.cn/sj/sjjd/` 中 `http://www.stats.gov.cn/` 后的字段 `sj/sjjd` 作为路径填入。
此时路由为 [`/gov/stats/sj/sjjd`](https://rsshub.app/gov/stats/sj/sjjd)

若订阅 [新闻 > 时政要闻 > 中央精神](http://www.stats.gov.cn/xw/szyw/zyjs/)
则将对应页面 URL `http://www.stats.gov.cn/xw/szyw/zyjs/` 中 `http://www.stats.gov.cn/`
后的字段 `xw/szyw/zyjs` 作为路径填入。此时路由为 [`/gov/stats/xw/szyw/zyjs`](https://rsshub.app/gov/stats/xw/szyw/zyjs)
:::

### 新闻动态 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/ndrc/xwdt/:category{.+}?","name":"新闻动态","example":"/gov/ndrc/xwdt","parameters":{"category":"分类，见下表，默认为新闻发布"},"maintainers":["nczitzk"],"categories":["government","popular"],"radar":[{"title":"中华人民共和国国家发展和改革委员会 - 新闻动态","source":["ndrc.gov.cn/xwdt/:category*"]}],"description":"| 新闻发布 | 通知通告 | 委领导动态 | 司局动态 | 地方动态 |\n| -------- | -------- | ---------- | -------- | -------- |\n| xwfb     | tzgg     | wlddt      | sjdt     | dfdt     |","location":"ndrc/xwdt.ts","heat":1256,"topFeeds":[]}' :test='{"code":0}' />

| 新闻发布 | 通知通告 | 委领导动态 | 司局动态 | 地方动态 |
| -------- | -------- | ---------- | -------- | -------- |
| xwfb     | tzgg     | wlddt      | sjdt     | dfdt     |

### 文件公示 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/miit/wjgs","categories":["government","popular"],"example":"/gov/miit/wjgs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"文件公示","maintainers":["Yoge-Code"],"location":"miit/wjgs.ts","heat":1248,"topFeeds":[]}' :test='{"code":0}' />

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":["/fmprc/:category?","/mfa/wjdt/:category?"],"name":"Unknown","maintainers":["nicolaszf","nczitzk"],"description":"| 分类       | category |\n| ---------- | -------- |\n| 领导人活动 | gjldrhd  |\n| 外事日程   | wsrc     |\n| 部领导活动 | wjbxw    |\n| 业务动态   | sjxw     |\n| 发言人表态 | fyrbt    |\n| 吹风会     | cfhsl    |\n| 大使任免   | dsrm     |\n| 驻外报道   | zwbd     |\n| 政策解读   | zcjd     |","location":"mfa/wjdt.ts","heat":1216,"topFeeds":[]}' :test='undefined' />

| 分类       | category |
| ---------- | -------- |
| 领导人活动 | gjldrhd  |
| 外事日程   | wsrc     |
| 部领导活动 | wjbxw    |
| 业务动态   | sjxw     |
| 发言人表态 | fyrbt    |
| 吹风会     | cfhsl    |
| 大使任免   | dsrm     |
| 驻外报道   | zwbd     |
| 政策解读   | zcjd     |

### 最新文件 <Site url="www.chinatax.gov.cn/*" size="sm" />

<Route namespace="gov" :data='{"path":"/chinatax/latest","categories":["government","popular"],"example":"/gov/chinatax/latest","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.chinatax.gov.cn/*"]}],"name":"最新文件","maintainers":["nczitzk","fuzy112"],"url":"www.chinatax.gov.cn/*","location":"chinatax/latest.ts","heat":1190,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 938)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

### 政府信息公开 <Site url="www.csrc.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/csrc/zfxxgk_zdgk/:id?","name":"政府信息公开","url":"www.csrc.gov.cn","maintainers":["nczitzk"],"example":"/gov/csrc/zfxxgk_zdgk/c101971","parameters":{"id":"频道 id，默认为 `c101971`，即行政处罚决定，可在对应频道页 URL 中找到"},"description":"::: tip\n  若订阅 [行政处罚决定](http://www.csrc.gov.cn/csrc/c101971/zfxxgk_zdgk.shtml)，网址为 `http://www.csrc.gov.cn/csrc/c101971/zfxxgk_zdgk.shtml`。截取 `http://www.csrc.gov.cn/csrc/` 到末尾 `/zfxxgk_zdgk.shtml` 的部分 `c101971` 作为参数填入，此时路由为 [`/gov/csrc/zfxxgk_zdgk/c101971`](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101971)。\n:::\n\n#### [主动公开目录](http://www.csrc.gov.cn/csrc/c100035/zfxxgk_zdgk.shtml)\n\n| 频道                                                                    | ID                                                         |\n| ----------------------------------------------------------------------- | ---------------------------------------------------------- |\n| [按主题查看](http://www.csrc.gov.cn/csrc/c101793/zfxxgk_zdgk.shtml)     | [c101793](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101793) |\n| [按体裁文种查看](http://www.csrc.gov.cn/csrc/c101951/zfxxgk_zdgk.shtml) | [c101951](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101951) |\n| [按派出机构查看](http://www.csrc.gov.cn/csrc/c101985/zfxxgk_zdgk.shtml) | [c101985](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101985) |\n\n<details>\n<summary>更多频道</summary>\n\n#### [按主题查看](http://www.csrc.gov.cn/csrc/c101793/zfxxgk_zdgk.shtml)\n\n| 频道                                                                              | ID                                                         |\n| --------------------------------------------------------------------------------- | ---------------------------------------------------------- |\n| [综合政务](http://www.csrc.gov.cn/csrc/c101794/zfxxgk_zdgk.shtml)                 | [c101794](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101794) |\n| [发行监管](http://www.csrc.gov.cn/csrc/c101801/zfxxgk_zdgk.shtml)                 | [c101801](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101801) |\n| [公众公司监管（含北交所）](http://www.csrc.gov.cn/csrc/c101828/zfxxgk_zdgk.shtml) | [c101828](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101828) |\n| [证券交易监管](http://www.csrc.gov.cn/csrc/c101832/zfxxgk_zdgk.shtml)             | [c101832](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101832) |\n| [证券经营机构监管](http://www.csrc.gov.cn/csrc/c101837/zfxxgk_zdgk.shtml)         | [c101837](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101837) |\n| [上市公司监管](http://www.csrc.gov.cn/csrc/c101863/zfxxgk_zdgk.shtml)             | [c101863](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101863) |\n| [基金监管](http://www.csrc.gov.cn/csrc/c101876/zfxxgk_zdgk.shtml)                 | [c101876](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101876) |\n| [私募基金监管](http://www.csrc.gov.cn/csrc/c101938/zfxxgk_zdgk.shtml)             | [c101938](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101938) |\n| [区域性股权市场规范发展](http://www.csrc.gov.cn/csrc/c106301/zfxxgk_zdgk.shtml)   | [c106301](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c106301) |\n| [期货监管](http://www.csrc.gov.cn/csrc/c101901/zfxxgk_zdgk.shtml)                 | [c101901](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101901) |\n| [债券监管](http://www.csrc.gov.cn/csrc/c106306/zfxxgk_zdgk.shtml)                 | [c106306](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c106306) |\n| [行政执法](http://www.csrc.gov.cn/csrc/c101925/zfxxgk_zdgk.shtml)                 | [c101925](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101925) |\n| [行政复议](http://www.csrc.gov.cn/csrc/c105938/zfxxgk_zdgk.shtml)                 | [c105938](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105938) |\n| [国际合作](http://www.csrc.gov.cn/csrc/c101931/zfxxgk_zdgk.shtml)                 | [c101931](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101931) |\n| [证券服务机构监管](http://www.csrc.gov.cn/csrc/c105939/zfxxgk_zdgk.shtml)         | [c105939](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105939) |\n| [其他](http://www.csrc.gov.cn/csrc/c101950/zfxxgk_zdgk.shtml)                     | [c101950](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101950) |\n\n#### [按体裁文种查看](http://www.csrc.gov.cn/csrc/c101951/zfxxgk_zdgk.shtml)\n\n| 频道                                                                        | ID                                                         |\n| --------------------------------------------------------------------------- | ---------------------------------------------------------- |\n| [机构职能](http://www.csrc.gov.cn/csrc/c101952/zfxxgk_zdgk.shtml)           | [c101952](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101952) |\n| [证监会令](http://www.csrc.gov.cn/csrc/c101953/zfxxgk_zdgk.shtml)           | [c101953](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101953) |\n| [证监会公告](http://www.csrc.gov.cn/csrc/c101954/zfxxgk_zdgk.shtml)         | [c101954](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101954) |\n| [监管规则适用指引](http://www.csrc.gov.cn/csrc/c105948/zfxxgk_zdgk.shtml)   | [c105948](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105948) |\n| [行政许可批复](http://www.csrc.gov.cn/csrc/c101955/zfxxgk_zdgk.shtml)       | [c101955](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101955) |\n| [办事指南](http://www.csrc.gov.cn/csrc/c101968/zfxxgk_zdgk.shtml)           | [c101968](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101968) |\n| [监管对象](http://www.csrc.gov.cn/csrc/c101969/zfxxgk_zdgk.shtml)           | [c101969](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101969) |\n| [统计信息](http://www.csrc.gov.cn/csrc/c101970/zfxxgk_zdgk.shtml)           | [c101970](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101970) |\n| [行政处罚决定](http://www.csrc.gov.cn/csrc/c101971/zfxxgk_zdgk.shtml)       | [c101971](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101971) |\n| [市场禁入决定](http://www.csrc.gov.cn/csrc/c101972/zfxxgk_zdgk.shtml)       | [c101972](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101972) |\n| [行政执法当事人承诺](http://www.csrc.gov.cn/csrc/c106416/zfxxgk_zdgk.shtml) | [c106416](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c106416) |\n| [行政复议](http://www.csrc.gov.cn/csrc/c101973/zfxxgk_zdgk.shtml)           | [c101973](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101973) |\n| [监管措施](http://www.csrc.gov.cn/csrc/c105955/zfxxgk_zdgk.shtml)           | [c105955](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105955) |\n| [预先披露](http://www.csrc.gov.cn/csrc/c101974/zfxxgk_zdgk.shtml)           | [c101974](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101974) |\n| [发审会公告](http://www.csrc.gov.cn/csrc/c101975/zfxxgk_zdgk.shtml)         | [c101975](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101975) |\n| [重组委公告](http://www.csrc.gov.cn/csrc/c101976/zfxxgk_zdgk.shtml)         | [c101976](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101976) |\n| [规划报告](http://www.csrc.gov.cn/csrc/c101977/zfxxgk_zdgk.shtml)           | [c101977](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101977) |\n| [非行政许可事项](http://www.csrc.gov.cn/csrc/c101978/zfxxgk_zdgk.shtml)     | [c101978](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101978) |\n| [其他](http://www.csrc.gov.cn/csrc/c101979/zfxxgk_zdgk.shtml)               | [c101979](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101979) |\n| [备案管理](http://www.csrc.gov.cn/csrc/c106402/zfxxgk_zdgk.shtml)           | [c106402](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c106402) |\n\n#### [按派出机构查看](http://www.csrc.gov.cn/csrc/c101985/zfxxgk_zdgk.shtml)\n\n| 频道                                                                | ID                                                         |\n| ------------------------------------------------------------------- | ---------------------------------------------------------- |\n| [北京](http://www.csrc.gov.cn/csrc/c101986/zfxxgk_zdgk.shtml)       | [c101986](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101986) |\n| [天津](http://www.csrc.gov.cn/csrc/c101987/zfxxgk_zdgk.shtml)       | [c101987](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101987) |\n| [河北](http://www.csrc.gov.cn/csrc/c101988/zfxxgk_zdgk.shtml)       | [c101988](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101988) |\n| [山西](http://www.csrc.gov.cn/csrc/c101989/zfxxgk_zdgk.shtml)       | [c101989](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101989) |\n| [内蒙古](http://www.csrc.gov.cn/csrc/c101990/zfxxgk_zdgk.shtml)     | [c101990](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101990) |\n| [辽宁](http://www.csrc.gov.cn/csrc/c101991/zfxxgk_zdgk.shtml)       | [c101991](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101991) |\n| [吉林](http://www.csrc.gov.cn/csrc/c101992/zfxxgk_zdgk.shtml)       | [c101992](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101992) |\n| [黑龙江](http://www.csrc.gov.cn/csrc/c101993/zfxxgk_zdgk.shtml)     | [c101993](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101993) |\n| [上海](http://www.csrc.gov.cn/csrc/c101994/zfxxgk_zdgk.shtml)       | [c101994](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101994) |\n| [江苏](http://www.csrc.gov.cn/csrc/c101995/zfxxgk_zdgk.shtml)       | [c101995](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101995) |\n| [浙江](http://www.csrc.gov.cn/csrc/c101996/zfxxgk_zdgk.shtml)       | [c101996](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101996) |\n| [安徽](http://www.csrc.gov.cn/csrc/c101997/zfxxgk_zdgk.shtml)       | [c101997](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101997) |\n| [福建](http://www.csrc.gov.cn/csrc/c101998/zfxxgk_zdgk.shtml)       | [c101998](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101998) |\n| [江西](http://www.csrc.gov.cn/csrc/c101999/zfxxgk_zdgk.shtml)       | [c101999](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101999) |\n| [山东](http://www.csrc.gov.cn/csrc/c102000/zfxxgk_zdgk.shtml)       | [c102000](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102000) |\n| [河南](http://www.csrc.gov.cn/csrc/c102001/zfxxgk_zdgk.shtml)       | [c102001](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102001) |\n| [湖北](http://www.csrc.gov.cn/csrc/c102002/zfxxgk_zdgk.shtml)       | [c102002](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102002) |\n| [湖南](http://www.csrc.gov.cn/csrc/c102003/zfxxgk_zdgk.shtml)       | [c102003](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102003) |\n| [广东](http://www.csrc.gov.cn/csrc/c102004/zfxxgk_zdgk.shtml)       | [c102004](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102004) |\n| [广西](http://www.csrc.gov.cn/csrc/c102005/zfxxgk_zdgk.shtml)       | [c102005](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102005) |\n| [海南](http://www.csrc.gov.cn/csrc/c102006/zfxxgk_zdgk.shtml)       | [c102006](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102006) |\n| [重庆](http://www.csrc.gov.cn/csrc/c102007/zfxxgk_zdgk.shtml)       | [c102007](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102007) |\n| [四川](http://www.csrc.gov.cn/csrc/c102008/zfxxgk_zdgk.shtml)       | [c102008](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102008) |\n| [贵州](http://www.csrc.gov.cn/csrc/c102009/zfxxgk_zdgk.shtml)       | [c102009](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102009) |\n| [云南](http://www.csrc.gov.cn/csrc/c102010/zfxxgk_zdgk.shtml)       | [c102010](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102010) |\n| [西藏](http://www.csrc.gov.cn/csrc/c102011/zfxxgk_zdgk.shtml)       | [c102011](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102011) |\n| [陕西](http://www.csrc.gov.cn/csrc/c102012/zfxxgk_zdgk.shtml)       | [c102012](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102012) |\n| [甘肃](http://www.csrc.gov.cn/csrc/c102013/zfxxgk_zdgk.shtml)       | [c102013](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102013) |\n| [青海](http://www.csrc.gov.cn/csrc/c102014/zfxxgk_zdgk.shtml)       | [c102014](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102014) |\n| [宁夏](http://www.csrc.gov.cn/csrc/c102015/zfxxgk_zdgk.shtml)       | [c102015](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102015) |\n| [新疆](http://www.csrc.gov.cn/csrc/c102016/zfxxgk_zdgk.shtml)       | [c102016](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102016) |\n| [深圳](http://www.csrc.gov.cn/csrc/c102017/zfxxgk_zdgk.shtml)       | [c102017](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102017) |\n| [大连](http://www.csrc.gov.cn/csrc/c102018/zfxxgk_zdgk.shtml)       | [c102018](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102018) |\n| [宁波](http://www.csrc.gov.cn/csrc/c102019/zfxxgk_zdgk.shtml)       | [c102019](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102019) |\n| [厦门](http://www.csrc.gov.cn/csrc/c102020/zfxxgk_zdgk.shtml)       | [c102020](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102020) |\n| [青岛](http://www.csrc.gov.cn/csrc/c102021/zfxxgk_zdgk.shtml)       | [c102021](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102021) |\n| [上海专员办](http://www.csrc.gov.cn/csrc/c105841/zfxxgk_zdgk.shtml) | [c105841](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105841) |\n| [深圳专员办](http://www.csrc.gov.cn/csrc/c105842/zfxxgk_zdgk.shtml) | [c105842](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105842) |\n\n#### [综合政务](http://www.csrc.gov.cn/csrc/c101794/zfxxgk_zdgk.shtml)\n\n| 频道                                                                                    | ID                                                         |\n| --------------------------------------------------------------------------------------- | ---------------------------------------------------------- |\n| [组织机构](http://www.csrc.gov.cn/csrc/c101795/zfxxgk_zdgk.shtml)                       | [c101795](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101795) |\n| [征求意见](http://www.csrc.gov.cn/csrc/c101796/zfxxgk_zdgk.shtml)                       | [c101796](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101796) |\n| [废止规章](http://www.csrc.gov.cn/csrc/c101797/zfxxgk_zdgk.shtml)                       | [c101797](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101797) |\n| [财务预算管理](http://www.csrc.gov.cn/csrc/c105887/zfxxgk_zdgk.shtml)                   | [c105887](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105887) |\n| [其他](http://www.csrc.gov.cn/csrc/c101799/zfxxgk_zdgk.shtml)                           | [c101799](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101799) |\n| [全国人大建议和政协提案复文公开](http://www.csrc.gov.cn/csrc/c101800/zfxxgk_zdgk.shtml) | [c101800](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101800) |\n\n</details>\n    ","categories":["government","popular"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.csrc.gov.cn/csrc/:id/zfxxgk_zdgk.shtml"]},{"title":"主动公开目录 - 按主题查看","source":["www.csrc.gov.cn/csrc/c101793/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101793"},{"title":"主动公开目录 - 按体裁文种查看","source":["www.csrc.gov.cn/csrc/c101951/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101951"},{"title":"主动公开目录 - 按派出机构查看","source":["www.csrc.gov.cn/csrc/c101985/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101985"},{"title":"按主题查看 - 综合政务","source":["www.csrc.gov.cn/csrc/c101794/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101794"},{"title":"按主题查看 - 发行监管","source":["www.csrc.gov.cn/csrc/c101801/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101801"},{"title":"按主题查看 - 公众公司监管（含北交所）","source":["www.csrc.gov.cn/csrc/c101828/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101828"},{"title":"按主题查看 - 证券交易监管","source":["www.csrc.gov.cn/csrc/c101832/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101832"},{"title":"按主题查看 - 证券经营机构监管","source":["www.csrc.gov.cn/csrc/c101837/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101837"},{"title":"按主题查看 - 上市公司监管","source":["www.csrc.gov.cn/csrc/c101863/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101863"},{"title":"按主题查看 - 基金监管","source":["www.csrc.gov.cn/csrc/c101876/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101876"},{"title":"按主题查看 - 私募基金监管","source":["www.csrc.gov.cn/csrc/c101938/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101938"},{"title":"按主题查看 - 区域性股权市场规范发展","source":["www.csrc.gov.cn/csrc/c106301/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c106301"},{"title":"按主题查看 - 期货监管","source":["www.csrc.gov.cn/csrc/c101901/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101901"},{"title":"按主题查看 - 债券监管","source":["www.csrc.gov.cn/csrc/c106306/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c106306"},{"title":"按主题查看 - 行政执法","source":["www.csrc.gov.cn/csrc/c101925/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101925"},{"title":"按主题查看 - 行政复议","source":["www.csrc.gov.cn/csrc/c105938/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c105938"},{"title":"按主题查看 - 国际合作","source":["www.csrc.gov.cn/csrc/c101931/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101931"},{"title":"按主题查看 - 证券服务机构监管","source":["www.csrc.gov.cn/csrc/c105939/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c105939"},{"title":"按主题查看 - 其他","source":["www.csrc.gov.cn/csrc/c101950/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101950"},{"title":"按派出机构查看 - 北京","source":["www.csrc.gov.cn/csrc/c101986/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101986"},{"title":"按派出机构查看 - 天津","source":["www.csrc.gov.cn/csrc/c101987/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101987"},{"title":"按派出机构查看 - 河北","source":["www.csrc.gov.cn/csrc/c101988/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101988"},{"title":"按派出机构查看 - 山西","source":["www.csrc.gov.cn/csrc/c101989/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101989"},{"title":"按派出机构查看 - 内蒙古","source":["www.csrc.gov.cn/csrc/c101990/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101990"},{"title":"按派出机构查看 - 辽宁","source":["www.csrc.gov.cn/csrc/c101991/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101991"},{"title":"按派出机构查看 - 吉林","source":["www.csrc.gov.cn/csrc/c101992/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101992"},{"title":"按派出机构查看 - 黑龙江","source":["www.csrc.gov.cn/csrc/c101993/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101993"},{"title":"按派出机构查看 - 上海","source":["www.csrc.gov.cn/csrc/c101994/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101994"},{"title":"按派出机构查看 - 江苏","source":["www.csrc.gov.cn/csrc/c101995/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101995"},{"title":"按派出机构查看 - 浙江","source":["www.csrc.gov.cn/csrc/c101996/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101996"},{"title":"按派出机构查看 - 安徽","source":["www.csrc.gov.cn/csrc/c101997/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101997"},{"title":"按派出机构查看 - 福建","source":["www.csrc.gov.cn/csrc/c101998/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101998"},{"title":"按派出机构查看 - 江西","source":["www.csrc.gov.cn/csrc/c101999/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101999"},{"title":"按派出机构查看 - 山东","source":["www.csrc.gov.cn/csrc/c102000/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102000"},{"title":"按派出机构查看 - 河南","source":["www.csrc.gov.cn/csrc/c102001/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102001"},{"title":"按派出机构查看 - 湖北","source":["www.csrc.gov.cn/csrc/c102002/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102002"},{"title":"按派出机构查看 - 湖南","source":["www.csrc.gov.cn/csrc/c102003/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102003"},{"title":"按派出机构查看 - 广东","source":["www.csrc.gov.cn/csrc/c102004/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102004"},{"title":"按派出机构查看 - 广西","source":["www.csrc.gov.cn/csrc/c102005/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102005"},{"title":"按派出机构查看 - 海南","source":["www.csrc.gov.cn/csrc/c102006/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102006"},{"title":"按派出机构查看 - 重庆","source":["www.csrc.gov.cn/csrc/c102007/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102007"},{"title":"按派出机构查看 - 四川","source":["www.csrc.gov.cn/csrc/c102008/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102008"},{"title":"按派出机构查看 - 贵州","source":["www.csrc.gov.cn/csrc/c102009/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102009"},{"title":"按派出机构查看 - 云南","source":["www.csrc.gov.cn/csrc/c102010/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102010"},{"title":"按派出机构查看 - 西藏","source":["www.csrc.gov.cn/csrc/c102011/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102011"},{"title":"按派出机构查看 - 陕西","source":["www.csrc.gov.cn/csrc/c102012/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102012"},{"title":"按派出机构查看 - 甘肃","source":["www.csrc.gov.cn/csrc/c102013/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102013"},{"title":"按派出机构查看 - 青海","source":["www.csrc.gov.cn/csrc/c102014/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102014"},{"title":"按派出机构查看 - 宁夏","source":["www.csrc.gov.cn/csrc/c102015/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102015"},{"title":"按派出机构查看 - 新疆","source":["www.csrc.gov.cn/csrc/c102016/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102016"},{"title":"按派出机构查看 - 深圳","source":["www.csrc.gov.cn/csrc/c102017/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102017"},{"title":"按派出机构查看 - 大连","source":["www.csrc.gov.cn/csrc/c102018/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102018"},{"title":"按派出机构查看 - 宁波","source":["www.csrc.gov.cn/csrc/c102019/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102019"},{"title":"按派出机构查看 - 厦门","source":["www.csrc.gov.cn/csrc/c102020/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102020"},{"title":"按派出机构查看 - 青岛","source":["www.csrc.gov.cn/csrc/c102021/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102021"},{"title":"按派出机构查看 - 上海专员办","source":["www.csrc.gov.cn/csrc/c105841/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c105841"},{"title":"按派出机构查看 - 深圳专员办","source":["www.csrc.gov.cn/csrc/c105842/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c105842"},{"title":"综合政务 - 组织机构","source":["www.csrc.gov.cn/csrc/c101795/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101795"},{"title":"综合政务 - 征求意见","source":["www.csrc.gov.cn/csrc/c101796/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101796"},{"title":"综合政务 - 废止规章","source":["www.csrc.gov.cn/csrc/c101797/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101797"},{"title":"综合政务 - 财务预算管理","source":["www.csrc.gov.cn/csrc/c105887/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c105887"},{"title":"综合政务 - 其他","source":["www.csrc.gov.cn/csrc/c101799/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101799"},{"title":"综合政务 - 全国人大建议和政协提案复文公开","source":["www.csrc.gov.cn/csrc/c101800/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101800"}],"location":"csrc/csrc.ts","heat":1189,"topFeeds":[]}' :test='{"code":0}' />

::: tip
  若订阅 [行政处罚决定](http://www.csrc.gov.cn/csrc/c101971/zfxxgk_zdgk.shtml)，网址为 `http://www.csrc.gov.cn/csrc/c101971/zfxxgk_zdgk.shtml`。截取 `http://www.csrc.gov.cn/csrc/` 到末尾 `/zfxxgk_zdgk.shtml` 的部分 `c101971` 作为参数填入，此时路由为 [`/gov/csrc/zfxxgk_zdgk/c101971`](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101971)。
:::

#### [主动公开目录](http://www.csrc.gov.cn/csrc/c100035/zfxxgk_zdgk.shtml)

| 频道                                                                    | ID                                                         |
| ----------------------------------------------------------------------- | ---------------------------------------------------------- |
| [按主题查看](http://www.csrc.gov.cn/csrc/c101793/zfxxgk_zdgk.shtml)     | [c101793](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101793) |
| [按体裁文种查看](http://www.csrc.gov.cn/csrc/c101951/zfxxgk_zdgk.shtml) | [c101951](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101951) |
| [按派出机构查看](http://www.csrc.gov.cn/csrc/c101985/zfxxgk_zdgk.shtml) | [c101985](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101985) |

<details>
<summary>更多频道</summary>

#### [按主题查看](http://www.csrc.gov.cn/csrc/c101793/zfxxgk_zdgk.shtml)

| 频道                                                                              | ID                                                         |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [综合政务](http://www.csrc.gov.cn/csrc/c101794/zfxxgk_zdgk.shtml)                 | [c101794](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101794) |
| [发行监管](http://www.csrc.gov.cn/csrc/c101801/zfxxgk_zdgk.shtml)                 | [c101801](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101801) |
| [公众公司监管（含北交所）](http://www.csrc.gov.cn/csrc/c101828/zfxxgk_zdgk.shtml) | [c101828](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101828) |
| [证券交易监管](http://www.csrc.gov.cn/csrc/c101832/zfxxgk_zdgk.shtml)             | [c101832](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101832) |
| [证券经营机构监管](http://www.csrc.gov.cn/csrc/c101837/zfxxgk_zdgk.shtml)         | [c101837](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101837) |
| [上市公司监管](http://www.csrc.gov.cn/csrc/c101863/zfxxgk_zdgk.shtml)             | [c101863](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101863) |
| [基金监管](http://www.csrc.gov.cn/csrc/c101876/zfxxgk_zdgk.shtml)                 | [c101876](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101876) |
| [私募基金监管](http://www.csrc.gov.cn/csrc/c101938/zfxxgk_zdgk.shtml)             | [c101938](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101938) |
| [区域性股权市场规范发展](http://www.csrc.gov.cn/csrc/c106301/zfxxgk_zdgk.shtml)   | [c106301](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c106301) |
| [期货监管](http://www.csrc.gov.cn/csrc/c101901/zfxxgk_zdgk.shtml)                 | [c101901](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101901) |
| [债券监管](http://www.csrc.gov.cn/csrc/c106306/zfxxgk_zdgk.shtml)                 | [c106306](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c106306) |
| [行政执法](http://www.csrc.gov.cn/csrc/c101925/zfxxgk_zdgk.shtml)                 | [c101925](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101925) |
| [行政复议](http://www.csrc.gov.cn/csrc/c105938/zfxxgk_zdgk.shtml)                 | [c105938](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105938) |
| [国际合作](http://www.csrc.gov.cn/csrc/c101931/zfxxgk_zdgk.shtml)                 | [c101931](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101931) |
| [证券服务机构监管](http://www.csrc.gov.cn/csrc/c105939/zfxxgk_zdgk.shtml)         | [c105939](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105939) |
| [其他](http://www.csrc.gov.cn/csrc/c101950/zfxxgk_zdgk.shtml)                     | [c101950](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101950) |

#### [按体裁文种查看](http://www.csrc.gov.cn/csrc/c101951/zfxxgk_zdgk.shtml)

| 频道                                                                        | ID                                                         |
| --------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [机构职能](http://www.csrc.gov.cn/csrc/c101952/zfxxgk_zdgk.shtml)           | [c101952](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101952) |
| [证监会令](http://www.csrc.gov.cn/csrc/c101953/zfxxgk_zdgk.shtml)           | [c101953](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101953) |
| [证监会公告](http://www.csrc.gov.cn/csrc/c101954/zfxxgk_zdgk.shtml)         | [c101954](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101954) |
| [监管规则适用指引](http://www.csrc.gov.cn/csrc/c105948/zfxxgk_zdgk.shtml)   | [c105948](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105948) |
| [行政许可批复](http://www.csrc.gov.cn/csrc/c101955/zfxxgk_zdgk.shtml)       | [c101955](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101955) |
| [办事指南](http://www.csrc.gov.cn/csrc/c101968/zfxxgk_zdgk.shtml)           | [c101968](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101968) |
| [监管对象](http://www.csrc.gov.cn/csrc/c101969/zfxxgk_zdgk.shtml)           | [c101969](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101969) |
| [统计信息](http://www.csrc.gov.cn/csrc/c101970/zfxxgk_zdgk.shtml)           | [c101970](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101970) |
| [行政处罚决定](http://www.csrc.gov.cn/csrc/c101971/zfxxgk_zdgk.shtml)       | [c101971](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101971) |
| [市场禁入决定](http://www.csrc.gov.cn/csrc/c101972/zfxxgk_zdgk.shtml)       | [c101972](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101972) |
| [行政执法当事人承诺](http://www.csrc.gov.cn/csrc/c106416/zfxxgk_zdgk.shtml) | [c106416](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c106416) |
| [行政复议](http://www.csrc.gov.cn/csrc/c101973/zfxxgk_zdgk.shtml)           | [c101973](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101973) |
| [监管措施](http://www.csrc.gov.cn/csrc/c105955/zfxxgk_zdgk.shtml)           | [c105955](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105955) |
| [预先披露](http://www.csrc.gov.cn/csrc/c101974/zfxxgk_zdgk.shtml)           | [c101974](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101974) |
| [发审会公告](http://www.csrc.gov.cn/csrc/c101975/zfxxgk_zdgk.shtml)         | [c101975](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101975) |
| [重组委公告](http://www.csrc.gov.cn/csrc/c101976/zfxxgk_zdgk.shtml)         | [c101976](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101976) |
| [规划报告](http://www.csrc.gov.cn/csrc/c101977/zfxxgk_zdgk.shtml)           | [c101977](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101977) |
| [非行政许可事项](http://www.csrc.gov.cn/csrc/c101978/zfxxgk_zdgk.shtml)     | [c101978](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101978) |
| [其他](http://www.csrc.gov.cn/csrc/c101979/zfxxgk_zdgk.shtml)               | [c101979](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101979) |
| [备案管理](http://www.csrc.gov.cn/csrc/c106402/zfxxgk_zdgk.shtml)           | [c106402](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c106402) |

#### [按派出机构查看](http://www.csrc.gov.cn/csrc/c101985/zfxxgk_zdgk.shtml)

| 频道                                                                | ID                                                         |
| ------------------------------------------------------------------- | ---------------------------------------------------------- |
| [北京](http://www.csrc.gov.cn/csrc/c101986/zfxxgk_zdgk.shtml)       | [c101986](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101986) |
| [天津](http://www.csrc.gov.cn/csrc/c101987/zfxxgk_zdgk.shtml)       | [c101987](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101987) |
| [河北](http://www.csrc.gov.cn/csrc/c101988/zfxxgk_zdgk.shtml)       | [c101988](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101988) |
| [山西](http://www.csrc.gov.cn/csrc/c101989/zfxxgk_zdgk.shtml)       | [c101989](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101989) |
| [内蒙古](http://www.csrc.gov.cn/csrc/c101990/zfxxgk_zdgk.shtml)     | [c101990](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101990) |
| [辽宁](http://www.csrc.gov.cn/csrc/c101991/zfxxgk_zdgk.shtml)       | [c101991](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101991) |
| [吉林](http://www.csrc.gov.cn/csrc/c101992/zfxxgk_zdgk.shtml)       | [c101992](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101992) |
| [黑龙江](http://www.csrc.gov.cn/csrc/c101993/zfxxgk_zdgk.shtml)     | [c101993](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101993) |
| [上海](http://www.csrc.gov.cn/csrc/c101994/zfxxgk_zdgk.shtml)       | [c101994](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101994) |
| [江苏](http://www.csrc.gov.cn/csrc/c101995/zfxxgk_zdgk.shtml)       | [c101995](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101995) |
| [浙江](http://www.csrc.gov.cn/csrc/c101996/zfxxgk_zdgk.shtml)       | [c101996](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101996) |
| [安徽](http://www.csrc.gov.cn/csrc/c101997/zfxxgk_zdgk.shtml)       | [c101997](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101997) |
| [福建](http://www.csrc.gov.cn/csrc/c101998/zfxxgk_zdgk.shtml)       | [c101998](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101998) |
| [江西](http://www.csrc.gov.cn/csrc/c101999/zfxxgk_zdgk.shtml)       | [c101999](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101999) |
| [山东](http://www.csrc.gov.cn/csrc/c102000/zfxxgk_zdgk.shtml)       | [c102000](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102000) |
| [河南](http://www.csrc.gov.cn/csrc/c102001/zfxxgk_zdgk.shtml)       | [c102001](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102001) |
| [湖北](http://www.csrc.gov.cn/csrc/c102002/zfxxgk_zdgk.shtml)       | [c102002](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102002) |
| [湖南](http://www.csrc.gov.cn/csrc/c102003/zfxxgk_zdgk.shtml)       | [c102003](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102003) |
| [广东](http://www.csrc.gov.cn/csrc/c102004/zfxxgk_zdgk.shtml)       | [c102004](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102004) |
| [广西](http://www.csrc.gov.cn/csrc/c102005/zfxxgk_zdgk.shtml)       | [c102005](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102005) |
| [海南](http://www.csrc.gov.cn/csrc/c102006/zfxxgk_zdgk.shtml)       | [c102006](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102006) |
| [重庆](http://www.csrc.gov.cn/csrc/c102007/zfxxgk_zdgk.shtml)       | [c102007](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102007) |
| [四川](http://www.csrc.gov.cn/csrc/c102008/zfxxgk_zdgk.shtml)       | [c102008](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102008) |
| [贵州](http://www.csrc.gov.cn/csrc/c102009/zfxxgk_zdgk.shtml)       | [c102009](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102009) |
| [云南](http://www.csrc.gov.cn/csrc/c102010/zfxxgk_zdgk.shtml)       | [c102010](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102010) |
| [西藏](http://www.csrc.gov.cn/csrc/c102011/zfxxgk_zdgk.shtml)       | [c102011](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102011) |
| [陕西](http://www.csrc.gov.cn/csrc/c102012/zfxxgk_zdgk.shtml)       | [c102012](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102012) |
| [甘肃](http://www.csrc.gov.cn/csrc/c102013/zfxxgk_zdgk.shtml)       | [c102013](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102013) |
| [青海](http://www.csrc.gov.cn/csrc/c102014/zfxxgk_zdgk.shtml)       | [c102014](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102014) |
| [宁夏](http://www.csrc.gov.cn/csrc/c102015/zfxxgk_zdgk.shtml)       | [c102015](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102015) |
| [新疆](http://www.csrc.gov.cn/csrc/c102016/zfxxgk_zdgk.shtml)       | [c102016](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102016) |
| [深圳](http://www.csrc.gov.cn/csrc/c102017/zfxxgk_zdgk.shtml)       | [c102017](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102017) |
| [大连](http://www.csrc.gov.cn/csrc/c102018/zfxxgk_zdgk.shtml)       | [c102018](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102018) |
| [宁波](http://www.csrc.gov.cn/csrc/c102019/zfxxgk_zdgk.shtml)       | [c102019](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102019) |
| [厦门](http://www.csrc.gov.cn/csrc/c102020/zfxxgk_zdgk.shtml)       | [c102020](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102020) |
| [青岛](http://www.csrc.gov.cn/csrc/c102021/zfxxgk_zdgk.shtml)       | [c102021](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102021) |
| [上海专员办](http://www.csrc.gov.cn/csrc/c105841/zfxxgk_zdgk.shtml) | [c105841](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105841) |
| [深圳专员办](http://www.csrc.gov.cn/csrc/c105842/zfxxgk_zdgk.shtml) | [c105842](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105842) |

#### [综合政务](http://www.csrc.gov.cn/csrc/c101794/zfxxgk_zdgk.shtml)

| 频道                                                                                    | ID                                                         |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [组织机构](http://www.csrc.gov.cn/csrc/c101795/zfxxgk_zdgk.shtml)                       | [c101795](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101795) |
| [征求意见](http://www.csrc.gov.cn/csrc/c101796/zfxxgk_zdgk.shtml)                       | [c101796](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101796) |
| [废止规章](http://www.csrc.gov.cn/csrc/c101797/zfxxgk_zdgk.shtml)                       | [c101797](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101797) |
| [财务预算管理](http://www.csrc.gov.cn/csrc/c105887/zfxxgk_zdgk.shtml)                   | [c105887](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105887) |
| [其他](http://www.csrc.gov.cn/csrc/c101799/zfxxgk_zdgk.shtml)                           | [c101799](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101799) |
| [全国人大建议和政协提案复文公开](http://www.csrc.gov.cn/csrc/c101800/zfxxgk_zdgk.shtml) | [c101800](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101800) |

</details>
    

### 通用 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/npc/:caty","categories":["government","popular"],"example":"/gov/npc/c183","parameters":{"caty":"分类名，支持形如 `http://www.npc.gov.cn/npc/c2/*/` 的网站，传入 npc 之后的参数"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["npc.gov.cn/npc/c2/:caty"]}],"name":"通用","maintainers":["233yeee"],"description":"| 立法 | 监督 | 代表 | 理论 | 权威发布 | 滚动新闻 |\n| ---- | ---- | ---- | ---- | -------- | -------- |\n| c183 | c184 | c185 | c189 | c12435   | c10134   |","location":"npc/index.ts","heat":1114,"topFeeds":[]}' :test='{"code":0}' />

| 立法 | 监督 | 代表 | 理论 | 权威发布 | 滚动新闻 |
| ---- | ---- | ---- | ---- | -------- | -------- |
| c183 | c184 | c185 | c189 | c12435   | c10134   |

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/nsfc/*","name":"Unknown","maintainers":[],"location":"nsfc/index.ts","heat":22,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/suzhou/fg/:category{.+}?","name":"Unknown","maintainers":[],"location":"suzhou/fg.ts","heat":4,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/nopss/*","name":"Unknown","maintainers":[],"location":"nopss/index.ts","heat":3,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/mgs/*","name":"Unknown","maintainers":[],"location":"mgs/mgs.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/mmht/*","name":"Unknown","maintainers":[],"location":"mmht/mmht.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/mofcom/article/:suffix{.+}","name":"Unknown","maintainers":[],"location":"mofcom/article.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### 中华人民共和国交通运输部 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/mot/:category{.+}?","name":"中华人民共和国交通运输部","maintainers":["ladeng07"],"location":"mot/index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/nifdc/:path{.+}?","name":"Unknown","maintainers":[],"location":"nifdc/index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/nmpa/*","name":"Unknown","maintainers":[],"location":"nmpa/generic.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="pbc.gov.cn/redianzhuanti/118742/4122386/4122510/index.html" size="sm" />

<Route namespace="gov" :data='{"path":"/pbc/zcyj","radar":[{"source":["pbc.gov.cn/redianzhuanti/118742/4122386/4122510/index.html"]}],"name":"Unknown","maintainers":["Fatpandac"],"url":"pbc.gov.cn/redianzhuanti/118742/4122386/4122510/index.html","location":"pbc/zcyj.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/sasac/:path{.+}","name":"Unknown","maintainers":[],"location":"sasac/generic.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/sdb/*","name":"Unknown","maintainers":[],"location":"sdb/sdb.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":["/sh/yjj/*","/shanghai/yjj/*"],"name":"Unknown","maintainers":[],"location":"sh/yjj/index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/xinyi/*","name":"Unknown","maintainers":[],"location":"xinyi/xinyi.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 2048 核基地 <Site url="hjd2048.com"/>

### 论坛 <Site url="hjd2048.com" size="sm" />

<Route namespace="2048" :data='{"path":"/:id?","categories":["multimedia","popular"],"example":"/2048/2","parameters":{"id":"板块 ID, 见下表，默认为最新合集，即 `3`，亦可在 URL 中找到, 例如, `thread.php?fid-3.html`中, 板块 ID 为`3`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":true,"supportPodcast":false,"supportScihub":false,"nsfw":true},"name":"论坛","maintainers":["nczitzk"],"description":"| 最新合集 | 亞洲無碼 | 日本騎兵 | 歐美新片 | 國內原創 | 中字原創 | 三級寫真 |\n| -------- | -------- | -------- | -------- | -------- | -------- | -------- |\n| 3        | 4        | 5        | 13       | 15       | 16       | 18       |\n\n| 有碼.HD | 亞洲 SM.HD | 日韓 VR/3D | 歐美 VR/3D | S-cute / Mywife / G-area |\n| ------- | ---------- | ---------- | ---------- | ------------------------ |\n| 116     | 114        | 96         | 97         | 119                      |\n\n| 網友自拍 | 亞洲激情 | 歐美激情 | 露出偷窺 | 高跟絲襪 | 卡通漫畫 | 原創达人 |\n| -------- | -------- | -------- | -------- | -------- | -------- | -------- |\n| 23       | 24       | 25       | 26       | 27       | 28       | 135      |\n\n| 唯美清純 | 网络正妹 | 亞洲正妹 | 素人正妹 | COSPLAY | 女优情报 | Gif 动图 |\n| -------- | -------- | -------- | -------- | ------- | -------- | -------- |\n| 21       | 274      | 276      | 277      | 278     | 29       |          |\n\n| 獨家拍攝 | 稀有首發 | 网络见闻 | 主播實錄 | 珍稀套圖 | 名站同步 | 实用漫画 |\n| -------- | -------- | -------- | -------- | -------- | -------- | -------- |\n| 213      | 94       | 283      | 111      | 88       | 131      | 180      |\n\n| 网盘二区 | 网盘三区 | 分享福利 | 国产精选 | 高清福利 | 高清首发 | 多挂原创 |\n| -------- | -------- | -------- | -------- | -------- | -------- | -------- |\n| 72       | 272      | 195      | 280      | 79       | 216      | 76       |\n\n| 磁链迅雷 | 正片大片 | H-GAME | 有声小说 | 在线视频 | 在线快播影院 |\n| -------- | -------- | ------ | -------- | -------- | ------------ |\n| 43       | 67       | 66     | 55       | 78       | 279          |\n\n| 综合小说 | 人妻意淫 | 乱伦迷情 | 长篇连载 | 文学作者 | TXT 小说打包 |\n| -------- | -------- | -------- | -------- | -------- | ------------ |\n| 48       | 103      | 50       | 54       | 100      | 109          |\n\n| 聚友客栈 | 坛友自售 |\n| -------- | -------- |\n| 57       | 136      |","location":"index.ts","heat":16155,"topFeeds":[]}' :test='{"code":0}' />

| 最新合集 | 亞洲無碼 | 日本騎兵 | 歐美新片 | 國內原創 | 中字原創 | 三級寫真 |
| -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| 3        | 4        | 5        | 13       | 15       | 16       | 18       |

| 有碼.HD | 亞洲 SM.HD | 日韓 VR/3D | 歐美 VR/3D | S-cute / Mywife / G-area |
| ------- | ---------- | ---------- | ---------- | ------------------------ |
| 116     | 114        | 96         | 97         | 119                      |

| 網友自拍 | 亞洲激情 | 歐美激情 | 露出偷窺 | 高跟絲襪 | 卡通漫畫 | 原創达人 |
| -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| 23       | 24       | 25       | 26       | 27       | 28       | 135      |

| 唯美清純 | 网络正妹 | 亞洲正妹 | 素人正妹 | COSPLAY | 女优情报 | Gif 动图 |
| -------- | -------- | -------- | -------- | ------- | -------- | -------- |
| 21       | 274      | 276      | 277      | 278     | 29       |          |

| 獨家拍攝 | 稀有首發 | 网络见闻 | 主播實錄 | 珍稀套圖 | 名站同步 | 实用漫画 |
| -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| 213      | 94       | 283      | 111      | 88       | 131      | 180      |

| 网盘二区 | 网盘三区 | 分享福利 | 国产精选 | 高清福利 | 高清首发 | 多挂原创 |
| -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| 72       | 272      | 195      | 280      | 79       | 216      | 76       |

| 磁链迅雷 | 正片大片 | H-GAME | 有声小说 | 在线视频 | 在线快播影院 |
| -------- | -------- | ------ | -------- | -------- | ------------ |
| 43       | 67       | 66     | 55       | 78       | 279          |

| 综合小说 | 人妻意淫 | 乱伦迷情 | 长篇连载 | 文学作者 | TXT 小说打包 |
| -------- | -------- | -------- | -------- | -------- | ------------ |
| 48       | 103      | 50       | 54       | 100      | 109          |

| 聚友客栈 | 坛友自售 |
| -------- | -------- |
| 57       | 136      |

## GitHub <Site url="github.com"/>

::: tip
GitHub provides some official RSS feeds:

-   Repo releases: `https://github.com/:owner/:repo/releases.atom`
-   Repo commits: `https://github.com/:owner/:repo/commits.atom`
-   User activities: `https://github.com/:user.atom`
-   Private feed: `https://github.com/:user.private.atom?token=:secret` (Note: You can ONLY obtain this url via an [API](https://docs.github.com/en/rest/activity/feeds?apiVersion=2022-11-28) call with a [Personal Access Token](https://github.com/settings/tokens/new) with **ENOUGH** scopes now.)
-   Wiki history: `https://github.com/:owner/:repo/wiki.atom`
:::

### Trending <Site url="github.com/trending" size="sm" />

<Route namespace="github" :data='{"path":"/trending/:since/:language/:spoken_language?","categories":["programming","popular"],"example":"/github/trending/daily/javascript/en","view":5,"parameters":{"since":{"description":"time range","options":[{"value":"daily","label":"Today"},{"value":"weekly","label":"This week"},{"value":"monthly","label":"This month"}]},"language":{"description":"the feed language, available in [Trending page](https://github.com/trending/javascript?since=monthly) &#39;s URL, don&#39;t filter option is `any`","default":"any"},"spoken_language":{"description":"natural language, available in [Trending page](https://github.com/trending/javascript?since=monthly) &#39;s URL"}},"features":{"requireConfig":[{"name":"GITHUB_ACCESS_TOKEN","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["github.com/trending"],"target":"/trending/:since"}],"name":"Trending","maintainers":["DIYgod","jameschensmith"],"url":"github.com/trending","location":"trending.ts","heat":10199,"topFeeds":[]}' :test='undefined' />

### User Activities <Site url="github.com" size="sm" />

<Route namespace="github" :data='{"path":"/activity/:user","name":"User Activities","maintainers":["hyoban"],"example":"/github/activity/DIYgod","categories":["programming","popular"],"view":5,"parameters":{"user":"GitHub username"},"description":"Get the activities of a user on GitHub, based on the GitHub official RSS feed","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["github.com/:user"],"target":"/activity/:user"}],"location":"activity.ts","heat":4364,"topFeeds":[]}' :test='{"code":0}' />

Get the activities of a user on GitHub, based on the GitHub official RSS feed

## 36kr <Site url="36kr.com"/>

### 资讯热榜 <Site url="36kr.com" size="sm" />

<Route namespace="36kr" :data='{"path":"/hot-list/:category?","categories":["new-media","popular"],"example":"/36kr/hot-list","parameters":{"category":"分类，默认为24小时热榜"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["36kr.com/hot-list/:category","36kr.com/"],"target":"/hot-list/:category"}],"name":"资讯热榜","maintainers":["nczitzk"],"description":"| 24 小时热榜 | 资讯人气榜 | 资讯综合榜 | 资讯收藏榜 |\n| ----------- | ---------- | ---------- | ---------- |\n| 24          | renqi      | zonghe     | shoucang   |","location":"hot-list.ts","heat":10443,"topFeeds":[]}' :test='{"code":0}' />

| 24 小时热榜 | 资讯人气榜 | 资讯综合榜 | 资讯收藏榜 |
| ----------- | ---------- | ---------- | ---------- |
| 24          | renqi      | zonghe     | shoucang   |

### 资讯, 快讯, 用户文章, 主题文章, 专题文章, 搜索文章, 搜索快讯 <Site url="36kr.com" size="sm" />

<Route namespace="36kr" :data='{"path":"/:category/:subCategory?/:keyword?","categories":["new-media","popular"],"example":"/36kr/newsflashes","parameters":{"category":"分类，必填项","subCategory":"子分类，选填项，目的是为了兼容老逻辑","keyword":"关键词，选填项，仅搜索文章/快讯时有效"},"name":"资讯, 快讯, 用户文章, 主题文章, 专题文章, 搜索文章, 搜索快讯","maintainers":["nczitzk","fashioncj"],"description":"| 最新资讯频道 | 快讯 | 推荐资讯 | 生活 | 房产 | 职场 | 搜索文章 | 搜索快讯 |\n| ------- | -------- | -------- | -------- | -------- | --------| -------- | -------- |\n| news | newsflashes | recommend | life | estate | workplace | search/articles/关键词 | search/articles/关键词 |","location":"index.ts","heat":1679,"topFeeds":[]}' :test='{"code":0}' />

| 最新资讯频道 | 快讯 | 推荐资讯 | 生活 | 房产 | 职场 | 搜索文章 | 搜索快讯 |
| ------- | -------- | -------- | -------- | -------- | --------| -------- | -------- |
| news | newsflashes | recommend | life | estate | workplace | search/articles/关键词 | search/articles/关键词 |

## Javtiful <Site url="javtiful.com"/>

### Actress <Site url="javtiful.com" size="sm" />

<Route namespace="javtiful" :data='{"path":"/actress/:id","name":"Actress","maintainers":["huanfe1"],"example":"/javtiful/actress/akari-tsumugi","parameters":{"id":"Actress name"},"categories":["multimedia","popular"],"radar":[{"source":["javtiful.com/actress/:id","javtiful.com/actress/:id/*"],"target":"/actress/:id"}],"features":{"nsfw":true},"location":"actress.ts","heat":11891,"topFeeds":[]}' :test='{"code":0}' />

## JavBus <Site url="www.javbus.com"/>

::: warning
Requests from non-Asia areas will be redirected to login page.
:::

::: tip Language
You can change the language of each route to the languages listed below.

| English | 日本语 | 한국의 | 中文             |
| ------- | ------ | ------ | ---------------- |
| en      | ja     | ko     | (leave it empty) |
:::

::: tip
JavBus has multiple backup domains, these routes use default domain `https://javbus.com`. If the domain is unreachable, you can add `?domain=<domain>` to the end of the route to specify the domain to visit. Let say you want to use the backup domain `https://javsee.icu`, you can add `?domain=javsee.icu` to the end of the route, then the route will be [`/javbus/en?domain=javsee.icu`](https://rsshub.app/javbus?domain=javsee.icu)

**Note**: **Western** has different domain than the main site, the backup domains are also different. The default domain is `https://javbus.org` and you can add `?western_domain=<domain>` to the end of the route to specify the domain to visit. Let say you want to use the backup domain `https://javsee.one`, you can add `?western_domain=javsee.one` to the end of the route, then the route will be [`/javbus/western/en?western_domain=javsee.one`](https://rsshub.app/javbus/western?western_domain=javsee.one)
:::

### Works <Site url="www.javbus.com" size="sm" />

<Route namespace="javbus" :data='{"path":"/:path{.+}?","radar":[{"source":["www.javbus.com/:path*"],"target":"/:path"}],"name":"Works","maintainers":["MegrezZhu","CoderTonyChan","nczitzk","Felix2yu"],"categories":["multimedia","popular"],"view":3,"url":"www.javbus.com","example":"/javbus/star/rwt","parameters":{"path":{"description":"Any path of list page on javbus"}},"features":{"nsfw":true},"location":"index.ts","heat":11877,"topFeeds":[]}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:44:18)\n    at listOnTimeout (node:internal/timers:588:17)\n    at processTimers (node:internal/timers:523:7)"}' />

## 财新博客 <Site url="caixin.com"/>

> 网站部分内容需要付费订阅，RSS 仅做更新提醒，不含付费内容。若需要得到付费内容全文，请使用订阅账户在手机网页版登录，然后设置`CAIXIN_COOKIE`为至少包含cookie中的以下字段: `SA_USER_UID`, `SA_USER_UNIT`, `SA_USER_DEVICE_TYPE`, `USER_LOGIN_CODE`

### 最新文章 <Site url="caixin.com/" size="sm" />

<Route namespace="caixin" :data='{"path":"/latest","categories":["traditional-media","popular"],"view":0,"example":"/caixin/latest","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["caixin.com/"]}],"name":"最新文章","maintainers":["tpnonthealps"],"url":"caixin.com/","description":"说明：此 RSS feed 会自动抓取财新网的最新文章，但不包含 FM 及视频内容。订阅用户可根据文档设置环境变量后，在url传入`fulltext=`以解锁全文。","location":"latest.ts","heat":11632,"topFeeds":[]}' :test='{"code":0}' />

说明：此 RSS feed 会自动抓取财新网的最新文章，但不包含 FM 及视频内容。订阅用户可根据文档设置环境变量后，在url传入`fulltext=`以解锁全文。

## 掘金 <Site url="juejin.cn"/>

### 热门 <Site url="juejin.cn" size="sm" />

<Route namespace="juejin" :data='{"path":"/trending/:category/:type","categories":["programming","popular"],"example":"/juejin/trending/ios/monthly","parameters":{"category":"分类名","type":"类型"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"热门","maintainers":["moaix"],"description":"| category | 标签     |\n| -------- | -------- |\n| android  | Android  |\n| frontend | 前端     |\n| ios      | iOS      |\n| backend  | 后端     |\n| design   | 设计     |\n| product  | 产品     |\n| freebie  | 工具资源 |\n| article  | 阅读     |\n| ai       | 人工智能 |\n| devops   | 运维     |\n| all      | 全部     |\n\n| type       | 类型     |\n| ---------- | -------- |\n| weekly     | 本周最热 |\n| monthly    | 本月最热 |\n| historical | 历史最热 |","location":"trending.ts","heat":6664,"topFeeds":[]}' :test='{"code":0}' />

| category | 标签     |
| -------- | -------- |
| android  | Android  |
| frontend | 前端     |
| ios      | iOS      |
| backend  | 后端     |
| design   | 设计     |
| product  | 产品     |
| freebie  | 工具资源 |
| article  | 阅读     |
| ai       | 人工智能 |
| devops   | 运维     |
| all      | 全部     |

| type       | 类型     |
| ---------- | -------- |
| weekly     | 本周最热 |
| monthly    | 本月最热 |
| historical | 历史最热 |

### 用户动态 <Site url="juejin.cn" size="sm" />

<Route namespace="juejin" :data='{"path":"/dynamic/:id","categories":["programming","popular"],"example":"/juejin/dynamic/3051900006845944","parameters":{"id":"用户 id, 可在用户页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["juejin.cn/user/:id"]}],"name":"用户动态","maintainers":["CaoMeiYouRen"],"location":"dynamic.ts","heat":2524,"topFeeds":[]}' :test='{"code":0}' />

### 用户文章 <Site url="juejin.cn" size="sm" />

<Route namespace="juejin" :data='{"path":"/posts/:id","categories":["programming","popular"],"example":"/juejin/posts/3051900006845944","parameters":{"id":"用户 id, 可在用户页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["juejin.cn/user/:id","juejin.cn/user/:id/posts"]}],"name":"用户文章","maintainers":["Maecenas"],"location":"posts.ts","heat":2034,"topFeeds":[]}' :test='{"code":0}' />

## TikTok <Site url="tiktok.com"/>

### User Profile - Picuki <Site url="tiktok.com" size="sm" />

<Route namespace="picuki" :data='{"path":"/profile/:id/:type?/:functionalFlag?","categories":["social-media","popular"],"example":"/picuki/profile/linustech","parameters":{"id":"Tiktok user id (without @)","type":{"description":"Type of profile page","options":[{"value":"profile","label":"Profile Page"},{"value":"story","label":"Story Page"}],"default":"profile"},"functionalFlag":{"description":"Functional flag for video embedding","options":[{"value":"0","label":"Off, only show video poster as an image"},{"value":"1","label":"On"}],"default":"1"}},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.picuki.com/profile/:id"],"target":"/profile/:id"},{"source":["www.picuki.com/story/:id"],"target":"/profile/:id/story"}],"name":"User Profile - Picuki","maintainers":["hoilc","Rongronggg9","devinmugen","NekoAria"],"location":"profile.ts","heat":11167,"topFeeds":[]}' :test='{"code":0}' />

## RSSHub <Site url="docs.rsshub.app"/>

### Transformation - HTML <Site url="docs.rsshub.app" size="sm" />

<Route namespace="rsshub" :data='{"path":"/transform/html/:url/:routeParams","categories":["other","popular"],"example":"/rsshub/transform/html/https%3A%2F%2Fwechat2rss.xlab.app%2Fposts%2Flist%2F/item=div%5Bclass%3D%27post%2Dcontent%27%5D%20p%20a","parameters":{"url":"`encodeURIComponent`ed URL address","routeParams":"Transformation rules, requires URL encode"},"features":{"requireConfig":[{"name":"ALLOW_USER_SUPPLY_UNSAFE_DOMAIN","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Transformation - HTML","maintainers":["ttttmr","hyoban"],"description":"Pass URL and transformation rules to convert HTML/JSON into RSS.\n\nSpecify options (in the format of query string) in parameter `routeParams` parameter to extract data from HTML.\n\n| Key                 | Meaning                                                                                                       | Accepted Values | Default                  |\n| ------------------- | ------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------ |\n| `title`           | The title of the RSS                                                                                          | `string`      | Extract from `<title>` |\n| `item`            | The HTML elements as `item` using CSS selector                                                              | `string`      | html                     |\n| `itemTitle`       | The HTML elements as `title` in `item` using CSS selector                                                 | `string`      | `item` element         |\n| `itemTitleAttr`   | The attributes of `title` element as title                                                                  | `string`      | Element text             |\n| `itemLink`        | The HTML elements as `link` in `item` using CSS selector                                                  | `string`      | `item` element         |\n| `itemLinkAttr`    | The attributes of `link` element as link                                                                    | `string`      | `href`                 |\n| `itemDesc`        | The HTML elements as `descrption` in `item` using CSS selector                                            | `string`      | `item` element         |\n| `itemDescAttr`    | The attributes of `descrption` element as description                                                       | `string`      | Element html             |\n| `itemPubDate`     | The HTML elements as `pubDate` in `item` using CSS selector                                               | `string`      | `item` element         |\n| `itemPubDateAttr` | The attributes of `pubDate` element as pubDate                                                              | `string`      | Element html             |\n| `itemContent`     | The HTML elements as `description` in `item` using CSS selector ( in `itemLink` page for full content ) | `string`      |                          |\n| `encoding`        | The encoding of the HTML content                                                                              | `string`      | utf-8                    |\n\n  Parameters parsing in the above example:\n\n| Parameter     | Value                                     |\n| ------------- | ----------------------------------------- |\n| `url`         | `https://wechat2rss.xlab.app/posts/list/` |\n| `routeParams` | `item=div[class=&#39;post-content&#39;] p a`      |\n\n  Parsing of `routeParams` parameter:\n\n| Parameter | Value                           |\n| --------- | ------------------------------- |\n| `item`    | `div[class=&#39;post-content&#39;] p a` |","location":"transform/html.ts","heat":6857,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1940)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

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

### New routes <Site url="docs.rsshub.app/*" size="sm" />

<Route namespace="rsshub" :data='{"path":"/routes/:lang?","categories":["program-update","popular"],"view":5,"example":"/rsshub/routes/en","parameters":{"lang":{"description":"Language","options":[{"label":"Chinese","value":"zh"},{"label":"English","value":"en"}],"default":"en"}},"radar":[{"source":["docs.rsshub.app/*"],"target":"/routes"}],"name":"New routes","maintainers":["DIYgod"],"url":"docs.rsshub.app/*","location":"routes.ts","heat":4221,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected [ …(897) ] to not include &#39;v2ex\"/xna\"&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.1.9/node_modules/@vitest/expect/dist/index.js:1196:17)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.1.9/node_modules/@vitest/expect/dist/index.js:972:17)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@5.2.1/node_modules/chai/chai.js:1706:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1939)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)"}' />

## JavDB <Site url="javdb.com"/>

::: tip
JavDB 有多个备用域名，本路由默认使用永久域名 `https://javdb.com` ，若该域名无法访问，可以通过在路由最后加上 `?domain=<域名>` 指定路由访问的域名。如指定备用域名为 `https://javdb36.com`，则在所有 JavDB 路由最后加上 `?domain=javdb36.com` 即可，此时路由为 [`/javdb?domain=javdb36.com`](https://rsshub.app/javdb?domain=javdb36.com)

如果加入了 **分類** 参数，直接在分類参数后加入 `?domain=<域名>` 即可。如指定分類 URL 为 `https://javdb.com/tags?c2=5&c10=1` 并指定备用域名为 `https://javdb36.com`，即在 `/javdb/tags/c2=5&c10=1` 最后加上 `?domain=javdb36.com`，此时路由为 [`/javdb/tags/c2=5&c10=1?domain=javdb36.com`](https://rsshub.app/javdb/tags/c2=5&c10=1?domain=javdb36.com)

**排行榜**、**搜索**、**演員**、**片商** 参数同适用于 **分類** 参数的上述规则
:::

::: tip
你可以通过指定 `limit` 参数来获取特定数量的条目，即可以通过在路由后方加上 `?limit=25`，默认为单次获取 20 个条目，即默认 `?limit=20`

因为该站有反爬检测，所以不应将此值调整过高
:::

### 演員 <Site url="javdb.com/" size="sm" />

<Route namespace="javdb" :data='{"path":"/actors/:id/:filter?","categories":["multimedia","popular"],"example":"/javdb/actors/R2Vg","parameters":{"id":"编号，可在演员页 URL 中找到","filter":"过滤，见下表，默认为 `全部`"},"features":{"requireConfig":[{"name":"JAVDB_SESSION","description":"JavDB登陆后的session值，可在控制台的cookie下查找 `_jdb_session` 的值，即可获取","optional":true}],"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["javdb.com/"],"target":""}],"name":"演員","maintainers":["nczitzk"],"url":"javdb.com/","description":"| 全部 | 可播放 | 單體作品 | 可下載 | 含字幕 |\n| ---- | ------ | -------- | ------ | ------ |\n|      | p      | s        | d      | c      |\n\n  所有演员编号参见 [演員庫](https://javdb.com/actors)\n\n  可用 addon_tags 参数添加额外的过滤 tag，可从网页 url 中获取，例如 `/javdb/actors/R2Vg?addon_tags=212,18` 可筛选 `VR` 和 `中出`。","location":"actors.ts","heat":5188,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected -2156484392 to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1263)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)"}' />

| 全部 | 可播放 | 單體作品 | 可下載 | 含字幕 |
| ---- | ------ | -------- | ------ | ------ |
|      | p      | s        | d      | c      |

  所有演员编号参见 [演員庫](https://javdb.com/actors)

  可用 addon_tags 参数添加额外的过滤 tag，可从网页 url 中获取，例如 `/javdb/actors/R2Vg?addon_tags=212,18` 可筛选 `VR` 和 `中出`。

### 排行榜 <Site url="javdb.com/" size="sm" />

<Route namespace="javdb" :data='{"path":"/rankings/:category?/:time?","categories":["multimedia","popular"],"example":"/javdb/rankings","parameters":{"category":"分类，见下表，默认为 `有碼`","time":"时间，见下表，默认为 `日榜`"},"features":{"requireConfig":[{"name":"JAVDB_SESSION","description":"JavDB登陆后的session值，可在控制台的cookie下查找 `_jdb_session` 的值，即可获取","optional":true}],"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["javdb.com/"],"target":""}],"name":"排行榜","maintainers":["nczitzk"],"url":"javdb.com/","description":"分类\n\n| 有碼     | 無碼       | 歐美    |\n| -------- | ---------- | ------- |\n| censored | uncensored | western |\n\n  时间\n\n| 日榜  | 週榜   | 月榜    |\n| ----- | ------ | ------- |\n| daily | weekly | monthly |","location":"rankings.ts","heat":1789,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1266)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

分类

| 有碼     | 無碼       | 歐美    |
| -------- | ---------- | ------- |
| censored | uncensored | western |

  时间

| 日榜  | 週榜   | 月榜    |
| ----- | ------ | ------- |
| daily | weekly | monthly |

### 番号 <Site url="javdb.com/" size="sm" />

<Route namespace="javdb" :data='{"path":"/video_codes/:code/:filter?","categories":["multimedia","popular"],"example":"/javdb/video_codes/SIVR","parameters":{"id":"番号前缀","filter":"过滤，见下表，默认为 `全部`"},"features":{"requireConfig":[{"name":"JAVDB_SESSION","description":"JavDB登陆后的session值，可在控制台的cookie下查找 `_jdb_session` 的值，即可获取","optional":true}],"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["javdb.com/"],"target":""}],"name":"番号","maintainers":["sgpublic"],"url":"javdb.com/","description":"| 全部 | 可播放   | 單體作品 | 可下載   | 字幕  | 預覽圖  |\n| ---- | -------- | -------- | -------- | ----- | ------- |\n|      | playable | single   | download | cnsub | preview |","location":"videocodes.ts","heat":1369,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1270)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

| 全部 | 可播放   | 單體作品 | 可下載   | 字幕  | 預覽圖  |
| ---- | -------- | -------- | -------- | ----- | ------- |
|      | playable | single   | download | cnsub | preview |

### 主页 <Site url="javdb.com/" size="sm" />

<Route namespace="javdb" :data='{"path":"/home/:category?/:sort?/:filter?","radar":[{"source":["javdb.com/"]}],"name":"主页","example":"/javdb/home","parameters":{"category":"分类，见下表，默认为 `有碼`","sort":"排序，见下表，默认为 `磁鏈更新排序`","filter":"过滤，见下表，默认为 `可下载`"},"maintainers":["nczitzk"],"url":"javdb.com/","description":"分类\n\n| 有碼     | 無碼       | 歐美    |\n| -------- | ---------- | ------- |\n| censored | uncensored | western |\n\n  排序\n\n| 发布日期排序 | 磁鏈更新排序 |\n| ------------ | ------------ |\n| 1            | 2            |\n\n  过滤\n\n| 全部 | 可下载 | 含字幕 | 含短評 |\n| ---- | ------ | ------ | ------ |\n| 0    | 1      | 2      | 3      |","location":"index.ts","heat":1290,"topFeeds":[]}' :test='{"code":0}' />

分类

| 有碼     | 無碼       | 歐美    |
| -------- | ---------- | ------- |
| censored | uncensored | western |

  排序

| 发布日期排序 | 磁鏈更新排序 |
| ------------ | ------------ |
| 1            | 2            |

  过滤

| 全部 | 可下载 | 含字幕 | 含短評 |
| ---- | ------ | ------ | ------ |
| 0    | 1      | 2      | 3      |

## 什么值得买 <Site url="post.smzdm.com"/>

::: tip
网站也提供了部分 RSS: [https://www.smzdm.com/dingyue](https://www.smzdm.com/dingyue)
:::

### 排行榜 <Site url="post.smzdm.com" size="sm" />

<Route namespace="smzdm" :data='{"path":"/ranking/:rank_type/:rank_id/:hour","categories":["shopping","popular"],"view":5,"example":"/smzdm/ranking/pinlei/11/3","parameters":{"rank_type":{"description":"榜单类型","options":[{"value":"pinlei","label":"好价品类榜"},{"value":"dianshang","label":"好价电商榜"},{"value":"haitao","label":"海淘 TOP 榜"},{"value":"haowen","label":"好文排行榜"},{"value":"haowu","label":"好物排行榜"}]},"rank_id":{"description":"榜单ID","options":[{"label":"好价品类榜-全部","value":"11"},{"label":"好价品类榜-食品生鲜","value":"12"},{"label":"好价品类榜-电脑数码","value":"13"},{"label":"好价品类榜-运动户外","value":"14"},{"label":"好价品类榜-家用电器","value":"15"},{"label":"好价品类榜-白菜","value":"17"},{"label":"好价品类榜-服饰鞋包","value":"74"},{"label":"好价品类榜-日用百货","value":"75"},{"label":"好价电商榜-券活动","value":"24"},{"label":"好价电商榜-京东","value":"23"},{"label":"好价电商榜-天猫","value":"25"},{"label":"好价电商榜-亚马逊中国","value":"26"},{"label":"好价电商榜-国美在线","value":"27"},{"label":"好价电商榜-苏宁易购","value":"28"},{"label":"好价电商榜-网易","value":"29"},{"label":"好价电商榜-西集网","value":"30"},{"label":"好价电商榜-美国亚马逊","value":"31"},{"label":"好价电商榜-日本亚马逊","value":"32"},{"label":"好价电商榜-ebay","value":"33"},{"label":"海淘 TOP 榜-全部","value":"39"},{"label":"海淘 TOP 榜-海外直邮","value":"34"},{"label":"海淘 TOP 榜-美国榜","value":"35"},{"label":"海淘 TOP 榜-欧洲榜","value":"36"},{"label":"海淘 TOP 榜-澳新榜","value":"37"},{"label":"海淘 TOP 榜-亚洲榜","value":"38"},{"label":"海淘 TOP 榜-晒物榜","value":"hsw"},{"label":"好文排行榜-原创","value":"yc"},{"label":"好文排行榜-资讯","value":"zx"},{"label":"好物排行榜-新晋榜","value":"hwall"},{"label":"好物排行榜-消费众测","value":"zc"},{"label":"好物排行榜-新锐品牌","value":"nb"},{"label":"好物排行榜-好物榜单","value":"hw"}]},"hour":{"description":"时间跨度","options":[{"value":"3","label":"3 小时"},{"value":"12","label":"12 小时"},{"value":"24","label":"24 小时"}]}},"features":{"requireConfig":[{"name":"SMZDM_COOKIE","description":"什么值得买登录后的 Cookie 值"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"排行榜","maintainers":["DIYgod"],"location":"ranking.ts","heat":4584,"topFeeds":[]}' :test='undefined' />

### 关键词 <Site url="post.smzdm.com" size="sm" />

<Route namespace="smzdm" :data='{"path":"/keyword/:keyword","categories":["shopping","popular"],"view":5,"example":"/smzdm/keyword/女装","parameters":{"keyword":"你想订阅的关键词"},"features":{"requireConfig":[{"name":"SMZDM_COOKIE","description":"什么值得买登录后的 Cookie 值"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"关键词","maintainers":["DIYgod","MeanZhang"],"location":"keyword.ts","heat":2749,"topFeeds":[]}' :test='undefined' />

### 好文 <Site url="post.smzdm.com" size="sm" />

<Route namespace="smzdm" :data='{"path":"/haowen/:day?","categories":["shopping","popular"],"example":"/smzdm/haowen/1","parameters":{"day":{"description":"以天为时间跨度，默认为 `1`","options":[{"value":"1","label":"今日热门"},{"value":"7","label":"周热门"},{"value":"30","label":"月热门"}],"default":"1"}},"features":{"requireConfig":[{"name":"SMZDM_COOKIE","description":"什么值得买登录后的 Cookie 值"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"好文","maintainers":["LogicJake","pseudoyu"],"location":"haowen.ts","heat":2104,"topFeeds":[]}' :test='undefined' />

## 豆瓣 <Site url="www.douban.com"/>

### 豆瓣小组 <Site url="www.douban.com" size="sm" />

<Route namespace="douban" :data='{"path":"/group/:groupid/:type?","categories":["social-media","popular"],"view":1,"example":"/douban/group/648102","parameters":{"groupid":"豆瓣小组的 id","type":{"description":"类型","default":"latest","options":[{"label":"最新","value":"latest"},{"label":"最热","value":"essence"},{"label":"精华","value":"elite"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.douban.com/group/:groupid"],"target":"/group/:groupid"}],"name":"豆瓣小组","maintainers":["DIYgod"],"location":"other/group.ts","heat":6347,"topFeeds":[]}' :test='{"code":0}' />

### 豆瓣榜单与集合 <Site url="www.douban.com" size="sm" />

<Route namespace="douban" :data='{"path":"/list/:type?/:routeParams?","categories":["social-media","popular"],"example":"/douban/list/subject_real_time_hotest","parameters":{"type":"榜单类型，见下表。默认为实时热门书影音","routeParams":"额外参数；请参阅以下说明和表格"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.douban.com/subject_collection/:type"],"target":"/list/:type"}],"name":"豆瓣榜单与集合","maintainers":["5upernova-heng","honue"],"description":"| 榜单 / 集合        | 路由                          |\n| ------------------ | ----------------------------- |\n| 实时热门书影音     | subject_real_time_hotest   |\n| 影院热映           | movie_showing                |\n| 实时热门电影       | movie_real_time_hotest     |\n| 实时热门电视       | tv_real_time_hotest        |\n| 一周口碑电影榜     | movie_weekly_best           |\n| 华语口碑剧集榜     | tv_chinese_best_weekly     |\n| 全球口碑剧集榜     | tv_global_best_weekly      |\n| 国内口碑综艺榜     | show_chinese_best_weekly   |\n| 国外口碑综艺榜     | show_global_best_weekly    |\n| 热播新剧国产剧     | tv_domestic                  |\n| 热播新剧欧美剧     | tv_american                  |\n| 热播新剧日剧       | tv_japanese                  |\n| 热播新剧韩剧       | tv_korean                    |\n| 热播新剧动画       | tv_animation                 |\n| 虚构类小说热门榜   | book_fiction_hot_weekly    |\n| 非虚构类小说热门榜 | book_nonfiction_hot_weekly |\n| 热门单曲榜         | music_single                 |\n| 华语新碟榜         | music_chinese                |\n| ...                | ...                           |\n\n| 额外参数 | 含义                   | 接受的值 | 默认值 |\n| -------- | ---------------------- | -------- | ------ |\n| playable | 仅看有可播放片源的影片 | 0/1      | 0      |\n| score    | 筛选评分               | 0.0-10.0 | 0      |\n\n  用例：`/douban/list/tv_korean/playable=1&score=8`\n\n  > 上面的榜单 / 集合并没有列举完整。\n  >\n  > 如何找到榜单对应的路由参数：\n  > 在豆瓣手机 APP 中，对应地榜单页面右上角，点击分享链接。链接路径 `subject_collection` 后的路径就是路由参数 `type`。\n  > 如：小说热门榜的分享链接为：`https://m.douban.com/subject_collection/ECDIHUN4A`，其对应本 RSS 路由的 `type` 为 `ECDIHUN4A`，对应的订阅链接路由：[`/douban/list/ECDIHUN4A`](https://rsshub.app/douban/list/ECDIHUN4A)","location":"other/list.ts","heat":1429,"topFeeds":[]}' :test='{"code":0}' />

| 榜单 / 集合        | 路由                          |
| ------------------ | ----------------------------- |
| 实时热门书影音     | subject_real_time_hotest   |
| 影院热映           | movie_showing                |
| 实时热门电影       | movie_real_time_hotest     |
| 实时热门电视       | tv_real_time_hotest        |
| 一周口碑电影榜     | movie_weekly_best           |
| 华语口碑剧集榜     | tv_chinese_best_weekly     |
| 全球口碑剧集榜     | tv_global_best_weekly      |
| 国内口碑综艺榜     | show_chinese_best_weekly   |
| 国外口碑综艺榜     | show_global_best_weekly    |
| 热播新剧国产剧     | tv_domestic                  |
| 热播新剧欧美剧     | tv_american                  |
| 热播新剧日剧       | tv_japanese                  |
| 热播新剧韩剧       | tv_korean                    |
| 热播新剧动画       | tv_animation                 |
| 虚构类小说热门榜   | book_fiction_hot_weekly    |
| 非虚构类小说热门榜 | book_nonfiction_hot_weekly |
| 热门单曲榜         | music_single                 |
| 华语新碟榜         | music_chinese                |
| ...                | ...                           |

| 额外参数 | 含义                   | 接受的值 | 默认值 |
| -------- | ---------------------- | -------- | ------ |
| playable | 仅看有可播放片源的影片 | 0/1      | 0      |
| score    | 筛选评分               | 0.0-10.0 | 0      |

  用例：`/douban/list/tv_korean/playable=1&score=8`

  > 上面的榜单 / 集合并没有列举完整。
  >
  > 如何找到榜单对应的路由参数：
  > 在豆瓣手机 APP 中，对应地榜单页面右上角，点击分享链接。链接路径 `subject_collection` 后的路径就是路由参数 `type`。
  > 如：小说热门榜的分享链接为：`https://m.douban.com/subject_collection/ECDIHUN4A`，其对应本 RSS 路由的 `type` 为 `ECDIHUN4A`，对应的订阅链接路由：[`/douban/list/ECDIHUN4A`](https://rsshub.app/douban/list/ECDIHUN4A)

## 联合早报 <Site url="www.zaobao.com"/>

::: warning
由于 [RSSHub#10309](https://github.com/DIYgod/RSSHub/issues/10309) 中的问题，使用靠近香港的服务器部署将从 hk 版联合早报爬取内容，造成输出的新闻段落顺序错乱。如有订阅此源的需求，建议寻求部署在远离香港的服务器上的 RSSHub，或者在自建时选择远离香港的服务器。
:::

### 即时新闻 <Site url="www.zaobao.com" size="sm" />

<Route namespace="zaobao" :data='{"path":"/realtime/:section?","categories":["traditional-media","popular"],"example":"/zaobao/realtime/china","parameters":{"section":"分类，缺省为 china"},"name":"即时新闻","maintainers":["shunf4"],"description":"| 中国  | 新加坡    | 国际  | 财经     |\n| ----- | --------- | ----- | -------- |\n| china | singapore | world | zfinance |","location":"realtime.ts","heat":5195,"topFeeds":[]}' :test='{"code":0}' />

| 中国  | 新加坡    | 国际  | 财经     |
| ----- | --------- | ----- | -------- |
| china | singapore | world | zfinance |

### 新闻 <Site url="www.zaobao.com" size="sm" />

<Route namespace="zaobao" :data='{"path":"/znews/:section?","categories":["traditional-media","popular"],"example":"/zaobao/znews/china","parameters":{"section":"分类，缺省为 china"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"新闻","maintainers":["shunf4"],"description":"| 中国  | 新加坡    | 东南亚 | 国际  | 体育   |\n| ----- | --------- | ------ | ----- | ------ |\n| china | singapore | sea    | world | sports |","location":"znews.ts","heat":1478,"topFeeds":[]}' :test='{"code":0}' />

| 中国  | 新加坡    | 东南亚 | 国际  | 体育   |
| ----- | --------- | ------ | ----- | ------ |
| china | singapore | sea    | world | sports |

## 司机社 <Site url="xsijishe.com"/>

### 排行榜 <Site url="xsijishe.com" size="sm" />

<Route namespace="xsijishe" :data='{"path":"/rank/:type","categories":["bbs","popular"],"example":"/xsijishe/rank/weekly","parameters":{"type":{"description":"排行榜类型","options":[{"value":"weekly","label":"周榜"},{"value":"monthly","label":"月榜"}]}},"features":{"requireConfig":[{"name":"XSIJISHE_COOKIE","description":""},{"name":"XSIJISHE_USER_AGENT","description":""}],"requirePuppeteer":true,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"排行榜","maintainers":["akynazh","AiraNadih"],"location":"rank.ts","heat":4627,"topFeeds":[]}' :test='undefined' />

### 论坛 <Site url="xsijishe.com" size="sm" />

<Route namespace="xsijishe" :data='{"path":"/forum/:fid","categories":["bbs","popular"],"example":"/xsijishe/forum/51","parameters":{"fid":"子论坛 id"},"features":{"requireConfig":[{"name":"XSIJISHE_COOKIE","description":""},{"name":"XSIJISHE_USER_AGENT","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"论坛","maintainers":["akynazh"],"description":"::: tip 关于子论坛 id 的获取方法\n  `/xsijishe/forum/51` 对应于论坛 `https://xsijishe.com/forum-51-1.html`，这个论坛的 fid 为 51，也就是 `forum-{fid}-1` 中的 fid。\n:::","location":"forum.ts","heat":1997,"topFeeds":[]}' :test='undefined' />

::: tip 关于子论坛 id 的获取方法
  `/xsijishe/forum/51` 对应于论坛 `https://xsijishe.com/forum-51-1.html`，这个论坛的 fid 为 51，也就是 `forum-{fid}-1` 中的 fid。
:::

## 500px 摄影社区 <Site url="500px.com.cn"/>

### 部落影集 <Site url="500px.com.cn" size="sm" />

<Route namespace="500px" :data='{"path":"/tribe/set/:id","categories":["picture","popular"],"view":2,"example":"/500px/tribe/set/f5de0b8aa6d54ec486f5e79616418001","parameters":{"id":"部落 ID"},"name":"部落影集","maintainers":["TonyRL"],"location":"tribe-set.ts","heat":6036,"topFeeds":[]}' :test='{"code":0}' />

## 极品性感美女 <Site url="www.jpxgmn.com"/>

### 本周热门 <Site url="www.jpxgmn.com" size="sm" />

<Route namespace="jpxgmn" :data='{"path":"/weekly","categories":["picture","popular"],"example":"/jpxgmn/weekly","radar":[{"source":["mei5.vip/"],"target":"/weekly"}],"name":"本周热门","maintainers":["Urabartin"],"location":"weekly.ts","heat":4269,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1323)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

### 分类 <Site url="www.jpxgmn.com" size="sm" />

<Route namespace="jpxgmn" :data='{"path":"/tab/:tab?","categories":["picture","popular"],"example":"/jpxgmn/tab","parameters":{"tab":"分类，默认为`top`，包括`top`、`new`、`hot`，以及[源网站](http://www.jpxgmn.com/)所包含的其他相对路径，比如`Xiuren`、`XiaoYu`等"},"radar":[{"source":["mei5.vip/:tab"],"target":"/:tab"}],"name":"分类","maintainers":["Urabartin"],"features":{"nsfw":true},"location":"tab.ts","heat":1621,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1322)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## The New York Times <Site url="nytimes.com"/>

### News <Site url="nytimes.com/" size="sm" />

<Route namespace="nytimes" :data='{"path":"/:lang?","categories":["traditional-media","popular"],"view":0,"example":"/nytimes/dual","parameters":{"lang":{"description":"language, default to Chinese","options":[{"value":"dual","label":"Chinese-English"},{"value":"en","label":"English"},{"value":"traditionalchinese","label":"Traditional Chinese"},{"value":"dual-traditionalchinese","label":"Chinese-English (Traditional Chinese)"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nytimes.com/"],"target":""}],"name":"News","maintainers":["HenryQW","pseudoyu"],"url":"nytimes.com/","description":"By extracting the full text of articles, we provide a better reading experience (full text articles) over the official one.","location":"index.ts","heat":5780,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1702)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

By extracting the full text of articles, we provide a better reading experience (full text articles) over the official one.

## 色花堂 <Site url="sehuatang.net"/>

### Forum <Site url="sehuatang.net" size="sm" />

<Route namespace="sehuatang" :data='{"path":["/bt/:subforumid?","/picture/:subforumid","/:subforumid?/:type?","/:subforumid?",""],"name":"Forum","maintainers":["qiwihui","junfengP","nczitzk"],"features":{"nsfw":true},"description":"**原创 BT 电影**\n\n| 国产原创 | 亚洲无码原创 | 亚洲有码原创 | 高清中文字幕 | 三级写真 | VR 视频 | 素人有码 | 欧美无码 | 韩国主播 | 动漫原创 | 综合讨论 |\n| -------- | ------------ | ------------ | ------------ | -------- | ------- | -------- | -------- | -------- | -------- | -------- |\n| gcyc     | yzwmyc       | yzymyc       | gqzwzm       | sjxz     | vr      | srym     | omwm     | hgzb     | dmyc     | zhtl     |\n\n  **色花图片**\n\n| 原创自拍 | 转贴自拍 | 华人街拍 | 亚洲性爱 | 欧美性爱 | 卡通动漫 | 套图下载 |\n| -------- | -------- | -------- | -------- | -------- | -------- | -------- |\n| yczp     | ztzp     | hrjp     | yzxa     | omxa     | ktdm     | ttxz     |","location":"index.ts","heat":5595,"topFeeds":[]}' :test='undefined' />

**原创 BT 电影**

| 国产原创 | 亚洲无码原创 | 亚洲有码原创 | 高清中文字幕 | 三级写真 | VR 视频 | 素人有码 | 欧美无码 | 韩国主播 | 动漫原创 | 综合讨论 |
| -------- | ------------ | ------------ | ------------ | -------- | ------- | -------- | -------- | -------- | -------- | -------- |
| gcyc     | yzwmyc       | yzymyc       | gqzwzm       | sjxz     | vr      | srym     | omwm     | hgzb     | dmyc     | zhtl     |

  **色花图片**

| 原创自拍 | 转贴自拍 | 华人街拍 | 亚洲性爱 | 欧美性爱 | 卡通动漫 | 套图下载 |
| -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| yczp     | ztzp     | hrjp     | yzxa     | omxa     | ktdm     | ttxz     |

## 喷嚏 <Site url="dapenti.com"/>

### 图卦 <Site url="dapenti.com" size="sm" />

<Route namespace="dapenti" :data='{"path":"/tugua","categories":["picture","popular"],"example":"/dapenti/tugua","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"图卦","maintainers":["tgly307"],"location":"tugua.ts","heat":5317,"topFeeds":[]}' :test='{"code":0}' />

## Follow <Site url="app.follow.is"/>

### User subscriptions <Site url="app.follow.is" size="sm" />

<Route namespace="follow" :data='{"name":"User subscriptions","categories":["social-media","popular"],"path":"/profile/:uid","example":"/follow/profile/41279032429549568","parameters":{"uid":"User ID or user handle"},"radar":[{"source":["app.follow.is/profile/:uid"],"target":"/profile/:uid"}],"maintainers":["KarasuShin","DIYgod","DFobain"],"features":{"supportRadar":true},"view":5,"location":"profile.ts","heat":5238,"topFeeds":[]}' :test='{"code":0}' />

## Hacker News <Site url="ycombinator.com"/>

### User <Site url="ycombinator.com" size="sm" />

<Route namespace="hackernews" :data='{"path":"/:section?/:type?/:user?","categories":["programming","popular"],"view":0,"example":"/hackernews/threads/comments_list/dang","parameters":{"section":{"description":"Content section, default to `index`"},"type":{"description":"Link type, default to `sources`"},"user":{"description":"Set user, only valid in `threads` and `submitted` sections"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["news.ycombinator.com/:section","news.ycombinator.com/"]}],"name":"User","maintainers":["nczitzk","xie-dongping"],"description":"Subscribe to the content of a specific user","location":"index.ts","heat":4777,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected NaN to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1054)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)"}' />

Subscribe to the content of a specific user

## 晚点 LatePost <Site url="latepost.com"/>

### 报道 <Site url="latepost.com" size="sm" />

<Route namespace="latepost" :data='{"path":"/:proma?","categories":["new-media","popular"],"example":"/latepost","parameters":{"proma":"栏目 id，见下表，默认为最新报道"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"报道","maintainers":["nczitzk"],"description":"| 最新报道 | 晚点独家 | 人物访谈 | 晚点早知道 | 长报道 |\n| -------- | -------- | -------- | ---------- | ------ |\n|          | 1        | 2        | 3          | 4      |","location":"index.ts","heat":4613,"topFeeds":[]}' :test='{"code":0}' />

| 最新报道 | 晚点独家 | 人物访谈 | 晚点早知道 | 长报道 |
| -------- | -------- | -------- | ---------- | ------ |
|          | 1        | 2        | 3          | 4      |

## Reuters <Site url="reuters.com"/>

::: tip
You can use `sophi=true` query parameter to invoke the **experimental** method, which can, if possible, fetch more articles(between 20 and 100) with `limit` given. But some articles from the old method might not be available.
:::

### Category/Topic/Author <Site url="reuters.com" size="sm" />

<Route namespace="reuters" :data='{"path":"/:category/:topic?","categories":["traditional-media","popular"],"view":0,"example":"/reuters/world/us","parameters":{"category":{"description":"find it in the URL, or tables below","options":[{"value":"world","label":"World"},{"value":"business","label":"Business"},{"value":"legal","label":"Legal"},{"value":"markets","label":"Markets"},{"value":"breakingviews","label":"Breakingviews"},{"value":"technology","label":"Technology"},{"value":"graphics","label":"Graphics"},{"value":"authors","label":"Authors"}],"default":"world"},"topic":"find it in the URL, or tables below, leave empty for `All`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["reuters.com/:category/:topic?","reuters.com/"]}],"name":"Category/Topic/Author","maintainers":["LyleLee","HenryQW","proletarius101","black-desk","nczitzk","pseudoyu"],"description":"-   `:category`:\n\n      | World | Business | Legal | Markets | Breakingviews | Technology | Graphics |\n      | ----- | -------- | ----- | ------- | ------------- | ---------- | -------- |\n      | world | business | legal | markets | breakingviews | technology | graphics |\n\n  -   `world/:topic`:\n\n      | All | Africa | Americas | Asia Pacific | China | Europe | India | Middle East | United Kingdom | United States | The Great Reboot | Reuters Next |\n      | --- | ------ | -------- | ------------ | ----- | ------ | ----- | ----------- | -------------- | ------------- | ---------------- | ------------ |\n      |     | africa | americas | asia-pacific | china | europe | india | middle-east | uk             | us            | the-great-reboot | reuters-next |\n\n  -   `business/:topic`:\n\n      | All | Aerospace & Defense | Autos & Transportation | Energy | Environment | Finance | Healthcare & Pharmaceuticals | Media & Telecom | Retail & Consumer | Sustainable Business | Charged | Future of Health | Future of Money | Take Five | Reuters Impact |\n      | --- | ------------------- | ---------------------- | ------ | ----------- | ------- | ---------------------------- | --------------- | ----------------- | -------------------- | ------- | ---------------- | --------------- | --------- | -------------- |\n      |     | aerospace-defense   | autos-transportation   | energy | environment | finance | healthcare-pharmaceuticals   | media-telecom   | retail-consumer   | sustainable-business | charged | future-of-health | future-of-money | take-five | reuters-impact |\n\n  -   `legal/:topic`:\n\n      | All | Government | Legal Industry | Litigation | Transactional |\n      | --- | ---------- | -------------- | ---------- | ------------- |\n      |     | government | legalindustry  | litigation | transactional |\n\n  -   `authors/:topic`:\n\n      | Default | Jonathan Landay | any other authors |\n      | ------- | --------------- | ----------------- |\n      | reuters | jonathan-landay | their name in URL |\n\n  More could be found in the URL of the category/topic page.","location":"common.ts","heat":4435,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1930)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

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

## 宝玉 <Site url="baoyu.io"/>

宝玉的博客

### Blog <Site url="baoyu.io/" size="sm" />

<Route namespace="baoyu" :data='{"path":"/blog","categories":["blog","popular"],"example":"/baoyu/blog","radar":[{"source":["baoyu.io/"]}],"url":"baoyu.io/","name":"Blog","maintainers":["liyaozhong"],"description":"宝玉 - 博客文章","location":"index.ts","heat":4148,"topFeeds":[]}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:44:18)\n    at listOnTimeout (node:internal/timers:588:17)\n    at processTimers (node:internal/timers:523:7)"}' />

宝玉 - 博客文章

## NASA <Site url="apod.nasa.gov"/>

### Astronomy Picture of the Day <Site url="apod.nasa.govundefined" size="sm" />

<Route namespace="nasa" :data='{"path":"/apod","categories":["picture","popular"],"view":2,"example":"/nasa/apod","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["apod.nasa.govundefined"]}],"name":"Astronomy Picture of the Day","maintainers":["nczitzk","williamgateszhao"],"url":"apod.nasa.govundefined","location":"apod.ts","heat":4140,"topFeeds":[]}' :test='{"code":0}' />

## BBC <Site url="bbc.com"/>

### News <Site url="bbc.com" size="sm" />

<Route namespace="bbc" :data='{"path":"/:site?/:channel?","name":"News","maintainers":["HenryQW","DIYgod","pseudoyu"],"example":"/bbc/world-asia","parameters":{"site":"语言，简体或繁体中文","channel":"channel, default to `top stories`"},"categories":["traditional-media","popular"],"description":"Provides a better reading experience (full text articles) over the official ones.\n\n    Support major channels, refer to [BBC RSS feeds](https://www.bbc.co.uk/news/10628494). Eg, `business` for `https://feeds.bbci.co.uk/news/business/rss.xml`.\n\n    -   Channel contains sub-directories, such as `https://feeds.bbci.co.uk/news/world/asia/rss.xml`, replace `/` with `-`, `/bbc/world-asia`.","location":"index.ts","heat":4043,"topFeeds":[]}' :test='{"code":0}' />

Provides a better reading experience (full text articles) over the official ones.

    Support major channels, refer to [BBC RSS feeds](https://www.bbc.co.uk/news/10628494). Eg, `business` for `https://feeds.bbci.co.uk/news/business/rss.xml`.

    -   Channel contains sub-directories, such as `https://feeds.bbci.co.uk/news/world/asia/rss.xml`, replace `/` with `-`, `/bbc/world-asia`.

## 央视新闻 <Site url="news.cctv.com"/>

### 新闻联播 <Site url="tv.cctv.com/lm/xwlb" size="sm" />

<Route namespace="cctv" :data='{"path":"/:site/:category/:name","categories":["traditional-media","popular"],"example":"/cctv/tv/lm/xwlb","parameters":{"site":"站点, 可选值如&#39;tv&#39;, 既&#39;央视节目&#39;","category":"分类名, 官网对应分类, 当前可选值&#39;lm&#39;, 既&#39;栏目大全&#39;","name":{"description":"栏目名称, 可在对应栏目页面 URL 中找到, 可选值如&#39;xwlb&#39;,既&#39;新闻联播&#39;","options":[{"value":"xwlb","label":"新闻联播"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["tv.cctv.com/lm/xwlb","tv.cctv.com/"]}],"name":"新闻联播","maintainers":["zengxs"],"url":"tv.cctv.com/lm/xwlb","description":"新闻联播内容摘要。","location":"xwlb.ts","heat":4041,"topFeeds":[]}' :test='{"code":0}' />

新闻联播内容摘要。

## Epic Games Store <Site url="store.epicgames.com"/>

### Free games <Site url="store.epicgames.com" size="sm" />

<Route namespace="epicgames" :data='{"path":"/freegames/:locale?/:country?","categories":["game","popular"],"view":5,"example":"/epicgames/freegames/en-US/US","parameters":{"locale":{"description":"Locale","default":"en-US"},"country":{"description":"Country","default":"US"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["store.epicgames.com/:locale/free-games"],"target":"/freegames/:locale"}],"name":"Free games","maintainers":["DIYgod","NeverBehave","Zyx-A","junfengP","nczitzk","KotaHv"],"location":"index.ts","heat":3965,"topFeeds":[]}' :test='{"code":0}' />

## 北京天文馆 <Site url="www.bjp.org.cn"/>

### 每日一图 <Site url="bjp.org.cn/APOD/today.shtml" size="sm" />

<Route namespace="bjp" :data='{"path":"/apod","categories":["picture","popular"],"view":2,"example":"/bjp/apod","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["bjp.org.cn/APOD/today.shtml","bjp.org.cn/APOD/list.shtml","bjp.org.cn/"]}],"name":"每日一图","maintainers":["HenryQW"],"url":"bjp.org.cn/APOD/today.shtml","location":"apod.ts","heat":3960,"topFeeds":[]}' :test='{"code":0}' />

## Bloomberg <Site url="www.bloomberg.com"/>

### Bloomberg Site <Site url="www.bloomberg.com" size="sm" />

<Route namespace="bloomberg" :data='{"path":"/:site?","categories":["finance","popular"],"view":0,"example":"/bloomberg/bbiz","parameters":{"site":{"description":"Site ID, can be found below","options":[{"value":"/","label":"News"},{"value":"bpol","label":"Politics"},{"value":"bbiz","label":"Business"},{"value":"markets","label":"Markets"},{"value":"technology","label":"Technology"},{"value":"green","label":"Green"},{"value":"wealth","label":"Wealth"},{"value":"pursuits","label":"Pursuits"},{"value":"bview","label":"Opinion"},{"value":"equality","label":"Equality"},{"value":"businessweek","label":"Businessweek"},{"value":"citylab","label":"CityLab"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Bloomberg Site","maintainers":["bigfei"],"description":"\n| Site ID      | Title        |\n| ------------ | ------------ |\n| /            | News         |\n| bpol         | Politics     |\n| bbiz         | Business     |\n| markets      | Markets      |\n| technology   | Technology   |\n| green        | Green        |\n| wealth       | Wealth       |\n| pursuits     | Pursuits     |\n| bview        | Opinion      |\n| equality     | Equality     |\n| businessweek | Businessweek |\n| citylab      | CityLab      |\n  ","location":"index.ts","heat":3808,"topFeeds":[]}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:44:18)\n    at listOnTimeout (node:internal/timers:588:17)\n    at processTimers (node:internal/timers:523:7)"}' />


| Site ID      | Title        |
| ------------ | ------------ |
| /            | News         |
| bpol         | Politics     |
| bbiz         | Business     |
| markets      | Markets      |
| technology   | Technology   |
| green        | Green        |
| wealth       | Wealth       |
| pursuits     | Pursuits     |
| bview        | Opinion      |
| equality     | Equality     |
| businessweek | Businessweek |
| citylab      | CityLab      |
  

## 东方财富 <Site url="data.eastmoney.com"/>

### 研究报告 <Site url="data.eastmoney.com" size="sm" />

<Route namespace="eastmoney" :data='{"path":"/report/:category","categories":["finance","popular"],"view":0,"example":"/eastmoney/report/strategyreport","parameters":{"category":{"description":"研报类型","options":[{"value":"strategyreport","label":"策略报告"},{"value":"macresearch","label":"宏观研究"},{"value":"brokerreport","label":"券商晨报"},{"value":"industry","label":"行业研报"},{"value":"stock","label":"个股研报"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["data.eastmoney.com/report/:category"]}],"name":"研究报告","maintainers":["syzq"],"description":"| 策略报告       | 宏观研究    | 券商晨报     | 行业研究 | 个股研报 |\n| -------------- | ----------- | ------------ | -------- | -------- |\n| strategyreport | macresearch | brokerreport | industry | stock    |","location":"report/index.ts","heat":3679,"topFeeds":[]}' :test='{"code":0}' />

| 策略报告       | 宏观研究    | 券商晨报     | 行业研究 | 个股研报 |
| -------------- | ----------- | ------------ | -------- | -------- |
| strategyreport | macresearch | brokerreport | industry | stock    |

## 站酷 <Site url="www.zcool.com.cn"/>

### 用户作品 <Site url="www.zcool.com.cn" size="sm" />

<Route namespace="zcool" :data='{"path":"/user/:uid","categories":["design","popular"],"view":2,"example":"/zcool/user/baiyong","parameters":{"uid":"个性域名前缀或者用户ID"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.zcool.com.cn/u/:id"],"target":"/user/:id"}],"name":"用户作品","description":"  例如:\n\n    站酷的个人主页 `https://baiyong.zcool.com.cn` 对应 rss 路径 `/zcool/user/baiyong`\n\n    站酷的个人主页 `https://www.zcool.com.cn/u/568339` 对应 rss 路径 `/zcool/user/568339`","maintainers":["junbaor"],"location":"user.ts","heat":1953,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2588)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

  例如:

    站酷的个人主页 `https://baiyong.zcool.com.cn` 对应 rss 路径 `/zcool/user/baiyong`

    站酷的个人主页 `https://www.zcool.com.cn/u/568339` 对应 rss 路径 `/zcool/user/568339`

### 作品总榜单 <Site url="www.zcool.com.cn" size="sm" />

<Route namespace="zcool" :data='{"path":"/top/:type","categories":["design","popular"],"view":2,"example":"/zcool/top/design","parameters":{"type":{"description":"推荐类型","options":[{"value":"design","label":"作品榜单"},{"value":"article","label":"文章榜单"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"作品总榜单","maintainers":["yuuow"],"location":"top.ts","heat":1705,"topFeeds":[]}' :test='{"code":0}' />

## NGA <Site url="bbs.nga.cn"/>

### 分区帖子 <Site url="bbs.nga.cn" size="sm" />

<Route namespace="nga" :data='{"path":"/forum/:fid/:recommend?","categories":["bbs","popular"],"view":0,"example":"/nga/forum/489","parameters":{"fid":"分区 id, 可在分区主页 URL 找到, 没有 fid 时 stid 同样适用","recommend":"是否只显示精华主题, 留空为否, 任意值为是"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"分区帖子","maintainers":["xyqfer"],"location":"forum.ts","heat":3314,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected [ …(30) ] to not include &#39;https://nga.178.com/read.php?tid=4486…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.1.9/node_modules/@vitest/expect/dist/index.js:1196:17)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.1.9/node_modules/@vitest/expect/dist/index.js:972:17)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@5.2.1/node_modules/chai/chai.js:1706:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1601)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)"}' />

## 7mmtv <Site url="7mmtv.tv"/>

### Category <Site url="7mmtv.tv" size="sm" />

<Route namespace="7mmtv" :data='{"path":"/:language?/:category?/:type?","categories":["multimedia","popular"],"example":"/7mmtv/zh/censored_list/all","parameters":{"language":"Language, see below, `en` as English by default","category":"Category, see below, `censored_list` as Censored by default","type":"Server, see below, all server by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false,"nsfw":true},"name":"Category","maintainers":["nczitzk"],"description":"**Language**\n\n| English | 日本語 | 한국의 | 中文 |\n| ------- | ------ | ------ | ---- |\n| en      | ja     | ko     | zh   |\n\n  **Category**\n\n| Chinese subtitles AV | Censored       | Amateur          | Uncensored       | Asian self-timer | H comics     |\n| -------------------- | -------------- | ---------------- | ---------------- | ---------------- | ------------ |\n| chinese_list        | censored_list | amateurjav_list | uncensored_list | amateur_list    | hcomic_list |\n\n| Chinese subtitles AV random | Censored random  | Amateur random     | Uncensored random  | Asian self-timer random | H comics random |\n| --------------------------- | ---------------- | ------------------ | ------------------ | ----------------------- | --------------- |\n| chinese_random             | censored_random | amateurjav_random | uncensored_random | amateur_random         | hcomic_random  |\n\n  **Server**\n\n| All Server | fembed(Full DL) | streamsb(Full DL) | doodstream | streamtape(Full DL) | avgle | embedgram | videovard(Full DL) |\n| ---------- | --------------- | ----------------- | ---------- | ------------------- | ----- | --------- | ------------------ |\n| all        | 21              | 30                | 28         | 29                  | 17    | 34        | 33                 |","location":"index.ts","heat":2855,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 77)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

**Language**

| English | 日本語 | 한국의 | 中文 |
| ------- | ------ | ------ | ---- |
| en      | ja     | ko     | zh   |

  **Category**

| Chinese subtitles AV | Censored       | Amateur          | Uncensored       | Asian self-timer | H comics     |
| -------------------- | -------------- | ---------------- | ---------------- | ---------------- | ------------ |
| chinese_list        | censored_list | amateurjav_list | uncensored_list | amateur_list    | hcomic_list |

| Chinese subtitles AV random | Censored random  | Amateur random     | Uncensored random  | Asian self-timer random | H comics random |
| --------------------------- | ---------------- | ------------------ | ------------------ | ----------------------- | --------------- |
| chinese_random             | censored_random | amateurjav_random | uncensored_random | amateur_random         | hcomic_random  |

  **Server**

| All Server | fembed(Full DL) | streamsb(Full DL) | doodstream | streamtape(Full DL) | avgle | embedgram | videovard(Full DL) |
| ---------- | --------------- | ----------------- | ---------- | ------------------- | ----- | --------- | ------------------ |
| all        | 21              | 30                | 28         | 29                  | 17    | 34        | 33                 |

## Readhub <Site url="readhub.cn"/>

### 每日早报 <Site url="readhub.cn/daily" size="sm" />

<Route namespace="readhub" :data='{"path":"/daily","categories":["new-media","popular"],"example":"/readhub/daily","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["readhub.cn/daily"]}],"name":"每日早报","maintainers":["nczitzk","fashioncj"],"url":"readhub.cn/daily","location":"daily.ts","heat":2639,"topFeeds":[]}' :test='{"code":0}' />

## 有知有行 <Site url="youzhiyouxing.cn"/>

### 有知文章 <Site url="youzhiyouxing.cn/materials" size="sm" />

<Route namespace="youzhiyouxing" :data='{"path":"/materials/:id?","categories":["finance","popular"],"view":0,"example":"/youzhiyouxing/materials","parameters":{"id":{"description":"分类","options":[{"value":"0","label":"全部"},{"value":"4","label":"知行小酒馆"},{"value":"2","label":"知行黑板报"},{"value":"10","label":"无人知晓"},{"value":"1","label":"孟岩专栏"},{"value":"3","label":"知行读书会"},{"value":"11","label":"你好，同路人"}],"default":"0"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["youzhiyouxing.cn/materials"],"target":"/materials"}],"name":"有知文章","maintainers":["broven","Fatpandac","nczitzk"],"url":"youzhiyouxing.cn/materials","description":"| 全部 | 知行小酒馆 | 知行黑板报 | 无人知晓 | 孟岩专栏 | 知行读书会 | 你好，同路人 |\n| :--: | :--------: | :--------: | :------: | :------: | :--------: | :----------: |\n|   0  |      4     |      2     |    10    |     1    |      3     |      11      |","location":"materials.ts","heat":2625,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2563)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

| 全部 | 知行小酒馆 | 知行黑板报 | 无人知晓 | 孟岩专栏 | 知行读书会 | 你好，同路人 |
| :--: | :--------: | :--------: | :------: | :------: | :--------: | :----------: |
|   0  |      4     |      2     |    10    |     1    |      3     |      11      |

## 网易公开课 <Site url="163.com"/>

::: tip
部分歌单及听歌排行信息为登陆后可见，自建时将环境变量`NCM_COOKIES`设为登陆后的 Cookie 值，即可正常获取。
:::

### 电台节目 <Site url="163.com" size="sm" />

<Route namespace="163" :data='{"path":"/music/djradio/:id/:info?","categories":["multimedia","popular"],"example":"/163/music/djradio/347317067","parameters":{"id":"节目 id, 可在电台节目页 URL 中找到","info":"默认在正文尾部显示节目相关信息，任意值为不显示"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":true,"supportScihub":false},"name":"电台节目","maintainers":["magic-akari"],"location":"music/djradio.ts","heat":2533,"topFeeds":[]}' :test='{"code":0}' />

## 科学网 <Site url="blog.sciencenet.cn"/>

### 精选博客 <Site url="blog.sciencenet.cn" size="sm" />

<Route namespace="sciencenet" :data='{"path":"/blog/:type?/:time?/:sort?","categories":["new-media","popular"],"example":"/sciencenet/blog","parameters":{"type":"类型，见下表，默认为推荐","time":"时间，见下表，默认为所有时间","sort":"排序，见下表，默认为按发表时间排序"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"精选博客","maintainers":["nczitzk"],"description":"类型\n\n| 精选      | 最新 | 热门 |\n| --------- | ---- | ---- |\n| recommend | new  | hot  |\n\n  时间\n\n| 36 小时内精选博文 | 一周内精选博文 | 一月内精选博文 | 半年内精选博文 | 所有时间精选博文 |\n| ----------------- | -------------- | -------------- | -------------- | ---------------- |\n| 1                 | 2              | 3              | 4              | 5                |\n\n  排序\n\n| 按发表时间排序 | 按评论数排序 | 按点击数排序 |\n| -------------- | ------------ | ------------ |\n| 1              | 2            | 3            |","location":"blog.ts","heat":2485,"topFeeds":[]}' :test='{"code":0}' />

类型

| 精选      | 最新 | 热门 |
| --------- | ---- | ---- |
| recommend | new  | hot  |

  时间

| 36 小时内精选博文 | 一周内精选博文 | 一月内精选博文 | 半年内精选博文 | 所有时间精选博文 |
| ----------------- | -------------- | -------------- | -------------- | ---------------- |
| 1                 | 2              | 3              | 4              | 5                |

  排序

| 按发表时间排序 | 按评论数排序 | 按点击数排序 |
| -------------- | ------------ | ------------ |
| 1              | 2            | 3            |

## Solidot <Site url="www.solidot.org"/>

### 最新消息 <Site url="www.solidot.org" size="sm" />

<Route namespace="solidot" :data='{"path":"/:type?","categories":["traditional-media","popular"],"view":0,"example":"/solidot/linux","parameters":{"type":{"description":"消息类型，在网站上方选择后复制子域名或参见 [https://www.solidot.org/index.rss](https://www.solidot.org/index.rss) 即可","options":[{"value":"www","label":"全部"},{"value":"startup","label":"创业"},{"value":"linux","label":"Linux"},{"value":"science","label":"科学"},{"value":"technology","label":"科技"},{"value":"mobile","label":"移动"},{"value":"apple","label":"苹果"},{"value":"hardware","label":"硬件"},{"value":"software","label":"软件"},{"value":"security","label":"安全"},{"value":"games","label":"游戏"},{"value":"books","label":"书籍"},{"value":"ask","label":"ask"},{"value":"idle","label":"idle"},{"value":"blog","label":"博客"},{"value":"cloud","label":"云计算"},{"value":"story","label":"奇客故事"}],"default":"www"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"最新消息","maintainers":["sgqy","hang333","TonyRL"],"location":"main.ts","heat":2388,"topFeeds":[]}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:44:18)\n    at listOnTimeout (node:internal/timers:588:17)\n    at processTimers (node:internal/timers:523:7)"}' />

## GoFans <Site url="gofans.cn"/>

### 最新限免 / 促销应用 <Site url="gofans.cn" size="sm" />

<Route namespace="gofans" :data='{"path":"/:kind?","categories":["program-update","popular"],"example":"/gofans","parameters":{"kind":"Platform, either `macos` or `ios`, empty means both (default)"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"最新限免 / 促销应用","maintainers":["HenryQW"],"location":"index.ts","heat":2347,"topFeeds":[]}' :test='{"code":0}' />

## 竹白 <Site url="zhubai.love"/>

### 文章 <Site url="zhubai.love" size="sm" />

<Route namespace="zhubai" :data='{"path":"/posts/:id","categories":["blog","popular"],"example":"/zhubai/posts/via","parameters":{"id":"`id` 为竹白主页 url 中的三级域名，如 via.zhubai.love 的 `id` 为 `via`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"文章","maintainers":["naixy28"],"description":"::: tip\n  在路由末尾处加上 `?limit=限制获取数目` 来限制获取条目数量，默认值为`20`\n:::","location":"index.ts","heat":2343,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2617)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

::: tip
  在路由末尾处加上 `?limit=限制获取数目` 来限制获取条目数量，默认值为`20`
:::

## 第一会所 <Site url="sis001.com"/>

::: tip
    第一会所有多个备用网址，本路由默认使用`https://sis001.com`，若该网址无法访问，可以在部署实例的时候通过`SIS001_BASE_URL`环境变量配置要使用的地址，如`https://www.sis001.com`等
:::

### 子版块 <Site url="sis001.com" size="sm" />

<Route namespace="sis001" :data='{"path":"/forum/:id?","categories":["bbs","popular"],"example":"/sis001/forum/322","parameters":{"id":"子版块 ID，可在子论坛 URL 找到，默认为 `Funny Jokes | 短篇笑话区`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false,"nsfw":true},"name":"子版块","maintainers":["TonyRL"],"location":"forum.ts","heat":2331,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2066)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## 人人影视 <Site url="yysub.net"/>

### 影视资讯 <Site url="yysub.net" size="sm" />

<Route namespace="yyets" :data='{"path":"/article/:type?","categories":["multimedia","popular"],"view":0,"example":"/yyets/article","parameters":{"type":{"description":"类型","options":[{"value":"all","label":"全部"},{"value":"news","label":"影视资讯"},{"value":"report","label":"收视快报"},{"value":"m_review","label":"人人影评"},{"value":"t_review","label":"人人剧评"},{"value":"new_review","label":"新剧评测"},{"value":"recom","label":"片单推荐"}],"default":"all"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"影视资讯","maintainers":["wb121017405"],"description":"| 全部 | 影视资讯 | 收视快报 | 人人影评  | 人人剧评  | 新剧评测    | 片单推荐 |\n| ---- | -------- | -------- | --------- | --------- | ----------- | -------- |\n|      | news     | report   | m_review | t_review | new_review | recom    |","location":"article.ts","heat":2255,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2570)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

| 全部 | 影视资讯 | 收视快报 | 人人影评  | 人人剧评  | 新剧评测    | 片单推荐 |
| ---- | -------- | -------- | --------- | --------- | ----------- | -------- |
|      | news     | report   | m_review | t_review | new_review | recom    |

## 澎湃新闻 <Site url="thepaper.cn"/>

以下所有路由可使用参数`old`以采取旧全文获取方法。该方法会另外获取网页中的图片与视频资源。在原始 url 追加`?old=yes`以启用.

### 首页头条 <Site url="thepaper.cn/" size="sm" />

<Route namespace="thepaper" :data='{"path":"/featured","categories":["new-media","popular"],"example":"/thepaper/featured","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["thepaper.cn/"]}],"name":"首页头条","maintainers":["HenryQW","nczitzk","bigfei"],"url":"thepaper.cn/","location":"featured.ts","heat":2214,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2240)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## 书伴 <Site url="bookfere.com"/>

### 分类 <Site url="bookfere.com" size="sm" />

<Route namespace="bookfere" :data='{"path":"/:category","categories":["reading","popular"],"view":0,"example":"/bookfere/skills","parameters":{"category":{"description":"分类名","options":[{"value":"weekly","label":"每周一书"},{"value":"skills","label":"使用技巧"},{"value":"books","label":"图书推荐"},{"value":"news","label":"新闻速递"},{"value":"essay","label":"精选短文"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"分类","maintainers":["OdinZhang"],"description":"| 每周一书 | 使用技巧 | 图书推荐 | 新闻速递 | 精选短文 |\n| -------- | -------- | -------- | -------- | -------- |\n| weekly   | skills   | books    | news     | essay    |","location":"category.ts","heat":2201,"topFeeds":[]}' :test='{"code":0}' />

| 每周一书 | 使用技巧 | 图书推荐 | 新闻速递 | 精选短文 |
| -------- | -------- | -------- | -------- | -------- |
| weekly   | skills   | books    | news     | essay    |

## InfoQ 中文 <Site url="infoq.cn"/>

### 推荐 <Site url="infoq.cn/" size="sm" />

<Route namespace="infoq" :data='{"path":"/recommend","categories":["new-media","popular"],"example":"/infoq/recommend","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["infoq.cn/"]}],"name":"推荐","maintainers":["brilon"],"url":"infoq.cn/","location":"recommend.ts","heat":2190,"topFeeds":[]}' :test='{"code":0}' />

## HelloGitHub <Site url="hellogithub.com"/>

### 开源项目 <Site url="hellogithub.com" size="sm" />

<Route namespace="hellogithub" :data='{"path":"/home/:sort?/:id?","categories":["programming","popular"],"example":"/hellogithub/home","parameters":{"sort":"排序方式，见下表，默认为 `featured`，即精选","id":"标签 id，可在对应标签页 URL 中找到，默认为全部标签"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"开源项目","maintainers":["moke8","nczitzk","CaoMeiYouRen"],"description":"| 精选 | 全部 |\n| ---- | ---- |\n| featured  | all |","location":"index.ts","heat":1155,"topFeeds":[]}' :test='{"code":0}' />

| 精选 | 全部 |
| ---- | ---- |
| featured  | all |

### 月刊 <Site url="hellogithub.com" size="sm" />

<Route namespace="hellogithub" :data='{"path":"/volume","example":"/hellogithub/volume","name":"月刊","maintainers":["moke8","nczitzk","CaoMeiYouRen"],"location":"volume.ts","heat":1033,"topFeeds":[]}' :test='{"code":0}' />

## The Economist <Site url="economist.com"/>

### Espresso <Site url="economist.com/the-world-in-brief" size="sm" />

<Route namespace="economist" :data='{"path":"/espresso","categories":["traditional-media","popular"],"view":0,"example":"/economist/espresso","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["economist.com/the-world-in-brief","economist.com/espresso"]}],"name":"Espresso","maintainers":["TonyRL"],"url":"economist.com/the-world-in-brief","location":"espresso.ts","heat":2124,"topFeeds":[]}' :test='{"code":0}' />

## 南方周末 <Site url="www.infzm.com"/>

### 频道 <Site url="www.infzm.com" size="sm" />

<Route namespace="infzm" :data='{"path":"/:id","parameters":{"id":"南方周末频道 id, 可在该频道的 URL 中找到（即 https://www.infzm.com/contents?term_id=:id)"},"categories":["traditional-media","popular"],"example":"/infzm/1","radar":[{"source":["infzm.com/contents"]}],"name":"频道","maintainers":["KarasuShin","ranpox","xyqfer"],"description":"下面给出部分参考：\n\n| 推荐 | 新闻 | 观点 | 文化 | 人物 | 影像 | 专题 | 生活 | 视频 |\n| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |\n| 1    | 2    | 3    | 4    | 7    | 8    | 6    | 5    | 131  |","location":"index.ts","heat":2114,"topFeeds":[]}' :test='{"code":0}' />

下面给出部分参考：

| 推荐 | 新闻 | 观点 | 文化 | 人物 | 影像 | 专题 | 生活 | 视频 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1    | 2    | 3    | 4    | 7    | 8    | 6    | 5    | 131  |

## 雪球 <Site url="danjuanapp.com"/>

### 用户动态 <Site url="danjuanapp.com" size="sm" />

<Route namespace="xueqiu" :data='{"path":"/user/:id/:type?","categories":["finance","popular"],"example":"/xueqiu/user/8152922548","parameters":{"id":"用户 id, 可在用户主页 URL 中找到","type":"动态的类型, 不填则默认全部"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["xueqiu.com/u/:id"],"target":"/user/:id"}],"name":"用户动态","maintainers":["imlonghao"],"description":"| 原发布 | 长文 | 问答 | 热门 | 交易 |\n| ------ | ---- | ---- | ---- | ---- |\n| 0      | 2    | 4    | 9    | 11   |","location":"user.ts","heat":2095,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2521)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

| 原发布 | 长文 | 问答 | 热门 | 交易 |
| ------ | ---- | ---- | ---- | ---- |
| 0      | 2    | 4    | 9    | 11   |

## Spotify <Site url="open.spotify.com"/>

### Show/Podcasts <Site url="open.spotify.com" size="sm" />

<Route namespace="spotify" :data='{"path":"/show/:id","categories":["multimedia","popular"],"view":4,"example":"/spotify/show/5CfCWKI5pZ28U0uOzXkDHe","parameters":{"id":"Show ID"},"features":{"requireConfig":[{"name":"SPOTIFY_CLIENT_ID","description":""},{"name":"SPOTIFY_CLIENT_SECRET","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["open.spotify.com/show/:id"]}],"name":"Show/Podcasts","maintainers":["caiohsramos","pseudoyu"],"location":"show.ts","heat":2067,"topFeeds":[]}' :test='undefined' />

## National Geographic <Site url="nationalgeographic.com"/>

### Daily Photo <Site url="nationalgeographic.com/photo-of-the-day/*" size="sm" />

<Route namespace="natgeo" :data='{"path":"/dailyphoto","categories":["picture","popular"],"view":2,"example":"/natgeo/dailyphoto","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nationalgeographic.com/photo-of-the-day/*","nationalgeographic.com/"]}],"name":"Daily Photo","maintainers":["LogicJake","OrangeEd1t","TonyRL","pseudoyu"],"url":"nationalgeographic.com/photo-of-the-day/*","location":"dailyphoto.ts","heat":1972,"topFeeds":[]}' :test='{"code":0}' />

## Behance <Site url="www.behance.net"/>

### User Works <Site url="www.behance.net" size="sm" />

<Route namespace="behance" :data='{"path":"/:user/:type?","categories":["design","popular"],"view":2,"example":"/behance/mishapetrick","parameters":{"user":"username","type":{"description":"type","options":[{"value":"projects","label":"projects"},{"value":"appreciated","label":"appreciated"}],"default":"projects"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User Works","maintainers":["MisteryMonster"],"description":"Behance user&#39;s profile URL, like [https://www.behance.net/mishapetrick](https://www.behance.net/mishapetrick) the username will be `mishapetrick`。","location":"user.ts","heat":1855,"topFeeds":[]}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:44:18)\n    at listOnTimeout (node:internal/timers:588:17)\n    at processTimers (node:internal/timers:523:7)"}' />

Behance user's profile URL, like [https://www.behance.net/mishapetrick](https://www.behance.net/mishapetrick) the username will be `mishapetrick`。

## 财联社 <Site url="cls.cn"/>

### 深度 <Site url="cls.cn" size="sm" />

<Route namespace="cls" :data='{"path":"/depth/:category?","categories":["finance","popular"],"example":"/cls/depth/1000","parameters":{"category":"分类代码，可在首页导航栏的目标网址 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"深度","maintainers":["nczitzk"],"description":"| 头条 | 股市 | 港股 | 环球 | 公司 | 券商 | 基金 | 地产 | 金融 | 汽车 | 科创 | 创业版 | 品见 | 期货 | 投教 |\n| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ------ | ---- | ---- | ---- |\n| 1000 | 1003 | 1135 | 1007 | 1005 | 1118 | 1110 | 1006 | 1032 | 1119 | 1111 | 1127   | 1160 | 1124 | 1176 |","location":"depth.ts","heat":1752,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 481)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

| 头条 | 股市 | 港股 | 环球 | 公司 | 券商 | 基金 | 地产 | 金融 | 汽车 | 科创 | 创业版 | 品见 | 期货 | 投教 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ------ | ---- | ---- | ---- |
| 1000 | 1003 | 1135 | 1007 | 1005 | 1118 | 1110 | 1006 | 1032 | 1119 | 1111 | 1127   | 1160 | 1124 | 1176 |

## 金十数据 <Site url="jin10.com"/>

### 市场快讯 <Site url="jin10.com/" size="sm" />

<Route namespace="jin10" :data='{"path":"/:important?","categories":["finance","popular"],"view":5,"example":"/jin10","parameters":{"important":"只看重要，任意值开启，留空关闭"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["jin10.com/"],"target":""}],"name":"市场快讯","maintainers":["laampui"],"url":"jin10.com/","location":"index.ts","heat":1681,"topFeeds":[]}' :test='{"code":0}' />

## Bluesky (bsky) <Site url="bsky.app"/>

### Post <Site url="bsky.app" size="sm" />

<Route namespace="bsky" :data='{"path":"/profile/:handle/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/bsky/profile/bsky.app","parameters":{"handle":"User handle, can be found in URL","routeParams":"Filter parameter, Use filter to customize content types"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["bsky.app/profile/:handle"]}],"name":"Post","maintainers":["TonyRL"],"description":"\n| Filter Value | Description |\n|--------------|-------------|\n| posts_with_replies | Includes Posts, Replies, and Reposts |\n| posts_no_replies | Includes Posts and Reposts, without Replies |\n| posts_with_media | Shows only Posts containing media |\n| posts_and_author_threads | Shows Posts and Threads, without Replies and Reposts |\n\nDefault value for filter is `posts_and_author_threads` if not specified.\n\nExample:\n- `/bsky/profile/bsky.app/filter=posts_with_replies`","location":"posts.ts","heat":1663,"topFeeds":[]}' :test='{"code":0}' />


| Filter Value | Description |
|--------------|-------------|
| posts_with_replies | Includes Posts, Replies, and Reposts |
| posts_no_replies | Includes Posts and Reposts, without Replies |
| posts_with_media | Shows only Posts containing media |
| posts_and_author_threads | Shows Posts and Threads, without Replies and Reposts |

Default value for filter is `posts_and_author_threads` if not specified.

Example:
- `/bsky/profile/bsky.app/filter=posts_with_replies`

## Binance <Site url="binance.com"/>

### Announcement <Site url="binance.com" size="sm" />

<Route namespace="binance" :data='{"path":"/announcement/:type","categories":["finance","popular"],"view":0,"example":"/binance/announcement/new-cryptocurrency-listing","parameters":{"type":{"description":"Binance Announcement type","default":"new-cryptocurrency-listing","options":[{"value":"new-cryptocurrency-listing","label":"New Cryptocurrency Listing"},{"value":"latest-binance-news","label":"Latest Binance News"},{"value":"latest-activities","label":"Latest Activities"},{"value":"new-fiat-listings","label":"New Fiat Listings"},{"value":"api-updates","label":"API Updates"},{"value":"crypto-airdrop","label":"Crypto Airdrop"},{"value":"wallet-maintenance-updates","label":"Wallet Maintenance Updates"},{"value":"delisting","label":"Delisting"}]}},"name":"Announcement","description":"\nType category\n\n - new-cryptocurrency-listing => New Cryptocurrency Listing\n - latest-binance-news        => Latest Binance News\n - latest-activities          => Latest Activities\n - new-fiat-listings          => New Fiat Listings\n - api-updates                => API Updates\n - crypto-airdrop             => Crypto Airdrop\n - wallet-maintenance-updates => Wallet Maintenance Updates\n - delisting                  => Delisting\n","maintainers":["enpitsulin"],"location":"announcement.ts","heat":1573,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 287)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />


Type category

 - new-cryptocurrency-listing => New Cryptocurrency Listing
 - latest-binance-news        => Latest Binance News
 - latest-activities          => Latest Activities
 - new-fiat-listings          => New Fiat Listings
 - api-updates                => API Updates
 - crypto-airdrop             => Crypto Airdrop
 - wallet-maintenance-updates => Wallet Maintenance Updates
 - delisting                  => Delisting


## 麦肯锡 <Site url="mckinsey.com.cn"/>

### 洞见 <Site url="mckinsey.com.cn" size="sm" />

<Route namespace="mckinsey" :data='{"path":"/cn/:category?","categories":["finance","popular"],"view":0,"example":"/mckinsey/cn","parameters":{"category":{"description":"分类，留空为 `最新洞见`","options":[{"value":"autos","label":"汽车"},{"value":"banking-insurance","label":"金融服务"},{"value":"consumers","label":"消费者"},{"value":"healthcare-pharmaceuticals","label":"医药与医疗"},{"value":"business-technology","label":"数字化"},{"value":"manufacturing","label":"制造业"},{"value":"technology-media-and-telecom","label":"技术，媒体与通信"},{"value":"urbanization-sustainability","label":"城市化与可持续发展"},{"value":"innovation","label":"创新"},{"value":"talent-leadership","label":"人才与领导力"},{"value":"macroeconomy","label":"宏观经济"},{"value":"mckinsey-global-institute","label":"麦肯锡全球研究院"},{"value":"insights","label":"洞见"},{"value":"capital-projects-infrastructure","label":"资本项目和基础设施"},{"value":"交通运输与物流","label":"旅游、运输和物流"},{"value":"全球基础材料","label":"全球基础材料"},{"value":"出海与国际化、转型","label":"出海与国际化、转型"}],"default":"最新洞见"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"洞见","maintainers":["laampui"],"description":"| 分类                            | 分类名             |\n| ------------------------------- | ------------------ |\n|                                 | 全部洞见           |\n| autos                           | 汽车               |\n| banking-insurance               | 金融服务           |\n| consumers                       | 消费者             |\n| healthcare-pharmaceuticals      | 医药与医疗         |\n| business-technology             | 数字化             |\n| manufacturing                   | 制造业             |\n| technology-media-and-telecom    | 技术，媒体与通信   |\n| urbanization-sustainability     | 城市化与可持续发展 |\n| innovation                      | 创新               |\n| talent-leadership               | 人才与领导力       |\n| macroeconomy                    | 宏观经济           |\n| mckinsey-global-institute       | 麦肯锡全球研究院   |\n| capital-projects-infrastructure | 资本项目和基础设施 |\n| 交通运输与物流                  | 旅游、运输和物流   |\n| 出海与国际化、转型              | 出海与国际化、转型 |\n| 全球基础材料                    | 全球基础材料       |","location":"cn/index.ts","heat":1572,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1472)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

| 分类                            | 分类名             |
| ------------------------------- | ------------------ |
|                                 | 全部洞见           |
| autos                           | 汽车               |
| banking-insurance               | 金融服务           |
| consumers                       | 消费者             |
| healthcare-pharmaceuticals      | 医药与医疗         |
| business-technology             | 数字化             |
| manufacturing                   | 制造业             |
| technology-media-and-telecom    | 技术，媒体与通信   |
| urbanization-sustainability     | 城市化与可持续发展 |
| innovation                      | 创新               |
| talent-leadership               | 人才与领导力       |
| macroeconomy                    | 宏观经济           |
| mckinsey-global-institute       | 麦肯锡全球研究院   |
| capital-projects-infrastructure | 资本项目和基础设施 |
| 交通运输与物流                  | 旅游、运输和物流   |
| 出海与国际化、转型              | 出海与国际化、转型 |
| 全球基础材料                    | 全球基础材料       |

## Apple <Site url="apple.com"/>

### App Update <Site url="apple.com" size="sm" />

<Route namespace="apple" :data='{"path":"/apps/update/:country/:id/:platform?","categories":["program-update","popular"],"view":5,"example":"/apple/apps/update/us/id408709785","parameters":{"country":"App Store Country, obtain from the app URL, see below","id":"App id, obtain from the app URL","platform":{"description":"App Platform, see below, all by default","options":[{"value":"All","label":"all"},{"value":"iOS","label":"iOS"},{"value":"macOS","label":"macOS"},{"value":"tvOS","label":"tvOS"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["apps.apple.com/:country/app/:appSlug/:id","apps.apple.com/:country/app/:id"],"target":"/apps/update/:country/:id"}],"name":"App Update","maintainers":["EkkoG","nczitzk"],"description":"\n::: tip\n  For example, the URL of [GarageBand](https://apps.apple.com/us/app/messages/id408709785) in the App Store is `https://apps.apple.com/us/app/messages/id408709785`. In this case, the `App Store Country` parameter for the route is `us`, and the `App id` parameter is `id1146560473`. So the route should be [`/apple/apps/update/us/id408709785`](https://rsshub.app/apple/apps/update/us/id408709785).\n:::","location":"apps.ts","heat":1541,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 320127207850 to be less than 311040000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:36:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 173)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)"}' />


::: tip
  For example, the URL of [GarageBand](https://apps.apple.com/us/app/messages/id408709785) in the App Store is `https://apps.apple.com/us/app/messages/id408709785`. In this case, the `App Store Country` parameter for the route is `us`, and the `App id` parameter is `id1146560473`. So the route should be [`/apple/apps/update/us/id408709785`](https://rsshub.app/apple/apps/update/us/id408709785).
:::

## 极客公园 <Site url="geekpark.net"/>

### 栏目 <Site url="geekpark.net" size="sm" />

<Route namespace="geekpark" :data='{"path":"/:column?","name":"栏目","url":"geekpark.net","maintainers":["nczitzk"],"example":"/geekpark","parameters":{"column":"栏目 id，默认为空，即首页资讯，可在对应栏目页 URL 中找到"},"description":"::: tip\n  若订阅 [综合报道](https://www.geekpark.net/column/179)，网址为 `https://www.geekpark.net/column/179`。截取 `https://www.geekpark.net/column/` 到末尾的部分 `179` 作为参数填入，此时路由为 [`/geekpark/179`](https://rsshub.app/geekpark/179)。\n:::\n\n| 栏目                                                         | ID                                     |\n| ------------------------------------------------------------ | -------------------------------------- |\n| [综合报道](https://www.geekpark.net/column/179)              | [179](https://rsshub.app/geekpark/179) |\n| [AI新浪潮观察](https://www.geekpark.net/column/304)          | [304](https://rsshub.app/geekpark/304) |\n| [新造车观察](https://www.geekpark.net/column/305)            | [305](https://rsshub.app/geekpark/305) |\n| [财报解读](https://www.geekpark.net/column/271)              | [271](https://rsshub.app/geekpark/271) |\n| [底稿对话CEO系列](https://www.geekpark.net/column/308)       | [308](https://rsshub.app/geekpark/308) |\n| [Geek Insight 特稿系列](https://www.geekpark.net/column/306) | [306](https://rsshub.app/geekpark/306) |\n| [心科技](https://www.geekpark.net/column/307)                | [307](https://rsshub.app/geekpark/307) |\n| [行业资讯](https://www.geekpark.net/column/2)                | [2](https://rsshub.app/geekpark/2)     |\n  ","categories":["new-media","popular"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["geekpark.net"],"target":"/"},{"source":["geekpark.net/column/:column?"]},{"title":"综合报道","source":["www.geekpark.net/column/179"],"target":"/179"},{"title":"AI新浪潮观察","source":["www.geekpark.net/column/304"],"target":"/304"},{"title":"新造车观察","source":["www.geekpark.net/column/305"],"target":"/305"},{"title":"财报解读","source":["www.geekpark.net/column/271"],"target":"/271"},{"title":"底稿对话CEO系列","source":["www.geekpark.net/column/308"],"target":"/308"},{"title":"Geek Insight 特稿系列","source":["www.geekpark.net/column/306"],"target":"/306"},{"title":"心科技","source":["www.geekpark.net/column/307"],"target":"/307"},{"title":"行业资讯","source":["www.geekpark.net/column/2"],"target":"/2"}],"location":"index.ts","heat":1514,"topFeeds":[]}' :test='{"code":0}' />

::: tip
  若订阅 [综合报道](https://www.geekpark.net/column/179)，网址为 `https://www.geekpark.net/column/179`。截取 `https://www.geekpark.net/column/` 到末尾的部分 `179` 作为参数填入，此时路由为 [`/geekpark/179`](https://rsshub.app/geekpark/179)。
:::

| 栏目                                                         | ID                                     |
| ------------------------------------------------------------ | -------------------------------------- |
| [综合报道](https://www.geekpark.net/column/179)              | [179](https://rsshub.app/geekpark/179) |
| [AI新浪潮观察](https://www.geekpark.net/column/304)          | [304](https://rsshub.app/geekpark/304) |
| [新造车观察](https://www.geekpark.net/column/305)            | [305](https://rsshub.app/geekpark/305) |
| [财报解读](https://www.geekpark.net/column/271)              | [271](https://rsshub.app/geekpark/271) |
| [底稿对话CEO系列](https://www.geekpark.net/column/308)       | [308](https://rsshub.app/geekpark/308) |
| [Geek Insight 特稿系列](https://www.geekpark.net/column/306) | [306](https://rsshub.app/geekpark/306) |
| [心科技](https://www.geekpark.net/column/307)                | [307](https://rsshub.app/geekpark/307) |
| [行业资讯](https://www.geekpark.net/column/2)                | [2](https://rsshub.app/geekpark/2)     |
  

## AInvest <Site url="ainvest.com"/>

### Latest News <Site url="ainvest.com/news" size="sm" />

<Route namespace="ainvest" :data='{"path":"/news","categories":["finance","popular"],"example":"/ainvest/news","parameters":{},"view":0,"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ainvest.com/news"]}],"name":"Latest News","maintainers":["TonyRL"],"url":"ainvest.com/news","location":"news.ts","heat":1504,"topFeeds":[]}' :test='{"code":0}' />

## 中文成人文學網 <Site url="www.xbookcn.net"/>

### 短篇 <Site url="www.xbookcn.net" size="sm" />

<Route namespace="xbookcn" :data='{"path":"/:label?","categories":["reading","popular"],"example":"/xbookcn/精选作品","parameters":{"label":"按名称分类，详见https://blog.xbookcn.net/p/all.html"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false,"nsfw":true},"name":"短篇","maintainers":["Lyunvy"],"location":"blog.ts","heat":1470,"topFeeds":[]}' :test='{"code":0}' />

## Anthropic <Site url="anthropic.com"/>

### News <Site url="www.anthropic.com/news" size="sm" />

<Route namespace="anthropic" :data='{"path":"/news","categories":["programming","popular"],"example":"/anthropic/news","parameters":{},"radar":[{"source":["www.anthropic.com/news","www.anthropic.com"]}],"name":"News","maintainers":["etShaw-zh"],"url":"www.anthropic.com/news","location":"news.ts","heat":1468,"topFeeds":[]}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:44:18)\n    at listOnTimeout (node:internal/timers:588:17)\n    at processTimers (node:internal/timers:523:7)"}' />

## Obsidian <Site url="obsidian.md"/>

### Obsidian Plugins <Site url="obsidian.md" size="sm" />

<Route namespace="obsidian" :data='{"path":"/plugins","name":"Obsidian Plugins","maintainers":["DIYgod"],"categories":["program-update","popular"],"example":"/obsidian/plugins","location":"plugins.ts","heat":1454,"topFeeds":[]}' :test='{"code":0}' />

## 端传媒 <Site url="theinitium.com"/>

通过提取文章全文，以提供比官方源更佳的阅读体验。

::: warning
付费内容全文可能需要登陆获取，详情见部署页面的配置模块。
:::

### App <Site url="theinitium.com" size="sm" />

<Route namespace="theinitium" :data='{"path":"/app/:category?","categories":["new-media","popular"],"example":"/theinitium/app","parameters":{"category":"Category, see below, latest_sc by default"},"features":{"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"App","maintainers":["quiniapiezoelectricity"],"radar":[{"source":["app.theinitium.com/t/latest/:category"],"target":"/app/:category"}],"description":"抓取[The Initium App](https://app.theinitium.com/)的文章列表\n\n::: warning\n此路由暂不支持登陆认证\n:::\n\nCategory 栏目：\n\n| ----- | 简体中文     | 繁體中文      |\n| ----- | ----------------- | ---------------- |\n| 最新   | latest_sc | latest_tc |\n| 日报   | daily_brief_sc | daily_brief_tc |\n| 速递   | whats_new_sc | whats_new_tc |\n| 专题   | report_sc | report_tc |\n| 评论   | opinion_sc | opinion_tc |\n| 国际   | international_sc | international_tc |\n| 大陆   | mainland_sc | mainland_tc |\n| 香港   | hongkong_sc | hongkong_tc |\n| 台湾   | taiwan_sc | taiwan_tc |\n| 播客   | article_audio_sc | article_audio_tc |","location":"app.ts","heat":1453,"topFeeds":[]}' :test='{"code":0}' />

抓取[The Initium App](https://app.theinitium.com/)的文章列表

::: warning
此路由暂不支持登陆认证
:::

Category 栏目：

| ----- | 简体中文     | 繁體中文      |
| ----- | ----------------- | ---------------- |
| 最新   | latest_sc | latest_tc |
| 日报   | daily_brief_sc | daily_brief_tc |
| 速递   | whats_new_sc | whats_new_tc |
| 专题   | report_sc | report_tc |
| 评论   | opinion_sc | opinion_tc |
| 国际   | international_sc | international_tc |
| 大陆   | mainland_sc | mainland_tc |
| 香港   | hongkong_sc | hongkong_tc |
| 台湾   | taiwan_sc | taiwan_tc |
| 播客   | article_audio_sc | article_audio_tc |

## New Yorker <Site url="newyorker.com"/>

### Articles <Site url="newyorker.com" size="sm" />

<Route namespace="newyorker" :data='{"path":"/:category","categories":["traditional-media","popular"],"view":0,"example":"/newyorker/latest","parameters":{"category":"tab name. can be found at url"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["newyorker.com/:category?"]}],"name":"Articles","maintainers":["EthanWng97","pseudoyu"],"location":"news.ts","heat":1451,"topFeeds":[]}' :test='{"code":0}' />

## AIbase <Site url="aibase.com"/>

### 资讯 <Site url="www.aibase.com" size="sm" />

<Route namespace="aibase" :data='{"path":"/news","name":"资讯","url":"www.aibase.com","maintainers":["zreo0"],"example":"/aibase/news","description":"获取 AI 资讯列表","categories":["new-media","popular"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.aibase.com/zh/news"],"target":"/news"}],"location":"news.ts","heat":1352,"topFeeds":[]}' :test='{"code":0}' />

获取 AI 资讯列表

## 爱思想 <Site url="aisixiang.com"/>

### 栏目 <Site url="aisixiang.com" size="sm" />

<Route namespace="aisixiang" :data='{"path":"/column/:id","categories":["reading","popular"],"example":"/aisixiang/column/722","parameters":{"id":"栏目 ID, 可在对应栏目 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"栏目","maintainers":["HenryQW","nczitzk"],"location":"column.ts","heat":1336,"topFeeds":[]}' :test='{"code":0}' />

## 格隆汇 <Site url="gelonghui.com"/>

### 最热文章 <Site url="gelonghui.com/" size="sm" />

<Route namespace="gelonghui" :data='{"path":"/hot-article/:type?","categories":["finance","popular"],"view":0,"example":"/gelonghui/hot-article","parameters":{"type":{"description":"`day` 为日排行，`week` 为周排行，默认为 `day`","options":[{"value":"day","label":"日排行"},{"value":"week","label":"周排行"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gelonghui.com/"],"target":"/hot-article"}],"name":"最热文章","maintainers":["nczitzk"],"url":"gelonghui.com/","location":"hot-article.ts","heat":1321,"topFeeds":[]}' :test='{"code":0}' />

## 微信小程序 <Site url="posts.careerengine.us"/>

::: tip
公众号直接抓取困难，故目前提供几种间接抓取方案，请自行选择
:::

### 公众号文章话题 Tag <Site url="posts.careerengine.us" size="sm" />

<Route namespace="wechat" :data='{"path":"/mp/msgalbum/:biz/:aid","categories":["new-media","popular"],"example":"/wechat/mp/msgalbum/MzA3MDM3NjE5NQ==/1375870284640911361","parameters":{"biz":"公众号id","aid":"Tag id"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"公众号文章话题 Tag","maintainers":["MisteryMonster"],"description":"一些公众号（如看理想）会在微信文章里添加 Tag ，点入 Tag 的链接如 `https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA3MDM3NjE5NQ==&action=getalbum&album_id=1375870284640911361`，其中`biz` 为 `MzA3MDM3NjE5NQ==`，`aid` 为 `1375870284640911361`。","location":"msgalbum.ts","heat":1311,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2416)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

一些公众号（如看理想）会在微信文章里添加 Tag ，点入 Tag 的链接如 `https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA3MDM3NjE5NQ==&action=getalbum&album_id=1375870284640911361`，其中`biz` 为 `MzA3MDM3NjE5NQ==`，`aid` 为 `1375870284640911361`。

## Nature Journal <Site url="nature.com"/>

::: tip
You can get all short name of a journal from [https://www.nature.com/siteindex](https://www.nature.com/siteindex) or [Journal List](#nature-journal-journal-list).
:::

### Latest Research <Site url="nature.com" size="sm" />

<Route namespace="nature" :data='{"path":"/research/:journal?","categories":["journal","popular"],"example":"/nature/research/ng","parameters":{"journal":"short name for a journal, `nature` by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":true},"radar":[{"source":["nature.com/:journal/research-articles","nature.com/:journal","nature.com/"],"target":"/research/:journal"}],"name":"Latest Research","maintainers":["y9c","TonyRL","pseudoyu"],"description":"|   `:journal`  |   Full Name of the Journal  | Route                                                                              |\n| :-----------: | :-------------------------: | ---------------------------------------------------------------------------------- |\n|     nature    |            Nature           | [/nature/research/nature](https://rsshub.app/nature/research/nature)               |\n|      nbt      |     Nature Biotechnology    | [/nature/research/nbt](https://rsshub.app/nature/research/nbt)                     |\n|     neuro     |     Nature Neuroscience     | [/nature/research/neuro](https://rsshub.app/nature/research/neuro)                 |\n|       ng      |       Nature Genetics       | [/nature/research/ng](https://rsshub.app/nature/research/ng)                       |\n|       ni      |      Nature Immunology      | [/nature/research/ni](https://rsshub.app/nature/research/ni)                       |\n|     nmeth     |        Nature Method        | [/nature/research/nmeth](https://rsshub.app/nature/research/nmeth)                 |\n|     nchem     |       Nature Chemistry      | [/nature/research/nchem](https://rsshub.app/nature/research/nchem)                 |\n|      nmat     |       Nature Materials      | [/nature/research/nmat](https://rsshub.app/nature/research/nmat)                   |\n| natmachintell | Nature Machine Intelligence | [/nature/research/natmachintell](https://rsshub.app/nature/research/natmachintell) |\n\n  -   Using router (`/nature/research/` + \"short name for a journal\") to query latest research paper for a certain journal of Nature Publishing Group.\n      If the `:journal` parameter is blank, then latest research of Nature will return.\n  -   The journals from NPG are run by different group of people, and the website of may not be consitent for all the journals\n  -   Only abstract is rendered in some researches","location":"research.ts","heat":1291,"topFeeds":[]}' :test='{"code":0}' />

|   `:journal`  |   Full Name of the Journal  | Route                                                                              |
| :-----------: | :-------------------------: | ---------------------------------------------------------------------------------- |
|     nature    |            Nature           | [/nature/research/nature](https://rsshub.app/nature/research/nature)               |
|      nbt      |     Nature Biotechnology    | [/nature/research/nbt](https://rsshub.app/nature/research/nbt)                     |
|     neuro     |     Nature Neuroscience     | [/nature/research/neuro](https://rsshub.app/nature/research/neuro)                 |
|       ng      |       Nature Genetics       | [/nature/research/ng](https://rsshub.app/nature/research/ng)                       |
|       ni      |      Nature Immunology      | [/nature/research/ni](https://rsshub.app/nature/research/ni)                       |
|     nmeth     |        Nature Method        | [/nature/research/nmeth](https://rsshub.app/nature/research/nmeth)                 |
|     nchem     |       Nature Chemistry      | [/nature/research/nchem](https://rsshub.app/nature/research/nchem)                 |
|      nmat     |       Nature Materials      | [/nature/research/nmat](https://rsshub.app/nature/research/nmat)                   |
| natmachintell | Nature Machine Intelligence | [/nature/research/natmachintell](https://rsshub.app/nature/research/natmachintell) |

  -   Using router (`/nature/research/` + "short name for a journal") to query latest research paper for a certain journal of Nature Publishing Group.
      If the `:journal` parameter is blank, then latest research of Nature will return.
  -   The journals from NPG are run by different group of people, and the website of may not be consitent for all the journals
  -   Only abstract is rendered in some researches

## 麻省理工科技评论 <Site url="mittrchina.com"/>

### 首页 <Site url="mittrchina.com" size="sm" />

<Route namespace="mittrchina" :data='{"path":"/:type?","categories":["new-media","popular"],"example":"/mittrchina/index","parameters":{"type":"类型，见下表，默认为首页资讯"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"首页","maintainers":["EsuRt","queensferryme"],"description":"| 快讯     | 本周热文 | 首页资讯 | 视频  |\n| -------- | -------- | -------- | ----- |\n| breaking | hot      | index    | video |","location":"index.ts","heat":1283,"topFeeds":[]}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:44:18)\n    at listOnTimeout (node:internal/timers:588:17)\n    at processTimers (node:internal/timers:523:7)"}' />

| 快讯     | 本周热文 | 首页资讯 | 视频  |
| -------- | -------- | -------- | ----- |
| breaking | hot      | index    | video |

## IMDb <Site url="www.imdb.com"/>

### Charts <Site url="www.imdb.com/chart/top/" size="sm" />

<Route namespace="imdb" :data='{"path":"/chart/:chart?","categories":["multimedia","popular"],"view":5,"parameters":{"chart":{"description":"The chart to display, `top` by default","options":[{"value":"top","label":"Top 250 Movies"},{"value":"moviemeter","label":"Most Popular Movies"},{"value":"toptv","label":"Top 250 TV Shows"},{"value":"tvmeter","label":"Most Popular TV Shows"}],"default":"top"}},"example":"/imdb/chart","radar":[{"source":["www.imdb.com/chart/:chart/"]}],"name":"Charts","maintainers":["TonyRL"],"url":"www.imdb.com/chart/top/","description":"| Top 250 Movies | Most Popular Movies | Top 250 TV Shows | Most Popular TV Shows |\n| -------------- | ------------------- | ---------------- | --------------------- |\n| top            | moviemeter          | toptv            | tvmeter               |","location":"chart.ts","heat":1279,"topFeeds":[]}' :test='{"code":0}' />

| Top 250 Movies | Most Popular Movies | Top 250 TV Shows | Most Popular TV Shows |
| -------------- | ------------------- | ---------------- | --------------------- |
| top            | moviemeter          | toptv            | tvmeter               |

## 酷安 <Site url="coolapk.com"/>


::: tip
即日起，多数路由图片防盗链。
需要将 `ALLOW_USER_HOTLINK_TEMPLATE` 环境变量设置为 `true` ，然后配置`image_hotlink_template` 。
详见 [#16715](https://github.com/DIYgod/RSSHub/issues/16715)
:::

### 话题 <Site url="coolapk.com" size="sm" />

<Route namespace="coolapk" :data='{"path":"/huati/:tag","categories":["social-media","popular"],"example":"/coolapk/huati/iPhone","parameters":{"tag":"话题名称"},"features":{"requireConfig":[{"name":"ALLOW_USER_HOTLINK_TEMPLATE","optional":true,"description":"设置为`true`并添加`image_hotlink_template`参数来代理图片"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"话题","maintainers":["xizeyoupan"],"location":"huati.ts","heat":1217,"topFeeds":[]}' :test='{"code":0}' />

## CnGal <Site url="www.cngal.org"/>

### 每周速报 <Site url="www.cngal.org/" size="sm" />

<Route namespace="cngal" :data='{"path":"/weekly","categories":["anime","popular"],"view":0,"example":"/cngal/weekly","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.cngal.org/","www.cngal.org/weeklynews"]}],"name":"每周速报","maintainers":["kmod-midori"],"url":"www.cngal.org/","location":"weekly.ts","heat":1198,"topFeeds":[]}' :test='{"code":0}' />

## PLAYNO.1 玩樂達人 <Site url="stno1.playno1.com"/>

### AV <Site url="stno1.playno1.com" size="sm" />

<Route namespace="playno1" :data='{"path":"/av/:catid?","categories":["bbs","popular"],"example":"/playno1/av","parameters":{"catid":"分类，见下表，默认为全部文章"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false,"nsfw":true},"name":"AV","maintainers":["TonyRL"],"description":"::: warning\n目前观测到该博客可能禁止日本 IP 访问。建议部署在日本区以外的服务器上。\n:::\n\n| 全部文章 | AV 新聞 | AV 導覽 |\n| -------- | ------- | ------- |\n| 78       | 3       | 5       |","location":"av.ts","heat":1197,"topFeeds":[]}' :test='{"code":0}' />

::: warning
目前观测到该博客可能禁止日本 IP 访问。建议部署在日本区以外的服务器上。
:::

| 全部文章 | AV 新聞 | AV 導覽 |
| -------- | ------- | ------- |
| 78       | 3       | 5       |

## Konachan.com Anime Wallpapers <Site url="konachan.com"/>

konachan post

### Popular Recent Posts <Site url="konachan.com" size="sm" />

<Route namespace="konachan" :data='{"path":["/post/popular_recent/:period?","/sfw/post/popular_recent/:period?"],"categories":["picture","popular"],"view":2,"example":"/konachan/post/popular_recent/1d","parameters":{"period":{"description":"展示时间","options":[{"value":"1d","label":"最近 24 小时"},{"value":"1w","label":"最近一周"},{"value":"1m","label":"最近一月"},{"value":"1y","label":"最近一年"}],"default":"1d"},"safe_search":{"description":"是否使用无r18的站点konachan.net，若是,则在路径前加上 `/sfw`，如`/konachan/sfw/post/popular_recent/1d`，若否则默认使用 konachan.com","default":"false"}},"radar":[{"source":["konachan.com/post","konachan.net/post"]}],"name":"Popular Recent Posts","maintainers":["magic-akari","NekoAria","sineeeee"],"description":"| 最近 24 小时    | 最近一周     | 最近一月    | 最近一年     |\n| ------- | -------- | ------- | -------- |\n| 1d | 1w | 1m | 1y |","features":{"nsfw":true},"location":"post.ts","heat":1183,"topFeeds":[]}' :test='{"code":0}' />

| 最近 24 小时    | 最近一周     | 最近一月    | 最近一年     |
| ------- | -------- | ------- | -------- |
| 1d | 1w | 1m | 1y |

## Kemono <Site url="kemono.cr"/>

### Posts <Site url="kemono.cr" size="sm" />

<Route namespace="kemono" :data='{"path":"/:source?/:id?/:type?","categories":["anime","popular"],"example":"/kemono","parameters":{"source":"Source, see below, Posts by default","id":"User id, can be found in URL","type":"Content type: announcements or fancards"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false,"nsfw":true},"radar":[{"source":["kemono.cr/"],"target":""},{"source":["kemono.cr/:source/user/:id"],"target":"/:source/:id"},{"source":["kemono.cr/:source/user/:id/announcements"],"target":"/:source/:id/announcements"},{"source":["kemono.cr/:source/user/:id/fancards"],"target":"/:source/:id/fancards"}],"name":"Posts","maintainers":["nczitzk","AiraNadih"],"description":"Sources\n\n| Posts | Patreon | Pixiv Fanbox | Gumroad | SubscribeStar | DLsite | Discord | Fantia |\n| ----- | ------- | ------------ | ------- | ------------- | ------ | ------- | ------ |\n| posts | patreon | fanbox       | gumroad | subscribestar | dlsite | discord | fantia |\n\n::: tip\n  When `posts` is selected as the value of the parameter **source**, the parameter **id** does not take effect.\n  There is an optinal parameter **limit** which controls the number of posts to fetch, default value is 25.\n  \n  Support for announcements and fancards:\n  - Use `/:source/:id/announcements` to get announcements\n  - Use `/:source/:id/fancards` to get fancards\n:::","location":"index.ts","heat":1151,"topFeeds":[]}' :test='{"code":0}' />

Sources

| Posts | Patreon | Pixiv Fanbox | Gumroad | SubscribeStar | DLsite | Discord | Fantia |
| ----- | ------- | ------------ | ------- | ------------- | ------ | ------- | ------ |
| posts | patreon | fanbox       | gumroad | subscribestar | dlsite | discord | fantia |

::: tip
  When `posts` is selected as the value of the parameter **source**, the parameter **id** does not take effect.
  There is an optinal parameter **limit** which controls the number of posts to fetch, default value is 25.
  
  Support for announcements and fancards:
  - Use `/:source/:id/announcements` to get announcements
  - Use `/:source/:id/fancards` to get fancards
:::

## 巴哈姆特電玩資訊站 <Site url="acg.gamer.com.tw"/>

### GNN 新聞 <Site url="acg.gamer.com.tw" size="sm" />

<Route namespace="gamer" :data='{"path":"/gnn/:category?","categories":["anime","popular"],"view":0,"example":"/gamer/gnn/1","parameters":{"category":{"description":"版塊","options":[{"value":"1","label":"PC"},{"value":"3","label":"TV 掌機"},{"value":"4","label":"手機遊戲"},{"value":"5","label":"動漫畫"},{"value":"9","label":"主題報導"},{"value":"11","label":"活動展覽"},{"value":"13","label":"電競"},{"value":"ns","label":"Switch"},{"value":"ps5","label":"PS5"},{"value":"ps4","label":"PS4"},{"value":"xbone","label":"XboxOne"},{"value":"xbsx","label":"XboxSX"},{"value":"pc","label":"PC 單機"},{"value":"olg","label":"PC 線上"},{"value":"ios","label":"iOS"},{"value":"android","label":"Android"},{"value":"web","label":"Web"},{"value":"comic","label":"漫畫"},{"value":"anime","label":"動畫"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"GNN 新聞","maintainers":["Arracc","ladeng07","pseudoyu"],"description":"缺省為首頁","location":"gnn-index.ts","heat":1137,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 852)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

缺省為首頁

## 同花顺财经 <Site url="10jqka.com.cn"/>

### 7×24小时要闻直播 <Site url="news.10jqka.com.cn" size="sm" />

<Route namespace="10jqka" :data='{"path":"/realtimenews/:tag?","name":"7×24小时要闻直播","url":"news.10jqka.com.cn","maintainers":["nczitzk"],"example":"/10jqka/realtimenews","parameters":{"tag":"标签，默认为全部"},"description":"::: tip\n  若订阅 [7×24小时要闻直播](https://news.10jqka.com.cn/realtimenews.html) 的 `公告` 标签。将 `公告` 作为标签参数填入，此时路由为 [`/10jqka/realtimenews/公告`](https://rsshub.app/10jqka/realtimenews/公告)。\n  \n  若订阅 [7×24小时要闻直播](https://news.10jqka.com.cn/realtimenews.html) 的 `公告` 和 `A股` 标签。将 `公告,A股` 作为标签参数填入，此时路由为 [`/10jqka/realtimenews/公告,A股`](https://rsshub.app/10jqka/realtimenews/公告,A股)。\n:::\n\n| 全部 | 重要 | A股 | 港股 | 美股 | 机会 | 异动 | 公告 |\n| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |\n    ","categories":["finance","popular"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"title":"全部","source":["news.10jqka.com.cn/realtimenews.html"],"target":"/realtimenews/全部"},{"title":"重要","source":["news.10jqka.com.cn/realtimenews.html"],"target":"/realtimenews/重要"},{"title":"A股","source":["news.10jqka.com.cn/realtimenews.html"],"target":"/realtimenews/A股"},{"title":"港股","source":["news.10jqka.com.cn/realtimenews.html"],"target":"/realtimenews/港股"},{"title":"美股","source":["news.10jqka.com.cn/realtimenews.html"],"target":"/realtimenews/美股"},{"title":"机会","source":["news.10jqka.com.cn/realtimenews.html"],"target":"/realtimenews/机会"},{"title":"异动","source":["news.10jqka.com.cn/realtimenews.html"],"target":"/realtimenews/异动"},{"title":"公告","source":["news.10jqka.com.cn/realtimenews.html"],"target":"/realtimenews/公告"}],"location":"realtimenews.ts","heat":1132,"topFeeds":[]}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:44:18)\n    at listOnTimeout (node:internal/timers:588:17)\n    at processTimers (node:internal/timers:523:7)"}' />

::: tip
  若订阅 [7×24小时要闻直播](https://news.10jqka.com.cn/realtimenews.html) 的 `公告` 标签。将 `公告` 作为标签参数填入，此时路由为 [`/10jqka/realtimenews/公告`](https://rsshub.app/10jqka/realtimenews/公告)。
  
  若订阅 [7×24小时要闻直播](https://news.10jqka.com.cn/realtimenews.html) 的 `公告` 和 `A股` 标签。将 `公告,A股` 作为标签参数填入，此时路由为 [`/10jqka/realtimenews/公告,A股`](https://rsshub.app/10jqka/realtimenews/公告,A股)。
:::

| 全部 | 重要 | A股 | 港股 | 美股 | 机会 | 异动 | 公告 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
    

## 东西智库 <Site url="dx2025.com"/>

### 分类 <Site url="dx2025.com" size="sm" />

<Route namespace="dx2025" :data='{"path":"/:type?/:category?","categories":["new-media","popular"],"example":"/dx2025","parameters":{"type":"内容类别，见下表，默认为空","category":"行业分类，见下表，默认为空"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"分类","maintainers":["nczitzk"],"description":"内容类别\n\n| 产业观察             | 行业报告         | 政策   | 数据 |\n| -------------------- | ---------------- | ------ | ---- |\n| industry-observation | industry-reports | policy | data |\n\n  行业分类\n\n| 行业                 | 行业名称                                                          |\n| -------------------- | ----------------------------------------------------------------- |\n| 新一代信息技术       | next-generation-information-technology-industry-reports           |\n| 高档数控机床和机器人 | high-grade-cnc-machine-tools-and-robots-industry-reports          |\n| 航空航天装备         | aerospace-equipment-industry-reports                              |\n| 海工装备及高技术船舶 | marine-engineering-equipment-and-high-tech-ships-industry-reports |\n| 先进轨道交通装备     | advanced-rail-transportation-equipment-industry-reports           |\n| 节能与新能源汽车     | energy-saving-and-new-energy-vehicles-industry-reports            |\n| 电力装备             | electric-equipment-industry-reports                               |\n| 农机装备             | agricultural-machinery-equipment-industry-reports                 |\n| 新材料               | new-material-industry-reports                                     |\n| 生物医药及医疗器械   | biomedicine-and-medical-devices-industry-reports                  |\n| 现代服务业           | modern-service-industry-industry-reports                          |\n| 制造业人才           | manufacturing-talent-industry-reports                             |","location":"index.ts","heat":1120,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 709)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

内容类别

| 产业观察             | 行业报告         | 政策   | 数据 |
| -------------------- | ---------------- | ------ | ---- |
| industry-observation | industry-reports | policy | data |

  行业分类

| 行业                 | 行业名称                                                          |
| -------------------- | ----------------------------------------------------------------- |
| 新一代信息技术       | next-generation-information-technology-industry-reports           |
| 高档数控机床和机器人 | high-grade-cnc-machine-tools-and-robots-industry-reports          |
| 航空航天装备         | aerospace-equipment-industry-reports                              |
| 海工装备及高技术船舶 | marine-engineering-equipment-and-high-tech-ships-industry-reports |
| 先进轨道交通装备     | advanced-rail-transportation-equipment-industry-reports           |
| 节能与新能源汽车     | energy-saving-and-new-energy-vehicles-industry-reports            |
| 电力装备             | electric-equipment-industry-reports                               |
| 农机装备             | agricultural-machinery-equipment-industry-reports                 |
| 新材料               | new-material-industry-reports                                     |
| 生物医药及医疗器械   | biomedicine-and-medical-devices-industry-reports                  |
| 现代服务业           | modern-service-industry-industry-reports                          |
| 制造业人才           | manufacturing-talent-industry-reports                             |

## 阿里研究院 <Site url="aliresearch.com"/>

### 资讯 <Site url="aliresearch.com/cn/information" size="sm" />

<Route namespace="aliresearch" :data='{"path":"/information/:type?","categories":["new-media","popular"],"example":"/aliresearch/information","parameters":{"type":"类型，见下表，默认为新闻"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["aliresearch.com/cn/information","aliresearch.com/"],"target":"/information"}],"name":"资讯","maintainers":["nczitzk"],"url":"aliresearch.com/cn/information","description":"| 新闻 | 观点 | 案例 |\n| ---- | ---- | ---- |","location":"information.ts","heat":1092,"topFeeds":[]}' :test='{"code":0}' />

| 新闻 | 观点 | 案例 |
| ---- | ---- | ---- |

## CSDN <Site url="blog.csdn.net"/>

### User Feed <Site url="blog.csdn.net" size="sm" />

<Route namespace="csdn" :data='{"path":"/blog/:user","categories":["blog","popular"],"example":"/csdn/blog/csdngeeknews","parameters":{"user":"`user` is the username of a CSDN blog which can be found in the url of the home page"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["blog.csdn.net/:user"]}],"name":"User Feed","maintainers":["Jkker"],"location":"blog.ts","heat":1092,"topFeeds":[]}' :test='{"code":0}' />

## DeepMind <Site url="deepmind.com"/>

### Blog <Site url="deepmind.com/blog" size="sm" />

<Route namespace="deepmind" :data='{"path":"/blog","categories":["new-media","popular"],"example":"/deepmind/blog","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["deepmind.com/blog","deepmind.com/"]}],"name":"Blog","maintainers":["nczitzk","TonyRL"],"url":"deepmind.com/blog","location":"blog.ts","heat":1062,"topFeeds":[]}' :test='{"code":0}' />

