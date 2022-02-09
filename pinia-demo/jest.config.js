// jest.config.js
module.exports = {
    moduleFileExtensions: [
      'js',
      'ts',
      'json',
      'vue'
    ],
    transform: {
       '^.+\\.ts$': 'ts-jest',
      '^.+\\.vue$': '@vue/vue3-jest'
    },
    "testEnvironment": "jsdom"
    // globals: {
    //   'vue-jest': {
    //     compilerOptions: {
    //       isCustomElement: (tag) => tag.startsWith('b-button'),
    //     },
    //   },
    // }
  }