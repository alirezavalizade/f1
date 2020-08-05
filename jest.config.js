module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**'
  ],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^@components(.*)$': '<rootDir>/components$1',
    '^@theme(.*)$': '<rootDir>/theme$1',
    '^@client(.*)$': '<rootDir>/client$1',
    '^@contexts(.*)$': '<rootDir>/contexts$1'
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js']
};
