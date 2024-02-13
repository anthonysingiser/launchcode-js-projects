// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode object", function () {
  test('value of the key "organization" is "nonprofit"', function () {
    expect(launchcode.organization).toEqual('nonprofit')
  })
  test('value of the key "percentageCoolEmployees" is 100', function () {
    expect(launchcode.percentageCoolEmployees).toEqual(100)
  })
  test('value of the key "executiveDirector" is "Jeff"', function () {
    expect(launchcode.executiveDirector).toEqual('Jeff')
  })
  test('value of the key "programsOffered" is an array with a length of 3 containing: "Web Development" "Data Analysis" and "Liftoff"', function () {
    expect(launchcode.programsOffered.includes("Web Development")).toEqual(true)
    expect(launchcode.programsOffered.includes("Data Analysis")).toEqual(true)
    expect(launchcode.programsOffered.includes("Liftoff")).toEqual(true)
    expect(launchcode.programsOffered.length).toEqual(3)
  })
  test('when passed a number that is ONLY divisible by 2, launchOuput() returns "Launch!"', function () {
    expect(launchcode.launchOutput(4)).toEqual("Launch!")
  })
  test('when passed a number that is ONLY divisible by 3, launchOuput() returns "Code!"', function () {
    expect(launchcode.launchOutput(9)).toEqual("Code!")
  })
  test('when passed a number that is ONLY divisible by 5, launchOuput() returns "Rocks!"', function () {
    expect(launchcode.launchOutput(5)).toEqual("Rocks!")
  })
  test('when passed a number that is divisible by 2 AND 3, launchOuput() returns "LaunchCode!"', function () {
    expect(launchcode.launchOutput(6)).toEqual("LaunchCode!")
  })
  test('when passed a number that is divisible by 3 AND 5, launchOuput() returns "Code Rocks!"', function () {
    expect(launchcode.launchOutput(15)).toEqual("Code Rocks!")
  })
  test('when passed a number that is divisible by 2 AND 5, launchOuput() returns "Launch Rocks! (CRASH!!!!)"', function () {
    expect(launchcode.launchOutput(10)).toEqual("Launch Rocks! (CRASH!!!!)")
  })
  test('when passed a number that is divisible by 2 AND 3 AND 5 launchOuput() returns "LaunchCode Rocks!"', function () {
    expect(launchcode.launchOutput(30)).toEqual("LaunchCode Rocks!")
  })
  test(`when passed a number that is NOT divisible by 2 OR 3 OR 5 launchOutput returns "Rutabagas! That doesn't work."`, function () {
    expect(launchcode.launchOutput(1)).toEqual("Rutabagas! That doesn't work.")
  })
});