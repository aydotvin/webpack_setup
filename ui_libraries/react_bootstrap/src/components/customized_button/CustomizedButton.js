import Button from "react-bootstrap/Button";

const CustomizedButton = () => {
	const style = (
		<style type="text/css">
			{`
			.btn-success{
				background-color: red;
			}

			.btn {
				border: 2px dashed yellow;
			}

			.btn:hover {
				border: 2px dashed pink;
			}
		`}
		</style>
	);

	return (
		<div className="mb-3">
			{style}
			<Button variant="success">Hello</Button>
		</div>
	);
};

export default CustomizedButton;
