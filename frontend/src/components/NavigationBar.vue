<!-- TODO: Eric -->
<!-- Eric, replace script stuff with what you need, its just there so the compiler is happy. ~Elijah -->
<script setup>
import globals from "./globals";

let menuPosition = 0;
let open = false;
const menuSize = 100;
const openTime = 1.0;
function openMenu() {
  menuPosition+=menuSize/(openTime*1000/20);
  if (menuPosition>menuSize) menuPosition=menuSize;
    document.getElementById("menu").style.top = menuPosition-100+"%";
  if (menuPosition<menuSize && open) {
      setTimeout(() => {
        openMenu()
    }, 20);
  }
}
function closeMenu() {
  menuPosition-=menuSize/(openTime*1000/20);
  if (menuPosition<0) menuPosition=0;
    document.getElementById("menu").style.top = menuPosition-100+"%";
  if (menuPosition>0 && !open) {
      setTimeout(() => {
        closeMenu()
    }, 20);
  }
}
function clickMenu() {
  open = !open;
    if (open) {
      openMenu();
    } else {
      closeMenu();
    }
}
function signOut() {
  /* eslint-disable */
  globals.authManager.signOut();
}
</script>

<script>
export default {
data() {
  return {
    menuStyleObject: {}
  }
},
methods: {
  updateStyles() {
    if (globals.authManager.isSignedIn) {
      globals.authManager.getSelectedTheme()
      .then((selectedTheme) => {
        this.updateSelectedTheme(selectedTheme)
      });
    }
  },
  updateSelectedTheme(selectedTheme) {
    // Foreground color
    document.querySelector("#menu").style.backgroundColor = selectedTheme.fgColor;
    document.querySelectorAll(".menubackground").forEach((elem) => {
      elem.style.backgroundColor = selectedTheme.fgColor;
    });

    // Accent color
    document.querySelectorAll(".linkClass").forEach((elem) => {
      elem.style.color = selectedTheme.accentColor;
    });
    document.querySelector("#menubutton").style.color = selectedTheme.accentColor;
  }
},
mounted() {
  globals.authManager.beginListening(this.updateStyles);
}
};
</script>

<template>
  <!-- TODO: Eric, make the links look nicer -->
  <div class="menubackground">
  </div>
  <div id="menu">
    <div id = "links">
      <RouterLink to="/" :style="menuStyleObject" class = "linkClass">Home</RouterLink>
      <br>
      <br>
      <RouterLink to="/themestore" :style="menuStyleObject" class = "linkClass">Theme Store</RouterLink>
      <br>
      <br>
      <button @click = "signOut" :style="menuStyleObject" class = "linkClass">Sign Out</button>
    </div>
  </div>
  <div class="menuicon">
    <button id = "menubutton" @click = "clickMenu" class="material-symbols-outlined">menu</button>
  </div>
</template>

<style scoped>
  .menubackground {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 35px;
    /* background-color: navy; */
    z-index: 10;
  }
  #menu {
    position: fixed;
    top: -100%;
    left: 0px;
    width: 300px;
    height: 100%;
    /* background-color: navy; */
    border-radius: 0 0 30px 0;
    z-index: 10;
  }
  #links {
    position: relative;
    top: 5%;
    left: 10px;
    text-align:left;
    text-justify: left;
    z-index: 10;
  }
  .linkClass {
    /* color: white; */
    font-size: xx-large;
    text-decoration: none;
    text-align:left;
    text-justify: left;
    z-index: 10;
    cursor:pointer;
    background-color: transparent;
    border-width: 0px;
    padding: 0px 0px 0px 0px
  }

.material-symbols-outlined {
    /* color: white; */
    background-color: transparent;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
    border: 0px solid #3498db;
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
}
  #menubutton {
    font-size: x-large;
    justify-content: left;
    text-align: left;
    position: fixed;
    top: 0px;
    left: 20px;
    width: 40px;
    height: 35px;
    /* color: white; */
    margin: 0px 0px 0px 0px;
    z-index: 10;
  }
</style>