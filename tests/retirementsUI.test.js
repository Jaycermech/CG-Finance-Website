// const { app } = require("../index");
// const { Builder, By, Key, until } = require("selenium-webdriver");
// const { describe, it } = require("mocha");
// const { expect } = require("chai");
// const fs = require("fs").promises;

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
//   .forBrowser("chrome")
//   .setChromeOptions(chromeOptions)
//   .build();

// var counter = 0;

// // const driver = new Builder().forBrowser("chrome").build();

// // const driver = new Builder().forBrowser("firefox").build();

// // const edge = require('selenium-webdriver/edge');

// // const driver = new Builder()
// //     .forBrowser('MicrosoftEdge')
// //     .setEdgeOptions(new edge.Options()) // Optional: You can set specific options for Edge
// //     .build();

// // var server;

// before(async function () {
//   server = await new Promise((resolve) => {
//     server = app.listen(0, "localhost", () => {
//       resolve(server);
//     });
//   });
// });

// describe("Creating retirement plans", function () {
//   this.timeout(100000); // Set timeout as 10 seconds
//   it("Should show header: Retirement Plans", async () => {
//     await driver.get(
//       "http://localhost:" +
//         server.address().port +
//         "/instrumented/retirement.html"
//     );

//     // Execute script to add value to session storage
//     await driver.executeScript(
//       'sessionStorage.setItem("Useremail", "songsiongpink@onyx.com");'
//     );

//     const title = await driver.getTitle(); // Get the title of the web page
//     expect(title).to.equal("Retirement Plans"); // Assert that title matches "Swag Labs"
//   });
//   it("Should be able to navigate to the add retirement page and add retirement and then display updated retirement dashboard", async () => {
//     await driver.get(
//       "http://localhost:" +
//         server.address().port +
//         "/instrumented/retirement.html"
//     );

//     const tableBefore = await driver.findElement(By.tagName("table"));
//     const rowsBefore = await tableBefore.findElements(By.tagName("tr"));
//     const beforeCount = rowsBefore.length;

//     // Execute script to add value to session storage
//     await driver.executeScript(
//       'sessionStorage.setItem("Useremail", "songsiongpink@onyx.com");'
//     );

//     // Locate and click on the Add Plan Button button
//     const addPlanBtn = await driver.findElement(By.id("Add_Plan_Btn"));
//     await addPlanBtn.click();

//     // Locate Add Retirement Header
//     const retirementHeader = await driver.getTitle();
//     expect(retirementHeader).to.equal("Add Retirement");

//     // Locate and type in the retirement form details
//     const titleInput = await driver.findElement(By.id("create_title"));
//     await titleInput.click();
//     await titleInput.sendKeys("Onyx pink plan");

//     const currentAgeInput = await driver.findElement(
//       By.id("create_currentAge")
//     );
//     await currentAgeInput.click();
//     await currentAgeInput.sendKeys("21");

//     const retirementAgeInput = await driver.findElement(
//       By.id("create_retirementAge")
//     );
//     await retirementAgeInput.click();
//     await retirementAgeInput.sendKeys("80");

//     const fundGoalsInput = await driver.findElement(By.id("create_fundGoals"));
//     await fundGoalsInput.click();
//     await fundGoalsInput.sendKeys("1000000");

//     const submitRetirementBtn = await driver.findElement(
//       By.id("submit_Add_Retirement")
//     );
//     await submitRetirementBtn.click();

//     // Wait for the alert to be present
//     await driver.wait(until.alertIsPresent());

//     // Switch to the alert
//     const alert = await driver.switchTo().alert();

//     // Get the text of the alert
//     const alertText = await alert.getText();

//     // Assert that the alert text contains the expected value
//     expect(alertText).to.include("Retirement Added!");

//     // Accept the alert (dismiss can be used if it's a confirmation dialog)
//     await alert.accept();

//     await driver.get(
//       "http://localhost:" +
//         server.address().port +
//         "/instrumented/retirement.html"
//     );

