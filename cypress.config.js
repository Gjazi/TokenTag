const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "najuig",
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
  
  "viewportWidth": 1920,
  "viewportHeight": 1080
  
});
