module.exports = {
  env: {
    es6: true,
    jest: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'semistandard',
    'plugin:react/recommended'
  ],
  plugins: [
    'react'
  ],
  rules: {
    camelcase: 0
  }
};
