import styles from "./TopNav.module.scss";
import RouterLink from "Component/router-link/RouterLink";

const TopNav = () => {
	return (
		<nav className={`${styles.topnav}`}>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/app">App</RouterLink>
			<RouterLink to="/about">About</RouterLink>
			<RouterLink to="/app/counter">Counter</RouterLink>
		</nav>
	);
};

export default TopNav;
