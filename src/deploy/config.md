# Configuration

Configure RSSHub by setting environment variables

## Network Configuration

`PORT`: listening port, default to `1200`

`SOCKET`: listening Unix Socket, default to `null`

`LISTEN_INADDR_ANY`: open up for external access, default to `1`

`REQUEST_RETRY`: retries allowed for failed requests, default to `2`

`REQUEST_TIMEOUT`: milliseconds to wait for the server to end the response before aborting the request with error, default to `3000`

`UA`: user agent, using random user agent (Chrome on macOS) by default

`NO_RANDOM_UA`: disable random user agent, default to `null`

## CORS Request

RSSHub by default reject CORS requests. This behavior can be modified via setting `ALLOW_ORIGIN: *` or `ALLOW_ORIGIN: www.example.com`.

## Cache Configurations

RSSHub supports two caching methods: memory and redis, it is recommended to use `redis` for persistent caching.

`CACHE_TYPE`: cache type, `memory` or `redis`, empty this value will disable caching, default to `memory`

`CACHE_EXPIRE`: route cache expiry time in seconds, default to `5 * 60`

`CACHE_CONTENT_EXPIRE`: content cache expiry time in seconds, it will be recalculated when it is accessed, default to `1 * 60 * 60`

`REDIS_URL`: Redis target address (invalid when `CACHE_TYPE` is set to memory), default to `redis://localhost:6379/`

`MEMORY_MAX`: maximum number of cached items (invalid when `CACHE_TYPE` is set to redis), default to `256`

## Proxy Configurations

Partial routes have a strict anti-crawler policy, and can be configured to use proxy.

