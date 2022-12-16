import { useState } from "react";
import styles from "./App.module.css";
import Board from "./components/board/Board";

const initialCardItems = [
	{
		id: 1,
		name: "Card 1",
		state: "A",
	},
	{
		id: 2,
		name: "Card 2",
		state: "B",
	},
];

function App() {
	const [cardItems, setCardItems] = useState(initialCardItems);

	return (
		<div className={`${styles.app}`}>
			<div className={`${styles.note}`}>
				<span className={`${styles.subHeading}`}>Note:</span>
				<ul>
					<li>Start dragging cards from one column to another.</li>
					<li>Add new cards if required.</li>
					<li>Refresh page to reset the data.</li>
					<li>Check the README.md for clear understanding.</li>
				</ul>
			</div>
			<Board cardItems={cardItems} setCardItems={setCardItems} />
		</div>
	);
}

export default App;
