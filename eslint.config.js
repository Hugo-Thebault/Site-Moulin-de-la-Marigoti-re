import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.{js,jsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      // React
      "react/react-in-jsx-scope": "off", // React 18 n'a pas besoin d'import React
      "react/prop-types": "off", // Pas de TypeScript, on s'en passe
      "react/jsx-no-target-blank": "error",
      "react/jsx-key": "error",
      "react/jsx-uses-vars": "error", // Reconnaître les imports utilisés en JSX
      "react/no-unescaped-entities": "off", // Texte français avec apostrophes

      // React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Qualité de code
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "no-duplicate-imports": "error",
    },
  },
  {
    // Config spécifique aux tests
    files: ["src/__tests__/**/*.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        vi: "readonly",
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
      },
    },
  },
  {
    // Ignorer les fichiers de build et config
    ignores: [
      "dist/**",
      "node_modules/**",
      "scripts/**",
      "server/**",
      "*.config.js",
      "*.config.cjs",
    ],
  },
];
