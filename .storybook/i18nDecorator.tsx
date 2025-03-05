import * as React from "react";
import type { Decorator, Preview } from "@storybook/react";
import { initI18n } from "../src/taskpane/i18n/i18n";

export const withI18n: Decorator = (Story, context) => {
  const language = context.globals.language;
  const [initialized, setInitialized] = React.useState(false);

  React.useEffect(() => {
    setInitialized(false);
    initI18n(language).then(() => setInitialized(true));
  }, [language]);

  return initialized ? <Story /> : null;
};

export const globalTypes: Preview["globalTypes"] = {
  language: {
    description: "Language for form",
    toolbar: {
      // The label to show for this toolbar item
      title: "Language",
      icon: "globe",
      // Array of plain string values or MenuItem shape (see below)
      items: ["en-US", "pl-PL"],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};
