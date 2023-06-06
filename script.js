// Function to handle slot sign-up
async function handleSignup(event) {
    event.preventDefault();
  
    const passcodeInput = document.getElementById("passcode-input");
    const passcode = passcodeInput.value;
  
    try {
      // Perform passcode check
      const passcodeResponse = await fetch('password.txt');
      if (!passcodeResponse.ok) {
        throw new Error('Failed to fetch passcode');
      }
      const correctPasscode = await passcodeResponse.text().trim();
  
      if (passcode !== correctPasscode) {
        alert('Incorrect passcode. Please try again.');
        return;
      }
  
      // Continue with slot sign-up process
      const slotSelect = document.getElementById("slots");
      const selectedSlot = slotSelect.value;
      const userNameInput = document.getElementById("name-input");
      const userName = userNameInput.value;
  
      // Fetch existing list data
      const response = await fetch('listdata.json');
      if (!response.ok) {
        throw new Error('Failed to fetch list data');
      }
      const data = await response.json();
  
      // Check if the slot is already taken
      const slotIndex = data.findIndex(slot => slot.slot === selectedSlot);
      if (slotIndex !== -1) {
        alert("This slot is already taken. Please select another slot.");
        return;
      }
  
      // Add the new slot to the list
      const slot = { slot: selectedSlot, name: userName };
      data.push(slot);
  
      // Save the updated list data
      await saveListData(data);
  
      // Update the list item with the user's name
      const listItem = document.getElementById(`slot-${selectedSlot}`);
      listItem.textContent = `${selectedSlot}: ${userName}`;
  
      // Clear the form inputs
      slotSelect.value = "";
      userNameInput.value = "";
      passcodeInput.value = "";
    } catch (error) {
      console.error('Error signing up:', error);
      alert('An error occurred. Please try again.');
    }
  }
  
  // Function to save the list data to the JSON file
  async function saveListData(data) {
    const response = await fetch('save-list.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  
    if (!response.ok) {
      throw new Error('Failed to save list data');
    }
  }
  