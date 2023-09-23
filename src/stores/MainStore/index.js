import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMainStore = defineStore('mainStore', () => {
	// STATES
	const isAuthorized = ref(true); // Пока считаем, что всегда авторизованы

	const isMenuOpen = ref(false);

	const isStationsLoading = ref(false);
	const lines = ref([]);

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
		getStations,
		setMenuState,
	};
});
