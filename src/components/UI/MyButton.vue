<template>
    <button class="my-btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'my-button',
    }
</script>

<style scoped>
    .my-btn{
        background-color: transparent;
        border: 2px solid rgb(132, 140, 255);
        border-radius: 5px;
        padding: 5px 10px;
    }

    .my-btn:active {
        background-color: rgb(132, 140, 255);
    }
</style>