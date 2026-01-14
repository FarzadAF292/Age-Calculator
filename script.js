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
  // Step 2.1: just check if the user selected a date
  const value = birthdateInput.value;

  if (!value) {
    output.textContent = "—";
    showMessage("Please select your birth date.", true);
    return;
  }

  showMessage(`Selected: ${value}`, false);
});
