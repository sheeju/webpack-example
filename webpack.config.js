module.exports = {
	entry:  './src',
	output: {
		path:     'builds',
		filename: 'bundle.js',
		publicPath: 'builds/',
	},
	module: {
		loaders: [
			{
				test:   /\.js/,
				loader: 'babel',
				include: __dirname + '/src',
				query: {
					presets: ['es2015']
				}
			},
			{
				test:   /\.scss/,
				loader: 'style!css!sass',
				//OR - loaders: ['style', 'css', 'sass'],
			},
			{
				test:   /\.html/,
				loader: 'html',
			}
		],
	}
};
