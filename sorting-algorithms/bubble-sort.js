/*
Notes:
- Works with unsorted arrays
*/

/*
Example:
const array = [10, 4, 2, 5, 2, 1, 9, 0];
*/

// Swap Numbers
const swapNumbers = (array, i, j) => {
  try {
    // Save Element Value (Because It Will Change When We Swap/Reassign)
    let temp = array[i];

    // Assign Element2 To Element1
    array[i] = array[j];

    // Assign Element1 To Element2
    array[j] = temp;
  }
  catch (error) {
    console.log(error);
  }
};

// Bubble Sort
const bubbleSort = (array) => {
  try {
    // Iterate Over Array From First Element
    for (let i = 0; i < array.length; i++) {
      // Iterate Over Array From Succeeding Element
      for (let j = 1; j < array.length; j++) {
        // Check If First Element Is Greater Proceeding Element
        if (array[j - 1] > array[j]) {
          // Swap Numbers
          swapNumbers(array, j - 1, j);
        }
      }
    }

    // Return Array
    return array;
  }
  catch (error) {
    console.log(error);
  }
};
