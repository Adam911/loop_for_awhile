function allPaarl(regNumbers) {

  var plates = regNumbers.split(',');

  var paarlRegNums = [];

  for (var i = 0; i < plates.length; i++) {

    if (plates[i].startsWith("CJ")) {
      console.log(plates[i]);
      paarlRegNums.push(plates[i]);
      return plates[i];
    }
  }
  return paarlRegNums;
}

allPaarl('CJ 456,CY 567,CJ 345,CL 456,CJ 362')
