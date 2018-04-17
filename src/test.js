
const testContext = require.context('./lib', true, /\.spec\.js/);
testContext.keys().forEach(testContext);
