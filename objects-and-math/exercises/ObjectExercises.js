function move () {
   let takeSteps = Math.ceil(Math.random() * 10);
   return takeSteps; 
}


let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 2,
   steps: move()
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 4,
   steps: move()
};

let superChimpTwo = {
   name: 'Brad',
   species: 'Chimpanzee',
   mass: 11,
   age: 6,
   astronautID: 6,
   steps: move()
}

let beagleRoy = {
   name: 'Leroy',
   species: 'Beagle',
   mass: 14,
   age: 5,
   astronautID: 3,
   steps: move()
}

let tardiAlm = {
   name: 'Almina',
   species: 'Tardigrade',
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   steps: move()
}

let crew = [superChimpOne, salamander, superChimpTwo, beagleRoy, tardiAlm]

function crewReport(member){
   return `${member.name} is a ${member.species}. They are ${member.age} years old and ${member.mass} kilograms. Their ID is ${member.astronautID}`
}


// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!