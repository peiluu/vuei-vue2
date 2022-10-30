const path = require('path');
/**
 * @desption - 配置scss变量全局引入
 * @param - 自动化导入样式文件 ( 用于颜色、变量、 mixin 等 ) ，可以使用 style-resources-loader 
 *  */ 
function addStyleResource(rule) {
	rule
		.use('style-resource')
		.loader('style-resources-loader')
		.options({
			patterns: [path.resolve(__dirname, './src/styles/mixin.scss')],
		});
}

module.exports = {
	pages: {
		index: {
			entry: 'src/main.js',
			template: 'public/index.html',
			filename: 'index.html',
		},
	},

	chainWebpack: config => {
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
		types.forEach(type =>
			addStyleResource(config.module.rule('scss').oneOf(type))
		);
	},
};
