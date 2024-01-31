
let currentId = null; // Variable to store the current ID

function viewBudget() {
    var request = new XMLHttpRequest();
    request.open('GET', '/view-budget', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var response = JSON.parse(request.responseText);
            
            if (response.length > 0) {
                var userMail = sessionStorage.getItem('Useremail');
                var filteredResponse = response.filter(item => item.owner === userMail);

                var html = '';

                for (var i = 0; i < filteredResponse.length; i++) {
                    html +=
                        '<tr>' +
                        // '<td>' + (i + 1) + '</td>' +
                        '<td>' + filteredResponse[i].ammenities + '</td>' +
                        '<td>' + "$" + filteredResponse[i].budget + '</td>' +
                        '<td>' + filteredResponse[i].owner + '</td>' +
                        '<td>' +
                        '<br>' + // Line break for space
                        '<button type="button" class="btn btn-warning openEditBtn" id="editbtn1" data-bs-toggle="modal" data-bs-target="#editModal" data-id="' + filteredResponse[i].id + '">' +
                        '<i class="fas fa-edit"></i></button>' + // Edit icon
                        '</td>' +
                        '</tr>';
                    var responseData = filteredResponse[i];
                    console.log(responseData);
                }
                document.getElementById('tableContent').innerHTML = html;

                // Add event listener to log ID when the edit button is clicked
                var editButtons = document.querySelectorAll('.openEditBtn');
                editButtons.forEach(function (btn) {
                    btn.addEventListener('click', function (event) {
                        var id = event.target.getAttribute('data-id');
                        console.log('Clicked ID:', id);

                    });
                });

                document.addEventListener('DOMContentLoaded', function () {
                    document.getElementById('editModal').addEventListener('click', function (event) {
                        if (event.target && event.target.classList.contains('btn-danger')) {
                            var data = // Retrieve the data you need to pass;
                                viewBudgetid(data);
                        }
                    });
                });
            } else {
                console.log('API returned an empty response.');
            }
        } else {
            console.error('Error fetching data from the API. Status code:', request.status);
        }
    };
    request.send();
}
function viewBudgetid(id) {
    var request = new XMLHttpRequest();
    request.open("GET", "/view-budget/" + id, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
        var response = JSON.parse(request.responseText);
        console.log(response);
        document.getElementById("ammenitiesEdit").value = response.ammenities;
        document.getElementById("budgetEdit").value = response.budget;
        document.getElementById("ownerEdit").value = response.owner;

        console.log("budget: ", response.budget);
        var id = response.id;
        console.log("HI : ", id);
        currentId = id;
    };
    request.send();
}


async function addBudget() {
    var userMail = sessionStorage.getItem('Useremail');
    var jsonData = {};
    jsonData.ammenities = document.getElementById('ammenitiesAdd').value;
    jsonData.budget = document.getElementById('budgetAdd').value;
    jsonData.owner = userMail;
    console.log(jsonData.owner);
    // Validate fields here if needed
    if (jsonData.budget.trim() === "") {
        alert("Please enter Monthly Budget");
        return;
    }

    try {
        const response = await fetch('/add-budget', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        });

        const data = await response.json();
        console.log('New budget added:', data);
        viewBudget()


        // Handle UI changes or redirection here after successful addition

        $('#addModal').modal('hide');
    } catch (error) {
        console.error('Error adding budget:', error);
        // Handle error scenario
    }
}


async function editBudget() {
    console.log("wtf: ", currentId);
    const jsonData = {};
    jsonData.ammenities = document.getElementById('ammenitiesEdit').value;
    jsonData.budget = document.getElementById('budgetEdit').value;
    jsonData.owner = document.getElementById('ownerEdit').value;
    console.log(jsonData);
    if (jsonData.budget.trim() === "") {
        alert("Please enter Monthly Budget");
        return;
    }

    try {
        const response = await fetch('/edit-budget/' + currentId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        });
        viewBudget();
        const data = await response.json();
        console.log('Budget updated:', data);

        // Handle UI changes or redirection after successful update
        $('#editModal').modal('hide');
    } catch (error) {
        console.error('Error updating budget:', error);
        // Handle error scenario
    }
}
 
async function deleteBudget() {
    console.log("cg: ", currentId);
    try {
        const response = await fetch('/delete-budget/' + currentId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response.status);
        if (response.status === 201) {
            const data = await response.json();
            console.log('Budget deleted:', data);
            viewBudget();
            // Implement UI changes or redirection after successful deletion
            $('#editModal').modal('hide');
            location.reload();
        }
    } catch (error) {
        console.error('Error deleting budget:', error);
        // Handle error scenario
    }
}


