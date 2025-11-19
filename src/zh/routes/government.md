# 📢 政务消息

## 深圳市罗湖区人民政府 <Site url="www.szlh.gov.cn"/>

### 最新政策 <Site url="www.gov.cn/zhengce/zuixin.htm" size="sm" />

<Route namespace="gov" :data='{"path":["/zhengce/zuixin","/zhengce/:category{.+}?"],"categories":["government","popular"],"example":"/gov/zhengce/zuixin","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.gov.cn/zhengce/zuixin.htm","www.gov.cn/"]}],"name":"最新政策","maintainers":["SettingDust","nczitzk"],"url":"www.gov.cn/zhengce/zuixin.htm","location":"zhengce/index.ts","heat":2285,"topFeeds":[{"id":"55178154410946580","type":"feed","url":"rsshub://gov/zhengce/zuixin","title":"中国政府网 - 最新政策","description":"中共中央和国务院最近发布的政策 - Powered by RSSHub","image":"https://www.gov.cn/images/gtrs_logo_rt.png"}]}' :test='{"code":0}' />

### 国务院政策文件库 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/zhengce/zhengceku/:department","categories":["government","popular"],"example":"/gov/zhengce/zhengceku/bmwj","parameters":{"department":"库名"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"国务院政策文件库","maintainers":["zxx-457"],"location":"zhengce/zhengceku.ts","heat":1895,"topFeeds":[{"id":"55787153161933874","type":"feed","url":"rsshub://gov/zhengce/zhengceku/bmwj","title":"- 政府文件库","description":"政府文件库, 当页的所有列表 - Powered by RSSHub","image":"https://www.gov.cn/images/gtrs_logo_rt.png"}]}' :test='{"code":0}' />

### 政策解读 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/miit/zcjd","categories":["government","popular"],"example":"/gov/miit/zcjd","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"政策解读","maintainers":["Yoge-Code"],"location":"miit/zcjd.ts","heat":1737,"topFeeds":[{"id":"57123212956073984","type":"feed","url":"rsshub://gov/miit/zcjd","title":"政策解读 - 中华人民共和国工业和信息化部","description":"政策解读 - 中华人民共和国工业和信息化部 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 中华人民共和国国家发展和改革委员会政府信息公开 <Site url="zfxxgk.ndrc.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":["/ndrc/zfxxgk"],"name":"中华人民共和国国家发展和改革委员会政府信息公开","url":"zfxxgk.ndrc.gov.cn","maintainers":["howfool","nczitzk"],"example":"/gov/ndrc/zfxxgk","categories":["government","popular"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["zfxxgk.ndrc.gov.cn/web/dirlist.jsp"],"target":"/ndrc/zfxxgk"}],"location":"ndrc/zfxxgk.ts","heat":1668,"topFeeds":[{"id":"66526297424115712","type":"feed","url":"rsshub://gov/ndrc/zfxxgk","title":"中华人民共和国国家发展和改革委员会 - 政府信息公开","description":"国家发展改革委按目录发布本机关或相关的政府信息公开事项 - Powered by RSSHub","image":"https://zfxxgk.ndrc.gov.cn/web/images/zwgklogo.png"}]}' :test='{"code":0}' />

### 发展规划司 <Site url="www.nea.gov.cn/sjzz/ghs/" size="sm" />

<Route namespace="gov" :data='{"path":"/nea/sjzz/ghs","categories":["government","popular"],"example":"/gov/nea/sjzz/ghs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nea.gov.cn/sjzz/ghs/"],"target":"/nea/sjzz/ghs"}],"name":"发展规划司","maintainers":["nczitzk","pseudoyu"],"url":"www.nea.gov.cn/sjzz/ghs/","location":"nea/ghs.ts","heat":1499,"topFeeds":[{"id":"61217794276645888","type":"feed","url":"rsshub://gov/nea/sjzz/ghs","title":"国家能源局 - 发展规划司工作进展","description":"国家能源局 - 发展规划司工作进展 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 国家统计局 通用 <Site url="www.stats.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/stats/*","name":"国家统计局 通用","url":"www.stats.gov.cn","categories":["government","popular"],"maintainers":["bigfei","nczitzk","reply2future"],"example":"/gov/stats/sj/zxfb","radar":[{"title":"国家统计局 通用","source":["www.stats.gov.cn/*path"],"target":"/gov/stats/*path"}],"description":"::: tip\n路径处填写对应页面 URL 中 `http://www.stats.gov.cn/` 后的字段。下面是一个例子。\n\n若订阅 [数据 > 数据解读](http://www.stats.gov.cn/sj/sjjd/)\n则将对应页面 URL `http://www.stats.gov.cn/sj/sjjd/` 中 `http://www.stats.gov.cn/` 后的字段 `sj/sjjd` 作为路径填入。\n此时路由为 [`/gov/stats/sj/sjjd`](https://rsshub.app/gov/stats/sj/sjjd)\n\n若订阅 [新闻 > 时政要闻 > 中央精神](http://www.stats.gov.cn/xw/szyw/zyjs/)\n则将对应页面 URL `http://www.stats.gov.cn/xw/szyw/zyjs/` 中 `http://www.stats.gov.cn/`\n后的字段 `xw/szyw/zyjs` 作为路径填入。此时路由为 [`/gov/stats/xw/szyw/zyjs`](https://rsshub.app/gov/stats/xw/szyw/zyjs)\n:::","location":"stats/index.ts","heat":1499,"topFeeds":[{"id":"55877082660306949","type":"feed","url":"rsshub://gov/stats/sj/zxfb","title":"数据发布 - 国家统计局","description":"数据发布 - 国家统计局 - Powered by RSSHub","image":null},{"id":"55877082660306948","type":"feed","url":"rsshub://gov/stats/sj/sjjd","title":"数据解读 - 国家统计局","description":"数据解读 - 国家统计局 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

::: tip
路径处填写对应页面 URL 中 `http://www.stats.gov.cn/` 后的字段。下面是一个例子。

若订阅 [数据 > 数据解读](http://www.stats.gov.cn/sj/sjjd/)
则将对应页面 URL `http://www.stats.gov.cn/sj/sjjd/` 中 `http://www.stats.gov.cn/` 后的字段 `sj/sjjd` 作为路径填入。
此时路由为 [`/gov/stats/sj/sjjd`](https://rsshub.app/gov/stats/sj/sjjd)

若订阅 [新闻 > 时政要闻 > 中央精神](http://www.stats.gov.cn/xw/szyw/zyjs/)
则将对应页面 URL `http://www.stats.gov.cn/xw/szyw/zyjs/` 中 `http://www.stats.gov.cn/`
后的字段 `xw/szyw/zyjs` 作为路径填入。此时路由为 [`/gov/stats/xw/szyw/zyjs`](https://rsshub.app/gov/stats/xw/szyw/zyjs)
:::

### 新闻动态 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/ndrc/xwdt/:category{.+}?","name":"新闻动态","example":"/gov/ndrc/xwdt","parameters":{"category":"分类，见下表，默认为新闻发布"},"maintainers":["nczitzk"],"categories":["government","popular"],"radar":[{"title":"中华人民共和国国家发展和改革委员会 - 新闻动态","source":["ndrc.gov.cn/xwdt/:category*"]}],"description":"| 新闻发布 | 通知通告 | 委领导动态 | 司局动态 | 地方动态 |\n| -------- | -------- | ---------- | -------- | -------- |\n| xwfb     | tzgg     | wlddt      | sjdt     | dfdt     |","location":"ndrc/xwdt.ts","heat":1318,"topFeeds":[{"id":"60266822888425476","type":"feed","url":"rsshub://gov/ndrc/xwdt","title":"新闻发布-国家发展和改革委员会","description":"新闻发布-国家发展和改革委员会 - Powered by RSSHub","image":null},{"id":"76948303329996800","type":"feed","url":"rsshub://gov/ndrc/xwdt/xwfb","title":"新闻发布-国家发展和改革委员会","description":"新闻发布-国家发展和改革委员会 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 新闻发布 | 通知通告 | 委领导动态 | 司局动态 | 地方动态 |
| -------- | -------- | ---------- | -------- | -------- |
| xwfb     | tzgg     | wlddt      | sjdt     | dfdt     |

### 文件公示 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/miit/wjgs","categories":["government","popular"],"example":"/gov/miit/wjgs","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"文件公示","maintainers":["Yoge-Code"],"location":"miit/wjgs.ts","heat":1294,"topFeeds":[{"id":"61219763349776384","type":"feed","url":"rsshub://gov/miit/wjgs","title":"文件公示 - 中华人民共和国工业和信息化部","description":"文件公示 - 中华人民共和国工业和信息化部 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":["/fmprc/:category?","/mfa/wjdt/:category?"],"name":"Unknown","maintainers":["nicolaszf","nczitzk"],"description":"| 分类       | category |\n| ---------- | -------- |\n| 领导人活动 | gjldrhd  |\n| 外事日程   | wsrc     |\n| 部领导活动 | wjbxw    |\n| 业务动态   | sjxw     |\n| 发言人表态 | fyrbt    |\n| 吹风会     | cfhsl    |\n| 大使任免   | dsrm     |\n| 驻外报道   | zwbd     |\n| 政策解读   | zcjd     |","location":"mfa/wjdt.ts","heat":1237,"topFeeds":[{"id":"60721620594665472","type":"feed","url":"rsshub://gov/fmprc/fyrbt","title":"例行记者会_中华人民共和国外交部","description":"例行记者会_中华人民共和国外交部 - Powered by RSSHub","image":null},{"id":"103088350778989568","type":"feed","url":"rsshub://gov/fmprc/cfhsl","title":"吹风会_中华人民共和国外交部","description":"吹风会_中华人民共和国外交部 - Powered by RSSHub","image":null}]}' :test='undefined' />

| 分类       | category |
| ---------- | -------- |
| 领导人活动 | gjldrhd  |
| 外事日程   | wsrc     |
| 部领导活动 | wjbxw    |
| 业务动态   | sjxw     |
| 发言人表态 | fyrbt    |
| 吹风会     | cfhsl    |
| 大使任免   | dsrm     |
| 驻外报道   | zwbd     |
| 政策解读   | zcjd     |

### 政府信息公开 <Site url="www.csrc.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/csrc/zfxxgk_zdgk/:id?","name":"政府信息公开","url":"www.csrc.gov.cn","maintainers":["nczitzk"],"example":"/gov/csrc/zfxxgk_zdgk/c101971","parameters":{"id":"频道 id，默认为 `c101971`，即行政处罚决定，可在对应频道页 URL 中找到"},"description":"::: tip\n  若订阅 [行政处罚决定](http://www.csrc.gov.cn/csrc/c101971/zfxxgk_zdgk.shtml)，网址为 `http://www.csrc.gov.cn/csrc/c101971/zfxxgk_zdgk.shtml`。截取 `http://www.csrc.gov.cn/csrc/` 到末尾 `/zfxxgk_zdgk.shtml` 的部分 `c101971` 作为参数填入，此时路由为 [`/gov/csrc/zfxxgk_zdgk/c101971`](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101971)。\n:::\n\n#### [主动公开目录](http://www.csrc.gov.cn/csrc/c100035/zfxxgk_zdgk.shtml)\n\n| 频道                                                                    | ID                                                         |\n| ----------------------------------------------------------------------- | ---------------------------------------------------------- |\n| [按主题查看](http://www.csrc.gov.cn/csrc/c101793/zfxxgk_zdgk.shtml)     | [c101793](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101793) |\n| [按体裁文种查看](http://www.csrc.gov.cn/csrc/c101951/zfxxgk_zdgk.shtml) | [c101951](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101951) |\n| [按派出机构查看](http://www.csrc.gov.cn/csrc/c101985/zfxxgk_zdgk.shtml) | [c101985](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101985) |\n\n<details>\n<summary>更多频道</summary>\n\n#### [按主题查看](http://www.csrc.gov.cn/csrc/c101793/zfxxgk_zdgk.shtml)\n\n| 频道                                                                              | ID                                                         |\n| --------------------------------------------------------------------------------- | ---------------------------------------------------------- |\n| [综合政务](http://www.csrc.gov.cn/csrc/c101794/zfxxgk_zdgk.shtml)                 | [c101794](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101794) |\n| [发行监管](http://www.csrc.gov.cn/csrc/c101801/zfxxgk_zdgk.shtml)                 | [c101801](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101801) |\n| [公众公司监管（含北交所）](http://www.csrc.gov.cn/csrc/c101828/zfxxgk_zdgk.shtml) | [c101828](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101828) |\n| [证券交易监管](http://www.csrc.gov.cn/csrc/c101832/zfxxgk_zdgk.shtml)             | [c101832](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101832) |\n| [证券经营机构监管](http://www.csrc.gov.cn/csrc/c101837/zfxxgk_zdgk.shtml)         | [c101837](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101837) |\n| [上市公司监管](http://www.csrc.gov.cn/csrc/c101863/zfxxgk_zdgk.shtml)             | [c101863](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101863) |\n| [基金监管](http://www.csrc.gov.cn/csrc/c101876/zfxxgk_zdgk.shtml)                 | [c101876](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101876) |\n| [私募基金监管](http://www.csrc.gov.cn/csrc/c101938/zfxxgk_zdgk.shtml)             | [c101938](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101938) |\n| [区域性股权市场规范发展](http://www.csrc.gov.cn/csrc/c106301/zfxxgk_zdgk.shtml)   | [c106301](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c106301) |\n| [期货监管](http://www.csrc.gov.cn/csrc/c101901/zfxxgk_zdgk.shtml)                 | [c101901](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101901) |\n| [债券监管](http://www.csrc.gov.cn/csrc/c106306/zfxxgk_zdgk.shtml)                 | [c106306](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c106306) |\n| [行政执法](http://www.csrc.gov.cn/csrc/c101925/zfxxgk_zdgk.shtml)                 | [c101925](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101925) |\n| [行政复议](http://www.csrc.gov.cn/csrc/c105938/zfxxgk_zdgk.shtml)                 | [c105938](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105938) |\n| [国际合作](http://www.csrc.gov.cn/csrc/c101931/zfxxgk_zdgk.shtml)                 | [c101931](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101931) |\n| [证券服务机构监管](http://www.csrc.gov.cn/csrc/c105939/zfxxgk_zdgk.shtml)         | [c105939](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105939) |\n| [其他](http://www.csrc.gov.cn/csrc/c101950/zfxxgk_zdgk.shtml)                     | [c101950](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101950) |\n\n#### [按体裁文种查看](http://www.csrc.gov.cn/csrc/c101951/zfxxgk_zdgk.shtml)\n\n| 频道                                                                        | ID                                                         |\n| --------------------------------------------------------------------------- | ---------------------------------------------------------- |\n| [机构职能](http://www.csrc.gov.cn/csrc/c101952/zfxxgk_zdgk.shtml)           | [c101952](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101952) |\n| [证监会令](http://www.csrc.gov.cn/csrc/c101953/zfxxgk_zdgk.shtml)           | [c101953](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101953) |\n| [证监会公告](http://www.csrc.gov.cn/csrc/c101954/zfxxgk_zdgk.shtml)         | [c101954](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101954) |\n| [监管规则适用指引](http://www.csrc.gov.cn/csrc/c105948/zfxxgk_zdgk.shtml)   | [c105948](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105948) |\n| [行政许可批复](http://www.csrc.gov.cn/csrc/c101955/zfxxgk_zdgk.shtml)       | [c101955](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101955) |\n| [办事指南](http://www.csrc.gov.cn/csrc/c101968/zfxxgk_zdgk.shtml)           | [c101968](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101968) |\n| [监管对象](http://www.csrc.gov.cn/csrc/c101969/zfxxgk_zdgk.shtml)           | [c101969](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101969) |\n| [统计信息](http://www.csrc.gov.cn/csrc/c101970/zfxxgk_zdgk.shtml)           | [c101970](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101970) |\n| [行政处罚决定](http://www.csrc.gov.cn/csrc/c101971/zfxxgk_zdgk.shtml)       | [c101971](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101971) |\n| [市场禁入决定](http://www.csrc.gov.cn/csrc/c101972/zfxxgk_zdgk.shtml)       | [c101972](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101972) |\n| [行政执法当事人承诺](http://www.csrc.gov.cn/csrc/c106416/zfxxgk_zdgk.shtml) | [c106416](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c106416) |\n| [行政复议](http://www.csrc.gov.cn/csrc/c101973/zfxxgk_zdgk.shtml)           | [c101973](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101973) |\n| [监管措施](http://www.csrc.gov.cn/csrc/c105955/zfxxgk_zdgk.shtml)           | [c105955](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105955) |\n| [预先披露](http://www.csrc.gov.cn/csrc/c101974/zfxxgk_zdgk.shtml)           | [c101974](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101974) |\n| [发审会公告](http://www.csrc.gov.cn/csrc/c101975/zfxxgk_zdgk.shtml)         | [c101975](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101975) |\n| [重组委公告](http://www.csrc.gov.cn/csrc/c101976/zfxxgk_zdgk.shtml)         | [c101976](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101976) |\n| [规划报告](http://www.csrc.gov.cn/csrc/c101977/zfxxgk_zdgk.shtml)           | [c101977](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101977) |\n| [非行政许可事项](http://www.csrc.gov.cn/csrc/c101978/zfxxgk_zdgk.shtml)     | [c101978](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101978) |\n| [其他](http://www.csrc.gov.cn/csrc/c101979/zfxxgk_zdgk.shtml)               | [c101979](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101979) |\n| [备案管理](http://www.csrc.gov.cn/csrc/c106402/zfxxgk_zdgk.shtml)           | [c106402](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c106402) |\n\n#### [按派出机构查看](http://www.csrc.gov.cn/csrc/c101985/zfxxgk_zdgk.shtml)\n\n| 频道                                                                | ID                                                         |\n| ------------------------------------------------------------------- | ---------------------------------------------------------- |\n| [北京](http://www.csrc.gov.cn/csrc/c101986/zfxxgk_zdgk.shtml)       | [c101986](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101986) |\n| [天津](http://www.csrc.gov.cn/csrc/c101987/zfxxgk_zdgk.shtml)       | [c101987](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101987) |\n| [河北](http://www.csrc.gov.cn/csrc/c101988/zfxxgk_zdgk.shtml)       | [c101988](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101988) |\n| [山西](http://www.csrc.gov.cn/csrc/c101989/zfxxgk_zdgk.shtml)       | [c101989](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101989) |\n| [内蒙古](http://www.csrc.gov.cn/csrc/c101990/zfxxgk_zdgk.shtml)     | [c101990](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101990) |\n| [辽宁](http://www.csrc.gov.cn/csrc/c101991/zfxxgk_zdgk.shtml)       | [c101991](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101991) |\n| [吉林](http://www.csrc.gov.cn/csrc/c101992/zfxxgk_zdgk.shtml)       | [c101992](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101992) |\n| [黑龙江](http://www.csrc.gov.cn/csrc/c101993/zfxxgk_zdgk.shtml)     | [c101993](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101993) |\n| [上海](http://www.csrc.gov.cn/csrc/c101994/zfxxgk_zdgk.shtml)       | [c101994](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101994) |\n| [江苏](http://www.csrc.gov.cn/csrc/c101995/zfxxgk_zdgk.shtml)       | [c101995](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101995) |\n| [浙江](http://www.csrc.gov.cn/csrc/c101996/zfxxgk_zdgk.shtml)       | [c101996](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101996) |\n| [安徽](http://www.csrc.gov.cn/csrc/c101997/zfxxgk_zdgk.shtml)       | [c101997](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101997) |\n| [福建](http://www.csrc.gov.cn/csrc/c101998/zfxxgk_zdgk.shtml)       | [c101998](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101998) |\n| [江西](http://www.csrc.gov.cn/csrc/c101999/zfxxgk_zdgk.shtml)       | [c101999](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101999) |\n| [山东](http://www.csrc.gov.cn/csrc/c102000/zfxxgk_zdgk.shtml)       | [c102000](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102000) |\n| [河南](http://www.csrc.gov.cn/csrc/c102001/zfxxgk_zdgk.shtml)       | [c102001](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102001) |\n| [湖北](http://www.csrc.gov.cn/csrc/c102002/zfxxgk_zdgk.shtml)       | [c102002](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102002) |\n| [湖南](http://www.csrc.gov.cn/csrc/c102003/zfxxgk_zdgk.shtml)       | [c102003](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102003) |\n| [广东](http://www.csrc.gov.cn/csrc/c102004/zfxxgk_zdgk.shtml)       | [c102004](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102004) |\n| [广西](http://www.csrc.gov.cn/csrc/c102005/zfxxgk_zdgk.shtml)       | [c102005](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102005) |\n| [海南](http://www.csrc.gov.cn/csrc/c102006/zfxxgk_zdgk.shtml)       | [c102006](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102006) |\n| [重庆](http://www.csrc.gov.cn/csrc/c102007/zfxxgk_zdgk.shtml)       | [c102007](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102007) |\n| [四川](http://www.csrc.gov.cn/csrc/c102008/zfxxgk_zdgk.shtml)       | [c102008](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102008) |\n| [贵州](http://www.csrc.gov.cn/csrc/c102009/zfxxgk_zdgk.shtml)       | [c102009](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102009) |\n| [云南](http://www.csrc.gov.cn/csrc/c102010/zfxxgk_zdgk.shtml)       | [c102010](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102010) |\n| [西藏](http://www.csrc.gov.cn/csrc/c102011/zfxxgk_zdgk.shtml)       | [c102011](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102011) |\n| [陕西](http://www.csrc.gov.cn/csrc/c102012/zfxxgk_zdgk.shtml)       | [c102012](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102012) |\n| [甘肃](http://www.csrc.gov.cn/csrc/c102013/zfxxgk_zdgk.shtml)       | [c102013](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102013) |\n| [青海](http://www.csrc.gov.cn/csrc/c102014/zfxxgk_zdgk.shtml)       | [c102014](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102014) |\n| [宁夏](http://www.csrc.gov.cn/csrc/c102015/zfxxgk_zdgk.shtml)       | [c102015](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102015) |\n| [新疆](http://www.csrc.gov.cn/csrc/c102016/zfxxgk_zdgk.shtml)       | [c102016](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102016) |\n| [深圳](http://www.csrc.gov.cn/csrc/c102017/zfxxgk_zdgk.shtml)       | [c102017](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102017) |\n| [大连](http://www.csrc.gov.cn/csrc/c102018/zfxxgk_zdgk.shtml)       | [c102018](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102018) |\n| [宁波](http://www.csrc.gov.cn/csrc/c102019/zfxxgk_zdgk.shtml)       | [c102019](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102019) |\n| [厦门](http://www.csrc.gov.cn/csrc/c102020/zfxxgk_zdgk.shtml)       | [c102020](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102020) |\n| [青岛](http://www.csrc.gov.cn/csrc/c102021/zfxxgk_zdgk.shtml)       | [c102021](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102021) |\n| [上海专员办](http://www.csrc.gov.cn/csrc/c105841/zfxxgk_zdgk.shtml) | [c105841](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105841) |\n| [深圳专员办](http://www.csrc.gov.cn/csrc/c105842/zfxxgk_zdgk.shtml) | [c105842](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105842) |\n\n#### [综合政务](http://www.csrc.gov.cn/csrc/c101794/zfxxgk_zdgk.shtml)\n\n| 频道                                                                                    | ID                                                         |\n| --------------------------------------------------------------------------------------- | ---------------------------------------------------------- |\n| [组织机构](http://www.csrc.gov.cn/csrc/c101795/zfxxgk_zdgk.shtml)                       | [c101795](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101795) |\n| [征求意见](http://www.csrc.gov.cn/csrc/c101796/zfxxgk_zdgk.shtml)                       | [c101796](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101796) |\n| [废止规章](http://www.csrc.gov.cn/csrc/c101797/zfxxgk_zdgk.shtml)                       | [c101797](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101797) |\n| [财务预算管理](http://www.csrc.gov.cn/csrc/c105887/zfxxgk_zdgk.shtml)                   | [c105887](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105887) |\n| [其他](http://www.csrc.gov.cn/csrc/c101799/zfxxgk_zdgk.shtml)                           | [c101799](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101799) |\n| [全国人大建议和政协提案复文公开](http://www.csrc.gov.cn/csrc/c101800/zfxxgk_zdgk.shtml) | [c101800](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101800) |\n\n</details>\n    ","categories":["government","popular"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.csrc.gov.cn/csrc/:id/zfxxgk_zdgk.shtml"]},{"title":"主动公开目录 - 按主题查看","source":["www.csrc.gov.cn/csrc/c101793/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101793"},{"title":"主动公开目录 - 按体裁文种查看","source":["www.csrc.gov.cn/csrc/c101951/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101951"},{"title":"主动公开目录 - 按派出机构查看","source":["www.csrc.gov.cn/csrc/c101985/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101985"},{"title":"按主题查看 - 综合政务","source":["www.csrc.gov.cn/csrc/c101794/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101794"},{"title":"按主题查看 - 发行监管","source":["www.csrc.gov.cn/csrc/c101801/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101801"},{"title":"按主题查看 - 公众公司监管（含北交所）","source":["www.csrc.gov.cn/csrc/c101828/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101828"},{"title":"按主题查看 - 证券交易监管","source":["www.csrc.gov.cn/csrc/c101832/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101832"},{"title":"按主题查看 - 证券经营机构监管","source":["www.csrc.gov.cn/csrc/c101837/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101837"},{"title":"按主题查看 - 上市公司监管","source":["www.csrc.gov.cn/csrc/c101863/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101863"},{"title":"按主题查看 - 基金监管","source":["www.csrc.gov.cn/csrc/c101876/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101876"},{"title":"按主题查看 - 私募基金监管","source":["www.csrc.gov.cn/csrc/c101938/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101938"},{"title":"按主题查看 - 区域性股权市场规范发展","source":["www.csrc.gov.cn/csrc/c106301/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c106301"},{"title":"按主题查看 - 期货监管","source":["www.csrc.gov.cn/csrc/c101901/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101901"},{"title":"按主题查看 - 债券监管","source":["www.csrc.gov.cn/csrc/c106306/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c106306"},{"title":"按主题查看 - 行政执法","source":["www.csrc.gov.cn/csrc/c101925/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101925"},{"title":"按主题查看 - 行政复议","source":["www.csrc.gov.cn/csrc/c105938/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c105938"},{"title":"按主题查看 - 国际合作","source":["www.csrc.gov.cn/csrc/c101931/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101931"},{"title":"按主题查看 - 证券服务机构监管","source":["www.csrc.gov.cn/csrc/c105939/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c105939"},{"title":"按主题查看 - 其他","source":["www.csrc.gov.cn/csrc/c101950/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101950"},{"title":"按派出机构查看 - 北京","source":["www.csrc.gov.cn/csrc/c101986/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101986"},{"title":"按派出机构查看 - 天津","source":["www.csrc.gov.cn/csrc/c101987/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101987"},{"title":"按派出机构查看 - 河北","source":["www.csrc.gov.cn/csrc/c101988/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101988"},{"title":"按派出机构查看 - 山西","source":["www.csrc.gov.cn/csrc/c101989/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101989"},{"title":"按派出机构查看 - 内蒙古","source":["www.csrc.gov.cn/csrc/c101990/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101990"},{"title":"按派出机构查看 - 辽宁","source":["www.csrc.gov.cn/csrc/c101991/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101991"},{"title":"按派出机构查看 - 吉林","source":["www.csrc.gov.cn/csrc/c101992/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101992"},{"title":"按派出机构查看 - 黑龙江","source":["www.csrc.gov.cn/csrc/c101993/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101993"},{"title":"按派出机构查看 - 上海","source":["www.csrc.gov.cn/csrc/c101994/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101994"},{"title":"按派出机构查看 - 江苏","source":["www.csrc.gov.cn/csrc/c101995/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101995"},{"title":"按派出机构查看 - 浙江","source":["www.csrc.gov.cn/csrc/c101996/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101996"},{"title":"按派出机构查看 - 安徽","source":["www.csrc.gov.cn/csrc/c101997/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101997"},{"title":"按派出机构查看 - 福建","source":["www.csrc.gov.cn/csrc/c101998/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101998"},{"title":"按派出机构查看 - 江西","source":["www.csrc.gov.cn/csrc/c101999/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101999"},{"title":"按派出机构查看 - 山东","source":["www.csrc.gov.cn/csrc/c102000/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102000"},{"title":"按派出机构查看 - 河南","source":["www.csrc.gov.cn/csrc/c102001/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102001"},{"title":"按派出机构查看 - 湖北","source":["www.csrc.gov.cn/csrc/c102002/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102002"},{"title":"按派出机构查看 - 湖南","source":["www.csrc.gov.cn/csrc/c102003/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102003"},{"title":"按派出机构查看 - 广东","source":["www.csrc.gov.cn/csrc/c102004/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102004"},{"title":"按派出机构查看 - 广西","source":["www.csrc.gov.cn/csrc/c102005/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102005"},{"title":"按派出机构查看 - 海南","source":["www.csrc.gov.cn/csrc/c102006/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102006"},{"title":"按派出机构查看 - 重庆","source":["www.csrc.gov.cn/csrc/c102007/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102007"},{"title":"按派出机构查看 - 四川","source":["www.csrc.gov.cn/csrc/c102008/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102008"},{"title":"按派出机构查看 - 贵州","source":["www.csrc.gov.cn/csrc/c102009/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102009"},{"title":"按派出机构查看 - 云南","source":["www.csrc.gov.cn/csrc/c102010/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102010"},{"title":"按派出机构查看 - 西藏","source":["www.csrc.gov.cn/csrc/c102011/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102011"},{"title":"按派出机构查看 - 陕西","source":["www.csrc.gov.cn/csrc/c102012/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102012"},{"title":"按派出机构查看 - 甘肃","source":["www.csrc.gov.cn/csrc/c102013/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102013"},{"title":"按派出机构查看 - 青海","source":["www.csrc.gov.cn/csrc/c102014/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102014"},{"title":"按派出机构查看 - 宁夏","source":["www.csrc.gov.cn/csrc/c102015/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102015"},{"title":"按派出机构查看 - 新疆","source":["www.csrc.gov.cn/csrc/c102016/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102016"},{"title":"按派出机构查看 - 深圳","source":["www.csrc.gov.cn/csrc/c102017/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102017"},{"title":"按派出机构查看 - 大连","source":["www.csrc.gov.cn/csrc/c102018/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102018"},{"title":"按派出机构查看 - 宁波","source":["www.csrc.gov.cn/csrc/c102019/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102019"},{"title":"按派出机构查看 - 厦门","source":["www.csrc.gov.cn/csrc/c102020/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102020"},{"title":"按派出机构查看 - 青岛","source":["www.csrc.gov.cn/csrc/c102021/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c102021"},{"title":"按派出机构查看 - 上海专员办","source":["www.csrc.gov.cn/csrc/c105841/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c105841"},{"title":"按派出机构查看 - 深圳专员办","source":["www.csrc.gov.cn/csrc/c105842/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c105842"},{"title":"综合政务 - 组织机构","source":["www.csrc.gov.cn/csrc/c101795/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101795"},{"title":"综合政务 - 征求意见","source":["www.csrc.gov.cn/csrc/c101796/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101796"},{"title":"综合政务 - 废止规章","source":["www.csrc.gov.cn/csrc/c101797/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101797"},{"title":"综合政务 - 财务预算管理","source":["www.csrc.gov.cn/csrc/c105887/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c105887"},{"title":"综合政务 - 其他","source":["www.csrc.gov.cn/csrc/c101799/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101799"},{"title":"综合政务 - 全国人大建议和政协提案复文公开","source":["www.csrc.gov.cn/csrc/c101800/zfxxgk_zdgk.shtml"],"target":"/csrc/zfxxgk_zdgk/c101800"}],"location":"csrc/csrc.ts","heat":1220,"topFeeds":[{"id":"65722745603688448","type":"feed","url":"rsshub://gov/csrc/zfxxgk_zdgk/c101971","title":"中国证券监督管理委员会 - 行政处罚决定","description":"行政处罚决定 - Powered by RSSHub","image":"http://www.csrc.gov.cn/csrc/xhtml/images/zfxxgk/icons_logo.png?v=1.0?v=1.0"},{"id":"66728516715627520","type":"feed","url":"rsshub://gov/csrc/zfxxgk_zdgk/c101794","title":"中国证券监督管理委员会 - 综合政务","description":"综合政务 - Powered by RSSHub","image":"http://www.csrc.gov.cn/csrc/xhtml/images/zfxxgk/icons_logo.png?v=1.0?v=1.0"}]}' :test='{"code":0}' />

::: tip
  若订阅 [行政处罚决定](http://www.csrc.gov.cn/csrc/c101971/zfxxgk_zdgk.shtml)，网址为 `http://www.csrc.gov.cn/csrc/c101971/zfxxgk_zdgk.shtml`。截取 `http://www.csrc.gov.cn/csrc/` 到末尾 `/zfxxgk_zdgk.shtml` 的部分 `c101971` 作为参数填入，此时路由为 [`/gov/csrc/zfxxgk_zdgk/c101971`](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101971)。
:::

#### [主动公开目录](http://www.csrc.gov.cn/csrc/c100035/zfxxgk_zdgk.shtml)

| 频道                                                                    | ID                                                         |
| ----------------------------------------------------------------------- | ---------------------------------------------------------- |
| [按主题查看](http://www.csrc.gov.cn/csrc/c101793/zfxxgk_zdgk.shtml)     | [c101793](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101793) |
| [按体裁文种查看](http://www.csrc.gov.cn/csrc/c101951/zfxxgk_zdgk.shtml) | [c101951](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101951) |
| [按派出机构查看](http://www.csrc.gov.cn/csrc/c101985/zfxxgk_zdgk.shtml) | [c101985](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101985) |

<details>
<summary>更多频道</summary>

#### [按主题查看](http://www.csrc.gov.cn/csrc/c101793/zfxxgk_zdgk.shtml)

| 频道                                                                              | ID                                                         |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [综合政务](http://www.csrc.gov.cn/csrc/c101794/zfxxgk_zdgk.shtml)                 | [c101794](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101794) |
| [发行监管](http://www.csrc.gov.cn/csrc/c101801/zfxxgk_zdgk.shtml)                 | [c101801](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101801) |
| [公众公司监管（含北交所）](http://www.csrc.gov.cn/csrc/c101828/zfxxgk_zdgk.shtml) | [c101828](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101828) |
| [证券交易监管](http://www.csrc.gov.cn/csrc/c101832/zfxxgk_zdgk.shtml)             | [c101832](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101832) |
| [证券经营机构监管](http://www.csrc.gov.cn/csrc/c101837/zfxxgk_zdgk.shtml)         | [c101837](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101837) |
| [上市公司监管](http://www.csrc.gov.cn/csrc/c101863/zfxxgk_zdgk.shtml)             | [c101863](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101863) |
| [基金监管](http://www.csrc.gov.cn/csrc/c101876/zfxxgk_zdgk.shtml)                 | [c101876](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101876) |
| [私募基金监管](http://www.csrc.gov.cn/csrc/c101938/zfxxgk_zdgk.shtml)             | [c101938](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101938) |
| [区域性股权市场规范发展](http://www.csrc.gov.cn/csrc/c106301/zfxxgk_zdgk.shtml)   | [c106301](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c106301) |
| [期货监管](http://www.csrc.gov.cn/csrc/c101901/zfxxgk_zdgk.shtml)                 | [c101901](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101901) |
| [债券监管](http://www.csrc.gov.cn/csrc/c106306/zfxxgk_zdgk.shtml)                 | [c106306](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c106306) |
| [行政执法](http://www.csrc.gov.cn/csrc/c101925/zfxxgk_zdgk.shtml)                 | [c101925](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101925) |
| [行政复议](http://www.csrc.gov.cn/csrc/c105938/zfxxgk_zdgk.shtml)                 | [c105938](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105938) |
| [国际合作](http://www.csrc.gov.cn/csrc/c101931/zfxxgk_zdgk.shtml)                 | [c101931](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101931) |
| [证券服务机构监管](http://www.csrc.gov.cn/csrc/c105939/zfxxgk_zdgk.shtml)         | [c105939](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105939) |
| [其他](http://www.csrc.gov.cn/csrc/c101950/zfxxgk_zdgk.shtml)                     | [c101950](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101950) |

#### [按体裁文种查看](http://www.csrc.gov.cn/csrc/c101951/zfxxgk_zdgk.shtml)

| 频道                                                                        | ID                                                         |
| --------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [机构职能](http://www.csrc.gov.cn/csrc/c101952/zfxxgk_zdgk.shtml)           | [c101952](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101952) |
| [证监会令](http://www.csrc.gov.cn/csrc/c101953/zfxxgk_zdgk.shtml)           | [c101953](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101953) |
| [证监会公告](http://www.csrc.gov.cn/csrc/c101954/zfxxgk_zdgk.shtml)         | [c101954](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101954) |
| [监管规则适用指引](http://www.csrc.gov.cn/csrc/c105948/zfxxgk_zdgk.shtml)   | [c105948](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105948) |
| [行政许可批复](http://www.csrc.gov.cn/csrc/c101955/zfxxgk_zdgk.shtml)       | [c101955](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101955) |
| [办事指南](http://www.csrc.gov.cn/csrc/c101968/zfxxgk_zdgk.shtml)           | [c101968](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101968) |
| [监管对象](http://www.csrc.gov.cn/csrc/c101969/zfxxgk_zdgk.shtml)           | [c101969](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101969) |
| [统计信息](http://www.csrc.gov.cn/csrc/c101970/zfxxgk_zdgk.shtml)           | [c101970](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101970) |
| [行政处罚决定](http://www.csrc.gov.cn/csrc/c101971/zfxxgk_zdgk.shtml)       | [c101971](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101971) |
| [市场禁入决定](http://www.csrc.gov.cn/csrc/c101972/zfxxgk_zdgk.shtml)       | [c101972](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101972) |
| [行政执法当事人承诺](http://www.csrc.gov.cn/csrc/c106416/zfxxgk_zdgk.shtml) | [c106416](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c106416) |
| [行政复议](http://www.csrc.gov.cn/csrc/c101973/zfxxgk_zdgk.shtml)           | [c101973](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101973) |
| [监管措施](http://www.csrc.gov.cn/csrc/c105955/zfxxgk_zdgk.shtml)           | [c105955](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105955) |
| [预先披露](http://www.csrc.gov.cn/csrc/c101974/zfxxgk_zdgk.shtml)           | [c101974](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101974) |
| [发审会公告](http://www.csrc.gov.cn/csrc/c101975/zfxxgk_zdgk.shtml)         | [c101975](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101975) |
| [重组委公告](http://www.csrc.gov.cn/csrc/c101976/zfxxgk_zdgk.shtml)         | [c101976](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101976) |
| [规划报告](http://www.csrc.gov.cn/csrc/c101977/zfxxgk_zdgk.shtml)           | [c101977](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101977) |
| [非行政许可事项](http://www.csrc.gov.cn/csrc/c101978/zfxxgk_zdgk.shtml)     | [c101978](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101978) |
| [其他](http://www.csrc.gov.cn/csrc/c101979/zfxxgk_zdgk.shtml)               | [c101979](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101979) |
| [备案管理](http://www.csrc.gov.cn/csrc/c106402/zfxxgk_zdgk.shtml)           | [c106402](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c106402) |

#### [按派出机构查看](http://www.csrc.gov.cn/csrc/c101985/zfxxgk_zdgk.shtml)

| 频道                                                                | ID                                                         |
| ------------------------------------------------------------------- | ---------------------------------------------------------- |
| [北京](http://www.csrc.gov.cn/csrc/c101986/zfxxgk_zdgk.shtml)       | [c101986](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101986) |
| [天津](http://www.csrc.gov.cn/csrc/c101987/zfxxgk_zdgk.shtml)       | [c101987](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101987) |
| [河北](http://www.csrc.gov.cn/csrc/c101988/zfxxgk_zdgk.shtml)       | [c101988](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101988) |
| [山西](http://www.csrc.gov.cn/csrc/c101989/zfxxgk_zdgk.shtml)       | [c101989](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101989) |
| [内蒙古](http://www.csrc.gov.cn/csrc/c101990/zfxxgk_zdgk.shtml)     | [c101990](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101990) |
| [辽宁](http://www.csrc.gov.cn/csrc/c101991/zfxxgk_zdgk.shtml)       | [c101991](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101991) |
| [吉林](http://www.csrc.gov.cn/csrc/c101992/zfxxgk_zdgk.shtml)       | [c101992](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101992) |
| [黑龙江](http://www.csrc.gov.cn/csrc/c101993/zfxxgk_zdgk.shtml)     | [c101993](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101993) |
| [上海](http://www.csrc.gov.cn/csrc/c101994/zfxxgk_zdgk.shtml)       | [c101994](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101994) |
| [江苏](http://www.csrc.gov.cn/csrc/c101995/zfxxgk_zdgk.shtml)       | [c101995](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101995) |
| [浙江](http://www.csrc.gov.cn/csrc/c101996/zfxxgk_zdgk.shtml)       | [c101996](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101996) |
| [安徽](http://www.csrc.gov.cn/csrc/c101997/zfxxgk_zdgk.shtml)       | [c101997](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101997) |
| [福建](http://www.csrc.gov.cn/csrc/c101998/zfxxgk_zdgk.shtml)       | [c101998](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101998) |
| [江西](http://www.csrc.gov.cn/csrc/c101999/zfxxgk_zdgk.shtml)       | [c101999](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101999) |
| [山东](http://www.csrc.gov.cn/csrc/c102000/zfxxgk_zdgk.shtml)       | [c102000](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102000) |
| [河南](http://www.csrc.gov.cn/csrc/c102001/zfxxgk_zdgk.shtml)       | [c102001](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102001) |
| [湖北](http://www.csrc.gov.cn/csrc/c102002/zfxxgk_zdgk.shtml)       | [c102002](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102002) |
| [湖南](http://www.csrc.gov.cn/csrc/c102003/zfxxgk_zdgk.shtml)       | [c102003](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102003) |
| [广东](http://www.csrc.gov.cn/csrc/c102004/zfxxgk_zdgk.shtml)       | [c102004](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102004) |
| [广西](http://www.csrc.gov.cn/csrc/c102005/zfxxgk_zdgk.shtml)       | [c102005](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102005) |
| [海南](http://www.csrc.gov.cn/csrc/c102006/zfxxgk_zdgk.shtml)       | [c102006](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102006) |
| [重庆](http://www.csrc.gov.cn/csrc/c102007/zfxxgk_zdgk.shtml)       | [c102007](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102007) |
| [四川](http://www.csrc.gov.cn/csrc/c102008/zfxxgk_zdgk.shtml)       | [c102008](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102008) |
| [贵州](http://www.csrc.gov.cn/csrc/c102009/zfxxgk_zdgk.shtml)       | [c102009](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102009) |
| [云南](http://www.csrc.gov.cn/csrc/c102010/zfxxgk_zdgk.shtml)       | [c102010](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102010) |
| [西藏](http://www.csrc.gov.cn/csrc/c102011/zfxxgk_zdgk.shtml)       | [c102011](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102011) |
| [陕西](http://www.csrc.gov.cn/csrc/c102012/zfxxgk_zdgk.shtml)       | [c102012](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102012) |
| [甘肃](http://www.csrc.gov.cn/csrc/c102013/zfxxgk_zdgk.shtml)       | [c102013](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102013) |
| [青海](http://www.csrc.gov.cn/csrc/c102014/zfxxgk_zdgk.shtml)       | [c102014](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102014) |
| [宁夏](http://www.csrc.gov.cn/csrc/c102015/zfxxgk_zdgk.shtml)       | [c102015](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102015) |
| [新疆](http://www.csrc.gov.cn/csrc/c102016/zfxxgk_zdgk.shtml)       | [c102016](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102016) |
| [深圳](http://www.csrc.gov.cn/csrc/c102017/zfxxgk_zdgk.shtml)       | [c102017](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102017) |
| [大连](http://www.csrc.gov.cn/csrc/c102018/zfxxgk_zdgk.shtml)       | [c102018](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102018) |
| [宁波](http://www.csrc.gov.cn/csrc/c102019/zfxxgk_zdgk.shtml)       | [c102019](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102019) |
| [厦门](http://www.csrc.gov.cn/csrc/c102020/zfxxgk_zdgk.shtml)       | [c102020](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102020) |
| [青岛](http://www.csrc.gov.cn/csrc/c102021/zfxxgk_zdgk.shtml)       | [c102021](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c102021) |
| [上海专员办](http://www.csrc.gov.cn/csrc/c105841/zfxxgk_zdgk.shtml) | [c105841](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105841) |
| [深圳专员办](http://www.csrc.gov.cn/csrc/c105842/zfxxgk_zdgk.shtml) | [c105842](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105842) |

#### [综合政务](http://www.csrc.gov.cn/csrc/c101794/zfxxgk_zdgk.shtml)

| 频道                                                                                    | ID                                                         |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [组织机构](http://www.csrc.gov.cn/csrc/c101795/zfxxgk_zdgk.shtml)                       | [c101795](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101795) |
| [征求意见](http://www.csrc.gov.cn/csrc/c101796/zfxxgk_zdgk.shtml)                       | [c101796](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101796) |
| [废止规章](http://www.csrc.gov.cn/csrc/c101797/zfxxgk_zdgk.shtml)                       | [c101797](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101797) |
| [财务预算管理](http://www.csrc.gov.cn/csrc/c105887/zfxxgk_zdgk.shtml)                   | [c105887](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c105887) |
| [其他](http://www.csrc.gov.cn/csrc/c101799/zfxxgk_zdgk.shtml)                           | [c101799](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101799) |
| [全国人大建议和政协提案复文公开](http://www.csrc.gov.cn/csrc/c101800/zfxxgk_zdgk.shtml) | [c101800](https://rsshub.app/gov/csrc/zfxxgk_zdgk/c101800) |

</details>
    

### 最新文件 <Site url="www.chinatax.gov.cn/*" size="sm" />

<Route namespace="gov" :data='{"path":"/chinatax/latest","categories":["government","popular"],"example":"/gov/chinatax/latest","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.chinatax.gov.cn/*"]}],"name":"最新文件","maintainers":["nczitzk","fuzy112"],"url":"www.chinatax.gov.cn/*","location":"chinatax/latest.ts","heat":1206,"topFeeds":[{"id":"62722084868717571","type":"feed","url":"rsshub://gov/chinatax/latest","title":"国家税务总局 - 最新文件","description":"国家税务总局 - 最新文件 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 通用 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/npc/:caty","categories":["government"],"example":"/gov/npc/c183","parameters":{"caty":"分类名，支持形如 `http://www.npc.gov.cn/npc/c2/*/` 的网站，传入 npc 之后的参数"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["npc.gov.cn/npc/c2/:caty"]}],"name":"通用","maintainers":["233yeee"],"description":"| 立法 | 监督 | 代表 | 理论 | 权威发布 | 滚动新闻 |\n| ---- | ---- | ---- | ---- | -------- | -------- |\n| c183 | c184 | c185 | c189 | c12435   | c10134   |","location":"npc/index.ts","heat":1140,"topFeeds":[{"id":"76238928708564992","type":"feed","url":"rsshub://gov/npc/c12435","title":"权威发布_中国人大网","description":"权威发布_中国人大网 - Powered by RSSHub","image":null},{"id":"62717033472135175","type":"feed","url":"rsshub://gov/npc/c183","title":"立法_中国人大网","description":"立法_中国人大网 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 立法 | 监督 | 代表 | 理论 | 权威发布 | 滚动新闻 |
| ---- | ---- | ---- | ---- | -------- | -------- |
| c183 | c184 | c185 | c189 | c12435   | c10134   |

### 新闻 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/moe/:type","categories":["government"],"example":"/gov/moe/policy_anal","parameters":{"type":"分类名"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"新闻","maintainers":["Crawler995"],"description":"|   政策解读   |   最新文件   | 公告公示 |      教育部简报     |     教育要闻     |\n| :----------: | :----------: | :------: | :-----------------: | :--------------: |\n| policy_anal | newest_file |  notice  | edu_ministry_news | edu_focus_news |","location":"moe/moe.ts","heat":172,"topFeeds":[{"id":"42176727615320071","type":"feed","url":"rsshub://gov/moe/policy_anal","title":"政策解读","description":"政策解读 - Powered by RSSHub","image":null},{"id":"71386837481924626","type":"feed","url":"rsshub://gov/moe/notice","title":"公告公示","description":"公告公示 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

|   政策解读   |   最新文件   | 公告公示 |      教育部简报     |     教育要闻     |
| :----------: | :----------: | :------: | :-----------------: | :--------------: |
| policy_anal | newest_file |  notice  | edu_ministry_news | edu_focus_news |

### 发展改革工作 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/ndrc/fggz/:category{.+}?","name":"发展改革工作","example":"/gov/ndrc/fggz","parameters":{"category":"分类，见下表，默认为全部"},"maintainers":["nczitzk"],"categories":["government"],"description":"::: details 全部分类\n\n#### 机关办公\n\n| 业务工作  | 学思践悟  |\n| --------- | --------- |\n| jgbg/ywgz | jgbg/xsjw |\n\n#### 发改政研\n\n| 经济数据概览 | 社会关切回应 | 新媒体解读 |\n| ------------ | ------------ | ---------- |\n| fgzy/jjsjgl  | fgzy/shgqhy  | fgzy/xmtjd |\n\n#### 发展战略和规划\n\n| 国家发展战略和规划 | 国家级专项规划 | 地方发展规划  | 发展规划工作  |\n| ------------------ | -------------- | ------------- | ------------- |\n| fzzlgh/gjfzgh      | fzzlgh/gjjzxgh | fzzlgh/dffzgh | fzzlgh/fzgggz |\n\n#### 发改综合\n\n| 国内经济监测 | 工业经济         | 投资运行         | 市场消费         |\n| ------------ | ---------------- | ---------------- | ---------------- |\n| fgzh/gnjjjc  | fgzh/gnjjjc/gyjj | fgzh/gnjjjc/tzyx | fgzh/gnjjjc/scxf |\n\n| 价格情况         | 财政收支         | 货币金融         | 就业情况         |\n| ---------------- | ---------------- | ---------------- | ---------------- |\n| fgzh/gnjjjc/jgqk | fgzh/gnjjjc/czsz | fgzh/gnjjjc/hbjr | fgzh/gnjjjc/jyqk |\n\n| 地区经济         | 国际经济监测 | 先行指数         | 大宗商品市场情况     |\n| ---------------- | ------------ | ---------------- | -------------------- |\n| fgzh/gnjjjc/dqjj | fgzh/gjjjjc  | fgzh/gjjjjc/xxzs | fgzh/gjjjjc/dzspscqk |\n\n| 国别分析         | 国际组织预测和研究动态 | 国际组织预测            | 国际组织研究动态          |\n| ---------------- | ---------------------- | ----------------------- | ------------------------- |\n| fgzh/gjjjjc/gbfx | fgzh/gjzzychyjdt       | fgzh/gjzzychyjdt/gjzzyc | fgzh/gjzzychyjdt/gjzzyjdt |\n\n#### 经济运行与调节\n\n| 宏观经济运行  | 地方经济运行  | 煤电油气运   | 现代物流    |\n| ------------- | ------------- | ------------ | ----------- |\n| jjyxtj/hgjjyx | jjyxtj/dfjjyx | jjyxtj/mdyqy | jjyxtj/xdwl |\n\n#### 体制改革\n\n| 改革快讯  | 半月改革动态 | 地方改革经验 |\n| --------- | ------------ | ------------ |\n| tzgg/ggkx | tzgg/byggdt  | tzgg/dfggjx  |\n\n#### 固定资产投资\n\n| 投资法规与政策动态 |\n| ------------------ |\n| gdzctz/tzfg        |\n\n#### 利用外资和境外投资\n\n| 境外投资    | 外商投资    | 外债管理    | 政策法规    |\n| ----------- | ----------- | ----------- | ----------- |\n| lywzjw/jwtz | lywzjw/wstz | lywzjw/wzgl | lywzjw/zcfg |\n\n#### 地区经济\n\n| 重大战略  | 四大板块  | 国土海洋流域新区 |\n| --------- | --------- | ---------------- |\n| dqjj/zdzl | dqjj/sdbk | dqjj/qt          |\n\n#### 地区振兴\n\n| 巩固拓展脱贫攻坚成果和欠发达地区振兴发展 | 对口支援与合作 | 革命老区振兴发展 | 生态退化地区治理 |\n| ---------------------------------------- | -------------- | ---------------- | ---------------- |\n| dqzx/tpgjypkfq                           | dqzx/dkzyyhz   | dqzx/gglqzxfz    | dqzx/stthdqzl    |\n\n#### 区域开放\n\n| 信息集萃  |\n| --------- |\n| qykf/xxjc |\n\n#### 农业农村经济\n\n| 重点建设    | 投资指南    | 乡村振兴    | 农经信息    |\n| ----------- | ----------- | ----------- | ----------- |\n| nyncjj/zdjs | nyncjj/tzzn | nyncjj/xczx | nyncjj/njxx |\n\n#### 基础设施发展\n\n| 政策规划    | 城轨监管    | 重大工程    | 问题研究    |\n| ----------- | ----------- | ----------- | ----------- |\n| zcssfz/zcgh | zcssfz/cgjg | zcssfz/zdgc | zcssfz/wtyj |\n\n#### 产业发展\n\n| 制造业发展 | 服务业发展 |\n| ---------- | ---------- |\n| cyfz/zcyfz | cyfz/fwyfz |\n\n#### 创新和高技术发展\n\n| 地方进展      |\n| ------------- |\n| cxhgjsfz/dfjz |\n\n#### 环境与资源\n\n| 碳达峰碳中和 | 生态文明建设 | 节能和能效  | 资源利用和循环经济 |\n| ------------ | ------------ | ----------- | ------------------ |\n| hjyzy/tdftzh | hjyzy/stwmjs | hjyzy/jnhnx | hjyzy/zyzhlyhxhjj  |\n\n#### 就业与收入\n\n| 就业收入社保消费 | 地方经验   |\n| ---------------- | ---------- |\n| jyysr/jysrsbxf   | jyysr/dfjx |\n\n#### 经济贸易\n\n| 重要商品情况 | 对外经贸及政策分析 | 流通业发展 |\n| ------------ | ------------------ | ---------- |\n| jjmy/zyspqk  | jjmy/dwjmjzcfx     | jjmy/ltyfz |\n\n#### 财金信用\n\n| 工作动态    |\n| ----------- |\n| cjxy/gzdt03 |\n\n#### 价格管理\n\n| 地方工作  |\n| --------- |\n| jggl/dfgz |\n\n#### 发改法规\n\n| 地方信息  |\n| --------- |\n| fgfg/dfxx |\n\n#### 国际合作\n\n| 世经动态  |\n| --------- |\n| gjhz/zywj |\n\n#### 干部之家\n\n| 系统风采  | 人才招聘  | 委属工作  | 学习园地  |\n| --------- | --------- | --------- | --------- |\n| gbzj/xtfc | gbzj/rczp | gbzj/wsgz | gbzj/xxyd |\n\n#### 评估督导\n\n| 评督动态  | 评督经验  |\n| --------- | --------- |\n| pgdd/pddt | pgdd/pdjy |\n\n#### 发改党建\n\n| 中央精神  | 机关党建  | 委属党建  | 系统党建  |\n| --------- | --------- | --------- | --------- |\n| fgdj/zydj | fgdj/jgdj | fgdj/wsdj | fgdj/xtdj |\n\n#### 发改金辉\n\n| 党建之窗  | 系统交流  | 学习园地  | 金色夕阳  |\n| --------- | --------- | --------- | --------- |\n| fgjh/djzc | fgjh/zthd | fgjh/yxyd | fgjh/jsxy |\n\n:::","radar":[{"title":"发展改革工作","source":["ndrc.gov.cn/fggz/:category*"]},{"title":"机关办公 - 业务工作","source":["ndrc.gov.cn/fggz/jgbg/ywgz"],"target":"/ndrc/fggz/jgbg/ywgz"},{"title":"机关办公 - 学思践悟","source":["ndrc.gov.cn/fggz/jgbg/xsjw"],"target":"/ndrc/fggz/jgbg/xsjw"},{"title":"发改政研 - 经济数据概览","source":["ndrc.gov.cn/fggz/fgzy/jjsjgl"],"target":"/ndrc/fggz/fgzy/jjsjgl"},{"title":"发改政研 - 社会关切回应","source":["ndrc.gov.cn/fggz/fgzy/shgqhy"],"target":"/ndrc/fggz/fgzy/shgqhy"},{"title":"发改政研 - 新媒体解读","source":["ndrc.gov.cn/fggz/fgzy/xmtjd"],"target":"/ndrc/fggz/fgzy/xmtjd"},{"title":"发展战略和规划 - 国家发展战略和规划","source":["ndrc.gov.cn/fggz/fzzlgh/gjfzgh"],"target":"/ndrc/fggz/fzzlgh/gjfzgh"},{"title":"发展战略和规划 - 国家级专项规划","source":["ndrc.gov.cn/fggz/fzzlgh/gjjzxgh"],"target":"/ndrc/fggz/fzzlgh/gjjzxgh"},{"title":"发展战略和规划 - 地方发展规划","source":["ndrc.gov.cn/fggz/fzzlgh/dffzgh"],"target":"/ndrc/fggz/fzzlgh/dffzgh"},{"title":"发展战略和规划 - 发展规划工作","source":["ndrc.gov.cn/fggz/fzzlgh/fzgggz"],"target":"/ndrc/fggz/fzzlgh/fzgggz"},{"title":"发改综合 - 国内经济监测","source":["ndrc.gov.cn/fggz/fgzh/gnjjjc"],"target":"/ndrc/fggz/fgzh/gnjjjc"},{"title":"发改综合 - 工业经济","source":["ndrc.gov.cn/fggz/fgzh/gnjjjc/gyjj"],"target":"/ndrc/fggz/fgzh/gnjjjc/gyjj"},{"title":"发改综合 - 投资运行","source":["ndrc.gov.cn/fggz/fgzh/gnjjjc/tzyx"],"target":"/ndrc/fggz/fgzh/gnjjjc/tzyx"},{"title":"发改综合 - 市场消费","source":["ndrc.gov.cn/fggz/fgzh/gnjjjc/scxf"],"target":"/ndrc/fggz/fgzh/gnjjjc/scxf"},{"title":"发改综合 - 价格情况","source":["ndrc.gov.cn/fggz/fgzh/gnjjjc/jgqk"],"target":"/ndrc/fggz/fgzh/gnjjjc/jgqk"},{"title":"发改综合 - 财政收支","source":["ndrc.gov.cn/fggz/fgzh/gnjjjc/czsz"],"target":"/ndrc/fggz/fgzh/gnjjjc/czsz"},{"title":"发改综合 - 货币金融","source":["ndrc.gov.cn/fggz/fgzh/gnjjjc/hbjr"],"target":"/ndrc/fggz/fgzh/gnjjjc/hbjr"},{"title":"发改综合 - 就业情况","source":["ndrc.gov.cn/fggz/fgzh/gnjjjc/jyqk"],"target":"/ndrc/fggz/fgzh/gnjjjc/jyqk"},{"title":"发改综合 - 地区经济","source":["ndrc.gov.cn/fggz/fgzh/gnjjjc/dqjj"],"target":"/ndrc/fggz/fgzh/gnjjjc/dqjj"},{"title":"发改综合 - 国际经济监测","source":["ndrc.gov.cn/fggz/fgzh/gjjjjc"],"target":"/ndrc/fggz/fgzh/gjjjjc"},{"title":"发改综合 - 先行指数","source":["ndrc.gov.cn/fggz/fgzh/gjjjjc/xxzs"],"target":"/ndrc/fggz/fgzh/gjjjjc/xxzs"},{"title":"发改综合 - 大宗商品市场情况","source":["ndrc.gov.cn/fggz/fgzh/gjjjjc/dzspscqk"],"target":"/ndrc/fggz/fgzh/gjjjjc/dzspscqk"},{"title":"发改综合 - 国别分析","source":["ndrc.gov.cn/fggz/fgzh/gjjjjc/gbfx"],"target":"/ndrc/fggz/fgzh/gjjjjc/gbfx"},{"title":"发改综合 - 国际组织预测和研究动态","source":["ndrc.gov.cn/fggz/fgzh/gjzzychyjdt"],"target":"/ndrc/fggz/fgzh/gjzzychyjdt"},{"title":"发改综合 - 国际组织预测","source":["ndrc.gov.cn/fggz/fgzh/gjzzychyjdt/gjzzyc"],"target":"/ndrc/fggz/fgzh/gjzzychyjdt/gjzzyc"},{"title":"发改综合 - 国际组织研究动态","source":["ndrc.gov.cn/fggz/fgzh/gjzzychyjdt/gjzzyjdt"],"target":"/ndrc/fggz/fgzh/gjzzychyjdt/gjzzyjdt"},{"title":"经济运行与调节 - 宏观经济运行","source":["ndrc.gov.cn/fggz/jjyxtj/hgjjyx"],"target":"/ndrc/fggz/jjyxtj/hgjjyx"},{"title":"经济运行与调节 - 地方经济运行","source":["ndrc.gov.cn/fggz/jjyxtj/dfjjyx"],"target":"/ndrc/fggz/jjyxtj/dfjjyx"},{"title":"经济运行与调节 - 煤电油气运","source":["ndrc.gov.cn/fggz/jjyxtj/mdyqy"],"target":"/ndrc/fggz/jjyxtj/mdyqy"},{"title":"经济运行与调节 - 现代物流","source":["ndrc.gov.cn/fggz/jjyxtj/xdwl"],"target":"/ndrc/fggz/jjyxtj/xdwl"},{"title":"经济运行与调节 - 应急管理","source":["ndrc.gov.cn/fggz/jjyxtj/yjgl"],"target":"/ndrc/fggz/jjyxtj/yjgl"},{"title":"体制改革 - 改革快讯","source":["ndrc.gov.cn/fggz/tzgg/ggkx"],"target":"/ndrc/fggz/tzgg/ggkx"},{"title":"体制改革 - 半月改革动态","source":["ndrc.gov.cn/fggz/tzgg/byggdt"],"target":"/ndrc/fggz/tzgg/byggdt"},{"title":"体制改革 - 地方改革经验","source":["ndrc.gov.cn/fggz/tzgg/dfggjx"],"target":"/ndrc/fggz/tzgg/dfggjx"},{"title":"固定资产投资 - 投资法规与政策动态","source":["ndrc.gov.cn/fggz/gdzctz/tzfg"],"target":"/ndrc/fggz/gdzctz/tzfg"},{"title":"利用外资和境外投资 - 境外投资","source":["ndrc.gov.cn/fggz/lywzjw/jwtz"],"target":"/ndrc/fggz/lywzjw/jwtz"},{"title":"利用外资和境外投资 - 外商投资","source":["ndrc.gov.cn/fggz/lywzjw/wstz"],"target":"/ndrc/fggz/lywzjw/wstz"},{"title":"利用外资和境外投资 - 外债管理","source":["ndrc.gov.cn/fggz/lywzjw/wzgl"],"target":"/ndrc/fggz/lywzjw/wzgl"},{"title":"利用外资和境外投资 - 政策法规","source":["ndrc.gov.cn/fggz/lywzjw/zcfg"],"target":"/ndrc/fggz/lywzjw/zcfg"},{"title":"地区经济 - 重大战略","source":["ndrc.gov.cn/fggz/dqjj/zdzl"],"target":"/ndrc/fggz/dqjj/zdzl"},{"title":"地区经济 - 四大板块","source":["ndrc.gov.cn/fggz/dqjj/sdbk"],"target":"/ndrc/fggz/dqjj/sdbk"},{"title":"地区经济 - 国土海洋流域新区","source":["ndrc.gov.cn/fggz/dqjj/qt"],"target":"/ndrc/fggz/dqjj/qt"},{"title":"地区振兴 - 巩固拓展脱贫攻坚成果和欠发达地区振兴发展","source":["ndrc.gov.cn/fggz/dqzx/tpgjypkfq"],"target":"/ndrc/fggz/dqzx/tpgjypkfq"},{"title":"地区振兴 - 对口支援与合作","source":["ndrc.gov.cn/fggz/dqzx/dkzyyhz"],"target":"/ndrc/fggz/dqzx/dkzyyhz"},{"title":"地区振兴 - 革命老区振兴发展","source":["ndrc.gov.cn/fggz/dqzx/gglqzxfz"],"target":"/ndrc/fggz/dqzx/gglqzxfz"},{"title":"地区振兴 - 生态退化地区治理","source":["ndrc.gov.cn/fggz/dqzx/stthdqzl"],"target":"/ndrc/fggz/dqzx/stthdqzl"},{"title":"地区振兴 - 资源型地区转型发展","source":["ndrc.gov.cn/fggz/dqzx/zyxdqzxfz"],"target":"/ndrc/fggz/dqzx/zyxdqzxfz"},{"title":"地区振兴 - 老工业地区振兴发展","source":["ndrc.gov.cn/fggz/dqzx/lzydfzxfz"],"target":"/ndrc/fggz/dqzx/lzydfzxfz"},{"title":"区域开放 - 信息集萃","source":["ndrc.gov.cn/fggz/qykf/xxjc"],"target":"/ndrc/fggz/qykf/xxjc"},{"title":"农业农村经济 - 重点建设","source":["ndrc.gov.cn/fggz/nyncjj/zdjs"],"target":"/ndrc/fggz/nyncjj/zdjs"},{"title":"农业农村经济 - 投资指南","source":["ndrc.gov.cn/fggz/nyncjj/tzzn"],"target":"/ndrc/fggz/nyncjj/tzzn"},{"title":"农业农村经济 - 乡村振兴","source":["ndrc.gov.cn/fggz/nyncjj/xczx"],"target":"/ndrc/fggz/nyncjj/xczx"},{"title":"农业农村经济 - 农经信息","source":["ndrc.gov.cn/fggz/nyncjj/njxx"],"target":"/ndrc/fggz/nyncjj/njxx"},{"title":"基础设施发展 - 政策规划","source":["ndrc.gov.cn/fggz/zcssfz/zcgh"],"target":"/ndrc/fggz/zcssfz/zcgh"},{"title":"基础设施发展 - 城轨监管","source":["ndrc.gov.cn/fggz/zcssfz/cgjg"],"target":"/ndrc/fggz/zcssfz/cgjg"},{"title":"基础设施发展 - 重大工程","source":["ndrc.gov.cn/fggz/zcssfz/zdgc"],"target":"/ndrc/fggz/zcssfz/zdgc"},{"title":"基础设施发展 - 问题研究","source":["ndrc.gov.cn/fggz/zcssfz/wtyj"],"target":"/ndrc/fggz/zcssfz/wtyj"},{"title":"基础设施发展 - 行业数据","source":["ndrc.gov.cn/fggz/zcssfz/hysj"],"target":"/ndrc/fggz/zcssfz/hysj"},{"title":"基础设施发展 - 地方发展","source":["ndrc.gov.cn/fggz/zcssfz/dffz"],"target":"/ndrc/fggz/zcssfz/dffz"},{"title":"产业发展 - 制造业发展","source":["ndrc.gov.cn/fggz/cyfz/zcyfz"],"target":"/ndrc/fggz/cyfz/zcyfz"},{"title":"产业发展 - 服务业发展","source":["ndrc.gov.cn/fggz/cyfz/fwyfz"],"target":"/ndrc/fggz/cyfz/fwyfz"},{"title":"创新和高技术发展 - 地方进展","source":["ndrc.gov.cn/fggz/cxhgjsfz/dfjz"],"target":"/ndrc/fggz/cxhgjsfz/dfjz"},{"title":"环境与资源 - 碳达峰碳中和","source":["ndrc.gov.cn/fggz/hjyzy/tdftzh"],"target":"/ndrc/fggz/hjyzy/tdftzh"},{"title":"环境与资源 - 生态文明建设","source":["ndrc.gov.cn/fggz/hjyzy/stwmjs"],"target":"/ndrc/fggz/hjyzy/stwmjs"},{"title":"环境与资源 - 节能和能效","source":["ndrc.gov.cn/fggz/hjyzy/jnhnx"],"target":"/ndrc/fggz/hjyzy/jnhnx"},{"title":"环境与资源 - 资源利用和循环经济","source":["ndrc.gov.cn/fggz/hjyzy/zyzhlyhxhjj"],"target":"/ndrc/fggz/hjyzy/zyzhlyhxhjj"},{"title":"环境与资源 - 水节约与保护","source":["ndrc.gov.cn/fggz/hjyzy/sjyybh"],"target":"/ndrc/fggz/hjyzy/sjyybh"},{"title":"环境与资源 - 环境与保护","source":["ndrc.gov.cn/fggz/hjyzy/hjybh"],"target":"/ndrc/fggz/hjyzy/hjybh"},{"title":"就业与收入 - 就业收入社保消费","source":["ndrc.gov.cn/fggz/jyysr/jysrsbxf"],"target":"/ndrc/fggz/jyysr/jysrsbxf"},{"title":"就业与收入 - 地方经验","source":["ndrc.gov.cn/fggz/jyysr/dfjx"],"target":"/ndrc/fggz/jyysr/dfjx"},{"title":"经济贸易 - 重要商品情况","source":["ndrc.gov.cn/fggz/jjmy/zyspqk"],"target":"/ndrc/fggz/jjmy/zyspqk"},{"title":"经济贸易 - 对外经贸及政策分析","source":["ndrc.gov.cn/fggz/jjmy/dwjmjzcfx"],"target":"/ndrc/fggz/jjmy/dwjmjzcfx"},{"title":"经济贸易 - 流通业发展","source":["ndrc.gov.cn/fggz/jjmy/ltyfz"],"target":"/ndrc/fggz/jjmy/ltyfz"},{"title":"财金信用 - 工作动态","source":["ndrc.gov.cn/fggz/cjxy/gzdt03"],"target":"/ndrc/fggz/cjxy/gzdt03"},{"title":"价格管理 - 地方工作","source":["ndrc.gov.cn/fggz/jggl/dfgz"],"target":"/ndrc/fggz/jggl/dfgz"},{"title":"发改法规 - 地方信息","source":["ndrc.gov.cn/fggz/fgfg/dfxx"],"target":"/ndrc/fggz/fgfg/dfxx"},{"title":"国际合作 - 世经动态","source":["ndrc.gov.cn/fggz/gjhz/zywj"],"target":"/ndrc/fggz/gjhz/zywj"},{"title":"干部之家 - 系统风采","source":["ndrc.gov.cn/fggz/gbzj/xtfc"],"target":"/ndrc/fggz/gbzj/xtfc"},{"title":"干部之家 - 人才招聘","source":["ndrc.gov.cn/fggz/gbzj/rczp"],"target":"/ndrc/fggz/gbzj/rczp"},{"title":"干部之家 - 委属工作","source":["ndrc.gov.cn/fggz/gbzj/wsgz"],"target":"/ndrc/fggz/gbzj/wsgz"},{"title":"干部之家 - 学习园地","source":["ndrc.gov.cn/fggz/gbzj/xxyd"],"target":"/ndrc/fggz/gbzj/xxyd"},{"title":"评估督导 - 评督动态","source":["ndrc.gov.cn/fggz/pgdd/pddt"],"target":"/ndrc/fggz/pgdd/pddt"},{"title":"评估督导 - 评督经验","source":["ndrc.gov.cn/fggz/pgdd/pdjy"],"target":"/ndrc/fggz/pgdd/pdjy"},{"title":"发改党建 - 中央精神","source":["ndrc.gov.cn/fggz/fgdj/zydj"],"target":"/ndrc/fggz/fgdj/zydj"},{"title":"发改党建 - 机关党建","source":["ndrc.gov.cn/fggz/fgdj/jgdj"],"target":"/ndrc/fggz/fgdj/jgdj"},{"title":"发改党建 - 委属党建","source":["ndrc.gov.cn/fggz/fgdj/wsdj"],"target":"/ndrc/fggz/fgdj/wsdj"},{"title":"发改党建 - 系统党建","source":["ndrc.gov.cn/fggz/fgdj/xtdj"],"target":"/ndrc/fggz/fgdj/xtdj"},{"title":"发改金辉 - 党建之窗","source":["ndrc.gov.cn/fggz/fgjh/djzc"],"target":"/ndrc/fggz/fgjh/djzc"},{"title":"发改金辉 - 系统交流","source":["ndrc.gov.cn/fggz/fgjh/zthd"],"target":"/ndrc/fggz/fgjh/zthd"},{"title":"发改金辉 - 学习园地","source":["ndrc.gov.cn/fggz/fgjh/yxyd"],"target":"/ndrc/fggz/fgjh/yxyd"},{"title":"发改金辉 - 金色夕阳","source":["ndrc.gov.cn/fggz/fgjh/jsxy"],"target":"/ndrc/fggz/fgjh/jsxy"}],"location":"ndrc/fggz.ts","heat":144,"topFeeds":[{"id":"61217319804394496","type":"feed","url":"rsshub://gov/ndrc/fggz","title":"发展改革工作-国家发展和改革委员会","description":"发展改革工作 - Powered by RSSHub","image":null},{"id":"114908537709120512","type":"feed","url":"rsshub://gov/ndrc/fggz/hjyzy/tdftzh","title":"碳达峰碳中和-国家发展和改革委员会","description":"碳达峰碳中和-国家发展和改革委员会 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

::: details 全部分类

#### 机关办公

| 业务工作  | 学思践悟  |
| --------- | --------- |
| jgbg/ywgz | jgbg/xsjw |

#### 发改政研

| 经济数据概览 | 社会关切回应 | 新媒体解读 |
| ------------ | ------------ | ---------- |
| fgzy/jjsjgl  | fgzy/shgqhy  | fgzy/xmtjd |

#### 发展战略和规划

| 国家发展战略和规划 | 国家级专项规划 | 地方发展规划  | 发展规划工作  |
| ------------------ | -------------- | ------------- | ------------- |
| fzzlgh/gjfzgh      | fzzlgh/gjjzxgh | fzzlgh/dffzgh | fzzlgh/fzgggz |

#### 发改综合

| 国内经济监测 | 工业经济         | 投资运行         | 市场消费         |
| ------------ | ---------------- | ---------------- | ---------------- |
| fgzh/gnjjjc  | fgzh/gnjjjc/gyjj | fgzh/gnjjjc/tzyx | fgzh/gnjjjc/scxf |

| 价格情况         | 财政收支         | 货币金融         | 就业情况         |
| ---------------- | ---------------- | ---------------- | ---------------- |
| fgzh/gnjjjc/jgqk | fgzh/gnjjjc/czsz | fgzh/gnjjjc/hbjr | fgzh/gnjjjc/jyqk |

| 地区经济         | 国际经济监测 | 先行指数         | 大宗商品市场情况     |
| ---------------- | ------------ | ---------------- | -------------------- |
| fgzh/gnjjjc/dqjj | fgzh/gjjjjc  | fgzh/gjjjjc/xxzs | fgzh/gjjjjc/dzspscqk |

| 国别分析         | 国际组织预测和研究动态 | 国际组织预测            | 国际组织研究动态          |
| ---------------- | ---------------------- | ----------------------- | ------------------------- |
| fgzh/gjjjjc/gbfx | fgzh/gjzzychyjdt       | fgzh/gjzzychyjdt/gjzzyc | fgzh/gjzzychyjdt/gjzzyjdt |

#### 经济运行与调节

| 宏观经济运行  | 地方经济运行  | 煤电油气运   | 现代物流    |
| ------------- | ------------- | ------------ | ----------- |
| jjyxtj/hgjjyx | jjyxtj/dfjjyx | jjyxtj/mdyqy | jjyxtj/xdwl |

#### 体制改革

| 改革快讯  | 半月改革动态 | 地方改革经验 |
| --------- | ------------ | ------------ |
| tzgg/ggkx | tzgg/byggdt  | tzgg/dfggjx  |

#### 固定资产投资

| 投资法规与政策动态 |
| ------------------ |
| gdzctz/tzfg        |

#### 利用外资和境外投资

| 境外投资    | 外商投资    | 外债管理    | 政策法规    |
| ----------- | ----------- | ----------- | ----------- |
| lywzjw/jwtz | lywzjw/wstz | lywzjw/wzgl | lywzjw/zcfg |

#### 地区经济

| 重大战略  | 四大板块  | 国土海洋流域新区 |
| --------- | --------- | ---------------- |
| dqjj/zdzl | dqjj/sdbk | dqjj/qt          |

#### 地区振兴

| 巩固拓展脱贫攻坚成果和欠发达地区振兴发展 | 对口支援与合作 | 革命老区振兴发展 | 生态退化地区治理 |
| ---------------------------------------- | -------------- | ---------------- | ---------------- |
| dqzx/tpgjypkfq                           | dqzx/dkzyyhz   | dqzx/gglqzxfz    | dqzx/stthdqzl    |

#### 区域开放

| 信息集萃  |
| --------- |
| qykf/xxjc |

#### 农业农村经济

| 重点建设    | 投资指南    | 乡村振兴    | 农经信息    |
| ----------- | ----------- | ----------- | ----------- |
| nyncjj/zdjs | nyncjj/tzzn | nyncjj/xczx | nyncjj/njxx |

#### 基础设施发展

| 政策规划    | 城轨监管    | 重大工程    | 问题研究    |
| ----------- | ----------- | ----------- | ----------- |
| zcssfz/zcgh | zcssfz/cgjg | zcssfz/zdgc | zcssfz/wtyj |

#### 产业发展

| 制造业发展 | 服务业发展 |
| ---------- | ---------- |
| cyfz/zcyfz | cyfz/fwyfz |

#### 创新和高技术发展

| 地方进展      |
| ------------- |
| cxhgjsfz/dfjz |

#### 环境与资源

| 碳达峰碳中和 | 生态文明建设 | 节能和能效  | 资源利用和循环经济 |
| ------------ | ------------ | ----------- | ------------------ |
| hjyzy/tdftzh | hjyzy/stwmjs | hjyzy/jnhnx | hjyzy/zyzhlyhxhjj  |

#### 就业与收入

| 就业收入社保消费 | 地方经验   |
| ---------------- | ---------- |
| jyysr/jysrsbxf   | jyysr/dfjx |

#### 经济贸易

| 重要商品情况 | 对外经贸及政策分析 | 流通业发展 |
| ------------ | ------------------ | ---------- |
| jjmy/zyspqk  | jjmy/dwjmjzcfx     | jjmy/ltyfz |

#### 财金信用

| 工作动态    |
| ----------- |
| cjxy/gzdt03 |

#### 价格管理

| 地方工作  |
| --------- |
| jggl/dfgz |

#### 发改法规

| 地方信息  |
| --------- |
| fgfg/dfxx |

#### 国际合作

| 世经动态  |
| --------- |
| gjhz/zywj |

#### 干部之家

| 系统风采  | 人才招聘  | 委属工作  | 学习园地  |
| --------- | --------- | --------- | --------- |
| gbzj/xtfc | gbzj/rczp | gbzj/wsgz | gbzj/xxyd |

#### 评估督导

| 评督动态  | 评督经验  |
| --------- | --------- |
| pgdd/pddt | pgdd/pdjy |

#### 发改党建

| 中央精神  | 机关党建  | 委属党建  | 系统党建  |
| --------- | --------- | --------- | --------- |
| fgdj/zydj | fgdj/jgdj | fgdj/wsdj | fgdj/xtdj |

#### 发改金辉

| 党建之窗  | 系统交流  | 学习园地  | 金色夕阳  |
| --------- | --------- | --------- | --------- |
| fgjh/djzc | fgjh/zthd | fgjh/yxyd | fgjh/jsxy |

:::

### 政府新闻 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/cn/news/:uid","categories":["government"],"example":"/gov/cn/news/bm","parameters":{"uid":"分类名"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"政府新闻","maintainers":["EsuRt","howfool"],"description":"| 政务部门 | 滚动新闻 | 新闻要闻 | 国务院新闻 | 国务院工作会议 | 政策文件 |\n| :------: | :------: | :------: | :--------: | :------------: | :------: |\n|    bm    |    gd    |    yw    |     gwy    |     gwyzzjg    |  zhengce |","location":"cn/news/index.ts","heat":119,"topFeeds":[{"id":"88599589260275712","type":"feed","url":"rsshub://gov/cn/news/gwy","title":"中国政府网 - 国务院信息","description":"中国政府网 - 国务院信息 - Powered by RSSHub","image":null},{"id":"67174356112248832","type":"feed","url":"rsshub://gov/cn/news/bm","title":"中国政府网 - 部门政务","description":"中国政府网 - 部门政务 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 政务部门 | 滚动新闻 | 新闻要闻 | 国务院新闻 | 国务院工作会议 | 政策文件 |
| :------: | :------: | :------: | :--------: | :------------: | :------: |
|    bm    |    gd    |    yw    |     gwy    |     gwyzzjg    |  zhengce |

### 国家粮食和物资储备局 <Site url="lswz.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/lswz/:category{.+}?","name":"国家粮食和物资储备局","url":"lswz.gov.cn","maintainers":["nczitzk"],"example":"/gov/lswz","parameters":{"category":"分类，默认为 `html/xinwen/index`，可在对应分类页 URL 中找到"},"description":"::: tip\n  若订阅 [新闻发布](https://www.lswz.gov.cn/html/xinwen/index.shtml)，网址为 `https://www.lswz.gov.cn/html/xinwen/index.shtml`。截取 `https://www.lswz.gov.cn/` 到末尾 `.shtml` 的部分 `html/xinwen/index` 作为参数填入，此时路由为 [`/gov/lswz/html/xinwen/index`](https://rsshub.app/gov/lswz/html/xinwen/index)。\n:::\n\n| [新闻发布](https://www.lswz.gov.cn/html/xinwen/index.shtml)        | [党建工作](https://www.lswz.gov.cn/html/djgz/index.shtml)      |\n| ------------------------------------------------------------------ | -------------------------------------------------------------- |\n| [html/xinwen/index](https://rsshub.app/gov/lswz/html/xinwen/index) | [html/djgz/index](https://rsshub.app/gov/lswz/html/djgz/index) |\n\n| [粮食交易](https://www.lswz.gov.cn/html/zmhd/lysj/lsjy.shtml)          | [粮食质量](https://www.lswz.gov.cn/html/zmhd/lysj/lszl.shtml)          |\n| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |\n| [html/zmhd/lysj/lsjy](https://rsshub.app/gov/lswz/html/zmhd/lysj/lsjy) | [html/zmhd/lysj/lszl](https://rsshub.app/gov/lswz/html/zmhd/lysj/lszl) |\n\n\n#### [业务频道](https://www.lswz.gov.cn/html/ywpd/index.shtml)\n\n| [粮食调控](https://www.lswz.gov.cn/html/ywpd/lstk/index.shtml)           | [物资储备](https://www.lswz.gov.cn/html/ywpd/wzcb/index.shtml)           | [能源储备](https://www.lswz.gov.cn/html/ywpd/nycb/index.shtml)           | [安全应急](https://www.lswz.gov.cn/html/ywpd/aqyj/index.shtml)           | [法规体改](https://www.lswz.gov.cn/html/ywpd/fgtg/index.shtml)           |\n| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |\n| [html/ywpd/lstk/index](https://rsshub.app/gov/lswz/html/ywpd/lstk/index) | [html/ywpd/wzcb/index](https://rsshub.app/gov/lswz/html/ywpd/wzcb/index) | [html/ywpd/nycb/index](https://rsshub.app/gov/lswz/html/ywpd/nycb/index) | [html/ywpd/aqyj/index](https://rsshub.app/gov/lswz/html/ywpd/aqyj/index) | [html/ywpd/fgtg/index](https://rsshub.app/gov/lswz/html/ywpd/fgtg/index) |\n\n| [规划建设](https://www.lswz.gov.cn/html/ywpd/gjks/index.shtml)           | [财务审计](https://www.lswz.gov.cn/html/ywpd/cwsj/index.shtml)           | [仓储科技](https://www.lswz.gov.cn/html/ywpd/cckj/index.shtml)           | [执法督查](https://www.lswz.gov.cn/html/ywpd/zfdc/index.shtml)           | [国际交流](https://www.lswz.gov.cn/html/ywpd/gjjl/index.shtml)           |\n| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |\n| [html/ywpd/gjks/index](https://rsshub.app/gov/lswz/html/ywpd/gjks/index) | [html/ywpd/cwsj/index](https://rsshub.app/gov/lswz/html/ywpd/cwsj/index) | [html/ywpd/cckj/index](https://rsshub.app/gov/lswz/html/ywpd/cckj/index) | [html/ywpd/zfdc/index](https://rsshub.app/gov/lswz/html/ywpd/zfdc/index) | [html/ywpd/gjjl/index](https://rsshub.app/gov/lswz/html/ywpd/gjjl/index) |\n\n| [人事人才](https://www.lswz.gov.cn/html/ywpd/rsrc/index.shtml)           | [标准质量](https://www.lswz.gov.cn/html/ywpd/bzzl/index.shtml)           | [粮食和储备研究](https://www.lswz.gov.cn/html/ywpd/lshcbyj/index.shtml)        |\n| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |\n| [html/ywpd/rsrc/index](https://rsshub.app/gov/lswz/html/ywpd/rsrc/index) | [html/ywpd/bzzl/index](https://rsshub.app/gov/lswz/html/ywpd/bzzl/index) | [html/ywpd/lshcbyj/index](https://rsshub.app/gov/lswz/html/ywpd/lshcbyj/index) |\n\n#### [政策发布](https://www.lswz.gov.cn/html/zcfb/index.shtml)\n\n| [文件](https://www.lswz.gov.cn/html/zcfb/wenjian.shtml)            | [法律法规](https://www.lswz.gov.cn/html/zcfb/fggz-fg.shtml)        | [规章](https://www.lswz.gov.cn/html/zcfb/fggz-gz.shtml)            |\n| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |\n| [html/zcfb/wenjian](https://rsshub.app/gov/lswz/html/zcfb/wenjian) | [html/zcfb/fggz-fg](https://rsshub.app/gov/lswz/html/zcfb/fggz-fg) | [html/zcfb/fggz-gz](https://rsshub.app/gov/lswz/html/zcfb/fggz-gz) |\n\n#### [通知公告](https://www.lswz.gov.cn/html/tzgg/index.shtml)\n\n| [行政通知](https://www.lswz.gov.cn/html/tzgg/xztz.shtml)     | [公告通告](https://www.lswz.gov.cn/html/tzgg/ggtg.shtml)     |\n| ------------------------------------------------------------ | ------------------------------------------------------------ |\n| [html/tzgg/xztz](https://rsshub.app/gov/lswz/html/tzgg/xztz) | [html/tzgg/ggtg](https://rsshub.app/gov/lswz/html/tzgg/ggtg) |\n\n#### [粮食收购](https://www.lswz.gov.cn/html/zmhd/lysj/lssg-szym.shtml)\n\n| [收购数据](https://www.lswz.gov.cn/html/zmhd/lysj/lssg-szym.shtml)               | [政策·解读](https://www.lswz.gov.cn/html/zmhd/lysj/lssg-gzdt.shtml)              |\n| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |\n| [html/zmhd/lysj/lssg-szym](https://rsshub.app/gov/lswz/html/zmhd/lysj/lssg-szym) | [html/zmhd/lysj/lssg-gzdt](https://rsshub.app/gov/lswz/html/zmhd/lysj/lssg-gzdt) |\n\n#### [粮食价格](https://www.lswz.gov.cn/html/zmhd/lysj/lsjg-scjc.shtml)\n\n| [市场监测](https://www.lswz.gov.cn/html/zmhd/lysj/lsjg-scjc.shtml)               | [市场价格](https://www.lswz.gov.cn/html/zmhd/lysj/lsjg-scjg.shtml)               |\n| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |\n| [html/zmhd/lysj/lsjg-scjc](https://rsshub.app/gov/lswz/html/zmhd/lysj/lsjg-scjc) | [html/zmhd/lysj/lsjg-scjg](https://rsshub.app/gov/lswz/html/zmhd/lysj/lsjg-scjg) |\n\n  ","categories":["government"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.lswz.gov.cn/:category?"]},{"title":"新闻发布","source":["www.lswz.gov.cn/html/xinwen/index.shtml"],"target":"/lswz/html/xinwen/index"},{"title":"党建工作","source":["www.lswz.gov.cn/html/djgz/index.shtml"],"target":"/lswz/html/djgz/index"},{"title":"业务频道 - 粮食调控","source":["www.lswz.gov.cn/html/ywpd/lstk/index.shtml"],"target":"/lswz/html/ywpd/lstk/index"},{"title":"业务频道 - 物资储备","source":["www.lswz.gov.cn/html/ywpd/wzcb/index.shtml"],"target":"/lswz/html/ywpd/wzcb/index"},{"title":"业务频道 - 能源储备","source":["www.lswz.gov.cn/html/ywpd/nycb/index.shtml"],"target":"/lswz/html/ywpd/nycb/index"},{"title":"业务频道 - 安全应急","source":["www.lswz.gov.cn/html/ywpd/aqyj/index.shtml"],"target":"/lswz/html/ywpd/aqyj/index"},{"title":"业务频道 - 法规体改","source":["www.lswz.gov.cn/html/ywpd/fgtg/index.shtml"],"target":"/lswz/html/ywpd/fgtg/index"},{"title":"业务频道 - 规划建设","source":["www.lswz.gov.cn/html/ywpd/gjks/index.shtml"],"target":"/lswz/html/ywpd/gjks/index"},{"title":"业务频道 - 财务审计","source":["www.lswz.gov.cn/html/ywpd/cwsj/index.shtml"],"target":"/lswz/html/ywpd/cwsj/index"},{"title":"业务频道 - 仓储科技","source":["www.lswz.gov.cn/html/ywpd/cckj/index.shtml"],"target":"/lswz/html/ywpd/cckj/index"},{"title":"业务频道 - 执法督查","source":["www.lswz.gov.cn/html/ywpd/zfdc/index.shtml"],"target":"/lswz/html/ywpd/zfdc/index"},{"title":"业务频道 - 国际交流","source":["www.lswz.gov.cn/html/ywpd/gjjl/index.shtml"],"target":"/lswz/html/ywpd/gjjl/index"},{"title":"业务频道 - 人事人才","source":["www.lswz.gov.cn/html/ywpd/rsrc/index.shtml"],"target":"/lswz/html/ywpd/rsrc/index"},{"title":"业务频道 - 标准质量","source":["www.lswz.gov.cn/html/ywpd/bzzl/index.shtml"],"target":"/lswz/html/ywpd/bzzl/index"},{"title":"业务频道 - 粮食和储备研究","source":["www.lswz.gov.cn/html/ywpd/lshcbyj/index.shtml"],"target":"/lswz/html/ywpd/lshcbyj/index"},{"title":"政策发布 - 文件","source":["www.lswz.gov.cn/html/zcfb/wenjian.shtml"],"target":"/lswz/html/zcfb/wenjian"},{"title":"政策发布 - 法律法规","source":["www.lswz.gov.cn/html/zcfb/fggz-fg.shtml"],"target":"/lswz/html/zcfb/fggz-fg"},{"title":"政策发布 - 规章","source":["www.lswz.gov.cn/html/zcfb/fggz-gz.shtml"],"target":"/lswz/html/zcfb/fggz-gz"},{"title":"通知公告 - 行政通知","source":["www.lswz.gov.cn/html/tzgg/xztz.shtml"],"target":"/lswz/html/tzgg/xztz"},{"title":"通知公告 - 公告通告","source":["www.lswz.gov.cn/html/tzgg/ggtg.shtml"],"target":"/lswz/html/tzgg/ggtg"},{"title":"粮食收购 - 收购数据","source":["www.lswz.gov.cn/html/zmhd/lysj/lssg-szym.shtml"],"target":"/lswz/html/zmhd/lysj/lssg-szym"},{"title":"粮食收购 - 政策·解读","source":["www.lswz.gov.cn/html/zmhd/lysj/lssg-gzdt.shtml"],"target":"/lswz/html/zmhd/lysj/lssg-gzdt"},{"title":"粮食价格 - 市场监测","source":["www.lswz.gov.cn/html/zmhd/lysj/lsjg-scjc.shtml"],"target":"/lswz/html/zmhd/lysj/lsjg-scjc"},{"title":"粮食价格 - 市场价格","source":["www.lswz.gov.cn/html/zmhd/lysj/lsjg-scjg.shtml"],"target":"/lswz/html/zmhd/lysj/lsjg-scjg"},{"title":"粮食交易","source":["www.lswz.gov.cn/html/zmhd/lysj/lsjy.shtml"],"target":"/lswz/html/zmhd/lysj/lsjy"},{"title":"粮食质量","source":["www.lswz.gov.cn/html/zmhd/lysj/lszl.shtml"],"target":"/lswz/html/zmhd/lysj/lszl"}],"location":"lswz/index.ts","heat":67,"topFeeds":[{"id":"67547296955634688","type":"feed","url":"rsshub://gov/lswz","title":"新闻发布-国家粮食和物资储备局","description":"新闻发布 - Powered by RSSHub","image":"https://www.lswz.gov.cn/html/xhtml/images/logo-index.png"},{"id":"166121299164739584","type":"feed","url":"rsshub://gov/lswz/html/zmhd/lysj/lsjg-scjc","title":"市场监测-国家粮食和物资储备局","description":"市场监测 - Powered by RSSHub","image":"https://www.lswz.gov.cn/html/xhtml/images/logo-index.png"}]}' :test='{"code":0}' />

::: tip
  若订阅 [新闻发布](https://www.lswz.gov.cn/html/xinwen/index.shtml)，网址为 `https://www.lswz.gov.cn/html/xinwen/index.shtml`。截取 `https://www.lswz.gov.cn/` 到末尾 `.shtml` 的部分 `html/xinwen/index` 作为参数填入，此时路由为 [`/gov/lswz/html/xinwen/index`](https://rsshub.app/gov/lswz/html/xinwen/index)。
:::

| [新闻发布](https://www.lswz.gov.cn/html/xinwen/index.shtml)        | [党建工作](https://www.lswz.gov.cn/html/djgz/index.shtml)      |
| ------------------------------------------------------------------ | -------------------------------------------------------------- |
| [html/xinwen/index](https://rsshub.app/gov/lswz/html/xinwen/index) | [html/djgz/index](https://rsshub.app/gov/lswz/html/djgz/index) |

| [粮食交易](https://www.lswz.gov.cn/html/zmhd/lysj/lsjy.shtml)          | [粮食质量](https://www.lswz.gov.cn/html/zmhd/lysj/lszl.shtml)          |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [html/zmhd/lysj/lsjy](https://rsshub.app/gov/lswz/html/zmhd/lysj/lsjy) | [html/zmhd/lysj/lszl](https://rsshub.app/gov/lswz/html/zmhd/lysj/lszl) |


#### [业务频道](https://www.lswz.gov.cn/html/ywpd/index.shtml)

| [粮食调控](https://www.lswz.gov.cn/html/ywpd/lstk/index.shtml)           | [物资储备](https://www.lswz.gov.cn/html/ywpd/wzcb/index.shtml)           | [能源储备](https://www.lswz.gov.cn/html/ywpd/nycb/index.shtml)           | [安全应急](https://www.lswz.gov.cn/html/ywpd/aqyj/index.shtml)           | [法规体改](https://www.lswz.gov.cn/html/ywpd/fgtg/index.shtml)           |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [html/ywpd/lstk/index](https://rsshub.app/gov/lswz/html/ywpd/lstk/index) | [html/ywpd/wzcb/index](https://rsshub.app/gov/lswz/html/ywpd/wzcb/index) | [html/ywpd/nycb/index](https://rsshub.app/gov/lswz/html/ywpd/nycb/index) | [html/ywpd/aqyj/index](https://rsshub.app/gov/lswz/html/ywpd/aqyj/index) | [html/ywpd/fgtg/index](https://rsshub.app/gov/lswz/html/ywpd/fgtg/index) |

| [规划建设](https://www.lswz.gov.cn/html/ywpd/gjks/index.shtml)           | [财务审计](https://www.lswz.gov.cn/html/ywpd/cwsj/index.shtml)           | [仓储科技](https://www.lswz.gov.cn/html/ywpd/cckj/index.shtml)           | [执法督查](https://www.lswz.gov.cn/html/ywpd/zfdc/index.shtml)           | [国际交流](https://www.lswz.gov.cn/html/ywpd/gjjl/index.shtml)           |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [html/ywpd/gjks/index](https://rsshub.app/gov/lswz/html/ywpd/gjks/index) | [html/ywpd/cwsj/index](https://rsshub.app/gov/lswz/html/ywpd/cwsj/index) | [html/ywpd/cckj/index](https://rsshub.app/gov/lswz/html/ywpd/cckj/index) | [html/ywpd/zfdc/index](https://rsshub.app/gov/lswz/html/ywpd/zfdc/index) | [html/ywpd/gjjl/index](https://rsshub.app/gov/lswz/html/ywpd/gjjl/index) |

| [人事人才](https://www.lswz.gov.cn/html/ywpd/rsrc/index.shtml)           | [标准质量](https://www.lswz.gov.cn/html/ywpd/bzzl/index.shtml)           | [粮食和储备研究](https://www.lswz.gov.cn/html/ywpd/lshcbyj/index.shtml)        |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| [html/ywpd/rsrc/index](https://rsshub.app/gov/lswz/html/ywpd/rsrc/index) | [html/ywpd/bzzl/index](https://rsshub.app/gov/lswz/html/ywpd/bzzl/index) | [html/ywpd/lshcbyj/index](https://rsshub.app/gov/lswz/html/ywpd/lshcbyj/index) |

#### [政策发布](https://www.lswz.gov.cn/html/zcfb/index.shtml)

| [文件](https://www.lswz.gov.cn/html/zcfb/wenjian.shtml)            | [法律法规](https://www.lswz.gov.cn/html/zcfb/fggz-fg.shtml)        | [规章](https://www.lswz.gov.cn/html/zcfb/fggz-gz.shtml)            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| [html/zcfb/wenjian](https://rsshub.app/gov/lswz/html/zcfb/wenjian) | [html/zcfb/fggz-fg](https://rsshub.app/gov/lswz/html/zcfb/fggz-fg) | [html/zcfb/fggz-gz](https://rsshub.app/gov/lswz/html/zcfb/fggz-gz) |

#### [通知公告](https://www.lswz.gov.cn/html/tzgg/index.shtml)

| [行政通知](https://www.lswz.gov.cn/html/tzgg/xztz.shtml)     | [公告通告](https://www.lswz.gov.cn/html/tzgg/ggtg.shtml)     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [html/tzgg/xztz](https://rsshub.app/gov/lswz/html/tzgg/xztz) | [html/tzgg/ggtg](https://rsshub.app/gov/lswz/html/tzgg/ggtg) |

#### [粮食收购](https://www.lswz.gov.cn/html/zmhd/lysj/lssg-szym.shtml)

| [收购数据](https://www.lswz.gov.cn/html/zmhd/lysj/lssg-szym.shtml)               | [政策·解读](https://www.lswz.gov.cn/html/zmhd/lysj/lssg-gzdt.shtml)              |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [html/zmhd/lysj/lssg-szym](https://rsshub.app/gov/lswz/html/zmhd/lysj/lssg-szym) | [html/zmhd/lysj/lssg-gzdt](https://rsshub.app/gov/lswz/html/zmhd/lysj/lssg-gzdt) |

#### [粮食价格](https://www.lswz.gov.cn/html/zmhd/lysj/lsjg-scjc.shtml)

| [市场监测](https://www.lswz.gov.cn/html/zmhd/lysj/lsjg-scjc.shtml)               | [市场价格](https://www.lswz.gov.cn/html/zmhd/lysj/lsjg-scjg.shtml)               |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [html/zmhd/lysj/lsjg-scjc](https://rsshub.app/gov/lswz/html/zmhd/lysj/lsjg-scjc) | [html/zmhd/lysj/lsjg-scjg](https://rsshub.app/gov/lswz/html/zmhd/lysj/lsjg-scjg) |

  

### 关税政策文件 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/mof/gss/:category?","categories":["government"],"example":"/gov/mof/gss","parameters":{"category":"列表标签，默认为政策发布"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"关税政策文件","maintainers":["la3rence"],"description":"#### 关税文件发布\n\n| 政策发布 | 政策解读 |\n| ------------- | -------------- |\n| zhengcefabu   | zhengcejiedu   |","radar":[{"source":["gss.mof.gov.cn/gzdt/:category/"],"target":"/mof/gss/:category"}],"location":"mof/gss.ts","heat":61,"topFeeds":[{"id":"133069318957962240","type":"feed","url":"rsshub://gov/mof/gss","title":"政策文件","description":"政策文件 - 中华人民共和国财政部 - Powered by RSSHub","image":null},{"id":"145117484898967552","type":"feed","url":"rsshub://gov/mof/gss/zhengcejiedu","title":"政策解读","description":"政策解读 - 中华人民共和国财政部 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

#### 关税文件发布

| 政策发布 | 政策解读 |
| ------------- | -------------- |
| zhengcefabu   | zhengcejiedu   |

### 立法意见征集 <Site url="www.moj.gov.cn/lfyjzj/lflfyjzj/*" size="sm" />

<Route namespace="gov" :data='{"path":"/moj/lfyjzj","categories":["government"],"example":"/gov/moj/lfyjzj","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.moj.gov.cn/lfyjzj/lflfyjzj/*","www.moj.gov.cn/pub/sfbgw/lfyjzj/lflfyjzj/*"]}],"name":"立法意见征集","maintainers":["la3rence"],"url":"www.moj.gov.cn/lfyjzj/lflfyjzj/*","location":"moj/lfyjzj.ts","heat":58,"topFeeds":[{"id":"62781073015771136","type":"feed","url":"rsshub://gov/moj/lfyjzj","title":"立法意见征集","description":"中华人民共和国司法部 - 立法意见征集 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 专题 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/mof/bond/:category?","categories":["government"],"example":"/gov/mof/bond","parameters":{"category":"专题，见下表，默认为国债管理工作动态"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"专题","maintainers":["la3rence"],"description":"#### 政府债券管理\n\n| 国债管理工作动态 | 记账式国债 (含特别国债) 发行 | 储蓄国债发行 | 地方政府债券管理      |\n| ---------------- | ---------------------------- | ------------ | --------------------- |\n| gzfxgzdt         | gzfxzjs                      | gzfxdzs      | difangzhengfuzhaiquan |","location":"mof/bond.ts","heat":55,"topFeeds":[{"id":"72200004362793984","type":"feed","url":"rsshub://gov/mof/bond","title":"国债管理工作动态","description":"国债管理工作动态 - 中华人民共和国财政部 - Powered by RSSHub","image":null},{"id":"100135024449222656","type":"feed","url":"rsshub://gov/mof/bond/gzfxdzs","title":"储蓄国债发行","description":"储蓄国债发行 - 中华人民共和国财政部 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

#### 政府债券管理

| 国债管理工作动态 | 记账式国债 (含特别国债) 发行 | 储蓄国债发行 | 地方政府债券管理      |
| ---------------- | ---------------------------- | ------------ | --------------------- |
| gzfxgzdt         | gzfxzjs                      | gzfxdzs      | difangzhengfuzhaiquan |

### 中华人民共和国农业农村部 - 新闻 <Site url="moa.gov.cn/" size="sm" />

<Route namespace="gov" :data='{"path":"/moa/suburl/:suburl{.+}","categories":["government"],"example":"/gov/moa/suburl/gk/zcjd/","radar":[{"source":["moa.gov.cn/"],"target":"/moa/suburl/:suburl"}],"parameters":{"suburl":"下级目录，请使用最下级的目录"},"name":"中华人民共和国农业农村部 - 新闻","maintainers":["Origami404","lyqluis"],"url":"moa.gov.cn/","description":"更多例子：\n  -   `农业农村部动态`的网页链接是`http://www.moa.gov.cn/xw/zwdt/`, 对应的`suburl`是`xw/zwdt`\n  -   `财务公开`的网页链接是`http://www.moa.gov.cn/gk/cwgk_1/`, 对应的`suburl`是`gk/cwgk_1`\n  -   像[政策法规](http://www.moa.gov.cn/gk/zcfg/)这种页面(`http://www.moa.gov.cn/gk/zcfg/`), 它**不是**一个合法的分类目录，它是`法律`, `行政法规`, `部门规章`等一堆栏目的集合，这时候请点开对应栏目的`更多 >>`进入栏目的最下级目录，再根据上面的规则提取`suburl`\n  -   特别地，`图片新闻`对应的`suburl`为`xw/tpxw/`, `最新公开`对应的`suburl`为`govpublic`, `数据>最新发布`对应的`suburl`为`sj/zxfb`","location":"moa/moa.ts","heat":47,"topFeeds":[{"id":"63817336539566080","type":"feed","url":"rsshub://gov/moa/suburl/gk/zcjd/","title":"中华人民共和国农业农村部 - 政策解读","description":"中华人民共和国农业农村部 - 政策解读 - Powered by RSSHub","image":null},{"id":"110574279350074368","type":"feed","url":"rsshub://gov/moa/suburl/xw/qg/","title":"中华人民共和国农业农村部 - 全国信息联播","description":"中华人民共和国农业农村部 - 全国信息联播 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

更多例子：
  -   `农业农村部动态`的网页链接是`http://www.moa.gov.cn/xw/zwdt/`, 对应的`suburl`是`xw/zwdt`
  -   `财务公开`的网页链接是`http://www.moa.gov.cn/gk/cwgk_1/`, 对应的`suburl`是`gk/cwgk_1`
  -   像[政策法规](http://www.moa.gov.cn/gk/zcfg/)这种页面(`http://www.moa.gov.cn/gk/zcfg/`), 它**不是**一个合法的分类目录，它是`法律`, `行政法规`, `部门规章`等一堆栏目的集合，这时候请点开对应栏目的`更多 >>`进入栏目的最下级目录，再根据上面的规则提取`suburl`
  -   特别地，`图片新闻`对应的`suburl`为`xw/tpxw/`, `最新公开`对应的`suburl`为`govpublic`, `数据>最新发布`对应的`suburl`为`sj/zxfb`

### 分类 <Site url="www.cbirc.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/cbirc/:id?","name":"分类","url":"www.cbirc.gov.cn","maintainers":["nczitzk"],"example":"/gov/cbirc/:id?","parameters":{"category":"分类，默认为监管动态，即 915，可在对应分类页 URL 中找到"},"description":"::: tip\n  若订阅 [监管动态](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemId=915&itemUrl=ItemListRightList.html)，网址为 `https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemId=915&itemUrl=ItemListRightList.html`。截取 `itemId` 的值 `915` 作为参数填入，此时路由为 [`/gov/cbirc/915`](https://rsshub.app/gov/cbirc/915)。\n:::\n\n#### [首页](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=899&itemId=971&itemUrl=ItemListRightMore.html)\n\n| [弹出公告](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=971&itemId=972&itemUrl=sss) | [法律声明](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=971&itemId=4128&itemUrl=ItemListRightArticle.html) |\n| --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |\n| [972](https://rsshub.app/gov/cbirc/972)                                                             | [4128](https://rsshub.app/gov/cbirc/4128)                                                                                  |\n\n#### [机构概况](https://www.cbirc.gov.cn/cn/view/pages/jigougaikuang/jigougaikuang.html)\n\n| [主要职责](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=900&itemId=901&itemUrl=ItemListRightArticle.html) | [总局领导](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=900&itemId=902&itemUrl=jigougaikuang/huilingdao.html) | [内设机构](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=900&itemId=911&itemUrl=jigougaikuang/neishejigou.html) | [直属行政机构](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=900&itemId=4243&itemUrl=jigougaikuang/zhishuxingzhengjigou.html) | [派出机构](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=900&itemId=912&itemUrl=jigougaikuang/paichujigou.html) |\n| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |\n| [901](https://rsshub.app/gov/cbirc/901)                                                                                   | [902](https://rsshub.app/gov/cbirc/902)                                                                                       | [911](https://rsshub.app/gov/cbirc/911)                                                                                        | [4243](https://rsshub.app/gov/cbirc/4243)                                                                                                    | [912](https://rsshub.app/gov/cbirc/912)                                                                                        |\n\n| [联系方式](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=900&itemId=913&itemUrl=jigougaikuang/lianxifangshi.html) |\n| -------------------------------------------------------------------------------------------------------------------------------- |\n| [913](https://rsshub.app/gov/cbirc/913)                                                                                          |\n\n#### [新闻资讯](https://www.cbirc.gov.cn/cn/view/pages/xinwenzixun/xinwenzixun.html)\n\n| [监管动态](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=914&itemId=915&itemUrl=ItemListRightList.html) | [政策解读](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=914&itemId=916&itemUrl=ItemListRightMore.html) | [领导活动及讲话](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=914&itemId=919&itemUrl=ItemListRightList.html) | [新闻发布会及访谈](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=914&itemId=920&itemUrl=xinwenzixun/xinwenfabu.html) | [新闻发言人](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=914&itemId=921&itemUrl=xinwenzixun/xinwenfayan.html) |\n| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |\n| [915](https://rsshub.app/gov/cbirc/915)                                                                                | [916](https://rsshub.app/gov/cbirc/916)                                                                                | [919](https://rsshub.app/gov/cbirc/919)                                                                                      | [920](https://rsshub.app/gov/cbirc/920)                                                                                             | [921](https://rsshub.app/gov/cbirc/921)                                                                                        |\n\n#### [政务信息](https://www.cbirc.gov.cn/cn/view/pages/zhengwuxinxi/zhengwuxinxi.html)\n\n| [政府信息公开](https://www.cbirc.gov.cn/cn/view/pages/zhengwuxinxi/zhengfuxinxi.html) | [公告通知](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=923&itemId=925&itemUrl=ItemListRightList.html) | [政策法规](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=923&itemId=926&itemUrl=ItemListRightMore.html) | [行政许可](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=923&itemId=930&itemUrl=zhengwuxinxi/xingzhengxuke.html) | [行政处罚](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=923&itemId=931&itemUrl=zhengwuxinxi/xingzhengchufa.html) |\n| ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |\n| [924](https://rsshub.app/gov/cbirc/924)                                               | [925](https://rsshub.app/gov/cbirc/925)                                                                                | [926](https://rsshub.app/gov/cbirc/926)                                                                                | [930](https://rsshub.app/gov/cbirc/930)                                                                                         | [931](https://rsshub.app/gov/cbirc/931)                                                                                          |\n\n| [行政监管措施](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=923&itemId=932&itemUrl=ItemListRightList.html) | [人事信息](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=923&itemId=933&itemUrl=ItemListRightList.html) |\n| -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |\n| [932](https://rsshub.app/gov/cbirc/932)                                                                                    | [933](https://rsshub.app/gov/cbirc/933)                                                                                |\n\n#### [在线服务](https://www.cbirc.gov.cn/cn/view/pages/zaixianfuwu/zaixianfuwu.html)\n\n| [行政许可办事服务指南](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=937&itemId=938&itemUrl=zaixianfuwu/banshifuwu.html) | [查询服务](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=937&itemId=939&itemUrl=zaixianfuwu/chaxunfuwu.html) |\n| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |\n| [938](https://rsshub.app/gov/cbirc/938)                                                                                                 | [939](https://rsshub.app/gov/cbirc/939)                                                                                     |\n\n#### [互动交流](https://www.cbirc.gov.cn/cn/view/pages/hudongjiaoliu/hudongjiaoliu.html)\n\n| [政务咨询](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=945&itemId=946&itemUrl=tosubmenu:hudongjiaoliu/woyaozixun.html) | [征集调查](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=945&itemId=950&itemUrl=ItemListRightMore.html) | [国务院办公厅开通\"国家政务服务投诉与建议\"小程序](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=945&itemId=952&itemUrl=http://www.gov.cn/xinwen/2018-09/20/content_5323786.htm) |\n| --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| [946](https://rsshub.app/gov/cbirc/946)                                                                                                 | [950](https://rsshub.app/gov/cbirc/950)                                                                                | [952](https://rsshub.app/gov/cbirc/952)                                                                                                                                                       |\n\n#### [统计数据](https://www.cbirc.gov.cn/cn/view/pages/tongjishuju/tongjishuju.html)\n\n| [统计信息](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=953&itemId=954&itemUrl=ItemListRightList.html) | [数据图表](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=953&itemId=955&itemUrl=tosubmenu:tongjishuju/zongzichan.html) |\n| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |\n| [954](https://rsshub.app/gov/cbirc/954)                                                                                | [955](https://rsshub.app/gov/cbirc/955)                                                                                               |\n\n#### [专题专栏](https://www.cbirc.gov.cn/cn/view/pages/zhuantizhuanlan/zhuantizhuanlan.html)\n\n| [推进普惠金融高质量发展](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=960&itemId=4234&itemUrl=ItemListRightMore.html) | [防范和处置非法集资](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=960&itemId=963&itemUrl=ItemListRightMore.html) | [消费者保护](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=960&itemId=4097&itemUrl=ItemListRightMore.html) | [法治宣传](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=960&itemId=4106&itemUrl=ItemListRightMore.html) | [政府网站年度报表](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=960&itemId=970&itemUrl=ItemListRightList.html) |\n| ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |\n| [4234](https://rsshub.app/gov/cbirc/4234)                                                                                             | [963](https://rsshub.app/gov/cbirc/963)                                                                                          | [4097](https://rsshub.app/gov/cbirc/4097)                                                                                 | [4106](https://rsshub.app/gov/cbirc/4106)                                                                               | [970](https://rsshub.app/gov/cbirc/970)                                                                                        |\n\n| [服务民营企业](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=960&itemId=4171&itemUrl=ItemListRightList.html) | [服务制造业发展](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=960&itemId=4217&itemUrl=ItemListRightList.html) | [学习贯彻习近平新时代中国特色社会主义思想主题教育](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=960&itemId=4229&itemUrl=ItemListRightMore.html) |\n| --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| [4171](https://rsshub.app/gov/cbirc/4171)                                                                                   | [4217](https://rsshub.app/gov/cbirc/4217)                                                                                     | [4229](https://rsshub.app/gov/cbirc/4229)                                                                                                                       |\n  ","categories":["government"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.cbirc.gov.cn/:id?"]},{"title":"首页 - 弹出公告","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/972"},{"title":"首页 - 法律声明","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/4128"},{"title":"机构概况 - 主要职责","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/901"},{"title":"机构概况 - 总局领导","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/902"},{"title":"机构概况 - 内设机构","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/911"},{"title":"机构概况 - 直属行政机构","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/4243"},{"title":"机构概况 - 派出机构","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/912"},{"title":"机构概况 - 联系方式","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/913"},{"title":"新闻资讯 - 监管动态","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/915"},{"title":"新闻资讯 - 政策解读","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/916"},{"title":"新闻资讯 - 领导活动及讲话","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/919"},{"title":"新闻资讯 - 新闻发布会及访谈","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/920"},{"title":"新闻资讯 - 新闻发言人","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/921"},{"title":"政务信息 - 政府信息公开","source":["www.cbirc.gov.cn/cn/view/pages/zhengwuxinxi/zhengfuxinxi.html"],"target":"/cbirc/924"},{"title":"政务信息 - 公告通知","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/925"},{"title":"政务信息 - 政策法规","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/926"},{"title":"政务信息 - 行政许可","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/930"},{"title":"政务信息 - 行政处罚","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/931"},{"title":"政务信息 - 行政监管措施","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/932"},{"title":"政务信息 - 人事信息","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/933"},{"title":"在线服务 - 行政许可办事服务指南","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/938"},{"title":"在线服务 - 查询服务","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/939"},{"title":"互动交流 - 政务咨询","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/946"},{"title":"互动交流 - 征集调查","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/950"},{"title":"互动交流 - 国务院办公厅开通\"国家政务服务投诉与建议\"小程序","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/952"},{"title":"统计数据 - 统计信息","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/954"},{"title":"统计数据 - 数据图表","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/955"},{"title":"专题专栏 - 推进普惠金融高质量发展","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/4234"},{"title":"专题专栏 - 防范和处置非法集资","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/963"},{"title":"专题专栏 - 消费者保护","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/4097"},{"title":"专题专栏 - 法治宣传","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/4106"},{"title":"专题专栏 - 政府网站年度报表","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/970"},{"title":"专题专栏 - 服务民营企业","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/4171"},{"title":"专题专栏 - 服务制造业发展","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/4217"},{"title":"专题专栏 - 学习贯彻习近平新时代中国特色社会主义思想主题教育","source":["www.cbirc.gov.cn/cn/view/pages/ItemList.html"],"target":"/cbirc/4229"}],"location":"cbirc/index.ts","heat":31,"topFeeds":[{"id":"75123755399997440","type":"feed","url":"rsshub://gov/cbirc","title":"国家金融监督管理总局 - 监管动态","description":"监管动态 - Powered by RSSHub","image":""},{"id":"100130096896058368","type":"feed","url":"rsshub://gov/cbirc/954","title":"国家金融监督管理总局 - 统计信息","description":"统计信息 - Powered by RSSHub","image":""}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

::: tip
  若订阅 [监管动态](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemId=915&itemUrl=ItemListRightList.html)，网址为 `https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemId=915&itemUrl=ItemListRightList.html`。截取 `itemId` 的值 `915` 作为参数填入，此时路由为 [`/gov/cbirc/915`](https://rsshub.app/gov/cbirc/915)。
:::

#### [首页](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=899&itemId=971&itemUrl=ItemListRightMore.html)

| [弹出公告](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=971&itemId=972&itemUrl=sss) | [法律声明](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=971&itemId=4128&itemUrl=ItemListRightArticle.html) |
| --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [972](https://rsshub.app/gov/cbirc/972)                                                             | [4128](https://rsshub.app/gov/cbirc/4128)                                                                                  |

#### [机构概况](https://www.cbirc.gov.cn/cn/view/pages/jigougaikuang/jigougaikuang.html)

| [主要职责](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=900&itemId=901&itemUrl=ItemListRightArticle.html) | [总局领导](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=900&itemId=902&itemUrl=jigougaikuang/huilingdao.html) | [内设机构](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=900&itemId=911&itemUrl=jigougaikuang/neishejigou.html) | [直属行政机构](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=900&itemId=4243&itemUrl=jigougaikuang/zhishuxingzhengjigou.html) | [派出机构](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=900&itemId=912&itemUrl=jigougaikuang/paichujigou.html) |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [901](https://rsshub.app/gov/cbirc/901)                                                                                   | [902](https://rsshub.app/gov/cbirc/902)                                                                                       | [911](https://rsshub.app/gov/cbirc/911)                                                                                        | [4243](https://rsshub.app/gov/cbirc/4243)                                                                                                    | [912](https://rsshub.app/gov/cbirc/912)                                                                                        |

| [联系方式](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=900&itemId=913&itemUrl=jigougaikuang/lianxifangshi.html) |
| -------------------------------------------------------------------------------------------------------------------------------- |
| [913](https://rsshub.app/gov/cbirc/913)                                                                                          |

#### [新闻资讯](https://www.cbirc.gov.cn/cn/view/pages/xinwenzixun/xinwenzixun.html)

| [监管动态](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=914&itemId=915&itemUrl=ItemListRightList.html) | [政策解读](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=914&itemId=916&itemUrl=ItemListRightMore.html) | [领导活动及讲话](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=914&itemId=919&itemUrl=ItemListRightList.html) | [新闻发布会及访谈](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=914&itemId=920&itemUrl=xinwenzixun/xinwenfabu.html) | [新闻发言人](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=914&itemId=921&itemUrl=xinwenzixun/xinwenfayan.html) |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [915](https://rsshub.app/gov/cbirc/915)                                                                                | [916](https://rsshub.app/gov/cbirc/916)                                                                                | [919](https://rsshub.app/gov/cbirc/919)                                                                                      | [920](https://rsshub.app/gov/cbirc/920)                                                                                             | [921](https://rsshub.app/gov/cbirc/921)                                                                                        |

#### [政务信息](https://www.cbirc.gov.cn/cn/view/pages/zhengwuxinxi/zhengwuxinxi.html)

| [政府信息公开](https://www.cbirc.gov.cn/cn/view/pages/zhengwuxinxi/zhengfuxinxi.html) | [公告通知](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=923&itemId=925&itemUrl=ItemListRightList.html) | [政策法规](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=923&itemId=926&itemUrl=ItemListRightMore.html) | [行政许可](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=923&itemId=930&itemUrl=zhengwuxinxi/xingzhengxuke.html) | [行政处罚](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=923&itemId=931&itemUrl=zhengwuxinxi/xingzhengchufa.html) |
| ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [924](https://rsshub.app/gov/cbirc/924)                                               | [925](https://rsshub.app/gov/cbirc/925)                                                                                | [926](https://rsshub.app/gov/cbirc/926)                                                                                | [930](https://rsshub.app/gov/cbirc/930)                                                                                         | [931](https://rsshub.app/gov/cbirc/931)                                                                                          |

| [行政监管措施](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=923&itemId=932&itemUrl=ItemListRightList.html) | [人事信息](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=923&itemId=933&itemUrl=ItemListRightList.html) |
| -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| [932](https://rsshub.app/gov/cbirc/932)                                                                                    | [933](https://rsshub.app/gov/cbirc/933)                                                                                |

#### [在线服务](https://www.cbirc.gov.cn/cn/view/pages/zaixianfuwu/zaixianfuwu.html)

| [行政许可办事服务指南](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=937&itemId=938&itemUrl=zaixianfuwu/banshifuwu.html) | [查询服务](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=937&itemId=939&itemUrl=zaixianfuwu/chaxunfuwu.html) |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| [938](https://rsshub.app/gov/cbirc/938)                                                                                                 | [939](https://rsshub.app/gov/cbirc/939)                                                                                     |

#### [互动交流](https://www.cbirc.gov.cn/cn/view/pages/hudongjiaoliu/hudongjiaoliu.html)

| [政务咨询](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=945&itemId=946&itemUrl=tosubmenu:hudongjiaoliu/woyaozixun.html) | [征集调查](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=945&itemId=950&itemUrl=ItemListRightMore.html) | [国务院办公厅开通"国家政务服务投诉与建议"小程序](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=945&itemId=952&itemUrl=http://www.gov.cn/xinwen/2018-09/20/content_5323786.htm) |
| --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [946](https://rsshub.app/gov/cbirc/946)                                                                                                 | [950](https://rsshub.app/gov/cbirc/950)                                                                                | [952](https://rsshub.app/gov/cbirc/952)                                                                                                                                                       |

#### [统计数据](https://www.cbirc.gov.cn/cn/view/pages/tongjishuju/tongjishuju.html)

| [统计信息](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=953&itemId=954&itemUrl=ItemListRightList.html) | [数据图表](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=953&itemId=955&itemUrl=tosubmenu:tongjishuju/zongzichan.html) |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [954](https://rsshub.app/gov/cbirc/954)                                                                                | [955](https://rsshub.app/gov/cbirc/955)                                                                                               |

#### [专题专栏](https://www.cbirc.gov.cn/cn/view/pages/zhuantizhuanlan/zhuantizhuanlan.html)

| [推进普惠金融高质量发展](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=960&itemId=4234&itemUrl=ItemListRightMore.html) | [防范和处置非法集资](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=960&itemId=963&itemUrl=ItemListRightMore.html) | [消费者保护](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=960&itemId=4097&itemUrl=ItemListRightMore.html) | [法治宣传](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=960&itemId=4106&itemUrl=ItemListRightMore.html) | [政府网站年度报表](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=960&itemId=970&itemUrl=ItemListRightList.html) |
| ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [4234](https://rsshub.app/gov/cbirc/4234)                                                                                             | [963](https://rsshub.app/gov/cbirc/963)                                                                                          | [4097](https://rsshub.app/gov/cbirc/4097)                                                                                 | [4106](https://rsshub.app/gov/cbirc/4106)                                                                               | [970](https://rsshub.app/gov/cbirc/970)                                                                                        |

| [服务民营企业](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=960&itemId=4171&itemUrl=ItemListRightList.html) | [服务制造业发展](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=960&itemId=4217&itemUrl=ItemListRightList.html) | [学习贯彻习近平新时代中国特色社会主义思想主题教育](https://www.cbirc.gov.cn/cn/view/pages/ItemList.html?itemPId=960&itemId=4229&itemUrl=ItemListRightMore.html) |
| --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [4171](https://rsshub.app/gov/cbirc/4171)                                                                                   | [4217](https://rsshub.app/gov/cbirc/4217)                                                                                     | [4229](https://rsshub.app/gov/cbirc/4229)                                                                                                                       |
  

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/nsfc/*","name":"Unknown","maintainers":[],"location":"nsfc/index.ts","heat":26,"topFeeds":[{"id":"63261228706922499","type":"feed","url":"rsshub://gov/nsfc/news/tzgg","title":"国家自然科学基金委员会 - 基金要闻 - 指南通告","description":"指南通告 - Powered by RSSHub","image":null},{"id":"65380269087729741","type":"feed","url":"rsshub://gov/nsfc/news/kpkx","title":"国家自然科学基金委员会 - 基金要闻 - 科普快讯","description":"科普快讯 - Powered by RSSHub","image":null}]}' :test='undefined' />

### 中华人民共和国农业农村部数据 <Site url="www.moa.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/moa/zdscxx/:category{.+}?","name":"中华人民共和国农业农村部数据","url":"www.moa.gov.cn","maintainers":["nczitzk"],"example":"/gov/moa/zdscxx","parameters":{"category":"分类，默认为全部，见下表"},"description":"::: tip\n  若订阅 [中华人民共和国农业农村部数据](http://zdscxx.moa.gov.cn:8080/nyb/pc/messageList.jsp) 的 `价格指数` 报告主题。此时路由为 [`/gov/moa/zdscxx/价格指数`](https://rsshub.app/gov/moa/zdscxx/价格指数)。\n\n  若订阅 `央视网` 报告来源 的 `蔬菜生产` 报告主题。此时路由为 [`/gov/moa/zdscxx/央视网/蔬菜生产`](https://rsshub.app/gov/moa/zdscxx/央视网/蔬菜生产)。\n:::\n\n| 价格指数 | 供需形势 | 分析报告周报 | 分析报告日报 | 日历信息 | 蔬菜生产 |\n| -------- | -------- | ------------ | ------------ | -------- | -------- |\n    ","categories":["government"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"title":"价格指数","source":["zdscxx.moa.gov.cn:8080/nyb/pc/messageList.jsp"],"target":"/gov/moa/zdscxx/价格指数"},{"title":"供需形势","source":["zdscxx.moa.gov.cn:8080/nyb/pc/messageList.jsp"],"target":"/gov/moa/zdscxx/供需形势"},{"title":"分析报告周报","source":["zdscxx.moa.gov.cn:8080/nyb/pc/messageList.jsp"],"target":"/gov/moa/zdscxx/分析报告周报"},{"title":"分析报告日报","source":["zdscxx.moa.gov.cn:8080/nyb/pc/messageList.jsp"],"target":"/gov/moa/zdscxx/分析报告日报"},{"title":"日历信息","source":["zdscxx.moa.gov.cn:8080/nyb/pc/messageList.jsp"],"target":"/gov/moa/zdscxx/日历信息"},{"title":"蔬菜生产","source":["zdscxx.moa.gov.cn:8080/nyb/pc/messageList.jsp"],"target":"/gov/moa/zdscxx/蔬菜生产"}],"location":"moa/zdscxx.ts","heat":25,"topFeeds":[{"id":"72147260240052224","type":"feed","url":"rsshub://gov/moa/zdscxx","title":"中华人民共和国农业农村部","description":"数据 - Powered by RSSHub","image":"http://www.moa.gov.cn/images/nyb_logo_V2018.png"},{"id":"92886505678071808","type":"feed","url":"rsshub://gov/moa/zdscxx/%E4%BB%B7%E6%A0%BC%E6%8C%87%E6%95%B0","title":"中华人民共和国农业农村部 - 价格指数","description":"数据 - Powered by RSSHub","image":"http://www.moa.gov.cn/images/nyb_logo_V2018.png"}]}' :test='{"code":0}' />

::: tip
  若订阅 [中华人民共和国农业农村部数据](http://zdscxx.moa.gov.cn:8080/nyb/pc/messageList.jsp) 的 `价格指数` 报告主题。此时路由为 [`/gov/moa/zdscxx/价格指数`](https://rsshub.app/gov/moa/zdscxx/价格指数)。

  若订阅 `央视网` 报告来源 的 `蔬菜生产` 报告主题。此时路由为 [`/gov/moa/zdscxx/央视网/蔬菜生产`](https://rsshub.app/gov/moa/zdscxx/央视网/蔬菜生产)。
:::

| 价格指数 | 供需形势 | 分析报告周报 | 分析报告日报 | 日历信息 | 蔬菜生产 |
| -------- | -------- | ------------ | ------------ | -------- | -------- |
    

### 中华人民共和国国家发展和改革委员会价格监测中心 <Site url="www.jgjcndrc.org.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/jgjcndrc/:columnId?/:subColumnId?","name":"中华人民共和国国家发展和改革委员会价格监测中心","url":"www.jgjcndrc.org.cn","maintainers":["nczitzk"],"example":"/gov/jgjcndrc/1832739866673426433","parameters":{"columnId":"栏目 id，默认为 `1832739866673426433`，即通知公告，可在对应栏目页 URL 中找到","subColumnId":"子栏目 id，默认为空，可在对应子栏目页 URL 中找到"},"description":"::: tip\n  若订阅 [通知公告](https://www.jgjcndrc.org.cn/list?clmId=1832739866673426433)，网址为 `https://www.jgjcndrc.org.cn/list?clmId=1832739866673426433`。截取 `clmId` 的参数部分 `1832739866673426433` 作为参数填入，此时路由为 [`/gov/jgjcndrc/1832739866673426433`](https://rsshub.app/gov/jgjcndrc/1832739866673426433)。\n\n  若订阅 [国内外市场价格监测情况周报](https://www.jgjcndrc.org.cn/list?clmId=1832298113994649601&sclmId=1832751799531220993)，网址为 `https://www.jgjcndrc.org.cn/list?clmId=1832298113994649601&sclmId=1832751799531220993`。截取 `clmId` 和 `sclmId` 的参数部分 `1832298113994649601` 和 `1832751799531220993` 作为参数填入，此时路由为 [`/gov/jgjcndrc/1832298113994649601/1832751799531220993`](https://rsshub.app/gov/jgjcndrc/1832298113994649601/1832751799531220993)。\n:::","categories":["government"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.jgjcndrc.org.cn/list"]}],"location":"jgjcndrc/index.ts","heat":21,"topFeeds":[{"id":"72251568820057088","type":"feed","url":"rsshub://gov/jgjcndrc/1832739866673426433","title":"中华人民共和国国家发展和改革委员会 - 通知公告","description":"中华人民共和国国家发展和改革委员会 价格监测中心 - Powered by RSSHub","image":"https://www.jgjcndrc.org.cn/_nuxt/logo.nPIpRnSK.svg"},{"id":"112027538201244672","type":"feed","url":"rsshub://gov/jgjcndrc/1832298113994649601/1840280592963387394","title":"中华人民共和国国家发展和改革委员会 - 监测信息-猪料、鸡料、蛋料比价信息","description":"监测信息 - 猪料、鸡料、蛋料比价信息 - Powered by RSSHub","image":"https://www.jgjcndrc.org.cn/_nuxt/logo.nPIpRnSK.svg"}]}' :test='{"code":0}' />

::: tip
  若订阅 [通知公告](https://www.jgjcndrc.org.cn/list?clmId=1832739866673426433)，网址为 `https://www.jgjcndrc.org.cn/list?clmId=1832739866673426433`。截取 `clmId` 的参数部分 `1832739866673426433` 作为参数填入，此时路由为 [`/gov/jgjcndrc/1832739866673426433`](https://rsshub.app/gov/jgjcndrc/1832739866673426433)。

  若订阅 [国内外市场价格监测情况周报](https://www.jgjcndrc.org.cn/list?clmId=1832298113994649601&sclmId=1832751799531220993)，网址为 `https://www.jgjcndrc.org.cn/list?clmId=1832298113994649601&sclmId=1832751799531220993`。截取 `clmId` 和 `sclmId` 的参数部分 `1832298113994649601` 和 `1832751799531220993` 作为参数填入，此时路由为 [`/gov/jgjcndrc/1832298113994649601/1832751799531220993`](https://rsshub.app/gov/jgjcndrc/1832298113994649601/1832751799531220993)。
:::

### 要闻动态 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/mee/ywdt/:category?","categories":["government"],"example":"/gov/mee/ywdt/hjywnews","parameters":{"category":"分类名，预设 `szyw`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.mee.gov.cn/ywdt/:category"],"target":"/mee/ywdt/:category"}],"name":"要闻动态","maintainers":["liuxsdev"],"description":"| 时政要闻 | 环境要闻 | 地方快讯 | 新闻发布 | 视频新闻 | 公示公告 |\n| :------: | :------: | :------: | :------: | :------: | :------: |\n|   szyw   | hjywnews |  dfnews  |   xwfb   |   spxw   |   gsgg   |","location":"mee/ywdt.ts","heat":18,"topFeeds":[{"id":"73652336403326987","type":"feed","url":"rsshub://gov/mee/ywdt/hjywnews","title":"环境要闻 - 要闻动态 - 中华人民共和国生态环境部","description":"环境要闻 - 要闻动态 - 中华人民共和国生态环境部 - Powered by RSSHub","image":null},{"id":"131720350563788800","type":"feed","url":"rsshub://gov/mee/ywdt/gsgg","title":"公示公告 - 要闻动态 - 中华人民共和国生态环境部","description":"公示公告 - 要闻动态 - 中华人民共和国生态环境部 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 时政要闻 | 环境要闻 | 地方快讯 | 新闻发布 | 视频新闻 | 公示公告 |
| :------: | :------: | :------: | :------: | :------: | :------: |
|   szyw   | hjywnews |  dfnews  |   xwfb   |   spxw   |   gsgg   |

### 事故及灾害查处 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/mem/gk/sgcc/:category?","categories":["government"],"example":"/gov/mem/gk/sgcc/tbzdsgdcbg","parameters":{"category":"分类，见下表，默认为挂牌督办"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.mem.gov.cn/gk/sgcc/:category"],"target":"/mem/gk/sgcc/:category"}],"name":"事故及灾害查处","maintainers":["nczitzk"],"description":"| 挂牌督办 | 调查报告   |\n| -------- | ---------- |\n| sggpdbqk | tbzdsgdcbg |","location":"mem/sgcc.ts","heat":15,"topFeeds":[{"id":"62730408567519232","type":"feed","url":"rsshub://gov/mem/gk/sgcc/tbzdsgdcbg","title":"调查报告--中华人民共和国应急管理部","description":"调查报告 - Powered by RSSHub","image":"https://www.mem.gov.cn/jg/images/P020250415553134787719.png"},{"id":"73327086064622592","type":"feed","url":"rsshub://gov/mem/gk/sgcc/sggpdbqk","title":"挂牌督办--中华人民共和国应急管理部","description":"挂牌督办 - Powered by RSSHub","image":"https://www.mem.gov.cn/jg/images/P020250415553134787719.png"}]}' :test='{"code":0}' />

| 挂牌督办 | 调查报告   |
| -------- | ---------- |
| sggpdbqk | tbzdsgdcbg |

### 武汉要闻 <Site url="wuhan.gov.cn/sy/whyw/" size="sm" />

<Route namespace="gov" :data='{"path":"/wuhan/sy/whyw","categories":["government"],"example":"/gov/wuhan/sy/whyw","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["wuhan.gov.cn/sy/whyw/","wuhan.gov.cn/whyw","wuhan.gov.cn/"]}],"name":"武汉要闻","maintainers":["nczitzk"],"url":"wuhan.gov.cn/sy/whyw/","location":"wuhan/whyw.ts","heat":14,"topFeeds":[{"id":"58346915458085890","type":"feed","url":"rsshub://gov/wuhan/sy/whyw","title":"武汉动态 - 武汉市人民政府","description":"武汉动态 - 武汉市人民政府 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 上海市发展和改革委员会 <Site url="fgw.sh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":["/sh/fgw/:category{.+}?","/shanghai/fgw/:category{.+}?"],"name":"上海市发展和改革委员会","url":"fgw.sh.gov.cn","maintainers":["nczitzk"],"example":"/gov/sh/fgw/fgw_zxxxgk","parameters":{"category":"分类，默认为 `fgw_zxxxgk`，即最新信息公开，可在对应分类页 URL 中找到"},"description":"::: tip\n  若订阅 [最新信息公开](https://fgw.sh.gov.cn/fgw_zxxxgk/index.html)，网址为 `https://fgw.sh.gov.cn/fgw_zxxxgk/index.html`。截取 `https://fgw.sh.gov.cn/` 到末尾 `/index.html` 的部分 `fgw_zxxxgk` 作为参数填入，此时路由为 [`/gov/sh/fgw/fgw_zxxxgk`](https://rsshub.app/gov/sh/fgw/fgw_zxxxgk)。\n:::\n\n| 最新信息公开 | 要闻动态   |\n| ------------ | ---------- |\n| fgw_zxxxgk   | fgw_fzggdt |\n  ","categories":["government"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["fgw.sh.gov.cn/:category"]},{"title":"最新信息公开","source":["fgw.sh.gov.cn/fgw_zxxxgk/index.html"],"target":"/sh/fgw/fgw_zxxxgk"},{"title":"要闻动态","source":["fgw.sh.gov.cn/fgw_fzggdt/index.html"],"target":"/sh/fgw/fgw_fzggdt"}],"location":"sh/fgw/index.ts","heat":11,"topFeeds":[{"id":"66776163809391616","type":"feed","url":"rsshub://gov/sh/fgw/fgw_zxxxgk","title":"上海市发展和改革委员会 - 最新政策","description":"最新政策 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

::: tip
  若订阅 [最新信息公开](https://fgw.sh.gov.cn/fgw_zxxxgk/index.html)，网址为 `https://fgw.sh.gov.cn/fgw_zxxxgk/index.html`。截取 `https://fgw.sh.gov.cn/` 到末尾 `/index.html` 的部分 `fgw_zxxxgk` 作为参数填入，此时路由为 [`/gov/sh/fgw/fgw_zxxxgk`](https://rsshub.app/gov/sh/fgw/fgw_zxxxgk)。
:::

| 最新信息公开 | 要闻动态   |
| ------------ | ---------- |
| fgw_zxxxgk   | fgw_fzggdt |
  

### 政府新闻 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/suzhou/news/:uid","categories":["government"],"example":"/gov/suzhou/news/news","parameters":{"uid":"栏目名"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.suzhou.gov.cn/szsrmzf/:uid/nav_list.shtml"]}],"name":"政府新闻","maintainers":["EsuRt","luyuhuang"],"description":"| 新闻栏目名 |       :uid       |\n| :--------: | :--------------: |\n|  苏州要闻  |   news 或 szyw   |\n|  区县快讯  | district 或 qxkx |\n|  部门动态  |       bmdt       |\n|  新闻视频  |       xwsp       |\n|  政务公告  |       zwgg       |\n|  便民公告  |       mszx       |\n|  民生资讯  |       bmzx       |\n\n| 热点专题栏目名 |  :uid  |\n| :------------: | :----: |\n|    热点专题    |  rdzt  |\n|   市本级专题   |  sbjzt |\n|  最新热点专题  | zxrdzt |\n|    往期专题    |  wqzt  |\n|    区县专题    |  qxzt  |\n\n::: tip\n  **热点专题**栏目包含**市本级专题**和**区县专题**\n\n  **市本级专题**栏目包含**最新热点专题**和**往期专题**\n\n  如需订阅完整的热点专题，仅需订阅 **热点专题**`rdzt` 一项即可。\n:::","location":"suzhou/news.ts","heat":10,"topFeeds":[{"id":"73328043907264512","type":"feed","url":"rsshub://gov/suzhou/news/zwgg","title":"苏州市政府 - 政务公告","description":"苏州市政府 - 政务公告 - Powered by RSSHub","image":null},{"id":"105467750186756096","type":"feed","url":"rsshub://gov/suzhou/news/news","title":"苏州市政府 - 苏州要闻","description":"苏州市政府 - 苏州要闻 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 新闻栏目名 |       :uid       |
| :--------: | :--------------: |
|  苏州要闻  |   news 或 szyw   |
|  区县快讯  | district 或 qxkx |
|  部门动态  |       bmdt       |
|  新闻视频  |       xwsp       |
|  政务公告  |       zwgg       |
|  便民公告  |       mszx       |
|  民生资讯  |       bmzx       |

| 热点专题栏目名 |  :uid  |
| :------------: | :----: |
|    热点专题    |  rdzt  |
|   市本级专题   |  sbjzt |
|  最新热点专题  | zxrdzt |
|    往期专题    |  wqzt  |
|    区县专题    |  qxzt  |

::: tip
  **热点专题**栏目包含**市本级专题**和**区县专题**

  **市本级专题**栏目包含**最新热点专题**和**往期专题**

  如需订阅完整的热点专题，仅需订阅 **热点专题**`rdzt` 一项即可。
:::

### 飞行任务 <Site url="www.cmse.gov.cn/fxrw" size="sm" />

<Route namespace="gov" :data='{"path":"/cmse/fxrw","categories":["government"],"example":"/gov/cmse/fxrw","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.cmse.gov.cn/fxrw"]}],"name":"飞行任务","maintainers":["nczitzk"],"url":"www.cmse.gov.cn/fxrw","location":"cmse/fxrw.ts","heat":9,"topFeeds":[{"id":"84100144752101376","type":"feed","url":"rsshub://gov/cmse/fxrw","title":"飞行任务_中国载人航天官方网站","description":"飞行任务_中国载人航天官方网站 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 深圳市住房和建设局 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/shenzhen/zjj/xxgk/:caty","categories":["government"],"example":"/gov/shenzhen/zjj/xxgk/tzgg","parameters":{"caty":"信息类别"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["zjj.sz.gov.cn/xxgk/:caty"]}],"name":"深圳市住房和建设局","maintainers":["lonn"],"description":"| 通知公告 |\n| :------: |\n|   tzgg   |","location":"shenzhen/zjj/index.ts","heat":9,"topFeeds":[{"id":"69966067980854272","type":"feed","url":"rsshub://gov/shenzhen/zjj/xxgk/tzgg","title":"深圳市住房和建设局 - 通知公告","description":"深圳市住房和建设局 - 通知公告 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"Error: STACK_TRACE_ERROR\n    at task (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:633:27)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:660:16)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:457:28)\n    at chain (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/chunk-tasks.js:9:14)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:72:12\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:40\n    at runWithSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1588:8)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:10)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:739:54)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at collectTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1048:25)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1556:17)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:85:25)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:153:2)\n    at executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/init-forks.aqTzCSR2.js:29:4)"}' />

| 通知公告 |
| :------: |
|   tzgg   |

### 重庆市人民政府 人力社保局 - 事业单位公开招聘 <Site url="rlsbj.cq.gov.cn/" size="sm" />

<Route namespace="gov" :data='{"path":"/chongqing/sydwgkzp/:year?","url":"rlsbj.cq.gov.cn/","categories":["government"],"example":"/gov/chongqing/sydwgkzp","parameters":{"year":"需要订阅的年份，格式为`YYYY`，必须小于等于当前年份，默认为当前年份"},"radar":[{"source":["rlsbj.cq.gov.cn/"]}],"name":"重庆市人民政府 人力社保局 - 事业单位公开招聘","maintainers":["MajexH"],"location":"chongqing/sydwgkzp.ts","heat":8,"topFeeds":[{"id":"56020776125420544","type":"feed","url":"rsshub://gov/chongqing/sydwgkzp","title":"重庆市事业单位2025年公开招聘","description":"重庆市事业单位2025年公开招聘 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 中华人民共和国农业农村部生猪专题重要政策 <Site url="www.moa.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/moa/szcpxx","name":"中华人民共和国农业农村部生猪专题重要政策","url":"www.moa.gov.cn","maintainers":["nczitzk"],"example":"/gov/moa/szcpxx","categories":["government"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.moa.gov.cn/ztzl/szcpxx/zyzc/index.htm"],"target":"/moa/szcpxx"}],"location":"moa/szcpxx.ts","heat":8,"topFeeds":[{"id":"73138476661404672","type":"feed","url":"rsshub://gov/moa/szcpxx","title":"农业农村部生猪专题 - 重要政策","description":"农业农村部生猪专题 - 重要政策 - Powered by RSSHub","image":"http://www.moa.gov.cn/images/ztsz_list_logo2.png"}]}' :test='{"code":0}' />

### 司局通知 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/moe/s78/:column","categories":["government"],"example":"/gov/moe/s78/A13","parameters":{"column":"司局 ID，可在 URL 找到"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["moe.gov.cn/s78/:column/tongzhi","moe.gov.cn/s78/:column"]}],"name":"司局通知","maintainers":["TonyRL"],"location":"moe/s78.ts","heat":8,"topFeeds":[{"id":"92474699286284288","type":"feed","url":"rsshub://gov/moe/s78/A08","title":"高等教育司 - 司局通知 - 中华人民共和国教育部政府门户网站","description":"高等教育司 - 司局通知 - 中华人民共和国教育部政府门户网站 - Powered by RSSHub","image":null},{"id":"75853854808636416","type":"feed","url":"rsshub://gov/moe/s78/A13","title":"社会科学司 - 司局通知 - 中华人民共和国教育部政府门户网站","description":"社会科学司 - 司局通知 - 中华人民共和国教育部政府门户网站 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 留言咨询 <Site url="xgzlyhd.samr.gov.cn/gjjly/index" size="sm" />

<Route namespace="gov" :data='{"path":"/samr/xgzlyhd/:category?/:department?","categories":["government"],"example":"/gov/samr/xgzlyhd","parameters":{"category":"留言类型，见下表，默认为全部","department":"回复部门，见下表，默认为全部"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["xgzlyhd.samr.gov.cn/gjjly/index"]}],"name":"留言咨询","maintainers":["nczitzk"],"url":"xgzlyhd.samr.gov.cn/gjjly/index","description":"#### 留言类型\n\n| 类型                                       | 类型 id                          |\n| ------------------------------------------ | -------------------------------- |\n| 反腐倡廉                                   | 14101a4192df48b592b5cfd77a26c0cf |\n| 规划统计                                   | b807cf9cdf434635ae908d48757e0f39 |\n| 行政执法和复议                             | 8af2530e77154d7b939428667b7413f6 |\n| 假冒仿冒行为                               | 75374a34b95341829e08e54d4a0d8c04 |\n| 走私贩私                                   | 84c728530e1e478e94fe3f0030171c53 |\n| 登记注册                                   | 07fff64612dc41aca871c06587abf71d |\n| 个体工商户登记                             | ca8f91ba9a2347a0acd57ea5fd12a5c8 |\n| 信用信息公示系统                           | 1698886c3cdb495998d5ea9285a487f5 |\n| 市场主体垄断                               | 77bfe965843844449c47d29f2feb7999 |\n| 反不正当竞争                               | 2c919b1dc39440d8850c4f6c405869f8 |\n| 商业贿赂                                   | b494e6535af149c5a51fd4197993f061 |\n| 打击传销与规范直销                         | 407a1404844e48558da46139f16d6232 |\n| 消费环境建设                               | 94c2003331dd4c5fa19b0cf88d720676 |\n| 网络交易监管                               | 6302aac5b87140598da53f85c1ccb8fa |\n| 动产抵押登记                               | 3856de5835444229943b18cac7781e9f |\n| 广告监管                                   | d0e38171042048c2bf31b05c5e57aa68 |\n| 三包                                       | c4dbd85692604a428b1ea7613e67beb8 |\n| 缺陷产品召回                               | f93c9a6b81e941d09a547406370e1c0c |\n| 工业生产许可                               | 2b41afaabaa24325b53a5bd7deba895b |\n| 产品质量监督抽查                           | 4388504cb0c04e988e2cf0c90d4a3f14 |\n| 食品安全协调                               | 3127b9f409c24d0eaa60b13c25f819fa |\n| 食品生产监管                               | beaa5555d1364e5bb2a0f0a7cc9720e5 |\n| 食品销售、餐饮服务、食用农产品销售监管     | 3b6c49c6ce934e1b9505601a3b881a6a |\n| 保健、特殊医学用途配方和婴幼儿配方乳粉监管 | 13b43888f8554e078b1dfa475e2aaab0 |\n| 食品监督抽检、召回                         | 0eb6c75581bf41ecaedc629370cb425c |\n| 食品安全标准                               | 399cfd9abfa34c22a5cb3bb971a43819 |\n| 特种设备人员、机构管理                     | e5d0e51cc7d0412790efac605008bf20 |\n| 特种设备检验                               | 03f22fb3d4cd4f09b632079359e9dd7d |\n| 计量器具                                   | 90b25e22861446d5822e07c7c1f5169a |\n| 计量机构和人员管理                         | 76202742f06c459da7482160e0ce17ad |\n| 国家标准                                   | 299b9672e1c246e69485a5b695f42c5b |\n| 行业、地方、团体、企业标准                 | cbdc804c9b2c4e259a159c32eccf4ca9 |\n| 认证监督管理                               | 41259262a42e4de49b5c0b7362ac3796 |\n| 认可与检验检测                             | cb3c9d1e3d364f2a8b1cd70efa69d1cb |\n| 新闻宣传                                   | e3e553e4019c46ccbdc06136900138e9 |\n| 科技财务                                   | 47367b9704964355ba52899a4c5abbb0 |\n| 干部人事                                   | 6b978e3c127c489ea8e2d693b768887e |\n| 国际合作                                   | dd5ce768e33e435ab4bfb769ab6e079a |\n| 党群工作                                   | aa71052978af4304937eb382f24f9902 |\n| 退休干部                                   | 44505fc58c81428eb5cef15706007b5e |\n| 虚假宣传                                   | 5bb2b83ecadb4bf89a779cee414a81dd |\n| 滥用行政权力                               | 1215206156dc48029b98da825f26fcbc |\n| 公平竞争                                   | 9880a23dcbb04deba2cc7b4404e13ff6 |\n| 滥用市场支配地位                           | fea04f0acd84486e84cf71d9c13005b0 |\n| 数字经济领域反垄断执法                     | 4bea424a6e4c4e2aac19fe3c73f9be23 |\n| 并购行为                                   | 90e315647acd415ca68f97fc1b42053d |\n| 经营者集中案件                             | d6571d2cd5624bc18191b342a2e8defb |\n| 数字经济领域反垄断审查                     | 03501ef176ef44fba1c7c70da44ba8a0 |\n| 综合执法                                   | cfbb1b5dade446299670ca38844b265e |\n| 信用监管                                   | a9d76ea04a3a4433946bc02b0bdb77eb |\n| 3C 认证                                    | 111decc7b14a4fdbae86fb4a3ba5c0c1 |\n| 食用农产品                                 | 3159db51f8ca4f23a9340d87d5572d40 |\n| 食品添加                                   | 4e4b0e0152334cbb9c62fd1b80138305 |\n\n#### 回复部门\n\n| 部门                         | 部门 id                          |\n| ---------------------------- | -------------------------------- |\n| 办公厅                       | 6ed539b270634667afc4d466b67a53f7 |\n| 法规司                       | 8625ec7ff8d744ad80a1d1a2bf19cf19 |\n| 执法稽查局                   | 313a8cb1c09042dea52be52cb392c557 |\n| 登记注册局                   | e4553350549f45f38da5602147cf8639 |\n| 信用监督管理司               | 6af98157255a4a858eac5f94ba8d98f4 |\n| 竞争政策协调司               | 8d2266be4791483297822e1aa5fc0a96 |\n| 综合规划司                   | 958e1619159c45a7b76663a59d9052ea |\n| 反垄断执法一司               | f9fb3f6225964c71ab82224a91f21b2c |\n| 反垄断执法二司               | 7986c79e4f16403493d5b480aec30be4 |\n| 价格监督检查和反不正当竞争局 | c5d2b1b273b545cfbc6f874f670654ab |\n| 网络交易监督管理司           | 6ac05b4dbd4e41c69f4529262540459b |\n| 广告监督管理司               | 96457dfe16c54840885b79b4e6e17523 |\n| 质量发展局                   | cb8d2b16fbb540dca296aa33a43fc573 |\n| 质量监督司                   | af2c4e0a54c04f76b512c29ddd075d40 |\n| 食品安全协调司               | cc29962c74e84ef2b21e44336da6c6c5 |\n| 食品生产安全监督管理司       | b334db85a253458285db70b30ee26b0a |\n| 食品经营安全监督管理司       | 4315f0261a5d49f7bdcc5a7524e19ce3 |\n| 特殊食品安全监督管理司       | 62d14f386317486ca94bc53ca7f88891 |\n| 食品安全抽检监测司           | abfc910832cc460a81876ad418618159 |\n| 特种设备安全监察局           | ea79f90bec5840ef9b0881c83682225a |\n| 计量司                       | b0556236fbcf4f45b6fdec8004dac3e4 |\n| 标准技术管理司               | a558d07a51f4454fa59290e0d6e93c26 |\n| 标准创新管理司               | ffb3a80984b344ed8d168f4af6508af0 |\n| 认证监督管理司               | ca4987393d514debb4d1e2126f576987 |\n| 认可与检验检测监督管理司     | 796bfab21b15498e88c9032fe3e3c9f1 |\n| 新闻宣传司                   | 884fc0ea6c184ad58dda10e2170a1eda |\n| 科技和财务司                 | 117355eea94c426199e2e519fd98ce07 |\n| 人事司                       | a341e8b7929e44769b9424b7cf69d32a |\n| 国际司                       | f784499ef24541f5b20de4c24cfc61e7 |\n| 机关党委                     | a49119c6f40045dd994f3910500cedfa |\n| 离退办                       | 6bf265ffd1c94fa4a3f1687b03fa908b |","location":"samr/xgzlyhd.ts","heat":8,"topFeeds":[{"id":"61218903598816256","type":"feed","url":"rsshub://gov/samr/xgzlyhd","title":"国家市场监督管理总局公众留言","description":"国家市场监督管理总局公众留言 - Powered by RSSHub","image":"https://xgzlyhd.samr.gov.cn/gjjly/img/fd-logo.png;JSESSIONID=fwAAAR-QaRwcXsrsHa_-3UNruDtZWELXo6wA"},{"id":"121856330169468928","type":"feed","url":"rsshub://gov/samr/xgzlyhd/:category","title":"国家市场监督管理总局公众留言","description":"国家市场监督管理总局公众留言 - Powered by RSSHub","image":"https://xgzlyhd.samr.gov.cn/gjjly/img/fd-logo.png;JSESSIONID=fwAAAR-QaQlZXx2GSYDRJkD6hB5i6_7sG54A"}]}' :test='{"code":0}' />

#### 留言类型

| 类型                                       | 类型 id                          |
| ------------------------------------------ | -------------------------------- |
| 反腐倡廉                                   | 14101a4192df48b592b5cfd77a26c0cf |
| 规划统计                                   | b807cf9cdf434635ae908d48757e0f39 |
| 行政执法和复议                             | 8af2530e77154d7b939428667b7413f6 |
| 假冒仿冒行为                               | 75374a34b95341829e08e54d4a0d8c04 |
| 走私贩私                                   | 84c728530e1e478e94fe3f0030171c53 |
| 登记注册                                   | 07fff64612dc41aca871c06587abf71d |
| 个体工商户登记                             | ca8f91ba9a2347a0acd57ea5fd12a5c8 |
| 信用信息公示系统                           | 1698886c3cdb495998d5ea9285a487f5 |
| 市场主体垄断                               | 77bfe965843844449c47d29f2feb7999 |
| 反不正当竞争                               | 2c919b1dc39440d8850c4f6c405869f8 |
| 商业贿赂                                   | b494e6535af149c5a51fd4197993f061 |
| 打击传销与规范直销                         | 407a1404844e48558da46139f16d6232 |
| 消费环境建设                               | 94c2003331dd4c5fa19b0cf88d720676 |
| 网络交易监管                               | 6302aac5b87140598da53f85c1ccb8fa |
| 动产抵押登记                               | 3856de5835444229943b18cac7781e9f |
| 广告监管                                   | d0e38171042048c2bf31b05c5e57aa68 |
| 三包                                       | c4dbd85692604a428b1ea7613e67beb8 |
| 缺陷产品召回                               | f93c9a6b81e941d09a547406370e1c0c |
| 工业生产许可                               | 2b41afaabaa24325b53a5bd7deba895b |
| 产品质量监督抽查                           | 4388504cb0c04e988e2cf0c90d4a3f14 |
| 食品安全协调                               | 3127b9f409c24d0eaa60b13c25f819fa |
| 食品生产监管                               | beaa5555d1364e5bb2a0f0a7cc9720e5 |
| 食品销售、餐饮服务、食用农产品销售监管     | 3b6c49c6ce934e1b9505601a3b881a6a |
| 保健、特殊医学用途配方和婴幼儿配方乳粉监管 | 13b43888f8554e078b1dfa475e2aaab0 |
| 食品监督抽检、召回                         | 0eb6c75581bf41ecaedc629370cb425c |
| 食品安全标准                               | 399cfd9abfa34c22a5cb3bb971a43819 |
| 特种设备人员、机构管理                     | e5d0e51cc7d0412790efac605008bf20 |
| 特种设备检验                               | 03f22fb3d4cd4f09b632079359e9dd7d |
| 计量器具                                   | 90b25e22861446d5822e07c7c1f5169a |
| 计量机构和人员管理                         | 76202742f06c459da7482160e0ce17ad |
| 国家标准                                   | 299b9672e1c246e69485a5b695f42c5b |
| 行业、地方、团体、企业标准                 | cbdc804c9b2c4e259a159c32eccf4ca9 |
| 认证监督管理                               | 41259262a42e4de49b5c0b7362ac3796 |
| 认可与检验检测                             | cb3c9d1e3d364f2a8b1cd70efa69d1cb |
| 新闻宣传                                   | e3e553e4019c46ccbdc06136900138e9 |
| 科技财务                                   | 47367b9704964355ba52899a4c5abbb0 |
| 干部人事                                   | 6b978e3c127c489ea8e2d693b768887e |
| 国际合作                                   | dd5ce768e33e435ab4bfb769ab6e079a |
| 党群工作                                   | aa71052978af4304937eb382f24f9902 |
| 退休干部                                   | 44505fc58c81428eb5cef15706007b5e |
| 虚假宣传                                   | 5bb2b83ecadb4bf89a779cee414a81dd |
| 滥用行政权力                               | 1215206156dc48029b98da825f26fcbc |
| 公平竞争                                   | 9880a23dcbb04deba2cc7b4404e13ff6 |
| 滥用市场支配地位                           | fea04f0acd84486e84cf71d9c13005b0 |
| 数字经济领域反垄断执法                     | 4bea424a6e4c4e2aac19fe3c73f9be23 |
| 并购行为                                   | 90e315647acd415ca68f97fc1b42053d |
| 经营者集中案件                             | d6571d2cd5624bc18191b342a2e8defb |
| 数字经济领域反垄断审查                     | 03501ef176ef44fba1c7c70da44ba8a0 |
| 综合执法                                   | cfbb1b5dade446299670ca38844b265e |
| 信用监管                                   | a9d76ea04a3a4433946bc02b0bdb77eb |
| 3C 认证                                    | 111decc7b14a4fdbae86fb4a3ba5c0c1 |
| 食用农产品                                 | 3159db51f8ca4f23a9340d87d5572d40 |
| 食品添加                                   | 4e4b0e0152334cbb9c62fd1b80138305 |

#### 回复部门

| 部门                         | 部门 id                          |
| ---------------------------- | -------------------------------- |
| 办公厅                       | 6ed539b270634667afc4d466b67a53f7 |
| 法规司                       | 8625ec7ff8d744ad80a1d1a2bf19cf19 |
| 执法稽查局                   | 313a8cb1c09042dea52be52cb392c557 |
| 登记注册局                   | e4553350549f45f38da5602147cf8639 |
| 信用监督管理司               | 6af98157255a4a858eac5f94ba8d98f4 |
| 竞争政策协调司               | 8d2266be4791483297822e1aa5fc0a96 |
| 综合规划司                   | 958e1619159c45a7b76663a59d9052ea |
| 反垄断执法一司               | f9fb3f6225964c71ab82224a91f21b2c |
| 反垄断执法二司               | 7986c79e4f16403493d5b480aec30be4 |
| 价格监督检查和反不正当竞争局 | c5d2b1b273b545cfbc6f874f670654ab |
| 网络交易监督管理司           | 6ac05b4dbd4e41c69f4529262540459b |
| 广告监督管理司               | 96457dfe16c54840885b79b4e6e17523 |
| 质量发展局                   | cb8d2b16fbb540dca296aa33a43fc573 |
| 质量监督司                   | af2c4e0a54c04f76b512c29ddd075d40 |
| 食品安全协调司               | cc29962c74e84ef2b21e44336da6c6c5 |
| 食品生产安全监督管理司       | b334db85a253458285db70b30ee26b0a |
| 食品经营安全监督管理司       | 4315f0261a5d49f7bdcc5a7524e19ce3 |
| 特殊食品安全监督管理司       | 62d14f386317486ca94bc53ca7f88891 |
| 食品安全抽检监测司           | abfc910832cc460a81876ad418618159 |
| 特种设备安全监察局           | ea79f90bec5840ef9b0881c83682225a |
| 计量司                       | b0556236fbcf4f45b6fdec8004dac3e4 |
| 标准技术管理司               | a558d07a51f4454fa59290e0d6e93c26 |
| 标准创新管理司               | ffb3a80984b344ed8d168f4af6508af0 |
| 认证监督管理司               | ca4987393d514debb4d1e2126f576987 |
| 认可与检验检测监督管理司     | 796bfab21b15498e88c9032fe3e3c9f1 |
| 新闻宣传司                   | 884fc0ea6c184ad58dda10e2170a1eda |
| 科技和财务司                 | 117355eea94c426199e2e519fd98ce07 |
| 人事司                       | a341e8b7929e44769b9424b7cf69d32a |
| 国际司                       | f784499ef24541f5b20de4c24cfc61e7 |
| 机关党委                     | a49119c6f40045dd994f3910500cedfa |
| 离退办                       | 6bf265ffd1c94fa4a3f1687b03fa908b |

### 上海市文旅局审批公告 <Site url="wsbs.wgj.sh.gov.cn/" size="sm" />

<Route namespace="gov" :data='{"path":["/sh/wgj/:page?","/shanghai/wgj/:page?"],"categories":["government"],"example":"/gov/sh/wgj","parameters":{"page":"页数，默认第 1 页"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["wsbs.wgj.sh.gov.cn/"],"target":"/sh/wgj"}],"name":"上海市文旅局审批公告","maintainers":["gideonsenku"],"url":"wsbs.wgj.sh.gov.cn/","location":"sh/wgj/wgj.ts","heat":6,"topFeeds":[{"id":"71029156450169856","type":"feed","url":"rsshub://gov/sh/wgj","title":"上海市文化和旅游局","description":"上海市文化和旅游局 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected NaN to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 政府信息公开文件 <Site url="www.suzhou.gov.cn/szxxgk/front/xxgk_right.jsp" size="sm" />

<Route namespace="gov" :data='{"path":"/suzhou/doc","categories":["government"],"example":"/gov/suzhou/doc","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.suzhou.gov.cn/szxxgk/front/xxgk_right.jsp","www.suzhou.gov.cn/"]}],"name":"政府信息公开文件","maintainers":["EsuRt"],"url":"www.suzhou.gov.cn/szxxgk/front/xxgk_right.jsp","location":"suzhou/doc.ts","heat":6,"topFeeds":[{"id":"73327549478375424","type":"feed","url":"rsshub://gov/suzhou/doc","title":"苏州市政府 - 政策公开文件","description":"苏州市政府 - 政策公开文件 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 通知公告 <Site url="jw.beijing.gov.cn/tzgg" size="sm" />

<Route namespace="gov" :data='{"path":"/beijing/jw/tzgg","categories":["government"],"example":"/gov/beijing/jw/tzgg","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["jw.beijing.gov.cn/tzgg"]}],"name":"通知公告","maintainers":["nczitzk"],"url":"jw.beijing.gov.cn/tzgg","location":"beijing/jw/tzgg.ts","heat":5,"topFeeds":[{"id":"61219411365452800","type":"feed","url":"rsshub://gov/beijing/jw/tzgg","title":"北京市教育委员会 - 通知公告","description":"北京市教育委员会门户网站由北京市教育委员会主办，北京教育网络和信息中心负责运行维护，是北京市教育委员会在互联网上发布教育相关信息和提供在线服务的综合平台，权威发布北京市教育重大决策部署和重要政策文件以及各类便民提示，搭建北京教育与公众互动的交流渠道，展示北京教育风貌等。 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### Immigration and Citizenship - News <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/immiau/news","categories":["government"],"example":"/gov/immiau/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Immigration and Citizenship - News","maintainers":["liu233w"],"location":"immiau/news.ts","heat":5,"topFeeds":[{"id":"41388765730464782","type":"feed","url":"rsshub://gov/immiau/news","title":"News - Immigration and Citizenship","description":"Australia Government, Department of Home Affairs - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

### 政务公开-浦东新区 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/pudong/zwgk","categories":["government"],"example":"/gov/pudong/zwgk","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.pudong.gov.cn/zwgk/zxxxgk/index.html"],"target":"/pudong/zwgk"}],"name":"政务公开-浦东新区","maintainers":["himingway"],"location":"pudong/zwgk.ts","heat":5,"topFeeds":[{"id":"70670986639239168","type":"feed","url":"rsshub://gov/pudong/zwgk","title":"信息公开_政务公开-上海市浦东新区门户网站","description":"信息公开_政务公开-上海市浦东新区门户网站 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"Error: STACK_TRACE_ERROR\n    at task (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:633:27)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:660:16)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:457:28)\n    at chain (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/chunk-tasks.js:9:14)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:72:12\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:40\n    at runWithSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1588:8)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:10)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:739:54)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at collectTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1048:25)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1556:17)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:85:25)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:153:2)\n    at executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/init-forks.aqTzCSR2.js:29:4)"}' />

### 最新文件 <Site url="www.gov.cn/" size="sm" />

<Route namespace="gov" :data='{"path":"/zhengce/wenjian/:pcodeJiguan?","categories":["government"],"example":"/gov/zhengce/wenjian","parameters":{"pcodeJiguan":"文种分类。国令、国发、国函、国发明电、国办发、国办函、国办发明电、其他"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.gov.cn/"],"target":"/zhengce/wenjian"}],"name":"最新文件","maintainers":["ciaranchen"],"url":"www.gov.cn/","location":"zhengce/wenjian.ts","heat":5,"topFeeds":[{"id":"145767488928582665","type":"feed","url":"rsshub://gov/zhengce/wenjian","title":"Importing","description":null,"image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 法定主动公开内容 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/mem/gk/zfxxgkpt/fdzdgknr","categories":["government"],"example":"/gov/mem/gk/zfxxgkpt/fdzdgknr","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.mem.gov.cn/gk/zfxxgkpt/fdzdgknr"],"target":"/mem/gk/zfxxgkpt/fdzdgknr"}],"name":"法定主动公开内容","maintainers":["skeaven"],"description":"应急管理部法定主动公开内容,包含通知、公告、督办、政策解读等，可供应急相关工作人员及时获取政策信息","location":"mem/zfxxgkpt.ts","heat":3,"topFeeds":[{"id":"184876403387650048","type":"feed","url":"rsshub://gov/mem/gk/zfxxgkpt/fdzdgknr","title":"法定主动公开内容","description":"法定主动公开内容 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

应急管理部法定主动公开内容,包含通知、公告、督办、政策解读等，可供应急相关工作人员及时获取政策信息

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/nopss/*","name":"Unknown","maintainers":[],"location":"nopss/index.ts","heat":3,"topFeeds":[{"id":"68892056440478838","type":"feed","url":"rsshub://gov/nopss/GB/219469/431028","title":"閲嶅ぇ椤圭洰- 鍏ㄥ浗鍝插绀句細绉戝宸ヤ綔鍔炲叕瀹�","description":"閲嶅ぇ椤圭洰- 鍏ㄥ浗鍝插绀句細绉戝宸ヤ綔鍔炲叕瀹� - Powered by RSSHub","image":null},{"id":"68892056440478837","type":"feed","url":"rsshub://gov/nopss/GB/219469/431030","title":"鍚庢湡璧勫姪椤圭洰- 鍏ㄥ浗鍝插绀句細绉戝宸ヤ綔鍔炲叕瀹�","description":"鍚庢湡璧勫姪椤圭洰- 鍏ㄥ浗鍝插绀句細绉戝宸ヤ綔鍔炲叕瀹� - Powered by RSSHub","image":null}]}' :test='undefined' />

### 深圳市罗湖区人民政府 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/shenzhen/szlh/zwfw/zffw/:caty","categories":["government"],"example":"/gov/shenzhen/szlh/zwfw/zffw/tzgg","parameters":{"caty":"信息类别"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["szlh.gov.cn/zwfw/zffw/:caty"]}],"name":"深圳市罗湖区人民政府","maintainers":["lonn"],"description":"| 通知公告 |\n| :------: |\n|   tzgg   |","location":"shenzhen/szlh/index.ts","heat":3,"topFeeds":[{"id":"177353249662572544","type":"feed","url":"rsshub://gov/shenzhen/szlh/zwfw/zffw/tzgg","title":"深圳市罗湖区人民政府 - 通知公告","description":"深圳市罗湖区人民政府 - 通知公告 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 通知公告 |
| :------: |
|   tzgg   |

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/gz/:channel/:category","name":"Unknown","maintainers":[],"location":"gz/index.ts","heat":2,"topFeeds":[{"id":"97137065067580580","type":"feed","url":"rsshub://gov/gz/zwgk/zcjd","title":"广州市人民政府 - 文字解读","description":"广州市人民政府 - 文字解读 - Powered by RSSHub","image":null},{"id":"73918360042176521","type":"feed","url":"rsshub://gov/gz/xw/tzgg","title":"广州市人民政府 - 通知公告","description":"广州市人民政府 - 通知公告 - Powered by RSSHub","image":null}]}' :test='undefined' />

### 文件发布 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/miit/wjfb/:ministry","categories":["government"],"example":"/gov/miit/wjfb/ghs","parameters":{"ministry":"部门缩写，可以在对应 URL 中获取"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["miit.gov.cn/jgsj/:ministry/wjfb/index.html"]}],"name":"文件发布","maintainers":["Fatpandac"],"location":"miit/wjfb.ts","heat":2,"topFeeds":[{"id":"177905314710033408","type":"feed","url":"rsshub://gov/miit/wjfb/ghs","title":"Importing","description":null,"image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 意见征集 <Site url="miit.gov.cn/gzcy/yjzj/index.html" size="sm" />

<Route namespace="gov" :data='{"path":"/miit/yjzj","categories":["government"],"example":"/gov/miit/yjzj","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["miit.gov.cn/gzcy/yjzj/index.html"]}],"name":"意见征集","maintainers":["Fatpandac"],"url":"miit.gov.cn/gzcy/yjzj/index.html","location":"miit/yjzj.ts","heat":2,"topFeeds":[{"id":"180157875378420750","type":"feed","url":"rsshub://gov/miit/yjzj","title":"Importing","description":null,"image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 浙江省人民政府-全省政府网站统一搜索 <Site url="search.zj.gov.cn/jsearchfront/search.do" size="sm" />

<Route namespace="gov" :data='{"path":"/zj/search/:websiteid?/:word/:cateid?","categories":["government"],"example":"/gov/zj/search","parameters":{"websiteid":"搜索范围-全省、各市各区、详细信息点击源网站https://www.zj.gov.cn/请求中寻找","word":"搜索关键词-默认：人才","cateid":"信息分类-默认：658（全部）","sortType":"排序类型-默认：2（按时间）"},"radar":[{"source":["search.zj.gov.cn/jsearchfront/search.do"],"target":"/zj/search/:websiteid?/:word/:cateid?"}],"name":"浙江省人民政府-全省政府网站统一搜索","url":"search.zj.gov.cn/jsearchfront/search.do","maintainers":["HaoyuLee"],"description":"\n| 行政区域         | websiteid |\n| ------------ | -- |\n| 宁波市本级     | 330201000000000  |\n\n| 搜索关键词         | word    |\n\n| 信息分类         | cateid    |\n\n| 排序类型         | sortType    |\n| ------------ | -- |\n| 按相关度     | 1  |\n| 按时间     | 2  |\n    ","location":"zj/search.ts","heat":2,"topFeeds":[{"id":"139849368771468288","type":"feed","url":"rsshub://gov/zj/search","title":"浙江省人民政府-全省政府网站统一搜索","description":"浙江省人民政府-全省政府网站统一搜索 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />


| 行政区域         | websiteid |
| ------------ | -- |
| 宁波市本级     | 330201000000000  |

| 搜索关键词         | word    |

| 信息分类         | cateid    |

| 排序类型         | sortType    |
| ------------ | -- |
| 按相关度     | 1  |
| 按时间     | 2  |
    

### 重庆市人民政府 国有资产监督管理委员会 <Site url="gzw.cq.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/chongqing/gzw/:category{.+}?","parameters":{"category":"分类，见下表，默认为通知公告"},"name":"重庆市人民政府 国有资产监督管理委员会","url":"gzw.cq.gov.cn","maintainers":["nczitzk"],"radar":[{"source":"gzw.cq.gov.cn/*category","target":"/chongqing/gzw/*category"}],"description":"| 通知公告  | 国企资讯 | 国企简介 | 国企招聘 |\n| --------- | -------- | -------- | -------- |\n| tzgg_191 | gqdj     | gqjj     | gqzp     |","location":"chongqing/gzw.ts","heat":1,"topFeeds":[{"id":"144222426224988177","type":"feed","url":"rsshub://gov/chongqing/gzw","title":"重庆市国有资产监督管理委员会门户网站 - 通知公告","description":"重庆市国有资产监督管理委员会网站-通知公告栏目,主要展示-通知公告相关的内容,是-通知公告的信息展示窗口 - Powered by RSSHub","image":"https://gzw.cq.gov.cn/images/logo.png"}]}' :test='undefined' />

| 通知公告  | 国企资讯 | 国企简介 | 国企招聘 |
| --------- | -------- | -------- | -------- |
| tzgg_191 | gqdj     | gqjj     | gqzp     |

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/mofcom/article/:suffix{.+}","name":"Unknown","maintainers":[],"location":"mofcom/article.ts","heat":1,"topFeeds":[{"id":"198372079645781010","type":"feed","url":"rsshub://gov/mofcom/article/xwfb","title":"Importing","description":null,"image":null}]}' :test='undefined' />

### 中华人民共和国交通运输部 <Site url="www.mot.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/mot/:category{.+}?","name":"中华人民共和国交通运输部","url":"www.mot.gov.cn","maintainers":["ladeng07","nczitzk"],"example":"/gov/mot/jiaotongyaowen","parameters":{"category":{"description":"分类，默认为 `jiaotongyaowen`，即交通要闻，可在对应分类页 URL 中找到","options":[{"label":"交通要闻","value":"jiaotongyaowen"},{"label":"时政要闻","value":"shizhengyaowen"},{"label":"重要会议","value":"zhongyaohuiyi"}]}},"description":"::: tip\n若订阅 [重要会议](https://www.mot.gov.cn/zhongyaohuiyi/)，网址为 `https://www.mot.gov.cn/zhongyaohuiyi/`，请截取 `https://www.mot.gov.cn/` 到末尾 `/` 的部分 `zhongyaohuiyi` 作为 `category` 参数填入，此时目标路由为 [`/gov/mot/zhongyaohuiyi`](https://rsshub.app/gov/mot/zhongyaohuiyi)。\n:::","categories":["government"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.mot.gov.cn/:category"]},{"title":"交通要闻","source":["www.mot.gov.cn/jiaotongyaowen/"],"target":"/mot/jiaotongyaowen"},{"title":"时政要闻","source":["www.mot.gov.cn/shizhengyaowen/"],"target":"/mot/shizhengyaowen"},{"title":"重要会议","source":["www.mot.gov.cn/zhongyaohuiyi/"],"target":"/mot/zhongyaohuiyi"}],"view":0,"location":"mot/index.ts","heat":1,"topFeeds":[{"id":"145746403274138624","type":"feed","url":"rsshub://gov/mot/jiaotongyaowen","title":"交通要闻--中华人民共和国交通运输部","description":"中华人民共和国交通运输部,, 交通要闻栏目最新信息发布，想了解“交通要闻”相关信息，请点击访问！ - Powered by RSSHub","image":"https://www.mot.gov.cn/images/h_logo0625.png"}]}' :test='{"code":0}' />

::: tip
若订阅 [重要会议](https://www.mot.gov.cn/zhongyaohuiyi/)，网址为 `https://www.mot.gov.cn/zhongyaohuiyi/`，请截取 `https://www.mot.gov.cn/` 到末尾 `/` 的部分 `zhongyaohuiyi` 作为 `category` 参数填入，此时目标路由为 [`/gov/mot/zhongyaohuiyi`](https://rsshub.app/gov/mot/zhongyaohuiyi)。
:::

### 分类 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/nrta/news/:category?","categories":["government"],"example":"/gov/nrta/news","parameters":{"category":"资讯类别，可从地址中获取，默认为总局要闻"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"分类","maintainers":["yuxinliu-alex"],"description":"| 总局要闻 | 公告公示 | 工作动态 | 其他 |\n| -------- | -------- | -------- | ---- |\n| 112      | 113      | 114      |      |","location":"nrta/news.ts","heat":1,"topFeeds":[{"id":"198372079645781011","type":"feed","url":"rsshub://gov/nrta/news","title":"Importing","description":null,"image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 总局要闻 | 公告公示 | 工作动态 | 其他 |
| -------- | -------- | -------- | ---- |
| 112      | 113      | 114      |      |

### 上海卫健委 疫情通报 <Site url="wsjkw.sh.gov.cn/" size="sm" />

<Route namespace="gov" :data='{"path":["/sh/wsjkw/yqtb","/shanghai/wsjkw/yqtb"],"categories":["government"],"example":"/gov/sh/wsjkw/yqtb","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["wsjkw.sh.gov.cn/"]}],"name":"上海卫健委 疫情通报","maintainers":["zcf0508"],"url":"wsjkw.sh.gov.cn/","location":"sh/wsjkw/yqtb/index.ts","heat":1,"topFeeds":[{"id":"184056448151256103","type":"feed","url":"rsshub://gov/shanghai/wsjkw/yqtb","title":"Importing","description":null,"image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 通知 <Site url="zjks.gov.cn/zjgwy/website/init.htm" size="sm" />

<Route namespace="gov" :data='{"path":"/zhejiang/gwy/:category?/:column?","categories":["government"],"example":"/gov/zhejiang/gwy/1","parameters":{"category":"分类，见下表，默认为全部","column":"地市专栏，见下表，默认为全部"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["zjks.gov.cn/zjgwy/website/init.htm","zjks.gov.cn/zjgwy/website/queryDetail.htm","zjks.gov.cn/zjgwy/website/queryMore.htm"],"target":"/zhejiang/gwy"}],"name":"通知","maintainers":["nczitzk"],"url":"zjks.gov.cn/zjgwy/website/init.htm","description":"| 分类         | id |\n| ------------ | -- |\n| 重要通知     | 1  |\n| 招考公告     | 2  |\n| 招考政策     | 3  |\n| 面试体检考察 | 4  |\n| 录用公示专栏 | 5  |\n\n| 地市         | id    |\n| ------------ | ----- |\n| 浙江省       | 133   |\n| 浙江省杭州市 | 13301 |\n| 浙江省宁波市 | 13302 |\n| 浙江省温州市 | 13303 |\n| 浙江省嘉兴市 | 13304 |\n| 浙江省湖州市 | 13305 |\n| 浙江省绍兴市 | 13306 |\n| 浙江省金华市 | 13307 |\n| 浙江省衢州市 | 13308 |\n| 浙江省舟山市 | 13309 |\n| 浙江省台州市 | 13310 |\n| 浙江省丽水市 | 13311 |\n| 省级单位     | 13317 |","location":"zhejiang/gwy.ts","heat":1,"topFeeds":[{"id":"158073155796592640","type":"feed","url":"rsshub://gov/zhejiang/gwy/1","title":"浙江省公务员考试录用网 - 重要通知","description":"公平考试 严格考察 平等竞争 择优录取 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 分类         | id |
| ------------ | -- |
| 重要通知     | 1  |
| 招考公告     | 2  |
| 招考政策     | 3  |
| 面试体检考察 | 4  |
| 录用公示专栏 | 5  |

| 地市         | id    |
| ------------ | ----- |
| 浙江省       | 133   |
| 浙江省杭州市 | 13301 |
| 浙江省宁波市 | 13302 |
| 浙江省温州市 | 13303 |
| 浙江省嘉兴市 | 13304 |
| 浙江省湖州市 | 13305 |
| 浙江省绍兴市 | 13306 |
| 浙江省金华市 | 13307 |
| 浙江省衢州市 | 13308 |
| 浙江省舟山市 | 13309 |
| 浙江省台州市 | 13310 |
| 浙江省丽水市 | 13311 |
| 省级单位     | 13317 |

### 宁波市国资委-公告 <Site url="gzw.ningbo.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/zj/ningbogzw-notice/:colId?","categories":["government"],"example":"/gov/zj/ningbogzw-notice/1229116730","parameters":{"colId":"公告分类id、详细信息点击源网站http://gzw.ningbo.gov.cn/请求中寻找"},"radar":[{"source":["gzw.ningbo.gov.cn/col/col1229116730/index.html"],"target":"/zj/ningbogzw-notice/:colId?"}],"name":"宁波市国资委-公告","url":"gzw.ningbo.gov.cn","maintainers":["HaoyuLee"],"description":"\n| 公告类别         | colId |\n| ------------ | -- |\n| 首页-市属国企招聘信息-招聘公告     | 1229116730  |\n    ","location":"zj/ningbogzw-notice.ts","heat":1,"topFeeds":[{"id":"140564077109703680","type":"feed","url":"rsshub://gov/zj/ningbogzw-notice","title":"宁波市国资委","description":"宁波市国资委 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"Error: STACK_TRACE_ERROR\n    at task (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:633:27)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:660:16)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:457:28)\n    at chain (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/chunk-tasks.js:9:14)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:72:12\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:40\n    at runWithSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1588:8)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:10)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:739:54)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at collectTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1048:25)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1556:17)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:85:25)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:153:2)\n    at executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/init-forks.aqTzCSR2.js:29:4)"}' />


| 公告类别         | colId |
| ------------ | -- |
| 首页-市属国企招聘信息-招聘公告     | 1229116730  |
    

### 安徽省科学技术厅 <Site url="kjt.ah.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/ah/kjt/:category{.+}?","name":"安徽省科学技术厅","url":"kjt.ah.gov.cn","maintainers":["nczitzk"],"example":"/gov/ah/kjt","parameters":{"category":"分类，默认为 `kjzx/tzgg`，即通知公告，可在对应分类页 URL 中找到"},"description":"::: tip\n  若订阅 [通知公告](https://kjt.ah.gov.cn/kjzx/tzgg/)，网址为 `https://kjt.ah.gov.cn/kjzx/tzgg/`。截取 `https://kjt.ah.gov.cn/` 到末尾 `/` 的部分 `` 作为参数填入，此时路由为 [`/gov/ah/kjt/kjzx/tzgg`](https://rsshub.app/gov/ah/kjt/kjzx/tzgg)。\n:::\n\n#### [科技资讯](https://kjt.ah.gov.cn/kjzx/index.html)\n\n| [通知公告](https://kjt.ah.gov.cn/kjzx/tzgg/index.html) | [工作动态](https://kjt.ah.gov.cn/kjzx/gzdt/index.html) | [基层科技](https://kjt.ah.gov.cn/kjzx/jckj/index.html) | [媒体聚焦](https://kjt.ah.gov.cn/kjzx/mtjj/index.html) |\n| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |\n| [kjzx/tzgg](https://rsshub.app/gov/ah/kjt/kjzx/tzgg)   | [kjzx/gzdt](https://rsshub.app/gov/ah/kjt/kjzx/gzdt)   | [kjzx/jckj](https://rsshub.app/gov/ah/kjt/kjzx/jckj)   | [kjzx/mtjj](https://rsshub.app/gov/ah/kjt/kjzx/mtjj)   |\n  \n| [重要转载](https://kjt.ah.gov.cn/kjzx/zyzz/index.html) | [图片视频](https://kjt.ah.gov.cn/kjzx/tpsp/index.html) |\n| ------------------------------------------------------ | ------------------------------------------------------ |\n| [kjzx/zyzz](https://rsshub.app/gov/ah/kjt/kjzx/zyzz)   | [kjzx/tpsp](https://rsshub.app/gov/ah/kjt/kjzx/tpsp)   |\n\n#### [科技统计](https://kjt.ah.gov.cn/kjzy/kjtj/index.html)\n\n| [技术市场交易](https://kjt.ah.gov.cn/kjzy/kjtj/jsscjy/index.html)  | [科技成果公报](https://kjt.ah.gov.cn/kjzy/kjtj/kjcggb/index.html)  | [孵化载体发展](https://kjt.ah.gov.cn/kjzy/kjtj/cyfhfz/index.html)  |\n| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |\n| [kjzy/kjtj/jsscjy](https://rsshub.app/gov/ah/kjt/kjzy/kjtj/jsscjy) | [kjzy/kjtj/kjcggb](https://rsshub.app/gov/ah/kjt/kjzy/kjtj/kjcggb) | [kjzy/kjtj/cyfhfz](https://rsshub.app/gov/ah/kjt/kjzy/kjtj/cyfhfz) |\n\n#### [科技数据](https://kjt.ah.gov.cn/kjzy/kjsj/index.html)\n\n| [创新企业](https://kjt.ah.gov.cn/kjzy/kjsj/cxqy/index.html)    | [创新项目](https://kjt.ah.gov.cn/kjzy/kjsj/cxxm/index.html)    | [创新成果](https://kjt.ah.gov.cn/kjzy/kjsj/cxcg/index.html)    | [转化基金入库项目](https://kjt.ah.gov.cn/kjzy/kjsj/zhjjrkxm/index.html) |\n| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------- |\n| [kjzy/kjsj/cxqy](https://rsshub.app/gov/ah/kjt/kjzy/kjsj/cxqy) | [kjzy/kjsj/cxxm](https://rsshub.app/gov/ah/kjt/kjzy/kjsj/cxxm) | [kjzy/kjsj/cxcg](https://rsshub.app/gov/ah/kjt/kjzy/kjsj/cxcg) | [kjzy/kjsj/zhjjrkxm](https://rsshub.app/gov/ah/kjt/kjzy/kjsj/zhjjrkxm)  |\n\n| [创新平台](https://kjt.ah.gov.cn/kjzy/kjsj/cxpt/index.html)    | [创新园区](https://kjt.ah.gov.cn/kjzy/kjsj/cxyq/index.html)    | [创新许可](https://kjt.ah.gov.cn/kjzy/kjsj/cxxk/index.html)    |\n| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |\n| [kjzy/kjsj/cxpt](https://rsshub.app/gov/ah/kjt/kjzy/kjsj/cxpt) | [kjzy/kjsj/cxyq](https://rsshub.app/gov/ah/kjt/kjzy/kjsj/cxyq) | [kjzy/kjsj/cxxk](https://rsshub.app/gov/ah/kjt/kjzy/kjsj/cxxk) |\n\n  ","categories":["government"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["kjt.ah.gov.cn/:category"]},{"title":"科技资讯 - 通知公告","source":["kjt.ah.gov.cn/kjzx/tzgg/index.html"],"target":"/ah/kjt/kjzx/tzgg"},{"title":"科技资讯 - 工作动态","source":["kjt.ah.gov.cn/kjzx/gzdt/index.html"],"target":"/ah/kjt/kjzx/gzdt"},{"title":"科技资讯 - 基层科技","source":["kjt.ah.gov.cn/kjzx/jckj/index.html"],"target":"/ah/kjt/kjzx/jckj"},{"title":"科技资讯 - 媒体聚焦","source":["kjt.ah.gov.cn/kjzx/mtjj/index.html"],"target":"/ah/kjt/kjzx/mtjj"},{"title":"科技资讯 - 重要转载","source":["kjt.ah.gov.cn/kjzx/zyzz/index.html"],"target":"/ah/kjt/kjzx/zyzz"},{"title":"科技资讯 - 图片视频","source":["kjt.ah.gov.cn/kjzx/tpsp/index.html"],"target":"/ah/kjt/kjzx/tpsp"},{"title":"科技统计 - 技术市场交易","source":["kjt.ah.gov.cn/kjzy/kjtj/jsscjy/index.html"],"target":"/ah/kjt/kjzy/kjtj/jsscjy"},{"title":"科技统计 - 科技成果公报","source":["kjt.ah.gov.cn/kjzy/kjtj/kjcggb/index.html"],"target":"/ah/kjt/kjzy/kjtj/kjcggb"},{"title":"科技统计 - 孵化载体发展","source":["kjt.ah.gov.cn/kjzy/kjtj/cyfhfz/index.html"],"target":"/ah/kjt/kjzy/kjtj/cyfhfz"},{"title":"科技数据 - 创新企业","source":["kjt.ah.gov.cn/kjzy/kjsj/cxqy/index.html"],"target":"/ah/kjt/kjzy/kjsj/cxqy"},{"title":"科技数据 - 创新项目","source":["kjt.ah.gov.cn/kjzy/kjsj/cxxm/index.html"],"target":"/ah/kjt/kjzy/kjsj/cxxm"},{"title":"科技数据 - 创新成果","source":["kjt.ah.gov.cn/kjzy/kjsj/cxcg/index.html"],"target":"/ah/kjt/kjzy/kjsj/cxcg"},{"title":"科技数据 - 转化基金入库项目","source":["kjt.ah.gov.cn/kjzy/kjsj/zhjjrkxm/index.html"],"target":"/ah/kjt/kjzy/kjsj/zhjjrkxm"},{"title":"科技数据 - 创新平台","source":["kjt.ah.gov.cn/kjzy/kjsj/cxpt/index.html"],"target":"/ah/kjt/kjzy/kjsj/cxpt"},{"title":"科技数据 - 创新园区","source":["kjt.ah.gov.cn/kjzy/kjsj/cxyq/index.html"],"target":"/ah/kjt/kjzy/kjsj/cxyq"},{"title":"科技数据 - 创新许可","source":["kjt.ah.gov.cn/kjzy/kjsj/cxxk/index.html"],"target":"/ah/kjt/kjzy/kjsj/cxxk"}],"location":"ah/kjt.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

::: tip
  若订阅 [通知公告](https://kjt.ah.gov.cn/kjzx/tzgg/)，网址为 `https://kjt.ah.gov.cn/kjzx/tzgg/`。截取 `https://kjt.ah.gov.cn/` 到末尾 `/` 的部分 `` 作为参数填入，此时路由为 [`/gov/ah/kjt/kjzx/tzgg`](https://rsshub.app/gov/ah/kjt/kjzx/tzgg)。
:::

#### [科技资讯](https://kjt.ah.gov.cn/kjzx/index.html)

| [通知公告](https://kjt.ah.gov.cn/kjzx/tzgg/index.html) | [工作动态](https://kjt.ah.gov.cn/kjzx/gzdt/index.html) | [基层科技](https://kjt.ah.gov.cn/kjzx/jckj/index.html) | [媒体聚焦](https://kjt.ah.gov.cn/kjzx/mtjj/index.html) |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| [kjzx/tzgg](https://rsshub.app/gov/ah/kjt/kjzx/tzgg)   | [kjzx/gzdt](https://rsshub.app/gov/ah/kjt/kjzx/gzdt)   | [kjzx/jckj](https://rsshub.app/gov/ah/kjt/kjzx/jckj)   | [kjzx/mtjj](https://rsshub.app/gov/ah/kjt/kjzx/mtjj)   |
  
| [重要转载](https://kjt.ah.gov.cn/kjzx/zyzz/index.html) | [图片视频](https://kjt.ah.gov.cn/kjzx/tpsp/index.html) |
| ------------------------------------------------------ | ------------------------------------------------------ |
| [kjzx/zyzz](https://rsshub.app/gov/ah/kjt/kjzx/zyzz)   | [kjzx/tpsp](https://rsshub.app/gov/ah/kjt/kjzx/tpsp)   |

#### [科技统计](https://kjt.ah.gov.cn/kjzy/kjtj/index.html)

| [技术市场交易](https://kjt.ah.gov.cn/kjzy/kjtj/jsscjy/index.html)  | [科技成果公报](https://kjt.ah.gov.cn/kjzy/kjtj/kjcggb/index.html)  | [孵化载体发展](https://kjt.ah.gov.cn/kjzy/kjtj/cyfhfz/index.html)  |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| [kjzy/kjtj/jsscjy](https://rsshub.app/gov/ah/kjt/kjzy/kjtj/jsscjy) | [kjzy/kjtj/kjcggb](https://rsshub.app/gov/ah/kjt/kjzy/kjtj/kjcggb) | [kjzy/kjtj/cyfhfz](https://rsshub.app/gov/ah/kjt/kjzy/kjtj/cyfhfz) |

#### [科技数据](https://kjt.ah.gov.cn/kjzy/kjsj/index.html)

| [创新企业](https://kjt.ah.gov.cn/kjzy/kjsj/cxqy/index.html)    | [创新项目](https://kjt.ah.gov.cn/kjzy/kjsj/cxxm/index.html)    | [创新成果](https://kjt.ah.gov.cn/kjzy/kjsj/cxcg/index.html)    | [转化基金入库项目](https://kjt.ah.gov.cn/kjzy/kjsj/zhjjrkxm/index.html) |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [kjzy/kjsj/cxqy](https://rsshub.app/gov/ah/kjt/kjzy/kjsj/cxqy) | [kjzy/kjsj/cxxm](https://rsshub.app/gov/ah/kjt/kjzy/kjsj/cxxm) | [kjzy/kjsj/cxcg](https://rsshub.app/gov/ah/kjt/kjzy/kjsj/cxcg) | [kjzy/kjsj/zhjjrkxm](https://rsshub.app/gov/ah/kjt/kjzy/kjsj/zhjjrkxm)  |

| [创新平台](https://kjt.ah.gov.cn/kjzy/kjsj/cxpt/index.html)    | [创新园区](https://kjt.ah.gov.cn/kjzy/kjsj/cxyq/index.html)    | [创新许可](https://kjt.ah.gov.cn/kjzy/kjsj/cxxk/index.html)    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| [kjzy/kjsj/cxpt](https://rsshub.app/gov/ah/kjt/kjzy/kjsj/cxpt) | [kjzy/kjsj/cxyq](https://rsshub.app/gov/ah/kjt/kjzy/kjsj/cxyq) | [kjzy/kjsj/cxxk](https://rsshub.app/gov/ah/kjt/kjzy/kjsj/cxxk) |

  

### 通用 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/beijing/bjedu/gh/:urlPath?","categories":["government"],"example":"/gov/beijing/bjedu/gh","parameters":{"urlPath":"路径，默认为 `zxtzgg`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["gh.bjedu.gov.cn/ghsite/:urlPath/index.html","gh.bjedu.gov.cn/ghsite/:urlPath"],"target":"/beijing/bjedu/gh/:urlPath"}],"name":"通用","maintainers":["TonyRL"],"description":"::: tip\n  路径处填写对应页面 URL 中 `https://gh.bjedu.cn/ghsite/` 和 `/index.html` 之间的字段。下面是一个例子。\n\n  若订阅 [通知公告](https://gh.bjedu.cn/ghsite/zxtzgg/index.html) 则将对应页面 URL `https://gh.bjedu.cn/ghsite/zxtzgg/index.html` 中 `https://gh.bjedu.cn/ghsite/` 和 `/index.html` 之间的字段 `zxtzgg` 作为路径填入。此时路由为 [`/gov/beijing/bjedu/gh/zxtzgg`](https://rsshub.app/gov/beijing/bjedu/gh/zxtzgg)\n:::","location":"beijing/bjedu/gh.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

::: tip
  路径处填写对应页面 URL 中 `https://gh.bjedu.cn/ghsite/` 和 `/index.html` 之间的字段。下面是一个例子。

  若订阅 [通知公告](https://gh.bjedu.cn/ghsite/zxtzgg/index.html) 则将对应页面 URL `https://gh.bjedu.cn/ghsite/zxtzgg/index.html` 中 `https://gh.bjedu.cn/ghsite/` 和 `/index.html` 之间的字段 `zxtzgg` 作为路径填入。此时路由为 [`/gov/beijing/bjedu/gh/zxtzgg`](https://rsshub.app/gov/beijing/bjedu/gh/zxtzgg)
:::

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/beijing/bphc/*","name":"Unknown","maintainers":[],"location":"beijing/bphc/index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/beijing/kw/:channel","name":"Unknown","maintainers":["Fatpandac"],"location":"beijing/kw/index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### 公众留言 <Site url="caac.gov.cn/HDJL/" size="sm" />

<Route namespace="gov" :data='{"path":"/caac/cjwt/:category?","categories":["government"],"example":"/gov/caac/cjwt","parameters":{"category":"分类，见下表，默认为全部"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["caac.gov.cn/HDJL/"],"target":"/caac/cjwt"}],"name":"公众留言","maintainers":["nczitzk"],"url":"caac.gov.cn/HDJL/","description":"| 机票 | 托运 | 无人机 | 体检 | 行政审批 | 投诉 |\n| ---- | ---- | ------ | ---- | -------- | ---- |","location":"caac/cjwt.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

| 机票 | 托运 | 无人机 | 体检 | 行政审批 | 投诉 |
| ---- | ---- | ------ | ---- | -------- | ---- |

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/cac/*","name":"Unknown","maintainers":[],"location":"cac/index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/ccdi/*","name":"Unknown","maintainers":[],"location":"ccdi/index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/chinamine-safety/xw/:category{.+}?","name":"Unknown","maintainers":[],"location":"chinamine-safety/xw.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/chinamine-safety/zfxxgk/:category{.+}?","name":"Unknown","maintainers":[],"location":"chinamine-safety/zfxxgk.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### 重庆市人民政府 人力社保局 - 人事考试通知 <Site url="rlsbj.cq.gov.cn/" size="sm" />

<Route namespace="gov" :data='{"path":"/chongqing/rsks","categories":["government"],"example":"/gov/chongqing/rsks","radar":[{"source":["rlsbj.cq.gov.cn/"]}],"name":"重庆市人民政府 人力社保局 - 人事考试通知","maintainers":["Mai19930513"],"url":"rlsbj.cq.gov.cn/","location":"chongqing/rsks.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/cmse/*","name":"Unknown","maintainers":[],"location":"cmse/index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/cnnic/*","name":"Unknown","maintainers":[],"location":"cnnic/index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### 申请事项进度 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/csrc/auditstatus/:apply_id","categories":["government"],"example":"/gov/csrc/auditstatus/9ce91cf2d750ee62de27fbbcb05fa483","parameters":{"apply_id":"事项类别id，`https://neris.csrc.gov.cn/alappl/home/xkDetail` 列表中各地址的 appMatrCde 参数"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"申请事项进度","maintainers":["hillerliao"],"location":"csrc/auditstatus.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/csrc/news/:suffix{.+}?","name":"Unknown","maintainers":[],"location":"csrc/news.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### 拍卖信息 / 海关法规 / 最新文件 <Site url="www.customs.gov.cn/" size="sm" />

<Route namespace="gov" :data='{"path":"/customs/list/:gchannel?","categories":["government"],"example":"/gov/customs/list/paimai","parameters":{"gchannel":"支持 `paimai`, `fagui` 及 `latest` 3 个频道，默认为 `paimai`"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.customs.gov.cn/"],"target":"/customs/list"}],"name":"拍卖信息 / 海关法规 / 最新文件","maintainers":["Jeason0228","TonyRL","he1q"],"url":"www.customs.gov.cn/","description":"::: warning\n由于区域限制，建议在国内 IP 的机器上自建\n:::","location":"customs/list.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

::: warning
由于区域限制，建议在国内 IP 的机器上自建
:::

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/dianbai/*","name":"Unknown","maintainers":[],"location":"dianbai/dianbai.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### 国家林草科技大讲堂 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/forestry/gjlckjdjt/:category?","categories":["government"],"example":"/gov/forestry/gjlckjdjt","parameters":{"category":"分类，见下表，默认为全部"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"国家林草科技大讲堂","maintainers":["nczitzk"],"description":"| 分类     | id   |\n| -------- | ---- |\n| 经济林   | jjl  |\n| 林木良种 | lmlz |\n| 林下经济 | lxjj |\n| 生态修复 | stxf |\n| 用材林   | ycl  |\n| 其他     | qt   |","location":"forestry/gjlckjdjt.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

| 分类     | id   |
| -------- | ---- |
| 经济林   | jjl  |
| 林木良种 | lmlz |
| 林下经济 | lxjj |
| 生态修复 | stxf |
| 用材林   | ycl  |
| 其他     | qt   |

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/gaozhou/*","name":"Unknown","maintainers":[],"location":"gaozhou/gaozhou.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### 通知公告 <Site url="iitb.hainan.gov.cn/iitb/tzgg/list2.shtml" size="sm" />

<Route namespace="gov" :data='{"path":"/hainan/iitb/tzgg","categories":["government"],"example":"/gov/hainan/iitb/tzgg","url":"iitb.hainan.gov.cn/iitb/tzgg/list2.shtml","name":"通知公告","maintainers":["p3psi-boo"],"location":"hainan/iitb/tzgg.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 政务服务公开 <Site url="hangzhou.gov.cn/col/col1256349/index.html" size="sm" />

<Route namespace="gov" :data='{"path":"/hangzhou/zwfw","categories":["government"],"example":"/gov/hangzhou/zwfw","features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["hangzhou.gov.cn/col/col1256349/index.html"]}],"name":"政务服务公开","maintainers":["flynncao"],"url":"hangzhou.gov.cn/col/col1256349/index.html","location":"hangzhou/zwfw.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 财政厅 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/hebei/czt/xwdt/:category?","categories":["government"],"example":"/gov/hebei/czt/xwdt","parameters":{"category":"分类，见下表，默认为财政动态"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"财政厅","maintainers":["nczitzk"],"description":"| 财政动态 | 综合新闻 | 通知公告 |\n| -------- | -------- | -------- |\n| gzdt     | zhxw     | tzgg     |","location":"hebei/czt.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 财政动态 | 综合新闻 | 通知公告 |
| -------- | -------- | -------- |
| gzdt     | zhxw     | tzgg     |

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/huazhou/*","name":"Unknown","maintainers":[],"location":"huazhou/huazhou.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### 惠州市人民政府 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/huizhou/zwgk/:category?","categories":["government"],"example":"/gov/huizhou/zwgk/jgdt","parameters":{"category":"资讯类别，可以从网址中得到，默认为政务要闻"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"惠州市人民政府","maintainers":["Fatpandac"],"description":"#### 政务公开 {#guang-dong-sheng-ren-min-zheng-fu-hui-zhou-shi-ren-min-zheng-fu-zheng-wu-gong-kai}","location":"huizhou/zwgk/index.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

#### 政务公开 {#guang-dong-sheng-ren-min-zheng-fu-hui-zhou-shi-ren-min-zheng-fu-zheng-wu-gong-kai}

### 长沙市人民政府 <Site url="wlwz.changsha.gov.cn/webapp/cs2020/email/*" size="sm" />

<Route namespace="gov" :data='{"path":"/hunan/changsha/major-email","categories":["government"],"example":"/gov/hunan/changsha/major-email","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["wlwz.changsha.gov.cn/webapp/cs2020/email/*"]}],"name":"长沙市人民政府","maintainers":["shansing"],"url":"wlwz.changsha.gov.cn/webapp/cs2020/email/*","description":"#### 市长信箱 {#hu-nan-sheng-ren-min-zheng-fu-chang-sha-shi-ren-min-zheng-fu-shi-zhang-xin-xiang}\n\n\n可能仅限中国大陆服务器访问，以实际情况为准。","location":"hunan/changsha/major-email.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

#### 市长信箱 {#hu-nan-sheng-ren-min-zheng-fu-chang-sha-shi-ren-min-zheng-fu-shi-zhang-xin-xiang}


可能仅限中国大陆服务器访问，以实际情况为准。

### 江苏文旅局审批公告 <Site url="wlt.jiangsu.gov.cn/" size="sm" />

<Route namespace="gov" :data='{"path":"/jiangsu/wlt/:page?","categories":["government"],"example":"/gov/jiangsu/wlt","parameters":{"page":"页数，默认第 1 页"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["wlt.jiangsu.gov.cn/"],"target":"/jiangsu/wlt"}],"name":"江苏文旅局审批公告","maintainers":["GideonSenku"],"url":"wlt.jiangsu.gov.cn/","location":"jiangsu/wlt/index.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 获取国家医师资格考试通知 <Site url="jnmhc.jinan.gov.cn/*" size="sm" />

<Route namespace="gov" :data='{"path":"/jinan/healthcommission/medical_exam_notice","categories":["government"],"example":"/gov/jinan/healthcommission/medical_exam_notice","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["jnmhc.jinan.gov.cn/*"]}],"name":"获取国家医师资格考试通知","maintainers":["tzjyxb"],"url":"jnmhc.jinan.gov.cn/*","location":"jinan/healthcommission/medical-exam-notice.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/maoming/*","name":"Unknown","maintainers":[],"location":"maoming/maoming.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### 茂名市茂南区人民政府 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/maonan/:category","categories":["government"],"example":"/gov/maonan/zwgk","parameters":{"category":"分类名"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"茂名市茂南区人民政府","maintainers":["ShuiHuo"],"description":"| 政务公开 | 政务新闻 | 茂南动态 | 重大会议 | 公告公示 | 招录信息 | 政策解读 |\n| :------: | :------: | :------: | :------: | :------: | :------: | :------: |\n|   zwgk   |   zwxw   |   mndt   |   zdhy   |   tzgg   |   zlxx   |   zcjd   |","location":"maonan/maonan.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"Error: STACK_TRACE_ERROR\n    at task (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:633:27)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:660:16)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:457:28)\n    at chain (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/chunk-tasks.js:9:14)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:72:12\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:40\n    at runWithSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1588:8)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:10)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:739:54)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at collectTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1048:25)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1556:17)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:85:25)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:153:2)\n    at executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/init-forks.aqTzCSR2.js:29:4)"}' />

| 政务公开 | 政务新闻 | 茂南动态 | 重大会议 | 公告公示 | 招录信息 | 政策解读 |
| :------: | :------: | :------: | :------: | :------: | :------: | :------: |
|   zwgk   |   zwxw   |   mndt   |   zdhy   |   tzgg   |   zlxx   |   zcjd   |

### 国家核安全局 <Site url="nnsa.mee.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/mee/nnsa/:category{.+}?","name":"国家核安全局","url":"nnsa.mee.gov.cn","maintainers":["nczitzk"],"example":"/gov/mee/nnsa/ywdt/hjyw","parameters":{"category":{"description":"分类，默认为 `ywdt/hjyw`，即环境要闻，可在对应分类页 URL 中找到","options":[{"label":"要闻动态 - 时政要闻","value":"ywdt/szyw"},{"label":"要闻动态 - 环境要闻","value":"ywdt/hjyw"},{"label":"要闻动态 - 监管动态","value":"ywdt/gzdt"},{"label":"要闻动态 - 行业资讯","value":"ywdt/hyzx"},{"label":"要闻动态 - 国际资讯","value":"ywdt/gjzx"},{"label":"要闻动态 - 公示公告","value":"ywdt/gsqg"},{"label":"要闻动态 - 曝光台","value":"ywdt/bgt"},{"label":"政策文件 - 中央有关文件","value":"zcwj/zyygwj"},{"label":"政策文件 - 国务院有关文件","value":"zcwj/gwyygwj"},{"label":"政策文件 - 部文件","value":"zcwj/bwj"},{"label":"政策文件 - 核安全局文件","value":"zcwj/haqjwj"},{"label":"政策文件 - 其他","value":"zcwj/qt"},{"label":"政策文件 - 解读","value":"zcwj/jd"},{"label":"业务工作 - 核动力厂和研究堆","value":"ywdh/fyd"},{"label":"业务工作 - 核燃料、放废","value":"ywdh/hrlff"},{"label":"业务工作 - 核技术、电磁、矿冶","value":"ywdh/hjsdcky"},{"label":"业务工作 - 监测与应急","value":"ywdh/jcyj_1"},{"label":"业务工作 - 核安全设备与人员","value":"ywdh/haqsbry"},{"label":"业务工作 - 国际合作","value":"ywdh/gjhz"}]}},"description":":::tip\n订阅 [环境要闻](https://nnsa.mee.gov.cn/ywdt/hjyw/)，其源网址为 `https://nnsa.mee.gov.cn/ywdt/hjyw/`，请参考该 URL 指定部分构成参数，此时路由为 [`/gov/mee/nnsa/ywdt/hjyw`](https://rsshub.app/gov/mee/nnsa/ywdt/hjyw)。\n:::\n\n<details>\n  <summary>更多分类</summary>\n\n  #### [要闻动态](https://nnsa.mee.gov.cn/ywdt/)\n\n  | 分类                                           | ID                                                     |\n  | ---------------------------------------------- | ------------------------------------------------------ |\n  | [时政要闻](https://nnsa.mee.gov.cn/ywdt/szyw/) | [ywdt/szyw](https://rsshub.app/gov/mee/nnsa/ywdt/szyw) |\n  | [环境要闻](https://nnsa.mee.gov.cn/ywdt/hjyw/) | [ywdt/hjyw](https://rsshub.app/gov/mee/nnsa/ywdt/hjyw) |\n  | [监管动态](https://nnsa.mee.gov.cn/ywdt/gzdt/) | [ywdt/gzdt](https://rsshub.app/gov/mee/nnsa/ywdt/gzdt) |\n  | [行业资讯](https://nnsa.mee.gov.cn/ywdt/hyzx/) | [ywdt/hyzx](https://rsshub.app/gov/mee/nnsa/ywdt/hyzx) |\n  | [国际资讯](https://nnsa.mee.gov.cn/ywdt/gjzx/) | [ywdt/gjzx](https://rsshub.app/gov/mee/nnsa/ywdt/gjzx) |\n  | [公示公告](https://nnsa.mee.gov.cn/ywdt/gsqg/) | [ywdt/gsqg](https://rsshub.app/gov/mee/nnsa/ywdt/gsqg) |\n  | [曝光台](https://nnsa.mee.gov.cn/ywdt/bgt/)    | [ywdt/bgt](https://rsshub.app/gov/mee/nnsa/ywdt/bgt)   |\n\n  #### [政策文件](https://nnsa.mee.gov.cn/zcwj/)\n\n  | 分类                                                    | ID                                                           |\n  | ------------------------------------------------------- | ------------------------------------------------------------ |\n  | [中央有关文件](https://nnsa.mee.gov.cn/zcwj/zyygwj/)    | [zcwj/zyygwj](https://rsshub.app/gov/mee/nnsa/zcwj/zyygwj)   |\n  | [国务院有关文件](https://nnsa.mee.gov.cn/zcwj/gwyygwj/) | [zcwj/gwyygwj](https://rsshub.app/gov/mee/nnsa/zcwj/gwyygwj) |\n  | [部文件](https://nnsa.mee.gov.cn/zcwj/bwj/)             | [zcwj/bwj](https://rsshub.app/gov/mee/nnsa/zcwj/bwj)         |\n  | [核安全局文件](https://nnsa.mee.gov.cn/zcwj/haqjwj/)    | [zcwj/haqjwj](https://rsshub.app/gov/mee/nnsa/zcwj/haqjwj)   |\n  | [其他](https://nnsa.mee.gov.cn/zcwj/qt/)                | [zcwj/qt](https://rsshub.app/gov/mee/nnsa/zcwj/qt)           |\n  | [解读](https://nnsa.mee.gov.cn/zcwj/jd/)                | [zcwj/jd](https://rsshub.app/gov/mee/nnsa/zcwj/jd)           |\n\n  #### [业务工作](https://nnsa.mee.gov.cn/ywdh/)\n\n  | 分类                                                        | ID                                                           |\n  | ----------------------------------------------------------- | ------------------------------------------------------------ |\n  | [核动力厂和研究堆](https://nnsa.mee.gov.cn/ywdh/fyd/)       | [ywdh/fyd](https://rsshub.app/gov/mee/nnsa/ywdh/fyd)         |\n  | [核燃料、放废](https://nnsa.mee.gov.cn/ywdh/hrlff/)         | [ywdh/hrlff](https://rsshub.app/gov/mee/nnsa/ywdh/hrlff)     |\n  | [核技术、电磁、矿冶](https://nnsa.mee.gov.cn/ywdh/hjsdcky/) | [ywdh/hjsdcky](https://rsshub.app/gov/mee/nnsa/ywdh/hjsdcky) |\n  | [监测与应急](https://nnsa.mee.gov.cn/ywdh/jcyj_1/)          | [ywdh/jcyj_1](https://rsshub.app/gov/mee/nnsa/ywdh/jcyj_1)   |\n  | [核安全设备与人员](https://nnsa.mee.gov.cn/ywdh/haqsbry/)   | [ywdh/haqsbry](https://rsshub.app/gov/mee/nnsa/ywdh/haqsbry) |\n  | [国际合作](https://nnsa.mee.gov.cn/ywdh/gjhz/)              | [ywdh/gjhz](https://rsshub.app/gov/mee/nnsa/ywdh/gjhz)       |\n\n</details>\n","categories":["government"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["nnsa.mee.gov.cn/:category"],"target":"/mee/nnsa/:category"},{"title":"要闻动态 - 时政要闻","source":["nnsa.mee.gov.cn/ywdt/szyw/"],"target":"/mee/nnsa/ywdt/szyw"},{"title":"要闻动态 - 环境要闻","source":["nnsa.mee.gov.cn/ywdt/hjyw/"],"target":"/mee/nnsa/ywdt/hjyw"},{"title":"要闻动态 - 监管动态","source":["nnsa.mee.gov.cn/ywdt/gzdt/"],"target":"/mee/nnsa/ywdt/gzdt"},{"title":"要闻动态 - 行业资讯","source":["nnsa.mee.gov.cn/ywdt/hyzx/"],"target":"/mee/nnsa/ywdt/hyzx"},{"title":"要闻动态 - 国际资讯","source":["nnsa.mee.gov.cn/ywdt/gjzx/"],"target":"/mee/nnsa/ywdt/gjzx"},{"title":"要闻动态 - 公示公告","source":["nnsa.mee.gov.cn/ywdt/gsqg/"],"target":"/mee/nnsa/ywdt/gsqg"},{"title":"要闻动态 - 曝光台","source":["nnsa.mee.gov.cn/ywdt/bgt/"],"target":"/mee/nnsa/ywdt/bgt"},{"title":"政策文件 - 中央有关文件","source":["nnsa.mee.gov.cn/zcwj/zyygwj/"],"target":"/mee/nnsa/zcwj/zyygwj"},{"title":"政策文件 - 国务院有关文件","source":["nnsa.mee.gov.cn/zcwj/gwyygwj/"],"target":"/mee/nnsa/zcwj/gwyygwj"},{"title":"政策文件 - 部文件","source":["nnsa.mee.gov.cn/zcwj/bwj/"],"target":"/mee/nnsa/zcwj/bwj"},{"title":"政策文件 - 核安全局文件","source":["nnsa.mee.gov.cn/zcwj/haqjwj/"],"target":"/mee/nnsa/zcwj/haqjwj"},{"title":"政策文件 - 其他","source":["nnsa.mee.gov.cn/zcwj/qt/"],"target":"/mee/nnsa/zcwj/qt"},{"title":"政策文件 - 解读","source":["nnsa.mee.gov.cn/zcwj/jd/"],"target":"/mee/nnsa/zcwj/jd"},{"title":"业务工作 - 核动力厂和研究堆","source":["nnsa.mee.gov.cn/ywdh/fyd/"],"target":"/mee/nnsa/ywdh/fyd"},{"title":"业务工作 - 核燃料、放废","source":["nnsa.mee.gov.cn/ywdh/hrlff/"],"target":"/mee/nnsa/ywdh/hrlff"},{"title":"业务工作 - 核技术、电磁、矿冶","source":["nnsa.mee.gov.cn/ywdh/hjsdcky/"],"target":"/mee/nnsa/ywdh/hjsdcky"},{"title":"业务工作 - 监测与应急","source":["nnsa.mee.gov.cn/ywdh/jcyj_1/"],"target":"/mee/nnsa/ywdh/jcyj_1"},{"title":"业务工作 - 核安全设备与人员","source":["nnsa.mee.gov.cn/ywdh/haqsbry/"],"target":"/mee/nnsa/ywdh/haqsbry"},{"title":"业务工作 - 国际合作","source":["nnsa.mee.gov.cn/ywdh/gjhz/"],"target":"/mee/nnsa/ywdh/gjhz"}],"view":0,"location":"mee/nnsa.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected [ Array(1) ] to not include &#39;http://www.mee.gov.cn/ywdt/hjywnews/2…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1252:15)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1090:14)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@6.2.1/node_modules/chai/index.js:1700:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

:::tip
订阅 [环境要闻](https://nnsa.mee.gov.cn/ywdt/hjyw/)，其源网址为 `https://nnsa.mee.gov.cn/ywdt/hjyw/`，请参考该 URL 指定部分构成参数，此时路由为 [`/gov/mee/nnsa/ywdt/hjyw`](https://rsshub.app/gov/mee/nnsa/ywdt/hjyw)。
:::

<details>
  <summary>更多分类</summary>

  #### [要闻动态](https://nnsa.mee.gov.cn/ywdt/)

  | 分类                                           | ID                                                     |
  | ---------------------------------------------- | ------------------------------------------------------ |
  | [时政要闻](https://nnsa.mee.gov.cn/ywdt/szyw/) | [ywdt/szyw](https://rsshub.app/gov/mee/nnsa/ywdt/szyw) |
  | [环境要闻](https://nnsa.mee.gov.cn/ywdt/hjyw/) | [ywdt/hjyw](https://rsshub.app/gov/mee/nnsa/ywdt/hjyw) |
  | [监管动态](https://nnsa.mee.gov.cn/ywdt/gzdt/) | [ywdt/gzdt](https://rsshub.app/gov/mee/nnsa/ywdt/gzdt) |
  | [行业资讯](https://nnsa.mee.gov.cn/ywdt/hyzx/) | [ywdt/hyzx](https://rsshub.app/gov/mee/nnsa/ywdt/hyzx) |
  | [国际资讯](https://nnsa.mee.gov.cn/ywdt/gjzx/) | [ywdt/gjzx](https://rsshub.app/gov/mee/nnsa/ywdt/gjzx) |
  | [公示公告](https://nnsa.mee.gov.cn/ywdt/gsqg/) | [ywdt/gsqg](https://rsshub.app/gov/mee/nnsa/ywdt/gsqg) |
  | [曝光台](https://nnsa.mee.gov.cn/ywdt/bgt/)    | [ywdt/bgt](https://rsshub.app/gov/mee/nnsa/ywdt/bgt)   |

  #### [政策文件](https://nnsa.mee.gov.cn/zcwj/)

  | 分类                                                    | ID                                                           |
  | ------------------------------------------------------- | ------------------------------------------------------------ |
  | [中央有关文件](https://nnsa.mee.gov.cn/zcwj/zyygwj/)    | [zcwj/zyygwj](https://rsshub.app/gov/mee/nnsa/zcwj/zyygwj)   |
  | [国务院有关文件](https://nnsa.mee.gov.cn/zcwj/gwyygwj/) | [zcwj/gwyygwj](https://rsshub.app/gov/mee/nnsa/zcwj/gwyygwj) |
  | [部文件](https://nnsa.mee.gov.cn/zcwj/bwj/)             | [zcwj/bwj](https://rsshub.app/gov/mee/nnsa/zcwj/bwj)         |
  | [核安全局文件](https://nnsa.mee.gov.cn/zcwj/haqjwj/)    | [zcwj/haqjwj](https://rsshub.app/gov/mee/nnsa/zcwj/haqjwj)   |
  | [其他](https://nnsa.mee.gov.cn/zcwj/qt/)                | [zcwj/qt](https://rsshub.app/gov/mee/nnsa/zcwj/qt)           |
  | [解读](https://nnsa.mee.gov.cn/zcwj/jd/)                | [zcwj/jd](https://rsshub.app/gov/mee/nnsa/zcwj/jd)           |

  #### [业务工作](https://nnsa.mee.gov.cn/ywdh/)

  | 分类                                                        | ID                                                           |
  | ----------------------------------------------------------- | ------------------------------------------------------------ |
  | [核动力厂和研究堆](https://nnsa.mee.gov.cn/ywdh/fyd/)       | [ywdh/fyd](https://rsshub.app/gov/mee/nnsa/ywdh/fyd)         |
  | [核燃料、放废](https://nnsa.mee.gov.cn/ywdh/hrlff/)         | [ywdh/hrlff](https://rsshub.app/gov/mee/nnsa/ywdh/hrlff)     |
  | [核技术、电磁、矿冶](https://nnsa.mee.gov.cn/ywdh/hjsdcky/) | [ywdh/hjsdcky](https://rsshub.app/gov/mee/nnsa/ywdh/hjsdcky) |
  | [监测与应急](https://nnsa.mee.gov.cn/ywdh/jcyj_1/)          | [ywdh/jcyj_1](https://rsshub.app/gov/mee/nnsa/ywdh/jcyj_1)   |
  | [核安全设备与人员](https://nnsa.mee.gov.cn/ywdh/haqsbry/)   | [ywdh/haqsbry](https://rsshub.app/gov/mee/nnsa/ywdh/haqsbry) |
  | [国际合作](https://nnsa.mee.gov.cn/ywdh/gjhz/)              | [ywdh/gjhz](https://rsshub.app/gov/mee/nnsa/ywdh/gjhz)       |

</details>


### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/mgs/*","name":"Unknown","maintainers":[],"location":"mgs/mgs.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### 政策文件 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/miit/zcwj","categories":["government"],"example":"/gov/miit/zcwj","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"政策文件","maintainers":["Yoge-Code"],"location":"miit/zcwj.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/mmht/*","name":"Unknown","maintainers":[],"location":"mmht/mmht.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### 中华人民共和国农业农村部国际合作司 <Site url="www.gjs.moa.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/moa/gjs/:category{.+}?","name":"中华人民共和国农业农村部国际合作司","url":"www.gjs.moa.gov.cn","maintainers":["nczitzk"],"example":"/gov/moa/gjs/gzdt","parameters":{"category":{"description":"分类，默认为 `gzdt`，即工作动态，可在对应分类页 URL 中找到","options":[{"label":"工作动态","value":"gzdt"},{"label":"通知公告","value":"tzgg"},{"label":"“一带一路”合作和农业走出去","value":"ydylhzhhnyzcq"},{"label":"农业国际贸易监测与展望","value":"ncpmy"},{"label":"多双边合作","value":"dsbhz"}]}},"description":"::: tip\n若订阅 [中华人民共和国农业农村部国际合作司工作动态](https://www.gjs.moa.gov.cn/gzdt/)，网址为 `https://www.gjs.moa.gov.cn/gzdt/`，请截取 `https://www.gjs.moa.gov.cn/` 到末尾 `/` 的部分 `gzdt` 作为 `category` 参数填入，此时目标路由为 [`/gov/moa/gjs/gzdt`](https://rsshub.app/gov/moa/gjs/gzdt)。\n:::\n\n| [工作动态](http://www.gjs.moa.gov.cn/gzdt/) | [通知公告](http://www.gjs.moa.gov.cn/tzgg/) | [“一带一路”合作和农业走出去](http://www.gjs.moa.gov.cn/ydylhzhhnyzcq/) | [农业国际贸易监测与展望](http://www.gjs.moa.gov.cn/ncpmy/) | [多双边合作](http://www.gjs.moa.gov.cn/dsbhz/) |\n| ------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------- |\n| [gzdt](https://rsshub.app/gov/moa/gjs/gzdt) | [tzgg](https://rsshub.app/gov/moa/gjs/tzgg) | [ydylhzhhnyzcq](https://rsshub.app/gov/moa/gjs/ydylhzhhnyzcq)          | [ncpmy](https://rsshub.app/gov/moa/gjs/ncpmy)              | [dsbhz](https://rsshub.app/gov/moa/gjs/dsbhz)  |\n","categories":["government"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.gjs.moa.gov.cn/:category{.+}?"]},{"title":"工作动态","source":["www.gjs.moa.gov.cn/gzdt/"],"target":"/moa/gjs/gzdt"},{"title":"通知公告","source":["www.gjs.moa.gov.cn/tzgg/"],"target":"/moa/gjs/tzgg"},{"title":"“一带一路”合作和农业走出去","source":["www.gjs.moa.gov.cn/ydylhzhhnyzcq/"],"target":"/moa/gjs/ydylhzhhnyzcq"},{"title":"农业国际贸易监测与展望","source":["www.gjs.moa.gov.cn/ncpmy/"],"target":"/moa/gjs/ncpmy"},{"title":"多双边合作","source":["www.gjs.moa.gov.cn/dsbhz/"],"target":"/moa/gjs/dsbhz"}],"view":0,"location":"moa/gjs.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

::: tip
若订阅 [中华人民共和国农业农村部国际合作司工作动态](https://www.gjs.moa.gov.cn/gzdt/)，网址为 `https://www.gjs.moa.gov.cn/gzdt/`，请截取 `https://www.gjs.moa.gov.cn/` 到末尾 `/` 的部分 `gzdt` 作为 `category` 参数填入，此时目标路由为 [`/gov/moa/gjs/gzdt`](https://rsshub.app/gov/moa/gjs/gzdt)。
:::

| [工作动态](http://www.gjs.moa.gov.cn/gzdt/) | [通知公告](http://www.gjs.moa.gov.cn/tzgg/) | [“一带一路”合作和农业走出去](http://www.gjs.moa.gov.cn/ydylhzhhnyzcq/) | [农业国际贸易监测与展望](http://www.gjs.moa.gov.cn/ncpmy/) | [多双边合作](http://www.gjs.moa.gov.cn/dsbhz/) |
| ------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------- |
| [gzdt](https://rsshub.app/gov/moa/gjs/gzdt) | [tzgg](https://rsshub.app/gov/moa/gjs/tzgg) | [ydylhzhhnyzcq](https://rsshub.app/gov/moa/gjs/ydylhzhhnyzcq)          | [ncpmy](https://rsshub.app/gov/moa/gjs/ncpmy)              | [dsbhz](https://rsshub.app/gov/moa/gjs/dsbhz)  |


### 最新消息 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/moj/aac/news/:type?","categories":["government"],"example":"/gov/moj/aac/news","parameters":{"type":"資料大類，留空為全部"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"最新消息","maintainers":["TonyRL"],"description":"| 全部 | 其他 | 採購公告 | 新聞稿 | 肅貪 | 預防 | 綜合 | 防疫專區 |\n| ---- | ---- | -------- | ------ | ---- | ---- | ---- | -------- |\n|      | 02   | 01       | 06     | 05   | 04   | 03   | 99       |","location":"moj/aac/news.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 全部 | 其他 | 採購公告 | 新聞稿 | 肅貪 | 預防 | 綜合 | 防疫專區 |
| ---- | ---- | -------- | ------ | ---- | ---- | ---- | -------- |
|      | 02   | 01       | 06     | 05   | 04   | 03   | 99       |

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/nifdc/:path{.+}?","name":"Unknown","maintainers":[],"location":"nifdc/index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/nmpa/*","name":"Unknown","maintainers":[],"location":"nmpa/generic.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### 电视剧政务平台 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/nrta/dsj/:category?","categories":["government"],"example":"/gov/nrta/dsj","parameters":{"category":"分类，见下表，默认为备案公示"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"电视剧政务平台","maintainers":["nczitzk"],"description":"| 备案公示 | 发行许可通告 | 重大题材立项     | 重大题材摄制    | 变更通报 |\n| -------- | ------------ | ---------------- | --------------- | -------- |\n| note     | announce     | importantLixiang | importantShezhi | changing |","location":"nrta/dsj.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 备案公示 | 发行许可通告 | 重大题材立项     | 重大题材摄制    | 变更通报 |
| -------- | ------------ | ---------------- | --------------- | -------- |
| note     | announce     | importantLixiang | importantShezhi | changing |

### Unknown <Site url="pbc.gov.cn/redianzhuanti/118742/4122386/4122510/index.html" size="sm" />

<Route namespace="gov" :data='{"path":"/pbc/zcyj","radar":[{"source":["pbc.gov.cn/redianzhuanti/118742/4122386/4122510/index.html"]}],"name":"Unknown","maintainers":["Fatpandac"],"url":"pbc.gov.cn/redianzhuanti/118742/4122386/4122510/index.html","location":"pbc/zcyj.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### 业务咨询 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/safe/business/:site?","categories":["government"],"example":"/gov/safe/business/beijing","parameters":{"site":"站点，见上表，默认为 beijing"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"业务咨询","maintainers":["nczitzk"],"location":"safe/business.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected [ Array(1) ] to not include &#39;https://www.safe.gov.cn/beijing/ywzx/…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1252:15)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1090:14)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@6.2.1/node_modules/chai/index.js:1700:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### 投诉建议 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/safe/complaint/:site?","categories":["government"],"example":"/gov/safe/complaint/beijing","parameters":{"site":"站点，见上表，默认为 beijing"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"投诉建议","maintainers":["nczitzk"],"location":"safe/complaint.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected [ …(2) ] to not include &#39;https://www.safe.gov.cn/beijing/tsjy/…&#39;\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1252:15)\n    at Proxy.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+expect@4.0.9/node_modules/@vitest/expect/dist/index.js:1090:14)\n    at Proxy.methodWrapper (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/chai@6.2.1/node_modules/chai/index.js:1700:25)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:65:27)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/sasac/:path{.+}","name":"Unknown","maintainers":[],"location":"sasac/generic.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/sdb/*","name":"Unknown","maintainers":[],"location":"sdb/sdb.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### 上海市职业能力考试院 考试项目 <Site url="rsj.sh.gov.cn/" size="sm" />

<Route namespace="gov" :data='{"path":["/sh/rsj/ksxm","/shanghai/rsj/ksxm"],"categories":["government"],"example":"/gov/sh/rsj/ksxm","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["rsj.sh.gov.cn/"]}],"name":"上海市职业能力考试院 考试项目","maintainers":["Fatpandac"],"url":"rsj.sh.gov.cn/","location":"sh/rsj/ksxm.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":["/sh/yjj/*","/shanghai/yjj/*"],"name":"Unknown","maintainers":[],"location":"sh/yjj/index.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### 省科学技术厅 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/shaanxi/kjt/:id?","categories":["government"],"example":"/gov/shaanxi/kjt","parameters":{"id":"分类，见下表，默认为通知公告"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"省科学技术厅","maintainers":["nczitzk"],"description":"| 科技头条 | 工作动态 | 基层科技 | 科技博览 | 媒体聚焦 | 通知公告 |\n| -------- | -------- | -------- | -------- | -------- | -------- |\n| 1061     | 24       | 27       | 25       | 28       | 221      |","location":"shaanxi/kjt.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 科技头条 | 工作动态 | 基层科技 | 科技博览 | 媒体聚焦 | 通知公告 |
| -------- | -------- | -------- | -------- | -------- | -------- |
| 1061     | 24       | 27       | 25       | 28       | 221      |

### 深圳市考试院 <Site url="hrss.sz.gov.cn/*" size="sm" />

<Route namespace="gov" :data='{"path":"/shenzhen/hrss/szksy/:caty/:page?","categories":["government"],"example":"/gov/shenzhen/hrss/szksy/bmxx/2","parameters":{"caty":"信息类别","page":"页码"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["xxgk.sz.gov.cn/cn/xxgk/zfxxgj/:caty"]}],"name":"深圳市考试院","maintainers":["zlasd"],"url":"hrss.sz.gov.cn/*","description":"| 通知公告 | 报名信息 | 成绩信息 | 合格标准 | 合格人员公示 | 证书发放信息 |\n| :------: | :------: | :------: | :------: | :----------: | :----------: |\n|   tzgg   |   bmxx   |   cjxx   |   hgbz   |    hgrygs    |     zsff     |","location":"shenzhen/hrss/szksy/index.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 通知公告 | 报名信息 | 成绩信息 | 合格标准 | 合格人员公示 | 证书发放信息 |
| :------: | :------: | :------: | :------: | :----------: | :----------: |
|   tzgg   |   bmxx   |   cjxx   |   hgbz   |    hgrygs    |     zsff     |

### 深圳市人民政府 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/shenzhen/xxgk/zfxxgj/:caty","categories":["government"],"example":"/gov/shenzhen/xxgk/zfxxgj/tzgg","parameters":{"caty":"信息类别"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"深圳市人民政府","maintainers":["laoxua"],"description":"| 通知公告 | 政府采购 | 资金信息 | 重大项目 |\n| :------: | :------: | :------: | :------: |\n|   tzgg   |   zfcg   |   zjxx   |   zdxm   |","location":"shenzhen/xxgk/zfxxgj.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 通知公告 | 政府采购 | 资金信息 | 重大项目 |
| :------: | :------: | :------: | :------: |
|   tzgg   |   zfcg   |   zjxx   |   zdxm   |

### 深圳市委组织部 <Site url="zzb.sz.gov.cn/*" size="sm" />

<Route namespace="gov" :data='{"path":"/shenzhen/zzb/:caty/:page?","categories":["government"],"example":"/gov/shenzhen/zzb/tzgg","parameters":{"caty":"信息类别","page":"页码"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["zzb.sz.gov.cn/*"]}],"name":"深圳市委组织部","maintainers":["zlasd"],"url":"zzb.sz.gov.cn/*","description":"| 通知公告 | 任前公示 | 政策法规 | 工作动态 | 部门预算决算公开 | 业务表格下载 |\n| :------: | :------: | :------: | :------: | :--------------: | :----------: |\n|   tzgg   |   rqgs   |   zcfg   |   gzdt   |       xcbd       |     bgxz     |","location":"shenzhen/zzb/index.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 通知公告 | 任前公示 | 政策法规 | 工作动态 | 部门预算决算公开 | 业务表格下载 |
| :------: | :------: | :------: | :------: | :--------------: | :----------: |
|   tzgg   |   rqgs   |   zcfg   |   gzdt   |       xcbd       |     bgxz     |

### 政府公开信息 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/sichuan/deyang/govpublicinfo/:countyName/:infoType?","categories":["government"],"example":"/gov/sichuan/deyang/govpublicinfo/绵竹市","parameters":{"countyName":"区县名（**其他区县整改中，暂时只支持`绵竹市`**）。德阳市、绵竹市、广汉市、什邡市、中江县、罗江区、旌阳区、高新区","infoType":"信息类型。默认值:fdzdnr-“法定主动内容”"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"政府公开信息","maintainers":["zytomorrow"],"description":"| 法定主动内容 | 公示公告 |\n| :----------: | :------: |\n|    fdzdnr    |   gsgg   |","location":"sichuan/deyang/govpublicinfo.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 法定主动内容 | 公示公告 |
| :----------: | :------: |
|    fdzdnr    |   gsgg   |

### 今日绵竹 <Site url="www.mztoday.gov.cn/*" size="sm" />

<Route namespace="gov" :data='{"path":"/sichuan/deyang/mztoday/:infoType?","categories":["government"],"example":"/gov/sichuan/deyang/mztoday/zx","parameters":{"infoType":"信息栏目名称。默认最新(zx)"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.mztoday.gov.cn/*"],"target":"/sichuan/deyang/mztoday"}],"name":"今日绵竹","maintainers":["zytomorrow"],"url":"www.mztoday.gov.cn/*","description":"| 最新 | 推荐 | 时政 | 教育 | 民生 | 文旅 | 经济 | 文明创建 | 部门 | 镇（街道） | 健康绵竹 | 南轩讲堂 | 视频 | 文明实践 | 领航中国 | 绵竹年画 | 绵竹历史 | 绵竹旅游 | 外媒看绵竹 |\n| ---- | ---- | ---- | ---- | ---- | ---- | ---- | -------- | ---- | ---------- | -------- | -------- | ---- | -------- | -------- | -------- | -------- | -------- | ---------- |\n| zx   | tj   | sz   | jy   | ms   | wl   | jj   | wmcj     | bm   | zj         | jkmz     | nxjt     | sp   | wmsj     | lhzg     | mznh     | mzls     | mzly     | wmkmz      |","location":"sichuan/deyang/mztoday.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

| 最新 | 推荐 | 时政 | 教育 | 民生 | 文旅 | 经济 | 文明创建 | 部门 | 镇（街道） | 健康绵竹 | 南轩讲堂 | 视频 | 文明实践 | 领航中国 | 绵竹年画 | 绵竹历史 | 绵竹旅游 | 外媒看绵竹 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | -------- | ---- | ---------- | -------- | -------- | ---- | -------- | -------- | -------- | -------- | -------- | ---------- |
| zx   | tj   | sz   | jy   | ms   | wl   | jj   | wmcj     | bm   | zj         | jkmz     | nxjt     | sp   | wmsj     | lhzg     | mznh     | mzls     | mzly     | wmkmz      |

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/suzhou/fg/:category{.+}?","name":"Unknown","maintainers":[],"location":"suzhou/fg.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### 太原市人力资源和社会保障局政府公开信息 <Site url="rsj.taiyuan.gov.cn/*" size="sm" />

<Route namespace="gov" :data='{"path":"/taiyuan/rsj/:caty/:page?","categories":["government"],"example":"/gov/taiyuan/rsj/gggs","parameters":{"caty":"信息类别","page":"页码"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["rsj.taiyuan.gov.cn/*"]}],"name":"太原市人力资源和社会保障局政府公开信息","maintainers":["2PoL"],"url":"rsj.taiyuan.gov.cn/*","description":"| 工作动态 | 太原新闻 | 通知公告 | 县区动态 | 国内动态 | 图片新闻 |\n| -------- | -------- | -------- | -------- | -------- | -------- |\n| gzdt     | tyxw     | gggs     | xqdt     | gndt     | tpxw     |","location":"taiyuan/rsj.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 工作动态 | 太原新闻 | 通知公告 | 县区动态 | 国内动态 | 图片新闻 |
| -------- | -------- | -------- | -------- | -------- | -------- |
| gzdt     | tyxw     | gggs     | xqdt     | gndt     | tpxw     |

### 天津港保税区-公告 <Site url="tjftz.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/tianjin/tjftz-notice/:channelId","categories":["government"],"example":"/gov/tianjin/tjftz-notice/6302","parameters":{"channelId":"公告分类id、详细信息点击源网站https://www.tjftz.gov.cn/请求中寻找"},"radar":[{"source":["tjftz.gov.cn/channels/:channelId.html"],"target":"/tianjin/tjftz-notice/:channelId"}],"name":"天津港保税区-公告","url":"tjftz.gov.cn","maintainers":["HaoyuLee"],"description":"\n| 公告类别         | channelId |\n| ------------ | -- |\n| 首页>新闻>保税区要闻>区域聚焦     | 6302  |\n    ","location":"tianjin/tjftz.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />


| 公告类别         | channelId |
| ------------ | -- |
| 首页>新闻>保税区要闻>区域聚焦     | 6302  |
    

### 天津人才工作网-公告 <Site url="hrss.tj.gov.cn/ztzl/ztzl1/tjrcgzw/" size="sm" />

<Route namespace="gov" :data='{"path":"/tianjin/tjrcgzw-notice/:cate/:subCate","categories":["government"],"example":"/gov/tianjin/tjrcgzw-notice/rczc/sjrczc/","parameters":{"channelId":"公告分类id、详细信息点击源网站https://hrss.tj.gov.cn/ztzl/ztzl1/tjrcgzw/请求中寻找"},"radar":[{"source":["hrss.tj.gov.cn/ztzl/ztzl1/tjrcgzw/"],"target":"/tianjin/tjrcgzw-notice/:cate/:subCate"}],"name":"天津人才工作网-公告","url":"hrss.tj.gov.cn/ztzl/ztzl1/tjrcgzw/","maintainers":["HaoyuLee"],"location":"tianjin/tjrcgzw.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 301 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Unknown <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/xinyi/*","name":"Unknown","maintainers":[],"location":"xinyi/xinyi.ts","heat":0,"topFeeds":[]}' :test='undefined' />

### 徐州市人力资源和社会保障局 <Site url="www.szlh.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/xuzhou/hrss/:category?","categories":["government"],"example":"/gov/xuzhou/hrss","parameters":{"category":"分类，见下表，默认为通知公告"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"徐州市人力资源和社会保障局","maintainers":["nczitzk"],"description":"| 通知公告 | 要闻动态 | 县区动态 | 事业招聘 | 企业招聘 | 政声传递 |\n| -------- | -------- | -------- | -------- | -------- | -------- |\n|          | 001001   | 001002   | 001004   | 001005   | 001006   |","location":"xuzhou/hrss.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 通知公告 | 要闻动态 | 县区动态 | 事业招聘 | 企业招聘 | 政声传递 |
| -------- | -------- | -------- | -------- | -------- | -------- |
|          | 001001   | 001002   | 001004   | 001005   | 001006   |

### 信息稿件 <Site url="www.gov.cn/" size="sm" />

<Route namespace="gov" :data='{"path":"/zhengce/govall/:advance?","categories":["government"],"example":"/gov/zhengce/govall/orpro=555&notpro=2&search_field=title","parameters":{"advance":"高级搜索选项，将作为请求参数直接添加到url后。目前已知的选项及其意义如下。"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.gov.cn/"],"target":"/zhengce/govall"}],"name":"信息稿件","maintainers":["ciaranchen"],"url":"www.gov.cn/","description":"|               选项              |                       意义                       |              备注              |\n| :-----------------------------: | :----------------------------------------------: | :----------------------------: |\n|              orpro              |             包含以下任意一个关键词。             |          用空格分隔。          |\n|              allpro             |                包含以下全部关键词                |                                |\n|              notpro             |                 不包含以下关键词                 |                                |\n|              inpro              |                完整不拆分的关键词                |                                |\n|           searchfield           | title: 搜索词在标题中；content: 搜索词在正文中。 |  默认为空，即网页的任意位置。  |\n| pubmintimeYear, pubmintimeMonth |                    从某年某月                    | 单独使用月份参数无法只筛选月份 |\n| pubmaxtimeYear, pubmaxtimeMonth |                    到某年某月                    | 单独使用月份参数无法只筛选月份 |\n|              colid              |                       栏目                       |      比较复杂，不建议使用      |","location":"zhengce/govall.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

|               选项              |                       意义                       |              备注              |
| :-----------------------------: | :----------------------------------------------: | :----------------------------: |
|              orpro              |             包含以下任意一个关键词。             |          用空格分隔。          |
|              allpro             |                包含以下全部关键词                |                                |
|              notpro             |                 不包含以下关键词                 |                                |
|              inpro              |                完整不拆分的关键词                |                                |
|           searchfield           | title: 搜索词在标题中；content: 搜索词在正文中。 |  默认为空，即网页的任意位置。  |
| pubmintimeYear, pubmintimeMonth |                    从某年某月                    | 单独使用月份参数无法只筛选月份 |
| pubmaxtimeYear, pubmaxtimeMonth |                    到某年某月                    | 单独使用月份参数无法只筛选月份 |
|              colid              |                       栏目                       |      比较复杂，不建议使用      |

### 宁波市人力资源和社会保障局-公告 <Site url="rsj.ningbo.gov.cn" size="sm" />

<Route namespace="gov" :data='{"path":"/zj/ningborsjnotice/:colId?","categories":["government"],"example":"/gov/zj/ningborsjnotice/1229676740","parameters":{"colId":"公告分类id、详细信息点击源网站http://rsj.ningbo.gov.cn/请求中寻找"},"radar":[{"source":["rsj.ningbo.gov.cn/col/col1229676740/index.html"],"target":"/zj/ningborsjnotice/:colId?"}],"name":"宁波市人力资源和社会保障局-公告","url":"rsj.ningbo.gov.cn","maintainers":["HaoyuLee"],"description":"\n| 公告类别         | colId |\n| ------------ | -- |\n| 事业单位进人公告     | 1229676740  |\n    ","location":"zj/ningborsjnotice.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"Error: STACK_TRACE_ERROR\n    at task (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:633:27)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:660:16)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:457:28)\n    at chain (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/chunk-tasks.js:9:14)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:72:12\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:40\n    at runWithSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1588:8)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:10)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:739:54)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at collectTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1048:25)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1556:17)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:85:25)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:153:2)\n    at executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/init-forks.aqTzCSR2.js:29:4)"}' />


| 公告类别         | colId |
| ------------ | -- |
| 事业单位进人公告     | 1229676740  |
    

## The White House <Site url="whitehouse.gov"/>

### News <Site url="whitehouse.gov" size="sm" />

<Route namespace="whitehouse" :data='{"path":"/news/:category?","categories":["government"],"example":"/whitehouse/news","parameters":{"category":"Category, see below, all by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["whitehouse.gov/:category","whitehouse.gov/"],"target":"/news/:category"}],"name":"News","maintainers":["nczitzk","hkamran80"],"description":"| All | Articles | Briefings and Statements | Presidential Actions | Remarks |\n| --- | -------- | ------------------------ | -------------------- | ------- |\n|     | articles | briefings-statements     | presidential-actions | remarks |","location":"news.ts","heat":67,"topFeeds":[{"id":"105673440807055360","type":"feed","url":"rsshub://whitehouse/news","title":"News – The White House","description":"News – The White House - Powered by RSSHub","image":null},{"id":"121830281207047168","type":"feed","url":"rsshub://whitehouse/news/presidential-actions","title":"Presidential Actions – The White House","description":"Presidential Actions – The White House - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| All | Articles | Briefings and Statements | Presidential Actions | Remarks |
| --- | -------- | ------------------------ | -------------------- | ------- |
|     | articles | briefings-statements     | presidential-actions | remarks |

## 汽车召回网 <Site url="qiche365.org.cn"/>

### 汽车召回 <Site url="qiche365.org.cn/index/recall/index.html" size="sm" />

<Route namespace="qiche365" :data='{"path":"/recall/:channel","name":"汽车召回","example":"/qiche365/recall/1","parameters":{"channel":"频道，见下表"},"description":"| 国内召回新闻 | 国内召回公告 | 国外召回新闻 | 国外召回公告 |\n| ------------ | ------------ | ------------ | ------------ |\n| 1            | 2            | 3            | 4            |","categories":["government"],"maintainers":["huanfe1"],"url":"qiche365.org.cn/index/recall/index.html","location":"recall.ts","heat":57,"topFeeds":[{"id":"60152580433969152","type":"feed","url":"rsshub://qiche365/recall/1","title":"国内召回公告","description":"国内召回公告 - Powered by RSSHub","image":null},{"id":"73324893137571840","type":"feed","url":"rsshub://qiche365/recall/2","title":"国内召回新闻","description":"国内召回新闻 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 国内召回新闻 | 国内召回公告 | 国外召回新闻 | 国外召回公告 |
| ------------ | ------------ | ------------ | ------------ |
| 1            | 2            | 3            | 4            |

## 共产党员网 <Site url="www.12371.cn"/>

### 最新发布 <Site url="www.12371.cn" size="sm" />

<Route namespace="12371" :data='{"path":"/:category?","example":"/12371/zxfb","parameters":{"category":"新闻分类名，预设 `zxfb`"},"radar":[{"source":["www.12371.cn/:category"]}],"name":"最新发布","maintainers":["zvrr"],"url":"www.12371.cn","description":"| 最新发布 |\n| :------: |\n|   zxfb   |","location":"zxfb.ts","heat":47,"topFeeds":[{"id":"64540861230048256","type":"feed","url":"rsshub://12371/zxfb","title":"最新发布_共产党员网","description":"最新发布_共产党员网 - Powered by RSSHub","image":null},{"id":"62033436171421696","type":"feed","url":"rsshub://12371","title":"最新发布_共产党员网","description":"最新发布_共产党员网 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 最新发布 |
| :------: |
|   zxfb   |

## 北京价格 <Site url="beijingprice.cn"/>

### 资讯 <Site url="beijingprice.cn" size="sm" />

<Route namespace="beijingprice" :data='{"path":"/:category{.+}?","name":"资讯","url":"beijingprice.cn","maintainers":["nczitzk"],"example":"/beijingprice/jgzx/xwzx","parameters":{"category":"分类，默认为 `jgzx/xwzx` 即新闻资讯，可在对应分类页 URL 中找到"},"description":"::: tip\n  若订阅 [新闻资讯](https://www.beijingprice.cn/jgzx/xwzx/)，网址为 `https://www.beijingprice.cn/jgzx/xwzx/`。截取 `https://beijingprice.cn/` 到末尾 `/` 的部分 `jgzx/xwzx` 作为参数填入，此时路由为 [`/beijingprice/jgzx/xwzx`](https://rsshub.app/beijingprice/jgzx/xwzx)。\n:::\n\n#### [价格资讯](https://www.beijingprice.cn/jgzx/xwzx/)\n\n| [新闻资讯](https://www.beijingprice.cn/jgzx/xwzx/)     | [工作动态](https://www.beijingprice.cn/jgzx/gzdt/)     | [各区动态](https://www.beijingprice.cn/jgzx/gqdt/)     | [通知公告](https://www.beijingprice.cn/jgzx/tzgg/)     | [价格早报](https://www.beijingprice.cn/jgzx/jgzb/)     |\n| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |\n| [jgzx/xwzx](https://rsshub.app/beijingprice/jgzx/xwzx) | [jgzx/gzdt](https://rsshub.app/beijingprice/jgzx/gzdt) | [jgzx/gqdt](https://rsshub.app/beijingprice/jgzx/gqdt) | [jgzx/tzgg](https://rsshub.app/beijingprice/jgzx/tzgg) | [jgzx/jgzb](https://rsshub.app/beijingprice/jgzx/jgzb) |\n\n#### [综合信息](https://www.beijingprice.cn/zhxx/cbjs/)\n\n| [价格听证](https://www.beijingprice.cn/zhxx/jgtz/)     | [价格监测定点单位名单](https://www.beijingprice.cn/zhxx/jgjcdddwmd/) | [部门预算决算](https://www.beijingprice.cn/bmys/) |\n| ------------------------------------------------------ | -------------------------------------------------------------------- | ------------------------------------------------- |\n| [zhxx/jgtz](https://rsshub.app/beijingprice/zhxx/jgtz) | [zhxx/jgjcdddwmd](https://rsshub.app/beijingprice/zhxx/jgjcdddwmd)   | [bmys](https://rsshub.app/beijingprice/bmys)      |\n    ","categories":["government"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["beijingprice.cn/:category?"]},{"title":"价格资讯 - 新闻资讯","source":["beijingprice.cn/jgzx/xwzx/"],"target":"/jgzx/xwzx"},{"title":"价格资讯 - 工作动态","source":["beijingprice.cn/jgzx/gzdt/"],"target":"/jgzx/gzdt"},{"title":"价格资讯 - 各区动态","source":["beijingprice.cn/jgzx/gqdt/"],"target":"/jgzx/gqdt"},{"title":"价格资讯 - 通知公告","source":["beijingprice.cn/jgzx/tzgg/"],"target":"/jgzx/tzgg"},{"title":"价格资讯 - 价格早报","source":["beijingprice.cn/jgzx/jgzb/"],"target":"/jgzx/jgzb"},{"title":"综合信息 - 价格听证","source":["beijingprice.cn/zhxx/jgtz/"],"target":"/zhxx/jgtz"},{"title":"综合信息 - 价格监测定点单位名单","source":["beijingprice.cn/zhxx/jgjcdddwmd/"],"target":"/zhxx/jgjcdddwmd"},{"title":"综合信息 - 部门预算决算","source":["beijingprice.cn/bmys/"],"target":"/bmys"}],"location":"index.ts","heat":42,"topFeeds":[{"id":"65788338627183616","type":"feed","url":"rsshub://beijingprice/jgzx/xwzx","title":"新闻资讯-北京价格","description":"北京价格网是北京市价格监测中心门户网站 - Powered by RSSHub","image":"https://www.beijingprice.cn/images/common/common-header-logo.png"}]}' :test='{"code":0}' />

::: tip
  若订阅 [新闻资讯](https://www.beijingprice.cn/jgzx/xwzx/)，网址为 `https://www.beijingprice.cn/jgzx/xwzx/`。截取 `https://beijingprice.cn/` 到末尾 `/` 的部分 `jgzx/xwzx` 作为参数填入，此时路由为 [`/beijingprice/jgzx/xwzx`](https://rsshub.app/beijingprice/jgzx/xwzx)。
:::

#### [价格资讯](https://www.beijingprice.cn/jgzx/xwzx/)

| [新闻资讯](https://www.beijingprice.cn/jgzx/xwzx/)     | [工作动态](https://www.beijingprice.cn/jgzx/gzdt/)     | [各区动态](https://www.beijingprice.cn/jgzx/gqdt/)     | [通知公告](https://www.beijingprice.cn/jgzx/tzgg/)     | [价格早报](https://www.beijingprice.cn/jgzx/jgzb/)     |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| [jgzx/xwzx](https://rsshub.app/beijingprice/jgzx/xwzx) | [jgzx/gzdt](https://rsshub.app/beijingprice/jgzx/gzdt) | [jgzx/gqdt](https://rsshub.app/beijingprice/jgzx/gqdt) | [jgzx/tzgg](https://rsshub.app/beijingprice/jgzx/tzgg) | [jgzx/jgzb](https://rsshub.app/beijingprice/jgzx/jgzb) |

#### [综合信息](https://www.beijingprice.cn/zhxx/cbjs/)

| [价格听证](https://www.beijingprice.cn/zhxx/jgtz/)     | [价格监测定点单位名单](https://www.beijingprice.cn/zhxx/jgjcdddwmd/) | [部门预算决算](https://www.beijingprice.cn/bmys/) |
| ------------------------------------------------------ | -------------------------------------------------------------------- | ------------------------------------------------- |
| [zhxx/jgtz](https://rsshub.app/beijingprice/zhxx/jgtz) | [zhxx/jgjcdddwmd](https://rsshub.app/beijingprice/zhxx/jgjcdddwmd)   | [bmys](https://rsshub.app/beijingprice/bmys)      |
    

## 中国疾病预防控制中心 <Site url="www.chinacdc.cn"/>

### 通用 <Site url="www.chinacdc.cn" size="sm" />

<Route namespace="chinacdc" :data='{"path":"/:category{.+}?","name":"通用","url":"www.chinacdc.cn","maintainers":["nczitzk"],"example":"/chinacdc/zxyw","parameters":{"category":"分类，默认为 `zxyw`，即中心要闻，可在对应分类页 URL 中找到，Category, `zxyw`，即中心要闻 by default"},"description":"::: tip\n若订阅 [中心要闻](https://www.chinacdc.cn/zxyw/)，网址为 `https://www.chinacdc.cn/zxyw/`，请截取 `https://www.chinacdc.cn/` 到末尾 `/` 的部分 `zxyw` 作为 `category` 参数填入，此时目标路由为 [`/chinacdc/zxyw`](https://rsshub.app/chinacdc/zxyw)。\n:::\n\n| [中心要闻](https://www.chinacdc.cn/zxyw/) | [通知公告](https://www.chinacdc.cn/tzgg/) |\n| ----------------------------------------- | ----------------------------------------- |\n| [zxyw](https://rsshub.app/chinacdc/zxyw)  | [tzgg](https://rsshub.app/chinacdc/tzgg)  |\n\n<details>\n<summary>更多分类</summary>\n\n#### [党建园地](https://www.chinacdc.cn/dqgz/djgz/)\n\n| [党建工作](https://www.chinacdc.cn/dqgz/djgz/)     | [廉政文化](https://www.chinacdc.cn/djgz_13611/)                | [工会工作](https://www.chinacdc.cn/ghgz/)          | [团青工作](https://www.chinacdc.cn/tqgz/)          | [理论学习](https://www.chinacdc.cn/tqgz_13618/)                |\n| -------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------------------- |\n| [dqgz/djgz](https://rsshub.app/chinacdc/dqgz/djgz) | [dqgz/djgz_13611](https://rsshub.app/chinacdc/dqgz/djgz_13611) | [dqgz/ghgz](https://rsshub.app/chinacdc/dqgz/ghgz) | [dqgz/tqgz](https://rsshub.app/chinacdc/dqgz/tqgz) | [dqgz/tqgz_13618](https://rsshub.app/chinacdc/dqgz/tqgz_13618) |\n\n#### [疾控应急](https://www.chinacdc.cn/jkyj/)\n\n| [传染病](https://www.chinacdc.cn/jkyj/crb2/)       | [突发公共卫生事件](https://www.chinacdc.cn/jkyj/tfggws/) | [慢性病与伤害防控](https://www.chinacdc.cn/jkyj/mxfcrxjb2/)  | [烟草控制](https://www.chinacdc.cn/jkyj/yckz/)     | [营养与健康](https://www.chinacdc.cn/jkyj/yyyjk2/)     |\n| -------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------------- | ------------------------------------------------------ |\n| [jkyj/crb2](https://rsshub.app/chinacdc/jkyj/crb2) | [jkyj/tfggws](https://rsshub.app/chinacdc/jkyj/tfggws)   | [jkyj/mxfcrxjb2](https://rsshub.app/chinacdc/jkyj/mxfcrxjb2) | [jkyj/yckz](https://rsshub.app/chinacdc/jkyj/yckz) | [jkyj/yyyjk2](https://rsshub.app/chinacdc/jkyj/yyyjk2) |\n\n| [环境与健康](https://www.chinacdc.cn/jkyj/hjyjk/)    | [职业卫生与中毒控制](https://www.chinacdc.cn/jkyj/hjwsyzdkz/) | [放射卫生](https://www.chinacdc.cn/jkyj/fsws/)     | [免疫规划](https://www.chinacdc.cn/jkyj/mygh02/)       | [结核病防控](https://www.chinacdc.cn/jkyj/jhbfk/)    |\n| ---------------------------------------------------- | ------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------ | ---------------------------------------------------- |\n| [jkyj/hjyjk](https://rsshub.app/chinacdc/jkyj/hjyjk) | [jkyj/hjwsyzdkz](https://rsshub.app/chinacdc/jkyj/hjwsyzdkz)  | [jkyj/fsws](https://rsshub.app/chinacdc/jkyj/fsws) | [jkyj/mygh02](https://rsshub.app/chinacdc/jkyj/mygh02) | [jkyj/jhbfk](https://rsshub.app/chinacdc/jkyj/jhbfk) |\n\n| [寄生虫病](https://www.chinacdc.cn/jkyj/jscb/)     |\n| -------------------------------------------------- |\n| [jkyj/jscb](https://rsshub.app/chinacdc/jkyj/jscb) |\n\n#### [科学研究](https://www.chinacdc.cn/kxyj/)\n\n| [科技进展](https://www.chinacdc.cn/kxyj/kjjz/)     | [学术动态](https://www.chinacdc.cn/kxyj/xsdt/)     | [科研平台](https://www.chinacdc.cn/kxyj/xsjl/)     | [科研亮点](https://www.chinacdc.cn/kxyj/kyld/)     | [科技政策](https://www.chinacdc.cn/kxyj/kjzc/)     |\n| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |\n| [kxyj/kjjz](https://rsshub.app/chinacdc/kxyj/kjjz) | [kxyj/xsdt](https://rsshub.app/chinacdc/kxyj/xsdt) | [kxyj/xsjl](https://rsshub.app/chinacdc/kxyj/xsjl) | [kxyj/kyld](https://rsshub.app/chinacdc/kxyj/kyld) | [kxyj/kjzc](https://rsshub.app/chinacdc/kxyj/kjzc) |\n\n#### [教育培训](https://www.chinacdc.cn/jypx/)\n\n| [研究生院](https://www.chinacdc.cn/jypx/yjsy/)     | [继续教育](https://www.chinacdc.cn/jypx/jxjy/)     | [博士后](https://www.chinacdc.cn/jypx/bsh/)      | [中国现场流行病学培训项目（CFETP）](https://www.chinacdc.cn/jypx/CFETP/) |\n| -------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------ |\n| [jypx/yjsy](https://rsshub.app/chinacdc/jypx/yjsy) | [jypx/jxjy](https://rsshub.app/chinacdc/jypx/jxjy) | [jypx/bsh](https://rsshub.app/chinacdc/jypx/bsh) | [jypx/CFETP](https://rsshub.app/chinacdc/jypx/CFETP)                     |\n\n#### [全球公卫](https://www.chinacdc.cn/qqgw/)\n\n| [合作伙伴](https://www.chinacdc.cn/qqgw/hzhb/)     | [世界卫生组织合作中心和参比实验室](https://www.chinacdc.cn/qqgw/wszz/) | [国际交流 (港澳台交流)](https://www.chinacdc.cn/qqgw/gjjl/) | [公共卫生援外与合作](https://www.chinacdc.cn/qqgw/ggws/) |\n| -------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------- |\n| [qqgw/hzhb](https://rsshub.app/chinacdc/qqgw/hzhb) | [qqgw/wszz](https://rsshub.app/chinacdc/qqgw/wszz)                     | [qqgw/gjjl](https://rsshub.app/chinacdc/qqgw/gjjl)         | [qqgw/ggws](https://rsshub.app/chinacdc/qqgw/ggws)       |\n\n#### [人才建设](https://www.chinacdc.cn/rcjs/)\n\n| [院士风采](https://www.chinacdc.cn/rcjs/ysfc/)     | [首席专家](https://www.chinacdc.cn/rcjs/sxzj/)     | [人才队伍](https://www.chinacdc.cn/rcjs/rcdw/)     | [人才招聘](https://www.chinacdc.cn/rcjs/rczp/)     |\n| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |\n| [rcjs/ysfc](https://rsshub.app/chinacdc/rcjs/ysfc) | [rcjs/sxzj](https://rsshub.app/chinacdc/rcjs/sxzj) | [rcjs/rcdw](https://rsshub.app/chinacdc/rcjs/rcdw) | [rcjs/rczp](https://rsshub.app/chinacdc/rcjs/rczp) |\n\n#### [健康数据](https://www.chinacdc.cn/jksj/)\n\n| [全国法定传染病疫情情况](https://www.chinacdc.cn/jksj/jksj01/) | [全国新型冠状病毒感染疫情情况](https://www.chinacdc.cn/jksj/xgbdyq/) | [重点传染病和突发公共卫生事件风险评估报告](https://www.chinacdc.cn/jksj/jksj02/) | [全球传染病事件风险评估报告](https://www.chinacdc.cn/jksj/jksj03/) | [全国预防接种异常反应监测信息概况](https://www.chinacdc.cn/jksj/jksj04_14209/) |\n| -------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------ |\n| [jksj/jksj01](https://rsshub.app/chinacdc/jksj/jksj01)         | [jksj/xgbdyq](https://rsshub.app/chinacdc/jksj/xgbdyq)               | [jksj/jksj02](https://rsshub.app/chinacdc/jksj/jksj02)                           | [jksj/jksj03](https://rsshub.app/chinacdc/jksj/jksj03)             | [jksj/jksj04_14209](https://rsshub.app/chinacdc/jksj/jksj04_14209)             |\n\n| [流感监测周报](https://www.chinacdc.cn/jksj/jksj04_14249/)         | [全国急性呼吸道传染病哨点监测情况](https://www.chinacdc.cn/jksj/jksj04_14275/) | [健康报告](https://www.chinacdc.cn/jksj/jksj04/)       |\n| ------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------ |\n| [jksj/jksj04_14249](https://rsshub.app/chinacdc/jksj/jksj04_14249) | [jksj/jksj04_14275](https://rsshub.app/chinacdc/jksj/jksj04_14275)             | [jksj/jksj04](https://rsshub.app/chinacdc/jksj/jksj04) |\n\n#### [健康科普](https://www.chinacdc.cn/jkkp/)\n\n| [传染病](https://www.chinacdc.cn/jkkp/crb/)      | [慢性非传染性疾病](https://www.chinacdc.cn/jkkp/mxfcrb/) | [免疫规划](https://www.chinacdc.cn/jkkp/mygh/)     | [公共卫生事件](https://www.chinacdc.cn/jkkp/ggws/) | [烟草控制](https://www.chinacdc.cn/jkkp/yckz/)     |\n| ------------------------------------------------ | -------------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |\n| [jkkp/crb](https://rsshub.app/chinacdc/jkkp/crb) | [jkkp/mxfcrb](https://rsshub.app/chinacdc/jkkp/mxfcrb)   | [jkkp/mygh](https://rsshub.app/chinacdc/jkkp/mygh) | [jkkp/ggws](https://rsshub.app/chinacdc/jkkp/ggws) | [jkkp/yckz](https://rsshub.app/chinacdc/jkkp/yckz) |\n\n| [营养与健康](https://www.chinacdc.cn/jkkp/yyjk/)   | [环境健康](https://www.chinacdc.cn/jkkp/hjjk/)     | [职业健康与中毒控制](https://www.chinacdc.cn/jkkp/zyjk/) | [放射卫生](https://www.chinacdc.cn/jkkp/fsws/)     |\n| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------- |\n| [jkkp/yyjk](https://rsshub.app/chinacdc/jkkp/yyjk) | [jkkp/hjjk](https://rsshub.app/chinacdc/jkkp/hjjk) | [jkkp/zyjk](https://rsshub.app/chinacdc/jkkp/zyjk)       | [jkkp/fsws](https://rsshub.app/chinacdc/jkkp/fsws) |\n\n</details>\n","categories":["government"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.chinacdc.cn/:category"]},{"title":"中心要闻","source":["www.chinacdc.cn/zxyw/"],"target":"/zxyw"},{"title":"通知公告","source":["www.chinacdc.cn/tzgg/"],"target":"/tzgg"},{"title":"党建园地 - 廉政文化","source":["www.chinacdc.cn/djgz_13611/"],"target":"/dqgz/djgz_13611"},{"title":"党建园地 - 党建工作","source":["www.chinacdc.cn/dqgz/"],"target":"/dqgz/djgz"},{"title":"党建园地 - 廉政文化","source":["www.chinacdc.cn/djgz_13611/"],"target":"/dqgz/djgz_13611"},{"title":"党建园地 - 工会工作","source":["www.chinacdc.cn/ghgz/"],"target":"/dqgz/ghgz"},{"title":"党建园地 - 团青工作","source":["www.chinacdc.cn/tqgz/"],"target":"/dqgz/tqgz"},{"title":"党建园地 - 理论学习","source":["www.chinacdc.cn/tqgz_13618/"],"target":"/dqgz/tqgz_13618"},{"title":"疾控应急 - 传染病","source":["www.chinacdc.cn/jkyj/crb2/"],"target":"/jkyj/crb2"},{"title":"疾控应急 - 突发公共卫生事件","source":["www.chinacdc.cn/jkyj/tfggws/"],"target":"/jkyj/tfggws"},{"title":"疾控应急 - 慢性病与伤害防控","source":["www.chinacdc.cn/jkyj/mxfcrxjb2/"],"target":"/jkyj/mxfcrxjb2"},{"title":"疾控应急 - 烟草控制","source":["www.chinacdc.cn/jkyj/yckz/"],"target":"/jkyj/yckz"},{"title":"疾控应急 - 营养与健康","source":["www.chinacdc.cn/jkyj/yyyjk2/"],"target":"/jkyj/yyyjk2"},{"title":"疾控应急 - 环境与健康","source":["www.chinacdc.cn/jkyj/hjyjk/"],"target":"/jkyj/hjyjk"},{"title":"疾控应急 - 职业卫生与中毒控制","source":["www.chinacdc.cn/jkyj/hjwsyzdkz/"],"target":"/jkyj/hjwsyzdkz"},{"title":"疾控应急 - 放射卫生","source":["www.chinacdc.cn/jkyj/fsws/"],"target":"/jkyj/fsws"},{"title":"疾控应急 - 免疫规划","source":["www.chinacdc.cn/jkyj/mygh02/"],"target":"/jkyj/mygh02"},{"title":"疾控应急 - 结核病防控","source":["www.chinacdc.cn/jkyj/jhbfk/"],"target":"/jkyj/jhbfk"},{"title":"疾控应急 - 寄生虫病","source":["www.chinacdc.cn/jkyj/jscb/"],"target":"/jkyj/jscb"},{"title":"科学研究 - 科技进展","source":["www.chinacdc.cn/kxyj/kjjz/"],"target":"/kxyj/kjjz"},{"title":"科学研究 - 学术动态","source":["www.chinacdc.cn/kxyj/xsdt/"],"target":"/kxyj/xsdt"},{"title":"科学研究 - 科研平台","source":["www.chinacdc.cn/kxyj/xsjl/"],"target":"/kxyj/xsjl"},{"title":"科学研究 - 科研亮点","source":["www.chinacdc.cn/kxyj/kyld/"],"target":"/kxyj/kyld"},{"title":"科学研究 - 科技政策","source":["www.chinacdc.cn/kxyj/kjzc/"],"target":"/kxyj/kjzc"},{"title":"教育培训 - 研究生院","source":["www.chinacdc.cn/jypx/yjsy/"],"target":"/jypx/yjsy"},{"title":"教育培训 - 继续教育","source":["www.chinacdc.cn/jypx/jxjy/"],"target":"/jypx/jxjy"},{"title":"教育培训 - 博士后","source":["www.chinacdc.cn/jypx/bsh/"],"target":"/jypx/bsh"},{"title":"教育培训 - 中国现场流行病学培训项目（CFETP）","source":["www.chinacdc.cn/jypx/CFETP/"],"target":"/jypx/CFETP"},{"title":"全球公卫 - 合作伙伴","source":["www.chinacdc.cn/qqgw/hzhb/"],"target":"/qqgw/hzhb"},{"title":"全球公卫 - 世界卫生组织合作中心和参比实验室","source":["www.chinacdc.cn/qqgw/wszz/"],"target":"/qqgw/wszz"},{"title":"全球公卫 - 国际交流 (港澳台交流)","source":["www.chinacdc.cn/qqgw/gjjl/"],"target":"/qqgw/gjjl"},{"title":"全球公卫 - 公共卫生援外与合作","source":["www.chinacdc.cn/qqgw/ggws/"],"target":"/qqgw/ggws"},{"title":"人才建设 - 院士风采","source":["www.chinacdc.cn/rcjs/ysfc/"],"target":"/rcjs/ysfc"},{"title":"人才建设 - 首席专家","source":["www.chinacdc.cn/rcjs/sxzj/"],"target":"/rcjs/sxzj"},{"title":"人才建设 - 人才队伍","source":["www.chinacdc.cn/rcjs/rcdw/"],"target":"/rcjs/rcdw"},{"title":"人才建设 - 人才招聘","source":["www.chinacdc.cn/rcjs/rczp/"],"target":"/rcjs/rczp"},{"title":"健康数据 - 全国法定传染病疫情情况","source":["www.chinacdc.cn/jksj/jksj01/"],"target":"/jksj/jksj01"},{"title":"健康数据 - 全国新型冠状病毒感染疫情情况","source":["www.chinacdc.cn/jksj/xgbdyq/"],"target":"/jksj/xgbdyq"},{"title":"健康数据 - 重点传染病和突发公共卫生事件风险评估报告","source":["www.chinacdc.cn/jksj/jksj02/"],"target":"/jksj/jksj02"},{"title":"健康数据 - 全球传染病事件风险评估报告","source":["www.chinacdc.cn/jksj/jksj03/"],"target":"/jksj/jksj03"},{"title":"健康数据 - 全国预防接种异常反应监测信息概况","source":["www.chinacdc.cn/jksj/jksj04_14209/"],"target":"/jksj/jksj04_14209"},{"title":"健康数据 - 流感监测周报","source":["www.chinacdc.cn/jksj/jksj04_14249/"],"target":"/jksj/jksj04_14249"},{"title":"健康数据 - 全国急性呼吸道传染病哨点监测情况","source":["www.chinacdc.cn/jksj/jksj04_14275/"],"target":"/jksj/jksj04_14275"},{"title":"健康数据 - 健康报告","source":["www.chinacdc.cn/jksj/jksj04/"],"target":"/jksj/jksj04"},{"title":"健康科普 - 传染病","source":["www.chinacdc.cn/jkkp/crb/"],"target":"/jkkp/crb"},{"title":"健康科普 - 慢性非传染性疾病","source":["www.chinacdc.cn/jkkp/mxfcrb/"],"target":"/jkkp/mxfcrb"},{"title":"健康科普 - 免疫规划","source":["www.chinacdc.cn/jkkp/mygh/"],"target":"/jkkp/mygh"},{"title":"健康科普 - 公共卫生事件","source":["www.chinacdc.cn/jkkp/ggws/"],"target":"/jkkp/ggws"},{"title":"健康科普 - 烟草控制","source":["www.chinacdc.cn/jkkp/yckz/"],"target":"/jkkp/yckz"},{"title":"健康科普 - 营养与健康","source":["www.chinacdc.cn/jkkp/yyjk/"],"target":"/jkkp/yyjk"},{"title":"健康科普 - 环境健康","source":["www.chinacdc.cn/jkkp/hjjk/"],"target":"/jkkp/hjjk"},{"title":"健康科普 - 职业健康与中毒控制","source":["www.chinacdc.cn/jkkp/zyjk/"],"target":"/jkkp/zyjk"},{"title":"健康科普 - 放射卫生","source":["www.chinacdc.cn/jkkp/fsws/"],"target":"/jkkp/fsws"}],"view":0,"location":"index.ts","heat":42,"topFeeds":[{"id":"89850915990139904","type":"feed","url":"rsshub://chinacdc/zxyw","title":"中国疾病预防控制中心 - 中心要闻","description":"中心要闻 - Powered by RSSHub","image":"https://www.chinacdc.cn/images/logo0817.png"},{"id":"93118010371237888","type":"feed","url":"rsshub://chinacdc/jksj/jksj01","title":"中国疾病预防控制中心 - 全国法定传染病疫情情况","description":"全国法定传染病疫情情况 - Powered by RSSHub","image":"https://www.chinacdc.cn/images/logo0817.png"}]}' :test='{"code":0}' />

::: tip
若订阅 [中心要闻](https://www.chinacdc.cn/zxyw/)，网址为 `https://www.chinacdc.cn/zxyw/`，请截取 `https://www.chinacdc.cn/` 到末尾 `/` 的部分 `zxyw` 作为 `category` 参数填入，此时目标路由为 [`/chinacdc/zxyw`](https://rsshub.app/chinacdc/zxyw)。
:::

| [中心要闻](https://www.chinacdc.cn/zxyw/) | [通知公告](https://www.chinacdc.cn/tzgg/) |
| ----------------------------------------- | ----------------------------------------- |
| [zxyw](https://rsshub.app/chinacdc/zxyw)  | [tzgg](https://rsshub.app/chinacdc/tzgg)  |

<details>
<summary>更多分类</summary>

#### [党建园地](https://www.chinacdc.cn/dqgz/djgz/)

| [党建工作](https://www.chinacdc.cn/dqgz/djgz/)     | [廉政文化](https://www.chinacdc.cn/djgz_13611/)                | [工会工作](https://www.chinacdc.cn/ghgz/)          | [团青工作](https://www.chinacdc.cn/tqgz/)          | [理论学习](https://www.chinacdc.cn/tqgz_13618/)                |
| -------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------------------- |
| [dqgz/djgz](https://rsshub.app/chinacdc/dqgz/djgz) | [dqgz/djgz_13611](https://rsshub.app/chinacdc/dqgz/djgz_13611) | [dqgz/ghgz](https://rsshub.app/chinacdc/dqgz/ghgz) | [dqgz/tqgz](https://rsshub.app/chinacdc/dqgz/tqgz) | [dqgz/tqgz_13618](https://rsshub.app/chinacdc/dqgz/tqgz_13618) |

#### [疾控应急](https://www.chinacdc.cn/jkyj/)

| [传染病](https://www.chinacdc.cn/jkyj/crb2/)       | [突发公共卫生事件](https://www.chinacdc.cn/jkyj/tfggws/) | [慢性病与伤害防控](https://www.chinacdc.cn/jkyj/mxfcrxjb2/)  | [烟草控制](https://www.chinacdc.cn/jkyj/yckz/)     | [营养与健康](https://www.chinacdc.cn/jkyj/yyyjk2/)     |
| -------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------------- | ------------------------------------------------------ |
| [jkyj/crb2](https://rsshub.app/chinacdc/jkyj/crb2) | [jkyj/tfggws](https://rsshub.app/chinacdc/jkyj/tfggws)   | [jkyj/mxfcrxjb2](https://rsshub.app/chinacdc/jkyj/mxfcrxjb2) | [jkyj/yckz](https://rsshub.app/chinacdc/jkyj/yckz) | [jkyj/yyyjk2](https://rsshub.app/chinacdc/jkyj/yyyjk2) |

| [环境与健康](https://www.chinacdc.cn/jkyj/hjyjk/)    | [职业卫生与中毒控制](https://www.chinacdc.cn/jkyj/hjwsyzdkz/) | [放射卫生](https://www.chinacdc.cn/jkyj/fsws/)     | [免疫规划](https://www.chinacdc.cn/jkyj/mygh02/)       | [结核病防控](https://www.chinacdc.cn/jkyj/jhbfk/)    |
| ---------------------------------------------------- | ------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------ | ---------------------------------------------------- |
| [jkyj/hjyjk](https://rsshub.app/chinacdc/jkyj/hjyjk) | [jkyj/hjwsyzdkz](https://rsshub.app/chinacdc/jkyj/hjwsyzdkz)  | [jkyj/fsws](https://rsshub.app/chinacdc/jkyj/fsws) | [jkyj/mygh02](https://rsshub.app/chinacdc/jkyj/mygh02) | [jkyj/jhbfk](https://rsshub.app/chinacdc/jkyj/jhbfk) |

| [寄生虫病](https://www.chinacdc.cn/jkyj/jscb/)     |
| -------------------------------------------------- |
| [jkyj/jscb](https://rsshub.app/chinacdc/jkyj/jscb) |

#### [科学研究](https://www.chinacdc.cn/kxyj/)

| [科技进展](https://www.chinacdc.cn/kxyj/kjjz/)     | [学术动态](https://www.chinacdc.cn/kxyj/xsdt/)     | [科研平台](https://www.chinacdc.cn/kxyj/xsjl/)     | [科研亮点](https://www.chinacdc.cn/kxyj/kyld/)     | [科技政策](https://www.chinacdc.cn/kxyj/kjzc/)     |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| [kxyj/kjjz](https://rsshub.app/chinacdc/kxyj/kjjz) | [kxyj/xsdt](https://rsshub.app/chinacdc/kxyj/xsdt) | [kxyj/xsjl](https://rsshub.app/chinacdc/kxyj/xsjl) | [kxyj/kyld](https://rsshub.app/chinacdc/kxyj/kyld) | [kxyj/kjzc](https://rsshub.app/chinacdc/kxyj/kjzc) |

#### [教育培训](https://www.chinacdc.cn/jypx/)

| [研究生院](https://www.chinacdc.cn/jypx/yjsy/)     | [继续教育](https://www.chinacdc.cn/jypx/jxjy/)     | [博士后](https://www.chinacdc.cn/jypx/bsh/)      | [中国现场流行病学培训项目（CFETP）](https://www.chinacdc.cn/jypx/CFETP/) |
| -------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------ |
| [jypx/yjsy](https://rsshub.app/chinacdc/jypx/yjsy) | [jypx/jxjy](https://rsshub.app/chinacdc/jypx/jxjy) | [jypx/bsh](https://rsshub.app/chinacdc/jypx/bsh) | [jypx/CFETP](https://rsshub.app/chinacdc/jypx/CFETP)                     |

#### [全球公卫](https://www.chinacdc.cn/qqgw/)

| [合作伙伴](https://www.chinacdc.cn/qqgw/hzhb/)     | [世界卫生组织合作中心和参比实验室](https://www.chinacdc.cn/qqgw/wszz/) | [国际交流 (港澳台交流)](https://www.chinacdc.cn/qqgw/gjjl/) | [公共卫生援外与合作](https://www.chinacdc.cn/qqgw/ggws/) |
| -------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------- |
| [qqgw/hzhb](https://rsshub.app/chinacdc/qqgw/hzhb) | [qqgw/wszz](https://rsshub.app/chinacdc/qqgw/wszz)                     | [qqgw/gjjl](https://rsshub.app/chinacdc/qqgw/gjjl)         | [qqgw/ggws](https://rsshub.app/chinacdc/qqgw/ggws)       |

#### [人才建设](https://www.chinacdc.cn/rcjs/)

| [院士风采](https://www.chinacdc.cn/rcjs/ysfc/)     | [首席专家](https://www.chinacdc.cn/rcjs/sxzj/)     | [人才队伍](https://www.chinacdc.cn/rcjs/rcdw/)     | [人才招聘](https://www.chinacdc.cn/rcjs/rczp/)     |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| [rcjs/ysfc](https://rsshub.app/chinacdc/rcjs/ysfc) | [rcjs/sxzj](https://rsshub.app/chinacdc/rcjs/sxzj) | [rcjs/rcdw](https://rsshub.app/chinacdc/rcjs/rcdw) | [rcjs/rczp](https://rsshub.app/chinacdc/rcjs/rczp) |

#### [健康数据](https://www.chinacdc.cn/jksj/)

| [全国法定传染病疫情情况](https://www.chinacdc.cn/jksj/jksj01/) | [全国新型冠状病毒感染疫情情况](https://www.chinacdc.cn/jksj/xgbdyq/) | [重点传染病和突发公共卫生事件风险评估报告](https://www.chinacdc.cn/jksj/jksj02/) | [全球传染病事件风险评估报告](https://www.chinacdc.cn/jksj/jksj03/) | [全国预防接种异常反应监测信息概况](https://www.chinacdc.cn/jksj/jksj04_14209/) |
| -------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| [jksj/jksj01](https://rsshub.app/chinacdc/jksj/jksj01)         | [jksj/xgbdyq](https://rsshub.app/chinacdc/jksj/xgbdyq)               | [jksj/jksj02](https://rsshub.app/chinacdc/jksj/jksj02)                           | [jksj/jksj03](https://rsshub.app/chinacdc/jksj/jksj03)             | [jksj/jksj04_14209](https://rsshub.app/chinacdc/jksj/jksj04_14209)             |

| [流感监测周报](https://www.chinacdc.cn/jksj/jksj04_14249/)         | [全国急性呼吸道传染病哨点监测情况](https://www.chinacdc.cn/jksj/jksj04_14275/) | [健康报告](https://www.chinacdc.cn/jksj/jksj04/)       |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------ |
| [jksj/jksj04_14249](https://rsshub.app/chinacdc/jksj/jksj04_14249) | [jksj/jksj04_14275](https://rsshub.app/chinacdc/jksj/jksj04_14275)             | [jksj/jksj04](https://rsshub.app/chinacdc/jksj/jksj04) |

#### [健康科普](https://www.chinacdc.cn/jkkp/)

| [传染病](https://www.chinacdc.cn/jkkp/crb/)      | [慢性非传染性疾病](https://www.chinacdc.cn/jkkp/mxfcrb/) | [免疫规划](https://www.chinacdc.cn/jkkp/mygh/)     | [公共卫生事件](https://www.chinacdc.cn/jkkp/ggws/) | [烟草控制](https://www.chinacdc.cn/jkkp/yckz/)     |
| ------------------------------------------------ | -------------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| [jkkp/crb](https://rsshub.app/chinacdc/jkkp/crb) | [jkkp/mxfcrb](https://rsshub.app/chinacdc/jkkp/mxfcrb)   | [jkkp/mygh](https://rsshub.app/chinacdc/jkkp/mygh) | [jkkp/ggws](https://rsshub.app/chinacdc/jkkp/ggws) | [jkkp/yckz](https://rsshub.app/chinacdc/jkkp/yckz) |

| [营养与健康](https://www.chinacdc.cn/jkkp/yyjk/)   | [环境健康](https://www.chinacdc.cn/jkkp/hjjk/)     | [职业健康与中毒控制](https://www.chinacdc.cn/jkkp/zyjk/) | [放射卫生](https://www.chinacdc.cn/jkkp/fsws/)     |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------- |
| [jkkp/yyjk](https://rsshub.app/chinacdc/jkkp/yyjk) | [jkkp/hjjk](https://rsshub.app/chinacdc/jkkp/hjjk) | [jkkp/zyjk](https://rsshub.app/chinacdc/jkkp/zyjk)       | [jkkp/fsws](https://rsshub.app/chinacdc/jkkp/fsws) |

</details>


## World Health Organization | WHO <Site url="who.int"/>

### Newsroom <Site url="who.int/news" size="sm" />

<Route namespace="who" :data='{"path":"/news-room/:category?/:language?","categories":["government"],"example":"/who/news-room/feature-stories","parameters":{"category":"Category, see below, Feature stories by default","language":"Language, see below, English by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["who.int/news-room/:type"],"target":"/news-room/:type"}],"name":"Newsroom","maintainers":["LogicJake","nczitzk"],"url":"who.int/news","description":"Category\n\n| Feature stories | Commentaries |\n| --------------- | ------------ |\n| feature-stories | commentaries |\n\n  Language\n\n| English | العربية | 中文 | Français | Русский | Español | Português |\n| ------- | ------- | ---- | -------- | ------- | ------- | --------- |\n| en      | ar      | zh   | fr       | ru      | es      | pt        |","location":"news-room.ts","heat":8,"topFeeds":[{"id":"62422399410744320","type":"feed","url":"rsshub://who/news-room/feature-stories","title":"Feature stories - WHO","description":"Feature stories - WHO - Powered by RSSHub","image":null},{"id":"94224807176272896","type":"feed","url":"rsshub://who/news-room/commentaries/zh","title":"评论 - WHO","description":"评论 - WHO - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

Category

| Feature stories | Commentaries |
| --------------- | ------------ |
| feature-stories | commentaries |

  Language

| English | العربية | 中文 | Français | Русский | Español | Português |
| ------- | ------- | ---- | -------- | ------- | ------- | --------- |
| en      | ar      | zh   | fr       | ru      | es      | pt        |

### News <Site url="who.int/news" size="sm" />

<Route namespace="who" :data='{"path":"/news/:language?","categories":["government"],"example":"/who/news","parameters":{"language":"Language, see below, English by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["who.int/news"],"target":"/news"}],"name":"News","maintainers":["nczitzk"],"url":"who.int/news","description":"Language\n\n| English | العربية | 中文 | Français | Русский | Español | Português |\n| ------- | ------- | ---- | -------- | ------- | ------- | --------- |\n| en      | ar      | zh   | fr       | ru      | es      | pt        |","location":"news.ts","heat":8,"topFeeds":[{"id":"80542799527249920","type":"feed","url":"rsshub://who/news","title":"News - WHO","description":"News - WHO - Powered by RSSHub","image":null},{"id":"62422466958723072","type":"feed","url":"rsshub://who/news/zh","title":"News - WHO","description":"News - WHO - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

Language

| English | العربية | 中文 | Français | Русский | Español | Português |
| ------- | ------- | ---- | -------- | ------- | ------- | --------- |
| en      | ar      | zh   | fr       | ru      | es      | pt        |

### Speeches <Site url="who.int/director-general/speeches" size="sm" />

<Route namespace="who" :data='{"path":"/speeches/:language?","categories":["government"],"example":"/who/speeches","parameters":{"language":"Language, see below, English by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["who.int/director-general/speeches"],"target":"/speeches"}],"name":"Speeches","maintainers":["nczitzk"],"url":"who.int/director-general/speeches","description":"Language\n\n| English | العربية | 中文 | Français | Русский | Español | Português |\n| ------- | ------- | ---- | -------- | ------- | ------- | --------- |\n| en      | ar      | zh   | fr       | ru      | es      | pt        |","location":"speeches.ts","heat":3,"topFeeds":[{"id":"65765818076625920","type":"feed","url":"rsshub://who/speeches","title":"Speeches - WHO","description":"Speeches - WHO - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

Language

| English | العربية | 中文 | Français | Русский | Español | Português |
| ------- | ------- | ---- | -------- | ------- | ------- | --------- |
| en      | ar      | zh   | fr       | ru      | es      | pt        |

## 中国金融期货交易所 <Site url="cffex.com.cn"/>

### 交易所公告 <Site url="www.cffex.com.cn" size="sm" />

<Route namespace="cffex" :data='{"path":"/announcement","name":"交易所公告","url":"www.cffex.com.cn","maintainers":["ChenXiangcheng1"],"example":"/cffex/announcement","parameters":{},"description":"","categories":["government"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["cffex.com.cn"],"target":"/announcement"}],"location":"announcement.ts","heat":18,"topFeeds":[{"id":"72147630295105536","type":"feed","url":"rsshub://cffex/announcement","title":"中国金融期货交易所 - 交易所公告","description":"中国金融期货交易所 - 交易所公告 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 国家市场监督管理总局缺陷产品管理中心 <Site url="www.samrdprc.org.cn"/>

### 召回信息 <Site url="www.samrdprc.org.cn" size="sm" />

<Route namespace="samrdprc" :data='{"path":"/news/:type1/:type2","categories":["government"],"example":"/samrdprc/news/xfpzh/xfpgnzh","parameters":{"type1":"召回类型ID1，见下表","type2":"召回类型ID2，见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"description":"\n| 类型中文 | 召回类型ID1 | 召回类型ID2 |\n| --- | --- | --- |\n| 消费品召回 | xfpzh | xfpgnzh |\n| 汽车召回 | qczh | gnzhqc |\n","name":"召回信息","maintainers":["a180285"],"radar":[{"source":["www.samrdprc.org.cn/:type1/:type2"],"target":"/news/:type1/:type2"}],"location":"news.ts","heat":12,"topFeeds":[{"id":"160626513899715584","type":"feed","url":"rsshub://samrdprc/news/xfpzh/xfpgnzh","title":"国内消费品召回新闻 - 国家市场监督管理总局","description":"国内消费品召回新闻 - 国家市场监督管理总局 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />


| 类型中文 | 召回类型ID1 | 召回类型ID2 |
| --- | --- | --- |
| 消费品召回 | xfpzh | xfpgnzh |
| 汽车召回 | qczh | gnzhqc |


### 栏目 <Site url="www.samrdprc.org.cn" size="sm" />

<Route namespace="samrdprc" :data='{"path":"/:id{.+}?","name":"栏目","url":"www.samrdprc.org.cn","maintainers":["nczitzk"],"example":"/samrdprc/xwdt/gzdt","parameters":{"id":{"description":"栏目 id，默认为 `xwdt/gzdt`，即国内新闻，可在对应分类页 URL 中找到","options":[{"label":"新闻动态","value":"xwdt/gzdt"},{"label":"网站公告","value":"wzgg"},{"label":"汽车召回","value":"qczh"},{"label":"消费品召回","value":"xfpzh"},{"label":"技术报告","value":"yjgz/jsyj"},{"label":"SAC/TC463","value":"yjgz/sactc"},{"label":"研究动态","value":"yjgz/yjfx"},{"label":"安全教育","value":"aqjy"},{"label":"国内法规","value":"flfg/gnfg"}]}},"description":"::: tip\n订阅 [网站公告](https://www.samrdprc.org.cn/wzgg/)，其源网址为 `https://www.samrdprc.org.cn/wzgg/`，请参考该 URL 指定部分构成参数，此时路由为 [`/samrdprc/wzgg`](https://rsshub.app/samrdprc/wzgg)。\n:::\n\n<details>\n  <summary>更多分类</summary>\n\n  #### 网站首页\n\n  | [新闻动态](https://www.samrdprc.org.cn/xwdt/gzdt/) | [网站公告](https://www.samrdprc.org.cn/wzgg/) | [汽车召回](https://www.samrdprc.org.cn/qczh/) | [消费品召回](https://www.samrdprc.org.cn/xfpzh/) |\n  | -------------------------------------------------- | --------------------------------------------- | --------------------------------------------- | ------------------------------------------------ |\n  | [xwdt/gzdt](https://rsshub.app/samrdprc/xwdt/gzdt) | [wzgg](https://rsshub.app/samrdprc/wzgg)      | [qczh](https://rsshub.app/samrdprc/qczh)      | [xfpzh](https://rsshub.app/samrdprc/xfpzh)       |\n\n  #### 科学研究\n\n  | [技术报告](https://www.samrdprc.org.cn/yjgz/jsyj/) | [SAC/TC463](https://www.samrdprc.org.cn/yjgz/sactc/) | [研究动态](https://www.samrdprc.org.cn/yjgz/yjfx/) |\n  | -------------------------------------------------- | ---------------------------------------------------- | -------------------------------------------------- |\n  | [yjgz/jsyj](https://rsshub.app/samrdprc/yjgz/jsyj) | [yjgz/sactc](https://rsshub.app/samrdprc/yjgz/sactc) | [yjgz/yjfx](https://rsshub.app/samrdprc/yjgz/yjfx) |\n\n  #### 安全教育\n\n  | [安全教育](https://www.samrdprc.org.cn/aqjy/) |\n  | --------------------------------------------- |\n  | [aqjy](https://rsshub.app/samrdprc/aqjy)      |\n\n  #### 法律法规\n\n  | [国内法规](https://www.samrdprc.org.cn/flfg/gnfg/) |\n  | -------------------------------------------------- |\n  | [flfg/gnfg](https://rsshub.app/samrdprc/flfg/gnfg) |\n</details>\n","categories":["government"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.samrdprc.org.cn/:id"],"target":"/:id"},{"title":"网站首页 - 新闻动态","source":["www.samrdprc.org.cn/xwdt/gzdt/"],"target":"/xwdt/gzdt"},{"title":"网站首页 - 网站公告","source":["www.samrdprc.org.cn/wzgg/"],"target":"/wzgg"},{"title":"网站首页 - 汽车召回","source":["www.samrdprc.org.cn/qczh/"],"target":"/qczh"},{"title":"网站首页 - 消费品召回","source":["www.samrdprc.org.cn/xfpzh/"],"target":"/xfpzh"},{"title":"科学研究 - 技术报告","source":["www.samrdprc.org.cn/yjgz/jsyj/"],"target":"/yjgz/jsyj"},{"title":"科学研究 - SAC/TC463","source":["www.samrdprc.org.cn/yjgz/sactc/"],"target":"/yjgz/sactc"},{"title":"科学研究 - 研究动态","source":["www.samrdprc.org.cn/yjgz/yjfx/"],"target":"/yjgz/yjfx"},{"title":"安全教育 - 安全教育","source":["www.samrdprc.org.cn/aqjy/"],"target":"/aqjy"},{"title":"法律法规 - 国内法规","source":["www.samrdprc.org.cn/flfg/gnfg/"],"target":"/flfg/gnfg"}],"view":0,"location":"index.ts","heat":2,"topFeeds":[{"id":"190987678071546880","type":"feed","url":"rsshub://samrdprc/xwdt/gzdt","title":"国内新闻-国家市场监督管理总局缺陷产品管理中心","description":"国家市场监督管理总局缺陷产品管理中心,缺陷产品,缺陷产品管理中心,汽车产品召回,消费品召回,科学研究,安全教育,法律法规,缺陷信息报告,汽车三包信息,车企信息平台,车辆事故调查,车辆事故调查产品伤害监测 - Powered by RSSHub","image":"https://www.samrdprc.org.cn/images/logo_DPRC.png"}]}' :test='{"code":0}' />

::: tip
订阅 [网站公告](https://www.samrdprc.org.cn/wzgg/)，其源网址为 `https://www.samrdprc.org.cn/wzgg/`，请参考该 URL 指定部分构成参数，此时路由为 [`/samrdprc/wzgg`](https://rsshub.app/samrdprc/wzgg)。
:::

<details>
  <summary>更多分类</summary>

  #### 网站首页

  | [新闻动态](https://www.samrdprc.org.cn/xwdt/gzdt/) | [网站公告](https://www.samrdprc.org.cn/wzgg/) | [汽车召回](https://www.samrdprc.org.cn/qczh/) | [消费品召回](https://www.samrdprc.org.cn/xfpzh/) |
  | -------------------------------------------------- | --------------------------------------------- | --------------------------------------------- | ------------------------------------------------ |
  | [xwdt/gzdt](https://rsshub.app/samrdprc/xwdt/gzdt) | [wzgg](https://rsshub.app/samrdprc/wzgg)      | [qczh](https://rsshub.app/samrdprc/qczh)      | [xfpzh](https://rsshub.app/samrdprc/xfpzh)       |

  #### 科学研究

  | [技术报告](https://www.samrdprc.org.cn/yjgz/jsyj/) | [SAC/TC463](https://www.samrdprc.org.cn/yjgz/sactc/) | [研究动态](https://www.samrdprc.org.cn/yjgz/yjfx/) |
  | -------------------------------------------------- | ---------------------------------------------------- | -------------------------------------------------- |
  | [yjgz/jsyj](https://rsshub.app/samrdprc/yjgz/jsyj) | [yjgz/sactc](https://rsshub.app/samrdprc/yjgz/sactc) | [yjgz/yjfx](https://rsshub.app/samrdprc/yjgz/yjfx) |

  #### 安全教育

  | [安全教育](https://www.samrdprc.org.cn/aqjy/) |
  | --------------------------------------------- |
  | [aqjy](https://rsshub.app/samrdprc/aqjy)      |

  #### 法律法规

  | [国内法规](https://www.samrdprc.org.cn/flfg/gnfg/) |
  | -------------------------------------------------- |
  | [flfg/gnfg](https://rsshub.app/samrdprc/flfg/gnfg) |
</details>


## 中国无线电协会业余无线电分会 <Site url="www.crac.org.cn"/>

### 最新资讯 <Site url="www.crac.org.cn" size="sm" />

<Route namespace="crac" :data='{"path":"/:type?","categories":["government"],"example":"/crac/2","parameters":{"type":"类型，见下表，默认为全部"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"最新资讯","maintainers":["Misaka13514"],"description":"| 新闻动态 | 通知公告 | 政策法规 | 常见问题 | 资料下载 | English | 业余中继台 | 科普专栏 |\n| -------- | -------- | -------- | -------- | -------- | ------- | ---------- | -------- |\n| 1        | 2        | 3        | 5        | 6        | 7       | 8          | 9        |","radar":[{"source":["www.crac.org.cn/News/*"]}],"location":"index.ts","heat":8,"topFeeds":[{"id":"83759460466149376","type":"feed","url":"rsshub://crac/2","title":"通知公告-中国无线电协会业余无线电分会","description":"通知公告-中国无线电协会业余无线电分会 - Powered by RSSHub","image":null},{"id":"82679004863584256","type":"feed","url":"rsshub://crac/8","title":"业余中继台-中国无线电协会业余无线电分会","description":"业余中继台-中国无线电协会业余无线电分会 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 新闻动态 | 通知公告 | 政策法规 | 常见问题 | 资料下载 | English | 业余中继台 | 科普专栏 |
| -------- | -------- | -------- | -------- | -------- | ------- | ---------- | -------- |
| 1        | 2        | 3        | 5        | 6        | 7       | 8          | 9        |

### 考试信息 <Site url="www.crac.org.cn" size="sm" />

<Route namespace="crac" :data='{"path":"/exam","categories":["government"],"example":"/crac/exam","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"考试信息","maintainers":["admxj"],"radar":[{"source":["www.crac.org.cn/*"],"target":"/exam"}],"location":"exam.ts","heat":4,"topFeeds":[{"id":"138468429736494080","type":"feed","url":"rsshub://crac/exam","title":"考试信息-中国无线电协会业余无线电分会","description":"考试信息-中国无线电协会业余无线电分会 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

## 国家药品审评网站 <Site url="www.cde.org.cn"/>

### 首页 <Site url="www.cde.org.cn" size="sm" />

<Route namespace="cde" :data='{"path":"/:channel/:category","categories":["government"],"example":"/cde/news/gzdt","parameters":{"channel":"频道","category":"类别"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"首页","maintainers":["Fatpandac"],"description":"-   频道\n\n| 新闻中心 | 政策法规 |\n| :------: | :------: |\n|   news   |  policy  |\n\n  -   类别\n\n| 新闻中心 | 政务新闻 | 要闻导读 | 图片新闻 | 工作动态 |\n| :------: | :------: | :------: | :------: | :------: |\n|          |   zwxw   |   ywdd   |   tpxw   |   gzdt   |\n\n| 政策法规 | 法律法规 | 中心规章 |\n| :------: | :------: | :------: |\n|          |   flfg   |   zxgz   |","location":"index.ts","heat":6,"topFeeds":[{"id":"189505746675782660","type":"feed","url":"rsshub://cde/policy/flfg","title":"Importing","description":null,"image":null},{"id":"189505746675782656","type":"feed","url":"rsshub://cde/news/gzdt","title":"Importing","description":null,"image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

-   频道

| 新闻中心 | 政策法规 |
| :------: | :------: |
|   news   |  policy  |

  -   类别

| 新闻中心 | 政务新闻 | 要闻导读 | 图片新闻 | 工作动态 |
| :------: | :------: | :------: | :------: | :------: |
|          |   zwxw   |   ywdd   |   tpxw   |   gzdt   |

| 政策法规 | 法律法规 | 中心规章 |
| :------: | :------: | :------: |
|          |   flfg   |   zxgz   |

### 指导原则专栏 <Site url="www.cde.org.cn" size="sm" />

<Route namespace="cde" :data='{"path":"/zdyz/:category","categories":["government"],"example":"/cde/zdyz/domesticGuide","parameters":{"category":"类别，见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"指导原则专栏","maintainers":["TonyRL"],"description":"|    发布通告   |   征求意见  |\n| :-----------: | :---------: |\n| domesticGuide | opinionList |","location":"zdyz.ts","heat":3,"topFeeds":[{"id":"189505746675782662","type":"feed","url":"rsshub://cde/zdyz/domesticGuide","title":"Importing","description":null,"image":null},{"id":"189505746675782663","type":"feed","url":"rsshub://cde/zdyz/opinionList","title":"Importing","description":null,"image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

|    发布通告   |   征求意见  |
| :-----------: | :---------: |
| domesticGuide | opinionList |

### 信息公开 <Site url="www.cde.org.cn" size="sm" />

<Route namespace="cde" :data='{"path":"/xxgk/:category","categories":["government"],"example":"/cde/xxgk/priorityApproval","parameters":{"category":"类别，见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"信息公开","maintainers":["TonyRL"],"description":"|   优先审评公示   |  突破性治疗公示  | 临床试验默示许可 |\n| :--------------: | :--------------: | :--------------: |\n| priorityApproval | breakthroughCure |     cliniCal     |","location":"xxgk.ts","heat":1,"topFeeds":[{"id":"189505746675782661","type":"feed","url":"rsshub://cde/xxgk/priorityApproval","title":"Importing","description":null,"image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

|   优先审评公示   |  突破性治疗公示  | 临床试验默示许可 |
| :--------------: | :--------------: | :--------------: |
| priorityApproval | breakthroughCure |     cliniCal     |

## 中国科学技术协会 <Site url="cast.org.cn"/>

### 通用 <Site url="cast.org.cn" size="sm" />

<Route namespace="cast" :data='{"path":"/:column/:subColumn/:category?","categories":["government"],"example":"/cast/xw/tzgg/ZH","parameters":{"column":"栏目编号，见下表","subColumn":"二级栏目编号","category":"分类"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["cast.org.cn/:column/:subColumn/:category/index.html","cast.org.cn/:column/:subColumn/index.html"],"target":"/:column/:subColumn/:category?"}],"name":"通用","maintainers":["KarasuShin","TonyRL"],"description":"::: tip\n  在路由末尾处加上 `?limit=限制获取数目` 来限制获取条目数量，默认值为`10`\n:::\n\n| 分类     | 编码 |\n| -------- | ---- |\n| 全景科协 | qjkx |\n| 智库     | zk   |\n| 学术     | xs   |\n| 科普     | kp   |\n| 党建     | dj   |\n| 数据     | sj   |\n| 新闻     | xw   |","location":"index.ts","heat":9,"topFeeds":[{"id":"61596470433482760","type":"feed","url":"rsshub://cast/xw/tzgg/ZH","title":"综合","description":"综合 - Powered by RSSHub","image":"https://www.cast.org.cn/favicon.ico"}]}' :test='{"code":0}' />

::: tip
  在路由末尾处加上 `?limit=限制获取数目` 来限制获取条目数量，默认值为`10`
:::

| 分类     | 编码 |
| -------- | ---- |
| 全景科协 | qjkx |
| 智库     | zk   |
| 学术     | xs   |
| 科普     | kp   |
| 党建     | dj   |
| 数据     | sj   |
| 新闻     | xw   |

## 北京无线电协会 <Site url="www.bjwxdxh.org.cn"/>

### 最新资讯 <Site url="www.bjwxdxh.org.cn" size="sm" />

<Route namespace="bjwxdxh" :data='{"path":"/:type?","categories":["government"],"example":"/bjwxdxh/114","parameters":{"type":"类型，见下表，默认为全部"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"最新资讯","maintainers":["Misaka13514"],"description":"| 协会活动 | 公告通知 | 会议情况 | 简报 | 政策法规 | 学习园地 | 业余无线电服务中心 | 经验交流 | 新技术推介 | 活动通知 | 爱好者园地 | 结果查询 | 资料下载 | 会员之家 | 会员简介 | 会员风采 | 活动报道 |\n| -------- | -------- | -------- | ---- | -------- | -------- | ------------------ | -------- | ---------- | -------- | ---------- | -------- | -------- | -------- | -------- | -------- | -------- |\n| 86       | 99       | 102      | 103  | 106      | 107      | 108                | 111      | 112        | 114      | 115        | 116      | 118      | 119      | 120      | 121      | 122      |","location":"index.ts","heat":7,"topFeeds":[{"id":"69199898802467840","type":"feed","url":"rsshub://bjwxdxh/114","title":"-业余无线电服务中心-活动通知-北京无线电协会","description":"-业余无线电服务中心-活动通知-北京无线电协会 - Powered by RSSHub","image":null},{"id":"89277528518615040","type":"feed","url":"rsshub://bjwxdxh/99","title":"-公告通知-北京无线电协会","description":"-公告通知-北京无线电协会 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 协会活动 | 公告通知 | 会议情况 | 简报 | 政策法规 | 学习园地 | 业余无线电服务中心 | 经验交流 | 新技术推介 | 活动通知 | 爱好者园地 | 结果查询 | 资料下载 | 会员之家 | 会员简介 | 会员风采 | 活动报道 |
| -------- | -------- | -------- | ---- | -------- | -------- | ------------------ | -------- | ---------- | -------- | ---------- | -------- | -------- | -------- | -------- | -------- | -------- |
| 86       | 99       | 102      | 103  | 106      | 107      | 108                | 111      | 112        | 114      | 115        | 116      | 118      | 119      | 120      | 121      | 122      |

## 中国科学学与科技政策研究会 <Site url="casssp.org.cn"/>

### 研究会动态 <Site url="casssp.org.cn" size="sm" />

<Route namespace="casssp" :data='{"path":"/news/:category?","categories":["government"],"example":"/casssp/news/3","parameters":{"category":"分类，见下表，默认为通知公告"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"研究会动态","maintainers":["nczitzk"],"description":"| 通知公告 | 新闻动态 | 信息公开 | 时政要闻 |\n| -------- | -------- | -------- | -------- |\n| 3        | 2        | 92       | 93       |","location":"news.ts","heat":6,"topFeeds":[{"id":"72252117071751168","type":"feed","url":"rsshub://casssp/news/3","title":"通知公告_中国科学学与科技政策研究会-中国科技智库论坛-全球科技论坛研究-Innovation and Development Policy","description":"研究会动态_中国科学学与科技政策研究会-中国科技智库论坛-全球科技论坛研究-Innovation and Development Policy - Powered by RSSHub","image":"https://omo-oss-image.thefastimg.com/portal-saas/new2023070812263819729/cms/image/edee1b0f-7d7b-495f-aa52-8e58f483d35b.png"}]}' :test='{"code":1,"message":"AssertionError: expected NaN to be greater than -432000000\n    at checkDate (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:35:46)\n    at checkRSS (/home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:61:13)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:80:17\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 通知公告 | 新闻动态 | 信息公开 | 时政要闻 |
| -------- | -------- | -------- | -------- |
| 3        | 2        | 92       | 93       |

## 德阳人事考试网 <Site url="www.dykszx.com"/>

德阳人事考试网

### 考试新闻发布 <Site url="www.dykszx.com" size="sm" />

<Route namespace="dykszx" :data='{"path":"/news/:newsType?","categories":["government"],"example":"/dykszx/news","parameters":{"newsType":"考试类型。默认新闻中心(all)"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.dykszx.com/"],"target":"/news/all"}],"name":"考试新闻发布","maintainers":["zytomorrow"],"url":"www.dykszx.com","description":"| 新闻中心 | 公务员考试 | 事业单位 | （职）业资格、职称考试 | 其他 |\n| :------: | :------: | :------: |:------: |:------: |\n|   all   |   gwy   |  sydw | zyzc  | other |","location":"news.ts","heat":6,"topFeeds":[{"id":"61102289930311680","type":"feed","url":"rsshub://dykszx/news","title":"考试新闻发布(新闻中心)","description":"德阳人事考试网 考试新闻发布 (新闻中心) - Powered by RSSHub","image":null},{"id":"161654225832322048","type":"feed","url":"rsshub://dykszx/news/gwy","title":"考试新闻发布(公务员考试)","description":"德阳人事考试网 考试新闻发布 (公务员考试) - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 新闻中心 | 公务员考试 | 事业单位 | （职）业资格、职称考试 | 其他 |
| :------: | :------: | :------: |:------: |:------: |
|   all   |   gwy   |  sydw | zyzc  | other |

## 中国军网 <Site url="81.cn"/>

### 中国人民解放军专业技术人才网 <Site url="81rc.81.cn" size="sm" />

<Route namespace="81" :data='{"path":"/81rc/:category{.+}?","name":"中国人民解放军专业技术人才网","url":"81rc.81.cn","maintainers":["nczitzk"],"example":"/81/81rc/sy/gzdt_210283","parameters":{"category":"分类，默认为 `sy/gzdt_210283`，即工作动态，可在对应分类页 URL 中找到"},"description":"::: tip\n  若订阅 [工作动态](https://81rc.81.cn/sy/gzdt_210283)，网址为 `https://81rc.81.cn/sy/gzdt_210283`。截取 `https://81rc.81.cn/` 到末尾的部分 `sy/gzdt_210283` 作为参数填入，此时路由为 [`/81/81rc/sy/gzdt_210283`](https://rsshub.app/81/81rc/sy/gzdt_210283)。\n:::\n  ","categories":["government"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["81rc.81.cn/:category"]}],"location":"81rc/index.ts","heat":4,"topFeeds":[{"id":"119419273712365568","type":"feed","url":"rsshub://81/81rc/wzry/jwjgbmhddwzkdt","title":"中国人民解放军专业技术人才网-文职人员","description":"欢迎来到军队人才网！ - Powered by RSSHub","image":"https://81rc.81.cn/template/tenant207/t582/new.jpg"},{"id":"70682485663234048","type":"feed","url":"rsshub://81/81rc/sy/gzdt_210283","title":"工作动态 - 军队人才网","description":"欢迎来到军队人才网！ - Powered by RSSHub","image":"https://81rc.81.cn/template/tenant207/t582/new.jpg"}]}' :test='{"code":0}' />

::: tip
  若订阅 [工作动态](https://81rc.81.cn/sy/gzdt_210283)，网址为 `https://81rc.81.cn/sy/gzdt_210283`。截取 `https://81rc.81.cn/` 到末尾的部分 `sy/gzdt_210283` 作为参数填入，此时路由为 [`/81/81rc/sy/gzdt_210283`](https://rsshub.app/81/81rc/sy/gzdt_210283)。
:::
  

## 北京社科网 <Site url="bjsk.org.cn"/>

### 基金项目管理平台 <Site url="keti.bjsk.org.cn/indexAction!to_index.action" size="sm" />

<Route namespace="bjsk" :data='{"path":"/keti/:id?","categories":["government"],"example":"/bjsk/keti","parameters":{"id":"分类 id，见下表，默认为通知公告"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["keti.bjsk.org.cn/indexAction!to_index.action","keti.bjsk.org.cn/"],"target":"/keti/:id"}],"name":"基金项目管理平台","maintainers":["nczitzk"],"url":"keti.bjsk.org.cn/indexAction!to_index.action","description":"| 通知公告                         | 资料下载                         |\n| -------------------------------- | -------------------------------- |\n| 402881027cbb8c6f017cbb8e17710002 | 2c908aee818e04f401818e08645c0002 |","location":"keti.ts","heat":3,"topFeeds":[{"id":"116470154564273152","type":"feed","url":"rsshub://bjsk/keti","title":"北京社科基金项目管理平台 - 通知公告","description":"北京社科基金项目管理平台 - 通知公告 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 通知公告                         | 资料下载                         |
| -------------------------------- | -------------------------------- |
| 402881027cbb8c6f017cbb8e17710002 | 2c908aee818e04f401818e08645c0002 |

### 通用 <Site url="bjsk.org.cn" size="sm" />

<Route namespace="bjsk" :data='{"path":"/:path?","categories":["government"],"example":"/bjsk/newslist-1394-1474-0","parameters":{"path":"路径，默认为 `newslist-1486-0-0`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"通用","maintainers":["TonyRL"],"description":"::: tip\n  路径处填写对应页面 URL 中 `https://www.bjsk.org.cn/` 和 `.html` 之间的字段。下面是一个例子。\n\n  若订阅 [社科资讯 > 社科要闻](https://www.bjsk.org.cn/newslist-1394-1474-0.html) 则将对应页面 URL `https://www.bjsk.org.cn/newslist-1394-1474-0.html` 中 `https://www.bjsk.org.cn/` 和 `.html` 之间的字段 `newslist-1394-1474-0` 作为路径填入。此时路由为 [`/bjsk/newslist-1394-1474-0`](https://rsshub.app/bjsk/newslist-1394-1474-0)\n:::","location":"index.ts","heat":1,"topFeeds":[{"id":"84143691704495104","type":"feed","url":"rsshub://bjsk/newslist-1394-1474-0","title":"北京社科网_社科资讯_社科要闻","description":"北京社科网_社科资讯_社科要闻 - Powered by RSSHub","image":"https://www.bjsk.org.cn/favicon.ico"}]}' :test='{"code":0}' />

::: tip
  路径处填写对应页面 URL 中 `https://www.bjsk.org.cn/` 和 `.html` 之间的字段。下面是一个例子。

  若订阅 [社科资讯 > 社科要闻](https://www.bjsk.org.cn/newslist-1394-1474-0.html) 则将对应页面 URL `https://www.bjsk.org.cn/newslist-1394-1474-0.html` 中 `https://www.bjsk.org.cn/` 和 `.html` 之间的字段 `newslist-1394-1474-0` 作为路径填入。此时路由为 [`/bjsk/newslist-1394-1474-0`](https://rsshub.app/bjsk/newslist-1394-1474-0)
:::

## 四川省人力资源和社会保障厅人事考试专栏 <Site url="www.scpta.com.cn"/>

### 通知公告 <Site url="www.scpta.com.cn" size="sm" />

<Route namespace="scpta" :data='{"path":"/news/:category","categories":["government"],"example":"/scpta/news/33","parameters":{"category":{"description":"分类ID，默认为`33`(工作动态)","default":"33"}},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.scpta.com.cn/front/News/List"],"target":"/news"}],"name":"通知公告","maintainers":["Yeye-0426"],"description":"| 分类                 | category_id |\n|----------------------|-------------|\n| 工作动态             | 33          |\n| 公务员考试           | 56          |\n| 专业技术人员资格考试 | 57          |\n| 事业单位考试         | 67          |\n| 其它                 | 72          |","location":"news.ts","heat":4,"topFeeds":[{"id":"178439059880655872","type":"feed","url":"rsshub://scpta/news/67","title":"通知公告 - 事业单位考试","description":"通知公告 - 事业单位考试 - Powered by RSSHub","image":null},{"id":"178439478979079168","type":"feed","url":"rsshub://scpta/news/33","title":"通知公告 - 工作动态","description":"通知公告 - 工作动态 - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| 分类                 | category_id |
|----------------------|-------------|
| 工作动态             | 33          |
| 公务员考试           | 56          |
| 专业技术人员资格考试 | 57          |
| 事业单位考试         | 67          |
| 其它                 | 72          |

## UK Parliament <Site url="parliament.uk"/>

The UK Parliament has two Houses that work on behalf of UK citizens to check and challenge the work of Government, make and shape effective laws, and debate/make decisions on the big issues of the day.

### Commonlibrary <Site url="parliament.uk" size="sm" />

<Route namespace="parliament.uk" :data='{"path":"/commonslibrary/type/:topic?","categories":["government"],"example":"/parliament.uk/commonslibrary/type/research-briefing","parameters":{"topic":"research by topic, string, example: [research-briefing|data-dashboard]"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Commonlibrary","maintainers":["AntiKnot"],"location":"commonslibrary.ts","heat":3,"topFeeds":[{"id":"68554046044185600","type":"feed","url":"rsshub://parliament.uk/commonslibrary/type/research-briefing","title":"parliament - lordslibrary - research-briefing","description":"parliament - lordslibrary - research-briefing - Powered by RSSHub","image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### House of Lords Library <Site url="parliament.uk" size="sm" />

<Route namespace="parliament.uk" :data='{"path":"/lordslibrary/type/:topic?","categories":["government"],"example":"/parliament.uk/lordslibrary/type/research-briefing","parameters":{"topic":"research by topic, string, example: [research-briefing|buisness|economy]"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"House of Lords Library","maintainers":["AntiKnot"],"location":"lordslibrary.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

### Petitions <Site url="petition.parliament.uk" size="sm" />

<Route namespace="parliament.uk" :data='{"path":"/petitions/:state?","name":"Petitions","url":"petition.parliament.uk","maintainers":["nczitzk"],"example":"/parliament.uk/petitions/all","parameters":{"state":"State, `all` by default, see below"},"description":"::: tip\nIf you subscribe to [Recent petitions](https://petition.parliament.uk/petitions?state=recent)，where the URL is `https://petition.parliament.uk/petitions?state=recent`, use the value of `state` as the parameter to fill in. Therefore, the route will be [`/parliament.uk/petitions/recent`](https://rsshub.app/parliament.uk/petitions/recent).\n:::\n\n<details>\n<summary>More states</summary>\n\n| Name                            | ID                |\n| ------------------------------- | ----------------- |\n| All petitions                   | all               |\n| Open petitions                  | open              |\n| Recent petitions                | recent            |\n| Closed petitions                | closed            |\n| Rejected petitions              | rejected          |\n| Awaiting government response    | awaiting_response |\n| Government responses            | with_response     |\n| Awaiting a debate in Parliament | awaiting_debate   |\n| Debated in Parliament           | debated           |\n| Not debated in Parliament       | not_debated       |\n\n</details>\n    ","categories":["government"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["petition.parliament.uk/petitions"]},{"title":"All petitions","source":["petition.parliament.uk/petitions"],"target":"/petitions/all"},{"title":"Open petitions","source":["petition.parliament.uk/petitions"],"target":"/petitions/open"},{"title":"Recent petitions","source":["petition.parliament.uk/petitions"],"target":"/petitions/recent"},{"title":"Closed petitions","source":["petition.parliament.uk/petitions"],"target":"/petitions/closed"},{"title":"Rejected petitions","source":["petition.parliament.uk/petitions"],"target":"/petitions/rejected"},{"title":"Awaiting government response","source":["petition.parliament.uk/petitions"],"target":"/petitions/awaiting_response"},{"title":"Government responses","source":["petition.parliament.uk/petitions"],"target":"/petitions/with_response"},{"title":"Awaiting a debate in Parliament","source":["petition.parliament.uk/petitions"],"target":"/petitions/awaiting_debate"},{"title":"Debated in Parliament","source":["petition.parliament.uk/petitions"],"target":"/petitions/debated"},{"title":"Not debated in Parliament","source":["petition.parliament.uk/petitions"],"target":"/petitions/not_debated"}],"view":0,"location":"petitions.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

::: tip
If you subscribe to [Recent petitions](https://petition.parliament.uk/petitions?state=recent)，where the URL is `https://petition.parliament.uk/petitions?state=recent`, use the value of `state` as the parameter to fill in. Therefore, the route will be [`/parliament.uk/petitions/recent`](https://rsshub.app/parliament.uk/petitions/recent).
:::

<details>
<summary>More states</summary>

| Name                            | ID                |
| ------------------------------- | ----------------- |
| All petitions                   | all               |
| Open petitions                  | open              |
| Recent petitions                | recent            |
| Closed petitions                | closed            |
| Rejected petitions              | rejected          |
| Awaiting government response    | awaiting_response |
| Government responses            | with_response     |
| Awaiting a debate in Parliament | awaiting_debate   |
| Debated in Parliament           | debated           |
| Not debated in Parliament       | not_debated       |

</details>
    

## 中国无机盐工业协会 <Site url="www.cisia.org"/>

### 栏目 <Site url="www.cisia.org" size="sm" />

<Route namespace="cisia" :data='{"path":"/:id?","name":"栏目","url":"www.cisia.org","maintainers":["nczitzk"],"example":"/cisia/9","parameters":{"id":"栏目 id，默认为 `9`，即协会动态，可在对应分类页 URL 中找到"},"description":"::: tip\n  若订阅 [市场信息](http://www.cisia.org/site/term/12.html)，网址为 `http://www.cisia.org/site/term/12.html`。截取 `https://www.cisia.org/site/term/` 到末尾 `.html` 的部分 `12` 作为参数填入，此时路由为 [`/cisia/12`](https://rsshub.app/cisia/12)。\n:::\n\n<details>\n<summary>更多分类</summary>\n\n#### [分支机构信息](http://www.cisia.org/site/term/14.html)\n\n| [企业动态](http://www.cisia.org/site/term/17.html) | [产品展示](http://www.cisia.org/site/term/18.html) |\n| -------------------------------------------------- | -------------------------------------------------- |\n| [17](https://rsshub.app/cisia/17)                  | [18](https://rsshub.app/cisia/18)                  |\n\n#### [新闻中心](http://www.cisia.org/site/term/8.html)\n\n| [协会动态](http://www.cisia.org/site/term/9.html) | [行业新闻](http://www.cisia.org/site/term/10.html) | [通知公告](http://www.cisia.org/site/term/11.html) | [市场信息](http://www.cisia.org/site/term/12.html) |\n| ------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |\n| [9](https://rsshub.app/cisia/9)                   | [10](https://rsshub.app/cisia/10)                  | [11](https://rsshub.app/cisia/11)                  | [12](https://rsshub.app/cisia/12)                  |\n\n#### [政策法规](http://www.cisia.org/site/term/19.html)\n\n| [宏观聚焦](http://www.cisia.org/site/term/20.html) | [技术园区](http://www.cisia.org/site/term/396.html) |\n| -------------------------------------------------- | --------------------------------------------------- |\n| [20](https://rsshub.app/cisia/20)                  | [396](https://rsshub.app/cisia/396)                 |\n\n#### [合作交流](http://www.cisia.org/site/term/22.html)\n\n| [国际交流](http://www.cisia.org/site/term/23.html) | [行业交流](http://www.cisia.org/site/term/24.html) | [企业调研](http://www.cisia.org/site/term/25.html) | [会展信息](http://www.cisia.org/site/term/84.html) | [宣传专题](http://www.cisia.org/site/term/430.html) |\n| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------- |\n| [23](https://rsshub.app/cisia/23)                  | [24](https://rsshub.app/cisia/24)                  | [25](https://rsshub.app/cisia/25)                  | [84](https://rsshub.app/cisia/84)                  | [430](https://rsshub.app/cisia/430)                 |\n\n#### [党建工作](http://www.cisia.org/site/term/26.html)\n\n| [党委文件](http://www.cisia.org/site/term/27.html) | [学习园地](http://www.cisia.org/site/term/28.html) | [两会专题](http://www.cisia.org/site/term/443.html) |\n| -------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------- |\n| [27](https://rsshub.app/cisia/27)                  | [28](https://rsshub.app/cisia/28)                  | [443](https://rsshub.app/cisia/443)                 |\n\n#### [网上服务平台](http://www.cisia.org/site/term/29.html)\n\n| [前沿科技](http://www.cisia.org/site/term/31.html) | [新材料新技术](http://www.cisia.org/site/term/133.html) | [文件共享](http://www.cisia.org/site/term/30.html) |\n| -------------------------------------------------- | ------------------------------------------------------- | -------------------------------------------------- |\n| [31](https://rsshub.app/cisia/31)                  | [133](https://rsshub.app/cisia/133)                     | [30](https://rsshub.app/cisia/30)                  |\n\n#### [会员社区](http://www.cisia.org/site/term/34.html)\n\n| [会员分布](http://www.cisia.org/site/term/35.html) | [会员风采](http://www.cisia.org/site/term/68.html) |\n| -------------------------------------------------- | -------------------------------------------------- |\n| [35](https://rsshub.app/cisia/35)                  | [68](https://rsshub.app/cisia/68)                  |\n\n</details>\n    ","categories":["government"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.cisia.org/site/term/:id"]},{"title":"分支机构信息 - 企业动态","source":["www.cisia.org/site/term/17.html"],"target":"/17"},{"title":"分支机构信息 - 产品展示","source":["www.cisia.org/site/term/18.html"],"target":"/18"},{"title":"新闻中心 - 协会动态","source":["www.cisia.org/site/term/9.html"],"target":"/9"},{"title":"新闻中心 - 行业新闻","source":["www.cisia.org/site/term/10.html"],"target":"/10"},{"title":"新闻中心 - 通知公告","source":["www.cisia.org/site/term/11.html"],"target":"/11"},{"title":"新闻中心 - 市场信息","source":["www.cisia.org/site/term/12.html"],"target":"/12"},{"title":"政策法规 - 宏观聚焦","source":["www.cisia.org/site/term/20.html"],"target":"/20"},{"title":"政策法规 - 技术园区","source":["www.cisia.org/site/term/396.html"],"target":"/396"},{"title":"合作交流 - 国际交流","source":["www.cisia.org/site/term/23.html"],"target":"/23"},{"title":"合作交流 - 行业交流","source":["www.cisia.org/site/term/24.html"],"target":"/24"},{"title":"合作交流 - 企业调研","source":["www.cisia.org/site/term/25.html"],"target":"/25"},{"title":"合作交流 - 会展信息","source":["www.cisia.org/site/term/84.html"],"target":"/84"},{"title":"合作交流 - 宣传专题","source":["www.cisia.org/site/term/430.html"],"target":"/430"},{"title":"党建工作 - 党委文件","source":["www.cisia.org/site/term/27.html"],"target":"/27"},{"title":"党建工作 - 学习园地","source":["www.cisia.org/site/term/28.html"],"target":"/28"},{"title":"党建工作 - 两会专题","source":["www.cisia.org/site/term/443.html"],"target":"/443"},{"title":"网上服务平台 - 前沿科技","source":["www.cisia.org/site/term/31.html"],"target":"/31"},{"title":"网上服务平台 - 新材料新技术","source":["www.cisia.org/site/term/133.html"],"target":"/133"},{"title":"网上服务平台 - 文件共享","source":["www.cisia.org/site/term/30.html"],"target":"/30"},{"title":"会员社区 - 会员分布","source":["www.cisia.org/site/term/35.html"],"target":"/35"},{"title":"会员社区 - 会员风采","source":["www.cisia.org/site/term/68.html"],"target":"/68"}],"location":"index.ts","heat":2,"topFeeds":[{"id":"69228632392733696","type":"feed","url":"rsshub://cisia/9","title":"协会动态_中国无机盐工业协会","description":"中国无机盐工业协会 - Powered by RSSHub","image":"http://www.cisia.org/upload/5cd12fa85fd9d.png"}]}' :test='{"code":0}' />

::: tip
  若订阅 [市场信息](http://www.cisia.org/site/term/12.html)，网址为 `http://www.cisia.org/site/term/12.html`。截取 `https://www.cisia.org/site/term/` 到末尾 `.html` 的部分 `12` 作为参数填入，此时路由为 [`/cisia/12`](https://rsshub.app/cisia/12)。
:::

<details>
<summary>更多分类</summary>

#### [分支机构信息](http://www.cisia.org/site/term/14.html)

| [企业动态](http://www.cisia.org/site/term/17.html) | [产品展示](http://www.cisia.org/site/term/18.html) |
| -------------------------------------------------- | -------------------------------------------------- |
| [17](https://rsshub.app/cisia/17)                  | [18](https://rsshub.app/cisia/18)                  |

#### [新闻中心](http://www.cisia.org/site/term/8.html)

| [协会动态](http://www.cisia.org/site/term/9.html) | [行业新闻](http://www.cisia.org/site/term/10.html) | [通知公告](http://www.cisia.org/site/term/11.html) | [市场信息](http://www.cisia.org/site/term/12.html) |
| ------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| [9](https://rsshub.app/cisia/9)                   | [10](https://rsshub.app/cisia/10)                  | [11](https://rsshub.app/cisia/11)                  | [12](https://rsshub.app/cisia/12)                  |

#### [政策法规](http://www.cisia.org/site/term/19.html)

| [宏观聚焦](http://www.cisia.org/site/term/20.html) | [技术园区](http://www.cisia.org/site/term/396.html) |
| -------------------------------------------------- | --------------------------------------------------- |
| [20](https://rsshub.app/cisia/20)                  | [396](https://rsshub.app/cisia/396)                 |

#### [合作交流](http://www.cisia.org/site/term/22.html)

| [国际交流](http://www.cisia.org/site/term/23.html) | [行业交流](http://www.cisia.org/site/term/24.html) | [企业调研](http://www.cisia.org/site/term/25.html) | [会展信息](http://www.cisia.org/site/term/84.html) | [宣传专题](http://www.cisia.org/site/term/430.html) |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------- |
| [23](https://rsshub.app/cisia/23)                  | [24](https://rsshub.app/cisia/24)                  | [25](https://rsshub.app/cisia/25)                  | [84](https://rsshub.app/cisia/84)                  | [430](https://rsshub.app/cisia/430)                 |

#### [党建工作](http://www.cisia.org/site/term/26.html)

| [党委文件](http://www.cisia.org/site/term/27.html) | [学习园地](http://www.cisia.org/site/term/28.html) | [两会专题](http://www.cisia.org/site/term/443.html) |
| -------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------- |
| [27](https://rsshub.app/cisia/27)                  | [28](https://rsshub.app/cisia/28)                  | [443](https://rsshub.app/cisia/443)                 |

#### [网上服务平台](http://www.cisia.org/site/term/29.html)

| [前沿科技](http://www.cisia.org/site/term/31.html) | [新材料新技术](http://www.cisia.org/site/term/133.html) | [文件共享](http://www.cisia.org/site/term/30.html) |
| -------------------------------------------------- | ------------------------------------------------------- | -------------------------------------------------- |
| [31](https://rsshub.app/cisia/31)                  | [133](https://rsshub.app/cisia/133)                     | [30](https://rsshub.app/cisia/30)                  |

#### [会员社区](http://www.cisia.org/site/term/34.html)

| [会员分布](http://www.cisia.org/site/term/35.html) | [会员风采](http://www.cisia.org/site/term/68.html) |
| -------------------------------------------------- | -------------------------------------------------- |
| [35](https://rsshub.app/cisia/35)                  | [68](https://rsshub.app/cisia/68)                  |

</details>
    

## JapanGov <Site url="go.jp"/>

The Government of Japan

### PDF <Site url="www.mhlw.go.jp" size="sm" />

<Route namespace="go" :data='{"path":"/mhlw/pdf/:category{.+}?","name":"PDF","url":"www.mhlw.go.jp","maintainers":["nczitzk"],"example":"/go/mhlw/pdf/stf/seisakunitsuite/bunya/houkokusuunosuii","parameters":{"category":"Category, `stf/seisakunitsuite/bunya/houkokusuunosuii` as 新型コロナウイルス感染症の定点当たり報告数の推移 by default"},"description":"::: tip\n  Subscribing to this route will give you access to all PDF files on this page.\n\n  If you subscribe to [新型コロナウイルス感染症の定点当たり報告数の推移](https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/houkokusuunosuii.html)，where the URL is `https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/houkokusuunosuii.html`, extract the part `https://www.mhlw.go.jp/` to the end, which is `.html`, and use it as the parameter to fill in. Therefore, the route will be [`/go/mhlw/stf/seisakunitsuite/bunya/houkokusuunosuii`](https://rsshub.app/go/mhlw/stf/seisakunitsuite/bunya/houkokusuunosuii).\n:::\n  ","categories":["government"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.mhlw.go.jp"]}],"location":"mhlw/pdf.ts","heat":2,"topFeeds":[{"id":"60617622962418688","type":"feed","url":"rsshub://go/mhlw/pdf/stf/seisakunitsuite/bunya/houkokusuunosuii","title":"新型コロナウイルス感染症の定点当たり報告数の推移｜厚生労働省","description":"新型コロナウイルス感染症の定点当たり報告数の推移を掲載しています。 - Powered by RSSHub","image":"https://www.mhlw.go.jp/content/000269503.png"}]}' :test='{"code":0}' />

::: tip
  Subscribing to this route will give you access to all PDF files on this page.

  If you subscribe to [新型コロナウイルス感染症の定点当たり報告数の推移](https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/houkokusuunosuii.html)，where the URL is `https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/houkokusuunosuii.html`, extract the part `https://www.mhlw.go.jp/` to the end, which is `.html`, and use it as the parameter to fill in. Therefore, the route will be [`/go/mhlw/stf/seisakunitsuite/bunya/houkokusuunosuii`](https://rsshub.app/go/mhlw/stf/seisakunitsuite/bunya/houkokusuunosuii).
:::
  

### 感染症発生動向調査週報 <Site url="id-info.jihs.go.jp" size="sm" />

<Route namespace="go" :data='{"path":"/jihs/idwr/:year?","name":"感染症発生動向調査週報","url":"id-info.jihs.go.jp","maintainers":["nczitzk"],"example":"/go/jihs/idwr/2025","parameters":{"year":{"description":"Year, current year by default"}},"description":"::: tip\nTo subscribe to [感染症発生動向調査週報](https://id-info.jihs.go.jp/surveillance/idwr/jp/idwr/2025/), where the source URL is `https://id-info.jihs.go.jp/surveillance/idwr/jp/idwr/2025/`, extract the certain parts from this URL to be used as parameters, resulting in the route as [`/go/jihs/idwr/2025`](https://rsshub.app/go/jihs/idwr/2025).\n:::","categories":["government"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["id-info.jihs.go.jp/surveillance/idwr/jp/idwr/:year"]}],"view":0,"zh":{"path":"/jihs/idwr/:year?","name":"传染病发生动向调查周报","url":"id-info.jihs.go.jp","maintainers":["nczitzk"],"example":"/go/jihs/idwr/2025","parameters":{"year":{"description":"年份，默认为当前年份，可在对应页 URL 中找到"}},"description":"::: tip\n若订阅 [传染病发生动向调查周报](https://id-info.jihs.go.jp/surveillance/idwr/jp/idwr/2025/)，网址为 `https://id-info.jihs.go.jp/surveillance/idwr/jp/idwr/2025/`，请截取 `https://id-info.jihs.go.jp/surveillance/idwr/jp/idwr/` 到末尾 `/` 的部分 `2025` 作为 `year` 参数填入，此时目标路由为 [`/go/jihs/idwr/2025`](https://rsshub.app/go/jihs/idwr/2025)。\n:::\n"},"location":"jihs/idwr.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

::: tip
To subscribe to [感染症発生動向調査週報](https://id-info.jihs.go.jp/surveillance/idwr/jp/idwr/2025/), where the source URL is `https://id-info.jihs.go.jp/surveillance/idwr/jp/idwr/2025/`, extract the certain parts from this URL to be used as parameters, resulting in the route as [`/go/jihs/idwr/2025`](https://rsshub.app/go/jihs/idwr/2025).
:::

## 深圳市医疗器械行业协会 <Site url="www.samd.org.cn"/>

### 资讯信息 <Site url="www.samd.org.cn" size="sm" />

<Route namespace="samd" :data='{"path":"/news/:typeId","categories":["government"],"example":"/samd/news/440","parameters":{"type":"文章类型ID，见下表"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"description":"| 行业资讯 | 协会动态 | 重要通知 | 政策法规 |\n| --- | --- | --- | --- |\n| 434 | 436 | 438 | 440 |","name":"资讯信息","maintainers":["hualiong"],"location":"news.ts","heat":2,"topFeeds":[{"id":"85223407629952000","type":"feed","url":"rsshub://samd/news/440","title":"政策法规 - 深圳市医疗器械行业协会","description":"政策法规 - 深圳市医疗器械行业协会 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 行业资讯 | 协会动态 | 重要通知 | 政策法规 |
| --- | --- | --- | --- |
| 434 | 436 | 438 | 440 |

## 上海业余无线电协会 <Site url="www.sara.org.cn"/>

### 新闻资讯 <Site url="www.sara.org.cn" size="sm" />

<Route namespace="sara" :data='{"path":"/:type","categories":["government"],"example":"/sara/announcement","parameters":{"type":"dynamic | announcement | industry"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"description":"| 协会动态 | 通知公告 |行业动态 |\n| -------- | ------------ | -------- |\n| dynamic | announcement | industry |","name":"新闻资讯","maintainers":["HChenZi"],"location":"index.ts","heat":2,"topFeeds":[{"id":"63520367990283267","type":"feed","url":"rsshub://sara/announcement","title":"通知公告","description":"通知公告 - Powered by RSSHub","image":null}]}' :test='{"code":0}' />

| 协会动态 | 通知公告 |行业动态 |
| -------- | ------------ | -------- |
| dynamic | announcement | industry |

## Hong Kong Department of Health 香港卫生署 <Site url="dh.gov.hk"/>

### Press Release <Site url="dh.gov.hk/" size="sm" />

<Route namespace="hongkong" :data='{"path":"/dh/:language?","categories":["government"],"example":"/hongkong/dh","parameters":{"language":"Language, see below, tc_chi by default"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["dh.gov.hk/"]}],"name":"Press Release","maintainers":["nczitzk"],"url":"dh.gov.hk/","description":"Language\n\n| English | 中文简体 | 中文繁體 |\n| ------- | -------- | -------- |\n| english | chs      | tc_chi  |","location":"dh.ts","heat":1,"topFeeds":[{"id":"159537064166595584","type":"feed","url":"rsshub://hongkong/dh","title":"Importing","description":null,"image":null}]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

Language

| English | 中文简体 | 中文繁體 |
| ------- | -------- | -------- |
| english | chs      | tc_chi  |

### Unknown <Site url="dh.gov.hk/" size="sm" />

<Route namespace="hongkong" :data='{"path":"/chp/:category?/:language?","radar":[{"source":["dh.gov.hk/"]}],"name":"Unknown","maintainers":["nczitzk"],"url":"dh.gov.hk/","location":"chp.ts","heat":0,"topFeeds":[]}' :test='undefined' />

## Macau Independent Commission Against Corruption 澳门廉政公署 <Site url="ccac.org.mo"/>

### Latest News <Site url="ccac.org.mo" size="sm" />

<Route namespace="ccac" :data='{"path":"/news/:type/:lang?","categories":["government"],"example":"/ccac/news/all","parameters":{"type":"Category","lang":"Language, default to `sc`. Supprot `en`(English), `sc`(Simplified Chinese), `tc`(Traditional Chinese) and `pt`(Portuguese)"},"features":{"requireConfig":false,"requirePuppeteer":true,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Latest News","maintainers":["linbuxiao"],"description":"Category\n\n| All | Detected Cases | Investigation Reports or Recommendations | Annual Reports | CCAC&#39;s Updates |\n| --- | -------------- | ---------------------------------------- | -------------- | -------------- |\n| all | case           | Persuasion                               | AnnualReport   | PCANews        |","location":"news.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

Category

| All | Detected Cases | Investigation Reports or Recommendations | Annual Reports | CCAC's Updates |
| --- | -------------- | ---------------------------------------- | -------------- | -------------- |
| all | case           | Persuasion                               | AnnualReport   | PCANews        |

## 中国食品土畜进出口商会 <Site url="www.cccfna.org.cn"/>

### 资讯信息 <Site url="www.cccfna.org.cn" size="sm" />

<Route namespace="cccfna" :data='{"path":"/:category/:type?","categories":["government"],"example":"/cccfna/meirigengxin","parameters":{"category":"文章种类，即一级分类，详情见下表","type":"文章类型，即二级分类，详情见下表"},"radar":[{"source":["www.cccfna.org.cn/:category/:type?"]}],"description":"\n::: tip\n存在**二级分类**的**一级分类**不能单独当作参数，如：`/cccfna/hangyezixun`\n:::\n\n文章的目录分级如下:\n\n- shanghuidongtai（商会通知）\n- meirigengxin（每日更新）\n- tongzhigonggao（通知公告）\n- hangyezixun（行业资讯）\n  - zhengcedaohang（政策导航）\n  - yujinxinxi（预警信息）\n  - shichangdongtai（市场动态）\n  - gongxuxinxi（供需信息）\n- maoyitongji（贸易统计）\n  - tongjikuaibao（统计快报）\n  - hangyetongji（行业统计）\n  - guobiemaoyi（国别贸易）\n  - maoyizhinan（贸易指南）\n- nongchanpinbaogao（农产品报告）\n  - nongchanpinyuebao（农产品月报）\n  - zhongdianchanpinyuebao（重点产品月报）\n  - zhongdianchanpinzoushi（重点产品走势）","name":"资讯信息","maintainers":["hualiong"],"location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />


::: tip
存在**二级分类**的**一级分类**不能单独当作参数，如：`/cccfna/hangyezixun`
:::

文章的目录分级如下:

- shanghuidongtai（商会通知）
- meirigengxin（每日更新）
- tongzhigonggao（通知公告）
- hangyezixun（行业资讯）
  - zhengcedaohang（政策导航）
  - yujinxinxi（预警信息）
  - shichangdongtai（市场动态）
  - gongxuxinxi（供需信息）
- maoyitongji（贸易统计）
  - tongjikuaibao（统计快报）
  - hangyetongji（行业统计）
  - guobiemaoyi（国别贸易）
  - maoyizhinan（贸易指南）
- nongchanpinbaogao（农产品报告）
  - nongchanpinyuebao（农产品月报）
  - zhongdianchanpinyuebao（重点产品月报）
  - zhongdianchanpinzoushi（重点产品走势）

## 台湾行政院消费者保护会 <Site url="cpc.ey.gov.tw"/>

### 消费资讯 <Site url="cpc.ey.gov.tw" size="sm" />

<Route namespace="cpcey" :data='{"path":"/:type?","categories":["government"],"example":"/cpcey/xwg","parameters":{"type":"默认为 `xwg`"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"消费资讯","maintainers":["Fatpandac"],"description":"| 新闻稿 | 消费资讯 |\n| :----: | :------: |\n|   xwg  |   xfzx   |","location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

| 新闻稿 | 消费资讯 |
| :----: | :------: |
|   xwg  |   xfzx   |

## Thailand Department of Lands <Site url="announce.dol.go.th"/>

### e-LandsAnnouncement <Site url="announce.dol.go.th" size="sm" />

<Route namespace="dol" :data='{"path":"/announce/:owner?/:province?/:office?","categories":["government"],"example":"/dol/announce","parameters":{"owner":"Requester/former land owner","province":"Province which the land is belongs to","office":"DOL office name which the land is belongs to (สำนักงานที่ดิน(กรุงเทพมหานคร|จังหวัด*) [สาขา*])"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"e-LandsAnnouncement","maintainers":["itpcc"],"location":"announce.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## Prime Minister of Canada <Site url="pm.gc.ca"/>

### News <Site url="pm.gc.ca" size="sm" />

<Route namespace="gc.ca" :data='{"path":"/pm/:language?","categories":["government"],"example":"/gc.ca/pm/en","parameters":{"language":"Language (en or fr)"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["pm.gc.ca","pm.gc.ca/:language","pm.gc.ca/:language/news","pm.gc.ca/:language/nouvelles"],"target":"/pm/:language"}],"name":"News","maintainers":["elibroftw"],"location":"pm-news.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## Hong Kong Independent Commission Against Corruption 香港廉政公署 <Site url="icac.org.hk"/>

### Press Releases <Site url="icac.org.hk" size="sm" />

<Route namespace="icac" :data='{"path":"/news/:lang?","categories":["government"],"example":"/icac/news/sc","parameters":{"lang":"Language, default to `sc`. Supprot `en`(English), `sc`(Simplified Chinese) and `tc`(Traditional Chinese)"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["icac.org.hk/:lang/press/index.html"],"target":"/news/:lang"}],"name":"Press Releases","maintainers":["linbuxiao, TonyRL"],"location":"news.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 台灣衛生福利部 <Site url="mohw.gov.tw"/>

### 即時新聞澄清 <Site url="mohw.gov.tw/" size="sm" />

<Route namespace="mohw" :data='{"path":"/clarification","categories":["government"],"example":"/mohw/clarification","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["mohw.gov.tw/"]}],"name":"即時新聞澄清","maintainers":["nczitzk"],"url":"mohw.gov.tw/","location":"clarification.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## 南京鼓楼医院 <Site url="njglyy.com"/>

### 员工版教育培训 <Site url="njglyy.com/ygb/jypx/jypx.aspx" size="sm" />

<Route namespace="njglyy" :data='{"path":"/ygbjypx","categories":["government"],"example":"/njglyy/ygbjypx","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["njglyy.com/ygb/jypx/jypx.aspx","njglyy.com/"]}],"name":"员工版教育培训","maintainers":["real-jiakai"],"url":"njglyy.com/ygb/jypx/jypx.aspx","location":"ygbjypx.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"Error: STACK_TRACE_ERROR\n    at task (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:633:27)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:660:16)\n    at Object.<anonymous> (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:457:28)\n    at chain (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/chunk-tasks.js:9:14)\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:72:12\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:40\n    at runWithSuite (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1588:8)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:735:10)\n    at Object.collect (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:739:54)\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at collectTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1048:25)\n    at startTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:1556:17)\n    at run (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:85:25)\n    at runBaseTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/base.CiIV2DDC.js:153:2)\n    at executeTests (file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/vitest@4.0.9_@types+debug@4.1.12_@types+node@24.10.1_jiti@2.6.1_jsdom@27.2.0_bufferutil_002f86f9afd61b9f1491d1f858a86ec7/node_modules/vitest/dist/chunks/init-forks.aqTzCSR2.js:29:4)"}' />

## Oak Ridge National Laboratory <Site url="ornl.gov"/>

### All News <Site url="www.ornl.gov" size="sm" />

<Route namespace="ornl" :data='{"path":"/all-news","name":"All News","url":"www.ornl.gov","maintainers":["nczitzk"],"example":"/ornl/all-news","categories":["government"],"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportRadar":true,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.ornl.gov/all-news"],"target":"/all-news"}],"view":0,"location":"all-news.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## Thailand Parliament <Site url="parliament.go.th"/>

### Thailand Parliament Draft of Law's public hearing system <Site url="parliament.go.th" size="sm" />

<Route namespace="parliament" :data='{"path":"/section77/:type?","categories":["government"],"example":"/parliament/section77","parameters":{"type":"Type of hearing status, see below"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"name":"Thailand Parliament Draft of Law&#39;s public hearing system","maintainers":["itpcc"],"description":"| Presented by MP *       | Presented by People * | Hearing Ongoing     | Hearing ended   | Hearing result reported  | Waiting for PM approval | Assigned into the session | Processed  | PM Rejected   |\n| ------------------------ | ---------------------- | ------------------- | --------------- | ------------------------ | ----------------------- | ------------------------- | ---------- | ------------- |\n| presentbymp              | presentbyperson        | openwsu             | closewsu        | reportwsu                | substatus1              | substatus2                | substatus3 | closewsubypm  |\n| เสนอโดยสมาชิกสภาผู้แทนราษฏร | เสนอโดยประชาชน         | กำลังเปิดรับฟังความคิดเห็น | ปิดรับฟังความคิดเห็น | รายงานผลการรับฟังความคิดเห็น | รอคำรับรองจากนายกรัฐมนตรี   | บรรจุเข้าระเบียบวาระ         | พิจารณาแล้ว  | นายกฯ ไม่รับรอง |\n\n  *Note:* For `presentbymp` and `presentbyperson`, it can also add:\n\n  -   `-m` for the draft which Speaker of Parliament considered as a monetary draft (ประธานสภาผู้แทนราษฎรวินิจฉัยว่า เป็นร่างการเงิน), or\n  -   `-nm` for non-monetary one (ประธานสภาผู้แทนราษฎรวินิจฉัยว่า ไม่เป็นร่างการเงิน).","location":"section77.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

| Presented by MP *       | Presented by People * | Hearing Ongoing     | Hearing ended   | Hearing result reported  | Waiting for PM approval | Assigned into the session | Processed  | PM Rejected   |
| ------------------------ | ---------------------- | ------------------- | --------------- | ------------------------ | ----------------------- | ------------------------- | ---------- | ------------- |
| presentbymp              | presentbyperson        | openwsu             | closewsu        | reportwsu                | substatus1              | substatus2                | substatus3 | closewsubypm  |
| เสนอโดยสมาชิกสภาผู้แทนราษฏร | เสนอโดยประชาชน         | กำลังเปิดรับฟังความคิดเห็น | ปิดรับฟังความคิดเห็น | รายงานผลการรับฟังความคิดเห็น | รอคำรับรองจากนายกรัฐมนตรี   | บรรจุเข้าระเบียบวาระ         | พิจารณาแล้ว  | นายกฯ ไม่รับรอง |

  *Note:* For `presentbymp` and `presentbyperson`, it can also add:

  -   `-m` for the draft which Speaker of Parliament considered as a monetary draft (ประธานสภาผู้แทนราษฎรวินิจฉัยว่า เป็นร่างการเงิน), or
  -   `-nm` for non-monetary one (ประธานสภาผู้แทนราษฎรวินิจฉัยว่า ไม่เป็นร่างการเงิน).

## 科技大觀園 <Site url="scitechvista.nat.gov.tw"/>

### 最新文章 <Site url="scitechvista.nat.gov.tw" size="sm" />

<Route namespace="scitechvista" :data='{"path":"/","categories":["government"],"example":"/scitechvista","features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["scitechvista.nat.gov.tw/"]}],"name":"最新文章","maintainers":["johan456789"],"url":"scitechvista.nat.gov.tw","location":"index.ts","heat":0,"topFeeds":[]}' :test='{"code":0}' />

## 澳门卫生局 <Site url="www.ssm.gov.mo"/>

### 最新消息 <Site url="www.ssm.gov.mo/" size="sm" />

<Route namespace="ssm" :data='{"path":"/news","categories":["government"],"example":"/ssm/news","parameters":{},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["www.ssm.gov.mo/","www.ssm.gov.mo/portal"]}],"name":"最新消息","maintainers":["Fatpandac"],"url":"www.ssm.gov.mo/","location":"news.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

## Constitutional Court of Baden-Württemberg (Germany) <Site url="verfgh.baden-wuerttemberg.de"/>

### Press releases <Site url="verfgh.baden-wuerttemberg.de/de/presse-und-service/pressemitteilungen/" size="sm" />

<Route namespace="verfghbw" :data='{"path":"/press/:keyword?","categories":["government"],"example":"/verfghbw/press","parameters":{"keyword":"Keyword"},"features":{"requireConfig":false,"requirePuppeteer":false,"antiCrawler":false,"supportBT":false,"supportPodcast":false,"supportScihub":false},"radar":[{"source":["verfgh.baden-wuerttemberg.de/de/presse-und-service/pressemitteilungen/"],"target":"/press"}],"name":"Press releases","maintainers":["quinn-dev"],"url":"verfgh.baden-wuerttemberg.de/de/presse-und-service/pressemitteilungen/","location":"press.ts","heat":0,"topFeeds":[]}' :test='{"code":1,"message":"AssertionError: expected 503 to be 200 // Object.is equality\n    at /home/runner/work/RSSHub/RSSHub/lib/routes.test.ts:79:41\n    at processTicksAndRejections (node:internal/process/task_queues:103:5)\n    at file:///home/runner/work/RSSHub/RSSHub/node_modules/.pnpm/@vitest+runner@4.0.9/node_modules/@vitest/runner/dist/index.js:753:20"}' />

