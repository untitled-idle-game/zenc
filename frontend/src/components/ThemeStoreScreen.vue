<!-- TODO: Eric: We need a database or atleast a JSON template I can use, since the themes are user uploaded I can't simply hard code theme screens. --->
<script>
import NavigationBar from './NavigationBar.vue';
export default {
    name: "ThemeStoreScreen",
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
<script setup>

</script>
<template>
    <NavigationBar/>
    <div>
        
    </div>
</template>

<style scoped>
</style>