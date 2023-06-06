// Function to fetch the password from password.txt
async function fetchPassword() {
    try {
        const response = await fetch('password.txt');
        if (!response.ok) {
            throw new Error('Failed to fetch password');
        }
        const password = await response.text();
        return password.trim();
    } catch (error) {
        console.error('Error fetching password:', error);
        alert('An error occurred while fetching the password.');
    }
}

// Function to display the password
function displayPassword(password) {
    const passwordElement = document.getElementById('password');
    passwordElement.textContent = password;
}

// Function to update the password every 15 seconds
async function updatePassword() {
    const password = await fetchPassword();
    displayPassword(password);
    setTimeout(updatePassword, 15000);
}

// Main script
document.addEventListener('DOMContentLoaded', updatePassword);
