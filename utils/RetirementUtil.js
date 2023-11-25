const { Retirement } = require("../models/Retirement");
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
async function add_retirement(req, res) {
  try {
    const current_age = req.body.current_age;
    const retirement_age = req.body.retirement_age;
    const fund_goal = req.body.fund_goal;
    if (isNaN(current_age) || isNaN(retirement_age) || isNaN(fund_goal)) {
      return res.status(500).json({ message: "Validation error" });
    } else {
      const newRetirement = new Retirement(current_age, retirement_age, fund_goal);
      const updatedRetirements = await writeJSON(
        newRetirement,
        "utils/retirements.json"
      );
      return res.status(201).json(updatedRetirements);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
module.exports = {
  readJSON,
  writeJSON,
  add_retirement,
};
