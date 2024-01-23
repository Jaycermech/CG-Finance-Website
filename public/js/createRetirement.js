function calculate() {
    let title = document.getElementById("create_title").value;
    let currentAge = document.getElementById("create_currentAge").value;
    let retirementAge = document.getElementById("create_retirementAge").value;
    let fundGoals = document.getElementById("create_fundGoals").value;

    if (currentAge < 0 || retirementAge < 0 || fundGoals < 0) {
      alert("No negative numbers allowed in fields!");
      return;
    }

    console.log(title);
    console.log(currentAge);
    console.log(retirementAge);
    console.log(fundGoals);

    //Calculating years to retirement
    const years_to_retirement =
      parseInt(retirementAge) - parseInt(currentAge);
    console.log("Year to retirement: ", years_to_retirement);
    document.getElementById("years_to_retirement_display").textContent =
      years_to_retirement;

    //Calculating annual saving goal
    const annual_saving_goal =
      parseFloat(fundGoals) / parseInt(years_to_retirement);
    console.log("Annual Saving Goal: ", annual_saving_goal);
    document.getElementById("annual_saving_goal_display").textContent =
      annual_saving_goal;

    var response = "";
    var jsonData = new Object();
    jsonData.title = document.getElementById("create_title").value;
    jsonData.current_age = document.getElementById("create_currentAge").value;
    jsonData.retirement_age = document.getElementById(
      "create_retirementAge"
    ).value;
    jsonData.fund_goal = document.getElementById("create_fundGoals").value;
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
    request.open("POST", "/add-retirement", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
      response = JSON.parse(request.responseText);
      console.log(response);
      if (response.message == undefined) {
        alert("Retirement Added!");
      } else {
        alert("Unable to add retirement");
      }
    };
    request.send(JSON.stringify(jsonData));
  }