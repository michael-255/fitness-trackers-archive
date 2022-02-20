// See these docs for details on Jest's matcher utils:
// https://facebook.github.io/jest/docs/en/expect.html#thisutils

const CustomMatchers = {
  // This matcher is here as a simple example
  toBeAnExample(exampleString) {
    if (isAnExample()) {
      return {
        message: () =>
          `expected ${this.utils.printReceived(
            exampleString
          )} not to be an example`,
        pass: true,
      }
    } else {
      return {
        message: () =>
          `expected ${this.utils.printReceived(
            exampleString
          )} to be an example`,
        pass: false,
      }
    }

    function isAnExample() {
      return exampleString === 'example'
    }
  },
}

export default CustomMatchers
