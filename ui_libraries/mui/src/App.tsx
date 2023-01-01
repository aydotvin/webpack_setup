import styles from "./App.module.scss";
import MuiButton from "./components/MuiButton";
import MuiTypography from "./components/MuiTypography";

const App = () => {
	return (
		<div className={`${styles.app}`}>
			{/* <MuiTypography></MuiTypography> */}
			<MuiButton></MuiButton>
		</div>
	);
};

export default App;
