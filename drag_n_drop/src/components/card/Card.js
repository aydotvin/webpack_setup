import { useState } from "react";
import styles from "./Card.module.css";

const Card = ({ cardData = {} }) => {
	const [cardIsBeingDragged, setCardIsBeingDragged] = useState(false);

	return (
		<div
			className={`${styles.card} ${cardIsBeingDragged ? styles.reducedOpacity : ""}`}
			data_card_json={JSON.stringify(cardData)}
			draggable
			onDragStart={(ev) => {
				let draggedItemData = ev.target.getAttribute("data_card_json") || "{}";
				ev.dataTransfer.setData("draggedItemData", draggedItemData);
				setCardIsBeingDragged(true);
			}}
			onDragEnd={() => {
				setCardIsBeingDragged(false);
				// console.log("drag stopped");
			}}
		>
			<h3>{cardData.name}</h3>
			<h3>State - {cardData.state}</h3>
		</div>
	);
};

export default Card;
