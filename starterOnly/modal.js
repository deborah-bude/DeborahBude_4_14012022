function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let validateForm= [false, false, false, false, false, false, true];

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");
const form = document.querySelector("#form");
//DOM Elements - Input
const firstNameInput = document.querySelector("#first");
const lastNameInput = document.querySelector("#last");
const emailInput = document.querySelector("#email");
const birthdayInput = document.querySelector("#birthdate");
const numberTournamentsInput = document.querySelector("#quantity");
const tournamentParticipationInput = document.getElementsByName("location");
const useTermInput = document.querySelector("#checkbox1");

const regexName = /^[a-zA-Z]{2,}$/;
const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const regexDate = /^[0-9]{4}(\-)[0-1][0-9](\-)[0-3][0-9]$/;
// const regexDate = /(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))/g;
const regexNumber = /^[0-9]{1,}$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalCloseBtn.addEventListener("click", closeModal);
//Validate input
firstNameInput.addEventListener("input", () => validateField(firstNameInput, "Votre prénom doit comporter au minimum deux caractères avec seulement des lettres.", regexName, 0));
lastNameInput.addEventListener("input", () => validateField(lastNameInput, "Votre nom doit comporter au minimum deux caractères avec seulement des lettres.", regexName,1));
emailInput.addEventListener("input", () => validateField(emailInput, "Votre e-mail doit être saisie dans un format valide.", regexEmail, 2));
birthdayInput.addEventListener("input", () => validateField(birthdayInput, "Votre date de naissance doit être saisie dans un format valide.", regexDate, 3));
numberTournamentsInput.addEventListener("input", () => validateField(numberTournamentsInput, "Le nombre de tournois doit seulement être en chiffre.", regexNumber, 4));
for (const location of tournamentParticipationInput) {
  location.addEventListener("input", validateTournamentParticipation);
}
useTermInput.addEventListener("input", validateUseTerm);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal function
function closeModal() {
  modalbg.style.display = "none";
}

function validateField(input, message, regex, index) {
  if (regex.test(input.value)) {
    formData[index].setAttribute("data-error-visible", "false");
    formData[index].removeAttribute("data-error");
    validateForm[index]= true;
  } else {
    formData[index].setAttribute("data-error-visible", "true");
    formData[index].setAttribute("data-error", message);
    validateForm[index]= false;
  }
}
/*
//Function validate first name
function validateFirstName() {
  if (regexName.test(firstNameInput.value)) {
    formData[0].setAttribute("data-error-visible", "false");
    formData[0].removeAttribute("data-error");
    validateForm[0]= true;
  } else {
    formData[0].setAttribute("data-error-visible", "true");
    formData[0].setAttribute("data-error", "Votre prénom doit comporter au minimum deux caractères avec seulement des lettres.");
    validateForm[0]= false;
  }
}

//Function validate last name
function validateLastName() {
  if (regexName.test(lastNameInput.value)) {
    formData[1].setAttribute("data-error-visible", "false");
    formData[1].removeAttribute("data-error");
    validateForm[1]= true;
  } else {
    formData[1].setAttribute("data-error-visible", "true");
    formData[1].setAttribute("data-error", "Votre nom de famille doit comporter au minimum deux caractères avec seulement des lettres.")
    validateForm[1]= false;
  }
}

//Function validate last name
function validateEmail() {
  if (regexEmail.test(emailInput.value)) {
    formData[2].setAttribute("data-error-visible", "false");
    formData[2].removeAttribute("data-error");
    validateForm[2]= true;
  } else {
    formData[2].setAttribute("data-error-visible", "true");
    formData[2].setAttribute("data-error", "Votre e-mail doit être saisie dans un format valide.");
    validateForm[2]= false;
  }
}

//Function validate birthday
function validateBirthday() {
  console.log(birthdayInput.value)
  if (regexDate.test(birthdayInput.value)) {
    formData[3].setAttribute("data-error-visible", "false");
    formData[3].removeAttribute("data-error");
    validateForm[3]= true;
  } else {
    formData[3].setAttribute("data-error-visible", "true");
    formData[3].setAttribute("data-error", "Votre date de naissance doit être saisie dans un format valide.");
    validateForm[3]= false;
  }
}

//Function validate number tournaments
function validateNumberTournaments() {
  if (regexNumber.test(numberTournamentsInput.value)) {
    formData[4].setAttribute("data-error-visible", "false");
    formData[4].removeAttribute("data-error");
    validateForm[4]= true;
  } else {
    formData[4].setAttribute("data-error-visible", "true");
    formData[4].setAttribute("data-error", "Le nombre de tournois doit seulement être en chiffre.");
    validateForm[4]= false;
  }
}*/

//Function validate participation tournament
function validateTournamentParticipation() {
  for(var i=0; i<tournamentParticipationInput.length;i++){
    if(tournamentParticipationInput[i].checked == true){
      formData[5].setAttribute("data-error-visible", "false");
      formData[5].removeAttribute("data-error");
      validateForm[5]= true;
      break;
    }
    else {
      formData[5].setAttribute("data-error-visible", "true");
      formData[5].setAttribute("data-error", "Veuillez sélectionner un tournois auquel participer.");
      validateForm[5]= false;
    }
  }
}

//Function validate participation tournament
function validateUseTerm() {
  if (useTermInput.checked) {
    formData[6].setAttribute("data-error-visible", "false");
    formData[6].removeAttribute("data-error");
    validateForm[6]= true;
  } else {
    formData[6].setAttribute("data-error-visible", "true");
    formData[6].setAttribute("data-error", "Vous devez accepter les conditions d'utilisations.");
    validateForm[6]= false;
  }
}

function validate(event) {
  console.log(event);
  event.preventDefault();
  if (validateForm.every(value => value === true)) {
    //validateForm.style.display= "none";
    const modalBody = document.querySelector(".modal-body");
    const heightModal = modalBody.offsetHeight;
    modalBody.innerHTML = "<p class='confirmation_inscription'>Merci pour votre inscription</p>";
    modalBody.style.height = heightModal + 'px';
  } else {
    console.log("Hum... quelque chose cloche...")
  }
}