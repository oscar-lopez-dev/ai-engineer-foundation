# Lab 06: Falsifiable Acceptance Criteria in Code

> Grounding for [Lesson 0006: Criteria that can fail](../../lessons/0006-criteria-that-can-fail.html) and [Reference: Acceptance Criteria](../../reference/acceptance-criteria.html).

## The Goal
Convert fuzzy, unreviewable requirements into binary, falsifiable acceptance gates that an automated test suite can verify.

---

## The Gate Question
> *"What would I observe if this requirement were false?"*

If you cannot name a concrete observation, the requirement is unfalsifiable and cannot be safely delegated or reviewed.

| Fuzzy / Unreviewable | Falsifiable Gate | Executable Check |
| :--- | :--- | :--- |
| "The answer should be fast and responsive." | "95% of queries against cached policies respond in under 350ms." | Stopwatch assertion on HTTP response time |
| "AI answers should be accurate." | "If context contains §4.2, the answer body must contain string `[Handbook §4.2]`." | String assertion on citation tag |
| "Errors should be handled gracefully." | "If the database is down, endpoint returns `HTTP 503 Service Unavailable` with JSON `{ "error": "database_unavailable" }`." | Status code and body match test |

---

## The Test Suite Gate

```csharp
public class PolicyAcceptanceTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly HttpClient _client;

    public PolicyAcceptanceTests(WebApplicationFactory<Program> factory)
    {
        _client = factory.CreateClient();
    }

    [Fact]
    public async Task GivenValidPolicyQuestion_WhenContextFound_ThenReturnsCitationWithHttp200()
    {
        // Arrange
        var request = new { question = "Can I work remotely from Italy?" };

        // Act
        var response = await _client.PostAsJsonAsync("/api/ask", request);

        // Assert (Falsifiable gates)
        Assert.Equal(HttpStatusCode.OK, response.StatusCode);

        var body = await response.Content.ReadFromJsonAsync<AskResponse>();
        Assert.NotNull(body);
        Assert.NotEmpty(body.Answer);
        Assert.Contains("[Handbook §4.2]", body.Answer); // Must cite the policy
    }

    [Fact]
    public async Task GivenEmptyQuestion_WhenRequested_ThenReturnsHttp400WithSpecificError()
    {
        var response = await _client.PostAsJsonAsync("/api/ask", new { question = "" });

        Assert.Equal(HttpStatusCode.BadRequest, response.StatusCode);
        var content = await response.Content.ReadAsStringAsync();
        Assert.Contains("Question is required", content);
    }
}
```

---

## Reviewing Agent Output Against Criteria
Before approving a pull request or prompt:
- [ ] Could each test actually fail if the code was broken? (Mutate the code to verify).
- [ ] Are criteria stated in terms of user-observable behavior or system boundaries?
- [ ] Are vague adjectives ("clean", "modern", "intuitive", "safe") removed or quantified?
