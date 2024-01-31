const { describe, it } = require("mocha");
const { expect } = require("chai");
const { app, server } = require("../index");
const fs = require("fs").promises;
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

describe("Monthly Budget API Routes (No User Authentication)", () => {
  const budgetFilePath = "utils/monthly-budget.json"; // Replace with the actual path to your budget file
  var orgbudget = "";
  var addedBudgetId = null;

  // beforeEach(async () => {
  //   orgbudget = await fs.readFile(budgetFilePath, "utf8");
  //   orgbudget = JSON.parse(orgbudget);
  // });

  // afterEach(async () => {
  //   await fs.writeFile(budgetFilePath, JSON.stringify(orgbudget), "utf8");
  //   console.log("this ", addedBudgetId);
  // });

  // it("Should add a new monthly budget successfully", (done) => {
  //   chai
  //     .request(app)
  //     .post("/add-budget")
  //     .send({
  //       ammenities: "Others",
  //       budget: "200",
  //       owner: "Jordy312@gmail.com",
  //     })
  //     .end((err, res) => {
  //       expect(err).to.be.null;
  //       expect(res).to.have.status(201);
  //       expect(res.body).to.have.lengthOf(orgbudget.length + 1);
  //       addedBudgetId = orgbudget[0].id;
  //       done();
  //       server.close();
  //     });
  // });

  // it("Should return an array when viewing monthly budget", (done) => {
  //   chai
  //     .request(app)
  //     .get("/view-budget")
  //     .end((err, res) => {
  //       expect(err).to.be.null;
  //       expect(res).to.have.status(201);
  //       done();
  //       server.close();
  //     });
  // });

  // it("Should edit a monthly budget successfully", (done) => {
  //   chai
  //     .request(app)
  //     .put("/edit-budget/" + addedBudgetId) // Provide a valid ID
  //     .send({ ammenities: "Others", budget: "80", owner: "Jordy312@gmail.com" })
  //     .end((err, res) => {
  //       expect(err).to.be.null;
  //       expect(res).to.have.status(201);
  //       done();
  //       server.close();
  //     });
  // });

  // it("Should delete a budget successfully", (done) => {
  //   chai
  //     .request(app)
  //     .delete("/delete-budget/" + addedBudgetId) // Provide a valid ID
  //     .end((err, res) => {
  //       expect(err).to.be.null;
  //       expect(res).to.have.status(201);
  //       done();
  //       server.close();
  //     });
  // });

  // Additional test cases...
});
