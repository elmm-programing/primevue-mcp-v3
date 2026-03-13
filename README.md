# 🧩 PrimeVue MCP Server

Model Context Protocol (MCP) server providing structured access to **PrimeVue components** and **design tokens** — including props, examples, and metadata for AI and developer tools.

[![Add to Cursor](https://img.shields.io/badge/Add%20to-Cursor-blue?logo=cursor)](cursor://add-mcp?url=https://primevue-mcp-1.onrender.com)
[![Live API](https://img.shields.io/badge/Open-Live%20API-green)](https://primevue-mcp-1.onrender.com)
[![License](https://img.shields.io/badge/License-MIT-lightgrey)](./LICENSE)

---

## 🚀 Features

- 🔍 **Query**: Search, filter, and explore PrimeVue components  
- 🧱 **Resources**: Access structured component metadata and design tokens  
- ⚡️ **Tools**: Retrieve props, examples, and documentation  
- 🌐 **Public API**: Available online and via local STDIO

---

## 🧩 Available Tools

| Tool | Description |
|------|--------------|
| `search_components` | Search components by name, title, or description |
| `get_component` | Get detailed information about a specific component |
| `search_tokens` | Search design tokens |
| `list_components` | List all available components with stats |

---

## ⚙️ Usage

### Global Installation

To use this MCP server across your system, install it globally using `pnpm`:

```bash
pnpm add -g /path/to/repo/primevue-mcp-v3-1.0.0.tgz
```

*(Note: In the future, this will be published to npm. For now, pack the project with `pnpm pack` and install the tarball globally).*

### 🛸 Setting up with Google Antigravity

Add the following configuration to your `~/.gemini/antigravity/mcp_config.json` file to enable the PrimeVue MCP server:

```json
{
  "mcpServers": {
    "primevue-mcp": {
      "command": "primevue-mcp",
      "args": []
    }
  }
}
```

Once added, restart the Antigravity agent or reload the configuration. You can now use tools like `search_components`, `search_icons`, and read PrimeVue resources directly within Antigravity!
