import MainPosts from '@/components/pages/MainPosts'
import Main from '@/components/pages/Main'
import PostIdPage from '@/components/pages/PostIdPage'
import PostsWithStore from '@/components/pages/PostsWithStore'
import PostComposition from '@/components/pages/PostComposition'
import { createWebHashHistory, createRouter } from 'vue-router';


const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/posts',
        component: MainPosts,
    },
    {
        path: '/posts/:id',
        component: PostIdPage,
    },
    {
        path: '/store',
        component: PostsWithStore,
    },
    {
        path: '/composition',
        component: PostComposition,
    },
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

export default router;