module.exports = {
  verbose: true,
  collectCoverage: true,
  
  
  roots: ["<rootDir>", "<rootDir>/specs/"],
  moduleFileExtensions: ["js", "vue"],
  moduleNameMapper: {
    /* '^@/(.*)$': '<rootDir>/pages/$1', */
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "vue-jest"
  },
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"]
};
