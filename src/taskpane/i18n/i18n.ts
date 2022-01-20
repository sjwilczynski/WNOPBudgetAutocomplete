import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

export const initI18n = (locale: string) =>
  i18n.use(initReactI18next).init({
    resources,
    lng: locale,
    supportedLngs: ["en-US", "pl-PL"],
    fallbackLng: "en-US",
  });

const resources: Resource = {
  "en-US": {
    translation: {
      "add-transaction": "Add transaction",
      "app-title": "WNOP autocomplete",
      "choose-category": "Category",
      day: "Day",
      "day-type-error": "Day must be a number",
      loading: "Loading...",
      price: "Price",
      "price-type-error": "Price must be a number",
      welcome: "Welcome!",
    },
  },
  "pl-PL": {
    translation: {
      "add-transaction": "Dodaj transakcję",
      "app-title": "WNOP autouzupełnianie",
      "choose-category": "Kategoria",
      day: "Dzień",
      "day-type-error": "Dzień musi być liczbą",
      loading: "Ładowanie...",
      price: "Cena",
      "price-type-error": "Cena musi być liczbą",
      welcome: "Witamy!",
    },
  },
};
