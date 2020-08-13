module.exports = {
  root: true,
  env: {
    browser: true
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  settings: {
    'import/resolver': {
      typescript: {} // this loads <rootdir>/tsconfig.json to eslint
    },
    'import/extensions': [
      '.ts'
    ]
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base/whitespace'
  ],
  rules: {
    'comma-dangle': ['warn', 'never'],
    'import/extensions': [
      'warn',
      'ignorePackages',
      {
        ts: 'never'
      }
    ],
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'max-len': ['warn', 120],
    'import/no-extraneous-dependencies': ['warn', { devDependencies: true }]
  }
};
