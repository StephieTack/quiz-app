<<<<<<< Updated upstream
document.querySelectorAll(".toggleButton").forEach((button) => {
  button.addEventListener("click", function () {
    var img = button.querySelector(".buttonImage");
    var currentSrc = img.getAttribute("src");
=======
// bookmark toggle
document.querySelectorAll('[data-js="bookmarkButton"]').forEach((button) => {
  button.addEventListener("click", () => {
    let img = button.querySelector('[data-js="bookmarkButtonIcon"]');
    let currentSrc = img.getAttribute("src");
>>>>>>> Stashed changes
    if (currentSrc.endsWith("bookmark-white.svg")) {
      img.setAttribute("src", "assets/bookmark-black.svg");
    } else {
      img.setAttribute("src", "assets/bookmark-white.svg");
    }
  });
});
<<<<<<< Updated upstream
=======

// Show hidden-text toggle
// Select only buttons with the data attribute 'data-js="answerButton"'
const showAnswerButtons = document.querySelectorAll('[data-js="answerButton"]');
const answerTexts = document.querySelectorAll('[data-js="answerText"]');

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
>>>>>>> Stashed changes
