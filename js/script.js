const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector("#btnlogin-popup");
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
})



// ===================================================================-




function validate() {

    let emailInput = document.forms["form"]["email"];
    let email = emailInput.value
    let passwordInput = document.forms["form"]["Password"];
    let password = passwordInput.value;
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (emailRegex.test(email) == "") {
        alert("invalid email addres ")
    }


    if (regex.test(password)) {
        alert("Password is valid!");
    } else {
        alert("Password is invalid! Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.");
    }

}

function validate1() {
    let usernameInput = document.forms["form1"]["userName"];
    let emailInput = document.forms["form1"]["email"];
    let email = emailInput.value;
    let passwordInput = document.forms["form1"]["password"];
    let password = passwordInput.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;


    if (usernameInput.value == "") {
        alert("you must enter your username! ")
    }
    if (emailRegex.test(email) == "") {
        alert("Invalid email adress")
    }
    if (regex.test(password)) {
        alert("Password is valid")
    } else {
        alert("Password is invalid! Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.")
    }

}

function mouse() {
    let mouse1 = document.getElementById("btnlogin-popup");
    mouse1.innerHTML = "Click me!"
}
function mouse1() {
    let mouse1 = document.getElementById("btnlogin-popup");
    mouse1.innerHTML = "log in"
}