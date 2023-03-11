import styles from "./TopNav.module.scss";
import RouterLink from "Component/routerLink/RouterLink";

const TopNav = () => {
  return (
    <nav className={`${styles.topnav}`}>
      {/* <RouterLink to="/">Home</RouterLink> */}
      <RouterLink to="/counter">Counter</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      {/* <RouterLink to="/app/counter">Counter</RouterLink> */}
      {/* <RouterLink to="/app/profile">Profile</RouterLink> */}
    </nav>
  );
};

export default TopNav;
