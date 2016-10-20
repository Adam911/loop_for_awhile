var chosenRegNum = 'CL 124,CY 567,CL 345, CJ 496,CL 341';

function allPaarl(RegNum) {
  var splitReg = RegNum.split(',');
  var holdingRegNum = [];
  var paarl = [];
  for (var i = 0; i < splitReg.length; i++) {
    holdingRegNum.push(splitReg[i]);

    //console.log(holdingRegNum[i]);
    if (holdingRegNum[i].includes('CJ')) {
      paarl.push(holdingRegNum[i]);
    }

  }
  console.log(paarl);
}

allPaarl(chosenRegNum);
