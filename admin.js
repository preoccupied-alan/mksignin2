// Function to fetch the admin password from adminpassword.txt
async function fetchAdminPassword() {
    try {
      const response = await fetch('adminpassword.txt');
      if (!response.ok) {
        throw new Error('Failed to fetch admin password');
      }
      const password = await response.text();
      return password.trim();
    } catch (error) {
      console.error('Error fetching admin password:', error);
      alert('An error occurred while fetching the admin password.');
    }
  }
  
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
  
  // Function to fetch and update the data
  async function updateData() {
    const adminPassword = await fetchAdminPassword();
    const signupList = await fetchSignupList();
    const password = await fetchPassword();
  
    const enteredPassword = prompt('Please enter the admin password:');
    if (enteredPassword !== adminPassword) {
      alert('Invalid admin password. Please try again.');
      updateData(); // Prompt again if the password is incorrect
      return;
    }
  
    displayPassword(password);
    displaySignupList(signupList);
  
    setInterval(async () => {
      const updatedPassword = await fetchPassword();
      displayPassword(updatedPassword);
    }, 60000);
  }
  
  // Main script
  document.addEventListener('DOMContentLoaded', updateData);
  