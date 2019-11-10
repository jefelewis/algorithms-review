/*
Javascript Built-In Linear Search Functions:
indexOf
includes
find
findIndex
*/

// Linear Search
const linearSearch = (array, value) => {
  // Iterate Over Array
  for (let i = 0; i <= array.length; i++) {
    if(array[i] === value) {
      return i;
    }
  }

  // Return -1 If Not Found
  return -1;
};
