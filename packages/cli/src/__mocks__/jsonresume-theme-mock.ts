export default {
  render: (resumeData: unknown) => {
    return `<html><body><h1>JSONResume Theme: ${
      resumeData?.basics?.name || 'No Name'
    }</h1></body></html>`;
  },
};
