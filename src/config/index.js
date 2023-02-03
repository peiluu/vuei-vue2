const { NODE_ENV } = process.env;

// 根据环境变量加载不同的参数
const config = {
	development: {
		BASE_API: 'http://localhost:1000',
		// BASE_API: 'http://127.0.0.1:5005',
	},
	production: {
		BASE_API: 'http://localhost:1000',
	},
};
export default config[NODE_ENV];
