<template>
    <img class="circle" src="../assets/circle.png" alt="">
</template>

<style scoped>
    .circle {
        max-width: 20%;
        height: auto;

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