const { describe, it } = require("mocha");
const { expect } = require("chai");
const { should } = require("chai").should();
const assert = require("assert");
const fs = require("fs").promises;
const { Retirement } = require("../models/retirement");
const {
  add_retirement,
  view_retirement,
  edit_retirement,
  delete_retirement,
} = require("../utils/RetirementUtil");
const retirementFilePath = "utils/retirements.json";
var orgContent = "";
describe("Add retirement", () => {
  beforeEach(async () => {
    orgContent = await fs.readFile("utils/retirements.json", "utf8");
    orgContent = JSON.parse(orgContent);
  });
  afterEach(async () => {
    await fs.writeFile(
      "utils/retirements.json",
      JSON.stringify(orgContent),
      "utf8"
    );
  });

  it("Should add a new retirement successfully", async () => {
    const req = {
      body: {
        title: "Plan 3",
        current_age: 40,
        retirement_age: 70,
        fund_goal: 400000,
        annual_saving_goal: 3000,
        user: "jovan",
      },
    };
    const res = {
      status: function (code) {
        expect(code).to.equal(201);
        return this;
      },
      json: function (data) {
        expect(data).to.have.lengthOf(orgContent.length + 1);
        expect(data[orgContent.length].user).to.equal(req.body.user);
        orgContent = data;
      },
    };
    await add_retirement(req, res);
  });

  it("Should not be able to add a new retirement due to incorrect input", async () => {
    const req = {
      body: {
        title: 5,
        current_age: 40,
        retirement_age: 70,
        fund_goal: "hello",
        annual_saving_goal: 3000,
        user: "jovan",
      },
    };
    const res = {
      status: function (code) {
        expect(code).to.equal(500);
        return this;
      },
      json: function (data) {
        data.should.have.property("message");
        data.message.should.include("Invalid input types");
      },
    };

    await add_retirement(req, res);
  });
});

describe("View retirements: ", () => {
  beforeEach(async () => {
    orgContent = await fs.readFile("utils/retirements.json", "utf8");
    orgContent = JSON.parse(orgContent);
  });
  afterEach(async () => {
    await fs.writeFile(
      "utils/retirements.json",
      JSON.stringify(orgContent),
      "utf8"
    );
  });
  it("Should return an array when viewing retirements", async () => {
    const req = {};
    const res = {
      status: function (code) {
        expect(code).to.equal(201);
        return this;
      },
      json: function (data) {
        expect(Array.isArray(data)).to.be.true;
      },
    };
    await view_retirement(req, res);
  });
});

describe("Edit retirement: ", () => {
  beforeEach(async () => {
    orgContent = await fs.readFile("utils/retirements.json", "utf8");
    orgContent = JSON.parse(orgContent);
  });
  afterEach(async () => {
    await fs.writeFile(
      "utils/retirements.json",
      JSON.stringify(orgContent),
      "utf8"
    );
  });
  it("Should edit a retirement successfully using assert", async () => {
    const updatedTitle = "Updated Plan";
    const updatedCurrentAge = 50;
    const updatedRetirementAge = 75;
    const updatedFundGoal = 100000;
    const updatedannual_saving_goal = 3000;
    const updatedUser = "john_doe";

    const req = {
      body: {
        title: updatedTitle,
        current_age: updatedCurrentAge,
        retirement_age: updatedRetirementAge,
        fund_goal: updatedFundGoal,
        annual_saving_goal: updatedannual_saving_goal,
        user: updatedUser,
      },
      params: {
        id: orgContent[0].id, // Using a valid ID for editing
      },
    };
    const res = {
      status: function (code) {
        assert.equal(code, 201); // Using assert for equality check
        return this;
      },
      json: function (data) {
        // Asserting the updated values to be checked that they are actually updated now
        assert.equal(data[0].title, updatedTitle);
        assert.equal(data[0].current_age, updatedCurrentAge);
        assert.equal(data[0].retirement_age, updatedRetirementAge);
        assert.equal(data[0].fund_goal, updatedFundGoal);
        assert.equal(data[0].annual_saving_goal, updatedannual_saving_goal);
        assert.equal(data[0].user, updatedUser);

        orgContent = data;
      },
    };

    await edit_retirement(req, res);
  });
  it("Should not be able to edit retirement due to invalid id", async () => {
    const req = {
      body: {
        title: "Updated Plan", // Updated title
        current_age: 50, // Updated current_age
        retirement_age: 75, // Updated retirement_age
        fund_goal: 100000, // Updated fund_goal
        annual_saving_goal: 3000, // Updated annual_saving_goal
        user: "john_doe", // Updated user
      },
      params: {
        id: "invalid_id", // Invalid ID
      },
    };
    const res = {
      status: function (code) {
        expect(code).to.equal(500); // Expecting a 500 status code for internal server error
        return this;
      },
      json: function (data) {
        data.should.have.property("message");
        data.message.should.include("Invalid ID");
      },
    };
    await edit_retirement(req, res);
  });
});

describe("Delete retirement", () => {
  beforeEach(async () => {
    orgContent = await fs.readFile("utils/retirements.json", "utf8");
    orgContent = JSON.parse(orgContent);
  });
  afterEach(async () => {
    await fs.writeFile(
      "utils/retirements.json",
      JSON.stringify(orgContent),
      "utf8"
    );
  });
  it("Should delete a retirement successfully", async () => {
    const req = {
      params: {
        id: orgContent[0].id,
      },
      body: {
        user: orgContent[0].user,
      },
    };
    const res = {
      status: function (code) {
        expect(code).to.equal(200);
        return this;
      },
      json: function (data) {
        orgContent = data;
      },
    };
    await delete_retirement(req, res);
  });

  // Update this test case
  it("Should not be able to delete a retirement due to an invalid ID", async () => {
    const req = {
      params: {
        id: "invalid_id",
      },
      body: {
        user: "test_user",
      },
    };
    const res = {
      status: function (code) {
        expect(code).to.equal(404); // Expecting a 404 status code for not found
        return this;
      },
      json: function (data) {
        data.should.have.property("message");
        data.message.should.include("Invalid ID");
      },
    };
    await delete_retirement(req, res);
  });

  // Update this test case
  it("Should not be able to delete a retirement due to a different user", async () => {
    const req = {
      params: {
        id: orgContent[0].id,
      },
      body: {
        user: "different_user",
      },
    };
    const res = {
      status: function (code) {
        expect(code).to.equal(500);
        return this;
      },
      json: function (data) {
        data.should.have.property("message");
        data.message.should.include(
          "Cannot delete retirement of a different user"
        );
      },
    };
    await delete_retirement(req, res);
  });
});
