import { ThemeProvider, createGlobalStyle } from "styled-components";
import StyledButton, { FancyButton, SubmitButton, AnimatedButton, ThemedButton } from "Component/button/Button.js";
import styles from "./App.module.scss";

const theme = {
	dark: {
		primary: "#000",
		text: "#fff",
	},
	light: {
		primary: "#fff",
		text: "#000",
	},
	customFont: "JetBrains Mono",
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
			<div className={styles.app}>
				<button>Regular Button</button>
				<hr />
				<StyledButton>Styled Button 1</StyledButton>
				<hr />
				<StyledButton variant="outlined">Styled Button 2</StyledButton>
				<hr />
				<FancyButton>Fancy Button 1</FancyButton>
				<hr />
				<FancyButton as="a">Fancy as Button 2</FancyButton>
				<hr />
				<SubmitButton name="john" type="button" age={97}>
					Submit Button 1 with attributes
				</SubmitButton>
				<hr />
				<AnimatedButton>Animated Button</AnimatedButton>
				<hr />
				<ThemedButton>Themed Button</ThemedButton>
			</div>
		</ThemeProvider>
	);
};

export default App;
