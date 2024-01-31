// const { describe, it } = require("mocha");
// const { expect } = require("chai");
// const { app, server } = require("../index");
// const fs = require("fs").promises;
// const chai = require("chai");
// const chaiHttp = require("chai-http");
// chai.use(chaiHttp);
// describe("Testing API Routes", () => {
//   const retirementFilePath = "utils/retirements.json";
//   var orgRetirements = "";
//   beforeEach(async () => {
//     orgRetirements = await fs.readFile(retirementFilePath, "utf8");
//     orgRetirements = JSON.parse(orgRetirements);
//   });
//   afterEach(async () => {
//     await fs.writeFile(
//       retirementFilePath,
//       JSON.stringify(orgRetirements),
//       "utf8"
//     );
//   });

//   it("Should add a new retirement successfully", (done) => {
//     chai
//       .request(app)
//       .post("/add-retirement")
//       .send({
//         title: "Plan 3",
//         current_age: 40,
//         retirement_age: 70,
//         fund_goal: 400000,
//         annual_saving_goal: 3000,
//         user: "kovantang@gmail.com",
//       })
//       .end((err, res) => {
//         expect(err).to.be.null;
//         expect(res).to.have.status(201);
//         done();
//         server.close();
//       });
//   });

//   it("Should retrieve retirements successfully", (done) => {
//     chai
//       .request(app)
//       .get("/view-retirement")
//       .send()
//       .end((err, res) => {
//         expect(err).to.be.null;
//         expect(res).to.have.status(201);
//         done();
//         server.close();
//       });
//   });
//   it("Should edit retirement successfully", (done) => {
//     chai
//       .request(app)
//       .put("/edit-retirement/" + orgRetirements[0].id)
//       .send({
//         title: "Plan 3",
//         current_age: 10,
//         retirement_age: 60,
//         fund_goal: 5336000,
//         annual_saving_goal: 9000,
//         user: "kovantang@gmail.com",
//       })
//       .end((err, res) => {
//         expect(err).to.be.null;
//         expect(res).to.have.status(201);
//         done();
//         server.close();
//       });
//   });
//   it("Should delete retirement successfully", (done) => {
//     chai
//       .request(app)
//       .delete("/delete-retirement/" + orgRetirements[0].id)
//       .send({ user: orgRetirements[0].user })
//       .end((err, res) => {
//         expect(err).to.be.null;
//         expect(res).to.have.status(200);
//         done();
//         server.close();
//       });
//   });
// });
