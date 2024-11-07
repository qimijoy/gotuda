import { createRouter, createWebHistory } from 'vue-router';
import AuthView from '@/views/AuthView.vue';
import HomeView from '@/views/HomeView.vue';
import StationsView from '@/views/StationsView.vue';

import { basePath } from '@/constants/paths.constant';

const router = createRouter({
	history: createWebHistory(basePath),
	routes: [
		{
			path: '/auth',
			name: 'Auth',
			component: AuthView,
		},
		{
			path: '/',
			name: 'Home',
			component: HomeView,
		},
		{
			path: '/stations',
			name: 'Stations',
			component: StationsView,
		},
	],
});

export default router;
