---
sidebar_position: 1
---

# Quick Start

If you've found a bug or have a suggestion for improving RSSHub, we'd love to hear from you! You can submit your changes by creating a pull request. Don't worry if you're new to pull requests - we welcome contributions from developers of all experience levels. Don't know how to code? You can also help by [reporting bugs](https://github.com/DIYgod/RSSHub/issues).

## Join the discussion

[![Telegram group](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.swo.moe%2Fstats%2Ftelegram%2Frsshub&query=count&color=2CA5E0&label=Telegram%20Group&logo=telegram&cacheSeconds=3600&style=flat-square)](https://t.me/rsshub) [![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/DIYgod/RSSHub?style=flat-square&label=GitHub%20issues&logo=github)](https://github.com/DIYgod/RSSHub/issues)

## Before you begin

To create an RSS feed, you'll need to use a combination of Git, HTML, JavaScript, jQuery, and Node.js.

If you don't know much about them but would like to learn them, here are some good resources:

-   [JavaScript Tutorials on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript#tutorials)
-   [W3Schools](https://www.w3schools.com/)
-   [Git course on Codecademy](https://www.codecademy.com/learn/learn-git)

If you'd like to see examples of how other developers use these technologies to create RSS feeds, you can take a look at some of the code in [our repository](https://github.com/DIYgod/RSSHub/tree/master/lib/routes).

## Start developing RSSHub routes

If you've found a website that doesn't offer an RSS feed, you can create an RSS rule for it using RSSHub. An RSS rule is a short Node.js program code (hereafter referred to as "route") that tells RSSHub how to extract content from a website and generate an RSS feed. By creating a new RSS route, you can help make content from your favourite websites more accessible and easier to follow.

Before you start writing an RSS route, please make sure that the source site does not provide RSS. Some web pages will include a link element with type `application/atom+xml` or `application/rss+xml` in the HTML header to indicate the RSS link.

Here's an example of what an RSS link might look like in the HTML header: `<link rel="alternate" type="application/rss+xml" href="http://example.com/rss.xml" />`. If you see a link like this, it means that the website already has an RSS feed and you don't need to create a new RSS route for it.

[Ready to get started? Click here to dive into the guide!](/joinus/new-rss/prerequisites)
