<template>
    <NavigationBar></NavigationBar>
    <div>
        <ejs-button cssClass='e-primary'>Primary</ejs-button>
        <ejs-button cssClass='e-success'>Success</ejs-button>
        <ejs-button cssClass='e-info'>Info</ejs-button>
        <ejs-button cssClass='e-warning'>Warning</ejs-button>
        <ejs-button cssClass='e-danger'>Danger</ejs-button>
        <ejs-button cssClass='e-link'>Link</ejs-button>
    </div>
</template>
    
<script>
    import NavigationBar from './NavigationBar.vue';
    export default {
    name: "SignInScreen",
    data() {
      return {
        count: 0
      }
    },
    components: {
      NavigationBar,
    }
  }
</script>
    
<style>
    /* @import '../styles/ej2-base/material.css'; */
    /* @import '../styles/ej2-vue-buttons/material.css'; */
    button {
      margin: 25px 5px 20px 20px;
    }
</style>