<template>
  <!-- Add your RouterLinks here (until we get a functioning menu, that is) -->
  <AuthManager ref="authManager"/>
  <NavigationBar/>
  <body>
    <RouterView/>
  </body>
</template>

<!-- If it is necessary to import things, do it in the script setup 
  so that you don't have to add all the module export stuff -->

<script setup>
// Note: I moved everything downwards, as there were some technical
// difficulties with putting everything in setup - Sam
</script>
<script>
import AuthManager from "./components/AuthManager.vue";
import NavigationBar from "./components/NavigationBar.vue";
export default {
  components: {
    AuthManager,
    NavigationBar,
  },
  mounted() {
    console.log(this.$refs.authManager);
  }
}
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
