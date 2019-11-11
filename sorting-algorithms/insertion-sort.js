/*
Notes:
- Works with unsorted arrays
- Not Efficient
- Time Complexity: O(n^2)	
- Space Complexity: O(1)
*/

/*
Example:
let array = [10, 4, 2, 5, 2, 1, 9, 0];
*/

// Insertion Sort
const insertionSort = (array) => {
  try {
    // Iterate Over Array
    for (let i = 0; i < array.length; i++) {
      // Marker + Comparison Index
      let marker = array[i];
      let comparisonIndex = null;

      // Iterate Over Array Backwards (J Must Be Greater or Equal To 0 And Greater Than The Marker)
      for (comparisonIndex = i - 1; comparisonIndex >= 0 && array[comparisonIndex] > marker; comparisonIndex--) {
        // Swap Index Values
        array[comparisonIndex + 1] = array[comparisonIndex];
      }

      // What??
      array[comparisonIndex + 1] = marker;
    }

    // Return Array
    return array;
  }
  catch (error) {
    console.log(error);
  }
};
