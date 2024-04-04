# Getting Started

## Generate a Feed

For example, if you want to subscribe to the content of the channel [@awesomeRSSHub](https://t.me/awesomeRSSHub) on Telegram.

According to the [Telegram route](/routes/social-media#telegram) documentation, the route is `/telegram/channel/:username/:routeParams?`, where username is a required parameter and routeParams is an optional parameter. Replace `:username` with the channel id awesomeRSSHub to get the path `/telegram/channel/awesomeRSSHub`, then add the instance domain `https://rsshub.app`, a subscription source is generated: `https://rsshub.app/telegram/channel/awesomeRSSHub`.

Then you can add `https://rsshub.app/telegram/channel/awesomeRSSHub` to any RSS reader for use.

The instance domain `https://rsshub.app` can be replaced with  your [self-hosted instance](/deploy) or any [public instance](/guide/instances).

In addition, RSSHub supports many useful parameters, such as content filtering, full-text output, etc., refer to [Parameters](/guide/parameters) for details.

## Contribute a New Route

Our thriving community is the key to RSSHub's success, we invite everyone to join us and [contribute new routes](/joinus/#quick-start) for all kinds of interesting sources.

## Use as a npm Package <Badge type="warning" text="experimental" />

Apart from serving as an information source hub, RSSHub is also made compatible with all Node.js projects as an npm Package.

### Install

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

### Usage

```js
import RSSHub from 'rsshub';

RSSHub.init({
    // config
});

RSSHub.request('/youtube/user/JFlaMusic')
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log(e);
    });
```

For supported configs please refer to the [Configuration Section](/deploy/config).

A short example for disabling caching can be written as:

```js
{
    CACHE_TYPE: null,
}
```

## Radar

RSSHub also provides a Radar function, which is used to map website addresses to RSSHub addresses.

### Rules

You can use the API of the instance to obtain the Radar rules supported by the current instance, such as the rules of official instance https://rsshub.app/api/radar/rules .

### Usage

You need to use supported browser extensions, mobile apps, RSS readers, or other tools to use the Radar feature. Please refer to the documentation of the corresponding tool for specific usage instructions.

- Browser extension: [RSSHub Radar](https://github.com/DIYgod/RSSHub-Radar)

- iOS app: [RSSBud](https://github.com/Cay-Zhang/RSSBud)

- Android app: [RSSAid](https://github.com/LeetaoGoooo/RSSAid)

- RSS Reader: Coming soon
