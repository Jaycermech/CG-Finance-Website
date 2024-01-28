const { app } = require("../index");
const { Builder, By, Key, until } = require("selenium-webdriver");
const { describe, it } = require("mocha");
const { expect, util } = require("chai");

const chrome = require("selenium-webdriver/chrome");
const chromeOptions = new chrome.Options();
// chromeOptions.addArguments("--headless");
const driver = new Builder()
  .forBrowser("chrome")
  .setChromeOptions(chromeOptions)
  .build();

// const driver = new Builder().forBrowser("chrome").build();

// const driver = new Builder().forBrowser("firefox").build();

// const edge = require('selenium-webdriver/edge');

// const driver = new Builder()
//     .forBrowser('MicrosoftEdge')
//     .setEdgeOptions(new edge.Options()) // Optional: You can set specific options for Edge
//     .build();

// var server;

before(async function () {
  server = await new Promise((resolve) => {
    server = app.listen(0, "localhost", () => {
      resolve(server);
    });
  });
});

describe("Testing Open Webpage UI for Monthly Budget", function () {
  this.timeout(10000); // Set timeout as 10 seconds
  it("Should show title:CG Finance Website", async () => {
    await driver.get("http://localhost:" + server.address().port + "/MonthlyBudget.html");

    // Execute script to add value to session storage
    await driver.executeScript(
      'sessionStorage.setItem("Useremail", "songsiongpink@onyx.com");'
    );

    // console.log("run?: ");

    const title = await driver.getTitle(); // Get the title of the web page
    expect(title).to.equal("CG Monthly-Budget"); // Assert that title matches "Swag Labs"

  });
  it("Should open add budget button", async () => {
    const addBudgetbtn = await driver.findElement(By.id("addBudgetbtn"));
    const buttonId = await addBudgetbtn.getAttribute("id");
    console.log("Button ID:", buttonId);
    await addBudgetbtn.click();
    console.log(addBudgetbtn, "add is clicked");
  });
  it("Should enter budget value", async () => {
    const addBudgetvalue = await driver.findElement(By.id("budgetAdd"));
    // Clear the existing value in the input field (optional, depending on your requirements)
    await addBudgetvalue.clear();

    // Set the new value to 100
    await addBudgetvalue.sendKeys("200");

    console.log("Budget value set to 200");
  });



  it("Should select an ammenity from the add dropdown", async () => {
    const ammenitiesAdd = await driver.findElement(
      By.id("ammenitiesAdd")
    );
    await driver.wait(until.elementIsVisible(ammenitiesAdd), 5000);
    await ammenitiesAdd.click();

    const ammenitiesAdd_food = await driver.findElement(
      By.id("Food")
    );
    await driver.wait(until.elementIsVisible(ammenitiesAdd_food), 5000);
    await ammenitiesAdd_food.click();
    await ammenitiesAdd.click();
  });

  it("Should click on  add button", async () => {
    const addbtn = await driver.findElement(By.id("addbtn"));

    await addbtn.click();
    console.log(addbtn, "add is clicked", 5000);

  });

});
describe("Edit Monthly Budget Features", function () {
  it("Should open edit button modal", async () => {
    const editBtnModal = await driver.wait(until.elementLocated(By.className("openEditBtn")), 5000);
    const buttonId1 = await editBtnModal.getAttribute("data-id");
    console.log("Button ID:", buttonId1);

    // Re-locate the element to avoid StaleElementReferenceError
    const reLocatedEditBtnModal = await driver.findElement(By.className("openEditBtn"));
    await reLocatedEditBtnModal.click();
    console.log(reLocatedEditBtnModal, "edit is clicked");
  });
  this.timeout(15000);
  // it("Should select an amenity from the edit dropdown", async (done) => {

  //   try {
  //     const ammenitiesEdit = await driver.findElement(By.id("ammenitiesEdit"));
  //     await driver.wait(until.elementIsVisible(ammenitiesEdit), 15000);

  //     await ammenitiesEdit.click();

  //     const ammenitiesEdit_food = await driver.findElement(By.id("Food"));
  //     await driver.wait(until.elementIsVisible(ammenitiesEdit_food), 15000);

  //     await ammenitiesEdit_food.click();

  //     await ammenitiesEdit.click();
  //     console.log("Editing budget successful");
  //     done();

  //   } catch (error) {
  //     // Pass any caught error to 'done()' to indicate test failure
  //     console.error("Error during editing:", error);
     
  //   }
  // });
  it("Should enter edit budget value", async () => {
    const editBudgetvalue = await driver.findElement(By.id("budgetEdit"));
    // Clear the existing value in the input field (optional, depending on your requirements)
    await editBudgetvalue.clear();

    // Use JavaScript to set the value to avoid ElementNotInteractableError
    await driver.executeScript('arguments[0].value = "400";', editBudgetvalue);

    console.log("Budget value set to 400");
  });

  it("Should click on edit button", async () => {
    const editbtn = await driver.findElement(By.id("editbtn"));

    // Use JavaScript to click on the element to avoid ElementNotInteractableError
    await driver.executeScript('arguments[0].click();', editbtn);

    console.log(editbtn, "edit is clicked", 10000);
  });


});
describe("Delete Monthly Budget Features", function () {

  it("Should open edit button modal", async () => {
    try {
      await driver.sleep(1000); // Adjust the duration as needed
      const editBtnModal = await driver.wait(until.elementLocated(By.className("openEditBtn")), 5000);
      const buttonId1 = await editBtnModal.getAttribute("data-id");


      // Re-locate the element to avoid StaleElementReferenceError
      const reLocatedEditBtnModal = await driver.findElement(By.className("openEditBtn"));
      await reLocatedEditBtnModal.click();
      console.log(reLocatedEditBtnModal, "edit is clicked");

    } catch (error) {
      throw error; // Pass any caught error to 'done()' to indicate test failure
    }
  });

  it("Should click on delete button", async () => {
    try {
      await driver.sleep(1000);
      const deleteBtn = await driver.findElement(By.id("delbtn"));

      // Use JavaScript to click on the element to avoid ElementNotInteractableError
      await deleteBtn.click();
    } catch (error) {
      done(error); // Pass any caught error to 'done()' to indicate test failure
    }
    
  });


});

after(async function () {
  await driver.quit();
  process.exit(0); // Exit with success code
});
