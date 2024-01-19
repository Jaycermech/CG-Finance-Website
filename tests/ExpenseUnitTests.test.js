const { describe, it } = require("mocha");
const { expect } = require("chai");
const fs = require("fs").promises;
const {
  addExpense,
  viewExpenses,
  editExpense,
  deleteExpense,
} = require("../utils/ExpenseUtil");

describe("Testing addResource Function", () => {
  const resourcesFilePath = "utils/expenses.json";
  var orgContent = "";

  beforeEach(async () => {
    orgContent = await fs.readFile(resourcesFilePath, "utf8");
    orgContent = JSON.parse(orgContent);
  });

  afterEach(async () => {
    if (orgContent != "")
      await fs.writeFile(resourcesFilePath, JSON.stringify(orgContent), "utf8");
  });

  it("Should add a new expense successfully", async () => {
    const req = {
      body: {
        description: "Others",
        amount: "3500",
        user: "kovan"
      },
    };
    const res = {
      status: function (code) {
        console.log("Status code:", code); // Debugging statement
        expect(code).to.equal(201);
        return this;
      },
      json: function (data) {
        console.log("Response data:", data); // Debugging statement
        expect(data).to.have.lengthOf(orgContent.length + 1);
        console.log(orgContent);
        expect(data[orgContent.length].description).to.equal(
          req.body.description
        );
        orgContent = data;
      },
    };
    console.log("Adding expense..."); // Debugging statement
    await addExpense(req, res);
    console.log("Expense added successfully!"); // Debugging statement
  });

  it("Should edit a Expense successfully", async () => {
    const req = {
      body: {
        description: "Groceries",
        amount: "142609",
      },
      params: {
        id: orgContent[0].id,
      },
    };

    const res = {
      status: function (code) {
        expect(code).to.equal(201);
        return this;
      },
      json: function (data) {
        orgContent = data;
      },
    };

    await editExpense(req, res);
  });

  it("Should return an array when viewing expense", async () => {
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
    await viewExpenses(req, res);
  });

  it("Should not be able to edit expense due to invalid id", async () => {
    const req = {
      body: {
        description: "Groceries",
        amount: "100",
        user: "kovan",
      },
      params: {
        id: "ABCDEFG",
      },
    };
    const res = {
      status: function (code) {
        expect(code).to.equal(500);
        return this;
      },
      json: function (data) {
        expect(data.message).to.equal("Error occurred, unable to modify!");
      },
    };
    await editExpense(req, res);
  });

  it("Should delete a expense successfully", async () => {
    const req = {
      params: {
        id: orgContent[0].id,
      },
    };
    const res = {
      status: function (code) {
        expect(code).to.equal(201);
        return this;
      },
      json: function (data) {
        orgContent = data;
      },
    };
    await deleteExpense(req, res);
  });

  it("Should not be able to delete expense due to invalid id", async () => {
    const req = {
      params: {
        id: "ABCDEFG",
      },
    };
    const res = {
      status: function (code) {
        expect(code).to.equal(500);
        return this;
      },
      json: function (data) {
        expect(data.message).to.equal("Error occurred, unable to delete!");
      },
    };
    await deleteExpense(req, res);
  });
});