//     await driver.manage().setTimeouts({ implicit: 5000 });

//     const tableUpdated = await driver.findElement(By.tagName("table"));
//     const rowsUpdated = await tableUpdated.findElements(By.tagName("tr"));

//     expect(rowsUpdated.length).to.equal(beforeCount + 1);
//   });
//   it("Should not be able to add retirement due to empty fields", async () => {
//     await driver.get(
//       "http://localhost:" +
//         server.address().port +
//         "/instrumented/retirement.html"
//     );

//     // Execute script to add value to session storage
//     await driver.executeScript(
//       'sessionStorage.setItem("Useremail", "songsiongpink@onyx.com");'
//     );

//     // Locate and click on the Add Plan Button button
//     const Add_Plan_Btn = await driver.findElement(By.id("Add_Plan_Btn"));
//     await Add_Plan_Btn.click();

//     // Locate Add Retirement Header
//     const retirementHeader = await driver.getTitle();
//     expect(retirementHeader).to.equal("Add Retirement");

//     const submitRetirementBtn = await driver.findElement(
//       By.id("submit_Add_Retirement")
//     );
//     await submitRetirementBtn.click();

//     // Wait for the alert to be present
//     await driver.wait(until.alertIsPresent());

//     // Switch to the alert
//     const alert = await driver.switchTo().alert();

//     // Get the text of the alert
//     const alertText = await alert.getText();

//     // Assert that the alert text contains the expected value
//     expect(alertText).to.include("All Fields required!");

//     // Accept the alert (dismiss can be used if it's a confirmation dialog)
//     await alert.accept();
//   });
//   it("Should not be able to add retirement due to negative numeric fields", async () => {
//     await driver.get(
//       "http://localhost:" +
//         server.address().port +
//         "/instrumented/retirement.html"
//     );

//     // Execute script to add value to session storage
//     await driver.executeScript(
//       'sessionStorage.setItem("Useremail", "songsiongpink@onyx.com");'
//     );

//     // Locate and click on the Add Plan Button button
//     const Add_Plan_Btn = await driver.findElement(By.id("Add_Plan_Btn"));
//     await Add_Plan_Btn.click();

//     // Locate Add Retirement Header
//     const retirementHeader = await driver.getTitle();
//     expect(retirementHeader).to.equal("Add Retirement");

//     // Locate and type in the retirement form details
//     const titleInput = await driver.findElement(By.id("create_title"));
//     await titleInput.click();
//     await titleInput.sendKeys("Onyx pink plan");

//     const currentAgeInput = await driver.findElement(
//       By.id("create_currentAge")
//     );
//     await currentAgeInput.click();
//     await currentAgeInput.sendKeys("21");

//     const retirementAgeInput = await driver.findElement(
//       By.id("create_retirementAge")
//     );
//     await retirementAgeInput.click();
//     await retirementAgeInput.sendKeys("80");

//     const fundGoalsInput = await driver.findElement(By.id("create_fundGoals"));
//     await fundGoalsInput.click();
//     await fundGoalsInput.sendKeys("-1000000");

//     const submitRetirementBtn = await driver.findElement(
//       By.id("submit_Add_Retirement")
//     );
//     await submitRetirementBtn.click();

//     // Wait for the alert to be present
//     await driver.wait(until.alertIsPresent());

//     // Switch to the alert
//     const alert = await driver.switchTo().alert();

//     // Get the text of the alert
//     const alertText = await alert.getText();

//     // Assert that the alert text contains the expected value
//     expect(alertText).to.include("No negative numbers allowed in fields!");

//     // Accept the alert (dismiss can be used if it's a confirmation dialog)
//     await alert.accept();
//   });
//   it("Should add retirement and display correctly calculated years_to_retirement and annual_saving_goal", async () => {
//     await driver.get(
//       "http://localhost:" +
//         server.address().port +
//         "/instrumented/create_retirement.html"
//     );

