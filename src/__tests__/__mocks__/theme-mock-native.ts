export default {
  render: (resumeData: Record<string, unknown>, options: Record<string, unknown>) => {
    const locale = (options['locale'] as string | undefined) ?? '??';
    const basics = resumeData['basics'] as Record<string, unknown> | undefined;
    const name = typeof basics?.['name'] === 'string' ? basics['name'] : 'No Name';
    return `<html><body><h1>Native Theme (${locale})</h1><h2>${name}</h2></body></html>`;
  },
};
