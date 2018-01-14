var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];
function addElementToBeginningOfArray(array1,element1) {
  array1.unshift(element1);
  return array1;
}
function destructivelyAddElementToBeginningOfArray(array2,element2) {
  array2.push(element2);
  return array2;
}

function addElementToBeginningOfArray() {

}

function destructivelyAddElementToBeginningOfArray() {

}
function removeElementFromBeginningOfArray(array) {
  var a = array.slice(-2)
  return a;
}
function removeElementFromEndOfArray(array) {
  var a = array.slice(0,array.length -1);
  return a;
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}
