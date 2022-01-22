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
      "error-get-categories": `This add-in can be used only with budgeting template from "Więcej niż oszczędzanie pieniedzy" blog. If you use this add-in for the mentioned template, please check if the sheet "Wzorzec kategorii" matches the original template from the blog. In case of issues please contact maintainers through `,
      loading: "Loading...",
      price: "Price",
      "price-placeholder": "e.g. 43.57",
      "price-type-error": "Price must be a number",
      welcome: "Add new transaction",
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
      "error-get-categories": `Ten dodatek może być używany tylko w budżecie domowym z blogu "Więcej niż oszczędzanie pieniedzy". Jeśli używasz tego dodatku we wspomnianym budżecie, sprawdź czy arkusz "Wzorzec kategorii" jest zgodny z szablonem na blogu. W przypadku innych problemów skontktuj się z twórcą dodatku przez `,
      loading: "Ładowanie...",
      price: "Cena",
      "price-placeholder": "np. 43.57",
      "price-type-error": "Cena musi być liczbą",
      welcome: "Dodaj nową transakcję",
    },
  },
};
