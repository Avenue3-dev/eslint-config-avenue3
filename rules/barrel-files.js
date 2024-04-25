module.exports = {
  plugins: ['barrel-files'],
  rules: {
    'barrel-files/avoid-barrel-files': [
      'error',
      { amountOfExportsToConsiderModuleAsBarrel: 0 },
    ],
  },
};
