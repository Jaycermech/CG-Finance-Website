const { app } = require("../index");
const { Builder, By, Key, until } = require("selenium-webdriver");
const { describe, it, after } = require("mocha");
const { expect } = require("chai");
const fs = require("fs").promises;

// Chrome driver
const chrome = require("selenium-webdriver/chrome");
const chromeOptions = new chrome.Options();
chromeOptions.addArguments("--headless");
const driver = new Builder()
  .forBrowser("chrome")
  .setChromeOptions(chromeOptions)
  .build();

//FireFox driver  
// const driver = new Builder().forBrowser("firefox").build();




// const edge = require('selenium-webdriver/edge');

// const driver = new Builder()
//     .forBrowser('MicrosoftEdge')
//     .setEdgeOptions(new edge.Options()) // Optional: You can set specific options for Edge
//     .build();


// edgeOptions.addArguments("--headless");

  var counter = 0;
let server;

before(async function () {
  server = await new Promise((resolve) => {
    server = app.listen(0, "localhost", () => {
      resolve(server);
    });
  });
});


describe("Monthly Budget Page", function () {
  this.timeout(100000); // Set timeout as 10 seconds

  it("Should display Monthly Budgets table", async () => {
    await driver.get(
      "http://localhost:" + server.address().port + "/instrumented/MonthlyBudget.html"
    );

    // Execute script to add value to session storage
    await driver.executeScript(
      'sessionStorage.setItem("Useremail", "songsiongpink@onyx.com");'
    );

    const title = await driver.getTitle(); // Get the title of the web page
    expect(title).to.equal("CG Monthly-Budget"); // Adjust to match the actual title of MonthlyBudget.html

    const table = await driver.findElement(By.tagName("table"));
    const rows = await table.findElements(By.tagName("tr"));
    expect(rows.length).to.be.greaterThan(0); // Ensure that the table has rows
  });
});
describe("HTML Structure and Functionality", function () {
  this.timeout(100000); // Set timeout as 10 seconds

  it("Should have an H1 element with text 'CG Finance Website'", async () => {
    await driver.get(
      "http://localhost:" +
      server.address().port +
      "/instrumented/MonthlyBudget.html"
    );

    const h1Element = await driver.findElement(By.tagName("h1"));
    const text = await h1Element.getText();

    expect(text).to.equal("CG Finance Website");
  });

  it("Should have a table with the specified columns", async () => {
    await driver.get(
      "http://localhost:" +
      server.address().port +
      "/instrumented/MonthlyBudget.html"
    );

    const tableElement = await driver.findElement(By.tagName("table"));
    const columns = await tableElement.findElements(By.tagName("th"));

    expect(columns.length).to.equal(4);

    const columnNames = await Promise.all(columns.map((column) => column.getText()));
    expect(columnNames).to.deep.equal(["Amenities", "Budget", "Owner", "Edit"]);
  });

  it("Should have an empty tbody with id 'tableContent'", async () => {
    await driver.get(
      "http://localhost:" +
      server.address().port +
      "/instrumented/MonthlyBudget.html"
    );

    const tbodyElement = await driver.findElement(By.id("tableContent"));
    const innerHtml = await tbodyElement.getAttribute("innerHTML");

    expect(innerHtml).to.equal("");
  });
});

