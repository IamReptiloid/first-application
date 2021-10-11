import axios from "axios";
import {ref, onMounted} from "vue";

export function usePosts(limit) {
    const posts = ref([]);
    const totalPage = ref(0);
    const featching = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
                params: {
                    _page: 1,
                    _limit: limit,
                },
            });
            totalPage.value = Math.ceil(response.headers['x-total-count'] / limit)
            posts.value = response.data;
        } catch (error) {
            alert(error);
        }
    };
    onMounted(featching)
    return {
        posts, totalPage
    }
}