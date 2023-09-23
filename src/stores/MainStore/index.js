import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMainStore = defineStore('mainStore', () => {
	// STATES
	const isAuthorized = ref(true); // Пока считаем, что всегда авторизованы
	const isStationsLoading = ref(false);
	const stationsRaw = ref({});

	const getStations = async () => {
		isStationsLoading.value = true;

		const response = await fetch('https://api.hh.ru/metro/1');

		stationsRaw.value = await response.json();

		isStationsLoading.value = false;
	};

	// getters: {
	// 	stations(state) {
	// 		return (
	// 			state.lines
	// 				.reduce((acc, current) => {
	// 					acc.push(...current.stations);
	// 					return acc;
	// 				}, [])
	// 				.map((station) => ({
	// 					id: station.id.split('.')[1],
	// 					name: station.name,
	// 					latitude: station.lat,
	// 					longitude: station.lng,
	// 				}))
	// 				.sort((a, b) => a.id - b.id) || []
	// 		);
	// 	},
	// },

	return {
		isAuthorized,
		getStations,
	};
});
