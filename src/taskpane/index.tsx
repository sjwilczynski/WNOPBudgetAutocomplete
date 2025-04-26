import App from "./components/App";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { getCategories } from "./excel/getCategories";
import { initI18n } from "./i18n/i18n";
import { ErrorMessage } from "./components/ErrorMessage";
import { IssuesLink } from "./components/IssuesLink/IssuesLink";
import { ExcelProvider } from "./context/ExcelContext";
import { submitTransaction } from "./excel/addTransaction";
import { useMonth } from "./excel/useMonth";
import { useYear } from "./excel/useYear";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
/* global Office */

const queryClient = new QueryClient();

const render = (component: React.ReactNode) => {
  const container = document.getElementById("container");
  const root = ReactDOM.createRoot(container!);
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <FluentProvider theme={webLightTheme}>{component}</FluentProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

Office.onReady(async (info) => {
  // If needed, Office.js is ready to be called
  const t = await initI18n(Office.context.displayLanguage);
  if (info.host === Office.HostType.Excel) {
    if (Office.context.requirements.isSetSupported("ExcelApi", "1.7")) {
      try {
        render(<AppWithContext categories={undefined} />);
        const categories = await getCategories();
        render(<AppWithContext categories={categories} />);
      } catch {
        render(
          <ErrorMessage message={t("error-get-categories") ?? ""}>
            <IssuesLink />
          </ErrorMessage>
        );
      }
    } else {
      render(<ErrorMessage message={t("error-old-api") ?? ""} />);
    }
  } else {
    render(<ErrorMessage message={t("error-excel-only") ?? ""} />);
  }
});

const AppWithContext = ({ categories }: { categories: Record<string, string[]> | undefined }) => {
  const month = useMonth();
  const year = useYear();

  return (
    <FluentProvider theme={webLightTheme}>
      <ExcelProvider submitTransaction={submitTransaction} month={month} year={year}>
        <App categories={categories} />
      </ExcelProvider>
    </FluentProvider>
  );
};
