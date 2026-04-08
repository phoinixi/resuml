export default {
  render: (resumeData: Record<string, unknown>) => {
    const basics = resumeData['basics'] as Record<string, unknown> | undefined;
    const name = String(basics?.['name'] ?? 'No Name');
    return `<html><body><h1>JSONResume Theme: ${name}</h1></body></html>`;
  },
};
