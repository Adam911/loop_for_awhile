
var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');

//fromStellies should contains
assert.deepEqual(fromStellies, [CL 124, CL 345, CL 341])

var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');

assert.deepEqual(fromKuilsriver, []);


function allFromTown(assingPlate) {
  var splitReg = RegNum.split(',');
  var assingPlate = [];
  var stbArr = [];
  for (var i = 0; i < splitReg.length; i++) {
    assingPlate.push(splitReg[i]);

    //console.log(holdingRegNum[i]);
    if (assingPlate[i].includes('CJ')) {
      stbArr.push(assingPlate[i]);
    }

  }
  console.log(stbArr);

}
//The Stellies should return its own string in a console.log()
//then the same goes for Kayla
