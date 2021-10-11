<template>
    <div class="wrapper">
        {{ like }}
        <h1 class="title-main">Page with posts</h1>
        <my-little-input
            v-model="serch"
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
                v-model="selecedSort"
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
    import PostForm from "@/components/PostForm" ;
    import PostList from "@/components/PostList";
    import {usePosts} from "@/components/hooks/usePosts";


    export default {
        setup(props) {
            const {posts, totalPage} = usePosts(10);

            return {posts, totalPage}
        },
        components: {
            PostForm, PostList
        },

        data: () => ({
            visibale: false,
            sort: [{name: 'title', value: 'title'}, {name: 'body', value: 'body'}, {name: 'id', value: 'id'}],
            selecedSort: 'id',
            serch: '',
            page: 1,
            limit: 10,
        }),

        methods: {
            create(post) {
                this.posts.unshift(post);
                this.visibale = false;
            },

            remove(post) {
                this.posts = this.posts.filter( p => p.id != post.id);
            },

            showDialog() {
                this.visibale = true;
            },

            
        },

        computed: {
            sortArray() {
               if(this.selecedSort == 'id') {
                     return [...this.posts].sort( (post1, post2) => {
                        return post1[this.selecedSort] > post2[this.selecedSort] ? 1 : -1;
                    });
                } else {
                    return [...this.posts].sort( (post1, post2) => {
                        return post1[this.selecedSort]?.localeCompare(post2[this.selecedSort]);
                });
                };
            },

            serchPost() {
                return [...this.sortArray].filter(post => post.title.toLowerCase().includes(this.serch.toLowerCase()))
            },
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

    /* .pagination {
        font-size: 25px;
        padding: 5px;
        margin: 0 5px 0 0;
        border-radius: 5px;
        display: inline-block;
        border: 1px solid rgb(127, 136, 255);;
    }

    .current-page {
        background-color: rgb(127, 136, 255);
    } */
</style>