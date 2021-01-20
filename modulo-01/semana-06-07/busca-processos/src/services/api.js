import axios from 'axios';

import * as constants from './constants';

const BASE_URL = `${constants.DEVINHOUSE_API}/processo`;

class ApiService {
	getAllProcesses() {
	return axios.get(BASE_URL)
		.then(response => response.data)
					.catch(error => {
			throw error;
		});
	}
	
	searchProcesses(query) {
		return axios.get(`${BASE_URL}?q=${query}`)
			.then(response => response.data)
						.catch(error => {
				throw error;
			});
		}
  
  getProcess(id) {
		return axios.get(`${BASE_URL}/${id}`)
			.then(response => response.data)
            .catch(error => {
				throw error;
			});
	}
	
	createProcess(process) {
		return axios.post(BASE_URL, process)
			.catch(error => {
				throw error;
			})
	}

	updateProcess(filme) {
		return axios.put(BASE_URL, filme)
			.catch(error => {
				throw error;
			})
	}
    
	deleteProcess(id) {
	return axios.delete(`${BASE_URL}/${id}`)
					.catch(error => {
			throw error;
		});
	}
}

export default new ApiService();