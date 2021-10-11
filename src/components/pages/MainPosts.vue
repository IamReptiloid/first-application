<template>
    <div class="wrapper">
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
        <!-- <div 
            class="pagination" 
            v-for="pageNumber in totalPage" 
            :key="pageNumber"
            :class='{
                "current-page": page === pageNumber,
            }'
            @click="changePage(pageNumber)"
        >
            {{ pageNumber }}
        </div> -->
    </div>


</template>

<script>
    import PostForm from "@/components/PostForm" 
    import PostList from "@/components/PostList" 
    import axios from "axios"


    export default {
        components: {
            PostForm, PostList
        },

        data: () => ({
            posts: [],
            visibale: false,
            sort: [{name: 'title', value: 'title'}, {name: 'body', value: 'body'}, {name: 'id', value: 'id'}],
            selecedSort: 'id',
            serch: '',
            page: 1,
            limit: 10,
            totalPage: 0,
        }),

        methods: {
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

            async fetch() {
                try {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
                        params: {
                            _page: this.page,
                            _limit: this.limit,
                        },
                    });
                    this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
                    this.posts = response.data;
                } catch (error) {
                    alert('error');
                }
            },

            async loadPost() {
                try {
                    this.page++;
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
                        params: {
                            _page: this.page,
                            _limit: this.limit,
                        },
                    });
                    this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
                    this.posts = [...this.posts, ...response.data];
                } catch (error) {
                    alert('error');
                }
            },

            // changePage(pageNumber) {
            //   this.page = pageNumber;
            //   this.fetch();
            // },
        },

        mounted() {
            this.fetch();       
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