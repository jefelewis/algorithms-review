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
      // Selected Element + Comparison Index
      let selectedElement = array[i];
      let comparisonIndex = null;
      console.log(`Selected Element: ${selectedElement}`);

      // Iterate Over Array Backwards (Comparison Index Must Be Greater Or Equal To 0 And Greater Than The Selected Element)
      for (comparisonIndex = i - 1; comparisonIndex >= 0 && array[comparisonIndex] > selectedElement; comparisonIndex--) {
        console.log(`Comparison Index: ${comparisonIndex}`);

        // Swap Index Values
        console.log(`Swapping ${array[comparisonIndex + 1]} for ${array[comparisonIndex]}`);
        array[comparisonIndex + 1] = array[comparisonIndex];
      }

      // Insert Selected Element
      console.log(`Selected Element (${selectedElement}) inserted at index ${comparisonIndex + 1}`);
      array[comparisonIndex + 1] = selectedElement;
    }

    // Return Array
    return array;
  }
  catch (error) {
    console.log(error);
  }
};
