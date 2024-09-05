function createButton(text, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.onclick = onClick;
    return button;
}
function generateBookButtons() {
    const availableBooks = document.getElementById("AvailableBooks");
    availableBooks.innerHTML = "";
    const books = JSON.parse(localStorage.getItem('books'));

    books.forEach(book => {
        const listItem = document.createElement('li');
        
        const bookInfo = document.createElement('p');
        bookInfo.textContent = `ID: ${book.id}, Name: ${book.title}`;
        listItem.appendChild(bookInfo);

        const borrowButton = createButton("Borrow", () => {
            borrowBook(book.id, book.title); 
        });
        const viewDetailsButton = createButton("View Details", () => {
            window.location.href ="books_details.html";
        });

        listItem.appendChild(borrowButton);
        listItem.appendChild(viewDetailsButton);

        availableBooks.appendChild(listItem);
    });
}
function borrowBook(bookId, bookName) {
    let borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks')) || [];
    if (!borrowedBooks.includes(bookId)) {
        borrowedBooks.push(bookId);
        localStorage.setItem('borrowedBooks', JSON.stringify(borrowedBooks));
        alert('Book borrowed successfully!');
        window.location.reload();
        window.location.href="borrowed_books.html";
    } else {
        alert('This book is already borrowed.');
    }
}
window.onload = generateBookButtons;