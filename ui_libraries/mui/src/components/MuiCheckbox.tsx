import React, { useState } from "react";
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from "@mui/material";
import { BookmarkBorder, Bookmark } from "@mui/icons-material";

const MuiCheckbox = () => {
	const [acceptTnC, setAcceptTnC] = useState(false);
	const [skills, setSkills] = useState<string[]>([]);
	console.log(skills);

	const handleTncChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setAcceptTnC(ev.target.checked);
	};

	const handleSkillChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		const index = skills.indexOf(ev.target.value);
		if (index === -1) {
			setSkills([...skills, ev.target.value]);
		} else {
			setSkills(skills.filter((skill) => skill !== ev.target.value));
		}
	};

	return (
		<Box>
			<Box>
				<FormControlLabel label="I accept terms and conditions" control={<Checkbox checked={acceptTnC} onChange={handleTncChange} />}></FormControlLabel>
			</Box>

			<Box>
				<Checkbox icon={<BookmarkBorder></BookmarkBorder>} checkedIcon={<Bookmark></Bookmark>} checked={acceptTnC} onChange={handleTncChange} color="success" />
			</Box>

			<Box>
				<FormControl>
					<FormLabel>Skills</FormLabel>
					<FormGroup row>
						<FormControlLabel
							label="HTML"
							value="html"
							control={<Checkbox checked={skills.includes("html")} onChange={handleSkillChange} size="small" color="warning" />}
						/>
						<FormControlLabel
							label="CSS"
							value="css"
							control={<Checkbox checked={skills.includes("css")} onChange={handleSkillChange} size="small" color="warning" />}
						/>
						<FormControlLabel
							label="Javascript"
							value="javascript"
							control={<Checkbox checked={skills.includes("javascript")} onChange={handleSkillChange} size="small" color="warning" />}
						/>
					</FormGroup>
				</FormControl>
			</Box>
		</Box>
	);
};

export default MuiCheckbox;
