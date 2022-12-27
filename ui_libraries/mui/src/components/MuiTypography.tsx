import { Typography } from "@mui/material";

const MuiTypography = () => {
	return (
		<div>
			<Typography variant="h1">H1 heading</Typography>
			<Typography variant="h2">H2 heading</Typography>
			<Typography variant="h3" component={"h1"}>
				H3 heading
			</Typography>
			<Typography variant="h4" component={"div"}>
				H4 heading
			</Typography>
			<Typography variant="h5" gutterBottom>H5 heading</Typography>
			<Typography variant="h6">H6 heading</Typography>

			<Typography variant="subtitle1">Subtitle 1</Typography>
			<Typography variant="subtitle2">Subtitle 2</Typography>

			<Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quia!</Typography>
			<Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, natus!</Typography>
		</div>
	);
};

export default MuiTypography;
