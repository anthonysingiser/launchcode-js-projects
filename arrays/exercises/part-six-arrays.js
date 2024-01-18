//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
const element1 = ['hydrogen', 'H', 1.008];
const element2 = ['helium', 'He', 4.003];
const element26 = ['iron', 'Fe', 55.85];
//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
const table = [];
table.push(element1, element2, element26);
console.log(table, `\n`);
//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
// printing table[1] prints an element with an index of 1, which is an array, in the table array. 
// printing table[1][1] prints an element with an index of 1 inside the array with an index of 1 inside the table array.
console.log(table[1], '[1]', `\n`);
console.log(table[1][1], '[1][1]', `\n`);
//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.

const hydrogenMass = table[0][2];
console.log(hydrogenMass);
const heliumName = table[1][0];
console.log(heliumName);
const ironSymbol = table[2][1];
console.log(ironSymbol); 
//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the 
// name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
const winningNumbers = [
                        [
                            [1,2,3,4,5], 
                            [7,5,4,3,2], 
                            [6,5,2,1,4],
                        ],
                        [
                            [4,2,6,7,8],
                            [5,2,5,7,4],
                            [8,6,9,3,0]
                        ]
                    ];

console.log(winningNumbers[0])
console.log(winningNumbers[1][0])
console.log(winningNumbers[0][0][2])