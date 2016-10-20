const assert = require('assert');
//fromStellies should contains


function allFromTown(fromTown, location) {
  var splitThis = fromTown.split(',');
  // var assingPlate = [];
  var hinged = [];

  for (var i = 0; i < splitThis.length; i++) {

    if (splitThis[i].startsWith(location)) {
      hinged.push(splitThis[i]);
    }
  }
  console.log(hinged);
  return hinged;
}
//assert.deepEqual(allFromTown, []);


var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341','CY');
var fromStellies = allFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341','CL');

assert.deepEqual(fromKuilsriver,['CY 567']);
assert.deepEqual(fromStellies, ['CL 124','CL 345','CL 341'])
//Printing out the list and using an if statement
//to see if the mathces the exact given.
