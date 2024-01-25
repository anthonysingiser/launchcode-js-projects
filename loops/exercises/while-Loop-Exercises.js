//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
readline = require("readline-sync");

let startingFuelLevel = 0;
let numberOfAstronauts = 0;
let altitudeReached = 0;




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
while (startingFuelLevel <= 5000 || startingFuelLevel >= 30000) {
  startingFuelLevel = readline.question("Enter starting fuel level: ");
  if (startingFuelLevel <= 5000 || startingFuelLevel >= 30000) {
    console.log("Please enter a positive integer value greater than 5000 but less than 30000.");
  }
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
while (numberOfAstronauts <= 0 || numberOfAstronauts > 7 || isNaN(numberOfAstronauts)) {
  numberOfAstronauts = readline.question("Enter number of astronauts: ");
  if (numberOfAstronauts <= 0 || numberOfAstronauts > 7 || isNaN(numberOfAstronauts)) {
    console.log("Please enter a positive integer value less than 7.");
  }
}

//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (startingFuelLevel >= (numberOfAstronauts * 100)) {
  startingFuelLevel -= numberOfAstronauts * 100;
  altitudeReached += 50;
  console.log("Fuel Level: " + startingFuelLevel + "\n" + "Altitude: " + altitudeReached + "\n");
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(`The shuttle gained an altitude of ${altitudeReached} km.`);
if (altitudeReached >= 2000) {
  console.log("Orbit achieved!");
} else {
  console.log("Failed to reach orbit.");
}