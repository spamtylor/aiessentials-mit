# MCP Server Configuration

This directory contains Model Context Protocol (MCP) server configurations for this project.

## Configured Servers

| Server | Purpose | Package |
|--------|---------|---------|
| **filesystem** | Read/write project files | `@modelcontextprotocol/server-filesystem` |
| **memory** | Persistent key-value store | `@modelcontextprotocol/server-memory` |
| **fetch** | HTTP web requests | `@modelcontextprotocol/server-fetch` |
| **sqlite** | Structured data storage | `@modelcontextprotocol/server-sqlite` |

## Antigravity IDE Setup

Your Antigravity MCP config has been set up at:

```
~/.gemini/antigravity/mcp_config.json
```

**Accessible directories:**

- `D:/Development/Projects` (all projects)
- `C:/Users/soup/Documents` (documents)

**Database location:**

- `D:/Development/Projects/AIEssentials-MIT/data/knowledge.db`

### Verify Configuration

In Antigravity:

1. Open Settings → **MCP Servers**
2. Click **Manage MCP Servers**
3. Verify all 4 servers are listed

Or use keyboard shortcut to toggle MCP panel.

## ADK Agent Integration

To use MCP tools in an ADK agent:

```python
from google.adk.tools import MCPToolset

# Load MCP servers from config
mcp_tools = MCPToolset.from_config("mcp/mcp_config.json")

agent = Agent(
    name="mcp_enabled_agent",
    model="gemini-2.0-flash",
    tools=[mcp_tools],
    # ...
)
```

## Troubleshooting

### Servers not starting

```powershell
# Test each server manually
npx -y @modelcontextprotocol/server-filesystem "D:/Development/Projects"
npx -y @modelcontextprotocol/server-memory
npx -y @modelcontextprotocol/server-fetch
npx -y @modelcontextprotocol/server-sqlite --db-path "./data/knowledge.db"
```

### SQLite database not found

```powershell
# Create the data directory if missing
New-Item -ItemType Directory -Path "data" -Force
```

### Permission errors

Ensure Node.js has access to the configured directories.
