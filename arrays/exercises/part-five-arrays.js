let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
// the method split() takes two strings as a arguments, it splits the string you called it on into 
// separate elements of an array, using the second string argument as the separator.
console.log(str.split(), 'blank');
console.log(str.split('e'), " 'e' as argument");
console.log(str.split(' '), " ' ' as argument");

let splitStr = str.split(' ');
console.log(splitStr);
//2) Use the join method on the array to identify the purpose of the parameter inside the ().
// the mehtod join() takes a atring and an array as arguments, it joins the elements of the array 
// together into a new string, using the string argument as the joiner
console.log(arr.join(), 'blank');
console.log(arr.join('a'), " 'a' as argument");
console.log(arr.join(' '), " ' ' as argument");

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