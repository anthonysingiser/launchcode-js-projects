// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode object", function(){
  test('value of the key "organization" is "nonprofit"', function(){
    expect(launchcode.organization).toEqual('nonprofit')
  })
  test('value of the key "percentageCoolEmployees" is 100', function(){
    expect(launchcode.percentageCoolEmployees).toEqual(100)
  })
  test('value of the key "executiveDirector" is "Jeff"', function(){
    expect(launchcode.executiveDirector).toEqual('Jeff')
  })
  test('value of the key "programsOffered" is an array containing: "Web Development" "Data Analysis" and "Liftoff"', function(){
    expect(launchcode.programsOffered).toEqual(["Web Development", "Data Analysis", "Liftoff"])
  })

});