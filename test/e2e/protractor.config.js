// protractor.config.js
/*
* Defines protractor configuration for end-to-end tests
* */

exports.config = {
  framework: 'mocha',
  directConnect: true,
  specs: [],
  suites: {
    smoke:      'spec/smoke/*.spec.js',
    nav:        'spec/drawer/*.spec.js',
    responsive: 'spec/responsive/*.spec.js',
    toast:      'spec/toast/*.spec.js',
  },
  capabilities: {
    'browserName': 'chrome' // chrome or firefox ... directConnect doesn't support safari
  },
  mochaOpts: {
    ui: 'bdd',
    reporter: 'list',
    timeout: '10000'
  }
}
