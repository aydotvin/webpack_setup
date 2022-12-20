import React from "react";

class ClassComponent extends React.Component {
	constructor() {
		super();
		this.state = { age: 23, count: 98 };
		this.increaseAge = this.increaseAge.bind(this);
		this.increaseCount = this.increaseCount.bind(this);
	}

	increaseAge = () => {
		console.log("increase age clicked");
		this.setState({
			age: this.state.age + 1,
		});
	};
	increaseCount = () => {
		console.log("increase count clicked");
		this.setState({
			count: this.state.count + 1,
		});
	};

	render() {
		return (
			<div className="row">
				<div className="col-md-12">
					<h2>class component.</h2>
					<h2>age is {this.state.age}</h2>
					<h2>count is {this.state.count}</h2>
					<button onClick={this.increaseAge}>increase age</button>
					<button onClick={this.increaseCount}>increase count</button>
				</div>
			</div>
		);
	}
}

export default ClassComponent;
