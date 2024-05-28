# 🛍️ Shopping

## 0818 团 <Site url="0818tuan.com"/>

### 分类 <Site url="0818tuan.com" size="sm" />

<Route namespace="0818tuan" :data='{"path":"/:listId?","categories":["shopping"],"example":"/0818tuan","parameters":{"listId":"活动分类，见下表，默认为 `1`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"分类","maintainers":["TonyRL"],"description":"| 最新线报 | 实测活动 | 优惠券 |\n  | -------- | -------- | ------ |\n  | 1        | 2        | 3      |","location":"index.ts"}' :test='undefined' />

| 最新线报 | 实测活动 | 优惠券 |
  | -------- | -------- | ------ |
  | 1        | 2        | 3      |

## Arcteryx <Site url="arcteryx.com"/>

### New Arrivals <Site url="arcteryx.com" size="sm" />

<Route namespace="arcteryx" :data='{"path":"/new-arrivals/:country/:gender","categories":["shopping"],"example":"/arcteryx/new-arrivals/us/mens","parameters":{"country":"country","gender":"gender"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["arcteryx.com/:country/en/c/:gender/new-arrivals"]}],"name":"New Arrivals","maintainers":["EthanWng97"],"description":"Country\n\n  | United States | Canada | United Kingdom |\n  | ------------- | ------ | -------------- |\n  | us            | ca     | gb             |\n\n  gender\n\n  | male | female |\n  | ---- | ------ |\n  | mens | womens |\n\n  :::tip\n  Parameter `country` can be found within the url of `Arcteryx` website.\n  :::","location":"new-arrivals.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

Country

  | United States | Canada | United Kingdom |
  | ------------- | ------ | -------------- |
  | us            | ca     | gb             |

  gender

  | male | female |
  | ---- | ------ |
  | mens | womens |

  :::tip
  Parameter `country` can be found within the url of `Arcteryx` website.
  :::

### Outlet <Site url="arcteryx.com" size="sm" />

<Route namespace="arcteryx" :data='{"path":"/outlet/:country/:gender","categories":["shopping"],"example":"/arcteryx/outlet/us/mens","parameters":{"country":"country","gender":"gender"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["outlet.arcteryx.com/:country/en/c/:gender"]}],"name":"Outlet","maintainers":["EthanWng97"],"description":"Country\n\n  | United States | Canada | United Kingdom |\n  | ------------- | ------ | -------------- |\n  | us            | ca     | gb             |\n\n  gender\n\n  | male | female |\n  | ---- | ------ |\n  | mens | womens |\n\n  :::tip\n  Parameter `country` can be found within the url of `Arcteryx` website.\n  :::","location":"outlet.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

Country

  | United States | Canada | United Kingdom |
  | ------------- | ------ | -------------- |
  | us            | ca     | gb             |

  gender

  | male | female |
  | ---- | ------ |
  | mens | womens |

  :::tip
  Parameter `country` can be found within the url of `Arcteryx` website.
  :::

### Regear New Arrivals <Site url="regear.arcteryx.com/shop/new-arrivals" size="sm" />

<Route namespace="arcteryx" :data='{"path":"/regear/new-arrivals","categories":["shopping"],"example":"/arcteryx/regear/new-arrivals","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["regear.arcteryx.com/shop/new-arrivals","regear.arcteryx.com/"]}],"name":"Regear New Arrivals","maintainers":["EthanWng97"],"url":"regear.arcteryx.com/shop/new-arrivals","location":"regear-new-arrivals.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## Bellroy <Site url="bellroy.com"/>

### New Releases <Site url="bellroy.com/collection/new-releases" size="sm" />

<Route namespace="bellroy" :data='{"path":"/new-releases","categories":["shopping"],"example":"/bellroy/new-releases","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["bellroy.com/collection/new-releases","bellroy.com/"]}],"name":"New Releases","maintainers":["EthanWng97"],"url":"bellroy.com/collection/new-releases","location":"new-releases.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## Furstar <Site url="furstar.jp"/>

### 画师列表 <Site url="furstar.jp/" size="sm" />

<Route namespace="furstar" :data='{"path":"/artists/:lang?","categories":["shopping"],"example":"/furstar/artists/cn","parameters":{"lang":"语言, 留空为jp, 支持cn, en"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["furstar.jp/"],"target":"/artists"}],"name":"画师列表","maintainers":["NeverBehave"],"url":"furstar.jp/","location":"artists.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 已经出售的角色列表 <Site url="furstar.jp" size="sm" />

<Route namespace="furstar" :data='{"path":"/archive/:lang?","categories":["shopping"],"example":"/furstar/archive/cn","parameters":{"lang":"语言, 留空为jp, 支持cn, en"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["furstar.jp/:lang/archive.php","furstar.jp/archive.php"],"target":"/archive/:lang"}],"name":"已经出售的角色列表","maintainers":["NeverBehave"],"location":"archive.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 最新售卖角色列表 <Site url="furstar.jp" size="sm" />

<Route namespace="furstar" :data='{"path":"/characters/:lang?","categories":["shopping"],"example":"/furstar/characters/cn","parameters":{"lang":"语言, 留空为jp, 支持cn, en"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["furstar.jp/:lang","furstar.jp/"],"target":"/characters/:lang"}],"name":"最新售卖角色列表","maintainers":["NeverBehave"],"location":"index.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## Gumroad <Site url="gumroad.com"/>

