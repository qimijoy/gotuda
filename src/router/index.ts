import { createRouter, createWebHistory } from 'vue-router';
import AuthView from '@/views/AuthView.vue';
import HomeView from '@/views/HomeView.vue';
import StationsView from '@/views/StationsView.vue';

import { useMainStore } from '@/stores/MainStore';

import { basePath } from '@/constants/paths.constant';

const router = createRouter({
	history: createWebHistory(basePath),
	routes: [
		{
			path: '/auth',
			name: 'Auth',
			component: AuthView,
			meta: { layout: 'GoAuthLayout', needAuth: false },
		},
		{
			path: '/',
			name: 'Home',
			component: HomeView,
			meta: { layout: 'GoMainLayout', needAuth: true },
		},
		{
			path: '/stations',
			name: 'Stations',
			component: StationsView,
			meta: { layout: 'GoMainLayout', needAuth: true },
		},
	],
});

router.beforeEach((to, from, next) => {
	const mainStore = useMainStore();

	const isAuthorized = mainStore.isAuthorized;
	const needAuth = to.matched.some((record) => record.meta.needAuth);

	if (needAuth && !isAuthorized) {
		next({ name: 'Auth' });
	} else {
		next();
	}
});

export default router;
