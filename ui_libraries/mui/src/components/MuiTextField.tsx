import { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const MuiTextField = () => {
	const [value, setValue] = useState("");

	return (
		<Stack spacing={4}>
			<Stack spacing={2} direction="row">
				<TextField label="Default input"></TextField>
				<TextField label="Outlined input" variant="outlined"></TextField>
				<TextField label="Filled input" variant="filled"></TextField>
				<TextField label="Standard input" variant="standard"></TextField>
			</Stack>

			<Stack spacing={2} direction="row">
				<TextField label="Small input" size="small" color="error"></TextField>
				<TextField label="Medium input" size="medium" color="success"></TextField>
				<TextField label="Info color" color="info"></TextField>
				<TextField label="Default color"></TextField>
			</Stack>

			<Stack spacing={2} direction="row">
				<TextField label="Username" required></TextField>
				<TextField label="OTP" required helperText="Do not share the OTP to anyone"></TextField>
				<TextField label="Password" type="password"></TextField>
				<TextField label="Read only input" value="fixed value" type="text" InputProps={{ readOnly: true }}></TextField>
				<TextField label="Disabled input" type="password" disabled></TextField>
			</Stack>

			<Stack spacing={2} direction="row">
				<TextField label="Amount" type="number" required InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}></TextField>
				<TextField label="Weight" required InputProps={{ endAdornment: <InputAdornment position="end">Kg</InputAdornment> }}></TextField>
			</Stack>

			<Stack spacing={2} direction="row">
				<TextField
					label="Password"
					required
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Visibility></Visibility>
							</InputAdornment>
						),
					}}
				></TextField>
				<TextField
					label="OTP"
					required
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<VisibilityOff></VisibilityOff>
							</InputAdornment>
						),
					}}
				></TextField>
			</Stack>

			<Stack spacing={2} direction="row">
				<TextField
					label="Password"
					value={value}
					onChange={(ev) => {
						setValue(ev.target.value);
					}}
					required
					error={!value}
					helperText={!value ? "Required" : "Do not share it with anyone."}
				></TextField>
			</Stack>
		</Stack>
	);
};

export default MuiTextField;
