<!-- TODO: Eric -->
<!-- Eric, replace script stuff with what you need, its just there so the compiler is happy. ~Elijah -->
<script>
let menuPosition = 0;
let open = false;
const menuSize = 500;
const openTime = 0.1;
function openMenu() {
  menuPosition+=menuSize/(openTime*1000);
  if (menuPosition>menuSize) menuPosition=menuSize;
    document.getElementById("menu").style.height = menuPosition+"px";
  if (menuPosition<menuSize && open) {
      setTimeout(() => {
        openMenu()
    }, 1);
  }
}
function closeMenu() {
  menuPosition-=menuSize/(openTime*1000);
  if (menuPosition<0) menuPosition=0;
    document.getElementById("menu").style.height = menuPosition+"px";
  if (menuPosition>0 && !open) {
      setTimeout(() => {
        closeMenu()
    }, 1);
  }
}
window.onload = function() {
  document.getElementById("menubutton").onclick = function() {
    open = !open;
    if (open) {
      openMenu();
    } else {
      closeMenu();
    }
  }
}
</script>

<template>
  <!-- Put navBar here when it is implemented -->
  <div class="menubackground">
  </div>
    <div id="menu">
      </div>
  <div class="menuicon">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <button id = "menubutton" class="material-symbols-outlined">menu</button>
  </div>
</template>

<style scoped>
  .menuicon {
    font-size: x-large;
    justify-content: left;
    text-align: left;
    position: absolute;
    top: 20px;
    left: 20px;
    width: 200px;
    height: 100px;
    color: white;
  }
  .menubackground {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 75px;
    background-color: navy;
  }
  #menu {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 300px;
    height: 0px;
    background-color: navy;
    border-radius: 0 0 30px 0;
  }

.material-symbols-outlined {
    color: white;
    background-color: transparent;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
    border: 0px solid #3498db;
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
}
</style>