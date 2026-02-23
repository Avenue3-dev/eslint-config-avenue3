// @ts-check

import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import baseConfig from './index.js';

export default tseslint.config(
  // Base config (eslint, typescript-eslint, prettier, import, simple-import-sort, barrel-files)
  ...baseConfig,

  // React
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react: reactPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 2020,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      'react/boolean-prop-naming': 'error',
      'react/button-has-type': 'error',
      'react/default-props-match-prop-types': 'error',
      'react/destructuring-assignment': 'error',
      'react/display-name': 'error',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'function-declaration',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/no-access-state-in-setstate': 'error',
      'react/no-adjacent-inline-elements': 'error',
      'react/no-array-index-key': 'error',
      'react/no-children-prop': 'error',
      'react/no-danger': 'error',
      'react/no-deprecated': 'error',
      'react/no-did-mount-set-state': 'error',
      'react/no-did-update-set-state': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/no-find-dom-node': 'error',
      'react/no-is-mounted': 'error',
      'react/no-multi-comp': 'error',
      'react/no-redundant-should-component-update': 'error',
      'react/no-render-return-value': 'error',
      'react/no-string-refs': 'error',
      'react/no-this-in-sfc': 'error',
      'react/no-typos': 'error',
      'react/no-unescaped-entities': 'error',
      'react/no-unknown-property': 'error',
      'react/no-unsafe': 'error',
      'react/no-unused-prop-types': 'warn',
      'react/no-unused-state': 'warn',
      'react/no-will-update-set-state': 'error',
      'react/prefer-es6-class': 'error',
      'react/prefer-stateless-function': 'error',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'react/require-optimization': 'error',
      'react/require-render-return': 'error',
      'react/self-closing-comp': 'error',
      'react/sort-comp': 'warn',
      'react/sort-prop-types': 'warn',
      'react/state-in-constructor': 'error',
      'react/static-property-placement': 'warn',
      'react/style-prop-object': 'error',
      'react/void-dom-elements-no-children': 'error',
      'react/jsx-boolean-value': [2, 'never'],
      'react/jsx-child-element-spacing': 'warn',
      'react/jsx-closing-bracket-location': 'warn',
      'react/jsx-closing-tag-location': 'warn',
      'react/jsx-curly-brace-presence': [
        2,
        { props: 'never', children: 'never' },
      ],
      'react/jsx-curly-newline': 'warn',
      'react/jsx-curly-spacing': 'warn',
      'react/jsx-equals-spacing': 'warn',
      'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
      'react/jsx-fragments': 'warn',
      'react/jsx-handler-names': 'warn',
      'react/jsx-indent': [2, 2, { indentLogicalExpressions: true }],
      'react/jsx-indent-props': [2, 2],
      'react/jsx-key': ['error', { checkFragmentShorthand: true }],
      'react/jsx-first-prop-new-line': [1, 'multiline'],
      'react/jsx-max-props-per-line': [1, { maximum: 1 }],
      'react/jsx-no-bind': 'off',
      'react/jsx-no-comment-textnodes': 'warn',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-script-url': 'error',
      'react/jsx-no-target-blank': 'error',
      'react/jsx-no-undef': 'warn',
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-pascal-case': 'error',
      'react/jsx-props-no-multi-spaces': 'warn',
      'react/jsx-props-no-spreading': 'off',
      'react/sort-default-props': 'warn',
      'react/jsx-sort-props': 'warn',
      'react/jsx-tag-spacing': [
        2,
        {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
          beforeClosing: 'never',
        },
      ],
      'react/jsx-uses-react': 'warn',
      'react/jsx-uses-vars': 'warn',
      'react/jsx-wrap-multilines': 'warn',
    },
  },

  // React Hooks
  {
    plugins: { 'react-hooks': reactHooksPlugin },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
    },
  },

  // jsx-a11y
  {
    plugins: { 'jsx-a11y': jsxA11yPlugin },
    rules: {
      ...jsxA11yPlugin.configs.recommended.rules,
      'jsx-a11y/no-onchange': 'off',
    },
  },

  // React Refresh
  {
    plugins: { 'react-refresh': reactRefreshPlugin },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);
