<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to the to-be Zenc app! :)" /> -->
  <!-- <BackgroundMenu/> -->
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/login">Login</RouterLink>
  <!-- <ZenScreen></ZenScreen> -->
  <RouterView />
</template>

<script>
export default {
  name: "App",
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
</style>
