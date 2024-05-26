# 🌟 Popular

## AP News <Site url="apnews.com"/>

### RSS <Site url="apnews.com" size="sm" />

<Route namespace="apnews" :data='{"path":"/rss/:rss?","categories":["traditional-media","popular"],"example":"/apnews/rss/business","parameters":{"rss":"Route name from the first segment of the corresponding site, or `index` for the front page(default)."},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["apnews.com/:rss"],"target":"/rss/:rss"}],"name":"RSS","maintainers":["zoenglinghou","mjysci","TonyRL"],"location":"rss.ts"}' :test='{"code":0}' />

## Bilibili <Site url="www.bilibili.com"/>

### UP 主动态 <Site url="www.bilibili.com" size="sm" />

<Route namespace="bilibili" :data='{"path":"/user/dynamic/:uid/:routeParams?","categories":["social-media","popular"],"example":"/bilibili/user/dynamic/2267573","parameters":{"uid":"用户 id, 可在 UP 主主页中找到","routeParams":"额外参数；请参阅以下说明和表格"},"features":{"requireConfig":[{"name":"BILIBILI_COOKIE_*","optional":true,"description":"如果没有此配置，那么必须开启 puppeteer 支持；BILIBILI_COOKIE_{uid}: 用于用户关注动态系列路由，对应 uid 的 b 站用户登录后的 Cookie 值，`{uid}` 替换为 uid，如 `BILIBILI_COOKIE_2267573`，获取方式：\n1.  打开 [https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new?uid=0&type=8](https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new?uid=0&type=8)\n2.  打开控制台，切换到 Network 面板，刷新\n3.  点击 dynamic_new 请求，找到 Cookie\n4.  视频和专栏，UP 主粉丝及关注只要求 `SESSDATA` 字段，动态需复制整段 Cookie"}],"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["space.bilibili.com/:uid"],"target":"/user/dynamic/:uid"}],"name":"UP 主动态","maintainers":["DIYgod","zytomorrow","CaoMeiYouRen","JimenezLi"],"description":"| 键           | 含义                              | 接受的值       | 默认值 |\n  | ------------ | --------------------------------- | -------------- | ------ |\n  | showEmoji    | 显示或隐藏表情图片                | 0/1/true/false | false  |\n  | disableEmbed | 关闭内嵌视频                      | 0/1/true/false | false  |\n  | useAvid      | 视频链接使用 AV 号 (默认为 BV 号) | 0/1/true/false | false  |\n  | directLink   | 使用内容直链                      | 0/1/true/false | false  |\n\n  用例：`/bilibili/user/dynamic/2267573/showEmoji=1&disableEmbed=1&useAvid=1`\n\n  :::tip 动态的专栏显示全文\n  动态的专栏显示全文请使用通用参数里的 `mode=fulltext`\n\n  举例: bilibili 专栏全文输出 /bilibili/user/dynamic/2267573/?mode=fulltext\n  :::","location":"dynamic.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 键           | 含义                              | 接受的值       | 默认值 |
  | ------------ | --------------------------------- | -------------- | ------ |
  | showEmoji    | 显示或隐藏表情图片                | 0/1/true/false | false  |
  | disableEmbed | 关闭内嵌视频                      | 0/1/true/false | false  |
  | useAvid      | 视频链接使用 AV 号 (默认为 BV 号) | 0/1/true/false | false  |
  | directLink   | 使用内容直链                      | 0/1/true/false | false  |

  用例：`/bilibili/user/dynamic/2267573/showEmoji=1&disableEmbed=1&useAvid=1`

  :::tip 动态的专栏显示全文
  动态的专栏显示全文请使用通用参数里的 `mode=fulltext`

  举例: bilibili 专栏全文输出 /bilibili/user/dynamic/2267573/?mode=fulltext
  :::

### UP 主投稿 <Site url="www.bilibili.com" size="sm" />

<Route namespace="bilibili" :data='{"path":"/user/video/:uid/:disableEmbed?","categories":["social-media","popular"],"example":"/bilibili/user/video/2267573","parameters":{"uid":"用户 id, 可在 UP 主主页中找到","disableEmbed":"默认为开启内嵌视频, 任意值为关闭"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["space.bilibili.com/:uid"],"target":"/user/video/:uid"}],"name":"UP 主投稿","maintainers":["DIYgod"],"description":":::tip 动态的专栏显示全文\n  可以使用 [UP 主动态](#bilibili-up-zhu-dong-tai)路由作为代替绕过反爬限制\n  :::","location":"video.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

