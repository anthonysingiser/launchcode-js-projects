// Code your selectRandomEntry function here:
function selectRandomEntry(ids) {
  let randomIndex = Math.floor(Math.random() * ids.length);
  return ids[randomIndex];
}

function selectThree(ids) {
  let randomThree = [];
  for (i = 0; randomThree.length < 3; i++) {
    let randomId = selectRandomEntry(ids);
    while (randomThree.includes(randomId)) {
      randomId = selectRandomEntry(ids);
    }
    randomThree.push(randomId);
  }
  return randomThree;
}
// Code your buildCrewArray function here:
let idNumbers = [291, 414, 503, 599, 796, 890];

function buildCrewArray(ids, candidates) {
  let crewIds = selectThree(ids)
  let crewArray = [];
  for (animal of candidates) {
    if (crewIds.includes(animal.astronautID)) {
      crewArray.push(animal);
    }
  }
  return crewArray;
}
// Here are the candidates and the 'animals' array:
let candidateA = {
  'name': 'Gordon Shumway',
  'species': 'alf',
  'mass': 90,
  'o2Used': function (hrs) { return 0.035 * hrs },
  'astronautID': 414
};
let candidateB = {
  'name': 'Lassie',
  'species': 'dog',
  'mass': 19.1,
  'o2Used': function (hrs) { return 0.030 * hrs },
  'astronautID': 503
};
let candidateC = {
  'name': 'Jonsey',
  'species': 'cat',
  'mass': 3.6,
  'o2Used': function (hrs) { return 0.022 * hrs },
  'astronautID': 796
};
let candidateD = {
  'name': 'Paddington',
  'species': 'bear',
  'mass': 31.8,
  'o2Used': function (hrs) { return 0.047 * hrs },
  'astronautID': 291
};
let candidateE = {
  'name': 'Pete',
  'species': 'tortoise',
  'mass': 417,
  'o2Used': function (hrs) { return 0.010 * hrs },
  'astronautID': 599
};
let candidateF = {
  'name': 'Hugs',
  'species': 'ball python',
  'mass': 2.3,
  'o2Used': function (hrs) { return 0.018 * hrs },
  'astronautID': 890
};

let animals = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];

let spaceCrewArray = buildCrewArray(idNumbers, animals)

// Code your template literal and console.log statements:
console.log(`${spaceCrewArray[0].name}, ${spaceCrewArray[1].name}, and ${spaceCrewArray[2].name} are going to space!`);
