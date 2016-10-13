function allFromTown(fromHere) {

}


var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');

//fromStellies should contains
assert.deepEqual(fromStellies, [CL 124, CL 345, CL 341])

var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');

assert.deepEqual(fromKuilsriver, []);
