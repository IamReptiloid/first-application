import axios from 'axios'

export const postModule = {
    state: () => ({
        posts: [],
        sort: [{name: 'title', value: 'title'}, {name: 'body', value: 'body'}, {name: 'id', value: 'id'}],
        selecedSort: 'id',
        serch: '',
        page: 1,
        limit: 10,
        totalPage: 0,
    }),

    getters: {
        sortArray(state) {
            if(state.selecedSort == 'id') {
                return [...state.posts].sort( (post1, post2) => {
                     return post1[state.selecedSort] > post2[state.selecedSort] ? 1 : -1;
                 });
             } else {
                return [...state.posts].sort( (post1, post2) => {
                     return post1[state.selecedSort]?.localeCompare(post2[state.selecedSort]);
             });
             };
         },

        serchPost(state, getters) {
            return [...getters.sortArray].filter(post => post.title.toLowerCase().includes(state.serch.toLowerCase()))
        },
    },

    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },

        setSelecedSort(state, selecedSort) {
            state.selecedSort = selecedSort;
        },

        setSerch(state, serch) {
            state.serch = serch;
        },

        setPage(state, page) {
            state.page = page;
        },

        setTotalPage(state, totalPage) {
            state.totalPage = totalPage;
        },
    },

    actions: {
        async fetch({state, commit}) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
                    params: {
                        _page: state.page,
                        _limit: state.limit,
                    },
                });
                commit('setTotalPage', Math.ceil(response.headers['x-total-count'] / state.limit));
                commit('setPosts', response.data);
            } catch (error) {
                console.log('error');
            }
        },

        async loadPost({state, commit}) {
            try {
                commit('setPage', state.page + 1);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
                    params: {
                        _page: state.page,
                        _limit: state.limit,
                    },
                });
                commit('setTotalPage', Math.ceil(response.headers['x-total-count'] / state.limit));
                commit('setPosts', [...state.posts, ...response.data]);
            } catch (error) {
                console.log(error);
            }
        },
    },
    namespaced: true
}