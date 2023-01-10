import styles from "./App.module.scss";
import { Outlet, useLocation } from "react-router-dom";

const appRoutes = ["/app", "/app/"];

const App = () => {
  const location = useLocation();
  const renderApp = () => {
    if (appRoutes.includes(location.pathname)) {
      return <h2 className="page-heading">App page</h2>;
    }
    return null;
  };

  console.log(process.env.ENVKEY1);
  console.log(process.env.flag1);

  return (
    <div className={`${styles.app}`}>
      {renderApp()}
      <Outlet />
    </div>
  );
};

export default App;
