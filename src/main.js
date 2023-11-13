import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';

// Pinia
import { createPinia } from 'pinia';
const Pinia = createPinia();

// Styles
import '@/assets/styles/index.less';
import '@qimijoy/vue-storybook/dist/style.css';

const app = createApp(App);

app.use(router);
app.use(Pinia);

app.mount('#gotuda');
