const form = document.getElementById("newsletter-form");
const input = document.getElementById("email");
const submitButton = document.getElementById("submit-button");
const dismissButton = document.getElementById("dismiss-button");
const mainContainer = document.querySelector(".container");
const articleContainer = document.querySelector(".article-container");
const inputContainer = document.querySelector(".email-input-container");
const dismissContainer = document.querySelector(".dismiss-container");
const subscribedEmail = document.querySelector(".subscribed-email");

const isValidateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const removeErrorClassname = () => {
  if (inputContainer.classList.contains("error"))
    inputContainer.classList.remove("error");
};

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(event.target));
  const { email } = formData;

  if (!isValidateEmail(email)) {
    inputContainer.classList.add("error");
    return;
  }

  removeErrorClassname();

  subscribedEmail.innerText = email;

  form.reset();

  articleContainer.classList.add("hidden");
  dismissContainer.classList.remove("hidden");
  mainContainer.classList.add("dismiss");
};

const handleEnter = (event) => {
  if (event.key === "Backspace") removeErrorClassname();

  if (event.key === "Enter") {
    event.preventDefault();
    event.target.form.requestSubmit();
  }
};

const handleDismiss = () => {
  dismissContainer.classList.add("hidden");
  articleContainer.classList.remove("hidden");
  mainContainer.classList.remove("dismiss");
};

form.addEventListener("submit", handleSubmit);
input.addEventListener("keydown", handleEnter);
dismissButton.addEventListener("click", handleDismiss);
