---
to: "pages/<%= h.changeCase.kebab(name).toLowerCase().slice(0, 5) === 'base-' ? '_' : '' %><%= h.changeCase.kebab(name) %>.spec.js"
---
<%
  const fileName = h.changeCase.kebab(name).toLowerCase()
  const importName = h.changeCase.pascal(fileName) + 'Page'
%>
import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import VueMeta from 'vue-meta'
import PAGE_HEAD from '../constants/page-head'
import <%= importName %> from './<%= fileName %>'

const localVue = createLocalVue()
localVue.use(VueMeta, { keyName: 'head' })
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

describe('Page > <%= fileName %>', () => {
  test('matches the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('has correct <head> content', () => {
    expect(wrapper.vm.$metaInfo.title).toBe(PAGE_HEAD.app.title)
    const descriptionMeta = wrapper.vm.$metaInfo.meta.find(
      (item) => item.hid === 'description'
    )
    expect(descriptionMeta.content).toBe(PAGE_HEAD.app.description)
  })
})
