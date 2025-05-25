export default {
  render: (resumeData: unknown, options: unknown) => {
    return `<html><body><h1>Native Theme (${options?.locale || '??'})</h1><h2>${
      resumeData?.basics?.name || 'No Name'
    }</h2></body></html>`;
  },
};
