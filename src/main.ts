// STYLES
import '@/assets/styles/main.less';
import '@qimijoy/vue-storybook/dist/style.css';

// PINIA
import { createPinia } from 'pinia';
const pinia = createPinia();

// Yandex Maps
import { createYmaps } from 'vue-yandex-maps';

const Ymaps = createYmaps({
	apikey: '6270f71f-202f-40fc-8e1b-b584202f37a1',
});

// APPLICATION
import { createApp } from 'vue';
import App from '@/App.vue';

const app = createApp(App);

app.use(pinia);
app.use(Ymaps);

app.mount('#gotuda');
