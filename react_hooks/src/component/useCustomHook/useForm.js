import { useState } from "react";

const useForm = ({ initialFormData, formSubmitHandler }) => {
	const [formData, setFormData] = useState(initialFormData);

	const handleChange = (ev) => {
		let { name, value, type } = ev.target;
		value = type === "file" ? ev.target.files[0] : value;
		if (type === "file") {
			//	Convert file to base64 to store in db..
			value = "<long_string_after_conversion>";
			setFormData({ ...formData, [name]: value });
		} else {
			setFormData({ ...formData, [name]: value });
		}
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();
		formSubmitHandler(formData);
	};

	return { formData, handleChange, handleSubmit };
};

export default useForm;
