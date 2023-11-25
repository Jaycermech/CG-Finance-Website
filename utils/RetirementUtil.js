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

async function view_retirement(req, res) {
  try {
    const allRetirement = await readJSON("utils/retirements.json");
    return res.status(201).json(allRetirement);
  } catch (error) {
    return res.status(500).json({ message: error.message });
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
      const newRetirement = new Retirement(
        current_age,
        retirement_age,
        fund_goal
      );
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

async function edit_retirement(req, res) {
  try {
    const id = req.params.id;
    const current_age = req.body.current_age;
    const retirement_age = req.body.retirement_age;
    const fund_goal = req.body.fund_goal;
    const allRetirement = await readJSON("utils/retirements.json");
    var modified = false;
    for (var i = 0; i < allRetirement.length; i++) {
      var curcurrRetirement = allRetirement[i];
      if (curcurrRetirement.id == id) {
        allRetirement[i].current_age = current_age;
        allRetirement[i].retirement_age = retirement_age;
        allRetirement[i].fund_goal = fund_goal;
        modified = true;
      }
    }
    if (modified) {
      await fs.writeFile(
        "utils/retirements.json",
        JSON.stringify(allRetirement),
        "utf8"
      );
      return res
        .status(201)
        .json({ message: "Retirement modified successfully!" });
    } else {
      return res
        .status(500)
        .json({ message: "Error occurred, unable to modify!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function delete_retirement(req, res) {
  try {
    const id = req.params.id;
    const allRetirement = await readJSON("utils/retirements.json");
    var index = -1;
    for (var i = 0; i < allRetirement.length; i++) {
      var curcurrRetirement = allRetirement[i];
      if (curcurrRetirement.id == id) index = i;
    }
    if (index != -1) {
      allRetirement.splice(index, 1);
      await fs.writeFile(
        "utils/retirements.json",
        JSON.stringify(allRetirement),
        "utf8"
      );
      return res
        .status(201)
        .json({ message: "Retirement deleted successfully!" });
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
  readJSON,
  writeJSON,
  add_retirement,
  view_retirement,
  edit_retirement,
  delete_retirement,
};
