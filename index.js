module.exports = {
  extends: ['eslint:recommended', 'airbnb-base', 'airbnb-typescript/base'],
  plugins: ['barrel-files'],
  parser: '@typescript-eslint/parser',
  rules: {
    'barrel-files/avoid-barrel-files': [
      'error',
      { amountOfExportsToConsiderModuleAsBarrel: 0 },
    ],
    'import/extensions': 'off',
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
  },
};
