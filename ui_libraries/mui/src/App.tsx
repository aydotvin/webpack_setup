import styles from "./App.module.scss";
import MuiButton from "./components/MuiButton";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiRadioButton from "./components/MuiRadioButton";
import MuiSelect from "./components/MuiSelect";
import MuiSwitch from "./components/MuiSwitch";
import MuiTextField from "./components/MuiTextField";
import MuiTypography from "./components/MuiTypography";

const App = () => {
	return (
		<div className={`${styles.app}`}>
			{/* <MuiTypography></MuiTypography> */}
			{/* <MuiButton></MuiButton> */}
			{/* <MuiTextField></MuiTextField> */}
			{/* <MuiSelect></MuiSelect> */}
			{/* <MuiRadioButton></MuiRadioButton> */}
			{/* <MuiCheckbox></MuiCheckbox> */}
			<MuiSwitch></MuiSwitch>
		</div>
	);
};

export default App;
