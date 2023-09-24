import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import { getStationsAPI } from '@/api/stations';

export const useMainStore = defineStore('mainStore', () => {
	const route = useRoute();

	// STATES
	const isAuthorized = ref(true); // Пока считаем, что всегда авторизованы

	const isMenuOpen = ref(false);

	const isStationsLoading = ref(false);
	const lines = ref([]);

	const currentRoute = ref(route);

	// ACTIONS
	const getStations = async () => {
		try {
			isStationsLoading.value = true;

			const { data } = await getStationsAPI();

			lines.value = data ? data.lines : [];
		} catch (error) {
			console.log(error);
		} finally {
			isStationsLoading.value = false;
		}
	};

	const setMenuState = (value) => {
		isMenuOpen.value = value;
	};

	return {
		isAuthorized,
		isMenuOpen,
		isStationsLoading,
		lines,
		currentRoute,
		getStations,
		setMenuState,
	};
});
