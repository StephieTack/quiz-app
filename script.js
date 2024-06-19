document.querySelectorAll(".toggleButton").forEach((button) => {
  button.addEventListener("click", function () {
    var img = button.querySelector(".buttonImage");
    var currentSrc = img.getAttribute("src");
    if (currentSrc.endsWith("bookmark-white.svg")) {
      img.setAttribute("src", "assets/bookmark-black.svg");
    } else {
      img.setAttribute("src", "assets/bookmark-white.svg");
    }
  });
});

let operand1 = 1;
const output = document.querySelector('[data-js="like-output"]');

const increaseByOneButton = document.querySelector(
  '[data-js="increase-likes"]'
);

increaseByOneButton.addEventListener("click", () => {
  let increaseByOneButton = operand1++;

  output.textContent = increaseByOneButton;
  console.log(increaseByOneButton);
});
