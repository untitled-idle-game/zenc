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
    }, 
    methods: {
      incrementCount(cycles) {
        if (cycles % 4 != 0) {
          console.error("Cycle count must be a multiple of 4");
          return;
        } else {
          setInterval(() => {
            this.count++;
          }, 15000);
        }
      }
    }
  }
  window.onload = () => {
    this.incrementCount(4);
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