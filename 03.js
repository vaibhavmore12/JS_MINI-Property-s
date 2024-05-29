function ageInDays(person) {
    // Concatenate first name and last name into a single string
    const fullName = person.firstName + " " + person.lastName;
  
    // Calculate age in days
    const ageInDays = person.age * 365;
  
    // Define the callback function
    function logMessage() {
      console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    }
  
    // Return the callback function
    return logMessage;
  }
  
  // Example usage
  const personData = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  };
  
  const logAgeInDays = ageInDays(personData);
  
  // Now when you call the returned function, it will log the message
  logAgeInDays(); // Output: The person's full name is John Doe and their age in days is 10950.

  