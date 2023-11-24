
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

const { Monthly_budget } = require("../models/monthly-budget");

async function addBudget(req, res) {
  try {
    const ammenities = req.body.ammenities;
    const cost = req.body.cost;
    const newBudget = new Monthly_budget(ammenities, cost);
    const updatedBudgets = await writeJSON(newBudget,"utils/monthly-budget.json");
    return res.status(201).json(updatedBudgets);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  addBudget,
};
