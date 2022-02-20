import Workout from './workout'

describe('Class(es) > workout', () => {
  test('Workout has correct defaults', () => {
    const object = new Workout()
    expect(object).toMatchObject({
      name: null,
      description: null,
      showDesc: true,
      exerciseIds: [],
    })
  })
})
