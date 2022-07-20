# React TS Setup

## Steps:

-	Create the folders `src`, `build` in root directory.
-	`npm init -y`
-	Create and setup `.prettierrc.js` file in the root. (config available below)

### TS setup:
-	`npm i -D typescript @types/react @types/react-dom`
-	Create and setup `tsconfig.json` in the root. (config available below)

### Babel setup:
-	Install babel packages. `npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript`
-	Create `.babelrc` file in root folder and add the babel presets. This will convert modern js features to format that browsers can understand. (config available below)

### Basics:
-	Create `index.html` file inside the src folder and setup root div.
-	`npm i react react-dom`
-	Create index.tsx in the src folder and add createRoot and root.render code in it.
-	`git init`
-	Add node_modules, build and other required files to `.gitignore`

### Webpack setup:
-	Install webpack packages. `npm i -D webpack webpack-cli webpack-dev-server webpack-merge html-webpack-plugin babel-loader css-loader style-loader sass sass-loader @pmmmwh/react-refresh-webpack-plugin tsconfig-paths-webpack-plugin dotenv-webpack`
-	Setup the webpack environment configs in a webpack folder:
	-	`webpack.common.js` - entry, output, common plugins, common module.rules, etc.
	-	`webpack.dev.js` - mode set to development, dev specific properties such as devtool, devServer, dev specific extra plugins, etc.
	-	`webpack.prod.js` - mode set to production, prod specific optimisation stuff added here.
	-	Import the common config in dev and prod files and use it with merge function.
	-	`@pmmmwh/react-refresh-webpack-plugin` - this preserves the state values when other files/styles are updated in the browser due to webpack listening to changes.

### Absolute path setup:
-	npm i -D tsconfig-paths-webpack-plugin (already installed in the above webpack step)
-	Add the following compiler options to the `tsconfig.json`
```
"baseUrl": "./",
"paths": {
	"Src/*": ["./src/*"],
	"Component/*": ["./src/components/*"],
	"Asset/*": ["./src/assets/*"],
	... add paths as required
},
```
-	In `webpack.common.js` import the following package and use it in resolve.plugins under common webpack module exports
```
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
...
resolve: {
	extensions: [".tsx", ".ts", ".jsx", ".js"],
	plugins: [new TsconfigPathsPlugin()],	<< THIS
},
...
```

### .env file setup: (TODO: env files for different environments)
-	Create .env file in root directory and add the keys as required.
```
ENVKEY1=envvalue1
```
-	`npm i -D dotenv-webpack` (already installed in the above webpack step)
-	Import the following in common webpack config and call it under plugins.
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
-	Access in the files the following way.
```
console.log(process.env.ENVKEY1);
```

### Declarations setup:
-	Add the declarations file (declarations.d.ts) in src folder with the following code in it.
```
declare module "*.module.css";
declare module "*.module.scss";
declare module "*.module.sass";
declare module "*.jpg";
... more to be added here
```

### package.json script setup:
-	Add the following scripts.
```
"scripts": {
	"dev": "webpack serve --config ./webpack/webpack.dev.js --env flag1=value1 flag2=value2 flag3",
	"build": "webpack --config ./webpack/webpack.prod.js --env flag1=value1",
	"serve": "npx serve -s -l 9001 build",
	"prod": "npm run build && npm run serve"
},
```
-	All the flags passed after --env will be available in the first param in the module.exports function in webpack config file.
```
module.exports = (envs, args) => {
	console.log(envs);
	//	{ WEBPACK_SERVE: true, flag1: 'value1', flag2: 'value2', flag3: true }
	...
}
```

### Config files:
-	`tsconfig.json` file data:
```
{
	"compilerOptions": {
		"baseUrl": "./",
		"paths": {
			"Component/*": ["./src/components/*"],
			"Asset/*": ["./src/assets/*"]
		},
		"target": "ESNEXT" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,
		"module": "ESNext" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
		"moduleResolution": "node" /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */ /* Type declaration files to be included in compilation. */,
		"lib": ["DOM", "ESNext"] /* Specify library files to be included in the compilation. */,
		"jsx": "react-jsx" /* This makes sure *import React from "react"* is not needed in the components. */,
		"noEmit": true /* Do not emit outputs. */,
		"isolatedModules": true /* Transpile each file as a separate module. */,
		"esModuleInterop": true /* Enables *import * as x from "..."*. Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,
		"strict": true /* Enable all strict type-checking options. */,
		"skipLibCheck": true /* Skip type checking of declaration files. */,
		"forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */,
		"resolveJsonModule": true,
		"removeComments": true,
		"allowJs": true 			/* Allow javascript files to be compiled. Useful when migrating JS to TS */,
		// "checkJs": true 			/* Report errors in .js files. Works in tandem with allowJs. */,
	},
	"include": ["src/**/*"] //	Tell TS to monitor everything inside the src folder
}
```

-	`.babelrc` config file data:
```
{
	"presets": [
		"@babel/preset-env",
		[
			"@babel/preset-react",
			{
				"runtime": "automatic"
			}
		],
		"@babel/preset-typescript"
	]
}
```

-	`.prettierrc.js` config file data:
```
module.exports = {
	semi: true,
	trailingComma: "all",
	singleQuote: false,
	printWidth: 180,
	tabWidth: 4,
	endOfLine: "auto",
};
```