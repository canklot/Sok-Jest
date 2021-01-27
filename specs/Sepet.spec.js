import  Sepetim from '../pages/sepet'
import { mount } from '@vue/test-utils'


test('sepete urun ekler DOM', () => {
  const wrapper = mount(Sepetim)

  const input = wrapper.find('input')
  const button = wrapper.find('button')
  expect(wrapper.findAll('li').length).toBe(0) /* sepet boş mu bakıyor */

  input.element.value = 'banana'
  input.trigger('input') /* sepete banana ekliyor */
  expect(wrapper.vm.fruit).toBe('banana')

  button.trigger('click')
  expect(wrapper.vm.fruit).toBe('')
  expect(wrapper.vm.basket).toEqual(expect.arrayContaining(['banana']))  /* Sepette banana var mı bak */
  /* console.log(wrapper)
  expect(wrapper.findAll('li').length).toBe(0)/*  1 */ 



})
