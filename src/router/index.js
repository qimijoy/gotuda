import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import GoTuda from '@/views/GoTuda.vue';
import GoVisited from '@/views/GoVisited.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: HomeView,
		},
		{
			path: '/gotuda',
			name: 'GoTuda',
			component: GoTuda,
		},
		{
			path: '/visited',
			name: 'GoVisited',
			component: GoVisited,
		},
	],
});

export default router;
