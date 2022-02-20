import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import VueMeta from 'vue-meta'
import PAGE_HEAD from '../constants/page-head'
import TestPage from './test'

const localVue = createLocalVue()
localVue.use(VueMeta, { keyName: 'head' })

let wrapper

beforeEach(() => {
  const vuetify = new Vuetify()
  wrapper = mount(TestPage, {
    localVue,
    vuetify,
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Page > test', () => {
  test('matches the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('has correct <head> content', () => {
    expect(wrapper.vm.$metaInfo.title).toBe(PAGE_HEAD.test.title)
    const descriptionMeta = wrapper.vm.$metaInfo.meta.find(
      (item) => item.hid === 'description'
    )
    expect(descriptionMeta.content).toBe(PAGE_HEAD.test.description)
  })
})
