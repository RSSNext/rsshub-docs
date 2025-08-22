# 💻 编程

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

### Repo Issues <Site url="github.com" size="sm" />

<Route namespace="github" :data='{"path":"/issue/:user/:repo/:state?/:labels?","categories":["programming"],"view":5,"example":"/github/issue/DIYgod/RSSHub/open","parameters":{"user":"GitHub username","repo":"GitHub repo name","state":{"description":"the state of the issues.","default":"open","options":[{"label":"Open","value":"open"},{"label":"Closed","value":"closed"},{"label":"All","value":"all"}]},"labels":"a list of comma separated label names"},"radar":[{"source":["github.com/:user/:repo/issues","github.com/:user/:repo/issues/:id","github.com/:user/:repo"],"target":"/issue/:user/:repo"}],"name":"Repo Issues","maintainers":["HenryQW","AndreyMZ"],"location":"issue.ts","heat":638,"topFeeds":[]}' :test='{"code":0}' />

### Repo Branches <Site url="github.com" size="sm" />

<Route namespace="github" :data='{"path":"/branches/:user/:repo","categories":["programming"],"example":"/github/branches/DIYgod/RSSHub","parameters":{"user":"User name","repo":"Repo name"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["github.com/:user/:repo/branches","github.com/:user/:repo"]}],"name":"Repo Branches","maintainers":["max-arnold"],"location":"branches.ts","heat":319,"topFeeds":[]}' :test='{"code":0}' />

### Issue / Pull Request comments <Site url="github.com" size="sm" />

<Route namespace="github" :data='{"path":"/comments/:user/:repo/:number?","categories":["programming"],"example":"/github/comments/DIYgod/RSSHub/8116","parameters":{"user":"User / Org name","repo":"Repo name","number":"Issue or pull number (if omitted: all)"},"radar":[{"source":["github.com/:user/:repo/:type","github.com/:user/:repo/:type/:number"],"target":"/comments/:user/:repo/:number?"}],"name":"Issue / Pull Request comments","maintainers":["TonyRL","FliegendeWurst"],"location":"comments.ts","heat":308,"topFeeds":[]}' :test='{"code":0}' />

### User Repo <Site url="github.com" size="sm" />

<Route namespace="github" :data='{"path":"/repos/:user/:type?/:sort?","categories":["programming"],"example":"/github/repos/DIYgod","parameters":{"user":"GitHub username","type":"Type of repository, can be `all`, `owner`, `member`, `public`, `private`, `forks`, `sources`","sort":"Sort by `created`, `updated`, `pushed`, `full_name`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["github.com/:user"]}],"name":"User Repo","maintainers":["DIYgod"],"location":"repos.ts","heat":172,"topFeeds":[]}' :test='{"code":0}' />

### File Commits <Site url="github.com" size="sm" />

<Route namespace="github" :data='{"path":"/file/:user/:repo/:branch/:filepath{.+}","example":"/github/file/DIYgod/RSSHub/master/README.md","parameters":{"user":"GitHub user or org name","repo":"repository name","branch":"branch name","filepath":"path of target file"},"radar":[{"source":["github.com/:user/:repo/blob/:branch/*filepath"],"target":"/file/:user/:repo/:branch/:filepath"}],"name":"File Commits","maintainers":["zengxs"],"location":"file.ts","heat":144,"topFeeds":[]}' :test='{"code":0}' />

### Repo Stars <Site url="github.com" size="sm" />

<Route namespace="github" :data='{"path":"/stars/:user/:repo","categories":["programming"],"example":"/github/stars/DIYgod/RSSHub","view":5,"parameters":{"user":"GitHub username","repo":"GitHub repo name"},"features":{"requireConfig":[{"name":"GITHUB_ACCESS_TOKEN","description":"GitHub Access Token"}]},"radar":[{"source":["github.com/:user/:repo/stargazers","github.com/:user/:repo"]}],"name":"Repo Stars","maintainers":["HenryQW"],"location":"star.ts","heat":140,"topFeeds":[]}' :test='undefined' />

### User Starred Repositories <Site url="github.com" size="sm" />

<Route namespace="github" :data='{"path":"/starred_repos/:user","categories":["programming"],"example":"/github/starred_repos/DIYgod","parameters":{"user":"User name"},"features":{"requireConfig":[{"name":"GITHUB_ACCESS_TOKEN","optional":true,"description":"To get more requests"}]},"radar":[{"source":["github.com/:user"]}],"name":"User Starred Repositories","maintainers":["LanceZhu"],"location":"starred-repos.ts","heat":121,"topFeeds":[]}' :test='{"code":0}' />

### Topics <Site url="github.com/topics" size="sm" />

<Route namespace="github" :data='{"path":"/topics/:name/:qs?","categories":["programming"],"example":"/github/topics/framework","parameters":{"name":"Topic name, which can be found in the URL of the corresponding [Topics Page](https://github.com/topics/framework)","qs":"Query string, like `l=php&o=desc&s=stars`. Details listed as follows:"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["github.com/topics"]}],"name":"Topics","maintainers":["queensferryme"],"url":"github.com/topics","description":"| Parameter | Description      | Values                                                                                                                          |\n| --------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------- |\n| `l`       | Language         | For instance `php`, which can be found in the URL of the corresponding [Topics page](https://github.com/topics/framework?l=php) |\n| `o`       | Sorting Order    | `asc`, `desc`                                                                                                                   |\n| `s`       | Sorting Criteria | `stars`, `forks`, `updated`                                                                                                     |\n\n  For instance, the `/github/topics/framework/l=php&o=desc&s=stars` route will generate the RSS feed corresponding to this [page](https://github.com/topics/framework?l=php&o=desc&s=stars).","location":"topic.ts","heat":83,"topFeeds":[]}' :test='{"code":0}' />

