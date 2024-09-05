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
        const viewDetailsButton = createButton("View Details", () => {
            window.location.href ="books_details.html";
        });        
        listItem.appendChild(viewDetailsButton);
        availableBooks.appendChild(listItem);
    });
}

window.onload = generateBookButtons;
