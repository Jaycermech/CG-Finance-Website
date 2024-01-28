const { app } = require("../index");
const { Builder, By, Key, until } = require("selenium-webdriver");
const { describe, it } = require("mocha");
const { expect } = require("chai");
const fs = require("fs").promises;

const chrome = require("selenium-webdriver/chrome");
const chromeOptions = new chrome.Options();
chromeOptions.addArguments("--headless");
const driver = new Builder()
  .forBrowser("chrome")
  .setChromeOptions(chromeOptions)
  .build();

var counter = 0;

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

describe("Testing Open Webpage UI", function () {
  this.timeout(100000); // Set timeout as 10 seconds
  it("Should show header: CG Finance Website", async () => {
    await driver.get(
      "http://localhost:" + server.address().port + "/instrumented/expense.html"
    );

    // Execute script to add value to session storage
    await driver.executeScript(
      'sessionStorage.setItem("Useremail", "songsiongpink@onyx.com");'
    );

    // console.log("am i being ran");

    const title = await driver.getTitle(); // Get the title of the web page
    expect(title).to.equal("CG Finance Website"); // Assert that title matches "Swag Labs"
  });

  it("Should be able to navigate to the add expense page and add expense", async () => {
    await driver.get(
      "http://localhost:" + server.address().port + "/instrumented/expense.html"
    );

    // Execute script to add value to session storage
    await driver.executeScript(
      'sessionStorage.setItem("Useremail", "songsiongpink@onyx.com");'
    );

    // Locate and click on the addExpensebtn1 button
    const addExpensebtn1 = await driver.findElement(By.id("addExpensebtn1"));
    await addExpensebtn1.click();

    // opens ammenity drop down button
    const ammenity_dropdown = await driver.findElement(
      By.id("ammenity_dropdown")
    );
    await driver.wait(until.elementIsVisible(ammenity_dropdown), 5000);
    await ammenity_dropdown.click();

    // opens ammenity drop down and choose food option
    const ammenity_dropdown_food = await driver.findElement(
      By.id("ammenity_dropdown_food")
    );
    await driver.wait(until.elementIsVisible(ammenity_dropdown_food), 5000);
    await ammenity_dropdown_food.click();
    await ammenity_dropdown.click();

    //select amount input box and type amount
    const amount_input_modal = await driver.findElement(
      By.id("amount_input_modal")
    );
    // console.log("ni gn ma");
    // console.log(document.getElementById("amount_input_modal"));
    await amount_input_modal.click();
    await amount_input_modal.sendKeys(100);

    const userEmailInput = await driver.findElement(
      By.id("user_input_modal_email")
    );

    const userEmailValue = await userEmailInput.getAttribute("value");
    expect(userEmailValue).to.equal("songsiongpink@onyx.com");

    const addExpensebtn2 = await driver.findElement(By.id("addExpensebtn2"));
    await addExpensebtn2.click();
  });
});

describe("Testing Edit Modal", function () {
  this.timeout(100000); // Set timeout as 10 seconds
  it("Should be able to edit an expense", async () => {
    // this.timeout(100000); // Set timeout as 100 seconds
    await driver.get(
      "http://localhost:" + server.address().port + "/instrumented/expense.html"
    );

    // Execute script to add value to session storage
    await driver.executeScript(
      'sessionStorage.setItem("Useremail", "songsiongpink@onyx.com");'
    );

    // Locate and click on the "Edit" text in the table header
    const openeditmodal = await driver.findElement(By.id("openeditmodal"));
    await driver.wait(until.elementIsVisible(openeditmodal), 5000);
    await openeditmodal.click();

    // Fix the XPath for locating the edit button
    const editbutton = await driver.findElement(
      By.xpath("//i[@data-test-id='editButton']")
    );
    await driver.wait(until.elementIsVisible(editbutton), 5000);
    await editbutton.click();

    // opens ammenity drop down button
    const edit_ammenity_dropdown = await driver.findElement(
      By.id("edit_ammenity_dropdown")
    );
    await driver.wait(until.elementIsVisible(edit_ammenity_dropdown), 5000);
    await edit_ammenity_dropdown.click();

    // opens ammenity drop down and choose food option
    const Groceries = await driver.findElement(By.id("Groceries"));
    await driver.wait(until.elementIsVisible(Groceries), 5000);
    await Groceries.click();
    await Groceries.click();

    //select amount input box and type amount
    const edit_amount_input = await driver.findElement(
      By.id("edit_amount_input")
    );
    await edit_amount_input.clear();
    // console.log("ni gn ma");
    // console.log(document.getElementById("amount_input_modal"));
    await edit_amount_input.click();
    await edit_amount_input.sendKeys(200);

    const updateExpense = await driver.findElement(By.id("updateExpense"));
    await updateExpense.click();
  });
});

