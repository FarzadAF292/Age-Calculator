"use strict";
const birthdateInput = document.getElementById("birthdate");
const calcBtn = document.getElementById("calcBtn");
const output = document.getElementById("output");
const message = document.getElementById("message");

const showMessage = (text, isError = false) => {
  message.textContent = text;
  message.classList.toggle("error", isError);
};

calcBtn.addEventListener("click", () => {
  const value = birthdateInput.value;

  if (!value) {
    output.textContent = "—";
    showMessage("Please select your birth date.", true);
    return;
  }

  const birthDate = new Date(value);
  const today = new Date();

  if (birthDate > today) {
    output.textContent = "—";
    showMessage("Birth date cannot be in the future.", true);
    return;
  }

  output.textContent = "—";
  showMessage(`Selected: ${value}`, false);
});
