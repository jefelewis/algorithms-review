/*
Notes:
- Works with unsorted arrays
- Usually done recursively
- Divide and conquer
- Recursive?
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
        mergedArray.push(leftArray[leftIndex + 1]);
      }
      else {
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
      // Midpoint (Parse Int??)
      let midpoint = parseInt(array.length / 2);

      // 
      let leftArray = array.slice(0, midpoint);
      let rightArray = array.slice(midpoint, arr.length);

      // Recursively Merge
      return merge(mergeSort(leftArray), mergeSort(rightArray));
    }
  }
  catch (error) {
    console.log(error);
  }
};
