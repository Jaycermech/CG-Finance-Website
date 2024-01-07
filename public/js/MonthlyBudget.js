function viewBudget() {
    var request = new XMLHttpRequest();
    request.open('GET', '/viewBudget', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function() {
      var response = JSON.parse(request.responseText);
  
      var html = '';
      for (var i = 0; i < response.length; i++) {
        html +=
          '<tr>' +
          '<td>' +
          (i + 1) +
          '</td>' +
          '<td>' +
          response[i].ammenities +
          '</td>' +
          '<td>' +
          response[i].budget +
          '</td>' +
          '<td>' +
          response[i].owner +
          '</td>' +
          '<td>' +
          '<button type="button" class="btn btn-warning" onclick="editBudget(\'' +
          JSON.stringify(response[i]).replaceAll('"', '&quot;') +
          '\')">Edit</button>' +
          '<button type="button" class="btn btn-danger" onclick="deleteBudget(\'' +
          response[i].id +
          '\')">Delete</button>' +
          '</td>' +
          '</tr>';
      }
      document.getElementById('tableContent').innerHTML = html;
    };
    request.send();
  }
  
  async function addBudget() {
    var jsonData = {};
    jsonData.ammenities = document.getElementById('ammenities').value;
    jsonData.budget = document.getElementById('budget').value;
    jsonData.owner = document.getElementById('owner').value;
  
    // Validate fields here if needed
  
    try {
      const response = await fetch('/addBudget', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });
  
      const data = await response.json();
      console.log('New budget added:', data);
  
      // Handle UI changes or redirection here after successful addition
    } catch (error) {
      console.error('Error adding budget:', error);
      // Handle error scenario
    }
  }
  
  function editBudget(data) {
    var selectedBudget = JSON.parse(data);
  
    // Fill form fields or open modal for editing
    document.getElementById('ammenities').value = selectedBudget.ammenities;
    document.getElementById('budget').value = selectedBudget.budget;
    document.getElementById('owner').value = selectedBudget.owner;
  
    // Implement logic for updating the budget using the data in the form
  }
  
  function deleteBudget(id) {
    var request = new XMLHttpRequest();
    request.open('DELETE', '/deleteBudget/' + id, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function() {
      var response = JSON.parse(request.responseText);
      if (response.message === 'Budget deleted successfully!') {
        // Implement any UI changes or redirection after deletion
      } else {
        console.error('Unable to delete budget!');
        // Handle error scenario
      }
    };
    request.send();
  }