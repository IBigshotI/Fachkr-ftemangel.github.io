let SignedIn = localStorage.getItem("status");
window.addEventListener('DOMContentLoaded', function() {
    function checkCredentials() {
        const correctUsername = "klasse11c";
        const correctPassword = "fcbayernmünchen";

        while (true) {
            // Prompt the user for their username
            const username = prompt("Please enter your username:");

            // Check if the username was entered
            if (username === null || username.trim() === "") {
                alert("Username cannot be empty. Please try again.");
                continue;
            }

            // Prompt the user for their password
            const password = prompt("Please enter your password:");

            // Check if the password was entered
            if (password === null || password.trim() === "") {
                alert("Password cannot be empty. Please try again.");
                continue;
            }

            // Check if the credentials are correct
            if (username === correctUsername && password === correctPassword) {
                alert("Login successful!");
                document.getElementById('protectedContent').style.display = 'block';
                localStorage.setItem("status", "true")
                break;
            } else {
                alert("Invalid username or password. Please try again.");
            }
        }
    }
    if (SignedIn != "true") {
        checkCredentials();
    } else {
        document.getElementById('protectedContent').style.display = 'block';
    }
});