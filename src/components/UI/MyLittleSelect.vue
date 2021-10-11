<template>
    <select v-model="modelValue" class="select" @change="changeOption">
        <option disabled value="">choose an option</option>
        <option 
            v-for="option in options" 
            :key="option.value" 
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>

<script>
    export default {
        name: 'my-little-select',

        props: {
            modelValue: {
                type: String,
            },
            options: {
                type: Array,
                dafualt: () => [],
            },
        },

        methods: {
            changeOption(event) {
                this.$emit('update:modelValue', event.target.value)
            },
        },
    }
</script>

<style scoped>
    .select {
        border-color: rgb(132, 140, 255);
        border-radius: 5px;
    }
</style>