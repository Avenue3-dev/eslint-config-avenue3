<h1 align="center">@avenue3-dev/eslint-config</h1>

A collection of ESLint configurations for Avenue3 projects. This uses the Airbnb configuration as a base and adds some additional rules and configurations.

## Installation

```bash
npm install --save-dev @avenue3-dev/eslint-config
```

## Usage

### Node

```js
// .eslintrc.cjs

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: ['@avenue3-dev/eslint-config'],
};
```

### React

```js
// .eslintrc.cjs

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: ['@avenue3-dev/eslint-config/react'],
};
```

## Prettier

```js
//prettier.config.cjs

/** @type {import("prettier").Config} */
module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
};
```

## Changelog

[Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)
