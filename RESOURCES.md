# Full-stack AI Engineer Resources

High-trust sources only. Knowledge for lessons is drawn from here, not from memory. Each entry says what it covers and when to reach for it.

## Knowledge

### Engineering with coding agents

- [Repo: *Skills for Real Engineers* — Matt Pocock](https://github.com/mattpocock/skills)
  Agent-agnostic skills that encode engineering process (grill → spec → tracer-bullet tickets → TDD → review), not a replacement process that owns the work. Use for: how to bound agent work; `/to-tickets` vertical slices; `/tdd` anti-pattern “horizontal slicing.”
- [Article: “Tracer Bullets: Keeping AI Slop Under Control” — Matt Pocock](https://www.aihero.dev/tracer-bullets)
  Applies Hunt & Thomas’s tracer bullets to coding agents: tiny end-to-end slices, feedback before expanding, agents’ bias toward building whole layers in the dark. Use for: first lesson; prompting an agent to think small.
- [Article: “My Skill Makes Claude Code GREAT At TDD” — Matt Pocock](https://www.aihero.dev/skill-test-driven-development-claude-code)
  Horizontal vs vertical slicing in tests: bulk tests verify imagined behaviour; one test → one implementation → repeat verifies observed behaviour. Agents rewrite tests when context runs low. Use for: TDD lessons; why agents cheat when you ask for “the feature plus tests,” when green is “build everything,” or when green is “now write the remaining tests.”
- [Article: “5 Agent Skills I Use Every Day” — Matt Pocock](https://www.aihero.dev/5-agent-skills-i-use-every-day)
  The main delivery chain: grill, spec, tickets, TDD, architecture care. Use for: map of Group 0; which human decisions sit before agent execution.
- [Skill: `/to-tickets` — Matt Pocock](https://github.com/mattpocock/skills/blob/main/skills/engineering/to-tickets/SKILL.md)
  Tickets as tracer-bullet vertical slices: a narrow complete path through schema, API, UI, tests; demoable alone; sized to one context window. Use for: writing tickets an agent can finish.
- [Skill: `/prototype` — Matt Pocock](https://github.com/mattpocock/skills/blob/main/skills/engineering/prototype/SKILL.md)
  Throwaway code that answers one design question; no tests, no polish, not main. The verdict is what you keep. Use for: lesson 0002; telling an agent “this is reconnaissance, delete it.”
- [Skill: `/tdd` — Matt Pocock](https://github.com/mattpocock/skills/blob/main/skills/engineering/tdd/SKILL.md)
  Red → green as one test, one implementation. Anti-pattern: horizontal slicing (all tests, then all code). “Only enough code to pass it. Don't anticipate future tests.” Use for: lessons 0003–0005; prompting an agent to show red, then a smallest pass, then one next failing test, without turning the leftover list into a suite.
- [Dictionary: *Dictionary of AI Coding* — Matt Pocock](https://github.com/mattpocock/dictionary-of-ai-coding)
  Plain-English jargon for agent workflows. Use for: shared language with the teacher and with agents.

### Vertical slices, stories, and bounding work

- [Article: “INVEST in Good Stories, and SMART Tasks” — Bill Wake (2003)](https://xp123.com/invest-in-good-stories-and-smart-tasks/)
  Original INVEST. The cake metaphor: split stories by slicing vertically through layers, not by serving one layer. Valuable + testable are the two filters this workspace uses first. Use for: lesson 1; any time a ticket names a table, endpoint, or component as the deliverable.
- [Interview: “Tracer Bullets and Prototypes” — Andy Hunt & Dave Thomas, with Bill Venners](https://www.artima.com/articles/tracer-bullets-and-prototypes)
  First-party explanation of tracer bullets vs prototypes: a thin line of execution from UI through logic to the database; production-quality but skeletally thin. Use for: distinguishing a slice you keep from a prototype you throw away.
- [Article: “Forget the walking skeleton — put it on crutches” — Gojko Adzic](https://gojko.net/2014/06/09/forget-the-walking-skeleton-put-it-on-crutches/)
  Quotes Cockburn’s Crystal Clear definition of a walking skeleton, then argues for even thinner first value. Use for: citing the walking-skeleton definition; later, when “the architecture isn’t ready” is blocking a user-visible path.
- [Book (cited definition): *Crystal Clear* — Alistair Cockburn (2004)](https://www.amazon.com/Crystal-Clear-Human-Powered-Methodology-Small/dp/0201699478)
  Source of: “A Walking Skeleton is a tiny implementation of the system that performs a small end-to-end function… The architecture and the functionality can then evolve in parallel.” Use for: the thinnest first slice. Prefer Adzic’s quotation when the book is not at hand.
- [Chapter: “Principles of Shaping” — Ryan Singer, *Shape Up*](https://basecamp.com/shapeup/1.1-chapter-02)
  Work that is rough, solved, and bounded: words are too abstract, wireframes too concrete. Use for: later lessons on appetite and saying what not to do — not for lesson 1.
- [Article: “Vertical Slice Architecture” — Jimmy Bogard](https://www.jimmybogard.com/vertical-slice-architecture/)
  Code organised by request/feature rather than by technical layer. **Different idea** from a delivery slice. Use for: a later software-foundations lesson; do not conflate with Wake/Cockburn.

### Specifying and reviewing (Stage B)

- [Book chapter (free sample): *Mastering the Requirements Process*, ch. 2 — Suzanne & James Robertson](https://ptgmedia.pearsoncmg.com/images/0321419499/samplechapter/robertson_ch02.pdf)
  Source of **fit criterion** ("a measurement of the requirement that makes it both understandable and testable") and the **Quality Gateway** — a single point where each requirement is checked for testability before it enters the spec. Pre-agile, tooling-independent, and the most rigorous treatment of falsifiable criteria. Use for: lesson 0006 and any "how do I know this is done" question.
- [Paper: "Reliable requirements through the quality gateway" — Suzanne Robertson (1999)](https://doi.org/10.1109/dexa.1999.795193)
  "The starting point of the tests is that each requirement must have a testable fit criterion." Use for: citing the principle compactly; the argument for testing requirements rather than only code.
- [Article: "Introducing Example Mapping" — Matt Wynne (Cucumber)](https://cucumber.io/blog/bdd/example-mapping-introduction/)
  Rules / examples / questions triage in a 25-minute conversation. Key line: "When the outcome (Then) is unclear, you don't have an example, you have a question." Map shape as a signal (many questions = not understood; many rules = too big). Use for: lesson 0006; deciding what may be delegated.
- [Article: "Focus on key examples" — Gojko Adzic](https://gojko.net/2014/05/05/focus-on-key-examples/)
  Exhaustive scenario lists create an "illusion of precision and completeness"; boundary-chosen key examples carry the information. Explosion of examples signals a missing business concept. Use for: the over-specification failure, especially when stuffing a prompt.
- [Article: "Anatomy of a good acceptance test" — Gojko Adzic](https://gojko.net/2010/06/16/anatomy-of-a-good-acceptance-test/)
  Five heuristics: self-explanatory, focused, a specification not a script, in domain language, about business functionality not software design. Use for: reviewing criteria and tests as living documentation.
- [Article: "Given When Then" — Martin Fowler](https://martinfowler.com/bliki/GivenWhenThen.html)
  Origin (Terhorst-North and Matts) and the precise meaning of the three clauses; relation to Four-Phase Test and Arrange-Act-Assert. Use for: structuring an example once its outcome is known — not as a template for everything.

### Test-driven development

- [Essay: “Canon TDD” — Kent Beck (2023)](https://newsletter.kentbeck.com/p/canon-tdd)
  First-party definition of the loop: test list → one concrete test → make it pass → optionally refactor → until the list is empty, go back to one test. Named mistakes: turning the whole list into tests before any pass; deleting assertions; pasting actuals into expected values; mixing refactor into green. Use for: lessons 0003–0005; any time “TDD” is being critiqued or cargo-culted.
- [Book: *Test-Driven Development: By Example* — Kent Beck](https://www.informit.com/store/test-driven-development-by-example-9780321146533)
  Red–green–refactor as originally taught. Use for: depth once Canon TDD is practised. Paywalled; prefer the essay until a library copy is at hand.
- [Article: “Test Driven Development” — Martin Fowler](https://martinfowler.com/bliki/TestDrivenDevelopment.html)
  Short restatement: test-first separates interface from implementation; pick one test, then the next; skipping refactor is the common failure. Use for: a second voice on the same loop; sequencing and tidy-up are later than lessons 0003–0005.

### Software foundations (starter set)

- [Paper: “On the Criteria To Be Used in Decomposing Systems into Modules” — David Parnas (1972)](https://www.win.tue.nl/~wstomv/edu/2ip30/references/criteria_for_modularization.pdf)
  Information hiding as the criterion for module boundaries. Use for: modularity, cohesion, what changes together.
- [Article: “Hexagonal Architecture” — Alistair Cockburn](https://alistair.cockburn.us/hexagonal-architecture)
  Ports and adapters; the application has a boundary independent of UI and database. Use for: Clean Architecture without cargo-cult folders.
- [Book: *A Philosophy of Software Design* — John Ousterhout](https://web.stanford.edu/~ouster/cgi-bin/book.php)
  Deep modules: a lot of behaviour behind a small interface. Use for: codebase design; why agent-written code tends toward shallow modules. (Pocock’s `/codebase-design` skill is a practitioner encoding of this.)
- [Book: *Software Engineering at Google* — Winters, Manshreck, Wright](https://abseil.io/resources/swe-book)
  Testing, code review, and living at scale as engineering, not heroics. Use for: review, test strategy, culture of change.

### Backend, data, frontend, systems, platform, AI

These groups are not yet lesson-ready. Seed entries only; expand when the next lesson needs them.

- [Book: *Designing Data-Intensive Applications* — Martin Kleppmann](https://dataintensive.net/)
  Data models, transactions, replication, stream processing. Use for: backend/data and system design. The highest-trust single book for Groups 2 and 4.
- [Docs: HTTP — MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP)
  Request/response semantics without framework overlay. Use for: APIs.
- [Docs: PostgreSQL official](https://www.postgresql.org/docs/current/)
  Transactions, isolation, indexes as the database actually behaves. Use for: SQL and concurrency.
- [Docs: React](https://react.dev/) · [Next.js](https://nextjs.org/docs) · [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
  Canonical frontend/TS sources. Use for: Group 3, never blog tours of last week’s API.
- [Book: *Site Reliability Engineering* — Google](https://sre.google/sre-book/table-of-contents/)
  SLOs, incident response, production as a designed system. Use for: Group 5.
- [Essay: “The Twelve-Factor App” — Adam Wiggins](https://12factor.net/)
  Config, backing services, disposability. Use for: deployable apps before cloud trivia.
- [Guide: *People + AI Guidebook* — Google PAIR](https://pair.withgoogle.com/guidebook/)
  Human-AI interaction patterns, uncertainty, feedback. Use for: Group 7.
- [Docs: OpenAI / Anthropic prompting and structured outputs](https://platform.openai.com/docs/guides/structured-outputs)
  First-party model-behaviour docs. Use for: Group 6; prefer these over framework READMEs.

## Wisdom (Communities)

- [r/ExperiencedDevs](https://www.reddit.com/r/ExperiencedDevs/)
  Moderated toward working engineers; low tolerance for junior-trap advice. Use for: “is this a slice or a science project?” after you have tried it.
- [Software Engineering Stack Exchange](https://softwareengineering.stackexchange.com/)
  High-signal Q&A with citation norms. Use for: design trade-offs you can state precisely.
- [AI Hero / Pocock newsletter](https://www.aihero.dev/s/skills-newsletter)
  Practitioner community around the skills this workspace already uses. Use for: agent-delivery process, not model gossip.
- Local: a code-review or architecture guild at work, if one exists
  Use for: shipping a real slice under real constraints. Prefer this over another Discord.

## Gaps

- **Security as a first-class foundation** (threat modelling, data handling) is split across Groups 2 and 5; no dedicated high-trust spine chosen yet (OWASP / NIST candidates).
- **Data for AI products**: relational store vs context window vs eval set. Kleppmann does not cover this; Chip Huyen / eval practitioners not yet vetted for this workspace.
- **Programming language foundations that transfer** across C#, TypeScript, and Python (types as design). Total TypeScript is strong for TS; a cross-language spine is missing.
- **Cockburn *Crystal Clear* walking-skeleton chapter** is not freely available; we currently cite it through Adzic’s quotation. Prefer a library copy if we teach walking skeleton as its own lesson.
- **Hunt & Thomas *The Pragmatic Programmer*, Topic 12** is paywalled; Artima interview is the free first-party stand-in until a library copy is at hand.
- **Beck *Test-Driven Development: By Example*** is paywalled; Canon TDD is the free first-party stand-in until a library copy is at hand.
