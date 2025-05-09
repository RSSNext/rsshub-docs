# 📖 Study

## Asian Innovation and Entrepreneurship Association <Site url="www.aiea.org"/>

### Seminar Series <Site url="www.aiea.org" size="sm" />

<Route namespace="aiea" :data='{"path":"/seminars/:period","categories":["study"],"example":"/aiea/seminars/upcoming","parameters":{"period":"Time frame"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Seminar Series","maintainers":["zxx-457"],"description":"| Time frame |\n| ---------- |\n| upcoming   |\n| past       |\n| both       |","location":"index.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 35)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.2/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

| Time frame |
| ---------- |
| upcoming   |
| past       |
| both       |

## Chinese Social Science Net <Site url="iolaw.cssn.cn"/>

### Institute of Law <Site url="iolaw.cssn.cn" size="sm" />

<Route namespace="cssn" :data='{"path":"/iolaw/:section?","categories":["study"],"example":"/cssn/iolaw/zxzp","parameters":{"section":"Section ID, can be found in the URL. For example, the Section ID of URL `http://iolaw.cssn.cn/zxzp/` is `zxzp`. The default value is `zxzp`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Institute of Law","maintainers":["HankChow"],"location":"iolaw.ts"}' :test='{"code":0}' />

## DBLP <Site url="dblp.org"/>

### Keyword Search <Site url="dblp.org" size="sm" />

<Route namespace="dblp" :data='{"path":"/:field","categories":["study"],"example":"/dblp/knowledge%20tracing","parameters":{"field":"Research field"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["dblp.org/:field"]}],"name":"Keyword Search","maintainers":["ytno1"],"location":"publication.ts"}' :test='{"code":0}' />

## Howtoforge Linux Tutorials <Site url="howtoforge.com"/>

### Tutorials <Site url="howtoforge.com/" size="sm" />

<Route namespace="howtoforge" :data='{"path":"/","categories":["study"],"example":"/howtoforge","radar":[{"source":["howtoforge.com/"]}],"name":"Tutorials","maintainers":["cnkmmk"],"url":"howtoforge.com/","location":"rss.ts"}' :test='{"code":0}' />

## Ludwig Maximilian University of Munich <Site url="www.lmu.de"/>


This namespace provides RSS feeds for various sections of the Ludwig Maximilian University of Munich (LMU) website, particularly for job openings in the academic staff section.

::: tip
For more information about LMU and their job offerings, visit their official website.
:::


### Job Openings <Site url="lmu.de" size="sm" />

<Route namespace="lmu" :data='{"path":"/jobs","name":"Job Openings","url":"lmu.de","example":"/lmu/jobs","maintainers":["StarDxxx"],"categories":["university","study"],"radar":[{"source":["www.lmu.de/en/about-lmu/working-at-lmu/job-portal/academic-staff/"],"target":"/lmu/jobs"}],"description":"RSS feed for LMU academic staff job openings.","location":"jobs.ts"}' :test='{"code":0}' />

RSS feed for LMU academic staff job openings.

## MindMeister <Site url="mindmeister.com"/>

### Public Maps <Site url="mindmeister.com" size="sm" />

<Route namespace="mindmeister" :data='{"path":"/:category?/:language?","categories":["study"],"example":"/mindmeister/mind-map-examples","parameters":{"category":"Categories, see the table below, `mind-map-examples` by default","language":"Languages, see the table below, `en` by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Public Maps","maintainers":["TonyRL"],"description":"| Categories    | parameter         |\n| ------------- | ----------------- |\n| Featured Map  | mind-map-examples |\n| Business      | business          |\n| Design        | design            |\n| Education     | education         |\n| Entertainment | entertainment     |\n| Life          | life              |\n| Marketing     | marketing         |\n| Productivity  | productivity      |\n| Summaries     | summaries         |\n| Technology    | technology        |\n| Other         | other             |\n\n| Languages  | parameter |\n| ---------- | --------- |\n| English    | en        |\n| Deutsch    | de        |\n| Français   | fr        |\n| Español    | es        |\n| Português  | pt        |\n| Nederlands | nl        |\n| Dansk      | da        |\n| Русский    | ru        |\n| 日本語     | ja        |\n| Italiano   | it        |\n| 简体中文   | zh        |\n| 한국어     | ko        |\n| Other      | other     |","location":"example.ts"}' :test='{"code":0}' />

| Categories    | parameter         |
| ------------- | ----------------- |
| Featured Map  | mind-map-examples |
| Business      | business          |
| Design        | design            |
| Education     | education         |
| Entertainment | entertainment     |
| Life          | life              |
| Marketing     | marketing         |
| Productivity  | productivity      |
| Summaries     | summaries         |
| Technology    | technology        |
| Other         | other             |

| Languages  | parameter |
| ---------- | --------- |
| English    | en        |
| Deutsch    | de        |
| Français   | fr        |
| Español    | es        |
| Português  | pt        |
| Nederlands | nl        |
| Dansk      | da        |
| Русский    | ru        |
| 日本語     | ja        |
| Italiano   | it        |
| 简体中文   | zh        |
| 한국어     | ko        |
| Other      | other     |

