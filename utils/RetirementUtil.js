const { Retirement } = require("../models/retirement");
const fs = require("fs").promises;

async function readJSONRetirement(filename) {
  try {
    const data = await fs.readFile(filename, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error(`Error reading JSON from ${filename}:`, err);
    throw err;
  }
}

async function writeJSONRetirement(object, filename) {
  try {
    const allObjects = await readJSONRetirement(filename);
    allObjects.push(object);
    await fs.writeFile(filename, JSON.stringify(allObjects), "utf8");
    return allObjects;
  } catch (err) {
    console.error(`Error writing JSON to ${filename}:`, err);
    throw err;
  }
}

async function view_retirement(req, res) {
  try {
    const allRetirement = await readJSONRetirement("utils/retirements.json");
    return res.status(201).json(allRetirement);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function add_retirement(req, res) {
  try {
    const title = req.body.title;
    const current_age = parseInt(req.body.current_age); // Parse as an integer
    const retirement_age = parseInt(req.body.retirement_age); // Parse as an integer
    const fund_goal = parseInt(req.body.fund_goal); // Parse as an integer
    const annual_saving_goal = parseInt(req.body.annual_saving_goal);
    const user = req.body.user;

    if (
      typeof title !== "string" ||
      isNaN(current_age) ||
      typeof current_age !== "number" ||
      isNaN(retirement_age) ||
      typeof retirement_age !== "number" ||
      isNaN(fund_goal) ||
      typeof fund_goal !== "number" ||
      isNaN(annual_saving_goal) ||
      typeof annual_saving_goal !== "number" ||
      typeof user !== "string"
    ) {
      return res.status(500).json({ message: "Incorrect input types" });
    }

    const newRetirement = new Retirement(
      title,
      current_age,
      retirement_age,
      fund_goal,
      annual_saving_goal,
      user
    );

    const updatedRetirement = await writeJSONRetirement(
      newRetirement,
      "utils/retirements.json"
    );
    return res.status(201).json(updatedRetirement);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function edit_retirement(req, res) {
  try {
    const id = req.params.id;
    const title = req.body.title;
    const current_age = req.body.current_age;
    const retirement_age = req.body.retirement_age;
    const fund_goal = req.body.fund_goal;
    const annual_saving_goal = req.body.annual_saving_goal;
    const user = req.body.user;
    const allRetirement = await readJSONRetirement("utils/retirements.json");
    var modified = false;
    for (var i = 0; i < allRetirement.length; i++) {
      var curcurrRetirement = allRetirement[i];
      if (curcurrRetirement.id == id) {
        allRetirement[i].title = title;
        allRetirement[i].current_age = current_age;
        allRetirement[i].retirement_age = retirement_age;
        allRetirement[i].fund_goal = fund_goal;
        allRetirement[i].annual_saving_goal = annual_saving_goal;
        allRetirement[i].user = user;
        modified = true;
      }
    }
    if (modified) {
      await fs.writeFile(
        "utils/retirements.json",
        JSON.stringify(allRetirement),
        "utf8"
      );
      return res.status(201).json(allRetirement);
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
    const user = req.body.user; // Assuming user is sent in the request body

    const allRetirement = await readJSONRetirement("utils/retirements.json");
    const index = allRetirement.findIndex((retirement) => retirement.id === id);

    if (index !== -1) {
      const currRetirement = allRetirement[index];

      // Check if the user matches the user associated with the retirement
      if (currRetirement.user !== user) {
        return res
          .status(500)
          .json({ message: "Cannot delete retirement of a different user" });
      }

      allRetirement.splice(index, 1);

      await fs.writeFile(
        "utils/retirements.json",
        JSON.stringify(allRetirement),
        "utf8"
      );

      // Return a 200 status code for successful deletion
      return res.status(200).json(allRetirement);
    } else {
      // Return a 404 status code if the retirement with the given ID is not found
      return res.status(404).json({ message: "Invalid ID" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  readJSONRetirement,
  writeJSONRetirement,
  add_retirement,
  view_retirement,
  edit_retirement,
  delete_retirement,
};
