<template>
  <!-- Kampanyalardan 9 tane falan olcak v-for ile döngü şeklinde store'dan çekecek -->
  <div class="kampanya">
    <img src="../images//kampanya1.jpg" />
    <p class="metin">{{Parametre}}</p>
    <p class="kampanyadetay">Kampanya Detayları ></p>
  </div>
</template>

<script>
export default {
  props: {
    Parametre: {
      type: String,
      default: "Ben defaultum "
    }
  }
};
</script>

<style scoped>
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