:::tip 动态的专栏显示全文
  可以使用 [UP 主动态](#bilibili-up-zhu-dong-tai)路由作为代替绕过反爬限制
  :::

### 排行榜 <Site url="www.bilibili.com" size="sm" />

<Route namespace="bilibili" :data='{"path":"/ranking/:rid?/:day?/:arc_type?/:disableEmbed?","name":"排行榜","maintainers":["DIYgod"],"categories":["social-media","popular"],"example":"/bilibili/ranking/0/3/1","parameters":{"rid":"排行榜分区 id, 默认 0","day":"时间跨度, 可为 1 3 7 30","arc_type":"投稿时间, 可为 0(全部投稿) 1(近期投稿) , 默认 1","disableEmbed":"默认为开启内嵌视频, 任意值为关闭"},"description":"| 全站 | 动画 | 国创相关 | 音乐 | 舞蹈 | 游戏 | 科技 | 数码 | 生活 | 鬼畜 | 时尚 | 娱乐 | 影视 |\n| ---- | ---- | -------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |\n| 0    | 1    | 168      | 3    | 129  | 4    | 36   | 188  | 160  | 119  | 155  | 5    | 181  |","location":"ranking.ts"}' :test='{"code":0}' />

| 全站 | 动画 | 国创相关 | 音乐 | 舞蹈 | 游戏 | 科技 | 数码 | 生活 | 鬼畜 | 时尚 | 娱乐 | 影视 |
| ---- | ---- | -------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 0    | 1    | 168      | 3    | 129  | 4    | 36   | 188  | 160  | 119  | 155  | 5    | 181  |

## Docker Hub <Site url="hub.docker.com"/>

### Image New Build <Site url="hub.docker.com" size="sm" />

<Route namespace="dockerhub" :data='{"path":"/build/:owner/:image/:tag?","categories":["program-update","popular"],"example":"/dockerhub/build/wangqiru/ttrss","parameters":{"owner":"Image owner","image":"Image name","tag":"Image tag，default to latest"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Image New Build","maintainers":["HenryQW"],"description":":::warning\n  The owner of the official image fills in the library, for example: [https://rsshub.app/dockerhub/build/library/mysql](https://rsshub.app/dockerhub/build/library/mysql)\n  :::","location":"build.ts"}' :test='{"code":0}' />

:::warning
  The owner of the official image fills in the library, for example: [https://rsshub.app/dockerhub/build/library/mysql](https://rsshub.app/dockerhub/build/library/mysql)
  :::

## GitHub <Site url="github.com"/>

:::tip
GitHub provides some official RSS feeds:

-   Repo releases: `https://github.com/:owner/:repo/releases.atom`
-   Repo commits: `https://github.com/:owner/:repo/commits.atom`
-   User activities: `https://github.com/:user.atom`
-   Private feed: `https://github.com/:user.private.atom?token=:secret` (You can find **Subscribe to your news feed** in [dashboard](https://github.com) page after login)
-   Wiki history: `https://github.com/:owner/:repo/wiki.atom`
:::

### Repo Issues <Site url="github.com" size="sm" />

<Route namespace="github" :data='{"path":"/issue/:user/:repo/:state?/:labels?","categories":["programming","popular"],"example":"/github/issue/vuejs/core/all/wontfix","parameters":{"user":"GitHub username","repo":"GitHub repo name","state":"the state of the issues. Can be either `open`, `closed`, or `all`. Default: `open`.","labels":"a list of comma separated label names"},"radar":[{"source":["github.com/:user/:repo/issues","github.com/:user/:repo/issues/:id","github.com/:user/:repo"],"target":"/issue/:user/:repo"}],"name":"Repo Issues","maintainers":["HenryQW","AndreyMZ"],"location":"issue.ts"}' :test='{"code":0}' />

## Instagram <Site url="www.instagram.com"/>

:::tip
It's highly recommended to deploy with Redis cache enabled.
:::

### User Profile / Hashtag - Private API <Site url="www.instagram.com" size="sm" />

<Route namespace="instagram" :data='{"path":"/:category/:key","categories":["social-media","popular"],"example":"/instagram/user/stefaniejoosten","parameters":{"category":"Feed category, see table above","key":"Username / Hashtag name"},"features":{"requireConfig":[{"name":"IG_PROXY","optional":true,"description":""}],"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User Profile / Hashtag - Private API","maintainers":["oppilate","DIYgod"],"description":":::warning\nDue to [Instagram Private API](https://github.com/dilame/instagram-private-api) restrictions, you have to setup your credentials on the server. 2FA is not supported. See [deployment guide](https://docs.rsshub.app/deploy/) for more.\n:::","location":"private-api/index.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

:::warning
Due to [Instagram Private API](https://github.com/dilame/instagram-private-api) restrictions, you have to setup your credentials on the server. 2FA is not supported. See [deployment guide](https://docs.rsshub.app/deploy/) for more.
:::

## JavBus <Site url="www.javbus.com"/>

:::warning
Requests from non-Asia areas will be redirected to login page.
:::

:::tip Language
You can change the language of each route to the languages listed below.

| English | 日本语 | 한국의 | 中文             |
| ------- | ------ | ------ | ---------------- |
| en      | ja     | ko     | (leave it empty) |
:::

:::tip
JavBus has multiple backup domains, these routes use default domain `https://javbus.com`. If the domain is unreachable, you can add `?domain=<domain>` to the end of the route to specify the domain to visit. Let say you want to use the backup domain `https://javsee.icu`, you can add `?domain=javsee.icu` to the end of the route, then the route will be [`/javbus/en?domain=javsee.icu`](https://rsshub.app/javbus?domain=javsee.icu)

**Note**: **Western** has different domain than the main site, the backup domains are also different. The default domain is `https://javbus.org` and you can add `?western_domain=<domain>` to the end of the route to specify the domain to visit. Let say you want to use the backup domain `https://javsee.one`, you can add `?western_domain=javsee.one` to the end of the route, then the route will be [`/javbus/western/en?western_domain=javsee.one`](https://rsshub.app/javbus/western?western_domain=javsee.one)
:::

### Works <Site url="www.javbus.com" size="sm" />

<Route namespace="javbus" :data='{"path":"/:path{.+}?","radar":[{"source":["www.javbus.com/:path*"],"target":"/:path"}],"name":"Works","maintainers":["MegrezZhu","CoderTonyChan","nczitzk","Felix2yu"],"categories":["multimedia","popular"],"url":"www.javbus.com","location":"index.ts"}' :test='undefined' />

## Lofter <Site url="www.lofter.com"/>

### User <Site url="www.lofter.com" size="sm" />

<Route namespace="lofter" :data='{"path":"/user/:name?","categories":["social-media","popular"],"example":"/lofter/user/i","parameters":{"name":"Lofter user name, can be found in the URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User","maintainers":["hondajojo","nczitzk","LucunJi"],"location":"user.ts"}' :test='{"code":0}' />

## pixiv <Site url="www.pixiv.net"/>

### Keyword <Site url="www.pixiv.net" size="sm" />

<Route namespace="pixiv" :data='{"path":"/search/:keyword/:order?/:mode?","categories":["social-media","popular"],"example":"/pixiv/search/Nezuko/popular/2","parameters":{"keyword":"keyword","order":"rank mode, empty or other for time order, popular for popular order","mode":"filte R18 content"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Keyword","maintainers":["DIYgod"],"description":"| only not R18 | only R18 | no filter      |\n  | ------------ | -------- | -------------- |\n  | safe         | r18      | empty or other |","location":"search.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| only not R18 | only R18 | no filter      |
  | ------------ | -------- | -------------- |
  | safe         | r18      | empty or other |

### Rankings <Site url="www.pixiv.net" size="sm" />

<Route namespace="pixiv" :data='{"path":"/ranking/:mode/:date?","categories":["social-media","popular"],"example":"/pixiv/ranking/week","parameters":{"mode":"rank type","date":"format: `2018-4-25`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Rankings","maintainers":["EYHN"],"description":"| daily rank | weekly rank | monthly rank | male rank | female rank | AI-generated work Rankings | original rank  | rookie user rank |\n  | ---------- | ----------- | ------------ | --------- | ----------- | -------------------------- | -------------- | ---------------- |\n  | day        | week        | month        | day_male | day_female | day_ai                    | week_original | week_rookie     |\n\n  | R-18 daily rank | R-18 AI-generated work | R-18 male rank | R-18 female rank | R-18 weekly rank | R-18G rank |\n  | --------------- | ---------------------- | -------------- | ---------------- | ---------------- | ---------- |\n  | day_r18        | day_r18_ai           | day_male_r18 | day_female_r18 | week_r18        | week_r18g |","location":"ranking.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| daily rank | weekly rank | monthly rank | male rank | female rank | AI-generated work Rankings | original rank  | rookie user rank |
  | ---------- | ----------- | ------------ | --------- | ----------- | -------------------------- | -------------- | ---------------- |
  | day        | week        | month        | day_male | day_female | day_ai                    | week_original | week_rookie     |

  | R-18 daily rank | R-18 AI-generated work | R-18 male rank | R-18 female rank | R-18 weekly rank | R-18G rank |
  | --------------- | ---------------------- | -------------- | ---------------- | ---------------- | ---------- |
  | day_r18        | day_r18_ai           | day_male_r18 | day_female_r18 | week_r18        | week_r18g |

### User Activity <Site url="www.pixiv.net" size="sm" />

<Route namespace="pixiv" :data='{"path":"/user/:id","categories":["social-media","popular"],"example":"/pixiv/user/15288095","parameters":{"id":"user id, available in user&#39;s homepage URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.pixiv.net/users/:id"]}],"name":"User Activity","maintainers":["DIYgod"],"location":"user.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

## RSSHub <Site url="docs.rsshub.app"/>

### New routes <Site url="docs.rsshub.app/*" size="sm" />

<Route namespace="rsshub" :data='{"path":"/routes/:lang?","categories":["program-update","popular"],"example":"/rsshub/routes/en","parameters":{"lang":"Language, `zh` means Chinese docs, other values or null means English docs, `en` by default"},"radar":[{"source":["docs.rsshub.app/*"],"target":"/routes"}],"name":"New routes","maintainers":["DIYgod"],"url":"docs.rsshub.app/*","location":"routes.ts"}' :test='{"code":1,"message":"expected [ …(131) ] to not include &#39;douban[\"/movie/playing\",\"/movie/playi…&#39;"}' />

## Telegram <Site url="t.me"/>

### Channel <Site url="t.me" size="sm" />

<Route namespace="telegram" :data='{"path":"/channel/:username/:routeParams?","categories":["social-media","popular"],"example":"/telegram/channel/awesomeDIYgod/searchQuery=twitter","parameters":{"username":"channel username","routeParams":"extra parameters, see the table below"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["t.me/s/:username"],"target":"/channel/:username"}],"name":"Channel","maintainers":["DIYgod","Rongronggg9"],"description":"\n  | Key                    | Description                                                           | Accepts                                            | Defaults to  |\n  | ---------------------- | --------------------------------------------------------------------- | -------------------------------------------------- | ------------ |\n  | showLinkPreview        | Show the link preview from Telegram                                   | 0/1/true/false                                     | true         |\n  | showViaBot             | For messages sent via bot, show the bot                               | 0/1/true/false                                     | true         |\n  | showReplyTo            | For reply messages, show the target of the reply                      | 0/1/true/false                                     | true         |\n  | showFwdFrom            | For forwarded messages, show the forwarding source                    | 0/1/true/false                                     | true         |\n  | showFwdFromAuthor      | For forwarded messages, show the author of the forwarding source      | 0/1/true/false                                     | true         |\n  | showInlineButtons      | Show inline buttons                                                   | 0/1/true/false                                     | false        |\n  | showMediaTagInTitle    | Show media tags in the title                                          | 0/1/true/false                                     | true         |\n  | showMediaTagAsEmoji    | Show media tags as emoji                                              | 0/1/true/false                                     | true         |\n  | showHashtagAsHyperlink | Show hashtags as hyperlinks (`https://t.me/s/channel?q=%23hashtag`) | 0/1/true/false                                     | true         |\n  | includeFwd             | Include forwarded messages                                            | 0/1/true/false                                     | true         |\n  | includeReply           | Include reply messages                                                | 0/1/true/false                                     | true         |\n  | includeServiceMsg      | Include service messages (e.g. message pinned, channel photo updated) | 0/1/true/false                                     | true         |\n  | includeUnsupportedMsg  | Include messages unsupported by t.me                                  | 0/1/true/false                                     | false        |\n  | searchQuery            | search query                                                          | keywords; replace `#hashtag` with `%23hashtag` | (no keyword) |\n\n  Specify different option values than default values can meet different needs, URL\n\n  ```\n  https://rsshub.app/telegram/channel/NewlearnerChannel/showLinkPreview=0&showViaBot=0&showReplyTo=0&showFwdFrom=0&showFwdFromAuthor=0&showInlineButtons=0&showMediaTagInTitle=1&showMediaTagAsEmoji=1&includeFwd=0&includeReply=1&includeServiceMsg=0&includeUnsupportedMsg=0\n  ```\n\n  generates an RSS without any link previews and annoying metadata, with emoji media tags in the title, without forwarded messages (but with reply messages), and without messages you don&#39;t care about (service messages and unsupported messages), for people who prefer pure subscriptions.\n\n  :::tip\n  For backward compatibility reasons, invalid `routeParams` will be treated as `searchQuery` .\n\n  Due to Telegram restrictions, some channels involving pornography, copyright, and politics cannot be subscribed. You can confirm by visiting `https://t.me/s/:username`.\n  :::","location":"channel.ts"}' :test='{"code":0}' />


  | Key                    | Description                                                           | Accepts                                            | Defaults to  |
  | ---------------------- | --------------------------------------------------------------------- | -------------------------------------------------- | ------------ |
  | showLinkPreview        | Show the link preview from Telegram                                   | 0/1/true/false                                     | true         |
  | showViaBot             | For messages sent via bot, show the bot                               | 0/1/true/false                                     | true         |
  | showReplyTo            | For reply messages, show the target of the reply                      | 0/1/true/false                                     | true         |
  | showFwdFrom            | For forwarded messages, show the forwarding source                    | 0/1/true/false                                     | true         |
  | showFwdFromAuthor      | For forwarded messages, show the author of the forwarding source      | 0/1/true/false                                     | true         |
  | showInlineButtons      | Show inline buttons                                                   | 0/1/true/false                                     | false        |
  | showMediaTagInTitle    | Show media tags in the title                                          | 0/1/true/false                                     | true         |
  | showMediaTagAsEmoji    | Show media tags as emoji                                              | 0/1/true/false                                     | true         |
  | showHashtagAsHyperlink | Show hashtags as hyperlinks (`https://t.me/s/channel?q=%23hashtag`) | 0/1/true/false                                     | true         |
  | includeFwd             | Include forwarded messages                                            | 0/1/true/false                                     | true         |
  | includeReply           | Include reply messages                                                | 0/1/true/false                                     | true         |
  | includeServiceMsg      | Include service messages (e.g. message pinned, channel photo updated) | 0/1/true/false                                     | true         |
  | includeUnsupportedMsg  | Include messages unsupported by t.me                                  | 0/1/true/false                                     | false        |
  | searchQuery            | search query                                                          | keywords; replace `#hashtag` with `%23hashtag` | (no keyword) |

  Specify different option values than default values can meet different needs, URL

  ```
  https://rsshub.app/telegram/channel/NewlearnerChannel/showLinkPreview=0&showViaBot=0&showReplyTo=0&showFwdFrom=0&showFwdFromAuthor=0&showInlineButtons=0&showMediaTagInTitle=1&showMediaTagAsEmoji=1&includeFwd=0&includeReply=1&includeServiceMsg=0&includeUnsupportedMsg=0
  ```

  generates an RSS without any link previews and annoying metadata, with emoji media tags in the title, without forwarded messages (but with reply messages), and without messages you don't care about (service messages and unsupported messages), for people who prefer pure subscriptions.

  :::tip
  For backward compatibility reasons, invalid `routeParams` will be treated as `searchQuery` .

  Due to Telegram restrictions, some channels involving pornography, copyright, and politics cannot be subscribed. You can confirm by visiting `https://t.me/s/:username`.
  :::

## X (Twitter) <Site url="x.com"/>

Specify options (in the format of query string) in parameter `routeParams` to control some extra features for Tweets

| Key                            | Description                                                                                                                          | Accepts                | Defaults to                               |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- | ----------------------------------------- |
| `readable`                     | Enable readable layout                                                                                                               | `0`/`1`/`true`/`false` | `false`                                   |
| `authorNameBold`               | Display author name in bold                                                                                                          | `0`/`1`/`true`/`false` | `false`                                   |
| `showAuthorInTitle`            | Show author name in title                                                                                                            | `0`/`1`/`true`/`false` | `false` (`true` in `/twitter/followings`) |
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
| `excludeReplies`               | Exclude replies, only available in `/twitter/user`                                                                                   | `0`/`1`/`true`/`false` | `false`                                   |
| `includeRts`                   | Include retweets, only available in `/twitter/user`                                                                                  | `0`/`1`/`true`/`false` | `true`                                    |
| `forceWebApi`                  | Force using Web API even if Developer API is configured, only available in `/twitter/user` and `/twitter/keyword`                    | `0`/`1`/`true`/`false` | `false`                                   |
| `count`                        | `count` parameter passed to Twitter API, only available in `/twitter/user`                                                           | Unspecified/Integer    | Unspecified                               |

Specify different option values than default values to improve readability. The URL

```
https://rsshub.app/twitter/user/durov/readable=1&authorNameBold=1&showAuthorInTitle=1&showAuthorInDesc=1&showQuotedAuthorAvatarInDesc=1&showAuthorAvatarInDesc=1&showEmojiForRetweetAndReply=1&showRetweetTextInTitle=0&addLinkForPics=1&showTimestampInDescription=1&showQuotedInTitle=1&heightOfPics=150
```

generates

<img loading="lazy" src="/img/readable-twitter.png" alt="Readable Twitter RSS of Durov" />

Currently supports two authentication methods:

- Using `TWITTER_COOKIE` (recommended): Configure the cookies of logged-in Twitter Web, at least including the fields auth_token and ct0. RSSHub will use this information to directly access Twitter's web API to obtain data.

- Using `TWITTER_USERNAME` `TWITTER_PASSWORD` and `TWITTER_AUTHENTICATION_SECRET`: Configure the Twitter username and password. RSSHub will use this information to log in to Twitter and obtain data using the mobile API. Please note that if you have not logged in with the current IP address before, it is easy to trigger Twitter's risk control mechanism.


### Keyword <Site url="x.com" size="sm" />

<Route namespace="twitter" :data='{"path":"/keyword/:keyword/:routeParams?","categories":["social-media","popular"],"example":"/twitter/keyword/RSSHub","parameters":{"keyword":"keyword","routeParams":"extra parameters, see the table above"},"features":{"requireConfig":[{"name":"TWITTER_USERNAME","description":"Please see above for details."},{"name":"TWITTER_PASSWORD","description":"Please see above for details."},{"name":"TWITTER_COOKIE","description":"Please see above for details."}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Keyword","maintainers":["DIYgod","yindaheng98","Rongronggg9"],"radar":[{"source":["x.com/search"]}],"location":"keyword.ts"}' :test='undefined' />

### User media <Site url="x.com" size="sm" />

<Route namespace="twitter" :data='{"path":"/media/:id/:routeParams?","categories":["social-media","popular"],"example":"/twitter/media/DIYgod","parameters":{"id":"username; in particular, if starts with `+`, it will be recognized as a [unique ID](https://github.com/DIYgod/RSSHub/issues/12221), e.g. `+44196397`","routeParams":"extra parameters, see the table above."},"features":{"requireConfig":[{"name":"TWITTER_USERNAME","description":"Please see above for details."},{"name":"TWITTER_PASSWORD","description":"Please see above for details."},{"name":"TWITTER_COOKIE","description":"Please see above for details."}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User media","maintainers":["DIYgod","yindaheng98","Rongronggg9"],"radar":[{"source":["x.com/:id/media"],"target":"/media/:id"}],"location":"media.ts"}' :test='undefined' />

### User timeline <Site url="x.com" size="sm" />

<Route namespace="twitter" :data='{"path":"/user/:id/:routeParams?","categories":["social-media","popular"],"example":"/twitter/user/DIYgod","parameters":{"id":"username; in particular, if starts with `+`, it will be recognized as a [unique ID](https://github.com/DIYgod/RSSHub/issues/12221), e.g. `+44196397`","routeParams":"extra parameters, see the table above; particularly when `routeParams=exclude_replies`, replies are excluded; `routeParams=exclude_rts` excludes retweets,`routeParams=exclude_rts_replies` exclude replies and retweets; for default include all."},"features":{"requireConfig":[{"name":"TWITTER_USERNAME","description":"Please see above for details."},{"name":"TWITTER_PASSWORD","description":"Please see above for details."},{"name":"TWITTER_AUTHENTICATION_SECRET","description":"TOTP 2FA secret, please see above for details.","optional":true},{"name":"TWITTER_COOKIE","description":"Please see above for details."}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User timeline","maintainers":["DIYgod","yindaheng98","Rongronggg9"],"radar":[{"source":["x.com/:id"],"target":"/user/:id"}],"location":"user.ts"}' :test='undefined' />

## YouTube <Site url="youtube.com"/>

### Channel with username <Site url="youtube.com" size="sm" />

<Route namespace="youtube" :data='{"path":"/user/:username/:embed?","categories":["social-media","popular"],"example":"/youtube/user/@JFlaMusic","parameters":{"username":"YouTuber username with @","embed":"Default to embed the video, set to any value to disable embedding"},"features":{"requireConfig":[{"name":"YOUTUBE_KEY","description":" YouTube API Key, support multiple keys, split them with `,`, [API Key application](https://console.developers.google.com/)"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.youtube.com/user/:username"],"target":"/user/:username"}],"name":"Channel with username","maintainers":["DIYgod"],"location":"user.ts"}' :test='undefined' />

## 豆瓣 <Site url="www.douban.com"/>

### 豆瓣小组 <Site url="www.douban.com" size="sm" />

<Route namespace="douban" :data='{"path":"/group/:groupid/:type?","categories":["social-media","popular"],"example":"/douban/group/648102","parameters":{"groupid":"豆瓣小组的 id","type":"缺省 最新，essence 最热，elite 精华"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.douban.com/group/:groupid"],"target":"/group/:groupid"}],"name":"豆瓣小组","maintainers":["DIYgod"],"location":"other/group.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## 即刻 <Site url="m.okjike.com"/>

### 圈子 <Site url="m.okjike.com" size="sm" />

<Route namespace="jike" :data='{"path":"/topic/:id/:showUid?","categories":["social-media","popular"],"example":"/jike/topic/556688fae4b00c57d9dd46ee","parameters":{"id":"圈子 id, 可在即刻 web 端圈子页或 APP 分享出来的圈子页 URL 中找到","showUid":"是否在内容中显示用户信息，设置为 1 则开启"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["web.okjike.com/topic/:id"],"target":"/topic/:id"}],"name":"圈子","maintainers":["DIYgod","prnake"],"location":"topic.ts"}' :test='{"code":0}' />

### 用户动态 <Site url="m.okjike.com" size="sm" />

<Route namespace="jike" :data='{"path":"/user/:id","categories":["social-media","popular"],"example":"/jike/user/3EE02BC9-C5B3-4209-8750-4ED1EE0F67BB","parameters":{"id":"用户 id, 可在即刻分享出来的单条动态页点击用户头像进入个人主页，然后在个人主页的 URL 中找到，或者在单条动态页使用 RSSHub Radar 插件"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["web.okjike.com/u/:uid"],"target":"/user/:uid"}],"name":"用户动态","maintainers":["DIYgod","prnake"],"location":"user.ts"}' :test='{"code":0}' />

## 色花堂 <Site url="sehuatang.net"/>

### 作者文章 <Site url="sehuatang.net" size="sm" />

<Route namespace="sehuatang" :data='{"path":"/user/:uid","categories":["multimedia","popular"],"example":"/sehuatang/user/411096","parameters":{"uid":"用户 uid, 可在用户主页 URL 中找到"},"features":{"requireConfig":[{"name":"SEHUATANG_COOKIE","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"作者文章","maintainers":["JamYiz"],"location":"user.ts"}' :test='undefined' />

## 微博绿洲 <Site url="weibo.com"/>

:::warning
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

指定更多与默认值不同的参数选项可以改善 RSS 的可读性，如

[https://rsshub.app/weibo/user/1642909335/readable=1&authorNameBold=1&showAuthorInTitle=1&showAuthorInDesc=1&showAuthorAvatarInDesc=1&showEmojiForRetweet=1&showRetweetTextInTitle=0&addLinkForPics=1&showTimestampInDescription=1&showTimestampInDescription=1&heightOfPics=150](https://rsshub.app/weibo/user/1642909335/readable=1&authorNameBold=1&showAuthorInTitle=1&showAuthorInDesc=1&showAuthorAvatarInDesc=1&showEmojiForRetweet=1&showRetweetTextInTitle=0&addLinkForPics=1&showTimestampInDescription=1&showTimestampInDescription=1&heightOfPics=150)

的效果为

<img loading="lazy" src="/img/readable-weibo.png" alt="微博小秘书的可读微博 RSS" />

### 博主 <Site url="weibo.com" size="sm" />

<Route namespace="weibo" :data='{"path":"/user/:uid/:routeParams?","categories":["social-media","popular"],"example":"/weibo/user/1195230310","parameters":{"uid":"用户 id, 博主主页打开控制台执行 `$CONFIG.oid` 获取","routeParams":"额外参数；请参阅上面的说明和表格；特别地，当 `routeParams=1` 时开启微博视频显示"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["m.weibo.cn/u/:uid","m.weibo.cn/profile/:uid"],"target":"/user/:uid"}],"name":"博主","maintainers":["DIYgod","iplusx","Rongronggg9"],"description":":::warning\n  部分博主仅登录可见，未提供 Cookie 的情况下不支持订阅，可以通过打开 `https://m.weibo.cn/u/:uid` 验证。如需要订阅该部分博主，可配置 Cookie 后订阅。\n\n  未提供 Cookie 的情况下偶尔会触发反爬限制，提供 Cookie 可缓解该情况。\n\n  微博用户 Cookie 的配置可参照部署文档\n  :::","location":"user.ts"}' :test='{"code":0}' />

:::warning
  部分博主仅登录可见，未提供 Cookie 的情况下不支持订阅，可以通过打开 `https://m.weibo.cn/u/:uid` 验证。如需要订阅该部分博主，可配置 Cookie 后订阅。

  未提供 Cookie 的情况下偶尔会触发反爬限制，提供 Cookie 可缓解该情况。

  微博用户 Cookie 的配置可参照部署文档
  :::

### 关键词 <Site url="weibo.com" size="sm" />

<Route namespace="weibo" :data='{"path":"/keyword/:keyword/:routeParams?","categories":["social-media","popular"],"example":"/weibo/keyword/DIYgod","parameters":{"keyword":"你想订阅的微博关键词","routeParams":"额外参数；请参阅上面的说明和表格"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"关键词","maintainers":["DIYgod","Rongronggg9"],"location":"keyword.ts"}' :test='{"code":0}' />

## 喜马拉雅 <Site url="ximalaya.com"/>

### 专辑 <Site url="ximalaya.com" size="sm" />

<Route namespace="ximalaya" :data='{"path":["/:type/:id/:all/:shownote?"],"categories":["multimedia","popular"],"example":"/ximalaya/album/299146","parameters":{"type":"专辑类型, 通常可以使用 `album`，可在对应专辑页面的 URL 中找到","id":"专辑 id, 可在对应专辑页面的 URL 中找到","all":"是否需要获取全部节目，填入 `1`、`true`、`all` 视为获取所有节目，填入其他则不获取。"},"features":{"requireConfig":[{"name":"XIMALAYA_TOKEN","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":true,"supportScihub":false},"name":"专辑","maintainers":["lengthmin","jjeejj","prnake"],"description":"目前喜马拉雅的 API 只能一集一集的获取各节目上的 ShowNote，会极大的占用系统资源，所以默认为不获取节目的 ShowNote。\n\n  :::warning\n  专辑类型即 url 中的分类拼音，使用通用分类 `album` 通常是可行的，专辑 id 是跟在**分类拼音**后的那个 id, 不要输成某集的 id 了\n\n  **付费内容需要配置好已购买账户的 token 才能收听，详情见部署页面的配置模块**\n  :::","location":"album.ts"}' :test='undefined' />

目前喜马拉雅的 API 只能一集一集的获取各节目上的 ShowNote，会极大的占用系统资源，所以默认为不获取节目的 ShowNote。

  :::warning
  专辑类型即 url 中的分类拼音，使用通用分类 `album` 通常是可行的，专辑 id 是跟在**分类拼音**后的那个 id, 不要输成某集的 id 了

  **付费内容需要配置好已购买账户的 token 才能收听，详情见部署页面的配置模块**
  :::

## 小宇宙 <Site url="xiaoyuzhoufm.com"/>

### 播客 <Site url="xiaoyuzhoufm.com/" size="sm" />

<Route namespace="xiaoyuzhou" :data='{"path":"/podcast/:id","categories":["multimedia","popular"],"example":"/xiaoyuzhou/podcast/6021f949a789fca4eff4492c","parameters":{"id":"播客id，可以在小宇宙播客的 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["xiaoyuzhoufm.com/podcast/:id"]}],"name":"播客","maintainers":["hondajojo","jtsang4"],"url":"xiaoyuzhoufm.com/","location":"podcast.ts"}' :test='{"code":0}' />

## 知乎 <Site url="www.zhihu.com"/>

### 用户动态 <Site url="www.zhihu.com" size="sm" />

<Route namespace="zhihu" :data='{"path":"/people/activities/:id","categories":["social-media","popular"],"example":"/zhihu/people/activities/diygod","parameters":{"id":"作者 id，可在用户主页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.zhihu.com/people/:id"]}],"name":"用户动态","maintainers":["DIYgod"],"location":"activities.ts"}' :test='{"code":0}' />

