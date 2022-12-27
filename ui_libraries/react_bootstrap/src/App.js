import styles from "./App.module.scss";
import ClassPrefix from "Component/class_prefix/ClassPrefix.js";
import AlertExample from "Component/alert_example/AlertExample.js";
import CustomizedButton from "Component/customized_button/CustomizedButton.js";
import Grid from "Component/layout/Grid.js";
import StackLayout from "Component/layout/Stack.js";
import Products from "Component/products/Products";

const App = () => {
	return (
		<div className={styles.app}>
			<AlertExample></AlertExample>
			<CustomizedButton></CustomizedButton>
			<ClassPrefix></ClassPrefix>
			<hr />
			<Grid></Grid>
			<StackLayout></StackLayout>
			<Products></Products>
		</div>
	);
};

export default App;
