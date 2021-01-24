import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* export const state = () => ({
    kampanya1: '25 Tl ve üzeri alışverişinize SuperFresh Pizza King 780 gr sadece 12 TL ! Sepetiniz 25tl ve üzeri ise ürünü sepete eklediğinizde indirimli fiyat sepetinize otomatik yansır.',
    kampanya2: ' 25 Tl ve üzeri alışverişinize Lipton Altın Harman Demlik Poşet 100 lü sadece 14 TL ! Sepetiniz 25tl ve üzeri ise ürünü sepete eklediğinizde indirimli fiyat sepetinize',
    kampanya3:'Nescafe Gold 150 gr Nestle Çikolata 60 gr sadece 32,45 TL İkili özel paket!',
    kampanya4: '25 Tl ve üzeri alışverişinize SuperFresh Pizza King 780 gr sadece 12 TL ! Sepetiniz 25tl ve üzeri ise ürünü sepete eklediğinizde indirimli fiyat sepetinize otomatik yansır. ',
    kampanya5: '25 Tl ve üzeri alışverişinize Ülker Çokokrem Cam Kavanoz 650 gr sadece 14 TL ! Sepetiniz 25tl ve üzeri ise ürünü sepete eklediğinizde indirimli fiyat sepetinize otomatik',
    kampanya6: '25 Tl ve üzeri alışverişinize Loreal Kolajen Bakımı Günlük Bakım Kremi 50m sadece 25 TL ! Sepetiniz 25tl ve üzeri ise ürünü sepete eklediğinizde indirimli fiyat sepetinize',
    kampanya7: '25 Tl ve üzeri alışverişinize Loreal Kolajen Bakımı Günlük Bakım Kremi 50m sadece 25 TL ! Sepetiniz 25tl ve üzeri ise ürünü sepete eklediğinizde indirimli fiyat sepetinize',
    kampanya8: '25 Tl ve üzeri alışverişinize Activex Antibakteriyel Islak Havlu 2x56 Adet sadece 11 TL ! Sepetiniz 25tl ve üzeri ise ürünü sepete eklediğinizde indirimli fiyat sepetinize',
    kampanya9: '25 Tl ve üzeri alışverişinize Heinz Ketçap 700 Gr Mayonez 400 Gr sadece 19 TL ! Sepetiniz 25tl ve üzeri ise ürünü sepete eklediğinizde indirimli fiyat sepetinize otomatik'
})

export const mutations = {
    increment(state){
        state.counter++
    }
}
 */

/* ----------------------- */

export default {
    state() {
      return {
        salad: ["saaaaaaaaaaaaalad"]
      }
    },
  
    mutations: {
      addIngredient(state, ingredient) {
        state.salad.push(ingredient)
      }
    },
  
    actions: {
      addIngredient({ commit }, ingredient) {
        commit('addIngredient', ingredient)
      }
    }
  }
  
  