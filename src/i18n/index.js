import { createI18n } from "vue-i18n"
import { numberFormats } from "@/i18n/supportedCurrency.js"
import en from "@/i18n/locales/en.json"
import fr from "@/i18n/locales/fr.json"

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  messages: { en, fr },
  numberFormats,
  legacy: false,
  globalInjection: true,
});
