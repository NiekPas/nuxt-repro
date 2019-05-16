module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  extends: ['airbnb-base', 'plugin:vue/recommended'],
  plugins: ['vue'],
  rules: {
    "import/no-extraneous-dependencies": "off",
    'max-len': [0, 120, 2, {
      ignoreComments: true,
      ignoreStrings: true,
    }],
    'quote-props': [1, 'consistent-as-needed'],
    'radix': 0,
    'no-param-reassign': [2, {
      props: false
    }],
    'no-bitwise': 0,
    'no-plusplus': [2, {
      allowForLoopAfterthoughts: true
    }],
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': 1,
    'global-require': 0,
    'object-curly-newline': 0,
    'arrow-parens': 0,
    'vue/max-attributes-per-line': [2, {
      'singleline': 20,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }]
  },
  globals: {},
};
