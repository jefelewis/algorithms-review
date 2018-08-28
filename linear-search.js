/*
Javascript Built-In Linear Search Functions:
indexOf
includes
find
findIndex
*/

function linearSearch(arr, value) {
  for (let i = 0; i <= arr.length; i++) {
    if(arr[i] === value) {
      return i;
    }
  }
  return -1;
}