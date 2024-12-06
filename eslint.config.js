import eslint from '@eslint/js';
import globals from "globals";

export default [
  eslint.configs.recommended,
  {
    files: ['frontend/**/*.{ts,tsx}', 'eth/**/*.{ts,tsx}'],
    ignores: ['node_modules'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    rules: {
      'no-unused-vars': "warn",
    },
  },
];
