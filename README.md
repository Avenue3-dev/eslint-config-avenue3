<h1 align="center">eslint-config-avenue3</h1>

This package provides Avenue3's .eslintrc as an extensible shared config.

## Installation

```bash
npm install --save-dev eslint-config-avenue3
```

## Usage

### Node

```js
// .eslintrc.js
{
  extends: ['avenue3'],
};
```

### React

```js
// .eslintrc.js
{
  extends: ['avenue3/react'],
  parserOptions: {
    project: './tsconfig.json',
  },
};
```

## Changelog

[Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)
