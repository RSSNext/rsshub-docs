# 配置

通过设置环境变量来配置 RSSHub

## 网络配置

`PORT`: 监听端口，默认为 `1200`

`SOCKET`: 监听 Unix Socket，默认 `null`

`LISTEN_INADDR_ANY`: 是否允许公网连接，默认 `1`

`DISABLE_IPV6`: 禁用 IPv6 支持，启用后 RSSHub 将监听 `0.0.0.0` 而非 `::`，默认 `false`

`REQUEST_RETRY`: 请求失败重试次数，默认 `2`

`REQUEST_TIMEOUT`: 请求超时毫秒数，默认 `3000`

`REQUEST_AUTO_SELECT_FAMILY`: 控制 RSSHub 在 Node 中的默认 dispatcher 和指定 TLS 版本的 agent 建立出站连接时，是否自动选择地址族。不设置时保留 Node 默认行为。`true` 允许 Node 自动尝试 IPv4 和 IPv6 地址；`false` 关闭自动地址族选择，但不会强制使用 IPv4。此配置不用于 Worker，也不会改变 RSSHub 的监听地址。

`REQUEST_RATE_LIMITS`: 按精确主机名配置出站请求限速的 JSON 对象，默认 `{}`。每个策略包含 `points`（正整数，请求次数）和 `duration`（正数，单位为秒）。例如 `{"api.example.com":{"points":2,"duration":1}}` 会让请求至少间隔 0.5 秒开始执行，超过速率的请求进入队列。子域名需要单独配置。限速状态仅在各 Node 进程或 Worker isolate 内共享，不协调多个实例。原有的 Node 全局每秒 10 次出站请求限制继续生效。仅经过 RSSHub fetch 封装的请求受此配置控制，浏览器会话内部发出的请求不受影响。

`UA`: 用户代理，默认为随机用户代理用户代理（macOS 上的 Chrome）

`NO_RANDOM_UA`: 是否禁用随机用户代理，默认 `null`

## 跨域请求

RSSHub 默认对跨域请求限制为当前连接所在的域名，即不允许跨域。可以通过 `ALLOW_ORIGIN: *` 或者 `ALLOW_ORIGIN: www.example.com` 以对跨域访问进行修改。

## 缓存配置

RSSHub 支持 `memory` 和 `redis` 两种缓存方式，建议使用 `redis` 以持久化缓存。

`CACHE_TYPE`: 缓存类型，可为 `memory` 和 `redis`，设为空可以禁止缓存，默认为 `memory`

`CACHE_EXPIRE`: 路由缓存过期时间，单位为秒，默认 `5 * 60`

`CACHE_CONTENT_EXPIRE`: 内容缓存过期时间，每次访问会重新计算过期时间，单位为秒，默认 `1 * 60 * 60`

`REDIS_URL`: Redis 连接地址（redis 缓存类型时有效），默认为 `redis://localhost:6379/`

`MEMORY_MAX`: 最大缓存数量（memory 缓存类型时有效），默认 `256`

## 代理配置

部分路由反爬严格，可以配置使用代理抓取。

`PROXY_URI`: 代理 URI，格式为 `{protocol}://{host}:{port}`，protocol 支持 `http`, `https`, `socks` 和 `socks5`，不支持 `socks4`, `socks4a` 和 `socks5h`。`socks` 和 `socks5` 会通过代理解析 DNS，即行为等同于 `socks5h`

`PROXY_AUTH`: 给代理服务器的身份验证凭证，会添加 header `Proxy-Authorization: Basic ${PROXY_AUTH}`

`PROXY_URL_REGEX`: 启用代理的 URL 正则表达式，默认全部开启 `.*`

## 访问控制配置

RSSHub 支持使用访问密钥 / 码进行访问控制。开启将会激活全局访问控制，没有访问权限将会导致访问被拒绝。

**允许清单/拒绝清单**

建议使用类似 Nginx 或 Cloudflare 的代理服务器进行访问控制。

**访问密钥 / 码**

-   `ACCESS_KEY`: 访问密钥，用于直接访问所有路由或者生成访问码

访问码为 访问密钥 + 路由 共同生成的 md5，例如：

| 访问密钥    | 路由              | 生成过程                                 | 访问码                           |
| ----------- | ----------------- | ---------------------------------------- | -------------------------------- |
| ILoveRSSHub | /qdaily/column/59 | md5('/qdaily/column/59' + 'ILoveRSSHub') | 0f820530128805ffc10351f22b5fd121 |

