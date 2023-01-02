import { Box, FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";

const MuiSwitch = () => {
	const [checked, setChecked] = useState(false);
	console.log("checked", checked);

	const handleSwitchChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(ev.target.checked);
	};

	return (
		<Box>
			<Box>
				<FormControlLabel label="Dark mode" control={<Switch checked={checked} onChange={handleSwitchChange} />} />
			</Box>

			<Box>
				<Switch checked={checked} onChange={handleSwitchChange} size="small" />
			</Box>
			
			<Box>
				<Switch checked={true} color="warning" />
			</Box>
		</Box>
	);
};

export default MuiSwitch;
