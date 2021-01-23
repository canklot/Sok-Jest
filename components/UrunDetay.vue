<template>
  <div class="UrunDetay">
    <div class="SolTaraf">
      <div class="SolunSolu">
        <img  class="UrunResim" src="../images/cokokrem.jpg" alt="Italian Trulli" />
      </div>
      <div class="SolunSagi">
        <div class="fiyat">14,00</div>
        <div class="urunismi">Ülker Çokokrem Cam Kavanoz 650 Gr</div>
        <div class="sepeteEkle">Sepete Ekle</div>
      </div>
    </div>
    <div class="SağTaraf"></div>
  </div>
</template>

/*       bu component eksik     */
<script>
export default {
  name: "UrunDetay",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.UrunDetay {
  background-color: yellow;
  margin: 300px;
}
.UrunResim{
  max-width: 100%;
  height: auto;
}
</style>
