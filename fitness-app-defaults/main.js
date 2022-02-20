import DefaultsGenerator from './classes/DefaultsGenerator.js'

// Exercise Generation
const defaults = new DefaultsGenerator()

console.log('--- Defaults ---')
console.log('--Exercises:', defaults.exercises.items.length)
console.log('--Workouts:', defaults.workouts.items.length)
console.log('--First Exercise:', defaults.exercises.items[0])
console.log('--First Workout:', defaults.workouts.items[0])

defaults.createJsonFile()
