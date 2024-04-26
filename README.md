<h1 align="center">@avenue3-dev/eslint-config</h1>

A collection of ESLint configurations for Avenue3 projects. This uses the Airbnb configuration as a base and adds some additional rules and configurations.

This configuration is intended to be used with TypeScript projects.

## Installation

```bash
npm install @avenue3-dev/eslint-config \
            @typescript-eslint/eslint-plugin@^7.2.0 \
            @typescript-eslint/parser@^7.2.0 \
            --save-dev
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

We use Prettier as our code formatter and have a default configuration that we use across all projects. You can use this configuration by creating a `prettier.config.cjs` file in the root of your project.

```js
//prettier.config.cjs

/** @type {import("prettier").Config} */
module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 120,
};
```

## Changelog

[Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)
