import UserContext from "./UserContext";
import UseContextChild from "./UseContextChild";
import { useState } from "react";

const UseContextParent = () => {
	const [userData, setUserData] = useState({
		name: "c1",
		age: 23,
	});

	const increaseAge = () => {
		setUserData({ ...userData, age: userData.age + 1 });
	};

	return (
		<UserContext.Provider value={{ userData, increaseAge }}>
			<div>
				<h2>useContext()</h2>
				<UseContextChild></UseContextChild>
			</div>
		</UserContext.Provider>
	);
};

export default UseContextParent;
