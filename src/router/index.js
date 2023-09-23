import { createRouter, createWebHistory } from 'vue-router';
import AuthView from '@/views/AuthView.vue';
import HomeView from '@/views/HomeView.vue';
import GoStations from '@/views/GoStations.vue';
import GoVisited from '@/views/GoVisited.vue';

import { useMainStore } from '@/stores/MainStore';

const router = createRouter({
	history: createWebHistory(),
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
			name: 'GoStations',
			component: GoStations,
			meta: { layout: 'GoMainLayout', needAuth: true },
		},
		{
			path: '/visited',
			name: 'GoVisited',
			component: GoVisited,
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
