import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import NavDrawerListItem from './nav-drawer-list-item'

const localVue = createLocalVue()
let wrapper

beforeEach(() => {
  const vuetify = new Vuetify()
  wrapper = mount(NavDrawerListItem, {
    propsData: {
      route: '/',
      icon: 'person',
      name: 'Hello',
    },
    localVue,
    vuetify,
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Component > nav-drawer-list-item', () => {
  test('matches the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('route prop is a required string', () => {
    expect(NavDrawerListItem.props.route).toMatchObject({
      type: String,
      required: true,
    })
  })

  test('icon prop is a required string', () => {
    expect(NavDrawerListItem.props.icon).toMatchObject({
      type: String,
      required: true,
    })
  })

  test('name prop is a required string', () => {
    expect(NavDrawerListItem.props.name).toMatchObject({
      type: String,
      required: true,
    })
  })

  test('route prop can recieve a value', () => {
    const value = '/example'
    wrapper.setProps({ route: value })
    expect(wrapper.props().route).toBe(value)
  })

  test('icon prop can recieve a value', () => {
    const value = 'group'
    wrapper.setProps({ icon: value })
    expect(wrapper.props().icon).toBe(value)
  })

  test('name prop can recieve a value', () => {
    const value = 'Test Name'
    wrapper.setProps({ name: value })
    expect(wrapper.props().name).toBe(value)
  })
})
