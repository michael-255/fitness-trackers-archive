module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Class(es) name:',
    validate(value) {
      if (!value.length) {
        return 'Class(es) must have a name.'
      }
      return true
    },
  },
]
