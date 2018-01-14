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
function removeElementFromBeginningOfArray() {
  
}
function removeElementFromEndOfArray(array) {
  array.slice(0,array.length -1);

}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}
