export default {
  render: (resumeData: Record<string, unknown>, options: Record<string, unknown>) => {
    return `<html><body><h1>Native Theme (${(options?.['locale'] as string) || '??'})</h1><h2>${
      (resumeData?.['basics'] as Record<string, unknown>)?.['name'] || 'No Name'
    }</h2></body></html>`;
  },
};
