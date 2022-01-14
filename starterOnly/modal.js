function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");
const firstNameInput = document.querySelector("#first");

const regexName = /[a-zA-Z]{2,}/g;
const regexNumber = /[0-9]/g;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalCloseBtn.addEventListener("click", closeModal);
//Validate input
firstNameInput.addEventListener("input", validateFirstName)

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal function
function closeModal() {
  modalbg.style.display = "none";
}

function validateFirstName() {
  console.log(firstNameInput.value.match(regexName))
  console.log(firstNameInput.value)
  if (firstNameInput.value == firstNameInput.value.match(regexName)) {
    console.log('Vous avez bien écrit votre prénom ! Bravo !');
    formData[0].setAttribute("data-error-visible", "false");
    if (formData[0].getAttribute("data-error") !== null || formData[0].getAttribute("data-error") !== "") {
      formData[0].removeAttribute("data-error");
    }
  } else {
    console.log('Hum... quelque chose ne va pas...');
    formData[0].setAttribute("data-error-visible", "true");
    formData[0].setAttribute("data-error", "Votre prénom doit comporter minimum deux caractères avec seulement des lettres")
  }
}