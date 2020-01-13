const failFast = require("jasmine-fail-fast");

if (process.argv.includes("--bail")) {
  const jasmineEnv = jasmine.getEnv();
  jasmineEnv.addReporter(failFast.init());
}
