## Example:

- In component file:

```
	import React from "react";

	class Clock extends React.Component {
		//	constructor should return props to the parent using super() and all the varying params should be declared in the this.state variable.
		constructor(props) {
			super(props);
			this.state = { timestamp: new Date() };
		}

		componentDidMount() {
			this.timerId = setInterval(() => {
				this.tick();
			}, 1000);
		}

		componentWillUnmount() {
			clearInterval(this.timerId);
		}

		//	this.state should be updated only using the setState method.
		tick() {
			this.setState({
				timestamp: new Date(),
			});
		}

		render() {
			return (
			<div>
				<h1>this is a clock class component.</h1>
				<h2>Time is {this.state.timestamp.toLocaleTimeString()}</h2>
			</div>
			);
		}
	}

	export { Clock };
```

- In external/other file:

```
	import { Clock } from "./components/ClassComponent1";
	<Clock></Clock>
```

---

## Lifecycle methods: (in this order)

- ### componentWillMount:

  - This will run right before the render method execution(initial render).

- ### componentDidMount:

  - The componentDidMount() method runs after the component output has been rendered to the DOM (i.e. after initial rendering).
  - This is similar to useEffect hook.

- ### componentWillReceiveProps(nextProps):

  - This runs whenever the component receives new props. i.e. When ever the prop value changes from parent component.

- ### shouldComponentUpdate(nextProps, nextState):

  - This is executed before the component is rerendered.
  - Here based on certain logic true or false can be returned based on which the component rerenders.

- ### componentWillUpdate(nextProps, nextState):

  - This runs before the render method and after the shouldComponentUpdate method, if the latter returns true.

- ### componentDidUpdate(prevProps, prevState):

  - This runs after the component is rendered and DOM is updated.

- ### componentWillUnmount:
  - The componentWillUnmount() method runs after the component has been removed from the DOM due to routing or any other logic.
  - This is similar to the return (cleanup) function in useEffect.

---

## Second form of setState():

- Instead of accepting an object, this accepts a callback function.
- This is useful if you want to update the state on top of the previous state value.
- Example:

```
	this.setState(function(state, props) {
		return {
			counter: state.counter + props.increment
		};
	});
```

---

## Getting latest state immediately after setState:

- The setState method takes in a callback as the second param, which gets executed after setting the state.
- So in this callback the latest state after update can be accessed before the Component is rendered.
- onclick listener.

```
changeName() {
	this.setState({ name: "avg" }, () => {
		console.log(this.state.name); // output: avg
	});
}
```

---

## In setState() the new updates are merged:

- If there are multiple variables tracked in a state and while updating any one variable, there is no need to list the other variables.
- Meaning, updating any one variable in a state can be done independently.
- If there are posts and comments in state, each of them can be independently updated. There is no need to list the whole state like done in functional component state update(shown below).
- In functional component:

```
	const handleInputChange = (e) => {
		setInputData({ ...inputData, posts: value });	//	Other values needs to be spread and then new data is updated.
	};
```

- In class component:

```
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			comments: []
		};
	}
	componentDidMount() {
		fetchPosts().then(response => {
			this.setState({
				posts: response.posts	// updating only posts in setState will not affect the comments.
			});
		});

		fetchComments().then(response => {
			this.setState({
				comments: response.comments	//	updating only comments in setState will not affect the posts.
			});
		});
	}
```

---

## Handling events:

- Add listener to the element and pass a method that gets called when event is triggered.
- Two ways of passing the method to the listener,

  - Directly passing the handler function to event. Even if no param is passed, by default react event is available for the called function.\

  ```
  	onClick={this.deleteRow}
  ```

  - Passing a callback function and calling the handler inside it. This is used incase the event data or any other property has to be passed to the handler method.

  ```
  	onClick={(e) => this.deleteRow(id, e)}
  ```

  - Binding the `this` inline

  ```
  	onClick={this.deleteRow.bind(this, id)}
  ```

- To change the state from a event handler function,
  - It should either be called inside a callback function. This syntax ensures `this` is bound within eventHandler function.
  - Or if method is directly passed to the event, then `this` has to be bound to the eventHandler function in the constructor.\
    `this.toggleSwitchState1 = this.toggleSwitchState1.bind(this);`

---

## Note:

- No need to use let, const and var in a class component. `this.variableName` and direct function names.
- `this.props`, `this.state`, `this.setState()` are reserved by react.
- props has to be passed to the parent class via super(props).
- Only `setState()` will re-render a class component. Directly changing the state like `this.state.timestamp = new Date()` will not re-render the component with new data.
- The only place where you can assign `this.state` is in the constructor.
- State in class component needs to be an object.
