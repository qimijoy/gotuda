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

const app = createApp(App);

app.use(router);
app.use(store);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#gotuda');
