import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from "@mui/material";
import React, { useState } from "react";

const MuiRadioButton = () => {
	const [value, setValue] = useState("");

	const handleExperienceChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setValue(ev.target.value);
	};

	return (
		<Box>
			<FormControl error>
				<FormLabel id="job-experience-group-label">Years of Experience</FormLabel>
				<RadioGroup name="job-experience-group" aria-labelledby="job-experience-group-label" value={value} onChange={handleExperienceChange} row>
					<FormControlLabel control={<Radio size="small" color="warning" />} label="0-2" value="0-2" />
					<FormControlLabel control={<Radio size="small" color="secondary" />} label="3-5" value="3-5" />
					<FormControlLabel control={<Radio size="small" color="warning" />} label="6-10" value="6-10" />
				</RadioGroup>

				<FormHelperText>Invalid selection</FormHelperText>
			</FormControl>
		</Box>
	);
};

export default MuiRadioButton;
