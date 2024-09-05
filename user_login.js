document.getElementById("userloginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const matchingUser = users.find(user => user.email === email && user.password === password);

    if (matchingUser) {
        alert("Login successful!"); 
       window.location.href="user_list.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
});
