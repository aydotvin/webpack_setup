import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

const index = () => {
	return (
		<div>
			<ClickCounter age={89} />
			<hr />
			<HoverCounter age={88} />
			<hr />
		</div>
	);
};

export default index;
