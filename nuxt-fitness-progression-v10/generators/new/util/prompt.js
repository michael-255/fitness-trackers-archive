module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Utility name:',
    validate(value) {
      if (!value.length) {
        return 'Utilities must have a name.'
      }
      return true
    },
  },
]
