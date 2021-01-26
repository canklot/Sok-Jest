import Kategoriler from '../pages/exercise-1.vue';
import { mount } from '@vue/test-utils';
import { name } from 'faker';
import { nextTick } from 'vue';


test('Kategori seçini kontrol eder', async () => {
  const wrapper = mount(Kategoriler, {
    propsData: {
      kategori: "icecek"
    }
  });
  const lis = wrapper.findAll('li');
  const pickedName = lis.at(0).text(); /*  1.itemin yazısını getir */

  wrapper.find('input').setValue(pickedName);/*  input testi */

  await nextTick(); /* update etmesini bekle */

  const finalLi = wrapper.find('li');
  expect(finalLi.text()).toBe(pickedName);
});
