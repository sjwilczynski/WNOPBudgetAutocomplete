import App from "./components/App";
import { FluentProvider } from "@fluentui/react-components";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { getCategories } from "./getCategories";
import { initI18n } from "./i18n/i18n";
import { ErrorMessage } from "./components/ErrorMessage";
import { IssuesLink } from "./components/IssuesLink/IssuesLink";

/* global document, Office */

const renderApp = (categories: Record<string, string[]> | undefined) => {
  render(<App categories={categories} />);
};

const render = (component: React.ReactNode) => {
  // TODO: test theme
  ReactDOM.render(<FluentProvider>{component}</FluentProvider>, document.getElementById("container"));
};

Office.onReady(async (info) => {
  // If needed, Office.js is ready to be called
  const t = await initI18n(Office.context.displayLanguage);
  if (info.host === Office.HostType.Excel) {
    if (Office.context.requirements.isSetSupported("ExcelApi", "1.7")) {
      try {
        renderApp(undefined);
        const categories = await getCategories();
        renderApp(categories);
      } catch {
        // TODO: test
        render(
          <ErrorMessage message={t("error-get-categories")}>
            <IssuesLink />
          </ErrorMessage>
        );
      }
    } else {
      render(<ErrorMessage message={t("error-old-api")} />);
    }
  } else {
    render(<ErrorMessage message={t("error-excel-only")} />);
  }
});
