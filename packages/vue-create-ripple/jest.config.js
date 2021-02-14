module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  globals: {
    'ts-jest': {
      babelConfig: 'babel.config.test.json'
    }
  },
  collectCoverageFrom: [
    '**/*.ts',
    '!**/node_modules/**'
  ]
};
