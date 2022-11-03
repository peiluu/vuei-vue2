const { NODE_ENV } = process.env;

const config = {
	development: {
		BASE_API: 'http://192.168.28.178:8762',
	},
	production: {
		BASE_API: 'http://192.168.28.178:8762',
	},
};
export default config[NODE_ENV];
