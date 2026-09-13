# Notes

## Stated preferences
- Consider Matt Pocock as a high-signal source for **coding-agent delivery**: [mattpocock/skills](https://github.com/mattpocock/skills), [AI Hero](https://www.aihero.dev/), especially tracer-bullet tickets, `/to-spec`, `/to-tickets`, `/tdd`. Treat as practitioner application of older engineering books (Pragmatic Programmer, XP, DDD) — cite the classics for the idea, Pocock for the agent workflow.
- Professional .NET Core experience, but ticket-guided: treat this as implementation exposure, not independent design/ops mastery.
- Correct mental models explicitly when they are wrong or incomplete.
- Foundations over framework trivia.
- Knowledge must be grounded in cited sources.
- Realistic examples in the target stack (.NET / C#, Python, TypeScript, React/Next.js, SQL) when they reduce abstraction.
- Trade-offs and failure modes only when they serve the current foundation.

## How this learner wants to learn (2026-08-28 — hard)

**Yes: TDD lessons were for fundamentals**, not to run them through a practice curriculum inside the HTML.

They already practice by generating experiments/labs on code they already have. Forcing a “walk the TDD learning flow” inside lessons (classify → rewrite prompt → quiz workout → resource path that only works if you practice that way) is almost impossible to fit — and fights the mission.

What they want from lessons now:
- **Clear foundations / principles** they can hold in judgment when directing agents.
- **Light checks** that the mental model is right (optional, short) — not a substitute practice track.
- **Pointers to primary sources** they can read; practice happens on *their* repos, on *their* schedule.
- **Agentic era priority:** master theory and principles so they can delegate and review; more practice is something they do away from the lesson on that foundation.

Implication for lesson design:
- Teach one principle sharply; one example that makes it concrete; cite the source; leave them able to apply it tonight on their own code.
- Do **not** design lessons as guided coding labs, multi-step TDD workouts, or “practice paths” that require following our exercise sequence.
- Do **not** stack more TDD loop micro-lessons unless a *new* principle is missing (e.g. refactor-as-review, triangulation). The red→green→next-test floor is taught; further fluency is their experiments.
- “Rotate practice formats” under anti-sameness means rotate *light* comprehension checks — or skip the check — not invent new workout genres.

## Lesson language (standing)

Speak like a calm colleague walking someone through the work: warm, practical, patient, full sentences. Name the idea, say what it means, give one example. Define jargon once. Prefer ordinary teaching words for the topic when they help.

Avoid: clever/punchy/telegraphic prose; generic “courseware” voice (rigid section rituals, stiff textbook framing, metaphor riffs around source quotes). Source quotes may keep their own metaphors; do not invent more. Structure freely per skill — no fixed template.

## Anti-sameness (hard rule — learner called this out 2026-08-28)

Lessons 0003–0005 failed this. They felt AI-generated: same skeleton, same explanation rhythm, same Beck+Canon TDD+Pocock stack every time, same classify→rewrite→quiz loop, same Handbook Ask three-options ritual, overlapping concepts restated as if new. Predictable = shallow fluency, not storage strength.

**Before writing any lesson, check the last 2–3.** If a reader could swap the titles and barely notice, rewrite the plan.

Hard constraints going forward:
- **No cloned lesson skeleton.** Forbidden as a default sequence: lede → “two habits” → Correct-this callout → “serves your mission” → Beck quote → SVG bad-vs-good → “Handbook Ask, three ways” → classify cards → rewrite textarea → MCQ quiz → Beck+Pocock primary sources. A lesson may use *one* of those devices if it fits; never the whole stack.
- **One new skill per lesson; do not re-explain prior TDD moves.** Link the earlier lesson; assume the floor. If the skill is “pick the next test,” do not re-teach “one test first” or “only enough to pass” in prose.
- **Light checks only; learner owns practice.** Prefer one short “is this principle being violated?” check, or none. Never build a guided coding/TDD practice path inside the lesson. Same check format twice in a row needs a reason.
- **Rotate primary sources.** Do not default every TDD lesson to Canon TDD + the same Pocock article. Pull a different chapter, talk, or contrasting practitioner when the skill needs it; cite classics once in the reference sheet, not every lesson body.
- **Vary the example surface.** Handbook Ask can stay the product, but not always POST /api/ask + “I don’t know.” Use a different boundary (UI, SQL, auth, failure mode) or a different product slice when the skill allows.
- **Reference sheets absorb repetition.** Compressed definitions and the Beck/Pocock map live in `reference/` and the glossary. Lessons teach the new move; they do not republish the loop.

If stuck repeating, stop and ask the learner which format or gap they want — do not manufacture another twin lesson.

## Teaching stance
- Zone of proximal development starts at: writing code professionally, but not owning problem framing, slice bounding, architecture trade-offs, or production operation.
- First bottleneck to correct: tickets as horizontal tasks ("add the endpoint") vs vertical slices of user-visible behaviour.
- Agent-delivered work is in scope from lesson 1: this learner will both *use* agents and *review* their output.
- Running example product (reuse across lessons): **Handbook Ask** — internal Next.js UI, ASP.NET Core API, SQL, LLM-backed answers over uploaded policy PDFs. Thin enough to be real; rich enough for AI-product failure modes later.

## Lesson 1 (done)
- Skill practised: distinguish vertical slice vs horizontal layer; rewrite a ticket-style task into a bounded, observable slice.
- Bogard’s Vertical Slice Architecture still parked (folder layout, not delivery).
- Walking skeleton and spec templates still parked.

## Lesson 2 (done)
- Skill practised: classify layer / prototype / tracer; thin a fat “slice” into a tracer you would keep.
- Stubbing the model on a real UI→API→SQL path is still a tracer. “Can the model ground?” is a prototype question.
- Walking skeleton / crutches still parked.

## Lesson 3 (done)
- Skill practised: classify code-then-tests / bulk-suite / one-failing-test; rewrite an agent prompt into the first failing test only.
- A scratch list of cases is still one-test, not a suite.

## Lesson 4 (done)
- Skill practised: classify extra-feature / cheat-the-test / only-enough; rewrite an agent prompt into only enough product code, test unchanged, list left as notes.
- The 0002 stub is the smallest pass for the 0003 test. The tracer is the destination, not the first green.

## TDD floor (done as fundamentals — do not extend as a practice track)
- Covered: one failing test; only enough to pass; next test of the named tracer (lesson 0005 may exist as content; do not ship more twin TDD workouts).
- Learner practises the loop on their own experiments.
- Still parked as *principles* if needed later (one lesson each, foundation-first, no workout clone): refactor-as-review (sources disagree); Fake It / Triangulate; mocking/seams; expert test sequencing.
- Next better bets for mission + agents: specs that survive contact with an agent (`/to-spec`); what “safe to ship” means in review; walking skeleton; observability/operability foundations.

## Lesson 6 (done) — B1, criteria that can fail
- Principle: a criterion is only reviewable if it could have been failed. Gate question: "What would I observe if this were false?" Three repairs: measure it / demote to a question / drop it (construction, not behaviour).
- New spine, deliberately not Beck: Robertson & Robertson (fit criterion, Quality Gateway), Wynne (rules/examples/questions; "when the Then is unclear you have a question"), Adzic (key examples, illusion of precision), Fowler (GWT), Wake (testable).
- New shape: scene → one question → conversion table → triage table → over-specification counterweight → 5-item binary gate check → "on your own code tonight". No SVG bad-vs-good, no three-options list, no rewrite textarea, no MCQ.
- New asset: `assets/gate.js` (binary pass/fail judgement + reason). New CSS: `.bigq`.
- Example surface moved off `POST /api/ask` to the upload + citations slice.
- Parked here on purpose: Gherkin/Cucumber syntax as a skill, non-functional requirement taxonomies, Volere template mechanics, Gilb-style quantification depth.

## Curriculum

The full ordered set of foundations now lives in `ROADMAP.md` (stages A–I). Read it before planning any lesson. The previously "proposed missing capability groups" are folded in: writing/ADRs → B5, security → Stage G, cross-language types → C4, data for AI products → H4, economics → F7 + H7.
