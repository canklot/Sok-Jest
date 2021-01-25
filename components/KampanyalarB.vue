<template>
  <div>
    <div class="header">
      <div class="kampanyalar">
        <!-- Kampanyalardan 9 tane falan olcak v-for ile döngü şeklinde store'dan çekecek -->
        <Kampanya :Parametre="salad" />
        
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
.kampanya {
  margin-right: 30px;
  height: 240px;
  width: 364px;
  float: left;
  margin-top: 30px;
}
.kampanya img {
  width: 363px;
  border-radius: 3px;
  cursor: pointer;
}
.metin {
  width: 363px;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 10px;
  font-size: 15px;
  height: 80px;
}
.kampanyadetay {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  margin-top: 10px;
  cursor: pointer;
}
</style>