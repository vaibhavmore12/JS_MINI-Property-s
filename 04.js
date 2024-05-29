function logTitlesInAlphabeticalOrder(books) {
    // Extract titles from the list of books
    const titles = books.map(book => book.title);
    
    // Sort titles alphabetically
    const sortedTitles = titles.sort();
    
    // Log titles to console
    console.log("Titles in alphabetical order:");
    sortedTitles.forEach(title => console.log(title));
  }
  
  // Example usage
  const books = [
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
  ];
  
  // Call the function with the list of books and the callback
  logTitlesInAlphabeticalOrder(books);
  