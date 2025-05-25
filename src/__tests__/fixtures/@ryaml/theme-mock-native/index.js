export default {
  render: (resumeData, options = {}) => {
    const locale = options.locale || 'en';
    const name = resumeData?.basics?.name || 'No Name';
    return `<html><body><h1>Native Theme (${locale})</h1><h2>${name}</h2></body></html>`;
  },
};
