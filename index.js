var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const logger = require("./logger");

const PORT = process.env.PORT || 5050;
var startPage = "index.html";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./public"));

const statusMonitor = require("express-status-monitor");
app.use(statusMonitor());

//add retirement
const { add_retirement } = require("./utils/RetirementUtil");
app.post("/add-retirement", add_retirement);

//retrieve retirement
const { view_retirement } = require("./utils/RetirementUtil");
app.get("/view-retirement", view_retirement);

//update retirement
const { edit_retirement } = require("./utils/RetirementUtil");
app.put("/edit-retirement/:id", edit_retirement);

//delete retirement
const { delete_retirement } = require("./utils/RetirementUtil");
app.delete("/delete-retirement/:id", delete_retirement);

// Monthly-budget
const {
  addBudget,
  viewBudget,
  editBudget,
  deleteBudget,
  viewBudgetid,
  viewBudgetByOwner,
} = require("./utils/monthly-budgetUtils");
app.post("/add-budget", addBudget);
app.get("/view-budget", viewBudget);
app.get("/get-budget-by-owner/:owner", viewBudgetByOwner);
app.get("/view-budget/:id", viewBudgetid);
app.put("/edit-budget/:id", editBudget);
app.delete("/delete-budget/:id", deleteBudget);

// User-Auth
const {
  register,
  login,
  viewUser,
  editUser,
  deleteUser,
} = require("./utils/UserUtil");
app.post("/register", register);
app.post("/login", login);
app.get("/viewuser", viewUser);
app.put("/edit-user", editUser);
app.delete("/delete-user", deleteUser);

//Expense Tracker

const {
  addExpense,
  viewExpenses,
  editExpense,
  deleteExpense,
} = require("./utils/ExpenseUtil");

app.post("/add-expense", addExpense);
app.get("/view-expneses", viewExpenses);
app.put("/edit-expense/:id", editExpense);
app.delete("/delete-expense/:id", deleteExpense);

// Define a route for /expense
app.get("/expense", (req, res) => {
  res.sendFile("expense.html", { root: "public" });
});

app.get("/home", (req, res) => {
  res.sendFile("home.html", { root: "public" });
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/public/" + startPage);
});
const server = app.listen(PORT, function () {
  console.log(`Demo project at: http://localhost:${PORT}`);
  logger.info(`Demo project at: ${PORT}!`);
  logger.error(`Example or error log`);
});
module.exports = { app, server };
