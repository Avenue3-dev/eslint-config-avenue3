<h1 align="center">@avenue3-dev/eslint-config</h1>

A collection of ESLint v9 flat configurations for Avenue3 projects. Includes TypeScript, Prettier, and import sorting rules out of the box.

This configuration is intended to be used with TypeScript projects.

## Requirements

- ESLint `>=9.0.0`
- TypeScript `>=5.0.0`
- Prettier `>=3.0.0`

## Installation

```bash
npm install --save-dev @avenue3-dev/eslint-config eslint typescript prettier
```

## Usage

### Node / General

```js
// eslint.config.js

import avenueConfig from '@avenue3-dev/eslint-config';

export default [{ ignores: ['dist'] }, ...avenueConfig];
```

### React

```js
// eslint.config.js

import avenueReactConfig from '@avenue3-dev/eslint-config/react';

export default [{ ignores: ['dist'] }, ...avenueReactConfig];
```

## Prettier

We use Prettier as our code formatter and have a default configuration that we use across all projects. You can use this configuration by creating a `prettier.config.js` file in the root of your project.

```js
// prettier.config.js

/** @type {import("prettier").Config} */
export default {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 80,
  endOfLine: 'lf',
};
```

## Changelog

[Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)
