var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];
function addElementToBeginningOfArray(array,element) {
  array.unshift(element);
  return array;
}
function destructivelyAddElementToBeginningOfArray(array2,element2) {
  array2.push(element2);
  return array2;
}

function addElementToBeginningOfArray() {

}

function destructivelyAddElementToBeginningOfArray(array) {
  
}
function removeElementFromBeginningOfArray(array) {
  var a = array.slice(-2)
  return a;
}
function removeElementFromEndOfArray(array) {
  var a = array.slice(0,array.length -1);
  return a;
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array;
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}
