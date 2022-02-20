---
to: "components/<%= h.changeCase.kebab(name).toLowerCase().slice(0, 5) === 'base-' ? '_' : '' %><%= h.changeCase.kebab(name) %>.spec.js"
---
<%
  let fileName = h.changeCase.kebab(name).toLowerCase()
  const importName = h.changeCase.pascal(fileName)

  if (fileName.slice(0, 5) === 'base-') {
    fileName = '_' + fileName
  }
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

describe('Component > <%= fileName %>', () => {
  test('matches the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
