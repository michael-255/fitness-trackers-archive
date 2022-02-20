import defaultWorkouts from './default-workouts'

describe('Utility > get-default-workouts', () => {
  test('defaultWorkouts matches defaults object', () => {
    expect(defaultWorkouts).toMatchObject([
      { name: 'Cardio Day' },
      { name: 'Chest Day' },
      { name: 'Back Day' },
      { name: 'Arms & Shoulders Day' },
      { name: 'Legs & Core Day' },
    ])
  })
})
