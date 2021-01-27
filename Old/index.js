import TestComponent from '../pages/index.vue'
import { mount } from '@vue/test-utils'

test('mount a vue component', () => {
    const wrapper = mount(TestComponent)
    expect(wrapper).toMatchSnapshot()
  })