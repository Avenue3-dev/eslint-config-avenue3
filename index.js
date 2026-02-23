// @ts-check

import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import barrelFilesPlugin from 'eslint-plugin-barrel-files';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // Eslint
  eslint.configs.recommended,
  {
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
      'block-scoped-var': 'error',
      'class-methods-use-this': 'off',
      curly: 'error',
      'default-case': 'error',
      'default-case-last': 'error',
      'default-param-last': ['error'],
      'dot-notation': 'error',
      eqeqeq: ['error', 'always'],
      'no-else-return': 'error',
      'no-empty-function': ['error', { allow: ['constructors'] }],
      'no-eq-null': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-floating-decimal': 'error',
      'no-magic-numbers': 'off',
      'no-new': 'error',
      'no-new-wrappers': 'error',
      'no-param-reassign': ['error', { props: true }],
      'no-redeclare': 'error',
      'no-restricted-syntax': [
        'error',
        { selector: 'TSEnumDeclaration', message: 'Use union types instead.' },
      ],
      'no-useless-return': 'error',
      'prefer-regex-literals': 'error',
      radix: 'error',
      'require-await': 'error',
      'require-unicode-regexp': 'off',
      yoda: 'error',
      'init-declarations': ['error', 'always'],
      'no-use-before-define': 'off',
      'array-bracket-spacing': ['error', 'never'],
      'sort-imports': 'off',
    },
  },

  // Typescript eslint
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  {
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    },
  },

  // Prettier
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': ['error', { singleAttributePerLine: true }],
    },
  },

  // Import
  {
    plugins: { import: importPlugin },
    rules: {
      ...importPlugin.flatConfigs.recommended.rules,
      ...importPlugin.flatConfigs.errors.rules,
      ...importPlugin.flatConfigs.warnings.rules,
      'import/no-default-export': 'error',
      'import/no-unresolved': 'off',
      'import/named': 'off',
      'import/no-named-as-default': 'off',
    },
  },

  // Simple import sort
  {
    plugins: { 'simple-import-sort': simpleImportSortPlugin },
    rules: {
      'simple-import-sort/imports': [
        'error',
        { groups: [['^\\u0000', '^@?\\w', '^', '^\\.']] },
      ],
      'simple-import-sort/exports': 'error',
    },
  },

  // Barrel files
  {
    plugins: { 'barrel-files': barrelFilesPlugin },
    rules: {
      'barrel-files/avoid-barrel-files': [
        'error',
        { amountOfExportsToConsiderModuleAsBarrel: 0 },
      ],
    },
  }
);
