function addBook() {
    const id = document.getElementById("id").value;
    const bookName = document.getElementById("book_name").value;
    const author = document.getElementById("book_author").value;
    const category = document.getElementById("book_category").value;
    const numPages = document.getElementById("number_of_pages").value;

    const book = {
        id: id,
        title: bookName,
        author: author,
        category: category,
        numbers: numPages
    };
    const books = JSON.parse(localStorage.getItem("books")) || [];
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
    alert("Book added successfully!");
    generateBookButtons();
    window.location.href = "view_books.html";
}

