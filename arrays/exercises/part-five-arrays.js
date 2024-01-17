let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
let splitStr = str.split(' ');
console.log(splitStr);
//2) Use the join method on the array to identify the purpose of the parameter inside the ().
let hyphenated = arr.join('-');
console.log(hyphenated); 
//3) Do split or join change the original string/array?
// no, they return shallow copies
console.log(str, splitStr);
//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
let cargoCommaSplit = cargoHold.split(',');
console.log(cargoCommaSplit);
let alphabetizedCargo = cargoCommaSplit.sort().join(',');
console.log(alphabetizedCargo);