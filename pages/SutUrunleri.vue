<template>
  <div class="container">
    <div id="app">
      <BannerB msg="BenimParametrem" />
      <Adres msg="BenimParametrem" />
      <Kategoriler msg="BenimParametrem" />
    </div>
  </div>
</template>

<script>
import BannerB from "@/components/BannerB.vue";

import Adres from "@/components/Adres.vue";
import Kategoriler from "@/components/Kategoriler.vue";

export default {
  name: "App",
  components: {
    BannerB,
    Adres,
    Kategoriler
  }
};
</script>

<style>
</style>
