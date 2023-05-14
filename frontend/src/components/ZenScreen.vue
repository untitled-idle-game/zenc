<!-- TODO: Elijah --->
<script>
  // eslint-disable-next-line
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
    },
    mounted() {
      this.incrementCount(4);
    }
  }
</script>

<template>
  <!-- Put navBar here when it is implemented -->
  <NavigationBar/>
  <div class="container page-container text-center">
  <div class="pointCount">
      <p id="count">{{ count }}</p>
      <p>Zen Points</p>
    </div>
    <div>
      <ZenCircle />
    </div>
  </div>
</template>

<style scoped>
  .pointCount {
    font-size: x-large;
    justify-content: center;
  }
</style>