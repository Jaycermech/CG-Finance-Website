const { describe, it } = require("mocha");
const { expect, should } = require("chai");
const fs = require("fs").promises;
const {
  register,
  login,
  editUser,
  deleteUser,
  viewUser,
} = require("../utils/UserUtil");

should(); // Enable should syntax
var orgContent = "";

describe("register function", () => {
  // Assuming you have a utility function to reset the users.json file to a known state
  beforeEach(async () => {
    orgContent = await fs.readFile("utils/users.json", "utf8");
    orgContent = JSON.parse(orgContent);
  });
  afterEach(async () => {
    await fs.writeFile("utils/users.json", JSON.stringify(orgContent), "utf8");
  });

  it("should register a new user when valid data is provided", async () => {
    const req = {
      body: {
        email: "test@example.com",
        password: "newPassword",
      },
    };
    const res = {
      status: (statusCode) => ({
        json: (data) => {
          expect(statusCode).to.equal(201);

          expect(data).to.have.lengthOf(orgContent.length + 1);
          expect(data[orgContent.length].email).to.equal(req.body.email);
          orgContent = data;
          // Add more assertions based on the expected structure of your data
        },
      }),
    };

    await register(req, res);
  });

  it("should return a validation error when invalid data is provided", async () => {
    const req = {
      body: {
        email: "invalidemail",
        password: "short",
      },
    };
    const res = {
      status: (statusCode) => ({
        json: (data) => {
          expect(statusCode).to.equal(500);
          expect(data).to.deep.equal({ message: "Validation error" });

          // Using should syntax
          data.should.deep.equal({ message: "Validation error" });
        },
      }),
    };

    await register(req, res);
  });
});
describe("login function", () => {
  // Assuming you have a utility function to reset the users.json file to a known state
  // before(async () => {
  //   await fs.writeFile(
  //     "utils/users.json",
  //     JSON.stringify([
  //       { email: "test@example.com", password: "password" },
  //       // Add other users as needed for your tests
  //     ]),
  //     "utf8"
  //   );
  // });

  // Assuming you have a utility function to clean up after tests
  after(async () => {
    // Clean up, reset the users.json file, or perform any necessary actions
  });

  it('should return "Login successful!" when valid credentials are provided', async () => {
    const req = {
      body: {
        email: "test@example.com",
        password: "newPassword",
      },
    };
    const res = {
      status: (statusCode) => ({
        json: (data) => {
          statusCode.should.equal(201);
          data.should.have.property("message");
          data.message.should.include("Login successful!");
        },
      }),
    };

    await login(req, res);
  });

  it('should return "Invalid credentials!" when invalid credentials are provided', async () => {
    const req = {
      body: {
        email: "test@example.com",
        password: "wrongPassword",
      },
    };
    const res = {
      status: (statusCode) => ({
        json: (data) => {
          statusCode.should.equal(500);
          data.should.deep.equal({ message: "Invalid credentials!" });
        },
      }),
    };

    await login(req, res);
  });

  // Add more test cases as needed
});

describe("viewUser function", () => {
  // Assuming you have a utility function to reset the users.json file to a known state
  // before(async () => {
  //   await fs.writeFile(
  //     "utils/users.json",
  //     JSON.stringify([
  //       { email: "test@example.com", password: "password" },
  //       // Add other users as needed for your tests
  //     ]),
  //     "utf8"
  //   );
  // });

  // Assuming you have a utility function to clean up after tests
  after(async () => {
    // Clean up, reset the users.json file, or perform any necessary actions
  });

  it("should return all users when called", async () => {
    const req = {};
    const res = {
      status: (statusCode) => ({
        json: (data) => {
          expect(statusCode).to.equal(201);
          // Assuming you want to check the structure of the returned data
          expect(data).to.be.an("array");
        },
      }),
    };

    await viewUser(req, res);
  });

  // Add more test cases as needed
});

describe("editUser function", () => {
  // Assuming you have a utility function to reset the users.json file to a known state
  // before(async () => {
  //   await fs.writeFile(
  //     "utils/users.json",
  //     JSON.stringify([
  //       { email: "test@example.com", password: "oldPassword" },
  //       // Add other users as needed for your tests
  //     ]),
  //     "utf8"
  //   );
  // });

  // Assuming you have a utility function to clean up after tests
  after(async () => {
    // Clean up, reset the users.json file, or perform any necessary actions
  });

  it("should update user information when valid data is provided", async () => {
    const req = {
      body: {
        emailToEdit: "test@example.com",
        newEmail: "new@example.com",
        newPassword: "newPassword",
        confirmNewPassword: "newPassword",
      },
    };
    const res = {
      status: (statusCode) => ({
        json: (data) => {
          expect(statusCode).to.equal(201);
          expect(data).to.deep.equal({
            message: "User information updated successfully!",
          });
        },
      }),
    };

    await editUser(req, res);
  });

  it("should return an error when new password and confirm password do not match", async () => {
    const req = {
      body: {
        emailToEdit: "test@example.com",
        newPassword: "newPassword",
        confirmNewPassword: "wrongPassword",
      },
    };
    const res = {
      status: (statusCode) => ({
        json: (data) => {
          expect(statusCode).to.equal(400);
          expect(data).to.deep.equal({
            message: "New password and confirm password do not match.",
          });
        },
      }),
    };

    await editUser(req, res);
  });

  it("should return an error when trying to edit a non-existing user", async () => {
    const req = {
      body: {
        emailToEdit: "nonexistent@example.com",
        newEmail: "new@example.com",
        newPassword: "newPassword",
        confirmNewPassword: "newPassword",
      },
    };
    const res = {
      status: (statusCode) => ({
        json: (data) => {
          expect(statusCode).to.equal(500);
          expect(data).to.deep.equal({
            message: "Error occurred, unable to update user information!",
          });
        },
      }),
    };

    await editUser(req, res);
  });

  // Add more test cases as needed
});

describe("deleteUser function", () => {
  // Assuming you have a utility function to reset the users.json file to a known state
  // before(async () => {
  //   await fs.writeFile(
  //     "utils/users.json",
  //     JSON.stringify([
  //       { email: "test@example.com", password: "password" },
  //       // Add other users as needed for your tests
  //     ]),
  //     "utf8"
  //   );
  // });

  // Assuming you have a utility function to clean up after tests
  after(async () => {
    // Clean up, reset the users.json file, or perform any necessary actions
  });

  it("should delete user when valid email is provided", async () => {
    const req = {
      body: {
        emailToDelete: "new@example.com",
      },
    };
    const res = {
      status: (statusCode) => ({
        json: (data) => {
          expect(statusCode).to.equal(200);
          expect(data).to.deep.equal({ message: "User deleted successfully!" });
        },
      }),
    };

    await deleteUser(req, res);
  });

  it("should return an error when trying to delete a non-existing user", async () => {
    const req = {
      body: {
        emailToDelete: "nonexistent@example.com",
      },
    };
    const res = {
      status: (statusCode) => ({
        json: (data) => {
          expect(statusCode).to.equal(404);
          expect(data).to.deep.equal({
            message: "User not found or unable to delete user!",
          });
        },
      }),
    };

    await deleteUser(req, res);
  });

  // Add more test cases as needed
});