const { describe, it } = require("mocha");
const { expect } = require("chai");
const fs = require("fs").promises;
const {
  addBudget,
  viewBudget,
  editBudget,
  deleteBudget,
} = require("../utils/monthly-budgetUtils");
describe("Testing budget related features", () => {
  const budgetFilePath = "utils/monthly-budget.json";
  var orgContent = "";
  var addedBudgetId = null;

  beforeEach(async () => {
    orgContent = await fs.readFile(budgetFilePath, "utf8");
    orgContent = JSON.parse(orgContent);
  });

  afterEach(async () => {
    await fs.writeFile(budgetFilePath, JSON.stringify(orgContent), "utf8");
  });
  it("Should add a new monthly budget successfully", async () => {
    const req = {
      body: {
        ammenities: "Others",
        budget: "200",
        owner: "Jordy312@gmail.com"
      },
    };
    const res = {
      status: function (code) {
        expect(code).to.equal(201);
        return this;
      },
      json: function (data) {
        expect(data).to.have.lengthOf(orgContent.length + 1);
        expect(data[orgContent.length].ammenities).to.equal(req.body.ammenities);
        addedBudgetId = data[orgContent.length].id; // Store the added ID
        orgContent = data;
        console.log(addedBudgetId, "ids");
      },

    };


    // // If the file is initially empty, set orgContent to an empty array
    // if (!orgContent || !Array.isArray(orgContent)) {
    //   orgContent = [];
    // }

    try {
      await addBudget(req, res);
    } catch (error) {
      console.error(error);
      expect.fail("Unexpected error occurred");
    }
  });
  it("Should not be able to add budget due to incomplete input", async () => {
    const req = {
      body: {
        ammenities: "Others",
        budget: "$100",
      },
    };
    const res = {
      status: function (code) {
        expect(code).to.equal(500);
        return this;
      },
      json: function (data) {
        expect(data.message).to.not.equal(undefined);
      },
    };
    try {
      await addBudget(req, res);
    } catch (error) {
      console.error(error);
      expect.fail("Unexpected error occurred");
    }
  });

  it("Should return an array when viewing monthly budget", async () => {
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
    try {
      await viewBudget(req, res);
    } catch (error) {
      console.error(error);
      expect.fail("Unexpected error occurred");
    }
  });
  it("Should edit a monthly budget successfully", async () => {
    console.log(addedBudgetId, "ids ");
    const req = {
      body: {
        "ammenities": "Others",
        "budget": "80",
        "owner": "Jordy312@gmail.com"
      },
      params: {
        id: addedBudgetId,
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

    try {
      await editBudget(req, res);
    } catch (error) {
      console.error(error);
      expect.fail("Unexpected error occurred");
    }
  });

  it("Should not be able to edit budget due to invalid id", async () => {
    const req = {
      body: {
        ammenities: "Others",
        budget: "100",
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
    try {
      await editBudget(req, res);
    } catch (error) {
      console.error(error);
      expect.fail("Unexpected error occurred");
    }
  });

  it("Should delete a budget successfully", async () => {
    console.log("Deleting Budget with ID:", addedBudgetId);
  
    const req = {
      params: {
        id: addedBudgetId,
      },
    };
  
    const res = {
      status: function (code) {
        console.log("Received status code:", code);
        expect(code).to.equal(201);
        return this;
      },
      end: function () {
        // This function will be called if .end() is chained
      },
      json: function (data) {
        orgContent = data;
        console.log("Deleted Budget Data:", data);
      },
    };
  
    try {
      await deleteBudget(req, res);
      console.log("Budget Deleted Successfully");
  
      // Check if the deleted budget is no longer present in the updated orgContent
      const isBudgetDeleted = orgContent.some((budget) => budget.id === addedBudgetId);
      expect(isBudgetDeleted).to.be.false;
    } catch (error) {
      console.error("Error during deletion:", error);
      expect.fail("Unexpected error occurred");
    }
  });
  

  it("Should not be able to delete budget due to invalid id", async () => {
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
    try {
      await deleteBudget(req, res);
    } catch (error) {
      console.error(error);
      expect.fail("Unexpected error occurred");
    }
  });
});
