let isStudent = prompt("Enter Student Name");
let hasValidID = parseInt(prompt("Enter Id"));
let hasParentalConsent = Boolean(parseInt(prompt("Enter 0 or 1")));
console.log(isStudent);
console.log(hasValidID);
console.log(hasParentalConsent);

let isEligibleForAdmission = (isStudent && hasValidID) || hasParentalConsent;
console.log("Is eligible for admission:", isEligibleForAdmission);
