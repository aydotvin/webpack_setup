import styles from "./App.module.scss";
import ClassPrefix from "Component/class_prefix/ClassPrefix.js";
import AlertExample from "Component/alert_example/AlertExample";
import CustomizedButton from "Component/customized_button/CustomizedButton";

const App = () => {
	return (
		<div className={styles.app}>
			<AlertExample></AlertExample>
			<CustomizedButton></CustomizedButton>
			<ClassPrefix></ClassPrefix>
		</div>
	);
};

export default App;
