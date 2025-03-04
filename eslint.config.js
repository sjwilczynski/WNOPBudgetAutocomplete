import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    env: {
      browser: true,
      es2021: true,
    },
    plugins: {
      "office-addins": require("eslint-plugin-office-addins"),
    },
    rules: {
      // Add any specific rules or overrides here
    },
  },
]; 