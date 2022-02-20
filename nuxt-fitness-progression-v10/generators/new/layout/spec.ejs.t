---
to: "layouts/<%= h.changeCase.kebab(name) %>.spec.js"
---
<%
  const fileName = h.changeCase.kebab(name).toLowerCase()
  const importName = h.changeCase.pascal(fileName) + 'Layout'
%>
import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import <%= importName %> from './<%= fileName %>'

const localVue = createLocalVue()
let wrapper

beforeEach(() => {
  const vuetify = new Vuetify()
  wrapper = mount(<%= importName %>, {
    stubs: {},
    propsData: {},
    mocks: {
      $store: {},
      $router: {},
      $route: {},
    },
    localVue,
    vuetify,
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Layout > <%= fileName %>', () => {
  test('matches the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