//     // Execute script to add value to session storage
//     await driver.executeScript(
//       'sessionStorage.setItem("Useremail", "songsiongpink@onyx.com");'
//     );
//     const currentAgeValue = "20";
//     const retirementAgeValue = "70";
//     const fundGoalsValue = "1000000";

//     //Calculating years to retirement
//     const years_to_retirement =
//       parseInt(retirementAgeValue) - parseInt(currentAgeValue);

//     //Calculating annual saving goal
//     const annual_saving_goal =
//       parseFloat(fundGoalsValue) / parseInt(years_to_retirement);

//     // Locate Add Retirement Header
//     const retirementHeader = await driver.getTitle();
//     expect(retirementHeader).to.equal("Add Retirement");

//     // Locate and type in the retirement form details
//     const titleInput = await driver.findElement(By.id("create_title"));
//     await titleInput.click();
//     await titleInput.sendKeys("Onyx pink plan");

//     const currentAgeInput = await driver.findElement(
//       By.id("create_currentAge")
//     );
//     await currentAgeInput.click();
//     await currentAgeInput.sendKeys(currentAgeValue);

//     const retirementAgeInput = await driver.findElement(
//       By.id("create_retirementAge")
//     );
//     await retirementAgeInput.click();
//     await retirementAgeInput.sendKeys(retirementAgeValue);

//     const fundGoalsInput = await driver.findElement(By.id("create_fundGoals"));
//     await fundGoalsInput.click();
//     await fundGoalsInput.sendKeys(fundGoalsValue);

//     const submitRetirementBtn = await driver.findElement(
//       By.id("submit_Add_Retirement")
//     );
//     await submitRetirementBtn.click();

//     // Wait for the alert to be present
//     await driver.wait(until.alertIsPresent());

//     // Switch to the alert
//     const alert = await driver.switchTo().alert();

//     // Get the text of the alert
//     const alertText = await alert.getText();

//     // Assert that the alert text contains the expected value
//     expect(alertText).to.include("Retirement Added!");

//     // Accept the alert (dismiss can be used if it's a confirmation dialog)
//     await alert.accept();

//     // await new Promise(resolve => setTimeout(resolve, 4000)); // Adjust the timeout value as needed

    //check if years_to_retirement and annual_saving_goal are correct
    const years_to_retirementDisplay = await driver
      .findElement(By.id("years_to_retirement_display"))
      .getText();
    console.log("years to retirement display", years_to_retirementDisplay);
    expect(years_to_retirementDisplay.toString()).to.equal(
      years_to_retirement.toString()
    );

    const annual_saving_goalDisplay = await driver
      .findElement(By.id("annual_saving_goal_display"))
      .getText();
    console.log("annual saving goal display", annual_saving_goalDisplay);
    expect(annual_saving_goalDisplay.toString()).to.equal(
      annual_saving_goal.toString()
    );
  });
});

// describe("Retirement Plans Dashboard", function () {
//   this.timeout(100000); // Set timeout as 10 seconds
//   it("Finding retirement plans and editing retirement plan", async () => {
//     await driver.get(
//       "http://localhost:" +
//         server.address().port +
//         "/instrumented/retirement.html"
//     );

//     // Execute script to add value to session storage
//     await driver.executeScript(
//       'sessionStorage.setItem("Useremail", "songsiongpink@onyx.com");'
//     );

    const editIcon = await driver.findElement(By.id("edit_retirement"));
    console.log("editcon", editIcon);
    await editIcon.click();

    //checking and displaying original values
    const editTitleOriginal = await driver
      .findElement(By.id("edit_title"))
      .getAttribute("value");
    console.log("edit title original value: ", editTitleOriginal);
    const edit_currentAgeOriginal = await driver
      .findElement(By.id("edit_currentAge"))
      .getAttribute("value");
    console.log("edit current age original value: ", edit_currentAgeOriginal);
    const edit_retirementAgeOriginal = await driver
      .findElement(By.id("edit_retirementAge"))
      .getAttribute("value");
    console.log(
      "edit retirement age origina; value: ",
      edit_retirementAgeOriginal
    );
    const editFunGoalOriginal = await driver
      .findElement(By.id("edit_fundGoals"))
      .getAttribute("value");
    console.log("edit fund goal original value: ", editFunGoalOriginal);

    const annualSavingGoalOriginal = await driver
      .findElement(By.id("edit_annual_saving_goal_display"))
      .getText();
    console.log("annual saving goal original: ", annualSavingGoalOriginal);
    const yearsToRetirementOriginal = await driver
      .findElement(By.id("edit_years_to_retirement_display"))
      .getText();
    console.log("years to retirement original: ", yearsToRetirementOriginal);

