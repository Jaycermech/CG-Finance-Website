const { Expense } = require("../models/Expense");

const fs = require("fs").promises;

async function readJSON(filename) {
  try {
    const data = await fs.readFile(filename, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function writeJSON(object, filename) {
  try {
    const allObjects = await readJSON(filename);
    allObjects.push(object);
    await fs.writeFile(filename, JSON.stringify(allObjects), "utf8");
    return allObjects;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
async function addExpense(req, res) {
  try {
    const description = req.body.description;
    const amount = req.body.amount;
    const user = req.body.user;

    // Debugging: Print the values to console
    console.log("Description:", description);
    console.log("Amount:", amount);
    console.log("User:", user);

    const newExpense = new Expense(description, amount, user);
    const updatedExpenses = await writeJSON(newExpense, "utils/expenses.json");
    return res.status(201).json(updatedExpenses);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function viewExpenses(req, res) {
  try {
    const allExpenses = await readJSON("utils/expenses.json");
    return res.status(201).json(allExpenses);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function editExpense(req, res) {
  try {
    const id = req.params.id;
    const description = req.body.description;
    const amount = req.body.amount;
    const user = req.body.user;
    const allExpenses = await readJSON("utils/expenses.json");
    var modified = false;
    for (var i = 0; i < allExpenses.length; i++) {
      var curcurrExpense = allExpenses[i];
      if (curcurrExpense.id == id) {
        allExpenses[i].description = description;
        allExpenses[i].amount = amount;
        modified = true;
      }
    }
    if (modified) {
      await fs.writeFile(
        "utils/expenses.json",
        JSON.stringify(allExpenses),

        "utf8"
      );
      return res.status(201).json(allExpenses);
    } else {
      return res
        .status(500)
        .json({ message: "Error occurred, unable to modify!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function deleteExpense(req, res) {
  try {
    const id = req.params.id;
    const allExpense = await readJSON("utils/expenses.json");
    var index = -1;
    for (var i = 0; i < allExpense.length; i++) {
      var curcurrExpense = allExpense[i];
      if (curcurrExpense.id == id) index = i;
    }
    if (index != -1) {
      allExpense.splice(index, 1);
      await fs.writeFile(
        "utils/expenses.json",
        JSON.stringify(allExpense),
        "utf8"
      );
      return res.status(201).json(allExpense);
    } else {
      return res
        .status(500)
        .json({ message: "Error occurred, unable to delete!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  addExpense,
  viewExpenses,
  editExpense,
  deleteExpense,
  readJSON,
  writeJSON,
};
