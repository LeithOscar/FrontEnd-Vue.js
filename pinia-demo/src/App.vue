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
       <b-col><b-img style="width: 100%;" src="https://miro.medium.com/max/1200/1*SXrBw2-Rgli-V7TKEiCZWA.png" fluid alt="Responsive image"></b-img></b-col>
        <b-col><b-img style="width: 35%;" src="https://pinia.vuejs.org/logo.svg" fluid alt="Responsive image"></b-img></b-col>
        <b-col><b-img style="width: 50%;" src="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png" fluid alt="Responsive image"></b-img></b-col>
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
