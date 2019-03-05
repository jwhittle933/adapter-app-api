module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'arrow-spacing': 2,
    'semi': [2, 'never'],
    'camelcase': 2,
    'no-unused-vars': 1,
    'no-undef': 1,
    'no-console': 1,
    'eol-last': 1,
  },
}
