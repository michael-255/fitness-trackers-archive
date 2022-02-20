import ACTIVITY_CATEGORY from '../constants/activity-category'
import defaultCategories from './default-categories'

describe('Utility > default-categories', () => {
  test('defaultCategories matches defaults object', () => {
    expect(defaultCategories).toMatchObject([
      { name: ACTIVITY_CATEGORY.back },
      { name: ACTIVITY_CATEGORY.biceps },
      { name: ACTIVITY_CATEGORY.cardio },
      { name: ACTIVITY_CATEGORY.chest },
      { name: ACTIVITY_CATEGORY.compound },
      { name: ACTIVITY_CATEGORY.core },
      { name: ACTIVITY_CATEGORY.event },
      { name: ACTIVITY_CATEGORY.legs },
      { name: ACTIVITY_CATEGORY.misc },
      { name: ACTIVITY_CATEGORY.shoudlers },
      { name: ACTIVITY_CATEGORY.triceps },
    ])
  })
})
