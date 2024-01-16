import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en.json";
import translationDE from "./locales/de.json";

const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  },
};

export const initi18n = (locale: string) => {
  i18n.use(initReactI18next).init({
    resources,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });
  i18n.changeLanguage(locale);
};

export default i18n;
