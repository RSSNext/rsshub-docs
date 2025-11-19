# 🛍️ Shopping

## 什么值得买 <Site url="post.smzdm.com"/>

::: tip
网站也提供了部分 RSS: [https://www.smzdm.com/dingyue](https://www.smzdm.com/dingyue)
:::

### 排行榜 <Site url="post.smzdm.com" size="sm" />

<Route namespace="smzdm" :data='{"path":"/ranking/:rank_type/:rank_id/:hour","categories":["shopping","popular"],"view":5,"example":"/smzdm/ranking/pinlei/11/3","parameters":{"rank_type":{"description":"榜单类型","options":[{"value":"pinlei","label":"好价品类榜"},{"value":"dianshang","label":"好价电商榜"},{"value":"haitao","label":"海淘 TOP 榜"},{"value":"haowen","label":"好文排行榜"},{"value":"haowu","label":"好物排行榜"}]},"rank_id":{"description":"榜单ID","options":[{"label":"好价品类榜-全部","value":"11"},{"label":"好价品类榜-食品生鲜","value":"12"},{"label":"好价品类榜-电脑数码","value":"13"},{"label":"好价品类榜-运动户外","value":"14"},{"label":"好价品类榜-家用电器","value":"15"},{"label":"好价品类榜-白菜","value":"17"},{"label":"好价品类榜-服饰鞋包","value":"74"},{"label":"好价品类榜-日用百货","value":"75"},{"label":"好价电商榜-券活动","value":"24"},{"label":"好价电商榜-京东","value":"23"},{"label":"好价电商榜-天猫","value":"25"},{"label":"好价电商榜-亚马逊中国","value":"26"},{"label":"好价电商榜-国美在线","value":"27"},{"label":"好价电商榜-苏宁易购","value":"28"},{"label":"好价电商榜-网易","value":"29"},{"label":"好价电商榜-西集网","value":"30"},{"label":"好价电商榜-美国亚马逊","value":"31"},{"label":"好价电商榜-日本亚马逊","value":"32"},{"label":"好价电商榜-ebay","value":"33"},{"label":"海淘 TOP 榜-全部","value":"39"},{"label":"海淘 TOP 榜-海外直邮","value":"34"},{"label":"海淘 TOP 榜-美国榜","value":"35"},{"label":"海淘 TOP 榜-欧洲榜","value":"36"},{"label":"海淘 TOP 榜-澳新榜","value":"37"},{"label":"海淘 TOP 榜-亚洲榜","value":"38"},{"label":"海淘 TOP 榜-晒物榜","value":"hsw"},{"label":"好文排行榜-原创","value":"yc"},{"label":"好文排行榜-资讯","value":"zx"},{"label":"好物排行榜-新晋榜","value":"hwall"},{"label":"好物排行榜-消费众测","value":"zc"},{"label":"好物排行榜-新锐品牌","value":"nb"},{"label":"好物排行榜-好物榜单","value":"hw"}]},"hour":{"description":"时间跨度","options":[{"value":"3","label":"3 小时"},{"value":"12","label":"12 小时"},{"value":"24","label":"24 小时"}]}},"features":{"requireConfig":[{"name":"SMZDM_COOKIE","description":"什么值得买登录后的 Cookie 值"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"排行榜","maintainers":["DIYgod"],"location":"ranking.ts","heat":5043,"topFeeds":[{"id":"42006425715388416","type":"feed","url":"rsshub://smzdm/ranking/pinlei/11/3","title":"什么值得买好价品类榜-好价品类榜-全部-3小时","description":"什么值得买好价品类榜-好价品类榜-全部-3小时 - Powered by RSSHub","image":null},{"id":"41356126035548160","type":"feed","url":"rsshub://smzdm/ranking/pinlei/11/24","title":"什么值得买好价品类榜-好价品类榜-全部-24小时","description":"什么值得买好价品类榜-好价品类榜-全部-24小时 - Powered by RSSHub","image":null}]}' :test='undefined' />

### 关键词 <Site url="post.smzdm.com" size="sm" />

<Route namespace="smzdm" :data='{"path":"/keyword/:keyword","categories":["shopping","popular"],"view":5,"example":"/smzdm/keyword/女装","parameters":{"keyword":"你想订阅的关键词"},"features":{"requireConfig":[{"name":"SMZDM_COOKIE","description":"什么值得买登录后的 Cookie 值"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"关键词","maintainers":["DIYgod","MeanZhang"],"location":"keyword.ts","heat":4789,"topFeeds":[{"id":"56173305095094272","type":"feed","url":"rsshub://smzdm/keyword/%E5%8E%86%E5%8F%B2%E4%BD%8E%E4%BB%B7","title":"历史低价 - 什么值得买","description":"历史低价 - 什么值得买 - Powered by RSSHub","image":null},{"id":"56874574824669184","type":"feed","url":"rsshub://smzdm/keyword/%E7%BB%9D%E5%AF%B9%E5%80%BC","title":"绝对值 - 什么值得买","description":"绝对值 - 什么值得买 - Powered by RSSHub","image":null}]}' :test='undefined' />

### 好文 <Site url="post.smzdm.com" size="sm" />

<Route namespace="smzdm" :data='{"path":"/haowen/:day?","categories":["shopping","popular"],"example":"/smzdm/haowen/1","parameters":{"day":{"description":"以天为时间跨度，默认为 `1`","options":[{"value":"1","label":"今日热门"},{"value":"7","label":"周热门"},{"value":"30","label":"月热门"}],"default":"1"}},"features":{"requireConfig":[{"name":"SMZDM_COOKIE","description":"什么值得买登录后的 Cookie 值"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"好文","maintainers":["LogicJake","pseudoyu"],"location":"haowen.ts","heat":2047,"topFeeds":[{"id":"41423034778090522","type":"feed","url":"rsshub://smzdm/haowen/7","title":"周热门-什么值得买好文","description":"周热门-什么值得买好文 - Powered by RSSHub","image":null},{"id":"42520977153904661","type":"feed","url":"rsshub://smzdm/haowen/1","title":"今日热门-什么值得买好文","description":"今日热门-什么值得买好文 - Powered by RSSHub","image":null}]}' :test='undefined' />

### 好文分类 <Site url="post.smzdm.com" size="sm" />

<Route namespace="smzdm" :data='{"path":"/haowen/fenlei/:name/:sort?","categories":["shopping"],"example":"/smzdm/haowen/fenlei/shenghuodianqi","parameters":{"name":"分类名，可在 URL 中查看","sort":"排序方式，默认为最新"},"features":{"requireConfig":[{"name":"SMZDM_COOKIE","description":"什么值得买登录后的 Cookie 值"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["post.smzdm.com/fenlei/:name"],"target":"/haowen/fenlei/:name"}],"name":"好文分类","maintainers":["LogicJake"],"description":"| 最新 | 周排行 | 月排行 |\n| ---- | ------ | ------ |\n| 0    | 7      | 30     |","location":"haowen-fenlei.ts","heat":387,"topFeeds":[{"id":"63960223947361280","type":"feed","url":"rsshub://smzdm/haowen/fenlei/nascunchufuwuqi","title":"NAS存储 - 什么值得买好文分类","description":"NAS存储 - 什么值得买好文分类 - Powered by RSSHub","image":null},{"id":"62650278906211328","type":"feed","url":"rsshub://smzdm/haowen/fenlei/ruanjianyingyong","title":"软件应用 - 什么值得买好文分类","description":"软件应用 - 什么值得买好文分类 - Powered by RSSHub","image":null}]}' :test='undefined' />

| 最新 | 周排行 | 月排行 |
| ---- | ------ | ------ |
| 0    | 7      | 30     |

### 用户文章 <Site url="post.smzdm.com" size="sm" />

<Route namespace="smzdm" :data='{"path":"/article/:uid","categories":["shopping"],"example":"/smzdm/article/6902738986","parameters":{"uid":"用户 id，网址上直接可以看到"},"features":{"requireConfig":[{"name":"SMZDM_COOKIE","description":"什么值得买登录后的 Cookie 值"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["zhiyou.smzdm.com/member/:uid/article"]}],"name":"用户文章","maintainers":["xfangbao"],"location":"article.ts","heat":146,"topFeeds":[{"id":"70353182008669184","type":"feed","url":"rsshub://smzdm/article/9674309982","title":"可爱的小cherry-什么值得买","description":"可爱的小cherry-什么值得买 - Powered by RSSHub","image":null},{"id":"70353490015745024","type":"feed","url":"rsshub://smzdm/article/9256201282","title":"熊猫不是猫QAQ-什么值得买","description":"熊猫不是猫QAQ-什么值得买 - Powered by RSSHub","image":null}]}' :test='undefined' />

### 用户爆料 <Site url="post.smzdm.com" size="sm" />

<Route namespace="smzdm" :data='{"path":"/baoliao/:uid","categories":["shopping"],"example":"/smzdm/baoliao/7367111021","parameters":{"uid":"用户id，网址上直接可以看到"},"features":{"requireConfig":[{"name":"SMZDM_COOKIE","description":"什么值得买登录后的 Cookie 值"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["zhiyou.smzdm.com/member/:uid/baoliao"]}],"name":"用户爆料","maintainers":["nczitzk"],"location":"baoliao.ts","heat":63,"topFeeds":[{"id":"63858618178298962","type":"feed","url":"rsshub://smzdm/baoliao/9687682701","title":"信小兔的爆料 - 什么值得买","description":"信小兔的爆料 - 什么值得买 - Powered by RSSHub","image":null},{"id":"78644582017168384","type":"feed","url":"rsshub://smzdm/baoliao/9279270364","title":"AWW-CH的爆料 - 什么值得买","description":"AWW-CH的爆料 - 什么值得买 - Powered by RSSHub","image":null}]}' :test='undefined' />

### 商品 <Site url="post.smzdm.com" size="sm" />

<Route namespace="smzdm" :data='{"path":"/product/:id","categories":["shopping"],"example":"/smzdm/product/zm5vzpe","parameters":{"id":"商品 id，网址上直接可以看到"},"features":{"requireConfig":[{"name":"SMZDM_COOKIE","description":"什么值得买登录后的 Cookie 值"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["wiki.smzdm.com/p/:id"],"target":"/product/:id"}],"name":"商品","maintainers":["chesha1"],"location":"product.ts","heat":11,"topFeeds":[{"id":"70620977987371008","type":"feed","url":"rsshub://smzdm/product/8m6vgjn","title":"Apple/苹果 iPhone 16 Pro Max 【报价 价格 评测 怎么样】 -什么值得买","description":"Apple/苹果 iPhone 16 Pro Max 【报价 价格 评测 怎么样】 -什么值得买 - Powered by RSSHub","image":null},{"id":"71434452393312256","type":"feed","url":"rsshub://smzdm/product/5qomwyd","title":"REVOMAX/锐虎 70283 【报价 价格 评测 怎么样】 -什么值得买","description":"REVOMAX/锐虎 70283 【报价 价格 评测 怎么样】 -什么值得买 - Powered by RSSHub","image":null}]}' :test='undefined' />

## 小米有品 <Site url="xiaomiyoupin.com"/>

### 小米有品众筹 <Site url="xiaomiyoupin.com/" size="sm" />

<Route namespace="xiaomiyoupin" :data='{"path":"/crowdfunding","categories":["shopping"],"example":"/xiaomiyoupin/crowdfunding","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["xiaomiyoupin.com/"]}],"name":"小米有品众筹","maintainers":["bigfei"],"url":"xiaomiyoupin.com/","location":"crowdfunding.ts","heat":922,"topFeeds":[{"id":"41147805268337670","type":"feed","url":"rsshub://xiaomiyoupin/crowdfunding","title":"小米有品众筹","description":"小米有品众筹 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 小米有品每日上新 <Site url="xiaomiyoupin.com/" size="sm" />

<Route namespace="xiaomiyoupin" :data='{"path":"/latest","categories":["shopping"],"example":"/xiaomiyoupin/latest","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["xiaomiyoupin.com/"]}],"name":"小米有品每日上新","maintainers":["xyqfer","DIYgod","bigfei"],"url":"xiaomiyoupin.com/","location":"latest.ts","heat":604,"topFeeds":[{"id":"41147805268337671","type":"feed","url":"rsshub://xiaomiyoupin/latest","title":"小米有品每日上新","description":"小米有品每日上新 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 0818 团 <Site url="0818tuan.com"/>

### 分类 <Site url="0818tuan.com" size="sm" />

<Route namespace="0818tuan" :data='{"path":"/:listId?","categories":["shopping"],"example":"/0818tuan","parameters":{"listId":"活动分类，见下表，默认为 `1`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"分类","maintainers":["TonyRL"],"description":"| 最新线报 | 实测活动 | 优惠券 |\n| -------- | -------- | ------ |\n| 1        | 2        | 3      |","location":"index.ts","heat":606,"topFeeds":[{"id":"65670452855599106","type":"feed","url":"rsshub://0818tuan/1","title":"最新线报活动-最新线报活动/教程攻略-0818团","description":"最新线报活动-最新线报活动/教程攻略-0818团 - Powered by RSSHub","image":"http://www.0818tuan.com/favicon.ico"},{"id":"61413843131719680","type":"feed","url":"rsshub://0818tuan","title":"最新线报活动-最新线报活动/教程攻略-0818团","description":"最新线报活动-最新线报活动/教程攻略-0818团 - Powered by RSSHub","image":"http://www.0818tuan.com/favicon.ico"}]}' :test='{"code":0}' />

| 最新线报 | 实测活动 | 优惠券 |
| -------- | -------- | ------ |
| 1        | 2        | 3      |

## 大麦网 <Site url="search.damai.cn"/>

### 票务更新 <Site url="search.damai.cn" size="sm" />

<Route namespace="damai" :data='{"path":"/activity/:city/:category/:subcategory/:keyword?","categories":["shopping"],"example":"/damai/activity/上海/音乐会/全部/柴可夫斯基","parameters":{"city":"城市，如果不需要限制，请填入`全部`","category":"分类，如果不需要限制，请填入`全部`","subcategory":"子分类，如果不需要限制，请填入`全部`","keyword":"搜索关键字，置空为不限制"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"票务更新","maintainers":["hoilc","Konano"],"description":"城市、分类名、子分类名，请参见[大麦网搜索页面](https://search.damai.cn/search.htm)","location":"activity.ts","heat":526,"topFeeds":[{"id":"41467081627747335","type":"feed","url":"rsshub://damai/activity/%E4%B8%8A%E6%B5%B7/%E5%85%A8%E9%83%A8/%E5%85%A8%E9%83%A8","title":"大麦网票务 - 上海 - 全部分类","description":"大麦网票务 - 上海 - 全部分类 - Powered by RSSHub","image":null},{"id":"68567136601187328","type":"feed","url":"rsshub://damai/activity/%E6%9D%AD%E5%B7%9E/%E5%85%A8%E9%83%A8/%E5%85%A8%E9%83%A8","title":"大麦网票务 - 杭州 - 全部分类","description":"大麦网票务 - 杭州 - 全部分类 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

城市、分类名、子分类名，请参见[大麦网搜索页面](https://search.damai.cn/search.htm)

## 线报酷 <Site url="new.xianbao.fun"/>

### 线板酷 <Site url="new.xianbao.fun" size="sm" />

<Route namespace="xianbao" :data='{"path":"/:category?","name":"线板酷","url":"new.xianbao.fun","maintainers":["nashi23"],"example":"/xianbao","parameters":{"category":"类别id，默认为：latest"},"description":"\n| 分类         | id             |\n| ------------ | -------------- |\n| 最新         | latest         |\n| 赚客吧       | zuankeba       |\n| 赚客吧热帖   | zuankeba-hot   |\n| 新赚吧       | xinzuanba      |\n| 新赚吧热帖   | xinzuanba-hot  |\n| 微博         | weibo          |\n| 微博热帖     | weibo-hot      |\n| 豆瓣线报     | douban         |\n| 豆瓣热帖     | douban-hot     |\n| 酷安         | kuan           |\n| 小嘀咕       | xiaodigu       |\n| 葫芦侠       | huluxia        |\n| 小刀娱乐网   | xiadao         |\n| 技术QQ网     | qqjishu        |\n| YYOK大全     | yyok           |\n| 活动资讯网   | huodong        |\n| 免费赚钱中心 | mianfei        |\n| 一小时       | yixiaoshi      |\n| 三小时       | sanxiaoshi     |\n| 六小时       | liuxiaoshi     |\n| 十二小时     | shierxiaoshi   |\n| 二十四小时   | ershisixiaoshi |\n| 四十八小时   | sishibaxiaoshi |\n| 今天         | jintian        |\n| 昨天         | zuotian        |\n| 前天         | qiantian       |\n| 三天         | santian        |\n| 五天         | wutian         |\n| 七天         | qitian         |\n| 十五天       | shiwutian      |","categories":["shopping"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["new.xianbao.fun"],"target":"/"}],"location":"index.ts","heat":434,"topFeeds":[{"id":"57341806801267712","type":"feed","url":"rsshub://xianbao","title":"线板酷-最新","description":"线板酷-最新 - Powered by RSSHub","image":null},{"id":"67550789955228672","type":"feed","url":"rsshub://xianbao/zuankeba","title":"线板酷-赚客吧","description":"线板酷-赚客吧 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />


| 分类         | id             |
| ------------ | -------------- |
| 最新         | latest         |
| 赚客吧       | zuankeba       |
| 赚客吧热帖   | zuankeba-hot   |
| 新赚吧       | xinzuanba      |
| 新赚吧热帖   | xinzuanba-hot  |
| 微博         | weibo          |
| 微博热帖     | weibo-hot      |
| 豆瓣线报     | douban         |
| 豆瓣热帖     | douban-hot     |
| 酷安         | kuan           |
| 小嘀咕       | xiaodigu       |
| 葫芦侠       | huluxia        |
| 小刀娱乐网   | xiadao         |
| 技术QQ网     | qqjishu        |
| YYOK大全     | yyok           |
| 活动资讯网   | huodong        |
| 免费赚钱中心 | mianfei        |
| 一小时       | yixiaoshi      |
| 三小时       | sanxiaoshi     |
| 六小时       | liuxiaoshi     |
| 十二小时     | shierxiaoshi   |
| 二十四小时   | ershisixiaoshi |
| 四十八小时   | sishibaxiaoshi |
| 今天         | jintian        |
| 昨天         | zuotian        |
| 前天         | qiantian       |
| 三天         | santian        |
| 五天         | wutian         |
| 七天         | qitian         |
| 十五天       | shiwutian      |

## 逛丢 <Site url="guangdiu.com"/>

### 九块九 <Site url="guangdiu.com" size="sm" />

<Route namespace="guangdiu" :data='{"path":"/cheaps/:query?","categories":["shopping"],"example":"/guangdiu/cheaps/k=clothes","parameters":{"query":"链接参数，对应网址问号后的内容"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"九块九","maintainers":["fatpandac"],"location":"cheaps.ts","heat":241,"topFeeds":[{"id":"65670452855599112","type":"feed","url":"rsshub://guangdiu/cheaps/k=clothes","title":"逛丢 - 九块九","description":"逛丢 - 九块九 - Powered by RSSHub","image":null},{"id":"157995760019765248","type":"feed","url":"rsshub://guangdiu/cheaps","title":"逛丢 - 九块九","description":"逛丢 - 九块九 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 国内折扣 / 海外折扣 <Site url="guangdiu.com" size="sm" />

<Route namespace="guangdiu" :data='{"path":"/:query?","categories":["shopping"],"example":"/guangdiu/k=daily","parameters":{"query":"链接参数，对应网址问号后的内容"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"国内折扣 / 海外折扣","maintainers":["Fatpandac"],"description":"::: tip\n  海外折扣: [`/guangdiu/k=daily&c=us`](https://rsshub.app/guangdiu/k=daily&c=us)\n:::","location":"index.ts","heat":37,"topFeeds":[{"id":"155513414809226240","type":"feed","url":"rsshub://guangdiu","title":"逛丢 - 国内","description":"逛丢 - 国内 - Powered by RSSHub","image":null},{"id":"65670452855599110","type":"feed","url":"rsshub://guangdiu/k=daily","title":"逛丢 - 国内","description":"逛丢 - 国内 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

::: tip
  海外折扣: [`/guangdiu/k=daily&c=us`](https://rsshub.app/guangdiu/k=daily&c=us)
:::

### 一小时风云榜 <Site url="guangdiu.com/rank" size="sm" />

<Route namespace="guangdiu" :data='{"path":"/rank","categories":["shopping"],"example":"/guangdiu/rank","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["guangdiu.com/rank"]}],"name":"一小时风云榜","maintainers":["fatpandac"],"url":"guangdiu.com/rank","location":"rank.ts","heat":37,"topFeeds":[{"id":"115666138114576384","type":"feed","url":"rsshub://guangdiu/rank","title":"逛丢 - 一小时风云榜","description":"逛丢 - 一小时风云榜 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 关键字搜索 <Site url="guangdiu.com" size="sm" />

<Route namespace="guangdiu" :data='{"path":"/search/:query?","categories":["shopping"],"example":"/guangdiu/search/q=百度网盘","parameters":{"query":"链接参数，对应网址问号后的内容"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"关键字搜索","maintainers":["Huzhixin00"],"location":"search.ts","heat":13,"topFeeds":[{"id":"141468238742304768","type":"feed","url":"rsshub://guangdiu/search/q=%E4%BB%8A%E6%97%A5%E5%BF%85%E4%B9%B0","title":"逛丢 - 今日必买","description":"逛丢 - 今日必买 - Powered by RSSHub","image":null},{"id":"136052350296282112","type":"feed","url":"rsshub://guangdiu/search/q=6750gre","title":"逛丢 - 6750gre","description":"逛丢 - 6750gre - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 消费者报道 <Site url="www.ccreports.com.cn"/>

### 要闻 <Site url="www.ccreports.com.cn/" size="sm" />

<Route namespace="ccreports" :data='{"path":"/article","categories":["shopping"],"example":"/ccreports/article","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.ccreports.com.cn/"]}],"name":"要闻","maintainers":["EsuRt","Fatpandac"],"url":"www.ccreports.com.cn/","location":"index.ts","heat":318,"topFeeds":[{"id":"55939235463397390","type":"feed","url":"rsshub://ccreports/article","title":"消费者报道","description":"消费者报道 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 小米 <Site url="mi.com"/>

### 小米众筹 <Site url="mi.com" size="sm" />

<Route namespace="mi" :data='{"path":"/crowdfunding","categories":["shopping"],"example":"/mi/crowdfunding","name":"小米众筹","maintainers":["DIYgod","nuomi1"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["m.mi.com/crowdfunding/home"],"target":"/crowdfunding"}],"view":5,"location":"crowdfunding.ts","heat":291,"topFeeds":[{"id":"42123928726287360","type":"feed","url":"rsshub://mi/crowdfunding","title":"小米众筹","description":"小米众筹 - Powered by RSSHub","image":"https://m.mi.com/static/img/icons/apple-touch-icon-152x152.png"}]}' :test='{"code":0}' />

## 中国养猪网 <Site url="zhujia.zhuwang.cc"/>

### 全国今日生猪价格 <Site url="zhujia.zhuwang.cc/" size="sm" />

<Route namespace="zhuwang" :data='{"path":"/zhujia","categories":["shopping"],"example":"/zhuwang/zhujia","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["zhujia.zhuwang.cc/"]}],"name":"全国今日生猪价格","maintainers":[],"url":"zhujia.zhuwang.cc/","location":"index.ts","heat":267,"topFeeds":[{"id":"58310184334730242","type":"feed","url":"rsshub://zhuwang/zhujia","title":"全国今日生猪价格","description":"全国今日生猪价格 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 特斯拉中国 <Site url="tesla.cn"/>

### 价格 <Site url="tesla.cn/model3/design" size="sm" />

<Route namespace="tesla" :data='{"path":"/price","categories":["shopping"],"example":"/tesla/price","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["tesla.cn/model3/design","tesla.cn/"]}],"name":"价格","maintainers":["xiaokyo"],"url":"tesla.cn/model3/design","location":"price/index.ts","heat":256,"topFeeds":[{"id":"59083231915003931","type":"feed","url":"rsshub://tesla/price","title":"Tesla Model 系列价格更新","description":"Tesla Model 系列价格更新 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 权益中心 <Site url="tesla.cn" size="sm" />

<Route namespace="tesla" :data='{"path":"/cx/:category?/:city?","categories":["shopping"],"example":"/tesla/cx/生活方式/北京","parameters":{"category":"分类，见下表，默认为空，即全部","city":"城市，默认为空，即全国"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"权益中心","maintainers":["simonsmh","nczitzk"],"description":"| 充电免停 | 酒店 | 美食 | 生活方式 |\n| -------- | ---- | ---- | -------- |\n\n::: tip\n  分类为 **充电免停** 时，城市参数不起作用\n:::\n\n<details>\n<summary>可选城市</summary>\n\n| 成都 | 深圳 | 洛阳 | 北京 | 南京 | 绍兴 |\n| ---- | ---- | ---- | ---- | ---- | ---- |\n\n| 西安 | 上海 | 阿坝藏族羌族自治州 | 重庆 | 郑州 | 天津 |\n| ---- | ---- | ------------------ | ---- | ---- | ---- |\n\n| 晋中 | 三亚 | 湖州 | 苏州 | 扬州 | 秦皇岛 |\n| ---- | ---- | ---- | ---- | ---- | ------ |\n\n| 长沙 | 武汉 | 安阳 | 温州 | 瑞安 | 石家庄 |\n| ---- | ---- | ---- | ---- | ---- | ------ |\n\n| 佛山 | 广州 | 杭州 | 烟台 | 沧州 | 张家港 |\n| ---- | ---- | ---- | ---- | ---- | ------ |\n\n| 金华 | 临沧 | 大理 | 南昌 | 贵阳 | 信阳 |\n| ---- | ---- | ---- | ---- | ---- | ---- |\n\n| 张家口 | 铜仁 | 沈阳 | 合肥 | 黔东 | 高邮 |\n| ------ | ---- | ---- | ---- | ---- | ---- |\n\n| 三河 | 安顺 | 莆田 | 阳江 | 南宁 | 台州 |\n| ---- | ---- | ---- | ---- | ---- | ---- |\n\n| 余姚 | 淄博 | 三明 | 中山 | 宁波 | 厦门 |\n| ---- | ---- | ---- | ---- | ---- | ---- |\n\n| 永康 | 慈溪 | 台山 | 福州 | 无锡 | 宜昌 |\n| ---- | ---- | ---- | ---- | ---- | ---- |\n\n| 泉州 | 肇庆 | 太仓 | 珠海 | 邢台 | 衡水 |\n| ---- | ---- | ---- | ---- | ---- | ---- |\n\n| 温岭 | 宜兴 | 东莞 | 威海 | 南通 | 舟山 |\n| ---- | ---- | ---- | ---- | ---- | ---- |\n\n| 都匀 | 长治 | 江阴 | 云浮 | 常州 | 唐山 |\n| ---- | ---- | ---- | ---- | ---- | ---- |\n\n| 平湖 | 商丘 | 保定 | 泰州 | 青岛 | 龙口 |\n| ---- | ---- | ---- | ---- | ---- | ---- |\n\n| 泰安 | 岳阳 | 惠州 | 徐州 | 哈尔滨 | 潍坊 |\n| ---- | ---- | ---- | ---- | ------ | ---- |\n\n| 大同 | 嘉兴 | 毕节 | 临汾 | 江门 | 诸暨 |\n| ---- | ---- | ---- | ---- | ---- | ---- |\n\n| 儋州 | 衢州 | 大连 | 昆山 | 靖江 | 常熟 |\n| ---- | ---- | ---- | ---- | ---- | ---- |\n\n| 罗定 | 丽江 | 晋江 | 乐清 | 茂名 | 福清 |\n| ---- | ---- | ---- | ---- | ---- | ---- |\n\n| 廊坊 | 兰溪 | 汕尾 | 滨州 | 昆明 | 玉环 |\n| ---- | ---- | ---- | ---- | ---- | ---- |\n\n| 绵阳 | 漳州 | 德州 | 聊城 | 龙岩 | 临沂 |\n| ---- | ---- | ---- | ---- | ---- | ---- |\n\n| 新沂 | 桐乡 | 迪庆藏族自治州 | 汕头 | 潮州 | 驻马店 |\n| ---- | ---- | -------------- | ---- | ---- | ------ |\n\n| 曲阜 | 郴州 | 济源 | 兴义 |\n| ---- | ---- | ---- | ---- |\n</details>","location":"cx.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 充电免停 | 酒店 | 美食 | 生活方式 |
| -------- | ---- | ---- | -------- |

::: tip
  分类为 **充电免停** 时，城市参数不起作用
:::

<details>
<summary>可选城市</summary>

| 成都 | 深圳 | 洛阳 | 北京 | 南京 | 绍兴 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 西安 | 上海 | 阿坝藏族羌族自治州 | 重庆 | 郑州 | 天津 |
| ---- | ---- | ------------------ | ---- | ---- | ---- |

| 晋中 | 三亚 | 湖州 | 苏州 | 扬州 | 秦皇岛 |
| ---- | ---- | ---- | ---- | ---- | ------ |

| 长沙 | 武汉 | 安阳 | 温州 | 瑞安 | 石家庄 |
| ---- | ---- | ---- | ---- | ---- | ------ |

| 佛山 | 广州 | 杭州 | 烟台 | 沧州 | 张家港 |
| ---- | ---- | ---- | ---- | ---- | ------ |

| 金华 | 临沧 | 大理 | 南昌 | 贵阳 | 信阳 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 张家口 | 铜仁 | 沈阳 | 合肥 | 黔东 | 高邮 |
| ------ | ---- | ---- | ---- | ---- | ---- |

| 三河 | 安顺 | 莆田 | 阳江 | 南宁 | 台州 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 余姚 | 淄博 | 三明 | 中山 | 宁波 | 厦门 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 永康 | 慈溪 | 台山 | 福州 | 无锡 | 宜昌 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 泉州 | 肇庆 | 太仓 | 珠海 | 邢台 | 衡水 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 温岭 | 宜兴 | 东莞 | 威海 | 南通 | 舟山 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 都匀 | 长治 | 江阴 | 云浮 | 常州 | 唐山 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 平湖 | 商丘 | 保定 | 泰州 | 青岛 | 龙口 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 泰安 | 岳阳 | 惠州 | 徐州 | 哈尔滨 | 潍坊 |
| ---- | ---- | ---- | ---- | ------ | ---- |

| 大同 | 嘉兴 | 毕节 | 临汾 | 江门 | 诸暨 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 儋州 | 衢州 | 大连 | 昆山 | 靖江 | 常熟 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 罗定 | 丽江 | 晋江 | 乐清 | 茂名 | 福清 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 廊坊 | 兰溪 | 汕尾 | 滨州 | 昆明 | 玉环 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 绵阳 | 漳州 | 德州 | 聊城 | 龙岩 | 临沂 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 新沂 | 桐乡 | 迪庆藏族自治州 | 汕头 | 潮州 | 驻马店 |
| ---- | ---- | -------------- | ---- | ---- | ------ |

| 曲阜 | 郴州 | 济源 | 兴义 |
| ---- | ---- | ---- | ---- |
</details>

## 上海文化广场 <Site url="www.shcstheatre.com"/>

### 节目列表 <Site url="www.shcstheatre.com/Program/programList.aspx" size="sm" />

<Route namespace="shcstheatre" :data='{"path":"/programs","categories":["shopping"],"example":"/shcstheatre/programs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.shcstheatre.com/Program/programList.aspx"]}],"name":"节目列表","maintainers":["fuzy112"],"url":"www.shcstheatre.com/Program/programList.aspx","location":"programs.ts","heat":223,"topFeeds":[{"id":"57678974871415814","type":"feed","url":"rsshub://shcstheatre/programs","title":"上海文化广场 - 节目列表","description":"上海文化广场 - 节目列表 - Powered by RSSHub","image":"https://static-pc.shcstheatre.com/images/logo1.png"}]}' :test='{"code":0}' />

## 秀动网 <Site url="www.showstart.com"/>

### 按场地 - 演出更新 <Site url="www.showstart.com" size="sm" />

<Route namespace="showstart" :data='{"path":"/site/:siteId","categories":["shopping"],"example":"/showstart/site/3583","parameters":{"siteId":"演出场地 (编号)"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.showstart.com/venue/:id"]}],"name":"按场地 - 演出更新","maintainers":["lchtao26"],"description":"::: tip\n-   演出场地 ID 查询: `/showstart/search/site/:keyword`, 如: [https://rsshub.app/showstart/search/site/酒球会](https://rsshub.app/showstart/search/site/酒球会)\n:::","location":"site.ts","heat":108,"topFeeds":[{"id":"70160608790705152","type":"feed","url":"rsshub://showstart/site/3515","title":"秀动网 - 广州 - SDlivehouse","description":"广州市海珠区南洲路154号（侨建·HICITY ）2F 207 - Powered by RSSHub","image":null},{"id":"68850157024038912","type":"feed","url":"rsshub://showstart/site/11758225","title":"秀动网 - 上海 - 上海 PHASE蜚声LIVEHOUSE","description":"中兴路1683号金融街购物中心三楼蜚声L3-27 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

::: tip
-   演出场地 ID 查询: `/showstart/search/site/:keyword`, 如: [https://rsshub.app/showstart/search/site/酒球会](https://rsshub.app/showstart/search/site/酒球会)
:::

### 按城市 - 演出更新 <Site url="www.showstart.com" size="sm" />

<Route namespace="showstart" :data='{"path":"/event/:cityCode/:showStyle?","categories":["shopping"],"example":"/showstart/event/571/3","parameters":{"cityCode":"演出城市 (编号)","showStyle":"演出风格 (编号)"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"按城市 - 演出更新","maintainers":["lchtao26"],"description":"::: tip\n-   演出城市 `cityCode` 查询: `/showstart/search/city/:keyword`, 如: [https://rsshub.app/showstart/search/city/杭州](https://rsshub.app/showstart/search/city/杭州)\n\n-   演出风格 `showStyle` 查询: `/showstart/search/style/:keyword`，如: [https://rsshub.app/showstart/search/style/摇滚](https://rsshub.app/showstart/search/style/摇滚)\n:::","location":"event.ts","heat":37,"topFeeds":[{"id":"67433992246280192","type":"feed","url":"rsshub://showstart/event/21/2","title":"秀动网 - 上海 - 摇滚","description":"秀动网 - 上海 - 摇滚 - Powered by RSSHub","image":null},{"id":"68586319985771520","type":"feed","url":"rsshub://showstart/event/571/2","title":"秀动网 - 杭州 - 摇滚","description":"秀动网 - 杭州 - 摇滚 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

::: tip
-   演出城市 `cityCode` 查询: `/showstart/search/city/:keyword`, 如: [https://rsshub.app/showstart/search/city/杭州](https://rsshub.app/showstart/search/city/杭州)

-   演出风格 `showStyle` 查询: `/showstart/search/style/:keyword`，如: [https://rsshub.app/showstart/search/style/摇滚](https://rsshub.app/showstart/search/style/摇滚)
:::

### 按音乐人 - 演出更新 <Site url="www.showstart.com" size="sm" />

<Route namespace="showstart" :data='{"path":"/artist/:id","categories":["shopping"],"example":"/showstart/artist/301783","parameters":{"id":"音乐人 ID"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.showstart.com/artist/:id"]}],"name":"按音乐人 - 演出更新","maintainers":["lchtao26"],"description":"::: tip\n音乐人 ID 查询: `/showstart/search/artist/:keyword`，如: [https://rsshub.app/showstart/search/artist/周杰伦](https://rsshub.app/showstart/search/artist/周杰伦)\n:::","location":"artist.ts","heat":13,"topFeeds":[{"id":"59224038938649600","type":"feed","url":"rsshub://showstart/artist/19760","title":"秀动网 - 小老虎J-Fever","description":"小老虎，或者J-Fever，都是独立音乐人赵宏的名号。他生于1986年，属虎，北京人。 他是*批接触Hip-Hop文化的践行者，也是中国*的Freestyle说唱歌手之一，曾获得中国MC Battle大赛“*”两届总*，他曾代表华人艺术家赴英国皇家剧院演出，以说唱歌手身份登上BBC电视台、泰晤士报、独立报等英国主流媒体。 他是各大音乐节舞台上的常客，并曾与国内外多组知名乐队、音乐人合作创作、演出和出版唱片。他致力于中国街球文化的推广，为街球联盟CL创作的《回到东单》、《较劲》等歌曲成为街球少年们心中的圣歌；也曾作为*一个非专业演员随陶虹、韩童生、陈明昊等中国*话剧院演员赴新加坡滨海艺术中心，与新加坡华乐团合作演出大型诗歌音乐会。 谐谑、思辨、意识流、脑洞大开……这些通常不会用于形容Hip-Hop的词汇却是描述小老虎音乐风格的*关键词。作为一个MC，小老虎始终在颠覆传统的Hip-Hop套路，将万花筒般的意象重组拼贴，辅以冷调甚至有时看似脱节的念白，妙得一份“小老虎式”的诗意。 小老虎历年来独立创作或参与创作的唱片有： 《有机》（2007，C.O.U.中华有机联盟） 《嘿！流行音乐》（2010，“嘿！！！”多媒体音乐组合） 《Juliana》（2012，独立创作发行） 《逍遥客》（2013，独立创作发行） 《运动会》（2013，“嘿！！！”多媒体音乐组合） 《悟空》（2014，与云南音乐人“唐人踢”合作） 《一定是爆炸么？》（2014，与Soulspeak合作） 《色弱》（2015，与Soulspeak合作） 此外，由小老虎身兼编剧、主演两职的多媒体音乐剧《鲸鱼》，是2011年北京国际青年戏剧节口碑*的戏剧作品。 - Powered by RSSHub","image":null},{"id":"59224265617690624","type":"feed","url":"rsshub://showstart/artist/6810007","title":"秀动网 - 周士爵","description":"秀动网 - 周士爵 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

::: tip
音乐人 ID 查询: `/showstart/search/artist/:keyword`，如: [https://rsshub.app/showstart/search/artist/周杰伦](https://rsshub.app/showstart/search/artist/周杰伦)
:::

### 演出搜索 <Site url="www.showstart.com" size="sm" />

<Route namespace="showstart" :data='{"path":"/search/:type/:keyword?","categories":["shopping"],"example":"/showstart/search/live","parameters":{"keyword":"搜索关键词","type":{"description":"类别","options":[{"value":"event","label":"演出"},{"value":"artist","label":"音乐人"},{"value":"site","label":"场地"},{"value":"brand","label":"厂牌"},{"value":"city","label":"城市"},{"value":"style","label":"风格"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"演出搜索","maintainers":["lchtao26"],"location":"search.ts","heat":5,"topFeeds":[{"id":"67428435443757056","type":"feed","url":"rsshub://showstart/search/city/%E4%B8%8A%E6%B5%B7","title":"秀动网 - 搜城市 - 上海","description":"秀动网 - 搜城市 - 上海 - Powered by RSSHub","image":null},{"id":"73918360042176533","type":"feed","url":"rsshub://showstart/search/Fine%E4%B9%90%E5%9B%A2","title":"秀动网 - 搜演出 - Fine乐团","description":"秀动网 - 搜演出 - Fine乐团 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 按厂牌 - 演出更新 <Site url="www.showstart.com" size="sm" />

<Route namespace="showstart" :data='{"path":"/brand/:id","categories":["shopping"],"example":"/showstart/brand/34707","parameters":{"id":"厂牌 ID"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.showstart.com/host/:id"]}],"name":"按厂牌 - 演出更新","maintainers":["lchtao26"],"description":"::: tip\n厂牌 ID 查询: `/showstart/search/brand/:keyword`，如: [https://rsshub.app/showstart/search/brand/声场](https://rsshub.app/showstart/search/brand/声场)\n:::","location":"brand.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

::: tip
厂牌 ID 查询: `/showstart/search/brand/:keyword`，如: [https://rsshub.app/showstart/search/brand/声场](https://rsshub.app/showstart/search/brand/声场)
:::

## IKEA <Site url="ikea.com"/>

### 中国 - 低价优选 <Site url="ikea.cn/cn/zh/campaigns/wo3-men2-de-chao1-zhi2-di1-jia4-pub8b08af40" size="sm" />

<Route namespace="ikea" :data='{"path":"/cn/low_price","categories":["shopping"],"example":"/ikea/cn/low_price","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ikea.cn/cn/zh/campaigns/wo3-men2-de-chao1-zhi2-di1-jia4-pub8b08af40","ikea.cn/"]}],"name":"中国 - 低价优选","maintainers":["jzhangdev"],"url":"ikea.cn/cn/zh/campaigns/wo3-men2-de-chao1-zhi2-di1-jia4-pub8b08af40","location":"cn/low-price.ts","heat":86,"topFeeds":[{"id":"55631357149139968","type":"feed","url":"rsshub://ikea/cn/low_price","title":"IKEA 宜家 - 低价优选","description":"低价优选 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 中国 - 当季新品推荐 <Site url="ikea.cn/cn/zh/new/" size="sm" />

<Route namespace="ikea" :data='{"path":"/cn/new","categories":["shopping"],"example":"/ikea/cn/new","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ikea.cn/cn/zh/new/","ikea.cn/"]}],"name":"中国 - 当季新品推荐","maintainers":["jzhangdev"],"url":"ikea.cn/cn/zh/new/","location":"cn/new.ts","heat":37,"topFeeds":[{"id":"66834743977124868","type":"feed","url":"rsshub://ikea/cn/new","title":"IKEA 宜家 - 当季新品推荐","description":"当季新品推荐 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"Error: STACK_TRACE_ERROR\n    at task (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:633:27)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:660:16)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:457:28)\n    at chain (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/chunk-tasks.js:9:14)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:72:12\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:40\n    at runWithSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1588:8)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:10)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:739:54)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at collectTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1048:25)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1556:17)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:85:25)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:153:2)\n    at executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/init-forks.aqTzCSR2.js:29:4)"}' />

### UK - New Product Release <Site url="ikea.com/gb/en/new/new-products/" size="sm" />

<Route namespace="ikea" :data='{"path":"/gb/new","categories":["shopping"],"example":"/ikea/gb/new","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ikea.com/gb/en/new/new-products/","ikea.com/"]}],"name":"UK - New Product Release","maintainers":["HenryQW"],"url":"ikea.com/gb/en/new/new-products/","location":"gb/new.ts","heat":2,"topFeeds":[{"id":"93829994856769536","type":"feed","url":"rsshub://ikea/gb/new","title":"New Products - Browse All New Furniture & Home Decor - IKEA","description":"New products released by IKEA UK. - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 中国 - 会员特惠 <Site url="ikea.cn/cn/zh/offers/family-offers" size="sm" />

<Route namespace="ikea" :data='{"path":"/cn/family_offers","categories":["shopping"],"example":"/ikea/cn/family_offers","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ikea.cn/cn/zh/offers/family-offers","ikea.cn/"]}],"name":"中国 - 会员特惠","maintainers":["jzhangdev"],"url":"ikea.cn/cn/zh/offers/family-offers","location":"cn/family-offers.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### UK - Offers <Site url="ikea.com/gb/en/offers" size="sm" />

<Route namespace="ikea" :data='{"path":"/gb/offer","categories":["shopping"],"example":"/ikea/gb/offer","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ikea.com/gb/en/offers","ikea.com/"]}],"name":"UK - Offers","maintainers":["HenryQW"],"url":"ikea.com/gb/en/offers","location":"gb/offer.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 淘宝网 <Site url="taobao.com"/>

### 众筹项目 <Site url="taobao.com" size="sm" />

<Route namespace="taobao" :data='{"path":"/zhongchou/:type?","categories":["shopping"],"example":"/taobao/zhongchou/all","parameters":{"type":"类型, 默认为 `all` 全部"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"众筹项目","maintainers":["xyqfer","Fatpandac"],"description":"| 全部 | 科技 | 食品        | 动漫 | 设计   | 公益 | 娱乐 | 影音  | 书籍 | 游戏 | 其他  |\n| ---- | ---- | ----------- | ---- | ------ | ---- | ---- | ----- | ---- | ---- | ----- |\n| all  | tech | agriculture | acg  | design | love | tele | music | book | game | other |","location":"zhongchou.ts","heat":89,"topFeeds":[{"id":"61055526802873344","type":"feed","url":"rsshub://taobao/zhongchou/all","title":"淘宝众筹-all","description":"淘宝众筹-all - Powered by RSSHub","image":null},{"id":"111128431392705536","type":"feed","url":"rsshub://taobao/zhongchou","title":"淘宝众筹-all","description":"淘宝众筹-all - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 全部 | 科技 | 食品        | 动漫 | 设计   | 公益 | 娱乐 | 影音  | 书籍 | 游戏 | 其他  |
| ---- | ---- | ----------- | ---- | ------ | ---- | ---- | ----- | ---- | ---- | ----- |
| all  | tech | agriculture | acg  | design | love | tele | music | book | game | other |

## Openrice開飯喇 <Site url="www.openrice.com"/>

美食網站Openrice相关資訊

### 香港餐廳排行榜 <Site url="www.openrice.com" size="sm" />

<Route namespace="openrice" :data='{"path":"/:lang/hongkong/explore/chart/:category","maintainers":["after9"],"categories":["shopping"],"example":"/openrice/zh/hongkong/explore/chart/most-bookmarked","parameters":{"lang":"语言，缺省为 zh","category":"类别，缺省为 most-bookmarked"},"name":"香港餐廳排行榜","description":"\n| 简体 | 繁體 | EN |\n| ----- | ------ | ----- |\n| zh-cn | zh | en |\n\n| 最多收藏 | 每周最高评分 | 最高浏览 | 最佳甜品餐厅 |\n| ----- | ------ | ----- | ----- |\n| most-bookmarked | best-rating | most-popular | best-dessert |\n  ","location":"chart.ts","heat":29,"topFeeds":[{"id":"76433972999429120","type":"feed","url":"rsshub://openrice/zh/hongkong/explore/chart/most-bookmarked","title":"最多收藏 – 香港餐廳排行榜 – 搵食 | OpenRice 香港開飯喇","description":"最多收藏 – 香港餐廳排行榜 – 搵食 | OpenRice 香港開飯喇 - Powered by RSSHub","image":null},{"id":"76442757221974016","type":"feed","url":"rsshub://openrice/zh/hongkong/explore/chart/best-dessert","title":"Best Dessert Restaurant 香港 Restaurant Chart - Explore | OpenRice 香港","description":"Best Dessert Restaurant 香港 Restaurant Chart - Explore | OpenRice 香港 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"Error: STACK_TRACE_ERROR\n    at task (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:633:27)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:660:16)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:457:28)\n    at chain (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/chunk-tasks.js:9:14)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:72:12\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:40\n    at runWithSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1588:8)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:10)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:739:54)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at collectTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1048:25)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1556:17)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:85:25)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:153:2)\n    at executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/init-forks.aqTzCSR2.js:29:4)"}' />


| 简体 | 繁體 | EN |
| ----- | ------ | ----- |
| zh-cn | zh | en |

| 最多收藏 | 每周最高评分 | 最高浏览 | 最佳甜品餐厅 |
| ----- | ------ | ----- | ----- |
| most-bookmarked | best-rating | most-popular | best-dessert |
  

### 香港餐厅滋讯 <Site url="www.openrice.com" size="sm" />

<Route namespace="openrice" :data='{"path":"/:lang/hongkong/promos","maintainers":["after9"],"categories":["shopping"],"example":"/openrice/zh/hongkong/promos","parameters":{"lang":"语言，缺省为 zh"},"name":"香港餐厅滋讯","description":"\n| 简体 | 繁體 | EN |\n| ----- | ------ | ----- |\n| zh-cn | zh | en |\n  ","location":"promos.ts","heat":13,"topFeeds":[{"id":"72523198167038976","type":"feed","url":"rsshub://openrice/zh/hongkong/promos","title":"餐廳滋訊 | OpenRice 香港開飯喇","description":"OpenRice為你搜羅香港今期既飲食熱話，絕對值得一試。 - Powered by RSSHub","image":null},{"id":"85408863792574464","type":"feed","url":"rsshub://openrice/:lang/hongkong/promos","title":"餐廳滋訊 | OpenRice 香港開飯喇","description":"OpenRice為你搜羅香港今期既飲食熱話，絕對值得一試。 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />


| 简体 | 繁體 | EN |
| ----- | ------ | ----- |
| zh-cn | zh | en |
  

### 香港餐廳精選優惠券 <Site url="www.openrice.com" size="sm" />

<Route namespace="openrice" :data='{"path":"/:lang/hongkong/offers","maintainers":["after9"],"categories":["shopping"],"example":"/openrice/zh/hongkong/offers","parameters":{"lang":"语言，缺省为 zh"},"name":"香港餐廳精選優惠券","description":"\n| 简体 | 繁體 | EN |\n| ----- | ------ | ----- |\n| zh-cn | zh | en |\n  ","location":"offers.ts","heat":8,"topFeeds":[{"id":"72523066247936000","type":"feed","url":"rsshub://openrice/zh/hongkong/offers","title":"香港優惠券 – 著數優惠 | OpenRice 香港開飯喇","description":"在 OpenRice 香港搜尋的優惠券。 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"Error: STACK_TRACE_ERROR\n    at task (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:633:27)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:660:16)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:457:28)\n    at chain (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/chunk-tasks.js:9:14)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:72:12\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:40\n    at runWithSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1588:8)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:10)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:739:54)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at collectTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1048:25)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1556:17)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:85:25)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:153:2)\n    at executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/init-forks.aqTzCSR2.js:29:4)"}' />


| 简体 | 繁體 | EN |
| ----- | ------ | ----- |
| zh-cn | zh | en |
  

### OpenRice 開飯熱店 - 年度餐廳投票 <Site url="www.openrice.com" size="sm" />

<Route namespace="openrice" :data='{"path":"/:lang/hongkong/voting/top/:categoryKey","maintainers":["after9"],"categories":["shopping"],"example":"/openrice/zh/hongkong/voting/top/chinese","parameters":{"lang":"语言，缺省为 zh","categoryKey":"类别，缺省为 chinese"},"name":"OpenRice 開飯熱店 - 年度餐廳投票","description":"\n  lang: 语言，见下方列表\n| 简体 | 繁體 | EN |\n| ----- | ------ | ----- |\n| zh-cn | zh | en |\n\n  categoryKey: 部分类别，见下方列表 (更多的类别可以在页面的link中对照获取)\n| 中菜館 | 上海菜 | 粵菜 | 川菜 | 港式 | 粥粉麵店 | 廚師發辦 | 韓國菜 | 泰國菜 | 越南菜 |\n| -------- | -------- | -------- |  -------- | -------- | -------- | -------- | -------- | -------- | -------- |\n| chinese | shanghainese | guangdong | sichuan | hkstyle | congee_noodles | omakase | korean | thai | vietnamese |\n  ","location":"voting.ts","heat":2,"topFeeds":[{"id":"77037193957576704","type":"feed","url":"rsshub://openrice/zh/hongkong/voting/top/chinese","title":"OpenRice 開飯熱店","description":"OpenRice用戶可以在網站或手機應用程式，點擊餐廳頁面中「投票」按鈕，即可完成投票。參加投票的用戶有機會參加大抽獎，贏取豐富獎品。 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />


  lang: 语言，见下方列表
| 简体 | 繁體 | EN |
| ----- | ------ | ----- |
| zh-cn | zh | en |

  categoryKey: 部分类别，见下方列表 (更多的类别可以在页面的link中对照获取)
| 中菜館 | 上海菜 | 粵菜 | 川菜 | 港式 | 粥粉麵店 | 廚師發辦 | 韓國菜 | 泰國菜 | 越南菜 |
| -------- | -------- | -------- |  -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| chinese | shanghainese | guangdong | sichuan | hkstyle | congee_noodles | omakase | korean | thai | vietnamese |
  

## 摩点 <Site url="modian.com"/>

### 众筹 <Site url="modian.com" size="sm" />

<Route namespace="modian" :data='{"path":"/zhongchou/:category?/:sort?/:status?","categories":["shopping"],"example":"/modian/zhongchou","parameters":{"category":"分类，见下表，默认为全部","sort":"排序，见下表，默认为最新上线","status":"状态，见下表，默认为全部"},"name":"众筹","maintainers":["nczitzk"],"description":"分类\n\n| 全部 | 游戏  | 动漫   | 出版       | 桌游       |\n| ---- | ----- | ------ | ---------- | ---------- |\n| all  | games | comics | publishing | tablegames |\n\n| 卡牌  | 潮玩模型 | 影视       | 音乐  | 活动       |\n| ----- | -------- | ---------- | ----- | ---------- |\n| cards | toys     | film-video | music | activities |\n\n| 设计   | 科技       | 食品 | 爱心通道 | 动物救助 |\n| ------ | ---------- | ---- | -------- | -------- |\n| design | technology | food | charity  | animals  |\n\n| 个人愿望 | 其他   |\n| -------- | ------ |\n| wishes   | others |\n\n  排序\n\n| 最新上线  | 金额最高   | 评论最多     |\n| --------- | ---------- | ------------ |\n| top_time | top_money | top_comment |\n\n  状态\n\n| 全部 | 创意 | 预热    | 众筹中 | 众筹成功 |\n| ---- | ---- | ------- | ------ | -------- |\n| all  | idea | preheat | going  | success  |","radar":[{"source":["zhongchou.modian.com/:category/:sort/:status"]}],"location":"zhongchou.ts","heat":50,"topFeeds":[{"id":"59241270393578496","type":"feed","url":"rsshub://modian/zhongchou","title":"全部 - 全部状态 - 最新上线 - 摩点众筹","description":"全部 - 全部状态 - 最新上线 - 摩点众筹 - Powered by RSSHub","image":null},{"id":"82230096897464320","type":"feed","url":"rsshub://modian/zhongchou/tablegames/top_time/going","title":"桌游 - 众筹中 - 最新上线 - 摩点众筹","description":"桌游 - 众筹中 - 最新上线 - 摩点众筹 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected -841575202 to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

分类

| 全部 | 游戏  | 动漫   | 出版       | 桌游       |
| ---- | ----- | ------ | ---------- | ---------- |
| all  | games | comics | publishing | tablegames |

| 卡牌  | 潮玩模型 | 影视       | 音乐  | 活动       |
| ----- | -------- | ---------- | ----- | ---------- |
| cards | toys     | film-video | music | activities |

| 设计   | 科技       | 食品 | 爱心通道 | 动物救助 |
| ------ | ---------- | ---- | -------- | -------- |
| design | technology | food | charity  | animals  |

| 个人愿望 | 其他   |
| -------- | ------ |
| wishes   | others |

  排序

| 最新上线  | 金额最高   | 评论最多     |
| --------- | ---------- | ------------ |
| top_time | top_money | top_comment |

  状态

| 全部 | 创意 | 预热    | 众筹中 | 众筹成功 |
| ---- | ---- | ------- | ------ | -------- |
| all  | idea | preheat | going  | success  |

## Uniqlo <Site url="www.uniqlo.com"/>

### New Arrivals <Site url="www.uniqlo.com" size="sm" />

<Route namespace="uniqlo" :data='{"path":"/new/:country/:category","categories":["shopping"],"example":"/uniqlo/new/sg/men","parameters":{"country":"currently only supports sg, us, jp","category":"supports `men` `women`, `kids`, `baby`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"New Arrivals","maintainers":["DIYgod"],"location":"new.ts","heat":49,"topFeeds":[{"id":"41147805268337675","type":"feed","url":"rsshub://uniqlo/new/sg/men","title":"Uniqlo men new arrivals in sg","description":"Uniqlo men new arrivals in sg - Powered by RSSHub","image":null},{"id":"164995174199687168","type":"feed","url":"rsshub://uniqlo/new/jp/men","title":"Uniqlo men new arrivals in jp","description":"Uniqlo men new arrivals in jp - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 多抓鱼 <Site url="duozhuayu.com"/>

### 搜索结果 <Site url="duozhuayu.com" size="sm" />

<Route namespace="duozhuayu" :data='{"path":"/search/:wd","categories":["shopping"],"example":"/duozhuayu/search/JavaScript","parameters":{"wd":"搜索关键词"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["duozhuayu.com/search/book/:wd"]}],"name":"搜索结果","maintainers":["fengkx"],"location":"search.ts","heat":8,"topFeeds":[{"id":"169279781328462848","type":"feed","url":"rsshub://duozhuayu/search/e.g.JavaScript","title":"多抓鱼搜索-e.g.JavaScript","description":"多抓鱼搜索-e.g.JavaScript - Powered by RSSHub","image":null},{"id":"182734632654007296","type":"feed","url":"rsshub://duozhuayu/search/djryan","title":"多抓鱼搜索-djryan","description":"多抓鱼搜索-djryan - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 五大唱片 <Site url="5music.com.tw"/>

五大唱片是台湾五大唱片股份有限公司的简称，成立于1990年，是台湾最大的唱片公司之一。

### 新貨上架 <Site url="www.5music.com.tw/New_releases.asp" size="sm" />

<Route namespace="5music" :data='{"path":"/new-releases/:category?","categories":["shopping"],"example":"/5music/new-releases","parameters":{"category":"Category, see below, defaults to all"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.5music.com.tw/New_releases.asp","www.5music.com.tw/"],"target":"/new-releases"}],"name":"新貨上架","maintainers":["gideonsenku"],"description":"Categories:\n| 華語 | 西洋 | 東洋 | 韓語 | 古典 |\n| ---- | ---- | ---- | ---- | ---- |\n| A | B | F | M | D |","url":"www.5music.com.tw/New_releases.asp","location":"index.ts","heat":6,"topFeeds":[{"id":"125390517764326400","type":"feed","url":"rsshub://5music/new-releases","title":"五大唱片 - 新货上架","description":"五大唱片 - 新货上架 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected -9243822363 to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

Categories:
| 華語 | 西洋 | 東洋 | 韓語 | 古典 |
| ---- | ---- | ---- | ---- | ---- |
| A | B | F | M | D |

## 原價屋 <Site url="www.coolpc.com.tw"/>

### 促銷&開箱 <Site url="www.coolpc.com.tw/" size="sm" />

<Route namespace="coolpc" :data='{"path":"/news","categories":["shopping"],"example":"/coolpc/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.coolpc.com.tw/"]}],"name":"促銷&開箱","maintainers":["david90103"],"url":"www.coolpc.com.tw/","location":"news.ts","heat":6,"topFeeds":[{"id":"136439445421205504","type":"feed","url":"rsshub://coolpc/news","title":"原價屋 - 促銷&開箱","description":"原價屋 - 促銷&開箱 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## Patagonia <Site url="patagonia.com"/>

### New Arrivals <Site url="patagonia.com" size="sm" />

<Route namespace="patagonia" :data='{"path":"/new-arrivals/:category","categories":["shopping"],"example":"/patagonia/new-arrivals/mens","parameters":{"category":"category, see below"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"New Arrivals","maintainers":[],"description":"| Men&#39;s | Women&#39;s | Kids&#39; & Baby | Packs & Gear |\n| ----- | ------- | ------------ | ------------ |\n| mens  | womens  | kids         | luggage      |","location":"new-arrivals.ts","heat":6,"topFeeds":[{"id":"82011783614632960","type":"feed","url":"rsshub://patagonia/new-arrivals/mens","title":"Patagonia - New Arrivals - MENS","description":"Patagonia - New Arrivals - MENS - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| Men's | Women's | Kids' & Baby | Packs & Gear |
| ----- | ------- | ------------ | ------------ |
| mens  | womens  | kids         | luggage      |

## 上海东方艺术中心 <Site url="shoac.com.cn"/>

### 演出月历 <Site url="shoac.com.cn/" size="sm" />

<Route namespace="shoac" :data='{"path":"/recent-show","categories":["shopping"],"example":"/shoac/recent-show","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["shoac.com.cn/"]}],"name":"演出月历","maintainers":["TonyRL"],"url":"shoac.com.cn/","location":"recent-show.ts","heat":4,"topFeeds":[{"id":"64970893600494636","type":"feed","url":"rsshub://shoac/recent-show","title":"演出月历 - 上海东方艺术中心管理有限公司","description":"演出月历 - 上海东方艺术中心管理有限公司 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## Gadget Flow <Site url="thegadgetflow.com"/>

### Category <Site url="thegadgetflow.com" size="sm" />

<Route namespace="thegadgetflow" :data='{"path":"/:category?","categories":["shopping"],"example":"/thegadgetflow/cool-gadgets-gifts","parameters":{"category":"category name, can be found in url"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["thegadgetflow.com/categories/:category"],"target":"/:category"}],"name":"Category","maintainers":["EthanWng97"],"location":"rss.ts","heat":4,"topFeeds":[{"id":"186353461477534720","type":"feed","url":"rsshub://thegadgetflow","title":"Gadget Flow","description":"Gadget Flow - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 環球唱片(香港)官方網上商店 <Site url="hkushop.com"/>

環球唱片(香港)官方網上商店

### HKU Shop 黑胶专区 <Site url="hkushop.com/vinyl-or-picture-lp.html" size="sm" />

<Route namespace="hkushop" :data='{"path":"/vinyl/:cat?","categories":["shopping"],"example":"/hkushop/vinyl","parameters":{"cat":"分类，见下表，默认不分类"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false,"supportRadar":true},"radar":[{"source":["hkushop.com/vinyl-or-picture-lp.html","hkushop.com/"],"target":"/vinyl"}],"name":"HKU Shop 黑胶专区","maintainers":["gideonsenku"],"description":"常见分类:\n| 華語音樂 | 經典復刻 | 古典跨界 | 爵士音樂 | 國際音樂 | 電影原聲帶 | 黑膠日本音樂 |\n| ---- | ---- | ---- | ---- | ---- | ---- | ---- |\n| 37 | 38 | 40 | 41 | 39 | 170 | 224 |","url":"hkushop.com/vinyl-or-picture-lp.html","location":"vinyl-or-picture-lp.ts","heat":3,"topFeeds":[{"id":"125428127328664576","type":"feed","url":"rsshub://hkushop/vinyl","title":"黑胶\\\\彩胶系列 - HKU Shop 环球唱片网店","description":"HKU Shop 黑胶唱片最新商品信息 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

常见分类:
| 華語音樂 | 經典復刻 | 古典跨界 | 爵士音樂 | 國際音樂 | 電影原聲帶 | 黑膠日本音樂 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 37 | 38 | 40 | 41 | 39 | 170 | 224 |

## Furstar <Site url="furstar.jp"/>

### 画师列表 <Site url="furstar.jp/" size="sm" />

<Route namespace="furstar" :data='{"path":"/artists/:lang?","categories":["shopping"],"example":"/furstar/artists/cn","parameters":{"lang":"语言, 留空为jp, 支持cn, en"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["furstar.jp/"],"target":"/artists"}],"name":"画师列表","maintainers":["NeverBehave"],"url":"furstar.jp/","location":"artists.ts","heat":2,"topFeeds":[{"id":"157430068202511360","type":"feed","url":"rsshub://furstar/artists","title":"furstar 所有画家","description":"Furstar 所有画家列表 - Powered by RSSHub","image":null},{"id":"113036045586930688","type":"feed","url":"rsshub://furstar/artists/cn","title":"furstar 所有画家","description":"Furstar 所有画家列表 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 已经出售的角色列表 <Site url="furstar.jp" size="sm" />

<Route namespace="furstar" :data='{"path":"/archive/:lang?","categories":["shopping"],"example":"/furstar/archive/cn","parameters":{"lang":"语言, 留空为jp, 支持cn, en"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["furstar.jp/:lang/archive.php","furstar.jp/archive.php"],"target":"/archive/:lang"}],"name":"已经出售的角色列表","maintainers":["NeverBehave"],"location":"archive.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

### 最新售卖角色列表 <Site url="furstar.jp" size="sm" />

<Route namespace="furstar" :data='{"path":"/characters/:lang?","categories":["shopping"],"example":"/furstar/characters/cn","parameters":{"lang":"语言, 留空为jp, 支持cn, en"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["furstar.jp/:lang","furstar.jp/"],"target":"/characters/:lang"}],"name":"最新售卖角色列表","maintainers":["NeverBehave"],"location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## Ktown4u <Site url="ktown4u.com"/>

### Get the products on sale <Site url="ktown4u.com" size="sm" />

<Route namespace="ktown4u" :data='{"path":"/artistBrandlist/:grpNo/:grpNo2?","categories":["shopping"],"example":"/ktown4u/artistBrandlist/234590/1723449","parameters":{"grpNo":"artist id (Get in url)","grpNo2":"product category id (Get in url), empty for all categories"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":[],"target":"/artistBrandlist/:grpNo/:grpNo2"}],"name":"Get the products on sale","maintainers":["JamesWDGu"],"location":"artist-brandlist.ts","heat":2,"topFeeds":[{"id":"71742086761725952","type":"feed","url":"rsshub://ktown4u/artistBrandlist/4987595","title":"ktown4u TAEYEON","description":"ktown4u TAEYEON - Powered by RSSHub","image":null},{"id":"69996708519219200","type":"feed","url":"rsshub://ktown4u/artistBrandlist/234590","title":"ktown4u MIYEON (i-dle)","description":"ktown4u MIYEON (i-dle) - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected -2933438409 to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## Mercari <Site url="jp.mercari.com"/>

### 关键词 <Site url="jp.mercari.com" size="sm" />

<Route namespace="mercari" :data='{"path":"/:sort/:order/:status/:keyword","categories":["shopping"],"parameters":{"sort":{"description":"排序方式","default":"default","options":[{"value":"default","label":"默认排序"},{"value":"create_time","label":"发布时间"},{"value":"score","label":"评分"},{"value":"like","label":"点赞"},{"value":"price","label":"价格"}]},"order":{"description":"排序顺序","default":"desc","options":[{"value":"desc","label":"降序"},{"value":"asc","label":"升序"}]},"status":{"description":"商品状态","default":"default","options":[{"value":"default","label":"全部"},{"value":"onsale","label":"在售"},{"value":"soldout","label":"已售"}]},"keyword":{"description":"关键词"}},"example":"/mercari/create_time/desc/default/ふもふも","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"关键词","maintainers":["yana9i"],"url":"jp.mercari.com","location":"keyword.ts","heat":1,"topFeeds":[{"id":"176911000000763904","type":"feed","url":"rsshub://mercari/default/desc/default/%E6%97%A5%E6%97%A5%E6%A8%B9%E6%B6%89","title":"日日樹涉 の検索結果","description":"Search results for keyword: 日日樹涉 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### Search <Site url="jp.mercari.com" size="sm" />

<Route namespace="mercari" :data='{"path":"/search/:query","categories":["shopping"],"example":"/mercari/search/keyword=シャツ&7bd3eacc-ae45-4d73-bc57-a611c9432014=340258ac-e220-4722-8c35-7f73b7382831","parameters":{"query":"Search parameters in URL query string format."},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Search","maintainers":["yana9i","Tsuyumi25"],"url":"jp.mercari.com","description":"::: warning\n此路由僅支援 `jp.mercari.com`，不支援 `tw.mercari.com` 和 `hk.mercari.com`。\n\n**注意：** 不同站點的查詢參數格式不同\n- 日本: `keyword=シャツ&order=desc&sort=created_time&status=on_sale`\n- 台灣: `keyword=シャツ&sort=new&status=in-stock&availability=1`\n:::","location":"search.ts","heat":1,"topFeeds":[{"id":"205100310930333696","type":"feed","url":"rsshub://mercari/search/keyword=%E5%90%8C%E4%BA%BA%E8%AA%8C&order=desc&sort=created_time&status=on_sale","title":"同人誌 の検索結果","description":"Mercari advanced search results for: keyword=同人誌&order=desc&sort=created_time&status=on_sale - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

::: warning
此路由僅支援 `jp.mercari.com`，不支援 `tw.mercari.com` 和 `hk.mercari.com`。

**注意：** 不同站點的查詢參數格式不同
- 日本: `keyword=シャツ&order=desc&sort=created_time&status=on_sale`
- 台灣: `keyword=シャツ&sort=new&status=in-stock&availability=1`
:::

## Snow Peak <Site url="snowpeak.com"/>

### New Arrivals(USA) <Site url="snowpeak.com/collections/new-arrivals" size="sm" />

<Route namespace="snowpeak" :data='{"path":"/us/new-arrivals","categories":["shopping"],"example":"/snowpeak/us/new-arrivals","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["snowpeak.com/collections/new-arrivals","snowpeak.com/"]}],"name":"New Arrivals(USA)","maintainers":["EthanWng97"],"url":"snowpeak.com/collections/new-arrivals","location":"us-new-arrivals.ts","heat":2,"topFeeds":[{"id":"165067222014181376","type":"feed","url":"rsshub://snowpeak/us/new-arrivals","title":"Snow Peak - New Arrivals","description":"Snow Peak - New Arrivals - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## BOOKWALKER電子書 <Site url="bookwalker.com.tw"/>

### 搜尋 <Site url="www.bookwalker.com.tw" size="sm" />

<Route namespace="bookwalker" :data='{"path":"/search/:filter?","name":"搜尋","url":"www.bookwalker.com.tw","maintainers":["nczitzk"],"example":"/bookwalker/search/order=sell_desc&s=34","parameters":{"filter":{"description":"过滤器，默认为 `order=sell_desc`，即依發售日新至舊排序"}},"description":"::: tip\n订阅 [依發售日新至舊排序的文學小說](https://www.bookwalker.com.tw/search?order=sell_desc&s=34)，其源网址为 `https://www.bookwalker.com.tw/search?order=sell_desc&s=34`，请参考该 URL 指定部分构成参数，此时路由为 [`/bookwalker/search/order=sell_desc&s=34`](https://rsshub.app/bookwalker/search/order=sell_desc&s=34)。\n:::","categories":["shopping"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.bookwalker.com.tw/search"],"target":"/bookwalker/search"}],"view":0,"location":"search.ts","heat":1,"topFeeds":[{"id":"183720743964868608","type":"feed","url":"rsshub://bookwalker/search","title":"搜尋： 系列 簡單顯示 依發售日新至舊排序 第1頁 BOOK☆WALKER 台灣漫讀 / 電子書平台","description":"搜尋： 系列 簡單顯示 依發售日新至舊排序 第1頁 BOOK☆WALKER 台灣漫讀 / 電子書平台 - Powered by RSSHub","image":"https://www.bookwalker.com.tw/images/bookwalker.jpg"}]}' :test='{"code":0}' />

::: tip
订阅 [依發售日新至舊排序的文學小說](https://www.bookwalker.com.tw/search?order=sell_desc&s=34)，其源网址为 `https://www.bookwalker.com.tw/search?order=sell_desc&s=34`，请参考该 URL 指定部分构成参数，此时路由为 [`/bookwalker/search/order=sell_desc&s=34`](https://rsshub.app/bookwalker/search/order=sell_desc&s=34)。
:::

## hotukdeals <Site url="www.hotukdeals.com"/>

### hottest <Site url="www.hotukdeals.com/" size="sm" />

<Route namespace="hotukdeals" :data='{"path":"/hottest","categories":["shopping"],"example":"/hotukdeals/hottest","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.hotukdeals.com/"]}],"name":"hottest","maintainers":["DIYgod"],"url":"www.hotukdeals.com/","location":"hottest.ts","heat":1,"topFeeds":[{"id":"60584426685234176","type":"feed","url":"rsshub://hotukdeals/hottest","title":"hotukdeals hottest","description":"hotukdeals hottest - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### thread <Site url="www.hotukdeals.com" size="sm" />

<Route namespace="hotukdeals" :data='{"path":"/:type","categories":["shopping"],"example":"/hotukdeals/hot","parameters":{"type":"should be one of highlights, hot, new, discussed"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"thread","maintainers":["DIYgod"],"location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## Arcteryx <Site url="arcteryx.com"/>

### New Arrivals <Site url="arcteryx.com" size="sm" />

<Route namespace="arcteryx" :data='{"path":"/new-arrivals/:country/:gender","categories":["shopping"],"example":"/arcteryx/new-arrivals/us/mens","parameters":{"country":"country","gender":"gender"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["arcteryx.com/:country/en/c/:gender/new-arrivals"]}],"name":"New Arrivals","maintainers":["EthanWng97"],"description":"Country\n\n| United States | Canada | United Kingdom |\n| ------------- | ------ | -------------- |\n| us            | ca     | gb             |\n\n  gender\n\n| male | female |\n| ---- | ------ |\n| mens | womens |\n\n::: tip\n  Parameter `country` can be found within the url of `Arcteryx` website.\n:::","location":"new-arrivals.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

Country

| United States | Canada | United Kingdom |
| ------------- | ------ | -------------- |
| us            | ca     | gb             |

  gender

| male | female |
| ---- | ------ |
| mens | womens |

::: tip
  Parameter `country` can be found within the url of `Arcteryx` website.
:::

### Outlet <Site url="arcteryx.com" size="sm" />

<Route namespace="arcteryx" :data='{"path":"/outlet/:country/:gender","categories":["shopping"],"example":"/arcteryx/outlet/us/mens","parameters":{"country":"country","gender":"gender"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["outlet.arcteryx.com/:country/en/c/:gender"]}],"name":"Outlet","maintainers":["EthanWng97"],"description":"Country\n\n| United States | Canada | United Kingdom |\n| ------------- | ------ | -------------- |\n| us            | ca     | gb             |\n\n  gender\n\n| male | female |\n| ---- | ------ |\n| mens | womens |\n\n::: tip\n  Parameter `country` can be found within the url of `Arcteryx` website.\n:::","location":"outlet.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

Country

| United States | Canada | United Kingdom |
| ------------- | ------ | -------------- |
| us            | ca     | gb             |

  gender

| male | female |
| ---- | ------ |
| mens | womens |

::: tip
  Parameter `country` can be found within the url of `Arcteryx` website.
:::

### Regear New Arrivals <Site url="regear.arcteryx.com/shop/new-arrivals" size="sm" />

<Route namespace="arcteryx" :data='{"path":"/regear/new-arrivals","categories":["shopping"],"example":"/arcteryx/regear/new-arrivals","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["regear.arcteryx.com/shop/new-arrivals","regear.arcteryx.com/"]}],"name":"Regear New Arrivals","maintainers":["EthanWng97"],"url":"regear.arcteryx.com/shop/new-arrivals","location":"regear-new-arrivals.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## Bellroy <Site url="bellroy.com"/>

### New Releases <Site url="bellroy.com/collection/new-releases" size="sm" />

<Route namespace="bellroy" :data='{"path":"/new-releases","categories":["shopping"],"example":"/bellroy/new-releases","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["bellroy.com/collection/new-releases","bellroy.com/"]}],"name":"New Releases","maintainers":["EthanWng97"],"url":"bellroy.com/collection/new-releases","location":"new-releases.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 玩物志 <Site url="coolbuy.com"/>

### 产品 <Site url="coolbuy.com" size="sm" />

<Route namespace="coolbuy" :data='{"path":"/","name":"产品","url":"coolbuy.com","maintainers":["nczitzk"],"example":"/coolbuy","categories":["shopping"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["coolbuy.com"],"target":"/"}],"view":0,"location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## 大众点评 <Site url="dianping.com"/>

### 用户动态 <Site url="dianping.com" size="sm" />

<Route namespace="dianping" :data='{"path":"/user/:id","categories":["shopping"],"example":"/dianping/user/808259118","parameters":{"id":"User id，打开网页端从 URL 中获取，在 `/member/:id` 中"},"features":{"requireConfig":[{"name":"DIANPING_COOKIE","optional":false,"description":"大众点评的 Cookie"}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["dianping.com/member/:id","m.dianping.com/userprofile/:id"],"target":"/dianping/user/:id"}],"name":"用户动态","maintainers":["pseudoyu"],"description":"获取用户点评、签到、攻略等动态。","location":"user.ts","heat":0,"topFeeds":[]}' :test='undefined' />

获取用户点评、签到、攻略等动态。

## Gumroad <Site url="gumroad.com"/>

### Products <Site url="gumroad.com" size="sm" />

<Route namespace="gumroad" :data='{"path":"/:username/:products","categories":["shopping"],"example":"/gumroad/afkmaster/Eve10","parameters":{"username":"username, can be found in URL","products":"products name, can be found in URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Products","maintainers":["Fatpandac"],"description":"`https://afkmaster.gumroad.com/l/Eve10` -> `/gumroad/afkmaster/Eve10`","location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

`https://afkmaster.gumroad.com/l/Eve10` -> `/gumroad/afkmaster/Eve10`

## Hot Toys <Site url="www.hottoys.com.hk"/>

### Toys List <Site url="hottoys.com.hk/" size="sm" />

<Route namespace="hottoys" :data='{"path":"/","categories":["shopping"],"example":"/hottoys","radar":[{"source":["hottoys.com.hk/"]}],"name":"Toys List","maintainers":["jw0903"],"url":"hottoys.com.hk/","features":{"requirePuppeteer":true},"location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 京东 <Site url="item.jd.com"/>

### 商品价格 <Site url="item.jd.com" size="sm" />

<Route namespace="jd" :data='{"path":"/price/:id","categories":["shopping"],"example":"/jd/price/526835","parameters":{"id":"商品 id，可在商品详情页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"商品价格","maintainers":["nczitzk"],"description":"::: tip\n  如商品 `https://item.jd.com/526835.html` 中的 id 为 `526835`，所以路由为 [`/jd/price/526835`](https://rsshub.app/jd/price/526835)\n:::","location":"price.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

::: tip
  如商品 `https://item.jd.com/526835.html` 中的 id 为 `526835`，所以路由为 [`/jd/price/526835`](https://rsshub.app/jd/price/526835)
:::

## MyFigureCollection <Site url="myfigurecollection.net"/>

### Activity <Site url="zh.myfigurecollection.net/browse" size="sm" />

<Route namespace="myfigurecollection" :data='{"path":"/activity/:category?/:language?/:latestAdditions?/:latestEdits?/:latestAlerts?/:latestPictures?","categories":["shopping"],"example":"/myfigurecollection/activity","parameters":{"category":"Category, Figures by default","language":"Language, as above, `en` by default","latestAdditions":"Latest Additions, on as `1` by default, off as `0`","latestEdits":"Changes, on as `1` by default, off as `0`","latestAlerts":"Alerts, on as `1` by default, off as `0`","latestPictures":"Pictures, on as `1` by default, off as `0`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["zh.myfigurecollection.net/browse","zh.myfigurecollection.net/"],"target":"/:category?/:language?"}],"name":"Activity","maintainers":["nczitzk"],"url":"zh.myfigurecollection.net/browse","description":"Category\n\n| Figures | Goods | Media |\n| ------- | ----- | ----- |\n| 0       | 1     | 2     |\n\n  Language\n\n| Id | Language   |\n| -- | ---------- |\n|    | en         |\n| de | Deutsch    |\n| es | Español    |\n| fi | Suomeksi   |\n| fr | Français   |\n| it | Italiano   |\n| ja | 日本語     |\n| nl | Nederlands |\n| no | Norsk      |\n| pl | Polski     |\n| pt | Português  |\n| ru | Русский    |\n| sv | Svenska    |\n| zh | 中文       |","location":"activity.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

Category

| Figures | Goods | Media |
| ------- | ----- | ----- |
| 0       | 1     | 2     |

  Language

| Id | Language   |
| -- | ---------- |
|    | en         |
| de | Deutsch    |
| es | Español    |
| fi | Suomeksi   |
| fr | Français   |
| it | Italiano   |
| ja | 日本語     |
| nl | Nederlands |
| no | Norsk      |
| pl | Polski     |
| pt | Português  |
| ru | Русский    |
| sv | Svenska    |
| zh | 中文       |

### 圖片 <Site url="zh.myfigurecollection.net/browse" size="sm" />

<Route namespace="myfigurecollection" :data='{"path":"/:category?/:language?","categories":["shopping"],"example":"/myfigurecollection/potd","parameters":{"category":"分类，默认为每日圖片","language":"语言，见上表，默认为空，即 `en`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["zh.myfigurecollection.net/browse","zh.myfigurecollection.net/"]}],"name":"圖片","maintainers":["nczitzk"],"url":"zh.myfigurecollection.net/browse","description":"| 每日圖片 | 每週圖片 | 每月圖片 |\n| -------- | -------- | -------- |\n| potd     | potw     | potm     |","location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 每日圖片 | 每週圖片 | 每月圖片 |
| -------- | -------- | -------- |
| potd     | potw     | potm     |

## mymusic5 (MyMusicSheet) <Site url="mymusicfive.com"/>

### User Sheets <Site url="mymusicfive.com" size="sm" />

<Route namespace="mymusicsheet" :data='{"path":"/user/sheets/:username/:iso?/:freeOnly?","categories":["shopping"],"example":"/mymusicsheet/user/sheets/HalcyonMusic/USD/1","parameters":{"username":"Username, can be found in the URL","iso":"ISO 4217 currency code for displaying prices, defaults to `USD`","freeOnly":"Only return free scores, any value to enable"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["mymusicfive.com/:username/*","mymusicfive.com/:username"],"target":"/user/sheets/:username"}],"name":"User Sheets","maintainers":["Freddd13"],"description":"Please refer to [Wikipedia](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) for ISO 4217.","location":"usersheets.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

Please refer to [Wikipedia](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) for ISO 4217.

## ShopBack <Site url="shopback.com.tw"/>

### Store <Site url="shopback.com.tw" size="sm" />

<Route namespace="shopback" :data='{"path":"/:store","categories":["shopping"],"example":"/shopback/shopee-mart","parameters":{"store":"Store, can be found in URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["shopback.com.tw/:category","shopback.com.tw/"]}],"name":"Store","maintainers":["nczitzk"],"location":"store.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected [ Array(1) ] to not include &#39;https://www.shopback.com.tw/login?red…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1252:15)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1090:14)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@6.2.1/node_modules/chai/index.js:1700:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## Zagg <Site url="zagg.com"/>

### New Arrivals <Site url="zagg.com" size="sm" />

<Route namespace="zagg" :data='{"path":"/new-arrivals/:query?","categories":["shopping"],"example":"/zagg/new-arrivals/brand=164&cat=3038,3041","parameters":{"query":"query, search page querystring"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"New Arrivals","maintainers":["EthanWng97"],"description":"For instance, in `https://www.zagg.com/en_us/new-arrivals?brand=164&cat=3038%2C3041`, the query is `brand=164&cat=3038%2C3041`","location":"new-arrivals.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

For instance, in `https://www.zagg.com/en_us/new-arrivals?brand=164&cat=3038%2C3041`, the query is `brand=164&cat=3038%2C3041`

