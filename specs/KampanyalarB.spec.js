import Vuex from "vuex";
import Vue from "vue";
import { mount, createLocalVue } from "@vue/test-utils";
import { shallowMount } from "@vue/test-utils";

import KampanyalarB from "../components/KampanyalarB.vue";
import Kampanya from "../components/Kampanya.vue";
import saladStore from "../store/store.js";

/* const VueWithVuex = createLocalVue()
VueWithVuex.use(Vuex) */

Vue.use(Vuex);

test("store is loaded ", () => {
  const store = new Vuex.Store(saladStore);
  const wrapper = mount(KampanyalarB, { store });

  /* store.state.salad.push('cucumber') */
  /* console.log("looooooooooooooooooooog");
  console.log(store.state.salad); */

  /* Store dan vuex ile çakilen veriyi kontrol ediyor */
  expect(store.state.salad).toEqual([
    "25 Tl ve üzeri alışverişinize SuperFresh Pizza King 780 gr sadece 12 TL ! Sepetiniz 25tl ve üzeri ise ürünü sepete eklediğinizde indirimli fiyat sepetinize otomatik yansır.",
    "25 Tl ve üzeri alışverişinize Lipton Altın Harman Demlik Poşet 100 lü sadece 14 TL ! Sepetiniz 25tl ve üzeri ise ürünü sepete eklediğinizde indirimli fiyat sepetinize",
    "Nescafe Gold 150 gr Nestle Çikolata 60 gr sadece 32,45 TL İkili özel paket!",
    "25 Tl ve üzeri alışverişinize SuperFresh Pizza King 780 gr sadece 12 TL ! Sepetiniz 25tl ve üzeri ise ürünü sepete eklediğinizde indirimli fiyat sepetinize otomatik yansır. ",
    "25 Tl ve üzeri alışverişinize Ülker Çokokrem Cam Kavanoz 650 gr sadece 14 TL ! Sepetiniz 25tl ve üzeri ise ürünü sepete eklediğinizde indirimli fiyat sepetinize otomatik",
    "25 Tl ve üzeri alışverişinize Loreal Kolajen Bakımı Günlük Bakım Kremi 50m sadece 25 TL ! Sepetiniz 25tl ve üzeri ise ürünü sepete eklediğinizde indirimli fiyat sepetinize",
    "25 Tl ve üzeri alışverişinize Loreal Kolajen Bakımı Günlük Bakım Kremi 50m sadece 25 TL ! Sepetiniz 25tl ve üzeri ise ürünü sepete eklediğinizde indirimli fiyat sepetinize",
    "25 Tl ve üzeri alışverişinize Activex Antibakteriyel Islak Havlu 2x56 Adet sadece 11 TL ! Sepetiniz 25tl ve üzeri ise ürünü sepete eklediğinizde indirimli fiyat sepetinize",
    "25 Tl ve üzeri alışverişinize Heinz Ketçap 700 Gr Mayonez 400 Gr sadece 19 TL ! Sepetiniz 25tl ve üzeri ise ürünü sepete eklediğinizde indirimli fiyat sepetinize otomatik"
  ]);
});

describe("Foo", () => {
  
    const store = new Vuex.Store(saladStore);
    const wrapper = mount(KampanyalarB, { store });
    /* console.log("looooooooooooooooooooog");
    console.log(wrapper.html()); */
    it("has the expected html structure", () => {
      expect(wrapper).toMatchSnapshot();
    });
  
});

/* test("component renders the users", () => {
  const store = new Vuex.Store(saladStore);
  const wrapper = shallowMount(KampanyalarB, { store },
    {slots: {
    Kampanya: Kampanya
  }},);
  console.log("looooooooooooooooooooog");
  console.log(wrapper.html());
  const lis = wrapper.findAll("Kampanya"); 
  expect(lis.length).toBe(9);
}

);
 */
