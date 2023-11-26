const { describe, it } = require("mocha");
const { expect } = require("chai");
const fs = require("fs").promises;
const {
  addBudget,
  viewBudget,
  editBudget,
  deleteBudget,
} = require("../utils/monthly-budgetUtils");
describe("Testing budge related features", () => {
  const budgetFilePath = "utils/monthly-budget.json";
  var orgContent = "";
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
        budget: "$1000",
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
        orgContent = data;
      },
    };
    await addBudget(req, res);
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
    await addBudget(req, res);
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
    await viewBudget(req, res);
  });
  it("Should edit a monthly budget successfully", async () => {
    const req = {
      body: {
        "ammenities": "Others",
        "budget": "$80",
        "owner": "mary@gmail.com"
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
  
    await editBudget
      (req, res);
  });
  it("Should not be able to edit budget due to invalid id", async () => {
    const req = {
      body: {
        ammenities: "Others",
        budget: "$100",
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
    await editBudget
      (req, res);
  });
  it("Should delete a budget successfully", async () => {
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
    await deleteBudget
      (req, res);
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
    await deleteBudget
      (req, res);
  });
});
