'use strict';
// Template version: 1.2.6
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');

module.exports = {
	// Paths
	assetsSubDirectory: 'static',
	assetsPublicPath: '/',
	proxyTable: {
		// '/api': {
		// 	// 匹配所有以 '/api1'开头的请求路径
		// 	target: 'http://192.168.28.178:8762', // 代理目标的基础路径，你要跨域请求的地址
		// 	changeOrigin: true,
		// 	// pathRewrite: {
		// 	// 	'^/api': '', //路径重写
		// 	// },
		// },
	},

	// Various Dev Server settings
	host: 'localhost', // can be overwritten by process.env.HOST
	port: 9528, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
	autoOpenBrowser: true,
	errorOverlay: true,
	notifyOnErrors: false,
	poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

	// Use Eslint Loader?
	// If true, your code will be linted during bundling and
	// linting errors and warnings will be shown in the console.
	useEslint: true,
	// If true, eslint errors and warnings will also be shown in the error overlay
	// in the browser.
	showEslintErrorsInOverlay: false,

	/**
	 * Source Maps
	 */

	// https://webpack.js.org/configuration/devtool/#development
	devtool: 'cheap-source-map',

	// If you have problems debugging vue-files in devtools,
	// set this to false - it *may* help
	// https://vue-loader.vuejs.org/en/options.html#cachebusting
	cacheBusting: true,

	// CSS Sourcemaps off by default because relative paths are "buggy"
	// with this option, according to the CSS-Loader README
	// (https://github.com/webpack/css-loader#sourcemaps)
	// In our experience, they generally work as expected,
	// just be aware of this issue when enabling this option.
	cssSourceMap: false,
};
