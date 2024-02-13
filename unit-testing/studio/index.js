
let launchcode = {
  organization: 'nonprofit',
  percentageCoolEmployees: 100,
  executiveDirector: 'Jeff',
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function (num) {
    if (num % 2 === 0 && num % 3 === 0 && num % 5 === 0) {
      return "LaunchCode Rocks!"
    }
    else if (num % 2 === 0 && num % 3 === 0) {
      return "LaunchCode!"
    }
    else if (num % 3 === 0 && num % 5 === 0) {
      return "Code Rocks!"
    }
    else if (num % 2 === 0 && num % 5 === 0) {
      return "Launch Rocks! (CRASH!!!!)"
    }
    else if (num % 2 === 0) {
      return "Launch!"
    }
    else if (num % 3 === 0) {
      return "Code!"
    }
    else if (num % 5 === 0) {
      return "Rocks!"
    }
    else {
      return "Rutabagas! That doesn't work."
    }
  },
}

console.log(launchcode.launchOutput(1))

module.exports = launchcode;