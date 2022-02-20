module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Page name:',
    validate(value) {
      if (!value.length) {
        return 'Components must have a name.'
      }
      return true
    },
  },
  {
    type: 'confirm',
    name: 'useStyles',
    initial: false,
    message: 'Include <style> block?',
  },
]
