<!-- TODO: Elijah --->
<script >
  import AuthManager from './AuthManager.vue';
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
      AuthManager,
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
  <AuthManager/>
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