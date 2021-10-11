<template>
    <div class="wrapper">
        <h1 class="title-main">Page with posts</h1>
        <my-little-input
            :model-value="serch"
            @update:model-value="setSerch"
            placeholder="Serch..."
            class="serch"
        />
        <div class="nav">
            <div class="main-btn">
                <my-button 
                    class="btn" 
                    @click="showDialog"
                >
                    Create Post
                </my-button>
            </div>
            <my-little-select
                :model-value="selecedSort"
                @update:model-value="setSelecedSort"
                :options="sort"
            />
        </div>
        
        <my-little-dialog 
            v-model:show="visibale"
        >
            <post-form
                @create="create"
            />
        </my-little-dialog>
        
        <post-list 
            @remove="remove"
            :posts="serchPost"
        />
        <div 
            class='observer'
            v-intersection="loadPost"
        >
        </div>
    </div>
</template>

<script>
    import PostForm from "@/components/PostForm" 
    import PostList from "@/components/PostList" 
    import {mapState, mapGetters, mapMutations, mapActions} from "vuex";


    export default {
        components: {
            PostForm, PostList
        },

        data: () => ({
            visibale: false,
        }),

        methods: {
            ...mapMutations({
                setPage: 'post/setPage',
                setSerch: 'post/setSerch',
                setSelecedSort: 'post/setSelecedSort',
            }),
            ...mapActions({
                fetch: 'post/fetch',
                loadPost: 'post/loadPost',
            }),
            create(post) {
                this.posts.unshift(post);
                this.visibale = false;
                console.log(this.posts);
            },

            remove(post) {
                this.posts = this.posts.filter( p => p.id != post.id);
            },

            showDialog() {
                this.visibale = true;
            },

        },

        mounted() {
            this.fetch();
        },

        computed: {
            ...mapState({
                posts: state => state.post.posts,
                sort: state => state.post.sort,
                selecedSort: state => state.post.selecedSort,
                serch: state => state.post.serch,
                page: state => state.post.page,
                limit: state => state.post.limit,
                totalPage: state => state.post.totalPage,
            }),
            ...mapGetters({
                sortArray: 'post/sortArray',
                serchPost: 'post/serchPost',
            }),
        },
    }
</script> 

<style scoped>
    .wrapper{
        width: 800px;
        margin: 0 auto;
        padding: 10px 0 10px 0;
    }

    .title-main {
        margin: 0 0 10px 0;
    }

    .nav {
        margin: 0 0 20px 0;
        display: flex;
        justify-content: space-between;
    }

    .btn {
        margin: 0 10px 0 0;
    }

    .serch {
        margin: 0 0 10px 0;
    }

    .observer {
        height: 20px;
        /* background: aquamarine; */
    }

</style>