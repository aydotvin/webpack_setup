import useCounter from "./useCounter";

const ClickCounter = ({ age }) => {
	const [name, count, incrementCount] = useCounter();

	return (
		<div>
			<h2>Hello {name}</h2>
			<p>Age is {age}</p>
			<button onClick={incrementCount}>Clicked {count} times</button>
		</div>
	);
};

export default ClickCounter;
