<template>
    <div class="dialog" v-if="show" @click="hideDialog">
        <div @click.stop class="dialog-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import toggleMixin from '@/components/mixins/toggleMixin'
    export default {
        name: 'my-little-dialog',
        mixins: [toggleMixin],
    }
</script>

<style scoped>
    .dialog {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .dialog-content {
        padding: 15px;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        min-width: 300px;
        min-height: 100px;
    }
</style>