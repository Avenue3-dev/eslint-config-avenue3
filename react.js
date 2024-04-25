module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'barrel-files'],
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'barrel-files/avoid-barrel-files': [
      'error',
      { amountOfExportsToConsiderModuleAsBarrel: 0 },
    ],
    'import/extensions': 'off',
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',
    'no-restricted-syntax': [
      'error',
      { selector: 'TSEnumDeclaration', message: 'Use union types instead.' },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [
      'error',
      { namedComponents: 'function-declaration' },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
