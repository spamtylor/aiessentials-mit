# Prompt Engineering Suite: Usage Guide

This directory contains a suite of specialized **System Prompts** designed to generate high-quality prompts for different scenarios. Each tool utilizes the **AIM** (Actor, Input, Mission), **MAP** (Memory, Assets, Actions), and **OCEAN** (Original, Concrete, Evident, Assertive, Narrative) frameworks.

## How to Use

1. **Select the Generator** best suited for your task (see below).
2. **Paste the Content** of the generator file (e.g., `zero_shot_generator.md`) into your LLM (ChatGPT, Claude, etc.) as the "System Prompt" or first message.
3. **Interact** with the System to build your perfect prompt.

---

## 1. Zero-Shot Prompting System

**File:** `zero_shot_generator.md`

### 🎯 Best For

* **Simple, direct tasks** where you don't have examples.
* **Data transformation** (JSON -> CSV).
* **Strict constraints** (e.g., "Summarize in exactly 50 words").

### 💡 Example Scenario
>
> **You have:** A raw text file of customer emails.
> **You want:** A JSON list of "Sentiment: Positive/Negative" for each.
> **Why this tool:** You don't need to show it examples; you just need to give it strict rules ("Output JSON only", "Keys must be 'sentiment'").

---

## 2. Few-Shot Architecture System

**File:** `few_shot_generator.md`

### 🎯 Best For

* **Complex pattern matching** (e.g., specific coding style, unique writing tone).
* **Nuanced classification** where rules are hard to define but easy to show.
* **Mimicking a specific format** (e.g., "Write like this tweet").

### 💡 Example Scenario
>
> **You have:** A specific way you comment your code (e.g., using `// TODO: [Date] -`).
> **You want:** The AI to comment new code exactly the same way.
> **Why this tool:** describing the comment style is hard; showing 3 examples of it is easy and more effective.

---

## 3. Directive Prompting System

**File:** `instructional_generator.md`

### 🎯 Best For

* **Multi-step execution** checklists.
* **admin/Operational tasks** (e.g., "Sort", "Filter", "List").
* **No-nonsense, concise outputs**.

### 💡 Example Scenario
>
> **You have:** A 20-page meeting transcript.
> **You want:** 1. Action Items, 2. Key Decisions, 3. Next Steps (Bulleted list).
> **Why this tool:** You need a military-style execution of a checklist, not a creative essay or a persona performance.

---

## 4. Persona Engineering System

**File:** `role_based_generator.md`

### 🎯 Best For

* **Creative writing** or brainstorming.
* **Expert Consulting** (e.g., "Act as a Senior Cyber-Security Analyst").
* **Changing the "Voice"** (e.g., "Explain Quantum Physics to a 5-year-old").

### 💡 Example Scenario
>
> **You have:** A draft of a marketing email.
> **You want:** Critiques from the perspective of a "Skeptical Gen-Z Customer" and a "Corporate CMO".
> **Why this tool:** The quality of the feedback depends entirely on how deep the AI inhabits the specific character/perspective.

---

## 5. Contextual Framing System

**File:** `contextual_generator.md`

### 🎯 Best For

* **Complex scenarios** with lots of background info.
* **Role-playing games** or simulation.
* **Decisions requiring history** (e.g., "Given the last 3 months of project history...").

### 💡 Example Scenario
>
> **You have:** A conflict between two employees, including their past reviews and email chains.
> **You want:** To draft a mediation plan.
> **Why this tool:** The task is impossible unless the AI first understands the full background "World" (the employee history, company policy, recent events) *before* trying to solve the problem.

---

## 6. Advanced Prompt Generator (The Council)

**File:** `advanced_prompt_generatorv2.md`

### 🎯 Best For

* **High-complexity, multi-step prompts.**
* **When you need a "Hive Mind" of multiple experts.**
* **Creating "Super Prompts" that include Design Docs, Implementations, and Manuals.**

### 💡 Example Scenario
>
> **You have:** A request for a full-stack software implementation plan.
> **You want:** A prompt that forces the AI to check its own work, assume 3 different expert personas, and write a design doc before coding.
> **Why this tool:** This is the "Heavy Artillery." It uses the full Council simulation to ensure no hallucination and maximum logical depth.

---

## 7. Advanced Strategy: Stacking & Hybrid Use

You can invoke the power of multiple systems by combining their outputs. This is highly recommended for **complex, mission-critical tasks**.

### A. The "Precision Teacher" (Directive + Few-Shot)

* **Combine:** `instructional_generator` (Rules) + `few_shot_generator` (Examples).
* **Why:** Some models follow rules but forget the format; others mimic the format but miss the rules. Doing **both** ensures 99% accuracy.
* **Use Case:** Large-scale data cleaning, coding assistants, or compliance checking.

### B. The "Immersive Simulation" (Persona + Contextual)

* **Combine:** `role_based_generator` (Actor) + `contextual_generator` (World).
* **Why:** A persona without a world is just a voice; a world without an actor is just a setting. Together, they create a **Simulation**.
* **Use Case:** Training customer service bots, generating synthetic novel data, or wargaming business scenarios.

### C. The "Specialist Council" (Advanced + Specialized)

* **Combine:** `advanced_prompt_generator` (Structure) + Any Specialist (Content).
* **Why:** Use the **Advanced Generator** to build the skeleton (AIM/MAP/OCEAN), but strictly copy-paste the "Actor" block from the **Persona System** or the "Constraints" block from the **Directive System**.
* **Use Case:** Building the ultimate "Super Prompt" for a permanent application feature.
