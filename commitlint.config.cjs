module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [2, 'always', 200], // Increase from 100 to 200 for release commits
  },
  ignores: [
    (message) => message.includes('[skip ci]'), // Skip commitlint for release commits
  ],
};
