import { useState } from "react";
import withCounter from "./withCounter";

const ClickCounter = ({ name, age, count, incrementCount }) => {
	// const [count, setCount] = useState(0);

	// const incrementCount = () => {
	// 	setCount((prevCount) => prevCount + 1);
	// };

	return (
		<div>
			<h2>Hello {name}</h2>
			<p>Age is {age}</p>
			<button onClick={incrementCount}>Clicked {count} times</button>
		</div>
	);
};

export default withCounter(ClickCounter);
