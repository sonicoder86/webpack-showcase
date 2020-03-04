'use strict';

module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],

    files: [
      { pattern: 'src/test.js' }
    ],

    preprocessors: {
      'src/test.js': ['webpack']
    },

    webpack: {
      ...require('./webpack.config'),
      mode: 'development'
    },

    reporters: ['dots'],

    browsers: ['ChromeHeadless']
  });
};
