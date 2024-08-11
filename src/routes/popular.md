# 🌟 Popular

## AP News <Site url="apnews.com"/>

### News <Site url="apnews.com" size="sm" />

<Route namespace="apnews" :data='{"path":"/rss/:category?","categories":["traditional-media","popular"],"example":"/apnews/rss/business","view":0,"parameters":{"category":{"description":"Category from the first segment of the corresponding site, or `index` for the front page.","default":"index"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["apnews.com/:rss"],"target":"/rss/:rss"}],"name":"News","maintainers":["zoenglinghou","mjysci","TonyRL"],"location":"rss.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 50)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.0/node_modules/tinypool/dist/entry/process.js:54:20)"}' />

### Topics <Site url="apnews.com" size="sm" />

<Route namespace="apnews" :data='{"path":"/topics/:topic?","categories":["traditional-media","popular"],"example":"/apnews/topics/apf-topnews","view":0,"parameters":{"topic":{"description":"Topic name, can be found in URL. For example: the topic name of AP Top News [https://apnews.com/apf-topnews](https://apnews.com/apf-topnews) is `apf-topnews`","default":"trending-news"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["apnews.com/hub/:topic"],"target":"/topics/:topic"}],"name":"Topics","maintainers":["zoenglinghou","mjysci","TonyRL"],"location":"topics.ts"}' :test='{"code":0}' />

## Apple <Site url="apps.apple.com"/>

### App Update <Site url="apps.apple.com" size="sm" />

