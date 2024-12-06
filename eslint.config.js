import eslint from '@eslint/js';
import globals from "globals";
import tseslint from 'typescript-eslint'
import nextPlugin from '@next/eslint-plugin-next'
import eslintConfigPrettier from 'eslint-config-prettier'
import reactPlugin from 'eslint-plugin-react'
import hooksPlugin from 'eslint-plugin-react-hooks'

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    name: 'my-config',
    files: ['frontend/**/*.{ts,tsx}', 'eth/**/*.{ts,tsx}'],
    ignores: ['**/node_modules/', '**/.next/', '**/eslint.config.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    rules: {
      'no-unused-vars': "warn",
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off"
    }
  },
  {
    name: 'react/jsx-runtime',
    plugins: {
      react: reactPlugin,
    },
    rules: reactPlugin.configs['jsx-runtime'].rules,
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    name: 'react-hooks/recommended',
    plugins: {
      'react-hooks': hooksPlugin,
    },
    rules: hooksPlugin.configs.recommended.rules,
  },
  {
    name: 'next/core-web-vitals',
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    }
  },
  {
    name: 'prettier/config',
    ...eslintConfigPrettier,
  }
];
