function validatePassword() {
    var password = document.getElementById("password").value;
    var errorElement = document.getElementById("error");
    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var digitRegex = /\d/;
    var specialCharRegex = /[!@#$%^&*]/;
    
    if (password.length < 8) {
        errorElement.textContent = "Password must be at least 8 characters long";
        return false;
    }
    if (!uppercaseRegex.test(password)) {
        errorElement.textContent = "Password must contain at least one uppercase letter";
        return false;
    }
    if (!lowercaseRegex.test(password)) {
        errorElement.textContent = "Password must contain at least one lowercase letter";
        return false;
    }
    if (!digitRegex.test(password)) {
        errorElement.textContent = "Password must contain at least one numeric digit";
        return false;
    }
    if (!specialCharRegex.test(password)) {
        errorElement.textContent = "Password must contain at least one special character";
        return false;
    }
    
    return true;
}

document.getElementById("passwordForm").addEventListener("submit", function(event) {
    if (!validatePassword()) {
        event.preventDefault();
    }
});

