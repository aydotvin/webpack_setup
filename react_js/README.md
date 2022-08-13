# React JS Setup

## Steps:

-   Create the folders `src`, `build` in root directory.
-   `npm init -y`
-   Create and setup `.prettierrc` file in the root. (config available below)

### Babel setup:

-   Install babel packages. `npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/plugin-transform-react-jsx`
-   Create `.babelrc` file in root folder and add the babel presets. This will convert modern js features to format that browsers can understand. (config available below)

### Basics:

-   Create `index.html` file inside the src folder and setup root div.
-   `npm i react react-dom`
-   Create index.js in the src folder and add createRoot and root.render code in it.
-   `git init`
-   Add node_modules, build and other required files to `.gitignore`

### Webpack setup:

-   Install webpack packages. `npm i -D webpack webpack-cli webpack-dev-server webpack-merge html-webpack-plugin babel-loader css-loader style-loader sass sass-loader @pmmmwh/react-refresh-webpack-plugin dotenv-webpack`
-   Setup the webpack environment configs in a webpack folder:
    -   `webpack.common.js` - entry, output, common plugins, common module.rules, etc.
    -   `webpack.dev.js` - mode set to development, dev specific properties such as devtool, devServer, dev specific extra plugins, etc.
    -   `webpack.prod.js` - mode set to production, prod specific optimisation stuff added here.
    -   Import the common config in dev and prod files and use it with merge function.
    -   `@pmmmwh/react-refresh-webpack-plugin` - this preserves the state values when other files/styles are updated in the browser due to webpack listening to changes.

### Absolute path setup:

-   In webpack.common.js, add the following in resolve under common webpack module exports,

```
resolve: {
	extensions: [".jsx", ".js"],
	alias: {
		Root: path.resolve(__dirname, "..", "./"),
		Src: path.resolve(__dirname, "..", "./src/"),
		Asset: path.resolve(__dirname, "..", "./src/assets/"),
		Component: path.resolve(__dirname, "..", "./src/components/"),
	},
},
```

-   This works in scss and css files too.

### .env file setup: (TODO: env files for different environments)

-   Create .env file in root directory and add the keys as required.

```
ENVKEY1=envvalue1
```

-   `npm i -D dotenv-webpack` (already installed in the above webpack step)
-   Import the following in common webpack config and call it under plugins.

```
const Dotenv = require("dotenv-webpack");
...
plugins: [
	new HtmlWebpackPlugin({
		template: path.resolve(__dirname, "..", "./src/index.html"),
	}),
	new Dotenv(),	<< THIS
],
...
```

-   Access in the files the following way.

```
console.log(process.env.ENVKEY1);
```

### package.json script setup:

-   Add the following scripts.

```
"scripts": {
	"dev": "webpack serve --config ./webpack/webpack.dev.js --env flag1=value1 flag2=value2 flag3",
	"build": "webpack --config ./webpack/webpack.prod.js --env flag1=value1",
	"serve": "npx serve -s -l 9001 build",
	"prod": "npm run build && npm run serve"
},
```

-   All the flags passed after --env will be available in the first param in the module.exports function in webpack config file.

```
module.exports = (envs, args) => {
	console.log(envs);
	//	{ WEBPACK_SERVE: true, flag1: 'value1', flag2: 'value2', flag3: true }
	...
}
```

### Config files:

-   `.babelrc` config file data:

```
{
    "presets": ["@babel/preset-react", "@babel/preset-env"],
    "plugins": [
        [
            "@babel/plugin-transform-react-jsx",
            {
                "runtime": "automatic"
            }
        ]
    ]
}

```

-   `.prettierrc` config file data:

```
{
    "semi": true,
    "trailingComma": "all",
    "singleQuote": false,
    "printWidth": 180,
    "tabWidth": 4,
    "endOfLine": "auto"
}
```
