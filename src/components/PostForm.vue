<template>
    <h2 class="post-create">Create post</h2>
        <form @submit.prevent="create" class='form-post'>
            <my-little-input
                v-model="post.title"
                class='text-input' 
                placeholder="title"
            />
            <my-little-input 
                v-model="post.body"
                class='text-input'
                placeholder="body"
            />
            <my-button 
            class='create-btn'
            >
                Create
            </my-button>
        </form>
</template>

<script>
    export default {

        data: () => ({
            post: {
                title: "",
                body: "",
            },
        }),

        methods: {
            create() {
                if(this.post.title && this.post.body) {
                    this.post.id = Date.now();
                    this.$emit('create', this.post);
                    this.post = {
                        title: '',
                        body: '',
                    };
                }
            },
        }
    }
</script>

<style scoped>
    .post-create {
        width: 800px;
        margin: 0 auto 20px auto;
    }

    .form-post {
        width: 800px;
        margin: 0 auto 50px auto;
        display: flex;
        flex-direction: column;
    }

    .text-input {
        display: block;
        width: 100%;
        margin: 0 0 10px 0;
    }

    .create-btn{
        align-self: flex-end;
        padding: 5px 20px;
    }

</style>