async function fetchDataFromMultipleAPIs() {
    try {
      // Fetch data from the first API endpoint
      const todoResponse = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const todoData = await todoResponse.json();
  
      // Fetch data from the second API endpoint
      const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const postData = await postResponse.json();
  
      // Combine the results into an object
      const combinedData = {
        todo: todoData,
        post: postData
      };
  
      // Log the combined data to the console
      console.log('Combined Data:', combinedData);
    } catch (error) {
      // Log any errors that occur during the process
      console.error('Error:', error.message);
    }
  }
  
  // Call the function to fetch data from both API endpoints and log the combined result
  fetchDataFromMultipleAPIs();
  