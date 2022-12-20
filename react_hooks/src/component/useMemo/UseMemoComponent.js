import { useState, useMemo } from "react";

const getGreeting = (name) => {
	// console.log(count);
	console.log("greeting called?");
	return `Hello ${name}`;
};

const UseMemoComponent = () => {
	console.log("------------------------");
	console.log("component rendered.");

	const [counter, setCounter] = useState(0);
	const [name, setName] = useState("john");

	const increaseCount = () => {
		setCounter(counter + 1);
	};

	const onChangeHandler = (e) => {
		setName(e.target.value);
	};

	const greeting = getGreeting(name);

	// const greeting = useMemo(() => {
	// 	return getGreeting(name);
	// }, [name]);

	console.log(greeting);
	console.log("greeting");

	return (
		<div>
			<h2>useMemo()</h2>
			<h5>{counter}</h5>
			<button onClick={increaseCount}>increase count</button>
			<input type="text" onChange={onChangeHandler} />
		</div>
	);
};

export default UseMemoComponent;
