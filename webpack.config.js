const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath : '/'

	},
	mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias : {
			"@assets": path.resolve(__dirname, "src/assets/"),
            "@components": path.resolve(__dirname, "src/components/"),
            "@containers": path.resolve(__dirname, "src/containers/"),
            "@pages": path.resolve(__dirname,"src/pages/"),
            "@styles": path.resolve(__dirname, "src/styles/"),
            "@logos": path.resolve(__dirname, "src/assets/Logos/"),
            "@icons": path.resolve(__dirname, "src/assets/Icons/"),
            "@hooks": path.resolve(__dirname, "src/hooks/"),
            "@context": path.resolve(__dirname, "src/context/"),
            "@routes": path.resolve(__dirname,"src/routes/"),
			"@public": path.resolve(__dirname, "public/"),
        }
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.(css|scss)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',	
					'postcss-loader',		
				  ]
				
			},
			{
				test:  /\.(png|jp(e*)g|svg|gif|webp)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[hash]-[name].[ext]',
						},
					},
				],
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
	],
    devServer: {
		historyApiFallback: true,
      }
}