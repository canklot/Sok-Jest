<template>
  <div class="Aktuel">
    
    <img class="Sook" src="../images/Sook.png" />
    <img class="kettle" src="../images/kettle2.png" />
    <img class="TostMakinesi" src="../images/TostMakinesi.png" />
    <div class="Urun1">
      <span class="Yuvarlak">
        <p class="Garanti">	2 YIL GARANTİLİ</p>
      </span>
      <div class="Marka">{{Marka}}</div>
      <div class="UrunAdi">{{ UrunAdi }}</div>
      <div class="Fiyat">₺{{Fiyat}}</div>
      <div
        class="Aciklama"
      >1,8lt/ Paslanmaz çelik rezistans Su kaynadığında otomatik kapanma/ Susuz kullanılmaya karşı koruma sistemi</div>
    </div>
    <div class="Urun2">
      <span class="Yuvarlak2">
        <p class="Garanti">	2 YIL GARANTİLİ</p>
      </span>
      <div class="Marka">TEBA</div>
      <div class="UrunAdi">ELEKTRİKLİ CAM SU ISITICI</div>
      <div class="Fiyat">₺89,90</div>
      <div
        class="Aciklama"
      >1,8lt/ Paslanmaz çelik rezistans Su kaynadığında otomatik kapanma/ Susuz kullanılmaya karşı koruma sistemi</div>
    </div>
  </div>
</template>

/* -------------Scripts--------------- */
<script>
export default {
    props: {
      UrunAdi: {
        type: String,
        default: 'Ben defaultum '
      },
      Fiyat: {
        type: String,
        default: '99'
      },
      Marka: {
        type: String,
        default: 'Ben defaultum TEBA'
      }
    }
  }
</script>

/* -------------Styles--------------- */
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Anton');

.Aktuel {
  background-color: yellow;
  height: 650px;
  width: 100%;
}
.Marka {
  color: #0d51a2;
  font-size: 60px;
  font-family: "Arial Black", Gadget, sans-serif;
}
.UrunAdi {
  color: #0d51a2;
  font-size: 25px;
  font-family: Tahoma, Geneva, sans-serif;
}
.Aciklama {
  font-size: 25px;
  font-family: Tahoma, Geneva, sans-serif;

  color: #0d51a2;
}
.Fiyat {
  background-color: #ec1f26;
  font-size: 90px;
  color: yellow;
  /* font-family: "Anton"; */ /* buraya adam akıllı font bul */
}
.kettle {
  position: relative;
  right: 300px;
  top: 200px;
}
.TostMakinesi {
  position: relative;
  right: -500px;
  top: 00px;
}
.Urun1 {
  position: relative;
  left: 500px;
  bottom: 200px;
  width: 330px;
}
.Urun2 {
  position: relative;
  left: 1000px;
  bottom: 700px;
  width: 330px;
}
.Yuvarlak {
  height: 150px;
  width: 150px;
  background-color: #ec1f26;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  left: 200px;
  top:50px;
}
.Yuvarlak2 {
  height: 150px;
  width: 150px;
  background-color: #ec1f26;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  left: 00px;
  top:0px;
}
.Garanti{
  position: relative;
  top: 50px;
  font-size: 20px;
  text-align: center;
  color:white;
  font-family: "Arial Black", Gadget, sans-serif;

  }

</style>
