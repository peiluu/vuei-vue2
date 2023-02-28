const path = require('path');

/**
 * @desption - 配置scss变量自动化导入样式文件全局引入
 * @param -  ( 用于颜色、变量、 mixin 等 ) ，可以使用 style-resources-loader
 */
function addStyleResource(rule) {
	rule
		.use('style-resource')
		.loader('style-resources-loader')
		.options({
			patterns: [path.resolve(__dirname, './src/styles/mixin.scss')],
		});
}

/**
 * @desption - 配置webpackd打包项,vue会自动加载vue.config.js，将里面你的配置作用在打包的时候，调整脚手架的工工作模式
 * 脚手架会把你的配置和webpack中已经写好的默认配置进行合并，以你的为主，不破坏核心配置
 */
module.exports = {
	// 关闭保存文件时自动lint校验
	lintOnSave: false,
	// 页面配置
	pages: {
		index: {
			entry: 'src/main.js',
			template: 'public/index.html',
			filename: 'index.html',
			// outputDir:'build'
		},
	},
	// 通过链式编程的形式,来修改默认的 webpack 配置
	chainWebpack: config => {
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
		types.forEach(type =>
			addStyleResource(config.module.rule('scss').oneOf(type))
		);
	},

	// 本地服务器配置，
	// 通过axios去请求接口时，不需要配置devServer，本地运行和通过服务器请求时都是通过配置axios中的baseURL配置来访问api地址的
	devServer: {
		// 本地服务器配置(npm run serve)
		port: 1000, // 端口x
		host: 'localhost', // 域名
		// https: true, // 是否开启https
		open: true, // 是否在开启服务器后自动打开浏览器访问该服务器
		// 访问 ： http://localhost:8080/api/info
		// 代理到 http://localhost:8081/api/info
		// 真正的接口地址：http://localhost:8081/new/api/info
		// 浏览器那里看到的是代理后的请求，其实显示的是代理前的请求。
		proxy: {
			'/api': {
				// target: 'http://192.168.28.178:8762', //代理地址，这里设置的地址会代替axios中设置的baseURL。将/api前的域名代理为http://localhost:8081
				target: 'http://localhost:1002',
				pathRewrite: { '/api': '/' }, // 重写/api , 这个 /api 已经在 pathRewrite 被替换掉了，接口就变成404
			},
			'/sendUser': {
				target: 'http://localhost:1002',
				changeOrigin: true, //是否跨域
			},
		},
	},
};
