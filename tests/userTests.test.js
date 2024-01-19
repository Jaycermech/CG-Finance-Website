const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs').promises;
const {
  register,
  login,
  viewUser,
  editUser,
  deleteUser,
} = require('./userController'); // Adjust the path based on your project structure

describe('User Controller', () => {
  // Create a temporary file for testing purposes
  const testUsersFile = 'utils/test-users.json';

  beforeEach(async () => {
    // Create an initial test users file
    await fs.writeFile(testUsersFile, '[]', 'utf8');
  });

  afterEach(async () => {
    // Remove the temporary test users file
    await fs.unlink(testUsersFile);
  });

  describe('register', () => {
    it('should register a new user', async () => {
      const req = {
        body: {
          email: 'test@example.com',
          password: 'testpassword',
        },
      };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
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

      expect(res.status.calledWith(500)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
    });
  });

  describe('login', () => {
    it('should log in a user with valid credentials', async () => {
      // Create a test user
      const testUser = { email: 'test@example.com', password: 'testpassword' };
      await fs.writeFile(testUsersFile, JSON.stringify([testUser]), 'utf8');

      const req = {
        body: {
          email: 'test@example.com',
          password: 'testpassword',
        },
      };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

      await login(req, res);

      expect(res.status.calledWith(201)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
    });

    it('should return an error for invalid credentials', async () => {
      const req = {
        body: {
          email: 'nonexistent@example.com',
          password: 'wrongpassword',
        },
      };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

      await login(req, res);

      expect(res.status.calledWith(500)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
    });
  });

  describe('viewUser', () => {
    it('should return all users', async () => {
      // Create test users
      const testUsers = [
        { email: 'user1@example.com', password: 'password1' },
        { email: 'user2@example.com', password: 'password2' },
      ];
      await fs.writeFile(testUsersFile, JSON.stringify(testUsers), 'utf8');

      const req = {};
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

      await viewUser(req, res);

      expect(res.status.calledWith(201)).to.be.true;
      expect(res.json.calledWith(testUsers)).to.be.true;
    });
  });

  describe('editUser', () => {
    it('should edit a user with valid data', async () => {
      // Create a test user
      const testUser = { email: 'test@example.com', password: 'testpassword' };
      await fs.writeFile(testUsersFile, JSON.stringify([testUser]), 'utf8');

      const req = {
        body: {
          emailToEdit: 'test@example.com',
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

      expect(res.status.calledWith(500)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
    });
  });

  describe('deleteUser', () => {
    it('should delete a user with valid email', async () => {
      // Create test users
      const testUsers = [
        { email: 'user1@example.com', password: 'password1' },
        { email: 'user2@example.com', password: 'password2' },
      ];
      await fs.writeFile(testUsersFile, JSON.stringify(testUsers), 'utf8');

      const req = {
        body: {
          emailToDelete: 'user1@example.com',
        },
      };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

      await deleteUser(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledOnce).to.be.true;

      // Check if the user was actually deleted
      const remainingUsers = await fs.readFile(testUsersFile, 'utf8');
      const parsedRemainingUsers = JSON.parse(remainingUsers);
      expect(parsedRemainingUsers.length).to.equal(1);
    });

    it('should return an error if user to delete is not found', async () => {
      const req = {
        body: {
          emailToDelete: 'nonexistent@example.com',
        },
      };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

      await deleteUser(req, res);

      expect(res.status.calledWith(404)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
    });
  });
});
