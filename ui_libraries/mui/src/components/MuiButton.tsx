import { useState } from "react";
import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const MuiButton = () => {
	const [formats1, setFormats1] = useState<string[]>([]);
	const [formats2, setFormats2] = useState<string | null>(null);
	console.log(formats1);
	console.log(formats2);

	const handleFormatChange1 = (ev: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
		setFormats1(updatedFormats);
	};

	const handleFormatChange2 = (ev: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => {
		setFormats2(updatedFormats);
	};

	return (
		<Stack spacing={4}>
			<Stack spacing={2} direction="row">
				<Button variant="text" href="https://www.google.com" target={"_blank"}>
					Button text
				</Button>
				<Button variant="contained">Button contained</Button>
				<Button variant="outlined">Button outlined</Button>
			</Stack>

			<Stack spacing={2} direction="row">
				<Button variant="contained" color="primary">
					primary
				</Button>
				<Button variant="contained" color="secondary">
					secondary
				</Button>
				<Button variant="contained" color="success">
					success
				</Button>
				<Button variant="text" color="error">
					error
				</Button>
				<Button variant="outlined" color="info">
					info
				</Button>
				<Button variant="contained" color="warning">
					warning
				</Button>
			</Stack>

			<Stack display="block" spacing={2} direction="row">
				<Button variant="contained" color="primary" size="small">
					small
				</Button>
				<Button variant="contained" color="secondary" size="medium">
					medium
				</Button>
				<Button variant="contained" color="success" size="large">
					large
				</Button>
			</Stack>

			<Stack display="block" spacing={2} direction="row">
				<Button variant="contained" startIcon={<SendIcon />}>
					Send
				</Button>
				<Button variant="contained" endIcon={<SendIcon />}>
					Send
				</Button>
				<IconButton aria-label="send" color="secondary" size="small">
					<SendIcon />
				</IconButton>
				<IconButton aria-label="send" color="success" size="medium">
					<SendIcon />
				</IconButton>
				<IconButton aria-label="send" color="warning" size="large">
					<SendIcon />
				</IconButton>
			</Stack>

			<Stack display="block" spacing={2} direction="row">
				<Button variant="contained">Button with shadow</Button>
				<Button variant="contained" disableElevation>
					Button without shadow
				</Button>
			</Stack>

			<Stack display="block" spacing={2} direction="row">
				<Button variant="contained">Button with ripple</Button>
				<Button variant="contained" disableRipple disableFocusRipple>
					Button without ripple
				</Button>
			</Stack>

			<Stack display="block" spacing={2} direction="row">
				<Button
					variant="contained"
					onClick={() => {
						alert("Thanks.");
					}}
				>
					Click Me
				</Button>
			</Stack>

			<Stack direction="row">
				<ButtonGroup variant="contained" color="warning" aria-label="Action button group">
					<Button>Left Button</Button>
					<Button color="success">Center Button</Button>
					<Button>Right Button</Button>
				</ButtonGroup>
			</Stack>
			<Stack direction="row">
				<ButtonGroup variant="outlined" orientation="vertical">
					<Button
						onClick={() => {
							alert("Left clicked");
						}}
					>
						Button 1
					</Button>
					<Button>Button 2</Button>
					<Button>Button 3</Button>
				</ButtonGroup>
			</Stack>
			<Stack direction="row">
				<ButtonGroup
					variant="text"
					size="large"
					onClick={() => {
						alert("Entire group clicked");
					}}
				>
					<Button>Left Button</Button>
					<Button>Center Button</Button>
					<Button>Right Button</Button>
				</ButtonGroup>
			</Stack>

			<Stack direction="row">
				<ToggleButtonGroup aria-label="text formatting" value={formats1} onChange={handleFormatChange1} size="small" color="success">
					<ToggleButton value={"bold"} aria-label="bold">
						<FormatBoldIcon></FormatBoldIcon>
					</ToggleButton>
					<ToggleButton value={"italic"} aria-label="italic" color="warning" size="large">
						<FormatItalicIcon></FormatItalicIcon>
					</ToggleButton>
					<ToggleButton value={"underlined"} aria-label="underlined">
						<FormatUnderlinedIcon></FormatUnderlinedIcon>
					</ToggleButton>
				</ToggleButtonGroup>
			</Stack>

			<Stack direction="row">
				<ToggleButtonGroup aria-label="text formatting" value={formats2} onChange={handleFormatChange2} size="small" color="success" orientation="vertical" exclusive>
					<ToggleButton value={"bold"} aria-label="bold">
						<FormatBoldIcon></FormatBoldIcon>
					</ToggleButton>
					<ToggleButton value={"italic"} aria-label="italic" color="warning" size="large">
						<FormatItalicIcon></FormatItalicIcon>
					</ToggleButton>
					<ToggleButton value={"underlined"} aria-label="underlined">
						<FormatUnderlinedIcon></FormatUnderlinedIcon>
					</ToggleButton>
				</ToggleButtonGroup>
			</Stack>
		</Stack>
	);
};

export default MuiButton;
