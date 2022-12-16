import Card from "../card/Card";
import styles from "./Board.module.css";

const Board = ({ cardItems = [], setCardItems }) => {
	const addAnotherCard = () => {
		const cardId = cardItems.length + 1;
		const cardName = `Card ${cardId}`;
		const cardState = "A";
		setCardItems([...cardItems, { id: cardId, name: cardName, state: cardState }]);
	};

	const handleOnDrop = (ev) => {
		const dropTarget = ev.target.closest(".dropTarget");
		const droppedState = dropTarget.getAttribute("data_state");
		const draggedItemData = JSON.parse(ev.dataTransfer.getData("draggedItemData"));
		const currentItemState = draggedItemData.state;
		console.log("currentItemState", currentItemState);
		console.log("droppedState", droppedState);

		if (droppedState !== null && currentItemState !== droppedState) {
			updateCardStatus(draggedItemData, droppedState);
		}
	};

	const handleOnDragOver = (ev) => {
		ev.stopPropagation();
		ev.preventDefault();
	};

	const handleOnDragEnter = (ev) => {
		//	Modify the styles of the container if requried.
	};

	const updateCardStatus = (itemData, droppedState) => {
		const newCardItems = cardItems.map((eachCard) => {
			if (eachCard.id === itemData.id) {
				return { ...eachCard, state: droppedState };
			}
			return eachCard;
		});

		// console.log("newCardItems", newCardItems);
		setCardItems(newCardItems);
	};

	const getBoardUI = () => {
		if (cardItems.length > 0) {
			return (
				<div className={`${styles.columns}`}>
					<div className={`${styles.state} dropTarget`} data_state="A" onDrop={handleOnDrop} onDragOver={handleOnDragOver} onDragEnter={handleOnDragEnter}>
						{cardItems.map((card, index) => {
							if (card.state === "A") {
								return <Card key={index} cardData={card} />;
							}
							return null;
						})}
					</div>
					<div className={`${styles.state} dropTarget`} data_state="B" onDrop={handleOnDrop} onDragOver={handleOnDragOver} onDragEnter={handleOnDragEnter}>
						{cardItems.map((card, index) => {
							if (card.state === "B") {
								return <Card key={index} cardData={card} />;
							}
							return null;
						})}
					</div>
				</div>
			);
		}
		return <p>No cards available.</p>;
	};

	return (
		<div className={`${styles.board}`}>
			<div className={`${styles.heading}`}>
				<h2>Board</h2>
				<button className={`${styles.addCardButton}`} onClick={addAnotherCard}>
					Add Another Card
				</button>
			</div>
			{getBoardUI()}
		</div>
	);
};

export default Board;
