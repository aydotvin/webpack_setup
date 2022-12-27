import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AutoLayoutExample() {
	return (
		<Container style={{backgroundColor: "green"}}>
			<Row>
				<Col style={{border: "1px solid red"}}>1 of 2</Col>
				<Col style={{border: "1px solid red"}}>2 of 2</Col>
			</Row>
			<Row>
				<Col style={{border: "1px solid red"}}>1 of 3</Col>
				<Col style={{border: "1px solid red"}}>2 of 3</Col>
				<Col style={{border: "1px solid red"}}>3 of 3</Col>
			</Row>
		</Container>
	);
}

export default AutoLayoutExample;
