import { createRouter, createWebHistory } from 'vue-router';
import AuthView from '@/views/AuthView.vue';
import HomeView from '@/views/HomeView.vue';
import StationsView from '@/views/StationsView.vue';
import VisitedView from '@/views/VisitedView.vue';

import { useMainStore } from '@/stores/MainStore';

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
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
		{
			path: '/visited',
			name: 'Visited',
			component: VisitedView,
			meta: { layout: 'GoMainLayout', needAuth: true },
		},
	],
});

router.beforeEach((to, from, next) => {
	const mainStore = useMainStore();

	// Авторизован ли пользователь
	const isAuthorized = mainStore.isAuthorized;

	// Идем ли мы на роут, где необходима авторизация
	const needAuth = to.matched.some((record) => record.meta.needAuth);

	// Если идем на роут, где нужна авторизация, а ее нет у пользователя, то редиректим на форму авторизации
	if (needAuth && !isAuthorized) {
		// next('/auth?message=login');
		next('/auth');
	} else {
		next();
	}
});

export default router;
