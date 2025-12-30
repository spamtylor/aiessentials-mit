# Google Antigravity Documentation

> **Source**: [https://antigravity.google/docs/home](https://antigravity.google/docs/home)  
> **Scraped**: 2025-12-30

---

## Overview

Google Antigravity is an **agentic development platform** designed to evolve the IDE into an agent-first era. It allows developers to manage agents across multiple workspaces while maintaining a familiar AI-powered IDE experience. Antigravity empowers agents with the tools to operate autonomously across the editor, terminal, and browser.

### Main Features

- **AI-powered IDE** — Core AI features: Agent, Tab, and Command
- **Asynchronous Agents** — Local agents that work in parallel across all workspaces
- **Agent Manager** — Dedicated view for planning, conversation, and artifact review
- **Multi-window** — Comprehensive product experience with Editor, Manager, and Browser
- **Browser Agent** — Agent capable of performing developer tasks in the browser (SCM actions, UI testing)

### Core Surfaces

| Surface | Description |
|---------|-------------|
| **Editor** | Full AI-powered IDE for single workspaces |
| **Browser** (Preview) | Enables agents to read and act on surfaces beyond the IDE |
| **Agent Manager** (Preview) | "No code" orchestration view for managing tasks and conversations |

---

## Getting Started

### Downloads

| Platform | Format |
|----------|--------|
| **macOS** | DMG |
| **Windows** | EXE |
| **Linux** | AppImage |

### Navigation

- **Agent Manager**: Focused on high-level goals and project management
- **Editor**: Full IDE interface for active development and code review

---

## Agent

The **Agent** is the primary AI modality in Antigravity — a multi-step reasoning system that uses tools to accomplish goals.

### Components

- **Reasoning Model** — The LLM powering the agent's decisions
- **Tools** — Available actions the agent can take
- **Artifacts** — Outputs created by the agent (markdown, diagrams, images, recordings)
- **Knowledge** — Persistent memory across sessions

### Customization

Agents can be tailored via:

- **Agent Modes** — Different operational settings
- **MCP (Model Context Protocol)** — Connect to external tools and services
- **Rules/Workflows** — Define constraints and reusable procedures

---

## Models

### Reasoning Models

For the core reasoning model, Antigravity offers leading frontier models from the **Google Vertex Model Garden**:

| Model | Tier |
|-------|------|
| **Gemini 3 Pro (high)** | High performance |
| **Gemini 3 Pro (low)** | Standard performance |
| **Gemini 3 Flash** | Fast/efficient |
| **Claude Sonnet 4.5** | Anthropic |
| **Claude Sonnet 4.5 (thinking)** | Anthropic w/ extended reasoning |
| **Claude Opus 4.5 (thinking)** | Anthropic highest tier |
| **GPT-OSS** | OpenAI |

#### Model Selection

- Select reasoning model via dropdown under the conversation prompt box
- Model choice is **sticky** within a conversation
- If you change models while Agent is running, it continues with the previous model until current steps complete

> Learn more about reasoning model rate limits in the [Plans](#plans) section.

### Additional Models (Non-customizable)

Antigravity uses specialized models for various parts of the stack:

| Model | Purpose |
|-------|---------|
| **Nano Banana Pro** | Generative image tool — UI mockups, web page images, system diagrams |
| **Gemini 2.5 Pro UI Checkpoint** | Browser subagent — clicking, scrolling, filling inputs |
| **Gemini 2.5 Flash** | Background checkpointing and context summarization |
| **Gemini 2.5 Flash Lite** | Codebase semantic search tool |

---

## Agent Modes / Settings

### Common Modes

| Mode | Description |
|------|-------------|
| **Planning** | High-level reasoning for complex tasks |
| **Fast** | Optimized for speed and lower latency tasks |

### Review Policy

Configurable settings for artifact reviews:

- **"Always Proceed"** — Automatic approval
- **"Request Review"** — Agent requests user approval before execution

---

## Rules / Workflows

### Rules

Manually defined constraints to guide agent behavior:

- **Global Rules**: `~/.gemini/GEMINI.md`
- **Workspace Rules**: `.agent/rules/`

### Workflows

Reusable sequences of steps defined in markdown files:

- Location: `.agent/workflows/`
- Invoke via: `/workflow-name`

---

## Task Groups

Used in **Planning mode** to break down complex problems into manageable units.

### Structure

- Displays overarching goals
- Summary of changes
- Edited files
- Progress on subtasks

---

## Browser Subagent

A specialized subagent for web-based tasks.

### Capabilities

- Clicks, scrolls, typing
- DOM capture
- Screenshot and video recording

### Visual Controls

- Indicated by a blue border
- Can operate in background without stealing focus

---

## Secure Mode

### Controls

- **URL Denylist** — Automatically blocks malicious URLs (Google's BadUrlsChecker)
- **URL Allowlist** — Local text file to explicitly trust specific domains

### Review Policies

Default "Request Review" for:

- Terminal commands
- Browser actions
- Artifacts

### Isolation

- Respects `.gitignore`
- Maintains workspace isolation
- Uses separate browser profile

---

## MCP (Model Context Protocol)

Antigravity supports the **Model Context Protocol (MCP)**, a standard that allows the editor to securely connect to your local tools, databases, and external services. This integration provides the AI with real-time context beyond just the files open in your editor.

### What is MCP?

MCP acts as a bridge between Antigravity and your broader development environment. Instead of manually pasting context (like database schemas or logs) into the editor, MCP allows Antigravity to fetch this information directly when needed.

### Core Features

#### 1. Context Resources

The AI can read data from connected MCP servers to inform its suggestions.

**Examples:**

- When writing a SQL query, Antigravity can inspect your live **Neon** or **Supabase** schema to suggest correct table and column names
- When debugging, the editor can pull in recent build logs from **Netlify** or **Heroku**

#### 2. Custom Tools

MCP enables Antigravity to execute specific, safe actions defined by your connected servers.

**Examples:**

- "Create a Linear issue for this TODO."
- "Search Notion or GitHub for authentication patterns."

### How to Connect

Connections are managed through the built-in **MCP Store**:

1. **Access the Store**: Open the MCP Store panel within the "..." dropdown at the top of the editor's side panel
2. **Browse & Install**: Select any of the supported servers from the list and click Install
3. **Authenticate**: Follow the on-screen prompts to securely link your accounts (where applicable)

Once installed, resources and tools from the server are automatically available to the editor.

### Connecting Custom MCP Servers

To connect to a custom MCP server:

1. Open the MCP store via the "..." dropdown at the top of the editor's agent panel
2. Click on **"Manage MCP Servers"**
3. Click on **"View raw config"**
4. Modify the `mcp_config.json` with your custom MCP server configuration

### Supported Servers

The MCP Store currently features integrations for:

| Category | Servers |
|----------|---------|
| **Databases** | AlloyDB for PostgreSQL, BigQuery, Cloud SQL for PostgreSQL, Cloud SQL for MySQL, Cloud SQL for SQL Server, Dataplex, MCP Toolbox for Databases, MongoDB, Neon, Pinecone, Prisma, Redis, Spanner, Supabase |
| **Development** | Dart, Figma Dev Mode MCP, Firebase, GitHub, Harness, Heroku, Locofy, Netlify, SonarQube |
| **Productivity** | Atlassian, Linear, Notion |
| **AI/Search** | Airweave, Looker, Perplexity Ask, Sequential Thinking |
| **Payments** | PayPal, Stripe |

**Full Server List:**

- Airweave
- AlloyDB for PostgreSQL
- Atlassian
- BigQuery
- Cloud SQL for PostgreSQL
- Cloud SQL for MySQL
- Cloud SQL for SQL Server
- Dart
- Dataplex
- Figma Dev Mode MCP
- Firebase
- GitHub
- Harness
- Heroku
- Linear
- Locofy
- Looker
- MCP Toolbox for Databases
- MongoDB
- Neon
- Netlify
- Notion
- PayPal
- Perplexity Ask
- Pinecone
- Prisma
- Redis
- Sequential Thinking
- SonarQube
- Spanner
- Stripe
- Supabase

---

## Artifacts

Rich outputs used to communicate work between the agent and user.

### Types

- Markdown documents
- Diagrams
- Screenshots
- Browser recordings
- Code diffs

### Collaboration

Allows for asynchronous review and steering of the agent's implementation progress.

---

## Task List

A markdown artifact the agent uses to track progress on complex tasks:

- Research
- Implementation
- Verification

It is a live snapshot of agent actions, generally used for tracking rather than direct user interaction.

---

## Implementation Plan

Used by the agent to architect codebase changes.

### Features

- Contains technical details for user review
- Unless set to "Always Proceed," agent requests approval before executing
- Users can comment on plans to provide feedback or correct discrepancies

---

## Walkthrough

Generated after task completion, providing a concise summary of changes.

### Content

- Summary of modifications
- Screenshots and screen recordings (for browser tasks)
- Helps user get up to speed with codebase/browser state

---

## Screenshots

The browser subagent can take screenshots for user review.

### Features

- Saved as image artifacts
- Can be commented on for feedback
- Users can manually prompt the agent to take a screenshot

---

## Browser Recordings

Looping videos of the browser agent's actions.

### Access

- Available in the Browser step UI
- Stored as separate recording artifacts
- Provide visual playback of agent interactions

---

## Knowledge

A persistent memory system that captures insights and solutions across sessions.

### Knowledge Items (KIs)

- Contain summaries and related artifacts
- Automatically created or updated by the agent
- Used to inform future responses

---

## Editor

The primary Antigravity interface, built on **VS Code**.

### Features

- AI features for file editing and suggestions
- Agent collaboration
- Supports extensions from the **Open VSX marketplace**

---

## Tab & Navigation

Core navigation tools in the editor.

### Supercomplete

- Provides file-wide code suggestions
- Accept with `Tab`

### Tab-to-Jump

- Predicts next logical edit location
- Moves cursor automatically

---

## Command

Triggered via:

- **Mac**: `Cmd+I`
- **Windows/Linux**: `Ctrl+I`

### Features

- Natural language requests
- Inline code completions
- Terminal command generation

---

## Agent Side Panel

Located on the right side of the editor.

### Features

- Start conversations
- Attach images
- Switch agent modes
- Select models
- Toolbar for tracking file changes, terminal processes, and artifacts

---

## Review Changes + Source Control (Editor)

### Location

Bottom toolbar of the Agent Panel

### Functionality

- Opens a dedicated pane for file diffs
- Leave comments on specific lines of code
- Communicate feedback directly to the agent

---

## Agent Manager

High-level interface for managing work across multiple workspaces and agents.

### Navigation

- Toggle between Agent Manager and Editor: `Cmd+E` (Mac) / `Ctrl+E` (Windows)

### Features

- Manage editor windows (focus, hide, close)
- Currently in open public preview

---

## Workspaces

### Multi-tasking

Supports working across multiple workspaces simultaneously.

### Management

- Add workspaces via left sidebar
- Select local folder
- Switch between conversations across different workspaces

---

## Playground

Provides independent, temporary workspaces for instant exploration.

### Persistence

- Save work by moving contents to a dedicated workspace folder
- Preserves file state and conversation history

---

## Inbox

Central hub to track all active conversations.

### Action Items

Highlights conversations requiring user attention:

- Terminal command approval
- Browser action approval
- Implementation plan review

### Search/Filter

- Search bar
- "Pending" toggle to filter by status, title, or folder

---

## Conversation View

Central part of the Agent Manager for following agent progress.

### Follow Mode

- "Following" button at top right
- Automatically scrolls to follow agent's latest actions

---

## Browser Subagent View

Side panel showing inner workings of browser-based subagent.

### Visual Feedback

- Streams real-time actions (clicks, scrolls)
- Screenshots with visual indicators (red dots showing interaction points)

---

## Panes

Open files, artifacts, and knowledge items in persistent side-by-side panes.

### Access

- Quick Picker: `Cmd+P` / `Ctrl+P`
- "+" button in conversation header

---

## Review Changes + Source Control (Manager)

### Review

Code review directly within the Agent Manager via toggleable pane.

### Source Control

- "Source Control" tab
- Stage, unstage, and commit changes without leaving the manager

---

## Changes Sidebar

Sidebar in the manager listing all modified files and created artifacts.

### Status Indicators

- Icons show which items have been updated since last review
- Click to open immediately in a pane

---

## Terminal

Integrated terminal support within the agent manager.

### Access

Toggle: `Cmd+J` / `Ctrl+J`

### Features

- Workspace-specific terminals
- Agent-driven terminal actions occur within the editor window

---

## Files

Open file panes directly in the manager.

### Features

- Leave comments for the agent
- Highlight specific sections
- Provide targeted instructions

---

## Browser

Antigravity can operate a Chrome browser for website interaction and task automation.

### Features

- Uses specialized subagent
- Records interactions as artifacts (screenshots/videos)
- Can be toggled in settings

---

## Chrome Extension

A Chrome Browser Extension is required for the agent to access the web.

### Features

- Enables site interaction
- Control conversations (like canceling) from the browser

---

## Allowlist / Denylist

### Denylist

Automatically blocks malicious URLs using Google's BadUrlsChecker.

### Allowlist

Local text file to explicitly trust specific domains.

---

## Separate Chrome Profile

The agent uses a **separate browser profile** for privacy.

### Benefits

- Prevents sharing of sensitive cookies
- Protects personal sign-ins from primary profile
- Agent's own sign-ins persist in the separate profile

---

## Plans

Features and rate limits tied to Google subscription levels:

| Plan | Limits | Quota Refresh |
|------|--------|---------------|
| **AI Ultra** (One/Workspace) | Highest | 5 hours |
| **AI Pro** | High | 5 hours |
| **Standard** | Base | Weekly |

### Core Access (All Plans)

- Gemini models
- Unlimited tab completions
- Full tool access

---

## Settings

Access via: `Cmd+,` or gear icon

### Configurable

- Agent behavior
- Browser paths
- Telemetry data collection

---

## FAQ

### Common Topics

- Authentication errors
- Age verification requirements
- Google One/Workspace quota eligibility troubleshooting
- System sleep/wake cycle handling (progress is preserved)

---

## Keyboard Shortcuts

| Action | Mac | Windows/Linux |
|--------|-----|---------------|
| Toggle Agent Manager ↔ Editor | `Cmd+E` | `Ctrl+E` |
| Toggle Terminal | `Cmd+J` | `Ctrl+J` |
| Command (inline AI) | `Cmd+I` | `Ctrl+I` |
| Quick Picker | `Cmd+P` | `Ctrl+P` |
| Settings | `Cmd+,` | `Ctrl+,` |
