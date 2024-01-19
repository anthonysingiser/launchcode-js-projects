const input = require('readline-sync');

let str = "LaunchCode";
let numberOfLetters = input.question("How many letters would you like to move? ");
let validation = numberOfLetters > str.length;
let sarcasm = ", because some genius chose a number larger than the string length,";

if (validation) {
  numberOfLetters = 3;
}

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let strMinusNumberOfLetters = str.slice(numberOfLetters);
let newStr = strMinusNumberOfLetters + str.slice(0,numberOfLetters);

console.log(strMinusNumberOfLetters, '\n');

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`There was a string called ${str}, 
the first ${validation ? String(numberOfLetters) + sarcasm : String(numberOfLetters)} letters were sliced and moved to the back.
Now it's ${newStr}`)

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
// got it

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
//cool cool cool