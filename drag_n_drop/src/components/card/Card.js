import { useState } from "react";
import styles from "./Card.module.css";

const Card = ({ cardData = {} }) => {
	const [cardIsBeingDragged, setCardIsBeingDragged] = useState(false);

	const handleOnDragStart = (ev) => {
		let draggedItemData = ev.target.getAttribute("data_card_json") || "{}";
		ev.dataTransfer.setData("draggedItemData", draggedItemData);
		setCardIsBeingDragged(true);
	}

	const handleOnDragEnd = () => {
		setCardIsBeingDragged(false);
		// console.log("drag stopped");
	}

	return (
		<div
			className={`${styles.card} ${cardIsBeingDragged ? styles.reducedOpacity : ""}`}
			data_card_json={JSON.stringify(cardData)}
			draggable
			onDragStart={handleOnDragStart}
			onDragEnd={handleOnDragEnd}
		>
			<h3>{cardData.name}</h3>
			<h3>State - {cardData.state}</h3>
		</div>
	);
};

export default Card;
