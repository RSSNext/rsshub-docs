/// <reference types="vitepress/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent;
  export default component;
}

declare module '@localSearchIndex' {
  const loaders: Record<string, () => Promise<{ default: string }>>;
  export default loaders;
}
