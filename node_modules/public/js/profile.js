async function editUser() {
  try {
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

    const response = await fetch("/edit-user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailToEdit,
        newEmail,
        newPassword,
        confirmNewPassword,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      document.getElementById("editUserMessage").innerText = data.message;
    } else {
      document.getElementById("editUserMessage").innerText = data.message;
    }
  } catch (error) {
    console.error(error);
    document.getElementById("editUserMessage").innerText =
      "An error occurred while processing your request.";
  }
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

async function filluser() {
  var userEmail = sessionStorage.getItem("Useremail");
  // Set the value of emailToEdit input
  document.getElementById("emailToEdit").value = userEmail;
}
