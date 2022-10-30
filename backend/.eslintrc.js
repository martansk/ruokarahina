module.exports = {
  'env': {
    'commonjs': true,
    'es2021': true,
    'node': true,
    'jest/globals': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:jest/recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 'latest'
  },
  'plugins': [
    'jest'
  ],
  'rules': {
    'indent': [
      'error',
      4
    ],
    'linebreak-style': [
      'error',
      'windows'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ]
  }
}