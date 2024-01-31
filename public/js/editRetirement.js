// Function to get the retirement_id from the URL
function getRetirementIdFromUrl() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get("retirement_id");
}

// Example usage
const retirementId = getRetirementIdFromUrl();
console.log("Retirement ID:", retirementId);
async function getSpecificRetirement(retirement_id) {
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();
    request.open("GET", "/view-retirement", true);
    request.setRequestHeader("Content-Type", "application/json");

    request.onload = function () {
      try {
        var response = JSON.parse(request.responseText);
        console.log(response);
        for (var i = 0; i < response.length; i++) {
          if (response[i].id == retirement_id) {
            console.log(response[i]);
            document.getElementById("edit_title").value = response[i].title;
            document.getElementById("edit_currentAge").value =
              response[i].current_age;
            document.getElementById("edit_retirementAge").value =
              response[i].retirement_age;
            document.getElementById("edit_fundGoals").value =
              response[i].fund_goal;

            const years_to_retirement =
              parseInt(response[i].retirement_age) -
              parseInt(response[i].current_age);
            console.log("Year to retirement: ", years_to_retirement);
            document.getElementById(
              "edit_years_to_retirement_display"
            ).textContent = years_to_retirement;

            // Calculating annual saving goal
            const annual_saving_goal =
              parseFloat(response[i].fund_goal) / parseInt(years_to_retirement);
            console.log("Annual Saving Goal: ", annual_saving_goal);
            document.getElementById(
              "edit_annual_saving_goal_display"
            ).textContent = annual_saving_goal;

            resolve(response[i]); // Resolve the promise with the found retirement object
            return;
          }
        }
        reject(new Error("Retirement not found")); // Reject the promise if retirement is not found
      } catch (error) {
        reject(error); // Reject the promise if there's an error parsing the response
      }
    };

    request.send();
  });
}

// Example of using the asynchronous function
async function exampleUsage() {
  try {
    const retirementData = await getSpecificRetirement(retirementId);
    // Do something with the retirementData
    console.log(retirementData);
  } catch (error) {
    // Handle errors
    console.error(error);
  }
}

exampleUsage();

function calculateEdit() {
  let title = document.getElementById("edit_title").value;
  let currentAge = document.getElementById("edit_currentAge").value;
  let retirementAge = document.getElementById("edit_retirementAge").value;
  let fundGoals = document.getElementById("edit_fundGoals").value;

  console.log(title);
  console.log(currentAge);
  console.log(retirementAge);
  console.log(fundGoals);

  //Calculating years to retirement
  const years_to_retirement = parseInt(retirementAge) - parseInt(currentAge);
  console.log("Year to retirement: ", years_to_retirement);
  document.getElementById("edit_years_to_retirement_display").textContent =
    years_to_retirement;

  //Calculating annual saving goal
  const annual_saving_goal =
    parseFloat(fundGoals) / parseInt(years_to_retirement);
  console.log("Annual Saving Goal: ", annual_saving_goal);
  document.getElementById("edit_annual_saving_goal_display").textContent =
    annual_saving_goal;

  var response = "";
  var jsonData = new Object();
  jsonData.title = document.getElementById("edit_title").value;
  jsonData.current_age = document.getElementById("edit_currentAge").value;
  jsonData.retirement_age = document.getElementById("edit_retirementAge").value;
  jsonData.fund_goal = document.getElementById("edit_fundGoals").value;
  jsonData.annual_saving_goal = annual_saving_goal;
  jsonData.user = sessionStorage.getItem("Useremail");

  console.log("Annual saving goal is: ", jsonData.annual_saving_goal);
  if (
    jsonData.title == "" ||
    jsonData.current_age == "" ||
    jsonData.retirement_age == "" ||
    jsonData.fund_goal == "" ||
    jsonData.annual_saving_goal == "" ||
    jsonData.user == ""
  ) {
    alert("All Fields required!");  
    return;
  }
  var request = new XMLHttpRequest();
  request.open("PUT", "/edit-retirement/" + retirementId, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.onload = function () {
    response = JSON.parse(request.responseText);
    console.log(response);
    if (response.message == undefined) {
      alert("Retirement Edited!");
    } else {
      alert("Unable to edit retirement");
    }
  };
  request.send(JSON.stringify(jsonData));
}
