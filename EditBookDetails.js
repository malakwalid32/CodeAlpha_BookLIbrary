document.addEventListener("DOMContentLoaded", function() {
    bookOptions(); 
});

function bookOptions() {
    const bookSelect = document.getElementById("bookSelect");
    bookSelect.innerHTML = ""; 

    const books = JSON.parse(localStorage.getItem("books")) || [];

    books.forEach(book => {
        const option = document.createElement("option");
        option.value = book.id;
        option.textContent = book.title;
        bookSelect.appendChild(option);
    });
}
function myFunction() {
    const bookId = document.getElementById("bookSelect").value;
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;
    let books = JSON.parse(localStorage.getItem("books")) || [];
    const index = books.findIndex(book => book.id === bookId);
    if (index !== -1) {
        books[index].title = title;
        books[index].author = author;
        books[index].category = category;
        books[index].description = description;
        localStorage.setItem("books", JSON.stringify(books));
        alert("Book details updated successfully!");
        window.location.href="books_details.html"; 
    }
   
    else {
        alert("Book not found!");
    }
}
