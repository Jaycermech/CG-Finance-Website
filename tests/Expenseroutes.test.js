const { describe, it } = require("mocha");
const { expect } = require("chai");
const { app, server } = require("../index");
const fs = require("fs").promises;
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
describe("Expense Testing API Routes", () => {
  const usersFilePath = "utils/expenses.json";
  var orgContent = "";
  const resourcesFilePath = "utils/expenses.json";
  var orgResources = "";
  beforeEach(async () => {
    orgContent = await fs.readFile(usersFilePath, "utf8");
    orgContent = JSON.parse(orgContent);

    orgResources = await fs.readFile(resourcesFilePath, "utf8");
    orgResources = JSON.parse(orgResources);
  });
  afterEach(async () => {
    await fs.writeFile(usersFilePath, JSON.stringify(orgContent), "utf8");
    await fs.writeFile(resourcesFilePath, JSON.stringify(orgResources), "utf8");
  });

  it("Should add an expense with value of 30", (done) => {
    chai
      .request(app)
      .post("/add-expense")
      .send({
        description: "Electronic",
        amount: "30",
        user: "testing@gmail.com",
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(201);
        done();
        server.close();
      });
  });

  it("Should retreive expenses from expenses.json", (done) => {
    chai
      .request(app)
      .get("/view-expneses")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(201);
        done();
        server.close();
      });
  });

  it("Should edit expense successfully", (done) => {
    chai
      .request(app)
      .put("/edit-expense/" + orgResources[0].id)
      .send({
        description: "Others",
        amount: "40",
        user: "testing4321@gmail.com",
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(201);
        done();
        server.close();
      });
  });

  it("Should delete expense successfully", (done) => {
    chai
      .request(app)
      .delete("/delete-expense/" + orgResources[0].id)
      .send()
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(201);

        done();
        server.close();
      });
  });
});
