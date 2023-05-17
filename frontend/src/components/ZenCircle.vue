<template>
    <!-- <img class="circle" src="../assets/circle.png" alt=""/> -->
    <div class="circle mx-auto"></div>
</template>

<style scoped>
    .circle {
        width: 200px;
        height: 200px;
        max-width: 30%;
        max-height: 30%;
        background-color: blue;
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