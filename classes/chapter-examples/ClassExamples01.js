//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

let fox = new Astronaut('Fox', 7, 12);

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';

console.log(fox);
console.log(fox.age, fox.color);

//Try modifying or adding properties below.
fox.isCool = false;
fox.smellsBad = false;
fox.name = 'CoolFox';

console.log(fox)


//object is global, local changes effect the global object
function changeName(astronaut, newName){
  astronaut.name = newName;
}

changeName(fox, 'Sebastian');

console.log(fox);