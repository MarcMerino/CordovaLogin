/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

var username = document.getElementById("username");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmpassword");
var passwordMessage = document.getElementById("passwordMessage");
var email = document.getElementById("email");

function registerProcess() {
    
}


function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    var button = document.getElementById("registerButton").onclick = registerProcess;
    
    confirmPassword.oninput = checkPassword;
    password.oninput = checkPassword;
    email.oninput = checkEmail;

}

function checkPassword() {
    if (password.value == confirmPassword.value) {
        confirmPassword.style.color = "#444444";
        passwordMessage.style.visibility = "hidden";
    } else {
        confirmPassword.style.color = "#e1461d";
        passwordMessage.style.visibility = "visible";

    }
}

function checkEmail() {
    if (!(email.value.includes("@") && email.value.includes("."))) {
        email.style.color = "#e1461d";
    } else {
        email.style.color = "#444444";
    }
}