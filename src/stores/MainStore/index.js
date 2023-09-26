import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

import { getStationsAPI } from '@/api/stations';

export const useMainStore = defineStore('mainStore', () => {
	const route = useRoute();

	// STATES
	const isAuthorized = ref(true); // Пока считаем, что всегда авторизованы

	const isMenuOpen = ref(false);

	const isStationsLoading = ref(false);
	const linesRaw = ref([]);

	const currentRoute = ref(route);

	// COMPUTED
	const lines = computed(() =>
		linesRaw.value.map(({ id, hex_color, name }) => ({
			id,
			name,
			color: hex_color,
		})),
	);

	const stations = computed(() => {
		return linesRaw.value.reduce((acc, line) => {
			const stations = line.stations.map(({ id, name, lat, lng, line }) => ({
				id,
				name,
				latitude: lat,
				longitude: lng,
				line: line.id,
				lineColor: `#${line.hex_color}`,
			}));
			return [...acc, ...stations];
		}, []);
	});

	// ACTIONS
	const getStations = async () => {
		try {
			isStationsLoading.value = true;

			const { data: response } = await getStationsAPI();

			linesRaw.value = response ? response.lines : [];
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
		linesRaw,
		lines,
		stations,
		currentRoute,
		getStations,
		setMenuState,
	};
});
