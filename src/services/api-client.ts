import axios, { AxiosRequestConfig } from 'axios';
export interface FetchResponse<T> {
	count: number;
	next: string | null;
	results: T[];
}

const axiosInstance = axios.create({
	baseURL: 'https://api.rawg.io/api', //prepended to all requests: https://api.rawg.io/api...
	params: {
		key: 'f433d4594dbe480c99c45012b24ee1bc', // appended at end of url: ...hollow-knight?key=f433d4594dbe480c99c45012b24ee1bc
	},
});

class APIClient<T> {
	constructor(private endpoint: string) {}

	getAll = (config?: AxiosRequestConfig) => {
		return axiosInstance
			.get<FetchResponse<T>>(this.endpoint, config)
			.then((res) => res.data);
	};

	get = (id: number | string) => {
		return axiosInstance
			.get<T>(this.endpoint + '/' + id) // 'https://api.rawg.io/api/games/hollow-knight?key=f433d4594dbe480c99c45012b24ee1bc'
			.then((res) => res.data);
	};

	getMovieTrailers = (id: string) => {
		return axiosInstance
			.get<T>(`${this.endpoint}/${id}/movies`)
			.then((res) => res.data);
	};
}

export default APIClient;

// export default axios.create({
//   baseURL: 'https://api.rawg.io/api',
//   params: {
//     key: 'f433d4594dbe480c99c45012b24ee1bc'
//   }
// })
