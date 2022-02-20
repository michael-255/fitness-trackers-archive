module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Service name:',
    validate(value) {
      if (!value.length) {
        return 'Services must have a name.'
      }
      return true
    },
  },
]
