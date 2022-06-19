const {defineConfig} = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    env: {
      username: 'miroshnik.liza@gmail.com',
      password: 'biG3.6W8PsLdSFj'},
    baseUrl: 'https://app.pipedrive.com/',
    chromeWebSecurity: false
  }
});
