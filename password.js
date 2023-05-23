// Function to retrieve the password from password.txt
function getPassword() {
    // Simulate fetching the password from the server
    // Replace this with your actual AJAX request to retrieve the password
    return fetch('password.txt')
        .then(response => response.text());
}
