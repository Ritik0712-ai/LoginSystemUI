function validateLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
        document.getElementById("loginError").textContent = "Please enter a valid email address.";
        return false;
    }

    if (password.length < 6) {
        document.getElementById("loginError").textContent = "Password must be at least 6 characters.";
        return false;
    }

    return true;
}

function validateSignup() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
        document.getElementById("signupError").textContent = "All fields are required.";
        return false;
    }

    if (!emailPattern.test(email)) {
        document.getElementById("signupError").textContent = "Please enter a valid email address.";
        return false;
    }

    if (password.length < 6) {
        document.getElementById("signupError").textContent = "Password must be at least 6 characters.";
        return false;
    }

    return true;
}
