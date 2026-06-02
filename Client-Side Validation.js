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
if(Username.Value.trim()=== '') {
    UsernameError.textContent = 'Username is required';
    isValid = false;
}

//Email - Match email strings against a standard pattern criteria
const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (Email.value.trim()=== '') {
      EmailError.textContent = 'Email address is required';
      isValid = false;
}
else if (!EmailRegex.test(Email.value.trim())) {
    EmailError.textContent = 'Please enter a valid email address'
    isValid = false;
}

})