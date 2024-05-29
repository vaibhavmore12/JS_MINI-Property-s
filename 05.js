function greetPerson(name) {
    return new Promise((resolve, reject) => {
      if (typeof name === 'string') {
        resolve(`Hello, ${name}!`);
      } else {
        reject(new Error('Input must be a string.'));
      }
    });
  }
  
  // Example usage:
  const name = "Mithun";
  
  greetPerson(name)
    .then(message => console.log(message))
    .catch(error => console.error(error.message));

    