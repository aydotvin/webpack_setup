import useGreeting from "./useGreeting";
import useForm from "./useForm";

const CustomHookComponent = () => {
	// const [greeting, setNewGreeting] = useGreeting("john");

	// const getNewGreeting = (e) => {
	// 	setNewGreeting(e.target.value);
	// };

	const initialFormData = {
		username: "",
		password: "",
	};
	const formSubmitHandler = (formDetails) => {
		console.log("calling signin api..");
		console.log(formDetails);
	};

	const { formData, handleChange, handleSubmit } = useForm({ initialFormData, formSubmitHandler });
	const { username, password } = formData;

	return (
		<div>
			<h2>custom hook</h2>
			{/* <h5>{greeting}</h5>
			<input type="text" onChange={getNewGreeting} /> */}
			<form action="get">
				<label htmlFor="username">Username</label>
				<input type="text" id="username" name="username" onChange={handleChange} value={username} />
				<label htmlFor="password">Password</label>
				<input type="password" id="password" name="password" onChange={handleChange} value={password} />
				<button type="button" onClick={handleSubmit}>
					Sign In
				</button>
			</form>
		</div>
	);
};

export default CustomHookComponent;
