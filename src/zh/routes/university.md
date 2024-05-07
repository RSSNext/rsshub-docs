# 🎓 大学通知

## East China Normal University 华东师范大学 <Site url="ecnu.edu.cn"/>

### ACM Online-Judge contests list <Site url="acm.ecnu.edu.cn/contest/" size="sm" />

<Route namespace="ecnu" :data='{"path":"/acm/contest/:category?","categories":["university"],"example":"/ecnu/acm/contest/public","parameters":{"category":"category is optional, default is all, use `public` for public only contests"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["acm.ecnu.edu.cn/contest/","acm.ecnu.edu.cn/"],"target":"/acm/contest/"}],"name":"ACM Online-Judge contests list","maintainers":["a180285"],"url":"acm.ecnu.edu.cn/contest/","location":"contest.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 教务处通知 <Site url="ecnu.edu.cn" size="sm" />

<Route namespace="ecnu" :data='{"path":"/jwc","categories":["university"],"example":"/ecnu/jwc","radar":[{"source":["www.jwc.ecnu.edu.cn","www.ecnu.edu.cn"],"target":"/tzgg"}],"name":"教务处通知","maintainers":["markbang"],"location":"jwc.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 研究生院 <Site url="yz.kaoyan.com/ecnu/tiaoji" size="sm" />

<Route namespace="ecnu" :data='{"path":"/yjs","categories":["university"],"example":"/ecnu/yjs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yz.kaoyan.com/ecnu/tiaoji","yz.kaoyan.com/"]}],"name":"研究生院","maintainers":["shengmaosu"],"url":"yz.kaoyan.com/ecnu/tiaoji","location":"yjs.ts"}' :test='{"code":0}' />

## Nanjing University of the Arts 南京艺术学院 <Site url="index.nua.edu.cn"/>

### Graduate Institute <Site url="index.nua.edu.cn" size="sm" />

<Route namespace="nua" :data='{"path":"/gra/:type","categories":["university"],"example":"/nua/gra/1959","parameters":{"type":"News Type"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["grad.nua.edu.cn/:type/list.htm"]}],"name":"Graduate Institute","maintainers":["evnydd0sf"],"description":"| News Type | Parameters |\n  | --------- | ---------- |\n  | 招生工作  | 1959       |\n  | 培养工作  | 1962       |\n  | 学位工作  | 1958       |","location":"gra.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| News Type | Parameters |
  | --------- | ---------- |
  | 招生工作  | 1959       |
  | 培养工作  | 1962       |
  | 学位工作  | 1958       |

### Library <Site url="index.nua.edu.cn" size="sm" />

<Route namespace="nua" :data='{"path":"/lib/:type","categories":["university"],"example":"/nua/lib/xwdt","parameters":{"type":"News Type"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["lib.nua.edu.cn/:type/list.htm"]}],"name":"Library","maintainers":["evnydd0sf"],"description":"| News Type | Parameters |\n  | --------- | ---------- |\n  | 新闻动态  | xwdt       |\n  | 党建动态  | djdt       |\n  | 资源动态  | zydt       |\n  | 服务动态  | fwdt       |","location":"lib.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| News Type | Parameters |
  | --------- | ---------- |
  | 新闻动态  | xwdt       |
  | 党建动态  | djdt       |
  | 资源动态  | zydt       |
  | 服务动态  | fwdt       |

### Official Information <Site url="index.nua.edu.cn" size="sm" />

<Route namespace="nua" :data='{"path":"/index/:type","categories":["university"],"example":"/nua/index/346","parameters":{"type":"News Type"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["index.nua.edu.cn/:type/list.htm"]}],"name":"Official Information","maintainers":["evnydd0sf"],"description":"| News Type | Parameters |\n  | --------- | ---------- |\n  | 公告      | 346        |\n  | 南艺要闻  | 332        |","location":"index.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| News Type | Parameters |
  | --------- | ---------- |
  | 公告      | 346        |
  | 南艺要闻  | 332        |

### School of Design <Site url="index.nua.edu.cn" size="sm" />

<Route namespace="nua" :data='{"path":"/dc/:type","categories":["university"],"example":"/nua/dc/news","parameters":{"type":"News Type"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["dc.nua.edu.cn/:type/list.htm"]}],"name":"School of Design","maintainers":["evnydd0sf"],"description":"| News Type                | Parameters |\n  | ------------------------ | ---------- |\n  | 学院新闻 NEWS            | news       |\n  | 展览 EXHIBITION          | exhibition |\n  | 研创 RESEARCH & CREATION | rc         |\n  | 项目 PROJECT             | project    |\n  | 党团 PARTY               | party      |\n  | 后浪 YOUTH               | youth      |","location":"dc.ts"}' :test='{"code":0}' />

| News Type                | Parameters |
  | ------------------------ | ---------- |
  | 学院新闻 NEWS            | news       |
  | 展览 EXHIBITION          | exhibition |
  | 研创 RESEARCH & CREATION | rc         |
  | 项目 PROJECT             | project    |
  | 党团 PARTY               | party      |
  | 后浪 YOUTH               | youth      |

### Shuangxing Information <Site url="index.nua.edu.cn" size="sm" />

<Route namespace="nua" :data='{"path":"/sxw/:type","categories":["university"],"example":"/nua/sxw/230","parameters":{"type":"News Type"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["sxw.nua.edu.cn/:type/list.htm"]}],"name":"Shuangxing Information","maintainers":["evnydd0sf"],"description":"| News Type | Parameters |\n  | --------- | ---------- |\n  | 校园电视  | 230        |\n  | 院部动态  | 232        |\n  | 动感校园  | 233        |\n  | 招就指南  | 234        |\n  | 南艺院报  | 236        |","location":"sxw.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| News Type | Parameters |
  | --------- | ---------- |
  | 校园电视  | 230        |
  | 院部动态  | 232        |
  | 动感校园  | 233        |
  | 招就指南  | 234        |
  | 南艺院报  | 236        |

## Tianjin University 天津大学 <Site url="cic.tju.edu.cn"/>

### Admission Office of Graduate <Site url="cic.tju.edu.cn" size="sm" />

<Route namespace="tju" :data='{"path":"/yzb/:type?","categories":["university"],"example":"/tju/yzb/notice","parameters":{"type":"default `notice`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Admission Office of Graduate","maintainers":["SuperPung"],"description":"| School-level Notice | Master | Doctor | On-the-job Degree |\n  | :-----------------: | :----: | :----: | :---------------: |\n  |        notice       | master | doctor |        job        |","location":"yzb/index.ts"}' :test='{"code":0}' />

| School-level Notice | Master | Doctor | On-the-job Degree |
  | :-----------------: | :----: | :----: | :---------------: |
  |        notice       | master | doctor |        job        |

### College of Intelligence and Computing <Site url="cic.tju.edu.cn" size="sm" />

<Route namespace="tju" :data='{"path":"/cic/:type?","categories":["university"],"example":"/tju/cic/news","parameters":{"type":"default `news`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"College of Intelligence and Computing","maintainers":["SuperPung"],"description":"| College News | Notification | TJU Forum for CIC |\n  | :----------: | :----------: | :---------------: |\n  |     news     | notification |       forum       |","location":"cic/index.ts"}' :test='{"code":0}' />

| College News | Notification | TJU Forum for CIC |
  | :----------: | :----------: | :---------------: |
  |     news     | notification |       forum       |

### News <Site url="cic.tju.edu.cn" size="sm" />

<Route namespace="tju" :data='{"path":"/news/:type?","categories":["university"],"example":"/tju/news/focus","parameters":{"type":"default `focus`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"News","maintainers":["SuperPung"],"description":"| Focus on TJU | General News | Internal News | Media Report | Pictures of TJU |\n  | :----------: | :----------: | :-----------: | :----------: | :-------------: |\n  |     focus    |    general   |    internal   |     media    |     picture     |","location":"news/index.ts"}' :test='{"code":0}' />

| Focus on TJU | General News | Internal News | Media Report | Pictures of TJU |
  | :----------: | :----------: | :-----------: | :----------: | :-------------: |
  |     focus    |    general   |    internal   |     media    |     picture     |

### The Office of Academic Affairs <Site url="cic.tju.edu.cn" size="sm" />

<Route namespace="tju" :data='{"path":"/oaa/:type?","categories":["university"],"example":"/tju/oaa/news","parameters":{"type":"default `news`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"The Office of Academic Affairs","maintainers":["AmosChenYQ","SuperPung"],"description":"| News | Notification |\n  | :--: | :----------: |\n  | news | notification |","location":"oaa/index.ts"}' :test='{"code":0}' />

| News | Notification |
  | :--: | :----------: |
  | news | notification |

## University of Washington <Site url="gixnetwork.org"/>

### Global Innovation Exchange News <Site url="gixnetwork.org" size="sm" />

<Route namespace="uw" :data='{"path":"/gix/news/:category","categories":["university"],"example":"/uw/gix/news/blog","parameters":{"category":"Blog Type"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gixnetwork.org/news/:category"]}],"name":"Global Innovation Exchange News","maintainers":["dykderrick"],"description":"| Blog | In The News |\n  | ---- | ----------- |\n  | blog | inthenews   |","location":"gix/news.ts"}' :test='{"code":0}' />

| Blog | In The News |
  | ---- | ----------- |
  | blog | inthenews   |

## 安徽建筑大学 <Site url="news.ahjzu.edu.cn"/>

### 通知公告 <Site url="news.ahjzu.edu.cn/20/list.htm" size="sm" />

<Route namespace="ahjzu" :data='{"path":"/news","categories":["university"],"example":"/ahjzu/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["news.ahjzu.edu.cn/20/list.htm"]}],"name":"通知公告","maintainers":["Yuk-0v0"],"url":"news.ahjzu.edu.cn/20/list.htm","location":"news.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

## 北京理工大学 <Site url="cs.bit.edu.cn"/>

### 计院通知 <Site url="cs.bit.edu.cn/tzgg" size="sm" />

<Route namespace="bit" :data='{"path":"/cs","categories":["university"],"example":"/bit/cs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["cs.bit.edu.cn/tzgg","cs.bit.edu.cn/"]}],"name":"计院通知","maintainers":["sinofp"],"url":"cs.bit.edu.cn/tzgg","location":"cs/cs.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 教务处通知 <Site url="jwc.bit.edu.cn/tzgg" size="sm" />

<Route namespace="bit" :data='{"path":"/jwc","categories":["university"],"example":"/bit/jwc","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["jwc.bit.edu.cn/tzgg","jwc.bit.edu.cn/"]}],"name":"教务处通知","maintainers":["sinofp"],"url":"jwc.bit.edu.cn/tzgg","location":"jwc/jwc.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 人才招聘 <Site url="rszhaopin.bit.edu.cn/" size="sm" />

<Route namespace="bit" :data='{"path":"/rszhaopin","categories":["university"],"example":"/bit/rszhaopin","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["rszhaopin.bit.edu.cn/"]}],"name":"人才招聘","maintainers":["nczitzk"],"url":"rszhaopin.bit.edu.cn/","location":"rszhaopin.ts"}' :test='{"code":0}' />

### 研究生院招生信息 <Site url="grd.bit.edu.cn/zsgz/zsxx/index.htm" size="sm" />

<Route namespace="bit" :data='{"path":"/yjs","categories":["university"],"example":"/bit/yjs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["grd.bit.edu.cn/zsgz/zsxx/index.htm","grd.bit.edu.cn/"]}],"name":"研究生院招生信息","maintainers":["shengmaosu"],"url":"grd.bit.edu.cn/zsgz/zsxx/index.htm","location":"yjs.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

## 北京林业大学 <Site url="graduate.bjfu.edu.cn"/>

### 教务处通知公告 <Site url="graduate.bjfu.edu.cn" size="sm" />

<Route namespace="bjfu" :data='{"path":"/jwc/:type","categories":["university"],"example":"/bjfu/jwc/jwkx","parameters":{"type":"通知类别"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["jwc.bjfu.edu.cn/:type/index.html"]}],"name":"教务处通知公告","maintainers":["markmingjie"],"description":"| 教务快讯 | 考试信息 | 课程信息 | 教改动态 | 图片新闻 |\n  | -------- | -------- | -------- | -------- | -------- |\n  | jwkx     | ksxx     | kcxx     | jgdt     | tpxw     |","location":"jwc/index.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 教务快讯 | 考试信息 | 课程信息 | 教改动态 | 图片新闻 |
  | -------- | -------- | -------- | -------- | -------- |
  | jwkx     | ksxx     | kcxx     | jgdt     | tpxw     |

### 科技处通知公告 <Site url="kyc.bjfu.edu.cn/" size="sm" />

<Route namespace="bjfu" :data='{"path":"/kjc","categories":["university"],"example":"/bjfu/kjc","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["kyc.bjfu.edu.cn/"]}],"name":"科技处通知公告","maintainers":["markmingjie"],"url":"kyc.bjfu.edu.cn/","location":"kjc.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 绿色新闻网 <Site url="graduate.bjfu.edu.cn" size="sm" />

<Route namespace="bjfu" :data='{"path":"/news/:type","categories":["university"],"example":"/bjfu/news/lsyw","parameters":{"type":"新闻栏目"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["news.bjfu.edu.cn/:type/index.html"]}],"name":"绿色新闻网","maintainers":["markmingjie"],"description":"| 绿色要闻 | 校园动态 | 教学科研 | 党建思政 | 一周排行 |\n  | -------- | -------- | -------- | -------- | -------- |\n  | lsyw     | xydt     | jxky     | djsz     | yzph     |","location":"news/index.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 绿色要闻 | 校园动态 | 教学科研 | 党建思政 | 一周排行 |
  | -------- | -------- | -------- | -------- | -------- |
  | lsyw     | xydt     | jxky     | djsz     | yzph     |

### 信息学院通知 <Site url="graduate.bjfu.edu.cn" size="sm" />

<Route namespace="bjfu" :data='{"path":"/it/:type","categories":["university"],"example":"/bjfu/it/xyxw","parameters":{"type":"通知类别"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["it.bjfu.edu.cn/:type/index.html"]}],"name":"信息学院通知","maintainers":["wzc-blog"],"description":"| 学院新闻 | 科研动态 | 本科生培养 | 研究生培养 |\n  | -------- | -------- | ---------- | ---------- |\n  | xyxw     | kydt     | pydt       | pydt2      |","location":"it/index.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 学院新闻 | 科研动态 | 本科生培养 | 研究生培养 |
  | -------- | -------- | ---------- | ---------- |
  | xyxw     | kydt     | pydt       | pydt2      |

### 研究生院培养动态 <Site url="graduate.bjfu.edu.cn/" size="sm" />

<Route namespace="bjfu" :data='{"path":"/grs","categories":["university"],"example":"/bjfu/grs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["graduate.bjfu.edu.cn/"]}],"name":"研究生院培养动态","maintainers":["markmingjie"],"url":"graduate.bjfu.edu.cn/","location":"grs.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

## 北京师范大学 <Site url="bs.bnu.edu.cn"/>

### Unknown <Site url="bs.bnu.edu.cn" size="sm" />

<Route namespace="bnu" :data='{"path":"/fdy/:path{.+}?","name":"Unknown","maintainers":[],"location":"fdy.ts"}' :test='undefined' />

### Unknown <Site url="bs.bnu.edu.cn" size="sm" />

<Route namespace="bnu" :data='{"path":"/lib/:category?","radar":[{"source":["www.lib.bnu.edu.cn/:category/index.htm"],"target":"/lib/:category"}],"name":"Unknown","maintainers":["TonyRL"],"location":"lib.ts"}' :test='undefined' />

### 党委学生工作部 <Site url="bs.bnu.edu.cn" size="sm" />

<Route namespace="bnu" :data='{"path":"/dwxgb/:category/:type","categories":["university"],"example":"/bnu/dwxgb/xwzx/tzgg","parameters":{"category":"大分类","type":"子分类，例子如下"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["dwxgb.bnu.edu.cn/:category/:type/index.html"]}],"name":"党委学生工作部","maintainers":["Fatpandac"],"description":"`https://dwxgb.bnu.edu.cn/xwzx/tzgg/index.html` 则对应为 `/bnu/dwxgb/xwzx/tzgg","location":"dwxgb.ts"}' :test='{"code":1,"message":"expected &#39;RSSHub&#39; not to be &#39;RSSHub&#39; // Object.is equality"}' />

`https://dwxgb.bnu.edu.cn/xwzx/tzgg/index.html` 则对应为 `/bnu/dwxgb/xwzx/tzgg

### 教务部（研究生院） <Site url="jwb.bnu.edu.cn/tzgg/index.htm" size="sm" />

<Route namespace="bnu" :data='{"path":"/jwb","categories":["university"],"example":"/bnu/jwb","parameters":{},"radar":[{"source":["jwb.bnu.edu.cn"]}],"name":"教务部（研究生院）","maintainers":["ladeng07"],"url":"jwb.bnu.edu.cn/tzgg/index.htm","location":"jwb.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 经济与工商管理学院 <Site url="bs.bnu.edu.cn" size="sm" />

<Route namespace="bnu" :data='{"path":"/bs/:category?","categories":["university"],"example":"/bnu/bs","parameters":{"category":"分类，见下表，默认为学院新闻"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["bs.bnu.edu.cn/:category/index.html"],"target":"/bs/:category"}],"name":"经济与工商管理学院","maintainers":["nczitzk"],"description":"| 学院新闻 | 通知公告 | 学术成果 | 学术讲座 | 教师观点 | 人才招聘 |\n  | -------- | -------- | -------- | -------- | -------- | -------- |\n  | xw       | zytzyyg  | xzcg     | xzjz     | xz       | bshzs    |","location":"bs.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 学院新闻 | 通知公告 | 学术成果 | 学术讲座 | 教师观点 | 人才招聘 |
  | -------- | -------- | -------- | -------- | -------- | -------- |
  | xw       | zytzyyg  | xzcg     | xzjz     | xz       | bshzs    |

### 经济与工商管理学院MBA <Site url="mba.bnu.edu.cn" size="sm" />

<Route namespace="bnu" :data='{"path":"/mba/:category{.+}?","name":"经济与工商管理学院MBA","url":"mba.bnu.edu.cn","maintainers":["nczitzk"],"example":"/bnu/mba/xwdt","parameters":{"category":"分类，默认为 xwdt，即新闻聚焦"},"description":":::tip\n  若订阅 [新闻聚焦](https://mba.bnu.edu.cn/xwdt/index.html)，网址为 `https://mba.bnu.edu.cn/xwdt/index.html`。截取 `https://mba.bnu.edu.cn/` 到末尾 `/index.html` 的部分 `xwdt` 作为参数填入，此时路由为 [`/bnu/mba/xwdt`](https://rsshub.app/bnu/mba/xwdt)。\n  :::\n\n  #### [主页](https://mba.bnu.edu.cn)\n\n  | [新闻聚焦](https://mba.bnu.edu.cn/xwdt/index.html) | [通知公告](https://mba.bnu.edu.cn/tzgg/index.html) | [MBA 系列讲座](https://mba.bnu.edu.cn/mbaxljz/index.html) |\n  | -------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------------- |\n  | [xwdt](https://rsshub.app/bnu/mba/xwdt)            | [tzgg](https://rsshub.app/bnu/mba/tzgg)            | [mbaxljz](https://rsshub.app/bnu/mba/mbaxljz)             |\n\n  #### [招生动态](https://mba.bnu.edu.cn/zsdt/zsjz/index.html)\n\n  | [下载专区](https://mba.bnu.edu.cn/zsdt/cjwt/index.html) |\n  | ------------------------------------------------------- |\n  | [zsdt/cjwt](https://rsshub.app/bnu/mba/zsdt/cjwt)       |\n\n  #### [国际视野](https://mba.bnu.edu.cn/gjhz/hwjd/index.html)\n\n  | [海外基地](https://mba.bnu.edu.cn/gjhz/hwjd/index.html) | [学位合作](https://mba.bnu.edu.cn/gjhz/xwhz/index.html) | [长期交换](https://mba.bnu.edu.cn/gjhz/zqjh/index.html) | [短期项目](https://mba.bnu.edu.cn/gjhz/dqxm/index.html) |\n  | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |\n  | [gjhz/hwjd](https://rsshub.app/bnu/mba/gjhz/hwjd)       | [gjhz/xwhz](https://rsshub.app/bnu/mba/gjhz/xwhz)       | [gjhz/zqjh](https://rsshub.app/bnu/mba/gjhz/zqjh)       | [gjhz/dqxm](https://rsshub.app/bnu/mba/gjhz/dqxm)       |\n\n  #### [校园生活](https://mba.bnu.edu.cn/xysh/xszz/index.html)\n\n  | [学生组织](https://mba.bnu.edu.cn/xysh/xszz/index.html) |\n  | ------------------------------------------------------- |\n  | [xysh/xszz](https://rsshub.app/bnu/mba/xysh/xszz)       |\n\n  #### [职业发展](https://mba.bnu.edu.cn/zyfz/xwds/index.html)\n\n  | [校外导师](https://mba.bnu.edu.cn/zyfz/xwds/index.html) | [企业实践](https://mba.bnu.edu.cn/zyfz/zycp/index.html) | [就业创业](https://mba.bnu.edu.cn/zyfz/jycy/index.html) |\n  | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |\n  | [zyfz/xwds](https://rsshub.app/bnu/mba/zyfz/xwds)       | [zyfz/zycp](https://rsshub.app/bnu/mba/zyfz/zycp)       | [zyfz/jycy](https://rsshub.app/bnu/mba/zyfz/jycy)       |\n  ","categories":["university"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["mba.bnu.edu.cn/:category?"]},{"title":"新闻聚焦","source":["mba.bnu.edu.cn/xwdt/index.html"],"target":"/mba/xwdt"},{"title":"通知公告","source":["mba.bnu.edu.cn/tzgg/index.html"],"target":"/mba/tzgg"},{"title":"MBA系列讲座","source":["mba.bnu.edu.cn/mbaxljz/index.html"],"target":"/mba/mbaxljz"},{"title":"招生动态 - 下载专区","source":["mba.bnu.edu.cn/zsdt/cjwt/index.html"],"target":"/mba/zsdt/cjwt"},{"title":"国际视野 - 海外基地","source":["mba.bnu.edu.cn/gjhz/hwjd/index.html"],"target":"/mba/gjhz/hwjd"},{"title":"国际视野 - 学位合作","source":["mba.bnu.edu.cn/gjhz/xwhz/index.html"],"target":"/mba/gjhz/xwhz"},{"title":"国际视野 - 长期交换","source":["mba.bnu.edu.cn/gjhz/zqjh/index.html"],"target":"/mba/gjhz/zqjh"},{"title":"国际视野 - 短期项目","source":["mba.bnu.edu.cn/gjhz/dqxm/index.html"],"target":"/mba/gjhz/dqxm"},{"title":"校园生活 - 学生组织","source":["mba.bnu.edu.cn/xysh/xszz/index.html"],"target":"/mba/xysh/xszz"},{"title":"职业发展 - 校外导师","source":["mba.bnu.edu.cn/zyfz/xwds/index.html"],"target":"/mba/zyfz/xwds"},{"title":"职业发展 - 企业实践","source":["mba.bnu.edu.cn/zyfz/zycp/index.html"],"target":"/mba/zyfz/zycp"},{"title":"职业发展 - 就业创业","source":["mba.bnu.edu.cn/zyfz/jycy/index.html"],"target":"/mba/zyfz/jycy"}],"location":"mba.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

