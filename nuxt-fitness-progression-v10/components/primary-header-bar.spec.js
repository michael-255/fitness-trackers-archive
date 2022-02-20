import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import PrimaryHeaderBar from './primary-header-bar'

const localVue = createLocalVue()
let wrapper

beforeEach(() => {
  const vuetify = new Vuetify()
  wrapper = mount(PrimaryHeaderBar, {
    mocks: {
      $store: {
        dispatch: jest.fn(),
      },
    },
    localVue,
    vuetify,
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Component > primary-header-bar', () => {
  test('matches the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('toggleNavDrawer method dispatches correct action', () => {
    const spyDispatch = jest.spyOn(wrapper.vm.$store, 'dispatch')
    const action = 'ui/toggleNavDrawer'
    wrapper.vm.toggleNavDrawer()
    expect(spyDispatch).toHaveBeenCalledWith(action)
  })
})
