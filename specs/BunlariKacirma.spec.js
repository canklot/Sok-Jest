import TestComponent from '../components/BunlariKacirma.vue'
import { mount } from '@vue/test-utils'

test('snapshot kontrolu', () => {
    const wrapper = mount(TestComponent)
    expect(wrapper).toMatchSnapshot()
  })

 /*  urun sayisini say */
 test('mount a vue component', () => {
  const wrapper = mount(TestComponent)
  const lis = wrapper.findAll('div.urun');  /* kactane oldugunu sayiyor */
  expect(lis.length).toBe(6);
})

 