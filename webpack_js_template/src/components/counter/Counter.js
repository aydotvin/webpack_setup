import { useState } from "react";
import styles from "./Counter.module.scss";
import ghost2 from "Asset/ghost2.jpg";

const Counter = () => {
	const [count, setCount] = useState(0);

	const increaseCount = () => {
		setCount((prevCount) => prevCount + 1);
	};

	return (
		<div className={`flex-col ai-center ${styles.counterContainer}`}>
			<h2 className={styles.heading}>Counter</h2>
			<p>Count is {count}</p>
			<button onClick={increaseCount}>Increase count</button>
			{/* <img src={ghost2} alt="test image" className={`${styles.image}`} /> */}
		</div>
	);
};

export default Counter;
