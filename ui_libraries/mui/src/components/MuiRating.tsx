import { Stack, Rating } from "@mui/material";
import React, { useState } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const MuiRating = () => {
	const [rating, setRating] = useState<number | null>(3);

	const handleRatingChange = (ev: React.ChangeEvent<{}>, newValue: number | null) => {
		console.log(newValue);

		setRating(newValue);
	};
	return (
		<Stack spacing={2}>
			<Rating value={rating} onChange={handleRatingChange} precision={0.1} size="small"></Rating>

			<Rating value={rating} onChange={handleRatingChange} precision={0.1} size="medium"></Rating>

			<Rating value={rating} onChange={handleRatingChange} precision={0.1} size="large"></Rating>

			<Rating
				value={rating}
				onChange={handleRatingChange}
				precision={0.1}
				icon={<Favorite color="error" />}
				emptyIcon={<FavoriteBorder color="success" />}
				readOnly
				highlightSelectedOnly
			></Rating>
		</Stack>
	);
};

export default MuiRating;
