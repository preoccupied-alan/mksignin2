// Function to fetch the signup list from signup.json
async function fetchSignupList() {
    try {
      const response = await fetch('signup.json');
      if (!response.ok) {
        throw new Error('Failed to fetch signup list');
      }
      const list = await response.json();
      return list;
    } catch (error) {
      console.error('Error fetching signup list:', error);
      alert('An error occurred while fetching the signup list.');
    }
  }
  
  // Function to display the signup list as a table
  function displaySignupList(signupList) {
    const signupTable = document.getElementById('signup-table');
    signupTable.innerHTML = '';
  
    const tableHeader = signupTable.createTHead();
    const headerRow = tableHeader.insertRow();
    const headerCell1 = headerRow.insertCell();
    const headerCell2 = headerRow.insertCell();
    headerCell1.textContent = 'Slot';
    headerCell2.textContent = 'Name';
  
    const tableBody = signupTable.createTBody();
    signupList.forEach(([slot, name]) => {
      const row = tableBody.insertRow();
      const cell1 = row.insertCell();
      const cell2 = row.insertCell();
      cell1.textContent = slot;
      cell2.textContent = name || '-';
    });
  }
  
  // Main script
  document.addEventListener('DOMContentLoaded', async () => {
    const signupList = await fetchSignupList();
    displaySignupList(signupList);
  });
  