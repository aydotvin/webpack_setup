import { useContext } from "react";
import UserContext from "./UserContext";

const UseContextNestedChild = () => {
	const { userData, increaseAge } = useContext(UserContext);

	return (
		<div>
			<h4>nested child.</h4>
			<p>User data in nested child component.</p>
			<h5>name is {userData.name}</h5>
			<h5>age is {userData.age}</h5>
			<button onClick={increaseAge}>Increase age</button>
		</div>
	);
};

export default UseContextNestedChild;
