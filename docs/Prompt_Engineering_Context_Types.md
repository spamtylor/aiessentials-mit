# Advanced Prompt Engineering: 8 Context Types

> **Source**: Alex Prompter (@alex_prompter)  
> **Saved**: 2025-12-30

---

## The Core Insight

**Generic prompting = generic results.**  
**Context engineering = pro-level output.**

The shift isn't "how do I write better prompts?" — It's **"what's the minimal high-signal context that drives my desired outcome?"**

Master these 8 context types and you'll outperform 99% of people using the same models.

> **The best AI engineers aren't prompt wizards anymore. They're context architects.**

---

## 1. Persona + Expertise Context

*For any task*

**Why it works**: LLMs don't just need instructions. They need to "become" someone. When you give expertise context, the model activates completely different reasoning patterns. A "senior developer" prompt produces code that's fundamentally different from a generic one.

```
You are a [specific role] with [X years] experience at [top company/institution]. 
Your expertise includes [3-4 specific skills]. 
You're known for [quality that matters for this task].

Your communication style is [direct/analytical/creative].

Task: [your actual request]
```

---

## 2. Reference Context

*For websites & content*

**Why it works**: LLMs hallucinate when they guess what you want. When you show them exactly what "good" looks like, they stop guessing. Reference context transforms vague requests into precise execution. This is how agencies get consistent brand voice across hundreds of outputs.

```
REFERENCE EXAMPLES:
[Paste 2-3 examples of the style/format you want]

WHAT MAKES THESE WORK:
- [Pattern 1 you noticed]
- [Pattern 2 you noticed]
- [Pattern 3 you noticed]

NOW CREATE:
[Your specific request] following the exact patterns above.
```

---

## 3. Constraint Context

*For research & analysis*

**Why it works**: Unlimited freedom = mediocre outputs. Constraints force the model into focused, creative problem-solving. When you give boundaries, the AI can't take shortcuts. This is why the best prompts often include what NOT to do.

```
CONSTRAINTS:
- DO NOT include [common cliché/approach you want to avoid]
- Must include [specific element]
- Maximum [length/number]
- Format as [specific structure]
- Prioritize [what matters most]

Within these constraints: [your request]
```

---

## 4. Visual Generation Context

*For Nano Banana Pro, Image Gen 1.5, DALL-E, Midjourney, etc.*

**Why it works**: Image models are trained on photographer and artist language. "Beautiful sunset" gives you stock photo garbage. Technical camera and art direction context triggers the patterns that produced stunning training images.

```
SUBJECT: [main subject in detail]

CAMERA: [camera model], [lens], [focal length]mm, f/[aperture], [shutter speed]

LIGHTING: [light source], [direction], [quality - soft/hard], [color temperature]

COMPOSITION: [rule of thirds/centered/etc], [perspective], [depth of field]

STYLE: [specific photographer/artist reference], [mood], [color palette]

POST-PROCESSING: [film stock/preset], [contrast level], [grain]
```

---

## 5. Audience Context

*For content & copywriting*

**Why it works**: "Write a blog post" gives you generic content. "Write for burned-out startup founders who've tried every productivity app" activates specific language patterns, pain points, and examples. The model can only speak to your audience if it knows who they are.

```
TARGET AUDIENCE PROFILE:
- Demographics: [age, role, industry]
- Current situation: [what they're dealing with]
- Pain points: [specific frustrations]
- Goals: [what they want to achieve]
- Language they use: [specific phrases/jargon]
- What they've already tried: [failed solutions]
- What makes them skeptical: [objections]

Write [content type] that speaks directly to this person.
```

---

## 6. Video Generation Context

*For Veo 3, Runway, Kling*

**Why it works**: Video models need cinematographic language, not descriptions. "A person walking" gives you stock footage. Director-level context with camera movement, shot types, and temporal flow gives you cinematic output.

```
SHOT TYPE: [wide/medium/close-up/extreme close-up]

CAMERA MOVEMENT: [static/pan/tilt/dolly/tracking/crane/handheld]

DURATION: [X seconds]

TEMPORAL FLOW: [real-time/slow-motion/time-lapse]

SCENE DESCRIPTION: [what's happening, with movement verbs]

LIGHTING SETUP: [key light, fill, practical lights]

MOOD/TONE: [cinematic reference or director style]

SOUND DESIGN NOTES: [ambient, music style, silence]
```

---

## 7. Chain-of-Thought Context

*For complex reasoning*

**Why it works**: Google's research proved this: forcing step-by-step reasoning took accuracy from **18% to 57%** on the same model. When you structure HOW the model should think, you unlock capabilities that were always there but never activated.

```
Before answering, work through this exact process:

STEP 1 - UNDERSTAND: Restate the problem in your own words. What am I actually being asked?

STEP 2 - DECOMPOSE: Break this into sub-problems. What needs to be solved first?

STEP 3 - ANALYZE: For each sub-problem, what are the possible approaches? What are the tradeoffs?

STEP 4 - SYNTHESIZE: Connect the pieces. How do the sub-solutions combine?

STEP 5 - VALIDATE: Check your reasoning. What could be wrong? What assumptions am I making?

STEP 6 - ANSWER: Now provide the final answer with confidence levels.

PROBLEM: [your complex question]
```

---

## 8. Output Format Context

*For any structured task*

**Why it works**: LLMs are pattern-completion machines. When you show the exact output structure, they don't have to guess what you want. This eliminates 90% of "that's not what I meant" moments. Professional AI engineers always define output shape first.

```
OUTPUT FORMAT (follow exactly):

---
[SECTION 1 NAME]
[Description of what goes here]

[SECTION 2 NAME]
[Description of what goes here]

[SECTION 3 NAME]
[Description of what goes here]
---

EXAMPLE OUTPUT:
[One complete example so the model sees the pattern]

NOW GENERATE FOR: [your specific input]
```

---

## Quick Reference

| # | Context Type | Use Case | Key Insight |
|---|-------------|----------|-------------|
| 1 | **Persona + Expertise** | Any task | Make the model "become" an expert |
| 2 | **Reference** | Websites, content | Show what "good" looks like |
| 3 | **Constraint** | Research, analysis | Boundaries prevent shortcuts |
| 4 | **Visual Generation** | Image generation | Use photographer/artist language |
| 5 | **Audience** | Content, copywriting | Define who you're speaking to |
| 6 | **Video Generation** | Video generation | Use cinematographic language |
| 7 | **Chain-of-Thought** | Complex reasoning | Structure the thinking process |
| 8 | **Output Format** | Structured tasks | Show the exact pattern to complete |
