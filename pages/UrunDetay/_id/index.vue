<template>
  <div class="MainContainer">

  <UrunDetay
  thumbnail="resim"
  title="baaaaaslik"
  previewtext="denemeeee"
  />

  </div>
</template>

<script>
import UrunDetay from '@/components/UrunDetay'
export default {
  name: "App",
  components: {
    UrunDetay
  }
};
</script>