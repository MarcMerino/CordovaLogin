// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

var formDiv = document.getElementById("form");

var username = document.getElementById("username");
var password = document.getElementById("password");
var errorMessage = document.getElementById("errorMessage");
var button = document.getElementById("loginButton");

function loginProcess() {
    if (username.value == "" || password.value == "") {
        errorMessage.textContent = "Something's wrong. Please check the fields and try again.";
        errorMessage.style.visibility = "visible";
    } else if (localStorage.getItem(username.value) == null) {
        errorMessage.textContent = "There's no account with this username registered.";
        errorMessage.style.visibility = "visible";
    } else {
        errorMessage.style.visibility = "hidden";
        if (checkUser()) {
            alert("Logged in successfully");
        } else {
            errorMessage.textContent = "Password's wrong.";
            errorMessage.style.visibility = "visible";
        }
    }
}

function checkUser() {
    if (JSON.parse(localStorage.getItem(username.value)).password == CryptoJS.SHA256(password.value).toString()) {
        return true;
    }

    return false;
}

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    button.onclick = loginProcess;
    formDiv.onkeyup = function(event) {
        if (event.key === "Enter") {
            button.click();
        }
    }
    

}
