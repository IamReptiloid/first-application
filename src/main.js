import { createApp } from 'vue';
import App from '@/App.vue';
import components from "@/components/UI";
import router from '@/router/router';
import Vintersection from '@/components/directives/Vintersection';
import store from '@/components/store';
import axios from 'axios';


const app = createApp(App);
app.directive('intersection', Vintersection);
components.forEach(component => {
    app.component(component.name, component);
});
app
    .use(router)
    .use(store)
    .mount('#app')
