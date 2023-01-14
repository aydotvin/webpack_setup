import ReactDom from "react-dom/client";
import "Style/index.scss";
import Router from "./routes/router";
import store from "./state/store";
import { Provider } from "react-redux";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router />
  </Provider>,
);
