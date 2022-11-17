/* eslint-disable no-unused-vars */
import axios from 'axios';
const querystring = require('querystringify');
import config from '@/config/index.js';
import { Message, MessageBox } from 'element-ui';
// import store from '../store';

// 创建axios对象
const service = axios.create({
	// baseURL: config.BASE_API, // 起到代理的作用
	timeout: 60000,
	withCredentials: true,
});

// request拦截器
service.interceptors.request.use(
	config => {
		// 做登录的判断，如果是登录的状态，可以把用户的token传递个后端

		// config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
		// if (config.method === 'get' || config.method === 'post') {
		//   config.data = qs.stringify({
		//     ...config.data
		//   })
		// }
		// if (store.getters.token) {
		//   config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
		// }
		// 在请求发送之前做一些处理

		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

/*
 * response拦截器
 */
service.interceptors.response.use(
	response => {
		const res = response.data;
		if (res.code !== 0 && response.status !== 200) {
			Message({
				message: res.message,
				type: 'error',
				duration: 5 * 1000,
			});

			// 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
			if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
				MessageBox.confirm(
					'你已被登出，可以取消继续留在该页面，或者重新登录',
					'确定登出',
					{
						confirmButtonText: '重新登录',
						cancelButtonText: '取消',
						type: 'warning',
					}
				).then(() => {
					// store.dispatch('FedLogOut').then(() => {
					// 	location.reload(); // 为了重新实例化vue-router对象 避免bug
					// });
				});
			}
			return Promise.reject('error');
		} else {
			return response.data;
		}
	},
	error => {
		console.log('err' + error); // for debug
		Message({
			message: error.message,
			type: 'error',
			duration: 5 * 1000,
		});
		return Promise.reject(error);
	}
);

/**
 * @desption axios.get方法
 * @param  url 接口地址
 * @param params 访问参数
 * @param cb 回调函数
 * @returns 响应数据
 */
const get = async ({ url = '', params }, cb = () => {}) => {
	try {
		return await service.get(`${url}?${querystring.stringify(params)}`);
	} catch (error) {
		console.error(error);
	}
};

/**
 * @desption axios.post方法
 * @param  url 接口地址
 * @param params 访问参数
 * @param cb 回调函数
 * @returns 响应数据
 */
const post = async ({ url = '', params = {} }, cb = () => {}) => {
	try {
		const res = await service.post(url, params, {
			headers: { 'Content-Type': 'application/json', 'Data-Type': 'json' },
		});
		if (res) {
			return res;
		}
	} catch (error) {
		// debugger
		console.error(error);
	}
};

/**
 * @desption axios.post方法
 * @param  url 接口地址
 * @param params 访问参数
 * @param cb 回调函数
 * @returns 响应数据
 */
const customePost = async (
	{ url = '', params = {}, method = 'get' },
	cb = () => {}
) => {
	try {
		const res = await service({
			url,
			method, // 默认是get
			data: params, // post请求，前端给后端传递的参数
			params, // get请求，前端给后端传递的参数
		});
		if (res) {
			return res;
		}
	} catch (error) {
		// debugger
		console.error(error);
	}
};

/**
 * @desption 获取一段随机文本
 * @returns 响应数据
 */
const getSocial = async () => {
	try {
		return await axios.get('https://api.uixsj.cn/hitokoto/get?type=social');
	} catch (error) {
		console.error(error);
	}
};

export { get, post, customePost, getSocial };
