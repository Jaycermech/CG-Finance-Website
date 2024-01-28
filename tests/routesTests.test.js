const { describe, it } = require("mocha");
const { expect } = require("chai");
const { app, server } = require("../index");
const fs = require("fs").promises;
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
describe("Testing API Routes", () => {
  const retirementFilePath = "utils/retirements.json";
  var orgContent = "";
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

  it("Should add a new retirement successfully", (done) => {
    chai
      .request(app)
      .post("/add-retirement")
      .send({
        title: "Plan 3",
        current_age: 40,
        retirement_age: 70,
        fund_goal: 400000,
        annual_saving_goal: 3000,
        user: "jovan",
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(201);
        done();
        server.close();
      });
  });

});
