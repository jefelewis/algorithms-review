/*
Notes:
- 
*/

// Recursion: Factorial
const recursionFactorial = (number) => {
  // Base Case
  if (number === 0 || number === 1) {
    return 1;
  }
  else {
    return number * recursionFactorial(number - 1);
  }
};