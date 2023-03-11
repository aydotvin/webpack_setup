import { Link } from "react-router-dom";
import styles from "./RouterLink.module.scss";

type RouterLinkProps = {
  to: string;
  children: React.ReactNode;
  props?: React.HTMLAttributes<HTMLElement>;
};

const RouterLink = ({ to, children, props }: RouterLinkProps) => {
  if (to.length) {
    return (
      <Link to={to} className={`${styles.routerLink}`} {...props}>
        {children}
      </Link>
    );
  }
  return null;
};

export default RouterLink;
