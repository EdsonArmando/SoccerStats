const os = require('os');
const chromeHeadlessSupported = os.platform() !== 'win32' || Number((os.release().match(/^(\d+)/) || ['0', '0'])[1]) >= 10;
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browserNoActivityTimeout: 30000,
    browsers: [
      chromeHeadlessSupported ? 'ChromeHeadless' : 'Chrome'
    ],
    customLaunchers: {
      ChromeHeadless: {
          base: 'Chrome',
          flags: ['--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222']
      }
    },
    singleRun: true
  });
};