## ORCID <Site url="orcid.org"/>

### Works List <Site url="orcid.org" size="sm" />

<Route namespace="orcid" :data='{"path":"/:id","categories":["study"],"example":"/orcid/0000-0002-4731-9700","parameters":{"id":"Open Researcher and Contributor ID"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Works List","maintainers":["OrangeEd1t"],"location":"index.ts"}' :test='{"code":0}' />

## The Korea Institute of Marine Law <Site url="kimlaw.or.kr"/>

### Thesis <Site url="kimlaw.or.kr/67" size="sm" />

<Route namespace="kimlaw" :data='{"path":"/thesis","categories":["study"],"example":"/kimlaw/thesis","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["kimlaw.or.kr/67","kimlaw.or.kr/"]}],"name":"Thesis","maintainers":["TonyRL"],"url":"kimlaw.or.kr/67","location":"thesis.ts"}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:44:18)\n    at listOnTimeout (node:internal/timers:588:17)\n    at processTimers (node:internal/timers:523:7)"}' />

## Tableau <Site url="public.tableau.com"/>

### Viz of the day <Site url="public.tableau.com" size="sm" />

<Route namespace="tableau" :data='{"path":"/viz-of-the-day","categories":["study"],"example":"/tableau/viz-of-the-day","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Viz of the day","maintainers":[],"location":"viz-of-the-day.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1928)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.2/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

## VisionIAS <Site url="visionias.in"/>

### News Today <Site url="visionias.in" size="sm" />

<Route namespace="visionias" :data='{"path":"/newsToday/:filter?","example":"/visionias/newsToday","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"parameters":{"filter":{"description":"Period to fetch news for the current month. All news for the current month or only the latest","default":"latest","options":[{"value":"all","label":"All"},{"value":"latest","label":"Latest"}]}},"radar":[{"source":["visionias.in/current-affairs/news-today"],"target":"/newsToday"}],"name":"News Today","maintainers":["Rjnishant530"],"location":"news-today.ts"}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:44:18)\n    at listOnTimeout (node:internal/timers:588:17)\n    at processTimers (node:internal/timers:523:7)"}' />

### Weekly Focus <Site url="visionias.in" size="sm" />

<Route namespace="visionias" :data='{"path":"/weeklyFocus","example":"/visionias/weeklyFocus","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["visionias.in/current-affairs/weekly-focus"],"target":"/weeklyFocus"}],"name":"Weekly Focus","maintainers":["Rjnishant530"],"location":"weekly-focus.ts"}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:44:18)\n    at listOnTimeout (node:internal/timers:588:17)\n    at processTimers (node:internal/timers:523:7)"}' />

## X-MOL <Site url="x-mol.com"/>

### News <Site url="x-mol.com/news/index" size="sm" />

<Route namespace="x-mol" :data='{"path":"/news/:tag?","categories":["study"],"example":"/x-mol/news/3","parameters":{"tag":"Tag number, can be obtained from news list URL. Empty value means news index."},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["x-mol.com/news/index"],"target":"/news"}],"name":"News","maintainers":["cssxsh"],"url":"x-mol.com/news/index","location":"news.ts"}' :test='undefined' />

## 福建考试报名网 <Site url="fjksbm.com"/>

### 分类 <Site url="fjksbm.com" size="sm" />

<Route namespace="fjksbm" :data='{"path":"/:category?","categories":["study"],"example":"/fjksbm","parameters":{"category":"分类，见下表，默认为网络报名进行中"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["fjksbm.com/portal/:category?","fjksbm.com/portal"]}],"name":"分类","maintainers":["nczitzk"],"description":"| 已发布公告 (方案)，即将开始 | 网络报名进行中 | 网络报名结束等待打印准考证 | 正在打印准考证 | 考试结束，等待发布成绩 | 已发布成绩 | 新闻动态 | 政策法规 |\n| --------------------------- | -------------- | -------------------------- | -------------- | ---------------------- | ---------- | -------- | -------- |\n| 0                           | 1              | 2                          | 3              | 4                      | 5          | news     | policy   |","location":"index.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 640)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.2/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

| 已发布公告 (方案)，即将开始 | 网络报名进行中 | 网络报名结束等待打印准考证 | 正在打印准考证 | 考试结束，等待发布成绩 | 已发布成绩 | 新闻动态 | 政策法规 |
| --------------------------- | -------------- | -------------------------- | -------------- | ---------------------- | ---------- | -------- | -------- |
| 0                           | 1              | 2                          | 3              | 4                      | 5          | news     | policy   |

## 国家哲学社会科学文献中心 <Site url="ncpssd.cn"/>

### 最新文献 <Site url="ncpssd.cn/" size="sm" />

<Route namespace="ncpssd" :data='{"path":"/newlist","categories":["study"],"example":"/ncpssd/newlist","radar":[{"source":["ncpssd.cn/","ncpssd.cn/newlist"]}],"name":"最新文献","maintainers":["LyleLee"],"url":"ncpssd.cn/","location":"newlist.ts"}' :test='{"code":1,"message":"AssertionError: expected NaN to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1358)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/workers/forks.js:27:7)"}' />

