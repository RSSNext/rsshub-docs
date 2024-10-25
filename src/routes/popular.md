# 🌟 Popular

## 500px 摄影社区 <Site url="500px.com.cn"/>

### 部落影集 <Site url="500px.com.cn" size="sm" />

<Route namespace="500px" :data='{"path":"/tribe/set/:id","categories":["picture","popular"],"view":2,"example":"/500px/tribe/set/f5de0b8aa6d54ec486f5e79616418001","parameters":{"id":"部落 ID"},"name":"部落影集","maintainers":["TonyRL"],"location":"tribe-set.ts"}' :test='undefined' />

## AcFun <Site url="www.acfun.cn"/>

### 番剧 <Site url="www.acfun.cn" size="sm" />

<Route namespace="acfun" :data='{"path":"/bangumi/:id","categories":["anime","popular"],"view":3,"example":"/acfun/bangumi/5022158","parameters":{"id":"番剧 id"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"番剧","maintainers":["xyqfer"],"description":":::tip\n番剧 id 不包含开头的 aa。\n例如：`https://www.acfun.cn/bangumi/aa5022158` 的番剧 id 是 5022158，不包括开头的 aa。\n:::","location":"bangumi.ts"}' :test='{"code":0}' />

:::tip
番剧 id 不包含开头的 aa。
例如：`https://www.acfun.cn/bangumi/aa5022158` 的番剧 id 是 5022158，不包括开头的 aa。
:::

### 文章 <Site url="www.acfun.cn" size="sm" />

<Route namespace="acfun" :data='{"path":"/article/:categoryId/:sortType?/:timeRange?","categories":["anime","popular"],"view":0,"example":"/acfun/article/110","parameters":{"categoryId":{"description":"分区 ID","options":[{"value":"73","label":"生活情感"},{"value":"74","label":"动漫文化"},{"value":"75","label":"漫画文学"},{"value":"110","label":"综合"},{"value":"164","label":"游戏"},{"value":"184","label":"二次元画师"}]},"sortType":{"description":"排序","options":[{"value":"createTime","label":"最新发表"},{"value":"lastCommentTime","label":"最新动态"},{"value":"hotScore","label":"最热文章"}],"default":"createTime"},"timeRange":{"description":"时间范围，仅在排序是 `hotScore` 有效","options":[{"value":"all","label":"时间不限"},{"value":"oneDay","label":"24 小时"},{"value":"threeDay","label":"三天"},{"value":"oneWeek","label":"一周"},{"value":"oneMonth","label":"一个月"}],"default":"all"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"文章","maintainers":["TonyRL"],"description":"| 二次元画师 | 综合 | 生活情感 | 游戏 | 动漫文化 | 漫画文学 |\n  | ---------- | ---- | -------- | ---- | -------- | -------- |\n  | 184        | 110  | 73       | 164  | 74       | 75       |\n\n  | 最新发表   | 最新动态        | 最热文章 |\n  | ---------- | --------------- | -------- |\n  | createTime | lastCommentTime | hotScore |\n\n  | 时间不限 | 24 小时 | 三天     | 一周    | 一个月   |\n  | -------- | ------- | -------- | ------- | -------- |\n  | all      | oneDay  | threeDay | oneWeek | oneMonth |","location":"article.ts"}' :test='{"code":0}' />

| 二次元画师 | 综合 | 生活情感 | 游戏 | 动漫文化 | 漫画文学 |
  | ---------- | ---- | -------- | ---- | -------- | -------- |
  | 184        | 110  | 73       | 164  | 74       | 75       |

  | 最新发表   | 最新动态        | 最热文章 |
  | ---------- | --------------- | -------- |
  | createTime | lastCommentTime | hotScore |

  | 时间不限 | 24 小时 | 三天     | 一周    | 一个月   |
  | -------- | ------- | -------- | ------- | -------- |
  | all      | oneDay  | threeDay | oneWeek | oneMonth |

### 用户投稿 <Site url="www.acfun.cn" size="sm" />

<Route namespace="acfun" :data='{"path":"/user/video/:uid","radar":[{"source":["www.acfun.cn/u/:id"],"target":"/user/video/:id"}],"name":"用户投稿","parameters":{"uid":"用户 UID"},"categories":["anime","popular"],"example":"/acfun/user/video/6102","view":3,"maintainers":["wdssmq"],"location":"video.ts"}' :test='undefined' />

## AInvest <Site url="ainvest.com"/>

### Latest News <Site url="ainvest.com/news" size="sm" />

<Route namespace="ainvest" :data='{"path":"/news","categories":["finance","popular"],"example":"/ainvest/news","parameters":{},"view":0,"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ainvest.com/news"]}],"name":"Latest News","maintainers":["TonyRL"],"url":"ainvest.com/news","location":"news.ts"}' :test='{"code":0}' />

## AP News <Site url="apnews.com"/>

### News <Site url="apnews.com" size="sm" />

<Route namespace="apnews" :data='{"path":"/api/:tags?","categories":["traditional-media","popular"],"example":"/apnews/api/apf-topnews","view":0,"parameters":{"tags":{"description":"Getting a list of articles from a public API based on tags.","options":[{"value":"apf-topnews","label":"Top News"},{"value":"apf-sports","label":"Sports"},{"value":"apf-politics","label":"Politics"},{"value":"apf-entertainment","label":"Entertainment"},{"value":"apf-usnews","label":"US News"},{"value":"apf-oddities","label":"Oddities"},{"value":"apf-Travel","label":"Travel"},{"value":"apf-technology","label":"Technology"},{"value":"apf-lifestyle","label":"Lifestyle"},{"value":"apf-business","label":"Business"},{"value":"apf-Health","label":"Health"},{"value":"apf-science","label":"Science"},{"value":"apf-intlnews","label":"International News"}],"default":"apf-topnews"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["apnews.com/"]}],"name":"News","maintainers":["dzx-dzx"],"location":"api.ts"}' :test='{"code":0}' />

## Apple <Site url="apps.apple.com"/>

### App Update <Site url="apps.apple.com" size="sm" />

