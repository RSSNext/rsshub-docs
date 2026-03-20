<template>
  <table>
    <thead>
      <tr>
        <th>{{ t('instance.url') }}</th>
        <th>{{ t('instance.location') }}</th>
        <th>{{ t('instance.maintainer') }}</th>
        <th>{{ t('instance.online') }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="instance in instances" :key="instance.url">
        <td>
          <a target="_blank" :href="instance.url">{{ getHost(instance.url) }}</a>
        </td>
        <td>{{ instance.location }}</td>
        <td>
          <a v-if="instance.maintainer" target="_blank" :href="instance.maintainerUrl">{{ instance.maintainer }}</a>
          <span v-if="!instance.maintainer">{{ t('instance.anonymous') }}</span>
        </td>
        <td>
          <img
            loading="lazy"
            :src="`https://img.shields.io/website.svg?label=&url=${encodeURIComponent(`${instance.url}/healthz`)}`"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { useLocale } from '../composables/useLocale';

const { t } = useLocale();

const instances = [
  {
    url: 'https://rsshub.rssforever.com',
    location: '🇦🇪',
    maintainer: 'Stille',
    maintainerUrl: 'https://www.ioiox.com',
  },
  {
    url: 'https://hub.slarker.me',
    location: '🇺🇸',
    maintainer: 'Slarker',
    maintainerUrl: 'https://slarker.me',
  },
  {
    url: 'https://rsshub.pseudoyu.com',
    location: '🇫🇷',
    maintainer: 'pseudoyu',
    maintainerUrl: 'https://github.com/pseudoyu',
  },
  {
    url: 'https://rsshub.rss.tips',
    location: '🇺🇸',
    maintainer: 'AboutRSS',
    maintainerUrl: 'https://github.com/AboutRSS/ALL-about-RSS',
  },
  {
    url: 'https://rsshub.ktachibana.party',
    location: '🇺🇸',
    maintainer: 'KTachibanaM',
    maintainerUrl: 'https://github.com/KTachibanaM',
  },
  {
    url: 'https://rss.owo.nz',
    location: '🇩🇪',
    maintainer: 'Vincent Yang',
    maintainerUrl: 'https://missuo.me',
  },
  {
    url: 'https://rss.wudifeixue.com',
    location: '🇨🇦',
    maintainer: 'wudifeixue',
    maintainerUrl: 'https://github.com/wudifeixue',
  },
  {
    url: 'https://rss.littlebaby.life/rsshub',
    location: '🇺🇸',
    maintainer: 'yuanhong',
    maintainerUrl: 'https://github.com/yuanhong078',
  },
  {
    url: 'https://rsshub.henry.wang',
    location: '🇬🇧',
    maintainer: 'HenryQW',
    maintainerUrl: 'https://github.com/HenryQW',
  },
  {
    url: 'https://holoxx.f5.si/',
    location: '🇯🇵',
    maintainer: 'Vania',
    maintainerUrl: 'https://note.com/vania',
  },
  {
    url: 'https://rsshub.umzzz.com',
    location: '🇭🇰',
    maintainer: 'nesay',
    maintainerUrl: 'https://umzzz.com',
  },
  {
    url: 'https://rsshub.isrss.com',
    location: '🇺🇸',
    maintainer: 'isRSS',
    maintainerUrl: 'https://isrss.com',
  },
  {
    url: 'https://rsshub.email-once.com',
    location: '🇭🇰',
    maintainer: 'EmailOnce',
    maintainerUrl: 'https://email-once.com',
  },
  {
    url: 'https://rss.datuan.dev',
    location: '🇻🇳',
    maintainer: 'Tuấn Dev',
    maintainerUrl: 'https://duonganhtuan.com',
  },
  {
    url: 'https://rss.4040940.xyz',
    location: '🇩🇪',
    maintainer: 'TingyuShare',
    maintainerUrl: 'https://github.com/TingyuShare',
  },
  {
    url: 'https://rsshub.cups.moe',
    location: '🇺🇸',
    maintainer: 'FunnyCups',
    maintainerUrl: 'https://www.cups.moe',
  },
  {
    url: 'https://rss.spriple.org',
    location: '🇨🇳',
    maintainer: 'Spriple',
    maintainerUrl: 'https://blog.spriple.org',
  },
  {
    url: 'https://rsshub-balancer.virworks.moe',
    location: '🇺🇳',
    maintainer: 'chesha1',
    maintainerUrl: 'https://github.com/chesha1',
  },
];

// You can copy the location country flag from https://emojipedia.org/flags

const getHost = (url: string) => new URL(url).host;
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
  color: rgba(60, 60, 67, 0.78);
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
