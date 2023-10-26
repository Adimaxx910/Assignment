function validateForm() {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var country = document.getElementById("country").value;
    var profession = document.getElementById("profession").value;
    var morecomments = document.getElementById("morecomment").value;
    var maleChecked = document.getElementById("male").checked;
    var femaleChecked = document.getElementById("female").checked;
    var termsandcondchecked=document.getElementById("terms-cond").checked;
    
    if (firstName === "") {
        alert("Please enter Your first Name");
        return false;
    }

    if (lastName === "") {
        alert("Please enter Your last Name.");
        return false;
    }
 
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    var mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }
    if (!maleChecked && !femaleChecked) {
        alert("Please select your gender.");
        return false;
    }
      if (profession.trim() === "") {
        alert("Please enter your profession.");
        return false;
    }
    if (country === "") {
        alert("Please select your country.");
        return false;
    }

    var dobDate = new Date(dob);
    var currentDate = new Date();
    if (dobDate > currentDate) {
        alert("Date of Birth cannot be in the future.");
        return false;
    }
    if (morecomments.trim() === "") {
        alert("Please enter any Comments.");
        return false;
    }
    if (!termsandcondchecked) {
        alert("Please Accept terms and condition");
        return false;
    }
    return true;
}

function Submitform(){
    
    if(validateForm()){
      alert("Successfully Submitted Survey!")
    }
   
}
function Resetform(){
    const formelement=document.querySelector("form");
    formelement.reset();
}