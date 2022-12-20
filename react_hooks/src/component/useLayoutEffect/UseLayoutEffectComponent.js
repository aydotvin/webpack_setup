import { useState, useEffect, useLayoutEffect } from "react";

const UseLayoutEffectComponent = () => {
	const [counter, setCounter] = useState(0);
	const [showUI, setShowUI] = useState(true);

	useEffect(() => {
		console.log("use effect");
		// setTimeout(() => {
		// 	setShowUI(true);
		// }, 5000);
		alert("normal effect");
	}, []);

	useLayoutEffect(() => {
		console.log("use layout effect");
		alert("layout effect");
	}, []);

	const UI = () => {
		if (showUI) {
			return (
				<div>
					<h4>hello</h4>
					<h5>{counter}</h5>
					<button
						onClick={() => {
							setCounter(counter + 1);
						}}
					>
						increase count
					</button>
				</div>
			);
		} else {
			return "Loading...";
		}
	};

	return (
		<div>
			<h2>useLayoutEffect()</h2>
			{UI()}
		</div>
	);
};

export default UseLayoutEffectComponent;
