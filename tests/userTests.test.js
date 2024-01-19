const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs').promises;
const {
  register,
  login,
  viewUser,
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

      expect(res.status.calledWith(201)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
    });

    it('should return a validation error for invalid data', async () => {
      const req = {
        body: {
          email: 'invalid-email',
          password: 'short',
        },
      };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
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

      expect(res.status.calledWith(201)).to.be.true;
      expect(res.json.calledOnce).to.be.true;

      // Check if the user was actually edited
      const updatedUsers = await fs.readFile(testUsersFile, 'utf8');
      const parsedUpdatedUsers = JSON.parse(updatedUsers);
      expect(parsedUpdatedUsers[0].email).to.equal('newtest@example.com');
    });

    it('should return an error for mismatched new password and confirm password', async () => {
      const req = {
        body: {
          emailToEdit: 'test@example.com',
          newEmail: 'newtest@example.com',
          newPassword: 'newpassword',
          confirmNewPassword: 'wrongpassword',
        },
      };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

      await editUser(req, res);

      expect(res.status.calledWith(400)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
    });

    it('should return an error if user to edit is not found', async () => {
      const req = {
        body: {
          emailToEdit: 'nonexistent@example.com',
          newEmail: 'newtest@example.com',
          newPassword: 'newpassword',
          confirmNewPassword: 'newpassword',
        },
      };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

    await editUser(req, res);
  });

  // Add more test cases as needed
});

// describe("deleteUser function", () => {
//   // Assuming you have a utility function to reset the users.json file to a known state
//   // before(async () => {
//   //   await fs.writeFile(
//   //     "utils/users.json",
//   //     JSON.stringify([
//   //       { email: "test@example.com", password: "password" },
//   //       // Add other users as needed for your tests
//   //     ]),
//   //     "utf8"
//   //   );
//   // });

//   // Assuming you have a utility function to clean up after tests
//   after(async () => {
//     // Clean up, reset the users.json file, or perform any necessary actions
//   });

//   it("should delete user when valid email is provided", async () => {
//     const req = {
//       body: {
//         emailToDelete: "new@example.com",
//       },
//     };
//     const res = {
//       status: (statusCode) => ({
//         json: (data) => {
//           expect(statusCode).to.equal(200);
//           expect(data).to.deep.equal({ message: "User deleted successfully!" });
//         },
//       }),
//     };

//     await deleteUser(req, res);
//   });

//   it("should return an error when trying to delete a non-existing user", async () => {
//     const req = {
//       body: {
//         emailToDelete: "nonexistent@example.com",
//       },
//     };
//     const res = {
//       status: (statusCode) => ({
//         json: (data) => {
//           expect(statusCode).to.equal(404);
//           expect(data).to.deep.equal({
//             message: "User not found or unable to delete user!",
//           });
//         },
//       }),
//     };

//     await deleteUser(req, res);
//   });

//   // Add more test cases as needed
// });
