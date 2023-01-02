import { Box, TextField, MenuItem, Stack } from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
	const [country1, setCountry1] = useState<string>();
	const [country2, setCountry2] = useState<string[]>([]);
	console.log("country1", country1);
	console.log("country2", country2);

	const handleCountryChange1 = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setCountry1(ev.target.value as string);
	};
	const handleCountryChange2 = (ev: React.ChangeEvent<HTMLInputElement>) => {
		const value = ev.target.value;
		const tempStateData = typeof value === "string" ? value.split(",") : value;
		setCountry2(tempStateData);
	};

	return (
		<Stack spacing={4}>
			<Box width="250px">
				<TextField label="Select Country" select value={country1} onChange={handleCountryChange1} fullWidth>
					<MenuItem value="in">India</MenuItem>
					<MenuItem value="us">US</MenuItem>
					<MenuItem value="au">Aus</MenuItem>
				</TextField>
			</Box>

			<Box width="250px">
				<TextField label="Multi Select Country" select value={country2} onChange={handleCountryChange2} fullWidth SelectProps={{ multiple: true }}>
					<MenuItem value="in">India</MenuItem>
					<MenuItem value="us">US</MenuItem>
					<MenuItem value="au">Aus</MenuItem>
				</TextField>
			</Box>

			<Box width="250px">
				<TextField
					label="Multi Select Country"
					select
					value={country2}
					onChange={handleCountryChange2}
					fullWidth
					SelectProps={{ multiple: true }}
					size="small"
					color="warning"
					helperText="Please select at least one country."
				>
					<MenuItem value="in">India</MenuItem>
					<MenuItem value="us">US</MenuItem>
					<MenuItem value="au">Aus</MenuItem>
				</TextField>
			</Box>
		</Stack>
	);
};

export default MuiSelect;