<Route namespace="apple" :data='{"path":"/apps/update/:country/:id/:platform?","categories":["program-update","popular"],"view":5,"example":"/apple/apps/update/us/id408709785","parameters":{"country":"App Store Country, obtain from the app URL, see below","id":"App id, obtain from the app URL","platform":{"description":"App Platform, see below, all by default","options":[{"value":"All","label":"all"},{"value":"iOS","label":"iOS"},{"value":"macOS","label":"macOS"},{"value":"tvOS","label":"tvOS"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["apps.apple.com/:country/app/:appSlug/:id","apps.apple.com/:country/app/:id"],"target":"/apps/update/:country/:id"}],"name":"App Update","maintainers":["EkkoG","nczitzk"],"description":"\n  :::tip\n  For example, the URL of [GarageBand](https://apps.apple.com/us/app/messages/id408709785) in the App Store is `https://apps.apple.com/us/app/messages/id408709785`. In this case, the `App Store Country` parameter for the route is `us`, and the `App id` parameter is `id1146560473`. So the route should be [`/apple/apps/update/us/id408709785`](https://rsshub.app/apple/apps/update/us/id408709785).\n  :::","location":"apps.ts"}' :test='{"code":0}' />


  :::tip
  For example, the URL of [GarageBand](https://apps.apple.com/us/app/messages/id408709785) in the App Store is `https://apps.apple.com/us/app/messages/id408709785`. In this case, the `App Store Country` parameter for the route is `us`, and the `App id` parameter is `id1146560473`. So the route should be [`/apple/apps/update/us/id408709785`](https://rsshub.app/apple/apps/update/us/id408709785).
  :::

## Docker Hub <Site url="hub.docker.com"/>

### Image New Build <Site url="hub.docker.com" size="sm" />

<Route namespace="dockerhub" :data='{"path":"/build/:owner/:image/:tag?","categories":["program-update","popular"],"view":5,"example":"/dockerhub/build/diygod/rsshub","parameters":{"owner":"Image owner, the owner of the official image fills in the library, for example: /dockerhub/build/library/mysql","image":"Image name","tag":{"description":"Image tag","default":"latest"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Image New Build","maintainers":["HenryQW"],"location":"build.ts"}' :test='{"code":0}' />

## Epic Games Store <Site url="store.epicgames.com"/>

### Free games <Site url="store.epicgames.com" size="sm" />

<Route namespace="epicgames" :data='{"path":"/freegames/:locale?/:country?","categories":["game","popular"],"view":5,"example":"/epicgames/freegames","parameters":{"locale":{"description":"Locale","default":"en-US"},"country":{"description":"Country","default":"US"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["store.epicgames.com/:locale/free-games"],"target":"/freegames/:locale"}],"name":"Free games","maintainers":["DIYgod","NeverBehave","Zyx-A","junfengP","nczitzk","KotaHv"],"location":"index.ts"}' :test='{"code":0}' />

## Fediverse <Site url="fediverse.observer"/>

### Timeline <Site url="fediverse.observer" size="sm" />

<Route namespace="fediverse" :data='{"path":"/timeline/:account","categories":["social-media","popular"],"view":1,"example":"/fediverse/timeline/Mastodon@mastodon.social","parameters":{"account":"username@domain"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Timeline","maintainers":["DIYgod"],"location":"timeline.ts"}' :test='{"code":0}' />

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

<Route namespace="github" :data='{"path":"/trending/:since/:language/:spoken_language?","categories":["programming","popular"],"example":"/github/trending/daily/javascript/en","view":0,"parameters":{"since":{"description":"time range","options":[{"value":"daily","label":"Today"},{"value":"weekly","label":"This week"},{"value":"monthly","label":"This month"}]},"language":{"description":"the feed language, available in [Trending page](https://github.com/trending/javascript?since=monthly) &#39;s URL, don&#39;t filter option is `any`","default":"any"},"spoken_language":{"description":"natural language, available in [Trending page](https://github.com/trending/javascript?since=monthly) &#39;s URL"}},"features":{"requireConfig":[{"name":"GITHUB_ACCESS_TOKEN","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["github.com/trending"],"target":"/trending/:since"}],"name":"Trending","maintainers":["DIYgod","jameschensmith"],"url":"github.com/trending","location":"trending.ts"}' :test='undefined' />

### User Activities <Site url="github.com" size="sm" />

<Route namespace="github" :data='{"path":"/activity/:user","name":"User Activities","maintainers":["hyoban"],"example":"/github/activity/DIYgod","categories":["programming","popular"],"view":0,"parameters":{"user":"GitHub username"},"description":"Get the activities of a user on GitHub, based on the GitHub official RSS feed","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["github.com/:user"],"target":"/activity/:user"}],"location":"activity.ts"}' :test='{"code":0}' />

Get the activities of a user on GitHub, based on the GitHub official RSS feed

## Google <Site url="www.google.com"/>

### Scholar Author Citations <Site url="www.google.com" size="sm" />

<Route namespace="google" :data='{"path":"/citations/:id","categories":["journal","popular"],"example":"/google/citations/mlmE4JMAAAAJ","parameters":{"id":"N"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Scholar Author Citations","maintainers":["KellyHwong","const7"],"description":"The parameter id in the route is the id in the URL of the user&#39;s Google Scholar reference page, for example `https://scholar.google.com/citations?user=mlmE4JMAAAAJ` to `mlmE4JMAAAAJ`.\n\n  Query parameters are also supported here, for example `https://scholar.google.com/citations?user=mlmE4JMAAAAJ&sortby=pubdate` to `mlmE4JMAAAAJ&sortby=pubdate`. Please make sure that the user id (`mlmE4JMAAAAJ` in this case) should be the first parameter in the query string.","location":"citations.ts"}' :test='{"code":0}' />

The parameter id in the route is the id in the URL of the user's Google Scholar reference page, for example `https://scholar.google.com/citations?user=mlmE4JMAAAAJ` to `mlmE4JMAAAAJ`.

  Query parameters are also supported here, for example `https://scholar.google.com/citations?user=mlmE4JMAAAAJ&sortby=pubdate` to `mlmE4JMAAAAJ&sortby=pubdate`. Please make sure that the user id (`mlmE4JMAAAAJ` in this case) should be the first parameter in the query string.

### Scholar Keywords Monitoring <Site url="www.google.com" size="sm" />

<Route namespace="google" :data='{"path":"/scholar/:query","categories":["journal","popular"],"example":"/google/scholar/data+visualization","parameters":{"query":"query statement which supports「Basic」and「Advanced」modes"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Scholar Keywords Monitoring","maintainers":["HenryQW"],"description":":::warning\n  Google Scholar has strict anti-crawling mechanism implemented, the demo below doesn&#39;t guarantee availability. Please deploy your own instance as it might increase the stability.\n  :::\n\n  1.  Basic mode, sample query is the keywords desired, eg.「data visualization」, [https://rsshub.app/google/scholar/data+visualization](https://rsshub.app/google/scholar/data+visualization).\n\n  2.  Advanced mode, visit [Google Scholar](https://scholar.google.com/schhp?hl=en&as_sdt=0,5), click the top left corner and select「Advanced Search」, fill in your conditions and submit the search. The URL should look like this: [https://scholar.google.com/scholar?as_q=data+visualization&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=&as_publication=&as_ylo=2018&as_yhi=&hl=en&as_sdt=0%2C5](https://scholar.google.com/scholar?as_q=data+visualization&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=&as_publication=&as_ylo=2018&as_yhi=&hl=en&as_sdt=0%2C5), copy everything after `https://scholar.google.com/scholar?` from the URL and use it as the query for this route. The complete URL for the above example should look like this: [https://rsshub.app/google/scholar/as_q=data+visualization&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=&as_publication=&as_ylo=2018&as_yhi=&hl=en&as_sdt=0%2C5](https://rsshub.app/google/scholar/as_q=data+visualization&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=&as_publication=&as_ylo=2018&as_yhi=&hl=en&as_sdt=0%2C5).","location":"scholar.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 609)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.0/node_modules/tinypool/dist/entry/process.js:54:20)"}' />

:::warning
  Google Scholar has strict anti-crawling mechanism implemented, the demo below doesn't guarantee availability. Please deploy your own instance as it might increase the stability.
  :::

  1.  Basic mode, sample query is the keywords desired, eg.「data visualization」, [https://rsshub.app/google/scholar/data+visualization](https://rsshub.app/google/scholar/data+visualization).

  2.  Advanced mode, visit [Google Scholar](https://scholar.google.com/schhp?hl=en&as_sdt=0,5), click the top left corner and select「Advanced Search」, fill in your conditions and submit the search. The URL should look like this: [https://scholar.google.com/scholar?as_q=data+visualization&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=&as_publication=&as_ylo=2018&as_yhi=&hl=en&as_sdt=0%2C5](https://scholar.google.com/scholar?as_q=data+visualization&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=&as_publication=&as_ylo=2018&as_yhi=&hl=en&as_sdt=0%2C5), copy everything after `https://scholar.google.com/scholar?` from the URL and use it as the query for this route. The complete URL for the above example should look like this: [https://rsshub.app/google/scholar/as_q=data+visualization&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=&as_publication=&as_ylo=2018&as_yhi=&hl=en&as_sdt=0%2C5](https://rsshub.app/google/scholar/as_q=data+visualization&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=&as_publication=&as_ylo=2018&as_yhi=&hl=en&as_sdt=0%2C5).

## Instagram <Site url="www.instagram.com"/>

### User Profile - Picnob <Site url="www.instagram.com" size="sm" />

<Route namespace="picnob" :data='{"path":"/user/:id","categories":["social-media","popular"],"example":"/picnob/user/xlisa_olivex","parameters":{"id":"Instagram id"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["picnob.com/profile/:id/*"],"target":"/user/:id"}],"name":"User Profile - Picnob","maintainers":["TonyRL","micheal-death"],"view":2,"location":"user.ts"}' :test='{"code":0}' />

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

## Lofter <Site url="www.lofter.com"/>

### User <Site url="www.lofter.com" size="sm" />

<Route namespace="lofter" :data='{"path":"/user/:name?","categories":["social-media","popular"],"example":"/lofter/user/i","view":0,"parameters":{"name":"Lofter user name, can be found in the URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User","maintainers":["hondajojo","nczitzk","LucunJi"],"location":"user.ts"}' :test='{"code":0}' />

## NASA <Site url="apod.nasa.gov"/>

### Astronomy Picture of the Day <Site url="apod.nasa.govundefined" size="sm" />

<Route namespace="nasa" :data='{"path":"/apod","categories":["picture","popular"],"view":2,"example":"/nasa/apod","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["apod.nasa.govundefined"]}],"name":"Astronomy Picture of the Day","maintainers":["nczitzk","williamgateszhao"],"url":"apod.nasa.govundefined","location":"apod.ts"}' :test='{"code":0}' />

## NGA <Site url="bbs.nga.cn"/>

### 分区帖子 <Site url="bbs.nga.cn" size="sm" />

<Route namespace="nga" :data='{"path":"/forum/:fid/:recommend?","categories":["bbs","popular"],"view":0,"example":"/nga/forum/489","parameters":{"fid":"分区 id, 可在分区主页 URL 找到, 没有 fid 时 stid 同样适用","recommend":"是否只显示精华主题, 留空为否, 任意值为是"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"分区帖子","maintainers":["xyqfer"],"location":"forum.ts"}' :test='{"code":0}' />

## pixiv <Site url="www.pixiv.net"/>

### Keyword <Site url="www.pixiv.net" size="sm" />

<Route namespace="pixiv" :data='{"path":"/search/:keyword/:order?/:mode?/:include_ai?","categories":["social-media","popular"],"view":2,"example":"/pixiv/search/Nezuko/popular","parameters":{"keyword":"keyword","order":{"description":"rank mode, empty or other for time order, popular for popular order","default":"date","options":[{"label":"time order","value":"date"},{"label":"popular order","value":"popular"}]},"mode":{"description":"filte R18 content","default":"no","options":[{"label":"only not R18","value":"safe"},{"label":"only R18","value":"r18"},{"label":"no filter","value":"no"}]},"include_ai":{"description":"whether AI-generated content is included","default":"yes","options":[{"label":"does not include AI-generated content","value":"no"},{"label":"include AI-generated content","value":"yes"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Keyword","maintainers":["DIYgod"],"location":"search.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1242)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.0/node_modules/tinypool/dist/entry/process.js:54:20)"}' />

### Rankings <Site url="www.pixiv.net" size="sm" />

<Route namespace="pixiv" :data='{"path":"/ranking/:mode/:date?","categories":["social-media","popular"],"view":2,"example":"/pixiv/ranking/week","parameters":{"mode":{"description":"rank type","options":[{"value":"day","label":"daily rank"},{"value":"week","label":"weekly rank"},{"value":"month","label":"monthly rank"},{"value":"day_male","label":"male rank"},{"value":"day_felame","label":"female rank"},{"value":"day_ai","label":"AI-generated work Rankings"},{"value":"week_original","label":"original rank"},{"value":"week_rookie","label":"rookie user rank"},{"value":"day_r18","label":"R-18 daily rank"},{"value":"day_r18_ai","label":"R-18 AI-generated work"},{"value":"day_male_r18","label":"R-18 male rank"},{"value":"day_female_r18","label":"R-18 female rank"},{"value":"week_r18","label":"R-18 weekly rank"},{"value":"week_r18g","label":"R-18G rank"}]},"date":"format: `2018-4-25`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Rankings","maintainers":["EYHN"],"location":"ranking.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1241)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.0/node_modules/tinypool/dist/entry/process.js:54:20)"}' />

### User Activity <Site url="www.pixiv.net" size="sm" />

<Route namespace="pixiv" :data='{"path":"/user/:id","categories":["social-media","popular"],"view":2,"example":"/pixiv/user/15288095","parameters":{"id":"user id, available in user&#39;s homepage URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.pixiv.net/users/:id"]}],"name":"User Activity","maintainers":["DIYgod"],"location":"user.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1243)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.0/node_modules/tinypool/dist/entry/process.js:54:20)"}' />

## PlayStation Store <Site url="www.playstation.com"/>

### PlayStation Monthly Games <Site url="www.playstation.com/en-sg/ps-plus/whats-new" size="sm" />

<Route namespace="ps" :data='{"path":"/monthly-games","categories":["game","popular"],"view":5,"example":"/ps/monthly-games","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.playstation.com/en-sg/ps-plus/whats-new"]}],"name":"PlayStation Monthly Games","maintainers":["justjustCC"],"url":"www.playstation.com/en-sg/ps-plus/whats-new","location":"monthly-games.ts"}' :test='{"code":0}' />

## Reuters <Site url="reuters.com"/>

:::tip
You can use `sophi=true` query parameter to invoke the **experimental** method, which can, if possible, fetch more articles(between 20 and 100) with `limit` given. But some articles from the old method might not be available.
:::

### Category/Topic/Author <Site url="reuters.com" size="sm" />

<Route namespace="reuters" :data='{"path":"/:category/:topic?","categories":["traditional-media","popular"],"view":0,"example":"/reuters/world/us","parameters":{"category":"find it in the URL, or tables below","topic":"find it in the URL, or tables below"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["reuters.com/:category/:topic?","reuters.com/"]}],"name":"Category/Topic/Author","maintainers":["LyleLee","HenryQW","proletarius101","black-desk","nczitzk"],"description":"-   `:category`:\n\n      | World | Business | Legal | Markets | Breakingviews | Technology | Graphics |\n      | ----- | -------- | ----- | ------- | ------------- | ---------- | -------- |\n      | world | business | legal | markets | breakingviews | technology | graphics |\n\n  -   `world/:topic`:\n\n      | All | Africa | Americas | Asia Pacific | China | Europe | India | Middle East | United Kingdom | United States | The Great Reboot | Reuters Next |\n      | --- | ------ | -------- | ------------ | ----- | ------ | ----- | ----------- | -------------- | ------------- | ---------------- | ------------ |\n      |     | africa | americas | asia-pacific | china | europe | india | middle-east | uk             | us            | the-great-reboot | reuters-next |\n\n  -   `business/:topic`:\n\n      | All | Aerospace & Defense | Autos & Transportation | Energy | Environment | Finance | Healthcare & Pharmaceuticals | Media & Telecom | Retail & Consumer | Sustainable Business | Charged | Future of Health | Future of Money | Take Five | Reuters Impact |\n      | --- | ------------------- | ---------------------- | ------ | ----------- | ------- | ---------------------------- | --------------- | ----------------- | -------------------- | ------- | ---------------- | --------------- | --------- | -------------- |\n      |     | aerospace-defense   | autos-transportation   | energy | environment | finance | healthcare-pharmaceuticals   | media-telecom   | retail-consumer   | sustainable-business | charged | future-of-health | future-of-money | take-five | reuters-impact |\n\n  -   `legal/:topic`:\n\n      | All | Government | Legal Industry | Litigation | Transactional |\n      | --- | ---------- | -------------- | ---------- | ------------- |\n      |     | government | legalindustry  | litigation | transactional |\n\n  -   `authors/:topic`:\n\n      | Default | Jonathan Landay | any other authors |\n      | ------- | --------------- | ----------------- |\n      | reuters | jonathan-landay | their name in URL |\n\n  More could be found in the URL of the category/topic page.","location":"common.ts"}' :test='{"code":0}' />

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

<Route namespace="rsshub" :data='{"path":"/routes/:lang?","categories":["program-update","popular"],"view":5,"example":"/rsshub/routes/en","parameters":{"lang":{"description":"Language","options":[{"label":"Chinese","value":"zh"},{"label":"English","value":"en"}],"default":"en"}},"radar":[{"source":["docs.rsshub.app/*"],"target":"/routes"}],"name":"New routes","maintainers":["DIYgod"],"url":"docs.rsshub.app/*","location":"routes.ts"}' :test='{"code":1,"message":"AssertionError: expected [ &#39;bsky\"/keyword/:keyword\"&#39;, …(136) ] to not include &#39;douban[\"/movie/playing\",\"/movie/playi…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:1143:17)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:920:17)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@5.1.1/node_modules/chai/chai.js:1591:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1334)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)"}' />

## Spotify <Site url="open.spotify.com"/>

### Artist Albums <Site url="open.spotify.com" size="sm" />

<Route namespace="spotify" :data='{"path":"/artist/:id","categories":["multimedia","popular"],"view":4,"example":"/spotify/artist/6k9TBCxyr4bXwZ8Y21Kwn1","parameters":{"id":"Artist ID"},"features":{"requireConfig":[{"name":"SPOTIFY_CLIENT_ID","description":""},{"name":"SPOTIFY_CLIENT_SECRET","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["open.spotify.com/artist/:id"]}],"name":"Artist Albums","maintainers":["outloudvi"],"location":"artist.ts"}' :test='undefined' />

### Playlist <Site url="open.spotify.com" size="sm" />

<Route namespace="spotify" :data='{"path":"/playlist/:id","categories":["multimedia","popular"],"view":4,"example":"/spotify/playlist/4UBVy1LttvodwivPUuwJk2","parameters":{"id":"Playlist ID"},"features":{"requireConfig":[{"name":"SPOTIFY_CLIENT_ID","description":""},{"name":"SPOTIFY_CLIENT_SECRET","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["open.spotify.com/playlist/:id"]}],"name":"Playlist","maintainers":["outloudvi"],"location":"playlist.ts"}' :test='undefined' />

## Telegram <Site url="t.me"/>

### Channel <Site url="t.me" size="sm" />

<Route namespace="telegram" :data='{"path":"/channel/:username/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/telegram/channel/awesomeRSSHub","parameters":{"username":"channel username","routeParams":"extra parameters, see the table below\n| Key                    | Description                                                           | Accepts                                            | Defaults to  |\n| :--------------------: | :-------------------------------------------------------------------: | :------------------------------------------------: | :----------: |\n| showLinkPreview        | Show the link preview from Telegram                                   | 0/1/true/false                                     | true         |\n| showViaBot             | For messages sent via bot, show the bot                               | 0/1/true/false                                     | true         |\n| showReplyTo            | For reply messages, show the target of the reply                      | 0/1/true/false                                     | true         |\n| showFwdFrom            | For forwarded messages, show the forwarding source                    | 0/1/true/false                                     | true         |\n| showFwdFromAuthor      | For forwarded messages, show the author of the forwarding source      | 0/1/true/false                                     | true         |\n| showInlineButtons      | Show inline buttons                                                   | 0/1/true/false                                     | false        |\n| showMediaTagInTitle    | Show media tags in the title                                          | 0/1/true/false                                     | true         |\n| showMediaTagAsEmoji    | Show media tags as emoji                                              | 0/1/true/false                                     | true         |\n| showHashtagAsHyperlink | Show hashtags as hyperlinks (`https://t.me/s/channel?q=%23hashtag`) | 0/1/true/false                                     | true         |\n| includeFwd             | Include forwarded messages                                            | 0/1/true/false                                     | true         |\n| includeReply           | Include reply messages                                                | 0/1/true/false                                     | true         |\n| includeServiceMsg      | Include service messages (e.g. message pinned, channel photo updated) | 0/1/true/false                                     | true         |\n| includeUnsupportedMsg  | Include messages unsupported by t.me                                  | 0/1/true/false                                     | false        |\n| searchQuery            | search query                                                          | keywords; replace `#hashtag` with `%23hashtag` | (no keyword) |\n\nSpecify different option values than default values can meet different needs, URL\n\n```\nhttps://rsshub.app/telegram/channel/NewlearnerChannel/showLinkPreview=0&showViaBot=0&showReplyTo=0&showFwdFrom=0&showFwdFromAuthor=0&showInlineButtons=0&showMediaTagInTitle=1&showMediaTagAsEmoji=1&includeFwd=0&includeReply=1&includeServiceMsg=0&includeUnsupportedMsg=0\n```\n\ngenerates an RSS without any link previews and annoying metadata, with emoji media tags in the title, without forwarded messages (but with reply messages), and without messages you don&#39;t care about (service messages and unsupported messages), for people who prefer pure subscriptions.\n\nFor backward compatibility reasons, invalid `routeParams` will be treated as `searchQuery` .\n"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["t.me/s/:username"],"target":"/channel/:username"}],"name":"Channel","maintainers":["DIYgod","Rongronggg9"],"description":"\n  :::tip\n  Due to Telegram restrictions, some channels involving pornography, copyright, and politics cannot be subscribed. You can confirm by visiting `https://t.me/s/:username`.\n  :::","location":"channel.ts"}' :test='{"code":0}' />


  :::tip
  Due to Telegram restrictions, some channels involving pornography, copyright, and politics cannot be subscribed. You can confirm by visiting `https://t.me/s/:username`.
  :::

## V2EX <Site url="v2ex.com"/>

### 标签 <Site url="v2ex.com" size="sm" />

<Route namespace="v2ex" :data='{"path":"/tab/:tabid","categories":["bbs","popular"],"view":0,"example":"/v2ex/tab/hot","parameters":{"tabid":"tab标签ID,在 URL 可以找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"标签","maintainers":["liyefox"],"location":"tab.ts"}' :test='{"code":0}' />

### 最热 / 最新主题 <Site url="v2ex.com" size="sm" />

<Route namespace="v2ex" :data='{"path":"/topics/:type","categories":["bbs","popular"],"view":0,"example":"/v2ex/topics/latest","parameters":{"type":{"description":"主题类型","options":[{"value":"hot","label":"最热主题"},{"value":"latest","label":"最新主题"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"最热 / 最新主题","maintainers":["WhiteWorld"],"location":"topics.ts"}' :test='{"code":0}' />

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

### User media <Site url="x.com" size="sm" />

<Route namespace="twitter" :data='{"path":"/media/:id/:routeParams?","categories":["social-media","popular"],"view":2,"example":"/twitter/media/_RSSHub","parameters":{"id":"username; in particular, if starts with `+`, it will be recognized as a [unique ID](https://github.com/DIYgod/RSSHub/issues/12221), e.g. `+44196397`","routeParams":"extra parameters, see the table above."},"features":{"requireConfig":[{"name":"TWITTER_USERNAME","description":"Please see above for details."},{"name":"TWITTER_PASSWORD","description":"Please see above for details."},{"name":"TWITTER_AUTH_TOKEN","description":"Please see above for details."}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User media","maintainers":["DIYgod","yindaheng98","Rongronggg9"],"radar":[{"source":["x.com/:id/media"],"target":"/media/:id"}],"location":"media.ts"}' :test='undefined' />

### User timeline <Site url="x.com" size="sm" />

<Route namespace="twitter" :data='{"path":"/user/:id/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/twitter/user/_RSSHub","parameters":{"id":"username; in particular, if starts with `+`, it will be recognized as a [unique ID](https://github.com/DIYgod/RSSHub/issues/12221), e.g. `+44196397`","routeParams":"extra parameters, see the table above; particularly when `routeParams=exclude_replies`, replies are excluded; `routeParams=exclude_rts` excludes retweets,`routeParams=exclude_rts_replies` exclude replies and retweets; for default include all."},"features":{"requireConfig":[{"name":"TWITTER_USERNAME","description":"Please see above for details."},{"name":"TWITTER_PASSWORD","description":"Please see above for details."},{"name":"TWITTER_AUTHENTICATION_SECRET","description":"TOTP 2FA secret, please see above for details.","optional":true},{"name":"TWITTER_AUTH_TOKEN","description":"Please see above for details."}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User timeline","maintainers":["DIYgod","yindaheng98","Rongronggg9","CaoMeiYouRen"],"radar":[{"source":["x.com/:id"],"target":"/user/:id"}],"location":"user.ts"}' :test='undefined' />

## YouTube <Site url="youtube.com"/>

### Channel with username <Site url="youtube.com" size="sm" />

<Route namespace="youtube" :data='{"path":"/user/:username/:embed?","categories":["social-media","popular"],"view":3,"example":"/youtube/user/@JFlaMusic","parameters":{"username":"YouTuber username with @","embed":"Default to embed the video, set to any value to disable embedding"},"features":{"requireConfig":[{"name":"YOUTUBE_KEY","description":" YouTube API Key, support multiple keys, split them with `,`, [API Key application](https://console.developers.google.com/)"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.youtube.com/user/:username"],"target":"/user/:username"}],"name":"Channel with username","maintainers":["DIYgod"],"location":"user.ts"}' :test='undefined' />

## 哔哩哔哩 bilibili <Site url="www.bilibili.com"/>

### UP 主动态 <Site url="www.bilibili.com" size="sm" />

<Route namespace="bilibili" :data='{"path":"/user/dynamic/:uid/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/bilibili/user/dynamic/2267573","parameters":{"uid":"用户 id, 可在 UP 主主页中找到","routeParams":"\n| 键           | 含义                              | 接受的值       | 默认值 |\n| ------------ | --------------------------------- | -------------- | ------ |\n| showEmoji    | 显示或隐藏表情图片                | 0/1/true/false | false  |\n| disableEmbed | 关闭内嵌视频                      | 0/1/true/false | false  |\n| useAvid      | 视频链接使用 AV 号 (默认为 BV 号) | 0/1/true/false | false  |\n| directLink   | 使用内容直链                      | 0/1/true/false | false  |\n\n用例：`/bilibili/user/dynamic/2267573/showEmoji=1&disableEmbed=1&useAvid=1`"},"features":{"requireConfig":[{"name":"BILIBILI_COOKIE_*","optional":true,"description":"如果没有此配置，那么必须开启 puppeteer 支持；BILIBILI_COOKIE_{uid}: 用于用户关注动态系列路由，对应 uid 的 b 站用户登录后的 Cookie 值，`{uid}` 替换为 uid，如 `BILIBILI_COOKIE_2267573`，获取方式：\n1.  打开 [https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new?uid=0&type=8](https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new?uid=0&type=8)\n2.  打开控制台，切换到 Network 面板，刷新\n3.  点击 dynamic_new 请求，找到 Cookie\n4.  视频和专栏，UP 主粉丝及关注只要求 `SESSDATA` 字段，动态需复制整段 Cookie"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["space.bilibili.com/:uid"],"target":"/user/dynamic/:uid"}],"name":"UP 主动态","maintainers":["DIYgod","zytomorrow","CaoMeiYouRen","JimenezLi"],"location":"dynamic.ts"}' :test='{"code":0}' />

### UP 主投稿 <Site url="www.bilibili.com" size="sm" />

<Route namespace="bilibili" :data='{"path":"/user/video/:uid/:disableEmbed?","categories":["social-media","popular"],"view":3,"example":"/bilibili/user/video/2267573","parameters":{"uid":"用户 id, 可在 UP 主主页中找到","disableEmbed":"默认为开启内嵌视频, 任意值为关闭"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["space.bilibili.com/:uid"],"target":"/user/video/:uid"}],"name":"UP 主投稿","maintainers":["DIYgod"],"location":"video.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 137)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.0/node_modules/tinypool/dist/entry/process.js:54:20)"}' />

### 排行榜 <Site url="www.bilibili.com" size="sm" />

<Route namespace="bilibili" :data='{"path":"/ranking/:rid?/:day?/:arc_type?/:disableEmbed?","name":"排行榜","maintainers":["DIYgod"],"categories":["social-media","popular"],"view":3,"example":"/bilibili/ranking/0/3/1","parameters":{"rid":{"description":"排行榜分区 id","default":"0","options":[{"label":"全站","value":"0"},{"label":"动画","value":"1"},{"label":"国创相关","value":"168"},{"label":"音乐","value":"3"},{"label":"舞蹈","value":"129"},{"label":"游戏","value":"4"},{"label":"科技","value":"36"},{"label":"数码","value":"188"},{"label":"生活","value":"160"},{"label":"鬼畜","value":"119"},{"label":"时尚","value":"155"},{"label":"娱乐","value":"5"},{"label":"影视","value":"181"}]},"day":{"description":"时间跨度","default":"3","options":[{"value":"1","label":"1日"},{"value":"3","label":"3日"},{"value":"7","label":"7日"},{"value":"30","label":"30日"}]},"arc_type":{"description":"投稿时间","default":"1","options":[{"value":"0","label":"全部投稿"},{"value":"1","label":"近期投稿"}]},"disableEmbed":{"description":"默认为开启内嵌视频, 任意值为关闭"}},"location":"ranking.ts"}' :test='{"code":0}' />

## 豆瓣 <Site url="www.douban.com"/>

### 豆瓣小组 <Site url="www.douban.com" size="sm" />

<Route namespace="douban" :data='{"path":"/group/:groupid/:type?","categories":["social-media","popular"],"view":1,"example":"/douban/group/648102","parameters":{"groupid":"豆瓣小组的 id","type":{"description":"类型","default":"latest","options":[{"label":"最新","value":"latest"},{"label":"最热","value":"essence"},{"label":"精华","value":"elite"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.douban.com/group/:groupid"],"target":"/group/:groupid"}],"name":"豆瓣小组","maintainers":["DIYgod"],"location":"other/group.ts"}' :test='{"code":0}' />

## 晋江文学城 <Site url="jjwxc.net"/>

### 作品章节 <Site url="jjwxc.net" size="sm" />

<Route namespace="jjwxc" :data='{"path":"/book/:id?","categories":["reading","popular"],"view":5,"example":"/jjwxc/book/7013024","parameters":{"id":"作品 id，可在对应作品页中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"作品章节","maintainers":["nczitzk"],"location":"book.ts"}' :test='{"code":0}' />

## 起点 <Site url="book.qidian.com"/>

### 作品章节 <Site url="book.qidian.com" size="sm" />

<Route namespace="qidian" :data='{"path":"/chapter/:id","categories":["reading","popular"],"view":5,"example":"/qidian/chapter/1010400217","parameters":{"id":"小说 id, 可在对应小说页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["book.qidian.com/info/:id"]}],"name":"作品章节","maintainers":["fuzy112"],"location":"chapter.ts"}' :test='{"code":0}' />

## 少数派 sspai <Site url="sspai.com"/>

### 首页 <Site url="sspai.com/index" size="sm" />

<Route namespace="sspai" :data='{"path":"/index","categories":["new-media","popular"],"view":0,"example":"/sspai/index","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["sspai.com/index"]}],"name":"首页","maintainers":["HenryQW"],"url":"sspai.com/index","location":"index.ts"}' :test='{"code":0}' />

## 什么值得买 <Site url="post.smzdm.com"/>

:::tip
网站也提供了部分 RSS: [https://www.smzdm.com/dingyue](https://www.smzdm.com/dingyue)
:::

### 关键词 <Site url="post.smzdm.com" size="sm" />

<Route namespace="smzdm" :data='{"path":"/keyword/:keyword","categories":["shopping","popular"],"view":5,"example":"/smzdm/keyword/女装","parameters":{"keyword":"你想订阅的关键词"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"关键词","maintainers":["DIYgod","MeanZhang"],"location":"keyword.ts"}' :test='{"code":0}' />

### 排行榜 <Site url="post.smzdm.com" size="sm" />

<Route namespace="smzdm" :data='{"path":"/ranking/:rank_type/:rank_id/:hour","categories":["shopping","popular"],"view":5,"example":"/smzdm/ranking/pinlei/11/3","parameters":{"rank_type":{"description":"榜单类型","options":[{"value":"pinlei","label":"好价品类榜"},{"value":"dianshang","label":"好价电商榜"},{"value":"haitao","label":"海淘 TOP 榜"},{"value":"haowen","label":"好文排行榜"},{"value":"haowu","label":"好物排行榜"}]},"rank_id":{"description":"榜单ID","options":[{"label":"好价品类榜 - 全部","value":"11"},{"label":"好价品类榜 - 食品生鲜","value":"12"},{"label":"好价品类榜 - 电脑数码","value":"13"},{"label":"好价品类榜 - 运动户外","value":"14"},{"label":"好价品类榜 - 家用电器","value":"15"},{"label":"好价品类榜 - 白菜","value":"17"},{"label":"好价品类榜 - 服饰鞋包","value":"74"},{"label":"好价品类榜 - 日用百货","value":"75"},{"label":"好价电商榜 - 券活动","value":"24"},{"label":"好价电商榜 - 京东","value":"23"},{"label":"好价电商榜 - 天猫","value":"25"},{"label":"好价电商榜 - 亚马逊中国","value":"26"},{"label":"好价电商榜 - 国美在线","value":"27"},{"label":"好价电商榜 - 苏宁易购","value":"28"},{"label":"好价电商榜 - 网易","value":"29"},{"label":"好价电商榜 - 西集网","value":"30"},{"label":"好价电商榜 - 美国亚马逊","value":"31"},{"label":"好价电商榜 - 日本亚马逊","value":"32"},{"label":"好价电商榜 - ebay","value":"33"},{"label":"海淘 TOP 榜 - 全部","value":"39"},{"label":"海淘 TOP 榜 - 海外直邮","value":"34"},{"label":"海淘 TOP 榜 - 美国榜","value":"35"},{"label":"海淘 TOP 榜 - 欧洲榜","value":"36"},{"label":"海淘 TOP 榜 - 澳新榜","value":"37"},{"label":"海淘 TOP 榜 - 亚洲榜","value":"38"},{"label":"海淘 TOP 榜 - 晒物榜","value":"hsw"},{"label":"好文排行榜 - 原创","value":"yc"},{"label":"好文排行榜 - 资讯","value":"zx"},{"label":"好物排行榜 - 新晋榜","value":"hwall"},{"label":"好物排行榜 - 消费众测","value":"zc"},{"label":"好物排行榜 - 新锐品牌","value":"nb"},{"label":"好物排行榜 - 好物榜单","value":"hw"}]},"hour":{"description":"时间跨度","options":[{"value":"3","label":"3 小时"},{"value":"12","label":"12 小时"},{"value":"24","label":"24 小时"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"排行榜","maintainers":["DIYgod"],"location":"ranking.ts"}' :test='{"code":1,"message":"AssertionError: expected NaN to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1447)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.1.0_jsdom@24.1.1_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)"}' />

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

指定更多与默认值不同的参数选项可以改善 RSS 的可读性，如

[https://rsshub.app/weibo/user/1642909335/readable=1&authorNameBold=1&showAuthorInTitle=1&showAuthorInDesc=1&showAuthorAvatarInDesc=1&showEmojiForRetweet=1&showRetweetTextInTitle=0&addLinkForPics=1&showTimestampInDescription=1&showTimestampInDescription=1&heightOfPics=150](https://rsshub.app/weibo/user/1642909335/readable=1&authorNameBold=1&showAuthorInTitle=1&showAuthorInDesc=1&showAuthorAvatarInDesc=1&showEmojiForRetweet=1&showRetweetTextInTitle=0&addLinkForPics=1&showTimestampInDescription=1&showTimestampInDescription=1&heightOfPics=150)

的效果为

<img loading="lazy" src="/img/readable-weibo.png" alt="微博小秘书的可读微博 RSS" />

### 博主 <Site url="weibo.com" size="sm" />

<Route namespace="weibo" :data='{"path":"/user/:uid/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/weibo/user/1195230310","parameters":{"uid":"用户 id, 博主主页打开控制台执行 `$CONFIG.oid` 获取","routeParams":"额外参数；请参阅上面的说明和表格；特别地，当 `routeParams=1` 时开启微博视频显示"},"features":{"requireConfig":[{"name":"WEIBO_COOKIES","optional":true,"description":""}],"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["m.weibo.cn/u/:uid","m.weibo.cn/profile/:uid","www.weibo.com/u/:uid"],"target":"/user/:uid"}],"name":"博主","maintainers":["DIYgod","iplusx","Rongronggg9"],"description":":::warning\n  部分博主仅登录可见，未提供 Cookie 的情况下不支持订阅，可以通过打开 `https://m.weibo.cn/u/:uid` 验证\n  :::","location":"user.ts"}' :test='{"code":0}' />

:::warning
  部分博主仅登录可见，未提供 Cookie 的情况下不支持订阅，可以通过打开 `https://m.weibo.cn/u/:uid` 验证
  :::

### 关键词 <Site url="weibo.com" size="sm" />

<Route namespace="weibo" :data='{"path":"/keyword/:keyword/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/weibo/keyword/RSSHub","parameters":{"keyword":"你想订阅的微博关键词","routeParams":"额外参数；请参阅上面的说明和表格"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"关键词","maintainers":["DIYgod","Rongronggg9"],"location":"keyword.ts"}' :test='{"code":0}' />

### 热搜榜 <Site url="s.weibo.com/top/summary" size="sm" />

<Route namespace="weibo" :data='{"path":"/search/hot/:fulltext?","categories":["social-media","popular"],"view":1,"example":"/weibo/search/hot","parameters":{"fulltext":{"description":"\n-   使用`/weibo/search/hot`可以获取热搜条目列表；\n-   使用`/weibo/search/hot/fulltext`可以进一步获取热搜条目下的摘要信息（不含图片视频）；\n-   使用`/weibo/search/hot/fulltext?pic=true`可以获取图片缩略（但需要配合额外的手段，例如浏览器上的 Header Editor 等来修改 referer 参数为`https://weibo.com`，以规避微博的外链限制，否则图片无法显示。）\n-   使用`/weibo/search/hot/fulltext?pic=true&fullpic=true`可以获取 Original 图片（但需要配合额外的手段，例如浏览器上的 Header Editor 等来修改 referer 参数为`https://weibo.com`，以规避微博的外链限制，否则图片无法显示。）"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["s.weibo.com/top/summary"]}],"name":"热搜榜","maintainers":["xyqfer","shinemoon"],"url":"s.weibo.com/top/summary","location":"search/hot.ts"}' :test='{"code":0}' />

## 小宇宙 <Site url="xiaoyuzhoufm.com"/>

### 播客 <Site url="xiaoyuzhoufm.com/" size="sm" />

<Route namespace="xiaoyuzhou" :data='{"path":"/podcast/:id","categories":["multimedia","popular"],"view":4,"example":"/xiaoyuzhou/podcast/6021f949a789fca4eff4492c","parameters":{"id":"播客id，可以在小宇宙播客的 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["xiaoyuzhoufm.com/podcast/:id"]}],"name":"播客","maintainers":["hondajojo","jtsang4"],"url":"xiaoyuzhoufm.com/","location":"podcast.ts"}' :test='{"code":0}' />

## 知乎 <Site url="www.zhihu.com"/>

:::tip
自2024年7月，未登录状态下大部分路由[无法获取全文](https://github.com/DIYgod/RSSHub/issues/16260)。若有需要请在登陆知乎后寻找并添加包含`z_c0`的Cookies至环境变量`ZHIHU_COOKIES`。
:::

### 用户动态 <Site url="www.zhihu.com" size="sm" />

<Route namespace="zhihu" :data='{"path":"/people/activities/:id","categories":["social-media","popular"],"view":0,"example":"/zhihu/people/activities/diygod","parameters":{"id":"作者 id，可在用户主页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.zhihu.com/people/:id"]}],"name":"用户动态","maintainers":["DIYgod"],"location":"activities.ts"}' :test='{"code":0}' />

### 知乎热榜 <Site url="www.zhihu.com" size="sm" />

<Route namespace="zhihu" :data='{"path":"/hot/:category?","categories":["social-media","popular"],"example":"/zhihu/hot","view":0,"parameters":{"category":{"description":"分类","default":"total","options":[{"value":"total","label":"全站"},{"value":"focus","label":"国际"},{"value":"science","label":"科学"},{"value":"car","label":"汽车"},{"value":"zvideo","label":"视频"},{"value":"fashion","label":"时尚"},{"value":"depth","label":"时事"},{"value":"digital","label":"数码"},{"value":"sport","label":"体育"},{"value":"school","label":"校园"},{"value":"film","label":"影视"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"知乎热榜","maintainers":["nczitzk"],"location":"hot.ts"}' :test='{"code":0}' />

