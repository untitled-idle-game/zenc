<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to the to-be Zenc app! :)"/> -->
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/login">Login</RouterLink>
  <!-- <SignInScreen/> -->
  <!-- <ZenScreen/> -->
  <RouterView />
  <BackgroundMenu/>
</template>

<script>
import BackgroundMenu from './components/BackgroundMenu.vue';
import ZenScreen from './components/ZenScreen.vue';
import SignInScreen from "./components/SignInScreen.vue";

export default {
  name: 'App',
  components: {
    BackgroundMenu,
    ZenScreen,
    SignInScreen
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
</style>