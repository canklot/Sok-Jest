<template>
  <div>
    <div class="header">
      <div class="kampanyalar">
        <div class="kampanya">
          <img src="../images//kampanya1.jpg" />
          <p class="metin">{{salad}}</p>
          <p class="kampanyadetay">Kampanya Detayları ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import store from "../store/store.js";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  data() {
    return {
      ...this.$store.state.store /* sonuna neden tekrar store koyuyuorum anlamadım ama silince çalışmıyor*/
      
    };
  },

  methods: {
    ...mapActions(["addIngredient"])
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