<template>
  <!-- Add your RouterLinks here (until we get a functioning menu, that is) -->
  <RouterView/>
</template>

<!-- If it is necessary to import things, do it in the script setup 
  so that you don't have to add all the module export stuff -->

<script setup>
</script>
<script>
import globals from "./components/globals.js"

export default {
  mounted() {
    globals.themeManager.beginListening(this.updateStyles);
  },
  methods: {
    updateStyles() {
      globals.authManager.getSelectedTheme()
      .then(
        (theme) => globals.storageManager.getImageUrl(theme.id)
      )
      .then((imageUrl) => {
        document.body.style.backgroundImage = `url('${imageUrl}')`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundAttachment = 'fixed';
      })
    }
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
