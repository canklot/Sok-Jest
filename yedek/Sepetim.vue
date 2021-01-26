<template>
  <div class="container">
    <div id="app">
      <BannerB />
      <Sepetim />
      
    </div>
  </div>
</template>

<script>
import BannerB from "@/components/BannerB.vue";
import Sepetim from "@/components/Sepetim.vue";


export default {
  name: "App",
  components: {
    BannerB,
    Sepetim,
    
  }
};
</script>

<style scoped>


</style>
