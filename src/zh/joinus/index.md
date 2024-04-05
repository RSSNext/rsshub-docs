---
sidebar_position: 1
---

# 快速开始

如果您在使用 RSSHub 过程中遇到了问题或者有建议改进，我们很乐意听取您的意见！您可以通过 Pull Request 来提交您的修改。无论您对 Pull Request 的使用是否熟悉，我们都欢迎不同经验水平的开发者参与贡献。如果您不懂编程，也可以通过 [报告错误](https://github.com/DIYgod/RSSHub/issues) 的方式来帮助我们。

## 参与讨论

[![Telegram group](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.swo.moe%2Fstats%2Ftelegram%2Frsshub&query=count&color=2CA5E0&label=Telegram%20Group&logo=telegram&cacheSeconds=3600&style=flat-square)](https://t.me/rsshub) [![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/DIYgod/RSSHub?style=flat-square&label=GitHub%20issues&logo=github)](https://github.com/DIYgod/RSSHub/issues)

## 开始之前

要制作一个 RSS 订阅，您需要结合使用 Git、HTML、JavaScript、jQuery 和 Node.js。

如果您对它们不是很了解，但想要学习它们，以下是一些好的资源：

-   [MDN Web Docs 上的 JavaScript 指南](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript#教程)
-   [W3Schools](https://www.w3schools.com)
-   [Codecademy 上的 Git 课程](https://www.codecademy.com/learn/learn-git)

如果您想查看其他开发人员如何使用这些技术来制作 RSS 订阅的示例，您可以查看 [我们的代码库](https://github.com/DIYgod/RSSHub/tree/master/lib/routes) 中的一些代码。

## 开始开发 RSSHub 路由

如果您发现一个网站没有提供 RSS 订阅，您可以使用 RSSHub 制作一个 RSS 规则。RSS 规则是一个短小的 Node.js 程序代码（以下简称 “路由”），它告诉 RSSHub 如何从网站中提取内容并生成 RSS 订阅。通过制作新的 RSS 路由，您可以帮助让您喜爱的网站的内容被更容易访问和关注。

在您开始编写 RSS 路由之前，请确保源站点没有提供 RSS。一些网页会在 HTML 头部中包含一个 type 为 `application/atom+xml` 或 `application/rss+xml` 的 link 元素来指示 RSS 链接。

这是在 HTML 头部中看到 RSS 链接可能会长成这样：`<link rel="alternate" type="application/rss+xml" href="http://example.com/rss.xml" />`。如果您看到这样的链接，这意味着这个网站已经有了一个 RSS 订阅，您不需要为它制作一个新的 RSS 路由。

[准备好了吗？点这里开始！](/zh/joinus/new-rss/prerequisites)
