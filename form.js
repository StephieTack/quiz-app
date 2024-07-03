console.clear();

// maxlength displaycount for questioninput
const textInputQuestion = document.querySelector('[data-js="inputQuestion"]');
const countQuestion = document.querySelector('[data-js="countQuestion"]');

textInputQuestion.addEventListener("input", () => {
  countQuestion.textContent = 150 - textInputQuestion.value.length;
});

// maxlength displaycount for answerinput
const textInputAnswer = document.querySelector('[data-js="inputAnswer"]');
const countAnswer = document.querySelector('[data-js="countAnswer"]');

textInputAnswer.addEventListener("input", () => {
  countAnswer.textContent = 150 - textInputAnswer.value.length;
});

// form events
const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  // creating all elements for the card
  const cardContainer = document.createElement("ul");
  const cardList = document.createElement("li");
  const headline = document.createElement("h2");
  const showAnswerButton = document.createElement("button");
  const answerText = document.createElement("p");
  const tagContainer = document.createElement("ul");
  const tagList = document.createElement("li");

  // adding classlist to the elements
  cardContainer.classList.add("cards__list");
  cardList.classList.add("cards__item");
  showAnswerButton.classList.add("cards__button-answer");
  answerText.classList.add("cards__paragraph-hidden");
  tagContainer.classList.add("cards__tag");

  //adding js-data to the elements
  headline.dataset.js = "input-text";
  showAnswerButton.dataset.js = "answerButton";
  answerText.dataset.js = "answerText";

  //adding attributes to the elements
  showAnswerButton.setAttribute("aria-expanded", "false");
  answerText.setAttribute("hidden", "");

  // grabbing the content out of the inputfields
  headline.textContent = data.inputQuestion;
  showAnswerButton.textContent = "Show Answer";
  answerText.textContent = data.inputAnswer;
  tagList.textContent = data.inputTag;

  // appending the new elements to the DOM
  cardContainer.append(cardList); // adds the new element to the SAME level as the form element:
  cardList.append(headline);
  cardList.append(showAnswerButton);
  cardList.append(answerText);
  cardList.append(tagContainer);
  tagContainer.append(tagList);
  form.parentNode.insertBefore(cardContainer, form.nextSibling);

  console.log(document.documentElement);
  console.log(data);

  event.target.elements.inputQuestion.focus();
  event.target.reset();

  // alert("Form submitted");

  // Eventlistener for clicking the showanswer-button
  showAnswerButton.addEventListener("click", () => {
    if (answerText.hasAttribute("hidden")) {
      answerText.removeAttribute("hidden");
      showAnswerButton.setAttribute("aria-expanded", "true");
      showAnswerButton.textContent = "Hide Answer";
    } else {
      answerText.setAttribute("hidden", "");
      showAnswerButton.setAttribute("aria-expanded", "false");
      showAnswerButton.textContent = "Show Answer";
    }
  });
});
