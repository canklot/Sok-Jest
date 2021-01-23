<template>
  <div>
    <div class="pencere">
      <p class="yazi"> Size verilen promosyon kodunuz aşağıdaki kutucağa giriniz. Uygun kampanyalar sepetinize otomatik olarak uygulanacaktır</p>
      <v-text-field class="textfield" placeholder="Promosyon Kodunu Girin"></v-text-field>
      <p class="vazgec">Vazgeç</p>
      <v-btn class="buton" depressed>Onayla</v-btn>
      
    </div>
  </div>
</template>

<script>
export default {};

</script>

<style scoped>
.pencere {
  
  width:250px;
  height: 150px;
  position: relative;
  bottom: 0;
  left: 0;
  background-color: grey ;
  
  border-width: 2px;
  border-color: black;

}
.yazi {
  padding-top: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  margin-top: 10px;
  font-size: 14px;
  width: 240px;
  text-align: center;
}
.textfield {
  width: 249px !important;
  height: 42px !important;
  background-color: transparent !important;
  color: grey !important;
  border-style: solid !important;
  border-radius: 4px !important;
  border-color: grey !important;
  border-width: 1px !important;
  padding-left: 30px;
}

.vazgec {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  margin-top: 10px;
  font-size: 15px;
  text-decoration: underline;
  margin-top: 30px;
  float: left;
  margin-left: 35px;
}
.buton {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  margin-top: 20px;
  font-size: 15px;
  float: left;
  margin-left: 70px;
  background-color: #0660bd !important;
  color: white !important;
}
</style>