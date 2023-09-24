import axios from 'axios';

export const getStationsAPI = () => {
	// 1 - Москва
	return axios.get('https://api.hh.ru/metro/1');
};
