import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// Импорт JSON-файлов с переводами
import translationRU from "../locales/ru.json";
import translationEN from "../locales/en.json";


// Конфигурация ресурсов
const resources = {
  ru: { translation: translationRU },
  en: { translation: translationEN },
};


i18n
  .use(Backend) // Подключение загрузки переводов
  .use(LanguageDetector) // Определение языка
  .use(initReactI18next) // Интеграция с React
  .init({
    resources, // Передаём JSON напрямую
    fallbackLng: "ru", // Язык по умолчанию
    debug: true,
    interpolation: {
      escapeValue: false, // Отключаем экранирование HTML
    },
  });

export default i18n;
