function viewExpenses() {
  var userEmailInSession = sessionStorage.getItem("Useremail");

  if (!userEmailInSession) {
    console.log("User email not found in session storage");
    return;
  }

  var response = "";
  var request = new XMLHttpRequest();
  request.open("GET", "/view-expneses", true);
  request.setRequestHeader("Content-Type", "application/json");
  request.onload = function () {
    response = JSON.parse(request.responseText);

    //-----------------------------------------------

    // console.log("All Expenses Data:", response);

    // Filter expenses based on user email
    var userExpenses = response.filter(function (expense) {
      return expense.user === userEmailInSession;
    });

    // console.log("User's Expenses:", userExpenses);

    //--------------------------

    // console.log(response);
    var html = "";
    var categories = new Map();

    for (var b = 0; b < userExpenses.length; b++) {
      if (!categories.has(userExpenses[b].description))
        categories.set(userExpenses[b].description, 0);
    }

    for (let [key, value] of categories) {
      for (var j = 0; j < userExpenses.length; j++) {
        if (userExpenses[j].description === key) {
          value += parseFloat(userExpenses[j].amount);
          categories.set(key, parseFloat(value.toFixed(2)));
        }
      }
    }

    for (let [key, value] of categories) {
      html +=
        "<tr><td>" +
        key +
        "</td><td>$" +
        value +
        "</td><td><button data-toggle='modal' id='openeditmodal' data-target='#editModal' onclick='editCategory(\"" +
        key +
        "\")'>Edit</button></td></tr>";
    }

    displayPie(categories);

    document.getElementById("tableContent").innerHTML = html;
  };
  request.send();
}

function editCategory(category) {
  // Implement the logic to handle the edit action for the specified category
  // console.log("Editing category: " + category);

  // Check if the Useremail in session storage exists
  var userEmailInSession = sessionStorage.getItem("Useremail");
  if (!userEmailInSession) {
    console.log("User email not found in session storage");
    return;
  }

  document.getElementById("categories").textContent = category;

  function viewResources2() {
    var response = "";
    var request = new XMLHttpRequest();
    request.open("GET", "/view-expneses", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
      response = JSON.parse(request.responseText);
      console.log(response);

      for (let i = 0; i < response.length; i++) {
        // Check if Useremail in session matches the user in the data
        if (
          response[i].description == category &&
          response[i].user === userEmailInSession
        ) {
          console.log(response[i].description);
          var html = `
          <div class="text-center" style="width:100%;">
              <div class="card">
                  <div class="card-body">
                      <h6 style="color: black;" class="card-text">${response[i].description}</h6>
                      <small style="color: black;">Amount: ${response[i].amount}</small>
                      <i class='far fa-edit fa-2x edit' description=${response[i].description} amount=${response[i].amount} id=${response[i].id} data-test-id='editButton' style="color: black; font-size: 18px; cursor: pointer;"  data-toggle='modal' data-target='#editSpecificCategoryModal' data-dismiss='modal' item='${i}' onClick='displaySpecificCategory(this)'></i>
                      <i class='fas fa-trash-alt fa-2x delete-btn' data-id='${response[i].id}' data-description='${response[i].description}' onclick='deleteExpenseItem(this)' data-test-id='deletebtn' style="color: red; font-size: 18px; cursor: pointer;"></i>
                  </div>
              </div>
          </div>
      `;

          document
            .getElementById("categories")
            .insertAdjacentHTML("beforeend", html);
        }
      }
    };
    request.send();
  }
  viewResources2();
}

function deleteExpenseItem(element) {
  var id = element.getAttribute("data-id");
  var description = element.getAttribute("data-description");

  if (
    confirm("Are you sure you want to delete the expense: " + description + "?")
  ) {
    var request = new XMLHttpRequest();
    request.open("DELETE", "/delete-expense/" + id, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
      var response = JSON.parse(request.responseText);
      console.log(response);

      // Handle the response as needed, e.g., refresh the view
      location.reload();
    };
    request.send();
  }
}

function displaySpecificCategory(element) {
  var description = element.getAttribute("description");
  var amount = element.getAttribute("amount");
  var id = element.getAttribute("id");

  // Store id as a global variable
  window.currentResourceId = id;

  console.log(description);
  console.log(amount);
  console.log(id);

  document.getElementById("edit_amount_input").value = amount;
  $("#edit_ammenity_dropdown").val(description.toString());
  document.getElementById("edit_ammenity_dropdown").value = description;
}

