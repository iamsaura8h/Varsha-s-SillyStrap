const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

searchButton.addEventListener('click', function() {
    // Implement search functionality
    const searchTerm = searchInput.value.trim();

    if (searchTerm !== '') {
        console.log(`Performing search for: ${searchTerm}`);
        // Add logic to handle the search
    } else {
        console.log('Please enter a search term.');
    }
});
