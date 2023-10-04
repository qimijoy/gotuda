import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';

// Pinia
import { createPinia } from 'pinia';

// i18n
import { createI18n, useI18n } from 'vue-i18n';
import { languages, defaultLocale } from '@/i18n';
const localStorageLang = localStorage.getItem('lang');

const i18n = createI18n({
	legacy: false, // Composition API
	fallbackLocale: defaultLocale,
	locale: localStorageLang || defaultLocale,
	messages: Object.assign(languages),
});

// Styles
import '@/assets/styles/index.less';

const app = createApp(App, {
	setup() {
		const { t } = useI18n();

		return { t };
	},
});

app.use(router);
app.use(createPinia());
app.use(i18n);

app.mount('#gotuda');
