const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
	app: path.join(__dirname, 'app'),
	dist: path.join(__dirname, 'dist'),
	test: path.join(__dirname, 'test')
};

module.exports = {
	devtool: 'eval-source-map',
	entry: {
		app: PATHS.app
	},

	output: {
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
		publicPath: '/',
		path: path.join(PATHS.dist)
	},

	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loaders: ['babel-loader']
		},

		{
			test: /\.jsx?$/,
			loaders: ['eslint-loader'],
			enforce: 'pre',
			include: PATHS.app
		},

		{
			test: /\.js$/,
			loader: 'babel-loader',
			include: path.join(__dirname, 'test'),
			exclude: /node_modules/
		},

		{
			test: /\.json$/,
			use: 'json-loader'
		},

		{
			test: /\.modules\.sass$/,
			loaders: 'style-loader!css-loader' +
				'?modules&importLoaders=1&localIdentName=[path]' +
				'___[name]___[local]___[hash:base64:5]' +
				'!resolve-url-loader!posscss-loader!sass-loader'
		},

		{
			test: /\.sass$/,
			use: ['style-loader', 'css-loader', 'sass-loader']
		},

		{
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}]
	},

	resolve: {
		extensions: ['.js', '.jsx', '.json', '.sass', '.css']
	},

	externals: {
		'cheerio': 'window',
		'react/addons': true,
		'react/lib/ExecutionEnvironment': true,
		'react/lib/ReactContext': true
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
		}),
		new ExtractTextPlugin('main.css')
	]
}

