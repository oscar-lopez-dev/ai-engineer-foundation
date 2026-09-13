(function () {
  function score(raw, checks) {
    var text = (raw || "").trim();
    var lower = text.toLowerCase();
    return checks.map(function (c) {
      var ok = true;
      if (typeof c.minLength === "number") {
        ok = text.length >= c.minLength;
      }
      if (c.must) {
        ok = ok && new RegExp(c.must, "i").test(text);
      }
      if (c.mustNot) {
        ok = ok && !new RegExp(c.mustNot, "i").test(text);
      }
      if (c.layerLead) {
        var starts = new RegExp(c.layerLead.starts, "i").test(lower);
        var has = new RegExp(c.layerLead.has, "i").test(lower);
        var unless = c.layerLead.unless && new RegExp(c.layerLead.unless, "i").test(lower);
        if (starts && has && !unless) ok = false;
      }
      return { ok: ok, pass: c.pass, fail: c.fail };
    });
  }

  document.querySelectorAll("[data-score-rewrite]").forEach(function (form) {
    var spec = form.querySelector("[data-rewrite-checks]");
    var area = form.querySelector("textarea");
    var button = form.querySelector("button.primary");
    var list = form.querySelector(".checks");
    if (!spec || !area || !button || !list) return;

    var checks;
    try {
      checks = JSON.parse(spec.textContent);
    } catch (err) {
      list.innerHTML = "<li class=\"fail\">This checker failed to load. Ask your teacher.</li>";
      return;
    }

    button.addEventListener("click", function () {
      list.innerHTML = "";
      score(area.value, checks).forEach(function (c) {
        var li = document.createElement("li");
        li.className = c.ok ? "pass" : "fail";
        li.textContent = c.ok ? c.pass : c.fail;
        list.appendChild(li);
      });
    });
  });
})();
