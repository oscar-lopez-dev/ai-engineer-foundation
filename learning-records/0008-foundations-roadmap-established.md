# Foundations roadmap established

The learner asked for the full set of fundamentals in one coherent order rather than lesson-by-lesson improvisation. `ROADMAP.md` now holds stages A–I, ordered by dependency of *judgment*: bound work → specify and review → design → data → boundaries → operability → security → AI capability → evolution.

**Rationale worth preserving:** the AI stage is deliberately late. An LLM is a nondeterministic component in an otherwise ordinary system, so every earlier foundation is what makes an AI feature reviewable; taught early it collapses into framework recipes. Stage B (specs, acceptance criteria, "safe to ship", ADRs) is placed before design because it is the mission's stated gap, needs no new technical foundation, and is the interface through which agents are delegated to.

**Implications:** Stage A is floor except A6 (where tidy-up belongs) and A7 (walking skeleton). Next lesson is B1 unless the learner chooses otherwise. Sources for C4, G, H5, and I must be vetted into [[RESOURCES.md]] before those stages are taught.
