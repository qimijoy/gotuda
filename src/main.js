import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

// Icons
// https://fontawesome.com/search?o=r&m=free
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
	faHeart,
	faHand,
	faAddressBook,
	faCreditCard,
	faLemon,
	faHourglass,
} from '@fortawesome/free-regular-svg-icons';
library.add([faHeart, faHand, faAddressBook, faCreditCard, faLemon, faHourglass]);

// i18n
import { createI18n, useI18n } from 'vue-i18n';
import { languages, defaultLocale } from '@/i18n';

const i18n = createI18n({
	legacy: false, // Composition API
	fallbackLocale: defaultLocale,
	locale: defaultLocale,
	messages: Object.assign(languages),
});

const app = createApp(App, {
	setup() {
		const { t } = useI18n();
		return { t };
	},
});

app.use(router);
app.use(store);
app.use(i18n);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#gotuda');
