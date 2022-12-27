import { useState, useCallback } from "react";
import { MDBValidation, MDBInput, MDBBtn, MDBCheckbox, MDBValidationItem } from "mdb-react-ui-kit";

const initialFormValues = {
	firstName: "",
	lastName: "",
	email: "",
	city: "",
	state: "",
	zip: "",
	username: "",
	tnc: false,
};

const FormValidation = () => {
	const [formValues, setFormValues] = useState(initialFormValues);
	const { firstName, lastName, email, city, state, zip, username, tnc } = formValues;

	const handleInputChange = (ev) => {
		const { name, value } = ev.target;
		console.log(formValues);
		if (ev.target.type === "checkbox") {
			setFormValues({ ...formValues, [name]: ev.target.checked });
		} else {
			setFormValues({ ...formValues, [name]: value });
		}
	};

	return (
		<MDBValidation className="row g-3" style={{ marginTop: "50px" }}>
			<div
				style={{
					margin: "auto",
					padding: "15px",
					maxWidth: "400px",
					alignContent: "center",
				}}
			>
				<MDBValidationItem feedback="Please enter the first name." invalid>
					<MDBInput value={firstName} name="firstName" onChange={handleInputChange} id="firstName" required label="First Name" />
				</MDBValidationItem>
				<br />
				<MDBValidationItem feedback="Please enter the last name." invalid>
					<MDBInput value={lastName} name="lastName" onChange={handleInputChange} id="lastName" required label="Last Name" />
				</MDBValidationItem>
				<br />
				<div className="input-group has-validation">
					<span className="input-group-text">@</span>
					<input type="text" className="form-control" name="username" placeholder="Username" value={username} required onChange={handleInputChange} />
					<div className="invalid-feedback">Please choose unique username</div>
				</div>
				<br />
				<MDBValidationItem feedback="Please enter the city." invalid>
					<MDBInput value={city} name="city" onChange={handleInputChange} id="city" required label="City" />
				</MDBValidationItem>
				<br />
				<MDBValidationItem feedback="Please enter the state." invalid>
					<MDBInput value={state} name="state" onChange={handleInputChange} id="state" required label="State" />
				</MDBValidationItem>
				<br />
				<MDBValidationItem feedback="Please enter the zip code." invalid>
					<MDBInput value={zip} min={0} max={999999} maxLength={6} type="number" name="zip" onChange={handleInputChange} id="zip" required label="Zip code" />
				</MDBValidationItem>
				<br />
				<MDBValidationItem feedback="Please read and agree to the terms and conditions." invalid>
					<MDBCheckbox label="I agree to the terms and conditions" required id="tnc" name="tnc" defaultChecked={tnc} onChange={handleInputChange}></MDBCheckbox>
				</MDBValidationItem>
				<br />
				<MDBBtn type="submit" color="primary">
					Submit
				</MDBBtn>
			</div>
		</MDBValidation>
	);
};

export default FormValidation;
