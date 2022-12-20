import { useRef, useEffect } from "react";

const UseRefComponent2 = () => {
	const refElement = useRef();
	const refElement2 = useRef();

	const focusPlease = () => {
		refElement.current.placeholder = "Type name here..";
		refElement.current.focus();
		refElement2.current.placeholder = "Type description here..";
	};

	return (
		<div>
			<h2>useRef hook 2.</h2>
			<input ref={refElement} type="text" /> <br />
			<textarea ref={refElement2} type="text" cols={40} rows={5} />
			<button onClick={focusPlease}>Focus on input</button>
		</div>
	);
};

export default UseRefComponent2;
