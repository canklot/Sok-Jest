import TestComponent from '../pages/test'
import List from '../pages/list'

import { mount } from '@vue/test-utils'

test('mount a vue component', () => {
  const wrapper = mount(TestComponent,{ 
    propsData: {
      value: 'VueSchool'
    }
  })
  expect(wrapper).toMatchSnapshot()
})

test('ListComponent', () => {
  const wrapper = mount(List)
  const movies = wrapper.vm.marvelMovies
  wrapper.setData({ marvelMovies: [...movies, 'Endgame' ]})
  expect(wrapper).toMatchSnapshot()
})
