import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

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
		isStationsLoading.value = true;

		const response = await fetch('https://api.hh.ru/metro/1');

		const json = await response.json();

		lines.value = json ? json.lines : [];

		isStationsLoading.value = false;
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
