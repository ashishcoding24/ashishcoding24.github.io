 /* 
 Name: Ashish Zach Ajish
 File: hw3.js
 Date Created: 11/08/2025
 Date Updated: 11/14/2025
 Purpose: Validate data from a form. 
*/

function validateFirstName()
{
    firstname = document.getElementById("firstname").value;
    if(firstname.length<4){
        document.getElementById("firstname-error").innerHTML = "NAME IS TOO SHORT";}
    else {
        document.getElementById("firstname").innerHTML = "Good!";
        }
    } 
function validateLname()
{
    lastname = document.getElementById("lastname").value;
    if(lastname.length<4){
        document.getElementById("lname-error").innerHTML = "NAME IS TOO SHORT";}
    else {
        document.getElementById("lastname").innerHTML = "Good!";
        }
    } 

function validateDob() 
{
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);
    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be in the future";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be more than 120 years ago";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

function validateSsn() 
{
    const ssn = document.getElementById("social_security").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = 
        "Please enter a valid SSN";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}
function validateZip() {
    var zipInput = document.getElementById("zipcode").value;
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if (!zip) {
        document.getElementById("zipcode-error").innerHTML = "Zip code can't be blank";
        return false;
    }
    if (zip.length <= 5)
       {document.getElementById("zipcode-error").innerHTML = "Zip code is too short";
       return false;}

    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }

    zipInput.value = zip;
    document.getElementById("zipcode-error").innerHTML = "";
    return true;
}
function checkPassword2()
{
    p1=document.getElementById("password1").value
    p2=document.getElementById("password2").value
    if (p1==p2)
    {
        document.getElementById("password2_text").innerHTML = "Passwords Match!"
    }
    else 
    {
        document.getElementById("password2_text").innerHTML = "Passwords Do Not Match!"
    }

}
function reviewInput() {
    var formcontent = document.getElementById("patient_form");
    var formoutput = "<table class='output'><th colspan = '3'> Review Your Information:</th>";
    for (let i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value !== "") {
            switch (formcontent.elements[i].type) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>&#x2713;</td></tr>`;
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
                    }
                    break;
                default:
                    formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
            }
        }
    }
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}
function validateEmail(){
   var email = document.getElementById("email").value;
   var emailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if (!emailVal.test(email)) {
        document.getElementById("email-error").innerHTML = 
        "Please enter a valid email address";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}
