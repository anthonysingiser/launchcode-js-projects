/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

// a. Print the numbers 0 - 20, one number per line.
for (i = 0; i <= 20; i++) {
  console.log(i);
}

//b. Print only the ODD values from 3 - 29, one number per line.
for (i = 3; i <= 29; i += 2) {
  console.log(i);
}

//c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
for (i = 12; i >= -14; i -= 2){
  console.log(i);
}

//d. Challenge - Print the numbers 50 - 20 in descending order, but 
//only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers).
for (i = 50; i >= 20; i--) {
  if (i % 3 === 0) {
    console.log(i);
  }
}


/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].

Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

//#2
let launchStr = "LaunchCode";
let practiceArr = [1, 5, 'LC101', 'blue', 42];
let practiceArr2 = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let evenArr = [];
let oddArr = [];



for (let i = 0; i < practiceArr.length; i++) {
  console.log(`${practiceArr[i]} \n`);
}

for (i = launchStr.length; i >= 0; i--) {
  console.log(`${launchStr[i]} \n`);
}

for ( i = 0; i < practiceArr2.length; i++) {
  if (practiceArr2[i] % 2 === 0) {
    evenArr.push(practiceArr2[i]);
  } else {
    oddArr.push(practiceArr2[i]);
  }
}

console.log(evenArr);
console.log(oddArr);