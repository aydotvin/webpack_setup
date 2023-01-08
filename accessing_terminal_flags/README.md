## Passing terminal flag value to the webpack and eventually to set it as env variable accessible via process.env.variable:
-   Install "cross-env" npm package.
-   Syntax:
```
	"start": "cross-env variable_name_1=$npm_config_<flag_name_1> variable_name_2=$npm_config_<flag_name_2> webpack serve --config ./webpack/webpack.dev.js"
```

-	variable_name_1 - this is the variable that is accessible in the webpack config via "process.env.variable_name_1". Same with variable_name_2.
-   flag_name_1 - this is the flag name that has to be entered in the terminal.

-   Example terminal command: `npm run start --flag_name_1=flagvalue1 --flag_name_2=flagvalue2`

-   Once the command is run, the values are available in webpack config file as follows:
```
	const flag1 = process.env.variable_name_1
	const flag2 = process.env.variable_name_2
```

-   Now under plugins:
```
	new webpack.DefinePlugin({
		"process.env.flag1": JSON.stringify(flag1),
		"process.env.flag2": JSON.stringify(flag2),
	}),
```
	-	Now the same flags can be accessed in the app using "process.env.flag1 and process.env.flag2"

---

## Passing terminal flag value from one command to another:
-	Install "cross-env" npm package which provides the "cross-env-shell".
- Syntax:
```
	"echoMessage": "cross-env-shell clientVariable=$npm_config_client themeVariable=$npm_config_theme echo \"Hello $clientVariable, theme is $themeVariable\"",
	"greet": "cross-env clientVariable=$npm_config_client themeVariable=$npm_config_theme npm run echoMessage",
```

	- Example terminal command: `npm run greet --client=clientA --theme=light`

- Once `greet` script is run, npm configs - `client` and `theme` will be set and those values can be accessed in other scripts.
- When `echoMessage` is called from `greet` script, npm configs - `client` and `theme` will be assigned to the variables listed for them in the "echoMessage" script, i.e, "clientVariable" and "themeVariable". These variables can be accessed in the script using $clientVariable and $themeVariable.
- This can be used when certain actions needs to be taken based on the client name or anything similar.

- `cross-env-shell` is needed to pass flag values from one command to another.

---

## Copying files from one place to another:
-   Install "copyfiles" npm package.
-   Script command:\
`"copyfiles -f \"./src/.../file1.ext\" \"./src/.../file2.ext\" ./copyDestination/"`
-   Copies file1 and file2 to a new folder "copyDestination" in the root.