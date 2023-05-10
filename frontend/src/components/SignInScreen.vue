<template>
    <NavigationBar/>
    <div id="loginPage" class="text-center">
        <img src="../assets/logo.png" id="zenLogo">
        <button class="btn" id="btnSignIn" @click.left="signIn"><img id="roseIcon" src="../assets/rose-logo.png" alt="">Sign in via Rosefire</button>
    </div>
</template>

<script>
import globals from "./globals";
import NavigationBar from './NavigationBar.vue';

export default {
    name: "SignInScreen",
    components: {
        NavigationBar,
    },
    methods: {
        signIn() {
            globals.authManager.signIn();
        }
    }
}

</script>
    
<style scoped>    
#zenLogo {
    display: block;
    margin: 25px auto 25px auto;
}

#roseIcon {
    height: 1em;
    margin: 2px 10px 2px 2px;
}

#btnSignIn {
    background-color: navy;
    color: white;
}

</style>