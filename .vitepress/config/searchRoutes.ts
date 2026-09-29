import { readFileSync } from 'node:fs';

import { md } from '../theme/composables/markdown.ts';
import { slugify } from '../theme/slugify.ts';
import type { Namespace, Route } from '../theme/types.ts';

type Namespaces = Record<string, Namespace & { routes: Record<string, Route & { heat: number }> }>;

let namespaces: Namespaces;

const text = (src?: string) => (src ? md.render(src).replace(/<[^>]*>/g, '') : '');

export function routeSections(file: string) {
  const [, locale, namespace] = file.match(/\/(?:(zh)\/)?routes\/(.+)\.md$/) ?? [];
  namespaces ??= JSON.parse(readFileSync('src/public/routes.json', 'utf8'));
  const data = namespace && namespaces[namespace];
  if (!data) {
    return;
  }
  const zh = locale === 'zh';
  const name = (item: { name: string; zh?: { name?: string } }) => (zh && item.zh?.name) || item.name;

  const seen = new Set<string>();
  const routes = Object.values(data.routes)
    .sort((a, b) => b.heat - a.heat)
    .map((route) => {
      // Same ids as NamespaceDetail.vue
      const base = slugify(route.name);
      let anchor = base;
      for (let n = 1; seen.has(anchor); n++) {
        anchor = `${base}-${n}`;
      }
      seen.add(anchor);

      const paths = [route.path].flat().map((p) => `/${namespace}${p}`);
      const description = (zh && route.zh?.description) || route.description;
      const parameters = Object.entries(
        zh ? { ...route.parameters, ...route.zh?.parameters } : (route.parameters ?? {}),
      ).map(([key, p]) =>
        typeof p === 'string'
          ? `${key} ${p}`
          : [key, p.description, ...(p.options ?? []).map((o) => `${o.label} ${o.value}`)].join('\n'),
      );
      return {
        anchor,
        titles: [name(data), name(route)],
        text: [anchor, ...paths, text(description), ...parameters].join('\n'),
      };
    });

  const description = (zh && data.zh?.description) || data.description;
  return [
    {
      anchor: '',
      titles: [name(data)],
      text: [data.url ?? '', text(description)].join('\n'),
    },
    ...routes,
  ];
}
