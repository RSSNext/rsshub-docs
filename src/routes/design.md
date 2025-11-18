# 🎨️ Design

## 站酷 <Site url="www.zcool.com.cn"/>

### 用户作品 <Site url="www.zcool.com.cn" size="sm" />

<Route namespace="zcool" :data='{"path":"/user/:uid","categories":["design","popular"],"view":2,"example":"/zcool/user/baiyong","parameters":{"uid":"个性域名前缀或者用户ID"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.zcool.com.cn/u/:id"],"target":"/user/:id"}],"name":"用户作品","description":"  例如:\n\n    站酷的个人主页 `https://baiyong.zcool.com.cn` 对应 rss 路径 `/zcool/user/baiyong`\n\n    站酷的个人主页 `https://www.zcool.com.cn/u/568339` 对应 rss 路径 `/zcool/user/568339`","maintainers":["junbaor"],"location":"user.ts","heat":2028,"topFeeds":[{"id":"58346915466474547","type":"feed","url":"rsshub://zcool/user/16232491","title":"抖音设计中心创作者主页_北京设计爱好者-站酷ZCOOL","description":"北京设计爱好者,抖音设计中心的创作者主页,共上传26组创作,热招 投递简历ued-recruit@bytedance.com,想找北京设计爱好者,就来站酷ZCOOL. - Powered by RSSHub","image":"https://img.zcool.cn/community/011e675dc3931ba801209e1f55764e.jpg"},{"id":"58346915462280198","type":"feed","url":"rsshub://zcool/user/1936779","title":"腾讯ISUX创作者主页_深圳设计爱好者-站酷ZCOOL","description":"深圳设计爱好者,腾讯ISUX的创作者主页,共上传251组创作,想找深圳设计爱好者,就来站酷ZCOOL. - Powered by RSSHub","image":"https://img.zcool.cn/community/01272c5bf61a14a80121ab5dc54fad.jpg"}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

  例如:

    站酷的个人主页 `https://baiyong.zcool.com.cn` 对应 rss 路径 `/zcool/user/baiyong`

    站酷的个人主页 `https://www.zcool.com.cn/u/568339` 对应 rss 路径 `/zcool/user/568339`

### 作品总榜单 <Site url="www.zcool.com.cn" size="sm" />

<Route namespace="zcool" :data='{"path":"/top/:type","categories":["design","popular"],"view":2,"example":"/zcool/top/design","parameters":{"type":{"description":"推荐类型","options":[{"value":"design","label":"作品榜单"},{"value":"article","label":"文章榜单"}]}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"作品总榜单","maintainers":["yuuow"],"location":"top.ts","heat":1890,"topFeeds":[{"id":"43301307059705856","type":"feed","url":"rsshub://zcool/top/design","title":"站酷总榜设计_创意作品榜_第447期-站酷ZCOOL","description":"站酷总榜设计_创意作品榜_站酷ZCOOL,中国设计师互动平台.深耕设计领域十八年,站酷聚集了1800万设计师_摄影师_插画师_艺术家_创意人_设计创意群体中具有较高的影响力与号召力. - Powered by RSSHub","image":null},{"id":"45447315970816000","type":"feed","url":"rsshub://zcool/top/article","title":"站酷总榜设计_创意文章榜_第447期-站酷ZCOOL","description":"站酷总榜设计_创意文章榜_站酷ZCOOL,中国设计师互动平台.耕设计领域十八年,站酷聚集了1800万设计师_摄影师_插画师_艺术家_创意人_设计创意群体中具有较高的影响力与号召力. - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 发现 <Site url="www.zcool.com.cn" size="sm" />

