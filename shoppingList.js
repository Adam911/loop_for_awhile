const assert = require('assert');

var groceries = '1x bread, 6x hotdog rolls, 2x tubs of margarine ';


function shoppingList(stringToSplit) {
  var arrayOfStrings = stringToSplit.split(',');

  for (var i = 0; i < arrayOfStrings.length; i++) {
     console.log(arrayOfStrings[i]);
   }


}

shoppingList('Shopping List: '+groceries);
