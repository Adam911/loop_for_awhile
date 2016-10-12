const assert = require('assert');


var regNumbers = " CL 124, CL 345, CL 341";

function displayEachNumber(eachPlate){
var regNumbers  = eachPlate.split(',');
  for (var i = 0; i < regNumbers.length; i++) {
    console.log(regNumbers[i]);

  }
  //assert.equal(regNumbers[i++]);

}

displayEachNumber(regNumbers);
