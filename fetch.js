async function fetchData() {
  try {
    // 1. Call the API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    
    // 2. Check if the response was successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    // 3. Parse the JSON data
    const data = await response.json();
    
    // 4. Do something with the data
    console.log('Data received:', data);
    
  } catch (error) {
    // Catch any network errors or thrown errors
    console.error('Error fetching data:', error);
  }
}

// Execute the function
fetchData();