<Route namespace="zcool" :data='{"path":"/discover/:query?/:subCate?/:hasVideo?/:city?/:college?/:recommendLevel?/:sort?","categories":["design"],"example":"/zcool/discover","parameters":{"query":"查询参数或分类，若填写分类见下表，默认为空 或 `0` 即精选","subCate":"子分类，见下表，默认为 `0` 即该父分类下全部","hasVideo":"是否含视频，默认为 `0` 即全部，亦可选 `1` 即含视频","city":"地区代码，填入发现页中 `选择城市` 中的各级地名，如 `亚洲`、`中国`、`北京`、`纽约`、`巴黎`等","college":"学校，默认为 `0` 即全部","recommendLevel":"推荐等级，见下表，默认为 `2` 即编辑精选","sort":"排序方式，可选 `0` 即最新发布 或 `9` 即默认排序，默认为 `9`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"发现","maintainers":["nczitzk"],"description":"查看 **精选** 分类下的全部内容，其他参数选择默认，可直接使用路由 [`/zcool/discover/0`](https://rsshub.app/zcool/discover/0)\n\n  查看 **精选** 分类下的 **运营设计** 子分类全部内容，其他参数选择默认，可直接使用路由 [`/zcool/discover/0/617`](https://rsshub.app/zcool/discover/0/617)\n\n  在 **精选** 分类下的 **运营设计** 子分类全部内容基础上，筛选出有 **视频**，可直接使用路由 [`/zcool/discover/0/617/1`](https://rsshub.app/zcool/discover/0/617/1)\n\n  在 **精选** 分类下的 **运营设计** 子分类全部内容基础上，筛选出有 **视频**，且城市选择 **北京**，可直接使用路由 [`/zcool/discover/0/617/1/北京`](https://rsshub.app/zcool/discover/0/617/1/北京)\n\n::: tip\n  下方仅提供 **分类及其子分类** 参数的代码。**学校** 参数的代码可以在 [站酷发现页](https://www.zcool.com.cn/discover) 中选择跳转后，从浏览器地址栏中找到。\n:::\n\n  分类 cate\n\n| 精选 | 平面 | 插画 | UI | 网页 | 摄影 | 三维 | 影视 | 空间 | 工业 / 产品 | 动漫 | 纯艺术 | 手工艺 | 服装 | 其他 |\n| ---- | ---- | ---- | -- | ---- | ---- | ---- | ---- | ---- | ----------- | ---- | ------ | ------ | ---- | ---- |\n| 0    | 8    | 1    | 17 | 607  | 33   | 24   | 610  | 609  | 499         | 608  | 612    | 611    | 613  | 44   |\n\n  子分类 subCate\n\n  精选 0\n\n| 运营设计 | 包装 | 动画 / 影视 | 人像摄影 | 商业插画 | 电商 | APP 界面 | 艺术插画 | 家装设计 | 海报 | 文章   |\n| -------- | ---- | ----------- | -------- | -------- | ---- | -------- | -------- | -------- | ---- | ------ |\n| 617      | 9    | 30          | 34       | 2        | 616  | 757      | 292      | 637      | 10   | 809824 |\n\n  平面 8\n\n| 包装 | 海报 | 品牌 | IP 形象 | 字体 / 字形 | Logo | 书籍 / 画册 | 宣传物料 | 图案 | 信息图表 | PPT/Keynote | 其他平面 | 文章 |\n| ---- | ---- | ---- | ------- | ----------- | ---- | ----------- | -------- | ---- | -------- | ----------- | -------- | ---- |\n| 9    | 10   | 15   | 779     | 14          | 13   | 12          | 534      | 624  | 625      | 626         | 11       | 809  |\n\n  插画 1\n\n| 商业插画 | 概念设定 | 游戏原画 | 绘本 | 儿童插画 | 艺术插画 | 创作习作 | 新锐潮流插画 | 像素画 | 文章 |\n| -------- | -------- | -------- | ---- | -------- | -------- | -------- | ------------ | ------ | ---- |\n| 2        | 5        | 685      | 631  | 684      | 292      | 7        | 3            | 4      | 819  |\n\n  UI 17\n\n| APP 界面 | 游戏 UI | 软件界面 | 图标 | 主题 / 皮肤 | 交互 / UE | 动效设计 | 闪屏 / 壁纸 | 其他 UI | 文章 |\n| -------- | ------- | -------- | ---- | ----------- | --------- | -------- | ----------- | ------- | ---- |\n| 757      | 692     | 621      | 20   | 19          | 623       | 797      | 21          | 23      | 822  |\n\n  网页 607\n\n| 电商 | 企业官网 | 游戏 / 娱乐 | 运营设计 | 移动端网页 | 门户网站 | 个人网站 | 其他网页 | 文章 |\n| ---- | -------- | ----------- | -------- | ---------- | -------- | -------- | -------- | ---- |\n| 616  | 614      | 693         | 617      | 777        | 615      | 618      | 620      | 823  |\n\n  摄影 33\n\n| 人像摄影 | 风光摄影 | 人文 / 纪实摄影 | 美食摄影 | 产品摄影 | 环境 / 建筑摄影 | 时尚 / 艺术摄影 | 修图 / 后期 | 宠物摄影 | 婚礼摄影 | 其他摄影 | 文章 |\n| -------- | -------- | --------------- | -------- | -------- | --------------- | --------------- | ----------- | -------- | -------- | -------- | ---- |\n| 34       | 35       | 36              | 825      | 686      | 38              | 800             | 687         | 40       | 808      | 43       | 810  |\n\n  三维 24\n\n| 动画 / 影视 | 机械 / 交通 | 人物 / 生物 | 产品 | 场景 | 建筑 / 空间 | 其他三维 | 文章 |\n| ----------- | ----------- | ----------- | ---- | ---- | ----------- | -------- | ---- |\n| 30          | 25          | 27          | 807  | 26   | 29          | 32       | 818  |\n\n  影视 610\n\n| 短片 | Motion Graphic | 宣传片 | 影视后期 | 栏目片头 | MV  | 设定 / 分镜 | 其他影视 | 文章 |\n| ---- | -------------- | ------ | -------- | -------- | --- | ----------- | -------- | ---- |\n| 645  | 649            | 804    | 646      | 647      | 644 | 650         | 651      | 817  |\n\n  空间 609\n\n| 家装设计 | 酒店餐饮设计 | 商业空间设计 | 建筑设计 | 舞台美术 | 展陈设计 | 景观设计 | 其他空间 | 文章 |\n| -------- | ------------ | ------------ | -------- | -------- | -------- | -------- | -------- | ---- |\n| 637      | 811          | 641          | 636      | 638      | 639      | 640      | 642      | 812  |\n\n  工业 / 产品 499\n\n| 生活用品 | 电子产品 | 交通工具 | 工业用品 / 机械 | 人机交互 | 玩具 | 其他工业 / 产品 | 文章 |\n| -------- | -------- | -------- | --------------- | -------- | ---- | --------------- | ---- |\n| 508      | 506      | 509      | 511             | 510      | 689  | 514             | 813  |\n\n  动漫 608\n\n| 短篇 / 格漫 | 中 / 长篇漫画 | 网络表情 | 单幅漫画 | 动画片 | 其他动漫 | 文章 |\n| ----------- | ------------- | -------- | -------- | ------ | -------- | ---- |\n| 628         | 629           | 632      | 627      | 633    | 635      | 820  |\n\n  纯艺术 612\n\n| 绘画 | 雕塑 | 书法 | 实验艺术 | 文章 |\n| ---- | ---- | ---- | -------- | ---- |\n| 659  | 662  | 668  | 657      | 821  |\n\n  手工艺 611\n\n| 工艺品设计 | 手办 / 模玩 | 首饰设计 | 其他手工艺 | 文章 |\n| ---------- | ----------- | -------- | ---------- | ---- |\n| 654        | 656         | 756      | 658        | 816  |\n\n  服装 613\n\n| 休闲 / 流行服饰 | 正装 / 礼服 | 传统 / 民族服饰 | 配饰 | 鞋履设计 | 儿童服饰 | 其他服装 | 文章 |\n| --------------- | ----------- | --------------- | ---- | -------- | -------- | -------- | ---- |\n| 672             | 671         | 814             | 677  | 676      | 673      | 680      | 815  |\n\n  其他 44\n\n| 文案 / 策划 | VR 设计 | 独立游戏 | 其他 | 文章 |\n| ----------- | ------- | -------- | ---- | ---- |\n| 417         | 798     | 683      | 45   | 824  |\n\n  推荐等级 recommendLevel\n\n| 全部 | 编辑精选 | 首页推荐 | 全部推荐 |\n| ---- | -------- | -------- | -------- |\n| 0    | 2        | 3        | 1        |","location":"discover.ts","heat":16,"topFeeds":[{"id":"151627344646140928","type":"feed","url":"rsshub://zcool/discover","title":"Importing","description":null,"image":null},{"id":"154611732353515529","type":"feed","url":"rsshub://zcool/discover/all","title":"Importing","description":null,"image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

