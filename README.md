## An interactive, client-side signup system named the Signup Portal

- An interactive, client-side signup system 
- The application validates user input in real-time, provides error feedback, includes a timed Resend verification button and demonstratrates asynchronous JavaScript concepts.
--- 

## Features

### 1. form Validation (client-side)
- Username - required, cannot be empty
- Email - Must match standard email pattern (regex)
- Password - Minimum 8 characters
- Terms Checkbox - Must be checked
- Error message appear next to each invalid field 
- Input borders turn red on validation failure

### 2. Resend Button Timer
- Button is disabled by default when page loads
- 10 seconds countdown using setInterval()
- when timer reaches 0, `clearInterval()` stops the countdown
- Button becomes enabled and clickable

---

## How to run
- Open Developer console ctrl + shift + I to see async output