import Vuex from 'vuex'
import Vue from 'vue'
import { mount, createLocalVue } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'

import KampanyalarB from '../components/KampanyalarB.vue'
import saladStore from '../store/store.js'

/* const VueWithVuex = createLocalVue()
VueWithVuex.use(Vuex) */

Vue.use(Vuex)

test('store is loaded ', () => {
  const store = new Vuex.Store(saladStore)
  const wrapper = mount(KampanyalarB, {
    store
  })
  
  store.state.salad.push('cucumber')

  console.log("looooooooooooooooooooog")
  /* console.log(store.state.salad) */
  
  expect(store.state.salad).toEqual(["saaaaaaaaaaaaalad",'cucumber'])
})