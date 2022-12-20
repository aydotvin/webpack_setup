import { useState } from "react";

const useGreeting = (initialValue = "") => {
	const [name, setName] = useState(initialValue);
	let currentHour = new Date().getHours();

	let greeting = "Welcome";
	if (currentHour > 0 && currentHour < 12) {
		greeting = "Good morning";
	} else if (currentHour >= 12 && currentHour < 16) {
		greeting = "Good afternoon";
	} else if (currentHour > 16) {
		greeting = "Good evening";
	}
	return [`${greeting} ${name}`, setName];
};

export default useGreeting;
