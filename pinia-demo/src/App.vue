<script setup lang="ts">

</script>

<template>
<div>
  <router-link to="/">Home</router-link>
  {{' '}}
  <router-link to="/counter">Counter</router-link>
  <router-view></router-view>

  
    <b-container class="bv-example-row" style="padding-top:30px">
     <b-row>
       <b-col>
         <b-img style="width: 100%;" src="https://miro.medium.com/max/1200/1*SXrBw2-Rgli-V7TKEiCZWA.png" fluid alt="Vue.js" title="Vue.js"></b-img>
         <b-col><strong style="color:#2fb982">VUE</strong></b-col>
        </b-col>
        <b-col>
          <b-img style="width: 35%;" src="https://pinia.vuejs.org/logo.svg" fluid alt="Pinia" title="Pinia"></b-img>
         <b-col> <strong style="color:#ffbc00">PINIA</strong></b-col>
        </b-col>
        <b-col>
          <b-img style="width: 50%;" src="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png" fluid alt="Vite" title="Vite"></b-img>
          <b-col><strong style="color:#926afe">VITE</strong> </b-col> 
        </b-col>
        <b-col>
          <b-img style="width: 50%;" src="https://nx.dev/documentation/shared/jest-logo.png" fluid alt="jest" title="jest"></b-img>
          <b-col><strong style="color:#99425b">JEST</strong> </b-col> 
        </b-col>
       </b-row>


       <b-row style="text-align: center; margin: auto; margin-top: 10px; color: black; text-decoration: underline;display: flex;">
         <b-row>
           <b-col>
             <a href="https://test-utils.vuejs.org/guide/#what-is-vue-test-utils" target="_blank">test utils</a>
           </b-col>
         </b-row>
         <b-row>
           <b-col>
             <a href="https://vitejs.dev/" target="_blank">VITE</a>
           </b-col>
         </b-row>
         <b-row>
           <b-col>
             <a href=" https://pinia.vuejs.org/" target="_blank">PINIA</a>
           </b-col>
         </b-row>
       </b-row>
    </b-container>
</div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
