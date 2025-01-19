# 🎮 游戏

## 3DMGame <Site url="3dmgame.com"/>

### 新闻中心 <Site url="3dmgame.com" size="sm" />

<Route namespace="3dmgame" :data='{"path":"/news/:category?","categories":["game"],"example":"/3dmgame/news","parameters":{"category":"分类名或 ID，见下表，默认为新闻推荐，ID 可从分类 URL 中找到，如 Steam 为 `22221`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["3dmgame.com/news/:category?","3dmgame.com/news"]}],"name":"新闻中心","maintainers":["zhboner","lyqluis"],"description":"| 新闻推荐 | 游戏新闻 | 动漫影视 | 智能数码 | 时事焦点    |\n  | -------- | -------- | -------- | -------- | ----------- |\n  |          | game     | acg      | next     | news_36_1 |","location":"news-center.ts"}' :test='undefined' />

| 新闻推荐 | 游戏新闻 | 动漫影视 | 智能数码 | 时事焦点    |
  | -------- | -------- | -------- | -------- | ----------- |
  |          | game     | acg      | next     | news_36_1 |

### 游戏资讯 <Site url="3dmgame.com" size="sm" />

<Route namespace="3dmgame" :data='{"path":"/games/:name/:type?","radar":[{"source":["3dmgame.com/games/:name/:type"]}],"name":"游戏资讯","categories":["game"],"maintainers":["sinchang","jacky2001114","HenryQW","lyqluis"],"location":"game.ts"}' :test='undefined' />

## 3k-Switch游戏库 <Site url="www.3kns.com"/>

### 3k-Switch游戏库 <Site url="www.3kns.com/" size="sm" />

<Route namespace="3kns" :data='{"path":"/:filters?/:order?","categories":["game"],"example":"/3kns/category=all&lang=all","parameters":{"filters":"过滤器，可用参数见下表","order":"排序，按高分排序:desc;按低分排序:asc"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"3k-Switch游戏库","maintainers":["xzzpig"],"url":"www.3kns.com/","description":"游戏类型(category)\n\n  | 不限 | 角色扮演 | 动作冒险 | 策略游戏 | 模拟经营 | 即时战略 | 格斗类 | 射击游戏 | 休闲益智 | 体育运动 | 街机格斗 | 无双类 | 其他游戏 | 赛车竞速 |\n  | ---- | -------- | -------- | -------- | -------- | -------- | ------ | -------- | -------- | -------- | -------- | ------ | -------- | -------- |\n  | all  | 1        | 2        | 3        | 4        | 5        | 6      | 7        | 8        | 9        | 10       | 11     | 12       | 13       |\n\n  游戏语言(language)\n\n  | 不限 | 中文 | 英语 | 日语 | 其他 | 中文汉化 | 德语 |\n  | ---- | ---- | ---- | ---- | ---- | -------- | ---- |\n  | all  | 1    | 2    | 3    | 4    | 5        | 6    |\n\n  游戏标签(tag)\n\n  | 不限 | 热门 | 多人聚会 | 僵尸 | 体感 | 大作 | 音乐 | 三国 | RPG | 格斗 | 闯关 | 横版 | 科幻 | 棋牌 | 运输 | 无双 | 卡通动漫 | 日系 | 养成 | 恐怖 | 运动 | 乙女 | 街机 | 飞行模拟 | 解谜 | 海战 | 战争 | 跑酷 | 即时策略 | 射击 | 经营 | 益智 | 沙盒 | 模拟 | 冒险 | 竞速 | 休闲 | 动作 | 生存 | 独立 | 拼图 | 魔改 xci | 卡牌 | 塔防 |\n  | ---- | ---- | -------- | ---- | ---- | ---- | ---- | ---- | --- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | -------- | ---- | ---- | ---- | ---- | ---- | ---- | -------- | ---- | ---- | ---- | ---- | -------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | -------- | ---- | ---- |\n  | all  | 1    | 2        | 3    | 4    | 5    | 6    | 7    | 8   | 9    | 10   | 11   | 12   | 13   | 14   | 15   | 16       | 17   | 18   | 19   | 20   | 21   | 22   | 23       | 24   | 25   | 26   | 27   | 28       | 29   | 30   | 31   | 32   | 33   | 34   | 35   | 36   | 37   | 38   | 39   | 40   | 41       | 42   | 43   |\n\n  发售时间(pubDate)\n\n  | 不限 | 2017 年 | 2018 年 | 2019 年 | 2020 年 | 2021 年 | 2022 年 | 2023 年 | 2024 年 |\n  | ---- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |\n  | all  | 1       | 2       | 3       | 4       | 5       | 6       | 7       | 8       |\n\n  游戏集合(collection)\n\n  | 不限 | 舞力全开 | 马里奥 | 生化危机 | 炼金工房 | 最终幻想 | 塞尔达 | 宝可梦 | 勇者斗恶龙 | 模拟器 | 秋之回忆 | 第一方 | 体感健身 | 开放世界 | 儿童乐园 |\n  | ---- | -------- | ------ | -------- | -------- | -------- | ------ | ------ | ---------- | ------ | -------- | ------ | -------- | -------- | -------- |\n  | all  | 1        | 2      | 3        | 4        | 5        | 6      | 7      | 8          | 9      | 10       | 11     | 12       | 13       | 14       |","location":"index.ts"}' :test='undefined' />

游戏类型(category)

  | 不限 | 角色扮演 | 动作冒险 | 策略游戏 | 模拟经营 | 即时战略 | 格斗类 | 射击游戏 | 休闲益智 | 体育运动 | 街机格斗 | 无双类 | 其他游戏 | 赛车竞速 |
  | ---- | -------- | -------- | -------- | -------- | -------- | ------ | -------- | -------- | -------- | -------- | ------ | -------- | -------- |
  | all  | 1        | 2        | 3        | 4        | 5        | 6      | 7        | 8        | 9        | 10       | 11     | 12       | 13       |

  游戏语言(language)

  | 不限 | 中文 | 英语 | 日语 | 其他 | 中文汉化 | 德语 |
  | ---- | ---- | ---- | ---- | ---- | -------- | ---- |
  | all  | 1    | 2    | 3    | 4    | 5        | 6    |

  游戏标签(tag)

  | 不限 | 热门 | 多人聚会 | 僵尸 | 体感 | 大作 | 音乐 | 三国 | RPG | 格斗 | 闯关 | 横版 | 科幻 | 棋牌 | 运输 | 无双 | 卡通动漫 | 日系 | 养成 | 恐怖 | 运动 | 乙女 | 街机 | 飞行模拟 | 解谜 | 海战 | 战争 | 跑酷 | 即时策略 | 射击 | 经营 | 益智 | 沙盒 | 模拟 | 冒险 | 竞速 | 休闲 | 动作 | 生存 | 独立 | 拼图 | 魔改 xci | 卡牌 | 塔防 |
  | ---- | ---- | -------- | ---- | ---- | ---- | ---- | ---- | --- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | -------- | ---- | ---- | ---- | ---- | ---- | ---- | -------- | ---- | ---- | ---- | ---- | -------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | -------- | ---- | ---- |
  | all  | 1    | 2        | 3    | 4    | 5    | 6    | 7    | 8   | 9    | 10   | 11   | 12   | 13   | 14   | 15   | 16       | 17   | 18   | 19   | 20   | 21   | 22   | 23       | 24   | 25   | 26   | 27   | 28       | 29   | 30   | 31   | 32   | 33   | 34   | 35   | 36   | 37   | 38   | 39   | 40   | 41       | 42   | 43   |

  发售时间(pubDate)

  | 不限 | 2017 年 | 2018 年 | 2019 年 | 2020 年 | 2021 年 | 2022 年 | 2023 年 | 2024 年 |
  | ---- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
  | all  | 1       | 2       | 3       | 4       | 5       | 6       | 7       | 8       |

  游戏集合(collection)

  | 不限 | 舞力全开 | 马里奥 | 生化危机 | 炼金工房 | 最终幻想 | 塞尔达 | 宝可梦 | 勇者斗恶龙 | 模拟器 | 秋之回忆 | 第一方 | 体感健身 | 开放世界 | 儿童乐园 |
  | ---- | -------- | ------ | -------- | -------- | -------- | ------ | ------ | ---------- | ------ | -------- | ------ | -------- | -------- | -------- |
  | all  | 1        | 2      | 3        | 4        | 5        | 6      | 7      | 8          | 9      | 10       | 11     | 12       | 13       | 14       |

## 4Gamers <Site url="www.4gamers.com.tw"/>

### Unknown <Site url="www.4gamers.com.tw/news" size="sm" />

<Route namespace="4gamers" :data='{"path":["/","/category/:category"],"radar":[{"source":["www.4gamers.com.tw/news","www.4gamers.com.tw/"],"target":""}],"name":"Unknown","maintainers":["TonyRL"],"url":"www.4gamers.com.tw/news","location":"category.ts"}' :test='undefined' />

### 标签 <Site url="www.4gamers.com.tw/news" size="sm" />

<Route namespace="4gamers" :data='{"path":"/tag/:tag","categories":["game"],"example":"/4gamers/tag/限時免費","parameters":{"tag":"标签名，可在标签 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.4gamers.com.tw/news/tag/:tag"]}],"name":"标签","maintainers":["hoilc"],"url":"www.4gamers.com.tw/news","location":"tag.ts"}' :test='undefined' />

### 主題 <Site url="www.4gamers.com.tw/news" size="sm" />

<Route namespace="4gamers" :data='{"path":"/topic/:topic","categories":["game"],"example":"/4gamers/topic/gentlemen-topic","parameters":{"topic":"主题，可在首页上方页面内找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.4gamers.com.tw/news/option-cfg/:topic"]}],"name":"主題","maintainers":["bestpika"],"url":"www.4gamers.com.tw/news","location":"topic.ts"}' :test='undefined' />

## 5EPLAY <Site url="csgo.5eplay.com"/>

### 新闻列表 <Site url="csgo.5eplay.com/" size="sm" />

<Route namespace="5eplay" :data='{"path":"/article","categories":["game"],"example":"/5eplay/article","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["csgo.5eplay.com/","csgo.5eplay.com/article"]}],"name":"新闻列表","maintainers":["Dlouxgit"],"url":"csgo.5eplay.com/","location":"index.ts"}' :test='undefined' />

## A9VG 电玩部落 <Site url="a9vg.com"/>

### 新闻 <Site url="a9vg.com" size="sm" />

<Route namespace="a9vg" :data='{"path":"/:category{.+}?","name":"新闻","url":"a9vg.com","maintainers":["monnerHenster","nczitzk"],"example":"/a9vg/news","parameters":{"category":"分类，默认为 ，可在对应分类页 URL 中找到, Category, by default"},"description":"::: tip\n  若订阅 [PS4](http://www.a9vg.com/list/news/PS4)，网址为 `http://www.a9vg.com/list/news/PS4`。截取 `http://www.a9vg.com/list` 到末尾的部分 `news/PS4` 作为参数填入，此时路由为 [`/a9vg/news/PS4`](https://rsshub.app/a9vg/news/PS4)。\n:::\n\n  | 分类                                               | ID                                                     |\n  | -------------------------------------------------- | ------------------------------------------------------ |\n  | [All](https://www.a9vg.com/list/news/All)          | [news/All](https://rsshub.app/a9vg/news/All)           |\n  | [PS4](https://www.a9vg.com/list/news/PS4)          | [news/PS4](https://rsshub.app/a9vg/news/PS4)           |\n  | [PS5](https://www.a9vg.com/list/news/PS5)          | [news/PS5](https://rsshub.app/a9vg/news/PS5)           |\n  | [Switch](https://www.a9vg.com/list/news/Switch)    | [news/Switch](https://rsshub.app/a9vg/news/Switch)     |\n  | [Xbox One](https://www.a9vg.com/list/news/XboxOne) | [news/XboxOne](https://rsshub.app/a9vg/news/XboxOne)   |\n  | [XSX](https://www.a9vg.com/list/news/XSX)          | [news/XSX](https://rsshub.app/a9vg/news/XSX)           |\n  | [PC](https://www.a9vg.com/list/news/PC)            | [news/PC](https://rsshub.app/a9vg/news/PC)             |\n  | [业界](https://www.a9vg.com/list/news/Industry)    | [news/Industry](https://rsshub.app/a9vg/news/Industry) |\n  | [厂商](https://www.a9vg.com/list/news/Factory)     | [news/Factory](https://rsshub.app/a9vg/news/Factory)   |\n  ","categories":["game"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.a9vg.com/list/:category"]},{"title":"All","source":["www.a9vg.com/list/news/All"],"target":"/news/All"},{"title":"PS4","source":["www.a9vg.com/list/news/PS4"],"target":"/news/PS4"},{"title":"PS5","source":["www.a9vg.com/list/news/PS5"],"target":"/news/PS5"},{"title":"Switch","source":["www.a9vg.com/list/news/Switch"],"target":"/news/Switch"},{"title":"Xbox One","source":["www.a9vg.com/list/news/XboxOne"],"target":"/news/XboxOne"},{"title":"XSX","source":["www.a9vg.com/list/news/XSX"],"target":"/news/XSX"},{"title":"PC","source":["www.a9vg.com/list/news/PC"],"target":"/news/PC"},{"title":"业界","source":["www.a9vg.com/list/news/Industry"],"target":"/news/Industry"},{"title":"厂商","source":["www.a9vg.com/list/news/Factory"],"target":"/news/Factory"}],"location":"index.ts"}' :test='{"code":0}' />