describe("Testing Edit Modal Delete function", function () {
  this.timeout(100000); // Set timeout as 10 seconds
  it("Should be able to delete an expense", async () => {
    // this.timeout(100000); // Set timeout as 100 seconds
    await driver.get(
      "http://localhost:" + server.address().port + "/instrumented/expense.html"
    );

    // Execute script to add value to session storage
    await driver.executeScript(
      'sessionStorage.setItem("Useremail", "songsiongpink@onyx.com");'
    );

    // Locate and click on the "Edit" text in the table header
    const openeditmodal = await driver.findElement(By.id("openeditmodal"));
    await driver.wait(until.elementIsVisible(openeditmodal), 5000);
    await openeditmodal.click();

    // Fix the XPath for locating the edit button
    const deletebtn = await driver.findElement(
      By.xpath("//i[@data-test-id='deletebtn']")
    );

    await driver.wait(until.elementIsVisible(deletebtn), 5000);
    await deletebtn.click();

    // Wait for the alert to be present
    await driver.wait(until.alertIsPresent());

    // Switch to the alert
    const alert = await driver.switchTo().alert();

    // Get the text of the alert
    const alertText = await alert.getText();

    // Assert that the alert text contains the expected value
    expect(alertText).to.include(
      "Are you sure you want to delete the expense: Groceries?"
    );

    // Accept the alert (dismiss can be used if it's a confirmation dialog)
    await alert.accept();
  });

  //-------------------------------------------------------New code-------------------------------------

  describe("Testing editSpecificCategoryModal", function () {
    this.timeout(100000); // Set timeout as 10 seconds

    it("Should check if editSpecificCategoryModal is present", async () => {
      // this.timeout(100000); // Set timeout as 100 seconds
      await driver.get(
        "http://localhost:" +
          server.address().port +
          "/instrumented/expense.html"
      );

      // Execute script to add value to session storage
      await driver.executeScript(
        'sessionStorage.setItem("Useremail", "songsiongpink@onyx.com");'
      );

      // Locate and click on the "Edit" text in the table header
      const openeditmodal = await driver.findElement(By.id("openeditmodal"));
      await driver.wait(until.elementIsVisible(openeditmodal), 5000);
      await openeditmodal.click();

      // Fix the XPath for locating the edit button
      const editbutton = await driver.findElement(
        By.xpath("//i[@data-test-id='editButton']")
      );
      await driver.wait(until.elementIsVisible(editbutton), 5000);
      await editbutton.click();

      // Check if the modal is present by looking for its ID
      const modalElement = await driver.findElement(
        By.id("editSpecificCategoryModal")
      );

      // Assert that the modal is present
      expect(modalElement).to.exist;

      // Locate and click on the close button inside the modal
      const closeBtn = await driver.findElement(
        By.id("specific-close-modal-btn")
      );
      await driver.wait(until.elementIsVisible(closeBtn), 5000);
      await closeBtn.click();
    });
  });

  //-------------------------------------------------------New code 2-------------------------------------

  //-------------------------------------------------------New code END-------------------------------------

  // it("Should be able to navigate to the add expense page and not add expense", async () => {
  //   await driver.get(
  //     "http://localhost:" + server.address().port + "/instrumented/expense.html"
  //   );

  //   // Locate and click on the addExpensebtn1 button
  //   const addExpensebtn1 = await driver.findElement(By.id("addExpensebtn1"));
  //   await addExpensebtn1.click();

  //   // Locate and click on the Add Expense button in the modal
  //   const addExpensebtn2 = await driver.findElement(By.id("addExpensebtn2"));
  //   await addExpensebtn2.click();

  //   // // Locate and click on the Add Expense button in the modal
  //   // const AddExModalclsbtn = await driver.findElement(
  //   //   By.id("AddExModalclsbtn")
  //   // );
  //   // await AddExModalclsbtn.click();s
  // });
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
