# Lab 01: Vertical Slice vs Horizontal Layer

> Grounding for [Lesson 0001: A vertical slice, not a layer](../../lessons/0001-vertical-slice-not-layer.html) and [Reference: Vertical Slice](../../reference/vertical-slice.html).

## The Goal
Demonstrate how to organize and deliver a feature as a complete vertical path that a user can walk, rather than building disconnected layers.

## The Context: Handbook Ask
A user wants to check if their company handbook allows remote work from abroad:
1. **User action**: Types question in input and clicks "Ask".
2. **Path**: UI (`AskInput.tsx`) &rarr; API (`POST /api/ask`) &rarr; Query policy database &rarr; Return answer.

---

## Contrast: Anti-pattern vs Pattern

### The Horizontal Layer Mistake (What agents often generate)
Three tickets delivered independently that cannot be verified until weeks later:
1. Ticket 1: "Add `Policies` database schema and migration" (zero user-visible value).
2. Ticket 2: "Add ASP.NET Core `PolicyController` skeleton" (untested against real UI).
3. Ticket 3: "Build frontend form" (fails to connect due to schema mismatch).

### The Vertical Slice (What to demand)
A single thin slice: `AskPolicySlice`.

```csharp
// Features/AskPolicy/AskPolicyEndpoint.cs
// In ASP.NET Core Minimal API, kept together with its request/response contracts
public static class AskPolicyEndpoint
{
    public record AskRequest(string Question);
    public record AskResponse(string Answer, string SourceDocument);

    public static RouteHandlerBuilder MapAskPolicy(this IEndpointRouteBuilder endpoints)
    {
        return endpoints.MapPost("/api/ask", async (AskRequest req, PolicyDbContext db) =>
        {
            if (string.IsNullOrWhiteSpace(req.Question))
                return Results.BadRequest(new { error = "Question is required." });

            // Minimal query satisfying the user's slice
            var policy = await db.Policies
                .Where(p => p.Title.Contains("Remote Work"))
                .FirstOrDefaultAsync();

            if (policy is null)
                return Results.Ok(new AskResponse("Policy not found.", "N/A"));

            return Results.Ok(new AskResponse(policy.Summary, policy.DocumentName));
        });
    }
}
```

```tsx
// frontend/components/AskPolicy.tsx
import React, { useState } from 'react';

export function AskPolicy() {
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState<{ answer: string; source: string } | null>(null);

  async function handleAsk() {
    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    });
    const data = await res.json();
    setResult({ answer: data.answer, source: data.sourceDocument });
  }

  return (
    <div>
      <input value={question} onChange={e => setQuestion(e.target.value)} placeholder="Ask about company policy..." />
      <button onClick={handleAsk}>Ask</button>
      {result && <p><strong>Answer:</strong> {result.answer} <em>({result.source})</em></p>}
    </div>
  );
}
```

## Check for Agent Direction
When directing an agent to implement a feature:
- [ ] Does the ticket define a complete path from UI to data?
- [ ] Can you run one end-to-end check after merging this single ticket?
- [ ] Are technical layers integrated immediately rather than deferred?
