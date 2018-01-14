var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];
function addElementToBeginningOfArray(array1,element1) {
  array1 = new Array();
  array1.unshift(element1);
  return array1;
}
function destructivelyAddElementToBeginningOfArray(array2,element2) {
  array2 = new Array();
  array2.push(element2);
  return array2;
}
