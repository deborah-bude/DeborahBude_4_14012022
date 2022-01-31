function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const validateForm = {
  first: false,
  last: false,
  email: false,
  birthdate: false,
  quantity: false,
  location: false,
  cgu: true,
}

const errorMessages = {
  first: "Votre prénom doit comporter au minimum deux caractères avec seulement des lettres.",
  last: "Votre nom doit comporter au minimum deux caractères avec seulement des lettres.",
  email: "Votre e-mail doit être saisie dans un format valide.",
  birthdate: "Votre date de naissance doit être saisie dans un format valide.",
  quantity: "Le nombre de tournois doit seulement être en chiffre et compris entre 0 et 99.",
  location: "Veuillez sélectionner un tournois auquel participer.",
  cgu: "Vous devez accepter les conditions d'utilisations.",
}

//Regex for validation
const dataRegex = {
  name: /^[a-zA-Z]{2,}$/,
  email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  date: /^[1-2][0-9]{3}(\-)[0-1][0-9](\-)[0-3][0-9]$/,
  number: /^[0-9]{1,2}$/,
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");
const form = document.querySelector("#form");
const submitButton = document.querySelector(".btn-submit");
//DOM Elements - Input
const firstNameInput = document.querySelector("#first");
const lastNameInput = document.querySelector("#last");
const emailInput = document.querySelector("#email");
const birthdayInput = document.querySelector("#birthdate");
const numberTournamentsInput = document.querySelector("#quantity");
const tournamentParticipationInput = document.getElementsByName("location");
const useTermInput = document.querySelector("#checkbox1");
const validationInscription = document.querySelector(".confirmation_inscription");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalCloseBtn.addEventListener("click", closeModal);
//Validate input
firstNameInput.addEventListener("input", () => validateField(firstNameInput));
lastNameInput.addEventListener("input", () => validateField(lastNameInput));
emailInput.addEventListener("input", () => validateField(emailInput));
birthdayInput.addEventListener("input", () => validateField(birthdayInput));
numberTournamentsInput.addEventListener("input", () => validateField(numberTournamentsInput));
for (const location of tournamentParticipationInput) {
  location.addEventListener("input", validateTournamentParticipation);
}
useTermInput.addEventListener("input", validateUseTerm);
form.addEventListener("submit", validate)


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal function
function closeModal() {
  modalbg.style.display = "none";
  form.style.opacity = "1";
  validationInscription.style.opacity = "0"
}

// Validation of basic fields witch contain just texts or numbers
function validateField(input) {
  const name = input.getAttribute('name')
  let regex;
  if (name === 'email') {
    regex = dataRegex.email;
  } else if (name === 'birthdate') {
    regex = dataRegex.date;
  } else if (name === 'quantity') {
    regex = dataRegex.number;
  } else {
    regex = dataRegex.name;
  }
  if (regex.test(input.value)) {
    input.parentElement.setAttribute("data-error-visible", "false");
    input.parentElement.removeAttribute("data-error");
    validateForm[name] = true;
  } else {
    input.parentElement.setAttribute("data-error-visible", "true");
    input.parentElement.setAttribute("data-error", errorMessages[name]);
    validateForm[name] = false;
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
  for (var i = 0; i < tournamentParticipationInput.length; i++) {
    if (tournamentParticipationInput[i].checked == true) {
      tournamentParticipationInput[i].parentElement.setAttribute("data-error-visible", "false");
      tournamentParticipationInput[i].parentElement.removeAttribute("data-error");
      validateForm.location = true;
      break;
    }
    else {
      tournamentParticipationInput[i].parentElement.setAttribute("data-error-visible", "true");
      tournamentParticipationInput[i].parentElement.setAttribute("data-error", errorMessages.location);
      validateForm.location = false;
    }
  }
}

//Function validate participation tournament
function validateUseTerm() {
  if (useTermInput.checked) {
    useTermInput.parentElement.setAttribute("data-error-visible", "false");
    useTermInput.parentElement.removeAttribute("data-error");
    validateForm.cgu = true;
  } else {
    useTermInput.parentElement.setAttribute("data-error-visible", "true");
    useTermInput.parentElement.setAttribute("data-error", errorMessages.cgu);
    validateForm.cgu = false;
  }
}

// Validation subscription
function validate(event) {
  console.log(event);
  event.preventDefault();
  if (Object.values(validateForm).every(value => value === true)) {
    form.style.opacity = "0";
    validationInscription.style.opacity = "1";
    //mettre les valeurdans console.log
    form.reset();
  } else {
    console.log("Hum... quelque chose cloche...")
    validateField(firstNameInput);
    validateField(lastNameInput);
    validateField(emailInput);
    validateField(birthdayInput);
    validateField(numberTournamentsInput);
    validateTournamentParticipation();
    validateUseTerm();
  }
}