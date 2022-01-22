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
      "choose-category": "Category",
      "current-month": "Current month",
      day: "Day",
      "day-placeholder": "From 1 to 31",
      "day-type-error": "Day must be a number",
      loading: "Loading...",
      price: "Price",
      "price-placeholder": "e.g. 43.57",
      "price-type-error": "Price must be a number",
      welcome: "Welcome!",
    },
  },
  "pl-PL": {
    translation: {
      "add-transaction": "Dodaj transakcję",
      "choose-category": "Kategoria",
      "current-month": "Uzupełniany miesiąc",
      day: "Dzień",
      "day-placeholder": "Od 1 do 31",
      "day-type-error": "Dzień musi być liczbą",
      loading: "Ładowanie...",
      price: "Cena",
      "price-placeholder": "np. 43.57",
      "price-type-error": "Cena musi być liczbą",
      welcome: "Witamy!",
    },
  },
};
