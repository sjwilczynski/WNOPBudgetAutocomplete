import js from "@eslint/js";
import tseslint from "typescript-eslint";
import officeAddins from "eslint-plugin-office-addins";
import globals from "globals";

export default tseslint.config(
  js.configs.recommended,
  tseslint.configs.recommended,
  ...officeAddins.configs.recommended,
  {
    languageOptions: {
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
    },
  }
);
