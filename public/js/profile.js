async function filluser() {
  var userEmail = sessionStorage.getItem("Useremail");
  console.log(userEmail);
  // Set the value of emailToEdit input
  document.getElementById("emailToEdit").value = userEmail;
}

async function editUser() {
  const emailToEdit = document.getElementById("emailToEdit").value;
  const newEmail = document.getElementById("newEmail").value;
  const newPassword = document.getElementById("newPassword").value;
  const confirmNewPassword =
    document.getElementById("confirmNewPassword").value;

  // Validate that the new password and confirm password match
  if (newPassword !== confirmNewPassword) {
    document.getElementById("editUserMessage").innerText =
      "New password and confirm password do not match.";
    return;
  }

  var response = "";
  var jsonData = new Object();
  jsonData.emailToEdit = emailToEdit;
  jsonData.newEmail = newEmail;
  jsonData.newPassword = newPassword;
  jsonData.confirmNewPassword = confirmNewPassword;

  if (
    jsonData.emailToDelete == "" ||
    jsonData.newEmail == "" ||
    jsonData.newPassword == "" ||
    jsonData.confirmNewPassword == ""
  ) {
    alert("All Fields required!");
    return;
  }

  var request = new XMLHttpRequest();
  request.open("PUT", "/edit-user", true);
  request.setRequestHeader("Content-Type", "application/json");
  request.onload = function () {
    response = JSON.parse(request.responseText);
    console.log(response);
    if (response.message == "User information updated successfully!") {
      document.getElementById("editUserMessage").innerText = "User information updated successfully!";
    } else {
      document.getElementById("editUserMessage").innerText = "Unable to add user information";
    }
  };
  request.send(JSON.stringify(jsonData));
} 
async function deleteUser() {
  const storedEmail = sessionStorage.getItem("Useremail"); // Assuming you stored the user email in session storage

  if (!storedEmail) {
    displayErrorMessage("User email not found in session storage.");
    return;
  }

  const response = await fetch("/delete-user", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      emailToDelete: storedEmail,
    }),
  });

  const data = await response.json();
  const deleteUserMessage = document.getElementById("deleteUserMessage");

  if (response.ok) {
    deleteUserMessage.style.color = "green";
    deleteUserMessage.textContent = data.message;
  } else {
    deleteUserMessage.style.color = "red";
    deleteUserMessage.textContent = data.message;
  }

  deleteUserMessage.style.color = response.ok ? "green" : "red";
  deleteUserMessage.textContent = data.message;

  sessionStorage.clear();
  // Redirect to index.html
  window.location.href = "index.html";
}
