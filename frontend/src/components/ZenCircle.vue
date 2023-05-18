<template>
    <!-- <img class="circle" src="../assets/circle.png" alt=""/> -->
    <div class="circle mx-auto" :style="{
        backgroundColor: circleColor
    }"></div>
</template>
<script scoped>
import globals from './globals.js'

export default {
    data() {
        return {
            circleColor: "#ffffff"
        }
    },
    mounted() {
        globals.authManager.beginListening((async() => {
            const theme = await globals.authManager.getSelectedTheme();
            this.circleColor = theme.accentColor;
        }).bind(this));
    }
}
</script>
<style scoped>
    .circle {
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