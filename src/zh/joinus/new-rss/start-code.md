# 制作路由

## 创建命名空间

制作新的 RSS 路由的第一步是创建命名空间。命名空间原则上应该与你制作 RSS 源的主要网站的二级域名**相同**。例如，如果你正在为 [https://github.com/DIYgod/RSSHub/issues](https://github.com/DIYgod/RSSHub/issues) 制作 RSS 源，第二级域名是 `github`。因此，你应该在 `lib/routes` 下创建名为 `github` 的文件夹，作为你的 RSS 路由的命名空间。

:::tip

在创建命名空间时，避免为同一命名空间的创建多个变体。例如，如果你为 `yahoo.co.jp` 和 `yahoo.com` 制作 RSS 源，则应该使用单个命名空间 `yahoo`，而不是创建多个命名空间如 `yahoo-jp`、`yahoojp`、`yahoo.jp`、`jp.yahoo`、`yahoocojp` 等。

:::

一旦你为 RSS 路由创建了命名空间，下一步就是创建文件 `namespace.ts` 来定义命名空间。

文件应该通过 namespace 返回一个符合 Namespace 类型的对象。Namespace 的定义在 [/lib/types.ts](https://github.com/DIYgod/RSSHub/blob/master/lib/types.ts)

- name：供人类阅读的命名空间的名称，它会被用作文档的标题
- url：对应网站的不包含 protocol 的网址
- description：可选，对使用此命名空间用户的提示和额外说明，它会被插入到文档中
- zh, zh-TW, ja: 可选，英文以外的多语言支持，它会被用作生成多语言文档

一个完整的例子是：

```ts
import type { Namespace } from '@/types';

export const namespace: Namespace = {
    name: 'GitHub',
    url: 'github.com',
    description: `
:::tip
GitHub provides some official RSS feeds:

-   Repo releases: \`https://github.com/:owner/:repo/releases.atom\`
-   Repo commits: \`https://github.com/:owner/:repo/commits.atom\`
-   User activities: \`https://github.com/:user.atom\`
-   Private feed: \`https://github.com/:user.private.atom?token=:secret\` (You can find **Subscribe to your news feed** in [dashboard](https://github.com) page after login)
-   Wiki history: \`https://github.com/:owner/:repo/wiki.atom\`
:::`,

    zh: {
        name: '给他哈不',
    },
};
```

## 创建路由

一旦你为路由创建了命名空间，下一步创建一个路由文件注册路由。

例如，如果你为 [GitHub 仓库 Issues](/zh/routes/programming#repo-issues) 制作 RSS 源，并且假设你希望用户输入 GitHub 用户名和仓库名，如果他们没有输入仓库名，则返回到 `RSSHub`，你可以在 `/lib/routes/github/issue.ts` 中注册你的新 RSS 路由，文件需要通过 route 返回一个符合 Route 类型的对象。Route 的定义在 [/lib/types.ts](https://github.com/DIYgod/RSSHub/blob/master/lib/types.ts)

- path: 路由路径，使用 [Hono 路由](https://hono.dev/api/routing) 语法
- name: 供人类阅读的路由名称，它会被用作文档的标题
- url: 对应网站的不包含 protocol 的网址
- maintainers: 负责维护此路由的人员的 GitHub handle
- example: 路由的一个示例 URL
- parameters: 路由的参数说明
- description: 可选，对使用此路由用户的提示和额外说明，它会被插入到文档中
- categories: 路由的分类，它会被写入到对应分类的文档中
- features: 路由的一些特性，比如依赖哪些配置项，是否反爬严格，是否支持某种功能等
- radar: 可以帮助用户在使用 [RSSHub Radar](https://github.com/DIYgod/RSSHub-Radar) 或其他兼容其格式的软件时订阅你的新 RSS 路由，我们将在后面的部分更多介绍
- handler: 路由的处理函数，我们将在后面的部分更多介绍

一个完整例子是：

```ts
import { Route } from '@/types';

export const route: Route = {
    path: '/issue/:user/:repo/:state?/:labels?',
    categories: ['programming'],
    example: '/github/issue/vuejs/core/all/wontfix',
    parameters: { user: 'GitHub username', repo: 'GitHub repo name', state: 'the state of the issues. Can be either `open`, `closed`, or `all`. Default: `open`.', labels: 'a list of comma separated label names' },
    features: {
        requireConfig: false,
        requirePuppeteer: false,
        antiCrawler: false,
        supportBT: false,
        supportPodcast: false,
        supportScihub: false,
    },
    radar: [
        {
            source: ['github.com/:user/:repo/issues', 'github.com/:user/:repo/issues/:id', 'github.com/:user/:repo'],
            target: '/issue/:user/:repo',
        },
    ],
    name: 'Repo Issues',
    maintainers: ['HenryQW', 'AndreyMZ'],
    handler,
};
```

在上面的示例中，`issue` 是一个精确匹配，`:user` 是一个必需参数，`:repo?` 是一个可选参数。`?` 在 `:repo` 之后表示该参数是可选的

## 编写雷达规则

在[创建路由](#创建路由)中，我们提到路由信息包含一个 radar 字段来记录 RSSHub Radar 规则。

下面以 `GitHub 仓库 Issues` 的 RSS 规则为例。代码如下所示：

```ts{5-8}
import { Route } from '@/types';

export const route: Route = {
    // ...
    radar: [
        {
            source: ['github.com/:user/:repo/issues', 'github.com/:user/:repo/issues/:id', 'github.com/:user/:repo'],
            target: '/issue/:user/:repo',
        },
    ],
};
```

### `source`

source 是*可选*字段，应指定不包含协议名的 URL 路径。如果不想匹配任何 URL 路径，请将其留空。它只会出现在 RSSHub Radar 浏览器扩展程序的`适用于当前网站的 RSSHub`选项中。

source 应为一个字符串数组。例如，如果 `GitHub 仓库 Issues` 的 source 是 `github.com/:user/:repo`，则意味着当你访问 `https://github.com/DIYgod/RSSHub` 时将匹配到 `github.com/:user/:repo`，此时返回的结果 params 将是：`{user: 'DIYgod', repo: 'RSSHub'}`。浏览器扩展程序使用这些参数根据 target 字段建立 RSSHub 订阅地址。

### `target`

目标是**可选**字段，并用于生成 RSSHub 订阅地址，它可以接受字符串作为输入。如果你不想建立 RSSHub 订阅地址，可以将此字段留空。

以 `GitHub 仓库 Issues` 为例，在 RSSHub 文档中相应的路由为 `/github/issue/:user/:repo`。

在将 source 路径中的 `user` 匹配为 `DIYgod`，`repo` 匹配为 `RSSHub` 后，RSSHub 路由中的 `:user` 将被替换为 `DIYgod`，`:repo` 将被替换为 `RSSHub`，结果为 `/github/issue/DIYgod/RSSHub`。

### 调试

如果需要调试新规则的结果，建议你安装浏览器扩展程序。你可以在 [RSSHub Radar README](https://github.com/DIYgod/RSSHub-Radar?tab=readme-ov-file#install) 下载适合你浏览器的扩展程序。

然后在扩展程序的设置页，把 `RSSHub instance` 设置为你本地的 `http://localhost:1200`，然后点击 `Update Now`，新规则就会生效。

## 编写路由处理函数

处理函数会被传入一个参数 ctx，函数结束后需要返回一个包含 RSS 所需信息的对象。ctx 可以使用的 API 可以在 [Hono context 文档](https://hono.dev/api/context)中查看；返回值的类型在这里定义：[/lib/types.ts](https://github.com/DIYgod/RSSHub/blob/master/lib/types.ts)

我们有三种常见的数据获取方法：

1.  [通过 API](#通过-api)
2.  [通过 HTML](#通过-html)
3.  [使用 Puppeteer](#使用-puppeteer)

下面我们继续以 GitHub 仓库 Issues 为例，介绍如何编写这三种常见的路由处理函数。

## 通过 API

你应该优先选择使用 API 获取数据，因为 API 通常比 HTML 更容易解析和更稳定。

### 查看 API 文档

不同的站点有不同的 API。你可以查看要为其制作 RSS 源的站点的 API 文档。在本例中，我们将使用 [GitHub Issues API](https://docs.github.com/zh/rest/issues/issues#list-repository-issues)。

但更多情况是网站没有提供开放 API，这时候我们可以浏览器开发者工具或者抓包工具来查看站点发起的请求。

### 基本代码

以下是让你开始的基本代码：

```ts
import { Route } from '@/types';
import ofetch from '@/utils/ofetch'; // 统一使用的请求库

export const route: Route = {
    // 在此处编写前文介绍的路由信息
    handler: (ctx) => {
        // 在此处编写路由处理函数
    },
};
```

### 获取用户输入

我们首先需要从用户请求的路径中获取 GitHub 用户名和仓库名称。如果请求中未提供仓库名称，则应默认为 `RSSHub`。你可以使用以下代码实现：

```ts{4}
export const route: Route = {
    // ...
    handler: (ctx) => {
        const { user, repo = 'RSSHub' } = ctx.req.param();
    },
};
```

### 从 API 获取数据

在获取用户输入后，我们可以使用它向 API 发送请求。大多数情况下，需要使用 `@/utils/ofetch` 中的 `ofetch`（一个自订的 [ofetch](https://github.com/unjs/ofetch) 包装函数）发送 HTTP 请求。有关更多信息，请参阅 [ofetch 文档](https://github.com/unjs/ofetch)。

```ts{3-8}
export const route: Route = {
    const { user, repo = 'RSSHub' } = ctx.req.param();
    // 发送 HTTP GET 请求到 API 并解构返回的数据对象
    const data = await ofetch(`https://api.github.com/repos/${user}/${repo}/issues`, {
        headers: {
            accept: 'application/vnd.github.html+json',
        },
    });
};
```

### 构造和返回结果

一旦我们从 API 获取到数据，我们需要进一步处理它以生成符合 RSS 规范的 RSS 源。具体来说，我们需要提取源标题、源链接、文章标题、文章链接、文章正文和文章发布日期。

为此，我们可以将相关数据通过 handler 返回，RSSHub 的中间件将处理其余部分。

以下是应有的最终代码：

```ts
import { Route } from '@/types';
import ofetch from '@/utils/ofetch'; // 统一使用的请求库
import { parseDate } from '@/utils/parse-date'; // 解析日期的工具函数

export const route: Route = {
    // 在此处编写前文介绍的路由信息
    handler: (ctx) => {
        const { user, repo = 'RSSHub' } = ctx.req.param();
        const data = await ofetch(`https://api.github.com/repos/${user}/${repo}/issues`, {
            headers: {
                accept: 'application/vnd.github.html+json',
            },
        });

        // 从 API 响应中提取相关数据
        const items = data.map((item) => ({
            // 文章标题
            title: item.title,
            // 文章链接
            link: item.html_url,
            // 文章正文
            description: item.body_html,
            // 文章发布日期
            pubDate: parseDate(item.created_at),
            // 如果有的话，文章作者
            author: item.user.login,
            // 如果有的话，文章分类
            category: item.labels.map((label) => label.name),
        }));

        return {
            // 源标题
            title: `${user}/${repo} issues`,
            // 源链接
            link: `https://github.com/${user}/${repo}/issues`,
            // 源文章
            item: items,
        };
    },
};
```

## 通过 HTML

如果源站没有使用 API 来返回数据，而是把数据直接渲染到了 HTML 中返回，那么我们可以使用这种获取方式。

### 基本代码

以下是让你开始的基本代码：

```ts
import { Route } from '@/types';
import ofetch from '@/utils/ofetch'; // 统一使用的请求库
import { load } from 'cheerio'; // 类似 jQuery 的 API HTML 解析器

export const route: Route = {
    // 在此处编写前文介绍的路由信息
    handler: (ctx) => {
        // 在此处编写路由处理函数
    },
};
```

### 获取用户输入

我们首先需要从用户请求的路径中获取 GitHub 用户名和仓库名称。如果请求中未提供仓库名称，则应默认为 `RSSHub`。你可以使用以下代码实现：

```ts{4}
export const route: Route = {
    // ...
    handler: (ctx) => {
        const { user, repo = 'RSSHub' } = ctx.req.param();
    },
};
```

### 从 HTML 获取数据

在获取了用户输入之后，我们需要向网页发起请求，以检索所需的信息。大多数情况下，需要使用 `@/utils/ofetch` 中的 `ofetch`（一个自订的 [ofetch](https://github.com/unjs/ofetch) 包装函数）发送 HTTP 请求。有关更多信息，请参阅 [ofetch 文档](https://github.com/unjs/ofetch)。

首先，我们将向 API 发送 HTTP GET 请求，并将 HTML 响应加载到 Cheerio 中，Cheerio 是一个帮助我们解析和操作 HTML 的库。

```js{6-7}
export const route: Route = {
    // ...
    handler: (ctx) => {
        const { user, repo = 'RSSHub' } = ctx.req.param();

        const response = await ofetch(`https://github.com/${user}/${repo}/issues`);
        const $ = load(response);
    },
};
```

接下来，我们将使用 Cheerio 选择器选择相关的 HTML 元素，解析我们需要的数据，并将其转换为数组。

```ts{9-29}
export const route: Route = {
    // ...
    handler: (ctx) => {
        const { user, repo = 'RSSHub' } = ctx.req.param();

        const response = await ofetch(`https://github.com/${user}/${repo}/issues`);
        const $ = load(response);

        // 我们使用 Cheerio 选择器选择所有带类名“js-navigation-container”的“div”元素，
        // 其中包含带类名“flex-auto”的子元素。
        const items = $('div.js-navigation-container .flex-auto')
            // 使用“toArray()”方法将选择的所有 DOM 元素以数组的形式返回。
            .toArray()
            // 使用“map()”方法遍历数组，并从每个元素中解析需要的数据。
            .map((item) => {
                item = $(item);
                const a = item.find('a').first();
                return {
                    title: a.text(),
                    // `link` 需要一个绝对 URL，但 `a.attr('href')` 返回一个相对 URL。
                    link: `${baseUrl}${a.attr('href')}`,
                    pubDate: parseDate(item.find('relative-time').attr('datetime')),
                    author: item.find('.opened-by a').text(),
                    category: item
                        .find('a[id^=label]')
                        .toArray()
                        .map((item) => $(item).text()),
                };
            });
    },
};
```

### 构造和返回结果

一旦我们从 API 获取到数据，我们需要进一步处理它以生成符合 RSS 规范的 RSS 源。具体来说，我们需要提取源标题、源链接、文章标题、文章链接、文章正文和文章发布日期。

为此，我们可以将相关数据通过 handler 返回，RSSHub 的中间件将处理其余部分。

以下是应有的最终代码：

```ts
import { Route } from '@/types';
import ofetch from '@/utils/ofetch';
import { load } from 'cheerio';
import { parseDate } from '@/utils/parse-date';

export const route: Route = {
    // 在此处编写前文介绍的路由信息
    handler: (ctx) => {
        const { user, repo = 'RSSHub' } = ctx.req.param();

        const response = await ofetch(`https://github.com/${user}/${repo}/issues`);
        const $ = load(response);

        const items = $('div.js-navigation-container .flex-auto')
            .toArray()
            .map((item) => {
                item = $(item);
                const a = item.find('a').first();
                return {
                    title: a.text(),
                    link: `https://github.com${a.attr('href')}`,
                    pubDate: parseDate(item.find('relative-time').attr('datetime')),
                    author: item.find('.opened-by a').text(),
                    category: item
                        .find('a[id^=label]')
                        .toArray()
                        .map((item) => $(item).text()),
                };
            });

        return {
            // 源标题
            title: `${user}/${repo} issues`,
            // 源链接
            link: `https://github.com/${user}/${repo}/issues`,
            // 源文章
            item: items,
        };
    },
};
```

### 获取全文

从列表 HTML 中获取的数据通常不会包含完整的文章。为了提供更好的阅读体验，我们可以通过请求每个详情页来在展示完整的文章，例如每个 GitHub Issue 的正文。

在先前的部分中，我们仅需向 API 发送一个  HTTP 请求即可获得所需的所有数据。然而，在此部分中，我们需要发送 `1 + n` 个 HTTP 请求，其中 `n` 是从第一个请求获取的文章列表中的数量。

部分网站可能不喜欢在短时间内接收大量请求，并返回类似于“429 Too Many Requests”的错误，合理[使用缓存](/zh/joinus/advanced/use-cache)可以极大减少这种情况的发生。

以下是更新后的代码：

```ts{31-45}
import ofetch from '@/utils/ofetch';
import { load } from 'cheerio';
import { parseDate } from '@/utils/parse-date';

export const route: Route = {
    // 在此处编写前文介绍的路由信息
    handler: (ctx) => {
        const baseUrl = 'https://github.com';
        const { user, repo = 'RSSHub' } = ctx.req.param();

        const response = await ofetch(`${baseUrl}/${user}/${repo}/issues`);
        const $ = load(response);

        const list = $('div.js-navigation-container .flex-auto')
            .toArray()
            .map((item) => {
                item = $(item);
                const a = item.find('a').first();
                return {
                    title: a.text(),
                    link: `${baseUrl}${a.attr('href')}`,
                    pubDate: parseDate(item.find('relative-time').attr('datetime')),
                    author: item.find('.opened-by a').text(),
                    category: item
                        .find('a[id^=label]')
                        .toArray()
                        .map((item) => $(item).text()),
                };
            });

        const items = await Promise.all(
            list.map((item) =>
                cache.tryGet(item.link, async () => {
                    const response = await ofetch(item.link);
                    const $ = load(response);

                    // 选择类名为“comment-body”的第一个元素
                    item.description = $('.comment-body').first().html();

                    // 上面每个列表项的每个属性都在此重用，
                    // 并增加了一个新属性“description”
                    return item;
                })
            )
        );

        return {
            title: `${user}/${repo} issues`,
            link: `https://github.com/${user}/${repo}/issues`,
            item: items,
        };
    }
};

```

## 使用 Puppeteer

少部分网站使用了极为严格的反爬策略或者复杂的加密算法来阻止获取数据。在这种情况下，你可能需要使用 Puppeteer 来模拟浏览器行为，以获取数据。

建议你先阅读前面两种方法，因为本节是前一节的扩展，不会解释一些基本概念。

### 将 ofetch 替换为 puppeteer

现在，我们将使用 `puppeteer` 代替 `ofetch` 来从网页获取数据。

```ts{12-43}
import { Route } from '@/types';
import { load } from 'cheerio';
import { parseDate } from '@/utils/parse-date';
import logger from '@/utils/logger';
import puppeteer from '@/utils/puppeteer';

export const route: Route = {
    // ...
    handler: (ctx) => {
        const baseUrl = 'https://github.com';
        const { user, repo = 'RSSHub' } = ctx.req.param();

        // 导入 puppeteer 工具类并初始化浏览器实例
        const browser = await puppeteer();
        // 打开一个新标签页
        const page = await browser.newPage();
        // 拦截所有请求
        await page.setRequestInterception(true);
        // 仅允许某些类型的请求
        page.on('request', (request) => {
            // 在这次例子，我们只允许 HTML 请求
            request.resourceType() === 'document' ? request.continue() : request.abort();
        });
        // 访问目标链接
        const link = `${baseUrl}/${user}/${repo}/issues`;
        // ofetch 请求会被自动记录，
        // 但 puppeteer 请求不会
        // 所以我们需要手动记录它们
        logger.http(`Requesting ${link}`);
        await page.goto(link, {
            // 指定页面等待载入的时间
            waitUntil: 'domcontentloaded',
        });
        // 获取页面的 HTML 内容
        const response = await page.content();
        // 关闭标签页
        page.close();

        const $ = load(response);

        // const item = ...;

        // 不要忘记关闭浏览器实例
        browser.close();

        return {
            // 在此处输出你的 RSS
        };
    },
}
```

### 获取全文

使用浏览器新标签页获取每个 GitHub Issue 的正文，类似于 [上一节](#获取全文)。我们可以使用以下代码：

```ts
import { Route } from '@/types';
import { load } from 'cheerio';
import { parseDate } from '@/utils/parse-date';
import logger from '@/utils/logger';
import puppeteer from '@/utils/puppeteer';

export const route: Route = {
    // ...
    handler: (ctx) => {
        const baseUrl = 'https://github.com';
        const { user, repo = 'RSSHub' } = ctx.req.param();

        const browser = await puppeteer();
        const page = await browser.newPage();
        await page.setRequestInterception(true);
        page.on('request', (request) => {
            request.resourceType() === 'document' ? request.continue() : request.abort();
        });

        const link = `${baseUrl}/${user}/${repo}/issues`;
        logger.http(`Requesting ${link}`);
        await page.goto(link, {
            waitUntil: 'domcontentloaded',
        });
        const response = await page.content();
        page.close();

        const $ = load(response);

        const list = $('div.js-navigation-container .flex-auto')
            .toArray()
            .map((item) => {
                item = $(item);
                const a = item.find('a').first();
                return {
                    title: a.text(),
                    link: `${baseUrl}${a.attr('href')}`,
                    pubDate: parseDate(item.find('relative-time').attr('datetime')),
                    author: item.find('.opened-by a').text(),
                    category: item
                        .find('a[id^=label]')
                        .toArray()
                        .map((item) => $(item).text()),
                };
            });

        const items = await Promise.all(
            list.map((item) =>
                cache.tryGet(item.link, async () => {
                    // highlight-start
                    // 重用浏览器实例并打开新标签页
                    const page = await browser.newPage();
                    // 设置请求拦截，仅允许 HTML 请求
                    await page.setRequestInterception(true);
                    page.on('request', (request) => {
                        request.resourceType() === 'document' ? request.continue() : request.abort();
                    });

                    logger.http(`Requesting ${item.link}`);
                    await page.goto(item.link, {
                        waitUntil: 'domcontentloaded',
                    });
                    const response = await page.content();
                    // 获取 HTML 内容后关闭标签页
                    page.close();
                    // highlight-end

                    const $ = load(response);

                    item.description = $('.comment-body').first().html();

                    return item;
                })
            )
        );

        // 所有请求完成后关闭浏览器实例
        browser.close();

        return {
            title: `${user}/${repo} issues`,
            link: `https://github.com/${user}/${repo}/issues`,
            item: items,
        };
    },
};
```

### 额外资源

这里有一些你可以使用的资源来了解 puppeteer：

-   [puppeteer's 当前文档](https://pptr.dev)
-   [puppeteer's 非官方中文文档](https://zhaoqize.github.io/puppeteer-api-zh_CN/)

#### 拦截请求

在爬取网页时，你可能会遇到你不需要的图像、字体和其他资源。这些资源会减慢页面加载速度并消耗宝贵的 CPU 和内存资源。为了避免这种情况，你可以在 puppeteer 中启用请求拦截。

这是如何实现的：

```js
await page.setRequestInterception(true);
page.on('request', (request) => {
    request.resourceType() === 'document' ? request.continue() : request.abort();
});
// 这两条语句必须放在 page.goto() 之前
```

你可以在 [这里](https://chromedevtools.github.io/devtools-protocol/tot/Network/#type-ResourceType) 找到 `request.resourceType()` 的所有可能值。在代码中使用这些值时，请确保使用**小写**字母。

#### Wait Until

在上面的代码中，你将看到在 `page.goto()` 函数中使用了 `waitUntil: 'domcontentloaded'`。这是 puppeteer 的一个选项，它告诉它在何时认为导航成功。你可以在 [这里](https://pptr.dev/api/puppeteer.page.goto/#remarks) 找到所有可能的值及其含义。

需要注意的是，`domcontentloaded` 的等待时间较短，而 `networkidle0` 可能不适用于始终发送后台遥测或获取数据的网站。

此外，重要的是避免等待特定的超时时间，而是等待选择器出现。等待超时是不准确的，因为它取决于 puppeteer 实例的负载情况。
