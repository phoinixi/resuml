export default {
  render: (resumeData: unknown) => {
    return `<html><body><h1>JSON Resume Theme</h1><h2>${
      resumeData?.basics?.name || 'No Name'
    }</h2></body></html>`;
  },
};
