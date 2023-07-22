import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "../public/locales/en";
import { uz } from "../public/locales/uz";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  resources: {
    en: { translation: en },
    uz: { translation: uz },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
