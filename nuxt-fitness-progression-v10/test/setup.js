import Vue from 'vue'
import Vuetify from 'vuetify'
import { config } from '@vue/test-utils'
import EmptyStub from './stubs/empty-stub'
import LinkStub from './stubs/link-stub'
import NoSSRStub from './stubs/no-ssr-stub'
import CustomMatchers from './matchers'

Vue.use(Vuetify)

// https://facebook.github.io/jest/docs/en/expect.html#expectextendmatchers
expect.extend(CustomMatchers)

// Mock Nuxt components
config.stubs.nuxt = EmptyStub
config.stubs['router-link'] = LinkStub
config.stubs.RouterLink = LinkStub
config.stubs['nuxt-link'] = LinkStub
config.stubs.NuxtLink = LinkStub
config.stubs['no-ssr'] = NoSSRStub
