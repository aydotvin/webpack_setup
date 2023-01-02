import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

type Skill = {
	id: number;
	label: string;
};

const skills = ["html", "css", "js", "ts", "react"];
const skillOptions = skills.map((skill, index) => {
	return {
		id: index + 1,
		label: skill,
	};
});

const MuiAutoComplete = () => {
	const [value, setValue] = useState<string | null>(null);
	const [skill, setSkill] = useState<Skill | null>(null);
	console.log("value", value);
	console.log("skill", skill);

	return (
		<Stack spacing={2} width="250px">
			<Autocomplete
				options={skills}
				renderInput={(params) => {
					return <TextField {...params} label="Skills" />;
				}}
				value={value}
				onChange={(ev: any, newValue: string | null) => {
					setValue(newValue);
				}}
				freeSolo
			/>

			<Autocomplete
				options={skillOptions}
				renderInput={(params) => {
					return <TextField {...params} label="Skills" />;
				}}
				value={skill}
				onChange={(ev: any, newValue: Skill | null) => {
					setSkill(newValue as Skill);
				}}
			/>
		</Stack>
	);
};

export default MuiAutoComplete;
