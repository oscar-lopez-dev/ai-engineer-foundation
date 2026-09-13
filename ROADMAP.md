# Foundations roadmap

The ordered set of foundations for [[MISSION.md]]. One principle per lesson, cited, short. Practice happens on the learner's own code (see [[NOTES.md]], "How this learner wants to learn").

## Ordering rule

Each stage exists to make the **next** stage reviewable. The order is not "easy to hard" — it is dependency order for *judgment*: you cannot say "this is not safe to ship" about data, boundaries, production, or AI behaviour until you can say what the work was supposed to do and what evidence counts.

So: bound the work (A) → state and review it (B) → keep it changeable (C) → give it correct data (D) → give it honest boundaries (E) → make it operable (F) → make it defensible (G) → make the AI part trustworthy (H) → keep evolving it (I).

Stages are sequential in emphasis, not sealed. Pull one lesson forward when real work demands it; record why in a learning record.

---

## Stage A — Bounding and verifying a unit of work

*Why first:* every other judgment is downstream of "what is the smallest honest thing that works, and how do I know it works." This is also the stage where agents do the most damage unsupervised.

- **A1 · A slice is a path, not a layer** — done (lesson 0001)
- **A2 · A tracer is kept, a prototype is thrown** — done (lesson 0002)
- **A3 · One failing test, not a suite** — done (lesson 0003)
- **A4 · Only enough code to pass** — done (lesson 0004)
- **A5 · The next test, not the rest of the list** — done (lesson 0005)
- **A6 · Where tidy-up belongs** — refactoring as a separate, non-negotiable step; the sources disagree on *where* it sits (Beck: optional in the loop; Fowler: skipping it is the common failure; Pocock: park it in review). Learning the disagreement is the point.
- **A7 · Walking skeleton** — the first end-to-end path includes the pipeline that runs it. Sets up Stage F, and answers "the architecture isn't ready yet."

*Spine:* Wake (INVEST), Hunt & Thomas (tracer bullets), Beck (Canon TDD), Fowler, Cockburn (walking skeleton, via Adzic), Pocock skills.

---

## Stage B — Specifying and reviewing: the delegation interface

*Why here:* this is the mission's biggest stated gap ("review my own and an agent's work… and say what is not yet safe to ship") and needs no new technical foundation. Highest leverage per hour in the agentic era: it is the interface through which you delegate.

- **B1 · Acceptance criteria that can fail** — behaviour stated so a test or a human can falsify it; examples beat adjectives.
- **B2 · Bounded problem definition** — rough, solved, bounded; appetite; saying what you will *not* do (Shape Up).
- **B3 · A spec that survives contact with an agent** — assumptions, non-goals, done-conditions, context budget. Where `/to-spec` and grilling fit.
- **B4 · "Safe to ship" as risk assessment** — review as evidence-gathering, not style policing. Why "the tests passed" is not verification, and what you look at instead.
- **B5 · Decision records** — capture the *why* so it survives you, your team, and the next agent's fresh context. ADR as the minimum viable engineering document.
- **B6 · The delegation boundary** — which decisions require your judgment; which are safely handed over. Revisited as a synthesis in I4.

*Spine:* Singer (Shape Up), Winters et al. (SWE at Google, review + testing chapters), Pocock (`/to-spec`, grill), Wake (testable).

---

## Stage C — Design foundations: why code stays changeable

*Why here:* once you can bound and review work, the next thing you must judge is structure — the thing agents get wrong in ways tests do not catch. Stack-independent, so it must precede data and boundary specifics.

- **C1 · Information hiding** — modules drawn around what changes together, not around technical role (Parnas).
- **C2 · Deep modules and complexity** — a lot of behaviour behind a small interface; why generated code trends shallow (Ousterhout).
- **C3 · Dependency direction and the application boundary** — ports and adapters without cargo-cult folders (Cockburn).
- **C4 · Types and data as design** — make illegal states unrepresentable; the transferable core across C#, TypeScript, and Python. *(Fills a noted resource gap — needs a cross-language spine.)*
- **C5 · Errors: values, exceptions, and the boundary** — where validation lives; what a caller is entitled to know.
- **C6 · Naming and the domain model** — ubiquitous language as a design tool, and as the vocabulary you hand an agent.
- **C7 · Seams and test doubles** — mocking as a *design* signal, not a testing trick. Lands the parked mocking topic in its correct stage.

*Spine:* Parnas, Ousterhout, Cockburn (hexagonal), Bogard (vertical slice *architecture* — distinct from A1), Fowler.

---

## Stage D — Data foundations

*Why here:* data outlives every service, UI, and model in front of it. Bad data design is the one mistake refactoring does not fix cheaply, and it constrains everything in E and H.

- **D1 · Constraints as invariants** — the schema as the last line of defence, not a serialisation format.
- **D2 · Transactions and isolation** — what atomicity actually promises, and what it does not.
- **D3 · Query cost** — a mental model of indexes and why a query is slow, before tuning trivia.
- **D4 · Schema evolution** — expand/contract, backwards compatibility, migrating without a maintenance window.

*Spine:* Kleppmann (DDIA), PostgreSQL docs.

---

