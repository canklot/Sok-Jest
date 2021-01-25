<template>
  <div>
    <div class="header">
      <div class="kampanyalar">
        <!-- Kampanyalardan 9 tane falan olcak v-for ile döngü şeklinde store'dan çekecek -->
        <!-- <Kampanya :Parametre="salad" /> -->
        <Kampanya v-for="item in salad" :key="item" :Parametre="item" ></Kampanya>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import store from "../store/store.js";
import Vue from "vue";
import Vuex from "vuex";
import Kampanya from "./Kampanya.vue";
Vue.use(Vuex);

export default {
  data() {
    return {
      ...this.$store.state
        .store /* sonuna neden tekrar store koyuyuorum anlamadım ama silince çalışmıyor*/
    };
  },
  methods: {
    ...mapActions(["addIngredient"])
  },
  components: {
    Kampanya
  }
};
</script>

<style scoped>
.kampanyalar {
  width: 1200px;
  margin-left: 250px;
  margin-top: 30px;
}
</style>