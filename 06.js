async function fetchDataFromAPI() {
    try {
      // Fetch data from the API
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      // Parse the JSON response
      const data = await response.json();
  
      // Log the result to the console
      console.log('Fetched data:', data);
    } catch (error) {
      // Log any errors that occur during the process
      console.error('Error:', error.message);
    }
  }
  
  // Call the function to fetch and log data from the API
  fetchDataFromAPI();
  