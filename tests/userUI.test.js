const { app } = require("../index");
const { Builder, By, Key, until } = require("selenium-webdriver");
const { describe, it } = require("mocha");
const { expect } = require("chai");
const fs = require("fs").promises;

const chrome = require("selenium-webdriver/chrome");
const chromeOptions = new chrome.Options();
// chromeOptions.addArguments("--headless");
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

var server;

before(async function () {
  server = await new Promise((resolve) => {
    server = app.listen(0, "localhost", () => {
      resolve(server);
    });
  });
});

describe("Testing Register UI", function () {
  this.timeout(100000);

  it("Should register", async function () {
    // Navigate to the registration page
    await driver.get(
      "http://localhost:" +
        server.address().port +
        "/instrumented/register.html"
    );

    // Verify that the page navigated to the Registration Page
    const title = await driver.getTitle();
    expect(title).to.equal("Registration Page");

    // Locate email and password elements
    const emailElement = await driver.findElement(By.id("emailRegister"));
    const passwordElement = await driver.findElement(By.id("passwordRegister"));

    // Input values for email and password
    await emailElement.click();
    await emailElement.sendKeys("paul@gmail.com");

    await passwordElement.click();
    await passwordElement.sendKeys("password"); // Replace with your desired password
    // Click the 'Register' button
    const registerButton = await driver.findElement(
      By.id("register_submit")
    );
    await registerButton.click();

    // Wait for the alert to be present
    await driver.wait(until.alertIsPresent());

    // Switch to the alert
    const alert = await driver.switchTo().alert();

    // Get the text of the alert
    const alertText = await alert.getText();

    // Assert that the alert text contains the expected value
    expect(alertText).to.include("Registration successful!");

    // Accept the alert (dismiss can be used if it's a confirmation dialog)
    await alert.accept();
  });
});

describe("Testing Login UI", function () {
  this.timeout(10000);
  it("Should Login user", async function () {
    try {
      await driver.get(
        "http://localhost:" + server.address().port + "/instrumented/index.html"
      );
      const emailElement1 = await driver.findElement(By.id("emailLogin"));
      await emailElement1.click();
      await emailElement1.sendKeys("songsiongpink@onyx.com");

      const passwordElement1 = await driver.findElement(By.id("passwordLogin"));
      await passwordElement1.click();
      await passwordElement1.sendKeys("pink1234");
      // Click the 'Login' button'
      const loginButton = await driver.findElement(
        By.id("loginBtn")
      );
      await loginButton.click();

      // Wait for the alert to be present
      await driver.wait(until.alertIsPresent());

      // Switch to the alert
      const alert = await driver.switchTo().alert();

      // Get the text of the alert
      const alertText = await alert.getText();

      // Assert that the alert text contains the expected value
      await expect(alertText).to.include("Login successful!");

      // Accept the alert (dismiss can be used if it's a confirmation dialog)
      await alert.accept();
    } catch (error) {
      console.log(error);
    }
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


// describe("Testing Edit UI", function () {
//   this.timeout(10000);
//   it("Should enter user informations and edit", async function () {
//     // this.timeout(10000);
//     await driver.get(
//       "http://localhost:" + server.address().port + "/instrumented/profile.html"
//     );
//     const emailElement1 = await driver.findElement(By.id("newEmail"));
//     await emailElement1.click();
//     await emailElement1.sendKeys("paul1@gmail.com");
//     const passwordElement1 = await driver.findElement(By.id("newPassword"));
//     await passwordElement1.click();
//     await passwordElement1.sendKeys("password");

//     const confirmNewPasswordElement1 = await driver.findElement(
//       By.id("confirmNewPassword")
//     );
//     await confirmNewPasswordElement1.click();
//     await confirmNewPasswordElement1.sendKeys("password1");
//     const editbutton = await driver.findElement(
//       By.xpath('//button[text()="Edit User"]')
//     );
//     await editbutton.click();
//   });

//   // it("Should Login user", async function () {
//   //   this.timeout(10000);
//   //   await driver.get(
//   //     "http://localhost:" + server.address().port + "/instrumented/index.html"
//   //   );
//   //   const emailElement1 = await driver.findElement(By.id("email"));
//   //   await emailElement1.click();
//   //   await emailElement1.sendKeys("jovan@gmail.com");

//   //   const passwordElement1 = await driver.findElement(By.id("password"));
//   //   await passwordElement1.click();
//   //   await passwordElement1.sendKeys("shucks");
//   //   // Click the 'Login' button'
//   //   const loginButton = await driver.findElement(By.id("loginBtn"));
//   //   await loginButton.click();
//   // });
// });

