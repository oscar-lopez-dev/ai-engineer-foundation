(function () {
  function mark(buttons, chosen, correct) {
    buttons.forEach(function (btn) {
      btn.disabled = true;
      var value = btn.getAttribute("data-choice");
      if (value === correct) btn.classList.add("is-right");
      else if (value === chosen) btn.classList.add("is-wrong");
    });
  }

  document.querySelectorAll("[data-quiz-item]").forEach(function (item) {
    var correct = item.getAttribute("data-correct");
    var why = item.getAttribute("data-why") || "";
    var feedback = item.querySelector(".feedback");
    var buttons = Array.prototype.slice.call(item.querySelectorAll("button.choice"));

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var chosen = btn.getAttribute("data-choice");
        var ok = chosen === correct;
        mark(buttons, chosen, correct);
        if (feedback) {
          feedback.className = "feedback " + (ok ? "ok" : "bad");
          feedback.textContent = (ok ? "Right. " : "Not that one. ") + why;
        }
      });
    });
  });
})();
