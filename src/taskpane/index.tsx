import App from "./components/App";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { ThemeProvider } from "@fluentui/react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { getCategories } from "./getCategories";
import { initI18n } from "./i18n/i18n";
import { ErrorMessage } from "./components/ErrorMessage";

/* global document, Office */

initializeIcons();

const renderApp = (categories: Record<string, string[]> | undefined) => {
  render(<App categories={categories} />);
};

const render = (component: React.ReactNode) => {
  ReactDOM.render(<ThemeProvider>{component}</ThemeProvider>, document.getElementById("container"));
};

Office.onReady(async (info) => {
  // If needed, Office.js is ready to be called
  const t = await initI18n(Office.context.displayLanguage);
  if (info.host === Office.HostType.Excel) {
    if (Office.context.requirements.isSetSupported("ExcelApi", "1.7")) {
      renderApp(undefined);
      const categories = await getCategories();
      renderApp(categories);
    } else {
      render(<ErrorMessage message={t("error-old-api")} />);
    }
  } else {
    render(<ErrorMessage message={t("error-excel-only")} />);
  }
});
