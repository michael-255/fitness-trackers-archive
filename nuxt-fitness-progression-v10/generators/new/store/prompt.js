module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Vuex Store Module name:',
    validate(value) {
      if (!value.length) {
        return 'Vuex store modules must have a name.'
      }
      return true
    },
  },
]
