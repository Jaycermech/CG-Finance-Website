const { User } = require("../models/User");
const fs = require("fs").promises;
async function readJSON(filename) {
  try {
    const data = await fs.readFile(filename, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    throw err;
  }
}
async function writeJSON(object, filename) {
  try {
    const allObjects = await readJSON(filename);
    allObjects.push(object);
    await fs.writeFile(filename, JSON.stringify(allObjects), "utf8");
    return allObjects;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
async function register(req, res) {
  try {
    const email = req.body.email;
    const password = req.body.password;
    if (!email.includes("@") || !email.includes(".") || password.length < 6) {
      return res.status(500).json({ message: "Validation error" });
    } else {
      const newUser = new User(email, password);
      const updatedUsers = await writeJSON(newUser, "utils/users.json");
      return res.status(201).json(updatedUsers);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
async function login(req, res) {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const allUsers = await readJSON("utils/users.json");
    var validCredentials = false;
    for (var i = 0; i < allUsers.length; i++) {
      var currUser = allUsers[i];
      if (currUser.email == email && currUser.password == password)
        validCredentials = true;
    }
    if (validCredentials) {
      return res.status(201).json({ message: "Login successful!" });
    } else {
      return res.status(500).json({ message: "Invalid credentials!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
async function viewUser(req, res) {
  try {
    const allUsers = await readJSON("utils/users.json");
    return res.status(201).json(allUsers);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function editUser(req, res) {
  try {
    const emailToEdit = req.body.emailToEdit; // Assuming you provide the current email for identification
    const newEmail = req.body.newEmail;
    const newPassword = req.body.newPassword;
    const confirmNewPassword = req.body.confirmNewPassword;

    // Validate that the new password and confirm password match
    if (newPassword !== confirmNewPassword) {
      return res.status(400).json({ message: "New password and confirm password do not match." });
    }

    const allUsers = await readJSON("utils/users.json");
    var modified = false;

    for (var i = 0; i < allUsers.length; i++) {
      var currentUser = allUsers[i];

      // Identify the user based on the current email
      if (currentUser.email === emailToEdit) {
        // Update email and/or password if provided
        if (newEmail) {
          currentUser.email = newEmail;
        }
        if (newPassword) {
          currentUser.password = newPassword;
        }

        modified = true;
        break; // Assuming each email is unique
      }
    }

    if (modified) {
      await fs.writeFile(
        "utils/users.json",
        JSON.stringify(allUsers),
        "utf8"
      );
      return res.status(201).json({ message: "User information updated successfully!" });
    } else {
      return res.status(500).json({ message: "Error occurred, unable to update user information!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
async function deleteUser(req, res) {
  try {
    const emailToDelete = req.body.emailToDelete; // Assuming you provide the email of the user to delete

    const allUsers = await readJSON("utils/users.json");
    const updatedUsers = allUsers.filter(user => user.email !== emailToDelete);

    if (updatedUsers.length < allUsers.length) {
      await fs.writeFile(
        "utils/users.json",
        JSON.stringify(updatedUsers),
        "utf8"
      );
      return res.status(200).json({ message: "User deleted successfully!" });
    } else {
      return res.status(404).json({ message: "User not found or unable to delete user!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


module.exports = {
  register,
  login,
  viewUser,
  editUser,
  deleteUser
};
