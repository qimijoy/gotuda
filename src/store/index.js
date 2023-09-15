import { createStore } from 'vuex';

export default createStore({
	state: {
		isAuthorized: true, // временно. Считаем, что всегда авторизован
		lines: [],
	},
	getters: {
		stations(state) {
			return (
				state.lines
					.reduce((acc, current) => {
						acc.push(...current.stations);
						return acc;
					}, [])
					.map((station) => ({
						id: station.id.split('.')[1],
						name: station.name,
						latitude: station.lat,
						longitude: station.lng,
					}))
					.sort((a, b) => a.id - b.id) || []
			);
		},
	},
	mutations: {
		async getLines(state) {
			fetch('https://api.hh.ru/metro/1')
				.then((response) => response.json())
				.then((json) => (state.lines = json.lines));
		},
	},
});
