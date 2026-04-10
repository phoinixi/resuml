export async function mcpAction(): Promise<void> {
  const { startMcpServer } = await import('../mcp/server');
  await startMcpServer();
}
