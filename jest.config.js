module.exports = {
  setupFilesAfterEnv: ['<rootDir>/node_modules/@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  }
  // other Jest configurations...
};

// jest.config.js
