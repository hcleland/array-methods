console.log("I'm here");

// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

//Sort the numbers in descending order (10, 9, 8, 7, etc).

const descending = integers.sort(function(a, b) {return b-a});
document.querySelector("#descending").innerHTML = descending.join("...");

// Remove any integers greater than 19.

const lessThan19 = integers.filter(integer => integer < 19);
document.querySelector("#lessThan19").innerHTML = lessThan19.join("...");

// Multiply each remaining number by 1.5 and then subtract 1.

const multiplySubtract = lessThan19.map(integer => (integer * 1.5) - 1);
document.querySelector("#multiply").innerHTML = multiplySubtract.join("...");
