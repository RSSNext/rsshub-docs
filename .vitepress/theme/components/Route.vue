<template>
  <div :id="namespace + JSON.stringify(data.path)" class="routeBlock">
    <p class="badges">
      <a v-if="data.features?.antiCrawler" href="/faq" target="_blank">
        <Badge type="danger">🚨 Strict anti-crawling</Badge>
      </a>
      <Badge v-if="data.features?.supportBT" type="tip">🔄 Support BT</Badge>
      <Badge v-if="data.features?.supportPodcast" type="tip">🎙️ Support Podcast</Badge>
      <Badge v-if="data.features?.supportScihub" type="tip">🧪 Support Sci-Hub</Badge>
      <Badge v-if="data.features?.requirePuppeteer" type="warning">🎭 Rely on Puppeteer</Badge>
      <a v-if="data.features?.requireConfig" href="/install/config#route-specific-configurations" target="_blank">
        <Badge type="warning">⚙️ Config required</Badge>
      </a>
      <a v-if="data.radar" href="/usage#radar" target="_blank">
        <Badge type="tip">🔍 Support Radar</Badge>
      </a>
    </p>
    <p class="author">
      👨‍💻 Author: {{ ' ' }}
      <a v-for="(uid, index) in data.maintainers" :key="index" :href="`https://github.com/${uid}`" target="_blank">
        @{{ uid }}{{' '}}
      </a>
    </p>
    <p v-if="demoUrl" class="example">
      <span>💡 Example: </span>
      <a :href="demoUrl" target="_blank">
        {{ demoUrl }}
      </a>
      <img loading="lazy" :src="`https://img.shields.io/website.svg?label=&url=${encodeURIComponent(demoUrl)}&cacheSeconds=7200`" />
    </p>
    <p class="path">
      🛎️ Route: <code>/{{ namespace + data.path }}</code>
    </p>
    <div v-if="paramMatch">
      <p>🔗 Parameters: </p>
      <ul>
        <li v-for="(item, index) in paramMatch" :key="index" class="params">
          <code>{{ item.replace(/:|\?|\+|\*/g, '') }}</code>,{{ ' ' }}
          <!-- TODO: Handle below translations based on last character in the item -->
          required - {{ ' ' }}
          <span>{{ renderMarkdown(data.parameters?.[item.replace(/:|\?|\+|\*/g, '')] || '') }}</span>
        </li>
      </ul>
    </div>
    <div v-if="data.features?.requireConfig">
      <p>⚙️ Deployment Configs: </p>
      <ul>
        <li v-for="(item, index) in data.features.requireConfig" :key="index" class="params">
          <code>{{ item.name }}</code>,{{ ' ' }}
          {{ item.optional ? 'optional' : 'required' }}
          {{ ' - ' }}
          <span>{{ renderMarkdown(item.description) }}</span>
        </li>
      </ul>
    </div>
    <p class="path">
      🐙 Source Code:{{ ' ' }}
      <code>
        <a target='_blank' :href="`https://github.com/DIYgod/RSSHub/blob/master/lib/routes/${namespace}/${data.location}`">/{{ namespace }}/{{ data.location }}</a>
      </code>
    </p>
    <!-- TODO: Render children if any -->
  </div>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it';
import type { Route } from '../types';

const props = defineProps<{
  namespace: string,
  data: Route,
}>();

const demoUrl = props.data.example ? ('https://rsshub.app' + props.data.example) : null;
const paramMatch = props.data.path.match?.(/(?<=:).*?(?=\/|$)/g);

const renderMarkdown = (item, inline = true) => {
    const md = new MarkdownIt({
        html: true,
    });
    return inline ? md.renderInline(item) : md.render(item);
};
</script>