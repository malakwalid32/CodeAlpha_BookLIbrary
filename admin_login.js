function Submit(event) {
    event.preventDefault(); 
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const admins = JSON.parse(localStorage.getItem("admins")) || [];
    const matchingAdmin = admins.find(admin => admin.email === email && admin.password === password);
    if (matchingAdmin) {
        alert("Login successful!"); 
        window.location.href = "admin_list.html";
    }
     else {
        alert("Invalid email or password. Please try again.");
        return;
    }
}
document.getElementById("adminloginForm").addEventListener("submit", Submit);
