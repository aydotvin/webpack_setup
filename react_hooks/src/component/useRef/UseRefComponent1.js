import { useRef, useState } from "react";

const UseRefComponent1 = () => {
	const [count, setcount] = useState(0);
	const prevCount = useRef(0);

	return (
		<div>
			<h2>useRef hook 3.</h2>
			<h4>
				count is {count}, previous count was {prevCount.current}
			</h4>
			<button
				onClick={() => {
					prevCount.current = count;
					setcount(count + 1);
				}}
			>
				Increase count
			</button>
		</div>
	);
};

export default UseRefComponent1;
