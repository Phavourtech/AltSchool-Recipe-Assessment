// Start registration
function registerUser() {
alert("Welcome to the Registration Form!");
}
// Full Name
let fullName = prompt("Enter your full name (at least 2 words):");
if (!fullName || fullName.trim().split(" ").length < 2) {
    alert("Invalid full name! You must enter at least 2 words.");
} else {

    // Email
    let email = prompt("Enter your email address (e.g. example@domain.com):");
    if (!email.includes("@") || !email.includes(".")) {
        alert("Invalid email format!");
    } else {

        // Password
let password;
let hasUpper, hasNumber, hasSpecial; // Declare outside

do {
    password = prompt("Enter password (min 8 chars, 1 uppercase, 1 number, 1 special char):");

    hasUpper = /[A-Z]/.test(password);
    hasNumber = /[0-9]/.test(password);
    hasSpecial = /[!@#$%^&*]/.test(password);

    if (!password || password.length < 8 || !hasUpper || !hasNumber || !hasSpecial) {
        alert("Password invalid! Must meet all requirements.");
    }

} while (!password || password.length < 8 || !hasUpper || !hasNumber || !hasSpecial);

                // Age
                let age = prompt("Enter your age (must be 18 or older): ");
                if (!age || age < 18) {
                    alert("You must be 18 or older!");
                } else {
                    alert(" Registration successful! Welcome, " + fullName + "!");
                }
            }
        }
    