:::tip
  若订阅 [新闻聚焦](https://mba.bnu.edu.cn/xwdt/index.html)，网址为 `https://mba.bnu.edu.cn/xwdt/index.html`。截取 `https://mba.bnu.edu.cn/` 到末尾 `/index.html` 的部分 `xwdt` 作为参数填入，此时路由为 [`/bnu/mba/xwdt`](https://rsshub.app/bnu/mba/xwdt)。
  :::

  #### [主页](https://mba.bnu.edu.cn)

  | [新闻聚焦](https://mba.bnu.edu.cn/xwdt/index.html) | [通知公告](https://mba.bnu.edu.cn/tzgg/index.html) | [MBA 系列讲座](https://mba.bnu.edu.cn/mbaxljz/index.html) |
  | -------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------------- |
  | [xwdt](https://rsshub.app/bnu/mba/xwdt)            | [tzgg](https://rsshub.app/bnu/mba/tzgg)            | [mbaxljz](https://rsshub.app/bnu/mba/mbaxljz)             |

  #### [招生动态](https://mba.bnu.edu.cn/zsdt/zsjz/index.html)

  | [下载专区](https://mba.bnu.edu.cn/zsdt/cjwt/index.html) |
  | ------------------------------------------------------- |
  | [zsdt/cjwt](https://rsshub.app/bnu/mba/zsdt/cjwt)       |

  #### [国际视野](https://mba.bnu.edu.cn/gjhz/hwjd/index.html)

  | [海外基地](https://mba.bnu.edu.cn/gjhz/hwjd/index.html) | [学位合作](https://mba.bnu.edu.cn/gjhz/xwhz/index.html) | [长期交换](https://mba.bnu.edu.cn/gjhz/zqjh/index.html) | [短期项目](https://mba.bnu.edu.cn/gjhz/dqxm/index.html) |
  | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
  | [gjhz/hwjd](https://rsshub.app/bnu/mba/gjhz/hwjd)       | [gjhz/xwhz](https://rsshub.app/bnu/mba/gjhz/xwhz)       | [gjhz/zqjh](https://rsshub.app/bnu/mba/gjhz/zqjh)       | [gjhz/dqxm](https://rsshub.app/bnu/mba/gjhz/dqxm)       |

  #### [校园生活](https://mba.bnu.edu.cn/xysh/xszz/index.html)

  | [学生组织](https://mba.bnu.edu.cn/xysh/xszz/index.html) |
  | ------------------------------------------------------- |
  | [xysh/xszz](https://rsshub.app/bnu/mba/xysh/xszz)       |

  #### [职业发展](https://mba.bnu.edu.cn/zyfz/xwds/index.html)

  | [校外导师](https://mba.bnu.edu.cn/zyfz/xwds/index.html) | [企业实践](https://mba.bnu.edu.cn/zyfz/zycp/index.html) | [就业创业](https://mba.bnu.edu.cn/zyfz/jycy/index.html) |
  | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
  | [zyfz/xwds](https://rsshub.app/bnu/mba/zyfz/xwds)       | [zyfz/zycp](https://rsshub.app/bnu/mba/zyfz/zycp)       | [zyfz/jycy](https://rsshub.app/bnu/mba/zyfz/jycy)       |
  

## 北京航空航天大学 <Site url="news.buaa.edu.cn"/>

### 集成电路科学与工程学院 <Site url="www.sme.buaa.edu.cn" size="sm" />

<Route namespace="buaa" :data='{"path":"/sme/:path{.+}?","name":"集成电路科学与工程学院","url":"www.sme.buaa.edu.cn","maintainers":["MeanZhang"],"example":"/buaa/sme/tzgg","parameters":{"path":"版块路径，默认为 `tzgg`（通知公告）"},"description":":::tip\n\n版块路径（`path`）应填写板块 URL 中 `http://www.sme.buaa.edu.cn/` 和 `.htm` 之间的字段。\n\n示例：\n\n1. [通知公告](http://www.sme.buaa.edu.cn/tzgg.htm) 页面的 URL 为 `http://www.sme.buaa.edu.cn/tzgg.htm`，对应的路径参数为 `tzgg`，完整路由为 `/buaa/sme/tzgg`；\n2. [就业信息](http://www.sme.buaa.edu.cn/zsjy/jyxx.htm) 页面的 URL 为 `http://www.sme.buaa.edu.cn/zsjy/jyxx.htm`，对应的路径参数为 `zsjy/jyxx`，完整路由为 `/buaa/sme/zsjy/jyxx`。\n\n:::\n\n:::warning\n\n部分页面（如[学院介绍](http://www.sme.buaa.edu.cn/xygk/xyjs.htm)、[微纳中心](http://www.sme.buaa.edu.cn/wnzx.htm)、[院学生会](http://www.sme.buaa.edu.cn/xsgz/yxsh.htm)）存在无内容、内容跳转至外站等情况，因此可能出现解析失败的现象。\n\n:::","categories":["university"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"location":"sme.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

:::tip

版块路径（`path`）应填写板块 URL 中 `http://www.sme.buaa.edu.cn/` 和 `.htm` 之间的字段。

示例：

1. [通知公告](http://www.sme.buaa.edu.cn/tzgg.htm) 页面的 URL 为 `http://www.sme.buaa.edu.cn/tzgg.htm`，对应的路径参数为 `tzgg`，完整路由为 `/buaa/sme/tzgg`；
2. [就业信息](http://www.sme.buaa.edu.cn/zsjy/jyxx.htm) 页面的 URL 为 `http://www.sme.buaa.edu.cn/zsjy/jyxx.htm`，对应的路径参数为 `zsjy/jyxx`，完整路由为 `/buaa/sme/zsjy/jyxx`。

:::

:::warning

部分页面（如[学院介绍](http://www.sme.buaa.edu.cn/xygk/xyjs.htm)、[微纳中心](http://www.sme.buaa.edu.cn/wnzx.htm)、[院学生会](http://www.sme.buaa.edu.cn/xsgz/yxsh.htm)）存在无内容、内容跳转至外站等情况，因此可能出现解析失败的现象。

:::

### 新闻网 <Site url="news.buaa.edu.cn" size="sm" />

<Route namespace="buaa" :data='{"path":"/news/:type","categories":["university"],"example":"/buaa/news/zhxw","parameters":{"type":"新闻版块"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"新闻网","maintainers":["AlanDecode"],"description":"| 综合新闻 | 信息公告  | 学术文化     | 校园风采  | 科教在线  | 媒体北航  | 专题新闻 | 北航人物 |\n  | -------- | --------- | ------------ | --------- | --------- | --------- | -------- | -------- |\n  | zhxw     | xxgg_new | xsjwhhd_new | xyfc_new | kjzx_new | mtbh_new | ztxw     | bhrw     |","location":"news/index.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 综合新闻 | 信息公告  | 学术文化     | 校园风采  | 科教在线  | 媒体北航  | 专题新闻 | 北航人物 |
  | -------- | --------- | ------------ | --------- | --------- | --------- | -------- | -------- |
  | zhxw     | xxgg_new | xsjwhhd_new | xyfc_new | kjzx_new | mtbh_new | ztxw     | bhrw     |

## 北京邮电大学 <Site url="bupt.edu.cn"/>

### 人才招聘 <Site url="bupt.edu.cn/" size="sm" />

<Route namespace="bupt" :data='{"path":"/rczp","categories":["university"],"example":"/bupt/rczp","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["bupt.edu.cn/"]}],"name":"人才招聘","maintainers":["nczitzk"],"url":"bupt.edu.cn/","location":"rczp.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

## 北京大学 <Site url="admission.pku.edu.cn"/>

### Unknown <Site url="admission.pku.edu.cn" size="sm" />

<Route namespace="pku" :data='{"path":"/eecs/:type?","name":"Unknown","maintainers":["Ir1d"],"location":"eecs.ts"}' :test='undefined' />

### Unknown <Site url="ss.pku.edu.cn/index.php/newscenter/notice" size="sm" />

<Route namespace="pku" :data='{"path":"/ss/notice","radar":[{"source":["ss.pku.edu.cn/index.php/newscenter/notice","ss.pku.edu.cn/"]}],"name":"Unknown","maintainers":["legr4ndk"],"url":"ss.pku.edu.cn/index.php/newscenter/notice","location":"ss/notice.ts"}' :test='undefined' />

### 北大未名 BBS 全站十大 <Site url="bbs.pku.edu.cn/v2/hot-topic.php" size="sm" />

<Route namespace="pku" :data='{"path":"/bbs/hot","categories":["university"],"example":"/pku/bbs/hot","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["bbs.pku.edu.cn/v2/hot-topic.php","bbs.pku.edu.cn/"]}],"name":"北大未名 BBS 全站十大","maintainers":["wooddance"],"url":"bbs.pku.edu.cn/v2/hot-topic.php","description":":::warning\n  论坛部分帖子正文内容的获取需要用户登录后的 Cookie 值，详情见部署页面的配置模块。\n  :::","location":"bbs/hot.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

:::warning
  论坛部分帖子正文内容的获取需要用户登录后的 Cookie 值，详情见部署页面的配置模块。
  :::

### 观点 - 国家发展研究院 <Site url="nsd.pku.edu.cn/" size="sm" />

<Route namespace="pku" :data='{"path":"/nsd/gd","categories":["university"],"example":"/pku/nsd/gd","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nsd.pku.edu.cn/"]}],"name":"观点 - 国家发展研究院","maintainers":["MisLink"],"url":"nsd.pku.edu.cn/","location":"nsd.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 每周一推 - 中国政治学研究中心 <Site url="www.rccp.pku.edu.cn/" size="sm" />

<Route namespace="pku" :data='{"path":"/rccp/mzyt","categories":["university"],"example":"/pku/rccp/mzyt","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.rccp.pku.edu.cn/"]}],"name":"每周一推 - 中国政治学研究中心","maintainers":["vhxubo"],"url":"www.rccp.pku.edu.cn/","location":"rccp/mzyt.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 人事处 <Site url="hr.pku.edu.cn/" size="sm" />

<Route namespace="pku" :data='{"path":"/hr/:category?","categories":["university"],"example":"/pku/hr","parameters":{"category":"分类，见下方说明，默认为首页最新公告"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["hr.pku.edu.cn/"]}],"name":"人事处","maintainers":["nczitzk"],"url":"hr.pku.edu.cn/","description":":::tip\n  分类字段处填写的是对应北京大学人事处分类页网址中介于 **`http://hr.pku.edu.cn/`** 和 **/index.htm** 中间的一段，并将其中的 `/` 修改为 `-`。\n\n  如 [北京大学人事处 - 人才招聘 - 教师 - 教学科研人员](https://hr.pku.edu.cn/rczp/js/jxkyry/index.htm) 的网址为 `https://hr.pku.edu.cn/rczp/js/jxkyry/index.htm` 其中介于 **`http://hr.pku.edu.cn/`** 和 **`/index.ht`** 中间的一段为 `rczp/js/jxkyry`。随后，并将其中的 `/` 修改为 `-`，可以得到 `rczp-js-jxkyry`。所以最终我们的路由为 [`/pku/hr/rczp-js-jxkyry`](https://rsshub.app/pku/hr/rczp-js-jxkyry)\n  :::","location":"hr.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

:::tip
  分类字段处填写的是对应北京大学人事处分类页网址中介于 **`http://hr.pku.edu.cn/`** 和 **/index.htm** 中间的一段，并将其中的 `/` 修改为 `-`。

  如 [北京大学人事处 - 人才招聘 - 教师 - 教学科研人员](https://hr.pku.edu.cn/rczp/js/jxkyry/index.htm) 的网址为 `https://hr.pku.edu.cn/rczp/js/jxkyry/index.htm` 其中介于 **`http://hr.pku.edu.cn/`** 和 **`/index.ht`** 中间的一段为 `rczp/js/jxkyry`。随后，并将其中的 `/` 修改为 `-`，可以得到 `rczp-js-jxkyry`。所以最终我们的路由为 [`/pku/hr/rczp-js-jxkyry`](https://rsshub.app/pku/hr/rczp-js-jxkyry)
  :::

### 软件与微电子学院 - 招生通知 <Site url="ss.pku.edu.cn/admission/admnotice" size="sm" />

<Route namespace="pku" :data='{"path":"/ss/admission","categories":["university"],"example":"/pku/ss/admission","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ss.pku.edu.cn/admission/admnotice","ss.pku.edu.cn/"]}],"name":"软件与微电子学院 - 招生通知","maintainers":["legr4ndk"],"url":"ss.pku.edu.cn/admission/admnotice","location":"ss/admission.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 软件与微电子学院 - 硕士统考招生通知 <Site url="ss.pku.edu.cn/admission/admbrochure/admission01" size="sm" />

<Route namespace="pku" :data='{"path":"/ss/pgadmin","categories":["university"],"example":"/pku/ss/pgadmin","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ss.pku.edu.cn/admission/admbrochure/admission01","ss.pku.edu.cn/"]}],"name":"软件与微电子学院 - 硕士统考招生通知","maintainers":["legr4ndk"],"url":"ss.pku.edu.cn/admission/admbrochure/admission01","location":"ss/pg-admin.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 生命科学学院通知公告 <Site url="bio.pku.edu.cn/homes/Index/news/21/21.html" size="sm" />

<Route namespace="pku" :data='{"path":"/cls/announcement","categories":["university"],"example":"/pku/cls/announcement","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["bio.pku.edu.cn/homes/Index/news/21/21.html","bio.pku.edu.cn/"]}],"name":"生命科学学院通知公告","maintainers":["william-swl"],"url":"bio.pku.edu.cn/homes/Index/news/21/21.html","location":"cls/announcement.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 生命科学学院近期讲座 <Site url="bio.pku.edu.cn/homes/Index/news_jz/7/7.html" size="sm" />

<Route namespace="pku" :data='{"path":"/cls/lecture","categories":["university"],"example":"/pku/cls/lecture","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["bio.pku.edu.cn/homes/Index/news_jz/7/7.html","bio.pku.edu.cn/"]}],"name":"生命科学学院近期讲座","maintainers":["TPOB"],"url":"bio.pku.edu.cn/homes/Index/news_jz/7/7.html","location":"cls/lecture.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 学生就业指导服务中心 <Site url="admission.pku.edu.cn" size="sm" />

<Route namespace="pku" :data='{"path":"/scc/recruit/:type?","categories":["university"],"example":"/pku/scc/recruit/zpxx","parameters":{"type":"分区，见下表，默认请求 `zpxx`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"学生就业指导服务中心","maintainers":["DylanXie123"],"description":"| xwrd     | tzgg     | zpxx     | sxxx     | cyxx     |\n  | -------- | -------- | -------- | -------- | -------- |\n  | 新闻热点 | 通知公告 | 招聘信息 | 实习信息 | 创业信息 |","location":"scc/recruit.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| xwrd     | tzgg     | zpxx     | sxxx     | cyxx     |
  | -------- | -------- | -------- | -------- | -------- |
  | 新闻热点 | 通知公告 | 招聘信息 | 实习信息 | 创业信息 |

### 研究生招生网 <Site url="admission.pku.edu.cn/zsxx/sszs/index.htm" size="sm" />

<Route namespace="pku" :data='{"path":"/admission/sszs","categories":["university"],"example":"/pku/admission/sszs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["admission.pku.edu.cn/zsxx/sszs/index.htm","admission.pku.edu.cn/"]}],"name":"研究生招生网","maintainers":["pkuyjs"],"url":"admission.pku.edu.cn/zsxx/sszs/index.htm","location":"pkuyjs.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

## 北京协和医学院 <Site url="mdadmission.pumc.edu.cn"/>

### “4+4” 试点班招生网通知公告 <Site url="mdadmission.pumc.edu.cn/mdweb/site" size="sm" />

<Route namespace="pumc" :data='{"path":"/mdadmission","categories":["university"],"example":"/pumc/mdadmission","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["mdadmission.pumc.edu.cn/mdweb/site","mdadmission.pumc.edu.cn/"]}],"name":"“4+4” 试点班招生网通知公告","maintainers":["nczitzk"],"url":"mdadmission.pumc.edu.cn/mdweb/site","location":"mdadmission.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## 北京科技大学 <Site url="gs.ustb.edu.cn"/>

### 天津学院 <Site url="gs.ustb.edu.cn" size="sm" />

<Route namespace="ustb" :data='{"path":"/tj/news/:type?","categories":["university"],"example":"/ustb/tj/news/all","parameters":{"type":"默认为 `all`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"天津学院","maintainers":["henbf"],"description":"| 全部 | 学院新闻 | 学术活动 | 城市建设学院 | 信息工程学院 | 经济学院 | 管理学院 | 材料系 | 机械工程系 | 护理系 | 法律系 | 外语系 | 艺术系 |\n  | ---- | -------- | -------- | ------------ | ------------ | -------- | -------- | ------ | ---------- | ------ | ------ | ------ | ------ |\n  | all  | xyxw     | xshhd    | csjsxy       | xxgcxy       | jjx      | glxy     | clx    | jxgcx      | hlx    | flx    | wyx    | ysx    |","location":"tj/news.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 全部 | 学院新闻 | 学术活动 | 城市建设学院 | 信息工程学院 | 经济学院 | 管理学院 | 材料系 | 机械工程系 | 护理系 | 法律系 | 外语系 | 艺术系 |
  | ---- | -------- | -------- | ------------ | ------------ | -------- | -------- | ------ | ---------- | ------ | ------ | ------ | ------ |
  | all  | xyxw     | xshhd    | csjsxy       | xxgcxy       | jjx      | glxy     | clx    | jxgcx      | hlx    | flx    | wyx    | ysx    |

### 研究生院 <Site url="gs.ustb.edu.cn" size="sm" />

<Route namespace="ustb" :data='{"path":"/yjsy/news/:type","categories":["university"],"example":"/ustb/yjsy/news/all","parameters":{"type":"文章类别"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gs.ustb.edu.cn/:type"]}],"name":"研究生院","maintainers":["DA1Y1"],"description":"| 北京科技大学研究生院 | 土木与资源工程学院 | 能源与环境工程学院 | 冶金与生态工程学院 | 材料科学与工程学院 | 机械工程学院 | 自动化学院 | 计算机与通信工程学院 | 数理学院 | 化学与生物工程学院 | 经济管理学院 | 文法学院 | 马克思主义学院 | 外国语学院 | 国家材料服役安全科学中心 | 新金属材料国家重点实验室 | 工程技术研究院 | 钢铁共性技术协同创新中心 | 钢铁冶金新技术国家重点实验室 | 新材料技术研究院 | 科技史与文化遗产研究院 | 顺德研究生院 |\n  | -------------------- | ------------------ | ------------------ | ------------------ | ------------------ | ------------ | ---------- | -------------------- | -------- | ------------------ | ------------ | -------- | -------------- | ---------- | ------------------------ | ------------------------ | -------------- | ------------------------ | ---------------------------- | ---------------- | ---------------------- | ------------ |\n  | all                  | cres               | seee               | metall             | mse                | me           | saee       | scce                 | shuli    | huasheng           | sem          | wenfa    | marx           | sfs        | ncms                     | skl                      | iet            | cicst                    | slam                         | adma             | ihmm                   | sd           |","location":"yjsy/news.ts"}' :test='{"code":0}' />

| 北京科技大学研究生院 | 土木与资源工程学院 | 能源与环境工程学院 | 冶金与生态工程学院 | 材料科学与工程学院 | 机械工程学院 | 自动化学院 | 计算机与通信工程学院 | 数理学院 | 化学与生物工程学院 | 经济管理学院 | 文法学院 | 马克思主义学院 | 外国语学院 | 国家材料服役安全科学中心 | 新金属材料国家重点实验室 | 工程技术研究院 | 钢铁共性技术协同创新中心 | 钢铁冶金新技术国家重点实验室 | 新材料技术研究院 | 科技史与文化遗产研究院 | 顺德研究生院 |
  | -------------------- | ------------------ | ------------------ | ------------------ | ------------------ | ------------ | ---------- | -------------------- | -------- | ------------------ | ------------ | -------- | -------------- | ---------- | ------------------------ | ------------------------ | -------------- | ------------------------ | ---------------------------- | ---------------- | ---------------------- | ------------ |
  | all                  | cres               | seee               | metall             | mse                | me           | saee       | scce                 | shuli    | huasheng           | sem          | wenfa    | marx           | sfs        | ncms                     | skl                      | iet            | cicst                    | slam                         | adma             | ihmm                   | sd           |

### 研究生招生信息网 <Site url="yzxc.ustb.edu.cn/" size="sm" />

<Route namespace="ustb" :data='{"path":"/yzxc/tzgg","categories":["university"],"example":"/ustb/yzxc/tzgg","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yzxc.ustb.edu.cn/"]}],"name":"研究生招生信息网","maintainers":["yanbot-team"],"url":"yzxc.ustb.edu.cn/","location":"yzxc/tzgg.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

## 电子科技大学 <Site url="gr.uestc.edu.cn"/>

### 计算机科学与工程学院 <Site url="scse.uestc.edu.cn/" size="sm" />

<Route namespace="uestc" :data='{"path":"/scse","categories":["university"],"example":"/uestc/scse","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["scse.uestc.edu.cn/"]}],"name":"计算机科学与工程学院","maintainers":["talengu","mobyw"],"url":"scse.uestc.edu.cn/","location":"scse.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 教务处 <Site url="jwc.uestc.edu.cn/" size="sm" />

<Route namespace="uestc" :data='{"path":"/jwc/:type?","categories":["university"],"example":"/uestc/jwc/student","parameters":{"type":"默认为 `important`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["jwc.uestc.edu.cn/"],"target":"/jwc"}],"name":"教务处","maintainers":["achjqz","mobyw"],"url":"jwc.uestc.edu.cn/","description":"| 重要公告  | 学生事务公告 | 教师事务公告 | 教学新闻 | 办公室 |\n  | --------- | ------------ | ------------ | -------- | ------ |\n  | important | student      | teacher      | teach    | office |","location":"jwc.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 重要公告  | 学生事务公告 | 教师事务公告 | 教学新闻 | 办公室 |
  | --------- | ------------ | ------------ | -------- | ------ |
  | important | student      | teacher      | teach    | office |

### 文化素质教育中心 <Site url="cqe.uestc.edu.cn/" size="sm" />

<Route namespace="uestc" :data='{"path":"/cqe/:type?","categories":["university"],"example":"/uestc/cqe/tzgg","parameters":{"type":"默认为 `tzgg`"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["cqe.uestc.edu.cn/"],"target":"/cqe"}],"name":"文化素质教育中心","maintainers":["truobel","mobyw"],"url":"cqe.uestc.edu.cn/","description":"| 活动预告 | 通知公告 |\n  | -------- | -------- |\n  | hdyg     | tzgg     |","location":"cqe.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 活动预告 | 通知公告 |
  | -------- | -------- |
  | hdyg     | tzgg     |

### 新闻中心 <Site url="news.uestc.edu.cn/" size="sm" />

<Route namespace="uestc" :data='{"path":"/news/:type?","categories":["university"],"example":"/uestc/news/culture","parameters":{"type":"默认为 `announcement`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["news.uestc.edu.cn/"],"target":"/news"}],"name":"新闻中心","maintainers":["achjqz","mobyw"],"url":"news.uestc.edu.cn/","description":"| 学术    | 文化    | 公告         | 校内通知     |\n  | ------- | ------- | ------------ | ------------ |\n  | academy | culture | announcement | notification |","location":"news.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 学术    | 文化    | 公告         | 校内通知     |
  | ------- | ------- | ------------ | ------------ |
  | academy | culture | announcement | notification |

### 信息与通信工程学院 <Site url="sice.uestc.edu.cn/" size="sm" />

<Route namespace="uestc" :data='{"path":"/sice","categories":["university"],"example":"/uestc/sice","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["sice.uestc.edu.cn/"]}],"name":"信息与通信工程学院","maintainers":["huyyi","mobyw"],"url":"sice.uestc.edu.cn/","location":"sice.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 信息与软件工程学院 <Site url="sise.uestc.edu.cn/" size="sm" />

<Route namespace="uestc" :data='{"path":"/sise/:type?","categories":["university"],"example":"/uestc/sise/1","parameters":{"type":"默认为 `1`"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["sise.uestc.edu.cn/"],"target":"/sise"}],"name":"信息与软件工程学院","maintainers":["Yadomin","mobyw"],"url":"sise.uestc.edu.cn/","description":"| 最新 | 院办 | 学生科 | 教务科 | 研管科 | 组织 | 人事 | 实践教育中心 | Int&#39;I |\n  | ---- | ---- | ------ | ------ | ------ | ---- | ---- | ------------ | ----- |\n  | 1    | 2    | 3      | 4      | 5      | 6    | 7    | 8            | 9     |","location":"sise.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 最新 | 院办 | 学生科 | 教务科 | 研管科 | 组织 | 人事 | 实践教育中心 | Int'I |
  | ---- | ---- | ------ | ------ | ------ | ---- | ---- | ------------ | ----- |
  | 1    | 2    | 3      | 4      | 5      | 6    | 7    | 8            | 9     |

### 研究生院 <Site url="gr.uestc.edu.cn/" size="sm" />

<Route namespace="uestc" :data='{"path":"/gr","categories":["university"],"example":"/uestc/gr","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gr.uestc.edu.cn/"]}],"name":"研究生院","maintainers":["huyyi","mobyw"],"url":"gr.uestc.edu.cn/","location":"gr.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 自动化工程学院 <Site url="auto.uestc.edu.cn/" size="sm" />

<Route namespace="uestc" :data='{"path":"/auto","categories":["university"],"example":"/uestc/auto","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["auto.uestc.edu.cn/"]}],"name":"自动化工程学院","maintainers":["talengu","mobyw"],"url":"auto.uestc.edu.cn/","location":"auto.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

## 东华大学 <Site url="gs.dhu.edu.cn"/>

### 教务处通知 <Site url="gs.dhu.edu.cn" size="sm" />

<Route namespace="dhu" :data='{"path":"/jiaowu/news/:type?","categories":["university"],"example":"/dhu/jiaowu/news/student","parameters":{"type":"默认为 `student`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"教务处通知","maintainers":["KiraKiseki"],"description":"| 学生专栏 | 教师专栏 |\n  | -------- | -------- |\n  | student  | teacher  |","location":"jiaowu/news.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 学生专栏 | 教师专栏 |
  | -------- | -------- |
  | student  | teacher  |

### 学术信息 <Site url="news.dhu.edu.cn/6410" size="sm" />

<Route namespace="dhu" :data='{"path":"/news/xsxx","categories":["university"],"example":"/dhu/news/xsxx","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["news.dhu.edu.cn/6410"]}],"name":"学术信息","maintainers":["fox2049"],"url":"news.dhu.edu.cn/6410","location":"news/xsxx.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 研究生院通知 <Site url="gs.dhu.edu.cn" size="sm" />

<Route namespace="dhu" :data='{"path":"/yjs/news/:type?","categories":["university"],"example":"/dhu/yjs/news/class","parameters":{"type":"默认为 `class`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"研究生院通知","maintainers":["fox2049"],"description":"| 新闻动态 | 通知公告 | 选课考试 |\n  | -------- | -------- | -------- |\n  | trend    | notice   | class    |","location":"yjs/news.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 新闻动态 | 通知公告 | 选课考试 |
  | -------- | -------- | -------- |
  | trend    | notice   | class    |

### 研究生招生信息 <Site url="gs.dhu.edu.cn" size="sm" />

<Route namespace="dhu" :data='{"path":"/yjs/zs/:type?","categories":["university"],"example":"/dhu/yjs/zs/master","parameters":{"type":"默认为 `master`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"研究生招生信息","maintainers":["fox2049"],"description":"| 博士招生 | 硕士招生 |\n  | -------- | -------- |\n  | doctor   | master   |","location":"yjs/zs.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 博士招生 | 硕士招生 |
  | -------- | -------- |
  | doctor   | master   |

### 最新信息公开 <Site url="gs.dhu.edu.cn" size="sm" />

<Route namespace="dhu" :data='{"path":"/xxgk/news","categories":["university"],"example":"/dhu/xxgk/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"最新信息公开","maintainers":["KiraKiseki"],"location":"xxgk/news.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

## 东北大学 <Site url="neunews.neu.edu.cn"/>

### 新闻网 <Site url="neunews.neu.edu.cn" size="sm" />

<Route namespace="neu" :data='{"path":"/news/:type","categories":["university"],"example":"/neu/news/ddyw","parameters":{"type":"种类名，见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["neunews.neu.edu.cn/:type/list.htm"]}],"name":"新闻网","maintainers":["JeasonLau"],"description":"| 种类名   | 参数 |\n  | -------- | ---- |\n  | 东大要闻 | ddyw |\n  | 媒体东大 | mtdd |\n  | 通知公告 | tzgg |\n  | 新闻纵横 | xwzh |\n  | 人才培养 | rcpy |\n  | 学术科研 | xsky |\n  | 英文新闻 | 217  |\n  | 招生就业 | zsjy |\n  | 考研出国 | kycg |\n  | 校园文学 | xywx |\n  | 校友风采 | xyfc |\n  | 时事热点 | ssrd |\n  | 教育前沿 | jyqy |\n  | 文化体育 | whty |\n  | 最新科技 | zxkj |","location":"news.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 种类名   | 参数 |
  | -------- | ---- |
  | 东大要闻 | ddyw |
  | 媒体东大 | mtdd |
  | 通知公告 | tzgg |
  | 新闻纵横 | xwzh |
  | 人才培养 | rcpy |
  | 学术科研 | xsky |
  | 英文新闻 | 217  |
  | 招生就业 | zsjy |
  | 考研出国 | kycg |
  | 校园文学 | xywx |
  | 校友风采 | xyfc |
  | 时事热点 | ssrd |
  | 教育前沿 | jyqy |
  | 文化体育 | whty |
  | 最新科技 | zxkj |

### 医学与生物信息工程学院 <Site url="neunews.neu.edu.cn" size="sm" />

<Route namespace="neu" :data='{"path":"/bmie/:type","categories":["university"],"example":"/neu/bmie/news","parameters":{"type":"分类 id 见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"医学与生物信息工程学院","maintainers":["tennousuathena"],"description":"| Id                      | 名称       |\n  | ----------------------- | ---------- |\n  | news                    | 学院新闻   |\n  | academic                | 学术科研   |\n  | talent_development     | 人才培养   |\n  | international_exchange | 国际交流   |\n  | announcement            | 通知公告   |\n  | undergraduate_dev      | 本科生培养 |\n  | postgraduate_dev       | 研究生培养 |\n  | undergraduate_recruit  | 本科生招募 |\n  | postgraduate_recruit   | 研究生招募 |\n  | CPC_build              | 党的建设   |\n  | CPC_work               | 党委工作   |\n  | union_work             | 工会工作   |\n  | CYL_work               | 共青团工作 |\n  | security_management    | 安全管理   |\n  | alumni_style           | 校友风采   |","location":"bmie.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| Id                      | 名称       |
  | ----------------------- | ---------- |
  | news                    | 学院新闻   |
  | academic                | 学术科研   |
  | talent_development     | 人才培养   |
  | international_exchange | 国际交流   |
  | announcement            | 通知公告   |
  | undergraduate_dev      | 本科生培养 |
  | postgraduate_dev       | 研究生培养 |
  | undergraduate_recruit  | 本科生招募 |
  | postgraduate_recruit   | 研究生招募 |
  | CPC_build              | 党的建设   |
  | CPC_work               | 党委工作   |
  | union_work             | 工会工作   |
  | CYL_work               | 共青团工作 |
  | security_management    | 安全管理   |
  | alumni_style           | 校友风采   |

## 东南大学 <Site url="cse.seu.edu.cn"/>

### 计算机技术与工程学院 <Site url="cse.seu.edu.cn" size="sm" />

<Route namespace="seu" :data='{"path":"/cse/:type?","categories":["university"],"example":"/seu/cse/xyxw","parameters":{"type":"分类名，默认为 `xyxw`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["cse.seu.edu.cn/:type/list.htm","cse.seu.edu.cn/"]}],"name":"计算机技术与工程学院","maintainers":["LogicJake"],"description":"| 学院新闻 | 通知公告 | 教务信息 | 就业信息 | 学工事务 |\n  | -------- | -------- | -------- | -------- | -------- |\n  | xyxw     | tzgg     | jwxx     | jyxx     | xgsw     |","location":"cse/index.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 学院新闻 | 通知公告 | 教务信息 | 就业信息 | 学工事务 |
  | -------- | -------- | -------- | -------- | -------- |
  | xyxw     | tzgg     | jwxx     | jyxx     | xgsw     |

### 信息科学与工程学院学术活动 <Site url="radio.seu.edu.cn/_s29/15986/list.psp" size="sm" />

<Route namespace="seu" :data='{"path":"/radio/academic","categories":["university"],"example":"/seu/radio/academic","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["radio.seu.edu.cn/_s29/15986/list.psp","radio.seu.edu.cn/"]}],"name":"信息科学与工程学院学术活动","maintainers":["HenryQW"],"url":"radio.seu.edu.cn/_s29/15986/list.psp","location":"radio/academic.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 研究生院全部公告 <Site url="seugs.seu.edu.cn/26671/list.htm" size="sm" />

<Route namespace="seu" :data='{"path":"/yjs","categories":["university"],"example":"/seu/yjs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["seugs.seu.edu.cn/26671/list.htm","seugs.seu.edu.cn/"]}],"name":"研究生院全部公告","maintainers":["Denkiyohou"],"url":"seugs.seu.edu.cn/26671/list.htm","location":"yjs.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 研究生招生网通知公告 <Site url="cse.seu.edu.cn" size="sm" />

<Route namespace="seu" :data='{"path":"/yzb/:type","categories":["university"],"example":"/seu/yzb/6676","parameters":{"type":"分类名，见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yzb.seu.edu.cn/:type/list.htm"]}],"name":"研究生招生网通知公告","maintainers":["fuzy112"],"description":"| 硕士招生 | 博士招生 | 港澳台及中外合作办学 |\n  | -------- | -------- | -------------------- |\n  | 6676     | 6677     | 6679                 |","location":"yzb/index.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 硕士招生 | 博士招生 | 港澳台及中外合作办学 |
  | -------- | -------- | -------------------- |
  | 6676     | 6677     | 6679                 |

## 对外经济贸易大学 <Site url="hr.uibe.edu.cn"/>

### 人力资源处 <Site url="hr.uibe.edu.cn" size="sm" />

<Route namespace="uibe" :data='{"path":"/hr/:category?/:type?","categories":["university"],"example":"/uibe/hr","parameters":{"category":"分类，可在对应页 URL 中找到，默认为通知公告","type":"类型，可在对应页 URL 中找到，默认为空"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["hr.uibe.edu.cn/:category/:type","hr.uibe.edu.cn/:category","hr.uibe.edu.cn/"]}],"name":"人力资源处","maintainers":["nczitzk"],"description":":::tip\n  如 [通知公告](http://hr.uibe.edu.cn/tzgg) 的 URL 为 `http://hr.uibe.edu.cn/tzgg`，其路由为 [`/uibe/hr/tzgg`](https://rsshub.app/uibe/hr/tzgg)\n\n  如 [教师招聘](http://hr.uibe.edu.cn/jszp) 中的 [招聘信息](http://hr.uibe.edu.cn/jszp/zpxx) 的 URL 为 `http://hr.uibe.edu.cn/jszp/zpxx`，其路由为 [`/uibe/hr/jszp/zpxx`](https://rsshub.app/uibe/jszp/zpxx)\n  :::","location":"hr.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

:::tip
  如 [通知公告](http://hr.uibe.edu.cn/tzgg) 的 URL 为 `http://hr.uibe.edu.cn/tzgg`，其路由为 [`/uibe/hr/tzgg`](https://rsshub.app/uibe/hr/tzgg)

  如 [教师招聘](http://hr.uibe.edu.cn/jszp) 中的 [招聘信息](http://hr.uibe.edu.cn/jszp/zpxx) 的 URL 为 `http://hr.uibe.edu.cn/jszp/zpxx`，其路由为 [`/uibe/hr/jszp/zpxx`](https://rsshub.app/uibe/jszp/zpxx)
  :::

## 广西民族大学 <Site url="ai.gxmzu.edu.cn"/>

### 人工智能学院通知公告 <Site url="ai.gxmzu.edu.cn/index/tzgg.htm" size="sm" />

<Route namespace="gxmzu" :data='{"path":"/aitzgg","categories":["university"],"example":"/gxmzu/aitzgg","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ai.gxmzu.edu.cn/index/tzgg.htm","ai.gxmzu.edu.cn/"]}],"name":"人工智能学院通知公告","maintainers":["real-jiakai"],"url":"ai.gxmzu.edu.cn/index/tzgg.htm","location":"ai.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 图书馆最新消息 <Site url="library.gxmzu.edu.cn/news/news_list.jsp" size="sm" />

<Route namespace="gxmzu" :data='{"path":"/libzxxx","categories":["university"],"example":"/gxmzu/libzxxx","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["library.gxmzu.edu.cn/news/news_list.jsp","library.gxmzu.edu.cn/"]}],"name":"图书馆最新消息","maintainers":["real-jiakai"],"url":"library.gxmzu.edu.cn/news/news_list.jsp","location":"lib.ts"}' :test='{"code":1,"message":"expected &#39;RSSHub&#39; not to be &#39;RSSHub&#39; // Object.is equality"}' />

### 研究生院招生公告 <Site url="yjs.gxmzu.edu.cn/tzgg/zsgg.htm" size="sm" />

<Route namespace="gxmzu" :data='{"path":"/yjszsgg","categories":["university"],"example":"/gxmzu/yjszsgg","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yjs.gxmzu.edu.cn/tzgg/zsgg.htm","yjs.gxmzu.edu.cn/"]}],"name":"研究生院招生公告","maintainers":["real-jiakai"],"url":"yjs.gxmzu.edu.cn/tzgg/zsgg.htm","location":"yjs.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

## 广州大学 <Site url="yjsy.gzhu.edu.cn"/>

### 研究生院招生动态 <Site url="yjsy.gzhu.edu.cn/zsxx/zsdt/zsdt.htm" size="sm" />

<Route namespace="gzhu" :data='{"path":"/yjs","categories":["university"],"example":"/gzhu/yjs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yjsy.gzhu.edu.cn/zsxx/zsdt/zsdt.htm","yjsy.gzhu.edu.cn/"]}],"name":"研究生院招生动态","maintainers":["shengmaosu"],"url":"yjsy.gzhu.edu.cn/zsxx/zsdt/zsdt.htm","location":"yjs.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

## 哈尔滨工业大学 <Site url="jwc.hit.edu.cn"/>

:::warning
哈工大网站疑似禁止了`rsshub.app`的访问，使用路由需要自行 [部署](https://docs.rsshub.app/deploy/)。
:::

### 教务处通知公告 <Site url="jwc.hit.edu.cn/*" size="sm" />

<Route namespace="hit" :data='{"path":"/jwc","categories":["university"],"example":"/hit/jwc","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["jwc.hit.edu.cn/*"]}],"name":"教务处通知公告","maintainers":["lty96117"],"url":"jwc.hit.edu.cn/*","location":"jwc.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 今日哈工大 <Site url="jwc.hit.edu.cn" size="sm" />

<Route namespace="hit" :data='{"path":"/today/:category","categories":["university"],"example":"/hit/today/10","parameters":{"category":"分类编号，`10`为公告公示，`11`为新闻快讯，同时支持详细分类，使用方法见下"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["today.hit.edu.cn/category/:category"]}],"name":"今日哈工大","maintainers":["ranpox"],"description":":::tip\n  今日哈工大的文章分为公告公示和新闻快讯，每个页面右侧列出了更详细的分类，其编号为每个 URL 路径的最后一个数字。\n  例如会议讲座的路径为`/taxonomy/term/10/25`，则可以通过 [`/hit/today/25`](https://rsshub.app/hit/today/25) 订阅该详细类别。\n  :::\n\n  :::warning\n  部分文章需要经过统一身份认证后才能阅读全文。\n  :::","location":"today.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

:::tip
  今日哈工大的文章分为公告公示和新闻快讯，每个页面右侧列出了更详细的分类，其编号为每个 URL 路径的最后一个数字。
  例如会议讲座的路径为`/taxonomy/term/10/25`，则可以通过 [`/hit/today/25`](https://rsshub.app/hit/today/25) 订阅该详细类别。
  :::

  :::warning
  部分文章需要经过统一身份认证后才能阅读全文。
  :::

### 研究生院通知公告 <Site url="hitgs.hit.edu.cn/*" size="sm" />

<Route namespace="hit" :data='{"path":"/hitgs","categories":["university"],"example":"/hit/hitgs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["hitgs.hit.edu.cn/*"]}],"name":"研究生院通知公告","maintainers":["hlmu"],"url":"hitgs.hit.edu.cn/*","location":"hitgs.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

## 哈尔滨工业大学（深圳） <Site url="hitsz.edu.cn"/>

### 新闻中心 <Site url="hitsz.edu.cn" size="sm" />

<Route namespace="hitsz" :data='{"path":"/article/:category?","categories":["university"],"example":"/hitsz/article/id-74","parameters":{"category":"分类名，默认为校园动态"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"新闻中心","maintainers":["xandery-geek"],"description":"| 校区要闻 | 媒体报道 | 综合新闻 | 校园动态 | 讲座论坛 | 热点专题 | 招标信息 | 重要关注 |\n  | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |\n  | id-116   | id-80    | id-75    | id-77    | id-78    | id-79    | id-81    | id-124   |","location":"article.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 校区要闻 | 媒体报道 | 综合新闻 | 校园动态 | 讲座论坛 | 热点专题 | 招标信息 | 重要关注 |
  | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
  | id-116   | id-80    | id-75    | id-77    | id-78    | id-79    | id-81    | id-124   |

## 哈尔滨工业大学（威海） <Site url="hitwh.edu.cn"/>

### 今日工大 - 通知公告 <Site url="hitwh.edu.cn/1024/list.htm" size="sm" />

<Route namespace="hitwh" :data='{"path":"/today","categories":["university"],"example":"/hitwh/today","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["hitwh.edu.cn/1024/list.htm","hitwh.edu.cn/"]}],"name":"今日工大 - 通知公告","maintainers":["raptazure"],"url":"hitwh.edu.cn/1024/list.htm","location":"today.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

## 哈尔滨工程大学 <Site url="yjsy.hrbeu.edu.cn"/>

### Unknown <Site url="yjsy.hrbeu.edu.cn" size="sm" />

<Route namespace="hrbeu" :data='{"path":"/gx/card/:column/:id?","name":"Unknown","maintainers":[],"location":"gx/card.ts"}' :test='undefined' />

### Unknown <Site url="yjsy.hrbeu.edu.cn" size="sm" />

<Route namespace="hrbeu" :data='{"path":"/gx/list/:column/:id?","name":"Unknown","maintainers":[],"location":"gx/list.ts"}' :test='undefined' />

### 本科生院工作通知 <Site url="yjsy.hrbeu.edu.cn" size="sm" />

<Route namespace="hrbeu" :data='{"path":"/ugs/news/:author?/:category?","categories":["university"],"example":"/hrbeu/ugs/news/jwc/jxap","parameters":{"author":"发布部门，默认为 `gztz`","category":"分类，默认为 `all`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ugs.hrbeu.edu.cn/:author/list.htm"],"target":"/ugs/news/:author"}],"name":"本科生院工作通知","maintainers":["XYenon"],"description":"author 列表：\n\n  | 教务处 | 实践教学与交流处 | 教育评估处 | 专业建设处 | 国家大学生文化素质基地 | 教师教学发展中心 | 综合办公室 | 工作通知 |\n  | ------ | ---------------- | ---------- | ---------- | ---------------------- | ---------------- | ---------- | -------- |\n  | jwc    | sjjxyjlzx        | jypgc      | zyjsc      | gjdxswhszjd            | jsjxfzzx         | zhbgs      | gztz     |\n\n  category 列表：\n\n  `all` 为全部\n\n  教务处：\n\n  | 教学安排 | 考试管理 | 学籍管理 | 外语统考 | 成绩管理 |\n  | -------- | -------- | -------- | -------- | -------- |\n  | jxap     | ksgl     | xjgl     | wytk     | cjgl     |\n\n  实践教学与交流处：\n\n  | 实验教学 | 实验室建设 | 校外实习 | 学位论文 | 课程设计 | 创新创业 | 校际交流 |\n  | -------- | ---------- | -------- | -------- | -------- | -------- | -------- |\n  | syjx     | sysjs      | xwsx     | xwlw     | kcsj     | cxcy     | xjjl     |\n\n  教育评估处：\n\n  | 教学研究与教学成果 | 质量监控 |\n  | ------------------ | -------- |\n  | jxyjyjxcg          | zljk     |\n\n  专业建设处：\n\n  | 专业与教材建设 | 陈赓实验班 | 教学名师与优秀主讲教师 | 课程建设 | 双语教学 |\n  | -------------- | ---------- | ---------------------- | -------- | -------- |\n  | zyyjcjs        | cgsyb      | jxmsyyxzjjs            | kcjs     | syjx     |\n\n  国家大学生文化素质基地：无\n\n  教师教学发展中心：\n\n  | 教师培训 |\n  | -------- |\n  | jspx     |\n\n  综合办公室：\n\n  | 联系课程 |\n  | -------- |\n  | lxkc     |\n\n  工作通知：无","location":"ugs/news.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

author 列表：

  | 教务处 | 实践教学与交流处 | 教育评估处 | 专业建设处 | 国家大学生文化素质基地 | 教师教学发展中心 | 综合办公室 | 工作通知 |
  | ------ | ---------------- | ---------- | ---------- | ---------------------- | ---------------- | ---------- | -------- |
  | jwc    | sjjxyjlzx        | jypgc      | zyjsc      | gjdxswhszjd            | jsjxfzzx         | zhbgs      | gztz     |

  category 列表：

  `all` 为全部

  教务处：

  | 教学安排 | 考试管理 | 学籍管理 | 外语统考 | 成绩管理 |
  | -------- | -------- | -------- | -------- | -------- |
  | jxap     | ksgl     | xjgl     | wytk     | cjgl     |

  实践教学与交流处：

  | 实验教学 | 实验室建设 | 校外实习 | 学位论文 | 课程设计 | 创新创业 | 校际交流 |
  | -------- | ---------- | -------- | -------- | -------- | -------- | -------- |
  | syjx     | sysjs      | xwsx     | xwlw     | kcsj     | cxcy     | xjjl     |

  教育评估处：

  | 教学研究与教学成果 | 质量监控 |
  | ------------------ | -------- |
  | jxyjyjxcg          | zljk     |

  专业建设处：

  | 专业与教材建设 | 陈赓实验班 | 教学名师与优秀主讲教师 | 课程建设 | 双语教学 |
  | -------------- | ---------- | ---------------------- | -------- | -------- |
  | zyyjcjs        | cgsyb      | jxmsyyxzjjs            | kcjs     | syjx     |

  国家大学生文化素质基地：无

  教师教学发展中心：

  | 教师培训 |
  | -------- |
  | jspx     |

  综合办公室：

  | 联系课程 |
  | -------- |
  | lxkc     |

  工作通知：无

### 大型招聘会 <Site url="job.hrbeu.edu.cn/*" size="sm" />

<Route namespace="hrbeu" :data='{"path":"/job/bigemploy","categories":["university"],"example":"/hrbeu/job/bigemploy","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["job.hrbeu.edu.cn/*"]}],"name":"大型招聘会","maintainers":["Derekmini"],"url":"job.hrbeu.edu.cn/*","location":"job/bigemploy.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 就业服务平台 <Site url="job.hrbeu.edu.cn/*" size="sm" />

<Route namespace="hrbeu" :data='{"path":"/job/calendar","categories":["university"],"example":"/hrbeu/job/calendar","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["job.hrbeu.edu.cn/*"]}],"name":"就业服务平台","maintainers":["Derekmini"],"url":"job.hrbeu.edu.cn/*","description":"| 通知公告 | 热点新闻 |\n  | :------: | :------: |\n  |   tzgg   |   rdxw   |\n\n#### 大型招聘会 {#ha-er-bin-gong-cheng-da-xue-jiu-ye-fu-wu-ping-tai-da-xing-zhao-pin-hui}\n\n\n#### 今日招聘会 {#ha-er-bin-gong-cheng-da-xue-jiu-ye-fu-wu-ping-tai-jin-ri-zhao-pin-hui}","location":"job/calendar.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 通知公告 | 热点新闻 |
  | :------: | :------: |
  |   tzgg   |   rdxw   |

#### 大型招聘会 {#ha-er-bin-gong-cheng-da-xue-jiu-ye-fu-wu-ping-tai-da-xing-zhao-pin-hui}


#### 今日招聘会 {#ha-er-bin-gong-cheng-da-xue-jiu-ye-fu-wu-ping-tai-jin-ri-zhao-pin-hui}

### 就业服务平台 <Site url="yjsy.hrbeu.edu.cn" size="sm" />

<Route namespace="hrbeu" :data='{"path":"/job/list/:id","categories":["university"],"example":"/hrbeu/job/list/tzgg","parameters":{"id":"栏目，如下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"就业服务平台","maintainers":["Derekmini"],"description":"| 通知公告 | 热点新闻 |\n    | :------: | :------: |\n    |   tzgg   |   rdxw   |","location":"job/list.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 通知公告 | 热点新闻 |
    | :------: | :------: |
    |   tzgg   |   rdxw   |

### 水声工程学院 <Site url="yjsy.hrbeu.edu.cn" size="sm" />

<Route namespace="hrbeu" :data='{"path":"/uae/:id","categories":["university"],"example":"/hrbeu/uae/xwdt","parameters":{"id":"栏目编号，在 `URL` 中获取，如果有多级编号，将 `/` 替换为 `-`。"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["uae.hrbeu.edu.cn/:id.htm"]}],"name":"水声工程学院","maintainers":[],"description":"| 新闻动态 | 通知公告 | 科学研究 / 科研动态 |\n  | :------: | :------: | :-----------------: |\n  |   xwdt   |   tzgg   |      kxyj-kydt      |","location":"uae/news.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 新闻动态 | 通知公告 | 科学研究 / 科研动态 |
  | :------: | :------: | :-----------------: |
  |   xwdt   |   tzgg   |      kxyj-kydt      |

### 研究生院 <Site url="yjsy.hrbeu.edu.cn" size="sm" />

<Route namespace="hrbeu" :data='{"path":"/yjsy/list/:id","categories":["university"],"example":"/hrbeu/yjsy/list/2981","parameters":{"id":"栏目编号，由 `URL` 中获取。"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yjsy.hrbeu.edu.cn/:id/list.htm"]}],"name":"研究生院","maintainers":["Derekmini"],"description":"| 通知公告 | 新闻动态 | 学籍注册 | 奖助学金 | 其他 |\n  | :------: | :------: | :------: | :------: | :--: |\n  |   2981   |   2980   |   3009   |   3011   |  ... |","location":"yjsy/list.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 通知公告 | 新闻动态 | 学籍注册 | 奖助学金 | 其他 |
  | :------: | :------: | :------: | :------: | :--: |
  |   2981   |   2980   |   3009   |   3011   |  ... |

## 哈尔滨理工大学 <Site url="jwzx.hrbust.edu.cn"/>

### 教务处 <Site url="jwzx.hrbust.edu.cn" size="sm" />

<Route namespace="hrbust" :data='{"path":"/jwzx/:type?/:page?","categories":["university"],"example":"/hrbust/jwzx","parameters":{"type":"分类名，默认为教务公告","page":"文章数，默认为12"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"教务处","maintainers":["LenaNouzen"],"description":"| 名师风采 | 热点新闻 | 教务公告 | 教学新闻 |\n  | -------- | -------- | -------- | -------- |\n  | 351      | 353      | 354      | 355      |","location":"jwzx.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 名师风采 | 热点新闻 | 教务公告 | 教学新闻 |
  | -------- | -------- | -------- | -------- |
  | 351      | 353      | 354      | 355      |

## 杭州电子科技大学 <Site url="computer.hdu.edu.cn"/>

### 计算机学院 - 通知公告 <Site url="computer.hdu.edu.cn/6738/list.htm" size="sm" />

<Route namespace="hdu" :data='{"path":"/cs","categories":["university"],"example":"/hdu/cs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["computer.hdu.edu.cn/6738/list.htm"]}],"name":"计算机学院 - 通知公告","maintainers":["legr4ndk"],"url":"computer.hdu.edu.cn/6738/list.htm","location":"cs/notice.ts"}' :test='{"code":0}' />

### 计算机学院 - 研究生通知 <Site url="computer.hdu.edu.cn/6769/list.htm" size="sm" />

<Route namespace="hdu" :data='{"path":"/cs/pg","categories":["university"],"example":"/hdu/cs/pg","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["computer.hdu.edu.cn/6769/list.htm"]}],"name":"计算机学院 - 研究生通知","maintainers":["legr4ndk"],"url":"computer.hdu.edu.cn/6769/list.htm","location":"cs/pg.ts"}' :test='{"code":0}' />

## 河南财政金融学院 <Site url="www.hafu.edu.cn"/>

### 河南财政金融学院 <Site url="www.hafu.edu.cn" size="sm" />

<Route namespace="hafu" :data='{"path":"/news/:type?","categories":["university"],"example":"/hafu/news/ggtz","parameters":{"type":"分类，见下表（默认为 `ggtz`)"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"河南财政金融学院","maintainers":[],"description":"| 校内公告通知 | 教务处公告通知 | 招生就业处公告通知 |\n  | ------------ | -------------- | ------------------ |\n  | ggtz         | jwc            | zsjyc              |","location":"news.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 校内公告通知 | 教务处公告通知 | 招生就业处公告通知 |
  | ------------ | -------------- | ------------------ |
  | ggtz         | jwc            | zsjyc              |

## 黑龙江八一农垦大学 <Site url="byau.edu.cn"/>

### 新闻网 <Site url="xinwen.byau.edu.cn" size="sm" />

<Route namespace="byau" :data='{"path":"/news/:type_id","categories":["university"],"example":"/byau/news/3674","parameters":{"type_id":"栏目类型(从菜单栏获取对应 ID)"},"radar":[{"source":["xinwen.byau.edu.cn/:type_id/list.htm"],"target":"/news/:type_id"}],"name":"新闻网","maintainers":["ueiu"],"url":"xinwen.byau.edu.cn","description":"| 学校要闻 | 校园动态 |\n  | ---- | ----------- |\n  | 3674 | 3676 |","location":"xinwen/index.ts"}' :test='{"code":0}' />

| 学校要闻 | 校园动态 |
  | ---- | ----------- |
  | 3674 | 3676 |

## 黑龙江中医药大学 <Site url="yjsy.hljucm.net"/>

### 研究生院 <Site url="yjsy.hljucm.net" size="sm" />

<Route namespace="hljucm" :data='{"path":"/yjsy/:category?","categories":["university"],"example":"/hljucm/yjsy","parameters":{"category":"分类, 见下表，默认为新闻动态"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"研究生院","maintainers":["nczitzk"],"description":"| 新闻动态 | 通知公告 |\n  | -------- | -------- |\n  | xwdt     | tzgg     |","location":"yjsy.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 新闻动态 | 通知公告 |
  | -------- | -------- |
  | xwdt     | tzgg     |

## 湖南大学 <Site url="scc.hnu.edu.cn"/>

### 校园招聘 <Site url="scc.hnu.edu.cnundefined" size="sm" />

<Route namespace="hnu" :data='{"path":"/careers","categories":["university"],"example":"/hnu/careers","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["scc.hnu.edu.cnundefined"]}],"name":"校园招聘","maintainers":["ningyougan"],"url":"scc.hnu.edu.cnundefined","location":"careers.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

## 湖北大学 <Site url="hubu.edu.cn"/>

### 主页 <Site url="hubu.edu.cn" size="sm" />

<Route namespace="hubu" :data='{"path":"/www/:category{.+}?","name":"主页","url":"hubu.edu.cn","maintainers":["nczitzk"],"example":"/hubu/www/index/tzgg","parameters":{"category":"分类，可在对应分类页 URL 中找到，默认为[通知公告](https://www.hubu.edu.cn/index/tzgg.htm)"},"description":":::tip\n  若订阅 [通知公告](https://www.hubu.edu.cn/index/tzgg.htm)，网址为 `https://www.hubu.edu.cn/index/tzgg.htm`。截取 `https://www.hubu.edu.cn/` 到末尾 `.htm` 的部分 `index/tzgg` 作为参数填入，此时路由为 [`/hubu/www/index/tzgg`](https://rsshub.app/hubu/www/index/tzgg)。\n  :::\n\n  | 通知公告   | 学术预告   |\n  | ---------- | ---------- |\n  | index/tzgg | index/xsyg |\n  ","categories":["university"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"title":"通知公告","source":["hubu.edu.cn/index/tzgg.htm"],"target":"/www/index/tzgg"},{"title":"学术预告","source":["hubu.edu.cn/index/xsyg.htm"],"target":"/www/index/xsyg"}],"location":"index.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

:::tip
  若订阅 [通知公告](https://www.hubu.edu.cn/index/tzgg.htm)，网址为 `https://www.hubu.edu.cn/index/tzgg.htm`。截取 `https://www.hubu.edu.cn/` 到末尾 `.htm` 的部分 `index/tzgg` 作为参数填入，此时路由为 [`/hubu/www/index/tzgg`](https://rsshub.app/hubu/www/index/tzgg)。
  :::

  | 通知公告   | 学术预告   |
  | ---------- | ---------- |
  | index/tzgg | index/xsyg |
  

### 资源环境学院 <Site url="zhxy.hubu.edu.cn" size="sm" />

<Route namespace="hubu" :data='{"path":"/zhxy/:category{.+}?","name":"资源环境学院","url":"zhxy.hubu.edu.cn","maintainers":["nczitzk"],"example":"/hubu/zhxy/index/tzgg","parameters":{"category":"分类，可在对应分类页 URL 中找到，默认为[通知公告](https://zhxy.hubu.edu.cn/index/tzgg.htm)"},"description":":::tip\n  若订阅 [通知公告](https://zhxy.hubu.edu.cn/index/tzgg.htm)，网址为 `https://zhxy.hubu.edu.cn/index/tzgg.htm`。截取 `https://zhxy.hubu.edu.cn/` 到末尾 `.htm` 的部分 `index/tzgg` 作为参数填入，此时路由为 [`/hubu/zhxy/index/tzgg`](https://rsshub.app/hubu/zhxy/index/tzgg)。\n  :::\n\n  | [通知公告](https://zhxy.hubu.edu.cn/index/tzgg.htm) | [新闻动态](https://zhxy.hubu.edu.cn/index/xwdt.htm) |\n  | --------------------------------------------------- | --------------------------------------------------- |\n  | index/tzgg                                          | index/xwdt                                          |  \n\n  #### [人才培养](https://zhxy.hubu.edu.cn/rcpy.htm)\n  \n  | [人才培养](https://zhxy.hubu.edu.cn/rcpy.htm) | [本科生教育](https://zhxy.hubu.edu.cn/rcpy/bksjy.htm) | [研究生教育](https://zhxy.hubu.edu.cn/rcpy/yjsjy.htm) | [招生与就业](https://zhxy.hubu.edu.cn/rcpy/zsyjy/zsxx.htm) |\n  | --------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------- |\n  | rcpy                                          | rcpy/bksjy                                            | rcpy/yjsjy                                            | rcpy/zsyjy/zsxx                                            |\n  \n  #### [学科建设](https://zhxy.hubu.edu.cn/xkjianshe/zdxk.htm)\n  \n  | [学科建设](https://zhxy.hubu.edu.cn/xkjianshe/zdxk.htm) | [重点学科](https://zhxy.hubu.edu.cn/xkjianshe/zdxk.htm) | [硕士点](https://zhxy.hubu.edu.cn/xkjianshe/ssd.htm) | [博士点](https://zhxy.hubu.edu.cn/xkjianshe/bsd.htm) |\n  | ------------------------------------------------------- | ------------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |\n  | xkjianshe/zdxk                                          | xkjianshe/zdxk                                          | xkjianshe/ssd                                        | xkjianshe/bsd                                        |\n  \n  #### [科研服务](https://zhxy.hubu.edu.cn/kyfw.htm)\n  \n  | [科研服务](https://zhxy.hubu.edu.cn/kyfw.htm) | [科研动态](https://zhxy.hubu.edu.cn/kyfw/kydongt.htm) | [学术交流](https://zhxy.hubu.edu.cn/kyfw/xsjl.htm) | [科研平台](https://zhxy.hubu.edu.cn/kyfw/keyapt.htm) | [社会服务](https://zhxy.hubu.edu.cn/kyfw/shfuw.htm) |\n  | --------------------------------------------- | ----------------------------------------------------- | -------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------- |\n  | kyfw                                          | kyfw/kydongt                                          | kyfw/xsjl                                          | kyfw/keyapt                                          | kyfw/shfuw                                          |\n  \n  #### [党群工作](https://zhxy.hubu.edu.cn/dqgz.htm)\n  \n  | [党群工作](https://zhxy.hubu.edu.cn/dqgz.htm) | [党建工作](https://zhxy.hubu.edu.cn/dqgz/djgz/jgdj.htm) | [工会工作](https://zhxy.hubu.edu.cn/dqgz/ghgon.htm) |\n  | --------------------------------------------- | ------------------------------------------------------- | --------------------------------------------------- |\n  | dqgz                                          | dqgz/djgz/jgdj                                          | dqgz/ghgon                                          |\n  ","categories":["university"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"title":"通知公告","source":["zhxy.hubu.edu.cn/index/tzgg.htm"],"target":"/zhxy/index/tzgg"},{"title":"新闻动态","source":["zhxy.hubu.edu.cn/index/xwdt.htm"],"target":"/zhxy/index/xwdt"},{"title":"人才培养","source":["zhxy.hubu.edu.cn/rcpy.htm"],"target":"/zhxy/rcpy"},{"title":"人才培养 - 本科生教育","source":["zhxy.hubu.edu.cn/rcpy/bksjy.htm"],"target":"/zhxy/rcpy/bksjy"},{"title":"人才培养 - 研究生教育","source":["zhxy.hubu.edu.cn/rcpy/yjsjy.htm"],"target":"/zhxy/rcpy/yjsjy"},{"title":"人才培养 - 招生与就业","source":["zhxy.hubu.edu.cn/rcpy/zsyjy/zsxx.htm"],"target":"/zhxy/rcpy/zsyjy/zsxx"},{"title":"学科建设","source":["zhxy.hubu.edu.cn/xkjianshe/zdxk.htm"],"target":"/zhxy/xkjianshe/zdxk"},{"title":"学科建设 - 重点学科","source":["zhxy.hubu.edu.cn/xkjianshe/zdxk.htm"],"target":"/zhxy/xkjianshe/zdxk"},{"title":"学科建设 - 硕士点","source":["zhxy.hubu.edu.cn/xkjianshe/ssd.htm"],"target":"/zhxy/xkjianshe/ssd"},{"title":"学科建设 - 博士点","source":["zhxy.hubu.edu.cn/xkjianshe/bsd.htm"],"target":"/zhxy/xkjianshe/bsd"},{"title":"科研服务","source":["zhxy.hubu.edu.cn/kyfw.htm"],"target":"/zhxy/kyfw"},{"title":"科研服务 - 科研动态","source":["zhxy.hubu.edu.cn/kyfw/kydongt.htm"],"target":"/zhxy/kyfw/kydongt"},{"title":"科研服务 - 学术交流","source":["zhxy.hubu.edu.cn/kyfw/xsjl.htm"],"target":"/zhxy/kyfw/xsjl"},{"title":"科研服务 - 科研平台","source":["zhxy.hubu.edu.cn/kyfw/keyapt.htm"],"target":"/zhxy/kyfw/keyapt"},{"title":"科研服务 - 社会服务","source":["zhxy.hubu.edu.cn/kyfw/shfuw.htm"],"target":"/zhxy/kyfw/shfuw"},{"title":"党群工作","source":["zhxy.hubu.edu.cn/dqgz.htm"],"target":"/zhxy/dqgz"},{"title":"党群工作 - 党建工作","source":["zhxy.hubu.edu.cn/dqgz/djgz/jgdj.htm"],"target":"/zhxy/dqgz/djgz/jgdj"},{"title":"党群工作 - 工会工作","source":["zhxy.hubu.edu.cn/dqgz/ghgon.htm"],"target":"/zhxy/dqgz/ghgon"}],"location":"zhxy.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

:::tip
  若订阅 [通知公告](https://zhxy.hubu.edu.cn/index/tzgg.htm)，网址为 `https://zhxy.hubu.edu.cn/index/tzgg.htm`。截取 `https://zhxy.hubu.edu.cn/` 到末尾 `.htm` 的部分 `index/tzgg` 作为参数填入，此时路由为 [`/hubu/zhxy/index/tzgg`](https://rsshub.app/hubu/zhxy/index/tzgg)。
  :::

  | [通知公告](https://zhxy.hubu.edu.cn/index/tzgg.htm) | [新闻动态](https://zhxy.hubu.edu.cn/index/xwdt.htm) |
  | --------------------------------------------------- | --------------------------------------------------- |
  | index/tzgg                                          | index/xwdt                                          |  

  #### [人才培养](https://zhxy.hubu.edu.cn/rcpy.htm)
  
  | [人才培养](https://zhxy.hubu.edu.cn/rcpy.htm) | [本科生教育](https://zhxy.hubu.edu.cn/rcpy/bksjy.htm) | [研究生教育](https://zhxy.hubu.edu.cn/rcpy/yjsjy.htm) | [招生与就业](https://zhxy.hubu.edu.cn/rcpy/zsyjy/zsxx.htm) |
  | --------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------- |
  | rcpy                                          | rcpy/bksjy                                            | rcpy/yjsjy                                            | rcpy/zsyjy/zsxx                                            |
  
  #### [学科建设](https://zhxy.hubu.edu.cn/xkjianshe/zdxk.htm)
  
  | [学科建设](https://zhxy.hubu.edu.cn/xkjianshe/zdxk.htm) | [重点学科](https://zhxy.hubu.edu.cn/xkjianshe/zdxk.htm) | [硕士点](https://zhxy.hubu.edu.cn/xkjianshe/ssd.htm) | [博士点](https://zhxy.hubu.edu.cn/xkjianshe/bsd.htm) |
  | ------------------------------------------------------- | ------------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
  | xkjianshe/zdxk                                          | xkjianshe/zdxk                                          | xkjianshe/ssd                                        | xkjianshe/bsd                                        |
  
  #### [科研服务](https://zhxy.hubu.edu.cn/kyfw.htm)
  
  | [科研服务](https://zhxy.hubu.edu.cn/kyfw.htm) | [科研动态](https://zhxy.hubu.edu.cn/kyfw/kydongt.htm) | [学术交流](https://zhxy.hubu.edu.cn/kyfw/xsjl.htm) | [科研平台](https://zhxy.hubu.edu.cn/kyfw/keyapt.htm) | [社会服务](https://zhxy.hubu.edu.cn/kyfw/shfuw.htm) |
  | --------------------------------------------- | ----------------------------------------------------- | -------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------- |
  | kyfw                                          | kyfw/kydongt                                          | kyfw/xsjl                                          | kyfw/keyapt                                          | kyfw/shfuw                                          |
  
  #### [党群工作](https://zhxy.hubu.edu.cn/dqgz.htm)
  
  | [党群工作](https://zhxy.hubu.edu.cn/dqgz.htm) | [党建工作](https://zhxy.hubu.edu.cn/dqgz/djgz/jgdj.htm) | [工会工作](https://zhxy.hubu.edu.cn/dqgz/ghgon.htm) |
  | --------------------------------------------- | ------------------------------------------------------- | --------------------------------------------------- |
  | dqgz                                          | dqgz/djgz/jgdj                                          | dqgz/ghgon                                          |
  

## 湖南农业大学 <Site url="gfxy.hunau.edu.cn"/>

### 公共管理与法学学院 <Site url="xky.hunau.edu.cn/" size="sm" />

<Route namespace="hunau" :data='{"path":"/gfxy/:category?/:page?","categories":["university"],"example":"/hunau/gfxy","parameters":{"category":"页面分类，默认为 `tzgg`","page":"页码，默认为 `1`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["xky.hunau.edu.cn/","xky.hunau.edu.cntzgg_8472","xky.hunau.edu.cn/:category"],"target":"/:category"}],"name":"公共管理与法学学院","maintainers":[],"url":"xky.hunau.edu.cn/","description":"| 分类 | 通知公告 | 学院新闻 | 其他分类通知... |\n  | ---- | -------- | -------- | --------------- |\n  | 参数 | tzgg     | xyxw     | 对应 URL        |","location":"gfxy/index.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 分类 | 通知公告 | 学院新闻 | 其他分类通知... |
  | ---- | -------- | -------- | --------------- |
  | 参数 | tzgg     | xyxw     | 对应 URL        |

### 国际交流与合作处、国际教育学院、港澳台事务办公室 <Site url="xky.hunau.edu.cn/" size="sm" />

<Route namespace="hunau" :data='{"path":"/ied/:type?/:category?/:page?","categories":["university"],"example":"/hunau/ied","parameters":{"type":"页面归属，默认为 `xwzx`","category":"页面分类，默认为 `ggtz`","page":"页码，默认为 `1`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["xky.hunau.edu.cn/","xky.hunau.edu.cntzgg_8472","xky.hunau.edu.cn/:category"],"target":"/:category"}],"name":"国际交流与合作处、国际教育学院、港澳台事务办公室","maintainers":["lcandy2"],"url":"xky.hunau.edu.cn/","description":"| 分类     | 公告通知 | 新闻快讯 | 其他分类... |\n  | -------- | -------- | -------- | ----------- |\n  | type     | xwzx     | xwzx     | 对应 URL    |\n  | category | tzgg     | xwkx     | 对应 URL    |","location":"ied.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 分类     | 公告通知 | 新闻快讯 | 其他分类... |
  | -------- | -------- | -------- | ----------- |
  | type     | xwzx     | xwzx     | 对应 URL    |
  | category | tzgg     | xwkx     | 对应 URL    |

### 教务处 <Site url="xky.hunau.edu.cn/" size="sm" />

<Route namespace="hunau" :data='{"path":"/jwc/:category?/:page?","categories":["university"],"example":"/hunau/jwc","parameters":{"category":"页面分类，默认为 `tzgg`","page":"页码，默认为 `1`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["xky.hunau.edu.cn/","xky.hunau.edu.cntzgg_8472","xky.hunau.edu.cn/:category"],"target":"/:category"}],"name":"教务处","maintainers":[],"url":"xky.hunau.edu.cn/","description":"| 分类 | 通知公告 | 教务动态 | 其他教务通知... |\n  | ---- | -------- | -------- | --------------- |\n  | 参数 | tzgg     | jwds     | 对应 URL        |","location":"jwc.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 分类 | 通知公告 | 教务动态 | 其他教务通知... |
  | ---- | -------- | -------- | --------------- |
  | 参数 | tzgg     | jwds     | 对应 URL        |

### 信息与智能科学学院 <Site url="xky.hunau.edu.cn/" size="sm" />

<Route namespace="hunau" :data='{"path":"/xky/:category?/:page?","categories":["university"],"example":"/hunau/xky","parameters":{"category":"页面分类，默认为 `tzgg_8472`","page":"页码，默认为 `1`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["xky.hunau.edu.cn/","xky.hunau.edu.cntzgg_8472","xky.hunau.edu.cn/:category"],"target":"/:category"}],"name":"信息与智能科学学院","maintainers":[],"url":"xky.hunau.edu.cn/","description":"| 分类 | 通知公告   | 学院新闻 | 其他分类通知... |\n  | ---- | ---------- | -------- | --------------- |\n  | 参数 | tzgg_8472 | xyxw     | 对应 URL        |","location":"xky/index.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 分类 | 通知公告   | 学院新闻 | 其他分类通知... |
  | ---- | ---------- | -------- | --------------- |
  | 参数 | tzgg_8472 | xyxw     | 对应 URL        |

## 华中师范大学 <Site url="ccnu.91wllm.com"/>

### 计算机学院 <Site url="cs.ccnu.edu.cn/xwzx/tzgg.htm" size="sm" />

<Route namespace="ccnu" :data='{"path":"/cs","categories":["university"],"example":"/ccnu/cs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["cs.ccnu.edu.cn/xwzx/tzgg.htm","cs.ccnu.edu.cn/"]}],"name":"计算机学院","maintainers":["shengmaosu"],"url":"cs.ccnu.edu.cn/xwzx/tzgg.htm","location":"cs.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 就业信息 <Site url="ccnu.91wllm.com/news/index/tag/tzgg" size="sm" />

<Route namespace="ccnu" :data='{"path":"/career","categories":["university"],"example":"/ccnu/career","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ccnu.91wllm.com/news/index/tag/tzgg","ccnu.91wllm.com/"]}],"name":"就业信息","maintainers":["jackyu1996"],"url":"ccnu.91wllm.com/news/index/tag/tzgg","location":"career.ts"}' :test='{"code":0}' />

### 伍论贡学院 <Site url="uowji.ccnu.edu.cn/xwzx/tzgg.htm" size="sm" />

<Route namespace="ccnu" :data='{"path":"/wu","categories":["university"],"example":"/ccnu/wu","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["uowji.ccnu.edu.cn/xwzx/tzgg.htm","uowji.ccnu.edu.cn/"]}],"name":"伍论贡学院","maintainers":["shengmaosu"],"url":"uowji.ccnu.edu.cn/xwzx/tzgg.htm","location":"wu.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 研究生通知公告 <Site url="gs.ccnu.edu.cn/zsgz/ssyjs.htm" size="sm" />

<Route namespace="ccnu" :data='{"path":"/yjs","categories":["university"],"example":"/ccnu/yjs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gs.ccnu.edu.cn/zsgz/ssyjs.htm","gs.ccnu.edu.cn/"]}],"name":"研究生通知公告","maintainers":["shengmaosu"],"url":"gs.ccnu.edu.cn/zsgz/ssyjs.htm","location":"yjs.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## 华东理工大学 <Site url="e.ecust.edu.cn"/>

### 本科教务处信息网 <Site url="e.ecust.edu.cn" size="sm" />

<Route namespace="ecust" :data='{"path":"/jwc/:category?","categories":["university"],"example":"/ecust/jwc/mto","parameters":{"category":"订阅板块，默认为全部订阅"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"本科教务处信息网","maintainers":["lxl66566"],"description":"| 其他任意值 | mto          | mttb               | gi       | mpt          | fai          |\n  | ---------- | ------------ | ------------------ | -------- | ------------ | ------------ |\n  | 全部订阅   | 教学运行管理 | 培养与教学建设管理 | 综合信息 | 实践教学管理 | 学院教务信息 |","location":"jwc/notice.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 其他任意值 | mto          | mttb               | gi       | mpt          | fai          |
  | ---------- | ------------ | ------------------ | -------- | ------------ | ------------ |
  | 全部订阅   | 教学运行管理 | 培养与教学建设管理 | 综合信息 | 实践教学管理 | 学院教务信息 |

### 继续教育学院 - 学院公告 <Site url="e.ecust.edu.cn/engine2/m/38F638B77773ADD3" size="sm" />

<Route namespace="ecust" :data='{"path":"/jxjy/news","categories":["university"],"example":"/ecust/jxjy/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["e.ecust.edu.cn/engine2/m/38F638B77773ADD3","e.ecust.edu.cn/"]}],"name":"继续教育学院 - 学院公告","maintainers":["jialinghui"],"url":"e.ecust.edu.cn/engine2/m/38F638B77773ADD3","location":"e/news.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 研究生院通知公告 <Site url="gschool.ecust.edu.cn/12753/list.htm" size="sm" />

<Route namespace="ecust" :data='{"path":"/yjs","categories":["university"],"example":"/ecust/yjs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gschool.ecust.edu.cn/12753/list.htm","gschool.ecust.edu.cn/"]}],"name":"研究生院通知公告","maintainers":["shengmaosu"],"url":"gschool.ecust.edu.cn/12753/list.htm","location":"gschool/yjs.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## 华中科技大学 <Site url="aia.hust.edu.cn"/>

### 人工智能和自动化学院新闻 <Site url="aia.hust.edu.cn/xyxw.htm" size="sm" />

<Route namespace="hust" :data='{"path":["/aia/news","/auto/news"],"categories":["university"],"example":"/hust/aia/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["aia.hust.edu.cn/xyxw.htm","aia.hust.edu.cn/"]}],"name":"人工智能和自动化学院新闻","maintainers":["budui"],"url":"aia.hust.edu.cn/xyxw.htm","location":"aia/news.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 人工智能和自动化学院新闻 <Site url="aia.hust.edu.cn/xyxw.htm" size="sm" />

<Route namespace="hust" :data='{"path":["/aia/news","/auto/news"],"categories":["university"],"example":"/hust/aia/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["aia.hust.edu.cn/xyxw.htm","aia.hust.edu.cn/"]}],"name":"人工智能和自动化学院新闻","maintainers":["budui"],"url":"aia.hust.edu.cn/xyxw.htm","location":"aia/news.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 人工智能和自动化学院通知 <Site url="aia.hust.edu.cn" size="sm" />

<Route namespace="hust" :data='{"path":["/aia/notice/:type?","/auto/notice/:type?"],"categories":["university"],"example":"/hust/aia/notice","parameters":{"type":"分区，默认为最新通知，可在网页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"人工智能和自动化学院通知","maintainers":["budui"],"description":"| 最新 | 党政 | 科研 | 本科生 | 研究生 | 学工思政 | 离退休 |\n  | ---- | ---- | ---- | ------ | ------ | -------- | ------ |\n  |      | dz   | ky   | bk     | yjs    | xgsz     | litui  |","location":"aia/notice.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 最新 | 党政 | 科研 | 本科生 | 研究生 | 学工思政 | 离退休 |
  | ---- | ---- | ---- | ------ | ------ | -------- | ------ |
  |      | dz   | ky   | bk     | yjs    | xgsz     | litui  |

### 人工智能和自动化学院通知 <Site url="aia.hust.edu.cn" size="sm" />

<Route namespace="hust" :data='{"path":["/aia/notice/:type?","/auto/notice/:type?"],"categories":["university"],"example":"/hust/aia/notice","parameters":{"type":"分区，默认为最新通知，可在网页 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"人工智能和自动化学院通知","maintainers":["budui"],"description":"| 最新 | 党政 | 科研 | 本科生 | 研究生 | 学工思政 | 离退休 |\n  | ---- | ---- | ---- | ------ | ------ | -------- | ------ |\n  |      | dz   | ky   | bk     | yjs    | xgsz     | litui  |","location":"aia/notice.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 最新 | 党政 | 科研 | 本科生 | 研究生 | 学工思政 | 离退休 |
  | ---- | ---- | ---- | ------ | ------ | -------- | ------ |
  |      | dz   | ky   | bk     | yjs    | xgsz     | litui  |

### 研究生院通知公告 <Site url="gszs.hust.edu.cn/zsxx/ggtz.htm" size="sm" />

<Route namespace="hust" :data='{"path":"/yjs","categories":["university"],"example":"/hust/yjs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gszs.hust.edu.cn/zsxx/ggtz.htm","gszs.hust.edu.cn/"]}],"name":"研究生院通知公告","maintainers":["shengmaosu"],"url":"gszs.hust.edu.cn/zsxx/ggtz.htm","location":"yjs.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

## 华北电力大学 <Site url="yjsy.ncepu.edu.cn"/>

### 北京校区研究生院 <Site url="yjsy.ncepu.edu.cn" size="sm" />

<Route namespace="ncepu" :data='{"path":"/master/:type","categories":["university"],"example":"/ncepu/master/tzgg","parameters":{"type":"类型参数"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"北京校区研究生院","maintainers":["nilleo"],"description":"| 类型 | 硕士招生信息 | 通知公告 | 研究生培养信息 |\n  | ---- | ------------ | -------- | -------------- |\n  | 参数 | zsxx         | tzgg     | pyxx           |","location":"master/masterinfo.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 类型 | 硕士招生信息 | 通知公告 | 研究生培养信息 |
  | ---- | ------------ | -------- | -------------- |
  | 参数 | zsxx         | tzgg     | pyxx           |

## 华北水利水电大学 <Site url="ncwu.edu.cn"/>

### 学校通知 <Site url="ncwu.edu.cn/xxtz.htm" size="sm" />

<Route namespace="ncwu" :data='{"path":"/notice","categories":["university"],"example":"/ncwu/notice","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ncwu.edu.cn/xxtz.htm"]}],"name":"学校通知","maintainers":[],"url":"ncwu.edu.cn/xxtz.htm","location":"notice.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## 华南农业大学 <Site url="yzb.scau.edu.cn"/>

### 华农研讯 <Site url="yzb.scau.edu.cn/2136/list1.htm" size="sm" />

<Route namespace="scau" :data='{"path":"/yzb","categories":["university"],"example":"/scau/yzb","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yzb.scau.edu.cn/2136/list1.htm","yzb.scau.edu.cn/"]}],"name":"华农研讯","maintainers":["shengmaosu"],"url":"yzb.scau.edu.cn/2136/list1.htm","location":"yjs.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 研究生院通知 <Site url="yjsy.scau.edu.cn/208/list.htm" size="sm" />

<Route namespace="scau" :data='{"path":"/yjsy","categories":["university"],"example":"/scau/yjsy","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yjsy.scau.edu.cn/208/list.htm","yjsy.scau.edu.cn/"]}],"name":"研究生院通知","maintainers":["Chunssu"],"url":"yjsy.scau.edu.cn/208/list.htm","location":"yjsy.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## 华南师范大学 <Site url="cs.scnu.edu.cn"/>

### 计算机学院竞赛通知 <Site url="cs.scnu.edu.cn/xueshenggongzuo/chengchangfazhan/kejichuangxin/" size="sm" />

<Route namespace="scnu" :data='{"path":"/cs/match","categories":["university"],"example":"/scnu/cs/match","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["cs.scnu.edu.cn/xueshenggongzuo/chengchangfazhan/kejichuangxin/","cs.scnu.edu.cn/"]}],"name":"计算机学院竞赛通知","maintainers":["fengkx"],"url":"cs.scnu.edu.cn/xueshenggongzuo/chengchangfazhan/kejichuangxin/","location":"cs/match.ts"}' :test='{"code":0}' />

### 教务处通知 <Site url="jw.scnu.edu.cn/ann/index.html" size="sm" />

<Route namespace="scnu" :data='{"path":"/jw","categories":["university"],"example":"/scnu/jw","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["jw.scnu.edu.cn/ann/index.html","jw.scnu.edu.cn/"]}],"name":"教务处通知","maintainers":["fengkx"],"url":"jw.scnu.edu.cn/ann/index.html","location":"jw.ts"}' :test='{"code":0}' />

### 软件学院通知公告 <Site url="ss.scnu.edu.cn/tongzhigonggao" size="sm" />

<Route namespace="scnu" :data='{"path":"/ss","categories":["university"],"example":"/scnu/ss","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ss.scnu.edu.cn/tongzhigonggao","ss.scnu.edu.cn/"]}],"name":"软件学院通知公告","maintainers":["shengmaosu"],"url":"ss.scnu.edu.cn/tongzhigonggao","location":"ss.ts"}' :test='{"code":0}' />

### 图书馆通知 <Site url="lib.scnu.edu.cn/news/zuixingonggao" size="sm" />

<Route namespace="scnu" :data='{"path":"/library","categories":["university"],"example":"/scnu/library","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["lib.scnu.edu.cn/news/zuixingonggao","lib.scnu.edu.cn/"]}],"name":"图书馆通知","maintainers":["fengkx"],"url":"lib.scnu.edu.cn/news/zuixingonggao","location":"library.ts"}' :test='{"code":0}' />

### 研究生院通知公告 <Site url="yz.scnu.edu.cn/tongzhigonggao/ssgg" size="sm" />

<Route namespace="scnu" :data='{"path":"/yjs","categories":["university"],"example":"/scnu/yjs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yz.scnu.edu.cn/tongzhigonggao/ssgg","yz.scnu.edu.cn/"]}],"name":"研究生院通知公告","maintainers":["shengmaosu"],"url":"yz.scnu.edu.cn/tongzhigonggao/ssgg","location":"yjs.ts"}' :test='{"code":0}' />

## 华南理工大学 <Site url="jw.scut.edu.cn"/>

### 电子与信息学院 - 新闻速递 <Site url="www2.scut.edu.cn/ee/16285/list.htm" size="sm" />

<Route namespace="scut" :data='{"path":"/seie/news_center","categories":["university"],"example":"/scut/seie/news_center","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www2.scut.edu.cn/ee/16285/list.htm"]}],"name":"电子与信息学院 - 新闻速递","maintainers":["auto-bot-ty"],"url":"www2.scut.edu.cn/ee/16285/list.htm","description":":::warning\n由于学院官网对非大陆 IP 的访问存在限制，需自行部署。\n:::","location":"seie/news-ccenter.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

:::warning
由于学院官网对非大陆 IP 的访问存在限制，需自行部署。
:::

### 机械与汽车工程学院 - 通知公告 <Site url="jw.scut.edu.cn" size="sm" />

<Route namespace="scut" :data='{"path":"/smae/:category?","categories":["university"],"example":"/scut/smae/yjsjw","parameters":{"category":"通知分类，默认为 `yjsjw`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"机械与汽车工程学院 - 通知公告","maintainers":["Ermaotie"],"description":"| 公务信息 | 党建工作 | 人事工作 | 学生工作 | 科研实验室 | 本科生教务 | 研究生教务 |\n  | -------- | -------- | -------- | -------- | ---------- | ---------- | ---------- |\n  | gwxx     | djgz     | rsgz     | xsgz     | kysys      | bksjw      | yjsjw      |","location":"smae/notice.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 公务信息 | 党建工作 | 人事工作 | 学生工作 | 科研实验室 | 本科生教务 | 研究生教务 |
  | -------- | -------- | -------- | -------- | ---------- | ---------- | ---------- |
  | gwxx     | djgz     | rsgz     | xsgz     | kysys      | bksjw      | yjsjw      |

### 教务处新闻动态 <Site url="jw.scut.edu.cn" size="sm" />

<Route namespace="scut" :data='{"path":"/jwc/news","categories":["university"],"example":"/scut/jwc/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"教务处新闻动态","maintainers":["imkero"],"location":"jwc/news.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 教务处通知公告 <Site url="jw.scut.edu.cn" size="sm" />

<Route namespace="scut" :data='{"path":"/jwc/notice/:category?","categories":["university"],"example":"/scut/jwc/notice/all","parameters":{"category":"通知分类，默认为 `all`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"教务处通知公告","maintainers":["imkero"],"description":"| 全部 | 选课   | 考试 | 实践     | 交流          | 教师    | 信息 |\n  | ---- | ------ | ---- | -------- | ------------- | ------- | ---- |\n  | all  | course | exam | practice | communication | teacher | info |","location":"jwc/notice.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 全部 | 选课   | 考试 | 实践     | 交流          | 教师    | 信息 |
  | ---- | ------ | ---- | -------- | ------------- | ------- | ---- |
  | all  | course | exam | practice | communication | teacher | info |

### 教务处学院通知 <Site url="jw.scut.edu.cn" size="sm" />

<Route namespace="scut" :data='{"path":"/jwc/school/:category?","categories":["university"],"example":"/scut/jwc/school/all","parameters":{"category":"通知分类，默认为 `all`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"教务处学院通知","maintainers":["imkero","Rongronggg9"],"description":"| 全部 | 选课   | 考试 | 信息 |\n  | ---- | ------ | ---- | ---- |\n  | all  | course | exam | info |","location":"jwc/school.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 全部 | 选课   | 考试 | 信息 |
  | ---- | ------ | ---- | ---- |
  | all  | course | exam | info |

### 土木与交通学院 - 学工通知 <Site url="jw.scut.edu.cn" size="sm" />

<Route namespace="scut" :data='{"path":"/scet/notice","categories":["university"],"example":"/scut/scet/notice","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"土木与交通学院 - 学工通知","maintainers":["railzy"],"location":"scet/notice.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 研究生院通知公告 <Site url="www2.scut.edu.cn/graduate/14562/list.htm" size="sm" />

<Route namespace="scut" :data='{"path":"/yjs","categories":["university"],"example":"/scut/yjs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www2.scut.edu.cn/graduate/14562/list.htm"]}],"name":"研究生院通知公告","maintainers":["shengmaosu"],"url":"www2.scut.edu.cn/graduate/14562/list.htm","location":"yjs.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

## 吉首大学 <Site url="jsu.edu.cn"/>

### Unknown <Site url="jsu.edu.cn" size="sm" />

<Route namespace="jsu" :data='{"path":"/cxzx/:types?","name":"Unknown","maintainers":["wenjia03"],"location":"cxzx.ts"}' :test='undefined' />

### 计算机科学与工程学院 - 通知公告 <Site url="jsu.edu.cn" size="sm" />

<Route namespace="jsu" :data='{"path":"/rjxy","categories":["university"],"example":"/jsu/rjxy","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"计算机科学与工程学院 - 通知公告","maintainers":["wenjia03"],"location":"rjxy.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 教务处 <Site url="jsu.edu.cn" size="sm" />

<Route namespace="jsu" :data='{"path":"/jwc/:types?","categories":["university"],"example":"/jsu/jwc/jwdt","parameters":{"types":"通知分类 默认为`jwtz`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"教务处","maintainers":["wenjia03"],"description":"| 教务通知 | 教务动态 |\n  | -------- | -------- |\n  | jwtz     | jwdt     |","location":"jwc.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 教务通知 | 教务动态 |
  | -------- | -------- |
  | jwtz     | jwdt     |

### 数学与统计学院 - 通知公告 <Site url="jsu.edu.cn" size="sm" />

<Route namespace="jsu" :data='{"path":"/stxy","categories":["university"],"example":"/jsu/stxy","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"数学与统计学院 - 通知公告","maintainers":["wenjia03"],"location":"math.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 通知公告 <Site url="jsu.edu.cn" size="sm" />

<Route namespace="jsu" :data='{"path":"/notice","categories":["university"],"example":"/jsu/notice","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"通知公告","maintainers":["wenjia03"],"location":"universityindex.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## 江苏海洋大学 <Site url="www.jou.edu.cn"/>

### 官网通知公告 <Site url="www.jou.edu.cn/index/tzgg.htm" size="sm" />

<Route namespace="jou" :data='{"path":"/tzgg","categories":["university"],"example":"/jou/tzgg","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.jou.edu.cn/index/tzgg.htm","www.jou.edu.cn/"]}],"name":"官网通知公告","maintainers":["real-jiakai"],"url":"www.jou.edu.cn/index/tzgg.htm","location":"home.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 研招网通知公告 <Site url="yz.jou.edu.cn/index/zxgg.htm" size="sm" />

<Route namespace="jou" :data='{"path":"/yztzgg","categories":["university"],"example":"/jou/yztzgg","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yz.jou.edu.cn/index/zxgg.htm","yz.jou.edu.cn/"]}],"name":"研招网通知公告","maintainers":["real-jiakai"],"url":"yz.jou.edu.cn/index/zxgg.htm","location":"yz.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## 乐山师范学院 <Site url="lsnu.edu.cn"/>

### 教学部通知公告 <Site url="lsnu.edu.cn/" size="sm" />

<Route namespace="lsnu" :data='{"path":"/jiaowc/tzgg/:category?","categories":["university"],"example":"/lsnu/jiaowc/tzgg","parameters":{"category":"分类名"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["lsnu.edu.cn/"],"target":"/jiaowc/tzgg"}],"name":"教学部通知公告","maintainers":["nyaShine"],"url":"lsnu.edu.cn/","description":"| 实践教学科 | 教育运行科 | 教研教改科 | 学籍管理科 | 考试科 | 教材建设管理科 |\n  | ---------- | ---------- | ---------- | ---------- | ------ | -------------- |\n  | sjjxk      | jxyxk      | jyjgk      | xjglk      | ksk    | jcjsglk        |","location":"jiaowc/tzgg.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 实践教学科 | 教育运行科 | 教研教改科 | 学籍管理科 | 考试科 | 教材建设管理科 |
  | ---------- | ---------- | ---------- | ---------- | ------ | -------------- |
  | sjjxk      | jxyxk      | jyjgk      | xjglk      | ksk    | jcjsglk        |

## 南昌大学 <Site url="jwc.ncu.edu.cn"/>

### 教务通知 <Site url="jwc.ncu.edu.cn/" size="sm" />

<Route namespace="ncu" :data='{"path":"/jwc","categories":["university"],"example":"/ncu/jwc","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["jwc.ncu.edu.cn/","jwc.ncu.edu.cn/jwtz/index.htm"]}],"name":"教务通知","maintainers":["ywh555hhh"],"url":"jwc.ncu.edu.cn/","location":"jwc.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## 南京工程学院 <Site url="jwc.njit.edu.cn"/>

### 南京工程学院教务处 <Site url="jwc.njit.edu.cn" size="sm" />

<Route namespace="njit" :data='{"path":"/jwc/:type?","categories":["university"],"example":"/njit/jwc/jx","parameters":{"type":"默认为 `jx`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"南京工程学院教务处","maintainers":["zefengdaguo"],"description":"| 教学 | 考试 | 信息 | 实践 |\n| ---- | ---- | ---- | ---- |\n| jx   | ks   | xx   | sj   |","location":"jwc.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 教学 | 考试 | 信息 | 实践 |
| ---- | ---- | ---- | ---- |
| jx   | ks   | xx   | sj   |

### 南京工程学院通知公告 <Site url="www.njit.edu.cn/" size="sm" />

<Route namespace="njit" :data='{"path":"/tzgg","categories":["university"],"example":"/njit/tzgg","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.njit.edu.cn/"]}],"name":"南京工程学院通知公告","maintainers":["zefengdaguo"],"url":"www.njit.edu.cn/","location":"tzgg.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## 南京师范大学 <Site url="ceai.njnu.edu.cn"/>

### 计算机与电子信息学院 - 人工智能学院 <Site url="ceai.njnu.edu.cn" size="sm" />

<Route namespace="njnu" :data='{"path":"/ceai/:type","categories":["university"],"example":"/njnu/ceai/xszx","parameters":{"type":"分类名"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"计算机与电子信息学院 - 人工智能学院","maintainers":["Shujakuinkuraudo"],"description":"| 学院公告 | 学院新闻 | 学生资讯 |\n  | -------- | -------- | -------- |\n  | xygg     | xyxw     | xszx     |","location":"ceai/ceai.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 学院公告 | 学院新闻 | 学生资讯 |
  | -------- | -------- | -------- |
  | xygg     | xyxw     | xszx     |

### 教务通知 <Site url="ceai.njnu.edu.cn" size="sm" />

<Route namespace="njnu" :data='{"path":"/jwc/:type","categories":["university"],"example":"/njnu/jwc/xstz","parameters":{"type":"分类名"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"教务通知","maintainers":["Shujakuinkuraudo"],"description":"| 教师通知 | 新闻动态 | 学生通知 |\n  | -------- | -------- | -------- |\n  | jstz     | xwdt     | xstz     |","location":"jwc/jwc.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 教师通知 | 新闻动态 | 学生通知 |
  | -------- | -------- | -------- |
  | jstz     | xwdt     | xstz     |

## 南京大学 <Site url="admission.nju.edu.cn"/>

### ITSC 信息中心 <Site url="itsc.nju.edu.cn/tzgg/list.htm" size="sm" />

<Route namespace="nju" :data='{"path":"/itsc","categories":["university"],"example":"/nju/itsc","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["itsc.nju.edu.cn/tzgg/list.htm"]}],"name":"ITSC 信息中心","maintainers":["ret-1"],"url":"itsc.nju.edu.cn/tzgg/list.htm","location":"itsc.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 本科迎新 <Site url="admission.nju.edu.cn/tzgg/index.html" size="sm" />

<Route namespace="nju" :data='{"path":"/admission","categories":["university"],"example":"/nju/admission","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["admission.nju.edu.cn/tzgg/index.html","admission.nju.edu.cn/tzgg","admission.nju.edu.cn/"]}],"name":"本科迎新","maintainers":["ret-1"],"url":"admission.nju.edu.cn/tzgg/index.html","location":"admission.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 本科生交换生系统 <Site url="admission.nju.edu.cn" size="sm" />

<Route namespace="nju" :data='{"path":"/exchangesys/:type","categories":["university"],"example":"/nju/exchangesys/proj","parameters":{"type":"分类名"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"本科生交换生系统","maintainers":[],"description":"| 新闻通知 | 交换生项目 |\n  | -------- | ---------- |\n  | news     | proj       |","location":"exchangesys.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 新闻通知 | 交换生项目 |
  | -------- | ---------- |
  | news     | proj       |

### 本科生院 <Site url="admission.nju.edu.cn" size="sm" />

<Route namespace="nju" :data='{"path":"/jw/:type","categories":["university"],"example":"/nju/jw/ggtz","parameters":{"type":"分类名"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["jw.nju.edu.cn/:type/list.htm"]}],"name":"本科生院","maintainers":["cqjjjzr"],"description":"| 公告通知 | 教学动态 |\n  | -------- | -------- |\n  | ggtz     | jxdt     |","location":"jw.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 公告通知 | 教学动态 |
  | -------- | -------- |
  | ggtz     | jxdt     |

### 大学外语部 <Site url="dafls.nju.edu.cn/13167/list.html" size="sm" />

<Route namespace="nju" :data='{"path":"/dafls","categories":["university"],"example":"/nju/dafls","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["dafls.nju.edu.cn/13167/list.html","dafls.nju.edu.cn/"]}],"name":"大学外语部","maintainers":["ret-1"],"url":"dafls.nju.edu.cn/13167/list.html","location":"dafls.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 后勤集团 <Site url="webplus.nju.edu.cn/_s25/main.psp" size="sm" />

<Route namespace="nju" :data='{"path":"/hqjt","categories":["university"],"example":"/nju/hqjt","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["webplus.nju.edu.cn/_s25/main.psp"]}],"name":"后勤集团","maintainers":["ret-1"],"url":"webplus.nju.edu.cn/_s25/main.psp","location":"hqjt.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 基建处 <Site url="jjc.nju.edu.cn/main.htm" size="sm" />

<Route namespace="nju" :data='{"path":"/jjc","categories":["university"],"example":"/nju/jjc","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["jjc.nju.edu.cn/main.htm","jjc.nju.edu.cn/"]}],"name":"基建处","maintainers":["ret-1"],"url":"jjc.nju.edu.cn/main.htm","location":"jjc.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 科学技术处 <Site url="admission.nju.edu.cn" size="sm" />

<Route namespace="nju" :data='{"path":"/scit/:type","categories":["university"],"example":"/nju/scit/tzgg","parameters":{"type":"分类名"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"科学技术处","maintainers":["ret-1"],"description":"| 通知公告 | 科研动态 |\n  | -------- | -------- |\n  | tzgg     | kydt     |","location":"scit.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 通知公告 | 科研动态 |
  | -------- | -------- |
  | tzgg     | kydt     |

### 人才招聘网 <Site url="admission.nju.edu.cn" size="sm" />

<Route namespace="nju" :data='{"path":"/rczp/:type","categories":["university"],"example":"/nju/rczp/xxfb","parameters":{"type":"分类名"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["rczp.nju.edu.cn/sylm/:type/index.html"]}],"name":"人才招聘网","maintainers":["ret-1"],"description":"| 信息发布 | 教研类岗位 | 管理岗位及其他 |\n  | -------- | ---------- | -------------- |\n  | xxfb     | jylgw      | gllgw          |","location":"rczp.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 信息发布 | 教研类岗位 | 管理岗位及其他 |
  | -------- | ---------- | -------------- |
  | xxfb     | jylgw      | gllgw          |

### 校医院 <Site url="hospital.nju.edu.cn/ggtz/index.html" size="sm" />

<Route namespace="nju" :data='{"path":"/hospital","categories":["university"],"example":"/nju/hospital","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["hospital.nju.edu.cn/ggtz/index.html"]}],"name":"校医院","maintainers":["ret-1"],"url":"hospital.nju.edu.cn/ggtz/index.html","location":"hosptial.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 研究生院 <Site url="grawww.nju.edu.cn/main.htm" size="sm" />

<Route namespace="nju" :data='{"path":"/gra","categories":["university"],"example":"/nju/gra","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["grawww.nju.edu.cn/main.htm","grawww.nju.edu.cn/"]}],"name":"研究生院","maintainers":["ret-1"],"url":"grawww.nju.edu.cn/main.htm","location":"gra.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 招标办公室 <Site url="admission.nju.edu.cn" size="sm" />

<Route namespace="nju" :data='{"path":"/zbb/:type","categories":["university"],"example":"/nju/zbb/cgxx","parameters":{"type":"分类名"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"招标办公室","maintainers":["ret-1"],"description":"| 采购信息 | 成交公示 | 政府采购意向公开 |\n  | -------- | -------- | ---------------- |\n  | cgxx     | cjgs     | zfcgyxgk         |","location":"zbb.ts"}' :test='{"code":0}' />

| 采购信息 | 成交公示 | 政府采购意向公开 |
  | -------- | -------- | ---------------- |
  | cgxx     | cjgs     | zfcgyxgk         |

### 资产管理处 <Site url="zcc.nju.edu.cn/tzgg/gyfytdglk/index.html" size="sm" />

<Route namespace="nju" :data='{"path":"/zcc","categories":["university"],"example":"/nju/zcc","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["zcc.nju.edu.cn/tzgg/gyfytdglk/index.html","zcc.nju.edu.cn/tzgg/index.html","zcc.nju.edu.cn/"]}],"name":"资产管理处","maintainers":["ret-1"],"url":"zcc.nju.edu.cn/tzgg/gyfytdglk/index.html","location":"zcc.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

## 南京中医药大学 <Site url="lib.njucm.edu.cn"/>

### 研究生院博士招生 <Site url="lib.njucm.edu.cn/2899/list.htm" size="sm" />

<Route namespace="njucm" :data='{"path":"/grabszs","categories":["university"],"example":"/njucm/grabszs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["lib.njucm.edu.cn/2899/list.htm","lib.njucm.edu.cn/"]}],"name":"研究生院博士招生","maintainers":["real-jiakai"],"url":"lib.njucm.edu.cn/2899/list.htm","location":"grabs.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

## 南京邮电大学 <Site url="jwc.njupt.edu.cn"/>

### 教务处通知与新闻 <Site url="jwc.njupt.edu.cn" size="sm" />

<Route namespace="njupt" :data='{"path":"/jwc/:type?","categories":["university"],"example":"/njupt/jwc/notice","parameters":{"type":"默认为 `notice`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"教务处通知与新闻","maintainers":["shaoye"],"description":"| 通知公告 | 教务快讯 |\n  | -------- | -------- |\n  | notice   | news     |","location":"jwc.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 通知公告 | 教务快讯 |
  | -------- | -------- |
  | notice   | news     |

## 南京理工大学 <Site url="jwc.njust.edu.cn"/>

### 财务处 <Site url="jwc.njust.edu.cn" size="sm" />

<Route namespace="njust" :data='{"path":"/cwc/:type?","categories":["university"],"example":"/njust/cwc/tzgg","parameters":{"type":"分类名，见下表，默认为通知公告"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"财务处","maintainers":["MilkShakeYoung","jasongzy"],"description":"| 通知公告 | 办事流程 |\n  | -------- | -------- |\n  | tzgg     | bslc     |","location":"cwc.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 通知公告 | 办事流程 |
  | -------- | -------- |
  | tzgg     | bslc     |

### 电光学院研学网 <Site url="jwc.njust.edu.cn" size="sm" />

<Route namespace="njust" :data='{"path":"/dgxg/:type?","categories":["university"],"example":"/njust/dgxg/gstz","parameters":{"type":"分类名，见下表，默认为公示通知"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"电光学院研学网","maintainers":["jasongzy"],"description":"| 公示通知 | 学术文化 | 就业指导 |\n  | -------- | -------- | -------- |\n  | gstz     | xswh     | jyzd     |","location":"dgxg.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 公示通知 | 学术文化 | 就业指导 |
  | -------- | -------- | -------- |
  | gstz     | xswh     | jyzd     |

### 电光学院年级网站 <Site url="jwc.njust.edu.cn" size="sm" />

<Route namespace="njust" :data='{"path":"/eo/:grade?/:type?","categories":["university"],"example":"/njust/eo/17/tz","parameters":{"grade":"年级，见下表，默认为本科 2017 级，未列出的年级所对应的参数可以从级网二级页面的 URL Path 中找到，例如：本科 2020 级为 `_t1316`","type":"类别，见下表，默认为年级通知（通知公告），未列出的类别所对应的参数可以从级网二级页面的 URL Path 中找到，例如：电光 20 的通知公告为 `tzgg_12969`"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"电光学院年级网站","maintainers":["jasongzy"],"description":"`grade` 列表：\n\n  | 本科 2016 级 | 本科 2017 级 | 本科 2018 级 | 本科 2019 级 |\n  | ------------ | ------------ | ------------ | ------------ |\n  | 16           | 17           | 18           | 19           |\n\n  `type` 列表：\n\n  | 年级通知（通知公告） | 每日动态（主任寄语） |\n  | -------------------- | -------------------- |\n  | tz                   | dt                   |","location":"eo.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

`grade` 列表：

  | 本科 2016 级 | 本科 2017 级 | 本科 2018 级 | 本科 2019 级 |
  | ------------ | ------------ | ------------ | ------------ |
  | 16           | 17           | 18           | 19           |

  `type` 列表：

  | 年级通知（通知公告） | 每日动态（主任寄语） |
  | -------------------- | -------------------- |
  | tz                   | dt                   |

### 电光学院 <Site url="jwc.njust.edu.cn" size="sm" />

<Route namespace="njust" :data='{"path":"/eoe/:type?","categories":["university"],"example":"/njust/eoe/tzgg","parameters":{"type":"分类名，见下表，默认为通知公告"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"电光学院","maintainers":["jasongzy"],"description":"| 通知公告 | 新闻动态 |\n  | -------- | -------- |\n  | tzgg     | xwdt     |","location":"eoe.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 通知公告 | 新闻动态 |
  | -------- | -------- |
  | tzgg     | xwdt     |

### 教务处 <Site url="jwc.njust.edu.cn" size="sm" />

<Route namespace="njust" :data='{"path":"/jwc/:type?","categories":["university"],"example":"/njust/jwc/xstz","parameters":{"type":"分类名，见下表，默认为学生通知"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"教务处","maintainers":["MilkShakeYoung","jasongzy"],"description":"| 教师通知 | 学生通知 | 新闻 | 学院动态 |\n  | -------- | -------- | ---- | -------- |\n  | jstz     | xstz     | xw   | xydt     |","location":"jwc.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 教师通知 | 学生通知 | 新闻 | 学院动态 |
  | -------- | -------- | ---- | -------- |
  | jstz     | xstz     | xw   | xydt     |

### 研究生院 <Site url="jwc.njust.edu.cn" size="sm" />

<Route namespace="njust" :data='{"path":"/gs/:type?","categories":["university"],"example":"/njust/gs/sytzgg_4568","parameters":{"type":"分类 ID，部分示例参数见下表，默认为首页通知公告，其他分类 ID 可以从网站 URL Path 中找到，如国际交流为 `gjjl`"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gs.njust.edu.cn/:type/list.htm"],"target":"/gs/:type"}],"name":"研究生院","maintainers":["MilkShakeYoung","jasongzy"],"description":"| 首页通知公告 | 首页新闻动态 | 最新通知 | 招生信息 | 培养信息 | 学术活动 |\n  | ------------ | ------------ | -------- | -------- | -------- | -------- |\n  | sytzgg_4568 | sytzgg       | 14686    | 14687    | 14688    | xshdggl  |","location":"gs.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 首页通知公告 | 首页新闻动态 | 最新通知 | 招生信息 | 培养信息 | 学术活动 |
  | ------------ | ------------ | -------- | -------- | -------- | -------- |
  | sytzgg_4568 | sytzgg       | 14686    | 14687    | 14688    | xshdggl  |

## 南京晓庄学院 <Site url="lib.njxzc.edu.cn"/>

### 官网通知公告 <Site url="www.njxzc.edu.cn/89/list.htm" size="sm" />

<Route namespace="njxzc" :data='{"path":"/tzgg","categories":["university"],"example":"/njxzc/tzgg","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.njxzc.edu.cn/89/list.htm","www.njxzc.edu.cn/"]}],"name":"官网通知公告","maintainers":["real-jiakai"],"url":"www.njxzc.edu.cn/89/list.htm","location":"home.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 图书馆通知公告 <Site url="lib.njxzc.edu.cn/pxyhd/list.htm" size="sm" />

<Route namespace="njxzc" :data='{"path":"/libtzgg","categories":["university"],"example":"/njxzc/libtzgg","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["lib.njxzc.edu.cn/pxyhd/list.htm","lib.njxzc.edu.cn/"]}],"name":"图书馆通知公告","maintainers":["real-jiakai"],"url":"lib.njxzc.edu.cn/pxyhd/list.htm","location":"lib.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

## 南京航空航天大学 <Site url="aao.nuaa.edu.cn"/>

### Unknown <Site url="aao.nuaa.edu.cn" size="sm" />

<Route namespace="nuaa" :data='{"path":"/cae/:type/:getDescription?","name":"Unknown","maintainers":["Xm798"],"location":"college/cae.ts"}' :test='undefined' />

### 计算机科学与技术学院 <Site url="aao.nuaa.edu.cn" size="sm" />

<Route namespace="nuaa" :data='{"path":"/cs/:type/:getDescription?","categories":["university"],"example":"/nuaa/cs/jxdt","parameters":{"type":"分类名，见下表","getDescription":"是否获取全文"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"计算机科学与技术学院","maintainers":["LogicJake","Seiry","qrzbing","Xm798"],"description":"| 通知公告 | 热点新闻 | 学科科研 | 教学动态 | 本科生培养 | 研究生培养 | 学生工作 |\n  | -------- | -------- | -------- | -------- | ---------- | ---------- | -------- |\n  | tzgg     | rdxw     | xkky     | jxdt     | be         | me         | xsgz     |","location":"college/cs.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 通知公告 | 热点新闻 | 学科科研 | 教学动态 | 本科生培养 | 研究生培养 | 学生工作 |
  | -------- | -------- | -------- | -------- | ---------- | ---------- | -------- |
  | tzgg     | rdxw     | xkky     | jxdt     | be         | me         | xsgz     |

### 教务处 <Site url="aao.nuaa.edu.cn" size="sm" />

<Route namespace="nuaa" :data='{"path":"/jwc/:type/:getDescription?","categories":["university"],"example":"/nuaa/jwc/tzgg/getDescription","parameters":{"type":"分类名，见下表","getDescription":"是否获取全文"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"教务处","maintainers":["arcosx","Seiry","qrzbing","Xm798"],"description":"| 通知公告 | 教学服务 | 教学建设 | 学生培养 | 教学资源 |\n  | -------- | -------- | -------- | -------- | -------- |\n  | tzgg     | jxfw     | jxjs     | xspy     | jxzy     |","location":"jwc/jwc.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 通知公告 | 教学服务 | 教学建设 | 学生培养 | 教学资源 |
  | -------- | -------- | -------- | -------- | -------- |
  | tzgg     | jxfw     | jxjs     | xspy     | jxzy     |

### 研究生院 <Site url="aao.nuaa.edu.cn" size="sm" />

<Route namespace="nuaa" :data='{"path":"/yjsy/:type/:getDescription?","categories":["university"],"example":"/nuaa/yjsy/tzgg/getDescription","parameters":{"type":"分类名，见下表","getDescription":"是否获取全文"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"研究生院","maintainers":["junfengP","Seiry","Xm798"],"description":"| 通知公告 | 新闻动态 | 学术信息 | 师生风采 |\n  | -------- | -------- | -------- | -------- |\n  | tzgg     | xwdt     | xsxx     | ssfc     |","location":"yjsy/yjsy.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 通知公告 | 新闻动态 | 学术信息 | 师生风采 |
  | -------- | -------- | -------- | -------- |
  | tzgg     | xwdt     | xsxx     | ssfc     |

## 南京信息工程大学 <Site url="bulletin.nuist.edu.cn"/>

:::tip
路由地址全部按照 **学校官网域名和栏目编号** 设计

使用方法：

以[南信大信息公告栏](https://bulletin.nuist.edu.cn)为例，点开任意一个栏目

获得 URL 中的**分域名**和**栏目编号（可选）**：https://`bulletin`.nuist.edu.cn/`791`/list.htm

将其替换到 RSS 路由地址中即可：

[https://rsshub.app/**nuist**/`bulletin`](https://rsshub.app/nuist/bulletin) 或 [https://rsshub.app/**nuist**/`bulletin`/`791`](https://rsshub.app/nuist/bulletin)
:::

### NUIST AS（南信大大气科学学院） <Site url="bulletin.nuist.edu.cn" size="sm" />

<Route namespace="nuist" :data='{"path":"/cas/:category?","categories":["university"],"example":"/nuist/cas/xxgg","parameters":{"category":"默认为信息公告"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"NUIST AS（南信大大气科学学院）","maintainers":["gylidian"],"description":"| 信息公告 | 新闻快讯 | 科学研究 | 网上公示 | 本科教育 | 研究生教育 |\n  | -------- | -------- | -------- | -------- | -------- | ---------- |\n  | xxgg     | xwkx     | kxyj     | wsgs     | bkjy     | yjsjy      |","location":"cas.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 信息公告 | 新闻快讯 | 科学研究 | 网上公示 | 本科教育 | 研究生教育 |
  | -------- | -------- | -------- | -------- | -------- | ---------- |
  | xxgg     | xwkx     | kxyj     | wsgs     | bkjy     | yjsjy      |

### NUIST CS（南信大计软院） <Site url="bulletin.nuist.edu.cn" size="sm" />

<Route namespace="nuist" :data='{"path":"/scs/:category?","categories":["university"],"example":"/nuist/scs/xwkx","parameters":{"category":"默认为新闻快讯"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["scs.nuist.edu.cn/:category/list.htm"],"target":"/scs/:category"}],"name":"NUIST CS（南信大计软院）","maintainers":["gylidian"],"description":"| 新闻快讯 | 通知公告 | 教务信息 | 科研动态 | 学子风采 |\n  | -------- | -------- | -------- | -------- | -------- |\n  | xwkx     | tzgg     | jwxx     | kydt     | xzfc     |","location":"scs.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 新闻快讯 | 通知公告 | 教务信息 | 科研动态 | 学子风采 |
  | -------- | -------- | -------- | -------- | -------- |
  | xwkx     | tzgg     | jwxx     | kydt     | xzfc     |

### NUIST ESE（南信大环科院） <Site url="bulletin.nuist.edu.cn" size="sm" />

<Route namespace="nuist" :data='{"path":"/sese/:category?","categories":["university"],"example":"/nuist/sese/tzgg1","parameters":{"category":"默认为通知公告"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"NUIST ESE（南信大环科院）","maintainers":["gylidian"],"description":"| 通知公告 | 新闻快讯 | 学术动态 | 学生工作 | 研究生教育 | 本科教育 |\n  | -------- | -------- | -------- | -------- | ---------- | -------- |\n  | tzgg1    | xwkx     | xsdt1    | xsgz1    | yjsjy1     | bkjy1    |","location":"sese.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 通知公告 | 新闻快讯 | 学术动态 | 学生工作 | 研究生教育 | 本科教育 |
  | -------- | -------- | -------- | -------- | ---------- | -------- |
  | tzgg1    | xwkx     | xsdt1    | xsgz1    | yjsjy1     | bkjy1    |

### Unknown <Site url="bulletin.nuist.edu.cn" size="sm" />

<Route namespace="nuist" :data='{"path":"/yjs/*","name":"Unknown","maintainers":[],"location":"yjs.ts"}' :test='undefined' />

### Unknown <Site url="lib.nuist.edu.cn/" size="sm" />

<Route namespace="nuist" :data='{"path":"/lib","radar":[{"source":["lib.nuist.edu.cn/","lib.nuist.edu.cn/index/tzgg.htm"]}],"name":"Unknown","maintainers":["gylidian"],"url":"lib.nuist.edu.cn/","location":"library/lib.ts"}' :test='undefined' />

### 教务处 <Site url="bulletin.nuist.edu.cn" size="sm" />

<Route namespace="nuist" :data='{"path":"/jwc/:category?","categories":["university"],"example":"/nuist/jwc/jxyw","parameters":{"category":"默认为教学要闻"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"教务处","maintainers":["gylidian"],"description":"| 教学要闻 | 学院教学 | 教务管理 | 教学研究 | 教务管理 | 教材建设 | 考试中心 |\n  | -------- | -------- | -------- | -------- | -------- | -------- | -------- |\n  | jxyw     | xyjx     | jwgl     | jxyj     | sjjx     | jcjs     | kszx     |","location":"jwc.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 教学要闻 | 学院教学 | 教务管理 | 教学研究 | 教务管理 | 教材建设 | 考试中心 |
  | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
  | jxyw     | xyjx     | jwgl     | jxyj     | sjjx     | jcjs     | kszx     |

### 南信大信息公告栏 <Site url="bulletin.nuist.edu.cn" size="sm" />

<Route namespace="nuist" :data='{"path":"/bulletin/:category?","categories":["university"],"example":"/nuist/bulletin/791","parameters":{"category":"默认为 `791`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["bulletin.nuist.edu.cn/:category/list.htm"],"target":"/bulletin/:category"}],"name":"南信大信息公告栏","maintainers":["gylidian"],"description":"| 全部 | 文件公告 | 学术报告 | 招标信息 | 会议通知 | 党政事务 | 组织人事 |\n  | ---- | -------- | -------- | -------- | -------- | -------- | -------- |\n  | 791  | 792      | xsbgw    | 779      | 780      | 781      | 782      |\n\n  | 科研信息 | 招生就业 | 教学考试 | 专题讲座 | 校园活动 | 学院动态 | 其他 |\n  | -------- | -------- | -------- | -------- | -------- | -------- | ---- |\n  | 783      | 784      | 785      | 786      | 788      | 789      | qt   |\n\n  :::warning\n  全文内容需使用 校园网或[VPN](http://vpn.nuist.edu.cn) 获取\n  :::","location":"bulletin.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 全部 | 文件公告 | 学术报告 | 招标信息 | 会议通知 | 党政事务 | 组织人事 |
  | ---- | -------- | -------- | -------- | -------- | -------- | -------- |
  | 791  | 792      | xsbgw    | 779      | 780      | 781      | 782      |

  | 科研信息 | 招生就业 | 教学考试 | 专题讲座 | 校园活动 | 学院动态 | 其他 |
  | -------- | -------- | -------- | -------- | -------- | -------- | ---- |
  | 783      | 784      | 785      | 786      | 788      | 789      | qt   |

  :::warning
  全文内容需使用 校园网或[VPN](http://vpn.nuist.edu.cn) 获取
  :::

### 南信大学生工作处 <Site url="xgc.nuist.edu.cn/" size="sm" />

<Route namespace="nuist" :data='{"path":"/xgc","categories":["university"],"example":"/nuist/xgc","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["xgc.nuist.edu.cn/","xgc.nuist.edu.cn/419/list.htm"]}],"name":"南信大学生工作处","maintainers":["gylidian"],"url":"xgc.nuist.edu.cn/","location":"xgc.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## 南方科技大学 <Site url="biddingoffice.sustech.edu.cn"/>

### 采购与招标管理部 <Site url="biddingoffice.sustech.edu.cn/" size="sm" />

<Route namespace="sustech" :data='{"path":"/bidding","categories":["university"],"example":"/sustech/bidding","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["biddingoffice.sustech.edu.cn/"]}],"name":"采购与招标管理部","maintainers":["sparkcyf"],"url":"biddingoffice.sustech.edu.cn/","location":"bidding.ts"}' :test='{"code":0}' />

### 新闻网（中文） <Site url="newshub.sustech.edu.cn/news" size="sm" />

<Route namespace="sustech" :data='{"path":"/newshub-zh","categories":["university"],"example":"/sustech/newshub-zh","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["newshub.sustech.edu.cn/news"]}],"name":"新闻网（中文）","maintainers":["sparkcyf"],"url":"newshub.sustech.edu.cn/news","location":"newshub-zh.ts"}' :test='{"code":0}' />

### 研究生网通知公告 <Site url="gs.sustech.edu.cn/" size="sm" />

<Route namespace="sustech" :data='{"path":"/yjs","categories":["university"],"example":"/sustech/yjs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gs.sustech.edu.cn/"]}],"name":"研究生网通知公告","maintainers":["shengmaosu"],"url":"gs.sustech.edu.cn/","location":"yjs.ts"}' :test='{"code":0}' />

## 齐鲁工业大学 <Site url="qlu.edu.cn"/>

### 通知公告 <Site url="qlu.edu.cn/tzggsh/list1.htm" size="sm" />

<Route namespace="qlu" :data='{"path":"/notice","categories":["university"],"example":"/qlu/notice","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["qlu.edu.cn/tzggsh/list1.htm"]}],"name":"通知公告","maintainers":["SunBK201"],"url":"qlu.edu.cn/tzggsh/list1.htm","location":"notice.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

## 青岛大学 <Site url="jwc.qdu.edu.cn"/>

### 后勤管理处通知 <Site url="houqin.qdu.edu.cn/tzgg.htm" size="sm" />

<Route namespace="qdu" :data='{"path":"/houqin","categories":["university"],"example":"/qdu/houqin","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["houqin.qdu.edu.cn/tzgg.htm","houqin.qdu.edu.cn/"]}],"name":"后勤管理处通知","maintainers":["abc1763613206"],"url":"houqin.qdu.edu.cn/tzgg.htm","location":"houqin.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 教务处通知 <Site url="jwc.qdu.edu.cn/jwtz.htm" size="sm" />

<Route namespace="qdu" :data='{"path":"/jwc","categories":["university"],"example":"/qdu/jwc","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["jwc.qdu.edu.cn/jwtz.htm","jwc.qdu.edu.cn/"]}],"name":"教务处通知","maintainers":["abc1763613206"],"url":"jwc.qdu.edu.cn/jwtz.htm","location":"jwc.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

## 青岛科技大学 <Site url="jw.qust.edu.cn"/>

### 教务通知 <Site url="jw.qust.edu.cn/jwtz.htm" size="sm" />

<Route namespace="qust" :data='{"path":"/jw","categories":["university"],"example":"/qust/jw","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["jw.qust.edu.cn/jwtz.htm","jw.qust.edu.cn/"]}],"name":"教务通知","maintainers":["Silent-wqh"],"url":"jw.qust.edu.cn/jwtz.htm","location":"jw.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## 山东大学（威海） <Site url="xinwen.wh.sdu.edu.cn"/>

### 材料科学与工程学院通知 <Site url="xinwen.wh.sdu.edu.cn" size="sm" />

<Route namespace="sdu" :data='{"path":"/cmse/:type?","categories":["university"],"example":"/sdu/cmse/0","parameters":{"type":"默认为 `0`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"材料科学与工程学院通知","maintainers":["Ji4n1ng"],"description":"| 通知公告 | 学院新闻 | 本科生教育 | 研究生教育 | 学术动态 |\n  | -------- | -------- | ---------- | ---------- | -------- |\n  | 0        | 1        | 2          | 3          | 4        |","location":"cmse.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 通知公告 | 学院新闻 | 本科生教育 | 研究生教育 | 学术动态 |
  | -------- | -------- | ---------- | ---------- | -------- |
  | 0        | 1        | 2          | 3          | 4        |

### 机械工程学院通知 <Site url="xinwen.wh.sdu.edu.cn" size="sm" />

<Route namespace="sdu" :data='{"path":"/mech/:type?","categories":["university"],"example":"/sdu/mech/0","parameters":{"type":"默认为 `0`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"机械工程学院通知","maintainers":["Ji4n1ng"],"description":"| 通知公告 | 院所新闻 | 教学信息 | 学术动态 | 学院简报 |\n  | -------- | -------- | -------- | -------- | -------- |\n  | 0        | 1        | 2        | 3        | 4        |","location":"mech.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 通知公告 | 院所新闻 | 教学信息 | 学术动态 | 学院简报 |
  | -------- | -------- | -------- | -------- | -------- |
  | 0        | 1        | 2        | 3        | 4        |

### 计算机科学与技术学院通知 <Site url="xinwen.wh.sdu.edu.cn" size="sm" />

<Route namespace="sdu" :data='{"path":"/cs/:type?","categories":["university"],"example":"/sdu/cs/0","parameters":{"type":"默认为 `0`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"计算机科学与技术学院通知","maintainers":["Ji4n1ng"],"description":"| 学院公告 | 学术报告 | 科技简讯 |\n  | -------- | -------- | -------- |\n  | 0        | 1        | 2        |","location":"cs.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 学院公告 | 学术报告 | 科技简讯 |
  | -------- | -------- | -------- |
  | 0        | 1        | 2        |

### 教务处 <Site url="xinwen.wh.sdu.edu.cn" size="sm" />

<Route namespace="sdu" :data='{"path":"/wh/jwc/:column?","categories":["university"],"example":"/sdu/wh/jwc/gztz","parameters":{"column":"专栏名称，默认为工作通知（`gztz`）"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"教务处","maintainers":["kxxt"],"description":"| 规章制度 | 专业建设 | 实践教学 | 支部风采 | 服务指南 | 教务要闻 | 工作通知 | 教务简报 | 常用下载 |\n  | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |\n  | gzzd     | zyjs     | sjjx     | zbfc     | fwzn     | jwyw     | gztz     | jwjb     | cyxz     |","location":"wh/jwc.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 规章制度 | 专业建设 | 实践教学 | 支部风采 | 服务指南 | 教务要闻 | 工作通知 | 教务简报 | 常用下载 |
  | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
  | gzzd     | zyjs     | sjjx     | zbfc     | fwzn     | jwyw     | gztz     | jwjb     | cyxz     |

### 能源与动力工程学院通知 <Site url="xinwen.wh.sdu.edu.cn" size="sm" />

<Route namespace="sdu" :data='{"path":"/epe/:type?","categories":["university"],"example":"/sdu/epe/0","parameters":{"type":"默认为 `0`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"能源与动力工程学院通知","maintainers":["Ji4n1ng"],"description":"| 学院动态 | 通知公告 | 学术论坛 |\n  | -------- | -------- | -------- |\n  | 0        | 1        | 2        |","location":"epe.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 学院动态 | 通知公告 | 学术论坛 |
  | -------- | -------- | -------- |
  | 0        | 1        | 2        |

### 软件学院通知 <Site url="xinwen.wh.sdu.edu.cn" size="sm" />

<Route namespace="sdu" :data='{"path":"/sc/:type?","categories":["university"],"example":"/sdu/sc/0","parameters":{"type":"默认为 `0`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"软件学院通知","maintainers":["Ji4n1ng"],"description":"| 通知公告 | 学术动态 | 本科教育 | 研究生教育 |\n  | -------- | -------- | -------- | ---------- |\n  | 0        | 1        | 2        | 3          |","location":"sc.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 通知公告 | 学术动态 | 本科教育 | 研究生教育 |
  | -------- | -------- | -------- | ---------- |
  | 0        | 1        | 2        | 3          |

### 新闻网 <Site url="xinwen.wh.sdu.edu.cn" size="sm" />

<Route namespace="sdu" :data='{"path":"/wh/news/:column?","categories":["university"],"example":"/sdu/wh/news/xyyw","parameters":{"column":"专栏名称，默认为校园要闻（`xyyw`）"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"新闻网","maintainers":["kxxt"],"description":"| 校园要闻 | 学生动态 | 综合新闻 | 山大视点 | 菁菁校园 | 校园简讯 | 玛珈之窗 | 热点专题 | 媒体视角 | 高教视野 | 理论学习 |\n  | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |\n  | xyyw     | xsdt     | zhxw     | sdsd     | jjxy     | xyjx     | mjzc     | rdzt     | mtsj     | gjsy     | llxx     |","location":"wh/news.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 校园要闻 | 学生动态 | 综合新闻 | 山大视点 | 菁菁校园 | 校园简讯 | 玛珈之窗 | 热点专题 | 媒体视角 | 高教视野 | 理论学习 |
  | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
  | xyyw     | xsdt     | zhxw     | sdsd     | jjxy     | xyjx     | mjzc     | rdzt     | mtsj     | gjsy     | llxx     |

## 山东科技大学 <Site url="sdust.edu.cn"/>

### 研究生招生网 <Site url="sdust.edu.cn" size="sm" />

<Route namespace="sdust" :data='{"path":"/yjsy/zhaosheng/:id?","categories":["university"],"example":"/sdust/yjsy/zhaosheng","parameters":{"id":"栏目 id，见下表，默认为通知公告"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"研究生招生网","maintainers":["nczitzk"],"description":"栏目\n\n  | 招生简章 | 专业目录 | 往届录取 | 管理规定 | 资料下载 |\n  | -------- | -------- | -------- | -------- | -------- |\n  | zsjz     | zyml     | wjlq     | glgd     | zlxz     |\n\n  | 通知公告 | 博士招生 | 硕士招生 | 推免生招生 | 招生宣传 |\n  | -------- | -------- | -------- | ---------- | -------- |\n  | tzgg     | bszs     | sszs     | tms        | zsxc     |","location":"yjsy/zhaosheng.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

栏目

  | 招生简章 | 专业目录 | 往届录取 | 管理规定 | 资料下载 |
  | -------- | -------- | -------- | -------- | -------- |
  | zsjz     | zyml     | wjlq     | glgd     | zlxz     |

  | 通知公告 | 博士招生 | 硕士招生 | 推免生招生 | 招生宣传 |
  | -------- | -------- | -------- | ---------- | -------- |
  | tzgg     | bszs     | sszs     | tms        | zsxc     |

## 上海社会科学院 <Site url="gs.sass.org.cn"/>

### 研究生院 <Site url="gs.sass.org.cn" size="sm" />

<Route namespace="sass" :data='{"path":"/gs/:type","categories":["university"],"example":"/sass/gs/1793","parameters":{"type":"类别 ID，见下表，其他未列出的栏目参数可以从页面的 URL Path 中找到，例如：硕士统考招生的网址为 `https://gs.sass.org.cn/1793/list.htm`，则类别 ID 为`1793`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gs.sass.org.cn/:type/list.htm"]}],"name":"研究生院","maintainers":["yanbot-team"],"description":"| 硕士统考招生 | 硕士推免招生 |\n  | ------------ | ------------ |\n  | 1793         | sstmzs       |","location":"gs/index.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 硕士统考招生 | 硕士推免招生 |
  | ------------ | ------------ |
  | 1793         | sstmzs       |

## 上海电力大学 <Site url="bwc.shiep.edu.cn"/>

### 新闻网与学院通知 <Site url="bwc.shiep.edu.cn" size="sm" />

<Route namespace="shiep" :data='{"path":"/:type/:id?","categories":["university"],"example":"/shiep/news/notice","parameters":{"type":"类型名称，见下表","id":"页面 ID，默认为通知公告或学院公告所对应的 ID"},"radar":[{"title":"武装部保卫处","source":["bwc.shiep.edu.cn/:id/list.htm"],"target":"/bwc/:id"},{"title":"本科就业信息网","source":["career.shiep.edu.cn/news/index/tag/:id"],"target":"/career/:id"},{"title":"资产经营公司/产业办","source":["cyb.shiep.edu.cn/:id/list.htm"],"target":"/cyb/:id"},{"title":"党委办公室","source":["dangban.shiep.edu.cn/:id/list.htm"],"target":"/dangban/:id"},{"title":"党建服务中心/党建督查室","source":["djfwzxdcs.shiep.edu.cn/:id/list.htm"],"target":"/djfwzxdcs/:id"},{"title":"电气工程学院","source":["dqxy.shiep.edu.cn/:id/list.htm"],"target":"/dqxy/:id"},{"title":"对外联络处","source":["dwllc.shiep.edu.cn/:id/list.htm"],"target":"/dwllc/:id"},{"title":"电子与信息工程学院","source":["dxxy.shiep.edu.cn/:id/list.htm"],"target":"/dxxy/:id"},{"title":"能源与机械工程学院","source":["energy.shiep.edu.cn/:id/list.htm"],"target":"/energy/:id"},{"title":"上海热交换系统节能工程技术研究中心","source":["energy-saving.shiep.edu.cn/:id/list.htm"],"target":"/energy-saving/:id"},{"title":"Shanghai University of Electric Power","source":["english.shiep.edu.cn/:id/list.htm"],"target":"/english/:id"},{"title":"国际交流与合作处（港澳台办公室）","source":["fao.shiep.edu.cn/:id/list.htm"],"target":"/fao/:id"},{"title":"妇工委","source":["fgw.shiep.edu.cn/:id/list.htm"],"target":"/fgw/:id"},{"title":"发展规划处","source":["fzghc.shiep.edu.cn/:id/list.htm"],"target":"/fzghc/:id"},{"title":"上海新能源人才技术教育交流中心","source":["gec.shiep.edu.cn/:id/list.htm"],"target":"/gec/:id"},{"title":"工会","source":["gonghui.shiep.edu.cn/:id/list.htm"],"target":"/gonghui/:id"},{"title":"上海绿色能源并网技术研究中心","source":["green-energy.shiep.edu.cn/:id/list.htm"],"target":"/green-energy/:id"},{"title":"能源化学实验教学中心","source":["hhsyzx.shiep.edu.cn/:id/list.htm"],"target":"/hhsyzx/:id"},{"title":"环境与化学工程学院","source":["hhxy.shiep.edu.cn/:id/list.htm"],"target":"/hhxy/:id"},{"title":"后勤管理处（后勤服务中心）","source":["hqglc.shiep.edu.cn/:id/list.htm"],"target":"/hqglc/:id"},{"title":"创新创业工程训练中心","source":["ieetc.shiep.edu.cn/:id/list.htm"],"target":"/ieetc/:id"},{"title":"机关党委","source":["jgdw.shiep.edu.cn/:id/list.htm"],"target":"/jgdw/:id"},{"title":"经济与管理学院","source":["jgxy.shiep.edu.cn/:id/list.htm"],"target":"/jgxy/:id"},{"title":"纪委（监察专员办公室）","source":["jijian.shiep.edu.cn/:id/list.htm"],"target":"/jijian/:id"},{"title":"基建处","source":["jjc.shiep.edu.cn/:id/list.htm"],"target":"/jjc/:id"},{"title":"继续教育学院（国际教育学院）","source":["jjxy.shiep.edu.cn/:id/list.htm"],"target":"/jjxy/:id"},{"title":"教师教学发展中心","source":["jsjxfzzx.shiep.edu.cn/:id/list.htm"],"target":"/jsjxfzzx/:id"},{"title":"计算机科学与技术学院","source":["jsjxy.shiep.edu.cn/:id/list.htm"],"target":"/jsjxy/:id"},{"title":"技术转移中心","source":["jszyzx.shiep.edu.cn/:id/list.htm"],"target":"/jszyzx/:id"},{"title":"教务处","source":["jwc.shiep.edu.cn/:id/list.htm"],"target":"/jwc/:id"},{"title":"电力装备设计与制造虚拟仿真中心","source":["jxfz.shiep.edu.cn/:id/list.htm"],"target":"/jxfz/:id"},{"title":"能源电力科创中心","source":["kczx.shiep.edu.cn/:id/list.htm"],"target":"/kczx/:id"},{"title":"科研处/融合办","source":["kyc.shiep.edu.cn/:id/list.htm"],"target":"/kyc/:id"},{"title":"临港新校区建设综合办公室","source":["lgxq.shiep.edu.cn/:id/list.htm"],"target":"/lgxq/:id"},{"title":"图书馆","source":["library.shiep.edu.cn/:id/list.htm"],"target":"/library/:id"},{"title":"现代教育技术中心/信息办","source":["metc.shiep.edu.cn/:id/list.htm"],"target":"/metc/:id"},{"title":"上海市电力材料防护与新材料重点实验室","source":["mpep.shiep.edu.cn/:id/list.htm"],"target":"/mpep/:id"},{"title":"新闻网","source":["news.shiep.edu.cn/:id/list.htm"],"target":"/news/:id"},{"title":"能源电力智库","source":["nydlzk.shiep.edu.cn/:id/list.htm"],"target":"/nydlzk/:id"},{"title":"校长办公室（档案馆）","source":["office.shiep.edu.cn/:id/list.htm"],"target":"/office/:id"},{"title":"国家新能源电力系统实验教学示范中心","source":["rpstec.shiep.edu.cn/:id/list.htm"],"target":"/rpstec/:id"},{"title":"党委教师工作部/人事处","source":["rsc.shiep.edu.cn/:id/list.htm"],"target":"/rsc/:id"},{"title":"人文艺术学院","source":["rwysxy.shiep.edu.cn/:id/list.htm"],"target":"/rwysxy/:id"},{"title":"审计处","source":["sjc.shiep.edu.cn/:id/list.htm"],"target":"/sjc/:id"},{"title":"马克思主义学院","source":["skb.shiep.edu.cn/:id/list.htm"],"target":"/skb/:id"},{"title":"数理学院","source":["slxy.shiep.edu.cn/:id/list.htm"],"target":"/slxy/:id"},{"title":"智能发电实验教学中心","source":["spgc.shiep.edu.cn/:id/list.htm"],"target":"/spgc/:id"},{"title":"实验室与资产管理处","source":["sysyzcglc.shiep.edu.cn/:id/list.htm"],"target":"/sysyzcglc/:id"},{"title":"离退休党委/退管办","source":["tgb.shiep.edu.cn/:id/list.htm"],"target":"/tgb/:id"},{"title":"团委","source":["tw.shiep.edu.cn/:id/list.htm"],"target":"/tw/:id"},{"title":"体育学院","source":["tyb.shiep.edu.cn/:id/list.htm"],"target":"/tyb/:id"},{"title":"统战部","source":["tzb.shiep.edu.cn/:id/list.htm"],"target":"/tzb/:id"},{"title":"文明办","source":["wenming.shiep.edu.cn/:id/list.htm"],"target":"/wenming/:id"},{"title":"外国语学院","source":["wgyxy.shiep.edu.cn/:id/list.htm"],"target":"/wgyxy/:id"},{"title":"宣传部（文明办、融媒体中心）","source":["xcb.shiep.edu.cn/:id/list.htm"],"target":"/xcb/:id"},{"title":"学生处","source":["xsc.shiep.edu.cn/:id/list.htm"],"target":"/xsc/:id"},{"title":"巡查办","source":["xunchaban.shiep.edu.cn/:id/list.htm"],"target":"/xunchaban/:id"},{"title":"信息公开网","source":["xxgk.shiep.edu.cn/:id/list.htm"],"target":"/xxgk/:id"},{"title":"研究生院/研工部","source":["yjsc.shiep.edu.cn/:id/list.htm"],"target":"/yjsc/:id"},{"title":"自动化工程学院","source":["zdhxy.shiep.edu.cn/:id/list.htm"],"target":"/zdhxy/:id"},{"title":"本科招生网","source":["zs.shiep.edu.cn/:id/list.htm"],"target":"/zs/:id"},{"title":"学习路上","source":["ztjy.shiep.edu.cn/:id/list.htm"],"target":"/ztjy/:id"},{"title":"组织部（老干部处、党校）","source":["zzb.shiep.edu.cn/:id/list.htm"],"target":"/zzb/:id"}],"name":"新闻网与学院通知","maintainers":["gumibea","TeamSUEP"],"description":"类型名称与默认 ID：\n\n  学院一览：\n\n  | 能源与机械工程学院 | 环境与化学工程学院 | 电气工程学院 | 自动化工程学院 | 计算机科学与技术学院 | 电子与信息工程学院 | 经济与管理学院 | 数理学院 | 外国语学院 | 体育学院 | 马克思主义学院 | 人文艺术学院 | 继续教育学院（国际教育学院） |\n  | ------------------ | ------------------ | ------------ | -------------- | -------------------- | ------------------ | -------------- | -------- | ---------- | -------- | -------------- | ------------ | ---------------------------- |\n  | energy             | hhxy               | dqxy         | zdhxy          | jsjxy                | dxxy               | jgxy           | slxy     | wgyxy      | tyb      | skb            | rwysxy       | jjxy                         |\n  | 892                | 5559               | 2462         | 2002           | xygg                 | tzgg               | 3633           | 2063     | tzgg       | 2891     | 1736           | 3089         | 2582                         |\n\n  党群部门：\n\n  | 党委办公室 | 组织部（老干部处、党校） | 党建服务中心 / 党建督查室 | 宣传部（文明办、融媒体中心） | 统战部 | 机关党委 | 纪委（监察专员办公室） | 巡查办    | 武装部 | 学生工作部 | 团委 | 工会（妇工委） | 教师工作部 | 离退休党委 | 研究生工作部 |\n  | ---------- | ------------------------ | ------------------------- | ---------------------------- | ------ | -------- | ---------------------- | --------- | ------ | ---------- | ---- | -------------- | ---------- | ---------- | ------------ |\n  | dangban    | zzb                      | djfwzxdcs                 | xcb                          | tzb    | jgdw     | jijian                 | xunchaban | bwc    | xsc        | tw   | gonghui        | rsc        | tgb        | yjsc         |\n  | 4014       | 1534                     | tzgg                      | 2925                         | 3858   | 3205     | 59                     | 5044      | tzgg   | 3482       | 2092 | 1806           | 1695       | notice     | 1161         |\n\n  行政部门：\n\n  | 校长办公室（档案馆） | 对外联络处 | 发展规划处 | 审计处 | 保卫处 | 学生处 | 人事处 | 退管办 | 国际交流与合作处（港澳台办公室） | 科研处 / 融合办 | 教务处 | 研究生院 | 后勤管理处（后勤服务中心） | 实验室与资产管理处 | 基建处 | 临港新校区建设综合办公室 | 图书馆  | 现代教育技术中心 / 信息办 | 创新创业工程训练中心 | 资产经营公司 / 产业办 | 能源电力科创中心 | 技术转移中心 |\n  | -------------------- | ---------- | ---------- | ------ | ------ | ------ | ------ | ------ | -------------------------------- | --------------- | ------ | -------- | -------------------------- | ------------------ | ------ | ------------------------ | ------- | ------------------------- | -------------------- | --------------------- | ---------------- | ------------ |\n  | office               | dwllc      | fzghc      | sjc    | bwc    | xsc    | rsc    | tgb    | fao                              | kyc             | jwc    | yjsc     | hqglc                      | sysyzcglc          | jjc    | lgxq                     | library | metc                      | ieetc                | cyb                   | kczx             | jszyzx       |\n  | 389                  | 2649       | 291        | 199    | tzgg   | 3482   | 1695   | notice | tzgg                             | 834             | 227    | 1161     | 1616                       | 312                | 327    | 377                      | 4866    | tzgg                      | cxcy                 | 367                   | 3946             | 4247         |\n\n  其它：\n\n  | 新闻网 | Shanghai University of Electric Power | 信息公开网 | 本科招生网 | 本科就业信息网 | 妇工委 | 文明办  | 学习路上 | 上海热交换系统节能工程技术研究中心 | 上海新能源人才技术教育交流中心 | 上海绿色能源并网技术研究中心 | 能源化学实验教学中心 | 教师教学发展中心 | 电力装备设计与制造虚拟仿真中心 | 上海市电力材料防护与新材料重点实验室 | 能源电力智库 | 国家新能源电力系统实验教学示范中心 | 智能发电实验教学中心 |\n  | ------ | ------------------------------------- | ---------- | ---------- | -------------- | ------ | ------- | -------- | ---------------------------------- | ------------------------------ | ---------------------------- | -------------------- | ---------------- | ------------------------------ | ------------------------------------ | ------------ | ---------------------------------- | -------------------- |\n  | news   | english                               | xxgk       | zs         | career         | fgw    | wenming | ztjy     | energy-saving                      | gec                            | green-energy                 | hhsyzx               | jsjxfzzx         | jxfz                           | mpep                                 | nydlzk       | rpstec                             | spgc                 |\n  | notice | events                                | zxgkxx     | zxxx       | tzgg           | 1411   | 2202    | 5575     | tzgg                               | 1959                           | 118                          | 3709                 | 3909             | 3330                           | 1134                                 | tzgg         | 1366                               | 4449                 |\n\n  参数与来源页面对应规则为：`https://${type}.shiep.edu.cn/${id}/list.htm`","location":"index.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

类型名称与默认 ID：

  学院一览：

  | 能源与机械工程学院 | 环境与化学工程学院 | 电气工程学院 | 自动化工程学院 | 计算机科学与技术学院 | 电子与信息工程学院 | 经济与管理学院 | 数理学院 | 外国语学院 | 体育学院 | 马克思主义学院 | 人文艺术学院 | 继续教育学院（国际教育学院） |
  | ------------------ | ------------------ | ------------ | -------------- | -------------------- | ------------------ | -------------- | -------- | ---------- | -------- | -------------- | ------------ | ---------------------------- |
  | energy             | hhxy               | dqxy         | zdhxy          | jsjxy                | dxxy               | jgxy           | slxy     | wgyxy      | tyb      | skb            | rwysxy       | jjxy                         |
  | 892                | 5559               | 2462         | 2002           | xygg                 | tzgg               | 3633           | 2063     | tzgg       | 2891     | 1736           | 3089         | 2582                         |

  党群部门：

  | 党委办公室 | 组织部（老干部处、党校） | 党建服务中心 / 党建督查室 | 宣传部（文明办、融媒体中心） | 统战部 | 机关党委 | 纪委（监察专员办公室） | 巡查办    | 武装部 | 学生工作部 | 团委 | 工会（妇工委） | 教师工作部 | 离退休党委 | 研究生工作部 |
  | ---------- | ------------------------ | ------------------------- | ---------------------------- | ------ | -------- | ---------------------- | --------- | ------ | ---------- | ---- | -------------- | ---------- | ---------- | ------------ |
  | dangban    | zzb                      | djfwzxdcs                 | xcb                          | tzb    | jgdw     | jijian                 | xunchaban | bwc    | xsc        | tw   | gonghui        | rsc        | tgb        | yjsc         |
  | 4014       | 1534                     | tzgg                      | 2925                         | 3858   | 3205     | 59                     | 5044      | tzgg   | 3482       | 2092 | 1806           | 1695       | notice     | 1161         |

  行政部门：

  | 校长办公室（档案馆） | 对外联络处 | 发展规划处 | 审计处 | 保卫处 | 学生处 | 人事处 | 退管办 | 国际交流与合作处（港澳台办公室） | 科研处 / 融合办 | 教务处 | 研究生院 | 后勤管理处（后勤服务中心） | 实验室与资产管理处 | 基建处 | 临港新校区建设综合办公室 | 图书馆  | 现代教育技术中心 / 信息办 | 创新创业工程训练中心 | 资产经营公司 / 产业办 | 能源电力科创中心 | 技术转移中心 |
  | -------------------- | ---------- | ---------- | ------ | ------ | ------ | ------ | ------ | -------------------------------- | --------------- | ------ | -------- | -------------------------- | ------------------ | ------ | ------------------------ | ------- | ------------------------- | -------------------- | --------------------- | ---------------- | ------------ |
  | office               | dwllc      | fzghc      | sjc    | bwc    | xsc    | rsc    | tgb    | fao                              | kyc             | jwc    | yjsc     | hqglc                      | sysyzcglc          | jjc    | lgxq                     | library | metc                      | ieetc                | cyb                   | kczx             | jszyzx       |
  | 389                  | 2649       | 291        | 199    | tzgg   | 3482   | 1695   | notice | tzgg                             | 834             | 227    | 1161     | 1616                       | 312                | 327    | 377                      | 4866    | tzgg                      | cxcy                 | 367                   | 3946             | 4247         |

  其它：

  | 新闻网 | Shanghai University of Electric Power | 信息公开网 | 本科招生网 | 本科就业信息网 | 妇工委 | 文明办  | 学习路上 | 上海热交换系统节能工程技术研究中心 | 上海新能源人才技术教育交流中心 | 上海绿色能源并网技术研究中心 | 能源化学实验教学中心 | 教师教学发展中心 | 电力装备设计与制造虚拟仿真中心 | 上海市电力材料防护与新材料重点实验室 | 能源电力智库 | 国家新能源电力系统实验教学示范中心 | 智能发电实验教学中心 |
  | ------ | ------------------------------------- | ---------- | ---------- | -------------- | ------ | ------- | -------- | ---------------------------------- | ------------------------------ | ---------------------------- | -------------------- | ---------------- | ------------------------------ | ------------------------------------ | ------------ | ---------------------------------- | -------------------- |
  | news   | english                               | xxgk       | zs         | career         | fgw    | wenming | ztjy     | energy-saving                      | gec                            | green-energy                 | hhsyzx               | jsjxfzzx         | jxfz                           | mpep                                 | nydlzk       | rpstec                             | spgc                 |
  | notice | events                                | zxgkxx     | zxxx       | tzgg           | 1411   | 2202    | 5575     | tzgg                               | 1959                           | 118                          | 3709                 | 3909             | 3330                           | 1134                                 | tzgg         | 1366                               | 4449                 |

  参数与来源页面对应规则为：`https://${type}.shiep.edu.cn/${id}/list.htm`

## 上海外国语大学 <Site url="news.shisu.edu.cn"/>

### 上外新闻 <Site url="news.shisu.edu.cn" size="sm" />

<Route namespace="shisu" :data='{"path":"/news/:category","categories":["university"],"example":"/shisu/news/notice","parameters":{"category":"新闻的分类可根据自己的需要选择，首页为全部新闻"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["news.shisu.edu.cn/:category/index.html"]}],"name":"上外新闻","maintainers":["Duuckjing"],"description":"| 首页 | 特稿    | 学术      | 教学       | 国际          | 校园   | 人物   | 视讯       | 公告   |\n  | ---- | ------- | --------- | ---------- | ------------- | ------ | ------ | ---------- | ------ |\n  | news | gazette | research- | academics- | international | campus | people | multimedia | notice |","location":"news.ts"}' :test='{"code":0}' />

| 首页 | 特稿    | 学术      | 教学       | 国际          | 校园   | 人物   | 视讯       | 公告   |
  | ---- | ------- | --------- | ---------- | ------------- | ------ | ------ | ---------- | ------ |
  | news | gazette | research- | academics- | international | campus | people | multimedia | notice |

## 上海海事大学 <Site url="jwc.shmtu.edu.cn"/>

### 官网信息 <Site url="jwc.shmtu.edu.cn" size="sm" />

<Route namespace="shmtu" :data='{"path":"/www/:type","categories":["university"],"example":"/shmtu/www/events","parameters":{"type":"类型名称"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.shmtu.edu.cn/:type"]}],"name":"官网信息","maintainers":["imbytecat","simonsmh"],"description":"| 学术讲座 | 通知公告 |\n| -------- | -------- |\n| events   | notes    |","location":"www.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 学术讲座 | 通知公告 |
| -------- | -------- |
| events   | notes    |

### 教务信息 <Site url="jwc.shmtu.edu.cn" size="sm" />

<Route namespace="shmtu" :data='{"path":"/jwc/:type","categories":["university"],"example":"/shmtu/jwc/jwgg","parameters":{"type":"类型名称"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["jwc.shmtu.edu.cn/:type"]}],"name":"教务信息","maintainers":["imbytecat","simonsmh"],"description":"| 教务公告 | 教务新闻 |\n| -------- | -------- |\n| jwgg     | jwxw     |","location":"jwc.ts"}' :test='{"code":0}' />

| 教务公告 | 教务新闻 |
| -------- | -------- |
| jwgg     | jwxw     |

### 数字平台 <Site url="jwc.shmtu.edu.cn" size="sm" />

<Route namespace="shmtu" :data='{"path":"/portal/:type","categories":["university"],"example":"/shmtu/portal/bmtzgg","parameters":{"type":"类型名称"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["portal.shmtu.edu.cn/:type"]}],"name":"数字平台","maintainers":["imbytecat"],"description":"| 部门通知公告 | 学术与大型活动公告 | 部门动态 |\n| ------------ | ------------------ | -------- |\n| bmtzgg       | xsydxhdgg          | bmdt     |","location":"portal.ts"}' :test='{"code":0}' />

| 部门通知公告 | 学术与大型活动公告 | 部门动态 |
| ------------ | ------------------ | -------- |
| bmtzgg       | xsydxhdgg          | bmdt     |

## 上海大学 <Site url="jwb.shu.edu.cn"/>

### Unknown <Site url="jwb.shu.edu.cn" size="sm" />

<Route namespace="shu" :data='{"path":["/jwc/:type?","/jwb/:type?"],"radar":[{"source":["www.shu.edu.cn/:type"],"target":"/:type"}],"name":"Unknown","maintainers":[],"description":"| 通知通告 | 新闻 | 政策文件 |\n  | -------- | ---- | -------- |\n  | notice   | news | policy   |","location":"jwb.ts"}' :test='undefined' />

| 通知通告 | 新闻 | 政策文件 |
  | -------- | ---- | -------- |
  | notice   | news | policy   |

### Unknown <Site url="jwb.shu.edu.cn" size="sm" />

<Route namespace="shu" :data='{"path":["/jwc/:type?","/jwb/:type?"],"radar":[{"source":["www.shu.edu.cn/:type"],"target":"/:type"}],"name":"Unknown","maintainers":[],"description":"| 通知通告 | 新闻 | 政策文件 |\n  | -------- | ---- | -------- |\n  | notice   | news | policy   |","location":"jwb.ts"}' :test='undefined' />

| 通知通告 | 新闻 | 政策文件 |
  | -------- | ---- | -------- |
  | notice   | news | policy   |

### 官网信息 <Site url="jwb.shu.edu.cn" size="sm" />

<Route namespace="shu" :data='{"path":"/:type?","categories":["university"],"example":"/shu/news","parameters":{"type":"消息类型,默认为`news`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.shu.edu.cn/:type"],"target":"/:type"}],"name":"官网信息","maintainers":["lonelyion"],"description":"| 综合新闻 | 科研动态 | 通知公告 | 重要新闻  |\n  | -------- | -------- | -------- | --------- |\n  | news     | research | notice   | important |","location":"index.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 综合新闻 | 科研动态 | 通知公告 | 重要新闻  |
  | -------- | -------- | -------- | --------- |
  | news     | research | notice   | important |

## 上海交通大学 <Site url="bjwb.seiee.sjtu.edu.cn"/>

### 教务处通知公告 <Site url="bjwb.seiee.sjtu.edu.cn" size="sm" />

<Route namespace="sjtu" :data='{"path":"/jwc/:type?","categories":["university"],"example":"/sjtu/jwc","parameters":{"type":"默认为 notice"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"教务处通知公告","maintainers":["SeanChao"],"description":"| 新闻中心 | 通知通告 | 教学运行  | 注册学务 | 研究办 | 教改办 | 综合办 | 语言文字 | 工会与支部 | 通识教育 |\n  | -------- | -------- | --------- | -------- | ------ | ------ | ------ | -------- | ---------- | -------- |\n  | news     | notice   | operation | affairs  | yjb    | jgb    | zhb    | language | party      | ge       |","location":"jwc.ts"}' :test='{"code":0}' />

| 新闻中心 | 通知通告 | 教学运行  | 注册学务 | 研究办 | 教改办 | 综合办 | 语言文字 | 工会与支部 | 通识教育 |
  | -------- | -------- | --------- | -------- | ------ | ------ | ------ | -------- | ---------- | -------- |
  | news     | notice   | operation | affairs  | yjb    | jgb    | zhb    | language | party      | ge       |

### 同去网最新活动 <Site url="bjwb.seiee.sjtu.edu.cn" size="sm" />

<Route namespace="sjtu" :data='{"path":"/tongqu/:type?","categories":["university"],"example":"/sjtu/tongqu/lecture","parameters":{"type":"类型，默认为全部"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"同去网最新活动","maintainers":["SeanChao"],"description":"| 全部 | 最新   | 招新        | 讲座    | 户外      | 招聘 | 游学       | 比赛         | 公益           | 主题党日 | 学生事务       | 广告 | 其他   |\n  | ---- | ------ | ----------- | ------- | --------- | ---- | ---------- | ------------ | -------------- | -------- | -------------- | ---- | ------ |\n  | all  | newest | recruitment | lecture | outdoords | jobs | studyTours | competitions | publicWarefare | partyDay | studentAffairs | ads  | others |","location":"tongqu/activity.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 全部 | 最新   | 招新        | 讲座    | 户外      | 招聘 | 游学       | 比赛         | 公益           | 主题党日 | 学生事务       | 广告 | 其他   |
  | ---- | ------ | ----------- | ------- | --------- | ---- | ---------- | ------------ | -------------- | -------- | -------------- | ---- | ------ |
  | all  | newest | recruitment | lecture | outdoords | jobs | studyTours | competitions | publicWarefare | partyDay | studentAffairs | ads  | others |

### 研究生通知公告 <Site url="bjwb.seiee.sjtu.edu.cn" size="sm" />

<Route namespace="sjtu" :data='{"path":"/gs/:type/:num?","categories":["university"],"example":"/sjtu/gs/enroll/59","parameters":{"type":"类别","num":"细分类别, 仅对`type`为`enroll`或`exchange`有效"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gs.sjtu.edu.cn/announcement/:type"],"target":"/gs/:type"}],"name":"研究生通知公告","maintainers":["dzx-dzx"],"description":"| 工作信息 | 招生信息 | 培养信息 | 学位学科 | 国际交流 | 创新工程 |\n  | -------- | -------- | -------- | -------- | -------- | -------- |\n  | work     | enroll   | train    | degree   | exchange | xsjy     |\n\n  当`type`为`enroll`, `num`可选字段:\n\n  | 58       | 59       | 60         | 61       | 62       |\n  | -------- | -------- | ---------- | -------- | -------- |\n  | 博士招生 | 硕士招生 | 港澳台招生 | 考点信息 | 院系动态 |\n\n  当`type`为`exchange`, `num`可选字段:\n\n  | 67             | 68             | 69             | 70             | 71             |\n  | -------------- | -------------- | -------------- | -------------- | -------------- |\n  | 国家公派研究生 | 国际化培养资助 | 校际交换与联培 | 交流与合作项目 | 项目招募与宣讲 |","location":"gs.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 工作信息 | 招生信息 | 培养信息 | 学位学科 | 国际交流 | 创新工程 |
  | -------- | -------- | -------- | -------- | -------- | -------- |
  | work     | enroll   | train    | degree   | exchange | xsjy     |

  当`type`为`enroll`, `num`可选字段:

  | 58       | 59       | 60         | 61       | 62       |
  | -------- | -------- | ---------- | -------- | -------- |
  | 博士招生 | 硕士招生 | 港澳台招生 | 考点信息 | 院系动态 |

  当`type`为`exchange`, `num`可选字段:

  | 67             | 68             | 69             | 70             | 71             |
  | -------------- | -------------- | -------------- | -------------- | -------------- |
  | 国家公派研究生 | 国际化培养资助 | 校际交换与联培 | 交流与合作项目 | 项目招募与宣讲 |

### 研究生招生网招考信息 <Site url="bjwb.seiee.sjtu.edu.cn" size="sm" />

<Route namespace="sjtu" :data='{"path":"/yzb/zkxx/:type","categories":["university"],"example":"/sjtu/yzb/zkxx/sszs","parameters":{"type":"无默认选项"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"研究生招生网招考信息","maintainers":["stdrc"],"description":"| 博士招生 | 硕士招生 | 港澳台招生 | 考点信息 | 院系动态 |\n  | -------- | -------- | ---------- | -------- | -------- |\n  | bszs     | sszs     | gatzs      | kdxx     | yxdt     |","location":"yzb/zkxx.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 博士招生 | 硕士招生 | 港澳台招生 | 考点信息 | 院系动态 |
  | -------- | -------- | ---------- | -------- | -------- |
  | bszs     | sszs     | gatzs      | kdxx     | yxdt     |

## 深圳大学 <Site url="yz.szu.edu.cn"/>

### 研究生招生网 <Site url="yz.szu.edu.cn" size="sm" />

<Route namespace="szu" :data='{"path":"/yz/:type?","categories":["university"],"example":"/szu/yz/1","parameters":{"type":"默认为 `1`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"研究生招生网","maintainers":["NagaruZ"],"description":"| 研究生 | 博士生 |\n  | ------ | ------ |\n  | 1      | 2      |","location":"yz/index.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 研究生 | 博士生 |
  | ------ | ------ |
  | 1      | 2      |

## 四川职业技术学院 <Site url="scvtc.edu.cn"/>

### 学院公告 <Site url="scvtc.edu.cn/ggfw1/xygg.htm" size="sm" />

<Route namespace="scvtc" :data='{"path":"/xygg","categories":["university"],"example":"/scvtc/xygg","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["scvtc.edu.cn/ggfw1/xygg.htm","scvtc.edu.cn/"]}],"name":"学院公告","maintainers":["nczitzk"],"url":"scvtc.edu.cn/ggfw1/xygg.htm","location":"xygg.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## 四川农业大学 <Site url="dky.sicau.edu.cn"/>

### 动物科技学院 <Site url="dky.sicau.edu.cn/" size="sm" />

<Route namespace="sicau" :data='{"path":"/dky/:category?","categories":["university"],"example":"/sicau/dky/tzgg","parameters":{"category":"分类，见下表，默认为通知公告"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["dky.sicau.edu.cn/"]}],"name":"动物科技学院","maintainers":["nczitzk"],"url":"dky.sicau.edu.cn/","description":"| 通知公告 | 学院动态 | 教学管理 | 动科大讲堂 | 就业信息 |\n  | -------- | -------- | -------- | ---------- | -------- |\n  | tzgg     | xydt     | jxgl     | dkdjt      | zpxx     |","location":"dky.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 通知公告 | 学院动态 | 教学管理 | 动科大讲堂 | 就业信息 |
  | -------- | -------- | -------- | ---------- | -------- |
  | tzgg     | xydt     | jxgl     | dkdjt      | zpxx     |

### 研究生院 <Site url="yan.sicau.edu.cn/" size="sm" />

<Route namespace="sicau" :data='{"path":"/yan/:category?","categories":["university"],"example":"/sicau/yan/xwgg","parameters":{"category":"分类，见下表，默认为新闻公告"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yan.sicau.edu.cn/"]}],"name":"研究生院","maintainers":["nczitzk"],"url":"yan.sicau.edu.cn/","description":"| 新闻公告 | 学术报告 |\n  | -------- | -------- |\n  | xwgg     | xsbg     |","location":"yan.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 新闻公告 | 学术报告 |
  | -------- | -------- |
  | xwgg     | xsbg     |

### 招生就业 <Site url="dky.sicau.edu.cn/" size="sm" />

<Route namespace="sicau" :data='{"path":"/zsjy/:category?","categories":["university"],"example":"/sicau/zsjy/bkszs","parameters":{"category":"分类，见下表，默认为本科生招生"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["dky.sicau.edu.cn/"]}],"name":"招生就业","maintainers":["nczitzk"],"url":"dky.sicau.edu.cn/","description":"| 本科生招生 | 研究生招生 | 毕业生选录指南 |\n  | ---------- | ---------- | -------------- |\n  | bkszs      | yjszs      | bysxlzn        |","location":"zsjy.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 本科生招生 | 研究生招生 | 毕业生选录指南 |
  | ---------- | ---------- | -------------- |
  | bkszs      | yjszs      | bysxlzn        |

## 四川工商学院 <Site url="stbu.edu.cn"/>

### 计算机学院 - 通知公告 <Site url="jsjxy.stbu.edu.cn/news" size="sm" />

<Route namespace="stbu" :data='{"path":"/jsjxy","categories":["university"],"example":"/stbu/jsjxy","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["jsjxy.stbu.edu.cn/news","jsjxy.stbu.edu.cn","stbu.edu.cn"]}],"name":"计算机学院 - 通知公告","maintainers":["HyperCherry"],"url":"jsjxy.stbu.edu.cn/news","description":":::warning\n计算机学院通知公告疑似禁止了非大陆 IP 访问，使用路由需要自行 [部署](https://docs.rsshub.app/deploy/)。\n:::","location":"jsjxy.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

:::warning
计算机学院通知公告疑似禁止了非大陆 IP 访问，使用路由需要自行 [部署](https://docs.rsshub.app/deploy/)。
:::

### 学院新闻 <Site url="stbu.edu.cn/html/news/xueyuan" size="sm" />

<Route namespace="stbu" :data='{"path":"/xyxw","categories":["university"],"example":"/stbu/xyxw","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["stbu.edu.cn/html/news/xueyuan","stbu.edu.cn"]}],"name":"学院新闻","maintainers":["HyperCherry"],"url":"stbu.edu.cn/html/news/xueyuan","location":"xyxw.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

## 苏州科技大学 <Site url="jwch.usts.edu.cn"/>

### 教务处 <Site url="jwch.usts.edu.cn" size="sm" />

<Route namespace="usts" :data='{"path":"/jwch/:type?","categories":["university"],"example":"/usts/jwch","parameters":{"type":"类型，默认为教务动态"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"教务处","maintainers":[],"description":"| 类型 | 教务动态 | 公告在线 | 选课通知 |\n  | ---- | -------- | -------- | -------- |\n  |      | jwdt     | ggzx     | xktz     |","location":"jwch.ts"}' :test='{"code":1,"message":"expected NaN to be greater than -432000000"}' />

| 类型 | 教务动态 | 公告在线 | 选课通知 |
  | ---- | -------- | -------- | -------- |
  |      | jwdt     | ggzx     | xktz     |

## 同济大学 <Site url="bksy.tongji.edu.cn"/>

### 本科生院通知公告 <Site url="bksy.tongji.edu.cn/" size="sm" />

<Route namespace="tongji" :data='{"path":"/bks","categories":["university"],"example":"/tongji/bks","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["bksy.tongji.edu.cn/"]}],"name":"本科生院通知公告","maintainers":["shiquda"],"url":"bksy.tongji.edu.cn/","location":"bks.ts"}' :test='{"code":0}' />

### 软件学院通知 <Site url="bksy.tongji.edu.cn" size="sm" />

<Route namespace="tongji" :data='{"path":"/sse/:type?","categories":["university"],"example":"/tongji/sse/xytz","parameters":{"type":"通知类型，默认为 `xytz`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"软件学院通知","maintainers":["sgqy"],"description":"| 本科生通知 | 研究生通知 | 教工通知 | 全体通知 | 学院通知 | 学院新闻 | 学院活动 |\n  | ---------- | ---------- | -------- | -------- | -------- | -------- | -------- |\n  | bkstz      | yjstz      | jgtz     | qttz     | xytz     | xyxw     | xyhd     |\n\n  注意: `qttz` 与 `xytz` 在原网站等价.","location":"sse/notice.ts"}' :test='{"code":0}' />

| 本科生通知 | 研究生通知 | 教工通知 | 全体通知 | 学院通知 | 学院新闻 | 学院活动 |
  | ---------- | ---------- | -------- | -------- | -------- | -------- | -------- |
  | bkstz      | yjstz      | jgtz     | qttz     | xytz     | xyxw     | xyhd     |

  注意: `qttz` 与 `xytz` 在原网站等价.

### 研究生院通知公告 <Site url="yz.tongji.edu.cn/zsxw/ggtz.htm" size="sm" />

<Route namespace="tongji" :data='{"path":"/yjs","categories":["university"],"example":"/tongji/yjs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yz.tongji.edu.cn/zsxw/ggtz.htm","yz.tongji.edu.cn/"]}],"name":"研究生院通知公告","maintainers":["shengmaosu"],"url":"yz.tongji.edu.cn/zsxw/ggtz.htm","location":"yjs.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

## 潍坊学院 <Site url="jwc.wfu.edu.cn"/>

### 教务处通知 <Site url="jwc.wfu.edu.cn/" size="sm" />

<Route namespace="wfu" :data='{"path":"/jwc","categories":["university"],"example":"/wfu/jwc","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["jwc.wfu.edu.cn/"]}],"name":"教务处通知","maintainers":["cccht"],"url":"jwc.wfu.edu.cn/","location":"jwc.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 新闻 <Site url="news.wfu.edu.cn/" size="sm" />

<Route namespace="wfu" :data='{"path":"/news/:type?","categories":["university"],"example":"/wfu/news/wyyw","parameters":{"type":"分类，默认为 `wyyw`，具体参数见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["news.wfu.edu.cn/"],"target":"/news"}],"name":"新闻","maintainers":["cccht"],"url":"news.wfu.edu.cn/","description":"| **内容** | **参数** |\n  | :------: | :------: |\n  | 潍院要闻 |   wyyw   |\n  | 综合新闻 |   zhxw   |\n  | 学术纵横 |   xszh   |","location":"news.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| **内容** | **参数** |
  | :------: | :------: |
  | 潍院要闻 |   wyyw   |
  | 综合新闻 |   zhxw   |
  | 学术纵横 |   xszh   |

## 武汉大学 <Site url="cs.whu.edu.cn"/>

### Unknown <Site url="cs.whu.edu.cn" size="sm" />

<Route namespace="whu" :data='{"path":"/hyxt/:category{.+}?","name":"Unknown","maintainers":[],"location":"hyxt.ts"}' :test='undefined' />

### Unknown <Site url="cs.whu.edu.cn" size="sm" />

<Route namespace="whu" :data='{"path":"/news/:category{.+}?","name":"Unknown","maintainers":[],"location":"news.ts"}' :test='undefined' />

### 计算机学院公告 <Site url="cs.whu.edu.cn" size="sm" />

<Route namespace="whu" :data='{"path":"/cs/:type","categories":["university"],"example":"/whu/cs/2","parameters":{"type":"公告类型，详见表格"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"计算机学院公告","maintainers":["ttyfly"],"description":"| 公告类型 | 学院新闻 | 学术交流 | 通知公告 | 科研进展 |\n  | -------- | -------- | -------- | -------- | -------- |\n  | 参数     | 0        | 1        | 2        | 3        |","location":"cs.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 公告类型 | 学院新闻 | 学术交流 | 通知公告 | 科研进展 |
  | -------- | -------- | -------- | -------- | -------- |
  | 参数     | 0        | 1        | 2        | 3        |

### 研究生院 <Site url="gs.whu.edu.cn/index.htm" size="sm" />

<Route namespace="whu" :data='{"path":"/gs/:type?","categories":["university"],"example":"/whu/gs/0","parameters":{"type":"分类，默认为 `0`，具体参数见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gs.whu.edu.cn/index.htm","gs.whu.edu.cn/"],"target":"/gs"}],"name":"研究生院","maintainers":["Delreyaa"],"url":"gs.whu.edu.cn/index.htm","description":"| 公告类型 | 新闻动态 | 学术探索 | 院系风采 | 通知 (全部) | 通知 (招生) | 通知 (培养) | 通知 (学位) | 通知 (质量与专业学位) | 通知 (综合) |\n  | -------- | -------- | -------- | -------- | ----------- | ----------- | ----------- | ----------- | --------------------- | ----------- |\n  | 参数     | 0        | 1        | 2        | 3           | 4           | 5           | 6           | 7                     | 8           |","location":"gs/index.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 公告类型 | 新闻动态 | 学术探索 | 院系风采 | 通知 (全部) | 通知 (招生) | 通知 (培养) | 通知 (学位) | 通知 (质量与专业学位) | 通知 (综合) |
  | -------- | -------- | -------- | -------- | ----------- | ----------- | ----------- | ----------- | --------------------- | ----------- |
  | 参数     | 0        | 1        | 2        | 3           | 4           | 5           | 6           | 7                     | 8           |

## 武昌首义学院 <Site url="www.wsyu.edu.cn"/>

### 新闻中心 <Site url="www.wsyu.edu.cn" size="sm" />

<Route namespace="wsyu" :data='{"path":"/news/:type?","categories":["university"],"example":"/wsyu/news/xxyw","parameters":{"type":"分类，默认为 `xxyw`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"新闻中心","maintainers":["Derekmini"],"description":"| 学校要闻 | 综合新闻 | 媒体聚焦 |\n  | -------- | -------- | -------- |\n  | xxyw     | zhxw     | mtjj     |","location":"news.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 学校要闻 | 综合新闻 | 媒体聚焦 |
  | -------- | -------- | -------- |
  | xxyw     | zhxw     | mtjj     |

## 武汉纺织大学 <Site url="wtu.91wllm.com"/>

### 就业信息 <Site url="wtu.91wllm.com" size="sm" />

<Route namespace="wtu" :data='{"path":"/job/:type","categories":["university"],"example":"/wtu/job/xxtz","parameters":{"type":"信息类型"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["wtu.91wllm.com/news/index/tag/:type"]}],"name":"就业信息","maintainers":["ticks-tan"],"description":"| 信息类型 | 消息通知 | 通知公告 | 新闻快递 |\n  | -------- | -------- | -------- | -------- |\n  | 参数     | xxtz     | tzgg     | xwkd     |","location":"job.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 信息类型 | 消息通知 | 通知公告 | 新闻快递 |
  | -------- | -------- | -------- | -------- |
  | 参数     | xxtz     | tzgg     | xwkd     |

### 信息门户公告 <Site url="wtu.91wllm.com" size="sm" />

<Route namespace="wtu" :data='{"path":"/:type","categories":["university"],"example":"/wtu/2","parameters":{"type":"公告类型，详见表格"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"信息门户公告","maintainers":["loyio"],"description":"| 公告类型 | 通知公告 | 教务信息 | 科研动态 |\n  | -------- | -------- | -------- | -------- |\n  | 参数     | 1        | 2        | 3        |","location":"index.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 公告类型 | 通知公告 | 教务信息 | 科研动态 |
  | -------- | -------- | -------- | -------- |
  | 参数     | 1        | 2        | 3        |

## 西北农林科技大学 <Site url="nwafu.edu.cn"/>

### 校园要闻 <Site url="nwafu.edu.cn" size="sm" />

<Route namespace="nwafu" :data='{"path":"/:type?","categories":["university"],"example":"/nwafu/lib","parameters":{"type":"默认为 `jiaowu`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"校园要闻","maintainers":["karinido"],"description":"通知类别\n\n  | 图书馆 | 共青团团委 | 信工学院 | 后勤管理处 | 计划财务处 | 教务处 | 新闻网 | 信息化管理处 | 研究生院 | 农业科学院 | 机械与电子工程学院 | 学术活动 | 生命科学学院 |\n  | ------ | ---------- | -------- | ---------- | ---------- | ------ | ------ | ------------ | -------- | ---------- | ------------------ | -------- | ------------ |\n  | lib    | youth      | cie      | gs         | jcc        | jiaowu | news   | nic          | yjshy    | nxy        | cmee               | xshd     | sm           |","location":"all.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

通知类别

  | 图书馆 | 共青团团委 | 信工学院 | 后勤管理处 | 计划财务处 | 教务处 | 新闻网 | 信息化管理处 | 研究生院 | 农业科学院 | 机械与电子工程学院 | 学术活动 | 生命科学学院 |
  | ------ | ---------- | -------- | ---------- | ---------- | ------ | ------ | ------------ | -------- | ---------- | ------------------ | -------- | ------------ |
  | lib    | youth      | cie      | gs         | jcc        | jiaowu | news   | nic          | yjshy    | nxy        | cmee               | xshd     | sm           |

## 西南交通大学 <Site url="ctt.swjtu.edu.cn"/>

### 交通运输与物流学院 <Site url="ctt.swjtu.edu.cn" size="sm" />

<Route namespace="swjtu" :data='{"path":"/jtys/yjs","categories":["university"],"example":"/swjtu/jtys/yjs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"交通运输与物流学院","maintainers":["qizidog"],"description":"#### 研究生通知 {#xi-nan-jiao-tong-da-xue-jiao-tong-yun-shu-yu-wu-liu-xue-yuan-yan-jiu-sheng-tong-zhi}","location":"jtys/yjs.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

#### 研究生通知 {#xi-nan-jiao-tong-da-xue-jiao-tong-yun-shu-yu-wu-liu-xue-yuan-yan-jiu-sheng-tong-zhi}

### 教务网 <Site url="jwc.swjtu.edu.cn/vatuu/WebAction" size="sm" />

<Route namespace="swjtu" :data='{"path":"/jwc","categories":["university"],"example":"/swjtu/jwc","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["jwc.swjtu.edu.cn/vatuu/WebAction","jwc.swjtu.edu.cn/"]}],"name":"教务网","maintainers":["mobyw"],"url":"jwc.swjtu.edu.cn/vatuu/WebAction","location":"jwc.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 就业招聘信息 <Site url="jiuye.swjtu.edu.cn/career" size="sm" />

<Route namespace="swjtu" :data='{"path":"/jyzpxx","categories":["university"],"example":"/swjtu/jyzpxx","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["jiuye.swjtu.edu.cn/career","jiuye.swjtu.edu.cn/"]}],"name":"就业招聘信息","maintainers":["qizidog"],"url":"jiuye.swjtu.edu.cn/career","location":"jyzpxx.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 扬华素质网 <Site url="xg.swjtu.edu.cn/web/Home/PushNewsList" size="sm" />

<Route namespace="swjtu" :data='{"path":"/xg/:code?","categories":["university"],"example":"/swjtu/xg/tzgg","parameters":{"code":"栏目(默认为tzgg)"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["xg.swjtu.edu.cn/web/Home/PushNewsList","xg.swjtu.edu.cn/web/Home/NewsList","xg.swjtu.edu.cn/web/Home/ColourfulCollegeNewsList","xg.swjtu.edu.cn/web/Publicity/List","xg.swjtu.edu.cn/"],"target":"/xg"}],"name":"扬华素质网","maintainers":["mobyw"],"url":"xg.swjtu.edu.cn/web/Home/PushNewsList","description":"栏目列表：\n\n  | 通知公告 | 扬华新闻 | 多彩学院 | 学工之家 |\n  | -------- | -------- | -------- | -------- |\n  | tzgg     | yhxw     | dcxy     | xgzj     |","location":"xg.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

栏目列表：

  | 通知公告 | 扬华新闻 | 多彩学院 | 学工之家 |
  | -------- | -------- | -------- | -------- |
  | tzgg     | yhxw     | dcxy     | xgzj     |

## 西南石油大学 <Site url="swpu.edu.cn"/>

### 办公网 <Site url="swpu.edu.cn/" size="sm" />

<Route namespace="swpu" :data='{"path":"/bgw/:code","categories":["university"],"example":"/swpu/bgw/zytzgg","parameters":{"code":"栏目代码"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["swpu.edu.cn/"],"target":""}],"name":"办公网","maintainers":["CYTMWIA"],"url":"swpu.edu.cn/","description":"| 栏目 | 重要通知公告 | 部门通知公告 | 本周活动 | 学术报告 |\n  | ---- | ------------ | ------------ | -------- | -------- |\n  | 代码 | zytzgg       | bmtzgg       | bzhd     | xsbg     |","location":"bgw.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 栏目 | 重要通知公告 | 部门通知公告 | 本周活动 | 学术报告 |
  | ---- | ------------ | ------------ | -------- | -------- |
  | 代码 | zytzgg       | bmtzgg       | bzhd     | xsbg     |

### 财经学院 <Site url="swpu.edu.cn/" size="sm" />

<Route namespace="swpu" :data='{"path":"/cjxy/:code","categories":["university"],"example":"/swpu/cjxy/xyxw","parameters":{"code":"栏目代码"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["swpu.edu.cn/"],"target":""}],"name":"财经学院","maintainers":["RiverTwilight"],"url":"swpu.edu.cn/","description":"| 栏目 | 学院新闻 | 学院通知 |\n  | ---- | -------- | -------- |\n  | 代码 | xyxw     | xytz     |","location":"cjxy.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 栏目 | 学院新闻 | 学院通知 |
  | ---- | -------- | -------- |
  | 代码 | xyxw     | xytz     |

### 电气信息学院 <Site url="swpu.edu.cn/" size="sm" />

<Route namespace="swpu" :data='{"path":"/dxy/:code","categories":["university"],"example":"/swpu/dxy/1156","parameters":{"code":"栏目代码"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["swpu.edu.cn/"],"target":""}],"name":"电气信息学院","maintainers":["CYTMWIA"],"url":"swpu.edu.cn/","description":"| 栏目 | 学院新闻 | 学院通知 |\n  | ---- | -------- | -------- |\n  | 代码 | 1122     | 1156     |","location":"dxy.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 栏目 | 学院新闻 | 学院通知 |
  | ---- | -------- | -------- |
  | 代码 | 1122     | 1156     |

### 计算机科学学院 <Site url="swpu.edu.cn/" size="sm" />

<Route namespace="swpu" :data='{"path":"/scs/:code","categories":["university"],"example":"/swpu/scs/tzgg","parameters":{"code":"栏目代码"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["swpu.edu.cn/"],"target":""}],"name":"计算机科学学院","maintainers":["CYTMWIA"],"url":"swpu.edu.cn/","description":"| 栏目 | 通知公告 | 新闻速递 |\n  | ---- | -------- | -------- |\n  | 代码 | tzgg     | xwsd     |","location":"scs.ts"}' :test='{"code":0}' />

| 栏目 | 通知公告 | 新闻速递 |
  | ---- | -------- | -------- |
  | 代码 | tzgg     | xwsd     |

### 教务处 <Site url="swpu.edu.cn/" size="sm" />

<Route namespace="swpu" :data='{"path":"/dean/:code","categories":["university"],"example":"/swpu/dean/tzgg","parameters":{"code":"栏目代码"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["swpu.edu.cn/"],"target":""}],"name":"教务处","maintainers":["CYTMWIA"],"url":"swpu.edu.cn/","description":"| 栏目 | 通知公告 | 新闻报道 | 视点声音 |\n  | ---- | -------- | -------- | -------- |\n  | 代码 | tzgg     | xwbd     | sdsy     |","location":"dean.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 栏目 | 通知公告 | 新闻报道 | 视点声音 |
  | ---- | -------- | -------- | -------- |
  | 代码 | tzgg     | xwbd     | sdsy     |

### 信息学院 <Site url="swpu.edu.cn/" size="sm" />

<Route namespace="swpu" :data='{"path":"/is/:code","categories":["university"],"example":"/swpu/is/xyxw","parameters":{"code":"栏目代码"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["swpu.edu.cn/"],"target":""}],"name":"信息学院","maintainers":["RiverTwilight"],"url":"swpu.edu.cn/","description":"| 栏目 | 学院新闻 | 通知公告 | 教育教学 | 学生工作 | 招生就业 |\n  | ---- | -------- | -------- | -------- | -------- | -------- |\n  | 代码 | xyxw     | tzgg     | jyjx     | xsgz     | zsjy     |","location":"is.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 栏目 | 学院新闻 | 通知公告 | 教育教学 | 学生工作 | 招生就业 |
  | ---- | -------- | -------- | -------- | -------- | -------- |
  | 代码 | xyxw     | tzgg     | jyjx     | xsgz     | zsjy     |

## 西安财经大学 <Site url="jiaowu.xaufe.edu.cn"/>

### 教务处 <Site url="jiaowu.xaufe.edu.cn" size="sm" />

<Route namespace="xaufe" :data='{"path":"/jiaowu/:category?","categories":["university"],"example":"/xaufe/jiaowu/tzgg","parameters":{"category":"分类，默认为通知公告"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"教务处","maintainers":["shaokeyibb"],"description":"| 通知公告 |\n  | :------: |\n  |   tzgg   |","location":"jiaowu.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 通知公告 |
  | :------: |
  |   tzgg   |

## 西安理工大学 <Site url="index.xaut.edu.cn"/>

### 教务处 <Site url="index.xaut.edu.cn" size="sm" />

<Route namespace="xaut" :data='{"path":"/jwc/:category?","categories":["university"],"example":"/xaut/jwc/tzgg","parameters":{"category":"通知类别，默认为通知公告"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"教务处","maintainers":["mocusez"],"description":":::warning\n  有些内容需使用校园网或 VPN 访问知行网获取\n  :::\n\n  | 通知公告 | 新闻动态 | 规章制度 | 竞赛结果公示 | 竞赛获奖通知 | 竞赛信息 | 公开公示 |\n  | :------: | :------: | :------: | :----------: | :----------: | :------: | :------: |\n  |   tzgg   |   xwdt   |   gzzd   |     jggs     |     jsjg     |   jsxx   |   gkgs   |","location":"jwc.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

:::warning
  有些内容需使用校园网或 VPN 访问知行网获取
  :::

  | 通知公告 | 新闻动态 | 规章制度 | 竞赛结果公示 | 竞赛获奖通知 | 竞赛信息 | 公开公示 |
  | :------: | :------: | :------: | :----------: | :----------: | :------: | :------: |
  |   tzgg   |   xwdt   |   gzzd   |     jggs     |     jsjg     |   jsxx   |   gkgs   |

### 人事处 <Site url="index.xaut.edu.cn" size="sm" />

<Route namespace="xaut" :data='{"path":"/rsc/:category?","categories":["university"],"example":"/xaut/rsc/tzgg","parameters":{"category":"通知类别，默认为通知公告"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"人事处","maintainers":["mocusez","light0926"],"description":":::warning\n  有些内容指向外部链接，目前只提供这些链接，不提供具体内容，去除 jwc 和 index 的修改\n  :::\n\n  | 通知公告 | 工作动态 |\n  | :------: | :------: |\n  |   tzgg   |   gzdt   |","location":"rsc.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

:::warning
  有些内容指向外部链接，目前只提供这些链接，不提供具体内容，去除 jwc 和 index 的修改
  :::

  | 通知公告 | 工作动态 |
  | :------: | :------: |
  |   tzgg   |   gzdt   |

### 学校主页 <Site url="index.xaut.edu.cn" size="sm" />

<Route namespace="xaut" :data='{"path":"/index/:category?","categories":["university"],"example":"/xaut/index/tzgg","parameters":{"category":"通知类别，默认为通知公告"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"学校主页","maintainers":["mocusez"],"description":"| 通知公告 | 校园要闻 | 媒体播报 | 学术活动 |\n  | :------: | :------: | :------: | :------: |\n  |   tzgg   |   xyyw   |   mtbd   |   xshd   |","location":"index.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 通知公告 | 校园要闻 | 媒体播报 | 学术活动 |
  | :------: | :------: | :------: | :------: |
  |   tzgg   |   xyyw   |   mtbd   |   xshd   |

## 西安电子科技大学 <Site url="jwc.xidian.edu.cn"/>

### 教务处 <Site url="jwc.xidian.edu.cn" size="sm" />

<Route namespace="xidian" :data='{"path":"/jwc/:category?","categories":["university"],"example":"/xidian/jwc/tzgg","parameters":{"category":"通知类别，默认为通知公告"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"教务处","maintainers":["ShadowySpirits"],"description":"| 教学信息 | 教学研究 | 实践教学 | 质量监控 | 通知公告 |\n  | :------: | :------: | :------: | :------: | :------: |\n  |   jxxx   |   jxyj   |   sjjx   |   zljk   |   tzgg   |","location":"jwc.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 教学信息 | 教学研究 | 实践教学 | 质量监控 | 通知公告 |
  | :------: | :------: | :------: | :------: | :------: |
  |   jxxx   |   jxyj   |   sjjx   |   zljk   |   tzgg   |

## 西安交通大学 <Site url="2yuan.xjtu.edu.cn"/>

### Unknown <Site url="2yuan.xjtu.edu.cn" size="sm" />

<Route namespace="xjtu" :data='{"path":"/international/:subpath{.+}","name":"Unknown","maintainers":[],"location":"international.ts"}' :test='undefined' />

### Unknown <Site url="2yuan.xjtu.edu.cn" size="sm" />

<Route namespace="xjtu" :data='{"path":"/dyyy/:path{.+}","name":"Unknown","maintainers":[],"location":"dyyy/index.ts"}' :test='undefined' />

### 第二附属医院新闻 <Site url="2yuan.xjtu.edu.cn" size="sm" />

<Route namespace="xjtu" :data='{"path":"/2yuan/news/:id?","categories":["university"],"example":"/xjtu/2yuan/news","parameters":{"id":"编号，见下表，默认为通知公告"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"第二附属医院新闻","maintainers":["nczitzk"],"description":"| 分类     | 编号 |\n  | -------- | ---- |\n  | 通知公告 | 110  |\n  | 综合新闻 | 6    |\n  | 科室动态 | 8    |\n  | 教学动态 | 45   |\n  | 科研动态 | 51   |\n  | 护理动态 | 57   |\n  | 党群活动 | 63   |\n  | 外事活动 | 13   |\n  | 媒体二院 | 14   |\n  | 理论政策 | 16   |","location":"2yuan/news.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 分类     | 编号 |
  | -------- | ---- |
  | 通知公告 | 110  |
  | 综合新闻 | 6    |
  | 科室动态 | 8    |
  | 教学动态 | 45   |
  | 科研动态 | 51   |
  | 护理动态 | 57   |
  | 党群活动 | 63   |
  | 外事活动 | 13   |
  | 媒体二院 | 14   |
  | 理论政策 | 16   |

### 电气学院 <Site url="ee.xjtu.edu.cn/" size="sm" />

<Route namespace="xjtu" :data='{"path":"/ee/:id?","categories":["university"],"example":"/xjtu/ee/1114","parameters":{"id":"栏目id，默认请求`1124`，可在 URL 中找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ee.xjtu.edu.cn/"]}],"name":"电气学院","maintainers":["DylanXie123"],"url":"ee.xjtu.edu.cn/","location":"ee.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 教务处 <Site url="2yuan.xjtu.edu.cn" size="sm" />

<Route namespace="xjtu" :data='{"path":"/dean/:subpath{.+}","name":"教务处","maintainers":["hoilc"],"example":"/xjtu/dean/jxxx/jxtz2","description":"打开一个类似 <https://dean.xjtu.edu.cn/jxxx/jxtz2.htm> 的网址，在 `.cn` 后的内容就是 subpath，此例中是 `jxxx/jxtz2`","location":"dean.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

打开一个类似 <https://dean.xjtu.edu.cn/jxxx/jxtz2.htm> 的网址，在 `.cn` 后的内容就是 subpath，此例中是 `jxxx/jxtz2`

### 就业创业中心 <Site url="2yuan.xjtu.edu.cn" size="sm" />

<Route namespace="xjtu" :data='{"path":"/job/:subpath?","categories":["university"],"example":"/xjtu/job/zxgg","parameters":{"subpath":"栏目类型，默认请求`zxgg`，详见下方表格"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"就业创业中心","maintainers":["DylanXie123"],"description":"栏目类型\n\n  | 中心公告 | 选调生 | 重点单位 | 国际组织 | 创新创业 | 就业实习 |\n  | -------- | ------ | -------- | -------- | -------- | -------- |\n  | zxgg     | xds    | zddw     | gjzz     | cxcy     | jysx     |","location":"job.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

栏目类型

  | 中心公告 | 选调生 | 重点单位 | 国际组织 | 创新创业 | 就业实习 |
  | -------- | ------ | -------- | -------- | -------- | -------- |
  | zxgg     | xds    | zddw     | gjzz     | cxcy     | jysx     |

### 科技在线 <Site url="2yuan.xjtu.edu.cn" size="sm" />

<Route namespace="xjtu" :data='{"path":"/std/:category?","categories":["university"],"example":"/xjtu/std/zytz","parameters":{"category":"分类，见下表，默认为通知公告"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"科技在线","maintainers":["nczitzk"],"description":"| 通知公告 | 重要通知 | 项目申报 | 成果申报 | 信息快讯 |\n  | -------- | -------- | -------- | -------- | -------- |\n  |          | zytz     | xmsb     | cgsb     | xxkx     |","location":"std.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 通知公告 | 重要通知 | 项目申报 | 成果申报 | 信息快讯 |
  | -------- | -------- | -------- | -------- | -------- |
  |          | zytz     | xmsb     | cgsb     | xxkx     |

### 研究生院通知公告 <Site url="gs.xjtu.edu.cn/" size="sm" />

<Route namespace="xjtu" :data='{"path":"/gs/tzgg","categories":["university"],"example":"/xjtu/gs/tzgg","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gs.xjtu.edu.cn/"]}],"name":"研究生院通知公告","maintainers":["nczitzk"],"url":"gs.xjtu.edu.cn/","location":"gs/tzgg.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

## 新乡医学院三全学院 <Site url="sqmc.edu.cn"/>

### 官网信息 <Site url="sqmc.edu.cn" size="sm" />

<Route namespace="sqmc" :data='{"path":"/www/:category?","categories":["university"],"example":"/sqmc/www/3157","parameters":{"category":"分类ID，默认为`3157`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["sqmc.edu.cn/:category/list.htm"]}],"name":"官网信息","maintainers":["nyaShine"],"description":"| 学校要闻 | 通知 | 学术讲座 | 基层风采书院 | 基层风采院系 | 外媒报道 | 三全学院报 |\n  | -------- | ---- | -------- | ------------ | ------------ | -------- | ---------- |\n  | 3157     | 3187 | 3188     | 3185         | 3186         | 3199     | 3200       |","location":"www.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 学校要闻 | 通知 | 学术讲座 | 基层风采书院 | 基层风采院系 | 外媒报道 | 三全学院报 |
  | -------- | ---- | -------- | ------------ | ------------ | -------- | ---------- |
  | 3157     | 3187 | 3188     | 3185         | 3186         | 3199     | 3200       |

## 浙江中医药大学 <Site url="jwc.zcmu.edu.cn"/>

### 教务处 <Site url="jwc.zcmu.edu.cn" size="sm" />

<Route namespace="zcmu" :data='{"path":"/jwc/:type?","categories":["university"],"example":"/zcmu/jwc/1","parameters":{"type":"通知模块id"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"教务处","maintainers":["CCraftY"],"description":"| 教务管理 | 成绩管理 | 学籍管理 | 考试管理 | 选课管理 | 排课管理 |\n  | -------- | -------- | -------- | -------- | -------- | -------- |\n  | 0        | 1        | 2        | 3        | 4        | 5        |","location":"jwc/index.ts"}' :test='{"code":0}' />

| 教务管理 | 成绩管理 | 学籍管理 | 考试管理 | 选课管理 | 排课管理 |
  | -------- | -------- | -------- | -------- | -------- | -------- |
  | 0        | 1        | 2        | 3        | 4        | 5        |

### 药学院 <Site url="jwc.zcmu.edu.cn" size="sm" />

<Route namespace="zcmu" :data='{"path":"/yxy/:type?","categories":["university"],"example":"/zcmu/yxy/0","parameters":{"type":"模块id"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"药学院","maintainers":["CCraftY"],"description":"| 通知公告 | 评优评奖 | 文明规范 | 创新创业 | 校园文化 | 心理驿站 | 日常通知 |\n  | -------- | -------- | -------- | -------- | -------- | -------- | -------- |\n  | 0        | 1        | 2        | 3        | 4        | 5        | 6        |","location":"yxy/index.ts"}' :test='{"code":0}' />

| 通知公告 | 评优评奖 | 文明规范 | 创新创业 | 校园文化 | 心理驿站 | 日常通知 |
  | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
  | 0        | 1        | 2        | 3        | 4        | 5        | 6        |

## 浙江大学 <Site url="physics.zju.edu.cn"/>

### 就业服务平台 <Site url="physics.zju.edu.cn" size="sm" />

<Route namespace="zju" :data='{"path":"/career/:type","categories":["university"],"example":"/zju/career/1","parameters":{"type":"分类，见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"就业服务平台","maintainers":["Caicailiushui"],"description":"| 新闻动态 | 活动通知 | 学院通知 | 告示通知 |\n  | -------- | -------- | -------- | -------- |\n  | 1        | 2        | 3        | 4        |","location":"career/index.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 新闻动态 | 活动通知 | 学院通知 | 告示通知 |
  | -------- | -------- | -------- | -------- |
  | 1        | 2        | 3        | 4        |

### 普通栏目 如学术 / 图片 / 新闻等 <Site url="physics.zju.edu.cn" size="sm" />

<Route namespace="zju" :data='{"path":"/list/:type","categories":["university"],"example":"/zju/list/xs","parameters":{"type":"`xs`为学术，`xw`为新闻，`5461`是图片新闻，`578`是浙大报道，具体参数参考左侧的菜单"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"普通栏目 如学术 / 图片 / 新闻等","maintainers":["Jeason0228"],"location":"list.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 软件学院 <Site url="physics.zju.edu.cn" size="sm" />

<Route namespace="zju" :data='{"path":"/cst/custom/:id","categories":["university"],"example":"/zju/cst/custom/36194+36241+36246","parameters":{"id":"提取出通知页面中的 `ID`，如 `http://www.cst.zju.edu.cn/36246/list.htm` 中的 `36246`，可将你想获取通知的多个页面，通过 `+` 符号来聚合。"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"软件学院","maintainers":["zwithz"],"description":"| 全部通知 | 招生信息 | 教务管理 | 论文管理 | 思政工作 | 评奖评优 | 实习就业 | 国际实习 | 国内合作科研 | 国际合作科研 | 校园服务 |\n  | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | ------------ | ------------ | -------- |\n  | 0        | 1        | 2        | 3        | 4        | 5        | 6        | 7        | 8            | 9            | 10       |\n\n#### 自定义聚合通知 {#zhe-jiang-da-xue-ruan-jian-xue-yuan-zi-ding-yi-ju-he-tong-zhi}","location":"cst/custom.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 全部通知 | 招生信息 | 教务管理 | 论文管理 | 思政工作 | 评奖评优 | 实习就业 | 国际实习 | 国内合作科研 | 国际合作科研 | 校园服务 |
  | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | ------------ | ------------ | -------- |
  | 0        | 1        | 2        | 3        | 4        | 5        | 6        | 7        | 8            | 9            | 10       |

#### 自定义聚合通知 {#zhe-jiang-da-xue-ruan-jian-xue-yuan-zi-ding-yi-ju-he-tong-zhi}

### 软件学院 <Site url="physics.zju.edu.cn" size="sm" />

<Route namespace="zju" :data='{"path":"/cst/:type","categories":["university"],"example":"/zju/cst/0","parameters":{"type":"分类，见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"软件学院","description":"| 全部通知 | 招生信息 | 教务管理 | 论文管理 | 思政工作 | 评奖评优 | 实习就业 | 国际实习 | 国内合作科研 | 国际合作科研 | 校园服务 |\n    | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | ------------ | ------------ | -------- |\n    | 0        | 1        | 2        | 3        | 4        | 5        | 6        | 7        | 8            | 9            | 10       |","maintainers":["yonvenne","zwithz"],"location":"cst/index.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 全部通知 | 招生信息 | 教务管理 | 论文管理 | 思政工作 | 评奖评优 | 实习就业 | 国际实习 | 国内合作科研 | 国际合作科研 | 校园服务 |
    | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | ------------ | ------------ | -------- |
    | 0        | 1        | 2        | 3        | 4        | 5        | 6        | 7        | 8            | 9            | 10       |

### 物理学院 <Site url="physics.zju.edu.cn" size="sm" />

<Route namespace="zju" :data='{"path":"/physics/:type","categories":["university"],"example":"/zju/physics/1","parameters":{"type":"分类，见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"物理学院","maintainers":["Caicailiushui"],"description":"| 本院动态 | 科研进展 | 研究生教育最新消息 |\n  | -------- | -------- | ------------------ |\n  | 1        | 2        | 3                  |","location":"physics/index.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 本院动态 | 科研进展 | 研究生教育最新消息 |
  | -------- | -------- | ------------------ |
  | 1        | 2        | 3                  |

### 研究生院 <Site url="physics.zju.edu.cn" size="sm" />

<Route namespace="zju" :data='{"path":"/grs/:type","categories":["university"],"example":"/zju/grs/1","parameters":{"type":"分类，见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"研究生院","maintainers":["Caicailiushui"],"description":"| 全部公告 | 教学管理 | 各类资助 | 学科建设 | 海外交流 |\n  | -------- | -------- | -------- | -------- | -------- |\n  | 1        | 2        | 3        | 4        | 5        |","location":"grs/index.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 全部公告 | 教学管理 | 各类资助 | 学科建设 | 海外交流 |
  | -------- | -------- | -------- | -------- | -------- |
  | 1        | 2        | 3        | 4        | 5        |

## 浙江工业大学 <Site url="www.zjut.edu.cn"/>

### 设计与建筑学院 <Site url="www.design.zjut.edu.cn" size="sm" />

<Route namespace="zjut" :data='{"path":"/da/:type","categories":["university"],"example":"/zjut/da/1","parameters":{"type":"分类，见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"设计与建筑学院","maintainers":["yikZero"],"url":"www.design.zjut.edu.cn","description":"| 学院新闻 | 公告通知 | 科研申报 | 科研成果 | 文件与资源 | 学术交流 |\n| -------- | -------- | -------- | -------- | -------- | -------- |\n| 1        | 2        | 3        | 4        | 5        | 6        |","location":"da/index.ts"}' :test='{"code":0}' />

| 学院新闻 | 公告通知 | 科研申报 | 科研成果 | 文件与资源 | 学术交流 |
| -------- | -------- | -------- | -------- | -------- | -------- |
| 1        | 2        | 3        | 4        | 5        | 6        |

### 浙工大新闻 <Site url="www.news.zjut.edu.cn" size="sm" />

<Route namespace="zjut" :data='{"path":"/news/:type","categories":["university"],"example":"/zjut/news/5414","parameters":{"type":"分类，见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"浙工大新闻","maintainers":["junbaor","yikZero"],"url":"www.news.zjut.edu.cn","radar":[{"source":["www.news.zjut.edu.cn/:type/list.htm"]}],"description":"| 图片新闻 | 工大要闻 | 综合新闻 | 学术・探索 | 三创・人物 | 智库工大 | 美誉工大 | 葵园融媒 |\n| -------- | -------- | -------- | ---------- | ---------- | -------- | -------- | -------- |\n| 5414     | 5415     | 5416     | 5422       | 5423       | 5424     | 5425     | 5419     |","location":"news.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 图片新闻 | 工大要闻 | 综合新闻 | 学术・探索 | 三创・人物 | 智库工大 | 美誉工大 | 葵园融媒 |
| -------- | -------- | -------- | ---------- | ---------- | -------- | -------- | -------- |
| 5414     | 5415     | 5416     | 5422       | 5423       | 5424     | 5425     | 5419     |

## 中国科学院 <Site url="www.cas.cn"/>

### Unknown <Site url="www.cas.cn" size="sm" />

<Route namespace="cas" :data='{"path":"/genetics/:path{.+}","name":"Unknown","maintainers":[],"location":"genetics/index.ts"}' :test='undefined' />

### Unknown <Site url="www.cas.cn" size="sm" />

<Route namespace="cas" :data='{"path":"/is/:path{.+}","name":"Unknown","maintainers":[],"location":"is/index.ts"}' :test='undefined' />

### 成果转化 <Site url="www.cas.cn" size="sm" />

<Route namespace="cas" :data='{"path":"/cg/:caty?","categories":["university"],"example":"/cas/cg/cgzhld","parameters":{"caty":"分类，见下表，默认为工作动态"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.cas.cn/cg/:caty?"]}],"name":"成果转化","maintainers":["nczitzk"],"description":"| 工作动态 | 科技成果转移转化亮点工作 |\n  | -------- | ------------------------ |\n  | zh       | cgzhld                   |","location":"cg/index.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 工作动态 | 科技成果转移转化亮点工作 |
  | -------- | ------------------------ |
  | zh       | cgzhld                   |

### 电工研究所 科研动态 <Site url="www.iee.cas.cn/xwzx/kydt" size="sm" />

<Route namespace="cas" :data='{"path":"/iee/kydt","categories":["university"],"example":"/cas/iee/kydt","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.iee.cas.cn/xwzx/kydt","www.iee.cas.cn/"]}],"name":"电工研究所 科研动态","maintainers":["nczitzk"],"url":"www.iee.cas.cn/xwzx/kydt","location":"iee/kydt.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 上海微系统与信息技术研究所 科技进展 <Site url="www.sim.cas.cn/xwzx2016/kyjz" size="sm" />

<Route namespace="cas" :data='{"path":"/sim/kyjz","categories":["university"],"example":"/cas/sim/kyjz","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.sim.cas.cn/xwzx2016/kyjz","www.sim.cas.cn/"]}],"name":"上海微系统与信息技术研究所 科技进展","maintainers":["HenryQW"],"url":"www.sim.cas.cn/xwzx2016/kyjz","location":"sim/kyjz.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 信息工程研究所 第二研究室 处理架构组 知识库 <Site url="www.mesalab.cn/f/article/articleList" size="sm" />

<Route namespace="cas" :data='{"path":"/mesalab/kb","categories":["university"],"example":"/cas/mesalab/kb","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.mesalab.cn/f/article/articleList","www.mesalab.cn/"]}],"name":"信息工程研究所 第二研究室 处理架构组 知识库","maintainers":["renzhexigua"],"url":"www.mesalab.cn/f/article/articleList","location":"mesalab/kb.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 自动化所 <Site url="www.ia.cas.cn/yjsjy/zs/sszs" size="sm" />

<Route namespace="cas" :data='{"path":"/ia/yjs","categories":["university"],"example":"/cas/ia/yjs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.ia.cas.cn/yjsjy/zs/sszs","www.ia.cas.cn/"]}],"name":"自动化所","maintainers":["shengmaosu"],"url":"www.ia.cas.cn/yjsjy/zs/sszs","location":"ia/yjs.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## 中国农业大学 <Site url="ciee.cau.edu.cn"/>

### 研招网通知公告 <Site url="ciee.cau.edu.cn/col/col26712/index.html" size="sm" />

<Route namespace="cau" :data='{"path":"/ele","categories":["university"],"example":"/cau/ele","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ciee.cau.edu.cn/col/col26712/index.html","ciee.cau.edu.cn/"]}],"name":"研招网通知公告","maintainers":["shengmaosu"],"url":"ciee.cau.edu.cn/col/col26712/index.html","description":"#### 信电学院 {#zhong-guo-nong-ye-da-xue-yan-zhao-wang-tong-zhi-gong-gao-xin-dian-xue-yuan}","location":"ele.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

#### 信电学院 {#zhong-guo-nong-ye-da-xue-yan-zhao-wang-tong-zhi-gong-gao-xin-dian-xue-yuan}

### 研招网通知公告 <Site url="yz.cau.edu.cn/col/col41740/index.html" size="sm" />

<Route namespace="cau" :data='{"path":"/yjs","categories":["university"],"example":"/cau/yjs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yz.cau.edu.cn/col/col41740/index.html","yz.cau.edu.cn/"]}],"name":"研招网通知公告","maintainers":["shengmaosu"],"url":"yz.cau.edu.cn/col/col41740/index.html","location":"yjs.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## 中南大学 <Site url="career.csu.edu.cn"/>

### 计算机学院 <Site url="career.csu.edu.cn" size="sm" />

<Route namespace="csu" :data='{"path":"/cse/:type?","categories":["university"],"example":"/csu/cse","parameters":{"type":"类型"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"计算机学院","maintainers":["j1g5awi"],"description":"| 类型 | 学院新闻 | 通知公告 | 学术信息 | 学工动态 | 科研动态 |\n  | ---- | -------- | -------- | -------- | -------- | -------- |\n  | 参数 | xyxw     | tzgg     | xsxx     | xgdt     | kydt     |","location":"cse.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 类型 | 学院新闻 | 通知公告 | 学术信息 | 学工动态 | 科研动态 |
  | ---- | -------- | -------- | -------- | -------- | -------- |
  | 参数 | xyxw     | tzgg     | xsxx     | xgdt     | kydt     |

### 就业信息网招聘信息 <Site url="career.csu.edu.cn/campus/index/category/1" size="sm" />

<Route namespace="csu" :data='{"path":"/career","categories":["university"],"example":"/csu/career","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["career.csu.edu.cn/campus/index/category/1","career.csu.edu.cn/campus","career.csu.edu.cn/"]}],"name":"就业信息网招聘信息","maintainers":["TonyRL"],"url":"career.csu.edu.cn/campus/index/category/1","location":"career.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 校长信箱 <Site url="career.csu.edu.cn" size="sm" />

<Route namespace="csu" :data='{"path":"/mail/:type?","categories":["university"],"example":"/csu/mail","parameters":{"type":"类型"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"校长信箱","maintainers":["j1g5awi"],"description":"| 类型 | 校长信箱 | 党委信箱 |\n  | ---- | -------- | -------- |\n  | 参数 | 01       | 02       |","location":"mail.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 类型 | 校长信箱 | 党委信箱 |
  | ---- | -------- | -------- |
  | 参数 | 01       | 02       |

## 中国传媒大学 <Site url="yz.cuc.edu.cn"/>

### 研究生招生网 <Site url="yz.cuc.edu.cn/8549/list.htm" size="sm" />

<Route namespace="cuc" :data='{"path":"/yz","categories":["university"],"example":"/cuc/yz","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yz.cuc.edu.cn/8549/list.htm","yz.cuc.edu.cn/"]}],"name":"研究生招生网","maintainers":["niuyi1017"],"url":"yz.cuc.edu.cn/8549/list.htm","location":"yz.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## 中国海洋大学 <Site url="it.ouc.edu.cn"/>

### 后勤公告通知 <Site url="hqsz.ouc.edu.cn/news.html?typeId=02" size="sm" />

<Route namespace="ouc" :data='{"path":"/hqsz","categories":["university"],"example":"/ouc/hqsz","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["hqsz.ouc.edu.cn/news.html"]}],"name":"后勤公告通知","maintainers":["ladeng07"],"url":"hqsz.ouc.edu.cn/news.html?typeId=02","location":"hqsz.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 教务处 <Site url="jwc.ouc.edu.cn/" size="sm" />

<Route namespace="ouc" :data='{"path":"/jwc","categories":["university"],"example":"/ouc/jwc","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["jwc.ouc.edu.cn/","jwc.ouc.edu.cn/6517/list.htm"]}],"name":"教务处","maintainers":["3401797899"],"url":"jwc.ouc.edu.cn/","location":"jwc.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 信息科学与工程学院研究生招生通知公告 <Site url="it.ouc.edu.cn/_s381/16619/list.psp" size="sm" />

<Route namespace="ouc" :data='{"path":"/it/postgraduate","categories":["university"],"example":"/ouc/it/postgraduate","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["it.ouc.edu.cn/_s381/16619/list.psp","it.ouc.edu.cn/16619/list.htm","it.ouc.edu.cn/"]}],"name":"信息科学与工程学院研究生招生通知公告","maintainers":["shengmaosu"],"url":"it.ouc.edu.cn/_s381/16619/list.psp","location":"it-postgraduate.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

### 信息科学与工程学院团学工作 <Site url="it.ouc.edu.cn/" size="sm" />

<Route namespace="ouc" :data='{"path":"/it/tx/:id?","categories":["university"],"example":"/ouc/it/tx/xwdt","parameters":{"id":"默认为 `xwdt`，id过多，这里只举几个例"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["it.ouc.edu.cn/tx/:id/list.htm"],"target":"/it/tx/:id"}],"name":"信息科学与工程学院团学工作","maintainers":["3401797899"],"url":"it.ouc.edu.cn/","description":"| 新闻动态 | 学院活动 | 奖助工作获奖情况 |\n  | -------- | -------- | ---------------- |\n  | xwdt     | tzgg     | 21758            |","location":"it-tx.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 新闻动态 | 学院活动 | 奖助工作获奖情况 |
  | -------- | -------- | ---------------- |
  | xwdt     | tzgg     | 21758            |

### 信息科学与工程学院 <Site url="it.ouc.edu.cn/" size="sm" />

<Route namespace="ouc" :data='{"path":"/it/:type?","categories":["university"],"example":"/ouc/it/0","parameters":{"type":"默认为 `0`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["it.ouc.edu.cn/"],"target":"/it"}],"name":"信息科学与工程学院","maintainers":["GeoffreyChen777","3401797899"],"url":"it.ouc.edu.cn/","description":"| 学院要闻 | 学院公告 | 学院活动 |\n  | -------- | -------- | -------- |\n  | 0        | 1        | 2        |","location":"it.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 学院要闻 | 学院公告 | 学院活动 |
  | -------- | -------- | -------- |
  | 0        | 1        | 2        |

### 选课信息教务通知 <Site url="jwgl.ouc.edu.cn/cas/login.action" size="sm" />

<Route namespace="ouc" :data='{"path":"/jwgl","categories":["university"],"example":"/ouc/jwgl","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["jwgl.ouc.edu.cn/cas/login.action","jwgl.ouc.edu.cn/public/SchoolNotice.jsp"]}],"name":"选课信息教务通知","maintainers":["3401797899"],"url":"jwgl.ouc.edu.cn/cas/login.action","description":":::warning\n  由于选课通知仅允许校园网访问，需自行部署。\n  :::","location":"jwgl.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

:::warning
  由于选课通知仅允许校园网访问，需自行部署。
  :::

### 研究生院 <Site url="yz.ouc.edu.cn/5926/list.htm" size="sm" />

<Route namespace="ouc" :data='{"path":"/yjs","categories":["university"],"example":"/ouc/yjs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["yz.ouc.edu.cn/5926/list.htm"]}],"name":"研究生院","maintainers":["shengmaosu"],"url":"yz.ouc.edu.cn/5926/list.htm","location":"yjs.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## 中国人民大学 <Site url="hr.ruc.edu.cn"/>

### 人事处 <Site url="hr.ruc.edu.cn/" size="sm" />

<Route namespace="ruc" :data='{"path":"/hr/:category?","categories":["university"],"example":"/ruc/hr","parameters":{"category":"分类，见下方说明，默认为首页通知公告"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["hr.ruc.edu.cn/"]}],"name":"人事处","maintainers":["nczitzk"],"url":"hr.ruc.edu.cn/","description":":::tip\n  分类字段处填写的是对应中国人民大学人事处分类页网址中介于 **`http://hr.ruc.edu.cn/`** 和 **/index.htm** 中间的一段，并将其中的 `/` 修改为 `-`。\n\n  如 [中国人民大学人事处 - 办事机构 - 教师事务办公室 - 教师通知公告](http://hr.ruc.edu.cn/bsjg/bsjsswbgs/jstzgg/index.htm) 的网址为 `http://hr.ruc.edu.cn/bsjg/bsjsswbgs/jstzgg/index.htm` 其中介于 **`http://hr.ruc.edu.cn/`** 和 **/index.htm** 中间的一段为 `bsjg/bsjsswbgs/jstzgg`。随后，并将其中的 `/` 修改为 `-`，可以得到 `bsjg-bsjsswbgs-jstzgg`。所以最终我们的路由为 [`/ruc/hr/bsjg-bsjsswbgs-jstzgg`](https://rsshub.app/ruc/hr/bsjg-bsjsswbgs-jstzgg)\n  :::","location":"hr.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

:::tip
  分类字段处填写的是对应中国人民大学人事处分类页网址中介于 **`http://hr.ruc.edu.cn/`** 和 **/index.htm** 中间的一段，并将其中的 `/` 修改为 `-`。

  如 [中国人民大学人事处 - 办事机构 - 教师事务办公室 - 教师通知公告](http://hr.ruc.edu.cn/bsjg/bsjsswbgs/jstzgg/index.htm) 的网址为 `http://hr.ruc.edu.cn/bsjg/bsjsswbgs/jstzgg/index.htm` 其中介于 **`http://hr.ruc.edu.cn/`** 和 **/index.htm** 中间的一段为 `bsjg/bsjsswbgs/jstzgg`。随后，并将其中的 `/` 修改为 `-`，可以得到 `bsjg-bsjsswbgs-jstzgg`。所以最终我们的路由为 [`/ruc/hr/bsjg-bsjsswbgs-jstzgg`](https://rsshub.app/ruc/hr/bsjg-bsjsswbgs-jstzgg)
  :::

## 中山大学 <Site url="cse.sysu.edu.cn"/>

### 数据科学与计算机学院动态 <Site url="cse.sysu.edu.cn/" size="sm" />

<Route namespace="sysu" :data='{"path":"/cse","categories":["university"],"example":"/sysu/cse","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["cse.sysu.edu.cn/"]}],"name":"数据科学与计算机学院动态","maintainers":[],"url":"cse.sysu.edu.cn/","location":"cse.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 粤港澳发展研究院 <Site url="cse.sysu.edu.cn" size="sm" />

<Route namespace="sysu" :data='{"path":"/ygafz/:type?","categories":["university"],"example":"/sysu/ygafz","parameters":{"type":"分类，见下表，默认为 `notice`"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ygafz.sysu.edu.cn/:type?"]}],"name":"粤港澳发展研究院","description":"| 人才招聘   | 人才培养      | 新闻动态 | 通知公告 | 专家观点 |\n    | ---------- | ------------- | -------- | -------- | -------- |\n    | jobopening | personnelplan | news     | notice   | opinion  |\n\n    | 研究成果 | 研究论文 | 学术著作 | 形势政策 |\n    | -------- | -------- | -------- | -------- |\n    | results  | papers   | writings | policy   |","maintainers":["TonyRL"],"location":"ygafz.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 人才招聘   | 人才培养      | 新闻动态 | 通知公告 | 专家观点 |
    | ---------- | ------------- | -------- | -------- | -------- |
    | jobopening | personnelplan | news     | notice   | opinion  |

    | 研究成果 | 研究论文 | 学术著作 | 形势政策 |
    | -------- | -------- | -------- | -------- |
    | results  | papers   | writings | policy   |

## 中国科学院大学 <Site url="ai.ucas.ac.cn"/>

### 人工智能学院 <Site url="ai.ucas.ac.cn/index.php/zh-cn/tzgg" size="sm" />

<Route namespace="ucas" :data='{"path":"/ai","categories":["university"],"example":"/ucas/ai","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ai.ucas.ac.cn/index.php/zh-cn/tzgg","ai.ucas.ac.cn/"]}],"name":"人工智能学院","maintainers":["shengmaosu"],"url":"ai.ucas.ac.cn/index.php/zh-cn/tzgg","location":"ai.ts"}' :test='{"code":0}' />

### 招聘信息 <Site url="ai.ucas.ac.cn" size="sm" />

<Route namespace="ucas" :data='{"path":"/job/:type?","categories":["university"],"example":"/ucas/job","parameters":{"type":"招聘类型，默认为博士后"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"招聘信息","maintainers":["Fatpandac"],"description":"| 招聘类型 | 博士后 | 课题项目聘用 | 管理支撑人才 | 教学科研人才 |\n  | :------: | :----: | :----------: | :----------: | :----------: |\n  |   参数   |   bsh  |    ktxmpy    |    glzcrc    |    jxkyrc    |","location":"index.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 招聘类型 | 博士后 | 课题项目聘用 | 管理支撑人才 | 教学科研人才 |
  | :------: | :----: | :----------: | :----------: | :----------: |
  |   参数   |   bsh  |    ktxmpy    |    glzcrc    |    jxkyrc    |

## 中国石油大学（华东） <Site url="computer.upc.edu.cn"/>

### 计算机科学与技术学院 <Site url="computer.upc.edu.cn" size="sm" />

<Route namespace="upc" :data='{"path":"/jsj/:type","categories":["university"],"example":"/upc/jsj/news","parameters":{"type":"分类，见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"计算机科学与技术学院","maintainers":["Veagau"],"description":"| 学院新闻 | 学术关注 | 学工动态 | 通知公告 |\n  | -------- | -------- | -------- | -------- |\n  | news     | scholar  | states   | notice   |","location":"jsj.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 学院新闻 | 学术关注 | 学工动态 | 通知公告 |
  | -------- | -------- | -------- | -------- |
  | news     | scholar  | states   | notice   |

### 教务处通知公告 <Site url="jwc.upc.edu.cn/tzgg/list.htm" size="sm" />

<Route namespace="upc" :data='{"path":"/jwc/:type?","categories":["university"],"example":"/upc/jwc/tzgg","parameters":{"type":"分类，见下表，其值与对应网页url路径参数一致，默认为所有通知"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["jwc.upc.edu.cn","jwc.upc.edu.cn/:type/list.htm"],"target":"/jwc/:type?"}],"name":"教务处通知公告","maintainers":["sddzhyc"],"description":"| 所有通知 | 教学·运行 | 学业·学籍 | 教学·研究 | 课程·教材 | 实践·教学 | 创新·创业 | 语言·文字 | 继续·教育 | 本科·招生 |\n  | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |\n  | tzgg     | 18519    | 18520   | 18521    |    18522 |    18523 | 18524    |  yywwz   |  jxwjy   |   bkwzs  |","url":"jwc.upc.edu.cn/tzgg/list.htm","location":"jwc.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 所有通知 | 教学·运行 | 学业·学籍 | 教学·研究 | 课程·教材 | 实践·教学 | 创新·创业 | 语言·文字 | 继续·教育 | 本科·招生 |
  | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
  | tzgg     | 18519    | 18520   | 18521    |    18522 |    18523 | 18524    |  yywwz   |  jxwjy   |   bkwzs  |

### 研究生院通知公告 <Site url="zs.gs.upc.edu.cn/sszs/list.htm" size="sm" />

<Route namespace="upc" :data='{"path":"/yjs","categories":["university"],"example":"/upc/yjs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["zs.gs.upc.edu.cn/sszs/list.htm","zs.gs.upc.edu.cn/"]}],"name":"研究生院通知公告","maintainers":["shengmaosu"],"url":"zs.gs.upc.edu.cn/sszs/list.htm","location":"yjs.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

### 主页 <Site url="computer.upc.edu.cn" size="sm" />

<Route namespace="upc" :data='{"path":"/main/:type","categories":["university"],"example":"/upc/main/notice","parameters":{"type":"分类，见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"主页","maintainers":["Veagau"],"description":"| 通知公告 | 学术动态 |\n  | -------- | -------- |\n  | notice   | scholar  |","location":"main.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 通知公告 | 学术动态 |
  | -------- | -------- |
  | notice   | scholar  |

## 中国科学技术大学 <Site url="ustc.edu.cn"/>

### 电子工程与信息科学系 <Site url="eeis.ustc.edu.cn/" size="sm" />

<Route namespace="ustc" :data='{"path":"/eeis/:type?","categories":["university"],"example":"/ustc/eeis/tzgg","parameters":{"type":"分类，见下表，默认为通知公告"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["eeis.ustc.edu.cn/"],"target":"/eeis"}],"name":"电子工程与信息科学系","maintainers":["jasongzy"],"url":"eeis.ustc.edu.cn/","description":"| 通知公告 | 新闻信息 |\n  | -------- | -------- |\n  | tzgg     | xwxx     |","location":"eeis.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 通知公告 | 新闻信息 |
  | -------- | -------- |
  | tzgg     | xwxx     |

### 官网通知公告 <Site url="ustc.edu.cn/" size="sm" />

<Route namespace="ustc" :data='{"path":"/news/:type?","categories":["university"],"example":"/ustc/news/gl","parameters":{"type":"分类，默认为管理类"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["ustc.edu.cn/"],"target":"/news"}],"name":"官网通知公告","maintainers":["hang333","jasongzy"],"url":"ustc.edu.cn/","description":"| 教学类 | 科研类 | 管理类 | 服务类 |\n  | ------ | ------ | ------ | ------ |\n  | jx     | ky     | gl     | fw     |","location":"index.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 教学类 | 科研类 | 管理类 | 服务类 |
  | ------ | ------ | ------ | ------ |
  | jx     | ky     | gl     | fw     |

### 教务处通知新闻 <Site url="www.teach.ustc.edu.cn/" size="sm" />

<Route namespace="ustc" :data='{"path":"/jwc/:type?","categories":["university"],"example":"/ustc/jwc/info","parameters":{"type":"分类，默认显示所有种类"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.teach.ustc.edu.cn/"],"target":"/jwc"}],"name":"教务处通知新闻","maintainers":["hang333"],"url":"www.teach.ustc.edu.cn/","description":"| 信息 | 教学     | 考试 | 交流     |\n  | ---- | -------- | ---- | -------- |\n  | info | teaching | exam | exchange |","location":"jwc.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 信息 | 教学     | 考试 | 交流     |
  | ---- | -------- | ---- | -------- |
  | info | teaching | exam | exchange |

### 就业信息网 <Site url="job.ustc.edu.cn/" size="sm" />

<Route namespace="ustc" :data='{"path":"/job/:category?","categories":["university"],"example":"/ustc/job","parameters":{"category":"分类，见下表，默认为招聘公告"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["job.ustc.edu.cn/"],"target":"/job"}],"name":"就业信息网","maintainers":["nczitzk"],"url":"job.ustc.edu.cn/","description":"| 专场招聘会  | 校园双选会   | 空中宣讲  | 招聘公告 |\n  | ----------- | ------------ | --------- | -------- |\n  | RecruitList | Doublechoice | Broadcast | joblist2 |","location":"job.ts"}' :test='{"code":1,"message":"expected 503 to be 200 // Object.is equality"}' />

| 专场招聘会  | 校园双选会   | 空中宣讲  | 招聘公告 |
  | ----------- | ------------ | --------- | -------- |
  | RecruitList | Doublechoice | Broadcast | joblist2 |

### 数学科学学院 <Site url="math.ustc.edu.cn/" size="sm" />

<Route namespace="ustc" :data='{"path":"/math/:type?","categories":["university"],"example":"/ustc/math/tzgg","parameters":{"type":"分类，见下表，默认为通知公告"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["math.ustc.edu.cn/"],"target":"/math"}],"name":"数学科学学院","maintainers":["ne0-wu"],"url":"math.ustc.edu.cn/","description":"| 学院新闻 | 通知公告 | 学术交流 | 学术报告 |\n  | -------- | -------- | -------- | -------- |\n  | xyxw     | tzgg     | xsjl     | xsbg     |","location":"math.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 学院新闻 | 通知公告 | 学术交流 | 学术报告 |
  | -------- | -------- | -------- | -------- |
  | xyxw     | tzgg     | xsjl     | xsbg     |

### 信息科学技术学院 <Site url="sist.ustc.edu.cn/" size="sm" />

<Route namespace="ustc" :data='{"path":"/sist/:type?","categories":["university"],"example":"/ustc/sist/tzgg","parameters":{"type":"分类，见下表，默认为通知公告"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["sist.ustc.edu.cn/"],"target":"/sist"}],"name":"信息科学技术学院","maintainers":["jasongzy"],"url":"sist.ustc.edu.cn/","description":"| 通知公告 | 招生工作 |\n  | -------- | -------- |\n  | tzgg     | zsgz     |","location":"sist.ts"}' :test='{"code":0}' />

| 通知公告 | 招生工作 |
  | -------- | -------- |
  | tzgg     | zsgz     |

### 研究生院 <Site url="gradschool.ustc.edu.cn/" size="sm" />

<Route namespace="ustc" :data='{"path":"/gs/:type?","categories":["university"],"example":"/ustc/gs/tzgg","parameters":{"type":"分类，见下表，默认为通知公告"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gradschool.ustc.edu.cn/"],"target":"/gs"}],"name":"研究生院","maintainers":["jasongzy"],"url":"gradschool.ustc.edu.cn/","description":"| 通知公告 | 新闻动态 |\n  | -------- | -------- |\n  | tzgg     | xwdt     |","location":"gs.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 通知公告 | 新闻动态 |
  | -------- | -------- |
  | tzgg     | xwdt     |

## 中南财经政法大学 <Site url="wap.zuel.edu.cn"/>

### 通知公告 <Site url="wap.zuel.edu.cn/" size="sm" />

<Route namespace="zuel" :data='{"path":"/notice","categories":["university"],"example":"/zuel/notice","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["wap.zuel.edu.cn/","wap.zuel.edu.cn/notice/list.htm"]}],"name":"通知公告","maintainers":["nczitzk"],"url":"wap.zuel.edu.cn/","location":"notice.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

## 重庆文理学院 <Site url="www.cqwu.net"/>

### 通知公告 <Site url="www.cqwu.net" size="sm" />

<Route namespace="cqwu" :data='{"path":"/news/:type?","categories":["university"],"example":"/cqwu/news/academiceve","parameters":{"type":"可选，默认为 academiceve "},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"通知公告","maintainers":["Fatpandac"],"description":"| 通知公告 | 学术活动公告 |\n  | -------- | ------------ |\n  | notify   | academiceve  |","location":"index.ts"}' :test='{"code":1,"message":"Test timed out in 10000ms.\nIf this is a long-running test, pass a timeout value as the last argument or configure it globally with \"testTimeout\"."}' />

| 通知公告 | 学术活动公告 |
  | -------- | ------------ |
  | notify   | academiceve  |

