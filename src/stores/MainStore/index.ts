import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

import { getStationsAPI } from '@/api/stations';

import type { Line, Station, StationNormalized } from '@/types/stations';

export const useMainStore = defineStore('mainStore', () => {
	// STATES
	const isStationsLoading = ref(false);
	const lines = ref<Line[]>([]);

	// COMPUTED
	const stations = computed(() => {
		let result: StationNormalized[] = [];

		lines.value.forEach((line) => {
			const stationsNormalized: StationNormalized[] = [
				...line.stations.map((station: Station) => ({
					id: station.id,
					name: station.name,
					latitude: station.lat,
					longitude: station.lng,
					line: line.id,
					lineColor: `#${line.hex_color}`,
				})),
			];

			result = [...result, ...stationsNormalized];
		});

		return result;
	});

	// ACTIONS
	const getStations = async () => {
		try {
			isStationsLoading.value = true;

			const { data: response } = await getStationsAPI();

			lines.value = response ? response.lines : [];
		} catch (error) {
			console.error(error);
		} finally {
			isStationsLoading.value = false;
		}
	};

	return {
		isStationsLoading,
		lines,
		stations,
		getStations,
	};
});
