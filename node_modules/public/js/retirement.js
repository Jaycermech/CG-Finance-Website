function viewRetirements() {
  var response = "";
  var request = new XMLHttpRequest();
  request.open("GET", "/view-retirement", true);
  request.setRequestHeader("Content-Type", "application/json");
  request.onload = function () {
    response = JSON.parse(request.responseText);

    var html = "";
    for (var i = 0; i < response.length; i++) {
      if (
        response[i].user.toString() ==
        sessionStorage.getItem("Useremail").toString()
      ) {
        html +=
          "<tr>" +
          "<td>" +
          response[i].title +
          "</td>" +
          "<td>" +
          response[i].current_age +
          "</td>" +
          "<td>" +
          response[i].retirement_age +
          "</td>" +
          "<td>" +
          response[i].fund_goal +
          "</td>" +
          "<td>" +
          response[i].annual_saving_goal +
          "</td>" +
          "<td>" +
          response[i].user +
          "</td>" +
          "<td><a id='edit_retirement' href='edit_retirement.html?retirement_id=" +
          response[i].id +
          "' style='margin-right: 15px; color: inherit; text-decoration: none;' class='fa-regular fa-pen-to-square'></a> <a id='delete_icon' onclick='deleteRetirement(" +
          response[i].id +
          ")' style='text-decoration: none; color: inherit;' retirement_id=" +
          response[i].id +
          " class='fa-regular fa-trash-can'></a></td>" +
          "</tr>";
      }
    }
    document.getElementById("tableContent").innerHTML = html;
  };
  request.send();
}

// Function to handle deletion
function deleteRetirement(id) {
  var response = "";
  var request = new XMLHttpRequest();
  var jsonData = new Object();
  jsonData.user = sessionStorage.getItem("Useremail");

  request.open("DELETE", "/delete-retirement/" + id.toString(), true);
  request.setRequestHeader("Content-Type", "application/json");
  request.onload = function () {
    response = JSON.parse(request.responseText);
    // Add your logic for deleting retirement using the retirementId

    viewRetirements()
  };
  request.send(JSON.stringify(jsonData));
  console.log("sending the json data ", jsonData);
}
