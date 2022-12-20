import { useReducer } from "react";

const reducer = (state, action) => {
	switch (action.type) {
		case "INCREMENT_AGE":
			state = { ...state, age: state.age + 1 };
			break;
		case "CHANGE_NAME":
			state = { ...state, name: action.payload.name };
			break;

		default:
			return state;
	}
	return state;
};

function getStateData(initialState) {
	for (let index = 0; index < 9999; index++) {
		console.log(index);
	}
	console.log(initialState);
	return { name: "john", age: 25 };
}

const UseReducerComponent = () => {
	const [stateData, dispatch] = useReducer(reducer, { name: "john", age: 25 });
	// const [stateData, dispatch] = useReducer(reducer, undefined, getStateData);

	const incrementAge = () => {
		dispatch({ type: "INCREMENT_AGE" });
	};

	const changeName = (e) => {
		const newName = e.target.value;
		dispatch({ type: "CHANGE_NAME", payload: { name: newName } });
	};

	return (
		<div>
			<h2>useReducer()</h2>
			<h4>age is {stateData.age}</h4>
			<button onClick={incrementAge}>Increment age</button>
			<h4>name is {stateData.name}</h4>
			<input type="text" name="name" onChange={changeName} />
		</div>
	);
};

export default UseReducerComponent;