### Products <Site url="gumroad.com" size="sm" />

<Route namespace="gumroad" :data='{"path":"/:username/:products","categories":["shopping"],"example":"/gumroad/afkmaster/Eve10","parameters":{"username":"username, can be found in URL","products":"products name, can be found in URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Products","maintainers":["Fatpandac"],"description":"`https://afkmaster.gumroad.com/l/Eve10` -> `/gumroad/afkmaster/Eve10`","location":"index.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

`https://afkmaster.gumroad.com/l/Eve10` -> `/gumroad/afkmaster/Eve10`

## hotukdeals <Site url="www.hotukdeals.com"/>

### hottest <Site url="www.hotukdeals.com/" size="sm" />

<Route namespace="hotukdeals" :data='{"path":"/hottest","categories":["shopping"],"example":"/hotukdeals/hottest","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.hotukdeals.com/"]}],"name":"hottest","maintainers":["DIYgod"],"url":"www.hotukdeals.com/","location":"hottest.ts"}' :test='{"code":0}' />

### thread <Site url="www.hotukdeals.com" size="sm" />

<Route namespace="hotukdeals" :data='{"path":"/:type","categories":["shopping"],"example":"/hotukdeals/hot","parameters":{"type":"should be one of highlights, hot, new, discussed"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"thread","maintainers":["DIYgod"],"location":"index.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## IKEA <Site url="ikea.com"/>

### UK - New Product Release <Site url="ikea.com/gb/en/new/new-products/" size="sm" />

<Route namespace="ikea" :data='{"path":"/gb/new","categories":["shopping"],"example":"/ikea/gb/new","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ikea.com/gb/en/new/new-products/","ikea.com/"]}],"name":"UK - New Product Release","maintainers":["HenryQW"],"url":"ikea.com/gb/en/new/new-products/","location":"gb/new.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### UK - Offers <Site url="ikea.com/gb/en/offers" size="sm" />

<Route namespace="ikea" :data='{"path":"/gb/offer","categories":["shopping"],"example":"/ikea/gb/offer","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ikea.com/gb/en/offers","ikea.com/"]}],"name":"UK - Offers","maintainers":["HenryQW"],"url":"ikea.com/gb/en/offers","location":"gb/offer.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 中国 - 会员特惠 <Site url="ikea.cn/cn/zh/offers/family-offers" size="sm" />

<Route namespace="ikea" :data='{"path":"/cn/family_offers","categories":["shopping"],"example":"/ikea/cn/family_offers","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ikea.cn/cn/zh/offers/family-offers","ikea.cn/"]}],"name":"中国 - 会员特惠","maintainers":["jzhangdev"],"url":"ikea.cn/cn/zh/offers/family-offers","location":"cn/family-offers.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 中国 - 低价优选 <Site url="ikea.cn/cn/zh/campaigns/wo3-men2-de-chao1-zhi2-di1-jia4-pub8b08af40" size="sm" />

<Route namespace="ikea" :data='{"path":"/cn/low_price","categories":["shopping"],"example":"/ikea/cn/low_price","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ikea.cn/cn/zh/campaigns/wo3-men2-de-chao1-zhi2-di1-jia4-pub8b08af40","ikea.cn/"]}],"name":"中国 - 低价优选","maintainers":["jzhangdev"],"url":"ikea.cn/cn/zh/campaigns/wo3-men2-de-chao1-zhi2-di1-jia4-pub8b08af40","location":"cn/low-price.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 中国 - 当季新品推荐 <Site url="ikea.cn/cn/zh/new/" size="sm" />

<Route namespace="ikea" :data='{"path":"/cn/new","categories":["shopping"],"example":"/ikea/cn/new","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ikea.cn/cn/zh/new/","ikea.cn/"]}],"name":"中国 - 当季新品推荐","maintainers":["jzhangdev"],"url":"ikea.cn/cn/zh/new/","location":"cn/new.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## MyFigureCollection <Site url="myfigurecollection.net"/>

### Activity <Site url="zh.myfigurecollection.net/browse" size="sm" />

<Route namespace="myfigurecollection" :data='{"path":"/activity/:category?/:language?/:latestAdditions?/:latestEdits?/:latestAlerts?/:latestPictures?","categories":["shopping"],"example":"/myfigurecollection/activity","parameters":{"category":"Category, Figures by default","language":"Language, as above, `en` by default","latestAdditions":"Latest Additions, on as `1` by default, off as `0`","latestEdits":"Changes, on as `1` by default, off as `0`","latestAlerts":"Alerts, on as `1` by default, off as `0`","latestPictures":"Pictures, on as `1` by default, off as `0`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["zh.myfigurecollection.net/browse","zh.myfigurecollection.net/"],"target":"/:category?/:language?"}],"name":"Activity","maintainers":["nczitzk"],"url":"zh.myfigurecollection.net/browse","description":"Category\n\n  | Figures | Goods | Media |\n  | ------- | ----- | ----- |\n  | 0       | 1     | 2     |\n\n  Language\n\n  | Id | Language   |\n  | -- | ---------- |\n  |    | en         |\n  | de | Deutsch    |\n  | es | Español    |\n  | fi | Suomeksi   |\n  | fr | Français   |\n  | it | Italiano   |\n  | ja | 日本語     |\n  | nl | Nederlands |\n  | no | Norsk      |\n  | pl | Polski     |\n  | pt | Português  |\n  | ru | Русский    |\n  | sv | Svenska    |\n  | zh | 中文       |","location":"activity.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

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