//     //updating values
//     const editTitleNew = await driver.findElement(By.id("edit_title"));
//     await editTitleNew.click();
//     await editTitleNew.clear();
//     await editTitleNew.sendKeys(editTitleOriginal + " 2");

//     const editCurrentAge = await driver.findElement(By.id("edit_currentAge"));
//     await editCurrentAge.click();
//     await editCurrentAge.clear();
//     await editCurrentAge.sendKeys(parseInt(edit_currentAgeOriginal) + 10);

//     const editRetirementAge = await driver.findElement(
//       By.id("edit_retirementAge")
//     );
//     await editRetirementAge.click();
//     await editRetirementAge.clear();
//     await editRetirementAge.sendKeys(parseInt(edit_retirementAgeOriginal) + 5);

//     const editFundGoals = await driver.findElement(By.id("edit_fundGoals"));
//     await editFundGoals.click();
//     await editFundGoals.clear();
//     await editFundGoals.sendKeys(parseInt(editFunGoalOriginal) + 1000);

//     const submitEditRetirement = await driver.findElement(
//       By.id("re_calculate")
//     );
//     await submitEditRetirement.click();

//     // Wait for the alert to be present
//     await driver.wait(until.alertIsPresent());

//     // Switch to the alert
//     const alert = await driver.switchTo().alert();

//     // Get the text of the alert
//     const alertText = await alert.getText();

//     // Assert that the alert text contains the expected value
//     expect(alertText).to.include("Retirement Edited!");

//     // Accept the alert (dismiss can be used if it's a confirmation dialog)
//     await alert.accept();

//     const annualSavingGoalFinal = await driver
//       .findElement(By.id("edit_annual_saving_goal_display"))
//       .getText();
//     const yearsToRetirementFinal = await driver
//       .findElement(By.id("edit_years_to_retirement_display"))
//       .getText();

//     expect(annualSavingGoalFinal.toString()).to.not.equal(
//       annualSavingGoalOriginal.toString()
//     );
//     expect(yearsToRetirementFinal.toString()).to.not.equal(
//       yearsToRetirementOriginal.toString()
//     );
//   });
// });

// describe("Delete retirement", function () {
//   this.timeout(100000); // Set timeout as 10 seconds

//   it("Delete retirement and show the updated table", async () => {
//     await driver.get(
//       "http://localhost:" +
//         server.address().port +
//         "/instrumented/retirement.html"
//     );

//     const tableBefore = await driver.findElement(By.tagName("table"));
//     const rowsBefore = await tableBefore.findElements(By.tagName("tr"));
//     const beforeCount = rowsBefore.length;

//     const deleteIcon = await driver.findElement(By.id("delete_icon"));
//     await deleteIcon.click();

//     // Wait for a short duration to allow the deleteRetirement function to complete
//     await driver.sleep(3000); // Adjust the duration as needed

//     // Wait for the table to be updated
//     await driver.wait(until.elementLocated(By.tagName("table")), 3000);

//     const tableUpdated = await driver.findElement(By.tagName("table"));
//     const rowsUpdated = await tableUpdated.findElements(By.tagName("tr"));
//     const afterCount = rowsUpdated.length;

//     expect(afterCount).to.equal(beforeCount - 1);
//   });
// });

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

// after(async function () {
//   await driver.quit();
//   process.exit(0); // Exit with success code
// });
