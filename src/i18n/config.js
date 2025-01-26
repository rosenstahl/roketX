import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === 'development',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      de: {
        common: require('../locales/de/common.json'),
        home: require('../locales/de/home.json'),
        about: require('../locales/de/about.json'),
      },
      en: {
        common: require('../locales/en/common.json'),
        home: require('../locales/en/home.json'),
        about: require('../locales/en/about.json'),
      },
      tr: {
        common: require('../locales/tr/common.json'),
        home: require('../locales/tr/home.json'),
        about: require('../locales/tr/about.json'),
      },
    },
  });

export default i18n;