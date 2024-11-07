import axios from 'axios';

/**
 * Get stations list
 * @param cityId - City ID (for Moscow - 1)
 */
export const getStationsAPI = (cityId = 1) => {
	return axios.get(`https://api.hh.ru/metro/${cityId}`);
};
