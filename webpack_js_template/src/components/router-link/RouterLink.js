import { Link } from "react-router-dom";
import styles from "./RouterLink.module.scss";

const RouterLink = ({ to, children, props }) => {
  if (to.length) {
    return (
      <Link to={to} className={`${styles.routerLink}`} {...props}>
        {children}
      </Link>
    );
  }
};

export default RouterLink;
