<template>
  <div class="Kategoriler">
    <div class="Baslik">Süt &amp; süt ürünleri</div>  
    <button class="Kategori">Süt</button>
    <button class="Kategori">Yoğurt</button>
    <button class="Kategori">Ayran 	&amp; kefir</button>
    <button class="Kategori">Beyaz Peynir</button>
    <button class="Kategori">Krem Peynir</button>
    <button class="Kategori">Yöresel Gurme Peynir</button>
    <button class="Kategori">Kaymak &amp; Krema</button>
    <button class="Kategori">Tereyağ 	&amp; Margarin</button>
    <button class="Kategori">Maya</button>
    <button class="Kategori">Kaşar Peyniri</button>
    <button class="Kategori">Kaşar Peyniri</button>
    <button class="Kategori">Kaşar Peyniri</button>
  </div>
</template>

/* -------------Scripts--------------- */
<script>
export default {};
</script>

/* -------------Styles--------------- */
<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@698&display=swap');


.Baslik{
    font-size: 15px;
    padding: 10px;
    font-family: 'Work Sans', sans-serif;
    background-color: #f6f6f6;
}
.Kategoriler{
  margin: 5px;
  padding-left: 300px;
  background-color: #f6f6f6;
  
}
.Kategori {
  float: left;
  padding: 10px;
  margin-left: 10px;
  line-height: 3px;
  border:none;
  background-color: white;
  
}
.Kategori:hover {
  border: 2px solid rgba(5,81,159,.5);
  
  border-radius: 20px;
}
</style>
