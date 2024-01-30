async function submitForm() {
  const email = document.getElementById("emailRegister").value;
  const password = document.getElementById("passwordRegister").value;

  // Check if email contains "@" symbol
  if (!email.includes("@")) {
    alert('Invalid email format! Please include "@" in your email.');
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters!");
    return;
  }

  var response = "";
  var jsonData = new Object();
  jsonData.email = email;
  jsonData.password = password;

  if (jsonData.email == "" || jsonData.password == "") {
    alert("All Fields required!");
    return;
  }

  var request = new XMLHttpRequest();
  request.open("POST", "/register", true);
  request.setRequestHeader("Content-Type", "application/json");
  request.onload = function () {
    response = JSON.parse(request.responseText);
    console.log(response);
    if (response.message == undefined) {
      alert("Registration successful!");
      window.location.href = "index.html";
    } else {
      alert("Unable to add retirement");
    }
  };
  request.send(JSON.stringify(jsonData));
}
