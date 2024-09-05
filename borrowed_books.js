document.addEventListener("DOMContentLoaded", function() {
    let borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks')) || [];
    let borrowedList = document.getElementById('borrowedList');

    borrowedBooks.forEach(book => {
        let listItem = document.createElement('li');
        listItem.textContent = book;
        borrowedList.appendChild(listItem);
    });
});
