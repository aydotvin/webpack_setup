import { useState, useEffect, useCallback } from "react";

const UseCallbackChild1 = ({ countryInformation }) => {
	useEffect(() => {
		countryInformation();
		console.log("country info call changed");
	}, [countryInformation]);

	return (
		<div>
			<h5>useCallback child 1</h5>
		</div>
	);
};

const UseCallbackComponent = () => {
	console.log("------------------------");
	console.log("component rendered.");
	const [counter, setCounter] = useState(0);
	const [country, setCountry] = useState("India");

	const increaseCount = () => {
		setCounter(counter + 1);
	};
	const changeCountry = () => {
		setCountry("India " + counter);
	};

	const countryInfo = () => {
		console.log("function initialized.");
		console.log(`country: ${country}`);
	};

	// const countryInformation = countryInfo;
	const countryInformation = useCallback(countryInfo, [country]);

	return (
		<div>
			<h2>useCallback()</h2>
			<h5>count is {counter}</h5>
			<button onClick={increaseCount}>increase count</button>
			<button onClick={changeCountry}>change country</button>
			<UseCallbackChild1 countryInformation={countryInformation}></UseCallbackChild1>
		</div>
	);
};

export default UseCallbackComponent;
