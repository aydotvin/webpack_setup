import styles from "./App.module.scss";
import HocCounter from "Component/hoc_counter";
import CustomHookCounter from "Component/custom_hook_counter";

const App = () => {
	return (
		<div className={styles.app}>
			<HocCounter />
			<CustomHookCounter />
		</div>
	);
};

export default App;
