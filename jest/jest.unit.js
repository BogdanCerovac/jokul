const config = require("./jest.core");

module.exports = {
    ...config,
    testMatch: ["**/*.test.+(ts|tsx|js)"],
    setupFilesAfterEnv: ["./setupTests.ts"],
};
