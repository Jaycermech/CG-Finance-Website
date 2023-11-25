var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const PORT = process.env.PORT || 5050;
var startPage = "index.html";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./public"));



// Monthly-budget
const { addBudget,viewBudget,editBudget,deleteBudget} = require("./utils/monthly-budgetUtils");
app.post("/add-budget", addBudget);
app.get("/view-budget", viewBudget);
app.put("/edit-budget/:id", editBudget);
app.delete("/delete-budget/:id", deleteBudget);


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/" + startPage);
});
const server = app.listen(PORT, function () {
  console.log(`Demo project at: http://localhost:${PORT}`);
});
module.exports = { app , server }