
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
require('protractor/built/logger').Logger.logLevel = 1;
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    browserName: 'chrome',
    maxInstances: 2,
    // shardTestFiles: true  
  },
  specs: ['./src/FirstTestSpec.js'
    , './src/SecondTestSpec.js'
  ],

  SELENIUM_PROMISE_MANAGER: false,

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: false,

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 40000,
    isVerbose: true,
    includeStackTrace: true,
    print: function () {
    }
  },

  onPrepare: () => {
    browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      },
      summary: {
        displayDuration: true
      }
    }));
    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
      savePath: 'target/screenshots',
      takeScreenshots: true,
      takeScreenshotsOnlyOnFailures: true
    })

    )
  }

};
