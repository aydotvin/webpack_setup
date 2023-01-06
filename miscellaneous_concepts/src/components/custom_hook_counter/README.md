## Custom Hook Counter

-   Custom hook file name starts with `use` - useCounter, useLogic, useData, etc.
-   Extract the state and other data logic to this new file.
-   Return the required data after all logics.

```
const useCounter = () => {
	const [count, setCount] = useState(0);
	const incrementCount = () => {
		setCount((prevCount) => prevCount + 1);
	};
	const name = "john";

	return [name, count, incrementCount];
};
```

-   Use the custom hook inside multiple related components which returns the required data in required format.

```
const ClickCounter = () => {
	const [name, count, incrementCount] = useCounter();

	return (
		<div>
			<h2>Hello {name}</h2>
			<button onClick={incrementCount}>Clicked {count} times</button>
		</div>
	);
};
```
