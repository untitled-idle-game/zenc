<!-- TODO: Elijah --->
<script>
  import ZenCircle from './ZenCircle.vue';
  import NavigationBar from './NavigationBar.vue';

  export default {
    name: "ZenScreen",
    data() {
      return {
        count: 0
      }
    },
    components: {
      ZenCircle,
      NavigationBar,
    }
  }
</script>

<template>
  <NavigationBar></NavigationBar>
  <!-- Put navBar here when it is implemented -->
  <div class="pointCount">
    <p id="count">{{ count }}</p>
    <p>Zen Points</p>
  </div>
  <div>
    <ZenCircle />
  </div>
</template>

<style scoped>
  .pointCount {
    font-size: x-large;
    justify-content: center;
  }
</style>