function doubleArrayElements(arr, callback) {
    // Map over each element in the array and double it using the callback function
    return arr.map(callback);
  }
  
  // Example callback function to double a number
  function double(num) {
    return num * 2;
  }
  
  // Example usage
  const inputArray = [1, 2, 3, 4, 5];
  const doubledArray = doubleArrayElements(inputArray, double);
  console.log(doubledArray); // Output: [2, 4, 6, 8, 10]
  