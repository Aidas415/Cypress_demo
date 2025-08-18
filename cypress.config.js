const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 12000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