describe("Styling Tests", function () {
  this.timeout(100000); // Set timeout as 10 seconds

  it("Body should have a specified background color", async () => {
    await driver.get(
      "http://localhost:" +
      server.address().port +
      "/instrumented/MonthlyBudget.html"
    );

    const body = await driver.findElement(By.tagName("body"));
    const backgroundColor = await body.getCssValue("background-color");

    // Assert the background color is as expected
    expect(backgroundColor).to.equal("rgba(244, 244, 244, 1)");
  });
  it("Header should have a specified background color", async () => {
    await driver.get(
      "http://localhost:" +
      server.address().port +
      "/instrumented/MonthlyBudget.html"
    );

    const header = await driver.findElement(By.tagName("header"));
    const backgroundColor = await header.getCssValue("background-color");

    // Assert the background color is as expected
    expect(backgroundColor).to.equal("rgba(51, 51, 51, 1)");
  });

});
describe("Creating Monthly Budgets", function () {
  this.timeout(100000); // Set timeout as 10 seconds
  it("Should show header: Monthly Budgets", async () => {
    await driver.get(
      "http://localhost:" +
      server.address().port +
      "/instrumented/MonthlyBudget.html"
    );
    // Execute script to add value to session storage
    await driver.executeScript(
      'sessionStorage.setItem("Useremail", "songsiongpink@onyx.com");'
    );
    const title = await driver.getTitle(); // Get the title of the web page
    console.log(title);
    expect(title).to.equal("CG Monthly-Budget"); // Assert that title matches "Swag Labs"
  });
  it("Should show alert if Monthly Budget is not entered", async () => {
    await driver.get(
      "http://localhost:" +
      server.address().port +
      "/instrumented/MonthlyBudget.html"
    );

    // Execute script to add value to session storage
    await driver.executeScript(
      'sessionStorage.setItem("Useremail", "songsiongpink@onyx.com");'
    );

    // Click on the add budget button
    const addBudgetbtn = await driver.findElement(By.id("addBudgetbtn"));
    await addBudgetbtn.click();

    const addbtn = await driver.findElement(By.id("addbtn"));

    await addbtn.click();
    console.log(addbtn, "add is clicked", 5000);

    // Wait for the alert to be present
    await driver.wait(until.alertIsPresent());

    // Switch to the alert
    const alert = await driver.switchTo().alert();
    // Check the alert text
    const alertText = await alert.getText();
    console.log("this is the alert", alertText);
    expect(alertText).to.equal("Please enter Monthly Budget");

    // Dismiss the alert (Click "OK")
    await alert.dismiss();

  });
  it("Should check if Owner matches to Useremail in sessionStorage", async () => {
    this.timeout(10000); // Set timeout as 10 seconds
    await driver.get(
      "http://localhost:" +
      server.address().port +
      "/instrumented/MonthlyBudget.html"

    );
    await driver.executeScript(
      'sessionStorage.setItem("Useremail", "songsiongpink@onyx.com");'
    );
    const addBudgetbtn = await driver.findElement(By.id("addBudgetbtn"));
    await addBudgetbtn.click();
    console.log(addBudgetbtn, "add is clicked");
    const addBudgetvalue = await driver.findElement(By.id("budgetAdd"));
    // Clear the existing value in the input field (optional, depending on your requirements)
    await addBudgetvalue.clear();
    // Set the new value to 100
    await addBudgetvalue.sendKeys("200");

    // Retrieve the ownerAdd field in the Add Modal
    const ownerAddField = await driver.findElement(By.id("ownerAdd"));

    // Retrieve the Useremail from session storage
    const useremailFromStorage = await driver.executeScript(
      'return sessionStorage.getItem("Useremail");'
    );

    // Assert that the ownerAdd field is equal to the Useremail from session storage
    const ownerAddValue = await ownerAddField.getAttribute("value");
    expect(ownerAddValue).to.equal(useremailFromStorage);

  });
  it("Should select an ammenity from the add dropdown", async () => {
    this.timeout(10000); // Set timeout as 10 seconds

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
  it("Should add a new budget", async () => {
    this.timeout(10000);
    const addbtn = await driver.findElement(By.id("addbtn"));

    await addbtn.click();
    console.log(addbtn, "add is clicked", 5000);

  });
  describe("Edit budget", function () {
    it("Should open edit modal and show alert if Monthly Budget is not entered Edit", async () => {
      await driver.get(
        "http://localhost:" +
        server.address().port +
        "/instrumented/MonthlyBudget.html"
      );

      // Execute script to edit value to session storage
      await driver.executeScript(
        'sessionStorage.setItem("Useremail", "songsiongpink@onyx.com");'
      );

      // Click on the edit budget button
      const editBtnModal = await driver.findElement(By.className("openEditBtn"));
      await editBtnModal.click();
      this.timeout(10000);

      const editBudgetvalue = await driver.findElement(By.id("budgetEdit"));
      // Clear the existing value in the input field (optional, depending on your requirements)
      await editBudgetvalue.clear();

      const editbtn = await driver.findElement(By.id("editbtn"));

      await editbtn.click();
      console.log(editbtn, "add is clicked", 5000);

      // Wait for the alert to be present
      await driver.wait(until.alertIsPresent());

      // Switch to the alert
      const alert = await driver.switchTo().alert();
      // Check the alert text
      const alertText = await alert.getText();
      console.log("this is the alert", alertText);
      expect(alertText).to.equal("Please enter Monthly Budget");

      // Dismiss the alert (Click "OK")
      await alert.dismiss();
      this.timeout(10000);
    });
    it("should enter value in budget", async () => {
      // Execute script to edit value to session storage
      await driver.executeScript(
        'sessionStorage.setItem("Useremail", "songsiongpink@onyx.com");'
      );
      // Retrieve the ownerAdd field in the Add Modal

      const ownerEditField = await driver.findElement(By.id("ownerEdit"));

      // Retrieve the Useremail from session storage
      const useremailFromStorage = await driver.executeScript(
        'return sessionStorage.getItem("Useremail");'
      );

      // Assert that the ownerAdd field is equal to the Useremail from session storage
      const ownerEditValue = await ownerEditField.getAttribute("value");
      expect(ownerEditValue).to.equal(useremailFromStorage);

      const editBudgetvalue = await driver.findElement(By.id("budgetEdit"));
      // Clear the existing value in the input field (optional, depending on your requirements)
      await editBudgetvalue.clear();
      // Set the new value to 100
      await editBudgetvalue.sendKeys("400");

    });
    it("Should select an ammenity from the edit dropdown", async () => {
      this.timeout(10000); // Set timeout as 10 seconds

      const ammenitiesEdit = await driver.findElement(
        By.id("ammenitiesEdit")
      );

      await driver.wait(until.elementIsVisible(ammenitiesEdit), 5000);
      await ammenitiesEdit.click();

      const ammenitiesEdit_Others = await driver.findElement(
        By.id("Others")
      );
      await driver.wait(until.elementIsVisible(ammenitiesEdit_Others), 5000);
      await ammenitiesEdit_Others.click();
      await ammenitiesEdit.click();
    });
    it("Should click on  edit button", async () => {
      const editbtn = await driver.findElement(By.id("editbtn"));

      await editbtn.click();
      console.log(editbtn, "edit is clicked", 5000);

    });
  });
});
describe("Deleting Monthly Budgets", function () {
  it("Should open edit button modal", async () => {
    this.timeout(10000); // Set timeout as 10 seconds
    const editBtnModal = await driver.wait(until.elementLocated(By.className("openEditBtn")), 5000);
    editBtnModal.click();

  });
  it("Should click on  delete button", async () => {
    const deleteBtn = await driver.findElement(By.className("deleteBtn"));

    await deleteBtn.click();
    console.log(deleteBtn, "delete is clicked", 5000);

  });


});

afterEach(async function () {
  await driver
    .executeScript("return window.__coverage__;")
    .then(async (coverageData) => {
      if (coverageData) {
        // Save coverage data to a file
        await fs.writeFile(
          "coverage-frontend/coverage" + counter++ + ".json",
          JSON.stringify(coverageData),
          (err) => {
            if (err) {
              console.error("Error writing coverage data:", err);
            } else {
              console.log("Coverage data written to coverage.json");
            }
          }
        );
      }
    });
});


after(async function () {
  await driver.quit();
  process.exit(0); // Exit with success code
});