-   此时可以通过 `code` 访问路由，例如：`https://rsshub.app/qdaily/column/59?code=0f820530128805ffc10351f22b5fd121`

-   或使用访问密钥 `key` 直接访问所有路由，例如：`https://rsshub.app/qdaily/column/59?key=ILoveRSSHub`

**Healthcheck 配置**

当启用 `ACCESS_KEY` 时，`healthcheck` 端点也需要进行身份验证。

对于 Docker Compose 部署，你需要在 `docker-compose.yml` 中更新 `healthcheck` 配置以包含访问密钥或访问码参数。

推荐的配置如下：

```diff
healthcheck:
-  test: ["CMD", "curl", "-f", "http://localhost:1200/healthz"]
+  test: ["CMD", "curl", "-f", "http://localhost:1200/healthz?key=${ACCESS_KEY}"]
```

## 日志配置

`DEBUG_INFO`: 是否在首页显示路由信息。值为非 `true` `false` 时，在请求中带上参数 `debug` 开启显示，例如：`https://rsshub.app/?debug=value_of_DEBUG_INFO` 。默认 `true`

`LOGGER_LEVEL`: 指明输出到 console 和日志文件的日志的最大 [等级](https://github.com/winstonjs/winston#logging-levels)，默认 `info`

`NO_LOGFILES`: 是否禁用日志文件输出，默认 `false`

`SHOW_LOGGER_TIMESTAMP`: 在控制台输出中显示日志时间戳，默认 `false`

`SENTRY`: [Sentry](https://sentry.io) dsn，用于错误追踪

`HONEYBADGER_API_KEY`: [Honeybadger](https://www.honeybadger.io) API key，用于错误追踪

`ERROR_TRACKING_ROUTE_TIMEOUT`: 路由耗时超过此毫秒值上报错误追踪服务（Sentry 或 Honeybadger），默认 `30000` 毫秒。此选项之前命名为 `SENTRY_ROUTE_TIMEOUT`，旧名称仍然支持以保持向后兼容，但建议切换到新名称。

## 图片处理

:::tip 新配置方式

我们正在试验新的，更灵活的配置方式。如果有需要，请转到 [通用参数 -> 多媒体处理](/zh/guide/parameters#tong-yong-can-shu-duo-mei-ti-chu-li) 了解更多。

在使用新配置时，请将下方环境变量留空。否则默认图片模版会继续遵循下方配置。

:::

`HOTLINK_TEMPLATE`: 用于处理描述中图片的 URL，绕过防盗链等限制，留空不生效。用法参考 [#2769](https://github.com/DIYgod/RSSHub/issues/2769)。可以使用 [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL#Properties) 的所有属性（加上后缀 `_ue` 则会对其进行 URL 编码），格式为 JS 变量模板。例子：`${protocol}//${host}${pathname}`, `https://i3.wp.com/${host}${pathname}`, `https://images.weserv.nl?url=${href_ue}`

`HOTLINK_INCLUDE_PATHS`: 限制需要处理的路由，只有匹配成功的路由会被处理，设置多项时用英文逗号 `,` 隔开。若不设置，则所有路由都将被处理

`HOTLINK_EXCLUDE_PATHS`: 排除不需处理的路由，所有匹配成功的路由都不被处理，设置多项时用英文逗号 `,` 隔开。可单独使用，也可用于排除已被前者包含的路由。若不设置，则没有任何路由会被过滤

:::tip 路由匹配模式

`HOTLINK_INCLUDE_PATHS` 和 `HOTLINK_EXCLUDE_PATHS` 均匹配路由根路径及其所有递归子路径，但并非子字符串匹配。注意必须以 `/` 开头，且结尾不需要 `/`。

例：`/example`, `/example/sub` 和 `/example/anthoer/sub/route` 均可被 `/example` 匹配，但 `/example_route` 不会被匹配。

也可带有路由参数，如 `/weibo/user/2612249974` 也是合法的。

:::

## 功能特性

:::tip 测试特性

这个板块控制的是一些新特性的选项，他们都是**默认关闭**的。如果有需要请阅读对应说明后按需开启

:::

`ALLOW_USER_HOTLINK_TEMPLATE`: [通用参数 -> 多媒体处理](/zh/guide/parameters#tong-yong-can-shu-duo-mei-ti-chu-li)特性控制

`FILTER_REGEX_ENGINE`: 控制 [通用参数 -> 内容过滤](/zh/guide/parameters#tong-yong-can-shu-nei-rong-guo-lv) 使用的正则引擎。可选`[re2, regexp]`，默认`re2`。我们推荐公开实例不要调整这个选项，这个选项目前主要用于向后兼容。

`ALLOW_USER_SUPPLY_UNSAFE_DOMAIN`: 允许用户为路由提供域名作为参数。建议公共实例不要调整此选项，开启后可能会导致 [服务端请求伪造（SSRF）](https://owasp.org/www-community/attacks/Server_Side_Request_Forgery)

## 其他应用配置

`DISALLOW_ROBOT`: 阻止搜索引擎收录，默认开启，设置 false 或 0 关闭

`ENABLE_CLUSTER`: 是否开启集群模式，默认 `false`

`NODE_ENV`: 是否显示错误输出，默认 `production` （即关闭输出）

`NODE_NAME`: 节点名，用于负载均衡，识别当前节点

`USER_ROUTES_PATH`: 私有路由模块目录，默认不设置。支持 Node 和 Docker 部署。目录中放置导出 `namespace` 和 `routes` 的独立 `.mjs` ES 模块；模块在启动时加载，修改后需要重启。私有命名空间不能覆盖内置命名空间。设置此变量本身不会启用访问保护，需要时应另行配置 `ACCESS_KEY` 或保护实例。模块格式和挂载方式见 [私有路由](/zh/deploy#private-routes)。

`PLAYWRIGHT_WS_ENDPOINT`: 使用 [Playwright 协议](https://playwright.dev/docs/api/class-browsertype#browser-type-connect)的远程浏览器 WebSocket 地址，服务端需要使用兼容的 Playwright 版本。不要将 Chromium CDP 地址填入此配置。不设置 `PLAYWRIGHT_WS_ENDPOINT` 时，仍支持以 `PUPPETEER_WS_ENDPOINT` 作为兼容别名。

`PLAYWRIGHT_CDP_ENDPOINT`: Node 部署使用的 Chromium [Chrome DevTools Protocol 地址](https://playwright.dev/docs/api/class-browsertype#browser-type-connect-over-cdp)。Docker Compose 的 Browserless V2 服务使用 `ws://browserless:3000?token=<token>`，其中 token 必须与 Browserless 服务的 `TOKEN` 一致。在 Node 中，此配置优先于 `PLAYWRIGHT_WS_ENDPOINT` 和本地启动的浏览器。Worker 使用 `PLAYWRIGHT_WS_ENDPOINT` 或 Browser Run 绑定。

`CHROMIUM_EXECUTABLE_PATH`: Playwright 启动本地 Chromium 或 Chrome 时使用的可执行文件路径。只有在未配置 CDP 或 WebSocket 地址时生效。Docker 部署使用本地浏览器时，可选择 `chromium-bundled` 镜像。

`TITLE_LENGTH_LIMIT`: 限制输出标题的字节长度，一个英文字符的长度为 1 字节，部分语言如中文，日文，韩文或阿拉伯文等，统一算作 2 字节，默认 `150`

`FORMAT`: [输出格式](/zh/guide/parameters#tong-yong-can-shu-shu-chu-ge-shi)，默认 `rss`；如果订阅地址中指定了 `format` 参数，将覆盖此设置

`OPENAI_API_KEY`: OpenAI API Key，用于使用 ChatGPT 总结文章

`OPENAI_MODEL`: OpenAI 模型名称，用于使用 ChatGPT 总结文章，默认`gpt-3.5-turbo-16k`，详见 [OpenAI API 文档](https://platform.openai.com/docs/models/overview)

`OPENAI_TEMPERATURE`: OpenAI 温度参数，用于使用 ChatGPT 总结文章，默认`0.2`，详见 [OpenAI API 文档](https://platform.openai.com/docs/api-reference/chat/create#chat-create-temperature)

`OPENAI_MAX_TOKENS`: OpenAI 最大 token 数，用于使用 ChatGPT 总结文章，默认`null`，详见 [OpenAI API 文档](https://platform.openai.com/docs/api-reference/chat/create#chat-create-max_tokens)

`OPENAI_API_ENDPOINT`: OpenAI API 地址，用于使用 ChatGPT 总结文章，默认`https://api.openai.com/v1`，详见 [OpenAI API 文档](https://platform.openai.com/docs/api-reference/chat)

`OPENAI_PROMPT`: OpenAI 提示语，用于使用 ChatGPT 总结文章，详见 [OpenAI API 文档](https://platform.openai.com/docs/api-reference/chat)

`REMOTE_CONFIG`: 远程配置地址，用于动态更新配置，地址应返回一个环境变量名作为 key 的 JSON，会在应用启动时加载并合并本地配置，与本地配置冲突时以远程配置为准，但请注意部分基础配置项不支持从远程获取

## 部分 RSS 模块配置

:::tip

此处信息不完整。完整配置请参考路由对应的文档和 `lib/config.ts`。

:::

### 4399 论坛

-   `GAME_4399`: 对应登录后的 cookie 值，获取方式：
    1.  在 4399 首页登录。
    2.  打开开发者工具，切换到 Network 面板，刷新
    3.  查找`www.4399.com`的访问请求，点击请求，在右侧 Headers 中找到 Cookie.

### bilibili

用于用户关注动态系列路由

-   `BILIBILI_COOKIE_{uid}`: 对应 uid 的 b 站用户登录后的 Cookie 值，`{uid}` 替换为 uid，如 `BILIBILI_COOKIE_2267573`，获取方式：
    1.  打开 [https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new?uid=0&type=8](https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new?uid=0&type=8)
    2.  打开控制台，切换到 Network 面板，刷新
    3.  点击 dynamic_new 请求，找到 Cookie
    4.  视频和专栏，UP 主粉丝及关注只要求 `SESSDATA` 字段，动态需复制整段 Cookie（删掉 `bili_ticket` 和 `bili_ticket_expires` 字段来延长有效期）

### Bitbucket

[Basic auth with App passwords](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#basic-auth)

-   `BITBUCKET_USERNAME`: 你的 Bitbucket 用户名
-   `BITBUCKET_PASSWORD`: 你的 Bitbucket 密码

### BTBYR

-   `BTBYR_HOST`: 支持 ipv4 访问的 BTBYR 镜像，默认为原站 `https://bt.byr.cn/`。
-   `BTBYR_COOKIE`: 注册用户登录后的 Cookie 值，获取方式：
    1.  登录后打开网站首页
    2.  打开控制台，刷新
    3.  找到 `https://bt.byr.cn/index.php` 请求
    4.  找到请求头中的 Cookie

### BUPT

-   `BUPT_PORTAL_COOKIE`: 登录后获得的 Cookie 值，获取方式
    1.  打开 [https://webapp.bupt.edu.cn/wap/login.html?redirect=https://](https://webapp.bupt.edu.cn/wap/login.html?redirect=https://)>并登录
    2.  无视掉报错，并打开 [https://webapp.bupt.edu.cn/extensions/wap/news/list.html?p-1&type=xnxw](https://webapp.bupt.edu.cn/extensions/wap/news/list.html?p-1&type=xnxw)
    3.  打开控制台，刷新
    4.  找到 `https://webapp.bupt.edu.cn/extensions/wap/news/list.html?p-1&type=xnxw` 请求
    5.  找到请求头中的 Cookie

### Ci-en

-   `CI_EN_COOKIE`: 可选的 Ci-en 登录账号 Cookie 请求头值，用于 `/dlsite/ci-en/:id/article`。列表和详情请求使用同一 Cookie，详情缓存按 Cookie 值隔离。不设置时读取公开文章；订阅者文章仍受该账号和已订阅方案的访问权限限制。

### Civitai

-   `CIVITAI_COOKIE`: Civitai 登录后的 cookie 值

### Discourse

-   `DISCOURSE_CONFIG_{id}`: 一个 Discourse 驱动的论坛的配置信息， `id` 可自由设定为任意数字或字符串。值应形如`{"link":link,"key":key}`。其中：
  -   `link`：论坛的链接。
  -   `key`访问论坛 API 的密钥，可参考 [此处代码](https://pastebin.com/YbLCgdWW) 以获取。需要确保有足够权限访问对应资源。

### Discuz

-   `DISCUZ_COOKIE_{cid}`: 某 Discuz 驱动的论坛，用户注册后的 Cookie 值，cid 可自由设定，取值范围 \[00, 99], 使用 discuz 通用路由时，通过指定 cid 来调用该 cookie

### Disqus

[申请地址](https://disqus.com/api/applications/)

-   `DISQUS_API_KEY`: Disqus API

### E-Hentai

-   `EH_IPB_MEMBER_ID`: E-Hentai 账户登录后 cookie 的 `ipb_member_id` 值
-   `EH_IPB_PASS_HASH`: E-Hentai 账户登录后 cookie 的 `ipb_pass_hash` 值
-   `EH_SK`: E-Hentai 账户登录后 cookie 中的`sk`值
-   `EH_IGNEOUS`: ExHentai 账户登录后 cookie 中的`igneous`值。若设置此值，RSS 数据将全部从里站获取
-   `EH_STAR`: E-Hentai 账户获得捐赠等级后将出现该 cookie。若设置此值，图片访问量限制将与账号关联而非 IP 地址
-   `EH_IMG_PROXY`: 封面代理访问地址。若设置此值，封面图链接将被替换为以此值开头。使用 ExHentai 时，封面图需要有 Cookie 才能访问，在一些阅读软件上没法显示封面，可以使用此值搭配一个加 Cookie 的代理服务器实现阅读软件无 Cookie 获取封面图。

### Fantia

-   `FANTIA_COOKIE`: 登录后的 `cookie` , 可以在控制台中查看请求头获取。如果不填会导致部分需要登录后才能阅读的帖子获取异常

### Gitee

[申请地址](https://gitee.com/api/v5/swagger)

-   `GITEE_ACCESS_TOKEN`: Gitee 私人令牌

### GitHub

[申请地址](https://github.com/settings/tokens)

-   `GITHUB_ACCESS_TOKEN`: GitHub Access Token

### Google Fonts

[申请地址](https://developers.google.com/fonts/docs/developer_api#a_quick_example)

-   `GOOGLE_FONTS_API_KEY`: API key

### Instagram

-   `INSTAGRAM_COOKIE`: Instagram 登录后的 Cookie，只需要 `sessionid` 和 `ds_user_id` 两项。公开主页可不填，快拍、精选快拍、话题标签和私密主页必填。仍兼容 `IG_COOKIE` 作为回退。

### Iwara

-   `IWARA_USERNAME`: Iwara 用户名
-   `IWARA_PASSWORD`: Iwara 密码

### Last.fm

[申请地址](https://www.last.fm/api/)

-   `LASTFM_API_KEY`: Last.fm API Key

### LightNovel.us

-   `SECURITY_KEY`: 在token中security_key的值，请去除%22，例如`{%22security_key%22:%223cXXXX%22}`,只需要3cXXXX部分

### Mastodon

用户时间线路由：访问 `https://mastodon.example/settings/applications` 申请（替换掉 `mastodon.example`）。需要 `read:search` 和 `read:statuses` 权限。

-   `MASTODON_API_HOST`: API 请求的实例，仅域名，不包括 `http://` 或 `https://` 协议头
-   `MASTODON_API_ACCESS_TOKEN`: 用户 access token, 申请应用后，在应用配置页可以看到申请者的 access token
-   `MASTODON_API_ACCT_DOMAIN`: 该实例本地用户 acct 标识的域名，即 WebFinger URI `username@domain` 中的 `domain`，一般和 `MASTODON_API_HOST` 相同

### Medium

打开控制台，复制 Cookie（理论上只需要 uid 和 sid 即可）

-   `MEDIUM_ARTICLE_COOKIE`：请求全文时使用的 Cookie，存在活跃的 Member 订阅时可获取付费内容全文
-   `MEDIUM_COOKIE_{username}`：对应 username 的用户的 Cookie，个性推荐相关路由需要

### MiniFlux

-   `MINIFLUX_INSTANCE`： 用户所用的实例，默认为 MiniFlux 官方提供的 [付费服务地址](https://reader.miniflux.app)
-   `MINIFLUX_TOKEN`: 用户的 API 密钥，请登录所用实例后于 `设置` -> `API 密钥` -> `创建一个新的 API 密钥` 处获取

### NGA BBS

用于获取帖子内文

-   `NGA_PASSPORT_UID`: 对应 cookie 中的 `ngaPassportUid`.
-   `NGA_PASSPORT_CID`: 对应 cookie 中的 `ngaPassportCid`.

### nhentai torrent

[注册地址](https://nhentai.net/register/)

-   `NHENTAI_USERNAME`: nhentai 用户名或邮箱
-   `NHENTAI_PASSWORD`: nhentai 密码

### Notion

-   `NOTION_TOKEN`: Notion 内部集成 Token，请按照 [Notion 官方指引](https://developers.notion.com/docs/authorization#internal-integration-auth-flow-set-up) 申请 Token

### pianyuan

[注册地址](https://pianyuan.org)

-   `PIANYUAN_COOKIE`: 对应 cookie 中的 `py_loginauth`, 例：PIANYUAN_COOKIE='py_loginauth=xxxxxxxxxx'

### pixiv

[注册地址](https://accounts.pixiv.net/signup)

-   `PIXIV_REFRESHTOKEN`: Pixiv Refresh Token, 请参考 [此文](https://gist.github.com/ZipFile/c9ebedb224406f4f11845ab700124362) 获取，或自行对客户端抓包获取
-   `PIXIV_BYPASS_CDN`: 绕过 Pixiv 前置的 Cloudflare CDN, 使用`PIXIV_BYPASS_HOSTNAME`指示的 IP 地址访问 Pixiv API, 可以解决因 Cloudflare 机器人验证导致的登录失败问题，默认关闭，设置 true 或 1 开启
-   `PIXIV_BYPASS_HOSTNAME`: Pixiv 源站的主机名或 IP 地址，主机名会被解析为 IPv4 地址，默认为`public-api.secure.pixiv.net`；仅在`PIXIV_BYPASS_CDN`开启时生效
-   `PIXIV_BYPASS_DOH`: 用于解析 `PIXIV_BYPASS_HOSTNAME` 的 DoH 端点 URL，需要兼容 Cloudflare 或 Google 的 DoH 服务的 JSON 查询格式，默认为 `https://1.1.1.1/dns-query`
-   `PIXIV_IMG_PROXY`: 用于图片地址的代理，因为 pixiv 图片有防盗链，默认为 `https://i.pixiv.re`

### pixiv fanbox

用于获取付费内容

-   `FANBOX_SESSION_ID`: 对应 cookies 中的`FANBOXSESSID`。

### Saraba1st

用于获取帖子里的图片

-   `SARABA1ST_COOKIE`: 对应网页端的 Cookie。

### Sci-Hub

用于科学期刊路由。

-   `SCIHUB_HOST`: 可访问的 sci-hub 镜像地址，默认为 `https://sci-hub.se`。

### Spotify

[注册地址](https://developer.spotify.com)

-   `SPOTIFY_CLIENT_ID`: Spotify 应用的 client ID
-   `SPOTIFY_CLIENT_SECRET`: Spotify 应用的 client secret

用户相关路由

-   `SPOTIFY_REFRESHTOKEN`：用户在此 Spotify 应用的 refresh token。可以利用 [alecchendev](https://github.com/alecchendev/spotify-refresh-token) 制作的 [spotify-refresh-token](https://alecchen.dev/spotify-refresh-token/) 获取。

:::tip

记得为 `Personal Top Items` 或 `Personal Saved Tracks` 分别勾选 `user-top-read` 或 `user-library-read` scope。

:::

### Telegram

贴纸包路由：[Telegram 机器人](https://telegram.org/blog/bot-revolution)

-   `TELEGRAM_TOKEN`: Telegram 机器人 token
-   `TELEGRAM_SESSION`: 可通过运行 `node lib/routes/telegram/tglib/client.js`

### Twitter

建议使用非重要账号，新账号或者不同地区登录可能会被限制登录

-   `TWITTER_USERNAME`: Twitter 用户名
-   `TWITTER_PASSWORD`: Twitter 密码
-   `TWITTER_PHONE_OR_EMAIL`: 可选，Twitter 手机号码或电子邮件地址
-   `TWITTER_AUTHENTICATION_SECRET`: 可选，Twitter 两步验证 -> 认证应用 -> `otpauth://totp/Twitter:@_RSSHub?secret=xxxxxxxxxxxxxxxx&issuer=Twitter` 中的 secret 部分

### Wordpress

-   `WORDPRESS_ALLOWED_DOMAINS`: WordPress 路由允许访问的精确主机名列表，以英文逗号分隔，例如 `wordpress.org,blog.example.com`。默认列表为空，可在保持 `ALLOW_USER_SUPPLY_UNSAFE_DOMAIN` 关闭时使用这些站点。配置项会去除首尾空格，匹配时不区分大小写。只填写主机名，不带协议、端口、路径或通配符；各子域名需要单独列出。若开启 `ALLOW_USER_SUPPLY_UNSAFE_DOMAIN`，则允许任意 WordPress 主机名。
-   `WORDPRESS_CDN`: 用于中转 http 图片链接。可供考虑的服务见下表：

    | url                                                                              | backbone     |
    | -------------------------------------------------------------------------------- | ------------ |
    | [https://imageproxy.pimg.tw/resize?url=](https://imageproxy.pimg.tw/resize?url=) | akamai       |
    | [https://images.weserv.nl/?url=](https://images.weserv.nl/?url=)         | cloudflare   |
    | [https://pic1.xuehuaimg.com/proxy](https://pic1.xuehuaimg.com/proxy)      | cloudflare   |
    | [https://cors.netnr.workers.dev](https://cors.netnr.workers.dev)       | cloudflare   |
    | [https://netnr-proxy.openode.io](https://netnr-proxy.openode.io)        | digitalocean |

### YouTube

[申请地址](https://console.developers.google.com/)

-   全部路由
  -   `YOUTUBE_KEY`: YouTube API Key，支持多个 key，用英文逗号 `,` 隔开
  -   `YOUTUBE_VIDEO_EMBED_URL`: YouTube iframe 播放器嵌入链接的基础地址。默认值为 `https://www.youtube-nocookie.com/embed/`。
-   订阅列表路由额外设置
  -   `YOUTUBE_CLIENT_ID`: YouTube API 的 OAuth 2.0 客户端 ID
  -   `YOUTUBE_CLIENT_SECRET`: YouTube API 的 OAuth 2.0 客户端 Secret
  -   `YOUTUBE_REFRESH_TOKEN`: YouTube API 的 OAuth 2.0 客户端 Refresh Token。可以按照 [此 gist](https://gist.github.com/Kurukshetran/5904e8cb2361623498481f4a9a1338aa) 获取。

### ZodGame

-   `ZODGAME_COOKIE`: ZodGame 登录后的 Cookie 值

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

### 抖音

`/douyin/live/:rid/:showTime?` 默认保留现有标题。将 `showTime` 设为 `1` 或 `true`，可在标题后添加 RSSHub 本场首次检测时间（UTC+8）。这是检测时间，并非源站实际开播时间，也不会写入 `pubDate`。记录按本场真实 room ID 缓存 30 天，读取不延长有效期；清除缓存或重启使用内存缓存的实例会重置记录，使用 Redis 可跨重启保留。

-   `DOUYIN_COOKIE`: 本人登录抖音网页版后的请求头 Cookie。`/douyin/likes/self` 和 `/douyin/collection` 必须配置；`/douyin/likes/:uid` 的喜欢列表必须对当前账号可见。路由只读取首屏，使用视频原始发布时间，抖音没有提供点赞或收藏时间。请在具有访问控制的实例上配置，会话过期后更新 Cookie。

    获取方法：登录 [抖音网页版](https://www.douyin.com)，打开浏览器 Network 面板，切换到喜欢或收藏的视频标签，复制对应 `aweme/favorite` 或 `aweme/listcollection` 请求头中的 `Cookie`。不要将 Cookie 放入订阅地址。收藏路由仅涵盖收藏的视频，暂不涵盖收藏夹、音乐、合集及短剧。

### 豆瓣

-   `DOUBAN_COOKIE`: 本人登录豆瓣后的 Cookie，用于个人列表和需要登录的小组帖子；公开帖子可不配置。账号必须具有查看对应内容的权限。

`/douban/group/topic/:id/:author?` 订阅主帖和首屏回复。`author` 默认为 `all`，填写 `author` 时使用源站的“只看楼主”页面。主帖标题或正文变化会生成新 GUID，回复保留源站创建日期。源站回复按从早到晚排序，长帖后续页面的新回复暂不覆盖。

用户广播和话题会将源详情页明确显示的 IP 属地放入分类：作者为 `IP属地：…`，首屏回帖为 `回帖IP属地：…`。可使用通用参数筛选，例如 `filter_category=^IP属地：广东$`。个人资料所在地不作为 IP 属地；仅登录可见的详情需要 `DOUBAN_COOKIE`，源站没有提供的字段会省略。

### 雪球

`/xueqiu/column/:id` 的专栏页面和内容接口也会使用已配置的 Cookie。未配置时尝试匿名访客会话；如果源站对访客隐藏文章，需要配置能查看该专栏的登录账号。

-   `XUEQIU_COOKIES`: 本人登录[雪球](https://xueqiu.com)后的请求头 Cookie。`/xueqiu/user_stock/:id` 必须配置，`/xueqiu/snb/:id` 会使用已配置的 Cookie。账号必须能在源站查看对应自选列表或组合。会话失效时需要更新 Cookie；无法访问的数据会明确报错，不会作为正常空订阅返回。

### 饭否

[申请地址](https://github.com/FanfouAPI/FanFouAPIDoc/wiki/Oauth)

-   `FANFOU_CONSUMER_KEY`: 饭否 Consumer Key
-   `FANFOU_CONSUMER_SECRET`: 饭否 Consumer Secret
-   `FANFOU_USERNAME`: 饭否登录用户名、邮箱、手机号
-   `FANFOU_PASSWORD`: 饭否密码

### 和风天气

[申请地址](https://id.qweather.com/#/register?redirect=https%3A%2F%2Fconsole.qweather.com)

-   `HEFENG_KEY`:API key

### 今日热榜

-   `TOPHUB_COOKIE`: 今日热榜登录后的 cookie，目前只需要 `itc_center_user=...` 以获取原始链接

### 米游社

-   `MIHOYO_COOKIE`：登录米游社后的 cookie，用于获取用户关注动态时间线。

### 南方周末

付费全文

-   `INFZM_COOKIE`: infzm 账户登陆后的 cookie，目前只需要 `passport_session=...` 即可获取全文

### 轻小说文库

-   `WENKU8_COOKIE`: 登陆轻小说文库后的 cookie

### 色花堂

-   `SEHUATANG_COOKIE`: 登陆色花堂后的 cookie 值。

### 邮箱 邮件列表路由

-   `EMAIL_CONFIG_{email}`: 邮箱设置，替换 `{email}` 为 邮箱账号，邮件账户的 `@` 与 `.` 替换为 `_`，例如 `EMAIL_CONFIG_xxx_qq_com`。Linux 内容格式为 `password=密码&host=服务器&port=端口`，docker 内容格式为 `password=密码&host=服务器&port=端口`，例如：
  -   Linux 环境变量：`EMAIL_CONFIG_xxx_qq_com="password=123456&host=imap.qq.com&port=993"`
  -   docker 环境变量：`EMAIL_CONFIG_xxx_qq_com=password=123456&host=imap.qq.com&port=993`，请勿添加引号 `'`，`"`。

-   注意：邮箱的路由不支持使用 socks5h 的代理，主要是受 `ImapFlow` 这个第三方库的限制，使用的时候需要注意。

### 网易云歌单

用于歌单及听歌排行

-   `NCM_COOKIES`: 网易云音乐登陆后的 cookie 值，可在浏览器控制台通过`document.cookie`获取。

### 微博

用于个人时间线路由

[申请地址](https://open.weibo.com/connect)

-   `WEIBO_APP_KEY`: 微博 App Key
-   `WEIBO_APP_SECRET`: 微博 App Secret
-   `WEIBO_REDIRECT_URL`: 微博 OAuth 授权回调地址，默认为 `<RSSHub 请求来源>/weibo/timeline/0`。自定义回调必须将 OAuth 返回的 `code` 和 `state` 两个查询参数原样转发至 `<RSSHub 地址>/weibo/timeline/0?code=<oauth-code>&state=<returned-state>`。

    开启 `ACCESS_KEY` 后，先使用有效的 RSSHub `key` 或访问 `code` 打开所需时间线路由来发起授权。RSSHub 会生成十分钟内有效的一次性 `state`，回调时消费该状态，并转跳到带有对应路由访问码的最终订阅地址。此流程需要可用的 memory 或 Redis 缓存，HTTP 和 KV 缓存不支持受保护的回调流程。状态过期或已经使用时，需要重新发起授权。配置的 `WEIBO_REDIRECT_URL` 不得包含 RSSHub 的 `key` 或访问 `code` 参数；应保留微博实际返回的 OAuth `code` 和 `state`。

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

### 知乎用户

用于用户关注时间线

-   `ZHIHU_COOKIES`: 知乎登录后的 cookie 值。
    1.  可以在知乎网页版的一些请求的请求头中找到，如 `GET /moments` 请求头中的 `cookie` 值。