## 湖南人事考试网 <Site url="rsks.hunanpea.com"/>

### 公告 <Site url="rsks.hunanpea.com" size="sm" />

<Route namespace="hunanpea" :data='{"path":"/rsks/:guid","categories":["study"],"example":"/hunanpea/rsks/2f1a6239-b4dc-491b-92af-7d95e0f0543e","parameters":{"guid":"分类 id，可在 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["rsks.hunanpea.com/Category/:guid/ArticlesByCategory.do"]}],"name":"公告","maintainers":["TonyRL"],"location":"rsks.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 978)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.2/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

## 全国翻译专业资格水平考试 (CATTI) <Site url="www.catticenter.com"/>

### CATTI 考试消息 <Site url="www.catticenter.com" size="sm" />

<Route namespace="catti" :data='{"path":"/news/:category","name":"CATTI 考试消息","maintainers":["PrinOrange"],"description":"\n| Category  | 标题       | 描述                |\n|-----------|------------|--------------------|\n| ggl       | 通知公告   | CATTI 考试通知和公告 |\n| ywdt      | 要闻动态   | CATTI 考试要闻动态   |\n| zxzc      | 最新政策   | CATTI 考试最新政策   |\n","categories":["study"],"parameters":{"category":"消息分类名，可在下面的描述中找到。"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false,"supportRadar":true},"example":"/catti/news/zxzc","radar":[{"source":["www.catticenter.com/:category"]}],"location":"news.ts"}' :test='{"code":0}' />


| Category  | 标题       | 描述                |
|-----------|------------|--------------------|
| ggl       | 通知公告   | CATTI 考试通知和公告 |
| ywdt      | 要闻动态   | CATTI 考试要闻动态   |
| zxzc      | 最新政策   | CATTI 考试最新政策   |


## 全国通信专业技术人员职业水平考试 <Site url="www.txks.org.cn"/>

### 通信考试动态 <Site url="www.txks.org.cn" size="sm" />

<Route namespace="txks" :data='{"path":"/news","name":"通信考试动态","description":"**注意：** 官方网站限制了国外网络请求，可能需要通过部署在中国大陆内的 RSSHub 实例访问。","maintainers":["PrinOrange"],"categories":["study"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false,"supportRadar":true},"radar":[{"title":"全国通信专业技术人员职业水平考试动态","source":["www.txks.org.cn/index/work","www.txks.org.cn"],"target":"/news"}],"example":"/txks/news","location":"news.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2039)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.2/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

**注意：** 官方网站限制了国外网络请求，可能需要通过部署在中国大陆内的 RSSHub 实例访问。

## 山东省教育招生考试院 <Site url="sdzk.cn"/>

### 新闻 <Site url="sdzk.cn" size="sm" />

<Route namespace="sdzk" :data='{"path":"/:bcid?/:cid?","categories":["study"],"example":"/sdzk","parameters":{"bcid":"板块 id，可在对应板块页 URL 中找到，默认为 `1`，即信息与政策","cid":"栏目 id，可在对应板块页 URL 中找到，默认为 `16`，即通知公告"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"新闻","maintainers":["nczitzk"],"description":"::: tip\n  若订阅 [信息与政策](https://www.sdzk.cn/NewsList.aspx?BCID=1)，网址为 `https://www.sdzk.cn/NewsList.aspx?BCID=1`。截取 `BCID=1` 作为参数，此时路由为 [`/sdzk/1`](https://rsshub.app/sdzk/1)。\n\n  若订阅 [通知公告](https://www.sdzk.cn/NewsList.aspx?BCID=1&CID=16)，网址为 `https://www.sdzk.cn/NewsList.aspx?BCID=1&CID=16`。截取 `BCID=1` 与 `CID=16` 作为参数，此时路由为 [`/sdzk/1/16`](https://rsshub.app/sdzk/1/16)。\n:::","location":"index.ts"}' :test='{"code":1,"message":"AssertionError: expected NaN to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1755)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/workers/forks.js:27:7)"}' />

