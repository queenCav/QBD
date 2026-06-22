import { createI18n } from 'vue-i18n'
import enUS from './messages/en-US'
import zhCN from './messages/zh-CN'

export const SUPPORT_LOCALES = ['zh-CN', 'en-US'] as const
export type SupportLocale = (typeof SUPPORT_LOCALES)[number]

const STORAGE_KEY = 'qi-website-locale'

function getInitialLocale(): SupportLocale {
  const storedLocale = localStorage.getItem(STORAGE_KEY)

  if (storedLocale === 'en-US' || storedLocale === 'zh-CN') {
    return storedLocale
  }

  return navigator.language.toLowerCase().startsWith('zh') ? 'zh-CN' : 'en-US'
}

export const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'en-US',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS,
  },
})

export function persistLocale(locale: SupportLocale) {
  localStorage.setItem(STORAGE_KEY, locale)
  document.documentElement.lang = locale
}
