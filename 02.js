function manipulateString(str) {
    // Convert the string to uppercase
    const manipulatedString = str.toUpperCase();
  
    // Define the callback function
    function logString() {
      console.log("The manipulated string is: " + manipulatedString);
    }
  
    // Return the callback function
    return logString;
  }
  
  // Example usage
  const inputString = "Hello, World!";
  const logManipulatedString = manipulateString(inputString);
  
  // Now when you call the returned function, it will log the manipulated string
  logManipulatedString(); // Output: The manipulated string is: HELLO, WORLD!

  