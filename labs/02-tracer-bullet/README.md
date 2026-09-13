# Lab 02: Tracer Bullet vs Throwaway Prototype

> Grounding for [Lesson 0002: A tracer, not a prototype](../../lessons/0002-tracer-not-prototype.html) and [Reference: Tracer Bullet](../../reference/tracer-bullet.html).

## The Goal
Demonstrate an enduring **tracer bullet** through an AI-enabled system: real architectural seams, real routing, and real serialization, but with a deterministic LLM stub so the whole pipeline is verifiable without external API latency or non-determinism.

---

## Prototype vs Tracer Bullet

| Attribute | Prototype (Throwaway) | Tracer Bullet (Enduring) |
| :--- | :--- | :--- |
| **Purpose** | Answers an isolated question (e.g. "can LLM extract markdown tables?") | Validates the system architecture and end-to-end integration |
| **Fate** | Discarded or kept in a branch as primary research notes | Kept in production code; fleshed out incrementally |
| **Seams** | Hardcoded, hacked together, quick script | Real interfaces, real logging, real error paths |

---

## The Implementation Seam

```csharp
// Infrastructure/AI/ILlmClient.cs
public interface ILlmClient
{
    Task<string> GenerateAnswerAsync(string prompt, CancellationToken ct = default);
}

// Infrastructure/AI/StubLlmClient.cs (Tracer bullet implementation)
// Endures in tests and local development
public class StubLlmClient : ILlmClient
{
    public Task<string> GenerateAnswerAsync(string prompt, CancellationToken ct = default)
    {
        // Deterministic response that verifies the full path through the system
        return Task.FromResult("Remote work is permitted up to 30 days per calendar year (Handbook §4.2).");
    }
}
```

```csharp
// Services/HandbookAskService.cs
public class HandbookAskService
{
    private readonly ILlmClient _llm;
    private readonly IPolicyRepository _repo;

    public HandbookAskService(ILlmClient llm, IPolicyRepository repo)
    {
        _llm = llm;
        _repo = repo;
    }

    public async Task<AnswerResult> AnswerQuestionAsync(string question, CancellationToken ct)
    {
        var context = await _repo.GetContextAsync(question, ct);
        var prompt = $"Context:\n{context}\n\nQuestion:\n{question}";
        var llmResponse = await _llm.GenerateAnswerAsync(prompt, ct);

        return new AnswerResult(llmResponse, context.DocumentTitle);
    }
}
```

## Reviewing Agent Code
When an agent submits a tracer bullet:
- [ ] Is it a real path you can run in your stack, or a toy isolated script?
- [ ] Does it use real interfaces at the seams (DB, external AI service)?
- [ ] Can you swap the `StubLlmClient` with `AzureOpenAiClient` or `OllamaClient` without changing the core business logic?
