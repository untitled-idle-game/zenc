<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to the to-be Zenc app! :)"/> -->
  <BackgroundMenu/>
  <ZenScreen/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BackgroundMenu from './components/BackgroundMenu.vue';
import ZenScreen from './components/ZenScreen.vue';

export default {
  name: 'App',
  components: {
    BackgroundMenu,
    ZenScreen
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
