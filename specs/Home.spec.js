import TestComponent from '../pages/Home.vue'
import { mount } from '@vue/test-utils'

test('mount a vue component', () => {
    const wrapper = mount(TestComponent,{ 
      propsData: {
      }
    })
    expect(wrapper).toMatchSnapshot()
  })