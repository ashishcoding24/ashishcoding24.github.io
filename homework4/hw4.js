 /* 
 Name: Ashish Zach Ajish
 File: hw3.js
 Date Created: 11/08/2025
 Date Updated: 11/14/2025
 Purpose: Validate data from a form. 
*/

function validateFirstName() {
    let firstname = document.getElementById("firstname").value;

    if (firstname.length < 4) {
        document.getElementById("firstname-error").innerHTML = "Name is too short";
    } else {
        document.getElementById("firstname-error").innerHTML = "";
    }
}


function validateLname() {
    let lastname = document.getElementById("lastname").value;

    if (lastname.length < 4) {
        document.getElementById("lname-error").innerHTML = "Name is too short";
    } else {
        document.getElementById("lname-error").innerHTML = "";
    }
}


function validateDob() {
    let dob = document.getElementById("dob");
    let selectedDate = new Date(dob.value);
    let today = new Date();
    let oldestAllowed = new Date();
    oldestAllowed.setFullYear(today.getFullYear() - 120);

    if (selectedDate > today) {
        document.getElementById("dob-error").innerHTML = "Date cannot be in the future";
        dob.value = "";
        return false;

    } else if (selectedDate < oldestAllowed) {
        document.getElementById("dob-error").innerHTML = "Date cannot be more than 120 years ago";
        dob.value = "";
        return false;

    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}


function validateSsn() {
    const ssn = document.getElementById("social_security").value;
    const ssnPattern = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnPattern.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = "Please enter a valid SSN";
        return false;
    }

    document.getElementById("ssn-error").innerHTML = "";
    return true;
}


function validateZip() {
    let zipInput = document.getElementById("zipcode");
    let zip = zipInput.value.replace(/[^\d]/g, ""); 

    if (zip.length === 0) {
        document.getElementById("zipcode-error").innerHTML = "Zip code cannot be blank";
        return false;
    }

    if (zip.length < 5) {
        document.getElementById("zipcode-error").innerHTML = "Zip code is too short";
        return false;
    }

    
    if (zip.length > 5) {
        zip = zip.substring(0, 5) + "-" + zip.substring(5, 9);
    } else {
        zip = zip.substring(0, 5);
    }

    zipInput.value = zip;
    document.getElementById("zipcode-error").innerHTML = "";
    return true;
}


function checkPassword2() {
    let p1 = document.getElementById("password1").value;
    let p2 = document.getElementById("password2").value;

    if (p1 === p2) {
        document.getElementById("password2_text").innerHTML = "Passwords Match!";
    } else {
        document.getElementById("password2_text").innerHTML = "Passwords Do Not Match!";
    }
}


function validateEmail() {
    let email = document.getElementById("email").value;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
        document.getElementById("email-error").innerHTML = "Please enter a valid email";
        return false;
    }

    document.getElementById("email-error").innerHTML = "";
    return true;
}


function validateUserID() {
    let userID = document.getElementById("user_id").value;

    
    if (/^[0-9]/.test(userID)) {
        document.getElementById("userId-error").innerHTML = "User ID cannot start with a number";
        return false;
    }

    
    if (userID.length < 5 || userID.length > 20) {
        document.getElementById("userId-error").innerHTML = "User ID must be between 5 and 20 characters";
        return false;
    }

   
    if (!/^[A-Za-z0-9_-]+$/.test(userID)) {
        document.getElementById("userId-error").innerHTML = 
            "User ID may contain letters, numbers, dashes (-), and underscores (_)";
        return false;
    }

    document.getElementById("userId-error").innerHTML = "";
    return true;
}


function reviewInput() {
    let form = document.getElementById("patient_form");
    let output = "<table class='output'><tr><th colspan='3'>Review Your Information</th></tr>";

    for (let i = 0; i < form.elements.length; i++) {
        let f = form.elements[i];

        if (f.type === "radio" && !f.checked) continue;
        if (f.type === "checkbox" && !f.checked) continue;

        if (f.value !== "") {
            output += `<tr><td align="right">${f.name}</td><td>${f.value}</td></tr>`;
        }
    }

    output += "</table>";
    document.getElementById("showInput").innerHTML = output;
}

function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}
