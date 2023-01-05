# Styled Components

-   `npm i`
-   `npm run dev`

## Index:

-   [Steps](#steps)
-   [Benefits](#benefits)
-   [Accessing props](#accessing-props)
-   [Structure](#structure)
-   [Extending styled components](#extending-styled-components)
-   [Displaying as another element](#displaying-as-another-element)
-   [Adding attributes](#adding-attributes)
-   [Adding animations](#adding-animations)
-   [Theming](#theming)
-   [Global styles](#global-styles)

## Steps:

-   Setup react app.
-   Install vscode-styled-components extension.
-   Install `styled-components` package.
-   Import the package in the required component.\
    `import styled from "styled-components";`
-   Define the component with styles using the styled function.

```
const StyledButton = styled.button`
	border: 2px solid #4caf50;
	background-color: #4caf50;
	color: #fff;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	cursor: pointer;
	transition: 0.5s all ease-out;
`;
```

-   Export and import the component as required and use as any other component.

> [Go to index](#index)

---

## Benefits:

-   Only the css required for the specific components are sent to the browser.
-   Easy to clean up the css for any component.
-   Dynamic styling based on props and other variables.
-   The styles are localised to the component, hence easy to maintain and debug.
-   Auto vendor prefixing for newer features.

> [Go to index](#index)

---

## Accessing props:

-   `styled-components` automatically passes all the props and children of the custom component which are available to access while defining the custom component.

-   Definition:

```
export const StyledButton = styled.button`
	border: 2px solid #4caf50;
	background-color: ${(props) => (props.variant === "outlined" ? "#fff" : "#4caf50")};
	color: ${(props) => (props.variant === "outlined" ? "#4caf50" : "#fff")};
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	cursor: pointer;
	transition: 0.5s all ease-out;
`;
```

-   Usage:

```
<StyledButton variant="outlined">Styled Button 2</StyledButton>

```

> [Go to index](#index)

---

## Structure:

-   `<Component>` folder > `Component.js` + `Component.styles.js`
-   `counter > Counter.js + Counter.styles.js`

> [Go to index](#index)

---

## Extending styled components:

-   While defining a styled component, instead of using the html elements, pass the already designed custom component to the `styled` method and proceed with styling it.
-   Note that the `styled` is being called here in case of extending custom components.

```
export const FancyButton = styled(StyledButton)`
	background-image: linear-gradient(to right, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
	border: none;
`;

```

> [Go to index](#index)

---

## Displaying as another element:

-   `styled-components` take in an `as` property which is used to change the element type.

```
<FancyButton as="a">Fancy Button 2</FancyButton>

```

> [Go to index](#index)

---

## Adding attributes:

-   To add attributes, call the `attrs` function and return an object with the attribute name and value.
-   To access the properties of the component return a function (which has access to props) and this in turn returns the object with required attributes.
-   To add custom attributes, `data-*` needs to be prepended to the custom attribute name.

```
export const SubmitButton = styled(StyledButton).attrs(({ name, type, age }) => {
	return {
		name,
		type,
		"data-age": age,
	};
})

```

> [Go to index](#index)

---

## Adding animations:

-   Animations can be added using `keyframes` function provided by `styled-components`.

```
const rotate = keyframes`
	0%{
		transform: translateX(0)
	}
	50%{
		transform: translateX(100px)
	}
	100%{
		transform: translateX(0)
	}
`;

```

> [Go to index](#index)

---

## Theming:

-   Import `ThemeProvider` from `styled-components`.

```
import { ThemeProvider } from "styled-components";
```

-   Wrap the `App` component with `ThemeProvider` and pass the `theme` object with required themes.

```
const theme = {
	dark: {
		primary: "#000",
		text: "#fff",
	},
	light: {
		primary: "#fff",
		text: "#000",
	},
};
```

```
<ThemeProvider theme={theme}>
	<div className={styles.app}>
		...
	</div>
</ThemeProvider>
```

-   Access the theme object inside the props.

```
export const ThemedButton = styled(StyledButton)`
	border: 2px solid ${(props) => props.theme.dark.primary};
	...
`;

```

> [Go to index](#index)

---

## Global styles:

-   Global styles can be added using `createGlobalStyle` function provided by `styled-components`.
-   Import the function.
-   Declare the global styles.
-   Add the global styles component after the theme provider.

```
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
	...
	customFont: "JetBrains Mono",
	...
};

const GlobalStyle = createGlobalStyle`
	* {
		font-family: ${(props) => props.theme.customFont || "sans-serif"};
	}
`;

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			...
		</ThemeProvider>
	);
};
```

> [Go to index](#index)

---

## Reference:

[Codevolution](https://www.youtube.com/playlist?list=PLC3y8-rFHvwgu-G08-7ovbN9EyhF_cltM)
