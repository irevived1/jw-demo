import { nextTick } from 'vue'
import { createI18n } from "vue-i18n"
import { numberFormats } from "@/i18n/supportedCurrency.js"
import en from "@/i18n/locales/en.json"

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  messages: { en },
  numberFormats,
  legacy: false,
  globalInjection: true,
})

export async function loadLocaleMessages(setLocaleMessage, locale) {
  const messages = await import(
    /* webpackChunkName: "locale-[request]" */ `@/i18n/locales/${locale}.json`
  )
  setLocaleMessage(locale, messages.default)
  return nextTick()
}
