import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

async function main() {
  console.log("Starting MCP Client test...");
  
  const transport = new StdioClientTransport({
    command: "primevue-mcp",
    args: []
  });

  const client = new Client(
    { name: "test-client", version: "1.0.0" },
    { capabilities: {} }
  );

  await client.connect(transport);
  console.log("✅ Connected directly to primevue-mcp via stdio!");

  // Test list tools
  const tools = await client.listTools();
  console.log("✅ Available Tools:", tools.tools.map(t => t.name).join(", "));

  // Test search_icons
  console.log("- Testing search_icons tool with query 'arrow'...");
  const searchIconsResult = await client.callTool({
    name: "search_icons",
    arguments: { query: "arrow" }
  });
  const searchObj = JSON.parse(searchIconsResult.content[0]!.text as string);
  console.log(`  Found ${searchObj.count} arrow icons. Example: ${searchObj.icons[0]}`);

  // Test list_components
  console.log("- Testing list_components tool...");
  const listComponentsResult = await client.callTool({
    name: "list_components",
    arguments: {}
  });
  const listObj = JSON.parse(listComponentsResult.content[0]!.text as string);
  console.log(`  Server Stats - Components: ${listObj.stats.components}, Icons: ${listObj.stats.icons}, Tokens: ${listObj.stats.tokens}`);

  console.log("✅ All tests passed!");
  process.exit(0);
}

main().catch(console.error);
