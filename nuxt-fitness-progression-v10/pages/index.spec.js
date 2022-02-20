import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import VueMeta from 'vue-meta'
import PAGE_HEAD from '../constants/page-head'
import IndexPage from './index'

const localVue = createLocalVue()
localVue.use(VueMeta, { keyName: 'head' })

let wrapper

beforeEach(() => {
  const vuetify = new Vuetify()
  wrapper = mount(IndexPage, {
    localVue,
    vuetify,
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Page > index', () => {
  test('matches the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('has correct <head> content', () => {
    expect(wrapper.vm.$metaInfo.title).toBe(PAGE_HEAD.welcome.title)
    const descriptionMeta = wrapper.vm.$metaInfo.meta.find(
      (item) => item.hid === 'description'
    )
    expect(descriptionMeta.content).toBe(PAGE_HEAD.welcome.description)
  })
})