## Stage E — Boundaries and contracts

*Why here:* with structure and data settled, the remaining correctness questions are at the edges — where your system meets networks, other systems, and users.

- **E1 · HTTP as a contract** — methods, status, caching semantics, what "safe" and "idempotent" mean (MDN).
- **E2 · API design** — resources vs commands, error shapes, versioning as a promise to callers.
- **E3 · The network is unreliable** — timeouts, retries, idempotency keys, at-least-once delivery.
- **E4 · Authentication and authorisation mechanics** — identity vs permission, sessions vs tokens, where checks belong. Design-level treatment follows in G2.
- **E5 · Client and server state** — rendering and data-fetching boundaries; what belongs on which side, and why (React/Next as instances of the principle).
- **E6 · Designing for uncertainty in the UI** — loading, empty, partial, failed. Bridges to H6.

*Spine:* MDN HTTP, TypeScript handbook, React/Next docs, Kleppmann (delivery semantics).

---

## Stage F — Operability: running the thing

*Why here:* the mission requires deploying and operating a slice. This stage is only teachable *after* A7 (a path exists) and E (the path has honest boundaries).

- **F1 · Deployable by construction** — config, backing services, disposability (12-factor).
- **F2 · Build, release, run** — environments, rollback, and migrations in flight.
- **F3 · Observability** — logs, metrics, traces; instrument for the question you will ask at 3am, not for a dashboard.
- **F4 · Defining "working" numerically** — SLOs and error budgets (SRE).
- **F5 · Failure modes as design** — backoff, circuit breaking, graceful degradation, load shedding.
- **F6 · Incidents and postmortems** — blameless review; the loop that turns an outage into a system change.
- **F7 · Latency and cost budgets** — performance as a constraint you design against, not measure afterwards.

*Spine:* Wiggins (12-factor), Google SRE book.

---

## Stage G — Security as a foundation

*Why here:* threat modelling needs a real system with real boundaries (E) running in a real environment (F) to reason about. Earlier, it degrades into checklists.

- **G1 · Threat modelling** — assets, trust boundaries, attacker goals; a repeatable exercise, not a vibe.
- **G2 · Least privilege and authorisation design** — permission as a modelled domain concept.
- **G3 · Handling sensitive data** — secrets, PII, encryption in transit and at rest, logging hygiene.
- **G4 · Untrusted input** — injection as one idea with many faces, including prompt injection. Bridges to H.

*Spine to vet before this stage:* OWASP (ASVS, Cheat Sheet Series), NIST SSDF. Currently a noted gap in [[RESOURCES.md]].

---

## Stage H — AI capability foundations

*Why here deliberately last of the build stages:* an LLM is a nondeterministic component inside an otherwise ordinary system. Every earlier foundation — bounded work, acceptance criteria, data design, boundary contracts, observability, threat modelling — is what makes an AI feature reviewable. Taught earlier, it becomes framework recipes.

- **H1 · The model as an engineering component** — tokens, context window, nondeterminism; what it can and cannot promise.
- **H2 · Prompts and structured output as an interface** — schemas and validation at the boundary; treat model output as untrusted input.
- **H3 · Grounding** — retrieval as a data problem; why "it hallucinated" usually names a retrieval or evaluation failure.
- **H4 · Where data lives in an AI product** — relational store vs context window vs eval set. *(Noted gap; distinct from D and from RAG trivia.)*
- **H5 · Evaluation** — golden sets, offline evals, LLM-as-judge and its caveats; regression testing a nondeterministic system. This is the Stage B answer ("safe to ship") applied to AI.
- **H6 · Failure UX and guardrails** — uncertainty, refusal, citations, human-in-the-loop (PAIR).
- **H7 · Token and latency economics** — model choice, caching, and cost as design constraints.
- **H8 · Observability for AI** — tracing prompts and outputs; feeding production examples back into H5.

*Spine:* first-party model docs (OpenAI/Anthropic structured outputs), Google PAIR. *To vet:* an evals spine (practitioner-grade, not vendor marketing).

---

## Stage I — Evolution and judgment

*Why last:* this is the mission's final success criterion — changing the design when the problem shifts. It only means something once there is a designed, running, observed system to change.

- **I1 · Evolutionary architecture** — designing for change; fitness functions as executable constraints.
- **I2 · Working with what exists** — seams, strangler pattern, changing code you did not write (including code an agent wrote).
- **I3 · Debt as an economic decision** — deliberate vs accidental; when not paying is correct.
- **I4 · The delegation boundary, revisited** — synthesis: across A–H, which judgments stay yours. Closes the loop on B6.

*Spine to vet:* Ford/Parsons (evolutionary architecture), Feathers (legacy code), Fowler (debt quadrant).

---

## Sequencing notes

- **Immediate next:** A6 then A7 closes Stage A cleanly, but **B1–B4 is the higher-leverage jump** given the mission and how the learner works today. B does not depend on A6/A7.
- **Do not** re-teach A1–A5. They are floor (see learning records 0002–0005).
- **Vet sources before teaching** G, H5, C4, I — those spines are not yet chosen in [[RESOURCES.md]].
- Revisit this file when a stage completes, or when real work makes a later lesson urgent.
