- Use custom hooks for repeated actions.
- Use react query.

### Prop types:

- npm i prop-types
- After the component, add the following code.
- Data types can be found here -> https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes

```
	ComponentName.propTypes = {
		rank: PropTypes.number,
		<prop name>: <data type for prop>
	};
```

- For class component:

```
	class ReactComponent extends React.Component {
		// ...component class body here

		static propTypes = {
			rank: PropTypes.number,
			<prop name>: <data type for prop>
		}
	}
```

- Reference:
  - [Log Rocket](https://blog.logrocket.com/validating-react-component-props-with-prop-types-ef14b29963fc/)
  - [Free Code Camp](https://www.freecodecamp.org/news/how-to-use-proptypes-in-react/)

---

### Default props:

- If the default values for the props are declared using defaultProps, the propType checks can be added to the default values also.

- propType check do not happen if the default values are declared in the top itself.

- Example:

```
	const Component1 = ({ name, field = 23 }) => {
		return (
			<div>
				Hello {name}, {field}
			</div>
		);
	};
	export default Component1;

	Component1.propTypes = {
		name: PropTypes.string,
		field: PropTypes.string,    //  This check will not be applied to the 23 that is used as default. So no error will be shown.
	};

	Component1.defaultProps = {
		name: 17,       //  If defaults are declared like this, then the type check will happen for these. An error will be shown for this.
		field: "SDE",
	};
```

- For class component:

```
	class Greeting extends React.Component {
		static defaultProps = {
			name: 'stranger'
		}

		render() {
			return (
			<div>Hello, {this.props.name}</div>
			)
		}
	}
```
