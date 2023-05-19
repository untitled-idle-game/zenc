<template>
    <!-- <img class="circle" src="../assets/circle.png" alt=""/> -->
    
    <div class="biggercircle mx-auto" :style="{
        backgroundColor: circleOutline
    }">
    <div class="circle mx-auto" :style="{
        backgroundColor: circleColor
    }">
    </div>
    </div>
</template>
<script scoped>
import globals from './globals.js'

export default {
    data() {
        return {
            circleColor: "#ffffff",
            circleOutline: "#000000"
        }
    },
    mounted() {
        globals.authManager.beginListening((async() => {
            const theme = await globals.authManager.getSelectedTheme();
            this.circleColor = theme.accentColor;
            this.circleOutline = theme.fgColor;
        }).bind(this));
    }
}
</script>
<style scoped>
    .circle {
        position: absolute;
        border-radius: 50%;
        align-self: center;
        height: 90%;
        width: 90%;
        /*
            Put top edge and left edge in the center
        */
        top: 50%;
        left: 5%;
        margin: -45% 0px 0px -45%;

        /* animation-name: grow;
        animation-duration: 7.5s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-direction: alternate; */
    }
    .biggercircle {
        align-content: center;
        width: 200px;
        height: 200px;
        max-width: 30%;
        max-height: 30%;
        /* background-color: blue; */
        border-radius: 50%;

        animation-name: grow;
        animation-duration: 7.5s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-direction: alternate;
    }
    @keyframes grow {
        from {
            transform: scale(0.5);
        } to {
            transform: scale(1);
        }
    }
</style>