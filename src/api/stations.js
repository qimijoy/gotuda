import axios from 'axios';

export const getStationsAPI = (cityId = 1) => {
	// 1 - Москва
	return axios.get(`https://api.hh.ru/metro/${cityId}`);
};
