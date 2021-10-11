<template>
    <input :value="modelValue" @input="updateInput" type="text" class="text-input">
</template>

<script>
    export default {
        name: 'my-little-input',
        props: {
            modelValue: String,
        },

        methods: {
            
            updateInput(event) {
                this.$emit('update:modelValue', event.target.value);
            },
        }
    }
</script>

<style scoped>
    .text-input {
        padding: 0;
        width: 100%;
        border: 2px solid rgb(127, 136, 255);
        height: 40px;
        font-size: 20px
    }
</style>