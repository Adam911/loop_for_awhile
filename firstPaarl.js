
function firstPaarl(regNumbers) {

  var plates = regNumbers.split(',');

  var firstRegNum = [];

  for (var i = 0; i < plates.length; i++) {

    if (plates[i].startsWith("CJ")) {
      console.log(plates[i]);
      firstRegNum.push(plates[i]);
      return plates[i];
    }
  }
return firstRegNum;
}


firstPaarl('CJ 456,CY 567,CL 345,CL 456,CL 341');
