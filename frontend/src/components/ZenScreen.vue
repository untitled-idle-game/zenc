<!-- TODO: Elijah --->
<script>
  // eslint-disable-next-line
  import ZenCircle from './ZenCircle.vue';
  import NavigationBar from './NavigationBar.vue';
  import globals from './globals.js';

  export default {
    name: "ZenScreen",
    data() {
      return {
        count: 0,
        textColor: "#ffffff"
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
            globals.userManager.grantZenpoints(
              globals.authManager.uid,
              1
            );
          }, 15000);
        }
      }
    },
    mounted() {
      globals.authManager.beginListening(async() => {
        const zenpoints = await globals.authManager.getZenpoints();
        const theme = await globals.authManager.getSelectedTheme();
        this.count = zenpoints;
        this.textColor = theme.accentColor;
      })
      this.incrementCount(4);
    }
  }
</script>

<template>
  <!-- Put navBar here when it is implemented -->
  <NavigationBar/>
  <div class="container page-container text-center">
  <div class="pointCount" :style="{ color: textColor }">
      <p id="count">{{ count }}</p>
      <p>Zen Points</p>
    </div>
    <ZenCircle />
  </div>
  <audio autoplay>
    <source src="../assets/zenc-music.mp3" type="audio/mpeg">
  </audio>
</template>
<style scoped>
  .pointCount {
    font-size: x-large;
    justify-content: center;
  }
  .circle {
    justify-content: center;
  }
</style>