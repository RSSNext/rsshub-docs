---
sidebar_position: 3
---

# Create Route

## Creating Namespace

The first step to making a new RSS route is to create a namespace. In principle, the namespace should be **the same** as the secondary domain of the main website where you are making the RSS feed. For example, if you are making an RSS feed for [https://github.com/DIYgod/RSSHub/issues](https://github.com/DIYgod/RSSHub/issues), the secondary domain is `github`. Therefore, you should create a folder named `github` under `lib/routes` as the namespace for your RSS route.

:::tip

When creating a namespace, avoid creating multiple variations for the same namespace. For example, if you are making RSS feeds for `yahoo.co.jp` and `yahoo.com`, you should use a single namespace `yahoo` rather than creating multiple namespaces like `yahoo-jp`, `yahoojp`, `yahoo.jp`, `jp.yahoo`, `yahoocojp` and so on.

:::

Once you have created a namespace for the RSS route, the next step is to create the file `namespace.ts` to define the namespace.

The file should return an object that conforms to the Namespace type through a namespace. The definition of Namespace is at [/lib/types.ts](https://github.com/DIYgod/RSSHub/blob/master/lib/types.ts#L51)

- name: The human-readable name of the namespace, which will be used as the title of the document
- url: The website URL without protocol that corresponds
- description: Optional, hints and additional explanations for users using this namespace, it will be inserted into the document
- zh, zh-TW, ja: optional, support for languages other than English, it will be used to generate multilingual documents

Here is a complete example:

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

## Creating Route

Once you have created a namespace for the route, the next step is to create a route file to register the route.

For example, if you are making an RSS feed for [GitHub Repo Issues](/routes/programming#repo-issues), and assume that you want users to enter the GitHub username and repo name, if they do not enter the repo name, they will return to RSSHub. You can register your new RSS route in /lib/routes/github/issue.ts, the file needs to return an object that conforms to the Route type through route. The definition of Route is at [/lib/types.ts](https://github.com/DIYgod/RSSHub/blob/master/lib/types.ts)

- path: The route path, using [Hono routing](https://hono.dev/api/routing) syntax
- name: The human-readable name of the route, which will be used as the title of the document
- url: The website URL without protocol that corresponds
- maintainers: The GitHub handle of the people responsible for maintaining this route
- example: An example URL of the route
- parameters: The description of the route parameters
- description: Optional, hints and additional explanations for users using this route, it will be inserted into the document
- categories: The classification of the route, which will be written into the corresponding classification document
- features: Some features of the route, such as what configuration items it depends on, whether it is strict anti-crawl, whether it supports a certain function and so on
- radar: Can help users subscribe to your new RSS route when using [RSSHub Radar](https://github.com/DIYgod/RSSHub-Radar) or other software compatible with its format, we will introduce it more in the following sections
- handler: The handler function of the route, we will introduce it more in the following sections

Here is a complete example:

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

In the above example, `issue` is an exact match, `:user` is a required parameter, `:repo?` is an optional parameter. `?` after `:repo` indicates that the parameter is optional

## Writing Radar Rules

In [Creating Route](#creating-Route), we mentioned that route information includes a radar field to record RSSHub Radar rules.

Take the RSS rule of `GitHub repository Issues` as an example. The code is as follows:

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

The source is an *optional* field and should specify a URL path without the protocol name. If you do not want to match any URL paths, leave it blank. It will only appear in the `RSSHub for current website` option in the RSSHub Radar browser extension.

The source should be a string array. For example, if the source of `GitHub repository Issues` is `github.com/:user/:repo`, it means that when you visit `https://github.com/DIYgod/RSSHub`, it will match with `github.com/:user/:repo`. At this time, the returned result params will be: `{ user: 'DIYgod', repo: 'RSSHub'}`. The browser extension uses these parameters to establish an RSSHub feed address based on the target field.

### `target`

The target is **optional** and is used to generate an RSSHub feed address, which can accept strings as input. If you do not want to create an RSSHub subscription address, leave this field blank.

For example, in the case of `GitHub repository Issues`, the corresponding route in RSSHub documentation would be `/github/issue/:user/:repo`.

After matching `user` in the source path with `DIYgod`, and matching `repo` with `RSSHub`, `:user` in the RSSHub route will be replaced by `DIYgod`, and `:repo` will be replaced by `RSSHub`, resulting in `/github/issue/DIYgod/RSSHub`.

### Debugging

If you need to debug new rules, it is recommended that you install a browser extension. You can download extension suitable for your browser at [RSSHub Radar README](https://github.com/DIYgod/RSSHub-Radar?tab=readme-ov-file#install).

Then go to settings page of extension set your local instance's address http://localhost:1200 as your "RSSHub instance", then click "Update Now", new rules will take effect.

## Writing Route Handler Function

The handler function will be passed a parameter ctx. By the end of the function, it needs to return an object that contains the information required for RSS. You can see the APIs available for ctx to use in the [Hono context documentation](https://hono.dev/api/context); The type of the return value is defined here: [/lib/types.ts](https://github.com/DIYgod/RSSHub/blob/master/lib/types.ts)

We have three common methods of data acquisition:

1.  [Via API](#via-api)
2.  [Via HTML](#via-html)
3.  [Using puppeteer](#using-puppeteer)

Next, we will continue to use GitHub repository Issues as an example to introduce how to write these three common Route Handler functions.

## Via API

You should prioritize using APIs to obtain data, as APIs are usually easier to parse and more stable than HTML.

### Check the API documentation

Different sites have different APIs. You can check the API documentation of the site for which you want to create an RSS feed. In this case, we will use [GitHub Issues API](https://docs.github.com/zh/rest/issues/issues#list-repository-issues).

But more often, websites do not provide open APIs. At these times, we can use browser developer tools or packet capture tools to view requests initiated by the site.

### Basic Code

Here is some basic code to get you started:

```ts
import { Route } from '@/types';
import ofetch from '@/utils/ofetch'; // Unified request library used

export const route: Route = {
    // Write the routing information introduced in the previous text here.
    handler: (ctx) => {
        // Write the routing handler function here.
    },
};
```

### Retrieving user input

First, we need to obtain the GitHub username and repository name from the path requested by the user. If no repository name is provided in the request, it should default to `RSSHub`. You can implement this with the following code:

```ts{4}
export const route: Route = {
    // ...
    handler: (ctx) => {
        const { user, repo = 'RSSHub' } = ctx.req.param();
    },
};
```

### Getting data from the API

After obtaining user input, we can use it to send requests to the API. In most cases, you need to use `ofetch` (a custom [ofetch](https://github.com/unjs/ofetch) wrapper function) in `@/utils/ofetch` to send HTTP requests. For more information, please refer to the [ofetch documentation](https://github.com/unjs/ofetch).

```ts{3-8}
export const route: Route = {
    const { user, repo = 'RSSHub' } = ctx.req.param();
    // Send an HTTP GET request to the API and destructure the returned data object.
    const data = await ofetch(`https://api.github.com/repos/${user}/${repo}/issues`, {
        headers: {
            accept: 'application/vnd.github.html+json',
        },
    });
};
```

### Construct and return results

Once we have retrieved the data from the API, we need to process it further to generate an RSS feed that conforms to the RSS specification. Specifically, we need to extract the channel title, channel link, item title, item link, item description, and item publication date.

For this, we can return the relevant data through the handler, and the RSSHub middleware will handle the rest.

Here is the final code that you should have:

```ts
import { Route } from '@/types';
import ofetch from '@/utils/ofetch'; // Unified request library used
import { parseDate } from '@/utils/parse-date'; // Tool function for parsing dates

export const route: Route = {
    // Write the routing information introduced in the previous text here.
    handler: (ctx) => {
        const { user, repo = 'RSSHub' } = ctx.req.param();
        const data = await ofetch(`https://api.github.com/repos/${user}/${repo}/issues`, {
            headers: {
                accept: 'application/vnd.github.html+json',
            },
        });

        // extract the relevant data from the API response
        const items = data.map((item) => ({
            // item title
            title: item.title,
            // item link
            link: item.html_url,
            // item description
            description: item.body_html,
            // item publish date or time
            pubDate: parseDate(item.created_at),
            // item author, if available
            author: item.user.login,
            // item category, if available
            category: item.labels.map((label) => label.name),
        }));

        return {
            // channel title
            title: `${user}/${repo} issues`,
            // channel link
            link: `https://github.com/${user}/${repo}/issues`,
            // each feed item
            item: items,
        };
    },
};
```

## Via HTML

If the source site does not use an API to return data, but directly renders the data into HTML for return, then we can use this method of retrieval.

### Basic Code

Here's the basic code to get you started:

```ts
import { Route } from '@/types';
import ofetch from '@/utils/ofetch'; // Unified request library used
import { load } from 'cheerio'; // An HTML parser with an API similar to jQuery

export const route: Route = {
    // Write the routing information introduced in the previous text here.
    handler: (ctx) => {
        // Write the routing handler function here.
    },
};
```

### Retrieving user input

First, we need to obtain the GitHub username and repository name from the path requested by the user. If no repository name is provided in the request, it should default to `RSSHub`. You can implement this with the following code:

```ts{4}
export const route: Route = {
    // ...
    handler: (ctx) => {
        const { user, repo = 'RSSHub' } = ctx.req.param();
    },
};
```

### Getting data from HTML

After obtaining the user input, we need to initiate a request to the webpage to retrieve the required information. In most cases, it is necessary to use `ofetch` (a custom [ofetch](https://github.com/unjs/ofetch) wrapper function) in `@/utils/ofetch` to send HTTP requests. For more information, please refer to the [ofetch documentation](https://github.com/unjs/ofetch).

To begin, we'll make an HTTP GET request to the API and load the HTML response into Cheerio, a library that helps us parse and manipulate HTML.

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

Next, we'll use Cheerio selectors to select the relevant HTML elements, parse the data we need, and convert it into an array.

```ts{9-29}
export const route: Route = {
    // ...
    handler: (ctx) => {
        const { user, repo = 'RSSHub' } = ctx.req.param();

        const response = await ofetch(`https://github.com/${user}/${repo}/issues`);
        const $ = load(response);

        // We use a Cheerio selector to select all 'div' elements with the class name 'js-navigation-container'
        // that contain child elements with the class name 'flex-auto'.
        const items = $('div.js-navigation-container .flex-auto')
            // We use the `toArray()` method to retrieve all the DOM elements selected as an array.
            .toArray()
            // We use the `map()` method to traverse the array and parse the data we need from each element.
            .map((item) => {
                item = $(item);
                const a = item.find('a').first();
                return {
                    title: a.text(),
                    // We need an absolute URL for `link`, but `a.attr('href')` returns a relative URL.
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

### Construct and return results

Once we have the data from the web page, we need to further process it to generate RSS in accordance with the RSS specification. Mainly, we need the channel title, channel link, item title, item link, item description, and item publication date.

For this, we can return the relevant data through the handler, and the RSSHub middleware will handle the rest.

Here's an example code:

```ts
import { Route } from '@/types';
import ofetch from '@/utils/ofetch';
import { load } from 'cheerio';
import { parseDate } from '@/utils/parse-date';

export const route: Route = {
    // Write the routing information introduced in the previous text here.
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
            // channel title
            title: `${user}/${repo} issues`,
            // channel link
            link: `https://github.com/${user}/${repo}/issues`,
            // each feed item
            item: items,
        };
    },
};
```

### Fetch the Full Text

Data obtained from list HTML usually does not contain the complete article. To provide a better reading experience, we can display the full article by requesting each detail page, such as the body of each GitHub Issue.

In previous sections, we only needed to send one HTTP request to the API to get all necessary data. However, in this section, we need to send `1 + n` HTTP requests where `n` is the number of articles in the list obtained from the first request.

Some websites may not like receiving a large number of requests in a short period and return errors similar to "429 Too Many Requests". Reasonable [Use Cache](/joinus/advanced/use-cache) can greatly reduce such occurrences.

Here's the updated code:

```ts{31-45}
import ofetch from '@/utils/ofetch';
import cache from '@/utils/cache';
import { load } from 'cheerio';
import { parseDate } from '@/utils/parse-date';

export const route: Route = {
    // Write the routing information introduced in the previous text here.
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

                    // Select the first element with the class name 'comment-body'
                    item.description = $('.comment-body').first().html();

                    // Every property of a list item defined above is reused here
                    // and we add a new property 'description'
                    return item;
                })
            )
        );

        return {
            title: `${user}/${repo} issues`,
            link: `https://github.com/${user}/${repo}/issues`,
            item: items,
        };
    },
};
```

## Using puppeteer

A small portion of websites use extremely strict anti-crawling strategies or complex encryption algorithms to prevent data acquisition. In this case, you may need to use Puppeteer to simulate browser behavior in order to obtain data.

It is recommended that you read the previous two methods first, as this section is an extension of the previous one and will not explain some basic concepts.

### Replace ofetch with puppeteer

Now, we will be using `puppeteer` instead of `ofetch` to retrieve data from the web page.

```ts{12-43}
import { Route } from '@/types';
import { parseDate } from '@/utils/parse-date';
import logger from '@/utils/logger';
import puppeteer from '@/utils/puppeteer';

export const route: Route = {
    // ...
    handler: (ctx) => {
        const baseUrl = 'https://github.com';
        const { user, repo = 'RSSHub' } = ctx.req.param();

        // require puppeteer utility class and initialise a browser instance
        const browser = await puppeteer();
        // open a new tab
        const page = await browser.newPage();
        // intercept all requests
        await page.setRequestInterception(true);
        // only allow certain types of requests to proceed
        page.on('request', (request) => {
            // in this case, we only allow document requests to proceed
            request.resourceType() === 'document' ? request.continue() : request.abort();
        });
        // visit the target link
        const link = `${baseUrl}/${user}/${repo}/issues`;
        // ofetch requests will be logged automatically
        // but puppeteer requests are not
        // so we need to log them manually
        logger.http(`Requesting ${link}`);
        await page.goto(link, {
            // specify how long to wait for the page to load
            waitUntil: 'domcontentloaded',
        });
        // retrieve the HTML content of the page
        const response = await page.content();
        // close the tab
        page.close();

        const $ = load(response);

        // const item = ...;

        // don't forget to close the browser instance at the end of the function
        browser.close();

        return {
            // Your RSS output here
        };
    },
}
```

### Fetch the Full Text

Retrieving the full articles of each issue using a new browser page is similar to the [previous section](#fetch-the-full-text). We can use the following code:

```ts
import { Route } from '@/types';
import { load } from 'cheerio';
import { parseDate } from '@/utils/parse-date';
import logger from '@/utils/logger';
import puppeteer from '@/utils/puppeteer';
import cache from '@/utils/cache';

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
                    // reuse the browser instance and open a new tab
                    const page = await browser.newPage();
                    // set up request interception to only allow document requests
                    await page.setRequestInterception(true);
                    page.on('request', (request) => {
                        request.resourceType() === 'document' ? request.continue() : request.abort();
                    });

                    logger.http(`Requesting ${item.link}`);
                    await page.goto(item.link, {
                        waitUntil: 'domcontentloaded',
                    });
                    const response = await page.content();
                    // close the tab after retrieving the HTML content
                    page.close();
                    // highlight-end

                    const $ = load(response);

                    item.description = $('.comment-body').first().html();

                    return item;
                })
            )
        );

        // close the browser instance after all requests are done
        browser.close();

        return {
            title: `${user}/${repo} issues`,
            link: `https://github.com/${user}/${repo}/issues`,
            item: items,
        };
    },
};
```

### Additional Resources

Here are some resources you can use to learn more about puppeteer:

-   [puppeteer's current docs](https://pptr.dev)

#### Intercepting requests

When scraping web pages, you may encounter images, fonts, and other resources that you don't need. These resources can slow down the page load time and use up valuable CPU and memory resources. To avoid this, you can enable request interception in puppeteer.

Here's how to do it:

```js
await page.setRequestInterception(true);
page.on('request', (request) => {
    request.resourceType() === 'document' ? request.continue() : request.abort();
});
// These two statements must be placed before page.goto()
```

You can find all the possible values of `request.resourceType()` [here](https://chromedevtools.github.io/devtools-protocol/tot/Network/#type-ResourceType). When using these values in your code, make sure to use **lowercase** letters.

#### Wait Until

In the code above, you'll see that `waitUntil: 'domcontentloaded'` is used in the page.goto() function. This is a Puppeteer option that tells it when to consider a navigation successful. You can find all the possible values and their meanings [here](https://pptr.dev/api/puppeteer.page.goto/#remarks).

It's worth noting that `domcontentloaded`waits for a shorter time than the default value `load`, and `networkidle0` may not be suitable for websites that keep sending background telemetry or fetching data.

Additionally, it's important to avoid waiting for a specific timeout and instead wait for a selector to appear. Waiting for a timeout is inaccurate, as it depends on the load of the Puppeteer instance.
