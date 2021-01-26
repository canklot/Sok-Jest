import TestComponent from '../components/Aktuelurunler.vue'
import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'

/* Vue.use(Vuetify) */

test('mount a vue component', () => {
    const wrapper = mount(TestComponent
    )
    expect(wrapper).toMatchSnapshot()
  })

/*   pass */