// Write your solution in this file!

// Declare a global variable called 'customerName' and assign it 'bob'
var customerName = "bob";

// Function to uppercase the 'customerName'
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Declare a global variable 'bestCustomer'
var bestCustomer;

// Function to set 'bestCustomer'
function setBestCustomer() {
  bestCustomer = "not bob";
}

// Function to overwrite 'bestCustomer'
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// Declare a constant 'leastFavoriteCustomer'
const leastFavoriteCustomer = "bob";

// Function attempting to change 'leastFavoriteCustomer'
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "someone else"; // This should throw an error
}

