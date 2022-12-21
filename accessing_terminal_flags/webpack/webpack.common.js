const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const client = process.env.clientVariable;
const theme = process.env.themeVariable;
console.log("client in common webpack", client);
console.log("theme in common webpack", theme);

module.exports = {
	entry: path.resolve(__dirname, "..", "./src/index.js"),
	output: {
		path: path.resolve(__dirname, "..", "./build"),
		filename: "bundle.js",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "..", "./src/index.html"),
		}),
		new webpack.DefinePlugin({
			"process.env.client": JSON.stringify(client),
			"process.env.theme": JSON.stringify(theme),
		}),
		new Dotenv(),
	],
	resolve: {
		extensions: [".jsx", ".js"], //	This allows us to leave the file extensions when importing. Webpack checks the files with extensions in the given order.
		alias: {
			Root: path.resolve(__dirname, "..", "./"),
			Src: path.resolve(__dirname, "..", "./src/"),
			Asset: path.resolve(__dirname, "..", "./src/assets/"),
			Component: path.resolve(__dirname, "..", "./src/components/"),
		},
	},
	module: {
		rules: [
			{
				test: /\.(js)x?$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: {
								auto: true,
								localIdentName: "[hash:base64]",
							},
						},
					},
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: {
								auto: true,
								localIdentName: "[hash:base64]",
							},
						},
					},
					"sass-loader",
				],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: "asset/inline",
			},
		],
	},
};
