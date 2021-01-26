import TestComponent from '../components/GirisYapB.vue'
import { mount, RouterLinkStub } from "@vue/test-utils";
import UyeGiris from '../pages/exercise-2';
import { nextTick } from 'vue';


test('Giris yapmadan devam et tusu calisiyor mu', async () => {
  const wrapper = mount(UyeGiris);
  const form = wrapper.find('form'); /* form elementini bul */
  const input = form.find('Giriş yapmadan devam et'); /* Girisyapi bul tikla */
  form.trigger('submit');
  await nextTick();
  expect(wrapper).toMatchSnapshot();
});

test('mount a vue component', () => {
    const wrapper = mount(TestComponent,{ 
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
