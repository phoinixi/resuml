export default {
  render: (resumeData: Record<string, unknown>) => {
    return `<html><body><h1>JSONResume Theme: ${
      (resumeData?.['basics'] as Record<string, unknown>)?.['name'] || 'No Name'
    }</h2></body></html>`;
  },
};
