import js from "@eslint/js";
import tseslint from "typescript-eslint";
import officeAddins from "eslint-plugin-office-addins";
import globals from "globals";
import storybook from "eslint-plugin-storybook";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";

export default tseslint.config(
  js.configs.recommended,
  tseslint.configs.recommended,
  ...officeAddins.configs.recommended,
  hooksPlugin.configs["recommended-latest"],
  {
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  ...storybook.configs["flat/recommended"],
  {
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.browser,
        ...globals.nodeBuiltin,
      },
      parserOptions: {
        projectService: true,
      },
    },
    plugins: {
      "office-addins": officeAddins,
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/consistent-type-exports": "error",
      "react-hooks/exhaustive-deps": "error",
    },
  }
);
