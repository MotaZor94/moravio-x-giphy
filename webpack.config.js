const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				options: { presets: ['@babel/env', '@babel/preset-react'] },
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /.(jpg|jpeg|png|gif|mp3|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name]-[hash:8].[ext]',
						},
					},
				],
			},
		],
	},
	resolve: { extensions: ['*', '.js', '.jsx'] },
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js',
	},
	devServer: {
		port: 3000,
		hot: true,
		compress: true,
		devMiddleware: {
			publicPath: 'http://localhost:3000/dist/',
		},
		static: {
			directory: path.join(__dirname, 'public'),
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(__dirname, 'public', 'index.html'),
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
};
