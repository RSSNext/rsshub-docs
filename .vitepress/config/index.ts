import { defineConfig } from 'vitepress';

import { shared } from './shared.ts';
import { zh } from './zh.ts';

export default defineConfig({
  ...shared,
  locales: {
    root: { label: 'English', lang: 'en' },
    zh: { label: '简体中文', ...zh },
  },
});
