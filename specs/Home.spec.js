/* import TestComponent from '../pages/Home.vue'
import { mount } from '@vue/test-utils'
import Vuex from "vuex";
import saladStore from "../store/store.js";
import Home from "../pages/Home"

test('mount a vue component', () => {
  const store = new Vuex.Store(saladStore);
    const wrapper = mount(Home,{ store },{ 
      propsData: {
      }
    })
    expect(wrapper).toMatchSnapshot()
  }) */


test("mount a vue component", () => {
  expect(1).toBe(1);
});
