async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Check if email contains "@" symbol
  if (!email.includes("@")) {
    alert('Invalid email format! Please include "@" in your email.');
    return;
  }

  try {
    const response = await fetch("http://localhost:5050/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Login successful!");
      sessionStorage.setItem("Useremail", email);
      // Handle successful login, e.g., redirect to home page
      window.location.href = "home.html";
    } else {
      alert(`Error: ${data.message}`);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}
