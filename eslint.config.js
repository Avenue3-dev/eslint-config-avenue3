// @ts-check

import globals from 'globals';
import baseConfig from './index.js';

export default [
  { ignores: ['node_modules/'] },
  ...baseConfig,

  // All .js files in this package are shareable config files that must use
  // default exports (required by ESLint flat config consumers) and may
  // import from ./index.js (which the barrel-files rule would otherwise flag).
  {
    files: ['*.js'],
    rules: {
      'import/no-default-export': 'off',
      'barrel-files/avoid-barrel-files': 'off',
    },
  },

  // CJS config files (commitlint, prettier) are CommonJS modules and need
  // node globals (module, require, etc.) and commonjs sourceType.
  {
    files: ['*.cjs'],
    languageOptions: {
      globals: globals.node,
      sourceType: 'commonjs',
    },
  },
];
