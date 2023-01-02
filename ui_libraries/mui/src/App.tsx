import styles from "./App.module.scss";
import MuiButton from "./components/MuiButton";
import MuiSelect from "./components/MuiSelect";
import MuiTextField from "./components/MuiTextField";
import MuiTypography from "./components/MuiTypography";

const App = () => {
	return (
		<div className={`${styles.app}`}>
			{/* <MuiTypography></MuiTypography> */}
			{/* <MuiButton></MuiButton> */}
			{/* <MuiTextField></MuiTextField> */}
			<MuiSelect></MuiSelect>
		</div>
	);
};

export default App;
