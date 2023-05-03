<template>
    <BackgroundMenu/>
    <div>
        <img src="../assets/logo.png" id="zenLogo">
        <button class="btn" id="btnSignIn" @click.left="onClick"><img id="roseIcon" src="../assets/rose-logo.png" alt="">Sign in via Rosefire</button>
    </div>
</template>

<script>
import AuthManager from "./AuthManager.vue";
import BackgroundMenu from "./BackgroundMenu.vue";

console.log(AuthManager.user);

export default {
    name: "SignInScreen",
    components: {
        BackgroundMenu,
    },
    methods: {
        onClick() {
            AuthManager.methods.signIn();
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