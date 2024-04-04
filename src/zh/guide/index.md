# 开始食用

## 生成订阅源

比如你希望订阅 Telegram 上 [@awesomeRSSHub](https://t.me/awesomeRSSHub) 频道的内容

根据 [Telegram 路由](/zh/routes/social-media#telegram)的文档，路由为 `/telegram/channel/:username/:routeParams?`，其中 username 为必选参数，routeParams 为可选参数，把 `:username` 替换为频道 id awesomeRSSHub，得到路径为 `/telegram/channel/awesomeRSSHub`，再加上实例域名 `https://rsshub.app`，一个订阅源就生成了：`https://rsshub.app/telegram/channel/awesomeRSSHub`

然后你可以把 `https://rsshub.app/telegram/channel/awesomeRSSHub` 添加到任意 RSS 阅读器里来使用

其中实例域名 `https://rsshub.app` 可以替换为你[自部署](/zh/deploy/)或任意[公共实例](/zh/guide/instances)的域名

另外 RSSHub 支持很多实用的参数，比如内容过滤、全文输出等，可以在 [通用参数](/zh/guide/parameters) 文档了解具体使用方法

## 编写订阅源

RSSHub 的发展离不开社区的力量，欢迎编写你感兴趣的订阅源：[开发路由](/zh/joinus/#quick-start)

## 作为 npm 包使用 <Badge type="warning" text="experimental" />

除了作为订阅源，RSSHub 还支持作为 npm 包在你的 Node.js 项目中使用

### 安装

::: code-group

```sh [npm]
$ npm install rsshub --save
```

```sh [pnpm]
$ pnpm add rsshub
```

```sh [yarn]
$ yarn add rsshub
```

```sh [bun]
$ bun add rsshub
```

:::

### 使用

```js
import RSSHub from 'rsshub';

RSSHub.init({
    // config
});

RSSHub.request('/bilibili/bangumi/media/9192')
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log(e);
    });
```

支持的 config 见 [配置](/zh/deploy/config) 文档，比如想禁用缓存，config 可以这样写：

```js
{
    CACHE_TYPE: null,
}
```

## Radar

RSSHub 还提供了一个 Radar 功能，用于将网站地址映射到 RSSHub 地址

### 规则

可以通过实例的 API 来获取当前实例支持的 Radar 规则，比如官方实例 https://rsshub.app/api/radar/rules

### 使用

你需要借助支持此功能的浏览器插件、手机应用、RSS 阅读器等工具来使用 Radar 功能，具体使用方法请参考对应工具的文档

- 浏览器插件: [RSSHub Radar](https://github.com/DIYgod/RSSHub-Radar)
- iOS 应用: [RSSBud](https://github.com/Cay-Zhang/RSSBud)
- Android 应用: [RSSAid](https://github.com/LeetaoGoooo/RSSAid)
- RSS 阅读器: Coming soon
