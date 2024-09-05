document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchForm');
    const searchResults = document.getElementById('searchResults');
    let books = JSON.parse(localStorage.getItem('books')) || []; // Retrieve books from localStorage

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const searchQuery = document.getElementById('searchQuery').value.trim();
        const searchBy = document.getElementById('searchBy').value;

        if (!searchQuery) {
            alert("Please enter a search query.");
            return;
        }

        const filteredBooks = books.filter(book => {
            if (searchBy === 'id') {
                return book.id === searchQuery;
            } else if (searchBy === 'name') {
                return book.name.toLowerCase().includes(searchQuery.toLowerCase());
            } else if (searchBy === 'author') {
                return book.author.toLowerCase().includes(searchQuery.toLowerCase());
            } else if (searchBy === 'category') {
                return book.category.toLowerCase().includes(searchQuery.toLowerCase());
            }
        });

        if (filteredBooks.length === 0) {
            alert("No matching books found.");
            return;
        }

        displaySearchResults(filteredBooks);
    });

    function displaySearchResults(books) {
        searchResults.innerHTML = '';
        books.forEach(book => {
            const div = document.createElement('div');
            div.innerHTML = `
                <p><strong>Name:</strong> ${book.name}</p>
                <p><strong>ID:</strong> ${book.id}</p>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Category:</strong> ${book.category}</p>
                <p><strong>Description:</strong> ${book.description}</p>
            `;
            searchResults.appendChild(div);
        });
    }
});

