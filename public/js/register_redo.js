async function submitForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Check if email contains "@" symbol
    if (!email.includes("@")) {
      alert('Invalid email format! Please include "@" in your email.');
      return;
    }
  
    if (password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5050/register", {
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
        alert("Registration successful!");
        // Redirect to index.html upon successful registration
        window.location.href = "index.html";
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  }