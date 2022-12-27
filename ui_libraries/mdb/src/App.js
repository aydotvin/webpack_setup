import styles from "./App.module.scss";
import Accordian from "./components/Accordian";
import Carousel from "./components/Carousel";
import FormValidation from "./components/FormValidation";

const App = () => {
	return (
		<div className={styles.app}>
			{/* <FormValidation></FormValidation> */}
			{/* <Accordian></Accordian> */}
			<Carousel></Carousel>
		</div>
	);
};

export default App;
