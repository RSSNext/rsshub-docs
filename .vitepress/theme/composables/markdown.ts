import MarkdownIt from 'markdown-it';
import container from 'markdown-it-container';

// reproduce custom containers (https://vitepress.dev/guide/markdown#custom-containers).
// https://github.com/vuejs/vitepress/blob/main/src/node/markdown/plugins/containers.ts
const containers: Array<[type: string, defaultTitle: string]> = [
  ['tip', 'TIP'],
  ['info', 'INFO'],
  ['warning', 'WARNING'],
  ['danger', 'DANGER'],
  ['details', 'Details'],
];

export const md = new MarkdownIt({ html: true });

for (const [klass, defaultTitle] of containers) {
  md.use(container, klass, {
    render(tokens: any[], idx: number, _options: unknown, env: { references?: unknown }) {
      const token = tokens[idx];
      if (token.nesting === 1) {
        token.attrJoin('class', `${klass} custom-block`);
        const attrs = md.renderer.renderAttrs(token);
        const info = token.info.trim().slice(klass.length).trim();
        const title = md.renderInline(info || defaultTitle, { references: env?.references });
        const titleClass = 'custom-block-title' + (info ? '' : ' custom-block-title-default');
        return klass === 'details'
          ? `<details ${attrs}><summary>${title}</summary>\n`
          : `<div ${attrs}><p class="${titleClass}">${title}</p>\n`;
      }
      return klass === 'details' ? '</details>\n' : '</div>\n';
    },
  });
}

export const renderMarkdown = (content: string, inline = true) =>
  inline ? md.renderInline(content) : md.render(content);
