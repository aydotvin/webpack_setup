import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

const index = () => {
	return (
		<div>
			<ClickCounter age={23} />
			<hr />
			<HoverCounter age={97} />
			<hr />
		</div>
	);
};

export default index;
