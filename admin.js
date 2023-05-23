// Function to retrieve the password from password.txt
function getPassword() {
    // Simulate fetching the password from the server
    // Replace this with your actual AJAX request to retrieve the password
    return fetch('password.txt')
        .then(response => response.text());
}

// Function to fetch the slot data and update the admin list
function fetchSlots() {
    getPassword().then(password => {
        // Check if the password is correct
        if (password === "your-password") {
            // Simulate fetching the slot data from the server
            // Replace this with your actual AJAX request to retrieve the slot data
            setTimeout(() => {
                const slotsData = [
                    { slot: 1, name: "John Doe" },
                    { slot: 2, name: "Jane Smith" },
                    { slot: 3, name: "Mike Johnson" },
                    // ... add more slot data here ...
                ];

                // Get the slot list tbody element
                const slotList = document.getElementById("slot-list");

                // Clear the existing slot list
                slotList.innerHTML = "";

                // Iterate through the slots data and create table rows
                slotsData.forEach((slotData) => {
                    const row = document.createElement("tr");
                    const slotCell = document.createElement("td");
                    const nameCell = document.createElement("td");

                    slotCell.textContent = slotData.slot;
                    nameCell.textContent = slotData.name;

                    row.appendChild(slotCell);
                    row.appendChild(nameCell);

                    slotList.appendChild(row);
                });
            }, 1000);
        } else {
            // Password is incorrect, show an error message or redirect to an error page
            console.log("Invalid password.");
        }
    });
}

// Function to clear the list
function clearList() {
    getPassword().then(password => {
        // Check if the password is correct
        if (password === "your-password") {
            // Clear the list
            const slotList = document.getElementById("slot-list");
            slotList.innerHTML = "";
        } else {
            // Password is incorrect, show an error message or redirect to an error page
            console.log("Invalid password.");
        }
    });
}

// Call the fetchSlots function to populate the admin list on page load
window.onload = fetchSlots;
