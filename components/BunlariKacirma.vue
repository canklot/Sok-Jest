<template>
  <div class="BunlariKacirma">
    <div class="Baslik">Bunları Kaçırmayın</div>
    <!-- ----------urun----- -->
    <nuxt-link :to="'/UrunDetay/'"> <!-- <nuxt-link :to="'/UrunDetay/'+id"> -->
    <div class="urun">
      <img class="urunResim" src="@/images/lipton.jpg" />
      <div class="indirim">25 TL üzeri indirimli</div>
      <div class="urunAdi">Lipton Altın Harman Demşik Poşet 100'lü</div>
      <div class="eskiFiyat">
        <del>₺43,90</del>
      </div>
      <div class="yeniFiyat">₺22,00</div>
      <div class="arti">+</div>
    </div>
    </nuxt-link>
    <!-- ----------urun----- -->
    <div class="urun">
      <img class="urunResim" src="@/images/deterjan.jpg" />
      <div class="indirim">25 TL üzeri indirimli</div>
      <div class="urunAdi">Bingo Sıvı Deterjan 40 Yıkama 2,6Lt</div>
      <div class="eskiFiyat">
        <del>₺43,90</del>
      </div>
      <div class="yeniFiyat">₺22,00</div>
      <div class="arti">+</div>
    </div>
    <!-- ----------urun----- -->
    <div class="urun">
      <img class="urunResim" src="@/images/vanish.jpg" />
      <div class="indirim">25 TL üzeri indirimli</div>
      <div class="urunAdi">Vanish Oxi Action Gold Leke Çıkarıcı 1,4Lt</div>
      <div class="eskiFiyat">
        <del>₺32,90</del>
      </div>
      <div class="yeniFiyat">₺18,00</div>
      <div class="arti">+</div>
    </div>
    <!-- ----------urun----- -->
    <div class="urun">
      <img class="urunResim" src="@/images/nivea.jpg" />
      <div class="indirim">25 TL üzeri indirimli</div>
      <div class="urunAdi">Nivea Soft Bakım Kremi Nemlendirici 200Ml</div>
      <div class="eskiFiyat">
        <del>₺16,95</del>
      </div>
      <div class="yeniFiyat">₺10,00</div>
      <div class="arti">+</div>
    </div>
    <!-- ----------urun----- -->
    <div class="urun">
      <img class="urunResim" src="@/images/deterjan.jpg" />
      <div class="indirim">25 TL üzeri indirimli</div>
      <div class="urunAdi">Bingo Sıvı Deterjan 40 Yıkama 2,6Lt</div>
      <div class="eskiFiyat">
        <del>₺43,90</del>
      </div>
      <div class="yeniFiyat">₺22,00</div>
      <div class="arti">+</div>
    </div>
    <!-- ----------urun----- -->
    <div class="urun">
      <img class="urunResim" src="@/images/deterjan.jpg" />
      <div class="indirim">25 TL üzeri indirimli</div>
      <div class="urunAdi">Bingo Sıvı Deterjan 40 Yıkama 2,6Lt</div>
      <div class="eskiFiyat">
        <del>₺43,90</del>
      </div>
      <div class="yeniFiyat">₺22,00</div>
      <div class="arti">+</div>
    </div>
    <!-- ----------urun----- -->

  </div>
</template>

/* -------------Scripts--------------- */
<script>
export default {};
</script>

/* -------------Styles--------------- */
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

a{
  text-decoration: none;
  color: black;
}
.BunlariKacirma {
  background-color: #f7f3eb;
  height: 300px;
}
.Baslik{
    font-weight: bolder;
    margin-left: 300px;
    font-size: 18px;
    margin-bottom:10px;
    padding-top:10px;

}
.urun {
  display: inline-block;
  width: 280px;
  height: 130px;
  margin-top: 40px;
  margin-left: 20px;
  padding-top: 10px;
  background-color: #fff;
  border-radius: 10px;
}
.urunResim {
  width: 90px;
}
.indirim {
  background-color: #ffe000;
  width: 85px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
  text-align: center;
  position: relative;
  bottom: 36px;
  left: 4px;
}
.urunAdi {
  width: 200px;
  position: relative;
  bottom: 140px;
  left: 100px;
  font-size: 14px;
}
.eskiFiyat {
  position: relative;
  bottom: 120px;
  left: 100px;
  color: rgba(51, 41, 10, 0.5);
}
.yeniFiyat {
  position: relative;
  bottom: 150px;
  left: 165px;
  background-color: #ffe000;
  color: #ff3824;
  width: 65px;
  height: 35px;
  text-align: center;
  padding-top: 5px;
  border-radius: 5px;
  font-weight: bolder;
  font-size: 18px;
}
.arti {
  position: relative;
  bottom: 290px;
  left: 250px;
  font-size: 40px;
  font-weight: bolder;
  color: #3db662;
  height: 50px;
  width: 50px;
  background-color: #fff;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  box-shadow: 0 0.2rem 3rem 0 rgba(0, 0, 0, 0.2);
}
* {
  font-family: poppins;
}
</style>
