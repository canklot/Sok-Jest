import UyeGiris from '../pages/exercise-2';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';

test('Giris yapmadan devam et tusu calisiyor mu', async () => {
  const wrapper = mount(UyeGiris);
  const form = wrapper.find('form'); /* form elementini bul */
  const input = form.find('Giriş yapmadan devam et'); /* Girisyapi bul tikla */
  form.trigger('submit');
  await nextTick();
  expect(wrapper).toMatchSnapshot();
});
