import type { Preview } from "@storybook/react";
import { fluentDecorator, globalTypes as fluentGlobalTypes } from "./fluentDecorator";
import { withI18n, globalTypes as i18nGlobalTypes } from "./i18nDecorator";
import { initialize, mswLoader } from "msw-storybook-addon";

initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: { ...fluentGlobalTypes, ...i18nGlobalTypes },
  initialGlobals: {
    theme: "light",
    language: "en-US",
  },
};

export default preview;
export const decorators = [fluentDecorator, withI18n];
export const loaders = [mswLoader];