<Route namespace="apple" :data='{"path":"/apps/update/:country/:id/:platform?","categories":["program-update","popular"],"view":5,"example":"/apple/apps/update/us/id408709785","parameters":{"country":"App Store Country, obtain from the app URL, see below","id":"App id, obtain from the app URL","platform":{"description":"App Platform, see below, all by default","options":[{"value":"All","label":"all"},{"value":"iOS","label":"iOS"},{"value":"macOS","label":"macOS"},{"value":"tvOS","label":"tvOS"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["apps.apple.com/:country/app/:appSlug/:id","apps.apple.com/:country/app/:id"],"target":"/apps/update/:country/:id"}],"name":"App Update","maintainers":["EkkoG","nczitzk"],"description":"\n  :::tip\n  For example, the URL of [GarageBand](https://apps.apple.com/us/app/messages/id408709785) in the App Store is `https://apps.apple.com/us/app/messages/id408709785`. In this case, the `App Store Country` parameter for the route is `us`, and the `App id` parameter is `id1146560473`. So the route should be [`/apple/apps/update/us/id408709785`](https://rsshub.app/apple/apps/update/us/id408709785).\n  :::","location":"apps.ts"}' :test='{"code":0}' />


  :::tip
  For example, the URL of [GarageBand](https://apps.apple.com/us/app/messages/id408709785) in the App Store is `https://apps.apple.com/us/app/messages/id408709785`. In this case, the `App Store Country` parameter for the route is `us`, and the `App id` parameter is `id1146560473`. So the route should be [`/apple/apps/update/us/id408709785`](https://rsshub.app/apple/apps/update/us/id408709785).
  :::

## Behance <Site url="www.behance.net"/>

### User Works <Site url="www.behance.net" size="sm" />

<Route namespace="behance" :data='{"path":"/:user/:type?","categories":["design","popular"],"view":2,"example":"/behance/mishapetrick","parameters":{"user":"username","type":{"description":"type","options":[{"value":"projects","label":"projects"},{"value":"appreciated","label":"appreciated"}],"default":"projects"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User Works","maintainers":["MisteryMonster"],"description":"Behance user&#39;s profile URL, like [https://www.behance.net/mishapetrick](https://www.behance.net/mishapetrick) the username will be `mishapetrick`。","location":"user.ts"}' :test='{"code":0}' />

Behance user's profile URL, like [https://www.behance.net/mishapetrick](https://www.behance.net/mishapetrick) the username will be `mishapetrick`。

## BigQuant <Site url="bigquant.com"/>

### 专题报告 <Site url="bigquant.com/" size="sm" />

<Route namespace="bigquant" :data='{"path":"/collections","categories":["finance","popular"],"view":0,"example":"/bigquant/collections","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["bigquant.com/"]}],"name":"专题报告","maintainers":["nczitzk"],"url":"bigquant.com/","location":"collections.ts"}' :test='{"code":0}' />

## Binance <Site url="binance.com"/>

### Announcement <Site url="binance.com" size="sm" />

<Route namespace="binance" :data='{"path":"/announcement/:type","categories":["finance","popular"],"view":0,"example":"/binance/announcement/new-cryptocurrency-listing","parameters":{"type":{"description":"Binance Announcement type","default":"new-cryptocurrency-listing","options":[{"value":"new-cryptocurrency-listing","label":"New Cryptocurrency Listing"},{"value":"latest-binance-news","label":"Latest Binance News"},{"value":"latest-activities","label":"Latest Activities"},{"value":"new-fiat-listings","label":"New Fiat Listings"},{"value":"api-updates","label":"API Updates"},{"value":"crypto-airdrop","label":"Crypto Airdrop"},{"value":"wallet-maintenance-updates","label":"Wallet Maintenance Updates"},{"value":"delisting","label":"Delisting"}]}},"name":"Announcement","description":"\nType category\n\n - new-cryptocurrency-listing => New Cryptocurrency Listing\n - latest-binance-news        => Latest Binance News\n - latest-activities          => Latest Activities\n - new-fiat-listings          => New Fiat Listings\n - api-updates                => API Updates\n - crypto-airdrop             => Crypto Airdrop\n - wallet-maintenance-updates => Wallet Maintenance Updates\n - delisting                  => Delisting\n","maintainers":["enpitsulin"],"location":"announcement.ts"}' :test='{"code":0}' />


Type category

 - new-cryptocurrency-listing => New Cryptocurrency Listing
 - latest-binance-news        => Latest Binance News
 - latest-activities          => Latest Activities
 - new-fiat-listings          => New Fiat Listings
 - api-updates                => API Updates
 - crypto-airdrop             => Crypto Airdrop
 - wallet-maintenance-updates => Wallet Maintenance Updates
 - delisting                  => Delisting


## Bitget <Site url="bitget.com"/>

### Announcement <Site url="bitget.com" size="sm" />

<Route namespace="bitget" :data='{"path":"/announcement/:type/:lang?","categories":["finance","popular"],"view":0,"example":"/bitget/announcement/all/zh-CN","parameters":{"type":{"description":"Bitget 通知类型","default":"all","options":[{"value":"all","label":"全部通知"},{"value":"new-listing","label":"新币上线"},{"value":"latest-activities","label":"最新活动"},{"value":"new-announcement","label":"最新公告"}]},"lang":{"description":"语言","default":"zh-CN","options":[{"value":"zh-CN","label":"中文"},{"value":"en-US","label":"English"},{"value":"es-ES","label":"Español"},{"value":"fr-FR","label":"Français"},{"value":"de-DE","label":"Deutsch"},{"value":"ja-JP","label":"日本語"},{"value":"ru-RU","label":"Русский"},{"value":"ar-SA","label":"العربية"}]}},"radar":[{"source":["www.bitget.com/:lang/inmail"],"target":"/announcement/all/:lang"}],"name":"Announcement","description":"\ntype:\n| Type | Description |\n| --- | --- |\n| all | 全部通知 |\n| new-listing | 新币上线 |\n| latest-activities | 最新活动 |\n| new-announcement | 最新公告 |\n\nlang:\n| Lang | Description |\n| ---   | ---   |\n| zh-CN | 中文 |\n| en-US | English |\n| es-ES | Español |\n| fr-FR | Français |\n| de-DE | Deutsch |\n| ja-JP | 日本語 |\n| ru-RU | Русский |\n| ar-SA | العربية |\n","maintainers":["YukiCoco"],"location":"announcement.ts"}' :test='{"code":0}' />


type:
| Type | Description |
| --- | --- |
| all | 全部通知 |
| new-listing | 新币上线 |
| latest-activities | 最新活动 |
| new-announcement | 最新公告 |

lang:
| Lang | Description |
| ---   | ---   |
| zh-CN | 中文 |
| en-US | English |
| es-ES | Español |
| fr-FR | Français |
| de-DE | Deutsch |
| ja-JP | 日本語 |
| ru-RU | Русский |
| ar-SA | العربية |


## Bloomberg <Site url="www.bloomberg.com"/>

### Authors <Site url="www.bloomberg.com" size="sm" />

<Route namespace="bloomberg" :data='{"path":"/authors/:id/:slug/:source?","categories":["finance","popular"],"view":0,"example":"/bloomberg/authors/ARbTQlRLRjE/matthew-s-levine","parameters":{"id":"Author ID, can be found in URL","slug":"Author Slug, can be found in URL","source":"Data source, either `api` or `rss`,`api` by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.bloomberg.com/*/authors/:id/:slug","www.bloomberg.com/authors/:id/:slug"],"target":"/authors/:id/:slug"}],"name":"Authors","maintainers":["josh"],"location":"authors.ts"}' :test='{"code":0}' />

### Bloomberg Site <Site url="www.bloomberg.com" size="sm" />

<Route namespace="bloomberg" :data='{"path":"/:site?","categories":["finance","popular"],"view":0,"example":"/bloomberg/bbiz","parameters":{"site":{"description":"Site ID, can be found below","options":[{"value":"/","label":"News"},{"value":"bpol","label":"Politics"},{"value":"bbiz","label":"Business"},{"value":"markets","label":"Markets"},{"value":"technology","label":"Technology"},{"value":"green","label":"Green"},{"value":"wealth","label":"Wealth"},{"value":"pursuits","label":"Pursuits"},{"value":"bview","label":"Opinion"},{"value":"equality","label":"Equality"},{"value":"businessweek","label":"Businessweek"},{"value":"citylab","label":"CityLab"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Bloomberg Site","maintainers":["bigfei"],"description":"\n  | Site ID      | Title        |\n  | ------------ | ------------ |\n  | /            | News         |\n  | bpol         | Politics     |\n  | bbiz         | Business     |\n  | markets      | Markets      |\n  | technology   | Technology   |\n  | green        | Green        |\n  | wealth       | Wealth       |\n  | pursuits     | Pursuits     |\n  | bview        | Opinion      |\n  | equality     | Equality     |\n  | businessweek | Businessweek |\n  | citylab      | CityLab      |\n  ","location":"index.ts"}' :test='{"code":0}' />


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
  

## Bluesky (bsky) <Site url="bsky.app"/>

### Post <Site url="bsky.app" size="sm" />

<Route namespace="bsky" :data='{"path":"/profile/:handle/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/bsky/profile/bsky.app","parameters":{"handle":"User handle, can be found in URL","routeParams":"Filter parameter, Use filter to customize content types"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["bsky.app/profile/:handle"]}],"name":"Post","maintainers":["TonyRL"],"description":"\n| Filter Value | Description |\n|--------------|-------------|\n| posts_with_replies | Includes Posts, Replies, and Reposts |\n| posts_no_replies | Includes Posts and Reposts, without Replies |\n| posts_with_media | Shows only Posts containing media |\n| posts_and_author_threads | Shows Posts and Threads, without Replies and Reposts |\n\nDefault value for filter is `posts_and_author_threads` if not specified.\n\nExample:\n- `/bsky/profile/bsky.app/filter=posts_with_replies`","location":"posts.ts"}' :test='{"code":0}' />


| Filter Value | Description |
|--------------|-------------|
| posts_with_replies | Includes Posts, Replies, and Reposts |
| posts_no_replies | Includes Posts and Reposts, without Replies |
| posts_with_media | Shows only Posts containing media |
| posts_and_author_threads | Shows Posts and Threads, without Replies and Reposts |

Default value for filter is `posts_and_author_threads` if not specified.

Example:
- `/bsky/profile/bsky.app/filter=posts_with_replies`

## CnGal <Site url="www.cngal.org"/>

### 每周速报 <Site url="www.cngal.org/" size="sm" />

<Route namespace="cngal" :data='{"path":"/weekly","categories":["anime","popular"],"view":0,"example":"/cngal/weekly","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.cngal.org/","www.cngal.org/weeklynews"]}],"name":"每周速报","maintainers":["chengyuhui"],"url":"www.cngal.org/","location":"weekly.ts"}' :test='{"code":0}' />

## DLsite <Site url="dlsite.com"/>

### Current Release <Site url="dlsite.com" size="sm" />

<Route namespace="dlsite" :data='{"path":"/new/:type","categories":["anime","popular"],"view":0,"example":"/dlsite/new/home","parameters":{"type":{"description":"类型","options":[{"value":"home","label":"「DLsite 同人」"},{"value":"comic","label":"「DLsite コミック」"},{"value":"soft","label":"「DLsite PCソフト」"},{"value":"maniax","label":"「DLsite 同人 - R18」"},{"value":"books","label":"「DLsite 成年コミック - R18」"},{"value":"pro","label":"「DLsite 美少女ゲーム」"},{"value":"girls","label":"「DLsite 乙女」"},{"value":"bl","label":"「DLsite BL」"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Current Release","maintainers":["cssxsh"],"description":"| Doujin | Comics | PC Games | Doujin (R18) | Adult Comics | H Games | Otome | BL |\n  | ------ | ------ | -------- | ------------ | ------------ | ------- | ----- | -- |\n  | home   | comic  | soft     | maniax       | books        | pro     | girls | bl |","location":"new.ts"}' :test='{"code":0}' />

| Doujin | Comics | PC Games | Doujin (R18) | Adult Comics | H Games | Otome | BL |
  | ------ | ------ | -------- | ------------ | ------------ | ------- | ----- | -- |
  | home   | comic  | soft     | maniax       | books        | pro     | girls | bl |

### Ci-en Creators' Article <Site url="dlsite.com" size="sm" />

<Route namespace="dlsite" :data='{"path":"/ci-en/:id/article","categories":["anime","popular"],"view":0,"example":"/dlsite/ci-en/7400/article","parameters":{"id":"Creator id, can be found in URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ci-en.dlsite.com/creator/:id/article/843558","ci-en.dlsite.com/"]}],"name":"Ci-en Creators&#39; Article","maintainers":["nczitzk"],"location":"ci-en/article.ts"}' :test='{"code":0}' />

### Discounted Works <Site url="dlsite.com" size="sm" />

<Route namespace="dlsite" :data='{"path":"/campaign/:type/:free?","categories":["anime","popular"],"example":"/dlsite/campaign/home","parameters":{"type":{"description":"类型","options":[{"value":"home","label":"「DLsite 同人」"},{"value":"comic","label":"「DLsite コミック」"},{"value":"soft","label":"「DLsite PCソフト」"},{"value":"maniax","label":"「DLsite 同人 - R18」"},{"value":"books","label":"「DLsite 成年コミック - R18」"},{"value":"pro","label":"「DLsite 美少女ゲーム」"},{"value":"girls","label":"「DLsite 乙女」"},{"value":"bl","label":"「DLsite BL」"}]},"free":{"description":"免费","options":[{"value":"1","label":"是"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Discounted Works","maintainers":["cssxsh"],"location":"campaign.ts"}' :test='{"code":0}' />

## Docker Hub <Site url="hub.docker.com"/>

### Image New Build <Site url="hub.docker.com" size="sm" />

<Route namespace="dockerhub" :data='{"path":"/build/:owner/:image/:tag?","categories":["program-update","popular"],"view":5,"example":"/dockerhub/build/diygod/rsshub/latest","parameters":{"owner":"Image owner, the owner of the official image fills in the library, for example: /dockerhub/build/library/mysql","image":"Image name","tag":{"description":"Image tag","default":"latest"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Image New Build","maintainers":["HenryQW"],"location":"build.ts"}' :test='{"code":0}' />

## Doraemon Channel <Site url="www.dora-world.com"/>

### Article <Site url="www.dora-world.com" size="sm" />

<Route namespace="dora-world" :data='{"path":"/article/:topic/:topicId?","categories":["anime","popular"],"view":0,"example":"/dora-world/article/contents","parameters":{"topic":"Topic name, can be found in URL. For example: the topic name of [https://www.dora-world.com/movie](https://www.dora-world.com/movie) is `movie`","topicId":"Topic id, can be found in URL. For example: the topic id of [https://www.dora-world.com/contents?t=197](https://www.dora-world.com/contents?t=197) is `197`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.dora-world.com/:topic"]}],"name":"Article","maintainers":["AChangAZha"],"location":"article.ts"}' :test='undefined' />

## Epic Games Store <Site url="store.epicgames.com"/>

### Free games <Site url="store.epicgames.com" size="sm" />

<Route namespace="epicgames" :data='{"path":"/freegames/:locale?/:country?","categories":["game","popular"],"view":5,"example":"/epicgames/freegames/en-US/US","parameters":{"locale":{"description":"Locale","default":"en-US"},"country":{"description":"Country","default":"US"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["store.epicgames.com/:locale/free-games"],"target":"/freegames/:locale"}],"name":"Free games","maintainers":["DIYgod","NeverBehave","Zyx-A","junfengP","nczitzk","KotaHv"],"location":"index.ts"}' :test='{"code":0}' />

## Eventernote <Site url="www.eventernote.com"/>

### 声优活动及演唱会 <Site url="www.eventernote.com" size="sm" />

<Route namespace="eventernote" :data='{"path":"/actors/:name/:id","categories":["anime","popular"],"view":3,"example":"/eventernote/actors/三森すずこ/2634","parameters":{"name":"声优姓名","id":"声优 ID"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.eventernote.com/actors/:name/:id/events"]}],"name":"声优活动及演唱会","maintainers":["KTachibanaM"],"location":"actors.ts"}' :test='{"code":0}' />

## Fantia <Site url="fantia.jp"/>

### Search <Site url="fantia.jp" size="sm" />

<Route namespace="fantia" :data='{"path":"/search/:type?/:caty?/:period?/:order?/:rating?/:keyword?","categories":["picture","popular"],"view":2,"example":"/fantia/search/posts/all/daily","parameters":{"type":{"description":"Type, see the table below, `posts` by default","options":[{"value":"fanclubs","label":"クリエイター"},{"value":"posts","label":"投稿"},{"value":"products","label":"商品"},{"value":"commissions","label":"コミッション"}],"default":"posts"},"caty":{"description":"Category, see the table below, can also be found in search page URL, `すべてのクリエイター` by default","options":[{"value":"all","label":"すべてのクリエイター"},{"value":"illust","label":"イラスト"},{"value":"comic","label":"漫画"},{"value":"cosplay","label":"コスプレ"},{"value":"youtuber","label":"YouTuber・配信者"},{"value":"vtuber","label":"Vtuber"},{"value":"voice","label":"音声作品・ASMR"},{"value":"voiceactor","label":"声優・歌い手"},{"value":"idol","label":"アイドル"},{"value":"anime","label":"アニメ・映像・写真"},{"value":"3d","label":"3D"},{"value":"game","label":"ゲーム制作"},{"value":"music","label":"音楽"},{"value":"novel","label":"小説"},{"value":"doll","label":"ドール"},{"value":"art","label":"アート・デザイン"},{"value":"program","label":"プログラム"},{"value":"handmade","label":"創作・ハンドメイド"},{"value":"history","label":"歴史・評論・情報"},{"value":"railroad","label":"鉄道・旅行・ミリタリー"},{"value":"shop","label":"ショップ"},{"value":"other","label":"その他"}],"default":"all"},"period":{"description":"Ranking period, see the table below, empty by default","options":[{"value":"daily","label":"デイリー"},{"value":"weekly","label":"ウィークリー"},{"value":"monthly","label":"マンスリー"},{"value":"all","label":"全期間"}],"default":""},"order":{"description":"Sorting, see the table below, `更新の新しい順` by default","options":[{"value":"updater","label":"更新の新しい順"},{"value":"update_old","label":"更新の古い順"},{"value":"newer","label":"投稿の新しい順"},{"value":"create_old","label":"投稿の古い順"},{"value":"popular","label":"お気に入り数順"}],"default":"updater"},"rating":{"description":"Rating, see the table below, `すべて` by default","options":[{"value":"all","label":"すべて"},{"value":"general","label":"一般のみ"},{"value":"adult","label":"R18 のみ"}],"default":"all"},"keyword":"Keyword, empty by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Search","maintainers":["nczitzk"],"description":"Type\n\n  | クリエイター | 投稿  | 商品     | コミッション |\n  | ------------ | ----- | -------- | ------------ |\n  | fanclubs     | posts | products | commissions  |\n\n  Category\n\n  | 分类                   | 分类名     |\n  | ---------------------- | ---------- |\n  | イラスト               | illust     |\n  | 漫画                   | comic      |\n  | コスプレ               | cosplay    |\n  | YouTuber・配信者       | youtuber   |\n  | Vtuber                 | vtuber     |\n  | 音声作品・ASMR         | voice      |\n  | 声優・歌い手           | voiceactor |\n  | アイドル               | idol       |\n  | アニメ・映像・写真     | anime      |\n  | 3D                     | 3d         |\n  | ゲーム制作             | game       |\n  | 音楽                   | music      |\n  | 小説                   | novel      |\n  | ドール                 | doll       |\n  | アート・デザイン       | art        |\n  | プログラム             | program    |\n  | 創作・ハンドメイド     | handmade   |\n  | 歴史・評論・情報       | history    |\n  | 鉄道・旅行・ミリタリー | railroad   |\n  | ショップ               | shop       |\n  | その他                 | other      |\n\n  Ranking period\n\n  | デイリー | ウィークリー | マンスリー | 全期間 |\n  | -------- | ------------ | ---------- | ------ |\n  | daily    | weekly       | monthly    | all    |\n\n  Sorting\n\n  | 更新の新しい順 | 更新の古い順 | 投稿の新しい順 | 投稿の古い順 | お気に入り数順 |\n  | -------------- | ------------ | -------------- | ------------ | -------------- |\n  | updater        | update_old  | newer          | create_old  | popular        |\n\n  Rating\n\n  | すべて | 一般のみ | R18 のみ |\n  | ------ | -------- | -------- |\n  | all    | general  | adult    |","location":"search.ts"}' :test='{"code":0}' />

Type

  | クリエイター | 投稿  | 商品     | コミッション |
  | ------------ | ----- | -------- | ------------ |
  | fanclubs     | posts | products | commissions  |

  Category

  | 分类                   | 分类名     |
  | ---------------------- | ---------- |
  | イラスト               | illust     |
  | 漫画                   | comic      |
  | コスプレ               | cosplay    |
  | YouTuber・配信者       | youtuber   |
  | Vtuber                 | vtuber     |
  | 音声作品・ASMR         | voice      |
  | 声優・歌い手           | voiceactor |
  | アイドル               | idol       |
  | アニメ・映像・写真     | anime      |
  | 3D                     | 3d         |
  | ゲーム制作             | game       |
  | 音楽                   | music      |
  | 小説                   | novel      |
  | ドール                 | doll       |
  | アート・デザイン       | art        |
  | プログラム             | program    |
  | 創作・ハンドメイド     | handmade   |
  | 歴史・評論・情報       | history    |
  | 鉄道・旅行・ミリタリー | railroad   |
  | ショップ               | shop       |
  | その他                 | other      |

  Ranking period

  | デイリー | ウィークリー | マンスリー | 全期間 |
  | -------- | ------------ | ---------- | ------ |
  | daily    | weekly       | monthly    | all    |

  Sorting

  | 更新の新しい順 | 更新の古い順 | 投稿の新しい順 | 投稿の古い順 | お気に入り数順 |
  | -------------- | ------------ | -------------- | ------------ | -------------- |
  | updater        | update_old  | newer          | create_old  | popular        |

  Rating

  | すべて | 一般のみ | R18 のみ |
  | ------ | -------- | -------- |
  | all    | general  | adult    |

### User Posts <Site url="fantia.jp" size="sm" />

<Route namespace="fantia" :data='{"path":"/user/:id","categories":["picture","popular"],"view":2,"example":"/fantia/user/3498","parameters":{"id":"User id, can be found in user profile URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["fantia.jp/fanclubs/:id"]}],"name":"User Posts","maintainers":["nczitzk"],"location":"user.ts"}' :test='{"code":0}' />

## Fediverse <Site url="fediverse.observer"/>

### Timeline <Site url="fediverse.observer" size="sm" />

<Route namespace="fediverse" :data='{"path":"/timeline/:account","categories":["social-media","popular"],"view":1,"example":"/fediverse/timeline/Mastodon@mastodon.social","parameters":{"account":"username@domain"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Timeline","maintainers":["DIYgod","pseudoyu"],"location":"timeline.ts"}' :test='{"code":0}' />

## finviz <Site url="finviz.com"/>

### News <Site url="finviz.com/news.ashx" size="sm" />

<Route namespace="finviz" :data='{"path":"/:category?","categories":["finance","popular"],"view":0,"example":"/finviz","parameters":{"category":{"description":"Category, see below, News by default","options":[{"value":"news","label":"news"},{"value":"blogs","label":"blogs"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["finviz.com/news.ashx","finviz.com/"]}],"name":"News","maintainers":["nczitzk"],"url":"finviz.com/news.ashx","description":"| News | Blogs |\n  | ---- | ---- |\n  | news | blogs |","location":"news.ts"}' :test='{"code":0}' />

| News | Blogs |
  | ---- | ---- |
  | news | blogs |

## Followin <Site url="followin.io"/>

### Home <Site url="followin.io" size="sm" />

<Route namespace="followin" :data='{"path":"/:categoryId?/:lang?","categories":["finance","popular"],"view":0,"example":"/followin","parameters":{"categoryId":{"description":"Category ID","options":[{"value":"1","label":"For You"},{"value":"9","label":"Market"},{"value":"13","label":"Meme"},{"value":"14","label":"BRC20"},{"value":"3","label":"NFT"},{"value":"5","label":"Thread"},{"value":"6","label":"In-depth"},{"value":"8","label":"Tutorials"},{"value":"11","label":"Videos"}],"default":"1"},"lang":{"description":"Language","options":[{"value":"en","label":"English"},{"value":"zh-Hans","label":"简体中文"},{"value":"zh-Hant","label":"繁體中文"},{"value":"vi","label":"Tiếng Việt"}],"default":"en"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Home","maintainers":["TonyRL"],"description":"Category ID\n\n  | For You | Market | Meme | BRC20 | NFT | Thread | In-depth | Tutorials | Videos |\n  | ------- | ------ | ---- | ----- | --- | ------ | -------- | --------- | ------ |\n  | 1       | 9      | 13   | 14    | 3   | 5      | 6        | 8         | 11     |\n\n  Language\n\n  | English | 简体中文 | 繁體中文 | Tiếng Việt |\n  | ------- | -------- | -------- | ---------- |\n  | en      | zh-Hans  | zh-Hant  | vi         |","location":"index.ts"}' :test='{"code":0}' />

Category ID

  | For You | Market | Meme | BRC20 | NFT | Thread | In-depth | Tutorials | Videos |
  | ------- | ------ | ---- | ----- | --- | ------ | -------- | --------- | ------ |
  | 1       | 9      | 13   | 14    | 3   | 5      | 6        | 8         | 11     |

  Language

  | English | 简体中文 | 繁體中文 | Tiếng Việt |
  | ------- | -------- | -------- | ---------- |
  | en      | zh-Hans  | zh-Hant  | vi         |

### News <Site url="followin.io" size="sm" />

<Route namespace="followin" :data='{"path":"/news/:lang?","categories":["finance","popular"],"view":0,"example":"/followin/news","parameters":{"lang":{"description":"Language","options":[{"value":"en","label":"English"},{"value":"zh-Hans","label":"简体中文"},{"value":"zh-Hant","label":"繁體中文"},{"value":"vi","label":"Tiếng Việt"}],"default":"en"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["followin.io/:lang?/news","followin.io/news"]}],"name":"News","maintainers":["TonyRL"],"location":"news.ts"}' :test='{"code":0}' />

## GETTR <Site url="gettr.com"/>

### User timeline <Site url="gettr.com" size="sm" />

<Route namespace="gettr" :data='{"path":"/user/:id","categories":["social-media","popular"],"view":1,"example":"/gettr/user/jasonmillerindc","parameters":{"id":"User id"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gettr.com/user/:id"]}],"name":"User timeline","maintainers":["TonyRL"],"location":"user.ts"}' :test='{"code":0}' />

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

<Route namespace="github" :data='{"path":"/issue/:user/:repo/:state?/:labels?","categories":["programming","popular"],"view":5,"example":"/github/issue/DIYgod/RSSHub/open","parameters":{"user":"GitHub username","repo":"GitHub repo name","state":{"description":"the state of the issues.","default":"open","options":[{"label":"Open","value":"open"},{"label":"Closed","value":"closed"},{"label":"All","value":"all"}]},"labels":"a list of comma separated label names"},"radar":[{"source":["github.com/:user/:repo/issues","github.com/:user/:repo/issues/:id","github.com/:user/:repo"],"target":"/issue/:user/:repo"}],"name":"Repo Issues","maintainers":["HenryQW","AndreyMZ"],"location":"issue.ts"}' :test='{"code":0}' />

### Repo Stars <Site url="github.com" size="sm" />

<Route namespace="github" :data='{"path":"/stars/:user/:repo","categories":["programming","popular"],"example":"/github/stars/DIYgod/RSSHub","view":5,"parameters":{"user":"GitHub username","repo":"GitHub repo name"},"features":{"requireConfig":[{"name":"GITHUB_ACCESS_TOKEN","description":"GitHub Access Token"}]},"radar":[{"source":["github.com/:user/:repo/stargazers","github.com/:user/:repo"]}],"name":"Repo Stars","maintainers":["HenryQW"],"location":"star.ts"}' :test='undefined' />

### Trending <Site url="github.com/trending" size="sm" />

<Route namespace="github" :data='{"path":"/trending/:since/:language/:spoken_language?","categories":["programming","popular"],"example":"/github/trending/daily/javascript/en","view":5,"parameters":{"since":{"description":"time range","options":[{"value":"daily","label":"Today"},{"value":"weekly","label":"This week"},{"value":"monthly","label":"This month"}]},"language":{"description":"the feed language, available in [Trending page](https://github.com/trending/javascript?since=monthly) &#39;s URL, don&#39;t filter option is `any`","default":"any"},"spoken_language":{"description":"natural language, available in [Trending page](https://github.com/trending/javascript?since=monthly) &#39;s URL"}},"features":{"requireConfig":[{"name":"GITHUB_ACCESS_TOKEN","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["github.com/trending"],"target":"/trending/:since"}],"name":"Trending","maintainers":["DIYgod","jameschensmith"],"url":"github.com/trending","location":"trending.ts"}' :test='undefined' />

### User Activities <Site url="github.com" size="sm" />

<Route namespace="github" :data='{"path":"/activity/:user","name":"User Activities","maintainers":["hyoban"],"example":"/github/activity/DIYgod","categories":["programming","popular"],"view":5,"parameters":{"user":"GitHub username"},"description":"Get the activities of a user on GitHub, based on the GitHub official RSS feed","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["github.com/:user"],"target":"/activity/:user"}],"location":"activity.ts"}' :test='{"code":0}' />

Get the activities of a user on GitHub, based on the GitHub official RSS feed

## Google <Site url="www.google.com"/>

### Scholar Author Citations <Site url="www.google.com" size="sm" />

<Route namespace="google" :data='{"path":"/citations/:id","categories":["journal","popular"],"example":"/google/citations/mlmE4JMAAAAJ","parameters":{"id":"N"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Scholar Author Citations","maintainers":["KellyHwong","const7"],"description":"The parameter id in the route is the id in the URL of the user&#39;s Google Scholar reference page, for example `https://scholar.google.com/citations?user=mlmE4JMAAAAJ` to `mlmE4JMAAAAJ`.\n\n  Query parameters are also supported here, for example `https://scholar.google.com/citations?user=mlmE4JMAAAAJ&sortby=pubdate` to `mlmE4JMAAAAJ&sortby=pubdate`. Please make sure that the user id (`mlmE4JMAAAAJ` in this case) should be the first parameter in the query string.","location":"citations.ts"}' :test='{"code":0}' />

The parameter id in the route is the id in the URL of the user's Google Scholar reference page, for example `https://scholar.google.com/citations?user=mlmE4JMAAAAJ` to `mlmE4JMAAAAJ`.

  Query parameters are also supported here, for example `https://scholar.google.com/citations?user=mlmE4JMAAAAJ&sortby=pubdate` to `mlmE4JMAAAAJ&sortby=pubdate`. Please make sure that the user id (`mlmE4JMAAAAJ` in this case) should be the first parameter in the query string.

### Scholar Keywords Monitoring <Site url="www.google.com" size="sm" />

<Route namespace="google" :data='{"path":"/scholar/:query","categories":["journal","popular"],"example":"/google/scholar/data+visualization","parameters":{"query":"query statement which supports「Basic」and「Advanced」modes"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Scholar Keywords Monitoring","maintainers":["HenryQW"],"description":":::warning\n  Google Scholar has strict anti-crawling mechanism implemented, the demo below doesn&#39;t guarantee availability. Please deploy your own instance as it might increase the stability.\n  :::\n\n  1.  Basic mode, sample query is the keywords desired, eg.「data visualization」, [https://rsshub.app/google/scholar/data+visualization](https://rsshub.app/google/scholar/data+visualization).\n\n  2.  Advanced mode, visit [Google Scholar](https://scholar.google.com/schhp?hl=en&as_sdt=0,5), click the top left corner and select「Advanced Search」, fill in your conditions and submit the search. The URL should look like this: [https://scholar.google.com/scholar?as_q=data+visualization&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=&as_publication=&as_ylo=2018&as_yhi=&hl=en&as_sdt=0%2C5](https://scholar.google.com/scholar?as_q=data+visualization&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=&as_publication=&as_ylo=2018&as_yhi=&hl=en&as_sdt=0%2C5), copy everything after `https://scholar.google.com/scholar?` from the URL and use it as the query for this route. The complete URL for the above example should look like this: [https://rsshub.app/google/scholar/as_q=data+visualization&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=&as_publication=&as_ylo=2018&as_yhi=&hl=en&as_sdt=0%2C5](https://rsshub.app/google/scholar/as_q=data+visualization&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=&as_publication=&as_ylo=2018&as_yhi=&hl=en&as_sdt=0%2C5).","location":"scholar.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 655)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

:::warning
  Google Scholar has strict anti-crawling mechanism implemented, the demo below doesn't guarantee availability. Please deploy your own instance as it might increase the stability.
  :::

  1.  Basic mode, sample query is the keywords desired, eg.「data visualization」, [https://rsshub.app/google/scholar/data+visualization](https://rsshub.app/google/scholar/data+visualization).

  2.  Advanced mode, visit [Google Scholar](https://scholar.google.com/schhp?hl=en&as_sdt=0,5), click the top left corner and select「Advanced Search」, fill in your conditions and submit the search. The URL should look like this: [https://scholar.google.com/scholar?as_q=data+visualization&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=&as_publication=&as_ylo=2018&as_yhi=&hl=en&as_sdt=0%2C5](https://scholar.google.com/scholar?as_q=data+visualization&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=&as_publication=&as_ylo=2018&as_yhi=&hl=en&as_sdt=0%2C5), copy everything after `https://scholar.google.com/scholar?` from the URL and use it as the query for this route. The complete URL for the above example should look like this: [https://rsshub.app/google/scholar/as_q=data+visualization&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=&as_publication=&as_ylo=2018&as_yhi=&hl=en&as_sdt=0%2C5](https://rsshub.app/google/scholar/as_q=data+visualization&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=&as_publication=&as_ylo=2018&as_yhi=&hl=en&as_sdt=0%2C5).

### Update <Site url="www.google.com" size="sm" />

<Route namespace="google" :data='{"path":"/doodles/:language?","categories":["picture","popular"],"view":2,"example":"/google/doodles/zh-CN","parameters":{"language":"Language, default to `zh-CN`, for other language values, you can get it from [Google Doodles official website](https://www.google.com/doodles)"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Update","maintainers":["xyqfer"],"location":"doodles.ts"}' :test='{"code":0}' />

## GQ <Site url="gq.com"/>

### News <Site url="gq.com" size="sm" />

<Route namespace="gq" :data='{"path":"/news","categories":["traditional-media","popular"],"view":0,"example":"/gq/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gq.com/"]}],"name":"News","maintainers":["EthanWng97"],"location":"news.ts"}' :test='{"code":0}' />

## Hacker News <Site url="ycombinator.com"/>

### User <Site url="ycombinator.com" size="sm" />

<Route namespace="hackernews" :data='{"path":"/:section?/:type?/:user?","categories":["programming","popular"],"view":0,"example":"/hackernews/threads/comments_list/dang","parameters":{"section":{"description":"Content section, default to `index`"},"type":{"description":"Link type, default to `sources`"},"user":{"description":"Set user, only valid in `threads` and `submitted` sections"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["news.ycombinator.com/:section","news.ycombinator.com/"]}],"name":"User","maintainers":["nczitzk","xie-dongping"],"description":"Subscribe to the content of a specific user","location":"index.ts"}' :test='{"code":1,"message":"AssertionError: expected NaN to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 768)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)"}' />

Subscribe to the content of a specific user

## Hpoi 手办维基 <Site url="www.hpoi.net"/>

### 角色周边 <Site url="www.hpoi.net" size="sm" />

<Route namespace="hpoi" :data='{"path":"/items/character/:id/:order?","categories":["anime","popular"],"view":2,"example":"/hpoi/items/character/1035374","parameters":{"id":"角色 ID","order":{"description":"排序","options":[{"value":"release","label":"发售"},{"value":"add","label":"入库"},{"value":"hits","label":"总热度"},{"value":"hits7Day","label":"一周热度"},{"value":"hitsDay","label":"一天热度"},{"value":"rating","label":"评价"}],"default":"add"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"角色周边","maintainers":["DIYgod"],"location":"character.ts"}' :test='{"code":0}' />

### 所有周边 <Site url="www.hpoi.net/hobby/all" size="sm" />

<Route namespace="hpoi" :data='{"path":"/items/all/:order?","categories":["anime","popular"],"view":2,"example":"/hpoi/items/all","parameters":{"order":{"description":"排序","options":[{"value":"release","label":"发售"},{"value":"add","label":"入库"},{"value":"hits","label":"总热度"},{"value":"hits7Day","label":"一周热度"},{"value":"hitsDay","label":"一天热度"},{"value":"rating","label":"评价"}],"default":"add"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.hpoi.net/hobby/all"],"target":"/items/all"}],"name":"所有周边","maintainers":["DIYgod"],"url":"www.hpoi.net/hobby/all","location":"all.ts"}' :test='{"code":0}' />

### 作品周边 <Site url="www.hpoi.net" size="sm" />

<Route namespace="hpoi" :data='{"path":"/items/work/:id/:order?","categories":["anime","popular"],"view":2,"example":"/hpoi/items/work/4117491","parameters":{"id":"作品 ID","order":{"description":"排序","options":[{"value":"release","label":"发售"},{"value":"add","label":"入库"},{"value":"hits","label":"总热度"},{"value":"hits7Day","label":"一周热度"},{"value":"hitsDay","label":"一天热度"},{"value":"rating","label":"评价"}],"default":"add"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"作品周边","maintainers":["DIYgod"],"location":"work.ts"}' :test='{"code":0}' />

## IDOLY PRIDE 偶像荣耀 <Site url="idolypride.jp"/>

### News <Site url="idolypride.jp/news" size="sm" />

<Route namespace="idolypride" :data='{"path":"/news","categories":["anime","popular"],"view":0,"example":"/idolypride/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["idolypride.jp/news"]}],"name":"News","maintainers":["Mingxia1"],"url":"idolypride.jp/news","location":"news.ts"}' :test='{"code":0}' />

## IMDb <Site url="www.imdb.com"/>

### Charts <Site url="www.imdb.com/chart/top/" size="sm" />

<Route namespace="imdb" :data='{"path":"/chart/:chart?","categories":["multimedia","popular"],"view":5,"parameters":{"chart":{"description":"The chart to display, `top` by default","options":[{"value":"top","label":"Top 250 Movies"},{"value":"moviemeter","label":"Most Popular Movies"},{"value":"toptv","label":"Top 250 TV Shows"},{"value":"tvmeter","label":"Most Popular TV Shows"}],"default":"top"}},"example":"/imdb/chart","radar":[{"source":["www.imdb.com/chart/:chart/"]}],"name":"Charts","maintainers":["TonyRL"],"url":"www.imdb.com/chart/top/","description":"| Top 250 Movies | Most Popular Movies | Top 250 TV Shows | Most Popular TV Shows |\n  | -------------- | ------------------- | ---------------- | --------------------- |\n  | top            | moviemeter          | toptv            | tvmeter               |","location":"chart.ts"}' :test='{"code":0}' />

| Top 250 Movies | Most Popular Movies | Top 250 TV Shows | Most Popular TV Shows |
  | -------------- | ------------------- | ---------------- | --------------------- |
  | top            | moviemeter          | toptv            | tvmeter               |

## Inoreader <Site url="inoreader.com"/>

### HTML Clip <Site url="inoreader.com" size="sm" />

<Route namespace="inoreader" :data='{"path":"/html_clip/:user/:tag","example":"/inoreader/html_clip/1005137674/user-favorites","categories":["reading","popular"],"view":0,"name":"HTML Clip","maintainers":["EthanWng97"],"location":"index.ts"}' :test='undefined' />

### RSS <Site url="inoreader.com" size="sm" />

<Route namespace="inoreader" :data='{"path":"/rss/:user/:tag","categories":["reading","popular"],"view":0,"example":"/inoreader/rss/1005137674/user-favorites","parameters":{"user":"user id, the interger after user/ in the example URL","tag":"tag, the string after tag/ in the example URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"RSS","maintainers":["EthanWng97"],"location":"rss.ts"}' :test='{"code":0}' />

## Instagram <Site url="www.instagram.com"/>

### User Profile - Picnob <Site url="www.instagram.com" size="sm" />

<Route namespace="picnob" :data='{"path":"/user/:id","categories":["social-media","popular"],"example":"/picnob/user/xlisa_olivex","parameters":{"id":"Instagram id"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["picnob.com/profile/:id/*"],"target":"/user/:id"}],"name":"User Profile - Picnob","maintainers":["TonyRL","micheal-death"],"view":2,"location":"user.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1326)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

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

<Route namespace="javbus" :data='{"path":"/:path{.+}?","radar":[{"source":["www.javbus.com/:path*"],"target":"/:path"}],"name":"Works","maintainers":["MegrezZhu","CoderTonyChan","nczitzk","Felix2yu"],"categories":["multimedia","popular"],"view":3,"url":"www.javbus.com","example":"/javbus/star/rwt","parameters":{"path":{"description":"Any path of list page on javbus"}},"location":"index.ts"}' :test='{"code":0}' />

## Konachan.com Anime Wallpapers <Site url="konachan.com"/>

konachan post

### Popular Recent Posts <Site url="konachan.com" size="sm" />

<Route namespace="konachan" :data='{"path":"/post/popular_recent/:period?","categories":["picture","popular"],"view":2,"example":"/konachan/post/popular_recent/1d","parameters":{"period":{"description":"展示时间","options":[{"value":"1d","label":"最近 24 小时"},{"value":"1w","label":"最近一周"},{"value":"1m","label":"最近一月"},{"value":"1y","label":"最近一年"}],"default":"1d"}},"radar":[{"source":["konachan.com/post"]}],"name":"Popular Recent Posts","maintainers":["magic-akari","NekoAria"],"description":"| 最近 24 小时    | 最近一周     | 最近一月    | 最近一年     |\n  | ------- | -------- | ------- | -------- |\n  | 1d | 1w | 1m | 1y |","location":"post.ts"}' :test='{"code":0}' />

| 最近 24 小时    | 最近一周     | 最近一月    | 最近一年     |
  | ------- | -------- | ------- | -------- |
  | 1d | 1w | 1m | 1y |

## Lemmy <Site url="join-lemmy.org"/>

### Community <Site url="join-lemmy.org" size="sm" />

<Route namespace="lemmy" :data='{"path":"/:community/:sort?","categories":["social-media","popular"],"example":"/lemmy/technology@lemmy.world/Hot","parameters":{"community":"Lemmmy community, for example technology@lemmy.world","sort":{"description":"Sort by","options":[{"value":"Active","label":"Active"},{"value":"Hot","label":"Hot"},{"value":"New","label":"New"},{"value":"Old","label":"Old"},{"value":"TopDay","label":"TopDay"},{"value":"TopWeek","label":"TopWeek"},{"value":"TopMonth","label":"TopMonth"},{"value":"TopYear","label":"TopYear"},{"value":"TopAll","label":"TopAll"},{"value":"MostComments","label":"MostComments"},{"value":"NewComments","label":"NewComments"},{"value":"TopHour","label":"TopHour"},{"value":"TopSixHour","label":"TopSixHour"},{"value":"TopTwelveHour","label":"TopTwelveHour"},{"value":"TopThreeMonths","label":"TopThreeMonths"},{"value":"TopSixMonths","label":"TopSixMonths"},{"value":"TopNineMonths","label":"TopNineMonths"},{"value":"Controversial","label":"Controversial"},{"value":"Scaled","label":"Scaled"}],"default":"Active"}},"features":{"requireConfig":[{"name":"ALLOW_USER_SUPPLY_UNSAFE_DOMAIN","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Community","maintainers":["wb14123","pseudoyu"],"location":"index.ts"}' :test='{"code":0}' />

## LinkedIn 领英 <Site url="linkedin.com"/>

### Jobs <Site url="linkedin.com" size="sm" />

<Route namespace="linkedin" :data='{"path":"/jobs/:job_types/:exp_levels/:keywords?/:routeParams?","categories":["social-media","popular"],"view":5,"example":"/linkedin/jobs/C-P/1/software engineer","parameters":{"job_types":"See the following table for details, use &#39;-&#39; as delimiter","exp_levels":"See the following table for details, use &#39;-&#39; as delimiter","keywords":"keywords","routeParams":"additional query parameters, see the table below"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.linkedin.com/jobs/search"]}],"name":"Jobs","maintainers":["BrandNewLifeJackie26","zhoukuncheng"],"description":"#### `job_types` list\n\n  | Full Time | Part Time | Contractor | All |\n  | --------- | --------- | ---------- | --- |\n  | F         | P         | C          | all |\n\n  #### `exp_levels` list\n\n  | Intership | Entry Level | Associate | Mid-Senior Level | Director | All |\n  | --------- | ----------- | --------- | ---------------- | -------- | --- |\n  | 1         | 2           | 3         | 4                | 5        | all |\n\n  #### `routeParams` additional query parameters\n\n  ##### `f_WT` list\n\n  | Onsite | Remote | Hybrid |\n  | ------ | ------- | ------ |\n  |    1   |    2    |   3    |\n\n  ##### `geoId`\n\n  Geographic location ID. You can find this ID in the URL of a LinkedIn job search page that is filtered by location.\n\n  For example:\n  91000012 is the ID of East Asia.\n\n  ##### `f_TPR`\n\n  Time posted range. Here are some possible values:\n\n  *   `r86400`: Past 24 hours\n  *   `r604800`: Past week\n  *   `r2592000`: Past month\n\n  For example:\n\n  1.  If we want to search software engineer jobs of all levels and all job types, use `/linkedin/jobs/all/all/software engineer`\n  2.  If we want to search all entry level contractor/part time software engineer jobs, use `/linkedin/jobs/P-C/2/software engineer`\n  3.  If we want to search remote mid-senior level software engineer jobs in APAC posted within the last month, use `/linkedin/jobs/F/4/software%20engineer/f_WT=2&geoId=91000003&f_TPR=r2592000`\n\n  **To make it easier, the recommended way is to start a search on [LinkedIn](https://www.linkedin.com/jobs/search) and use [RSSHub Radar](https://github.com/DIYgod/RSSHub-Radar) to load the specific feed.**","location":"jobs.ts"}' :test='{"code":0}' />

#### `job_types` list

  | Full Time | Part Time | Contractor | All |
  | --------- | --------- | ---------- | --- |
  | F         | P         | C          | all |

  #### `exp_levels` list

  | Intership | Entry Level | Associate | Mid-Senior Level | Director | All |
  | --------- | ----------- | --------- | ---------------- | -------- | --- |
  | 1         | 2           | 3         | 4                | 5        | all |

  #### `routeParams` additional query parameters

  ##### `f_WT` list

  | Onsite | Remote | Hybrid |
  | ------ | ------- | ------ |
  |    1   |    2    |   3    |

  ##### `geoId`

  Geographic location ID. You can find this ID in the URL of a LinkedIn job search page that is filtered by location.

  For example:
  91000012 is the ID of East Asia.

  ##### `f_TPR`

  Time posted range. Here are some possible values:

  *   `r86400`: Past 24 hours
  *   `r604800`: Past week
  *   `r2592000`: Past month

  For example:

  1.  If we want to search software engineer jobs of all levels and all job types, use `/linkedin/jobs/all/all/software engineer`
  2.  If we want to search all entry level contractor/part time software engineer jobs, use `/linkedin/jobs/P-C/2/software engineer`
  3.  If we want to search remote mid-senior level software engineer jobs in APAC posted within the last month, use `/linkedin/jobs/F/4/software%20engineer/f_WT=2&geoId=91000003&f_TPR=r2592000`

  **To make it easier, the recommended way is to start a search on [LinkedIn](https://www.linkedin.com/jobs/search) and use [RSSHub Radar](https://github.com/DIYgod/RSSHub-Radar) to load the specific feed.**

## Lofter <Site url="www.lofter.com"/>

### User <Site url="www.lofter.com" size="sm" />

<Route namespace="lofter" :data='{"path":"/user/:name?","categories":["social-media","popular"],"example":"/lofter/user/i","view":0,"parameters":{"name":"Lofter user name, can be found in the URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User","maintainers":["hondajojo","nczitzk","LucunJi"],"location":"user.ts"}' :test='{"code":0}' />

## Magnum Photos <Site url="magnumphotos.com"/>

### Magazine <Site url="magnumphotos.com/" size="sm" />

<Route namespace="magnumphotos" :data='{"path":"/magazine","categories":["picture","popular"],"view":2,"example":"/magnumphotos/magazine","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["magnumphotos.com/"]}],"name":"Magazine","maintainers":["EthanWng97"],"url":"magnumphotos.com/","location":"magazine.ts"}' :test='{"code":0}' />

## Mastodon <Site url="mastodon.social"/>

:::tip
Official user RSS:

-   RSS: `https://**:instance**/users/**:username**.rss` ([Example](https://pawoo.net/users/pawoo_support.rss))
-   Atom: ~~`https://**:instance**/users/**:username**.atom`~~ (Only for pawoo.net, [example](https://pawoo.net/users/pawoo_support.atom))

These feed do not include boosts (a.k.a. reblogs). RSSHub provides a feed for user timeline based on the Mastodon API, but to use that, you may need to create application on a Mastodon instance, and configure your RSSHub instance. Check the [Deploy Guide](https://docs.rsshub.app/deploy/config#route-specific-configurations) for route-specific configurations.
:::

### Instance timeline (local) <Site url="mastodon.social" size="sm" />

<Route namespace="mastodon" :data='{"path":"/timeline/:site/:only_media?","categories":["social-media","popular"],"view":1,"example":"/mastodon/timeline/pawoo.net/true","parameters":{"site":"instance address, only domain, no `http://` or `https://` protocol header","only_media":{"description":"whether only display media content, default to false, any value to true","options":[{"value":"true","label":"true"},{"value":"false","label":"false"}],"default":"false"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Instance timeline (local)","maintainers":["hoilc"],"description":"If the instance address is not `mastodon.social` or `pawoo.net`, then the route requires `ALLOW_USER_SUPPLY_UNSAFE_DOMAIN` to be `true`.","location":"timeline-local.ts"}' :test='{"code":0}' />

If the instance address is not `mastodon.social` or `pawoo.net`, then the route requires `ALLOW_USER_SUPPLY_UNSAFE_DOMAIN` to be `true`.

### Instance timeline (federated) <Site url="mastodon.social" size="sm" />

<Route namespace="mastodon" :data='{"path":"/remote/:site/:only_media?","categories":["social-media","popular"],"view":1,"example":"/mastodon/remote/pawoo.net/true","parameters":{"site":"instance address, only domain, no `http://` or `https://` protocol header","only_media":{"description":"whether only display media content, default to false, any value to true","options":[{"value":"true","label":"true"},{"value":"false","label":"false"}],"default":"false"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Instance timeline (federated)","maintainers":["hoilc"],"description":"If the instance address is not `mastodon.social` or `pawoo.net`, then the route requires `ALLOW_USER_SUPPLY_UNSAFE_DOMAIN` to be `true`.","location":"timeline-remote.ts"}' :test='{"code":0}' />

If the instance address is not `mastodon.social` or `pawoo.net`, then the route requires `ALLOW_USER_SUPPLY_UNSAFE_DOMAIN` to be `true`.

### User timeline (by account ID) <Site url="mastodon.social" size="sm" />

<Route namespace="mastodon" :data='{"path":"/account_id/:site/:account_id/statuses/:only_media?","categories":["social-media","popular"],"view":1,"example":"/mastodon/account_id/mas.to/109300507275095341/statuses/false","parameters":{"site":"instance address, only domain, no `http://` or `https://` protocol header","account_id":"account ID, you can get it from `https://INSTANCE/api/v1/accounts/lookup?acct=USERNAME` api","only_media":{"description":"whether only display media content, default to false, any value to true","options":[{"value":"true","label":"true"},{"value":"false","label":"false"}],"default":"false"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User timeline (by account ID)","maintainers":["notofoe","pseudoyu"],"location":"account-id.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1066)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### User timeline <Site url="mastodon.social" size="sm" />

<Route namespace="mastodon" :data='{"path":"/acct/:acct/statuses/:only_media?","categories":["social-media","popular"],"view":1,"example":"/mastodon/acct/Mastodon@mastodon.social/statuses","parameters":{"acct":"Webfinger account URI, like `user@host`","only_media":{"description":"whether only display media content, default to false, any value to true","options":[{"value":"true","label":"true"},{"value":"false","label":"false"}],"default":"false"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User timeline","maintainers":["notofoe"],"description":"Started from Mastodon v4.0.0, the use of the `search` API in the route no longer requires a user token.\nIf the domain of your Webfinger account URI is the same as the API host of the instance (i.e., no delegation called in some other protocols), then no configuration is required and the route is available out of the box.\nHowever, you can still specify these route-specific configurations if you need to override them.","location":"acct.ts"}' :test='{"code":1,"message":"AssertionError: expected [ …(3) ] to not include &#39;https://mastodon.social/users/Mastodo…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:1143:17)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:920:17)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@5.1.2/node_modules/chai/chai.js:1610:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1067)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)"}' />

Started from Mastodon v4.0.0, the use of the `search` API in the route no longer requires a user token.
If the domain of your Webfinger account URI is the same as the API host of the instance (i.e., no delegation called in some other protocols), then no configuration is required and the route is available out of the box.
However, you can still specify these route-specific configurations if you need to override them.

## Misskey <Site url="misskey.io"/>

### Featured Notes <Site url="misskey.io" size="sm" />

<Route namespace="misskey" :data='{"path":"/notes/featured/:site","categories":["social-media","popular"],"view":1,"example":"/misskey/notes/featured/misskey.io","parameters":{"site":"instance address, domain only, without `http://` or `https://` protocol header"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Featured Notes","maintainers":["Misaka13514"],"location":"featured-notes.ts"}' :test='{"code":0}' />

### User timeline <Site url="misskey.io" size="sm" />

<Route namespace="misskey" :data='{"path":"/users/notes/:username/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/misskey/users/notes/support@misskey.io","parameters":{"username":"Misskey username in the format of username@instance.domain","routeParams":"\n| Key         | Description                        | Accepted Values | Default |\n| ----------- | ---------------------------------- | --------------- | ------- |\n| withRenotes | Include renotes in the timeline    | 0/1/true/false  | false   |\n| mediaOnly   | Only return posts containing media | 0/1/true/false  | false   |\n\nNote: `withRenotes` and `mediaOnly` are mutually exclusive and cannot both be set to true.\n\nExamples:\n- /misskey/users/notes/mttb2ccp@misskey.io/withRenotes=true\n- /misskey/users/notes/mttb2ccp@misskey.io/mediaOnly=true"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User timeline","maintainers":["siygle","SnowAgar25"],"location":"user-timeline.ts"}' :test='{"code":0}' />

## NASA <Site url="apod.nasa.gov"/>

### Astronomy Picture of the Day <Site url="apod.nasa.govundefined" size="sm" />

<Route namespace="nasa" :data='{"path":"/apod","categories":["picture","popular"],"view":2,"example":"/nasa/apod","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["apod.nasa.govundefined"]}],"name":"Astronomy Picture of the Day","maintainers":["nczitzk","williamgateszhao"],"url":"apod.nasa.govundefined","location":"apod.ts"}' :test='{"code":0}' />

## New Yorker <Site url="newyorker.com"/>

### Articles <Site url="newyorker.com" size="sm" />

<Route namespace="newyorker" :data='{"path":"/:category","categories":["traditional-media","popular"],"view":0,"example":"/newyorker/latest","parameters":{"category":"tab name. can be found at url"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["newyorker.com/:category?"]}],"name":"Articles","maintainers":["EthanWng97","pseudoyu"],"location":"news.ts"}' :test='{"code":0}' />

## NGA <Site url="bbs.nga.cn"/>

### 分区帖子 <Site url="bbs.nga.cn" size="sm" />

<Route namespace="nga" :data='{"path":"/forum/:fid/:recommend?","categories":["bbs","popular"],"view":0,"example":"/nga/forum/489","parameters":{"fid":"分区 id, 可在分区主页 URL 找到, 没有 fid 时 stid 同样适用","recommend":"是否只显示精华主题, 留空为否, 任意值为是"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"分区帖子","maintainers":["xyqfer"],"location":"forum.ts"}' :test='{"code":1,"message":"AssertionError: expected [ …(35) ] to not include &#39;https://nga.178.com/read.php?tid=4189…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:1143:17)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:920:17)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@5.1.2/node_modules/chai/chai.js:1610:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1168)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)"}' />

## NHK <Site url="www3.nhk.or.jp"/>

### WORLD-JAPAN - Top Stories <Site url="www3.nhk.or.jp" size="sm" />

<Route namespace="nhk" :data='{"path":"/news/:lang?","categories":["traditional-media","popular"],"view":0,"example":"/nhk/news/en","parameters":{"lang":{"description":"Language, see below","options":[{"value":"ar","label":"العربية"},{"value":"bn","label":"বাংলা"},{"value":"my","label":"မြန်မာဘာသာစကား"},{"value":"zh","label":"中文（简体）"},{"value":"zt","label":"中文（繁體）"},{"value":"en","label":"English"},{"value":"fr","label":"Français"},{"value":"hi","label":"हिन्दी"},{"value":"id","label":"Bahasa Indonesia"},{"value":"ko","label":"코리언"},{"value":"fa","label":"فارسی"},{"value":"pt","label":"Português"},{"value":"ru","label":"Русский"},{"value":"es","label":"Español"},{"value":"sw","label":"Kiswahili"},{"value":"th","label":"ภาษาไทย"},{"value":"tr","label":"Türkçe"},{"value":"uk","label":"Українська"},{"value":"ur","label":"اردو"},{"value":"vi","label":"Tiếng Việt"}],"default":"en"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www3.nhk.or.jp/nhkworld/:lang/news/list/","www3.nhk.or.jp/nhkworld/:lang/news/"],"target":"/news/:lang"}],"name":"WORLD-JAPAN - Top Stories","maintainers":["TonyRL","pseudoyu"],"location":"news.ts"}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:66:18)\n    at listOnTimeout (node:internal/timers:581:17)\n    at processTimers (node:internal/timers:519:7)"}' />

## Notefolio <Site url="notefolio.net"/>

### Works <Site url="notefolio.net/search" size="sm" />

<Route namespace="notefolio" :data='{"path":"/search/:category?/:order?/:time?/:query?","categories":["design","popular"],"view":2,"example":"/notefolio/search/1/pick/all/life","parameters":{"category":{"description":"Category, see below","options":[{"value":"all","label":"All (전체)"},{"value":"1","label":"Video / Motion Graphics (영상/모션그래픽)"},{"value":"2","label":"Graphic Design (그래픽 디자인)"},{"value":"3","label":"Branding / Editing (브랜딩/편집)"},{"value":"4","label":"UI/UX (UI/UX)"},{"value":"5","label":"Illustration (일러스트레이션)"},{"value":"6","label":"Digital Art (디지털 아트)"},{"value":"7","label":"Character Design (캐릭터 디자인)"},{"value":"8","label":"Product Package Design (제품/패키지 디자인)"},{"value":"9","label":"Photography (포토그래피)"},{"value":"10","label":"Typography (타이포그래피)"},{"value":"11","label":"Crafts (공예)"},{"value":"12","label":"Fine Art (파인아트)"}],"default":"all"},"order":{"description":"Order, `pick` as Notefolio Pick, `published` as Newest, `like` as like, `pick` by default","options":[{"value":"pick","label":"Notefolio Pick"},{"value":"published","label":"Newest"},{"value":"like","label":"Like"}],"default":"pick"},"time":{"description":"Time","options":[{"value":"all","label":"All the time"},{"value":"one-day","label":"Latest 24 hours"},{"value":"week","label":"Latest week"},{"value":"month","label":"Latest month"},{"value":"three-month","label":"Latest 3 months"}],"default":"all"},"query":"Keyword, empty by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["notefolio.net/search"]}],"name":"Works","maintainers":["BianTan"],"url":"notefolio.net/search","description":"| Category | Name in Korean     | Name in English         |\n  | -------- | ------------------ | ----------------------- |\n  | all      | 전체               | All                     |\n  | 1        | 영상/모션그래픽    | Video / Motion Graphics |\n  | 2        | 그래픽 디자인      | Graphic Design          |\n  | 3        | 브랜딩/편집        | Branding / Editing      |\n  | 4        | UI/UX              | UI/UX                   |\n  | 5        | 일러스트레이션     | Illustration            |\n  | 6        | 디지털 아트        | Digital Art             |\n  | 7        | 캐릭터 디자인      | Character Design        |\n  | 8        | 제품/패키지 디자인 | Product Package Design  |\n  | 9        | 포토그래피         | Photography             |\n  | 10       | 타이포그래피       | Typography              |\n  | 11       | 공예               | Crafts                  |\n  | 12       | 파인아트           | Fine Art                |","location":"search.ts"}' :test='{"code":0}' />

| Category | Name in Korean     | Name in English         |
  | -------- | ------------------ | ----------------------- |
  | all      | 전체               | All                     |
  | 1        | 영상/모션그래픽    | Video / Motion Graphics |
  | 2        | 그래픽 디자인      | Graphic Design          |
  | 3        | 브랜딩/편집        | Branding / Editing      |
  | 4        | UI/UX              | UI/UX                   |
  | 5        | 일러스트레이션     | Illustration            |
  | 6        | 디지털 아트        | Digital Art             |
  | 7        | 캐릭터 디자인      | Character Design        |
  | 8        | 제품/패키지 디자인 | Product Package Design  |
  | 9        | 포토그래피         | Photography             |
  | 10       | 타이포그래피       | Typography              |
  | 11       | 공예               | Crafts                  |
  | 12       | 파인아트           | Fine Art                |

## Pixabay <Site url="pixabay.com"/>

### Search <Site url="pixabay.com" size="sm" />

<Route namespace="pixabay" :data='{"path":"/search/:q/:order?","categories":["picture","popular"],"view":2,"example":"/pixabay/search/cat","parameters":{"q":"Search term","order":{"description":"Order","options":[{"value":"popular","label":"popular"},{"value":"latest","label":"latest"}],"default":"latest"}},"features":{"requireConfig":[{"name":"PIXABAY_KEY","optional":true,"description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["pixabay.com/:searchType/search/:q"],"target":"/search/:q"}],"name":"Search","maintainers":["TonyRL"],"location":"search.ts"}' :test='{"code":0}' />

## pixiv <Site url="www.pixiv.net"/>

### Keyword <Site url="www.pixiv.net" size="sm" />

<Route namespace="pixiv" :data='{"path":"/search/:keyword/:order?/:mode?/:include_ai?","categories":["social-media","popular"],"view":2,"example":"/pixiv/search/Nezuko/popular","parameters":{"keyword":"keyword","order":{"description":"rank mode, empty or other for time order, popular for popular order","default":"date","options":[{"label":"time order","value":"date"},{"label":"popular order","value":"popular"}]},"mode":{"description":"filte R18 content","default":"no","options":[{"label":"only not R18","value":"safe"},{"label":"only R18","value":"r18"},{"label":"no filter","value":"no"}]},"include_ai":{"description":"whether AI-generated content is included","default":"yes","options":[{"label":"does not include AI-generated content","value":"no"},{"label":"include AI-generated content","value":"yes"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Keyword","maintainers":["DIYgod"],"location":"search.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1338)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### Rankings <Site url="www.pixiv.net" size="sm" />

<Route namespace="pixiv" :data='{"path":"/ranking/:mode/:date?","categories":["social-media","popular"],"view":2,"example":"/pixiv/ranking/week","parameters":{"mode":{"description":"rank type","options":[{"value":"day","label":"daily rank"},{"value":"week","label":"weekly rank"},{"value":"month","label":"monthly rank"},{"value":"day_male","label":"male rank"},{"value":"day_felame","label":"female rank"},{"value":"day_ai","label":"AI-generated work Rankings"},{"value":"week_original","label":"original rank"},{"value":"week_rookie","label":"rookie user rank"},{"value":"day_r18","label":"R-18 daily rank"},{"value":"day_r18_ai","label":"R-18 AI-generated work"},{"value":"day_male_r18","label":"R-18 male rank"},{"value":"day_female_r18","label":"R-18 female rank"},{"value":"week_r18","label":"R-18 weekly rank"},{"value":"week_r18g","label":"R-18G rank"}],"default":"day"},"date":"format: `2018-4-25`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Rankings","maintainers":["EYHN"],"location":"ranking.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1337)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### User Activity <Site url="www.pixiv.net" size="sm" />

<Route namespace="pixiv" :data='{"path":"/user/:id","categories":["social-media","popular"],"view":2,"example":"/pixiv/user/15288095","parameters":{"id":"user id, available in user&#39;s homepage URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.pixiv.net/users/:id"]}],"name":"User Activity","maintainers":["DIYgod"],"location":"user.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1339)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

## pixivision <Site url="www.pixivision.net"/>

### Category <Site url="www.pixivision.net" size="sm" />

<Route namespace="pixivision" :data='{"path":"/:lang/:category?","categories":["anime","popular"],"view":0,"example":"/pixivision/zh-tw","parameters":{"lang":"Language","category":"Category"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Category","maintainers":["SnowAgar25"],"description":":::tip\n  `https://www.pixivision.net/zh-tw/c/interview` → `/pixivision/zh-tw/interview`\n  :::","radar":[{"source":["www.pixivision.net/:lang"],"target":"/:lang"},{"source":["www.pixivision.net/:lang/c/:category"],"target":"/:lang/:category"}],"location":"index.ts"}' :test='{"code":0}' />

:::tip
  `https://www.pixivision.net/zh-tw/c/interview` → `/pixivision/zh-tw/interview`
  :::

## Plurk <Site url="plurk.com"/>

### Top <Site url="plurk.com" size="sm" />

<Route namespace="plurk" :data='{"path":"/top/:category?/:lang?","categories":["social-media","popular"],"view":1,"example":"/plurk/top/topReplurks","parameters":{"category":"Category, see the table below, `topReplurks` by default","lang":"Language, see the table below, `en` by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Top","maintainers":["TonyRL"],"description":"| Top Replurks | Top Favorites | Top Responded |\n  | ------------ | ------------- | ------------- |\n  | topReplurks  | topFavorites  | topResponded  |\n\n  | English | 中文（繁體） |\n  | ------- | ------------ |\n  | en      | zh           |","location":"top.ts"}' :test='{"code":0}' />

| Top Replurks | Top Favorites | Top Responded |
  | ------------ | ------------- | ------------- |
  | topReplurks  | topFavorites  | topResponded  |

  | English | 中文（繁體） |
  | ------- | ------------ |
  | en      | zh           |

### Topic <Site url="plurk.com" size="sm" />

<Route namespace="plurk" :data='{"path":"/topic/:topic","categories":["social-media","popular"],"view":1,"example":"/plurk/topic/standwithukraine","parameters":{"topic":"Topic ID, can be found in URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["plurk.com/topic/:topic"]}],"name":"Topic","maintainers":["TonyRL"],"location":"topic.ts"}' :test='{"code":0}' />

### User <Site url="plurk.com" size="sm" />

<Route namespace="plurk" :data='{"path":"/user/:user","categories":["social-media","popular"],"view":1,"example":"/plurk/user/plurkoffice","parameters":{"user":"User ID, can be found in URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User","maintainers":["TonyRL"],"location":"user.ts"}' :test='{"code":0}' />

## Podwise <Site url="podwise.ai"/>

### Collections <Site url="podwise.ai" size="sm" />

<Route namespace="podwise" :data='{"path":"/explore","categories":["multimedia","popular"],"view":4,"example":"/podwise/explore","radar":[{"source":["podwise.ai","podwise.ai/explore"]}],"name":"Collections","maintainers":["lyling"],"location":"collections.ts"}' :test='{"code":0}' />

## PornHub <Site url="pornhub.com"/>

### Category <Site url="pornhub.com" size="sm" />

<Route namespace="pornhub" :data='{"path":"/category/:caty","categories":["multimedia","popular"],"view":3,"example":"/pornhub/category/popular-with-women","parameters":{"caty":"category, see [categories](https://www.pornhub.com/webmasters/categories)"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Category","maintainers":["nczitzk"],"location":"category.ts"}' :test='{"code":0}' />

### Keyword Search <Site url="pornhub.com" size="sm" />

<Route namespace="pornhub" :data='{"path":"/search/:keyword","categories":["multimedia","popular"],"view":3,"example":"/pornhub/search/stepsister","parameters":{"keyword":"keyword"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Keyword Search","maintainers":["nczitzk"],"location":"search.ts"}' :test='{"code":0}' />

### Model <Site url="pornhub.com" size="sm" />

<Route namespace="pornhub" :data='{"path":"/model/:username/:language?/:sort?","categories":["multimedia","popular"],"view":3,"example":"/pornhub/model/stacy-starando","parameters":{"language":"language, see below","username":"username, part of the url e.g. `pornhub.com/model/stacy-starando`","sort":"sorting method, see below"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["pornhub.com/model/:username/*"],"target":"/model/:username"}],"name":"Model","maintainers":["I2IMk","queensferryme"],"location":"model.ts"}' :test='{"code":0}' />

### Pornstar <Site url="pornhub.com" size="sm" />

<Route namespace="pornhub" :data='{"path":"/pornstar/:username/:language?/:sort?","categories":["multimedia","popular"],"view":3,"example":"/pornhub/pornstar/june-liu/www/mr","parameters":{"username":{"description":"username, part of the url e.g. `pornhub.com/pornstar/june-liu`"},"language":{"description":"language","options":[{"value":"www","label":"English"},{"value":"de","label":"Deutsch"},{"value":"es","label":"Español"},{"value":"fr","label":"Français"},{"value":"it","label":"Italiano"},{"value":"ja","label":"日本語"},{"value":"pt","label":"Português"},{"value":"pl","label":"Polski"},{"value":"rt","label":"Русский"},{"value":"nl","label":"Dutch"},{"value":"cs","label":"Czech"},{"value":"cn","label":"中文（简体）"}],"default":"www"},"sort":{"description":"sorting method, leave empty for `Best`","options":[{"label":"Most Recent","value":"mr"},{"label":"Most Viewed","value":"mv"},{"label":"Top Rated","value":"tr"},{"label":"Longest","value":"lg"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["pornhub.com/pornstar/:username/*"],"target":"/pornstar/:username"}],"name":"Pornstar","maintainers":["I2IMk","queensferryme"],"location":"pornstar.ts"}' :test='{"code":0}' />

## PlayStation Store <Site url="www.playstation.com"/>

### PlayStation Monthly Games <Site url="www.playstation.com/en-sg/ps-plus/whats-new" size="sm" />

<Route namespace="ps" :data='{"path":"/monthly-games","categories":["game","popular"],"view":5,"example":"/ps/monthly-games","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.playstation.com/en-sg/ps-plus/whats-new"]}],"name":"PlayStation Monthly Games","maintainers":["justjustCC"],"url":"www.playstation.com/en-sg/ps-plus/whats-new","location":"monthly-games.ts"}' :test='{"code":0}' />

## Reuters <Site url="reuters.com"/>

:::tip
You can use `sophi=true` query parameter to invoke the **experimental** method, which can, if possible, fetch more articles(between 20 and 100) with `limit` given. But some articles from the old method might not be available.
:::

### Category/Topic/Author <Site url="reuters.com" size="sm" />

<Route namespace="reuters" :data='{"path":"/:category/:topic?","categories":["traditional-media","popular"],"view":0,"example":"/reuters/world/us","parameters":{"category":{"description":"find it in the URL, or tables below","options":[{"value":"world","label":"World"},{"value":"business","label":"Business"},{"value":"legal","label":"Legal"},{"value":"markets","label":"Markets"},{"value":"breakingviews","label":"Breakingviews"},{"value":"technology","label":"Technology"},{"value":"graphics","label":"Graphics"},{"value":"authors","label":"Authors"}],"default":"world"},"topic":{"description":"find it in the URL, or tables below, leave empty for `All`","options":[{"value":"africa","label":"Africa"},{"value":"americas","label":"Americas"},{"value":"asia-pacific","label":"Asia Pacific"},{"value":"china","label":"China"},{"value":"europe","label":"Europe"},{"value":"india","label":"India"},{"value":"middle-east","label":"Middle East"},{"value":"uk","label":"United Kingdom"},{"value":"us","label":"United States"},{"value":"the-great-reboot","label":"The Great Reboot"},{"value":"reuters-next","label":"Reuters Next"},{"value":"aerospace-defense","label":"Aerospace & Defense"},{"value":"autos-transportation","label":"Autos & Transportation"},{"value":"energy","label":"Energy"},{"value":"environment","label":"Environment"},{"value":"finance","label":"Finance"},{"value":"healthcare-pharmaceuticals","label":"Healthcare & Pharmaceuticals"},{"value":"media-telecom","label":"Media & Telecom"},{"value":"retail-consumer","label":"Retail & Consumer"},{"value":"sustainable-business","label":"Sustainable Business"},{"value":"charged","label":"Charged"},{"value":"future-of-health","label":"Future of Health"},{"value":"future-of-money","label":"Future of Money"},{"value":"take-five","label":"Take Five"},{"value":"reuters-impact","label":"Reuters Impact"},{"value":"government","label":"Government"},{"value":"legalindustry","label":"Legal Industry"},{"value":"litigation","label":"Litigation"},{"value":"transactional","label":"Transactional"}],"default":"us"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["reuters.com/:category/:topic?","reuters.com/"]}],"name":"Category/Topic/Author","maintainers":["LyleLee","HenryQW","proletarius101","black-desk","nczitzk"],"description":"-   `:category`:\n\n      | World | Business | Legal | Markets | Breakingviews | Technology | Graphics |\n      | ----- | -------- | ----- | ------- | ------------- | ---------- | -------- |\n      | world | business | legal | markets | breakingviews | technology | graphics |\n\n  -   `world/:topic`:\n\n      | All | Africa | Americas | Asia Pacific | China | Europe | India | Middle East | United Kingdom | United States | The Great Reboot | Reuters Next |\n      | --- | ------ | -------- | ------------ | ----- | ------ | ----- | ----------- | -------------- | ------------- | ---------------- | ------------ |\n      |     | africa | americas | asia-pacific | china | europe | india | middle-east | uk             | us            | the-great-reboot | reuters-next |\n\n  -   `business/:topic`:\n\n      | All | Aerospace & Defense | Autos & Transportation | Energy | Environment | Finance | Healthcare & Pharmaceuticals | Media & Telecom | Retail & Consumer | Sustainable Business | Charged | Future of Health | Future of Money | Take Five | Reuters Impact |\n      | --- | ------------------- | ---------------------- | ------ | ----------- | ------- | ---------------------------- | --------------- | ----------------- | -------------------- | ------- | ---------------- | --------------- | --------- | -------------- |\n      |     | aerospace-defense   | autos-transportation   | energy | environment | finance | healthcare-pharmaceuticals   | media-telecom   | retail-consumer   | sustainable-business | charged | future-of-health | future-of-money | take-five | reuters-impact |\n\n  -   `legal/:topic`:\n\n      | All | Government | Legal Industry | Litigation | Transactional |\n      | --- | ---------- | -------------- | ---------- | ------------- |\n      |     | government | legalindustry  | litigation | transactional |\n\n  -   `authors/:topic`:\n\n      | Default | Jonathan Landay | any other authors |\n      | ------- | --------------- | ----------------- |\n      | reuters | jonathan-landay | their name in URL |\n\n  More could be found in the URL of the category/topic page.","location":"common.ts"}' :test='{"code":0}' />

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

## RSSHub <Site url="docs.rsshub.app"/>

### New routes <Site url="docs.rsshub.app/*" size="sm" />

<Route namespace="rsshub" :data='{"path":"/routes/:lang?","categories":["program-update","popular"],"view":5,"example":"/rsshub/routes/en","parameters":{"lang":{"description":"Language","options":[{"label":"Chinese","value":"zh"},{"label":"English","value":"en"}],"default":"en"}},"radar":[{"source":["docs.rsshub.app/*"],"target":"/routes"}],"name":"New routes","maintainers":["DIYgod"],"url":"docs.rsshub.app/*","location":"routes.ts"}' :test='{"code":1,"message":"AssertionError: expected [ &#39;bsky\"/keyword/:keyword\"&#39;, …(792) ] to not include &#39;v2ex\"/xna\"&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:1143:17)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:920:17)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@5.1.2/node_modules/chai/chai.js:1610:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1436)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)"}' />

## Solidot <Site url="www.solidot.org"/>

### 最新消息 <Site url="www.solidot.org" size="sm" />

<Route namespace="solidot" :data='{"path":"/:type?","categories":["traditional-media","popular"],"view":0,"example":"/solidot/linux","parameters":{"type":{"description":"消息类型，在网站上方选择后复制子域名或参见 [https://www.solidot.org/index.rss](https://www.solidot.org/index.rss) 即可","options":[{"value":"www","label":"全部"},{"value":"startup","label":"创业"},{"value":"linux","label":"Linux"},{"value":"science","label":"科学"},{"value":"technology","label":"科技"},{"value":"mobile","label":"移动"},{"value":"apple","label":"苹果"},{"value":"hardware","label":"硬件"},{"value":"software","label":"软件"},{"value":"security","label":"安全"},{"value":"games","label":"游戏"},{"value":"books","label":"书籍"},{"value":"ask","label":"ask"},{"value":"idle","label":"idle"},{"value":"blog","label":"博客"},{"value":"cloud","label":"云计算"},{"value":"story","label":"奇客故事"}],"default":"www"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"最新消息","maintainers":["sgqy","hang333","TonyRL"],"location":"main.ts"}' :test='{"code":0}' />

## Spotify <Site url="open.spotify.com"/>

### Artist Albums <Site url="open.spotify.com" size="sm" />

<Route namespace="spotify" :data='{"path":"/artist/:id","categories":["multimedia","popular"],"view":4,"example":"/spotify/artist/6k9TBCxyr4bXwZ8Y21Kwn1","parameters":{"id":"Artist ID"},"features":{"requireConfig":[{"name":"SPOTIFY_CLIENT_ID","description":""},{"name":"SPOTIFY_CLIENT_SECRET","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["open.spotify.com/artist/:id"]}],"name":"Artist Albums","maintainers":["outloudvi"],"location":"artist.ts"}' :test='undefined' />

### Playlist <Site url="open.spotify.com" size="sm" />

<Route namespace="spotify" :data='{"path":"/playlist/:id","categories":["multimedia","popular"],"view":4,"example":"/spotify/playlist/4UBVy1LttvodwivPUuwJk2","parameters":{"id":"Playlist ID"},"features":{"requireConfig":[{"name":"SPOTIFY_CLIENT_ID","description":""},{"name":"SPOTIFY_CLIENT_SECRET","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["open.spotify.com/playlist/:id"]}],"name":"Playlist","maintainers":["outloudvi"],"location":"playlist.ts"}' :test='undefined' />

## Stock Edge <Site url="web.stockedge.com"/>

### Daily Updates News <Site url="web.stockedge.com/daily-updates/news" size="sm" />

<Route namespace="stockedge" :data='{"path":"/daily-updates/news","categories":["finance","popular"],"view":5,"example":"/stockedge/daily-updates/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["web.stockedge.com/daily-updates/news"]}],"name":"Daily Updates News","maintainers":["Rjnishant530"],"url":"web.stockedge.com/daily-updates/news","location":"daily-news.ts"}' :test='{"code":0}' />

## The Economist <Site url="economist.com"/>

### Category <Site url="economist.com" size="sm" />

<Route namespace="economist" :data='{"path":"/:endpoint","categories":["traditional-media","popular"],"view":0,"example":"/economist/latest","parameters":{"endpoint":"Category name, can be found on the [official page](https://www.economist.com/rss). For example, https://www.economist.com/china/rss.xml to china"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["economist.com/:endpoint"]}],"name":"Category","maintainers":["ImSingee"],"location":"full.ts"}' :test='{"code":0}' />

### Espresso <Site url="economist.com/the-world-in-brief" size="sm" />

<Route namespace="economist" :data='{"path":"/espresso","categories":["traditional-media","popular"],"view":0,"example":"/economist/espresso","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["economist.com/the-world-in-brief","economist.com/espresso"]}],"name":"Espresso","maintainers":["TonyRL"],"url":"economist.com/the-world-in-brief","location":"espresso.ts"}' :test='{"code":0}' />

## The New York Times <Site url="nytimes.com"/>

### Best Seller Books <Site url="nytimes.com/" size="sm" />

<Route namespace="nytimes" :data='{"path":"/book/:category?","categories":["traditional-media","popular"],"view":5,"example":"/nytimes/book/combined-print-and-e-book-nonfiction","parameters":{"category":{"description":"Category, can be found on the [official page](https://www.nytimes.com/books/best-sellers/)","options":[{"value":"combined-print-and-e-book-nonfiction","label":"Combined Print & E-Book Nonfiction"},{"value":"hardcover-nonfiction","label":"Hardcover Nonfiction"},{"value":"paperback-nonfiction","label":"Paperback Nonfiction"},{"value":"advice-how-to-and-miscellaneous","label":"Advice, How-To & Miscellaneous"},{"value":"combined-print-and-e-book-fiction","label":"Combined Print & E-Book Fiction"},{"value":"hardcover-fiction","label":"Hardcover Fiction"},{"value":"trade-fiction-paperback","label":"Paperback Trade Fiction"},{"value":"childrens-middle-grade-hardcover","label":"Children&#39;s Middle Grade Hardcover"},{"value":"picture-books","label":"Picture Books"},{"value":"series-books","label":"Series Books"},{"value":"young-adult-hardcover","label":"Young Adult Hardcover"}],"default":"combined-print-and-e-book-nonfiction"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nytimes.com/"],"target":""}],"name":"Best Seller Books","maintainers":["melvinto","pseudoyu"],"url":"nytimes.com/","location":"book.ts"}' :test='{"code":0}' />

### Daily Briefing <Site url="nytimes.com/" size="sm" />

<Route namespace="nytimes" :data='{"path":"/daily_briefing_chinese","categories":["traditional-media","popular"],"example":"/nytimes/daily_briefing_chinese","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nytimes.com/"],"target":""}],"name":"Daily Briefing","maintainers":["yueyericardo","nczitzk"],"url":"nytimes.com/","description":"URL: [https://www.nytimes.com/zh-hans/series/daily-briefing-chinese](https://www.nytimes.com/zh-hans/series/daily-briefing-chinese)","location":"daily-briefing-chinese.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1262)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

URL: [https://www.nytimes.com/zh-hans/series/daily-briefing-chinese](https://www.nytimes.com/zh-hans/series/daily-briefing-chinese)

### News <Site url="nytimes.com/" size="sm" />

<Route namespace="nytimes" :data='{"path":"/:lang?","categories":["traditional-media","popular"],"view":0,"example":"/nytimes/dual","parameters":{"lang":{"description":"language, default to Chinese","options":[{"value":"dual","label":"Chinese-English"},{"value":"en","label":"English"},{"value":"traditionalchinese","label":"Traditional Chinese"},{"value":"dual-traditionalchinese","label":"Chinese-English (Traditional Chinese)"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nytimes.com/"],"target":""}],"name":"News","maintainers":["HenryQW","pseudoyu"],"url":"nytimes.com/","description":"By extracting the full text of articles, we provide a better reading experience (full text articles) over the official one.","location":"index.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1263)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

By extracting the full text of articles, we provide a better reading experience (full text articles) over the official one.

## Telegram <Site url="t.me"/>

### Channel <Site url="t.me" size="sm" />

<Route namespace="telegram" :data='{"path":"/channel/:username/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/telegram/channel/awesomeRSSHub","parameters":{"username":"channel username","routeParams":"extra parameters, see the table below\n| Key                    | Description                                                           | Accepts                                            | Defaults to  |\n| :--------------------: | :-------------------------------------------------------------------: | :------------------------------------------------: | :----------: |\n| showLinkPreview        | Show the link preview from Telegram                                   | 0/1/true/false                                     | true         |\n| showViaBot             | For messages sent via bot, show the bot                               | 0/1/true/false                                     | true         |\n| showReplyTo            | For reply messages, show the target of the reply                      | 0/1/true/false                                     | true         |\n| showFwdFrom            | For forwarded messages, show the forwarding source                    | 0/1/true/false                                     | true         |\n| showFwdFromAuthor      | For forwarded messages, show the author of the forwarding source      | 0/1/true/false                                     | true         |\n| showInlineButtons      | Show inline buttons                                                   | 0/1/true/false                                     | false        |\n| showMediaTagInTitle    | Show media tags in the title                                          | 0/1/true/false                                     | true         |\n| showMediaTagAsEmoji    | Show media tags as emoji                                              | 0/1/true/false                                     | true         |\n| showHashtagAsHyperlink | Show hashtags as hyperlinks (`https://t.me/s/channel?q=%23hashtag`) | 0/1/true/false                                     | true         |\n| includeFwd             | Include forwarded messages                                            | 0/1/true/false                                     | true         |\n| includeReply           | Include reply messages                                                | 0/1/true/false                                     | true         |\n| includeServiceMsg      | Include service messages (e.g. message pinned, channel photo updated) | 0/1/true/false                                     | true         |\n| includeUnsupportedMsg  | Include messages unsupported by t.me                                  | 0/1/true/false                                     | false        |\n| searchQuery            | search query                                                          | keywords; replace `#hashtag` with `%23hashtag` | (no keyword) |\n\nSpecify different option values than default values can meet different needs, URL\n\n```\nhttps://rsshub.app/telegram/channel/NewlearnerChannel/showLinkPreview=0&showViaBot=0&showReplyTo=0&showFwdFrom=0&showFwdFromAuthor=0&showInlineButtons=0&showMediaTagInTitle=1&showMediaTagAsEmoji=1&includeFwd=0&includeReply=1&includeServiceMsg=0&includeUnsupportedMsg=0\n```\n\ngenerates an RSS without any link previews and annoying metadata, with emoji media tags in the title, without forwarded messages (but with reply messages), and without messages you don&#39;t care about (service messages and unsupported messages), for people who prefer pure subscriptions.\n\nFor backward compatibility reasons, invalid `routeParams` will be treated as `searchQuery` .\n"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["t.me/s/:username"],"target":"/channel/:username"}],"name":"Channel","maintainers":["DIYgod","Rongronggg9","pseudoyu"],"description":"\n  :::tip\n  Due to Telegram restrictions, some channels involving pornography, copyright, and politics cannot be subscribed. You can confirm by visiting `https://t.me/s/:username`.\n  :::","location":"channel.ts"}' :test='{"code":0}' />


  :::tip
  Due to Telegram restrictions, some channels involving pornography, copyright, and politics cannot be subscribed. You can confirm by visiting `https://t.me/s/:username`.
  :::

### Sticker Pack <Site url="t.me" size="sm" />

<Route namespace="telegram" :data='{"path":"/stickerpack/:name","categories":["social-media","popular"],"view":2,"example":"/telegram/stickerpack/DIYgod","parameters":{"name":"Sticker Pack name, available in the sharing URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Sticker Pack","maintainers":["DIYgod"],"location":"stickerpack.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1671)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### Telegram Blog <Site url="telegram.org/blog" size="sm" />

<Route namespace="telegram" :data='{"path":"/blog","categories":["social-media","popular"],"view":0,"example":"/telegram/blog","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["telegram.org/blog"]}],"name":"Telegram Blog","maintainers":["fengkx"],"url":"telegram.org/blog","location":"blog.ts"}' :test='{"code":0}' />

## The Movie Database <Site url="themoviedb.org"/>

:::tip
Refer to [https://developers.themoviedb.org/3/getting-started/languages](https://developers.themoviedb.org/3/getting-started/languages) for the language parameter in the route.
:::

### TV Show Seasons <Site url="themoviedb.org" size="sm" />

<Route namespace="themoviedb" :data='{"path":"/tv/:id/seasons/:lang?","categories":["multimedia","popular"],"view":5,"example":"/themoviedb/tv/70593/seasons/en-US","parameters":{"id":"TV show ID","lang":"Language"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"TV Show Seasons","maintainers":["x2cf"],"location":"seasons.ts"}' :test='{"code":0}' />

## Threads <Site url="threads.net"/>

### User timeline <Site url="threads.net" size="sm" />

<Route namespace="threads" :data='{"path":"/:user/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/threads/zuck","parameters":{"user":"Username","routeParams":{"description":"Extra parameters, see the table below\nSpecify options (in the format of query string) in parameter `routeParams` to control some extra features for threads\n\n| Key                            | Description                                                                                                                  | Accepts                | Defaults to |\n| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |\n| `showAuthorInTitle`            | Show author name in title                                                                                                    | `0`/`1`/`true`/`false` | `true`      |\n| `showAuthorInDesc`             | Show author name in description (RSS body)                                                                                   | `0`/`1`/`true`/`false` | `true`      |\n| `showQuotedAuthorAvatarInDesc` | Show avatar of quoted author in description (RSS body) (Not recommended if your RSS reader extracts images from description) | `0`/`1`/`true`/`false` | `false`     |\n| `showAuthorAvatarInDesc`       | Show avatar of author in description (RSS body) (Not recommended if your RSS reader extracts images from description)        | `0`/`1`/`true`/`false` | `falseP`    |\n| `showEmojiForQuotesAndReply`   | Use \"🔁\" instead of \"QT\", \"↩️\" instead of \"Re\"                                                                               | `0`/`1`/`true`/`false` | `true`      |\n| `showQuotedInTitle`            | Show quoted tweet in title                                                                                                   | `0`/`1`/`true`/`false` | `true`      |\n| `replies`                      | Show replies                                                                                                                 | `0`/`1`/`true`/`false` | `true`      |\n\nSpecify different option values than default values to improve readability. The URL\n\n```\nhttps://rsshub.app/threads/zuck/showAuthorInTitle=1&showAuthorInDesc=1&showQuotedAuthorAvatarInDesc=1&showAuthorAvatarInDesc=1&showEmojiForQuotesAndReply=1&showQuotedInTitle=1\n```"}},"name":"User timeline","maintainers":["ninboy"],"location":"index.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1702)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

## Twitch <Site url="www.twitch.tv"/>

### Channel Video <Site url="www.twitch.tv" size="sm" />

<Route namespace="twitch" :data='{"path":"/video/:login/:filter?","categories":["live","popular"],"view":3,"example":"/twitch/video/riotgames/highlights","parameters":{"login":"Twitch username","filter":{"description":"Video type, Default to all","options":[{"value":"archive","label":"Archive"},{"value":"highlights","label":"Highlights"},{"value":"all","label":"All"}],"default":"all"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.twitch.tv/:login/videos"],"target":"/video/:login"}],"name":"Channel Video","maintainers":["hoilc"],"location":"video.ts"}' :test='{"code":0}' />

### Live <Site url="www.twitch.tv" size="sm" />

<Route namespace="twitch" :data='{"path":"/live/:login","categories":["live","popular"],"view":5,"example":"/twitch/live/riotgames","parameters":{"login":"Twitch username"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Live","maintainers":["hoilc"],"location":"live.ts"}' :test='{"code":0}' />

## V2EX <Site url="v2ex.com"/>

### 标签 <Site url="v2ex.com" size="sm" />

<Route namespace="v2ex" :data='{"path":"/tab/:tabid","categories":["bbs","popular"],"view":0,"example":"/v2ex/tab/hot","parameters":{"tabid":"tab标签ID,在 URL 可以找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"标签","maintainers":["liyefox"],"location":"tab.ts"}' :test='{"code":0}' />

### 最热 / 最新主题 <Site url="v2ex.com" size="sm" />

<Route namespace="v2ex" :data='{"path":"/topics/:type","categories":["bbs","popular"],"view":0,"example":"/v2ex/topics/latest","parameters":{"type":{"description":"主题类型","options":[{"value":"hot","label":"最热主题"},{"value":"latest","label":"最新主题"}],"default":"hot"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"最热 / 最新主题","maintainers":["WhiteWorld"],"location":"topics.ts"}' :test='{"code":0}' />

## Vimeo <Site url="vimeo.com"/>

### Category <Site url="vimeo.com" size="sm" />

<Route namespace="vimeo" :data='{"path":"/category/:category/:staffpicks?","categories":["social-media","popular"],"view":3,"example":"/vimeo/category/documentary/staffpicks","parameters":{"category":"Category name can get from url like `documentary` in [https://vimeo.com/categories/documentary/videos](https://vimeo.com/categories/documentary/videos) ","staffpicks":"type `staffpicks` to sort with staffpicks"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Category","maintainers":["MisteryMonster"],"location":"category.ts"}' :test='{"code":0}' />

### User Profile <Site url="vimeo.com" size="sm" />

<Route namespace="vimeo" :data='{"path":"/user/:username/:cat?","categories":["social-media","popular"],"view":3,"example":"/vimeo/user/filmsupply/picks","parameters":{"username":"In this example [https://vimeo.com/filmsupply](https://vimeo.com/filmsupply)  is `filmsupply`","cat":"deafult for all latest videos, others categories in this example such as `Docmentary`, `Narrative`, `Drama`. Set `picks` for promote orders, just orderd like web page. When `picks` added, published date won&#39;t show up"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User Profile","maintainers":["MisteryMonster"],"description":":::tip Special category name attention\n  Some of the categories contain slash like `3D/CG` , must change the slash `/` to the vertical bar`|`.\n  :::","location":"usr-videos.ts"}' :test='{"code":1,"message":"AssertionError: expected NaN to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1810)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)"}' />

:::tip Special category name attention
  Some of the categories contain slash like `3D/CG` , must change the slash `/` to the vertical bar`|`.
  :::

## Voronoi <Site url="voronoiapp.com"/>

### Author Posts <Site url="voronoiapp.com" size="sm" />

<Route namespace="voronoiapp" :data='{"url":"voronoiapp.com","categories":["picture","popular"],"view":2,"maintainers":["Cesaryuan"],"name":"Author Posts","path":"/author/:username","radar":[{"source":["www.voronoiapp.com/author/:username"],"target":"/author/:username"}],"example":"/voronoiapp/author/visualcapitalist","parameters":{"username":"The username of the author"},"location":"author.ts"}' :test='{"code":0}' />

### Editor's Pick Posts <Site url="voronoiapp.com" size="sm" />

<Route namespace="voronoiapp" :data='{"url":"voronoiapp.com","categories":["picture","popular"],"view":2,"maintainers":["Cesaryuan"],"name":"Editor&#39;s Pick Posts","path":"/editors-pick/:category?","radar":[{"source":["www.voronoiapp.com/posts/editors-pick"],"target":"/editors-pick"}],"example":"/voronoiapp/editors-pick","parameters":{"category":{"description":"The category of the post","default":"","options":[{"value":"","label":"All categories"},{"value":"Automotive","label":"Automotive Data Insights - Explore a range of automotive data visualizations showcasing trends, innovations, and market dynamics in the automotive industry."},{"value":"Business","label":"Business Visualization Trends - Discover business visualizations covering market analysis, corporate strategies, and economic impacts across global industries."},{"value":"Climate","label":"Climate Data Visualized - Delve into climate change data visualizations that detail weather patterns, environmental impacts, and sustainability efforts worldwide."},{"value":"Demographics","label":"Demographic Visual Insights - Explore visual demographics data showcasing population trends, societal changes, and demographic analytics across regions."},{"value":"Economy","label":"Economic Visualization Insights - View economic visualizations illustrating financial markets, economic policies, and global economic health."},{"value":"Energy","label":"Energy Industry Visual Data - Discover the dynamics of global energy consumption, renewable sources, and energy market trends through vivid visualizations."},{"value":"Entertainment","label":"Entertainment Industry Data - Explore data visualizations in the entertainment industry, covering everything from box office trends to streaming service analytics."},{"value":"Geopolitics","label":"Geopolitical Data Visualized - Understand global geopolitical shifts and international relations through comprehensive geopolitical data visualizations."},{"value":"Healthcare","label":"Healthcare Insights Visualized - Analyze healthcare data visualizations spanning disease trends, healthcare services, and public health policies."},{"value":"Innovation","label":"Innovation in Data - Dive into innovation data visualizations highlighting technology advancements, R&D investments, and patent trends."},{"value":"Maps","label":"Cartographic Visual Insights - Discover cartographic visualizations that map everything from socio-economic data to geographical phenomena."},{"value":"Markets","label":"Market Trends Visualized - Visualize market trends, financial data, and economic forecasts through comprehensive market visualizations."},{"value":"Money","label":"Financial Data Visualized - Dive into financial visualizations depicting currency trends, investment flows, and banking statistics."},{"value":"Natural Resources","label":"Natural Resources Data - Explore visualizations of natural resources, detailing extraction, consumption, and conservation data."},{"value":"Politics","label":"Political Visual Insights - Analyze political trends, election results, and legislative impacts through detailed political visualizations."},{"value":"Public Opinion","label":"Public Opinion Trends - Discover visualizations of public opinion polls, social trends, and cultural shifts across different regions."},{"value":"Real Estate","label":"Real Estate Market Insights - Explore real estate market trends, property values, and urban development through targeted data visualizations."},{"value":"Sports","label":"Sports Data Insights - Analyze sports data visualizations that showcase performance statistics, team rankings, and sports economics."},{"value":"Technology","label":"Technology Trends Visualized - Dive into technology visualizations highlighting industry trends, tech adoption rates, and innovation impacts."},{"value":"Wealth","label":"Wealth Distribution Insights - Explore wealth distribution, financial health, and economic disparities through detailed visualizations."},{"value":"Travel","label":"Travel Trends Visualized - Discover travel trends, tourism statistics, and destination analytics through engaging visualizations."},{"value":"Nature","label":"Nature and Conservation Data - Delve into visualizations of ecological data, wildlife statistics, and conservation efforts around the globe."},{"value":"Space","label":"Space Exploration Data - Explore the universe with space data visualizations covering planetary science, space missions, and astronomical discoveries."},{"value":"Diagram","label":"Diagrammatic Data Insights - Understand complex data through diagrams that simplify information across various topics and industries."},{"value":"Other","label":"Diverse Data Visualizations - Explore a variety of data visualizations that don&#39;t neatly fit into any single category but offer unique insights."}]}},"location":"editors-pick.ts"}' :test='{"code":0}' />

### Home Posts <Site url="voronoiapp.com" size="sm" />

<Route namespace="voronoiapp" :data='{"url":"voronoiapp.com","categories":["picture","popular"],"view":2,"maintainers":["Cesaryuan"],"name":"Home Posts","path":"/home/:category?","description":"This is the home page of Voronoi App","radar":[{"source":["www.voronoiapp.com","www.voronoiapp.com/posts/voronoi"],"target":"/home"}],"example":"/voronoiapp/home","parameters":{"category":{"description":"The category of the post","default":"","options":[{"value":"","label":"All categories"},{"value":"Automotive","label":"Automotive Data Insights - Explore a range of automotive data visualizations showcasing trends, innovations, and market dynamics in the automotive industry."},{"value":"Business","label":"Business Visualization Trends - Discover business visualizations covering market analysis, corporate strategies, and economic impacts across global industries."},{"value":"Climate","label":"Climate Data Visualized - Delve into climate change data visualizations that detail weather patterns, environmental impacts, and sustainability efforts worldwide."},{"value":"Demographics","label":"Demographic Visual Insights - Explore visual demographics data showcasing population trends, societal changes, and demographic analytics across regions."},{"value":"Economy","label":"Economic Visualization Insights - View economic visualizations illustrating financial markets, economic policies, and global economic health."},{"value":"Energy","label":"Energy Industry Visual Data - Discover the dynamics of global energy consumption, renewable sources, and energy market trends through vivid visualizations."},{"value":"Entertainment","label":"Entertainment Industry Data - Explore data visualizations in the entertainment industry, covering everything from box office trends to streaming service analytics."},{"value":"Geopolitics","label":"Geopolitical Data Visualized - Understand global geopolitical shifts and international relations through comprehensive geopolitical data visualizations."},{"value":"Healthcare","label":"Healthcare Insights Visualized - Analyze healthcare data visualizations spanning disease trends, healthcare services, and public health policies."},{"value":"Innovation","label":"Innovation in Data - Dive into innovation data visualizations highlighting technology advancements, R&D investments, and patent trends."},{"value":"Maps","label":"Cartographic Visual Insights - Discover cartographic visualizations that map everything from socio-economic data to geographical phenomena."},{"value":"Markets","label":"Market Trends Visualized - Visualize market trends, financial data, and economic forecasts through comprehensive market visualizations."},{"value":"Money","label":"Financial Data Visualized - Dive into financial visualizations depicting currency trends, investment flows, and banking statistics."},{"value":"Natural Resources","label":"Natural Resources Data - Explore visualizations of natural resources, detailing extraction, consumption, and conservation data."},{"value":"Politics","label":"Political Visual Insights - Analyze political trends, election results, and legislative impacts through detailed political visualizations."},{"value":"Public Opinion","label":"Public Opinion Trends - Discover visualizations of public opinion polls, social trends, and cultural shifts across different regions."},{"value":"Real Estate","label":"Real Estate Market Insights - Explore real estate market trends, property values, and urban development through targeted data visualizations."},{"value":"Sports","label":"Sports Data Insights - Analyze sports data visualizations that showcase performance statistics, team rankings, and sports economics."},{"value":"Technology","label":"Technology Trends Visualized - Dive into technology visualizations highlighting industry trends, tech adoption rates, and innovation impacts."},{"value":"Wealth","label":"Wealth Distribution Insights - Explore wealth distribution, financial health, and economic disparities through detailed visualizations."},{"value":"Travel","label":"Travel Trends Visualized - Discover travel trends, tourism statistics, and destination analytics through engaging visualizations."},{"value":"Nature","label":"Nature and Conservation Data - Delve into visualizations of ecological data, wildlife statistics, and conservation efforts around the globe."},{"value":"Space","label":"Space Exploration Data - Explore the universe with space data visualizations covering planetary science, space missions, and astronomical discoveries."},{"value":"Diagram","label":"Diagrammatic Data Insights - Understand complex data through diagrams that simplify information across various topics and industries."},{"value":"Other","label":"Diverse Data Visualizations - Explore a variety of data visualizations that don&#39;t neatly fit into any single category but offer unique insights."}]}},"location":"home.ts"}' :test='{"code":0}' />

This is the home page of Voronoi App

### Latest Posts <Site url="voronoiapp.com" size="sm" />

<Route namespace="voronoiapp" :data='{"url":"voronoiapp.com","categories":["picture","popular"],"view":2,"maintainers":["Cesaryuan"],"name":"Latest Posts","path":"/latest/:category?","radar":[{"source":["www.voronoiapp.com/posts/latest"],"target":"/latest"}],"example":"/voronoiapp/latest","parameters":{"category":{"description":"The category of the post","default":"","options":[{"value":"","label":"All categories"},{"value":"Automotive","label":"Automotive Data Insights - Explore a range of automotive data visualizations showcasing trends, innovations, and market dynamics in the automotive industry."},{"value":"Business","label":"Business Visualization Trends - Discover business visualizations covering market analysis, corporate strategies, and economic impacts across global industries."},{"value":"Climate","label":"Climate Data Visualized - Delve into climate change data visualizations that detail weather patterns, environmental impacts, and sustainability efforts worldwide."},{"value":"Demographics","label":"Demographic Visual Insights - Explore visual demographics data showcasing population trends, societal changes, and demographic analytics across regions."},{"value":"Economy","label":"Economic Visualization Insights - View economic visualizations illustrating financial markets, economic policies, and global economic health."},{"value":"Energy","label":"Energy Industry Visual Data - Discover the dynamics of global energy consumption, renewable sources, and energy market trends through vivid visualizations."},{"value":"Entertainment","label":"Entertainment Industry Data - Explore data visualizations in the entertainment industry, covering everything from box office trends to streaming service analytics."},{"value":"Geopolitics","label":"Geopolitical Data Visualized - Understand global geopolitical shifts and international relations through comprehensive geopolitical data visualizations."},{"value":"Healthcare","label":"Healthcare Insights Visualized - Analyze healthcare data visualizations spanning disease trends, healthcare services, and public health policies."},{"value":"Innovation","label":"Innovation in Data - Dive into innovation data visualizations highlighting technology advancements, R&D investments, and patent trends."},{"value":"Maps","label":"Cartographic Visual Insights - Discover cartographic visualizations that map everything from socio-economic data to geographical phenomena."},{"value":"Markets","label":"Market Trends Visualized - Visualize market trends, financial data, and economic forecasts through comprehensive market visualizations."},{"value":"Money","label":"Financial Data Visualized - Dive into financial visualizations depicting currency trends, investment flows, and banking statistics."},{"value":"Natural Resources","label":"Natural Resources Data - Explore visualizations of natural resources, detailing extraction, consumption, and conservation data."},{"value":"Politics","label":"Political Visual Insights - Analyze political trends, election results, and legislative impacts through detailed political visualizations."},{"value":"Public Opinion","label":"Public Opinion Trends - Discover visualizations of public opinion polls, social trends, and cultural shifts across different regions."},{"value":"Real Estate","label":"Real Estate Market Insights - Explore real estate market trends, property values, and urban development through targeted data visualizations."},{"value":"Sports","label":"Sports Data Insights - Analyze sports data visualizations that showcase performance statistics, team rankings, and sports economics."},{"value":"Technology","label":"Technology Trends Visualized - Dive into technology visualizations highlighting industry trends, tech adoption rates, and innovation impacts."},{"value":"Wealth","label":"Wealth Distribution Insights - Explore wealth distribution, financial health, and economic disparities through detailed visualizations."},{"value":"Travel","label":"Travel Trends Visualized - Discover travel trends, tourism statistics, and destination analytics through engaging visualizations."},{"value":"Nature","label":"Nature and Conservation Data - Delve into visualizations of ecological data, wildlife statistics, and conservation efforts around the globe."},{"value":"Space","label":"Space Exploration Data - Explore the universe with space data visualizations covering planetary science, space missions, and astronomical discoveries."},{"value":"Diagram","label":"Diagrammatic Data Insights - Understand complex data through diagrams that simplify information across various topics and industries."},{"value":"Other","label":"Diverse Data Visualizations - Explore a variety of data visualizations that don&#39;t neatly fit into any single category but offer unique insights."}]}},"location":"latest.ts"}' :test='{"code":0}' />

### Popular Posts <Site url="voronoiapp.com" size="sm" />

<Route namespace="voronoiapp" :data='{"url":"voronoiapp.com","categories":["picture","popular"],"view":2,"maintainers":["Cesaryuan"],"name":"Popular Posts","path":"/popular/:tab?/:time_range?/:category?","radar":[{"title":"Most Liked Posts","source":["www.voronoiapp.com/posts/most-popular"],"target":"/popular/most-popular"},{"title":"Most Discussed Posts","source":["www.voronoiapp.com/posts/most-discussed"],"target":"/popular/most-discussed"},{"title":"Most Viewed Posts","source":["www.voronoiapp.com/posts/most-viewed"],"target":"/popular/most-viewed"}],"parameters":{"tab":{"description":"The tab to get the popular posts from.","default":"most-popular","options":[{"value":"most-popular","label":"Most Liked"},{"value":"most-discussed","label":"Most Discussed"},{"value":"most-viewed","label":"Most Viewed"}]},"time_range":{"description":"Time range between which the posts are popular.","default":"MONTH","options":[{"value":"WEEK","label":"Last 7 days"},{"value":"MONTH","label":"Last 30 days"},{"value":"YEAR","label":"Last 12 months"},{"value":"ALL","label":"All time"}]},"category":{"description":"The category of the post","default":"","options":[{"value":"","label":"All categories"},{"value":"Automotive","label":"Automotive Data Insights - Explore a range of automotive data visualizations showcasing trends, innovations, and market dynamics in the automotive industry."},{"value":"Business","label":"Business Visualization Trends - Discover business visualizations covering market analysis, corporate strategies, and economic impacts across global industries."},{"value":"Climate","label":"Climate Data Visualized - Delve into climate change data visualizations that detail weather patterns, environmental impacts, and sustainability efforts worldwide."},{"value":"Demographics","label":"Demographic Visual Insights - Explore visual demographics data showcasing population trends, societal changes, and demographic analytics across regions."},{"value":"Economy","label":"Economic Visualization Insights - View economic visualizations illustrating financial markets, economic policies, and global economic health."},{"value":"Energy","label":"Energy Industry Visual Data - Discover the dynamics of global energy consumption, renewable sources, and energy market trends through vivid visualizations."},{"value":"Entertainment","label":"Entertainment Industry Data - Explore data visualizations in the entertainment industry, covering everything from box office trends to streaming service analytics."},{"value":"Geopolitics","label":"Geopolitical Data Visualized - Understand global geopolitical shifts and international relations through comprehensive geopolitical data visualizations."},{"value":"Healthcare","label":"Healthcare Insights Visualized - Analyze healthcare data visualizations spanning disease trends, healthcare services, and public health policies."},{"value":"Innovation","label":"Innovation in Data - Dive into innovation data visualizations highlighting technology advancements, R&D investments, and patent trends."},{"value":"Maps","label":"Cartographic Visual Insights - Discover cartographic visualizations that map everything from socio-economic data to geographical phenomena."},{"value":"Markets","label":"Market Trends Visualized - Visualize market trends, financial data, and economic forecasts through comprehensive market visualizations."},{"value":"Money","label":"Financial Data Visualized - Dive into financial visualizations depicting currency trends, investment flows, and banking statistics."},{"value":"Natural Resources","label":"Natural Resources Data - Explore visualizations of natural resources, detailing extraction, consumption, and conservation data."},{"value":"Politics","label":"Political Visual Insights - Analyze political trends, election results, and legislative impacts through detailed political visualizations."},{"value":"Public Opinion","label":"Public Opinion Trends - Discover visualizations of public opinion polls, social trends, and cultural shifts across different regions."},{"value":"Real Estate","label":"Real Estate Market Insights - Explore real estate market trends, property values, and urban development through targeted data visualizations."},{"value":"Sports","label":"Sports Data Insights - Analyze sports data visualizations that showcase performance statistics, team rankings, and sports economics."},{"value":"Technology","label":"Technology Trends Visualized - Dive into technology visualizations highlighting industry trends, tech adoption rates, and innovation impacts."},{"value":"Wealth","label":"Wealth Distribution Insights - Explore wealth distribution, financial health, and economic disparities through detailed visualizations."},{"value":"Travel","label":"Travel Trends Visualized - Discover travel trends, tourism statistics, and destination analytics through engaging visualizations."},{"value":"Nature","label":"Nature and Conservation Data - Delve into visualizations of ecological data, wildlife statistics, and conservation efforts around the globe."},{"value":"Space","label":"Space Exploration Data - Explore the universe with space data visualizations covering planetary science, space missions, and astronomical discoveries."},{"value":"Diagram","label":"Diagrammatic Data Insights - Understand complex data through diagrams that simplify information across various topics and industries."},{"value":"Other","label":"Diverse Data Visualizations - Explore a variety of data visualizations that don&#39;t neatly fit into any single category but offer unique insights."}]}},"example":"/voronoiapp/popular/most-popular/MONTH","location":"popular.ts"}' :test='{"code":0}' />

### Search Keyword Posts <Site url="voronoiapp.com" size="sm" />

<Route namespace="voronoiapp" :data='{"url":"voronoiapp.com","categories":["picture","popular"],"view":2,"maintainers":["Cesaryuan"],"name":"Search Keyword Posts","path":"/search/:keyword","radar":[{"source":["www.voronoiapp.com/explore"]}],"example":"/voronoiapp/search/china","parameters":{"keyword":"The keyword to search for"},"location":"search.ts"}' :test='{"code":0}' />

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

- Using `TWITTER_AUTH_TOKEN` (recommended): Configure a comma-separated list of `auth_token` cookies of logged-in Twitter Web. RSSHub will use this information to directly access Twitter's web API to obtain data.

- Using `TWITTER_USERNAME` `TWITTER_PASSWORD` and `TWITTER_AUTHENTICATION_SECRET`: Configure a comma-separated list of Twitter username and password. RSSHub will use this information to log in to Twitter and obtain data using the mobile API. Please note that if you have not logged in with the current IP address before, it is easy to trigger Twitter's risk control mechanism.


### Keyword <Site url="x.com" size="sm" />

<Route namespace="twitter" :data='{"path":"/keyword/:keyword/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/twitter/keyword/RSSHub","parameters":{"keyword":"keyword","routeParams":"extra parameters, see the table above"},"features":{"requireConfig":[{"name":"TWITTER_USERNAME","description":"Please see above for details."},{"name":"TWITTER_PASSWORD","description":"Please see above for details."},{"name":"TWITTER_AUTH_TOKEN","description":"Please see above for details."}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Keyword","maintainers":["DIYgod","yindaheng98","Rongronggg9"],"radar":[{"source":["x.com/search"]}],"location":"keyword.ts"}' :test='undefined' />

### List timeline <Site url="x.com" size="sm" />

<Route namespace="twitter" :data='{"path":"/list/:id/:routeParams?","categories":["social-media","popular"],"example":"/twitter/list/1502570462752219136","parameters":{"id":"list id, get from url","routeParams":"extra parameters, see the table above"},"features":{"requireConfig":[{"name":"TWITTER_AUTH_TOKEN","description":"Please see above for details."}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"List timeline","maintainers":["DIYgod","xyqfer","pseudoyu"],"radar":[{"source":["x.com/i/lists/:id"],"target":"/list/:id"}],"location":"list.ts"}' :test='undefined' />

### User media <Site url="x.com" size="sm" />

<Route namespace="twitter" :data='{"path":"/media/:id/:routeParams?","categories":["social-media","popular"],"view":2,"example":"/twitter/media/_RSSHub","parameters":{"id":"username; in particular, if starts with `+`, it will be recognized as a [unique ID](https://github.com/DIYgod/RSSHub/issues/12221), e.g. `+44196397`","routeParams":"extra parameters, see the table above."},"features":{"requireConfig":[{"name":"TWITTER_USERNAME","description":"Please see above for details."},{"name":"TWITTER_PASSWORD","description":"Please see above for details."},{"name":"TWITTER_AUTH_TOKEN","description":"Please see above for details."}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User media","maintainers":["DIYgod","yindaheng98","Rongronggg9"],"radar":[{"source":["x.com/:id/media"],"target":"/media/:id"}],"location":"media.ts"}' :test='undefined' />

### User timeline <Site url="x.com" size="sm" />

<Route namespace="twitter" :data='{"path":"/user/:id/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/twitter/user/_RSSHub","parameters":{"id":"username; in particular, if starts with `+`, it will be recognized as a [unique ID](https://github.com/DIYgod/RSSHub/issues/12221), e.g. `+44196397`","routeParams":"extra parameters, see the table above; particularly when `routeParams=exclude_replies`, replies are excluded; `routeParams=exclude_rts` excludes retweets,`routeParams=exclude_rts_replies` exclude replies and retweets; for default include all."},"features":{"requireConfig":[{"name":"TWITTER_USERNAME","description":"Please see above for details."},{"name":"TWITTER_PASSWORD","description":"Please see above for details."},{"name":"TWITTER_AUTHENTICATION_SECRET","description":"TOTP 2FA secret, please see above for details.","optional":true},{"name":"TWITTER_AUTH_TOKEN","description":"Please see above for details."}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User timeline","maintainers":["DIYgod","yindaheng98","Rongronggg9","CaoMeiYouRen"],"radar":[{"source":["x.com/:id"],"target":"/user/:id"}],"location":"user.ts"}' :test='undefined' />

## YouTube <Site url="youtube.com"/>

### Channel with username <Site url="youtube.com" size="sm" />

<Route namespace="youtube" :data='{"path":"/user/:username/:embed?","categories":["social-media","popular"],"view":3,"example":"/youtube/user/@JFlaMusic","parameters":{"username":"YouTuber username with @","embed":"Default to embed the video, set to any value to disable embedding"},"features":{"requireConfig":[{"name":"YOUTUBE_KEY","description":" YouTube API Key, support multiple keys, split them with `,`, [API Key application](https://console.developers.google.com/)"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.youtube.com/user/:username"],"target":"/user/:username"}],"name":"Channel with username","maintainers":["DIYgod"],"location":"user.ts"}' :test='undefined' />

### Playlist <Site url="youtube.com" size="sm" />

<Route namespace="youtube" :data='{"path":"/playlist/:id/:embed?","categories":["social-media","popular"],"view":3,"example":"/youtube/playlist/PLqQ1RwlxOgeLTJ1f3fNMSwhjVgaWKo_9Z","parameters":{"id":"YouTube playlist id","embed":"Default to embed the video, set to any value to disable embedding"},"features":{"requireConfig":[{"name":"YOUTUBE_KEY","description":" YouTube API Key, support multiple keys, split them with `,`, [API Key application](https://console.developers.google.com/)"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Playlist","maintainers":["HenryQW"],"location":"playlist.ts"}' :test='undefined' />

## 阿基米德 FM <Site url="m.ajmide.com"/>

### 播客 <Site url="m.ajmide.com" size="sm" />

<Route namespace="ajmide" :data='{"path":"/:id","categories":["multimedia","popular"],"view":4,"example":"/ajmide/10603594","parameters":{"id":"播客 id，可以从播客页面 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"播客","maintainers":["Fatpandac"],"location":"index.ts"}' :test='{"code":0}' />

## 巴哈姆特電玩資訊站 <Site url="acg.gamer.com.tw"/>

### GNN 新聞 <Site url="acg.gamer.com.tw" size="sm" />

<Route namespace="gamer" :data='{"path":"/gnn/:category?","categories":["anime","popular"],"view":0,"example":"/gamer/gnn/1","parameters":{"category":{"description":"版塊","options":[{"value":"1","label":"PC"},{"value":"3","label":"TV 掌機"},{"value":"4","label":"手機遊戲"},{"value":"5","label":"動漫畫"},{"value":"9","label":"主題報導"},{"value":"11","label":"活動展覽"},{"value":"13","label":"電競"},{"value":"ns","label":"Switch"},{"value":"ps5","label":"PS5"},{"value":"ps4","label":"PS4"},{"value":"xbone","label":"XboxOne"},{"value":"xbsx","label":"XboxSX"},{"value":"pc","label":"PC 單機"},{"value":"olg","label":"PC 線上"},{"value":"ios","label":"iOS"},{"value":"android","label":"Android"},{"value":"web","label":"Web"},{"value":"comic","label":"漫畫"},{"value":"anime","label":"動畫"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"GNN 新聞","maintainers":["Arracc","ladeng07","pseudoyu"],"description":"缺省為首頁","location":"gnn-index.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 594)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

缺省為首頁

### 動畫瘋 - 動畫 <Site url="acg.gamer.com.tw" size="sm" />

<Route namespace="gamer" :data='{"path":"/ani/anime/:sn","categories":["anime","popular"],"view":3,"example":"/gamer/ani/anime/36868","parameters":{"sn":"動畫 sn，在 URL 可以找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ani.gamer.com.tw/"],"target":"/anime/:sn"}],"name":"動畫瘋 - 動畫","maintainers":["maple3142","pseudoyu"],"location":"ani/anime.ts"}' :test='{"code":0}' />

### 動畫瘋 - 最後更新 <Site url="ani.gamer.com.tw/" size="sm" />

<Route namespace="gamer" :data='{"path":"/ani/new_anime","categories":["anime","popular"],"view":3,"example":"/gamer/ani/new_anime","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ani.gamer.com.tw/"],"target":"/new_anime"}],"name":"動畫瘋 - 最後更新","maintainers":["maple3142","pseudoyu"],"url":"ani.gamer.com.tw/","location":"ani/new-anime.ts"}' :test='{"code":0}' />

### 熱門推薦 <Site url="acg.gamer.com.tw" size="sm" />

<Route namespace="gamer" :data='{"path":"/hot/:bsn","categories":["anime","popular"],"view":0,"example":"/gamer/hot/47157","parameters":{"bsn":"板塊 id，在 URL 可以找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"熱門推薦","maintainers":["nczitzk","TonyRL"],"location":"hot.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 595)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

## 百度 <Site url="www.baidu.com"/>

### 首页指数 <Site url="gushitong.baidu.com/" size="sm" />

<Route namespace="baidu" :data='{"path":"/gushitong/index","categories":["finance","popular"],"view":5,"example":"/baidu/gushitong/index","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gushitong.baidu.com/"]}],"name":"首页指数","maintainers":["CaoMeiYouRen"],"url":"gushitong.baidu.com/","location":"gushitong/index.ts"}' :test='{"code":0}' />

## 北京天文馆 <Site url="bjp.org.cn"/>

### 每日一图 <Site url="bjp.org.cn/APOD/today.shtml" size="sm" />

<Route namespace="bjp" :data='{"path":"/apod","categories":["picture","popular"],"view":2,"example":"/bjp/apod","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["bjp.org.cn/APOD/today.shtml","bjp.org.cn/APOD/list.shtml","bjp.org.cn/"]}],"name":"每日一图","maintainers":["HenryQW"],"url":"bjp.org.cn/APOD/today.shtml","location":"apod.ts"}' :test='{"code":0}' />

## 哔哩哔哩 bilibili <Site url="www.bilibili.com"/>

### UP 主动态 <Site url="www.bilibili.com" size="sm" />

<Route namespace="bilibili" :data='{"path":"/user/dynamic/:uid/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/bilibili/user/dynamic/2267573","parameters":{"uid":"用户 id, 可在 UP 主主页中找到","routeParams":"\n| 键           | 含义                              | 接受的值       | 默认值 |\n| ------------ | --------------------------------- | -------------- | ------ |\n| showEmoji    | 显示或隐藏表情图片                | 0/1/true/false | false  |\n| disableEmbed | 关闭内嵌视频                      | 0/1/true/false | false  |\n| useAvid      | 视频链接使用 AV 号 (默认为 BV 号) | 0/1/true/false | false  |\n| directLink   | 使用内容直链                      | 0/1/true/false | false  |\n| hideGoods    | 隐藏带货动态                      | 0/1/true/false | false  |\n\n用例：`/bilibili/user/dynamic/2267573/showEmoji=1&disableEmbed=1&useAvid=1`"},"features":{"requireConfig":[{"name":"BILIBILI_COOKIE_*","optional":true,"description":"如果没有此配置，那么必须开启 puppeteer 支持；BILIBILI_COOKIE_{uid}: 用于用户关注动态系列路由，对应 uid 的 b 站用户登录后的 Cookie 值，`{uid}` 替换为 uid，如 `BILIBILI_COOKIE_2267573`，获取方式：\n1.  打开 [https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new?uid=0&type=8](https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new?uid=0&type=8)\n2.  打开控制台，切换到 Network 面板，刷新\n3.  点击 dynamic_new 请求，找到 Cookie\n4.  视频和专栏，UP 主粉丝及关注只要求 `SESSDATA` 字段，动态需复制整段 Cookie"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["space.bilibili.com/:uid"],"target":"/user/dynamic/:uid"}],"name":"UP 主动态","maintainers":["DIYgod","zytomorrow","CaoMeiYouRen","JimenezLi"],"location":"dynamic.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 118)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### UP 主投稿 <Site url="www.bilibili.com" size="sm" />

<Route namespace="bilibili" :data='{"path":"/user/video/:uid/:disableEmbed?","categories":["social-media","popular"],"view":3,"example":"/bilibili/user/video/2267573","parameters":{"uid":"用户 id, 可在 UP 主主页中找到","disableEmbed":"默认为开启内嵌视频, 任意值为关闭"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["space.bilibili.com/:uid"],"target":"/user/video/:uid"}],"name":"UP 主投稿","maintainers":["DIYgod","Konano","pseudoyu"],"location":"video.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 141)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### 番剧 <Site url="www.bilibili.com" size="sm" />

<Route namespace="bilibili" :data='{"path":"/bangumi/media/:mediaid","name":"番剧","parameters":{"mediaid":"番剧媒体 id, 番剧主页 URL 中获取"},"example":"/bilibili/bangumi/media/9192","categories":["social-media","popular"],"view":3,"maintainers":["DIYgod"],"location":"bangumi.ts"}' :test='{"code":0}' />

### 排行榜 <Site url="www.bilibili.com" size="sm" />

<Route namespace="bilibili" :data='{"path":"/ranking/:rid?/:day?/:arc_type?/:disableEmbed?","name":"排行榜","maintainers":["DIYgod"],"categories":["social-media","popular"],"view":3,"example":"/bilibili/ranking/0/3/1","parameters":{"rid":{"description":"排行榜分区 id","default":"0","options":[{"label":"全站","value":"0"},{"label":"动画","value":"1"},{"label":"国创相关","value":"168"},{"label":"音乐","value":"3"},{"label":"舞蹈","value":"129"},{"label":"游戏","value":"4"},{"label":"科技","value":"36"},{"label":"数码","value":"188"},{"label":"生活","value":"160"},{"label":"鬼畜","value":"119"},{"label":"时尚","value":"155"},{"label":"娱乐","value":"5"},{"label":"影视","value":"181"}]},"day":{"description":"时间跨度","default":"3","options":[{"value":"1","label":"1日"},{"value":"3","label":"3日"},{"value":"7","label":"7日"},{"value":"30","label":"30日"}]},"arc_type":{"description":"投稿时间","default":"1","options":[{"value":"0","label":"全部投稿"},{"value":"1","label":"近期投稿"}]},"disableEmbed":{"description":"默认为开启内嵌视频, 任意值为关闭"}},"location":"ranking.ts"}' :test='{"code":0}' />

### 专栏文集 <Site url="www.bilibili.com" size="sm" />

<Route namespace="bilibili" :data='{"path":"/readlist/:listid","categories":["social-media","popular"],"view":0,"example":"/bilibili/readlist/25611","parameters":{"listid":"文集 id, 可在专栏文集 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"专栏文集","maintainers":["hoilc"],"location":"readlist.ts"}' :test='{"code":0}' />

## 财新博客 <Site url="caixin.com"/>

> 网站部分内容需要付费订阅，RSS 仅做更新提醒，不含付费内容。

### 最新文章 <Site url="caixin.com/" size="sm" />

<Route namespace="caixin" :data='{"path":"/latest","categories":["traditional-media","popular"],"view":0,"example":"/caixin/latest","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["caixin.com/"]}],"name":"最新文章","maintainers":["tpnonthealps"],"url":"caixin.com/","description":"说明：此 RSS feed 会自动抓取财新网的最新文章，但不包含 FM 及视频内容。","location":"latest.ts"}' :test='{"code":0}' />

说明：此 RSS feed 会自动抓取财新网的最新文章，但不包含 FM 及视频内容。

## 唱吧 <Site url="changba.com"/>

### 用户 <Site url="changba.com" size="sm" />

<Route namespace="changba" :data='{"path":"/:userid","categories":["social-media","popular"],"view":4,"example":"/changba/skp6hhF59n48R-UpqO3izw","parameters":{"userid":"用户ID, 可在对应分享页面的 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":true,"supportScihub":false},"radar":[{"source":["changba.com/s/:userid"]}],"name":"用户","maintainers":["kt286","xizeyoupan","pseudoyu"],"location":"user.ts"}' :test='{"code":0}' />

## 东方财富 <Site url="data.eastmoney.com"/>

### 搜索 <Site url="data.eastmoney.com" size="sm" />

<Route namespace="eastmoney" :data='{"path":"/search/:keyword","categories":["finance","popular"],"view":0,"example":"/eastmoney/search/web3","parameters":{"keyword":"关键词，可以设置为自己需要检索的关键词"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"搜索","maintainers":["drgnchan"],"location":"search/index.ts"}' :test='{"code":0}' />

### 天天基金用户动态 <Site url="data.eastmoney.com" size="sm" />

<Route namespace="eastmoney" :data='{"path":"/ttjj/user/:uid","categories":["finance","popular"],"view":1,"example":"/eastmoney/ttjj/user/6551094298949188","parameters":{"uid":"用户id, 可以通过天天基金App分享用户主页到浏览器，在相应的URL中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"天天基金用户动态","maintainers":["zidekuls"],"location":"ttjj/user.ts"}' :test='{"code":0}' />

### 研究报告 <Site url="data.eastmoney.com" size="sm" />

<Route namespace="eastmoney" :data='{"path":"/report/:category","categories":["finance","popular"],"view":0,"example":"/eastmoney/report/strategyreport","parameters":{"category":{"description":"研报类型","options":[{"value":"strategyreport","label":"策略报告"},{"value":"macresearch","label":"宏观研究"},{"value":"brokerreport","label":"券商晨报"},{"value":"industry","label":"行业研报"},{"value":"stock","label":"个股研报"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["data.eastmoney.com/report/:category"]}],"name":"研究报告","maintainers":["syzq"],"description":"| 策略报告       | 宏观研究    | 券商晨报     | 行业研究 | 个股研报 |\n  | -------------- | ----------- | ------------ | -------- | -------- |\n  | strategyreport | macresearch | brokerreport | industry | stock    |","location":"report/index.ts"}' :test='{"code":0}' />

| 策略报告       | 宏观研究    | 券商晨报     | 行业研究 | 个股研报 |
  | -------------- | ----------- | ------------ | -------- | -------- |
  | strategyreport | macresearch | brokerreport | industry | stock    |

## 豆瓣 <Site url="www.douban.com"/>

### 豆瓣小组 <Site url="www.douban.com" size="sm" />

<Route namespace="douban" :data='{"path":"/group/:groupid/:type?","categories":["social-media","popular"],"view":1,"example":"/douban/group/648102","parameters":{"groupid":"豆瓣小组的 id","type":{"description":"类型","default":"latest","options":[{"label":"最新","value":"latest"},{"label":"最热","value":"essence"},{"label":"精华","value":"elite"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.douban.com/group/:groupid"],"target":"/group/:groupid"}],"name":"豆瓣小组","maintainers":["DIYgod"],"location":"other/group.ts"}' :test='{"code":0}' />

### 话题 <Site url="www.douban.com" size="sm" />

<Route namespace="douban" :data='{"path":"/topic/:id/:sort?","categories":["social-media","popular"],"example":"/douban/topic/48823","parameters":{"id":"话题id","sort":"排序方式，hot或new，默认为new"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"话题","maintainers":["LogicJake","pseudoyu","haowenwu"],"location":"other/topic.ts"}' :test='{"code":0}' />

### 用户广播 <Site url="www.douban.com" size="sm" />

<Route namespace="douban" :data='{"path":"/people/:userid/status/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/douban/people/75118396/status","parameters":{"userid":"整数型用户 id","routeParams":"额外参数；见下"},"name":"用户广播","maintainers":["alfredcai"],"description":"\n::: tip\n-   **目前只支持整数型 id**\n-   字母型的 id，可以通过头像图片链接来找到其整数型 id，图片命名规则`ul[userid]-*.jpg`或`u[userid]-*.jpg`，即取文件名中间的数字\n-   例如：用户 id: `MovieL`他的头像图片链接：`https://img1.doubanio.com/icon/ul1128221-98.jpg`他的整数型 id: `1128221`\n:::\n\n对于豆瓣用户广播内容，在 `routeParams` 参数中以 query string 格式设置如下选项可以控制输出的样式\n\n  | 键                         | 含义                                                           | 接受的值       | 默认值 |\n  | -------------------------- | -------------------------------------------------------------- | -------------- | ------ |\n  | readable                   | 是否开启细节排版可读性优化                                     | 0/1/true/false | false  |\n  | authorNameBold             | 是否加粗作者名字                                               | 0/1/true/false | false  |\n  | showAuthorInTitle          | 是否在标题处显示作者                                           | 0/1/true/false | true   |\n  | showAuthorInDesc           | 是否在正文处显示作者                                           | 0/1/true/false | false  |\n  | showAuthorAvatarInDesc     | 是否在正文处显示作者头像（若阅读器会提取正文图片，不建议开启） | 0/1/true/false | false  |\n  | showEmojiForRetweet        | 显示 “🔁” 取代 “Fw”（转发）                                    | 0/1/true/false | false  |\n  | showRetweetTextInTitle     | 在标题出显示转发评论（置为 false 则在标题只显示被转发的广播）  | 0/1/true/false | false  |\n  | addLinkForPics             | 为图片添加可点击的链接                                         | 0/1/true/false | false  |\n  | showTimestampInDescription | 在正文处显示广播的时间戳                                       | 0/1/true/false | false  |\n  | showComments               | 在正文处显示评论                                               | 0/1/true/false | false  |\n  | widthOfPics                | 广播配图宽（生效取决于阅读器）                                 | 不指定 / 数字  | 不指定 |\n  | heightOfPics               | 广播配图高（生效取决于阅读器）                                 | 不指定 / 数字  | 不指定 |\n  | sizeOfAuthorAvatar         | 作者头像大小                                                   | 数字           | 48     |\n\n  指定更多与默认值不同的参数选项可以改善 RSS 的可读性，如\n\n  [https://rsshub.app/douban/people/113894409/status/readable=1&authorNameBold=1&showAuthorInTitle=1&showAuthorInDesc=1&showAuthorAvatarInDesc=1&showEmojiForRetweet=1&showRetweetTextInTitle=1&addLinkForPics=1&showTimestampInDescription=1&showComments=1&widthOfPics=100](https://rsshub.app/douban/people/113894409/status/readable=1&authorNameBold=1&showAuthorInTitle=1&showAuthorInDesc=1&showAuthorAvatarInDesc=1&showEmojiForRetweet=1&showRetweetTextInTitle=1&addLinkForPics=1&showTimestampInDescription=1&showComments=1&widthOfPics=100)\n\n  的效果为\n\n  <img loading=\"lazy\" src=\"/img/readable-douban.png\" alt=\"豆瓣读书的可读豆瓣广播 RSS\" />","location":"people/status.ts"}' :test='{"code":0}' />


::: tip
-   **目前只支持整数型 id**
-   字母型的 id，可以通过头像图片链接来找到其整数型 id，图片命名规则`ul[userid]-*.jpg`或`u[userid]-*.jpg`，即取文件名中间的数字
-   例如：用户 id: `MovieL`他的头像图片链接：`https://img1.doubanio.com/icon/ul1128221-98.jpg`他的整数型 id: `1128221`
:::

对于豆瓣用户广播内容，在 `routeParams` 参数中以 query string 格式设置如下选项可以控制输出的样式

  | 键                         | 含义                                                           | 接受的值       | 默认值 |
  | -------------------------- | -------------------------------------------------------------- | -------------- | ------ |
  | readable                   | 是否开启细节排版可读性优化                                     | 0/1/true/false | false  |
  | authorNameBold             | 是否加粗作者名字                                               | 0/1/true/false | false  |
  | showAuthorInTitle          | 是否在标题处显示作者                                           | 0/1/true/false | true   |
  | showAuthorInDesc           | 是否在正文处显示作者                                           | 0/1/true/false | false  |
  | showAuthorAvatarInDesc     | 是否在正文处显示作者头像（若阅读器会提取正文图片，不建议开启） | 0/1/true/false | false  |
  | showEmojiForRetweet        | 显示 “🔁” 取代 “Fw”（转发）                                    | 0/1/true/false | false  |
  | showRetweetTextInTitle     | 在标题出显示转发评论（置为 false 则在标题只显示被转发的广播）  | 0/1/true/false | false  |
  | addLinkForPics             | 为图片添加可点击的链接                                         | 0/1/true/false | false  |
  | showTimestampInDescription | 在正文处显示广播的时间戳                                       | 0/1/true/false | false  |
  | showComments               | 在正文处显示评论                                               | 0/1/true/false | false  |
  | widthOfPics                | 广播配图宽（生效取决于阅读器）                                 | 不指定 / 数字  | 不指定 |
  | heightOfPics               | 广播配图高（生效取决于阅读器）                                 | 不指定 / 数字  | 不指定 |
  | sizeOfAuthorAvatar         | 作者头像大小                                                   | 数字           | 48     |

  指定更多与默认值不同的参数选项可以改善 RSS 的可读性，如

  [https://rsshub.app/douban/people/113894409/status/readable=1&authorNameBold=1&showAuthorInTitle=1&showAuthorInDesc=1&showAuthorAvatarInDesc=1&showEmojiForRetweet=1&showRetweetTextInTitle=1&addLinkForPics=1&showTimestampInDescription=1&showComments=1&widthOfPics=100](https://rsshub.app/douban/people/113894409/status/readable=1&authorNameBold=1&showAuthorInTitle=1&showAuthorInDesc=1&showAuthorAvatarInDesc=1&showEmojiForRetweet=1&showRetweetTextInTitle=1&addLinkForPics=1&showTimestampInDescription=1&showComments=1&widthOfPics=100)

  的效果为

  <img loading="lazy" src="/img/readable-douban.png" alt="豆瓣读书的可读豆瓣广播 RSS" />

## 法布财经 <Site url="fastbull.cn"/>

### 快讯 <Site url="fastbull.cn/express-news" size="sm" />

<Route namespace="fastbull" :data='{"path":"/express-news","categories":["finance","popular"],"view":0,"example":"/fastbull/express-news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["fastbull.cn/express-news","fastbull.cn/"]}],"name":"快讯","maintainers":["nczitzk"],"url":"fastbull.cn/express-news","location":"express-news.ts"}' :test='{"code":0}' />

### 新闻 <Site url="fastbull.cn/news" size="sm" />

<Route namespace="fastbull" :data='{"path":["/news","/"],"categories":["finance","popular"],"view":0,"example":"/fastbull/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["fastbull.cn/news","fastbull.cn/"]}],"name":"新闻","maintainers":["nczitzk"],"url":"fastbull.cn/news","location":"news.ts"}' :test='{"code":0}' />

## 格隆汇 <Site url="gelonghui.com"/>

### 实时快讯 <Site url="gelonghui.com/live" size="sm" />

<Route namespace="gelonghui" :data='{"path":"/live","categories":["finance","popular"],"view":0,"example":"/gelonghui/live","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gelonghui.com/live","gelonghui.com/"]}],"name":"实时快讯","maintainers":[],"url":"gelonghui.com/live","location":"live.ts"}' :test='{"code":0}' />

### 首页 <Site url="gelonghui.com" size="sm" />

<Route namespace="gelonghui" :data='{"path":"/home/:tag?","categories":["finance","popular"],"view":0,"example":"/gelonghui/home","parameters":{"tag":{"description":"分类标签，见下表，默认为 `web_home_page`","options":[{"value":"web_home_page","label":"推荐"},{"value":"stock","label":"股票"},{"value":"fund","label":"基金"},{"value":"new_stock","label":"新股"},{"value":"research","label":"研报"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"首页","maintainers":["TonyRL"],"description":"| 推荐            | 股票  | 基金 | 新股       | 研报     |\n  | --------------- | ----- | ---- | ---------- | -------- |\n  | web_home_page | stock | fund | new_stock | research |","location":"home.ts"}' :test='{"code":0}' />

| 推荐            | 股票  | 基金 | 新股       | 研报     |
  | --------------- | ----- | ---- | ---------- | -------- |
  | web_home_page | stock | fund | new_stock | research |

### 搜索关键字 <Site url="gelonghui.com" size="sm" />

<Route namespace="gelonghui" :data='{"path":"/keyword/:keyword","categories":["finance","popular"],"view":0,"example":"/gelonghui/keyword/早报","parameters":{"keyword":"搜索关键字"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"搜索关键字","maintainers":["nczitzk"],"location":"keyword.ts"}' :test='{"code":0}' />

### 用户文章 <Site url="gelonghui.com" size="sm" />

<Route namespace="gelonghui" :data='{"path":"/user/:id","categories":["finance","popular"],"view":0,"example":"/gelonghui/user/5273","parameters":{"id":"用户编号，可在用户页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gelonghui.com/user/:id"]}],"name":"用户文章","maintainers":["nczitzk"],"location":"user.ts"}' :test='{"code":0}' />

### 主题文章 <Site url="gelonghui.com" size="sm" />

<Route namespace="gelonghui" :data='{"path":"/subject/:id","categories":["finance","popular"],"view":0,"example":"/gelonghui/subject/4","parameters":{"id":"主题编号，可在主题页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gelonghui.com/subject/:id"]}],"name":"主题文章","maintainers":["nczitzk"],"location":"subject.ts"}' :test='{"code":0}' />

### 最热文章 <Site url="gelonghui.com/" size="sm" />

<Route namespace="gelonghui" :data='{"path":"/hot-article/:type?","categories":["finance","popular"],"view":0,"example":"/gelonghui/hot-article","parameters":{"type":{"description":"`day` 为日排行，`week` 为周排行，默认为 `day`","options":[{"value":"day","label":"日排行"},{"value":"week","label":"周排行"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gelonghui.com/"],"target":"/hot-article"}],"name":"最热文章","maintainers":["nczitzk"],"url":"gelonghui.com/","location":"hot-article.ts"}' :test='{"code":0}' />

## 汇通网 <Site url="fx678.com"/>

### 7x24 小时快讯 <Site url="fx678.com/kx" size="sm" />

<Route namespace="fx678" :data='{"path":"/kx","categories":["finance","popular"],"view":5,"example":"/fx678/kx","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["fx678.com/kx"]}],"name":"7x24 小时快讯","maintainers":["occupy5","dousha"],"url":"fx678.com/kx","location":"kx.ts"}' :test='{"code":0}' />

## 即刻 <Site url="m.okjike.com"/>

### 圈子 <Site url="m.okjike.com" size="sm" />

<Route namespace="jike" :data='{"path":"/topic/:id/:showUid?","categories":["social-media","popular"],"view":1,"example":"/jike/topic/556688fae4b00c57d9dd46ee","parameters":{"id":"圈子 id, 可在即刻 web 端圈子页或 APP 分享出来的圈子页 URL 中找到","showUid":{"description":"是否在内容中显示用户信息，设置为 1 则开启","options":[{"value":"1","label":"显示"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["web.okjike.com/topic/:id"],"target":"/topic/:id"}],"name":"圈子","maintainers":["DIYgod","prnake"],"location":"topic.ts"}' :test='{"code":0}' />

### 用户动态 <Site url="m.okjike.com" size="sm" />

<Route namespace="jike" :data='{"path":"/user/:id","categories":["social-media","popular"],"view":1,"example":"/jike/user/3EE02BC9-C5B3-4209-8750-4ED1EE0F67BB","parameters":{"id":"用户 id, 可在即刻分享出来的单条动态页点击用户头像进入个人主页，然后在个人主页的 URL 中找到，或者在单条动态页使用 RSSHub Radar 插件"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["web.okjike.com/u/:uid"],"target":"/user/:uid"}],"name":"用户动态","maintainers":["DIYgod","prnake"],"location":"user.ts"}' :test='{"code":0}' />

## 简书 <Site url="www.jianshu.com"/>

### 首页 <Site url="www.jianshu.com/" size="sm" />

<Route namespace="jianshu" :data='{"path":"/home","categories":["social-media","popular"],"view":0,"example":"/jianshu/home","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.jianshu.com/"]}],"name":"首页","maintainers":["DIYgod","HenryQW","JimenezLi"],"url":"www.jianshu.com/","location":"home.ts"}' :test='{"code":0}' />

### 专题 <Site url="www.jianshu.com" size="sm" />

<Route namespace="jianshu" :data='{"path":"/collection/:id","categories":["social-media","popular"],"view":0,"example":"/jianshu/collection/xYuZYD","parameters":{"id":"专题 id, 可在专题页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.jianshu.com/c/:id"]}],"name":"专题","maintainers":["DIYgod","HenryQW","JimenezLi"],"location":"collection.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 940)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### 作者 <Site url="www.jianshu.com" size="sm" />

<Route namespace="jianshu" :data='{"path":"/user/:id","categories":["social-media","popular"],"example":"/jianshu/user/yZq3ZV","view":0,"parameters":{"id":"作者 id, 可在作者主页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.jianshu.com/u/:id"]}],"name":"作者","maintainers":["DIYgod","HenryQW","JimenezLi"],"location":"user.ts"}' :test='{"code":0}' />

## 金十数据 <Site url="jin10.com"/>

### 市场快讯 <Site url="jin10.com/" size="sm" />

<Route namespace="jin10" :data='{"path":"/:important?","categories":["finance","popular"],"view":5,"example":"/jin10","parameters":{"important":"只看重要，任意值开启，留空关闭"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["jin10.com/"],"target":""}],"name":"市场快讯","maintainers":["laampui"],"url":"jin10.com/","location":"index.ts"}' :test='{"code":0}' />

### 主题文章 <Site url="jin10.com/" size="sm" />

<Route namespace="jin10" :data='{"path":"/topic/:id","categories":["finance","popular"],"view":0,"example":"/jin10/topic/396","parameters":{"id":"N"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["xnews.jin10.com/topic/:id"]}],"name":"主题文章","maintainers":["miles170"],"url":"jin10.com/","location":"topic.ts"}' :test='{"code":0}' />

## 金色财经 <Site url="jinse.cn"/>

### 快讯 <Site url="jinse.cn" size="sm" />

<Route namespace="jinse" :data='{"path":"/lives/:category?","categories":["finance","popular"],"view":5,"example":"/jinse/lives","parameters":{"category":{"description":"分类","options":[{"value":"0","label":"全部"},{"value":"1","label":"精选"},{"value":"2","label":"政策"},{"value":"3","label":"数据"},{"value":"4","label":"NFT"},{"value":"5","label":"项目"}],"default":"0"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"快讯","maintainers":["nczitzk"],"description":"| 全部 | 精选 | 政策 | 数据 | NFT | 项目 |\n  | ---- | ---- | ---- | ---- | --- | ---- |\n  | 0    | 1    | 2    | 3    | 4   | 5    |","location":"lives.ts"}' :test='{"code":0}' />

| 全部 | 精选 | 政策 | 数据 | NFT | 项目 |
  | ---- | ---- | ---- | ---- | --- | ---- |
  | 0    | 1    | 2    | 3    | 4   | 5    |

### 首页 <Site url="jinse.cn" size="sm" />

<Route namespace="jinse" :data='{"path":"/timeline/:category?","categories":["finance","popular"],"view":0,"example":"/jinse/timeline","parameters":{"category":{"description":"分类","options":[{"value":"头条","label":"头条"},{"value":"独家","label":"独家"},{"value":"铭文","label":"铭文"},{"value":"产业","label":"产业"},{"value":"项目","label":"项目"},{"value":"政策","label":"政策"},{"value":"AI","label":"AI"},{"value":"Web 3.0","label":"Web 3.0"},{"value":"以太坊 2.0","label":"以太坊 2.0"},{"value":"DeFi","label":"DeFi"},{"value":"Layer2","label":"Layer2"},{"value":"NFT","label":"NFT"},{"value":"DAO","label":"DAO"},{"value":"百科","label":"百科"}],"default":"头条"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"首页","maintainers":["nczitzk"],"description":"| 头条   | 独家 | 铭文    | 产业       | 项目 |\n  | ------ | ---- | ------- | ---------- | ---- |\n  | 政策   | AI   | Web 3.0 | 以太坊 2.0 | DeFi |\n  | Layer2 | NFT  | DAO     | 百科       |      |","location":"timeline.ts"}' :test='{"code":0}' />

| 头条   | 独家 | 铭文    | 产业       | 项目 |
  | ------ | ---- | ------- | ---------- | ---- |
  | 政策   | AI   | Web 3.0 | 以太坊 2.0 | DeFi |
  | Layer2 | NFT  | DAO     | 百科       |      |

## 晋江文学城 <Site url="jjwxc.net"/>

### 作品章节 <Site url="jjwxc.net" size="sm" />

<Route namespace="jjwxc" :data='{"path":"/book/:id?","categories":["reading","popular"],"view":5,"example":"/jjwxc/book/7013024","parameters":{"id":"作品 id，可在对应作品页中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"作品章节","maintainers":["nczitzk"],"location":"book.ts"}' :test='{"code":0}' />

## 韭研公社 <Site url="www.jiuyangongshe.com"/>

### 社群 <Site url="www.jiuyangongshe.com" size="sm" />

<Route namespace="jiuyangongshe" :data='{"path":"/community","categories":["finance","popular"],"view":0,"example":"/jiuyangongshe/community","maintainers":["TonyRL"],"name":"社群","radar":[{"source":["www.jiuyangongshe.com"]}],"location":"community.ts"}' :test='{"code":0}' />

## 老虎社区 <Site url="laohu8.com"/>

### 个人主页 <Site url="laohu8.com" size="sm" />

<Route namespace="laohu8" :data='{"path":"/personal/:id","categories":["finance","popular"],"view":0,"example":"/laohu8/personal/3527667596890271","parameters":{"id":"用户 ID，见网址链接"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["laohu8.com/personal/:id"]}],"name":"个人主页","maintainers":["Fatpandac"],"location":"personal.ts"}' :test='{"code":0}' />

## 律动 BlockBeats <Site url="www.theblockbeats.info"/>

### 新闻快讯 <Site url="www.theblockbeats.info" size="sm" />

<Route namespace="theblockbeats" :data='{"path":"/:channel?/:original?","categories":["finance","popular"],"view":0,"example":"/theblockbeats/newsflash","parameters":{"channel":{"description":"类型","options":[{"value":"newsflash","label":"快讯"},{"value":"article","label":"文章"}],"default":"newsflash"},"original":{"description":"文章类型，仅 `channel` 为 `article` 时有效","options":[{"value":"0","label":"全部"},{"value":"1","label":"深度"},{"value":"2","label":"精选"},{"value":"3","label":"热点追踪"}],"default":"0"}},"name":"新闻快讯","maintainers":["Fatpandac","jameshih"],"radar":[{"title":"文章","source":["www.theblockbeats.info/article"],"target":"/article"},{"title":"快讯","source":["www.theblockbeats.info/newsflash"],"target":"/newsflash"}],"description":"|    快讯   |   文章  |\n  | :-------: | :-----: |\n  | newsflash | article |\n\n  | 全部 | 深度 | 精选 | 热点追踪 |\n  | :--: | :--: | :--: | :---: |\n  |     | -2  | 1    |  2     |","location":"index.ts"}' :test='{"code":0}' />

|    快讯   |   文章  |
  | :-------: | :-----: |
  | newsflash | article |

  | 全部 | 深度 | 精选 | 热点追踪 |
  | :--: | :--: | :--: | :---: |
  |     | -2  | 1    |  2     |

## 麦肯锡 <Site url="mckinsey.com.cn"/>

### 洞见 <Site url="mckinsey.com.cn" size="sm" />

<Route namespace="mckinsey" :data='{"path":"/cn/:category?","categories":["finance","popular"],"view":0,"example":"/mckinsey/cn","parameters":{"category":{"description":"分类","options":[{"value":"2","label":"汽车"},{"value":"3","label":"金融服务"},{"value":"4","label":"消费者"},{"value":"5","label":"医药"},{"value":"7","label":"数字化"},{"value":"8","label":"制造业"},{"value":"9","label":"私募"},{"value":"10","label":"技术，媒体与通信"},{"value":"12","label":"城市化与可持续发展"},{"value":"13","label":"创新"},{"value":"16","label":"人才与领导力"},{"value":"18","label":"宏观经济"},{"value":"19","label":"麦肯锡全球研究院"},{"value":"25","label":"洞见"},{"value":"37","label":"麦肯锡季刊"},{"value":"41","label":"资本项目和基础设施"},{"value":"42","label":"旅游、运输和物流"},{"value":"45","label":"全球基础材料"}],"default":"25"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"洞见","maintainers":["laampui"],"description":"| 分类 | 分类名             |\n  | ---- | ------------------ |\n  | 25   | 全部洞见           |\n  | 2    | 汽车               |\n  | 3    | 金融服务           |\n  | 4    | 消费者             |\n  | 5    | 医药               |\n  | 7    | 数字化             |\n  | 8    | 制造业             |\n  | 9    | 私募               |\n  | 10   | 技术，媒体与通信   |\n  | 12   | 城市化与可持续发展 |\n  | 13   | 创新               |\n  | 16   | 人才与领导力       |\n  | 18   | 宏观经济           |\n  | 19   | 麦肯锡全球研究院   |\n  | 37   | 麦肯锡季刊         |\n  | 41   | 资本项目和基础设施 |\n  | 42   | 旅游、运输和物流   |\n  | 45   | 全球基础材料       |","location":"cn/index.ts"}' :test='{"code":0}' />

| 分类 | 分类名             |
  | ---- | ------------------ |
  | 25   | 全部洞见           |
  | 2    | 汽车               |
  | 3    | 金融服务           |
  | 4    | 消费者             |
  | 5    | 医药               |
  | 7    | 数字化             |
  | 8    | 制造业             |
  | 9    | 私募               |
  | 10   | 技术，媒体与通信   |
  | 12   | 城市化与可持续发展 |
  | 13   | 创新               |
  | 16   | 人才与领导力       |
  | 18   | 宏观经济           |
  | 19   | 麦肯锡全球研究院   |
  | 37   | 麦肯锡季刊         |
  | 41   | 资本项目和基础设施 |
  | 42   | 旅游、运输和物流   |
  | 45   | 全球基础材料       |

## 起点 <Site url="qidian.com"/>

### 作品章节 <Site url="qidian.com" size="sm" />

<Route namespace="qidian" :data='{"path":"/chapter/:id","categories":["reading","popular"],"view":5,"example":"/qidian/chapter/1010400217","parameters":{"id":"小说 id, 可在对应小说页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["book.qidian.com/info/:id"]}],"name":"作品章节","maintainers":["fuzy112"],"location":"chapter.ts"}' :test='{"code":0}' />

## 人人影视 <Site url="yysub.net"/>

### 今日播出 <Site url="yysub.net/tv/schedule" size="sm" />

<Route namespace="yyets" :data='{"path":"/today","categories":["multimedia","popular"],"view":5,"example":"/yyets/today","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yysub.net/tv/schedule","yysub.net/"]}],"name":"今日播出","maintainers":["bao1991213"],"url":"yysub.net/tv/schedule","location":"today.ts"}' :test='{"code":0}' />

### 影视资讯 <Site url="yysub.net" size="sm" />

<Route namespace="yyets" :data='{"path":"/article/:type?","categories":["multimedia","popular"],"view":0,"example":"/yyets/article","parameters":{"type":{"description":"类型","options":[{"value":"all","label":"全部"},{"value":"news","label":"影视资讯"},{"value":"report","label":"收视快报"},{"value":"m_review","label":"人人影评"},{"value":"t_review","label":"人人剧评"},{"value":"new_review","label":"新剧评测"},{"value":"recom","label":"片单推荐"}],"default":"all"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"影视资讯","maintainers":["wb121017405"],"description":"| 全部 | 影视资讯 | 收视快报 | 人人影评  | 人人剧评  | 新剧评测    | 片单推荐 |\n  | ---- | -------- | -------- | --------- | --------- | ----------- | -------- |\n  |      | news     | report   | m_review | t_review | new_review | recom    |","location":"article.ts"}' :test='{"code":0}' />

| 全部 | 影视资讯 | 收视快报 | 人人影评  | 人人剧评  | 新剧评测    | 片单推荐 |
  | ---- | -------- | -------- | --------- | --------- | ----------- | -------- |
  |      | news     | report   | m_review | t_review | new_review | recom    |

## 少数派 sspai <Site url="sspai.com"/>

### 首页 <Site url="sspai.com/index" size="sm" />

<Route namespace="sspai" :data='{"path":"/index","categories":["new-media","popular"],"view":0,"example":"/sspai/index","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["sspai.com/index"]}],"name":"首页","maintainers":["HenryQW"],"url":"sspai.com/index","location":"index.ts"}' :test='{"code":0}' />

## 深潮 TechFlow <Site url="techflowpost.com"/>

### 快讯 <Site url="techflowpost.com/" size="sm" />

<Route namespace="techflowpost" :data='{"path":"/express","categories":["finance","popular"],"view":0,"example":"/techflowpost/express","radar":[{"source":["techflowpost.com/newsletter/index.html"]}],"name":"快讯","maintainers":["nczitzk"],"url":"techflowpost.com/","location":"express.ts"}' :test='{"code":0}' />

### 首页 <Site url="techflowpost.com/" size="sm" />

<Route namespace="techflowpost" :data='{"path":"/","example":"/techflowpost","radar":[{"source":["techflowpost.com/"]}],"name":"首页","categories":["finance","popular"],"view":0,"maintainers":["nczitzk"],"url":"techflowpost.com/","location":"index.ts"}' :test='{"code":0}' />

## 什么值得买 <Site url="post.smzdm.com"/>

:::tip
网站也提供了部分 RSS: [https://www.smzdm.com/dingyue](https://www.smzdm.com/dingyue)
:::

### 关键词 <Site url="post.smzdm.com" size="sm" />

<Route namespace="smzdm" :data='{"path":"/keyword/:keyword","categories":["shopping","popular"],"view":5,"example":"/smzdm/keyword/女装","parameters":{"keyword":"你想订阅的关键词"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"关键词","maintainers":["DIYgod","MeanZhang"],"location":"keyword.ts"}' :test='{"code":0}' />

### 排行榜 <Site url="post.smzdm.com" size="sm" />

<Route namespace="smzdm" :data='{"path":"/ranking/:rank_type/:rank_id/:hour","categories":["shopping","popular"],"view":5,"example":"/smzdm/ranking/pinlei/11/3","parameters":{"rank_type":{"description":"榜单类型","options":[{"value":"pinlei","label":"好价品类榜"},{"value":"dianshang","label":"好价电商榜"},{"value":"haitao","label":"海淘 TOP 榜"},{"value":"haowen","label":"好文排行榜"},{"value":"haowu","label":"好物排行榜"}]},"rank_id":{"description":"榜单ID","options":[{"label":"好价品类榜 - 全部","value":"11"},{"label":"好价品类榜 - 食品生鲜","value":"12"},{"label":"好价品类榜 - 电脑数码","value":"13"},{"label":"好价品类榜 - 运动户外","value":"14"},{"label":"好价品类榜 - 家用电器","value":"15"},{"label":"好价品类榜 - 白菜","value":"17"},{"label":"好价品类榜 - 服饰鞋包","value":"74"},{"label":"好价品类榜 - 日用百货","value":"75"},{"label":"好价电商榜 - 券活动","value":"24"},{"label":"好价电商榜 - 京东","value":"23"},{"label":"好价电商榜 - 天猫","value":"25"},{"label":"好价电商榜 - 亚马逊中国","value":"26"},{"label":"好价电商榜 - 国美在线","value":"27"},{"label":"好价电商榜 - 苏宁易购","value":"28"},{"label":"好价电商榜 - 网易","value":"29"},{"label":"好价电商榜 - 西集网","value":"30"},{"label":"好价电商榜 - 美国亚马逊","value":"31"},{"label":"好价电商榜 - 日本亚马逊","value":"32"},{"label":"好价电商榜 - ebay","value":"33"},{"label":"海淘 TOP 榜 - 全部","value":"39"},{"label":"海淘 TOP 榜 - 海外直邮","value":"34"},{"label":"海淘 TOP 榜 - 美国榜","value":"35"},{"label":"海淘 TOP 榜 - 欧洲榜","value":"36"},{"label":"海淘 TOP 榜 - 澳新榜","value":"37"},{"label":"海淘 TOP 榜 - 亚洲榜","value":"38"},{"label":"海淘 TOP 榜 - 晒物榜","value":"hsw"},{"label":"好文排行榜 - 原创","value":"yc"},{"label":"好文排行榜 - 资讯","value":"zx"},{"label":"好物排行榜 - 新晋榜","value":"hwall"},{"label":"好物排行榜 - 消费众测","value":"zc"},{"label":"好物排行榜 - 新锐品牌","value":"nb"},{"label":"好物排行榜 - 好物榜单","value":"hw"}]},"hour":{"description":"时间跨度","options":[{"value":"3","label":"3 小时"},{"value":"12","label":"12 小时"},{"value":"24","label":"24 小时"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"排行榜","maintainers":["DIYgod"],"location":"ranking.ts"}' :test='{"code":1,"message":"AssertionError: expected NaN to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1565)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)"}' />

## 书伴 <Site url="bookfere.com"/>

### 分类 <Site url="bookfere.com" size="sm" />

<Route namespace="bookfere" :data='{"path":"/:category","categories":["reading","popular"],"view":0,"example":"/bookfere/skills","parameters":{"category":{"description":"分类名","options":[{"value":"weekly","label":"每周一书"},{"value":"skills","label":"使用技巧"},{"value":"books","label":"图书推荐"},{"value":"news","label":"新闻速递"},{"value":"essay","label":"精选短文"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"分类","maintainers":["OdinZhang"],"description":"| 每周一书 | 使用技巧 | 图书推荐 | 新闻速递 | 精选短文 |\n  | -------- | -------- | -------- | -------- | -------- |\n  | weekly   | skills   | books    | news     | essay    |","location":"category.ts"}' :test='{"code":0}' />

| 每周一书 | 使用技巧 | 图书推荐 | 新闻速递 | 精选短文 |
  | -------- | -------- | -------- | -------- | -------- |
  | weekly   | skills   | books    | news     | essay    |

## 听听 FM <Site url="mobile.tingtingfm.com"/>

### 节目 <Site url="mobile.tingtingfm.com" size="sm" />

<Route namespace="tingtingfm" :data='{"path":"/program/:programId","categories":["multimedia","popular"],"view":4,"example":"/tingtingfm/program/M7VJv6Jj4R","parameters":{"programId":"节目 ID，可以在 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":true,"supportScihub":false},"radar":[{"source":["mobile.tingtingfm.com/v3/program/:programId"]}],"name":"节目","maintainers":["TonyRL"],"location":"program.ts"}' :test='{"code":0}' />

## 微博 <Site url="weibo.com"/>

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
| showRetweeted              | 是否显示转发的微博                                                 | 0/1/true/false | true                               |

指定更多与默认值不同的参数选项可以改善 RSS 的可读性，如

[https://rsshub.app/weibo/user/1642909335/readable=1&authorNameBold=1&showAuthorInTitle=1&showAuthorInDesc=1&showAuthorAvatarInDesc=1&showEmojiForRetweet=1&showRetweetTextInTitle=0&addLinkForPics=1&showTimestampInDescription=1&showTimestampInDescription=1&heightOfPics=150](https://rsshub.app/weibo/user/1642909335/readable=1&authorNameBold=1&showAuthorInTitle=1&showAuthorInDesc=1&showAuthorAvatarInDesc=1&showEmojiForRetweet=1&showRetweetTextInTitle=0&addLinkForPics=1&showTimestampInDescription=1&showTimestampInDescription=1&heightOfPics=150)

的效果为

<img loading="lazy" src="/img/readable-weibo.png" alt="微博小秘书的可读微博 RSS" />

### 博主 <Site url="weibo.com" size="sm" />

<Route namespace="weibo" :data='{"path":"/user/:uid/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/weibo/user/1195230310","parameters":{"uid":"用户 id, 博主主页打开控制台执行 `$CONFIG.oid` 获取","routeParams":"额外参数；请参阅上面的说明和表格；特别地，当 `routeParams=1` 时开启微博视频显示"},"features":{"requireConfig":[{"name":"WEIBO_COOKIES","optional":true,"description":""}],"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["m.weibo.cn/u/:uid","m.weibo.cn/profile/:uid"],"target":"/user/:uid"},{"source":["weibo.com/u/:uid"],"target":"/user/:uid"},{"source":["www.weibo.com/u/:uid"],"target":"/user/:uid"}],"name":"博主","maintainers":["DIYgod","iplusx","Rongronggg9","Konano"],"description":":::warning\n  部分博主仅登录可见，未提供 Cookie 的情况下不支持订阅，可以通过打开 `https://m.weibo.cn/u/:uid` 验证\n  :::","location":"user.ts"}' :test='{"code":0}' />

:::warning
  部分博主仅登录可见，未提供 Cookie 的情况下不支持订阅，可以通过打开 `https://m.weibo.cn/u/:uid` 验证
  :::

### 关键词 <Site url="weibo.com" size="sm" />

<Route namespace="weibo" :data='{"path":"/keyword/:keyword/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/weibo/keyword/RSSHub","parameters":{"keyword":"你想订阅的微博关键词","routeParams":"额外参数；请参阅上面的说明和表格"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"关键词","maintainers":["DIYgod","Rongronggg9"],"location":"keyword.ts"}' :test='{"code":0}' />

### 热搜榜 <Site url="s.weibo.com/top/summary" size="sm" />

<Route namespace="weibo" :data='{"path":"/search/hot/:fulltext?","categories":["social-media","popular"],"view":1,"example":"/weibo/search/hot","parameters":{"fulltext":{"description":"\n-   使用`/weibo/search/hot`可以获取热搜条目列表；\n-   使用`/weibo/search/hot/fulltext`可以进一步获取热搜条目下的摘要信息（不含图片视频）；\n-   使用`/weibo/search/hot/fulltext?pic=true`可以获取图片缩略（但需要配合额外的手段，例如浏览器上的 Header Editor 等来修改 referer 参数为`https://weibo.com`，以规避微博的外链限制，否则图片无法显示。）\n-   使用`/weibo/search/hot/fulltext?pic=true&fullpic=true`可以获取 Original 图片（但需要配合额外的手段，例如浏览器上的 Header Editor 等来修改 referer 参数为`https://weibo.com`，以规避微博的外链限制，否则图片无法显示。）"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["s.weibo.com/top/summary"]}],"name":"热搜榜","maintainers":["xyqfer","shinemoon"],"url":"s.weibo.com/top/summary","location":"search/hot.ts"}' :test='{"code":0}' />

## 小红书 <Site url="xiaohongshu.com"/>

### 用户笔记 <Site url="xiaohongshu.com" size="sm" />

<Route namespace="xiaohongshu" :data='{"path":"/user/:user_id/:category","name":"用户笔记","categories":["social-media","popular"],"view":0,"maintainers":["lotosbin"],"example":"/xiaohongshu/user/593032945e87e77791e03696/notes","features":{"antiCrawler":true,"requirePuppeteer":true},"parameters":{"user_id":"user id, length 24 characters","category":{"description":"category, notes or collect","options":[{"value":"notes","label":"notes"},{"value":"collect","label":"collect"}]}},"location":"user.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1900)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

## 小宇宙 <Site url="xiaoyuzhoufm.com"/>

### 播客 <Site url="xiaoyuzhoufm.com/" size="sm" />

<Route namespace="xiaoyuzhou" :data='{"path":"/podcast/:id","categories":["multimedia","popular"],"view":4,"example":"/xiaoyuzhou/podcast/6021f949a789fca4eff4492c","parameters":{"id":"播客 id 或单集 id，可以在小宇宙播客的 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["xiaoyuzhoufm.com/podcast/:id","xiaoyuzhoufm.com/episode/:id"]}],"name":"播客","maintainers":["hondajojo","jtsang4","pseudoyu"],"url":"xiaoyuzhoufm.com/","location":"podcast.ts"}' :test='{"code":0}' />

## 意林杂志 <Site url="www.yilinzazhi.com"/>

### 近期文章汇总 <Site url="www.yilinzazhi.com" size="sm" />

<Route namespace="yilinzazhi" :data='{"path":"/latest","categories":["reading","popular"],"view":0,"example":"/yilinzazhi/latest","radar":[{"source":["www.yilinzazhi.com"],"target":"/"}],"name":"近期文章汇总","maintainers":["g0ngjie"],"url":"www.yilinzazhi.com","description":"最近一期的文章汇总","location":"latest.ts"}' :test='{"code":0}' />

最近一期的文章汇总

### 文章列表 <Site url="www.yilinzazhi.com" size="sm" />

<Route namespace="yilinzazhi" :data='{"path":"/","categories":["reading","popular"],"view":0,"example":"/yilinzazhi","radar":[{"source":["www.yilinzazhi.com"],"target":"/"}],"name":"文章列表","maintainers":["g0ngjie"],"url":"www.yilinzazhi.com","location":"index.ts"}' :test='{"code":0}' />

## 有知有行 <Site url="youzhiyouxing.cn"/>

### 有知文章 <Site url="youzhiyouxing.cn/materials" size="sm" />

<Route namespace="youzhiyouxing" :data='{"path":"/materials/:id?","categories":["finance","popular"],"view":0,"example":"/youzhiyouxing/materials","parameters":{"id":{"description":"分类","options":[{"value":"0","label":"全部"},{"value":"4","label":"知行小酒馆"},{"value":"2","label":"知行黑板报"},{"value":"10","label":"无人知晓"},{"value":"1","label":"孟岩专栏"},{"value":"3","label":"知行读书会"},{"value":"11","label":"你好，同路人"}],"default":"0"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["youzhiyouxing.cn/materials"],"target":"/materials"}],"name":"有知文章","maintainers":["broven","Fatpandac","nczitzk"],"url":"youzhiyouxing.cn/materials","description":"| 全部 | 知行小酒馆 | 知行黑板报 | 无人知晓 | 孟岩专栏 | 知行读书会 | 你好，同路人 |\n  | :--: | :--------: | :--------: | :------: | :------: | :--------: | :----------: |\n  |   0  |      4     |      2     |    10    |     1    |      3     |      11      |","location":"materials.ts"}' :test='{"code":0}' />

| 全部 | 知行小酒馆 | 知行黑板报 | 无人知晓 | 孟岩专栏 | 知行读书会 | 你好，同路人 |
  | :--: | :--------: | :--------: | :------: | :------: | :--------: | :----------: |
  |   0  |      4     |      2     |    10    |     1    |      3     |      11      |

## 站酷 <Site url="www.zcool.com.cn"/>

### 用户作品 <Site url="www.zcool.com.cn" size="sm" />

<Route namespace="zcool" :data='{"path":"/user/:uid","categories":["design","popular"],"view":2,"example":"/zcool/user/baiyong","parameters":{"uid":"个性域名前缀或者用户ID"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.zcool.com.cn/u/:id"],"target":"/user/:id"}],"name":"用户作品","description":"  例如:\n\n    站酷的个人主页 `https://baiyong.zcool.com.cn` 对应 rss 路径 `/zcool/user/baiyong`\n\n    站酷的个人主页 `https://www.zcool.com.cn/u/568339` 对应 rss 路径 `/zcool/user/568339`","maintainers":["junbaor"],"location":"user.ts"}' :test='{"code":0}' />

  例如:

    站酷的个人主页 `https://baiyong.zcool.com.cn` 对应 rss 路径 `/zcool/user/baiyong`

    站酷的个人主页 `https://www.zcool.com.cn/u/568339` 对应 rss 路径 `/zcool/user/568339`

### 作品总榜单 <Site url="www.zcool.com.cn" size="sm" />

<Route namespace="zcool" :data='{"path":"/top/:type","categories":["design","popular"],"view":2,"example":"/zcool/top/design","parameters":{"type":{"description":"推荐类型","options":[{"value":"design","label":"作品榜单"},{"value":"article","label":"文章榜单"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"作品总榜单","maintainers":["yuuow"],"location":"top.ts"}' :test='{"code":0}' />

## 证券时报网 <Site url="stcn.com"/>

### 栏目 <Site url="stcn.com" size="sm" />

<Route namespace="stcn" :data='{"path":"/:id?","categories":["finance","popular"],"view":0,"example":"/stcn/yw","parameters":{"id":{"description":"栏目 id","options":[{"value":"kx","label":"快讯"},{"value":"yw","label":"要闻"},{"value":"gs","label":"股市"},{"value":"company","label":"公司"},{"value":"data","label":"数据"},{"value":"fund","label":"基金"},{"value":"finance","label":"金融"},{"value":"comment","label":"评论"},{"value":"cj","label":"产经"},{"value":"ct","label":"创投"},{"value":"kcb","label":"科创板"},{"value":"xsb","label":"新三板"},{"value":"tj","label":"投教"},{"value":"zk","label":"ESG"},{"value":"gd","label":"滚动"},{"value":"gsyl","label":"股市一览"},{"value":"djjd","label":"独家解读"},{"value":"gsxw","label":"公司新闻"},{"value":"gsdt","label":"公司动态"},{"value":"djsj","label":"独家数据"},{"value":"kd","label":"看点数据"},{"value":"zj","label":"资金流向"},{"value":"sj_kcb","label":"科创板"},{"value":"hq","label":"行情总貌"},{"value":"zl","label":"专栏"},{"value":"author","label":"作者"},{"value":"cjhy","label":"行业"},{"value":"cjqc","label":"汽车"},{"value":"tjkt","label":"投教课堂"},{"value":"zczs","label":"政策知识"},{"value":"tjdt","label":"投教动态"},{"value":"zthd","label":"专题活动"}],"default":"yw"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"栏目","maintainers":["nczitzk"],"description":"| 快讯 | 要闻 | 股市 | 公司    | 数据 |\n  | ---- | ---- | ---- | ------- | ---- |\n  | kx   | yw   | gs   | company | data |\n\n  | 基金 | 金融    | 评论    | 产经 | 创投 |\n  | ---- | ------- | ------- | ---- | ---- |\n  | fund | finance | comment | cj   | ct   |\n\n  | 科创板 | 新三板 | 投教 | ESG | 滚动 |\n  | ------ | ------ | ---- | --- | ---- |\n  | kcb    | xsb    | tj   | zk  | gd   |\n\n  | 股市一览 | 独家解读 |\n  | -------- | -------- |\n  | gsyl     | djjd     |\n\n  | 公司新闻 | 公司动态 |\n  | -------- | -------- |\n  | gsxw     | gsdt     |\n\n  | 独家数据 | 看点数据 | 资金流向 | 科创板  | 行情总貌 |\n  | -------- | -------- | -------- | ------- | -------- |\n  | djsj     | kd       | zj       | sj_kcb | hq       |\n\n  | 专栏 | 作者   |\n  | ---- | ------ |\n  | zl   | author |\n\n  | 行业 | 汽车 |\n  | ---- | ---- |\n  | cjhy | cjqc |\n\n  | 投教课堂 | 政策知识 | 投教动态 | 专题活动 |\n  | -------- | -------- | -------- | -------- |\n  | tjkt     | zczs     | tjdt     | zthd     |","location":"index.ts"}' :test='{"code":0}' />

| 快讯 | 要闻 | 股市 | 公司    | 数据 |
  | ---- | ---- | ---- | ------- | ---- |
  | kx   | yw   | gs   | company | data |

  | 基金 | 金融    | 评论    | 产经 | 创投 |
  | ---- | ------- | ------- | ---- | ---- |
  | fund | finance | comment | cj   | ct   |

  | 科创板 | 新三板 | 投教 | ESG | 滚动 |
  | ------ | ------ | ---- | --- | ---- |
  | kcb    | xsb    | tj   | zk  | gd   |

  | 股市一览 | 独家解读 |
  | -------- | -------- |
  | gsyl     | djjd     |

  | 公司新闻 | 公司动态 |
  | -------- | -------- |
  | gsxw     | gsdt     |

  | 独家数据 | 看点数据 | 资金流向 | 科创板  | 行情总貌 |
  | -------- | -------- | -------- | ------- | -------- |
  | djsj     | kd       | zj       | sj_kcb | hq       |

  | 专栏 | 作者   |
  | ---- | ------ |
  | zl   | author |

  | 行业 | 汽车 |
  | ---- | ---- |
  | cjhy | cjqc |

  | 投教课堂 | 政策知识 | 投教动态 | 专题活动 |
  | -------- | -------- | -------- | -------- |
  | tjkt     | zczs     | tjdt     | zthd     |

## 知乎 <Site url="www.zhihu.com"/>

:::tip
自2024年7月，未登录状态下大部分路由[无法获取全文](https://github.com/DIYgod/RSSHub/issues/16260)。若有需要请在登陆知乎后寻找并添加包含`z_c0`的Cookies至环境变量`ZHIHU_COOKIES`。
:::

### 用户动态 <Site url="www.zhihu.com" size="sm" />

<Route namespace="zhihu" :data='{"path":"/people/activities/:id","categories":["social-media","popular"],"view":0,"example":"/zhihu/people/activities/diygod","parameters":{"id":"作者 id，可在用户主页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.zhihu.com/people/:id"]}],"name":"用户动态","maintainers":["DIYgod"],"location":"activities.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1987)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### 知乎热榜 <Site url="www.zhihu.com" size="sm" />

<Route namespace="zhihu" :data='{"path":"/hot/:category?","categories":["social-media","popular"],"example":"/zhihu/hot","view":0,"parameters":{"category":{"description":"分类","default":"total","options":[{"value":"total","label":"全站"},{"value":"focus","label":"国际"},{"value":"science","label":"科学"},{"value":"car","label":"汽车"},{"value":"zvideo","label":"视频"},{"value":"fashion","label":"时尚"},{"value":"depth","label":"时事"},{"value":"digital","label":"数码"},{"value":"sport","label":"体育"},{"value":"school","label":"校园"},{"value":"film","label":"影视"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"知乎热榜","maintainers":["nczitzk"],"location":"hot.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1992)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.7.9_jsdom@25.0.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

## 智通财经网 <Site url="zhitongcaijing.com"/>

### 推荐 <Site url="zhitongcaijing.com" size="sm" />

<Route namespace="zhitongcaijing" :data='{"path":"/:id?/:category?","categories":["finance","popular"],"view":0,"example":"/zhitongcaijing","parameters":{"id":"栏目 id，可在对应栏目页 URL 中找到，默认为 recommend，即推荐","category":"分类 id，可在对应栏目子分类页 URL 中找到，默认为全部"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"推荐","maintainers":["nczitzk"],"description":"| id           | 栏目 |\n  | ------------ | ---- |\n  | recommend    | 推荐 |\n  | hkstock      | 港股 |\n  | meigu        | 美股 |\n  | agu          | 沪深 |\n  | ct           | 创投 |\n  | esg          | ESG  |\n  | aqs          | 券商 |\n  | ajj          | 基金 |\n  | focus        | 要闻 |\n  | announcement | 公告 |\n  | research     | 研究 |\n  | shares       | 新股 |\n  | bazaar       | 市场 |\n  | company      | 公司 |","location":"index.ts"}' :test='{"code":0}' />

| id           | 栏目 |
  | ------------ | ---- |
  | recommend    | 推荐 |
  | hkstock      | 港股 |
  | meigu        | 美股 |
  | agu          | 沪深 |
  | ct           | 创投 |
  | esg          | ESG  |
  | aqs          | 券商 |
  | ajj          | 基金 |
  | focus        | 要闻 |
  | announcement | 公告 |
  | research     | 研究 |
  | shares       | 新股 |
  | bazaar       | 市场 |
  | company      | 公司 |

