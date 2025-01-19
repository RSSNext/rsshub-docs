# 🌟 Popular

## 36kr <Site url="36kr.com"/>

### 资讯热榜 <Site url="36kr.com" size="sm" />

<Route namespace="36kr" :data='{"path":"/hot-list/:category?","categories":["new-media","popular"],"example":"/36kr/hot-list","parameters":{"category":"分类，默认为24小时热榜"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["36kr.com/hot-list/:category","36kr.com/"],"target":"/hot-list/:category"}],"name":"资讯热榜","maintainers":["nczitzk"],"description":"| 24 小时热榜 | 资讯人气榜 | 资讯综合榜 | 资讯收藏榜 |\n  | ----------- | ---------- | ---------- | ---------- |\n  | 24          | renqi      | zonghe     | shoucang   |","location":"hot-list.ts"}' :test='undefined' />

| 24 小时热榜 | 资讯人气榜 | 资讯综合榜 | 资讯收藏榜 |
  | ----------- | ---------- | ---------- | ---------- |
  | 24          | renqi      | zonghe     | shoucang   |

### 资讯, 快讯, 用户文章, 主题文章, 专题文章, 搜索文章, 搜索快讯 <Site url="36kr.com" size="sm" />

<Route namespace="36kr" :data='{"path":"/:category/:subCategory?/:keyword?","categories":["new-media","popular"],"example":"/36kr/newsflashes","parameters":{"category":"分类，必填项","subCategory":"子分类，选填项，目的是为了兼容老逻辑","keyword":"关键词，选填项，仅搜索文章/快讯时有效"},"name":"资讯, 快讯, 用户文章, 主题文章, 专题文章, 搜索文章, 搜索快讯","maintainers":["nczitzk","fashioncj"],"description":"| 最新资讯频道 | 快讯 | 推荐资讯 | 生活 | 房产 | 职场 | 搜索文章 | 搜索快讯 |\n  | ------- | -------- | -------- | -------- | -------- | --------| -------- | -------- |\n  | news | newsflashes | recommend | life | estate | workplace | search/articles/关键词 | search/articles/关键词 |","location":"index.ts"}' :test='undefined' />

| 最新资讯频道 | 快讯 | 推荐资讯 | 生活 | 房产 | 职场 | 搜索文章 | 搜索快讯 |
  | ------- | -------- | -------- | -------- | -------- | --------| -------- | -------- |
  | news | newsflashes | recommend | life | estate | workplace | search/articles/关键词 | search/articles/关键词 |

## 500px 摄影社区 <Site url="500px.com.cn"/>

### 部落影集 <Site url="500px.com.cn" size="sm" />

<Route namespace="500px" :data='{"path":"/tribe/set/:id","categories":["picture","popular"],"view":2,"example":"/500px/tribe/set/f5de0b8aa6d54ec486f5e79616418001","parameters":{"id":"部落 ID"},"name":"部落影集","maintainers":["TonyRL"],"location":"tribe-set.ts"}' :test='undefined' />

## AcFun <Site url="www.acfun.cn"/>

### 番剧 <Site url="www.acfun.cn" size="sm" />

<Route namespace="acfun" :data='{"path":"/bangumi/:id","categories":["anime","popular"],"view":3,"example":"/acfun/bangumi/5022158","parameters":{"id":"番剧 id"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"番剧","maintainers":["xyqfer"],"description":"::: tip\n番剧 id 不包含开头的 aa。\n例如：`https://www.acfun.cn/bangumi/aa5022158` 的番剧 id 是 5022158，不包括开头的 aa。\n:::","location":"bangumi.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 9)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

::: tip
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

<Route namespace="acfun" :data='{"path":"/user/video/:uid","radar":[{"source":["www.acfun.cn/u/:id"],"target":"/user/video/:id"}],"name":"用户投稿","parameters":{"uid":"用户 UID"},"categories":["anime","popular"],"example":"/acfun/user/video/6102","view":3,"maintainers":["wdssmq"],"location":"video.ts"}' :test='{"code":0}' />

## AEON <Site url="aeon.co"/>

### Categories <Site url="aeon.co" size="sm" />

<Route namespace="aeon" :data='{"path":"/category/:category","categories":["new-media","popular"],"example":"/aeon/category/philosophy","parameters":{"category":{"description":"Category","options":[{"value":"philosophy","label":"Philosophy"},{"value":"science","label":"Science"},{"value":"psychology","label":"Psychology"},{"value":"society","label":"Society"},{"value":"culture","label":"Culture"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["aeon.co/:category"]}],"name":"Categories","maintainers":["emdoe"],"location":"category.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 14)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### Types <Site url="aeon.co" size="sm" />

<Route namespace="aeon" :data='{"path":"/:type","categories":["new-media","popular"],"example":"/aeon/essays","parameters":{"type":{"description":"Type","options":[{"value":"essays","label":"Essays"},{"value":"videos","label":"Videos"},{"value":"audio","label":"Audio"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["aeon.co/:type"]}],"name":"Types","maintainers":["emdoe"],"description":"Supported types: Essays, Videos, and Audio.\n\n  Compared to the official one, the RSS feed generated by RSSHub not only has more fine-grained options, but also eliminates pull quotes, which can&#39;t be easily distinguished from other paragraphs by any RSS reader, but only disrupt the reading flow. This feed also provides users with a bio of the author at the top.","location":"type.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 15)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

Supported types: Essays, Videos, and Audio.

  Compared to the official one, the RSS feed generated by RSSHub not only has more fine-grained options, but also eliminates pull quotes, which can't be easily distinguished from other paragraphs by any RSS reader, but only disrupt the reading flow. This feed also provides users with a bio of the author at the top.

## AIbase <Site url="aibase.com"/>

### 标签 <Site url="top.aibase.com" size="sm" />

<Route namespace="aibase" :data='{"path":"/topic/:id?/:filter?","name":"标签","url":"top.aibase.com","maintainers":["nczitzk"],"example":"/aibase/topic","parameters":{"id":"标签，默认为空，即全部产品，可在对应标签页 URL 中找到","filter":"过滤器，默认为 `id` 即最新，可选 `pv` 即热门"},"description":"::: tip\n  若订阅 [AI](https://top.aibase.com/topic/AI)，网址为 `https://top.aibase.com/topic/AI`。截取 `https://top.aibase.com/topic` 到末尾的部分 `AI` 作为参数填入，此时路由为 [`/aibase/topic/AI`](https://rsshub.app/aibase/topic/AI)。\n:::\n\n::: tip\n  此处查看 [全部标签](https://top.aibase.com/topic)\n:::\n\n  <details>\n    <summary>更多标签</summary>\n\n    | [AI](https://top.aibase.com/topic/AI)                                                               | [人工智能](https://top.aibase.com/topic/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD)                       | [图像生成](https://top.aibase.com/topic/%E5%9B%BE%E5%83%8F%E7%94%9F%E6%88%90)            | [自动化](https://top.aibase.com/topic/%E8%87%AA%E5%8A%A8%E5%8C%96)                       | [AI 助手](https://top.aibase.com/topic/AI%E5%8A%A9%E6%89%8B)                  |\n    | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |\n    | [聊天机器人](https://top.aibase.com/topic/%E8%81%8A%E5%A4%A9%E6%9C%BA%E5%99%A8%E4%BA%BA)            | [个性化](https://top.aibase.com/topic/%E4%B8%AA%E6%80%A7%E5%8C%96)                                  | [社交媒体](https://top.aibase.com/topic/%E7%A4%BE%E4%BA%A4%E5%AA%92%E4%BD%93)            | [图像处理](https://top.aibase.com/topic/%E5%9B%BE%E5%83%8F%E5%A4%84%E7%90%86)            | [数据分析](https://top.aibase.com/topic/%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90) |\n    | [自然语言处理](https://top.aibase.com/topic/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86) | [聊天](https://top.aibase.com/topic/%E8%81%8A%E5%A4%A9)                                             | [机器学习](https://top.aibase.com/topic/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0)            | [教育](https://top.aibase.com/topic/%E6%95%99%E8%82%B2)                                  | [内容创作](https://top.aibase.com/topic/%E5%86%85%E5%AE%B9%E5%88%9B%E4%BD%9C) |\n    | [生产力](https://top.aibase.com/topic/%E7%94%9F%E4%BA%A7%E5%8A%9B)                                  | [设计](https://top.aibase.com/topic/%E8%AE%BE%E8%AE%A1)                                             | [ChatGPT](https://top.aibase.com/topic/ChatGPT)                                          | [创意](https://top.aibase.com/topic/%E5%88%9B%E6%84%8F)                                  | [开源](https://top.aibase.com/topic/%E5%BC%80%E6%BA%90)                       |\n    | [写作](https://top.aibase.com/topic/%E5%86%99%E4%BD%9C)                                             | [效率助手](https://top.aibase.com/topic/%E6%95%88%E7%8E%87%E5%8A%A9%E6%89%8B)                       | [学习](https://top.aibase.com/topic/%E5%AD%A6%E4%B9%A0)                                  | [插件](https://top.aibase.com/topic/%E6%8F%92%E4%BB%B6)                                  | [翻译](https://top.aibase.com/topic/%E7%BF%BB%E8%AF%91)                       |\n    | [团队协作](https://top.aibase.com/topic/%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C)                       | [SEO](https://top.aibase.com/topic/SEO)                                                             | [营销](https://top.aibase.com/topic/%E8%90%A5%E9%94%80)                                  | [内容生成](https://top.aibase.com/topic/%E5%86%85%E5%AE%B9%E7%94%9F%E6%88%90)            | [AI 技术](https://top.aibase.com/topic/AI%E6%8A%80%E6%9C%AF)                  |\n    | [AI 工具](https://top.aibase.com/topic/AI%E5%B7%A5%E5%85%B7)                                        | [智能助手](https://top.aibase.com/topic/%E6%99%BA%E8%83%BD%E5%8A%A9%E6%89%8B)                       | [深度学习](https://top.aibase.com/topic/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0)            | [多语言支持](https://top.aibase.com/topic/%E5%A4%9A%E8%AF%AD%E8%A8%80%E6%94%AF%E6%8C%81) | [视频](https://top.aibase.com/topic/%E8%A7%86%E9%A2%91)                       |\n    | [艺术](https://top.aibase.com/topic/%E8%89%BA%E6%9C%AF)                                             | [文本生成](https://top.aibase.com/topic/%E6%96%87%E6%9C%AC%E7%94%9F%E6%88%90)                       | [开发编程](https://top.aibase.com/topic/%E5%BC%80%E5%8F%91%E7%BC%96%E7%A8%8B)            | [协作](https://top.aibase.com/topic/%E5%8D%8F%E4%BD%9C)                                  | [语言模型](https://top.aibase.com/topic/%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B) |\n    | [工具](https://top.aibase.com/topic/%E5%B7%A5%E5%85%B7)                                             | [销售](https://top.aibase.com/topic/%E9%94%80%E5%94%AE)                                             | [生产力工具](https://top.aibase.com/topic/%E7%94%9F%E4%BA%A7%E5%8A%9B%E5%B7%A5%E5%85%B7) | [AI 写作](https://top.aibase.com/topic/AI%E5%86%99%E4%BD%9C)                             | [创作](https://top.aibase.com/topic/%E5%88%9B%E4%BD%9C)                       |\n    | [工作效率](https://top.aibase.com/topic/%E5%B7%A5%E4%BD%9C%E6%95%88%E7%8E%87)                       | [无代码](https://top.aibase.com/topic/%E6%97%A0%E4%BB%A3%E7%A0%81)                                  | [隐私保护](https://top.aibase.com/topic/%E9%9A%90%E7%A7%81%E4%BF%9D%E6%8A%A4)            | [视频编辑](https://top.aibase.com/topic/%E8%A7%86%E9%A2%91%E7%BC%96%E8%BE%91)            | [摘要](https://top.aibase.com/topic/%E6%91%98%E8%A6%81)                       |\n    | [多语言](https://top.aibase.com/topic/%E5%A4%9A%E8%AF%AD%E8%A8%80)                                  | [求职](https://top.aibase.com/topic/%E6%B1%82%E8%81%8C)                                             | [GPT](https://top.aibase.com/topic/GPT)                                                  | [音乐](https://top.aibase.com/topic/%E9%9F%B3%E4%B9%90)                                  | [视频创作](https://top.aibase.com/topic/%E8%A7%86%E9%A2%91%E5%88%9B%E4%BD%9C) |\n    | [设计工具](https://top.aibase.com/topic/%E8%AE%BE%E8%AE%A1%E5%B7%A5%E5%85%B7)                       | [搜索](https://top.aibase.com/topic/%E6%90%9C%E7%B4%A2)                                             | [写作工具](https://top.aibase.com/topic/%E5%86%99%E4%BD%9C%E5%B7%A5%E5%85%B7)            | [视频生成](https://top.aibase.com/topic/%E8%A7%86%E9%A2%91%E7%94%9F%E6%88%90)            | [招聘](https://top.aibase.com/topic/%E6%8B%9B%E8%81%98)                       |\n    | [代码生成](https://top.aibase.com/topic/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90)                       | [大型语言模型](https://top.aibase.com/topic/%E5%A4%A7%E5%9E%8B%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B) | [语音识别](https://top.aibase.com/topic/%E8%AF%AD%E9%9F%B3%E8%AF%86%E5%88%AB)            | [编程](https://top.aibase.com/topic/%E7%BC%96%E7%A8%8B)                                  | [在线工具](https://top.aibase.com/topic/%E5%9C%A8%E7%BA%BF%E5%B7%A5%E5%85%B7) |\n    | [API](https://top.aibase.com/topic/API)                                                             | [趣味](https://top.aibase.com/topic/%E8%B6%A3%E5%91%B3)                                             | [客户支持](https://top.aibase.com/topic/%E5%AE%A2%E6%88%B7%E6%94%AF%E6%8C%81)            | [语音合成](https://top.aibase.com/topic/%E8%AF%AD%E9%9F%B3%E5%90%88%E6%88%90)            | [图像](https://top.aibase.com/topic/%E5%9B%BE%E5%83%8F)                       |\n    | [电子商务](https://top.aibase.com/topic/%E7%94%B5%E5%AD%90%E5%95%86%E5%8A%A1)                       | [SEO 优化](https://top.aibase.com/topic/SEO%E4%BC%98%E5%8C%96)                                      | [AI 辅助](https://top.aibase.com/topic/AI%E8%BE%85%E5%8A%A9)                             | [AI 生成](https://top.aibase.com/topic/AI%E7%94%9F%E6%88%90)                             | [创作工具](https://top.aibase.com/topic/%E5%88%9B%E4%BD%9C%E5%B7%A5%E5%85%B7) |\n    | [免费](https://top.aibase.com/topic/%E5%85%8D%E8%B4%B9)                                             | [LinkedIn](https://top.aibase.com/topic/LinkedIn)                                                   | [博客](https://top.aibase.com/topic/%E5%8D%9A%E5%AE%A2)                                  | [写作助手](https://top.aibase.com/topic/%E5%86%99%E4%BD%9C%E5%8A%A9%E6%89%8B)            | [助手](https://top.aibase.com/topic/%E5%8A%A9%E6%89%8B)                       |\n    | [智能](https://top.aibase.com/topic/%E6%99%BA%E8%83%BD)                                             | [健康](https://top.aibase.com/topic/%E5%81%A5%E5%BA%B7)                                             | [多模态](https://top.aibase.com/topic/%E5%A4%9A%E6%A8%A1%E6%80%81)                       | [任务管理](https://top.aibase.com/topic/%E4%BB%BB%E5%8A%A1%E7%AE%A1%E7%90%86)            | [电子邮件](https://top.aibase.com/topic/%E7%94%B5%E5%AD%90%E9%82%AE%E4%BB%B6) |\n    | [笔记](https://top.aibase.com/topic/%E7%AC%94%E8%AE%B0)                                             | [搜索引擎](https://top.aibase.com/topic/%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E)                       | [计算机视觉](https://top.aibase.com/topic/%E8%AE%A1%E7%AE%97%E6%9C%BA%E8%A7%86%E8%A7%89) | [社区](https://top.aibase.com/topic/%E7%A4%BE%E5%8C%BA)                                  | [效率](https://top.aibase.com/topic/%E6%95%88%E7%8E%87)                       |\n    | [知识管理](https://top.aibase.com/topic/%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86)                       | [LLM](https://top.aibase.com/topic/LLM)                                                             | [智能聊天](https://top.aibase.com/topic/%E6%99%BA%E8%83%BD%E8%81%8A%E5%A4%A9)            | [社交](https://top.aibase.com/topic/%E7%A4%BE%E4%BA%A4)                                  | [语言学习](https://top.aibase.com/topic/%E8%AF%AD%E8%A8%80%E5%AD%A6%E4%B9%A0) |\n    | [娱乐](https://top.aibase.com/topic/%E5%A8%B1%E4%B9%90)                                             | [简历](https://top.aibase.com/topic/%E7%AE%80%E5%8E%86)                                             | [OpenAI](https://top.aibase.com/topic/OpenAI)                                            | [客户服务](https://top.aibase.com/topic/%E5%AE%A2%E6%88%B7%E6%9C%8D%E5%8A%A1)            | [室内设计](https://top.aibase.com/topic/%E5%AE%A4%E5%86%85%E8%AE%BE%E8%AE%A1) |\n  </details>\n    ","categories":["new-media","popular"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["top.aibase.com/topic/:id"]},{"title":"AI","source":["top.aibase.com/topic/AI"],"target":"/topic/AI"},{"title":"人工智能","source":["top.aibase.com/topic/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD"],"target":"/topic/人工智能"},{"title":"图像生成","source":["top.aibase.com/topic/%E5%9B%BE%E5%83%8F%E7%94%9F%E6%88%90"],"target":"/topic/图像生成"},{"title":"自动化","source":["top.aibase.com/topic/%E8%87%AA%E5%8A%A8%E5%8C%96"],"target":"/topic/自动化"},{"title":"AI助手","source":["top.aibase.com/topic/AI%E5%8A%A9%E6%89%8B"],"target":"/topic/AI助手"},{"title":"聊天机器人","source":["top.aibase.com/topic/%E8%81%8A%E5%A4%A9%E6%9C%BA%E5%99%A8%E4%BA%BA"],"target":"/topic/聊天机器人"},{"title":"个性化","source":["top.aibase.com/topic/%E4%B8%AA%E6%80%A7%E5%8C%96"],"target":"/topic/个性化"},{"title":"社交媒体","source":["top.aibase.com/topic/%E7%A4%BE%E4%BA%A4%E5%AA%92%E4%BD%93"],"target":"/topic/社交媒体"},{"title":"图像处理","source":["top.aibase.com/topic/%E5%9B%BE%E5%83%8F%E5%A4%84%E7%90%86"],"target":"/topic/图像处理"},{"title":"数据分析","source":["top.aibase.com/topic/%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90"],"target":"/topic/数据分析"},{"title":"自然语言处理","source":["top.aibase.com/topic/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86"],"target":"/topic/自然语言处理"},{"title":"聊天","source":["top.aibase.com/topic/%E8%81%8A%E5%A4%A9"],"target":"/topic/聊天"},{"title":"机器学习","source":["top.aibase.com/topic/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0"],"target":"/topic/机器学习"},{"title":"教育","source":["top.aibase.com/topic/%E6%95%99%E8%82%B2"],"target":"/topic/教育"},{"title":"内容创作","source":["top.aibase.com/topic/%E5%86%85%E5%AE%B9%E5%88%9B%E4%BD%9C"],"target":"/topic/内容创作"},{"title":"生产力","source":["top.aibase.com/topic/%E7%94%9F%E4%BA%A7%E5%8A%9B"],"target":"/topic/生产力"},{"title":"设计","source":["top.aibase.com/topic/%E8%AE%BE%E8%AE%A1"],"target":"/topic/设计"},{"title":"ChatGPT","source":["top.aibase.com/topic/ChatGPT"],"target":"/topic/ChatGPT"},{"title":"创意","source":["top.aibase.com/topic/%E5%88%9B%E6%84%8F"],"target":"/topic/创意"},{"title":"开源","source":["top.aibase.com/topic/%E5%BC%80%E6%BA%90"],"target":"/topic/开源"},{"title":"写作","source":["top.aibase.com/topic/%E5%86%99%E4%BD%9C"],"target":"/topic/写作"},{"title":"效率助手","source":["top.aibase.com/topic/%E6%95%88%E7%8E%87%E5%8A%A9%E6%89%8B"],"target":"/topic/效率助手"},{"title":"学习","source":["top.aibase.com/topic/%E5%AD%A6%E4%B9%A0"],"target":"/topic/学习"},{"title":"插件","source":["top.aibase.com/topic/%E6%8F%92%E4%BB%B6"],"target":"/topic/插件"},{"title":"翻译","source":["top.aibase.com/topic/%E7%BF%BB%E8%AF%91"],"target":"/topic/翻译"},{"title":"团队协作","source":["top.aibase.com/topic/%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C"],"target":"/topic/团队协作"},{"title":"SEO","source":["top.aibase.com/topic/SEO"],"target":"/topic/SEO"},{"title":"营销","source":["top.aibase.com/topic/%E8%90%A5%E9%94%80"],"target":"/topic/营销"},{"title":"内容生成","source":["top.aibase.com/topic/%E5%86%85%E5%AE%B9%E7%94%9F%E6%88%90"],"target":"/topic/内容生成"},{"title":"AI技术","source":["top.aibase.com/topic/AI%E6%8A%80%E6%9C%AF"],"target":"/topic/AI技术"},{"title":"AI工具","source":["top.aibase.com/topic/AI%E5%B7%A5%E5%85%B7"],"target":"/topic/AI工具"},{"title":"智能助手","source":["top.aibase.com/topic/%E6%99%BA%E8%83%BD%E5%8A%A9%E6%89%8B"],"target":"/topic/智能助手"},{"title":"深度学习","source":["top.aibase.com/topic/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0"],"target":"/topic/深度学习"},{"title":"多语言支持","source":["top.aibase.com/topic/%E5%A4%9A%E8%AF%AD%E8%A8%80%E6%94%AF%E6%8C%81"],"target":"/topic/多语言支持"},{"title":"视频","source":["top.aibase.com/topic/%E8%A7%86%E9%A2%91"],"target":"/topic/视频"},{"title":"艺术","source":["top.aibase.com/topic/%E8%89%BA%E6%9C%AF"],"target":"/topic/艺术"},{"title":"文本生成","source":["top.aibase.com/topic/%E6%96%87%E6%9C%AC%E7%94%9F%E6%88%90"],"target":"/topic/文本生成"},{"title":"开发编程","source":["top.aibase.com/topic/%E5%BC%80%E5%8F%91%E7%BC%96%E7%A8%8B"],"target":"/topic/开发编程"},{"title":"协作","source":["top.aibase.com/topic/%E5%8D%8F%E4%BD%9C"],"target":"/topic/协作"},{"title":"语言模型","source":["top.aibase.com/topic/%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B"],"target":"/topic/语言模型"},{"title":"工具","source":["top.aibase.com/topic/%E5%B7%A5%E5%85%B7"],"target":"/topic/工具"},{"title":"销售","source":["top.aibase.com/topic/%E9%94%80%E5%94%AE"],"target":"/topic/销售"},{"title":"生产力工具","source":["top.aibase.com/topic/%E7%94%9F%E4%BA%A7%E5%8A%9B%E5%B7%A5%E5%85%B7"],"target":"/topic/生产力工具"},{"title":"AI写作","source":["top.aibase.com/topic/AI%E5%86%99%E4%BD%9C"],"target":"/topic/AI写作"},{"title":"创作","source":["top.aibase.com/topic/%E5%88%9B%E4%BD%9C"],"target":"/topic/创作"},{"title":"工作效率","source":["top.aibase.com/topic/%E5%B7%A5%E4%BD%9C%E6%95%88%E7%8E%87"],"target":"/topic/工作效率"},{"title":"无代码","source":["top.aibase.com/topic/%E6%97%A0%E4%BB%A3%E7%A0%81"],"target":"/topic/无代码"},{"title":"隐私保护","source":["top.aibase.com/topic/%E9%9A%90%E7%A7%81%E4%BF%9D%E6%8A%A4"],"target":"/topic/隐私保护"},{"title":"视频编辑","source":["top.aibase.com/topic/%E8%A7%86%E9%A2%91%E7%BC%96%E8%BE%91"],"target":"/topic/视频编辑"},{"title":"摘要","source":["top.aibase.com/topic/%E6%91%98%E8%A6%81"],"target":"/topic/摘要"},{"title":"多语言","source":["top.aibase.com/topic/%E5%A4%9A%E8%AF%AD%E8%A8%80"],"target":"/topic/多语言"},{"title":"求职","source":["top.aibase.com/topic/%E6%B1%82%E8%81%8C"],"target":"/topic/求职"},{"title":"GPT","source":["top.aibase.com/topic/GPT"],"target":"/topic/GPT"},{"title":"音乐","source":["top.aibase.com/topic/%E9%9F%B3%E4%B9%90"],"target":"/topic/音乐"},{"title":"视频创作","source":["top.aibase.com/topic/%E8%A7%86%E9%A2%91%E5%88%9B%E4%BD%9C"],"target":"/topic/视频创作"},{"title":"设计工具","source":["top.aibase.com/topic/%E8%AE%BE%E8%AE%A1%E5%B7%A5%E5%85%B7"],"target":"/topic/设计工具"},{"title":"搜索","source":["top.aibase.com/topic/%E6%90%9C%E7%B4%A2"],"target":"/topic/搜索"},{"title":"写作工具","source":["top.aibase.com/topic/%E5%86%99%E4%BD%9C%E5%B7%A5%E5%85%B7"],"target":"/topic/写作工具"},{"title":"视频生成","source":["top.aibase.com/topic/%E8%A7%86%E9%A2%91%E7%94%9F%E6%88%90"],"target":"/topic/视频生成"},{"title":"招聘","source":["top.aibase.com/topic/%E6%8B%9B%E8%81%98"],"target":"/topic/招聘"},{"title":"代码生成","source":["top.aibase.com/topic/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90"],"target":"/topic/代码生成"},{"title":"大型语言模型","source":["top.aibase.com/topic/%E5%A4%A7%E5%9E%8B%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B"],"target":"/topic/大型语言模型"},{"title":"语音识别","source":["top.aibase.com/topic/%E8%AF%AD%E9%9F%B3%E8%AF%86%E5%88%AB"],"target":"/topic/语音识别"},{"title":"编程","source":["top.aibase.com/topic/%E7%BC%96%E7%A8%8B"],"target":"/topic/编程"},{"title":"在线工具","source":["top.aibase.com/topic/%E5%9C%A8%E7%BA%BF%E5%B7%A5%E5%85%B7"],"target":"/topic/在线工具"},{"title":"API","source":["top.aibase.com/topic/API"],"target":"/topic/API"},{"title":"趣味","source":["top.aibase.com/topic/%E8%B6%A3%E5%91%B3"],"target":"/topic/趣味"},{"title":"客户支持","source":["top.aibase.com/topic/%E5%AE%A2%E6%88%B7%E6%94%AF%E6%8C%81"],"target":"/topic/客户支持"},{"title":"语音合成","source":["top.aibase.com/topic/%E8%AF%AD%E9%9F%B3%E5%90%88%E6%88%90"],"target":"/topic/语音合成"},{"title":"图像","source":["top.aibase.com/topic/%E5%9B%BE%E5%83%8F"],"target":"/topic/图像"},{"title":"电子商务","source":["top.aibase.com/topic/%E7%94%B5%E5%AD%90%E5%95%86%E5%8A%A1"],"target":"/topic/电子商务"},{"title":"SEO优化","source":["top.aibase.com/topic/SEO%E4%BC%98%E5%8C%96"],"target":"/topic/SEO优化"},{"title":"AI辅助","source":["top.aibase.com/topic/AI%E8%BE%85%E5%8A%A9"],"target":"/topic/AI辅助"},{"title":"AI生成","source":["top.aibase.com/topic/AI%E7%94%9F%E6%88%90"],"target":"/topic/AI生成"},{"title":"创作工具","source":["top.aibase.com/topic/%E5%88%9B%E4%BD%9C%E5%B7%A5%E5%85%B7"],"target":"/topic/创作工具"},{"title":"免费","source":["top.aibase.com/topic/%E5%85%8D%E8%B4%B9"],"target":"/topic/免费"},{"title":"LinkedIn","source":["top.aibase.com/topic/LinkedIn"],"target":"/topic/LinkedIn"},{"title":"博客","source":["top.aibase.com/topic/%E5%8D%9A%E5%AE%A2"],"target":"/topic/博客"},{"title":"写作助手","source":["top.aibase.com/topic/%E5%86%99%E4%BD%9C%E5%8A%A9%E6%89%8B"],"target":"/topic/写作助手"},{"title":"助手","source":["top.aibase.com/topic/%E5%8A%A9%E6%89%8B"],"target":"/topic/助手"},{"title":"智能","source":["top.aibase.com/topic/%E6%99%BA%E8%83%BD"],"target":"/topic/智能"},{"title":"健康","source":["top.aibase.com/topic/%E5%81%A5%E5%BA%B7"],"target":"/topic/健康"},{"title":"多模态","source":["top.aibase.com/topic/%E5%A4%9A%E6%A8%A1%E6%80%81"],"target":"/topic/多模态"},{"title":"任务管理","source":["top.aibase.com/topic/%E4%BB%BB%E5%8A%A1%E7%AE%A1%E7%90%86"],"target":"/topic/任务管理"},{"title":"电子邮件","source":["top.aibase.com/topic/%E7%94%B5%E5%AD%90%E9%82%AE%E4%BB%B6"],"target":"/topic/电子邮件"},{"title":"笔记","source":["top.aibase.com/topic/%E7%AC%94%E8%AE%B0"],"target":"/topic/笔记"},{"title":"搜索引擎","source":["top.aibase.com/topic/%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E"],"target":"/topic/搜索引擎"},{"title":"计算机视觉","source":["top.aibase.com/topic/%E8%AE%A1%E7%AE%97%E6%9C%BA%E8%A7%86%E8%A7%89"],"target":"/topic/计算机视觉"},{"title":"社区","source":["top.aibase.com/topic/%E7%A4%BE%E5%8C%BA"],"target":"/topic/社区"},{"title":"效率","source":["top.aibase.com/topic/%E6%95%88%E7%8E%87"],"target":"/topic/效率"},{"title":"知识管理","source":["top.aibase.com/topic/%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86"],"target":"/topic/知识管理"},{"title":"LLM","source":["top.aibase.com/topic/LLM"],"target":"/topic/LLM"},{"title":"智能聊天","source":["top.aibase.com/topic/%E6%99%BA%E8%83%BD%E8%81%8A%E5%A4%A9"],"target":"/topic/智能聊天"},{"title":"社交","source":["top.aibase.com/topic/%E7%A4%BE%E4%BA%A4"],"target":"/topic/社交"},{"title":"语言学习","source":["top.aibase.com/topic/%E8%AF%AD%E8%A8%80%E5%AD%A6%E4%B9%A0"],"target":"/topic/语言学习"},{"title":"娱乐","source":["top.aibase.com/topic/%E5%A8%B1%E4%B9%90"],"target":"/topic/娱乐"},{"title":"简历","source":["top.aibase.com/topic/%E7%AE%80%E5%8E%86"],"target":"/topic/简历"},{"title":"OpenAI","source":["top.aibase.com/topic/OpenAI"],"target":"/topic/OpenAI"},{"title":"客户服务","source":["top.aibase.com/topic/%E5%AE%A2%E6%88%B7%E6%9C%8D%E5%8A%A1"],"target":"/topic/客户服务"},{"title":"室内设计","source":["top.aibase.com/topic/%E5%AE%A4%E5%86%85%E8%AE%BE%E8%AE%A1"],"target":"/topic/室内设计"}],"location":"topic.ts"}' :test='{"code":0}' />

::: tip
  若订阅 [AI](https://top.aibase.com/topic/AI)，网址为 `https://top.aibase.com/topic/AI`。截取 `https://top.aibase.com/topic` 到末尾的部分 `AI` 作为参数填入，此时路由为 [`/aibase/topic/AI`](https://rsshub.app/aibase/topic/AI)。
:::

::: tip
  此处查看 [全部标签](https://top.aibase.com/topic)
:::

  <details>
    <summary>更多标签</summary>

    | [AI](https://top.aibase.com/topic/AI)                                                               | [人工智能](https://top.aibase.com/topic/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD)                       | [图像生成](https://top.aibase.com/topic/%E5%9B%BE%E5%83%8F%E7%94%9F%E6%88%90)            | [自动化](https://top.aibase.com/topic/%E8%87%AA%E5%8A%A8%E5%8C%96)                       | [AI 助手](https://top.aibase.com/topic/AI%E5%8A%A9%E6%89%8B)                  |
    | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
    | [聊天机器人](https://top.aibase.com/topic/%E8%81%8A%E5%A4%A9%E6%9C%BA%E5%99%A8%E4%BA%BA)            | [个性化](https://top.aibase.com/topic/%E4%B8%AA%E6%80%A7%E5%8C%96)                                  | [社交媒体](https://top.aibase.com/topic/%E7%A4%BE%E4%BA%A4%E5%AA%92%E4%BD%93)            | [图像处理](https://top.aibase.com/topic/%E5%9B%BE%E5%83%8F%E5%A4%84%E7%90%86)            | [数据分析](https://top.aibase.com/topic/%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90) |
    | [自然语言处理](https://top.aibase.com/topic/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86) | [聊天](https://top.aibase.com/topic/%E8%81%8A%E5%A4%A9)                                             | [机器学习](https://top.aibase.com/topic/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0)            | [教育](https://top.aibase.com/topic/%E6%95%99%E8%82%B2)                                  | [内容创作](https://top.aibase.com/topic/%E5%86%85%E5%AE%B9%E5%88%9B%E4%BD%9C) |
    | [生产力](https://top.aibase.com/topic/%E7%94%9F%E4%BA%A7%E5%8A%9B)                                  | [设计](https://top.aibase.com/topic/%E8%AE%BE%E8%AE%A1)                                             | [ChatGPT](https://top.aibase.com/topic/ChatGPT)                                          | [创意](https://top.aibase.com/topic/%E5%88%9B%E6%84%8F)                                  | [开源](https://top.aibase.com/topic/%E5%BC%80%E6%BA%90)                       |
    | [写作](https://top.aibase.com/topic/%E5%86%99%E4%BD%9C)                                             | [效率助手](https://top.aibase.com/topic/%E6%95%88%E7%8E%87%E5%8A%A9%E6%89%8B)                       | [学习](https://top.aibase.com/topic/%E5%AD%A6%E4%B9%A0)                                  | [插件](https://top.aibase.com/topic/%E6%8F%92%E4%BB%B6)                                  | [翻译](https://top.aibase.com/topic/%E7%BF%BB%E8%AF%91)                       |
    | [团队协作](https://top.aibase.com/topic/%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C)                       | [SEO](https://top.aibase.com/topic/SEO)                                                             | [营销](https://top.aibase.com/topic/%E8%90%A5%E9%94%80)                                  | [内容生成](https://top.aibase.com/topic/%E5%86%85%E5%AE%B9%E7%94%9F%E6%88%90)            | [AI 技术](https://top.aibase.com/topic/AI%E6%8A%80%E6%9C%AF)                  |
    | [AI 工具](https://top.aibase.com/topic/AI%E5%B7%A5%E5%85%B7)                                        | [智能助手](https://top.aibase.com/topic/%E6%99%BA%E8%83%BD%E5%8A%A9%E6%89%8B)                       | [深度学习](https://top.aibase.com/topic/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0)            | [多语言支持](https://top.aibase.com/topic/%E5%A4%9A%E8%AF%AD%E8%A8%80%E6%94%AF%E6%8C%81) | [视频](https://top.aibase.com/topic/%E8%A7%86%E9%A2%91)                       |
    | [艺术](https://top.aibase.com/topic/%E8%89%BA%E6%9C%AF)                                             | [文本生成](https://top.aibase.com/topic/%E6%96%87%E6%9C%AC%E7%94%9F%E6%88%90)                       | [开发编程](https://top.aibase.com/topic/%E5%BC%80%E5%8F%91%E7%BC%96%E7%A8%8B)            | [协作](https://top.aibase.com/topic/%E5%8D%8F%E4%BD%9C)                                  | [语言模型](https://top.aibase.com/topic/%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B) |
    | [工具](https://top.aibase.com/topic/%E5%B7%A5%E5%85%B7)                                             | [销售](https://top.aibase.com/topic/%E9%94%80%E5%94%AE)                                             | [生产力工具](https://top.aibase.com/topic/%E7%94%9F%E4%BA%A7%E5%8A%9B%E5%B7%A5%E5%85%B7) | [AI 写作](https://top.aibase.com/topic/AI%E5%86%99%E4%BD%9C)                             | [创作](https://top.aibase.com/topic/%E5%88%9B%E4%BD%9C)                       |
    | [工作效率](https://top.aibase.com/topic/%E5%B7%A5%E4%BD%9C%E6%95%88%E7%8E%87)                       | [无代码](https://top.aibase.com/topic/%E6%97%A0%E4%BB%A3%E7%A0%81)                                  | [隐私保护](https://top.aibase.com/topic/%E9%9A%90%E7%A7%81%E4%BF%9D%E6%8A%A4)            | [视频编辑](https://top.aibase.com/topic/%E8%A7%86%E9%A2%91%E7%BC%96%E8%BE%91)            | [摘要](https://top.aibase.com/topic/%E6%91%98%E8%A6%81)                       |
    | [多语言](https://top.aibase.com/topic/%E5%A4%9A%E8%AF%AD%E8%A8%80)                                  | [求职](https://top.aibase.com/topic/%E6%B1%82%E8%81%8C)                                             | [GPT](https://top.aibase.com/topic/GPT)                                                  | [音乐](https://top.aibase.com/topic/%E9%9F%B3%E4%B9%90)                                  | [视频创作](https://top.aibase.com/topic/%E8%A7%86%E9%A2%91%E5%88%9B%E4%BD%9C) |
    | [设计工具](https://top.aibase.com/topic/%E8%AE%BE%E8%AE%A1%E5%B7%A5%E5%85%B7)                       | [搜索](https://top.aibase.com/topic/%E6%90%9C%E7%B4%A2)                                             | [写作工具](https://top.aibase.com/topic/%E5%86%99%E4%BD%9C%E5%B7%A5%E5%85%B7)            | [视频生成](https://top.aibase.com/topic/%E8%A7%86%E9%A2%91%E7%94%9F%E6%88%90)            | [招聘](https://top.aibase.com/topic/%E6%8B%9B%E8%81%98)                       |
    | [代码生成](https://top.aibase.com/topic/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90)                       | [大型语言模型](https://top.aibase.com/topic/%E5%A4%A7%E5%9E%8B%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B) | [语音识别](https://top.aibase.com/topic/%E8%AF%AD%E9%9F%B3%E8%AF%86%E5%88%AB)            | [编程](https://top.aibase.com/topic/%E7%BC%96%E7%A8%8B)                                  | [在线工具](https://top.aibase.com/topic/%E5%9C%A8%E7%BA%BF%E5%B7%A5%E5%85%B7) |
    | [API](https://top.aibase.com/topic/API)                                                             | [趣味](https://top.aibase.com/topic/%E8%B6%A3%E5%91%B3)                                             | [客户支持](https://top.aibase.com/topic/%E5%AE%A2%E6%88%B7%E6%94%AF%E6%8C%81)            | [语音合成](https://top.aibase.com/topic/%E8%AF%AD%E9%9F%B3%E5%90%88%E6%88%90)            | [图像](https://top.aibase.com/topic/%E5%9B%BE%E5%83%8F)                       |
    | [电子商务](https://top.aibase.com/topic/%E7%94%B5%E5%AD%90%E5%95%86%E5%8A%A1)                       | [SEO 优化](https://top.aibase.com/topic/SEO%E4%BC%98%E5%8C%96)                                      | [AI 辅助](https://top.aibase.com/topic/AI%E8%BE%85%E5%8A%A9)                             | [AI 生成](https://top.aibase.com/topic/AI%E7%94%9F%E6%88%90)                             | [创作工具](https://top.aibase.com/topic/%E5%88%9B%E4%BD%9C%E5%B7%A5%E5%85%B7) |
    | [免费](https://top.aibase.com/topic/%E5%85%8D%E8%B4%B9)                                             | [LinkedIn](https://top.aibase.com/topic/LinkedIn)                                                   | [博客](https://top.aibase.com/topic/%E5%8D%9A%E5%AE%A2)                                  | [写作助手](https://top.aibase.com/topic/%E5%86%99%E4%BD%9C%E5%8A%A9%E6%89%8B)            | [助手](https://top.aibase.com/topic/%E5%8A%A9%E6%89%8B)                       |
    | [智能](https://top.aibase.com/topic/%E6%99%BA%E8%83%BD)                                             | [健康](https://top.aibase.com/topic/%E5%81%A5%E5%BA%B7)                                             | [多模态](https://top.aibase.com/topic/%E5%A4%9A%E6%A8%A1%E6%80%81)                       | [任务管理](https://top.aibase.com/topic/%E4%BB%BB%E5%8A%A1%E7%AE%A1%E7%90%86)            | [电子邮件](https://top.aibase.com/topic/%E7%94%B5%E5%AD%90%E9%82%AE%E4%BB%B6) |
    | [笔记](https://top.aibase.com/topic/%E7%AC%94%E8%AE%B0)                                             | [搜索引擎](https://top.aibase.com/topic/%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E)                       | [计算机视觉](https://top.aibase.com/topic/%E8%AE%A1%E7%AE%97%E6%9C%BA%E8%A7%86%E8%A7%89) | [社区](https://top.aibase.com/topic/%E7%A4%BE%E5%8C%BA)                                  | [效率](https://top.aibase.com/topic/%E6%95%88%E7%8E%87)                       |
    | [知识管理](https://top.aibase.com/topic/%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86)                       | [LLM](https://top.aibase.com/topic/LLM)                                                             | [智能聊天](https://top.aibase.com/topic/%E6%99%BA%E8%83%BD%E8%81%8A%E5%A4%A9)            | [社交](https://top.aibase.com/topic/%E7%A4%BE%E4%BA%A4)                                  | [语言学习](https://top.aibase.com/topic/%E8%AF%AD%E8%A8%80%E5%AD%A6%E4%B9%A0) |
    | [娱乐](https://top.aibase.com/topic/%E5%A8%B1%E4%B9%90)                                             | [简历](https://top.aibase.com/topic/%E7%AE%80%E5%8E%86)                                             | [OpenAI](https://top.aibase.com/topic/OpenAI)                                            | [客户服务](https://top.aibase.com/topic/%E5%AE%A2%E6%88%B7%E6%9C%8D%E5%8A%A1)            | [室内设计](https://top.aibase.com/topic/%E5%AE%A4%E5%86%85%E8%AE%BE%E8%AE%A1) |
  </details>
    

### 发现 <Site url="top.aibase.com" size="sm" />

<Route namespace="aibase" :data='{"path":"/discover/:id?","name":"发现","url":"top.aibase.com","maintainers":["nczitzk"],"example":"/aibase/discover","parameters":{"id":"发现分类，默认为空，即全部产品，可在对应发现分类页 URL 中找到"},"description":"::: tip\n  若订阅 [图片背景移除](https://top.aibase.com/discover/37-49)，网址为 `https://top.aibase.com/discover/37-49`。截取 `https://top.aibase.com/discover/` 到末尾的部分 `37-49` 作为参数填入，此时路由为 [`/aibase/discover/37-49`](https://rsshub.app/aibase/discover/37-49)。\n:::\n\n  <details>\n    <summary>更多分类</summary>\n\n  #### 图像处理\n\n  | 分类                                                  | ID                                                |\n  | ----------------------------------------------------- | ------------------------------------------------- |\n  | [图片背景移除](https://top.aibase.com/discover/37-49) | [37-49](https://rsshub.app/aibase/discover/37-49) |\n  | [图片无损放大](https://top.aibase.com/discover/37-50) | [37-50](https://rsshub.app/aibase/discover/37-50) |\n  | [图片AI修复](https://top.aibase.com/discover/37-51)   | [37-51](https://rsshub.app/aibase/discover/37-51) |\n  | [图像生成](https://top.aibase.com/discover/37-52)     | [37-52](https://rsshub.app/aibase/discover/37-52) |\n  | [Ai图片拓展](https://top.aibase.com/discover/37-53)   | [37-53](https://rsshub.app/aibase/discover/37-53) |\n  | [Ai漫画生成](https://top.aibase.com/discover/37-54)   | [37-54](https://rsshub.app/aibase/discover/37-54) |\n  | [Ai生成写真](https://top.aibase.com/discover/37-55)   | [37-55](https://rsshub.app/aibase/discover/37-55) |\n  | [电商图片制作](https://top.aibase.com/discover/37-83) | [37-83](https://rsshub.app/aibase/discover/37-83) |\n  | [Ai图像转视频](https://top.aibase.com/discover/37-86) | [37-86](https://rsshub.app/aibase/discover/37-86) |\n\n  #### 视频创作\n\n  | 分类                                                | ID                                                |\n  | --------------------------------------------------- | ------------------------------------------------- |\n  | [视频剪辑](https://top.aibase.com/discover/38-56)   | [38-56](https://rsshub.app/aibase/discover/38-56) |\n  | [生成视频](https://top.aibase.com/discover/38-57)   | [38-57](https://rsshub.app/aibase/discover/38-57) |\n  | [Ai动画制作](https://top.aibase.com/discover/38-58) | [38-58](https://rsshub.app/aibase/discover/38-58) |\n  | [字幕生成](https://top.aibase.com/discover/38-84)   | [38-84](https://rsshub.app/aibase/discover/38-84) |\n\n  #### 效率助手\n\n  | 分类                                                | ID                                                |\n  | --------------------------------------------------- | ------------------------------------------------- |\n  | [AI文档工具](https://top.aibase.com/discover/39-59) | [39-59](https://rsshub.app/aibase/discover/39-59) |\n  | [PPT](https://top.aibase.com/discover/39-60)        | [39-60](https://rsshub.app/aibase/discover/39-60) |\n  | [思维导图](https://top.aibase.com/discover/39-61)   | [39-61](https://rsshub.app/aibase/discover/39-61) |\n  | [表格处理](https://top.aibase.com/discover/39-62)   | [39-62](https://rsshub.app/aibase/discover/39-62) |\n  | [Ai办公助手](https://top.aibase.com/discover/39-63) | [39-63](https://rsshub.app/aibase/discover/39-63) |\n\n  #### 写作灵感\n\n  | 分类                                              | ID                                                |\n  | ------------------------------------------------- | ------------------------------------------------- |\n  | [文案写作](https://top.aibase.com/discover/40-64) | [40-64](https://rsshub.app/aibase/discover/40-64) |\n  | [论文写作](https://top.aibase.com/discover/40-88) | [40-88](https://rsshub.app/aibase/discover/40-88) |\n\n  #### 艺术灵感\n\n  | 分类                                                | ID                                                |\n  | --------------------------------------------------- | ------------------------------------------------- |\n  | [音乐创作](https://top.aibase.com/discover/41-65)   | [41-65](https://rsshub.app/aibase/discover/41-65) |\n  | [设计创作](https://top.aibase.com/discover/41-66)   | [41-66](https://rsshub.app/aibase/discover/41-66) |\n  | [Ai图标生成](https://top.aibase.com/discover/41-67) | [41-67](https://rsshub.app/aibase/discover/41-67) |\n\n  #### 趣味\n\n  | 分类                                                  | ID                                                |\n  | ----------------------------------------------------- | ------------------------------------------------- |\n  | [Ai名字生成器](https://top.aibase.com/discover/42-68) | [42-68](https://rsshub.app/aibase/discover/42-68) |\n  | [游戏娱乐](https://top.aibase.com/discover/42-71)     | [42-71](https://rsshub.app/aibase/discover/42-71) |\n  | [其他](https://top.aibase.com/discover/42-72)         | [42-72](https://rsshub.app/aibase/discover/42-72) |\n\n  #### 开发编程\n\n  | 分类                                                | ID                                                |\n  | --------------------------------------------------- | ------------------------------------------------- |\n  | [开发编程](https://top.aibase.com/discover/43-73)   | [43-73](https://rsshub.app/aibase/discover/43-73) |\n  | [Ai开放平台](https://top.aibase.com/discover/43-74) | [43-74](https://rsshub.app/aibase/discover/43-74) |\n  | [Ai算力平台](https://top.aibase.com/discover/43-75) | [43-75](https://rsshub.app/aibase/discover/43-75) |\n\n  #### 聊天机器人\n\n  | 分类                                              | ID                                                |\n  | ------------------------------------------------- | ------------------------------------------------- |\n  | [智能聊天](https://top.aibase.com/discover/44-76) | [44-76](https://rsshub.app/aibase/discover/44-76) |\n  | [智能客服](https://top.aibase.com/discover/44-77) | [44-77](https://rsshub.app/aibase/discover/44-77) |\n\n  #### 翻译\n\n  | 分类                                          | ID                                                |\n  | --------------------------------------------- | ------------------------------------------------- |\n  | [翻译](https://top.aibase.com/discover/46-79) | [46-79](https://rsshub.app/aibase/discover/46-79) |\n\n  #### 教育学习\n\n  | 分类                                              | ID                                                |\n  | ------------------------------------------------- | ------------------------------------------------- |\n  | [教育学习](https://top.aibase.com/discover/47-80) | [47-80](https://rsshub.app/aibase/discover/47-80) |\n\n  #### 智能营销\n\n  | 分类                                              | ID                                                |\n  | ------------------------------------------------- | ------------------------------------------------- |\n  | [智能营销](https://top.aibase.com/discover/48-81) | [48-81](https://rsshub.app/aibase/discover/48-81) |\n\n  #### 法律\n\n  | 分类                                            | ID                                                    |\n  | ----------------------------------------------- | ----------------------------------------------------- |\n  | [法律](https://top.aibase.com/discover/138-139) | [138-139](https://rsshub.app/aibase/discover/138-139) |\n  </details>\n    ","categories":["new-media","popular"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["top.aibase.com/discover/:id"]},{"title":"图像处理 - 图片背景移除","source":["top.aibase.com/discover/37-49"],"target":"/discover/37-49"},{"title":"图像处理 - 图片无损放大","source":["top.aibase.com/discover/37-50"],"target":"/discover/37-50"},{"title":"图像处理 - 图片AI修复","source":["top.aibase.com/discover/37-51"],"target":"/discover/37-51"},{"title":"图像处理 - 图像生成","source":["top.aibase.com/discover/37-52"],"target":"/discover/37-52"},{"title":"图像处理 - Ai图片拓展","source":["top.aibase.com/discover/37-53"],"target":"/discover/37-53"},{"title":"图像处理 - Ai漫画生成","source":["top.aibase.com/discover/37-54"],"target":"/discover/37-54"},{"title":"图像处理 - Ai生成写真","source":["top.aibase.com/discover/37-55"],"target":"/discover/37-55"},{"title":"图像处理 - 电商图片制作","source":["top.aibase.com/discover/37-83"],"target":"/discover/37-83"},{"title":"图像处理 - Ai图像转视频","source":["top.aibase.com/discover/37-86"],"target":"/discover/37-86"},{"title":"视频创作 - 视频剪辑","source":["top.aibase.com/discover/38-56"],"target":"/discover/38-56"},{"title":"视频创作 - 生成视频","source":["top.aibase.com/discover/38-57"],"target":"/discover/38-57"},{"title":"视频创作 - Ai动画制作","source":["top.aibase.com/discover/38-58"],"target":"/discover/38-58"},{"title":"视频创作 - 字幕生成","source":["top.aibase.com/discover/38-84"],"target":"/discover/38-84"},{"title":"效率助手 - AI文档工具","source":["top.aibase.com/discover/39-59"],"target":"/discover/39-59"},{"title":"效率助手 - PPT","source":["top.aibase.com/discover/39-60"],"target":"/discover/39-60"},{"title":"效率助手 - 思维导图","source":["top.aibase.com/discover/39-61"],"target":"/discover/39-61"},{"title":"效率助手 - 表格处理","source":["top.aibase.com/discover/39-62"],"target":"/discover/39-62"},{"title":"效率助手 - Ai办公助手","source":["top.aibase.com/discover/39-63"],"target":"/discover/39-63"},{"title":"写作灵感 - 文案写作","source":["top.aibase.com/discover/40-64"],"target":"/discover/40-64"},{"title":"写作灵感 - 论文写作","source":["top.aibase.com/discover/40-88"],"target":"/discover/40-88"},{"title":"艺术灵感 - 音乐创作","source":["top.aibase.com/discover/41-65"],"target":"/discover/41-65"},{"title":"艺术灵感 - 设计创作","source":["top.aibase.com/discover/41-66"],"target":"/discover/41-66"},{"title":"艺术灵感 - Ai图标生成","source":["top.aibase.com/discover/41-67"],"target":"/discover/41-67"},{"title":"趣味 - Ai名字生成器","source":["top.aibase.com/discover/42-68"],"target":"/discover/42-68"},{"title":"趣味 - 游戏娱乐","source":["top.aibase.com/discover/42-71"],"target":"/discover/42-71"},{"title":"趣味 - 其他","source":["top.aibase.com/discover/42-72"],"target":"/discover/42-72"},{"title":"开发编程 - 开发编程","source":["top.aibase.com/discover/43-73"],"target":"/discover/43-73"},{"title":"开发编程 - Ai开放平台","source":["top.aibase.com/discover/43-74"],"target":"/discover/43-74"},{"title":"开发编程 - Ai算力平台","source":["top.aibase.com/discover/43-75"],"target":"/discover/43-75"},{"title":"聊天机器人 - 智能聊天","source":["top.aibase.com/discover/44-76"],"target":"/discover/44-76"},{"title":"聊天机器人 - 智能客服","source":["top.aibase.com/discover/44-77"],"target":"/discover/44-77"},{"title":"翻译 - 翻译","source":["top.aibase.com/discover/46-79"],"target":"/discover/46-79"},{"title":"教育学习 - 教育学习","source":["top.aibase.com/discover/47-80"],"target":"/discover/47-80"},{"title":"智能营销 - 智能营销","source":["top.aibase.com/discover/48-81"],"target":"/discover/48-81"},{"title":"法律 - 法律","source":["top.aibase.com/discover/138-139"],"target":"/discover/138-139"}],"location":"discover.ts"}' :test='{"code":0}' />

::: tip
  若订阅 [图片背景移除](https://top.aibase.com/discover/37-49)，网址为 `https://top.aibase.com/discover/37-49`。截取 `https://top.aibase.com/discover/` 到末尾的部分 `37-49` 作为参数填入，此时路由为 [`/aibase/discover/37-49`](https://rsshub.app/aibase/discover/37-49)。
:::

  <details>
    <summary>更多分类</summary>

  #### 图像处理

  | 分类                                                  | ID                                                |
  | ----------------------------------------------------- | ------------------------------------------------- |
  | [图片背景移除](https://top.aibase.com/discover/37-49) | [37-49](https://rsshub.app/aibase/discover/37-49) |
  | [图片无损放大](https://top.aibase.com/discover/37-50) | [37-50](https://rsshub.app/aibase/discover/37-50) |
  | [图片AI修复](https://top.aibase.com/discover/37-51)   | [37-51](https://rsshub.app/aibase/discover/37-51) |
  | [图像生成](https://top.aibase.com/discover/37-52)     | [37-52](https://rsshub.app/aibase/discover/37-52) |
  | [Ai图片拓展](https://top.aibase.com/discover/37-53)   | [37-53](https://rsshub.app/aibase/discover/37-53) |
  | [Ai漫画生成](https://top.aibase.com/discover/37-54)   | [37-54](https://rsshub.app/aibase/discover/37-54) |
  | [Ai生成写真](https://top.aibase.com/discover/37-55)   | [37-55](https://rsshub.app/aibase/discover/37-55) |
  | [电商图片制作](https://top.aibase.com/discover/37-83) | [37-83](https://rsshub.app/aibase/discover/37-83) |
  | [Ai图像转视频](https://top.aibase.com/discover/37-86) | [37-86](https://rsshub.app/aibase/discover/37-86) |

  #### 视频创作

  | 分类                                                | ID                                                |
  | --------------------------------------------------- | ------------------------------------------------- |
  | [视频剪辑](https://top.aibase.com/discover/38-56)   | [38-56](https://rsshub.app/aibase/discover/38-56) |
  | [生成视频](https://top.aibase.com/discover/38-57)   | [38-57](https://rsshub.app/aibase/discover/38-57) |
  | [Ai动画制作](https://top.aibase.com/discover/38-58) | [38-58](https://rsshub.app/aibase/discover/38-58) |
  | [字幕生成](https://top.aibase.com/discover/38-84)   | [38-84](https://rsshub.app/aibase/discover/38-84) |

  #### 效率助手

  | 分类                                                | ID                                                |
  | --------------------------------------------------- | ------------------------------------------------- |
  | [AI文档工具](https://top.aibase.com/discover/39-59) | [39-59](https://rsshub.app/aibase/discover/39-59) |
  | [PPT](https://top.aibase.com/discover/39-60)        | [39-60](https://rsshub.app/aibase/discover/39-60) |
  | [思维导图](https://top.aibase.com/discover/39-61)   | [39-61](https://rsshub.app/aibase/discover/39-61) |
  | [表格处理](https://top.aibase.com/discover/39-62)   | [39-62](https://rsshub.app/aibase/discover/39-62) |
  | [Ai办公助手](https://top.aibase.com/discover/39-63) | [39-63](https://rsshub.app/aibase/discover/39-63) |

  #### 写作灵感

  | 分类                                              | ID                                                |
  | ------------------------------------------------- | ------------------------------------------------- |
  | [文案写作](https://top.aibase.com/discover/40-64) | [40-64](https://rsshub.app/aibase/discover/40-64) |
  | [论文写作](https://top.aibase.com/discover/40-88) | [40-88](https://rsshub.app/aibase/discover/40-88) |

  #### 艺术灵感

  | 分类                                                | ID                                                |
  | --------------------------------------------------- | ------------------------------------------------- |
  | [音乐创作](https://top.aibase.com/discover/41-65)   | [41-65](https://rsshub.app/aibase/discover/41-65) |
  | [设计创作](https://top.aibase.com/discover/41-66)   | [41-66](https://rsshub.app/aibase/discover/41-66) |
  | [Ai图标生成](https://top.aibase.com/discover/41-67) | [41-67](https://rsshub.app/aibase/discover/41-67) |

  #### 趣味

  | 分类                                                  | ID                                                |
  | ----------------------------------------------------- | ------------------------------------------------- |
  | [Ai名字生成器](https://top.aibase.com/discover/42-68) | [42-68](https://rsshub.app/aibase/discover/42-68) |
  | [游戏娱乐](https://top.aibase.com/discover/42-71)     | [42-71](https://rsshub.app/aibase/discover/42-71) |
  | [其他](https://top.aibase.com/discover/42-72)         | [42-72](https://rsshub.app/aibase/discover/42-72) |

  #### 开发编程

  | 分类                                                | ID                                                |
  | --------------------------------------------------- | ------------------------------------------------- |
  | [开发编程](https://top.aibase.com/discover/43-73)   | [43-73](https://rsshub.app/aibase/discover/43-73) |
  | [Ai开放平台](https://top.aibase.com/discover/43-74) | [43-74](https://rsshub.app/aibase/discover/43-74) |
  | [Ai算力平台](https://top.aibase.com/discover/43-75) | [43-75](https://rsshub.app/aibase/discover/43-75) |

  #### 聊天机器人

  | 分类                                              | ID                                                |
  | ------------------------------------------------- | ------------------------------------------------- |
  | [智能聊天](https://top.aibase.com/discover/44-76) | [44-76](https://rsshub.app/aibase/discover/44-76) |
  | [智能客服](https://top.aibase.com/discover/44-77) | [44-77](https://rsshub.app/aibase/discover/44-77) |

  #### 翻译

  | 分类                                          | ID                                                |
  | --------------------------------------------- | ------------------------------------------------- |
  | [翻译](https://top.aibase.com/discover/46-79) | [46-79](https://rsshub.app/aibase/discover/46-79) |

  #### 教育学习

  | 分类                                              | ID                                                |
  | ------------------------------------------------- | ------------------------------------------------- |
  | [教育学习](https://top.aibase.com/discover/47-80) | [47-80](https://rsshub.app/aibase/discover/47-80) |

  #### 智能营销

  | 分类                                              | ID                                                |
  | ------------------------------------------------- | ------------------------------------------------- |
  | [智能营销](https://top.aibase.com/discover/48-81) | [48-81](https://rsshub.app/aibase/discover/48-81) |

  #### 法律

  | 分类                                            | ID                                                    |
  | ----------------------------------------------- | ----------------------------------------------------- |
  | [法律](https://top.aibase.com/discover/138-139) | [138-139](https://rsshub.app/aibase/discover/138-139) |
  </details>
    

### 资讯 <Site url="www.aibase.com" size="sm" />

<Route namespace="aibase" :data='{"path":"/news","name":"资讯","url":"www.aibase.com","maintainers":["zreo0"],"example":"/aibase/news","description":"获取 AI 资讯列表","categories":["new-media","popular"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.aibase.com/zh/news"],"target":"/news"}],"location":"news.ts"}' :test='{"code":0}' />

获取 AI 资讯列表

## AInvest <Site url="ainvest.com"/>

### Latest News <Site url="ainvest.com/news" size="sm" />

<Route namespace="ainvest" :data='{"path":"/news","categories":["finance","popular"],"example":"/ainvest/news","parameters":{},"view":0,"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ainvest.com/news"]}],"name":"Latest News","maintainers":["TonyRL"],"url":"ainvest.com/news","location":"news.ts"}' :test='{"code":0}' />

## AP News <Site url="apnews.com"/>

### News <Site url="apnews.com" size="sm" />

<Route namespace="apnews" :data='{"path":"/api/:tags?","categories":["traditional-media","popular"],"example":"/apnews/api/apf-topnews","view":0,"parameters":{"tags":{"description":"Getting a list of articles from a public API based on tags.","options":[{"value":"apf-topnews","label":"Top News"},{"value":"apf-sports","label":"Sports"},{"value":"apf-politics","label":"Politics"},{"value":"apf-entertainment","label":"Entertainment"},{"value":"apf-usnews","label":"US News"},{"value":"apf-oddities","label":"Oddities"},{"value":"apf-Travel","label":"Travel"},{"value":"apf-technology","label":"Technology"},{"value":"apf-lifestyle","label":"Lifestyle"},{"value":"apf-business","label":"Business"},{"value":"apf-Health","label":"Health"},{"value":"apf-science","label":"Science"},{"value":"apf-intlnews","label":"International News"}],"default":"apf-topnews"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["apnews.com/"]}],"name":"News","maintainers":["dzx-dzx"],"location":"api.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 68)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

## Apple <Site url="apps.apple.com"/>

### App Update <Site url="apps.apple.com" size="sm" />

<Route namespace="apple" :data='{"path":"/apps/update/:country/:id/:platform?","categories":["program-update","popular"],"view":5,"example":"/apple/apps/update/us/id408709785","parameters":{"country":"App Store Country, obtain from the app URL, see below","id":"App id, obtain from the app URL","platform":{"description":"App Platform, see below, all by default","options":[{"value":"All","label":"all"},{"value":"iOS","label":"iOS"},{"value":"macOS","label":"macOS"},{"value":"tvOS","label":"tvOS"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["apps.apple.com/:country/app/:appSlug/:id","apps.apple.com/:country/app/:id"],"target":"/apps/update/:country/:id"}],"name":"App Update","maintainers":["EkkoG","nczitzk"],"description":"\n::: tip\n  For example, the URL of [GarageBand](https://apps.apple.com/us/app/messages/id408709785) in the App Store is `https://apps.apple.com/us/app/messages/id408709785`. In this case, the `App Store Country` parameter for the route is `us`, and the `App id` parameter is `id1146560473`. So the route should be [`/apple/apps/update/us/id408709785`](https://rsshub.app/apple/apps/update/us/id408709785).\n:::","location":"apps.ts"}' :test='{"code":0}' />


::: tip
  For example, the URL of [GarageBand](https://apps.apple.com/us/app/messages/id408709785) in the App Store is `https://apps.apple.com/us/app/messages/id408709785`. In this case, the `App Store Country` parameter for the route is `us`, and the `App id` parameter is `id1146560473`. So the route should be [`/apple/apps/update/us/id408709785`](https://rsshub.app/apple/apps/update/us/id408709785).
:::

## AppleInsider <Site url="appleinsider.com"/>

### Category <Site url="appleinsider.com" size="sm" />

<Route namespace="appleinsider" :data='{"path":"/:category?","categories":["new-media","popular"],"example":"/appleinsider","parameters":{"category":"Category, see below, News by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["appleinsider.com/:category","appleinsider.com/"],"target":"/:category"}],"name":"Category","maintainers":["nczitzk"],"description":"| News | Reviews | How-tos |\n  | ---- | ------- | ------- |\n  |      | reviews | how-to  |","location":"index.ts"}' :test='{"code":0}' />

| News | Reviews | How-tos |
  | ---- | ------- | ------- |
  |      | reviews | how-to  |

## Behance <Site url="www.behance.net"/>

### User Works <Site url="www.behance.net" size="sm" />

<Route namespace="behance" :data='{"path":"/:user/:type?","categories":["design","popular"],"view":2,"example":"/behance/mishapetrick","parameters":{"user":"username","type":{"description":"type","options":[{"value":"projects","label":"projects"},{"value":"appreciated","label":"appreciated"}],"default":"projects"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User Works","maintainers":["MisteryMonster"],"description":"Behance user&#39;s profile URL, like [https://www.behance.net/mishapetrick](https://www.behance.net/mishapetrick) the username will be `mishapetrick`。","location":"user.ts"}' :test='{"code":0}' />

Behance user's profile URL, like [https://www.behance.net/mishapetrick](https://www.behance.net/mishapetrick) the username will be `mishapetrick`。

## BigQuant <Site url="bigquant.com"/>

### 专题报告 <Site url="bigquant.com/" size="sm" />

<Route namespace="bigquant" :data='{"path":"/collections","categories":["finance","popular"],"view":0,"example":"/bigquant/collections","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["bigquant.com/"]}],"name":"专题报告","maintainers":["nczitzk"],"url":"bigquant.com/","location":"collections.ts"}' :test='{"code":0}' />

## Binance <Site url="binance.com"/>

### Announcement <Site url="binance.com" size="sm" />

<Route namespace="binance" :data='{"path":"/announcement/:type","categories":["finance","popular"],"view":0,"example":"/binance/announcement/new-cryptocurrency-listing","parameters":{"type":{"description":"Binance Announcement type","default":"new-cryptocurrency-listing","options":[{"value":"new-cryptocurrency-listing","label":"New Cryptocurrency Listing"},{"value":"latest-binance-news","label":"Latest Binance News"},{"value":"latest-activities","label":"Latest Activities"},{"value":"new-fiat-listings","label":"New Fiat Listings"},{"value":"api-updates","label":"API Updates"},{"value":"crypto-airdrop","label":"Crypto Airdrop"},{"value":"wallet-maintenance-updates","label":"Wallet Maintenance Updates"},{"value":"delisting","label":"Delisting"}]}},"name":"Announcement","description":"\nType category\n\n - new-cryptocurrency-listing => New Cryptocurrency Listing\n - latest-binance-news        => Latest Binance News\n - latest-activities          => Latest Activities\n - new-fiat-listings          => New Fiat Listings\n - api-updates                => API Updates\n - crypto-airdrop             => Crypto Airdrop\n - wallet-maintenance-updates => Wallet Maintenance Updates\n - delisting                  => Delisting\n","maintainers":["enpitsulin"],"location":"announcement.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 159)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />


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

<Route namespace="bitget" :data='{"path":"/announcement/:type/:lang?","categories":["finance","popular"],"view":0,"example":"/bitget/announcement/all/zh-CN","parameters":{"type":{"description":"Bitget 通知类型","default":"all","options":[{"value":"all","label":"全部通知"},{"value":"new-listing","label":"新币上线"},{"value":"latest-activities","label":"最新活动"},{"value":"new-announcement","label":"最新公告"}]},"lang":{"description":"语言","default":"zh-CN","options":[{"value":"zh-CN","label":"中文"},{"value":"en-US","label":"English"},{"value":"es-ES","label":"Español"},{"value":"fr-FR","label":"Français"},{"value":"de-DE","label":"Deutsch"},{"value":"ja-JP","label":"日本語"},{"value":"ru-RU","label":"Русский"},{"value":"ar-SA","label":"العربية"}]}},"radar":[{"source":["www.bitget.com/:lang/inmail"],"target":"/announcement/all/:lang"}],"name":"Announcement","description":"\ntype:\n| Type | Description |\n| --- | --- |\n| all | 全部通知 |\n| new-listing | 新币上线 |\n| latest-activities | 最新活动 |\n| new-announcement | 最新公告 |\n\nlang:\n| Lang | Description |\n| ---   | ---   |\n| zh-CN | 中文 |\n| en-US | English |\n| es-ES | Español |\n| fr-FR | Français |\n| de-DE | Deutsch |\n| ja-JP | 日本語 |\n| ru-RU | Русский |\n| ar-SA | العربية |\n","maintainers":["YukiCoco"],"location":"announcement.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 171)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />


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

<Route namespace="bloomberg" :data='{"path":"/authors/:id/:slug/:source?","categories":["finance","popular"],"view":0,"example":"/bloomberg/authors/ARbTQlRLRjE/matthew-s-levine","parameters":{"id":"Author ID, can be found in URL","slug":"Author Slug, can be found in URL","source":"Data source, either `api` or `rss`,`api` by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.bloomberg.com/*/authors/:id/:slug","www.bloomberg.com/authors/:id/:slug"],"target":"/authors/:id/:slug"}],"name":"Authors","maintainers":["josh","pseudoyu"],"location":"authors.ts"}' :test='{"code":0}' />

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

## Cara <Site url="cara.app"/>

### Likes <Site url="cara.app" size="sm" />

<Route namespace="cara" :data='{"path":["/likes/:user"],"categories":["social-media","popular"],"example":"/cara/likes/fengz","parameters":{"user":"username"},"name":"Likes","maintainers":["KarasuShin"],"radar":[{"source":["cara.app/:user","cara.app/:user/*"],"target":"/likes/:user"}],"location":"likes.ts"}' :test='{"code":0}' />

### Portfolio <Site url="cara.app" size="sm" />

<Route namespace="cara" :data='{"path":["/portfolio/:user"],"categories":["social-media","popular"],"example":"/cara/portfolio/fengz","parameters":{"user":"username"},"name":"Portfolio","maintainers":["KarasuShin"],"radar":[{"source":["cara.app/:user","cara.app/:user/*"],"target":"/portfolio/:user"}],"location":"portfolio.ts"}' :test='{"code":0}' />

### Timeline <Site url="cara.app" size="sm" />

<Route namespace="cara" :data='{"path":["/timeline/:user"],"categories":["social-media","popular"],"example":"/cara/timeline/fengz","parameters":{"user":"username"},"name":"Timeline","maintainers":["KarasuShin"],"radar":[{"source":["cara.app/:user","cara.app/:user/*"],"target":"/timeline/:user"}],"location":"timeline.ts"}' :test='{"code":0}' />

## Chub <Site url="chub.ai"/>

### Characters <Site url="chub.ai" size="sm" />

<Route namespace="chub" :data='{"path":"/characters","categories":["new-media","popular"],"example":"/chub/characters","name":"Characters","maintainers":["flameleaf"],"location":"characters.ts"}' :test='{"code":0}' />

## cnBeta.COM <Site url="cnbeta.com.tw"/>

### 分类 <Site url="cnbeta.com.tw" size="sm" />

<Route namespace="cnbeta" :data='{"name":"分类","path":["/category/:id"],"example":"/cnbeta/category/movie","maintainers":["nczitzk"],"parameters":{"id":"分类 id，可在对应分类页的 URL 中找到"},"radar":[{"source":["cnbeta.com.tw/category/:id"]}],"url":"cnbeta.com.tw","description":"| 影视  | 音乐  | 游戏 | 动漫  | 趣闻  | 科学    | 软件 |\n  | ----- | ----- | ---- | ----- | ----- | ------- | ---- |\n  | movie | music | game | comic | funny | science | soft |","location":"category.ts"}' :test='{"code":0}' />

| 影视  | 音乐  | 游戏 | 动漫  | 趣闻  | 科学    | 软件 |
  | ----- | ----- | ---- | ----- | ----- | ------- | ---- |
  | movie | music | game | comic | funny | science | soft |

### 头条资讯 <Site url="cnbeta.com.tw" size="sm" />

<Route namespace="cnbeta" :data='{"name":"头条资讯","path":["/"],"example":"/cnbeta","radar":[{"source":["cnbeta.com.tw/"]}],"maintainers":["kt286","HaitianLiu","nczitzk"],"url":"cnbeta.com.tw","location":"index.ts"}' :test='{"code":0}' />

### 主题 <Site url="cnbeta.com.tw" size="sm" />

<Route namespace="cnbeta" :data='{"name":"主题","path":["/topics/:id"],"example":"/cnbeta/topics/453","maintainers":["cczhong11","nczitzk"],"parameters":{"id":"主题 id，可在对应主题页的 URL 中找到"},"radar":[{"source":["cnbeta.com.tw/topics/:id"]}],"url":"cnbeta.com.tw","description":"::: tip\n完整的主题列表参见 [主题列表](https://www.cnbeta.com.tw/topics.htm)\n:::","location":"topics.ts"}' :test='{"code":0}' />

::: tip
完整的主题列表参见 [主题列表](https://www.cnbeta.com.tw/topics.htm)
:::

## CnGal <Site url="www.cngal.org"/>

### 每周速报 <Site url="www.cngal.org/" size="sm" />

<Route namespace="cngal" :data='{"path":"/weekly","categories":["anime","popular"],"view":0,"example":"/cngal/weekly","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.cngal.org/","www.cngal.org/weeklynews"]}],"name":"每周速报","maintainers":["chengyuhui"],"url":"www.cngal.org/","location":"weekly.ts"}' :test='{"code":0}' />

## DCFever <Site url="dcfever.com"/>

### 測試報告 <Site url="dcfever.com" size="sm" />

<Route namespace="dcfever" :data='{"path":"/reviews/:type?","categories":["new-media","popular"],"example":"/dcfever/reviews/cameras","parameters":{"type":"分類，預設為 `cameras`"},"radar":[{"source":["dcfever.com/:type/reviews.php"],"target":"/reviews/:type"}],"name":"測試報告","maintainers":["TonyRL"],"description":"| 相機及鏡頭 | 手機平板 | 試車報告 |\n  | ---------- | -------- | -------- |\n  | cameras    | phones   | cars     |","location":"reviews.ts"}' :test='{"code":1,"message":"AssertionError: expected [ …(5) ] to not include &#39;https://www.dcfever.com/news/readnews…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:1143:17)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:920:17)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@5.1.2/node_modules/chai/chai.js:1610:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 426)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)"}' />

| 相機及鏡頭 | 手機平板 | 試車報告 |
  | ---------- | -------- | -------- |
  | cameras    | phones   | cars     |

### 二手市集 - 物品搜尋 <Site url="dcfever.com" size="sm" />

<Route namespace="dcfever" :data='{"path":"/trading/search/:keyword/:mainCat?","categories":["new-media","popular"],"example":"/dcfever/trading/search/Sony","parameters":{"keyword":"關鍵字","mainCat":"主要分類 ID，見上表"},"name":"二手市集 - 物品搜尋","maintainers":["TonyRL"],"location":"trading-search.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 427)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### 二手市集 <Site url="dcfever.com" size="sm" />

<Route namespace="dcfever" :data='{"path":"/trading/:id","categories":["new-media","popular"],"example":"/dcfever/trading/1","parameters":{"id":"分類 ID，見下表"},"name":"二手市集","maintainers":["TonyRL"],"description":"[所有物品分類](https://www.dcfever.com/trading/index.php#all_cats)\n\n  | 攝影產品 | 電腦 | 手機通訊 | 影音產品 | 遊戲機、模型 | 電器傢俱 | 潮流服飾 | 手錶 | 單車及運動 | 其它 |\n  | -------- | ---- | -------- | -------- | ------------ | -------- | -------- | ---- | ---------- | ---- |\n  | 1        | 2    | 3        | 44       | 43           | 104      | 45       | 99   | 109        | 4    |","location":"trading.ts"}' :test='{"code":0}' />

[所有物品分類](https://www.dcfever.com/trading/index.php#all_cats)

  | 攝影產品 | 電腦 | 手機通訊 | 影音產品 | 遊戲機、模型 | 電器傢俱 | 潮流服飾 | 手錶 | 單車及運動 | 其它 |
  | -------- | ---- | -------- | -------- | ------------ | -------- | -------- | ---- | ---------- | ---- |
  | 1        | 2    | 3        | 44       | 43           | 104      | 45       | 99   | 109        | 4    |

### 新聞中心 <Site url="dcfever.com" size="sm" />

<Route namespace="dcfever" :data='{"path":"/news/:type?","categories":["new-media","popular"],"example":"/dcfever/news","parameters":{"type":"分類，預設為所有新聞"},"name":"新聞中心","maintainers":["TonyRL"],"radar":[{"source":["dcfever.com/news/index.php"],"target":"/news"}],"description":"| 所有新聞 | 攝影器材 | 手機通訊 | 汽車熱話 | 攝影文化    | 影片攝錄    | 測試報告 | 生活科技 | 攝影技巧  |\n  | -------- | -------- | -------- | -------- | ----------- | ----------- | -------- | -------- | --------- |\n  |          | camera   | mobile   | auto     | photography | videography | reviews  | gadget   | technique |","location":"news.ts"}' :test='{"code":0}' />

| 所有新聞 | 攝影器材 | 手機通訊 | 汽車熱話 | 攝影文化    | 影片攝錄    | 測試報告 | 生活科技 | 攝影技巧  |
  | -------- | -------- | -------- | -------- | ----------- | ----------- | -------- | -------- | --------- |
  |          | camera   | mobile   | auto     | photography | videography | reviews  | gadget   | technique |

## DeepMind <Site url="deepmind.com"/>

### Blog <Site url="deepmind.com/blog" size="sm" />

<Route namespace="deepmind" :data='{"path":"/blog","categories":["new-media","popular"],"example":"/deepmind/blog","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["deepmind.com/blog","deepmind.com/"]}],"name":"Blog","maintainers":["nczitzk","TonyRL"],"url":"deepmind.com/blog","location":"blog.ts"}' :test='{"code":0}' />

## Digital Camera World <Site url="digitalcameraworld.com"/>

### News <Site url="digitalcameraworld.com" size="sm" />

<Route namespace="digitalcameraworld" :data='{"path":"/news","categories":["new-media","popular"],"example":"/digitalcameraworld/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["digitalcameraworld.com/"]}],"name":"News","maintainers":["EthanWng97"],"location":"news.ts"}' :test='{"code":0}' />

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

## DN.com <Site url="dn.com"/>

### News <Site url="dn.com" size="sm" />

<Route namespace="dn" :data='{"path":"/:language/news/:category?","categories":["new-media","popular"],"example":"/dn/en-us/news","parameters":{"language":"Language, see below","category":"Category, see below, The Latest by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"News","maintainers":["nczitzk"],"description":"#### Language\n\n  | English | 中文  |\n  | ------- | ----- |\n  | en-us   | zh-cn |\n\n  #### Category\n\n  | English Category     | 中文分类 | Category id |\n  | -------------------- | -------- | ----------- |\n  | The Latest           | 最新     |             |\n  | Industry Information | 行业资讯 | category-1  |\n  | Knowledge            | 域名知识 | category-2  |\n  | Investment           | 域名投资 | category-3  |","location":"news.ts"}' :test='{"code":0}' />

#### Language

  | English | 中文  |
  | ------- | ----- |
  | en-us   | zh-cn |

  #### Category

  | English Category     | 中文分类 | Category id |
  | -------------------- | -------- | ----------- |
  | The Latest           | 最新     |             |
  | Industry Information | 行业资讯 | category-1  |
  | Knowledge            | 域名知识 | category-2  |
  | Investment           | 域名投资 | category-3  |

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

## FastBull <Site url="fastbull.com"/>

### News Flash <Site url="fastbull.com/express-news" size="sm" />

<Route namespace="fastbull" :data='{"path":"/express-news","categories":["finance","popular"],"view":0,"example":"/fastbull/express-news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["fastbull.com/express-news","fastbull.com/"]}],"name":"News Flash","maintainers":["nczitzk"],"url":"fastbull.com/express-news","location":"express-news.ts"}' :test='{"code":1,"message":"AssertionError: expected [ Array(1) ] to not include &#39;https://www.fastbull.com/fastshort/32…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:1143:17)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:920:17)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@5.1.2/node_modules/chai/chai.js:1610:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 580)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)"}' />

### News <Site url="fastbull.com/news" size="sm" />

<Route namespace="fastbull" :data='{"path":"/news","categories":["finance","popular"],"view":0,"example":"/fastbull/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["fastbull.com/cn/news","fastbull.com/cn"]}],"name":"News","maintainers":["nczitzk"],"url":"fastbull.com/news","location":"news.ts"}' :test='{"code":0}' />

## Fediverse <Site url="fediverse.observer"/>

### Timeline <Site url="fediverse.observer" size="sm" />

<Route namespace="fediverse" :data='{"path":"/timeline/:account","categories":["social-media","popular"],"view":1,"example":"/fediverse/timeline/Mastodon@mastodon.social","parameters":{"account":"username@domain"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Timeline","maintainers":["DIYgod","pseudoyu"],"location":"timeline.ts"}' :test='{"code":0}' />

## finviz <Site url="finviz.com"/>

### News <Site url="finviz.com/news.ashx" size="sm" />

<Route namespace="finviz" :data='{"path":"/:category?","categories":["finance","popular"],"view":0,"example":"/finviz","parameters":{"category":{"description":"Category, see below, News by default","options":[{"value":"news","label":"news"},{"value":"blogs","label":"blogs"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["finviz.com/news.ashx","finviz.com/"]}],"name":"News","maintainers":["nczitzk"],"url":"finviz.com/news.ashx","description":"| News | Blogs |\n  | ---- | ---- |\n  | news | blogs |","location":"news.ts"}' :test='{"code":1,"message":"AssertionError: expected NaN to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 593)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)"}' />

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

## Foresight News <Site url="foresightnews.pro"/>

### 精选资讯 <Site url="foresightnews.pro/" size="sm" />

<Route namespace="foresightnews" :data='{"path":"/","categories":["new-media","popular"],"example":"/foresightnews","radar":[{"source":["foresightnews.pro/"],"target":""}],"name":"精选资讯","maintainers":["nczitzk"],"url":"foresightnews.pro/","location":"index.ts"}' :test='{"code":0}' />

### 快讯 <Site url="foresightnews.pro/news" size="sm" />

<Route namespace="foresightnews" :data='{"path":"/news","categories":["new-media","popular"],"example":"/foresightnews/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["foresightnews.pro/news","foresightnews.pro/"]}],"name":"快讯","maintainers":["nczitzk"],"url":"foresightnews.pro/news","location":"news.ts"}' :test='{"code":0}' />

### 文章 <Site url="foresightnews.pro/" size="sm" />

<Route namespace="foresightnews" :data='{"path":"/article","categories":["new-media","popular"],"example":"/foresightnews/article","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["foresightnews.pro/"]}],"name":"文章","maintainers":["nczitzk"],"url":"foresightnews.pro/","location":"article.ts"}' :test='{"code":0}' />

### 专栏 <Site url="foresightnews.pro/" size="sm" />

<Route namespace="foresightnews" :data='{"path":"/column/:id","categories":["new-media","popular"],"example":"/foresightnews/column/1","parameters":{"id":"专栏 id, 可在对应专栏页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["foresightnews.pro/column/detail/:id","foresightnews.pro/"]}],"name":"专栏","maintainers":["nczitzk"],"url":"foresightnews.pro/","location":"column.ts"}' :test='{"code":0}' />

## Follow The Money <Site url="www.ftm.eu"/>

### 文章 <Site url="www.ftm.eu" size="sm" />

<Route namespace="ftm" :data='{"path":"/","categories":["new-media","popular"],"example":"/ftm","parameters":{},"name":"文章","maintainers":["dzx-dzx"],"radar":[{"source":["www.ftm.eu"]}],"location":"index.ts"}' :test='{"code":0}' />

## Furaffinity <Site url="furaffinity.net"/>

### Browse <Site url="furaffinity.net" size="sm" />

<Route namespace="furaffinity" :data='{"path":"/browse/:mode?","name":"Browse","url":"furaffinity.net","categories":["social-media","popular"],"example":"/furaffinity/browse/nsfw","maintainers":["TigerCubDen","SkyNetX007"],"parameters":{"mode":"R18 content toggle, default value is sfw, options are sfw, nsfw"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["furaffinity.net"],"target":"/browse"}],"location":"browse.ts"}' :test='{"code":0}' />

### Home <Site url="furaffinity.net" size="sm" />

<Route namespace="furaffinity" :data='{"path":"/home/:category/:mode?","name":"Home","url":"furaffinity.net","categories":["social-media","popular"],"example":"/furaffinity/home/nsfw","maintainers":["TigerCubDen","SkyNetX007"],"parameters":{"category":"Category, default value is artwork, options are artwork, writing, music, crafts","mode":"R18 content toggle, default value is sfw, options are sfw, nsfw"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["furaffinity.net"],"target":"/"}],"location":"home.ts"}' :test='{"code":0}' />

### Journals <Site url="furaffinity.net" size="sm" />

<Route namespace="furaffinity" :data='{"path":"/journals/:username","name":"Journals","url":"furaffinity.net","categories":["social-media","popular"],"example":"/furaffinity/journals/fender","maintainers":["TigerCubDen","SkyNetX007"],"parameters":{"username":"Username, can find in userpage"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["furaffinity.net/journals/:username"],"target":"/journals/:username"}],"location":"journals.ts"}' :test='{"code":0}' />

### Search <Site url="furaffinity.net" size="sm" />

<Route namespace="furaffinity" :data='{"path":"/search/:query/:mode?/:routeParams?","name":"Search","url":"furaffinity.net","categories":["social-media","popular"],"example":"/furaffinity/search/protogen/nsfw","maintainers":["TigerCubDen","SkyNetX007"],"parameters":{"query":"Query value","mode":"R18 content toggle, default value is sfw, options are sfw, nsfw","routeParams":"Additional search parameters"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["furaffinity.net"],"target":"/search"}],"description":"Additional search parameters\n| Parameter       | Description          | Default   | Options                                                        |\n|-----------------|----------------------|-----------|----------------------------------------------------------------|\n| order_by        | Sort by              | relevancy | relevancy, date, popularity                                    |\n| order_direction | Sort order           | desc      | desc, asc                                                      |\n| range           | Date range           | all       | all, 1day, 3days, 7days, 30days, 90days, 1year, 3years, 5years |\n| pattern         | Query match pattern  | extended  | all, any, extended                                             |\n| type            | Category of artworks | all       | art, flash, photo, music, story, poetry                        |\n","location":"search.ts"}' :test='{"code":0}' />

Additional search parameters
| Parameter       | Description          | Default   | Options                                                        |
|-----------------|----------------------|-----------|----------------------------------------------------------------|
| order_by        | Sort by              | relevancy | relevancy, date, popularity                                    |
| order_direction | Sort order           | desc      | desc, asc                                                      |
| range           | Date range           | all       | all, 1day, 3days, 7days, 30days, 90days, 1year, 3years, 5years |
| pattern         | Query match pattern  | extended  | all, any, extended                                             |
| type            | Category of artworks | all       | art, flash, photo, music, story, poetry                        |


### Shouts <Site url="furaffinity.net" size="sm" />

<Route namespace="furaffinity" :data='{"path":"/shouts/:username","name":"Shouts","url":"furaffinity.net","categories":["social-media","popular"],"example":"/furaffinity/shouts/fender","maintainers":["TigerCubDen","SkyNetX007"],"parameters":{"username":"Username, can find in userpage"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["furaffinity.net/user/:username"],"target":"/shouts/:username"}],"location":"shouts.ts"}' :test='{"code":0}' />

### Status <Site url="furaffinity.net" size="sm" />

<Route namespace="furaffinity" :data='{"path":"/status","name":"Status","url":"furaffinity.net","categories":["social-media","popular"],"example":"/furaffinity/status","maintainers":["TigerCubDen","SkyNetX007"],"parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["furaffinity.net"],"target":"/"}],"location":"status.ts"}' :test='{"code":0}' />

## GETTR <Site url="gettr.com"/>

### User timeline <Site url="gettr.com" size="sm" />

<Route namespace="gettr" :data='{"path":"/user/:id","categories":["social-media","popular"],"view":1,"example":"/gettr/user/jasonmillerindc","parameters":{"id":"User id"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gettr.com/user/:id"]}],"name":"User timeline","maintainers":["TonyRL"],"location":"user.ts"}' :test='{"code":0}' />

## GitHub <Site url="github.com"/>

::: tip
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

### News <Site url="www.google.com" size="sm" />

<Route namespace="google" :data='{"path":"/news/:category/:locale","categories":["new-media","popular"],"example":"/google/news/Top stories/hl=en-US&gl=US&ceid=US:en","parameters":{"category":"Category Title","locale":"locales, could be found behind `?`, including `hl`, `gl`, and `ceid` as parameters"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"News","maintainers":["zoenglinghou","pseudoyu"],"location":"news.ts"}' :test='{"code":0}' />

### Scholar Author Citations <Site url="www.google.com" size="sm" />

<Route namespace="google" :data='{"path":"/citations/:id","categories":["journal","popular"],"example":"/google/citations/mlmE4JMAAAAJ","parameters":{"id":"N"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Scholar Author Citations","maintainers":["KellyHwong","const7"],"description":"The parameter id in the route is the id in the URL of the user&#39;s Google Scholar reference page, for example `https://scholar.google.com/citations?user=mlmE4JMAAAAJ` to `mlmE4JMAAAAJ`.\n\n  Query parameters are also supported here, for example `https://scholar.google.com/citations?user=mlmE4JMAAAAJ&sortby=pubdate` to `mlmE4JMAAAAJ&sortby=pubdate`. Please make sure that the user id (`mlmE4JMAAAAJ` in this case) should be the first parameter in the query string.","location":"citations.ts"}' :test='{"code":0}' />

The parameter id in the route is the id in the URL of the user's Google Scholar reference page, for example `https://scholar.google.com/citations?user=mlmE4JMAAAAJ` to `mlmE4JMAAAAJ`.

  Query parameters are also supported here, for example `https://scholar.google.com/citations?user=mlmE4JMAAAAJ&sortby=pubdate` to `mlmE4JMAAAAJ&sortby=pubdate`. Please make sure that the user id (`mlmE4JMAAAAJ` in this case) should be the first parameter in the query string.

### Scholar Keywords Monitoring <Site url="www.google.com" size="sm" />

<Route namespace="google" :data='{"path":"/scholar/:query","categories":["journal","popular"],"example":"/google/scholar/data+visualization","parameters":{"query":"query statement which supports「Basic」and「Advanced」modes"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Scholar Keywords Monitoring","maintainers":["HenryQW"],"description":"::: warning\n  Google Scholar has strict anti-crawling mechanism implemented, the demo below doesn&#39;t guarantee availability. Please deploy your own instance as it might increase the stability.\n:::\n\n  1.  Basic mode, sample query is the keywords desired, eg.「data visualization」, [https://rsshub.app/google/scholar/data+visualization](https://rsshub.app/google/scholar/data+visualization).\n\n  2.  Advanced mode, visit [Google Scholar](https://scholar.google.com/schhp?hl=en&as_sdt=0,5), click the top left corner and select「Advanced Search」, fill in your conditions and submit the search. The URL should look like this: [https://scholar.google.com/scholar?as_q=data+visualization&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=&as_publication=&as_ylo=2018&as_yhi=&hl=en&as_sdt=0%2C5](https://scholar.google.com/scholar?as_q=data+visualization&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=&as_publication=&as_ylo=2018&as_yhi=&hl=en&as_sdt=0%2C5), copy everything after `https://scholar.google.com/scholar?` from the URL and use it as the query for this route. The complete URL for the above example should look like this: [https://rsshub.app/google/scholar/as_q=data+visualization&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=&as_publication=&as_ylo=2018&as_yhi=&hl=en&as_sdt=0%2C5](https://rsshub.app/google/scholar/as_q=data+visualization&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=&as_publication=&as_ylo=2018&as_yhi=&hl=en&as_sdt=0%2C5).","location":"scholar.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 716)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

::: warning
  Google Scholar has strict anti-crawling mechanism implemented, the demo below doesn't guarantee availability. Please deploy your own instance as it might increase the stability.
:::

  1.  Basic mode, sample query is the keywords desired, eg.「data visualization」, [https://rsshub.app/google/scholar/data+visualization](https://rsshub.app/google/scholar/data+visualization).

  2.  Advanced mode, visit [Google Scholar](https://scholar.google.com/schhp?hl=en&as_sdt=0,5), click the top left corner and select「Advanced Search」, fill in your conditions and submit the search. The URL should look like this: [https://scholar.google.com/scholar?as_q=data+visualization&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=&as_publication=&as_ylo=2018&as_yhi=&hl=en&as_sdt=0%2C5](https://scholar.google.com/scholar?as_q=data+visualization&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=&as_publication=&as_ylo=2018&as_yhi=&hl=en&as_sdt=0%2C5), copy everything after `https://scholar.google.com/scholar?` from the URL and use it as the query for this route. The complete URL for the above example should look like this: [https://rsshub.app/google/scholar/as_q=data+visualization&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=&as_publication=&as_ylo=2018&as_yhi=&hl=en&as_sdt=0%2C5](https://rsshub.app/google/scholar/as_q=data+visualization&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=&as_publication=&as_ylo=2018&as_yhi=&hl=en&as_sdt=0%2C5).

### Update <Site url="www.google.com" size="sm" />

<Route namespace="google" :data='{"path":"/doodles/:language?","categories":["picture","popular"],"view":2,"example":"/google/doodles/zh-CN","parameters":{"language":"Language, default to `zh-CN`, for other language values, you can get it from [Google Doodles official website](https://www.google.com/doodles)"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Update","maintainers":["xyqfer"],"location":"doodles.ts"}' :test='{"code":0}' />

## GQ <Site url="gq.com"/>

### News <Site url="gq.com" size="sm" />

<Route namespace="gq" :data='{"path":"/news","categories":["traditional-media","popular"],"view":0,"example":"/gq/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gq.com/"]}],"name":"News","maintainers":["EthanWng97"],"location":"news.ts"}' :test='{"code":0}' />

## Grist <Site url="grist.org"/>

### Featured <Site url="grist.org/" size="sm" />

<Route namespace="grist" :data='{"path":"/featured","categories":["new-media","popular"],"example":"/grist/featured","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["grist.org/"]}],"name":"Featured","maintainers":["Rjnishant530"],"url":"grist.org/","location":"featured.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 808)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### Latest Articles <Site url="grist.org/articles/" size="sm" />

<Route namespace="grist" :data='{"path":"/","radar":[{"source":["grist.org/articles/"]}],"name":"Latest Articles","maintainers":["Rjnishant530"],"categories":["new-media","popular"],"example":"/grist","parameters":{},"url":"grist.org/articles/","location":"index.ts"}' :test='{"code":0}' />

### Series <Site url="grist.org/articles/" size="sm" />

<Route namespace="grist" :data='{"path":"/series/:series","categories":["new-media","popular"],"example":"/grist/series/best-of-grist","parameters":{"series":"Find in the URL which has /series/"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["grist.org/series/:series"]}],"name":"Series","maintainers":["Rjnishant530"],"url":"grist.org/articles/","location":"series.ts"}' :test='{"code":0}' />

### Topic <Site url="grist.org/articles/" size="sm" />

<Route namespace="grist" :data='{"path":"/topic/:topic","categories":["new-media","popular"],"example":"/grist/topic/extreme-heat","parameters":{"topic":"Any Topic from Table below"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["grist.org/:topic"]}],"name":"Topic","maintainers":["Rjnishant530"],"url":"grist.org/articles/","description":"Topics\n\n  | Topic Name               | Topic Link         |\n  | ------------------------ | ------------------ |\n  | Accountability           | accountability     |\n  | Agriculture              | agriculture        |\n  | Ask Umbra                | ask-umbra-series   |\n  | Buildings                | buildings          |\n  | Cities                   | cities             |\n  | Climate & Energy         | climate-energy     |\n  | Climate Fiction          | climate-fiction    |\n  | Climate of Courage       | climate-of-courage |\n  | COP26                    | cop26              |\n  | COP27                    | cop27              |\n  | Culture                  | culture            |\n  | Economics                | economics          |\n  | Energy                   | energy             |\n  | Equity                   | equity             |\n  | Extreme Weather          | extreme-weather    |\n  | Fix                      | fix                |\n  | Food                     | food               |\n  | Grist                    | grist              |\n  | Grist News               | grist-news         |\n  | Health                   | health             |\n  | Housing                  | housing            |\n  | Indigenous Affairs       | indigenous         |\n  | International            | international      |\n  | Labor                    | labor              |\n  | Language                 | language           |\n  | Migration                | migration          |\n  | Opinion                  | opinion            |\n  | Politics                 | politics           |\n  | Protest                  | protest            |\n  | Race                     | race               |\n  | Regulation               | regulation         |\n  | Science                  | science            |\n  | Shift Happens Newsletter | shift-happens      |\n  | Solutions                | solutions          |\n  | Spanish                  | spanish            |\n  | Sponsored                | sponsored          |\n  | Technology               | technology         |\n  | Temperature Check        | temperature-check  |\n  | Uncategorized            | article            |\n  | Updates                  | updates            |\n  | Video                    | video              |","location":"topic.ts"}' :test='{"code":0}' />

Topics

  | Topic Name               | Topic Link         |
  | ------------------------ | ------------------ |
  | Accountability           | accountability     |
  | Agriculture              | agriculture        |
  | Ask Umbra                | ask-umbra-series   |
  | Buildings                | buildings          |
  | Cities                   | cities             |
  | Climate & Energy         | climate-energy     |
  | Climate Fiction          | climate-fiction    |
  | Climate of Courage       | climate-of-courage |
  | COP26                    | cop26              |
  | COP27                    | cop27              |
  | Culture                  | culture            |
  | Economics                | economics          |
  | Energy                   | energy             |
  | Equity                   | equity             |
  | Extreme Weather          | extreme-weather    |
  | Fix                      | fix                |
  | Food                     | food               |
  | Grist                    | grist              |
  | Grist News               | grist-news         |
  | Health                   | health             |
  | Housing                  | housing            |
  | Indigenous Affairs       | indigenous         |
  | International            | international      |
  | Labor                    | labor              |
  | Language                 | language           |
  | Migration                | migration          |
  | Opinion                  | opinion            |
  | Politics                 | politics           |
  | Protest                  | protest            |
  | Race                     | race               |
  | Regulation               | regulation         |
  | Science                  | science            |
  | Shift Happens Newsletter | shift-happens      |
  | Solutions                | solutions          |
  | Spanish                  | spanish            |
  | Sponsored                | sponsored          |
  | Technology               | technology         |
  | Temperature Check        | temperature-check  |
  | Uncategorized            | article            |
  | Updates                  | updates            |
  | Video                    | video              |

## Hacker News <Site url="ycombinator.com"/>

### User <Site url="ycombinator.com" size="sm" />

<Route namespace="hackernews" :data='{"path":"/:section?/:type?/:user?","categories":["programming","popular"],"view":0,"example":"/hackernews/threads/comments_list/dang","parameters":{"section":{"description":"Content section, default to `index`"},"type":{"description":"Link type, default to `sources`"},"user":{"description":"Set user, only valid in `threads` and `submitted` sections"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["news.ycombinator.com/:section","news.ycombinator.com/"]}],"name":"User","maintainers":["nczitzk","xie-dongping"],"description":"Subscribe to the content of a specific user","location":"index.ts"}' :test='{"code":1,"message":"AssertionError: expected NaN to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 832)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)"}' />

Subscribe to the content of a specific user

## Harvard Health Publishing <Site url="www.health.harvard.edu"/>

### Health Blog <Site url="www.health.harvard.edu/blog" size="sm" />

<Route namespace="harvard" :data='{"path":"/health/blog","categories":["new-media","popular"],"example":"/harvard/health/blog","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.health.harvard.edu/blog"]}],"name":"Health Blog","maintainers":["nczitzk"],"url":"www.health.harvard.edu/blog","location":"health/blog.ts"}' :test='{"code":0}' />

## Harvard Business Review <Site url="hbr.org"/>

### Topic <Site url="hbr.org" size="sm" />

<Route namespace="hbr" :data='{"path":"/topic/:topic?/:type?","categories":["new-media","popular"],"example":"/hbr/topic/Leadership/Popular","parameters":{"topic":"Topic, can be found in URL, Leadership by default","type":{"description":"Type, see below, Popular by default","options":[{"value":"Popular","label":"Popular"},{"value":"From the Store","label":"From the Store"},{"value":"For You","label":"For You"}],"default":"Popular"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["hbr.org/topic/:topic?","hbr.org/"]}],"name":"Topic","maintainers":["nczitzk","pseudoyu"],"description":"| POPULAR | FROM THE STORE | FOR YOU |\n  | ------- | -------------- | ------- |\n  | Popular | From the Store | For You |\n\n::: tip\n  Click here to view [All Topics](https://hbr.org/topics)\n:::","location":"topic.ts"}' :test='{"code":1,"message":"AssertionError: expected 376918577741 to be less than 311040000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:36:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 843)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)"}' />

| POPULAR | FROM THE STORE | FOR YOU |
  | ------- | -------------- | ------- |
  | Popular | From the Store | For You |

::: tip
  Click here to view [All Topics](https://hbr.org/topics)
:::

## HKEPC <Site url="hkepc.com"/>

### HKEPC 电脑领域 <Site url="hkepc.com/" size="sm" />

<Route namespace="hkepc" :data='{"path":"/:category?","categories":["new-media","popular"],"example":"/hkepc/news","parameters":{"category":"分类，见下表，默认为最新消息"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["hkepc.com/"],"target":""}],"name":"HKEPC 电脑领域","maintainers":["TonyRL"],"url":"hkepc.com/","description":"| 专题报导   | 新闻中心 | 新品快递 | 超频领域 | 流动数码 | 生活娱乐      | 会员消息 | 脑场新闻 | 业界资讯 | 最新消息 |\n  | ---------- | -------- | -------- | -------- | -------- | ------------- | -------- | -------- | -------- | -------- |\n  | coverStory | news     | review   | ocLab    | digital  | entertainment | member   | price    | press    | latest   |","location":"index.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 871)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

| 专题报导   | 新闻中心 | 新品快递 | 超频领域 | 流动数码 | 生活娱乐      | 会员消息 | 脑场新闻 | 业界资讯 | 最新消息 |
  | ---------- | -------- | -------- | -------- | -------- | ------------- | -------- | -------- | -------- | -------- |
  | coverStory | news     | review   | ocLab    | digital  | entertainment | member   | price    | press    | latest   |

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

## InfoQ 中文 <Site url="infoq.cn"/>

### Presentations <Site url="www.infoq.com" size="sm" />

<Route namespace="infoq" :data='{"path":"/presentations/:conference?","name":"Presentations","url":"www.infoq.com","maintainers":["nczitzk"],"example":"/infoq/presentations","parameters":{"conference":"Conference, all by default, can be found in URL"},"description":"::: tip\n  If you subscribe to [InfoQ Live Jan 2024](https://www.infoq.com/infoq-live-jan-2024/presentations/)，where the URL is `https://www.infoq.com/infoq-live-jan-2024/presentations/`, extract the part `https://www.infoq.com/` to the end, which is `/presentations/`, and use it as the parameter to fill in. Therefore, the route will be [`/infoq/presentations/infoq-live-jan-2024`](https://rsshub.app/infoq/presentations/infoq-live-jan-2024).\n:::\n    ","categories":["programming","popular"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.infoq.com/presentations","www.infoq.com/:conference/presentations"]}],"location":"presentations.ts"}' :test='{"code":0}' />

::: tip
  If you subscribe to [InfoQ Live Jan 2024](https://www.infoq.com/infoq-live-jan-2024/presentations/)，where the URL is `https://www.infoq.com/infoq-live-jan-2024/presentations/`, extract the part `https://www.infoq.com/` to the end, which is `/presentations/`, and use it as the parameter to fill in. Therefore, the route will be [`/infoq/presentations/infoq-live-jan-2024`](https://rsshub.app/infoq/presentations/infoq-live-jan-2024).
:::
    

### 话题 <Site url="infoq.cn" size="sm" />

<Route namespace="infoq" :data='{"path":"/topic/:id","categories":["new-media","popular"],"example":"/infoq/topic/1","parameters":{"id":"话题id，可在 [InfoQ全部话题](https://www.infoq.cn/topics) 页面找到URL里的话题id"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["infoq.cn/topic/:id"]}],"name":"话题","maintainers":["brilon"],"location":"topic.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 976)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### 推荐 <Site url="infoq.cn/" size="sm" />

<Route namespace="infoq" :data='{"path":"/recommend","categories":["new-media","popular"],"example":"/infoq/recommend","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["infoq.cn/"]}],"name":"推荐","maintainers":["brilon"],"url":"infoq.cn/","location":"recommend.ts"}' :test='{"code":0}' />

## Informed AI News <Site url="informedainews.com"/>


::: tip
informed AI RSS feeds:

-   World News Daily: 'https://rsshub.app/informedainews/zh-Hans/docs/world-news-daily'
-   Tech Enthusiast Weekly: 'https://rsshub.app/informedainews/zh-Hans/docs/tech-enthusiast-weekly'
-   AI Enthusiast Weekly: 'https://rsshub.app/informedainews/zh-Hans/docs/ai-enthusiast-daily'
:::

### 知闻AI <Site url="informedainews.com" size="sm" />

<Route namespace="informedainews" :data='{"path":"/zh-Hans/docs/:type","categories":["new-media","popular"],"example":"/informedainews/zh-Hans/docs/world-news-daily","parameters":{"type":"world-news-daily|tech-enthusiast-weekly|ai-enthusiast-daily"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["informedainews.com","informedainews.com/zh-Hans/docs/:type","informedainews.com/docs/:type"],"target":"/zh-Hans/docs/:type"}],"name":"知闻AI","maintainers":["guicaiyue"],"location":"docs.ts"}' :test='{"code":0}' />

## Inoreader <Site url="inoreader.com"/>

### HTML Clip <Site url="inoreader.com" size="sm" />

<Route namespace="inoreader" :data='{"path":"/html_clip/:user/:tag","example":"/inoreader/html_clip/1005137674/user-favorites","categories":["reading","popular"],"view":0,"name":"HTML Clip","maintainers":["EthanWng97"],"location":"index.ts"}' :test='{"code":0}' />

### RSS <Site url="inoreader.com" size="sm" />

<Route namespace="inoreader" :data='{"path":"/rss/:user/:tag","categories":["reading","popular"],"view":0,"example":"/inoreader/rss/1005137674/user-favorites","parameters":{"user":"user id, the interger after user/ in the example URL","tag":"tag, the string after tag/ in the example URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"RSS","maintainers":["EthanWng97"],"location":"rss.ts"}' :test='{"code":0}' />

## Instagram <Site url="www.instagram.com"/>

### User Profile - Picnob <Site url="www.instagram.com" size="sm" />

<Route namespace="picnob" :data='{"path":"/user/:id","categories":["social-media","popular"],"example":"/picnob/user/xlisa_olivex","parameters":{"id":"Instagram id"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["piokok.com/profile/:id/*"],"target":"/user/:id"}],"name":"User Profile - Picnob","maintainers":["TonyRL","micheal-death"],"view":2,"location":"user.ts"}' :test='{"code":0}' />

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

<Route namespace="javbus" :data='{"path":"/:path{.+}?","radar":[{"source":["www.javbus.com/:path*"],"target":"/:path"}],"name":"Works","maintainers":["MegrezZhu","CoderTonyChan","nczitzk","Felix2yu"],"categories":["multimedia","popular"],"view":3,"url":"www.javbus.com","example":"/javbus/star/rwt","parameters":{"path":{"description":"Any path of list page on javbus"}},"location":"index.ts"}' :test='{"code":0}' />

## Keep <Site url="gotokeep.com"/>

### 运动日记 <Site url="gotokeep.com" size="sm" />

<Route namespace="keep" :data='{"path":"/user/:id","categories":["social-media","popular"],"example":"/keep/user/556b02c1ab59390afea671ea","parameters":{"id":"Keep 用户 id"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gotokeep.com/users/:id"]}],"name":"运动日记","maintainers":["Dectinc","DIYgod"],"location":"user.ts"}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:66:18)\n    at listOnTimeout (node:internal/timers:594:17)\n    at processTimers (node:internal/timers:529:7)"}' />

## Konachan.com Anime Wallpapers <Site url="konachan.com"/>

konachan post

### Popular Recent Posts <Site url="konachan.com" size="sm" />

<Route namespace="konachan" :data='{"path":"/post/popular_recent/:period?","categories":["picture","popular"],"view":2,"example":"/konachan/post/popular_recent/1d","parameters":{"period":{"description":"展示时间","options":[{"value":"1d","label":"最近 24 小时"},{"value":"1w","label":"最近一周"},{"value":"1m","label":"最近一月"},{"value":"1y","label":"最近一年"}],"default":"1d"}},"radar":[{"source":["konachan.com/post"]}],"name":"Popular Recent Posts","maintainers":["magic-akari","NekoAria"],"description":"| 最近 24 小时    | 最近一周     | 最近一月    | 最近一年     |\n  | ------- | -------- | ------- | -------- |\n  | 1d | 1w | 1m | 1y |","location":"post.ts"}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:66:18)\n    at listOnTimeout (node:internal/timers:594:17)\n    at processTimers (node:internal/timers:529:7)"}' />

| 最近 24 小时    | 最近一周     | 最近一月    | 最近一年     |
  | ------- | -------- | ------- | -------- |
  | 1d | 1w | 1m | 1y |

## Lemmy <Site url="join-lemmy.org"/>

### Community <Site url="join-lemmy.org" size="sm" />

<Route namespace="lemmy" :data='{"path":"/:community/:sort?","categories":["social-media","popular"],"example":"/lemmy/technology@lemmy.world/Hot","parameters":{"community":"Lemmmy community, for example technology@lemmy.world","sort":{"description":"Sort by","options":[{"value":"Active","label":"Active"},{"value":"Hot","label":"Hot"},{"value":"New","label":"New"},{"value":"Old","label":"Old"},{"value":"TopDay","label":"TopDay"},{"value":"TopWeek","label":"TopWeek"},{"value":"TopMonth","label":"TopMonth"},{"value":"TopYear","label":"TopYear"},{"value":"TopAll","label":"TopAll"},{"value":"MostComments","label":"MostComments"},{"value":"NewComments","label":"NewComments"},{"value":"TopHour","label":"TopHour"},{"value":"TopSixHour","label":"TopSixHour"},{"value":"TopTwelveHour","label":"TopTwelveHour"},{"value":"TopThreeMonths","label":"TopThreeMonths"},{"value":"TopSixMonths","label":"TopSixMonths"},{"value":"TopNineMonths","label":"TopNineMonths"},{"value":"Controversial","label":"Controversial"},{"value":"Scaled","label":"Scaled"}],"default":"Active"}},"features":{"requireConfig":[{"name":"ALLOW_USER_SUPPLY_UNSAFE_DOMAIN","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Community","maintainers":["wb14123","pseudoyu"],"location":"index.ts"}' :test='{"code":0}' />

## LINE <Site url="today.line.me"/>

### TODAY - Channel <Site url="today.line.me" size="sm" />

<Route namespace="line" :data='{"path":"/today/:edition/publisher/:id","categories":["new-media","popular"],"example":"/line/today/th/publisher/101048","parameters":{"edition":"Edition, see table above","id":"Channel ID, can be found in URL"},"radar":[{"source":["today.line.me/:edition/v2/publisher/:id"]}],"name":"TODAY - Channel","maintainers":["TonyRL"],"location":"publisher.ts"}' :test='{"code":0}' />

### TODAY <Site url="today.line.me/" size="sm" />

<Route namespace="line" :data='{"path":"/today/:edition?/:tab?","categories":["new-media","popular"],"example":"/line/today","parameters":{"edition":"Edition, see below, Taiwan by default","tab":"Tag, can be found in URL, `top` by default"},"radar":[{"source":["today.line.me/"]}],"name":"TODAY","maintainers":["nczitzk"],"url":"today.line.me/","description":"Edition\n\n  | Taiwan | Thailand | Hong Kong |\n  | ------ | -------- | --------- |\n  | tw     | th       | hk        |","location":"today.ts"}' :test='{"code":0}' />

Edition

  | Taiwan | Thailand | Hong Kong |
  | ------ | -------- | --------- |
  | tw     | th       | hk        |

## LinkedIn <Site url="linkedin.com"/>

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

## Live Universal Awareness Map <Site url="liveuamap.com"/>

### 实时消息 <Site url="liveuamap.com" size="sm" />

<Route namespace="liveuamap" :data='{"path":"/:region?","categories":["new-media","popular"],"example":"/liveuamap","parameters":{"region":"region 热点地区，默认为`ukraine`，其他选项见liveuamap.com的三级域名"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["liveuamap.com/:region*"],"target":"/:region"}],"name":"实时消息","maintainers":["CoderSherlock"],"location":"index.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1134)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

## Lofter <Site url="www.lofter.com"/>

### Collection <Site url="www.lofter.com" size="sm" />

<Route namespace="lofter" :data='{"path":"/collection/:collectionID","categories":["social-media","popular"],"example":"/lofter/collection/552041","parameters":{"collectionID":"Lofter collection ID, can be found in the share URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Collection","maintainers":["SrakhiuMeow"],"location":"collection.ts"}' :test='{"code":0}' />

### Tag <Site url="www.lofter.com" size="sm" />

<Route namespace="lofter" :data='{"path":"/tag/:name?/:type?","categories":["social-media","popular"],"example":"/lofter/tag/cosplay/date","parameters":{"name":"tag name, such as `名侦探柯南`, `摄影` by default","type":"ranking type, see below, new by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Tag","maintainers":["hoilc","nczitzk","LucunJi"],"description":"| new  | date | week | month | total |\n  | ---- | ---- | ---- | ----- | ----- |\n  | 最新 | 日榜 | 周榜 | 月榜  | 总榜  |","location":"tag.ts"}' :test='{"code":0}' />

| new  | date | week | month | total |
  | ---- | ---- | ---- | ----- | ----- |
  | 最新 | 日榜 | 周榜 | 月榜  | 总榜  |

### User <Site url="www.lofter.com" size="sm" />

<Route namespace="lofter" :data='{"path":"/user/:name?","categories":["social-media","popular"],"example":"/lofter/user/i","view":0,"parameters":{"name":"Lofter user name, can be found in the URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User","maintainers":["hondajojo","nczitzk","LucunJi"],"location":"user.ts"}' :test='{"code":0}' />

## Macfilos <Site url="macfilos.com"/>

### Blog <Site url="macfilos.com/blog" size="sm" />

<Route namespace="macfilos" :data='{"path":"/blog","categories":["new-media","popular"],"example":"/macfilos/blog","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["macfilos.com/blog","macfilos.com/"]}],"name":"Blog","maintainers":["nczitzk"],"url":"macfilos.com/blog","location":"blog.ts"}' :test='{"code":0}' />

## Magnum Photos <Site url="magnumphotos.com"/>

### Magazine <Site url="magnumphotos.com/" size="sm" />

<Route namespace="magnumphotos" :data='{"path":"/magazine","categories":["picture","popular"],"view":2,"example":"/magnumphotos/magazine","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["magnumphotos.com/"]}],"name":"Magazine","maintainers":["EthanWng97"],"url":"magnumphotos.com/","location":"magazine.ts"}' :test='{"code":0}' />

## Mastodon <Site url="mastodon.social"/>

::: tip
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

<Route namespace="mastodon" :data='{"path":"/account_id/:site/:account_id/statuses/:only_media?","categories":["social-media","popular"],"view":1,"example":"/mastodon/account_id/mas.to/109300507275095341/statuses/false","parameters":{"site":"instance address, only domain, no `http://` or `https://` protocol header","account_id":"account ID, you can get it from `https://INSTANCE/api/v1/accounts/lookup?acct=USERNAME` api","only_media":{"description":"whether only display media content, default to false, any value to true","options":[{"value":"true","label":"true"},{"value":"false","label":"false"}],"default":"false"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User timeline (by account ID)","maintainers":["notofoe","pseudoyu"],"location":"account-id.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1169)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### User timeline <Site url="mastodon.social" size="sm" />

<Route namespace="mastodon" :data='{"path":"/acct/:acct/statuses/:only_media?","categories":["social-media","popular"],"view":1,"example":"/mastodon/acct/Mastodon@mastodon.social/statuses","parameters":{"acct":"Webfinger account URI, like `user@host`","only_media":{"description":"whether only display media content, default to false, any value to true","options":[{"value":"true","label":"true"},{"value":"false","label":"false"}],"default":"false"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User timeline","maintainers":["notofoe"],"description":"Started from Mastodon v4.0.0, the use of the `search` API in the route no longer requires a user token.\nIf the domain of your Webfinger account URI is the same as the API host of the instance (i.e., no delegation called in some other protocols), then no configuration is required and the route is available out of the box.\nHowever, you can still specify these route-specific configurations if you need to override them.","location":"acct.ts"}' :test='{"code":1,"message":"AssertionError: expected [ …(17) ] to not include &#39;https://mastodon.social/users/Mastodo…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:1143:17)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:920:17)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@5.1.2/node_modules/chai/chai.js:1610:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1170)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)"}' />

Started from Mastodon v4.0.0, the use of the `search` API in the route no longer requires a user token.
If the domain of your Webfinger account URI is the same as the API host of the instance (i.e., no delegation called in some other protocols), then no configuration is required and the route is available out of the box.
However, you can still specify these route-specific configurations if you need to override them.

## Matters <Site url="matters.town"/>

### Author <Site url="matters.town" size="sm" />

<Route namespace="matters" :data='{"path":"/author/:uid","name":"Author","example":"/matters/author/robertu","parameters":{"uid":"Author id, can be found at author&#39;s homepage url"},"maintainers":["Cerebrater","xosdy"],"radar":[{"source":["matters.town/:uid"]}],"location":"author.ts"}' :test='{"code":0}' />

### Latest, heat, essence <Site url="matters.town" size="sm" />

<Route namespace="matters" :data='{"path":"/latest/:type?","name":"Latest, heat, essence","example":"/matters/latest/heat","parameters":{"uid":"Defaults to latest, see table below"},"maintainers":["xyqfer","Cerebrater","xosdy"],"radar":[{"source":["matters.town"]}],"description":"| 最新   | 热门 | 精华    |\n  | ------ | ---- | ------- |\n  | latest | heat | essence |","location":"latest.ts"}' :test='{"code":0}' />

| 最新   | 热门 | 精华    |
  | ------ | ---- | ------- |
  | latest | heat | essence |

### Tags <Site url="matters.town" size="sm" />

<Route namespace="matters" :data='{"path":"/tags/:tid","name":"Tags","example":"/matters/tags/972-哲學","parameters":{"tid":"Tag id, can be found in the url of the tag page"},"maintainers":["Cerebrater"],"radar":[{"source":["matters.town/tags/:tid"]}],"location":"tags.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1175)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

## Mirror <Site url="mirror.xyz"/>

### User <Site url="mirror.xyz" size="sm" />

<Route namespace="mirror" :data='{"path":"/:id","categories":["new-media","popular"],"example":"/mirror/tingfei.eth","parameters":{"id":"user id"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User","maintainers":["fifteen42","rde9","nczitzk"],"location":"index.ts"}' :test='{"code":0}' />

## Misskey <Site url="misskey.io"/>

### Featured Notes <Site url="misskey.io" size="sm" />

<Route namespace="misskey" :data='{"path":"/notes/featured/:site","categories":["social-media","popular"],"view":1,"example":"/misskey/notes/featured/misskey.io","parameters":{"site":"instance address, domain only, without `http://` or `https://` protocol header"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Featured Notes","maintainers":["Misaka13514"],"location":"featured-notes.ts"}' :test='{"code":0}' />

### User timeline <Site url="misskey.io" size="sm" />

<Route namespace="misskey" :data='{"path":"/users/notes/:username/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/misskey/users/notes/support@misskey.io","parameters":{"username":"Misskey username in the format of username@instance.domain","routeParams":"\n| Key         | Description                        | Accepted Values | Default |\n| ----------- | ---------------------------------- | --------------- | ------- |\n| withRenotes | Include renotes in the timeline    | 0/1/true/false  | false   |\n| mediaOnly   | Only return posts containing media | 0/1/true/false  | false   |\n\nNote: `withRenotes` and `mediaOnly` are mutually exclusive and cannot both be set to true.\n\nExamples:\n- /misskey/users/notes/mttb2ccp@misskey.io/withRenotes=true\n- /misskey/users/notes/mttb2ccp@misskey.io/mediaOnly=true"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User timeline","maintainers":["siygle","SnowAgar25"],"location":"user-timeline.ts"}' :test='{"code":0}' />

## MyGoPen <Site url="mygopen.com"/>

### 分類 <Site url="mygopen.com" size="sm" />

<Route namespace="mygopen" :data='{"path":"/:label?","categories":["new-media","popular"],"example":"/mygopen","parameters":{"label":"分類，见下表，默认为首页"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["mygopen.com/search/label/:label","mygopen.com/"]}],"name":"分類","maintainers":["nczitzk"],"description":"| 謠言 | 詐騙 | 真實資訊 | 教學 |\n  | ---- | ---- | -------- | ---- |","location":"index.ts"}' :test='{"code":0}' />

| 謠言 | 詐騙 | 真實資訊 | 教學 |
  | ---- | ---- | -------- | ---- |

## NASA <Site url="apod.nasa.gov"/>

### Astronomy Picture of the Day <Site url="apod.nasa.govundefined" size="sm" />

<Route namespace="nasa" :data='{"path":"/apod","categories":["picture","popular"],"view":2,"example":"/nasa/apod","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["apod.nasa.govundefined"]}],"name":"Astronomy Picture of the Day","maintainers":["nczitzk","williamgateszhao"],"url":"apod.nasa.govundefined","location":"apod.ts"}' :test='{"code":0}' />

## Nautilus <Site url="nautil.us"/>

### Topics <Site url="nautil.us" size="sm" />

<Route namespace="nautil" :data='{"path":"/topic/:tid","categories":["new-media","popular"],"example":"/nautil/topic/arts","parameters":{"tid":"topic"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nautil.us/topics/:tid"]}],"name":"Topics","maintainers":["emdoe"],"description":"This route provides a flexible plan with full text content to subscribe specific topic(s) on the Nautilus. Please visit [nautil.us](https://nautil.us) and click `Topics` to acquire whole topic list.","location":"topics.ts"}' :test='{"code":0}' />

This route provides a flexible plan with full text content to subscribe specific topic(s) on the Nautilus. Please visit [nautil.us](https://nautil.us) and click `Topics` to acquire whole topic list.

## New Yorker <Site url="newyorker.com"/>

### Articles <Site url="newyorker.com" size="sm" />

<Route namespace="newyorker" :data='{"path":"/:category","categories":["traditional-media","popular"],"view":0,"example":"/newyorker/latest","parameters":{"category":"tab name. can be found at url"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["newyorker.com/:category?"]}],"name":"Articles","maintainers":["EthanWng97","pseudoyu"],"location":"news.ts"}' :test='{"code":0}' />

## NGA <Site url="bbs.nga.cn"/>

### 分区帖子 <Site url="bbs.nga.cn" size="sm" />

<Route namespace="nga" :data='{"path":"/forum/:fid/:recommend?","categories":["bbs","popular"],"view":0,"example":"/nga/forum/489","parameters":{"fid":"分区 id, 可在分区主页 URL 找到, 没有 fid 时 stid 同样适用","recommend":"是否只显示精华主题, 留空为否, 任意值为是"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"分区帖子","maintainers":["xyqfer"],"location":"forum.ts"}' :test='{"code":1,"message":"AssertionError: expected [ …(14) ] to not include &#39;https://nga.178.com/read.php?tid=4303…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:1143:17)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:920:17)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@5.1.2/node_modules/chai/chai.js:1610:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1275)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)"}' />

## NHK <Site url="www3.nhk.or.jp"/>

### WORLD-JAPAN - Top Stories <Site url="www3.nhk.or.jp" size="sm" />

<Route namespace="nhk" :data='{"path":"/news/:lang?","categories":["traditional-media","popular"],"view":0,"example":"/nhk/news/en","parameters":{"lang":{"description":"Language, see below","options":[{"value":"ar","label":"العربية"},{"value":"bn","label":"বাংলা"},{"value":"my","label":"မြန်မာဘာသာစကား"},{"value":"zh","label":"中文（简体）"},{"value":"zt","label":"中文（繁體）"},{"value":"en","label":"English"},{"value":"fr","label":"Français"},{"value":"hi","label":"हिन्दी"},{"value":"id","label":"Bahasa Indonesia"},{"value":"ko","label":"코리언"},{"value":"fa","label":"فارسی"},{"value":"pt","label":"Português"},{"value":"ru","label":"Русский"},{"value":"es","label":"Español"},{"value":"sw","label":"Kiswahili"},{"value":"th","label":"ภาษาไทย"},{"value":"tr","label":"Türkçe"},{"value":"uk","label":"Українська"},{"value":"ur","label":"اردو"},{"value":"vi","label":"Tiếng Việt"}],"default":"en"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www3.nhk.or.jp/nhkworld/:lang/news/list/","www3.nhk.or.jp/nhkworld/:lang/news/"],"target":"/news/:lang"}],"name":"WORLD-JAPAN - Top Stories","maintainers":["TonyRL","pseudoyu"],"location":"news.ts"}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:66:18)\n    at listOnTimeout (node:internal/timers:594:17)\n    at processTimers (node:internal/timers:529:7)"}' />

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

## Odaily 星球日报 <Site url="odaily.news"/>

### 活动 <Site url="0daily.com/activityPage" size="sm" />

<Route namespace="odaily" :data='{"path":"/activity","categories":["new-media","popular"],"example":"/odaily/activity","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["0daily.com/activityPage","0daily.com/"]}],"name":"活动","maintainers":["nczitzk"],"url":"0daily.com/activityPage","location":"activity.ts"}' :test='{"code":1,"message":"AssertionError: expected -6658137469 to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1376)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)"}' />

### 快讯 <Site url="0daily.com/newsflash" size="sm" />

<Route namespace="odaily" :data='{"path":"/newsflash","categories":["new-media","popular"],"example":"/odaily/newsflash","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["0daily.com/newsflash","0daily.com/"]}],"name":"快讯","maintainers":["nczitzk"],"url":"0daily.com/newsflash","location":"newsflash.ts"}' :test='{"code":0}' />

### 搜索快讯 <Site url="odaily.news" size="sm" />

<Route namespace="odaily" :data='{"path":"/search/news/:keyword","categories":["new-media","popular"],"example":"/odaily/search/news/RSS3","parameters":{"keyword":"搜索关键字"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["0daily.com/search/:keyword"]}],"name":"搜索快讯","maintainers":["snowraincloud"],"location":"search-news.ts"}' :test='{"code":0}' />

### 文章 <Site url="0daily.com/" size="sm" />

<Route namespace="odaily" :data='{"path":"/:id?","categories":["new-media","popular"],"example":"/odaily","parameters":{"id":"id，见下表，默认为最新"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["0daily.com/"]}],"name":"文章","maintainers":["nczitzk"],"url":"0daily.com/","description":"| 最新 | 新品 | DeFi | NFT | 存储 | 波卡 | 行情 | 活动 |\n  | ---- | ---- | ---- | --- | ---- | ---- | ---- | ---- |\n  | 280  | 333  | 331  | 334 | 332  | 330  | 297  | 296  |","location":"post.ts"}' :test='{"code":0}' />

| 最新 | 新品 | DeFi | NFT | 存储 | 波卡 | 行情 | 活动 |
  | ---- | ---- | ---- | --- | ---- | ---- | ---- | ---- |
  | 280  | 333  | 331  | 334 | 332  | 330  | 297  | 296  |

### 用户文章 <Site url="odaily.news" size="sm" />

<Route namespace="odaily" :data='{"path":"/user/:id","categories":["new-media","popular"],"example":"/odaily/user/2147486902","parameters":{"id":"用户 id，可在用户页地址栏中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["0daily.com/user/:id","0daily.com/"]}],"name":"用户文章","maintainers":["nczitzk"],"location":"user.ts"}' :test='{"code":0}' />

## PANews <Site url="panewslab.com"/>

### 快讯 <Site url="panewslab.com/" size="sm" />

<Route namespace="panewslab" :data='{"path":"/news","categories":["new-media","popular"],"example":"/panewslab/news","radar":[{"source":["panewslab.com/"]}],"name":"快讯","maintainers":["nczitzk"],"url":"panewslab.com/","location":"news.ts"}' :test='{"code":0}' />

### 深度 <Site url="panewslab.com/" size="sm" />

<Route namespace="panewslab" :data='{"path":"/profundity/:category?","categories":["new-media","popular"],"example":"/panewslab/profundity","parameters":{"category":"分类，见下表，默认为精选"},"radar":[{"source":["panewslab.com/","www.panewslab.com/zh/profundity/index.html"]}],"name":"深度","maintainers":["nczitzk"],"url":"panewslab.com/","description":"| 精选 | 链游 | 元宇宙 | NFT | DeFi | 监管 | 央行数字货币 | 波卡 | Layer 2 | DAO | 融资 | 活动 |\n  | ---- | ---- | ------ | --- | ---- | ---- | ------------ | ---- | ------- | --- | ---- | ---- |","location":"profundity.ts"}' :test='{"code":0}' />

| 精选 | 链游 | 元宇宙 | NFT | DeFi | 监管 | 央行数字货币 | 波卡 | Layer 2 | DAO | 融资 | 活动 |
  | ---- | ---- | ------ | --- | ---- | ---- | ------------ | ---- | ------- | --- | ---- | ---- |

### 专栏 <Site url="panewslab.com/" size="sm" />

<Route namespace="panewslab" :data='{"path":["/author/:id","/column/:id"],"categories":["new-media","popular"],"example":"/panewslab/author/166","parameters":{"id":"专栏 id，可在地址栏 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["panewslab.com/"]}],"name":"专栏","maintainers":["nczitzk"],"url":"panewslab.com/","location":"author.ts"}' :test='{"code":1,"message":"AssertionError: expected [ …(14) ] to not include &#39;https://panewslab.com/zh/articledetai…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:1143:17)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:920:17)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@5.1.2/node_modules/chai/chai.js:1610:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1426)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)"}' />

### 专题 <Site url="panewslab.com/" size="sm" />

<Route namespace="panewslab" :data='{"path":"/topic/:id","categories":["new-media","popular"],"example":"/panewslab/topic/1629365774078402","parameters":{"id":"专题 id，可在地址栏 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["panewslab.com/"]}],"name":"专题","maintainers":["nczitzk"],"url":"panewslab.com/","location":"topic.ts"}' :test='{"code":0}' />

## Phoronix <Site url="phoronix.com"/>

### News & Reviews <Site url="phoronix.com" size="sm" />

<Route namespace="phoronix" :data='{"path":"/:category?/:topic?","categories":["new-media","popular"],"example":"/phoronix/linux/KDE","parameters":{"category":"Category","topic":"Topic. You may find available parameters from their navigator links. E.g. to subscribe to `https://www.phoronix.com/reviews/Operating+Systems`, fill in the path `/phoronix/reviews/Operating+Systems`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["phoronix.com/:category?/:topic?"]}],"name":"News & Reviews","maintainers":["oppliate","Rongronggg9"],"location":"index.ts"}' :test='{"code":0}' />

## Pixabay <Site url="pixabay.com"/>

### Search <Site url="pixabay.com" size="sm" />

<Route namespace="pixabay" :data='{"path":"/search/:q/:order?","categories":["picture","popular"],"view":2,"example":"/pixabay/search/cat","parameters":{"q":"Search term","order":{"description":"Order","options":[{"value":"popular","label":"popular"},{"value":"latest","label":"latest"}],"default":"latest"}},"features":{"requireConfig":[{"name":"PIXABAY_KEY","optional":true,"description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["pixabay.com/:searchType/search/:q"],"target":"/search/:q"}],"name":"Search","maintainers":["TonyRL"],"location":"search.ts"}' :test='{"code":0}' />

## pixiv <Site url="www.pixiv.net"/>

### Keyword <Site url="www.pixiv.net" size="sm" />

<Route namespace="pixiv" :data='{"path":"/search/:keyword/:order?/:mode?/:include_ai?","categories":["social-media","popular"],"view":2,"example":"/pixiv/search/Nezuko/popular","parameters":{"keyword":"keyword","order":{"description":"rank mode, empty or other for time order, popular for popular order","default":"date","options":[{"label":"time order","value":"date"},{"label":"popular order","value":"popular"}]},"mode":{"description":"filte R18 content","default":"no","options":[{"label":"only not R18","value":"safe"},{"label":"only R18","value":"r18"},{"label":"no filter","value":"no"}]},"include_ai":{"description":"whether AI-generated content is included","default":"yes","options":[{"label":"does not include AI-generated content","value":"no"},{"label":"include AI-generated content","value":"yes"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Keyword","maintainers":["DIYgod"],"location":"search.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1461)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### Rankings <Site url="www.pixiv.net" size="sm" />

<Route namespace="pixiv" :data='{"path":"/ranking/:mode/:date?","categories":["social-media","popular"],"view":2,"example":"/pixiv/ranking/week","parameters":{"mode":{"description":"rank type","options":[{"value":"day","label":"daily rank"},{"value":"week","label":"weekly rank"},{"value":"month","label":"monthly rank"},{"value":"day_male","label":"male rank"},{"value":"day_felame","label":"female rank"},{"value":"day_ai","label":"AI-generated work Rankings"},{"value":"week_original","label":"original rank"},{"value":"week_rookie","label":"rookie user rank"},{"value":"day_r18","label":"R-18 daily rank"},{"value":"day_r18_ai","label":"R-18 AI-generated work"},{"value":"day_male_r18","label":"R-18 male rank"},{"value":"day_female_r18","label":"R-18 female rank"},{"value":"week_r18","label":"R-18 weekly rank"},{"value":"week_r18g","label":"R-18G rank"}],"default":"day"},"date":"format: `2018-4-25`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Rankings","maintainers":["EYHN"],"location":"ranking.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1460)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### User Activity <Site url="www.pixiv.net" size="sm" />

<Route namespace="pixiv" :data='{"path":"/user/:id","categories":["social-media","popular"],"view":2,"example":"/pixiv/user/15288095","parameters":{"id":"user id, available in user&#39;s homepage URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.pixiv.net/users/:id"]}],"name":"User Activity","maintainers":["DIYgod"],"location":"user.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1462)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

## pixivision <Site url="www.pixivision.net"/>

### Category <Site url="www.pixivision.net" size="sm" />

<Route namespace="pixivision" :data='{"path":"/:lang/:category?","categories":["anime","popular"],"view":0,"example":"/pixivision/zh-tw","parameters":{"lang":"Language","category":"Category"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Category","maintainers":["SnowAgar25"],"description":"::: tip\n  `https://www.pixivision.net/zh-tw/c/interview` → `/pixivision/zh-tw/interview`\n:::","radar":[{"source":["www.pixivision.net/:lang"],"target":"/:lang"},{"source":["www.pixivision.net/:lang/c/:category"],"target":"/:lang/:category"}],"location":"index.ts"}' :test='{"code":0}' />

::: tip
  `https://www.pixivision.net/zh-tw/c/interview` → `/pixivision/zh-tw/interview`
:::

## Plurk <Site url="plurk.com"/>

### Anonymous <Site url="plurk.com/anonymous" size="sm" />

<Route namespace="plurk" :data='{"path":"/anonymous","categories":["social-media","popular"],"example":"/plurk/anonymous","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["plurk.com/anonymous"]}],"name":"Anonymous","maintainers":["TonyRL"],"url":"plurk.com/anonymous","location":"anonymous.ts"}' :test='{"code":0}' />

### Hotlinks <Site url="plurk.com/hotlinks" size="sm" />

<Route namespace="plurk" :data='{"path":"/hotlinks","categories":["social-media","popular"],"example":"/plurk/hotlinks","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["plurk.com/hotlinks"]}],"name":"Hotlinks","maintainers":["TonyRL"],"url":"plurk.com/hotlinks","location":"hotlinks.ts"}' :test='{"code":0}' />

### Plurk News <Site url="plurk.com/news" size="sm" />

<Route namespace="plurk" :data='{"path":"/news/:lang?","categories":["social-media","popular"],"example":"/plurk/news/:lang?","parameters":{"lang":"Language, see the table above, `en` by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["plurk.com/news"],"target":"/news"}],"name":"Plurk News","maintainers":["TonyRL"],"url":"plurk.com/news","location":"news.ts"}' :test='{"code":0}' />

### Search <Site url="plurk.com" size="sm" />

<Route namespace="plurk" :data='{"path":"/search/:keyword","categories":["social-media","popular"],"example":"/plurk/search/FGO","parameters":{"keyword":"Search keyword"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Search","maintainers":["TonyRL"],"location":"search.ts"}' :test='{"code":0}' />

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

## Psyche <Site url="psyche.co"/>

### Topics <Site url="psyche.co" size="sm" />

<Route namespace="psyche" :data='{"path":"/topic/:topic","categories":["new-media","popular"],"example":"/psyche/topic/therapeia","parameters":{"topic":"Topic"},"radar":[{"source":["psyche.co/:topic"]}],"name":"Topics","maintainers":["emdoe"],"description":"Supported categories: Therapeia, Eudaimonia, and Poiesis.","location":"topic.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1498)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

Supported categories: Therapeia, Eudaimonia, and Poiesis.

## PetCity 毛孩日常 <Site url="thepetcity.co"/>

### 分類 <Site url="thepetcity.co/" size="sm" />

<Route namespace="thepetcity" :data='{"path":"/:term?","categories":["new-media","popular"],"example":"/thepetcity","parameters":{"term":"見下表，留空為全部文章"},"radar":[{"title":"Pet Staff 毛孩好物","source":["thepetcity.co/category/cute-item","thepetcity.co/"],"target":"/1"},{"title":"Funny News毛孩趣聞","source":["thepetcity.co/category/funny-news","thepetcity.co/"],"target":"/2"},{"title":"Knowledge飼養大全","source":["thepetcity.co/category/knowledge","thepetcity.co/"],"target":"/3"},{"title":"Hot Spot 毛孩打卡點","source":["thepetcity.co/category/hot-spot","thepetcity.co/"],"target":"/4"},{"title":"Raise Pets 養寵物新手","source":["thepetcity.co/category/raise-cats","thepetcity.co/"],"target":"/5"},{"title":"PetCity 毛孩日常 | 飼養竉物、竉物用品、萌寵趣聞","source":["thepetcity.co/"],"target":""}],"name":"分類","maintainers":["TonyRL","bigfei"],"url":"thepetcity.co/","description":"| Column Name       | TermID |\n  | -------------------- | ------ |\n  | Knowledge飼養大全     | 3      |\n  | Funny News毛孩趣聞    | 2      |\n  | Raise Pets 養寵物新手  | 5      |\n  | Hot Spot 毛孩打卡點    | 4      |\n  | Pet Staff 毛孩好物    | 1      |","location":"index.ts"}' :test='{"code":0}' />

| Column Name       | TermID |
  | -------------------- | ------ |
  | Knowledge飼養大全     | 3      |
  | Funny News毛孩趣聞    | 2      |
  | Raise Pets 養寵物新手  | 5      |
  | Hot Spot 毛孩打卡點    | 4      |
  | Pet Staff 毛孩好物    | 1      |

## QuestMobile <Site url="questmobile.com.cn"/>

### 行业研究报告 <Site url="questmobile.com.cn" size="sm" />

<Route namespace="questmobile" :data='{"path":"/report/:industry?/:label?","categories":["new-media","popular"],"example":"/questmobile/report","parameters":{"industry":"行业，见下表，默认为 `-1`，即全部行业","label":"标签，见下表，默认为 `-1`，即全部标签"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"行业研究报告","maintainers":["nczitzk"],"description":"::: tip\n  若订阅行业 [互联网行业](https://www.questmobile.com.cn/research/reports/1/-1)，网址为 `https://www.questmobile.com.cn/research/reports/1/-1`\n  参数 industry 为 `互联网行业` 或 `1`，此时路由为 [`/questmobile/report/互联网行业`](https://rsshub.app/questmobile/report/互联网行业) 或 [`/questmobile/report/1/-1`](https://rsshub.app/questmobile/report/1/-1)。\n\n  若订阅标签 [榜单](https://www.questmobile.com.cn/research/reports/-1/11)，网址为 `https://www.questmobile.com.cn/research/reports/-1/11`\n  参数 label 为 `榜单` 或 `11`，此时路由为 [`/questmobile/report/榜单`](https://rsshub.app/questmobile/report/榜单) 或 [`/questmobile/report/-1/11`](https://rsshub.app/questmobile/report/-1/11)。\n\n  若订阅行业和标签 [品牌领域 - 互联网经济](https://www.questmobile.com.cn/research/reports/2/1)，网址为 `https://www.questmobile.com.cn/research/reports/2/1`\n  参数 industry 为 `品牌领域` 或 `2`，参数 label 为 `互联网经济` 或 `1`，此时路由为 [`/questmobile/report/品牌领域/互联网经济`](https://rsshub.app/questmobile/report/品牌领域/互联网经济) 或 [`/questmobile/report/2/1`](https://rsshub.app/questmobile/report/2/1)，甚至 [`/questmobile/report/品牌领域/1`](https://rsshub.app/questmobile/report/品牌领域/1)。\n:::\n\n  <details>\n    <summary>全部行业和标签</summary>\n\n    #### 行业\n\n    | 互联网行业 | 移动社交 | 移动视频 | 移动购物 | 系统工具 |\n    | ---------- | -------- | -------- | -------- | -------- |\n    | 1          | 1001     | 1002     | 1003     | 1004     |\n\n    | 出行服务 | 金融理财 | 生活服务 | 移动音乐 | 新闻资讯 |\n    | -------- | -------- | -------- | -------- | -------- |\n    | 1005     | 1006     | 1007     | 1008     | 1009     |\n\n    | 办公商务 | 手机游戏 | 实用工具 | 数字阅读 | 教育学习 |\n    | -------- | -------- | -------- | -------- | -------- |\n    | 1010     | 1011     | 1012     | 1013     | 1014     |\n\n    | 汽车服务 | 拍摄美化 | 智能设备 | 旅游服务 | 健康美容 |\n    | -------- | -------- | -------- | -------- | -------- |\n    | 1015     | 1016     | 1017     | 1018     | 1020     |\n\n    | 育儿母婴 | 主题美化 | 医疗服务 | 品牌领域 | 美妆品牌 |\n    | -------- | -------- | -------- | -------- | -------- |\n    | 1022     | 1023     | 1024     | 2        | 2001     |\n\n    | 母婴品牌 | 家电品牌 | 食品饮料品牌 | 汽车品牌 | 服饰箱包品牌 |\n    | -------- | -------- | ------------ | -------- | ------------ |\n    | 2002     | 2003     | 2004         | 2005     | 2006         |\n\n    #### 标签\n\n    | 互联网经济 | 圈层经济 | 粉丝经济 | 银发经济 | 儿童经济 |\n    | ---------- | -------- | -------- | -------- | -------- |\n    | 1          | 1001     | 1002     | 1004     | 1005     |\n\n    | 萌宠经济 | 她经济 | 他经济 | 泛娱乐经济 | 下沉市场经济 |\n    | -------- | ------ | ------ | ---------- | ------------ |\n    | 1007     | 1009   | 1010   | 1011       | 1012         |\n\n    | 内容经济 | 订阅经济 | 会员经济 | 居家经济 | 到家经济 |\n    | -------- | -------- | -------- | -------- | -------- |\n    | 1013     | 1014     | 1015     | 1016     | 1017     |\n\n    | 颜值经济 | 闲置经济 | 旅游经济            | 人群洞察 | 00 后 |\n    | -------- | -------- | ------------------- | -------- | ----- |\n    | 1018     | 1020     | 1622842051677753346 | 2        | 2002  |\n\n    | Z 世代 | 银发族 | 宝妈宝爸 | 萌宠人群 | 运动达人 |\n    | ------ | ------ | -------- | -------- | -------- |\n    | 2003   | 2004   | 2005     | 2007     | 2008     |\n\n    | 女性消费 | 男性消费 | 游戏人群 | 二次元 | 新中产 |\n    | -------- | -------- | -------- | ------ | ------ |\n    | 2009     | 2010     | 2012     | 2013   | 2014   |\n\n    | 下沉市场用户 | 大学生 | 数字化营销 | 广告效果 | 品牌营销 |\n    | ------------ | ------ | ---------- | -------- | -------- |\n    | 2018         | 2022   | 3          | 3001     | 3002     |\n\n    | 全域营销 | 私域流量 | 新媒体营销 | KOL 生态 | 内容营销 |\n    | -------- | -------- | ---------- | -------- | -------- |\n    | 3003     | 3004     | 3005       | 3006     | 3008     |\n\n    | 直播电商 | 短视频带货 | 娱乐营销            | 营销热点 | 双 11 电商大促 |\n    | -------- | ---------- | ------------------- | -------- | -------------- |\n    | 3009     | 3010       | 1630464311158738945 | 4        | 4001           |\n\n    | 618 电商大促 | 春节营销 | 五一假期营销 | 热点事件盘点 | 消费热点 |\n    | ------------ | -------- | ------------ | ------------ | -------- |\n    | 4002         | 4003     | 4004         | 4007         | 5        |\n\n    | 时尚品牌 | 连锁餐饮 | 新式茶饮 | 智能家电 | 国潮品牌 |\n    | -------- | -------- | -------- | -------- | -------- |\n    | 5001     | 5002     | 5003     | 5004     | 5007     |\n\n    | 白酒品牌            | 精益运营 | 媒介策略 | 用户争夺 | 精细化运营 |\n    | ------------------- | -------- | -------- | -------- | ---------- |\n    | 1622841828310093825 | 6        | 6001     | 6002     | 6003       |\n\n    | 用户分层 | 增长黑马 | 社交裂变 | 新兴领域 | 新能源汽车 |\n    | -------- | -------- | -------- | -------- | ---------- |\n    | 6004     | 6005     | 6007     | 7        | 7001       |\n\n    | 智能汽车 | 新消费 | AIoT | 产业互联网 | AIGC                |\n    | -------- | ------ | ---- | ---------- | ------------------- |\n    | 7002     | 7003   | 7004 | 7005       | 1645677998450511873 |\n\n    | OTT 应用            | 智能电视            | 全景数据 | 全景生态 | 微信小程序 |\n    | ------------------- | ------------------- | -------- | -------- | ---------- |\n    | 1676063510499528705 | 1676063630293045249 | 8        | 8001     | 8002       |\n\n    | 支付宝小程序 | 百度智能小程序 | 企业流量            | 抖音小程序          | 手机终端 |\n    | ------------ | -------------- | ------------------- | ------------------- | -------- |\n    | 8003         | 8004           | 1671052842096496642 | 1676063017220018177 | 9        |\n\n    | 智能终端 | 国产终端 | 5G 手机 | 盘点 | 季度报告 |\n    | -------- | -------- | ------- | ---- | -------- |\n    | 9001     | 9002     | 9003    | 10   | 10001    |\n  </details>","location":"report.ts"}' :test='{"code":0}' />

::: tip
  若订阅行业 [互联网行业](https://www.questmobile.com.cn/research/reports/1/-1)，网址为 `https://www.questmobile.com.cn/research/reports/1/-1`
  参数 industry 为 `互联网行业` 或 `1`，此时路由为 [`/questmobile/report/互联网行业`](https://rsshub.app/questmobile/report/互联网行业) 或 [`/questmobile/report/1/-1`](https://rsshub.app/questmobile/report/1/-1)。

  若订阅标签 [榜单](https://www.questmobile.com.cn/research/reports/-1/11)，网址为 `https://www.questmobile.com.cn/research/reports/-1/11`
  参数 label 为 `榜单` 或 `11`，此时路由为 [`/questmobile/report/榜单`](https://rsshub.app/questmobile/report/榜单) 或 [`/questmobile/report/-1/11`](https://rsshub.app/questmobile/report/-1/11)。

  若订阅行业和标签 [品牌领域 - 互联网经济](https://www.questmobile.com.cn/research/reports/2/1)，网址为 `https://www.questmobile.com.cn/research/reports/2/1`
  参数 industry 为 `品牌领域` 或 `2`，参数 label 为 `互联网经济` 或 `1`，此时路由为 [`/questmobile/report/品牌领域/互联网经济`](https://rsshub.app/questmobile/report/品牌领域/互联网经济) 或 [`/questmobile/report/2/1`](https://rsshub.app/questmobile/report/2/1)，甚至 [`/questmobile/report/品牌领域/1`](https://rsshub.app/questmobile/report/品牌领域/1)。
:::

  <details>
    <summary>全部行业和标签</summary>

    #### 行业

    | 互联网行业 | 移动社交 | 移动视频 | 移动购物 | 系统工具 |
    | ---------- | -------- | -------- | -------- | -------- |
    | 1          | 1001     | 1002     | 1003     | 1004     |

    | 出行服务 | 金融理财 | 生活服务 | 移动音乐 | 新闻资讯 |
    | -------- | -------- | -------- | -------- | -------- |
    | 1005     | 1006     | 1007     | 1008     | 1009     |

    | 办公商务 | 手机游戏 | 实用工具 | 数字阅读 | 教育学习 |
    | -------- | -------- | -------- | -------- | -------- |
    | 1010     | 1011     | 1012     | 1013     | 1014     |

    | 汽车服务 | 拍摄美化 | 智能设备 | 旅游服务 | 健康美容 |
    | -------- | -------- | -------- | -------- | -------- |
    | 1015     | 1016     | 1017     | 1018     | 1020     |

    | 育儿母婴 | 主题美化 | 医疗服务 | 品牌领域 | 美妆品牌 |
    | -------- | -------- | -------- | -------- | -------- |
    | 1022     | 1023     | 1024     | 2        | 2001     |

    | 母婴品牌 | 家电品牌 | 食品饮料品牌 | 汽车品牌 | 服饰箱包品牌 |
    | -------- | -------- | ------------ | -------- | ------------ |
    | 2002     | 2003     | 2004         | 2005     | 2006         |

    #### 标签

    | 互联网经济 | 圈层经济 | 粉丝经济 | 银发经济 | 儿童经济 |
    | ---------- | -------- | -------- | -------- | -------- |
    | 1          | 1001     | 1002     | 1004     | 1005     |

    | 萌宠经济 | 她经济 | 他经济 | 泛娱乐经济 | 下沉市场经济 |
    | -------- | ------ | ------ | ---------- | ------------ |
    | 1007     | 1009   | 1010   | 1011       | 1012         |

    | 内容经济 | 订阅经济 | 会员经济 | 居家经济 | 到家经济 |
    | -------- | -------- | -------- | -------- | -------- |
    | 1013     | 1014     | 1015     | 1016     | 1017     |

    | 颜值经济 | 闲置经济 | 旅游经济            | 人群洞察 | 00 后 |
    | -------- | -------- | ------------------- | -------- | ----- |
    | 1018     | 1020     | 1622842051677753346 | 2        | 2002  |

    | Z 世代 | 银发族 | 宝妈宝爸 | 萌宠人群 | 运动达人 |
    | ------ | ------ | -------- | -------- | -------- |
    | 2003   | 2004   | 2005     | 2007     | 2008     |

    | 女性消费 | 男性消费 | 游戏人群 | 二次元 | 新中产 |
    | -------- | -------- | -------- | ------ | ------ |
    | 2009     | 2010     | 2012     | 2013   | 2014   |

    | 下沉市场用户 | 大学生 | 数字化营销 | 广告效果 | 品牌营销 |
    | ------------ | ------ | ---------- | -------- | -------- |
    | 2018         | 2022   | 3          | 3001     | 3002     |

    | 全域营销 | 私域流量 | 新媒体营销 | KOL 生态 | 内容营销 |
    | -------- | -------- | ---------- | -------- | -------- |
    | 3003     | 3004     | 3005       | 3006     | 3008     |

    | 直播电商 | 短视频带货 | 娱乐营销            | 营销热点 | 双 11 电商大促 |
    | -------- | ---------- | ------------------- | -------- | -------------- |
    | 3009     | 3010       | 1630464311158738945 | 4        | 4001           |

    | 618 电商大促 | 春节营销 | 五一假期营销 | 热点事件盘点 | 消费热点 |
    | ------------ | -------- | ------------ | ------------ | -------- |
    | 4002         | 4003     | 4004         | 4007         | 5        |

    | 时尚品牌 | 连锁餐饮 | 新式茶饮 | 智能家电 | 国潮品牌 |
    | -------- | -------- | -------- | -------- | -------- |
    | 5001     | 5002     | 5003     | 5004     | 5007     |

    | 白酒品牌            | 精益运营 | 媒介策略 | 用户争夺 | 精细化运营 |
    | ------------------- | -------- | -------- | -------- | ---------- |
    | 1622841828310093825 | 6        | 6001     | 6002     | 6003       |

    | 用户分层 | 增长黑马 | 社交裂变 | 新兴领域 | 新能源汽车 |
    | -------- | -------- | -------- | -------- | ---------- |
    | 6004     | 6005     | 6007     | 7        | 7001       |

    | 智能汽车 | 新消费 | AIoT | 产业互联网 | AIGC                |
    | -------- | ------ | ---- | ---------- | ------------------- |
    | 7002     | 7003   | 7004 | 7005       | 1645677998450511873 |

    | OTT 应用            | 智能电视            | 全景数据 | 全景生态 | 微信小程序 |
    | ------------------- | ------------------- | -------- | -------- | ---------- |
    | 1676063510499528705 | 1676063630293045249 | 8        | 8001     | 8002       |

    | 支付宝小程序 | 百度智能小程序 | 企业流量            | 抖音小程序          | 手机终端 |
    | ------------ | -------------- | ------------------- | ------------------- | -------- |
    | 8003         | 8004           | 1671052842096496642 | 1676063017220018177 | 9        |

    | 智能终端 | 国产终端 | 5G 手机 | 盘点 | 季度报告 |
    | -------- | -------- | ------- | ---- | -------- |
    | 9001     | 9002     | 9003    | 10   | 10001    |
  </details>

## Readhub <Site url="readhub.cn"/>

### 分类 <Site url="readhub.cn" size="sm" />

<Route namespace="readhub" :data='{"path":"/:category?","categories":["new-media","popular"],"example":"/readhub","parameters":{"category":"分类，见下表，默认为热门话题"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"分类","maintainers":["WhiteWorld","nczitzk","Fatpandac"],"description":"| 热门话题 | 科技动态 | 医疗产业 | 财经快讯           |\n  | -------- | -------- | -------- | ------------------ |\n  |          | news     | medical  | financial_express |","location":"index.ts"}' :test='{"code":0}' />

| 热门话题 | 科技动态 | 医疗产业 | 财经快讯           |
  | -------- | -------- | -------- | ------------------ |
  |          | news     | medical  | financial_express |

### 每日早报 <Site url="readhub.cn/daily" size="sm" />

<Route namespace="readhub" :data='{"path":"/daily","categories":["new-media","popular"],"example":"/readhub/daily","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["readhub.cn/daily"]}],"name":"每日早报","maintainers":["nczitzk","fashioncj"],"url":"readhub.cn/daily","location":"daily.ts"}' :test='{"code":0}' />

## Rebase Network <Site url="rebase.network"/>

### Web3 Geek Daily <Site url="rebase.network" size="sm" />

<Route namespace="rebase" :data='{"path":"/geekdaily","categories":["new-media","popular"],"example":"/rebase/geekdaily","radar":[{"source":["rebase.network/geekdaily"],"target":"/geekdaily"}],"name":"Web3 Geek Daily","maintainers":["gaoyifan"],"location":"geekdaily.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1557)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

## Reuters <Site url="reuters.com"/>

::: tip
You can use `sophi=true` query parameter to invoke the **experimental** method, which can, if possible, fetch more articles(between 20 and 100) with `limit` given. But some articles from the old method might not be available.
:::

### Category/Topic/Author <Site url="reuters.com" size="sm" />

<Route namespace="reuters" :data='{"path":"/:category/:topic?","categories":["traditional-media","popular"],"view":0,"example":"/reuters/world/us","parameters":{"category":{"description":"find it in the URL, or tables below","options":[{"value":"world","label":"World"},{"value":"business","label":"Business"},{"value":"legal","label":"Legal"},{"value":"markets","label":"Markets"},{"value":"breakingviews","label":"Breakingviews"},{"value":"technology","label":"Technology"},{"value":"graphics","label":"Graphics"},{"value":"authors","label":"Authors"}],"default":"world"},"topic":"find it in the URL, or tables below, leave empty for `All`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["reuters.com/:category/:topic?","reuters.com/"]}],"name":"Category/Topic/Author","maintainers":["LyleLee","HenryQW","proletarius101","black-desk","nczitzk","pseudoyu"],"description":"-   `:category`:\n\n      | World | Business | Legal | Markets | Breakingviews | Technology | Graphics |\n      | ----- | -------- | ----- | ------- | ------------- | ---------- | -------- |\n      | world | business | legal | markets | breakingviews | technology | graphics |\n\n  -   `world/:topic`:\n\n      | All | Africa | Americas | Asia Pacific | China | Europe | India | Middle East | United Kingdom | United States | The Great Reboot | Reuters Next |\n      | --- | ------ | -------- | ------------ | ----- | ------ | ----- | ----------- | -------------- | ------------- | ---------------- | ------------ |\n      |     | africa | americas | asia-pacific | china | europe | india | middle-east | uk             | us            | the-great-reboot | reuters-next |\n\n  -   `business/:topic`:\n\n      | All | Aerospace & Defense | Autos & Transportation | Energy | Environment | Finance | Healthcare & Pharmaceuticals | Media & Telecom | Retail & Consumer | Sustainable Business | Charged | Future of Health | Future of Money | Take Five | Reuters Impact |\n      | --- | ------------------- | ---------------------- | ------ | ----------- | ------- | ---------------------------- | --------------- | ----------------- | -------------------- | ------- | ---------------- | --------------- | --------- | -------------- |\n      |     | aerospace-defense   | autos-transportation   | energy | environment | finance | healthcare-pharmaceuticals   | media-telecom   | retail-consumer   | sustainable-business | charged | future-of-health | future-of-money | take-five | reuters-impact |\n\n  -   `legal/:topic`:\n\n      | All | Government | Legal Industry | Litigation | Transactional |\n      | --- | ---------- | -------------- | ---------- | ------------- |\n      |     | government | legalindustry  | litigation | transactional |\n\n  -   `authors/:topic`:\n\n      | Default | Jonathan Landay | any other authors |\n      | ------- | --------------- | ----------------- |\n      | reuters | jonathan-landay | their name in URL |\n\n  More could be found in the URL of the category/topic page.","location":"common.ts"}' :test='{"code":0}' />

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

<Route namespace="reuters" :data='{"path":"/investigates","categories":["traditional-media","popular"],"view":0,"example":"/reuters/investigates","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Inverstigates","maintainers":["LyleLee"],"location":"investigates.ts"}' :test='{"code":0}' />

## RSSHub <Site url="docs.rsshub.app"/>

### New routes <Site url="docs.rsshub.app/*" size="sm" />

<Route namespace="rsshub" :data='{"path":"/routes/:lang?","categories":["program-update","popular"],"view":5,"example":"/rsshub/routes/en","parameters":{"lang":{"description":"Language","options":[{"label":"Chinese","value":"zh"},{"label":"English","value":"en"}],"default":"en"}},"radar":[{"source":["docs.rsshub.app/*"],"target":"/routes"}],"name":"New routes","maintainers":["DIYgod"],"url":"docs.rsshub.app/*","location":"routes.ts"}' :test='{"code":1,"message":"AssertionError: expected [ &#39;bsky\"/keyword/:keyword\"&#39;, …(854) ] to not include &#39;v2ex\"/xna\"&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:1143:17)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:920:17)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@5.1.2/node_modules/chai/chai.js:1610:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1567)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)"}' />

## Solidot <Site url="www.solidot.org"/>

### 最新消息 <Site url="www.solidot.org" size="sm" />

<Route namespace="solidot" :data='{"path":"/:type?","categories":["traditional-media","popular"],"view":0,"example":"/solidot/linux","parameters":{"type":{"description":"消息类型，在网站上方选择后复制子域名或参见 [https://www.solidot.org/index.rss](https://www.solidot.org/index.rss) 即可","options":[{"value":"www","label":"全部"},{"value":"startup","label":"创业"},{"value":"linux","label":"Linux"},{"value":"science","label":"科学"},{"value":"technology","label":"科技"},{"value":"mobile","label":"移动"},{"value":"apple","label":"苹果"},{"value":"hardware","label":"硬件"},{"value":"software","label":"软件"},{"value":"security","label":"安全"},{"value":"games","label":"游戏"},{"value":"books","label":"书籍"},{"value":"ask","label":"ask"},{"value":"idle","label":"idle"},{"value":"blog","label":"博客"},{"value":"cloud","label":"云计算"},{"value":"story","label":"奇客故事"}],"default":"www"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"最新消息","maintainers":["sgqy","hang333","TonyRL"],"location":"main.ts"}' :test='{"code":0}' />

## Spotify <Site url="open.spotify.com"/>

### Artist Albums <Site url="open.spotify.com" size="sm" />

<Route namespace="spotify" :data='{"path":"/artist/:id","categories":["multimedia","popular"],"view":4,"example":"/spotify/artist/6k9TBCxyr4bXwZ8Y21Kwn1","parameters":{"id":"Artist ID"},"features":{"requireConfig":[{"name":"SPOTIFY_CLIENT_ID","description":""},{"name":"SPOTIFY_CLIENT_SECRET","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["open.spotify.com/artist/:id"]}],"name":"Artist Albums","maintainers":["outloudvi"],"location":"artist.ts"}' :test='undefined' />

### Playlist <Site url="open.spotify.com" size="sm" />

<Route namespace="spotify" :data='{"path":"/playlist/:id","categories":["multimedia","popular"],"view":4,"example":"/spotify/playlist/4UBVy1LttvodwivPUuwJk2","parameters":{"id":"Playlist ID"},"features":{"requireConfig":[{"name":"SPOTIFY_CLIENT_ID","description":""},{"name":"SPOTIFY_CLIENT_SECRET","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["open.spotify.com/playlist/:id"]}],"name":"Playlist","maintainers":["outloudvi"],"location":"playlist.ts"}' :test='undefined' />

### Show/Podcasts <Site url="open.spotify.com" size="sm" />

<Route namespace="spotify" :data='{"path":"/show/:id","categories":["multimedia","popular"],"view":4,"example":"/spotify/show/5CfCWKI5pZ28U0uOzXkDHe","parameters":{"id":"Show ID"},"features":{"requireConfig":[{"name":"SPOTIFY_CLIENT_ID","description":""},{"name":"SPOTIFY_CLIENT_SECRET","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["open.spotify.com/show/:id"]}],"name":"Show/Podcasts","maintainers":["caiohsramos","pseudoyu"],"location":"show.ts"}' :test='undefined' />

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

<Route namespace="nytimes" :data='{"path":"/daily_briefing_chinese","categories":["traditional-media","popular"],"example":"/nytimes/daily_briefing_chinese","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nytimes.com/"],"target":""}],"name":"Daily Briefing","maintainers":["yueyericardo","nczitzk"],"url":"nytimes.com/","description":"URL: [https://www.nytimes.com/zh-hans/series/daily-briefing-chinese](https://www.nytimes.com/zh-hans/series/daily-briefing-chinese)","location":"daily-briefing-chinese.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1370)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

URL: [https://www.nytimes.com/zh-hans/series/daily-briefing-chinese](https://www.nytimes.com/zh-hans/series/daily-briefing-chinese)

### News <Site url="nytimes.com/" size="sm" />

<Route namespace="nytimes" :data='{"path":"/:lang?","categories":["traditional-media","popular"],"view":0,"example":"/nytimes/dual","parameters":{"lang":{"description":"language, default to Chinese","options":[{"value":"dual","label":"Chinese-English"},{"value":"en","label":"English"},{"value":"traditionalchinese","label":"Traditional Chinese"},{"value":"dual-traditionalchinese","label":"Chinese-English (Traditional Chinese)"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nytimes.com/"],"target":""}],"name":"News","maintainers":["HenryQW","pseudoyu"],"url":"nytimes.com/","description":"By extracting the full text of articles, we provide a better reading experience (full text articles) over the official one.","location":"index.ts"}' :test='{"code":0}' />

By extracting the full text of articles, we provide a better reading experience (full text articles) over the official one.

### News <Site url="nytimes.com/" size="sm" />

<Route namespace="nytimes" :data='{"path":"/rss/:cat?","categories":["traditional-media","popular"],"view":0,"example":"/nytimes/rss/HomePage","parameters":{"cat":{"description":"Category name, corresponding to the last segment of [official feed&#39;s](https://www.nytimes.com/rss) url."}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nytimes.com/"],"target":""}],"name":"News","maintainers":["HenryQW","pseudoyu","dzx-dzx"],"url":"nytimes.com/","description":"Enhance the official EN RSS feed","location":"rss.ts"}' :test='{"code":0}' />

Enhance the official EN RSS feed

## Telegram <Site url="t.me"/>

### Channel <Site url="t.me" size="sm" />

<Route namespace="telegram" :data='{"path":"/channel/:username/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/telegram/channel/awesomeRSSHub","parameters":{"username":"channel username","routeParams":"extra parameters, see the table below\n| Key                    | Description                                                           | Accepts                                            | Defaults to  |\n| :--------------------: | :-------------------------------------------------------------------: | :------------------------------------------------: | :----------: |\n| showLinkPreview        | Show the link preview from Telegram                                   | 0/1/true/false                                     | true         |\n| showViaBot             | For messages sent via bot, show the bot                               | 0/1/true/false                                     | true         |\n| showReplyTo            | For reply messages, show the target of the reply                      | 0/1/true/false                                     | true         |\n| showFwdFrom            | For forwarded messages, show the forwarding source                    | 0/1/true/false                                     | true         |\n| showFwdFromAuthor      | For forwarded messages, show the author of the forwarding source      | 0/1/true/false                                     | true         |\n| showInlineButtons      | Show inline buttons                                                   | 0/1/true/false                                     | false        |\n| showMediaTagInTitle    | Show media tags in the title                                          | 0/1/true/false                                     | true         |\n| showMediaTagAsEmoji    | Show media tags as emoji                                              | 0/1/true/false                                     | true         |\n| showHashtagAsHyperlink | Show hashtags as hyperlinks (`https://t.me/s/channel?q=%23hashtag`) | 0/1/true/false                                     | true         |\n| includeFwd             | Include forwarded messages                                            | 0/1/true/false                                     | true         |\n| includeReply           | Include reply messages                                                | 0/1/true/false                                     | true         |\n| includeServiceMsg      | Include service messages (e.g. message pinned, channel photo updated) | 0/1/true/false                                     | true         |\n| includeUnsupportedMsg  | Include messages unsupported by t.me                                  | 0/1/true/false                                     | false        |\n| searchQuery            | search query                                                          | keywords; replace `#hashtag` with `%23hashtag` | (no keyword) |\n\nSpecify different option values than default values can meet different needs, URL\n\n```\nhttps://rsshub.app/telegram/channel/NewlearnerChannel/showLinkPreview=0&showViaBot=0&showReplyTo=0&showFwdFrom=0&showFwdFromAuthor=0&showInlineButtons=0&showMediaTagInTitle=1&showMediaTagAsEmoji=1&includeFwd=0&includeReply=1&includeServiceMsg=0&includeUnsupportedMsg=0\n```\n\ngenerates an RSS without any link previews and annoying metadata, with emoji media tags in the title, without forwarded messages (but with reply messages), and without messages you don&#39;t care about (service messages and unsupported messages), for people who prefer pure subscriptions.\n\nFor backward compatibility reasons, invalid `routeParams` will be treated as `searchQuery` .\n"},"features":{"requireConfig":[{"name":"TELEGRAM_SESSION","optional":true,"description":"Telegram API Authentication"},{"name":"TELEGRAM_API_ID","optional":true,"description":"Telegram API ID"},{"name":"TELEGRAM_API_HASH","optional":true,"description":"Telegram API Hash"},{"name":"TELEGRAM_MAX_CONCURRENT_DOWNLOADS","optional":true,"description":"Telegram Max Concurrent Downloads"},{"name":"TELEGRAM_PROXY_HOST","optional":true,"description":"Telegram Proxy Host"},{"name":"TELEGRAM_PROXY_PORT","optional":true,"description":"Telegram Proxy Port"},{"name":"TELEGRAM_PROXY_SECRET","optional":true,"description":"Telegram Proxy Secret"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["t.me/s/:username"],"target":"/channel/:username"}],"name":"Channel","maintainers":["DIYgod","Rongronggg9","synchrone","pseudoyu"],"description":"\n::: tip\n  Due to Telegram restrictions, some channels involving pornography, copyright, and politics cannot be subscribed. You can confirm by visiting `https://t.me/s/:username`, it&#39;s recommended to deploy your own instance with telegram api configs (create your telegram application via `https://core.telegram.org/api/obtaining_api_id`, run this command `node ./lib/routes/telegram/scripts/get-telegram-session.mjs` to get `TELEGRAM_SESSION` and set it as Environment Variable).\n:::","location":"channel.ts"}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:66:18)\n    at listOnTimeout (node:internal/timers:594:17)\n    at processTimers (node:internal/timers:529:7)"}' />


::: tip
  Due to Telegram restrictions, some channels involving pornography, copyright, and politics cannot be subscribed. You can confirm by visiting `https://t.me/s/:username`, it's recommended to deploy your own instance with telegram api configs (create your telegram application via `https://core.telegram.org/api/obtaining_api_id`, run this command `node ./lib/routes/telegram/scripts/get-telegram-session.mjs` to get `TELEGRAM_SESSION` and set it as Environment Variable).
:::

### Telegram Blog <Site url="telegram.org/blog" size="sm" />

<Route namespace="telegram" :data='{"path":"/blog","categories":["social-media","popular"],"view":0,"example":"/telegram/blog","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["telegram.org/blog"]}],"name":"Telegram Blog","maintainers":["fengkx"],"url":"telegram.org/blog","location":"blog.ts"}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:66:18)\n    at listOnTimeout (node:internal/timers:594:17)\n    at processTimers (node:internal/timers:529:7)"}' />

## The Movie Database <Site url="themoviedb.org"/>

::: tip
Refer to [https://developers.themoviedb.org/3/getting-started/languages](https://developers.themoviedb.org/3/getting-started/languages) for the language parameter in the route.
:::

### TV Show Seasons <Site url="themoviedb.org" size="sm" />

<Route namespace="themoviedb" :data='{"path":"/tv/:id/seasons/:lang?","categories":["multimedia","popular"],"view":5,"example":"/themoviedb/tv/70593/seasons/en-US","parameters":{"id":"TV show ID","lang":"Language"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"TV Show Seasons","maintainers":["x2cf"],"location":"seasons.ts"}' :test='{"code":0}' />

## The Verge <Site url="theverge.com"/>

### The Verge <Site url="theverge.com" size="sm" />

<Route namespace="theverge" :data='{"path":"/:hub?","categories":["new-media","popular"],"example":"/theverge","parameters":{"hub":"Hub, see below, All Posts by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["theverge.com/:hub","theverge.com/"]}],"name":"The Verge","maintainers":["HenryQW","vbali"],"description":"| Hub         | Hub name            |\n  | ----------- | ------------------- |\n  |             | All Posts           |\n  | android     | Android             |\n  | apple       | Apple               |\n  | apps        | Apps & Software     |\n  | blackberry  | BlackBerry          |\n  | culture     | Culture             |\n  | gaming      | Gaming              |\n  | hd          | HD & Home           |\n  | microsoft   | Microsoft           |\n  | photography | Photography & Video |\n  | policy      | Policy & Law        |\n  | web         | Web & Social        |\n\n  Provides a better reading experience (full text articles) over the official one.","location":"index.ts"}' :test='{"code":0}' />

| Hub         | Hub name            |
  | ----------- | ------------------- |
  |             | All Posts           |
  | android     | Android             |
  | apple       | Apple               |
  | apps        | Apps & Software     |
  | blackberry  | BlackBerry          |
  | culture     | Culture             |
  | gaming      | Gaming              |
  | hd          | HD & Home           |
  | microsoft   | Microsoft           |
  | photography | Photography & Video |
  | policy      | Policy & Law        |
  | web         | Web & Social        |

  Provides a better reading experience (full text articles) over the official one.

## Threads <Site url="threads.net"/>

### User timeline <Site url="threads.net" size="sm" />

<Route namespace="threads" :data='{"path":"/:user/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/threads/zuck","parameters":{"user":"Username","routeParams":{"description":"Extra parameters, see the table below\nSpecify options (in the format of query string) in parameter `routeParams` to control some extra features for threads\n\n| Key                            | Description                                                                                                                  | Accepts                | Defaults to |\n| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |\n| `showAuthorInTitle`            | Show author name in title                                                                                                    | `0`/`1`/`true`/`false` | `true`      |\n| `showAuthorInDesc`             | Show author name in description (RSS body)                                                                                   | `0`/`1`/`true`/`false` | `true`      |\n| `showQuotedAuthorAvatarInDesc` | Show avatar of quoted author in description (RSS body) (Not recommended if your RSS reader extracts images from description) | `0`/`1`/`true`/`false` | `false`     |\n| `showAuthorAvatarInDesc`       | Show avatar of author in description (RSS body) (Not recommended if your RSS reader extracts images from description)        | `0`/`1`/`true`/`false` | `falseP`    |\n| `showEmojiForQuotesAndReply`   | Use \"🔁\" instead of \"QT\", \"↩️\" instead of \"Re\"                                                                               | `0`/`1`/`true`/`false` | `true`      |\n| `showQuotedInTitle`            | Show quoted tweet in title                                                                                                   | `0`/`1`/`true`/`false` | `true`      |\n| `replies`                      | Show replies                                                                                                                 | `0`/`1`/`true`/`false` | `true`      |\n\nSpecify different option values than default values to improve readability. The URL\n\n```\nhttps://rsshub.app/threads/zuck/showAuthorInTitle=1&showAuthorInDesc=1&showQuotedAuthorAvatarInDesc=1&showAuthorAvatarInDesc=1&showEmojiForQuotesAndReply=1&showQuotedInTitle=1\n```"}},"name":"User timeline","maintainers":["ninboy","pseudoyu"],"location":"index.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1855)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

## Twitch <Site url="www.twitch.tv"/>

### Channel Video <Site url="www.twitch.tv" size="sm" />

<Route namespace="twitch" :data='{"path":"/video/:login/:filter?","categories":["live","popular"],"view":3,"example":"/twitch/video/riotgames/highlights","parameters":{"login":"Twitch username","filter":{"description":"Video type, Default to all","options":[{"value":"archive","label":"Archive"},{"value":"highlights","label":"Highlights"},{"value":"all","label":"All"}],"default":"all"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.twitch.tv/:login/videos"],"target":"/video/:login"}],"name":"Channel Video","maintainers":["hoilc"],"location":"video.ts"}' :test='{"code":0}' />

### Live <Site url="www.twitch.tv" size="sm" />

<Route namespace="twitch" :data='{"path":"/live/:login","categories":["live","popular"],"view":5,"example":"/twitch/live/riotgames","parameters":{"login":"Twitch username"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Live","maintainers":["hoilc"],"location":"live.ts"}' :test='{"code":0}' />

## UNTAG <Site url="utgd.net"/>

### 分类 <Site url="utgd.net" size="sm" />

<Route namespace="utgd" :data='{"path":"/category/:category?","categories":["new-media","popular"],"example":"/utgd/category/method","parameters":{"category":"分类，可在对应分类页的 URL 中找到，默认为方法"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["utgd.net/category/s/:category","utgd.net/"],"target":"/category/:category"}],"name":"分类","maintainers":["nczitzk"],"description":"| 方法   | 观点    |\n  | ------ | ------- |\n  | method | opinion |","location":"category.ts"}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:66:18)\n    at listOnTimeout (node:internal/timers:594:17)\n    at processTimers (node:internal/timers:529:7)"}' />

| 方法   | 观点    |
  | ------ | ------- |
  | method | opinion |

### 时间线 <Site url="utgd.net/" size="sm" />

<Route namespace="utgd" :data='{"path":"/timeline","categories":["new-media","popular"],"example":"/utgd/timeline","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["utgd.net/"]}],"name":"时间线","maintainers":["nczitzk"],"url":"utgd.net/","location":"timeline.ts"}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:66:18)\n    at listOnTimeout (node:internal/timers:594:17)\n    at processTimers (node:internal/timers:529:7)"}' />

### 专题 <Site url="utgd.net/topic" size="sm" />

<Route namespace="utgd" :data='{"path":"/topic/:topic?","categories":["new-media","popular"],"example":"/utgd/topic/在线阅读专栏","parameters":{"topic":"专题，默认为在线阅读专栏"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["utgd.net/topic","utgd.net/"],"target":"/topic/:topic"}],"name":"专题","maintainers":["nczitzk"],"url":"utgd.net/topic","description":"| 在线阅读专栏 | 卡片笔记专题 |\n  | ------------ | ------------ |\n\n  更多专栏请见 [专题广场](https://utgd.net/topic)","location":"topic.ts"}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:66:18)\n    at listOnTimeout (node:internal/timers:594:17)\n    at processTimers (node:internal/timers:529:7)"}' />

| 在线阅读专栏 | 卡片笔记专题 |
  | ------------ | ------------ |

  更多专栏请见 [专题广场](https://utgd.net/topic)

## V2EX <Site url="v2ex.com"/>

### 标签 <Site url="v2ex.com" size="sm" />

<Route namespace="v2ex" :data='{"path":"/tab/:tabid","categories":["bbs","popular"],"view":0,"example":"/v2ex/tab/hot","parameters":{"tabid":"tab标签ID,在 URL 可以找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"标签","maintainers":["liyefox"],"location":"tab.ts"}' :test='{"code":0}' />

### 最热 / 最新主题 <Site url="v2ex.com" size="sm" />

<Route namespace="v2ex" :data='{"path":"/topics/:type","categories":["bbs","popular"],"view":0,"example":"/v2ex/topics/latest","parameters":{"type":{"description":"主题类型","options":[{"value":"hot","label":"最热主题"},{"value":"latest","label":"最新主题"}],"default":"hot"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"最热 / 最新主题","maintainers":["WhiteWorld"],"location":"topics.ts"}' :test='{"code":0}' />

## Vertikal.net <Site url="vertikal.net"/>

### News Archive <Site url="vertikal.net/en/news" size="sm" />

<Route namespace="vertikal" :data='{"path":"/latest","categories":["new-media","popular"],"example":"/vertikal/latest","radar":[{"source":["vertikal.net/en/news","vertikal.net"]}],"name":"News Archive","maintainers":["TonyRL"],"url":"vertikal.net/en/news","location":"latest.ts"}' :test='{"code":0}' />

## Vimeo <Site url="vimeo.com"/>

### Category <Site url="vimeo.com" size="sm" />

<Route namespace="vimeo" :data='{"path":"/category/:category/:staffpicks?","categories":["social-media","popular"],"view":3,"example":"/vimeo/category/documentary/staffpicks","parameters":{"category":"Category name can get from url like `documentary` in [https://vimeo.com/categories/documentary/videos](https://vimeo.com/categories/documentary/videos) ","staffpicks":"type `staffpicks` to sort with staffpicks"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Category","maintainers":["MisteryMonster"],"location":"category.ts"}' :test='{"code":0}' />

### User Profile <Site url="vimeo.com" size="sm" />

<Route namespace="vimeo" :data='{"path":"/user/:username/:cat?","categories":["social-media","popular"],"view":3,"example":"/vimeo/user/filmsupply/picks","parameters":{"username":"In this example [https://vimeo.com/filmsupply](https://vimeo.com/filmsupply)  is `filmsupply`","cat":"deafult for all latest videos, others categories in this example such as `Docmentary`, `Narrative`, `Drama`. Set `picks` for promote orders, just orderd like web page. When `picks` added, published date won&#39;t show up"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User Profile","maintainers":["MisteryMonster"],"description":"::: tip Special category name attention\n  Some of the categories contain slash like `3D/CG` , must change the slash `/` to the vertical bar`|`.\n:::","location":"usr-videos.ts"}' :test='{"code":1,"message":"AssertionError: expected NaN to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1969)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)"}' />

::: tip Special category name attention
  Some of the categories contain slash like `3D/CG` , must change the slash `/` to the vertical bar`|`.
:::

## Voronoi <Site url="voronoiapp.com"/>

### Author Posts <Site url="voronoiapp.com" size="sm" />

<Route namespace="voronoiapp" :data='{"url":"voronoiapp.com","categories":["picture","popular"],"view":2,"maintainers":["Cesaryuan"],"name":"Author Posts","path":"/author/:username","radar":[{"source":["www.voronoiapp.com/author/:username"],"target":"/author/:username"}],"example":"/voronoiapp/author/visualcapitalist","parameters":{"username":"The username of the author"},"location":"author.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1975)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### Editor's Pick Posts <Site url="voronoiapp.com" size="sm" />

<Route namespace="voronoiapp" :data='{"url":"voronoiapp.com","categories":["picture","popular"],"view":2,"maintainers":["Cesaryuan"],"name":"Editor&#39;s Pick Posts","path":"/editors-pick/:category?","radar":[{"source":["www.voronoiapp.com/posts/editors-pick"],"target":"/editors-pick"}],"example":"/voronoiapp/editors-pick","parameters":{"category":{"description":"The category of the post","default":"","options":[{"value":"","label":"All categories"},{"value":"Automotive","label":"Automotive Data Insights - Explore a range of automotive data visualizations showcasing trends, innovations, and market dynamics in the automotive industry."},{"value":"Business","label":"Business Visualization Trends - Discover business visualizations covering market analysis, corporate strategies, and economic impacts across global industries."},{"value":"Climate","label":"Climate Data Visualized - Delve into climate change data visualizations that detail weather patterns, environmental impacts, and sustainability efforts worldwide."},{"value":"Demographics","label":"Demographic Visual Insights - Explore visual demographics data showcasing population trends, societal changes, and demographic analytics across regions."},{"value":"Economy","label":"Economic Visualization Insights - View economic visualizations illustrating financial markets, economic policies, and global economic health."},{"value":"Energy","label":"Energy Industry Visual Data - Discover the dynamics of global energy consumption, renewable sources, and energy market trends through vivid visualizations."},{"value":"Entertainment","label":"Entertainment Industry Data - Explore data visualizations in the entertainment industry, covering everything from box office trends to streaming service analytics."},{"value":"Geopolitics","label":"Geopolitical Data Visualized - Understand global geopolitical shifts and international relations through comprehensive geopolitical data visualizations."},{"value":"Healthcare","label":"Healthcare Insights Visualized - Analyze healthcare data visualizations spanning disease trends, healthcare services, and public health policies."},{"value":"Innovation","label":"Innovation in Data - Dive into innovation data visualizations highlighting technology advancements, R&D investments, and patent trends."},{"value":"Maps","label":"Cartographic Visual Insights - Discover cartographic visualizations that map everything from socio-economic data to geographical phenomena."},{"value":"Markets","label":"Market Trends Visualized - Visualize market trends, financial data, and economic forecasts through comprehensive market visualizations."},{"value":"Money","label":"Financial Data Visualized - Dive into financial visualizations depicting currency trends, investment flows, and banking statistics."},{"value":"Natural Resources","label":"Natural Resources Data - Explore visualizations of natural resources, detailing extraction, consumption, and conservation data."},{"value":"Politics","label":"Political Visual Insights - Analyze political trends, election results, and legislative impacts through detailed political visualizations."},{"value":"Public Opinion","label":"Public Opinion Trends - Discover visualizations of public opinion polls, social trends, and cultural shifts across different regions."},{"value":"Real Estate","label":"Real Estate Market Insights - Explore real estate market trends, property values, and urban development through targeted data visualizations."},{"value":"Sports","label":"Sports Data Insights - Analyze sports data visualizations that showcase performance statistics, team rankings, and sports economics."},{"value":"Technology","label":"Technology Trends Visualized - Dive into technology visualizations highlighting industry trends, tech adoption rates, and innovation impacts."},{"value":"Wealth","label":"Wealth Distribution Insights - Explore wealth distribution, financial health, and economic disparities through detailed visualizations."},{"value":"Travel","label":"Travel Trends Visualized - Discover travel trends, tourism statistics, and destination analytics through engaging visualizations."},{"value":"Nature","label":"Nature and Conservation Data - Delve into visualizations of ecological data, wildlife statistics, and conservation efforts around the globe."},{"value":"Space","label":"Space Exploration Data - Explore the universe with space data visualizations covering planetary science, space missions, and astronomical discoveries."},{"value":"Diagram","label":"Diagrammatic Data Insights - Understand complex data through diagrams that simplify information across various topics and industries."},{"value":"Other","label":"Diverse Data Visualizations - Explore a variety of data visualizations that don&#39;t neatly fit into any single category but offer unique insights."}]}},"location":"editors-pick.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1976)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### Home Posts <Site url="voronoiapp.com" size="sm" />

<Route namespace="voronoiapp" :data='{"url":"voronoiapp.com","categories":["picture","popular"],"view":2,"maintainers":["Cesaryuan"],"name":"Home Posts","path":"/home/:category?","description":"This is the home page of Voronoi App","radar":[{"source":["www.voronoiapp.com","www.voronoiapp.com/posts/voronoi"],"target":"/home"}],"example":"/voronoiapp/home","parameters":{"category":{"description":"The category of the post","default":"","options":[{"value":"","label":"All categories"},{"value":"Automotive","label":"Automotive Data Insights - Explore a range of automotive data visualizations showcasing trends, innovations, and market dynamics in the automotive industry."},{"value":"Business","label":"Business Visualization Trends - Discover business visualizations covering market analysis, corporate strategies, and economic impacts across global industries."},{"value":"Climate","label":"Climate Data Visualized - Delve into climate change data visualizations that detail weather patterns, environmental impacts, and sustainability efforts worldwide."},{"value":"Demographics","label":"Demographic Visual Insights - Explore visual demographics data showcasing population trends, societal changes, and demographic analytics across regions."},{"value":"Economy","label":"Economic Visualization Insights - View economic visualizations illustrating financial markets, economic policies, and global economic health."},{"value":"Energy","label":"Energy Industry Visual Data - Discover the dynamics of global energy consumption, renewable sources, and energy market trends through vivid visualizations."},{"value":"Entertainment","label":"Entertainment Industry Data - Explore data visualizations in the entertainment industry, covering everything from box office trends to streaming service analytics."},{"value":"Geopolitics","label":"Geopolitical Data Visualized - Understand global geopolitical shifts and international relations through comprehensive geopolitical data visualizations."},{"value":"Healthcare","label":"Healthcare Insights Visualized - Analyze healthcare data visualizations spanning disease trends, healthcare services, and public health policies."},{"value":"Innovation","label":"Innovation in Data - Dive into innovation data visualizations highlighting technology advancements, R&D investments, and patent trends."},{"value":"Maps","label":"Cartographic Visual Insights - Discover cartographic visualizations that map everything from socio-economic data to geographical phenomena."},{"value":"Markets","label":"Market Trends Visualized - Visualize market trends, financial data, and economic forecasts through comprehensive market visualizations."},{"value":"Money","label":"Financial Data Visualized - Dive into financial visualizations depicting currency trends, investment flows, and banking statistics."},{"value":"Natural Resources","label":"Natural Resources Data - Explore visualizations of natural resources, detailing extraction, consumption, and conservation data."},{"value":"Politics","label":"Political Visual Insights - Analyze political trends, election results, and legislative impacts through detailed political visualizations."},{"value":"Public Opinion","label":"Public Opinion Trends - Discover visualizations of public opinion polls, social trends, and cultural shifts across different regions."},{"value":"Real Estate","label":"Real Estate Market Insights - Explore real estate market trends, property values, and urban development through targeted data visualizations."},{"value":"Sports","label":"Sports Data Insights - Analyze sports data visualizations that showcase performance statistics, team rankings, and sports economics."},{"value":"Technology","label":"Technology Trends Visualized - Dive into technology visualizations highlighting industry trends, tech adoption rates, and innovation impacts."},{"value":"Wealth","label":"Wealth Distribution Insights - Explore wealth distribution, financial health, and economic disparities through detailed visualizations."},{"value":"Travel","label":"Travel Trends Visualized - Discover travel trends, tourism statistics, and destination analytics through engaging visualizations."},{"value":"Nature","label":"Nature and Conservation Data - Delve into visualizations of ecological data, wildlife statistics, and conservation efforts around the globe."},{"value":"Space","label":"Space Exploration Data - Explore the universe with space data visualizations covering planetary science, space missions, and astronomical discoveries."},{"value":"Diagram","label":"Diagrammatic Data Insights - Understand complex data through diagrams that simplify information across various topics and industries."},{"value":"Other","label":"Diverse Data Visualizations - Explore a variety of data visualizations that don&#39;t neatly fit into any single category but offer unique insights."}]}},"location":"home.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1977)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

This is the home page of Voronoi App

### Latest Posts <Site url="voronoiapp.com" size="sm" />

<Route namespace="voronoiapp" :data='{"url":"voronoiapp.com","categories":["picture","popular"],"view":2,"maintainers":["Cesaryuan"],"name":"Latest Posts","path":"/latest/:category?","radar":[{"source":["www.voronoiapp.com/posts/latest"],"target":"/latest"}],"example":"/voronoiapp/latest","parameters":{"category":{"description":"The category of the post","default":"","options":[{"value":"","label":"All categories"},{"value":"Automotive","label":"Automotive Data Insights - Explore a range of automotive data visualizations showcasing trends, innovations, and market dynamics in the automotive industry."},{"value":"Business","label":"Business Visualization Trends - Discover business visualizations covering market analysis, corporate strategies, and economic impacts across global industries."},{"value":"Climate","label":"Climate Data Visualized - Delve into climate change data visualizations that detail weather patterns, environmental impacts, and sustainability efforts worldwide."},{"value":"Demographics","label":"Demographic Visual Insights - Explore visual demographics data showcasing population trends, societal changes, and demographic analytics across regions."},{"value":"Economy","label":"Economic Visualization Insights - View economic visualizations illustrating financial markets, economic policies, and global economic health."},{"value":"Energy","label":"Energy Industry Visual Data - Discover the dynamics of global energy consumption, renewable sources, and energy market trends through vivid visualizations."},{"value":"Entertainment","label":"Entertainment Industry Data - Explore data visualizations in the entertainment industry, covering everything from box office trends to streaming service analytics."},{"value":"Geopolitics","label":"Geopolitical Data Visualized - Understand global geopolitical shifts and international relations through comprehensive geopolitical data visualizations."},{"value":"Healthcare","label":"Healthcare Insights Visualized - Analyze healthcare data visualizations spanning disease trends, healthcare services, and public health policies."},{"value":"Innovation","label":"Innovation in Data - Dive into innovation data visualizations highlighting technology advancements, R&D investments, and patent trends."},{"value":"Maps","label":"Cartographic Visual Insights - Discover cartographic visualizations that map everything from socio-economic data to geographical phenomena."},{"value":"Markets","label":"Market Trends Visualized - Visualize market trends, financial data, and economic forecasts through comprehensive market visualizations."},{"value":"Money","label":"Financial Data Visualized - Dive into financial visualizations depicting currency trends, investment flows, and banking statistics."},{"value":"Natural Resources","label":"Natural Resources Data - Explore visualizations of natural resources, detailing extraction, consumption, and conservation data."},{"value":"Politics","label":"Political Visual Insights - Analyze political trends, election results, and legislative impacts through detailed political visualizations."},{"value":"Public Opinion","label":"Public Opinion Trends - Discover visualizations of public opinion polls, social trends, and cultural shifts across different regions."},{"value":"Real Estate","label":"Real Estate Market Insights - Explore real estate market trends, property values, and urban development through targeted data visualizations."},{"value":"Sports","label":"Sports Data Insights - Analyze sports data visualizations that showcase performance statistics, team rankings, and sports economics."},{"value":"Technology","label":"Technology Trends Visualized - Dive into technology visualizations highlighting industry trends, tech adoption rates, and innovation impacts."},{"value":"Wealth","label":"Wealth Distribution Insights - Explore wealth distribution, financial health, and economic disparities through detailed visualizations."},{"value":"Travel","label":"Travel Trends Visualized - Discover travel trends, tourism statistics, and destination analytics through engaging visualizations."},{"value":"Nature","label":"Nature and Conservation Data - Delve into visualizations of ecological data, wildlife statistics, and conservation efforts around the globe."},{"value":"Space","label":"Space Exploration Data - Explore the universe with space data visualizations covering planetary science, space missions, and astronomical discoveries."},{"value":"Diagram","label":"Diagrammatic Data Insights - Understand complex data through diagrams that simplify information across various topics and industries."},{"value":"Other","label":"Diverse Data Visualizations - Explore a variety of data visualizations that don&#39;t neatly fit into any single category but offer unique insights."}]}},"location":"latest.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1978)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### Popular Posts <Site url="voronoiapp.com" size="sm" />

<Route namespace="voronoiapp" :data='{"url":"voronoiapp.com","categories":["picture","popular"],"view":2,"maintainers":["Cesaryuan"],"name":"Popular Posts","path":"/popular/:tab?/:time_range?/:category?","radar":[{"title":"Most Liked Posts","source":["www.voronoiapp.com/posts/most-popular"],"target":"/popular/most-popular"},{"title":"Most Discussed Posts","source":["www.voronoiapp.com/posts/most-discussed"],"target":"/popular/most-discussed"},{"title":"Most Viewed Posts","source":["www.voronoiapp.com/posts/most-viewed"],"target":"/popular/most-viewed"}],"parameters":{"tab":{"description":"The tab to get the popular posts from.","default":"most-popular","options":[{"value":"most-popular","label":"Most Liked"},{"value":"most-discussed","label":"Most Discussed"},{"value":"most-viewed","label":"Most Viewed"}]},"time_range":{"description":"Time range between which the posts are popular.","default":"MONTH","options":[{"value":"WEEK","label":"Last 7 days"},{"value":"MONTH","label":"Last 30 days"},{"value":"YEAR","label":"Last 12 months"},{"value":"ALL","label":"All time"}]},"category":{"description":"The category of the post","default":"","options":[{"value":"","label":"All categories"},{"value":"Automotive","label":"Automotive Data Insights - Explore a range of automotive data visualizations showcasing trends, innovations, and market dynamics in the automotive industry."},{"value":"Business","label":"Business Visualization Trends - Discover business visualizations covering market analysis, corporate strategies, and economic impacts across global industries."},{"value":"Climate","label":"Climate Data Visualized - Delve into climate change data visualizations that detail weather patterns, environmental impacts, and sustainability efforts worldwide."},{"value":"Demographics","label":"Demographic Visual Insights - Explore visual demographics data showcasing population trends, societal changes, and demographic analytics across regions."},{"value":"Economy","label":"Economic Visualization Insights - View economic visualizations illustrating financial markets, economic policies, and global economic health."},{"value":"Energy","label":"Energy Industry Visual Data - Discover the dynamics of global energy consumption, renewable sources, and energy market trends through vivid visualizations."},{"value":"Entertainment","label":"Entertainment Industry Data - Explore data visualizations in the entertainment industry, covering everything from box office trends to streaming service analytics."},{"value":"Geopolitics","label":"Geopolitical Data Visualized - Understand global geopolitical shifts and international relations through comprehensive geopolitical data visualizations."},{"value":"Healthcare","label":"Healthcare Insights Visualized - Analyze healthcare data visualizations spanning disease trends, healthcare services, and public health policies."},{"value":"Innovation","label":"Innovation in Data - Dive into innovation data visualizations highlighting technology advancements, R&D investments, and patent trends."},{"value":"Maps","label":"Cartographic Visual Insights - Discover cartographic visualizations that map everything from socio-economic data to geographical phenomena."},{"value":"Markets","label":"Market Trends Visualized - Visualize market trends, financial data, and economic forecasts through comprehensive market visualizations."},{"value":"Money","label":"Financial Data Visualized - Dive into financial visualizations depicting currency trends, investment flows, and banking statistics."},{"value":"Natural Resources","label":"Natural Resources Data - Explore visualizations of natural resources, detailing extraction, consumption, and conservation data."},{"value":"Politics","label":"Political Visual Insights - Analyze political trends, election results, and legislative impacts through detailed political visualizations."},{"value":"Public Opinion","label":"Public Opinion Trends - Discover visualizations of public opinion polls, social trends, and cultural shifts across different regions."},{"value":"Real Estate","label":"Real Estate Market Insights - Explore real estate market trends, property values, and urban development through targeted data visualizations."},{"value":"Sports","label":"Sports Data Insights - Analyze sports data visualizations that showcase performance statistics, team rankings, and sports economics."},{"value":"Technology","label":"Technology Trends Visualized - Dive into technology visualizations highlighting industry trends, tech adoption rates, and innovation impacts."},{"value":"Wealth","label":"Wealth Distribution Insights - Explore wealth distribution, financial health, and economic disparities through detailed visualizations."},{"value":"Travel","label":"Travel Trends Visualized - Discover travel trends, tourism statistics, and destination analytics through engaging visualizations."},{"value":"Nature","label":"Nature and Conservation Data - Delve into visualizations of ecological data, wildlife statistics, and conservation efforts around the globe."},{"value":"Space","label":"Space Exploration Data - Explore the universe with space data visualizations covering planetary science, space missions, and astronomical discoveries."},{"value":"Diagram","label":"Diagrammatic Data Insights - Understand complex data through diagrams that simplify information across various topics and industries."},{"value":"Other","label":"Diverse Data Visualizations - Explore a variety of data visualizations that don&#39;t neatly fit into any single category but offer unique insights."}]}},"example":"/voronoiapp/popular/most-popular/MONTH","location":"popular.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1979)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### Search Keyword Posts <Site url="voronoiapp.com" size="sm" />

<Route namespace="voronoiapp" :data='{"url":"voronoiapp.com","categories":["picture","popular"],"view":2,"maintainers":["Cesaryuan"],"name":"Search Keyword Posts","path":"/search/:keyword","radar":[{"source":["www.voronoiapp.com/explore"]}],"example":"/voronoiapp/search/china","parameters":{"keyword":"The keyword to search for"},"location":"search.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1980)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

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
| `excludeReplies`               | Exclude replies, only available in `/twitter/user`                                                                                   | `0`/`1`/`true`/`false` | `false`                                   |
| `includeRts`                   | Include retweets, only available in `/twitter/user`                                                                                  | `0`/`1`/`true`/`false` | `true`                                    |
| `forceWebApi`                  | Force using Web API even if Developer API is configured, only available in `/twitter/user` and `/twitter/keyword`                    | `0`/`1`/`true`/`false` | `false`                                   |
| `count`                        | `count` parameter passed to Twitter API, only available in `/twitter/user`                                                           | Unspecified/Integer    | Unspecified                               |
| `onlyMedia`                    | Only get tweets with a media                                                                                                             | `0`/`1`/`true`/`false` | `false`                 |

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

<Route namespace="twitter" :data='{"path":"/keyword/:keyword/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/twitter/keyword/RSSHub","parameters":{"keyword":"keyword","routeParams":"extra parameters, see the table above"},"features":{"requireConfig":[{"name":"TWITTER_USERNAME","description":"Please see above for details."},{"name":"TWITTER_PASSWORD","description":"Please see above for details."},{"name":"TWITTER_AUTH_TOKEN","description":"Please see above for details."},{"name":"TWITTER_THIRD_PARTY_API","description":"Please see above for details."}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Keyword","maintainers":["DIYgod","yindaheng98","Rongronggg9","pseudoyu"],"radar":[{"source":["x.com/search"]}],"location":"keyword.ts"}' :test='undefined' />

### List timeline <Site url="x.com" size="sm" />

<Route namespace="twitter" :data='{"path":"/list/:id/:routeParams?","categories":["social-media","popular"],"example":"/twitter/list/1502570462752219136","parameters":{"id":"list id, get from url","routeParams":"extra parameters, see the table above"},"features":{"requireConfig":[{"name":"TWITTER_AUTH_TOKEN","description":"Please see above for details."},{"name":"TWITTER_THIRD_PARTY_API","description":"Please see above for details."}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"List timeline","maintainers":["DIYgod","xyqfer","pseudoyu"],"radar":[{"source":["x.com/i/lists/:id"],"target":"/list/:id"}],"location":"list.ts"}' :test='undefined' />

### User media <Site url="x.com" size="sm" />

<Route namespace="twitter" :data='{"path":"/media/:id/:routeParams?","categories":["social-media","popular"],"view":2,"example":"/twitter/media/_RSSHub","parameters":{"id":"username; in particular, if starts with `+`, it will be recognized as a [unique ID](https://github.com/DIYgod/RSSHub/issues/12221), e.g. `+44196397`","routeParams":"extra parameters, see the table above."},"features":{"requireConfig":[{"name":"TWITTER_USERNAME","description":"Please see above for details."},{"name":"TWITTER_PASSWORD","description":"Please see above for details."},{"name":"TWITTER_AUTH_TOKEN","description":"Please see above for details."}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User media","maintainers":["DIYgod","yindaheng98","Rongronggg9"],"radar":[{"source":["x.com/:id/media"],"target":"/media/:id"}],"location":"media.ts"}' :test='undefined' />

### User timeline <Site url="x.com" size="sm" />

<Route namespace="twitter" :data='{"path":"/user/:id/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/twitter/user/_RSSHub","parameters":{"id":"username; in particular, if starts with `+`, it will be recognized as a [unique ID](https://github.com/DIYgod/RSSHub/issues/12221), e.g. `+44196397`","routeParams":"extra parameters, see the table above; particularly when `routeParams=exclude_replies`, replies are excluded; `routeParams=exclude_rts` excludes retweets,`routeParams=exclude_rts_replies` exclude replies and retweets; for default include all."},"features":{"requireConfig":[{"name":"TWITTER_USERNAME","description":"Please see above for details."},{"name":"TWITTER_PASSWORD","description":"Please see above for details."},{"name":"TWITTER_AUTHENTICATION_SECRET","description":"TOTP 2FA secret, please see above for details.","optional":true},{"name":"TWITTER_AUTH_TOKEN","description":"Please see above for details."},{"name":"TWITTER_THIRD_PARTY_API","description":"Use third-party API to query twitter data","optional":true}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User timeline","maintainers":["DIYgod","yindaheng98","Rongronggg9","CaoMeiYouRen","pseudoyu"],"radar":[{"source":["x.com/:id"],"target":"/user/:id"}],"location":"user.ts"}' :test='undefined' />

## Yahoo <Site url="hk.news.yahoo.com"/>

### News <Site url="news.yahoo.com/" size="sm" />

<Route namespace="yahoo" :data='{"path":"/news/:region/:category?","categories":["new-media","popular"],"example":"/yahoo/news/hk/world","parameters":{"region":"Region, `hk/tw/au/ca/fr/malaysia/nz/sg/uk/en(us)`, the part represented by the asterisk (*) in *.news.yahoo.com","category":"Category, The part represented by the asterisk (*) in .news.yahoo.com/rss/*, region \"hk/tw\" differs, see the description below"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["news.yahoo.com/"]}],"name":"News","maintainers":["KeiLongW","williamgateszhao"],"url":"news.yahoo.com/","description":"\n`Region`\n\nSupport all regions represented by the asterisk (*) in *.news.yahoo.com, such as hk/tw/au/ca/fr/malaysia/nz/sg/uk/en(us). For www.yahoo.com, use en or us. Sites with news domains other than *.news.yahoo.com, such as de.nachrichten.yahoo.com or news.yahoo.co.jp, are not supported.\n\n`Category`\n\nThe parsing method for Yahoo Hong Kong and Taiwan is quite unique. All supported categories are as follows\n\nCategory for hk.news.yahoo.com (hongkong)\n\n| 全部     | 港聞      | 兩岸國際 | 財經      | 娛樂          | 體育   | 健康   | 親子       | 副刊       |\n| ------- | --------- | -------- | -------- | ------------- | ------ | ------ | --------- | ---------- |\n| (empty) | hong-kong | world    | business | entertainment | sports | health | parenting | supplement |\n\nCategory for tw.news.yahoo.com (taiwan)\n\n| 全部     | 政治     | 財經    | 娛樂          | 運動    | 社會地方 | 國際   | 生活      | 健康   | 科技        | 品味  |\n| ------- | -------- | ------- | ------------- | ------ | -------- | ----- | --------- | ------ | ---------- | ----- |\n| (empty) | politics | finance | entertainment | sports | society  | world | lifestyle | health | technology | style |\n\nOther Yahoo news is fetched from the RSS provided by Yahoo. Please refer to the categories displayed on the pages of *.news.yahoo.com (for example, \"world\"), and try to access *.news.yahoo.com/rss/world to see if it is accessible and contains recent news (some categories exist but are not updated). If it is accessible and has recent news, then that category can be used on the corresponding site. For example, the available categories for news.yahoo.com are as follows\n\nCategory for news.yahoo.com (US)\n\n| All     | US | Politics | World | Science | Tech |\n| ------- | -- | -------- | ----- | ------- | ---- |\n| (empty) | us | politics | world | science | tech |\n\nTo give another example, since uk.news.yahoo.com/rss/ukoriginal is accessible and has recent news, /yahoo/news/uk/ukoriginal is a valid RSSHub route.\n\n`author`\n\nFor Yahoo Hong Kong and Yahoo Taiwan, please use another \"news source\" route.\n\nFor other Yahoo News, this route&#39;s RSS provides the author field. You can use RSSHub&#39;s built-in \"content filtering\" feature. For example, /yahoo-wg/news/tw/technology?filter_author=Yahoo%20Tech|Engadget can filter out news with authors containing Yahoo Tech or Engadget from Yahoo Taiwan&#39;s technology news, which is the Chinese version of Engadget.\n","zh":{"name":"新闻","description":"\n`区域 Region`\n\n支持所有 *.news.yahoo.com 中*号所代表的区域, 例如`hk/tw/au/ca/fr/malaysia/nz/sg/uk/en(us)`, 其中 www.yahoo.com 用 en 或 us 来表示。不支持新闻域名不为 *.news.yahoo.com 的站点如 de.nachrichten.yahoo.com 或 news.yahoo.co.jp。\n\n`分类 Category`\n\n香港和台湾雅虎的读取方式比较特别, 所有支持的 category 如下\n\nhk.news.yahoo.com (香港) 所支持的分类\n\n| 全部     | 港聞      | 兩岸國際 | 財經      | 娛樂          | 體育   | 健康   | 親子       | 副刊       |\n| ------- | --------- | -------- | -------- | ------------- | ------ | ------ | --------- | ---------- |\n| （留空） | hong-kong | world    | business | entertainment | sports | health | parenting | supplement |\n\ntw.news.yahoo.com (台湾) 所支持的分类\n\n| 全部     | 政治     | 財經    | 娛樂          | 運動    | 社會地方 | 國際   | 生活      | 健康   | 科技        | 品味  |\n| ------- | -------- | ------- | ------------- | ------ | -------- | ----- | --------- | ------ | ---------- | ----- |\n| （留空） | politics | finance | entertainment | sports | society  | world | lifestyle | health | technology | style |\n\n其他雅虎新闻读取自 yahoo 提供的 RSS, 请根据 *.news.yahoo.com 的页面上展示的分类(例如 world ), 尝试 *.news.yahoo.com/rss/world 能否访问并且有近期的新闻(有些分类存在但未更新), 如果可以的话则该分类可以用在相应站点, 例如 news.yahoo.com 可用的分类如下\n\nnews.yahoo.com (美国) 所支持的分类\n\n| All     | US | Politics | World | Science | Tech |\n| ------- | -- | -------- | ----- | ------- | ---- |\n| (留空)  | us | politics | world | science | tech |\n\n再举例, 由于 uk.news.yahoo.com/rss/ukoriginal 可以访问并且有较新的新闻, 所以 /yahoo/news/uk/ukoriginal 是一个有效的RSSHub路由。\n\n`作者 author`\n\n对于香港和台湾雅虎, 请使用另一个\"新聞來源\"路由。\n\n对于其他雅虎新闻, 本路由的 RSS 中提供了 author 字段, 可使用 RSSHub 的内置\"内容过滤\"功能, 例如 /yahoo-wg/news/tw/technology?filter_author=Yahoo%20Tech|Engadget 可从台湾雅虎的科技新闻中过滤出作者名称中包含 Yahoo Tech 或者 Engadget 的新闻, 即瘾科技中文版。\n"},"location":"news/index.ts"}' :test='{"code":0}' />


`Region`

Support all regions represented by the asterisk (*) in *.news.yahoo.com, such as hk/tw/au/ca/fr/malaysia/nz/sg/uk/en(us). For www.yahoo.com, use en or us. Sites with news domains other than *.news.yahoo.com, such as de.nachrichten.yahoo.com or news.yahoo.co.jp, are not supported.

`Category`

The parsing method for Yahoo Hong Kong and Taiwan is quite unique. All supported categories are as follows

Category for hk.news.yahoo.com (hongkong)

| 全部     | 港聞      | 兩岸國際 | 財經      | 娛樂          | 體育   | 健康   | 親子       | 副刊       |
| ------- | --------- | -------- | -------- | ------------- | ------ | ------ | --------- | ---------- |
| (empty) | hong-kong | world    | business | entertainment | sports | health | parenting | supplement |

Category for tw.news.yahoo.com (taiwan)

| 全部     | 政治     | 財經    | 娛樂          | 運動    | 社會地方 | 國際   | 生活      | 健康   | 科技        | 品味  |
| ------- | -------- | ------- | ------------- | ------ | -------- | ----- | --------- | ------ | ---------- | ----- |
| (empty) | politics | finance | entertainment | sports | society  | world | lifestyle | health | technology | style |

Other Yahoo news is fetched from the RSS provided by Yahoo. Please refer to the categories displayed on the pages of *.news.yahoo.com (for example, "world"), and try to access *.news.yahoo.com/rss/world to see if it is accessible and contains recent news (some categories exist but are not updated). If it is accessible and has recent news, then that category can be used on the corresponding site. For example, the available categories for news.yahoo.com are as follows

Category for news.yahoo.com (US)

| All     | US | Politics | World | Science | Tech |
| ------- | -- | -------- | ----- | ------- | ---- |
| (empty) | us | politics | world | science | tech |

To give another example, since uk.news.yahoo.com/rss/ukoriginal is accessible and has recent news, /yahoo/news/uk/ukoriginal is a valid RSSHub route.

`author`

For Yahoo Hong Kong and Yahoo Taiwan, please use another "news source" route.

For other Yahoo News, this route's RSS provides the author field. You can use RSSHub's built-in "content filtering" feature. For example, /yahoo-wg/news/tw/technology?filter_author=Yahoo%20Tech|Engadget can filter out news with authors containing Yahoo Tech or Engadget from Yahoo Taiwan's technology news, which is the Chinese version of Engadget.


### 合作媒體 <Site url="hk.news.yahoo.com" size="sm" />

<Route namespace="yahoo" :data='{"path":"/news/list/:region/:listId","categories":["new-media","popular"],"example":"/yahoo/news/list/hk/09fcf7b0-0ab2-11e8-bf1f-4d52d4f79454","parameters":{"region":"`hk`, `tw`","listId":"見下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["hk.news.yahoo.com/"]},{"source":["tw.news.yahoo.com/"]}],"name":"合作媒體","maintainers":["TonyRL","williamgateszhao","tpnonthealps"],"description":"\n| 合作媒體 (`HK`) | `:listId`                              |\n| ----------------- | ---------------------------------------- |\n| 東方日報          | `33ddd580-0ab3-11e8-bfe1-4b555fb1e429` |\n| now.com           | `01b4d760-0ab4-11e8-af3a-54037d3dced3` |\n| am730             | `c4842090-0ab2-11e8-af7f-041a72ce7398` |\n| BBC               | `4d3fc9a0-fac8-11e9-87f2-564ca250983e` |\n| 信報財經新聞      | `5a8a0aa0-0ab3-11e8-b3dc-d990c79d6cb1` |\n| 香港電台          | `b4bfc2d0-0ab3-11e8-bf9f-c888fc09923f` |\n| 法新社            | `1cc44280-facb-11e9-ad7c-f3ba971275c8` |\n| Bloomberg         | `40023670-facc-11e9-9dde-9175ff306602` |\n| 香港動物報        | `6058fa9c-d74d-487a-8b49-aa99a2a2978e` |","location":"news/listid.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 2103)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />


| 合作媒體 (`HK`) | `:listId`                              |
| ----------------- | ---------------------------------------- |
| 東方日報          | `33ddd580-0ab3-11e8-bfe1-4b555fb1e429` |
| now.com           | `01b4d760-0ab4-11e8-af3a-54037d3dced3` |
| am730             | `c4842090-0ab2-11e8-af7f-041a72ce7398` |
| BBC               | `4d3fc9a0-fac8-11e9-87f2-564ca250983e` |
| 信報財經新聞      | `5a8a0aa0-0ab3-11e8-b3dc-d990c79d6cb1` |
| 香港電台          | `b4bfc2d0-0ab3-11e8-bf9f-c888fc09923f` |
| 法新社            | `1cc44280-facb-11e9-ad7c-f3ba971275c8` |
| Bloomberg         | `40023670-facc-11e9-9dde-9175ff306602` |
| 香港動物報        | `6058fa9c-d74d-487a-8b49-aa99a2a2978e` |

### 新聞來源列表 <Site url="hk.news.yahoo.com" size="sm" />

<Route namespace="yahoo" :data='{"path":"/news/providers/:region/list","categories":["new-media","popular"],"example":"/yahoo/news/providers/tw/list","parameters":{"region":"地区, 同路由\"新闻来源\"中的支持地区, 即 hk 或 tw"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["hk.news.yahoo.com/"]},{"source":["tw.news.yahoo.com/"]}],"name":"新聞來源列表","maintainers":["TonyRL","williamgateszhao"],"location":"news/provider-helper.ts"}' :test='{"code":1,"message":"AssertionError: expected [ …(105) ] to not include &#39;https://tw.news.yahoo.com/taiwantimes…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:1143:17)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:920:17)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@5.1.2/node_modules/chai/chai.js:1610:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 2104)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)"}' />

### 新聞來源 <Site url="hk.news.yahoo.com" size="sm" />

<Route namespace="yahoo" :data='{"path":"/news/provider/:region/:providerId","categories":["new-media","popular"],"example":"/yahoo/news/provider/tw/yahoo_tech_tw_942","parameters":{"region":"地區, hk 或 tw, 分别表示香港雅虎和台湾雅虎","providerId":"新聞來源 ID, 可透過路由\"新聞來源列表\"獲得"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["hk.news.yahoo.com/"]},{"source":["tw.news.yahoo.com/"]}],"name":"新聞來源","maintainers":["TonyRL","williamgateszhao"],"description":"\n`Region`\n\n| 香港 | 台灣 |\n| ---- | ---- |\n| hk   | tw   |\n\n`ProviderId`\n\n除了可以通过路由\"新聞來源列表\"获得外, 也可通过 hk.news.yahoo.com/archive 和 tw.news.yahoo.com/archive 选择\"新闻来源\"后通过页面 Url 来获得。\n\n例如 hk.news.yahoo.com/yahoo_movies_hk_660--所有分類/archive, `yahoo_movies_hk_660` 就是 ProviderId 。\n","location":"news/provider.ts"}' :test='{"code":0}' />


`Region`

| 香港 | 台灣 |
| ---- | ---- |
| hk   | tw   |

`ProviderId`

除了可以通过路由"新聞來源列表"获得外, 也可通过 hk.news.yahoo.com/archive 和 tw.news.yahoo.com/archive 选择"新闻来源"后通过页面 Url 来获得。

例如 hk.news.yahoo.com/yahoo_movies_hk_660--所有分類/archive, `yahoo_movies_hk_660` 就是 ProviderId 。


## yande.re <Site url="yande.re"/>

yande post

### Popular Recent Posts <Site url="yande.re" size="sm" />

<Route namespace="yande" :data='{"path":"/post/popular_recent/:period?","categories":["picture","popular"],"view":2,"example":"/yande/post/popular_recent/1d","parameters":{"period":{"description":"展示时间","options":[{"value":"1d","label":"最近 24 小时"},{"value":"1w","label":"最近一周"},{"value":"1m","label":"最近一月"},{"value":"1y","label":"最近一年"}],"default":"1d"}},"radar":[{"source":["yande.re/post"]}],"name":"Popular Recent Posts","maintainers":["magic-akari","SettingDust","fashioncj","NekoAria"],"description":"| 最近 24 小时    | 最近一周     | 最近一月    | 最近一年     |\n  | ------- | -------- | ------- | -------- |\n  | 1d | 1w | 1m | 1y |","location":"post.ts"}' :test='{"code":0}' />

| 最近 24 小时    | 最近一周     | 最近一月    | 最近一年     |
  | ------- | -------- | ------- | -------- |
  | 1d | 1w | 1m | 1y |

## YouTube <Site url="youtube.com"/>

### Channel with user handle <Site url="youtube.com" size="sm" />

<Route namespace="youtube" :data='{"path":"/user/:username/:embed?","categories":["social-media","popular"],"view":3,"example":"/youtube/user/@JFlaMusic","parameters":{"username":"YouTuber handle with @","embed":"Default to embed the video, set to any value to disable embedding"},"features":{"requireConfig":[{"name":"YOUTUBE_KEY","description":" YouTube API Key, support multiple keys, split them with `,`, [API Key application](https://console.developers.google.com/)"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.youtube.com/user/:username","www.youtube.com/:username"],"target":"/user/:username"}],"name":"Channel with user handle","maintainers":["DIYgod"],"location":"user.ts"}' :test='undefined' />

### Playlist <Site url="youtube.com" size="sm" />

<Route namespace="youtube" :data='{"path":"/playlist/:id/:embed?","categories":["social-media","popular"],"view":3,"example":"/youtube/playlist/PLqQ1RwlxOgeLTJ1f3fNMSwhjVgaWKo_9Z","parameters":{"id":"YouTube playlist id","embed":"Default to embed the video, set to any value to disable embedding"},"features":{"requireConfig":[{"name":"YOUTUBE_KEY","description":" YouTube API Key, support multiple keys, split them with `,`, [API Key application](https://console.developers.google.com/)"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Playlist","maintainers":["HenryQW"],"location":"playlist.ts"}' :test='undefined' />

## 阿基米德 FM <Site url="m.ajmide.com"/>

### 播客 <Site url="m.ajmide.com" size="sm" />

<Route namespace="ajmide" :data='{"path":"/:id","categories":["multimedia","popular"],"view":4,"example":"/ajmide/10603594","parameters":{"id":"播客 id，可以从播客页面 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"播客","maintainers":["Fatpandac"],"location":"index.ts"}' :test='{"code":0}' />

## 阿里研究院 <Site url="aliresearch.com"/>

### 资讯 <Site url="aliresearch.com/cn/information" size="sm" />

<Route namespace="aliresearch" :data='{"path":"/information/:type?","categories":["new-media","popular"],"example":"/aliresearch/information","parameters":{"type":"类型，见下表，默认为新闻"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["aliresearch.com/cn/information","aliresearch.com/"],"target":"/information"}],"name":"资讯","maintainers":["nczitzk"],"url":"aliresearch.com/cn/information","description":"| 新闻 | 观点 | 案例 |\n  | ---- | ---- | ---- |","location":"information.ts"}' :test='{"code":0}' />

| 新闻 | 观点 | 案例 |
  | ---- | ---- | ---- |

## 巴哈姆特電玩資訊站 <Site url="acg.gamer.com.tw"/>

### GNN 新聞 <Site url="acg.gamer.com.tw" size="sm" />

<Route namespace="gamer" :data='{"path":"/gnn/:category?","categories":["anime","popular"],"view":0,"example":"/gamer/gnn/1","parameters":{"category":{"description":"版塊","options":[{"value":"1","label":"PC"},{"value":"3","label":"TV 掌機"},{"value":"4","label":"手機遊戲"},{"value":"5","label":"動漫畫"},{"value":"9","label":"主題報導"},{"value":"11","label":"活動展覽"},{"value":"13","label":"電競"},{"value":"ns","label":"Switch"},{"value":"ps5","label":"PS5"},{"value":"ps4","label":"PS4"},{"value":"xbone","label":"XboxOne"},{"value":"xbsx","label":"XboxSX"},{"value":"pc","label":"PC 單機"},{"value":"olg","label":"PC 線上"},{"value":"ios","label":"iOS"},{"value":"android","label":"Android"},{"value":"web","label":"Web"},{"value":"comic","label":"漫畫"},{"value":"anime","label":"動畫"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"GNN 新聞","maintainers":["Arracc","ladeng07","pseudoyu"],"description":"缺省為首頁","location":"gnn-index.ts"}' :test='{"code":0}' />

缺省為首頁

### 動畫瘋 - 動畫 <Site url="acg.gamer.com.tw" size="sm" />

<Route namespace="gamer" :data='{"path":"/ani/anime/:sn","categories":["anime","popular"],"view":3,"example":"/gamer/ani/anime/36868","parameters":{"sn":"動畫 sn，在 URL 可以找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ani.gamer.com.tw/"],"target":"/anime/:sn"}],"name":"動畫瘋 - 動畫","maintainers":["maple3142","pseudoyu"],"location":"ani/anime.ts"}' :test='{"code":0}' />

### 動畫瘋 - 最後更新 <Site url="ani.gamer.com.tw/" size="sm" />

<Route namespace="gamer" :data='{"path":"/ani/new_anime","categories":["anime","popular"],"view":3,"example":"/gamer/ani/new_anime","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ani.gamer.com.tw/"],"target":"/new_anime"}],"name":"動畫瘋 - 最後更新","maintainers":["maple3142","pseudoyu"],"url":"ani.gamer.com.tw/","location":"ani/new-anime.ts"}' :test='{"code":1,"message":"AssertionError: expected -29942838141 to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 654)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)"}' />

### 熱門推薦 <Site url="acg.gamer.com.tw" size="sm" />

<Route namespace="gamer" :data='{"path":"/hot/:bsn","categories":["anime","popular"],"view":0,"example":"/gamer/hot/47157","parameters":{"bsn":"板塊 id，在 URL 可以找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"熱門推薦","maintainers":["nczitzk","TonyRL"],"location":"hot.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 652)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

## 白话区块链 <Site url="hellobtc.com"/>

### 科普 <Site url="hellobtc.com" size="sm" />

<Route namespace="hellobtc" :data='{"path":"/kepu/:channel?","categories":["new-media","popular"],"example":"/hellobtc/kepu/latest","parameters":{"channel":"类型，见下表，默认为最新"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"科普","maintainers":["Fatpandac"],"description":"| latest | bitcoin | ethereum | defi | inter_blockchain | mining | safety | satoshi_nakomoto | public_blockchain |\n  | ------ | ------- | -------- | ---- | ----------------- | ------ | ------ | ----------------- | ------------------ |\n  | 最新   | 比特币  | 以太坊   | DeFi | 跨链              | 挖矿   | 安全   | 中本聪            | 公链               |","location":"kepu.ts"}' :test='{"code":0}' />

| latest | bitcoin | ethereum | defi | inter_blockchain | mining | safety | satoshi_nakomoto | public_blockchain |
  | ------ | ------- | -------- | ---- | ----------------- | ------ | ------ | ----------------- | ------------------ |
  | 最新   | 比特币  | 以太坊   | DeFi | 跨链              | 挖矿   | 安全   | 中本聪            | 公链               |

### 快讯 <Site url="hellobtc.com/news" size="sm" />

<Route namespace="hellobtc" :data='{"path":"/news","categories":["new-media","popular"],"example":"/hellobtc/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["hellobtc.com/news"]}],"name":"快讯","maintainers":["Fatpandac"],"url":"hellobtc.com/news","location":"news.ts"}' :test='{"code":0}' />

### 首页 <Site url="hellobtc.com" size="sm" />

<Route namespace="hellobtc" :data='{"path":"/information/:channel?","categories":["new-media","popular"],"example":"/hellobtc/information/latest","parameters":{"channel":"类型，可填 `latest` 和 `application` 及最新和应用，默认为最新"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"首页","maintainers":["Fatpandac"],"location":"information.ts"}' :test='{"code":0}' />

## 百度 <Site url="www.baidu.com"/>

### 首页指数 <Site url="gushitong.baidu.com/" size="sm" />

<Route namespace="baidu" :data='{"path":"/gushitong/index","categories":["finance","popular"],"view":5,"example":"/baidu/gushitong/index","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gushitong.baidu.com/"]}],"name":"首页指数","maintainers":["CaoMeiYouRen"],"url":"gushitong.baidu.com/","location":"gushitong/index.ts"}' :test='{"code":0}' />

## 報導者 <Site url="twreporter.org"/>

### 分類 <Site url="twreporter.org/" size="sm" />

<Route namespace="twreporter" :data='{"path":"/category/:category","categories":["new-media","popular"],"example":"/twreporter/category/world","parameters":{"category":"Category"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["twreporter.org/:category"]}],"name":"分類","maintainers":["emdoe"],"url":"twreporter.org/","location":"category.ts"}' :test='{"code":0}' />

### 最新 <Site url="twreporter.org/" size="sm" />

<Route namespace="twreporter" :data='{"path":"/newest","categories":["new-media","popular"],"example":"/twreporter/newest","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["twreporter.org/"]}],"name":"最新","maintainers":["emdoe"],"url":"twreporter.org/","location":"newest.ts"}' :test='{"code":0}' />

## 北京天文馆 <Site url="www.bjp.org.cn"/>

### 每日一图 <Site url="bjp.org.cn/APOD/today.shtml" size="sm" />

<Route namespace="bjp" :data='{"path":"/apod","categories":["picture","popular"],"view":2,"example":"/bjp/apod","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["bjp.org.cn/APOD/today.shtml","bjp.org.cn/APOD/list.shtml","bjp.org.cn/"]}],"name":"每日一图","maintainers":["HenryQW"],"url":"bjp.org.cn/APOD/today.shtml","location":"apod.ts"}' :test='{"code":0}' />

## 哔哩哔哩 bilibili <Site url="www.bilibili.com"/>

### UP 主动态 <Site url="www.bilibili.com" size="sm" />

<Route namespace="bilibili" :data='{"path":"/user/dynamic/:uid/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/bilibili/user/dynamic/2267573","parameters":{"uid":"用户 id, 可在 UP 主主页中找到","routeParams":"\n| 键         | 含义                              | 接受的值       | 默认值 |\n| ---------- | --------------------------------- | -------------- | ------ |\n| showEmoji  | 显示或隐藏表情图片                | 0/1/true/false | false  |\n| embed      | 默认开启内嵌视频                  | 0/1/true/false |  true  |\n| useAvid    | 视频链接使用 AV 号 (默认为 BV 号) | 0/1/true/false | false  |\n| directLink | 使用内容直链                      | 0/1/true/false | false  |\n| hideGoods  | 隐藏带货动态                      | 0/1/true/false | false  |\n| offset     | 偏移状态                         | string         | \"\"  |\n\n用例：`/bilibili/user/dynamic/2267573/showEmoji=1&embed=0&useAvid=1`"},"features":{"requireConfig":[{"name":"BILIBILI_COOKIE_*","optional":true,"description":"如果没有此配置，那么必须开启 puppeteer 支持；BILIBILI_COOKIE_{uid}: 用于用户关注动态系列路由，对应 uid 的 b 站用户登录后的 Cookie 值，`{uid}` 替换为 uid，如 `BILIBILI_COOKIE_2267573`，获取方式：\n1.  打开 [https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new?uid=0&type=8](https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new?uid=0&type=8)\n2.  打开控制台，切换到 Network 面板，刷新\n3.  点击 dynamic_new 请求，找到 Cookie\n4.  视频和专栏，UP 主粉丝及关注只要求 `SESSDATA` 字段，动态需复制整段 Cookie"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["space.bilibili.com/:uid"],"target":"/user/dynamic/:uid"}],"name":"UP 主动态","maintainers":["DIYgod","zytomorrow","CaoMeiYouRen","JimenezLi"],"location":"dynamic.ts"}' :test='{"code":0}' />

### UP 主投稿 <Site url="www.bilibili.com" size="sm" />

<Route namespace="bilibili" :data='{"path":"/user/video/:uid/:embed?","categories":["social-media","popular"],"view":3,"example":"/bilibili/user/video/2267573","parameters":{"uid":"用户 id, 可在 UP 主主页中找到","embed":"默认为开启内嵌视频, 任意值为关闭"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["space.bilibili.com/:uid"],"target":"/user/video/:uid"}],"name":"UP 主投稿","maintainers":["DIYgod","Konano","pseudoyu"],"location":"video.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 156)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### 番剧 <Site url="www.bilibili.com" size="sm" />

<Route namespace="bilibili" :data='{"path":"/bangumi/media/:mediaid/:embed?","name":"番剧","parameters":{"mediaid":"番剧媒体 id, 番剧主页 URL 中获取","embed":"默认为开启内嵌视频, 任意值为关闭"},"example":"/bilibili/bangumi/media/9192","categories":["social-media","popular"],"view":3,"maintainers":["DIYgod","nuomi1"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportRadar":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"location":"bangumi.ts"}' :test='{"code":0}' />

### 排行榜 <Site url="www.bilibili.com" size="sm" />

<Route namespace="bilibili" :data='{"path":"/ranking/:rid_index?/:embed?/:redirect1?/:redirect2?","name":"排行榜","maintainers":["DIYgod","hyoban"],"categories":["social-media","popular"],"view":3,"example":"/bilibili/ranking/0","parameters":{"rid_index":{"description":"排行榜分区 id 序号","default":"0","options":[{"value":"0","label":"全站"},{"value":"3","label":"国创相关"},{"value":"5","label":"动画"},{"value":"6","label":"音乐"},{"value":"7","label":"舞蹈"},{"value":"8","label":"游戏"},{"value":"9","label":"知识"},{"value":"10","label":"科技"},{"value":"11","label":"运动"},{"value":"12","label":"汽车"},{"value":"13","label":"生活"},{"value":"14","label":"美食"},{"value":"15","label":"动物圈"},{"value":"16","label":"鬼畜"},{"value":"17","label":"时尚"},{"value":"18","label":"娱乐"},{"value":"19","label":"影视"},{"value":"23","label":"原创"},{"value":"24","label":"新人"}]},"embed":"默认为开启内嵌视频, 任意值为关闭","redirect1":"留空，用于兼容之前的路由","redirect2":"留空，用于兼容之前的路由"},"location":"ranking.ts"}' :test='{"code":0}' />

### 专栏文集 <Site url="www.bilibili.com" size="sm" />

<Route namespace="bilibili" :data='{"path":"/readlist/:listid","categories":["social-media","popular"],"view":0,"example":"/bilibili/readlist/25611","parameters":{"listid":"文集 id, 可在专栏文集 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"专栏文集","maintainers":["hoilc"],"location":"readlist.ts"}' :test='{"code":0}' />

## 财新博客 <Site url="caixin.com"/>

> 网站部分内容需要付费订阅，RSS 仅做更新提醒，不含付费内容。若需要得到付费内容全文，请使用订阅账户在手机网页版登录，然后设置`CAIXIN_COOKIE`为至少包含cookie中的以下字段: `SA_USER_UID`, `SA_USER_UNIT`, `SA_USER_DEVICE_TYPE`, `USER_LOGIN_CODE`

### 最新文章 <Site url="caixin.com/" size="sm" />

<Route namespace="caixin" :data='{"path":"/latest","categories":["traditional-media","popular"],"view":0,"example":"/caixin/latest","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["caixin.com/"]}],"name":"最新文章","maintainers":["tpnonthealps"],"url":"caixin.com/","description":"说明：此 RSS feed 会自动抓取财新网的最新文章，但不包含 FM 及视频内容。订阅用户可根据文档设置环境变量后，在url传入`fulltext=`以解锁全文。","location":"latest.ts"}' :test='{"code":0}' />

说明：此 RSS feed 会自动抓取财新网的最新文章，但不包含 FM 及视频内容。订阅用户可根据文档设置环境变量后，在url传入`fulltext=`以解锁全文。

## 差评 <Site url="chaping.cn"/>

### 快讯 <Site url="chaping.cn/newsflash" size="sm" />

<Route namespace="chaping" :data='{"path":"/newsflash","categories":["new-media","popular"],"example":"/chaping/newsflash","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["chaping.cn/newsflash"]}],"name":"快讯","maintainers":["Fatpandac"],"url":"chaping.cn/newsflash","location":"newsflash.ts"}' :test='{"code":0}' />

### 图片墙 <Site url="chaping.cn/" size="sm" />

<Route namespace="chaping" :data='{"path":"/banner","categories":["new-media","popular"],"example":"/chaping/banner","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["chaping.cn/"]}],"name":"图片墙","maintainers":["nczitzk"],"url":"chaping.cn/","location":"banner.ts"}' :test='{"code":0}' />

### 资讯 <Site url="chaping.cn" size="sm" />

<Route namespace="chaping" :data='{"path":"/news/:caty?","categories":["new-media","popular"],"example":"/chaping/news/15","parameters":{"caty":"分类，默认为全部资讯"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"资讯","maintainers":["nczitzk"],"description":"| 编号 | 分类       |\n  | ---- | ---------- |\n  | 15   | 直播       |\n  | 3    | 科技新鲜事 |\n  | 7    | 互联网槽点 |\n  | 5    | 趣味科技   |\n  | 6    | DEBUG TIME |\n  | 1    | 游戏       |\n  | 8    | 视频       |\n  | 9    | 公里每小时 |","location":"news.ts"}' :test='{"code":0}' />

| 编号 | 分类       |
  | ---- | ---------- |
  | 15   | 直播       |
  | 3    | 科技新鲜事 |
  | 7    | 互联网槽点 |
  | 5    | 趣味科技   |
  | 6    | DEBUG TIME |
  | 1    | 游戏       |
  | 8    | 视频       |
  | 9    | 公里每小时 |

## 唱吧 <Site url="changba.com"/>

### 用户 <Site url="changba.com" size="sm" />

<Route namespace="changba" :data='{"path":"/:userid","categories":["social-media","popular"],"view":4,"example":"/changba/skp6hhF59n48R-UpqO3izw","parameters":{"userid":"用户ID, 可在对应分享页面的 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":true,"supportScihub":false},"radar":[{"source":["changba.com/s/:userid"]}],"name":"用户","maintainers":["kt286","xizeyoupan","pseudoyu"],"location":"user.ts"}' :test='{"code":0}' />

## 创业邦 <Site url="cyzone.cn"/>

### 标签 <Site url="cyzone.cn" size="sm" />

<Route namespace="cyzone" :data='{"path":"/label/:name","categories":["new-media","popular"],"example":"/cyzone/label/创业邦周报","parameters":{"name":"标签名称，可在对应标签页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["cyzone.cn/label/:name","cyzone.cn/"]}],"name":"标签","maintainers":["nczitzk"],"location":"label.ts"}' :test='{"code":0}' />

### 作者 <Site url="cyzone.cn" size="sm" />

<Route namespace="cyzone" :data='{"path":"/author/:id","categories":["new-media","popular"],"example":"/cyzone/author/1225562","parameters":{"id":"作者 id，可在对应作者页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["cyzone.cn/author/:id","cyzone.cn/"]}],"name":"作者","maintainers":["nczitzk"],"location":"author.ts"}' :test='{"code":0}' />

## 創新拿鐵 <Site url="startuplatte.com"/>

### 分类 <Site url="startuplatte.com" size="sm" />

<Route namespace="startuplatte" :data='{"path":"/:category?","categories":["new-media","popular"],"example":"/startuplatte","parameters":{"category":"分类，见下表，默认为首頁"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["startuplatte.com/category/:category","startuplatte.com/"]}],"name":"分类","maintainers":["nczitzk"],"description":"| 首頁 | 大師智慧 | 深度分析 | 新知介紹 |\n  | ---- | -------- | -------- | -------- |\n  |      | quote    | analysis | trend    |","location":"index.ts"}' :test='{"code":0}' />

| 首頁 | 大師智慧 | 深度分析 | 新知介紹 |
  | ---- | -------- | -------- | -------- |
  |      | quote    | analysis | trend    |

## 得到 <Site url="dedao.cn"/>

### 首页 <Site url="igetget.com/" size="sm" />

<Route namespace="dedao" :data='{"path":"/list/:category?","categories":["new-media","popular"],"example":"/dedao/list/年度日更","parameters":{"category":"分类名，默认为年度日更"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["igetget.com/"]}],"name":"首页","maintainers":["nczitzk"],"url":"igetget.com/","location":"list.ts"}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:66:18)\n    at listOnTimeout (node:internal/timers:594:17)\n    at processTimers (node:internal/timers:529:7)"}' />

### 文章 <Site url="dedao.cn" size="sm" />

<Route namespace="dedao" :data='{"path":"/:category?","name":"文章","maintainers":["nczitzk","pseudoyu"],"categories":["new-media","popular"],"example":"/dedao","parameters":{"category":"分类，见下表，默认为`news`"},"description":"| 新闻 | 人物故事 | 视频 |\n  | ---- | ---- | ---- |\n  | news | figure | video |","location":"index.ts"}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:66:18)\n    at listOnTimeout (node:internal/timers:594:17)\n    at processTimers (node:internal/timers:529:7)"}' />

| 新闻 | 人物故事 | 视频 |
  | ---- | ---- | ---- |
  | news | figure | video |

### 用户主页 <Site url="dedao.cn" size="sm" />

<Route namespace="dedao" :data='{"path":"/user/:id/:type?","categories":["new-media","popular"],"example":"/dedao/user/VkA5OqLX4RyGxmZRNBMlwBrDaJQ9og","parameters":{"id":"用户 id，可在对应用户主页 URL 中找到","type":"类型，见下表，默认为`0`，即动态"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"用户主页","maintainers":["nczitzk"],"description":"| 动态 | 书评 | 视频 |\n  | ---- | ---- | ---- |\n  | 0    | 7    | 12   |","location":"user.ts"}' :test='{"code":0}' />

| 动态 | 书评 | 视频 |
  | ---- | ---- | ---- |
  | 0    | 7    | 12   |

### 知识城邦 <Site url="dedao.cn" size="sm" />

<Route namespace="dedao" :data='{"path":"/knowledge/:topic?/:type?","categories":["new-media","popular"],"example":"/dedao/knowledge","parameters":{"topic":"话题 id，可在对应话题页 URL 中找到","type":"分享类型，`true` 指精选，`false` 指最新，默认为精选"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["dedao.cn/knowledge/topic/:topic","dedao.cn/knowledge","dedao.cn/"]}],"name":"知识城邦","maintainers":["nczitzk"],"location":"knowledge.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 435)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

## 电獭少女 <Site url="agirls.aotter.net"/>

### 当前精选主题列表 <Site url="agirls.aotter.net/" size="sm" />

<Route namespace="agirls" :data='{"path":"/topic_list","categories":["new-media","popular"],"example":"/agirls/topic_list","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["agirls.aotter.net/","agirls.aotter.net/topic"]}],"name":"当前精选主题列表","maintainers":["TonyRL"],"url":"agirls.aotter.net/","location":"topic-list.ts"}' :test='{"code":0}' />

### 分类 <Site url="agirls.aotter.net" size="sm" />

<Route namespace="agirls" :data='{"path":"/:category?","categories":["new-media","popular"],"example":"/agirls/app","parameters":{"category":"分类，默认为最新文章，可在对应主题页的 URL 中找到，下表仅列出部分"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["agirls.aotter.net/posts/:category"],"target":"/:category"}],"name":"分类","maintainers":["TonyRL"],"description":"| App 评测 | 手机开箱 | 笔电开箱 | 3C 周边     | 教学小技巧 | 科技情报 |\n  | -------- | -------- | -------- | ----------- | ---------- | -------- |\n  | app      | phone    | computer | accessories | tutorial   | techlife |","location":"z-index.ts"}' :test='{"code":0}' />

| App 评测 | 手机开箱 | 笔电开箱 | 3C 周边     | 教学小技巧 | 科技情报 |
  | -------- | -------- | -------- | ----------- | ---------- | -------- |
  | app      | phone    | computer | accessories | tutorial   | techlife |

### 精选主题 <Site url="agirls.aotter.net" size="sm" />

<Route namespace="agirls" :data='{"path":"/topic/:topic","categories":["new-media","popular"],"example":"/agirls/topic/AppleWatch","parameters":{"topic":"精选主题，可通过下方精选主题列表获得"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["agirls.aotter.net/topic/:topic"]}],"name":"精选主题","maintainers":["TonyRL"],"location":"topic.ts"}' :test='{"code":0}' />

## 电动邦 <Site url="diandong.com"/>

### 资讯 <Site url="diandong.com/news" size="sm" />

<Route namespace="diandong" :data='{"path":"/news/:cate?","categories":["new-media","popular"],"example":"/diandong/news","parameters":{"cate":"分类，见下表，默认为推荐"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["diandong.com/news"],"target":"/news/:cate"}],"name":"资讯","maintainers":["Fatpandac"],"url":"diandong.com/news","description":"分类\n\n  | 推荐 | 新车 | 导购 | 试驾 | 用车 | 技术 | 政策 | 行业 |\n  | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |\n  | 0    | 29   | 61   | 30   | 75   | 22   | 24   | 23   |","location":"news.ts"}' :test='{"code":0}' />

分类

  | 推荐 | 新车 | 导购 | 试驾 | 用车 | 技术 | 政策 | 行业 |
  | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
  | 0    | 29   | 61   | 30   | 75   | 22   | 24   | 23   |

## 东西智库 <Site url="dx2025.com"/>

### 分类 <Site url="dx2025.com" size="sm" />

<Route namespace="dx2025" :data='{"path":"/:type?/:category?","categories":["new-media","popular"],"example":"/dx2025","parameters":{"type":"内容类别，见下表，默认为空","category":"行业分类，见下表，默认为空"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"分类","maintainers":["nczitzk"],"description":"内容类别\n\n  | 产业观察             | 行业报告         | 政策   | 数据 |\n  | -------------------- | ---------------- | ------ | ---- |\n  | industry-observation | industry-reports | policy | data |\n\n  行业分类\n\n  | 行业                 | 行业名称                                                          |\n  | -------------------- | ----------------------------------------------------------------- |\n  | 新一代信息技术       | next-generation-information-technology-industry-reports           |\n  | 高档数控机床和机器人 | high-grade-cnc-machine-tools-and-robots-industry-reports          |\n  | 航空航天装备         | aerospace-equipment-industry-reports                              |\n  | 海工装备及高技术船舶 | marine-engineering-equipment-and-high-tech-ships-industry-reports |\n  | 先进轨道交通装备     | advanced-rail-transportation-equipment-industry-reports           |\n  | 节能与新能源汽车     | energy-saving-and-new-energy-vehicles-industry-reports            |\n  | 电力装备             | electric-equipment-industry-reports                               |\n  | 农机装备             | agricultural-machinery-equipment-industry-reports                 |\n  | 新材料               | new-material-industry-reports                                     |\n  | 生物医药及医疗器械   | biomedicine-and-medical-devices-industry-reports                  |\n  | 现代服务业           | modern-service-industry-industry-reports                          |\n  | 制造业人才           | manufacturing-talent-industry-reports                             |","location":"index.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 526)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

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

## 懂球帝 <Site url="m.dongqiudi.com"/>

::: tip
-   可以通过头条新闻 + 参数过滤的形式获得早报、专题等内容。
:::

### 球员新闻 <Site url="m.dongqiudi.com" size="sm" />

<Route namespace="dongqiudi" :data='{"path":"/player_news/:id","categories":["new-media","popular"],"example":"/dongqiudi/player_news/50000339","parameters":{"id":"球员 id, 可在[懂球帝数据](https://www.dongqiudi.com/data)中通过其队伍找到"},"radar":[{"source":["www.dongqiudi.com/player/*id"]}],"name":"球员新闻","maintainers":["HenryQW"],"location":"player-news.ts"}' :test='{"code":1,"message":"AssertionError: expected &#39;RSSHub&#39; not to be &#39;RSSHub&#39; // Object.is equality\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:43:30)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 476)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### 球队新闻 <Site url="m.dongqiudi.com" size="sm" />

<Route namespace="dongqiudi" :data='{"path":"/team_news/:team","categories":["new-media","popular"],"example":"/dongqiudi/team_news/50001755","parameters":{"team":"球队 id, 可在[懂球帝数据](https://www.dongqiudi.com/data)中找到"},"radar":[{"source":["www.dongqiudi.com/team/*team"]}],"name":"球队新闻","maintainers":["HenryQW"],"location":"team-news.ts"}' :test='{"code":0}' />

### 新闻 <Site url="m.dongqiudi.com" size="sm" />

<Route namespace="dongqiudi" :data='{"path":"/top_news/:id?","categories":["new-media","popular"],"example":"/dongqiudi/top_news/1","parameters":{"id":"类别 id，不填默认头条新闻"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["m.dongqiudi.com/home/:id"],"target":"/top_news/:id"}],"name":"新闻","maintainers":["HendricksZheng"],"description":"| 头条 | 深度 | 闲情 | D 站 | 中超 | 国际 | 英超 | 西甲 | 意甲 | 德甲 |\n  | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |\n  | 1    | 55   | 37   | 219  | 56   | 120  | 3    | 5    | 4    | 6    |","location":"top-news.ts"}' :test='{"code":0}' />

| 头条 | 深度 | 闲情 | D 站 | 中超 | 国际 | 英超 | 西甲 | 意甲 | 德甲 |
  | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
  | 1    | 55   | 37   | 219  | 56   | 120  | 3    | 5    | 4    | 6    |

### 早报 <Site url="www.dongqiudi.com/special/48" size="sm" />

<Route namespace="dongqiudi" :data='{"path":"/daily","categories":["new-media","popular"],"example":"/dongqiudi/daily","radar":[{"source":["www.dongqiudi.com/special/48"]}],"name":"早报","maintainers":["HenryQW"],"url":"www.dongqiudi.com/special/48","description":"::: tip\n部分球队和球员可能会有两个 id, 正确 id 应该由 `5000` 开头.\n:::","location":"daily.ts"}' :test='{"code":1,"message":"AssertionError: expected 301 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 475)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

::: tip
部分球队和球员可能会有两个 id, 正确 id 应该由 `5000` 开头.
:::

### 专题 <Site url="m.dongqiudi.com" size="sm" />

<Route namespace="dongqiudi" :data='{"path":"/special/:id","categories":["new-media","popular"],"example":"/dongqiudi/special/41","parameters":{"id":"专题 id, 可自行通过 https://www.dongqiudi.com/special/+数字匹配"},"radar":[{"source":["www.dongqiudi.com/special/:id"]}],"name":"专题","maintainers":["dxmpalb"],"description":"| 新闻大爆炸 | 懂球帝十佳球 | 懂球帝本周 MVP |\n  | ---------- | ------------ | -------------- |\n  | 41         | 52           | 53             |","location":"special.ts"}' :test='{"code":0}' />

| 新闻大爆炸 | 懂球帝十佳球 | 懂球帝本周 MVP |
  | ---------- | ------------ | -------------- |
  | 41         | 52           | 53             |

### 足球赛果 <Site url="m.dongqiudi.com" size="sm" />

<Route namespace="dongqiudi" :data='{"path":"/result/:team","categories":["new-media","popular"],"example":"/dongqiudi/result/50001755","parameters":{"team":"球队 id, 可在[懂球帝数据](https://www.dongqiudi.com/data)中找到"},"radar":[{"source":["www.dongqiudi.com/team/*team"]}],"name":"足球赛果","maintainers":["HenryQW"],"location":"result.ts"}' :test='{"code":0}' />

## 豆瓣 <Site url="www.douban.com"/>

### 豆瓣小组 <Site url="www.douban.com" size="sm" />

<Route namespace="douban" :data='{"path":"/group/:groupid/:type?","categories":["social-media","popular"],"view":1,"example":"/douban/group/648102","parameters":{"groupid":"豆瓣小组的 id","type":{"description":"类型","default":"latest","options":[{"label":"最新","value":"latest"},{"label":"最热","value":"essence"},{"label":"精华","value":"elite"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.douban.com/group/:groupid"],"target":"/group/:groupid"}],"name":"豆瓣小组","maintainers":["DIYgod"],"location":"other/group.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 495)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### 话题 <Site url="www.douban.com" size="sm" />

<Route namespace="douban" :data='{"path":"/topic/:id/:sort?","categories":["social-media","popular"],"example":"/douban/topic/48823","parameters":{"id":"话题id","sort":"排序方式，hot或new，默认为new"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"话题","maintainers":["LogicJake","pseudoyu","haowenwu"],"location":"other/topic.ts"}' :test='{"code":0}' />

### 用户广播 <Site url="www.douban.com" size="sm" />

<Route namespace="douban" :data='{"path":"/people/:userid/status/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/douban/people/75118396/status","parameters":{"userid":"整数型用户 id","routeParams":"额外参数；见下"},"name":"用户广播","maintainers":["alfredcai"],"description":"\n::: tip\n-   **目前只支持整数型 id**\n-   字母型的 id，可以通过头像图片链接来找到其整数型 id，图片命名规则`ul[userid]-*.jpg`或`u[userid]-*.jpg`，即取文件名中间的数字\n-   例如：用户 id: `MovieL`他的头像图片链接：`https://img1.doubanio.com/icon/ul1128221-98.jpg`他的整数型 id: `1128221`\n:::\n\n对于豆瓣用户广播内容，在 `routeParams` 参数中以 query string 格式设置如下选项可以控制输出的样式\n\n  | 键                         | 含义                                                           | 接受的值       | 默认值 |\n  | -------------------------- | -------------------------------------------------------------- | -------------- | ------ |\n  | readable                   | 是否开启细节排版可读性优化                                     | 0/1/true/false | false  |\n  | authorNameBold             | 是否加粗作者名字                                               | 0/1/true/false | false  |\n  | showAuthorInTitle          | 是否在标题处显示作者                                           | 0/1/true/false | true   |\n  | showAuthorInDesc           | 是否在正文处显示作者                                           | 0/1/true/false | false  |\n  | showAuthorAvatarInDesc     | 是否在正文处显示作者头像（若阅读器会提取正文图片，不建议开启） | 0/1/true/false | false  |\n  | showEmojiForRetweet        | 显示 “🔁” 取代 “Fw”（转发）                                    | 0/1/true/false | false  |\n  | showRetweetTextInTitle     | 在标题出显示转发评论（置为 false 则在标题只显示被转发的广播）  | 0/1/true/false | false  |\n  | addLinkForPics             | 为图片添加可点击的链接                                         | 0/1/true/false | false  |\n  | showTimestampInDescription | 在正文处显示广播的时间戳                                       | 0/1/true/false | false  |\n  | showComments               | 在正文处显示评论                                               | 0/1/true/false | false  |\n  | widthOfPics                | 广播配图宽（生效取决于阅读器）                                 | 不指定 / 数字  | 不指定 |\n  | heightOfPics               | 广播配图高（生效取决于阅读器）                                 | 不指定 / 数字  | 不指定 |\n  | sizeOfAuthorAvatar         | 作者头像大小                                                   | 数字           | 48     |\n\n  指定更多与默认值不同的参数选项可以改善 RSS 的可读性，如\n\n  [https://rsshub.app/douban/people/113894409/status/readable=1&authorNameBold=1&showAuthorInTitle=1&showAuthorInDesc=1&showAuthorAvatarInDesc=1&showEmojiForRetweet=1&showRetweetTextInTitle=1&addLinkForPics=1&showTimestampInDescription=1&showComments=1&widthOfPics=100](https://rsshub.app/douban/people/113894409/status/readable=1&authorNameBold=1&showAuthorInTitle=1&showAuthorInDesc=1&showAuthorAvatarInDesc=1&showEmojiForRetweet=1&showRetweetTextInTitle=1&addLinkForPics=1&showTimestampInDescription=1&showComments=1&widthOfPics=100)\n\n  的效果为\n\n  <img loading=\"lazy\" src=\"/img/readable-douban.png\" alt=\"豆瓣读书的可读豆瓣广播 RSS\" />","location":"people/status.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 508)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />


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

## 端传媒 <Site url="theinitium.com"/>

通过提取文章全文，以提供比官方源更佳的阅读体验。

::: warning
付费内容全文可能需要登陆获取，详情见部署页面的配置模块。
:::

### App <Site url="theinitium.com" size="sm" />

<Route namespace="theinitium" :data='{"path":"/app/:category?","categories":["new-media","popular"],"example":"/theinitium/app","parameters":{"category":"Category, see below, latest_sc by default"},"features":{"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"App","maintainers":["quiniapiezoelectricity"],"radar":[{"source":["app.theinitium.com/t/latest/:category"],"target":"/app/:category"}],"description":"抓取[The Initium App](https://app.theinitium.com/)的文章列表\n\n::: warning\n此路由暂不支持登陆认证\n:::\n\nCategory 栏目：\n\n| ----- | 简体中文     | 繁體中文      |\n| ----- | ----------------- | ---------------- |\n| 最新   | latest_sc | latest_tc |\n| 日报   | daily_brief_sc | daily_brief_tc |\n| 速递   | whats_new_sc | whats_new_tc |\n| 专题   | report_sc | report_tc |\n| 评论   | opinion_sc | opinion_tc |\n| 国际   | international_sc | international_tc |\n| 大陆   | mainland_sc | mainland_tc |\n| 香港   | hongkong_sc | hongkong_tc |\n| 台湾   | taiwan_sc | taiwan_tc |\n| 播客   | article_audio_sc | article_audio_tc |","location":"app.ts"}' :test='{"code":0}' />

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

### 话题・标签 <Site url="theinitium.com" size="sm" />

<Route namespace="theinitium" :data='{"path":"/tags/:type/:language?","name":"话题・标签","maintainers":["AgFlore"],"parameters":{"type":"话题 ID，可从话题页 URL 中获取，如 `https://theinitium.com/tags/2019_10/`","language":"语言，简体`zh-hans`，繁体`zh-hant`，缺省为简体"},"radar":[{"source":["theinitium.com/tags/:type"],"target":"/tags/:type"}],"example":"/theinitium/tags/2019_10/zh-hans","categories":["new-media","popular"],"location":"tags.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1839)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### 专题・栏目 <Site url="theinitium.com" size="sm" />

<Route namespace="theinitium" :data='{"path":"/channel/:type?/:language?","name":"专题・栏目","maintainers":["prnake","mintyfrankie"],"parameters":{"type":"栏目，缺省为最新","language":"语言，简体`zh-hans`，繁体`zh-hant`，缺省为简体"},"radar":[{"source":["theinitium.com/channel/:type"],"target":"/channel/:type"}],"example":"/theinitium/channel/latest/zh-hans","categories":["new-media","popular"],"description":"Type 栏目：\n\n  | 最新   | 深度    | What’s New | 广场              | 科技       | 风物    | 特约     | ... |\n  | ------ | ------- | ---------- | ----------------- | ---------- | ------- | -------- | --- |\n  | latest | feature | news-brief | notes-and-letters | technology | culture | pick_up | ... |","location":"channel.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1837)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

Type 栏目：

  | 最新   | 深度    | What’s New | 广场              | 科技       | 风物    | 特约     | ... |
  | ------ | ------- | ---------- | ----------------- | ---------- | ------- | -------- | --- |
  | latest | feature | news-brief | notes-and-letters | technology | culture | pick_up | ... |

### 作者 <Site url="theinitium.com" size="sm" />

<Route namespace="theinitium" :data='{"path":"/author/:type/:language?","name":"作者","maintainers":["AgFlore"],"parameters":{"type":"作者 ID，可从作者主页 URL 中获取，如 `https://theinitium.com/author/ninghuilulu`","language":"语言，简体`zh-hans`，繁体`zh-hant`，缺省为简体"},"radar":[{"source":["theinitium.com/author/:type"],"target":"/author/:type"}],"example":"/theinitium/author/ninghuilulu/zh-hans","categories":["new-media","popular"],"location":"author.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1836)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

## 方格子 <Site url="vocus.cc"/>

### 出版專題 <Site url="vocus.cc" size="sm" />

<Route namespace="vocus" :data='{"path":"/publication/:id","categories":["social-media","popular"],"example":"/vocus/publication/bass","parameters":{"id":"出版專題 id，可在出版專題主页的 URL 找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["vocus.cc/:id/home","vocus.cc/:id/introduce"]}],"name":"出版專題","maintainers":["Maecenas"],"location":"publication.ts"}' :test='{"code":0}' />

### 用户个人文章 <Site url="vocus.cc" size="sm" />

<Route namespace="vocus" :data='{"path":"/user/:id","categories":["social-media","popular"],"example":"/vocus/user/tsetyan","parameters":{"id":"用户 id，可在用户主页的 URL 找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"用户个人文章","maintainers":["LogicJake"],"location":"user.ts"}' :test='{"code":0}' />

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

## 果壳网 <Site url="guokr.com"/>

### 果壳网专栏 <Site url="guokr.com/" size="sm" />

<Route namespace="guokr" :data='{"path":"/column/:channel","categories":["new-media","popular"],"example":"/guokr/column/calendar","parameters":{"channel":"专栏类别"},"radar":[{"source":["guokr.com/:channel"]}],"name":"果壳网专栏","maintainers":["DHPO","hoilc"],"url":"guokr.com/","description":"| 物种日历 | 吃货研究所 | 美丽也是技术活 |\n  | -------- | ---------- | -------------- |\n  | calendar | institute  | beauty         |","location":"channel.ts"}' :test='{"code":0}' />

| 物种日历 | 吃货研究所 | 美丽也是技术活 |
  | -------- | ---------- | -------------- |
  | calendar | institute  | beauty         |

### 科学人 <Site url="guokr.com/scientific" size="sm" />

<Route namespace="guokr" :data='{"path":"/scientific","categories":["new-media","popular"],"example":"/guokr/scientific","radar":[{"source":["guokr.com/scientific","guokr.com/"]}],"name":"科学人","maintainers":["alphardex","nczitzk"],"url":"guokr.com/scientific","location":"scientific.ts"}' :test='{"code":0}' />

## 虎嗅 <Site url="huxiu.com"/>

### 24 小时 <Site url="huxiu.com/moment" size="sm" />

<Route namespace="huxiu" :data='{"path":"/moment","categories":["new-media","popular"],"example":"/huxiu/moment","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":true,"supportPodcast":true,"supportScihub":false},"radar":[{"source":["huxiu.com/moment"]}],"name":"24 小时","maintainers":["nczitzk"],"url":"huxiu.com/moment","location":"moment.ts"}' :test='{"code":0}' />

### 标签 <Site url="huxiu.com" size="sm" />

<Route namespace="huxiu" :data='{"path":"/tag/:id","categories":["new-media","popular"],"example":"/huxiu/tag/291","parameters":{"id":"标签 id，可在对应标签页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":true,"supportPodcast":true,"supportScihub":false},"name":"标签","maintainers":["xyqfer","HenryQW","nczitzk"],"description":"更多标签请参见 [标签](https://www.huxiu.com/tags)","location":"tag.ts"}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:66:18)\n    at listOnTimeout (node:internal/timers:594:17)\n    at processTimers (node:internal/timers:529:7)"}' />

更多标签请参见 [标签](https://www.huxiu.com/tags)

### 简报 <Site url="huxiu.com" size="sm" />

<Route namespace="huxiu" :data='{"path":"/briefcolumn/:id","categories":["new-media","popular"],"example":"/huxiu/briefcolumn/1","parameters":{"id":"简报 id，可在对应简报页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":true,"supportPodcast":true,"supportScihub":false},"name":"简报","maintainers":["Fatpandac","nczitzk"],"location":"brief-column.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 926)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### 搜索 <Site url="huxiu.com/" size="sm" />

<Route namespace="huxiu" :data='{"path":"/search/:keyword","categories":["new-media","popular"],"example":"/huxiu/search/生活","parameters":{"keyword":"关键字"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":true,"supportPodcast":true,"supportScihub":false},"radar":[{"source":["huxiu.com/"]}],"name":"搜索","maintainers":["xyqfer","HenryQW","nczitzk"],"url":"huxiu.com/","location":"search.ts"}' :test='{"code":0}' />

### 文集 <Site url="huxiu.com" size="sm" />

<Route namespace="huxiu" :data='{"path":"/collection/:id","categories":["new-media","popular"],"example":"/huxiu/collection/212","parameters":{"id":"文集 id，可在对应文集页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":true,"supportPodcast":true,"supportScihub":false},"name":"文集","maintainers":["AlexdanerZe","nczitzk"],"description":"更多文集请参见 [文集](https://www.huxiu.com/collection)","location":"collection.ts"}' :test='{"code":0}' />

更多文集请参见 [文集](https://www.huxiu.com/collection)

### 用户 <Site url="huxiu.com" size="sm" />

<Route namespace="huxiu" :data='{"path":["/author/:id/:type?","/member/:id/:type?"],"name":"用户","example":"/huxiu/member/2313050","categories":["new-media","popular"],"parameters":{"id":"用户 id，可在对应用户页 URL 中找到"},"maintainers":["nczitzk"],"description":"| TA 的文章 | TA 的 24 小时 |\n  | --------- | ------------- |\n  | article   | moment        |","location":"member.ts"}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:66:18)\n    at listOnTimeout (node:internal/timers:594:17)\n    at processTimers (node:internal/timers:529:7)"}' />

| TA 的文章 | TA 的 24 小时 |
  | --------- | ------------- |
  | article   | moment        |

### 源流 <Site url="huxiu.com" size="sm" />

<Route namespace="huxiu" :data='{"path":"/club/:id","name":"源流","categories":["new-media","popular"],"example":"/huxiu/club/2029","parameters":{"id":"俱乐部 id，可在对应俱乐部页 URL 中找到"},"maintainers":["nczitzk"],"location":"club.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 929)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### 资讯 <Site url="huxiu.com/article" size="sm" />

<Route namespace="huxiu" :data='{"path":["/article","/channel/:id?"],"categories":["new-media","popular"],"example":"/huxiu/article","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":true,"supportPodcast":true,"supportScihub":false},"radar":[{"source":["huxiu.com/article"]}],"name":"资讯","maintainers":["HenryQW","nczitzk"],"description":"| 视频 | 车与出行 | 年轻一代 | 十亿消费者 | 前沿科技 |\n  | ---- | -------- | -------- | ---------- | -------- |\n  | 10   | 21       | 106      | 103        | 105      |\n\n  | 财经 | 娱乐淘金 | 医疗健康 | 文化教育 | 出海 |\n  | ---- | -------- | -------- | -------- | ---- |\n  | 115  | 22       | 111      | 113      | 114  |\n\n  | 金融地产 | 企业服务 | 创业维艰 | 社交通讯 | 全球热点 | 生活腔调 |\n  | -------- | -------- | -------- | -------- | -------- | -------- |\n  | 102      | 110      | 2        | 112      | 107      | 4        |","url":"huxiu.com/article","location":"channel.ts"}' :test='{"code":0}' />

| 视频 | 车与出行 | 年轻一代 | 十亿消费者 | 前沿科技 |
  | ---- | -------- | -------- | ---------- | -------- |
  | 10   | 21       | 106      | 103        | 105      |

  | 财经 | 娱乐淘金 | 医疗健康 | 文化教育 | 出海 |
  | ---- | -------- | -------- | -------- | ---- |
  | 115  | 22       | 111      | 113      | 114  |

  | 金融地产 | 企业服务 | 创业维艰 | 社交通讯 | 全球热点 | 生活腔调 |
  | -------- | -------- | -------- | -------- | -------- | -------- |
  | 102      | 110      | 2        | 112      | 107      | 4        |

## 汇通网 <Site url="fx678.com"/>

### 7x24 小时快讯 <Site url="fx678.com/kx" size="sm" />

<Route namespace="fx678" :data='{"path":"/kx","categories":["finance","popular"],"view":5,"example":"/fx678/kx","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["fx678.com/kx"]}],"name":"7x24 小时快讯","maintainers":["occupy5","dousha"],"url":"fx678.com/kx","location":"kx.ts"}' :test='{"code":0}' />

## 机核网 <Site url="gcores.com"/>

### 标签 <Site url="gcores.com" size="sm" />

<Route namespace="gcores" :data='{"path":"/tag/:tag/:category?","categories":["new-media","popular"],"example":"/gcores/tag/42/articles","parameters":{"tag":"标签名，可在选定标签分类页面的 URL 中找到，如视觉动物——42","category":"分类名"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gcores.com/categories/:tag","gcores.com/"],"target":"/tag/:tag"}],"name":"标签","maintainers":["StevenRCE0"],"description":"分类名同上。","location":"tag.ts"}' :test='{"code":0}' />

分类名同上。

### 播客 <Site url="gcores.com/radios" size="sm" />

<Route namespace="gcores" :data='{"path":"/radios/:category?","categories":["new-media","popular"],"example":"/gcores/radios/45","parameters":{"category":"分类名，默认为全部，可在分类页面的 URL 中找到，如 Gadio News -- 45"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":true,"supportScihub":false},"radar":[{"source":["gcores.com/categories/:category"],"target":"/radios/:category"}],"name":"播客","maintainers":["eternasuno"],"url":"gcores.com/radios","location":"radio.ts"}' :test='{"code":0}' />

### 分类 <Site url="gcores.com" size="sm" />

<Route namespace="gcores" :data='{"path":"/category/:category","categories":["new-media","popular"],"example":"/gcores/category/news","parameters":{"category":"分类名"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gcores.com/:category"]}],"name":"分类","maintainers":["MoguCloud","StevenRCE0"],"description":"| 资讯 | 视频   | 电台   | 文章     |\n  | ---- | ------ | ------ | -------- |\n  | news | videos | radios | articles |","location":"category.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 660)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

| 资讯 | 视频   | 电台   | 文章     |
  | ---- | ------ | ------ | -------- |
  | news | videos | radios | articles |

### 专题文章 <Site url="gcores.com" size="sm" />

<Route namespace="gcores" :data='{"path":"/collections/:collection","categories":["new-media","popular"],"example":"/gcores/collections/64","parameters":{"collection":"专题id，可在专题页面的 URL 中找到，如 游戏开发设计心得分享 -- 64"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gcores.com/collections/:collection"]}],"name":"专题文章","maintainers":["kudryavka1013"],"location":"collection.ts"}' :test='{"code":0}' />

## 即刻 <Site url="m.okjike.com"/>

### 圈子 <Site url="m.okjike.com" size="sm" />

<Route namespace="jike" :data='{"path":"/topic/:id/:showUid?","categories":["social-media","popular"],"view":1,"example":"/jike/topic/556688fae4b00c57d9dd46ee","parameters":{"id":"圈子 id, 可在即刻 web 端圈子页或 APP 分享出来的圈子页 URL 中找到","showUid":{"description":"是否在内容中显示用户信息，设置为 1 则开启","options":[{"value":"1","label":"显示"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["web.okjike.com/topic/:id"],"target":"/topic/:id"}],"name":"圈子","maintainers":["DIYgod","prnake"],"location":"topic.ts"}' :test='{"code":0}' />

### 用户动态 <Site url="m.okjike.com" size="sm" />

<Route namespace="jike" :data='{"path":"/user/:id","categories":["social-media","popular"],"view":1,"example":"/jike/user/3EE02BC9-C5B3-4209-8750-4ED1EE0F67BB","parameters":{"id":"用户 id, 可在即刻分享出来的单条动态页点击用户头像进入个人主页，然后在个人主页的 URL 中找到，或者在单条动态页使用 RSSHub Radar 插件"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["web.okjike.com/u/:uid"],"target":"/user/:uid"}],"name":"用户动态","maintainers":["DIYgod","prnake"],"location":"user.ts"}' :test='{"code":0}' />

## 极客公园 <Site url="geekpark.net"/>

### 栏目 <Site url="geekpark.net" size="sm" />

<Route namespace="geekpark" :data='{"path":"/:column?","name":"栏目","url":"geekpark.net","maintainers":["nczitzk"],"example":"/geekpark","parameters":{"column":"栏目 id，默认为空，即首页资讯，可在对应栏目页 URL 中找到"},"description":"::: tip\n  若订阅 [综合报道](https://www.geekpark.net/column/179)，网址为 `https://www.geekpark.net/column/179`。截取 `https://www.geekpark.net/column/` 到末尾的部分 `179` 作为参数填入，此时路由为 [`/geekpark/179`](https://rsshub.app/geekpark/179)。\n:::\n\n  | 栏目                                                         | ID                                     |\n  | ------------------------------------------------------------ | -------------------------------------- |\n  | [综合报道](https://www.geekpark.net/column/179)              | [179](https://rsshub.app/geekpark/179) |\n  | [AI新浪潮观察](https://www.geekpark.net/column/304)          | [304](https://rsshub.app/geekpark/304) |\n  | [新造车观察](https://www.geekpark.net/column/305)            | [305](https://rsshub.app/geekpark/305) |\n  | [财报解读](https://www.geekpark.net/column/271)              | [271](https://rsshub.app/geekpark/271) |\n  | [底稿对话CEO系列](https://www.geekpark.net/column/308)       | [308](https://rsshub.app/geekpark/308) |\n  | [Geek Insight 特稿系列](https://www.geekpark.net/column/306) | [306](https://rsshub.app/geekpark/306) |\n  | [心科技](https://www.geekpark.net/column/307)                | [307](https://rsshub.app/geekpark/307) |\n  | [行业资讯](https://www.geekpark.net/column/2)                | [2](https://rsshub.app/geekpark/2)     |\n  ","categories":["new-media","popular"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["geekpark.net"],"target":"/"},{"source":["geekpark.net/column/:column?"]},{"title":"综合报道","source":["www.geekpark.net/column/179"],"target":"/179"},{"title":"AI新浪潮观察","source":["www.geekpark.net/column/304"],"target":"/304"},{"title":"新造车观察","source":["www.geekpark.net/column/305"],"target":"/305"},{"title":"财报解读","source":["www.geekpark.net/column/271"],"target":"/271"},{"title":"底稿对话CEO系列","source":["www.geekpark.net/column/308"],"target":"/308"},{"title":"Geek Insight 特稿系列","source":["www.geekpark.net/column/306"],"target":"/306"},{"title":"心科技","source":["www.geekpark.net/column/307"],"target":"/307"},{"title":"行业资讯","source":["www.geekpark.net/column/2"],"target":"/2"}],"location":"index.ts"}' :test='{"code":0}' />

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
  

## 简书 <Site url="www.jianshu.com"/>

### 首页 <Site url="www.jianshu.com/" size="sm" />

<Route namespace="jianshu" :data='{"path":"/home","categories":["social-media","popular"],"view":0,"example":"/jianshu/home","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.jianshu.com/"]}],"name":"首页","maintainers":["DIYgod","HenryQW","JimenezLi"],"url":"www.jianshu.com/","location":"home.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1029)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### 专题 <Site url="www.jianshu.com" size="sm" />

<Route namespace="jianshu" :data='{"path":"/collection/:id","categories":["social-media","popular"],"view":0,"example":"/jianshu/collection/xYuZYD","parameters":{"id":"专题 id, 可在专题页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.jianshu.com/c/:id"]}],"name":"专题","maintainers":["DIYgod","HenryQW","JimenezLi"],"location":"collection.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1028)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### 作者 <Site url="www.jianshu.com" size="sm" />

<Route namespace="jianshu" :data='{"path":"/user/:id","categories":["social-media","popular"],"example":"/jianshu/user/yZq3ZV","view":0,"parameters":{"id":"作者 id, 可在作者主页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.jianshu.com/u/:id"]}],"name":"作者","maintainers":["DIYgod","HenryQW","JimenezLi"],"location":"user.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1030)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

## 簡訊設計 <Site url="blog.simpleinfo.cc"/>

### 志祺七七 <Site url="blog.simpleinfo.cc" size="sm" />

<Route namespace="simpleinfo" :data='{"path":"/:category?","categories":["new-media","popular"],"example":"/simpleinfo","parameters":{"category":"分类名"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["blog.simpleinfo.cc/blog/:category"],"target":"/:category"}],"name":"志祺七七","maintainers":["haukeng"],"description":"| 夥伴聊聊 | 專案設計 |\n  | -------- | -------- |\n  | work     | talk     |\n\n  | 國內外新聞 | 政治百分百 | 社會觀察家 | 心理與哲學            |\n  | ---------- | ---------- | ---------- | --------------------- |\n  | news       | politics   | society    | psychology-philosophy |\n\n  | 科學大探索 | 環境與健康         | ACG 快樂聊 | 好書籍分享   | 其它主題     |\n  | ---------- | ------------------ | ---------- | ------------ | ------------ |\n  | science    | environment-health | acg        | book-sharing | other-topics |","location":"index.ts"}' :test='{"code":0}' />

| 夥伴聊聊 | 專案設計 |
  | -------- | -------- |
  | work     | talk     |

  | 國內外新聞 | 政治百分百 | 社會觀察家 | 心理與哲學            |
  | ---------- | ---------- | ---------- | --------------------- |
  | news       | politics   | society    | psychology-philosophy |

  | 科學大探索 | 環境與健康         | ACG 快樂聊 | 好書籍分享   | 其它主題     |
  | ---------- | ------------------ | ---------- | ------------ | ------------ |
  | science    | environment-health | acg        | book-sharing | other-topics |

## 今日热榜 <Site url="tophub.today"/>

::: warning
由于需要登录后的 Cookie 值才能获取原始链接，所以需要自建，需要在环境变量中配置 `TOPHUB_COOKIE`，详情见部署页面的配置模块。
:::

### 榜单 <Site url="tophub.today" size="sm" />

<Route namespace="tophub" :data='{"path":"/:id","categories":["new-media","popular"],"example":"/tophub/Om4ejxvxEN","parameters":{"id":"榜单id，可在 URL 中找到"},"features":{"requireConfig":[{"name":"TOPHUB_COOKIE","optional":true,"description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["tophub.today/n/:id"]}],"name":"榜单","maintainers":["LogicJake"],"location":"index.ts"}' :test='{"code":0}' />

### 榜单列表 <Site url="tophub.today" size="sm" />

<Route namespace="tophub" :data='{"path":"/list/:id","categories":["new-media","popular"],"example":"/tophub/list/Om4ejxvxEN","parameters":{"id":"榜单id，可在 URL 中找到"},"features":{"requireConfig":[{"name":"TOPHUB_COOKIE","optional":true,"description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["tophub.today/n/:id"]}],"name":"榜单列表","maintainers":["akynazh"],"description":"::: tip\n将榜单条目集合到一个列表中，可避免推送大量条目，更符合阅读习惯且有热度排序，推荐使用。\n:::","location":"list.ts"}' :test='{"code":0}' />

::: tip
将榜单条目集合到一个列表中，可避免推送大量条目，更符合阅读习惯且有热度排序，推荐使用。
:::

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

## 量子位 <Site url="qbitai.com"/>

### 标签 <Site url="qbitai.com" size="sm" />

<Route namespace="qbitai" :data='{"path":"/tag/:tag","categories":["new-media","popular"],"example":"/qbitai/tag/大语言模型","parameters":{"tag":"标签名"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["qbitai.com/tag/:tag"]}],"name":"标签","maintainers":["FuryMartin"],"location":"tag.ts"}' :test='{"code":0}' />

### 分类 <Site url="qbitai.com" size="sm" />

<Route namespace="qbitai" :data='{"path":"/category/:category","categories":["new-media","popular"],"example":"/qbitai/category/资讯","parameters":{"category":"分类名，见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["qbitai.com/category/:category"]}],"name":"分类","maintainers":["FuryMartin, Geraldxm"],"description":"| 资讯 | 数码     | 智能车 | 智库  | 活动    |\n| ---- | -------- | ------ | ----- | ------- |\n| 资讯 | ebandeng | auto   | zhiku | huodong |","location":"category.ts"}' :test='{"code":0}' />

| 资讯 | 数码     | 智能车 | 智库  | 活动    |
| ---- | -------- | ------ | ----- | ------- |
| 资讯 | ebandeng | auto   | zhiku | huodong |

## 律动 BlockBeats <Site url="www.theblockbeats.info"/>

### 新闻快讯 <Site url="www.theblockbeats.info" size="sm" />

<Route namespace="theblockbeats" :data='{"path":"/:channel?/:original?","categories":["finance","popular"],"view":0,"example":"/theblockbeats/newsflash","parameters":{"channel":{"description":"类型","options":[{"value":"newsflash","label":"快讯"},{"value":"article","label":"文章"}],"default":"newsflash"},"original":{"description":"文章类型，仅 `channel` 为 `article` 时有效","options":[{"value":"0","label":"全部"},{"value":"1","label":"深度"},{"value":"2","label":"精选"},{"value":"3","label":"热点追踪"}],"default":"0"}},"name":"新闻快讯","maintainers":["Fatpandac","jameshih"],"radar":[{"title":"文章","source":["www.theblockbeats.info/article"],"target":"/article"},{"title":"快讯","source":["www.theblockbeats.info/newsflash"],"target":"/newsflash"}],"description":"|    快讯   |   文章  |\n  | :-------: | :-----: |\n  | newsflash | article |\n\n  | 全部 | 深度 | 精选 | 热点追踪 |\n  | :--: | :--: | :--: | :---: |\n  |     | -2  | 1    |  2     |","location":"index.ts"}' :test='{"code":0}' />

|    快讯   |   文章  |
  | :-------: | :-----: |
  | newsflash | article |

  | 全部 | 深度 | 精选 | 热点追踪 |
  | :--: | :--: | :--: | :---: |
  |     | -2  | 1    |  2     |

## 麻省理工科技评论 <Site url="mittrchina.com"/>

### 首页 <Site url="mittrchina.com" size="sm" />

<Route namespace="mittrchina" :data='{"path":"/:type?","categories":["new-media","popular"],"example":"/mittrchina/index","parameters":{"type":"类型，见下表，默认为首页资讯"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"首页","maintainers":["EsuRt","queensferryme"],"description":"| 快讯     | 本周热文 | 首页资讯 | 视频  |\n  | -------- | -------- | -------- | ----- |\n  | breaking | hot      | index    | video |","location":"index.ts"}' :test='{"code":0}' />

| 快讯     | 本周热文 | 首页资讯 | 视频  |
  | -------- | -------- | -------- | ----- |
  | breaking | hot      | index    | video |

## 麦肯锡 <Site url="mckinsey.com.cn"/>

### 洞见 <Site url="mckinsey.com.cn" size="sm" />

<Route namespace="mckinsey" :data='{"path":"/cn/:category?","categories":["finance","popular"],"view":0,"example":"/mckinsey/cn","parameters":{"category":{"description":"分类","options":[{"value":"2","label":"汽车"},{"value":"3","label":"金融服务"},{"value":"4","label":"消费者"},{"value":"5","label":"医药"},{"value":"7","label":"数字化"},{"value":"8","label":"制造业"},{"value":"9","label":"私募"},{"value":"10","label":"技术，媒体与通信"},{"value":"12","label":"城市化与可持续发展"},{"value":"13","label":"创新"},{"value":"16","label":"人才与领导力"},{"value":"18","label":"宏观经济"},{"value":"19","label":"麦肯锡全球研究院"},{"value":"25","label":"洞见"},{"value":"37","label":"麦肯锡季刊"},{"value":"41","label":"资本项目和基础设施"},{"value":"42","label":"旅游、运输和物流"},{"value":"45","label":"全球基础材料"}],"default":"25"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"洞见","maintainers":["laampui"],"description":"| 分类 | 分类名             |\n  | ---- | ------------------ |\n  | 25   | 全部洞见           |\n  | 2    | 汽车               |\n  | 3    | 金融服务           |\n  | 4    | 消费者             |\n  | 5    | 医药               |\n  | 7    | 数字化             |\n  | 8    | 制造业             |\n  | 9    | 私募               |\n  | 10   | 技术，媒体与通信   |\n  | 12   | 城市化与可持续发展 |\n  | 13   | 创新               |\n  | 16   | 人才与领导力       |\n  | 18   | 宏观经济           |\n  | 19   | 麦肯锡全球研究院   |\n  | 37   | 麦肯锡季刊         |\n  | 41   | 资本项目和基础设施 |\n  | 42   | 旅游、运输和物流   |\n  | 45   | 全球基础材料       |","location":"cn/index.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1176)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

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

## 慢雾科技 <Site url="slowmist.com"/>

### 动态 <Site url="slowmist.com/zh/news.html" size="sm" />

<Route namespace="slowmist" :data='{"path":"/:type?","categories":["new-media","popular"],"example":"/slowmist/research","parameters":{"type":"分类，见下表，默认为公司新闻"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["slowmist.com/zh/news.html"]}],"name":"动态","maintainers":["AtlasQuan"],"url":"slowmist.com/zh/news.html","description":"| 公司新闻 | 漏洞披露 | 技术研究 |\n  | -------- | -------- | -------- |\n  | news     | vul      | research |","location":"slowmist.ts"}' :test='{"code":0}' />

| 公司新闻 | 漏洞披露 | 技术研究 |
  | -------- | -------- | -------- |
  | news     | vul      | research |

## 梅斯医学 MedSci <Site url="medsci.cn"/>

### 资讯 <Site url="medsci.cn" size="sm" />

<Route namespace="medsci" :data='{"path":"/:sid?/:tid?","categories":["new-media","popular"],"example":"/medsci","parameters":{"sid":"科室，见下表，默认为推荐","tid":"亚专业，可在对应科室页 URL 中找到，默认为该科室的全部"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"资讯","maintainers":["nczitzk"],"description":"::: tip\n  下表为科室对应的 sid，若想获得 tid，可以到对应科室页面 URL 中寻找 `t_id` 字段的值，下面是一个例子：\n\n  如 [肿瘤 - NSCLC](https://www.medsci.cn/department/details?s_id=5&t_id=277) 的 URL 为 `https://www.medsci.cn/department/details?s_id=5&t_id=277`，可以看到此时 `s_id` 对应 `sid` 的值为 5， `t_id` 对应 `tid` 的值为 277，所以可以得到路由 [`/medsci/5/277`](https://rsshub.app/medsci/5/277)\n:::\n\n  | 心血管 | 内分泌 | 消化 | 呼吸 | 神经科 |\n  | ------ | ------ | ---- | ---- | ------ |\n  | 2      | 6      | 4    | 12   | 17     |\n\n  | 传染科 | 精神心理 | 肾内科 | 风湿免疫 | 血液科 |\n  | ------ | -------- | ------ | -------- | ------ |\n  | 9      | 13       | 14     | 15       | 21     |\n\n  | 老年医学 | 胃肠外科 | 血管外科 | 肝胆胰外 | 骨科 |\n  | -------- | -------- | -------- | -------- | ---- |\n  | 19       | 76       | 92       | 91       | 10   |\n\n  | 普通外科 | 胸心外科 | 神经外科 | 泌尿外科 | 烧伤科 |\n  | -------- | -------- | -------- | -------- | ------ |\n  | 23       | 24       | 25       | 26       | 27     |\n\n  | 整形科 | 麻醉疼痛 | 罕见病 | 康复医学 | 药械 |\n  | ------ | -------- | ------ | -------- | ---- |\n  | 28     | 29       | 304    | 95       | 11   |\n\n  | 儿科 | 耳鼻咽喉 | 口腔科 | 眼科 | 政策人文 |\n  | ---- | -------- | ------ | ---- | -------- |\n  | 18   | 30       | 31     | 32   | 33       |\n\n  | 营养全科 | 预防公卫 | 妇产科 | 中医科 | 急重症 |\n  | -------- | -------- | ------ | ------ | ------ |\n  | 34       | 35       | 36     | 37     | 38     |\n\n  | 皮肤性病 | 影像放射 | 转化医学 | 检验病理 | 护理 |\n  | -------- | -------- | -------- | -------- | ---- |\n  | 39       | 40       | 42       | 69       | 79   |\n\n  | 糖尿病 | 冠心病 | 肝病 | 乳腺癌 |\n  | ------ | ------ | ---- | ------ |\n  | 8      | 43     | 22   | 89     |","location":"index.ts"}' :test='{"code":0}' />

::: tip
  下表为科室对应的 sid，若想获得 tid，可以到对应科室页面 URL 中寻找 `t_id` 字段的值，下面是一个例子：

  如 [肿瘤 - NSCLC](https://www.medsci.cn/department/details?s_id=5&t_id=277) 的 URL 为 `https://www.medsci.cn/department/details?s_id=5&t_id=277`，可以看到此时 `s_id` 对应 `sid` 的值为 5， `t_id` 对应 `tid` 的值为 277，所以可以得到路由 [`/medsci/5/277`](https://rsshub.app/medsci/5/277)
:::

  | 心血管 | 内分泌 | 消化 | 呼吸 | 神经科 |
  | ------ | ------ | ---- | ---- | ------ |
  | 2      | 6      | 4    | 12   | 17     |

  | 传染科 | 精神心理 | 肾内科 | 风湿免疫 | 血液科 |
  | ------ | -------- | ------ | -------- | ------ |
  | 9      | 13       | 14     | 15       | 21     |

  | 老年医学 | 胃肠外科 | 血管外科 | 肝胆胰外 | 骨科 |
  | -------- | -------- | -------- | -------- | ---- |
  | 19       | 76       | 92       | 91       | 10   |

  | 普通外科 | 胸心外科 | 神经外科 | 泌尿外科 | 烧伤科 |
  | -------- | -------- | -------- | -------- | ------ |
  | 23       | 24       | 25       | 26       | 27     |

  | 整形科 | 麻醉疼痛 | 罕见病 | 康复医学 | 药械 |
  | ------ | -------- | ------ | -------- | ---- |
  | 28     | 29       | 304    | 95       | 11   |

  | 儿科 | 耳鼻咽喉 | 口腔科 | 眼科 | 政策人文 |
  | ---- | -------- | ------ | ---- | -------- |
  | 18   | 30       | 31     | 32   | 33       |

  | 营养全科 | 预防公卫 | 妇产科 | 中医科 | 急重症 |
  | -------- | -------- | ------ | ------ | ------ |
  | 34       | 35       | 36     | 37     | 38     |

  | 皮肤性病 | 影像放射 | 转化医学 | 检验病理 | 护理 |
  | -------- | -------- | -------- | -------- | ---- |
  | 39       | 40       | 42       | 69       | 79   |

  | 糖尿病 | 冠心病 | 肝病 | 乳腺癌 |
  | ------ | ------ | ---- | ------ |
  | 8      | 43     | 22   | 89     |

## 澎湃新闻 <Site url="thepaper.cn"/>

以下所有路由可使用参数`old`以采取旧全文获取方法。该方法会另外获取网页中的图片与视频资源。在原始 url 追加`?old=yes`以启用.

### 侧边栏 <Site url="thepaper.cn/" size="sm" />

<Route namespace="thepaper" :data='{"path":"/sidebar/:sec?","radar":[{"source":["thepaper.cn/"],"target":"/sidebar"}],"name":"侧边栏","categories":["new-media","popular"],"example":"/thepaper/sidebar","parameters":{"sec":"侧边栏 id，可选 `hotNews` 即 澎湃热榜、`financialInformationNews` 即 澎湃财讯、`morningEveningNews` 即 早晚报，默认为 `hotNews`"},"maintainers":["bigfei"],"url":"thepaper.cn/","location":"sidebar.ts"}' :test='{"code":0}' />

### 栏目 <Site url="thepaper.cn" size="sm" />

<Route namespace="thepaper" :data='{"path":"/list/:id","categories":["new-media","popular"],"example":"/thepaper/list/25457","parameters":{"id":"栏目 id，可在栏目页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"栏目","maintainers":["nczitzk","bigfei"],"description":"| 栏目 ID | 栏目名       |\n  | ------- | ------------ |\n  | 26912   | 上直播       |\n  | 26913   | 七环视频     |\n  | 26965   | 温度计       |\n  | 26908   | 一级视场     |\n  | 27260   | World 湃     |\n  | 26907   | 湃客科技     |\n  | 33168   | 纪录湃       |\n  | 26911   | 围观         |\n  | 26918   | @所有人      |\n  | 26906   | 大都会       |\n  | 26909   | 追光灯       |\n  | 26910   | 运动装       |\n  | 26914   | 健寻记       |\n  | 82188   | AI 播报      |\n  | 89035   | 眼界         |\n  | 92278   | 关键帧       |\n  | 90069   | 战疫         |\n  | 25462   | 中国政库     |\n  | 25488   | 中南海       |\n  | 97924   | 初心之路     |\n  | 25489   | 舆论场       |\n  | 25490   | 打虎记       |\n  | 25423   | 人事风向     |\n  | 25426   | 法治中国     |\n  | 25424   | 一号专案     |\n  | 25463   | 港台来信     |\n  | 25491   | 长三角政商   |\n  | 25428   | 直击现场     |\n  | 68750   | 公益湃       |\n  | 27604   | 暖闻         |\n  | 25464   | 澎湃质量报告 |\n  | 25425   | 绿政公署     |\n  | 25429   | 澎湃国际     |\n  | 25481   | 外交学人     |\n  | 25430   | 澎湃防务     |\n  | 25678   | 唐人街       |\n  | 25427   | 澎湃人物     |\n  | 25422   | 浦江头条     |\n  | 25487   | 教育家       |\n  | 25634   | 全景现场     |\n  | 25635   | 美数课       |\n  | 25600   | 快看         |\n  | 25434   | 10% 公司     |\n  | 25436   | 能见度       |\n  | 25433   | 地产界       |\n  | 25438   | 财经上下游   |\n  | 25435   | 金改实验室   |\n  | 25437   | 牛市点线面   |\n  | 119963  | IPO 最前线   |\n  | 25485   | 澎湃商学院   |\n  | 25432   | 自贸区连线   |\n  | 37978   | 进博会在线   |\n  | 36079   | 湃客         |\n  | 27392   | 政务         |\n  | 77286   | 媒体         |\n  | 27234   | 科学湃       |\n  | 119445  | 生命科学     |\n  | 119447  | 未来 2%      |\n  | 119446  | 元宇宙观察   |\n  | 119448  | 科创 101     |\n  | 119449  | 科学城邦     |\n  | 25444   | 社论         |\n  | 27224   | 澎湃评论     |\n  | 26525   | 思想湃       |\n  | 26878   | 上海书评     |\n  | 25483   | 思想市场     |\n  | 25457   | 私家历史     |\n  | 25574   | 翻书党       |\n  | 25455   | 艺术评论     |\n  | 26937   | 古代艺术     |\n  | 25450   | 文化课       |\n  | 25482   | 逝者         |\n  | 25536   | 专栏         |\n  | 26506   | 异次元       |\n  | 97313   | 海平面       |\n  | 103076  | 一问三知     |\n  | 25445   | 澎湃研究所   |\n  | 25446   | 全球智库     |\n  | 26915   | 城市漫步     |\n  | 25456   | 市政厅       |\n  | 104191  | 世界会客厅   |\n  | 25448   | 有戏         |\n  | 26609   | 文艺范       |\n  | 25942   | 身体         |\n  | 26015   | 私・奔       |\n  | 25599   | 运动家       |\n  | 25842   | 私家地理     |\n  | 80623   | 非常品       |\n  | 26862   | 楼市         |\n  | 25769   | 生活方式     |\n  | 25990   | 澎湃联播     |\n  | 26173   | 视界         |\n  | 26202   | 亲子学堂     |\n  | 26404   | 赢家         |\n  | 26490   | 汽车圈       |\n  | 115327  | IP SH        |\n  | 117340  | 酒业         |","location":"list.ts"}' :test='{"code":0}' />

| 栏目 ID | 栏目名       |
  | ------- | ------------ |
  | 26912   | 上直播       |
  | 26913   | 七环视频     |
  | 26965   | 温度计       |
  | 26908   | 一级视场     |
  | 27260   | World 湃     |
  | 26907   | 湃客科技     |
  | 33168   | 纪录湃       |
  | 26911   | 围观         |
  | 26918   | @所有人      |
  | 26906   | 大都会       |
  | 26909   | 追光灯       |
  | 26910   | 运动装       |
  | 26914   | 健寻记       |
  | 82188   | AI 播报      |
  | 89035   | 眼界         |
  | 92278   | 关键帧       |
  | 90069   | 战疫         |
  | 25462   | 中国政库     |
  | 25488   | 中南海       |
  | 97924   | 初心之路     |
  | 25489   | 舆论场       |
  | 25490   | 打虎记       |
  | 25423   | 人事风向     |
  | 25426   | 法治中国     |
  | 25424   | 一号专案     |
  | 25463   | 港台来信     |
  | 25491   | 长三角政商   |
  | 25428   | 直击现场     |
  | 68750   | 公益湃       |
  | 27604   | 暖闻         |
  | 25464   | 澎湃质量报告 |
  | 25425   | 绿政公署     |
  | 25429   | 澎湃国际     |
  | 25481   | 外交学人     |
  | 25430   | 澎湃防务     |
  | 25678   | 唐人街       |
  | 25427   | 澎湃人物     |
  | 25422   | 浦江头条     |
  | 25487   | 教育家       |
  | 25634   | 全景现场     |
  | 25635   | 美数课       |
  | 25600   | 快看         |
  | 25434   | 10% 公司     |
  | 25436   | 能见度       |
  | 25433   | 地产界       |
  | 25438   | 财经上下游   |
  | 25435   | 金改实验室   |
  | 25437   | 牛市点线面   |
  | 119963  | IPO 最前线   |
  | 25485   | 澎湃商学院   |
  | 25432   | 自贸区连线   |
  | 37978   | 进博会在线   |
  | 36079   | 湃客         |
  | 27392   | 政务         |
  | 77286   | 媒体         |
  | 27234   | 科学湃       |
  | 119445  | 生命科学     |
  | 119447  | 未来 2%      |
  | 119446  | 元宇宙观察   |
  | 119448  | 科创 101     |
  | 119449  | 科学城邦     |
  | 25444   | 社论         |
  | 27224   | 澎湃评论     |
  | 26525   | 思想湃       |
  | 26878   | 上海书评     |
  | 25483   | 思想市场     |
  | 25457   | 私家历史     |
  | 25574   | 翻书党       |
  | 25455   | 艺术评论     |
  | 26937   | 古代艺术     |
  | 25450   | 文化课       |
  | 25482   | 逝者         |
  | 25536   | 专栏         |
  | 26506   | 异次元       |
  | 97313   | 海平面       |
  | 103076  | 一问三知     |
  | 25445   | 澎湃研究所   |
  | 25446   | 全球智库     |
  | 26915   | 城市漫步     |
  | 25456   | 市政厅       |
  | 104191  | 世界会客厅   |
  | 25448   | 有戏         |
  | 26609   | 文艺范       |
  | 25942   | 身体         |
  | 26015   | 私・奔       |
  | 25599   | 运动家       |
  | 25842   | 私家地理     |
  | 80623   | 非常品       |
  | 26862   | 楼市         |
  | 25769   | 生活方式     |
  | 25990   | 澎湃联播     |
  | 26173   | 视界         |
  | 26202   | 亲子学堂     |
  | 26404   | 赢家         |
  | 26490   | 汽车圈       |
  | 115327  | IP SH        |
  | 117340  | 酒业         |

### 明查 <Site url="factpaper.cn/" size="sm" />

<Route namespace="thepaper" :data='{"path":"/factpaper/:status?","categories":["new-media","popular"],"example":"/thepaper/factpaper","parameters":{"status":"状态 id，可选 `1` 即 有定论 或 `0` 即 核查中，默认为 `1`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["factpaper.cn/"],"target":"/factpaper/:status"}],"name":"明查","maintainers":["nczitzk"],"url":"factpaper.cn/","location":"factpaper.ts"}' :test='{"code":0}' />

### 澎湃号 <Site url="thepaper.cn" size="sm" />

<Route namespace="thepaper" :data='{"path":"/user/:pphId","categories":["new-media","popular"],"example":"/thepaper/user/4221423","parameters":{"pphId":"澎湃号 id，可在澎湃号页 URL 中找到"},"name":"澎湃号","maintainers":["TonyRL"],"location":"user.ts"}' :test='{"code":0}' />

### 频道 <Site url="thepaper.cn" size="sm" />

<Route namespace="thepaper" :data='{"path":"/channel/:id","categories":["new-media","popular"],"example":"/thepaper/channel/25950","parameters":{"id":"频道 id，可在频道页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"频道","maintainers":["xyqfer","nczitzk","bigfei"],"description":"| 频道 ID | 频道名 |\n  | ------- | ------ |\n  | 26916   | 视频   |\n  | 108856  | 战疫   |\n  | 25950   | 时事   |\n  | 25951   | 财经   |\n  | 36079   | 澎湃号 |\n  | 119908  | 科技   |\n  | 25952   | 思想   |\n  | 119489  | 智库   |\n  | 25953   | 生活   |\n  | 26161   | 问吧   |\n  | 122908  | 国际   |\n  | -21     | 体育   |\n  | -24     | 评论   |","location":"channel.ts"}' :test='{"code":0}' />

| 频道 ID | 频道名 |
  | ------- | ------ |
  | 26916   | 视频   |
  | 108856  | 战疫   |
  | 25950   | 时事   |
  | 25951   | 财经   |
  | 36079   | 澎湃号 |
  | 119908  | 科技   |
  | 25952   | 思想   |
  | 119489  | 智库   |
  | 25953   | 生活   |
  | 26161   | 问吧   |
  | 122908  | 国际   |
  | -21     | 体育   |
  | -24     | 评论   |

### 首页头条 <Site url="thepaper.cn/" size="sm" />

<Route namespace="thepaper" :data='{"path":"/featured","categories":["new-media","popular"],"example":"/thepaper/featured","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["thepaper.cn/"]}],"name":"首页头条","maintainers":["HenryQW","nczitzk","bigfei"],"url":"thepaper.cn/","location":"featured.ts"}' :test='{"code":0}' />

## 品玩 <Site url="pingwest.com"/>

### 话题动态 <Site url="pingwest.com" size="sm" />

<Route namespace="pingwest" :data='{"path":"/tag/:tag/:type/:option?","categories":["new-media","popular"],"example":"/pingwest/tag/ChinaJoy/1","parameters":{"tag":"话题名或话题id, 可从话题页url中得到","type":"内容类型","option":"参数, 默认无"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"话题动态","maintainers":["sanmmm"],"description":"内容类型\n\n  | 最新 | 热门 |\n  | ---- | ---- |\n  | 1    | 2    |\n\n  参数\n\n  -   `fulltext`，全文输出，例如：`/pingwest/tag/ChinaJoy/1/fulltext`\n\n::: tip\n  该路由一次最多显示 30 条文章\n:::","location":"tag.ts"}' :test='{"code":0}' />

内容类型

  | 最新 | 热门 |
  | ---- | ---- |
  | 1    | 2    |

  参数

  -   `fulltext`，全文输出，例如：`/pingwest/tag/ChinaJoy/1/fulltext`

::: tip
  该路由一次最多显示 30 条文章
:::

### 实时要闻 <Site url="pingwest.com/status" size="sm" />

<Route namespace="pingwest" :data='{"path":"/status","categories":["new-media","popular"],"example":"/pingwest/status","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["pingwest.com/status","pingwest.com/"]}],"name":"实时要闻","maintainers":["sanmmm"],"url":"pingwest.com/status","location":"status.ts"}' :test='{"code":0}' />

### 用户 <Site url="pingwest.com" size="sm" />

<Route namespace="pingwest" :data='{"path":"/user/:uid/:type?/:option?","categories":["new-media","popular"],"example":"/pingwest/user/7781550877/article","parameters":{"uid":"用户id, 可从用户主页中得到","type":"内容类型, 默认为`article`","option":"参数"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["pingwest.com/user/:uid/:type","pingwest.com/"],"target":"/user/:uid/:type"}],"name":"用户","maintainers":["sanmmm"],"description":"内容类型\n\n  | 文章    | 动态  |\n  | ------- | ----- |\n  | article | state |\n\n  参数\n\n  -   `fulltext`，全文输出，例如：`/pingwest/user/7781550877/article/fulltext`","location":"user.ts"}' :test='{"code":0}' />

内容类型

  | 文章    | 动态  |
  | ------- | ----- |
  | article | state |

  参数

  -   `fulltext`，全文输出，例如：`/pingwest/user/7781550877/article/fulltext`

## 起点 <Site url="qidian.com"/>

### 作品章节 <Site url="qidian.com" size="sm" />

<Route namespace="qidian" :data='{"path":"/chapter/:id","categories":["reading","popular"],"view":5,"example":"/qidian/chapter/1010400217","parameters":{"id":"小说 id, 可在对应小说页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["book.qidian.com/info/:id"]}],"name":"作品章节","maintainers":["fuzy112"],"location":"chapter.ts"}' :test='{"code":0}' />

## 人人影视 <Site url="yysub.net"/>

### 今日播出 <Site url="yysub.net/tv/schedule" size="sm" />

<Route namespace="yyets" :data='{"path":"/today","categories":["multimedia","popular"],"view":5,"example":"/yyets/today","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yysub.net/tv/schedule","yysub.net/"]}],"name":"今日播出","maintainers":["bao1991213"],"url":"yysub.net/tv/schedule","location":"today.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 2140)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### 影视资讯 <Site url="yysub.net" size="sm" />

<Route namespace="yyets" :data='{"path":"/article/:type?","categories":["multimedia","popular"],"view":0,"example":"/yyets/article","parameters":{"type":{"description":"类型","options":[{"value":"all","label":"全部"},{"value":"news","label":"影视资讯"},{"value":"report","label":"收视快报"},{"value":"m_review","label":"人人影评"},{"value":"t_review","label":"人人剧评"},{"value":"new_review","label":"新剧评测"},{"value":"recom","label":"片单推荐"}],"default":"all"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"影视资讯","maintainers":["wb121017405"],"description":"| 全部 | 影视资讯 | 收视快报 | 人人影评  | 人人剧评  | 新剧评测    | 片单推荐 |\n  | ---- | -------- | -------- | --------- | --------- | ----------- | -------- |\n  |      | news     | report   | m_review | t_review | new_review | recom    |","location":"article.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 2139)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

| 全部 | 影视资讯 | 收视快报 | 人人影评  | 人人剧评  | 新剧评测    | 片单推荐 |
  | ---- | -------- | -------- | --------- | --------- | ----------- | -------- |
  |      | news     | report   | m_review | t_review | new_review | recom    |

## 少数派 sspai <Site url="sspai.com"/>

### Matrix <Site url="sspai.com/matrix" size="sm" />

<Route namespace="sspai" :data='{"path":"/matrix","categories":["new-media","popular"],"example":"/sspai/matrix","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["sspai.com/matrix"]}],"name":"Matrix","maintainers":["feigaoxyz"],"url":"sspai.com/matrix","location":"matrix.ts"}' :test='{"code":0}' />

### Shortcuts Gallery <Site url="shortcuts.sspai.com/*" size="sm" />

<Route namespace="sspai" :data='{"path":"/shortcuts","categories":["new-media","popular"],"example":"/sspai/shortcuts","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["shortcuts.sspai.com/*"]}],"name":"Shortcuts Gallery","maintainers":["Andiedie"],"url":"shortcuts.sspai.com/*","location":"shortcuts-gallery.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1741)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### 标签订阅 <Site url="sspai.com" size="sm" />

<Route namespace="sspai" :data='{"path":"/tag/:keyword","categories":["new-media","popular"],"example":"/sspai/tag/apple","parameters":{"keyword":"关键词"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["sspai.com/tag/:keyword"]}],"name":"标签订阅","maintainers":["Jeason0228"],"location":"tag.ts"}' :test='{"code":0}' />

### 付费专栏文章更新 <Site url="sspai.com/series" size="sm" />

<Route namespace="sspai" :data='{"path":"/series/:id","categories":["new-media","popular"],"example":"/sspai/series/77","parameters":{"id":"专栏 id"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["sspai.com/series/:id","sspai.com/series/:id/list","sspai.com/series/:id/metadata"]}],"name":"付费专栏文章更新","maintainers":["TonyRL"],"url":"sspai.com/series","location":"series-update.ts"}' :test='{"code":0}' />

### 首页 <Site url="sspai.com/index" size="sm" />

<Route namespace="sspai" :data='{"path":"/index","categories":["new-media","popular"],"view":0,"example":"/sspai/index","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["sspai.com/index"]}],"name":"首页","maintainers":["HenryQW"],"url":"sspai.com/index","location":"index.ts"}' :test='{"code":0}' />

### 用户收藏 <Site url="sspai.com" size="sm" />

<Route namespace="sspai" :data='{"path":"/bookmarks/:slug","categories":["new-media","popular"],"example":"/sspai/bookmarks/urfp0d9i","parameters":{"slug":"用户 slug，可在个人主页URL中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["sspai.com/u/:slug/bookmark_posts"]}],"name":"用户收藏","maintainers":["curly210102"],"location":"bookmarks.ts"}' :test='{"code":0}' />

### 专栏 <Site url="sspai.com" size="sm" />

<Route namespace="sspai" :data='{"path":"/column/:id","categories":["new-media","popular"],"example":"/sspai/column/262","parameters":{"id":"专栏 id"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["sspai.com/column/:id"]}],"name":"专栏","maintainers":["LogicJake"],"location":"column.ts"}' :test='{"code":0}' />

### 专题内文章更新 <Site url="sspai.com" size="sm" />

<Route namespace="sspai" :data='{"path":"/topic/:id","categories":["new-media","popular"],"example":"/sspai/topic/250","parameters":{"id":"专题 id，可在专题主页URL中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["sspai.com/topic/:id"]}],"name":"专题内文章更新","maintainers":["SunShinenny"],"location":"topic.ts"}' :test='{"code":0}' />

### 专题 <Site url="sspai.com/topics" size="sm" />

<Route namespace="sspai" :data='{"path":"/topics","categories":["new-media","popular"],"example":"/sspai/topics","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["sspai.com/topics"]}],"name":"专题","maintainers":["SunShinenny"],"url":"sspai.com/topics","description":"此为专题广场更新提示 => 集合型而非单篇文章。与下方 \"专题内文章更新\" 存在明显区别！","location":"topics.ts"}' :test='{"code":0}' />

此为专题广场更新提示 => 集合型而非单篇文章。与下方 "专题内文章更新" 存在明显区别！

### 最新上架付费专栏 <Site url="sspai.com/series" size="sm" />

<Route namespace="sspai" :data='{"path":"/series","categories":["new-media","popular"],"example":"/sspai/series","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["sspai.com/series"]}],"name":"最新上架付费专栏","maintainers":["HenryQW"],"url":"sspai.com/series","description":"> 少数派专栏需要付费订阅，RSS 仅做更新提醒，不含付费内容.","location":"series.ts"}' :test='{"code":1,"message":"AssertionError: expected [ …(21) ] to not include &#39;https://sspai.com/series/380&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:1143:17)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:920:17)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@5.1.2/node_modules/chai/chai.js:1610:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1740)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)"}' />

> 少数派专栏需要付费订阅，RSS 仅做更新提醒，不含付费内容.

### 作者动态 <Site url="sspai.com" size="sm" />

<Route namespace="sspai" :data='{"path":"/activity/:slug","categories":["new-media","popular"],"example":"/sspai/activity/urfp0d9i","parameters":{"slug":"作者 slug，可在作者主页URL中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["sspai.com/u/:id/updates"],"target":"/activity/:id"}],"name":"作者动态","maintainers":["umm233"],"location":"activity.ts"}' :test='{"code":1,"message":"AssertionError: expected [ Array(4) ] to not include &#39;https://sspai.com/post/65408&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:1143:17)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:920:17)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@5.1.2/node_modules/chai/chai.js:1610:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1733)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)"}' />

### 作者 <Site url="sspai.com" size="sm" />

<Route namespace="sspai" :data='{"path":"/author/:id","categories":["new-media","popular"],"example":"/sspai/author/796518","parameters":{"id":"作者 slug 或 id，slug 可在作者主页URL中找到，id 不易查找，仅作兼容"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["sspai.com/u/:id/posts"]}],"name":"作者","maintainers":["SunShinenny","hoilc"],"location":"author.ts"}' :test='{"code":0}' />

## 深潮 TechFlow <Site url="techflowpost.com"/>

### 快讯 <Site url="techflowpost.com/" size="sm" />

<Route namespace="techflowpost" :data='{"path":"/express","categories":["finance","popular"],"view":0,"example":"/techflowpost/express","radar":[{"source":["techflowpost.com/newsletter/index.html"]}],"name":"快讯","maintainers":["nczitzk"],"url":"techflowpost.com/","location":"express.ts"}' :test='{"code":0}' />

### 首页 <Site url="techflowpost.com/" size="sm" />

<Route namespace="techflowpost" :data='{"path":"/","example":"/techflowpost","radar":[{"source":["techflowpost.com/"]}],"name":"首页","categories":["finance","popular"],"view":0,"maintainers":["nczitzk"],"url":"techflowpost.com/","location":"index.ts"}' :test='{"code":0}' />

## 什么值得买 <Site url="post.smzdm.com"/>

::: tip
网站也提供了部分 RSS: [https://www.smzdm.com/dingyue](https://www.smzdm.com/dingyue)
:::

### 关键词 <Site url="post.smzdm.com" size="sm" />

<Route namespace="smzdm" :data='{"path":"/keyword/:keyword","categories":["shopping","popular"],"view":5,"example":"/smzdm/keyword/女装","parameters":{"keyword":"你想订阅的关键词"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"关键词","maintainers":["DIYgod","MeanZhang"],"location":"keyword.ts"}' :test='{"code":0}' />

### 排行榜 <Site url="post.smzdm.com" size="sm" />

<Route namespace="smzdm" :data='{"path":"/ranking/:rank_type/:rank_id/:hour","categories":["shopping","popular"],"view":5,"example":"/smzdm/ranking/pinlei/11/3","parameters":{"rank_type":{"description":"榜单类型","options":[{"value":"pinlei","label":"好价品类榜"},{"value":"dianshang","label":"好价电商榜"},{"value":"haitao","label":"海淘 TOP 榜"},{"value":"haowen","label":"好文排行榜"},{"value":"haowu","label":"好物排行榜"}]},"rank_id":{"description":"榜单ID","options":[{"label":"好价品类榜 - 全部","value":"11"},{"label":"好价品类榜 - 食品生鲜","value":"12"},{"label":"好价品类榜 - 电脑数码","value":"13"},{"label":"好价品类榜 - 运动户外","value":"14"},{"label":"好价品类榜 - 家用电器","value":"15"},{"label":"好价品类榜 - 白菜","value":"17"},{"label":"好价品类榜 - 服饰鞋包","value":"74"},{"label":"好价品类榜 - 日用百货","value":"75"},{"label":"好价电商榜 - 券活动","value":"24"},{"label":"好价电商榜 - 京东","value":"23"},{"label":"好价电商榜 - 天猫","value":"25"},{"label":"好价电商榜 - 亚马逊中国","value":"26"},{"label":"好价电商榜 - 国美在线","value":"27"},{"label":"好价电商榜 - 苏宁易购","value":"28"},{"label":"好价电商榜 - 网易","value":"29"},{"label":"好价电商榜 - 西集网","value":"30"},{"label":"好价电商榜 - 美国亚马逊","value":"31"},{"label":"好价电商榜 - 日本亚马逊","value":"32"},{"label":"好价电商榜 - ebay","value":"33"},{"label":"海淘 TOP 榜 - 全部","value":"39"},{"label":"海淘 TOP 榜 - 海外直邮","value":"34"},{"label":"海淘 TOP 榜 - 美国榜","value":"35"},{"label":"海淘 TOP 榜 - 欧洲榜","value":"36"},{"label":"海淘 TOP 榜 - 澳新榜","value":"37"},{"label":"海淘 TOP 榜 - 亚洲榜","value":"38"},{"label":"海淘 TOP 榜 - 晒物榜","value":"hsw"},{"label":"好文排行榜 - 原创","value":"yc"},{"label":"好文排行榜 - 资讯","value":"zx"},{"label":"好物排行榜 - 新晋榜","value":"hwall"},{"label":"好物排行榜 - 消费众测","value":"zc"},{"label":"好物排行榜 - 新锐品牌","value":"nb"},{"label":"好物排行榜 - 好物榜单","value":"hw"}]},"hour":{"description":"时间跨度","options":[{"value":"3","label":"3 小时"},{"value":"12","label":"12 小时"},{"value":"24","label":"24 小时"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"排行榜","maintainers":["DIYgod"],"location":"ranking.ts"}' :test='{"code":1,"message":"AssertionError: expected NaN to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1706)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)"}' />

## 时刻新闻 <Site url="timednews.com"/>

### 新闻 <Site url="timednews.com" size="sm" />

<Route namespace="timednews" :data='{"path":"/news/:type?","categories":["new-media","popular"],"example":"/timednews/news","parameters":{"type":"子分类，见下表，默认为全部"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"新闻","maintainers":["linbuxiao"],"description":"子分类\n\n  | 全部 | 时政           | 财经    | 科技       | 社会   | 体娱   | 国际          | 美国 | 中国 | 欧洲   | 评论     |\n  | ---- | -------------- | ------- | ---------- | ------ | ------ | ------------- | ---- | ---- | ------ | -------- |\n  | all  | currentAffairs | finance | technology | social | sports | international | usa  | cn   | europe | comments |","location":"news.ts"}' :test='{"code":0}' />

子分类

  | 全部 | 时政           | 财经    | 科技       | 社会   | 体娱   | 国际          | 美国 | 中国 | 欧洲   | 评论     |
  | ---- | -------------- | ------- | ---------- | ------ | ------ | ------------- | ---- | ---- | ------ | -------- |
  | all  | currentAffairs | finance | technology | social | sports | international | usa  | cn   | europe | comments |

## 书伴 <Site url="bookfere.com"/>

### 分类 <Site url="bookfere.com" size="sm" />

<Route namespace="bookfere" :data='{"path":"/:category","categories":["reading","popular"],"view":0,"example":"/bookfere/skills","parameters":{"category":{"description":"分类名","options":[{"value":"weekly","label":"每周一书"},{"value":"skills","label":"使用技巧"},{"value":"books","label":"图书推荐"},{"value":"news","label":"新闻速递"},{"value":"essay","label":"精选短文"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"分类","maintainers":["OdinZhang"],"description":"| 每周一书 | 使用技巧 | 图书推荐 | 新闻速递 | 精选短文 |\n  | -------- | -------- | -------- | -------- | -------- |\n  | weekly   | skills   | books    | news     | essay    |","location":"category.ts"}' :test='{"code":0}' />

| 每周一书 | 使用技巧 | 图书推荐 | 新闻速递 | 精选短文 |
  | -------- | -------- | -------- | -------- | -------- |
  | weekly   | skills   | books    | news     | essay    |

## 司机社 <Site url="xsijishe.com"/>

### 排行榜 <Site url="xsijishe.com" size="sm" />

<Route namespace="xsijishe" :data='{"path":"/rank/:type","categories":["bbs","popular"],"example":"/xsijishe/rank/weekly","parameters":{"type":{"description":"排行榜类型","options":[{"value":"weekly","label":"周榜"},{"value":"monthly","label":"月榜"}]}},"features":{"requireConfig":[{"name":"XSIJISHE_COOKIE","description":""},{"name":"XSIJISHE_USER_AGENT","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"排行榜","maintainers":["akynazh","AiraNadih"],"location":"rank.ts"}' :test='undefined' />

## 搜狐号 <Site url="sohu.com"/>

### 最新 <Site url="sohu.com" size="sm" />

<Route namespace="sohu" :data='{"path":"/mp/:xpt","categories":["new-media","popular"],"example":"/sohu/mp/c29odXptdGhnbjZ3NEBzb2h1LmNvbQ==","parameters":{"xpt":"搜狐号 xpt ，可在URL中找到或搜狐号 ID"},"radar":[{"source":["mp.sohu.com/profile"]}],"name":"最新","maintainers":["HenryQW"],"description":"搜狐号 ID 可以通过以下方式获取：\n  1.  通过浏览器搜索相关搜狐号 `果壳 site: mp.sohu.com`。\n  2.  通过浏览器控制台执行 `window.globalConst.mkeyConst_mkey`，返回的即为搜狐号 ID。","location":"mp.ts"}' :test='{"code":0}' />

搜狐号 ID 可以通过以下方式获取：
  1.  通过浏览器搜索相关搜狐号 `果壳 site: mp.sohu.com`。
  2.  通过浏览器控制台执行 `window.globalConst.mkeyConst_mkey`，返回的即为搜狐号 ID。

## 太平洋科技 <Site url="pconline.com.cn"/>


::: tip
太平洋科技是专业IT门户网站,为用户和经销商提供IT资讯和行情报价,涉及电脑,手机,数码产品,软件等.
:::

### 科技新闻 <Site url="pconline.com.cn" size="sm" />

<Route namespace="pconline" :data='{"path":"/focus/:category?","categories":["new-media","popular"],"example":"/pconline/focus","parameters":{"category":{"description":"科技新闻的类别，获取最新的一页，分别：all, tech, finance, life, company, character","default":"all"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["pconline.com.cn/focus/","pconline.com.cn/"],"target":"/focus"}],"name":"科技新闻","maintainers":["CH563"],"description":"::: tip\n| 全部 | 科技 | 财经 | 生活 | 公司 | 人物 |\n| --- | --- | --- | --- | --- | --- |\n| all | tech | finance | life | company | character |\n:::","location":"focus.ts"}' :test='{"code":0}' />

::: tip
| 全部 | 科技 | 财经 | 生活 | 公司 | 人物 |
| --- | --- | --- | --- | --- | --- |
| all | tech | finance | life | company | character |
:::

## 听听 FM <Site url="mobile.tingtingfm.com"/>

### 节目 <Site url="mobile.tingtingfm.com" size="sm" />

<Route namespace="tingtingfm" :data='{"path":"/program/:programId","categories":["multimedia","popular"],"view":4,"example":"/tingtingfm/program/M7VJv6Jj4R","parameters":{"programId":"节目 ID，可以在 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":true,"supportScihub":false},"radar":[{"source":["mobile.tingtingfm.com/v3/program/:programId"]}],"name":"节目","maintainers":["TonyRL"],"location":"program.ts"}' :test='{"code":0}' />

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

指定更多与默认值不同的参数选项可以改善 RSS 的可读性，如

[https://rsshub.app/weibo/user/1642909335/readable=1&authorNameBold=1&showAuthorInTitle=1&showAuthorInDesc=1&showAuthorAvatarInDesc=1&showEmojiForRetweet=1&showRetweetTextInTitle=0&addLinkForPics=1&showTimestampInDescription=1&showTimestampInDescription=1&heightOfPics=150](https://rsshub.app/weibo/user/1642909335/readable=1&authorNameBold=1&showAuthorInTitle=1&showAuthorInDesc=1&showAuthorAvatarInDesc=1&showEmojiForRetweet=1&showRetweetTextInTitle=0&addLinkForPics=1&showTimestampInDescription=1&showTimestampInDescription=1&heightOfPics=150)

的效果为

<img loading="lazy" src="/img/readable-weibo.png" alt="微博小秘书的可读微博 RSS" />

### 博主 <Site url="weibo.com" size="sm" />

<Route namespace="weibo" :data='{"path":"/user/:uid/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/weibo/user/1195230310","parameters":{"uid":"用户 id, 博主主页打开控制台执行 `$CONFIG.oid` 获取","routeParams":"额外参数；请参阅上面的说明和表格；特别地，当 `routeParams=1` 时开启微博视频显示"},"features":{"requireConfig":[{"name":"WEIBO_COOKIES","optional":true,"description":""}],"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["m.weibo.cn/u/:uid","m.weibo.cn/profile/:uid"],"target":"/user/:uid"},{"source":["weibo.com/u/:uid"],"target":"/user/:uid"},{"source":["www.weibo.com/u/:uid"],"target":"/user/:uid"}],"name":"博主","maintainers":["DIYgod","iplusx","Rongronggg9","Konano"],"description":"::: warning\n  部分博主仅登录可见，未提供 Cookie 的情况下不支持订阅，可以通过打开 `https://m.weibo.cn/u/:uid` 验证\n:::","location":"user.ts"}' :test='{"code":0}' />

::: warning
  部分博主仅登录可见，未提供 Cookie 的情况下不支持订阅，可以通过打开 `https://m.weibo.cn/u/:uid` 验证
:::

### 关键词 <Site url="weibo.com" size="sm" />

<Route namespace="weibo" :data='{"path":"/keyword/:keyword/:routeParams?","categories":["social-media","popular"],"view":1,"example":"/weibo/keyword/RSSHub","parameters":{"keyword":"你想订阅的微博关键词","routeParams":"额外参数；请参阅上面的说明和表格"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"关键词","maintainers":["DIYgod","Rongronggg9"],"location":"keyword.ts"}' :test='{"code":0}' />

### 热搜榜 <Site url="s.weibo.com/top/summary" size="sm" />

<Route namespace="weibo" :data='{"path":"/search/hot/:fulltext?","categories":["social-media","popular"],"view":1,"example":"/weibo/search/hot","parameters":{"fulltext":{"description":"\n-   使用`/weibo/search/hot`可以获取热搜条目列表；\n-   使用`/weibo/search/hot/fulltext`可以进一步获取热搜条目下的摘要信息（不含图片视频）；\n-   使用`/weibo/search/hot/fulltext?pic=true`可以获取图片缩略（但需要配合额外的手段，例如浏览器上的 Header Editor 等来修改 referer 参数为`https://weibo.com`，以规避微博的外链限制，否则图片无法显示。）\n-   使用`/weibo/search/hot/fulltext?pic=true&fullpic=true`可以获取 Original 图片（但需要配合额外的手段，例如浏览器上的 Header Editor 等来修改 referer 参数为`https://weibo.com`，以规避微博的外链限制，否则图片无法显示。）"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["s.weibo.com/top/summary"]}],"name":"热搜榜","maintainers":["xyqfer","shinemoon"],"url":"s.weibo.com/top/summary","location":"search/hot.ts"}' :test='{"code":0}' />

## 小红书 <Site url="xiaohongshu.com"/>

### 用户笔记/收藏 <Site url="xiaohongshu.com" size="sm" />

<Route namespace="xiaohongshu" :data='{"path":"/user/:user_id/:category/:routeParams?","name":"用户笔记/收藏","categories":["social-media","popular"],"view":0,"maintainers":["lotosbin","howerhe","rien7","dddaniel1","pseudoyu"],"radar":[{"source":["xiaohongshu.com/user/profile/:user_id"],"target":"/user/:user_id/notes"}],"example":"/xiaohongshu/user/593032945e87e77791e03696/notes","features":{"antiCrawler":true,"requirePuppeteer":true,"requireConfig":[{"name":"XIAOHONGSHU_COOKIE","optional":true,"description":"小红书 cookie 值，可在网络里面看到。"}]},"parameters":{"user_id":"user id, length 24 characters","category":{"description":"category, notes or collect","options":[{"value":"notes","label":"notes"},{"value":"collect","label":"collect"}],"default":"notes"},"routeParams":{"description":"displayLivePhoto,`/user/:user_id/notes/displayLivePhoto=0`,不限时LivePhoto显示为图片,`/user/:user_id/notes/displayLivePhoto=1`,取值不为0时LivePhoto显示为视频","default":"0"}},"location":"user.ts"}' :test='{"code":1,"message":"AssertionError: expected [ &#39;好多人啊（周迅表情包）………………………&#39;, …(21) ] to not include &#39;🔥立志爬遍天下名山…………………………………………………………&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:1143:17)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:920:17)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@5.1.2/node_modules/chai/chai.js:1610:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 2068)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)"}' />

## 小宇宙 <Site url="xiaoyuzhoufm.com"/>

### 播客 <Site url="xiaoyuzhoufm.com/" size="sm" />

<Route namespace="xiaoyuzhou" :data='{"path":"/podcast/:id","categories":["multimedia","popular"],"view":4,"example":"/xiaoyuzhou/podcast/6021f949a789fca4eff4492c","parameters":{"id":"播客 id 或单集 id，可以在小宇宙播客的 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["xiaoyuzhoufm.com/podcast/:id","xiaoyuzhoufm.com/episode/:id"]}],"name":"播客","maintainers":["hondajojo","jtsang4","pseudoyu"],"url":"xiaoyuzhoufm.com/","location":"podcast.ts"}' :test='{"code":0}' />

## 意林杂志 <Site url="www.yilinzazhi.com"/>

### 近期文章汇总 <Site url="www.yilinzazhi.com" size="sm" />

<Route namespace="yilinzazhi" :data='{"path":"/latest","categories":["reading","popular"],"view":0,"example":"/yilinzazhi/latest","radar":[{"source":["www.yilinzazhi.com"],"target":"/"}],"name":"近期文章汇总","maintainers":["g0ngjie"],"url":"www.yilinzazhi.com","description":"最近一期的文章汇总","location":"latest.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 2124)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

最近一期的文章汇总

### 文章列表 <Site url="www.yilinzazhi.com" size="sm" />

<Route namespace="yilinzazhi" :data='{"path":"/","categories":["reading","popular"],"view":0,"example":"/yilinzazhi","radar":[{"source":["www.yilinzazhi.com"],"target":"/"}],"name":"文章列表","maintainers":["g0ngjie"],"url":"www.yilinzazhi.com","location":"index.ts"}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:66:18)\n    at listOnTimeout (node:internal/timers:594:17)\n    at processTimers (node:internal/timers:529:7)"}' />

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

::: tip
自2024年7月，未登录状态下大部分路由[无法获取全文](https://github.com/DIYgod/RSSHub/issues/16260)。若有需要请在登陆知乎后寻找并添加包含`z_c0`的Cookies至环境变量`ZHIHU_COOKIES`。
:::

### 用户动态 <Site url="www.zhihu.com" size="sm" />

<Route namespace="zhihu" :data='{"path":"/people/activities/:id","categories":["social-media","popular"],"view":0,"example":"/zhihu/people/activities/diygod","parameters":{"id":"作者 id，可在用户主页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.zhihu.com/people/:id"]}],"name":"用户动态","maintainers":["DIYgod"],"location":"activities.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 2159)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### 知乎热榜 <Site url="www.zhihu.com" size="sm" />

<Route namespace="zhihu" :data='{"path":"/hot/:category?","categories":["social-media","popular"],"example":"/zhihu/hot","view":0,"parameters":{"category":{"description":"分类","default":"total","options":[{"value":"total","label":"全站"},{"value":"focus","label":"国际"},{"value":"science","label":"科学"},{"value":"car","label":"汽车"},{"value":"zvideo","label":"视频"},{"value":"fashion","label":"时尚"},{"value":"depth","label":"时事"},{"value":"digital","label":"数码"},{"value":"sport","label":"体育"},{"value":"school","label":"校园"},{"value":"film","label":"影视"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"知乎热榜","maintainers":["nczitzk"],"location":"hot.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 2165)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

## 智通财经网 <Site url="zhitongcaijing.com"/>

### 推荐 <Site url="zhitongcaijing.com" size="sm" />

<Route namespace="zhitongcaijing" :data='{"path":"/:id?/:category?","categories":["finance","popular"],"view":0,"example":"/zhitongcaijing","parameters":{"id":"栏目 id，可在对应栏目页 URL 中找到，默认为 recommend，即推荐","category":"分类 id，可在对应栏目子分类页 URL 中找到，默认为全部"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"推荐","maintainers":["nczitzk"],"description":"| id           | 栏目 |\n  | ------------ | ---- |\n  | recommend    | 推荐 |\n  | hkstock      | 港股 |\n  | meigu        | 美股 |\n  | agu          | 沪深 |\n  | ct           | 创投 |\n  | esg          | ESG  |\n  | aqs          | 券商 |\n  | ajj          | 基金 |\n  | focus        | 要闻 |\n  | announcement | 公告 |\n  | research     | 研究 |\n  | shares       | 新股 |\n  | bazaar       | 市场 |\n  | company      | 公司 |","location":"index.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 2182)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

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