| Parameter | Description      | Values                                                                                                                          |
| --------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `l`       | Language         | For instance `php`, which can be found in the URL of the corresponding [Topics page](https://github.com/topics/framework?l=php) |
| `o`       | Sorting Order    | `asc`, `desc`                                                                                                                   |
| `s`       | Sorting Criteria | `stars`, `forks`, `updated`                                                                                                     |

  For instance, the `/github/topics/framework/l=php&o=desc&s=stars` route will generate the RSS feed corresponding to this [page](https://github.com/topics/framework?l=php&o=desc&s=stars).

### Repo Pull Requests <Site url="github.com" size="sm" />

<Route namespace="github" :data='{"path":"/pull/:user/:repo/:state?/:labels?","categories":["programming"],"example":"/github/pull/DIYgod/RSSHub","parameters":{"user":"User name","repo":"Repo name","state":"the state of pull requests. Can be either `open`, `closed`, or `all`. Default: `open`.","labels":"a list of comma separated label names"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["github.com/:user/:repo/pulls","github.com/:user/:repo/pulls/:id","github.com/:user/:repo"],"target":"/pull/:user/:repo"}],"name":"Repo Pull Requests","maintainers":["hashman","TonyRL"],"location":"pulls.ts","heat":69,"topFeeds":[]}' :test='{"code":0}' />

### Repo Discussions <Site url="github.com" size="sm" />

<Route namespace="github" :data='{"path":"/discussion/:user/:repo/:state?/:category?","categories":["programming"],"example":"/github/discussion/DIYgod/RSSHub","parameters":{"user":"User name","repo":"Repo name","state":{"description":"The state of discussions","default":"open","options":[{"label":"Open","value":"open"},{"label":"Closed","value":"closed"},{"label":"Answered","value":"answered"},{"label":"Unanswered","value":"unanswered"},{"label":"Locked","value":"locked"},{"label":"Unlocked","value":"unlocked"},{"label":"All","value":"all"}]},"category":"Category Name (case-sensitive). Default: `null`."},"features":{"requireConfig":[{"name":"GITHUB_ACCESS_TOKEN","description":"GitHub Access Token"}]},"radar":[{"source":["github.com/:user/:repo/discussions","github.com/:user/:repo/discussions/:id","github.com/:user/:repo"],"target":"/discussion/:user/:repo"}],"name":"Repo Discussions","maintainers":["waynzh"],"location":"discussions.ts","heat":51,"topFeeds":[]}' :test='undefined' />

### User Followers <Site url="github.com" size="sm" />

<Route namespace="github" :data='{"path":"/user/followers/:user","categories":["programming"],"example":"/github/user/followers/HenryQW","parameters":{"user":"GitHub username"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["github.com/:user"]}],"name":"User Followers","maintainers":["HenryQW"],"location":"follower.ts","heat":18,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 900)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

### Wiki History <Site url="github.com" size="sm" />

<Route namespace="github" :data='{"path":"/wiki/:user/:repo/:page?","categories":["programming"],"example":"/github/wiki/flutter/flutter/Roadmap","parameters":{"user":"User / Org name","repo":"Repo name","page":"Page slug, can be found in URL, empty means Home"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["github.com/:user/:repo/wiki/:page/_history","github.com/:user/:repo/wiki/:page","github.com/:user/:repo/wiki/_history","github.com/:user/:repo/wiki"],"target":"/wiki/:user/:repo/:page"}],"name":"Wiki History","maintainers":["TonyRL"],"location":"wiki.ts","heat":16,"topFeeds":[]}' :test='{"code":0}' />

### Repo Contributors <Site url="github.com" size="sm" />

<Route namespace="github" :data='{"path":"/contributors/:user/:repo/:order?/:anon?","categories":["programming"],"example":"/github/contributors/DIYgod/RSSHub","parameters":{"user":"User name","repo":"Repo name","order":"Sort order by commit numbers, desc and asc (descending by default)","anon":"Show anonymous users. Defaults to no, use any values for yes."},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["github.com/:user/:repo/graphs/contributors","github.com/:user/:repo"],"target":"/contributors/:user/:repo"}],"name":"Repo Contributors","maintainers":["zoenglinghou"],"location":"contributors.ts","heat":14,"topFeeds":[]}' :test='{"code":0}' />

### Search Result <Site url="github.com" size="sm" />

<Route namespace="github" :data='{"path":"/search/:query/:sort?/:order?","categories":["programming"],"example":"/github/search/RSSHub/bestmatch/desc","parameters":{"query":"search keyword","sort":"Sort options (default to bestmatch)","order":"Sort order, desc and asc (desc descending by default)"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Search Result","maintainers":["LogicJake"],"description":"| Sort options     | sort      |\n| ---------------- | --------- |\n| Best match       | bestmatch |\n| Most stars       | stars     |\n| Most forks       | forks     |\n| Recently updated | updated   |","location":"search.ts","heat":13,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 907)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

| Sort options     | sort      |
| ---------------- | --------- |
| Best match       | bestmatch |
| Most stars       | stars     |
| Most forks       | forks     |
| Recently updated | updated   |

### Github Advisory Database RSS <Site url="github.com" size="sm" />

<Route namespace="github" :data='{"path":"/advisor/data/:type?/:category?","categories":["programming"],"example":"/github/advisor/data/reviewed/composer","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["github.com/advisories","github.com"]}],"name":"Github Advisory Database RSS","maintainers":["sd0ric4"],"description":"\n| Type | Description | Explanation |\n| --- | --- | --- |\n| reviewed | Reviewed | 已审核 |\n| unreviewed | Unreviewed | 未审核 |\n\n| Category | Description | Explanation |\n| --- | --- | --- |\n| composer | Composer | PHP 依赖管理工具 |\n| go | Go | Go 语言包管理工具 |\n| maven | Maven | Java 项目管理工具 |\n| npm | NPM | Node.js 包管理工具 |\n| nuget | NuGet | .NET 包管理工具 |\n| pip | Pip | Python 包管理工具 |\n| pub | Pub | Dart 包管理工具 |\n| rubygems | RubyGems | Ruby 包管理工具 |\n| rust | Rust | Rust 包管理工具 |\n| erlang | Erlang | Erlang 包管理工具 |\n| actions | Actions | GitHub Actions |\n| swift | Swift | Swift 包管理工具 |","location":"advisor.ts","heat":8,"topFeeds":[]}' :test='{"code":0}' />


| Type | Description | Explanation |
| --- | --- | --- |
| reviewed | Reviewed | 已审核 |
| unreviewed | Unreviewed | 未审核 |

| Category | Description | Explanation |
| --- | --- | --- |
| composer | Composer | PHP 依赖管理工具 |
| go | Go | Go 语言包管理工具 |
| maven | Maven | Java 项目管理工具 |
| npm | NPM | Node.js 包管理工具 |
| nuget | NuGet | .NET 包管理工具 |
| pip | Pip | Python 包管理工具 |
| pub | Pub | Dart 包管理工具 |
| rubygems | RubyGems | Ruby 包管理工具 |
| rust | Rust | Rust 包管理工具 |
| erlang | Erlang | Erlang 包管理工具 |
| actions | Actions | GitHub Actions |
| swift | Swift | Swift 包管理工具 |

### Gist Commits <Site url="github.com" size="sm" />

<Route namespace="github" :data='{"path":"/gist/:gistId","categories":["programming"],"example":"/github/gist/d2c152bb7179d07015f336b1a0582679","parameters":{"gistId":"Gist ID"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gist.github.com/:owner/:gistId/revisions","gist.github.com/:owner/:gistId/stargazers","gist.github.com/:owner/:gistId/forks","gist.github.com/:owner/:gistId"]}],"name":"Gist Commits","maintainers":["TonyRL"],"location":"gist.ts","heat":5,"topFeeds":[]}' :test='{"code":0}' />

### Notifications <Site url="github.com/notifications" size="sm" />

<Route namespace="github" :data='{"path":"/notifications","categories":["programming"],"example":"/github/notifications","features":{"requireConfig":[{"name":"GITHUB_ACCESS_TOKEN","description":""}]},"radar":[{"source":["github.com/notifications"]}],"name":"Notifications","maintainers":["zhzy0077"],"url":"github.com/notifications","location":"notifications.ts","heat":3,"topFeeds":[]}' :test='undefined' />

### User's Feed <Site url="github.com" size="sm" />

<Route namespace="github" :data='{"path":"/feed/:user/:types?","categories":["programming"],"example":"/github/feed/yihong0618/star,release,pr","parameters":{"user":"GitHub username","types":{"description":"Event types to include, comma separated","default":"all","options":[{"label":"All events","value":"all"},{"label":"Create events","value":"create"},{"label":"Delete events","value":"delete"},{"label":"Fork events","value":"fork"},{"label":"Issue comment events","value":"issuecomm"},{"label":"Member events","value":"member"},{"label":"Pull request events","value":"pr"},{"label":"Pull request review comment events","value":"prcomm"},{"label":"Public events","value":"public"},{"label":"Push events","value":"push"},{"label":"Release events","value":"release"},{"label":"Watch events (stars)","value":"star"}]}},"features":{"requireConfig":[{"name":"GITHUB_ACCESS_TOKEN","optional":true,"description":"GitHub access token to access private events"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["github.com/:user"],"target":"/feed/:user"}],"name":"User&#39;s Feed","maintainers":["RtYkk"],"location":"private-feed.ts","heat":1,"topFeeds":[]}' :test='{"code":0}' />

### Repo Pulse <Site url="github.com" size="sm" />

<Route namespace="github" :data='{"path":"/pulse/:user/:repo/:period?","categories":["programming"],"example":"/github/pulse/DIYgod/RSSHub","parameters":{"user":"User name","repo":"Repo name","period":"Time frame, selected from a repository&#39;s Pulse/Insights page. Possible values are: `daily`, `halfweekly`, `weekly`, or `monthly`. Default: `weekly`. If your RSS client supports it, consider aligning the polling frequency of the feed to the period."},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["github.com/:user/:repo/pulse","github.com/:user/:repo/pulse/:period"]}],"name":"Repo Pulse","maintainers":["jameschensmith"],"location":"pulse.ts","heat":1,"topFeeds":[]}' :test='{"code":0}' />

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

### 分类 <Site url="juejin.cn" size="sm" />

<Route namespace="juejin" :data='{"path":"/category/:category","categories":["programming"],"example":"/juejin/category/frontend","parameters":{"category":"分类名"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["juejin.cn/:category"]}],"name":"分类","maintainers":["DIYgod"],"description":"| 后端    | 前端     | Android | iOS | 人工智能 | 开发工具 | 代码人生 | 阅读    |\n| ------- | -------- | ------- | --- | -------- | -------- | -------- | ------- |\n| backend | frontend | android | ios | ai       | freebie  | career   | article |","location":"category.ts","heat":1002,"topFeeds":[]}' :test='{"code":0}' />

| 后端    | 前端     | Android | iOS | 人工智能 | 开发工具 | 代码人生 | 阅读    |
| ------- | -------- | ------- | --- | -------- | -------- | -------- | ------- |
| backend | frontend | android | ios | ai       | freebie  | career   | article |

### 标签 <Site url="juejin.cn" size="sm" />

<Route namespace="juejin" :data='{"path":"/tag/:tag","categories":["programming"],"example":"/juejin/tag/JavaScript","parameters":{"tag":"标签名，可在标签 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["juejin.cn/tag/:tag"]}],"name":"标签","maintainers":["isheng5"],"location":"tag.ts","heat":495,"topFeeds":[]}' :test='{"code":0}' />

### 专栏 <Site url="juejin.cn" size="sm" />

<Route namespace="juejin" :data='{"path":"/column/:id","categories":["programming"],"example":"/juejin/column/6960559453037199391","parameters":{"id":"专栏 id, 可在专栏页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["juejin.cn/column/:id"]}],"name":"专栏","maintainers":["xiangzy1"],"location":"column.ts","heat":237,"topFeeds":[]}' :test='{"code":0}' />

### 沸点 <Site url="juejin.cn" size="sm" />

<Route namespace="juejin" :data='{"path":"/pins/:type?","categories":["programming"],"example":"/juejin/pins/6824710202487472141","parameters":{"type":"默认为 recommend，见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"沸点","maintainers":["xyqfer","laampui"],"description":"| 推荐      | 热门 | 上班摸鱼            | 内推招聘            | 一图胜千言          | 今天学到了          | 每天一道算法题      | 开发工具推荐        | 树洞一下            |\n| --------- | ---- | ------------------- | ------------------- | ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |\n| recommend | hot  | 6824710203301167112 | 6819970850532360206 | 6824710202487472141 | 6824710202562969614 | 6824710202378436621 | 6824710202000932877 | 6824710203112423437 |","location":"pins.ts","heat":57,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1335)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

| 推荐      | 热门 | 上班摸鱼            | 内推招聘            | 一图胜千言          | 今天学到了          | 每天一道算法题      | 开发工具推荐        | 树洞一下            |
| --------- | ---- | ------------------- | ------------------- | ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| recommend | hot  | 6824710203301167112 | 6819970850532360206 | 6824710202487472141 | 6824710202562969614 | 6824710202378436621 | 6824710202000932877 | 6824710203112423437 |

### 小册 <Site url="juejin.cn/books" size="sm" />

<Route namespace="juejin" :data='{"path":"/books","categories":["programming"],"example":"/juejin/books","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["juejin.cn/books"]}],"name":"小册","maintainers":["xyqfer"],"url":"juejin.cn/books","description":"> 掘金小册需要付费订阅，RSS 仅做更新提醒，不含付费内容.","location":"books.ts","heat":21,"topFeeds":[]}' :test='{"code":0}' />

> 掘金小册需要付费订阅，RSS 仅做更新提醒，不含付费内容.

### 单个收藏夹 <Site url="juejin.cn" size="sm" />

<Route namespace="juejin" :data='{"path":"/collection/:collectionId","categories":["programming"],"example":"/juejin/collection/6845243180586123271","parameters":{"collectionId":"收藏夹唯一标志符, 在浏览器地址栏URL中能够找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["juejin.cn/collection/:collectionId"]}],"name":"单个收藏夹","maintainers":["yang131323"],"location":"collection.ts","heat":7,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1331)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

### 收藏集 <Site url="juejin.cn" size="sm" />

<Route namespace="juejin" :data='{"path":"/collections/:userId","categories":["programming"],"example":"/juejin/collections/1697301682482439","parameters":{"userId":"用户唯一标志符, 在浏览器地址栏URL中能够找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["juejin.cn/user/:id","juejin.cn/user/:id/collections"],"target":"/collections/:id"}],"name":"收藏集","maintainers":["yang131323"],"location":"collections.ts","heat":6,"topFeeds":[]}' :test='{"code":0}' />

## Hacker News <Site url="ycombinator.com"/>

### User <Site url="ycombinator.com" size="sm" />

<Route namespace="hackernews" :data='{"path":"/:section?/:type?/:user?","categories":["programming","popular"],"view":0,"example":"/hackernews/threads/comments_list/dang","parameters":{"section":{"description":"Content section, default to `index`"},"type":{"description":"Link type, default to `sources`"},"user":{"description":"Set user, only valid in `threads` and `submitted` sections"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["news.ycombinator.com/:section","news.ycombinator.com/"]}],"name":"User","maintainers":["nczitzk","xie-dongping"],"description":"Subscribe to the content of a specific user","location":"index.ts","heat":4777,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected NaN to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1054)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)"}' />

Subscribe to the content of a specific user

## HelloGitHub <Site url="hellogithub.com"/>

### 开源项目 <Site url="hellogithub.com" size="sm" />

<Route namespace="hellogithub" :data='{"path":"/home/:sort?/:id?","categories":["programming","popular"],"example":"/hellogithub/home","parameters":{"sort":"排序方式，见下表，默认为 `featured`，即精选","id":"标签 id，可在对应标签页 URL 中找到，默认为全部标签"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"开源项目","maintainers":["moke8","nczitzk","CaoMeiYouRen"],"description":"| 精选 | 全部 |\n| ---- | ---- |\n| featured  | all |","location":"index.ts","heat":1155,"topFeeds":[]}' :test='{"code":0}' />

| 精选 | 全部 |
| ---- | ---- |
| featured  | all |

### 月刊 <Site url="hellogithub.com" size="sm" />

<Route namespace="hellogithub" :data='{"path":"/volume","example":"/hellogithub/volume","name":"月刊","maintainers":["moke8","nczitzk","CaoMeiYouRen"],"location":"volume.ts","heat":1033,"topFeeds":[]}' :test='{"code":0}' />

### 文章 <Site url="hellogithub.com" size="sm" />

<Route namespace="hellogithub" :data='{"path":"/article/:sort?","categories":["programming"],"example":"/hellogithub/article","parameters":{"sort":"排序方式，见下表，默认为 `last`，即最近"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"文章","maintainers":["moke8","nczitzk","CaoMeiYouRen"],"description":"| 热门 | 最近 |\n| ---- | ---- |\n| hot  | last |","location":"article.ts","heat":134,"topFeeds":[]}' :test='{"code":0}' />

| 热门 | 最近 |
| ---- | ---- |
| hot  | last |

### 榜单报告 <Site url="hellogithub.com" size="sm" />

<Route namespace="hellogithub" :data='{"path":"/ranking/:type?","example":"/hellogithub/ranking","name":"榜单报告","maintainers":["moke8","nczitzk"],"description":"| 编程语言 | 服务器   | 数据库     |\n| -------- | -------- | ---------- |\n| tiobe    | netcraft | db-engines |","location":"report.ts","heat":44,"topFeeds":[]}' :test='{"code":0}' />

| 编程语言 | 服务器   | 数据库     |
| -------- | -------- | ---------- |
| tiobe    | netcraft | db-engines |

## Anthropic <Site url="anthropic.com"/>

### News <Site url="www.anthropic.com/news" size="sm" />

<Route namespace="anthropic" :data='{"path":"/news","categories":["programming","popular"],"example":"/anthropic/news","parameters":{},"radar":[{"source":["www.anthropic.com/news","www.anthropic.com"]}],"name":"News","maintainers":["etShaw-zh"],"url":"www.anthropic.com/news","location":"news.ts","heat":1468,"topFeeds":[]}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:44:18)\n    at listOnTimeout (node:internal/timers:588:17)\n    at processTimers (node:internal/timers:523:7)"}' />

### Engineering <Site url="www.anthropic.com/engineering" size="sm" />

<Route namespace="anthropic" :data='{"path":"/engineering","categories":["programming"],"example":"/anthropic/engineering","radar":[{"source":["www.anthropic.com/engineering","www.anthropic.com"]}],"name":"Engineering","maintainers":["TonyRL"],"url":"www.anthropic.com/engineering","location":"engineering.ts","heat":198,"topFeeds":[]}' :test='{"code":0}' />

### Research <Site url="www.anthropic.com/research" size="sm" />

<Route namespace="anthropic" :data='{"path":"/research","categories":["programming"],"example":"/anthropic/research","parameters":{},"radar":[{"source":["www.anthropic.com/research","www.anthropic.com"]}],"name":"Research","maintainers":["ttttmr"],"url":"www.anthropic.com/research","location":"research.ts","heat":67,"topFeeds":[]}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:44:18)\n    at listOnTimeout (node:internal/timers:588:17)\n    at processTimers (node:internal/timers:523:7)"}' />

## Huggingface <Site url="huggingface.co"/>

### 中文博客 <Site url="huggingface.co/blog/zh" size="sm" />

<Route namespace="huggingface" :data='{"path":"/blog-zh","categories":["programming"],"example":"/huggingface/blog-zh","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["huggingface.co/blog/zh","huggingface.co/"]}],"name":"中文博客","maintainers":["zcf0508"],"url":"huggingface.co/blog/zh","location":"blog-zh.ts","heat":1020,"topFeeds":[]}' :test='{"code":0}' />

### 英文博客 <Site url="huggingface.co/blog" size="sm" />

<Route namespace="huggingface" :data='{"path":"/blog","categories":["programming"],"example":"/huggingface/blog","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["huggingface.co/blog","huggingface.co/"]}],"name":"英文博客","maintainers":["cesaryuan","zcf0508"],"url":"huggingface.co/blog","location":"blog.ts","heat":114,"topFeeds":[]}' :test='{"code":0}' />

### Community Articles <Site url="huggingface.co/blog/community" size="sm" />

<Route namespace="huggingface" :data='{"path":"/blog-community/:sort?","categories":["programming"],"example":"/huggingface/blog-community","parameters":{"sort":{"description":"Sort by trending or recent","default":"trending","options":[{"value":"trending","label":"Trending"},{"value":"recent","label":"Recent"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["huggingface.co/blog/community","huggingface.co/"]}],"name":"Community Articles","maintainers":["yuguorui"],"url":"huggingface.co/blog/community","location":"blog-community.ts","heat":43,"topFeeds":[]}' :test='{"code":0}' />

### Daily Papers <Site url="huggingface.co/papers" size="sm" />

<Route namespace="huggingface" :data='{"path":"/daily-papers/:cycle?/:voteFliter?","categories":["programming"],"example":"/huggingface/daily-papers/week/50","parameters":{"cycle":"The publication cycle you want to follow. Choose from: date, week, month. Default: date","voteFliter":"Filter papers by vote count."},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["huggingface.co/papers/:cycle"],"target":"/daily-papers/:cycle"}],"name":"Daily Papers","maintainers":["zeyugao","ovo-tim"],"url":"huggingface.co/papers","location":"daily-papers.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 开源中国 <Site url="oschina.net"/>

OSCHINA

### 资讯 <Site url="oschina.net" size="sm" />

<Route namespace="oschina" :data='{"path":"/news/:category?","categories":["programming"],"example":"/oschina/news/project","parameters":{"category":"板块名"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["oschina.net/news/:category"],"target":"/news/:category"}],"name":"资讯","maintainers":["tgly307","zengxs"],"description":"| [综合资讯][osc_gen] | [软件更新资讯][osc_proj] | [行业资讯][osc_ind] | [编程语言资讯][osc_pl] |\n| ------------------- | ------------------------ | ------------------- | ---------------------- |\n| industry            | project                  | industry-news       | programming            |\n\n  订阅 [全部板块资讯][osc_all] 可以使用 [https://rsshub.app/oschina/news](https://rsshub.app/oschina/news)\n\n  [osc_all]: https://www.oschina.net/news \"开源中国 - 全部资讯\"\n\n  [osc_gen]: https://www.oschina.net/news/industry \"开源中国 - 综合资讯\"\n\n  [osc_proj]: https://www.oschina.net/news/project \"开源中国 - 软件更新资讯\"\n\n  [osc_ind]: https://www.oschina.net/news/industry-news \"开源中国 - 行业资讯\"\n\n  [osc_pl]: https://www.oschina.net/news/programming \"开源中国 - 编程语言资讯\"","location":"news.ts","heat":781,"topFeeds":[]}' :test='{"code":0}' />

| [综合资讯][osc_gen] | [软件更新资讯][osc_proj] | [行业资讯][osc_ind] | [编程语言资讯][osc_pl] |
| ------------------- | ------------------------ | ------------------- | ---------------------- |
| industry            | project                  | industry-news       | programming            |

  订阅 [全部板块资讯][osc_all] 可以使用 [https://rsshub.app/oschina/news](https://rsshub.app/oschina/news)

  [osc_all]: https://www.oschina.net/news "开源中国 - 全部资讯"

  [osc_gen]: https://www.oschina.net/news/industry "开源中国 - 综合资讯"

  [osc_proj]: https://www.oschina.net/news/project "开源中国 - 软件更新资讯"

  [osc_ind]: https://www.oschina.net/news/industry-news "开源中国 - 行业资讯"

  [osc_pl]: https://www.oschina.net/news/programming "开源中国 - 编程语言资讯"

### 数字型账号用户博客 <Site url="oschina.net" size="sm" />

<Route namespace="oschina" :data='{"path":["/u/:uid","/user/:id"],"categories":["programming"],"example":"/oschina/u/3920392","parameters":{"uid":"用户 id，可通过查看用户博客网址得到，以 u/数字结尾，数字即为 id"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["my.oschina.net/u/:uid"]}],"name":"数字型账号用户博客","maintainers":[],"location":"user.ts","heat":5,"topFeeds":[]}' :test='{"code":0}' />

### 活动 <Site url="www.oschina.net" size="sm" />

<Route namespace="oschina" :data='{"path":"/event/:category?","name":"活动","url":"www.oschina.net","maintainers":["nczitzk"],"example":"/oschina/event","parameters":{"category":"分类，默认为 `latest`，即最新活动，可在对应分类页 URL 中找到"},"description":":::tip\n若订阅 [强力推荐](https://www.oschina.net/event?tab=recommend)，网址为 `https://www.oschina.net/event?tab=recommend`，请截取 `https://www.oschina.net/event?tab=` 到末尾的部分 `recommend` 作为 `category` 参数填入，此时目标路由为 [`/oschina/event/recommend`](https://rsshub.app/oschina/event/recommend)。\n:::\n\n| 强力推荐  | 最新活动 |\n| --------- | -------- |\n| recommend | latest   |\n","categories":["programming"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.oschina.net"]},{"title":"强力推荐","source":["www.oschina.net"],"target":"/event/recommend"},{"title":"最新活动","source":["www.oschina.net"],"target":"/event/latest"}],"view":0,"location":"event.ts","heat":3,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected NaN to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1739)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)"}' />

:::tip
若订阅 [强力推荐](https://www.oschina.net/event?tab=recommend)，网址为 `https://www.oschina.net/event?tab=recommend`，请截取 `https://www.oschina.net/event?tab=` 到末尾的部分 `recommend` 作为 `category` 参数填入，此时目标路由为 [`/oschina/event/recommend`](https://rsshub.app/oschina/event/recommend)。
:::

| 强力推荐  | 最新活动 |
| --------- | -------- |
| recommend | latest   |


### 专栏 <Site url="www.oschina.net" size="sm" />

<Route namespace="oschina" :data='{"path":"/column/:id","name":"专栏","url":"www.oschina.net","maintainers":["nczitzk"],"example":"/oschina/column/14","parameters":{"id":"专栏 id，可在对应专栏页 URL 中找到"},"description":":::tip\n若订阅 [开源安全专栏](https://www.oschina.net/news/column?columnId=14)，网址为 `https://www.oschina.net/news/column?columnId=14`，请截取 `https://www.oschina.net/news/column?columnId=` 到末尾的部分 `14` 作为 `id` 参数填入，此时目标路由为 [`/oschina/column/14`](https://rsshub.app/oschina/column/14)。\n\n:::\n\n<details>\n<summary>更多专栏</summary>\n\n| 名称            | ID  |\n| --------------- | --- |\n| 古典主义 Debian | 4   |\n| 自由&开源       | 5   |\n| 溯源            | 6   |\n| 开源先懂协议    | 7   |\n| 开源变局        | 8   |\n| 创造者说        | 9   |\n| 精英主义 BSD    | 10  |\n| 苹果有开源      | 11  |\n| 开源访谈        | 12  |\n| 抱团找组织      | 13  |\n| 开源安全        | 14  |\n| OSPO            | 15  |\n| 创业小辑        | 16  |\n| 星推荐          | 17  |\n| 单口开源        | 18  |\n| 编辑部观察直播  | 19  |\n| 开源商业化      | 20  |\n| ChatGPT 专题    | 21  |\n| 开源新思        | 24  |\n| 开源日报        | 25  |\n| 大模型思辨      | 26  |\n| 家里有个程序员  | 27  |\n| 开源漫谈        | 23  |\n\n</details>\n","categories":["programming"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.oschina.net"]}],"view":0,"location":"column.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected { &#39;$&#39;: { isPermaLink: &#39;false&#39; } } to deeply equal Any<String>\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:58:27)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1738)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)"}' />

:::tip
若订阅 [开源安全专栏](https://www.oschina.net/news/column?columnId=14)，网址为 `https://www.oschina.net/news/column?columnId=14`，请截取 `https://www.oschina.net/news/column?columnId=` 到末尾的部分 `14` 作为 `id` 参数填入，此时目标路由为 [`/oschina/column/14`](https://rsshub.app/oschina/column/14)。

:::

<details>
<summary>更多专栏</summary>

| 名称            | ID  |
| --------------- | --- |
| 古典主义 Debian | 4   |
| 自由&开源       | 5   |
| 溯源            | 6   |
| 开源先懂协议    | 7   |
| 开源变局        | 8   |
| 创造者说        | 9   |
| 精英主义 BSD    | 10  |
| 苹果有开源      | 11  |
| 开源访谈        | 12  |
| 抱团找组织      | 13  |
| 开源安全        | 14  |
| OSPO            | 15  |
| 创业小辑        | 16  |
| 星推荐          | 17  |
| 单口开源        | 18  |
| 编辑部观察直播  | 19  |
| 开源商业化      | 20  |
| ChatGPT 专题    | 21  |
| 开源新思        | 24  |
| 开源日报        | 25  |
| 大模型思辨      | 26  |
| 家里有个程序员  | 27  |
| 开源漫谈        | 23  |

</details>


### 问答主题 <Site url="oschina.net" size="sm" />

<Route namespace="oschina" :data='{"path":"/topic/:topic","categories":["programming"],"example":"/oschina/topic/weekly-news","parameters":{"topic":"主题名，可从 [全部主题](https://www.oschina.net/question/topics) 进入主题页，在 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["oschina.net/question/topic/:topic"]}],"name":"问答主题","maintainers":["loveely7"],"location":"topic.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1741)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## 美团 <Site url="meituan.com"/>

### 技术团队博客 <Site url="tech.meituan.com" size="sm" />

<Route namespace="meituan" :data='{"path":"/tech","categories":["programming"],"example":"/meituan/tech","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false,"supportRadar":true},"radar":[{"source":["tech.meituan.com"]}],"name":"技术团队博客","url":"tech.meituan.com","maintainers":["ktKongTong","cscnk52"],"location":"tech.ts","heat":592,"topFeeds":[]}' :test='{"code":0}' />

## Rust 语言中文社区 <Site url="rustcc.cn"/>

### 新闻/聚合 <Site url="rustcc.cn/" size="sm" />

<Route namespace="rustcc" :data='{"path":"/news","categories":["programming"],"example":"/rustcc/news","radar":[{"source":["rustcc.cn/"]}],"name":"新闻/聚合","maintainers":["zhenlohuang"],"url":"rustcc.cn/","location":"news.ts","heat":448,"topFeeds":[]}' :test='{"code":0}' />

### 招聘 <Site url="rustcc.cn/" size="sm" />

<Route namespace="rustcc" :data='{"path":"/jobs","categories":["programming"],"example":"/rustcc/jobs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["rustcc.cn/"]}],"name":"招聘","maintainers":["CcccFz"],"url":"rustcc.cn/","location":"jobs.ts","heat":51,"topFeeds":[]}' :test='{"code":0}' />

## DeepLearning.AI <Site url="www.deeplearning.ai"/>

### The Batch <Site url="www.deeplearning.ai" size="sm" />

<Route namespace="deeplearning" :data='{"path":"/the-batch/:tag{.+}?","name":"The Batch","url":"www.deeplearning.ai","maintainers":["nczitzk","juvenn","TonyRL"],"example":"/deeplearning/the-batch","parameters":{"tag":"Tag, Weekly Issues by default"},"description":"::: tip\n  If you subscribe to [Data Points](https://www.deeplearning.ai/the-batch/tag/data-points/)，where the URL is `https://www.deeplearning.ai/the-batch/tag/data-points/`, extract the part `https://www.deeplearning.ai/the-batch/tag` to the end, which is `data-points`, and use it as the parameter to fill in. Therefore, the route will be [`/deeplearning/the-batch/data-points`](https://rsshub.app/deeplearning/the-batch/data-points).\n\n:::\n\n| Tag                                                                    | ID                                                                   |\n| ---------------------------------------------------------------------- | -------------------------------------------------------------------- |\n| [Weekly Issues](https://www.deeplearning.ai/the-batch/)                | [*null*](https://rsshub.app/deeplearning/the-batch)                  |\n| [Andrew&#39;s Letters](https://www.deeplearning.ai/the-batch/tag/letters/) | [letters](https://rsshub.app/deeplearning/the-batch/letters)         |\n| [Data Points](https://www.deeplearning.ai/the-batch/tag/data-points/)  | [data-points](https://rsshub.app/deeplearning/the-batch/data-points) |\n| [ML Research](https://www.deeplearning.ai/the-batch/tag/research/)     | [research](https://rsshub.app/deeplearning/the-batch/research)       |\n| [Business](https://www.deeplearning.ai/the-batch/tag/business/)        | [business](https://rsshub.app/deeplearning/the-batch/business)       |\n| [Science](https://www.deeplearning.ai/the-batch/tag/science/)          | [science](https://rsshub.app/deeplearning/the-batch/science)         |\n| [AI & Society](https://www.deeplearning.ai/the-batch/tag/ai-society/)  | [ai-society](https://rsshub.app/deeplearning/the-batch/ai-society)   |\n| [Culture](https://www.deeplearning.ai/the-batch/tag/culture/)          | [culture](https://rsshub.app/deeplearning/the-batch/culture)         |\n| [Hardware](https://www.deeplearning.ai/the-batch/tag/hardware/)        | [hardware](https://rsshub.app/deeplearning/the-batch/hardware)       |\n| [AI Careers](https://www.deeplearning.ai/the-batch/tag/ai-careers/)    | [ai-careers](https://rsshub.app/deeplearning/the-batch/ai-careers)   |\n\n#### [Letters from Andrew Ng](https://www.deeplearning.ai/the-batch/tag/letters/)\n\n| Tag                                                                                     | ID                                                                                     |\n| --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |\n| [All](https://www.deeplearning.ai/the-batch/tag/letters/)                               | [letters](https://rsshub.app/deeplearning/the-batch/letters)                           |\n| [Personal Insights](https://www.deeplearning.ai/the-batch/tag/personal-insights/)       | [personal-insights](https://rsshub.app/deeplearning/the-batch/personal-insights)       |\n| [Technical Insights](https://www.deeplearning.ai/the-batch/tag/technical-insights/)     | [technical-insights](https://rsshub.app/deeplearning/the-batch/technical-insights)     |\n| [Business Insights](https://www.deeplearning.ai/the-batch/tag/business-insights/)       | [business-insights](https://rsshub.app/deeplearning/the-batch/business-insights)       |\n| [Tech & Society](https://www.deeplearning.ai/the-batch/tag/tech-society/)               | [tech-society](https://rsshub.app/deeplearning/the-batch/tech-society)                 |\n| [DeepLearning.AI News](https://www.deeplearning.ai/the-batch/tag/deeplearning-ai-news/) | [deeplearning-ai-news](https://rsshub.app/deeplearning/the-batch/deeplearning-ai-news) |\n| [AI Careers](https://www.deeplearning.ai/the-batch/tag/ai-careers/)                     | [ai-careers](https://rsshub.app/deeplearning/the-batch/ai-careers)                     |\n| [Just For Fun](https://www.deeplearning.ai/the-batch/tag/just-for-fun/)                 | [just-for-fun](https://rsshub.app/deeplearning/the-batch/just-for-fun)                 |\n| [Learning & Education](https://www.deeplearning.ai/the-batch/tag/learning-education/)   | [learning-education](https://rsshub.app/deeplearning/the-batch/learning-education)     |\n    ","categories":["programming"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.deeplearning.ai/the-batch","www.deeplearning.ai/the-batch/tag/:tag/"]},{"title":"Weekly Issues","source":["www.deeplearning.ai/the-batch/"],"target":"/the-batch"},{"title":"Andrew&#39;s Letters","source":["www.deeplearning.ai/the-batch/tag/letters/"],"target":"/the-batch/letters"},{"title":"Data Points","source":["www.deeplearning.ai/the-batch/tag/data-points/"],"target":"/the-batch/data-points"},{"title":"ML Research","source":["www.deeplearning.ai/the-batch/tag/research/"],"target":"/the-batch/research"},{"title":"Business","source":["www.deeplearning.ai/the-batch/tag/business/"],"target":"/the-batch/business"},{"title":"Science","source":["www.deeplearning.ai/the-batch/tag/science/"],"target":"/the-batch/science"},{"title":"AI & Society","source":["www.deeplearning.ai/the-batch/tag/ai-society/"],"target":"/the-batch/ai-society"},{"title":"Culture","source":["www.deeplearning.ai/the-batch/tag/culture/"],"target":"/the-batch/culture"},{"title":"Hardware","source":["www.deeplearning.ai/the-batch/tag/hardware/"],"target":"/the-batch/hardware"},{"title":"AI Careers","source":["www.deeplearning.ai/the-batch/tag/ai-careers/"],"target":"/the-batch/ai-careers"},{"title":"Letters from Andrew Ng - All","source":["www.deeplearning.ai/the-batch/tag/letters/"],"target":"/the-batch/letters"},{"title":"Letters from Andrew Ng - Personal Insights","source":["www.deeplearning.ai/the-batch/tag/personal-insights/"],"target":"/the-batch/personal-insights"},{"title":"Letters from Andrew Ng - Technical Insights","source":["www.deeplearning.ai/the-batch/tag/technical-insights/"],"target":"/the-batch/technical-insights"},{"title":"Letters from Andrew Ng - Business Insights","source":["www.deeplearning.ai/the-batch/tag/business-insights/"],"target":"/the-batch/business-insights"},{"title":"Letters from Andrew Ng - Tech & Society","source":["www.deeplearning.ai/the-batch/tag/tech-society/"],"target":"/the-batch/tech-society"},{"title":"Letters from Andrew Ng - DeepLearning.AI News","source":["www.deeplearning.ai/the-batch/tag/deeplearning-ai-news/"],"target":"/the-batch/deeplearning-ai-news"},{"title":"Letters from Andrew Ng - AI Careers","source":["www.deeplearning.ai/the-batch/tag/ai-careers/"],"target":"/the-batch/ai-careers"},{"title":"Letters from Andrew Ng - Just For Fun","source":["www.deeplearning.ai/the-batch/tag/just-for-fun/"],"target":"/the-batch/just-for-fun"},{"title":"Letters from Andrew Ng - Learning & Education","source":["www.deeplearning.ai/the-batch/tag/learning-education/"],"target":"/the-batch/learning-education"}],"location":"the-batch.ts","heat":448,"topFeeds":[]}' :test='{"code":0}' />

::: tip
  If you subscribe to [Data Points](https://www.deeplearning.ai/the-batch/tag/data-points/)，where the URL is `https://www.deeplearning.ai/the-batch/tag/data-points/`, extract the part `https://www.deeplearning.ai/the-batch/tag` to the end, which is `data-points`, and use it as the parameter to fill in. Therefore, the route will be [`/deeplearning/the-batch/data-points`](https://rsshub.app/deeplearning/the-batch/data-points).

:::

| Tag                                                                    | ID                                                                   |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [Weekly Issues](https://www.deeplearning.ai/the-batch/)                | [*null*](https://rsshub.app/deeplearning/the-batch)                  |
| [Andrew's Letters](https://www.deeplearning.ai/the-batch/tag/letters/) | [letters](https://rsshub.app/deeplearning/the-batch/letters)         |
| [Data Points](https://www.deeplearning.ai/the-batch/tag/data-points/)  | [data-points](https://rsshub.app/deeplearning/the-batch/data-points) |
| [ML Research](https://www.deeplearning.ai/the-batch/tag/research/)     | [research](https://rsshub.app/deeplearning/the-batch/research)       |
| [Business](https://www.deeplearning.ai/the-batch/tag/business/)        | [business](https://rsshub.app/deeplearning/the-batch/business)       |
| [Science](https://www.deeplearning.ai/the-batch/tag/science/)          | [science](https://rsshub.app/deeplearning/the-batch/science)         |
| [AI & Society](https://www.deeplearning.ai/the-batch/tag/ai-society/)  | [ai-society](https://rsshub.app/deeplearning/the-batch/ai-society)   |
| [Culture](https://www.deeplearning.ai/the-batch/tag/culture/)          | [culture](https://rsshub.app/deeplearning/the-batch/culture)         |
| [Hardware](https://www.deeplearning.ai/the-batch/tag/hardware/)        | [hardware](https://rsshub.app/deeplearning/the-batch/hardware)       |
| [AI Careers](https://www.deeplearning.ai/the-batch/tag/ai-careers/)    | [ai-careers](https://rsshub.app/deeplearning/the-batch/ai-careers)   |

#### [Letters from Andrew Ng](https://www.deeplearning.ai/the-batch/tag/letters/)

| Tag                                                                                     | ID                                                                                     |
| --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [All](https://www.deeplearning.ai/the-batch/tag/letters/)                               | [letters](https://rsshub.app/deeplearning/the-batch/letters)                           |
| [Personal Insights](https://www.deeplearning.ai/the-batch/tag/personal-insights/)       | [personal-insights](https://rsshub.app/deeplearning/the-batch/personal-insights)       |
| [Technical Insights](https://www.deeplearning.ai/the-batch/tag/technical-insights/)     | [technical-insights](https://rsshub.app/deeplearning/the-batch/technical-insights)     |
| [Business Insights](https://www.deeplearning.ai/the-batch/tag/business-insights/)       | [business-insights](https://rsshub.app/deeplearning/the-batch/business-insights)       |
| [Tech & Society](https://www.deeplearning.ai/the-batch/tag/tech-society/)               | [tech-society](https://rsshub.app/deeplearning/the-batch/tech-society)                 |
| [DeepLearning.AI News](https://www.deeplearning.ai/the-batch/tag/deeplearning-ai-news/) | [deeplearning-ai-news](https://rsshub.app/deeplearning/the-batch/deeplearning-ai-news) |
| [AI Careers](https://www.deeplearning.ai/the-batch/tag/ai-careers/)                     | [ai-careers](https://rsshub.app/deeplearning/the-batch/ai-careers)                     |
| [Just For Fun](https://www.deeplearning.ai/the-batch/tag/just-for-fun/)                 | [just-for-fun](https://rsshub.app/deeplearning/the-batch/just-for-fun)                 |
| [Learning & Education](https://www.deeplearning.ai/the-batch/tag/learning-education/)   | [learning-education](https://rsshub.app/deeplearning/the-batch/learning-education)     |
    

## NOSEC 安全讯息平台 <Site url="nosec.org"/>

### Posts <Site url="nosec.org" size="sm" />

<Route namespace="nosec" :data='{"path":"/:keykind?","categories":["programming"],"example":"/nosec/hole","parameters":{"keykind":"对应文章分类"},"name":"Posts","maintainers":["hellodword"],"description":"| 分类     | 标识       |\n| :------- | :--------- |\n| 威胁情报 | `threaten` |\n| 安全动态 | `security` |\n| 漏洞预警 | `hole`     |\n| 数据泄露 | `leakage`  |\n| 专题报告 | `speech`   |\n| 技术分析 | `skill`    |\n| 安全工具 | `tool`     |","radar":[{"source":["nosec.org/home/index/:keykind","nosec.org/home/index"]}],"location":"index.ts","heat":359,"topFeeds":[]}' :test='{"code":0}' />

| 分类     | 标识       |
| :------- | :--------- |
| 威胁情报 | `threaten` |
| 安全动态 | `security` |
| 漏洞预警 | `hole`     |
| 数据泄露 | `leakage`  |
| 专题报告 | `speech`   |
| 技术分析 | `skill`    |
| 安全工具 | `tool`     |

## 技术头条 <Site url="blogread.cn"/>

### 最新文章 <Site url="blogread.cn" size="sm" />

<Route namespace="blogread" :data='{"path":"/newest","categories":["programming"],"example":"/blogread/newest","radar":[{"source":["blogread.cn/news/newest.php"]}],"name":"最新文章","maintainers":["fashioncj"],"location":"index.ts","heat":316,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 319)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## chlinlearn 的技术博客 <Site url="daily-blog.chlinlearn.top"/>

### 值得一读技术博客 <Site url="daily-blog.chlinlearn.top" size="sm" />

<Route namespace="chlinlearn" :data='{"path":"/daily-blog","name":"值得一读技术博客","maintainers":["huyyi"],"categories":["programming"],"example":"/chlinlearn/daily-blog","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["daily-blog.chlinlearn.top/blogs/*"],"target":"/chlinlearn/daily-blog"}],"location":"daily-blog.ts","heat":301,"topFeeds":[]}' :test='{"code":0}' />

## OpenAI <Site url="openai.com"/>

### Cookbook <Site url="cookbook.openai.com/" size="sm" />

<Route namespace="openai" :data='{"path":"/cookbook","categories":["programming"],"description":"OpenAI Cookbook 提供了大量使用 OpenAI API 的实用指南和示例代码,涵盖了从基础到高级的各种主题,包括 GPT 模型、嵌入、函数调用、微调等。这里汇集了最新的 API 功能介绍和流行的应用案例,是开发者学习和应用 OpenAI 技术的宝贵资源。","maintainers":["liyaozhong"],"radar":[{"source":["cookbook.openai.com/"]}],"url":"cookbook.openai.com/","example":"/openai/cookbook","name":"Cookbook","location":"cookbook.ts","heat":179,"topFeeds":[]}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:44:18)\n    at listOnTimeout (node:internal/timers:588:17)\n    at processTimers (node:internal/timers:523:7)"}' />

OpenAI Cookbook 提供了大量使用 OpenAI API 的实用指南和示例代码,涵盖了从基础到高级的各种主题,包括 GPT 模型、嵌入、函数调用、微调等。这里汇集了最新的 API 功能介绍和流行的应用案例,是开发者学习和应用 OpenAI 技术的宝贵资源。

### News <Site url="openai.com" size="sm" />

<Route namespace="openai" :data='{"path":"/news","categories":["programming"],"example":"/openai/news","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"News","maintainers":["goestav","StevenRCE0","nczitzk"],"location":"news.ts","heat":96,"topFeeds":[]}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:44:18)\n    at listOnTimeout (node:internal/timers:588:17)\n    at processTimers (node:internal/timers:523:7)"}' />

### Research <Site url="openai.com" size="sm" />

<Route namespace="openai" :data='{"path":"/research","categories":["programming"],"example":"/openai/research","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Research","maintainers":["yuguorui"],"location":"research.ts","heat":12,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1727)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## web.dev <Site url="web.dev"/>

### Articles <Site url="web.dev" size="sm" />

<Route namespace="web" :data='{"path":"/articles","categories":["programming"],"example":"/web/articles","radar":[{"source":["web.dev/articles"]}],"name":"Articles","maintainers":["KarasuShin"],"location":"articles.ts","heat":237,"topFeeds":[]}' :test='{"code":0}' />

### Blog <Site url="web.dev" size="sm" />

<Route namespace="web" :data='{"path":"/blog","categories":["programming"],"example":"/web/blog","radar":[{"source":["web.dev/blog"]}],"name":"Blog","maintainers":["KarasuShin"],"location":"blog.ts","heat":26,"topFeeds":[]}' :test='{"code":0}' />

### Series <Site url="web.dev" size="sm" />

<Route namespace="web" :data='{"path":"/series/:seriesName","parameters":{"seriesName":"topic name in the series section"},"categories":["programming"],"example":"/web/series/new-to-the-web","radar":[{"source":["web.dev/series/:seriesName"],"target":"/series/:seriesName"}],"name":"Series","maintainers":["KarasuShin"],"description":"::: tip\n    The `seriesName` can be extracted from the Series page URL: `https://web.dev/series/:seriesName`\n:::","location":"series.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

::: tip
    The `seriesName` can be extracted from the Series page URL: `https://web.dev/series/:seriesName`
:::

## Go 语言中文网 <Site url="studygolang.com"/>

### 板块 <Site url="studygolang.com" size="sm" />

<Route namespace="studygolang" :data='{"path":"/go/:id?","categories":["programming"],"example":"/studygolang/go/daily","parameters":{"id":"板块 id，默认为周刊"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["studygolang.com/go/:id","studygolang.com/"]}],"name":"板块","maintainers":["nczitzk"],"location":"go.ts","heat":213,"topFeeds":[]}' :test='{"code":0}' />

### 周刊 <Site url="studygolang.com" size="sm" />

<Route namespace="studygolang" :data='{"path":"/weekly","categories":["programming"],"example":"/studygolang/weekly","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"周刊","maintainers":["CWeilet","nczitzk"],"location":"weekly.ts","heat":27,"topFeeds":[]}' :test='{"code":0}' />

### 招聘 <Site url="studygolang.com" size="sm" />

<Route namespace="studygolang" :data='{"path":"/jobs","categories":["programming"],"example":"/studygolang/jobs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"招聘","maintainers":["CcccFz","nczitzk"],"location":"jobs.ts","heat":21,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 316583088467 to be less than 311040000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:36:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2146)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)"}' />

## LeetCode <Site url="leetcode.com"/>

### Unknown <Site url="leetcode.cn/" size="sm" />

<Route namespace="leetcode" :data='{"path":"/dailyquestion/cn","radar":[{"source":["leetcode.cn/"]}],"name":"Unknown","maintainers":[],"url":"leetcode.cn/","location":"dailyquestion-cn.ts","heat":127,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="leetcode.cn/" size="sm" />

<Route namespace="leetcode" :data='{"path":"/dailyquestion/solution/cn","radar":[{"source":["leetcode.cn/"]}],"name":"Unknown","maintainers":[],"url":"leetcode.cn/","location":"dailyquestion-solution-cn.ts","heat":104,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="leetcode.com/" size="sm" />

<Route namespace="leetcode" :data='{"path":"/dailyquestion/en","radar":[{"source":["leetcode.com/"]}],"name":"Unknown","maintainers":[],"url":"leetcode.com/","location":"dailyquestion-en.ts","heat":20,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="leetcode.com/" size="sm" />

<Route namespace="leetcode" :data='{"path":"/dailyquestion/solution/en","radar":[{"source":["leetcode.com/"]}],"name":"Unknown","maintainers":[],"url":"leetcode.com/","location":"dailyquestion-solution-en.ts","heat":6,"topFeeds":[]}' :test='undefined' />

### Articles <Site url="leetcode.com/articles" size="sm" />

<Route namespace="leetcode" :data='{"path":"/articles","categories":["programming"],"example":"/leetcode/articles","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["leetcode.com/articles"]}],"name":"Articles","maintainers":["LogicJake"],"url":"leetcode.com/articles","location":"articles.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1393)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## 51CTO <Site url="51cto.com"/>

### 推荐 <Site url="51cto.com/" size="sm" />

<Route namespace="51cto" :data='{"path":"/index/recommend","categories":["programming"],"example":"/51cto/index/recommend","radar":[{"source":["51cto.com/"]}],"name":"推荐","maintainers":["cnkmmk","ovo-tim"],"url":"51cto.com/","location":"recommend.ts","heat":242,"topFeeds":[]}' :test='{"code":0}' />

## 印记中文 <Site url="docschina.org"/>

### 周刊 - JavaScript <Site url="docschina.org" size="sm" />

<Route namespace="docschina" :data='{"path":"/weekly/:category?","categories":["programming"],"example":"/docschina/weekly","parameters":{"category":"周刊分类，见下表，默认为js"},"name":"周刊 - JavaScript","maintainers":["daijinru","hestudy"],"description":"| javascript | node | react |\n| ---------- | ---- | ----- |\n| js         | node | react |","radar":[{"source":["docschina.org/news/weekly/js/*","docschina.org/news/weekly/js","docschina.org/"],"target":"/jsweekly"}],"location":"weekly.ts","heat":241,"topFeeds":[]}' :test='{"code":0}' />

| javascript | node | react |
| ---------- | ---- | ----- |
| js         | node | react |

## Ollama <Site url="ollama.com"/>

### Models <Site url="ollama.com" size="sm" />

<Route namespace="ollama" :data='{"path":"/library","categories":["programming"],"example":"/ollama/library","radar":[{"source":["ollama.com/library"]}],"name":"Models","maintainers":["Nick22nd","gavrilov"],"location":"models.ts","heat":133,"topFeeds":[]}' :test='{"code":0}' />

### Blog <Site url="ollama.com" size="sm" />

<Route namespace="ollama" :data='{"path":"/blog","categories":["programming"],"example":"/ollama/blog","radar":[{"source":["ollama.com/blog"]}],"name":"Blog","maintainers":["gavrilov"],"location":"blog.ts","heat":107,"topFeeds":[]}' :test='{"code":0}' />

## 安全内参 <Site url="secrss.com"/>

### 分类 <Site url="secrss.com" size="sm" />

<Route namespace="secrss" :data='{"path":"/category/:category?","categories":["programming"],"example":"/secrss/category/产业趋势","parameters":{"category":"N"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"分类","maintainers":["XinRoom","SunBK201"],"location":"category.ts","heat":210,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2012)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

### 作者 <Site url="secrss.com" size="sm" />

<Route namespace="secrss" :data='{"path":"/author/:author","categories":["programming"],"example":"/secrss/author/网络安全威胁和漏洞信息共享平台","parameters":{"author":"N"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"作者","maintainers":["XinRoom","SunBK201"],"location":"author.ts","heat":20,"topFeeds":[]}' :test='{"code":0}' />

## Deepseek <Site url="api-docs.deepseek.com"/>

Deepseek API 文档。

### 新闻 <Site url="api-docs.deepseek.com" size="sm" />

<Route namespace="deepseek" :data='{"path":"/news","categories":["programming"],"example":"/deepseek/news","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["api-docs.deepseek.com"],"target":"/news"}],"name":"新闻","maintainers":["1837634311"],"location":"news.ts","heat":213,"topFeeds":[]}' :test='{"code":0}' />

## 微信小程序 <Site url="posts.careerengine.us"/>

::: tip
公众号直接抓取困难，故目前提供几种间接抓取方案，请自行选择
:::

### 公众平台系统公告栏目 <Site url="mp.weixin.qq.com/cgi-bin/announce" size="sm" />

<Route namespace="wechat" :data='{"path":"/announce","categories":["programming"],"example":"/wechat/announce","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["mp.weixin.qq.com/cgi-bin/announce"]}],"name":"公众平台系统公告栏目","maintainers":["xyqfer"],"url":"mp.weixin.qq.com/cgi-bin/announce","location":"announce.ts","heat":172,"topFeeds":[]}' :test='{"code":0}' />

### Unknown <Site url="mp.data258.com/" size="sm" />

<Route namespace="wechat" :data='{"path":"/data258/:id?","radar":[{"source":["mp.data258.com/","mp.data258.com/article/category/:id"]}],"name":"Unknown","maintainers":["Rongronggg9"],"url":"mp.data258.com/","location":"data258.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 北京智源人工智能研究院 <Site url="hub.baai.ac.cn"/>

### 智源社区 <Site url="hub.baai.ac.cn" size="sm" />

<Route namespace="baai" :data='{"path":["/hub/:tagId?/:sort?/:range?"],"categories":["programming"],"example":"/baai/hub","parameters":{"tagId":"社群 ID，可在 [社群页](https://hub.baai.ac.cn/taglist) 或 URL 中找到","sort":"排序，见下表，默认为 `new`","range":"时间跨度，仅在排序 `readCnt` 时有效"},"description":"排序\n\n| 最新 | 最热    |\n| ---- | ------- |\n| new  | readCnt |\n\n时间跨度\n\n| 3 天 | 本周 | 本月 |\n| ---- | ---- | ---- |\n| 3    | 7    | 30   |","radar":[{"source":["baai.ac.cn/"]}],"name":"智源社区","maintainers":["TonyRL"],"location":"hub.ts","heat":154,"topFeeds":[]}' :test='{"code":0}' />

排序

| 最新 | 最热    |
| ---- | ------- |
| new  | readCnt |

时间跨度

| 3 天 | 本周 | 本月 |
| ---- | ---- | ---- |
| 3    | 7    | 30   |

### 智源社区 - 活动 <Site url="hub.baai.ac.cn/events" size="sm" />

<Route namespace="baai" :data='{"path":"/hub/events","categories":["programming"],"example":"/baai/hub/events","radar":[{"source":["hub.baai.ac.cn/events","hub.baai.ac.cn/"]}],"name":"智源社区 - 活动","maintainers":["TonyRL"],"url":"hub.baai.ac.cn/events","location":"events.ts","heat":17,"topFeeds":[]}' :test='{"code":0}' />

## InfoQ 中文 <Site url="infoq.cn"/>

### Presentations <Site url="www.infoq.com" size="sm" />

<Route namespace="infoq" :data='{"path":"/presentations/:conference?","name":"Presentations","url":"www.infoq.com","maintainers":["nczitzk"],"example":"/infoq/presentations","parameters":{"conference":"Conference, all by default, can be found in URL"},"description":"::: tip\n  If you subscribe to [InfoQ Live Jan 2024](https://www.infoq.com/infoq-live-jan-2024/presentations/)，where the URL is `https://www.infoq.com/infoq-live-jan-2024/presentations/`, extract the part `https://www.infoq.com/` to the end, which is `/presentations/`, and use it as the parameter to fill in. Therefore, the route will be [`/infoq/presentations/infoq-live-jan-2024`](https://rsshub.app/infoq/presentations/infoq-live-jan-2024).\n:::\n    ","categories":["programming"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.infoq.com/presentations","www.infoq.com/:conference/presentations"]}],"location":"presentations.ts","heat":166,"topFeeds":[]}' :test='{"code":0}' />

::: tip
  If you subscribe to [InfoQ Live Jan 2024](https://www.infoq.com/infoq-live-jan-2024/presentations/)，where the URL is `https://www.infoq.com/infoq-live-jan-2024/presentations/`, extract the part `https://www.infoq.com/` to the end, which is `/presentations/`, and use it as the parameter to fill in. Therefore, the route will be [`/infoq/presentations/infoq-live-jan-2024`](https://rsshub.app/infoq/presentations/infoq-live-jan-2024).
:::
    

## ModelScope 魔搭社区 <Site url="modelscope.cn"/>

### DevPress 官方社区 <Site url="community.modelscope.cn/" size="sm" />

<Route namespace="modelscope" :data='{"path":"/community","categories":["programming"],"example":"/modelscope/community","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["community.modelscope.cn/"]}],"name":"DevPress 官方社区","maintainers":["TonyRL"],"url":"community.modelscope.cn/","location":"community.ts","heat":92,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1519)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

### 模型库 <Site url="modelscope.cn/models" size="sm" />

<Route namespace="modelscope" :data='{"path":"/models","categories":["programming"],"example":"/modelscope/models","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["modelscope.cn/models"]}],"name":"模型库","maintainers":["TonyRL"],"url":"modelscope.cn/models","location":"models.ts","heat":13,"topFeeds":[]}' :test='{"code":0}' />

### 创空间 <Site url="modelscope.cn/studios" size="sm" />

<Route namespace="modelscope" :data='{"path":"/studios","categories":["programming"],"example":"/modelscope/studios","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["modelscope.cn/studios"]}],"name":"创空间","maintainers":["TonyRL"],"url":"modelscope.cn/studios","location":"studios.ts","heat":7,"topFeeds":[]}' :test='{"code":0}' />

### 数据集 <Site url="modelscope.cn/datasets" size="sm" />

<Route namespace="modelscope" :data='{"path":"/datasets","categories":["programming"],"example":"/modelscope/datasets","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["modelscope.cn/datasets"]}],"name":"数据集","maintainers":["TonyRL"],"url":"modelscope.cn/datasets","location":"datasets.ts","heat":6,"topFeeds":[]}' :test='{"code":0}' />

### 研习社 <Site url="www.modelscope.cn/learn" size="sm" />

<Route namespace="modelscope" :data='{"path":"/learn","categories":["programming"],"example":"/modelscope/learn","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.modelscope.cn/learn"]}],"name":"研习社","maintainers":["TonyRL"],"url":"www.modelscope.cn/learn","location":"learn.ts","heat":1,"topFeeds":[]}' :test='{"code":0}' />

## 阿里云 <Site url="developer.aliyun.com"/>

### 数据库内核月报 <Site url="mysql.taobao.org/monthly" size="sm" />

<Route namespace="aliyun" :data='{"path":"/database_month","categories":["programming"],"example":"/aliyun/database_month","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["mysql.taobao.org/monthly","mysql.taobao.org/"]}],"name":"数据库内核月报","maintainers":["junbaor"],"url":"mysql.taobao.org/monthly","location":"database-month.ts","heat":97,"topFeeds":[]}' :test='{"code":0}' />

### 公告 <Site url="developer.aliyun.com" size="sm" />

<Route namespace="aliyun" :data='{"path":"/notice/:type?","categories":["programming"],"example":"/aliyun/notice","parameters":{"type":"N"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"公告","maintainers":["muzea"],"description":"| 类型     | type |\n| -------- | ---- |\n| 全部     |      |\n| 升级公告 | 1    |\n| 安全公告 | 2    |\n| 备案公告 | 3    |\n| 其他     | 4    |","location":"notice.ts","heat":4,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 142)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

| 类型     | type |
| -------- | ---- |
| 全部     |      |
| 升级公告 | 1    |
| 安全公告 | 2    |
| 备案公告 | 3    |
| 其他     | 4    |

### 开发者社区 - 主题 <Site url="developer.aliyun.com" size="sm" />

<Route namespace="aliyun" :data='{"path":"/developer/group/:type","categories":["programming"],"example":"/aliyun/developer/group/alitech","parameters":{"type":"对应技术领域分类"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["developer.aliyun.com/group/:type"]}],"name":"开发者社区 - 主题","maintainers":["umm233"],"location":"developer/group.ts","heat":3,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 143)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## CNCF <Site url="cncf.io"/>

### Category <Site url="cncf.io" size="sm" />

<Route namespace="cncf" :data='{"path":"/:cate?","categories":["programming"],"example":"/cncf","parameters":{"cate":"blog by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Category","maintainers":["Fatpandac"],"description":"| Blog | News | Announcements | Reports |\n| ---- | ---- | ------------- | ------- |\n| blog | news | announcements | reports |","location":"index.ts","heat":83,"topFeeds":[]}' :test='{"code":0}' />

| Blog | News | Announcements | Reports |
| ---- | ---- | ------------- | ------- |
| blog | news | announcements | reports |

### Unknown <Site url="cncf.io/reports" size="sm" />

<Route namespace="cncf" :data='{"path":"/reports","radar":[{"source":["cncf.io/reports"]}],"name":"Unknown","maintainers":[],"url":"cncf.io/reports","location":"reports.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## 腾讯 <Site url="tencent.com"/>

### 腾讯云开发者社区专栏 <Site url="tencent.com" size="sm" />

<Route namespace="tencent" :data='{"path":"/cloud/developer/column/:categoryId?","categories":["programming"],"example":"/tencent/cloud/developer/column/1","parameters":{"categoryId":"categoryId from page url"},"radar":[{"source":["cloud.tencent.com/developer/column"]}],"name":"腾讯云开发者社区专栏","maintainers":["lyling"],"location":"cloud/developer/column.ts","heat":74,"topFeeds":[]}' :test='{"code":0}' />

### Unknown <Site url="tencent.com" size="sm" />

<Route namespace="tencent" :data='{"path":"/news/coronavirus/data/:province?/:city?","name":"Unknown","maintainers":["CaoMeiYouRen"],"location":"news/coronavirus/data.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="new.qq.com/zt2020/page/feiyan.htm" size="sm" />

<Route namespace="tencent" :data='{"path":"/news/coronavirus/total","radar":[{"source":["new.qq.com/zt2020/page/feiyan.htm"]}],"name":"Unknown","maintainers":["CaoMeiYouRen"],"url":"new.qq.com/zt2020/page/feiyan.htm","location":"news/coronavirus/total.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## bestblogs.dev <Site url="www.bestblogs.dev"/>

### 文章列表 <Site url="www.bestblogs.dev" size="sm" />

<Route namespace="bestblogs" :data='{"path":"/feeds/:category?","categories":["programming"],"example":"/bestblogs/feeds/featured","parameters":{"category":"the category of articles. Can be `programming`, `ai`, `product`, `business` or `featured`. Default is `featured`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"文章列表","maintainers":["zhenlohuang"],"location":"feeds.ts","heat":71,"topFeeds":[]}' :test='{"code":0}' />

## 安全客 <Site url="anquanke.com"/>

::: tip
官方提供了混合的主页资讯 RSS: [https://api.anquanke.com/data/v1/rss](https://api.anquanke.com/data/v1/rss)
:::

### 分类订阅 <Site url="anquanke.com" size="sm" />

<Route namespace="anquanke" :data='{"path":"/:category/:fulltext?","categories":["programming"],"example":"/anquanke/week","parameters":{"category":"分类订阅","fulltext":"是否获取全文，如需获取全文参数传入 `quanwen` 或 `fulltext`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"分类订阅","maintainers":["qwertyuiop6"],"description":"| 360 网络安全周报 | 活动     | 知识      | 资讯 | 招聘 | 工具 |\n| ---------------- | -------- | --------- | ---- | ---- | ---- |\n| week             | activity | knowledge | news | job  | tool |","location":"category.ts","heat":68,"topFeeds":[]}' :test='{"code":0}' />

| 360 网络安全周报 | 活动     | 知识      | 资讯 | 招聘 | 工具 |
| ---------------- | -------- | --------- | ---- | ---- | ---- |
| week             | activity | knowledge | news | job  | tool |

## ThoughtWorks <Site url="www.thoughtworks.com/zh-cn/insights/blog"/>

### Inside Blog <Site url="www.thoughtworks.com/zh-cn/insights/blog" size="sm" />

<Route namespace="thoughtworks" :data='{"path":"/blog","categories":["programming"],"example":"/thoughtworks/blog","radar":[{"source":["www.thoughtworks.com/zh-cn/insights/blog"]}],"name":"Inside Blog","maintainers":["Hyvi"],"location":"index.ts","heat":66,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2249)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## SecWiki - 安全维基 <Site url="www.sec-wiki.com"/>

### 最新周刊 <Site url="www.sec-wiki.com" size="sm" />

<Route namespace="sec-wiki" :data='{"path":"/weekly","categories":["programming"],"example":"/sec-wiki/weekly","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"最新周刊","maintainers":["p7e4"],"location":"weekly.ts","heat":59,"topFeeds":[]}' :test='{"code":0}' />

## 30 Seconds of code <Site url="www.30secondsofcode.org"/>

### New & Popular Snippets <Site url="www.30secondsofcode.org" size="sm" />

<Route namespace="30secondsofcode" :data='{"path":"/latest","categories":["programming"],"example":"/latest","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["30secondsofcode.org"],"target":"/latest"}],"name":"New & Popular Snippets","maintainers":["Rjnishant530"],"location":"new-and-popular.ts","heat":51,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 404 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 47)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

### Category and Subcategory <Site url="www.30secondsofcode.org" size="sm" />

<Route namespace="30secondsofcode" :data='{"path":"/category/:category?/:subCategory?","categories":["programming"],"example":"/category/css/interactivity","parameters":{"category":{"description":"Main Category. For Complete list visit site \"https://www.30secondsofcode.org/collections/p/1/\"","options":[{"value":"js","label":"Javascript"},{"value":"css","label":"CSS"},{"value":"algorithm","label":"JavaScript Algorithms"},{"value":"react","label":"React"}]},"subCategory":{"description":"Filter within Category. Visit Individual Category site for subCategories"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["30secondsofcode.org/:category/:subCategory/","30secondsofcode.org/:category/"],"target":"/category/:category/:subCategory"}],"name":"Category and Subcategory","maintainers":["Rjnishant530"],"location":"category.ts","heat":5,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 404 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 46)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## Codeforces <Site url="codeforces.com"/>

### Latest contests <Site url="www.codeforces.com/contests" size="sm" />

<Route namespace="codeforces" :data='{"path":"/contests","categories":["programming"],"example":"/codeforces/contests","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.codeforces.com/contests"]}],"name":"Latest contests","maintainers":["Fatpandac"],"url":"www.codeforces.com/contests","location":"contests.ts","heat":46,"topFeeds":[]}' :test='{"code":0}' />

### Recent actions <Site url="codeforces.com/recent-actions" size="sm" />

<Route namespace="codeforces" :data='{"path":"/recent-actions/:minrating?","categories":["programming"],"example":"/codeforces/recent-actions","parameters":{"minrating":"The minimum blog/comment rating required. Default: 1"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["codeforces.com/recent-actions"],"target":"/recent-actions"}],"name":"Recent actions","maintainers":[],"url":"codeforces.com/recent-actions","location":"recent-actions.ts","heat":2,"topFeeds":[]}' :test='{"code":0}' />

## Meta <Site url="www.meta.com"/>

### AI Blog <Site url="ai.meta.com/blog/" size="sm" />

<Route namespace="meta" :data='{"path":"/ai/blog","categories":["programming"],"example":"/meta/ai/blog","name":"AI Blog","maintainers":["TonyRL"],"url":"ai.meta.com/blog/","radar":[{"source":["ai.meta.com/blog/","ai.meta.com"]}],"location":"ai-blog.ts","heat":44,"topFeeds":[]}' :test='{"code":0}' />

## DEV Community <Site url="dev.to"/>

A constructive and inclusive social network for software developers.

### Top Posts <Site url="dev.to/top" size="sm" />

<Route namespace="dev.to" :data='{"path":"/top/:period","categories":["programming"],"example":"/dev.to/top/week","parameters":{"period":"Period (week, month, year, infinity)"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["dev.to/top/:period"]}],"name":"Top Posts","maintainers":["dwemerx","Rjnishant530"],"url":"dev.to/top","location":"top.ts","heat":31,"topFeeds":[]}' :test='{"code":0}' />

### Trending Guides <Site url="dev.to" size="sm" />

<Route namespace="dev.to" :data='{"path":"/guides","categories":["programming"],"example":"/dev.to/guides","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["dev.to/"]}],"name":"Trending Guides","maintainers":["Rjnishant530"],"url":"dev.to","location":"guides.ts","heat":12,"topFeeds":[]}' :test='{"code":0}' />

## Augment Code <Site url="augmentcode.com"/>

### Blog <Site url="augmentcode.com" size="sm" />

<Route namespace="augmentcode" :data='{"path":"/blog","name":"Blog","url":"augmentcode.com","maintainers":["nczitzk"],"example":"/augmentcode/blog","categories":["programming"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["augmentcode.com/blog"],"target":"/blog"}],"view":0,"location":"blog.ts","heat":39,"topFeeds":[]}' :test='{"code":0}' />

## 华为开发者联盟 <Site url="developer.huawei.com"/>

### HarmonyOS 示例代码 <Site url="developer.huawei.com" size="sm" />

<Route namespace="huawei" :data='{"path":"/developer/harmonyos/sample-code","categories":["programming"],"example":"/huawei/developer/harmonyos/sample-code","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["developer.huawei.com/consumer/cn/samples"],"target":"/huawei/developer/harmonyos/sample-code"}],"name":"HarmonyOS 示例代码","maintainers":["JiZhi-Error"],"location":"developer/harmonyos/samplecode.ts","heat":37,"topFeeds":[]}' :test='{"code":0}' />

## 登链社区 <Site url="learnblockchain.cn"/>

### 文章 <Site url="learnblockchain.cn" size="sm" />

<Route namespace="learnblockchain" :data='{"path":"/posts/:cid/:sort?","categories":["programming"],"example":"/learnblockchain/posts/DApp/newest","parameters":{"cid":"分类id,更多分类可以论坛的URL找到","sort":"排序方式，默认精选"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"文章","maintainers":["running-grass"],"description":"| id       | 分类         |\n| -------- | ------------ |\n| all      | 全部         |\n| DApp     | 去中心化应用 |\n| chains   | 公链         |\n| 联盟链   | 联盟链       |\n| scaling  | Layer2       |\n| langs    | 编程语言     |\n| security | 安全         |\n| dst      | 存储         |\n| basic    | 理论研究     |\n| other    | 其他         |\n\n| id       | 排序方式    |\n| -------- | ----------- |\n| newest   | 最新        |\n| featured | 精选 (默认) |\n| featured | 最赞        |\n| hottest  | 最热        |","location":"posts.ts","heat":36,"topFeeds":[]}' :test='{"code":0}' />

| id       | 分类         |
| -------- | ------------ |
| all      | 全部         |
| DApp     | 去中心化应用 |
| chains   | 公链         |
| 联盟链   | 联盟链       |
| scaling  | Layer2       |
| langs    | 编程语言     |
| security | 安全         |
| dst      | 存储         |
| basic    | 理论研究     |
| other    | 其他         |

| id       | 排序方式    |
| -------- | ----------- |
| newest   | 最新        |
| featured | 精选 (默认) |
| featured | 最赞        |
| hottest  | 最热        |

## Windsurf <Site url="windsurf.com"/>

### Blog <Site url="windsurf.com" size="sm" />

<Route namespace="windsurf" :data='{"path":"/blog","name":"Blog","url":"windsurf.com","maintainers":["nczitzk"],"example":"/windsurf/blog","categories":["programming"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["windsurf.com/blog"],"target":"/blog"}],"view":0,"location":"blog.ts","heat":23,"topFeeds":[]}' :test='{"code":0}' />

### Changelog <Site url="windsurf.com" size="sm" />

<Route namespace="windsurf" :data='{"path":"/changelog","name":"Changelog","url":"windsurf.com","maintainers":["nczitzk"],"example":"/windsurf/changelog","categories":["programming"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["windsurf.com/changelog"],"target":"/changelog"}],"view":0,"location":"changelog.ts","heat":12,"topFeeds":[]}' :test='{"code":0}' />

## Node.js <Site url="nodejs.org"/>

### News <Site url="nodejs.org" size="sm" />

<Route namespace="nodejs" :data='{"path":"/blog/:language?","categories":["programming"],"example":"/nodejs/blog","parameters":{"language":"Language, see below, en by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nodejs.org/:language/blog","nodejs.org/"]}],"name":"News","maintainers":["nczitzk"],"description":"Official RSS Source: https://nodejs.org/en/feed/blog.xml\n\n| العربية | Catalan | Deutsch | Español | زبان فارسی |\n| ------- | ------- | ------- | ------- | ---------- |\n| ar      | ca      | de      | es      | fa         |\n\n| Français | Galego | Italiano | 日本語 | 한국어 |\n| -------- | ------ | -------- | ------ | ------ |\n| fr       | gl     | it       | ja     | ko     |\n\n| Português do Brasil | limba română | Русский | Türkçe | Українська |\n| ------------------- | ------------ | ------- | ------ | ---------- |\n| pt-br               | ro           | ru      | tr     | uk         |\n\n| 简体中文 | 繁體中文 |\n| -------- | -------- |\n| zh-cn    | zh-tw    |","location":"blog.ts","heat":31,"topFeeds":[]}' :test='{"code":0}' />

Official RSS Source: https://nodejs.org/en/feed/blog.xml

| العربية | Catalan | Deutsch | Español | زبان فارسی |
| ------- | ------- | ------- | ------- | ---------- |
| ar      | ca      | de      | es      | fa         |

| Français | Galego | Italiano | 日本語 | 한국어 |
| -------- | ------ | -------- | ------ | ------ |
| fr       | gl     | it       | ja     | ko     |

| Português do Brasil | limba română | Русский | Türkçe | Українська |
| ------------------- | ------------ | ------- | ------ | ---------- |
| pt-br               | ro           | ru      | tr     | uk         |

| 简体中文 | 繁體中文 |
| -------- | -------- |
| zh-cn    | zh-tw    |

## Python <Site url="python.org"/>

### Active Python Releases <Site url="www.python.org" size="sm" />

<Route namespace="python" :data='{"path":"/release","name":"Active Python Releases","url":"www.python.org","maintainers":["nczitzk"],"example":"/python/release","categories":["programming"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.python.org","www.python.org/downloads"],"target":"/release"}],"view":0,"location":"release.ts","heat":29,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected -3451158597 to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1865)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)"}' />

## Quicker <Site url="getquicker.net"/>

### 动作分享 <Site url="getquicker.net" size="sm" />

<Route namespace="quicker" :data='{"path":"/share/:category?","categories":["programming"],"example":"/quicker/share/Recent","parameters":{"category":"分类，见下表，默认为动作库最新更新"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["getquicker.net/Share/:category","getquicker.net/"]}],"name":"动作分享","maintainers":["nczitzk"],"description":"| 动作库最新更新 | 动作库最多赞 | 动作库新动作 | 动作库最近赞 |\n| -------------- | ------------ | ------------ | ------------ |\n| Recent         | Recommended  | NewActions   | RecentLiked  |\n\n| 子程序      | 扩展热键  | 文本指令     |\n| ----------- | --------- | ------------ |\n| SubPrograms | PowerKeys | TextCommands |","location":"share.ts","heat":18,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1908)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

| 动作库最新更新 | 动作库最多赞 | 动作库新动作 | 动作库最近赞 |
| -------------- | ------------ | ------------ | ------------ |
| Recent         | Recommended  | NewActions   | RecentLiked  |

| 子程序      | 扩展热键  | 文本指令     |
| ----------- | --------- | ------------ |
| SubPrograms | PowerKeys | TextCommands |

### 讨论区 <Site url="getquicker.net" size="sm" />

<Route namespace="quicker" :data='{"path":"/qa/:category?/:state?","categories":["programming"],"example":"/quicker/qa","parameters":{"category":"分类，见下表，默认为全部","state":"状态，见下表，默认为全部"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"讨论区","maintainers":["Cesaryuan","nczitzk"],"description":"分类\n\n| 使用问题 | 动作开发 | BUG 反馈 | 功能建议 |\n| -------- | -------- | -------- | -------- |\n| 1        | 9        | 3        | 4        |\n\n| 动作需求 | 经验创意 | 动作推荐 | 信息发布 |\n| -------- | -------- | -------- | -------- |\n| 6        | 2        | 7        | 5        |\n\n| 随便聊聊 | 异常报告 | 全部 |\n| -------- | -------- | ---- |\n| 8        | 10       | all  |\n\n  状态\n\n| 全部 | 精华   | 已归档  |\n| ---- | ------ | ------- |\n|      | digest | achived |","location":"qa.ts","heat":4,"topFeeds":[]}' :test='{"code":0}' />

分类

| 使用问题 | 动作开发 | BUG 反馈 | 功能建议 |
| -------- | -------- | -------- | -------- |
| 1        | 9        | 3        | 4        |

| 动作需求 | 经验创意 | 动作推荐 | 信息发布 |
| -------- | -------- | -------- | -------- |
| 6        | 2        | 7        | 5        |

| 随便聊聊 | 异常报告 | 全部 |
| -------- | -------- | ---- |
| 8        | 10       | all  |

  状态

| 全部 | 精华   | 已归档  |
| ---- | ------ | ------- |
|      | digest | achived |

### Unknown <Site url="getquicker.net/Help/Versions" size="sm" />

<Route namespace="quicker" :data='{"path":["/update","/versions"],"name":"Unknown","maintainers":["Cesaryuan","nczitzk"],"url":"getquicker.net/Help/Versions","location":"versions.ts","heat":3,"topFeeds":[]}' :test='undefined' />

### 用户更新 <Site url="getquicker.net" size="sm" />

<Route namespace="quicker" :data='{"path":"/user/:category/:id","categories":["programming"],"example":"/quicker/user/Actions/3-CL","parameters":{"category":"分类，见下表","id":"用户 id，可在对应用户页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"用户更新","maintainers":["Cesaryuan","nczitzk"],"description":"| 动作    | 子程序      | 动作单      |\n| ------- | ----------- | ----------- |\n| Actions | SubPrograms | ActionLists |","location":"user.ts","heat":1,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected NaN to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1909)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)"}' />

| 动作    | 子程序      | 动作单      |
| ------- | ----------- | ----------- |
| Actions | SubPrograms | ActionLists |

## Zed <Site url="zed.dev"/>

### Blog <Site url="zed.dev" size="sm" />

<Route namespace="zed" :data='{"path":"/blog","categories":["programming"],"example":"/zed/blog","url":"zed.dev","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["zed.dev"],"target":"/blog"}],"name":"Blog","maintainers":["cscnk52"],"description":"Provides a better reading experience (full articles) over the official ones.","view":5,"location":"blog.ts","heat":24,"topFeeds":[]}' :test='{"code":0}' />

Provides a better reading experience (full articles) over the official ones.

## Gitee <Site url="gitee.com"/>

### 仓库动态 <Site url="gitee.com" size="sm" />

<Route namespace="gitee" :data='{"path":"/events/:owner/:repo","categories":["programming"],"example":"/gitee/events/y_project/RuoYi","parameters":{"owner":"用户名","repo":"仓库名"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gitee.com/:owner/:repo"]}],"name":"仓库动态","maintainers":["TonyRL"],"location":"repos/events.ts","heat":8,"topFeeds":[]}' :test='{"code":0}' />

### 仓库提交 <Site url="gitee.com" size="sm" />

<Route namespace="gitee" :data='{"path":"/commits/:owner/:repo","categories":["programming"],"example":"/gitee/commits/y_project/RuoYi","parameters":{"owner":"用户名","repo":"仓库名"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gitee.com/:owner/:repo/commits"]}],"name":"仓库提交","maintainers":["TonyRL"],"location":"repos/commits.ts","heat":6,"topFeeds":[]}' :test='{"code":0}' />

### 用户公开动态 <Site url="gitee.com" size="sm" />

<Route namespace="gitee" :data='{"path":"/events/:username","categories":["programming"],"example":"/gitee/events/y_project","parameters":{"username":"用户名"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gitee.com/:username"]}],"name":"用户公开动态","maintainers":["TonyRL"],"location":"users/events.ts","heat":6,"topFeeds":[]}' :test='{"code":0}' />

### 仓库 Releases <Site url="gitee.com" size="sm" />

<Route namespace="gitee" :data='{"path":"/releases/:owner/:repo","categories":["programming"],"example":"/gitee/releases/y_project/RuoYi","parameters":{"owner":"用户名","repo":"仓库名"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gitee.com/:owner/:repo/releases"]}],"name":"仓库 Releases","maintainers":["TonyRL"],"location":"repos/releases.ts","heat":3,"topFeeds":[]}' :test='{"code":0}' />

## Warp <Site url="warp.dev"/>

### Blog <Site url="warp.dev" size="sm" />

<Route namespace="warp" :data='{"path":"/blog","categories":["programming"],"example":"/warp/blog","url":"warp.dev","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.warp.dev"],"target":"/blog"}],"name":"Blog","maintainers":["cscnk52"],"description":"Provides a better reading experience (full articles) over the official ones.","view":5,"location":"blog.ts","heat":23,"topFeeds":[]}' :test='{"code":0}' />

Provides a better reading experience (full articles) over the official ones.

## AtCoder <Site url="atcoder.jp"/>

### Contests Archive <Site url="atcoder.jp" size="sm" />

<Route namespace="atcoder" :data='{"path":"/contest/:language?/:rated?/:category?/:keyword?","categories":["programming"],"example":"/atcoder/contest","parameters":{"language":"Language, `jp` as Japanese or `en` as English, English by default","rated":"Rated Range, see below, all by default","category":"Category, see below, all by default","keyword":"Keyword"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Contests Archive","maintainers":["nczitzk"],"description":"Rated Range\n\n| ABC Class (Rated for ~1999) | ARC Class (Rated for ~2799) | AGC Class (Rated for ~9999) |\n| ---------------------------- | ---------------------------- | ---------------------------- |\n| 1                            | 2                            | 3                            |\n\n  Category\n\n| All | AtCoder Typical Contest | PAST Archive | Unofficial(unrated) |\n| --- | ----------------------- | ------------ | ------------------- |\n| 0   | 6                       | 50           | 101                 |\n\n| JOI Archive | Sponsored Tournament | Sponsored Parallel(rated) |\n| ----------- | -------------------- | ------------------------- |\n| 200         | 1000                 | 1001                      |\n\n| Sponsored Parallel(unrated) | Optimization Contest |\n| --------------------------- | -------------------- |\n| 1002                        | 1200                 |","location":"contest.ts","heat":14,"topFeeds":[]}' :test='{"code":0}' />

Rated Range

| ABC Class (Rated for ~1999) | ARC Class (Rated for ~2799) | AGC Class (Rated for ~9999) |
| ---------------------------- | ---------------------------- | ---------------------------- |
| 1                            | 2                            | 3                            |

  Category

| All | AtCoder Typical Contest | PAST Archive | Unofficial(unrated) |
| --- | ----------------------- | ------------ | ------------------- |
| 0   | 6                       | 50           | 101                 |

| JOI Archive | Sponsored Tournament | Sponsored Parallel(rated) |
| ----------- | -------------------- | ------------------------- |
| 200         | 1000                 | 1001                      |

| Sponsored Parallel(unrated) | Optimization Contest |
| --------------------------- | -------------------- |
| 1002                        | 1200                 |

### Posts <Site url="atcoder.jp" size="sm" />

<Route namespace="atcoder" :data='{"path":"/post/:language?/:keyword?","categories":["programming"],"example":"/atcoder/post","parameters":{"language":"Language, `jp` as Japanese or `en` as English, English by default","keyword":"Keyword"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Posts","maintainers":["nczitzk"],"location":"post.ts","heat":7,"topFeeds":[]}' :test='{"code":0}' />

## 连享会 <Site url="www.lianxh.cn"/>

### 精彩资讯 <Site url="www.lianxh.cn/" size="sm" />

<Route namespace="lianxh" :data='{"path":"/:category?","example":"/lianxh","parameters":{"category":"分类 id，可在对应分类页 URL 中找到，默认为 `all`，即全部"},"radar":[{"source":["www.lianxh.cn/blogs/all.html","www.lianxh.cn/"]}],"name":"精彩资讯","maintainers":["nczitzk"],"url":"www.lianxh.cn/","description":"| 分类                 | id  |\n -------------------- | --- |\n 全部                 | all |\n Stata 入门           | 16  |\n Stata 教程           | 17  |\n 计量专题             | 18  |\n 内生性 - 因果推断    | 19  |\n 面板数据             | 20  |\n 交乘项 - 调节 - 中介 | 21  |\n 结果输出             | 22  |\n 工具软件             | 23  |\n Stata 绘图           | 24  |\n 数据处理             | 25  |\n Stata 程序           | 26  |\n Probit-Logit         | 27  |\n 时间序列             | 28  |\n 空间计量 - 网络分析  | 29  |\n Markdown-LaTeX       | 30  |\n 论文写作             | 31  |\n 回归分析             | 32  |\n 其它                 | 33  |\n 数据分享             | 34  |\n Stata 资源           | 35  |\n 文本分析 - 爬虫      | 36  |\n Python-R-Matlab      | 37  |\n IV-GMM               | 38  |\n 倍分法 DID           | 39  |\n 断点回归 RDD         | 40  |\n PSM-Matching         | 41  |\n 合成控制法           | 42  |\n Stata 命令           | 43  |\n 专题课程             | 44  |\n 风险管理             | 45  |\n 生存分析             | 46  |\n 机器学习             | 47  |\n 分位数回归           | 48  |\n SFA-DEA - 效率分析   | 49  |\n 答疑 - 板书          | 50  |\n 论文重现             | 51  |\n 最新课程             | 52  |\n 公开课               | 53  |","location":"index.ts","heat":20,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected -41381830621 to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1401)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)"}' />

| 分类                 | id  |
 -------------------- | --- |
 全部                 | all |
 Stata 入门           | 16  |
 Stata 教程           | 17  |
 计量专题             | 18  |
 内生性 - 因果推断    | 19  |
 面板数据             | 20  |
 交乘项 - 调节 - 中介 | 21  |
 结果输出             | 22  |
 工具软件             | 23  |
 Stata 绘图           | 24  |
 数据处理             | 25  |
 Stata 程序           | 26  |
 Probit-Logit         | 27  |
 时间序列             | 28  |
 空间计量 - 网络分析  | 29  |
 Markdown-LaTeX       | 30  |
 论文写作             | 31  |
 回归分析             | 32  |
 其它                 | 33  |
 数据分享             | 34  |
 Stata 资源           | 35  |
 文本分析 - 爬虫      | 36  |
 Python-R-Matlab      | 37  |
 IV-GMM               | 38  |
 倍分法 DID           | 39  |
 断点回归 RDD         | 40  |
 PSM-Matching         | 41  |
 合成控制法           | 42  |
 Stata 命令           | 43  |
 专题课程             | 44  |
 风险管理             | 45  |
 生存分析             | 46  |
 机器学习             | 47  |
 分位数回归           | 48  |
 SFA-DEA - 效率分析   | 49  |
 答疑 - 板书          | 50  |
 论文重现             | 51  |
 最新课程             | 52  |
 公开课               | 53  |

## Raspberry Pi <Site url="raspberrypi.com"/>

### Official Magazine <Site url="magazine.raspberrypi.com" size="sm" />

<Route namespace="raspberrypi" :data='{"path":"/magazine","name":"Official Magazine","url":"magazine.raspberrypi.com","maintainers":["nczitzk"],"example":"/raspberrypi/magazine","categories":["programming"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["magazine.raspberrypi.com"],"target":"/raspberrypi/magazine"}],"view":0,"location":"magazine.ts","heat":19,"topFeeds":[]}' :test='{"code":0}' />

## TailwindCSS <Site url="tailwindcss.com"/>

### Blog <Site url="tailwindcss.com" size="sm" />

<Route namespace="tailwindcss" :data='{"path":"/blog","categories":["programming"],"example":"/tailwindcss/blog","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Blog","maintainers":["goestav"],"location":"blog.ts","heat":18,"topFeeds":[]}' :test='{"code":0}' />

## Visual Studio <Site url="visualstudio.com"/>

### Code Blog <Site url="code.visualstudio.com" size="sm" />

<Route namespace="visualstudio" :data='{"path":"/code/blog","categories":["programming"],"example":"/visualstudio/code/blog","url":"code.visualstudio.com","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["code.visualstudio.com/"],"target":"/code/blog"}],"name":"Code Blog","maintainers":["cscnk52"],"description":"Provides a better reading experience (full articles) over the official ones.","view":5,"location":"code-blog.ts","heat":18,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2381)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

Provides a better reading experience (full articles) over the official ones.

## A List Apart <Site url="alistapart.com"/>

### Topics <Site url="alistapart.com/articles/" size="sm" />

<Route namespace="alistapart" :data='{"path":"/:topic","categories":["programming"],"example":"/alistapart/application-development","parameters":{"topic":"Any Topic or from the table below. Defaults to All Articles"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["alistapart.com/blog/topic/:topic"],"target":"/:topic"}],"name":"Topics","maintainers":["Rjnishant530"],"url":"alistapart.com/articles/","description":"You have the option to utilize the main heading or use individual categories as topics for the path.\n\n| **Code**                    | *code*                    |\n| --------------------------- | ------------------------- |\n| **Application Development** | *application-development* |\n| **Browsers**                | *browsers*                |\n| **CSS**                     | *css*                     |\n| **HTML**                    | *html*                    |\n| **JavaScript**              | *javascript*              |\n| **The Server Side**         | *the-server-side*         |\n\n| **Content**          | *content*          |\n| -------------------- | ------------------ |\n| **Community**        | *community*        |\n| **Content Strategy** | *content-strategy* |\n| **Writing**          | *writing*          |\n\n| **Design**                 | *design*               |\n| -------------------------- | ---------------------- |\n| **Brand Identity**         | *brand-identity*       |\n| **Graphic Design**         | *graphic-design*       |\n| **Layout & Grids**         | *layout-grids*         |\n| **Mobile/Multidevice**     | *mobile-multidevice*   |\n| **Responsive Design**      | *responsive-design*    |\n| **Typography & Web Fonts** | *typography-web-fonts* |\n\n| **Industry & Business** | *industry-business* |\n| ----------------------- | ------------------- |\n| **Business**            | *business*          |\n| **Career**              | *career*            |\n| **Industry**            | *industry*          |\n| **State of the Web**    | *state-of-the-web*  |\n\n| **Process**            | *process*            |\n| ---------------------- | -------------------- |\n| **Creativity**         | *creativity*         |\n| **Project Management** | *project-management* |\n| **Web Strategy**       | *web-strategy*       |\n| **Workflow & Tools**   | *workflow-tools*     |\n\n| **User Experience**          | *user-experience*          |\n| ---------------------------- | -------------------------- |\n| **Accessibility**            | *accessibility*            |\n| **Information Architecture** | *information-architecture* |\n| **Interaction Design**       | *interaction-design*       |\n| **Usability**                | *usability*                |\n| **User Research**            | *user-research*            |","location":"topic.ts","heat":17,"topFeeds":[]}' :test='{"code":0}' />

You have the option to utilize the main heading or use individual categories as topics for the path.

| **Code**                    | *code*                    |
| --------------------------- | ------------------------- |
| **Application Development** | *application-development* |
| **Browsers**                | *browsers*                |
| **CSS**                     | *css*                     |
| **HTML**                    | *html*                    |
| **JavaScript**              | *javascript*              |
| **The Server Side**         | *the-server-side*         |

| **Content**          | *content*          |
| -------------------- | ------------------ |
| **Community**        | *community*        |
| **Content Strategy** | *content-strategy* |
| **Writing**          | *writing*          |

| **Design**                 | *design*               |
| -------------------------- | ---------------------- |
| **Brand Identity**         | *brand-identity*       |
| **Graphic Design**         | *graphic-design*       |
| **Layout & Grids**         | *layout-grids*         |
| **Mobile/Multidevice**     | *mobile-multidevice*   |
| **Responsive Design**      | *responsive-design*    |
| **Typography & Web Fonts** | *typography-web-fonts* |

| **Industry & Business** | *industry-business* |
| ----------------------- | ------------------- |
| **Business**            | *business*          |
| **Career**              | *career*            |
| **Industry**            | *industry*          |
| **State of the Web**    | *state-of-the-web*  |

| **Process**            | *process*            |
| ---------------------- | -------------------- |
| **Creativity**         | *creativity*         |
| **Project Management** | *project-management* |
| **Web Strategy**       | *web-strategy*       |
| **Workflow & Tools**   | *workflow-tools*     |

| **User Experience**          | *user-experience*          |
| ---------------------------- | -------------------------- |
| **Accessibility**            | *accessibility*            |
| **Information Architecture** | *information-architecture* |
| **Interaction Design**       | *interaction-design*       |
| **Usability**                | *usability*                |
| **User Research**            | *user-research*            |

### Home Feed <Site url="alistapart.com/articles/" size="sm" />

<Route namespace="alistapart" :data='{"path":"/","categories":["programming"],"radar":[{"source":["alistapart.com/articles/"],"target":"/"}],"name":"Home Feed","maintainers":["Rjnishant530"],"url":"alistapart.com/articles/","example":"/alistapart","location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## CSS-Tricks <Site url="css-tricks.com"/>

### Articles <Site url="css-tricks.com" size="sm" />

<Route namespace="css-tricks" :data='{"path":"/articles","view":0,"categories":["programming"],"example":"/css-tricks/articles","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["css-tricks.com/category/articles/"],"target":"/articles"}],"name":"Articles","maintainers":["Rjnishant530"],"location":"articles.ts","heat":15,"topFeeds":[]}' :test='{"code":0}' />

### Popular this month <Site url="css-tricks.com" size="sm" />

<Route namespace="css-tricks" :data='{"path":"/popular","view":0,"categories":["programming"],"example":"/css-tricks/popular","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["css-tricks.com"],"target":"/popular"}],"name":"Popular this month","maintainers":["Rjnishant530"],"location":"popular.ts","heat":2,"topFeeds":[]}' :test='{"code":0}' />

### CSS Guides <Site url="css-tricks.com" size="sm" />

<Route namespace="css-tricks" :data='{"path":"/collections/:type","view":0,"categories":["programming"],"example":"/css-tricks/collections/2","parameters":{"category":{"description":"Collection Type","options":[{"value":"3","label":"Latest CSS Guides"},{"value":"2","label":"Fresh From the Almanac"},{"value":"4","label":"Classic Tricks"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["css-tricks.com"],"target":"/collections/:type"}],"name":"CSS Guides","maintainers":["Rjnishant530"],"location":"collections.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 558)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## HITCON <Site url="hitcon.org"/>

### 漏洞 <Site url="hitcon.org" size="sm" />

<Route namespace="hitcon" :data='{"name":"漏洞","categories":["programming"],"path":"/zeroday/vulnerability/:status?","example":"/hitcon/zeroday/vulnerability","parameters":{"status":"漏洞状态，见下表"},"maintainers":["KarasuShin"],"radar":[{"source":["zeroday.hitcon.org/vulnerability/:status?"]}],"features":{"requirePuppeteer":true},"description":"| 缺省   | all  | closed | disclosed | patching |\n| ------ | ---- | ------ | --------- | -------- |\n| 活動中 | 全部 | 關閉   | 公開      | 修補中   |","location":"zeroday.ts","heat":16,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1091)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

| 缺省   | all  | closed | disclosed | patching |
| ------ | ---- | ------ | --------- | -------- |
| 活動中 | 全部 | 關閉   | 公開      | 修補中   |

## HackMD <Site url="hackmd.io"/>

### Profile <Site url="hackmd.io" size="sm" />

<Route namespace="hackmd" :data='{"path":"/profile/:path","categories":["programming"],"example":"/hackmd/profile/hackmd","parameters":{"path":"userpath or teampath"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Profile","maintainers":["Yukaii","kaiix"],"location":"profile.ts","heat":14,"topFeeds":[]}' :test='{"code":0}' />

## 洛谷 <Site url="luogu.com.cn"/>

### 比赛列表 <Site url="luogu.com.cn/contest/list" size="sm" />

<Route namespace="luogu" :data='{"path":"/contest","categories":["programming"],"example":"/luogu/contest","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["luogu.com.cn/contest/list","luogu.com.cn/"]}],"name":"比赛列表","maintainers":["prnake"],"url":"luogu.com.cn/contest/list","location":"contest.ts","heat":11,"topFeeds":[]}' :test='{"code":0}' />

### 用户文章 <Site url="luogu.com.cn" size="sm" />

<Route namespace="luogu" :data='{"path":"/user/article/:uid","categories":["programming"],"example":"/luogu/user/article/1","parameters":{"name":"用户 UID"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["luogu.com/user/:uid"]},{"source":["luogu.com.cn/user/:uid"]}],"name":"用户文章","maintainers":["TonyRL"],"location":"user-article.ts","heat":3,"topFeeds":[]}' :test='{"code":0}' />

### 日报 <Site url="luogu.com.cn/discuss/47327" size="sm" />

<Route namespace="luogu" :data='{"path":"/daily/:id?","categories":["programming"],"example":"/luogu/daily","parameters":{"id":"年度日报所在帖子 id，可在 URL 中找到，不填默认为 `47327`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["luogu.com.cn/discuss/47327","luogu.com.cn/"],"target":"/daily"}],"name":"日报","maintainers":["LogicJake","prnake","nczitzk"],"url":"luogu.com.cn/discuss/47327","location":"daily.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1435)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

### 用户博客 <Site url="luogu.com.cn" size="sm" />

<Route namespace="luogu" :data='{"path":"/user/blog/:name","categories":["programming"],"example":"/luogu/user/blog/ftiasch","parameters":{"name":"博客名称"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["luogu.com/blog/:name"]},{"source":["luogu.com.cn/blog/:name"]}],"name":"用户博客","maintainers":["ftiasch"],"location":"user-blog.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1437)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

### 用户动态 <Site url="luogu.com.cn" size="sm" />

<Route namespace="luogu" :data='{"path":"/user/feed/:uid","categories":["programming"],"example":"/luogu/user/feed/1","parameters":{"uid":"用户 UID"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["luogu.com/user/:uid"]},{"source":["luogu.com.cn/user/:uid"]}],"name":"用户动态","maintainers":["solstice23"],"location":"user-feed.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1438)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## MySQL <Site url="dev.mysql.com"/>

### Release Notes <Site url="dev.mysql.com" size="sm" />

<Route namespace="mysql" :data='{"path":"/release/:version?","categories":["programming"],"example":"/mysql/release/8.0","parameters":{"version":"Version, see below, 8.0 by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Release Notes","maintainers":["nczitzk"],"description":"| 8.0 | 5.7 | 5.6 |\n| --- | --- | --- |","location":"release.ts","heat":13,"topFeeds":[]}' :test='{"code":0}' />

| 8.0 | 5.7 | 5.6 |
| --- | --- | --- |

## DuckDB Foundation <Site url="duckdb.org"/>

### 新闻 <Site url="duckdb.org" size="sm" />

<Route namespace="duckdb" :data='{"path":"/news","categories":["programming"],"example":"/duckdb/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"新闻","maintainers":["mocusez"],"location":"news.ts","heat":12,"topFeeds":[]}' :test='{"code":0}' />

## Hex-Rays <Site url="hex-rays.com"/>

### Hex-Rays News <Site url="hex-rays.com/" size="sm" />

<Route namespace="hex-rays" :data='{"path":"/news","categories":["programming"],"example":"/hex-rays/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["hex-rays.com/","hex-rays.com/blog"]}],"name":"Hex-Rays News","maintainers":["hellodword ","TonyRL","Mas0n"],"url":"hex-rays.com/","location":"index.ts","heat":12,"topFeeds":[]}' :test='{"code":0}' />

## Cybercrime Magazine <Site url="cybersecurityventures.com"/>

### News <Site url="cybersecurityventures.com" size="sm" />

<Route namespace="cybersecurityventures" :data='{"name":"News","categories":["programming"],"path":"/news/:category?","example":"/cybersecurityventures/news","radar":[{"source":["cybersecurityventures.com/today"],"target":"/news/today","title":"Today&#39;s News"},{"source":["cybersecurityventures.com/intrusion-daily-cyber-threat-alert"],"target":"/news/intrusion-daily-cyber-threat-alert","title":"Cyberattacks"},{"source":["cybersecurityventures.com/ransomware-minute"],"target":"/news/ransomware-minute","title":"Ransomware"},{"source":["cybersecurityventures.com/cryptocrime"],"target":"/news/cryptocrime","title":"Cryptocrime"},{"source":["cybersecurityventures.com/hack-blotter"],"target":"/news/hack-blotter","title":"Hack Blotter"},{"source":["cybersecurityventures.com/cybersecurity-venture-capital-vc-deals"],"target":"/news/cybersecurity-venture-capital-vc-deals","title":"VC Deal Flow"},{"source":["cybersecurityventures.com/mergers-and-acquisitions-report"],"target":"/news/mergers-and-acquisitions-report","title":"M&A Tracker"}],"parameters":{"category":{"description":"news category","default":"today","options":[{"value":"today","label":"Today&#39;s News"},{"value":"intrusion-daily-cyber-threat-alert","label":"Cyberattacks"},{"value":"ransomware-minute","label":"Ransomware"},{"value":"cryptocrime","label":"Cryptocrime"},{"value":"hack-blotter","label":"Hack Blotter"},{"value":"cybersecurity-venture-capital-vc-deals","label":"VC Deal Flow"},{"value":"mergers-and-acquisitions-report","label":"M&A Tracker"}]}},"maintainers":["KarasuShin"],"features":{"supportRadar":true},"view":0,"location":"news.ts","heat":11,"topFeeds":[]}' :test='{"code":0}' />

## Kiro <Site url="kiro.dev"/>

The AI IDE for prototype to production

### Blog <Site url="kiro.dev" size="sm" />

<Route namespace="kiro" :data='{"path":"/blog","name":"Blog","url":"kiro.dev","maintainers":["nczitzk"],"example":"/kiro/blog","categories":["programming"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["kiro.dev","kiro.dev/blog/"],"target":"/blog"}],"view":0,"location":"blog.ts","heat":11,"topFeeds":[]}' :test='{"code":0}' />

## Kong API 网关平台 <Site url="konghq.com"/>

[Kong](https://konghq.com/) 是一家开源的 API 网关服务商，此处收集其官网的最新博客文章。

### 博客最新文章 <Site url="konghq.com/blog/*" size="sm" />

<Route namespace="konghq" :data='{"path":"/blog-posts","categories":["programming"],"example":"/konghq/blog-posts","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["konghq.com/blog/*"]}],"name":"博客最新文章","maintainers":["piglei"],"url":"konghq.com/blog/*","location":"blog-posts.ts","heat":11,"topFeeds":[]}' :test='{"code":0}' />

## 墨天轮 <Site url="modb.pro"/>

### 合辑 <Site url="modb.pro" size="sm" />

<Route namespace="modb" :data='{"path":"/topic/:id","categories":["programming"],"example":"/modb/topic/44158","parameters":{"id":"合辑序号"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"合辑","maintainers":["yueneiqi"],"location":"topic.ts","heat":11,"topFeeds":[]}' :test='{"code":0}' />

## 得物 <Site url="dewu.com"/>

### 平台公告 <Site url="dewu.com" size="sm" />

<Route namespace="dewu" :data='{"path":"/declaration/:categoryId?","categories":["programming"],"example":"/dewu/declaration/1010580020","parameters":{"categoryId":"公告分类, 可在页面URL获取 默认为1010580020"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"平台公告","maintainers":["blade0910"],"description":"| 类型             | type       |\n| ---------------- | ---------- |\n| 技术变更         | 1010580020 |\n| 服务市场规则中心 | 1014821004 |\n| 规则变更         | 1011202692 |\n| 维护公告         | 1010568195 |","location":"declaration.ts","heat":10,"topFeeds":[]}' :test='{"code":0}' />

| 类型             | type       |
| ---------------- | ---------- |
| 技术变更         | 1010580020 |
| 服务市场规则中心 | 1014821004 |
| 规则变更         | 1011202692 |
| 维护公告         | 1010568195 |

## Smashing Magazine <Site url="smashingmagazine.com"/>

### Category <Site url="smashingmagazine.com/articles/" size="sm" />

<Route namespace="smashingmagazine" :data='{"path":"/:category?","categories":["programming"],"example":"/smashingmagazine/react","parameters":{"category":"Find in URL or Table below"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["smashingmagazine.com/category/:category"],"target":"/:category"}],"name":"Category","maintainers":["Rjnishant530"],"url":"smashingmagazine.com/articles/","description":"| **Category**       |                    |\n| ------------------ | ------------------ |\n| Accessibility      | accessibility      |\n| Best practices     | best-practices     |\n| Business           | business           |\n| Career             | career             |\n| Checklists         | checklists         |\n| CSS                | css                |\n| Data Visualization | data-visualization |\n| Design             | design             |\n| Design Patterns    | design-patterns    |\n| Design Systems     | design-systems     |\n| E-Commerce         | e-commerce         |\n| Figma              | figma              |\n| Freebies           | freebies           |\n| HTML               | html               |\n| Illustrator        | illustrator        |\n| Inspiration        | inspiration        |\n| JavaScript         | javascript         |\n| Mobile             | mobile             |\n| Performance        | performance        |\n| Privacy            | privacy            |\n| React              | react              |\n| Responsive Design  | responsive-design  |\n| Round-Ups          | round-ups          |\n| SEO                | seo                |\n| Typography         | typography         |\n| Tools              | tools              |\n| UI                 | ui                 |\n| Usability          | usability          |\n| UX                 | ux                 |\n| Vue                | vue                |\n| Wallpapers         | wallpapers         |\n| Web Design         | web-design         |\n| Workflow           | workflow           |","location":"category.ts","heat":10,"topFeeds":[]}' :test='{"code":0}' />

| **Category**       |                    |
| ------------------ | ------------------ |
| Accessibility      | accessibility      |
| Best practices     | best-practices     |
| Business           | business           |
| Career             | career             |
| Checklists         | checklists         |
| CSS                | css                |
| Data Visualization | data-visualization |
| Design             | design             |
| Design Patterns    | design-patterns    |
| Design Systems     | design-systems     |
| E-Commerce         | e-commerce         |
| Figma              | figma              |
| Freebies           | freebies           |
| HTML               | html               |
| Illustrator        | illustrator        |
| Inspiration        | inspiration        |
| JavaScript         | javascript         |
| Mobile             | mobile             |
| Performance        | performance        |
| Privacy            | privacy            |
| React              | react              |
| Responsive Design  | responsive-design  |
| Round-Ups          | round-ups          |
| SEO                | seo                |
| Typography         | typography         |
| Tools              | tools              |
| UI                 | ui                 |
| Usability          | usability          |
| UX                 | ux                 |
| Vue                | vue                |
| Wallpapers         | wallpapers         |
| Web Design         | web-design         |
| Workflow           | workflow           |

## Manus <Site url="manus.im"/>

### Blog <Site url="manus.im" size="sm" />

<Route namespace="manus" :data='{"path":"/blog","categories":["programming"],"example":"/manus/blog","url":"manus.im","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.manus.im"],"target":"/blog"}],"name":"Blog","maintainers":["cscnk52"],"description":"Manus Blog","view":5,"location":"blog.ts","heat":9,"topFeeds":[]}' :test='{"code":0}' />

Manus Blog

## 淘宝网 <Site url="taobao.com"/>

### 数据库内核月报 <Site url="mysql.taobao.org" size="sm" />

<Route namespace="taobao" :data='{"path":"/mysql/monthly","name":"数据库内核月报","url":"mysql.taobao.org","maintainers":["nczitzk"],"example":"/taobao/mysql/monthly","categories":["programming"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["mysql.taobao.org/monthly/"],"target":"/mysql/monthly"}],"view":0,"location":"mysql.ts","heat":9,"topFeeds":[]}' :test='{"code":0}' />

## 蓝桥云课 <Site url="lanqiao.cn"/>

### 全站发布的课程 <Site url="lanqiao.cn" size="sm" />

<Route namespace="lanqiao" :data='{"path":"/courses/:sort/:tag","categories":["programming"],"example":"/lanqiao/courses/latest/all","parameters":{"sort":"排序规则 sort, 默认(`default`)、最新(`latest`)、最热(`hotest`)","tag":"课程标签 `tag`，可在该页面找到：https://www.lanqiao.cn/courses/"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"全站发布的课程","maintainers":["huhuhang"],"location":"courses.ts","heat":5,"topFeeds":[]}' :test='{"code":0}' />

### 技术社区 <Site url="lanqiao.cn/questions/" size="sm" />

<Route namespace="lanqiao" :data='{"path":"/questions/:id","categories":["programming"],"example":"/lanqiao/questions/2","parameters":{"id":"topic_id 主题 `id` 可在社区板块 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["lanqiao.cn/questions/","lanqiao.cn/questions/topics/:id"]}],"name":"技术社区","maintainers":["huhuhang"],"url":"lanqiao.cn/questions/","location":"questions.ts","heat":1,"topFeeds":[]}' :test='{"code":0}' />

### 作者发布的课程 <Site url="lanqiao.cn" size="sm" />

<Route namespace="lanqiao" :data='{"path":"/author/:uid","categories":["programming"],"example":"/lanqiao/author/1701267","parameters":{"uid":"作者 `uid` 可在作者主页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["lanqiao.cn/users/:uid"]}],"name":"作者发布的课程","maintainers":["huhuhang"],"location":"author.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## SegmentFault <Site url="segmentfault.com"/>

### 博客 <Site url="segmentfault.com" size="sm" />

<Route namespace="segmentfault" :data='{"path":"/blogs/:tag","categories":["programming"],"example":"/segmentfault/blogs/go","parameters":{"tag":"标签名称，在 [标签](https://segmentfault.com/tags) 中可以找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["segmentfault.com/t/:tag/blogs"]}],"name":"博客","maintainers":["shiluanzzz"],"location":"blogs.ts","heat":5,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2016)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

### 频道 <Site url="segmentfault.com" size="sm" />

<Route namespace="segmentfault" :data='{"path":"/channel/:name","categories":["programming"],"example":"/segmentfault/channel/frontend","parameters":{"name":"频道名称，在频道 URL 可以找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["segmentfault.com/channel/:name"]}],"name":"频道","maintainers":["LogicJake","Fatpandac"],"location":"channel.ts","heat":1,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2017)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

### 用户 <Site url="segmentfault.com" size="sm" />

<Route namespace="segmentfault" :data='{"path":"/user/:name","categories":["programming"],"example":"/segmentfault/user/minnanitkong","parameters":{"name":"用户 Id，用户详情页 URL 可以找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["segmentfault.com/u/:name"]}],"name":"用户","maintainers":["leyuuu","Fatpandac"],"location":"user.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2018)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## 抖店开放平台 <Site url="op.jinritemai.com"/>

### 平台公告 <Site url="op.jinritemai.com" size="sm" />

<Route namespace="jinritemai" :data='{"path":"/docs/:dirId?","categories":["programming"],"example":"/jinritemai/docs/19","parameters":{"dirId":"公告分类, 可在页面URL获取 默认为全部"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"平台公告","maintainers":["blade0910"],"description":"| 类型    | type    |\n| --------- | ---------- |\n| 全部公告    | 5    |\n| 产品发布    | 19   |\n| 规则变更    | 21   |\n| 维护公告    | 20   |\n| 其他公告    | 22   |","location":"docs.ts","heat":4,"topFeeds":[]}' :test='{"code":0}' />

| 类型    | type    |
| --------- | ---------- |
| 全部公告    | 5    |
| 产品发布    | 19   |
| 规则变更    | 21   |
| 维护公告    | 20   |
| 其他公告    | 22   |

## Josh W Comeau <Site url="www.joshwcomeau.com"/>

### Articles and Tutorials <Site url="www.joshwcomeau.com" size="sm" />

<Route namespace="joshwcomeau" :data='{"path":"/latest/:category?","categories":["programming"],"example":"/joshwcomeau/latest/css","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"parameters":{"category":{"description":"Category","options":[{"value":"css","label":"CSS"},{"value":"react","label":"React"},{"value":"animation","label":"Animation"},{"value":"javascript","label":"JavaScript"},{"value":"career","label":"Career"},{"value":"blog","label":"Blog"}]}},"radar":[{"source":["joshwcomeau.com/"],"target":"/latest"},{"source":["joshwcomeau.com/:category"],"target":"/latest/:category"}],"name":"Articles and Tutorials","maintainers":["Rjnishant530"],"location":"latest.ts","heat":4,"topFeeds":[]}' :test='{"code":0}' />

### Popular Content <Site url="www.joshwcomeau.com" size="sm" />

<Route namespace="joshwcomeau" :data='{"path":"/popular","categories":["programming"],"example":"/joshwcomeau/popular","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["joshwcomeau.com/"],"target":"/popular"}],"name":"Popular Content","maintainers":["Rjnishant530"],"location":"popular.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## 当当开放平台 <Site url="open.dangdang.com"/>

### 公告 <Site url="open.dangdang.com" size="sm" />

<Route namespace="dangdang" :data='{"path":"/notice/:type?","categories":["programming"],"example":"/dangdang/notice/1","parameters":{"type":"公告分类，默认为全部"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"公告","maintainers":["353325487"],"description":"| 类型     | type |\n| -------- | ---- |\n| 全部      | 0    |\n| 其他      | 1    |\n| 规则变更   | 2    |","location":"notice.ts","heat":3,"topFeeds":[]}' :test='{"code":0}' />

| 类型     | type |
| -------- | ---- |
| 全部      | 0    |
| 其他      | 1    |
| 规则变更   | 2    |

## Reactiflux <Site url="reactiflux.com"/>

### Transcripts <Site url="reactiflux.com/transcripts" size="sm" />

<Route namespace="reactiflux" :data='{"path":"/transcripts","name":"Transcripts","url":"reactiflux.com/transcripts","maintainers":["nczitzk"],"example":"/reactiflux/transcripts","categories":["programming"],"radar":[{"source":["www.reactiflux.com/transcripts"],"target":"/transcripts"}],"location":"transcripts.ts","heat":3,"topFeeds":[]}' :test='{"code":0}' />

## 前端早早聊 <Site url="www.zaozao.run"/>

### 文章 <Site url="www.zaozao.run" size="sm" />

<Route namespace="zaozao" :data='{"path":"/article/:type?","categories":["programming"],"example":"/zaozao/article/quality","parameters":{"type":"文章分类"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.zaozao.run/article/:type"],"target":"/article/:type"}],"name":"文章","maintainers":["shaomingbo"],"description":"| 精品推荐  | 技术干货 | 职场成长 | 社区动态  | 组件物料 | 行业动态 |\n| --------- | -------- | -------- | --------- | -------- | -------- |\n| recommend | quality  | growth   | community | material | industry |","location":"article.ts","heat":3,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2583)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

| 精品推荐  | 技术干货 | 职场成长 | 社区动态  | 组件物料 | 行业动态 |
| --------- | -------- | -------- | --------- | -------- | -------- |
| recommend | quality  | growth   | community | material | industry |

## Bitbucket <Site url="bitbucket.com"/>

### Commits <Site url="bitbucket.com" size="sm" />

<Route namespace="bitbucket" :data='{"path":"/commits/:workspace/:repo_slug","categories":["programming"],"example":"/bitbucket/commits/blaze-lib/blaze","parameters":{"workspace":"Workspace","repo_slug":"Repository"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["bitbucket.com/commits/:workspace/:repo_slug"]}],"name":"Commits","maintainers":["AuroraDysis"],"location":"commits.ts","heat":2,"topFeeds":[]}' :test='{"code":0}' />

### Tags <Site url="bitbucket.com" size="sm" />

<Route namespace="bitbucket" :data='{"path":"/tags/:workspace/:repo_slug","categories":["programming"],"example":"/bitbucket/tags/blaze-lib/blaze","parameters":{"workspace":"Workspace","repo_slug":"Repository"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Tags","maintainers":["AuroraDysis"],"location":"tags.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## Bitmovin <Site url="bitmovin.com"/>

### Blog <Site url="bitmovin.com/blog" size="sm" />

<Route namespace="bitmovin" :data='{"path":"/blog","categories":["programming"],"example":"/bitmovin/blog","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["bitmovin.com/blog","bitmovin.com/"]}],"name":"Blog","maintainers":["elxy"],"url":"bitmovin.com/blog","location":"blog.ts","heat":2,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 300)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## Gitpod <Site url="gitpod.io"/>

### Blog <Site url="gitpod.io/blog" size="sm" />

<Route namespace="gitpod" :data='{"path":"/blog","categories":["programming"],"example":"/gitpod/blog","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gitpod.io/blog","gitpod.io/"]}],"name":"Blog","maintainers":["TonyRL"],"url":"gitpod.io/blog","location":"blog.ts","heat":2,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 911)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

### Changelog <Site url="gitpod.io/changelog" size="sm" />

<Route namespace="gitpod" :data='{"path":"/changelog","categories":["programming"],"example":"/gitpod/changelog","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gitpod.io/changelog","gitpod.io/"]}],"name":"Changelog","maintainers":["TonyRL"],"url":"gitpod.io/changelog","location":"changelog.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## 极术社区 <Site url="www.aijishu"/>

### 频道、专栏、用户 <Site url="www.aijishu" size="sm" />

<Route namespace="aijishu" :data='{"path":"/:type/:name?","categories":["programming"],"example":"/aijishu/channel/ai","parameters":{"type":"文章类型，可以取值如下","name":"名字，取自URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"频道、专栏、用户","maintainers":[],"description":"| type    | 说明 |\n| ------- | ---- |\n| channel | 频道 |\n| blog    | 专栏 |\n| u       | 用户 |","location":"index.ts","heat":1,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 122)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

| type    | 说明 |
| ------- | ---- |
| channel | 频道 |
| blog    | 专栏 |
| u       | 用户 |

## Bugzilla <Site url="bugzilla.org"/>

Bugzilla instances hosted by organizations.

### bugs <Site url="bugzilla.org" size="sm" />

<Route namespace="bugzilla" :data='{"path":"/bug/:site/:bugId","name":"bugs","maintainers":["FranklinYu"],"example":"/bugzilla/bug/webkit/251528","parameters":{"site":"site identifier","bugId":"numeric identifier of the bug in the site"},"description":"Supported site identifiers: [`apache`](https://bz.apache.org/bugzilla), [`apache.ooo`](https://bz.apache.org/ooo), [`apache.SpamAssassin`](https://bz.apache.org/SpamAssassin), [`kernel`](https://bugzilla.kernel.org), [`mozilla`](https://bugzilla.mozilla.org), [`webkit`](https://bugs.webkit.org).","categories":["programming"],"zh":{"name":"bugs","description":"支持的站点标识符：[`apache`](https://bz.apache.org/bugzilla)、[`apache.ooo`](https://bz.apache.org/ooo)、[`apache.SpamAssassin`](https://bz.apache.org/SpamAssassin)、[`kernel`](https://bugzilla.kernel.org)、[`mozilla`](https://bugzilla.mozilla.org)、[`webkit`](https://bugs.webkit.org)。"},"location":"bug.ts","heat":1,"topFeeds":[]}' :test='{"code":0}' />

Supported site identifiers: [`apache`](https://bz.apache.org/bugzilla), [`apache.ooo`](https://bz.apache.org/ooo), [`apache.SpamAssassin`](https://bz.apache.org/SpamAssassin), [`kernel`](https://bugzilla.kernel.org), [`mozilla`](https://bugzilla.mozilla.org), [`webkit`](https://bugs.webkit.org).

## Cockroach Labs <Site url="cockroachlabs.com"/>

### Blogs <Site url="cockroachlabs.com" size="sm" />

<Route namespace="cockroachlabs" :data='{"name":"Blogs","maintainers":["CookiePieWw"],"categories":["programming"],"path":"/blog/:category?","example":"/cockroachlabs/blog/engineering","parameters":{"category":"Blog category, e.g., engineering. Subscribe all recent articles if empty."},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["cockroachlabs.com/blog/:category","cockroachlabs.com/blog"],"target":"/blog"}],"location":"blog.ts","heat":1,"topFeeds":[]}' :test='{"code":0}' />

## gihyo.jp <Site url="gihyo.jp"/>

### Series <Site url="gihyo.jp" size="sm" />

<Route namespace="gihyo" :data='{"path":"/list/group/:id","categories":["programming"],"example":"/gihyo/list/group/Ubuntu-Weekly-Recipe","parameters":{"id":"Series"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gihyo.jp/list/group/:id"]}],"name":"Series","maintainers":["masakichi"],"location":"group.ts","heat":1,"topFeeds":[]}' :test='{"code":0}' />

## AlternativeTo <Site url="www.alternativeto.net"/>

### Platform Software <Site url="www.alternativeto.net" size="sm" />

<Route namespace="alternativeto" :data='{"path":"/platform/:name/:routeParams?","categories":["programming"],"example":"/alternativeto/platform/firefox","parameters":{"name":"Platform name","routeParams":"Filters of software type"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.alternativeto.net/platform/:name"],"target":"/platform/:name"}],"name":"Platform Software","maintainers":["JimenezLi"],"description":"> routeParms can be copied from original site URL, example: `/alternativeto/platform/firefox/license=free`","location":"platform.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 146)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

> routeParms can be copied from original site URL, example: `/alternativeto/platform/firefox/license=free`

### Software Alternatives <Site url="www.alternativeto.net" size="sm" />

<Route namespace="alternativeto" :data='{"path":"/software/:name/:routeParams?","categories":["programming"],"example":"/alternativeto/software/cpp","parameters":{"name":"Software name","routeParams":"Filters of software type"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.alternativeto.net/software/:name"],"target":"/software/:name"}],"name":"Software Alternatives","maintainers":["JimenezLi"],"description":"> routeParms can be copied from original site URL, example: `/alternativeto/software/cpp/license=opensource&platform=windows`","location":"software.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 147)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

> routeParms can be copied from original site URL, example: `/alternativeto/software/cpp/license=opensource&platform=windows`

## BBC News Labs <Site url="bbcnewslabs.co.uk"/>

### News <Site url="bbcnewslabs.co.uk/" size="sm" />

<Route namespace="bbcnewslabs" :data='{"path":"/news","categories":["programming"],"example":"/bbcnewslabs/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["bbcnewslabs.co.uk/"]}],"name":"News","maintainers":["elxy"],"url":"bbcnewslabs.co.uk/","location":"news.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 242)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## dbaplus社群 <Site url="dbaplus.cn"/>

### 最新文章 <Site url="dbaplus.cn/" size="sm" />

<Route namespace="dbaplus" :data='{"path":"/","categories":["programming"],"example":"/dbaplus","radar":[{"source":["dbaplus.cn/"]}],"name":"最新文章","maintainers":["cnkmmk"],"url":"dbaplus.cn/","location":"rss.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## Devtrium <Site url="devtrium.com"/>

### Official Blogs <Site url="devtrium.com" size="sm" />

<Route namespace="devtrium" :data='{"path":"/","categories":["programming"],"example":"/devtrium","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["devtrium.com"]}],"name":"Official Blogs","maintainers":["Xy2002"],"url":"devtrium.com","location":"posts.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## 电子发烧友 <Site url="www.elecfans.com"/>

### 文章 <Site url="www.elecfans.com" size="sm" />

<Route namespace="elecfans" :data='{"path":"/article/:atype","categories":["programming"],"example":"/elecfans/article/special","parameters":{"atype":"需获取文章的类别"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"文章","radar":[{"source":["www.elecfans.com"]}],"maintainers":["tian051011"],"location":"article.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### 资料 <Site url="www.elecfans.com" size="sm" />

<Route namespace="elecfans" :data='{"path":"/soft/:atype","categories":["programming"],"example":"/elecfans/soft/special","parameters":{"atype":"需获取资料的类别"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"资料","radar":[{"source":["www.elecfans.com"]}],"maintainers":["tian051011"],"location":"soft.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## GitCode <Site url="gitcode.com"/>

### 仓库提交 <Site url="gitcode.com" size="sm" />

<Route namespace="gitcode" :data='{"path":"/commits/:owner/:repo/:branch?","categories":["programming"],"example":"/gitcode/commits/openharmony-sig/flutter_flutter","parameters":{"owner":"用户名/组织名","repo":"仓库名","branch":"分支名，可选，默认为主分支"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gitcode.com/:owner/:repo/commits","gitcode.com/:owner/:repo/commits/:branch"]}],"name":"仓库提交","maintainers":["JiZhi-Error"],"location":"repos/commits.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## Gitstar Ranking <Site url="gitstar-ranking.com"/>

### Ranking <Site url="gitstar-ranking.com" size="sm" />

<Route namespace="gitstar-ranking" :data='{"path":"/:category?","name":"Ranking","url":"gitstar-ranking.com","maintainers":["nczitzk"],"example":"/gitstar-ranking/repositories","parameters":{"category":{"description":"Category, Repositories by default","options":[{"label":"Users","value":"users"},{"label":"Organizations","value":"organizations"},{"label":"Repositories","value":"repositories"}]}},"description":":::tip\nTo subscribe to [Repositories](https://gitstar-ranking.com/repositories), where the source URL is `https://gitstar-ranking.com/repositories`, extract the certain parts from this URL to be used as parameters, resulting in the route as [`/gitstar-ranking/repositories`](https://rsshub.app/gitstar-ranking/repositories).\n:::\n\n| Category                                                   | ID                                                                |\n| ---------------------------------------------------------- | ----------------------------------------------------------------- |\n| [Users](https://gitstar-ranking.com/users)                 | [users](https://rsshub.app/gitstar-ranking/users)                 |\n| [Organizations](https://gitstar-ranking.com/organizations) | [organizations](https://rsshub.app/gitstar-ranking/organizations) |\n| [Repositories](https://gitstar-ranking.com/repositories)   | [repositories](https://rsshub.app/gitstar-ranking/repositories)   |\n","categories":["programming"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gitstar-ranking.com/:category"],"target":"/:category"},{"title":"Users","source":["gitstar-ranking.com/users"],"target":"/users"},{"title":"Organizations","source":["gitstar-ranking.com/organizations"],"target":"/organizations"},{"title":"Repositories","source":["gitstar-ranking.com/repositories"],"target":"/repositories"}],"view":0,"location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

:::tip
To subscribe to [Repositories](https://gitstar-ranking.com/repositories), where the source URL is `https://gitstar-ranking.com/repositories`, extract the certain parts from this URL to be used as parameters, resulting in the route as [`/gitstar-ranking/repositories`](https://rsshub.app/gitstar-ranking/repositories).
:::

| Category                                                   | ID                                                                |
| ---------------------------------------------------------- | ----------------------------------------------------------------- |
| [Users](https://gitstar-ranking.com/users)                 | [users](https://rsshub.app/gitstar-ranking/users)                 |
| [Organizations](https://gitstar-ranking.com/organizations) | [organizations](https://rsshub.app/gitstar-ranking/organizations) |
| [Repositories](https://gitstar-ranking.com/repositories)   | [repositories](https://rsshub.app/gitstar-ranking/repositories)   |


## GoCN <Site url="gocn.vip"/>

### 招聘 <Site url="gocn.vip/" size="sm" />

<Route namespace="gocn" :data='{"path":"/jobs","categories":["programming"],"example":"/gocn/jobs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gocn.vip/"]}],"name":"招聘","maintainers":["AtlanCI","CcccFz"],"url":"gocn.vip/","location":"jobs.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 919)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

### Unknown <Site url="gocn.vip/" size="sm" />

<Route namespace="gocn" :data='{"path":["/","/news"],"name":"Unknown","maintainers":["AtlanCI","CcccFz"],"url":"gocn.vip/","location":"news.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### 每日新闻 <Site url="gocn.vip/" size="sm" />

<Route namespace="gocn" :data='{"path":"/topics","categories":["programming"],"example":"/gocn/topics","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gocn.vip/"]}],"name":"每日新闻","maintainers":["AtlanCI","CcccFz"],"url":"gocn.vip/","location":"topics.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 920)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## Hacking8 <Site url="hacking8.com"/>

### 信息流 <Site url="hacking8.com" size="sm" />

<Route namespace="hacking8" :data='{"path":"/:category?","categories":["programming"],"example":"/hacking8","parameters":{"category":"分类，见下表，默认为最近更新"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["hacking8.com/index/:category","hacking8.com/"]}],"name":"信息流","maintainers":["nczitzk"],"description":"| 推荐  | 最近更新 | 漏洞 / PoC 监控 | PDF |\n| ----- | -------- | --------------- | --- |\n| likes | index    | vul-poc         | pdf |","location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1055)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

| 推荐  | 最近更新 | 漏洞 / PoC 监控 | PDF |
| ----- | -------- | --------------- | --- |
| likes | index    | vul-poc         | pdf |

### 搜索 <Site url="hacking8.com" size="sm" />

<Route namespace="hacking8" :data='{"path":"/search/:keyword?","categories":["programming"],"example":"/hacking8/search/rsshub","parameters":{"keyword":"关键字，默认为空"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["hacking8.com/index/:category","hacking8.com/"],"target":"/:category?"}],"name":"搜索","maintainers":["nczitzk"],"location":"search.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 1056)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />

## Issue Hunt <Site url="issuehunt.io"/>

### Project Funded <Site url="issuehunt.io" size="sm" />

<Route namespace="issuehunt" :data='{"path":"/funded/:username/:repo","categories":["programming"],"example":"/issuehunt/funded/DIYgod/RSSHub","parameters":{"username":"Github user/org","repo":"Repository name"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Project Funded","maintainers":["running-grass"],"location":"funded.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## JetBrains <Site url="jetbrains.com"/>

JetBrains is a software development company that creates professional development tools and IDEs.

### YouTrack Issue Comments <Site url="jetbrains.com" size="sm" />

<Route namespace="jetbrains" :data='{"path":"/youtrack/comments/:issueId","categories":["programming"],"example":"/jetbrains/youtrack/comments/IJPL-174543","parameters":{"issueId":"Issue ID (e.g., IJPL-174543)"},"radar":[{"source":["youtrack.jetbrains.com/issue/:issueId"],"target":"/youtrack/comments/:issueId"}],"name":"YouTrack Issue Comments","maintainers":["NekoAria"],"location":"comments.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## Rock the JVM <Site url="rockthejvm.com"/>

### Article <Site url="rockthejvm.com" size="sm" />

<Route namespace="rockthejvm" :data='{"path":"/articles","name":"Article","url":"rockthejvm.com","maintainers":["nczitzk"],"example":"/rockthejvm/articles","categories":["programming"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["rockthejvm.com/articles"],"target":"/articles"}],"view":0,"location":"articles.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## Sketis | Website of Dr. Makarius Wenzel <Site url="sketis.net"/>

### Isabelle Development Blogs <Site url="isabelle-dev.sketis.net" size="sm" />

<Route namespace="sketis" :data='{"path":"/isabelle-dev/blog/:blog","categories":["programming"],"example":"/sketis/isabelle-dev/blog/1","parameters":{"blog":"name of blog (1 for NEWS; 2 for Release)"},"description":"\n- Isabelle News: `https://isabelle-dev.sketis.net/phame/blog/view/1/`\n- Isabelle Release: `https://isabelle-dev.sketis.net/phame/blog/view/2/`\n","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["isabelle-dev.sketis.net/phame/","isabelle-dev.sketis.net/phame/blog/","isabelle-dev.sketis.net/phame/blog/view/:blog/","isabelle-dev.sketis.net/phame/post/","isabelle-dev.sketis.net/phame/post/view/:post_id/:post_title/"],"target":"/isabelle-dev/blog/1"},{"source":["isabelle-dev.sketis.net/phame/","isabelle-dev.sketis.net/phame/blog/","isabelle-dev.sketis.net/phame/blog/view/:blog/","isabelle-dev.sketis.net/phame/post/","isabelle-dev.sketis.net/phame/post/view/:post_id/:post_title/"],"target":"/isabelle-dev/blog/2"}],"name":"Isabelle Development Blogs","url":"isabelle-dev.sketis.net","maintainers":["Ritsuka314"],"location":"isabelle-dev/blog/index.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2078)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/worker.js:127:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.1.1/node_modules/tinypool/dist/entry/process.js:39:18)"}' />


- Isabelle News: `https://isabelle-dev.sketis.net/phame/blog/view/1/`
- Isabelle Release: `https://isabelle-dev.sketis.net/phame/blog/view/2/`


## SYCL <Site url="sycl.tech"/>

### Feeds <Site url="sycl.tech" size="sm" />

<Route namespace="sycl" :data='{"path":"/:feed?","categories":["programming"],"example":"/sycl/news","parameters":{"feed":"Feed source, defaults to news, references https://feeds.sycl.tech/"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Feeds","maintainers":["mocusez"],"description":"|  Events  | News |    Research Paper     |  Videos  |\n| :----: | :--: | :-------------: | :----: |\n| events | news | research_papers | videos |","location":"feeds.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

|  Events  | News |    Research Paper     |  Videos  |
| :----: | :--: | :-------------: | :----: |
| events | news | research_papers | videos |

## TiDB 社区 <Site url="tidb.net"/>

### 专栏分类 <Site url="tidb.net" size="sm" />

<Route namespace="tidb" :data='{"path":"/blog/c/:category?","name":"专栏分类","url":"tidb.net","maintainers":["nczitzk"],"example":"/tidb/blog/c/latest","parameters":{"category":{"description":"分类，默认为 `latest`，即全部文章，可在对应分类页 URL 中找到","options":[{"label":"全部文章","value":"latest"},{"label":"管理与运维","value":"management-and-operation"},{"label":"实践案例","value":"practical-case"},{"label":"架构选型","value":"architecture-selection"},{"label":"原理解读","value":"principle-interpretation"},{"label":"应用开发","value":"application-development"},{"label":"社区动态","value":"community-feeds"}]}},"description":":::tip\n订阅 [管理与运维](https://tidb.net/blog/c/management-and-operation)，其源网址为 `https://tidb.net/blog/c/management-and-operation`，请参考该 URL 指定部分构成参数，此时路由为 [`/tidb/blog/c/management-and-operation`](https://rsshub.app/tidb/blog/c/management-and-operation)。\n:::\n\n| 分类                                                           | ID                                                                                  |\n| -------------------------------------------------------------- | ----------------------------------------------------------------------------------- |\n| [全部文章](https://tidb.net/blog)                              | [latest](https://rsshub.app/tidb/blog)                                              |\n| [管理与运维](https://tidb.net/blog/c/management-and-operation) | [management-and-operation](https://rsshub.app/tidb/blog/c/management-and-operation) |\n| [实践案例](https://tidb.net/blog/c/practical-case)             | [practical-case](https://rsshub.app/tidb/blog/c/practical-case)                     |\n| [架构选型](https://tidb.net/blog/c/architecture-selection)     | [architecture-selection](https://rsshub.app/tidb/blog/c/architecture-selection)     |\n| [原理解读](https://tidb.net/blog/c/principle-interpretation)   | [principle-interpretation](https://rsshub.app/tidb/blog/c/principle-interpretation) |\n| [应用开发](https://tidb.net/blog/c/application-development)    | [application-development](https://rsshub.app/tidb/blog/c/application-development)   |\n| [社区动态](https://tidb.net/blog/c/community-feeds)            | [community-feeds](https://rsshub.app/tidb/blog/c/community-feeds)                   |\n\n","categories":["programming"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["tidb.net/blog","tidb.net/blog/c/:category"]},{"title":"全部文章","source":["tidb.net/blog"],"target":"/blog/c/latest"},{"title":"管理与运维","source":["tidb.net/blog/c/management-and-operation"],"target":"/blog/c/management-and-operation"},{"title":"实践案例","source":["tidb.net/blog/c/practical-case"],"target":"/blog/c/practical-case"},{"title":"架构选型","source":["tidb.net/blog/c/architecture-selection"],"target":"/blog/c/architecture-selection"},{"title":"原理解读","source":["tidb.net/blog/c/principle-interpretation"],"target":"/blog/c/principle-interpretation"},{"title":"应用开发","source":["tidb.net/blog/c/application-development"],"target":"/blog/c/application-development"},{"title":"社区动态","source":["tidb.net/blog/c/community-feeds"],"target":"/blog/c/community-feeds"}],"view":0,"location":"blog.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

:::tip
订阅 [管理与运维](https://tidb.net/blog/c/management-and-operation)，其源网址为 `https://tidb.net/blog/c/management-and-operation`，请参考该 URL 指定部分构成参数，此时路由为 [`/tidb/blog/c/management-and-operation`](https://rsshub.app/tidb/blog/c/management-and-operation)。
:::

| 分类                                                           | ID                                                                                  |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [全部文章](https://tidb.net/blog)                              | [latest](https://rsshub.app/tidb/blog)                                              |
| [管理与运维](https://tidb.net/blog/c/management-and-operation) | [management-and-operation](https://rsshub.app/tidb/blog/c/management-and-operation) |
| [实践案例](https://tidb.net/blog/c/practical-case)             | [practical-case](https://rsshub.app/tidb/blog/c/practical-case)                     |
| [架构选型](https://tidb.net/blog/c/architecture-selection)     | [architecture-selection](https://rsshub.app/tidb/blog/c/architecture-selection)     |
| [原理解读](https://tidb.net/blog/c/principle-interpretation)   | [principle-interpretation](https://rsshub.app/tidb/blog/c/principle-interpretation) |
| [应用开发](https://tidb.net/blog/c/application-development)    | [application-development](https://rsshub.app/tidb/blog/c/application-development)   |
| [社区动态](https://tidb.net/blog/c/community-feeds)            | [community-feeds](https://rsshub.app/tidb/blog/c/community-feeds)                   |



## Transformer Circuits <Site url="transformer-circuits.pub"/>

### Articles <Site url="transformer-circuits.pub" size="sm" />

<Route namespace="transformer-circuits" :data='{"path":"/","categories":["programming"],"example":"/transformer-circuits","parameters":{},"radar":[{"source":["transformer-circuits.pub/"],"target":"/"}],"name":"Articles","maintainers":["shinmohuang"],"location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected NaN to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:533:5\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1056:11)\n    at async Promise.all (index 2293)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1191:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1205:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1262:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.1.9/node_modules/@vitest/runner/dist/index.js:1271:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:90:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:112:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/chunks/base.BZZh4cSm.js:29:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.1.9_@types+node@24.3.0_jsdom@26.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10__msw@2.4.3_typescript@5.9.2_/node_modules/vitest/dist/workers/forks.js:27:7)"}' />

