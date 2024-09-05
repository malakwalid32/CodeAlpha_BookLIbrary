const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

function Submit(event) {
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
    const admins = JSON.parse(localStorage.getItem("admins")) || [];
    const existingAdmin = admins.find(admin => admin.email === email);
    if (existingAdmin) {
        alert("An admin with this email already exists.");
        return;
    }
    const admin = {
        username: username,
        email: email,
        password: password
    };
    admins.push(admin);
    localStorage.setItem("admins", JSON.stringify(admins));
    window.location.href = "admin_login.html";
}

document.getElementById("adminSignupForm").addEventListener("submit", Submit);
