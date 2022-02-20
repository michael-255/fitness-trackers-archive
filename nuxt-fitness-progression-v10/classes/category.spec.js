import Category from './category'

describe('Class(es) > category', () => {
  test('Category has correct defaults', () => {
    const object = new Category()
    expect(object).toMatchObject({
      name: null,
      description: null,
    })
  })
})
