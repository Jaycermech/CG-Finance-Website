var express = require("express");
var bodyParser = require("body-parser");
var app = express();

const PORT = process.env.PORT || 5050;
var startPage = "index.html";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./public"));

//add retirement
const { add_retirement } = require('./utils/RetirementUtil') 
app.post('/add-retirement', add_retirement); 

//retrieve retirement
const { view_retirement } = require('./utils/RetirementUtil')
app.get('/view-retirement', view_retirement); 



app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/" + startPage);
});
const server = app.listen(PORT, function () {
  console.log(`Demo project at: http://localhost:${PORT}`);
});
module.exports = { app , server }