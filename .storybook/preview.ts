import type { Preview } from "@storybook/react";
import { fluentDecorator, globalTypes } from "./fluentDecorator";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes,
  initialGlobals: {
    theme: "light",
  },
};

export default preview;
export const decorators = [fluentDecorator];
