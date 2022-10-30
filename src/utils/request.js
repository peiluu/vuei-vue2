/* eslint-disable no-unused-vars */
import axios from 'axios';
import config from '@/config/index.js';

const http = axios.create({
	baseURL: config.baseURL,
	timeout: 60000,
	withCredentials: true,
});

const get = async ({ url = '', params = {} }) => {
	try {
		const response = await axios.get('192.168.1.1/'+ url, {
			a:1
		});
		console.log(response);
	} catch (error) {
		// debugger
		console.error(error);
	}
};

const post = async ({ url = '', params = {} }) => {
	try {
		const response = await axios.post(url);
		console.log(response);
	} catch (error) {
		// debugger
		console.error(error);
	}
};

export { get, post };
