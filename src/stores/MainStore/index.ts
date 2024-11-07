import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

import { getStationsAPI } from '@/api/stations';

export const useMainStore = defineStore('mainStore', () => {
	const route = useRoute();

	// STATES
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
		return linesRaw.value.reduce((acc, lineRaw) => {
			const stationsFromLine = lineRaw.stations.map(({ id, name, lat, lng, line }) => ({
				id,
				name,
				latitude: lat,
				longitude: lng,
				line: line.id,
				lineColor: `#${line.hex_color}`,
			}));

			return [...acc, ...stationsFromLine];
		}, []);
	});

	// ACTIONS
	const getStations = async () => {
		try {
			isStationsLoading.value = true;

			const { data: response } = await getStationsAPI();

			linesRaw.value = response ? response.lines : [];
		} catch (error) {
			console.error(error);
		} finally {
			isStationsLoading.value = false;
		}
	};

	return {
		isStationsLoading,
		linesRaw,
		lines,
		stations,
		currentRoute,
		getStations,
	};
});
