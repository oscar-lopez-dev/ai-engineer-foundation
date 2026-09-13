/* Binary gate check: for each item, one judgement and immediate reasoning.
   Markup: <div data-gate data-answer="pass|fail" data-why="…">
             … <button class="kind" data-answer="pass">…</button> … <p class="feedback"></p>
           </div> */
(function () {
  document.querySelectorAll("[data-gate]").forEach(function (item) {
    var answer = item.getAttribute("data-answer");
    var why = item.getAttribute("data-why") || "";
    var feedback = item.querySelector(".feedback");
    var buttons = Array.prototype.slice.call(item.querySelectorAll("button.kind"));

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var ok = btn.getAttribute("data-answer") === answer;

        buttons.forEach(function (b) {
          b.disabled = true;
          if (b.getAttribute("data-answer") === answer) b.classList.add("is-right");
          else if (b === btn) b.classList.add("is-wrong");
        });

        if (feedback) {
          feedback.className = "feedback " + (ok ? "ok" : "bad");
          feedback.textContent = (ok ? "Yes. " : "Look again. ") + why;
        }
      });
    });
  });
})();
