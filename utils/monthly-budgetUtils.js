
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
    const bu = req.body.bu;
    const owner = req.body.owner;
    const newBudget = new Monthly_budget(ammenities, bu, owner);
    const updatedBudgets = await writeJSON(newBudget,"utils/monthly-budget.json");
    return res.status(201).json(updatedBudgets);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
async function viewBudget(req, res) {
    try {
        const allBudgets = await readJSON("utils/monthly-budget.json");
        return res.status(201).json(allBudgets);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function editBudget(req, res) {
    try {
        const id = req.params.id;
        const ammenities = req.body.ammenities;
        const bu = req.body.bu;
        const allBudgets = await readJSON("utils/monthly-budget.json");
        var modified = false;
        for (var i = 0; i < allBudgets.length; i++) {
            var curcurrBudget = allBudgets[i];
            if (curcurrBudget.id == id) {
                allBudgets[i].ammenities = ammenities;
                allBudgets[i].bu = bu;
                modified = true;
            }
        }
        if (modified) {
            await fs.writeFile(
                "utils/monthly-budget.json",
                JSON.stringify(allBudgets),
                "utf8"
            );
            return res
                .status(201)
                .json(allBudgets);
        } else {
            return res
                .status(500)
                .json({ message: "Error occurred, unable to modify!" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function deleteBudget(req, res) {
    try {
        const id = req.params.id;
        const allBudgets = await readJSON("utils/monthly-budget.json");
        var index = -1;
        for (var i = 0; i < allBudgets.length; i++) {
            var curcurrBudget = allBudgets[i];
            if (curcurrBudget.id == id) index = i;
        }
        if (index != -1) {
            allBudgets.splice(index, 1);
            await fs.writeFile(
                "utils/monthly-budget.json",
                JSON.stringify(allBudgets),
                "utf8"
            );
            return res
                .status(201)
                .json(allBudgets);
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
  addBudget,
  viewBudget,
  editBudget,
  deleteBudget
};
