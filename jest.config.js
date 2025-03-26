export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    "^storage/(.*)$": "<rootDir>/src/storage/$1",
    "^typings/(.*)$": "<rootDir>/src/typings/$1",
    "^hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^services/(.*)$": "<rootDir>/src/services/$1",
    "^utils/(.*)$": "<rootDir>/src/utils/$1",
  },
};
