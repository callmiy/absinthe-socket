module.exports = {
  collectCoverageFrom: [
    "src/**/*.ts*", //
    "!src/__tests__/**",
  ],
  testEnvironment: "jest-environment-jsdom-sixteen",
  testRegex: "src/__tests__/.+?\\.test\\.js?$",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  moduleFileExtensions: [
    "js", //
    "ts",
    "tsx",
    "json",
    "jsx",
    "node",
  ],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  watchPathIgnorePatterns: [
    "<rootDir>/node_modules*",
    "<rootDir>/package.json",
    "<rootDir>/compat/",
    "<rootDir>/dist",
    "<rootDir>/jest\\.config\\.js",
    "<rootDir>/coverage/",
  ],
  globals: {
    __PATH_PREFIX__: "",
  },
  // extraGlobals: ["Date"],
  roots: ["<rootDir>/src"],
};
