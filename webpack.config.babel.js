import path from 'path'
import validate from 'webpack-validator'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

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
			exclude: [/\.module\.sass$/],
			use: ExtractTextPlugin.extract({
				use: [
					'css-loader',
					'postcss-loader',

					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							includePaths: [
								path.join(__dirname, 'node_modules')
							],

							outputStyle: 'compressed'
						}
					}
				]
			})
		},

		{
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}]
	},

	resolve: {
		extensions: ['.js', '.jsx', '.json', '.sass', '.css']
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
		}),
	]
}

