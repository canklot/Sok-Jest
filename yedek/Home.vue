<template>
  <div class="container">
    <div id="app">
      <BannerB class="BannerB" />
      <Adres/>
      <AktuelUrunler UrunAdi="ELEKTRİKLİ CAM SU ISITICI" Marka="TEBA" Fiyat="89,90"/>
      <BunlariKacirma/>
      <KampanyalarB class ="KampanyalarB"/>
      <!--  <UrunDetay msg="BenimParametrem"/> -->
      <!-- <PromosyonKoduB msg="BenimParametrem"/> -->
      <!-- <GirisYapB msg="BenimParametrem"/> -->
      <!-- <Kategoriler msg="BenimParametrem"/> -->
      <!--  <Sepetim msg="BenimParametrem"/> -->
    </div>
  </div>
</template>

<script>
import BannerB from "../components/BannerB.vue";

import Adres from "../components/Adres.vue"
import AktuelUrunler from "../components/AktuelUrunler.vue";
import BunlariKacirma from '../components/BunlariKacirma.vue'
import KampanyalarB from '../components/KampanyalarB.vue'
//import PromosyonKoduB from '../components/PromosyonKoduB.vue'
//import GirisYapB from '../components/GirisYapB.vue'
//import Kategoriler from '../components/Kategoriler.vue'
//import Sepetim from '../components/Sepetim.vue'

export default {
  name: "App",
  components: {
    BannerB,
    Adres,
    AktuelUrunler,
    BunlariKacirma,
    KampanyalarB
    //UrunDetay
    //PromosyonKoduB
    //GirisYapB
    //Kategoriler
    //Sepetim
  }
};
</script>

<style>
.KampanyalarB{
  position: relative;
  left: 150px;
}

</style>
