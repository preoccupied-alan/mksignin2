// Function to fetch the slot data and update the member list
function fetchSlots() {
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
}

// Call the fetchSlots function to populate the member list on page load
window.onload = fetchSlots;
