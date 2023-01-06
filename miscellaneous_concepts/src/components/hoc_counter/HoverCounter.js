import { useState } from "react";
import withCounter from "./withCounter";

const HoverCounter = ({ name, age, count, incrementCount }) => {
	// const [count, setCount] = useState(0);

	// const incrementCount = () => {
	// 	setCount((prevCount) => prevCount + 1);
	// };

	return (
		<div>
			<h2>Hello {name}</h2>
			<p>Age is {age}</p>
			<button onMouseOver={incrementCount}>Hovered {count} times</button>
		</div>
	);
};

export default withCounter(HoverCounter);
