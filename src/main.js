// STYLES
import '@/assets/styles/main.less';
import '@qimijoy/vue-storybook/dist/style.css';

// ROUTER
import router from '@/router';

// PINIA
import { createPinia } from 'pinia';
const pinia = createPinia();

// APPLICATION
import { createApp } from 'vue';
import App from '@/App.vue';

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount('#gotuda');
