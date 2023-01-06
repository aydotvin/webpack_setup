import { useState } from "react";

const useCounter = () => {
	const [count, setCount] = useState(0);
	const incrementCount = () => {
		setCount((prevCount) => prevCount + 1);
	};
	const name = "john";

	return [name, count, incrementCount];
};

export default useCounter;
