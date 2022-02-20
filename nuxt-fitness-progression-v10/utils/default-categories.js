import ACTIVITY_CATEGORY from '../constants/activity-category'
import Category from '../classes/category'

const defaultCategories = (function () {
  console.log('Generating default Categories...')

  return [
    new Category({ name: ACTIVITY_CATEGORY.back }),
    new Category({ name: ACTIVITY_CATEGORY.biceps }),
    new Category({ name: ACTIVITY_CATEGORY.cardio }),
    new Category({ name: ACTIVITY_CATEGORY.chest }),
    new Category({ name: ACTIVITY_CATEGORY.compound }),
    new Category({ name: ACTIVITY_CATEGORY.core }),
    new Category({ name: ACTIVITY_CATEGORY.event }),
    new Category({ name: ACTIVITY_CATEGORY.legs }),
    new Category({ name: ACTIVITY_CATEGORY.misc }),
    new Category({ name: ACTIVITY_CATEGORY.shoudlers }),
    new Category({ name: ACTIVITY_CATEGORY.triceps }),
  ]
})()

export default defaultCategories
