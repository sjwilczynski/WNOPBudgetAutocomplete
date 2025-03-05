import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [{
    name: "@storybook/addon-essentials",
    options: {
      docs: false,
    },
  }, "@chromatic-com/storybook", "@storybook/experimental-addon-test"],
  framework: "@storybook/react-vite",
};
export default config;
