# AIEssentials-MIT: Master Guide

> **Generated**: 2025-12-30  
> **Status**: Living document — expand as the repository grows

---

## Overview

This repository is a **comprehensive AI development knowledge base** combining educational resources, prompt engineering tools, practical agent development, and reference documentation. It's structured to support learning AI fundamentals and building production-ready AI agents.

---

## Directory Structure

```
AIEssentials-MIT/
├── AiBasics/           # 📚 Educational content (MIT Sloan / academic sources)
├── Prompts/            # 🛠️ Prompt engineering generators (AIM/MAP/OCEAN frameworks)
├── agents/             # 🤖 Google ADK agent implementations
├── docs/               # 📖 Reference documentation (scraped & curated)
├── repos/              # 📦 Cloned repositories (adk-samples)
└── .venv/              # Python virtual environment
```

---

## 1. AiBasics — Educational Foundation

**Purpose**: Core educational content on generative AI, mostly from MIT Sloan and academic sources.

| File | Description | Size |
|------|-------------|------|
| [Effective Prompts for AI The Essentials.md](file:///d:/Development/Projects/AIEssentials-MIT/AiBasics/Effective%20Prompts%20for%20AI%20The%20Essentials.md) | Comprehensive prompt engineering guide covering zero-shot, few-shot, chain-of-thought techniques. Includes limitations and best practices. | 13 KB |
| [Generative AI as a New Innovation Platform.md](file:///d:/Development/Projects/AIEssentials-MIT/AiBasics/Generative%20AI%20as%20a%20New%20Innovation%20Platform.md) | MIT Sloan perspective on AI as an emerging platform technology. Covers ecosystem layers, market dynamics, and risks. | 6 KB |
| [Glossary of Terms - Generative AI Basics.md](file:///d:/Development/Projects/AIEssentials-MIT/AiBasics/Glossary%20of%20Terms%20-%20Generative%20AI%20Basics.md) | Terminology reference for generative AI concepts. | 10 KB |
| [MIT Sloans Rama Ramakrishnan Shares Primer on ChatGPT.md](file:///d:/Development/Projects/AIEssentials-MIT/AiBasics/MIT%20Sloans%20Rama%20Ramakrishnan%20Shares%20Primer%20on%20ChatGPT.md) | In-depth primer on ChatGPT from an MIT Sloan professor. | 19 KB |
| [When AI Gets It Wrong_Addressing AI Hallucinations and Bias.md](file:///d:/Development/Projects/AIEssentials-MIT/AiBasics/When%20AI%20Gets%20It%20Wrong_Addressing%20AI%20Hallucinations%20and%20Bias.md) | Critical analysis of AI limitations including hallucinations and bias. | 10 KB |

### Key Takeaways

- **Prompt Types**: Zero-shot, few-shot, chain-of-thought, role-based
- **Limitations**: Hallucinations, bias, context window constraints
- **Platform View**: AI as innovation platform with network effects

---

## 2. Prompts — Prompt Engineering Suite

**Purpose**: Ready-to-use system prompts for generating high-quality prompts. Built on **AIM** (Actor, Input, Mission), **MAP** (Memory, Assets, Actions), and **OCEAN** (Original, Concrete, Evident, Assertive, Narrative) frameworks.

| Generator | File | Best For |
|-----------|------|----------|
| **Zero-Shot** | [zero_shot_generator.md](file:///d:/Development/Projects/AIEssentials-MIT/Prompts/zero_shot_generator.md) | Simple tasks, data transformation, strict constraints |
| **Few-Shot** | [few_shot_generator.md](file:///d:/Development/Projects/AIEssentials-MIT/Prompts/few_shot_generator.md) | Pattern matching, nuanced classification, format mimicking |
| **Instructional** | [instructional_generator.md](file:///d:/Development/Projects/AIEssentials-MIT/Prompts/instructional_generator.md) | Multi-step execution, operational tasks, concise outputs |
| **Role-Based** | [role_based_generator.md](file:///d:/Development/Projects/AIEssentials-MIT/Prompts/role_based_generator.md) | Creative writing, expert consulting, voice changes |
| **Contextual** | [contextual_generator.md](file:///d:/Development/Projects/AIEssentials-MIT/Prompts/contextual_generator.md) | Complex scenarios, role-playing, history-dependent decisions |
| **Advanced Council** | [advanced_prompt_generatorv2.md](file:///d:/Development/Projects/AIEssentials-MIT/Prompts/advanced_prompt_generatorv2.md) | High-complexity tasks, multi-expert "hive mind" prompts |

### Usage

1. Copy generator content into your LLM's system prompt
2. Describe your task to the system
3. Receive framework-compliant prompt output

### Advanced Strategies (from README)

- **Precision Teacher**: Directive + Few-Shot for 99% accuracy
- **Immersive Simulation**: Persona + Contextual for simulations
- **Specialist Council**: Advanced + Specialized for "super prompts"

Full documentation: [Prompts/README.md](file:///d:/Development/Projects/AIEssentials-MIT/Prompts/README.md)

---

## 3. agents — Google ADK Implementations

**Purpose**: Working agent implementations using Google's Agent Development Kit (ADK).

### Current Agent: `my_first_agent`

A demo assistant agent with 3 tools:

| Tool | Function |
|------|----------|
| `get_weather` | Returns mock weather data for cities |
| `calculate` | Safe mathematical expression evaluator |
| `get_current_time` | Current date/time information |

**Location**: [agents/my_first_agent/agent.py](file:///d:/Development/Projects/AIEssentials-MIT/agents/my_first_agent/agent.py)

### Running the Agent

```powershell
# Activate virtual environment
.venv\Scripts\Activate.ps1

# Start web interface
adk web agents

# Or run in terminal
adk run agents/my_first_agent
```

### Configuration

- `.env`: API keys (see `.env.example` for template)
- Model: `gemini-2.0-flash`

---

## 4. docs — Reference Documentation

**Purpose**: Curated and scraped documentation for AI development tools.

| Document | Source | Description |
|----------|--------|-------------|
| [ADK_Documentation.md](file:///d:/Development/Projects/AIEssentials-MIT/docs/ADK_Documentation.md) | Google ADK Docs | Quick start, agent config, tools, sessions, state, deployment |
| [Antigravity_Documentation.md](file:///d:/Development/Projects/AIEssentials-MIT/docs/Antigravity_Documentation.md) | Google Antigravity | IDE features, MCP servers, browser subagent, task management |
| [Prompt_Engineering_Context_Types.md](file:///d:/Development/Projects/AIEssentials-MIT/docs/Prompt_Engineering_Context_Types.md) | Alex Prompter | 8 context types for professional prompting (persona, reference, constraint, visual, audience, video, chain-of-thought, output format) |
| [YC_Vibe_Coding_Guide.md](file:///d:/Development/Projects/AIEssentials-MIT/docs/YC_Vibe_Coding_Guide.md) | Y Combinator | Best practices for AI-assisted development (planning, Git, testing, debugging) |

### Key Topics Covered

- **ADK**: Agent creation, workflow agents, memory/state, deployment (Cloud Run, Vertex AI)
- **Antigravity**: MCP integration, browser automation, task planning
- **Context Engineering**: 8 specialized context types for pro-level outputs
- **Vibe Coding**: AI-first development methodologies

---

## 5. repos — Cloned Repositories

**Purpose**: Reference implementations and samples.

| Repository | Description |
|------------|-------------|
| `adk-samples/` | Google's official ADK sample agents (1000+ files) |

---

## Quick Start Paths

### 🎓 Learning AI Basics

1. Start with `AiBasics/Glossary of Terms` for terminology
2. Read `Effective Prompts for AI The Essentials`
3. Understand risks via `When AI Gets It Wrong`

### ✍️ Improving Prompts

1. Review [Prompts/README.md](file:///d:/Development/Projects/AIEssentials-MIT/Prompts/README.md) for generator selection
2. Choose appropriate generator for your task
3. Read `docs/Prompt_Engineering_Context_Types.md` for advanced techniques

### 🤖 Building Agents

1. Study `my_first_agent` implementation
2. Reference `docs/ADK_Documentation.md` for concepts
3. Explore `repos/adk-samples` for advanced patterns

### 💻 AI-Assisted Coding

1. Read `docs/YC_Vibe_Coding_Guide.md`
2. Apply practices using `docs/Antigravity_Documentation.md`

---

## Repository Status & Gaps

### ✅ Strengths

- Strong educational foundation (MIT/academic sources)
- Complete prompt engineering toolkit with clear frameworks
- Working ADK agent example
- Quality reference documentation

### 🔧 Areas for Expansion

| Gap | Suggested Addition |
|-----|-------------------|
| **No MCP examples** | Add MCP server configurations from `Antigravity_Documentation.md` |
| **Single agent** | Create specialized agents (research, code review, data analysis) |
| **No workflows** | Add `.agent/workflows/` with common tasks |
| **No evaluation sets** | Create `.evalset.json` files for agent testing |
| **Missing tools** | Add tool examples (web search, file operations, API integrations) |
| **No multi-agent examples** | Implement SequentialAgent/ParallelAgent patterns |

---

## File Statistics

| Directory | Files | Total Size |
|-----------|-------|------------|
| AiBasics | 5 | ~58 KB |
| Prompts | 7 | ~23 KB |
| agents/my_first_agent | 4 | ~4 KB |
| docs | 4 | ~38 KB |
| repos/adk-samples | 1000+ | (reference only) |

**Total curated content**: ~123 KB across 20 files

---

## Contributing

When adding new content:

1. **Educational docs** → `AiBasics/` (include source attribution)
2. **Prompt generators** → `Prompts/` (use AIM/MAP/OCEAN frameworks, update README)
3. **Agent implementations** → `agents/` (follow ADK structure)
4. **Reference docs** → `docs/` (include source and date)
5. **Sample repositories** → `repos/` (clone via Git)

---

## Related Resources

- [Google ADK Python](https://github.com/google/adk-python)
- [Google ADK Samples](https://github.com/google/adk-samples)
- [ADK Documentation](https://google.github.io/adk-docs/)
- [Antigravity](https://antigravity.google/)
