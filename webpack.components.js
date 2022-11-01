/* eslint-disable no-unused-vars */

const path = require('path');
const glob = require('glob');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const [VueLoaderPlugin] = require('vue-loader')

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const list = {
	// card: './components/lib/card/index.js'
};

async function makeList(dirPath, list) {
	const files = glob.sync(`${dirPath}/**/index.js`);
	console.log(files);
	files.forEach(item => {
		const component = item.split(/[/.]/)[2];
		console.log(component);
		list[component] = `./${item}`;
		console.log(list);
	});
}

makeList('components', list);

module.exports = {
	entry: list,
	output: {
		filename: '[name].umd.js',
		// path: 'dist',
		path: path.resolve(__dirname, 'componentsdist'),
		library: 'vui',
		libraryTarget: 'umd',
	},
	
	mode: 'production',
	plugins: [new VueLoaderPlugin()],
	module: {
		// 对于什么样的文件使用什么样的loader
		rules: [
			{
        test: /\.scss$/,
        use: ["css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          // MiniCssExtractPlugin.loader
          "css-loader",
          {
            // 压缩css
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [
                // postcss的插件
                // require("postcss-preset-env")(),
              ],
            },
          },
        ],
      },
			{
				test: /\.vue$/,
				use: [
					{
						loader: 'vue-loader',
					},
				],
			},
		],
	},
};
