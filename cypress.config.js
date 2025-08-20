const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    endpoint_login_url: '/login',
    endpoind_products_url: '/products',
    endpoind_view_cart: '/view_cart',
  },
  e2e: {
    defaultCommandTimeout: 5000,
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // on('<event>', (arg1, arg2) => {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        // plugin stuff here
        if (browser.name === 'chrome') {
          // auto open devtools
          launchOptions.args.push('--incognito');
        }
        return launchOptions;
      });
    },
  },
});
