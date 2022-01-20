import App from "./components/App";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { ThemeProvider } from "@fluentui/react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { getCategories } from "./getCategories";
import { initI18n } from "./i18n/i18n";
import { ErrorMessage } from "./components/ErrorMessage";

/* global document, Office, console */

initializeIcons();

const renderApp = (categories: Record<string, string[]> | undefined) => {
  render(<App categories={categories} />);
};

const render = (component: React.ReactNode) => {
  ReactDOM.render(<ThemeProvider>{component}</ThemeProvider>, document.getElementById("container"));
};

Office.onReady((info) => {
  // If needed, Office.js is ready to be called
  if (info.host === Office.HostType.Excel) {
    if (!Office.context.requirements.isSetSupported("ExcelApi", "1.7")) {
      render(<ErrorMessage message="Sorry, the required Excel JS API is not available in your version of Excel" />);
    }
    initI18n(Office.context.displayLanguage).then(() => {
      console.log(Office.context.displayLanguage);
      getCategories().then((value) => {
        renderApp(value);
      });
      renderApp(undefined);
    });
  } else {
    render(<ErrorMessage message="The add-in can be used in Excel only" />);
  }
});
