import { Outlet, useLocation } from "react-router-dom";
import styles from "./App.module.scss";
import ghost2 from "Asset/ghost2.jpg";

const appRoutes = ["/app", "/app/"];

const App = () => {
  const location = useLocation();
  const renderApp = () => {
    if (appRoutes.includes(location.pathname)) {
      return (
        <>
          <h2 className="page-heading">App page</h2>
          <img src={ghost2} alt="test image" className={`${styles.image}`} />
        </>
      );
    }
    return null;
  };

  // console.log(process.env.ENVKEY1);
  // console.log(process.env.flag1);

  return (
    <div className={`${styles.app}`}>
      {renderApp()}
      <Outlet />
    </div>
  );
};

export default App;
