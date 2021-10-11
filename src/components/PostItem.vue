<template>
    <div class="post">
        <section class="title">
            <strong>{{ post.title }}</strong>
        </section>
        {{ post.id }}
        <section class="body">
            <p class="body-text">
            <strong>body:</strong> {{ post.body }}
            </p>
            <div class="post-btn">
                <my-button class="btn" @click="$emit('remove', post)">
                    del
                </my-button> 
                <my-button style="margin-left: 5px" class="btn" @click="$router.push(`/Posts/${post.id}`)">
                    Open
                </my-button> 
            </div>
        </section>

    </div>
</template>

<script>
    export default {
        props: {
            post: {
                type: Object,
                require: true,
            },
        },
    }
</script>

<style scoped>
    .post {
        max-width: 800px;
        margin: 0 auto 20px auto;
        border: 2px solid rgb(127, 136, 255);
    }

    .title {
        background-color: teal;
        text-align: center;
    }

    .body {
        display: flex;
    }

    .body-text {
        flex: 1 1 auto;
    }

    .post-btn {
        margin: 5px;
        display: flex;
        align-items: center;
    }

</style>