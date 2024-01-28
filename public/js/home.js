function viewExpenses() {
  var response = "";
  var request = new XMLHttpRequest();
  request.open("GET", "/view-expneses", true);
  request.setRequestHeader("Content-Type", "application/json");
}

function addExpense() {
  var response = "";
  var jsonData = new Object();

  jsonData.description = "help";
  console.log(jsonData.description);

  jsonData.amount = "100";
  console.log(jsonData.amount);

  var request = new XMLHttpRequest();
  request.open("POST", "/add-expense", true);
  request.setRequestHeader("Content-Type", "application/json");
  request.onload = function () {
    response = JSON.parse(request.responseText);
    console.log(response);
    console.log(response);
  };
  request.send(JSON.stringify(jsonData));
  //console.log(JSON.stringify(jsonData));
}
