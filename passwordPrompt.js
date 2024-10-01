const readline = require('readline');

// Set the correct password
const correctPassword = "AngGandaKo";

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt for the password
function askForPassword() {
  rl.question("Enter your password: ", (userInput) => {
    // Check if the user's input is incorrect
    if (userInput !== correctPassword) {
      console.log("Incorrect, try again.");
      askForPassword(); // Ask for the password again
    } else {
      console.log("Access granted."); // Success message
      rl.close(); // Close the readline interface
    }
  });
}

// Start the password prompt
askForPassword();