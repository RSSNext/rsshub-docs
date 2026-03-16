import { computed, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import { useData } from 'vitepress'

export function useLocale() {
  const { t, locale } = useI18n({ useScope: 'global' })
  const { lang } = useData()
  watchEffect(() => { locale.value = lang.value })
  const localePath = computed(() => lang.value === 'en' ? '' : '/zh')

  // Resolve a localized value from an object keyed by locale codes.
  // Fallback chain: exact locale → language prefix → 'en'
  function localized(data: Record<string, string>): string {
    const loc = locale.value
    if (loc in data) {
      return data[loc]
    }
    const prefix = loc.split('-')[0]
    if (prefix in data) {
      return data[prefix]
    }
    return data.en
  }

  return { t, locale, localePath, localized }
}
