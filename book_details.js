document.addEventListener("DOMContentLoaded", function() {
    displayBookDetails();
});

function displayBookDetails() {
    const bookTable = document.getElementById("bookTable");
    const books = JSON.parse(localStorage.getItem("books")) || [];

    books.forEach(book => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = book.id;
        row.appendChild(idCell);

        const titleCell = document.createElement("td");
        titleCell.textContent = book.title;
        row.appendChild(titleCell);

        const authorCell = document.createElement("td");
        authorCell.textContent = book.author;
        row.appendChild(authorCell);

        const categoryCell = document.createElement("td");
        categoryCell.textContent = book.category;
        row.appendChild(categoryCell);

        const pagesCell = document.createElement("td");
        pagesCell.textContent = book.description;
        row.appendChild(pagesCell);

        row.addEventListener("click", function() {
            this.classList.toggle("highlighted");
        });

        bookTable.appendChild(row);
    });
}


