# 常见问题

**Q: RSSHub 是如何工作的？**

**A:** 请求路由时，RSSHub 会按照给定规则请求源站数据，然后以 RSS 格式输出；如果在设定缓存时间内重新请求路由，则会直接返回缓存内容，不请求源站；再加一点点魔法。

**Q: RSSHub Radar 是如何工作的？**

**A:** 进入新页面时， RSSHub Radar 先根据页面 link 标签[寻找](https://github.com/DIYgod/RSSHub-Radar/blob/2f63cfe6eedec8c9e116dcfde3325089e6cda371/src/lib/rss.ts#L67)页面自带 RSS，再根据远程更新的[规则](https://github.com/DIYgod/RSSHub-Radar/blob/2f63cfe6eedec8c9e116dcfde3325089e6cda371/src/lib/radar-rules.ts)寻找适用当前页面和当前网站的 RSSHub 路由；再加一点点魔法。

**Q: 演示地址可以用么？**

**A:** 演示地址为 [rsshub.app](https://rsshub.app), 缓存时间 120 分钟，可以随意使用。但如果你看到路由有 <Badge type="danger">🚨 反爬严格</Badge> 标记，如微博、知乎等，意味着目标网站有严重的反爬策略，demo 无法确保可用性，建议自建来提高稳定性。

**Q: 为什么 RSSHub 里的图片 / 视频加载不出来？**

**A:** RSSHub 里的图片 / 视频地址都是源站地址，部分有防盗链，所以 RSSHub 给图片加了 `referrerpolicy="no-referrer"` 属性来防止跨域问题，但部分 RSS 服务会自作主张去掉这个属性，如 Feedly、Inoreader，在它们的网页端图片会触发跨域加载不出来。同时，视频目前没有类似的属性，因此大部分阅读器都无法通过防盗链检查。下面是一些解决方案：

1.  使用不发送 Referer 的阅读器，如 [Inoreader 网页版](https://www.inoreader.com/)配合[禁用 Referer 的 user script](https://greasyfork.org/scripts/376884)、[修复 inoreader 图片异常](https://greasyfork.org/scripts/463461-fix-image-error-at-inoreader)、[RSS to Telegram Bot](https://github.com/Rongronggg9/RSS-to-Telegram-Bot) 等。如果你的阅读器能够绕过防盗链成功播放内嵌视频，那么它就是不发送 Referer 的，请考虑添加到文档里帮助更多的人。
2.  设置反代，参考 [通用参数 -> 多媒体处理](/zh/guide/parameters#多媒体处理)。
3.  回到原网站查看相关资源。

**Q: 没有我想订阅的网站怎么办嘤嘤嘤 QAQ**

**A:** 如果你会写 JavaScript，请按照[规则](/zh/joinus/#提交新的-rsshub-规则)提交 pull request，否则按照要求[提交 issue](https://github.com/DIYgod/RSSHub/issues/new?template=rss_request_zh.md)，然后等待有缘人完成你的需求，也可以考虑[赞助项目](/zh/sponsor)或附上一张你自己的女装照来获得更快的 issue 响应速度。

**Q: 我怎么才能知道 RSSHub 更新了哪些路由？**

**A:** 可以使用 RSS 订阅[RSSHub 有新路由啦](/zh/routes/program-update#rsshub)。
