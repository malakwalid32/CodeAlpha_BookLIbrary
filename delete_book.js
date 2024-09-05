document.addEventListener("DOMContentLoaded", function() {
    bookOptions(); 
});
function bookOptions() {
    const bookIdSelect = document.getElementById("bookId");
    bookIdSelect.innerHTML = ""; 
    const books = JSON.parse(localStorage.getItem("books")) || [];
    books.forEach(book => {
        const option = document.createElement("option");
        option.value = book.id;
        option.textContent = book.title;
        bookIdSelect.appendChild(option);
    });
}
function remove() {
    const bookIdSelect = document.getElementById("bookId");
    const selectedBookId = bookIdSelect.value;
    let books = JSON.parse(localStorage.getItem("books")) || [];
    let borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks')) || [];
    books = books.filter(book => book.id !== selectedBookId);
    localStorage.setItem("books", JSON.stringify(books));
    if (borrowedBooks.includes(selectedBookId)) {
        borrowedBooks = borrowedBooks.filter(bookId => bookId !== selectedBookId);
        localStorage.setItem('borrowedBooks', JSON.stringify(borrowedBooks));
    } 
    alert("Book deleted successfully!");    
    updateBorrowedBooksPage();
    window.location.href = "available_books.html";
}
