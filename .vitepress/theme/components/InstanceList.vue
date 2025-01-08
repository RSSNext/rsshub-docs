<template>
  <table>
    <thead>
      <tr>
        <th>URL</th>
        <th>Location</th>
        <th>Maintainer</th>
        <th>Online</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="instance in instances" :key="instance.url">
        <td>
          <a target="_blank" :href="instance.url">{{getHost(instance.url)}}</a>
        </td>
        <td>{{instance.location}}</td>
        <td>
          <a v-if="instance.maintainer" target="_blank" :href="instance.maintainerUrl">{{instance.maintainer}}</a>
          <span v-if="!instance.maintainer">Anonymous</span>
        </td>
        <td>
          <img loading="lazy" :src="`https://img.shields.io/website.svg?label=&url=${encodeURIComponent(`${instance.url}/healthz`)}`" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
const instances = [{
    url: 'https://rsshub.rssforever.com',
    location: '🇦🇪',
    maintainer: 'Stille',
    maintainerUrl: 'https://www.ioiox.com',
  }, {
    url: 'https://hub.slarker.me',
    location: '🇺🇸',
    maintainer: 'Slarker',
    maintainerUrl: 'https://slarker.me',
  }, {
    url: 'https://rsshub.pseudoyu.com',
    location: '🇩🇪',
    maintainer: 'pseudoyu',
    maintainerUrl: 'https://github.com/pseudoyu',
  }, {
    url: 'https://rsshub.rss.tips',
    location: '🇺🇸',
    maintainer: 'AboutRSS',
    maintainerUrl: 'https://github.com/AboutRSS/ALL-about-RSS',
  }, {
    url: 'https://rsshub.ktachibana.party',
    location: '🇺🇸',
    maintainer: 'KTachibanaM',
    maintainerUrl: 'https://github.com/KTachibanaM',
  }, {
    url: 'https://rsshub.woodland.cafe',
    location: '🇩🇪',
    maintainer: 'untitaker',
    maintainerUrl: 'https://github.com/untitaker',
  }, {
    url: 'https://rss.owo.nz',
    location: '🇩🇪',
    maintainer: 'Vincent Yang',
    maintainerUrl: 'https://missuo.me',
  }, {
    url: 'https://rss.wudifeixue.com',
    location: '🇨🇦',
    maintainer: 'wudifeixue',
    maintainerUrl: 'https://github.com/wudifeixue',
  }, {
    url: 'https://yangzhi.app',
    location: '🇯🇵',
    maintainer: '仰止',
    maintainerUrl: 'https://yangzhi.org',
  }, {
    url: 'https://rss.littlebaby.lol/rsshub',
    location: '🇺🇸',
    maintainer: 'yuanhong',
    maintainerUrl: 'https://github.com/yuanhong078',
  }, {
    url: 'https://rsshub.henry.wang',
    location: '🇬🇧',
    maintainer: 'HenryQW',
    maintainerUrl: 'https://github.com/HenryQW',
  }, {
    url: 'https://rsshub.speednet.icu',
    location: '🇭🇰',
    maintainer: 'freeintweb',
    maintainerUrl: 'https://github.com/freeintweb',
  }, {
    url: 'https://holoxx.f5.si/',
    location: '🇯🇵',
    maintainer: 'Vania',
    maintainerUrl: 'https://note.com/vania',
  }, {
    url: 'https://hub.rss.direct',
    location: '🇸🇬',
    maintainer: 'Eric Zhu',
    maintainerUrl: 'https://github.com/ericyzhu',
  }, {
    url: 'https://rsshub.umzzz.com',
    location: '🇭🇰',
    maintainer: 'nesay',
    maintainerUrl: 'https://umzzz.com',
  }, {
    url: 'https://rsshub.isrss.com',
    location: '🇰🇷',
    maintainer: 'isRSS',
    maintainerUrl: 'https://isrss.com',
  }, {
    url: 'https://rsshub.thzu.xyz',
    location: '🇭🇰',
    maintainer: 'thzu',
    maintainerUrl: 'https://thzu.xyz',
  }, {
    url: 'https://rsshub.email-once.com',
    location: '🇭🇰',
    maintainer: 'EmailOnce',
    maintainerUrl: 'https://email-once.com'
  }
]

const getHost = (url: string) => new URL(url).host
</script>

<style scoped>
.sponsors-component {
  border-top: 1px solid var(--vp-c-gutter);
  padding-top: 88px !important;
  margin: 128px 0;
  padding: 0 64px;
}

.container {
  margin: 0 auto;
  max-width: 1000px;
}

.header {
  color: rgba(60, 60, 67, .78);
}

.love {
  margin: 0 auto;
  width: fit-content;
  font-size: 28px;
}

.icon {
  display: inline-block;
}

.message {
  margin: 0 auto;
  padding-top: 10px;
  max-width: 320px;
  text-align: center;
  line-height: 24px;
  font-size: 16px;
  font-weight: 500;
}

.sponsors {
  padding-top: 32px;
}
</style>
