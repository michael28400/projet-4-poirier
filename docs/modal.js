// DOM Elements
const firstInput = document.querySelector("#first")
const lastInput = document.querySelector("#last");
const emailInput = document.querySelector("#email");
const birthdateInput = document.querySelector("#birthdate");
const number = document.querySelector("#quantity");
const locationOne = document.querySelector("#location1");
const conditionCheck = document.querySelector("#checkbox1");
const pageConfirm = document .querySelector("#confirmation");
const locationUn = document.querySelector("#location1");
const locationDeux = document.querySelector("#location2");
const locationTrois = document.querySelector("#location3");
const locationQuatre = document.querySelector("#location4");
const locationCinq = document.querySelector("#location5");
const locationSix = document.querySelector("#location6");
const formData = document.querySelectorAll(".formData");
const comfirmation = document.querySelector("#confirmation");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseCroix = document.querySelector(".close");
const modalbg = document.querySelector(".bground");
const btnSignup = document.querySelector(".btn-signup");
const closeBouton = document.querySelector("#validate_input");

// variables 
let closeModal = document.querySelector("#closeModal");
let closeModal2 = document.querySelector("#closeModal2");
let myForm = document.querySelector("#form");

// lance modal  sur le bouton par le click
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// permet d'ouvrir la modal background

function launchModal() {
    comfirmation.style.display = "none";
    modalbg.style.display = "block";

}

 // condition pour appeller le message d'erreur si la valeur retourner est fausse.   
function checkInputs() { 
  
    let FirstError = document.querySelector("#first_error");
    if(firstInput.value == ""  || firstInput.value.length < 2) 
    {
        FirstError.innerHTML = " veuillez entrer au moins 2 caractère ou plus pour le champs du prénom.";
        return false
    } else {
        FirstError.innerHTML = "";
    }

    let LastError = document.querySelector(".last_error");
    if(lastInput.value == "" || lastInput.value.length < 2) 
    {
        LastError.innerHTML = " veuillez entrer au moins 2 caractère ou plus pour le champs du nom.";
        LastError.style.fontSize = "15px";
        LastError.style.color = "red";
        return false
    } else {
            LastError.innerHTML = "";
    }

    let emailError = document.querySelector(".email_error");
    let Regex = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    if(!Regex.test(emailInput.value) || emailInput.value == "") 
    {
        emailError.innerHTML = " Veuillez rentrer une adresse mail valide.";
        emailError.style.fontSize = "15px";
        emailError.style.color = "red";
        return false
    } else {
        emailError.innerHTML = "";
    }

    let birthError = document.querySelector(".birth_error");
    let regexBirth = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
    if(!regexBirth.test(birthdate.value)) {
        birthError.innerHTML = "veuillez entrer votre date de naissance.";
        birthError.style.fontSize = "15px";
        birthError.style.color = "red";
        return false;

    } else {
        birthError.innerHTML = "";
    }

    let numberError = document.querySelector(".number_error");
    if(number.value == ""  || isNaN(number.value)) {
        numberError.innerHTML = "veuillez entrer un chiffre.";
        numberError.style.fontSize = "15px";
        numberError.style.color = "red";
        return false;
    } else {
            numberError.innerHTML = "";
    }

    let locationError = document.querySelector(".location_error");
    if( locationUn.ckecked ||  locationDeux.checked || locationTrois.checked || location.locationQuatre ||
        locationCinq.checked || locationSix.checked)
        {
            locationError.innerHTML ="";

    } else {
        locationError.style.color = "red";
        locationError.innerHTML = "vous devez choisir une option";
        locationError.style.fontSize = " 15px";
        return false
    }

    let conditionChecked = document.querySelector(".condition_checked");
    if(!conditionCheck.checked) {
        conditionChecked.innerHTML = " veuillez accepter les termes et conditions. ";
        conditionChecked.style.color = "red";
        conditionChecked.style.fontSize ="15px";
        return false;
    } else {
        conditionCheck.innerHTML = "";
    }
    return true;
    
}

// fermeture modal form bouton croix

modalCloseCroix.addEventListener("click", modalClose);
function modalClose() {
    modalbg.style.display = "none";
    comfirmation.style.display = "none";
    document.location.reload();
}


  
// fermeture  modal confirmation bouton croix
closeModal2.addEventListener('click', function()  {
    comfirmation.style.display ="none";
})

// fermeture modal de confirmation bouton fermer
closeBouton.addEventListener("click", closeModalForm);
function closeModalForm() {
    comfirmation.style.display = "none";
    modalbg.style.display = "none";
    document.location.reload();
}

// Vérification de l'envoie du formulaire, les inputs doivent renvoyer true et ouvrir la modal confirmation

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
    if(checkInputs() == true) { 
        pageConfirm.style.display = "block";
       ValidMessage(); 
    } else {
        return false;
    }
});






 

  












 













