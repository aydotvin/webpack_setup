import { useState } from "react";

const getInitialCountBasedOnSomeLogic = () => {
	// for (let index = 0; index < 9999; index++) {
	// 	console.log(index);
	// }
	return 150;
};

const UseStateComponent = () => {
	const [counter, setCounter] = useState(0);
	// const [counter, setCounter] = useState(getInitialCountBasedOnSomeLogic);
	// const [userData, setUserData] = useState({
	// 	age: 23,
	// 	count: 97,
	// });

	const increaseCount = () => {
		setCounter(counter + 1);
		setCounter(counter + 1);
		setCounter(counter + 1);
	};
	const decreaseCount = () => {
		setCounter((prevCounter) => {
			return prevCounter - 1;
		});
		setCounter((prevCounter) => {
			return prevCounter - 1;
		});
		setCounter((prevCounter) => {
			return prevCounter - 1;
		});
	};

	// const increaseUserAge = () => {
	// 	setUserData({ ...userData, age: userData.age + 1 });
	// };
	// const increaseUserCount = () => {
	// 	setUserData({ ...userData, count: userData.count + 1 });
	// };

	return (
		<div className="row">
			<div className="col-md-12">
				<h2>useState()</h2>
				<h4>count is {counter}</h4>
				<button onClick={increaseCount}>increase count</button>
				<button onClick={decreaseCount}>decrease count</button>
			</div>
			{/* <div className="col-md-12">
				<h4>age is: {userData.age}</h4>
				<h4>count is: {userData.count}</h4>
				<button onClick={increaseUserAge}>increase user age</button>
				<button onClick={increaseUserCount}>increase user count</button>
			</div> */}
		</div>
	);
};

export default UseStateComponent;
