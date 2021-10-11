<template>
    <div class="posts" v-if="posts.length > 0">
        <transition-group name="list-item">
            <div v-for="post in posts" :key="post.id">
                    <post-item :post="post" @remove="$emit('remove', post)"/>
            </div>
        </transition-group>
    </div>
    <div class="else" v-else>
        <h2>Empty</h2>
    </div>
    
</template>

<script>
    import PostItem from "@/components/PostItem"


    export default {
        components: {
            PostItem
        },
        props:{
            posts: {
                type: Array,
                required: true,
            },
        },
    }
</script>

<style scoped>
    .else {
        margin: 0 auto;
        max-width: 100px;
        color: rgb(98, 171, 255);
    }

    .list-item-item {
        display: inline-block;
        margin-right: 10px;
    }

    .list-item-enter-active,
    .list-item-leave-active {
        transition: all 0.4s ease;
    }

    .list-item-enter-from,
    .list-item-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }

    .list-item-move {
    transition: transform 0.5s ease;
    }
</style>