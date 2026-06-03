//Capture form submissions and alt automatic tab reload
document.getElementById("SignupForm").addEventListener('submit', function(event) {
    event.preventDefault();

//All Elements
const Username = document.getElementById('Username');
const Email = document.getElementById('Email');
const Password = document.getElementById('Password');
const Checkbox = document.getElementById('checkbox');

//Error span Elements
const UsernameError = document.getElementById('UsernameError');
const EmailError = document.getElementById('emailError');
const PasswordError = document.getElementById('PasswordError');
const termsError = document.getElementById('termsError');

//Reset errors each before validation
UsernameError.textContent = '';
EmailError.textContent = '';
PasswordError.textContent = '';
termsError.textContent = '';
//Reset boarders each before validation 
Username.style.border = '';
Email.style.border = '';
Password.style.border = '';


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
    startResendCountdown();
}
else {
    console.log('failed to submit, some of the fields are invalid');
}

});

//Create a Resend Verification button & mark it disabled by default when the application boots up.
const ResendButton = document.getElementById('ResendButton');
let CountDownInterval = null;

function startResendCountdown() {
    ResendButton.disabled = true;
//Implement a setlnterval loop that ticks down from 10 to 0 seconds.
    let seconds = 10;
    ResendButton.textContent = `Resend Verification (${seconds}s)`;

    if (CountDownInterval) {
        clearInterval(CountDownInterval);
    }

    CountDownInterval = setInterval(function() {
        seconds = seconds - 1;

        if (seconds > 0) {
        ResendButton.textContent = `Resend Verification (${seconds}s)`;
        }
        else if (seconds === 0) {
            clearInterval(CountDownInterval)
            CountDownInterval = null;
            ResendButton.textContent = 'Resend Verification';
            ResendButton.disabled = false;
        }
      }, 1000);
    }
    