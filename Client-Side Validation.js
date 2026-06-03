//Capture form submissions and alt automatic tab reload
document.getElementById("SignupForm").addEventListener('submit', function(event) {
    event.preventDefault();

//All Elements
const Username = document.getElementById('Username');
const Email = document.getElementById('Email');
const Password = document.getElementById('Password');
const Checkbox = document.getElementById('Checkbox');

//Error span Elements
const UsernameError = document.getElementById('UsernameError');
const EmailError = document.getElementById('emailError');
const PasswordError = document.getElementById('PasswordError');
const termsError = document.getElementById('termsError');

//Perform check conditions:
//Evaluate empty inputs.

//Username - Evaluate empty input
//inject meaningful text feedback into your error elements 
let isValid = true;
if(Username.value.trim()=== '') {
    UsernameError.textContent = 'Username is required';
    isValid = false;
    Username.style.border = '2px solid red';
}

//Email - Match email strings against a standard pattern criteria
//inject meaningful text feedback into your error elements 
const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (Email.value.trim()=== '') {
      EmailError.textContent = 'Email address is required';
      isValid = false;
}
else if (!EmailRegex.test(Email.value.trim())) {
    EmailError.textContent = 'Please enter a valid email address'
    isValid = false;
    Email.style.border = '2px solid red';
}

//Password - Enforce an 8-character rule on passwords.
//inject meaningful text feedback into your error elements 
if (Password.value.trim()=== '') {
    PasswordError.textContent = 'Password is required';
    isValid = false;
}
else if (Password.value.length < 8) {
    PasswordError.textContent = 'Password must be atleast 8 characters long';
    isValid = false;
    Password.style.border = '2px solid red';
}

//Checkbox
//inject meaningful text feedback into your error elements
if (!Checkbox.checked) {
    termsError.textContent = 'You must agree to the terms!';
    isValid = false;
}

if(isValid) {
    console.log('All the inputs from user are valid');
}
else {
    console.log('failed to submit, some of the fields are invalid')
}

//Reset errors each before validation
UsernameError.textContent = '';
EmailError.textContent = '';
PasswordError.textContent = '';
termsError.textContent = '';
//Reset boarders each before validation 
Username.style.border = '';
Email.style.border = '';
Password.style.border = '';



})