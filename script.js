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
  
  // Function to perform the signup process
  function performSignup(password, list) {
    const enteredPassword = prompt('Please enter the password:');
  
    if (enteredPassword === password) {
      const availableSlots = list.reduce((slots, slot, index) => {
        if (slot[1] === null) {
          slots.push(index);
        }
        return slots;
      }, []);
  
      if (availableSlots.length > 0) {
        const name = prompt('Please enter your name:');
        const selectedSlot = prompt('Please select a slot number:\nAvailable Slots: ' + availableSlots.join(', '));
  
        if (selectedSlot !== null && availableSlots.includes(parseInt(selectedSlot))) {
          const slotIndex = parseInt(selectedSlot);
          list[slotIndex][1] = name;
          alert(`Signup successful!\nYou have been assigned to Slot ${slotIndex + 1}`);
        } else {
          alert('Invalid slot selection.');
        }
      } else {
        alert('No available slots.');
      }
    } else {
      alert('Invalid password.');
    }
  }
  
  // Main script
  document.addEventListener('DOMContentLoaded', async () => {
    const password = await fetchPassword();
    const list = []; // Replace with your code to fetch the signup list from signup.json
    performSignup(password, list);
  });
  