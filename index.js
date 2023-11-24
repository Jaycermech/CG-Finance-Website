var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const PORT = process.env.PORT || 5050;
var startPage = "index.html";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./public"));

const {
  addExpense,
  viewExpenses,
  editExpense,
  deleteExpense,
} = require("./utils/ExpenseUtil");

app.post("/add-expense", addExpense);
app.get("/view-expneses", viewExpenses);
app.put("/edit-expense/:id", editExpense);
app.delete('/delete-expense/:id', deleteExpense);;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/" + startPage);
});
app.listen(PORT, function () {
  console.log(`Demo project at: http://localhost:${PORT}`);
});
