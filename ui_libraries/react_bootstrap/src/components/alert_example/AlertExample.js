import { useState, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const AlertExample = () => {
	const [show, setShow] = useState(true);

	const handleShowAlert = useCallback(() => {
		setShow(true);
	}, []);

	const handleHideAlert = useCallback(() => {
		setShow(false);
	}, []);

	return (
		<div>
			<Alert show={show} variant="success">
				<Alert.Heading>How's it going?!</Alert.Heading>
				<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
				<hr />
				<div className="d-flex justify-content-end">
					<Button onClick={handleHideAlert} variant="success">
						Close me y'all!
					</Button>
				</div>
			</Alert>

			{!show && <Button onClick={handleShowAlert}>Show Alert</Button>}
		</div>
	);
};

export default AlertExample;
