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
//DOM Elements - 
const firstNameInput = document.querySelector("#first");
const lastNameInput = document.querySelector("#last");
const numberTournamentsInput = document.querySelector("#quantity");

const regexName = /[a-zA-Z]{2,}/g;
const regexDate = /[0-3][0-9](\/)[0-1][0-9](\/)[1-2][0-9][0-9][0-9]/g;
const regexNumber = /[0-9]{1,}/g;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalCloseBtn.addEventListener("click", closeModal);
//Validate input
firstNameInput.addEventListener("input", validateFirstName)
lastNameInput.addEventListener("input", validateLastName)
numberTournamentsInput.addEventListener("input", validateNumberTournaments)

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal function
function closeModal() {
  modalbg.style.display = "none";
}

//Function validate first name
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
    formData[0].setAttribute("data-error", "Votre prénom doit comporter au minimum deux caractères avec seulement des lettres")
  }
}

//Function validate last name
function validateLastName() {
  if (lastNameInput.value == lastNameInput.value.match(regexName)) {
    formData[1].setAttribute("data-error-visible", "false");
    if (formData[1].getAttribute("data-error") !== null || formData[1].getAttribute("data-error") !== "") {
      formData[1].removeAttribute("data-error");
    }
  } else {
    formData[1].setAttribute("data-error-visible", "true");
    formData[1].setAttribute("data-error", "Votre nom de famille doit comporter au minimum deux caractères avec seulement des lettres")
  }
}

//Function validate number tournaments
function validateNumberTournaments() {
  if (numberTournamentsInput.value == numberTournamentsInput.value.match(regexNumber)) {
    formData[4].setAttribute("data-error-visible", "false");
    if (formData[4].getAttribute("data-error") !== null || formData[4].getAttribute("data-error") !== "") {
      formData[4].removeAttribute("data-error");
    }
  } else {
    formData[4].setAttribute("data-error-visible", "true");
    formData[4].setAttribute("data-error", "Le nombre de tournois doit seulement être en chiffre");
  }
}