<Route namespace="myfigurecollection" :data='{"path":"/:category?/:language?","categories":["shopping"],"example":"/myfigurecollection/potd","parameters":{"category":"分类，默认为每日圖片","language":"语言，见上表，默认为空，即 `en`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["zh.myfigurecollection.net/browse","zh.myfigurecollection.net/"]}],"name":"圖片","maintainers":["nczitzk"],"url":"zh.myfigurecollection.net/browse","description":"| 每日圖片 | 每週圖片 | 每月圖片 |\n  | -------- | -------- | -------- |\n  | potd     | potw     | potm     |","location":"index.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 每日圖片 | 每週圖片 | 每月圖片 |
  | -------- | -------- | -------- |
  | potd     | potw     | potm     |

## MyMusicSheet <Site url="mymusicsheet.com"/>

### User Sheets <Site url="mymusicsheet.com" size="sm" />

<Route namespace="mymusicsheet" :data='{"path":"/user/sheets/:username/:iso?/:freeOnly?","categories":["shopping"],"example":"/mymusicsheet/user/sheets/HalcyonMusic/USD/1","parameters":{"username":"用户名，可在URL中找到","iso":"用于显示价格的ISO 4217货币代码, 支持常见代码, 默认为人民币, 即`CNY`","freeOnly":"只返回免费谱, 任意值为开启"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["mymusicsheet.com/:username/*","mymusicsheet.com/:username"],"target":"/user/sheets/:username"}],"name":"User Sheets","maintainers":["Freddd13"],"description":"关于 ISO 4217，请参考[维基百科](https://zh.wikipedia.org/zh-cn/ISO_4217#%E7%8E%B0%E8%A1%8C%E4%BB%A3%E7%A0%81)","location":"usersheets.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