function displayPie(data) {
  const expensesData = Array.from(data, ([category, amount]) => ({
    category,
    amount,
  }));

  const categories = expensesData.map((expense) => expense.category);
  const amounts = expensesData.map((expense) => expense.amount);

  const ctx = document.getElementById("expensesChart").getContext("2d");
  const expensesChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: categories,
      datasets: [
        {
          data: amounts,
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)", // Color for Utilities
            "rgba(54, 162, 235, 0.7)", // Color for Groceries
            "rgba(54, 162, 135, 0.7)",
            "rgba(54, 255, 255, 0.7)",
            "rgba(255, 162, 255, 0.7)",
            // Add more colors for other categories if needed
          ],
        },
      ],
    },
    options: {
      plugins: {
        datalabels: {
          formatter: (amounts) => {
            console.log(amounts);
            return amounts + "%"; // Display category as label
          },
        },
      },
    },
  });
}

function addExpense() {
  var response = "";
  var jsonData = new Object();

  var e = document.getElementById("ammenity_dropdown");
  jsonData.description = e.value;
  console.log(jsonData.description);

  jsonData.amount = document.getElementById("amount_input_modal").value;
  console.log(jsonData.amount);

  jsonData.user = document.getElementById("user_input_modal_email").value;
  console.log(jsonData.user);

  // Validation: Check if the fields are empty
  if (
    jsonData.description === "" ||
    jsonData.amount === "" ||
    jsonData.amount <= 0 ||
    isNaN(jsonData.amount)
  ) {
    // document.getElementById("message").innerHTML = "All fields are required!";
    // document.getElementById("message").setAttribute("class", "text-danger");
    return;
  }

  var request = new XMLHttpRequest();
  request.open("POST", "/add-expense", true);
  request.setRequestHeader("Content-Type", "application/json");
  request.onload = function () {
    response = JSON.parse(request.responseText);
    console.log(response);
    console.log(response);
    if (response.message === undefined) {
      document.getElementById("message").innerHTML =
        "Added Resource: " + jsonData.description + "!";

      document.getElementById("amount_input_modal").value = "";
      // window.location.href = "home.html";
      location.reload();
      // Consider whether 'location.reload()' is necessary here
    } else {
      // document.getElementById("message").innerHTML = "Unable to add resource!";
      // document.getElementById("message").setAttribute("class", "text-danger");
    }
  };
  request.send(JSON.stringify(jsonData));
  //console.log(JSON.stringify(jsonData));
}

function editExpense() {
  var response = "";
  var jsonData = new Object();

  // Use the stored id
  var id = window.currentResourceId;

  var e = document.getElementById("edit_ammenity_dropdown");
  jsonData.description = e.value;
  console.log("Updated description:", jsonData.description);

  jsonData.amount = document.getElementById("edit_amount_input").value;
  console.log("Updated amount:", jsonData.amount);

  console.log("Resource ID:", id);

  // Validation: Check if the fields are empty
  if (
    jsonData.description === "" ||
    jsonData.amount === "" ||
    jsonData.amount <= 0 ||
    isNaN(jsonData.amount)
  ) {
    // document.getElementById("message").innerHTML = "All fields are required!";
    // document.getElementById("message").setAttribute("class", "text-danger");
    return;
  }

  var request = new XMLHttpRequest();
  request.open("PUT", "/edit-expense/" + id, true); // Assuming you have a route like "/update-resource/:id" on your server
  request.setRequestHeader("Content-Type", "application/json");
  request.onload = function () {
    response = JSON.parse(request.responseText);
    console.log("Server response:", response);

    if (response.success) {
      // document.getElementById("message").innerHTML =
      //   "Edited Resource: " + jsonData.description + "!";
    } else {
      // document.getElementById("message").innerHTML = "Unable to edit resource!";
      // document.getElementById("message").setAttribute("class", "text-danger");
      // Refresh the page after editing

      document.getElementById("message").innerHTML =
        "Edited Resource: " + jsonData.description + "!";
      location.reload();
    }
  };
  request.send(JSON.stringify(jsonData));
}
