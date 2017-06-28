// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

var webpackConfig = require('../../build/webpack.test.conf')

module.exports = function (config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    // plugins: ['karma-chrome-launcher'],
    // browsers: ['PhantomJS'],
    browsers: ['ChromeHeadless_without_security'],
    frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
    reporters: ['spec', 'coverage'],
    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    customLaunchers: {
      Chrome_without_security: {
        base: 'Chrome',
        flags: [
          '--disable-web-security',
          '--headless',
          '--disable-gpu',
          '--remote-debugging-port=9222'
        ]
      },
      ChromeHeadless_without_security: {
        base: 'ChromeHeadless',
        flags: ['--disable-web-security']
      }
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })
}
