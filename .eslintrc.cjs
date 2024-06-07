module.exports = {
  extends: ['eslint:recommended', 'airbnb-base'],
  plugins: ['barrel-files'],
  rules: {
    'barrel-files/avoid-barrel-files': [
      'error',
      { amountOfExportsToConsiderModuleAsBarrel: 0 },
    ],
    'import/extensions': 'off',
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',
  },
};
