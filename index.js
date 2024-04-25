module.exports = {
  extends: ['./rules/barrel-files', './rules/import', './rules/prettier'].map(
    require.resolve
  ),
  parser: '@typescript-eslint/parser',
};
