/*
Notes:
- Works with unsorted arrays
- Usually done recursively
- Divide and conquer
- Recursive?
*/

/*
Example:
let array = [10, 4, 2, 5, 2, 1, 9, 0];
*/

// Merge
const merge = (leftArray, rightArray) => {
  try {
    // Merged Array
    let mergedArray = [];

    // Array Lengths
    let leftLength = leftArray.length;
    let rightLength= rightArray.length;

    // Indexes
    let leftIndex = 0;
    let rightIndex = 0;

    // While Left Index Is Less Than Left Length And Right Right Index Is Less Than Right Length
    while (leftIndex < leftLength && rightIndex < rightLength) {
      if (leftArray[leftIndex] < rightArray[rightIndex]) {
        // WHY CAN'T THIS BE leftIndex + 1??
        mergedArray.push(leftArray[leftIndex++]);
      }
      else {
        // WHY CAN'T THIS BE leftIndex + 1??
        mergedArray.push(rightArray[rightIndex + 1]);
      }
    }

    // Return Merged Array?
    return mergedArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
  }
  catch (error) {
    console.log(error);
  }
};

// Merge Sort
const mergeSort = (array) => {
  try {
    // 
    if (array.length < 2) {
      return array;
    }
    else {
      // Midpoint
      let midpoint = Math.floor(array.length / 2);

      // 
      let leftArray = array.slice(0, midpoint);
      let rightArray = array.slice(midpoint, array.length);

      // Recursively Merge
      return merge(mergeSort(leftArray), mergeSort(rightArray));
    }
  }
  catch (error) {
    console.log(error);
  }
};
