import { createI18n } from 'vue-i18n';

import en from './en.json';
import zh from './zh.json';

export function setupI18n() {
  return createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    flatJson: true,
    messages: { en, 'zh-Hans': zh },
  });
}
