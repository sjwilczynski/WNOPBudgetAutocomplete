import type { Preview } from "@storybook/react-vite";
import { configure } from "storybook/test";
import { fluentDecorator, globalTypes as fluentGlobalTypes } from "./fluentDecorator";
import { withI18n, globalTypes as i18nGlobalTypes } from "./i18nDecorator";
import { initialize, mswLoader } from "msw-storybook-addon";
import MockDate from "mockdate";
import type { TestParameters } from "@storybook/addon-vitest";
import type { A11yParameters } from "@storybook/addon-a11y";

initialize();

configure({
  asyncUtilTimeout: 2000,
});

const preview: Preview = {
  parameters: {
    test: {
      dangerouslyIgnoreUnhandledErrors: true,
    },

    a11y: {
      test: "error",
      options: {
        rules: {
          "aria-hidden-focus": {
            enabled: false,
          },
        },
      },
    },
  } satisfies TestParameters & A11yParameters,
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
