import { useState, useRef, useEffect } from "react";

const UseRefComponent3 = () => {
	const [count, setcount] = useState(0);
	const refCount = useRef(0);

	useEffect(() => {
		console.log("state updated " + count + " times.");
	});

	return (
		<div>
			<h2>useRef hook 1.</h2>
			<h4>count is {count}</h4>
			<button
				onClick={() => {
					setcount((prevCount) => {
						return prevCount + 1; // update state on state button click. component re-renders and runs useEffect.
					});
				}}
			>
				Increase state count
			</button>
			<h4>ref count is {refCount.current}</h4>
			<button
				onClick={() => {
					refCount.current += 5; // update state on useRef button click. No change in UI but the value is updated. When state is changed after this, the new ref count is shown in UI.
					console.log("ref count is " + refCount.current);
				}}
			>
				Increase useRef count
			</button>
		</div>
	);
};

export default UseRefComponent3;
