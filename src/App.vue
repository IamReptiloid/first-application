<template>
    <div class='app'>
        <my-little-nav/>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    .app {
        max-width: 800px;
        margin: 0 auto;
    }
</style>