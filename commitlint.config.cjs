module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [0], // Disable body line length check entirely
    'header-max-length': [0], // Disable header line length check entirely
  },
  helpUrl: 'https://www.conventionalcommits.org/en/v1.0.0/',
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*)(?:\((.*)\))?: (.*)$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
};