::: tip
  若订阅 [PS4](http://www.a9vg.com/list/news/PS4)，网址为 `http://www.a9vg.com/list/news/PS4`。截取 `http://www.a9vg.com/list` 到末尾的部分 `news/PS4` 作为参数填入，此时路由为 [`/a9vg/news/PS4`](https://rsshub.app/a9vg/news/PS4)。
:::

  | 分类                                               | ID                                                     |
  | -------------------------------------------------- | ------------------------------------------------------ |
  | [All](https://www.a9vg.com/list/news/All)          | [news/All](https://rsshub.app/a9vg/news/All)           |
  | [PS4](https://www.a9vg.com/list/news/PS4)          | [news/PS4](https://rsshub.app/a9vg/news/PS4)           |
  | [PS5](https://www.a9vg.com/list/news/PS5)          | [news/PS5](https://rsshub.app/a9vg/news/PS5)           |
  | [Switch](https://www.a9vg.com/list/news/Switch)    | [news/Switch](https://rsshub.app/a9vg/news/Switch)     |
  | [Xbox One](https://www.a9vg.com/list/news/XboxOne) | [news/XboxOne](https://rsshub.app/a9vg/news/XboxOne)   |
  | [XSX](https://www.a9vg.com/list/news/XSX)          | [news/XSX](https://rsshub.app/a9vg/news/XSX)           |
  | [PC](https://www.a9vg.com/list/news/PC)            | [news/PC](https://rsshub.app/a9vg/news/PC)             |
  | [业界](https://www.a9vg.com/list/news/Industry)    | [news/Industry](https://rsshub.app/a9vg/news/Industry) |
  | [厂商](https://www.a9vg.com/list/news/Factory)     | [news/Factory](https://rsshub.app/a9vg/news/Factory)   |
  

## ALICESOFT <Site url="www.alicesoft.com"/>

### ニュース <Site url="www.alicesoft.com/information" size="sm" />

<Route namespace="alicesoft" :data='{"url":"www.alicesoft.com/information","path":"/information/:category?/:game?","categories":["game"],"example":"/alicesoft/information/game/cat377","parameters":{"category":"Category in the URL, which can be accessed under カテゴリ一覧 on the website.","game":"Game-specific subcategory in the URL, which can be accessed under カテゴリ一覧 on the website. In this case, the category value should be `game`."},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.alicesoft.com/information","www.alicesoft.com/information/:category","www.alicesoft.com/information/:category/:game"],"target":"/information/:category/:game"}],"name":"ニュース","maintainers":["keocheung"],"location":"infomation.ts"}' :test='{"code":1,"message":"AssertionError: expected [ …(4) ] to not include &#39;https://www.alicesoft.com/escalationh…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:1143:17)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:920:17)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@5.1.2/node_modules/chai/chai.js:1610:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 45)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)"}' />

## Blizzard <Site url="news.blizzard.com"/>

### News <Site url="news.blizzard.com" size="sm" />

<Route namespace="blizzard" :data='{"path":"/news/:language?/:category?","categories":["game"],"example":"/blizzard/news","parameters":{"language":"Language code, see below, en-US by default","category":"Category, see below, All News by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"News","maintainers":["nczitzk"],"description":"Categories\n\n  | Category               | Slug                |\n  | ---------------------- | ------------------- |\n  | All News               |                     |\n  | Diablo II: Resurrected | diablo2             |\n  | Diablo III             | diablo3             |\n  | Diablo IV              | diablo4             |\n  | Diablo Immortal        | diablo-immortal     |\n  | Hearthstone            | hearthstone         |\n  | Heroes of the Storm    | heroes-of-the-storm |\n  | Overwatch 2            | overwatch           |\n  | StarCraft: Remastered  | starcraft           |\n  | StarCraft II           | starcraft2          |\n  | World of Warcraft      | world-of-warcraft   |\n  | Warcraft 3: Reforged   | warcraft3           |\n  | Warcraft Rumble        | warcraft-rumble     |\n  | Battle.net             | battlenet           |\n  | BlizzCon               | blizzcon            |\n  | Inside Blizzard        | blizzard            |\n\n  Language codes\n\n  | Language           | Code  |\n  | ------------------ | ----- |\n  | Deutsch            | de-de |\n  | English (US)       | en-us |\n  | English (EU)       | en-gb |\n  | Español (EU)       | es-es |\n  | Español (Latino)   | es-mx |\n  | Français           | fr-fr |\n  | Italiano           | it-it |\n  | Português (Brasil) | pt-br |\n  | Polski             | pl-pl |\n  | Русский            | ru-ru |\n  | 한국어             | ko-kr |\n  | ภาษาไทย            | th-th |\n  | 日本語             | ja-jp |\n  | 繁體中文           | zh-tw |","location":"news.ts"}' :test='{"code":0}' />

Categories

  | Category               | Slug                |
  | ---------------------- | ------------------- |
  | All News               |                     |
  | Diablo II: Resurrected | diablo2             |
  | Diablo III             | diablo3             |
  | Diablo IV              | diablo4             |
  | Diablo Immortal        | diablo-immortal     |
  | Hearthstone            | hearthstone         |
  | Heroes of the Storm    | heroes-of-the-storm |
  | Overwatch 2            | overwatch           |
  | StarCraft: Remastered  | starcraft           |
  | StarCraft II           | starcraft2          |
  | World of Warcraft      | world-of-warcraft   |
  | Warcraft 3: Reforged   | warcraft3           |
  | Warcraft Rumble        | warcraft-rumble     |
  | Battle.net             | battlenet           |
  | BlizzCon               | blizzcon            |
  | Inside Blizzard        | blizzard            |

  Language codes

  | Language           | Code  |
  | ------------------ | ----- |
  | Deutsch            | de-de |
  | English (US)       | en-us |
  | English (EU)       | en-gb |
  | Español (EU)       | es-es |
  | Español (Latino)   | es-mx |
  | Français           | fr-fr |
  | Italiano           | it-it |
  | Português (Brasil) | pt-br |
  | Polski             | pl-pl |
  | Русский            | ru-ru |
  | 한국어             | ko-kr |
  | ภาษาไทย            | th-th |
  | 日本語             | ja-jp |
  | 繁體中文           | zh-tw |

### 暴雪游戏国服新闻 <Site url="news.blizzard.com" size="sm" />

<Route namespace="blizzard" :data='{"path":"/news-cn/:category?","categories":["game"],"example":"/blizzard/news-cn/ow","parameters":{"category":"游戏类别, 默认为 ow"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ow.blizzard.cn","wow.blizzard.cn","hs.blizzard.cn"],"target":"/news-cn/"}],"name":"暴雪游戏国服新闻","maintainers":["zhangpeng2k"],"description":"\n| 守望先锋 | 炉石传说 | 魔兽世界 |\n|----------|----------|---------|\n| ow       | hs       | wow     |\n","location":"news-cn.ts"}' :test='{"code":0}' />


| 守望先锋 | 炉石传说 | 魔兽世界 |
|----------|----------|---------|
| ow       | hs       | wow     |


## Blue Archive <Site url="bluearchive.jp"/>

### News <Site url="bluearchive.jp" size="sm" />

<Route namespace="bluearchive" :data='{"path":"/news/:server/:type?","name":"News","categories":["game"],"maintainers":["equt"],"example":"/bluearchive/news/jp","parameters":{"server":"game server (ISO 3166 two-letter country code, case-insensitive), only `JP` is supported for now","type":"news type, checkout the table below for details"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"description":"| 全て | イベント | お知らせ | メンテナンス |\n| :--: | :--: | :--: | :--: |\n| 0 | 1 | 2 | 3 |","location":"news.ts"}' :test='{"code":0}' />

| 全て | イベント | お知らせ | メンテナンス |
| :--: | :--: | :--: | :--: |
| 0 | 1 | 2 | 3 |

## Counter Strike <Site url="counter-strike.net"/>

### News <Site url="www.counter-strike.net" size="sm" />

<Route namespace="counter-strike" :data='{"path":"/news/:category?/:language?","name":"News","url":"www.counter-strike.net","maintainers":["nczitzk"],"example":"/counter-strike/news","parameters":{"category":"Category, `updates` or `all`, `all` by default","language":"Language, english by default, see below for more languages"},"description":"::: tip\n  If you subscribe to [Updates in English](https://www.counter-strike.net/news/updates?l=english)，where the URL is `https://www.counter-strike.net/news/updates?l=english`, extract the `l`, which is `english`, and use it as the parameter to fill in. Therefore, the route will be [`/counter-strike/news/updates/english`](https://rsshub.app/counter-strike/news/updates/english).\n:::\n\n  <details>\n    <summary>More languages</summary>\n\n| 语言代码                                          | 语言名称   |\n| ------------------------------------------------- | ---------- |\n| English                                           | english    |\n| Español - España (Spanish - Spain)                | spanish    |\n| Français (French)                                 | french     |\n| Italiano (Italian)                                | italian    |\n| Deutsch (German)                                  | german     |\n| Ελληνικά (Greek)                                  | greek      |\n| 한국어 (Korean)                                   | koreana    |\n| 简体中文 (Simplified Chinese)                     | schinese   |\n| 繁體中文 (Traditional Chinese)                    | tchinese   |\n| Русский (Russian)                                 | russian    |\n| ไทย (Thai)                                        | thai       |\n| 日本語 (Japanese)                                 | japanese   |\n| Português (Portuguese)                            | portuguese |\n| Português - Brasil (Portuguese - Brazil)          | brazilian  |\n| Polski (Polish)                                   | polish     |\n| Dansk (Danish)                                    | danish     |\n| Nederlands (Dutch)                                | dutch      |\n| Suomi (Finnish)                                   | finnish    |\n| Norsk (Norwegian)                                 | norwegian  |\n| Svenska (Swedish)                                 | swedish    |\n| Čeština (Czech)                                   | czech      |\n| Magyar (Hungarian)                                | hungarian  |\n| Română (Romanian)                                 | romanian   |\n| Български (Bulgarian)                             | bulgarian  |\n| Türkçe (Turkish)                                  | turkish    |\n| Українська (Ukrainian)                            | ukrainian  |\n| Tiếng Việt (Vietnamese)                           | vietnamese |\n| Español - Latinoamérica (Spanish - Latin America) | latam      |\n\n  </details>\n    ","categories":["game"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.counter-strike.net/news/:category"]}],"location":"news.ts"}' :test='undefined' />

::: tip
  If you subscribe to [Updates in English](https://www.counter-strike.net/news/updates?l=english)，where the URL is `https://www.counter-strike.net/news/updates?l=english`, extract the `l`, which is `english`, and use it as the parameter to fill in. Therefore, the route will be [`/counter-strike/news/updates/english`](https://rsshub.app/counter-strike/news/updates/english).
:::

  <details>
    <summary>More languages</summary>

| 语言代码                                          | 语言名称   |
| ------------------------------------------------- | ---------- |
| English                                           | english    |
| Español - España (Spanish - Spain)                | spanish    |
| Français (French)                                 | french     |
| Italiano (Italian)                                | italian    |
| Deutsch (German)                                  | german     |
| Ελληνικά (Greek)                                  | greek      |
| 한국어 (Korean)                                   | koreana    |
| 简体中文 (Simplified Chinese)                     | schinese   |
| 繁體中文 (Traditional Chinese)                    | tchinese   |
| Русский (Russian)                                 | russian    |
| ไทย (Thai)                                        | thai       |
| 日本語 (Japanese)                                 | japanese   |
| Português (Portuguese)                            | portuguese |
| Português - Brasil (Portuguese - Brazil)          | brazilian  |
| Polski (Polish)                                   | polish     |
| Dansk (Danish)                                    | danish     |
| Nederlands (Dutch)                                | dutch      |
| Suomi (Finnish)                                   | finnish    |
| Norsk (Norwegian)                                 | norwegian  |
| Svenska (Swedish)                                 | swedish    |
| Čeština (Czech)                                   | czech      |
| Magyar (Hungarian)                                | hungarian  |
| Română (Romanian)                                 | romanian   |
| Български (Bulgarian)                             | bulgarian  |
| Türkçe (Turkish)                                  | turkish    |
| Українська (Ukrainian)                            | ukrainian  |
| Tiếng Việt (Vietnamese)                           | vietnamese |
| Español - Latinoamérica (Spanish - Latin America) | latam      |

  </details>
    

## DeadbyDaylight <Site url="deadbydaylight.com"/>


      DeadbyDaylight Official
    

### Latest News <Site url="deadbydaylight.com" size="sm" />

<Route namespace="deadbydaylight" :data='{"path":"/blog","categories":["game"],"example":"/deadbydaylight/blog","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["deadbydaylight.com/news"],"target":"/news"}],"name":"Latest News","maintainers":["NeverBehave"],"location":"index.ts"}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:66:18)\n    at listOnTimeout (node:internal/timers:594:17)\n    at processTimers (node:internal/timers:529:7)"}' />

## DevolverDigital <Site url="devolverdigital.com"/>

### Official Blogs <Site url="devolverdigital.com/blog" size="sm" />

<Route namespace="devolverdigital" :data='{"path":"/blog","categories":["game"],"example":"/devolverdigital/blog","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["devolverdigital.com/blog"]}],"name":"Official Blogs","maintainers":["XXY233"],"url":"devolverdigital.com/blog","location":"blog.ts"}' :test='{"code":0}' />

## Dorohedoro <Site url="dorohedoro.net"/>

### News <Site url="dorohedoro.net/news" size="sm" />

<Route namespace="dorohedoro" :data='{"path":"/news","categories":["game"],"example":"/dorohedoro/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["dorohedoro.net/news","dorohedoro.net/"]}],"name":"News","maintainers":["nczitzk"],"url":"dorohedoro.net/news","location":"news.ts"}' :test='{"code":1,"message":"AssertionError: expected [ …(15) ] to not include &#39;https://dorohedoro.net/&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:1143:17)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:920:17)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@5.1.2/node_modules/chai/chai.js:1610:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 481)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)"}' />

## Epic Games Store <Site url="store.epicgames.com"/>

### Free games <Site url="store.epicgames.com" size="sm" />

<Route namespace="epicgames" :data='{"path":"/freegames/:locale?/:country?","categories":["game","popular"],"view":5,"example":"/epicgames/freegames/en-US/US","parameters":{"locale":{"description":"Locale","default":"en-US"},"country":{"description":"Country","default":"US"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["store.epicgames.com/:locale/free-games"],"target":"/freegames/:locale"}],"name":"Free games","maintainers":["DIYgod","NeverBehave","Zyx-A","junfengP","nczitzk","KotaHv"],"location":"index.ts"}' :test='{"code":0}' />

## FINAL FANTASY XIV <Site url="eu.finalfantasyxiv.com"/>

### FINAL FANTASY XIV (The Lodestone) <Site url="eu.finalfantasyxiv.com" size="sm" />

<Route namespace="ff14" :data='{"path":["/global/:lang/:type?","/ff14_global/:lang/:type?"],"categories":["game"],"example":"/ff14/global/na/all","parameters":{"lang":"Region","type":"Category, `all` by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"FINAL FANTASY XIV (The Lodestone)","maintainers":["chengyuhui"],"description":"Region\n\n  | North Ameria | Europe | France | Germany | Japan |\n  | ------------ | ------ | ------ | ------- | ----- |\n  | na           | eu     | fr     | de      | jp    |\n\n  Category\n\n  | all | topics | notices | maintenance | updates | status | developers |\n  | --- | ------ | ------- | ----------- | ------- | ------ | ---------- |","location":"ff14-global.ts"}' :test='{"code":0}' />

Region

  | North Ameria | Europe | France | Germany | Japan |
  | ------------ | ------ | ------ | ------- | ----- |
  | na           | eu     | fr     | de      | jp    |

  Category

  | all | topics | notices | maintenance | updates | status | developers |
  | --- | ------ | ------- | ----------- | ------- | ------ | ---------- |

### 最终幻想 14 国服 <Site url="ff.web.sdo.com/web8/index.html" size="sm" />

<Route namespace="ff14" :data='{"path":["/zh/:type?","/ff14_zh/:type?"],"categories":["game"],"example":"/ff14/zh/news","parameters":{"type":"分类名，预设为 `all`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ff.web.sdo.com/web8/index.html"],"target":"/zh"}],"name":"最终幻想 14 国服","maintainers":["Kiotlin","ZeroClad","15x15G"],"url":"ff.web.sdo.com/web8/index.html","description":"| 新闻 | 公告     | 活动   | 广告      | 所有 |\n  | ---- | -------- | ------ | --------- | ---- |\n  | news | announce | events | advertise | all  |","location":"ff14-zh.ts"}' :test='{"code":0}' />

| 新闻 | 公告     | 活动   | 广告      | 所有 |
  | ---- | -------- | ------ | --------- | ---- |
  | news | announce | events | advertise | all  |

## Fortnite <Site url="fortnite.com"/>

### News <Site url="fortnite.com" size="sm" />

<Route namespace="fortnite" :data='{"path":"/news/:options?","categories":["game"],"example":"/fortnite/news","parameters":{"options":"Params"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"News","maintainers":["lyqluis"],"description":"-   `options.lang`, optional, language, eg. `/fortnite/news/lang=en-US`, common languages are listed below, more languages are available one the [official website](https://www.fortnite.com/news)\n\n  | English (default) | Spanish | Japanese | French | Korean | Polish |\n  | ----------------- | ------- | -------- | ------ | ------ | ------ |\n  | en-US             | es-ES   | ja       | fr     | ko     | pl     |","location":"news.ts"}' :test='{"code":0}' />

-   `options.lang`, optional, language, eg. `/fortnite/news/lang=en-US`, common languages are listed below, more languages are available one the [official website](https://www.fortnite.com/news)

  | English (default) | Spanish | Japanese | French | Korean | Polish |
  | ----------------- | ------- | -------- | ------ | ------ | ------ |
  | en-US             | es-ES   | ja       | fr     | ko     | pl     |

## Gamer Secret <Site url="gamersecret.com"/>

### Category <Site url="gamersecret.com" size="sm" />

<Route namespace="gamersecret" :data='{"path":"/:type?/:category?","categories":["game"],"example":"/gamersecret","parameters":{"type":"Type, see below, Latest News by default","category":"Category, see below"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gamersecret.com/:type","gamersecret.com/:type/:category","gamersecret.com/"]}],"name":"Category","maintainers":["nczitzk"],"description":"| Latest News | PC | Playstation | Nintendo | Xbox | Moblie |\n  | ----------- | -- | ----------- | -------- | ---- | ------ |\n  | latest-news | pc | playstation | nintendo | xbox | moblie |\n\n  Or\n\n  | GENERAL          | GENERAL EN         | MOBILE          | MOBILE EN         |\n  | ---------------- | ------------------ | --------------- | ----------------- |\n  | category/general | category/generalen | category/mobile | category/mobileen |\n\n  | NINTENDO          | NINTENDO EN         | PC          | PC EN         |\n  | ----------------- | ------------------- | ----------- | ------------- |\n  | category/nintendo | category/nintendoen | category/pc | category/pcen |\n\n  | PLAYSTATION          | PLAYSTATION EN         | REVIEWS          |\n  | -------------------- | ---------------------- | ---------------- |\n  | category/playstation | category/playstationen | category/reviews |\n\n  | XBOX          | XBOX EN         |\n  | ------------- | --------------- |\n  | category/xbox | category/xboxen |","location":"index.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 656)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

| Latest News | PC | Playstation | Nintendo | Xbox | Moblie |
  | ----------- | -- | ----------- | -------- | ---- | ------ |
  | latest-news | pc | playstation | nintendo | xbox | moblie |

  Or

  | GENERAL          | GENERAL EN         | MOBILE          | MOBILE EN         |
  | ---------------- | ------------------ | --------------- | ----------------- |
  | category/general | category/generalen | category/mobile | category/mobileen |

  | NINTENDO          | NINTENDO EN         | PC          | PC EN         |
  | ----------------- | ------------------- | ----------- | ------------- |
  | category/nintendo | category/nintendoen | category/pc | category/pcen |

  | PLAYSTATION          | PLAYSTATION EN         | REVIEWS          |
  | -------------------- | ---------------------- | ---------------- |
  | category/playstation | category/playstationen | category/reviews |

  | XBOX          | XBOX EN         |
  | ------------- | --------------- |
  | category/xbox | category/xboxen |

## GamerSky <Site url="gamersky.com"/>

### 评测 <Site url="gamersky.com" size="sm" />

<Route namespace="gamersky" :data='{"path":"/review/:type?","categories":["game"],"example":"/gamersky/review/pc","parameters":{"type":"评测类型，可选值为 `pc`、`tv`、`indie`、`web`、`mobile`、`all`，默认为 `pc`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.gamersky.com/review"],"target":"/review"}],"name":"评测","maintainers":["yy4382"],"description":"|pc|tv|indie|web|mobile|all|\n|---|---|---|---|---|---|\n|单机|电视|独立游戏|网游|手游|全部评测|\n","location":"review.ts"}' :test='{"code":0}' />

|pc|tv|indie|web|mobile|all|
|---|---|---|---|---|---|
|单机|电视|独立游戏|网游|手游|全部评测|


### 娱乐 <Site url="gamersky.com" size="sm" />

<Route namespace="gamersky" :data='{"path":"/ent/:category?","categories":["game"],"example":"/gamersky/ent/xz","parameters":{"type":"分类类型，留空为 `all`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[],"name":"娱乐","maintainers":["LogicJake"],"description":"|\n|\n|\n","location":"ent.ts"}' :test='{"code":0}' />

|
|
|


### 资讯 <Site url="gamersky.com" size="sm" />

<Route namespace="gamersky" :data='{"path":"/news/:type?","categories":["game"],"example":"/gamersky/news/pc","parameters":{"type":"资讯类型，见表，默认为 `pc`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.gamersky.com/news"],"target":"/news"}],"name":"资讯","maintainers":["yy4382"],"description":"|today|pc|ns|mobile|web|industry|hardware|tech|\n|---|---|---|---|---|---|---|---|\n|今日推荐|单机电玩|NS|手游|网游|业界|硬件|科技|\n","location":"news.ts"}' :test='{"code":0}' />

|today|pc|ns|mobile|web|industry|hardware|tech|
|---|---|---|---|---|---|---|---|
|今日推荐|单机电玩|NS|手游|网游|业界|硬件|科技|


## HoYoLAB <Site url="hoyolab.com"/>

### Official Announcement <Site url="hoyolab.com" size="sm" />

<Route namespace="hoyolab" :data='{"path":"/news/:language/:gids/:type","categories":["game"],"example":"/hoyolab/news/zh-cn/2/2","parameters":{"language":"Language","gids":"Game ID","type":"Announcement type"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Official Announcement","maintainers":["ZenoTian"],"description":"| Language         | Code  |\n  | ---------------- | ----- |\n  | 简体中文         | zh-cn |\n  | 繁體中文         | zh-tw |\n  | 日本語           | ja-jp |\n  | 한국어           | ko-kr |\n  | English (US)     | en-us |\n  | Español (EU)     | es-es |\n  | Français         | fr-fr |\n  | Deutsch          | de-de |\n  | Русский          | ru-ru |\n  | Português        | pt-pt |\n  | Español (Latino) | es-mx |\n  | Indonesia        | id-id |\n  | Tiếng Việt       | vi-vn |\n  | ภาษาไทย          | th-th |\n\n  | Honkai Impact 3rd | Genshin Impact | Tears of Themis | HoYoLAB | Honkai: Star Rail | Zenless Zone Zero |\n  | ----------------- | -------------- | --------------- | ------- | ----------------- | ----------------- |\n  | 1                 | 2              | 4               | 5       | 6                 | 8                 |\n\n  | Notices | Events | Info |\n  | ------- | ------ | ---- |\n  | 1       | 2      | 3    |","location":"news.ts"}' :test='{"code":0}' />

| Language         | Code  |
  | ---------------- | ----- |
  | 简体中文         | zh-cn |
  | 繁體中文         | zh-tw |
  | 日本語           | ja-jp |
  | 한국어           | ko-kr |
  | English (US)     | en-us |
  | Español (EU)     | es-es |
  | Français         | fr-fr |
  | Deutsch          | de-de |
  | Русский          | ru-ru |
  | Português        | pt-pt |
  | Español (Latino) | es-mx |
  | Indonesia        | id-id |
  | Tiếng Việt       | vi-vn |
  | ภาษาไทย          | th-th |

  | Honkai Impact 3rd | Genshin Impact | Tears of Themis | HoYoLAB | Honkai: Star Rail | Zenless Zone Zero |
  | ----------------- | -------------- | --------------- | ------- | ----------------- | ----------------- |
  | 1                 | 2              | 4               | 5       | 6                 | 8                 |

  | Notices | Events | Info |
  | ------- | ------ | ---- |
  | 1       | 2      | 3    |

## imop <Site url="imop.com"/>

### 全部消息 <Site url="imop.com" size="sm" />

<Route namespace="imop" :data='{"path":"/tianshu","categories":["game"],"example":"/imop/tianshu","radar":[{"source":["t.imop.com"],"target":"/tianshu"}],"name":"全部消息","maintainers":["zhkgo"],"location":"tianshu.ts"}' :test='{"code":0}' />

## indienova 独立游戏 <Site url="indienova.com"/>

### Unknown <Site url="indienova.com" size="sm" />

<Route namespace="indienova" :data='{"path":"/gamedb/recent","name":"Unknown","maintainers":["TonyRL"],"location":"gamedb.ts"}' :test='undefined' />

### 会员开发游戏库 <Site url="indienova.com/usergames" size="sm" />

<Route namespace="indienova" :data='{"path":"/usergames","categories":["game"],"example":"/indienova/usergames","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["indienova.com/usergames","indienova.com/"]}],"name":"会员开发游戏库","maintainers":["TonyRL"],"url":"indienova.com/usergames","location":"usergames.ts"}' :test='{"code":0}' />

### 文章 <Site url="indienova.com" size="sm" />

<Route namespace="indienova" :data='{"path":"/:type","categories":["game"],"example":"/indienova/article","parameters":{"type":"类型: `article` 文章，`development` 开发"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"文章","maintainers":["GensouSakuya","kt286"],"location":"article.ts"}' :test='{"code":0}' />

### 专题 <Site url="indienova.com" size="sm" />

<Route namespace="indienova" :data='{"path":"/column/:columnId","categories":["game"],"example":"/indienova/column/52","parameters":{"columnId":"专题 ID，可在 URL中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["indienova.com/column/:columnId"]}],"name":"专题","maintainers":["TonyRL"],"description":"<details>\n    <summary>专题 ID</summary>\n\n    游戏推荐\n\n    | itch 一周游戏汇 | 一周值得关注的发售作品 | 诺娃速递 | 周末游戏视频集锦 | 每月媒体评分 | 年度最佳游戏 | Indie Focus 近期新游 | indienova Picks 精选 |\n    | --------------- | ---------------------- | -------- | ---------------- | ------------ | ------------ | -------------------- | -------------------- |\n    | 52              | 29                     | 41       | 43               | 45           | 39           | 1                    | 8                    |\n\n    游戏评论\n\n    | 游必有方 Podcast | 独立游戏潮（RED） |\n    | ---------------- | ----------------- |\n    | 6                | 3                 |\n\n    游戏开发\n\n    | 游戏设计模式 | Roguelike 开发 | GMS 中文教程 |\n    | ------------ | -------------- | ------------ |\n    | 15           | 14             | 7            |\n\n    游戏设计\n\n    | 游戏与所有 | 让人眼前一亮的游戏设计 | 游戏音乐分析 | 游戏情感设计 | 游戏相关书籍 | 游戏设计课程笔记 | 游戏设计工具 | 游戏设计灵感 | 设计师谈设计 | 游戏研究方法 | 功能游戏 | 游戏设计专业院校 | 像素课堂 |\n    | ---------- | ---------------------- | ------------ | ------------ | ------------ | ---------------- | ------------ | ------------ | ------------ | ------------ | -------- | ---------------- | -------- |\n    | 10         | 33                     | 17           | 4            | 22           | 11               | 24           | 26           | 27           | 28           | 38       | 9                | 19       |\n\n    游戏文化\n\n    | NOVA 海外独立游戏见闻 | 工作室访谈 | indie Figure 游戏人 | 游戏艺术家 | 独立游戏音乐欣赏 | 游戏瑰宝 | 电脑 RPG 游戏史 | ALT. CTRL. GAMING |\n    | --------------------- | ---------- | ------------------- | ---------- | ---------------- | -------- | --------------- | ----------------- |\n    | 53                    | 23         | 5                   | 44         | 18               | 21       | 16              | 2                 |\n\n    Game Jam\n\n    | Ludum Dare | Global Game Jam |\n    | ---------- | --------------- |\n    | 31         | 13              |\n  </details>","location":"column.ts"}' :test='{"code":0}' />

<details>
    <summary>专题 ID</summary>

    游戏推荐

    | itch 一周游戏汇 | 一周值得关注的发售作品 | 诺娃速递 | 周末游戏视频集锦 | 每月媒体评分 | 年度最佳游戏 | Indie Focus 近期新游 | indienova Picks 精选 |
    | --------------- | ---------------------- | -------- | ---------------- | ------------ | ------------ | -------------------- | -------------------- |
    | 52              | 29                     | 41       | 43               | 45           | 39           | 1                    | 8                    |

    游戏评论

    | 游必有方 Podcast | 独立游戏潮（RED） |
    | ---------------- | ----------------- |
    | 6                | 3                 |

    游戏开发

    | 游戏设计模式 | Roguelike 开发 | GMS 中文教程 |
    | ------------ | -------------- | ------------ |
    | 15           | 14             | 7            |

    游戏设计

    | 游戏与所有 | 让人眼前一亮的游戏设计 | 游戏音乐分析 | 游戏情感设计 | 游戏相关书籍 | 游戏设计课程笔记 | 游戏设计工具 | 游戏设计灵感 | 设计师谈设计 | 游戏研究方法 | 功能游戏 | 游戏设计专业院校 | 像素课堂 |
    | ---------- | ---------------------- | ------------ | ------------ | ------------ | ---------------- | ------------ | ------------ | ------------ | ------------ | -------- | ---------------- | -------- |
    | 10         | 33                     | 17           | 4            | 22           | 11               | 24           | 26           | 27           | 28           | 38       | 9                | 19       |

    游戏文化

    | NOVA 海外独立游戏见闻 | 工作室访谈 | indie Figure 游戏人 | 游戏艺术家 | 独立游戏音乐欣赏 | 游戏瑰宝 | 电脑 RPG 游戏史 | ALT. CTRL. GAMING |
    | --------------------- | ---------- | ------------------- | ---------- | ---------------- | -------- | --------------- | ----------------- |
    | 53                    | 23         | 5                   | 44         | 18               | 21       | 16              | 2                 |

    Game Jam

    | Ludum Dare | Global Game Jam |
    | ---------- | --------------- |
    | 31         | 13              |
  </details>

## itch.io <Site url="itch.io"/>

### Developer Logs <Site url="itch.io" size="sm" />

<Route namespace="itch" :data='{"path":"/devlog/:user/:id","categories":["game"],"example":"/itch/devlog/teamterrible/the-baby-in-yellow","parameters":{"user":"User id, can be found in URL","id":"Item id, can be found in URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Developer Logs","maintainers":["nczitzk"],"description":"`User id` is the field before `.itch.io` in the URL of the corresponding page, e.g. the URL of [The Baby In Yellow Devlog](https://teamterrible.itch.io/the-baby-in-yellow/devlog) is `https://teamterrible.itch.io/the-baby-in-yellow/devlog`, where the field before `.itch.io` is `teamterrible`.\n\n  `Item id` is the field between `itch.io` and `/devlog` in the URL of the corresponding page, e.g. the URL for [The Baby In Yellow Devlog](https://teamterrible.itch.io/the-baby-in-yellow/devlog) is `https://teamterrible.itch.io/the-baby-in-yellow/devlog`, where the field between `itch.io` and `/devlog` is `the-baby-in-yellow`.\n\n  So the route is [`/itch/devlogs/teamterrible/the-baby-in-yellow`](https://rsshub.app/itch/devlogs/teamterrible/the-baby-in-yellow).","location":"devlog.ts"}' :test='{"code":0}' />

`User id` is the field before `.itch.io` in the URL of the corresponding page, e.g. the URL of [The Baby In Yellow Devlog](https://teamterrible.itch.io/the-baby-in-yellow/devlog) is `https://teamterrible.itch.io/the-baby-in-yellow/devlog`, where the field before `.itch.io` is `teamterrible`.

  `Item id` is the field between `itch.io` and `/devlog` in the URL of the corresponding page, e.g. the URL for [The Baby In Yellow Devlog](https://teamterrible.itch.io/the-baby-in-yellow/devlog) is `https://teamterrible.itch.io/the-baby-in-yellow/devlog`, where the field between `itch.io` and `/devlog` is `the-baby-in-yellow`.

  So the route is [`/itch/devlogs/teamterrible/the-baby-in-yellow`](https://rsshub.app/itch/devlogs/teamterrible/the-baby-in-yellow).

### Posts <Site url="itch.io" size="sm" />

<Route namespace="itch" :data='{"path":"/posts/:topic/:id","categories":["game"],"example":"/itch/posts/9539/introduce-yourself","parameters":{"topic":"Topic id, can be found in URL","id":"Topic name, can be found in URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["itch.io/t/:topic/:id"]}],"name":"Posts","maintainers":["nczitzk"],"location":"posts.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1001)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### Unknown <Site url="itch.io" size="sm" />

<Route namespace="itch" :data='{"path":"*","name":"Unknown","maintainers":[],"location":"index.ts"}' :test='undefined' />

## JUMP <Site url="switch.jumpvg.com"/>

### 游戏折扣 <Site url="switch.jumpvg.com" size="sm" />

<Route namespace="jump" :data='{"path":"/discount/:platform/:filter?/:countries?","categories":["game"],"example":"/jump/discount/ps5/all","parameters":{"platform":"平台:switch,ps4,ps5,xbox,steam,epic","filter":"过滤参数,all-全部，jx-精选，sd-史低，dl-独立，vip-会员","countries":"地区，具体支持较多，可自信查看地区简写"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"游戏折扣","maintainers":["zytomorrow"],"description":"| switch | ps4  | ps5  | xbox   | steam | epic   |\n  | ------ | ---- | ---- | ------ | ----- | ------ |\n  | 可用   | 可用 | 可用 | 不可用 | 可用  | 不可用 |\n\n  | filter | switch | ps4 | ps5 | steam |\n  | ------ | ------ | --- | --- | ----- |\n  | all    | ✔     | ✔  | ✔  | ✔    |\n  | jx     | ✔     | ✔  | ❌  | ✔    |\n  | sd     | ✔     | ✔  | ✔  | ✔    |\n  | dl     | ❌     | ✔  | ❌  | ✔    |\n  | vip    | ❌     | ❌  | ✔  | ❌    |\n\n  | 北美 | 欧洲（英语） | 法国 | 德国 | 日本 |\n  | ---- | ------------ | ---- | ---- | ---- |\n  | na   | eu           | fr   | de   | jp   |","location":"discount.ts"}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:66:18)\n    at listOnTimeout (node:internal/timers:594:17)\n    at processTimers (node:internal/timers:529:7)"}' />

| switch | ps4  | ps5  | xbox   | steam | epic   |
  | ------ | ---- | ---- | ------ | ----- | ------ |
  | 可用   | 可用 | 可用 | 不可用 | 可用  | 不可用 |

  | filter | switch | ps4 | ps5 | steam |
  | ------ | ------ | --- | --- | ----- |
  | all    | ✔     | ✔  | ✔  | ✔    |
  | jx     | ✔     | ✔  | ❌  | ✔    |
  | sd     | ✔     | ✔  | ✔  | ✔    |
  | dl     | ❌     | ✔  | ❌  | ✔    |
  | vip    | ❌     | ❌  | ✔  | ❌    |

  | 北美 | 欧洲（英语） | 法国 | 德国 | 日本 |
  | ---- | ------------ | ---- | ---- | ---- |
  | na   | eu           | fr   | de   | jp   |

## KISS <Site url="www.kisskiss.tv"/>

### ブログ <Site url="www.kisskiss.tv" size="sm" />

<Route namespace="kisskiss" :data='{"path":"/blog/:category?","categories":["game"],"example":"/blog/DLC","parameters":{"category":"category"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.kisskiss.tv/kiss/diary.php"],"target":"/blog"}],"name":"ブログ","maintainers":["keocheung"],"location":"blog.ts"}' :test='{"code":1,"message":"AssertionError: expected 404 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1092)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

## LastOrigin <Site url="www.last-origin.com"/>

### News <Site url="www.last-origin.com" size="sm" />

<Route namespace="last-origin" :data='{"path":"/news","name":"News","url":"www.last-origin.com","maintainers":["gudezhi"],"example":"/last-origin/news","parameters":{},"categories":["game"],"features":{"supportRadar":true},"radar":[{"source":["www.last-origin.com/news.html","www.last-origin.com"],"target":"/news"}],"description":"","location":"news.ts"}' :test='undefined' />

## Liquipedia <Site url="liquipedia.net"/>

### Dota2 战队最近比赛结果 <Site url="liquipedia.net" size="sm" />

<Route namespace="liquipedia" :data='{"path":"/dota2/matches/:id","categories":["game"],"example":"/liquipedia/dota2/matches/Team_Aster","parameters":{"id":"战队名称，可在url中找到。例如:https://liquipedia.net/dota2/Team_Aster"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["liquipedia.net/dota2/:id"]}],"name":"Dota2 战队最近比赛结果","maintainers":["wzekin"],"location":"dota2-matches.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1132)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### Unknown <Site url="liquipedia.net" size="sm" />

<Route namespace="liquipedia" :data='{"path":"/counterstrike/matches/:team","radar":[{"source":["liquipedia.net/counterstrike/:id/Matches","liquipedia.net/dota2/:id"],"target":"/counterstrike/matches/:id"}],"name":"Unknown","maintainers":["CookiePieWw"],"location":"cs-matches.ts"}' :test='undefined' />

## MC百科 <Site url="www.mcmod.cn"/>

### 最新MOD <Site url="www.mcmod.cn" size="sm" />

<Route namespace="mcmod" :data='{"path":"/:type","categories":["game"],"example":"/mcmod/new","parameters":{"type":"查询类型，详见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"最新MOD","maintainers":["hualiong"],"description":"`:type` 类型可选如下\n\n| 随机显示MOD | 最新收录MOD | 最近编辑MOD |\n| ------ | --- | ---- |\n| random | new | edit |","location":"index.ts"}' :test='{"code":0}' />

`:type` 类型可选如下

| 随机显示MOD | 最新收录MOD | 最近编辑MOD |
| ------ | --- | ---- |
| random | new | edit |

## Minecraft <Site url="minecraft.net"/>

### Java Blocked Servers <Site url="minecraft.net/" size="sm" />

<Route namespace="minecraft" :data='{"path":"/blockedservers","categories":["game"],"example":"/minecraft/blockedservers","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["minecraft.net/"]}],"name":"Java Blocked Servers","maintainers":["xtexChooser"],"url":"minecraft.net/","description":"Java 版中被 Mojang 通过 sessionserver 阻止的服务器域名的 SHA-1 散列","zh":{"name":"Java版被阻止的服务器域名散列"},"location":"blockedservers.ts"}' :test='{"code":0}' />

Java 版中被 Mojang 通过 sessionserver 阻止的服务器域名的 SHA-1 散列

### Java Runtimes <Site url="minecraft.net/" size="sm" />

<Route namespace="minecraft" :data='{"path":"/java-runtime/:arch?/:javaType?","categories":["game"],"example":"/minecraft/java-runtime","parameters":{"arch":"Arch, `all` by default","javaType":"Java runtime type, `all` by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["minecraft.net/"]}],"name":"Java Runtimes","maintainers":["xtexChooser"],"url":"minecraft.net/","description":"\narch:\n\n- gamecore (Currently not used by Mojang)\n- linux\n- linux-i386\n- mac-os\n- mac-os-arm64\n- windows-arm64\n- windows-x64\n- windows-x86\n\njavaType:\n\n- java-runtime-alpha\n- java-runtime-beta\n- java-runtime-delta\n- java-runtime-gamma\n- java-runtime-gamma-snapshot\n- jre-legacy\n- minecraft-java-exe (Only on Windows)\n","zh":{"name":"Java运行时"},"location":"java-runtime.ts"}' :test='{"code":0}' />


arch:

- gamecore (Currently not used by Mojang)
- linux
- linux-i386
- mac-os
- mac-os-arm64
- windows-arm64
- windows-x64
- windows-x86

javaType:

- java-runtime-alpha
- java-runtime-beta
- java-runtime-delta
- java-runtime-gamma
- java-runtime-gamma-snapshot
- jre-legacy
- minecraft-java-exe (Only on Windows)


### Java Game Update <Site url="minecraft.net/" size="sm" />

<Route namespace="minecraft" :data='{"path":"/version/:versionType?/:linkType?","categories":["game"],"example":"/minecraft/version","parameters":{"versionType":"Game version type, `all` by default","linkType":"Link added to feed, `official` by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["minecraft.net/"]}],"name":"Java Game Update","maintainers":["TheresaQWQ","xtexChooser"],"url":"minecraft.net/","description":"\n| Version                    | versionType |\n| -------------------------- | ----------- |\n| 正式版                     | release     |\n| 快照                       | snapshot    |\n| Alpha 及更早的版本         | old_alpha  |\n| Beta 版                    | old_beta   |\n| Target                     | linkType    |\n| -------------------------- | --------    |\n| minecraft.net              | official    |\n| 英文 Minecraft Wiki 版本页 | enwiki      |\n| 中文 Minecraft Wiki 版本页 | zhwiki      |\n","zh":{"name":"Java版游戏更新"},"location":"version.ts"}' :test='{"code":1,"message":"AssertionError: expected 312807562933 to be less than 311040000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:36:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1199)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)"}' />


| Version                    | versionType |
| -------------------------- | ----------- |
| 正式版                     | release     |
| 快照                       | snapshot    |
| Alpha 及更早的版本         | old_alpha  |
| Beta 版                    | old_beta   |
| Target                     | linkType    |
| -------------------------- | --------    |
| minecraft.net              | official    |
| 英文 Minecraft Wiki 版本页 | enwiki      |
| 中文 Minecraft Wiki 版本页 | zhwiki      |


## Modrinth <Site url="modrinth.com"/>

### Project versions <Site url="modrinth.com" size="sm" />

<Route namespace="modrinth" :data='{"path":"/project/:id/versions/:routeParams?","categories":["game"],"example":"/modrinth/project/sodium/versions","parameters":{"id":"Id or slug of the Modrinth project","routeParams":"Extra route params. See the table below for options"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["modrinth.com/mod/:id/*","modrinth.com/plugin/:id/*","modrinth.com/datapack/:id/*","modrinth.com/shader/:id/*","modrinth.com/resourcepack/:id/*","modrinth.com/modpack/:id/*","modrinth.com/mod/:id","modrinth.com/plugin/:id","modrinth.com/datapack/:id","modrinth.com/shader/:id","modrinth.com/resourcepack/:id","modrinth.com/modpack/:id"],"target":"/project/:id/versions"}],"name":"Project versions","maintainers":["SettingDust"],"description":"| Name           | Example                                      |\n| -------------- | -------------------------------------------- |\n| loaders        | loaders=fabric&loaders=quilt&loaders=forge |\n| game_versions | game_versions=1.20.1&game_versions=1.20.2 |\n| featured       | featured=true                                |","location":"versions.ts"}' :test='{"code":0}' />

| Name           | Example                                      |
| -------------- | -------------------------------------------- |
| loaders        | loaders=fabric&loaders=quilt&loaders=forge |
| game_versions | game_versions=1.20.1&game_versions=1.20.2 |
| featured       | featured=true                                |

## Nintendo <Site url="nintendo.com"/>

### Nintendo Direct <Site url="nintendo.com/nintendo-direct/archive" size="sm" />

<Route namespace="nintendo" :data='{"path":"/direct","categories":["game"],"example":"/nintendo/direct","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nintendo.com/nintendo-direct/archive","nintendo.com/"]}],"name":"Nintendo Direct","maintainers":["HFO4"],"url":"nintendo.com/nintendo-direct/archive","location":"direct.ts"}' :test='{"code":1,"message":"AssertionError: expected -6332034815 to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1291)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)"}' />

### News（Hong Kong only） <Site url="nintendo.com.hk/topics" size="sm" />

<Route namespace="nintendo" :data='{"path":"/news","categories":["game"],"example":"/nintendo/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nintendo.com.hk/topics","nintendo.com.hk/"]}],"name":"News（Hong Kong only）","maintainers":["HFO4"],"url":"nintendo.com.hk/topics","location":"news.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1293)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### Switch System Update（Japan） <Site url="nintendo.co.jp/support/switch/system_update/index.html" size="sm" />

<Route namespace="nintendo" :data='{"path":"/system-update","categories":["game"],"example":"/nintendo/system-update","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nintendo.co.jp/support/switch/system_update/index.html","nintendo.co.jp/"]}],"name":"Switch System Update（Japan）","maintainers":["hoilc"],"url":"nintendo.co.jp/support/switch/system_update/index.html","location":"system-update.ts"}' :test='{"code":1,"message":"AssertionError: expected [ …(38) ] to not include &#39;https://www.nintendo.co.jp/support/sw…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:1143:17)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:920:17)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@5.1.2/node_modules/chai/chai.js:1610:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1294)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)"}' />

### Unknown <Site url="nintendoswitch.com.cn/software" size="sm" />

<Route namespace="nintendo" :data='{"path":"/eshop/cn","radar":[{"source":["nintendoswitch.com.cn/software","nintendoswitch.com.cn/"]}],"name":"Unknown","maintainers":[],"url":"nintendoswitch.com.cn/software","location":"eshop-cn.ts"}' :test='undefined' />

### Unknown <Site url="nintendo.com.hk/software/switch" size="sm" />

<Route namespace="nintendo" :data='{"path":"/eshop/hk","radar":[{"source":["nintendo.com.hk/software/switch","nintendo.com.hk/"]}],"name":"Unknown","maintainers":[],"url":"nintendo.com.hk/software/switch","location":"eshop-hk.ts"}' :test='undefined' />

### Unknown <Site url="nintendo.co.jp/software/switch/index.html" size="sm" />

<Route namespace="nintendo" :data='{"path":"/eshop/jp","radar":[{"source":["nintendo.co.jp/software/switch/index.html","nintendo.co.jp/"]}],"name":"Unknown","maintainers":[],"url":"nintendo.co.jp/software/switch/index.html","location":"eshop-jp.ts"}' :test='undefined' />

### Unknown <Site url="nintendo.com/store/games" size="sm" />

<Route namespace="nintendo" :data='{"path":"/eshop/us","radar":[{"source":["nintendo.com/store/games","nintendo.com/"]}],"name":"Unknown","maintainers":[],"url":"nintendo.com/store/games","location":"eshop-us.ts"}' :test='undefined' />

### 首页资讯（中国） <Site url="nintendoswitch.com.cn/" size="sm" />

<Route namespace="nintendo" :data='{"path":"/news/china","categories":["game"],"example":"/nintendo/news/china","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nintendoswitch.com.cn/"]}],"name":"首页资讯（中国）","maintainers":["NeverBehave"],"url":"nintendoswitch.com.cn/","location":"news-china.ts"}' :test='{"code":0}' />

## osu! <Site url="osu.ppy.sh"/>

### Beatmap Packs <Site url="osu.ppy.sh" size="sm" />

<Route namespace="osu" :data='{"path":"/packs/:type?","categories":["game"],"example":"/osu/packs","parameters":{"type":"pack type, default to `standard`, can choose from `featured`, `tournament`, `loved`, `chart`, `theme` and `artist`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Beatmap Packs","maintainers":["JimenezLi"],"location":"beatmaps/packs.ts"}' :test='{"code":0}' />

### Latest Ranked Beatmap <Site url="osu.ppy.sh" size="sm" />

<Route namespace="osu" :data='{"path":"/latest-ranked/:routeParams?","categories":["game"],"example":"/osu/latest-ranked/includeMode=osu&difficultyLimit=L3&difficultyLimit=U7","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false,"supportRadar":true},"parameters":{"routeParams":{"description":"Used to pass route parameters in Query String format. Check out route description for more info.","default":"null"}},"name":"Latest Ranked Beatmap","description":"\nSubscribe to the new beatmaps on https://osu.ppy.sh/beatmapsets.\n\n#### Parameter Description\n\nParameters allows you to:\n\n- Filter game mode\n- Limit beatmap difficulty\n- Show/hide game mode in feed title\n\nBelow is a table of all allowed parameters passed to `routeParams`\n\n\n| Name              | Default  | Description                                                                                                                                                                                                                                          |\n| ----------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `includeMode`     | All mode | Could be `osu`, `mania`, `fruits` or `taiko`. Specify included game mode of beatmaps. Including this paramseter multiple times to specify multiple game modes, e.g.: `includeMode=osu&includeMode=mania`. Subscribe to all game modes if not specified |\n| `difficultyLimit` | None     | Lower/upper limit of star rating of the beatmaps in the beatmapset item, e.g.:`difficultyLimit=U6`. Checkout tips in descriptions for detailed explaination and examples.                                                                            |\n| `modeInTitle`     | `true`   | `true` or `false` Add mode info into feed title.\n\n\nThis actual parameters should be passed as `routeParams` in URL Query String format without `?`, e.g.:\n\n    /osu/latest-ranked/modeInTitle=true&includeMode=osu\n\n:::tip\nYou could make use of `difficultyLimit` paramters to create a \"high difficulty/low difficulty only\" only feed.\n\nFor example, if you only wants to play low star rating beatmap like 1 or 2 star, you could subscribe to:\n\n    /osu/latest-ranked/difficultyLimit=U2\n\nThis will filter out all beatmapsets that do not provide at least one beatmap with star rating<=`2.00`.\n\nSimilarly, you could use lower bound to filter out beatmapsets which don&#39;t have at least one beatmap\nwith star rating higher than a certain threshold.\n\n    /osu/latest-ranked/difficultyLimit=L6\n\nNow all beatmapsets that don&#39;t provided at least one beatmap with star rating higher than `6.00` will be filtered.\n:::\n","maintainers":["nfnfgo"],"radar":[{"source":["osu.ppy.sh/beatmapsets"]}],"location":"beatmaps/latest-ranked.ts"}' :test='{"code":0}' />


Subscribe to the new beatmaps on https://osu.ppy.sh/beatmapsets.

#### Parameter Description

Parameters allows you to:

- Filter game mode
- Limit beatmap difficulty
- Show/hide game mode in feed title

Below is a table of all allowed parameters passed to `routeParams`


| Name              | Default  | Description                                                                                                                                                                                                                                          |
| ----------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `includeMode`     | All mode | Could be `osu`, `mania`, `fruits` or `taiko`. Specify included game mode of beatmaps. Including this paramseter multiple times to specify multiple game modes, e.g.: `includeMode=osu&includeMode=mania`. Subscribe to all game modes if not specified |
| `difficultyLimit` | None     | Lower/upper limit of star rating of the beatmaps in the beatmapset item, e.g.:`difficultyLimit=U6`. Checkout tips in descriptions for detailed explaination and examples.                                                                            |
| `modeInTitle`     | `true`   | `true` or `false` Add mode info into feed title.


This actual parameters should be passed as `routeParams` in URL Query String format without `?`, e.g.:

    /osu/latest-ranked/modeInTitle=true&includeMode=osu

:::tip
You could make use of `difficultyLimit` paramters to create a "high difficulty/low difficulty only" only feed.

For example, if you only wants to play low star rating beatmap like 1 or 2 star, you could subscribe to:

    /osu/latest-ranked/difficultyLimit=U2

This will filter out all beatmapsets that do not provide at least one beatmap with star rating<=`2.00`.

Similarly, you could use lower bound to filter out beatmapsets which don't have at least one beatmap
with star rating higher than a certain threshold.

    /osu/latest-ranked/difficultyLimit=L6

Now all beatmapsets that don't provided at least one beatmap with star rating higher than `6.00` will be filtered.
:::


## PRINCESS CONNECT! Re Dive プリンセスコネクト！Re Dive <Site url="priconne-redive.jp"/>

### 最新公告 <Site url="priconne-redive.jp/news" size="sm" />

<Route namespace="priconne-redive" :data='{"path":"/news/:server?","categories":["game"],"example":"/priconne-redive/news","parameters":{"server":"服务器，默认日服"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["priconne-redive.jp/news"],"target":"/news/jp"},{"source":["princessconnect.so-net.tw/news"],"target":"/news/zh-tw"},{"source":["game.bilibili.com/pcr/news.html"],"target":"/news/zh-cn"}],"name":"最新公告","maintainers":["SayaSS","frankcwl"],"url":"priconne-redive.jp/news","description":"服务器\n\n  | 国服  | 台服  | 日服  |\n  | ----- | ----- | ---- |\n  | zh-cn | zh-tw | jp   |","location":"news.ts"}' :test='undefined' />

服务器

  | 国服  | 台服  | 日服  |
  | ----- | ----- | ---- |
  | zh-cn | zh-tw | jp   |

## PlayStation Store <Site url="www.playstation.com"/>

### PlayStation Monthly Games <Site url="www.playstation.com/en-sg/ps-plus/whats-new" size="sm" />

<Route namespace="ps" :data='{"path":"/monthly-games","categories":["game","popular"],"view":5,"example":"/ps/monthly-games","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.playstation.com/en-sg/ps-plus/whats-new"]}],"name":"PlayStation Monthly Games","maintainers":["justjustCC"],"url":"www.playstation.com/en-sg/ps-plus/whats-new","location":"monthly-games.ts"}' :test='{"code":0}' />

### PlayStation Network user trophy <Site url="www.playstation.com" size="sm" />

<Route namespace="ps" :data='{"path":"/trophy/:id","categories":["game"],"example":"/ps/trophy/DIYgod_","parameters":{"id":"User ID"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"PlayStation Network user trophy","maintainers":["DIYgod"],"location":"trophy.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1497)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

## SEGA <Site url="pjsekai.sega.jp"/>

### maimai DX Japanese Ver. News <Site url="info-maimai.sega.jp/" size="sm" />

<Route namespace="sega" :data='{"path":"/maimaidx/news","categories":["game"],"example":"/sega/maimaidx/news","radar":[{"source":["info-maimai.sega.jp/"]}],"name":"maimai DX Japanese Ver. News","maintainers":["randompasser"],"url":"info-maimai.sega.jp/","location":"maimaidx.ts"}' :test='{"code":0}' />

### 世界计划 多彩舞台 ｜ ProjectSekai ｜ プロセカ <Site url="pjsekai.sega.jp/news/index.html" size="sm" />

<Route namespace="sega" :data='{"path":"/pjsekai/news","categories":["game"],"example":"/sega/pjsekai/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["pjsekai.sega.jp/news/index.html"]}],"name":"世界计划 多彩舞台 ｜ ProjectSekai ｜ プロセカ","maintainers":["15x15G"],"url":"pjsekai.sega.jp/news/index.html","location":"pjsekai.ts"}' :test='{"code":0}' />

## Steam <Site url="store.steampowered.com"/>

### Community Workshop Search <Site url="store.steampowered.com" size="sm" />

<Route namespace="steam" :data='{"path":"/workshopsearch/:appid?/:routeParams?","categories":["game"],"example":"/steam/workshopsearch/730","parameters":{"appid":"Steam appid, can be found on the community hub page or store page URL, 730 by default.","routeParams":"Route parameters, can be found on the search result page URL. Route parameters located after the appid."},"radar":[{"title":"Workshop Search Results","source":["steamcommunity.com/app/:appid/workshop/"],"target":"/workshopsearch/:appid"}],"description":"Steam Community Workshop Search Results.\nThe parameter &#39;l=language&#39; changes the language of search results(if possible).\nFor example, route `/workshopsearch/730/l=schinese` will display the simplified Chinese descriptions of the entry.\n\nLanguage Parameter:\n\n| English | 简体中文 | 繁體中文 | 日本語   | 한국어  | ภาษาไทย | български | čeština | dansk  | Deutsch | español | latam | ελληνικά | français | italiano | Bahasa Indonesia | magyar    | Nederlands | norsk     | polski | português  | brasileiro | română   | русский | suomi   | svenska | Türkçe  | Tiếng Việt | українська |\n| ------- | -------- | -------- | -------- | ------- | ------- | --------- | ------- | ------ | ------- | ------- | ----- | -------- | -------- | -------- | ---------------- | --------- | ---------- | --------- | ------ | ---------- | ---------- | -------- | ------- | ------- | ------- | ------- | ---------- | ---------- |\n| english | schinese | tchinese | japanese | koreana | thai    | bulgarian | czech   | danish | german  | spanish | latam | greek    | french   | italian  | indonesian       | hungarian | dutch      | norwegian | polish | portuguese | brazilian  | romanian | russian | finnish | swedish | turkish | vietnamese | ukrainian  |\n\n","name":"Community Workshop Search","maintainers":["NyaaaDoge"],"location":"workshop-search.ts"}' :test='{"code":0}' />

Steam Community Workshop Search Results.
The parameter 'l=language' changes the language of search results(if possible).
For example, route `/workshopsearch/730/l=schinese` will display the simplified Chinese descriptions of the entry.

Language Parameter:

| English | 简体中文 | 繁體中文 | 日本語   | 한국어  | ภาษาไทย | български | čeština | dansk  | Deutsch | español | latam | ελληνικά | français | italiano | Bahasa Indonesia | magyar    | Nederlands | norsk     | polski | português  | brasileiro | română   | русский | suomi   | svenska | Türkçe  | Tiếng Việt | українська |
| ------- | -------- | -------- | -------- | ------- | ------- | --------- | ------- | ------ | ------- | ------- | ----- | -------- | -------- | -------- | ---------------- | --------- | ---------- | --------- | ------ | ---------- | ---------- | -------- | ------- | ------- | ------- | ------- | ---------- | ---------- |
| english | schinese | tchinese | japanese | koreana | thai    | bulgarian | czech   | danish | german  | spanish | latam | greek    | french   | italian  | indonesian       | hungarian | dutch      | norwegian | polish | portuguese | brazilian  | romanian | russian | finnish | swedish | turkish | vietnamese | ukrainian  |



### Latest Curator Reviews <Site url="store.steampowered.com" size="sm" />

<Route namespace="steam" :data='{"path":"/curator/:id/:routeParams?","categories":["game"],"example":"/steam/curator/34646096-80-Days","parameters":{"id":"Steam curator id. It usually consists of a series of numbers and the curator&#39;s name.","routeParams":{"description":"Extra parameters to filter the reviews. The following parameters are supported:\n| Key             | Description                                                                                   | Accepts                                    | Defaults to |\n| --------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------ | ----------- |\n| `curations`   | Review type to filter by. `0`: Recommended, `1`: Not Recommended, `2`: Informational    | `0`/`1`/`2`/`0,1`/`0,2`/`1,2`  |             |\n| `tagids`      | Tag to filter by. Details are provided below.                                                 | use comma to separate multiple tagid       |             |\n\nNote: There is a [‘Popular Tags’](https://store.steampowered.com/tag/browse) page where you can find many but not all of the tags. The tag’s ID is in the `data-tagid` attribute of the element.Steam does not currently provide a page that comprehensively lists all tags, and you may need to explore alternative ways to find them.\n\nExamples:\n* `/steam/curator/34646096-80-Days/curations=&tagids=`\n* `/steam/curator/34646096-80-Days/curations=0&tagids=19`\n* `/steam/curator/34646096-80-Days/curations=0,2&tagids=19,21`\n"}},"radar":[{"title":"Latest Curator Reviews","source":["store.steampowered.com/curator/:id"],"target":"/curator/:id"}],"description":"The Latest reviews from a Steam Curator.","name":"Latest Curator Reviews","maintainers":["naremloa","fenxer"],"location":"curator.ts"}' :test='{"code":0}' />

The Latest reviews from a Steam Curator.

### Steam Community Hub Feeds <Site url="store.steampowered.com" size="sm" />

<Route namespace="steam" :data='{"path":"/appcommunityfeed/:appid/:routeParams?","categories":["game"],"example":"/steam/appcommunityfeed/730","parameters":{"appid":"Steam appid, can be found on the community hub page or store page URL.","routeParams":"Query parameters."},"radar":[{"title":"Community Hub","source":["steamcommunity.com/app/:appid"],"target":"/appcommunityfeed/:appid"},{"title":"Community Hub","source":["store.steampowered.com/app/:appid/*/"],"target":"/appcommunityfeed/:appid"}],"description":"Query Parameters:\n\n| Name                   | Type   | Description             |\n| ---------------------- | ------ | ----------------------- |\n| p                      | string | p                       |\n| rgSections[]           | string | rgSections              |\n| filterLanguage         | string | Filter Language         |\n| languageTag            | string | Language Tag            |\n| nMaxInappropriateScore | string | Max Inappropriate Score |\n\nExample:\n- `/appcommunityfeed/730/p=1&rgSections[]=2&rgSections[]=4&filterLanguage=english&languageTag=english&nMaxInappropriateScore=1` for CS2 Screenshot and Artwork contents.\n- `/appcommunityfeed/730/rgSections[]=6` for CS2 Workshop contents only.\n- `/appcommunityfeed/570/rgSections[]=3&rgSections[]=9` for Dota2 Video and Guides contents.\n\n::: tip\nIt can also access community hub contents that require a logged-in account.\n:::\n","name":"Steam Community Hub Feeds","maintainers":["NyaaaDoge"],"location":"appcommunityfeed.ts"}' :test='{"code":0}' />

Query Parameters:

| Name                   | Type   | Description             |
| ---------------------- | ------ | ----------------------- |
| p                      | string | p                       |
| rgSections[]           | string | rgSections              |
| filterLanguage         | string | Filter Language         |
| languageTag            | string | Language Tag            |
| nMaxInappropriateScore | string | Max Inappropriate Score |

Example:
- `/appcommunityfeed/730/p=1&rgSections[]=2&rgSections[]=4&filterLanguage=english&languageTag=english&nMaxInappropriateScore=1` for CS2 Screenshot and Artwork contents.
- `/appcommunityfeed/730/rgSections[]=6` for CS2 Workshop contents only.
- `/appcommunityfeed/570/rgSections[]=3&rgSections[]=9` for Dota2 Video and Guides contents.

::: tip
It can also access community hub contents that require a logged-in account.
:::


### Store Search <Site url="store.steampowered.com" size="sm" />

<Route namespace="steam" :data='{"path":"/search/:params","categories":["game"],"example":"/steam/search/sort_by=Released_DESC&tags=492&category1=10&os=linux","parameters":{"params":"Query parameters for a Steam Store search."},"radar":[{"source":["store.steampowered.com","store.steampowered.com/search/:params"]}],"name":"Store Search","maintainers":["moppman"],"location":"search.ts"}' :test='{"code":0}' />

### Sharefile Changelog <Site url="store.steampowered.com" size="sm" />

<Route namespace="steam" :data='{"path":"/sharefile-changelog/:sharefileID/:routeParams?","categories":["game"],"example":"/steam/sharefile-changelog/2851063440/l=schinese","parameters":{"sharefileID":"Steam community sharefile id. Usually refers to a workshop item.","routeParams":"Route parameters."},"radar":[{"title":"Sharefile Changelog","source":["steamcommunity.com/sharedfiles/filedetails/changelog/:sharefileID"],"target":"/sharefile-changelog/:sharefileID"}],"description":"Steam Community Sharefile&#39;s Changelog. Primary used for a workshop item.\nHelpful route parameters:\n- `l=` language parameter, change the language of description.\n- `p=` page parameter, change the results page. p=1 by default.\n","name":"Sharefile Changelog","maintainers":["NyaaaDoge"],"location":"sharefile-changelog.ts"}' :test='{"code":1,"message":"AssertionError: expected [ Array(1) ] to not include &#39;https://steamcommunity.com/sharedfile…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:1143:17)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:920:17)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@5.1.2/node_modules/chai/chai.js:1610:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1753)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)"}' />

Steam Community Sharefile's Changelog. Primary used for a workshop item.
Helpful route parameters:
- `l=` language parameter, change the language of description.
- `p=` page parameter, change the results page. p=1 by default.


## TapTap <Site url="www.taptap.io"/>

::: warning
由于区域限制，需要在有国内 IP 的机器上自建才能正常获取 RSS。而对于《TapTap 国际版》则需要部署在具有海外出口的 IP 上才可正常获取 RSS。
:::

### Game's Changelog <Site url="www.taptap.io" size="sm" />

<Route namespace="taptap" :data='{"path":"/intl/changelog/:id/:lang?","categories":["game"],"example":"/taptap/intl/changelog/191001/zh_TW","parameters":{"id":"Game&#39;s App ID, you may find it from the URL of the Game","lang":"Language, checkout the table below for possible values, default is `en_US`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.taptap.io/app/:id"],"target":"/intl/changelog/:id"}],"name":"Game&#39;s Changelog","maintainers":["hoilc","ETiV"],"description":"Language Code\n\n  | English (US) | 繁體中文 | 한국어 | 日本語 |\n  | ------------ | -------- | ------ | ------ |\n  | en_US       | zh_TW   | ko_KR | ja_JP |","location":"changelog-intl.ts"}' :test='{"code":0}' />

Language Code

  | English (US) | 繁體中文 | 한국어 | 日本語 |
  | ------------ | -------- | ------ | ------ |
  | en_US       | zh_TW   | ko_KR | ja_JP |

### Ratings & Reviews <Site url="www.taptap.io" size="sm" />

<Route namespace="taptap" :data='{"path":"/intl/review/:id/:order?/:lang?","categories":["game"],"example":"/taptap/intl/review/82354/recent","parameters":{"id":"Game&#39;s App ID, you may find it from the URL of the Game","order":"Sort Method, default is `helpful`, checkout the table below for possible values","lang":"Language, checkout the table below for possible values, default is `en_US`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.taptap.io/app/:id/review","www.taptap.io/app/:id"],"target":"/intl/review/:id"}],"name":"Ratings & Reviews","maintainers":["hoilc","TonyRL","ETiV"],"description":"Sort Method\n\n| Most Helpful | Most Recent |\n| ------------ | ----------- |\n| helpful      | recent      |\n\nLanguage Code\n\n| English (US) | 繁體中文 | 한국어 | 日本語 |\n| ------------ | -------- | ------ | ------ |\n| en_US       | zh_TW   | ko_KR | ja_JP |","location":"review-intl.ts"}' :test='{"code":0}' />

Sort Method

| Most Helpful | Most Recent |
| ------------ | ----------- |
| helpful      | recent      |

Language Code

| English (US) | 繁體中文 | 한국어 | 日本語 |
| ------------ | -------- | ------ | ------ |
| en_US       | zh_TW   | ko_KR | ja_JP |

### 游戏更新 <Site url="www.taptap.io" size="sm" />

<Route namespace="taptap" :data='{"path":"/changelog/:id/:lang?","categories":["game"],"example":"/taptap/changelog/60809/en_US","parameters":{"id":"游戏 ID，游戏主页 URL 中获取","lang":"语言，默认使用 `zh_CN`，亦可使用 `en_US`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.taptap.cn/app/:id"],"target":"/changelog/:id"}],"name":"游戏更新","maintainers":["hoilc","ETiV"],"location":"changelog-cn.ts"}' :test='{"code":0}' />

### 游戏评价 <Site url="www.taptap.io" size="sm" />

<Route namespace="taptap" :data='{"path":"/review/:id/:order?/:lang?","categories":["game"],"example":"/taptap/review/142793/hot","parameters":{"id":"游戏 ID，游戏主页 URL 中获取","order":"排序方式，空为综合，可选如下","lang":"语言，`zh-CN` 或 `zh-TW`，默认为 `zh-CN`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.taptap.cn/app/:id/review","www.taptap.cn/app/:id"],"target":"/review/:id"}],"name":"游戏评价","maintainers":["hoilc","TonyRL"],"description":"| 最新   | 综合 |\n| --- | --- |\n| new | hot |","location":"review-cn.ts"}' :test='{"code":0}' />

| 最新   | 综合 |
| --- | --- |
| new | hot |

### 游戏论坛 <Site url="www.taptap.io" size="sm" />

<Route namespace="taptap" :data='{"path":"/topic/:id/:type?/:sort?/:lang?","categories":["game"],"example":"/taptap/topic/142793/official","parameters":{"id":"游戏 ID，游戏主页 URL 中获取","type":"论坛版块，默认显示所有帖子，论坛版块 URL 中 `type` 参数，见下表，默认为 `feed`","sort":"排序，见下表，默认为 `created`","lang":"语言，`zh-CN`或`zh-TW`，默认为`zh-CN`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["taptap.cn/app/:id/topic","taptap.cn/app/:id"],"target":"/topic/:id"}],"name":"游戏论坛","maintainers":["hoilc","TonyRL"],"description":"| 全部 | 精华  | 官方     | 影片  |\n| ---- | ----- | -------- | ----- |\n| feed | elite | official | video |\n\n| 发布时间 | 回复时间  | 默认排序 |\n| -------- | --------- | ------- |\n| created  | commented | default |","location":"topic.ts"}' :test='{"code":0}' />

| 全部 | 精华  | 官方     | 影片  |
| ---- | ----- | -------- | ----- |
| feed | elite | official | video |

| 发布时间 | 回复时间  | 默认排序 |
| -------- | --------- | ------- |
| created  | commented | default |

## War Thunder <Site url="warthunder.com"/>

### News <Site url="warthunder.com/en/news" size="sm" />

<Route namespace="warthunder" :data='{"path":"/news","categories":["game"],"example":"/warthunder/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["warthunder.com/en/news","warthunder.com/"]}],"name":"News","maintainers":["axojhf"],"url":"warthunder.com/en/news","description":"News data from [https://warthunder.com/en/news/](https://warthunder.com/en/news/)\n  The `pubDate` provided under UTC time zone, so please ignore the specific time!!!","location":"news.ts"}' :test='{"code":0}' />

News data from [https://warthunder.com/en/news/](https://warthunder.com/en/news/)
  The `pubDate` provided under UTC time zone, so please ignore the specific time!!!

## World of Warships <Site url="worldofwarships.com"/>

Tip: use proxy if necessary.

### Development Blog <Site url="worldofwarships.com" size="sm" />

<Route namespace="worldofwarships" :data='{"path":"/devblog","categories":["game"],"example":"/worldofwarships/devblog","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["blog.worldofwarships.com"],"target":"/devblog"}],"name":"Development Blog","maintainers":["SinCerely023"],"location":"devblog.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 2043)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

## 电玩巴士 TGBUS <Site url="tgbus.com"/>

### 文章列表 <Site url="tgbus.com" size="sm" />

<Route namespace="tgbus" :data='{"path":"/list/:category","parameters":{"category":"列表分类，见下表"},"categories":["game"],"example":"/tgbus/list/news","radar":[{"source":["www.tgbus.com/list/:category/"],"target":"/list/:category"}],"name":"文章列表","maintainers":["Xzonn"],"description":"| 最新资讯 | 游戏评测 | 游戏视频 | 巴士首页特稿 | 硬件资讯 |\n  | -------- | -------- | -------- | ------------ | -------- |\n  | news     | review   | video    | special      | hardware |","location":"list.ts"}' :test='{"code":0}' />

| 最新资讯 | 游戏评测 | 游戏视频 | 巴士首页特稿 | 硬件资讯 |
  | -------- | -------- | -------- | ------------ | -------- |
  | news     | review   | video    | special      | hardware |

## 二柄 APP <Site url="diershoubing.com"/>

### 新闻 <Site url="diershoubing.com/" size="sm" />

<Route namespace="diershoubing" :data='{"path":"/news","categories":["game"],"example":"/diershoubing/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["diershoubing.com/"]}],"name":"新闻","maintainers":["wushijishan"],"url":"diershoubing.com/","location":"news.ts"}' :test='{"code":0}' />

## 盒心光环 <Site url="xboxfan.com"/>

### 资讯 <Site url="xboxfan.com/" size="sm" />

<Route namespace="xboxfan" :data='{"path":"/news","categories":["game"],"example":"/xboxfan/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["xboxfan.com/"]}],"name":"资讯","maintainers":["XXY233"],"url":"xboxfan.com/","location":"news.ts"}' :test='{"code":0}' />

## 库洛游戏 <Site url="www.kurogames.com"/>

### 鸣潮 — 游戏公告、新闻与活动 <Site url="www.kurogames.com" size="sm" />

<Route namespace="kurogames" :data='{"path":"/wutheringwaves/news","categories":["game"],"example":"/kurogames/wutheringwaves/news","name":"鸣潮 — 游戏公告、新闻与活动","radar":[{"source":["mc.kurogames.com/m/main/news","mc.kurogames.com/main"]}],"maintainers":["enpitsulin"],"description":"","location":"wutheringwaves/news.ts"}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:66:18)\n    at listOnTimeout (node:internal/timers:594:17)\n    at processTimers (node:internal/timers:529:7)"}' />

## 旅法师营地 <Site url="www.iyingdi.com"/>

### Unknown <Site url="www.iyingdi.com" size="sm" />

<Route namespace="lfsyd" :data='{"path":"/tag/:tagId?","radar":[{"source":["mob.iyingdi.com/fine/:tagId"],"target":"/tag/:tagId"}],"name":"Unknown","maintainers":["auto-bot-ty"],"location":"tag.ts"}' :test='undefined' />

### Unknown <Site url="www.iyingdi.com" size="sm" />

<Route namespace="lfsyd" :data='{"path":"/user/:id?","radar":[{"source":["www.iyingdi.com/tz/people/:id","www.iyingdi.com/tz/people/:id/*"],"target":"/user/:id"}],"name":"Unknown","maintainers":["auto-bot-ty"],"location":"user.ts"}' :test='undefined' />

### 首页 <Site url="www.iyingdi.com/" size="sm" />

<Route namespace="lfsyd" :data='{"path":"/home","categories":["game"],"example":"/lfsyd/home","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.iyingdi.com/"]}],"name":"首页","maintainers":["auto-bot-ty"],"url":"www.iyingdi.com/","location":"home.ts"}' :test='{"code":0}' />

### 首页（旧版） <Site url="www.iyingdi.com/" size="sm" />

<Route namespace="lfsyd" :data='{"path":"/old_home","categories":["game"],"example":"/lfsyd/old_home","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.iyingdi.com/"]}],"name":"首页（旧版）","maintainers":["auto-bot-ty"],"url":"www.iyingdi.com/","location":"old-home.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1120)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

## 米哈游 <Site url="genshin.hoyoverse.com"/>

### 崩坏：星穹铁道 <Site url="sr.mihoyo.com/news" size="sm" />

<Route namespace="mihoyo" :data='{"path":"/sr/:location?/:category?","categories":["game"],"example":"/mihoyo/sr","parameters":{"location":"区域，可选 `zh-cn`（国服，简中）或 `zh-tw`（国际服，繁中）","category":"分类，见下表，默认为最新"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["sr.mihoyo.com/news"],"target":"/sr"}],"name":"崩坏：星穹铁道","maintainers":["shinanory"],"url":"sr.mihoyo.com/news","description":"#### 新闻 {#mi-ha-you-beng-huai-xing-qiong-tie-dao-xin-wen}\n\n  | 最新     | 新闻 | 公告   | 活动     |\n  | -------- | ---- | ------ | -------- |\n  | news-all | news | notice | activity |","location":"sr/news.ts"}' :test='{"code":0}' />

#### 新闻 {#mi-ha-you-beng-huai-xing-qiong-tie-dao-xin-wen}

  | 最新     | 新闻 | 公告   | 活动     |
  | -------- | ---- | ------ | -------- |
  | news-all | news | notice | activity |

### 米游社 - 用户关注 <Site url="genshin.hoyoverse.com" size="sm" />

<Route namespace="mihoyo" :data='{"path":"/bbs/follow-list/:uid","categories":["game"],"example":"/mihoyo/bbs/follow-list/77005350","parameters":{"uid":"用户uid"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"米游社 - 用户关注","maintainers":["CaoMeiYouRen"],"location":"bbs/follow-list.ts"}' :test='{"code":0}' />

### 米游社 - 同人榜 <Site url="genshin.hoyoverse.com" size="sm" />

<Route namespace="mihoyo" :data='{"path":"/bbs/img-ranking/:game/:routeParams?","categories":["game"],"example":"/mihoyo/bbs/img-ranking/ys/forumType=tongren&cateType=illustration&rankingType=daily","parameters":{"game":"游戏缩写","routeParams":"额外参数；请参阅以下说明和表格"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["miyoushe.com/:game/imgRanking/:forum_id/:ranking_id/:cate_id"],"target":"/bbs/img-ranking/:game"}],"name":"米游社 - 同人榜","maintainers":["CaoMeiYouRen"],"description":"| 键          | 含义                                  | 接受的值                                                             | 默认值       |\n  | ----------- | ------------------------------------- | -------------------------------------------------------------------- | ------------ |\n  | forumType   | 主榜类型（仅原神、大别野有 cos 主榜） | tongren/cos                                                          | tongren      |\n  | cateType    | 子榜类型（仅崩坏三、原神有子榜）      | 崩坏三：illustration/comic/cos；原神：illustration/comic/qute/manual | illustration |\n  | rankingType | 排行榜类型（崩坏二没有日榜）          | daily/weekly/monthly                                                 | daily        |\n  | lastId      | 当前页 id（用于分页）                 | 数字                                                                 | 1            |\n\n  游戏缩写\n\n  | 崩坏三 | 原神 | 崩坏二 | 未定事件簿 | 星穹铁道 | 大别野 | 绝区零 |\n  | ------ | ---- | ------ | ---------- | -------- | ------ | ------ |\n  | bh3    | ys   | bh2    | wd         | sr       | dby    | zzz    |\n\n  主榜类型\n\n  | 同人榜  | COS 榜 |\n  | ------- | ------ |\n  | tongren | cos    |\n\n  子榜类型\n\n  崩坏三 子榜\n\n  | 插画         | 漫画  | COS |\n  | ------------ | ----- | --- |\n  | illustration | comic | cos |\n\n  原神 子榜\n\n  | 插画         | 漫画  | Q 版 | 手工   |\n  | ------------ | ----- | ---- | ------ |\n  | illustration | comic | qute | manual |\n\n  排行榜类型\n\n  | 日榜  | 周榜   | 月榜    |\n  | ----- | ------ | ------- |\n  | daily | weekly | monthly |","location":"bbs/img-ranking.ts"}' :test='{"code":0}' />

| 键          | 含义                                  | 接受的值                                                             | 默认值       |
  | ----------- | ------------------------------------- | -------------------------------------------------------------------- | ------------ |
  | forumType   | 主榜类型（仅原神、大别野有 cos 主榜） | tongren/cos                                                          | tongren      |
  | cateType    | 子榜类型（仅崩坏三、原神有子榜）      | 崩坏三：illustration/comic/cos；原神：illustration/comic/qute/manual | illustration |
  | rankingType | 排行榜类型（崩坏二没有日榜）          | daily/weekly/monthly                                                 | daily        |
  | lastId      | 当前页 id（用于分页）                 | 数字                                                                 | 1            |

  游戏缩写

  | 崩坏三 | 原神 | 崩坏二 | 未定事件簿 | 星穹铁道 | 大别野 | 绝区零 |
  | ------ | ---- | ------ | ---------- | -------- | ------ | ------ |
  | bh3    | ys   | bh2    | wd         | sr       | dby    | zzz    |

  主榜类型

  | 同人榜  | COS 榜 |
  | ------- | ------ |
  | tongren | cos    |

  子榜类型

  崩坏三 子榜

  | 插画         | 漫画  | COS |
  | ------------ | ----- | --- |
  | illustration | comic | cos |

  原神 子榜

  | 插画         | 漫画  | Q 版 | 手工   |
  | ------------ | ----- | ---- | ------ |
  | illustration | comic | qute | manual |

  排行榜类型

  | 日榜  | 周榜   | 月榜    |
  | ----- | ------ | ------- |
  | daily | weekly | monthly |

### 米游社 - 官方公告 <Site url="genshin.hoyoverse.com" size="sm" />

<Route namespace="mihoyo" :data='{"path":"/bbs/official/:gids/:type?/:page_size?/:last_id?","categories":["game"],"example":"/mihoyo/bbs/official/2/3/20/","parameters":{"gids":"游戏id","type":"公告类型，默认为 2(即 活动)","page_size":"分页大小，默认为 20 ","last_id":"跳过的公告数，例如指定为 40 就是从第 40 条公告开始，可用于分页"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"米游社 - 官方公告","maintainers":["CaoMeiYouRen"],"description":"游戏 id\n\n  | 崩坏三 | 原神 | 崩坏二 | 未定事件簿 | 星穹铁道 | 绝区零 |\n  | ------ | ---- | ------ | ---------- | -------- | ------ |\n  | 1      | 2    | 3      | 4          | 6        | 8      |\n\n  公告类型\n\n  | 公告 | 活动 | 资讯 |\n  | ---- | ---- | ---- |\n  | 1    | 2    | 3    |","location":"bbs/official.ts"}' :test='{"code":1,"message":"AssertionError: expected 301 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1192)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

游戏 id

  | 崩坏三 | 原神 | 崩坏二 | 未定事件簿 | 星穹铁道 | 绝区零 |
  | ------ | ---- | ------ | ---------- | -------- | ------ |
  | 1      | 2    | 3      | 4          | 6        | 8      |

  公告类型

  | 公告 | 活动 | 资讯 |
  | ---- | ---- | ---- |
  | 1    | 2    | 3    |

### 米游社 - 用户关注动态 <Site url="genshin.hoyoverse.com" size="sm" />

<Route namespace="mihoyo" :data='{"path":"/bbs/timeline","categories":["game"],"example":"/mihoyo/bbs/timeline","parameters":{},"features":{"requireConfig":[{"name":"MIHOYO_COOKIE","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["miyoushe.com/:game/timeline"]}],"name":"米游社 - 用户关注动态","maintainers":["CaoMeiYouRen"],"description":"::: warning\n  用户关注动态需要米游社登录后的 Cookie 值，所以只能自建，详情见部署页面的配置模块。\n:::","location":"bbs/timeline.ts"}' :test='undefined' />

::: warning
  用户关注动态需要米游社登录后的 Cookie 值，所以只能自建，详情见部署页面的配置模块。
:::

### 米游社 - 用户帖子 <Site url="genshin.hoyoverse.com" size="sm" />

<Route namespace="mihoyo" :data='{"path":"/bbs/user-post/:uid","categories":["game"],"example":"/mihoyo/bbs/user-post/77005350","parameters":{"uid":"用户uid"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"米游社 - 用户帖子","maintainers":["CaoMeiYouRen"],"location":"bbs/user-post.ts"}' :test='{"code":0}' />

### 原神 <Site url="genshin.hoyoverse.com" size="sm" />

<Route namespace="mihoyo" :data='{"path":"/ys/:location?/:category?","categories":["game"],"example":"/mihoyo/ys","parameters":{"location":"区域，可选 `main`（简中）或 `zh-tw`（繁中）","category":"分类，见下表，默认为最新"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["genshin.hoyoverse.com/:location/news"],"target":"/ys/:location"}],"name":"原神","maintainers":["nczitzk"],"description":"#### 新闻 {#mi-ha-you-yuan-shen-xin-wen}\n\n  | 最新   | 新闻 | 公告   | 活动     |\n  | ------ | ---- | ------ | -------- |\n  | latest | news | notice | activity |","location":"ys/news.ts"}' :test='{"code":0}' />

#### 新闻 {#mi-ha-you-yuan-shen-xin-wen}

  | 最新   | 新闻 | 公告   | 活动     |
  | ------ | ---- | ------ | -------- |
  | latest | news | notice | activity |

## 其乐 <Site url="keylol.com"/>

### 论坛 <Site url="keylol.com" size="sm" />

<Route namespace="keylol" :data='{"path":"/:path","name":"论坛","parameters":{"path":"路径，默认为热点聚焦"},"categories":["game"],"example":"/keylol/f161-1","features":{"requireConfig":[{"name":"KEYLOL_COOKIE","optional":true,"description":"配置后可抓取具有阅读权限的帖子內容"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["keylol.com/:path"]}],"maintainers":["nczitzk","kennyfong19931"],"description":"::: tip\n  若订阅 [热点聚焦](https://keylol.com/f161-1)，网址为 `https://keylol.com/f161-1`。截取 `https://keylol.com/` 到末尾的部分 `f161-1` 作为参数，此时路由为 [`/keylol/f161-1`](https://rsshub.app/keylol/f161-1)。\n  若订阅子分类 [试玩免费 - 热点聚焦](https://keylol.com/forum.php?mod=forumdisplay&fid=161&filter=typeid&typeid=459)，网址为 `https://keylol.com/forum.php?mod=forumdisplay&fid=161&filter=typeid&typeid=459`。提取`fid`及`typeid` 作为参数，此时路由为 [`/keylol/fid=161&typeid=459`](https://rsshub.app/keylol/fid=161&typeid=459)。注意不要包括`filter`，会调用[全局的内容过滤](https://docs.rsshub.app/guide/parameters#filtering)。\n:::","location":"index.ts"}' :test='{"code":1,"message":"Error: Test timed out in 60000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\".\n    at Timeout.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:66:18)\n    at listOnTimeout (node:internal/timers:594:17)\n    at processTimers (node:internal/timers:529:7)"}' />

::: tip
  若订阅 [热点聚焦](https://keylol.com/f161-1)，网址为 `https://keylol.com/f161-1`。截取 `https://keylol.com/` 到末尾的部分 `f161-1` 作为参数，此时路由为 [`/keylol/f161-1`](https://rsshub.app/keylol/f161-1)。
  若订阅子分类 [试玩免费 - 热点聚焦](https://keylol.com/forum.php?mod=forumdisplay&fid=161&filter=typeid&typeid=459)，网址为 `https://keylol.com/forum.php?mod=forumdisplay&fid=161&filter=typeid&typeid=459`。提取`fid`及`typeid` 作为参数，此时路由为 [`/keylol/fid=161&typeid=459`](https://rsshub.app/keylol/fid=161&typeid=459)。注意不要包括`filter`，会调用[全局的内容过滤](https://docs.rsshub.app/guide/parameters#filtering)。
:::

## 全球游戏交流中心 <Site url="www.gamer520.com"/>

### 文章 <Site url="www.gamer520.com/" size="sm" />

<Route namespace="gamer520" :data='{"path":"/:category?/:order?","categories":["game"],"example":"/gamer520/switchyouxi","parameters":{"category":"分类，见下表","order":"排序，发布日期: date; 修改日期: modified"},"features":{"antiCrawler":true},"name":"文章","maintainers":["xzzpig"],"url":"www.gamer520.com/","description":"分类\n\n  | 所有 | Switch 游戏下载 | 金手指     | 3A 巨作 | switch 主题 | PC 游戏 |\n  | ---- | --------------- | ---------- | ------- | ----------- | ------- |\n  | all  | switchyouxi     | jinshouzhi | 3ajuzuo | zhuti       | pcgame  |","location":"index.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 655)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

分类

  | 所有 | Switch 游戏下载 | 金手指     | 3A 巨作 | switch 主题 | PC 游戏 |
  | ---- | --------------- | ---------- | ------- | ----------- | ------- |
  | all  | switchyouxi     | jinshouzhi | 3ajuzuo | zhuti       | pcgame  |

## 少女前线 <Site url="sunborngame.com"/>

### 情报局 <Site url="sunborngame.com" size="sm" />

<Route namespace="gf-cn" :data='{"path":"/news/:category?","categories":["game"],"example":"/gf-cn/news","parameters":{"category":"分类，见下表，默认为新闻"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["sunborngame.com/:category","sunborngame.com/"]}],"name":"情报局","maintainers":["nczitzk"],"description":"| 新闻 | 公告 |\n  | ---- | ---- |\n  | 1    | 3    |","location":"news.ts"}' :test='undefined' />

| 新闻 | 公告 |
  | ---- | ---- |
  | 1    | 3    |

## 腾讯网 <Site url="qq.com"/>

### 穿越火线 CFHD 专区资讯中心 <Site url="cfhd.cf.qq.com" size="sm" />

<Route namespace="qq" :data='{"path":"/cfhd/news/:category?","name":"穿越火线 CFHD 专区资讯中心","url":"cfhd.cf.qq.com","maintainers":["nczitzk"],"example":"/qq/cfhd/news","parameters":{"category":"分类，默认为 60847，即最新，可在对应分类页 URL 中找到"},"description":"::: tip\n  若订阅 [穿越火线 CFHD 专区资讯中心 - 最新](https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/60847/m22510/list_1.shtml)，网址为 `https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/60847/m22510/list_1.shtml`。截取 `https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/` 到末尾 `/m22510/list_1.shtml` 的部分 `60847` 作为参数填入，此时路由为 [`/qq/cfhd/news/60847`](https://rsshub.app/qq/cfhd/news/60847)。\n:::\n\n  | 分类                                                                                                  | ID                                            |\n  | ----------------------------------------------------------------------------------------------------- | --------------------------------------------- |\n  | [最新](https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/60847/m22510/list_1.shtml) | [60847](https://rsshub.app/qq/cfhd/news/60847) |\n  | [公告](https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/59625/m22510/list_1.shtml) | [59625](https://rsshub.app/qq/cfhd/news/59625) |\n  | [版本](https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/60850/m22510/list_1.shtml) | [60850](https://rsshub.app/qq/cfhd/news/60850) |\n  | [赛事](https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/59626/m22510/list_1.shtml) | [59626](https://rsshub.app/qq/cfhd/news/59626) |\n  | [杂谈](https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/59624/m22510/list_1.shtml) | [59624](https://rsshub.app/qq/cfhd/news/59624) |\n  ","categories":["game"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"title":"穿越火线 CFHD 专区资讯中心 - 最新","source":["cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/60847/m22510/list_1.shtml"],"target":"/cfhd/news/60847"},{"title":"穿越火线 CFHD 专区资讯中心 - 公告","source":["cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/59625/m22510/list_1.shtml"],"target":"/cfhd/news/59625"},{"title":"穿越火线 CFHD 专区资讯中心 - 版本","source":["cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/60850/m22510/list_1.shtml"],"target":"/cfhd/news/60850"},{"title":"穿越火线 CFHD 专区资讯中心 - 赛事","source":["cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/59626/m22510/list_1.shtml"],"target":"/cfhd/news/59626"},{"title":"穿越火线 CFHD 专区资讯中心 - 杂谈","source":["cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/59624/m22510/list_1.shtml"],"target":"/cfhd/news/59624"}],"location":"cfhd/index.ts"}' :test='{"code":0}' />

::: tip
  若订阅 [穿越火线 CFHD 专区资讯中心 - 最新](https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/60847/m22510/list_1.shtml)，网址为 `https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/60847/m22510/list_1.shtml`。截取 `https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/` 到末尾 `/m22510/list_1.shtml` 的部分 `60847` 作为参数填入，此时路由为 [`/qq/cfhd/news/60847`](https://rsshub.app/qq/cfhd/news/60847)。
:::

  | 分类                                                                                                  | ID                                            |
  | ----------------------------------------------------------------------------------------------------- | --------------------------------------------- |
  | [最新](https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/60847/m22510/list_1.shtml) | [60847](https://rsshub.app/qq/cfhd/news/60847) |
  | [公告](https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/59625/m22510/list_1.shtml) | [59625](https://rsshub.app/qq/cfhd/news/59625) |
  | [版本](https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/60850/m22510/list_1.shtml) | [60850](https://rsshub.app/qq/cfhd/news/60850) |
  | [赛事](https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/59626/m22510/list_1.shtml) | [59626](https://rsshub.app/qq/cfhd/news/59626) |
  | [杂谈](https://cfhd.cf.qq.com/webplat/info/news_version3/37427/59139/59140/59624/m22510/list_1.shtml) | [59624](https://rsshub.app/qq/cfhd/news/59624) |
  

### 英雄联盟新闻 <Site url="lol.qq.com" size="sm" />

<Route namespace="qq" :data='{"path":"/lol/news/:category?","name":"英雄联盟新闻","url":"lol.qq.com","maintainers":["nczitzk"],"example":"/qq/lol/news","parameters":{"category":"分类，默认为 `23`，即综合，见下表"},"description":":::tip\n若订阅 [英雄联盟首页新闻列表 - 公告](https://lol.qq.com/news/index.shtml)，网址为 `https://lol.qq.com/news/index.shtml`，请选择 `24` 作为 `category` 参数填入，此时目标路由为 [`/qq/lol/news/24`](https://rsshub.app/qq/lol/news/24)。\n:::\n\n| 综合 | 公告 | 赛事 | 攻略 | 社区 |\n| ---- | ---- | ---- | ---- | ---- |\n| 23   | 24   | 25   | 27   | 28   |\n","categories":["game"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"title":"综合","source":["lol.qq.com/news/index.shtml"],"target":"/lol/news/23"},{"title":"公告","source":["lol.qq.com/news/index.shtml"],"target":"/lol/news/24"},{"title":"赛事","source":["lol.qq.com/news/index.shtml"],"target":"/lol/news/25"},{"title":"攻略","source":["lol.qq.com/news/index.shtml"],"target":"/lol/news/27"},{"title":"社区","source":["lol.qq.com/news/index.shtml"],"target":"/lol/news/28"}],"view":0,"location":"lol/news.ts"}' :test='{"code":0}' />

:::tip
若订阅 [英雄联盟首页新闻列表 - 公告](https://lol.qq.com/news/index.shtml)，网址为 `https://lol.qq.com/news/index.shtml`，请选择 `24` 作为 `category` 参数填入，此时目标路由为 [`/qq/lol/news/24`](https://rsshub.app/qq/lol/news/24)。
:::

| 综合 | 公告 | 赛事 | 攻略 | 社区 |
| ---- | ---- | ---- | ---- | ---- |
| 23   | 24   | 25   | 27   | 28   |


## 腾讯 <Site url="tencent.com"/>

### 新闻中心 <Site url="tencent.com" size="sm" />

<Route namespace="tencent" :data='{"path":"/pvp/newsindex/:type","categories":["game"],"example":"/tencent/pvp/newsindex/all","parameters":{"type":"栏目分类，见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"新闻中心","maintainers":["Jeason0228","HenryQW"],"description":"| 全部 | 热门 | 新闻 | 公告 | 活动 | 赛事 | 优化 |\n  | ---- | ---- | ---- | ---- | ---- | ---- | ---- |\n  | all  | rm   | xw   | gg   | hd   | ss   | yh   |","location":"pvp/newsindex.ts"}' :test='{"code":1,"message":"AssertionError: expected [ …(12) ] to not include &#39;https://pvp.qq.com/web201706/newsdeta…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:1143:17)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@2.0.5/node_modules/@vitest/expect/dist/index.js:920:17)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@5.1.2/node_modules/chai/chai.js:1610:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1824)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)"}' />

| 全部 | 热门 | 新闻 | 公告 | 活动 | 赛事 | 优化 |
  | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
  | all  | rm   | xw   | gg   | hd   | ss   | yh   |

## 完美世界电竞 <Site url="wmpvp.com"/>

### 资讯列表 <Site url="wmpvp.com" size="sm" />

<Route namespace="wmpvp" :data='{"path":"/news/:type","categories":["game"],"example":"/wmpvp/news/1","parameters":{"type":"资讯分类，见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"资讯列表","maintainers":["tssujt"],"description":"| DOTA2 | CS2 |\n  | ----- | --- |\n  | 1     | 2   |","location":"index.ts"}' :test='{"code":0}' />

| DOTA2 | CS2 |
  | ----- | --- |
  | 1     | 2   |

## 网易公开课 <Site url="163.com"/>

::: tip
部分歌单及听歌排行信息为登陆后可见，自建时将环境变量`NCM_COOKIES`设为登陆后的 Cookie 值，即可正常获取。
:::

### 用户发帖 <Site url="163.com" size="sm" />

<Route namespace="163" :data='{"path":"/ds/:id","categories":["game"],"example":"/163/ds/63dfbaf4117741daaf73404601165843","parameters":{"id":"用户ID"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ds.163.com/user/:id"]}],"name":"用户发帖","maintainers":["luyuhuang"],"location":"ds.ts"}' :test='undefined' />

## 小黑盒 <Site url="xiaoheihe.cn"/>

### 喜加一 <Site url="xiaoheihe.cn" size="sm" />

<Route namespace="xiaoheihe" :data='{"path":"/add2cart/:platform","categories":["game"],"example":"/xiaoheihe/add2cart/epic","parameters":{"platform":"平台名：epic、steam或gog"},"name":"喜加一","maintainers":["ladeng07"],"location":"add2cart.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 2063)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### 用户动态 <Site url="xiaoheihe.cn" size="sm" />

<Route namespace="xiaoheihe" :data='{"path":"/user/:id","categories":["game"],"example":"/xiaoheihe/user/30664023","parameters":{"id":"用户 ID"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"用户动态","maintainers":["tssujt"],"location":"user.ts"}' :test='{"code":0}' />

### 游戏折扣 <Site url="xiaoheihe.cn" size="sm" />

<Route namespace="xiaoheihe" :data='{"path":"/discount/:platform","categories":["game"],"example":"/xiaoheihe/discount/pc","parameters":{"platform":"平台分类，见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"游戏折扣","maintainers":["tssujt"],"description":"| PC  | Switch  | PSN   | Xbox |\n  | ----- | ------ | ----- | ----- |\n  | pc    | switch | psn   | xbox  |","location":"discount.ts"}' :test='{"code":0}' />

| PC  | Switch  | PSN   | Xbox |
  | ----- | ------ | ----- | ----- |
  | pc    | switch | psn   | xbox  |

### 游戏新闻 <Site url="xiaoheihe.cn" size="sm" />

<Route namespace="xiaoheihe" :data='{"path":"/news","categories":["game"],"example":"/xiaoheihe/news","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"游戏新闻","maintainers":["tssujt"],"location":"news.ts"}' :test='{"code":0}' />

## 英雄联盟 <Site url="lol.garena.tw"/>

### 台服新闻 <Site url="lol.garena.tw" size="sm" />

<Route namespace="loltw" :data='{"path":"/news/:category?","categories":["game"],"example":"/loltw/news","parameters":{"category":"新闻分类，置空为全部新闻"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"台服新闻","maintainers":["hoilc"],"description":"| 活动  | 资讯 | 系统   | 电竞   | 版本资讯 | 战棋资讯 |\n  | ----- | ---- | ------ | ------ | -------- | -------- |\n  | event | info | system | esport | patch    | TFTpatch |","location":"news.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 1142)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

| 活动  | 资讯 | 系统   | 电竞   | 版本资讯 | 战棋资讯 |
  | ----- | ---- | ------ | ------ | -------- | -------- |
  | event | info | system | esport | patch    | TFTpatch |

## 鹰角网络 <Site url="www.hypergryph.com"/>

### 明日方舟 - 游戏内公告 <Site url="www.hypergryph.com" size="sm" />

<Route namespace="hypergryph" :data='{"path":"/arknights/announce/:platform?/:group?","categories":["game"],"example":"/hypergryph/arknights/announce","parameters":{"platform":"平台，默认为 Android","group":"分组，默认为 ALL"},"name":"明日方舟 - 游戏内公告","maintainers":["swwind"],"description":"平台\n\n  |  安卓服 | iOS 服 |   B 服   |\n  | :-----: | :----: | :------: |\n  | Android |   IOS  | Bilibili |\n\n  分组\n\n  | 全部 | 系统公告 | 活动公告 |\n  | :--: | :------: | :------: |\n  |  ALL |  SYSTEM  | ACTIVITY |","location":"arknights/announce.ts"}' :test='{"code":1,"message":"AssertionError: expected -29459984590 to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 936)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)"}' />

平台

  |  安卓服 | iOS 服 |   B 服   |
  | :-----: | :----: | :------: |
  | Android |   IOS  | Bilibili |

  分组

  | 全部 | 系统公告 | 活动公告 |
  | :--: | :------: | :------: |
  |  ALL |  SYSTEM  | ACTIVITY |

### 明日方舟 - 游戏公告与新闻 <Site url="ak-conf.hypergryph.com/news" size="sm" />

<Route namespace="hypergryph" :data='{"path":"/arknights/news/:group?","categories":["game"],"example":"/hypergryph/arknights/news","parameters":{"group":"分组，默认为 `ALL`"},"radar":[{"source":["ak-conf.hypergryph.com/news"]}],"name":"明日方舟 - 游戏公告与新闻","maintainers":["Astrian"],"url":"ak-conf.hypergryph.com/news","description":"\n  | 全部 | 最新   | 公告         | 活动     | 新闻 |\n  | ---- | ------ | ------------ | -------- | ---- |\n  | ALL  | LATEST | ANNOUNCEMENT | ACTIVITY | NEWS |","location":"arknights/news.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 939)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />


  | 全部 | 最新   | 公告         | 活动     | 新闻 |
  | ---- | ------ | ------------ | -------- | ---- |
  | ALL  | LATEST | ANNOUNCEMENT | ACTIVITY | NEWS |

### 期刊 <Site url="aneot.arktca.com" size="sm" />

<Route namespace="hypergryph" :data='{"path":"/arknights/arktca","categories":["game"],"example":"/hypergryph/arknights/arktca","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"期刊","url":"aneot.arktca.com","maintainers":["Bendancom"],"radar":[{"source":["aneot.arktca.com"]}],"description":"期刊《回归线》 | 泰拉创作者联合会","location":"arknights/arktca.ts"}' :test='{"code":0}' />

期刊《回归线》 | 泰拉创作者联合会

### アークナイツ (日服新闻) <Site url="ak.arknights.jp/news" size="sm" />

<Route namespace="hypergryph" :data='{"path":"/arknights/japan","categories":["game"],"example":"/hypergryph/arknights/japan","radar":[{"source":["ak.arknights.jp/news","ak.arknights.jp/"]}],"name":"アークナイツ (日服新闻)","maintainers":["ofyark"],"url":"ak.arknights.jp/news","location":"arknights/japan.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 938)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

## 游戏星辰 <Site url="www.2023game.com"/>

### 游戏星辰 <Site url="www.2023game.com/" size="sm" />

<Route namespace="2023game" :data='{"path":"/:category?/:tab?","categories":["game"],"example":"/2023game/sgame/topicList","parameters":{"category":"分类，见下表","tab":"标签, 所有:all;最新:topicList;热门:jhcpb"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"游戏星辰","maintainers":["xzzpig"],"url":"www.2023game.com/","description":"分类\n\n  | PS4游戏 | switch游戏 | 3DS游戏 | PSV游戏 | Xbox360 | PS3游戏 | 世嘉MD/SS | PSP游戏 | PC周边 | 怀旧掌机 | 怀旧主机 | PS4教程 | PS4金手指 | switch金手指 | switch教程 | switch补丁 | switch主题 | switch存档 |\n  | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |\n  | ps4 | sgame | 3ds | psv | jiaocheng | ps3yx | zhuji.md | zhangji.psp | pcgame | zhangji | zhuji | ps4.psjc | ps41.ps4pkg | nsaita.cundang | nsaita.pojie | nsaita.buding | nsaita.zhutie | nsaita.zhuti |","location":"index.ts"}' :test='undefined' />

分类

  | PS4游戏 | switch游戏 | 3DS游戏 | PSV游戏 | Xbox360 | PS3游戏 | 世嘉MD/SS | PSP游戏 | PC周边 | 怀旧掌机 | 怀旧主机 | PS4教程 | PS4金手指 | switch金手指 | switch教程 | switch补丁 | switch主题 | switch存档 |
  | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
  | ps4 | sgame | 3ds | psv | jiaocheng | ps3yx | zhuji.md | zhangji.psp | pcgame | zhangji | zhuji | ps4.psjc | ps41.ps4pkg | nsaita.cundang | nsaita.pojie | nsaita.buding | nsaita.zhutie | nsaita.zhuti |

## 游侠网 <Site url="ali213.net"/>

### 大侠号 <Site url="www.ali213.net" size="sm" />

<Route namespace="ali213" :data='{"path":"/zl/:category?","name":"大侠号","url":"www.ali213.net","maintainers":["nczitzk"],"example":"/ali213/zl","parameters":{"category":"分类，默认为首页，可在对应分类页 URL 中找到"},"description":"::: tip\n若订阅 [游戏](https://www.ali213.net/news/zl/game/)，网址为 `https://www.ali213.net/news/zl/game/`，请截取 `https://www.ali213.net/news/zl/` 到末尾 `/` 的部分 `game` 作为 `category` 参数填入，此时目标路由为 [`/ali213/zl/game`](https://rsshub.app/ali213/zl/game)。\n:::\n\n| 首页                                     | 游戏                                         | 动漫                                           | 影视                                           | 娱乐                                           |\n| ---------------------------------------- | -------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |\n| [index](https://www.ali213.net/news/zl/) | [game](https://www.ali213.net/news/zl/game/) | [comic](https://www.ali213.net/news/zl/comic/) | [movie](https://www.ali213.net/news/zl/movie/) | [amuse](https://www.ali213.net/news/zl/amuse/) |\n","categories":["game"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.ali213.net/news/zl/:category"]},{"title":"首页","source":["www.ali213.net/news/zl/"],"target":"/zl"},{"title":"游戏","source":["www.ali213.net/news/zl/game/"],"target":"/zl/game"},{"title":"动漫","source":["www.ali213.net/news/zl/comic/"],"target":"/zl/comic"},{"title":"影视","source":["www.ali213.net/news/zl/movie/"],"target":"/zl/movie"},{"title":"娱乐","source":["www.ali213.net/news/zl/amuse/"],"target":"/zl/amuse"}],"view":0,"location":"zl.ts"}' :test='{"code":0}' />

::: tip
若订阅 [游戏](https://www.ali213.net/news/zl/game/)，网址为 `https://www.ali213.net/news/zl/game/`，请截取 `https://www.ali213.net/news/zl/` 到末尾 `/` 的部分 `game` 作为 `category` 参数填入，此时目标路由为 [`/ali213/zl/game`](https://rsshub.app/ali213/zl/game)。
:::

| 首页                                     | 游戏                                         | 动漫                                           | 影视                                           | 娱乐                                           |
| ---------------------------------------- | -------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| [index](https://www.ali213.net/news/zl/) | [game](https://www.ali213.net/news/zl/game/) | [comic](https://www.ali213.net/news/zl/comic/) | [movie](https://www.ali213.net/news/zl/movie/) | [amuse](https://www.ali213.net/news/zl/amuse/) |


### 资讯 <Site url="www.ali213.net" size="sm" />

<Route namespace="ali213" :data='{"path":"/news/:category?","name":"资讯","url":"www.ali213.net","maintainers":["nczitzk"],"example":"/ali213/news/new","parameters":{"category":"分类，默认为 `new`，即最新资讯，可在对应分类页 URL 中找到"},"description":"::: tip\n若订阅 [游戏资讯](https://www.ali213.net/news/game/)，网址为 `https://www.ali213.net/news/game/`，请截取 `https://www.ali213.net/news/` 到末尾 `/` 的部分 `game` 作为 `category` 参数填入，此时目标路由为 [`/ali213/news/game`](https://rsshub.app/ali213/news/game)。\n:::\n\n| 分类名称 | 分类 ID |\n| -------- | ------- |\n| 最新资讯 | new     |\n| 评测     | pingce  |\n| 游戏     | game    |\n| 动漫     | comic   |\n| 影视     | movie   |\n| 科技     | tech    |\n| 电竞     | esports |\n| 娱乐     | amuse   |\n| 手游     | mobile  |\n","categories":["game"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.ali213.net/news/:category"]},{"title":"最新资讯","source":["www.ali213.net/news/new"],"target":"/news/new"},{"title":"评测","source":["www.ali213.net/news/pingce"],"target":"/news/pingce"},{"title":"游戏","source":["www.ali213.net/news/game"],"target":"/news/game"},{"title":"动漫","source":["www.ali213.net/news/comic"],"target":"/news/comic"},{"title":"影视","source":["www.ali213.net/news/movie"],"target":"/news/movie"},{"title":"科技","source":["www.ali213.net/news/tech"],"target":"/news/tech"},{"title":"电竞","source":["www.ali213.net/news/esports"],"target":"/news/esports"},{"title":"娱乐","source":["www.ali213.net/news/amuse"],"target":"/news/amuse"},{"title":"手游","source":["www.ali213.net/news/mobile"],"target":"/news/mobile"}],"view":0,"location":"news.ts"}' :test='{"code":0}' />

::: tip
若订阅 [游戏资讯](https://www.ali213.net/news/game/)，网址为 `https://www.ali213.net/news/game/`，请截取 `https://www.ali213.net/news/` 到末尾 `/` 的部分 `game` 作为 `category` 参数填入，此时目标路由为 [`/ali213/news/game`](https://rsshub.app/ali213/news/game)。
:::

| 分类名称 | 分类 ID |
| -------- | ------- |
| 最新资讯 | new     |
| 评测     | pingce  |
| 游戏     | game    |
| 动漫     | comic   |
| 影视     | movie   |
| 科技     | tech    |
| 电竞     | esports |
| 娱乐     | amuse   |
| 手游     | mobile  |


## 游戏基因 <Site url="news.gamegene.cn"/>

### 资讯 <Site url="news.gamegene.cn/news" size="sm" />

<Route namespace="gamegene" :data='{"path":"/news","categories":["game"],"example":"/gamegene/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["news.gamegene.cn/news"]}],"name":"资讯","maintainers":["lone1y-51"],"url":"news.gamegene.cn/news","location":"news.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 650)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

## 游讯网 <Site url="yxdown.com"/>

### 精彩推荐 <Site url="yxdown.com/" size="sm" />

<Route namespace="yxdown" :data='{"path":"/recommend","categories":["game"],"example":"/yxdown/recommend","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yxdown.com/"]}],"name":"精彩推荐","maintainers":["nczitzk"],"url":"yxdown.com/","location":"recommend.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 2136)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

### 资讯 <Site url="yxdown.com" size="sm" />

<Route namespace="yxdown" :data='{"path":"/news/:category?","categories":["game"],"example":"/yxdown/news","parameters":{"category":"分类，见下表，默认为资讯首页"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"资讯","maintainers":["nczitzk"],"description":"| 资讯首页 | 业界动态 | 视频预告 | 新作发布 | 游戏资讯 | 游戏评测 | 网络游戏 | 手机游戏 |\n  | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |\n  |          | dongtai  | yugao    | xinzuo   | zixun    | pingce   | wangluo  | shouyou  |","location":"news.ts"}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 2135)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

| 资讯首页 | 业界动态 | 视频预告 | 新作发布 | 游戏资讯 | 游戏评测 | 网络游戏 | 手机游戏 |
  | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
  |          | dongtai  | yugao    | xinzuo   | zixun    | pingce   | wangluo  | shouyou  |

## 游戏打折情报 <Site url="yxdzqb.com"/>

### 游戏折扣 <Site url="yxdzqb.com/" size="sm" />

<Route namespace="yxdzqb" :data='{"path":"/:type","categories":["game"],"example":"/yxdzqb/popular_cn","parameters":{"type":"折扣类型"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yxdzqb.com/"]}],"name":"游戏折扣","maintainers":["LogicJake","nczitzk"],"url":"yxdzqb.com/","description":"| Steam 最新折扣 | Steam 热门游戏折扣 | Steam 热门中文游戏折扣 | Steam 历史低价 | Steam 中文游戏历史低价 |\n  | -------------- | ------------------ | ---------------------- | -------------- | ---------------------- |\n  | discount       | popular            | popular_cn            | low            | low_cn                |","location":"index.ts"}' :test='{"code":0}' />

| Steam 最新折扣 | Steam 热门游戏折扣 | Steam 热门中文游戏折扣 | Steam 历史低价 | Steam 中文游戏历史低价 |
  | -------------- | ------------------ | ---------------------- | -------------- | ---------------------- |
  | discount       | popular            | popular_cn            | low            | low_cn                |

## 游戏日报 <Site url="news.yxrb.net"/>

### 分类 <Site url="news.yxrb.net" size="sm" />

<Route namespace="yxrb" :data='{"path":"/:category?","categories":["game"],"example":"/yxrb/info","parameters":{"category":"分类，见下表，预设为 `info`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["news.yxrb.net/:category","news.yxrb.net/"],"target":"/:category"}],"name":"分类","maintainers":["TonyRL"],"description":"| 资讯 | 访谈    | 服务    | 游理游据 |\n  | ---- | ------- | ------- | -------- |\n  | info | talking | service | comments |","location":"home.ts"}' :test='{"code":0}' />

| 资讯 | 访谈    | 服务    | 游理游据 |
  | ---- | ------- | ------- | -------- |
  | info | talking | service | comments |

## 游研社 <Site url="yystv.cn"/>

### 游研社 - 分类文章 <Site url="yystv.cn" size="sm" />

<Route namespace="yystv" :data='{"path":"/category/:category","categories":["game"],"example":"/yystv/category/recommend","parameters":{"category":"专栏类型"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"游研社 - 分类文章","maintainers":["LightStrawberry"],"description":"| 推游      | 游戏史  | 大事件 | 文化    | 趣闻 | 经典回顾 |\n  | --------- | ------- | ------ | ------- | ---- | -------- |\n  | recommend | history | big    | culture | news | retro    |","location":"category.ts"}' :test='{"code":1,"message":"AssertionError: expected &#39;RSSHub&#39; not to be &#39;RSSHub&#39; // Object.is equality\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:43:30)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at runTest (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:960:11)\n    at async Promise.all (index 2141)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1102:13)\n    at runSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1116:15)\n    at runFiles (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1173:5)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@2.0.5/node_modules/@vitest/runner/dist/index.js:1182:3)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:130:11\n    at withEnv (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:94:5)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/runBaseTests.CyvqmuC9.js:116:3)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/chunks/base.CC5R_kgU.js:31:3)\n    at ForksBaseWorker.executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/workers/forks.js:25:7)\n    at execute (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@2.0.5_@types+node@22.10.7_jsdom@26.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10_/node_modules/vitest/dist/worker.js:115:5)\n    at onMessage (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/tinypool@1.0.1/node_modules/tinypool/dist/entry/process.js:55:20)"}' />

| 推游      | 游戏史  | 大事件 | 文化    | 趣闻 | 经典回顾 |
  | --------- | ------- | ------ | ------- | ---- | -------- |
  | recommend | history | big    | culture | news | retro    |

### 游研社 - 全部文章 <Site url="yystv.cn/docs" size="sm" />

<Route namespace="yystv" :data='{"path":"/docs","categories":["game"],"example":"/yystv/docs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yystv.cn/docs"]}],"name":"游研社 - 全部文章","maintainers":["HaitianLiu","yy4382"],"url":"yystv.cn/docs","location":"docs.ts"}' :test='{"code":0}' />

## 遊戲基地 Gamebase <Site url="news.gamebase.com.tw"/>

### 新聞 <Site url="news.gamebase.com.tw" size="sm" />

<Route namespace="gamebase" :data='{"path":"/news/:type?/:category?","name":"新聞","url":"news.gamebase.com.tw","maintainers":["nczitzk"],"example":"/gamebase/news","parameters":{"type":"類型，見下表，預設為 newslist","category":"分類，預設為 `all`，即全部，可在對應分類頁 URL 中找到"},"description":":::tip\n若訂閱 [手機遊戲新聞](https://news.gamebase.com.tw/news/newslist?type=mobile)，網址為 `https://news.gamebase.com.tw/news/newslist?type=mobile`，請截取 `https://news.gamebase.com.tw/news/` 到末尾的部分 `newslist` 作為 `type` 參數填入，`mobile` 作為 `category` 參數填入，此時目標路由為 [`/gamebase/news/newslist/mobile`](https://rsshub.app/gamebase/news/newslist/mobile)。\n:::\n\n| newslist | r18list |\n| -------- | ------- |\n","categories":["game"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["news.gamebase.com.tw/news","news.gamebase.com.tw/news/:type"]}],"view":0,"zh":{"path":"/news/:type?/:category?","name":"新闻","url":"news.gamebase.com.tw","maintainers":["nczitzk"],"example":"/gamebase/news","parameters":{"type":"类型，见下表，默认为 newslist","category":"分类，默认为 `all`，即全部，可在对应分类页 URL 中找到"},"description":":::tip\n若订阅 [手机游戏新闻](https://news.gamebase.com.tw/news/newslist?type=mobile)，网址为 `https://news.gamebase.com.tw/news/newslist?type=mobile`，请截取 `https://news.gamebase.com.tw/news/` 到末尾的部分 `newslist` 作为 `type` 参数填入，`mobile` 作为 `category` 参数填入，此时目标路由为 [`/gamebase/news/newslist/mobile`](https://rsshub.app/gamebase/news/newslist/mobile)。\n:::\n\n| newslist | r18list |\n| -------- | ------- |\n"},"location":"news.ts"}' :test='{"code":0}' />

:::tip
若訂閱 [手機遊戲新聞](https://news.gamebase.com.tw/news/newslist?type=mobile)，網址為 `https://news.gamebase.com.tw/news/newslist?type=mobile`，請截取 `https://news.gamebase.com.tw/news/` 到末尾的部分 `newslist` 作為 `type` 參數填入，`mobile` 作為 `category` 參數填入，此時目標路由為 [`/gamebase/news/newslist/mobile`](https://rsshub.app/gamebase/news/newslist/mobile)。
:::

| newslist | r18list |
| -------- | ------- |


## ファミ通 <Site url="famitsu.com"/>

### Category <Site url="famitsu.com" size="sm" />

<Route namespace="famitsu" :data='{"path":"/category/:category?","categories":["game"],"example":"/famitsu/category/new-article","parameters":{"category":"Category, see table below, `new-article` by default"},"radar":[{"source":["www.famitsu.com/category/:category/page/1"]}],"name":"Category","maintainers":["TonyRL"],"description":"| 新着        | Switch | PS5 | PS4 | PC ゲーム | ニュース | 動画   | 特集・企画記事  | インタビュー | 取材・リポート | レビュー | インディーゲーム |\n  | ----------- | ------ | --- | --- | --------- | -------- | ------ | --------------- | ------------ | -------------- | -------- | ---------------- |\n  | new-article | switch | ps5 | ps4 | pc-game   | news     | videos | special-article | interview    | event-report   | review   | indie-game       |","location":"category.ts"}' :test='{"code":0}' />

| 新着        | Switch | PS5 | PS4 | PC ゲーム | ニュース | 動画   | 特集・企画記事  | インタビュー | 取材・リポート | レビュー | インディーゲーム |
  | ----------- | ------ | --- | --- | --------- | -------- | ------ | --------------- | ------------ | -------------- | -------- | ---------------- |
  | new-article | switch | ps5 | ps4 | pc-game   | news     | videos | special-article | interview    | event-report   | review   | indie-game       |

