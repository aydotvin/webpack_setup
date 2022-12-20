import { useState, useEffect } from "react";

const UseEffectComponent = () => {
	const [counter, setCounter] = useState(0);
	const [postData, setPostData] = useState([]);

	const increaseCount = () => {
		setCounter(counter + 1);
	};

	useEffect(() => {
		console.log("getting external data");
		fetch(`https://jsonplaceholder.typicode.com/comments`)
			.then((res) => {
				return res.json();
			})
			.then((response) => {
				console.log(response);
				console.log("loading external data in state");
				setTimeout(() => {
					setPostData(response);
				}, 3000);
			});
	}, []);

	useEffect(() => {
		console.log("count is " + counter);
		if (counter != 0 && counter % 2 == 0) {
			return () => {
				console.log(`clean up of counter ${counter} running..`);
			};
		}
	}, [counter]);

	return (
		<div className="row">
			<div className="col-md-12">
				<h2>useEffect()</h2>
				<h4>count is {counter}</h4>
				<button onClick={increaseCount}>increase count</button>
				{postData.map((eachPost) => {
					return (
						<div key={eachPost.id}>
							<p>{eachPost.email}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default UseEffectComponent;
