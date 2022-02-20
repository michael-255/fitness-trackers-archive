# TEST

This directory contains your test setup, configuration files, and component stubs.

[Jest Documenation](https://jestjs.io/)

## setup.js

This configures Jest with your custom matchers and component stubs.

## matchers.js

You can add your own custom test matchers in this file.

## Testing Notes

Use spys, and spys calling `jest.fn()` when you are able.

```javascript
//...

mocks: {
  $router: {
    push: jest.fn()
  }
}

//...

describe('Test Suite', () => {
  test('Single test', () => {
    const spyMethod = jest.spyOn(wrapper.vm.$router, 'push')
    expect(spyMethod).toHaveBeenCalled()
  })
})

//...
```
