// oxlint-disable no-control-regex
import { pinyin } from 'pinyin-pro';

// https://github.com/mdit-vue/mdit-vue/blob/main/packages/shared/src/slugify.ts
export const slugify = (str: string) =>
  pinyin(str, { nonZh: 'consecutive', toneType: 'none', v: true })
    .normalize('NFKD')
    .replace(/[\u0300-\u036F]/g, '')
    .replace(/[\u0000-\u001f]/g, '')
    .replace(/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/^(\d)/, '_$1')
    .toLowerCase();
