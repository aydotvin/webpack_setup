import useCounter from "./useCounter";

const HoverCounter = ({ age }) => {
	const [name, count, incrementCount] = useCounter();

	return (
		<div>
			<h2>Hello {name}</h2>
			<p>Age is {age}</p>
			<button onMouseOver={incrementCount}>Hovered {count} times</button>
		</div>
	);
};

export default HoverCounter;
