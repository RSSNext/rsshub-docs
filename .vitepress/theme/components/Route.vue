<template>
  <div :id="namespace + JSON.stringify(data.path)" class="routeBlock">
    <p class="badges">
      <Badge v-if="!test" type="warning">🟡 Missing Test</Badge>
      <Badge v-if="test?.code" type="danger" :title="test?.message">🔴 Failed Test</Badge>
      <Badge v-if="test && !test?.code" type="tip">🟢 Passed Test</Badge>
      <a v-if="data.features?.antiCrawler" href="/guide/faqs" target="_blank">
        <Badge type="danger">🚨 Strict Anti-crawling</Badge>
      </a>
      <Badge v-if="data.features?.supportBT" type="tip">🔄 Support BT</Badge>
      <Badge v-if="data.features?.supportPodcast" type="tip">🎙️ Support Podcast</Badge>
      <Badge v-if="data.features?.supportScihub" type="tip">🧪 Support Sci-Hub</Badge>
      <Badge v-if="data.features?.requirePuppeteer" type="warning">🎭 Rely on Puppeteer</Badge>
      <a v-if="data.features?.requireConfig" href="/deploy/config#route-specific-configurations" target="_blank">
        <Badge type="warning">⚙️ Config Required</Badge>
      </a>
      <a v-if="data.radar" href="/guide/#radar" target="_blank">
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
      <CopyButton :text="demoUrl" />
    </p>
    <p class="path">
      🛎️ Route: <code>/{{ namespace + data.path }}</code>{{ ' ' }}<CopyButton :text="`/${namespace}${data.path}`" />
      <a v-if="data.categories?.includes('popular')" :href="`follow://discover?route=${encodeURIComponent(`/${namespace}${data.path}`)}`" target="_blank" style="color: #FF5C00; text-decoration: none;">
        <Badge type="tip" style="background-color: #FF5C00; color: white;">🔖 Open in Follow</Badge>
      </a>
    </p>
    <div v-if="paramMatch">
      <p>🔗 Parameters: </p>
      <ul>
        <li v-for="(item, index) in paramMatch" :key="index" class="params">
          <code>{{ item.name.replace(/:|\?|\+|\*/g, '') }}</code>
            <ul :style="{fontSize: '13px', lineHeight: 1.5}">
            <li><strong>{{ item.optional ? 'Optional' : 'Required' }}</strong></li>
            <li v-if="item.default"><strong>Default:</strong> {{ item.default }}</li>
            <li v-if="item.options?.length">
              <strong>Options:</strong> <select v-if="item.options?.length" :style="{marginRight: '8px'}">
              <option v-for="(option, index) in item.options" :key="option.value" :value="option.value">
                {{ option.value }}: {{ option.label }}
              </option>
              </select>
            </li>
            <li><strong>Description:</strong> <span v-html="item.description?.includes('|') ? renderMarkdown(item.description, false) : renderMarkdown(item.description || 'N/A')"/></li>
          </ul>
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
          <span v-html="renderMarkdown(item.description)"/>
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
import CopyButton from './CopyButton.vue';

const props = defineProps<{
  namespace: string,
  data: Route,
  test?: {
    code: number,
    message?: string,
  }
}>();

const demoUrl = props.data.example ? ('https://rsshub.app' + props.data.example) : null;
const path = typeof props.data.path === "string" ? props.data.path : props.data.path[0];
const paramMatch = path.match?.(/(?<=:).*?(?=\/|$)/g)?.map((item) => {
  const name = item.replace(/:|\?|\+|\*/g, '');
  let parameter = props.data.parameters?.[name];
  if (typeof parameter === "string") {
    parameter = {
      description: parameter,
    }
  }
  return {
    name,
    optional: item.endsWith('?'),
    ...parameter,
  }
});

const renderMarkdown = (item, inline = true) => {
    const md = new MarkdownIt({
        html: true,
    });
    return inline ? md.renderInline(item) : md.render(item);
};
</script>