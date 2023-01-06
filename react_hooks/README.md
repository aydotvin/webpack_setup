## useState:

- useState is a Hook that lets you add React state to function components.
- Syntax:\
  `const [state, setState] = useState(initialValue);`
  - state: the actual state data that is used in the component.
  - setState: the function via which the state is updated.
- Two ways to set initialValue,
  - Direct assignment,\
     `const [counter, setCounter] = useState(0);`
  - Via a function (lazy initialization)\
     `const [counter, setCounter] = useState(getInitialCountBasedOnSomeLogic);`
- Two ways to update the state:
  - Directly setting the new state value. In this case, the new state value is not dependant on the previous state.\
     `setCounter(98);`
  - Setting the state via a callback function, if the new state value is based on the previous state value.
  ```
  	setCounter((prevState)=>{
  		console.log(prevState);
  		const newState = prevState % 2 == 0 ? prevState+1000 : prevState-1000	//	some logic..
  		return newState
  	});
  ```
- State updates are not merged:

  - To update a single property in the state object, the complete state object has to be given to the state setter. One should not just specify that one property to the state setter.
  - Example:

  ```
  	const [userData, setUserData] = useState({
  		age: 23,
  		count: 97,
  	});
  ```

  - Correct:

  ```
  	const increaseUserAge = () => {
  		setUserData({ ...userData, age: userData.age + 1 });		//	Include all previous data and update new state update on top of it.
  	};
  	const increaseUserCount = () => {
  		setUserData({ ...userData, count: userData.count + 1 });
  	};
  ```

  - Wrong:

  ```
  	const increaseUserAge = () => {
  		setUserData({ age: userData.age + 1 });			//	This will override everything else in the state object and only have age proprety.
  	};
  	const increaseUserCount = () => {
  		setUserData({ count: userData.count + 1 });		//	This will override everything else in the state object and only have count proprety.
  	};
  ```

- Note that this works in case of CLASS COMPONENT state updates:

```
	increaseAge = () => {
		this.setState({
			age: this.state.age + 1,
		});
	};
	increaseCount = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};
```

- State updates are batched together, ie., if there are multple set state calls happening one after the other they are grouped together and updated in one go. This prevents unnecesary re-rendering of the component.

---

## useEffect:

- useEffect is a Hook that lets you perform actions/side effects when the functional component is rendered/updated/removed.
- Once the page is loaded, the ajax calls to load data or event handlers are setup in useEffect.

- This performs the actions of componentDidMount, componentDidUpdate, and componentWillUnmount.
- Syntax:

```
useEffect(() => {
	console.log("one of the dependants got udpated..");
	return () => {
		console.log(`clean up of previous state running..`);
	};
}, [dependants...]);
```

- Three types:

  - Without any dependant parameter.
    - Runs everytime the component is rendered. Almost never used.
    ```
    	useEffect(() => {
    		console.log("component rendered");
    	});
    ```
  - With empty array as dependant parameter.

    - In this case, useEffect block runs only the first time when the component is mounted.
    - External api calls to get data is done here.

    ```
    	useEffect(() => {
    		console.log("component rendered");
    	}, []);
    ```

  - With dependants listed in the array.
    - In this case, the useEffect block runs only when the listed dependants gets changed.
    ```
    	useEffect(() => {
    		console.log("counter updated.");
    	}, [counter]);
    ```

### Note:

- DO NOT set state data within the useEffect while having that state as a dependancy.

```
	useEffect(() => {
		setCounter(counter+1);	//	Wrong
	}, [counter]);
```

- The dependencies are compared to their previous value, and only if there is any change from the previous value, the useEffect will run.

---

## useLayoutEffect:

- This is similar to useEffect, but this runs before the UI is displayed on the browser.
- Any effect written inside this will block the UI from being painted/dispalyed until all the effects are run.
- Use this if one needs to modify the DOM for some reason after the component is rendered.

## useEffect vs useLayoutEffect:

- useLayoutEffect: If you need to mutate the DOM and/or do need to perform measurements.
- useEffect: If you don't need to interact with the DOM at all or your DOM changes are unobservable (seriously, most of the time you should use this).

---

## useReducer:

- Similar to useState, but this allow us to perform a variety of actions on the same state data based on the type of the action requested.
- Syntax:\
  `const [stateData, dispatch] = useReducer(reducer, initialState, initFunction);` - reducer is a function that handles all the different actions that are performed on the state data. - Based on the action type passed, the reducer will modify the state and returns it and the state will get updated. - initialState is the initial state for the component. - initFunction - this is used to lazily initialize the initial state data.

- Reducer:

```
	const reducer = (state, action) => {
		switch (action.type) {
			case "INCREMENT_AGE":
				state = { ...state, age: state.age + 1 };
				break;
			case "CHANGE_NAME":
				state = { ...state, name: action.payload.name };
				break;
		}
		return state;
	};
```

- Accessing state data:

```
	<h4>age is {stateData.age}</h4>
```

- Updating state data:

```
	dispatch({ type: "CHANGE_NAME", payload: { name: newName } });
	dispatch({ type: "INCREMENT_AGE" });
```

---

## useRef:

- This hook is used for three purposes,
  - To keep track of a variable thorughout the lifetime of the component.
  - To access elements and use the native javascript functions like focus(), blur(), etc. to read, update the element.
  - To keep track of the previous state in the UI.
- Does not cause re-render of component when ref value is updated.

---

## useContext:

- This hook is used makes the parent's state data and its setters available to all its child components without prop drilling.
- Steps:
  - Create a context without or without initial state.
  - Wrap the parent component with the context provider and pass the required data in value attribute.
  - In the child component, call the useContext and pass it the context that was created earlier. This will give access to the parent's data to the child.

---

## useMemo:

- This hook is used to memoize the result of an expensive function call and only runs the function, when its dependant parameters change.
- Syntax:

```
	const result = expensiveCalculation(data);
	const result = useMemo(() => {
		return expensiveCalculation(data);
	}, [data])
```

- Only runs the calculation, if the data changes.

---

## useCallback:

- Similar to useMemo but this memoizes the actual function instead of the function result as done in useMemo.
- There is no need for a function to be reinitialized if the function's dependants are not changed.
- Syntax:

```
	const getParentInfoMethod = useCallback(expensiveCalculation, [data])
```

- This method is passed to the child component. It will get initialzed again only if the country changes.

---

## customHooks:

- When a certain complex logic has to be used for multiple components, a custom hook is created.
- New logics are added on top of existing hooks to form custom hooks.

---
