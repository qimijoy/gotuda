import axios from 'axios';

import type { APIresponse } from '@/types/stations';

/**
 * Get stations list
 * @param cityId - City ID (for Moscow - 1)
 * @returns Promise
 */
export const getStationsAPI = (cityId = 1) => {
	return axios.get<APIresponse>(`https://api.hh.ru/metro/${cityId}`);
};
