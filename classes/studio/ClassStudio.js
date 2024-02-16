//Declare a class called CrewCandidate with a constructor that takes three parameters—
//name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name = '', mass = '', scores = []) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
        this.scores.push(newScore)
    }
    average() {
        let total = 0;
        for (let i = 0; i < this.scores.length; i++) {
            total += this.scores[i]
        }
        let average = Math.round(total / this.scores.length)
        return average
    }
    status() {
        let scoreAverage = this.average();
        if (scoreAverage >= 90) {
            return "Accepted"
        }
        else if (scoreAverage > 80) {
            return "Probationary"
        }
        else {
            return "Rejected"
        }
    }
    test(){
       console.log(`${this.name} earned an average test score of ${this.average()} and has a status of ${this.status()}`)
    } 
}

let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90])
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97])
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62])

//Add methods for adding scores, averaging scores and determining candidate 
//status as described in the studio activity.
bubbaBear.test()

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. 
//How many tests will it take to reach Reserve status? How many to reach 
//Accepted? Remember, scores cannot exceed 100%.

// gladGator.addScore(100)
// gladGator.addScore(100)
// now at Probationary, 2 additional scores of 100
// gladGator.addScore(100)
// gladGator.addScore(100)
// gladGator.addScore(100)
// gladGator.addScore(100)
// now at Accepted, 6 additional scores of 100
// gladGator.test()

//make loop for adding scores of 100
function helpGator() {
    while (gladGator.status() !== 'Accepted'){
        gladGator.addScore(100)
    }
    return gladGator.test()
}

helpGator()