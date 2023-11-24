// const { readJSON, writeJSON } = require("./monthly-budget.json");

const { Monthly_budget } = require("../models/monthly-budget");
const fs = require("fs").promises;

async function readJSON(filePath) {
    try {
      const data = await fs.readFile(filePath, "utf8");
      return JSON.parse(data);
    } catch (error) {
      console.error(error);
    }
  }
async function writeJSON(data, filePath) {
    try {
      await fs.writeFile(filePath, JSON.stringify(data), { encoding: "utf8" });
    } catch (error) {
      console.error(error);
    }
  }

async function addBudget(req, res) {
    try {
        const ammenities = req.body.ammenities;
        const cost = req.body.cost;
        const newBudget = new Monthly_budget(ammenities,cost);
        const updatedBudgets = await writeJSON(
            newBudget,
            "utils/monthly-budget.json"
        );
        return res.status(201).json(updatedBudgets);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    addBudget,
};
