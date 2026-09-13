# Practical Labs Showcase (`labs/`)

This directory houses the practical, runnable implementations that ground the theoretical principles taught in [`lessons/`](../lessons/) and [`reference/`](../reference/).

## Philosophy

As established in [`NOTES.md`](../NOTES.md) and [`MISSION.md`](../MISSION.md):
- **Lessons stay light**: In-lesson HTML exercises prioritize mental models, principles, and falsifiable gates without forcing artificial multi-step coding workouts.
- **The learner owns practice**: Real fluency comes from building, modifying, and testing runnable code in the target stack.
- **Canonical Product**: All labs explore slices of **Handbook Ask** — an internal policy document Q&A assistant built with ASP.NET Core, Next.js / TypeScript, SQLite, and LLM orchestration.

## Lab Catalog

| Lab | Lesson Alignment | Topic | Stack |
| :--- | :--- | :--- | :--- |
| [`01-vertical-slice`](./01-vertical-slice/) | 0001 | Slicing through UI &rarr; API &rarr; SQL vs isolated layers | ASP.NET Core Minimal API + TypeScript |
| [`02-tracer-bullet`](./02-tracer-bullet/) | 0002 | End-to-end pipeline with deterministic LLM stubs | C# + System.Text.Json |
| [`03-tdd-cycles`](./03-tdd-cycles/) | 0003 - 0005 | One failing test, minimal passing code, and test sequencing | xUnit / Vitest |
| [`06-falsifiable-specs`](./06-falsifiable-specs/) | 0006 | Reviewable acceptance criteria turned into executable gates | C# / xUnit |

## How to use with Coding Agents

Each lab is structured so you can test agent workflows (`/to-spec`, `/to-tickets`, `/tdd`, `/implement`, `/code-review`):
1. Pick a lab specification.
2. Direct an agent using the constraints in [`AGENTS.md`](../AGENTS.md).
3. Review the agent's work against the falsifiable criteria provided in each lab README.
