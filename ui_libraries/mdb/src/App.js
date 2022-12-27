import styles from "./App.module.scss";
import FormValidation from "./components/FormValidation";

const App = () => {
	return (
		<div className={styles.app}>
			<FormValidation></FormValidation>
		</div>
	);
};

export default App;
