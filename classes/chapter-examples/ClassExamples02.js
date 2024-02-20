// Use terminal commands to see what happens when we call Astronaut but do not pass in 3 arguments.

// Next, set default values for 1 or more of the parameters in constructor.

class Astronaut {
   constructor(name = 'Harold', age = 0, mass = 54){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

let tortoise = new Astronaut('Speedy', 120);

console.log(tortoise.name, tortoise.age, tortoise.mass);

let defaultAstronaut = new Astronaut();
console.log(defaultAstronaut)
// What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT!

let overload = new Astronaut('Bingo', 5, 35, 'seven', 8, true)
console.log(overload)

console.log(typeof tortoise.age)