import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import EmptyStub from '../test/stubs/empty-stub'
import PrimaryHeaderNavLayout from './primary-header-nav'

const localVue = createLocalVue()

let wrapper

beforeEach(() => {
  const vuetify = new Vuetify()
  wrapper = mount(PrimaryHeaderNavLayout, {
    stubs: {
      PrimaryHeaderBar: EmptyStub,
      NavDrawer: EmptyStub,
    },
    localVue,
    vuetify,
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Layout > header-nav', () => {
  test('matches the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
