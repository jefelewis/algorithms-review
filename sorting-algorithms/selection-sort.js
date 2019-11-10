/*
Notes:
- 
*/

/*
Example:
let array = [10, 4, 2, 5, 2, 1, 9, 0];
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

// Selection Sort
const selectionSort = (array) => {
  try {
    // Min Index
    let minIndex = null;

    // Iterate Over Array
    for (let i = 0; i < array.length; i++) {
      // Min Index
      minIndex = i;

      // Iterate Over Array
      for (let j = i + 1; j < array.length; j++) {
        // Check If 
        if (array[j] < array[minIndex]) {
          // Min Index
          minIndex = j;
        }
      }

      // Swap Numbers
      swapNumbers(array, i, minIndex);
    }

    // Return
    return array;
  }
  catch (error) {
    console.log(error);
  }
};
