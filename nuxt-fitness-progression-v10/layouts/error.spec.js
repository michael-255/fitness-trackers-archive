import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import VueMeta from 'vue-meta'
import ErrorPage from './error'

// Error Page is stored in layouts by Nuxt convention
const localVue = createLocalVue()
localVue.use(VueMeta, { keyName: 'head' })

let wrapper

beforeEach(() => {
  const vuetify = new Vuetify()
  wrapper = mount(ErrorPage, {
    propsData: {
      error: null,
    },
    localVue,
    vuetify,
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Page > error', () => {
  test('matches the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('error prop is object that defaults to null', () => {
    expect(ErrorPage.props.error).toMatchObject({
      type: Object,
      default: null,
    })
  })

  test('error prop can recieve a value', () => {
    const object = { statusCode: 500 }
    wrapper.setProps({ error: object })
    expect(wrapper.props().error).toMatchObject(object)
  })
})
