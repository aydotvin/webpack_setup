## What is react?

-   One of the most popular JS library that was lauched to public in 2011 by facebook.
-   This is used to build front end application in a more efficient manner by looking at the ui as individual components and grouping them in the end to make the complete frontend of an application.
-   These components are built in such a way that they can be reused in multiple places without duplication of ui code.
-   Unidirectional data flow. Parent to child components.

## Virtual DOM vs Real DOM:

-   Virtual DOM is like a document online > it is light weight and can be edited easily.. And once the document looks ready we can print it out onto a paper.
-   Real DOM is the paper here, hard/costly to make frequent edits.
-   React uses a render method, that identifies the changes done to the virtual DOM and makes those specific changes to the Real DOM.

## React advantages:

-   easy to implement into any project > learning curve is not that steep
-   component architecture will help in reusing the same components in multiple places by passing the required data to the components.
-   virtual dom helps in updating only the specific components that require update instead of reloading the entire page again.
    -   any new change in the virtual dom is compared with the original copy/snapshot of the virtual dom and checks which specific component needs update and goes and replaces that dom node with the updated dom node
-   large number of supported libraries helps in selecting custom tools for specific purposes.
-   jsx syntax is very convenient and easy to understand and get started with. development process will be faster with react than other frameworks.
-   jsx is a combination of html like elements mixed with js code, which makes it easier to read and understand while building components.

## React disadvantages:

-   React doesnot contain all the functionalities required to build a frontend app and for this reason it relies on third party packages. So one will also need to know how to work with external packages to develop a proper frontend experience.

## Unidirectional/top-down flow of data:

-   Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree.
-   A component's state is local and only that component can set/change it.
-   A component may choose to pass its state down as props to its child components.
    -   The child component will not know if this data in the props came from the parent's state or property or hand typed.

## Project structure:

```
	src
	-	assets							//	all the images and gifs
	-   components
	    -   inputHelper					//  each form elements with dynamic attribute values (class, id, text, etc).. Also custom attributes from an object..
	        -   InputText.js
	        -   InputPassword.js
	        -   InputSelect.js
	        -   ...
	    -   common          			//  common components like footer, header, loader, etc..
	        -   Header.js
	        -   Footer.js
	        -   ...
	    -   feature1
	        -   feature1Component_1.js
	        -   feature1Component_2.js
	        -   ...
	    -   feature2
	        -   feature2Component_1.js
	        -   feature2Component_2.js
	        -   ...
	    -	App.js						//	all components come inside this component.. navbar and footer will be added only in this..
	-   model(s)              			//  for all the methods that methods that make server API calls..
	    -   feature1Apis.js
	    -   feature2Apis.js
	    -   ...
	-   service(s)          			//  for handling all the logics of components before calling model files to make server API calls..
	    -   feature1Service.js
	    -   feature2Service.js
	-	state
        -   actions
            -	actions1.js
			-	actions2.js
			-	...
		-	reducers
			-	reducer1.js             //  default exports or multiple named exports from the same file.
			-	reducer2.js
			-	...
			-	index.js				//	combine all the reducers here..
		-	actionTypes.js				//	For storing all the action type constants..
		-	store.js					//	import the combined reducers and create a store. Also persist the store here..
	-   helper(s)           			//  utility methods and validators..
	-   language(s)
	    -   defaultLang.js 				//  All the language exported from here..
	-   styles
	    -   external        			//  For external css files like bootstrap.min.css
	    -   styles.css					//  All the global styles in here.. Import these files in index.js..
	-   index.js
	-   routes.js
```

## IMPORT-EXPORT of component:

