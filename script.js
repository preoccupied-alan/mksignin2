// Function to retrieve the password from password.txt
function getPassword() {
    // Simulate fetching the password from the server
    // Replace this with your actual AJAX request to retrieve the password
    return fetch('password.txt')
        .then(response => response.text());
}

// Function to check the entered password
function handlePasswordSubmit(event) {
    event.preventDefault();

    const passwordInput = document.getElementById("password-input");
    const password = passwordInput.value;

    getPassword().then(actualPassword => {
        // Check if the entered password is correct
        if (password === actualPassword) {
            const passwordPrompt = document.getElementById("password-prompt");
            const signInUI = document.getElementById("sign-in");

            passwordPrompt.style.display = "none";
            signInUI.style.display = "block";
        } else {
            const passwordError = document.getElementById("password-error");
            passwordError.style.display = "block";
            passwordInput.value = "";
        }
    });
}
