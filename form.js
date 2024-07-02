console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  // creating all elements for the card
  const cardContainer = document.createElement("ul");
  const cardList = document.createElement("li");
  const headline = document.createElement("h2");
  const showAnswerButtons = document.createElement("button");
  const answerText = document.createElement("p");
  const tagContainer = document.createElement("ul");
  const tagList = document.createElement("li");

  // adding classlist to the elements
  cardContainer.classList.add("containerQuestionCards");
  cardList.classList.add("questionCardList");
  showAnswerButtons.classList.add("answerButton");
  answerText.classList.add("answerText");
  tagContainer.classList.add("categoryTags");

  //adding js-data to the elements
  headline.dataset.js = "input-text";
  showAnswerButtons.dataset.js = "answer-button";
  answerText.dataset.js = "answer-text";

  //adding attributes to the elements
  showAnswerButtons.setAttribute("aria-expanded", "false");
  answerText.setAttribute("hidden", "");

  // grabbing the content out of the inputfields
  headline.innerText = data.inputQuestion;
  showAnswerButtons.innerText = "Show Answer";
  answerText.innerText = data.inputAnswer;
  tagList.innerText = data.inputTag;

  // appending the new elements to the DOM
  cardContainer.append(cardList); // adds the new element to the SAME level as the form element:
  cardList.append(headline);
  cardList.append(showAnswerButtons);
  cardList.append(answerText);
  cardList.append(tagContainer);
  tagContainer.append(tagList);
  form.parentNode.insertBefore(cardContainer, form.nextSibling);

  console.log(document.documentElement);
  console.log(data);

  event.target.elements.inputQuestion.focus();
  event.target.reset();
  // alert("Form submitted");
});

// geht nicht....

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
