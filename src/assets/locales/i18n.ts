import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next'

import translationEN from './en/translation.json'

export const defaultLocale = 'en'

export const defaultNS = 'translation'
export const resources = {
  en: {
    translation: translationEN,
  },
} as const

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(
    resourcesToBackend((language: string, ns: string) => {
      return import(`../locales/${language}/${ns}.json`)
    }),
  )
  .init({
    ns: ['translation'],
    defaultNS,
    resources,
    returnNull: false,
    fallbackLng: defaultLocale,
    debug: false,
    lng: defaultLocale,
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  })

export default i18n
