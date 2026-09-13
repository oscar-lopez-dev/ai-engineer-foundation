(function () {
  document.querySelectorAll("[data-classify]").forEach(function (card) {
    var kind = card.getAttribute("data-kind");
    var why = card.getAttribute("data-why") || "";
    var feedback = card.querySelector(".feedback");
    var buttons = Array.prototype.slice.call(card.querySelectorAll("button.kind"));

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var chosen = btn.getAttribute("data-kind");
        var ok = chosen === kind;
        buttons.forEach(function (b) {
          b.disabled = true;
          if (b.getAttribute("data-kind") === kind) b.classList.add("is-right");
          else if (b === btn) b.classList.add("is-wrong");
        });
        if (feedback) {
          feedback.className = "feedback " + (ok ? "ok" : "bad");
          feedback.textContent = (ok ? "Right. " : "Flip it. ") + why;
        }
      });
    });
  });

  var form = document.querySelector("[data-rewrite]");
  if (!form) return;

  var area = form.querySelector("textarea");
  var button = form.querySelector("button.primary");
  var list = form.querySelector(".checks");

  function has(text, pattern) {
    return pattern.test(text);
  }

  function score(raw) {
    var text = (raw || "").trim();
    var lower = text.toLowerCase();
    var checks = [];

    checks.push({
      ok: text.length >= 40,
      pass: "You wrote a real slice, not a slogan.",
      fail: "Say the whole path in a sentence or two (who does what, what they see)."
    });

    var actor = has(lower, /\b(employee|user|reader|person|someone|staff|manager|customer)\b/);
    checks.push({
      ok: actor,
      pass: "A person is in the picture.",
      fail: "Name who can walk this path (employee, user, reader…)."
    });

    var outcome = has(lower, /\b(see|sees|saw|shown|shows|receive|receives|get|gets|read|reads|hear|hears|displayed|display)\b/);
    checks.push({
      ok: outcome,
      pass: "The result is observable.",
      fail: "Say what they can see or get — that is what you will test."
    });

    var layerLead = has(lower, /^(add|create|build|implement|wire|set up)\b/) &&
      has(lower, /\b(table|endpoint|api|component|form|dbcontext|schema|openai|client)\b/) &&
      !outcome;
    checks.push({
      ok: !layerLead,
      pass: "The lead sentence is behaviour, not a layer.",
      fail: "You still started from a layer (table, endpoint, component). Start from the user path."
    });

    var bound = has(lower, /\b(one|single|don't know|do not know|i don't know|uploaded|this pdf|this document|unauthenticated|out of scope)\b/);
    checks.push({
      ok: bound,
      pass: "The slice is bounded (one thing, one failure, or an explicit out).",
      fail: "Bound it: one document, one failure case, or a clear out-of-scope."
    });

    return checks;
  }

  button.addEventListener("click", function () {
    var checks = score(area.value);
    list.innerHTML = "";
    checks.forEach(function (c) {
      var li = document.createElement("li");
      li.className = c.ok ? "pass" : "fail";
      li.textContent = c.ok ? c.pass : c.fail;
      list.appendChild(li);
    });
  });
})();
