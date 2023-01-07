import styles from "./App.module.scss";
import Counter from "Component/counter/Counter";

const App = () => {
	console.log(process.env.ENVKEY1);
	console.log(process.env.flag1);

	return (
		<div className={`flex-col ${styles.app}`}>
			<Counter></Counter>
		</div>
	);
};

export default App;
