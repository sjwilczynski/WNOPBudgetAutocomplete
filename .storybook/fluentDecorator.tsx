import {
  FluentProvider,
  teamsDarkTheme,
  teamsHighContrastTheme,
  teamsLightTheme,
  webDarkTheme,
} from "@fluentui/react-components";

import { webLightTheme } from "@fluentui/react-components";
import type { Decorator, Preview } from "@storybook/react";
import * as React from "react";

export const fluentDecorator: Decorator = (Story, context) => {
  const themeName: ThemeName = context.parameters.theme ?? context.globals.theme;

  const theme = getTheme(themeName);
  return (
    <FluentProvider theme={theme}>
      <Story />
    </FluentProvider>
  );
};

const getTheme = (themeName: ThemeName) => {
  switch (themeName) {
    case "light":
      return webLightTheme;
    case "dark":
      return webDarkTheme;
    case "high-contrast":
      return teamsHighContrastTheme;
    case "teams-light":
      return teamsLightTheme;
    case "teams-dark":
      return teamsDarkTheme;
    default:
      const value: never = themeName;
      return value;
  }
};

const themeNames = ["light", "dark", "high-contrast", "teams-light", "teams-dark"] as const;
type ThemeName = (typeof themeNames)[number];

export const globalTypes: Preview["globalTypes"] = {
  theme: {
    description: "Fluent UI theme",
    toolbar: {
      // The label to show for this toolbar item
      title: "Theme",
      icon: "circlehollow",
      // Array of plain string values or MenuItem shape (see below)
      items: themeNames,
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};
