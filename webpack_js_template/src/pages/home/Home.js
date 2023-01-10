import { Outlet, useLocation } from "react-router-dom";

import TopNav from "Component/topnav/TopNav";
import styles from "./Home.module.scss";

const Home = () => {
  const location = useLocation();
  const renderHome = () => {
    if (location.pathname == "/") {
      return <h2 className="page-heading">Home page</h2>;
    }
    return null;
  };

  return (
    <div>
      <TopNav />
      <main className={`${styles.main}`}>
        {renderHome()}
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
