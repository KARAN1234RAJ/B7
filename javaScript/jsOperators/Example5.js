let isStudent = true;
let hasValidID = false;
let hasParentalConsent = true;

let isEligibleForAdmission = (isStudent && hasValidID) || hasParentalConsent;
console.log("Is eligible for admission:", isEligibleForAdmission);
