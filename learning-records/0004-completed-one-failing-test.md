# Completed: one failing test, not a suite

Lesson 0003 is done. The floor moves: do not re-teach test-list vs suite, or code-then-tests vs one-failing-test, as if new. Future sessions may retrieve it (a scratch list is not a suite; the first test must fail before product code).

The next bottleneck is not “what is the first test” but “what you write once it is red.” Ticket-guided work treats green as “build the feature.” Agents do that, and they also cheat: they edit the test so it matches the code. That is lesson 0004: only enough product code to pass this test; do not change the test; leave the rest of the list as notes.

**Evidence:** the learner reported finishing the lesson, including classify + rewrite practice. Rewritten first-test prompts were not pasted back, so independent rewrite depth is still unverified — if a later green prompt still asks for a suite, a notebook, or “the feature,” treat 0003 as exposure, not mastery.

**Implications:** refactor remains parked (Beck: optional in Canon TDD; Fowler: the common skip). Mocking, seams-in-depth, spec templates (`/to-spec`), and Beck’s named “Fake It” pattern stay with the book. The 0002 stub is the example of a smallest pass, not a new idea.
