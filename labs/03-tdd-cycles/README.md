# Lab 03: TDD Micro-Cycles with Coding Agents

> Grounding for:
> - [Lesson 0003: One failing test](../../lessons/0003-one-failing-test.html)
> - [Lesson 0004: Only enough to pass](../../lessons/0004-only-enough-to-pass.html)
> - [Lesson 0005: Next test, not the rest](../../lessons/0005-next-test-not-the-rest.html)

## The Goal
Learn how to keep coding agents disciplined by enforcing **one failing test**, **only enough code to pass**, and **choosing the next test logically**, rather than letting the agent generate hundreds of untested lines.

---

## The Kata: Parsing Citations from Model Responses

We need to extract citations formatted like `[Handbook §4.2]` from generated answers.

### Cycle 1: The First Failing Test
Prompt the agent:
> *"Write only one test in xUnit verifying that an answer without citations returns an empty list. Do not write the implementation yet."*

```csharp
[Fact]
public void ExtractCitations_WhenNoBrackets_ReturnsEmptyList()
{
    var parser = new CitationParser();
    var result = parser.Extract("This answer has no citations.");

    Assert.Empty(result);
}
```

### Cycle 2: Only Enough to Pass
Prompt the agent:
> *"Write only enough production code to make this test pass. Do not write regex or citation models yet."*

```csharp
public class CitationParser
{
    public IReadOnlyList<string> Extract(string text)
    {
        return Array.Empty<string>(); // The simplest possible code to pass
    }
}
```

### Cycle 3: The Next Test (Forcing Real Logic)
Prompt the agent:
> *"Write the next single test: one citation in brackets should be extracted."*

```csharp
[Fact]
public void ExtractCitations_SingleCitation_ReturnsExtractedTag()
{
    var parser = new CitationParser();
    var result = parser.Extract("Remote work allowed [Handbook §4.2].");

    Assert.Equal(new[] { "Handbook §4.2" }, result);
}
```

Now the implementation must evolve, but only enough for single citations:
```csharp
public class CitationParser
{
    private static readonly Regex CitationRegex = new(@"\[(.*?)\]", RegexOptions.Compiled);

    public IReadOnlyList<string> Extract(string text)
    {
        var matches = CitationRegex.Matches(text);
        return matches.Select(m => m.Groups[1].Value).ToList();
    }
}
```

---

## Agent Review Gate
If an agent returns:
1. Five tests at once &rarr; **Reject**. Working memory overload and hidden phantom greens.
2. An entire domain entity hierarchy when returning a string list passes the test &rarr; **Reject**. Speculative slop.
