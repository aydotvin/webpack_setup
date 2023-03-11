import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import TopNav from "./components/topnav/TopNav";

const App = () => {
  console.log(process.env.ENVKEY1);
  console.log(process.env.flag1);

  return (
    <div className={`flex-col ${styles.app}`}>
      <TopNav />
      <Outlet />
    </div>
  );
};

export default App;
