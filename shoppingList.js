const assert = require('assert');

var groceries = '1x bread, 6x hotdog rolls, 2x tubs of margarine ';


function shoppingList(stringToSplit) {
  var arrayOfStrings = stringToSplit.split(',');

  console.log('Shopping list: ')
  console.log(arrayOfStrings[0]);
  console.log(arrayOfStrings[1]);
  console.log(arrayOfStrings[2]);
}

shoppingList(groceries);
