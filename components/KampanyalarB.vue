<template>
  <div>
    <div class="header">
      <div class="kampanyalar">
      <div class="kampanya">
      <img src="../images//kampanya1.jpg"/>
      <p class="metin">{{this.$store.state.store.kampanya1}}</p>
      <p class="kampanyadetay">Kampanya Detayları ></p>
      </div>
      <div class="kampanya">
      <img src="../images//kampanya2.jpg"/>
      <p class="metin">{{this.$store.state.store.kampanya2}}</p>
      <p class="kampanyadetay">Kampanya Detayları ></p>
      </div>
      <div class="kampanya">
      <img src="../images//kampanya3.jpg"/>
      <p class="metin">{{this.$store.state.store.kampanya3}}</p>
      <p class="kampanyadetay">Kampanya Detayları ></p>
      </div>
      <div class="kampanya">
      <img src="../images//kampanya4.jpg"/>
      <p class="metin">{{this.$store.state.store.kampanya4}}</p>
      <p class="kampanyadetay">Kampanya Detayları ></p>
      </div>
      <div class="kampanya">
      <img src="../images//kampanya5.jpg"/>
      <p class="metin">{{this.$store.state.store.kampanya5}}</p>
      <p class="kampanyadetay">Kampanya Detayları ></p>
      </div>
      <div class="kampanya">
      <img src="../images//kampanya6.jpg"/>
      <p class="metin">{{this.$store.state.store.kampanya6}}</p>
      <p class="kampanyadetay">Kampanya Detayları ></p>
      </div>
      <div class="kampanya">
      <img src="../images//kampanya7.jpg"/>
      <p class="metin">{{this.$store.state.store.kampanya8}}</p>
      <p class="kampanyadetay">Kampanya Detayları ></p>
      </div>
      <div class="kampanya">
      <img src="../images//kampanya8.jpg"/>
      <p class="metin">{{this.$store.state.store.kampanya9}}</p>
      <p class="kampanyadetay">Kampanya Detayları ></p>
      </div>
      <div class="kampanya">
      <img src="../images//kampanya9.jpg"/>
      <p class="metin">{{this.$store.state.store.kampanya9}}</p>
      <p class="kampanyadetay">Kampanya Detayları ></p>
      </div>

       </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.kampanyalar{
  width:1200px;
  margin-left:250px;
  margin-top:30px;
}
.kampanya{
margin-right:30px;
height:240px;
width:364px;
float:left;
margin-top:30px;


}
.kampanya img{
  width:363px;
  border-radius:3px;
  cursor:pointer;
}
.metin{
  width:363px;
  font-family:  Arial, Helvetica, sans-serif;
  margin-top:10px;
  font-size:15px;
  height:80px;
}
.kampanyadetay{
  font-family:  Arial, Helvetica, sans-serif;
  font-weight:600;
  margin-top:10px;
  cursor:pointer;
}


</style>