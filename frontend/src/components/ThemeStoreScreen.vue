<!-- TODO: Eric: We need a database or atleast a JSON template I can use, since the themes are user uploaded I can't simply hard code theme screens. --->
<script>
import NavigationBar from './NavigationBar.vue';
import globals from './globals.js';
export default {
    name: "ThemeStoreScreen",
    data() {
      return {
        count: 0
      }
    },
    mounted() {
      this.loadPage();
    },
    methods: {
      loadPage() {
      document.getElementById("themeBoxes").innerHTML="";
      for (let i = 0; i < globals.themeManager.length; i++) {
        let theme = globals.themeManager.getThemeAtIndex(i);
        let themeString = `<div data-v-8f2b0d58 class = "themebox" style = "background-image: url(${theme.imageURL}); top:${100+400*i}px">
            <p data-v-8f2b0d58 class = "name" style = "color: ${theme.fgColor}; text-shadow: -1px 1px 2px ${theme.accentColor},
				  1px 1px 2px ${theme.accentColor},
				  1px -1px 0 ${theme.accentColor},
				  -1px -1px 0 ${theme.accentColor};">${theme.name}</p>
            <p data-v-8f2b0d58 class = "author" style = "color: ${theme.fgColor}; text-shadow: -1px 1px 2px ${theme.accentColor},
				  1px 1px 2px ${theme.accentColor},
				  1px -1px 0 ${theme.accentColor},
				  -1px -1px 0 ${theme.accentColor}; text-shadow: -1px 1px 2px ${theme.accentColor},
				  1px 1px 2px ${theme.accentColor},
				  1px -1px 0 ${theme.accentColor},
				  -1px -1px 0 ${theme.accentColor};">by ${theme.creator}</p>
            <p data-v-8f2b0d58 class = "purchase" style = "color: ${theme.fgColor}; text-shadow: -1px 1px 2px ${theme.accentColor},
				  1px 1px 2px ${theme.accentColor},
				  1px -1px 0 ${theme.accentColor},
				  -1px -1px 0 ${theme.accentColor};">(${theme.price} ZP)</p>
        </div>`;
        document.getElementById("themeBoxes").innerHTML+=themeString;
      }
    },
    add() {
      
    }
    },
    components: {
        NavigationBar,
    }
}
</script>
<script setup>
import ThemeStoreScreen from './ThemeStoreScreen.vue';
    function add() {
      ThemeStoreScreen.methods.add();
    }
</script>
<template>
  <NavigationBar/>
      <div id = "themeBoxes">
      </div>
      <button class = "btn bmd-btn-fab" @click = "add" id = "addButton">+</button>
</template>

<style scoped>
  .themebox {
    position:absolute;
    justify-self: center;
    width:80%;
    height: 300px;
    left:10%;
    border-radius: 30px 30px 30px 30px;
    top:10%;
    text-align: center;
  }
  .name {
    color:white;
    margin-top: 7%;
    margin-bottom: 0%;
    font-size: xx-large;
  }
  .author {
    color:white;
    margin-top: 0%;
    font-size: x-large;
  }
  .purchase {
    color:white;
    margin-top: 0%;
    font-size: xx-large;
  }
  #themeBoxes {
    overflow-x: hidden;
    overflow-y: auto;
  }
  #addButton {
    position: fixed;
    right: 10px;
    bottom: 10px;
    background: navy;
    z-index: 999;
    color:white;
  }
</style>