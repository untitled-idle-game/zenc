<template>
  <!-- Add your RouterLinks here (until we get a functioning menu, that is) -->
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/login">Login</RouterLink>
  
  <BackgroundMenu />
  <RouterView />
</template>

<!-- If it is necessary to import things, do it in the script setup 
  so that you don't have to add all the module export stuff -->

<script setup>
import { BackgroundMenu } from "./components/BackgroundMenu.vue";
</script>

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