::: tip
  若订阅 [信息与政策](https://www.sdzk.cn/NewsList.aspx?BCID=1)，网址为 `https://www.sdzk.cn/NewsList.aspx?BCID=1`。截取 `BCID=1` 作为参数，此时路由为 [`/sdzk/1`](https://rsshub.app/sdzk/1)。

  若订阅 [通知公告](https://www.sdzk.cn/NewsList.aspx?BCID=1&CID=16)，网址为 `https://www.sdzk.cn/NewsList.aspx?BCID=1&CID=16`。截取 `BCID=1` 与 `CID=16` 作为参数，此时路由为 [`/sdzk/1/16`](https://rsshub.app/sdzk/1/16)。
:::

## 上海市教育考试院 <Site url="www.shmeea.edu.cn"/>

官方网址：[https://www.shmeea.edu.cn](https://www.shmeea.edu.cn)

### 消息 <Site url="www.shmeea.edu.cn" size="sm" />

<Route namespace="shmeea" :data='{"path":"/:id?","categories":["study"],"example":"/shmeea/08000","parameters":{"id":"页面 ID，可在 URL 中找到，默认为消息速递"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"消息","maintainers":["jialinghui","Misaka13514"],"description":"::: tip\n  例如：消息速递的网址为 `https://www.shmeea.edu.cn/page/08000/index.html`，则页面 ID 为 `08000`。\n:::\n\n::: warning\n  暂不支持大类分类和[院内动态](https://www.shmeea.edu.cn/page/19000/index.html)\n:::","location":"index.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1775)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.2/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

::: tip
  例如：消息速递的网址为 `https://www.shmeea.edu.cn/page/08000/index.html`，则页面 ID 为 `08000`。
:::

::: warning
  暂不支持大类分类和[院内动态](https://www.shmeea.edu.cn/page/19000/index.html)
:::

### 自学考试通知公告 <Site url="www.shmeea.edu.cn/page/04000/index.html" size="sm" />

<Route namespace="shmeea" :data='{"path":"/self-study","categories":["study"],"example":"/shmeea/self-study","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.shmeea.edu.cn/page/04000/index.html","www.shmeea.edu.cn/"]}],"name":"自学考试通知公告","maintainers":["h2ws"],"url":"www.shmeea.edu.cn/page/04000/index.html","location":"self-study.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1776)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.2/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

## 实用日本语鉴定考试（J.TEST） <Site url="www.j-test.com"/>

### 公告 <Site url="www.j-test.com" size="sm" />

<Route namespace="j-test" :data='{"path":"/news","name":"公告","url":"www.j-test.com","maintainers":["kuhahku"],"example":"/j-test/news","parameters":{},"categories":["study"],"features":{"supportRadar":true},"radar":[{"source":["www.j-test.com"],"target":"/news"}],"description":"","location":"news.ts"}' :test='undefined' />

## 万维书刊网 <Site url="eshukan.com"/>

### 学术资讯 <Site url="www.eshukan.com" size="sm" />

<Route namespace="eshukan" :data='{"path":"/academic/:id?","name":"学术资讯","url":"www.eshukan.com","maintainers":["nczitzk"],"example":"/eshukan/academic/1","parameters":{"category":"栏目 id，默认为 `1`，即期刊动态，可在对应栏目页 URL 中找到"},"description":"::: tip\n  若订阅 [期刊动态](https://www.eshukan.com/academic/index.aspx?cid=1)，网址为 `https://www.eshukan.com/academic/index.aspx?cid=1`。截取 `https://www.eshukan.com/academic/index.aspx?cid=` 到末尾的部分 `1` 作为参数填入，此时路由为 [`/eshukan/academic/1`](https://rsshub.app/eshukan/academic/1)。\n:::\n    ","categories":["study"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.eshukan.com/academic/index.aspx"]}],"location":"academic.ts"}' :test='{"code":0}' />

::: tip
  若订阅 [期刊动态](https://www.eshukan.com/academic/index.aspx?cid=1)，网址为 `https://www.eshukan.com/academic/index.aspx?cid=1`。截取 `https://www.eshukan.com/academic/index.aspx?cid=` 到末尾的部分 `1` 作为参数填入，此时路由为 [`/eshukan/academic/1`](https://rsshub.app/eshukan/academic/1)。
:::
    

## 网易公开课 <Site url="163.com"/>

::: tip
部分歌单及听歌排行信息为登陆后可见，自建时将环境变量`NCM_COOKIES`设为登陆后的 Cookie 值，即可正常获取。
:::

### 精品课程 <Site url="vip.open.163.com/" size="sm" />

<Route namespace="163" :data='{"path":"/open/vip","categories":["study"],"example":"/163/open/vip","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["vip.open.163.com/"]}],"name":"精品课程","maintainers":["hoilc"],"url":"vip.open.163.com/","location":"open/vip.ts"}' :test='undefined' />

## 语雀 <Site url="yuque.com"/>

### 知识库 <Site url="yuque.com" size="sm" />

<Route namespace="yuque" :data='{"path":"/:name/:book","categories":["study"],"example":"/yuque/ruanyf/weekly","parameters":{"name":"用戶名","book":"知识库 ID"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yuque.com/:name/:book"]}],"name":"知识库","maintainers":["aha2mao","ltaoo"],"description":"| Node.js 专栏                                             | 阮一峰每周分享                                                 | 语雀使用手册                                             |\n| -------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------- |\n| [/yuque/egg/nodejs](https://rsshub.app/yuque/egg/nodejs) | [/yuque/ruanyf/weekly](https://rsshub.app/yuque/ruanyf/weekly) | [/yuque/yuque/help](https://rsshub.app/yuque/yuque/help) |","location":"book.ts"}' :test='{"code":0}' />

| Node.js 专栏                                             | 阮一峰每周分享                                                 | 语雀使用手册                                             |
| -------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------- |
| [/yuque/egg/nodejs](https://rsshub.app/yuque/egg/nodejs) | [/yuque/ruanyf/weekly](https://rsshub.app/yuque/ruanyf/weekly) | [/yuque/yuque/help](https://rsshub.app/yuque/yuque/help) |

## 中国人工智能学会 <Site url="caai.cn"/>

### 学会动态 <Site url="caai.cn" size="sm" />

<Route namespace="caai" :data='{"path":"/:caty","categories":["study"],"example":"/caai/45","parameters":{"caty":"分类 ID，可在 URL 找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"学会动态","maintainers":["tudou027"],"location":"index.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 243)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.2/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

## 中国管理现代化研究会 <Site url="cste.org.cn"/>

### 栏目 <Site url="cste.org.cn" size="sm" />

<Route namespace="camchina" :data='{"path":"/:id?","categories":["study"],"example":"/camchina","parameters":{"id":"分类，见下表，默认为 1，即新闻"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["cste.org.cn/categories/:id","cste.org.cn/"]}],"name":"栏目","maintainers":["nczitzk"],"description":"| 新闻 | 通告栏 |\n| ---- | ------ |\n| 1    | 2      |","location":"index.ts"}' :test='{"code":0}' />

| 新闻 | 通告栏 |
| ---- | ------ |
| 1    | 2      |

## 中国计算机学会 <Site url="ccf.org.cn"/>

### 大数据专家委员会 <Site url="ccf.org.cn" size="sm" />

<Route namespace="ccf" :data='{"path":"/tfbd/:caty/:id","categories":["study"],"example":"/ccf/tfbd/xwdt/tzgg","parameters":{"caty":"主分类，可在 URL 找到","id":"子分类，可在 URL 找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["tfbd.ccf.org.cn/tfbd/:caty/:id","tfbd.ccf.org.cn/"]}],"name":"大数据专家委员会","maintainers":["tudou027"],"location":"tfbd/index.ts"}' :test='{"code":0}' />

### 计算机视觉专委会 - 学术动态 - 分类 <Site url="ccf.org.cn" size="sm" />

<Route namespace="ccf" :data='{"path":"/ccfcv/:channel/:category","categories":["study"],"example":"/ccf/ccfcv/xsdt/xsqy","parameters":{"channel":"频道，仅支持 `xsdt`","category":"分类，见下表，亦可在网站 url 里找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"计算机视觉专委会 - 学术动态 - 分类","maintainers":["elxy"],"description":"| 学术前沿 | 热点征文 | 学术会议 |\n| -------- | -------- | -------- |\n| xsqy     | rdzw     | xshy     |","location":"ccfcv/index.ts"}' :test='{"code":0}' />

| 学术前沿 | 热点征文 | 学术会议 |
| -------- | -------- | -------- |
| xsqy     | rdzw     | xshy     |

### 新闻 <Site url="ccf.org.cn" size="sm" />

<Route namespace="ccf" :data='{"path":"/news/:category?","categories":["study"],"example":"/ccf/news","parameters":{"category":"分类，见下表，默认为 CCF 新闻"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ccf.org.cn/:category","ccf.org.cn/"],"target":"/news/:category"}],"name":"新闻","maintainers":["nczitzk"],"description":"| CCF 新闻    | CCF 聚焦 | ACM 信息  |\n| ----------- | -------- | --------- |\n| Media_list | Focus    | ACM_News |","location":"news.ts"}' :test='{"code":0}' />

| CCF 新闻    | CCF 聚焦 | ACM 信息  |
| ----------- | -------- | --------- |
| Media_list | Focus    | ACM_News |

## 中华人民共和国学位证书查询 <Site url="chinadegrees.com.cn"/>

### 各学位授予单位学位证书上网进度 <Site url="chinadegrees.com.cn" size="sm" />

<Route namespace="chinadegrees" :data='{"path":"/:province?","categories":["study"],"example":"/chinadegrees/11","parameters":{"province":"省市代号，见下表，亦可在 [这里](http://www.chinadegrees.com.cn/help/provinceSwqk.html) 找到，默认为 `11`"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"各学位授予单位学位证书上网进度","description":"| 省市             | 代号 |\n| ---------------- | ---- |\n| 北京市           | 11   |\n| 天津市           | 12   |\n| 河北省           | 13   |\n| 山西省           | 14   |\n| 内蒙古自治区     | 15   |\n| 辽宁省           | 21   |\n| 吉林省           | 22   |\n| 黑龙江省         | 23   |\n| 上海市           | 31   |\n| 江苏省           | 32   |\n| 浙江省           | 33   |\n| 安徽省           | 34   |\n| 福建省           | 35   |\n| 江西省           | 36   |\n| 山东省           | 37   |\n| 河南省           | 41   |\n| 湖北省           | 42   |\n| 湖南省           | 43   |\n| 广东省           | 44   |\n| 广西壮族自治区   | 45   |\n| 海南省           | 46   |\n| 重庆市           | 50   |\n| 四川省           | 51   |\n| 贵州省           | 52   |\n| 云南省           | 53   |\n| 西藏自治区       | 54   |\n| 陕西省           | 61   |\n| 甘肃省           | 62   |\n| 青海省           | 63   |\n| 宁夏回族自治区   | 64   |\n| 新疆维吾尔自治区 | 65   |\n| 台湾             | 71   |","maintainers":["TonyRL"],"location":"province.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 330)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.2/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

| 省市             | 代号 |
| ---------------- | ---- |
| 北京市           | 11   |
| 天津市           | 12   |
| 河北省           | 13   |
| 山西省           | 14   |
| 内蒙古自治区     | 15   |
| 辽宁省           | 21   |
| 吉林省           | 22   |
| 黑龙江省         | 23   |
| 上海市           | 31   |
| 江苏省           | 32   |
| 浙江省           | 33   |
| 安徽省           | 34   |
| 福建省           | 35   |
| 江西省           | 36   |
| 山东省           | 37   |
| 河南省           | 41   |
| 湖北省           | 42   |
| 湖南省           | 43   |
| 广东省           | 44   |
| 广西壮族自治区   | 45   |
| 海南省           | 46   |
| 重庆市           | 50   |
| 四川省           | 51   |
| 贵州省           | 52   |
| 云南省           | 53   |
| 西藏自治区       | 54   |
| 陕西省           | 61   |
| 甘肃省           | 62   |
| 青海省           | 63   |
| 宁夏回族自治区   | 64   |
| 新疆维吾尔自治区 | 65   |
| 台湾             | 71   |

## 中国智库网 <Site url="www.chinathinktanks.org.cn"/>

### 观点与实践 <Site url="www.chinathinktanks.org.cn" size="sm" />

<Route namespace="chinathinktanks" :data='{"path":"/:id","categories":["study"],"example":"/chinathinktanks/57","parameters":{"id":"见下表，亦可在网站 url 里找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"观点与实践","maintainers":["Aeliu"],"description":"| `:id` | 专题名称 |\n| ----- | -------- |\n| 2     | 党的建设 |\n| 3     | 社会     |\n| 4     | 生态     |\n| 5     | 政治     |\n| 6     | 经济     |\n| 7     | 文化     |\n| 9     | 热点专题 |\n| 10    | 国际关系 |\n| 13    | 国外智库 |\n| 46    | 智库报告 |\n| 57    | 智库要闻 |\n| 126   | 世界经济 |\n| 127   | 宏观经济 |\n| 128   | 区域经济 |\n| 129   | 产业企业 |\n| 130   | 三农问题 |\n| 131   | 财政金融 |\n| 132   | 科技创新 |\n| 133   | 民主     |\n| 134   | 法治     |\n| 135   | 行政     |\n| 136   | 国家治理 |\n| 137   | 社会事业 |\n| 138   | 社会保障 |\n| 139   | 民族宗教 |\n| 140   | 人口就业 |\n| 141   | 社会治理 |\n| 142   | 文化产业 |\n| 143   | 公共文化 |\n| 144   | 文化体制 |\n| 145   | 文化思想 |\n| 146   | 资源     |\n| 147   | 能源     |\n| 148   | 环境     |\n| 149   | 生态文明 |\n| 150   | 思想建设 |\n| 151   | 作风建设 |\n| 152   | 组织建设 |\n| 153   | 制度建设 |\n| 154   | 反腐倡廉 |\n| 155   | 中国外交 |\n| 156   | 全球治理 |\n| 157   | 大国关系 |\n| 158   | 地区政治 |\n| 181   | 执政能力 |","location":"viewpoint.ts"}' :test='{"code":0}' />

| `:id` | 专题名称 |
| ----- | -------- |
| 2     | 党的建设 |
| 3     | 社会     |
| 4     | 生态     |
| 5     | 政治     |
| 6     | 经济     |
| 7     | 文化     |
| 9     | 热点专题 |
| 10    | 国际关系 |
| 13    | 国外智库 |
| 46    | 智库报告 |
| 57    | 智库要闻 |
| 126   | 世界经济 |
| 127   | 宏观经济 |
| 128   | 区域经济 |
| 129   | 产业企业 |
| 130   | 三农问题 |
| 131   | 财政金融 |
| 132   | 科技创新 |
| 133   | 民主     |
| 134   | 法治     |
| 135   | 行政     |
| 136   | 国家治理 |
| 137   | 社会事业 |
| 138   | 社会保障 |
| 139   | 民族宗教 |
| 140   | 人口就业 |
| 141   | 社会治理 |
| 142   | 文化产业 |
| 143   | 公共文化 |
| 144   | 文化体制 |
| 145   | 文化思想 |
| 146   | 资源     |
| 147   | 能源     |
| 148   | 环境     |
| 149   | 生态文明 |
| 150   | 思想建设 |
| 151   | 作风建设 |
| 152   | 组织建设 |
| 153   | 制度建设 |
| 154   | 反腐倡廉 |
| 155   | 中国外交 |
| 156   | 全球治理 |
| 157   | 大国关系 |
| 158   | 地区政治 |
| 181   | 执政能力 |

## 中国研究生招生信息网 <Site url="yz.chsi.com.cn"/>

### 考研热点新闻 <Site url="yz.chsi.com.cn/" size="sm" />

<Route namespace="chsi" :data='{"path":"/hotnews","categories":["study"],"example":"/chsi/hotnews","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yz.chsi.com.cn/"]}],"name":"考研热点新闻","maintainers":["yanbot-team"],"url":"yz.chsi.com.cn/","location":"hotnews.ts"}' :test='{"code":1,"message":"AssertionError: expected [ …(4) ] to not include &#39;https://yz.chsi.com.cn/kyzx/jybzc/202…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.1.9/node_modules/@vitest/expect/dist/index.js:1196:17)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.1.9/node_modules/@vitest/expect/dist/index.js:972:17)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@5.2.0/node_modules/chai/chai.js:1618:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 339)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)"}' />

### 考研动态 <Site url="yz.chsi.com.cn/kyzx/kydt" size="sm" />

<Route namespace="chsi" :data='{"path":"/kydt","categories":["study"],"example":"/chsi/kydt","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yz.chsi.com.cn/kyzx/kydt"]}],"name":"考研动态","maintainers":["SunBK201"],"url":"yz.chsi.com.cn/kyzx/kydt","location":"kydt.ts"}' :test='{"code":1,"message":"AssertionError: expected NaN to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 340)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/workers/forks.js:27:7)"}' />

### 考研资讯 <Site url="yz.chsi.com.cn" size="sm" />

<Route namespace="chsi" :data='{"path":"/kyzx/:type","categories":["study"],"example":"/chsi/kyzx/fstj","parameters":{"type":" type 见下表，亦可在网站 URL 找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yz.chsi.com.cn/kyzx/:type"]}],"name":"考研资讯","maintainers":["yanbot-team"],"description":"| `:type` | 专题名称 |\n| ------- | -------- |\n| fstj    | 复试调剂 |\n| kydt    | 考研动态 |\n| zcdh    | 政策导航 |\n| kyrw    | 考研人物 |\n| jyxd    | 经验心得 |","location":"kyzx.ts"}' :test='{"code":1,"message":"AssertionError: expected NaN to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 341)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/workers/forks.js:27:7)"}' />

| `:type` | 专题名称 |
| ------- | -------- |
| fstj    | 复试调剂 |
| kydt    | 考研动态 |
| zcdh    | 政策导航 |
| kyrw    | 考研人物 |
| jyxd    | 经验心得 |

## 中国人事考试网 <Site url="www.cpta.com.cn"/>

### 中国人事考试网发布 <Site url="www.cpta.com.cn" size="sm" />

<Route namespace="cpta" :data='{"path":"/:category","name":"中国人事考试网发布","maintainers":["PrinOrange"],"parameters":{"category":"栏目参数，可见下表描述。"},"description":"\n| Category    | Title     | Description                         |\n|-------------|-----------|-------------------------------------|\n| notice      | 通知公告  | 中国人事考试网 考试通知公告汇总    |\n| performance | 成绩公布  | 中国人事考试网 考试成绩公布汇总    |\n","categories":["study"],"features":{"requireConfig":false,"requirePuppeteer":false,"supportBT":false,"supportPodcast":false,"supportScihub":false,"supportRadar":true,"antiCrawler":true},"radar":[{"title":"中国人事考试网通知公告","source":["www.cpta.com.cn/notice.html","www.cpta.com.cn"],"target":"/notice"},{"title":"中国人事考试网成绩发布","source":["www.cpta.com.cn/performance.html","www.cpta.com.cn"],"target":"/performance"}],"example":"/cpta/notice","location":"handler.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 409)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.2/node_modules/tinypool/dist/entry/process.js:55:20)"}' />


| Category    | Title     | Description                         |
|-------------|-----------|-------------------------------------|
| notice      | 通知公告  | 中国人事考试网 考试通知公告汇总    |
| performance | 成绩公布  | 中国人事考试网 考试成绩公布汇总    |


## 中国技术经济学会 <Site url="cste.org.cn"/>

### 栏目 <Site url="cste.org.cn" size="sm" />

<Route namespace="cste" :data='{"path":"/:id?","categories":["study"],"example":"/cste","parameters":{"id":"分类，见下表，默认为 16，即通知公告"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"栏目","maintainers":["nczitzk"],"description":"| 通知公告 | 学会新闻 | 科协简讯 | 学科动态 | 往事钩沉 |\n| -------- | -------- | -------- | -------- | -------- |\n| 16       | 18       | 19       | 20       | 21       |","location":"index.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 423)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.2/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

| 通知公告 | 学会新闻 | 科协简讯 | 学科动态 | 往事钩沉 |
| -------- | -------- | -------- | -------- | -------- |
| 16       | 18       | 19       | 20       | 21       |

## 中国教育考试网 <Site url="www.neea.cn"/>

### 国内考试动态 <Site url="www.neea.edu.cn" size="sm" />

<Route namespace="neea" :data='{"path":"/local/:type","name":"国内考试动态","url":"www.neea.edu.cn","maintainers":["SunShinenny"],"example":"/neea/local/cet","parameters":{"type":"考试项目，见下表"},"categories":["study"],"features":{"supportRadar":true},"radar":[{"title":"普通高考动态","source":["gaokao.neea.edu.cn","gaokao.neea.cn"],"target":"/local/gaokao"},{"title":"成人高考动态","source":["chengkao.neea.edu.cn","chengkao.neea.cn"],"target":"/local/chengkao"},{"title":"研究生考试动态","source":["yankao.neea.edu.cn","yankao.neea.cn"],"target":"/local/yankao"},{"title":"自学考试动态","source":["zikao.neea.edu.cn","zikao.neea.cn"],"target":"/local/zikao"},{"title":"中小学教师资格考试动态","source":["ntce.neea.edu.cn","ntce.neea.cn"],"target":"/local/ntce"},{"title":"同等学力申请硕士学位考试动态","source":["tdxl.neea.edu.cn","tdxl.neea.cn"],"target":"/local/tdxl"},{"title":"全国四六级考试（CET）动态","source":["cet.neea.edu.cn","cet.neea.cn"],"target":"/local/cet"},{"title":"全国计算机等级考试（NCRE）动态","source":["ncre.neea.edu.cn","ncre.neea.cn"],"target":"/local/ncre"},{"title":"全国计算机应用水平考试（NIT）动态","source":["nit.neea.edu.cn","nit.neea.cn"],"target":"/local/nit"},{"title":"全国英语等级考试（PETS）动态","source":["pets.neea.edu.cn","pets.neea.cn"],"target":"/local/pets"},{"title":"全国外语水平考试（WSK）动态","source":["wsk.neea.edu.cn","wsk.neea.cn"],"target":"/local/wsk"},{"title":"书画等级考试（CCPT）动态","source":["ccpt.neea.edu.cn","ccpt.neea.cn"],"target":"/local/ccpt"}],"description":"|              | 考试项目                      | type     |\n| ------------ | ----------------------------- | -------- |\n| 国家教育考试 | 普通高考                      | gaokao   |\n|              | 成人高考                      | chengkao |\n|              | 研究生考试                    | yankao   |\n|              | 自学考试                      | zikao    |\n|              | 中小学教师资格考试            | ntce     |\n|              | 同等学力申请硕士学位考试      | tdxl     |\n| 社会证书考试 | 全国四六级考试（CET）         | cet      |\n|              | 全国计算机等级考试（NCRE）    | ncre     |\n|              | 全国计算机应用水平考试（NIT） | nit      |\n|              | 全国英语等级考试（PETS）      | pets     |\n|              | 全国外语水平考试（WSK）       | wsk      |\n|              | 书画等级考试（CCPT）          | ccpt     |","location":"index.ts"}' :test='{"code":0}' />

|              | 考试项目                      | type     |
| ------------ | ----------------------------- | -------- |
| 国家教育考试 | 普通高考                      | gaokao   |
|              | 成人高考                      | chengkao |
|              | 研究生考试                    | yankao   |
|              | 自学考试                      | zikao    |
|              | 中小学教师资格考试            | ntce     |
|              | 同等学力申请硕士学位考试      | tdxl     |
| 社会证书考试 | 全国四六级考试（CET）         | cet      |
|              | 全国计算机等级考试（NCRE）    | ncre     |
|              | 全国计算机应用水平考试（NIT） | nit      |
|              | 全国英语等级考试（PETS）      | pets     |
|              | 全国外语水平考试（WSK）       | wsk      |
|              | 书画等级考试（CCPT）          | ccpt     |

### 日本语能力测试 JLPT 通知 <Site url="jlpt.neea.cn" size="sm" />

<Route namespace="neea" :data='{"path":"/jlpt","name":"日本语能力测试 JLPT 通知","url":"jlpt.neea.cn","maintainers":["nczitzk"],"example":"/neea/jlpt","categories":["study"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["jlpt.neea.cn"],"target":"/jlpt"}],"view":0,"location":"jlpt.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1363)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.16_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__lightn_jpqt62prktinpu3liv7qmr4644/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.2/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

## 中国计算机职业技术资格考试 <Site url="www.ruankao.org.cn"/>

### 软考动态 <Site url="www.ruankao.org.cn" size="sm" />

<Route namespace="ruankao" :data='{"path":"/news","name":"软考动态","description":"**注意：** 官方网站限制了国外网络请求，可能需要通过部署在中国大陆内的 RSSHub 实例访问。","maintainers":["PrinOrange"],"categories":["study"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false,"supportRadar":true},"radar":[{"title":"计算机职业技术资格考试（软考）动态","source":["www.ruankao.org.cn/index/work","www.ruankao.org.cn"],"target":"/news"}],"example":"/ruankao/news","location":"news.ts"}' :test='{"code":0}' />

**注意：** 官方网站限制了国外网络请求，可能需要通过部署在中国大陆内的 RSSHub 实例访问。

