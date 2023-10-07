const form = document.querySelector('.logIn');
const fname = document.querySelector('.fname');
const lname = document.querySelector('.lname');
const email = document.querySelector('.email');
const pass = document.querySelector('.pass');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var Email = email.value.trim();
    var Password = pass.value.trim();
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (firstName === "") {
        errorfunction(fname , "First name can not be empty")
    } else {
        success(fname);
    }
    if (lastName === "") {
        errorfunction(lname , "Last name can not be empty")
    } else {
        success(lname);
    }
    if (Email === "") {
        errorfunction(email , "Email can not be empty")
    } else if (!Email.match(emailRegex)) {
        
        errorfunction(email , "Looks like not an email")
    }
    else {
        success(email);
    }
    if (Password === "") {
        errorfunction(pass , "Password can not be empty")
    } else {
        success(pass);
    }
})

function errorfunction(req, message) {
    var parentElement = req.parentElement;
    var spanElement = parentElement.querySelector("span");
    var inputElement = parentElement.querySelector('input');
    inputElement.classList.add('alert');
    spanElement.innerHTML = message;
    if (req !== email) {
        req.value = "";
    }
}
function success(req) {
    var parentElement = req.parentElement;
    var inputElement = parentElement.querySelector('input');
    var spanElement = parentElement.querySelector("span");
    inputElement.classList.add('success');
    inputElement.classList.remove('alert');
    spanElement.innerHTML = "";
}