关于 ISO 4217，请参考[维基百科](https://zh.wikipedia.org/zh-cn/ISO_4217#%E7%8E%B0%E8%A1%8C%E4%BB%A3%E7%A0%81)

## Patagonia <Site url="patagonia.com"/>

### New Arrivals <Site url="patagonia.com" size="sm" />

<Route namespace="patagonia" :data='{"path":"/new-arrivals/:category","categories":["shopping"],"example":"/patagonia/new-arrivals/mens","parameters":{"category":"category, see below"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"New Arrivals","maintainers":[],"description":"| Men&#39;s | Women&#39;s | Kids&#39; & Baby | Packs & Gear |\n  | ----- | ------- | ------------ | ------------ |\n  | mens  | womens  | kids         | luggage      |","location":"new-arrivals.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| Men's | Women's | Kids' & Baby | Packs & Gear |
  | ----- | ------- | ------------ | ------------ |
  | mens  | womens  | kids         | luggage      |

## ShopBack <Site url="shopback.com.tw"/>

### Store <Site url="shopback.com.tw" size="sm" />

<Route namespace="shopback" :data='{"path":"/:store","categories":["shopping"],"example":"/shopback/shopee-mart","parameters":{"store":"Store, can be found in URL"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["shopback.com.tw/:category","shopback.com.tw/"]}],"name":"Store","maintainers":["nczitzk"],"location":"store.ts"}' :test='{"code":0}' />

## Snow Peak <Site url="snowpeak.com"/>

### New Arrivals(USA) <Site url="snowpeak.com/collections/new-arrivals" size="sm" />

<Route namespace="snowpeak" :data='{"path":"/us/new-arrivals","categories":["shopping"],"example":"/snowpeak/us/new-arrivals","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["snowpeak.com/collections/new-arrivals","snowpeak.com/"]}],"name":"New Arrivals(USA)","maintainers":["EthanWng97"],"url":"snowpeak.com/collections/new-arrivals","location":"us-new-arrivals.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## Uniqlo <Site url="www.uniqlo.com"/>

### New Arrivals <Site url="www.uniqlo.com" size="sm" />

<Route namespace="uniqlo" :data='{"path":"/new/:country/:category","categories":["shopping"],"example":"/uniqlo/new/sg/men","parameters":{"country":"currently only supports sg, us, jp","category":"supports `men` `women`, `kids`, `baby`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"New Arrivals","maintainers":["DIYgod"],"location":"new.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## Zagg <Site url="zagg.com"/>

### New Arrivals <Site url="zagg.com" size="sm" />

<Route namespace="zagg" :data='{"path":"/new-arrivals/:query?","categories":["shopping"],"example":"/zagg/new-arrivals/brand=164&cat=3038,3041","parameters":{"query":"query, search page querystring"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"New Arrivals","maintainers":["EthanWng97"],"description":"For instance, in `https://www.zagg.com/en_us/new-arrivals?brand=164&cat=3038%2C3041`, the query is `brand=164&cat=3038%2C3041`","location":"new-arrivals.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

For instance, in `https://www.zagg.com/en_us/new-arrivals?brand=164&cat=3038%2C3041`, the query is `brand=164&cat=3038%2C3041`

## 大麦网 <Site url="search.damai.cn"/>

### 票务更新 <Site url="search.damai.cn" size="sm" />

<Route namespace="damai" :data='{"path":"/activity/:city/:category/:subcategory/:keyword?","categories":["shopping"],"example":"/damai/activity/上海/音乐会/全部/柴可夫斯基","parameters":{"city":"城市，如果不需要限制，请填入`全部`","category":"分类，如果不需要限制，请填入`全部`","subcategory":"子分类，如果不需要限制，请填入`全部`","keyword":"搜索关键字，置空为不限制"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"票务更新","maintainers":["hoilc"],"description":"城市、分类名、子分类名，请参见[大麦网搜索页面](https://search.damai.cn/search.htm)","location":"activity.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

城市、分类名、子分类名，请参见[大麦网搜索页面](https://search.damai.cn/search.htm)

## 多抓鱼 <Site url="duozhuayu.com"/>

### 搜索结果 <Site url="duozhuayu.com" size="sm" />

<Route namespace="duozhuayu" :data='{"path":"/search/:wd","categories":["shopping"],"example":"/duozhuayu/search/JavaScript","parameters":{"wd":"搜索关键词"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["duozhuayu.com/search/book/:wd"]}],"name":"搜索结果","maintainers":["fengkx"],"location":"search.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## 逛丢 <Site url="guangdiu.com"/>

### 关键字搜索 <Site url="guangdiu.com" size="sm" />

<Route namespace="guangdiu" :data='{"path":"/search/:query?","categories":["shopping"],"example":"/guangdiu/search/q=百度网盘","parameters":{"query":"链接参数，对应网址问号后的内容"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"关键字搜索","maintainers":["Huzhixin00"],"location":"search.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 国内折扣 / 海外折扣 <Site url="guangdiu.com" size="sm" />

<Route namespace="guangdiu" :data='{"path":"/:query?","categories":["shopping"],"example":"/guangdiu/k=daily","parameters":{"query":"链接参数，对应网址问号后的内容"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"国内折扣 / 海外折扣","maintainers":["Fatpandac"],"description":":::tip\n  海外折扣: [`/guangdiu/k=daily&c=us`](https://rsshub.app/guangdiu/k=daily&c=us)\n  :::","location":"index.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

:::tip
  海外折扣: [`/guangdiu/k=daily&c=us`](https://rsshub.app/guangdiu/k=daily&c=us)
  :::

### 九块九 <Site url="guangdiu.com" size="sm" />

<Route namespace="guangdiu" :data='{"path":"/cheaps/:query?","categories":["shopping"],"example":"/guangdiu/cheaps/k=clothes","parameters":{"query":"链接参数，对应网址问号后的内容"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"九块九","maintainers":["fatpandac"],"location":"cheaps.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 一小时风云榜 <Site url="guangdiu.com/rank" size="sm" />

<Route namespace="guangdiu" :data='{"path":"/rank","categories":["shopping"],"example":"/guangdiu/rank","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["guangdiu.com/rank"]}],"name":"一小时风云榜","maintainers":["fatpandac"],"url":"guangdiu.com/rank","location":"rank.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## 京东 <Site url="item.jd.com"/>

### 商品价格 <Site url="item.jd.com" size="sm" />

<Route namespace="jd" :data='{"path":"/price/:id","categories":["shopping"],"example":"/jd/price/526835","parameters":{"id":"商品 id，可在商品详情页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"商品价格","maintainers":["nczitzk"],"description":":::tip\n  如商品 `https://item.jd.com/526835.html` 中的 id 为 `526835`，所以路由为 [`/jd/price/526835`](https://rsshub.app/jd/price/526835)\n  :::","location":"price.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

:::tip
  如商品 `https://item.jd.com/526835.html` 中的 id 为 `526835`，所以路由为 [`/jd/price/526835`](https://rsshub.app/jd/price/526835)
  :::

## 摩点 <Site url="modian.com"/>

### 众筹 <Site url="modian.com" size="sm" />

<Route namespace="modian" :data='{"path":"/zhongchou/:category?/:sort?/:status?","categories":["shopping"],"example":"/modian/zhongchou","parameters":{"category":"分类，见下表，默认为全部","sort":"排序，见下表，默认为最新上线","status":"状态，见下表，默认为全部"},"name":"众筹","maintainers":["nczitzk"],"description":"分类\n\n    | 全部 | 游戏  | 动漫   | 出版       | 桌游       |\n    | ---- | ----- | ------ | ---------- | ---------- |\n    | all  | games | comics | publishing | tablegames |\n\n    | 卡牌  | 潮玩模型 | 影视       | 音乐  | 活动       |\n    | ----- | -------- | ---------- | ----- | ---------- |\n    | cards | toys     | film-video | music | activities |\n\n    | 设计   | 科技       | 食品 | 爱心通道 | 动物救助 |\n    | ------ | ---------- | ---- | -------- | -------- |\n    | design | technology | food | charity  | animals  |\n\n    | 个人愿望 | 其他   |\n    | -------- | ------ |\n    | wishes   | others |\n\n    排序\n\n    | 最新上线  | 金额最高   | 评论最多     |\n    | --------- | ---------- | ------------ |\n    | top_time | top_money | top_comment |\n\n    状态\n\n    | 全部 | 创意 | 预热    | 众筹中 | 众筹成功 |\n    | ---- | ---- | ------- | ------ | -------- |\n    | all  | idea | preheat | going  | success  |","radar":[{"source":["zhongchou.modian.com/:category/:sort/:status"]}],"location":"zhongchou.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

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

## 上海文化广场 <Site url="www.shcstheatre.com"/>

### 节目列表 <Site url="www.shcstheatre.com/Program/programList.aspx" size="sm" />

<Route namespace="shcstheatre" :data='{"path":"/programs","categories":["shopping"],"example":"/shcstheatre/programs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.shcstheatre.com/Program/programList.aspx"]}],"name":"节目列表","maintainers":["fuzy112"],"url":"www.shcstheatre.com/Program/programList.aspx","location":"programs.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## 上海东方艺术中心 <Site url="shoac.com.cn"/>

### 演出月历 <Site url="shoac.com.cn/" size="sm" />

<Route namespace="shoac" :data='{"path":"/recent-show","categories":["shopping"],"example":"/shoac/recent-show","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["shoac.com.cn/"]}],"name":"演出月历","maintainers":["TonyRL"],"url":"shoac.com.cn/","location":"recent-show.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## 什么值得买 <Site url="post.smzdm.com"/>

:::tip
网站也提供了部分 RSS: [https://www.smzdm.com/dingyue](https://www.smzdm.com/dingyue)
:::

### 关键词 <Site url="post.smzdm.com" size="sm" />

<Route namespace="smzdm" :data='{"path":"/keyword/:keyword","categories":["shopping"],"example":"/smzdm/keyword/女装","parameters":{"keyword":"你想订阅的关键词"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"关键词","maintainers":["DIYgod","MeanZhang"],"location":"keyword.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 好文分类 <Site url="post.smzdm.com" size="sm" />

<Route namespace="smzdm" :data='{"path":"/haowen/fenlei/:name/:sort?","categories":["shopping"],"example":"/smzdm/haowen/fenlei/shenghuodianqi","parameters":{"name":"分类名，可在 URL 中查看","sort":"排序方式，默认为最新"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["post.smzdm.com/fenlei/:name"],"target":"/haowen/fenlei/:name"}],"name":"好文分类","maintainers":["LogicJake"],"description":"| 最新 | 周排行 | 月排行 |\n  | ---- | ------ | ------ |\n  | 0    | 7      | 30     |","location":"haowen-fenlei.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 最新 | 周排行 | 月排行 |
  | ---- | ------ | ------ |
  | 0    | 7      | 30     |

### 好文 <Site url="post.smzdm.com" size="sm" />

<Route namespace="smzdm" :data='{"path":"/haowen/:day?","categories":["shopping"],"example":"/smzdm/haowen/1","parameters":{"day":"以天为时间跨度，默认为 `all`，其余可以选择 `1`，`7`，`30`，`365`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"好文","maintainers":["LogicJake"],"location":"haowen.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 排行榜 <Site url="post.smzdm.com" size="sm" />

<Route namespace="smzdm" :data='{"path":"/ranking/:rank_type/:rank_id/:hour","categories":["shopping"],"example":"/smzdm/ranking/pinlei/11/3","parameters":{"rank_type":"榜单类型","rank_id":"榜单ID","hour":"时间跨度"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"排行榜","maintainers":["DIYgod"],"description":"-   榜单类型\n\n  | 好价品类榜 | 好价电商榜 | 海淘 TOP 榜 | 好文排行榜 | 好物排行榜 |\n  | ---------- | ---------- | ----------- | ---------- | ---------- |\n  | pinlei     | dianshang  | haitao      | haowen     | haowu      |\n\n  -   榜单 ID\n\n  好价品类榜\n\n  | 全部 | 食品生鲜 | 电脑数码 | 运动户外 | 家用电器 | 白菜 | 服饰鞋包 | 日用百货 |\n  | ---- | -------- | -------- | -------- | -------- | ---- | -------- | -------- |\n  | 11   | 12       | 13       | 14       | 15       | 17   | 74       | 75       |\n\n  好价电商榜\n\n  | 券活动 | 京东 | 天猫 | 亚马逊中国 | 国美在线 | 苏宁易购 | 网易 | 西集网 | 美国亚马逊 | 日本亚马逊 | ebay |\n  | ------ | ---- | ---- | ---------- | -------- | -------- | ---- | ------ | ---------- | ---------- | ---- |\n  | 24     | 23   | 25   | 26         | 27       | 28       | 29   | 30     | 31         | 32         | 33   |\n\n  海淘 TOP 榜\n\n  | 全部 | 海外直邮 | 美国榜 | 欧洲榜 | 澳新榜 | 亚洲榜 | 晒物榜 |\n  | ---- | -------- | ------ | ------ | ------ | ------ | ------ |\n  | 39   | 34       | 35     | 36     | 37     | 38     | hsw    |\n\n  好文排行榜\n\n  | 原创 | 资讯 |\n  | ---- | ---- |\n  | yc   | zx   |\n\n  好物排行榜\n\n  | 新晋榜 | 消费众测 | 新锐品牌 | 好物榜单 |\n  | ------ | -------- | -------- | -------- |\n  | hwall  | zc       | nb       | hw       |\n\n  -   时间跨度\n\n  | 3 小时 | 12 小时 | 24 小时 |\n  | ------ | ------- | ------- |\n  | 3      | 12      | 24      |","location":"ranking.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

-   榜单类型

  | 好价品类榜 | 好价电商榜 | 海淘 TOP 榜 | 好文排行榜 | 好物排行榜 |
  | ---------- | ---------- | ----------- | ---------- | ---------- |
  | pinlei     | dianshang  | haitao      | haowen     | haowu      |

  -   榜单 ID

  好价品类榜

  | 全部 | 食品生鲜 | 电脑数码 | 运动户外 | 家用电器 | 白菜 | 服饰鞋包 | 日用百货 |
  | ---- | -------- | -------- | -------- | -------- | ---- | -------- | -------- |
  | 11   | 12       | 13       | 14       | 15       | 17   | 74       | 75       |

  好价电商榜

  | 券活动 | 京东 | 天猫 | 亚马逊中国 | 国美在线 | 苏宁易购 | 网易 | 西集网 | 美国亚马逊 | 日本亚马逊 | ebay |
  | ------ | ---- | ---- | ---------- | -------- | -------- | ---- | ------ | ---------- | ---------- | ---- |
  | 24     | 23   | 25   | 26         | 27       | 28       | 29   | 30     | 31         | 32         | 33   |

  海淘 TOP 榜

  | 全部 | 海外直邮 | 美国榜 | 欧洲榜 | 澳新榜 | 亚洲榜 | 晒物榜 |
  | ---- | -------- | ------ | ------ | ------ | ------ | ------ |
  | 39   | 34       | 35     | 36     | 37     | 38     | hsw    |

  好文排行榜

  | 原创 | 资讯 |
  | ---- | ---- |
  | yc   | zx   |

  好物排行榜

  | 新晋榜 | 消费众测 | 新锐品牌 | 好物榜单 |
  | ------ | -------- | -------- | -------- |
  | hwall  | zc       | nb       | hw       |

  -   时间跨度

  | 3 小时 | 12 小时 | 24 小时 |
  | ------ | ------- | ------- |
  | 3      | 12      | 24      |

### 用户文章 <Site url="post.smzdm.com" size="sm" />

<Route namespace="smzdm" :data='{"path":"/article/:uid","categories":["shopping"],"example":"/smzdm/article/6902738986","parameters":{"uid":"用户 id，网址上直接可以看到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["zhiyou.smzdm.com/member/:uid/article"]}],"name":"用户文章","maintainers":["xfangbao"],"location":"article.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 用户爆料 <Site url="post.smzdm.com" size="sm" />

<Route namespace="smzdm" :data='{"path":"/baoliao/:uid","categories":["shopping"],"example":"/smzdm/baoliao/7367111021","parameters":{"uid":"用户id，网址上直接可以看到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["zhiyou.smzdm.com/member/:uid/baoliao"]}],"name":"用户爆料","maintainers":["nczitzk"],"location":"baoliao.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## 淘宝众筹 <Site url="izhongchou.taobao.com"/>

### 众筹项目 <Site url="izhongchou.taobao.com" size="sm" />

<Route namespace="taobao" :data='{"path":"/zhongchou/:type?","categories":["shopping"],"example":"/taobao/zhongchou/all","parameters":{"type":"类型, 默认为 `all` 全部"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"众筹项目","maintainers":["xyqfer","Fatpandac"],"description":"| 全部 | 科技 | 食品        | 动漫 | 设计   | 公益 | 娱乐 | 影音  | 书籍 | 游戏 | 其他  |\n  | ---- | ---- | ----------- | ---- | ------ | ---- | ---- | ----- | ---- | ---- | ----- |\n  | all  | tech | agriculture | acg  | design | love | tele | music | book | game | other |","location":"zhongchou.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 全部 | 科技 | 食品        | 动漫 | 设计   | 公益 | 娱乐 | 影音  | 书籍 | 游戏 | 其他  |
  | ---- | ---- | ----------- | ---- | ------ | ---- | ---- | ----- | ---- | ---- | ----- |
  | all  | tech | agriculture | acg  | design | love | tele | music | book | game | other |

## 特斯拉中国 <Site url="tesla.cn"/>

### 价格 <Site url="tesla.cn/model3/design" size="sm" />

<Route namespace="tesla" :data='{"path":"/price","categories":["shopping"],"example":"/tesla/price","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["tesla.cn/model3/design","tesla.cn/"]}],"name":"价格","maintainers":["xiaokyo"],"url":"tesla.cn/model3/design","location":"price/index.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 权益中心 <Site url="tesla.cn" size="sm" />

<Route namespace="tesla" :data='{"path":"/cx/:category?/:city?","categories":["shopping"],"example":"/tesla/cx/生活方式/北京","parameters":{"category":"分类，见下表，默认为空，即全部","city":"城市，默认为空，即全国"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"权益中心","maintainers":["simonsmh","nczitzk"],"description":"| 充电免停 | 酒店 | 美食 | 生活方式 |\n  | -------- | ---- | ---- | -------- |\n\n  :::tip\n  分类为 **充电免停** 时，城市参数不起作用\n  :::\n\n  <details>\n    <summary>可选城市</summary>\n\n    | 成都 | 深圳 | 洛阳 | 北京 | 南京 | 绍兴 |\n    | ---- | ---- | ---- | ---- | ---- | ---- |\n\n    | 西安 | 上海 | 阿坝藏族羌族自治州 | 重庆 | 郑州 | 天津 |\n    | ---- | ---- | ------------------ | ---- | ---- | ---- |\n\n    | 晋中 | 三亚 | 湖州 | 苏州 | 扬州 | 秦皇岛 |\n    | ---- | ---- | ---- | ---- | ---- | ------ |\n\n    | 长沙 | 武汉 | 安阳 | 温州 | 瑞安 | 石家庄 |\n    | ---- | ---- | ---- | ---- | ---- | ------ |\n\n    | 佛山 | 广州 | 杭州 | 烟台 | 沧州 | 张家港 |\n    | ---- | ---- | ---- | ---- | ---- | ------ |\n\n    | 金华 | 临沧 | 大理 | 南昌 | 贵阳 | 信阳 |\n    | ---- | ---- | ---- | ---- | ---- | ---- |\n\n    | 张家口 | 铜仁 | 沈阳 | 合肥 | 黔东 | 高邮 |\n    | ------ | ---- | ---- | ---- | ---- | ---- |\n\n    | 三河 | 安顺 | 莆田 | 阳江 | 南宁 | 台州 |\n    | ---- | ---- | ---- | ---- | ---- | ---- |\n\n    | 余姚 | 淄博 | 三明 | 中山 | 宁波 | 厦门 |\n    | ---- | ---- | ---- | ---- | ---- | ---- |\n\n    | 永康 | 慈溪 | 台山 | 福州 | 无锡 | 宜昌 |\n    | ---- | ---- | ---- | ---- | ---- | ---- |\n\n    | 泉州 | 肇庆 | 太仓 | 珠海 | 邢台 | 衡水 |\n    | ---- | ---- | ---- | ---- | ---- | ---- |\n\n    | 温岭 | 宜兴 | 东莞 | 威海 | 南通 | 舟山 |\n    | ---- | ---- | ---- | ---- | ---- | ---- |\n\n    | 都匀 | 长治 | 江阴 | 云浮 | 常州 | 唐山 |\n    | ---- | ---- | ---- | ---- | ---- | ---- |\n\n    | 平湖 | 商丘 | 保定 | 泰州 | 青岛 | 龙口 |\n    | ---- | ---- | ---- | ---- | ---- | ---- |\n\n    | 泰安 | 岳阳 | 惠州 | 徐州 | 哈尔滨 | 潍坊 |\n    | ---- | ---- | ---- | ---- | ------ | ---- |\n\n    | 大同 | 嘉兴 | 毕节 | 临汾 | 江门 | 诸暨 |\n    | ---- | ---- | ---- | ---- | ---- | ---- |\n\n    | 儋州 | 衢州 | 大连 | 昆山 | 靖江 | 常熟 |\n    | ---- | ---- | ---- | ---- | ---- | ---- |\n\n    | 罗定 | 丽江 | 晋江 | 乐清 | 茂名 | 福清 |\n    | ---- | ---- | ---- | ---- | ---- | ---- |\n\n    | 廊坊 | 兰溪 | 汕尾 | 滨州 | 昆明 | 玉环 |\n    | ---- | ---- | ---- | ---- | ---- | ---- |\n\n    | 绵阳 | 漳州 | 德州 | 聊城 | 龙岩 | 临沂 |\n    | ---- | ---- | ---- | ---- | ---- | ---- |\n\n    | 新沂 | 桐乡 | 迪庆藏族自治州 | 汕头 | 潮州 | 驻马店 |\n    | ---- | ---- | -------------- | ---- | ---- | ------ |\n\n    | 曲阜 | 郴州 | 济源 | 兴义 |\n    | ---- | ---- | ---- | ---- |\n  </details>","location":"cx.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 充电免停 | 酒店 | 美食 | 生活方式 |
  | -------- | ---- | ---- | -------- |

  :::tip
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

## 线报酷 <Site url="new.xianbao.fun"/>

### 线板酷 <Site url="new.xianbao.fun" size="sm" />

<Route namespace="xianbao" :data='{"path":"/:category?","name":"线板酷","url":"new.xianbao.fun","maintainers":["nashi23"],"example":"/xianbao","parameters":{"category":"类别id，默认为：latest"},"description":"\n| 分类         | id             |\n| ------------ | -------------- |\n| 最新         | latest         |\n| 赚客吧       | zuankeba       |\n| 赚客吧热帖   | zuankeba-hot   |\n| 新赚吧       | xinzuanba      |\n| 新赚吧热帖   | xinzuanba-hot  |\n| 微博         | weibo          |\n| 微博热帖     | weibo-hot      |\n| 豆瓣线报     | douban         |\n| 豆瓣热帖     | douban-hot     |\n| 酷安         | kuan           |\n| 小嘀咕       | xiaodigu       |\n| 葫芦侠       | huluxia        |\n| 小刀娱乐网   | xiadao         |\n| 技术QQ网     | qqjishu        |\n| YYOK大全     | yyok           |\n| 活动资讯网   | huodong        |\n| 免费赚钱中心 | mianfei        |\n| 一小时       | yixiaoshi      |\n| 三小时       | sanxiaoshi     |\n| 六小时       | liuxiaoshi     |\n| 十二小时     | shierxiaoshi   |\n| 二十四小时   | ershisixiaoshi |\n| 四十八小时   | sishibaxiaoshi |\n| 今天         | jintian        |\n| 昨天         | zuotian        |\n| 前天         | qiantian       |\n| 三天         | santian        |\n| 五天         | wutian         |\n| 七天         | qitian         |\n| 十五天       | shiwutian      |","categories":["shopping"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["new.xianbao.fun"],"target":"/"}],"location":"index.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />


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

## 消费者报道 <Site url="www.ccreports.com.cn"/>

### 要闻 <Site url="www.ccreports.com.cn/" size="sm" />

<Route namespace="ccreports" :data='{"path":"/article","categories":["shopping"],"example":"/ccreports/article","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.ccreports.com.cn/"]}],"name":"要闻","maintainers":["EsuRt","Fatpandac"],"url":"www.ccreports.com.cn/","location":"index.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## 小米 <Site url="mi.com"/>

### 小米众筹 <Site url="mi.com" size="sm" />

<Route namespace="mi" :data='{"path":"/crowdfunding","categories":["shopping"],"example":"/mi/crowdfunding","name":"小米众筹","maintainers":["DIYgod"],"location":"crowdfunding.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## 小米有品 <Site url="xiaomiyoupin.com"/>

### 小米有品众筹 <Site url="xiaomiyoupin.com/" size="sm" />

<Route namespace="xiaomiyoupin" :data='{"path":"/crowdfunding","categories":["shopping"],"example":"/xiaomiyoupin/crowdfunding","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["xiaomiyoupin.com/"]}],"name":"小米有品众筹","maintainers":["bigfei"],"url":"xiaomiyoupin.com/","location":"crowdfunding.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 小米有品每日上新 <Site url="xiaomiyoupin.com/" size="sm" />

<Route namespace="xiaomiyoupin" :data='{"path":"/latest","categories":["shopping"],"example":"/xiaomiyoupin/latest","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["xiaomiyoupin.com/"]}],"name":"小米有品每日上新","maintainers":["xyqfer","DIYgod","bigfei"],"url":"xiaomiyoupin.com/","location":"latest.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## 秀动网 <Site url="www.showstart.com"/>

### 厂牌 - 演出更新 <Site url="www.showstart.com" size="sm" />

<Route namespace="showstart" :data='{"path":"/brand/:id","categories":["shopping"],"example":"/showstart/brand/34707","parameters":{"id":"厂牌 ID"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.showstart.com/host/:id"]}],"name":"厂牌 - 演出更新","maintainers":["lchtao26"],"description":":::tip\n厂牌 ID 查询: `/showstart/search/brand/:keyword`，如: [https://rsshub.app/showstart/search/brand/ 声场](https://rsshub.app/showstart/search/brand/声场)\n:::","location":"brand.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

:::tip
厂牌 ID 查询: `/showstart/search/brand/:keyword`，如: [https://rsshub.app/showstart/search/brand/ 声场](https://rsshub.app/showstart/search/brand/声场)
:::

### 演出更新 <Site url="www.showstart.com" size="sm" />

<Route namespace="showstart" :data='{"path":"/event/:cityCode/:showStyle?","categories":["shopping"],"example":"/showstart/event/571/3","parameters":{"cityCode":"演出城市 (编号)","showStyle":"演出风格 (编号)"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"演出更新","maintainers":["lchtao26"],"description":":::tip\n-   演出城市 `cityCode` 查询: `/showstart/search/city/:keyword`, 如: [https://rsshub.app/showstart/search/city/ 杭州](https://rsshub.app/showstart/search/city/杭州)\n\n-   演出风格 `showStyle` 查询: `/showstart/search/style/:keyword`，如: [https://rsshub.app/showstart/search/style/ 摇滚](https://rsshub.app/showstart/search/style/摇滚)\n:::","location":"event.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

:::tip
-   演出城市 `cityCode` 查询: `/showstart/search/city/:keyword`, 如: [https://rsshub.app/showstart/search/city/ 杭州](https://rsshub.app/showstart/search/city/杭州)

-   演出风格 `showStyle` 查询: `/showstart/search/style/:keyword`，如: [https://rsshub.app/showstart/search/style/ 摇滚](https://rsshub.app/showstart/search/style/摇滚)
:::

### 演出搜索 <Site url="www.showstart.com" size="sm" />

<Route namespace="showstart" :data='{"path":"/search/:type/:keyword?","categories":["shopping"],"example":"/showstart/search/live","parameters":{"type":"类别","keyword":"搜索关键词"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"演出搜索","maintainers":["lchtao26"],"location":"search.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 音乐人 - 演出更新 <Site url="www.showstart.com" size="sm" />

<Route namespace="showstart" :data='{"path":"/artist/:id","categories":["shopping"],"example":"/showstart/artist/301783","parameters":{"id":"音乐人 ID"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.showstart.com/artist/:id"]}],"name":"音乐人 - 演出更新","maintainers":["lchtao26"],"description":":::tip\n音乐人 ID 查询: `/showstart/search/artist/:keyword`，如: [https://rsshub.app/showstart/search/artist/ 周杰伦](https://rsshub.app/showstart/search/artist/周杰伦)\n:::","location":"artist.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

:::tip
音乐人 ID 查询: `/showstart/search/artist/:keyword`，如: [https://rsshub.app/showstart/search/artist/ 周杰伦](https://rsshub.app/showstart/search/artist/周杰伦)
:::

## 中国养猪网 <Site url="zhujia.zhuwang.cc"/>

### 全国今日生猪价格 <Site url="zhujia.zhuwang.cc/" size="sm" />

<Route namespace="zhuwang" :data='{"path":"/zhujia","categories":["shopping"],"example":"/zhuwang/zhujia","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["zhujia.zhuwang.cc/"]}],"name":"全国今日生猪价格","maintainers":[],"url":"zhujia.zhuwang.cc/","location":"index.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

