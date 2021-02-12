// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

var validRegister = false;

var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var username = document.getElementById("username");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmpassword");
var errorMessage = document.getElementById("errorMessage");

var button = document.getElementById("registerButton");

function registerProcess() {
    if (validRegister) {
        errorMessage.style.visibility = "hidden";

        localStorage.setItem(username.value, JSON.stringify({firstName: firstName.value, lastName: lastName.value, email: email.value, password: CryptoJS.SHA256(password.value).toString()}));
        alert("Registered");
    } else {
        errorMessage.textContent = "Something's wrong. Please check the fields and try again.";
        errorMessage.style.visibility = "visible";
    }
}

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    button.onclick = registerProcess;
    
    username.oninput = checkUsername;
    confirmPassword.oninput = checkPassword;
    password.oninput = checkPassword;
    email.oninput = checkEmail;

}

function checkUsername() {
    if (localStorage.getItem(username.value) == null) {
        username.style.color = "#444444";
        errorMessage.style.visibility = "hidden";
        validRegister = true;
    } else {
        username.style.color = "#e1461d";
        errorMessage.textContent = "Username's already on use.";
        errorMessage.style.visibility = "visible";
        validRegister = false;
    }
}

function checkPassword() {
    if (CryptoJS.SHA256(password.value).toString() == CryptoJS.SHA256(confirmPassword.value).toString()) {
        confirmPassword.style.color = "#444444";
        errorMessage.style.visibility = "hidden";
        validRegister = true;
    } else {
        confirmPassword.style.color = "#e1461d";
        errorMessage.textContent = "Passwords doesnt' match.";
        errorMessage.style.visibility = "visible";
        validRegister = false;
    }
}

function checkEmail() {
    if (email.value.includes("@") && email.value.includes(".")) {
        email.style.color = "#444444";
        errorMessage.style.visibility = "hidden";
        validRegister = true;
    } else {
        email.style.color = "#e1461d";
        errorMessage.textContent = "The email is not valid.";
        errorMessage.style.visibility = "visible";
        validRegister = false;
        
    }
}
