import App from "./components/App";
import { AppContainer } from "react-hot-loader";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { ThemeProvider } from "@fluentui/react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { getCategories } from "./getCategories";

/* global document, Office, module, require */

initializeIcons();

const title = "WNOP autocomplete";

const render = (categories: { [key in string]: string[] } | undefined) => {
  ReactDOM.render(
    <AppContainer>
      <ThemeProvider>
        <App title={title} categories={categories} />
      </ThemeProvider>
    </AppContainer>,
    document.getElementById("container")
  );
};

/* Render application after Office initializes */
Office.initialize = () => {
  getCategories().then((value) => {
    render(value);
  });
  render(undefined);
};

Office.onReady((info) => {
  // If needed, Office.js is ready to be called
  if (info.host === Office.HostType.Excel) {
    if (!Office.context.requirements.isSetSupported("ExcelApi", "1.7")) {
      console.log("Sorry. The tutorial add-in uses Excel.js APIs that are not available in your version of Office.");
    }
  }
});

if ((module as any).hot) {
  (module as any).hot.accept("./components/App", () => {
    const NextApp = require("./components/App").default;
    render(NextApp);
  });
}
