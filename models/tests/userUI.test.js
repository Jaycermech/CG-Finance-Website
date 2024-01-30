const { app } = require("../index");
const { Builder, By, until } = require("selenium-webdriver");
const { describe, it, before, afterEach, after } = require("mocha");
const { expect } = require("chai");
const chrome = require("selenium-webdriver/chrome");
const fs = require("fs").promises;

const chromeOptions = new chrome.Options();
chromeOptions.addArguments("--headless");
const driver = new Builder()
  .forBrowser("chrome")
  .setChromeOptions(chromeOptions)
  .build();

var server;
var counter = 0;

before(async function () {
  server = await new Promise((resolve) => {
    server = app.listen(0, "localhost", () => {
      resolve(server);
    });
  });
});

describe("Testing Register UI", function () {
  this.timeout(100000);
  it("Should have the correct title", async function () {
    await driver.get(
      "http://localhost:" + server.address().port + "/instrumented/index.html"
    );
    const title = await driver.getTitle();
    expect(title).to.equal("Login Page");
  });

  it("Should navigate to the Registration Page", async function () {
    // this.timeout(200000);

    // Click the "New user? Register here" link
    const registrationLink = await driver.findElement(
      By.linkText("New user? Register here")
    );
    await registrationLink.click();

    // Verify that the page navigated to the Registration Page
    const title = await driver.getTitle();
    expect(title).to.equal("Registration Page");
  });

  it("Should register", async function () {
    // this.timeout(10000); // Increased overall timeout

    // Navigate to the registration page
    await driver.get(
      "http://localhost:" +
        server.address().port +
        "/instrumented/register.html"
    );

    // Locate email and password elements
    const emailElement = await driver.findElement(By.id("email"));
    const passwordElement = await driver.findElement(By.id("password"));

    // Input values for email and password
    await emailElement.click();
    await emailElement.sendKeys("paul@gmail.com");

    await passwordElement.click();
    await passwordElement.sendKeys("password"); // Replace with your desired password
    // this.timeout(10000);
    // Click the 'Register' button
    const registerButton = await driver.findElement(By.id("register_submit"));
    await registerButton.click();
  });
});

console.log("HELLO ARE U RUNNIGN HERE");

// describe("Testing Login UI", function () {
//   it("Should have the correct title", async function () {
//     this.timeout(10000);
//     await driver.get(
//       "http://localhost:" + server.address().port + "/instrumented/index.html"
//     );
//     const title = await driver.getTitle();
//     expect(title).to.equal("Login Page");
//   });
//   it("Should show alert for invalid email format", async function () {
//     // Your existing setup code for login page navigation

//     const emailElement = await driver.findElement(By.id("email"));
//     const passwordElement = await driver.findElement(By.id("password"));

//     await emailElement.sendKeys("invalid-email");
//     await passwordElement.sendKeys("password");

//     const loginButton = await driver.findElement(By.id("loginBtn"));
//     await loginButton.click();

//     // Assert that an alert is displayed with the expected message
//     const alertText = await driver.switchTo().alert().getText();
//     expect(alertText).to.equal('Invalid email format! Please include "@" in your email.');
//     await driver.switchTo().alert().accept(); // Close the alert
//   });

//   it("Should clear textboxes when Reset is clicked", async function () {
//     this.timeout(10000);
//     await driver.get(
//       "http://localhost:" + server.address().port + "/instrumented/index.html"
//     );

//     const emailElement = await driver.findElement(By.id("email"));
//     await emailElement.click();
//     await emailElement.sendKeys("paul@gmail.com");

//     const passwordElement = await driver.findElement(By.id("password"));
//     await passwordElement.click();
//     await passwordElement.sendKeys("123456");
//     const resetButton = await driver.findElement(By.id("resetBtn"));
//     await resetButton.click();

//     const emailText = await emailElement.getAttribute("value");
//     const passwordText = await passwordElement.getAttribute("value");

//     expect(emailText).to.equal("");
//     expect(passwordText).to.equal("");
//     const emailElement1 = await driver.findElement(By.id("email"));
//     await emailElement1.click();
//     await emailElement1.sendKeys("paul@gmail.com");

//     const passwordElement1 = await driver.findElement(By.id("password"));
//     await passwordElement1.click();
//     await passwordElement1.sendKeys("password");
//     // Click the 'Login' button'
//     const loginButton = await driver.findElement(By.id("loginBtn"));
//     await loginButton.click();
//   });
// });
describe("Testing Edit UI", function () {
  this.timeout(10000);
  //   it("Should have the correct title", async function () {
  //     await driver.get(
  //       "http://localhost:" + server.address().port + "/instrumented/home.html"
  //     );
  //     const title = await driver.getTitle();
  //     expect(title).to.equal("Finance Website");
  //   });
  //   it("Should have navigate to Profile page", async function () {
  //     // this.timeout(10000);
  //     await driver.get(
  //       "http://localhost:" + server.address().port + "/instrumented/profile.html"
  //     );
  //     const profileTitle = await driver.getTitle();
  //     expect(profileTitle).to.equal("User Management");

  //     const profileHeading = await driver.findElement(By.tagName("h2")).getText();
  //     expect(profileHeading).to.equal("Edit User");
  //   });
  // it("Should enter user informations and edit", async function () {
  //   // this.timeout(10000);
  //   await driver.get(
  //     "http://localhost:" + server.address().port + "/instrumented/profile.html"
  //   );
  //   const emailElement1 = await driver.findElement(By.id("newEmail"));
  //   await emailElement1.click();
  //   await emailElement1.sendKeys("paul1@gmail.com");
  //   const passwordElement1 = await driver.findElement(By.id("newPassword"));
  //   await passwordElement1.click();
  //   await passwordElement1.sendKeys("password");

  //   const confirmNewPasswordElement1 = await driver.findElement(
  //     By.id("confirmNewPassword")
  //   );
  //   await confirmNewPasswordElement1.click();
  //   await confirmNewPasswordElement1.sendKeys("password1");
  //   const editbutton = await driver.findElement(
  //     By.xpath('//button[text()="Edit User"]')
  //   );
  //   await editbutton.click();
  // });

  //     it("Should have ", async function () {
  //       this.timeout(10000);
  //       // Logout: Click the 'Log Out' button
  //       const logoutButton = await driver.findElement(By.id("logoutBtn"));
  //       await logoutButton.click();
  //   });
  //   it("Shoul Login user", async function () {
  //     this.timeout(10000);
  //     await driver.get(
  //       "http://localhost:" + server.address().port + "/instrumented/index.html"
  //     );
  //     const emailElement1 = await driver.findElement(By.id("email"));
  //     await emailElement1.click();
  //     await emailElement1.sendKeys("jovan@gmail.com");

  //     const passwordElement1 = await driver.findElement(By.id("password"));
  //     await passwordElement1.click();
  //     await passwordElement1.sendKeys("shucks");
  //     // Click the 'Login' button'
  //     const loginButton = await driver.findElement(By.id("loginBtn"));
  //     await loginButton.click();
  //   });

  //   it("Shoul delete user", async function () {
  //     this.timeout(10000);
  //     await driver.get(
  //       "http://localhost:" + server.address().port + "/instrumented/profile.html"
  //     );
  //     const deletebtn = await driver.findElement(
  //       By.xpath('//button[text()="Delete User"]')
  //     );
  //     await deletebtn.click();
  //   });
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
  await server.close();
  process.exit(0);
});
