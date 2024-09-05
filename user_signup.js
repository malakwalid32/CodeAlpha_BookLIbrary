const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

document.getElementById("userSignupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.");
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }
    const newUser = {
        username: username,
        email: email,
        password: password
    };
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = existingUsers.find(user => user.email === email);
    if (existingUser) {
        alert("An account with this email already exists.");
        return;
    }
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Signup successful!");
   window.location.href="user_login.html";
});