`PROXY_URI`: The proxy URI should be in the format `{protocol}://{host}:{port}`. The protocol only supports http and https. For discussions on socks5 support, refer to [nodejs/undici#2224](https://github.com/nodejs/undici/issues/2224).

`PROXY_AUTH`: Authentication credentials for the proxy server, will add header `Proxy-Authorization: Basic ${PROXY_AUTH}`

`PROXY_URL_REGEX`: Regular expression of URL to enable proxy, all enabled by default `.*`

## Access Control Configurations

RSSHub supports access control using access keys/codes. Enabling it will activate global access control, and lack of access permission will result in denied access.

**Allowlisting/denylisting**

This configuration has been removed. It is recommended to use a proxy server such as Nginx or Cloudflare for access control.

**Access Key/Code**

-   `ACCESS_KEY`: the access key. When set, access via the key directly or the access code described above

Access code is the md5 generated based on the access key + route, eg:

| Access key  | Route             | Generating access code                   | Access code                      |
| ----------- | ----------------- | ---------------------------------------- | -------------------------------- |
| ILoveRSSHub | /qdaily/column/59 | md5('/qdaily/column/59' + 'ILoveRSSHub') | 0f820530128805ffc10351f22b5fd121 |

-   Routes are accessible via `code`, eg: `https://rsshub.app/qdaily/column/59?code=0f820530128805ffc10351f22b5fd121`

-   Or using `key` directly, eg: `https://rsshub.app/qdaily/column/59?key=ILoveRSSHub`

**Healthcheck Configuration**

When `ACCESS_KEY` is enabled, the `healthcheck` endpoint also requires authentication.

For a Docker Compose deployment, you'll need to update the `healthcheck` configuration in your `docker-compose.yml` to include the access key or access code parameter.

The recommended configuration is:

```diff
healthcheck:
-  test: ["CMD", "curl", "-f", "http://localhost:1200/healthz"]
+  test: ["CMD", "curl", "-f", "http://localhost:1200/healthz?key=${ACCESS_KEY}"]
```

## Logging Configurations

`DEBUG_INFO`: display route information on the homepage for debugging purposes. When set to neither `true` nor `false`, use parameter `debug` to enable display, eg: `https://rsshub.app/?debug=value_of_DEBUG_INFO` . Default to `true`

`LOGGER_LEVEL`: specifies the maximum [level](https://github.com/winstonjs/winston#logging-levels) of messages to the console and log file, default to `info`

`NO_LOGFILES`: disable logging to log files, default to `false`

`SHOW_LOGGER_TIMESTAMP`: Show timestamp in log, default to `false`

`SENTRY`: [Sentry](https://sentry.io) dsn, used for error tracking

`HONEYBADGER_API_KEY`: [Honeybadger](https://www.honeybadger.io) API key, used for error tracking

`ERROR_TRACKING_ROUTE_TIMEOUT`: Report to error tracking service (Sentry or Honeybadger) if route execution takes more than this milliseconds, default to `30000` ms. This option is previously named `SENTRY_ROUTE_TIMEOUT`, and the old name is still supported for backward compatibility, but it is recommended to switch to the new name.

## Image Processing

:::tip New Config Format

We are currently testing out a new format, providing end-user with more flexibility. For more info, please refer to [Parameters->Multimedia processing](/guide/parameters#multimedia-processing).

When using our new config, please leave the following environment vairable blank. By default, image hotlink template will be forced when present.

:::

`HOTLINK_TEMPLATE`: replace image URL in the description to avoid anti-hotlink protection, leave it blank to disable this function. Usage reference [#2769](https://github.com/DIYgod/RSSHub/issues/2769). You may use any property listed in [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL#Properties) (suffixing with `_ue` results in URL encoding), format of JS template literal. e.g. `${protocol}//${host}${pathname}`, `https://i3.wp.com/${host}${pathname}`, `https://images.weserv.nl?url=${href_ue}`

`HOTLINK_INCLUDE_PATHS`: limit the routes to be processed, only matched routes will be processed. Set multiple values with comma `,` as delimiter. If not set, all routes will be processed

`HOTLINK_EXCLUDE_PATHS`: exclude routes that do not need to be processed, all matched routes will be ignored. Set multiple values with comma `,` as delimiter. Can be used alone, or to exclude routes that are already included by `HOTLINK_INCLUDE_PATHS`. If not set, no routes will be ignored

:::tip Route matching pattern

`HOTLINK_INCLUDE_PATHS` and `HOTLINK_EXCLUDE_PATHS` match the root path and all recursive sub-paths of the route, but not substrings. Note that the path must start with `/` and end without `/`.

e.g. `/example`, `/example/sub` and `/example/anthoer/sub/route` will be matched by `/example`, but `/example_route` will not be matched.

It is also valid to contain route parameters, e.g. `/weibo/user/2612249974`.

:::

## Features

:::tip Experimental features

Configs in this sections are in beta stage, and **are turn off by default**. Please read corresponded description and turn on if necessary.

:::

`ALLOW_USER_HOTLINK_TEMPLATE`: [Parameters->Multimedia processing](/guide/parameters#multimedia-processing)

`FILTER_REGEX_ENGINE`: Define Regex engine used in [Parameters->filtering](/guide/parameters#filtering). Valid value are `[re2, regexp]`. Default value is `re2`. We suggest public instance should leave this value to default, and this option right now is mainly for backward compatibility.

`ALLOW_USER_SUPPLY_UNSAFE_DOMAIN`: allow users to provide a domain as a parameter to routes that are not in their allow list, respectively. Public instances are suggested to leave this value default, as it may lead to [Server-Side Request Forgery (SSRF)](https://owasp.org/www-community/attacks/Server_Side_Request_Forgery)

## Other Application Configurations

`DISALLOW_ROBOT`: prevent indexing by search engine, default to enable, set false or 0 to disable

`ENABLE_CLUSTER`: enable cluster mode, default to `false`

`NODE_ENV`: display error message on pages for authentication failing, default to `production` (i.e. no display)

`NODE_NAME`: node name, used for load balancing, identify the current node

`PUPPETEER_WS_ENDPOINT`: browser WebSocket endpoint which can be used as an argument to puppeteer.connect, refer to [browserWSEndpoint](https://pptr.dev/api/puppeteer.browser.wsendpoint)

`CHROMIUM_EXECUTABLE_PATH`: path to the Chromium (or Chrome) executable. If puppeteer is not bundled with Chromium (manually skipped downloading or system architecture is arm/arm64), configuring this can effectively enable puppeteer. Or alternatively, if you prefer Chrome to Chromium, this configuration will help. **WARNING**: only effective when `PUPPETEER_WS_ENDPOINT` is not set; only useful for manual deployment, for Docker, please use the `chromium-bundled` image instead.

`TITLE_LENGTH_LIMIT`: limit the length of feed title generated in bytes, an English alphabet counts as 1 byte, the rest such as Chinese, Japanese, Korean or Arabic counts as 2 bytes by design, default to `150`

`OPENAI_API_KEY`: OpenAI API Key, used for using ChatGPT to summarize articles

`OPENAI_MODEL`: OpenAI model name, used for using ChatGPT to summarize articles, default to `gpt-3.5-turbo-16k`, see [OpenAI API reference](https://platform.openai.com/docs/models/overview) for details

`OPENAI_TEMPERATURE`: OpenAI temperature parameter, used for using ChatGPT to summarize articles, default to `0.2`, see [OpenAI API reference](https://platform.openai.com/docs/api-reference/chat/create#chat-create-temperature) for details

`OPENAI_MAX_TOKENS`: OpenAI maximum token number, used for using ChatGPT to summarize articles, default to `null`, see [OpenAI API reference](https://platform.openai.com/docs/api-reference/chat/create#chat-create-max_tokens) for details

`OPENAI_API_ENDPOINT`: OpenAI API URL, used for using ChatGPT to summarize articles, default to `https://api.openai.com/v1`, see [OpenAI API reference](https://platform.openai.com/docs/api-reference/chat) for details

`OPENAI_PROMPT`: OpenAI prompt, used for using ChatGPT to summarize articles, see [OpenAI API reference](https://platform.openai.com/docs/api-reference/chat) for details

`REMOTE_CONFIG`: Remote configuration URL, used for dynamically updating configurations. The address should return a JSON with an environment variable name as the key. It will be loaded and merged with local configurations when the application starts. In case of conflicts with local configurations, remote configurations will take precedence. But please note that some basic configuration items do not support remote retrieval.

## Route-specific Configurations {#route-specific-configurations}

:::tip

Configs here are incomplete.

See docs of the specified route and `lib/config.ts` for detailed information.

:::

### 4399 论坛

-   `GAME_4399`: 对应登录后的 cookie 值，获取方式：
    1.  在 4399 首页登录。
    2.  打开开发者工具，切换到 Network 面板，刷新
    3.  查找`www.4399.com`的访问请求，点击请求，在右侧 Headers 中找到 Cookie.

### bilibili

-   `BILIBILI_COOKIE_{uid}`: 用于用户关注动态系列路由，对应 uid 的 b 站用户登录后的 Cookie 值，`{uid}` 替换为 uid，如 `BILIBILI_COOKIE_2267573`，获取方式：
    1.  打开 [https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new?uid=0&type=8](https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new?uid=0&type=8)
    2.  打开控制台，切换到 Network 面板，刷新
    3.  点击 dynamic_new 请求，找到 Cookie
    4.  视频和专栏，UP 主粉丝及关注只要求 `SESSDATA` 字段，动态需复制整段 Cookie
-   `BILIBILI_DM_IMG_LIST`: 用于获取UP主投稿系列的路由，获取方式：
    1.  打开 [任意UP主个人空间页](https://space.bilibili.com/1)
    2.  打开控制台，切换到 Network 面板，关闭缓存，刷新，鼠标在窗口内不断移动
    3.  使用过滤器找到符合 `https://api.bilibili.com/x/space/wbi/arc/search` 的请求
    4.  复制请求参数中 `dm_img_list` 字段的内容，如 `[{"x":2721,"y":615,"z":0,"timestamp":29,"type":0}]`

### Bitbucket

[Basic auth with App passwords](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#basic-auth)

-   `BITBUCKET_USERNAME`: Your Bitbucket username
-   `BITBUCKET_PASSWORD`: Your Bitbucket app password

### BTBYR

-   `BTBYR_HOST`: 支持 ipv4 访问的 BTBYR 镜像，默认为原站 `https://bt.byr.cn/`。
-   `BTBYR_COOKIE`: 注册用户登录后的 Cookie 值，获取方式：
    1.  登录后打开网站首页
    2.  打开控制台，刷新
    3.  找到 `https://bt.byr.cn/index.php` 请求
    4.  找到请求头中的 Cookie

### BUPT

-   `BUPT_PORTAL_COOKIE`: 登录后获得的 Cookie 值，获取方式
    1.  打开 [https://webapp.bupt.edu.cn/wap/login.html?redirect=https://](https://webapp.bupt.edu.cn/wap/login.html?redirect=https://) 并登录
    2.  无视掉报错，并打开 [https://webapp.bupt.edu.cn/extensions/wap/news/list.html?p-1&type=xnxw](https://webapp.bupt.edu.cn/extensions/wap/news/list.html?p-1&type=xnxw)
    3.  打开控制台，刷新
    4.  找到 `https://webapp.bupt.edu.cn/extensions/wap/news/list.html?p-1&type=xnxw` 请求
    5.  找到请求头中的 Cookie

### Civitai

-   `CIVITAI_COOKIE`: Cookie of Civitai

### Dianping

-   `DIANPING_COOKIE`: 大众点评登录后的 Cookie 值，获取方式：访问 `https://m.dianping.com`，登录，输入 `document.cookie` 获取

### Discord

-   `DISCORD_AUTHORIZATION`: Discord authorization token, can be found in the header of XHR requests after logging in Discord web client

### Discourse

-   `DISCOURSE_CONFIG_{id}`: `id` could be arbitrary number or string, while the value should be the format of `{"link":link,"key":key}`, where:
  -   `link` is the link to the forum.
  -   `key` is the access key for the forum API, which you can refer to [this snippet](https://pastebin.com/YbLCgdWW) to obtain one. Ensure that this key is granted sufficient permission.

### Discuz cookie

-   `DISCUZ_COOKIE_{cid}`: Cookie of a forum powered by Discuz, cid can be anything from 00 to 99. When visiting a Discuz route, use cid to specify this cookie.

### Disqus

[API Key application](https://disqus.com/api/applications/)

-   `DISQUS_API_KEY`: Disqus API

### douban

-   `DOUBAN_COOKIE`: Cookie of douban user

### E-Hentai

-   `EH_IPB_MEMBER_ID`: The value of `ipb_member_id` in the cookie header after logging in E-Hentai
-   `EH_IPB_PASS_HASH`: The value of `ipb_pass_hash` in the cookie header after logging in E-Hentai
-   `EH_SK`: The value of `sk` in the cookie header after logging in E-Hentai
-   `EH_STAR`: The value of `star` in the cookie header if your account has stars. If this value is set, image limit allocation will links to the account rather than IP address
-   `EH_IGNEOUS`: The value of `igneous` in the cookie header after logging in ExHentai. If this value is set, RSS will be generated from ExHentai
-   `EH_IMG_PROXY`: Cover proxy address. If this is set, the link to the cover image will be replaced with this value at the beginning. When using ExHentai, the cover image requires cookies to access it, so you can use this with a cookie-added proxy server to access the cover image without cookies in some readers.

### Fantia

-   `FANTIA_COOKIE`: The `cookie` after login can be obtained by viewing the request header in the console, If not filled in will cause some posts that require login to read to get exceptions

### Gitee

[申请地址](https://gitee.com/api/v5/swagger)

-   `GITEE_ACCESS_TOKEN`: Gitee 私人令牌

### GitHub

[Access Token application](https://github.com/settings/tokens)

-   `GITHUB_ACCESS_TOKEN`: GitHub Access Token

### Google Fonts

[API key application](https://developers.google.com/fonts/docs/developer_api#a_quick_example)

-   `GOOGLE_FONTS_API_KEY`: API key

### Instagram

-   `IG_USERNAME`: Your Instagram username (Private API only)
-   `IG_PASSWORD`: Your Instagram password (Private API only)
-   `IG_PROXY`: Proxy URL for Instagram (Private API only, optional)
-   `IG_COOKIE`: Your Instagram cookie (Cookie only)

Warning: Two Factor Authentication is **not** supported.

### Iwara

-   `IWARA_USERNAME`: username of Iwara User
-   `IWARA_PASSWORD`: password of Iwara User

### Last.fm

-   `LASTFM_API_KEY`: Last.fm API Key


### LightNovel.us

-   `SECURITY_KEY`: security_key in the token，please remove %22，example `{%22security_key%22:%223cXXXX%22}`,only need 3cXXXX

### Email

-   `EMAIL_CONFIG_{email}`: Mail setting, replace `{email}` with the email account, replace `@` and `.` in email account with `_`, e.g. `EMAIL_CONFIG_xxx_gmail_com`. The value is in the format of `password=password&host=server&port=port`, eg:
  -   Linux env: `EMAIL_CONFIG_xxx_qq_com="password=123456&host=imap.qq.com&port=993"`
  -   docker env: `EMAIL_CONFIG_xxx_qq_com=password=123456&host=imap.qq.com&port=993`, please do not include quotations `'`,`"`

-   Note: socks5h proxy is not supported due to the limit of email lib `ImapFlow`

### Mastodon

For user timeline

Apply API at `https://mastodon.example/settings/applications` (replace `mastodon.example`). Scopes `read:search` and `read:statuses` are needed.

-   `MASTODON_API_HOST`: API instance domain, only domain, no `http://` or `https://` protocol header
-   `MASTODON_API_ACCESS_TOKEN`: user access token
-   `MASTODON_API_ACCT_DOMAIN`: acct domain for this instance, i.e. the `domain` in the WebFinger URI `username@domain`. It's usually the same as `MASTODON_API_HOST`.

### Medium

Open the console, copy the cookie (in theory, only uid and sid are required)

-   `MEDIUM_ARTICLE_COOKIE`: Cookie used when requesting the full article, can access the full text of paid content when there is an active Member subscription.
-   `MEDIUM_COOKIE_{username}`: Cookie of the user corresponding to the username, required for personalized recommendation related routes.

### MiniFlux

-   `MINIFLUX_INSTANCE`: The instance used by the user, by default, is the official MiniFlux [paid service address](https://reader.miniflux.app)
-   `MINIFLUX_TOKEN`: User's API key, please log in to the instance used and go to `Settings` -> `API Key` -> `Create a new API key` to obtain.

### Netease Cloud Music Playlists

For playlists and song rankings

-   `NCM_COOKIES`: Cookies after logging into Netease Cloud Music, available via `document.cookie` in the browser console.

### nhentai torrent

[Registration](https://nhentai.net/register/)

-   `NHENTAI_USERNAME`: nhentai username or email
-   `NHENTAI_PASSWORD`: nhentai password

### Notion

-   `NOTION_TOKEN`: Notion Internal Integration Token, Refer to [Notion Official Set Up Flow](https://developers.notion.com/docs/authorization#internal-integration-auth-flow-set-up) to create Token

### pianyuan

[注册地址](https://pianyuan.org)

-   `PIANYUAN_COOKIE`: 对应 cookie 中的 `py_loginauth`, 例：PIANYUAN_COOKIE='py_loginauth=xxxxxxxxxx'

### Pixabay

[Documentation](https://pixabay.com/api/docs/)

-   `PIXABAY_KEY`: Pixabay API key

### pixiv

[Registration](https://accounts.pixiv.net/signup)

-   `PIXIV_REFRESHTOKEN`: Please refer to [this article](https://gist.github.com/ZipFile/c9ebedb224406f4f11845ab700124362) to get a `refresh_token`
-   `PIXIV_BYPASS_CDN`: bypass Cloudflare bot check by directly accessing Pixiv source server, defaults to disable, set `true` or `1` to enable
-   `PIXIV_BYPASS_HOSTNAME`: Pixiv source server hostname or IP address, hostname will be resolved to IPv4 address via `PIXIV_BYPASS_DOH`, defaults to `public-api.secure.pixiv.net`
-   `PIXIV_BYPASS_DOH`: DNS over HTTPS endpoint, it must be compatible with Cloudflare or Google DoH JSON schema, defaults to `https://1.1.1.1/dns-query`
-   `PIXIV_IMG_PROXY`: Used as a proxy for image addresses, as pixiv images have anti-theft, default to `https://i.pixiv.re`

### pixiv fanbox

Get paid content

-   `FANBOX_SESSION_ID`: equals to `FANBOXSESSID` in site cookies.

### Saraba1st

用于获取帖子里的图片

-   `SARABA1ST_COOKIE`: 对应网页端的 Cookie。

### Sci-Hub

For scientific journal routes

-   `SCIHUB_HOST`: The Sci-Hub mirror address that is accessible from your location, default to `https://sci-hub.se`.

### Spotify

[API key registration](https://developer.spotify.com)

-   `SPOTIFY_CLIENT_ID`: Client ID of the application
-   `SPOTIFY_CLIENT_SECRET`: Client secret of the application

For user data related routes

-   `SPOTIFY_REFRESHTOKEN`: The refresh token of the user from the Spotify application. You can obtain it through [spotify-refresh-token](https://alecchen.dev/spotify-refresh-token/) by [alecchendev](https://github.com/alecchendev/spotify-refresh-token).

:::tip

Remember to check `user-top-read` and `user-library-read` in the scope for `Personal Top Items` and `Personal Saved Tracks` respectively.

:::

### Telegram

[Bot application](https://telegram.org/blog/bot-revolution)

-   `TELEGRAM_TOKEN`: Telegram bot token for stickerpack feeds
-   `TELEGRAM_SESSION`: for video, file streaming and some restricted channels, should create your telegram app via `https://my.telegram.org/apps`, get `api_id` and `api_hash` from there, then run `node ./lib/routes/telegram/scripts/get-telegram-session.mjs` in RSSHub root directory to get `TELEGRAM_SESSION`

### Twitter

It is recommended to use a non-important account, new accounts or logins from different regions may be restricted.

-   `TWITTER_USERNAME`: Twitter username
-   `TWITTER_PASSWORD`: Twitter password
-   `TWITTER_PHONE_OR_EMAIL`: Optional, Twitter phone or email
-   `TWITTER_AUTHENTICATION_SECRET`: Optional, Twitter Two-factor authentication -> Authentication app -> Secret part in `otpauth://totp/Twitter:@_RSSHub?secret=xxxxxxxxxxxxxxxx&issuer=Twitter`

### Wordpress

-   `WORDPRESS_CDN`: Proxy HTTP image link with HTTPS link. Consider using:

    | url                                    | backbone     |
    | -------------------------------------- | ------------ |
    | [https://imageproxy.pimg.tw/resize?url=](https://imageproxy.pimg.tw/resize?url=) | akamai       |
    | [https://images.weserv.nl/?url=](https://images.weserv.nl/?url=)         | cloudflare   |
    | [https://pic1.xuehuaimg.com/proxy](https://pic1.xuehuaimg.com/proxy)      | cloudflare   |
    | [https://cors.netnr.workers.dev](https://cors.netnr.workers.dev)       | cloudflare   |
    | [https://netnr-proxy.openode.io](https://netnr-proxy.openode.io)        | digitalocean |

### YouTube

[API Key application](https://console.developers.google.com/)

-   All routes:
  -   `YOUTUBE_KEY`: YouTube API Key, support multiple keys, split them with `,`
  -   `YOUTUBE_VIDEO_EMBED_URL`: Base URL of the YouTube iframe embed player. Defaults to `https://www.youtube-nocookie.com/embed/`.
-   Extra requirements for subscriptions route:
  -   `YOUTUBE_CLIENT_ID`: YouTube API OAuth 2.0 client ID
  -   `YOUTUBE_CLIENT_SECRET`: YouTube API OAuth 2.0 client secret
  -   `YOUTUBE_REFRESH_TOKEN`: YouTube API OAuth 2.0 refresh token. Check [this gist](https://gist.github.com/Kurukshetran/5904e8cb2361623498481f4a9a1338aa) for detailed instructions.

### ZodGame

-   `ZODGAME_COOKIE`: Cookie of ZodGame User

### 北京大学

用于北大未名 BBS 全站十大

-   `PKUBBS_COOKIE`: BBS 注册用户登录后的 Cookie 值，获取方式：
    1.  登录后打开论坛首页
    2.  打开控制台， 刷新
    3.  找到 `https://bbs.pku.edu.cn/v2/home.php` 请求
    4.  找到请求头中的 Cookie

### 滴答清单

-   `DIDA365_USERNAME`: 滴答清单用户名
-   `DIDA365_PASSWORD`: 滴答清单密码

### 豆瓣

用于想看

-   `DOUBAN_COOKIE`: 豆瓣登陆后的 Cookie 值

### 饭否

[申请地址](https://github.com/FanfouAPI/FanFouAPIDoc/wiki/Oauth)

-   `FANFOU_CONSUMER_KEY`: 饭否 Consumer Key
-   `FANFOU_CONSUMER_SECRET`: 饭否 Consumer Secret
-   `FANFOU_USERNAME`: 饭否登录用户名、邮箱、手机号
-   `FANFOU_PASSWORD`: 饭否密码

### 和风天气

[申请地址](https://id.qweather.com/#/register?redirect=https%3A%2F%2Fconsole.qweather.com)

-   `HEFENG_KEY`:API key

### 米游社

-   `MIHOYO_COOKIE`：登录米游社后的 cookie，用于获取用户关注动态时间线。

### 南方周末

用于付费全文

-   `INFZM_COOKIE`: infzm 账户登陆后的 cookie，目前只需要 `passport_session=...` 即可获取全文

### 轻小说文库

-   `WENKU8_COOKIE`: 登陆轻小说文库后的 cookie

### 色花堂

-   `SEHUATANG_COOKIE`: 登陆色花堂后的 cookie 值。

### 微博

用于个人时间线路由

[申请地址](https://open.weibo.com/connect)

-   `WEIBO_APP_KEY`: 微博 App Key
-   `WEIBO_APP_SECRET`: 微博 App Secret
-   `WEIBO_REDIRECT_URL`: 微博登录授权回调地址，默认为 `RSSHub 地址/weibo/timeline/0`，自定义回调地址请确保最后可以转跳到 `RSSHub 地址/weibo/timeline/0?code=xxx`

用于自定义分组

-   `WEIBO_COOKIES`: 用户访问网页微博时所使用的 cookie, 获取方式：
    1.  打开并登录 [https://m.weibo.cn](https://m.weibo.cn) （确保打开页面为手机版，如果强制跳转电脑端可尝试使用可更改 UserAgent 的浏览器插件）
    2.  按下`F12`打开控制台，切换至`Network（网络）`面板
    3.  在该网页切换至任意关注分组，并在面板打开最先捕获到的请求 （该情形下捕获到的请求路径应包含`/feed/group`）
    4.  查看该请求的`Headers（请求头）`, 找到`Cookie`字段并复制内容

### 小宇宙

需要 App 登陆后抓包获取相应数据。

-   `XIAOYUZHOU_ID`: 即数据包中的 `x-jike-device-id`。
-   `XIAOYUZHOU_TOKEN`: 即数据包中的 `x-jike-refresh-token`。

### 新榜

-   `NEWRANK_COOKIE`: 登陆后的 COOKIE 值，其中 token 是必要的，其他可删除

### 喜马拉雅

-   `XIMALAYA_TOKEN`: 对应 cookie 中的 `1&_token`，获取方式：
    1.  登陆喜马拉雅网页版
    2.  打开控制台，刷新
    3.  查找名称为`1&_token`的`cookie`，其内容即为`XIMALAYA_TOKEN`的值（即在`cookie` 中查找 `1&_token=***;`，并设置 `XIMALAYA_TOKEN = ***`）

### 知乎

用于用户关注时间线

-   `ZHIHU_COOKIES`: 知乎登录后的 cookie 值。
    1.  可以在知乎网页版的一些请求的请求头中找到，如 `GET /moments` 请求头中的 `cookie` 值。