查看 **精选** 分类下的全部内容，其他参数选择默认，可直接使用路由 [`/zcool/discover/0`](https://rsshub.app/zcool/discover/0)

  查看 **精选** 分类下的 **运营设计** 子分类全部内容，其他参数选择默认，可直接使用路由 [`/zcool/discover/0/617`](https://rsshub.app/zcool/discover/0/617)

  在 **精选** 分类下的 **运营设计** 子分类全部内容基础上，筛选出有 **视频**，可直接使用路由 [`/zcool/discover/0/617/1`](https://rsshub.app/zcool/discover/0/617/1)

  在 **精选** 分类下的 **运营设计** 子分类全部内容基础上，筛选出有 **视频**，且城市选择 **北京**，可直接使用路由 [`/zcool/discover/0/617/1/北京`](https://rsshub.app/zcool/discover/0/617/1/北京)

::: tip
  下方仅提供 **分类及其子分类** 参数的代码。**学校** 参数的代码可以在 [站酷发现页](https://www.zcool.com.cn/discover) 中选择跳转后，从浏览器地址栏中找到。
:::

  分类 cate

| 精选 | 平面 | 插画 | UI | 网页 | 摄影 | 三维 | 影视 | 空间 | 工业 / 产品 | 动漫 | 纯艺术 | 手工艺 | 服装 | 其他 |
| ---- | ---- | ---- | -- | ---- | ---- | ---- | ---- | ---- | ----------- | ---- | ------ | ------ | ---- | ---- |
| 0    | 8    | 1    | 17 | 607  | 33   | 24   | 610  | 609  | 499         | 608  | 612    | 611    | 613  | 44   |

  子分类 subCate

  精选 0

| 运营设计 | 包装 | 动画 / 影视 | 人像摄影 | 商业插画 | 电商 | APP 界面 | 艺术插画 | 家装设计 | 海报 | 文章   |
| -------- | ---- | ----------- | -------- | -------- | ---- | -------- | -------- | -------- | ---- | ------ |
| 617      | 9    | 30          | 34       | 2        | 616  | 757      | 292      | 637      | 10   | 809824 |

  平面 8

| 包装 | 海报 | 品牌 | IP 形象 | 字体 / 字形 | Logo | 书籍 / 画册 | 宣传物料 | 图案 | 信息图表 | PPT/Keynote | 其他平面 | 文章 |
| ---- | ---- | ---- | ------- | ----------- | ---- | ----------- | -------- | ---- | -------- | ----------- | -------- | ---- |
| 9    | 10   | 15   | 779     | 14          | 13   | 12          | 534      | 624  | 625      | 626         | 11       | 809  |

  插画 1

| 商业插画 | 概念设定 | 游戏原画 | 绘本 | 儿童插画 | 艺术插画 | 创作习作 | 新锐潮流插画 | 像素画 | 文章 |
| -------- | -------- | -------- | ---- | -------- | -------- | -------- | ------------ | ------ | ---- |
| 2        | 5        | 685      | 631  | 684      | 292      | 7        | 3            | 4      | 819  |

  UI 17

| APP 界面 | 游戏 UI | 软件界面 | 图标 | 主题 / 皮肤 | 交互 / UE | 动效设计 | 闪屏 / 壁纸 | 其他 UI | 文章 |
| -------- | ------- | -------- | ---- | ----------- | --------- | -------- | ----------- | ------- | ---- |
| 757      | 692     | 621      | 20   | 19          | 623       | 797      | 21          | 23      | 822  |

  网页 607

| 电商 | 企业官网 | 游戏 / 娱乐 | 运营设计 | 移动端网页 | 门户网站 | 个人网站 | 其他网页 | 文章 |
| ---- | -------- | ----------- | -------- | ---------- | -------- | -------- | -------- | ---- |
| 616  | 614      | 693         | 617      | 777        | 615      | 618      | 620      | 823  |

  摄影 33

| 人像摄影 | 风光摄影 | 人文 / 纪实摄影 | 美食摄影 | 产品摄影 | 环境 / 建筑摄影 | 时尚 / 艺术摄影 | 修图 / 后期 | 宠物摄影 | 婚礼摄影 | 其他摄影 | 文章 |
| -------- | -------- | --------------- | -------- | -------- | --------------- | --------------- | ----------- | -------- | -------- | -------- | ---- |
| 34       | 35       | 36              | 825      | 686      | 38              | 800             | 687         | 40       | 808      | 43       | 810  |

  三维 24

| 动画 / 影视 | 机械 / 交通 | 人物 / 生物 | 产品 | 场景 | 建筑 / 空间 | 其他三维 | 文章 |
| ----------- | ----------- | ----------- | ---- | ---- | ----------- | -------- | ---- |
| 30          | 25          | 27          | 807  | 26   | 29          | 32       | 818  |

  影视 610

| 短片 | Motion Graphic | 宣传片 | 影视后期 | 栏目片头 | MV  | 设定 / 分镜 | 其他影视 | 文章 |
| ---- | -------------- | ------ | -------- | -------- | --- | ----------- | -------- | ---- |
| 645  | 649            | 804    | 646      | 647      | 644 | 650         | 651      | 817  |

  空间 609

| 家装设计 | 酒店餐饮设计 | 商业空间设计 | 建筑设计 | 舞台美术 | 展陈设计 | 景观设计 | 其他空间 | 文章 |
| -------- | ------------ | ------------ | -------- | -------- | -------- | -------- | -------- | ---- |
| 637      | 811          | 641          | 636      | 638      | 639      | 640      | 642      | 812  |

  工业 / 产品 499

| 生活用品 | 电子产品 | 交通工具 | 工业用品 / 机械 | 人机交互 | 玩具 | 其他工业 / 产品 | 文章 |
| -------- | -------- | -------- | --------------- | -------- | ---- | --------------- | ---- |
| 508      | 506      | 509      | 511             | 510      | 689  | 514             | 813  |

  动漫 608

| 短篇 / 格漫 | 中 / 长篇漫画 | 网络表情 | 单幅漫画 | 动画片 | 其他动漫 | 文章 |
| ----------- | ------------- | -------- | -------- | ------ | -------- | ---- |
| 628         | 629           | 632      | 627      | 633    | 635      | 820  |

  纯艺术 612

| 绘画 | 雕塑 | 书法 | 实验艺术 | 文章 |
| ---- | ---- | ---- | -------- | ---- |
| 659  | 662  | 668  | 657      | 821  |

  手工艺 611

| 工艺品设计 | 手办 / 模玩 | 首饰设计 | 其他手工艺 | 文章 |
| ---------- | ----------- | -------- | ---------- | ---- |
| 654        | 656         | 756      | 658        | 816  |

  服装 613

| 休闲 / 流行服饰 | 正装 / 礼服 | 传统 / 民族服饰 | 配饰 | 鞋履设计 | 儿童服饰 | 其他服装 | 文章 |
| --------------- | ----------- | --------------- | ---- | -------- | -------- | -------- | ---- |
| 672             | 671         | 814             | 677  | 676      | 673      | 680      | 815  |

  其他 44

| 文案 / 策划 | VR 设计 | 独立游戏 | 其他 | 文章 |
| ----------- | ------- | -------- | ---- | ---- |
| 417         | 798     | 683      | 45   | 824  |

  推荐等级 recommendLevel

| 全部 | 编辑精选 | 首页推荐 | 全部推荐 |
| ---- | -------- | -------- | -------- |
| 0    | 2        | 3        | 1        |

## Behance <Site url="www.behance.net"/>

### User Works <Site url="www.behance.net" size="sm" />

<Route namespace="behance" :data='{"path":"/:user/:type?","categories":["design","popular"],"view":2,"example":"/behance/mishapetrick","parameters":{"user":"username","type":{"description":"type","options":[{"value":"projects","label":"projects"},{"value":"appreciated","label":"appreciated"}],"default":"projects"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"User Works","maintainers":["MisteryMonster"],"description":"Behance user&#39;s profile URL, like [https://www.behance.net/mishapetrick](https://www.behance.net/mishapetrick) the username will be `mishapetrick`。","location":"user.ts","heat":1832,"topFeeds":[{"id":"60616941982567424","type":"feed","url":"rsshub://behance/rondesignlab","title":"Rondesignlab ⭐️&#39;s projects","description":"Rondesignlab ⭐️&#39;s projects - Powered by RSSHub","image":"https://pps.services.adobe.com/api/profile/070133B04B7456D1992015B9@AdobeID/image/74abc8ee-12d8-4690-8980-fd0681e41ecc/50"},{"id":"56578471053323264","type":"feed","url":"rsshub://behance/mishapetrick","title":"Petrick Animation&#39;s projects","description":"Petrick Animation&#39;s projects - Powered by RSSHub","image":"https://pps.services.adobe.com/api/profile/705741C3536196240A490D45@AdobeID/image/3a1f0f66-ebf9-4480-af90-ed75e7c49829/50"}]}' :test='{"code":0}' />

Behance user's profile URL, like [https://www.behance.net/mishapetrick](https://www.behance.net/mishapetrick) the username will be `mishapetrick`。

## Dribbble <Site url="dribbble.com"/>

### Popular <Site url="dribbble.com/" size="sm" />

<Route namespace="dribbble" :data='{"path":"/popular/:timeframe?","categories":["design"],"example":"/dribbble/popular","parameters":{"timeframe":"support the following values: week, month, year and ever"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["dribbble.com/"],"target":"/popular"}],"name":"Popular","maintainers":["DIYgod","loganrockmore"],"url":"dribbble.com/","location":"popular.ts","heat":740,"topFeeds":[{"id":"54822609185086503","type":"feed","url":"rsshub://dribbble/popular","title":"Dribbble - Popular Shots","description":"Find Top Designers & Creative Professionals on Dribbble. We are where designers gain inspiration, feedback, community, and jobs. Your best resource to discover and connect with designers worldwide. - Powered by RSSHub","image":null},{"id":"56130033776808986","type":"feed","url":"rsshub://dribbble/popular/week","title":"Dribbble - Popular Shots","description":"Find Top Designers & Creative Professionals on Dribbble. We are where designers gain inspiration, feedback, community, and jobs. Your best resource to discover and connect with designers worldwide. - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### User (or team) <Site url="dribbble.com" size="sm" />

<Route namespace="dribbble" :data='{"path":"/user/:name","categories":["design"],"example":"/dribbble/user/google","parameters":{"name":"username, available in user&#39;s homepage URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["dribbble.com/:name"]}],"name":"User (or team)","maintainers":["DIYgod","loganrockmore"],"location":"user.ts","heat":581,"topFeeds":[{"id":"56130033776808974","type":"feed","url":"rsshub://dribbble/user/BestServedBold","title":"Dribbble - user BestServedBold","description":"𝔅𝔢𝔰𝔱𝔖𝔢𝔯𝔳𝔢𝔡𝔅𝔬𝔩𝔡 | Growing brands driven by Bold™ ideas. Design, Motion, 3D & Art Direction. | Connect with them on Dribbble; the global community for designers and creative professionals. - Powered by RSSHub","image":null},{"id":"56130033776808982","type":"feed","url":"rsshub://dribbble/user/glebich","title":"Dribbble - user glebich","description":"Gleb Kuznetsov ✈ | A designer transforms ideas into reality. As technology gets smarter, reality is exploding. Today, it takes an artist to make human and product interaction awe-inspiring. Connection is key. Gleb is crafting the future of digital experiences through emotional design. 🇺🇸🇨🇭 | Connect with them on Dribbble; the global community for designers and creative professionals. - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Keyword <Site url="dribbble.com" size="sm" />

<Route namespace="dribbble" :data='{"path":"/keyword/:keyword","categories":["design"],"example":"/dribbble/keyword/player","parameters":{"keyword":"desired keyword"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Keyword","maintainers":["DIYgod","loganrockmore"],"location":"keyword.ts","heat":34,"topFeeds":[{"id":"71093465085819904","type":"feed","url":"rsshub://dribbble/keyword/player","title":"Dribbble - keyword player","description":"Explore thousands of high-quality player images on Dribbble. Your resource to get inspired, discover and connect with designers worldwide. - Powered by RSSHub","image":null},{"id":"86737310526327808","type":"feed","url":"rsshub://dribbble/keyword/ui","title":"Dribbble - keyword ui","description":"Explore thousands of high-quality ui images on Dribbble. Your resource to get inspired, discover and connect with designers worldwide. - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 1x.com <Site url="1x.com"/>

1x.com • In Pursuit of the Sublime. Browse 200,000 curated photos from photographers all over the world.

### Gallery <Site url="1x.com" size="sm" />

<Route namespace="1x" :data='{"path":"/:category{.+}?","name":"Gallery","url":"1x.com","maintainers":["nczitzk"],"example":"/1x/latest/awarded","parameters":{"category":"Category, Latest Awarded by default"},"description":"::: tip\nFill in the field in the path with the part of the corresponding page URL after `https://1x.com/gallery/` or `https://1x.com/photo/`. Here are the examples:\n\nIf you subscribe to [Abstract Awarded](https://1x.com/gallery/abstract/awarded), you should fill in the path with the part `abstract/awarded` from the page URL `https://1x.com/gallery/abstract/awarded`. In this case, the route will be [`/1x/abstract/awarded`](https://rsshub.app/1x/abstract/awarded).\n\nIf you subscribe to [Wildlife Published](https://1x.com/gallery/wildlife/published), you should fill in the path with the part `wildlife/published` from the page URL `https://1x.com/gallery/wildlife/published`. In this case, the route will be [`/1x/wildlife/published`](https://rsshub.app/1x/wildlife/published).\n:::","categories":["design","picture"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["/gallery/:category*","/photos/:category*"],"target":"/1x/:category"}],"location":"index.ts","heat":720,"topFeeds":[{"id":"41375451836487680","type":"feed","url":"rsshub://1x/latest/awarded","title":"1x.com • In Pursuit of the Sublime","description":"1x.com is the world&#39;s biggest curated photo gallery online. Each photo is selected by professional curators. 1x.com • In Pursuit of the Sublime - Powered by RSSHub","image":"https://1x.com/assets/img/1x-logo-1.png"},{"id":"59581478522199040","type":"feed","url":"rsshub://1x","title":"1x.com • In Pursuit of the Sublime","description":"1x.com is the world&#39;s biggest curated photo gallery online. Each photo is selected by professional curators. 1x.com • In Pursuit of the Sublime - Powered by RSSHub","image":"https://1x.com/assets/img/1x-logo-1.png"}]}' :test='{"code":0}' />

::: tip
Fill in the field in the path with the part of the corresponding page URL after `https://1x.com/gallery/` or `https://1x.com/photo/`. Here are the examples:

If you subscribe to [Abstract Awarded](https://1x.com/gallery/abstract/awarded), you should fill in the path with the part `abstract/awarded` from the page URL `https://1x.com/gallery/abstract/awarded`. In this case, the route will be [`/1x/abstract/awarded`](https://rsshub.app/1x/abstract/awarded).

If you subscribe to [Wildlife Published](https://1x.com/gallery/wildlife/published), you should fill in the path with the part `wildlife/published` from the page URL `https://1x.com/gallery/wildlife/published`. In this case, the route will be [`/1x/wildlife/published`](https://rsshub.app/1x/wildlife/published).
:::

## Notefolio <Site url="notefolio.net"/>

### Works <Site url="notefolio.net/search" size="sm" />

<Route namespace="notefolio" :data='{"path":"/search/:category?/:order?/:time?/:query?","categories":["design"],"view":2,"example":"/notefolio/search/1/pick/all/life","parameters":{"category":{"description":"Category, see below","options":[{"value":"all","label":"All (전체)"},{"value":"1","label":"Video / Motion Graphics (영상/모션그래픽)"},{"value":"2","label":"Graphic Design (그래픽 디자인)"},{"value":"3","label":"Branding / Editing (브랜딩/편집)"},{"value":"4","label":"UI/UX (UI/UX)"},{"value":"5","label":"Illustration (일러스트레이션)"},{"value":"6","label":"Digital Art (디지털 아트)"},{"value":"7","label":"Character Design (캐릭터 디자인)"},{"value":"8","label":"Product Package Design (제품/패키지 디자인)"},{"value":"9","label":"Photography (포토그래피)"},{"value":"10","label":"Typography (타이포그래피)"},{"value":"11","label":"Crafts (공예)"},{"value":"12","label":"Fine Art (파인아트)"}],"default":"all"},"order":{"description":"Order, `pick` as Notefolio Pick, `published` as Newest, `like` as like, `pick` by default","options":[{"value":"pick","label":"Notefolio Pick"},{"value":"published","label":"Newest"},{"value":"like","label":"Like"}],"default":"pick"},"time":{"description":"Time","options":[{"value":"all","label":"All the time"},{"value":"one-day","label":"Latest 24 hours"},{"value":"week","label":"Latest week"},{"value":"month","label":"Latest month"},{"value":"three-month","label":"Latest 3 months"}],"default":"all"},"query":"Keyword, empty by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["notefolio.net/search"]}],"name":"Works","maintainers":["BianTan"],"url":"notefolio.net/search","description":"| Category | Name in Korean     | Name in English         |\n| -------- | ------------------ | ----------------------- |\n| all      | 전체               | All                     |\n| 1        | 영상/모션그래픽    | Video / Motion Graphics |\n| 2        | 그래픽 디자인      | Graphic Design          |\n| 3        | 브랜딩/편집        | Branding / Editing      |\n| 4        | UI/UX              | UI/UX                   |\n| 5        | 일러스트레이션     | Illustration            |\n| 6        | 디지털 아트        | Digital Art             |\n| 7        | 캐릭터 디자인      | Character Design        |\n| 8        | 제품/패키지 디자인 | Product Package Design  |\n| 9        | 포토그래피         | Photography             |\n| 10       | 타이포그래피       | Typography              |\n| 11       | 공예               | Crafts                  |\n| 12       | 파인아트           | Fine Art                |","location":"search.ts","heat":268,"topFeeds":[{"id":"72683914070868992","type":"feed","url":"rsshub://notefolio/search/all/pick/all","title":"all/pick/all/ search","description":"all/pick/all/ search - Powered by RSSHub","image":null},{"id":"80060928310239232","type":"feed","url":"rsshub://notefolio/search/4/pick/all","title":"4/pick/all/ search","description":"4/pick/all/ search - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

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

## Boss 设计 <Site url="bossdesign.cn"/>

### 分类 <Site url="bossdesign.cn" size="sm" />

<Route namespace="bossdesign" :data='{"path":"/:category?","categories":["design"],"example":"/bossdesign","parameters":{"category":"分类，可在对应分类页 URL 中找到，留空为全部"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"分类","maintainers":["TonyRL"],"description":"| Boss 笔记 | 电脑日志        | 素材资源         | 设计师神器      | 设计教程        | 设计资讯            |\n| --------- | --------------- | ---------------- | --------------- | --------------- | ------------------- |\n| note      | computer-skills | design-resources | design-software | design-tutorial | design_information |","location":"index.ts","heat":137,"topFeeds":[{"id":"82629451109655552","type":"feed","url":"rsshub://bossdesign","title":"Boss设计 | 收集国外设计素材网站的资源平台。","description":"Boss设计-收集国外设计素材网站的资源平台。专注于收集国外设计素材和国外设计网站，以及超实用的设计师神器，只为设计初学者和设计师提供海量的资源平台。.. - Powered by RSSHub","image":"https://www.bossdesign.cn/wp-content/themes/pinghsu/images/Bossdesign-ico.ico"},{"id":"89541310338965504","type":"feed","url":"rsshub://bossdesign/:category","title":"Boss设计 | 收集国外设计素材网站的资源平台。","description":"Boss设计-收集国外设计素材网站的资源平台。专注于收集国外设计素材和国外设计网站，以及超实用的设计师神器，只为设计初学者和设计师提供海量的资源平台。.. - Powered by RSSHub","image":"https://www.bossdesign.cn/wp-content/themes/pinghsu/images/Bossdesign-ico.ico"}]}' :test='{"code":0}' />

| Boss 笔记 | 电脑日志        | 素材资源         | 设计师神器      | 设计教程        | 设计资讯            |
| --------- | --------------- | ---------------- | --------------- | --------------- | ------------------- |
| note      | computer-skills | design-resources | design-software | design-tutorial | design_information |

## Apple <Site url="apple.com"/>

### Design updates <Site url="developer.apple.com/design/whats-new/" size="sm" />

<Route namespace="apple" :data='{"categories":["design"],"example":"/apple/design","maintainers":["jean-jacket"],"name":"Design updates","path":"/design","url":"developer.apple.com/design/whats-new/","location":"design.ts","heat":89,"topFeeds":[{"id":"169399297580068864","type":"feed","url":"rsshub://apple/design","title":"Apple design updates","description":"Apple design updates - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected [ …(221) ] to not include &#39;40d2dfd8d2b379475a2750ce0edbde13&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1252:15)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1090:14)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@6.2.1/node_modules/chai/index.js:1700:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## MakerWorld <Site url="makerworld.com"/>

### Trending Models <Site url="makerworld.com" size="sm" />

<Route namespace="makerworld" :data='{"path":"/trending","categories":["design"],"example":"/makerworld/trending","name":"Trending Models","maintainers":["TonyRL"],"radar":[{"source":["makerworld.com/:lang"]}],"location":"trending.ts","heat":60,"topFeeds":[{"id":"159773156338176000","type":"feed","url":"rsshub://makerworld/trending","title":"Trending Models - MakerWorld","description":"Leading 3D printing model community for designers and makers. Download thousands of 3D models and stl models for free, and your No.1 option for multicolor 3D models - Powered by RSSHub","image":"https://makerworld.com/favicon_new.png"}]}' :test='{"code":0}' />

### Contests <Site url="makerworld.com" size="sm" />

<Route namespace="makerworld" :data='{"path":"/contests","categories":["design"],"example":"/makerworld/contests","name":"Contests","maintainers":["TonyRL"],"radar":[{"source":["makerworld.com/:lang/contests"]}],"location":"contest.ts","heat":4,"topFeeds":[{"id":"159773347494824960","type":"feed","url":"rsshub://makerworld/contests","title":"Contest - MakerWorld","description":"Join the contest to showcase your creativity and win substantial rewards - Powered by RSSHub","image":"https://makerworld.com/favicon_new.png"}]}' :test='{"code":0}' />

### User Uploads <Site url="makerworld.com" size="sm" />

<Route namespace="makerworld" :data='{"path":"/user/:handle/upload","categories":["design"],"example":"/makerworld/user/@Wcad00/upload","parameters":{"handle":"User handle"},"name":"User Uploads","maintainers":["TonyRL"],"radar":[{"source":["makerworld.com/:lang/:handle/upload","makerworld.com/:lang/:handle"]}],"location":"user-upload.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## 爱果果 <Site url="iguoguo.net"/>

### 最新 H5 <Site url="iguoguo.net" size="sm" />

<Route namespace="iguoguo" :data='{"path":"/html5","categories":["design"],"example":"/iguoguo/html5","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"最新 H5","maintainers":["yuxinliu-alex"],"location":"index.ts","heat":39,"topFeeds":[{"id":"56286355311210496","type":"feed","url":"rsshub://iguoguo/html5","title":"爱果果","description":"爱果果iguoguo是一个优秀酷站、h5、UI素材资源的发布分享平台，是设计师的灵感聚合地和素材下载源。 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 幾米 JIMMY S.P.A. Official Website <Site url="www.jimmyspa.com"/>

### Books <Site url="www.jimmyspa.com" size="sm" />

<Route namespace="jimmyspa" :data='{"path":"/books/:language","categories":["design"],"view":0,"example":"/jimmyspa/books/tw","parameters":{"language":{"description":"语言","options":[{"value":"tw","label":"臺灣正體"},{"value":"en","label":"English"},{"value":"jp","label":"日本語"}]}},"radar":[{"source":["www.jimmyspa.com/:language/Books"]}],"name":"Books","description":"\n| language | Description |\n| ---   | ---   |\n| tw | 臺灣正體 |\n| en | English |\n| jp | 日本語 |\n    ","maintainers":["Cedaric"],"location":"books.ts","heat":15,"topFeeds":[{"id":"93100945524546560","type":"feed","url":"rsshub://jimmyspa/books/tw","title":"幾米 - 幾米創作(tw)","description":"幾米 - 幾米創作(tw) - Powered by RSSHub","image":null},{"id":"182968644220997632","type":"feed","url":"rsshub://jimmyspa/books/en","title":"幾米 - 幾米創作(en)","description":"幾米 - 幾米創作(en) - Powered by RSSHub","image":null}]}' :test='{"code":0}' />


| language | Description |
| ---   | ---   |
| tw | 臺灣正體 |
| en | English |
| jp | 日本語 |
    

### News <Site url="www.jimmyspa.com" size="sm" />

<Route namespace="jimmyspa" :data='{"path":"/news/:language","categories":["design"],"view":2,"example":"/jimmyspa/news/tw","parameters":{"language":{"description":"语言","options":[{"value":"tw","label":"臺灣正體"},{"value":"en","label":"English"},{"value":"jp","label":"日本語"}]}},"radar":[{"source":["www.jimmyspa.com/:language/News"]}],"name":"News","description":"\n| language | Description |\n| ---   | ---   |\n| tw | 臺灣正體 |\n| en | English |\n| jp | 日本語 |\n    ","maintainers":["Cedaric"],"location":"news.ts","heat":9,"topFeeds":[{"id":"93099761740480512","type":"feed","url":"rsshub://jimmyspa/news/tw","title":"幾米 - 最新消息(tw)","description":"幾米 - 最新消息(tw) - Powered by RSSHub","image":null}]}' :test='{"code":0}' />


| language | Description |
| ---   | ---   |
| tw | 臺灣正體 |
| en | English |
| jp | 日本語 |
    

## Shopping Design <Site url="www.shoppingdesign.com.tw"/>

### 文章列表 <Site url="www.shoppingdesign.com.tw/post" size="sm" />

<Route namespace="shoppingdesign" :data='{"path":"/posts","categories":["design"],"example":"/shoppingdesign/posts","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.shoppingdesign.com.tw/post"]}],"name":"文章列表","maintainers":["miles170"],"url":"www.shoppingdesign.com.tw/post","location":"posts.ts","heat":5,"topFeeds":[{"id":"199134341005156437","type":"feed","url":"rsshub://shoppingdesign/posts","title":"Importing","description":null,"image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## Google <Site url="www.google.com"/>

### Google Fonts <Site url="www.google.com" size="sm" />

<Route namespace="google" :data='{"path":"/fonts/:sort?","categories":["design"],"example":"/google/fonts/date","parameters":{"sort":"Sorting type, see below, default to `date`"},"features":{"requireConfig":[{"name":"GOOGLE_FONTS_API_KEY","description":""}],"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Google Fonts","maintainers":["Fatpandac"],"description":"| Newest | Trending | Most popular |  Name | Number of styles |\n| :----: | :------: | :----------: | :---: | :--------------: |\n|  date  | trending |  popularity  | alpha |       style      |\n\n::: warning\n  This route requires API key, therefore it&#39;s only available when self-hosting, refer to the [Deploy Guide](https://docs.rsshub.app/deploy/config#route-specific-configurations) for route-specific configurations.\n:::","location":"fonts.ts","heat":0,"topFeeds":[]}' :test='undefined' />

| Newest | Trending | Most popular |  Name | Number of styles |
| :----: | :------: | :----------: | :---: | :--------------: |
|  date  | trending |  popularity  | alpha |       style      |

::: warning
  This route requires API key, therefore it's only available when self-hosting, refer to the [Deploy Guide](https://docs.rsshub.app/deploy/config#route-specific-configurations) for route-specific configurations.
:::

