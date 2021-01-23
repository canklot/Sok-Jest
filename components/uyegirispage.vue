<template>
    <div class="vue-tempalte centeremre">
        <form>
            <h3 >Sign İn</h3>

            <div class="form-group">
                <label>Email address</label> <br> 
                <input type="email" class="form-control form-control-lg typeemre" v-model="form.email" />
            </div>

            <div class="form-group">
                <label>Password</label> <br>
                <input type="password" class="form-control form-control-lg typeemre"  v-model="form.password" />
            </div>
            <nuxt-link :to="'/Home/'"> <br>
                 <button type="submit" class="btn btn-dark btn-lg btn-block typeemre" @click="signin">Sign İn</button>
            </nuxt-link>
            
           
            
        </form>
    </div>
</template>

<script>
    export default {
    data(){
      return {
        form:{
          email:"",
          password:""
        },
        
        
        
      }
    },
    methods:{
      signup(){
        this.$store.dispatch("users/createUser",this.form)
        .then(()=>{
          this.$router.push("/")
        })
        .catch(err=>{
          console.log(err)
        })
      },
      signin(){
        this.$store.dispatch("users/signin",this.form)
        .then(()=>{
          this.$router.push("/Home")
        })
        .catch(err=>{
          console.log(err)
        })
      },
       
    }
};
    
</script>
<style scoped>
.typeemre{
    width: 200px;
    border-radius: 10%;
    font-size: 20px;
    height: 30px;

}
.centeremre{
    text-align: center;
}
</style>