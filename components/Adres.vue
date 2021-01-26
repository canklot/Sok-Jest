<template>
  <div class="Adres">
    <img class="ucgen" src="../images/ucgen.png" />
    <div class="SilikAdres">Adress Seçin</div>
    <button class="MaviAdres">
      <p class="AdressSec">Adres Seç</p>
      <p class="ok">&#8250;</p>
    </button>

    <div class="SagTaraf">
      <div class="griArkaplan">
        <img class="bisiklet" src="../images/bisiklet.png" />
        <div class="adreseTeslim">Adrese Teslim</div>
        <div class="minSepet">Min sepet</div>
        <div class="gonderim">Gönderim</div>
        <img class="market" src="../images/market.png" />
        <div class="gelAl">Marketten Gel Al</div>
        <div class="minSepet">Min sepet</div>
      </div>
    </div>
  </div>
</template>

/* -------------Scripts--------------- */
<script>
export default {};
</script>

/* -------------Styles--------------- */
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@698&display=swap");

.Adres {
  width: 100%;
  height: 50px;
  background-color: white;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.05);
}

.Adres * {
}
.ucgen {
  height: 30px;
  margin: 10px;
  padding-left: 300px;
  float: left;
}
.SilikAdres {
  padding: 15px;
  text-align: center;
  color: rgba(51, 41, 10, 0.5);
  float: left;
}
.MaviAdres {
  color: #05519f;
  text-align: center;
  height: 100%;
  padding-left: 180px;
  float: left;
}
.AdressSec {
  float: left;
  padding-top: 5px;
}
.ok {
  margin-left: 5px;
  padding-top: 5px;
  font-size: 30px;
  font-weight: 900;
  line-height: 5px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  border-color: blue;
  display: inline-block;
  text-align: center;
  float: right;
}
.bisiklet {
  margin-top: 10px;
  float: left;
}
.adreseTeslim {
  padding: 15px;
  float: left;
}
.minSepet {
  padding: 15px;
  color: rgba(51, 41, 10, 0.5);
  float: left;
}
.gonderim {
  padding: 15px;
  color: rgba(51, 41, 10, 0.5);
  float: left;
}
.market {
  padding-top: 15px;
  margin-left: 180px;
  float: left;
}
.gelAl {
  padding-top: 15px;
  padding-left: 5px;
  font-weight: 700;
  float: left;
}
.SolTaraf {
  float: left;
  background-color: white;
}
.SagTaraf {
  float: left;
}
.griArkaplan {
  background-color: #f6f6f6;
  float: left;
  width: 1150px;
}
</style>
