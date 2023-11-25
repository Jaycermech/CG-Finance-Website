var express = require("express");
var bodyParser = require("body-parser");
var app = express();

const PORT = process.env.PORT || 5050;
var startPage = "index.html";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./public"));



// User-Auth
const {
  register,
  login,
  viewUser,
  editUser,
  deleteUser
} = require("./utils/UserUtil");
app.post("/register", register);
app.post("/login", login);
app.get("/viewuser", viewUser);
app.put("/edit-user", editUser);
app.delete("/delete-user", deleteUser);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/" + startPage);
});
const server = app.listen(PORT, function () {
  console.log(`Demo project at: http://localhost:${PORT}`);
});
module.exports = { app, server };
