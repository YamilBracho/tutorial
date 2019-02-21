// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
	// browsers: ['ChromeHeadlessNoSandbox'],
	  // customLaunchers: {
	    // ChromeHeadlessNoSandbox: {
	      // base: 'ChromeHeadless',
	      // flags: [
	      //  '--headless',
	      //  '--disable-gpu',
	      // '--no-sandbox',
	      // '--remote-debugging-port=9222'
	      // ]
	    // }
	// },	
	browsers: ['ChromeHeadless'],
	   customLaunchers: {
	     ChromeHeadless: {
	      // base: 'ChromeHeadless',
	       flags: [
	        '--headless',
	      //  '--disable-gpu',
	       '--no-sandbox',
	      // '--remote-debugging-port=9222'
	       ]
	     }
	 },	
	
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage/tutorial'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};

