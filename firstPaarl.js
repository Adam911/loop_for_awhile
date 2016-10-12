var plates = 'CL 124,CY 567,CL 345, CJ 456,CL 341';


function firstPaarl(paarlPlate) {
  var eplates = [];
  var paarlPlate = plates;
  var plates = paarlPlate.split(',');

  for (var i = 0; i < plates.length; i++) {


    if (paarlPlate.startsWith("CJ")) {
       eplates.push(paarlPlate);
    }
  }
  console.log(eplates);

}

firstPaarl(paarlPlate);
