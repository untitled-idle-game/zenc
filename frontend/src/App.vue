<template>
  <!-- Add your RouterLinks here (until we get a functioning menu, that is) -->
  
  <navbar v-position:top>
  </navbar>
  <body v-position:bottom>
    <RouterView />
  </body>
</template>

<!-- If it is necessary to import things, do it in the script setup 
  so that you don't have to add all the module export stuff -->

<script setup>
import AuthManager from "./components/AuthManager.vue";

AuthManager.setup();
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

navbar {
  margin-bottom: 50px;
}

body {
  margin-top: 50px;
}
</style>
