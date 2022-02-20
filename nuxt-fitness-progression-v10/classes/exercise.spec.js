import Exercise from './exercise'

describe('Class(es) > exercise', () => {
  test('Exercise has correct defaults', () => {
    const object = new Exercise()
    expect(object).toMatchObject({
      name: null,
      category: null,
      description: null,
      showDesc: true,
      hasConfirmation: true,
      hasSets: true,
      hasDuration: true,
      hasDistance: true,
      hasWeight: true,
      hasReps: true,
      hasNotes: true,
    })
  })
})
