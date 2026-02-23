# Changelog

## [2.0.0](https://github.com/Avenue3-dev/eslint-config-avenue3/compare/1.1.4...2.0.0) (2026-02-23)


### ⚠ BREAKING CHANGES

* Drop ESLint v8 eslintrc format and airbnb ruleset.
Rewrite configs as ESLint v9 flat config using typescript-eslint,
eslint-plugin-import, simple-import-sort, prettier, jsx-a11y,
react-hooks, react-refresh, and barrel-files.

Consumers must migrate from .eslintrc.* to eslint.config.js.
See README for updated installation and usage.

### Features

* migrate to ESLint v9 flat config ([81d1037](https://github.com/Avenue3-dev/eslint-config-avenue3/commit/81d1037cd7c804fa6c0e496a4b1c13bf2153da26))

## [1.1.4](https://github.com/Avenue3-dev/eslint-config-avenue3/compare/1.1.3...1.1.4) (2024-06-07)

## [1.1.3](https://github.com/Avenue3-dev/eslint-config-avenue3/compare/1.1.2...1.1.3) (2024-06-07)

## [1.1.2](https://github.com/Avenue3-dev/eslint-config-avenue3/compare/1.1.1...1.1.2) (2024-06-07)

## [1.1.1](https://github.com/Avenue3-dev/eslint-config-avenue3/compare/1.1.0...1.1.1) (2024-06-07)

## [1.1.0](https://github.com/Avenue3-dev/eslint-config-avenue3/compare/1.0.2...1.1.0) (2024-06-07)


### Features

* decrease max line length to 80 ([#4](https://github.com/Avenue3-dev/eslint-config-avenue3/issues/4)) ([6fac100](https://github.com/Avenue3-dev/eslint-config-avenue3/commit/6fac1005a63f9fc386344e7f62300a0be9887dd8))


### Bug Fixes

* backticks being allowed when not using string interpolation ([#3](https://github.com/Avenue3-dev/eslint-config-avenue3/issues/3)) ([efffd55](https://github.com/Avenue3-dev/eslint-config-avenue3/commit/efffd553fd8d076801860f87201cfad22e29054d))
* update react/jsx-key rule to enforce keys for fragments ([#5](https://github.com/Avenue3-dev/eslint-config-avenue3/issues/5)) ([055180c](https://github.com/Avenue3-dev/eslint-config-avenue3/commit/055180c88c4a3555d8d988d16d26fec52a97fd20))

## [1.0.2](https://github.com/Avenue3-dev/eslint-config-avenue3/compare/1.0.1...1.0.2) (2024-04-26)


### Bug Fixes

* add missing exntends ([cedf2d2](https://github.com/Avenue3-dev/eslint-config-avenue3/commit/cedf2d229b0c7bb62b1f590d86f5fd5937e0c16a))

## [1.0.1](https://github.com/Avenue3-dev/eslint-config-avenue3/compare/1.0.0...1.0.1) (2024-04-25)

## [1.0.0](https://github.com/Avenue3-dev/eslint-config-avenue3/compare/0.0.4...1.0.0) (2024-04-25)

## [0.0.4](https://github.com/Avenue3-dev/eslint-config-avenue3/compare/0.0.3...0.0.4) (2024-04-25)

## [0.0.3](https://github.com/Avenue3-dev/eslint-config-avenue3/compare/0.0.2...0.0.3) (2024-04-25)

## [0.0.2](https://github.com/Avenue3-dev/eslint-config-avenue3/compare/0.0.1...0.0.2) (2024-04-25)

## 0.0.1 (2024-04-25)


### Bug Fixes

* config ordering ([26501ae](https://github.com/Avenue3-dev/eslint-config-avenue3/commit/26501aed948e62f9b385e0642b9bb36795714465))
