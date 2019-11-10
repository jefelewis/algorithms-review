/*
Javascript Built-In Linear Search Functions:
indexOf
includes
find
findIndex
*/

// Linear Search
linearSearch = (array, value) => {
  for (let i = 0; i <= array.length; i++) {
    if(array[i] === value) {
      return i;
    }
  }
  return -1;
};
