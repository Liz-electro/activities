const {defineConfig} = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 15000,
    baseUrl: 'https://app.pipedrive.com/',
    chromeWebSecurity: false,
    screenshotOnRunFailure: false
  }
});
