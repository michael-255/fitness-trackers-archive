import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import EmptyStub from '../test/stubs/empty-stub'
import NavDrawer from './nav-drawer'

const localVue = createLocalVue()
let wrapper

beforeEach(() => {
  const vuetify = new Vuetify()
  wrapper = mount(NavDrawer, {
    stubs: {
      NavDrawerListItem: EmptyStub,
    },
    mocks: {
      $store: {
        dispatch: jest.fn(),
        state: {
          ui: {
            navDrawer: false,
          },
        },
      },
    },
    localVue,
    vuetify,
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Component > nav-drawer', () => {
  test('matches the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('navDrawer computed get() returns correct values', () => {
    let value = true
    wrapper.vm.$store.state.ui.navDrawer = value
    expect(wrapper.vm.navDrawer).toBe(value)

    value = false
    wrapper.vm.$store.state.ui.navDrawer = value
    expect(wrapper.vm.navDrawer).toBe(value)
  })

  test('navDrawer computed set() dispatches action with correct values', () => {
    const spyDispatch = jest.spyOn(wrapper.vm.$store, 'dispatch')
    const action = 'ui/setNavDrawer'

    let payload = true
    wrapper.vm.navDrawer = payload
    expect(spyDispatch).toHaveBeenCalledWith(action, payload)

    payload = false
    wrapper.vm.navDrawer = payload
    expect(spyDispatch).toHaveBeenCalledWith(action, payload)
  })
})
