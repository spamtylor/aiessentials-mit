# Google Agent Development Kit (ADK) Documentation

> **Source**: [https://google.github.io/adk-docs/](https://google.github.io/adk-docs/)  
> **Scraped**: 2025-12-30

---

## Overview

Agent Development Kit (ADK) is a flexible and modular framework for developing and deploying AI agents. While optimized for Gemini and the Google ecosystem, ADK is model-agnostic, deployment-agnostic, and built for compatibility with other frameworks.

### Key Features

- **Flexible Orchestration** - Define workflows using workflow agents (Sequential, Parallel, Loop) or LLM-driven dynamic routing
- **Multi-Agent Architecture** - Build modular applications by composing multiple specialized agents
- **Rich Tool Ecosystem** - Pre-built tools (Search, Code Exec) + custom functions + 3rd-party integrations
- **Deployment Ready** - Run locally, scale with Vertex AI Agent Engine, or deploy via Cloud Run/Docker
- **Built-in Evaluation** - Assess agent performance with test cases
- **Safety & Security** - Guardrails, sandboxed execution, and VPC controls

---

## Installation

### Python

```bash
pip install google-adk
```

### TypeScript

```bash
npm install @google/adk
```

### Go

```bash
go get google.golang.org/adk
```

### Java (Maven)

```xml
<dependency>
    <groupId>com.google.adk</groupId>
    <artifactId>google-adk</artifactId>
    <version>0.3.0</version>
</dependency>
```

---

## Quick Start (Python)

### 1. Create Virtual Environment

```bash
python -m venv .venv
.venv\Scripts\Activate.ps1  # Windows PowerShell
# or: source .venv/bin/activate  # Linux/Mac
```

### 2. Create Agent Project

```bash
adk create my_agent
```

### 3. Set API Key

Create `.env` file:

```bash
# For Google AI Studio
GOOGLE_GENAI_USE_VERTEXAI=0
GOOGLE_API_KEY=<your-api-key>

# For Vertex AI
GOOGLE_GENAI_USE_VERTEXAI=1
GOOGLE_CLOUD_PROJECT=<your-project>
GOOGLE_CLOUD_LOCATION=us-central1
```

### 4. Run Agent

```bash
adk run my_agent    # CLI mode
adk web             # Web UI mode
adk api_server      # API server mode
```

---

## Agent Types

### LlmAgent (Language Model Agent)

The core intelligent agent powered by an LLM for reasoning, planning, and decision-making.

```python
from google.adk.agents import Agent

def get_weather(city: str) -> dict:
    """Returns weather for a city."""
    return {"city": city, "temperature": "72°F", "condition": "Sunny"}

weather_agent = Agent(
    name="weather_agent",
    model="gemini-2.5-flash",
    description="Provides weather information for cities.",
    instruction="You are a helpful weather assistant. Use the get_weather tool to fetch weather data.",
    tools=[get_weather]
)
```

#### Key Parameters

| Parameter | Description |
|-----------|-------------|
| `name` | Unique identifier (required) |
| `model` | LLM model string, e.g., "gemini-2.5-flash" (required) |
| `description` | Summary for multi-agent routing |
| `instruction` | System prompt guiding behavior |
| `tools` | List of callable functions/tools |
| `output_key` | Save output to session state |
| `output_schema` | Pydantic model for structured JSON output |
| `generate_content_config` | LLM generation parameters (temperature, etc.) |

---

### Workflow Agents

Deterministic control flow without LLM orchestration.

#### SequentialAgent

Executes sub-agents in order:

```python
from google.adk.agents import SequentialAgent

pipeline = SequentialAgent(
    name="document_pipeline",
    sub_agents=[summarizer_agent, question_generator_agent]
)
```

#### ParallelAgent

Executes sub-agents concurrently:

```python
from google.adk.agents import ParallelAgent

data_fetcher = ParallelAgent(
    name="parallel_fetch",
    sub_agents=[fetch_stocks, fetch_news, fetch_sentiment]
)
```

#### LoopAgent

Iterative execution:

```python
from google.adk.agents import LoopAgent

refiner = LoopAgent(
    name="iterative_refiner",
    sub_agents=[draft_agent, review_agent],
    max_iterations=3
)
```

---

### Multi-Agent Systems

Compose multiple agents into hierarchies for complex applications.

```python
from google.adk.agents import Agent, SequentialAgent

# Specialist agents
researcher = Agent(name="researcher", model="gemini-2.5-flash", ...)
writer = Agent(name="writer", model="gemini-2.5-flash", ...)
editor = Agent(name="editor", model="gemini-2.5-flash", ...)

# Orchestrator
content_team = SequentialAgent(
    name="content_production",
    sub_agents=[researcher, writer, editor]
)
```

---

## Tools

### Built-in Tools

#### Gemini API Tools

| Tool | Description |
|------|-------------|
| `google_search` | Web search via Google Search |
| Code Execution | Execute and debug code |
| Computer Use | Operate computer UIs |

#### Google Cloud Tools

- **BigQuery** - Data analysis and queries
- **Bigtable** - NoSQL data retrieval
- **Spanner** - SQL database operations
- **Vertex AI RAG Engine** - Private data retrieval
- **Vertex AI Search** - Search configured data stores
- **Application Integration** - Enterprise app connectors
- **Apigee API Hub** - Turn APIs into tools

#### Third-Party Tools

- GitHub, GitLab, Atlassian
- Hugging Face, Notion, Linear
- Paypal, Qdrant, n8n

---

### Custom Function Tools

```python
def calculate_mortgage(
    principal: float,
    rate: float,
    years: int
) -> dict:
    """Calculate monthly mortgage payment.
    
    Args:
        principal: Loan amount in dollars
        rate: Annual interest rate as decimal (e.g., 0.05 for 5%)
        years: Loan term in years
    
    Returns:
        Dictionary with monthly payment and total paid
    """
    monthly_rate = rate / 12
    num_payments = years * 12
    payment = principal * (monthly_rate * (1 + monthly_rate)**num_payments) / ((1 + monthly_rate)**num_payments - 1)
    return {
        "monthly_payment": round(payment, 2),
        "total_paid": round(payment * num_payments, 2)
    }

agent = Agent(
    name="mortgage_calculator",
    model="gemini-2.5-flash",
    tools=[calculate_mortgage]
)
```

---

### MCP Tools (Model Context Protocol)

Integrate external MCP servers as tool providers:

```python
from google.adk.tools import McpToolset
from google.adk.agents import Agent

# Connect to filesystem MCP server
mcp_tools = McpToolset(
    command="npx",
    args=["-y", "@anthropics/mcp-server-filesystem", "/path/to/allowed/dir"]
)

agent = Agent(
    name="file_agent",
    model="gemini-2.5-flash",
    tools=[mcp_tools]
)
```

---

## Session & State Management

### Session

Unique conversation thread with history and state:

```python
from google.adk.sessions import InMemorySessionService

session_service = InMemorySessionService()
session = session_service.create_session(
    app_name="my_app",
    user_id="user_123"
)
```

### State

Key-value storage within a session:

```python
# In tools, access via ToolContext
def my_tool(query: str, tool_context) -> dict:
    # Read state
    user_prefs = tool_context.state.get("user_preferences", {})
    
    # Write state
    tool_context.state["last_query"] = query
    
    return {"result": "..."}
```

### Artifacts

Binary data management:

```python
def save_report(data: bytes, tool_context) -> dict:
    artifact_id = tool_context.save_artifact(
        name="monthly_report.pdf",
        data=data,
        mime_type="application/pdf"
    )
    return {"artifact_id": artifact_id}
```

---

## Deployment

### Vertex AI Agent Engine

Fully managed auto-scaling service:

```bash
adk deploy agent_engine my_agent
```

### Cloud Run

Container-based serverless:

```bash
adk deploy cloud_run my_agent
```

### Google Kubernetes Engine (GKE)

For more control and open models:

```bash
# Build container
docker build -t my-agent .
# Deploy to GKE
kubectl apply -f deployment.yaml
```

### Local Docker

```bash
docker build -t my-agent .
docker run -p 8080:8080 my-agent
```

---

## Evaluation

### Create Test File

`my_agent.test.json`:

```json
[
  {
    "input": "What's the weather in Tokyo?",
    "expected_output": "sunny",
    "expected_tools": ["get_weather"]
  }
]
```

### Run Evaluation

```bash
adk eval my_agent
```

### Evaluation Criteria

- **Final Response Quality** - Correctness and relevance
- **Trajectory Analysis** - Steps taken, tool choices, efficiency

---

## Safety & Security

### Best Practices

1. **Identity & Authorization**
   - Define agent and user auth
   - Control who the agent acts as

2. **Guardrails**
   - In-tool defensive design
   - Built-in Gemini safety filters
   - Callbacks for validation

3. **Sandboxed Code Execution**
   - Prevent model-generated code from causing issues

4. **Network Controls**
   - VPC Service Controls
   - Limit agent activity to secure perimeters

### Example Callback

```python
def safety_callback(context, request):
    # Screen for harmful content
    if contains_harmful_content(request.prompt):
        return {"blocked": True, "reason": "Content policy violation"}
    return None

agent = Agent(
    name="safe_agent",
    model="gemini-2.5-flash",
    before_model_callback=safety_callback
)
```

---

## CLI Reference

| Command | Description |
|---------|-------------|
| `adk create <name>` | Create new agent project |
| `adk run <agent>` | Run agent in CLI mode |
| `adk web` | Launch web UI |
| `adk api_server` | Start API server |
| `adk eval <agent>` | Run evaluations |
| `adk deploy cloud_run <agent>` | Deploy to Cloud Run |
| `adk deploy agent_engine <agent>` | Deploy to Vertex AI |

---

## Resources

- **Documentation**: [https://google.github.io/adk-docs/](https://google.github.io/adk-docs/)
- **Python SDK**: [https://github.com/google/adk-python](https://github.com/google/adk-python)
- **TypeScript SDK**: [https://github.com/google/adk-js](https://github.com/google/adk-js)
- **Go SDK**: [https://github.com/google/adk-go](https://github.com/google/adk-go)
- **Java SDK**: [https://github.com/google/adk-java](https://github.com/google/adk-java)
- **Samples**: [https://github.com/google/adk-samples](https://github.com/google/adk-samples) (cloned to `repos/adk-samples`)
