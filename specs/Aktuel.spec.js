import TestComponent from '../components/AktuelUrunler.vue'
import { mount } from '@vue/test-utils'

test('mount a vue component', () => {
    const wrapper = mount(TestComponent,{ 
      propsData: {
        UrunAdi: 'ELEKTRİKLİ CAM SU ISITICI', /*  prop değişince sayfa değişiyor mu ekle */
        Marka: 'TEBA',
        Fiyat: '89,90'
      }
    })
    expect(wrapper).toMatchSnapshot()
  })