import type { Preview } from "@storybook/react";
import { fluentDecorator, globalTypes as fluentGlobalTypes } from "./fluentDecorator";
import { withI18n, globalTypes as i18nGlobalTypes } from "./i18nDecorator";
import { initialize, mswLoader } from "msw-storybook-addon";
import MockDate from "mockdate";

initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    test: {
      dangerouslyIgnoreUnhandledErrors: true,
    },
  },
  globalTypes: { ...fluentGlobalTypes, ...i18nGlobalTypes },
  initialGlobals: {
    theme: "light",
    language: "en-US",
  },
  beforeEach: () => {
    MockDate.set(new Date("2025-03-12"));
  },
};

export default preview;
export const decorators = [fluentDecorator, withI18n];
export const loaders = [mswLoader];
