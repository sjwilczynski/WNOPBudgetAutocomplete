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
      "error-old-api": "The required Excel JS API is not available in your version of Excel",
      "error-excel-only": "The add-in can be used in Excel only",
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
      "error-old-api": "Wymagane Excel JS API nie jest dostępne w twojej wersji programu Excel",
      "error-excel-only": "Ten dodatek może być używany tylko w programie Excel",
      loading: "Ładowanie...",
      price: "Cena",
      "price-placeholder": "np. 43.57",
      "price-type-error": "Cena musi być liczbą",
      welcome: "Witamy!",
    },
  },
};
