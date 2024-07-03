// like increase button
let operand1 = 0;
const output = document.querySelector('[data-js="likeOutput"]');
const increaseByOneButton = document.querySelector('[data-js="increaseLikes"]');

increaseByOneButton.addEventListener("click", () => {
  operand1++;
  output.textContent = operand1;
  console.log(operand1);
});

// dark mode toggle
const bodyElement = document.querySelector('[data-js="body"]');

const toggleModeButton = document.querySelector('[data-js="toggle-button"]');
// toggleModeButton.addEventListener("click", () => {
//   bodyElement.classList.toggle("dark");
bodyElement.classList.remove("dark");

toggleModeButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
