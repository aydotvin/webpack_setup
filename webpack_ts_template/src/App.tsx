import Counter from "Component/counter/Counter";
import ghost2 from "Asset/ghost2.jpg";
import styles from "./App.module.scss";
import Greeting from "Component/greeting/Greeting.js";

const App = () => {
	console.log(process.env.ENVKEY1);
	console.log(process.env.flag1);

	return (
		<div className={`flex-col ${styles.app}`}>
			<Counter></Counter>
			{/* <Greeting></Greeting> */}
		</div>
	);
};

export default App;
