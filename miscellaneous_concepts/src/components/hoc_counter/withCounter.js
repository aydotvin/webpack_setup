import { useState } from "react";

const withCounter = (WrappedComponent) => {
	const WithCounter = (props) => {
		const [count, setCount] = useState(0);

		const incrementCount = () => {
			setCount((prevCount) => prevCount + 1);
		};
		return <WrappedComponent name="John" count={count} incrementCount={incrementCount} {...props} />;
	};

	return WithCounter;
};

export default withCounter;