```
	Functional component:
		Export:
			function Home(){
				...
			}
			export default Home;

		Import:
			import Home from "./Home";
			<Home></Home>
	_________________________________________________________________________________________________________________
	OR

	Functional component:
		Export:
			const App = () => {
			  return (
				<div>...</div>
			  );
			};
			export { App };

		Import:
			import { App } from "./App";
			<App></App>
	_________________________________________________________________________________________________________________
	OR

	Class component:
		Export:
			import React, { Component } from "react";
			class ClassComponent1 extends Component {	// OR class ClassComponent1 extends React.Component {
			  render() {
				return (
				  <div>
					<h2>this is a class component. update v1</h2>
				  </div>
				);
			  }
			}
			export { ClassComponent1 };

		Import:
			import { ClassComponent1 } from "./components/ClassComponent1";
			<ClassComponent1></ClassComponent1>

	_________________________________________________________________________________________________________________

	Export can also include an alias:
		export { Clock as ClockClass };	// OR export { Clock, name as nama };
		import { ClockClass } from "./components/ClockClassComponent";
	_________________________________________________________________________________________________________________

	NOTE:
		The above export are named exports, which means the two files are coupled and change in exporting file will require change in importing file.
		Where as by using default exports this coupling can be prevented. Example shown below.

	Export:
		const ClockFunc = (props) => {
		  ...
		};
		export default ClockFunc;

	Import:
		import X from "./components/ClockFunctionalComponent";

	In this way, the export name can be changed anytime and that does not affect  the import file name.
```

## Props:

```
	Props:
		Parent Component:
			<>
			  <Navbar superman="Thor" batman="Ironman"></Navbar>	//	class component
			  {children}
			  <Footer superman="Thor" batman="Ironman"></Footer>	//	functional component
			</>

		Accessing props - Class component:
			class AppClass extends React.Component {
				constructor(props1) {								//	If constructor is there, then super has to be called and props has to be passed.
					super(props1);									//	Here the props name can be anything and the same name must be passed to super()
					console.log(this.props);
				}
				componentDidMount() {
					console.log(this.props);						//	But while accessing the props anywhere outside the constructor, this.props only has to be used.
				}
				render() {
					return <h1>hello {this.props.batman}</h1>;		//	output: hello Ironman
				}
			}

		Accessing props - Functional component:
			function Footer(someName) {
				console.log(someName.batman);
				console.log("hmm1");
				return (<footer>...</footer>);
			}
```

## Note:

-   A component must either return a jsx element or null.
-   Input field value will always be equal to state value... as input is changed > state is updated > and that shows up in the input field value..
-   useEffect is used in the outermost component to setup event listeners, make ajax calls to get additional data and stuff like that when the component mounts..
-   useEffect dependency runs when ever the dependency gets changed. It could be state or prop data..
-   Returning a arrow function within useEffect will run the clean up code when that component is unmounted.. To prevent memory leaks and unnecesary connections to external APIs.
-   Always start component names with a capital letter. React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.
-   children is a reserved keyword under props. If any element/text is present within a called component, all that text/elements will be available to the called component via propss.children property.
-   No limitations to what you can pass as props in react. string, numbers, objects, arrays, functions, other components, etc.
-   To reuse non-UI functionality between components, extract it into a separate JavaScript feature. The components may import it and use that function, object, or a class, without extending it.
-   Inline styles should be inside an object. <h1 style={{color: "red", propertyKey: "propertyValue"}}>Hello Style!</h1>
-   To change the starting file for react from index.js to anything else:
    index.js will have _ReactDOM.render(<Home></Home>, document.getElementById("root"));_ line.
    With everything deleted, create an "App.js" in src folder. (Note: will have to change the path in project's path file.)
    Run "npm run eject" to get "config" and "scripts" folder.
    Go to "config > paths.js" and search for "appIndexJs" and change its path to App.js

## Class vs functional component:

-   Class:

    -   On first mount > creates a new class obj for that component > on consequent state change the object is taken and its values are mutated and rerendered.
    -   class object (component) is mutated.

-   Functional:
    -   Not mutated. Everytime state change, a new jsx is returned.
    -   When a state is changed, react calls that particular function again with the new state data, creating a new rendered tree and replaces all the old variables with new variables(not mutate old ones).
    -   Any timers or async stuff created in previous function render will stay active unless they are destroyed in return statement of useEffect.
