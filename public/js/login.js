async function login() {
  const email = document.getElementById("emailLogin").value;
  const password = document.getElementById("passwordLogin").value;

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
  request.open("POST", "/login", true);
  request.setRequestHeader("Content-Type", "application/json");
  request.onload = function () {
    response = JSON.parse(request.responseText);
    console.log(response.message);
    if (response.message == "Login successful!") {
      alert("Login successful!");
      sessionStorage.setItem("Useremail", email);
      // Handle successful login, redirect to home page
      window.location.href = "home.html";
    } else {
      alert("Unable to login");
    }
  };
  request.send(JSON.stringify(jsonData));
}
