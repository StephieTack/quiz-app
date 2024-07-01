// bookmark toggle
document.querySelectorAll(".toggleButton").forEach((button) => {
  button.addEventListener("click", function () {
    let img = button.querySelector(".buttonImage");
    let currentSrc = img.getAttribute("src");
    if (currentSrc.endsWith("bookmark-white.svg")) {
      img.setAttribute("src", "assets/bookmark-black.svg");
    } else {
      img.setAttribute("src", "assets/bookmark-white.svg");
    }
  });
});

// Show hidden-text toggle
// Selects only buttons with the fitting data-js
document.addEventListener("DOMContentLoaded", () => {
  // Select only buttons with the data attribute 'data-js="answer-button"'
  const showAnswerButtons = document.querySelectorAll(
    '[data-js="answer-button"]'
  );
  const answerTexts = document.querySelectorAll('[data-js="answer-text"]');

  showAnswerButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const answerText = answerTexts[index];
      if (answerText.hasAttribute("hidden")) {
        answerText.removeAttribute("hidden");
        button.setAttribute("aria-expanded", "true");
        button.textContent = "Hide Answer";
      } else {
        answerText.setAttribute("hidden", "");
        button.setAttribute("aria-expanded", "false");
        button.textContent = "Show Answer";
      }
    });
  });
});
